"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Authentication with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"},a=void 0,c={unversionedId:"topics/develop/authentication/index",id:"topics/develop/authentication/index",title:"Authentication with Momento",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/authentication/index.mdx",sourceDirName:"topics/develop/authentication",slug:"/topics/develop/authentication/",permalink:"/ja/topics/develop/authentication/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/authentication/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"},sidebar:"topicsSidebar",next:{title:"API Keys",permalink:"/ja/topics/develop/authentication/api-keys"}},p={},l=[],s={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Momento\u3092\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u306d\uff01\u6700\u521d\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3068\u3001\u305d\u306e\u5f8c\u3001\u30a2\u30d7\u30ea\u304b\u3089\u547c\u3073\u51fa\u3057\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Momento\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com"},"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"),"\u3092\u4f7f\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u5229\u7528\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/topics/develop/authentication/api-keys"},"API\u30ad\u30fc"),"\u3092\u4f7f\u3063\u3066\u3001\u9577\u671f\u7684\u306bAPI\u30ad\u30fc\u3092\u4fdd\u5b58\u3057\u3066\u5229\u7528\u3059\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/topics/develop/authentication/tokens"},"\u30c8\u30fc\u30af\u30f3"),"\u3092\u4f7f\u7528\u3057\u305f\u77ed\u671f\u7684\u304b\u3064\u9650\u5b9a\u7684\u306a\u7bc4\u56f2\u3067\u5229\u7528\u3059\u308b\u3002")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u65b9\u6cd5\u306b\u306f\u69d8\u3005\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3068\u5b9f\u88c5\u304c\u3042\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u304c\u69cb\u7bc9\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u306b\u3088\u3063\u3066\u306f\u3001\u77ed\u671f\u9593\u3067\u304b\u3064\u30b9\u30b3\u30fc\u30d7\u304c\u9650\u5b9a\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u3092\u5927\u91cf\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u767a\u884c\u3059\u308b\u3053\u3068\u3092\u9078\u629e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/topics/develop/authentication/tokens"},"tokens"),"\u306e\u30da\u30fc\u30b8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3082\u3057\u304b\u3057\u305f\u3089\u3001API\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u30661\u5e74\u9593\u5229\u7528\u3059\u308b\u3002\u305d\u3093\u306a\u6642\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/topics/develop/authentication/api-keys"},"API\u30ad\u30fc"),"\u306e\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3069\u308c\u304c\u81ea\u5206\u306b\u5411\u3044\u3066\u3044\u308b\u304b\u6c7a\u3081\u308b\u306e\u306b\u304a\u56f0\u308a\u3067\u3059\u304b\uff1f\u304a\u4efb\u305b\u304f\u3060\u3055\u3044\ud83d\udc47"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Table of differences between API keys and tokens",src:n(6697).Z,width:"1600",height:"1391"})),(0,r.kt)("p",null,"\u307e\u3060\u3069\u306e\u9078\u629e\u3092\u53d6\u308c\u3070\u826f\u3044\u304b\u56f0\u3063\u3066\u3044\u307e\u3059\u304b\uff1f\u6b21\u306e\u30da\u30fc\u30b8\u306b\u3042\u308b\u8a73\u7d30\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u89a7\u306b\u306a\u308b\u304b\u3001",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord"),"\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u304a\u6c17\u8efd\u306b\u6295\u3052\u3066\u304f\u3060\u3055\u3044\uff01"))}u.isMDXComponent=!0},6697:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/api-keys-vs-tokens-32246185f7f1d832ffc0f3d006caaa9a.png"}}]);