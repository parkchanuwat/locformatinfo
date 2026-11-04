const d=new Date(Date.UTC(2026,2,9,14,5,30));
const L=["de-DE","fr-FR","ja-JP","ko-KR","zh-CN","zh-TW"];
const out={};
for (const l of L){
 const o={timeZone:"UTC"}; const r={};
 const f=(opt,v=d)=>new Intl.DateTimeFormat(l,{...o,...opt}).format(v);
 r.dateShort=f({dateStyle:"short"}); r.dateMedium=f({dateStyle:"medium"}); r.dateLong=f({dateStyle:"long"}); r.dateFull=f({dateStyle:"full"});
 r.numericPadded=f({year:"numeric",month:"2-digit",day:"2-digit"});
 r.ym=f({year:"numeric",month:"long"}); r.md=f({month:"long",day:"numeric"}); r.mdShort=f({month:"numeric",day:"numeric"});
 r.timeShort=f({timeStyle:"short"}); r.timeMedium=f({timeStyle:"medium"});
 r.h12=f({hour:"numeric",minute:"2-digit",hour12:true}); r.h24=f({hour:"2-digit",minute:"2-digit",hourCycle:"h23"});
 r.midnight=f({hour:"2-digit",minute:"2-digit",hourCycle:"h23"},new Date(Date.UTC(2026,2,9,0,0)));
 r.dt=f({dateStyle:"medium",timeStyle:"short"}); r.dtLong=f({dateStyle:"long",timeStyle:"short"}); r.dtFull=f({dateStyle:"full",timeStyle:"short"});
 r.tz=f({timeStyle:"long"}); 
 r.tzName=new Intl.DateTimeFormat(l,{timeZone:"Asia/Tokyo",timeZoneName:"long"}).formatToParts(d).find(p=>p.type==="timeZoneName").value;
 const months=[],monthsShort=[],days=[],daysShort=[],daysNarrow=[];
 for(let m=0;m<12;m++){const x=new Date(Date.UTC(2026,m,15));months.push(f({month:"long"},x));monthsShort.push(f({month:"short"},x));}
 for(let i=0;i<7;i++){const x=new Date(Date.UTC(2026,2,9+i));days.push(f({weekday:"long"},x));daysShort.push(f({weekday:"short"},x));daysNarrow.push(f({weekday:"narrow"},x));}
 Object.assign(r,{months,monthsShort,days,daysShort,daysNarrow});
 // Format-context forms (inside a date) can differ from the standalone forms above, e.g. de "Sept." vs "Sep"
 r.monthsShortInDate=[...Array(12).keys()].map(m=>f({month:"short",day:"numeric"},new Date(Date.UTC(2026,m,9))));
 r.daysShortInDate=[...Array(7).keys()].map(i=>f({weekday:"short",month:"short",day:"numeric"},new Date(Date.UTC(2026,2,9+i))));
 const n=(v,opt={})=>new Intl.NumberFormat(l,opt).format(v);
 r.num=n(1234567.891); r.neg=n(-1234.5); r.small=n(0.5); r.int4=n(1234); r.int5=n(12345);
 r.sci=n(123456,{notation:"scientific"});
 r.compact1=n(12345678,{notation:"compact"}); r.compact2=n(150000000,{notation:"compact"}); r.compact3=n(10000,{notation:"compact"}); r.compactLong=n(12345678,{notation:"compact",compactDisplay:"long"});
 r.pct=n(0.255,{style:"percent",maximumFractionDigits:1}); r.pctNeg=n(-0.05,{style:"percent"});
 const cur={"de-DE":"EUR","fr-FR":"EUR","ja-JP":"JPY","ko-KR":"KRW","zh-CN":"CNY","zh-TW":"TWD"}[l];
 r.curCode=cur;
 r.cur=n(1234.5,{style:"currency",currency:cur}); r.curNeg=n(-1234.5,{style:"currency",currency:cur});
 r.curAcct=n(-1234.5,{style:"currency",currency:cur,currencySign:"accounting"});
 r.curIso=n(1234.5,{style:"currency",currency:cur,currencyDisplay:"code"});
 r.curName=n(1234.5,{style:"currency",currency:cur,currencyDisplay:"name"});
 r.curDigits=new Intl.NumberFormat(l,{style:"currency",currency:cur}).resolvedOptions().maximumFractionDigits;
 r.usd=n(1234.5,{style:"currency",currency:"USD"}); r.eur=n(1234.5,{style:"currency",currency:"EUR"}); r.jpy=n(1234,{style:"currency",currency:"JPY"});
 r.list=new Intl.ListFormat(l).format(["A","B","C"]); r.list2=new Intl.ListFormat(l).format(["A","B"]); r.listOr=new Intl.ListFormat(l,{type:"disjunction"}).format(["A","B","C"]);
 r.listUnit=new Intl.ListFormat(l,{type:"unit",style:"narrow"}).format(["3h","20m"]);
 const rt=new Intl.RelativeTimeFormat(l,{numeric:"auto"}),rt2=new Intl.RelativeTimeFormat(l);
 r.rel={now:rt.format(0,"second"),yesterday:rt.format(-1,"day"),tomorrow:rt.format(1,"day"),days3ago:rt2.format(-3,"day"),in2h:rt2.format(2,"hour"),min5ago:rt2.format(-5,"minute"),nextWeek:rt.format(1,"week"),lastYear:rt.format(-1,"year")};
 const u=(v,unit,disp="short")=>n(v,{style:"unit",unit,unitDisplay:disp});
 r.units={km:u(12.5,"kilometer"),kg:u(2,"kilogram"),kgLong:u(2,"kilogram","long"),c:u(21.5,"celsius"),mb:u(256,"megabyte"),gb:u(1.5,"gigabyte"),kbps:u(320,"kilobit-per-second"),sec:u(30,"second","long"),fps:n(29.97)+" fps",px:u(1920,"pixel"===0?"":"inch").replace(/.*/, "")};
 delete r.units.px;
 const dn=new Intl.DisplayNames(l,{type:"language"});
 r.selfName=dn.of(l.split("-")[0]=="zh"?l.replace("-CN","-Hans").replace("-TW","-Hant"):l.split("-")[0]);
 r.langNames={en:dn.of("en"),ja:dn.of("ja"),th:dn.of("th")};
 r.regionSelf=new Intl.DisplayNames(l,{type:"region"}).of(l.split("-")[1]);
 r.ordinal=new Intl.PluralRules(l,{type:"ordinal"}).resolvedOptions().pluralCategories;
 r.plural=new Intl.PluralRules(l).resolvedOptions().pluralCategories;
 const loc=new Intl.Locale(l); r.week=loc.getWeekInfo?loc.getWeekInfo():loc.weekInfo;
 r.hourCycle=new Intl.DateTimeFormat(l,{hour:"numeric"}).resolvedOptions().hourCycle;
 r.calendars=loc.getCalendars?loc.getCalendars():loc.calendars;
 const U=(h,m)=>new Date(Date.UTC(2026,2,9,h,m));
 r.dateRange=new Intl.DateTimeFormat(l,{timeZone:"UTC",dateStyle:"medium"}).formatRange(new Date(Date.UTC(2026,2,9)),new Date(Date.UTC(2026,2,13)));
 r.timeRange=new Intl.DateTimeFormat(l,{timeZone:"UTC",hour:"numeric",minute:"2-digit"}).formatRange(U(9,0),U(17,0));
 r.h12Mid=f({hour:"numeric",minute:"2-digit",hour12:true},U(0,0)); r.h12Noon=f({hour:"numeric",minute:"2-digit",hour12:true},U(12,0));
 r.short9=f({timeStyle:"short"},U(9,5)); r.short21=f({timeStyle:"short"},U(21,0)); r.short3=f({timeStyle:"short"},U(3,0));
 out[l]=r;
}
out.extra={
 jaEraLong:new Intl.DateTimeFormat("ja-JP-u-ca-japanese",{dateStyle:"long",timeZone:"UTC"}).format(d),
 jaEraShort:new Intl.DateTimeFormat("ja-JP-u-ca-japanese",{dateStyle:"short",timeZone:"UTC"}).format(d),
 jaEraFull:new Intl.DateTimeFormat("ja-JP-u-ca-japanese",{dateStyle:"full",timeZone:"UTC"}).format(d),
 jaEra1:new Intl.DateTimeFormat("ja-JP-u-ca-japanese",{dateStyle:"long",timeZone:"UTC"}).format(new Date(Date.UTC(2019,4,1))),
 rocLong:new Intl.DateTimeFormat("zh-TW-u-ca-roc",{dateStyle:"long",timeZone:"UTC"}).format(d),
 rocShort:new Intl.DateTimeFormat("zh-TW-u-ca-roc",{dateStyle:"short",timeZone:"UTC"}).format(d),
 cnLunar:new Intl.DateTimeFormat("zh-CN-u-ca-chinese",{dateStyle:"long",timeZone:"UTC"}).format(d),
 koDangi:new Intl.DateTimeFormat("ko-KR-u-ca-dangi",{dateStyle:"long",timeZone:"UTC"}).format(d),
 jaFullwidthNum:new Intl.NumberFormat("ja-JP-u-nu-fullwide").format(1234),
 jaKanji:new Intl.NumberFormat("ja-JP-u-nu-jpan").format(1234),
 zhHanidec:new Intl.NumberFormat("zh-CN-u-nu-hanidec").format(2026),
};
require("fs").writeFileSync(require("path").join(__dirname,"../data/cldr.json"),JSON.stringify(out,null,1));
