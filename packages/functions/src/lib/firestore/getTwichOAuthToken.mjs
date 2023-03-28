import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const getTwichOAuthToken = async () =>
  await (
    await admin.firestore().collection("twich-status").doc("token").get()
  ).data();

export default getTwichOAuthToken;
