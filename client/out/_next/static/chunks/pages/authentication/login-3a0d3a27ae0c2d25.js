(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7667],{67720:function(e,t,r){"use strict";var i=r(63366),n=r(87462),a=r(67294),o=(r(45697),r(86010)),l=r(77463),s=r(41796),c=r(11496),d=r(33616),u=r(35097),h=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:e.spacing(1.2),paddingRight:e.spacing(1.2)},"vertical"===t.orientation&&{paddingTop:e.spacing(1.2),paddingBottom:e.spacing(1.2)}))),x=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:x=(s?"div":"hr"),flexItem:g=!1,light:v=!1,orientation:b="horizontal",role:w=("hr"!==x?"separator":void 0),textAlign:j="center",variant:y="fullWidth"}=r,Z=(0,i.Z)(r,f),S=(0,n.Z)({},r,{absolute:a,component:x,flexItem:g,light:v,orientation:b,role:w,textAlign:j,variant:y}),A=(e=>{const{absolute:t,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,u.V,i)})(S);return(0,h.jsx)(m,(0,n.Z)({as:x,className:(0,o.Z)(A.root,c),role:w,ref:t,ownerState:S},Z,{children:s?(0,h.jsx)(p,{className:A.wrapper,ownerState:S,children:s}):null}))}));t.Z=x},35097:function(e,t,r){"use strict";r.d(t,{V:function(){return n}});var i=r(21420);function n(e){return(0,i.Z)("MuiDivider",e)}const a=(0,r(11271).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},91055:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/login",function(){return r(71609)}])},88986:function(e,t,r){"use strict";r.d(t,{U:function(){return p}});var i=r(85893),n=r(41664),a=r(87357),o=r(27948),l=r(87918),s=r(15861),c=r(50122),d=r(42213),u="/static/icons/amplify.svg",h="/static/icons/auth0.svg",f="/static/icons/firebase.svg",m="/static/icons/jwt.svg",p=function(){return(0,i.jsx)(a.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,i.jsx)(o.Z,{maxWidth:"md",children:(0,i.jsxs)(a.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,i.jsx)(l.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,i.jsxs)(s.Z,{variant:"subtitle2",children:["Visit our"," ",(0,i.jsx)(n.default,{href:"/docs/welcome",passHref:!0,children:(0,i.jsx)(c.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,i.jsxs)(a.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,i.jsx)(d.Z,{title:"Amplify",children:(0,i.jsx)("img",{alt:"Amplify",src:u})}),(0,i.jsx)(d.Z,{title:"Auth0",children:(0,i.jsx)("img",{alt:"Auth0",src:h})}),(0,i.jsx)(d.Z,{title:"Firebase",children:(0,i.jsx)("img",{alt:"Firebase",src:f})}),(0,i.jsx)(d.Z,{title:"JSON Web Token",children:(0,i.jsx)("img",{alt:"JWT",src:m})})]})]})})})}},33149:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var i=r(85893),n=r(67294),a=r(11163),o=r(45697),l=r.n(o),s=r(89731),c=function(e){var t=e.children,r=(0,s.a)(),o=(0,a.useRouter)(),l=(0,n.useState)(!1),c=l[0],d=l[1],u=o.query.disableGuard;return(0,n.useEffect)((function(){o.isReady&&(r.isAuthenticated&&"true"!==u?o.push("/dashboard"):d(!0))}),[o.isReady]),c?(0,i.jsx)(i.Fragment,{children:t}):null};c.propTypes={children:l().node}},89731:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var i=r(67294),n=r(37411),a=function(){return(0,i.useContext)(n.Vo)}},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var i=r(67294),n=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,i.useCallback)((function(){return e.current}),[])}},71609:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var i=r(85893),n=r(67294),a=r(9008),o=r(41664),l=r(11163),s=r(87357),c=r(27948),d=r(66242),u=r(15861),h=r(67720),f=r(50122),m=r(33149),p=(r(88986),r(28520)),x=r.n(p),g=r(74231),v=r(82580),b=r(89731),w=r(46723);var j=r(50135),y=r(56815),Z=r(11057);function S(e,t,r,i,n,a,o){try{var l=e[a](o),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(i,n)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){var t,r=(0,w.s)(),n=(0,l.useRouter)(),a=(0,b.a)().login,o=(0,v.TA)({initialValues:{email:"demo@devias.io",password:"Password123!",submit:null},validationSchema:g.Ry({email:g.Z_().email("Must be a valid email").max(255).required("Email is required"),password:g.Z_().max(255).required("Password is required")}),onSubmit:(t=x().mark((function e(t,i){var o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(t.email,t.password);case 3:r()&&(o=n.query.returnUrl||"/dashboard",n.push(o)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),r()&&(i.setStatus({success:!1}),i.setErrors({submit:e.t0.message}),i.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var e=this,r=arguments;return new Promise((function(i,n){var a=t.apply(e,r);function o(e){S(a,i,n,o,l,"next",e)}function l(e){S(a,i,n,o,l,"throw",e)}o(void 0)}))})});return(0,i.jsxs)("form",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){A(e,t,r[t])}))}return e}({noValidate:!0,onSubmit:o.handleSubmit},e,{children:[(0,i.jsx)(j.Z,{autoFocus:!0,error:Boolean(o.touched.email&&o.errors.email),fullWidth:!0,helperText:o.touched.email&&o.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:o.handleBlur,onChange:o.handleChange,type:"email",value:o.values.email}),(0,i.jsx)(j.Z,{error:Boolean(o.touched.password&&o.errors.password),fullWidth:!0,helperText:o.touched.password&&o.errors.password,label:"Password",margin:"normal",name:"password",onBlur:o.handleBlur,onChange:o.handleChange,type:"password",value:o.values.password}),o.errors.submit&&(0,i.jsx)(s.Z,{sx:{mt:3},children:(0,i.jsx)(y.Z,{error:!0,children:o.errors.submit})}),(0,i.jsx)(s.Z,{sx:{mt:2},children:(0,i.jsx)(Z.Z,{disabled:o.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Log In"})})]}))},R=r(36788),W=r(38682),k=function(){var e=(0,l.useRouter)(),t=(0,b.a)().platform,r=e.query.disableGuard;return(0,n.useEffect)((function(){W.w.push({event:"page_view"})}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{children:(0,i.jsx)("title",{children:"Login | Material Kit Pro"})}),(0,i.jsx)(s.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:(0,i.jsx)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:(0,i.jsxs)(d.Z,{elevation:16,sx:{p:4},children:[(0,i.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(o.default,{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(R.T,{sx:{height:40,width:40}})})}),(0,i.jsx)(u.Z,{variant:"h4",children:"Log in"}),(0,i.jsx)(u.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Sign in on the internal platform"})]}),(0,i.jsx)(s.Z,{sx:{flexGrow:1,mt:3},children:"JWT"===t&&(0,i.jsx)(C,{})}),(0,i.jsx)(h.Z,{sx:{my:3}}),(0,i.jsx)(o.default,{href:r?"/authentication/register?disableGuard=".concat(r):"/authentication/register",passHref:!0,children:(0,i.jsx)(f.Z,{color:"textSecondary",variant:"body2",children:"Create new account"})}),"Amplify"===t&&(0,i.jsx)(o.default,{href:r?"/authentication/password-recovery?disableGuard=".concat(r):"/authentication/password-recovery",passHref:!0,children:(0,i.jsx)(f.Z,{color:"textSecondary",sx:{mt:1},variant:"body2",children:"Forgot password"})})]})})})]})};k.getLayout=function(e){return(0,i.jsx)(m.A,{children:e})};var _=k}},function(e){e.O(0,[2180,5464,135,939,551,2192,9774,2888,179],(function(){return t=91055,e(e.s=t);var t}));var t=e.O();_N_E=t}]);