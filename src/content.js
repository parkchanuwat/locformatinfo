// Curated content. CLDR-derived values come from C (generated), the rest are from style guides.
const NB = " ", NN = " ";
const LOCS = [
  { id: "de", tag: "de-DE", lang: "de", short: "DE", en: "German", th: "เยอรมัน", native: "Deutsch", region: "Deutschland" },
  { id: "fr", tag: "fr-FR", lang: "fr", short: "FR", en: "French", th: "ฝรั่งเศส", native: "Français", region: "France" },
  { id: "ja", tag: "ja-JP", lang: "ja", short: "JA", en: "Japanese", th: "ญี่ปุ่น", native: "日本語", region: "日本" },
  { id: "ko", tag: "ko-KR", lang: "ko", short: "KO", en: "Korean", th: "เกาหลี", native: "한국어", region: "대한민국" },
  { id: "zh-hans", tag: "zh-CN", lang: "zh-Hans", short: "简", en: "Chinese Simplified", th: "จีนตัวย่อ", native: "简体中文", region: "中国大陆" },
  { id: "zh-hant", tag: "zh-TW", lang: "zh-Hant", short: "繁", en: "Chinese Traditional", th: "จีนตัวเต็ม", native: "繁體中文", region: "台灣" }
];
const K = (d, f, j, k, s, t) => ({ de: d, fr: f, ja: j, ko: k, "zh-hans": s, "zh-hant": t });

const CATS = [
  { id: "overview", th: "ภาพรวม", en: "At a glance" },
  { id: "date", th: "วันที่", en: "Date" },
  { id: "time", th: "เวลา", en: "Time & date-time" },
  { id: "calendar", th: "ปฏิทินและสัปดาห์", en: "Calendar & week" },
  { id: "number", th: "ตัวเลข", en: "Number & percent" },
  { id: "currency", th: "สกุลเงิน", en: "Currency" },
  { id: "units", th: "หน่วยวัดและตัวเลขพิเศษ", en: "Units & special numbers" },
  { id: "text", th: "ข้อความและเครื่องหมาย", en: "Text & punctuation" },
  { id: "chars", th: "อักขระพิเศษ", en: "Special letters · DE & FR", only: ["de", "fr"] },
  { id: "sort", th: "การเรียงลำดับ (Sorting)", en: "Collation · A–Z sorting" },
  { id: "contact", th: "ชื่อ ที่อยู่ เบอร์โทร", en: "Names, addresses, phones" }
];

