(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(136)),o={title:"JWT Sensitive Data Exposure",sidebar_label:"JWT Sensitive Data Exposure"},s={unversionedId:"security_awareness/languages/TypeScript/JWTSensitiveDataExposure",id:"security_awareness/languages/TypeScript/JWTSensitiveDataExposure",isDocsHomePage:!1,title:"JWT Sensitive Data Exposure",description:"Description",source:"@site/docs/security_awareness/languages/TypeScript/JWTSensitiveDataExposure.md",slug:"/security_awareness/languages/TypeScript/JWTSensitiveDataExposure",permalink:"/docs/security_awareness/languages/TypeScript/JWTSensitiveDataExposure",version:"current",sidebar_label:"JWT Sensitive Data Exposure",sidebar:"someSidebar",previous:{title:"Cross-origin Communications Vulnerability",permalink:"/docs/security_awareness/languages/TypeScript/CrossOrigin"},next:{title:"Unrestricted Upload of File",permalink:"/docs/security_awareness/languages/TypeScript/UnrestrictedUploadofFile"}},c=[{value:"Description",id:"description",children:[]},{value:"Vulnerable Code Example",id:"vulnerable-code-example",children:[]},{value:"Mitigation",id:"mitigation",children:[]},{value:"Risk Assessment",id:"risk-assessment",children:[]},{value:"References",id:"references",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"If a JSON Web Token (JWT) is not signed with a strong cipher algorithm (or not signed at all) an attacker can forge it and impersonate user identities."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't use none algorithm to sign or verify the validity of an algorithm."),Object(i.b)("li",{parentName:"ul"},"Don't use a token without verifying its signature before.")),Object(i.b)("h2",{id:"vulnerable-code-example"},"Vulnerable Code Example"),Object(i.b)("p",null,"jsonwebtoken library:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const jwt = require('jsonwebtoken');\nlet token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }); // Noncompliant: JWT should include a signature\njwt.verify(token, key, { expiresIn: 360000 * 5, algorithms: ['RS256', 'none'] }, callbackcheck); // Noncompliant: none algorithm should not be used when verifying JWT signature\n")),Object(i.b)("h2",{id:"mitigation"},"Mitigation"),Object(i.b)("p",null,"jsonwebtoken library:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const jwt = require('jsonwebtoken');\nlet token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'HS256' }); // Compliant\njwt.verify(token, key, { expiresIn: 360000 * 5, algorithms: ['HS256'] }, callbackcheck); // Compliant\n")),Object(i.b)("h2",{id:"risk-assessment"},"Risk Assessment"),Object(i.b)("p",null,"Failure frequently compromises all data that should have been protected. Typically, this information includes sensitive personal information (PII) data such as health records, credentials, personal data, and credit cards, which often require protection as defined by laws or regulations such as the EU GDPR or local privacy laws."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure.html"},"A3:2017-Sensitive Data Exposure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/347.html"},"CWE-347: Improper Verification of Cryptographic Signature"))))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);