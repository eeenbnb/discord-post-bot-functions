import fetch from "node-fetch";

const url = "https://api.twitch.tv/helix/streams";

const getStreams = async (client_id, token, user_login) => {
  const params = new URLSearchParams({
    user_login,
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

export default getStreams;