const ITEMS = [
  // ---------- overview ----------
  { cat: "overview", label: "ตัวคั่นทศนิยม", en: "Decimal separator", src: "CLDR",
    v: K(", (comma)", ", (comma)", ". (period)", ". (period)", ". (period)", ". (period)") },
  { cat: "overview", label: "ตัวคั่นหลักพัน", en: "Grouping separator", src: "CLDR",
    v: K(". (period)", NN + " (narrow no-break space U+202F)", ", (comma)", ", (comma)", ", (comma)", ", (comma)") },
  { cat: "overview", label: "ลำดับวันที่", en: "Date order", src: "CLDR",
    v: K("วัน · เดือน · ปี", "วัน · เดือน · ปี", "ปี · เดือน · วัน", "ปี · เดือน · วัน", "ปี · เดือน · วัน", "ปี · เดือน · วัน") },
  { cat: "overview", label: "ระบบเวลาเริ่มต้น", en: "Default clock", src: "CLDR",
    v: K("24 ชม.", "24 ชม.", "24 ชม.", "12 ชม. (오전/오후)", "24 ชม.", "12 ชม. (上午/下午)") },
  { cat: "overview", label: "วันแรกของสัปดาห์", en: "First day of week", src: "CLDR",
    v: K("วันจันทร์", "วันจันทร์", "วันอาทิตย์", "วันอาทิตย์", "วันจันทร์", "วันอาทิตย์") },
  { cat: "overview", label: "สกุลเงินหลัก", en: "Local currency", src: "CLDR",
    v: K("EUR · € หลังตัวเลข", "EUR · € หลังตัวเลข", "JPY · ￥ หน้าตัวเลข", "KRW · ₩ หน้าตัวเลข", "CNY · ¥ หน้าตัวเลข", "TWD · $ หน้าตัวเลข") },
  { cat: "overview", label: "เครื่องหมายคำพูดหลัก", en: "Primary quotes", src: "Style",
    v: K("„…“", "«" + NN + "…" + NN + "»", "「…」", "“…”", "“…”", "「…」") },

  // ---------- date ----------
  { cat: "date", label: "แบบสั้น", en: "Short date", src: "CLDR", v: "dateShort",
    pat: K("dd.MM.yy", "dd/MM/y", "y/MM/dd", "yy. M. d.", "y/M/d", "y/M/d"),
    note: K("ปี 2 หลัก มีเลข 0 นำหน้าวันและเดือน", "ปี 4 หลัก คั่นด้วย /", "มีเลข 0 นำหน้าเดือนและวัน", "มีจุดหลังทุกส่วน รวมท้ายสุด และเว้นวรรคหลังจุด", "ไม่มีเลข 0 นำหน้า", "ไม่มีเลข 0 นำหน้า") },
  { cat: "date", label: "แบบกลาง", en: "Medium date", src: "CLDR", v: "dateMedium",
    pat: K("dd.MM.y", "d MMM y", "y/MM/dd", "y. M. d.", "y年M月d日", "y年M月d日"),
    note: K("", "ชื่อเดือนย่อพร้อมจุด เช่น janv. févr.", "", "", "", "") },
  { cat: "date", label: "แบบยาว", en: "Long date", src: "CLDR", v: "dateLong",
    pat: K("d. MMMM y", "d MMMM y", "y年M月d日", "y년 MMMM d일", "y年M月d日", "y年M月d日"),
    note: K("มีจุดหลังวันที่ (9.) เพราะเป็นเลขลำดับ", "ชื่อเดือนพิมพ์เล็ก", "", "", "", "") },
  { cat: "date", label: "แบบเต็ม (มีชื่อวัน)", en: "Full date", src: "CLDR", v: "dateFull",
    pat: K("EEEE, d. MMMM y", "EEEE d MMMM y", "y年M月d日EEEE", "y년 MMMM d일 EEEE", "y年M月d日EEEE", "y年M月d日 EEEE"),
    note: K("มีจุลภาคหลังชื่อวัน", "ชื่อวันพิมพ์เล็ก ไม่มีจุลภาค", "ในข้อความทั่วไปนิยม 2026年3月9日(月)", "ในข้อความทั่วไปนิยม 2026. 3. 9.(월)", "", "มีเว้นวรรคก่อน 星期") },
  { cat: "date", label: "ปีและเดือน", en: "Year + month", src: "CLDR", v: "ym" },
  { cat: "date", label: "เดือนและวัน", en: "Month + day", src: "CLDR", v: "md" },
  { cat: "date", label: "ช่วงวันที่ (9–13 มี.ค.)", en: "Date range", src: "CLDR", v: "dateRange",
    note: K("ใช้ en dash (–) ไม่เว้นวรรค", "ใช้ en dash (–)", "ใช้ ～ (full-width tilde)", "ใช้ ~ มีเว้นวรรค", "ใช้ – มีเว้นวรรค", "ใช้ 至") },
  { cat: "date", label: "ในเอกสารทางการ", en: "Official / formal writing", src: "Style",
    v: K("9. März 2026", "le 9" + NB + "mars 2026", "2026年3月9日(月)\n令和8年3月9日", "2026. 3. 9.(월)", "2026年3月9日", "中華民國115年3月9日"),
    note: K("จดหมายตาม DIN 5008 ใช้ 09.03.2026 ได้", "ขึ้นต้นด้วย le; วันที่ 1 เขียน 1er (le 1er mars)", "ราชการมักใช้ปีรัชศก (和暦)", "หนังสือราชการ (공문서) ใช้ตัวเลขคั่นจุดแบบนี้", "หนังสือราชการใช้เลขอารบิก", "เอกสารราชการใช้ปีหมินกั๋ว (民國)") },

  // ---------- time ----------
  { cat: "time", label: "เวลาแบบสั้น", en: "Short time", src: "CLDR", v: "timeShort",
    pat: K("HH:mm", "HH:mm", "H:mm", "a h:mm", "HH:mm", "Bh:mm"),
    note: K("", "", "ชั่วโมงไม่มีเลข 0 นำหน้า (9:05)", "ค่าเริ่มต้นเป็น 12 ชม.", "", "ค่าเริ่มต้นใช้ช่วงของวัน (凌晨/上午/中午/下午/晚上)") },
  { cat: "time", label: "เวลาแบบมีวินาที", en: "Medium time", src: "CLDR", v: "timeMedium",
    pat: K("HH:mm:ss", "HH:mm:ss", "H:mm:ss", "a h:mm:ss", "HH:mm:ss", "Bh:mm:ss") },
  { cat: "time", label: "เวลาเช้า 09:05 แบบสั้น", en: "Short time, morning", src: "CLDR", v: "short9" },
  { cat: "time", label: "เวลาค่ำ 21:00 แบบสั้น", en: "Short time, evening", src: "CLDR", v: "short21" },
  { cat: "time", label: "แบบ 12 ชั่วโมง", en: "12-hour clock", src: "CLDR", v: "h12",
    pat: K("h:mm a", "h:mm a", "aK:mm", "a h:mm", "ah:mm", "ah:mm"),
    note: K("ไม่นิยมใช้ AM/PM ในภาษาเยอรมัน", "ไม่นิยมใช้ AM/PM ในภาษาฝรั่งเศส", "午前/午後 อยู่หน้าตัวเลข", "오전/오후 อยู่หน้าตัวเลข มีเว้นวรรค", "上午/下午 อยู่หน้าตัวเลข ไม่เว้นวรรค", "上午/下午 อยู่หน้าตัวเลข ไม่เว้นวรรค") },
  { cat: "time", label: "เที่ยงคืน / เที่ยงวัน (12 ชม.)", en: "Midnight / noon, 12-hour", src: "CLDR",
    v: (c) => c.h12Mid + "\n" + c.h12Noon,
    note: K("", "", "ญี่ปุ่นใช้ 0 ไม่ใช่ 12: 午前0時 / 午後0時", "", "", "") },
  { cat: "time", label: "เวลาในประโยค", en: "Time in running text", src: "Style",
    v: K("14:05 Uhr", "14" + NB + "h" + NB + "05", "14時5分\n午後2時5分", "오후 2시 5분", "14:05\n下午2点05分", "下午2點05分"),
    note: K("ต่อท้ายด้วย Uhr", "ใช้ h แทน : ในข้อความ (UI ใช้ 14:05 ได้)", "ตารางทีวีอาจใช้ 25:00 สำหรับดึก", "", "", "") },
  { cat: "time", label: "ช่วงเวลา (9:00–17:00)", en: "Time range", src: "CLDR", v: "timeRange" },
  { cat: "time", label: "วันที่ + เวลา", en: "Date-time (medium)", src: "CLDR", v: "dt" },
  { cat: "time", label: "วันที่ + เวลา แบบยาว", en: "Date-time (long)", src: "CLDR", v: "dtLong",
    note: K("เชื่อมด้วย um", "เชื่อมด้วย à", "", "", "", "") },
  { cat: "time", label: "ชื่อเขตเวลา (ตัวอย่าง: Japan Standard Time)", en: "Time zone name", src: "CLDR", v: "tzName" },

  // ---------- calendar ----------
  { cat: "calendar", label: "วันแรกของสัปดาห์", en: "First day of week", src: "CLDR",
    v: K("Montag (จันทร์)", "lundi (จันทร์)", "日曜日 (อาทิตย์)", "일요일 (อาทิตย์)", "星期一 (จันทร์)", "星期日 (อาทิตย์)"),
    note: K("ใช้ตอนวาด date picker / ปฏิทิน", "", "", "", "", "") },
  { cat: "calendar", label: "การนับสัปดาห์ของปี", en: "Week numbering", src: "CLDR",
    v: K("KW 11", "semaine 11 (S11)", "第11週", "11주차", "第11周", "第11週"),
    note: K("ISO 8601: สัปดาห์แรกต้องมีอย่างน้อย 4 วัน", "ISO 8601: สัปดาห์แรกต้องมีอย่างน้อย 4 วัน", "สัปดาห์แรกคือสัปดาห์ที่มี 1 ม.ค.", "สัปดาห์แรกคือสัปดาห์ที่มี 1 ม.ค.", "สัปดาห์แรกคือสัปดาห์ที่มี 1 ม.ค.", "สัปดาห์แรกคือสัปดาห์ที่มี 1 ม.ค.") },
  { cat: "calendar", label: "ชื่อเดือน", en: "Month names", src: "CLDR", v: "months", list: true },
  { cat: "calendar", label: "ชื่อเดือนแบบย่อ", en: "Month abbreviations", src: "CLDR", v: "monthsShort", list: true },
  { cat: "calendar", label: "ชื่อวัน (จันทร์–อาทิตย์)", en: "Weekday names", src: "CLDR", v: "days", list: true },
  { cat: "calendar", label: "ชื่อวันแบบย่อ", en: "Weekday abbreviations", src: "CLDR", v: "daysShort", list: true,
    note: K("", "มีจุดท้าย", "ในวงเล็บหลังวันที่: (月)", "ในวงเล็บหลังวันที่: (월)", "周一 ใน CN", "週一 ใน TW (ไม่ใช่ 周)") },
  { cat: "calendar", label: "ปฏิทินอื่นที่ใช้จริง", en: "Other calendars in use", src: "CLDR",
    v: (c, x, id) => ({ de: "—", fr: "—", ja: x.jaEraLong + "\n" + x.jaEraShort, ko: "음력 1월 21일", "zh-hans": "农历 正月廿一\n(" + x.cnLunar + ")", "zh-hant": x.rocLong + "\n" + x.rocShort })[id],
    note: K("ใช้ปฏิทินเกรโกเรียนอย่างเดียว", "ใช้ปฏิทินเกรโกเรียนอย่างเดียว", "รัชศก 令和 เริ่มปี 2019 ปีแรกเขียนว่า 元年", "จันทรคติ (음력) ใช้กับวันหยุด เช่น 설날", "จันทรคติใช้กับเทศกาล เช่น 春节", "ปี 民國 = ค.ศ. − 1911") },
  { cat: "calendar", label: "เวลาแบบสัมพัทธ์: เมื่อวาน", en: "Relative: yesterday", src: "CLDR", v: "rel.yesterday" },
  { cat: "calendar", label: "เวลาแบบสัมพัทธ์: 3 วันก่อน", en: "Relative: 3 days ago", src: "CLDR", v: "rel.days3ago",
    note: K("", "", "CLDR มีเว้นวรรค (3 日前) แต่ UI ทั่วไปมักไม่เว้น", "", "", "") },
  { cat: "calendar", label: "เวลาแบบสัมพัทธ์: อีก 2 ชั่วโมง", en: "Relative: in 2 hours", src: "CLDR", v: "rel.in2h" },
  { cat: "calendar", label: "เวลาแบบสัมพัทธ์: สัปดาห์หน้า", en: "Relative: next week", src: "CLDR", v: "rel.nextWeek" },

  // ---------- number ----------
  { cat: "number", label: "ตัวเลขทศนิยม", en: "Decimal number", src: "CLDR", v: "num", pat: "#,##0.###" },
  { cat: "number", label: "ตัวเลข 4 หลัก", en: "Four-digit number", src: "CLDR", v: "int4",
    note: K("Duden อนุญาตให้ไม่ใส่ตัวคั่นได้ (1234)", "", "", "", "", "") },
  { cat: "number", label: "ตัวเลขติดลบ", en: "Negative number", src: "CLDR", v: "neg",
    note: "ทุกภาษาใช้ hyphen-minus (U+002D) ตาม CLDR" },
  { cat: "number", label: "ทศนิยมน้อยกว่า 1", en: "Fraction below 1", src: "CLDR", v: "small" },
  { cat: "number", label: "เปอร์เซ็นต์", en: "Percent", src: "CLDR", v: "pct",
    pat: K("#,##0" + NB + "%", "#,##0" + NB + "%", "#,##0%", "#,##0%", "#,##0%", "#,##0%"),
    note: K("มี NBSP ก่อน %", "มี NBSP ก่อน %", "", "", "", "") },
  { cat: "number", label: "เปอร์เซ็นต์ติดลบ", en: "Negative percent", src: "CLDR", v: "pctNeg" },
  { cat: "number", label: "สัญกรณ์วิทยาศาสตร์", en: "Scientific notation", src: "CLDR", v: "sci" },

  // ---------- currency ----------
  { cat: "currency", label: "สกุลเงินท้องถิ่น", en: "Local currency", src: "CLDR", v: "cur",
    pat: K("#,##0.00" + NB + "¤", "#,##0.00" + NB + "¤", "¤#,##0", "¤#,##0", "¤#,##0.00", "¤#,##0.00"),
    note: K("สัญลักษณ์อยู่หลังตัวเลข มี NBSP คั่น", "สัญลักษณ์อยู่หลังตัวเลข มี NBSP คั่น", "ไม่มีทศนิยม (1234.5 ปัดเป็น 1,235)", "ไม่มีทศนิยม (1234.5 ปัดเป็น 1,235)", "", "ในทางปฏิบัตินิยมเขียน NT$ เพื่อไม่ให้สับสนกับ USD") },
  { cat: "currency", label: "จำนวนเงินติดลบ", en: "Negative amount", src: "CLDR", v: "curNeg" },
  { cat: "currency", label: "แบบบัญชี (ติดลบ)", en: "Accounting format", src: "CLDR", v: "curAcct",
    note: K("เยอรมันไม่ใช้วงเล็บ ใช้เครื่องหมายลบ", "ใช้วงเล็บ", "ใช้วงเล็บ", "ใช้วงเล็บ", "ใช้วงเล็บ", "ใช้วงเล็บ") },
  { cat: "currency", label: "แบบรหัส ISO", en: "ISO code", src: "CLDR", v: "curIso" },
  { cat: "currency", label: "ในประโยค (ชื่อสกุลเงิน)", en: "Spelled-out name", src: "CLDR", v: "curName",
    note: K("", "", "ในข้อความนิยม 1,235円", "ในข้อความนิยม 1,235원", "ในข้อความนิยม 1,234.50元", "ในข้อความนิยม 新台幣1,234元") },
  { cat: "currency", label: "ดอลลาร์สหรัฐ (USD)", en: "US dollar", src: "CLDR", v: "usd",
    note: K("", "ใช้ $US", "ใช้ $ เฉยๆ", "ใช้ US$", "ใช้ US$", "ใช้ US$ เพราะ $ คือ TWD") },
  { cat: "currency", label: "เยนญี่ปุ่น (JPY)", en: "Japanese yen", src: "CLDR", v: "jpy",
    note: K("", "ใช้รหัส JPY", "￥ เต็มความกว้าง (U+FFE5)", "JP¥", "JP¥ เพราะ ¥ คือหยวน", "¥ ครึ่งความกว้าง") },
  { cat: "currency", label: "ทศนิยมของสกุลเงินท้องถิ่น", en: "Currency decimals", src: "CLDR",
    v: (c) => c.curDigits + " ตำแหน่ง (" + c.curCode + ")",
    note: K("", "", "", "", "", "ทางการ 2 ตำแหน่ง แต่เงินสด/ราคาทั่วไปไม่มีทศนิยม") },
  { cat: "currency", label: "รหัสอักขระของสัญลักษณ์", en: "Symbol code point", src: "CLDR",
    v: K("€ U+20AC", "€ U+20AC", "￥ U+FFE5", "₩ U+20A9", "¥ U+00A5", "$ U+0024"),
    note: K("", "", "หลายระบบใช้ ¥ U+00A5 แทน ต้องตกลงให้ตรงกันทั้งโปรเจกต์", "", "สัญลักษณ์เดียวกับเยน", "") },

  // ---------- units ----------
  { cat: "units", label: "ระบบการวัด", en: "Measurement system", src: "Style",
    v: K("เมตริก (SI)", "เมตริก (SI)", "เมตริก · 畳 / 坪 สำหรับพื้นที่ห้อง", "เมตริก · 평 สำหรับพื้นที่ในชีวิตประจำวัน", "เมตริก · 斤 (500 g), 亩 สำหรับที่ดิน", "เมตริก · 坪 (≈3.3 ㎡), 台斤 (600 g)"),
    note: "ทุกภาษาใช้ °C, A4, กิโลเมตร" },
  { cat: "units", label: "ระยะทาง", en: "Distance", src: "CLDR", v: "units.km",
    note: K("", "ช่องว่างแคบ U+202F ก่อนหน่วย", "", "ไม่เว้นวรรค", "ใช้ชื่อหน่วยจีน 公里", "ใช้ชื่อหน่วยจีน 公里") },
  { cat: "units", label: "น้ำหนัก", en: "Weight", src: "CLDR", v: "units.kg" },
  { cat: "units", label: "อุณหภูมิ", en: "Temperature", src: "CLDR", v: "units.c" },
  { cat: "units", label: "ขนาดไฟล์", en: "File size", src: "CLDR", v: (c) => c.units.mb + "\n" + c.units.gb,
    note: K("", "ใช้ octet: ko, Mo, Go, To (ไม่ใช่ KB/MB/GB)", "", "ไม่เว้นวรรค", "", "") },
  { cat: "units", label: "บิตเรต", en: "Bitrate", src: "CLDR", v: "units.kbps" },
  { cat: "units", label: "เฟรมเรต", en: "Frame rate", src: "Style", v: "units.fps",
    note: "ทศนิยมตาม locale ส่วนคำย่อ fps ให้ยึด glossary ของผลิตภัณฑ์" },
  { cat: "units", label: "ตัวเลขแบบย่อ (12,345,678)", en: "Compact number", src: "CLDR", v: "compact1" },
  { cat: "units", label: "ตัวเลขแบบย่อ (150,000,000)", en: "Compact number, large", src: "CLDR", v: "compact2" },
  { cat: "units", label: "หน่วยนับเลขใหญ่", en: "Large-number words", src: "Style",
    v: K("Tausend · Million (Mio.) · Milliarde (Mrd.) · Billion", "mille · million · milliard · billion", "万 10⁴ · 億 10⁸ · 兆 10¹²", "만 10⁴ · 억 10⁸ · 조 10¹²", "万 10⁴ · 亿 10⁸ · 万亿 10¹²", "萬 10⁴ · 億 10⁸ · 兆 10¹²"),
    note: K("Milliarde = 10⁹, Billion = 10¹² (ไม่ใช่ billion ภาษาอังกฤษ)", "milliard = 10⁹, billion = 10¹²", "จัดกลุ่มทีละ 4 หลัก ไม่ใช่ 3", "จัดกลุ่มทีละ 4 หลัก เช่น 1억 2,345만", "兆 ในจีนแผ่นดินใหญ่ยังแปลว่า mega (兆字节 = MB)", "") },
  { cat: "units", label: "เลขลำดับที่", en: "Ordinals", src: "Style",
    v: K("1. · 2. · 3.", "1er / 1re · 2e · 3e", "第1回 · 1番目 · 1位", "첫 번째 · 두 번째 · 제1회", "第1 · 第一", "第1 · 第一"),
    note: K("ตัวเลขตามด้วยจุด", "e ยก (superscript) ห้ามใช้ 2ème หรือ 2nd", "", "", "", "") },
  { cat: "units", label: "ขนาดกระดาษ", en: "Paper size", src: "Style",
    v: K("A4", "A4", "A4 · B5 (JIS)", "A4", "A4", "A4"),
    note: K("", "", "ขนาด B ของ JIS ใหญ่กว่า ISO B", "", "", "") },

  // ---------- text ----------
  { cat: "text", label: "เครื่องหมายคำพูด", en: "Quotation marks", src: "CLDR",
    v: K("„Text“", "«" + NN + "texte" + NN + "»", "「テキスト」", "“텍스트”", "“文本”", "「文字」"),
    note: K("เปิดล่าง ปิดบน; หนังสือบางสำนักใช้ »Text«", "มีช่องว่างไม่ตัดบรรทัดด้านใน", "", "", "", "") },
  { cat: "text", label: "คำพูดซ้อน", en: "Nested quotes", src: "CLDR",
    v: K("‚Text‘", "“texte”", "『テキスト』", "‘텍스트’", "‘文本’", "『文字』") },
  { cat: "text", label: "ชื่อหนังสือ / ผลงาน", en: "Title marks", src: "Style",
    v: K("„Titel“ หรือตัวเอียง", "ตัวเอียง", "『書名』 · 「記事名」", "『책 제목』《책 제목》 · 「글」〈글〉", "《书名》 · 〈篇名〉", "《書名》 · 〈篇名〉") },
  { cat: "text", label: "รายการ (A, B และ C)", en: "List: and", src: "CLDR", v: "list",
    note: K("ไม่มีจุลภาคก่อน und", "ไม่มีจุลภาคก่อน et", "ใช้ 、", "", "ใช้ 、 คั่นรายการ", "ใช้ 、 คั่นรายการ") },
  { cat: "text", label: "รายการ (A, B หรือ C)", en: "List: or", src: "CLDR", v: "listOr" },
  { cat: "text", label: "วรรคตอนในประโยค", en: "Sentence punctuation", src: "Style",
    v: K("Speichern? Hinweis: Fertig!", "Enregistrer" + NN + "? Remarque" + NB + ": terminé" + NN + "!", "保存しますか？注意：完了しました。", "저장하시겠습니까? 참고: 완료되었습니다.", "要保存吗？注意：已完成。", "要儲存嗎？注意：已完成。"),
    note: K("ไม่มีช่องว่างก่อน ? ! : ;", "ต้องมีช่องว่างไม่ตัดบรรทัดก่อน ; ! ? (U+202F) และก่อน : (U+00A0)", "เครื่องหมายเต็มความกว้าง 。、？！", "ใช้เครื่องหมายแบบตะวันตกครึ่งความกว้าง", "เครื่องหมายเต็มความกว้าง ，。？！：；", "เครื่องหมายเต็มความกว้าง วาง 。，、 กลางช่องตัวอักษร") },
  { cat: "text", label: "ช่องว่างระหว่างคำ", en: "Word spacing", src: "Style",
    v: K("มี", "มี", "ไม่มี", "มี (띄어쓰기)", "ไม่มี", "ไม่มี"),
    note: K("", "", "", "", "style guide ส่วนใหญ่ให้เว้นวรรคระหว่างจีนกับอังกฤษ/ตัวเลข (ไม่ใช่มาตรฐานรัฐ)", "style guide ส่วนใหญ่ให้เว้นวรรคระหว่างจีนกับอังกฤษ/ตัวเลข") },
  { cat: "text", label: "จุดไข่ปลา", en: "Ellipsis", src: "Style",
    v: K("…", "…", "……", "…… หรือ …", "……", "……"),
    note: K("", "", "ใช้ U+2026 สองตัว", "", "ใช้ U+2026 สองตัว (หกจุด)", "ใช้ U+2026 สองตัว (หกจุด)") },
  { cat: "text", label: "ขีด (dash)", en: "Dash", src: "Style",
    v: K("Text – Text", "texte – texte", "テキスト――テキスト", "텍스트—텍스트", "文本——文本", "文字——文字"),
    note: K("en dash มีเว้นวรรค (Gedankenstrich)", "", "em dash สองตัว", "", "破折号 = em dash สองตัว", "") },
  { cat: "text", label: "ตัวพิมพ์ใหญ่", en: "Capitalization", src: "Style",
    v: K("คำนามทุกคำขึ้นต้นตัวใหญ่", "หัวข้อขึ้นต้นตัวใหญ่แค่คำแรก", "ไม่มี", "ไม่มี", "ไม่มี", "ไม่มี"),
    note: K("ชื่อวันและเดือนขึ้นต้นตัวใหญ่ (Montag, März)", "ชื่อวัน เดือน ภาษาพิมพ์เล็ก; ตัวใหญ่ต้องคงสำเนียง (É, À)", "คำอังกฤษในประโยคคงตามต้นฉบับ", "", "", "") },
  { cat: "text", label: "การตัดบรรทัด", en: "Line breaking", src: "Style",
    v: K("ตัดตามคำ + ยัติภังค์", "ตัดตามคำ + ยัติภังค์", "ตัดได้ทุกตัวอักษร + 禁則処理", "ตัดตามคำ (keep-all)", "ตัดได้ทุกตัวอักษร + 标点禁则", "ตัดได้ทุกตัวอักษร + 標點禁則"),
    note: K("คำผสมยาวมาก ต้องเปิด hyphenation", "ห้ามแยกเครื่องหมายที่มี NBSP นำหน้า", "ห้ามขึ้นต้นบรรทัดด้วย 、。」）ー っゃ และห้ามจบบรรทัดด้วย 「（", "CSS: word-break: keep-all", "ห้ามขึ้นต้นบรรทัดด้วย ，。！？", "ห้ามขึ้นต้นบรรทัดด้วย ，。！？") },
  { cat: "text", label: "ความยาวข้อความเทียบภาษาอังกฤษ", en: "Text expansion vs. English", src: "Style",
    v: K("ยาวขึ้นราว 20–35%", "ยาวขึ้นราว 15–25%", "ตัวอักษรน้อยลง แต่กว้างกว่า", "ตัวอักษรน้อยลง แต่กว้างกว่า", "ตัวอักษรน้อยลง แต่กว้างกว่า", "ตัวอักษรน้อยลง แต่กว้างกว่า"),
    note: "ค่าประมาณทั่วไป สตริงสั้นๆ (1–2 คำ) อาจยาวขึ้น 2–3 เท่า; CJK ต้องการความสูงบรรทัดมากกว่า" },
  { cat: "text", label: "ชื่อภาษาในตัวเลือกภาษา", en: "Language autonym", src: "CLDR",
    v: K("Deutsch", "Français", "日本語", "한국어", "简体中文", "繁體中文"),
    note: K("", "CLDR เป็นตัวเล็ก (français) แต่ขึ้นต้นตัวใหญ่เมื่ออยู่ในเมนู", "", "", "", "") },
  { cat: "text", label: "ชื่อปุ่มคีย์บอร์ด (Windows)", en: "Keyboard key names", src: "Style",
    v: K("Strg · Umschalt · Alt · Entf", "Ctrl · Maj · Alt · Suppr", "Ctrl · Shift · Alt · Delete", "Ctrl · Shift · Alt · Delete", "Ctrl · Shift · Alt · Delete", "Ctrl · Shift · Alt · Delete"),
    note: K("Strg+S แทน Ctrl+S", "Maj = Shift", "ใช้ชื่ออังกฤษ", "ใช้ชื่ออังกฤษ", "ใช้ชื่ออังกฤษ", "ใช้ชื่ออังกฤษ") },


  // ---------- sort ----------
  { cat: "sort", label: "หลักการเรียงของภาษา", en: "Collation basis", src: "CLDR",
    v: K("ä ö ü เรียงต่อจาก a o u\n(Apfel < Äpfel)", "สำเนียงมีผลเป็นลำดับรอง\n(cote < coté < côte < côté)", "ตามเสียงอ่าน あいうえお\nคันจิตามลำดับ JIS", "ตามลำดับ 가나다\nฮันจาแทรกปนกับฮันกึลตามเสียงอ่าน", "ตามพินอิน (拼音)", "ตามจำนวนขีด (筆畫)"),
    note: K("ตัวพิมพ์ใหญ่-เล็กไม่ใช่ลำดับหลัก", "", "ฮิรางานะกับคาตาคานะถือว่าเท่ากันในลำดับหลัก", "ㄲ ㄸ ㅃ ㅆ ㅉ มาหลังพยัญชนะเดี่ยวของมัน", "", "จำนวนขีดเท่ากันจะเรียงตามรากศัพท์ (部首)") },
  { cat: "sort", label: "ลำดับระบบตัวเขียน", en: "Script order", src: "CLDR",
    v: (c, x, id) => SORT.scripts[id].join(" → "),
    note: "ค่าเริ่มต้น (อังกฤษ): " + SORT.scripts.en.join(" → ") },
  { cat: "sort", label: "ตัวอย่างเฉพาะภาษา", en: "Language-specific example", src: "CLDR", ordered: true,
    v: (c, x, id) => SORT.spec[id].sorted,
    note: {
      de: "ก่อนเรียง: " + SORT.spec.de.input.join(", ") + "\nStrasse มาก่อน Straße และ Apfel มาก่อน Äpfel",
      fr: "ก่อนเรียง: " + SORT.spec.fr.input.join(", ") + "\ncoeur กับ cœur เท่ากันในลำดับหลัก ตัดสินที่ลำดับรอง",
      ja: "ก่อนเรียง: " + SORT.spec.ja.input.join("、") + "\nかこう → かっこう → がっこう: ตัวธรรมดามาก่อนตัวเล็ก (っ) และตัวที่มี dakuten",
      ko: "ก่อนเรียง: " + SORT.spec.ko.input.join(", ") + "\n까치 (ㄲ) มาหลัง ㄱ ทั้งหมด; 學校 (학교) แทรกตามเสียง 학; ละตินอยู่ท้าย",
      "zh-hans": "ก่อนเรียง: " + SORT.spec["zh-hans"].input.join("、") + "\n长城 ถูกเรียงด้วยเสียง zhǎng (ไม่ใช่ cháng) จึงไปอยู่หลัง 重庆; Beijing อยู่หลังอักษรจีนทั้งหมด",
      "zh-hant": "ก่อนเรียง: " + SORT.spec["zh-hant"].input.join("、") + "\n一 (1 ขีด) · 十 (2) · 大 (3) · 中 日 月 水 (4) · 國 (11)"
    } },
  { cat: "sort", label: "Collation ทางเลือก", en: "Alternate collation", src: "CLDR", ordered: true,
    v: (c, x, id) => ({ de: SORT.spec.de.phonebook, fr: "—", ja: SORT.spec.ja.en, ko: "—", "zh-hans": SORT.spec["zh-hans"].stroke, "zh-hant": SORT.spec["zh-hant"].zhuyin })[id],
    note: K("แบบสมุดโทรศัพท์ (phonebook): ä = ae จึง Äpfel มาก่อน Affe", "fr-CA เทียบสำเนียงจากท้ายคำ ลำดับจึงต่างจาก fr-FR", "ถ้าแอปใช้ collation ภาษาอังกฤษ คันจิจะเรียงตาม code point: 学校 มาก่อน 花火", "", "แบบจำนวนขีด (笔画) ใช้ในบางเอกสาร เช่น รายชื่อ", "แบบจู้อิน (注音 ㄅㄆㄇㄈ) ใช้ในพจนานุกรม") },

  // ---------- contact ----------
  { cat: "contact", label: "ลำดับชื่อ", en: "Name order", src: "Style",
    v: K("Max Mustermann", "Jean Dupont\nDUPONT Jean", "山田 太郎", "홍길동", "王小明", "王小明"),
    note: K("ชื่อ นามสกุล", "ชื่อ นามสกุล; เอกสารราชการเขียนนามสกุลตัวใหญ่ขึ้นก่อน", "นามสกุลก่อน; ฟอร์มต้องมีช่องเสียงอ่าน (フリガナ)", "นามสกุลก่อน ไม่เว้นวรรค", "นามสกุลก่อน ไม่เว้นวรรค", "นามสกุลก่อน ไม่เว้นวรรค") },
  { cat: "contact", label: "คำนำหน้า / คำยกย่อง", en: "Honorifics", src: "Style",
    v: K("Herr · Frau · Dr.", "M. · Mme · Dr", "様 · さん", "님 · 씨", "先生 · 女士", "先生 · 小姐"),
    note: K("อยู่หน้าชื่อ", "Mme ไม่มีจุด", "อยู่หลังชื่อ: 山田様", "อยู่หลังชื่อ: 홍길동 님", "อยู่หลังนามสกุล: 王先生", "อยู่หลังนามสกุล: 王先生") },
  { cat: "contact", label: "รูปแบบที่อยู่", en: "Postal address", src: "Style",
    v: K("Max Mustermann\nMusterstraße 12\n10115 Berlin\nDEUTSCHLAND",
         "M. Jean DUPONT\n12 rue de l’Exemple\n75002 PARIS\nFRANCE",
         "〒100-0001\n東京都千代田区千代田1-1-1\n山田 太郎 様",
         "(04524) 서울특별시 중구 예시로 12\n홍길동 님",
         "100010\n北京市东城区示例路100号\n王小明 收",
         "100001\n臺北市中正區範例路一段100號5樓\n王小明 先生 收"),
    note: K("ถนนก่อนเลขที่; รหัสไปรษณีย์ก่อนชื่อเมือง", "เลขที่ก่อนถนน; ชื่อเมืองตัวใหญ่", "จากใหญ่ไปเล็ก: จังหวัด › เมือง › บ้านเลขที่", "ที่อยู่แบบชื่อถนน (도로명주소) จากใหญ่ไปเล็ก", "จากใหญ่ไปเล็ก; ต่อท้ายชื่อด้วย 收", "จากใหญ่ไปเล็ก; ราชการใช้ 臺 มากกว่า 台") },
  { cat: "contact", label: "รหัสไปรษณีย์", en: "Postal code", src: "Style",
    v: K("5 หลัก · 10115", "5 หลัก · 75002", "7 หลัก · 〒100-0001", "5 หลัก · 04524", "6 หลัก · 100010", "6 หลัก (3+3) · 100001"),
    note: K("", "", "", "ใช้ 5 หลักตั้งแต่ปี 2015", "", "ระบบเก่า 3+2 หลักยังพบได้") },
  { cat: "contact", label: "โทรศัพท์บ้าน", en: "Landline", src: "Style",
    v: K("030 12345678", "01 23 45 67 89", "03-1234-5678", "02-123-4567", "010-1234 5678", "(02) 2345-6789"),
    note: K("", "จัดกลุ่มทีละ 2 หลัก", "คั่นด้วย -", "คั่นด้วย -", "", "รหัสพื้นที่ในวงเล็บ") },
  { cat: "contact", label: "โทรศัพท์มือถือ", en: "Mobile", src: "Style",
    v: K("0151 23456789", "06 12 34 56 78", "090-1234-5678", "010-1234-5678", "138 1234 5678", "0912-345-678") },
  { cat: "contact", label: "เบอร์รูปแบบสากล", en: "International", src: "Style",
    v: K("+49 30 12345678", "+33 1 23 45 67 89", "+81 3-1234-5678", "+82 10-1234-5678", "+86 138 1234 5678", "+886 912 345 678"),
    note: "ตัดเลข 0 นำหน้าออกเมื่อใส่รหัสประเทศ" }
];

