(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2063],{33758:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/register",function(){return n(28537)}])},88986:function(e,r,n){"use strict";n.d(r,{U:function(){return x}});var t=n(85893),a=n(41664),s=n(87357),i=n(27948),o=n(87918),l=n(15861),c=n(50122),u=n(42213),d="/static/icons/amplify.svg",h="/static/icons/auth0.svg",m="/static/icons/firebase.svg",f="/static/icons/jwt.svg",x=function(){return(0,t.jsx)(s.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,t.jsx)(i.Z,{maxWidth:"md",children:(0,t.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,t.jsx)(o.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,t.jsxs)(l.Z,{variant:"subtitle2",children:["Visit our"," ",(0,t.jsx)(a.default,{href:"/docs/welcome",passHref:!0,children:(0,t.jsx)(c.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,t.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,t.jsx)(u.Z,{title:"Amplify",children:(0,t.jsx)("img",{alt:"Amplify",src:d})}),(0,t.jsx)(u.Z,{title:"Auth0",children:(0,t.jsx)("img",{alt:"Auth0",src:h})}),(0,t.jsx)(u.Z,{title:"Firebase",children:(0,t.jsx)("img",{alt:"Firebase",src:m})}),(0,t.jsx)(u.Z,{title:"JSON Web Token",children:(0,t.jsx)("img",{alt:"JWT",src:f})})]})]})})})}},33149:function(e,r,n){"use strict";n.d(r,{A:function(){return c}});var t=n(85893),a=n(67294),s=n(11163),i=n(45697),o=n.n(i),l=n(89731),c=function(e){var r=e.children,n=(0,l.a)(),i=(0,s.useRouter)(),o=(0,a.useState)(!1),c=o[0],u=o[1],d=i.query.disableGuard;return(0,a.useEffect)((function(){i.isReady&&(n.isAuthenticated&&"true"!==d?i.push("/dashboard"):u(!0))}),[i.isReady]),c?(0,t.jsx)(t.Fragment,{children:r}):null};c.propTypes={children:o().node}},89731:function(e,r,n){"use strict";n.d(r,{a:function(){return s}});var t=n(67294),a=n(37411),s=function(){return(0,t.useContext)(a.Vo)}},46723:function(e,r,n){"use strict";n.d(r,{s:function(){return a}});var t=n(67294),a=function(){var e=(0,t.useRef)(!1);return(0,t.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,t.useCallback)((function(){return e.current}),[])}},28537:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return z}});var t=n(85893),a=n(67294),s=n(9008),i=n(41664),o=n(11163),l=n(87357),c=n(27948),u=n(66242),d=n(15861),h=n(67720),m=n(50122),f=n(33149),x=(n(88986),n(28520)),p=n.n(x),v=n(74231),b=n(82580),y=n(50135),j=n(69368),g=n(56815),w=n(11057),Z=n(89731),O=n(46723);function S(e,r,n,t,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}function C(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var k=function(e){var r,n=(0,O.s)(),a=(0,o.useRouter)(),s=(0,Z.a)().register,i=(0,b.TA)({initialValues:{email:"",password:"",policy:!0,submit:null},validationSchema:v.Ry({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),password:v.Z_().min(7).max(255).required("Password is required"),policy:v.O7().oneOf([!0],"This field must be checked")}),onSubmit:(r=p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(r.email,r.password);case 3:n()&&a.push("/authentication/verify-code"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),n()&&(t.setStatus({success:!1}),t.setErrors({submit:e.t0.message}),t.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var s=r.apply(e,n);function i(e){S(s,t,a,i,o,"next",e)}function o(e){S(s,t,a,i,o,"throw",e)}i(void 0)}))})});return(0,t.jsxs)("form",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){C(e,r,n[r])}))}return e}({noValidate:!0,onSubmit:i.handleSubmit},e,{children:[(0,t.jsx)(y.Z,{error:Boolean(i.touched.email&&i.errors.email),fullWidth:!0,helperText:i.touched.email&&i.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:i.handleBlur,onChange:i.handleChange,type:"email",value:i.values.email}),(0,t.jsx)(y.Z,{error:Boolean(i.touched.password&&i.errors.password),fullWidth:!0,helperText:i.touched.password&&i.errors.password,label:"Password",margin:"normal",name:"password",onBlur:i.handleBlur,onChange:i.handleChange,type:"password",value:i.values.password}),(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,t.jsx)(j.Z,{checked:i.values.policy,name:"policy",onChange:i.handleChange}),(0,t.jsxs)(d.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,t.jsx)(m.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(i.touched.policy&&i.errors.policy)&&(0,t.jsx)(g.Z,{error:!0,children:i.errors.policy}),i.errors.submit&&(0,t.jsx)(l.Z,{sx:{mt:3},children:(0,t.jsx)(g.Z,{error:!0,children:i.errors.submit})}),(0,t.jsx)(l.Z,{sx:{mt:2},children:(0,t.jsx)(w.Z,{disabled:i.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))};function P(e,r,n,t,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}function B(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var E=function(e){var r,n=(0,O.s)(),s=(0,o.useRouter)(),i=(0,Z.a)().loginWithPopup,c=(0,a.useState)(null),u=c[0],d=c[1],h=(r=p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:n()&&(r=s.query.returnUrl||"/dashboard",s.push(r)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),n()&&d(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var s=r.apply(e,n);function i(e){P(s,t,a,i,o,"next",e)}function o(e){P(s,t,a,i,o,"throw",e)}i(void 0)}))});return(0,t.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){B(e,r,n[r])}))}return e}({},e,{children:[u&&(0,t.jsx)(l.Z,{sx:{my:3},children:(0,t.jsx)(g.Z,{error:!0,children:u})}),(0,t.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(w.Z,{onClick:h,variant:"contained",children:"Register"})})]}))};function T(e,r,n,t,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}function W(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function i(e){T(s,t,a,i,o,"next",e)}function o(e){T(s,t,a,i,o,"throw",e)}i(void 0)}))}}function R(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var _=function(e){var r=(0,O.s)(),n=(0,o.useRouter)(),a=(0,Z.a)(),s=a.createUserWithEmailAndPassword,i=a.signInWithGoogle,c=(0,b.TA)({initialValues:{email:"",password:"",policy:!0,submit:null},validationSchema:v.Ry({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),password:v.Z_().min(7).max(255).required("Password is required"),policy:v.O7().oneOf([!0],"This field must be checked")}),onSubmit:W(p().mark((function e(t,a){var i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t.email,t.password);case 3:r()&&(i=n.query.returnUrl||"/dashboard",n.push(i)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),r()&&(a.setStatus({success:!1}),a.setErrors({submit:e.t0.message}),a.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))}),u=W(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return(0,t.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){R(e,r,n[r])}))}return e}({},e,{children:[(0,t.jsxs)(w.Z,{fullWidth:!0,onClick:u,size:"large",sx:{backgroundColor:"common.white",color:"common.black","&:hover":{backgroundColor:"common.white",color:"common.black"}},variant:"contained",children:[(0,t.jsx)(l.Z,{alt:"Google",component:"img",src:"/static/icons/google.svg",sx:{mr:1}}),"Google"]}),(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",mt:2},children:[(0,t.jsx)(l.Z,{sx:{flexGrow:1},children:(0,t.jsx)(h.Z,{orientation:"horizontal"})}),(0,t.jsx)(d.Z,{color:"textSecondary",sx:{m:2},variant:"body1",children:"OR"}),(0,t.jsx)(l.Z,{sx:{flexGrow:1},children:(0,t.jsx)(h.Z,{orientation:"horizontal"})})]}),(0,t.jsxs)("form",{noValidate:!0,onSubmit:c.handleSubmit,children:[(0,t.jsx)(y.Z,{error:Boolean(c.touched.email&&c.errors.email),fullWidth:!0,helperText:c.touched.email&&c.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:c.handleBlur,onChange:c.handleChange,type:"email",value:c.values.email}),(0,t.jsx)(y.Z,{error:Boolean(c.touched.password&&c.errors.password),fullWidth:!0,helperText:c.touched.password&&c.errors.password,label:"Password",margin:"normal",name:"password",onBlur:c.handleBlur,onChange:c.handleChange,type:"password",value:c.values.password}),(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,t.jsx)(j.Z,{checked:c.values.policy,name:"policy",onChange:c.handleChange}),(0,t.jsxs)(d.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,t.jsx)(m.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(c.touched.policy&&c.errors.policy)&&(0,t.jsx)(g.Z,{error:!0,children:c.errors.policy}),c.errors.submit&&(0,t.jsx)(l.Z,{sx:{mt:3},children:(0,t.jsx)(g.Z,{error:!0,children:c.errors.submit})}),(0,t.jsx)(l.Z,{sx:{mt:2},children:(0,t.jsx)(w.Z,{disabled:c.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]})]}))};function q(e,r,n,t,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}function A(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var I=function(e){var r,n=(0,O.s)(),a=(0,o.useRouter)(),s=(0,Z.a)().register,i=(0,b.TA)({initialValues:{email:"",name:"",password:"",policy:!1,submit:null},validationSchema:v.Ry({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),name:v.Z_().max(255).required("Name is required"),password:v.Z_().min(7).max(255).required("Password is required"),policy:v.O7().oneOf([!0],"This field must be checked")}),onSubmit:(r=p().mark((function e(r,t){var i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(r.email,r.name,r.password);case 3:n()&&(i=a.query.returnUrl||"/dashboard",a.push(i)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),n()&&(t.setStatus({success:!1}),t.setErrors({submit:e.t0.message}),t.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var e=this,n=arguments;return new Promise((function(t,a){var s=r.apply(e,n);function i(e){q(s,t,a,i,o,"next",e)}function o(e){q(s,t,a,i,o,"throw",e)}i(void 0)}))})});return(0,t.jsxs)("form",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){A(e,r,n[r])}))}return e}({noValidate:!0,onSubmit:i.handleSubmit},e,{children:[(0,t.jsx)(y.Z,{error:Boolean(i.touched.name&&i.errors.name),fullWidth:!0,helperText:i.touched.name&&i.errors.name,label:"Name",margin:"normal",name:"name",onBlur:i.handleBlur,onChange:i.handleChange,value:i.values.name}),(0,t.jsx)(y.Z,{error:Boolean(i.touched.email&&i.errors.email),fullWidth:!0,helperText:i.touched.email&&i.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:i.handleBlur,onChange:i.handleChange,type:"email",value:i.values.email}),(0,t.jsx)(y.Z,{error:Boolean(i.touched.password&&i.errors.password),fullWidth:!0,helperText:i.touched.password&&i.errors.password,label:"Password",margin:"normal",name:"password",onBlur:i.handleBlur,onChange:i.handleChange,type:"password",value:i.values.password}),(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,t.jsx)(j.Z,{checked:i.values.policy,name:"policy",onChange:i.handleChange}),(0,t.jsxs)(d.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,t.jsx)(m.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(i.touched.policy&&i.errors.policy)&&(0,t.jsx)(g.Z,{error:!0,children:i.errors.policy}),i.errors.submit&&(0,t.jsx)(l.Z,{sx:{mt:3},children:(0,t.jsx)(g.Z,{error:!0,children:i.errors.submit})}),(0,t.jsx)(l.Z,{sx:{mt:2},children:(0,t.jsx)(w.Z,{disabled:i.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]}))},G=n(36788),N=n(38682),V=function(){var e=(0,o.useRouter)(),r=(0,Z.a)().platform,n=e.query.disableGuard;return(0,a.useEffect)((function(){N.w.push({event:"page_view"})}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{children:(0,t.jsx)("title",{children:"Register | Material Kit Pro"})}),(0,t.jsx)(l.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:(0,t.jsx)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:(0,t.jsxs)(u.Z,{elevation:16,sx:{p:4},children:[(0,t.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,t.jsx)(i.default,{href:"/",passHref:!0,children:(0,t.jsx)("a",{children:(0,t.jsx)(G.T,{sx:{height:40,width:40}})})}),(0,t.jsx)(d.Z,{variant:"h4",children:"Register"}),(0,t.jsx)(d.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Register on the internal platform"})]}),(0,t.jsxs)(l.Z,{sx:{flexGrow:1,mt:3},children:["Amplify"===r&&(0,t.jsx)(k,{}),"Auth0"===r&&(0,t.jsx)(E,{}),"Firebase"===r&&(0,t.jsx)(_,{}),"JWT"===r&&(0,t.jsx)(I,{})]}),(0,t.jsx)(h.Z,{sx:{my:3}}),(0,t.jsx)(i.default,{href:n?"/authentication/login?disableGuard=".concat(n):"/authentication/login",passHref:!0,children:(0,t.jsx)(m.Z,{color:"textSecondary",variant:"body2",children:"Having an account"})})]})})})]})};V.getLayout=function(e){return(0,t.jsx)(f.A,{children:e})};var z=V}},function(e){e.O(0,[2180,5464,135,939,551,2192,4432,9774,2888,179],(function(){return r=33758,e(e.s=r);var r}));var r=e.O();_N_E=r}]);