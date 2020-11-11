(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},56:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(108)),o={title:"Request Redirect",sidebar_label:"Request Redirect"},c={unversionedId:"security_awareness/languages/Python/RequestRedirect",id:"security_awareness/languages/Python/RequestRedirect",isDocsHomePage:!1,title:"Request Redirect",description:"Description",source:"@site/docs/security_awareness/languages/Python/RequestRedirect.md",slug:"/security_awareness/languages/Python/RequestRedirect",permalink:"/docs/security_awareness/languages/Python/RequestRedirect",version:"current",sidebar_label:"Request Redirect",sidebar:"someSidebar",previous:{title:"Dynamic Code Execution",permalink:"/docs/security_awareness/languages/Python/DynamicCodeExecution"},next:{title:"Deserialization",permalink:"/docs/security_awareness/languages/Python/Deserialization"}},s=[{value:"Description",id:"description",children:[]},{value:"Vulnerable Code Example",id:"vulnerable-code-example",children:[]},{value:"Mitigation",id:"mitigation",children:[]},{value:"Risk Assessment",id:"risk-assessment",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"User provided data, such as URL parameters, POST data payloads, or cookies, should always be considered untrusted and tainted. Applications performing HTTP redirects based on tainted data could enable an attacker to redirect users to a malicious site to, for example, steal login credentials."),Object(i.b)("p",null,"This problem could be mitigated in any of the following ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Validate the user provided data based on a whitelist and reject input not matching."),Object(i.b)("li",{parentName:"ul"},"Redesign the application to not perform redirects based on user provided data.")),Object(i.b)("h2",{id:"vulnerable-code-example"},"Vulnerable Code Example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Flask")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from flask import request, redirect\n\n@app.route('move')\ndef move():\n    url = request.args[\"next\"]\n    return redirect(url) # Noncompliant\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Django")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from django.http import HttpResponseRedirect\n\ndef move(request):\n    url = request.GET.get("next", "/")\n    return HttpResponseRedirect(url) # Noncompliant\n')),Object(i.b)("h2",{id:"mitigation"},"Mitigation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Flask")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from flask import request, redirect, url_for\n\n@app.route('move')\ndef move():\n    endpoint = request.args[\"next\"]\n    return redirect(url_for(endpoint)) # Compliant\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Django")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from django.http import HttpResponseRedirect\nfrom urllib.parse import urlparse\n\nDOMAINS_WHITELIST = [\'www.example.com\', \'example.com\']\n\ndef move(request):\n    url = request.GET.get("next", "/")\n    parsed_uri = urlparse(url)\n    if parsed_uri.netloc in DOMAINS_WHITELIST:\n        return HttpResponseRedirect(url) # Compliant\n    return HttpResponseRedirect("/")\n')),Object(i.b)("h2",{id:"risk-assessment"},"Risk Assessment"),Object(i.b)("p",null,"The technical impact is attackers acting as users or administrators, or users using privileged functions, or creating, accessing, updating or deleting every record.\nThe business impact depends on the protection needs of the application and data."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control.html"}),"A5:2017-Broken Access Control")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/601.html"}),"CWE-601: URL Redirection to Untrusted Site ('Open Redirect')"))))}u.isMDXComponent=!0}}]);