import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const getTwitchSubscriber = async () =>
  await (
    await admin
      .firestore()
      .collection("twich-status")
      .doc("subscriber-user-users")
      .get()
  ).data();

export default getTwitchSubscriber;
