const L={en:"en-US",de:"de-DE",fr:"fr-FR",ja:"ja-JP",ko:"ko-KR","zh-hans":"zh-CN","zh-hant":"zh-TW"};
const sortBy=(tag,arr,opt={})=>[...arr].sort(new Intl.Collator(tag,opt).compare);
const files=["Zebra.png","intro.mp4","Intro.mp4","Übersicht.prproj","École.mov","clip10.mov","clip2.mov","_backup.prproj","2026 Final.mp4","あいさつ.mp4","カット.mov","東京.mp4","北京.mp4","上海.mov","台北.mp4","音乐.wav","서울.mp4","한국어 자막.srt"];
const out={files,mixed:{},scripts:{},spec:{},natural:{}};
for(const [id,t] of Object.entries(L)){
  out.mixed[id]=sortBy(t,files,{numeric:true});
  const sc=[["_","สัญลักษณ์"],["1","ตัวเลข"],["A","ละติน"],["가","ฮันกึล"],["あ","ฮิรางานะ"],["ア","คาตาคานะ"],["中","อักษรฮั่น"]];
  out.scripts[id]=sortBy(t,sc.map(s=>s[0])).map(c=>sc.find(s=>s[0]===c)[1]);
  out.natural[id]={plain:sortBy(t,["clip10.mov","clip2.mov","clip1.mov"]),num:sortBy(t,["clip10.mov","clip2.mov","clip1.mov"],{numeric:true})};
}
const spec={
 de:["Zucker","Apfel","Äpfel","Affe","Öl","Ofen","Straße","Strasse","Adler"],
 fr:["côté","cote","côte","coté","Cote","cœur","coeur","Zoé","école"],
 ja:["学校","カード","かーど","がっこう","かっこう","かこう","カコウ","花火","apple"],
 ko:["하늘","가방","나무","까치","갈비","각도","學校","apple"],
 "zh-hans":["中国","北京","长城","重庆","爱","阿姨","八","Beijing"],
 "zh-hant":["國","一","水","十","大","中","日","月","Apple"]
};
for(const [id,arr] of Object.entries(spec)){ out.spec[id]={input:arr,sorted:sortBy(L[id],arr)}; }
out.spec.de.phonebook=sortBy("de-DE-u-co-phonebk",spec.de);
out.spec["zh-hant"].zhuyin=sortBy("zh-TW-u-co-zhuyin",spec["zh-hant"]);
out.spec["zh-hans"].stroke=sortBy("zh-CN-u-co-stroke",spec["zh-hans"]);
out.spec.ja.en=sortBy("en",spec.ja);
out.codepoint=[...files].sort();
require("fs").writeFileSync(require("path").join(__dirname,"../data/sort.json"),JSON.stringify(out,null,1));
