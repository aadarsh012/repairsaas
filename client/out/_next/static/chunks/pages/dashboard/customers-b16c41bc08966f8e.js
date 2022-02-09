(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1525],{66242:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),a=r(63366),i=r(67294),o=(r(45697),r(86010)),s=r(77463),c=r(11496),u=r(33616),l=r(55113),d=r(21420);function p(e){return(0,d.Z)("MuiCard",e)}(0,r(11271).Z)("MuiCard",["root"]);var m=r(85893);const f=["className","raised"],h=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var v=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=r,l=(0,a.Z)(r,f),d=(0,n.Z)({},r,{raised:c}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(d);return(0,m.jsx)(h,(0,n.Z)({className:(0,o.Z)(v.root,i),elevation:c?8:void 0,ref:t,ownerState:d},l))}))},69368:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(63366),a=r(87462),i=r(67294),o=(r(45697),r(77463)),s=r(41796),c=r(21964),u=r(82066),l=r(85893),d=(0,u.Z)((0,l.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,u.Z)((0,l.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,u.Z)((0,l.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=r(98216),h=r(33616),v=r(11496),g=r(21420);function x(e){return(0,g.Z)("MuiCheckbox",e)}var b=(0,r(11271).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const Z=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,f.Z)(r.color)}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:e.palette[t.color].main},[`&.${b.disabled}`]:{color:e.palette.action.disabled}}))),j=(0,l.jsx)(p,{}),w=(0,l.jsx)(d,{}),P=(0,l.jsx)(m,{});var k=i.forwardRef((function(e,t){var r,s;const c=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:u=j,color:d="primary",icon:p=w,indeterminate:m=!1,indeterminateIcon:v=P,inputProps:g,size:b="medium"}=c,k=(0,n.Z)(c,Z),S=m?v:p,A=m?v:u,C=(0,a.Z)({},c,{color:d,indeterminate:m,size:b}),O=(e=>{const{classes:t,indeterminate:r,color:n}=e,i={root:["root",r&&"indeterminate",`color${(0,f.Z)(n)}`]},s=(0,o.Z)(i,x,t);return(0,a.Z)({},t,s)})(C);return(0,l.jsx)(y,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":m},g),icon:i.cloneElement(S,{fontSize:null!=(r=S.props.fontSize)?r:b}),checkedIcon:i.cloneElement(A,{fontSize:null!=(s=A.props.fontSize)?s:b}),ownerState:C,ref:t},k,{classes:O}))}))},27948:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(63366),a=r(87462),i=r(67294),o=(r(45697),r(86010)),s=r(77463),c=r(33616),u=r(11496),l=r(21420);function d(e){return(0,l.Z)("MuiContainer",e)}(0,r(11271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=r(98216),m=r(85893);const f=["className","component","disableGutters","fixed","maxWidth"],h=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,p.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var v=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiContainer"}),{className:i,component:u="div",disableGutters:l=!1,fixed:v=!1,maxWidth:g="lg"}=r,x=(0,n.Z)(r,f),b=(0,a.Z)({},r,{component:u,disableGutters:l,fixed:v,maxWidth:g}),Z=(e=>{const{classes:t,fixed:r,disableGutters:n,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,p.Z)(String(a))}`,r&&"fixed",n&&"disableGutters"]};return(0,s.Z)(i,d,t)})(b);return(0,m.jsx)(h,(0,a.Z)({as:u,ownerState:b,className:(0,o.Z)(Z.root,i),ref:t},x))}))},33511:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(83946),a=r(61973),i=r(13882);function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(t);return(0,a.Z)(e,-r)}},23245:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers",function(){return r(58061)}])},45352:function(e,t,r){"use strict";r.d(t,{n:function(){return u}});var n=r(7069),a=r(88330),i=r(1784),o=r(33511);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=new Date,u=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,u;return t=e,(r=[{key:"getCustomers",value:function(){var e=[{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalAmountSpent:300,totalOrders:3,updatedAt:(0,n.Z)((0,a.Z)(c,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/static/mock-images/avatars/avatar-fran_perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalAmountSpent:0,totalOrders:0,updatedAt:(0,n.Z)((0,a.Z)(c,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@devias.io",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalAmountSpent:5600,totalOrders:6,updatedAt:(0,n.Z)((0,a.Z)(c,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/static/mock-images/avatars/avatar-anika_visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalAmountSpent:500,totalOrders:1,updatedAt:(0,n.Z)((0,a.Z)(c,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalAmountSpent:0,totalOrders:0,state:"California",updatedAt:(0,n.Z)((0,a.Z)(c,7),3).getTime()},{id:"5e887a1fbefd7938eea9c981",avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",city:"Berkeley",country:"USA",currency:"$",email:"penjani.inyene@devias.io",hasAcceptedMarketing:!1,isProspect:!0,isReturning:!1,name:"Penjani Inyene",state:"California",totalAmountSpent:0,totalOrders:0,updatedAt:(0,n.Z)((0,a.Z)(c,5),4).getTime()},{id:"5e887d0b3d090c1b8f162003",avatar:"/static/mock-images/avatars/avatar-omar_darboe.png",currency:"$",email:"omar.darobe@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!1,city:"Carson City",country:"USA",name:"Omar Darobe",state:"Nevada",totalAmountSpent:100,totalOrders:4,updatedAt:(0,n.Z)((0,a.Z)(c,15),4).getTime()},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/static/mock-images/avatars/avatar-siegbert_gottfried.png",city:"Los Angeles",country:"USA",currency:"$",email:"siegbert.gottfried@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Siegbert Gottfried",state:"California",totalAmountSpent:1e3,totalOrders:2,updatedAt:(0,n.Z)((0,a.Z)(c,2),5).getTime()},{id:"5e8877da9a65442b11551975",avatar:"/static/mock-images/avatars/avatar-iulia_albu.png",city:"Murray",country:"USA",email:"iulia.albu@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Iulia Albu",state:"Utah",totalAmountSpent:0,totalOrders:0,updatedAt:(0,n.Z)((0,a.Z)(c,8),6).getTime()},{id:"5e8680e60cba5019c5ca6fda",avatar:"/static/mock-images/avatars/avatar-nasimiyu_danai.png",city:"Salt Lake City",country:"USA",currency:"$",email:"nasimiyu.danai@devias.io",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!0,name:"Nasimiyu Danai",state:"Utah",totalAmountSpent:200,totalOrders:7,updatedAt:(0,n.Z)((0,a.Z)(c,1),9).getTime()}];return Promise.resolve(e)}},{key:"getCustomer",value:function(){return Promise.resolve({id:"5e86805e2bafd54f66cc95c3",address1:"Street John Wick, no. 7",address2:"House #25",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",balance:0,city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@devias.io",hasDiscount:!1,isVerified:!0,name:"Miron Vitold",phone:"+55 748 327 439",state:"New York",vatRate:19,zipCode:"240355"})}},{key:"getCustomerEmails",value:function(){var e=[{id:"5ece2ce3613486d95ffaea58",createdAt:(0,n.Z)((0,a.Z)((0,i.Z)(c,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,n.Z)((0,a.Z)((0,i.Z)(c,49),11),4).getTime(),description:"Order confirmation"}];return Promise.resolve(e)}},{key:"getCustomerInvoices",value:function(){var e=[{id:"528651571NT",issueDate:c.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:c.getTime(),status:"unpaid",amount:1451.75}];return Promise.resolve(e)}},{key:"getCustomerLogs",value:function(){var e=[{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,n.Z)((0,i.Z)((0,o.Z)(c,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/authentication/login",status:200}];return Promise.resolve(e)}}])&&s(t.prototype,r),u&&s(t,u),e}())},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(67294),a=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,n.useCallback)((function(){return e.current}),[])}},18785:function(e,t,r){"use strict";r.d(t,{o:function(){return a}});var n=r(85893),a=(0,r(82066).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight")},84747:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var n=r(85893),a=(0,r(82066).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},61616:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(85893),a=(0,r(82066).Z)((0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,n.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt")},21392:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n=r(85893),a=(0,r(82066).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(85893),a=(0,r(82066).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},58061:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return oe}});var n=r(28520),a=r.n(n),i=r(85893),o=r(67294),s=r(9008),c=r(87357),u=r(27948),l=r(86886),d=r(15861),p=r(11057),m=r(66242),f=r(37023),h=r(40044),v=r(67720),g=r(50135),x=r(87109),b=r(45352),Z=r(98875),y=r(64527),j=r(41664),w=r(92077),P=r.n(w),k=r(45697),S=r.n(k),A=r(69368),C=r(7906),O=r(53184),R=r(68509),M=r(53252),T=r(295),z=r(87952),E=r(50122),W=r(93946),_=r(70519),L=r(18785),$=r(61616),I=r(75955),G=r(34547);function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function U(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var V=function(e){var t=e.customers,r=e.customersCount,n=e.onPageChange,a=e.onRowsPerPageChange,s=e.page,u=e.rowsPerPage,l=D(e,["customers","customersCount","onPageChange","onRowsPerPageChange","page","rowsPerPage"]),m=(0,o.useState)([]),f=m[0],h=m[1];(0,o.useEffect)((function(){f.length&&h([])}),[t]);var v=function(e){h(e.target.checked?t.map((function(e){return e.id})):[])},g=f.length>0,x=f.length>0&&f.length<t.length,b=f.length===t.length;return(0,i.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}({},l,{children:[(0,i.jsxs)(c.Z,{sx:{backgroundColor:"neutral.100",display:!g&&"none",px:2,py:.5},children:[(0,i.jsx)(A.Z,{checked:b,indeterminate:x,onChange:v}),(0,i.jsx)(p.Z,{size:"small",sx:{ml:2},children:"Delete"}),(0,i.jsx)(p.Z,{size:"small",sx:{ml:2},children:"Edit"})]}),(0,i.jsx)(G.L,{children:(0,i.jsxs)(C.Z,{sx:{minWidth:700},children:[(0,i.jsx)(O.Z,{sx:{visibility:g?"collapse":"visible"},children:(0,i.jsxs)(R.Z,{children:[(0,i.jsx)(M.Z,{padding:"checkbox",children:(0,i.jsx)(A.Z,{checked:b,indeterminate:x,onChange:v})}),(0,i.jsx)(M.Z,{children:"Name"}),(0,i.jsx)(M.Z,{children:"Location"}),(0,i.jsx)(M.Z,{children:"Orders"}),(0,i.jsx)(M.Z,{children:"Spent"}),(0,i.jsx)(M.Z,{align:"right",children:"Actions"})]})}),(0,i.jsx)(T.Z,{children:t.map((function(e){var t=f.includes(e.id);return(0,i.jsxs)(R.Z,{hover:!0,selected:t,children:[(0,i.jsx)(M.Z,{padding:"checkbox",children:(0,i.jsx)(A.Z,{checked:t,onChange:function(t){return r=e.id,void(f.includes(r)?h((function(e){return e.filter((function(e){return e!==r}))})):h((function(e){return U(e).concat([r])})));var r},value:t})}),(0,i.jsx)(M.Z,{children:(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(z.Z,{src:e.avatar,sx:{height:42,width:42},children:(0,I.Q)(e.name)}),(0,i.jsxs)(c.Z,{sx:{ml:1},children:[(0,i.jsx)(j.default,{href:"/dashboard/customers/1",passHref:!0,children:(0,i.jsx)(E.Z,{color:"inherit",variant:"subtitle2",children:e.name})}),(0,i.jsx)(d.Z,{color:"textSecondary",variant:"body2",children:e.email})]})]})}),(0,i.jsx)(M.Z,{children:"".concat(e.city,", ").concat(e.state,", ").concat(e.country)}),(0,i.jsx)(M.Z,{children:e.totalOrders}),(0,i.jsx)(M.Z,{children:(0,i.jsx)(d.Z,{color:"success.main",variant:"subtitle2",children:P()(e.totalAmountSpent).format("".concat(e.currency,"0,0.00"))})}),(0,i.jsxs)(M.Z,{align:"right",children:[(0,i.jsx)(j.default,{href:"/dashboard/customers/1/edit",passHref:!0,children:(0,i.jsx)(W.Z,{component:"a",children:(0,i.jsx)($.f,{fontSize:"small"})})}),(0,i.jsx)(j.default,{href:"/dashboard/customers/1",passHref:!0,children:(0,i.jsx)(W.Z,{component:"a",children:(0,i.jsx)(L.o,{fontSize:"small"})})})]})]},e.id)}))})]})}),(0,i.jsx)(_.Z,{component:"div",count:r,onPageChange:n,onRowsPerPageChange:a,page:s,rowsPerPage:u,rowsPerPageOptions:[5,10,25]})]}))};V.propTypes={customers:S().array.isRequired,customersCount:S().number.isRequired,onPageChange:S().func,onRowsPerPageChange:S().func,page:S().number.isRequired,rowsPerPage:S().number.isRequired};var H=r(46723),B=r(84747),q=r(21392),F=r(97169),X=r(2248),J=r(38682);function Q(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,a)}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Y(e,t,r[t])}))}return e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var te=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"}],re=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"orders|desc"},{label:"Total orders (lowest)",value:"orders|asc"}],ne=function(e,t,r){return t[r]<e[r]?-1:t[r]>e[r]?1:0},ae=function(e,t){var r=ee(t.split("|"),2),n=r[0],a=function(e,t){return"desc"===e?function(e,r){return ne(e,r,t)}:function(e,r){return-ne(e,r,t)}}(r[1],n),i=e.map((function(e,t){return[e,t]}));return i.sort((function(e,t){var r=a(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),i.map((function(e){return e[0]}))},ie=function(){var e=(0,H.s)(),t=(0,o.useRef)(null),r=(0,o.useState)([]),n=r[0],Z=r[1],y=(0,o.useState)("all"),j=y[0],w=y[1],P=(0,o.useState)(0),k=P[0],S=P[1],A=(0,o.useState)(10),C=A[0],O=A[1],R=(0,o.useState)(re[0].value),M=R[0],T=R[1],z=(0,o.useState)({query:"",hasAcceptedMarketing:null,isProspect:null,isReturning:null}),E=z[0],W=z[1];(0,o.useEffect)((function(){J.w.push({event:"page_view"})}),[]);var _,L=(0,o.useCallback)((_=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.n.getCustomers();case 3:r=t.sent,e()&&Z(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(r,n){var a=_.apply(e,t);function i(e){Q(a,r,n,i,o,"next",e)}function o(e){Q(a,r,n,i,o,"throw",e)}i(void 0)}))}),[e]);(0,o.useEffect)((function(){L()}),[]);var $=function(e,t){return e.filter((function(e){if(t.query){var r=!1;if(["email","name"].forEach((function(n){e[n].toLowerCase().includes(t.query.toLowerCase())&&(r=!0)})),!r)return!1}return!(t.hasAcceptedMarketing&&!e.hasAcceptedMarketing)&&!(t.isProspect&&!e.isProspect)&&!(t.isReturning&&!e.isReturning)}))}(n,E),I=function(e,t,r){return e.slice(t*r,t*r+r)}(ae($,M),k,C);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{children:(0,i.jsx)("title",{children:"Dashboard: Customer List | Material Kit Pro"})}),(0,i.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsxs)(u.Z,{maxWidth:"xl",children:[(0,i.jsxs)(c.Z,{sx:{mb:4},children:[(0,i.jsxs)(l.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,i.jsx)(l.ZP,{item:!0,children:(0,i.jsx)(d.Z,{variant:"h4",children:"Customers"})}),(0,i.jsx)(l.ZP,{item:!0,children:(0,i.jsx)(p.Z,{startIcon:(0,i.jsx)(q.v,{fontSize:"small"}),variant:"contained",children:"Add"})})]}),(0,i.jsxs)(c.Z,{sx:{m:-1,mt:3},children:[(0,i.jsx)(p.Z,{startIcon:(0,i.jsx)(X.g,{fontSize:"small"}),sx:{m:1},children:"Import"}),(0,i.jsx)(p.Z,{startIcon:(0,i.jsx)(B.U,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(f.Z,{indicatorColor:"primary",onChange:function(e,t){var r=K({},E,{hasAcceptedMarketing:null,isProspect:null,isReturning:null});"all"!==t&&(r[t]=!0),W(r),w(t)},scrollButtons:"auto",sx:{px:3},textColor:"primary",value:j,variant:"scrollable",children:te.map((function(e){return(0,i.jsx)(h.Z,{label:e.label,value:e.value},e.value)}))}),(0,i.jsx)(v.Z,{}),(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1.5,p:3},children:[(0,i.jsx)(c.Z,{component:"form",onSubmit:function(e){e.preventDefault(),W((function(e){var r;return K({},e,{query:null===(r=t.current)||void 0===r?void 0:r.value})}))},sx:{flexGrow:1,m:1.5},children:(0,i.jsx)(g.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:t},InputProps:{startAdornment:(0,i.jsx)(x.Z,{position:"start",children:(0,i.jsx)(F.o,{fontSize:"small"})})},placeholder:"Search customers"})}),(0,i.jsx)(g.Z,{label:"Sort By",name:"sort",onChange:function(e){T(e.target.value)},select:!0,SelectProps:{native:!0},sx:{m:1.5},value:M,children:re.map((function(e){return(0,i.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),(0,i.jsx)(V,{customers:I,customersCount:$.length,onPageChange:function(e,t){S(t)},onRowsPerPageChange:function(e){O(parseInt(e.target.value,10))},rowsPerPage:C,page:k})]})]})})]})};ie.getLayout=function(e){return(0,i.jsx)(Z.a,{children:(0,i.jsx)(y.c,{children:e})})};var oe=ie},75955:function(e,t,r){"use strict";r.d(t,{Q:function(){return n}});var n=function(e){return(void 0===e?"":e).replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}}},function(e){e.O(0,[2180,5464,9519,135,7637,8005,8619,8055,2177,3133,285,5719,8848,9774,2888,179],(function(){return t=23245,e(e.s=t);var t}));var t=e.O();_N_E=t}]);