import { createRequire } from "module";
import * as crypto from "crypto";
import postDiscord from "../lib/discord/post.mjs";

const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const postEventSubCallback = functions.https.onRequest(async (req, res) => {
  const notification = req.body;
  if ("subscription" in notification) {
    if (
      ["channel.subscribe", "channel.subscription.message"].indexOf(
        notification.subscription.type
      ) >= 0
    ) {
      let text = `test機能：新規サブスク：${notification.event.user_name}(${notification.event.user_login})`;
      if ("message" in notification.event) {
        text += `\n${notification.event.message.text}`;
      }
      await postDiscord(text);
    }
  }

  res.json({});
});

export default postEventSubCallback;
