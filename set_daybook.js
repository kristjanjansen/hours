const puppeteer = require("puppeteer");

const id = process.argv[2]

const lessons = require("./matches.json");
const lesson = lessons[id]

if (lesson.url) {

  //console.log(lesson.url)

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
    await page.setViewport({ width: 1024, height: 768 });
    await page.goto("https://ametikool.siseveeb.ee", {
      waitUntil: "networkidle2"
    });
    await page.type("#username", username);
    await page.type("#password", password);
    await Promise.all([
      page.click("#form_submit"),
      page.waitForNavigation({ waitUntil: "networkidle2" })
    ]);
    await page.goto(lesson.url, { waitUntil: "networkidle2" });

    page.click('#daybook_table th:nth-child(2) a') 
    page.waitForNavigation({ waitUntil: "networkidle0" })

    await page.waitFor(3000);

    await page.click('#check_all', { delay: 2000 })

    await page.click('input[value="Salvesta"]')

    await page.waitFor(4000);

    page.waitForNavigation({ waitUntil: "networkidle2" })

    await page.waitFor(4000);


    // await page.screenshot({path: 'test1.png'});

    // const data = await page.$$eval('th', tds => tds.map((td) => {
    //   return td.innerHTML;
    // }));

    // console.log(data)



    // page.mouse.move(500,337)
    // page.mouse.down({ delay: 100 })
    // page.mouse.up({ delay: 100})

    // const data = await page.$$eval('input[type="checkbox"]', c => c.map(a => a))

    // console.log(data)

    // await page.click('#check_all', { delay: 2000 })

    // await page.click('input[value="Salvesta"]')
    // page.waitForNavigation({ waitUntil: "networkidle2" })

    await page.select("#lesson_nr", lesson.nthHour);
    await page.type("#daybook_day", prepareDay(lesson.day));
    await page.type("#description", lesson.description);

    //await page.click('input[value="Salvesta"]')
    
  //await browser.close();
})();


} else {
  console.log(lesson)
}

/*
  await Promise.all(
    flatten(
      lessonz.map(lesson => [
        page.goto(lesson.url, { waitUntil: "networkidle0" }),

        page.select("#lesson_nr", lesson.nthHour),
        page.type("#daybook_day", prepareDay(lesson.day)),
        page.type("#description", lesson.description),

        page.click('input[value="Salvesta"]'),
        page.waitForNavigation({ waitUntil: "networkidle0" })
      ])
    )
  );
*/