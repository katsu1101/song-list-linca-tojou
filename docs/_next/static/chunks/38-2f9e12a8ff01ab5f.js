(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{1712:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var i=r(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,i.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:l="",children:d,iconNode:f,...c}=e;return(0,i.createElement)("svg",{ref:t,...o,width:n,height:n,stroke:r,strokeWidth:u?24*Number(a)/Number(n):a,className:s("lucide",l),...c},[...f.map(e=>{let[t,r]=e;return(0,i.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),u=((e,t)=>{let r=(0,i.forwardRef)((r,o)=>{let{className:u,...l}=r;return(0,i.createElement)(a,{ref:o,iconNode:t,className:s("lucide-".concat(n(e)),u),...l})});return r.displayName="".concat(e),r})("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(4146),n=r.n(i)},7970:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(306),n=r(9955),s=r(5155),o=n._(r(2115)),a=i._(r(7650)),u=i._(r(6107)),l=r(666),d=r(1159),f=r(3621);r(2363);let c=r(3576),h=i._(r(5514)),p=r(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/song-list-linca-tojou/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,i,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function _(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:u,decoding:l,className:d,style:f,fetchPriority:c,placeholder:h,loading:g,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:k,setShowAltText:E,sizesInput:C,onLoad:S,onError:x,...O}=e,R=(0,o.useCallback)(e=>{e&&(x&&(e.src=e.src),e.complete&&m(e,h,b,w,k,y,C))},[r,h,b,w,k,x,y,C]),j=(0,p.useMergedRef)(t,R);return(0,s.jsx)("img",{...O,..._(c),loading:g,width:u,height:a,decoding:l,"data-nimg":v?"fill":"1",className:d,style:f,sizes:n,srcSet:i,src:r,ref:j,onLoad:e=>{m(e.currentTarget,h,b,w,k,y,C)},onError:e=>{E(!0),"empty"!==h&&k(!0),x&&x(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,..._(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(u.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),i=(0,o.useContext)(f.ImageConfigContext),n=(0,o.useMemo)(()=>{var e;let t=g||i||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),n=t.deviceSizes.sort((e,t)=>e-t),s=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:n,qualities:s}},[i]),{onLoad:a,onLoadingComplete:u}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let m=(0,o.useRef)(u);(0,o.useEffect)(()=>{m.current=u},[u]);let[_,b]=(0,o.useState)(!1),[w,k]=(0,o.useState)(!1),{props:E,meta:C}=(0,l.getImgProps)(e,{defaultLoader:h.default,imgConf:n,blurComplete:_,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{...E,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:k,sizesInput:e.sizes,ref:t}),C.priority?(0,s.jsx)(v,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=r(2115);function n(e,t){let r=(0,i.useRef)(()=>{}),n=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),n.current()):(r.current=s(e,i),n.current=s(t,i))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2363);let i=r(5859),n=r(1159);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let u,l,d,{src:f,sizes:c,unoptimized:h=!1,priority:p=!1,loading:g,className:m,quality:_,width:y,height:v,fill:b=!1,style:w,overrideSrc:k,onLoad:E,onLoadingComplete:C,placeholder:S="empty",blurDataURL:x,fetchPriority:O,decoding:R="async",layout:j,objectFit:I,objectPosition:A,lazyBoundary:P,lazyRoot:M,...z}=e,{imgConf:D,showAltText:T,blurComplete:L,defaultLoader:F}=t,N=D||n.imageConfigDefault;if("allSizes"in N)u=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t),i=null==(r=N.qualities)?void 0:r.sort((e,t)=>e-t);u={...N,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=z.loader||F;delete z.loader,delete z.srcSet;let q="__next_img_default"in U;if(q){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...i}=t;return e(i)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!c&&(c=t)}let B="",W=o(y),H=o(v);if((a=f)&&"object"==typeof a&&(s(a)||void 0!==a.src)){let e=s(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,x=x||e.blurDataURL,B=e.src,!b){if(W||H){if(W&&!H){let t=W/e.width;H=Math.round(e.height*t)}else if(!W&&H){let t=H/e.height;W=Math.round(e.width*t)}}else W=e.width,H=e.height}}let K=!p&&("lazy"===g||void 0===g);(!(f="string"==typeof f?f:B)||f.startsWith("data:")||f.startsWith("blob:"))&&(h=!0,K=!1),u.unoptimized&&(h=!0),q&&!u.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(h=!0);let G=o(_),$=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},T?{}:{color:"transparent"},w),J=L||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:H,blurWidth:l,blurHeight:d,blurDataURL:x||"",objectFit:$.objectFit})+'")':'url("'+S+'")',Q=J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},V=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=u.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:u.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===l?e:i+1)+l).join(", "),src:a({config:t,src:r,quality:s,width:u[d]})}}({config:u,src:f,unoptimized:h,width:W,quality:G,sizes:c,loader:U});return{props:{...z,loading:K?"lazy":g,fetchPriority:O,width:W,height:H,decoding:R,className:m,style:{...$,...Q},sizes:V.sizes,srcSet:V.srcSet,src:k||V.src},meta:{unoptimized:h,priority:p,placeholder:S,fill:b}}}},6107:(e,t,r)=>{"use strict";var i=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return c}});let n=r(306),s=r(9955),o=r(5155),a=s._(r(2115)),u=n._(r(1172)),l=r(3003),d=r(1147),f=r(675);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(h,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let s=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?s=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),i[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(i.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),i=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:g,headManager:i,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,u=n?40*n:r,l=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let i=r(306)._(r(2115)),n=r(1159),s=i.default.createContext(n.imageConfigDefault)},1159:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return a}});let i=r(306),n=r(666),s=r(7970),o=i._(r(5514));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/song-list-linca-tojou/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=s.Image},5514:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:n,quality:s}=e,o=s||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+o+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},3576:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let i=r(2115),n="undefined"==typeof window,s=n?()=>{}:i.useLayoutEffect,o=n?()=>{}:i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}if(n){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return s(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),s(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},9159:function(e,t){var r,i,n;i=[],void 0!==(n="function"==typeof(r=function e(){var t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},i=!r.document&&!!r.postMessage,n=r.IS_PAPA_WORKER||!1,s={},o=0,a={};function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,t){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(i)].join(t)}this.isFirstChunk&&w(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e,s=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=i.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),i=this._finished||this._config.preview&&this._rowCount>=this._config.preview,n)r.postMessage({results:s,workerId:a.WORKER_ID,finished:i});else if(w(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!i||!w(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):n&&this._config.error&&r.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e,r,n=this._config.downloadRequestHeaders;for(r in n)t.setRequestHeader(r,n[r])}this._config.chunkSize&&(e=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+e));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){let e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null!==(e=(e=t).getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function d(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,n=(this._config.chunkSize&&(n=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,n)),t.readAsText(e,this._config.encoding));i||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return t=(e=this._config.chunkSize)?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function c(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=b(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function h(e){var t,r,i,n,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,o=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,l=0,d=0,f=!1,c=!1,h=[],m={data:[],errors:[],meta:{}};function _(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function y(){if(m&&i&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(m.data=m.data.filter(function(e){return!_(e)})),b()){if(m){if(Array.isArray(m.data[0])){for(var t,r=0;b()&&r<m.data.length;r++)m.data[r].forEach(n);m.data.splice(0,1)}else m.data.forEach(n)}function n(t,r){w(e.transformHeader)&&(t=e.transformHeader(t,r)),h.push(t)}}function u(t,r){for(var i=e.header?{}:[],n=0;n<t.length;n++){let r,l;var a=n,u=t[n],u=(r=a=e.header?n>=h.length?"__parsed_extra":h[n]:a,l=u=e.transform?e.transform(u,a):u,(e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping))?"true"===l||"TRUE"===l||"false"!==l&&"FALSE"!==l&&((e=>{if(s.test(e)&&-0x20000000000000<(e=parseFloat(e))&&e<0x20000000000000)return 1})(l)?parseFloat(l):o.test(l)?new Date(l):""===l?null:l):l);"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(u)):i[a]=u}return e.header&&(n>h.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+n,d+r):n<h.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+n,d+r)),i}m&&(e.header||e.dynamicTyping||e.transform)&&(t=1,!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(u),t=m.data.length):m.data=u(m.data,0),e.header&&m.meta&&(m.meta.fields=h),d+=t)}function b(){return e.header&&0===h.length}function k(e,t,r,i){e={type:e,code:t,message:r},void 0!==i&&(e.row=i),m.errors.push(e)}w(e.step)&&(n=e.step,e.step=function(t){m=t,b()?y():(y(),0!==m.data.length&&(l+=t.data.length,e.preview&&l>e.preview?r.abort():(m.data=m.data[0],n(m,u))))}),this.parse=function(n,s,o){var u=e.quoteChar||'"',u=(e.newline||(e.newline=this.guessLineEndings(n,u)),i=!1,e.delimiter?w(e.delimiter)&&(e.delimiter=e.delimiter(n),m.meta.delimiter=e.delimiter):((u=((t,r,i,n,s)=>{var o,u,l,d;s=s||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var f=0;f<s.length;f++){for(var c,h=s[f],p=0,m=0,y=0,v=(l=void 0,new g({comments:n,delimiter:h,newline:r,preview:10}).parse(t)),b=0;b<v.data.length;b++)i&&_(v.data[b])?y++:(m+=c=v.data[b].length,void 0===l?l=c:0<c&&(p+=Math.abs(c-l),l=c));0<v.data.length&&(m/=v.data.length-y),(void 0===u||p<=u)&&(void 0===d||d<m)&&1.99<m&&(u=p,o=h,d=m)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=u.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),m.meta.delimiter=e.delimiter),v(e));return e.preview&&e.header&&u.preview++,t=n,m=(r=new g(u)).parse(t,s,o),y(),f?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),t=w(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(f=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),m.meta.aborted=!0,w(e.complete)&&e.complete(m),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<r[0].length;if(1===r.length||e)return"\n";for(var i=0,n=0;n<r.length;n++)"\n"===r[n][0]&&i++;return i>=r.length/2?"\r\n":"\r"}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t=(e=e||{}).delimiter,r=e.newline,i=e.comments,n=e.step,s=e.preview,o=e.fastMode,u=null,l=!1,d=null==e.quoteChar?'"':e.quoteChar,f=d;if(void 0!==e.escapeChar&&(f=e.escapeChar),("string"!=typeof t||-1<a.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,h=!1;this.parse=function(a,g,m){if("string"!=typeof a)throw Error("Input must be a string");var _=a.length,y=t.length,v=r.length,b=i.length,k=w(n),E=[],C=[],S=[],x=c=0;if(!a)return F();if(o||!1!==o&&-1===a.indexOf(d)){for(var O=a.split(r),R=0;R<O.length;R++){if(S=O[R],c+=S.length,R!==O.length-1)c+=r.length;else if(m)break;if(!i||S.substring(0,b)!==i){if(k){if(E=[],z(S.split(t)),N(),h)return F()}else z(S.split(t));if(s&&s<=R)return E=E.slice(0,s),F(!0)}}return F()}for(var j=a.indexOf(t,c),I=a.indexOf(r,c),A=RegExp(p(f)+p(d),"g"),P=a.indexOf(d,c);;)if(a[c]===d)for(P=c,c++;;){if(-1===(P=a.indexOf(d,P+1)))return m||C.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:c}),T();if(P===_-1)return T(a.substring(c,P).replace(A,d));if(d===f&&a[P+1]===f)P++;else if(d===f||0===P||a[P-1]!==f){-1!==j&&j<P+1&&(j=a.indexOf(t,P+1));var M=D(-1===(I=-1!==I&&I<P+1?a.indexOf(r,P+1):I)?j:Math.min(j,I));if(a.substr(P+1+M,y)===t){S.push(a.substring(c,P).replace(A,d)),a[c=P+1+M+y]!==d&&(P=a.indexOf(d,c)),j=a.indexOf(t,c),I=a.indexOf(r,c);break}if(M=D(I),a.substring(P+1+M,P+1+M+v)===r){if(S.push(a.substring(c,P).replace(A,d)),L(P+1+M+v),j=a.indexOf(t,c),P=a.indexOf(d,c),k&&(N(),h))return F();if(s&&E.length>=s)return F(!0);break}C.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:c}),P++}}else if(i&&0===S.length&&a.substring(c,c+b)===i){if(-1===I)return F();c=I+v,I=a.indexOf(r,c),j=a.indexOf(t,c)}else if(-1!==j&&(j<I||-1===I))S.push(a.substring(c,j)),c=j+y,j=a.indexOf(t,c);else{if(-1===I)break;if(S.push(a.substring(c,I)),L(I+v),k&&(N(),h))return F();if(s&&E.length>=s)return F(!0)}return T();function z(e){E.push(e),x=c}function D(e){return -1!==e&&(e=a.substring(P+1,e))&&""===e.trim()?e.length:0}function T(e){return m||(void 0===e&&(e=a.substring(c)),S.push(e),c=_,z(S),k&&N()),F()}function L(e){c=e,z(S),S=[],I=a.indexOf(r,c)}function F(i){if(e.header&&!g&&E.length&&!l){var n=E[0],s={},o=new Set(n);let t=!1;for(let r=0;r<n.length;r++){let i=n[r];if(s[i=w(e.transformHeader)?e.transformHeader(i,r):i]){let e,a=s[i];for(;e=i+"_"+a,a++,o.has(e););o.add(e),n[r]=e,s[i]++,t=!0,(u=null===u?{}:u)[e]=i}else s[i]=1,n[r]=i;o.add(i)}t&&console.warn("Duplicate headers found and renamed."),l=!0}return{data:E,errors:C,meta:{delimiter:t,linebreak:r,aborted:h,truncated:!!i,cursor:x+(g||0),renamedHeaders:u}}}function N(){n(F()),E=[],C=[]}},this.abort=function(){h=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,r=s[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(w(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},n),!i);o++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=s[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function y(){throw Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=v(e[t]);return r}function b(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return a.parse=function(t,i){var n,u,h,p=(i=i||{}).dynamicTyping||!1;if(w(p)&&(i.dynamicTypingFunction=p,p={}),i.dynamicTyping=p,i.transform=!!w(i.transform)&&i.transform,!i.worker||!a.WORKERS_SUPPORTED){let e;return p=null,a.NODE_STREAM_INPUT,"string"==typeof t?(t=65279!==(e=t).charCodeAt(0)?e:e.slice(1),p=new(i.download?l:f)(i)):!0===t.readable&&w(t.read)&&w(t.on)?p=new c(i):(r.File&&t instanceof File||t instanceof Object)&&(p=new d(i)),p.stream(t)}(p=!!a.WORKERS_SUPPORTED&&(u=r.URL||r.webkitURL||null,h=e.toString(),n=a.BLOB_URL||(a.BLOB_URL=u.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",h,")();"],{type:"text/javascript"}))),(n=new r.Worker(n)).onmessage=m,n.id=o++,s[n.id]=n)).userStep=i.step,p.userChunk=i.chunk,p.userComplete=i.complete,p.userError=i.error,i.step=w(i.step),i.chunk=w(i.chunk),i.complete=w(i.complete),i.error=w(i.error),delete i.worker,p.postMessage({input:t,config:i,workerId:p.id})},a.unparse=function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,l=!1,d=null,f=!1,c=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),t.escapeFormulae instanceof RegExp?f=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(f=/^[=+\-@\t\r].*$/)}})(),RegExp(p(o),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,l);if("object"==typeof e[0])return h(d||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],l);throw Error("Unable to serialize unrecognized input");function h(e,t,r){var o="",a=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),u=!Array.isArray(t[0]);if(a&&i){for(var l=0;l<e.length;l++)0<l&&(o+=n),o+=g(e[l],l);0<t.length&&(o+=s)}for(var d=0;d<t.length;d++){var f=(a?e:t[d]).length,c=!1,h=a?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!a&&(c="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&a){for(var p=[],m=0;m<f;m++){var _=u?e[m]:m;p.push(t[d][_])}c=""===p.join("").trim()}if(!c){for(var y=0;y<f;y++){0<y&&!h&&(o+=n);var v=a&&u?e[y]:y;o+=g(t[d][v],y)}d<t.length-1&&(!r||0<f&&!h)&&(o+=s)}}return o}function g(e,t){var i,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,f&&"string"==typeof e&&f.test(e)&&(e="'"+e,s=!0),i=e.toString().replace(c,u),(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?o+i+o:i)}},a.RECORD_SEP="\x1e",a.UNIT_SEP="\x1f",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!r.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=0xa00000,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=h,a.NetworkStreamer=l,a.FileStreamer=d,a.StringStreamer=f,a.ReadableStreamStreamer=c,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var i=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===t(this).prop("tagName").toUpperCase()&&"file"===t(this).attr("type").toLowerCase()&&r.FileReader)||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)n.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},i)})}),s(),this;function s(){if(0===n.length)w(e.complete)&&e.complete();else{var r,i,s,u,l=n[0];if(w(e.before)){var d=e.before(l.file,l.inputElem);if("object"==typeof d){if("abort"===d.action)return r="AbortError",i=l.file,s=l.inputElem,u=d.reason,void(w(e.error)&&e.error({name:r},i,s,u));if("skip"===d.action)return void o();"object"==typeof d.config&&(l.instanceConfig=t.extend(l.instanceConfig,d.config))}else if("skip"===d)return void o()}var f=l.instanceConfig.complete;l.instanceConfig.complete=function(e){w(f)&&f(e,l.file,l.inputElem),o()},a.parse(l.file,l.instanceConfig)}}function o(){n.splice(0,1),s()}}),n&&(r.onmessage=function(e){e=e.data,void 0===a.WORKER_ID&&e&&(a.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=a.parse(e.input,e.config))&&r.postMessage({workerId:a.WORKER_ID,results:e,finished:!0})}),(l.prototype=Object.create(u.prototype)).constructor=l,(d.prototype=Object.create(u.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(c.prototype=Object.create(u.prototype)).constructor=c,a})?r.apply(t,i):r)&&(e.exports=n)}}]);