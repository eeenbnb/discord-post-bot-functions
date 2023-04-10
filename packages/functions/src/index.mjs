import { createRequire } from "module";
import importCheckTwitchFunction from "./schedule/checkTwitchFunction.mjs";
import importCheckTwitchTokens from "./schedule/checkTwitchTokens.mjs";
import importGetSplatoonTime from "./schedule/getSplatoonTime.mjs";
import importUpdateTwitchInfomation from "./schedule/updateTwitchInfomation.mjs";
import importGetTwitchModeratorReadFollowersTokensEndpoint from "./endpoint/getTwitchModeratorReadFollowersTokens.mjs";
import importTestNewFollower from "./endpoint/testNewFollower.mjs";
import importTestNewSubscrber from "./endpoint/testNewSubscrber.mjs";
import importGetTwitchChannelReadSubscriptionsTokensEndpoint from "./endpoint/getTwitchChannelReadSubscriptionsTokens.mjs";
import importGetTwitchUserVideos from "./endpoint/getTwitchUserVideos.mjs";
import importGetTwitchUserSubscriber from "./endpoint/getTwitchUserSubscriber.mjs";

const require = createRequire(import.meta.url);
const admin = require("firebase-admin");

admin.initializeApp();

export const checkTwitchFunction = importCheckTwitchFunction;
export const checkTwitchTokens = importCheckTwitchTokens;
export const getSplatoonTime = importGetSplatoonTime;
export const updateTwitchInfomation = importUpdateTwitchInfomation(admin);
export const getTwitchUserSubscriber = importGetTwitchUserSubscriber;

export const getTwitchModeratorReadFollowersTokensEndpoint =
  importGetTwitchModeratorReadFollowersTokensEndpoint;
export const getTwitchChannelReadSubscriptionsTokensEndpoint =
  importGetTwitchChannelReadSubscriptionsTokensEndpoint;
export const getTwitchUserVideos = importGetTwitchUserVideos(admin);

export const testNewFollower = importTestNewFollower;
export const testNewSubscrber = importTestNewSubscrber;
