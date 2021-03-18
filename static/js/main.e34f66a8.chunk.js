(this["webpackJsonpstar-wars-codex"]=this["webpackJsonpstar-wars-codex"]||[]).push([[0],{42:function(n,t,e){"use strict";e.r(t);var a,o,r,i,c,s,l,d,f,h,g,p,m,b,u,j,x,U,O,v,y,w,F,B,C,k,E=e(1),T=e.n(E),S=e(24),_=e.n(S),z=e(2),A=e(3),R={spacing:{1:"8px",2:"16px",3:"24px",4:"40px",5:"60px"},breakpoints:{landscape:"1024px",portrait:"800px",mobile:"480px"},colors:{accent:"#be0000",anchor:"#2e7ec3",anchorHover:"#1d64a1",primary:"#be0000",secondary:"#4e525d",tertiary:"#252f36"},layoutWidth:"90%",layoutWidthMax:"720px",bodyBackground:"url(/assets/images/bgl.jpg) fixed 50% 50%;",bodyBackgroundMobile:"url(/assets/images/bgs.jpg) fixed 50% 50%;",textColorBase:"#333",textColorHeadings:"#222",fontFamilyBase:'"PT Sans", sans-serif',fontFamilyHeadings:'"PT Sans", sans-serif',fontSizeBase:"16px",fontSizeS:"0.9rem",fontSizeM:"1rem",fontSizeL:"1.25rem",fontSizeXL:"2rem",fontWeightThin:300,fontWeightRegular:400,fontWeightBold:700,borderBase:"1px solid #eee",borderRadiusBase:"3px",boxShadowBase:"0px 3px 20px rgba(0,0,0,.5)",lineHeightBase:"1.5rem",lineHeightL:"1.75rem",marginBottomBase:"1.5rem",transitionBase:"ease-out 0.25s",formControlBorder:"1px solid #ccc",formControlBorderRadius:"2px",formControlBackgroundColor:"#fff",formControlTextColor:"#555",formControlHeight:"46px",formControlBoxShadow:"0px 3px 5px rgba(0,0,0,.1)",buttonBorder:"none",buttonBorderRadius:"2px",buttonBackgroundColor:"#be0000",buttonBackgroundColorHover:"#a20000",buttonBoxShadow:"0px 3px 5px rgba(0,0,0,.1)",buttonTextColor:"#fff",buttonTextHover:"#fff",buttonHeight:"46px",boxBackground:"#fff",boxBackgroundInv:"#222",boxColor:"#333",headerBackground:"rgba(0,0,0,.4)"},D=Object(z.b)(a||(a=Object(A.a)(["\n  ","\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    -webkit-text-size-adjust: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  body {\n    font-family: ",";\n    line-height: ",";\n    color: ",";\n    background: ",";\n    background-size: cover;\n    text-align: center;\n    font-size: ",";\n    padding-bottom: ",";\n\n    @media only screen and (min-width: ",") {\n      background: ",";\n      background-size: cover;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n    margin: 0 0 "," 0;\n    font-family: ",";\n    font-weight: ",";\n  }\n\n  p,\n  blockquote,\n  ul,\n  ol,\n  dl,\n  form,\n  table,\n  pre {\n    display: block;\n    margin: 0 0 "," 0;\n  }\n\n  article,\n  aside,\n  canvas,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n\n  ul,\n  ol,\n  dl {\n    padding: 0;\n  }\n\n  ul ul,\n  ul ol,\n  ol ol,\n  ol ul,\n  dd {\n    margin: 0;\n  }\n\n  li {\n    margin: 0 0 0 ",";\n    padding: 0;\n    display: list-item;\n    list-style-position: outside;\n  }\n\n  dd {\n    padding: 0 0 0 ",';\n  }\n\n  pre,\n  code,\n  samp,\n  kbd,\n  var {\n    font: .9em Monaco, "Courier New", monospace;\n  }\n\n  code {\n    color: inherit;\n    background: rgba(0,0,0,.05);\n    padding: 0 5px;\n  }\n\n  pre {\n    overflow: auto;\n  }\n\n  abbr,\n  acronym {\n    text-transform: uppercase;\n    border-bottom: 1px dotted #000;\n    letter-spacing: .01em;\n  }\n\n  abbr[title],\n  acronym[title] {\n    cursor: help;\n  }\n\n  small {\n    font-size: .9rem;\n  }\n\n  sup{\n    font-size: .8rem;\n    vertical-align: top;\n    position: relative;\n    top: -.5rem;\n  }\n  sub {\n    font-size: .8rem;\n    vertical-align: bottom;\n    position: relative;\n    bottom: -.5rem;\n  }\n\n  em,\n  cite,\n  q {\n    font-style: italic;\n  }\n\n  ins {\n    text-decoration: none;\n    color: ',";\n    font-style: italic;\n  }\n\n  img {\n    border: none;\n  }\n\n  figure {\n    margin: 0 0 .5em 0;\n    display: table;\n  }\n\n  meter,\n  progress,\n  audio,\n  video {\n    width: 100%;\n  }\n\n  hr {\n    display: block;\n    clear: both;\n    height: 1px;\n    border: 0;\n    border-top: ",";\n    margin: -1px 0 "," 0;\n    padding: 0;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    display: table;\n  }\n\n  th,\n  caption {\n    text-align: left;\n  }\n\n  label {\n    display: block;\n  }\n\n  fieldset {\n    margin: 0;\n    padding: 0;\n    border: none;\n  }\n\n  legend {\n    font-weight: ",';\n  }\n\n  input,\n  select {\n    vertical-align: middle;\n  }\n\n  input[type="radio"],\n  input[type="checkbox"],\n  .radio,\n  .checkbox {\n    margin: 0 .25rem 0 0;\n  }\n\n  ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  ::-moz-selection {\n    background: #555;\n    color: #fff;\n  }\n\n  ::selection {\n    background: #555;\n    color: #fff;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none;\n  }\n\n  table,\n  input,\n  textarea,\n  select,\n  li,\n  button,\n  p {\n    font-family: inherit;\n    line-height: inherit;\n  }\n\n  a,\n  a:visited {\n    color: ',";\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  pre {\n    padding: ",";\n    border: ",";\n    line-height: inherit;\n  }\n\n  blockquote {\n    padding: 0;\n    margin-left: ",";\n    font-style: italic;\n  }\n\n  dt {\n    font-weight: ",";\n  }\n\n  figcaption {\n    font-style: italic;\n    margin: .25em 0;\n    text-align: center;\n    font-size: .9em;\n    line-height: 1.5em;\n  }\n"])),"\n/* cyrillic-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0ysmIAjcQ-woy.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0w8mIAjcQ-woy.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0ycmIAjcQ-woy.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0x8mIAjcQ-w.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizdRExUiTo99u79D0e8fOydIhUd0TA7i2bI.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizdRExUiTo99u79D0e8fOydKxUd0TA7i2bI.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizdRExUiTo99u79D0e8fOydIRUd0TA7i2bI.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizdRExUiTo99u79D0e8fOydLxUd0TA7iw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0-ExcOPIDUg-g.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0aExcOPIDUg-g.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0yExcOPIDUg-g.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0KExcOPIDU.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OOtLR8a8zILig.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OqtLR8a8zILig.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OCtLR8a8zILig.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'PT Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0O6tLR8a8zI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n",R.fontFamilyBase,R.lineHeightBase,R.textColorBase,R.bodyBackgroundMobile,R.fontSizeBase,R.spacing[2],R.breakpoints.portrait,R.bodyBackground,R.textColorHeadings,R.spacing[2],R.fontFamilyHeadings,R.fontWeightBold,R.marginBottomBase,R.spacing[2],R.spacing[2],R.colors.accent,R.borderBase,R.spacing[2],R.fontWeightBold,R.colors.anchor,R.colors.anchorHover,R.spacing[2],R.borderBase,R.spacing[2],R.fontWeightBold),H=e(10),P=e(13),I="SET_FAVORITES",N="SET_CACHE",W={cache:{},favorites:JSON.parse(localStorage.getItem("favorites"))||{}},L=function(n,t){switch(t.type){case N:return Object(P.a)(Object(P.a)({},n),{},{cache:t.data.cache});case I:return localStorage.setItem("favorites",JSON.stringify(t.data.favorites)),console.log(localStorage.getItem("favorites")),Object(P.a)(Object(P.a)({},n),{},{favorites:t.data.favorites});default:return n}},M=e(0),q=T.a.createContext({}),Y=function(n){var t=Object(E.useReducer)(L,W),e=Object(H.a)(t,2),a=e[0],o=e[1],r={getCache:Object(E.useCallback)((function(){return a.cache}),[a.cache]),setCache:function(n){o({type:N,data:{cache:n}})},getFavorites:Object(E.useCallback)((function(){return a.favorites}),[a.favorites]),setFavorites:function(n){o({type:I,data:{favorites:n}})}};return Object(M.jsx)(q.Provider,{value:r,children:n.children})},J=e(29),Q=e(6),G=e(4),K=z.c.h1(o||(o=Object(A.a)(["\n  font-size: 2.5rem;\n  line-height: 3rem;\n  padding-top: 0.1875rem;\n  margin-bottom: 1.3125rem;\n"]))),V=z.c.h2(r||(r=Object(A.a)(["\n  font-size: 2.1rem;\n  line-height: 3rem;\n  padding-top: 0.3375rem;\n  margin-bottom: 1.1625rem;\n"]))),X=(z.c.h3(i||(i=Object(A.a)(["\n  font-size: 1.75rem;\n  line-height: 2.25rem;\n  padding-top: 0.84375rem;\n  margin-bottom: 1.40625rem;\n"]))),z.c.h4(c||(c=Object(A.a)(["\n  font-size: 1.25rem;\n  font-weight: ",";\n"])),R.fontWeightBold),z.c.h5(s||(s=Object(A.a)(["\n  font-size: 1rem;\n  font-weight: ",";\n"])),R.fontWeightBold),z.c.h6(l||(l=Object(A.a)(["\n  font-size: 1rem;\n  font-weight: ",";\n"])),R.fontWeightBold),z.c.p(d||(d=Object(A.a)(["\n  margin-bottom: ",";\n"])),R.marginBottomBase)),Z=z.c.p(f||(f=Object(A.a)(["\n  font-size: ",";\n  margin-bottom: ",";\n  line-height: ",";\n"])),R.fontSizeL,R.marginBottomBase,R.lineHeightL),$=z.c.dl(h||(h=Object(A.a)(["\n"]))),nn=z.c.dt(g||(g=Object(A.a)(["\n  font-size: ",";\n  text-transform: uppercase;\n"])),R.fontSizeM),tn=z.c.dd(p||(p=Object(A.a)(["\n  padding: 0 0 "," 0;\n  border-bottom: ",";\n  margin-bottom: ",";\n"])),R.spacing[2],R.borderBase,R.spacing[2]),en={HOME:"/",CHARACTERS:"/characters/:page/:search?",CHARACTER:"/character/:id"},an=z.c.div(m||(m=Object(A.a)(["\n  background: ",";\n  padding: "," 0;\n  margin-bottom: ",";\n  box-shadow: ",";\n  transition: ",";\n\n  .home & {\n    padding: "," 0;\n  }\n\n  .header__title {\n    margin: 0;\n    background: url(/assets/images/deathstar.png) no-repeat 50% 50%;\n    background-size: 100% auto;\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    padding: 0;\n    overflow: hidden;\n    cursor: pointer;\n    transition: ",";\n\n    .home & {\n      height: 200px;\n      width: 200px;\n\n      @media only screen and (min-width: ",") {\n        height: 260px;\n        width: 260px;\n      }\n    }\n\n    a {\n      display: block;\n      height: 100%;\n      text-indent: -8000px;\n      overflow: hidden;\n    }\n  }\n"])),R.headerBackground,R.spacing[1],R.spacing[5],R.boxShadowBase,R.transitionBase,R.spacing[4],R.transitionBase,R.breakpoints.portrait),on=function(){return Object(M.jsx)(an,{children:Object(M.jsx)(K,{className:"header__title",children:Object(M.jsx)(Q.b,{to:en.HOME,children:"Star Wars Codex"})})})},rn=z.c.div(b||(b=Object(A.a)([" \n"]))),cn=function(n){var t=n.children;return Object(M.jsxs)(rn,{children:[Object(M.jsx)(on,{}),t]})},sn=function(n){var t=n.component,e=n.name,a=n.exact,o=n.metaTitle,r=n.path,i=Object(G.g)().pathname;return Object(E.useEffect)((function(){setTimeout((function(){document.body.setAttribute("class",e)}),100),window.scrollTo(0,0)}),[e,i]),Object(M.jsx)(G.a,{path:r,exact:a,render:function(n){return Object(M.jsx)(cn,{metaTitle:o,children:Object(M.jsx)(t,Object(P.a)({},n))})}})},ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return en.CHARACTERS.replace(":page",n).replace(":search",t)},dn=function(n){var t=n.split("/"),e=t[t.length-2];return e||0},fn="\n  background: ".concat(R.formControlBackgroundColor,";\n  border: ").concat(R.formControlBorder,";\n  border-radius: ").concat(R.formControlBorderRadius,";\n  box-shadow: ").concat(R.formControlBoxShadow,";\n  color: ").concat(R.formControlTextColor,";\n  padding: 0 ").concat(R.spacing[1],";\n  height: ").concat(R.formControlHeight,";\n  line-height: ").concat(R.formControlHeight,";\n  width: 100%;\n  margin: 0;\n  vertical-align: middle;\n  font-size: ").concat(R.fontSizeBase,";  \n  transition: ").concat(R.transitionBase,";\n\n  ::placeholder {\n    opacity: .25;\n  }\n  \n  &[disabled] {\n\t\topacity: .5;\n\t}\n  \n  &:focus {    \n    border: ").concat(R.formControlBorder,";\n    box-shadow: inset ").concat(R.formControlShadow,";\n    outline: none;\n  }\n"),hn=z.c.input(u||(u=Object(A.a)(["\n  ","\n"])),fn),gn=(z.c.textarea(j||(j=Object(A.a)(["\n  ","\n  overflow: auto;\n  height: calc("," * 3);\n  resize: vertical;\n"])),fn,R.formControlHeight),z.c.select(x||(x=Object(A.a)(["\n  ","\n"])),fn),z.c.form(U||(U=Object(A.a)(["\n  margin: 0 0 "," 0;\n"])),R.spacing[1])),pn=(z.c.div(O||(O=Object(A.a)(["\n  margin: 0 0 "," 0;\n"])),R.spacing[1]),z.c.div(v||(v=Object(A.a)(["\n  display: block;\n\tfont-size: ",";\n\tmargin-top: 5px;\n\topacity: 0.75;\n\tfont-style: italic;\n"])),R.fontSizeS),z.c.div(y||(y=Object(A.a)(["\n  margin: "," 0;\n"])),R.spacing[2]),z.c.button(w||(w=Object(A.a)(["\n  display: inline-block;\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  padding: 0 ",";\n  height: ",";\n  line-height: ",";\n  cursor: pointer;\n  vertical-align: middle;\n  text-decoration: none !important;\n  box-shadow: ",";\n  font-size: ",";\n  font-weight: ",";\n  font-style: normal;\n  text-transform: uppercase;\n  transition: ",";  \n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),R.buttonBorderRadius,R.buttonBackgroundColor,R.buttonTextColor,R.spacing[4],R.buttonHeight,R.buttonHeight,R.buttonBoxShadow,R.fontSizeBase,R.fontWeightBold,R.transitionBase,R.buttonBackgroundColorHover,R.buttonTextColorHover)),mn=z.c.div(F||(F=Object(A.a)(["\n  padding: 0 ",";\n\n  * {\n    color: #fff;\n  }\n\n  p {\n    max-width: 500px;\n    margin: 0 auto "," auto;    \n  }\n\n  button {\n    border-radius: ",";\n    box-shadow: ",";\n  }\n"])),R.spacing[2],R.marginBottomBase,R.buttonHeight,R.boxShadowBase),bn=function(){var n=ln(),t=Object(G.f)();return Object(M.jsxs)(mn,{children:[Object(M.jsx)(Z,{children:"Long time ago, in a galaxy far, far away... there were many creatures that roamed the universe. Explore our database of all the characters that appeared in the Star Wars saga."}),Object(M.jsx)(X,{children:Object(M.jsx)(pn,{onClick:function(){t.push(n)},children:"Browse the Characters"})})]})},un=function(){var n=Object(E.useContext)(q),t=n.getFavorites();return{addToFavorites:function(e){t[e]="true",n.setFavorites(t)},isFavorite:function(n){return void 0!==t[n]},removeFromFavorites:function(e){delete t[e],n.setFavorites(t)}}},jn=e(22),xn=e.n(jn),Un=e(28),On=function(n){var t=Object(E.useContext)(q),e=t.getCache(),a=Object(E.useState)(null),o=Object(H.a)(a,2),r=o[0],i=o[1],c=Object(E.useState)(null),s=Object(H.a)(c,2),l=s[0],d=s[1],f=Object(E.useState)(null),h=Object(H.a)(f,2),g=h[0],p=h[1];return Object(E.useEffect)((function(){n&&function(){var a=Object(Un.a)(xn.a.mark((function a(){var o,r,c;return xn.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i("fetching"),d(null),!e[n]){a.next=8;break}o=e[n],i("done"),p(o),a.next=25;break;case 8:return a.prev=8,a.next=11,fetch(n);case 11:return r=a.sent,a.next=14,r.json();case 14:c=a.sent,e[n]=c,t.setCache(e),i("done"),p(c),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(8),i("error"),d(a.t0.message);case 25:case"end":return a.stop()}}),a,null,[[8,21]])})));return function(){return a.apply(this,arguments)}}()()}),[n]),{status:r,error:l,data:g}},vn=z.c.div(B||(B=Object(A.a)(["\n  margin: 0 auto;\n  width: ",";\n  max-width: ",";\n  text-align: left;\n  position: relative;\n"])),R.layoutWidth,R.layoutWidthMax),yn=z.c.div(C||(C=Object(A.a)(["\n  background-color: ",";\n  box-shadow: ",";\n  color: ",";\n  margin-bottom: ",";\n  padding: ",";\n  text-align: left;\n"])),R.boxBackground,R.boxShadowBase,R.boxColor,R.marginBottomBase,R.spacing[2]),wn=z.c.span(k||(k=Object(A.a)(["  \n  color: rgba(0,0,0,.2);\n  margin: 0 ",";\n  cursor: pointer;\n\n  &.active {\n    color: ",";\n  }\n\n  svg {\n    width: 30px;\n    height: 30px;\n  }\n"])),R.spacing[2],R.colors.accent),Fn=function(n){var t=n.id,e=un(),a=e.addToFavorites,o=e.isFavorite,r=e.removeFromFavorites,i=o(t),c=Object(E.useState)(i),s=Object(H.a)(c,2),l=s[0],d=s[1];return""!==t&&Object(M.jsx)(wn,{className:l&&"active",onClick:function(n){return function(n,t){n.stopPropagation(),l?r(t):a(t),d(!l)}(n,t)},title:l?"Remove from favorites":"Add to favorites",children:Object(M.jsx)("svg",{viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",role:"img",children:Object(M.jsx)("path",{fill:"currentColor",d:"m494 185c0 4-3 9-8 14l-103 101 24 143c0 1 0 3 0 5 0 4-1 8-3 10-2 3-4 5-8 5-4 0-8-2-12-4l-128-67-128 67c-4 2-8 4-12 4-4 0-7-2-9-5-2-2-3-6-3-10 0-1 0-3 1-5l24-143-104-101c-4-6-7-10-7-14 0-7 6-12 16-13l144-21 64-130c4-8 8-12 14-12 6 0 10 4 14 12l64 130 144 21c10 1 16 6 16 13z"})})})},Bn=e(11),Cn=e.n(Bn),kn=function(n){var t=n.url,e=dn(t),a="".concat("https://swapi.dev/api").concat(Gn.endpoints.films,"/").concat(e,"/"),o=On(a).data;return Object(M.jsx)(M.Fragment,{children:o&&o.title})};kn.propTypes={url:Cn.a.string.isRequired};var En=kn,Tn=function(n){var t=n.url,e=dn(t),a="".concat("https://swapi.dev/api").concat(Gn.endpoints.planets,"/").concat(e,"/"),o=On(a).data;return Object(M.jsx)(M.Fragment,{children:o&&o.name})};Tn.propTypes={url:Cn.a.string.isRequired};var Sn,_n,zn,An,Rn,Dn=Tn,Hn=z.c.div(Sn||(Sn=Object(A.a)(["  \n  .list-item {\n    display: flex;\n    padding: 0;\n    cursor: pointer;\n\n    &__avatar {\n      background: ",";\n      display: block;\n      width: 80px;\n    }\n    &__details {\n      padding: ",";\n    }\n    &__title {\n      text-transform: uppercase;\n      margin: 0;\n      padding: 0;\n      font-size: ",";\n      line-height: ",";\n    }\n    &__homeworld {\n      margin: 0;\n    }\n    &__favorite {\n      margin-left: auto;\n      width: 8%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])),R.boxBackgroundInv,R.spacing[2],R.fontSizeL,R.lineHeightBase),Pn=function(n){var t=n.characters;return Object(M.jsx)(Hn,{children:t.map((function(n){var t=dn(n.url);return Object(M.jsx)(In,{character:n,id:t},t)}))})},In=function(n){var t=n.character,e=n.id,a=Object(G.f)();return Object(M.jsxs)(yn,{className:"list-item",onClick:function(n){return function(n,t){var e=en.CHARACTER.replace(":id",t);a.push(e)}(0,e)},children:[Object(M.jsx)("span",{className:"list-item__avatar"}),Object(M.jsxs)("div",{className:"list-item__details",children:[Object(M.jsx)(V,{className:"list-item__title",children:t.name}),Object(M.jsx)(X,{className:"list-item__homeworld",children:Object(M.jsx)(Dn,{url:t.homeworld})})]}),Object(M.jsx)("div",{className:"list-item__favorite",children:Object(M.jsx)(Fn,{id:e})})]})},Nn=z.c.div(_n||(_n=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: ",";\n  \n  a, a:visited, a:hover {\n    color: inherit;\n    margin: 0 ",";\n  }\n"])),R.marginBottomBase,R.spacing[2]),Wn=function(n){var t=n.data,e=n.page,a=n.search;return Object(M.jsxs)(Nn,{children:[t.previous&&function(){var n=ln(e-1,a);return Object(M.jsx)(Q.b,{to:n,children:"Previous Page"})}(),t.next&&function(){var n=ln(e+1,a);return Object(M.jsx)(Q.b,{to:n,children:"Next Page"})}()]})},Ln=z.c.div(zn||(zn=Object(A.a)(["\n  .box {\n    margin-bottom: ",";\n  }\n  form {\n    display: flex;\n    margin-bottom: 0;\n  }\n"])),R.marginBottomBase),Mn=function(n){var t=n.search,e=Object(G.f)(),a=Object(E.useState)(t),o=Object(H.a)(a,2),r=o[0],i=o[1];return Object(M.jsx)(Ln,{children:Object(M.jsx)(yn,{className:"box",children:Object(M.jsxs)(gn,{onSubmit:function(n){n.preventDefault();var t=ln(1,r);e.push(t)},children:[Object(M.jsx)(hn,{type:"text",placeholder:"Search the characters",value:r,onChange:function(n){i(n.target.value)}}),Object(M.jsx)(pn,{type:"submit",children:"Search"})]})})})},qn=z.c.div(An||(An=Object(A.a)([" \n  .characters {\n    color: #fff;\n    text-align: center;\n  }\n"]))),Yn=function(){var n=Object(G.h)(),t=n.page,e=n.search;t=parseInt(t),t=isNaN(t)?1:t;var a=(e=e||"")?"&search=".concat(e):"",o="/?page=".concat(t).concat(a),r="".concat("https://swapi.dev/api").concat(Gn.endpoints.characters).concat(o),i=On(r),c=i.status,s=(i.error,i.data),l=s?s.results:[];return Object(M.jsx)(qn,{children:Object(M.jsxs)(vn,{className:"characters",children:[Object(M.jsx)(Mn,{search:e}),"fetching"===c&&Object(M.jsx)(X,{children:"..."}),"error"===c&&Object(M.jsx)(X,{children:"There has been an error with your request."}),"done"===c&&l&&Object(M.jsx)(M.Fragment,{children:l.length>0?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Pn,{characters:l}),Object(M.jsx)(Wn,{data:s,page:t,search:e})]}):Object(M.jsx)(X,{children:"There are no characters that match your criteria"})})]})})},Jn=z.c.div(Rn||(Rn=Object(A.a)(["\n  .character {\n    color: #fff;\n    text-align: center;\n\n    a, a:visited, a:hover {\n      color: inherit;\n    }\n\n    &__head {\n      display: flex;\n      padding: 0;\n    }\n\n    &__avatar {\n      background: ",";\n      display: block;\n      width: 120px;\n    }\n    &__details {\n      padding: ",";\n    }\n    &__title {\n      text-transform: uppercase;\n      margin: 0;\n      padding: 0;\n      font-size: ",";\n      line-height: ",";\n    }\n    &__homeworld {\n      margin: 0;\n    }\n    &__favorite {\n      margin-left: auto;\n      width: 10%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    &__data {\n      padding: ",";\n    }\n    &__film-name {\n      display: block;\n    }\n  }\n"])),R.boxBackgroundInv,R.spacing[4],R.fontSizeL,R.lineHeightBase,R.spacing[4]),Qn={Home:bn,Characters:Yn,Character:function(){var n=Object(G.f)(),t=Object(G.h)().id,e="".concat("https://swapi.dev/api").concat(Gn.endpoints.characters,"/").concat(t,"/"),a=On(e),o=(a.status,a.error,a.data);return console.log(o),o&&Object(M.jsx)(Jn,{children:Object(M.jsxs)(vn,{className:"character",children:[Object(M.jsxs)(yn,{className:"character__head",children:[Object(M.jsx)("span",{className:"character__avatar"}),Object(M.jsxs)("div",{className:"character__details",children:[Object(M.jsx)(V,{className:"character__title",children:o.name}),Object(M.jsx)(X,{className:"character__homeworld",children:Object(M.jsx)(Dn,{url:o.homeworld})})]}),Object(M.jsx)("div",{className:"character__favorite",children:Object(M.jsx)(Fn,{id:t})})]}),Object(M.jsx)(yn,{className:"character__data",children:Object(M.jsxs)($,{children:[Object(M.jsx)(nn,{children:"Birth Year"}),Object(M.jsx)(tn,{children:o.birth_year}),Object(M.jsx)(nn,{children:"Gender"}),Object(M.jsx)(tn,{children:o.gender}),Object(M.jsx)(nn,{children:"Height"}),Object(M.jsx)(tn,{children:o.height}),Object(M.jsx)(nn,{children:"Weight"}),Object(M.jsx)(tn,{children:o.mass}),Object(M.jsx)(nn,{children:"Films"}),Object(M.jsx)(tn,{children:o.films.map((function(n){return Object(M.jsx)("span",{className:"character__film-name",children:Object(M.jsx)(En,{url:n})})}))})]})}),Object(M.jsx)(X,{children:Object(M.jsx)(pn,{onClick:function(){return n.goBack()},children:"Go Back"})})]})})}},Gn={endpoints:{characters:"/people",planets:"/planets",films:"/films"},pages:[{id:"abcf372e-23fd-11eb-adc1-0242ac120002",name:"home",component:Qn.Home,path:en.HOME},{id:"abcf372e-23fd-112b-adc1-0242ac120902",name:"characters",component:Qn.Characters,exact:!1,path:en.CHARACTERS},{id:"abcf372e-233d-12eb-adc1-0242ac120002",name:"character",component:Qn.Character,exact:!1,path:en.CHARACTER}]},Kn=function(){var n=[];Gn.pages.forEach((function(t){n=[].concat(Object(J.a)(n),[t])}));var t=n.map((function(n){return Object(M.jsx)(sn,{component:n.component,exact:null==n.exact||n.exact,metaTitle:n.metaTitle||"",name:n.name,path:n.path},n.id)}));return Object(M.jsx)(Q.a,{children:Object(M.jsx)(G.c,{children:t})})},Vn=function(){return Object(M.jsxs)(z.a,{theme:R,children:[Object(M.jsx)(D,{}),Object(M.jsx)(Y,{children:Object(M.jsx)(Kn,{})})]})};_.a.render(Object(M.jsx)(T.a.StrictMode,{children:Object(M.jsx)(Vn,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e34f66a8.chunk.js.map