// Content of the site. Every value comes from the Adobe Localization Style Guide PDFs listed in SOURCES.
// Cell fields (all optional):
//   s  = sample(s) to copy, written exactly as the guide shows them (string or array)
//   x  = incorrect forms the guide calls out (array)
//   r  = the rule, summarised { th, en }
//   w  = the guide contradicts itself here { th, en }
//   na = the guide says the topic does not apply { th, en }
//   p  = page number(s) in the PDF
// A cell set to null means the guide does not cover the topic.
const t = (th, en) => ({ th, en });
const NB = " ";

const SOURCES = {
  de: { file: "Adobe_Style_Guide_de-DE_v.2.3.pdf", title: "Adobe Localization Style Guide – German", ver: "2.3", date: "July 2023", pages: 53 },
  fr: { file: "Adobe_Style_Guide_fr-FR_fr-CA_v.1.8.pdf", title: "Adobe Localization Style Guide – French", ver: "1.8", date: "October 2022", pages: 48 },
  ja: { file: "Adobe_Style_Guide_ja-JP_v.1.9_EN.pdf", title: "Adobe Style Guide – Japanese (English version)", ver: "1.9", date: "July 2023", pages: 95 },
  ko: { file: "Adobe_Style_Guide_ko-KR_v.1.7.pdf", title: "Adobe Localization Style Guide – Korean", ver: "1.7", date: "October 2022", pages: 40 },
  "zh-hans": { file: "Adobe_Style_Guide_zh-CN_v.1.7.pdf", title: "Adobe Localization Style Guide – Simplified Chinese", ver: "1.7", date: "October 2022", pages: 42 },
  "zh-hant": { file: "Adobe_Style_Guide_zh-TW_v.1.9.pdf", title: "Adobe Localization Style Guide – Traditional Chinese", ver: "1.9", date: "October 2022", pages: 46 }
};

const LOCS = [
  { id: "de", short: "DE", tag: "de-DE", lang: "de", native: "Deutsch", th: "เยอรมัน", en: "German" },
  { id: "fr", short: "FR", tag: "fr-FR", lang: "fr", native: "Français", th: "ฝรั่งเศส", en: "French", extra: t("guide เล่มนี้ครอบคลุม fr-CA ด้วย จุดที่ต่างกันมีระบุไว้ในหมายเหตุ", "The same guide covers fr-CA; differences are noted where they apply") },
  { id: "ja", short: "JA", tag: "ja-JP", lang: "ja", native: "日本語", th: "ญี่ปุ่น", en: "Japanese", extra: t("ใช้ฉบับภาษาอังกฤษ v1.9 ซึ่งใหม่กว่าฉบับภาษาญี่ปุ่น v1.8 ใน zip", "Uses the English version v1.9, newer than the Japanese v1.8 in the zip") },
  { id: "ko", short: "KO", tag: "ko-KR", lang: "ko", native: "한국어", th: "เกาหลี", en: "Korean" },
  { id: "zh-hans", short: "简", tag: "zh-CN", lang: "zh-Hans", native: "简体中文", th: "จีนตัวย่อ", en: "Chinese Simplified" },
  { id: "zh-hant", short: "繁", tag: "zh-TW", lang: "zh-Hant", native: "繁體中文", th: "จีนตัวเต็ม", en: "Chinese Traditional" }
];

const CATS = [
  { id: "overview", th: "ภาพรวม", en: "At a glance" },
  { id: "date", th: "วันที่", en: "Date" },
  { id: "time", th: "เวลา", en: "Time" },
  { id: "number", th: "ตัวเลข", en: "Numbers" },
  { id: "currency", th: "สกุลเงิน", en: "Currency" },
  { id: "units", th: "หน่วยวัด", en: "Units of measure" },
  { id: "punct", th: "เครื่องหมายวรรคตอน", en: "Punctuation" },
  { id: "text", th: "ตัวอักษรและการเขียน", en: "Letters & writing" },
  { id: "ui", th: "UI และคีย์บอร์ด", en: "UI & keyboard" },
  { id: "contact", th: "ที่อยู่ เบอร์โทร ชื่อ", en: "Addresses, phones, names" }
];

const YES = t("ใช้", "Yes"), NO = t("ไม่ใช้", "No");

