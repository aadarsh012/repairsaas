(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8573],{27948:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63366),a=n(87462),i=n(67294),o=(n(45697),n(86010)),s=n(77463),u=n(33616),c=n(11496),l=n(21420);function d(e){return(0,l.Z)("MuiContainer",e)}(0,n(11271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=n(98216),h=n(85893);const p=["className","component","disableGutters","fixed","maxWidth"],m=(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,f.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var v=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiContainer"}),{className:i,component:c="div",disableGutters:l=!1,fixed:v=!1,maxWidth:x="lg"}=n,b=(0,r.Z)(n,p),y=(0,a.Z)({},n,{component:c,disableGutters:l,fixed:v,maxWidth:x}),g=(e=>{const{classes:t,fixed:n,disableGutters:r,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,f.Z)(String(a))}`,n&&"fixed",r&&"disableGutters"]};return(0,s.Z)(i,d,t)})(y);return(0,h.jsx)(m,(0,a.Z)({as:c,ownerState:y,className:(0,o.Z)(g.root,i),ref:t},b))}))},98396:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(34168),i=n(20539),o=n(58974);function s(e,t={}){const n=(0,a.Z)(),s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:u=!1,matchMedia:c=(s?window.matchMedia:null),noSsr:l=!1,ssrMatchMedia:d=null}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let f="function"===typeof e?e(n):e;f=f.replace(/^@media( ?)/m,"");const[h,p]=r.useState((()=>l&&s?c(f).matches:d?d(f).matches:u));return(0,o.Z)((()=>{let e=!0;if(!s)return;const t=c(f),n=()=>{e&&p(t.matches)};return n(),t.addListener(n),()=>{e=!1,t.removeListener(n)}}),[f,c,s]),h}},58974:function(e,t,n){"use strict";var r=n(16600);t.Z=r.Z},77782:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return n(16251)}])},48418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,i=(a=n(67294))&&a.__esModule?a:{default:a},o=n(76273),s=n(90387),u=n(57190);var c={};function l(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=i.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):i||n}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,b=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var y=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,g=r(u.useIntersection({rootMargin:"200px"}),2),w=g[0],Z=g[1],k=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=Z&&n&&o.isLocalURL(f),t="undefined"!==typeof b?b:a&&a.locale,r=c[f+"%"+h+(t?"%"+t:"")];e&&!r&&l(a,f,h,{locale:t})}),[h,f,Z,b,n,a]);var M={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}))}(e,a,f,h,m,v,x,b)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var W="undefined"!==typeof b?b:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(h,W,a&&a.locales,a&&a.domainLocales);M.href=E||o.addBasePath(o.addLocale(h,W,a&&a.defaultLocale))}return i.default.cloneElement(t,M)};t.default=d},57190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,u=a.useRef(),c=r(a.useState(!1),2),l=c[0],d=c[1],f=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!o&&!l){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[f,l]};var a=n(67294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},16251:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(67294),i=n(41664),o=n(9008),s=n(98396),u=n(87357),c=n(27948),l=n(15861),d=n(11057),f=n(2734),h=n(38682);t.default=function(){var e=(0,f.Z)(),t=(0,s.Z)(e.breakpoints.down("sm"));return(0,a.useEffect)((function(){h.w.push({event:"page_view"})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Error: Server Error | Material Kit Pro"})}),(0,r.jsx)(u.Z,{component:"main",sx:{alignItems:"center",backgroundColor:"background.paper",display:"flex",flexGrow:1,py:"80px"},children:(0,r.jsxs)(c.Z,{maxWidth:"lg",children:[(0,r.jsx)(l.Z,{align:"center",variant:t?"h4":"h1",children:"500: Internal Server Error"}),(0,r.jsx)(l.Z,{align:"center",color:"textSecondary",sx:{mt:.5},variant:"subtitle2",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation."}),(0,r.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,r.jsx)(u.Z,{alt:"Under development",component:"img",src:"/static/error/error500_".concat(e.palette.mode,".svg"),sx:{height:"auto",maxWidth:"100%",width:400}})}),(0,r.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,r.jsx)(i.default,{href:"/dashboard",passHref:!0,children:(0,r.jsx)(d.Z,{component:"a",variant:"outlined",children:"Back to Dashboard"})})})]})})]})}},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[9774,2888,179],(function(){return t=77782,e(e.s=t);var t}));var t=e.O();_N_E=t}]);