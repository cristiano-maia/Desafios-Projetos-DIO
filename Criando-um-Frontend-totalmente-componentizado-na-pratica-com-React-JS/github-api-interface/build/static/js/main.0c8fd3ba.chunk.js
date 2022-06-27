(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var i,r,o,a,s,c,l,d,b,p,h,u,g,f,j,x,m,O=t(1),v=t.n(O),y=t(23),w=t.n(y),k=t(6),z=t(2),S=t(3),R=S.b.div(i||(i=Object(z.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 4px;\n\n  input {\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    width: 100%;\n    height: 44px;\n    padding: 8px;\n    font-weight: 500;\n  }\n\n  button {\n    background-color: #ff0000;\n    padding: 8px 16px;\n    margin: 0 16px;\n    border-radius: 8px;\n\n    &:hover {\n      background-color: #ff0000;\n      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);\n    }\n\n    span {\n      font-weight: bold;\n      color: #ffff;\n    }\n  }\n"]))),C=t(5),E=t(27),_=t.n(E).a.create({baseURL:"https://api.github.com/"}),I=t(0),U=Object(O.createContext)({loading:!1,user:{},repositories:[],starred:[]}),T=function(n){var e=n.children,t=Object(O.useState)({hasUser:!1,loading:!1,user:{id:void 0,avatar:void 0,login:void 0,name:void 0,html_url:void 0,blog:void 0,company:void 0,location:void 0,followers:0,following:0,public_gists:0,public_repos:0},repositories:[],starred:[]}),i=Object(k.a)(t,2),r=i[0],o=i[1],a={githubState:r,getUser:Object(O.useCallback)((function(n){return function(n){o((function(n){return Object(C.a)(Object(C.a)({},n),{},{loading:!n.loading})})),_.get("users/".concat(n)).then((function(n){var e=n.data;o((function(n){return Object(C.a)(Object(C.a)({},n),{},{hasUser:!0,user:{id:e.id,avatar:e.avatar_url,login:e.login,name:e.name,html_url:e.html_url,blog:e.blog,company:e.company,location:e.location,followers:e.followers,following:e.following,public_gists:e.public_gists,public_repos:e.public_repos}})}))})).finally((function(){o((function(n){return Object(C.a)(Object(C.a)({},n),{},{loading:!n.loading})}))}))}(n)}),[]),getUserRepos:Object(O.useCallback)((function(n){return function(n){_.get("users/".concat(n,"/repos")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(C.a)(Object(C.a)({},n),{},{repositories:e})}))}))}(n)}),[]),getUserStarred:Object(O.useCallback)((function(n){return function(n){_.get("users/".concat(n,"/starred")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(C.a)(Object(C.a)({},n),{},{starred:e})}))}))}(n)}),[])};return Object(I.jsx)(U.Provider,{value:a,children:e})},F=function(){var n=Object(O.useContext)(U);return{githubState:n.githubState,getUser:n.getUser,getUserRepos:n.getUserRepos,getUserStarred:n.getUserStarred}},A=function(){var n=F().getUser,e=Object(O.useState)(),t=Object(k.a)(e,2),i=t[0],r=t[1];return Object(I.jsx)("header",{children:Object(I.jsxs)(R,{children:[Object(I.jsx)("input",{type:"text",placeholder:"Digite o username do GitHub para pesquisa...",onChange:function(n){return r(n.target.value)}}),Object(I.jsx)("button",{type:"submit",onClick:function(){if(i)return n(i)},children:Object(I.jsx)("span",{children:"Buscar!"})})]})})},N=S.b.section(r||(r=Object(z.a)(["\n  margin: 16px;\n"]))),L=function(n){var e=n.children;return Object(I.jsxs)(N,{children:[Object(I.jsx)(A,{}),e]})},B=S.b.div(o||(o=Object(z.a)(["\n  margin: 16px;\n  display: flex;\n  justify-content: center;\n\n  h1 {\n    font-weight: bold;\n    font-size: 32px;\n  }\n"]))),P=function(){return Object(I.jsx)(B,{children:Object(I.jsx)("h1",{children:"Digite o nome do usu\xe1rio do GitHub que voc\xea deseja pesquisar!"})})},q=S.b.div(a||(a=Object(z.a)(["\n  display: flex;\n  align-items: flex-start;\n"]))),G=S.b.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-left: 8px;\n  height: 200px;\n\n  h1 {\n    font-size: 32px;\n    font-weight: bold;\n  }\n\n  h3 {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  h4 {\n    font-size: 16px;\n    font-weight: bold;\n  }\n"]))),J=S.b.div(c||(c=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  div {\n    margin: 8px;\n    text-align: center;\n  }\n"]))),D=S.b.div(l||(l=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n\n  h3 {\n    margin-right: 8px;\n  }\n\n  a {\n    font-size: 18px;\n    color: #B22222;\n    font-weight: bold;\n  }\n"]))),H=S.b.img(d||(d=Object(z.a)(["\n  border-radius: 50%;\n  width: 200px;\n  margin: 8px;\n"]))),M=function(){var n=F().githubState;return Object(I.jsxs)(q,{children:[Object(I.jsx)(H,{src:n.user.avatar,alt:"Avatar of user"}),Object(I.jsxs)(G,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:n.user.name}),Object(I.jsxs)(D,{children:[Object(I.jsx)("h3",{children:"Nome de Usu\xe1rio:"}),Object(I.jsx)("a",{href:n.user.html_url,target:"_blank",rel:"noreferrer",children:n.user.login})]}),Object(I.jsxs)(D,{children:[Object(I.jsx)("h3",{children:"Empresa:"}),Object(I.jsx)("span",{children:n.user.company})]}),Object(I.jsxs)(D,{children:[Object(I.jsx)("h3",{children:"Localiza\xe7\xe3o:"}),Object(I.jsx)("span",{children:n.user.location})]}),Object(I.jsxs)(D,{children:[Object(I.jsx)("h3",{children:"Blog:"}),Object(I.jsx)("a",{href:n.user.blog,target:"_blank",rel:"noreferrer",children:n.user.blog})]})]}),Object(I.jsxs)(J,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{children:"Seguidores"}),Object(I.jsxs)("span",{children:[" ",n.user.followers]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{children:"Seguindo"}),Object(I.jsxs)("span",{children:[" ",n.user.following]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{children:"Gists"}),Object(I.jsxs)("span",{children:[" ",n.user.public_gists]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{children:"Reposit\xf3rios"}),Object(I.jsxs)("span",{children:[" ",n.user.public_repos]})]})]})]})]})},V=S.b.div(b||(b=Object(z.a)(["\n  padding: 8px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  margin: 16px 16px;\n  width: 350px;\n  height: 150px;\n  align-content: center;\n"]))),K=S.b.h2(p||(p=Object(z.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin: 8px 0;\n"]))),Q=S.b.h2(h||(h=Object(z.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin: 8px 0;\n  color: #2d3748;\n"]))),W=S.b.a(u||(u=Object(z.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  margin: 8px 0;\n  color: #B22222;\n"]))),X=function(n){var e=n.name,t=n.linkToRepo,i=n.fullName;return Object(I.jsxs)(V,{children:[Object(I.jsx)(K,{children:e}),Object(I.jsx)(Q,{children:"Reposit\xf3rio:"}),Object(I.jsx)(W,{href:t,target:"_blank",rel:"noreferrer",children:i})]})},Y=t(7),Z=Object(S.b)(Y.d)(g||(g=Object(z.a)(["\n  font-size: 16px;\n  width: 100%;\n  margin-top: 16px;\n"]))),$=Object(S.b)(Y.b)(f||(f=Object(z.a)(["\n  list-style-type: none;\n  padding: 4px;\n  display: flex;\n  margin: 0;\n"])));$.tabsRole="TabList";var nn=Object(S.b)(Y.a)(j||(j=Object(z.a)(['\n  border-radius: 16px;\n  border: 1px solid #ccc;\n  padding: 16px;\n  user-select: none;\n  cursor: pointer;\n  z-index: 99999;\n  background-color: "#fff";\n  margin: 8px;\n\n  &:focus {\n    outline: none;\n  }\n\n  &.is-selected {\n    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);\n  }\n'])));nn.tabsRole="Tab";var en=Object(S.b)(Y.c)(x||(x=Object(z.a)(['\n  padding: 16px;\n  border: 1px solid "#ccc";\n  display: none;\n  margin-top: -5px;\n\n  &.is-selected {\n    display: block;\n  }\n'])));en.tabsRole="TabPanel";var tn,rn=S.b.div(m||(m=Object(z.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n"]))),on=function(){var n=F(),e=n.githubState,t=n.getUserRepos,i=n.getUserStarred,r=Object(O.useState)(!1),o=Object(k.a)(r,2),a=o[0],s=o[1];return Object(O.useEffect)((function(){e.user.login&&(t(e.user.login),i(e.user.login)),s(e.repositories)}),[e.user.login]),Object(I.jsx)(I.Fragment,{children:a?Object(I.jsxs)(Z,{selectedTabClassName:"is-selected",selectedTabPanelClassName:"is-selected",children:[Object(I.jsxs)($,{children:[Object(I.jsx)(nn,{children:"Reposit\xf3rios"}),Object(I.jsx)(nn,{children:"Estrelados"})]}),Object(I.jsx)(en,{children:Object(I.jsx)(rn,{children:e.repositories.map((function(n){return Object(I.jsx)(X,{name:n.name,linkToRepo:n.full_name,fullName:n.full_name},n.id)}))})}),Object(I.jsx)(en,{children:Object(I.jsx)(rn,{children:e.starred.map((function(n){return Object(I.jsx)(X,{name:n.name,linkToRepo:n.html_url,fullName:n.full_name},n.id)}))})})]}):Object(I.jsx)(I.Fragment,{})})},an=function(){var n=F().githubState;return Object(I.jsx)(L,{children:n.hasUser?Object(I.jsx)(I.Fragment,{children:n.loading?Object(I.jsx)("p",{children:"Loading"}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(M,{}),Object(I.jsx)(on,{})]})}):Object(I.jsx)(P,{})})},sn=Object(S.a)(tn||(tn=Object(z.a)(['\n  /*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n\n/* Reset box-model and set borders */\n/* ============================================ */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n\n/* Document */\n/* ============================================ */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n\n/* Sections */\n/* ============================================ */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  font-family: roboto,sans-serif;\n}\n\n/**\n * Render the main element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/* Vertical rhythm */\n/* ============================================ */\n\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n\n/* Headings */\n/* ============================================ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\n/* Lists (enumeration) */\n/* ============================================ */\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Lists (definition) */\n/* ============================================ */\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Grouping content */\n/* ============================================ */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\naddress {\n  font-style: inherit;\n}\n\n/* Text-level semantics */\n/* ============================================ */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent sub and sup elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content */\n/* ============================================ */\n\n/**\n * Prevent vertical alignment issues.\n */\n\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n\n/* Forms */\n/* ============================================ */\n\n/**\n * Reset form fields to make them styleable\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border-radius: 0;\n  text-align: inherit;\n}\n\n/**\n * Reset radio and checkbox appearance to preserve their look in iOS.\n */\n\n[type="checkbox"] {\n  -webkit-appearance: checkbox;\n  appearance: checkbox;\n}\n\n[type="radio"] {\n  -webkit-appearance: radio;\n  appearance: radio;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  cursor: pointer;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\nbutton[disabled],\n[type="button"][disabled],\n[type="reset"][disabled],\n[type="submit"][disabled] {\n  cursor: default;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove arrow in IE10 & IE11\n */\n\nselect::-ms-expand {\n  display: none;\n}\n\n/**\n * Remove padding\n */\n\noption {\n  padding: 0;\n}\n\n/**\n * Reset to invisible\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from fieldset elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    fieldset elements in all browsers.\n */\n\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  outline-offset: -2px; /* 1 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to inherit in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Clickable labels\n */\n\nlabel[for] {\n  cursor: pointer;\n}\n\n/* Interactive */\n/* ============================================ */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Remove outline for editable content.\n */\n\n[contenteditable] {\n  outline: none;\n}\n\n/* Table */\n/* ============================================ */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption {\n  text-align: left;\n}\n\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\n\nth {\n  text-align: left;\n  font-weight: bold;\n}\n\n/* Misc */\n/* ============================================ */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n']))),cn=function(){return Object(I.jsx)("main",{children:Object(I.jsxs)(T,{children:[Object(I.jsx)(sn,{}),Object(I.jsx)(an,{})]})})};w.a.render(Object(I.jsx)(v.a.StrictMode,{children:Object(I.jsx)(cn,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.0c8fd3ba.chunk.js.map