const CHECKS = {
  de: [
    "ทศนิยมใช้ , และหลักพันใช้ . เช่น 1.234,50 ห้ามสลับ",
    "€ อยู่หลังตัวเลข คั่นด้วย NBSP: 12,50 €",
    "คำนามทุกคำขึ้นต้นตัวใหญ่ ห้ามแปลง string เป็นตัวเล็กอัตโนมัติ",
    "ข้อความยาวขึ้นราว 30% เช็คปุ่มและเมนูว่าโดนตัด (truncation) หรือไม่",
    "คำพูดใช้ „…“ ไม่ใช่ \"…\"",
    "Shortcut บน Windows แสดงเป็น Strg+S ไม่ใช่ Ctrl+S"
  ],
  fr: [
    "ต้องมีช่องว่างไม่ตัดบรรทัดก่อน ; : ! ? และด้านใน « » ถ้าเป็นช่องว่างธรรมดา เครื่องหมายจะหล่นไปบรรทัดใหม่",
    "หลักพันคั่นด้วยช่องว่างแคบ U+202F ไม่ใช่ . หรือ ,",
    "ขนาดไฟล์ใช้ ko / Mo / Go ไม่ใช่ KB / MB / GB",
    "ชื่อวันและเดือนพิมพ์เล็ก: lundi 9 mars",
    "วันที่ 1 ของเดือนเขียน 1er; เลขลำดับเขียน 2e ไม่ใช่ 2ème",
    "ตัวพิมพ์ใหญ่ต้องคงสำเนียง: ÉDITION ไม่ใช่ EDITION"
  ],
  ja: [
    "CLDR ใช้ ￥ เต็มความกว้าง (U+FFE5) แต่หลายระบบใช้ ¥ (U+00A5) ต้องตกลงให้ตรงกัน และเยนไม่มีทศนิยม",
    "แบบ 12 ชม. เที่ยงคืนคือ 午前0時 และเที่ยงวันคือ 午後0時",
    "ตัดบรรทัดตาม 禁則処理: ห้ามขึ้นบรรทัดด้วย 、。」ー っ",
    "คาตาคานะต้องเต็มความกว้าง ห้ามใช้ ｶﾀｶﾅ ครึ่งความกว้าง; ตัวเลขและอังกฤษใช้ครึ่งความกว้าง",
    "IME: กด Enter ระหว่างแปลงอักษร (変換中) ต้องยืนยันคำ ไม่ใช่ submit หรือเรียก shortcut",
    "ตั้ง lang=\"ja\" หรือใช้ฟอนต์ญี่ปุ่น ไม่งั้นคันจิบางตัวแสดงเป็นรูปแบบจีน"
  ],
  ko: [
    "วันที่แบบตัวเลขมีจุดและเว้นวรรคครบ รวมจุดท้าย: 2026. 3. 9.",
    "오전/오후 อยู่หน้าเวลาและเว้นวรรค: 오후 2:05",
    "คำช่วย (조사) เปลี่ยนตามคำข้างหน้า เช่น 을/를 ถ้าต่อท้ายตัวแปร {name} ให้ใช้ 을(를) หรือแก้ประโยค",
    "เว้นวรรคระหว่างคำ และ UI ควรตัดบรรทัดตามคำ (keep-all)",
    "₩ ไม่มีทศนิยม; ในข้อความนิยม 1,235원",
    "IME: พยางค์สุดท้ายที่ยังประกอบไม่เสร็จต้องไม่หายเมื่อย้ายโฟกัสหรือกด Enter"
  ],
  "zh-hans": [
    "เครื่องหมายวรรคตอนเต็มความกว้าง ，。？！：； และ 、 คั่นรายการ",
    "ชื่อหนังสือหรือผลงานใช้ 《》",
    "¥ ใช้ทั้ง CNY และ JPY ถ้าแสดงสองสกุลพร้อมกันต้องใช้ CN¥ / JP¥ หรือ 元 / 円",
    "ตัวเลขใหญ่ใช้ 万 / 亿 จัดกลุ่มทีละ 4 หลัก",
    "ห้ามปนตัวเต็ม: ฟอนต์และ lang ต้องเป็น zh-Hans",
    "สัปดาห์เริ่มวันจันทร์ ต่างจาก TW ที่เริ่มวันอาทิตย์"
  ],
  "zh-hant": [
    "เครื่องหมายคำพูดใช้ 「」 และ 『』 ไม่ใช่ “ ”",
    "เวลาเริ่มต้นเป็น 12 ชม. พร้อมช่วงของวัน: 凌晨 / 上午 / 中午 / 下午 / 晚上",
    "CLDR แสดง TWD เป็น $ แต่ทั่วไปนิยม NT$ และ USD ต้องเป็น US$",
    "เอกสารราชการใช้ปี 民國 (2026 = 民國115年)",
    "คำศัพท์ต่างจาก CN ไม่ใช่แค่แปลงตัวอักษร: 軟體 (软件), 影片 (视频), 檔案 (文件), 滑鼠 (鼠标)",
    "ใช้ 週 ไม่ใช่ 周 และวาง 。，、 กลางช่องตัวอักษรตามมาตรฐานไต้หวัน"
  ]
};

