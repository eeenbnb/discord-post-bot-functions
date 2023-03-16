import { createRequire } from "module";
const require = createRequire(import.meta.url);

import getToken from "../lib/twich/getToken.mjs";
import updateTwichOAuthToken from "../lib/firestore/updateTwichOAuthToken.mjs";

const functions = require("firebase-functions");

const checkTwitchTokens = functions.pubsub
  .schedule("0 0 * * *")
  .onRun(async (context) => {
    const tokenResponse = await getToken(
      process.env.TWICH_CLIENT_ID,
      process.env.TWICH_CLIENT_SELECT
    );

    await updateTwichOAuthToken(tokenResponse.access_token);

    return null;
  });

export default checkTwitchTokens;
