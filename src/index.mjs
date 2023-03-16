import importCheckTwitchFunction from "./schedule/checkTwitchFunction.mjs";
import importCheckTwitchTokens from "./schedule/checkTwitchTokens.mjs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

admin.initializeApp();

export const checkTwitchFunction = importCheckTwitchFunction;
export const checkTwitchTokens = importCheckTwitchTokens;
