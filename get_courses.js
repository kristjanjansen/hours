const { writeFileSync } = require("fs")

const puppeteer = require("puppeteer");

const chunk = (arr, length) =>
  Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) =>
    arr.slice(n * length, n * length + length)
  );

const data = require("./data.json");
const lesson = data[5];
const prepareDay = day =>
  day
    .split("-")
    .reverse()
    .join(".");

(async () => {
  const username = "kristjan.jansen";
  const password = "qaqadu";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 2000 });
  await page.goto("https://ametikool.siseveeb.ee", {
    waitUntil: "networkidle0"
  });
  await page.type("#username", username);
  await page.type("#password", password);
  await Promise.all([
    page.click("#form_submit"),
    page.waitForNavigation({ waitUntil: "networkidle0" })
  ]);

  await page.goto(
    "https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik?k_daybook_opetaja_list_list_type=2018",
    { waitUntil: "networkidle0" }
  );

  await page.select('#k_daybook_opetaja_list_list_type', '2018')
  await page.keyboard.press(String.fromCharCode(13), { delay: 5000 })
  // await page.goto(
  //   "https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik?k_daybook_opetaja_list_list_type=2018",
  //   { waitUntil: "networkidle0" }
  // );

  const data = await page.$$eval('#k_daybook_opetaja_list_table tr td', tds => tds.map((td) => {
    return td.innerHTML;
  }));

  //console.log(JSON.stringify(chunk(data,8)))

  writeFileSync("courses.json", JSON.stringify(chunk(data,8),null,2));
  await browser.close();

})();
