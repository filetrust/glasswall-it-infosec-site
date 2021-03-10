(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var i=r(3),n=r(8),a=(r(0),r(136)),o={title:"Rebuild API - Under the Hood",sidebar_label:"Under the Hood"},s={unversionedId:"how-tos/file-rebuild-how-it-works",id:"how-tos/file-rebuild-how-it-works",isDocsHomePage:!1,title:"Rebuild API - Under the Hood",description:"Background",source:"@site/docs/how-tos/file-rebuild-how-it-works.md",slug:"/how-tos/file-rebuild-how-it-works",permalink:"/docs/how-tos/file-rebuild-how-it-works",version:"current",sidebar_label:"Under the Hood"},l=[{value:"Background",id:"background",children:[]},{value:"Solution Overview",id:"solution-overview",children:[{value:"AWS",id:"aws",children:[]},{value:"Azure",id:"azure",children:[]}]}],c={toc:l};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"background"},"Background"),Object(a.b)("p",null,"The Rebuild API leverages serverless functions to provide the battle hardened capablities of the Rebuild SDK at scale, available through HTTP API calls. With a range of consumption options available from pay-per-request to private cloud deployments, all the code is open sourced in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/filetrust"},"GitHub"),". The first generation of code is focused on providing the capability using AWS components with Azure components surfacing shortly after first launch."),Object(a.b)("p",null,"For our hosted solution we will assemble the components that give us the best levels of performance and resillience which could mean we are operating within multiple cloud providers. For managed and self deployed solutions then it really becomes a pick and choose for which is your cloud provider of choice, the aim here being that Glasswall's engineering team provide the components that fit all the major cloud providers that suit as many use cases as possible."),Object(a.b)("p",null,"Glasswall's Rebuild SDK can process a file in-memory with no need to write the file, this means that for most of the resources we offer the file never leaves the serverless function other than the response to the request."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Before you integrate Rebuild into your solution, be aware that file in the HTTP body only supports files up to 6MB due to a limitation in the request payload to AWS Lambda. If your use case deals with larger files, please use the input URL based pathway which currently supports files up to 30MB"))),Object(a.b)("h2",{id:"solution-overview"},"Solution Overview"),Object(a.b)("p",null,"The serverless functionality offered by the cloud providers have clear similarities but also differences that shape the functionality that we offer. "),Object(a.b)("h3",{id:"aws"},"AWS"),Object(a.b)("p",null,"AWS Lambda provides multiple triggers but the one most appropriate for providing these API resources is the HTTP trigger. This gives a very clean usage pattern of file-in file-out where the body of the HTTP request is the binary of the file within a multipart/form-data content type. Where this usage patten ends is when we exceed the maximum HTTP payload for a Lambda function - currently 6MB. "),Object(a.b)("p",null," ",Object(a.b)("img",{alt:"Figure1",src:r(217).default})),Object(a.b)("p",null,"To bypass this limitation we have a second usage pattern which is to utilise pre-signed URL's to give the Lambda function authorised access to larger files (at launch files up to 30mb). In this pattern the file is placed in one of AWS's S3 buckets and a URL is generated that contains the authorisation required to access the file, this URL is then passed into the function which can then perform the required processing on the file. If (as is the case with Rebuild) the processing results in a new file, this file is placed in another S3 bucket which can be accessed via another signed URL."),Object(a.b)("p",null,"The functionality is then accessed via API Gateway (in itself having a max request size of 10MB) which is secured via a Lambda Authoriser."),Object(a.b)("h3",{id:"azure"},"Azure"),Object(a.b)("p",null,"When it comes to Azure the patterns are the same, it is the platform limits that change. Swapping Lambda for an Azure Function we still have access to an HTTP trigger but where the limit was 6MB - it is now 100MB. This means that the direct HTTP file-in file-out pattern becomes much more usable."),Object(a.b)("p",null,"For larger payloads again a route using a pre-signed approach is available with Azure Blob Storage which allows files over 100MB to be processed."))}u.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),p=i,b=h["".concat(o,".").concat(p)]||h[p]||d[p]||a;return r?n.a.createElement(b,s(s({ref:t},c),{},{components:r})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},217:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Rebuild-File-Architecture-af0995865533cb68a0c6981f94d67741.png"}}]);