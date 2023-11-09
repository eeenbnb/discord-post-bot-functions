import { createRequire } from "module";
import getTwichOAuthToken from "./getTwichOAuthToken.mjs";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

const updateTwichOAuthToken = async (token) => {
  const tokens = await getTwichOAuthToken();
  await admin
    .firestore()
    .collection("twich-status")
    .doc("token")
    .set({ ...tokens, token });
};
export default updateTwichOAuthToken;
