import dayjs from "dayjs";
import { createRequire } from "module";
import getTwitchStatus from "./getTwitchStatus.mjs";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

/**
 * @param {boolean} isStream
 * @param {string} user_name
 */
const updateTwitchStatus = async (isStream, user_name) => {
  const item = await getTwitchStatus();
  await admin
    .firestore()
    .collection("twich-status")
    .doc("IS_STREAM")
    .set({
      ...item,
      [user_name]: {
        isStream,
        startTime: dayjs().format("YYYY-MM-DDThh:mm:ss"),
      },
    });
};
export default updateTwitchStatus;
