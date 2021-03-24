(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(136)),s={title:"Insecure Randomness",sidebar_label:"Insecure Randomness"},c={unversionedId:"security_awareness/languages/Csharp/insecure_randomness",id:"security_awareness/languages/Csharp/insecure_randomness",isDocsHomePage:!1,title:"Insecure Randomness",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/insecure_randomness.md",slug:"/security_awareness/languages/Csharp/insecure_randomness",permalink:"/docs/security_awareness/languages/Csharp/insecure_randomness",version:"current",sidebar_label:"Insecure Randomness",sidebar:"someSidebar",previous:{title:"Hard-coded Keys",permalink:"/docs/security_awareness/languages/Csharp/hardcoded_keys"},next:{title:"Open Redirect",permalink:"/docs/security_awareness/languages/Csharp/open_redirect"}},i=[],l={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Introduction")),Object(o.b)("p",null,"Using a cryptographically weak pseudo-random number generator may allow an attacker to predict what security-sensitive value will be generated.",Object(o.b)("br",null),"Insecure randomness errors occur when a function that can produce predictable values is used as a source of randomness in security-sensitive context."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example1 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"using System;\n\nclass ExampleClass\n{\n    public void ExampleMethod(Random random)\n    {\n        var sensitiveVariable = random.Next();\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example2 of a vulnerable code")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"\nvar random = new Random(); // Sensitive use of Random\nbyte[] data = new byte[16];\nrandom.NextBytes(data);\nreturn BitConverter.ToString(data); // Check if this value is used for hashing or encryption\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remediation")),Object(o.b)("p",null,"Avoid or fix violations by following the following practices:"),Object(o.b)("ul",null,Object(o.b)("li",null,"use a cryptographically strong random number generator."),Object(o.b)("li",null,"Only use random number generators which are recommended by OWASP or any other trusted organization. "),Object(o.b)("li",null,"Use the generated random values only once."),Object(o.b)("li",null,"Don't expose the generated random value. If you have to store it, make sure that the database or file is secure.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"using System;\nusing System.Security.Cryptography;\n\nclass ExampleClass\n{\n    public void ExampleMethod(RandomNumberGenerator randomNumberGenerator, int toExclusive)\n    {\n        var sensitiveVariable = randomNumberGenerator.GetInt32(toExclusive);\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Risk")),Object(o.b)("ul",null,Object(o.b)("li",null,"An attacker might be able to guess an ID for a resource that is owned by another user."),Object(o.b)("li",null,"An attacker may access the restricted functionality by guessing the ID or key."),Object(o.b)("li",null,"provide attackers with sensitive information or even execute arbitrary code")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"References ")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca5394"},"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca5394")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://rules.sonarsource.com/csharp/RSPEC-2245"},"https://rules.sonarsource.com/csharp/RSPEC-2245")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://owasp.org/www-community/vulnerabilities/Insecure_Randomness"},"https://owasp.org/www-community/vulnerabilities/Insecure_Randomness")))}u.isMDXComponent=!0},136:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);