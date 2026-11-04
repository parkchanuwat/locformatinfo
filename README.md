# Locale Format Reference

เว็บอ้างอิงรูปแบบมาตรฐานของวันที่ เวลา ตัวเลข สกุลเงิน ข้อความ อักขระพิเศษ และการเรียงลำดับ (sorting) สำหรับงาน Localization QA

ภาษาที่มี: German (de-DE), French (fr-FR), Japanese (ja-JP), Korean (ko-KR), Chinese Simplified (zh-CN), Chinese Traditional (zh-TW)

## วิธีใช้

เปิด `index.html` ใน browser ได้เลย ไฟล์นี้เป็นไฟล์เดียวที่มีทุกอย่างอยู่ในตัว (ฟอนต์โหลดจาก Google Fonts)

- **ตารางเทียบทุกภาษา** และ **ดูทีละภาษา** สลับได้จากแท็บด้านบน (ลิงก์ตรงได้ด้วย `#compare`, `#de`, `#fr`, `#ja`, `#ko`, `#zh-hans`, `#zh-hant`)
- คลิกค่าตัวอย่างเพื่อคัดลอกพร้อมอักขระจริง รวมถึง NBSP และ narrow NBSP
- สวิตช์ "แสดงช่องว่างพิเศษ" ใช้ไฮไลต์ช่องว่างที่มองไม่เห็น
- กด `/` เพื่อค้นหา

ถ้าจะเผยแพร่เป็นเว็บ ให้เปิด GitHub Pages (Settings › Pages › Deploy from branch › `main` / root)

## แหล่งข้อมูล

- ค่าที่มีป้าย **CLDR** สร้างจาก Unicode CLDR 48 (ICU 78) ผ่าน `Intl` ของ Node.js แล้วเก็บเป็นข้อมูลคงที่ใน `data/`
- ค่าที่มีป้าย **Style** มาจาก style guide และมาตรฐานการเขียนของแต่ละภาษา ถ้าโปรดักต์มี style guide ของตัวเอง ให้ยึดของโปรดักต์ก่อน

## โครงสร้าง

```
index.html            เว็บที่ build แล้ว (เปิดไฟล์นี้)
src/template.html     HTML / CSS / JS ของหน้าเว็บ
src/content.js        ข้อมูลที่เขียนเอง: รายการ หมายเหตุ เช็คลิสต์ QA อักขระพิเศษ
data/cldr.json        ค่าที่สร้างจาก CLDR (วันที่ เวลา ตัวเลข สกุลเงิน หน่วย ฯลฯ)
data/sort.json        ผลการเรียงลำดับตาม collation ของแต่ละภาษา
scripts/gen-cldr.js   สร้าง data/cldr.json
scripts/gen-sort.js   สร้าง data/sort.json
scripts/build.js      รวมทุกอย่างเป็น index.html
```

## แก้ไขและ build ใหม่

ต้องใช้ Node.js 20 ขึ้นไป (ที่มี full ICU)

```sh
node scripts/gen-cldr.js   # สร้างข้อมูล CLDR ใหม่ (ไม่ต้องรันถ้าไม่ได้อัปเดต Node/CLDR)
node scripts/gen-sort.js   # สร้างผลการเรียงลำดับใหม่
node scripts/build.js      # build index.html
```

ค่าที่ได้ขึ้นกับเวอร์ชัน CLDR ของ Node.js ที่ใช้ ถ้ารันด้วย Node เวอร์ชันอื่น ค่าบางตัวอาจต่างเล็กน้อย เช่น ชนิดของช่องว่าง ข้อมูลชุดปัจจุบันสร้างด้วย Node ที่มี CLDR 48
