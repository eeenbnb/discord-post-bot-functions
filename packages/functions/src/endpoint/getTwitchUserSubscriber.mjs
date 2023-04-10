import { createRequire } from "module";
import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import updateTwitchSubscriber from "../lib/firestore/updateTwitchSubscriber.mjs";
import getAllSubscriber from "../util/getAllSubscriber.mjs";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getTwitchUserSubscriber = functions.https.onRequest(async (req, res) => {
  const { channelReadSubscriptionsTokens } = await getTwichOAuthToken();
  const allItem = await getAllSubscriber(channelReadSubscriptionsTokens);
  const subscribersIdList = item.map((v) => v.user_login);
  await updateTwitchSubscriber(subscribersIdList);
  res.json({ allItem });
});

export default getTwitchUserSubscriber;
