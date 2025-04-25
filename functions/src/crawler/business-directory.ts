const https = require("https");
const cheerio = require("cheerio");
import db from "../components/db";
const slugify = require('slugify');

const eatAndDrinkUrls = [
  {
    url: "https://www.ilovetakapuna.co.nz/directory/tasting-takapuna/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'eat-and-drink'
  },
  {
    url: "https://www.ilovetakapuna.co.nz/directory/entertainment/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'entertainment'
  },
  {
    url: "https://www.ilovetakapuna.co.nz/directory/health-beauty/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'health-beauty'
  },
  {
    url: "https://www.ilovetakapuna.co.nz/directory/services/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'services'
  },
  {
    url: "https://www.ilovetakapuna.co.nz/directory/shopping/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'shopping'
  },
  {
    url: "https://www.ilovetakapuna.co.nz/directory/stay/?itemsPerPage=100000",
    domain: "https://www.ilovetakapuna.co.nz/",
    source: "takapuna",
    category: 'stay'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/eat-drink/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'eat-and-drink'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/natural-healthcare/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'natural-healthcare'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/fashion-clothing/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'fashion-clothing'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/retail/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'retail'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/hair-beauty/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'hair-beauty'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/health-services/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'health-services'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/services/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'services'
  },
  {
    url: "https://www.milfordshops.co.nz/directory/community/",
    domain: "https://www.milfordshops.co.nz/",
    source: "milford",
    category: 'community'
  },
];

function crawler(item: any) {
  https.get(item.url, (res: any) => {
    res.setEncoding("utf8");
    let html = "";
    res.on("data", (data: any) => {
      html += data;
    });
    res.on("end", () => {
      const $ = cheerio.load(html);
      switch (item.source) {
        case "milford":
          $("#directoryList")
            .children(".business-directory-box")
            .each((index: any, element: any) => {
              const el = $(element);
              let imageUrl = el
                .find("div.business-directory-logo")
                .find("a img")
                .attr("src");
              if (!imageUrl) return;
              imageUrl = item.domain + imageUrl;
              const title = el.find("div h5").text().trim();
              const address = el.find("div p:nth-child(2)").text().trim();
              const phone = el.find("div p:nth-child(3)").text().trim();
              const link = el.find("div p:nth-child(4) a").attr("href")
                ? el.find("div p:nth-child(4) a").attr("href")
                : "";
              db.collection("business-directory")
                .doc(slugify(title, { lower: true }))
                .set({
                  title: title,
                  address: address,
                  phone: phone,
                  link: link,
                  region: item.source,
                  category: item.category,
                  imageUrl: imageUrl,
                }, { merge: true })
                .catch((error) => console.log(error));
            });
          break;

        case "takapuna":
          $("#middle > div > div > div > div > div > div > div.col-md-9.col-sm-12.col-xs-12 > div:nth-child(3)")
            .children(".directoryResultBoxContainer")
            .each((index: any, element: any) => {
              const el = $(element);
              let imageUrl = el.find("div div a div img").attr("src");
              if (!imageUrl) return;
              imageUrl = item.domain + imageUrl;
              const title = el.find("div h3 a").text();
              const address = el
                .find("div:nth-child(1) > div.col-md-10.col-sm-11.col-xs-10")
                .text()
                .trim();
              const phone = el
                .find("div:nth-child(2) > div.col-md-10.col-sm-11.col-xs-10")
                .text()
                .trim();
              const link = el.find("div:nth-child(3) > div.col-md-10.col-sm-11.col-xs-10 a").attr("href") ? el.find("div:nth-child(3) > div.col-md-10.col-sm-11.col-xs-10 a").attr("href") : "";
              db.collection("business-directory")
                .doc(slugify(title, { lower: true }))
                .set({
                  title: title,
                  address: address,
                  phone: phone,
                  link: link,
                  region: item.source,
                  category: item.category,
                  imageUrl: imageUrl,
                }, { merge: true })
                .catch((error) => console.log(error));
            });
      }
    });
  });
}

export function crawlerBusinessDirectory() {
  eatAndDrinkUrls.forEach((item) => {
    crawler(item);
  });
}
