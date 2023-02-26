import { createRequire } from "module";
const require = createRequire(import.meta.url);

import getStreams from "./lib/twich/getStreams.mjs";
import getToken from "./lib/twich/getToken.mjs";
import postDiscord from "./lib/discord/post.mjs";
import getTwitchStatus from "./lib/firestore/getTwitchStatus.mjs";
import updateTwitchStatus from "./lib/firestore/updateTwitchStatus.mjs";

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

export const checkTwitchFunction = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async (context) => {
    const tokenResponse = await getToken(
      process.env.TWICH_CLIENT_ID,
      process.env.TWICH_CLIENT_SELECT
    );

    const streamsPresponse = await getStreams(
      process.env.TWICH_CLIENT_ID,
      tokenResponse.access_token,
      process.env.TWICH_CHECK_USER
    );

    const isStream = await getTwitchStatus();

    if (streamsPresponse.data.length > 0) {
      if (!isStream.data().data) {
        await postDiscord(process.env.TWICH_POST_START_TEXT);
      }
      await updateTwitchStatus(true);
    } else {
      if (isStream.data().data) {
        postDiscord(process.env.TWICH_POST_END_TEXT);
      }
      await updateTwitchStatus(false);
    }
    return null;
  });
