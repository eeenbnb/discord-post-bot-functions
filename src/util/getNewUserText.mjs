export const getNewUserText = (item) => {
  if (item.length == 0) {
    return "";
  }

  return [
    "新規フォロワーです",
    ...item.map((v) => `${v.user_name}(${v.user_login})`),
  ].join("\n");
};

export default getNewUserText;
