import fetch from "node-fetch";

const url = process.env.DISCORD_WEBHOOK_URL;

const postDiscord = async (content) => {
  const respon = await fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
    }),
  });
  return;
};

export default postDiscord;
