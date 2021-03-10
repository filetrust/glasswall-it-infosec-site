(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||l;return t?r.a.createElement(m,i(i({ref:n},s),{},{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),l=(t(0),t(136)),o={title:"Content Management Policy",id:"rebuild-content-management",sidebar_label:"Content Management"},i={unversionedId:"FAQ/FAQ/rebuild/rebuild-content-management",id:"FAQ/FAQ/rebuild/rebuild-content-management",isDocsHomePage:!1,title:"Content Management Policy",description:"What is it?",source:"@site/docs/FAQ/FAQ/rebuild/rebuild-content-management.md",slug:"/FAQ/FAQ/rebuild/rebuild-content-management",permalink:"/docs/FAQ/FAQ/rebuild/rebuild-content-management",version:"current",sidebar_label:"Content Management"},c=[{value:"What is it?",id:"what-is-it",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"what-is-it"},"What is it?"),Object(l.b)("p",null,"The Glasswall Content Management Policy is used to define how files get processed by the Glasswall Engine. "),Object(l.b)("p",null,"Each option in the Content Management Policy dictates how extensible content will get processed in a supported document."),Object(l.b)("h2",{id:"how-it-works"},"How it works"),Object(l.b)("p",null,"The Glasswall Content Management Policy is composed of flags for each supported file type of the Glasswall Engine."),Object(l.b)("p",null,"Each Content Management Flag maps to extensible content found in a certain file type. For example Metadata in Word documents, or Acroforms in PDF."),Object(l.b)("p",null,"A Content Management Flag has three options: Allow, Disallow and Sanitise. These are represented by an number."),Object(l.b)("p",null,"Content Management Flags set to Allow will tell the Glasswall Engine not to process the content of that type when found while processing."),Object(l.b)("p",null,"Sanitise will specify the behaviour of the Engine to remove the content when processing the file."),Object(l.b)("p",null,"Disallow will result in the file not being rebuilt if the content is found."),Object(l.b)("p",null,"The Rebuild APIs will accept partial configuration as the Content Management Flags are fully optional. Sanitise is used as the default option."),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("div",{class:"api-details"},Object(l.b)("div",{class:"api-details-left api-details-column"},Object(l.b)("p",null,"Our Rebuild API endpoints take the content management policy in the form of a JSON string."),Object(l.b)("p",null,"Here are a list of permitted values for each of the content management flags:"),Object(l.b)("p",null,Object(l.b)("p",null,"0: Allow the content"),Object(l.b)("p",null,"1: Sanitise (Default) the content"),Object(l.b)("p",null,"2: Disallow the content"))),Object(l.b)("div",{class:"api-details-right  api-details-column"},Object(l.b)("div",{class:"api-details-example"},Object(l.b)("div",{class:"api-details-example-top"},"Allow all example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'{\n        "PdfContentManagement": {\n            "Metadata": 0,\n            "InternalHyperlinks": 0,\n            "ExternalHyperlinks": 0,\n            "EmbeddedFiles": 0,\n            "EmbeddedImages": 0,\n            "Javascript": 0,\n            "Acroform": 0,\n            "ActionsAll": 0\n        },\n        "ExcelContentManagement": {\n            "Metadata": 0,\n            "InternalHyperlinks": 0,\n            "ExternalHyperlinks": 0,\n            "EmbeddedFiles": 0,\n            "EmbeddedImages": 0,\n            "DynamicDataExchange": 0,\n            "Macros": 0,\n            "ReviewComments": 0\n        },\n        "PowerPointContentManagement": {\n            "Metadata": 0,\n            "InternalHyperlinks": 0,\n            "ExternalHyperlinks": 0,\n            "EmbeddedFiles": 0,\n            "EmbeddedImages": 0,\n            "Macros": 0,\n            "ReviewComments": 0\n            \n        },\n        "WordContentManagement": {\n            "Metadata": 0,\n            "InternalHyperlinks": 0,\n            "ExternalHyperlinks": 0,\n            "EmbeddedFiles": 0,\n            "EmbeddedImages": 0,\n            "DynamicDataExchange": 0,\n            "Macros": 0,\n            "ReviewComments": 0\n        }\n}\n'))))))}p.isMDXComponent=!0}}]);