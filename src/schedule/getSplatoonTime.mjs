import fetch from "node-fetch";
import jsdom from "jsdom";
import { createRequire } from "module";
import postDiscord from "../lib/discord/post.mjs";
const require = createRequire(import.meta.url);
const functions = require("firebase-functions");
const { JSDOM } = jsdom;

const url = "https://splatoon.caxdb.com/schedule3.cgi";

const getSplatoonTime = functions.pubsub
  .schedule("0 0 * * *")
  .onRun(async (context) => {
    const respon = await fetch(url);
    const data = await respon.text();
    const { document } = new JSDOM(data).window;
    const item = Array.from(document.body.querySelector("ul").childNodes)
      .filter((v) => v.textContent !== "\n")
      .map((elm) => {
        const text = elm.textContent;
        return [
          "# " + text.split(/\r\n|\r|\n/)[0],
          "- " + text.split(/\r\n|\r|\n/)[1],
          " - " + text.split(/\r\n|\r|\n/)[2],
          " - " + text.split(/\r\n|\r|\n/)[3],
          "- " + text.split(/\r\n|\r|\n/)[5],
          " - " + text.split(/\r\n|\r|\n/)[6],
          " - " + text.split(/\r\n|\r|\n/)[7],
          "- " + text.split(/\r\n|\r|\n/)[9],
          " - " + text.split(/\r\n|\r|\n/)[10],
          " - " + text.split(/\r\n|\r|\n/)[11],
          "- " + text.split(/\r\n|\r|\n/)[13],
          " - " + text.split(/\r\n|\r|\n/)[14],
          " - " + text.split(/\r\n|\r|\n/)[15],
          "",
        ].join("\n");
      });

    await postDiscord(item.join("\n"));
    return null;
  });

export default getSplatoonTime;