// ---------- Special letters (DE, FR) ----------
const CHARS = {
  de: {
    samples: [
      { label: "ชุดอักขระทั้งหมด", text: "Ä Ö Ü ẞ ä ö ü ß" },
      { label: "Pangram สำหรับทดสอบ", text: "Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich." }
    ],
    groups: [
      { name: "Umlaut", th: "จุดสองจุดบนสระ a o u เปลี่ยนเสียงสระ นับเป็นตัวอักษรของภาษาเยอรมัน", chars: [
        { g: ["Ä", "ä"], ex: "Änderungen · Mädchen", note: "เขียนแทนเป็น ae ได้เฉพาะตอนระบบไม่รองรับ เช่น URL" },
        { g: ["Ö", "ö"], ex: "Öffnen · schön · Größe", note: "เขียนแทนเป็น oe ได้เฉพาะตอนระบบไม่รองรับ" },
        { g: ["Ü", "ü"], ex: "Übersicht · für · Überblendung", note: "เขียนแทนเป็น ue ได้เฉพาะตอนระบบไม่รองรับ" }
      ] },
      { name: "Eszett (scharfes S)", th: "ตัว s คมของภาษาเยอรมัน", chars: [
        { g: ["ẞ", "ß"], ex: "Straße · groß · Größe", note: "ตัวใหญ่ ẞ ใช้ได้ทางการตั้งแต่ปี 2017 แต่ toUpperCase() และ CSS uppercase ยังแปลง ß เป็น SS; เยอรมันสวิสไม่ใช้ ß" }
      ] },
      { name: "Accent ในคำยืม", th: "พบในคำที่ยืมจากภาษาฝรั่งเศส", chars: [
        { g: ["É", "é"], ex: "Café · Varieté · Séance", note: "ฟอนต์และช่อง input ต้องรองรับด้วย แม้ไม่ใช่ตัวอักษรหลัก" }
      ] }
    ],
    qa: [
      "ห้ามแทนอุมเลาท์ด้วยสระไม่มีจุด เพราะความหมายเปลี่ยน เช่น schon (แล้ว) กับ schön (สวย)",
      "ตัวพิมพ์ใหญ่ทั้งคำ: Straße → STRASSE ยาวขึ้น 1 ตัวอักษร เช็คปุ่มหรือหัวข้อที่ใช้ uppercase ว่าโดนตัดหรือไม่",
      "คีย์บอร์ด QWERTZ: Z กับ Y สลับตำแหน่ง และ AltGr = Ctrl+Alt บน Windows ดังนั้น shortcut Ctrl+Alt+Q / E / 7–0 อาจชนกับการพิมพ์ @ € { [ ] }",
      "ä ö ü อาจเก็บเป็นตัวเดียว (NFC) หรือสระ + เครื่องหมาย (NFD) ชื่อไฟล์บน macOS มักเป็น NFD การค้นหาและเปรียบเทียบต้อง normalize ก่อน",
      "ถ้าเห็น Ã¤ Ã¶ Ã¼ ÃŸ แปลว่าข้อความ UTF-8 ถูกอ่านเป็น Windows-1252"
    ]
  },
  fr: {
    samples: [
      { label: "ชุดอักขระตัวใหญ่", text: "À Â Æ Ç É È Ê Ë Î Ï Ô Œ Ù Û Ü Ÿ" },
      { label: "ชุดอักขระตัวเล็ก", text: "à â æ ç é è ê ë î ï ô œ ù û ü ÿ" },
      { label: "Pangram ที่มีเครื่องหมายครบทุกตัว", text: "Dès Noël, où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir, à l’aÿ d’âge mûr, &cætera." }
    ],
    groups: [
      { name: "Accent aigu ( ´ )", th: "ใช้กับ e เท่านั้น", chars: [
        { g: ["É", "é"], ex: "été · École · Éditeur", note: "ตัวใหญ่ต้องคง accent: ÉDITEUR ไม่ใช่ EDITEUR" }
      ] },
      { name: "Accent grave ( ` )", th: "ใช้กับ a e u", chars: [
        { g: ["À", "à"], ex: "à · voilà · déjà", note: "à (บุพบท) ต่างจาก a (กริยา avoir)" },
        { g: ["È", "è"], ex: "très · Lumière · problème", note: "" },
        { g: ["Ù", "ù"], ex: "où", note: "มีแค่คำเดียวคือ où (ที่ไหน) ต่างจาก ou (หรือ)" }
      ] },
      { name: "Accent circonflexe ( ^ )", th: "ใช้กับสระ a e i o u", chars: [
        { g: ["Â", "â"], ex: "âge · château", note: "" },
        { g: ["Ê", "ê"], ex: "fête · être · fenêtre", note: "" },
        { g: ["Î", "î"], ex: "île · dîner", note: "การปฏิรูปปี 1990 ให้ตัด ^ บน i ได้ในหลายคำ (ile) ทั้งสองแบบถูก แต่ต้องใช้เหมือนกันทั้งโปรดักต์" },
        { g: ["Ô", "ô"], ex: "hôtel · rôle · contrôle", note: "" },
        { g: ["Û", "û"], ex: "sûr · mûr · août", note: "การปฏิรูปปี 1990 ให้ตัด ^ บน u ได้ในหลายคำ ยกเว้นคำที่ความหมายจะเปลี่ยน (sûr / sur)" }
      ] },
      { name: "Tréma ( ¨ )", th: "บอกว่าให้ออกเสียงสระแยกกัน", chars: [
        { g: ["Ë", "ë"], ex: "Noël · ambiguë", note: "" },
        { g: ["Ï", "ï"], ex: "maïs · naïf", note: "" },
        { g: ["Ü", "ü"], ex: "capharnaüm · ambigüe", note: "พบน้อย ส่วนใหญ่ในการสะกดแบบปี 1990" },
        { g: ["Ÿ", "ÿ"], ex: "L’Haÿ-les-Roses", note: "พบในชื่อเฉพาะ ตัวใหญ่ Ÿ (U+0178) ไม่อยู่ใน Latin-1 ให้เช็คว่าฟอนต์มี glyph" }
      ] },
      { name: "Cédille ( ¸ )", th: "ขีดใต้ c ทำให้ออกเสียง s หน้า a o u", chars: [
        { g: ["Ç", "ç"], ex: "ça · garçon · français", note: "ตัวใหญ่ต้องคงเซดิลลา: ÇA VA ไม่ใช่ CA VA" }
      ] },
      { name: "Ligature", th: "ตัวอักษรควบสองตัว นับเป็นอักขระเดียว", chars: [
        { g: ["Œ", "œ"], ex: "cœur · œuvre · sœur", note: "แสดงผลต้องใช้ œ ไม่ใช่ oe แต่การค้นหาควรหา oeuvre เจอด้วย" },
        { g: ["Æ", "æ"], ex: "ex æquo · cæcum", note: "พบน้อย" }
      ] },
      { name: "Apostrophe", th: "ใช้กับการย่อคำ (élision)", chars: [
        { g: ["’"], ex: "l’éditeur · d’accord · aujourd’hui", note: "งานพิมพ์ใช้ ’ (U+2019) แต่ ' (U+0027) ก็พบบ่อย ให้ยึด style guide ของโปรดักต์และใช้แบบเดียวทั้งหมด" }
      ] }
    ],
    qa: [
      "ตัวพิมพ์ใหญ่ต้องคงเครื่องหมายทุกตัว: ÉDITION, ÇA, ÎLE (ตามคำแนะนำของ Académie française)",
      "Élision: le / la / de กลายเป็น l’ / d’ เมื่อคำถัดไปขึ้นต้นด้วยสระหรือ h ใบ้ string แบบ \"le {0}\" จะผิดเมื่อ {0} = image (ต้องเป็น l’image)",
      "คีย์บอร์ด AZERTY: เลขแถวบนต้องกด Shift (ถ้าไม่กดจะได้ & é \" ' ( - è _ ç à) ให้ทดสอบ shortcut Ctrl+1…9 ด้วย; A/Q และ Z/W สลับตำแหน่ง; ^ และ ¨ เป็น dead key",
      "é อาจเก็บเป็น U+00E9 ตัวเดียว (NFC) หรือ e + U+0301 (NFD) ชื่อไฟล์บน macOS มักเป็น NFD การค้นหาและเปรียบเทียบต้อง normalize ก่อน",
      "ถ้าเห็น Ã© Ã§ Å“ â€™ แปลว่าข้อความ UTF-8 ถูกอ่านเป็น Windows-1252"
    ]
  }
};

