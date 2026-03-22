(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,399062,(e,t,a)=>{"use strict";var r=function(){for(var e=crypto.getRandomValues(new Uint8Array(16)),t="",a=0;a<16;++a)t+=e[a].toString(16);return t}(),n=RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-'+r+'-(\\d+)__@"',"g"),s=/\{\s*\[native code\]\s*\}/g,i=/function.*?\(/,o=/.*?=>.*?/,l=/[<>\/\u2028\u2029]/g,d=/<\/script[^>]*>/gi,c=["*","async"],u={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function p(e){return u[e]}t.exports=function e(t,a){a||(a={}),("number"==typeof a||"string"==typeof a)&&(a={space:a});var u,m=[],h=[],g=[],f=[],y=[],x=[],b=[],v=[],w=[],S=[];return(a.ignoreFunction&&"function"==typeof t&&(t=void 0),void 0===t)?String(t):"string"!=typeof(u=a.isJSON&&!a.space?JSON.stringify(t):JSON.stringify(t,a.isJSON?null:function(e,t){if(a.ignoreFunction&&function(e){var t=[];for(var a in e)"function"==typeof e[a]&&t.push(a);for(var r=0;r<t.length;r++)delete e[t[r]]}(t),!t&&void 0!==t&&t!==BigInt(0))return t;var n=this[e],s=typeof n;if("object"===s){if(n instanceof RegExp)return"@__R-"+r+"-"+(h.push(n)-1)+"__@";if(n instanceof Date)return"@__D-"+r+"-"+(g.push(n)-1)+"__@";if(n instanceof Map)return"@__M-"+r+"-"+(f.push(n)-1)+"__@";if(n instanceof Set)return"@__S-"+r+"-"+(y.push(n)-1)+"__@";if(n instanceof Array&&n.filter(function(){return!0}).length!==n.length)return"@__A-"+r+"-"+(x.push(n)-1)+"__@";if(n instanceof URL)return"@__L-"+r+"-"+(S.push(n)-1)+"__@"}return"function"===s?"@__F-"+r+"-"+(m.push(n)-1)+"__@":"undefined"===s?"@__U-"+r+"-"+(b.push(n)-1)+"__@":"number"!==s||isNaN(n)||isFinite(n)?"bigint"===s?"@__B-"+r+"-"+(w.push(n)-1)+"__@":t:"@__I-"+r+"-"+(v.push(n)-1)+"__@"},a.space))?String(u):(!0!==a.unsafe&&(u=u.replace(l,p)),0===m.length&&0===h.length&&0===g.length&&0===f.length&&0===y.length&&0===x.length&&0===b.length&&0===v.length&&0===w.length&&0===S.length)?u:u.replace(n,function(t,r,n,l){if(r)return t;if("D"===n){var u=String(g[l].toISOString());if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(u))throw TypeError("Invalid Date ISO string");return'new Date("'+u+'")'}if("R"===n){var p=String(h[l].flags).replace(/[^gimsuydv]/g,"");return"new RegExp("+e(h[l].source)+', "'+p+'")'}if("M"===n)return"new Map("+e(Array.from(f[l].entries()),a)+")";if("S"===n)return"new Set("+e(Array.from(y[l].values()),a)+")";if("A"===n)return"Array.prototype.slice.call("+e(Object.assign({length:x[l].length},x[l]),a)+")";if("U"===n)return"undefined";if("I"===n)return v[l];if("B"===n)return'BigInt("'+w[l]+'")';if("L"===n)return"new URL("+e(S[l].toString(),a)+")";var b=m[l],j=a,D=b.toString();if(s.test(D))throw TypeError("Serializing native function: "+b.name);if(j&&!0!==j.unsafe&&(D=D.replace(d,function(e){return e.replace(/</g,"\\u003C").replace(/\//g,"\\u002F").replace(/>/g,"\\u003E")}).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")),i.test(D)||o.test(D))return D;var C=D.indexOf("("),N=D.substr(0,C).trim().split(" ").filter(function(e){return e.length>0});return N.filter(function(e){return -1===c.indexOf(e)}).length>0?(N.indexOf("async")>-1?"async ":"")+"function"+(N.join("").indexOf("*")>-1?"*":"")+D.substr(C):D})}},965688,e=>{"use strict";var t=e.i(271645),a=e.i(399062),r=e.i(111333);let n=e=>{let t=e.replace(/[^a-zA-Z0-9_$]/g,"_");return/^[0-9]/.test(t)&&(t="_"+t),t};e.i(84987);var s=e.i(96885),i=e.i(71829);e.s(["default",0,()=>{let e=(0,t.useRef)(null),[o,l]=(0,t.useState)(!1),{locale:d}=(0,s.useLocale)();return(0,t.useEffect)(()=>{let t=document.createElement("iframe");t.src="/simple-secure-iframe.html",t.style.display="none",document.body.appendChild(t),e.current=t;let a=e=>{e.source===t.contentWindow&&"iframeReady"===e.data&&l(!0)};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a),t&&t.parentNode&&t.parentNode.removeChild(t)}},[]),{simpleSafeEval:(0,t.useCallback)((t,s,l,c,u,p)=>new Promise((m,h)=>{if(!o||!e.current)return void h(Error("IFrame not ready"));let g=function(e){let t="";if(e&&Object.keys(e).length>0)for(let a of Object.values(e)){if(!a?.UID||!a?.functionBody)continue;let e=n(a.name||a.UID),r=n(a.UID);t+=`
// Helper: ${a.UID} (inject as ${e})
function ${r}(gameData, mapGeometry, currentRound, optionalData) {
${a.functionBody}
}
const ${e} = ${r}(gameData, mapGeometry, currentRound, optionalData);
`}return t}(s),f={...l,regionNames:Object.fromEntries(Object.entries(l.regionData).map(([e,t])=>[e,t.name]))},y=r.LOCALE_LABELS[d]||r.LOCALE_LABELS.en,x={type:"execute",currentRoundNumber:c,serializedGameData:(0,a.default)(f),serializedMapGeometry:(0,a.default)(u),optionalData:p??{},language:y,isBeta:i.IS_ON_BETA_SITE,code:g+"\n"+t},b=t=>{t.source===e.current?.contentWindow&&"result"===t.data.type&&(window.removeEventListener("message",b),m(t.data.value.replace(/^\s+/,""))),"log"===t.data.type&&console.log("Worker log:",t.data.value)};window.addEventListener("message",b),e.current.contentWindow?.postMessage(x,"*")}),[o,d]),isLoadingSimpleSafeEval:!o}}],965688)},960950,813151,844643,777347,e=>{"use strict";var t=e.i(843476);e.s(["StoreIcon",0,({size:e=24,className:a,...r})=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,className:`feather feather-shopping-bag ${a??""}`.trim(),...r,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"})})],960950),e.s(["CopyIcon",0,e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:4,height:4,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,...e,children:[(0,t.jsx)("rect",{x:9,y:9,width:13,height:13,rx:2,ry:2}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})],813151);var a=e.i(266027),r=e.i(954616),n=e.i(912598),s=e.i(176009);e.i(436180);var i=e.i(98925);let o=async()=>{let e=(0,i.collection)(s.db,"templateHelpers"),t=await (0,i.getDocs)(e),a=[];return t.forEach(e=>{let t={...e.data(),UID:e.id};a.push(t)}),a},l=async e=>{let t=(0,i.doc)(s.db,`templateHelpers/${e}`),a=await (0,i.getDoc)(t);if(!a.exists())throw Error(`Template helper ${e} not found`);return{...a.data(),UID:e}},d=async(e,t)=>{let a=(0,i.doc)(s.db,`templateHelpers/${e}`),r=Object.fromEntries(Object.entries(t).filter(([,e])=>void 0!==e));return await (0,i.setDoc)(a,r,{merge:!0}),r};function c(){return(0,a.useQuery)({queryKey:["templateHelpers"],queryFn:o,staleTime:6e5,gcTime:9e5,retry:1})}function u(e){let t=(0,n.useQueryClient)(),s=["templateHelper",e],i=(0,a.useQuery)({queryKey:s,queryFn:()=>l(e),enabled:!!e,staleTime:6e5,gcTime:9e5,retry:1}),o=(0,r.useMutation)({mutationFn:e=>d(e.UID,e),onMutate:async e=>{await t.cancelQueries({queryKey:s}),await t.cancelQueries({queryKey:["templateHelpers"]});let a=t.getQueryData(s),r=t.getQueryData(["templateHelpers"]);if(t.setQueryData(s,e),r){let a=r.map(t=>t.UID===e.UID?e:t);t.setQueryData(["templateHelpers"],a)}return{previousHelper:a,previousHelpersList:r}},onError:(e,a,r)=>{r?.previousHelper&&t.setQueryData(s,r.previousHelper),r?.previousHelpersList&&t.setQueryData(["templateHelpers"],r.previousHelpersList),console.error("Error updating template helper:",e)},onSettled:()=>{t.invalidateQueries({queryKey:s}),t.invalidateQueries({queryKey:["templateHelpers"]})}});return{data:i.data,error:i.error,isLoading:i.isLoading,isError:i.isError,isSuccess:i.isSuccess,isPending:i.isPending,refetch:i.refetch,updateHelper:o.mutate,updateHelperAsync:o.mutateAsync,isUpdating:o.isPending,updateError:o.error,updateStatus:o.status}}function p(e,t){if(!e.forkedFromUID||!t)return{relation:"noFork",canPush:!1,canPull:!1};let a=e.forkedFromUpdatedAt??0,r=t.updatedAt??0,n=e.updatedAt??0;if(r===a)return n===a?{relation:"upToDate",canPush:!1,canPull:!1}:{relation:"ahead",canPush:!0,canPull:!1};if(r>a){if(n===a)return{relation:"behind",canPush:!1,canPull:!0};if(n>a)return{relation:"diverged",canPush:!0,canPull:!0}}return{relation:"unknown",canPush:!1,canPull:!1}}function m(e){let t={...e};return delete t.forkedFromUID,delete t.forkedFromUpdatedAt,t}e.s(["useTemplateHelper",()=>u,"useTemplateHelpers",()=>c],844643),e.s(["computeForkSyncStatus",()=>p,"stripForkMetadata",()=>m],777347)},88805,e=>{"use strict";var t=e.i(266027);e.i(271645);var a=e.i(176009);e.i(436180);var r=e.i(98925);e.i(111333);let n=e=>{if(!e)return!1;if(e instanceof r.Timestamp)return!0;if("object"==typeof e&&null!==e&&0===Object.keys(e).length);return!1},s=e=>{let t=new Date;t.setDate(t.getDate()-7);let n=r.Timestamp.fromDate(t),s=(0,r.doc)(a.db,"simpleGames",e);(0,r.updateDoc)(s,{lastPlayed:n}).then(()=>{console.log(`Fixed invalid lastPlayed for game ${e}`)}).catch(t=>{console.error(`Failed to fix lastPlayed for game ${e}:`,t)})},i=async e=>{let t,i,o,{authorUID:l,presetUID:d,limitCount:c=10,startAfterDoc:u,order:p="mostRecentlyPlayed",searchQuery:m}=e,h=c+1;switch(p){case"mostRecentlyPlayed":default:i="lastPlayed",o="desc";break;case"lastRoundCompletedDescending":i="lastRoundCompleted",o="desc"}if(m&&m.trim()){let e=Math.max(10*c,100);t=d?(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.where)("presetUID","==",d),(0,r.orderBy)(i,o),(0,r.limit)(e)):(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.orderBy)(i,o),(0,r.limit)(e));try{let e=await (0,r.getDocs)(t),a=[];e.forEach(e=>{a.push(e)});let i=m.toLowerCase(),o=a.filter(e=>{let t=e.data();if(!t)return!1;let a=(t.title||"").toLowerCase(),r=(t.playerCountry||"").toLowerCase();return a.includes(i)||r.includes(i)}),l=o.length>c,d=l?o.slice(0,c):o,u=[],p=null;return d.forEach(e=>{let t=e.data();if(t){if(t.UID=e.id,n(t.lastPlayed))t.lastPlayed=t.lastPlayed.toDate();else{s(e.id);let a=new Date;a.setDate(a.getDate()-7),t.lastPlayed=a}u.push(t),p=e}}),{games:u,lastDoc:p,hasMore:l}}catch(e){throw console.error("Error fetching games from Firebase for search:",e),e}}t=d?u?(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.where)("presetUID","==",d),(0,r.orderBy)(i,o),(0,r.startAfter)(u),(0,r.limit)(h)):(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.where)("presetUID","==",d),(0,r.orderBy)(i,o),(0,r.limit)(h)):u?(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.orderBy)(i,o),(0,r.startAfter)(u),(0,r.limit)(h)):(0,r.query)((0,r.collection)(a.db,"simpleGames"),(0,r.where)("authorUID","==",l),(0,r.orderBy)(i,o),(0,r.limit)(h));try{let e=await (0,r.getDocs)(t),a=[];e.forEach(e=>{a.push(e)});let i=a.length>c,o=i?a.slice(0,c):a,l=[],d=null;return o.forEach(e=>{let t=e.data();if(t){if(t.UID=e.id,n(t.lastPlayed))t.lastPlayed=t.lastPlayed.toDate();else{s(e.id);let a=new Date;a.setDate(a.getDate()-7),t.lastPlayed=a}l.push(t),d=e}}),{games:l,lastDoc:d,hasMore:i}}catch(e){throw console.error("Error fetching games from Firebase:",e),e}};function o(e){let{authorUID:a,presetUID:r,limitCount:n=10,order:s="mostRecentlyPlayed",enabled:o=!0,searchQuery:l}=e,d=(0,t.useQuery)({queryKey:["simpleGames","universal",a,r,n,s,l],queryFn:async()=>await i({authorUID:a,presetUID:r,limitCount:n,order:s,searchQuery:l}),staleTime:1/0,gcTime:6e4,retry:1,enabled:o});return{games:d.data?.games||[],hasMore:d.data?.hasMore||!1,lastDoc:d.data?.lastDoc||null,isLoading:d.isLoading,isError:d.isError,error:d.error,refetch:d.refetch}}e.s(["useSimpleGameList",()=>o])},428924,144230,239043,826764,812670,110435,342678,266726,945449,786232,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(86610),n=e.i(609867),s=e.i(367907),i=e.i(742214),o=e.i(869889),l=e.i(24878),d=e.i(926696),c=e.i(780370),u=e.i(516263),p=e.i(822126),m=e.i(640170),h=e.i(960950),g=e.i(20727),f=e.i(329536),y=e.i(76220),x=e.i(960624),b=e.i(110005),v=e.i(813151),w=e.i(538036),S=e.i(844643),j=e.i(777347),D=e.i(705766);e.i(84987);var C=e.i(23931),N=e.i(940353),T=e.i(565615),I=e.i(431478),A=e.i(965688),P=e.i(302531),E=e.i(835577),O=e.i(246399),R=e.i(88805),M=e.i(878609);function k({initialGameID:e=null,initialRoundNumber:d=1,onChange:c,className:u}){let{user:p}=(0,N.default)(),{t:h}=(0,C.useTranslations)("promptEditing","test"),{games:g,isLoading:b}=(0,R.useSimpleGameList)({authorUID:p?.uid||"",enabled:!!p,limitCount:30,order:"mostRecentlyPlayed"}),[v,w]=(0,a.useState)(e),[S,j]=(0,a.useState)(d),[D,I]=(0,a.useState)(null),[A,k]=(0,a.useState)(null),[F,B]=(0,a.useState)({year:"",month:"",day:"",label:"AD"}),[U,$]=(0,a.useState)(!1),[L,q]=(0,a.useState)(""),[_,G]=(0,a.useState)(!1),[H,z]=(0,a.useState)(""),[J,K]=(0,a.useState)(!1),[W,Y]=(0,a.useState)(""),[Q,V]=(0,a.useState)(!1),[X,Z]=(0,a.useState)(""),[ee,et]=(0,a.useState)(""),[ea,er]=(0,a.useState)(""),en=(0,a.useMemo)(()=>{let e=parseInt(ee,10);return Number.isFinite(e)?e:void 0},[ee]),es=(0,a.useMemo)(()=>{let e=parseInt(ea,10);return Number.isFinite(e)?e:void 0},[ea]),[ei,eo]=(0,a.useState)(null),[el,ed]=(0,a.useState)(null),[ec,eu]=(0,a.useState)(""),[ep,em]=(0,a.useState)(!1),eh=(0,a.useMemo)(()=>{if(F.year&&F.month&&F.day)return{year:parseInt(F.year)||1,month:parseInt(F.month)||1,day:parseInt(F.day)||1,label:F.label}},[F]),{data:eg,isLoading:ef}=(0,T.useSimpleGame)(v??void 0),ey=(0,a.useMemo)(()=>eg?.rounds?.[S]?.startDate,[eg,S]),ex=(0,a.useMemo)(()=>{if(!eg?.rounds)return;let e=Object.keys(eg.rounds).map(e=>Number(e)).filter(e=>Number.isFinite(e));return e.length?Math.max(...e):void 0},[eg]);(0,a.useEffect)(()=>{if(!eg){et(""),er("");return}et(e=>e||"1"),er(e=>e||String(S))},[eg,S]),(0,a.useEffect)(()=>{if(!eg||!ex)return;let e=e=>{if(void 0!==e)return Math.max(1,Math.min(e,ex))},t=e(en),a=e(es);void 0!==t&&void 0!==a&&t>a&&(a=t),t!==en&&et(void 0!==t?String(t):""),a!==es&&er(void 0!==a?String(a):"")},[eg,ex,en,es]);let eb=(0,a.useMemo)(()=>eg?.rounds?.[S]?.chats?Object.entries(eg.rounds[S].chats).map(([e,t])=>({id:e,participants:t.participants})):[],[eg,S]),ev=(0,a.useMemo)(()=>D&&eg?.rounds?.[S]?.chats?.[D]?eg.rounds[S].chats[D].participants:[],[D,S,eg]),ew=(0,a.useMemo)(()=>eg?.rounds?.[S-1]?.eventsBetweenStartDateAndEndDate?eg.rounds[S-1].eventsBetweenStartDateAndEndDate.map((e,t)=>({index:t,description:e.description||`Event ${t}`})):[],[eg,S]),eS=(0,a.useMemo)(()=>eg?.rounds?.[S]?.catalysts?Object.entries(eg.rounds[S].catalysts).map(([e,t])=>({id:e,description:t.settingDescription||`Catalyst ${e}`})):[],[eg,S]),ej=(0,a.useMemo)(()=>{if(null===ei||!eg?.rounds?.[S-1]?.eventsBetweenStartDateAndEndDate)return;let e=parseInt(ei,10);return eg.rounds[S-1]?.eventsBetweenStartDateAndEndDate?.[e]},[ei,eg,S]);(0,a.useEffect)(()=>{j(1),I(null),k(null)},[v]),(0,a.useEffect)(()=>{I(null),k(null),eo(null),ed(null)},[S]),(0,a.useEffect)(()=>{k(null)},[D]),(0,a.useEffect)(()=>{let e=eg?.rounds?.[S]?.startDate;if(e){let t=(0,M.getIncrementAmountInDays)(e,"months",1),a=(0,M.getIncrementedDate)(e,t);B({year:a.year.toString(),month:a.month.toString(),day:a.day.toString(),label:a.label})}else B({year:"",month:"",day:"",label:"AD"})},[eg,S]),(0,a.useEffect)(()=>{c?.({gameID:v,roundNumber:S,optionalData:{chatID:D??void 0,respondingCountryName:A??void 0,jumpForwardDate:eh,rawResponseToGrade:L||void 0,validatedResponseToGrade:H||void 0,graderInstructions:W||void 0,rawEventString:X||void 0,consolidationStartRound:en,consolidationEndRound:es,catalystEvent:ej,catalystID:el??void 0,catalystUserResponse:ec||void 0}})},[v,S,D,A,eh,L,H,W,X,en,es,ej,el,ec,c]);let eD=e=>e.title||`Game ${e.UID}`;return(0,t.jsxs)("div",{className:`bg-default-50 rounded-lg p-4 ${u??""}`,children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-sm font-semibold",children:h?.testSettings("Test Settings")}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(f.Select,{label:h?.game("Game")??"Game",placeholder:b?"Loading games...":"Select a game",selectedKeys:v?[v]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0?w(Array.from(e)[0]):w(null)},selectionMode:"single",size:"sm",children:g.map(e=>(0,t.jsx)(y.SelectItem,{textValue:eD(e),children:eD(e)},e.UID))}),(0,t.jsx)(f.Select,{label:h?.round("Round")??"Round",placeholder:h?.round("Round")??"Round",selectedKeys:eg&&eg.rounds?.[S]?[S.toString()]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0&&j(Number(Array.from(e)[0]))},selectionMode:"single",size:"sm",isDisabled:!v||ef,children:eg?Object.keys(eg.rounds).map(e=>(0,t.jsx)(y.SelectItem,{children:e},e)):null}),(0,t.jsx)(f.Select,{label:h?.chatID("Chat ID")??"Chat ID",placeholder:"Select a chat",selectedKeys:D?[D]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0?I(Array.from(e)[0]):I(null)},selectionMode:"single",size:"sm",isDisabled:!v||ef,children:eb.map(e=>(0,t.jsx)(y.SelectItem,{textValue:`Chat ${e.id} with ${e.participants.join(", ")}`,children:(0,t.jsxs)("div",{className:"text-xs",children:["Chat ",e.id,(0,t.jsxs)("div",{className:"text-gray-500",children:["(",e.participants.join(", "),")"]})]})},e.id))}),(0,t.jsx)(f.Select,{label:h?.speakingCountry("Speaking Country")??"Speaking Country",placeholder:"Select a country",selectedKeys:A?[A]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0?k(Array.from(e)[0]):k(null)},selectionMode:"single",isDisabled:!v||!D||ef,size:"sm",children:ev.map(e=>(0,t.jsx)(y.SelectItem,{textValue:e,children:e},e))}),(0,t.jsxs)(P.Popover,{placement:"bottom-start",children:[(0,t.jsx)(O.PopoverTrigger,{children:(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",isDisabled:!v||!eg?.rounds?.[S]||ef,children:eh?`Jump to ${(0,M.getDateAsString)(eh,"short",!0)}`:h?.setJumpForwardDate("Set Jump Forward Date")})}),(0,t.jsx)(E.PopoverContent,{className:"bg-content1 w-64 p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,t.jsx)(m.Input,{label:h?.year("Year")??"Year",value:F.year,onChange:e=>B(t=>({...t,year:e.target.value})),placeholder:"e.g., 1066",variant:"bordered",type:"number",size:"sm"}),(0,t.jsx)(m.Input,{label:h?.month("Month")??"Month",value:F.month,onChange:e=>B(t=>({...t,month:e.target.value})),placeholder:"1-12",variant:"bordered",type:"number",min:"1",max:"12",size:"sm"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,t.jsx)(m.Input,{label:h?.day("Day")??"Day",value:F.day,onChange:e=>B(t=>({...t,day:e.target.value})),placeholder:"1-31",variant:"bordered",type:"number",min:"1",max:"31",size:"sm"}),(0,t.jsxs)(f.Select,{label:h?.era("Era")??"Era",selectedKeys:[F.label],onSelectionChange:e=>{let t=Array.from(e)[0];B(e=>({...e,label:t}))},variant:"bordered",size:"sm",children:[(0,t.jsx)(y.SelectItem,{children:"AD"},"AD"),(0,t.jsx)(y.SelectItem,{children:"BC"},"BC")]})]}),(ey||eh)&&(0,t.jsxs)("div",{className:"bg-default-100 text-default-600 mt-2 space-y-1 rounded-lg p-2 text-xs",children:[ey&&(0,t.jsxs)("div",{children:[h?.start("Start")??"Start",":"," ",(0,t.jsx)("span",{className:"text-foreground font-semibold",children:(0,M.getDateAsString)(ey,"long",!0)})]}),eh&&(0,t.jsxs)("div",{children:[h?.jump("Jump")??"Jump",":"," ",(0,t.jsx)("span",{className:"text-foreground font-semibold",children:(0,M.getDateAsString)(eh,"long",!0)})]})]}),eh&&(0,t.jsx)(r.Button,{size:"sm",variant:"light",onPress:()=>B({year:"",month:"",day:"",label:"AD"}),className:"mt-1 self-end",children:h?.clear("Clear")})]})})]}),(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",onPress:()=>$(!0),children:L?"Edit Response to Grade":h?.setResponseToGrade("Set Response to Grade")}),(0,t.jsx)(n.Modal,{isOpen:U,onOpenChange:$,size:"3xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:"Edit Response to Grade"}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)(x.Textarea,{label:h?.responseToGrade("Response to Grade")??"Response to Grade",placeholder:"Enter the response text that should be graded...",value:L,onChange:e=>q(e.target.value),minRows:10,maxRows:20,className:"w-full"})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>$(!1),children:h?.cancelAction("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>$(!1),children:h?.saveAction("Save")})]})]})},`responseToGradeModal-${v}-${S}`),(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",onPress:()=>G(!0),children:H?"Edit Validated Response to Grade":h?.setValidatedResponseToGrade("Set Validated Response to Grade")}),(0,t.jsx)(n.Modal,{isOpen:_,onOpenChange:G,size:"3xl",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:"Edit Validated Response to Grade"}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)(x.Textarea,{label:h?.validatedResponseToGrade("Validated Response to Grade")??"Validated Response to Grade",placeholder:"Enter the validated response JSON that should be graded (post-engine validation)...",value:H,onChange:e=>z(e.target.value),minRows:10,maxRows:20,className:"w-full"})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>G(!1),children:h?.cancelAction("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>G(!1),children:h?.saveAction("Save")})]})]})},`validatedResponseToGradeModal-${v}-${S}`),(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",onPress:()=>K(!0),children:W?"Edit Grader Instructions":h?.setGraderInstructions("Set Grader Instructions")}),(0,t.jsx)(n.Modal,{isOpen:J,onOpenChange:K,size:"3xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:"Edit Grader Instructions"}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)(x.Textarea,{label:h?.graderInstructions("Grader Instructions")??"Grader Instructions",placeholder:"Enter natural language instructions for the grader AI...",value:W,onChange:e=>Y(e.target.value),minRows:10,maxRows:20,className:"w-full"})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>K(!1),children:h?.cancelAction("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>K(!1),children:h?.saveAction("Save")})]})]})},"graderInstructionsModal"),(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",onPress:()=>V(!0),children:X?"Edit Raw Event String":h?.setRawEventString("Set Raw Event String")}),(0,t.jsx)(n.Modal,{isOpen:Q,onOpenChange:V,size:"3xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:"Edit Raw Event String"}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)(x.Textarea,{label:h?.rawEventString("Raw Event String")??"Raw Event String",placeholder:"Enter the stringified raw event object (used when cleanup.applyTo === 'eachEvent')...",value:X,onChange:e=>Z(e.target.value),minRows:10,maxRows:20,className:"w-full"})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>V(!1),children:h?.cancelAction("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>V(!1),children:h?.saveAction("Save")})]})]})},`rawEventStringModal-${v}-${S}`),(0,t.jsxs)(P.Popover,{placement:"bottom-start",children:[(0,t.jsx)(O.PopoverTrigger,{children:(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",isDisabled:!v||ef,children:en||es?`Consolidate Rounds ${en??"…"}–${es??"…"}`:h?.setConsolidationRange("Set Consolidation Range")})}),(0,t.jsx)(E.PopoverContent,{className:"bg-content1 w-72 p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,t.jsx)(m.Input,{label:"Start Round",value:ee,onChange:e=>et(e.target.value),placeholder:"e.g., 1",variant:"bordered",type:"number",min:"1",max:ex?String(ex):void 0,size:"sm"}),(0,t.jsx)(m.Input,{label:"End Round",value:ea,onChange:e=>er(e.target.value),placeholder:String(S),variant:"bordered",type:"number",min:"1",max:ex?String(ex):void 0,size:"sm"})]}),(en||es)&&(0,t.jsxs)("div",{className:"text-default-600 mt-1 text-xs",children:["Using rounds ",en??"…"," to ",es??"…"]}),(en||es)&&(0,t.jsx)(r.Button,{size:"sm",variant:"light",className:"mt-1 self-end",onPress:()=>{et(""),er("")},children:h?.clear("Clear")})]})})]}),(0,t.jsx)(f.Select,{label:h?.catalystEvent("Catalyst Event")??"Catalyst Event",placeholder:"Select an event for catalyst",selectedKeys:ei?[ei]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0?eo(Array.from(e)[0]):eo(null)},selectionMode:"single",size:"sm",isDisabled:!v||ef||0===ew.length,children:ew.map(e=>(0,t.jsx)(y.SelectItem,{textValue:e.description,children:(0,t.jsxs)("div",{className:"text-xs",children:["Event ",e.index,(0,t.jsx)("div",{className:"line-clamp-2 text-gray-500",children:e.description})]})},e.index.toString()))}),(0,t.jsx)(f.Select,{label:h?.catalystID("Catalyst ID")??"Catalyst ID",placeholder:"Select a catalyst",selectedKeys:el?[el]:[],onSelectionChange:e=>{e instanceof Set&&e.size>0?ed(Array.from(e)[0]):ed(null)},selectionMode:"single",size:"sm",isDisabled:!v||ef||0===eS.length,children:eS.map(e=>(0,t.jsx)(y.SelectItem,{textValue:e.id,children:(0,t.jsxs)("div",{className:"text-xs",children:[e.id,(0,t.jsx)("div",{className:"line-clamp-2 text-gray-500",children:e.description})]})},e.id))}),(0,t.jsx)(r.Button,{variant:"flat",size:"lg",className:"justify-start",onPress:()=>em(!0),children:ec?"Edit Catalyst User Response":h?.setCatalystUserResponse("Set Catalyst User Response")}),(0,t.jsx)(n.Modal,{isOpen:ep,onOpenChange:em,size:"3xl",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:"Edit Catalyst User Response"}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)(x.Textarea,{label:h?.catalystUserResponse("Catalyst User Response")??"Catalyst User Response",placeholder:"Enter the user's response to the catalyst scenario...",value:ec,onChange:e=>eu(e.target.value),minRows:10,maxRows:20,className:"w-full"})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>em(!1),children:h?.cancelAction("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>em(!1),children:h?.saveAction("Save")})]})]})},`catalystUserResponseModal-${v}-${S}`)]})]})}var F=e.i(948919),B=e.i(323216),U=e.i(912598),$=e.i(635380),L=e.i(723264);let q=`
/* ================================================================
 * Shared primitive & utility types
 * ================================================================ */

/** Calendar date structure used throughout the game. */
export interface DateStructure {
  year: number;
  month: number;
  day: number;
  label: "AD" | "BC";
}

/** Visual label or highlight that may be attached to an event description. */
export interface EventTag {
  /** Short text that appears beside the event. */
  text: string;
  /** Optional CSS-compatible color for the tag. */
  color?: string;
}

/* --- Map-feature geometry primitives --- */

export type PointShapes =
  | "circle"
  | "star"
  | "diamond"
  | "square"
  | "triangle"
  | "cross"
  | "x"
  | "rectangle"
  | "pentagon"
  | "hexagon"
  | "octagon"
  | "flag"
  | "full-flag";

/**
 * Common properties shared by all map features.
 */
export interface BaseFeature {
  /** Discriminant for the feature subtype. Currently "centroid" or "coordinate". */
  type: "centroid" | "coordinate";
  /** Unique name for the feature. */
  name: string;
  /** Scale multiplier for the rendered symbol (default = 1). */
  scale: number;
  /** Optional label scale used for label visibility calculations (falls back to scale when omitted). */
  lbScale?: number;
  /** Placement of the label relative to the symbol. */
  labelPlacement: "above" | "below" | "left" | "right" | "center" | "noLabel";
  /** Arbitrary tags that describe the feature, with shortcuts for common ones. */
  tags: (string | "battalion" | "city")[];
}

/** Map feature tied to the centroid of a named region (commonly used for units). */
export interface CentroidFeature extends BaseFeature {
  type: "centroid";
  /** Symbol rendered at the centroid. */
  displaySymbol: PointShapes;
  /** Region that the centroid belongs to. */
  location: { regionID: string };
  /** Optional CSS-compatible color for the symbol. Falls back to polity color if color is omitted. */
  color?: string;
  /** 
   * Owner polity of this feature. Three possible values:
   * - string: the exact name of the country/polity that owns this feature
   * - null: explicitly unowned (no owner)
   * - undefined: owned by whatever polity owns the region this feature is in
   */
  ownerName?: string | null;
  /** Descriptive text, default empty string. */
  description: string;
}

/** Map feature positioned by explicit geographic coordinates (commonly used for cities). */
export interface CoordinateFeature extends BaseFeature {
  type: "coordinate";
  /** Symbol rendered at the coordinates. */
  displaySymbol: PointShapes;
  /** Explicit WGS-84 longitude/latitude coordinates. */
  location: { regionID: string | null; longitude: number; latitude: number };
  /** Optional CSS-compatible color for the symbol. If omitted, the symbol will be the color of the owner polity. */
  color?: string;
  /** 
   * Owner polity of this feature. Three possible values:
   * - string: the exact name of the country/polity that owns this feature
   * - null: explicitly unowned (no owner)
   * - undefined: owned by whatever polity owns the region this feature is in
   */
  ownerName?: string | null;
  /** Descriptive text - should usually include the containing region name. */
  description: string;
}

/** Union of all allowable map features. */
export type SimpleMapFeature = CentroidFeature | CoordinateFeature;

/* --- Map-change primitives --- */

export interface CreatePolity {
  type: "createPolity";
  polity: {
    name: string;
    additionalNames: string[];
    color: string;
    /** Optional tags for the polity */
    tags?: string[];
    /** Optional flag discovery settings */
    flagQuery?: string;
    /** Optional resolved flag to use for the polity */
    foundFlag?: SimpleCountryFlag;
  };
}

export interface TransferRegionOwnership {
  type: "transferRegionOwnership";
  transfers: Array<{
    regionIDs: string[];
    toPolity: string | null; // null → regions become unowned
    col?: string; // Snapshot of the color of the polity gaining the regions, filled in during validation
  }>;
  regionFromMap?: {
    [regionID: string]: {
      from: string;
      color: string;
    }; // Snapshot of the polity from which the region was transferred at time of transfer
  } // Filled in after the transfer is applied
}

export interface DissolvePolity {
  type: "dissolvePolity";
  polityName: string;
  previousPolity?: SimpleCountry; // Snapshot of the polity, before the dissolution. Filled in during validation
}

export interface UpdatePolity {
  type: "updatePolity";
  name: string;
  newName?: string;
  color?: string;
  setAdditionalNamesTo?: string[];
  setTagsTo?: string[]; // Optional set of tags to use for the polity, replacing old
  /** Optional new flag query to update the polity's flag */
  newFlagQuery?: string;
  /** Optional resolved new flag for the polity */
  newFoundFlag?: SimpleCountryFlag;
  /** Snapshot of the previous polity state (filled in by engine) */
  previousPolity?: SimpleCountry;
}

export interface CreateMapFeature {
  type: "createMapFeature";
  id?: string; // ID of the map feature created, filled in during validation
  col?: string; // Snapshot of the color of the map feature created at the time of creation, filled in during validation
  feature: SimpleMapFeature;
}

export interface UpdateMapFeature {
  type: "updateMapFeature";
  name: string; // existing feature to update, ID of the map feature
  col?: string; // Snapshot of the color of the map feature at the time of the update, filled in during validation
  properties: Partial<SimpleMapFeature>;
  previousFeature?: SimpleMapFeature; // Snapshot of the map feature, before the update. Filled in during validation
}

export interface RemoveMapFeature {
  type: "removeMapFeature";
  name: string; // feature to delete, ID of the map feature
  col?: string; // Snapshot of the color of the map feature at the time of the removal, filled in during validation
  removedFeature?: SimpleMapFeature; // Snapshot of the map feature, before the removal. Filled in during validation
}

/** All possible map changes in an event. */
export type MapChange =
  | CreatePolity
  | TransferRegionOwnership
  | DissolvePolity
  | UpdatePolity
  | CreateMapFeature
  | UpdateMapFeature
  | RemoveMapFeature;

/* ================================================================
 * Country & Chat structures
 * ================================================================ */

export interface SimpleCountry {
  color: string;
  regionsOwned: string[];
  additionalNames: string[];
  tags: string[];
  /** Optional country flag metadata */
  flag?: SimpleCountryFlag;
}

/** Rich metadata for a country's flag representation */
export interface SimpleCountryFlag {
  id: string;
  imageURL: string;
  compressedImageURL: string;
  iconImageURL: string;
  width: number;
  height: number;
  isSensitive: boolean;
  transitionHint?: {
    toFlagID: string;
    note: string;
    onDate: DateStructure;
  };
  icon: {
    cx: number;
    cy: number;
    zoom: number;
  };
}

export interface SimpleChat {
  /** Optional title for the chat */
  title?: string;
  participants: string[];
  /** If this chat continues a previous thread, store its ID */
  continuedFromChatID?: string;
  messages: {
    [messageIndex: string]: {
      senderName: string;
      message: string;
      /** Optional emoji reactions metadata */
      reactions?: {
        [reactionID: string]: {
          reaction: string; //the emoji reaction
          reactorName: string; //the name of the country that reacted
        };
      };
    };
  };
}

/* ================================================================
 * AI suggestion structures
 * ================================================================ */

export interface SimplePotentialResponse {
  title: string;
  actionPlan: string;
}

export interface SimpleTopicOfConcern {
  title: string;
  description: string;
  potentialResponses: SimplePotentialResponse[];
}

export interface SimpleActionsSuggestions {
  topicsOfConcern: SimpleTopicOfConcern[];
}

/* ================================================================
 * Core Event
 * ================================================================ */

export interface SimpleEvent {
  /** Date string in YYYY-MM-DD format. (optionally: append " AD" or " BC" to indicate the era) like "1800-01-01" or "200-01-01 BC" */
  date: string;

  /** Country initiating the event (optional). For now this field is pretty much totally ignored and so should not be used unless the player specifically requests for a very good reason. */
  sourceCountry?: string;

  /** Optional title for the event. */
  title?: string;

  /** Narrative text describing what happens. */
  description: string;

  /** Structured visual changes that accompany the narrative. */
  mapChanges?: MapChange[];

  /** False for jump forward events, true only for events in the actionsByPlayer array that were suggested by AI */
  wasSuggestedByAI?: boolean;

  /** Informational tags that can be rendered in the UI. */
  tags?: EventTag[];

  /** Optional chat configuration for the very last event in auto jump forward (not regular jump forward) */
  chat?: {
    /** Optional chat title (present for auto jump forward) */
    title?: string;
    /** Array of country names that will participate in the chat */
    participants: string[];
    /** Name of the country that sends the first message */
    initialMessageSender: string;
    /** The initial message content */
    initialMessage: string;
  };
}

/* ================================================================
 * Round
 * ================================================================ */

export interface SimpleRound {
  startDate: DateStructure;
  completed: boolean;
  authorUID: string;
  catalysts: { [catalystID: string]: SimpleCatalyst } //catalysts for this round, stored by id
  chats: { [chatID: string]: SimpleChat };
  actionsByPlayer: SimpleEvent[];
  eventsBetweenStartDateAndEndDate: SimpleEvent[];
  countryDescriptions: { [countryName: string]: SimpleCountry };
  mapFeatures: { [featureID: string]: SimpleMapFeature };
  aiSuggestions?: SimpleActionsSuggestions;
  /** Copied from parent document for security rules. If not present, the round is not published. */
  isPublished?: boolean;
}

/** Time representation for catalyst events, with optional sub-day precision. */
export interface CatalystTime {
    date: DateStructure;
    exactTime?: {
        hour: number; // 0-23
        minute?: number; // 0-59, only include if timing is more specific than just the hour
        second?: number; // 0-59, only include if timing is down to the second
        millisecond?: number; // 0-999, only include for extremely precise timing
    };
}

// Catalysts are a form of jump forward - they create the next round via interactive narrative events.
export interface SimpleCatalyst {
    settingDescription: string; // The description/setting/rules of the catalyst
    completion: number; // The completion percentage of the catalyst (0-100)
    catalystTime: CatalystTime; // The current time of the catalyst (advances with each continuation)
    continuations: { // The catalyst is structured as a rotating series of passages and user responses
        [continuationIndex: string]: { // Stored like "0", "1", etc, the latest being the current (or last)
            passage: string; // The narrative continuation
            mapChanges: MapChange[]; // The validated map changes that occur in this continuation
            newTime?: CatalystTime; // The time at the end of this continuation (optional for backwards compat)
            suggestedOptions: { // The suggested options for the player to choose from
                option: string; // The suggested option or action text
                tags: { // Optional tags categorizing this option
                    tag: string; // Tag text (e.g., 'diplomatic', 'military', 'economic')
                    color: string; // Color for the tag (e.g., 'blue', 'red', 'green', 'yellow', 'purple', 'orange')
                }[];
            }[];
            response?: string; // Filled in when the player responds to this catalyst continuation
        }
    }
    summary?: {
        summaryString: string; // The summary string of the catalyst
        mapChanges: MapChange[]; // The validated map changes that occur in the summary
    }
}

/* ================================================================
 * Prompt system (light version)
 * ================================================================ */

export type ModelIDs = string; // Simplified - actual union not required for helper functions

export interface PromptStage {
  enabled: boolean;
  template: string;
  aiModel: ModelIDs;
  maxThinkingTokens: number;
  maxOutputTokens: number;
  schema: string;
  cleanup?: {
    function: string;
    applyTo: "entireOutput" | "eachEvent";
  };
  /**
   * When true, this stage runs once per event from the previous stage instead of
   * once for the entire batch. Only applicable to secondStage/thirdStage in
   * jumpForward and autoJumpForward prompts.
   * 
   * In per-event mode:
   * - Stage 2 starts processing each event as soon as it streams from Stage 1
   * - Each per-event AI call receives the raw event in optionalData.rawEventString
   * - The cleanup function (if any) combines AI output with the raw event
   * - Events stream to UI as each per-event AI call completes
   */
  perEventProcessing?: boolean;
}

export interface SimplePromptConfig {
  templateHelpers: Record<string, unknown>;
  promptKey: keyof SimpleGamePrompts;
  promptSource: string | null;
  firstStage: PromptStage;
  secondStage?: PromptStage;
  thirdStage?: PromptStage;
}

export interface SimpleGamePrompts {
  chatWithUser: SimplePromptConfig;
  chatWithAdvisor: SimplePromptConfig;
  jumpForward: SimplePromptConfig;
  autoJumpForward: SimplePromptConfig;
  actions: SimplePromptConfig;
  nextSpeaker: SimplePromptConfig;
  descriptionToAction: SimplePromptConfig;
  /** Summarizes prior rounds into a consolidated historical context string */
  eventConsolidator: SimplePromptConfig;
  catalystCreation: SimplePromptConfig;
  catalystRunner: SimplePromptConfig;
  catalystSummarizer: SimplePromptConfig;
  gameMaster: SimplePromptConfig;
}

/* ================================================================
 * Core Game
 * ================================================================ */

export interface SimpleGame {
  /** Human-readable game title */
  title: string;
  UID: string;
  playerCountry: string; // will match a country name in the game
  lastRoundCompleted: number;
  lastPlayed: Date; // stored in Firestore as a timestamp, converted to a JS Date at the hook level
  presetUID: string;
  authorUID: string;
  dataVersion: number;
  mapGeometryDocumentID: string;
  startingTimelineText: string;
  rulesText: string; // natural language about how the AI should simulate the history
  /** Mapping from regionID to region data, which has the region's name and tags */
  regionData: { [regionID: string]: { name: string; tags: string[] } };
  /** Optional basemap configuration */
  baseMap?: { layers: SimpleBaseMapLayer[] };
  /** All rounds in the game indexed by round number (as string) */
  rounds: { [roundNumber: number]: SimpleRound };
  prompts: SimpleGamePrompts;
  advisor: { [messageID: string]: { message: string; sender: "advisor" | "user" } };
  /** Master AI chat - stores messages indexed by messageID with map manipulation capabilities */
  masterAI?: { [messageID: string]: MasterAIMessage };
  difficulty: "very easy" | "easy" | "normal" | "hard" | "impossible";
  /** Consolidated summaries with random consolidation IDs. This consolidation is a summary of events between the start and end specified, inclusive. */
  eventConsolidations: {
    [consolidationID: string]: {
      consolidationString: string;
      consolidationStartRound: number; // inclusive
      consolidationEndRound: number;   // inclusive
    };
  };
  /** Settings for when to run consolidation */
  consolidationSettings?: {
    startsOnRound: number;
    consolidationChunkSize: number;
  };
}

/** Base map layer configuration */
export interface SimpleBaseMapLayer {
  lightID: string;
  darkID: string;
  title: string; // FUTURE FEATURE, FOR NOW FILL WITH 'TITLE'
  enabled: boolean; // whether this layer is shown at all
  zIndex: number;
  maxZoom: number;
  minZoom: number;
}

/* ================================================================
 * Master AI Types
 * ================================================================ */

/**
 * A single message in the Master AI chat.
 * Messages are stored at the game level (not round level) and include
 * round context so they can properly display historical state.
 */
export interface MasterAIMessage {
  content: string;
  sender: "user" | "master_ai";
  createdAt: number; // timestamp for ordering
  /** Round context when this message was sent */
  round: {
    roundNumber: number;
    startDate: DateStructure;
  };
  mapChanges?: MapChange[]; // optional: executed map changes for reference/undo
  executed?: boolean; // whether the changes were applied
}
`,_=`
interface MapGeometry {
  name: string;
  community?: boolean;
  tags?: string[];
  typeDefinitions?: {
    [typeName: string]: SimpleRegionTypeDefinitionSettings;
  };
  geometry: { [regionID: string]: SimpleRegionDescription };
}

interface SimpleRegionDescription {
  geometry: string;
  centroid: string;
  adjacencies: string[]; // Note that the adjacencies are region IDs, not names.
  type: "Coastal" | "Land" | "Ocean" | "Strait";
}

interface SimpleRegionTypeDefinitionSettings {
  // Config for opacity & color
  opacity: number; // the opacity of the region when it is owned by a polity
  unownedOpacity: number; // the opacity of the region when it is not owned by a polity
  overrideColor?: string;
  overrideStrokeOpacity?: number; // override the stroke opacity of the region
  strokeWidth: number; // the width of the stroke of the region
  strokeColor: string; // the color of the stroke of the region

  zoomSettings?: {
    disappearAtResolution: number; 
    fullAtResolution: number;
    enabled: boolean;
  }

  // Config for interactability
  interactable: boolean; // whether the region can be interacted with e.g clicked on and searched for.
  showToDefaultPrompt: boolean; // IMPORTANT: when this is false, unless the user specifically requests for it, the region should not be included in the prompt

  // Config for pathfinding
  passable: boolean;
  pathfindingSpeedMultiplier: number;

  // Config for labels
  includedInLabelCalculation: boolean;

  // Config for z-index
  zIndex: number;
}
`,G=`
    interface OptionalData {
    chatID?: string;
    respondingCountryName?: string;
    jumpForwardDate?: { year: number; month: number; day: number; label: "AD" | "BC"; };
    /**
     * Stringified raw output from the previous AI stage (entire response JSON - may contain many events)
     * Only available in multi stage prompts
     */
    previousStageRawOutput?: string;
    /**
     * Stringified raw output from the AI stage before cleanup. Not one specific event
     * Can be used in all cleanup functions except jump forward / auto jump forward. All graders, including jump forward graders can use this.
     */
    entireAIResponseBeforeCleanup?: string;
    /**
     * Stringified raw event object from Stage 1. Available when:
     * - cleanup.applyTo === "eachEvent" (for per-event cleanup functions)
     * - perEventProcessing === true on the current stage (the raw Stage 1 event being refined)
     * Only available in jump forward and auto jump forward prompts and cleanup functions.
     */
    rawEventString?: string;
    /**
     * Raw user input describing an action that should be transformed.
     * Only available in the description to action prompt.
     */
    actionInput?: string;
    /**
     * Generic alias for the previous stage's round data
     * Use this when needing to know how the map *would* change if the current stage outputs the exact same map changes as the previous stage.
     * Only available in the jump forward and auto jump forward prompts.
     */
    previousStageResultRoundData?: SimpleRound;
    /**
     * Natural language instructions for the grader AI.
     * Only available in eval grader prompts, never any game prompts.
     */
    graderInstructions?: string;
    /**
     * Stringified raw response object to grade. 
     * Only available in eval grader prompts, never any game prompts.
     */
    rawResponseToGrade?: string;
    /**
     * Stringified validated response to grade. Only applies to evals, never any game stage
     * This is the response AFTER the game engine has validated it (country names -> ids, dropping invalid map changes, auto tagging, etc)
     */
    validatedResponseToGrade?: string;
    /** Start of the consolidation range (inclusive) for event summarization */
    consolidationStartRound?: number;
    /** End of the consolidation range (inclusive) for event summarization */
    consolidationEndRound?: number;
    /**
     * @deprecated catalystEvent is no longer used - catalysts are now created before jump forward.
     * This field was previously used to pass a specific event as the basis for the catalyst,
     * but catalysts are now independent narrative events that don't require a triggering event.
     */
    catalystEvent?: SimpleEvent;
    /**
     * The unique ID of the catalyst being run or summarized.
     * This allows the prompt to reference the specific catalyst's state, including
     * its setting description, previous continuations, and player responses.
     * Only available in the catalystRunner and catalystSummarizer prompts.
     */
    catalystID?: string;
    /**
     * The user's response to the catalyst. Available for ease of access, it is also accessible from the latest catalyst continuation
     * Only available in the catalystRunner prompt.
     */
    catalystUserResponse?: string;

    // Per-event AI stage processing context (only available when perEventProcessing is true)
    /**
     * Index of the current event being processed (0-based).
     * Only available when perEventProcessing is true on the current stage.
     */
    currentEventIndex?: number;
    /**
     * Total number of events from the previous stage.
     * Only available when perEventProcessing is true on the current stage.
     */
    totalEventCount?: number;
    /**
     * Events that have already been processed and finalized by the per-event stage.
     * Only available when perEventProcessing is true on the current stage.
     */
    previouslyProcessedEvents?: SimpleEvent[];
    /**
     * The raw AI response for this specific event before cleanup.
     * Only available when perEventProcessing is true and the per-event AI call has completed.
     */
    perEventAIResponse?: string;
}
`,H=`
/** The user's language as a string (e.g., "English", "Fran\xe7ais"). */
declare const language: string;

/** Whether the code is running on the beta site (beta.paxhistoria.co) vs production (paxhistoria.co). */
declare const isBeta: boolean;
`,z=`
interface GradesCleanupFunctionResponse {
    /** Overall score between 0 and 1 for the entire response. Does not have to be the average of individual grades. It is up to your cleanup function to decide how to weight the grades. */
    overallScore: number;
    /** Optional ~ 1 sentence summary of what went well with the response */
    whatWentWellSummary?: string;
    /** Optional ~ 1 sentence summary of what went wrong with the response */
    whatWentWrongSummary?: string;
    /** Array of individual grade assessments */
    grades: Array<{
        /** Title of the grading criterion */
        questionTitle: string;
        /** Score between 0 and 1 for this criterion */
        grade: number;
        /** Explanation of the grade given */
        reasonForGrade: string;
        /** Optional sub-grades for individual events (only for event-based grading) */
        eventSubGrades?: Array<{
            /** The specific event being graded */
            eventGraded: SimpleEvent;
            /** Score between 0 and 1 for this event */
            grade: number;
            /** Explanation of the grade for this specific event */
            reasonForGrade: string;
        }>;
    }>;
}
`,J={name:"helperObject",strict:!0,schema:{type:"object",properties:{reasoning:{type:"string",description:"Why the change was made / why the request is impossible"},name:{type:["string","null"],description:"New helper name in SCREAMING_SNAKE_CASE (ideally ≤50 chars) or null if no change is recommended."},description:{type:["string","null"],description:"New human-readable description or null if no change is recommended."},functionBody:{type:["string","null"],description:"JS code for the helper or null if no change is recommended."}},required:["reasoning","name","description","functionBody"],additionalProperties:!1}};function K({helper:e,onFieldChange:n}){let{t:s}=(0,C.useTranslations)("promptEditing","edit"),[i,o]=(0,a.useState)(""),[l,d]=(0,a.useState)([]),[c,m]=(0,a.useState)(!1),[h,f]=(0,a.useState)(null),y=(0,U.useQueryClient)(),b=(0,a.useRef)(null),v=async()=>{let t,a=i.trim();if(!a||c)return;let r=[...l];if(0===r.length)t=`
--------------------------------
Your overall goals
--------------------------------
You are updating a *template helper* for the Pax Historia strategy game.

--------------------------------
Explaining the input data
--------------------------------
The helper function you write will be injected as:
function helper(gameData: SimpleGame, mapGeometry: MapGeometry, currentRound: number, optionalData: OptionalData, language: string, isBeta: boolean) {/* body */}
Sample gameData object:
${JSON.stringify(L.default,null,2)}

Game data type definition:
${q}

MapGeometry type definition:
${_}

OptionalData type definition:
${G}

Additional top-level variables:
${H}

--------------------------------
Map Feature Tagging
--------------------------------
An important note in helping create helpers is that it is standard (but not always the case) that map features are given tags based on their designation. Capitals are generally given the tag 'capital'. Big cities are given the tag 'big_city', medium cities are given the tag 'medium_city', and ALL cities have the tag 'city'. Most battalions/armies have the tag 'battalion'.

--------------------------------
Example walkthrough: from user request -> helper object
--------------------------------
If the user asked for a helper to return the current date, and the existing helper needs all new fields, you might return something like:
${JSON.stringify({reasoning:"Added helper to return current date",name:"CURRENT_DATE",description:"Returns start date e.g. '1848-03-15 AD'",functionBody:"const r=gameData.rounds[String(currentRound)]; const d=r?.startDate;if(!d)return '????-??-??'; const y=d.year??'????'; const m=String(d.month??'??').padStart(2,'0'); const day=String(d.day??'??').padStart(2,'0'); return `${y}-${m}-${day}${d.label?' '+d.label:''}`;"},null,2)}
Note how helper functions always return a readable string (and so don't output things like regionIDs unless specifically requested).

--------------------------------
Current helper state
--------------------------------
You may edit any fields, but often some of the fields are fine so your change suggestion for that field should be null:
${JSON.stringify({name:e.name,description:e.description,functionBody:e.functionBody},null,2)}

--------------------------------
Final notes:
--------------------------------
- A person will be reading the AI reasoning (so it should be written to someone like 'your helper function wasn't quite right...'), but the description should be readable to someone who plays the game and might see this in a 'helper store'.
- Helper functions should always return a readable string, not internal IDs, unless specifically requested.

--------------------------------
Now for your task
--------------------------------
User request:
${a}
`;else t=a;r.push({sender:"user",display:a,content:t}),d(r),o(""),m(!0);try{let e=r.map(e=>{let t="user"===e.sender?"user message":"assistant response";return`<${t}>${e.content}</${t}>`}).join("\n\n"),t={enabled:!0,template:e,aiModel:"google/gemini-2.5-flash",maxThinkingTokens:4096,maxOutputTokens:4096,schema:JSON.stringify(J)},a=(await (0,$.default)({queryClient:y,simpleGame:L.default,promptKey:"chatWithUser",stage:t,parsedPrompt:e,roundNumber:0,parsedJsonSchemaString:JSON.stringify(J)})).getReader(),n=new TextDecoder,s="";for(;;){let{value:e,done:t}=await a.read();if(t)break;e&&(s+=n.decode(e,{stream:!0}))}s+=n.decode(),a.releaseLock();let i=JSON.parse(s.trim()),o=i.reasoning,l={};null!==i.name&&(l.name=i.name),null!==i.description&&(l.description=i.description),null!==i.functionBody&&(l.functionBody=i.functionBody);let c=`${o}${Object.keys(l).length?`

Proposed changes:
${JSON.stringify(l,null,2)}`:""}`;r.push({sender:"assistant",display:o,content:c}),d([...r]),f(Object.keys(l).length?l:null)}catch(e){console.error("AI generation failed",e),alert("AI generation failed")}finally{m(!1)}};return(0,a.useEffect)(()=>{b.current&&b.current.scrollIntoView({behavior:"smooth"})},[l]),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(F.ScrollShadow,{className:"border-default-200 bg-default-100 flex-1 overflow-y-auto rounded-sm border p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[0!==l.length||c?l.map((e,a)=>(0,t.jsx)("div",{className:`mb-2 max-w-[85%] ${"user"===e.sender?"self-end":"self-start"}`,children:(0,t.jsx)(u.Card,{className:`p-3 ${"user"===e.sender?"bg-primary-500 text-white":"bg-default-50"}`,children:e.display})},a)):(0,t.jsx)("div",{className:"py-4 text-center text-gray-500 italic",children:s?.describeHelperChangeToStart("Describe the helper change you want to get started.")}),c&&(0,t.jsxs)("div",{className:"flex items-center gap-2 py-2 text-sm text-gray-500",children:[(0,t.jsx)(B.Spinner,{size:"sm"})," ",s?.generating("Generating...")]}),(0,t.jsx)("div",{ref:b})]})}),l.length>1&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(r.Button,{size:"sm",variant:"light",onPress:()=>{l.length<=1||(d([]),f(null))},children:s?.clearHistory("Clear history")})}),(0,t.jsxs)("div",{className:"flex items-end gap-2",children:[(0,t.jsx)(x.Textarea,{fullWidth:!0,placeholder:s?.optionalCommentsPlaceholder("Optional comments or questions for the assistant")??"Optional comments or questions for the assistant",value:i,onChange:e=>o(e.target.value),minRows:1,maxRows:4,isDisabled:c,classNames:{input:"py-1"}}),(0,t.jsx)(r.Button,{color:"primary",className:"h-11",onPress:v,isDisabled:c,children:c?(0,t.jsx)(B.Spinner,{size:"sm",color:"white"}):s?.send("Send")})]}),h&&Object.entries(h).map(([e,a])=>(0,t.jsxs)(u.Card,{className:"border-default-200 border",children:[(0,t.jsx)(g.CardHeader,{className:"flex items-center justify-between",children:(0,t.jsx)("span",{className:"text-default-700 font-semibold capitalize",children:e})}),(0,t.jsxs)(p.CardBody,{children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("p",{className:"text-default-500 mb-1 text-xs font-medium",children:s?.proposedValue("Proposed Value:")}),(0,t.jsx)("pre",{className:"bg-default-50 max-h-60 overflow-auto rounded-sm p-2 text-sm whitespace-pre-wrap",children:String(a)})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(r.Button,{color:"success",size:"sm",onPress:()=>(e=>{if(!h)return;let t=h[e];if(void 0===t)return;n(e,t);let{[e]:a,...r}=h;f(Object.keys(r).length?r:null)})(e),children:s?.approveAndApply("Approve & Apply")}),(0,t.jsx)(r.Button,{color:"danger",variant:"flat",size:"sm",onPress:()=>(e=>{if(!h)return;let{[e]:t,...a}=h;f(Object.keys(a).length?a:null)})(e),children:s?.reject("Reject")})]})]})]},e))]})}function W({isOpen:e,helper:h,onClose:P,onSave:E,onDelete:O}){let{t:R}=(0,C.useTranslations)("promptEditing","edit"),[M,F]=(0,a.useState)(h),[B,U]=(0,a.useState)("info"),{user:$}=(0,N.default)(),L=$?.uid??null,[q,_]=(0,a.useState)({gameID:null,roundNumber:1,optionalData:{}}),{gameID:G,roundNumber:H,optionalData:z}=q,{data:J,isLoading:W}=(0,T.useSimpleGame)(G??void 0),{data:Y}=(0,I.useMapGeometry)(J?.mapGeometryDocumentID),{simpleSafeEval:Q,isLoadingSimpleSafeEval:V}=(0,A.default)();(0,a.useEffect)(()=>{J&&_(e=>({...e,roundNumber:1}))},[J]);let[X,Z]=(0,a.useState)(!1),[ee,et]=(0,a.useState)(""),ea=(0,a.useCallback)(async()=>{if(M.functionBody&&J&&Y&&Q){Z(!0),et("");try{let e=await Q(M.functionBody,void 0,J,H,Y,z);et(e)}catch(e){console.error("Error testing helper:",e),et("Error testing helper: "+(e?.message||String(e)))}finally{Z(!1)}}},[M.functionBody,J,H,z,Y,Q]);(0,a.useEffect)(()=>{F(h)},[h]);let er=(e,t)=>{F({...M,[e]:t})},{updateHelperAsync:en,isUpdating:es}=(0,S.useTemplateHelper)(h.UID),{data:ei,updateHelperAsync:eo,isUpdating:el}=(0,S.useTemplateHelper)(M.forkedFromUID),ed=a.default.useMemo(()=>(0,j.computeForkSyncStatus)(M,ei),[M,ei]),ec=a.default.useMemo(()=>L&&ei&&ei.authorUID===L,[L,ei]),eu=async()=>{if(!M.forkedFromUID||!ec)return;let e={...(0,j.stripForkMetadata)({...M,UID:M.forkedFromUID}),updatedAt:Date.now()};try{await D.toast.promise(eo(e),{loading:"Pushing changes...",success:"Changes pushed to store!",error:"Failed to push changes"})}catch(e){return}let t={...M,forkedFromUpdatedAt:e.updatedAt};F(t),E(t)},ep=async()=>{let e={...M,isPublished:!0,updatedAt:Date.now()};try{await D.toast.promise(en(e),{loading:"Publishing helper...",success:"Helper published to store!",error:"Failed to publish helper"})}catch(e){return}E(e)},em=async()=>{if(!M.isPublished)return;let e={...M,updatedAt:Date.now()};try{await D.toast.promise(en(e),{loading:"Updating helper...",success:"Helper updated in store!",error:"Failed to update helper"})}catch(e){return}E(e)};return e?(0,t.jsx)(n.Modal,{isOpen:e,onClose:P,size:"4xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:R?.editTemplateHelper(`Edit Template Helper - ${M.name}`,{name:M.name})}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)(c.Tabs,{selectedKey:B,onSelectionChange:e=>U(e),variant:"underlined",destroyInactiveTabPanel:!1,children:[(0,t.jsx)(d.Tab,{title:R?.infoTab("Info")??"Info",children:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(m.Input,{label:R?.nameLabel("Name")??"Name",value:M.name,onChange:e=>er("name",e.target.value)}),(0,t.jsx)(x.Textarea,{label:R?.descriptionLabel("Description")??"Description",value:M.description,onValueChange:e=>er("description",e),minRows:5,maxRows:10}),(0,t.jsx)(f.Select,{label:R?.tagsLabel("Tags")??"Tags",selectionMode:"multiple",selectedKeys:new Set(M.tags),onSelectionChange:e=>{if(e instanceof Set){let t=Array.from(e);F({...M,tags:t})}},children:["Map","Events","Battalions"].map(e=>(0,t.jsx)(y.SelectItem,{children:e},e))})]})},"info"),(0,t.jsx)(d.Tab,{title:R?.functionTab("Function")??"Function",children:(0,t.jsx)("div",{className:"",children:(0,t.jsx)(x.Textarea,{label:R?.functionBodyLabel("Function Body")??"Function Body",value:M.functionBody,onValueChange:e=>er("functionBody",e),minRows:10,maxRows:1e3,className:"font-mono"})})},"function"),(0,t.jsx)(d.Tab,{title:R?.testTab("Test")??"Test",children:(0,t.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row",children:[(0,t.jsx)("div",{className:"lg:w-80 lg:shrink-0",children:(0,t.jsx)(k,{onChange:_})}),(0,t.jsx)("div",{className:"min-w-0 flex-1",children:G?W||V?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(r.Button,{color:"primary",onPress:ea,isDisabled:X||!G||!J,size:"lg",fullWidth:!0,children:X?"Testing...":"Test Helper"})}),X?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):ee?(0,t.jsxs)(u.Card,{children:[(0,t.jsxs)(g.CardHeader,{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:"Helper Result"}),(0,t.jsx)("button",{"aria-label":"Copy helper result",onClick:async()=>{try{await navigator.clipboard.writeText(ee),D.toast.success("Helper result copied to clipboard")}catch(e){D.toast.error("Failed to copy helper result")}},className:"bg-default-100 text-default-700 hover:bg-default-200 cursor-pointer rounded-md p-1 transition-colors",children:(0,t.jsx)(v.CopyIcon,{className:"h-4 w-4"})})]}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:ee})})]}):(0,t.jsx)("div",{className:"flex h-64 items-center justify-center text-gray-500",children:'No result yet. Click "Test Helper".'})]}):(0,t.jsx)("div",{className:"bg-default-50 border-default-200 flex h-64 items-center justify-center rounded-lg border",children:(0,t.jsxs)("div",{className:"text-center text-gray-600",children:[(0,t.jsx)("p",{className:"mb-2 text-lg font-medium",children:"Select a Game to Test Helper"}),(0,t.jsx)("p",{className:"text-sm",children:"You must select a game and round to test this helper function"})]})})})]})},"test"),(0,t.jsx)(d.Tab,{title:R?.aiEditTab("AI Edit")??"AI Edit",children:(0,t.jsx)(K,{helper:M,onFieldChange:er})},"ai")]})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,t.jsx)(r.Button,{color:"danger",variant:"flat",onPress:O,children:R?.deleteHelper("Delete")}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,w.userCanEditTemplateHelperStore)(L)&&(0,t.jsxs)(t.Fragment,{children:[ed.canPush&&ec&&(0,t.jsx)(r.Button,{color:"warning",variant:"flat",onPress:eu,isLoading:el,children:R?.pushChangesToStore("Push Changes to Store")}),ed.canPull&&(0,t.jsx)(r.Button,{color:"secondary",variant:"flat",onPress:()=>{if(!ei)return;let e={...M,name:ei.name,description:ei.description,functionBody:ei.functionBody,tags:ei.tags,forkedFromUpdatedAt:ei.updatedAt,updatedAt:Date.now()};F(e),E(e),D.toast.success("Pulled latest changes from store")},children:R?.pullUpdatesFromStore("Pull Updates from Store")}),M.isPublished&&!M.forkedFromUID&&(0,t.jsx)(r.Button,{color:"warning",variant:"flat",onPress:em,isLoading:es,children:R?.updateHelperInStore("Update Helper in Store")}),!M.isPublished&&(0,t.jsx)(r.Button,{color:"warning",variant:"flat",onPress:ep,isLoading:es,children:R?.publishAsNewHelper("Publish as New Helper")})]}),(0,t.jsx)(r.Button,{variant:"light",onPress:P,children:R?.cancel("Cancel")}),(0,t.jsx)(r.Button,{color:"success",onPress:()=>{E(M)},children:R?.save("Save")})]})]})})]})}):null}var Y=e.i(189609);let Q=({size:e=24,...a})=>(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[(0,t.jsx)("path",{d:"M23 4v6h-6"}),(0,t.jsx)("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]});e.s(["default",0,Q],144230);var V=e.i(181171);let X=({size:e=24,...a})=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"feather feather-chevron-up",...a,children:(0,t.jsx)("path",{d:"m18 15-6-6-6 6"})});e.s(["default",0,X],239043);var Z=e.i(326898);e.i(436180);var ee=e.i(98925),et=e.i(176009);function ea({isOpen:e,existingHelperUIDs:d,onClose:c,onImport:u}){let p,{t:h}=(0,C.useTranslations)("promptEditing","edit"),{data:g,isLoading:f,isError:y,error:x,refetch:v,isFetching:j}=(0,S.useTemplateHelpers)(),{user:D}=(0,N.default)(),T=D?.uid??null,I=(0,U.useQueryClient)(),A=a.default.useMemo(()=>g?g.filter(e=>e.isPublished):[],[g]),[R,M]=(0,a.useState)(new Set),[k,B]=(0,a.useState)(""),[$,L]=(0,a.useState)("alphabetical"),[q,_]=(0,a.useState)("asc"),G=a.default.useMemo(()=>Array.from(new Set(A.flatMap(e=>e.tags))),[A]),[H,z]=(0,a.useState)(new Set),J=H.size>0,K=e=>{e===$?_("asc"===q?"desc":"asc"):(L(e),_("asc"))},W=a.default.useMemo(()=>{let e=k.toLowerCase(),t=A.filter(t=>{let a=t.name.toLowerCase().includes(e),r=t.tags.some(t=>t.toLowerCase().includes(e)),n=(t.description??"").toLowerCase().includes(e);return a||r||n});return J&&(t=t.filter(e=>e.tags.some(e=>H.has(e)))),t.sort((e,t)=>{let a=0;return a="alphabetical"===$?e.name.localeCompare(t.name):(e.updatedAt??0)-(t.updatedAt??0),"asc"===q?a:-a}),t},[A,k,$,q,J,H]);a.default.useEffect(()=>{e&&M(new Set)},[e]);let[ea,er]=(0,a.useState)(!1),en=a.default.useMemo(()=>g&&T?g.filter(e=>R.has(e.UID)&&e.authorUID===T).length:0,[g,R,T]),es=async()=>{if(!g||0===en||!(0,w.userCanEditTemplateHelperStore)(T))return;let e=g.filter(e=>R.has(e.UID)&&e.authorUID===T);if(0!==e.length&&confirm(`Remove ${e.length} helper${1===e.length?"":"s"} from the public store? This cannot be undone.`)){er(!0);try{await Promise.all(e.map(e=>(0,ee.deleteDoc)((0,ee.doc)(et.db,`templateHelpers/${e.UID}`)))),I.invalidateQueries({queryKey:["templateHelpers"]}),e.forEach(e=>{I.removeQueries({queryKey:["templateHelper",e.UID]})}),M(new Set)}catch(e){console.error("Failed to remove helpers from store",e),alert("Failed to remove helpers from store")}finally{er(!1)}}};return e?(0,t.jsx)(n.Modal,{isOpen:e,onClose:c,size:"4xl",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsxs)(l.ModalHeader,{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{children:h?.templateHelperStore("Template Helper Store")}),(0,t.jsx)(r.Button,{isIconOnly:!0,variant:"light",size:"sm","aria-label":"Refresh",onPress:()=>v(),isLoading:j&&!f,className:"p-1",children:(0,t.jsx)(Q,{className:"h-4 w-4"})})]}),(0,t.jsx)(s.ModalBody,{children:f?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):y?(0,t.jsxs)("p",{className:"text-danger-500",children:["Error: ",x.message]}):0===A.length?(0,t.jsx)("p",{className:"text-gray-500",children:h?.noPublishedHelpersAvailable("No published helpers available.")}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",children:[(0,t.jsx)(m.Input,{placeholder:h?.searchHelpersStorePlaceholder("Search helpers...")??"Search helpers...",value:k,onChange:e=>B(e.target.value),startContent:(0,t.jsx)(V.default,{size:16,className:"text-gray-400"}),variant:"bordered",className:"max-w-sm",isClearable:!0,onClear:()=>B("")}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(r.Button,{size:"sm",variant:"alphabetical"===$?"solid":"bordered",color:"alphabetical"===$?"primary":"default",onPress:()=>K("alphabetical"),endContent:"alphabetical"===$?"asc"===q?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:h?.sortAZ("A-Z")}),(0,t.jsx)(r.Button,{size:"sm",variant:"lastEdited"===$?"solid":"bordered",color:"lastEdited"===$?"primary":"default",onPress:()=>K("lastEdited"),endContent:"lastEdited"===$?"asc"===q?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:h?.lastEdited("Last Edited")}),(0,t.jsxs)(P.Popover,{placement:"bottom-end",children:[(0,t.jsx)(O.PopoverTrigger,{children:(0,t.jsx)(r.Button,{size:"sm",variant:J?"solid":"bordered",color:J?"primary":"default",children:h?.tagFilters("Tag Filters")})}),(0,t.jsx)(E.PopoverContent,{className:"bg-content1 w-32 p-4",children:0===G.length?(0,t.jsx)("p",{className:"text-default-500 text-sm",children:h?.noTagsAvailable("No tags available")}):(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[G.map(e=>(0,t.jsx)(Y.Checkbox,{isSelected:H.has(e),onValueChange:()=>{z(t=>{let a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a})},size:"sm",children:e},e)),J&&(0,t.jsx)(r.Button,{size:"sm",variant:"light",onPress:()=>z(new Set),className:"mt-2 self-end",children:"Clear"})]})})]})]})]}),0===W.length?(0,t.jsx)("p",{className:"text-gray-500",children:h?.noHelpersMatchSearch("No helpers match your search.")}):(0,t.jsx)(F.ScrollShadow,{orientation:"vertical",className:"max-h-[60vh] pr-2",children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:W.map(e=>{let a=d.includes(e.UID),r=R.has(e.UID)&&!a;return(0,t.jsxs)("div",{className:`cursor-pointer rounded-md p-4 shadow-xs transition-colors ${a?"bg-success-50":r?"bg-primary-50 border-primary-300 border":"bg-default-50 hover:bg-default-100"}`,onClick:()=>{var t;return t=e.UID,void(!a&&M(e=>{let a=new Set(e);return a.has(t)?a.delete(t):a.add(t),a}))},children:[(0,t.jsxs)("h4",{className:"mb-1 flex items-center gap-1 truncate text-sm font-medium",children:[e.name,a&&(0,t.jsx)("span",{className:"bg-success-200 text-success-800 rounded-sm px-1 py-0.5 text-[10px]",children:h?.added("Added")})]}),(0,t.jsx)("p",{className:"text-default-600 mb-2 line-clamp-3 text-xs",children:e.description||"No description"})]},e.UID)})})})]})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsxs)("div",{className:"flex w-full justify-between",children:[(0,t.jsx)(r.Button,{variant:"light",onPress:c,children:h?.cancelImport("Cancel")}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,w.userCanEditTemplateHelperStore)(T)&&(0,t.jsx)(r.Button,{color:"danger",variant:"flat",onPress:es,isLoading:ea,isDisabled:0===en,children:h?.removeNHelpers(`Remove ${en} Helpers`,{count:en})}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>{g&&(u(g.filter(e=>R.has(e.UID))),c())},isDisabled:!g||g.every(e=>!R.has(e.UID)),children:(p=g?g.filter(e=>R.has(e.UID)).length:0,h?.importNHelpers(`Import ${p} Template Helper(s)`,{count:p}))})]})]})})]})}):null}var er=e.i(111333),en=e.i(393899);function es({currentPrompt:e,onPromptChange:n,authorizedToEdit:s}){let{t:i}=(0,C.useTranslations)("promptEditing","edit"),[o,l]=a.default.useState(!1),[d,c]=a.default.useState(null),[g,f]=a.default.useState(!1),[y,x]=a.default.useState(""),b=a.default.useCallback(t=>{let a=0,r=RegExp(`\\$\\{${t}\\}`,"g");if(e.firstStage?.template){let t=e.firstStage.template.match(r);a+=t?t.length:0}if(e.secondStage?.template){let t=e.secondStage.template.match(r);a+=t?t.length:0}if(e.thirdStage?.template){let t=e.thirdStage.template.match(r);a+=t?t.length:0}return a},[e.firstStage?.template,e.secondStage?.template,e.thirdStage?.template]),w=a.default.useMemo(()=>{let t=Object.values(e.templateHelpers??{});if(!y.trim())return t;let a=y.toLowerCase();return t.filter(e=>e.name.toLowerCase().includes(a)||(e.description??"").toLowerCase().includes(a)||e.tags.some(e=>e.toLowerCase().includes(a)))},[e.templateHelpers,y]),S=a.default.useMemo(()=>{let t=Object.values(e.templateHelpers??{}),a=0;for(let e of t)0===b(e.name)&&(a+=1);return a},[e.templateHelpers,b]);return(0,t.jsxs)("div",{className:"flex h-full flex-col",children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-sm font-semibold",children:i?.templateHelpersHeader("Template Helpers")}),(0,t.jsxs)("div",{className:"mb-3 flex w-full gap-2",children:[(0,t.jsx)(r.Button,{color:"primary",variant:"flat",className:"flex-1",onPress:()=>{if(!s)return;let t={UID:(0,en.generateUUID)(),name:"Untitled Helper",description:"",authorUID:et.auth.currentUser?.uid??"",isPublished:!1,forGameDataVersion:er.LATEST_SIMPLE_GAME_DATA_VERSION,tags:[],functionBody:"",updatedAt:Date.now()},a={...e.templateHelpers??{},[t.UID]:t};n({...e,templateHelpers:a}),c(t.UID),l(!0)},isDisabled:!s,children:i?.newHelper("+ New Helper")}),(0,t.jsx)(r.Button,{variant:"flat",className:"flex-1",onPress:()=>{s&&f(!0)},isDisabled:!s,startContent:(0,t.jsx)(h.StoreIcon,{className:"h-4 w-4"}),children:i?.store("Store")})]}),(0,t.jsx)(m.Input,{placeholder:i?.searchHelpersPlaceholder("Search helpers...")??"Search helpers...",value:y,onChange:e=>x(e.target.value),startContent:(0,t.jsx)(V.default,{size:16,className:"text-gray-400"}),variant:"bordered",size:"sm",className:"mb-3",isClearable:!0,onClear:()=>x("")}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[w.map(e=>{let a=b(e.name);return(0,t.jsxs)(u.Card,{isPressable:!0,onPress:()=>{c(e.UID),l(!0)},className:"group relative cursor-pointer",children:[(0,t.jsxs)("div",{className:"absolute top-2 right-2 z-10 flex gap-1",children:[(0,t.jsx)("span",{className:`rounded-md px-2 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 ${a>0?"bg-blue-100 text-blue-700":"bg-red-100 text-red-700"}`,title:i?.usedNTimesInTemplate(`Used ${a} time(s) in template`,{count:a})??`Used ${a} time(s) in template`,children:a}),(0,t.jsx)("span",{"aria-label":"Copy helper name",onClick:t=>{t.stopPropagation(),navigator.clipboard.writeText(`\${${e.name}}`),D.default.success(`\${${e.name}} copied to clipboard`)},className:"bg-default-100 text-default-700 hover:bg-default-200 cursor-pointer rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100",children:(0,t.jsx)(v.CopyIcon,{className:"h-4 w-4"})})]}),(0,t.jsxs)(p.CardBody,{children:[(0,t.jsx)("h4",{className:"mb-1 truncate text-sm font-medium",children:e.name}),(0,t.jsx)("p",{className:"text-default-600 line-clamp-2 text-xs",children:e.description||"No description"})]})]},e.UID)}),0===w.length&&(0,t.jsx)("p",{className:"text-default-500 text-xs",children:i?.noHelpersAddedYet("No helpers added yet.")})]}),S>0&&(0,t.jsx)(r.Button,{color:"danger",variant:"flat",className:"mt-2",onPress:()=>{if(!s)return;let t=e.templateHelpers??{},a=Object.values(t).filter(e=>0===b(e.name)).map(e=>e.UID);if(0===a.length)return;let r=Object.fromEntries(Object.entries(t).filter(([e])=>!a.includes(e)));n({...e,templateHelpers:r}),D.default.success(`Deleted ${a.length} unused helper${1===a.length?"":"s"}`)},isDisabled:!s,children:i?.deleteAllUnusedHelpers(`delete all (${S}) unused helpers`,{count:S})}),d&&e.templateHelpers&&e.templateHelpers[d]&&(0,t.jsx)(W,{isOpen:o,helper:e.templateHelpers[d],onClose:()=>{l(!1)},onSave:t=>{let a={...e.templateHelpers??{},[t.UID]:t};n({...e,templateHelpers:a}),l(!1)},onDelete:()=>{if(!s||!d)return;let{[d]:t,...a}=e.templateHelpers??{};n({...e,templateHelpers:a}),l(!1),c(null)}}),(0,t.jsx)(ea,{isOpen:g,existingHelperUIDs:Object.values(e.templateHelpers??{}).flatMap(e=>[e.UID,...e.forkedFromUID?[e.forkedFromUID]:[]]),onClose:()=>f(!1),onImport:t=>{if(!s)return;let a={...e.templateHelpers??{}},r=new Set(Object.values(a).map(e=>e.name));t.forEach(e=>{let t=(0,en.generateUUID)(),n=e.name,s=2;for(;r.has(n);)n=`${e.name}${s}`,s+=1;let i={...e,UID:t,name:n,authorUID:et.auth.currentUser?.uid??"",isPublished:!1,forkedFromUID:e.UID,forkedFromUpdatedAt:e.updatedAt??Date.now(),updatedAt:Date.now()};r.add(i.name),a[t]=i}),n({...e,templateHelpers:a}),l(!1)}})]})}var ei=e.i(204487),eo=e.i(617919),el=e.i(273830),ed=e.i(346996),ec=e.i(682234),eu=e.i(616231),ep=e.i(264674),em=e.i(635809),eh=e.i(919477),eg=e.i(620253),ef=e.i(569080),ey=e.i(750179),ex=e.i(211458),eb=e.i(849962),ev=e.i(343027),ew=e.i(75540),eS=(0,el.forwardRef)((e,r)=>{let{Component:n,WrapperComponent:s,children:i,isLast:o,separator:l,startContent:d,endContent:c,hideSeparator:u,getBaseProps:p,getItemProps:m,getSeparatorProps:h}=function(e){let[t,r]=(0,el.mapPropsVariants)(e,ep.breadcrumbItem.variantKeys),{ref:n,as:s,className:i,children:o,isLast:l,separator:d,startContent:c,endContent:u,classNames:p,hideSeparator:m=!1,...h}=t,g=!!(null==e?void 0:e.isCurrent),f=null==e?void 0:e.isDisabled,y=(null==e?void 0:e.href)&&!g?"a":"span",x="string"==typeof y,b=(0,eg.useDOMRef)(n),{itemProps:v}=function(e,t){let{isCurrent:a,isDisabled:r,"aria-current":n,elementType:s="a",...i}=e,{linkProps:o}=function(e,t){let{elementType:a="a",onPress:r,onPressStart:n,onPressEnd:s,onClick:i,isDisabled:o,...l}=e,d={};"a"!==a&&(d={role:"link",tabIndex:o?void 0:0});let{focusableProps:c}=(0,eb.useFocusable)(e,t),{pressProps:u,isPressed:p}=(0,ev.usePress)({onPress:r,onPressStart:n,onPressEnd:s,onClick:i,isDisabled:o,ref:t}),m=(0,ef.filterDOMProps)(l,{labelable:!0}),h=(0,ey.mergeProps)(c,u),g=(0,ex.useRouter)(),f=(0,ex.useLinkProps)(e);return{isPressed:p,linkProps:(0,ey.mergeProps)(m,f,{...h,...d,"aria-disabled":o||void 0,"aria-current":e["aria-current"],onClick:t=>{var a;null==(a=u.onClick)||a.call(u,t),(0,ex.handleLinkClick)(t,g,e.href,e.routerOptions)}})}}({isDisabled:r||a,elementType:s,...i},t),l=/^h[1-6]$/.test(s),d={};return l||(d=o),a&&(d["aria-current"]=n||"page",d.tabIndex=e.autoFocus?-1:void 0),{itemProps:{"aria-disabled":r,...d}}}({...e,isCurrent:g,elementType:y},b),{isFocusVisible:w,isFocused:S,focusProps:j}=function(e={}){let{autoFocus:t=!1,isTextInput:r,within:n}=e,s=(0,a.useRef)({isFocused:!1,isFocusVisible:t||(0,ed.isFocusVisible)()}),[i,o]=(0,a.useState)(!1),[l,d]=(0,a.useState)(()=>s.current.isFocused&&s.current.isFocusVisible),c=(0,a.useCallback)(()=>d(s.current.isFocused&&s.current.isFocusVisible),[]),u=(0,a.useCallback)(e=>{s.current.isFocused=e,o(e),c()},[c]);(0,ed.useFocusVisibleListener)(e=>{s.current.isFocusVisible=e,c()},[],{isTextInput:r});let{focusProps:p}=(0,ec.useFocus)({isDisabled:n,onFocusChange:u}),{focusWithinProps:m}=(0,eu.useFocusWithin)({isDisabled:!n,onFocusWithinChange:u});return{isFocused:i,isFocusVisible:l,focusProps:n?m:p}}(),D=(0,a.useMemo)(()=>(0,ep.breadcrumbItem)({...r,isCurrent:g,underline:(null==e?void 0:e.underline)===void 0||g?"none":null==e?void 0:e.underline,className:i}),[(0,ew.objectToDeps)(r),g,i]),C=(0,em.cn)(null==p?void 0:p.base,i);return{Component:y,WrapperComponent:s||"li",children:o,separator:d,startContent:c,endContent:u,isDisabled:f,isCurrent:g,isLast:l,hideSeparator:m,getBaseProps:()=>({ref:b,"data-slot":"base",className:D.base({class:C}),...(0,eh.filterDOMProps)(h,{enabled:x})}),getItemProps:()=>({href:g||null==e?void 0:e.href,"data-slot":"item","data-focus":(0,ew.dataAttr)(S),"data-focus-visible":(0,ew.dataAttr)(w),"data-disabled":null==e?void 0:e.isDisabled,"data-current":null==e?void 0:e.isCurrent,className:D.item({class:null==p?void 0:p.item}),...(0,ew.mergeProps)(v,f?{}:j)}),getSeparatorProps:()=>({"data-slot":"separator","aria-hidden":(0,ew.dataAttr)(!0),className:D.separator({class:null==p?void 0:p.separator})})}}({...e,ref:r});return(0,t.jsxs)(s,{...p(),children:[(0,t.jsxs)(n,{...m(),children:[d,i,c]}),!o&&!u&&(0,t.jsx)("span",{...h(),children:l})]})});eS.displayName="HeroUI.Breadcrumbs";var ej=e.i(595494),eD=e.i(629003),eC={};eC={"ar-AE":{breadcrumbs:`\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{648}\u{627}\u{62C}\u{647}\u{629}`},"bg-BG":{breadcrumbs:`\u{422}\u{440}\u{43E}\u{445}\u{438} \u{445}\u{43B}\u{44F}\u{431}`},"cs-CZ":{breadcrumbs:"Popis cesty"},"da-DK":{breadcrumbs:`Br\xf8dkrummer`},"de-DE":{breadcrumbs:"Breadcrumbs"},"el-GR":{breadcrumbs:`\u{3A0}\u{3BB}\u{3BF}\u{3B7}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2} breadcrumb`},"en-US":{breadcrumbs:"Breadcrumbs"},"es-ES":{breadcrumbs:"Migas de pan"},"et-EE":{breadcrumbs:"Lingiread"},"fi-FI":{breadcrumbs:"Navigointilinkit"},"fr-FR":{breadcrumbs:"Chemin de navigation"},"he-IL":{breadcrumbs:`\u{5E9}\u{5D1}\u{5D9}\u{5DC}\u{5D9} \u{5E0}\u{5D9}\u{5D5}\u{5D5}\u{5D8}`},"hr-HR":{breadcrumbs:"Navigacijski putovi"},"hu-HU":{breadcrumbs:`Morzsamen\xfc`},"it-IT":{breadcrumbs:"Breadcrumb"},"ja-JP":{breadcrumbs:`\u{30D1}\u{30F3}\u{304F}\u{305A}\u{30EA}\u{30B9}\u{30C8}`},"ko-KR":{breadcrumbs:`\u{D0D0}\u{C0C9} \u{D45C}\u{C2DC}`},"lt-LT":{breadcrumbs:`Nar\u{161}ymo kelias`},"lv-LV":{breadcrumbs:`Atpaka\u{13C}ce\u{13C}i`},"nb-NO":{breadcrumbs:"Navigasjonsstier"},"nl-NL":{breadcrumbs:"Broodkruimels"},"pl-PL":{breadcrumbs:"Struktura nawigacyjna"},"pt-BR":{breadcrumbs:"Caminho detalhado"},"pt-PT":{breadcrumbs:"Categorias"},"ro-RO":{breadcrumbs:`Miez de p\xe2ine`},"ru-RU":{breadcrumbs:`\u{41D}\u{430}\u{432}\u{438}\u{433}\u{430}\u{446}\u{438}\u{44F}`},"sk-SK":{breadcrumbs:`Naviga\u{10D}n\xe9 prvky Breadcrumbs`},"sl-SI":{breadcrumbs:"Drobtine"},"sr-SP":{breadcrumbs:"Putanje navigacije"},"sv-SE":{breadcrumbs:`S\xf6kv\xe4gar`},"tr-TR":{breadcrumbs:`\u{130}\xe7erik haritalar\u{131}`},"uk-UA":{breadcrumbs:`\u{41D}\u{430}\u{432}\u{456}\u{433}\u{430}\u{446}\u{456}\u{439}\u{43D}\u{430} \u{441}\u{442}\u{435}\u{436}\u{43A}\u{430}`},"zh-CN":{breadcrumbs:`\u{5BFC}\u{822A}\u{680F}`},"zh-TW":{breadcrumbs:`\u{5C0E}\u{89BD}\u{5217}`}};var eN=e.i(552893),eT=e=>(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:(0,t.jsx)("path",{d:"m9 18 6-6-6-6"})}),eI=e.i(411062),eA=(0,el.forwardRef)((e,r)=>{let{Component:n,children:s,childCount:i,itemProps:o,separator:l=(0,t.jsx)(eT,{}),maxItems:d,itemsBeforeCollapse:c,itemsAfterCollapse:u,isDisabled:p,renderEllipsis:m,getBaseProps:h,getListProps:g,getEllipsisProps:f,getSeparatorProps:y,onAction:x}=function(e){var t,r;let n=(0,ej.useProviderContext)(),s=null!=(r=null!=(t=null==e?void 0:e.disableAnimation)?t:null==n?void 0:n.disableAnimation)&&r,[i,o]=(0,el.mapPropsVariants)(e,ep.breadcrumbs.variantKeys),{ref:l,as:d,color:c,underline:u,isDisabled:p,separator:m,children:h,itemsBeforeCollapse:g=1,itemsAfterCollapse:f=2,maxItems:y=8,hideSeparator:x,renderEllipsis:b,className:v,classNames:w,itemClasses:S,onAction:j,...D}=i,C=d||"nav",N="string"==typeof C,{navProps:T}=function(e){var t;let{"aria-label":a,...r}=e,n=(0,eN.useLocalizedStringFormatter)((t=eC)&&t.__esModule?t.default:t,"@react-aria/breadcrumbs");return{navProps:{...(0,ef.filterDOMProps)(r,{labelable:!0}),"aria-label":a||n.format("breadcrumbs")}}}(e),[,I]=(0,eD.pickChildren)(h,eS),A=a.Children.count(I),P=(0,eg.useDOMRef)(l),E=(0,a.useMemo)(()=>(0,ep.breadcrumbs)({...o}),[(0,ew.objectToDeps)(o)]),O=(0,em.cn)(null==w?void 0:w.base,v);return{Component:C,children:I,slots:E,separator:m,childCount:A,itemsAfterCollapse:f,itemsBeforeCollapse:g,maxItems:y,classNames:w,isDisabled:p,itemProps:{color:c,underline:u,disableAnimation:s,hideSeparator:x,size:null==e?void 0:e.size,classNames:S},renderEllipsis:b,getBaseProps:()=>({ref:P,"data-slot":"base",className:E.base({class:O}),...(0,ew.mergeProps)(T,(0,eh.filterDOMProps)(D,{enabled:N}))}),getListProps:()=>({"data-slot":"list",className:E.list({class:null==w?void 0:w.list})}),getEllipsisProps:()=>({"data-slot":"ellipsis",className:E.ellipsis({class:null==w?void 0:w.ellipsis})}),getSeparatorProps:()=>({"data-slot":"separator","aria-hidden":(0,ew.dataAttr)(!0),className:E.separator({class:null==w?void 0:w.separator})}),onAction:j}}({...e,ref:r}),b=(0,a.useMemo)(()=>{let e=null==s?void 0:s.map((e,t)=>{var r;let n=t===i-1,s=(null==e?void 0:e.key)||t;return(0,a.cloneElement)(e,{...o,isLast:n,separator:l,isDisabled:p&&!n,isCurrent:n||e.props.isCurrent,...e.props,key:s,onPress:(0,ew.chain)(null==(r=e.props)?void 0:r.onPress,()=>null==x?void 0:x(s))})});if(!e)return null;if(i<d)return e;if(c+u>=i)return(0,ew.warn)(`You have provided an invalid combination of props to the Breadcrumbs. itemsAfterCollapse={${u}} + itemsBeforeCollapse={${c}} >= itemsCount={${i}}`,"Breadcrumbs"),e;let r=e.slice(c,e.length-u);if(r.length<1)return e;let n=(0,t.jsx)(eI.EllipsisIcon,{...f()}),h=(0,a.cloneElement)(r[0],{...r[0].props,key:"ellipsis",children:n}),g="function"==typeof m?m({collapsedItem:h,items:r.map(e=>e.props),maxItems:d,ellipsisIcon:n,itemsBeforeCollapse:c,itemsAfterCollapse:u,separator:(0,t.jsx)("span",{...y(),children:l})}):h;return[...e.slice(0,c),(0,a.isValidElement)(g)&&(0,a.cloneElement)(g,{key:"ellipsis-item"}),...e.slice(e.length-u,e.length)]},[s,i,l,o,c,u,p]);return(0,t.jsx)(n,{...h(),children:(0,t.jsx)("ol",{...g(),children:b})})});eA.displayName="HeroUI.Breadcrumbs";var eP=e.i(644986),eE=e.i(452453),eO=e.i(918789);let eR=[{title:"Texas declares independence from Mexico.",date:"1800-03-01",sourceCountry:"Texas",description:"The region of Texas declares independence from Mexico, forming the Republic of Texas.",mapChanges:[{type:"createPolity",polity:{name:"Republic of Texas",additionalNames:["Texas"],color:"#800000"}}]},{title:"Austin is founded as the new capital of the Republic of Texas.",date:"1800-03-15",sourceCountry:"Republic of Texas",description:"Austin is founded as the new capital of the Republic of Texas.",mapChanges:[{type:"createMapFeature",feature:{type:"centroid",name:"Austin",displaySymbol:"star",location:{regionID:"Mexico - Central Region"},color:"#FFD700",ownerName:"Republic of Texas",description:"Newly established capital city of Texas",scale:1,labelPlacement:"above",tags:["city"]}}]},{title:"Canada reorganises itself and adopts a new identity as the Dominion of Canada.",date:"1800-04-01",sourceCountry:"Canada",description:"Canada reorganises itself and adopts a new identity as the Dominion of Canada.",mapChanges:[{type:"updatePolity",name:"Canada",newName:"Dominion of Canada",color:"#CC0000",setAdditionalNamesTo:["Canada"]}]},{title:"The United States cedes the Midwest region to the Republic of Texas.",date:"1800-04-10",sourceCountry:"USA",description:"The United States cedes the Midwest region to the Republic of Texas.",mapChanges:[{type:"transferRegionOwnership",transfers:[{regionIDs:["USA - Midwest"],toPolity:"Republic of Texas"}]}]},{title:"The Maple Brigade relocates westward to reinforce the frontier.",date:"1800-04-20",sourceCountry:"Dominion of Canada",description:"The Maple Brigade relocates westward to reinforce the frontier.",mapChanges:[{type:"updateMapFeature",name:"Maple Brigade",properties:{location:{regionID:"Canada - Western Provinces"}}}]},{title:"The Mexican government collapses, and Mexico is formally dissolved.",date:"1800-05-01",sourceCountry:"Mexico",description:"The Mexican government collapses, and Mexico is formally dissolved.",mapChanges:[{type:"dissolvePolity",polityName:"Mexico"}]},{title:"The Maple Reserves battalion is disbanded following reorganisation.",date:"1800-05-05",sourceCountry:"Dominion of Canada",description:"The Maple Reserves battalion is disbanded following reorganisation.",mapChanges:[{type:"removeMapFeature",name:"Maple Reserves"}]}],eM=e=>({name:"raw_events",strict:!0,schema:{type:"object",title:"UnnormalisedFlashForwardOutput",description:"Chronological list of historical events in an *unnormalised* format that requires a cleanup step before it can be used by the game engine.",properties:{events:{type:"array",description:"All events that occurred during the flash-forward window.",items:{type:"object",title:"UnnormalisedEvent",description:"A single event in the legacy/unstandardised structure.",properties:{date_string:{type:"string",description:"Human-readable date such as '1 January 1800'."},narrative:{type:"string",description:"Markdown text: **HEADLINE IN ALL-CAPS**, newline, then narrative paragraph(s)."},hidden_from_player:{type:"boolean",description:`If true, the player (${e.playerCountry}) cannot see this event yet.`},map_changes:{type:"array",description:"List of map changes in the legacy format.",items:{type:"object",title:"LegacyMapChange",properties:{type:{type:"string",description:'Type of map change in UPPER_SNAKE_CASE, e.g., "CREATE_POLITY", "TRANSFER_REGION_OWNERSHIP".'},name:{type:"string"},aliases:{type:"array",items:{type:"string"}},colour:{type:"string",description:'Legacy British spelling of "color".'}},required:["type"],additionalProperties:!0}}},required:["date_string","narrative","map_changes"],additionalProperties:!0}}},required:["events"],additionalProperties:!1}}),ek={promptSource:null,promptKey:"jumpForward",firstStage:{cleanup:{function:'const event = JSON.parse(optionalData.rawEventString);\nevent.description = "first try description: " + event.description;\nreturn JSON.stringify(event);',applyTo:"entireOutput"},template:"return `\n[The world before the game started]\n${WORLD_BEFORE_ROUND_ONE_TEXT}\n\n[Events that have happened this game] \n${ALL_EVENTS}\n\nPlayer Actions:\n${PLAYER_EVERY_ACTION}\n\n[The current state of the map]\n${GRAND_MAP_DESCRIPTION}\n\nIt is currently ${ORIGIN_ROUND_DATE} and we are jumping forward in time to ${TARGET_ROUND_DATE}. Events must take place between ${ORIGIN_ROUND_DATE} and ${TARGET_ROUND_DATE}.\n\nTheir current difficulty setting is: ${GAME_DIFFICULTY_DESCRIPTION}\n\nmake sure to think about which map changes would be necessary for each event.\n\n`",schema:"",enabled:!0,aiModel:"google/gemini-2.0-flash-lite-001",maxThinkingTokens:16e3,maxOutputTokens:666666},secondStage:{enabled:!0,schema:"",maxThinkingTokens:1e3,aiModel:"google/gemini-2.0-flash-lite-001",template:"return `\nYour job is to review and improve the answer from another AI.\n\nThe original prompt:\n<originalPrompt>\n[The world before the game started]\n${WORLD_BEFORE_ROUND_ONE_TEXT}\n\n[Events that have happened this game] \n${ALL_EVENTS}\n\nPlayer Actions:\n${PLAYER_EVERY_ACTION}\n\n[The current state of the map]\n${GRAND_MAP_DESCRIPTION}\n\nIt is currently ${ORIGIN_ROUND_DATE} and we are jumping forward in time to ${TARGET_ROUND_DATE}. Events must take place between ${ORIGIN_ROUND_DATE} and ${TARGET_ROUND_DATE}.\n\nTheir current difficulty setting is: ${GAME_DIFFICULTY_DESCRIPTION}\n</originalPrompt>\n\nThe original response:\n${PREVIOUS_STAGE_OUTPUT}\n\nThe new map state if the original response is applied:\n${GRAND_MAP_DESCRIPTION_PREVIOUS_STAGE_APPLIED}\n\nNow, with that information, output a new response:\n`",maxOutputTokens:1e4},templateHelpers:{"bfd71951-595e-49dc-b6a3-f2880566bb55":{UID:"bfd71951-595e-49dc-b6a3-f2880566bb55",tags:[],updatedAt:0x197c95bc892,authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",description:'Returns a human-readable description of the current game\'s difficulty setting, ranging from "allow player freedom" to "everything goes wrong for player".',functionBody:'const difficulty = gameData.difficulty; switch (difficulty) { case "very easy": return "Let the player accomplish their goals with minimal interference. There should be ample opportunities for success."; case "easy": return "Allow the player to face challenges, but ensure there are clear paths to overcoming them. Offer more good fortune than bad."; case "normal": return "Balance successes and failures for the player. Present a mix of opportunities and obstacles that require strategic thinking."; case "hard": return "Make the player\'s journey genuinely challenging. Obstacles should be significant and successes earned through hard effort. Bad luck should be more common than good."; case "impossible": return "At nearly every turn, practically everything that could go wrong for the player should go wrong. Only the most skilled and dedicated will survive."; default: return "Difficulty level unknown.";}',isPublished:!1,name:"GAME_DIFFICULTY_DESCRIPTION",forGameDataVersion:8},"f47ec6dd-40ad-45ea-8fde-4edb5862b5eb":{forkedFromUID:"2d9757e3-0dc9-49f2-8cca-7e6760412633",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",isPublished:!0,functionBody:"const d=optionalData.jumpForwardDate;if(!d)return '????-??-??'; const y=d.year??'????'; const m=String(d.month??'??').padStart(2,'0'); const day=String(d.day??'??').padStart(2,'0'); return `${y}-${m}-${day}${d.label?' '+d.label:''}`;",forkedFromUpdatedAt:0x197bdbe2601,name:"TARGET_ROUND_DATE",updatedAt:0x197bdc074ad,description:'Returns the Chosen Target Date in Jump Forward, formatted as a string: (YYYY-MM-DD AD/BC). Example output: "1848-03-15 AD"',UID:"f47ec6dd-40ad-45ea-8fde-4edb5862b5eb",forGameDataVersion:5,tags:[]},"a4a5aa91-1983-486b-8e2b-ccbe8f18ae3e":{authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",tags:[],description:'The description in the field of "World Before Round 1" text in the preset editor, which describes the historical preset before the first round.',functionBody:"return gameData.startingTimelineText;",isPublished:!1,forGameDataVersion:4,updatedAt:0x197be3a775d,forkedFromUID:"b1823b25-fa6a-45d1-b367-13e2d99ac130",UID:"a4a5aa91-1983-486b-8e2b-ccbe8f18ae3e",forkedFromUpdatedAt:0x197be3a775d,name:"WORLD_BEFORE_ROUND_ONE_TEXT"},"9502fe03-7c05-445d-9781-113dff36ae8d":{forkedFromUpdatedAt:0x197be3ba0b3,description:"List of every event that has happened in the game so far, in the following format:\n\nEvent Date: (The Event Date)\n(EVENT TITLE AND DESCRIPTION)\n(IS FUNCTION HIDDEN FROM PLAYER? FALSE/TRUE)\n\nEvent Date: (The Event Date)\n(EVENT TITLE AND DESCRIPTION)\n(IS FUNCTION HIDDEN FROM PLAYER? FALSE/TRUE)\n\nEvent Date: (The Event Date)\n(EVENT TITLE AND DESCRIPTION)\n(IS FUNCTION HIDDEN FROM PLAYER? FALSE/TRUE)\n\nIn order of chronological date, so earliest events first, most recent events last. Does not include the initial 'This world before round 1' description.",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",forGameDataVersion:4,forkedFromUID:"e3d36b37-0e2a-4c68-abd2-6ecae1af09ff",updatedAt:0x197be3ba0b3,isPublished:!1,functionBody:"const formatDate = (dateObj) => {\n  if (!dateObj) return '????-??-??';\n  const y = dateObj.year ?? '????';\n  const m = String(dateObj.month ?? '??').padStart(2, '0');\n  const d = String(dateObj.day ?? '??').padStart(2, '0');\n  return `${y}-${m}-${d}`;\n};\n\nlet allEvents = [];\n\nfor (let i = 0; i <= currentRound; i++) {\n  const round = gameData.rounds[String(i)];\n  if (!round) continue;\n\n  const roundStartDate = round.startDate; \n\n  // Add actions by player\n  if (round.actionsByPlayer) {\n    for (const action of round.actionsByPlayer) {\n      let actionDate = roundStartDate ? formatDate(roundStartDate) : '????-??-??';\n      if (action.date && action.date !== \"\") { \n        try { \n          const d = new Date(action.date);\n          actionDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;\n        } catch (e) { /* use default */ }\n      }\n      allEvents.push({\n        date: actionDate,\n        description: action.description\n      });\n    }\n  }\n\n  // Add events between start and end dates\n  if (round.eventsBetweenStartDateAndEndDate) {\n    for (const event of round.eventsBetweenStartDateAndEndDate) {\n      let eventDate = roundStartDate ? formatDate(roundStartDate) : '????-??-??';\n      if (event.date && event.date !== \"\") { \n        try {\n          const d = new Date(event.date);\n          eventDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;\n        } catch (e) { /* use default */ }\n      }\n      allEvents.push({\n        date: eventDate,\n        description: event.description\n      });\n    }\n  }\n}\n\n// Sort events chronologically by date\nallEvents.sort((a, b) => {\n  const dateA = new Date(a.date);\n  const dateB = new Date(b.date);\n  return dateA - dateB;\n});\n\nlet result = '';\nfor (const event of allEvents) {\n  result += `Event Date: ${event.date}\\n`;\n  result += `${event.description}\\n\\n`;\n}\n\nreturn result.trim() || \"No events have happened so far!\";",tags:["Events","Map"],name:"ALL_EVENTS",UID:"9502fe03-7c05-445d-9781-113dff36ae8d"},"ffc9f32e-e409-43ff-b942-83e597efd157":{forkedFromUpdatedAt:0x197be3e0708,forGameDataVersion:6,forkedFromUID:"bc736a32-8865-41f6-b371-5280ef096c92",functionBody:"const currentRoundData = gameData.rounds[String(currentRound)];\n  if (!currentRoundData) return '';\n\n  const countryDescriptions = currentRoundData.countryDescriptions;\n  const mapFeatures = currentRoundData.mapFeatures;\n  const regionNames = gameData.regionNames;\n\n  const countries = Object.keys(countryDescriptions).map(countryName => {\n    const description = countryDescriptions[countryName];\n    const regionsOwned = description.regionsOwned.map(regionId => regionNames[regionId] || regionId);\n    const battalions = Object.values(mapFeatures).filter(feature => feature.ownerName === countryName && feature.type === 'centroid');\n\n    return {\n      name: countryName,\n      regionsOwned: regionsOwned,\n      battalions: battalions.map(b => ({ name: b.name, regionId: b.location.regionID }))\n    };\n  }).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically for consistency\n\n  const majorNations = countries.filter(c => c.regionsOwned.length > 12);\n  const otherNations = countries.filter(c => c.regionsOwned.length <= 12);\n\n  let output = '';\n\n  [...majorNations, ...otherNations].forEach(country => {\n    output += `\\\"${country.name}\\\":\\n`;\n    output += `All Owned Regions:\\n`;\n    if (country.regionsOwned.length > 0) {\n      output += country.regionsOwned.map(r => `\\\"${r}\\\"`).join(', ') + '\\n';\n    } else {\n      output += 'None\\n';\n    }\n    output += `All Battalions:\\n`;\n    if (country.battalions.length > 0) {\n      output += country.battalions.map(b => `\\\"${b.name}\\\" Stationed in the Region of \\\"${regionNames[b.regionId] || b.regionId}\\\"`).join('\\n') + '\\n';\n    } else {\n      output += 'None\\n';\n    }\n    output += '\\n';\n  });\n\n  return output.trim();",isPublished:!1,tags:["Map","Events"],name:"GRAND_MAP_DESCRIPTION",UID:"ffc9f32e-e409-43ff-b942-83e597efd157",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",updatedAt:0x197be3e176e,description:'A List of Every Nation in a Game, the Regions they Own, and then the Battalions they Own. Listing All Nations alphabetically, but also with "Major Nations" listed first, which is defined as Nations which own more than 12 Regions Owned, the "Major Nations" should be alphabetical, then followed by every other country which owns less than 12 regions, in alphabetical As Formatted:\n\n"1ST MAJOR NATION NAME":\nAll Owned Regions:\n"Region1", "Region2", "Region 3", etc\nAll Battalions:\n"Battalion Name" Stationed in the Region of "Region Name"\n\n"2ND MAJOR NATION NAME":\nAll Owned Regions:\n"Region1", "Region2", "Region 3", etc\nAll Battalions:\n"Battalion Name" Stationed in the Region of "Region Name"\n\n"3RD MAJOR NATION NAME":\nAll Owned Regions:\n"Region1", "Region2", "Region 3", etc\nAll Battalions:\n"Battalion Name" Stationed in the Region of "Region Name"\n\nEtc\n\n"1ST NATION NAME":\nAll Owned Regions:\n"Region1", "Region2", "Region 3", etc\nAll Battalions:\n"Battalion Name" Stationed in the Region of "Region Name"\n\n"2ndT NATION NAME":\nAll Owned Regions:\n"Region1", "Region2", "Region 3", etc\nAll Battalions:\n"Battalion Name" Stationed in the Region of "Region Name"\n\nEtc\n\n'},"a0d36e6e-01d2-45c5-9ced-3ae99365dd5c":{UID:"a0d36e6e-01d2-45c5-9ced-3ae99365dd5c",forkedFromUpdatedAt:0x197be4a6434,isPublished:!1,functionBody:"const allActions = [];for (let i = 0; i <= gameData.lastRoundCompleted; i++) {  const round = gameData.rounds[String(i)];  if (round && round.actionsByPlayer) {    allActions.push(...round.actionsByPlayer);  }}let result = '';for (const action of allActions) {  if (action.sourceCountry === gameData.playerCountry) {    const actionDate = action.date || 'Unknown Date';    result += `Action Date: ${actionDate}\\n${action.description}\\n\\n`;  }}return result.trim();",description:"Every Action the Player has ever taken, in an array, chronologically, for example:\n\nAction Date: (The Event Date)\n(Action)\n\nAction Date: (The Event Date)\n(Action)\n\nAction Date: (The Event Date)\n(Action)\n\n",tags:["Events"],forGameDataVersion:4,forkedFromUID:"8cee4e71-1566-43dd-a926-ce2cd252d554",name:"PLAYER_EVERY_ACTION",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",updatedAt:0x197be4a6434},"fc89ed7e-c76e-4199-97e5-554af6955ff0":{UID:"fc89ed7e-c76e-4199-97e5-554af6955ff0",name:"ORIGIN_ROUND_DATE",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",isPublished:!1,forkedFromUpdatedAt:0x197bdb16307,functionBody:'const round = gameData.rounds[String(currentRound)];\nconst d = round?.startDate;\nif (!d) return "????-??-??";\nconst yyyy = d.year ?? "????";\nconst mm   = String(d.month ?? "??").padStart(2, "0");\nconst dd   = String(d.day   ?? "??").padStart(2, "0");\nreturn `${yyyy}-${mm}-${dd}${d.label ? ` ${d.label}` : ""}`;',forGameDataVersion:4,forkedFromUID:"8a3b20b6-0540-4055-a028-192558428069",description:'Returns the current round\'s start date as a formatted string (YYYY-MM-DD AD/BC).\n\nExample output: "1848 AD" or "53 BC"',updatedAt:0x197bdb16307,tags:[]},"aedeb38b-6154-4869-a4e4-b6df87e1ff0d":{functionBody:'const round = optionalData.previousStageResultRoundData;\n\nif (!round) {\n  return "No previous stage result data available in optionalData. Ensure the previous AI stage has successfully completed and provided its output.";\n}\n\nconst allRegionIDs = Object.keys(mapGeometry.geometry);\nconst occupiedRegionNamesSet = new Set();\nconst countriesData = [];\n\nfor (const countryName in round.countryDescriptions) {\n  const country = round.countryDescriptions[countryName];\n  const ownedRegionsHumanReadable = country.regionsOwned.map(id => gameData.regionNames[id] || id).sort();\n  ownedRegionsHumanReadable.forEach(regionName => occupiedRegionNamesSet.add(regionName));\n\n  const battalions = [];\n  for (const featureID in round.mapFeatures) {\n    const feature = round.mapFeatures[featureID];\n    // Only include centroid features (not cities) that are tagged as battalions and owned by the current country\n    if (feature.type === "centroid" && feature.ownerName === countryName && feature.tags && feature.tags.includes("battalion")) {\n        const regionName = gameData.regionNames[feature.location.regionID] || feature.location.regionID;\n        battalions.push(`"${feature.name}" stationed in "${regionName}"`);\n    }\n  }\n  battalions.sort(); // Sort battalions alphabetically\n\n  countriesData.push({\n    name: countryName,\n    regionsOwned: ownedRegionsHumanReadable,\n    battalions: battalions\n  });\n}\n\nconst MAJOR_NATION_THRESHOLD = 12;\nconst majorNations = countriesData\n  .filter(c => c.regionsOwned.length > MAJOR_NATION_THRESHOLD)\n  .sort((a, b) => a.name.localeCompare(b.name));\n\nconst minorNations = countriesData\n  .filter(c => c.regionsOwned.length <= MAJOR_NATION_THRESHOLD)\n  .sort((a, b) => a.name.localeCompare(b.name));\n\nconst output = [];\n\n// Output major nations\nif (majorNations.length > 0) {\n  output.push("--- Major Nations ---");\n  for (const nation of majorNations) {\n    output.push(`"${nation.name}":`);\n    output.push(`All Owned Regions:\\n${nation.regionsOwned.join(", ")}`);\n    output.push(`All Battalions:`);\n    if (nation.battalions.length > 0) {\n      output.push(nation.battalions.join(", "));\n    } else {\n      output.push(`No battalions listed for "${nation.name}"`);\n    }\n    output.push(""); // Add a blank line for separation\n  }\n}\n\n// Output minor nations\nif (minorNations.length > 0) {\n  if (majorNations.length > 0) output.push("--- Minor Nations ---"); // Add separator only if major nations were listed\n  for (const nation of minorNations) {\n    output.push(`"${nation.name}":`);\n    output.push(`All Owned Regions:\\n${nation.regionsOwned.join(", ")}`);\n    output.push(`All Battalions:`);\n    if (nation.battalions.length > 0) {\n      output.push(nation.battalions.join(", "));\n    } else {\n      output.push(`No battalions listed for "${nation.name}"`);\n    }\n    output.push(""); // Add a blank line for separation\n  }\n}\n\n// Unoccupied regions\nconst unoccupiedRegionNames = allRegionIDs\n  .map(id => gameData.regionNames[id] || id) // Convert all region IDs to human-readable names\n  .filter(name => !occupiedRegionNamesSet.has(name)) // Filter out occupied human-readable names\n  .sort();\n\nif (unoccupiedRegionNames.length > 0) {\n  output.push(`--- Unoccupied Regions ---`);\n  output.push(`${unoccupiedRegionNames.join(", ")}`);\n  output.push(""); // Add a trailing blank line for consistency\n}\n\nreturn output.join(\'\\n\');',description:"Generates a comprehensive summary of the game map as it would appear after AI Stage 1 changes are applied. It lists all major and minor nations with their owned regions and stationed battalions. It also includes a list of all currently unoccupied regions.",updatedAt:0x1986d623ecd,tags:[],authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",forGameDataVersion:10,UID:"aedeb38b-6154-4869-a4e4-b6df87e1ff0d",name:"GRAND_MAP_DESCRIPTION_PREVIOUS_STAGE_APPLIED",isPublished:!1,forkedFromUID:"42099fb8-cb3e-4327-80a8-9f95d41295ac",forkedFromUpdatedAt:0x19805844d0a},"d4337f7a-24ac-4e6f-9fc3-e563caa12051":{updatedAt:0x1986d63af08,forkedFromUID:"9026beff-e5e1-4c1e-8f64-41f307d50701",tags:[],name:"PREVIOUS_STAGE_OUTPUT",authorUID:"4LieVl3tgTRjcH5efnEqmnCqPY82",forkedFromUpdatedAt:0x1980625761c,UID:"d4337f7a-24ac-4e6f-9fc3-e563caa12051",functionBody:'return optionalData.previousStageRawOutput || "No raw stage output available";',description:"The raw text output from the AI's previous stage for Jump Forward events.",isPublished:!1,forGameDataVersion:10}}};e.s(["PLACEMENT_DESCRIPTION_CREATE",()=>e$,"PLACEMENT_DESCRIPTION_UPDATE",()=>eL,"generalNotesAboutMakingSchemas",()=>e_,"getDefaultJumpForwardJsonSchema",()=>eG,"notesAboutJumpForwardSchema",()=>eq],812670),e.s(["getMapChangesSchema",()=>eB],826764);var eF=e.i(71829);let eB=(e,t)=>{let a=eF.POINT_SHAPES_KEYS,r=e?.prompts?.jumpForward,n=[...t??[],...[r?.firstStage?.aiModel,r?.secondStage?.aiModel,r?.thirdStage?.aiModel].filter(Boolean)].filter(Boolean).some(e=>e.startsWith("openai/")||"openrouter/polaris-alpha"===e);return{type:"array",description:"Map modifications. Each item MUST use one of the allowed map-change formats.",items:{anyOf:[{type:"object",title:"CreatePolity",properties:{type:{type:"string",enum:["createPolity"]},polity:{type:"object",properties:{name:{type:"string"},additionalNames:{type:"array",items:{type:"string"}},color:{type:"string",description:"CSS-compatible color value."},tags:{type:"array",items:{type:"string"},description:"Optional tags for the polity"},flagQuery:{type:"string",nullable:!0,description:"Optional flag query to use to find the proper flag for the polity. Include the flag name, and how it was/would/could be used (year, country, circumstances) if applicable. If not provided, the flag is not changed."}},propertyOrdering:["name","additionalNames","color","tags","flagQuery"],required:n?["name","additionalNames","color","tags","flagQuery"]:["name","additionalNames","color","tags"],additionalProperties:!1}},propertyOrdering:["type","polity"],required:["type","polity"],additionalProperties:!1},{type:"object",title:"DissolvePolity",properties:{type:{type:"string",enum:["dissolvePolity"]},polityName:{type:"string"}},propertyOrdering:["type","polityName"],required:["type","polityName"],additionalProperties:!1},{type:"object",title:"UpdatePolity",properties:{type:{type:"string",enum:["updatePolity"]},name:{type:"string"},newName:n?{type:"string",nullable:!0,description:"If provided, rename the polity to this value. If null, the name is not changed."}:{type:"string",description:"New name for the polity (if provided)."},color:n?{type:"string",nullable:!0,description:"If provided, set the polity color to this value. If null, the color is not changed."}:{type:"string",description:"New color for the polity (if provided)."},setAdditionalNamesTo:n?{type:"array",items:{type:"string"},nullable:!0,description:"If provided, replace the polity's additional names with this array. If null, additional names are not changed."}:{type:"array",items:{type:"string"},description:"Replace the polity's additional names with this array (if provided)."},newFlagQuery:n?{type:"string",nullable:!0,description:"If provided, describes the new flag to use for the polity. Include the flag name, and how it was/would/could be used (year, country, circumstances) if applicable. If null, the flag is not changed."}:{type:"string",description:"Describes the new flag to use for the polity. Describe the flag to use for the polity, what it looks like, colors, and what context it was used in in real life or alternate history. If not provided, the flag is not changed."}},propertyOrdering:["type","name","newName","color","setAdditionalNamesTo","newFlagQuery"],required:n?["type","name","newName","color","setAdditionalNamesTo","newFlagQuery"]:["type","name"],additionalProperties:!1},{type:"object",title:"CreateMapFeature",properties:{type:{type:"string",enum:["createMapFeature"]},feature:{anyOf:[{type:"object",title:"CentroidFeature",description:"Centroid features mark armies as circles on the map. Recommended to include 'battalion' tag. Only include non-required fields if absolutely necessary to override defaults.",properties:{type:{type:"string",enum:["centroid"]},name:{type:"string"},displaySymbol:{type:"string",enum:[...a],description:"The shape of the feature on the map. Default for batallions is 'circle'."},location:{type:"object",properties:{regionID:{type:"string"}},propertyOrdering:["regionID"],required:["regionID"],additionalProperties:!1},placement:n?{type:"string",nullable:!0,description:e$}:{type:"string",description:e$},color:n?{type:"string",nullable:!0,description:"The color of the feature on the map. If null the owner's color is used."}:{type:"string",description:"The color of the feature on the map (owner's color may be used by default)."},ownerName:{type:"string",nullable:!0,description:"The name of the polity that owns the feature. If null, the feature is made as unowned. If not included, the feature is owned by whomever owns the region it is in (this is recommended for physical places and constructions)."},description:{type:"string"},scale:{type:"number",description:"Size multiplier for the feature (default 1.0)"},labelPlacement:{type:"string",enum:["above","below","left","right","center","noLabel"],description:"Where to place the feature label relative to the symbol. Default is 'noLabel'."},tags:{type:"array",items:{type:"string"},description:"Tags that describe the feature (e.g., 'battalion', 'city', 'fortress')"}},propertyOrdering:["type","name","displaySymbol","location","placement","color","ownerName","description","scale","labelPlacement","tags"],required:["type","name","displaySymbol","location","placement","color","ownerName","description","scale","labelPlacement","tags"],additionalProperties:!1}]}},propertyOrdering:["type","feature"],required:["type","feature"],additionalProperties:!1},{type:"object",title:"UpdateMapFeature",properties:{type:{type:"string",enum:["updateMapFeature"]},name:{type:"string"},properties:{type:"object",properties:{displaySymbol:n?{type:"string",enum:[...a],nullable:!0}:{type:"string",enum:[...a]},location:{anyOf:[{type:"object",properties:{regionID:{type:"string"}},propertyOrdering:["regionID"],required:["regionID"],additionalProperties:!1},{type:"object",description:"Represents a null or no-change value. The AI should output an empty object.",additionalProperties:!1}]},placement:n?{type:"string",nullable:!0,description:eL}:{type:"string",description:eL},color:n?{type:"string",nullable:!0,description:"The color of the feature on the map. If null, the feature's color is not changed."}:{type:"string",description:"The color of the feature on the map. If not provided, the feature's color is not changed."},ownerName:{type:"string",nullable:!0,description:"The name of the polity that owns the feature. If null, the feature is made unowned. If not included, the feature's owner is not changed."},description:n?{type:"string",nullable:!0}:{type:"string"},scale:n?{type:"number",nullable:!0,description:"New size multiplier for the feature (default 1.0)"}:{type:"number",description:"New size multiplier for the feature (default 1.0). If not provided, the size is not changed."},labelPlacement:n?{type:"string",enum:["above","below","left","right","center","noLabel"],description:"Where to place the feature label relative to the symbol",nullable:!0}:{type:"string",enum:["above","below","left","right","center","noLabel"],description:"Where to place the feature label relative to the symbol. If not provided, the label placement is not changed."},tags:n?{type:"array",items:{type:"string"},description:"Tags that describe the feature (e.g., 'battalion', 'city', 'fortress'). If set to null, the tags are not changed.",nullable:!0}:{type:"array",items:{type:"string"},description:"Tags that describe the feature (e.g., 'battalion', 'city', 'fortress'). If not provided, the tags are not changed."}},propertyOrdering:["displaySymbol","location","placement","color","ownerName","description","scale","labelPlacement","tags"],required:n?["displaySymbol","location","placement","color","ownerName","description","scale","labelPlacement","tags"]:[],additionalProperties:!1}},propertyOrdering:["type","name","properties"],required:["type","name","properties"],additionalProperties:!1},{type:"object",title:"RemoveMapFeature",properties:{type:{type:"string",enum:["removeMapFeature"]},name:{type:"string"}},propertyOrdering:["type","name"],required:["type","name"],additionalProperties:!1},{type:"object",title:"TransferRegionOwnership",properties:{type:{type:"string",enum:["transferRegionOwnership"]},transfers:{type:"array",items:{type:"object",properties:{toPolity:{type:"string",nullable:!0,description:"Polity gaining the regions or null if they become unowned."},regionIDs:{type:"array",items:{type:"string"}}},propertyOrdering:["toPolity","regionIDs"],required:["toPolity","regionIDs"],additionalProperties:!1}}},propertyOrdering:["type","transfers"],required:["type","transfers"],additionalProperties:!1}]}}},eU="Optional placement hint within the region. Use '[lng, lat]' for specific coordinates, 'random' for a random point, 'coastal' for coastal regions (places near ocean border), 'west'/'east'/'north'/'south' for directional placement within a region, or 'target X'/'near X' (where X is a map feature, region, or country name) to place nearest to a target (target implies offensive targeting, near has no special meaning besides placement).",e$=`${eU} If null or omitted, uses region centroid.`,eL=`${eU} If null or omitted, placement is not changed.`,eq=`
Notes about the default schema for the jump forward stage:
- This specific schema produces a list of mostly valid simple events. Errors like it producing region names instead of IDs are fixed automatically by default cleanup logic that occurs AFTER the custom cleanup logic.
- The TypeScript \`SimpleEvent\` definition marks some fields (e.g., \`title\`, \`mapChanges\`) as optional for engine flexibility, **but they are still required here** so the LLM always outputs them and subsequent cleanup logic can safely rely on their presence.
- To ensure reliable post-processing, the schema you define must make all fields required. This forces the AI to generate a complete structure for every event. The game engine will later handle fields that are truly optional according to its internal SimpleEvent type definition.
`,e_=`
- Fields cannot be optional.
- The order of fields should be explicitly specified using \`propertyOrdering\`, otherwise they would be ordered alphabetically.
- All fields are marked as required due to limitations of OpenAI's structured output.
- **CRITICAL**: Every property defined in a schema object MUST be included in the \`required\` array, even if the property is \`nullable: true\`. This is a strict requirement from OpenAI's structured output format.
- If you define a property in \`properties\`, it MUST appear in \`required\`. Use \`nullable: true\` to allow null values, but keep the field required.
- The "null" type is not supported by Gemini models. Instead, use \`nullable: true\` on the property.
- Some providers do not support \`maxProperties\`. To require an empty object, use \`additionalProperties: false\` and define no properties.
- The AI is *forced* to follow the schema. You do not need to worry about it producing malformed JSON.
- The returned object must be a parent object with "name", "strict": true, and a "schema" property containing the actual schema.
- If you want to control the number of items in an array, you *cannot* use "items": false. Instead, use minItems and maxItems.
Super simple example:
\`\`\`json
{
  "name": "events",
  "strict": true,
  "schema": {
    "type": "object", // This must ALWAYS be an object.
    "properties": {
      "top level field name": {
        "type": "string", // This can be any valid JSON type. 
        "description": "Description of the field"
      },
      "another top level field name": {
        "type": "string", // This can be any valid JSON type. 
        "description": "Description of the field"
      }
    },
    "propertyOrdering": ["top level field name", "another top level field name"],
    "required": ["top level field name"],
    "additionalProperties": false
  }
}
\`\`\`

would result an an AI response like: 

\`\`\`json
{
  "top level field name": "value",
  "another top level field name": "value"
}
\`\`\`

`,eG=(e,t)=>({name:"events",strict:!0,schema:{type:"object",title:"FlashForwardOutput",description:"Top-level container for all simulated historical events in a Flash Forward phase.",properties:{events:{type:"array",description:"Chronological list of every event that happened between the start and end dates, without omissions.",items:{type:"object",title:"FlashForwardEvent",description:"A single news-worthy event and the map changes it causes.",properties:{date:{type:"string",description:"Date of the event. Use 'YYYY-MM-DD' for AD dates. For BC dates, output 'YYYY-MM-DD BC' (always add the trailing ' BC'; do not use negative years, 'BCE', or include 'AD')."},title:{type:"string",description:"Optional title for the event."},description:{type:"string",description:"Markdown text: A narrative that describes the contents and specifics of the event with bolded sections at text with emphasis. Most events will have a description that is between 30 and 75 words, in some cases the description can be even longer. For events that might be affiliated with a well known quote, include a block quote paragraph for that specific quote. Use > at the start of lines for block quotes. Output quotes at the end. Format quotes as: '> \"quote text\" - speaker name'. Example: '> \"We will prevail!\" - General Patton'"},mapChanges:eB(e,t)},propertyOrdering:["date","title","description","mapChanges"],required:["date","title","description","mapChanges"],additionalProperties:!1}}},propertyOrdering:["events"],required:["events"],additionalProperties:!1}}),eH=e=>{let t=Object.keys(e.templateHelpers||{}).length>0?Object.entries(e.templateHelpers||{}).map(([e,t])=>`Helper: ${t.name}
Description: ${t.description||"No description"}
Function: ${t.functionBody||"No function body"}
Tags: ${t.tags?.join(", ")||"No tags"}
---`).join("\n\n"):"No template helpers available",a=(e,t)=>`***${t}***
[Template]
\`\`\`
${e.template}
\`\`\`
[Schema function]
\`\`\`
${e.schema&&""!==e.schema.trim()?e.schema:"<none>"}
\`\`\`
[Cleanup function]
\`\`\`
${e.cleanup?.function&&""!==e.cleanup.function.trim()?e.cleanup.function:"<none>"}
\`\`\`
[Enabled]
${e.enabled}`,r=a(e.firstStage,"First stage"),n=e.secondStage?a(e.secondStage,"Second stage"):"Second stage: <not configured>",s=e.thirdStage?a(e.thirdStage,"Third stage"):"Third stage: <not configured>";return`Available template helpers:
${t}

${r}

${n}

${s}`},ez={name:"cleanupSuggestion",strict:!0,schema:{type:"object",properties:{reasoning:{type:"string",description:"Why the proposed cleanup is appropriate, why request/cleanup is impossible, or why something is unclear, etc. The user who reads this is probably not a developer so write in a way that is easy to understand. You should style this as markdown."},functionBody:{type:["string","null"],description:"JS (not ts) code for the body of the cleanup function or null if no change is recommended."}},required:["reasoning","functionBody"],additionalProperties:!1}};function eJ({isOpen:e,promptKey:d,stageKey:c,stage:p,fullPrompt:m,onClose:h,onStageChange:g}){let{t:f}=(0,C.useTranslations)("promptEditing","edit"),[y,b]=(0,a.useState)(""),[v,w]=(0,a.useState)([]),[S,j]=(0,a.useState)(!1),D=(0,a.useRef)(null),N=(0,U.useQueryClient)(),T=async()=>{let e,t=y.trim();if(S)return;let a=[...v];if(0===a.length)e=`
--------------------------------
Your overall goals 
--------------------------------
You are updating a *javascript cleanup function* for the Pax Historia strategy game.

--------------------------------
Explaining the input data 
--------------------------------
The cleanup function body you write will be injected as:
function yourFunction(gameData: SimpleGame, mapGeometry: MapGeometry, currentRound: number, optionalData: OptionalData, language: string, isBeta: boolean) {/* body */}
Sample gameData object:
${JSON.stringify(L.default,null,2)}

Game data type definition:
${q}

MapGeometry type definition:
${_}

OptionalData type definition:
${G}

Additional top-level variables:
${H}

--------------------------------
Complete prompt configuration
--------------------------------
Here is the complete configuration of the Jump-Forward pipeline you are working with:

<COMPLETE_PROMPT>
${eH(m)}
</COMPLETE_PROMPT>

--------------------------------
Stage-specific optionalData availability
--------------------------------
You are building a cleanup function for the **${c}**.

--------------------------------
Example walkthrough: from bad input -> cleaned event
--------------------------------
Lets say a user has an AI schema function like: 
${eM.toString()}
Before this cleanup function is called, another function iterates through each "event" contained in \`rawStageOutput\` and calls this cleanup function with that event provided as \`optionalData.rawEventString\`.
Therefore, your cleanup function will receive the (stringified) object of ONE particular event. For example:
{
    date_string: "1 January 1800", // wrong format
    narrative: "**TEXAS INDEPENDENCE**
Texas declares independence ...",
    map_changes: [
        {
            type: "CREATE_POLITY", // wrong casing
            name: "Republic of Texas",
            aliases: ["Texas"],
            colour: "#800000", // British spelling
        },
    ],
}
And so you would return something like this (your code would be longer, but this is just a dummy demonstration):
{
    reasoning: "• Renamed \`date_string\` ➜ \`date\` and normalised format
• Merged \`narrative\` ➜ \`description\`
• Converted \`map_changes\` ➜ \`mapChanges\` and fixed inner casing/spelling",
    functionBody: \`// Convert rawEventString (string) to object
    const raw = JSON.parse(optionalData.rawEventString);

    // Normalise date to YYYY-MM-DD
    const date = new Date(raw.date_string);

    const event = {
        date: date.toISOString().slice(0, 10),
        description: raw.narrative,
        mapChanges: raw.map_changes.map(mc => ({
            type: "createPolity",
            polity: {
                name: mc.name,
                additionalNames: mc.aliases,
                color: mc.colour,
            },
        })),
};

return JSON.stringify(event);\`

--------------------------------    
Explaining the output format
--------------------------------
To be specific, the event you return must return a single SimpleEvent object as described in the gamedata types defitions

Here's an array of example events with allowed map changes like the type your function should return:
${JSON.stringify(eR,null,2)}

--------------------------------
Final notes:
--------------------------------
- For map changes in your output events, it is fine to return region names instead of region IDs. Region names are automatically converted to IDs on events returned by cleanup functions.
- If the user has no schema set, no custom cleanup is needed. The game will use a fallback schema and cleanup function instead. 
- If a field in structured output has an ambiguous relation to the game state (e.g. if the AI outputs batallion objects that just have a region and no other information), you'll need to assume a default shape for map features etc, communicate these assumptions in your reasoning.
- If making a cleanup function requires so many assumptions that it is impossible to write one for now, just ask for more information from the user and outline their options.
- Your cleanup function must be **defensive and must never throw**.  
  • Always guard against missing or non-array \`mapChanges\` (e.g. \`const mapChanges = Array.isArray(rawEvent.mapChanges) ? rawEvent.mapChanges : []\`).  
  • Wrap parsing and transformation logic inside a \`try/catch\`. If anything goes wrong, catch the error and simply return the raw event unchanged (still stringified) instead of throwing - this guarantees the game UI never crashes.  
  • Always return a value produced by \`JSON.stringify(finalEvent)\`. Never return a plain object, number, or any other non-string value.  
  • Keep unknown properties that are already valid according to the **SimpleEvent** interface; drop or rename only those that are clearly invalid or redundant.

--------------------------------
Now for your task
--------------------------------
If the user currently has a schema set, it is below:
${p.schema&&""!==p.schema?p.schema:"<THE USER HAS NO SCHEMA SET (default schema will be used and cleanup function is unnecessary)>"}

Their existing cleanup function (which may be invalid or empty) is:
${!p.cleanup?.function||""===p.cleanup.function?"<none>":p.cleanup.function}

${t?"Comment / question from the user:\n"+t:""}

`;else e=t;a.push({sender:"user",display:t,content:e}),w(a),b(""),j(!0);try{let e=a.map(e=>{let t="user"===e.sender?"user message":"assistant response";return`<${t}>${e.content}</${t}>`}).join("\n\n"),t={enabled:!0,template:e,aiModel:"google/gemini-2.5-flash",maxThinkingTokens:8192,schema:JSON.stringify(ez)},r=(await (0,$.default)({queryClient:N,simpleGame:L.default,promptKey:"helper",stage:t,parsedPrompt:e,roundNumber:0,parsedJsonSchemaString:JSON.stringify(ez)})).getReader(),n=new TextDecoder,s="";for(;;){let{value:e,done:t}=await r.read();if(t)break;e&&(s+=n.decode(e,{stream:!0}))}s+=n.decode(),r.releaseLock();let i=JSON.parse(s.trim()),o=i.reasoning,l=i.functionBody??null,d=`${o}${l?`

Proposed cleanup function:
${l}`:""}`;a.push({sender:"assistant",display:o,content:d,functionBody:l}),w([...a])}catch(e){console.error("AI generation failed",e),alert("AI generation failed")}finally{j(!1)}},I=()=>{let e=[...v].reverse().find(e=>"assistant"===e.sender&&e.functionBody);e&&e.functionBody&&(g({...p,cleanup:{...p.cleanup??{applyTo:"entireOutput"},function:e.functionBody}}),h())};return((0,a.useEffect)(()=>{D.current&&D.current.scrollIntoView({behavior:"smooth"})},[v]),e)?"jumpForward"!==d?(0,t.jsx)(n.Modal,{isOpen:e,onClose:h,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:f?.aiAssistantCleanup("AI Assistant - Cleanup Function")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)("div",{className:"text-warning-600 py-8 text-center",children:f?.underConstruction("This feature is under construction for this prompt. Please check back later.")})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsx)(r.Button,{variant:"light",onPress:h,children:"Close"})})]})}):(0,t.jsx)(n.Modal,{isOpen:e,onClose:h,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:f?.aiAssistantCleanup("AI Assistant - Cleanup Function")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)("div",{className:"flex h-[60vh] flex-col gap-4",children:[(0,t.jsx)(F.ScrollShadow,{className:"flex-1 overflow-y-auto rounded-sm p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[0!==v.length||S?v.map((e,a)=>(0,t.jsx)("div",{className:`mb-2 max-w-[85%] ${"user"===e.sender?"self-end":"self-start"}`,children:(0,t.jsx)(u.Card,{className:`p-3 ${"user"===e.sender?"bg-primary-500 text-white":"bg-default-100"}`,children:"assistant"===e.sender?(0,t.jsxs)("div",{className:"markdown-content text-sm",children:[(0,t.jsx)(eO.default,{children:e.display}),e.functionBody&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("hr",{className:"my-2"}),(0,t.jsx)("pre",{className:"bg-default-50 max-h-60 overflow-auto rounded-sm p-2 text-sm whitespace-pre-wrap",children:e.functionBody}),a===v.length-1&&(0,t.jsxs)("div",{className:"mt-2 flex gap-2",children:[(0,t.jsx)(r.Button,{color:"success",size:"sm",onPress:I,children:f?.approveAndApply("Approve & Apply")}),(0,t.jsx)(r.Button,{color:"danger",variant:"flat",size:"sm",onPress:()=>{},children:f?.reject("Reject")})]})]})]}):(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e.display})})},a)):(0,t.jsx)("div",{className:"py-4 text-center text-gray-500 italic",children:f?.describeCleanupChangeToStart("Describe the cleanup change you want to get started.")}),S&&(0,t.jsxs)("div",{className:"flex items-center gap-2 py-2 text-sm text-gray-500",children:[(0,t.jsx)(B.Spinner,{size:"sm"})," ",f?.generating("Generating...")]}),(0,t.jsx)("div",{ref:D})]})}),v.length>1&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(r.Button,{size:"sm",variant:"light",onPress:()=>{v.length<=1||w([])},children:f?.clearHistory("Clear history")})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(x.Textarea,{fullWidth:!0,placeholder:f?.optionalCommentsPlaceholder("Optional comments or questions for the assistant")??"Optional comments or questions for the assistant",value:y,onChange:e=>b(e.target.value),minRows:1,maxRows:4,isDisabled:S,classNames:{input:"py-1"}}),(0,t.jsx)(r.Button,{color:"primary",className:"h-11",onPress:T,isDisabled:S,children:S?(0,t.jsx)(B.Spinner,{size:"sm",color:"white"}):f?.askAssistant("Ask assistant")})]})]})}),(0,t.jsx)(o.ModalFooter,{})]})}):null}let eK={name:"cleanupSuggestion",strict:!0,schema:{type:"object",properties:{reasoning:{type:"string",description:"Why the proposed schema is appropriate, why request/schema is impossible, or why something is unclear, etc. The user who reads this is probably not a developer so write in a way that is easy to understand. You should style this as markdown."},functionBody:{type:["string","null"],description:"JS (not ts) code for the body of the cleanup function or null if no change is recommended."}},required:["reasoning","functionBody"],additionalProperties:!1}};function eW({isOpen:e,promptKey:d,stageKey:c,stage:p,fullPrompt:m,onClose:h,onStageChange:g}){let{t:f}=(0,C.useTranslations)("promptEditing","edit"),[y,b]=(0,a.useState)(""),[v,w]=(0,a.useState)([]),[S,j]=(0,a.useState)(!1),D=(0,a.useRef)(null),N=(0,U.useQueryClient)(),T=async()=>{let e,t=y.trim();if(S)return;let a=[...v];if(0===a.length){let a;a=JSON.stringify(eG(L.default),null,2),e=`
--------------------------------
Your overall goals
--------------------------------
You are updating a **JavaScript function body** that returns a JSON *string* defining the Structured-Output schema used by Pax Historia during the Jump-Forward phase.

--------------------------------
Explaining the input data
--------------------------------
The function you write will be injected as:
function schemaFunction(gameData: SimpleGame, mapGeometry: MapGeometry, currentRound: number, optionalData: OptionalData, language: string, isBeta: boolean) {/* body */}
Sample gameData object:
${JSON.stringify(L.default,null,2)}

--------------------------------
Explaining the existing schema
--------------------------------
Below is the **compiled default schema** that is used when no custom schema is provided. Use this as a starting point or inspiration - it is perfectly valid and complete but may need tweaks based on the user's request.
${a}

--------------------------------
Notes about the default jump forward schema
--------------------------------
${eq} 

--------------------------------
Notes about making schemas
--------------------------------
${e_}

--------------------------------
Relevant type definitions
--------------------------------
Game data type definitions:
${q}

MapGeometry type definition:
${_}

OptionalData type definition:
${G}

Additional top-level variables:
${H}

--------------------------------
Complete prompt configuration
--------------------------------
Here is the complete configuration of the Jump-Forward pipeline you are working with:

<COMPLETE_PROMPT>
${eH(m)}
</COMPLETE_PROMPT>

--------------------------------
Stage-specific context
--------------------------------
You are building a schema function for the **${c}**.

--------------------------------
Current schema function (if any)
--------------------------------
${p.schema&&""!==p.schema.trim()?p.schema:"<none - a brand-new schema is required>"}

--------------------------------
Example walkthrough: from user request → assistant response
--------------------------------
If the user asked you to “Allow coordinate-based \`createMapFeature\` objects for marking capitals”, and the current schema lacked that option, you might respond with JSON like:
${JSON.stringify({reasoning:"Added support for 'coordinate' based createMapFeature objects so the AI can mark city locations. Also exposed optional 'tags' for CentroidFeature.",functionBody:"return JSON.stringify({ /* your updated schema object here */ }, null, 2);"},null,2)}

--------------------------------
Final instructions
--------------------------------
1. The only requirement for your output schema is that at the top level it MUST be an array of objects. 
2. If your output schema doesn't follow the existing types for map changes and events (such as extra fields, or different field names, etc), you should guide the user that they need a custom cleanup function. This is located in the tab to the right of this one.

--------------------------------
User request
--------------------------------
${t??"<no additional comments>"}
`}else e=t;a.push({sender:"user",display:t,content:e}),w(a),b(""),j(!0);try{let e=a.map(e=>{let t="user"===e.sender?"user message":"assistant response";return`<${t}>${e.content}</${t}>`}).join("\n\n"),t={enabled:!0,template:e,aiModel:"google/gemini-3-flash-preview",maxThinkingTokens:8192,schema:JSON.stringify(eK)},r=(await (0,$.default)({queryClient:N,simpleGame:L.default,promptKey:"helper",stage:t,parsedPrompt:e,roundNumber:0,parsedJsonSchemaString:JSON.stringify(eK)})).getReader(),n=new TextDecoder,s="";for(;;){let{value:e,done:t}=await r.read();if(t)break;e&&(s+=n.decode(e,{stream:!0}))}s+=n.decode(),r.releaseLock();let i=JSON.parse(s.trim()),o=i.reasoning,l=i.functionBody??null,d=`${o}${l?`

Proposed schema function:
${l}`:""}`;a.push({sender:"assistant",display:o,content:d,functionBody:l}),w([...a])}catch(e){console.error("AI generation failed",e),alert("AI generation failed")}finally{j(!1)}},I=()=>{let e=[...v].reverse().find(e=>"assistant"===e.sender&&e.functionBody);e&&e.functionBody&&(g({...p,schema:e.functionBody}),h())};return((0,a.useEffect)(()=>{D.current&&D.current.scrollIntoView({behavior:"smooth"})},[v]),e)?"jumpForward"!==d?(0,t.jsx)(n.Modal,{isOpen:e,onClose:h,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:f?.aiAssistantOutputStructure("AI Assistant - Output Structure Function")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)("div",{className:"text-warning-600 py-8 text-center",children:f?.underConstruction("This feature is under construction for this prompt. Please check back later.")})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsx)(r.Button,{variant:"light",onPress:h,children:"Close"})})]})}):(0,t.jsx)(n.Modal,{isOpen:e,onClose:h,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:f?.aiAssistantOutputStructure("AI Assistant - Output Structure Function")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)("div",{className:"flex h-[60vh] flex-col gap-4",children:[(0,t.jsx)(F.ScrollShadow,{className:"flex-1 overflow-y-auto rounded-sm p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[0!==v.length||S?v.map((e,a)=>(0,t.jsx)("div",{className:`mb-2 max-w-[85%] ${"user"===e.sender?"self-end":"self-start"}`,children:(0,t.jsx)(u.Card,{className:`p-3 ${"user"===e.sender?"bg-primary-500 text-white":"bg-default-100"}`,children:"assistant"===e.sender?(0,t.jsxs)("div",{className:"markdown-content text-sm",children:[(0,t.jsx)(eO.default,{children:e.display}),e.functionBody&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("hr",{className:"my-2"}),(0,t.jsx)("pre",{className:"bg-default-50 max-h-60 overflow-auto rounded-sm p-2 text-sm whitespace-pre-wrap",children:e.functionBody}),a===v.length-1&&(0,t.jsxs)("div",{className:"mt-2 flex gap-2",children:[(0,t.jsx)(r.Button,{color:"success",size:"sm",onPress:I,children:f?.approveAndApply("Approve & Apply")}),(0,t.jsx)(r.Button,{color:"danger",variant:"flat",size:"sm",onPress:()=>{},children:f?.reject("Reject")})]})]})]}):(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e.display})})},a)):(0,t.jsx)("div",{className:"py-4 text-center text-gray-500 italic",children:f?.describeOutputStructureToStart("Describe the desired output structure to get started.")}),S&&(0,t.jsxs)("div",{className:"flex items-center gap-2 py-2 text-sm text-gray-500",children:[(0,t.jsx)(B.Spinner,{size:"sm"})," ",f?.generating("Generating...")]}),(0,t.jsx)("div",{ref:D})]})}),v.length>1&&(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)(r.Button,{size:"sm",variant:"light",onPress:()=>{v.length<=1||w([])},children:f?.clearHistory("Clear history")})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(x.Textarea,{fullWidth:!0,placeholder:f?.optionalCommentsPlaceholder("Optional comments or questions for the assistant")??"Optional comments or questions for the assistant",value:y,onChange:e=>b(e.target.value),minRows:1,maxRows:4,isDisabled:S,classNames:{input:"py-1"}}),(0,t.jsx)(r.Button,{color:"primary",className:"h-11",onPress:T,isDisabled:S,children:S?(0,t.jsx)(B.Spinner,{size:"sm",color:"white"}):f?.askAssistant("Ask assistant")})]})]})}),(0,t.jsx)(o.ModalFooter,{})]})}):null}let eY=`
// This function returns a JSON string that defines the structured output schema
// for grading three evaluation questions. It now wraps the actual JSON Schema
// inside an object containing a name and description as required by the AI
// provider.
const schemaDefinition = {
  type: "object",
  propertyOrdering: ["overallScore", "grades"],
  properties: {
    overallScore: {
      type: "number",
      minimum: 0,
      maximum: 1
    },
    grades: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        propertyOrdering: ["questionTitle", "grade", "reasonForGrade", "eventSubGrades"],
        properties: {
          questionTitle: { type: "string" },
          grade: { type: "number", minimum: 0, maximum: 1 },
          reasonForGrade: { type: "string" },
          eventSubGrades: {
            type: "array",
            minItems: 0,
            items: {
              type: "object",
              propertyOrdering: ["eventGraded", "grade", "reasonForGrade"],
              properties: {
                eventGraded: { type: "object" }, // SimpleEvent object expected
                grade: { type: "number", minimum: 0, maximum: 1 },
                reasonForGrade: { type: "string" }
              },
              required: ["eventGraded", "grade", "reasonForGrade"]
            }
          }
        },
        required: ["questionTitle", "grade", "reasonForGrade", "eventSubGrades"]
      }
    }
  },
  required: ["overallScore", "grades"]
};

const wrappedSchema = {
  name: "grade_auto_jump_forward_three_question_schema",
  description: "Structured output schema for grading three evaluation questions in Auto Jump Forward.",
  schema: schemaDefinition
};

return JSON.stringify(wrappedSchema, null, 2);
`,eQ=`
// This cleanup function converts the raw AI output (stored in
// optionalData.entireAIResponseBeforeCleanup) into a valid GradesCleanupFunctionResponse.
// It calculates an overallScore as the average of the three question grades
// and ensures each grade object has the required fields, including eventSubGrades.
try {
  const raw = optionalData.entireAIResponseBeforeCleanup;
  const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;

  // Sanity-check the grades array
  const incomingGrades = Array.isArray(parsed.grades) ? parsed.grades : [];

  // Normalise grades, clamp values and ensure eventSubGrades is an array
  const grades = incomingGrades.slice(0, 3).map(g => ({
    questionTitle: String(g.questionTitle ?? ''),
    grade: Math.min(1, Math.max(0, Number(g.grade) ?? 0)),
    reasonForGrade: String(g.reasonForGrade ?? ''),
    eventSubGrades: Array.isArray(g.eventSubGrades) ? g.eventSubGrades : []
  }));

  // If fewer than 3 grades, pad with defaults so schema remains valid
  while (grades.length < 3) {
    grades.push({
      questionTitle: 'Missing Question ' + (grades.length + 1),
      grade: 0,
      reasonForGrade: 'Missing grade data - defaulted to 0.',
      eventSubGrades: []
    });
  }

  const overallScore = grades.reduce((sum, g) => sum + g.grade, 0) / grades.length;

  return JSON.stringify({ overallScore, grades });
} catch (err) {
  // On error, return a zeroed-out result so the pipeline never throws
  return JSON.stringify({ overallScore: 0, grades: [
    { questionTitle: 'Error', grade: 0, reasonForGrade: String(err), eventSubGrades: [] }
  ] });
}
`,eV={promptSource:null,promptKey:"gradeAutoJumpForward",templateHelpers:{"helper-game-events":{UID:"helper-game-events",name:"GAME_EVENTS",description:"Returns a text description of the game events.",authorUID:"fixture",isPublished:!1,forGameDataVersion:0,tags:[],functionBody:"//some complex js logic here to turn events into nicely formatted strings with dates';",updatedAt:Date.now()},"helper-response-to-grade":{UID:"helper-response-to-grade",name:"RESPONSE_TO_GRADE",description:"Returns the raw response we are grading from optionalData.rawResponseToGrade.",authorUID:"fixture",isPublished:!1,forGameDataVersion:0,tags:[],functionBody:"return optionalData.rawResponseToGrade ?? '';",updatedAt:Date.now()},"helper-previous-stage-output":{UID:"helper-previous-stage-output",name:"PREVIOUS_STAGE_OUTPUT",description:"Returns the raw output from the previous stage.",authorUID:"fixture",isPublished:!1,forGameDataVersion:0,tags:[],functionBody:"return optionalData.previousStageRawOutput ?? '';",updatedAt:Date.now()}},firstStage:{enabled:!0,aiModel:"google/gemini-2.0-flash-lite-001",maxThinkingTokens:1e3,maxOutputTokens:1e3,template:"return You are a grader for Auto Jump Forward.\nConsider the following game events:\n${GAME_EVENTS}\n\nResponse to grade:\n${RESPONSE_TO_GRADE}\n\nEvaluate the response on the following criteria: Historical Plausibility, Map Change Quality, Adherence to Output Schema.\nProvide your grades as JSON following the supplied schema.",schema:eY,cleanup:void 0},secondStage:{enabled:!0,aiModel:"google/gemini-2.0-flash-lite-001",maxThinkingTokens:500,maxOutputTokens:1e3,template:"return You are refining grades generated by another AI.\nHere are the game events:\n${GAME_EVENTS}\n\nOriginal response:\n${RESPONSE_TO_GRADE}\n\nInitial grades:\n${PREVIOUS_STAGE_OUTPUT}\n\nPlease correct any errors and ensure the JSON strictly follows the schema.",schema:eY,cleanup:{function:eQ,applyTo:"entireOutput"}}},eX={name:"pipelineFinisherSuggestion",strict:!0,schema:{type:"object",properties:{reasoning:{type:"string",description:"Why the proposed changes are required and how they solve validity issues. Write in a way that is easy to understand for non-developers."},stageChanges:{type:"object",description:"Changes to apply to different stages. Only include stages that need changes.",properties:{firstStage:{type:"object",description:"Changes to the first stage. Only include if changes are needed.",properties:{schemaFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the schema function, if needed. Omit if unchanged."},cleanupFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the cleanup function, if needed. Omit if unchanged."},template:{type:["string","null"],description:"Updated template string, if needed. Omit if unchanged."},enabled:{type:["boolean","null"],description:"Updated enabled status, if needed. Omit if unchanged."}},additionalProperties:!1},secondStage:{type:"object",description:"Changes to the second stage. Only include if changes are needed.",properties:{schemaFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the schema function, if needed. Omit if unchanged."},cleanupFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the cleanup function, if needed. Omit if unchanged."},template:{type:["string","null"],description:"Updated template string, if needed. Omit if unchanged."},enabled:{type:["boolean","null"],description:"Updated enabled status, if needed. Omit if unchanged."}},additionalProperties:!1},thirdStage:{type:"object",description:"Changes to the third stage. Only include if changes are needed.",properties:{schemaFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the schema function, if needed. Omit if unchanged."},cleanupFunctionBody:{type:["string","null"],description:"JS (not ts) code for the body of the cleanup function, if needed. Omit if unchanged."},template:{type:["string","null"],description:"Updated template string, if needed. Omit if unchanged."},enabled:{type:["boolean","null"],description:"Updated enabled status, if needed. Omit if unchanged."}},additionalProperties:!1}},additionalProperties:!1}},required:["reasoning"],additionalProperties:!1}},eZ=({stageChanges:e,stageName:a})=>e?(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsxs)("div",{className:"font-medium text-green-600",children:[a,":"]}),[{key:"schemaFunctionBody",label:"Schema Function",color:"text-green-600"},{key:"cleanupFunctionBody",label:"Cleanup Function",color:"text-blue-600"},{key:"template",label:"Template",color:"text-purple-600"},{key:"enabled",label:"Enabled",color:"text-teal-600"}].map(({key:a,label:r,color:n})=>{let s=e[a];return null==s?null:(0,t.jsxs)("div",{className:"mb-1",children:[(0,t.jsxs)("div",{className:`font-medium ${n}`,children:[r,":"]}),(0,t.jsx)("pre",{className:"overflow-x-auto rounded-sm border bg-white p-2 text-xs",children:"boolean"==typeof s?s.toString():s})]},a)})]}):null;function e0({isOpen:e,promptKey:d,currentPrompt:c,onClose:p,onPromptChange:m}){let{t:h}=(0,C.useTranslations)("promptEditing","edit"),[g,f]=(0,a.useState)(""),[y,b]=(0,a.useState)([]),[v,w]=(0,a.useState)(!1),S=(0,a.useRef)(null),j=(0,U.useQueryClient)(),D=async()=>{let e,t=g.trim();if(v)return;let a=[...y];if(0===a.length)if("jumpForward"===d){let a;a=JSON.stringify(eG(L.default),null,2),e=`
--------------------------------
Your mission
--------------------------------
You are responsible for **finishing** a Jump-Forward structured-output pipeline for the Pax Historia strategy game.
That pipeline has stages with these crucial parts:
- A *template* - defines the function that produces a prompt that the LLM responds to when generating raw events.
- A *schema function* - defines the JSON schema that the LLM must follow when generating raw events.
- A *cleanup function* - post-processes *each* raw event so that it becomes a 100 % valid **SimpleEvent** object.

If *either* component is incomplete, invalid, or missing for the user's current prompt, the entire pipeline fails.
Your job is to analyse the current situation and output **whatever is still missing or malformed** - this may be:
- **only** a new schema function,
- **only** a new cleanup function, **or**
- **both**.
- **nothing at all** - this is perfectly acceptable. When neither component is supplied, Pax Historia automatically falls back to the *default* (known-to-work) schema **and** its accompanying built-in cleanup logic.

--------------------------------
Developer notes about editing prompts
--------------------------------
- The prompt template, schema function, and cleanup function are all Javascript function bodies. You can access template helpers as variables within this code.
- The vast majority of the time, a prompt template should just be a single return statement that returns a string literal accessing helpers.
- However, if the prompt template needs a helper that the user hasn't added yet, you can create them in the template function body before the return statement. For example:
  const importantEvents = (some game data).filter(e => e.isImportant);
  return \`Important events: \${JSON.stringify(importantEvents)}\`;
- This logic can be used in the template, schema function, or cleanup function.
- Helpers are injected as **values**, not callable functions.
- You can safely ignore any unused template helpers.
- Be very careful when using backticks (\`) inside a string literal that is itself wrapped in backticks (for example, in a return statement like: return \` ... another backtick here for some reason ... \`). 
- If you need to include a backtick character inside such a string, you must escape it by using a backslash.

--------------------------------
Reference implementation - *default* schema
--------------------------------
This is the function that returns the default schema that ships with Pax Historia. Use it as inspiration or fall-back.
${a}

--------------------------------
Developer notes about the default jump forward schema
--------------------------------
${eq}

--------------------------------
Notes about making schemas
--------------------------------
${e_}

--------------------------------
Type definitions
--------------------------------
Game data: ${q}

Map geometry: ${_}

Optional data: ${G}

Additional top-level variables:
${H}

--------------------------------
Automatic post-processing after cleanup
--------------------------------
Once your cleanup function has produced a valid **SimpleEvent**, the game engine applies *additional* automated steps:
- Region and polity **names** are resolved to their canonical **internal IDs** (case-insensitive).
- Map changes are enriched with 'regionId', 'countryId', and other derived metadata taken from the current map state.
- Geometry references are validated and colours normalised.

In other words, you can assume convenient inputs (names, hex colours, etc.) - the engine will perform the heavy geographical lifting afterwards. Your cleanup function should instead focus on structural fixes, casing/typo corrections, sensible defaults, and defensive programming.

--------------------------------
Cleanup function invocation details
--------------------------------
For Jump-Forward the engine sets \`cleanup.applyTo = "eachEvent"\`.
Therefore **your cleanup function is executed once per event**, receiving that single event as \`optionalData.rawEventString\`.

--------------------------------
Execution environment & limits
--------------------------------
- Your JavaScript runs inside a Web-Worker sandboxed within an isolated web frame with **no network access**.
- Code is terminated after ~8.5 seconds; make sure to avoid endless loops, but even quite heavy logic is possible.
- Always wrap risky logic in \`try/catch\` and provide safe fallbacks.

--------------------------------
    Contract & output format
--------------------------------
- If you include a function body, it will be injected as:
   function schemaFunction(gameData, mapGeometry, currentRound, optionalData, language, isBeta) { /* your body */ }
   (Analogous for cleanupFunction.)
- IMPORTANT: The **cleanupFunctionBody must return a JSON string** - typically via \`return JSON.stringify(event);\`. Returning an object will break parsing.
- You can supply changes for any combination of stages. Could be none, one, or multiple stages.
- The combination of the (possibly updated) schemas **plus** cleanup functions **must guarantee** that, when the game engine runs, every produced event is a valid **SimpleEvent** *without throwing*.
- Functions **must not** throw. Always wrap risky logic in try/catch and return a sane fallback.
- You don't necessarily need to do all stages in one response if solving the user's request will be a massive undertaking. Instead, you can focus your reasoning on fixing a single stage a time, then later in the conversation move onto another stage. 
- Since this is a conversation, you can also ask the user for clarification (but try your best to solve the user's request yourself first).

--------------------------------
Big picture examples
--------------------------------
*No changes needed*
- You can simply respond with '{"reasoning": "I've reviewed the prompt and it looks good to me."}' - the game will use the existing configuration.

*Only a cleanup function is required*
- Suppose the existing schema outputs 'colour' instead of 'color' for 'createPolity'. You can return JSON containing only a 'cleanupFunctionBody' for the first stage that patches the typo, leaving the schema untouched.

*New schema **and** cleanup are required*
- If the user wants to have the AI make 'cityTransfers' for events. You would provide **both** keys: a 'schemaFunctionBody' exposing the new field, and a 'cleanupFunctionBody' that forwards/defaults it correctly into standard map changes.

*Multiple stages need changes*
- You can provide changes for multiple stages in a single response, with each stage's changes in its own object.

These examples demonstrate the flexibility of the envelope and clarify when each key should be included.

--------------------------------
Example: Two-stage pipeline configuration
--------------------------------
Here's an example of an extremely simple two-stage pipeline to demonstrate how stages can work together:
<EXAMPLE_PROMPT>
${eH(ek)}
</EXAMPLE_PROMPT>
IMPORTANT:
- This was just an *example* of a two-stage pipeline. The user's prompt will likely be different, and *contain more or less or different helpers, different stages, different prompts, etc*.
- Only use helpers that are available in the user's prompt. If you need a helper that is not available, you must create it in the template function body before the return statement.

--------------------------------
Current state of the player's prompt
THIS IS THE THING YOU ARE EDITING (not the example above)
--------------------------------
<USER_PROMPT>
${eH(c)}
</USER_PROMPT>

As a final reminder, the *ONLY* helpers you are allowed to access for the user's functions across stages (without defining them first in the function body) are:
${Object.values(c.templateHelpers||{}).map(e=>`- ${e.name}`).join("\n")}

--------------------------------
User request / additional context
--------------------------------
${t??"<no additional comments>"}

`}else if("gradeAutoJumpForward"===d||"gradeJumpForward"===d)e=`
--------------------------------
Your mission
--------------------------------
You are responsible for **finishing** an Eval-Auto-Jump-Forward structured-output pipeline for the Pax Historia strategy game.
That pipeline has stages with these crucial parts:
- A *template* - defines the function that produces a prompt that the LLM responds to when generating evaluation data.
- A *schema function* - defines the JSON schema that the LLM must follow when generating evaluation data.
- A *cleanup function* - post-processes the evaluation data to ensure it's valid.

If *either* component is incomplete, invalid, or missing for the user's current prompt, the entire pipeline fails.
Your job is to analyse the current situation and output **whatever is still missing or malformed** - this may be:
- **only** a new schema function,
- **only** a new cleanup function, **or**
- **both**.
- **nothing at all** - this is perfectly acceptable when the existing configuration is sufficient.

--------------------------------
Detailed pipeline execution flow
--------------------------------
By default this evaluation pipeline **consists of *two* stages** executed sequentially. Unless requested to make a one stage pipeline, your output **must** conform to this fixed structure.

Stage 1 - Initial grading
1. Your \`template\` function runs via a \`serverSafeEval\`; it returns a **string prompt**.
2. Your \`schemaFunction\` runs via a \`serverSafeEval\`; it returns a **stringified JSON schema**.
3. The app calls the LLM with these values. The raw JSON response is stored in \`previousStageRawOutput\` within optionalData.
4. **No cleanup function is executed for stage 1.**

Stage 2 - Final grading
5. \`optionalData\` for all stage 2 functions includes everything from stage 1 **plus** \`previousStageRawOutput\`.
6. Stage 2 \`template\` and \`schemaFunction\` run via \`serverSafeEval\` just like stage 1.
7. The LLM is called again; its raw JSON response is stored in \`entireAIResponseBeforeCleanup\`.

Cleanup
8. **Only** the stage 2 \`cleanupFunction\` now runs via \`serverSafeEval\`.
9. It receives the usual arguments **and** \`optionalData.entireAIResponseBeforeCleanup\`. It must return a JSON string that parses to a \`GradesCleanupFunctionResponse\` object.
10. The resulting grades are persisted to the database.

Remember:
- There are at most **two** stages. Do **not** add a third stage.
- Stage 1 cleanup is ignored at runtime unless the user requests a one stage pipeline.
- All functions must be deterministic, side-effect free, and wrapped in \`try/catch\` so they **never throw**.
- If the current configuration is already valid, output **no changes**.

--------------------------------
Notes for Writing Schema Functions (CRITICAL)
--------------------------------
${e_}

--------------------------------
Developer notes about editing prompts
--------------------------------
- The prompt template, schema function, and cleanup function are all Javascript function bodies. You can access template helpers as variables within this code.
- The vast majority of the time, a prompt template should just be a single return statement that returns a string literal accessing helpers.
- However, if the prompt template needs a helper that the user hasn't added yet, you can create them in the template function body before the return statement.
- Helpers are injected as **values**, not callable functions.
- You can safely ignore any unused template helpers.
- Be very careful when using backticks (\`) inside a string literal that is itself wrapped in backticks.

--------------------------------
Type definitions
--------------------------------
Game data: ${q}

Map geometry: ${_}

Optional data: ${G}

Grades cleanup function response: ${z}

Additional top-level variables:
${H}

--------------------------------
Execution environment & limits
--------------------------------
- Your JavaScript runs inside an isolated v8 sandbox with **no network access**.
- Code is terminated after ~8.5 seconds; make sure to avoid endless loops, but even quite heavy logic is possible.
- Always wrap risky logic in \`try/catch\` and provide safe fallbacks.

--------------------------------
Contract & output format
--------------------------------
- If you include a function body, it will be injected as:
   function schemaFunction(gameData, mapGeometry, currentRound, optionalData, language, isBeta) { /* your body */ }
   (Analogous for cleanupFunction.)
- Functions **must not** throw. Always wrap risky logic in \`try/catch\` and return a sane fallback.
- At runtime, **only the second stage cleanupFunction is executed**; any first-stage cleanupFunction is ignored unless the user requests a one stage pipeline.
- You can supply changes for any combination of stages. Could be none, one, or multiple stages.
- Since this is a conversation, you can also ask the user for clarification (but try your best to solve the user's request yourself first).

--------------------------------
Example: Two-stage pipeline configuration
--------------------------------
Here's an example of an extremely simple two-stage grading pipeline to demonstrate how stages can work together:
<EXAMPLE_PROMPT>
${eH(eV)}
</EXAMPLE_PROMPT>
IMPORTANT:
- This was just an *example* of a two-stage pipeline. The user's prompt will likely be different and may contain more or fewer helpers, different prompts, etc.
- Only use helpers that are available in the user's prompt. If you need a helper that is not available, you must create it in the template function body before the return statement.

--------------------------------
Current state of the player's prompt
THIS IS THE THING YOU ARE EDITING
--------------------------------
<USER_PROMPT>
${eH(c)}
</USER_PROMPT>

As a final reminder, the *ONLY* helpers you are allowed to access for the user's functions across stages (without defining them first in the function body) are:
${Object.values(c.templateHelpers||{}).map(e=>`- ${e.name}`).join("\n")}

--------------------------------
User request / additional context
--------------------------------
${t??"<no additional comments>"}

`;else e=t;else e=t;a.push({sender:"user",display:t,content:e}),b(a),f(""),w(!0);try{let e=a.map(e=>{let t="user"===e.sender?"user message":"assistant response";return`<${t}>${e.content}</${t}>`}).join("\n\n"),t={enabled:!0,template:e,aiModel:"google/gemini-2.5-pro",maxThinkingTokens:16e3,schema:JSON.stringify(eX)},r=(await (0,$.default)({queryClient:j,simpleGame:L.default,promptKey:"helper",stage:t,parsedPrompt:e,roundNumber:0,parsedJsonSchemaString:JSON.stringify(eX)})).getReader(),n=new TextDecoder,s="";for(;;){let{value:e,done:t}=await r.read();if(t)break;e&&(s+=n.decode(e,{stream:!0}))}s+=n.decode(),r.releaseLock();let i=JSON.parse(s.trim()),o=i.reasoning,l=i.stageChanges;a.push({sender:"assistant",display:o,content:o,stageChanges:l}),b(a)}catch(e){console.error("Error getting AI response:",e),a.push({sender:"assistant",display:"Sorry, I encountered an error. Please try again.",content:"Sorry, I encountered an error. Please try again."}),b(a)}finally{w(!1)}},N=(e,t)=>{void 0!==t.schemaFunctionBody&&null!==t.schemaFunctionBody&&(e.schema=t.schemaFunctionBody),void 0!==t.cleanupFunctionBody&&null!==t.cleanupFunctionBody&&(e.cleanup={...e.cleanup??{applyTo:"entireOutput"},function:t.cleanupFunctionBody}),void 0!==t.template&&null!==t.template&&(e.template=t.template),void 0!==t.enabled&&null!==t.enabled&&(e.enabled=t.enabled)};return((0,a.useEffect)(()=>{S.current?.scrollIntoView({behavior:"smooth"})},[y]),e)?"jumpForward"!==d&&"gradeAutoJumpForward"!==d&&"gradeJumpForward"!==d?(0,t.jsx)(n.Modal,{isOpen:e,onClose:p,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:h?.aiAssistantPipeline("AI Assistant - Pipeline Finisher")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsx)("div",{className:"text-warning-600 py-8 text-center",children:h?.underConstruction("This feature is under construction for this prompt. Please check back later.")})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsx)(r.Button,{variant:"light",onPress:p,children:"Close"})})]})}):(0,t.jsx)(n.Modal,{isOpen:e,onClose:p,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:h?.aiAssistantPipeline("AI Assistant - Pipeline Finisher")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)("div",{className:"flex h-[60vh] flex-col gap-4",children:[(0,t.jsx)(F.ScrollShadow,{className:"flex-1 overflow-y-auto rounded-sm p-4",children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[0!==y.length||v?y.map((e,a)=>(0,t.jsxs)(u.Card,{className:`p-3 ${"user"===e.sender?"ml-8":"mr-8"}`,children:[(0,t.jsx)("div",{className:"flex items-start gap-2",children:(0,t.jsx)("div",{className:"min-w-0 text-sm font-medium text-gray-500",children:"user"===e.sender?h?.you("You"):h?.assistant("Assistant")})}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)(eO.default,{children:e.display})}),"assistant"===e.sender&&e.stageChanges&&(0,t.jsxs)("div",{className:"mt-3 rounded-sm bg-gray-50 p-2 text-sm",children:[(0,t.jsx)("div",{className:"mb-1 font-medium",children:h?.proposedChanges("Proposed Changes:")}),e.stageChanges.firstStage&&(0,t.jsx)(eZ,{stageChanges:e.stageChanges.firstStage,stageName:h?.firstStage("First Stage")??"First Stage"}),e.stageChanges.secondStage&&(0,t.jsx)(eZ,{stageChanges:e.stageChanges.secondStage,stageName:h?.secondStage("Second Stage")??"Second Stage"}),e.stageChanges.thirdStage&&(0,t.jsx)(eZ,{stageChanges:e.stageChanges.thirdStage,stageName:h?.thirdStage("Third Stage")??"Third Stage"})]})]},a)):(0,t.jsx)("div",{className:"py-4 text-center text-gray-500 italic",children:h?.describeWhatYouNeedToStart("Describe what you need help with to get started.")}),v&&(0,t.jsx)(u.Card,{className:"mr-8 p-3",children:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(B.Spinner,{size:"sm"}),(0,t.jsx)("span",{className:"text-sm text-gray-500",children:h?.thinking("Thinking...")})]})}),(0,t.jsx)("div",{ref:S})]})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(x.Textarea,{fullWidth:!0,placeholder:h?.describeHelpWithPlaceholder("Describe what you need help with...")??"Describe what you need help with...",value:g,onChange:e=>f(e.target.value),minRows:1,maxRows:4,isDisabled:v,classNames:{input:"py-1"}}),(0,t.jsx)(r.Button,{color:"primary",className:"h-11",onPress:D,isDisabled:v,children:v?(0,t.jsx)(B.Spinner,{size:"sm",color:"white"}):h?.askAssistant("Ask assistant")})]})]})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:()=>{b([]),f("")},children:h?.clearHistory("Clear history")}),(0,t.jsx)(r.Button,{color:"primary",onPress:()=>{let e=y[y.length-1];if(e?.sender==="assistant"&&e.stageChanges){let t={...c};e.stageChanges.firstStage&&(t.firstStage={...t.firstStage},N(t.firstStage,e.stageChanges.firstStage)),e.stageChanges.secondStage&&(t.secondStage?t.secondStage={...t.secondStage}:t.secondStage={...t.firstStage},N(t.secondStage,e.stageChanges.secondStage)),e.stageChanges.thirdStage&&(t.thirdStage?t.thirdStage={...t.thirdStage}:t.thirdStage={...t.firstStage},N(t.thirdStage,e.stageChanges.thirdStage)),m(t),p()}},isDisabled:0===y.length||y[y.length-1]?.sender!=="assistant",children:h?.applyChanges("Apply Changes")})]})]})}):null}function e1({stage:e,stageKey:n,promptKey:s,currentPrompt:i,onStageChange:o,onPromptChange:l,authorizedToEdit:d,includeEnabledToggle:c=!1}){let{t:u}=(0,C.useTranslations)("promptEditing","edit"),[p,h]=a.default.useState("template"),[g,f]=a.default.useState(!1),[y,b]=a.default.useState(!1),[v,w]=a.default.useState(!1),S=t=>{o({...e,...t})},j=d&&(!c||e.enabled),D=()=>{switch(n){case"firstStage":return u?.firstStage("First Stage")??"First Stage";case"secondStage":return u?.secondStage("Second Stage")??"Second Stage";case"thirdStage":return u?.thirdStage("Third Stage")??"Third Stage";default:return"Stage"}};return(0,t.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col gap-4",children:[c&&(0,t.jsx)(eP.Switch,{isSelected:e.enabled,onChange:e=>S({enabled:e.target.checked}),className:"mb-2 self-start",size:"sm",isDisabled:!d,children:u?.enableStage(`Enable ${D()}`,{stage:D()})??`Enable ${D()}`}),("secondStage"===n||"thirdStage"===n)&&("jumpForward"===s||"autoJumpForward"===s)&&e.enabled&&(0,t.jsxs)(eP.Switch,{isSelected:e.perEventProcessing??!1,onChange:e=>S({perEventProcessing:e.target.checked}),className:"mb-2 self-start",size:"sm",isDisabled:!d,children:[u?.perEventProcessing("Per-Event Processing")??"Per-Event Processing",(0,t.jsx)("span",{className:"text-default-400 ml-2 text-xs",children:u?.perEventProcessingDesc("(Run this stage once per event from Stage 1)")??"(Run this stage once per event from Stage 1)"})]}),(0,t.jsxs)(eA,{underline:"active",onAction:e=>h(e),children:[(0,t.jsx)(eS,{isCurrent:"template"===p,children:u?.templateBreadcrumb("Template")??"Template"},"template"),(0,t.jsx)(eS,{isCurrent:"schema"===p,children:u?.outputStructureBreadcrumb("Output Structure")??"Output Structure"},"schema"),(0,t.jsx)(eS,{isCurrent:"ai"===p,children:u?.aiModelBreadcrumb("AI Model")??"AI Model"},"ai"),(0,t.jsx)(eS,{isCurrent:"cleanup"===p,children:u?.cleanupBreadcrumb("Cleanup")??"Cleanup"},"cleanup")]}),(0,t.jsxs)("div",{className:"mt-4 min-h-96 flex-1",children:["template"===p&&(0,t.jsxs)("div",{className:"flex h-full flex-col gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"text-default-800 text-sm font-semibold",children:u?.templateFunction("Template Function")??"Template Function"}),(0,t.jsx)(x.Textarea,{placeholder:"// Write a function that returns a string prompt\n// Example: return `This is round ${currentRound.startDate.year}`;",value:e.template||"",onValueChange:t=>{d&&(!c||e.enabled)&&S({template:t})},minRows:8,maxRows:1e3,className:"h-full font-mono",isReadOnly:!j})]}),(0,t.jsx)(r.Button,{color:"secondary",variant:"flat",onPress:()=>w(!0),isDisabled:!j,children:u?.pipelineAssistant("Pipeline Assistant")??"Pipeline Assistant"})]}),"schema"===p&&(0,t.jsxs)("div",{className:"flex h-full flex-col gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"mt-4 mb-1 text-sm",children:u?.outputStructureFunction("Output Structure Function")??"Output Structure Function"}),(0,t.jsx)(x.Textarea,{placeholder:"Enter function body that returns the desired output structure in stringified JSON format",value:e.schema||"",onValueChange:t=>{d&&(!c||e.enabled)&&S({schema:t})},minRows:8,maxRows:1e3,className:"h-full font-mono",isReadOnly:!j})]}),(0,t.jsx)(r.Button,{color:"secondary",variant:"flat",onPress:()=>w(!0),isDisabled:!j,children:u?.pipelineAssistant("Pipeline Assistant")??"Pipeline Assistant"}),(0,t.jsx)(r.Button,{color:"primary",variant:"flat",onPress:()=>b(!0),isDisabled:!j,children:u?.outputStructureAssistant("Output Structure Assistant")??"Output Structure Assistant"})]}),"ai"===p&&(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(ei.Autocomplete,{label:u?.aiModel("AI Model")??"AI Model",selectedKey:e.aiModel||"",onSelectionChange:t=>{d&&(!c||e.enabled)&&null!==t&&S({aiModel:t})},onInputChange:t=>{d&&(!c||e.enabled)&&S({aiModel:t})},inputValue:e.aiModel||"",allowsCustomValue:!0,isDisabled:!j,children:eE.aiModelOptions.map(e=>(0,t.jsx)(eo.AutocompleteItem,{children:e.label},e.value))}),(0,t.jsx)(m.Input,{type:"number",label:u?.maxThinkingTokens("Max Thinking Tokens")??"Max Thinking Tokens",value:e.maxThinkingTokens?.toString()||"",onChange:t=>{var a;return a=t.target.value,void(d&&(!c||e.enabled)&&S({maxThinkingTokens:Number(a)}))},isReadOnly:!j}),(0,t.jsx)(m.Input,{type:"number",label:u?.maxOutputTokens("Max Output Tokens")??"Max Output Tokens",value:e.maxOutputTokens?.toString()||"",onChange:t=>{var a;return a=t.target.value,void(d&&(!c||e.enabled)&&S({maxOutputTokens:Number(a)}))},isReadOnly:!j})]}),"cleanup"===p&&(0,t.jsxs)("div",{className:"flex h-full flex-col gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"mb-1 text-sm font-medium",children:u?.cleanupFunctionOptional("Cleanup Function (optional)")??"Cleanup Function (optional)"}),(0,t.jsx)(x.Textarea,{placeholder:"// Optionally write a function body that transforms AI output\n// Example: return JSON.parse(response).events;",value:e.cleanup?.function||"",onValueChange:t=>{d&&(!c||e.enabled)&&S({cleanup:{...e.cleanup??{applyTo:"entireOutput"},function:t}})},minRows:8,maxRows:1e3,className:"h-full font-mono",isReadOnly:!j})]}),(0,t.jsx)(r.Button,{color:"secondary",variant:"flat",onPress:()=>w(!0),isDisabled:!j,children:u?.pipelineAssistant("Pipeline Assistant")??"Pipeline Assistant"}),(0,t.jsx)(r.Button,{color:"primary",variant:"flat",onPress:()=>f(!0),isDisabled:!j,children:u?.cleanupFunctionAssistant("Cleanup Function Assistant")??"Cleanup Function Assistant"})]})]}),(0,t.jsx)(eJ,{promptKey:s,stageKey:n,isOpen:g,onClose:()=>f(!1),stage:e,fullPrompt:i,onStageChange:o}),(0,t.jsx)(e0,{promptKey:s,isOpen:v,onClose:()=>w(!1),currentPrompt:i,onPromptChange:l}),(0,t.jsx)(eW,{promptKey:s,stageKey:n,isOpen:y,onClose:()=>b(!1),stage:e,fullPrompt:i,onStageChange:o})]})}function e2({currentPrompt:e,onPromptChange:r,authorizedToEdit:n}){let{t:s}=(0,C.useTranslations)("promptEditing","edit"),i="jumpForward"===e.promptKey||"autoJumpForward"===e.promptKey||e.promptKey.startsWith("grade"),[o,l]=a.default.useState("first"),u=t=>{r({...e,firstStage:t})};return a.default.useEffect(()=>{i||"second"!==o&&"third"!==o||l("first")},[i,o]),(0,t.jsxs)("div",{className:"flex flex-col gap-6 md:flex-row",children:[(0,t.jsx)("div",{className:"bg-default-50 shrink-0 rounded-lg p-4 md:w-80",children:(0,t.jsx)(es,{currentPrompt:e,onPromptChange:r,authorizedToEdit:n})}),(0,t.jsx)("div",{className:"flex min-w-0 flex-1 flex-col gap-4",children:i?(0,t.jsxs)(c.Tabs,{selectedKey:o,onSelectionChange:e=>l(e),color:"primary",variant:"underlined",children:[(0,t.jsx)(d.Tab,{title:s?.firstStage("First Stage")??"First Stage",children:(0,t.jsx)(e1,{stageKey:"firstStage",promptKey:e.promptKey,stage:e.firstStage,currentPrompt:e,onStageChange:u,onPromptChange:r,authorizedToEdit:n})},"first"),(0,t.jsx)(d.Tab,{title:s?.secondStage("Second Stage")??"Second Stage",children:(0,t.jsx)(e1,{stageKey:"secondStage",promptKey:e.promptKey,stage:e.secondStage??e4(),currentPrompt:e,onStageChange:t=>{r({...e,secondStage:t})},onPromptChange:r,authorizedToEdit:n,includeEnabledToggle:!0})},"second"),(0,t.jsx)(d.Tab,{title:s?.thirdStage("Third Stage")??"Third Stage",children:(0,t.jsx)(e1,{stageKey:"thirdStage",promptKey:e.promptKey,stage:e.thirdStage??e4(),currentPrompt:e,onStageChange:t=>{r({...e,thirdStage:t})},onPromptChange:r,authorizedToEdit:n,includeEnabledToggle:!0})},"third")]}):(0,t.jsx)(e1,{stageKey:"firstStage",promptKey:e.promptKey,stage:e.firstStage,currentPrompt:e,onStageChange:u,onPromptChange:r,authorizedToEdit:n})})]})}function e4(){return{enabled:!1,template:"",aiModel:"google/gemini-2.5-flash",maxThinkingTokens:0,maxOutputTokens:0,schema:""}}let e3=(0,a.createContext)(void 0);function e6({children:e}){let[r,n]=(0,a.useState)({}),[s,i]=(0,a.useState)({}),[o,l]=(0,a.useState)({}),d=(0,a.useCallback)((e,t)=>{"first"===e?n(e=>({...e,...t})):"second"===e?i(e=>({...e,...t})):l(e=>({...e,...t}))},[]);return(0,t.jsx)(e3.Provider,{value:{stage1:r,stage2:s,stage3:o,updateResults:d},children:e})}let e5=(e,t)=>({name:"events",strict:!0,schema:{type:"object",title:"FlashForwardOutput",description:"Top-level container for all simulated historical events in a Flash Forward phase.",properties:{events:{type:"array",description:"Chronological list of every event that happened between the start and end dates, without omissions.",items:{type:"object",title:"FlashForwardEvent",description:"A single news-worthy event and the map changes it causes.",properties:{date:{type:"string",description:"Date of the event. Use 'YYYY-MM-DD' for AD dates. For BC dates, output 'YYYY-MM-DD BC' (always add the trailing ' BC'; do not use negative years, 'BCE', or include 'AD')."},title:{type:"string",description:"Optional title for the event."},description:{type:"string",description:"Markdown text: 65-80 word narrative with some bolded sections for emphasis. For events with a well known quote, include a block quote paragraph for a specific quote from the event. Use > at the start of lines for block quotes. Format quotes as: '> \"quote text\" - speaker name'. Example: '> \"We will prevail!\" - General Patton'"},mapChanges:eB(e,t),chat:{type:"object",nullable:!0,description:"CRITICAL: This field value should be null by default. Can ONLY be non null for the single FINAL event of the jump forward sequence.",properties:{title:{type:"string",description:"Concise chat title summarizing the topic (e.g., 'Trade Pact Talks')."},participants:{type:"array",items:{type:"string"},description:"Array of country names that will participate in the chat"},initialMessageSender:{type:"string",description:"Name of the country that sends the first message, a sort of invitation message"},initialMessage:{type:"string",description:"The initial message content"}},propertyOrdering:["title","participants","initialMessageSender","initialMessage"],required:["title","participants","initialMessageSender","initialMessage"],additionalProperties:!1}},propertyOrdering:["date","title","description","mapChanges","chat"],required:["date","title","description","mapChanges","chat"],additionalProperties:!1}}},propertyOrdering:["events"],required:["events"],additionalProperties:!1}});e.s(["getDefaultAutoJumpForwardJsonSchema",0,e5],110435);var e8=e.i(27581),e9=e.i(892204),e7=e.i(415560);function te(e,t){let a=new Map((e.tags??[]).map(e=>[e.text,e]));return t.forEach(e=>{a.has(e.text)||a.set(e.text,e)}),{...e,tags:[...a.values()]}}function tt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ta(e,t,a){switch(e.type){case"createMapFeature":t(e.feature.name);break;case"updateMapFeature":case"removeMapFeature":let r=a.mapFeatures[e.name];r&&t(r.name)}}function tr(e){return"string"==typeof e.type}function tn(e,t){let a={};for(let[e,r]of Object.entries(t.regionData))a[e]=r.name;return e.map(e=>Array.isArray(e.mapChanges)?{...e,mapChanges:e.mapChanges.map(e=>(function(e,t){let a=e=>t[e]??e;if(!tr(e))return e;switch(e.type){case"transferRegionOwnership":return{...e,transfers:e.transfers.map(e=>({...e,regionIDs:e.regionIDs.map(a)}))};case"createMapFeature":if("centroid"===e.feature.type){let t={...e.feature,location:{regionID:a(e.feature.location.regionID)}};return{...e,feature:t}}return e;case"updateMapFeature":if(e.properties&&e.properties.location&&"regionID"in e.properties.location){let t=e.properties.location;return{...e,properties:{...e.properties,location:{regionID:a(t.regionID)}}}}return e;default:return e}})(e,a))}:e)}async function ts(e,t,a,r,n,s){var i,o,l,d;let c,u,p,m=structuredClone(function(e,t){if(!Array.isArray(e.mapChanges))return e;let a=e.mapChanges,r={};for(let[e,a]of Object.entries(t.regionData))r[a.name.toLowerCase()]=e;let n={north:["northern"],northern:["north"],south:["southern"],southern:["south"],east:["eastern"],eastern:["east"],west:["western"],western:["west"],central:["center"],center:["central"]},s=e=>["ocean","sea","city","region","area","zone","territory","province","state","north","northern","south","southern","east","eastern","west","western","new","old","great","greater","lesser","upper","lower","central","center","inner","outer","middle","mid","major","minor","under","around","coast","coastal","islands","island","isle","isles","peninsula","peninsular","archipelago","archipelagos","strait","straits","bay","bays","gulf","gulfs","estuary","estuaries","delta","deltas","river","rivers","lake","lakes","atoll","atolls"].includes(e.toLowerCase()),i=e=>n[e.toLowerCase()]??[e],o=e=>(function(e){let t=e.toLowerCase(),a=r[t];if(a)return[a];let n=t.split(/[\s-]+/);for(let e of n.map(i).reduce((e,t)=>0===e.length?t:e.flatMap(e=>t.map(t=>`${e} ${t}`)),[])){let t=r[e];if(t)return[t]}let o=n.filter(e=>!s(e)).pop();if(!o)return[];let l=[];for(let[e,t]of Object.entries(r)){let a=e.split(/[\s-]+/).filter(e=>!s(e)).pop();a&&a===o&&l.push(t)}return l})(e),l=a.map(e=>{if(!tr(e))return e;switch(e.type){case"transferRegionOwnership":return{...e,transfers:e.transfers.map(e=>({...e,regionIDs:e.regionIDs.flatMap(o)}))};case"createMapFeature":if("centroid"===e.feature.type){let t=o(e.feature.location.regionID);if(t.length){let a={...e.feature,location:{regionID:t[0]}};return{...e,feature:a}}}else e.feature.type;return e;case"updateMapFeature":if(e.properties&&e.properties.location){let t=e.properties.location;if(t&&"regionID"in t){let a=o(t.regionID);if(a.length)return{...e,properties:{...e.properties,location:{regionID:a[0]}}}}}return e;default:return e}});return{...e,mapChanges:l}}(e,t));m&&"string"==typeof m.date&&(m={...m,date:function(e){if(!e)return e??void 0;let t=String(e).trim(),a=t.match(/^(?<sign>-)?(?<year>\d{1,5})-(?<month>\d{1,2})-(?<day>\d{1,2})(?:\s*(?<era>AD|BC|BCE|CE))?$/i);if(!a||!a.groups)return t;let r=a.groups.sign,n=Math.max(1,parseInt(a.groups.year,10)),s=Math.min(12,Math.max(1,parseInt(a.groups.month,10))),i=Math.max(1,parseInt(a.groups.day,10)),o=a.groups.era?a.groups.era.toUpperCase():void 0,l=String(n),d=s.toString().padStart(2,"0"),c=i.toString().padStart(2,"0");return r||"BC"===o||"BCE"===o?`${l}-${d}-${c} BC`:`${l}-${d}-${c}`}(m.date)});let h=(d=m).description?d.date&&!/^-?\d{1,}-\d{2}-\d{2}( (AD|BC))?$/.test(d.date)?{valid:!1,error:`Event date '${d.date}' is not in valid format`}:{valid:!0}:{valid:!1,error:"Event is missing description"};if(!h.valid){let e=`Invalid event metadata - skipping event: ${h.error}`;return console.warn(e),n&&n.push(e),{event:null,updatedState:t}}let g=m.mapChanges||[],f=[],y=t,x={};for(let e of g){let t=await (0,e8.validateMapChange)(e,y,a+1,r,x,s);t.valid&&t.sanitizedChanges?t.sanitizedChanges.forEach(e=>{y=(0,e9.applyMapChange)(y,a+1,e),f.push(e)}):(console.warn(`Invalid map change for event ${m.date??"unknown date"}, of type ${e.type}: ${t.error}`),n&&n.push(`Invalid map change for event ${m.date??"unknown date"}, of type ${e.type}: ${t.error}`))}return m.mapChanges=f,c=function(e,t){let a=[],r=new Set,n=Math.max(...Object.keys(t.rounds).map(e=>Number(e)).filter(e=>!Number.isNaN(e))),s=new Map,i=t.rounds[n].countryDescriptions;Object.entries(t.rounds[n].mapFeatures||{}).forEach(([e,t])=>{let a=(0,e7.getBestValidColorForMapFeature)(t,i);s.set(t.name,{color:a}),e&&e!==t.name&&s.set(e,{color:a})}),e.mapChanges?.forEach(e=>ta(e,e=>{s.has(e)||s.set(e,{color:void 0})},t.rounds[n]));let o=Array.from(s.keys()),l=e=>{if(!s.has(e)||r.has(e))return;r.add(e);let{color:t}=s.get(e);a.push(t?{text:e,color:t}:{text:e})};if(e.title){let t=e.title.toLowerCase();o.forEach(e=>{RegExp(`\\b${tt(e.toLowerCase())}\\b`,"i").test(t)&&l(e)})}if(e.mapChanges?.forEach(e=>ta(e,l,t.rounds[n])),e.description){let t=e.description.toLowerCase();o.forEach(e=>{RegExp(`\\b${tt(e.toLowerCase())}\\b`,"i").test(t)&&l(e)})}return a}(i=m,y),u=function(e,t){let a,r=[],n=new Set,s=(a=Math.max(...Object.keys(t.rounds).map(e=>Number(e)).filter(e=>!Number.isNaN(e))),t.rounds[a]),i=new Map,o=new Set;Object.entries(s.countryDescriptions).forEach(([e,t])=>{o.add(e),i.set(e,{primary:e,color:t.color}),t.additionalNames?.forEach(a=>{o.add(a),i.set(a,{primary:e,color:t.color})})});let l=e=>{let t=i.get(e);!t||n.has(t.primary)||(n.add(t.primary),r.push({text:t.primary,color:t.color}))};if(e.title){let t=e.title.toLowerCase();o.forEach(e=>{RegExp(`\\b${tt(e.toLowerCase())}\\b`,"i").test(t)&&l(e)})}if(e.mapChanges?.forEach(e=>(function(e,t){switch(e.type){case"createPolity":t(e.polity.name),e.polity.additionalNames.forEach(t);break;case"updatePolity":t(e.name),e.newName&&t(e.newName),e.setAdditionalNamesTo?.forEach(t);break;case"dissolvePolity":t(e.polityName);break;case"transferRegionOwnership":e.transfers.forEach(e=>{e.toPolity&&t(e.toPolity)});break;case"createMapFeature":e.feature.ownerName&&t(e.feature.ownerName);break;case"updateMapFeature":e.properties?.ownerName&&t(e.properties.ownerName)}})(e,l)),e.description){let t=e.description.toLowerCase();o.forEach(e=>{RegExp(`\\b${tt(e.toLowerCase())}\\b`,"i").test(t)&&l(e)})}if(e.sourceCountry){let t=r.findIndex(t=>t.text===e.sourceCountry);-1!==t&&r.splice(t,1)}return r}(o=m=te(i,c),y),p=function(e,t){let a=new Set,r=[],n=e=>{!e||a.has(e)||(a.add(e),r.push({text:e}))};if(e.title){let a=e.title.toLowerCase();Object.values(t.regionData).forEach(e=>{!e.name||RegExp(`\\b${tt(e.name.toLowerCase())}\\b`,"i").test(a)&&n(e.name)})}let s=e=>{n(t.regionData[e]?.name)};if(e.mapChanges?.forEach(e=>(function(e,t){switch(e.type){case"transferRegionOwnership":e.transfers.forEach(e=>{e.regionIDs.forEach(t)});break;case"createMapFeature":"centroid"===e.feature.type&&t(e.feature.location.regionID);break;case"updateMapFeature":if(e.properties&&"location"in e.properties){let a=e.properties.location;a&&"object"==typeof a&&"regionID"in a&&t(a.regionID)}}})(e,s)),e.description){let a=e.description.toLowerCase();Object.values(t.regionData).forEach(e=>{!e.name||RegExp(`\\b${tt(e.name.toLowerCase())}\\b`,"i").test(a)&&n(e.name)})}return r}(l=m=te(o,u),y),{event:m=function(e,t,a){if(!e.chat)return e;if(null===(0,e8.validateEventChat)(e.chat,t,a)){let{chat:t,...a}=e;return a}return e}(m=te(l,p),a,y),updatedState:y}}async function ti(e,t,a,r,n,s,i,o,l){let d=e;if(s){let{stageConfig:l,templateHelpers:c,simpleSafeEval:u}=s;if(l.cleanup&&"eachEvent"===l.cleanup.applyTo)try{let s=l.cleanup.function,i=await u(s,c,t,a,n,{rawEventString:JSON.stringify(e),jumpForwardDate:r??void 0,...o});d=JSON.parse(i)}catch(t){let e=`Error running cleanup on event: ${t instanceof Error?t.message:String(t)}`;console.error(e),i&&i.push(e)}}return await ts(d,t,a,n,i,l)}async function to({queryClient:e,gameData:t,roundNumber:a,jumpForwardDate:r,simpleSafeEval:n,mapGeometry:s,stageConfig:i,templateHelpers:o,rawEventFromStage1:l,currentEventIndex:d,totalEventCount:c,previouslyProcessedEvents:u,useAutoJumpForward:p}){let m,h={...r?{jumpForwardDate:r}:{},rawEventString:JSON.stringify(l),currentEventIndex:d,totalEventCount:c,previouslyProcessedEvents:u};if(i.schema)try{let e=await n(i.schema,o,t,a,s,h);m="string"==typeof e?e:JSON.stringify(e)}catch(e){console.warn("[callPerEventAI] Failed to evaluate schema",e)}let g=await n(i.template,o,t,a,s,h);console.log(`🎯 Per-Event Stage 2 Prompt (event ${d+1}/${c})`,{formattedPrompt:g});let f=(await (0,$.default)({queryClient:e,simpleGame:t,promptKey:p?"autoJumpForwardStageTwo":"jumpForwardStageTwo",stage:i,parsedPrompt:g,roundNumber:a,parsedJsonSchemaString:m,optionalData:h})).getReader(),y=new TextDecoder,x="";for(;;){let{done:e,value:t}=await f.read();if(e){let e=y.decode();e&&(x+=e);break}x+=y.decode(t,{stream:!0})}return f.releaseLock(),x}async function tl({eventData:e,gameState:t,jumpFromRound:a,jumpForwardDate:r,simpleSafeEval:n,mapGeometry:s,queryClient:i,stage1Config:o,stage2Config:l,templateHelpers:d,currentEventIndex:c,totalEventCount:u,previouslyProcessedEvents:p,useAutoJumpForward:m}){let h,g,f=e;if(o.cleanup&&"eachEvent"===o.cleanup.applyTo)try{let i=o.cleanup.function,l=await n(i,d,t,a,s,{rawEventString:JSON.stringify(e),...r?{jumpForwardDate:r}:{}});f=JSON.parse(l)}catch(e){console.error("[processEventWithPerEventStage] Error running Stage 1 cleanup",e)}try{h=await to({queryClient:i,gameData:t,roundNumber:a,jumpForwardDate:r,simpleSafeEval:n,mapGeometry:s,stageConfig:l,templateHelpers:d,rawEventFromStage1:f,currentEventIndex:c,totalEventCount:u,previouslyProcessedEvents:p,useAutoJumpForward:m})}catch(e){return console.error(`[processEventWithPerEventStage] Stage 2 AI failed for event ${c+1}, falling back to Stage 1 event`,e),await ts(f,t,a,s)}if(l.cleanup)try{let e=l.cleanup.function,i=await n(e,d,t,a,s,{rawEventString:JSON.stringify(f),perEventAIResponse:h,...r?{jumpForwardDate:r}:{},currentEventIndex:c,totalEventCount:u,previouslyProcessedEvents:p});if(!i||""===i.trim()||"null"===i||"undefined"===i)return console.warn(`[processEventWithPerEventStage] Stage 2 cleanup returned empty for event ${c+1}, falling back to Stage 1 event`),await ts(f,t,a,s);g=JSON.parse(i)}catch(e){return console.error(`[processEventWithPerEventStage] Error running Stage 2 cleanup for event ${c+1}, falling back to Stage 1 event`,e),await ts(f,t,a,s)}else try{g=JSON.parse(h)}catch(e){return console.error(`[processEventWithPerEventStage] Failed to parse Stage 2 AI response for event ${c+1}, falling back to Stage 1 event`,e),await ts(f,t,a,s)}return await ts(g,t,a,s)}async function td({rawEvents:e,gameState:t,jumpFromRound:a,jumpForwardDate:r,mapGeometry:n,cleanupConfig:s,additionalOptionalData:i,perEventStage2Config:o,onEventProcessed:l,baseUrl:d}){let c=[],u=[],p=t;for(let t=0;t<e.length;t++){let m,h=e[t];p=(m=o?await tl({eventData:h,gameState:p,jumpFromRound:a,jumpForwardDate:r,simpleSafeEval:s.simpleSafeEval,mapGeometry:n,queryClient:o.queryClient,stage1Config:s.stageConfig,stage2Config:o.stage2Config,templateHelpers:s.templateHelpers,currentEventIndex:t,totalEventCount:e.length,previouslyProcessedEvents:[...c],useAutoJumpForward:o.useAutoJumpForward}):await ti(h,p,a,r,n,s,u,i,d)).updatedState,m.event&&(c.push(m.event),l?.(m.event,t))}let m=tc(c,a,p);return{events:c,updatedState:p,warnings:u,chats:m}}function tc(e,t,a){let r=new Map;for(let n=0;n<e.length;n++){let s=e[n];if(!s.chat)continue;let i=(0,e8.validateEventChat)(s.chat,t,a);if(!i)continue;let o=i.title??"";r.set(o,{chat:i,eventIndex:n})}let n={},s=0;for(let{chat:e}of r.values())n[`chat_${Date.now()}_${s++}`]=e;return n}e.s(["collectAndDeduplicateChats",()=>tc,"convertRegionIDsToNames",()=>tn,"processEvent",()=>ts,"processEvents",()=>td],342678);var tu=e.i(606368);function tp({stageKey:e,promptKey:n,stage:s,templateHelpers:i,testSettings:o}){let l=(0,U.useQueryClient)(),{stage1:d,stage2:c,updateResults:m}=function(){let e=(0,a.useContext)(e3);if(!e)throw Error("useStageTestContext must be used within StageTestProvider");return e}(),{t:h}=(0,C.useTranslations)("promptEditing","test"),{gameID:f,roundNumber:y,optionalData:x}=o,[w,S]=(0,a.useState)("parse-template"),[j,N]=(0,a.useState)(""),[P,E]=(0,a.useState)(!1),[O,R]=(0,a.useState)(!1),[M,k]=(0,a.useState)(null),[F,B]=(0,a.useState)(""),[L,q]=(0,a.useState)(""),[_,G]=(0,a.useState)([]),[H,z]=(0,a.useState)(1),{data:J,isLoading:K}=(0,T.useSimpleGame)(f??void 0),{data:W}=(0,I.useMapGeometry)(J?.mapGeometryDocumentID),{simpleSafeEval:Y,isLoadingSimpleSafeEval:Q}=(0,A.default)(),V="second"===e?d.cleanupResult??d.aiResponse:"third"===e?c.cleanupResult??c.aiResponse:void 0,X="second"===e?d.processedGameState:"third"===e?c.processedGameState:void 0,Z=(0,a.useMemo)(()=>{if(("second"===e||"third"===e)&&V&&J)try{let e=JSON.parse(V);if(Array.isArray(e.events)){let t=tn(e.events,J),a={...e,events:t};return JSON.stringify(a,null,2)}}catch{}return V},[e,V,J]);(0,a.useEffect)(()=>{("second"===e||"third"===e)&&(N(""),B(""),k(null),q(""),G([]),S("parse-template"))},[Z]);let ee=("second"===e||"third"===e)&&!s.enabled,et=!1;s.cleanup&&("string"==typeof s.cleanup?et=""!==s.cleanup.trim():"string"==typeof s.cleanup.function&&(et=""!==s.cleanup.function.trim()));let ea=et;(0,a.useEffect)(()=>{"parse-template"!==w||!s.template||P||Q||""!==j||er()},[w,s.template,Q,f,y,i,j,x]);let er=(0,a.useCallback)(async()=>{if(s.template&&J&&W&&Y&&f){E(!0),N("");try{let t=void 0!==Z?{...x,previousStageRawOutput:Z}:{...x};if(("second"===e||"third"===e)&&"jumpForward"===n&&X&&null!==y){let a=X.rounds[y+1];a?t.previousStageResultRoundData=a:console.warn(`Round ${y+1} not found in processed game state for stage ${e} template eval.`)}let a=await Y(s.template,i,J,y,W,t);N(a),m(e,{templateResult:a})}catch(e){console.error("Error testing template:",e),N("Error testing template: "+(e instanceof Error?e.message:String(e)))}finally{E(!1)}}},[s.template,i,J,y,W,Y,f,m,e,Z,x,X,n]),en=(0,a.useCallback)(async()=>{if(s.schema&&J&&W&&Y&&f){E(!0),B("");try{let t=void 0!==Z?{...x,previousStageRawOutput:Z}:{...x};if(("second"===e||"third"===e)&&"jumpForward"===n&&X&&null!==y){let a=X.rounds[y+1];a?t.previousStageResultRoundData=a:console.warn(`Round ${y+1} not found in processed game state for stage ${e} schema eval.`)}let a=await Y(s.schema,i,J,y,W,t);B(a),m(e,{schemaResult:a})}catch(e){console.error("Error testing schema:",e),B("Error testing schema: "+(e instanceof Error?e.message:String(e)))}finally{E(!1)}}},[s.schema,i,J,y,W,Y,f,m,e,Z,x,X,n]);(0,a.useEffect)(()=>{"parse-schema"!==w||!s.schema||P||Q||""!==F||en()},[w,s.schema,P,Q,en,F]);let es=async()=>{if(J&&f){R(!0),k(null);try{let t;if(!j){if(await er(),!j&&!P)throw Error("Failed to parse template");if(P)return void R(!1)}if(s.schema)try{let a=void 0!==Z?{...x,previousStageRawOutput:Z}:{...x};if(("second"===e||"third"===e)&&"jumpForward"===n&&X&&null!==y){let e=X.rounds[y+1];e&&(a.previousStageResultRoundData=e)}t=await Y(s.schema,i,J,y,W,a)}catch(e){console.warn("Failed to evaluate schema",e)}if(!t){let e=s.aiModel?[s.aiModel]:void 0;"jumpForward"===n?t=JSON.stringify(eG(J,e)):"autoJumpForward"===n&&(t=JSON.stringify(e5(J,e)))}let a=(await (0,$.default)({queryClient:l,simpleGame:J,promptKey:n,stage:s,parsedPrompt:j,roundNumber:y,parsedJsonSchemaString:t})).getReader(),r=new TextDecoder,o="",d=!0;for(;;){let{done:t,value:n}=await a.read();if(t)break;o+=r.decode(n,{stream:!0}),d&&(R(!1),d=!1),k(o),m(e,{aiResponse:o})}a.releaseLock()}catch(e){console.error("Error fetching AI response",e),k("Error: "+(e instanceof Error?e.message:String(e)))}finally{R(!1)}}},ei=(0,a.useCallback)(async()=>{if(!J||!W||!Y||!f||null===M)return;let t="jumpForward"===n&&"first"===e;if(!ea&&!t){q(M),G([]),m(e,{cleanupResult:M});return}if(s.cleanup||t){E(!0),q("");try{if("jumpForward"===n){let t=(y??0)+1,a=(0,tu.produce)(J,e=>{let a=structuredClone(e.rounds[y??0]);a.completed=!1,a.eventsBetweenStartDateAndEndDate=[],a.actionsByPlayer=[],e.rounds[t]=a}),r=JSON.parse(M),n=r.events||[],o={...x.jumpForwardDate?{jumpForwardDate:x.jumpForwardDate}:{},...("second"===e||"third"===e)&&Z?{previousStageRawOutput:Z}:{}},l=await td({rawEvents:n,gameState:a,jumpFromRound:y??0,jumpForwardDate:x.jumpForwardDate??null,mapGeometry:W,cleanupConfig:{stageConfig:s,templateHelpers:i,simpleSafeEval:Y},additionalOptionalData:o}),d=(0,tu.produce)(l.updatedState,e=>{e.rounds[t].eventsBetweenStartDateAndEndDate=l.events}),c={...r,events:l.events},u=JSON.stringify(c,null,2);q(u),G(l.warnings),m(e,{cleanupResult:u,processedGameState:d,warnings:l.warnings})}else{let t={...x,entireAIResponseBeforeCleanup:M,...("second"===e||"third"===e)&&Z?{previousStageRawOutput:Z}:{}},a="string"==typeof s.cleanup?s.cleanup:s.cleanup?.function,r=await Y(a??"",i,J,y,W,t);q(r),m(e,{cleanupResult:r})}}catch(e){console.error("Error testing cleanup",e),q("Error testing cleanup: "+(e instanceof Error?e.message:String(e)))}finally{E(!1)}}},[s,ea,i,J,y,W,Y,f,M,x,n,e,m,Z]);(0,a.useEffect)(()=>{if(O){let e=setInterval(()=>z(e=>e%3+1),450);return()=>clearInterval(e)}z(1)},[O]);let eo=async()=>{if(M)try{await navigator.clipboard.writeText(M),D.toast.success("AI response copied to clipboard")}catch(e){D.toast.error("Failed to copy AI response")}},el=async()=>{if(j)try{await navigator.clipboard.writeText(j),D.toast.success("Parsed prompt copied to clipboard")}catch(e){D.toast.error("Failed to copy parsed prompt")}},ed="second"===e&&void 0===d.cleanupResult&&void 0===d.aiResponse||"third"===e&&void 0===c.cleanupResult&&void 0===c.aiResponse;return ee?(0,t.jsxs)(u.Card,{className:"flex h-96 flex-col items-center justify-center",children:[(0,t.jsx)(g.CardHeader,{children:h?.stage2Disabled("Stage 2 Disabled")??"Stage 2 Disabled"}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("p",{className:"text-default-600 text-center",children:"This prompt's second stage is disabled. Enable it in the prompt edit tab to run tests."})})]}):(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)(eA,{underline:"active",onAction:e=>S(e),children:[(0,t.jsx)(eS,{isCurrent:"parse-template"===w,children:h?.parsedPrompt("Parsed Prompt")??"Parsed Prompt"},"parse-template"),(0,t.jsx)(eS,{isCurrent:"parse-schema"===w,children:h?.parsedJSONSchema("Parsed JSON Schema")??"Parsed JSON Schema"},"parse-schema"),(0,t.jsx)(eS,{isCurrent:"ai-response"===w,children:h?.aiResponse("AI Response")??"AI Response"},"ai-response"),(0,t.jsx)(eS,{isCurrent:"cleanup"===w,children:h?.cleanup("Cleanup")??"Cleanup"},"cleanup")]}),(0,t.jsx)("div",{className:"mt-4 min-h-96",children:(()=>{if(!f)return(0,t.jsx)("div",{className:"bg-default-50 border-default-200 flex h-96 items-center justify-center rounded-lg border",children:(0,t.jsx)("p",{children:"Select a game to test"})});if(K)return(0,t.jsx)("div",{className:"flex h-96 items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})});if(ed)return(0,t.jsxs)(u.Card,{className:"flex h-96 flex-col items-center justify-center",children:[(0,t.jsx)(g.CardHeader,{children:h?.stage1OutputRequired("Stage 1 output required")??"Stage 1 output required"}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("p",{className:"text-default-600 text-center",children:`Please run Stage 1 (generate the AI response${"second"===e?" and cleanup, if applicable,":""}) before testing Stage 2.`})})]});switch(w){case"parse-template":return(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(r.Button,{color:"primary",onPress:er,isDisabled:P||!f||!J,size:"lg",fullWidth:!0,children:P?"Testing...":h?.testTemplate("Test Template")??"Test Template"})}),P?(0,t.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):j?(0,t.jsxs)(u.Card,{children:[(0,t.jsxs)(g.CardHeader,{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:h?.parsedTemplateResult("Parsed Template Result")??"Parsed Template Result"}),(0,t.jsxs)(r.Button,{variant:"light",size:"sm",className:"text-default-500 hover:text-default-700 h-auto min-w-0 bg-transparent p-1",onPress:el,children:[(0,t.jsx)(v.CopyIcon,{className:"h-3 w-3"}),(0,t.jsx)("span",{className:"sr-only",children:"Copy parsed prompt"})]})]}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:j})})]}):(0,t.jsx)("div",{className:"flex h-full items-center justify-center text-gray-500",children:"No template result available"})]});case"parse-schema":return(0,t.jsx)("div",{className:"flex flex-col gap-4",children:s.schema?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(r.Button,{color:"primary",onPress:en,isDisabled:P||!f||!J,size:"lg",fullWidth:!0,children:P?"Testing...":h?.testSchema("Test Schema")??"Test Schema"})}),P?(0,t.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):F?(0,t.jsxs)(u.Card,{children:[(0,t.jsx)(g.CardHeader,{children:h?.parsedSchemaResult("Parsed Schema Result")??"Parsed Schema Result"}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"break-all whitespace-pre-wrap",children:F})})]}):(0,t.jsx)("div",{className:"flex h-full items-center justify-center text-gray-500",children:"No schema result available"})]}):("jumpForward"===n||"autoJumpForward"===n)&&J?(0,t.jsxs)(u.Card,{children:[(0,t.jsxs)(g.CardHeader,{children:[h?.defaultSchema("Default Schema")??"Default Schema"," (","jumpForward"===n?"Jump Forward":"Auto Jump Forward",")"]}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"break-all whitespace-pre-wrap",children:JSON.stringify("jumpForward"===n?eG(J,s.aiModel?[s.aiModel]:void 0):e5(J,s.aiModel?[s.aiModel]:void 0),null,2)})})]}):(0,t.jsx)("div",{className:"bg-default-50 border-default-200 flex h-96 items-center justify-center rounded-lg border",children:(0,t.jsx)("p",{className:"text-gray-600",children:"No schema provided"})})});case"ai-response":return(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(r.Button,{color:"success",size:"lg",fullWidth:!0,onPress:es,isDisabled:O||!f||!J,isLoading:O,children:O?`Waiting on ${eE.aiModels[s.aiModel]?.displayName||"Unknown Model"}`:h?.getAIResponse("Get AI Response")??"Get AI Response"})}),O?(0,t.jsx)(u.Card,{children:(0,t.jsxs)(g.CardHeader,{children:["Reasoning",".".repeat(H)]})}):M?(0,t.jsxs)(u.Card,{children:[(0,t.jsxs)(g.CardHeader,{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:h?.aiResponseCard("AI Response")??"AI Response"}),(0,t.jsxs)(r.Button,{variant:"light",size:"sm",className:"text-default-500 hover:text-default-700 h-auto min-w-0 bg-transparent p-1",onPress:eo,children:[(0,t.jsx)(v.CopyIcon,{className:"h-3 w-3"}),(0,t.jsx)("span",{className:"sr-only",children:"Copy AI response"})]})]}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:M})})]}):(0,t.jsx)("div",{className:"flex h-64 items-center justify-center text-gray-500",children:'Click "Get AI Response" to test this prompt'})]});case"cleanup":return(0,t.jsx)("div",{className:"flex flex-col gap-4",children:ea||"jumpForward"===n?M?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(r.Button,{color:"primary",onPress:ei,isDisabled:P||!f||!J,size:"lg",fullWidth:!0,children:P?"Testing...":h?.testCleanup("Test Cleanup")??"Test Cleanup"})}),P?(0,t.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,t.jsx)(b.LoadingCircleIcon,{})}):L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.Card,{children:[(0,t.jsx)(g.CardHeader,{children:h?.cleanupResult("Cleanup Result")??"Cleanup Result"}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"break-all whitespace-pre-wrap",children:L})})]}),_.length>0&&(0,t.jsxs)(u.Card,{children:[(0,t.jsxs)(g.CardHeader,{children:[h?.warnings("Warnings")??"Warnings"," (",_.length,")"]}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("ul",{className:"list-disc pl-5",children:_.map((e,a)=>(0,t.jsx)("li",{className:"break-all",children:e},a))})})]})]}):(0,t.jsx)("div",{className:"flex h-full items-center justify-center text-gray-500",children:"No cleanup result available"})]}):(0,t.jsx)("div",{className:"bg-default-50 border-default-200 flex h-96 items-center justify-center rounded-lg border",children:(0,t.jsx)("p",{className:"text-gray-600",children:"AI response required first"})}):M?(0,t.jsxs)(u.Card,{children:[(0,t.jsx)(g.CardHeader,{children:"No Cleanup Function - Final Output"}),(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("pre",{className:"break-all whitespace-pre-wrap",children:M})})]}):(0,t.jsx)("div",{className:"bg-default-50 border-default-200 flex h-96 items-center justify-center rounded-lg border",children:(0,t.jsx)("p",{className:"text-gray-600",children:"AI response required first"})})});default:return null}})()})]})}function tm({currentPrompt:e,initialGameID:r,initialRoundNumber:n}){let{t:s}=(0,C.useTranslations)("promptEditing","edit"),[i,o]=(0,a.useState)({gameID:r??null,roundNumber:n??1,optionalData:{}}),l="jumpForward"===e.promptKey||"autoJumpForward"===e.promptKey||e.promptKey.startsWith("grade"),[u,p]=(0,a.useState)("first");return(0,t.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row",children:[(0,t.jsx)("div",{className:"lg:w-80 lg:shrink-0",children:(0,t.jsx)(k,{initialGameID:r,initialRoundNumber:n,onChange:o})}),(0,t.jsx)("div",{className:"min-w-0 flex-1",children:(0,t.jsx)(e6,{children:l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.Tabs,{selectedKey:u,onSelectionChange:e=>p(e),color:"primary",variant:"underlined",children:[(0,t.jsx)(d.Tab,{title:s?.firstStage("First Stage")??"First Stage"},"first"),(0,t.jsx)(d.Tab,{title:s?.secondStage("Second Stage")??"Second Stage"},"second"),(0,t.jsx)(d.Tab,{title:s?.thirdStage("Third Stage")??"Third Stage"},"third")]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"first"===u?"block":"hidden",children:(0,t.jsx)(tp,{stageKey:"first",promptKey:e.promptKey,stage:e.firstStage,templateHelpers:e.templateHelpers,testSettings:i})}),(0,t.jsx)("div",{className:"second"===u?"block":"hidden",children:(0,t.jsx)(tp,{stageKey:"second",promptKey:e.promptKey,stage:e.secondStage??{enabled:!1,template:"",aiModel:"openai/o3",maxThinkingTokens:0,maxOutputTokens:0,schema:""},templateHelpers:e.templateHelpers,testSettings:i})}),(0,t.jsx)("div",{className:"third"===u?"block":"hidden",children:(0,t.jsx)(tp,{stageKey:"third",promptKey:e.promptKey,stage:e.thirdStage??{enabled:!1,template:"",aiModel:"openai/o3",maxThinkingTokens:0,maxOutputTokens:0,schema:""},templateHelpers:e.templateHelpers,testSettings:i})})]})]}):(0,t.jsx)(tp,{stageKey:"first",promptKey:e.promptKey,stage:e.firstStage,templateHelpers:e.templateHelpers,testSettings:i})})})]})}var th=e.i(266027),tg=e.i(954616);let tf="promptStore",ty=async()=>{let e=(0,ee.collection)(et.db,tf),t=await (0,ee.getDocs)(e),a=[];return t.forEach(e=>{let t=e.data(),r=t.publishDate instanceof Date?t.publishDate:t.publishDate.toDate();a.push({...t,publishDate:r,UID:e.id})}),a},tx=async e=>{let t=(0,ee.doc)(et.db,`${tf}/${e}`),a=await (0,ee.getDoc)(t);if(!a.exists())throw Error(`Prompt store entry ${e} not found`);let r=a.data(),n=r.publishDate instanceof Date?r.publishDate:r.publishDate.toDate();return{...r,publishDate:n,UID:e}},tb=async e=>{let{UID:t,...a}=e,r=Object.fromEntries(Object.entries(a).filter(([,e])=>void 0!==e)),n=(0,ee.doc)(et.db,`${tf}/${t}`);return await (0,ee.setDoc)(n,r,{merge:!0}),e},tv=async e=>{let t=(0,ee.doc)(et.db,`${tf}/${e}`);return await (0,ee.deleteDoc)(t),e};function tw(){return(0,th.useQuery)({queryKey:["promptStorePrompts"],queryFn:ty,staleTime:6e5,gcTime:9e5,retry:1})}function tS(e){let t=(0,U.useQueryClient)(),a=["promptStorePrompt",e],r=(0,th.useQuery)({queryKey:a,queryFn:()=>tx(e),enabled:!!e,staleTime:6e5,gcTime:9e5,retry:1}),n=(0,tg.useMutation)({mutationFn:e=>tb(e),onMutate:async e=>{await t.cancelQueries({queryKey:a}),await t.cancelQueries({queryKey:["promptStorePrompts"]});let r=t.getQueryData(a),n=t.getQueryData(["promptStorePrompts"]);if(t.setQueryData(a,e),n){let a=n.some(t=>t.UID===e.UID)?n.map(t=>t.UID===e.UID?e:t):[...n,e];t.setQueryData(["promptStorePrompts"],a)}return{previousEntry:r,previousList:n}},onError:(e,r,n)=>{n?.previousEntry&&t.setQueryData(a,n.previousEntry),n?.previousList&&t.setQueryData(["promptStorePrompts"],n.previousList),console.error("Error updating prompt store entry:",e)},onSettled:()=>{t.invalidateQueries({queryKey:a}),t.invalidateQueries({queryKey:["promptStorePrompts"]})}}),s=(0,tg.useMutation)({mutationFn:e=>tv(e),onMutate:async e=>{await t.cancelQueries({queryKey:a}),await t.cancelQueries({queryKey:["promptStorePrompts"]});let r=t.getQueryData(a),n=t.getQueryData(["promptStorePrompts"]);if(n){let a=n.filter(t=>t.UID!==e);t.setQueryData(["promptStorePrompts"],a)}return{previousEntry:r,previousList:n}},onError:(e,r,n)=>{n?.previousEntry&&t.setQueryData(a,n.previousEntry),n?.previousList&&t.setQueryData(["promptStorePrompts"],n.previousList),console.error("Error deleting prompt store entry:",e)},onSettled:(e,a,r)=>{t.invalidateQueries({queryKey:["promptStorePrompts"]}),t.removeQueries({queryKey:["promptStorePrompt",r]})}});return{data:r.data,error:r.error,isLoading:r.isLoading,isError:r.isError,isSuccess:r.isSuccess,isPending:r.isPending,refetch:r.refetch,setPrompt:n.mutate,setPromptAsync:n.mutateAsync,isUpdating:n.isPending,updateError:n.error,updateStatus:n.status,deletePrompt:s.mutate,deletePromptAsync:s.mutateAsync,isDeleting:s.isPending,deleteError:s.error}}e.s(["usePromptStorePrompt",()=>tS,"usePromptStorePrompts",()=>tw],266726);var tj=e.i(717546),tD=e.i(995424),tC=e.i(612010),tN=e.i(714060),tT=e.i(44846),tI=e.i(522016);let tA=async e=>{let t={};for(let a of["chatWithUser","chatWithAdvisor","jumpForward","autoJumpForward","actions","nextSpeaker","descriptionToAction","eventConsolidator","catalystCreation","catalystRunner","catalystSummarizer"]){let r;if(e){let t=e.collection("promptStore").doc(`default-${a}`),n=await t.get();if(!n.exists)throw Error(`Default prompt for ${a} not found`);r=n.data()}else{let e=(0,ee.doc)(et.db,"promptStore",`default-${a}`),t=await (0,ee.getDoc)(e);if(!t.exists())throw Error(`Default prompt for ${a} not found`);r=t.data()}if(!r)throw Error(`Default prompt data for ${a} is empty`);t[a]=r.promptConfig}return t},tP=async(e,t,a)=>{let r=(0,ee.doc)(et.db,"promptStore",`default-${e}`),n=await (0,ee.getDoc)(r);if(!n.exists())throw Error(`Default prompt document for ${e} not found`);let s=n.data(),i={...t,promptSource:`default-${e}`},o={UID:`default-${e}`,promptKey:e,promptConfig:i,title:`${e} (Default)`,description:`Default prompt configuration for ${e}.`,authorUID:a?.authorUID||s.authorUID||"system",publishDate:new Date};return await (0,ee.setDoc)(r,o),{promptKey:e,promptConfig:i}},tE=({stage:e,stageName:a,stageNumber:r})=>{let{t:n}=(0,C.useTranslations)("promptEditing","source");if(!e)return null;let s=[(0,t.jsx)(tC.AccordionItem,{"aria-label":`${a} Template`,title:n?.template("Template"),subtitle:n?.aiPromptTemplate("AI prompt template"),children:(0,t.jsx)("pre",{className:"bg-default-50 overflow-x-auto rounded-lg p-3 text-xs whitespace-pre-wrap",children:(0,t.jsx)("code",{children:e.template})})},"template")];return e.schema&&s.push((0,t.jsx)(tC.AccordionItem,{"aria-label":`${a} Schema`,title:n?.customResponseSchema("Custom Response Schema"),subtitle:n?.structuredOutputSchema("Structured output schema"),children:(0,t.jsx)("pre",{className:"bg-default-50 overflow-x-auto rounded-lg p-3 text-xs",children:(0,t.jsx)("code",{children:e.schema})})},"schema")),s.push((0,t.jsx)(tC.AccordionItem,{"aria-label":`${a} Configuration`,title:n?.aiConfiguration("AI Configuration"),subtitle:n?.aiModelAndTokenSettings("AI model and token settings"),children:(0,t.jsxs)("div",{className:"space-y-2 text-sm",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{className:"text-default-600",children:n?.aiModelLabel("AI Model:")}),(0,t.jsx)("span",{className:"font-medium",children:e.aiModel})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{className:"text-default-600",children:n?.maxThinkingTokensLabel("Max Thinking Tokens:")}),(0,t.jsx)("span",{className:"font-medium",children:e.maxThinkingTokens.toLocaleString()})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{className:"text-default-600",children:n?.maxOutputTokensLabel("Max Output Tokens:")}),(0,t.jsx)("span",{className:"font-medium",children:e.maxOutputTokens.toLocaleString()})]})]})},"configuration")),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-lg font-semibold",children:a}),(0,t.jsx)(tD.Accordion,{variant:"splitted",children:s})]})};function tO({isOpen:e,prompt:a,onClose:d,onSelect:c,onCopyToLocal:m}){let h,g,f,y,{t:x}=(0,C.useTranslations)("promptEditing","source"),{data:b}=(0,tT.useUserPublicProfile)(a.authorUID),{user:S}=(0,N.default)(),j=S?.uid??null,T=j===a.authorUID,I=j===w.PAX_HISTORIA_GAME_ACCOUNT_UID,{deletePromptAsync:A,isDeleting:P}=tS(),{updatePromptAsync:E,isUpdating:O}=(h=(0,U.useQueryClient)(),g=["simpleDefaultPrompts"],f=(0,th.useQuery)({queryKey:g,queryFn:()=>tA(),staleTime:1/0,gcTime:1/0,retry:1}),y=(0,tg.useMutation)({mutationFn:({promptKey:e,promptConfig:t,meta:a})=>tP(e,t,a),onMutate:async({promptKey:e,promptConfig:t})=>{await h.cancelQueries({queryKey:g});let a=h.getQueryData(g);return h.setQueryData(g,r=>r?{...r,[e]:t}:a),{previousData:a}},onError:(e,t,a)=>{console.error(`Error updating simple default prompt ${t.promptKey}:`,e),a?.previousData&&h.setQueryData(g,a.previousData)},onSettled:(e,t,a)=>{h.invalidateQueries({queryKey:g}),h.invalidateQueries({queryKey:["promptStorePrompts"]});let r=`default-${a.promptKey}`;h.invalidateQueries({queryKey:["promptStorePrompt",r]})}}),{data:f.data,error:f.error,isLoading:f.isLoading,isError:f.isError,isSuccess:f.isSuccess,isPending:f.isPending,refetch:f.refetch,updatePrompt:y.mutate,updatePromptAsync:y.mutateAsync,isUpdating:y.isPending,updateError:y.error,updateStatus:y.status}),R=async()=>{if(T&&confirm(x?.removeFromStoreConfirm("Remove this prompt from the store? This cannot be undone.")??"Remove this prompt from the store? This cannot be undone."))try{await D.toast.promise(A(a.UID),{loading:"Removing prompt…",success:"Prompt removed from store",error:"Failed to remove prompt"}),d()}catch(e){}},M=async()=>{if(I&&confirm(`Override the default "${a.promptKey}" prompt with this prompt from the store? This will affect all new games.`))try{await D.toast.promise(E({promptKey:a.promptKey,promptConfig:a.promptConfig}),{loading:"Updating default prompt…",success:`Default "${a.promptKey}" prompt updated successfully`,error:"Failed to update default prompt"})}catch(e){}},k=async()=>{try{await navigator.clipboard.writeText(a.UID),D.toast.success("Prompt ID copied to clipboard")}catch(e){D.toast.error("Failed to copy prompt ID")}},F=a.publishDate instanceof Date?a.publishDate.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):new Date(a.publishDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),B=Object.keys(a.promptConfig.templateHelpers||{}).length,$=[a.promptConfig.firstStage,a.promptConfig.secondStage,a.promptConfig.thirdStage].filter(e=>void 0!==e).length;return e?(0,t.jsx)(n.Modal,{isOpen:e,onClose:d,size:"3xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsxs)(l.ModalHeader,{className:"flex flex-col gap-1",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",children:a.title}),(0,t.jsxs)("div",{className:"text-default-600 flex items-center gap-2 text-sm",children:[(0,t.jsx)("span",{children:x?.by("by")}),(0,t.jsx)(r.Button,{as:tI.default,href:`/profile/${a.authorUID}`,variant:"light",className:"m-0 h-auto min-w-0 bg-transparent p-0 font-medium text-inherit hover:opacity-70 focus:outline-hidden",children:b?.displayName||x?.unknownAuthor("Unknown Author")}),(0,t.jsx)("span",{children:"•"}),(0,t.jsx)("span",{children:F}),(0,t.jsx)("span",{children:"•"}),(0,t.jsxs)(r.Button,{variant:"light",size:"sm",className:"text-default-500 hover:text-default-700 h-auto min-w-0 bg-transparent p-1",onPress:k,children:[(0,t.jsx)(v.CopyIcon,{className:"h-3 w-3"}),(0,t.jsx)("span",{className:"sr-only",children:"Copy prompt ID"})]})]})]}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)("div",{className:"space-y-6 pb-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-lg font-semibold",children:x?.description("Description")}),(0,t.jsx)(u.Card,{children:(0,t.jsx)(p.CardBody,{children:(0,t.jsx)("p",{className:"text-default-700 text-sm leading-relaxed whitespace-pre-wrap",children:a.description})})})]}),(0,t.jsx)(tN.Divider,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-lg font-semibold",children:x?.moreInfo("More Info")}),(0,t.jsx)(u.Card,{children:(0,t.jsx)(p.CardBody,{children:(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"bg-default-50 rounded-lg p-4 text-center",children:[(0,t.jsx)("div",{className:"text-primary-600 text-2xl font-bold",children:B}),(0,t.jsx)("div",{className:"text-default-600 mt-1 text-sm",children:1===B?x?.templateHelper("Template Helper"):x?.templateHelpers("Template Helpers")})]}),(0,t.jsxs)("div",{className:"bg-default-50 rounded-lg p-4 text-center",children:[(0,t.jsx)("div",{className:"text-primary-600 text-2xl font-bold",children:$}),(0,t.jsx)("div",{className:"text-default-600 mt-1 text-sm",children:1===$?x?.stage("Stage"):x?.stages("Stages")})]})]})})})]}),(0,t.jsx)(tN.Divider,{}),(0,t.jsx)(tE,{stage:a.promptConfig.firstStage,stageName:x?.firstStage("First Stage")??"First Stage",stageNumber:1}),a.promptConfig.secondStage&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tN.Divider,{}),(0,t.jsx)(tE,{stage:a.promptConfig.secondStage,stageName:x?.secondStage("Second Stage")??"Second Stage",stageNumber:2})]}),a.promptConfig.thirdStage&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tN.Divider,{}),(0,t.jsx)(tE,{stage:a.promptConfig.thirdStage,stageName:x?.thirdStage("Third Stage")??"Third Stage",stageNumber:3})]})]})}),(0,t.jsxs)(o.ModalFooter,{children:[T&&(0,t.jsx)(r.Button,{color:"danger",variant:"flat",onPress:R,isLoading:P,children:x?.removeFromStore("Remove from Store")}),I&&(0,t.jsx)(r.Button,{color:"primary",variant:"flat",onPress:M,isLoading:O,children:x?.overrideDefault("Override Default")}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(r.Button,{variant:"light",onPress:m,children:x?.copyIntoLocalState("Copy into Local State")}),(0,t.jsx)(r.Button,{color:"primary",onPress:c,children:x?.selectThisPrompt("Select this Prompt")})]})]})}):null}let tR=({size:e=24,...a})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:`feather feather-plus-circle ${a.className??""}`.trim(),...a,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:10}),(0,t.jsx)("path",{d:"M12 8v8M8 12h8"})]});e.s(["PlusCircleIcon",0,tR],945449);var tM=e.i(599171);function tk({isOpen:e,promptConfig:d,onClose:c,onPublished:u}){let{t:p}=(0,C.useTranslations)("promptEditing","source"),[h,g]=(0,a.useState)(""),[f,y]=(0,a.useState)(""),{setPromptAsync:b,isUpdating:v}=tS(),w=async()=>{if(!h.trim())return void D.toast.error("Title is required");if(!f.trim())return void D.toast.error("Description is required");let e=(0,en.generateUUID)(),t={UID:e,title:h.trim(),description:f.trim(),authorUID:et.auth.currentUser?.uid??"anonymous",promptKey:d.promptKey,promptConfig:{...d,promptSource:e},publishDate:new Date};try{await D.toast.promise(b(t),{loading:"Publishing prompt…",success:"Prompt published!",error:"Failed to publish prompt"}),u?.(e),c()}catch(e){}};return(a.default.useEffect(()=>{e&&(g(""),y(""))},[e]),e)?(0,t.jsx)(n.Modal,{isOpen:e,onClose:c,size:"lg",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:p?.publishYourLocalPrompt("Publish Your Local Prompt to the Store")}),(0,t.jsx)(s.ModalBody,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(m.Input,{label:p?.title("Title")??"Title",placeholder:p?.enterDescriptiveTitle("Enter a descriptive title")??"Enter a descriptive title",value:h,onChange:e=>g(e.target.value)}),(0,t.jsx)(x.Textarea,{label:p?.description("Description")??"Description",placeholder:p?.describeWhenAndHow("Describe when and how this prompt should be used")??"Describe when and how this prompt should be used",minRows:4,maxRows:10,value:f,onValueChange:y})]})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"light",onPress:c,children:p?.cancel("Cancel")}),(0,t.jsx)(r.Button,{color:"primary",onPress:w,isLoading:v,children:p?.publish("Publish")})]})]})}):null}function tF({currentPrompt:e,onPromptChange:n,authorizedToEdit:s}){let{t:i}=(0,C.useTranslations)("promptEditing","source"),[o,l]=(0,a.useState)(""),[d,c]=(0,a.useState)(!1),[h,g]=(0,a.useState)("alphabetical"),[f,y]=(0,a.useState)("asc"),[x,b]=(0,a.useState)(null),[v,w]=(0,a.useState)(!1),S=e=>{e===h?y("asc"===f?"desc":"asc"):(g(e),y("asc"))},{data:j,isLoading:D,error:N,refetch:T,isFetching:I}=tw();e.promptKey;let A=t=>{j?.find(e=>e.UID===t)&&n({...e,promptSource:t})},P=()=>b(null),E=async()=>{try{await T()}catch(e){console.error("Error refreshing prompt store:",e)}},O=(0,a.useMemo)(()=>{let t=[];if(t.push({id:"local",title:i?.localPrompt("Local Prompt")??"Local Prompt",description:i?.editableByYou("Editable by you")??"Editable by you",source:"local",authorUID:et.auth.currentUser?.uid}),j){let a=j.find(t=>t.promptKey===e.promptKey&&t.UID.startsWith("default-"));a&&t.push({id:a.UID,title:a.title,description:a.description,source:"store",authorUID:a.authorUID,publishDate:a.publishDate instanceof Date?a.publishDate:new Date(a.publishDate),isDefault:!0}),j.filter(t=>t.promptKey===e.promptKey&&!t.UID.startsWith("default-")).forEach(e=>{t.push({id:e.UID,title:e.title,description:e.description,source:"store",authorUID:e.authorUID,publishDate:e.publishDate instanceof Date?e.publishDate:new Date(e.publishDate)})})}let a=(d?t.filter(e=>"local"===e.source||e.authorUID===et.auth.currentUser?.uid):t).filter(e=>{if(!o)return!0;let t=o.toLowerCase();return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}),r=a.filter(e=>"store"===e.source),n=r.filter(e=>e.isDefault),s=r.filter(e=>!e.isDefault);return s.sort((e,t)=>{let a=0;switch(h){case"alphabetical":a=e.title.localeCompare(t.title);break;case"date":a=(e.publishDate?.getTime()||0)-(t.publishDate?.getTime()||0)}return"asc"===f?a:-a}),[...a.filter(e=>"store"!==e.source),...n,...s]},[e,j,d,o,h,f,i]);return["chatWithUser","chatWithAdvisor","jumpForward","autoJumpForward","actions","nextSpeaker","descriptionToAction","eventConsolidator","catalystCreation","catalystRunner","catalystSummarizer","gameMaster"].includes(e.promptKey)?(0,t.jsxs)("div",{className:"flex w-full flex-col gap-4 lg:flex-row",children:[(0,t.jsx)("div",{className:"lg:w-80 lg:shrink-0",children:(0,t.jsxs)("div",{className:"bg-default-50 rounded-lg p-4",children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-sm font-semibold",children:i?.promptStore("Prompt Store")}),(0,t.jsxs)("div",{className:"text-default-600 flex flex-col gap-3 text-sm",children:[(0,t.jsx)("p",{children:i?.localPromptsDesc("Local Prompts: Editable by you. These are your own prompts that you can modify.")}),(0,t.jsx)("p",{children:i?.storePromptsDesc("Store Prompts: Read-only once published. These are prompts shared by the community.")}),(0,t.jsx)("p",{children:i?.selectionDesc("Selection: Pick a prompt from the list. Selecting a store prompt will not overwrite your local prompt stages.")})]})]})}),(0,t.jsx)("div",{className:"flex flex-1 flex-col gap-6",children:(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)("h4",{className:"text-md text-default-800 font-semibold",children:i?.availablePrompts("Available Prompts")}),(0,t.jsxs)("div",{className:"flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",children:[(0,t.jsx)(m.Input,{placeholder:i?.searchPromptsPlaceholder("Search prompts…")??"Search prompts…",value:o,onChange:e=>l(e.target.value),startContent:(0,t.jsx)(V.default,{size:16,className:"text-gray-400"}),variant:"bordered",className:"max-w-sm",isClearable:!0,onClear:()=>l("")}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",color:"default",onPress:E,isLoading:I,isDisabled:I,isIconOnly:!0,children:(0,t.jsx)(Q,{size:16})}),(0,t.jsx)(r.Button,{size:"sm",variant:d?"solid":"bordered",color:d?"primary":"default",onPress:()=>c(e=>!e),children:i?.myPrompts("My Prompts")}),(0,t.jsx)(r.Button,{size:"sm",variant:"alphabetical"===h?"solid":"bordered",color:"alphabetical"===h?"primary":"default",onPress:()=>S("alphabetical"),endContent:"alphabetical"===h?"asc"===f?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:i?.sortAZ("A-Z")}),(0,t.jsx)(r.Button,{size:"sm",variant:"date"===h?"solid":"bordered",color:"date"===h?"primary":"default",onPress:()=>S("date"),endContent:"date"===h?"asc"===f?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:i?.sortDate("📅 Date")})]})]}),D&&(0,t.jsx)("p",{className:"text-default-500 text-xs",children:i?.loadingPrompts("Loading prompts…")}),N&&(0,t.jsx)("p",{className:"text-danger text-xs",children:i?.errorLoadingPromptStore("Error loading prompt store")}),(0,t.jsxs)("div",{className:"grid w-full grid-cols-1 gap-4 overflow-y-auto p-2 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[O.map(a=>(0,t.jsxs)(u.Card,{isPressable:!0,onPress:()=>{"local"===a.source?s&&n({...e,promptSource:null}):A(a.id)},className:`group border-default-200 bg-content-1 relative flex h-32 w-full grow cursor-pointer flex-col items-center justify-center rounded-lg border text-center shadow-md transition-transform hover:scale-105 hover:shadow-lg ${"local"===a.source?null===e.promptSource?"ring-primary ring-2":"":a.id===e.promptSource?"ring-primary ring-2":""}`,children:[a.isDefault&&(0,t.jsx)("div",{className:"absolute top-2 left-2 z-10",children:(0,t.jsx)(tM.default,{className:"h-4 w-4 text-yellow-500"})}),(0,t.jsxs)("div",{className:"absolute top-2 right-2 z-10 flex gap-1",children:["store"===a.source&&(0,t.jsx)("span",{onClick:e=>{var t;let r;e.stopPropagation(),t=a.id,(r=j?.find(e=>e.UID===t))&&b(r)},className:"bg-default-100 text-default-700 hover:bg-default-200 cursor-pointer rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100",children:(0,t.jsx)(tj.default,{className:"h-4 w-4"})}),"local"===a.source&&s&&(0,t.jsx)("span",{onClick:e=>{e.stopPropagation(),w(!0)},className:"bg-default-100 text-default-700 hover:bg-default-200 cursor-pointer rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100",title:i?.publishToStore("Publish to Store")??"Publish to Store",children:(0,t.jsx)(tR,{className:"h-4 w-4"})})]}),(0,t.jsxs)(p.CardBody,{className:"flex flex-col items-center justify-center p-2",children:[(0,t.jsx)("div",{className:"w-full truncate px-1 text-center text-sm font-medium",children:a.title}),(0,t.jsx)("div",{className:"text-default-600 w-full truncate px-1 text-xs",children:a.description})]})]},a.id)),0===O.length&&!D&&(0,t.jsx)("p",{className:"text-default-500 col-span-full text-xs",children:i?.noPromptsFound("No prompts found.")})]})]})}),x&&(0,t.jsx)(tO,{isOpen:!0,prompt:x,onClose:P,onSelect:()=>{A(x.UID),P()},onCopyToLocal:()=>{x&&(n({...x.promptConfig,promptSource:null}),P())}}),(0,t.jsx)(tk,{isOpen:v,promptConfig:e,onClose:()=>w(!1),onPublished:t=>{n({...e,promptSource:t})}})]}):(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(u.Card,{className:"max-w-md",children:(0,t.jsxs)(p.CardBody,{className:"text-center",children:[(0,t.jsx)("h3",{className:"mb-2 text-lg font-semibold",children:i?.promptStoreUnavailable("Prompt Store Unavailable")}),(0,t.jsx)("p",{className:"mb-4 text-gray-600",children:i?.promptStoreUnavailableDesc(`Prompt store is only available for game prompts (chatWithUser, chatWithAdvisor, jumpForward, etc.). The current prompt type "${e.promptKey}" is not supported for the prompt store.`,{promptKey:e.promptKey})})]})})})}var tB=e.i(833856),tU=e.i(816069),t$=e.i(474945),tL=e.i(738605),tq=e.i(886530),t_=e.i(103110),tG=e.i(284075),tH=e.i(955809),tz=e.i(372853),tJ=e.i(276331),tK=e.i(508870),tW=e.i(230259),tY=e.i(627430),tQ=e.i(610313);let tV=async e=>{let t=e?`/api/benchmarks/simple-benchmark-questions?promptKey=${String(e)}`:"/api/benchmarks/simple-benchmark-questions",a=await fetch(t),r=await a.json();if(!r.success)throw Error(r.error||"Failed to fetch simple benchmark questions");return r.data.map(e=>({...e,createdAt:new Date(e.createdAt)}))},tX=async e=>{let t=await fetch("/api/benchmarks/simple-benchmark-questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(!a.success)throw Error(a.error||"Failed to create simple benchmark question");return{...a.data,createdAt:new Date(a.data.createdAt)}},tZ=async(e,t)=>{let a=await fetch(`/api/benchmarks/simple-benchmark-questions?uid=${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await a.json();if(!r.success)throw Error(r.error||"Failed to update simple benchmark question");return{...r.data,createdAt:new Date(r.data.createdAt)}},t0=async e=>{let t=await fetch(`/api/benchmarks/simple-benchmark-questions?uid=${e}`,{method:"DELETE"}),a=await t.json();if(!a.success)throw Error(a.error||"Failed to delete simple benchmark question")};function t1(e){let t=(0,U.useQueryClient)(),a=["simpleBenchmarkQuestions",e],r=(0,th.useQuery)({queryKey:a,queryFn:()=>tV(e),staleTime:3e5,gcTime:6e5,retry:1}),n=(0,tg.useMutation)({mutationFn:tX,onMutate:async e=>{await t.cancelQueries({queryKey:a});let r=t.getQueryData(a);return t.setQueryData(a,t=>t?[...t,{...e,uid:"temp-id",createdAt:new Date}]:r||[]),{previousData:r}},onError:(e,r,n)=>{console.error("Error creating simple benchmark question:",e),t.setQueryData(a,n.previousData)},onSettled:()=>{t.invalidateQueries({queryKey:a})}}),s=(0,tg.useMutation)({mutationFn:({uid:e,data:t})=>tZ(e,t),onMutate:async({uid:e,data:r})=>{await t.cancelQueries({queryKey:a});let n=t.getQueryData(a);return t.setQueryData(a,t=>t?t.map(t=>t.uid===e?{...t,...r}:t):n||[]),{previousData:n}},onError:(e,r,n)=>{console.error("Error updating simple benchmark question:",e),t.setQueryData(a,n.previousData)},onSettled:()=>{t.invalidateQueries({queryKey:a})}}),i=(0,tg.useMutation)({mutationFn:t0,onMutate:async e=>{await t.cancelQueries({queryKey:a});let r=t.getQueryData(a);return t.setQueryData(a,t=>t?t.filter(t=>t.uid!==e):r||[]),{previousData:r}},onError:(e,r,n)=>{console.error("Error deleting simple benchmark question:",e),t.setQueryData(a,n.previousData)},onSettled:()=>{t.invalidateQueries({queryKey:a})}}),{data:o,isLoading:l,isError:d,error:c,refetch:u,isFetching:p}=r;return{data:o,isLoading:l,isError:d,error:c,refetch:u,isFetching:p,createSimpleBenchmarkQuestion:n.mutate,updateSimpleBenchmarkQuestion:s.mutate,deleteSimpleBenchmarkQuestion:i.mutate}}e.s(["useSimpleBenchmarkQuestions",()=>t1],786232);let t2=async e=>{if(!e?.promptKey||!e?.promptSource)throw Error("promptKey and promptSource are required");let t=new URLSearchParams;t.append("promptKey",String(e.promptKey)),t.append("promptSource",e.promptSource),e?.questionUID&&t.append("questionUID",e.questionUID);let a=`/api/benchmarks/question-response-summary?${t.toString()}`,r=await fetch(a),n=await r.json();if(!n.success)throw Error(n.error||"Failed to fetch question response summary");return n.data};var t4=e.i(483705),t3=e.i(752766);let t6=["jumpForward","autoJumpForward"];function t5({currentPrompt:e,initialGameID:d,initialRoundNumber:c}){var h;let g,[x,b]=(0,a.useState)(""),[v,S]=(0,a.useState)(!1),[j,D]=(0,a.useState)("alphabetical"),[T,I]=(0,a.useState)("asc"),[A,R]=(0,a.useState)(new Set),[M,k]=(0,a.useState)(["description","gameLink","overallScore","gradeCount","optionalData"]),[F,U]=(0,a.useState)(null),{isOpen:$,onOpen:L,onClose:q}=(0,tW.useDisclosure)(),{user:_}=(0,N.default)(),{t:G}=(0,C.useTranslations)("promptEditing","evaluate"),[H,z]=(0,a.useState)(null),{isOpen:J,onOpen:K,onClose:W}=(0,tW.useDisclosure)(),[Y,ee]=(0,a.useState)(new Set),{isOpen:et,onOpen:ea,onClose:er}=(0,tW.useDisclosure)(),[en,es]=(0,a.useState)(!1),[ei,eo]=(0,a.useState)(null),[el,ed]=(0,a.useState)(!1),[ec,eu]=(0,a.useState)({completed:0,total:0,failed:0}),[ep,em]=(0,a.useState)(!1),[eh,eg]=(0,a.useState)(!1),[ef,ey]=(0,a.useState)(1),[ex,eb]=(0,a.useState)(0),[ev,ew]=(0,a.useState)(0),[eS,ej]=(0,a.useState)("average-of-averages"),eD=(h=e.promptKey,t6.includes(h)),{data:eC=[],isLoading:eN,isError:eT,error:eI,refetch:eA,isFetching:eP,updateSimpleBenchmarkQuestion:eE}=t1(eD?e.promptKey:void 0),{responses:eR,grades:eM,isLoading:ek,refetch:eF,isFetching:eB}=function(e,t={enabled:!0}){let a=["questionResponseSummary",e],{data:r,isLoading:n,isError:s,error:i,refetch:o,isFetching:l}=(0,th.useQuery)({queryKey:a,queryFn:()=>t2(e),staleTime:3e5,gcTime:6e5,retry:1,enabled:t.enabled&&!!e?.promptKey&&!!e?.promptSource});return{data:r,isLoading:n,isError:s,error:i,refetch:o,isFetching:l,responses:r?.responses||[],grades:r?.grades||[]}}({promptKey:e.promptKey,promptSource:e.promptSource?e.promptSource:void 0},{enabled:!!e.promptSource}),eU=(0,a.useMemo)(()=>H?eR.filter(e=>e.questionUID===H).map(e=>e.uid):[],[H,eR]),e$=(0,a.useMemo)(()=>H?eM.filter(e=>eU.includes(e.questionResponseUID)):[],[eM,eU,H]),eL=(0,a.useMemo)(()=>{let e=new Map;for(let t of eR)e.set(t.questionUID,t.overallScore);return e},[eR]),eq=(0,a.useMemo)(()=>{let e=new Map;for(let t of eR)e.has(t.questionUID)||e.set(t.questionUID,[]),e.get(t.questionUID).push(t);return e},[eR]),e_=(0,a.useMemo)(()=>{let e=new Set(eM.map(e=>e.questionResponseUID));return eR.filter(t=>!e.has(t.uid))},[eR,eM]),eG=(0,a.useMemo)(()=>{let e=new Set(eM.map(e=>e.questionResponseUID)),t=new Map;for(let a of eR)e.has(a.uid)&&t.set(a.questionUID,(t.get(a.questionUID)||0)+1);return t},[eR,eM]),eH=e=>{let t=eq.get(e);return t&&0!==t.length?t.reduce((e,t)=>e+t.overallScore,0)/t.length:0},ez=e=>e>.8?"success":e>.6?"primary":e>.4?"warning":"danger",eJ=e=>e$.filter(t=>t.questionResponseUID===e),eK=e=>{let t=eJ(e);return 0===t.length?0:t.reduce((e,t)=>e+t.grade,0)/t.length},eW=async e=>{eo(e);try{let t=await fetch("/api/benchmarks/regrade-response",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responseUID:e})}),a=await t.json();a.success?eF():(console.error("Regrade failed:",a.error),alert(`Regrade failed: ${a.error}`))}catch(e){console.error("Regrade error:",e),alert(`Regrade error: ${e instanceof Error?e.message:"Unknown error"}`)}finally{eo(null)}},eY=async()=>{if(0===e_.length)return;ed(!0);let e=0,t=0;eu({completed:0,total:e_.length,failed:0});let a=e_.map(async a=>{try{let e=await fetch("/api/benchmarks/regrade-response",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responseUID:a.uid})}),r=await e.json();!r.success&&(console.error(`Heal failed for ${a.uid}:`,r.error),t++)}catch(e){console.error(`Heal error for ${a.uid}:`,e),t++}eu({completed:++e,total:e_.length,failed:t})});await Promise.all(a),ed(!1),eF()},eQ=[{key:"description",label:G?.columnDescription("Description")??"Description"},{key:"overallScore",label:G?.columnOverallScore("Overall Score")??"Overall Score"},{key:"gradeCount",label:"Count"},{key:"round",label:G?.columnRound("Round")??"Round"},{key:"gameLink",label:G?.columnGameLink("Game Link")??"Game Link"},{key:"tags",label:G?.columnTags("Tags")??"Tags"},{key:"rarity",label:G?.columnRarity("Rarity")??"Rarity"},{key:"status",label:G?.columnStatus("Status")??"Status"},{key:"dateAdded",label:G?.columnDateAdded("Date Added")??"Date Added"},{key:"optionalData",label:G?.columnOptionalData("Optional Data")??"Optional Data"},{key:"actions",label:G?.columnActions("Actions")??"Actions"}],eV=e=>{e===j?I("asc"===T?"desc":"asc"):(D(e),I("asc"))},eX=(0,a.useMemo)(()=>[...(v?eC.filter(e=>e.authorUID===_?.uid):eC).filter(e=>{if(!x)return!0;let t=x.toLowerCase();return e.description.toLowerCase().includes(t)})].sort((e,t)=>{let a=0;switch(j){case"alphabetical":a=e.description.localeCompare(t.description);break;case"date":a=(e.createdAt?.getTime()||0)-(t.createdAt?.getTime()||0);break;case"gradeCount":a=(eG.get(e.uid)||0)-(eG.get(t.uid)||0)}return"asc"===T?a:-a}),[eC,v,x,j,T,_?.uid,eG]),eZ=()=>"all"===A?eX.map(e=>e.uid):A instanceof Set?Array.from(A).map(e=>String(e)):[],e0=(0,a.useMemo)(()=>{if(0===eR.length)return 0;let e=eZ(),t=e.length>0?e:null;if("average-of-averages"===eS){let e=[];for(let[a,r]of eq.entries())if((!t||t.includes(a))&&r.length>0){let t=r.reduce((e,t)=>e+t.overallScore,0);e.push(t/r.length)}return 0===e.length?0:e.reduce((e,t)=>e+t,0)/e.length}{let e=t?eR.filter(e=>t.includes(e.questionUID)):eR;return 0===e.length?0:e.reduce((e,t)=>e+t.overallScore,0)/e.length}},[eR,eS,eq,A,eX]),e1=()=>"all"===A?eX.length:A instanceof Set?A.size:0,e2=async()=>{let t=eZ();if(0===t.length)return void alert("Please select at least one question to clear responses for.");if(!e.promptSource)return void alert("No prompt source selected. Please select a prompt source in the Source tab.");if(_?.uid!==w.PAX_HISTORIA_ADMIN_ACCOUNT_UID&&_?.uid!==w.PAX_HISTORIA_GAME_ACCOUNT_UID)return void alert("Only Pax Historia privileged accounts can clear responses and grades.");if(confirm(`Are you sure you want to clear all responses and grades for ${t.length} selected questions with prompt source "${e.promptSource}"? This action cannot be undone.`)){em(!0);try{let a=[];for(let r of t){let t,n=await fetch("/api/benchmarks/clear-responses-and-grades",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionUID:r,promptSource:e.promptSource})}),s=null;try{s=await n.clone().json()}catch(e){}if(n.ok){let e=s||await n.json();e.success?a.push({questionUID:r,success:!0,data:e.data}):(t=e.error||"Unknown error",a.push({questionUID:r,success:!1,error:t}))}else t=s?.error||`${n.status} ${n.statusText}`,a.push({questionUID:r,success:!1,error:t})}let r=a.filter(e=>e.success).length,n=a.filter(e=>!e.success),s=n.length;console.log(`Clear responses completed: ${r} successful, ${s} failed`),s>0?(console.error("Some clear operations failed:",n),alert(`Some clear operations failed. Example error: ${n[0].error}`)):alert(`Successfully cleared responses and grades for ${r} questions.`),await Promise.all([eA(),eF()])}catch(e){console.error("Error clearing responses:",e),alert("Error clearing responses. Please try again.")}finally{em(!1)}}},e4=async()=>{let e=eZ();if(0===e.length)return void alert("Please select at least one question to delete.");if(confirm(`Are you sure you want to permanently delete ${e.length} selected questions? This will also delete all responses and grades associated with these questions. This action cannot be undone.`)){eg(!0);try{let t=[];for(let a of e){let e,r=await fetch(`/api/benchmarks/simple-benchmark-questions?uid=${a}`,{method:"DELETE"}),n=null;try{n=await r.clone().json()}catch(e){}if(r.ok){let s=n||await r.json();s.success?t.push({questionUID:a,success:!0}):(e=s.error||"Unknown error",t.push({questionUID:a,success:!1,error:e}))}else e=n?.error||`${r.status} ${r.statusText}`,t.push({questionUID:a,success:!1,error:e})}let a=t.filter(e=>e.success).length,r=t.filter(e=>!e.success),n=r.length;console.log(`Delete questions completed: ${a} successful, ${n} failed`),n>0?(console.error("Some delete operations failed:",r),alert(`Some delete operations failed. Example error: ${r[0].error}`)):alert(`Successfully deleted ${a} questions and all associated responses and grades.`),R(new Set),await Promise.all([eA(),eF()])}catch(e){console.error("Error deleting questions:",e),alert("Error deleting questions. Please try again.")}finally{eg(!1)}}},e3=async()=>{let t=eZ();if(t6.includes(e.promptKey)){es(!0),er(),ew(t.length*ef),eb(0);try{let a=[];for(let r of t)for(let t=0;t<ef;t++){let n=fetch("/api/benchmarks/run-evals/get-and-grade-auto-jump-forward",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionUID:r,promptSource:e.promptSource})}).then(async e=>{let a,n=null;try{n=await e.clone().json()}catch(e){}if(eb(e=>e+1),!e.ok)return a=n?.error||`${e.status} ${e.statusText}`,{questionUID:r,trial:t,success:!1,error:a};{let s=n||await e.json();return s.success?{questionUID:r,trial:t,success:!0,data:s}:(a=s.error||"Unknown error",{questionUID:r,trial:t,success:!1,error:a})}}).catch(e=>(eb(e=>e+1),{questionUID:r,trial:t,success:!1,error:e instanceof Error?e.message:String(e)}));a.push(n)}let r=(await Promise.allSettled(a)).map(e=>"fulfilled"===e.status?e.value:{questionUID:"unknown",trial:-1,success:!1,error:e.reason?.message||"Unknown error"}),n=r.filter(e=>e.success).length,s=r.filter(e=>!e.success),i=s.length;console.log(`Evals completed: ${n} successful, ${i} failed`),i>0&&(console.error("Some evaluations failed:",s),alert(`Some evaluations failed. Example error: ${s[0].error}`)),await Promise.all([eA(),eF()])}catch(e){console.error("Error running evals:",e),alert("Error running evaluations. Please try again.")}finally{es(!1),eb(0),ew(0)}}else er()},e6=async()=>{try{await Promise.all([eA(),eF()])}catch(e){console.error("Error refreshing data:",e)}},e5=null==e.promptSource,e8=e.promptSource?.startsWith("default-")??!1;return eD?e5?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(u.Card,{className:"max-w-md",children:(0,t.jsxs)(p.CardBody,{className:"text-center",children:[(0,t.jsx)("h3",{className:"mb-2 text-lg font-semibold",children:G?.evaluationsUnavailable("Evaluations Unavailable")}),(0,t.jsx)("p",{className:"mb-4 text-gray-600",children:G?.evalsOnlyForStorePrompts("Evaluations only work for store prompts, not local prompts. Please select a store prompt in the Source tab to run evaluations.")})]})})}):e8?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(u.Card,{className:"max-w-md",children:(0,t.jsxs)(p.CardBody,{className:"text-center",children:[(0,t.jsx)("h3",{className:"mb-2 text-lg font-semibold",children:G?.evaluationsUnavailable("Evaluations Unavailable")}),(0,t.jsx)("p",{className:"mb-4 text-gray-600",children:G?.evalsNotForDefaultPrompts("Evaluations are not available for default prompts. Please select a non-default prompt in the Source tab to run evaluations.")})]})})}):eN?(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(B.Spinner,{size:"lg"})}):eT?(0,t.jsx)("div",{className:"p-4 text-center",children:(0,t.jsxs)("p",{className:"text-red-500",children:["Error loading benchmark questions: ",eI?.message]})}):(0,t.jsxs)("div",{className:"flex w-full flex-col gap-4 lg:flex-row",children:[(0,t.jsx)("div",{className:"lg:w-80 lg:shrink-0",children:(0,t.jsxs)("div",{className:"bg-default-50 rounded-lg p-4",children:[(0,t.jsx)("h3",{className:"text-default-800 mb-3 text-sm font-semibold",children:G?.benchmarkQuestions("Benchmark Questions,")}),(0,t.jsxs)("div",{className:"text-default-600 flex flex-col gap-3 text-sm",children:[(0,t.jsx)("p",{children:G?.questionsAndResponses(`${eX.length} of ${eC.length} questions, ${eR.length} responses`,{filtered:eX.length,total:eC.length,responses:eR.length})}),eR.length>0&&(0,t.jsxs)("div",{className:"mt-2 flex items-center justify-center gap-2",children:[(0,t.jsx)(tQ.Tooltip,{content:"average-of-averages"===eS?G?.averageOfAveragesDesc("Each question contributes equally, regardless of trial count."):G?.averageOfAllResponsesDesc("Questions with more trials contribute more to the average."),placement:"top",children:(0,t.jsx)(tG.Chip,{size:"sm",variant:"flat",children:e1()>0?G?.averageOfSelected(`Average of ${e1()} selected: ${e0.toFixed(2)}`,{count:e1(),score:e0.toFixed(2)}):G?.averageOfAllQuestions(`Average of all questions: ${e0.toFixed(2)}`,{score:e0.toFixed(2)})})}),(0,t.jsxs)(P.Popover,{placement:"bottom",children:[(0,t.jsx)(O.PopoverTrigger,{children:(0,t.jsx)(r.Button,{size:"sm",variant:"light",isIconOnly:!0,className:"h-6 w-6 min-w-0","aria-label":"Average calculation settings",children:(0,t.jsx)(t4.default,{size:14})})}),(0,t.jsx)(E.PopoverContent,{className:"p-3",children:(0,t.jsxs)("div",{className:"flex min-w-[240px] flex-col gap-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium",children:G?.calculationMethod("Calculation Method")}),(0,t.jsxs)(f.Select,{"aria-label":G?.calculationMethod("Calculation Method")??"Average calculation method",selectedKeys:[eS],onSelectionChange:e=>{let t=Array.from(e)[0];t&&ej(t)},size:"sm",children:[(0,t.jsx)(y.SelectItem,{children:G?.averageOfAverages("Average of Averages")},"average-of-averages"),(0,t.jsx)(y.SelectItem,{children:G?.averageOfAllResponses("Average of All Responses")},"all-responses")]}),(0,t.jsx)("p",{className:"mt-1 text-xs text-gray-600",children:"average-of-averages"===eS?G?.averageOfAveragesDesc("Each question contributes equally, regardless of trial count."):G?.averageOfAllResponsesDesc("Questions with more trials contribute more to the average.")})]})})]})]}),(0,t.jsx)("p",{children:G?.selectQuestionsDescription("Select questions to run evaluations and compare performance across different scenarios.")}),(0,t.jsx)("p",{children:G?.useFiltersDescription("Use filters to find specific questions or sort by different criteria.")})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(m.Input,{size:"sm",type:"number",label:G?.trialsPerQuestion("Trials per Question")??"Trials per Question",value:String(ef),onValueChange:e=>{ey(Math.max(1,Math.min(50,Number(e)||1)))},isDisabled:en,className:"w-full",description:G?.trialsDescription("Number of trials to run for each selected question")??"Number of trials to run for each selected question"})}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(r.Button,{color:"primary",onPress:()=>{0===eZ().length?alert("Please select at least one question to run evaluations on."):ea()},isDisabled:0===e1()||en,className:"w-full",isLoading:en,children:en?G?.runningProgress(`Running... ${ex}/${ev}`,{completed:ex,total:ev}):e1()>0&&ef>1?G?.runEvalsWithTrials(`Run Evals (${e1()} \xd7 ${ef})`,{count:e1(),trials:ef}):G?.runEvalsWithCount(`Run Evals (${e1()})`,{count:e1()})}),en&&ev>0&&(0,t.jsxs)("div",{className:"mt-3 space-y-1",children:[(0,t.jsx)("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:G?.completedProgress(`${ex}/${ev} completed \xb7 ${Math.round(ex/ev*100)}%`,{completed:ex,total:ev,percent:Math.round(ex/ev*100)})}),(0,t.jsx)(tY.Progress,{value:ex/ev*100,size:"sm",color:"primary"})]})]}),(_?.uid===w.PAX_HISTORIA_ADMIN_ACCOUNT_UID||_?.uid===w.PAX_HISTORIA_GAME_ACCOUNT_UID)&&e_.length>0&&(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)(r.Button,{color:"warning",variant:"bordered",onPress:eY,isDisabled:el||en,className:"w-full",isLoading:el,children:el?`Healing... ${ec.completed}/${ec.total}`:`Heal Empty Grades (${e_.length})`}),el&&ec.total>0&&(0,t.jsxs)("div",{className:"mt-2 space-y-1",children:[(0,t.jsxs)("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:[ec.completed,"/",ec.total," completed",ec.failed>0&&` \xb7 ${ec.failed} failed`," · ",Math.round(ec.completed/ec.total*100),"%"]}),(0,t.jsx)(tY.Progress,{value:ec.completed/ec.total*100,size:"sm",color:"warning"})]})]}),(_?.uid===w.PAX_HISTORIA_ADMIN_ACCOUNT_UID||_?.uid===w.PAX_HISTORIA_GAME_ACCOUNT_UID)&&(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)(r.Button,{color:"danger",variant:"bordered",onPress:e2,isDisabled:0===e1()||ep,className:"w-full",isLoading:ep,children:ep?G?.clearing("Clearing..."):G?.clearResponses(`Clear Responses (${e1()})`,{count:e1()})})}),(_?.uid===w.PAX_HISTORIA_ADMIN_ACCOUNT_UID||_?.uid===w.PAX_HISTORIA_GAME_ACCOUNT_UID)&&(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)(r.Button,{color:"danger",onPress:e4,isDisabled:0===e1()||eh,className:"w-full",isLoading:eh,children:eh?G?.deleting("Deleting..."):G?.deleteQuestions(`Delete Questions (${e1()})`,{count:e1()})})})]})}),(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",children:[(0,t.jsx)(m.Input,{placeholder:G?.searchQuestionsPlaceholder("Search questions…")??"Search questions…",value:x,onChange:e=>b(e.target.value),startContent:(0,t.jsx)(V.default,{size:16,className:"text-gray-400"}),variant:"bordered",className:"max-w-sm",isClearable:!0,onClear:()=>b("")}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",isIconOnly:!0,onPress:e6,isLoading:eP||eB,children:(0,t.jsx)(Q,{size:16})}),(0,t.jsxs)(tH.Dropdown,{children:[(0,t.jsx)(tz.DropdownTrigger,{children:(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",startContent:(0,t.jsx)(t4.default,{size:16}),children:G?.columns("Columns")})}),(0,t.jsx)(tJ.DropdownMenu,{disallowEmptySelection:!0,"aria-label":"Select visible columns",closeOnSelect:!1,selectedKeys:new Set(M),selectionMode:"multiple",onSelectionChange:e=>{k(Array.from(e))},children:eQ.map(e=>(0,t.jsx)(tK.DropdownItem,{children:e.label},e.key))})]}),(0,t.jsx)(r.Button,{size:"sm",variant:v?"solid":"bordered",color:v?"primary":"default",onPress:()=>S(e=>!e),children:G?.myQuestions("My Questions")}),(0,t.jsx)(r.Button,{size:"sm",variant:"alphabetical"===j?"solid":"bordered",color:"alphabetical"===j?"primary":"default",onPress:()=>eV("alphabetical"),endContent:"alphabetical"===j?"asc"===T?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:G?.sortAZ("A-Z")}),(0,t.jsx)(r.Button,{size:"sm",variant:"date"===j?"solid":"bordered",color:"date"===j?"primary":"default",onPress:()=>eV("date"),endContent:"date"===j?"asc"===T?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:G?.sortDate("📅 Date")}),(0,t.jsx)(r.Button,{size:"sm",variant:"gradeCount"===j?"solid":"bordered",color:"gradeCount"===j?"primary":"default",onPress:()=>eV("gradeCount"),endContent:"gradeCount"===j?"asc"===T?(0,t.jsx)(X,{size:16}):(0,t.jsx)(Z.default,{size:16}):null,children:"# Count"})]})]}),(0,t.jsxs)(tB.Table,{"aria-label":"Benchmark questions",selectionMode:"multiple",selectedKeys:A,onSelectionChange:R,isHeaderSticky:!0,children:[(0,t.jsx)(tU.TableHeader,{children:eQ.filter(e=>M.includes(e.key)).map(e=>(0,t.jsx)(t$.TableColumn,{children:e.label},e.key))}),(0,t.jsx)(tL.TableBody,{children:eX.map(e=>(0,t.jsx)(tq.TableRow,{children:a=>{switch(a){case"description":return(0,t.jsx)(t_.TableCell,{children:(0,t.jsx)("div",{className:"max-w-md",children:(0,t.jsx)("p",{className:"font-medium",children:e.description})})});case"overallScore":return(0,t.jsx)(t_.TableCell,{children:ek?(0,t.jsx)(B.Spinner,{size:"sm"}):eL.has(e.uid)?(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",color:ez(eH(e.uid)),onPress:()=>{z(e.uid),K()},children:eH(e.uid).toFixed(2)}):(0,t.jsx)("span",{className:"text-sm text-gray-400",children:"-"})});case"gradeCount":{let a=eG.get(e.uid)||0;return(0,t.jsx)(t_.TableCell,{children:(0,t.jsx)(tG.Chip,{size:"sm",variant:"flat",color:a>0?"primary":"default",children:a})})}case"round":return(0,t.jsx)(t_.TableCell,{children:(0,t.jsx)("span",{className:"font-medium",children:e.round})});case"gameLink":return(0,t.jsx)(t_.TableCell,{children:(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",as:"a",href:`/game/${e.gameUID}?round=${e.round}`,target:"_blank",rel:"noopener noreferrer",children:G?.openGame("Open Game")})});case"tags":return(0,t.jsx)(t_.TableCell,{children:(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:e.tags?.map(e=>(0,t.jsx)(tG.Chip,{size:"sm",variant:"flat",children:e},e))})});case"rarity":return(0,t.jsx)(t_.TableCell,{children:e.situationRarity&&(0,t.jsx)(tG.Chip,{size:"sm",color:"extremely-rare"===e.situationRarity?"danger":"rare"===e.situationRarity?"warning":"common"===e.situationRarity?"primary":"success",children:e.situationRarity.replace("-"," ")})});case"status":return(0,t.jsx)(t_.TableCell,{children:e.retired?(0,t.jsx)(tG.Chip,{size:"sm",color:"danger",variant:"flat",children:G?.retired("Retired")}):(0,t.jsx)(tG.Chip,{size:"sm",color:"success",variant:"flat",children:G?.active("Active")})});case"dateAdded":return(0,t.jsx)(t_.TableCell,{children:e.createdAt?(0,t.jsx)("span",{className:"text-sm text-gray-600",children:e.createdAt.toLocaleDateString()}):(0,t.jsx)("span",{className:"text-sm text-gray-400",children:"-"})});case"optionalData":return(0,t.jsx)(t_.TableCell,{children:Object.keys(e.optionalData).length>0?(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",startContent:(0,t.jsx)(tj.default,{size:16}),onPress:()=>{U(e.optionalData),L()},children:G?.viewData("View Data")}):(0,t.jsx)("span",{className:"text-sm text-gray-400",children:"-"})});case"actions":return(0,t.jsx)(t_.TableCell,{children:e.retired?(0,t.jsx)(r.Button,{size:"sm",color:"success",variant:"bordered",onPress:()=>{eE({uid:e.uid,data:{retired:!1}})},children:G?.unretire("Unretire")}):(0,t.jsx)(r.Button,{size:"sm",color:"warning",variant:"bordered",onPress:()=>{eE({uid:e.uid,data:{retired:!0}})},children:G?.retire("Retire")})});default:return(0,t.jsx)(t_.TableCell,{children:"-"})}}},e.uid))})]}),0===eX.length&&(0,t.jsx)("div",{className:"py-8 text-center text-gray-500",children:x||v?G?.noMatchFilters("No questions match the current filters."):G?.noBenchmarkQuestions("No benchmark questions found for this prompt type.")})]}),(0,t.jsx)(n.Modal,{isOpen:et,onClose:er,children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:t6.includes(e.promptKey)?G?.confirmRunEvaluations("Confirm Run Evaluations"):G?.evaluationsNotReady("Evaluations Not Ready")}),(0,t.jsx)(s.ModalBody,{children:t6.includes(e.promptKey)?(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-4",children:G?.confirmRunEvalsDesc(`Are you sure you want to run evaluations for ${e1()} selected question${1!==e1()?"s":""}?`,{count:e1(),plural:1!==e1()?"s":""})}),ef>1&&(0,t.jsx)("p",{className:"mb-4",children:G?.trialsWillRun(`${ef} trial${1!==ef?"s":""} will run for each question, for a total of ${e1()*ef} evaluations.`,{trials:ef,plural:1!==ef?"s":"",total:e1()*ef})}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["This will evaluate the ",e.promptKey," prompt against the selected benchmark questions. All evaluations will run concurrently."]})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-4",children:`Sorry, evaluations aren't ready yet for the ${e.promptKey} prompt type.`}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Currently, only ",t6.join(" and ")," evaluations are supported. Please try again with a different prompt type."]})]})}),(0,t.jsxs)(o.ModalFooter,{children:[(0,t.jsx)(r.Button,{variant:"bordered",onPress:er,children:G?.cancel("Cancel")}),t6.includes(e.promptKey)&&(0,t.jsx)(r.Button,{color:"primary",onPress:e3,children:G?.runEvaluations("Run Evaluations")})]})]})}),(0,t.jsx)(n.Modal,{isOpen:$,onClose:q,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:G?.optionalData("Optional Data")}),(0,t.jsx)(s.ModalBody,{children:F&&(0,t.jsx)(tD.Accordion,{defaultExpandedKeys:Object.keys(F),selectionMode:"multiple",className:"w-full",children:Object.entries(F).map(([e,a])=>(0,t.jsx)(tC.AccordionItem,{"aria-label":e.replace(/([A-Z])/g," $1").trim(),title:e.replace(/([A-Z])/g," $1").trim(),children:(0,t.jsx)("div",{className:"rounded-md bg-gray-50 p-3 dark:bg-gray-800",children:"object"==typeof a&&null!==a?(0,t.jsx)("pre",{className:"text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200",children:JSON.stringify(a,null,2)}):"graderInstructions"===e?(0,t.jsx)("div",{className:"markdown-content text-sm text-gray-800 dark:text-gray-200",children:(0,t.jsx)(eO.default,{remarkPlugins:[t3.default],children:String(a)})}):(0,t.jsx)("p",{className:"text-sm text-gray-800 dark:text-gray-200",children:String(a)})})},e))})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsx)(r.Button,{color:"primary",onPress:q,children:G?.close("Close")})})]})}),(0,t.jsx)(n.Modal,{isOpen:J,onClose:W,size:"2xl",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:G?.scoreDetailsForQuestion("Score Details for Question")}),(0,t.jsx)(s.ModalBody,{children:H&&eq.has(H)&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-4 rounded-lg bg-gray-50 p-3",children:[(0,t.jsx)("h4",{className:"mb-2 font-semibold",children:G?.question("Question")}),(0,t.jsx)("p",{className:"text-sm text-gray-700",children:eC.find(e=>e.uid===H)?.description}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsxs)(tG.Chip,{size:"sm",color:ez(eH(H)),children:["Average Score: ",eH(H).toFixed(2)]})})]}),(0,t.jsx)(tD.Accordion,{selectionMode:"multiple",className:"w-full",children:(0,t.jsx)(tC.AccordionItem,{"aria-label":G?.summary("Summary")??"Summary",title:G?.summary("Summary")??"Summary",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Total Responses:"," ",eq.get(H)?.length||0]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Average Score: ",eH(H).toFixed(3)]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Average Cost: $",(g=eq.get(H))&&0!==g.length?(g.reduce((e,t)=>e+t.totalCost,0)/g.length).toFixed(4):"0.0000"]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Highest Score:"," ",Math.max(...eq.get(H)?.map(e=>e.overallScore)||[0]).toFixed(3)]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Lowest Score:"," ",Math.min(...eq.get(H)?.map(e=>e.overallScore)||[0]).toFixed(3)]}),e$.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Total Grades: ",e$.length]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Average Grade:"," ",(e$.reduce((e,t)=>e+t.grade,0)/e$.length).toFixed(3)]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Highest Grade:"," ",Math.max(...e$.map(e=>e.grade)).toFixed(3)]}),(0,t.jsxs)("p",{className:"text-sm text-gray-600",children:["Lowest Grade:"," ",Math.min(...e$.map(e=>e.grade)).toFixed(3)]})]})]})},"summary")}),eq.get(H)&&(0,t.jsx)(tD.Accordion,{selectionMode:"multiple",className:"mt-4 w-full",children:eq.get(H).map((e,a)=>(0,t.jsx)(tC.AccordionItem,{"aria-label":`Response ${a+1}`,title:`Response ${a+1} - Score: ${e.overallScore.toFixed(3)}`,children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(tG.Chip,{size:"sm",color:ez(e.overallScore),children:e.overallScore.toFixed(3)}),(0,t.jsxs)("span",{className:"text-sm text-gray-500",children:["Cost: $",e.totalCost.toFixed(4)]}),eJ(e.uid).length>0&&(0,t.jsxs)(tG.Chip,{size:"sm",color:ez(eK(e.uid)),variant:"bordered",children:["Grade: ",eK(e.uid).toFixed(3)]}),(0,t.jsx)(r.Button,{size:"sm",variant:"bordered",color:"secondary",isLoading:ei===e.uid,isDisabled:null!==ei,onPress:()=>eW(e.uid),children:"Regrade"})]}),(e.whatWentWellSummary||e.whatWentWrongSummary)&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1 text-sm font-medium",children:"Summary:"}),(0,t.jsxs)("div",{className:"space-y-2",children:[e.whatWentWellSummary&&(0,t.jsxs)("div",{className:"rounded-md bg-green-50 p-3",children:[(0,t.jsx)("p",{className:"mb-1 text-xs font-medium text-green-700",children:"What Went Well:"}),(0,t.jsx)("p",{className:"text-sm text-green-800",children:e.whatWentWellSummary})]}),e.whatWentWrongSummary&&(0,t.jsxs)("div",{className:"rounded-md bg-red-50 p-3",children:[(0,t.jsx)("p",{className:"mb-1 text-xs font-medium text-red-700",children:"What Went Wrong:"}),(0,t.jsx)("p",{className:"text-sm text-red-800",children:e.whatWentWrongSummary})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1 text-sm font-medium",children:"Final Response:"}),(0,t.jsx)("div",{className:"rounded-md bg-gray-50 p-3",children:(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("p",{className:"text-sm whitespace-pre-wrap text-gray-800",children:e.finalResponse.length>200&&!Y.has(e.uid)?(0,t.jsxs)(t.Fragment,{children:[e.finalResponse.slice(0,200),"...",(0,t.jsx)(r.Button,{size:"sm",variant:"light",color:"primary",className:"mt-2",onPress:()=>{ee(t=>new Set([...t,e.uid]))},children:G?.showMore("Show More")})]}):(0,t.jsxs)(t.Fragment,{children:[e.finalResponse,e.finalResponse.length>200&&Y.has(e.uid)&&(0,t.jsx)(r.Button,{size:"sm",variant:"light",color:"primary",className:"mt-2",onPress:()=>{ee(t=>{let a=new Set(t);return a.delete(e.uid),a})},children:G?.showLess("Show Less")})]})})})})]}),eJ(e.uid).length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1 text-sm font-medium",children:"Grades:"}),(0,t.jsx)("div",{className:"space-y-2",children:eJ(e.uid).map((e,a)=>(0,t.jsxs)("div",{className:"rounded-md bg-blue-50 p-3",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-center gap-2",children:[(0,t.jsx)(tG.Chip,{size:"sm",color:ez(e.grade),children:e.grade.toFixed(3)}),(0,t.jsx)("span",{className:"text-xs text-gray-500",children:e.questionTitle})]}),e.reasonForGrade&&(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("p",{className:"mb-1 text-xs font-medium text-gray-700",children:"Reason:"}),(0,t.jsx)("p",{className:"text-xs text-gray-600",children:e.reasonForGrade})]}),e.eventSubGrades&&e.eventSubGrades.length>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-1 text-xs font-medium text-gray-700",children:"Sub-grades:"}),(0,t.jsx)("div",{className:"space-y-1 text-xs text-gray-600",children:e.eventSubGrades.map((e,a)=>(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsxs)("span",{children:[e.eventGraded.title||"Event",":"]}),(0,t.jsx)("span",{children:e.grade.toFixed(3)})]},a))})]}),(0,t.jsxs)("div",{className:"mt-2 text-xs text-gray-500",children:["Created: ",e.createdAt.toLocaleString()]})]},e.uid))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1 text-sm font-medium",children:"Metadata:"}),(0,t.jsxs)("div",{className:"space-y-1 text-sm text-gray-600",children:[(0,t.jsxs)("p",{children:["Created: ",e.createdAt.toLocaleString()]}),(0,t.jsxs)("p",{children:["Prompt Source: ",e.promptSource]}),(0,t.jsxs)("p",{children:["Log UUIDs: ",e.logUUIDs.length," logs"]})]})]})]})},e.uid))})]})}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsx)(r.Button,{color:"primary",onPress:W,children:G?.close("Close")})})]})})]}):(0,t.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,t.jsx)(u.Card,{className:"max-w-md",children:(0,t.jsxs)(p.CardBody,{className:"text-center",children:[(0,t.jsx)("h3",{className:"mb-2 text-lg font-semibold",children:G?.evaluationsUnavailable("Evaluations Unavailable")}),(0,t.jsx)("p",{className:"mb-4 text-gray-600",children:G?.evalsOnlyForJumpForward("Evaluations are only available for jump forward and auto jump forward prompts.")})]})})})}function t8(e,t){return e}let t9=[{key:"chatWithUser",name:"Chat with User",icon:"💬",description:"Configure the AI chat behavior when responding to the user"},{key:"chatWithAdvisor",name:"Chat with Advisor",icon:"🧠",description:"Configure how the advisor AI responds to questions"},{key:"jumpForward",name:"Jump Forward",icon:"📅",description:"Configure how the game generates the next time period"},{key:"autoJumpForward",name:"Auto Jump Forward",icon:"⏭️",description:"Configure how the game automatically jumps forward"},{key:"actions",name:"Actions",icon:"⚡",description:"Configure how actions are generated and processed"},{key:"nextSpeaker",name:"Next Speaker",icon:"🎤",description:"Configure how the game determines the next speaker"},{key:"descriptionToAction",name:"Description to Action",icon:"✨",description:"Configure how descriptions are converted into game actions"},{key:"eventConsolidator",name:"Event Consolidator",icon:"🧾",description:"Configure how past rounds are summarized into consolidated historical context"},{key:"catalystCreation",name:"Catalyst Creation",icon:"🔥",description:"Configure how catalysts are created"},{key:"catalystRunner",name:"Catalyst Runner",icon:"⚙️",description:"Configure how catalysts are executed"},{key:"catalystSummarizer",name:"Catalyst Summarizer",icon:"📝",description:"Configure how catalysts are summarized"},{key:"gameMaster",name:"Game Master",icon:"🎲",description:"Configure the Game Master AI that orchestrates the game"}],t7=[{key:"gradeChatWithUser",name:"Grade Chat with User",icon:"💬",description:"Configure how to grade AI responses to user chat messages"},{key:"gradeChatWithAdvisor",name:"Grade Chat with Advisor",icon:"🧠",description:"Configure how to grade AI advisor responses"},{key:"gradeJumpForward",name:"Grade Jump Forward",icon:"📅",description:"Configure how to grade AI jump forward responses"},{key:"gradeAutoJumpForward",name:"Grade Auto Jump Forward",icon:"⏭️",description:"Configure how to grade AI auto jump forward responses"},{key:"gradeActions",name:"Grade Actions",icon:"⚡",description:"Configure how to grade AI action generation"},{key:"gradeNextSpeaker",name:"Grade Next Speaker",icon:"🎤",description:"Configure how to grade AI next speaker selection"},{key:"gradeDescriptionToAction",name:"Grade Description to Action",icon:"✨",description:"Configure how to grade AI description to action conversion"},{key:"gradeEventConsolidator",name:"Grade Event Consolidator",icon:"🧾",description:"Configure how to grade event consolidation summaries"},{key:"gradeCatalystCreation",name:"Grade Catalyst Creation",icon:"🔥",description:"Configure how to grade catalyst creation"},{key:"gradeCatalystRunner",name:"Grade Catalyst Runner",icon:"⚙️",description:"Configure how to grade catalyst execution"},{key:"gradeCatalystSummarizer",name:"Grade Catalyst Summarizer",icon:"📝",description:"Configure how to grade catalyst summarization"},{key:"gradeGameMaster",name:"Grade Game Master",icon:"🎲",description:"Configure how to grade Game Master AI responses"}],ae=[...t9,...t7,{key:"mapPainter",name:"Map Painter",icon:"🗺️",description:"Prompt for generating map changes from game events. Used for training data generation."},{key:"rewardModelDataset",name:"Reward Model Dataset",icon:"🏆",description:"Prompt used to generate the context/instruction for reward model training data from arena votes."},{key:"exportGameConsolidation",name:"Export Game Consolidation",icon:"📤",description:"Prompt for consolidating game timeline into a new 'World before Round 1' narrative when exporting a game as a preset."}];function at({initialGameID:e,initialRoundNumber:u,initialPrompt:p,isOpen:m,onClose:h,onSavePrompt:g,authorizedToEdit:f=!0}){let{t:y,isLoading:x}=(0,C.useTranslations)("promptEditing","page"),[b,v]=(0,a.useState)(null),[w,S]=(0,a.useState)("edit"),[j,D]=(0,a.useState)(null),{data:N}=tw(),T=a.default.useMemo(()=>{if(b&&null!==b.promptSource&&b.promptKey&&N){let e=N.find(e=>e.UID===b.promptSource);return e?.promptConfig??b}return b},[b,N]),[I,A]=(0,a.useState)(!1),[P,E]=(0,a.useState)(p);m&&(!I||p!==P)&&(v(p),D(p)),I!==m&&A(m),P!==p&&E(p);let O=(0,a.useCallback)(()=>!!b&&!!j&&JSON.stringify(b)!==JSON.stringify(j),[b,j]),R=(0,a.useMemo)(()=>y?{chatWithUser:y.promptChatWithUser("Chat with User"),chatWithAdvisor:y.promptChatWithAdvisor("Chat with Advisor"),jumpForward:y.promptJumpForward("Jump Forward"),autoJumpForward:y.promptAutoJumpForward("Auto Jump Forward"),actions:y.promptActions("Actions"),nextSpeaker:y.promptNextSpeaker("Next Speaker"),descriptionToAction:y.promptDescriptionToAction("Description to Action"),eventConsolidator:y.promptEventConsolidator("Event Consolidator"),catalystCreation:y.promptCatalystCreation("Catalyst Creation"),catalystRunner:y.promptCatalystRunner("Catalyst Runner"),catalystSummarizer:y.promptCatalystSummarizer("Catalyst Summarizer"),gameMaster:y.promptGameMaster("Game Master")}:{},[y]),M=()=>{(!O()||confirm(y.unsavedChangesWarning("You have unsaved changes. Are you sure you want to discard them?")))&&h()};if((0,a.useEffect)(()=>{let e=e=>{O()&&(e.preventDefault(),e.returnValue="")};return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[O]),!m||!b||!T||x||!y)return null;let k=f&&(null===b.promptSource||b.promptSource.startsWith("grade")),F=ae.find(e=>e.key===b.promptKey),B=R[b.promptKey]??F?.name??b.promptKey;return(0,t.jsx)(n.Modal,{isOpen:m,onClose:M,size:"full",scrollBehavior:"inside",children:(0,t.jsxs)(i.ModalContent,{children:[(0,t.jsx)(l.ModalHeader,{children:y.editPrompt("Edit Prompt")}),(0,t.jsxs)(s.ModalBody,{children:[(0,t.jsx)("div",{className:"mb-4 flex items-center justify-between",children:(0,t.jsx)("h2",{className:"flex items-center gap-2 text-xl font-bold",children:`${F?.icon??""} ${B}`})}),(0,t.jsxs)(c.Tabs,{"aria-label":y.editOrTestPrompt("Edit or Test Prompt"),selectedKey:w,onSelectionChange:e=>S(e),color:"primary",variant:"underlined",destroyInactiveTabPanel:!1,children:[(0,t.jsx)(d.Tab,{title:y.promptSource("Prompt Source"),children:(0,t.jsx)("div",{className:"mt-4 min-h-96",children:(0,t.jsx)(tF,{currentPrompt:b,onPromptChange:v,authorizedToEdit:f})})},"source"),(0,t.jsx)(d.Tab,{title:y.edit("Edit"),children:(0,t.jsx)("div",{className:"mt-4 min-h-96",children:(0,t.jsx)(e2,{currentPrompt:T,onPromptChange:v,authorizedToEdit:k})})},"edit"),(0,t.jsx)(d.Tab,{title:y.test("Test"),children:(0,t.jsx)("div",{className:"mt-4 min-h-96",children:(0,t.jsx)(tm,{currentPrompt:T,initialGameID:e,initialRoundNumber:u})})},"test"),(0,t.jsx)(d.Tab,{title:y.evaluate("Evaluate"),children:(0,t.jsx)("div",{className:"mt-4 min-h-96",children:(0,t.jsx)(t5,{currentPrompt:T,initialGameID:e,initialRoundNumber:u})})},"evaluate")]})]}),(0,t.jsx)(o.ModalFooter,{children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,t.jsx)(r.Button,{color:"primary",variant:"light",onPress:M,children:y.close("Close")}),(0,t.jsx)(r.Button,{color:"success",onPress:()=>{b&&(g(b.promptKey,b),D(b))},isDisabled:!O()||!f,children:y.savePrompt("Save Prompt")})]})})]})},`unifiedPromptModal-${e}-${u}`)}e.s(["CATALYST_ADMIN_UIDS",0,["xvfuQ92QUsNPiXhq5Hwcj89WU4f2","4LieVl3tgTRjcH5efnEqmnCqPY82","HTGoNxlNcBemBN0RJZmrXuQy6p43"],"default",()=>at,"evalPromptDescriptions",0,t7,"filterPromptDescriptionsByUser",()=>t8,"simplePromptDescriptions",0,t9],428924)}]);