"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6038],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:5,title:"Momento Go SDK",pagination_prev:null,sidebar_label:"Go",description:"Information about the Momento Go SDK"},a="Momento Go SDK",l={unversionedId:"topics/develop/sdks/go/index",id:"topics/develop/sdks/go/index",title:"Momento Go SDK",description:"Information about the Momento Go SDK",source:"@site/docs/topics/develop/sdks/go/index.md",sourceDirName:"topics/develop/sdks/go",slug:"/topics/develop/sdks/go/",permalink:"/topics/develop/sdks/go/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/sdks/go/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Momento Go SDK",pagination_prev:null,sidebar_label:"Go",description:"Information about the Momento Go SDK"},sidebar:"topicsSidebar",next:{title:"Java",permalink:"/topics/develop/sdks/java/"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-go-sdk"},"Momento Go SDK"),(0,r.kt)("img",{src:"/img/gophers.png",width:"90%",alt:"a picture of gophers dancing."}),(0,r.kt)("p",null,"Welcome to the Momento Go SDK documentation!"),(0,r.kt)("p",null,"The Momento Go SDK is available to install via GitHub: ",(0,r.kt)("inlineCode",{parentName:"p"},"go get github.com/momentohq/client-sdk-go"),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-go"},"momentohq/client-sdk-go"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"Go")),(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md"},"Go SDK Examples"),": working example projects that illustrate how to use the Go SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Go SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Go SDK")))}m.isMDXComponent=!0}}]);