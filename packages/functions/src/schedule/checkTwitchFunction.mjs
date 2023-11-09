import { createRequire } from "module";
const require = createRequire(import.meta.url);

import getStreams from "../lib/twich/getStreams.mjs";
import postDiscord from "../lib/discord/post.mjs";
import postDiscordWithUrl from "../lib/discord/postWithUrl.mjs";
import getTwitchStatus from "../lib/firestore/getTwitchStatus.mjs";
import updateTwitchStatus from "../lib/firestore/updateTwitchStatus.mjs";
import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getAllSubscriber from "../util/getAllSubscriber.mjs";
import getNewSubscriberText from "../util/getNewSubscriberText.mjs";
import getTwitchSubscriber from "../lib/firestore/getTwitchSubscriber.mjs";
import updateTwitchSubscriber from "../lib/firestore/updateTwitchSubscriber.mjs";
import usersData from "../usersData.mjs";
import checkNewFollowers from "../util/checkNewFollowers.mjs";

const functions = require("firebase-functions");

const checkTwitchFunction = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async (context) => {
    const { token } = await getTwichOAuthToken();

    for (const user of usersData) {
      const streamsPresponse = await getStreams(
        process.env.TWICH_CLIENT_ID,
        token,
        user.checkUser
      );
      const isStream = await getTwitchStatus();

      if (streamsPresponse.data.length > 0) {
        if (!isStream[user.checkUser].isStream) {
          await postDiscordWithUrl(user.postStartText, user.webhookUrl);
          await updateTwitchStatus(true, user.checkUser);
        }
      } else {
        if (isStream[user.checkUser].isStream) {
          await postDiscordWithUrl(user.postEndText, user.webhookUrl);

          if (user.moderatorReadFollowersTokens !== "") {
            try {
              await checkNewFollowers(user, isStream);
            } catch (error) {
              await postDiscordWithUrl(
                "新規フォロー取得に失敗しました。",
                user.webhookUrl
              );
            }
          }

          if (user.channelReadSubscriptionsTokens !== "") {
            try {
              const items = await getAllSubscriber(
                user.channelReadSubscriptionsTokens
              );
              const { users: oldSubscribersIdList } =
                await getTwitchSubscriber();
              const newSubscriber = items.filter(
                (v) =>
                  oldSubscribersIdList[user.checkUser].indexOf(v.user_login) < 0
              );
              const newSubscriberText = getNewSubscriberText(newSubscriber);
              if (newSubscriberText) {
                await postDiscord(newSubscriberText);

                const subscribersIdList = items.map((v) => v.user_login);
                await updateTwitchSubscriber(subscribersIdList, user.checkUser);
              }
            } catch (error) {
              await postDiscord("新規サブスク取得に失敗しました。");
            }
          }

          await updateTwitchStatus(false, user.checkUser);
        }
      }
    }
    return null;
  });

export default checkTwitchFunction;
