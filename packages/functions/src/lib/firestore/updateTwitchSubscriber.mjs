import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const updateTwitchSubscriber = async (users) => {
  await admin
    .firestore()
    .collection("twich-status")
    .doc("subscriber-users")
    .set({ users });
};
export default updateTwitchSubscriber;
