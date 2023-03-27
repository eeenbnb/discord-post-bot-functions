import { createRequire } from "module";
import importCheckTwitchFunction from "./schedule/checkTwitchFunction.mjs";
import importCheckTwitchTokens from "./schedule/checkTwitchTokens.mjs";
import importGetSplatoonTime from "./schedule/getSplatoonTime.mjs";
import importGetTwitchModeratorReadFollowersTokensEndpoint from "./endpoint/getTwitchModeratorReadFollowersTokens.mjs";
import importTestNewFollower from "./endpoint/testNewFollower.mjs";
import importGetTwitchChannelReadSubscriptionsTokensEndpoint from "./endpoint/getTwitchChannelReadSubscriptionsTokens.mjs";

const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

admin.initializeApp();

export const checkTwitchFunction = importCheckTwitchFunction;
export const checkTwitchTokens = importCheckTwitchTokens;
export const getSplatoonTime = importGetSplatoonTime;

export const getTwitchModeratorReadFollowersTokensEndpoint =
  importGetTwitchModeratorReadFollowersTokensEndpoint;
export const getTwitchChannelReadSubscriptionsTokensEndpoint =
  importGetTwitchChannelReadSubscriptionsTokensEndpoint;

export const testNewFollower = importTestNewFollower;
