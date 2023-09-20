"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},i="Permissions and access control",s={unversionedId:"cache/develop/authentication/permissions",id:"cache/develop/authentication/permissions",title:"Permissions and access control",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",source:"@site/docs/cache/develop/authentication/permissions.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/permissions",permalink:"/cache/develop/authentication/permissions",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/permissions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Permissions and access control",sidebar_label:"Permissions",description:"Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Tokens",permalink:"/cache/develop/authentication/tokens"}},l={},c=[{value:"Scope",id:"scope",level:2},{value:"Roles",id:"roles",level:3},{value:"Cache roles",id:"cache-roles",level:4},{value:"Topic roles",id:"topic-roles",level:4},{value:"Cache",id:"cache",level:3},{value:"Cache Examples",id:"cache-examples",level:4},{value:"Topic examples",id:"topic-examples",level:4},{value:"Item-level restriction",id:"item-level-restriction",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permissions-and-access-control"},"Permissions and access control"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"a technical illustration of Momento permissions and access control.",src:n(6272).Z,width:"1000",height:"226"})),(0,o.kt)("p",null,"It's all fun and games until you can't access your resources. Speaking of accessing your resources, that's exactly what we're here to talk about - ",(0,o.kt)("em",{parentName:"p"},"stopping people from accessing things they shouldn't.")),(0,o.kt)("p",null,"As a reminder, there are two primary forms of authentication in Momento:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cache/develop/authentication/api-keys"},"API keys"),": long-lived, durable values for programmatic usage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cache/develop/authentication/tokens"},"Tokens"),": short-lived, limited-scope values for temporary usage by individuals (users or devices)")),(0,o.kt)("p",null,"You can create API keys directly in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console"),", but you are required to create tokens programmatically. Let's talk about the options you have when limiting the permission set for an API key or token using access control."),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"When creating an API key, you build a ",(0,o.kt)("inlineCode",{parentName:"p"},"PermissionScope")," object. When creating a token, you create a ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenScope")," object. These objects are mostly the same but with one big difference. First, the similarities."),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Momento provides pre-built roles to use when creating your scope objects. \ud83d\udc47"),(0,o.kt)("h4",{id:"cache-roles"},"Cache roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"readwrite")," - Provides full access to cache data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"writeonly")," - Provides access to only write operations (",(0,o.kt)("inlineCode",{parentName:"li"},"set"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sortedSetIncrementScore"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"listPopFront"),", etc...)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"readonly")," - Provides access to only read operations (",(0,o.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dictionaryFetch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"setFetch"),", etc...). These are non-destructive operations")),(0,o.kt)("h4",{id:"topic-roles"},"Topic roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"publishsubscribe")," - Provides full access to topic data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"publishonly")," - Provides access to only write operations (",(0,o.kt)("inlineCode",{parentName:"li"},"publish"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"subscribeonly")," - Provides access to only read operations (",(0,o.kt)("inlineCode",{parentName:"li"},"subscribe"),")")),(0,o.kt)("h3",{id:"cache"},"Cache"),(0,o.kt)("p",null,"Believe it or not, you must provide a cache name when creating permissions for caches ",(0,o.kt)("em",{parentName:"p"},"and")," topics. Topics don't technically use the cache itself but utilize them as a namespace of sorts. So when building your scope, you must provide the cache name no matter what."),(0,o.kt)("p",null,"You can provide the name of the cache as a string or use a value imported from the SDK. The same goes for the topic name."),(0,o.kt)("h4",{id:"cache-examples"},"Cache Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches\n    }\n  ]\n};\n")),(0,o.kt)("h4",{id:"topic-examples"},"Topic examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "topic": "test"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { AllCaches, AllTopics } from '@gomomento/sdk';\n\nconst scope = {\n  permissions: [\n    {\n      role: 'readonly',\n      cache: AllCaches,\n      topic: AllTopics\n    }\n  ]\n};\n")),(0,o.kt)("h3",{id:"item-level-restriction"},"Item-level restriction"),(0,o.kt)("p",null,"Everything we've discussed so far applies to both API keys and tokens. But now we need to talk about a token-specific restriction you can use: ",(0,o.kt)("strong",{parentName:"p"},"item-level restrictions")," to control access."),(0,o.kt)("p",null,"When you give access to a cache, you can limit access down to individual keys or keys that begin with a certain prefix. Let's take an example of a permission set that limits the user to two specific keys in a cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "key": "mappings"\n      }\n    },\n    {\n      "role": "readwrite",\n      "cache": "demo",\n      "item": {\n        "key": "hits"\n      }\n    },\n  ]\n}\n')),(0,o.kt)("p",null,"This will explicitly grant ",(0,o.kt)("em",{parentName:"p"},"read-only")," access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mappings")," key and ",(0,o.kt)("em",{parentName:"p"},"read and write")," access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"hits")," key in the ",(0,o.kt)("em",{parentName:"p"},"demo")," cache. If you wanted to grand the same role for multiple keys, you would construct the permission set similar to above but providing the desired role. You cannot pass multiple keys to a single permission."),(0,o.kt)("p",null,"If you want to grant access to a range of keys, you also have the option to use a prefix - meaning all keys starting with a specific string will be granted access. Imagine you had your cache keys in a format that included the tenant id in a multi-tenanted system: ",(0,o.kt)("inlineCode",{parentName:"p"},"{tenantId}-{key}"),". To create a permission set that allows read access to all keys for a specific tenant, you can build out the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": [\n    {\n      "role": "readonly",\n      "cache": "demo",\n      "item": {\n        "keyPrefix": "MYTENANTID-"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Consumers of the token generated with this permission set would be allowed to read from any key that started with ",(0,o.kt)("inlineCode",{parentName:"p"},"MYTENANTID-"),". Attempting to read from a key starting with a different tenant id would result in an authorization error being returned."))}m.isMDXComponent=!0},6272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/permissions-page-c04b7f20ad5a13da2d2094de2d1d1f97.jpg"}}]);