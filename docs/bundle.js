(()=>{"use strict";var r={144:(r,n,t)=>{t.d(n,{Z:()=>a});var e=t(537),A=t.n(e),o=t(645),i=t.n(o)()(A());i.push([r.id,'body{padding:0;margin:0;box-sizing:border-box;background-color:#797b9a;user-select:none}.background{width:100%;height:100vh;overflow:hidden;position:absolute;top:0;background:linear-gradient(0deg, #261e2f, #191a24);z-index:1}.hills{position:absolute;bottom:0;right:-230px;height:200px;z-index:2}@media screen and (min-width: 768px){.hills{right:0}}@media screen and (min-width: 1280px){.hills{width:100%;height:auto;max-height:40%}}.stars{position:absolute;width:100%;height:100%;z-index:1;object-fit:cover;animation:flying-stars 10s infinite linear}.stars.copy{left:-100vw}@keyframes flying-stars{0%{transform:translateX(0)}100%{transform:translateX(100vw)}}.cards-container{margin:auto;margin-top:10vh;position:relative;z-index:3;width:90%;display:flex;justify-content:space-between}@media screen and (min-width: 820px){.cards-container{width:800px}}.card-placeholder{position:relative;width:60px;height:57px}@media screen and (min-width: 420px){.card-placeholder{width:90px;height:85px}}@media screen and (min-width: 630px){.card-placeholder{width:130px;height:120px}}.card{width:100%;height:100%;transform-origin:center;z-index:11;position:relative;transition:.2s all linear,0s color linear}.card-top{z-index:5}.card-bottom{z-index:4}.card-top,.card-bottom{position:relative;width:100%;height:50%;overflow:hidden}.card-top:after,.card-top:before,.card-bottom:after,.card-bottom:before{content:"";display:block;width:8px;height:8px;border-radius:99px;position:absolute;transform:translate(50%, -50%)}.card-top{border-top-left-radius:4px;border-top-right-radius:4px}.card-top:after{right:100%;top:100%}.card-top:before{right:0%;top:100%}.card-top:after,.card-top:before{box-shadow:5px -5px 0px 80px #2c2c44,5px -50px 0px 80px #2c2c44}.card-top.static{position:absolute;top:0;z-index:10}.card-bottom{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.card-bottom:after{right:0%;top:0%}.card-bottom:before{right:100%;top:0%}.card-bottom:after,.card-bottom:before{box-shadow:5px 5px 0px 80px #34364f,5px 50px 0px 80px #34364f}.card-bottom.static{position:absolute;bottom:0;z-index:10;box-shadow:0px 10px 13px -7px #000}.title-container{margin-top:15vh;position:relative;z-index:3}.title-container .title{color:#fff;font-size:1.875rem;text-align:center;text-transform:uppercase;font-family:"Red Hat Text",sans-serif;font-weight:700;letter-spacing:.2rem}h1{margin:0;padding:0}.time-count{z-index:10;display:block;position:absolute;background:linear-gradient(180deg, #d7516f 50%, #f95d83 50%);color:transparent;background-clip:text;-webkit-background-clip:text;-ms-background-clip:text;-moz-background-clip:text;text-align:center;font-family:"Red Hat Text",sans-serif;font-size:2.5rem;font-weight:700;width:60px;height:57px;line-height:57px}@media screen and (min-width: 420px){.time-count{font-size:3.5rem;width:90px;height:85px;line-height:85px}}@media screen and (min-width: 630px){.time-count{font-size:5rem;width:130px;height:120px;line-height:120px}}.time-count.bottom{transform:translateY(-50%)}.time-count-name{color:rgba(255,255,255,.6);text-align:center;width:100%;display:block;font-size:.75rem;font-family:"Red Hat Text",sans-serif;text-transform:uppercase;margin-top:20px}@media screen and (min-width: 420px){.time-count-name{font-size:.875rem}}.link-icons{position:absolute;z-index:3;display:grid;grid-template-columns:1fr 1fr 1fr;place-items:center;width:200px;bottom:50px;left:50%;transform:translateX(-50%)}.icon{cursor:pointer}.icon:hover{transform:scale(110%)}.icon:hover path{fill:#fff !important}',"",{version:3,sources:["webpack://./src/styles/background.scss","webpack://./src/styles/colors.scss","webpack://./src/styles/cards.scss","webpack://./src/styles/header.scss","webpack://./src/styles/fonts.scss","webpack://./src/styles/footer.scss"],names:[],mappings:"AAEA,KACE,SAAA,CACA,QAAA,CACA,qBAAA,CACA,wBCNS,CDOT,gBAAA,CAGF,YACE,UAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,KAAA,CACA,kDAAA,CACA,SAAA,CAGF,OACE,iBAAA,CACA,QAAA,CACA,YAAA,CACA,YAAA,CACA,SAAA,CAGA,qCARF,OASI,OAAA,CAAA,CAIF,sCAbF,OAcI,UAAA,CACA,WAAA,CACA,cAAA,CAAA,CAIJ,OACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,gBAAA,CACA,0CAAA,CAGA,YACE,WAAA,CAKJ,wBACE,GACE,uBAAA,CAEF,KACE,2BAAA,CAAA,CE1DJ,iBACE,WAAA,CACA,eAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,YAAA,CACA,6BAAA,CAEA,qCATF,iBAUI,WAAA,CAAA,CAIJ,kBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,qCAJF,kBAKI,UAAA,CACA,WAAA,CAAA,CAEF,qCARF,kBASI,WAAA,CACA,YAAA,CAAA,CAIJ,MACE,UAAA,CACA,WAAA,CACA,uBAAA,CACA,UAAA,CACA,iBAAA,CACA,yCAAA,CAGF,UACE,SAAA,CAGF,aACE,SAAA,CAGF,uBAEE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,eAAA,CAMF,wEAIE,UAAA,CACA,aAAA,CACA,SAAA,CACA,UAAA,CACA,kBAAA,CAEA,iBAAA,CACA,8BAAA,CAGF,UACE,0BAAA,CACA,2BAAA,CACA,gBACE,UAAA,CACA,QAAA,CAEF,iBACE,QAAA,CACA,QAAA,CAEF,iCAEE,+DAAA,CAEF,iBACE,iBAAA,CACA,KAAA,CACA,UAAA,CAIJ,aACE,6BAAA,CACA,8BAAA,CACA,mBACE,QAAA,CACA,MAAA,CAEF,oBACE,UAAA,CACA,MAAA,CAEF,uCAEE,6DAAA,CAEF,oBACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,kCAAA,CC/GJ,iBACE,eAAA,CACA,iBAAA,CACA,SAAA,CACA,wBACE,UFJI,CEKJ,kBAAA,CACA,iBAAA,CACA,wBAAA,CACA,qCAAA,CACA,eAAA,CACA,oBAAA,CCXJ,GACE,QAAA,CACA,SAAA,CAGF,YACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,4DAAA,CACA,iBAAA,CACA,oBAAA,CACA,4BAAA,CACA,wBAAA,CACA,yBAAA,CACA,iBAAA,CACA,qCAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,qCAjBF,YAkBI,gBAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CAAA,CAEF,qCAvBF,YAwBI,cAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CAAA,CAEF,mBACE,0BAAA,CAIJ,iBACE,0BHtCiB,CGuCjB,iBAAA,CACA,UAAA,CACA,aAAA,CACA,gBAAA,CACA,qCAAA,CACA,wBAAA,CACA,eAAA,CACA,qCATF,iBAUI,iBAAA,CAAA,CCjDJ,YACE,iBAAA,CACA,SAAA,CACA,YAAA,CACA,iCAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,QAAA,CACA,0BAAA,CAGF,MACE,cAAA,CACA,YACE,qBAAA,CACA,iBACE,oBAAA",sourcesContent:['@import "./colors.scss";\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  background-color: $grayBlue;\r\n  user-select: none;\r\n}\r\n\r\n.background {\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  background: linear-gradient(0deg, $bgStart, $bgEnd);\r\n  z-index: 1;\r\n}\r\n\r\n.hills {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: -230px;\r\n  height: 200px;\r\n  z-index: 2;\r\n\r\n  /* Move hills more to center on bigger screens */\r\n  @media screen and (min-width: 768px) {\r\n    right: 0;\r\n  }\r\n\r\n  /* Automatic scaling after 1280px */\r\n  @media screen and (min-width: 1280px) {\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 40%;\r\n  }\r\n}\r\n\r\n.stars {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  object-fit: cover;\r\n  animation: flying-stars 10s infinite linear;\r\n\r\n  // Copy for flying stars animation\r\n  &.copy {\r\n    left: -100vw;\r\n  }\r\n}\r\n\r\n/* Stars animation */\r\n@keyframes flying-stars {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  100% {\r\n    transform: translateX(100vw);\r\n  }\r\n}\r\n',"$grayBlue: hsl(236, 14%, 54%);\r\n$softRed: #d7516f;\r\n$softRed2: #f95d83;\r\n$white: hsl(0, 0%, 100%);\r\n$whiteTransparent: rgba(255, 255, 255, 0.6);\r\n$darkBlue: #34364f;\r\n$darkBlue2: #2c2c44;\r\n$darkBlue3: hsl(234, 17%, 12%);\r\n$bgStart: #261e2f;\r\n$bgEnd: #191a24;\r\n",'@import "./colors.scss";\r\n\r\n.cards-container {\r\n  margin: auto;\r\n  margin-top: 10vh;\r\n  position: relative;\r\n  z-index: 3;\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  /* border: 2px solid green; */\r\n  @media screen and (min-width: 820px) {\r\n    width: 800px;\r\n  }\r\n}\r\n\r\n.card-placeholder {\r\n  position: relative;\r\n  width: 60px;\r\n  height: 57px;\r\n  @media screen and (min-width: 420px) {\r\n    width: 90px;\r\n    height: 85px;\r\n  }\r\n  @media screen and (min-width: 630px) {\r\n    width: 130px;\r\n    height: 120px;\r\n  }\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  height: 100%;\r\n  transform-origin: center;\r\n  z-index: 11;\r\n  position: relative;\r\n  transition: 0.2s all linear, 0s color linear;\r\n}\r\n\r\n.card-top {\r\n  z-index: 5;\r\n}\r\n\r\n.card-bottom {\r\n  z-index: 4;\r\n}\r\n\r\n.card-top,\r\n.card-bottom {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 50%;\r\n  overflow: hidden;\r\n  /* border: 2px solid red; */\r\n}\r\n\r\n/* Cards filled with box shadow to provide scooped corners */\r\n\r\n.card-top:after,\r\n.card-top:before,\r\n.card-bottom:after,\r\n.card-bottom:before {\r\n  content: "";\r\n  display: block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 99px;\r\n  /* border: 1px solid green; */\r\n  position: absolute;\r\n  transform: translate(50%, -50%);\r\n}\r\n\r\n.card-top {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  &:after {\r\n    right: 100%;\r\n    top: 100%;\r\n  }\r\n  &:before {\r\n    right: 0%;\r\n    top: 100%;\r\n  }\r\n  &:after,\r\n  &:before {\r\n    box-shadow: 5px -5px 0px 80px $darkBlue2, 5px -50px 0px 80px $darkBlue2;\r\n  }\r\n  &.static {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 10;\r\n  }\r\n}\r\n\r\n.card-bottom {\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  &:after {\r\n    right: 0%;\r\n    top: 0%;\r\n  }\r\n  &:before {\r\n    right: 100%;\r\n    top: 0%;\r\n  }\r\n  &:after,\r\n  &:before {\r\n    box-shadow: 5px 5px 0px 80px $darkBlue, 5px 50px 0px 80px $darkBlue;\r\n  }\r\n  &.static {\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 10;\r\n    box-shadow: 0px 10px 13px -7px #000000;\r\n  }\r\n}\r\n','@import "./colors.scss";\r\n\r\n.title-container {\r\n  margin-top: 15vh;\r\n  position: relative;\r\n  z-index: 3;\r\n  .title {\r\n    color: $white;\r\n    font-size: 1.875rem;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: "Red Hat Text", sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n','@import "./colors.scss";\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.time-count {\r\n  z-index: 10;\r\n  display: block;\r\n  position: absolute;\r\n  background: linear-gradient(180deg, $softRed 50%, $softRed2 50%);\r\n  color: transparent;\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -ms-background-clip: text;\r\n  -moz-background-clip: text;\r\n  text-align: center;\r\n  font-family: "Red Hat Text", sans-serif;\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  width: 60px;\r\n  height: 57px;\r\n  line-height: 57px;\r\n  @media screen and (min-width: 420px) {\r\n    font-size: 3.5rem;\r\n    width: 90px;\r\n    height: 85px;\r\n    line-height: 85px;\r\n  }\r\n  @media screen and (min-width: 630px) {\r\n    font-size: 5rem;\r\n    width: 130px;\r\n    height: 120px;\r\n    line-height: 120px;\r\n  }\r\n  &.bottom {\r\n    transform: translateY(-50%);\r\n  }\r\n}\r\n\r\n.time-count-name {\r\n  color: $whiteTransparent;\r\n  text-align: center;\r\n  width: 100%;\r\n  display: block;\r\n  font-size: 0.75rem;\r\n  font-family: "Red Hat Text", sans-serif;\r\n  text-transform: uppercase;\r\n  margin-top: 20px;\r\n  @media screen and (min-width: 420px) {\r\n    font-size: 0.875rem;\r\n  }\r\n}\r\n','@import "./colors.scss";\r\n\r\n.link-icons {\r\n  position: absolute;\r\n  z-index: 3;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  place-items: center;\r\n  width: 200px;\r\n  bottom: 50px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  &:hover {\r\n    transform: scale(110%);\r\n    path {\r\n      fill: $white !important;\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}]);const a=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,A,o){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<r.length;c++){var d=[].concat(r[c]);e&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),A&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=A):d[4]="".concat(A)),n.push(d))}},n}},537:r=>{r.exports=function(r){var n=r[1],t=r[3];if(!t)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),o="/*# ".concat(A," */"),i=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},379:(r,n,t)=>{var e,A=function(){var r={};return function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[n]=t}return r[n]}}(),o=[];function i(r){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===r){n=t;break}return n}function a(r,n){for(var t={},e=[],A=0;A<r.length;A++){var a=r[A],s=n.base?a[0]+n.base:a[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var C=i(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==C?(o[C].references++,o[C].updater(p)):o.push({identifier:d,updater:h(p,n),references:1}),e.push(d)}return e}function s(r){var n=document.createElement("style"),e=r.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(r){n.setAttribute(r,e[r])})),"function"==typeof r.insert)r.insert(n);else{var i=A(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,d=(c=[],function(r,n){return c[r]=n,c.filter(Boolean).join("\n")});function C(r,n,t,e){var A=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(r.styleSheet)r.styleSheet.cssText=d(n,A);else{var o=document.createTextNode(A),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(o,i[n]):r.appendChild(o)}}function p(r,n,t){var e=t.css,A=t.media,o=t.sourceMap;if(A?r.setAttribute("media",A):r.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var l=null,m=0;function h(r,n){var t,e,A;if(n.singleton){var o=m++;t=l||(l=s(n)),e=C.bind(null,t,o,!1),A=C.bind(null,t,o,!0)}else t=s(n),e=p.bind(null,t,n),A=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return e(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e(r=n)}else A()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var e=0;e<t.length;e++){var A=i(t[e]);o[A].references--}for(var s=a(r,n),c=0;c<t.length;c++){var d=i(t[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(e){var A=n[e];if(void 0!==A)return A.exports;var o=n[e]={id:e,exports:{}};return r[e](o,o.exports,t),o.exports}t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=t(379),n=t.n(r),e=t(144);n()(e.Z,{insert:"head",singleton:!1}),e.Z.locals;var A=function(r){return r<10?"0"+r:""+r};var o=function(){for(var r={current:document.getElementById("days"),timeKey:"days"},n={current:document.getElementById("hours"),timeKey:"hours"},t={timeKey:"minutes",current:document.getElementById("minutes")},e={timeKey:"seconds",current:document.getElementById("seconds")},A=[r,n,t,e],o=0;o<A.length;o++){var i=A[o];if(!i.current)throw new Error("Could not find specified card container.");i.staticTop=i.current.querySelector(".staticTop"),i.staticBottom=i.current.querySelector(".staticBottom"),i.movingCard=i.current.querySelector(".movingCard"),i.staticTopVal=i.current.querySelector(".staticTopVal"),i.staticBottomVal=i.current.querySelector(".staticBottomVal"),i.movingVal=i.current.querySelector(".movingVal")}return{days:r,hours:n,minutes:t,seconds:e}}(),i=function(r){for(var n=[],t=0,e=r;t<e.length;t++){var A=e[t];if(!(A.current&&A.movingCard&&A.movingVal&&A.staticBottom&&A.staticBottomVal&&A.staticTop&&A.staticTopVal))throw new Error("Could not load necessary card elemnents.");n.push(A)}return n}([o.days,o.hours,o.minutes,o.seconds]),a={days:14,hours:0,minutes:0,seconds:0};setInterval((function(){!function(r){r.seconds--,r.seconds<0&&(r.seconds=59,r.minutes--),r.minutes<0&&(r.minutes=59,r.hours--),r.hours<0&&(r.hours=59,r.days--)}(a);var r=i.filter((function(r){var n;return A(a[r.timeKey])!==(null===(n=r.movingVal)||void 0===n?void 0:n.innerText)}));!function(r,n){for(var t=0,e=r;t<e.length;t++){var o=e[t];o.staticTop.style.zIndex="10",o.staticTopVal.innerText=A(n[o.timeKey]),o.staticBottom.style.zIndex="12",o.movingCard.style.transform="perspective(300px) rotateX(-90deg)"}setTimeout((function(){for(var t=0,e=r;t<e.length;t++){var o=e[t];o.staticTop.style.zIndex="12",o.movingCard.style.transition="0s all linear",o.movingCard.style.transform="perspective(300px) rotateX(90deg)",o.movingVal.innerText=A(n[o.timeKey]),o.staticBottom.style.zIndex="10"}setTimeout((function(){for(var t=0,e=r;t<e.length;t++){var o=e[t];o.movingCard.style.transition="0.3s all linear",o.movingCard.style.transform="perspective(300px) rotateX(0deg)"}setTimeout((function(){for(var t=0,e=r;t<e.length;t++){var o=e[t];o.staticBottomVal.innerText=A(n[o.timeKey])}}),180)}),20)}),300)}(r,a)}),1e3)})()})();
//# sourceMappingURL=bundle.js.map