const ITEMS = [
  // ---------- At a glance ----------
  { cat: "overview", th: "ตัวคั่นทศนิยม", en: "Decimal separator", v: {
    de: { s: "3,5", p: 38 }, fr: { s: "3,5", p: 36 }, ja: { s: "3.5", p: 66 },
    ko: { s: "3.5", p: 31 }, "zh-hans": { s: "3.5", p: 33 }, "zh-hant": { s: "3.5", p: 36 } } },
  { cat: "overview", th: "ตัวคั่นหลักพัน", en: "Thousands separator", v: {
    de: { s: "1.234.567", p: 38 }, fr: { s: `1${NB}234${NB}567`, r: t("ช่องว่างไม่ตัดบรรทัด (NBSP)", "No-break space (NBSP)"), p: 36 }, ja: { s: "1,234,567", p: 66 },
    ko: { s: "1,234,567", p: 31 }, "zh-hans": { s: "1,234,567", p: 33 }, "zh-hant": { s: "1,234,567", p: 36 } } },
  { cat: "overview", th: "วันที่แบบสั้น", en: "Short date", v: {
    de: { s: "21.08.2019", p: 37 }, fr: { s: "21/08/2017", p: 35 }, ja: { s: "2017/08/21", p: 62 },
    ko: { s: "2017. 8. 21.", p: 30 }, "zh-hans": { s: "2017/08/21", p: 32 }, "zh-hant": { s: "2017/08/21", p: 35 } } },
  { cat: "overview", th: "เวลา", en: "Time", v: {
    de: { s: "15:07 Uhr", p: 37 }, fr: { s: "15 h 07", p: 36 }, ja: { s: "15:07", p: 63 },
    ko: { s: "15:07", p: 30 }, "zh-hans": { s: "15:07", p: 33 }, "zh-hant": { s: "15:07", p: 35 } } },
  { cat: "overview", th: "เปอร์เซ็นต์", en: "Percent", v: {
    de: { s: `5${NB}%`, p: 38 }, fr: { s: `5${NB}%`, p: 37 }, ja: { s: "5%", r: t("UI", "UI"), p: 66 },
    ko: { s: "5%", p: 31 }, "zh-hans": { s: "5%", p: 33 }, "zh-hant": { s: "5%", p: 36 } } },
  { cat: "overview", th: "ตัวเลข + หน่วย", en: "Number + unit", v: {
    de: { s: `80${NB}MB`, p: 38 }, fr: { s: `80${NB}Mo`, p: 37 }, ja: { s: "255 MB", p: 66 },
    ko: { s: "80MB", p: 31 }, "zh-hans": { s: "80 MB", p: 33 }, "zh-hant": { s: "80MB", p: 36 } } },
  { cat: "overview", th: "ดอลลาร์สหรัฐ", en: "US dollars", v: {
    de: { s: `123${NB}$`, p: 40 }, fr: { s: `123${NB}$`, p: 39 }, ja: { s: "79.99 US ドル", p: 71 },
    ko: { s: "123달러", p: 33 }, "zh-hans": { s: "$ 123", p: 35 }, "zh-hant": { s: "美金 123 元", p: 38 } } },
  { cat: "overview", th: "เครื่องหมายคำพูด", en: "Quotation marks", v: {
    de: { s: "„…“", p: 31 }, fr: { s: `«${NB}…${NB}»`, p: 31 }, ja: { s: "「…」", p: 49 },
    ko: { s: "“…”", p: 25 }, "zh-hans": { s: "“…”", p: 26 }, "zh-hant": { s: "「…」", p: 30 } } },

  // ---------- Date ----------
  { cat: "date", th: "วันที่แบบเต็ม", en: "Full date", v: {
    de: { s: "Montag, 21. August 2019", p: 36 },
    fr: { s: "Lundi, 21 août 2017", r: t("กลางประโยคชื่อวันและเดือนเป็นตัวเล็ก และไม่มีจุลภาคคั่นวันกับเดือน", "Mid-sentence, weekdays and months are lowercase, with no comma between them"), p: 35 },
    ja: { s: "2017年8月21日 月曜日", r: t("ไม่เว้นวรรคระหว่างตัวเลขกับ 年 月 日 · เว้นวรรคครึ่งความกว้างก่อนชื่อวัน", "No space between the numbers and 年 月 日 · a half-width space before the weekday"), p: 62 },
    ko: { s: "2017년 8월 21일 월요일", p: 29 },
    "zh-hans": { s: "2017 年 8 月 21 日星期一", r: t("มาตรฐานคือเว้นวรรครอบตัวเลข · แบบไม่เว้นวรรคที่มาจากไลบรารีก็ถือว่าถูก ไม่ต้องรายงาน", "Standard practice spaces the numbers · the unspaced form some libraries output is also correct and need not be reported"), p: 32 },
    "zh-hant": { s: "2017 年 8 月 21 日，星期一", r: t("มาตรฐานคือเว้นวรรครอบตัวเลข · แบบไม่เว้นวรรคที่มาจากไลบรารีก็ถือว่าถูก ไม่ต้องรายงาน", "Standard practice spaces the numbers · the unspaced form some libraries output is also correct and need not be reported"), p: "34–35" } } },
  { cat: "date", th: "วันที่แบบกระชับ", en: "Compact date", v: {
    de: { s: "Mo., 1. Aug. 2019", r: t("ไม่มีเลข 0 นำหน้า", "No leading zero"), p: 36 },
    fr: { s: "lun. 21 août 2017", p: 35 },
    ja: { s: "2017/08/21 (月)", p: 62 },
    ko: { s: "2017년 8월 21일 월", p: 29 },
    "zh-hans": { s: "2017 年 8 月 21 日周一", p: 32 },
    "zh-hant": { s: "2017 年 8 月 21 日，星期一", p: 35 } } },
  { cat: "date", th: "วันที่แบบสั้น", en: "Short date", v: {
    de: { s: "21.08.2019", r: t("DD.MM.YYYY", "DD.MM.YYYY"), p: 37 },
    fr: { s: "21/08/2017", r: t("คั่นด้วย /", "Separated by /"), w: t("ช่องกฎในตารางเขียน DD/MM/YY แต่ตัวอย่างใช้ปี 4 หลัก", "The table's rule says DD/MM/YY, but its example has a 4-digit year"), p: 35 },
    ja: { s: "2017/08/21", r: t("YYYY/MM/DD · คั่นด้วย / ครึ่งความกว้าง", "YYYY/MM/DD · half-width slashes"), p: "53, 62" },
    ko: { s: "2017. 8. 21.", r: t("มีจุดหลังทุกส่วนรวมท้ายสุด", "A period after every part, including the last"), p: 30 },
    "zh-hans": { s: ["2017/08/21", "2017-08-21"], r: t("คั่นด้วย / หรือ -", "Separated by / or -"), p: 32 },
    "zh-hant": { s: "2017/08/21", r: t("YYYY/MM/DD", "YYYY/MM/DD"), p: 35 } } },
  { cat: "date", th: "เลข 0 นำหน้าวันและเดือน", en: "Leading zeros (day, month)", v: {
    de: { s: ["01.11.2019", "01.01.2020"], r: t("ใช้ แต่ละได้ถ้ารูปแบบไม่บังคับ 2 หลัก", "Yes, but may be dropped unless the format needs two digits"), p: 37 },
    fr: { s: "01/08/2017", r: t("ใช้ทั้งวันและเดือน", "Yes, for both"), p: 35 },
    ja: { s: ["2017/08/01", "2017年8月1日"], r: t("แบบสั้นใช้ · แบบยาวไม่ใช้", "Short formats: yes · long formats: no"), p: 62 },
    ko: { s: "2017. 8. 1.", r: t("ไม่ใช้ทั้งวันและเดือน", "No, for either"), p: 30 },
    "zh-hans": { s: "2017/08/1", r: t("วัน: ไม่ใช้ · เดือน: ใช้", "Day: no · month: yes"), p: 32 },
    "zh-hant": { r: t("วัน: ไม่ใช้ · เดือน: ใช้", "Day: no · month: yes"), w: t("ตัวอย่างในตารางเป็นรูปแบบอังกฤษ (08/1/2017)", "The table's examples are in English format (08/1/2017)"), p: 35 } } },
  { cat: "date", th: "ชื่อวันแบบย่อ", en: "Abbreviated weekdays", v: {
    de: { s: "Mo.", r: t("2 ตัวอักษร + จุด", "Two letters + period"), p: 37 },
    fr: { s: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."], p: 35 },
    ja: { s: ["月", "火", "水", "木", "金", "土", "日"], r: t("ไม่มีจุด ใส่ในวงเล็บหลังวันที่: 2017/08/21 (月)", "No periods; in parentheses after the date: 2017/08/21 (月)"), p: 62 },
    ko: { s: ["월", "화", "수", "목", "금", "토", "일"], p: 30 },
    "zh-hans": { s: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], p: 32 },
    "zh-hant": { na: t("ไม่ใช้ (Not applicable)", "Not applicable"), p: 35 } } },
  { cat: "date", th: "ชื่อเดือนแบบย่อ", en: "Abbreviated months", v: {
    de: { s: ["Jan.", "Feb.", "Mrz.", "Apr."], r: t("3 ตัวอักษร + จุด", "Three letters + period"), p: 37 },
    fr: { s: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], p: 36 },
    ja: { s: "2017/08/21", r: t("ไม่มีชื่อย่อ ใช้ตัวเลข 1–12", "No abbreviations; numbers 1–12"), p: "62–63" },
    ko: { na: t("ไม่ใช้ (N/A) ใช้ตัวเลข", "N/A; numbers are used"), s: "2017. 8. 21.", p: 30 },
    "zh-hans": { s: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"], p: 32 },
    "zh-hant": { na: t("ไม่ใช้ (Not applicable)", "Not applicable"), p: 35 } } },
  { cat: "date", th: "ช่วงปี (2008–18)", en: "Year range (2008–18)", v: {
    de: { s: "2008–18", r: t("ตามแบบอังกฤษ", "Follows the English rule"), p: 37 },
    fr: { s: "1939-1945", r: t("เขียนปีเต็มทั้งสองตัว", "Repeat the first two digits"), p: 36 },
    ja: { s: "2008–18", r: t("ตามต้นฉบับ", "As in the source"), p: 63 },
    ko: { s: "2008-2018", r: t("เขียนปีเต็มทั้งสองตัว", "Repeat the first two digits"), p: 30 },
    "zh-hans": { s: "2008–2018", r: t("เขียนปีเต็มทั้งสองตัว", "Repeat the first two digits"), p: 32 },
    "zh-hant": { s: "2008-2018", r: t("เขียนปีเต็มทั้งสองตัว", "Repeat the first two digits"), p: 35 } } },
  { cat: "date", th: "ช่วงวัน (Monday–Thursday)", en: "Day range (Monday–Thursday)", v: {
    de: { s: "Montag–Donnerstag", r: t("en dash ไม่เว้นวรรค (ความหมาย bis)", "En dash, no spaces (meaning “bis”)"), p: 28 },
    fr: { s: ["Du lundi au jeudi", "Lundi à jeudi"], x: ["Lundi—Jeudi"], r: t("ไม่ใช้ dash", "No dash"), p: 28 },
    ja: { s: ["月曜日から木曜日", "月曜日～木曜日"], r: t("ใช้ ～ เต็มความกว้าง หรือ から", "Full-width ～ or から"), p: 46 },
    ko: { s: "월요일–목요일", r: t("en dash ไม่เว้นวรรค", "En dash, no spaces"), p: 23 },
    "zh-hans": { s: "周一 – 周五", r: t("en dash มีเว้นวรรค", "En dash with spaces"), w: t("ต้นฉบับในตัวอย่างคือ Monday–Thursday แต่คำแปลเขียน 周五 (วันศุกร์)", "The example's English is Monday–Thursday, but the translation says 周五 (Friday)"), p: 24 },
    "zh-hant": { s: "週一至週四", r: t("ตัด dash ใช้ 至", "Drop the dash and use 至"), p: 27 } } },
  { cat: "date", th: "ปีรัชศกญี่ปุ่น", en: "Japanese era years", v: {
    de: null, fr: null,
    ja: { s: ["令和元年5月1日", "R1.05.01", "令1.05.01"], r: t("ค่าเริ่มต้นใช้ปีคริสต์ศักราช · ถ้าใช้ปีรัชศก ปีแรกเขียน 元年 ในแบบยาว แบบสั้นใช้ 1 และคั่นด้วยจุด", "Western years by default · with era names, the first year is 元年 in long form; short forms use 1 and periods"), p: "63–64" },
    ko: null, "zh-hans": null, "zh-hant": null } },

  // ---------- Time ----------
  { cat: "time", th: "รูปแบบเวลา", en: "Time format", v: {
    de: { s: "15:07 Uhr", r: t("24 ชม. · HH:MM:SS หรือ HH:MM", "24-hour · HH:MM:SS or HH:MM"), p: 37 },
    fr: { s: "15 h 07", r: t("24 ชม. · HH h MM · ใช้ : เฉพาะบางกรณี (สนามบิน รถไฟ) และต้องเป็น 4 หลัก: 10:30", "24-hour · HH h MM · a colon only in some cases (airports, trains), always 4 digits: 10:30"), p: 36 },
    ja: { s: "15:07", r: t("UI ใช้ 24 ชม. · งานการตลาดและ Adobe.com/jp ใช้ 12 ชม.", "UI: 24-hour · marketing and Adobe.com/jp: 12-hour"), p: 63 },
    ko: { s: "15:07", r: t("24 ชม. หรือ 12 ชม. คู่กับ 오전/오후", "24-hour, or 12-hour with 오전/오후"), p: 30 },
    "zh-hans": { s: "15:07", r: t("24 ชม. · HH:MM:SS หรือ HH:MM", "24-hour · HH:MM:SS or HH:MM"), p: 33 },
    "zh-hant": { s: "15:07", r: t("24 ชม. · HH:MM:SS หรือ HH:MM", "24-hour · HH:MM:SS or HH:MM"), p: 35 } } },
  { cat: "time", th: "เลข 0 นำหน้าชั่วโมง", en: "Leading zero on the hour", v: {
    de: { s: "3:07 Uhr", r: t("ไม่บังคับ", "Optional"), p: 37 },
    fr: { s: "9 h 30", r: t("ไม่ใช้ (9 h ไม่ใช่ 09 h)", "No (9 h, not 09 h)"), p: 36 },
    ja: { s: ["3:07", "午前 3:07"], r: NO, p: 63 },
    ko: { s: "오후 03:07", r: YES, p: 30 },
    "zh-hans": { s: "下午 3:07", r: NO, p: 33 },
    "zh-hant": { s: "3:07pm", r: NO, p: 35 } } },
  { cat: "time", th: ":00 กับชั่วโมงเต็ม", en: ":00 on whole hours", v: {
    de: { s: ["14:00 Uhr", "14 Uhr"], r: t("ไม่บังคับ", "Optional"), p: 37 },
    fr: { s: "2h", r: NO, w: t("ตัวอย่างในตารางไม่มีช่องว่าง ต่างจาก 15 h 07", "The table's example has no space, unlike 15 h 07"), p: 36 },
    ja: { s: ["14:00", "午後 2:00"], r: YES, p: 63 },
    ko: { r: YES, s: "오후 03:00", w: t("ตัวอย่างในตารางแปล 2pm เป็น 오후 03:00", "The table renders 2pm as 오후 03:00"), p: 30 },
    "zh-hans": null,
    "zh-hant": { s: "2:00pm", r: YES, p: 35 } } },
  { cat: "time", th: "ระบบ 12 ชม. (AM/PM)", en: "12-hour clock (AM/PM)", v: {
    de: { na: t("ไม่ใช้ ให้ใช้ 24 ชม.", "Not used; use the 24-hour clock"), p: 37 },
    fr: null,
    ja: { s: ["午前 3:00", "午後 3:00"], r: t("午前/午後 อยู่หน้าเวลา เว้นวรรคครึ่งความกว้าง", "午前/午後 before the time, with a half-width space"), p: 63 },
    ko: { s: ["오전 3시", "오후 3시"], r: t("오전/오후 อยู่หน้าชั่วโมง", "오전/오후 before the hour"), p: 30 },
    "zh-hans": { s: ["凌晨 3:00", "下午 3:00"], r: t("凌晨/上午 หรือ 下午/晚上 แล้วเว้นวรรค 1 ช่อง", "凌晨/上午 or 下午/晚上, then one space"), p: 33 },
    "zh-hant": { s: ["3am", "3pm"], r: t("ตารางใช้ am/pm แบบอังกฤษ", "The table keeps English am/pm"), p: 36 } } },
  { cat: "time", th: "ช่วงเวลา", en: "Time range", v: {
    de: { s: "14:00–15:00 Uhr", r: t("en dash ไม่เว้นวรรค", "En dash, no spaces"), p: 37 },
    fr: { s: "14–15 h", r: t("en dash", "En dash"), p: 36 },
    ja: { s: ["14:00 - 15:00", "14:00 ～ 15:00"], r: t("hyphen หรือ ～ เว้นวรรคทั้งสองข้าง", "Hyphen or ～, spaced on both sides"), p: 63 },
    ko: { s: "오후 2-3시", r: t("hyphen", "Hyphen"), p: 30 },
    "zh-hans": { s: "下午 2:00–3:00", r: t("en dash", "En dash"), p: 33 },
    "zh-hant": { s: "2–3pm", r: t("en dash", "En dash"), p: 36 } } },
  { cat: "time", th: "วันที่ + เวลา", en: "Date + time", v: {
    de: null, fr: null,
    ja: { s: ["2019/04/25 16:42", "2019年4月25日 16:42"], x: ["4月 25, 2019 4:42 午後"], r: t("เรียงจากใหญ่ไปเล็ก: ปี › เดือน › วัน › ชื่อวัน › เวลา", "Largest to smallest: year › month › day › weekday › time"), p: "62–63" },
    ko: null, "zh-hans": null, "zh-hant": null } },
  { cat: "time", th: "เขตเวลาของวันที่สัญญา", en: "Time zone for contract dates", v: {
    de: null, fr: null,
    ja: { s: "2018年10月06日 (PT)", r: t("วันต่ออายุสัญญาคงเวลา PT ไม่แปลงเป็น JST และเขียน (PT) ไม่ใช่ (PST) · วันอีเวนต์การตลาดเติม 米国時間", "Keep contract renewal dates in PT, don't convert to JST, and write (PT), not (PST) · marketing event dates get 米国時間"), p: 64 },
    ko: null, "zh-hans": null, "zh-hant": null } },

  // ---------- Numbers ----------
  { cat: "number", th: "ตัวคั่นหลักพันกับเลข 4 หลัก", en: "Separator in 4-digit numbers", v: {
    de: { s: "1.000", r: YES, p: 38 },
    fr: { s: [`1${NB}000 personnes`, "2004"], r: t("ปีไม่ต้องคั่น (2004)", "Years are not separated (2004)"), w: t("ตารางตอบ No (เว้นแต่ เช่น งบการเงิน) แต่ตัวอย่างในช่องเดียวกันมีตัวคั่น", "The table answers No (except e.g. financial statements) yet its examples are separated"), p: "36–37" },
    ja: { s: "1,000", r: YES, p: 66 },
    ko: { s: "1,000", r: YES, p: 31 },
    "zh-hans": { s: "1,000", r: YES, p: 33 },
    "zh-hant": { s: ["1,000", "1,000 個像素"], r: YES, p: "32, 36" } } },
  { cat: "number", th: "ตัวเลขติดลบ", en: "Negative numbers", v: {
    de: { s: "-5", r: t("hyphen", "Hyphen"), p: "29, 38" },
    fr: { s: "-5", r: t("hyphen ไม่เว้นวรรค", "Hyphen, no space"), p: "29, 37" },
    ja: { s: "-45 度", x: ["マイナス 45 度"], r: t("hyphen ครึ่งความกว้าง ไม่เว้นวรรคก่อนตัวเลข", "Half-width hyphen, no space before the number"), p: "45, 66" },
    ko: { s: "-5", r: t("hyphen ไม่เว้นวรรค", "Hyphen, no space"), p: "23, 31" },
    "zh-hans": { s: "-5", r: t("ตารางตัวเลขให้ใช้ hyphen", "The numbers table says hyphen"), w: t("ตาราง dash หน้า 24 ให้ใช้ en dash (–5) ขัดกับตารางตัวเลข", "The dash table on page 24 says en dash (–5), contradicting the numbers table"), p: "24, 33" },
    "zh-hant": { s: "-5", x: ["負 5"], r: t("ตามต้นฉบับ", "As in the source"), p: "28, 36" } } },
  { cat: "number", th: "เปอร์เซ็นต์", en: "Percent", v: {
    de: { s: `5${NB}%`, r: t("% หลังตัวเลข คั่นด้วย NBSP", "% after the number, with an NBSP"), p: 38 },
    fr: { s: `5${NB}%`, r: t("% หลังตัวเลข คั่นด้วย NBSP", "% after the number, with an NBSP"), p: "26, 37" },
    ja: { s: ["5%", "5％"], r: t("UI: % ครึ่งความกว้าง · เอกสาร: ％ เต็มความกว้าง · ไม่เว้นวรรค", "UI: half-width % · docs: full-width ％ · no space"), p: 66 },
    ko: { s: "5%", r: t("ไม่เว้นวรรค", "No space"), p: 31 },
    "zh-hans": { s: "5%", r: t("ไม่เว้นวรรค", "No space"), p: 33 },
    "zh-hant": { s: "5%", r: t("ไม่เว้นวรรค", "No space"), p: 36 } } },
  { cat: "number", th: "องศา", en: "Degrees", v: {
    de: { s: ["12°", "12°C"], r: t("ไม่เว้นวรรค", "No space"), p: 38 },
    fr: { s: [`12${NB}°`, `12${NB}°C`], r: t("NBSP ก่อน °", "NBSP before °"), p: 37 },
    ja: { s: ["12°", "12℃"], r: t("° หรือ ℃ ไม่เว้นวรรค", "° or ℃, no space"), p: 66 },
    ko: { s: ["12°", "12°C"], r: t("ไม่เว้นวรรค", "No space"), p: 31 },
    "zh-hans": { s: ["12°", "12°C"], r: t("ไม่เว้นวรรค", "No space"), p: 33 },
    "zh-hant": { s: ["12°", "12°C"], r: t("ไม่เว้นวรรค", "No space"), p: 36 } } },
  { cat: "number", th: "หมายเลขเวอร์ชัน", en: "Version numbers", v: {
    de: { s: "2.0; USB 3.0", r: t("จุด", "Period"), p: 38 },
    fr: { s: "2.0, USB 3.0", r: t("จุด", "Period"), p: 37 },
    ja: { s: "2.0、USB 3.0", r: t("จุด", "Period"), p: 66 },
    ko: { s: "2.0; USB 3.0", r: t("จุด", "Period"), p: 31 },
    "zh-hans": { s: "2.0；USB 3.0", r: t("จุด", "Period"), p: 33 },
    "zh-hant": { s: "2.0; USB 3.0", r: t("จุด", "Period"), p: 36 } } },
  { cat: "number", th: "เขียนตัวเลขเป็นคำ", en: "Spelling out numbers", v: {
    de: { s: ["3 km", "7,4 kg", "6 EUR"], r: t("เลิกใช้กฎ 1–12 แล้ว · ตัวเลขที่อ่านเกิน 2 พยางค์ใช้ตัวเลข · มีหน่วยหรือสกุลเงินใช้ตัวเลข", "The old 1–12 rule is gone · numbers longer than two syllables use digits · digits with units and currencies"), p: 38 },
    fr: { s: ["Quatre-vingts employés ont été licenciés.", "Quatre-vingt-dix coureurs ont pris le départ."], r: t("vingt และ cent เติม s เมื่อถูกคูณและอยู่ท้าย · mille ไม่ผัน", "vingt and cent take an s when multiplied and final · mille never changes"), p: 37 },
    ja: { s: ["一部分", "日本一", "三重県"], r: t("ปกติใช้เลขอารบิกครึ่งความกว้าง · เลขคันจิใช้เฉพาะสำนวนตายตัว ชื่อเฉพาะ และคำกริยาวิเศษณ์", "Half-width Arabic numerals in general · kanji numerals only in fixed expressions, proper nouns and adverbials"), p: 67 },
    ko: { s: "첫 번째 네 사람", x: ["네 첫 번째 사람"], r: t("ใช้เลขอารบิกเป็นหลัก ลำดับที่ใช้คำเกาหลี · เรียง: จำนวน + ลำดับที่ + นาม", "Arabic numerals in general, Korean words for ordinals · order: cardinal + ordinal + noun"), p: 31 },
    "zh-hans": { r: t("ใช้เลขอารบิกเสมอ ไม่ใช้เลขเต็มความกว้างหรือ 一 二 三 · เติมลักษณนามตามความเหมาะสม", "Always Arabic numerals, never full-width or 一 二 三 · add measure words where needed"), p: 34 },
    "zh-hant": { s: ["一、二、三", "第一、第二、第三"], r: t("ถ้าต้นฉบับสะกดเป็นคำ ให้สะกดเป็นคำด้วย", "Spell out when the English spells out"), p: 36 } } },
  { cat: "number", th: "ตัวเลขแบบย่อ: 35,700", en: "Compact numbers: 35,700", v: {
    de: { s: ["35,7 Tsd.", "35,7 Tausend"], p: 39 },
    fr: { s: [`35,7${NB}k`, `35,7${NB}mille`], r: t("NBSP ก่อนหน่วย", "NBSP before the unit"), p: "37–38" },
    ja: { s: "3.57万", p: 68 },
    ko: { s: "3.57만", p: 32 },
    "zh-hans": { s: "3.57万", p: 34 },
    "zh-hant": { s: "3.57萬", p: 37 } } },
  { cat: "number", th: "ตัวเลขแบบย่อ: 35,700,000", en: "Compact numbers: 35,700,000", v: {
    de: { s: ["35,7 Mio.", "35,7 Millionen"], p: 39 },
    fr: { s: [`35,7${NB}M`, `35,7${NB}millions`], p: 38 },
    ja: { s: "3570万", p: 68 },
    ko: { s: "3,570만", p: 32 },
    "zh-hans": { s: "3570万", p: 34 },
    "zh-hant": { s: "3570萬", p: 37 } } },
  { cat: "number", th: "ตัวเลขแบบย่อ: 35,700,000,000", en: "Compact numbers: 35,700,000,000", v: {
    de: { s: ["35,7 Mrd.", "35,7 Milliarden"], p: 39 },
    fr: { s: [`35,7${NB}Md`, `35,7${NB}milliards`], r: t("fr-CA: 35,7 G (นิยมในวงการเทคและการเงิน)", "fr-CA: 35,7 G (common in tech and finance)"), p: 38 },
    ja: { s: "357億", p: 68 },
    ko: { s: "357억", p: 32 },
    "zh-hans": { s: "357亿", p: 34 },
    "zh-hant": { s: "357億", p: 37 } } },
  { cat: "number", th: "เลขใหญ่ที่มีหน่วยคันจิในประโยค", en: "Large numbers with kanji units", v: {
    de: null, fr: null,
    ja: { s: ["14億4200万人", "357万3570"], x: ["357.357万"], r: t("ไม่ใช้ตัวคั่นหลักพัน · ในประโยคไม่ใช้จุดทศนิยม", "No thousands separator · no decimal point in running text"), p: "66, 68" },
    ko: null, "zh-hans": null, "zh-hant": null } },

  // ---------- Currency ----------
  { cat: "currency", th: "ดอลลาร์สหรัฐ ($123)", en: "US dollars ($123)", v: {
    de: { s: `123${NB}$`, r: t("ในข้อความวางหลังตัวเลข คั่นด้วย NBSP · ใช้สัญลักษณ์หรือรหัส ISO ตามต้นฉบับ", "In running text after the number, with an NBSP · symbol or ISO code as in the source"), p: 40 },
    fr: { s: `123${NB}$`, r: t("สัญลักษณ์หรือชื่อย่ออยู่หลังตัวเลข คั่นด้วย NBSP", "Symbol or abbreviation after the number, with an NBSP"), p: 39 },
    ja: { s: ["79.99 US ドル", "79.99 ドル"], x: ["8,887 円"], r: t("USD79.99 ห้ามแปลงเป็นเยน", "USD79.99; don't convert to yen"), p: 71 },
    ko: { s: "123달러", r: t("เขียนสัญลักษณ์เป็นคำ 달러", "Write the symbol as the word 달러"), p: 33 },
    "zh-hans": { s: "$ 123", r: t("สัญลักษณ์หรือรหัส ISO อยู่หน้าตัวเลขเสมอ เว้นวรรค 1 ช่อง", "Symbol or ISO code always before the number, with a space"), p: 35 },
    "zh-hant": { s: "美金 123 元", w: t("กฎให้ใช้รหัส ISO หน้าตัวเลขแล้วเว้นวรรค แต่ตัวอย่างในตารางเขียนเป็นคำ", "The rule says ISO code before the number with a space, but the example uses words"), p: 38 } } },
  { cat: "currency", th: "ยูโร (EUR123.4)", en: "Euros (EUR123.4)", v: {
    de: { s: `123,40${NB}EUR`, r: t("ทศนิยม 2 หลักเสมอ · ,00 แทนด้วย en dash ได้", "Always two decimals · ,00 may become an en dash"), p: "27, 40" },
    fr: { s: [`123,40${NB}EUR`, `123,40${NB}€`], p: 39 },
    ja: { s: "59,98 €", r: t("UI: สกุลเงินต่างประเทศในใบเสร็จหรือแผนราคาไม่ต้องแปล", "UI: leave foreign currency on receipts and plans as is"), p: 71 },
    ko: { s: "123.4유로", r: t("เขียนเป็นคำ 유로 · ไม่แสดงทศนิยม .00", "Write the word 유로 · .00 decimals are usually dropped"), p: 33 },
    "zh-hans": { s: "EUR 123.4", p: 35 },
    "zh-hant": { s: "歐元 123.4 元", p: 38 } } },
  { cat: "currency", th: "สกุลเงินท้องถิ่น / ข้อยกเว้น", en: "Local currency / exceptions", v: {
    de: { s: "CHF 123.40", r: t("สวิตเซอร์แลนด์: รหัสอยู่หน้าตัวเลข คั่นด้วย NBSP", "Switzerland: code before the number, with an NBSP"), p: 40 },
    fr: null,
    ja: { s: ["5,980 円", "980 円"], x: ["円 5,980", "980.00 円", "¥980"], r: t("円 หลังตัวเลข ไม่มีทศนิยม · UI ห้ามใช้ ¥ ครึ่งความกว้าง · ถ้าใช้ ¥ ต้องเป็น U+00A5 ไม่ใช่ U+005C", "円 after the number, no decimals · no half-width ¥ in UI · any ¥ must be U+00A5, not U+005C"), p: "54, 71" },
    ko: null, "zh-hans": null, "zh-hant": null } },
  { cat: "currency", th: "ภาษีมูลค่าเพิ่ม (VAT)", en: "VAT labels", v: {
    de: { s: ["(inkl. MwSt.)", "(zzgl. MwSt.)"], r: t("inkl.: ราคาผู้ใช้ทั่วไปในส่วนท้ายอีเมล · zzgl.: ราคา B2B (teams, enterprise, education)", "inkl.: consumer prices in email footers · zzgl.: B2B prices (teams, enterprise, education)"), p: 40 },
    fr: null, ja: null, ko: null, "zh-hans": null, "zh-hant": null } },

  // ---------- Units ----------
  { cat: "units", th: "ระบบหน่วย", en: "Measurement system", v: {
    de: { r: t("ใช้หน่วยเมตริกเท่านั้น แปลง inch, feet, °F ถ้าจำเป็น", "Metric only; convert inches, feet and °F if needed"), p: 36 },
    fr: null, ja: null,
    ko: { r: t("แปลงหน่วยอเมริกัน (inch, feet, °F) เป็นเมตริกและแปล เว้นแต่มีคำสั่งอื่น", "Convert US units (inch, feet, °F) to metric and translate them unless told otherwise"), p: 29 },
    "zh-hans": null, "zh-hant": null } },
  { cat: "units", th: "ช่องว่างระหว่างตัวเลขกับหน่วย", en: "Space between number and unit", v: {
    de: { s: [`80${NB}MB`, `100${NB}MHz`, `3${NB}V`], r: t("เว้นวรรค ควรเป็น NBSP (ในตารางไม่ต้อง)", "A space, preferably NBSP (not needed in tables)"), p: "38–39" },
    fr: { s: [`80${NB}Mo`, `100${NB}MHz`, `3${NB}V`], r: t("NBSP", "NBSP"), p: "37–38" },
    ja: { s: ["255 MB", "100 cm", "50 枚"], r: t("เว้นวรรคครึ่งความกว้าง ยกเว้น % และ ° · Adobe.com/jp ไม่เว้น", "Half-width space, except % and ° · none on Adobe.com/jp"), p: "66, 69" },
    ko: { s: ["80MB", "100MHz", "3V"], r: t("ไม่เว้นวรรค", "No space"), p: "31–32" },
    "zh-hans": { s: ["80 MB", "100 MHz", "3 V"], r: t("เว้นวรรค", "A space"), p: "33–34" },
    "zh-hant": { s: ["80MB", "100MHz", "3V"], r: t("ไม่เว้นวรรค", "No space"), p: 36 } } },
  { cat: "units", th: "ความยาวและน้ำหนัก", en: "Length and weight", v: {
    de: { s: ["mm", "cm", "m", "km", "mg", "g", "kg"], r: t("ตัวย่อไม่แปล · ชื่อเต็มแปล (Kilometer)", "Abbreviations unchanged · full names translated (Kilometer)"), p: 39 },
    fr: { s: ["mm", "cm", "m", "km", "mg", "g", "kg"], r: t("ตัวย่อไม่แปล · ชื่อเต็ม: kilomètre", "Abbreviations unchanged · full name: kilomètre"), p: 38 },
    ja: { s: ["10 m", "10 cm", "10 メートル"], r: t("ปกติใช้หน่วยแบบต้นฉบับ บางกรณีใช้คาตาคานะ", "Usually the source's unit; katakana in some cases"), p: 70 },
    ko: { s: ["mm", "cm", "m", "km", "mg", "g", "kg"], r: t("ชื่อเต็ม: 킬로미터 · 킬로그램", "Full names: 킬로미터 · 킬로그램"), p: 32 },
    "zh-hans": { s: ["毫米", "厘米", "米", "千米", "毫克", "克", "千克"], r: t("ตัวย่อก็ใช้ชื่อจีน", "Abbreviations also become Chinese names"), p: 34 },
    "zh-hant": { s: ["公釐", "公分", "公尺", "公里", "毫克", "克", "公斤"], r: t("ตัวย่อก็ใช้ชื่อจีน", "Abbreviations also become Chinese names"), p: 37 } } },
  { cat: "units", th: "ขนาดไฟล์", en: "File sizes", v: {
    de: { s: ["kB", "MB", "GB", "TB"], p: 39 },
    fr: { s: ["Ko", "Mo", "Go", "To"], r: t("octet: kilo-octet, mégaoctet", "Octets: kilo-octet, mégaoctet"), p: "38–39" },
    ja: { s: ["10 バイト", "10 KB", "10 MB", "10 GB"], r: t("byte แปลเป็น バイト · หน่วยอื่นคงตัวพิมพ์ใหญ่ตามต้นฉบับ", "byte becomes バイト · other units stay in capitals as in the source"), p: 70 },
    ko: { s: ["kB", "MB", "GB", "TB"], p: 32 },
    "zh-hans": { s: ["kB", "MB", "GB", "TB"], r: t("ชื่อเต็ม: 千字节 · 兆字节 · 千兆字节", "Full names: 千字节 · 兆字节 · 千兆字节"), p: 34 },
    "zh-hant": { s: ["B", "kB", "MB", "GB"], r: t("byte = 位元組", "byte = 位元組"), p: 37 } } },
  { cat: "units", th: "เมกะบิต", en: "Megabit", v: {
    de: { s: "Mb", p: 40 }, fr: { s: "Mbit", p: 39 }, ja: { s: "Mb", p: 69 },
    ko: { s: "Mb", p: 32 }, "zh-hans": { s: "Mb", p: 35 }, "zh-hant": { s: "Mb", p: 38 } } },
  { cat: "units", th: "พิกเซล", en: "Pixel", v: {
    de: { s: "px", p: 39 }, fr: { s: "px", p: 39 },
    ja: { s: ["10 pixel", "10 px"], r: t("ตัด s พหูพจน์", "Drop the plural -s"), p: 70 },
    ko: { s: "px", p: 32 }, "zh-hans": { s: "像素", p: 35 }, "zh-hant": { s: "像素", p: 37 } } },
  { cat: "units", th: "พอยต์และนิ้ว", en: "Points and inches", v: {
    de: null, fr: null,
    ja: { s: ["10 pt", "10 ポイント", "10 in", "10 インチ"], r: t("ตัด s พหูพจน์ (5.25 inch ไม่ใช่ inches)", "Drop the plural -s (5.25 inch, not inches)"), p: "69–70" },
    ko: { s: ["포인트", "인치"], r: t("ตัวย่อของ point: pt", "Abbreviation for point: pt"), p: 32 },
    "zh-hans": { s: "英寸", r: t("ถ้าต้นฉบับใช้ \" แทนนิ้ว จะคงไว้หรือแปลเป็น 英寸 ก็ได้", "If the source uses \" for inches, keep it or write 英寸"), p: "27, 35" },
    "zh-hant": { s: ["點", "英吋"], r: t("ตัวย่อของ point และ inch ก็ใช้ 點 และ 英吋", "The abbreviations for point and inch are also 點 and 英吋"), p: 38 } } },
  { cat: "units", th: "หน่วยเวลา", en: "Time units", v: {
    de: { s: ["ms", "s", "h"], r: t("ตัวย่อไม่แปล", "Abbreviations unchanged"), p: 39 },
    fr: null,
    ja: { s: ["時間", "分", "秒", "残り 1 分 30 秒"], r: t("h / min / sec แปลเป็นคันจิ", "h / min / sec become kanji"), p: 69 },
    ko: null, "zh-hans": null, "zh-hant": null } },

  // ---------- Punctuation ----------
  { cat: "punct", th: "เครื่องหมายคำพูด", en: "Quotation marks", v: {
    de: { s: "„Die Anwendung ist hervorragend.“", r: t("„ “ แบบงานพิมพ์ ยกเว้นในโค้ดและค่าพารามิเตอร์", "Typographic „ “, except in code and parameter values"), p: 31 },
    fr: { s: `«${NB}L’application est excellente.${NB}»`, r: t("« » มี NBSP ด้านใน", "« » with NBSPs inside"), p: "29, 31" },
    ja: { s: "「アプリケーションは素晴らしいです」", r: t("「 」 เต็มความกว้าง ไม่เว้นวรรคด้านใน · เว้นวรรคครึ่งความกว้างด้านนอกเมื่อติดอักษรอื่น", "Full-width 「 」, no space inside · half-width space outside next to other text"), p: "49–50" },
    ko: { s: "“이 앱은 훌륭합니다.”", r: t("“ ” แบบโค้ง", "Curly “ ”"), p: 25 },
    "zh-hans": { s: "“这款应用程序真棒。”", r: t("“ ” แบบ double-byte", "Double-byte “ ”"), p: "26–27" },
    "zh-hant": { s: "「這個應用程式很棒。」", r: t("「 」", "「 」"), p: 30 } } },
  { cat: "punct", th: "คำพูดซ้อน", en: "Nested quotations", v: {
    de: { s: "„… ‚…‘ …“", r: t("ด้านในใช้ ‚ ‘", "‚ ‘ inside"), p: "31–32" },
    fr: { s: `«${NB}… "…" …${NB}»`, r: t("ด้านในใช้ \" แบบตรง ไม่เว้นวรรค · ห้ามใช้ ‘ ’", "Straight \" inside, no spaces · never ‘ ’"), p: "31–32" },
    ja: { s: "「…『…』…」", r: t("ด้านในใช้ 『 』 · ชื่อหนังสือและภาพยนตร์ก็ใช้ 『 』", "『 』 inside · book and movie titles also use 『 』"), p: "26, 50" },
    ko: { s: "“… ‘…’ …”", p: 26 },
    "zh-hans": { s: "“…‘…’…”", r: t("ด้านในใช้ ‘ ’", "‘ ’ inside"), p: 27 },
    "zh-hant": { s: "「…『…』…」", p: 31 } } },
  { cat: "punct", th: "จุดท้ายประโยคในเครื่องหมายคำพูด", en: "Period with quoted sentences", v: {
    de: { s: "Er sagte: „Morgen.“", x: ["Er sagte: „Morgen“."], r: t("ประโยคเต็มในเครื่องหมายคำพูด: จุดอยู่ข้างใน", "Full sentence in quotes: period inside"), p: "29–30" },
    fr: { s: `Il a dit${NB}: «${NB}Demain.${NB}»`, r: t("ประโยคเต็ม: จุดอยู่ข้างใน · วรรคตอนที่ไม่ใช่ของคำพูดอยู่นอก", "Full sentence: period inside · punctuation that isn't part of the quote goes outside"), p: 29 },
    ja: { s: "「効果を検証して、最適な方法を選択したい」", x: ["「効果を検証して、最適な方法を選択したい。」"], r: t("ไม่ใส่ 。 ท้ายประโยคใน 「 」 หรือวงเล็บ · ไม่ใส่ 、 ติด 「 」", "No 。 at the end of a sentence inside 「 」 or parentheses · no 、 next to 「 」"), p: 56 },
    ko: { s: "그 사람이 말했습니다. “내일.”", p: "23–24" },
    "zh-hans": { s: "他说：“明天。”", x: ["他说：“明天”。"], p: 25 },
    "zh-hant": { s: "他說：「明天。」", p: 28 } } },
  { cat: "punct", th: "อ้างชื่อ UI ในเนื้อหา", en: "Referring to UI in text", v: {
    de: { s: "Wählen Sie im Menü „Dokument“ den Befehl „Datei anhängen“.", r: t("ใช้ „ “ กับชื่อ UI เมื่อต้นฉบับไม่มีรูปแบบพิเศษ", "„ “ around UI names when the source has no special formatting"), p: "22, 24" },
    fr: { s: "Dans le menu Document, sélectionnez la commande Joindre un fichier.", r: t("ไม่ใส่เครื่องหมายคำพูด · ชื่อ UI ขึ้นต้นตัวใหญ่", "No quotation marks · UI names start with a capital"), p: "16, 23" },
    ja: { s: ["「別名で保存」コマンド", "表示メニュー"], r: t("คำสั่ง ตัวเลือก ช่องข้อความใส่ 「 」 · เมนู หน้าต่าง กล่องโต้ตอบไม่ต้องใส่", "Commands, options and text boxes in 「 」 · menus, windows and dialog boxes without"), p: "26–27" },
    ko: { s: "[문서] 메뉴에서 [파일 첨부]를 선택하십시오.", r: t("ใช้ [ ] กับชื่อ UI", "[ ] around UI names"), p: "19, 26" },
    "zh-hans": { s: "在“文档”菜单中，选择“附加文件”命令。", r: t("ใช้ “ ” ถ้าไม่ได้เป็นตัวหนาอยู่แล้ว · ตัวเอียงให้เปลี่ยนเป็น “ ”", "“ ” unless already bold · italics become “ ”"), p: 20 },
    "zh-hant": { s: "從「文件」選單，選擇「附加檔案」指令。", r: t("ใช้ 「 」", "「 」"), p: 23 } } },
  { cat: "punct", th: "เส้นทางเมนู", en: "Menu paths", v: {
    de: null, fr: null,
    ja: { s: "レイヤー／新規／レイヤー", x: ["レイヤー＞新規＞レイヤー"], r: t("คั่นด้วย ／ เต็มความกว้าง แม้ต้นฉบับใช้ >", "Separate with full-width ／, even if the source uses >"), p: "25–26, 51" },
    ko: null,
    "zh-hans": { s: "“查看”>“导航标签”>“目标”", p: 16 },
    "zh-hant": null } },
  { cat: "punct", th: "ทวิภาค (:)", en: "Colon", v: {
    de: { s: "Hinweis: Es wird empfohlen …", x: ["Hinweis: es wird empfohlen …"], r: t("ถ้าตามด้วยประโยคเต็มให้ขึ้นต้นตัวใหญ่ · เว้นวรรค 1 ช่องหลัง :", "Capitalize a full sentence after it · one space after"), p: "27–28" },
    fr: { s: `Remarque${NB}: il est recommandé …`, r: t("NBSP ก่อน : · คำหลัง : เป็นตัวเล็ก ยกเว้นตามด้วยคำพูดเต็มประโยค", "NBSP before : · lowercase after it unless a full quotation follows"), p: "26–27" },
    ja: { s: ["作成日 : {0}", "作成日：{0}", "16:9"], r: t("UI: : ครึ่งความกว้าง เว้นวรรคสองข้าง · เอกสาร/เว็บ: ： เต็มความกว้าง · อัตราส่วนมาตรฐาน (16:9) ไม่เว้น", "UI: half-width : spaced on both sides · docs/web: full-width ： · standard ratios (16:9) unspaced"), p: "44–45" },
    ko: { s: "참고: 저장된 …", x: ["참고 : 저장된 …"], r: t("ไม่เว้นวรรคก่อน :", "No space before the colon"), p: 22 },
    "zh-hans": { s: ["注意：建议使用 …", "错误 - 无法打开文件"], r: t("เอกสาร: ： double-byte ไม่เว้นวรรค · UI: ไม่ใช้ :", "Docs: double-byte ：, no spaces · UI: no colon"), p: 23 },
    "zh-hant": { s: "注意：您還沒有傳送任何資料。", x: ["注意: 您還沒有傳送任何資料。"], r: t("： double-byte", "Double-byte ："), p: 27 } } },
  { cat: "punct", th: "อัฒภาค (;)", en: "Semicolon", v: {
    de: { r: t("ใช้ตามกฎเยอรมัน เชื่อมประโยคที่เกี่ยวข้องกันมาก · เว้นวรรค 1 ช่องหลัง", "Per German rules, to join closely related clauses · one space after"), p: 28 },
    fr: { r: t("NBSP ก่อน ;", "NBSP before ;"), p: 26 },
    ja: { s: "不明なエラー : rc=%d", r: t("UI: เลี่ยง ใช้ : แทน · เอกสาร/เว็บ: ไม่ใช้", "UI: avoid, use a colon instead · docs/web: don't use"), p: "44–45" },
    ko: { na: t("ไม่ใช้ในภาษาเกาหลี เปลี่ยนเป็น , หรือ .", "Not used in Korean; use a comma or period"), p: 22 },
    "zh-hans": { s: "；", r: t("double-byte เสมอ ไม่เว้นวรรค ใช้น้อยกว่าในภาษาอังกฤษ", "Always double-byte, no spaces; rarer than in English"), p: 23 },
    "zh-hant": { s: "；", r: t("double-byte", "Double-byte"), p: 27 } } },
  { cat: "punct", th: "เครื่องหมายคำถาม", en: "Question mark", v: {
    de: { r: t("ตามกฎเยอรมัน ไม่ตามอังกฤษ", "German rules, not English"), p: 32 },
    fr: { s: `Voulez-vous enregistrer le fichier${NB}?`, r: t("NBSP ก่อน ?", "NBSP before ?"), p: "26–27" },
    ja: { s: "プロジェクトを保存しますか？", x: ["フォルダーを削除?"], r: t("？ เต็มความกว้าง · ไม่ใช้กับวลีนาม (体言止め) ให้เขียนเป็นประโยคคำถาม", "Full-width ？ · not after a noun phrase (体言止め); write a full question"), p: 52 },
    ko: { s: "계속하시겠습니까?", r: t("ตามกฎเกาหลี ไม่ตามอังกฤษ", "Korean rules, not English"), p: 27 },
    "zh-hans": { r: t("double-byte · ใน URL และพารามิเตอร์คงแบบอังกฤษ", "Double-byte · English form in URLs and parameters"), p: 28 },
    "zh-hant": { s: "這是有效的數字嗎?", r: t("? แบบ single-byte", "Single-byte ?"), p: 32 } } },
  { cat: "punct", th: "เครื่องหมายอัศเจรีย์", en: "Exclamation mark", v: {
    de: { s: ["Herzlichen Glückwunsch!", "Gültige Nummer eingeben."], r: t("ใช้ ! ตามกฎเยอรมัน แต่ข้อความสั่งทั่วไปลงท้ายด้วยจุด", "! per German rules, but plain instructions end with a period"), p: 32 },
    fr: { s: "Félicitations.", x: ["Félicitations !"], r: t("Adobe ให้เลี่ยง ! ใช้จุดแทน", "Adobe avoids !; use a period"), p: "5, 33" },
    ja: { s: ["保存しました", "予期しないエラーです。"], x: ["保存済み!"], r: t("โดยทั่วไปไม่ใช้ ! ใช้ 。 หรือเขียนใหม่", "No ! as a rule; use 。 or rephrase"), p: 52 },
    ko: { r: t("ใช้กันทั่วไป ถ้าต้นฉบับมี ! ใช้ได้", "Common; fine where the source has one"), p: 27 },
    "zh-hans": { s: "恭喜！", r: t("double-byte", "Double-byte"), p: 28 },
    "zh-hant": { s: "恭喜！", x: ["恭喜!"], r: t("double-byte", "Double-byte"), p: 32 } } },
  { cat: "punct", th: "จุดไข่ปลา", en: "Ellipsis", v: {
    de: { s: ["Wird geladen …", "Suchen…"], r: t("ใช้ … (U+2026) ไม่ใช่ ... · ท้ายประโยคเว้นวรรคก่อน … แต่ใน UI string ไม่ต้อง", "Use … (U+2026), not ... · a space before a sentence-final …, but not in UI strings"), p: "30–31" },
    fr: { s: "Chargement…", r: t("ใช้ … (U+2026)", "Use … (U+2026)"), p: "29–30" },
    ja: { s: ["読み込み中...", "環境設定..."], x: ["…"], r: t("ใช้จุดครึ่งความกว้าง 3 จุด ห้ามใช้ … ・ หรือ ．", "Three half-width periods; never …, ・ or ．"), p: 48 },
    ko: { s: "가져오는 중…", r: t("ใช้ … (U+2026)", "Use … (U+2026)"), p: "24–25" },
    "zh-hans": { s: "正在加载…", r: t("ใช้ … แบบอังกฤษ (U+2026)", "The English ellipsis … (U+2026)"), p: "25–26" },
    "zh-hant": { s: "載入中…", x: ["‧‧‧", "……"], r: t("ใช้ … (U+2026)", "Use … (U+2026)"), p: 30 } } },
  { cat: "punct", th: "ช่วงตัวเลข (0–23)", en: "Number range (0–23)", v: {
    de: { s: "0–23", x: ["0-23"], r: t("en dash ไม่เว้นวรรค", "En dash, no spaces"), p: 28 },
    fr: { s: ["entre 0 et 23", "pages 301 à 306", "pp. 301-306"], r: t("ในประโยคใช้คำ · ในรายการใช้ hyphen ไม่เว้นวรรค", "Words in sentences · hyphen without spaces in lists"), p: "27–28" },
    ja: { s: ["0 ～ 23", "0 から 23", "1～5 秒"], r: t("～ เต็มความกว้าง หรือ から · UI เว้นวรรครอบ ～ ส่วนเอกสาร/เว็บไม่เว้น", "Full-width ～ or から · spaced in UI, unspaced in docs/web"), p: "45–46" },
    ko: { s: "0-23", x: ["0 - 23"], r: t("hyphen ไม่เว้นวรรค", "Hyphen, no spaces"), p: 23 },
    "zh-hans": { s: "0 – 23", x: ["0—23"], r: t("en dash มีเว้นวรรค", "En dash with spaces"), p: "23–24" },
    "zh-hant": { s: "0 至 23", x: ["0-23"], r: t("เปลี่ยน dash เป็น 至", "Replace the dash with 至"), p: 27 } } },
  { cat: "punct", th: "ช่วงที่มีหน่วย (2 kg–3 kg)", en: "Range with units (2 kg–3 kg)", v: {
    de: { s: "2–3 kg", x: ["2-3 kg"], p: 28 },
    fr: { s: `2${NB}kg – 3${NB}kg`, r: t("en dash เว้นวรรคทั้งสองข้าง", "En dash, spaced"), p: 28 },
    ja: { s: "2 ～ 3 kg", x: ["2 kg – 3 kg"], r: t("ใส่หน่วยหลังตัวเลขตัวท้ายเท่านั้น", "Unit only after the second number"), p: "46, 67" },
    ko: { s: "2 kg–3 kg", x: ["2 kg – 3 kg"], r: t("en dash ไม่เว้นวรรค", "En dash, no spaces"), p: 23 },
    "zh-hans": { s: "2 kg – 3 kg", x: ["2 kg—3 kg"], r: t("en dash มีเว้นวรรค", "En dash with spaces"), p: 24 },
    "zh-hant": { s: "2 至 3 公斤", x: ["2-3 公斤"], p: 27 } } },
  { cat: "punct", th: "Dash กลางประโยค", en: "Dashes in sentences", v: {
    de: { s: "Davon profitieren Ihre Kunden und Kundinnen – und Ihr Geschäft.", r: t("en dash มีเว้นวรรค ใช้ NBSP กันตัดบรรทัด", "Spaced en dash, with an NBSP to keep it on the line"), p: "27–28" },
    fr: { s: `— vous verrez plus tard comme c’est facile${NB}—`, r: t("ส่วนใหญ่เปลี่ยนเป็นจุลภาคหรือวงเล็บ · em dash ใช้กับข้อความแทรก เว้นวรรคสองข้าง ด้านในเป็น NBSP", "Usually a comma or parentheses · em dash for asides, spaced, with NBSPs inside"), p: 28 },
    ja: { s: "（95％もの生徒）", r: t("ไม่ใช้ en dash / em dash ใช้วงเล็บหรือเรียบเรียงประโยคใหม่", "No en or em dashes; use parentheses or restructure"), p: "45–46" },
    ko: { r: t("ตัดออกแล้วเรียบเรียงประโยคใหม่", "Drop it and restructure the sentence"), p: 23 },
    "zh-hans": { r: t("เลี่ยง em dash ใช้ en dash (เว้นวรรค) หรือเรียบเรียงใหม่ด้วย ，", "Avoid em dashes; use a spaced en dash or restructure with ，"), p: 23 },
    "zh-hant": { r: t("ตัดออกได้ ถ้าคงไว้จะอ่านแล้วรู้ว่าเป็นงานแปล", "Can be dropped; keeping it reads like a translation"), p: 27 } } },
  { cat: "punct", th: "วงเล็บ", en: "Parentheses", v: {
    de: { s: "Der Hund ist im Garten (und kommt auf Zuruf zurück).", r: t("วงเล็บกลม · วงเล็บเหลี่ยมสำหรับคำอธิบาย · ประโยคบางส่วนในวงเล็บ จุดอยู่นอก", "Round brackets · square brackets for explanations · partial sentence in brackets: period outside"), p: "32–33" },
    fr: { s: "Partie de la phrase (entre parenthèses).", r: t("ในวงเล็บไม่ขึ้นต้นตัวใหญ่ วรรคตอนอยู่นอก · เลี่ยงประโยคเต็มในวงเล็บ", "No capital inside, punctuation outside · avoid whole sentences in brackets"), p: 33 },
    ja: { s: ["2/0 (ステレオ) にダウンミックス", "（37 ページ参照）"], r: t("UI: ( ) ครึ่งความกว้าง เว้นวรรคด้านนอก ไม่เว้นด้านใน · เอกสาร/เว็บ: （ ） เต็มความกว้าง", "UI: half-width ( ), space outside, none inside · docs/web: full-width （ ）"), p: "50–51, 56" },
    ko: { s: "문장의 일부(괄호 안).", x: ["문장의 일부.(괄호 안)"], r: t("ไม่เว้นวรรคก่อนวงเล็บ · ประโยคเต็มในวงเล็บมีจุดข้างใน", "No space before the bracket · a whole sentence inside takes its period inside"), p: "24, 27" },
    "zh-hans": { s: "部分句子（括号中的内容）。", r: t("มีอักษรจีนในวงเล็บ: （ ） double-byte ไม่เว้นวรรค · เป็นอังกฤษ/ตัวเลขล้วน: ( ) เว้นวรรคด้านนอก · [ ] ใช้ single-byte", "Chinese inside: double-byte （ ）, no spaces · only Latin/digits: ( ) with a space outside · [ ] always single-byte"), p: "28–29" },
    "zh-hant": { s: "最亮點 (8 位元)：", x: ["最亮點（8 位元）："], r: t("( ) single-byte เว้นวรรคด้านนอก ยกเว้นติดเครื่องหมายวรรคตอน", "Single-byte ( ) with a space outside, except next to punctuation"), p: 32 } } },
  { cat: "punct", th: "จุลภาคและการคั่นรายการ", en: "Commas and list separators", v: {
    de: { r: t("ตาม Duden · จุลภาคก่อน und / oder จะใส่หรือไม่ก็ได้", "Duden rules · a comma before und / oder is optional"), p: 32 },
    fr: { s: "Windows 7, Windows 8 ou Windows Server", x: ["Windows 7, Windows 8, ou Windows Server"], r: t("ไม่ใส่จุลภาคก่อน et / ou · fr-CA ใส่จุลภาคก่อน mais เสมอ", "No comma before et / ou · fr-CA always puts a comma before mais"), p: 32 },
    ja: { s: ["ただし、ファイルを保存する前に", "電子サイン, 電子サインソフトウェア"], x: ["ただし，"], r: t("、 เต็มความกว้าง (ไม่ใช่ ，) · รายการ metadata ใช้ , ครึ่งความกว้างตามต้นฉบับ", "Full-width 、 (not ，) · metadata lists keep the half-width ,"), p: "47–48" },
    ko: { s: "Windows 7, Windows 8, 또는 Windows Server", r: t("ใช้จุลภาคให้ความหมายชัด ไม่จำเป็นต้องตรงกับอังกฤษ", "Use commas where they clarify; they needn't match the English"), p: "26–27" },
    "zh-hans": { s: "Windows 7、Windows 8 或 Windows Server", r: t("รายการใช้ 、 · การหยุดในประโยคใช้ ，", "、 between list items · ， for pauses"), p: 28 },
    "zh-hant": { s: "Windows 7、Windows 8 或 Windows Server", r: t("รายการใช้ 、 · จุลภาคอื่นใช้ ， double-byte", "、 between list items · double-byte ， otherwise"), p: "31–32" } } },
  { cat: "punct", th: "จุด และหัวข้อ", en: "Periods and headings", v: {
    de: { r: t("หัวข้อ ชื่อเรื่อง คำบรรยายภาพไม่ใส่จุด ยกเว้นเป็นประโยคเต็ม (พาดหัวงานการตลาดใส่จุด) · หลังจุดเว้นวรรค 1 ช่อง", "No period in headings, titles or captions unless a full sentence (marketing headlines do take one) · one space after a period"), p: 29 },
    fr: { r: t("หัวข้อไม่ใส่จุด · ประโยคเต็มต้องมีจุดแม้อังกฤษไม่มี", "No period in headings · full sentences take a period even if the English doesn't"), p: 29 },
    ja: { s: "文書がありません。", x: ["文書がありません．"], r: t("ท้ายประโยคใช้ 。 · หัวข้อ รายการ หัวเรื่องอีเมลไม่ใส่ 。 · จุดทศนิยมใช้ . ครึ่งความกว้าง", "Sentence end: 。 · none in headings, list items or email subjects · half-width . for decimals"), p: "47, 56–57" },
    ko: { r: t("ไม่เว้นวรรคก่อนจุด · เว้นวรรค 1 ช่องหลังจุด", "No space before a period · one space after"), p: 23 },
    "zh-hans": { s: "别具一格的版面，只有 InDesign 做得到", r: t("ใช้ 。 double-byte ไม่ต้องเว้นวรรคตาม · หัวข้อหน้าเว็บ: ตัดจุดท้าย จุดกลางเปลี่ยนเป็น ，", "Double-byte 。, no space after · web titles: drop the final period, turn inner ones into ，"), p: "24–25" },
    "zh-hant": { s: "數位出版物，令人驚豔的互動", r: t("ใช้ 。 double-byte · หัวข้อหน้าเว็บ: ตัดจุดท้าย จุดกลางเปลี่ยนเป็น ，", "Double-byte 。 · web titles: drop the final period, turn inner ones into ，"), p: "28–29" } } },
  { cat: "punct", th: "ช่องว่าง", en: "Spacing", v: {
    de: { s: [`z.${NB}B.`, `120${NB}km`, `9${NB}Uhr`, `XYZ${NB}AG`], r: t("ใช้ NBSP กับ: เบอร์โทรที่คั่นด้วยช่องว่าง ตัวย่อที่มีจุด ตัวเลข + หน่วย ชื่อบริษัท · ไม่ใช้กับคำใน UI", "NBSP in: spaced phone numbers, dotted abbreviations, numbers + units, company names · not in UI terms"), p: 27 },
    fr: { s: [`13${NB}987`, `15${NB}novembre`, `novembre${NB}1998`, `Mme${NB}Durand`], r: t("NBSP ก่อนเครื่องหมายคู่ทุกตัว (« » : ; ! ?) และใน หลักพัน ตัวเลข + หน่วย/สกุลเงิน/% วัน + เดือน เดือน + ปี · ไม่ใช้ในโค้ด URL อีเมล", "NBSP before every double mark (« » : ; ! ?) and in thousands, number + unit/currency/%, day + month, month + year · not in code, URLs or email addresses"), p: "26–27" },
    ja: { s: ["PDF の最適化", "1 行目", "約 100 ページ"], r: t("เว้นวรรคครึ่งความกว้างระหว่างอักษรครึ่งความกว้างกับญี่ปุ่น · ไม่เว้นในวงเล็บ ก่อน (&O) รอบ ... · งานการตลาดและ Adobe.com/jp ไม่เว้น", "Half-width space between half-width and Japanese text · none inside brackets, before (&O), around ... · none in marketing or on Adobe.com/jp"), p: "42–43" },
    ko: { r: t("เว้นวรรคระหว่างคำตามกฎเกาหลี · , . ! ? ติดคำข้างหน้า", "Spaces between words per Korean rules · , . ! ? attach to the preceding word"), p: 22 },
    "zh-hans": { s: "在 Mac 上运行 Photoshop。", r: t("เว้นวรรคระหว่างอักษรจีนกับอักษรหรือสัญลักษณ์ single-byte · ไม่เว้นวรรครอบเครื่องหมายวรรคตอนจีน", "Space between Chinese and single-byte text · none around Chinese punctuation"), p: "17, 23" },
    "zh-hant": { s: "使用 Adobe PDF 印表機。", x: ["使用Adobe PDF印表機。"], r: t("เว้นวรรค single-byte 1 ช่องระหว่างอักษรจีนกับอังกฤษหรือตัวเลข", "One single-byte space between Chinese and Latin letters or digits"), p: "26–27" } } },
  { cat: "punct", th: "อะพอสทรอฟี", en: "Apostrophe", v: {
    de: { s: "Grass’ Romane", x: ["CD’s"], r: t("ใช้เฉพาะ genitive ของชื่อที่ลงท้ายด้วย s · ไม่ใช้กับพหูพจน์", "Only for the genitive of names ending in s · never in plurals"), p: "29, 32" },
    fr: { s: "L’application", r: t("’ แบบโค้ง ยกเว้นในโค้ด", "Curly ’, except in code"), p: 32 },
    ja: null,
    ko: { r: t("’ แบบโค้ง ยกเว้นในโค้ด", "Curly ’, except in code"), p: 26 },
    "zh-hans": { na: t("ไม่ใช้ ยกเว้นในชื่อแบรนด์หรือชื่อเฉพาะ", "Not used, except in brands and proper names"), p: 28 },
    "zh-hant": { s: "'", r: t("' แบบตรง ยกเว้นในโค้ด", "Straight ', except in code"), p: 31 } } },
  { cat: "punct", th: "อักขระพิเศษ # & @", en: "Special characters # & @", v: {
    de: { s: ["& → und", "@ → à"], r: t("# ไม่ใช้ในภาษาเยอรมัน · & ใช้ได้แต่ควรเขียน und ยกเว้นในชื่อเฉพาะ · @ ใช้กับอีเมลเท่านั้น", "# isn't used in German · & is acceptable but write und outside proper names · @ only in email addresses"), p: 33 },
    fr: { s: ["# → n°", "& → et", "@ → à"], r: t("@ คงไว้ใน URL", "Keep @ in URLs"), p: 33 },
    ja: { s: ["& → と", "# → 番号"], r: t("@ แปลตามความหมาย · & ใน hotkey ใช้ครึ่งความกว้าง", "Translate @ by meaning · & in hotkeys stays half-width"), p: 54 },
    ko: { s: ["# → 번호", "& → 및", "@ → 에서 / 으로"], p: 27 },
    "zh-hans": { s: ["# → 编号", "& → 和 / 与"], r: t("@ ปกติคงไว้ · & ในชื่อผลิตภัณฑ์คงไว้", "@ usually stays · & stays in product names"), p: 29 },
    "zh-hant": { s: ["# → 數目", "& → 和 / 與", "@ → 位於 / 在"], r: t("@ ในอีเมลคงไว้", "@ stays in email addresses"), p: 33 } } },
  { cat: "punct", th: "รายการ (bullet)", en: "Bulleted lists", v: {
    de: { r: t("UI ที่ไม่มีบริบท: ขึ้นต้นตัวใหญ่ ไม่มีวรรคตอนท้าย · ประโยคเต็มลงท้ายด้วยจุด · ต่อจากประโยคนำ: ตัวเล็ก ลงท้ายด้วย , หรือไม่มี", "UI without context: capital, no final punctuation · full sentences end with a period · continuations: lowercase, ending in a comma or nothing"), p: "26–27" },
    fr: { r: t("UI ที่ไม่มีบริบท: ขึ้นต้นตัวใหญ่ ไม่มีวรรคตอนท้าย · ประโยคเต็มลงท้ายด้วยจุด · ต่อจากประโยคนำ: ตัวเล็ก ลงท้ายด้วย ; ข้อสุดท้ายใช้จุด", "UI without context: capital, no final punctuation · full sentences end with a period · continuations: lowercase, ending in ;, the last with a period"), p: "25–26" },
    ja: { r: t("ใช้รูปธรรมดาหรือวลีนาม ไม่มีวรรคตอนท้าย · ถ้าทุกข้อเป็นประโยคเต็มให้ใส่ 。", "Plain form or noun phrases, no final punctuation · add 。 if every item is a full sentence"), p: 57 },
    ko: { r: t("ประโยคเต็มลงท้ายด้วยจุด · UI ที่ไม่มีบริบท: ไม่มีวรรคตอนท้าย", "Full sentences end with a period · UI without context: no final punctuation"), p: 21 },
    "zh-hans": { r: t("วรรคตอนท้ายตามต้นฉบับอังกฤษ", "Ending punctuation follows the English"), p: 22 },
    "zh-hant": { r: t("ประโยคเต็มลงท้ายด้วยจุด · ต่อจากประโยคนำลงท้ายด้วย ; ข้อสุดท้ายใช้จุด · UI ที่ไม่มีบริบท: ไม่มีวรรคตอนท้าย", "Full sentences end with a period · continuations end with ;, the last with a period · UI without context: no final punctuation"), p: 26 } } },

  // ---------- Letters & writing ----------
  { cat: "text", th: "ตัวพิมพ์ใหญ่", en: "Capitalization", v: {
    de: { s: "Benutzer zuweisen", r: t("Sentence case และคำนามทุกคำขึ้นต้นตัวใหญ่ · ชื่อผลิตภัณฑ์ใช้ Title case · ไม่ใช้ ALL CAPS เพื่อเน้น", "Sentence case with every noun capitalized · product names in title case · no all caps for emphasis"), p: "19–20" },
    fr: { s: "Attribuer des utilisateurs", r: t("Sentence case · ไม่ใช้ ALL CAPS เพื่อเน้น · Internet / Web ที่เป็นคำนามโดดขึ้นต้นตัวใหญ่ เป็นคุณศัพท์ใช้ตัวเล็ก · Net ตัวใหญ่เสมอ", "Sentence case · no all caps for emphasis · Internet / Web capitalized as standalone nouns, lowercase as adjectives · Net always capitalized"), p: "16–18" },
    ja: { r: t("ไม่ต้องจำลองตัวพิมพ์ใหญ่ ALL CAPS แปลเป็นข้อความปกติ · ชื่อผลิตภัณฑ์และคำอังกฤษคงตัวพิมพ์ตามต้นฉบับ", "Don't recreate capitalization; all caps become normal text · product names and English words keep the source's case"), p: "20–21" },
    ko: { na: t("ภาษาเกาหลีไม่มีตัวพิมพ์ใหญ่ ข้อความที่อังกฤษเน้นด้วยตัวใหญ่ให้ใช้ตัวหนา", "Korean has no capitals; emphasis by caps becomes bold"), p: 15 },
    "zh-hans": { s: "Adobe Creative Cloud 包含 Photoshop、Illustrator 和 InDesign。", r: t("คำอังกฤษที่คงไว้ใช้ตัวพิมพ์ตามต้นฉบับ", "English words left as is keep the source's case"), p: 16 },
    "zh-hant": { s: "缺少「VALUE」屬性。", r: t("ไม่มีตัวพิมพ์ใหญ่ · UI ที่อังกฤษเขียนตัวใหญ่ใส่ 「 」 · พารามิเตอร์ที่อังกฤษใส่เครื่องหมายคำพูดก็ใส่ 「 」", "No capitals · UI items capitalized in English go in 「 」 · so do parameters the English quotes"), p: "18–19" } } },
  { cat: "text", th: "การเน้นข้อความ", en: "Emphasis", v: {
    de: { r: t("ตัวเอียง (บางครั้งใช้เครื่องหมายคำพูด)", "Italics (sometimes quotation marks)"), p: 19 },
    fr: { r: t("ตัวหนาหรือวิธีอื่น ไม่ใช้ ALL CAPS", "Bold or other means, not all caps"), p: 16 },
    ja: { r: t("ฟอนต์ญี่ปุ่นไม่มีตัวเอียง: ตัดตัวเอียงออก แอปใช้ตัวหนาแทนได้ · งานการตลาด (ไม่ใช่เว็บ) ตัดทั้งตัวเอียงและตัวหนา", "Japanese fonts have no italics: remove them; apps may use bold instead · non-web marketing removes both"), p: 40 },
    ko: { r: t("ตัวหนา (แนะนำ) หรือขีดเส้นใต้ · ไม่ใช้ตัวเอียง", "Bold (preferred) or underline · no italics"), p: "15, 28" },
    "zh-hans": { r: t("ตัวหนา (แนะนำ) หรือขีดเส้นใต้ · ห้ามตัวเอียง", "Bold (preferred) or underline · no italics"), p: 29 },
    "zh-hant": { r: t("ตัวหนา (แนะนำ) · ตัวเอียงใช้ได้แบบมีเงื่อนไข ทั้งประโยค ไม่ใช่บางคำ", "Bold (preferred) · italics only conditionally, for a whole sentence, not a few words"), p: "18, 33" } } },
  { cat: "text", th: "การเรียกผู้ใช้", en: "Addressing the user", v: {
    de: { s: ["Sie", "du", "ihr"], r: t("ทางการ (Sie) หรือไม่ทางการ (du) ตามโปรเจกต์ ให้ถาม IPM · พูดกับทั้งกลุ่มใช้ ihr", "Formal (Sie) or informal (du) by project; ask the IPM · ihr for a whole group"), p: "1, 7" },
    fr: { s: "Téléchargez xx sur l’ordinateur", x: ["Téléchargez xx sur votre ordinateur"], r: t("ใช้ vous / votre ให้น้อยกว่าที่อังกฤษใช้ you · เลี่ยง on", "Use vous / votre less than English uses you · avoid on"), p: "7, 16" },
    ja: { s: "ご使用のコンピューターに XX をダウンロード", x: ["あなたのコンピューターへXXのダウンロード"], r: t("ไม่แปล you / your ตรงตัว ใช้ ご使用の หรือ お客様の ตามบริบท", "Don't translate you / your literally; use ご使用の or お客様の"), p: 11 },
    ko: { r: t("ไม่ใช้ 당신 / 귀하 บ่อยแบบอังกฤษ น้ำเสียงเป็นกลาง", "Avoid 당신 / 귀하; keep a neutral tone"), p: 7 },
    "zh-hans": { s: ["您", "你们"], x: ["你"], r: t("ใช้รูปสุภาพ · อย่าใช้ 您 มากเกินไป", "Formal forms · don't overuse 您"), p: 9 },
    "zh-hant": { s: ["您", "大家的", "各位的"], x: ["你", "您們的"], r: t("ใช้ 您 ทุกประเภทเนื้อหา · พหูพจน์ใช้ 大家的 / 各位的", "您 in all content · 大家的 / 各位的 for plurals"), p: 10 } } },
  { cat: "text", th: "เครื่องหมายบนตัวพิมพ์ใหญ่", en: "Accents on capitals", v: {
    de: { r: t("ใส่ accent บนตัวพิมพ์ใหญ่ · ห้ามใช้อักษรมี accent เป็น shortcut", "Keep accents on capitals · no accented letters as shortcuts"), p: 20 },
    fr: { s: ["Adobe Premiere", "Adobe Creative Cloud"], x: ["Adobe Première", "Adobe Créative Cloud"], r: t("ใส่ accent บนตัวพิมพ์ใหญ่ · ชื่อผลิตภัณฑ์ Adobe ไม่ใส่ accent", "Keep accents on capitals · Adobe product names take no accents"), p: 18 },
    ja: null,
    ko: { na: t("ไม่ใช้กับภาษาเกาหลี", "Doesn't apply to Korean"), p: 16 },
    "zh-hans": { r: t("คำอังกฤษที่คงไว้ใช้ accent ตามต้นฉบับ", "English words left as is keep the source's accents"), p: 17 },
    "zh-hant": { na: t("ไม่ใช้กับภาษาจีนตัวเต็ม", "Doesn't apply to Traditional Chinese"), p: 19 } } },
  { cat: "text", th: "ลำดับการเรียง", en: "Sort order", v: {
    de: { s: "Göbel, Goethe, Goldmann, Göthe, Götz", r: t("ä ö ü และ ß เรียงเหมือน a o u s · บางแอปเรียงตัวมี accent ก่อน เรียงด้วยโปรแกรมแล้วให้ตรวจด้วยตา", "ä ö ü and ß sort as a o u s · some apps put accented letters first; check electronic sorts by eye"), p: "20–21" },
    fr: { s: ["A a à â ä æ", "C c ç", "E e é è ê ë", "I i î ï", "O o ô ö œ", "U u ù û ü"], r: t("ลำดับที่ใช้เรียง (แสดงเฉพาะตัวที่มีเครื่องหมาย) · ตรวจผลการเรียงด้วยตา", "Sort order (letters with marks shown) · check electronic sorts by eye"), p: "18–19" },
    ja: { s: ["01：北海道", "13：東京都", "47：沖縄県"], r: t("รายการจังหวัดใน UI เรียงตามรหัส JIS X 0401 (เหนือ → ใต้) ไม่ใช่ตาม character code", "Prefecture lists in UI follow JIS X 0401 codes (north → south), not character codes"), p: 60 },
    ko: { s: ["ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ", "ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ"], r: t("พยัญชนะ แล้วสระ", "Consonants, then vowels"), p: 16 },
    "zh-hans": { r: t("ตัวเลข → คำอังกฤษ (A–Z) → อักษรจีน (ตามพินอิน)", "Numbers → English words (A–Z) → Chinese (by pinyin)"), p: 17 },
    "zh-hant": { r: t("ไม่เรียงตามตัวอักษร ใช้จำนวนขีดจากน้อยไปมาก", "Not alphabetical; by stroke count, ascending"), p: 19 } } },
  { cat: "text", th: "แพนแกรม (ทดสอบฟอนต์)", en: "Pangram (font samples)", v: {
    de: { s: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.", p: 21 },
    fr: { s: "Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwis.", p: 19 },
    ja: { s: "新しい時代のこころを映すタイプフェイスデザイン", r: t("ไม่มีแพนแกรมตายตัว ใช้ประโยคที่ผสมคันจิ ฮิรางานะ คาตาคานะ (ตัวอย่างจาก Adobe Fonts)", "No fixed pangram; a sentence mixing kanji, hiragana and katakana (Adobe Fonts example)"), p: 22 },
    ko: { s: "키스의 고유 조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다", p: 16 },
    "zh-hans": null, "zh-hant": null } },
  { cat: "text", th: "ความกว้างตัวอักษรและอักขระที่ห้ามใช้", en: "Character width and banned characters", v: {
    de: null, fr: null,
    ja: { s: "このファイルは Photoshop ファイルではありません。", x: ["このファイルはＰｈｏｔｏｓｈｏｐファイルではありません。"], r: t("อักษรโรมันและตัวเลขเป็นครึ่งความกว้างเท่านั้น · ห้ามใช้: คาตาคานะครึ่งความกว้าง ตัวเลขเต็มความกว้าง อักขระที่ขึ้นกับเครื่อง คันจิ JIS ระดับ 3–4 異体字 外字 และช่องว่างเต็มความกว้าง (ยกเว้นในชื่อเฉพาะ)", "Roman letters and digits half-width only · don't use half-width katakana, full-width digits, device-dependent characters, JIS level 3–4 kanji, 異体字, 外字 or full-width spaces (unless in a proper noun)"), p: "21, 35–36" },
    ko: null,
    "zh-hans": { r: t("ใช้เลขอารบิก ไม่ใช้เลข double-byte", "Arabic numerals, not double-byte digits"), p: 34 },
    "zh-hant": null } },
  { cat: "text", th: "คาตาคานะ", en: "Katakana", v: {
    de: null, fr: null,
    ja: { s: ["ビデオクリップ", "ストレージレポート", "コンピューター", "レジストリ"], x: ["ビデオ・クリップ", "ストレージ レポート"], r: t("คำคาตาคานะหลายคำเขียนติดกัน ไม่ใส่ ・ หรือเว้นวรรค · -er / -or / -ar ใส่ ー · -y / -w ใส่ ー ถ้ารวมแล้วไม่เกิน 3 ตัว", "Join katakana words without ・ or spaces · -er / -or / -ar take ー · -y / -w take ー only if the word is 3 characters or fewer"), p: 58 },
    ko: null, "zh-hans": null, "zh-hant": null } },
  { cat: "text", th: "คำประสม", en: "Compounds", v: {
    de: { s: ["Adobe Photoshop-Datei", "Bitmap-Bild", "Webdesign", "Marketing-Manager"], x: ["Adobe Photoshop Datei", "Bitmapbild"], r: t("คำประสมเยอรมันเขียนติดกัน · ชื่อแบรนด์/คำอังกฤษ + คำเยอรมันใส่ hyphen · คำอังกฤษล้วนไม่เกิน 3 พยางค์เขียนติด เกินนั้นใส่ hyphen", "German compounds are one word · brand/English name + German word takes a hyphen · English-only compounds of up to 3 syllables are one word, longer ones hyphenated"), p: "33–35" },
    fr: { s: ["des fichiers sources", "des fichiers système"], r: t("fr-CA: คำนามที่ซ้อนกันเป็นพหูพจน์ทั้งคู่ · คำที่เป็นส่วนขยายเฉพาะคำแรก · ใช้ ligature œ", "fr-CA: nouns in apposition are both plural · with complements only the first · use the œ ligature"), p: 45 },
    ja: null, ko: null, "zh-hans": null, "zh-hant": null } },
  { cat: "text", th: "ตัวย่อ", en: "Abbreviations", v: {
    de: { x: ["u. a.", "u. Ä.", "u. v. m."], r: t("ใช้ตัวย่อเท่าที่จำเป็น · ห้ามใช้ตัวย่อเหล่านี้และรูปเต็มของมัน", "Abbreviate only when needed · never these abbreviations or their long forms"), p: 35 },
    fr: { s: ["ex.", "réf.", "chap.", "art.", "M.", "Mme", "Mlle"], r: t("ใช้ได้โดยไม่ต้องขยาย ยกเว้นขึ้นต้นประโยค", "Allowed without expansion, except at the start of a sentence"), p: 34 },
    ja: { r: t("ตัวย่อที่คนญี่ปุ่นไม่รู้จัก: ครั้งแรกเขียนชื่อเต็มแล้วตามด้วยตัวย่อในวงเล็บ เช่น Adobe Camera Raw (ACR) จากนั้นใช้ ACR · ตัวย่อที่รู้จักทั่วไปตามต้นฉบับ", "Initialisms not known in Japan: full form with the abbreviation in parentheses on first use, e.g. Adobe Camera Raw (ACR), then just ACR · well-known ones follow the source"), p: 59 },
    ko: { s: "PC", r: t("ใช้ได้โดยไม่ต้องขยาย ยกเว้นขึ้นต้นประโยค", "Allowed without expansion, except at the start of a sentence"), p: 28 },
    "zh-hans": { s: ["Inc.", "Ltd."], r: t("ใช้ได้โดยไม่ต้องขยาย", "Allowed without expansion"), p: 30 },
    "zh-hant": { s: "KG", r: t("ยอมรับได้เพราะใช้แพร่หลาย", "Accepted because it is so common"), p: 33 } } },
  { cat: "text", th: "พหูพจน์ของตัวย่อ", en: "Plural acronyms", v: {
    de: { s: ["URLs", "APIs", "SMS"], x: ["URL’s", "API’s"], p: 35 },
    fr: { s: ["adresses URL", "interfaces API", "messages SMS"], x: ["URLs", "SMSs"], p: 34 },
    ja: { s: "API", x: ["APIs"], r: t("ตัด -s พหูพจน์", "Drop the plural -s"), p: 59 },
    ko: { s: ["URL", "API", "SMS 메시지"], x: ["URLs", "SMS 메시지들"], p: "28–29" },
    "zh-hans": { s: ["URL", "API", "短信"], x: ["URLs", "SMSs"], p: 30 },
    "zh-hant": { s: ["URL", "API", "SMS 簡訊"], x: ["URLs", "多個 SMS 簡訊"], p: 34 } } },
  { cat: "text", th: "ตัวแปร (placeholder)", en: "Placeholders", v: {
    de: null,
    fr: { r: t("รู้ก่อนว่าตัวแปรแทนอะไร กันผลลัพธ์อย่าง d’Photoshop และเพศของคำนามผิด", "Know what the placeholder stands for, to avoid results like d’Photoshop and wrong gender"), p: "18, 22" },
    ja: { s: "ターゲット %1 はありません", r: t("เว้นวรรคครึ่งความกว้างรอบตัวแปร ยกเว้นตัวแปรที่จะเป็นอักษรเต็มความกว้างแน่นอน", "Half-width spaces around variables, unless they can only become full-width text"), p: 43 },
    ko: { s: ["파일 %s 을(를) 삭제할 수 없습니다.", "%1 과(와) %2 을(를) 추가하십시오."], r: t("ใส่คำช่วยทั้งสองแบบ: 은(는) 이(가) 을(를) 과(와) (으)로", "Give both particles: 은(는) 이(가) 을(를) 과(와) (으)로"), p: 16 },
    "zh-hans": { r: t("เนื้อหาใน {{ }} เป็นตัวแปร ห้ามแปล", "Content in {{ }} is a variable; don't translate it"), p: 28 },
    "zh-hant": { s: "無法刪除檔案「%s」。", r: t("ตัวแปรที่จะเป็นภาษาจีนใส่ 「 」", "Placeholders that will be Chinese go in 「 」"), p: 19 } } },

  // ---------- UI & keyboard ----------
  { cat: "ui", th: "ชื่อปุ่มคีย์บอร์ด", en: "Key names", v: {
    de: { s: ["Strg-Taste", "Esc-Taste", "Umschalttaste"], x: ["Taste „Strg“"], r: t("ไม่ใช้ตัวพิมพ์ใหญ่ทั้งหมดหรือตัวหนา", "No all caps, no bold"), p: 24 },
    fr: { s: ["Touche Ctrl", "Touche Échap", "Touche Maj"], x: ["Touche Esc", "Touche Shift"], r: t("ตามมาตรฐานคีย์บอร์ดฝรั่งเศส / Microsoft", "French keyboard / Microsoft standard"), p: 23 },
    ja: { s: ["Ctrl キー", "スペースバー", "左矢印キー"], x: ["「Ctrl」キー", "シフト"], r: t("ไม่ใส่วงเล็บ · ใช้ข้อความบนปุ่ม (ครึ่งความกว้าง) · คำอธิบายในแอปเติม キー หลังช่องว่างครึ่งความกว้าง", "No brackets · use the text printed on the key (half-width) · in-app text adds キー after a half-width space"), p: 36 },
    ko: { s: ["Ctrl 키", "Esc 키", "Shift 키"], x: ["컨트롤 키", "시프트 키"], r: t("ตามมาตรฐาน Microsoft · ในเนื้อหาใช้ตัวหนา", "Microsoft standard · bold in running text"), p: "19–20" },
    "zh-hans": { s: ["Ctrl 键", "Esc 键", "Shift 键"], r: t("ใช้ชื่อตามที่พิมพ์บนปุ่ม · เติม 键 ถ้าต้นฉบับมีคำว่า key", "Name as printed on the key · add 键 if the source says key"), p: "20–21" },
    "zh-hant": { s: ["Ctrl 鍵", "向上鍵", "空格鍵"], r: t("คงตัวพิมพ์ตามปุ่มแล้วเติม 鍵 · ปุ่มลูกศรและ Spacebar แปล", "Keep the key's case and add 鍵 · arrow keys and Spacebar are translated"), p: "23–24" } } },
  { cat: "ui", th: "คีย์ผสม", en: "Key combinations", v: {
    de: { s: ["Befehlstaste+A", "Wahltaste+2", "Umschalt+Wahltaste+Bindestrich"], x: ["Befehlstaste + A"], r: t("+ ไม่เว้นวรรค", "+ with no spaces"), p: 25 },
    fr: { s: ["Commande+A", "Option+2", "Maj+Option+trait d’union"], x: ["Commande + A"], r: t("+ ไม่เว้นวรรค", "+ with no spaces"), p: 24 },
    ja: { s: ["Ctrl+N", "Shift + F1 キー"], x: ["Ctrl + N"], r: t("UI: + ไม่เว้นวรรค · อ้างในเอกสาร: เว้นวรรครอบ + แล้วเติม キー · ตารางรายการ shortcut ไม่เติม キー", "UI: + with no spaces · quoted in docs: spaces around + and キー after · shortcut lists: no キー"), p: "36–37" },
    ko: { s: ["Command+A", "Option+2"], x: ["Command + A"], r: t("+ ไม่เว้นวรรค", "+ with no spaces"), p: 20 },
    "zh-hans": { s: ["Command+A", "Option+2"], x: ["Command-A"], r: t("+ ไม่เว้นวรรค", "+ with no spaces"), p: 21 },
    "zh-hant": { s: ["Command+A", "Option+2"], x: ["指令+A", "選項+2"], r: t("ไม่แปลชื่อปุ่ม", "Don't translate key names"), p: 25 } } },
  { cat: "ui", th: "คีย์ + เมาส์", en: "Key + mouse", v: {
    de: { s: "Umschalt+Klicken", x: ["Umschalt + Klicken"], r: t("+ ไม่เว้นวรรค", "+ with no spaces"), p: 25 },
    fr: { s: "Maj-clic", x: ["Maj+clic"], r: t("ใช้ - แทน +", "A hyphen, not +"), p: 24 },
    ja: { s: ["Shift キーを押しながらクリック", "Shift キーを押しながらドラッグ"], x: ["Shift-ドラッグ"], r: t("อธิบายเป็นคำ ไม่ใช้ + หรือ -", "Describe in words, without + or -"), p: 37 },
    ko: { s: "Shift+클릭", x: ["Shift-클릭"], r: t("ใช้ +", "Use +"), p: 20 },
    "zh-hans": { s: ["Shift-单击", "按住 Shift 单击"], x: ["Shift+单击"], r: t("ใช้ - แทน + หรือเขียน 按住 xx 单击", "A hyphen, not +, or 按住 xx 单击"), p: 21 },
    "zh-hant": { s: "Shift+滑鼠左鍵", x: ["Shift+點按"], r: t("ใช้ + แล้วแปลชื่อปุ่มเมาส์", "Use + and translate the mouse button"), p: 25 } } },
  { cat: "ui", th: "ปุ่มลัดในเมนู (&)", en: "Menu hotkeys (&)", v: {
    de: { r: t("ใช้ตามมาตรฐานที่เผยแพร่ และไม่ซ้ำกันในไฟล์ · ห้ามใช้อักษรมี accent หรืออักขระพิเศษ", "Use published standards, unique within the file · no accented or special characters"), p: 25 },
    fr: { s: ["Q&uitter", "Proprié&tés"], x: ["&Quitter", "Propriét&és"], r: t("ห้ามใช้อักษรมี accent", "No accented letters"), p: 24 },
    ja: { s: ["保存(&S)", "開く(&O)...", "ページレイアウト(&L) :"], x: ["&保存", "開く...(&O)", "追加 (&A)"], r: t("ต่อท้ายในวงเล็บ ไม่เว้นวรรค · อยู่ก่อน ... · ถ้าลงท้ายด้วย : ให้เว้นวรรคก่อน :", "Appended in parentheses, no space · before ... · a space before a final :"), p: 38 },
    ko: { s: "나가기(&x)", x: ["나가기 E&"], p: 20 },
    "zh-hans": { s: "退出(&X)", x: ["退出(x)"], p: 21 },
    "zh-hant": { s: ["檔案(&I)", "256(&2)", "不要再顯示此訊息(&D)。"], x: ["檔案(&F)", "C(&)"], r: t("ใช้ตัวอักษรเดียวกับต้นฉบับ", "Same letter as the source"), p: 24 } } },
  { cat: "ui", th: "คำสั่ง ปุ่ม เมนู", en: "Commands, buttons, menus", v: {
    de: { s: ["Bearbeiten", "Drucken", "Abbrechen"], x: ["Bearbeitung", "Druck", "Abbruch"], r: t("รูป infinitive · เมนูที่เป็นคำนามในอังกฤษ (Tools, View) ใช้คำนาม", "Infinitive · menus that are nouns in English (Tools, View) stay nouns"), p: 22 },
    fr: { s: "Afficher les propriétés du rapport", r: t("คำสั่ง ปุ่ม ชื่อกล่องโต้ตอบ tooltip: infinitive · ชื่อเมนู: คำนาม", "Commands, buttons, dialog titles, tooltips: infinitive · menu names: nouns"), p: "22–23" },
    ja: null,
    ko: { s: ["편집", "인쇄", "취소"], x: ["편집하기", "인쇄하기", "취소하기"], r: t("คำนาม ไม่มีวรรคตอน", "Nouns, no punctuation"), p: "17–18" },
    "zh-hans": { s: "隐藏数据预览", x: ["将数据预览隐藏"], r: t("ตามโครงสร้างต้นฉบับ: กริยาเป็นกริยา นามเป็นนาม", "Follow the source: verb for verb, noun for noun"), p: "19–20" },
    "zh-hant": { s: ["編輯", "列印", "取消"], x: ["編輯了", "將列印", "取消了"], r: t("กริยารูปปัจจุบัน ไม่มี 了 / 將 / 過", "Present-tense verbs, without 了 / 將 / 過"), w: t("ตารางให้ชื่อเมนูใช้กริยา แต่ข้อความใต้ตารางให้ใช้คำนามหรือ gerund", "The table says menu names use verbs, but the text below it says nouns or gerunds"), p: 21 } } },
  { cat: "ui", th: "ข้อความยืนยัน", en: "Confirmation messages", v: {
    de: { s: "Möchten Sie diese Datei löschen?", x: ["Soll diese Datei gelöscht werden?"], r: t("พูดกับผู้ใช้โดยตรง", "Address the user directly"), p: 22 },
    fr: { r: t("เลี่ยงประโยคซับซ้อน ใช้วรรคตอนแบบฝรั่งเศส", "Avoid complicated sentences; use French punctuation"), p: 22 },
    ja: null,
    ko: { s: "변경 사항을 무시하겠습니까?", x: ["변경 사항 무시?"], r: t("เป็นประโยคสมบูรณ์เสมอ", "Always a complete sentence"), p: 18 },
    "zh-hans": { s: "您是否要删除此文件?", x: ["是否要删除此文件?"], r: t("พูดกับผู้ใช้โดยตรง", "Address the user directly"), p: 19 },
    "zh-hant": { s: ["您確定要刪除此檔案？", "是否仍要儲存?"], r: t("ใช้รูปประโยคคงที่ เช่น 您確定要… / 是否要…", "Fixed phrasings such as 您確定要… / 是否要…"), p: "21–22" } } },
  { cat: "ui", th: "ข้อความแสดงข้อผิดพลาด", en: "Error messages", v: {
    de: { s: "Fehler beim Speichern der Datei.", x: ["Das Speichern der Datei führte zu einem Fehler."], r: t("รูปไม่ระบุบุคคล", "Impersonal"), p: 22 },
    fr: { r: t("ใช้รูป gerund", "Gerund forms"), p: 22 },
    ja: null,
    ko: { s: "파일 저장 에러", x: ["파일 저장하기 에러"], r: t("ข้อความสั้นใช้วลี ข้อความยาวใช้ประโยค · เลี่ยง passive", "Short pop-ups: phrases · long text: sentences · avoid passive"), p: "18–19" },
    "zh-hans": { s: ["保存文件时出错", "无法删除文件", "文件名称无效"], x: ["不能删除文件", "无效的文件名称"], r: t("ใช้ 无法 ไม่ใช่ 不能 · บอกผลก่อนเหตุ · adj+noun เอานามขึ้นก่อน", "无法, not 不能 · result before reason · adj+noun puts the noun first"), p: 19 },
    "zh-hant": { s: "儲存檔案時發生錯誤", x: ["發生錯誤，儲存檔案"], p: 21 } } },
  { cat: "ui", th: "ข้อความระหว่างทำงาน", en: "Progress messages", v: {
    de: { s: "Wird geladen …", r: t("รูปไม่ระบุบุคคล", "Impersonal"), p: "24, 30" },
    fr: { s: "Chargement en cours…", x: ["Chargement en cours"], r: t("ลงท้ายด้วย …", "Ends with …"), p: 22 },
    ja: { s: "読み込み中...", r: t("ลงท้ายด้วย ... ครึ่งความกว้าง", "Ends with half-width ..."), p: 48 },
    ko: { s: "검색 중…", x: ["검색 중입니다"], p: 18 },
    "zh-hans": { s: "正在搜索", x: ["我们正在搜索"], r: t("รูปไม่ระบุบุคคล", "Impersonal"), p: 19 },
    "zh-hant": { s: "正在進行搜尋", x: ["進度中的搜尋"], p: 21 } } },

  // ---------- Addresses, phones, names ----------
  { cat: "contact", th: "ลำดับที่อยู่", en: "Address order", v: {
    de: { s: "Company ABC\nFrau Anna Müller\nMusterstraße 720\n1010 Wien\nÖsterreich", r: t("คำนำหน้า (ตำแหน่ง) · ชื่อ นามสกุล · บริษัท · ถนน เลขที่ · รหัสไปรษณีย์ + เมือง · ประเทศ", "Form of address (title) · first + last name · company · street + number · postal code + city · country"), p: 36 },
    fr: { s: "M. Dubois, Appartement 8, 2 rue des Capucines, 75020 Paris, France", r: t("ชื่อ · เลขที่ + ถนน · รหัสไปรษณีย์ · เมือง · ประเทศ · fr-CA: เมือง (จังหวัด) มาก่อนรหัสไปรษณีย์", "Name · number + street · postal code · city · country · fr-CA: city (province) before the postal code"), p: 34 },
    ja: { s: "141-0032 東京都品川区大崎 1-11-2 ゲートシティ大崎イースト", r: t("รหัสไปรษณีย์ › 都道府県 › 市区町村 › 町名 › 番地 › อาคาร", "Postal code › prefecture › municipality › district › block › building"), p: 60 },
    ko: { s: "우 12345 대한민국 서울특별시 중랑구 xx길 xx아파트 xxx동 xxxx호", r: t("รหัสไปรษณีย์ · ประเทศ · ภูมิภาค (ถ้ามี) · เมือง · เขต · ถนน · อพาร์ตเมนต์ · เลขบ้าน · ชื่อ · ไม่มีจุลภาค", "Postal code · country · region (if any) · city · district · street · apartment · house number · name · no commas"), p: 29 },
    "zh-hans": { r: t("国家 › 省/州 › 市 › 区 › 街道 › 公寓 › 楼 › 邮编 › 电话/传真", "Country › province › city › district › street › apartment › building › postal code › phone/fax"), p: 31 },
    "zh-hant": { r: t("樓 · 號 · 弄 · 巷 · 段 · 路/街 · 郵遞區號 · 市 · 地區 · 國家 (ตามลำดับที่ guide ระบุ)", "Floor · number · alley · lane · section · road/street · postal code · city · region · country (in the order the guide lists)"), p: 34 } } },
  { cat: "contact", th: "ชื่อสถานที่ต่างประเทศ (London, UK)", en: "Foreign place names (London, UK)", v: {
    de: { r: t("ใช้ชื่อภาษาเยอรมันที่รับรองโดย StAGN", "Approved German names (StAGN)"), p: 36 },
    fr: { s: "Londres, Royaume-Uni", p: 35 },
    ja: { s: "4-6 Riverwalk, Citywest Business Park, Dublin 24, Ireland", r: t("ที่อยู่และเบอร์โทรนอกญี่ปุ่นไม่ต้องแปล · ชื่อประเทศทางการใช้ตามกระทรวงการต่างประเทศ", "Don't translate addresses or phone numbers outside Japan · official country names per the Ministry of Foreign Affairs"), p: "61–62" },
    ko: { s: "영국 런던", p: 29 },
    "zh-hans": { s: "英国伦敦", p: 31 },
    "zh-hant": { r: t("ใช้ชื่อที่รับรองจาก post.gov.tw", "Approved names from post.gov.tw"), p: 34 } } },
  { cat: "contact", th: "รหัสไปรษณีย์", en: "Postal code", v: {
    de: { s: "1010 Wien", r: t("รหัสไปรษณีย์ + เมืองในบรรทัดเดียวกัน", "Postal code + city on one line"), p: 36 },
    fr: { s: ["75020 Paris", "H0H 0H0"], r: t("fr-CA: H0H 0H0", "fr-CA: H0H 0H0"), p: 34 },
    ja: { s: "141-0032", r: t("7 หลัก 3+4 คั่นด้วย hyphen ครึ่งความกว้าง", "7 digits, 3+4, joined by a half-width hyphen"), p: 60 },
    ko: { s: "우 12345", p: 29 },
    "zh-hans": null, "zh-hant": null } },
  { cat: "contact", th: "เบอร์โทรในประเทศ", en: "Domestic phone numbers", v: {
    de: { s: "0800 2458877", x: ["800-245-8877"], r: t("เบอร์ในภูมิภาค DACH ที่ไม่มีรหัสประเทศขึ้นต้นด้วย 0", "DACH numbers without a country code start with 0"), p: "29, 36" },
    fr: { s: `01${NB}12${NB}34${NB}56${NB}78`, r: t("กลุ่มละ 2 หลัก คั่นด้วย NBSP", "Pairs of digits separated by NBSPs"), p: 35 },
    ja: { s: ["03-3456-7890", "090-3456-7890", "0120-61-3884"], x: ["03(3456)7890", "(03)3456-7890"], r: t("คั่นด้วย hyphen ครึ่งความกว้าง ไม่ใช้วงเล็บหรือเว้นวรรค · การแบ่งกลุ่มตามต้นฉบับ", "Half-width hyphens, no parentheses or spaces · keep the source's grouping"), p: 61 },
    ko: { s: "800) 245-8877", x: ["800 245 8877"], r: t("วงเล็บปิดและ hyphen", "Closing bracket and hyphen"), p: 23 },
    "zh-hans": { s: ["(####) ####-####", "###-####-####"], r: t("รหัสพื้นที่ 3–4 หลัก · คั่นด้วยช่องว่างหรือ hyphen · มือถือ 10–11 หลัก", "3–4-digit area codes · space or hyphen · 10–11-digit mobiles"), p: 31 },
    "zh-hant": { s: "800-245-8877", x: ["8002458877"], r: t("ตามต้นฉบับ", "As in the source"), p: 28 } } },
  { cat: "contact", th: "เบอร์โทรระหว่างประเทศ", en: "International phone numbers", v: {
    de: { s: ["+49 89 12345678", "+49 89 12345678-11"], r: t("เว้นวรรคหลังรหัสประเทศและรหัสพื้นที่ · เบอร์ต่อใช้ hyphen", "Spaces after the country and area codes · hyphen before an extension"), p: 36 },
    fr: { s: `+33${NB}1${NB}12${NB}34${NB}56${NB}78`, r: t("+33 แทน 00 แล้วตามด้วย NBSP · เบอร์แคนาดาใช้แบบสหรัฐ (+1)", "+33 replaces 00, followed by an NBSP · Canadian numbers follow the US form (+1)"), p: 35 },
    ja: { s: ["+81-3-5321-1111", "+81-90-3456-7890"], r: t("ตัด 0 ตัวแรกของรหัสพื้นที่แล้วเติม +81", "Drop the leading 0 of the area code and add +81"), p: 61 },
    ko: { s: "+1 408) 536-6000", p: 29 },
    "zh-hans": { s: ["+1 (408) 536-6000", "+86 (###) ####-####"], p: "31–32" },
    "zh-hant": { s: ["+886-2-2222-3333", "+886-988-111-222"], x: ["+886-02-2222-3333"], r: t("ตัด 0 หลังรหัสประเทศ", "Drop the 0 after the country code"), p: 34 } } },
  { cat: "contact", th: "ชื่อบุคคลและคำนำหน้า", en: "Personal names and titles", v: {
    de: { s: "Frau Anna Müller", r: t("คำนำหน้า + ชื่อ + นามสกุล", "Form of address + first name + last name"), p: 36 },
    fr: { s: [`M.${NB}Dubois`, `Mme${NB}Durand`], r: t("NBSP ระหว่างคำนำหน้ากับนามสกุล", "NBSP between title and surname"), p: "26, 34" },
    ja: { s: ["山田様", "山田太郎さん", "山田 花子 様"], r: t("นามสกุลก่อนชื่อ · ห้ามเรียกลูกค้าด้วยชื่อต้น · Enterprise ใช้ 様 ทั่วไปใช้ さん · คำขึ้นต้นอีเมลเว้นวรรคระหว่างนามสกุล ชื่อ และ 様 ส่วนเนื้อหาและ UI ไม่เว้น", "Surname first · never address customers by given name · 様 for enterprise, さん otherwise · email salutations space surname, given name and 様; body text and UI don't"), p: "65–66" },
    ko: null, "zh-hans": null, "zh-hant": null } }
];

// Per-language checklist shown at the top of each language view. Each item cites its page(s).
const CHECKS = {
  de: [
    { ...t("วันที่ DD.MM.YYYY และเวลาต่อท้ายด้วย Uhr: 21.08.2019 · 15:07 Uhr", "Dates as DD.MM.YYYY and times followed by Uhr: 21.08.2019 · 15:07 Uhr"), p: 37 },
    { ...t("ทศนิยมใช้ , หลักพันใช้ . : 3,5 · 1.234.567", "Decimal comma, thousands period: 3,5 · 1.234.567"), p: 38 },
    { ...t("% และหน่วยเว้นวรรคด้วย NBSP: 5 % · 80 MB", "% and units take an NBSP: 5 % · 80 MB"), p: 38 },
    { ...t("สกุลเงินในข้อความอยู่หลังตัวเลข: 123 $ · 123,40 EUR · ยกเว้นสวิส: CHF 123.40", "Currency follows the amount in text: 123 $ · 123,40 EUR · Swiss exception: CHF 123.40"), p: 40 },
    { ...t("เครื่องหมายคำพูด „ “ (ซ้อนใช้ ‚ ‘) และใช้อ้างชื่อ UI", "Quotes are „ “ (nested ‚ ‘) and mark UI names"), p: "22, 31" },
    { ...t("คีย์ผสมใช้ + ไม่เว้นวรรค: Befehlstaste+A", "Key combinations use + with no spaces: Befehlstaste+A"), p: 25 },
    { ...t("ใช้ … (U+2026) ไม่ใช่ ... และไม่ใช้ u. a. / u. Ä. / u. v. m.", "Use … (U+2026), not ..., and never u. a. / u. Ä. / u. v. m."), p: "31, 35" },
    { ...t("ถาม IPM ก่อนว่าโปรเจกต์ใช้ Sie หรือ du", "Ask the IPM whether the project uses Sie or du"), p: 1 }
  ],
  fr: [
    { ...t("NBSP ก่อน : ; ! ? และด้านใน « » แต่ไม่ใช้ในโค้ด URL อีเมล", "NBSP before : ; ! ? and inside « », but not in code, URLs or email addresses"), p: "26–27" },
    { ...t("หลักพันคั่นด้วย NBSP และทศนิยมใช้ , : 1 234 567 · 3,5", "Thousands separated by NBSP, decimal comma: 1 234 567 · 3,5"), p: 36 },
    { ...t("เวลาใช้ h ไม่มี 0 นำหน้า: 15 h 07 · 9 h 30", "Times use h, no leading zero: 15 h 07 · 9 h 30"), p: 36 },
    { ...t("ขนาดไฟล์ใช้ Ko / Mo / Go / To และ megabit เป็น Mbit", "File sizes are Ko / Mo / Go / To, and megabit is Mbit"), p: "38–39" },
    { ...t("สกุลเงินอยู่หลังตัวเลข + NBSP: 123 $ · 123,40 €", "Currency after the amount with an NBSP: 123 $ · 123,40 €"), p: 39 },
    { ...t("Adobe เลี่ยง ! ในภาษาฝรั่งเศส: Félicitations.", "Adobe avoids ! in French: Félicitations."), p: 33 },
    { ...t("คีย์ + เมาส์ใช้ - : Maj-clic · คีย์ผสมใช้ + ไม่เว้นวรรค: Commande+A", "Key + mouse uses a hyphen: Maj-clic · key combinations use +: Commande+A"), p: 24 },
    { ...t("ชื่อผลิตภัณฑ์ Adobe ไม่ใส่ accent: Adobe Premiere ไม่ใช่ Première", "No accents in Adobe product names: Adobe Premiere, not Première"), p: 18 }
  ],
  ja: [
    { ...t("เว้นวรรคครึ่งความกว้างระหว่างอักษรครึ่งความกว้างกับญี่ปุ่น (PDF の最適化) ยกเว้นงานการตลาดและ Adobe.com/jp", "Half-width space between half-width and Japanese text (PDF の最適化), except in marketing and on Adobe.com/jp"), p: 42 },
    { ...t("จุดไข่ปลาใช้ ... จุดครึ่งความกว้าง 3 จุด ไม่ใช่ …", "Ellipses are three half-width periods (...), not …"), p: 48 },
    { ...t("ไม่ใช้ ! และไม่ใช้ en/em dash · ช่วงตัวเลขใช้ ～ หรือ から", "No ! and no en/em dashes · ranges use ～ or から"), p: "45, 52" },
    { ...t("เยน: 5,980 円 ไม่มีทศนิยม · UI ไม่ใช้ ¥ ครึ่งความกว้าง · ¥ ต้องเป็น U+00A5", "Yen: 5,980 円, no decimals · no half-width ¥ in UI · ¥ must be U+00A5"), p: "54, 71" },
    { ...t("ห้ามใช้คาตาคานะครึ่งความกว้าง และตัวเลขหรืออักษรโรมันเต็มความกว้าง", "No half-width katakana and no full-width digits or Roman letters"), p: "21, 35" },
    { ...t("Hotkey ต่อท้ายไม่เว้นวรรคและอยู่ก่อน ... : 保存(&S) · 開く(&O)...", "Hotkeys appended with no space, before ...: 保存(&S) · 開く(&O)..."), p: 38 },
    { ...t("ชื่อคนใช้นามสกุลก่อน และห้ามเรียกลูกค้าด้วยชื่อต้น", "Surname first, and never address customers by given name"), p: 65 },
    { ...t("วันที่สัญญาคงเวลา PT และเขียน (PT) ไม่ใช่ (PST)", "Contract dates stay in PT, written (PT), not (PST)"), p: 64 }
  ],
  ko: [
    { ...t("วันที่แบบสั้น: 2017. 8. 21. มีจุดทุกส่วน ไม่มี 0 นำหน้า", "Short dates: 2017. 8. 21., a period after every part, no leading zeros"), p: 30 },
    { ...t("ตัวเลขกับหน่วยไม่เว้นวรรค: 80MB · 5%", "No space between number and unit: 80MB · 5%"), p: "31–32" },
    { ...t("สกุลเงินเขียนเป็นคำ: 123달러 · 123.4유로 และไม่แสดง .00", "Currency as words: 123달러 · 123.4유로, without .00"), p: 33 },
    { ...t("คำช่วยหลังตัวแปรใส่ทั้งสองแบบ: %s 을(를)", "Particles after placeholders show both forms: %s 을(를)"), p: 16 },
    { ...t("อ้างชื่อ UI ด้วย [ ] : [확인]을 클릭합니다", "UI names in [ ]: [확인]을 클릭합니다"), p: 26 },
    { ...t("ไม่ใช้ semicolon และไม่เว้นวรรคก่อน :", "No semicolons, and no space before a colon"), p: 22 },
    { ...t("คีย์ + เมาส์ใช้ + : Shift+클릭", "Key + mouse uses +: Shift+클릭"), p: 20 },
    { ...t("ไม่ใช้ตัวเอียง เน้นด้วยตัวหนา", "No italics; emphasize with bold"), p: 28 }
  ],
  "zh-hans": [
    { ...t("เว้นวรรคระหว่างอักษรจีนกับอังกฤษหรือตัวเลข แต่ไม่เว้นรอบเครื่องหมายวรรคตอนจีน", "Space between Chinese and Latin text or digits, none around Chinese punctuation"), p: 23 },
    { ...t("รายการใช้ 、 · คำพูดใช้ “ ” · คำพูดซ้อนใช้ ‘ ’", "、 between list items · quotes “ ” · nested ‘ ’"), p: "27–28" },
    { ...t("วันที่: 2017 年 8 月 21 日 แบบไม่เว้นวรรคจากไลบรารีไม่ใช่บั๊ก", "Dates: 2017 年 8 月 21 日; the unspaced library form is not a bug"), p: 32 },
    { ...t("สกุลเงินอยู่หน้าตัวเลข เว้นวรรค: $ 123 · EUR 123.4", "Currency before the amount with a space: $ 123 · EUR 123.4"), p: 35 },
    { ...t("UI ไม่ใช้ : (错误 - 无法打开文件) และข้อความ error ใช้ 无法 ไม่ใช่ 不能", "No colon in UI (错误 - 无法打开文件), and errors use 无法, not 不能"), p: "19, 23" },
    { ...t("หน่วยความยาวและน้ำหนักใช้ชื่อจีน (千米, 千克) แต่ kB / MB / GB คงไว้", "Length and weight units use Chinese names (千米, 千克); kB / MB / GB stay"), p: 34 },
    { ...t("ใช้ 您 / 你们 ไม่ใช้ 你", "Use 您 / 你们, not 你"), p: 9 },
    { ...t("ตัวเลขติดลบ: ตารางตัวเลขให้ใช้ -5 แต่ตาราง dash ให้ใช้ –5 ควรถาม IPM", "Negative numbers: the numbers table says -5 but the dash table says –5; ask the IPM"), p: "24, 33" }
  ],
  "zh-hant": [
    { ...t("คำพูดและชื่อ UI ใช้ 「 」 · คำพูดซ้อนใช้ 『 』", "Quotes and UI names in 「 」 · nested 『 』"), p: "30–31" },
    { ...t("? ใช้แบบ single-byte แต่ ！ ใช้แบบ double-byte", "Single-byte ? but double-byte ！"), p: 32 },
    { ...t("วงเล็บ ( ) single-byte เว้นวรรคด้านนอก: 最亮點 (8 位元)：", "Single-byte ( ) with a space outside: 最亮點 (8 位元)："), p: 32 },
    { ...t("ตัวเลขกับหน่วยไม่เว้นวรรค: 80MB · 5%", "No space between number and unit: 80MB · 5%"), p: 36 },
    { ...t("ช่วงตัวเลขและวันใช้ 至: 0 至 23 · 週一至週四", "Ranges use 至: 0 至 23 · 週一至週四"), p: 27 },
    { ...t("ใช้ 您 ไม่ใช้ 你", "Use 您, not 你"), p: 10 },
    { ...t("คำสั่งและปุ่มใช้กริยารูปปัจจุบัน ไม่มี 了 / 將 / 過", "Commands and buttons are present-tense verbs, without 了 / 將 / 過"), p: 21 },
    { ...t("เบอร์โทรไต้หวัน: +886-2-2222-3333 (ตัด 0)", "Taiwan numbers: +886-2-2222-3333 (drop the 0)"), p: 34 }
  ]
};
