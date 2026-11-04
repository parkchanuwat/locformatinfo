// Builds index.html from src/template.html + src/content.js + data/*.json
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");
const safe = s => s.replace(/<\//g, "<\\/");
const html = read("src/template.html")
  .replace("__C__", () => safe(read("data/cldr.json")))
  .replace("__SORT__", () => safe(read("data/sort.json")))
  .replace("__CONTENT__", () => read("src/content.js"))
  .replace("__I18N__", () => read("src/i18n-en.js"))
  .replace("__TESTDATA__", () => read("src/testdata.js"))
  .replace("__TDSTATS__", () => safe(read("data/testdata.json")));
fs.writeFileSync(path.join(root, "index.html"), html);
console.log("index.html built:", html.length, "bytes");
