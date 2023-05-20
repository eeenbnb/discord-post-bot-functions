import postDiscordWithUrl from "../lib/discord/postWithUrl.mjs";
import getNewUser from "./getNewUser.mjs";
import getNewUserText from "./getNewUserText.mjs";

const checkNewFollowers = async (user, isStream) => {
  const items = await getNewUser(
    user.moderatorReadFollowersTokens,
    isStream[user.checkUser].startTime
  );
  const newUserText = getNewUserText(items);
  if (newUserText) {
    await postDiscordWithUrl(newUserText, user.webhookUrl);
  }
};

export default checkNewFollowers;
