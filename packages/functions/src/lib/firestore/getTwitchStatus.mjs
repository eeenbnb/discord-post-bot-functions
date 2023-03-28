import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const getTwitchStatus = async () =>
  await (
    await admin.firestore().collection("twich-status").doc("IS_STREAM").get()
  ).data();

export default getTwitchStatus;
