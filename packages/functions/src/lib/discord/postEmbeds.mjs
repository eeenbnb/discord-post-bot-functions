import fetch from "node-fetch";

const urlList = [
  process.env.DISCORD_WEBHOOK_URL,
  process.env.DISCORD_WEBHOOK_URL_2,
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
