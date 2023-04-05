const key = "TwitchToken";

export const useTwitchToken = () => {
  return useState<string>(key, () => {
    if (!localStorage.getItem(key)) {
      return "";
    }
    return String(localStorage.getItem(key));
  });
};

export const setTwitchToken = (token: string) => {
  const item = useState<string>(key);
  item.value = token;
  localStorage.setItem(key, token);
};
