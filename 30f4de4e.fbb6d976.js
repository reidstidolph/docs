(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(11),a=(r(0),r(238)),i={title:"128T 4.3.1 Release Notes",sidebar_label:"4.3.1"},s={id:"release_notes/128t_release_notes_4.3.1",title:"128T 4.3.1 Release Notes",description:"## Special Considerations ##",source:"@site/docs/release_notes/128t_release_notes_4.3.1.md",permalink:"/docs/release_notes/128t_release_notes_4.3.1",editUrl:"https://github.com/128technology/docs/tree/master/docs/release_notes/128t_release_notes_4.3.1.md",lastUpdatedAt:1586452018,sidebar_label:"4.3.1",sidebar:"docs",previous:{title:"128T 4.3.0 Release Notes",permalink:"/docs/release_notes/128t_release_notes_4.3.0"},next:{title:"128T Installer 2.1.0 Release Notes",permalink:"/docs/release_notes/128t_installer_release_notes_2.1.0"}},c=[{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]},{value:"Caveats",id:"caveats",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(a.b)("p",null,"Consult the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/release_notes/128t_release_notes_4.3.0#special-considerations"}),"4.3.0 release notes Special Considerations")," section"),Object(a.b)("h2",{id:"issues-fixed"},"Issues Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"I95-34058, I95-34064")," Session setup fails for outbound only when first packet exceeds MTU")),Object(a.b)("h2",{id:"caveats"},"Caveats"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"I95-29592")," Conductor UI and/or PCLI may not update the asset software version correctly"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Symptom:"))," The Conductor UI and/or the PCLI may not correctly reflect the software version running on the asset"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Conditions:"))," After the asset has been upgraded"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Corrective Action:"))," If the asset is not updated after ~5 minutes after an upgrade is performed, the salt-minion will need to be restarted on the respective node. This is done with the following command on the node as the root Linux user:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"systemctl restart salt-minion\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"I95-27808")," ",Object(a.b)("inlineCode",{parentName:"p"},"sync peer addresses router force")," from Conductor may not trigger router to send address information from peer"),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Symptom:"))," When performing the following command on the Conductor PCLI, ",Object(a.b)("inlineCode",{parentName:"p"},"sync peer addresses router force")," the router may not provide the peer address information"),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Conditions:"))," Unknown"),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Corrective Action:"))," Perform the PCLI command on the router to update the information on the Conductor."))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"I95-32789")," Peer stats in Conductor UI not provided during upgrade"),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Symptom:"))," When upgrading a node from pre 4.3 to 4.3, the peer node will not provide general stats in the conductor UI until the peer is also upgraded."),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Conditions:"))," When nodes of a router or conductor pair are on different versions (for routers this is the short transition where the first node is upgraded and the second node is in the process of upgrading but still operational)"),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Corrective Action:"))," NA, when both nodes are operational and on the 4.3 version the stats information on the router dialog will be provided. Stats can still be retrieved from the PCLI of the node while it is running."))))}l.isMDXComponent=!0},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||a;return r?o.a.createElement(u,s({ref:t},p,{components:r})):o.a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);