import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const getTwichOAuthToken = async () =>
  await admin.firestore().collection("twich-status").doc("token").get();

export default getTwichOAuthToken;
