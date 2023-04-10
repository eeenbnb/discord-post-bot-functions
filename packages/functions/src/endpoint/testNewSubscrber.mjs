import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getTwitchSubscriber from "../lib/firestore/getTwitchSubscriber.mjs";
import updateTwitchSubscriber from "../lib/firestore/updateTwitchSubscriber.mjs";
import getAllSubscriber from "../util/getAllSubscriber.mjs";
import getNewSubscriberText from "../util/getNewSubscriberText.mjs";

const testNewFollower = functions.https.onRequest(async (req, res) => {
  const { channelReadSubscriptionsTokens } = await getTwichOAuthToken();
  const items = await getAllSubscriber(channelReadSubscriptionsTokens);
  const { users: oldSubscribersIdList } = await getTwitchSubscriber();
  const newSubscriber = items.filter(
    (v) => oldSubscribersIdList.indexOf(v.user_login) < 0
  );
  const newSubscriberText = getNewSubscriberText(newSubscriber);
  const subscribersIdList = items.map((v) => v.user_login);
  await updateTwitchSubscriber(subscribersIdList);
  res.json({ text: newSubscriberText });
});
export default testNewFollower;
