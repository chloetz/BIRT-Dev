(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(132)),a={id:"basic-tutorial",title:"Basic Tutorial",sidebar_label:"Basic Tutorial"},l={unversionedId:"basic-tutorial",id:"basic-tutorial",isDocsHomePage:!1,title:"Basic Tutorial",description:"Basic Overview",source:"@site/docs/basic-tutorial.md",slug:"/basic-tutorial",permalink:"/BIRT-Dev/docs/basic-tutorial",editUrl:"https://github.com/chloetz/BIRT-Dev/edit/master/website/docs/basic-tutorial.md",version:"current",sidebar_label:"Basic Tutorial"},c=[{value:"Basic Overview",id:"basic-overview",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Install BIRT",id:"install-birt",children:[]},{value:"Example Report",id:"example-report",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"basic-overview"},"Basic Overview"),Object(i.b)("p",null,"The following videos walks you though the steps to build a basic listing report and introduces the basic BIRT concepts. This is the place to start. "),Object(i.b)("p",null,"$$$Video Tutorials"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Youtube -BIRT Report Designer Tutorial Part-1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Youtube -BIRT Report Designer Tutorial Part-2"))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The following introduction walks you through building a simple report with BIRT. It introduces the major UI features, and many of the BIRT reporting elements. At the completion of this tutorial, you should be able to start building your own reports using your own database."),Object(i.b)("p",null,"We'll create a simple customer listing report, with the customers grouped by state and city. For each customer, we'll display a name and phone number."),Object(i.b)("h2",{id:"install-birt"},"Install BIRT"),Object(i.b)("p",null,"If you have not yet done so, install Eclipse, GEF, EMF and BIRT. You'll find complete instructions for doing so on the BIRT Install page.\nOpen BIRT"),Object(i.b)("p",null,"BIRT is a perspective within Eclipse. To open it, use the Window item on the Eclipse main menu. Choose Open Perspective, then Report Design. If report Design does not appear directly in the Open Perspective window, then choose Other... A list of perspectives will appear. Choose Report Design."),Object(i.b)("p",null,"Eclipse will switch to display the BIRT perspective."),Object(i.b)("h2",{id:"example-report"},"Example Report"),Object(i.b)("p",null,"If you get stuck as you work through the tutorial, or if you want to see the finished report right away, simply download it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use your browser to download the report: customers.rptdesign.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save the file into an Eclipse project directory. (See the next page if you don't yet have a project.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Your browser may store this as an XML file. If so, rename it back the the name above.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Within Eclipse, select your project in the Navigator view and choose Refresh from the right-click context menu.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Double-click the report to open it in the BIRT report designer."))))}p.isMDXComponent=!0},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);