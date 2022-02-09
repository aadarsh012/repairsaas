(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4262,1703],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(87462),o=n(63366),i=n(67294),a=(n(45697),n(86010)),u=n(77463),l=n(11496),s=n(33616),c=n(21420);function f(e){return(0,c.Z)("MuiCardContent",e)}(0,n(11271).Z)("MuiCardContent",["root"]);var d=n(85893);const p=["className","component"],m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var v=i.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=n,c=(0,o.Z)(n,p),v=(0,r.Z)({},n,{component:l}),g=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},f,t)})(v);return(0,d.jsx)(m,(0,r.Z)({as:l,className:(0,a.Z)(g.root,i),ownerState:v,ref:t},c))}))},66242:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(87462),o=n(63366),i=n(67294),a=(n(45697),n(86010)),u=n(77463),l=n(11496),s=n(33616),c=n(55113),f=n(21420);function d(e){return(0,f.Z)("MuiCard",e)}(0,n(11271).Z)("MuiCard",["root"]);var p=n(85893);const m=["className","raised"],v=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=i.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=n,c=(0,o.Z)(n,m),f=(0,r.Z)({},n,{raised:l}),g=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},d,t)})(f);return(0,p.jsx)(v,(0,r.Z)({className:(0,a.Z)(g.root,i),elevation:l?8:void 0,ref:t,ownerState:f},c))}))},27948:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(63366),o=n(87462),i=n(67294),a=(n(45697),n(86010)),u=n(77463),l=n(33616),s=n(11496),c=n(21420);function f(e){return(0,c.Z)("MuiContainer",e)}(0,n(11271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var d=n(98216),p=n(85893);const m=["className","component","disableGutters","fixed","maxWidth"],v=(0,s.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,d.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var g=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiContainer"}),{className:i,component:s="div",disableGutters:c=!1,fixed:g=!1,maxWidth:y="lg"}=n,b=(0,r.Z)(n,m),h=(0,o.Z)({},n,{component:s,disableGutters:c,fixed:g,maxWidth:y}),w=(e=>{const{classes:t,fixed:n,disableGutters:r,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,d.Z)(String(o))}`,n&&"fixed",r&&"disableGutters"]};return(0,u.Z)(i,f,t)})(h);return(0,p.jsx)(v,(0,o.Z)({as:s,ownerState:h,className:(0,a.Z)(w.root,i),ref:t},b))}))},58363:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},90638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var a,l;var s=r=o({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};a(n(67294));var i=a(n(14302));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},14302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=n(67294))&&a.__esModule?a:{default:a},l=n(67161),s=n(16319);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,r=this._opts;if(n.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var o=this;this._delay=setTimeout((function(){o._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function v(e){return function(e,t){var n=function(){if(!o){var t=new m(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&"function"===typeof r.webpack&&!r.suspense){var a=r.webpack();f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=u.default.useContext(s.LoadableContext),a=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){g(c).then(e,t)}))},v.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return d=!0,e()};g(f,t).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var y=v;t.default=y},78183:function(){},5152:function(e,t,n){e.exports=n(90638)},32512:function(e,t,n){"use strict";n.d(t,{uI:function(){return re}});var r=n(67294),o=n(45697),i=n.n(o),a=n(70655),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function l(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var s=[".DS_Store","Thumbs.db"];function c(e){return(null!==e.target&&e.target.files?p(e.target.files):[]).map((function(e){return l(e)}))}function f(e,t){return(0,a.mG)(this,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(r){switch(r.label){case 0:return e.items?(n=p(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(m))]):[3,2];case 1:return[2,d(v(r.sent()))];case 2:return[2,d(p(e.files).map((function(e){return l(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function p(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function m(e){if("function"!==typeof e.webkitGetAsEntry)return g(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?b(t):g(e)}function v(e){return e.reduce((function(e,t){return(0,a.fl)(e,Array.isArray(t)?v(t):[t])}),[])}function g(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=l(t);return Promise.resolve(n)}function y(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return[2,e.isDirectory?b(e):h(e)]}))}))}function b(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return(0,a.mG)(i,void 0,void 0,(function(){var i,u,l;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return u=a.sent(),n(u),[3,4];case 4:return[3,6];case 5:l=Promise.all(t.map(y)),r.push(l),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function h(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=l(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var w=n(58363);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O="file-invalid-type",k="file-too-large",C="file-too-small",j="too-many-files",_=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:O,message:"File type must be ".concat(t)}},S=function(e){return{code:k,message:"File is larger than ".concat(e," bytes")}},P=function(e){return{code:C,message:"File is smaller than ".concat(e," bytes")}},A={code:j,message:"Too many files"};function E(e,t){var n="application/x-moz-file"===e.type||(0,w.Z)(e,t);return[n,n?null:_(t)]}function F(e,t,n){if(Z(e.size))if(Z(t)&&Z(n)){if(e.size>n)return[!1,S(n)];if(e.size<t)return[!1,P(t)]}else{if(Z(t)&&e.size<t)return[!1,P(t)];if(Z(n)&&e.size>n)return[!1,S(n)]}return[!0,null]}function Z(e){return void 0!==e&&null!==e}function R(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=D(E(e,n),1)[0],i=D(F(e,r,o),1)[0];return t&&i}))}function M(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function T(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function L(e){e.preventDefault()}function z(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function W(e){return-1!==e.indexOf("Edge/")}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return z(e)||W(e)}function G(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!M(e)&&t&&t.apply(void 0,[e].concat(r)),M(e)}))}}var N=["children"],K=["open"],$=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],B=["refKey","onChange","onClick"];function J(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||X(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){if(e){if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ee=(0,r.forwardRef)((function(e,t){var n=e.children,o=re(Q(e,N)),i=o.open,a=Q(o,K);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(U(U({},a),{},{open:i})))}));ee.displayName="Dropzone";var te={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?f(e.dataTransfer,e.type):c(e))];var n}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ee.defaultProps=te,ee.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var ne={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=U(U({},te),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,u=t.minSize,l=t.multiple,s=t.maxFiles,c=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,p=t.onDrop,m=t.onDropAccepted,v=t.onDropRejected,g=t.onFileDialogCancel,y=t.preventDropOnDocument,b=t.noClick,h=t.noKeyboard,w=t.noDrag,D=t.noDragEventsBubbling,x=t.validator,O=(0,r.useRef)(null),k=(0,r.useRef)(null),C=(0,r.useReducer)(oe,ne),j=V(C,2),_=j[0],S=j[1],P=_.isFocused,Z=_.isFileDialogActive,z=_.draggedFiles,W=(0,r.useCallback)((function(){k.current&&(S({type:"openDialog"}),k.current.value=null,k.current.click())}),[S]),N=function(){Z&&setTimeout((function(){k.current&&(k.current.files.length||(S({type:"closeDialog"}),"function"===typeof g&&g()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",N,!1),function(){window.removeEventListener("focus",N,!1)}}),[k,Z,g]);var K=(0,r.useCallback)((function(e){O.current&&O.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),W()))}),[O,k]),X=(0,r.useCallback)((function(){S({type:"focus"})}),[]),q=(0,r.useCallback)((function(){S({type:"blur"})}),[]),H=(0,r.useCallback)((function(){b||(I()?setTimeout(W,0):W())}),[k,b]),ee=(0,r.useRef)([]),re=function(e){O.current&&O.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,r.useEffect)((function(){return y&&(document.addEventListener("dragover",L,!1),document.addEventListener("drop",re,!1)),function(){y&&(document.removeEventListener("dragover",L),document.removeEventListener("drop",re))}}),[O,y]);var ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),ee.current=[].concat(J(ee.current),[e.target]),T(e)&&Promise.resolve(i(e)).then((function(t){M(e)&&!D||(S({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),c&&c(e))}))}),[i,c,D]),ae=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var t=T(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&d&&d(e),!1}),[d,D]),ue=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var t=ee.current.filter((function(e){return O.current&&O.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ee.current=t,t.length>0||(S({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),T(e)&&f&&f(e))}),[O,f,D]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),ee.current=[],T(e)&&Promise.resolve(i(e)).then((function(t){if(!M(e)||D){var r=[],o=[];t.forEach((function(e){var t=V(E(e,n),2),i=t[0],l=t[1],s=V(F(e,u,a),2),c=s[0],f=s[1],d=x?x(e):null;if(i&&c&&!d)r.push(e);else{var p=[l,f];d&&(p=p.concat(d)),o.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&s>=1&&r.length>s)&&(r.forEach((function(e){o.push({file:e,errors:[A]})})),r.splice(0)),S({acceptedFiles:r,fileRejections:o,type:"setFiles"}),p&&p(r,o,e),o.length>0&&v&&v(o,e),r.length>0&&m&&m(r,e)}})),S({type:"reset"})}),[l,n,u,a,s,i,p,m,v,D,x]),se=function(e){return o?null:e},ce=function(e){return h?null:se(e)},fe=function(e){return w?null:se(e)},de=function(e){D&&e.stopPropagation()},pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,c=e.onDragLeave,f=e.onDrop,d=Q(e,$);return U(U(Y({onKeyDown:ce(G(r,K)),onFocus:ce(G(i,X)),onBlur:ce(G(a,q)),onClick:se(G(u,H)),onDragEnter:fe(G(l,ie)),onDragOver:fe(G(s,ae)),onDragLeave:fe(G(c,ue)),onDrop:fe(G(f,le))},n,O),o||h?{}:{tabIndex:0}),d)}}),[O,K,X,q,H,ie,ae,ue,le,h,w,o]),me=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),ve=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=Q(e,B),u=Y({accept:n,multiple:l,type:"file",style:{display:"none"},onChange:se(G(o,le)),onClick:se(G(i,me)),autoComplete:"off",tabIndex:-1},r,k);return U(U({},u),a)}}),[k,n,l,le,o]),ge=z.length,ye=ge>0&&R({files:z,accept:n,minSize:u,maxSize:a,multiple:l,maxFiles:s}),be=ge>0&&!ye;return U(U({},_),{},{isDragAccept:ye,isDragReject:be,isFocused:P&&!o,getRootProps:pe,getInputProps:ve,rootRef:O,inputRef:k,open:se(W)})}function oe(e,t){switch(t.type){case"focus":return U(U({},e),{},{isFocused:!0});case"blur":return U(U({},e),{},{isFocused:!1});case"openDialog":return U(U({},e),{},{isFileDialogActive:!0});case"closeDialog":return U(U({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return U(U({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return U(U({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return U({},ne);default:return e}}}}]);