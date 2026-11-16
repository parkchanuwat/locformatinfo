// Builds index.html from src/template.html + src/content.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");
const content = read("src/content.js").replace(/<\//g, "<\\/");
const html = read("src/template.html").replace("__CONTENT__", () => content);
fs.writeFileSync(path.join(root, "index.html"), html);
console.log("index.html built:", html.length, "bytes");
