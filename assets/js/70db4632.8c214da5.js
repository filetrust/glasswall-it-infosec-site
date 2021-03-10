(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(f,s(s({ref:n},c),{},{components:t})):a.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(136)),o={title:"Out Of Bounds",sidebar_label:"Out Of Bounds"},s={unversionedId:"security_awareness/languages/C/OutOfBounds",id:"security_awareness/languages/C/OutOfBounds",isDocsHomePage:!1,title:"Out Of Bounds",description:"Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability",source:"@site/docs/security_awareness/languages/C/OutOfBounds.md",slug:"/security_awareness/languages/C/OutOfBounds",permalink:"/docs/security_awareness/languages/C/OutOfBounds",version:"current",sidebar_label:"Out Of Bounds",sidebar:"someSidebar",previous:{title:"Integer Overflow or Wraparound Vulnerability",permalink:"/docs/security_awareness/languages/C/IntegerOverflow"},next:{title:"Injection Attacks",permalink:"/docs/security_awareness/languages/Python/InjectionAttacks"}},l=[{value:"Description",id:"description",children:[]},{value:"Vulnerable Code Example",id:"vulnerable-code-example",children:[]},{value:"Mitigation",id:"mitigation",children:[]},{value:"Risk Assessment",id:"risk-assessment",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability"),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Do not make any assumptions about the size of environment variables because an adversary might have full control over the environment. If the environment variable needs to be stored, the length of the associated string should be calculated and the storage dynamically allocated"),Object(i.b)("h2",{id:"vulnerable-code-example"},"Vulnerable Code Example"),Object(i.b)("p",null,"This vulnerable code example copies the string returned by ",Object(i.b)("inlineCode",{parentName:"p"},"getenv()")," into a fixed-size buffer:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'void f() {\n  char path[PATH_MAX]; /* Requires PATH_MAX to be defined */\n  strcpy(path, getenv("PATH"));\n  /* Use path */\n}\n')),Object(i.b)("p",null,"Even if your platform assumes that ",Object(i.b)("inlineCode",{parentName:"p"},"$PATH")," is defined, defines ",Object(i.b)("inlineCode",{parentName:"p"},"PATH_MAX"),", and enforces that paths not have more than PATH_MAX characters, the $PATH environment variable still is not required to have less than ",Object(i.b)("inlineCode",{parentName:"p"},"PATH_MAX")," chars. And if it has more than ",Object(i.b)("inlineCode",{parentName:"p"},"PATH_MAX")," chars, a buffer overflow will result. Also, if ",Object(i.b)("inlineCode",{parentName:"p"},"$PATH")," is not defined, then ",Object(i.b)("inlineCode",{parentName:"p"},"strcpy()")," will attempt to dereference a null pointer."),Object(i.b)("h2",{id:"mitigation"},"Mitigation"),Object(i.b)("p",null,"In this compliant solution, the ",Object(i.b)("inlineCode",{parentName:"p"},"strlen()")," function is used to calculate the size of the string, and the required space is dynamically allocated:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'void f() {\n  char *path = NULL;\n  /* Avoid assuming $PATH is defined or has limited length */\n  const char *temp = getenv("PATH");\n  if (temp != NULL) {\n    path = (char*) malloc(strlen(temp) + 1);\n    if (path == NULL) {\n      /* Handle error condition */\n    } else {\n      strcpy(path, temp);\n    }\n    /* Use path */\n    free(path);\n  }\n}\n')),Object(i.b)("h2",{id:"risk-assessment"},"Risk Assessment"),Object(i.b)("p",null,"Making assumptions about the size of an environmental variable can result in a buffer overflow."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/119.html"},"CWE-119: Improper Restriction of Operations within the Bounds of a Memory Buffer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.sei.cmu.edu/confluence/display/c/AA.+Bibliography#AA.Bibliography-ISO-IEC9899-2011"},"Programming Languages\u2014C, 3rd ed (ISO/IEC 9899:2011). Geneva, Switzerland: ISO, 2011."))))}u.isMDXComponent=!0}}]);