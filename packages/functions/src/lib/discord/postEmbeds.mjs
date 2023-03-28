import fetch from "node-fetch";

const urlList = [
  process.env.DISCORD_WEBHOOK_URL,
  process.env.DISCORD_WEBHOOK_URL_2,
  "https://discordapp.com/api/webhooks/1079269859784925247/puq8-wJE2ClxbOekNokzFl6cKwcaC8N_Oz49Ow8Rc7a4VVJ7hnGRRhs2sgLZ-L93tHag",
];

const postEmbedsDiscord = async (embeds, urlIndex = 0) => {
  const respon = await fetch(urlList[urlIndex], {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds,
    }),
  });
  return;
};

export default postEmbedsDiscord;
