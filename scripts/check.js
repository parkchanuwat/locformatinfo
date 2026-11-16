// Sanity checks for src/content.js: every cell cites a page that exists in its PDF,
// every rule/warning has both Thai and English text, and nothing is left empty.
const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "src/content.js"), "utf8") + ";this.O={SOURCES,LOCS,CATS,ITEMS,CHECKS};", ctx);
const { SOURCES, LOCS, CATS, ITEMS, CHECKS } = ctx.O;
const errs = [];
const pages = p => String(p).split(/,\s*/).flatMap(x => { const m = x.split(/[–-]/).map(Number); return m.length === 2 ? [m[0], m[1]] : [m[0]]; });
const bi = (o, where) => { if (o && (!o.th || !o.en)) errs.push(`${where}: missing th/en`); };
for (const it of ITEMS) {
  if (!CATS.some(c => c.id === it.cat)) errs.push(`${it.en}: unknown category ${it.cat}`);
  if (!it.th || !it.en) errs.push(`${it.en || it.th}: missing label`);
  for (const l of LOCS) {
    if (!(l.id in it.v)) { errs.push(`${it.en} / ${l.id}: cell missing (use null if the guide doesn't cover it)`); continue; }
    const c = it.v[l.id]; if (c === null) continue;
    const where = `${it.en} / ${l.id}`;
    if (c.p == null) errs.push(`${where}: no page`);
    else for (const n of pages(c.p)) if (!(n >= 1 && n <= SOURCES[l.id].pages)) errs.push(`${where}: page ${n} outside 1–${SOURCES[l.id].pages}`);
    if (!c.s && !c.r && !c.na && !c.x) errs.push(`${where}: empty cell`);
    [].concat(c.s || [], c.x || []).forEach(v => { if (typeof v !== "string" || !v.trim()) errs.push(`${where}: bad sample`); });
    bi(c.r, where + " r"); bi(c.w, where + " w"); bi(c.na, where + " na");
  }
}
for (const l of LOCS) for (const c of CHECKS[l.id] || []) { bi(c, `check ${l.id}`); for (const n of pages(c.p)) if (!(n >= 1 && n <= SOURCES[l.id].pages)) errs.push(`check ${l.id}: page ${n}`); }
const cells = ITEMS.reduce((a, it) => a + LOCS.filter(l => it.v[l.id]).length, 0);
console.log(`${ITEMS.length} rows, ${cells} cells with data, ${Object.values(CHECKS).flat().length} checklist items`);
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("OK");
