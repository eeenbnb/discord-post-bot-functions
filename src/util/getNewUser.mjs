import dayjs from "dayjs";
import getChannelsFollowers from "../lib/twich/getChannelsFollowers.mjs";

const getAllItem = async (token) => {
  const allItem = [];
  const getItem = async (after = "") => {
    const item = await getChannelsFollowers(
      process.env.TWICH_CLIENT_ID,
      token,
      process.env.TWICH_CHECK_USER_BROADCASTER_ID,
      after
    );

    if (item.data) {
      allItem.push(...item.data);
    }

    if (item.pagination.cursor !== undefined) {
      await getItem(item.pagination.cursor);
    }
  };

  await getItem();
  return allItem;
};

export const getNewUser = async (token, startTime) => {
  const allItems = await getAllItem(token);
  const newItems = allItems.filter((v) =>
    dayjs(startTime).isBefore(dayjs(v.followed_at))
  );
  return newItems;
};

export default getNewUser;
