(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return r?a.a.createElement(h,i(i({ref:t},l),{},{components:r})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),s=(r(0),r(136)),o={title:"Cross-site Scripting (XSS)",sidebar_label:"Cross-site Scripting (XSS)"},i={unversionedId:"security_awareness/languages/Csharp/xss",id:"security_awareness/languages/Csharp/xss",isDocsHomePage:!1,title:"Cross-site Scripting (XSS)",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/xss.md",slug:"/security_awareness/languages/Csharp/xss",permalink:"/docs/security_awareness/languages/Csharp/xss",version:"current",sidebar_label:"Cross-site Scripting (XSS)",sidebar:"someSidebar",previous:{title:"Open Redirect",permalink:"/docs/security_awareness/languages/Csharp/open_redirect"},next:{title:"SQL Injection",permalink:"/docs/security_awareness/languages/Csharp/sqli"}},c=[],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Introduction")),Object(s.b)("p",null,"Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it."),Object(s.b)("p",null,"An attacker can use XSS to send a malicious script to an unsuspecting user. The end user\u2019s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. For more details on the different types of XSS flaws"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Cross-Site Scripting (XSS) attacks occur when:")),Object(s.b)("ul",null,Object(s.b)("li",null,"Data enters a Web application through an untrusted source, most frequently a web request."),Object(s.b)("li",null,"The data is included in dynamic content that is sent to a web user without being validated for malicious content.")),Object(s.b)("p",null,"The malicious content sent to the web browser often takes the form of a segment of JavaScript, but may also include HTML, Flash, or any other type of code that the browser may execute. The variety of attacks based on XSS is almost limitless, but they commonly include transmitting private data, like cookies or other session information, to the attacker, redirecting the victim to web content controlled by the attacker, or performing other malicious operations on the user\u2019s machine under the guise of the vulnerable site"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Stored XSS Attacks")),Object(s.b)("p",null,"Stored attacks are those where the injected script is permanently stored on the target servers, such as in a database, in a message forum, visitor log, comment field, etc. The victim then retrieves the malicious script from the server when it requests the stored information. Stored XSS is also sometimes referred to as Persistent or Type-I XSS."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reflected XSS Attacks")),Object(s.b)("p",null,"Reflected attacks are those where the injected script is reflected off the web server, such as in an error message, search result, or any other response that includes some or all of the input sent to the server as part of the request. Reflected attacks are delivered to victims via another route, such as in an e-mail message, or on some other website. When a user is tricked into clicking on a malicious link, submitting a specially crafted form, or even just browsing to a malicious site, the injected code travels to the vulnerable web site, which reflects the attack back to the user\u2019s browser. The browser then executes the code because it came from a \u201ctrusted\u201d server. Reflected XSS is also sometimes referred to as Non-Persistent or Type-II XSS."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example1 (HTML Encoding using Razor)")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-c"},'@{\n       var untrustedInput = "<\\"123\\">";\n   }\n\n   @untrustedInput\n\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example2 (Encoding URL Parameters):")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-C"},'var example = "\\"Quoted Value with spaces and &\\"";\n   var encodedValue = _urlEncoder.Encode(example);\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Risk")),Object(s.b)("p",null,"The consequence of an XSS attack is the same regardless of whether it is stored or reflected (or DOM Based). The difference is in how the payload arrives at the server. Do not be fooled into thinking that a \u201cread-only\u201d or \u201cbrochureware\u201d site is not vulnerable to serious reflected XSS attacks. XSS can cause a variety of problems for the end user that range in severity from an annoyance to complete account compromise. The most severe XSS attacks involve disclosure of the user\u2019s session cookie, allowing an attacker to hijack the user\u2019s session and take over the account. Other damaging attacks include the disclosure of end user files, installation of Trojan horse programs, redirect the user to some other page or site, or modify presentation of content. An XSS vulnerability allowing an attacker to modify a press release or news item could affect a company\u2019s stock price or lessen consumer confidence. An XSS vulnerability on a pharmaceutical site could allow an attacker to modify dosage information resulting in an overdose"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Remediation")),Object(s.b)("p",null,"Validation can be a useful tool in limiting XSS attacks. For example, a numeric string containing only the characters 0-9 won't trigger an XSS attack. Validation becomes more complicated when accepting HTML in user input. Parsing HTML input is difficult, if not impossible. Markdown, coupled with a parser that strips embedded HTML, is a safer option for accepting rich input. Never rely on validation alone. Always encode untrusted input before output, no matter what validation or sanitization has been performed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"References ")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/xss/"},"https://owasp.org/www-community/attacks/xss/")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"},"https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-3.1"},"https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-3.1")))}u.isMDXComponent=!0}}]);