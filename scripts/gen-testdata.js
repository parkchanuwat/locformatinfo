// Computes length/byte statistics for src/testdata.js → data/testdata.json
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "src/testdata.js"), "utf8") + ";this.TESTDATA=TESTDATA;", ctx);

// GB18030 encoder built from the platform decoder (ICU, GB18030-2022 mappings)
const dec = new TextDecoder("gb18030");
const gb = new Map();
for (let a = 0x81; a <= 0xfe; a++) for (let b = 0x40; b <= 0xfe; b++) {
  if (b === 0x7f) continue;
  const ch = dec.decode(new Uint8Array([a, b]));
  if (ch.length === 1 && ch !== "�" && !gb.has(ch)) gb.set(ch, [a, b]);
}
for (let b1 = 0x81; b1 <= 0x84; b1++) for (let b2 = 0x30; b2 <= 0x39; b2++) for (let b3 = 0x81; b3 <= 0xfe; b3++) for (let b4 = 0x30; b4 <= 0x39; b4++) {
  const ch = dec.decode(new Uint8Array([b1, b2, b3, b4]));
  if (ch.length === 1 && ch !== "�" && !gb.has(ch)) gb.set(ch, [b1, b2, b3, b4]);
}
function gbEncode(str) {
  const out = [];
  for (const ch of str) {
    const cp = ch.codePointAt(0);
    if (cp < 0x80) { out.push(cp); continue; }
    if (cp >= 0x10000) {
      let n = cp - 0x10000;
      const b4 = 0x30 + (n % 10); n = Math.floor(n / 10);
      const b3 = 0x81 + (n % 126); n = Math.floor(n / 126);
      const b2 = 0x30 + (n % 10); n = Math.floor(n / 10);
      out.push(0x90 + n, b2, b3, b4); continue;
    }
    const m = gb.get(ch);
    if (!m) throw new Error("GB18030 cannot encode U+" + cp.toString(16));
    out.push(...m);
  }
  return out;
}
const hex = arr => arr.map(b => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
const seg = new Intl.Segmenter("en", { granularity: "grapheme" });

const stats = {};
for (const g of ctx.TESTDATA) {
  stats[g.id] = g.items.map(it => {
    const s = it.s, u8 = [...new TextEncoder().encode(s)], g8 = gbEncode(s);
    // round-trip check
    if (dec.decode(new Uint8Array(g8)) !== s) throw new Error("GB18030 round-trip failed: " + s);
    return {
      cps: [...s].map(c => "U+" + c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")),
      graphemes: [...seg.segment(s)].length,
      codepoints: [...s].length,
      utf16: s.length,
      utf8: u8.length,
      gb18030: g8.length,
      utf8hex: hex(u8.slice(0, 48)) + (u8.length > 48 ? " …" : ""),
      gbhex: hex(g8.slice(0, 48)) + (g8.length > 48 ? " …" : "")
    };
  });
}
fs.writeFileSync(path.join(root, "data/testdata.json"), JSON.stringify({ gbTwoByte: gb.size, stats }, null, 1));
console.log("testdata stats written; GB18030 map size", gb.size);
