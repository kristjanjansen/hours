const { writeFileSync } = require("fs")

const coursesFile = require("./courses.json");
const calendarFile = require("./calendar.json");
const subjectsFile = require("./subjects");

const intersect = (arr1,arr2) => {
  const a = new Set(arr1);
  const b = new Set(arr2);
  const intersect = new Set(
    [...a].filter(x => b.has(x)))
  return [...intersect]
}

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const any = function(arr) {
  return arr instanceof Array
    ? shuffle(arr)[0]
    : shuffle(Array.from(arguments))[0];
}

const getLink = html => html.match(/(href=")(.*)(")/)[2];

const getText = html => {
  return html ? html.replace(/(<([^>]+)>)/gi, "") : "";
};

const getNames = text => {
  return text
    .split("(")[0]
    .split(";")
    .map(t => t.trim());
};
const courses = coursesFile
  .filter(d => d[0] !== "" && d[0] !== "Grupp")
  .map(d => {
    return {
      group: getText(d[0].trim()),
      url: getLink(d[0]),
      names: getNames(getText(d[1].trim()))
    };
  });

const matches = calendarFile.map(lesson => {
  const lessonNames = lesson.name.split(",").map(l => l.trim());
  const courseNames = courses.filter(course => course.group == lesson.group);
  const match = courseNames.filter(course => {
    return intersect(course.names, lessonNames).length
  });
  const subjects = lessonNames.map(name => {
    if (subjectsFile[name]) {
      return subjectsFile[name]
    }
    return
  }).filter(s => s)
  return {
    ...lesson,
    url: match.length ? match[0].url : '',
    description: subjects.length ? any(subjects[0].split(/\n---\n/g).map(s => s.trim())) : ''
  };
});

writeFileSync("matches.json", JSON.stringify(matches,null,2));