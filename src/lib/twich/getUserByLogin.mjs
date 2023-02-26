import fetch from "node-fetch";

const url = "https://api.twitch.tv/helix/users";

const getUserByLogin = async (client_id, token, login) => {
  const params = new URLSearchParams({
    login,
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

export default getUserByLogin;
