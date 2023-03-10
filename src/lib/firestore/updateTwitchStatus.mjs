import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const updateTwitchStatus = async (status) => {
  await admin
    .firestore()
    .collection("twich-status")
    .doc("IS_STREAM")
    .set({ data: status });
};
export default updateTwitchStatus;
