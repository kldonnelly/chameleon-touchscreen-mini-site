import slugify from "slugify";

const https = require("https");
const cheerio = require("cheerio");
import db from "../components/db";

const urls = [
  {
    url: "https://www.explorenorthshore.nz/webpages/top-10/",
    domain: "https://www.explorenorthshore.nz/",
  },
];

function crawlerTop10(item: any) {
  https.get(item.url, (res: any) => {
    res.setEncoding("utf8");
    let html = "";
    res.on("data", (data: any) => {
      html += data;
    });
    res.on("end", () => {
      const $ = cheerio.load(html);
      console.log("begin filter");
      $("#middle > div > div > div")
        .children(".row")
        .each((index: any, element: any) => {
          const el = $(element);

          let imageUrl = el.find("div > p:nth-child(1) > img").attr("src");
          if (!imageUrl) return;
          imageUrl = item.domain + imageUrl;
          const title = el.find("h1").text();
          const desc = el.find("p").text().trim();

          db.collection("top-10-see-to-do")
            .doc(slugify(title, { lower: true }))
            .set({
              title: title,
              desc: desc,
              imageUrl: imageUrl,
            })
            .catch((error) => console.log(error));
        });
    });
  });
}

export function crawlerTop10SeeTodo() {
  urls.forEach((v) => {
    crawlerTop10(v);
  });
}