const SORT_QA = [
  "ลำดับ A–Z ขึ้นกับภาษาของ UI หรือระบบ ไม่ใช่ภาษาของชื่อไฟล์ ไฟล์ชุดเดียวกันจึงเรียงต่างกันในแต่ละ UI ต้องตรวจด้วย UI ภาษานั้นจริง",
  "ไฟล์ CJK ไม่ได้อยู่ท้ายเสมอ: UI จีนวางอักษรฮั่นก่อนละติน และ UI เกาหลีวางฮันกึลก่อนละติน",
  "ถ้าเห็นตัวพิมพ์ใหญ่ทั้งหมดมาก่อนตัวเล็ก หรือ É Ü ไปอยู่หลัง Z แปลว่าโค้ดเรียงตาม code point ไม่ได้ใช้ collation ของภาษา",
  "ตัวเลขในชื่อไฟล์: ตัวจัดการไฟล์ส่วนใหญ่ใช้ natural sort (clip2 ก่อน clip10) แต่ collation มาตรฐานไม่ใช่ ให้ดู spec ของโปรดักต์ว่าคาดหวังแบบไหน",
  "จีน: อักษรหลายเสียง (多音字) ใช้เสียงเดียวตอนเรียง เช่น 长城 ถูกจัดไว้ใต้ Z ทั้งที่อ่าน cháng ไม่ใช่บั๊กของโปรดักต์",
  "ญี่ปุ่น: คันจิเรียงตามลำดับ JIS ไม่ใช่เสียงอ่านจริงของคำ ถ้าสเปกต้องการเรียงตามเสียงอ่าน ต้องมีข้อมูล furigana",
  "ผลจริงในแต่ละแอปขึ้นกับ library ที่ใช้ (ICU, Windows, macOS) และเวอร์ชัน ใช้ตารางนี้เป็นค่าอ้างอิงตาม CLDR"
];
