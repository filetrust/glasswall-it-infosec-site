(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),s=(n(0),n(126)),o={title:"Hard-coded Keys",sidebar_label:"Hard-coded Keys"},i={unversionedId:"security_awareness/languages/Csharp/hardcoded_keys",id:"security_awareness/languages/Csharp/hardcoded_keys",isDocsHomePage:!1,title:"Hard-coded Keys",description:"Introduction",source:"@site/docs/security_awareness/languages/Csharp/hardcoded_keys.md",slug:"/security_awareness/languages/Csharp/hardcoded_keys",permalink:"/docs/security_awareness/languages/Csharp/hardcoded_keys",version:"current",sidebar_label:"Hard-coded Keys",sidebar:"someSidebar",previous:{title:"Xpath Injection",permalink:"/docs/security_awareness/languages/Csharp/xpath_injection"},next:{title:"Insecure Randomness",permalink:"/docs/security_awareness/languages/Csharp/insecure_randomness"}},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Introduction")),Object(s.b)("p",null,"Hard-coded credentials typically create a significant hole that allows an attacker to bypass the authentication that has been configured by the software administrator. This hole might be difficult for the system administrator to detect. Even if detected, it can be difficult to fix, so the administrator may be forced into disabling the product entirely. ",Object(s.b)("br",null),"For a symmetric algorithm to be successful, the secret key must be known only to the sender and the receiver. When a key is hard-coded, it is easily discovered. Even with compiled binaries, it is easy for malicious users to extract it. Once the private key is compromised, the cipher text can be decrypted directly and is not protected anymore."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example1 of a vulnerable code")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'using Microsoft.AspNet.Identity;\nusing System;\nusing System.Web;\nusing System.Web.Security;\n \npublic class HardCodedCredentialHandler : IHttpHandler\n{\n \n    public void ProcessRequest(HttpContext ctx)\n    {\n        string password = ctx.Request.QueryString["password"];\n \n        // BAD: Inbound authentication made by comparison to string literal\n        if (password == "myPa55word")\n        {\n            ctx.Response.Redirect("login");\n        }\n \n        // BAD: Set the password to a hardcoded string literal\n        MembershipUser user = loadMembershipUser();\n        user.ChangePassword(password, "myNewPa55word");\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example2 of a vulnerable code")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'using System.Text;\nusing System.Security.Cryptography;\n\nclass ExampleClass\n{\n    public void ExampleMethod(byte[] someOtherBytesForIV)\n    {\n        byte[] key = Encoding.ASCII.GetBytes("AAAAAaazaoensuth");\n        SymmetricAlgorithm rijn = SymmetricAlgorithm.Create();\n        rijn.CreateEncryptor(key, someOtherBytesForIV);\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example3 of a vulnerable code")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'string username = "admin";\nstring password = "Admin123"; // Sensitive\nstring usernamePassword  = "user=admin&password=Admin123"; // Sensitive\nstring url = "scheme://user:Admin123@domain.com"; // Sensitive\n\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Remediation")),Object(s.b)("p",null,"Avoid or fix violations by following the following practices:"),Object(s.b)("ul",null,Object(s.b)("li",null,"Keep credentials and keys in a secure location separate from your source code."),Object(s.b)("li",null,"Store the credentials in a configuration file that is not pushed to the code repository."),Object(s.b)("li",null,"Store the credentials in a database."),Object(s.b)("li",null,"Consider redesigning your application to use a secure key management system."),Object(s.b)("li",null,"Use the secret management service of you cloud provider.")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),"using Microsoft.AspNet.Identity;\nusing System;\nusing System.Web;\nusing System.Web.Security;\n \npublic class HardCodedCredentialHandler : IHttpHandler\n{\n \n    public void ProcessRequest(HttpContext ctx)\n    {\n        string hashedPassword = loadPasswordFromSecretConfig();\n \n        // GOOD: Inbound authentication made by comparing to a hash password from a config\n        if (PasswordHasher.VerifyHashedPassword(hashedPassword, password))\n        {\n            ctx.Response.Redirect(VALID_REDIRECT);\n        }\n    }\n}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Risk")),Object(s.b)("ul",null,Object(s.b)("li",null,"malicious users will gain access through the account in question."),Object(s.b)("li",null,"Exposure of resources or functionality to unintended actors"),Object(s.b)("li",null,"provide attackers with sensitive information or even execute arbitrary code")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"References ")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.semmle.com/wiki/display/CSHARP/Hard-coded+credentials"}),"https://help.semmle.com/wiki/display/CSHARP/Hard-coded+credentials")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cwe.mitre.org/data/definitions/798.html"}),"https://cwe.mitre.org/data/definitions/798.html")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password"}),"https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://rules.sonarsource.com/csharp/tag/sans-top25/RSPEC-2068"}),"https://rules.sonarsource.com/csharp/tag/sans-top25/RSPEC-2068")))}d.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);