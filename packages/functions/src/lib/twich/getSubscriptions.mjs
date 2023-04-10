import fetch from "node-fetch";

const url = "https://api.twitch.tv/helix/subscriptions";

const getSubscriptions = async (
  client_id,
  token,
  broadcaster_id,
  after = ""
) => {
  const params = new URLSearchParams({
    broadcaster_id,
    after,
  });
  const respon = await fetch(url + `?${params.toString()}`, {
    headers: {
      "Client-ID": client_id,
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await respon.json();
  return data;
};

export default getSubscriptions;
