(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6535],{27948:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var i=r(63366),n=r(87462),o=r(67294),a=(r(45697),r(86010)),s=r(77463),c=r(33616),d=r(11496),l=r(21420);function u(e){return(0,l.Z)("MuiContainer",e)}(0,r(11271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=r(98216),m=r(85893);const h=["className","component","disableGutters","fixed","maxWidth"],x=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,p.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiContainer"}),{className:o,component:d="div",disableGutters:l=!1,fixed:g=!1,maxWidth:f="lg"}=r,b=(0,i.Z)(r,h),w=(0,n.Z)({},r,{component:d,disableGutters:l,fixed:g,maxWidth:f}),v=(e=>{const{classes:t,fixed:r,disableGutters:i,maxWidth:n}=e,o={root:["root",n&&`maxWidth${(0,p.Z)(String(n))}`,r&&"fixed",i&&"disableGutters"]};return(0,s.Z)(o,u,t)})(w);return(0,m.jsx)(x,(0,n.Z)({as:d,ownerState:w,className:(0,a.Z)(v.root,o),ref:t},b))}))},86886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return Z}});var i=r(63366),n=r(87462),o=r(67294),a=(r(45697),r(86010)),s=r(95408),c=r(39707),d=r(77463),l=r(11496),u=r(33616);var p=o.createContext(),m=r(21420);function h(e){return(0,m.Z)("MuiGrid",e)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=(0,r(11271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...x.map((e=>`grid-xs-${e}`)),...x.map((e=>`grid-sm-${e}`)),...x.map((e=>`grid-md-${e}`)),...x.map((e=>`grid-lg-${e}`)),...x.map((e=>`grid-xl-${e}`))]),f=r(85893);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const v=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:r,direction:i,item:n,lg:o,md:a,sm:s,spacing:c,wrap:d,xl:l,xs:u,zeroMinWidth:p}=e.ownerState;return[t.root,r&&t.container,n&&t.item,p&&t.zeroMinWidth,r&&0!==c&&t[`spacing-xs-${String(c)}`],"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==d&&t[`wrap-xs-${String(d)}`],!1!==u&&t[`grid-xs-${String(u)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==l&&t[`grid-xl-${String(l)}`]]}})((({ownerState:e})=>(0,n.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:t}){return(0,s.k9)({theme:e},t.direction,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${g.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:r,rowSpacing:i}=t;let n={};return r&&0!==i&&(n=(0,s.k9)({theme:e},i,(t=>{const r=e.spacing(t);return"0px"!==r?{marginTop:`-${w(r)}`,[`& > .${g.item}`]:{paddingTop:w(r)}}:{}}))),n}),(function({theme:e,ownerState:t}){const{container:r,columnSpacing:i}=t;let n={};return r&&0!==i&&(n=(0,s.k9)({theme:e},i,(t=>{const r=e.spacing(t);return"0px"!==r?{width:`calc(100% + ${w(r)})`,marginLeft:`-${w(r)}`,[`& > .${g.item}`]:{paddingLeft:w(r)}}:{}}))),n}),(({theme:e,ownerState:t})=>e.breakpoints.keys.reduce(((r,i)=>(function(e,t,r,i){const o=i[r];if(!o)return;let a={};if(!0===o)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,s.P$)({values:i.columns,base:t.breakpoints.values}),c=Math.round(o/e[r]*1e8)/1e6+"%";let d={};if(i.container&&i.item&&0!==i.columnSpacing){const e=t.spacing(i.columnSpacing);if("0px"!==e){const t=`calc(${c} + ${w(e)})`;d={flexBasis:t,maxWidth:t}}}a=(0,n.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}0===t.breakpoints.values[r]?Object.assign(e,a):e[t.breakpoints.up(r)]=a}(r,e,i,t),r)),{})));var Z=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiGrid"}),s=(0,c.Z)(r),{className:l,columns:m,columnSpacing:x,component:g="div",container:w=!1,direction:Z="row",item:S=!1,lg:k=!1,md:y=!1,rowSpacing:j,sm:$=!1,spacing:W=0,wrap:P="wrap",xl:R=!1,xs:z=!1,zeroMinWidth:C=!1}=s,M=(0,i.Z)(s,b),O=j||W,B=x||W,N=o.useContext(p),F=m||N||12,G=(0,n.Z)({},s,{columns:F,container:w,direction:Z,item:S,lg:k,md:y,sm:$,rowSpacing:O,columnSpacing:B,wrap:P,xl:R,xs:z,zeroMinWidth:C}),I=(e=>{const{classes:t,container:r,direction:i,item:n,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:u,xs:p,zeroMinWidth:m}=e,x={root:["root",r&&"container",n&&"item",m&&"zeroMinWidth",r&&0!==c&&`spacing-xs-${String(c)}`,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,d.Z)(x,h,t)})(G);return _=(0,f.jsx)(v,(0,n.Z)({ownerState:G,className:(0,a.Z)(I.root,l),as:g,ref:t},M)),12!==F?(0,f.jsx)(p.Provider,{value:F,children:_}):_;var _}))},45843:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var i=r(63366),n=r(87462),o=r(67294),a=(r(45697),r(86010)),s=r(77463),c=r(41796),d=r(98216),l=r(21964),u=r(33616),p=r(11496),m=r(21420);function h(e){return(0,m.Z)("MuiSwitch",e)}var x=(0,r(11271).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=r(85893);const f=["className","color","edge","size","sx"],b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,d.Z)(r.edge)}`],t[`size${(0,d.Z)(r.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${x.thumb}`]:{width:16,height:16},[`& .${x.switchBase}`]:{padding:4,[`&.${x.checked}`]:{transform:"translateX(16px)"}}}))),w=(0,p.ZP)(l.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${x.input}`]:t.input},"default"!==r.color&&t[`color${(0,d.Z)(r.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${x.checked}`]:{transform:"translateX(20px)"},[`&.${x.disabled}`]:{color:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]},[`&.${x.checked} + .${x.track}`]:{opacity:.5},[`&.${x.disabled} + .${x.track}`]:{opacity:"light"===e.palette.mode?.12:.2},[`& .${x.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,n.Z)({"&:hover":{backgroundColor:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${x.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.disabled}`]:{color:"light"===e.palette.mode?(0,c.$n)(e.palette[t.color].main,.62):(0,c._j)(e.palette[t.color].main,.55)}},[`&.${x.checked} + .${x.track}`]:{backgroundColor:e.palette[t.color].main}}))),v=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.mode?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.mode?.38:.3}))),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})));var S=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:o,color:c="primary",edge:l=!1,size:p="medium",sx:m}=r,x=(0,i.Z)(r,f),S=(0,n.Z)({},r,{color:c,edge:l,size:p}),k=(e=>{const{classes:t,edge:r,size:i,color:o,checked:a,disabled:c}=e,l={root:["root",r&&`edge${(0,d.Z)(r)}`,`size${(0,d.Z)(i)}`],switchBase:["switchBase",`color${(0,d.Z)(o)}`,a&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(l,h,t);return(0,n.Z)({},t,u)})(S),y=(0,g.jsx)(Z,{className:k.thumb,ownerState:S});return(0,g.jsxs)(b,{className:(0,a.Z)(k.root,o),sx:m,ownerState:S,children:[(0,g.jsx)(w,(0,n.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:S},x,{classes:(0,n.Z)({},k,{root:k.switchBase})})),(0,g.jsx)(v,{className:k.track,ownerState:S})]})}))},21964:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var i=r(63366),n=r(87462),o=r(67294),a=(r(45697),r(86010)),s=r(77463),c=r(98216),d=r(11496),l=r(49299),u=r(74423),p=r(49990),m=r(21420);function h(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,r(11271).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=r(85893);const g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=(0,d.ZP)(p.Z,{skipSx:!0})((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),b=(0,d.ZP)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var w=o.forwardRef((function(e,t){const{autoFocus:r,checked:o,checkedIcon:d,className:p,defaultChecked:m,disabled:w,disableFocusRipple:v=!1,edge:Z=!1,icon:S,id:k,inputProps:y,inputRef:j,name:$,onBlur:W,onChange:P,onFocus:R,readOnly:z,required:C,tabIndex:M,type:O,value:B}=e,N=(0,i.Z)(e,g),[F,G]=(0,l.Z)({controlled:o,default:Boolean(m),name:"SwitchBase",state:"checked"}),I=(0,u.Z)();let _=w;I&&"undefined"===typeof _&&(_=I.disabled);const T="checkbox"===O||"radio"===O,q=(0,n.Z)({},e,{checked:F,disabled:_,disableFocusRipple:v,edge:Z}),E=(e=>{const{classes:t,checked:r,disabled:i,edge:n}=e,o={root:["root",r&&"checked",i&&"disabled",n&&`edge${(0,c.Z)(n)}`],input:["input"]};return(0,s.Z)(o,h,t)})(q);return(0,x.jsxs)(f,(0,n.Z)({component:"span",className:(0,a.Z)(E.root,p),centerRipple:!0,focusRipple:!v,disabled:_,tabIndex:null,role:void 0,onFocus:e=>{R&&R(e),I&&I.onFocus&&I.onFocus(e)},onBlur:e=>{W&&W(e),I&&I.onBlur&&I.onBlur(e)},ownerState:q,ref:t},N,{children:[(0,x.jsx)(b,(0,n.Z)({autoFocus:r,checked:o,defaultChecked:m,className:E.input,disabled:_,id:T&&k,name:$,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;G(t),P&&P(e,t)},readOnly:z,ref:j,required:C,ownerState:q,tabIndex:M,type:O},"checkbox"===O&&void 0===B?{}:{value:B},y)),F?d:S]}))}))},70208:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/pricing",function(){return r(94132)}])},96296:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(85893),n=(0,r(82066).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check")},94132:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var i=r(85893),n=r(67294),o=r(9008),a=r(87357),s=r(27948),c=r(86886),d=r(15861),l=r(45843),u=r(46724),p=r(67720),m=r(2734),h=r(98875),x=r(64527),g=r(45697),f=r.n(g),b=r(11057),w=r(96296);function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){v(e,t,r[t])}))}return e}function S(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var k=function(e){var t=e.cta,r=e.currency,n=e.description,o=e.features,s=e.image,c=e.name,l=e.popular,u=e.price,m=e.sx,h=S(e,["cta","currency","description","features","image","name","popular","price","sx"]);return(0,i.jsxs)(a.Z,Z({sx:Z({display:"flex",flexDirection:"column"},m)},h,{children:[(0,i.jsxs)(a.Z,{sx:{p:3},children:[(0,i.jsx)(a.Z,{sx:{height:52,width:52,"& img":{height:"auto",width:"100%"}},children:(0,i.jsx)("img",{alt:"",src:s})}),(0,i.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,i.jsxs)(d.Z,{variant:"h4",children:[r,u]}),(0,i.jsx)(d.Z,{color:"textSecondary",sx:{alignSelf:"flex-end",ml:1},variant:"subtitle2",children:"/mo"})]}),(0,i.jsx)(d.Z,{sx:{mt:2},variant:"h6",children:c}),(0,i.jsx)(d.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:n})]}),(0,i.jsx)(p.Z,{}),(0,i.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1,p:3},children:[o.map((function(e){return(0,i.jsxs)(a.Z,{sx:{alignItems:"center",display:"flex","& + &":{mt:2}},children:[(0,i.jsx)(w.J,{fontSize:"small",sx:{color:"text.primary"}}),(0,i.jsx)(d.Z,{sx:{fontWeight:500,ml:2},variant:"body2",children:e})]},e)})),(0,i.jsx)(a.Z,{sx:{flexGrow:1}}),(0,i.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,i.jsx)(b.Z,{fullWidth:!0,variant:l?"contained":"outlined",children:t})})]})]}))};k.propTypes={cta:f().string.isRequired,currency:f().string.isRequired,description:f().string.isRequired,features:f().array.isRequired,image:f().string.isRequired,name:f().string.isRequired,popular:f().bool,price:f().string.isRequired,sx:f().object};var y=r(38682),j=function(){var e=(0,m.Z)();return(0,n.useEffect)((function(){y.w.push({event:"page_view"})}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"Pricing | Material Kit Pro"})}),(0,i.jsxs)(a.Z,{component:"main",sx:{backgroundColor:"background.paper",flexGrow:1,pb:6},children:[(0,i.jsx)(a.Z,{sx:{backgroundColor:"background.default",py:6},children:(0,i.jsx)(s.Z,{maxWidth:"lg",children:(0,i.jsxs)(c.ZP,{container:!0,alignItems:"center",spacing:2,flexWrap:"nowrap",children:[(0,i.jsxs)(c.ZP,{item:!0,md:7,xs:12,children:[(0,i.jsx)(d.Z,{variant:"h3",children:"Start today. Boost up your services!"}),(0,i.jsx)(d.Z,{color:"textSecondary",sx:{my:2},variant:"body1",children:"Join 3,000+ developers & designers using Devias to power modern web projects."}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(u.Z,{badgeContent:"25% OFF",sx:{"& .MuiBadge-badge":{backgroundColor:"primary.main",color:"primary.contrastText",right:-38,top:"25%"}},children:(0,i.jsx)(d.Z,{variant:"body1",children:"Yearly Payment"})})]}),(0,i.jsx)(c.ZP,{item:!0,md:5,sx:{display:{md:"block",xs:"none"}},children:(0,i.jsx)(a.Z,{sx:{height:420,maxWidth:419,position:"relative","& img":{height:"auto",position:"absolute",top:0,width:"100%"}},children:(0,i.jsx)("img",{alt:"Pricing hero",src:"/static/pricing/pricing_".concat(e.palette.mode,".svg")})})})]})})}),(0,i.jsx)(p.Z,{}),(0,i.jsx)(s.Z,{maxWidth:"lg",sx:{py:6},children:(0,i.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(k,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["Create contracts","Chat support","Email alerts"],image:"/static/pricing/plan1.svg",name:"Startup",price:"0",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(k,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Highlights reporting","Data history","Unlimited users"],image:"/static/pricing/plan2.svg",name:"Standard",popular:!0,price:"4.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(k,{cta:"Contact Us",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Unlimited contacts","Analytics platform","Public API access","Send and sign unlimited contracts"],image:"/static/pricing/plan3.svg",name:"Business",price:"29.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})})]})}),(0,i.jsx)(d.Z,{align:"center",color:"textSecondary",component:"p",variant:"caption",children:"30% of our income goes into Whale Charity"})]})]})};j.getLayout=function(e){return(0,i.jsx)(h.a,{children:(0,i.jsx)(x.c,{children:e})})};var $=j}},function(e){e.O(0,[2180,5464,9519,135,7637,8005,8619,8055,8848,9774,2888,179],(function(){return t=70208,e(e.s=t);var t}));var t=e.O();_N_E=t}]);