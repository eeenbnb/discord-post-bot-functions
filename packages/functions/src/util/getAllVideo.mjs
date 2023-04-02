import getVideo from "../lib/twich/getVideos.mjs";

const getAllVideo = async (token) => {
  const allItem = [];
  const getItem = async (after = "") => {
    const item = await getVideo(
      process.env.TWICH_CLIENT_ID,
      token,
      process.env.TWICH_CHECK_USER_BROADCASTER_ID,
      after
    );

    if (item.data) {
      allItem.push(...item.data);
    }
    if ("pagination" in item) {
      if ("cursor" in item.pagination) {
        await getItem(item.pagination.cursor);
      }
    }
  };

  await getItem();
  return allItem;
};

export default getAllVideo;
