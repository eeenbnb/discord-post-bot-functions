import { createRequire } from "module";
import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getAllVideo from "../util/getAllVideo.mjs";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const updateTwitchInfomation = (admin) => {
  return functions.pubsub
    .schedule("every 60 minutes")
    .onRun(async (context) => {
      const storage = admin.storage();
      const { token } = await getTwichOAuthToken();
      const allItem = await getAllVideo(token);
      storage
        .bucket()
        .file("assets/allVideos.json")
        .save(JSON.stringify(allItem));
      return null;
    });
};
export default updateTwitchInfomation;
