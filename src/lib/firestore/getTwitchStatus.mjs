import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const getTwitchStatus = async () =>
  await admin.firestore().collection("twich-status").doc("IS_STREAM").get();

export default getTwitchStatus;
