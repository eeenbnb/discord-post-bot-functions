import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getNewUser from "../util/getNewUser.mjs";
import getNewUserText from "../util/getNewUserText.mjs";

const testNewFollower = functions.https.onRequest(async (req, res) => {
  const { authorizeToken } = await (await getTwichOAuthToken()).data();
  const items = await getNewUser(authorizeToken, req.query.day);
  const newUserText = getNewUserText(items);
  res.json({ text: newUserText });
});
export default testNewFollower;
