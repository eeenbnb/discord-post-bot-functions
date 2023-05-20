import { createRequire } from "module";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");

const getAppToken = functions.https.onRequest((req, res) => {
  res.status(200).send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
        </head>
        <body>
          <a id="first">1.Twitch認証</a>
          <button id="second" disabled>2.Tokenを取得</button>
          <div id="token"></div>
          <script>
            const first = document.body.querySelector("#first");
            const second = document.body.querySelector("#second");
            const token = document.body.querySelector("#token");
            const searchParams = new URLSearchParams(window.location.search);
            const firstUrl = [
              "https://id.twitch.tv/oauth2/authorize",
              "?response_type=code",
              "&client_id=${process.env.TWICH_CLIENT_ID}",
              "&scope=bits:read+moderator:read:followers+channel:read:subscriptions",
              "&redirect_uri=https://us-central1-discord-meme-f229e.cloudfunctions.net/getAppToken",
            ].join("");
      
            const secondUrl = [
              "https://id.twitch.tv/oauth2/token",
              "?client_id=${process.env.TWICH_CLIENT_ID}",
              "&client_secret=${process.env.TWICH_CLIENT_SELECT}",
              \`&code=\$\{searchParams.get("code")\}\`,
              "&grant_type=authorization_code",
              "&redirect_uri=https://us-central1-discord-meme-f229e.cloudfunctions.net/getAppToken",
            ].join("");
            first.setAttribute("href", firstUrl);
      
            if (searchParams.has("code")) {
              second.removeAttribute("disabled");
              second.addEventListener("click", async () => {
                const data = await fetch(secondUrl, { method: "POST" });
                const res = await data.json();
                const dom = document.createElement("p");
                dom.innerText = "トークン：" + res.access_token;
                document.body.querySelector("#token").appendChild(dom);
              });
            }
          </script>
        </body>
      </html>      
      `
  );
});
export default getAppToken;
