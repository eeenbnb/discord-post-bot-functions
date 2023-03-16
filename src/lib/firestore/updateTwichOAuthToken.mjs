import { createRequire } from "module";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const updateTwichOAuthToken = async (token) => {
  await admin
    .firestore()
    .collection("twich-status")
    .doc("token")
    .set({ token });
};
export default updateTwichOAuthToken;
