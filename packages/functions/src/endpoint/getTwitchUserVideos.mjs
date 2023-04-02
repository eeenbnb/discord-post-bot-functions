import { createRequire } from "module";
import getTwichOAuthToken from "../lib/firestore/getTwichOAuthToken.mjs";
import getAllVideo from "../util/getAllVideo.mjs";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getTwitchUserVideos = (admin) => {
  return functions.https.onRequest(async (req, res) => {
    const storage = admin.storage();
    const { token } = await getTwichOAuthToken();
    const allItem = await getAllVideo(token);
    storage
      .bucket()
      .file("assets/allVideos.json")
      .save(JSON.stringify(allItem));
    res.json({ allItem });
  });
};
export default getTwitchUserVideos;
