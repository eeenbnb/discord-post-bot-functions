import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getTwitchChannelReadSubscriptionsTokensEndpoint =
  functions.https.onRequest((req, res) => {
    res.status(200).send(`
      <html>
        <head>
          <title>サブスクを取得するトークンを取得する</title>
          <meta charset="UTF-8" />
        </head>
        <body>
          <h1>サブスクを取得するトークンを取得する</h1>
          <a
            href="https://id.twitch.tv/oauth2/authorize?client_id=${process.env.TWICH_CLIENT_ID}&redirect_uri=https://us-central1-discord-meme-f229e.cloudfunctions.net/getTwitchChannelReadSubscriptionsTokensEndpoint&response_type=token&scope=channel:read:subscriptions"
            >Twitch認証</a
          >
          <div id="token"></div>
          <script>
            if (location.hash) {
              const prams = new URLSearchParams(location.hash.replace("#", ""));
              if (prams.get("access_token")) {
                const dom = document.createElement("p");
                dom.innerText = "トークン：" + prams.get("access_token");
                document.body.querySelector("#token").appendChild(dom);
              }
            }
          </script>
        </body>
      </html>
    `);
  });
export default getTwitchChannelReadSubscriptionsTokensEndpoint;
