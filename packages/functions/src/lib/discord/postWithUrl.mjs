import fetch from "node-fetch";

const postDiscordWithUrl = async (content, Url) => {
  const respon = await fetch(Url, {
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

export default postDiscordWithUrl;
