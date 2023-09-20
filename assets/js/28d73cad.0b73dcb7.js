"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Momento Python SDK",pagination_prev:null,sidebar_label:"Python",description:"Information about the Momento Python SDK"},a="Momento Python SDK",l={unversionedId:"vector-index/develop/sdks/python/index",id:"vector-index/develop/sdks/python/index",title:"Momento Python SDK",description:"Information about the Momento Python SDK",source:"@site/docs/vector-index/develop/sdks/python/index.md",sourceDirName:"vector-index/develop/sdks/python",slug:"/vector-index/develop/sdks/python/",permalink:"/vector-index/develop/sdks/python/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/sdks/python/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Momento Python SDK",pagination_prev:null,sidebar_label:"Python",description:"Information about the Momento Python SDK"},sidebar:"vectorSidebar",next:{title:"Cheat Sheet",permalink:"/vector-index/develop/sdks/python/cheat-sheet"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-python-sdk"},"Momento Python SDK"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of a python",src:n(5048).Z,width:"1000",height:"338"})),(0,r.kt)("p",null,"Welcome to the Momento Python SDK documentation!"),(0,r.kt)("p",null,"The Momento Python SDK is available via the pypi package ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/momento/"},(0,r.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-python"},"momentohq/client-sdk-python"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.7")," or above is required"),(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python/blob/main/examples/README.md"},"Python SDK Examples"),": working example projects that illustrate how to use the Python SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Python SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Python SDK")))}m.isMDXComponent=!0},5048:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/snake-74b4d90175b0d36b605f7775f7ccde79.png"}}]);