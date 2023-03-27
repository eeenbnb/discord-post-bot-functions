import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getTwitchModeratorReadFollowersTokensEndpoint = functions.https.onRequest(
  (req, res) => {
    res.status(200).send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
    </head>
    <body>
      <a
        href="https://id.twitch.tv/oauth2/authorize?client_id=${process.env.TWICH_CLIENT_ID}&redirect_uri=https://us-central1-discord-meme-f229e.cloudfunctions.net/getTwitchModeratorReadFollowersTokensEndpoint&response_type=token&scope=moderator:read:followers"
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
  }
);
export default getTwitchModeratorReadFollowersTokensEndpoint;
