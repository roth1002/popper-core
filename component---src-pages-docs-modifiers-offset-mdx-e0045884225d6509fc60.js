(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7oih":function(e,t,a){"use strict";a("zTTH"),a("sC2a");var n=a("wTIg"),o=a("q1tI"),c=a.n(o),s=a("Wbzz"),r=a("7ljp"),p=a("qKvR"),i=a("eVhr"),l=a("4FWg"),b=a("9Yco"),d=function(e){var t=e.children;return Object(p.d)(s.StaticQuery,{query:"3609520525",render:function(e){var a=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(a)},data:b})};a("HQhv");function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];if(0===e.slug.indexOf(n.slug+"/"))return void u(e,n.children)}t.push({title:e.title,slug:e.slug,children:[]})}a("cFtU"),a("q8oJ"),a("m210"),a("4DPX"),a("gu/5"),a("eoYm"),a("zGcK"),a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("ToIb");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=new Set(["/404/"]),g=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],N=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function O(e){var t=e.filter((function(e){return!f.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return N.indexOf(e.title)-N.indexOf(t.title)}));return[].concat(m(t.filter((function(e){return!g.some((function(t){return e.slug.includes(t)}))}))),m(g.reduce((function(e,a){return[].concat(m(e),m(t.filter((function(e){return e.slug.includes(a)}))))}),[])))}var h=a("vUvN"),j=a.n(h),k=(a("Ggvi"),a("sc67"),a("E5k/"),a("17x9")),v=a.n(k);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var w=function(e){var t=e.color,a=e.size,n=y(e,["color","size"]);return c.a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),c.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),c.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),c.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};w.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},w.defaultProps={color:"currentColor",size:"24"};var S=w,z={name:"80dmy3",styles:"display:block;transform:translateX(0);"},C=Object(n.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&z})," ",l.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),H={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},T=Object(n.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&H})),P=Object(n.a)(s.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),V=Object(n.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",l.d.lg,"{display:none;}"),E={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},R=Object(n.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",l.d.md,"{display:block;}",(function(e){return e.scrolled&&E})),F=function(e){var t=e.mobile;return Object(p.d)("img",{src:j.a,draggable:"false",alt:"Popper Logo",css:Object(p.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},A=Object(n.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),M=Object(n.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:25px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",l.d.lg,"{display:none;}"),q=Object(n.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",l.d.lg,"{margin-top:15px;}"),B=function e(t){var a=t.route;return Object(p.d)(c.a.Fragment,null,Object(p.d)(T,{root:!0},Object(p.d)("li",null,Object(p.d)(P,{to:a.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},a.title)),Object(p.d)(T,{root:1===a.slug.split("/").length},a.children.map((function(t,a){return Object(p.d)(e,{key:a,route:t})})))))},D=0;function I(e){e.description,e.lang,e.meta,e.title;var t=Object(o.useState)(!1),a=t[0],n=t[1],s=Object(o.useState)(!1),r=s[0],i=s[1],l=Object(o.useRef)();function b(){n(!0)}function m(){n(!1)}function f(){var e=l.current.scrollTop;D=e,i(e>10)}return Object(o.useLayoutEffect)((function(){var e=l.current;e.scrollTop=D;var t=e.querySelector('[aria-current="page"]');if(t){var a=t.getBoundingClientRect();(a.bottom>window.innerHeight||a.top<0)&&t.scrollIntoView()}}),[]),Object(p.d)(d,null,(function(e){return Object(p.d)(c.a.Fragment,null,Object(p.d)(V,null,Object(p.d)(A,{onClick:b,"aria-expanded":a?"true":"false","aria-label":"Click to open navigation menu"},Object(p.d)(S,{size:30})),Object(p.d)(F,{mobile:!0})),Object(p.d)(C,{open:a,ref:l,onScroll:f},Object(p.d)(R,{scrolled:r},Object(p.d)(F,null)),Object(p.d)(M,{onClick:m},"Close Menu"),Object(p.d)(q,null,function(e){for(var t=[],a=0;a<e.length;a++){u(e[a],t)}return t}(O(e)).map((function(e,t){return Object(p.d)(B,{route:e,key:t})})))))}))}var L=a("9CUm");a("8ypT"),a("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var X=function(e){var t=e.color,a=e.size,n=K(e,["color","size"]);return c.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),c.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};X.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},X.defaultProps={color:"currentColor",size:"24"};var U=X,W=a("EAKA"),Y=Object(n.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.d.lg,"{padding-top:0;margin-left:",260,"px;}"),J=Object(n.a)(l.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.d.lg,"{margin-left:",260,"px;}"),Q=Object(n.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),Z=Object(n.a)(l.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",l.d.md,"{padding:0 40px;}"),$=(Object(n.a)("div",{target:"e1fogcta4"})({name:"1xbc0mm",styles:"padding:50px 25px;border:none;"}),Object(n.a)("div",{target:"e1fogcta5"})({name:"i0w8di",styles:"flex:1;min-width:0;display:flex;"})),_=Object(n.a)("div",{target:"e1fogcta6"})("display:none;min-width:1px;background:#44395d;height:100%;",l.d.md,"{display:block;}"),ee=Object(n.a)(s.Link,{target:"e1fogcta7"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;",l.d.md,"{font-size:22px;width:100%;}",l.d.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}text-align:",(function(e){return e.first?"left":"right"}),";"),te=Object(p.c)("vertical-align:3px;",l.d.md,"{vertical-align:0;}"),ae=Object(n.a)("span",{target:"e1fogcta8"})("position:absolute;top:50px;",l.d.md,"{top:54px;}",l.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ne={"x-ad":i.a};t.a=function(e){var t=e.children,a=e.path,n=e.pageResources;return Object(o.useLayoutEffect)((function(){try{document.querySelector(window.location.hash).scrollIntoView()}catch(e){}}),[]),Object(p.d)(r.a,{components:ne},Object(p.d)(p.a,{styles:Object(p.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.d.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.d.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(p.d)("div",null,n&&Object(p.d)(L.a,{title:n.json.pageContext.frontmatter.title}),Object(p.d)(I,{root:"/",target:"location"}),Object(p.d)(Y,null,Object(p.d)(l.a,null,t),Object(p.d)(d,null,(function(e){var t=function(e){var t=O(e),n=a.replace(/\/$/,""),o=t.findIndex((function(e){return e.slug===n}));return{prev:t[o-1],next:t[o+1]}}(e),n=t.prev,o=t.next;return Object(p.d)(Q,null,Object(p.d)(Z,null,Object(p.d)($,null,n&&Object(p.d)(ee,{to:n.slug,first:!0},Object(p.d)(ae,{"data-prev":!0},Object(p.d)(U,{size:28,css:te})),n.title)),Object(p.d)(_,null),Object(p.d)($,null,o&&Object(p.d)(ee,{to:o.slug,last:!0},o.title,Object(p.d)(ae,{"data-next":!0},Object(p.d)(W.a,{size:28,css:te}))))))}))),Object(p.d)(J,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}}]}}}')},TnAB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),o=a("7oih"),c=a("KK5/");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},p={_frontmatter:r},i=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(i,s({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"offset",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h1"},{href:"#offset","aria-label":"offset permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Offset"),Object(n.b)("p",null,"The ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"offset")," modifier lets you displace a popper element from its reference\nelement."),Object(n.b)("p",null,"This can be useful if you need to apply some margin between them or if you need\nto fine tune the position according to some custom logic."),Object(n.b)("x-ad",null),Object(n.b)("h2",{id:"demo",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(n.b)("h3",{id:"skidding",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#skidding","aria-label":"skidding permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Skidding"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"[10, 0]"),": The popper is offset 10px along the reference."),Object(n.b)(c.d,{offset:[10,0],mdxType:"OffsetDemo"}),Object(n.b)("h3",{id:"distance",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#distance","aria-label":"distance permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Distance"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"[0, 10]"),": The popper is offset 10px away from the reference."),Object(n.b)(c.d,{offset:[0,10],mdxType:"OffsetDemo"}),Object(n.b)("h2",{id:"phase",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(n.b)("p",null,Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"main")),Object(n.b)("h2",{id:"options",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",s({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," Options ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  offset",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," OffsetsFunction ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// [0, 0]"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function-variable function"}),"OffsetsFunction")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Rect",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Rect",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  placement",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Placement",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",{id:"offset-1",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h3"},{href:"#offset-1","aria-label":"offset 1 permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(n.b)("code",s({parentName:"h3"},{className:"language-text"}),"offset")),Object(n.b)("p",null,"The basic ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"offset")," accepts an array with two numbers in the form\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"[skidding, distance]"),"."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'offset'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n        offset",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"10"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"20"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",{id:"skidding-1",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h4"},{href:"#skidding-1","aria-label":"skidding 1 permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Skidding"),Object(n.b)("p",null,"The first number, ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"skidding"),", displaces the popper along the reference element."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",s({parentName:"div"},{className:"language-text"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-text"}),"           POP\n |----------| <- [10, 0]\nREF"))),Object(n.b)("h4",{id:"distance-1",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h4"},{href:"#distance-1","aria-label":"distance 1 permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Distance"),Object(n.b)("p",null,"The second number, ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"distance"),", displaces the popper away from, or toward, the\nreference element in the direction of its placement. A positive number displaces\nit further away, while a negative number lets it overlap the reference."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",s({parentName:"div"},{className:"language-text"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-text"}),"POP\n |\n | <- [0, 10]\n |\nREF"))),Object(n.b)("p",null,"The option can also take a function provided with some arguments, giving you\naccess to the popper ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"placement"),", and the reference and popper rects."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'offset'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(n.b)("span",s({parentName:"code"},{className:"token function-variable function"}),"offset"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"{")," placement",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," reference",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," popper ",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"}")),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n          ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"placement ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'bottom'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),"height ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"/")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"2"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n          ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"else")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n          ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),"\n        ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"In the above example, we are applying half the popper's height as margin between\nthe two elements only when the popper is positioned below its reference element."))}l.isMDXComponent=!0},vUvN:function(e,t,a){e.exports=a.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),o=a("Wadk")(6),c="findIndex",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(c)}}]);
//# sourceMappingURL=component---src-pages-docs-modifiers-offset-mdx-e0045884225d6509fc60.js.map