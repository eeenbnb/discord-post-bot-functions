export const getNewSubscriberText = (item) => {
  if (item.length == 0) {
    return "";
  }

  return [
    "新規サブスクユーザーです",
    ...item.map(
      (v) =>
        `${v.user_name}(${v.user_login})${
          v.is_gift ? ` (${v.gifter_name}さんからのギフト)` : ""
        }`
    ),
  ].join("\n");
};

export default getNewSubscriberText;
