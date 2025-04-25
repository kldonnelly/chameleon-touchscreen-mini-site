const https = require("https");
const cheerio = require("cheerio");
import db from "../components/db";
const slugify = require('slugify');

const beachUrl = [
  {
    url: "https://www.explorenorthshore.nz/outdoor-activities/beaches/",
    domain: "https://www.explorenorthshore.nz/",
  },
];

function crawler(url: string, domain: string) {
  https.get(url, (res: any) => {
    res.setEncoding("utf8");
    let html = "";
    res.on("data", (data: any) => {
      html += data;
    });
    res.on("end", () => {
      const $ = cheerio.load(html);
      console.log("begin filter");
      $("#middle > div > div > div:nth-child(1)")
        .children(".row")
        .each((index: any, element: any) => {
          const theRow = $(element);
          let imageUrl = theRow.find("div p img").attr("src");
          if (!imageUrl) return;
          imageUrl = domain + imageUrl;
          const title = theRow.find("div h1").text();
          let desc = '';
          const paragraphs: any[] = [];
          theRow.find("div p").each((_index: any, item: any) => {
              paragraphs.push($(item).text().trim());
          });
          desc = paragraphs.join('\n');

          writeBeachData(title, desc, imageUrl);
        });

    });
  });
}

function writeBeachData(title: string, desc: string, imageUrl: string) {
  db.collection("beaches")
    .doc(slugify(title, { lower: true }))
    .set({
      title: title,
      desc: desc,
      imageUrl: imageUrl,
    }, { merge: true })
    .catch((error) => console.log(error));
}

export function crawlerBeach() {
  beachUrl.forEach((v) => {
    crawler(v.url, v.domain);
  });
}
