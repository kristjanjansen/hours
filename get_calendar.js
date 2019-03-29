const { writeFileSync } = require("fs")

const moment = require("moment");
const got = require("got");

const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

const clean = (str = "") =>
  str
    .trim()
    .replace(/"/g, "")
    .replace(/'/g, "");

const processWeek = ({ nadal, tunnid }) => {
  return Object.entries(tunnid).map(([day, lesson]) => {
    if (
      lesson[0].aine.match(/[kK]oosolek/g) ||
      lesson[0].aine.match(/[Hh][õo]ivatud/g) ||
      lesson[0].aine.match(/[Vv]irgutusminutid/g)
    ) {
      return;
    }
    return {
      week: nadal,
      day,
      nthHour: clean(lesson[0].tund || ""),
      start: clean(lesson[0].algus || ""),
      stop: clean(lesson[0].lopp || ""),
      name: clean(lesson[0].aine || ""),
      group: clean(lesson[0].grupp || ""),
      teacherName: clean(lesson[0].opetaja || ""),
      room: clean(lesson[0].ruum || "")
    };
  });
};

(async () => {
  const weeks_future = -1;
  const weeks_past = 21;
  const teacher_id = 7087;
  const base_url = "https://siseveeb.ee/ametikool/veebilehe_andmed/tunniplaan";

  var m = moment()
    .day(1)
    .subtract(weeks_past, "w");
  var urls = [];

  for (var i = 0; i < weeks_past + weeks_future + 1; i++) {
    var week = moment()
      .day(1)
      .subtract(weeks_past, "w")
      .add(i, "w")
      .format("YYYY-MM-DD");
    urls.push(base_url + "?nadal=" + week + "&opetaja=" + teacher_id);
  }

  const sourceData = await Promise.all(
    urls.map(async url => {
      return await got(url, { json: true });
    })
  );
  const data = flatten(
    sourceData
      .map(d => d.body)
      .map(processWeek)
  ).filter(week => week);
  writeFileSync("calendar.json", JSON.stringify(data,null,2));

})();
