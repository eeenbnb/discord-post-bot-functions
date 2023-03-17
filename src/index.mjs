import { createRequire } from "module";
import importCheckTwitchFunction from "./schedule/checkTwitchFunction.mjs";
import importCheckTwitchTokens from "./schedule/checkTwitchTokens.mjs";
import importGetSplatoonTime from "./schedule/getSplatoonTime.mjs";

const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

admin.initializeApp();

export const checkTwitchFunction = importCheckTwitchFunction;
export const checkTwitchTokens = importCheckTwitchTokens;
export const getSplatoonTime = importGetSplatoonTime;
