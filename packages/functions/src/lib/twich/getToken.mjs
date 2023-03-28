import fetch from "node-fetch";

const url = "https://id.twitch.tv/oauth2/token";

const getToken = async (
  client_id,
  client_secret,
  scope = "user:read:follows"
) => {
  const params = new URLSearchParams({
    client_id,
    client_secret,
    scope,
    grant_type: "client_credentials",
  });
  const respon = await fetch(url + `?${params.toString()}`, {
    method: "post",
  });
  const data = await respon.json();
  return data;
};

export default getToken;
