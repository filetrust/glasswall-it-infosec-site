(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{135:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/CI-CD-f8bee47f2cb0d338df13a4b6e8444361.png"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),l=r(6),o=(r(0),r(94)),a={title:"Set-up of CI/CD for GitHub Repository",sidebar_label:"Project One Placeholder"},i={unversionedId:"how-tos/ci-cd-pipeline",id:"how-tos/ci-cd-pipeline",isDocsHomePage:!1,title:"Set-up of CI/CD for GitHub Repository",description:"This guide will walk through the steps to set-up and create a CI/CD pipeline for your GitHub Repository",source:"@site/docs/how-tos/ci-cd-pipeline.md",slug:"/how-tos/ci-cd-pipeline",permalink:"/glasswall-it-infosec-site/docs/how-tos/ci-cd-pipeline",version:"current",sidebar_label:"Project One Placeholder",sidebar:"someSidebar",previous:{title:"Rules of Engagement",permalink:"/glasswall-it-infosec-site/docs/careers/rules-of-engagement"},next:{title:"Incident Management",permalink:"/glasswall-it-infosec-site/docs/Projects/InfoSecTeam/IncidentManagement"}},c=[{value:"Steps",id:"steps",children:[{value:"Branch Policy",id:"branch-policy",children:[]},{value:"Repo Security",id:"repo-security",children:[]},{value:"Gated Build",id:"gated-build",children:[]},{value:"Setting Up Serverless Framework",id:"setting-up-serverless-framework",children:[]},{value:"CI Build",id:"ci-build",children:[]},{value:"Deploy Build",id:"deploy-build",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will walk through the steps to set-up and create a CI/CD pipeline for your GitHub Repository"),Object(o.b)("p",null,Object(o.b)("img",{src:r(135).default})),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("h3",{id:"branch-policy"},"Branch Policy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On the GitHub repo, create a new branch from 'master' called 'develop'"),Object(o.b)("li",{parentName:"ol"},"Go to Settings > Branches, select 'develop' from the drop down list to make it the default branch, click update"),Object(o.b)("li",{parentName:"ol"},"Under 'Branch protection rules', click 'Add rule'"),Object(o.b)("li",{parentName:"ol"},"Add 'master' for 'Branch name pattern', check 'Restrict who can push to matching branches' and save.`"),Object(o.b)("li",{parentName:"ol"},"Add new branch protection rule for 'develop', with the following settings:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Require pull request reviews before merging"),Object(o.b)("li",{parentName:"ul"},"Require status checks to pass before merging"),Object(o.b)("li",{parentName:"ul"},"Require branches to be up to date before merging")))),Object(o.b)("h3",{id:"repo-security"},"Repo Security"),Object(o.b)("p",null,"Next we need to add in the 'Glasswall-Github' user as an Admin of the repo so that we can perform branch merges from the actions, and use submodules."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On the GitHub repo, go to Settings > Manage access > Invite teams or people"),Object(o.b)("li",{parentName:"ol"},"Search for 'Glasswall-Github' and select the Admin role."),Object(o.b)("li",{parentName:"ol"},"Go to to Settings > Secrets > Add a new secret"),Object(o.b)("li",{parentName:"ol"},"Name the secret 'TOKEN_GITHUB' and use the Personal Access Token which can be given to you by IT Support, as the value.")),Object(o.b)("h3",{id:"gated-build"},"Gated Build"),Object(o.b)("p",null,"Next step is to set-up a Gated build which will build our code and run tests on pull requests"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(o.b)("li",{parentName:"ol"},"Name the file 'gated.yml'"),Object(o.b)("li",{parentName:"ol"},"Copy the Gated file code from the Rebuild repo into the new file"),Object(o.b)("li",{parentName:"ol"},"Make any changes specific to your project (build steps, tests used)"),Object(o.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")),Object(o.b)("h3",{id:"setting-up-serverless-framework"},"Setting Up Serverless Framework"),Object(o.b)("p",null,"Next step is to install the Serverless Framework and complete the template. More in-depth guides can be found here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.serverless.com/framework/docs/"}),"https://www.serverless.com/framework/docs/")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If running serverless for the first time, install to your machine by running: ",Object(o.b)("inlineCode",{parentName:"li"},"npm install -g serverless")," or ",Object(o.b)("inlineCode",{parentName:"li"},"choco install serverless")),Object(o.b)("li",{parentName:"ol"},"Create the template by running : ",Object(o.b)("inlineCode",{parentName:"li"},"serverless create --template <template name>"),", you can get a list of available templates by running ",Object(o.b)("inlineCode",{parentName:"li"},"serverless create --help")),Object(o.b)("li",{parentName:"ol"},"Update build.sh and build.cmd files with the correct output location and project location"),Object(o.b)("li",{parentName:"ol"},"Complete serverless.yml with the details of your project"),Object(o.b)("li",{parentName:"ol"},"Commit changes")),Object(o.b)("p",null,"You may experience an issue with executing the build.sh file in the CI or CD builds. To fix this you will need to mark the sh file executable:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"cd to the sh file location"),Object(o.b)("li",{parentName:"ol"},"run: ",Object(o.b)("inlineCode",{parentName:"li"},"git update-index --add --chmod=+x build.sh")),Object(o.b)("li",{parentName:"ol"},"commit: ",Object(o.b)("inlineCode",{parentName:"li"},"git commit -m 'Make build.sh executable'"))),Object(o.b)("h3",{id:"ci-build"},"CI Build"),Object(o.b)("p",null,"Next step is to set-up a CI build which will deploy our code to a QA environment, run tests, and merge to the master branch if successful."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(o.b)("li",{parentName:"ol"},"Name the file 'ci.yml'"),Object(o.b)("li",{parentName:"ol"},"Copy the CI file template code into the new file"),Object(o.b)("li",{parentName:"ol"},"Make any changes specific to your project (deployment, environment, build steps, tests used)"),Object(o.b)("li",{parentName:"ol"},"Add any needed secrets (Access Ids and key) to the repo settings."),Object(o.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")),Object(o.b)("h3",{id:"deploy-build"},"Deploy Build"),Object(o.b)("p",null,"Next step is to set-up a Deploy build which will deploy our code to a Stage environment, run tests, and deploy to product if successful."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On the GitHub repo, go to Actions > New workflow > set up a workflow yourself"),Object(o.b)("li",{parentName:"ol"},"Name the file 'deploy.yml'"),Object(o.b)("li",{parentName:"ol"},"Copy the Deploy file template code into the new file"),Object(o.b)("li",{parentName:"ol"},"Make any changes specific to your project (deployment, environment, build steps, tests used)"),Object(o.b)("li",{parentName:"ol"},"Add any needed secrets (Access Ids and key) to the repo settings."),Object(o.b)("li",{parentName:"ol"},"Start commit > create new branch and start a pull request")))}p.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),l=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return r?l.a.createElement(m,i(i({ref:t},s),{},{components:r})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);