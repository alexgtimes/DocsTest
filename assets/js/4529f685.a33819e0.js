"use strict";(self.webpackChunkjsm_docs=self.webpackChunkjsm_docs||[]).push([[5738],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>c});var n=r(7294);function A(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){A(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,A=function(t,e){if(null==t)return{};var r,n,A={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(A[r]=t[r]);return A}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(A[r]=t[r])}return A}var s=n.createContext({}),f=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},i=function(t){var e=f(t.components);return n.createElement(s.Provider,{value:e},t.children)},b="mdxType",v={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,A=t.mdxType,a=t.originalType,s=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),b=f(r),u=A,c=b["".concat(s,".").concat(u)]||b[u]||v[u]||a;return r?n.createElement(c,o(o({ref:e},i),{},{components:r})):n.createElement(c,o({ref:e},i))}));function c(t,e){var r=arguments,A=e&&e.mdxType;if("string"==typeof t||A){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[b]="string"==typeof t?t:A,o[1]=l;for(var f=2;f<a;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7284:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var n=r(7462),A=(r(7294),r(3905));const a={},o="Installation",l={unversionedId:"whitehill/autopro/autopro",id:"whitehill/autopro/autopro",title:"Installation",description:"Download the recent available file for this product via Roblox.",source:"@site/docs/whitehill/autopro/autopro.md",sourceDirName:"whitehill/autopro",slug:"/whitehill/autopro/",permalink:"/docs/whitehill/autopro/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"whSidebar",previous:{title:"AutoPro",permalink:"/docs/category/autopro"},next:{title:"DWProx Net2+",permalink:"/docs/category/dwprox-net2"}},s={},f=[{value:"1) Publish your game &amp; enable HTTP Requests",id:"publish-http",level:3},{value:"2) Product Insertion",id:"product-insertion",level:3},{value:"3) Door Configuration",id:"door-config",level:3}],i={toc:f},b="wrapper";function v(t){let{components:e,...a}=t;return(0,A.kt)(b,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"installation"},"Installation"),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"Download the recent available file for this product via ",(0,A.kt)("a",{parentName:"p",href:"https://www.roblox.com/games/3889813464/Legacy-Licence-Centre"},"Roblox"),".")),(0,A.kt)("admonition",{type:"caution"},(0,A.kt)("p",{parentName:"admonition"},"You will need a licence to use AutoPro!")),(0,A.kt)("h3",{id:"publish-http"},"1) Publish your game & enable HTTP Requests"),(0,A.kt)("p",null,'In Roblox Studio please publish your game by doing the following "File > Publish to Roblox (or Publish to Roblox as...)"'),(0,A.kt)("p",null,"With your newly published game open, select the 'Home' tab, then 'Game Settings'. Move to the 'Security' tab in the open window and make sure the slider for 'Allow HTTP Requests' is enabled and then hit 'Save'."),(0,A.kt)("h3",{id:"product-insertion"},"2) Product Insertion"),(0,A.kt)("p",null,"Insert your file by 'dragging' the product file, from your toolbox into your baseplate with your game fully loaded. This will add AutoPro to your game."),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},'Ungroup the doors from the pack (press "Control + U" ONCE ONLY!)'),(0,A.kt)("li",{parentName:"ol"},"Drag your doors to where you want them.\nPlease make sure your doors are NOT colliding with other parts as this will cause the doors to misbehave or not function at all")),(0,A.kt)("h3",{id:"door-config"},"3) Door Configuration"),(0,A.kt)("p",null,'First we will go over the "settings" script located under the main file structure of the AutoPro door(s).'),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"settingsfile",src:r(9148).Z,width:"707",height:"489"}),'\nThis is the "main settings" script'),(0,A.kt)("p",null,"The settings script is pretty self explanatory but here is a table of what everything does\n",(0,A.kt)("img",{alt:"table",src:r(3284).Z,width:"688",height:"187"})),(0,A.kt)("p",null,"A lot of this script is out of the scope of this tutorial, we will only cover the basics of this file here."),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"If require more in-depth assistance, please make a ticket in our ",(0,A.kt)("a",{parentName:"p",href:"https://whitehill.club/discord"},"Discord server")," (13+)")))}v.isMDXComponent=!0},9148:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/apmainsettings-3b37d1ea38a7c33fbf4db88d9bf07eec.png"},3284:(t,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);