import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getTwitchTokensEndpoint = functions.https.onRequest((req, res) => {
  res.status(200).send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
    </head>
    <script>
      if (location.hash) {
        alert(\`トークン情報は\$\{location.hash\}だよ！\`);
      }
    </script>
    <body>
      <a
        href="https://id.twitch.tv/oauth2/authorize?client_id=${process.env.TWICH_CLIENT_ID}&redirect_uri=https://us-central1-discord-meme-f229e.cloudfunctions.net/getTwitchTokensEndpoint&response_type=token&scope=moderator:read:followers"
        >Twitch認証</a
      >
    </body>
  </html>  
  `);
});
export default getTwitchTokensEndpoint;
