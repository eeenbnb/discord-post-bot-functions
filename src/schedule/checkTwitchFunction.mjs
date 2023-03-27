import { createRequire } from "module";
const require = createRequire(import.meta.url);

import getStreams from "../lib/twich/getStreams.mjs";
import postDiscord from "../lib/discord/post.mjs";
import getTwitchStatus from "../lib/firestore/getTwitchStatus.mjs";
import updateTwitchStatus from "../lib/firestore/updateTwitchStatus.mjs";
import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getNewUser from "../util/getNewUser.mjs";
import getNewUserText from "../util/getNewUserText.mjs";

const functions = require("firebase-functions");

const checkTwitchFunction = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async (context) => {
    const { token, authorizeToken } = await (await getTwichOAuthToken()).data();

    const streamsPresponse = await getStreams(
      process.env.TWICH_CLIENT_ID,
      token,
      process.env.TWICH_CHECK_USER
    );

    const isStream = await (await getTwitchStatus()).data();

    if (streamsPresponse.data.length > 0) {
      if (!isStream.bool) {
        await postDiscord(process.env.TWICH_POST_START_TEXT);
        await updateTwitchStatus(true);
      }
    } else {
      if (isStream.bool) {
        await postDiscord(process.env.TWICH_POST_END_TEXT);

        const items = await getNewUser(authorizeToken, req.query.day);
        const newUserText = getNewUserText(items);
        if (newUserText) {
          await postDiscord(newUserText);
        }
        await updateTwitchStatus(false);
      }
      // await updateTwitchStatus(true);
    }
    return null;
  });

export default checkTwitchFunction;
