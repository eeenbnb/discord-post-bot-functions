import fetch from "node-fetch";
import jsdom from "jsdom";
import { createRequire } from "module";
import postEmbedsDiscord from "../lib/discord/postEmbeds.mjs";

const require = createRequire(import.meta.url);
const functions = require("firebase-functions");
const { JSDOM } = jsdom;

const url = "https://splatoon.caxdb.com/schedule3.cgi";
const titles = [
  {
    title: "ナワバリバトル",
    color: parseInt("23ff77", 16),
    type: "nawabari",
  },
  {
    title: "バンカラマッチ(チャレンジ)",
    color: parseInt("ffb530", 16),
    type: "challenge",
  },
  {
    title: "バンカラマッチ(オープン)",
    color: parseInt("ffb530", 16),
    type: "open",
  },
  {
    title: "Xマッチ",
    color: parseInt("1bfaff", 16),
    type: "x",
  },
];

const getSplatoonTime = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async (context) => {
    const respon = await fetch(url);
    const data = await respon.text();
    const { document } = new JSDOM(data).window;

    const item = Array.from(document.body.querySelector("ul").childNodes)
      .filter((v) => v.textContent !== "\n")
      .map((elm) => {
        const text = elm.textContent;
        return {
          day: text.split(/\r\n|\r|\n/)[0],
          nawabari: [text.split(/\r\n|\r|\n/)[2], text.split(/\r\n|\r|\n/)[3]],
          nawabariTitle: "ナワバリバトル",
          challenge: [text.split(/\r\n|\r|\n/)[6], text.split(/\r\n|\r|\n/)[7]],
          challengeTitle: text
            .split(/\r\n|\r|\n/)[5]
            .match(/バンカラマッチ\(チャレンジ\)\[(.*)\]/)[1],
          open: [text.split(/\r\n|\r|\n/)[10], text.split(/\r\n|\r|\n/)[11]],
          openTitle: text
            .split(/\r\n|\r|\n/)[9]
            .match(/バンカラマッチ\(オープン\)\[(.*)\]/)[1],
          x: [text.split(/\r\n|\r|\n/)[14], text.split(/\r\n|\r|\n/)[15]],
          xTitle: text.split(/\r\n|\r|\n/)[13].match(/Xマッチ\[(.*)\]/)[1],
        };
      });

    const embeds = titles.map((title) => {
      const { type, ...add } = title;
      const object = { ...add, fields: [] };
      item.forEach((v) => {
        object.fields.push({
          name: v.day,
          value: [v[type + "Title"], ...v[type].map((t) => "- " + t)].join(
            "\n"
          ),
        });
      });
      return object;
    });

    await postEmbedsDiscord(embeds, 2);

    return null;
  });

export default getSplatoonTime;
