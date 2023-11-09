import { createRequire } from "module";
import getTwitchSubscriber from "./getTwitchSubscriber.mjs";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const updateTwitchSubscriber = async (users, userName) => {
  const item = await getTwitchSubscriber();
  await admin
    .firestore()
    .collection("twich-status")
    .doc("subscriber-user-users")
    .set({ ...item, [userName]: users });
};
export default updateTwitchSubscriber;
