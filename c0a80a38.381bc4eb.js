(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(11),a=(n(0),n(238)),i={title:"128T ZScalar Plugin 1.1.2 Release Notes",sidebar_label:"1.1.2"},s={id:"release_notes/128t_zscaler_release_notes_1.1.2",title:"128T ZScalar Plugin 1.1.2 Release Notes",description:"## Special Considerations",source:"@site/docs/release_notes/128t_zscaler_release_notes_1.1.2.md",permalink:"/docs/release_notes/128t_zscaler_release_notes_1.1.2",editUrl:"https://github.com/128technology/docs/tree/master/docs/release_notes/128t_zscaler_release_notes_1.1.2.md",lastUpdatedAt:1586452018,sidebar_label:"1.1.2",sidebar:"docs",previous:{title:"128T SIP ALG Plugin 2.1.0 Release Notes",permalink:"/docs/release_notes/128t_sip_alg_release_notes_2.1.0"}},c=[{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(a.b)("p",null,"After upgrading to this version, a 128T service restart will be needed on the conductor. Note: If this is an HA conductor, restart the backup (non-primary) conductor node first, wait until all processes are running and then restart the primary conductor node. ",Object(a.b)("inlineCode",{parentName:"p"},"systemctl restart 128T")),Object(a.b)("h2",{id:"issues-fixed"},"Issues Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PLUGIN-135")," Resolved incompatible inclusion of dependent package version which would result in asset failures with the message: ",Object(a.b)("inlineCode",{parentName:"li"},"Plugins highstate: [\"No matching sls found for '_states' in env 'plugins'\"]"),".")))}u.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,s({ref:t},l,{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);