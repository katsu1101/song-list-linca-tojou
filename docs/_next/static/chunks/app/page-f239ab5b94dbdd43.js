(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2599:(e,t,i)=>{Promise.resolve().then(i.bind(i,2061))},9159:function(e,t){var i,r,n;r=[],void 0!==(n="function"==typeof(i=function e(){var t,i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==i?i:{},r=!i.document&&!!i.postMessage,n=i.IS_PAPA_WORKER||!1,s={},a=0,o={};function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,t){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,s=(this._partialLine="",this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),r=this._finished||this._config.preview&&this._rowCount>=this._config.preview,n)i.postMessage({results:s,workerId:o.WORKER_ID,finished:r});else if(k(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!r||!k(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&i.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function d(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e,i,n=this._config.downloadRequestHeaders;for(i in n)t.setRequestHeader(i,n[i])}this._config.chunkSize&&(e=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+e));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){let e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null!==(e=(e=t).getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function u(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),l.call(this,e);var t,i,r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,n=(this._config.chunkSize&&(n=Math.min(this._start+this._config.chunkSize,this._input.size),e=i.call(e,this._start,n)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function h(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,i;if(!this._finished)return t=(e=this._config.chunkSize)?(i=t.substring(0,e),t.substring(e)):(i=t,""),this._finished=!t,this.parseChunk(i)}}function c(e){l.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function f(e){var t,i,r,n,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,a=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,d=0,u=0,h=!1,c=!1,f=[],m={data:[],errors:[],meta:{}};function _(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function y(){if(m&&r&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(m.data=m.data.filter(function(e){return!_(e)})),v()){if(m){if(Array.isArray(m.data[0])){for(var t,i=0;v()&&i<m.data.length;i++)m.data[i].forEach(n);m.data.splice(0,1)}else m.data.forEach(n)}function n(t,i){k(e.transformHeader)&&(t=e.transformHeader(t,i)),f.push(t)}}function l(t,i){for(var r=e.header?{}:[],n=0;n<t.length;n++){let i,d;var o=n,l=t[n],l=(i=o=e.header?n>=f.length?"__parsed_extra":f[n]:o,d=l=e.transform?e.transform(l,o):l,(e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping))?"true"===d||"TRUE"===d||"false"!==d&&"FALSE"!==d&&((e=>{if(s.test(e)&&-0x20000000000000<(e=parseFloat(e))&&e<0x20000000000000)return 1})(d)?parseFloat(d):a.test(d)?new Date(d):""===d?null:d):d);"__parsed_extra"===o?(r[o]=r[o]||[],r[o].push(l)):r[o]=l}return e.header&&(n>f.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+n,u+i):n<f.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+n,u+i)),r}m&&(e.header||e.dynamicTyping||e.transform)&&(t=1,!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(l),t=m.data.length):m.data=l(m.data,0),e.header&&m.meta&&(m.meta.fields=f),u+=t)}function v(){return e.header&&0===f.length}function x(e,t,i,r){e={type:e,code:t,message:i},void 0!==r&&(e.row=r),m.errors.push(e)}k(e.step)&&(n=e.step,e.step=function(t){m=t,v()?y():(y(),0!==m.data.length&&(d+=t.data.length,e.preview&&d>e.preview?i.abort():(m.data=m.data[0],n(m,l))))}),this.parse=function(n,s,a){var l=e.quoteChar||'"',l=(e.newline||(e.newline=this.guessLineEndings(n,l)),r=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(n),m.meta.delimiter=e.delimiter):((l=((t,i,r,n,s)=>{var a,l,d,u;s=s||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var h=0;h<s.length;h++){for(var c,f=s[h],p=0,m=0,y=0,b=(d=void 0,new g({comments:n,delimiter:f,newline:i,preview:10}).parse(t)),v=0;v<b.data.length;v++)r&&_(b.data[v])?y++:(m+=c=b.data[v].length,void 0===d?d=c:0<c&&(p+=Math.abs(c-d),d=c));0<b.data.length&&(m/=b.data.length-y),(void 0===l||p<=l)&&(void 0===u||u<m)&&1.99<m&&(l=p,a=f,u=m)}return{successful:!!(e.delimiter=a),bestDelimiter:a}})(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=o.DefaultDelimiter),m.meta.delimiter=e.delimiter),b(e));return e.preview&&e.header&&l.preview++,t=n,m=(i=new g(l)).parse(t,s,a),y(),h?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,i.abort(),t=k(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){l.streamer._halted?(h=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,i.abort(),m.meta.aborted=!0,k(e.complete)&&e.complete(m),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<i[0].length;if(1===i.length||e)return"\n";for(var r=0,n=0;n<i.length;n++)"\n"===i[n][0]&&r++;return r>=i.length/2?"\r\n":"\r"}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t=(e=e||{}).delimiter,i=e.newline,r=e.comments,n=e.step,s=e.preview,a=e.fastMode,l=null,d=!1,u=null==e.quoteChar?'"':e.quoteChar,h=u;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof t||-1<o.BAD_DELIMITERS.indexOf(t))&&(t=","),r===t)throw Error("Comment character same as delimiter");!0===r?r="#":("string"!=typeof r||-1<o.BAD_DELIMITERS.indexOf(r))&&(r=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var c=0,f=!1;this.parse=function(o,g,m){if("string"!=typeof o)throw Error("Input must be a string");var _=o.length,y=t.length,b=i.length,v=r.length,x=k(n),E=[],w=[],C=[],R=c=0;if(!o)return M();if(a||!1!==a&&-1===o.indexOf(u)){for(var F=o.split(i),S=0;S<F.length;S++){if(C=F[S],c+=C.length,S!==F.length-1)c+=i.length;else if(m)break;if(!r||C.substring(0,v)!==r){if(x){if(E=[],D(C.split(t)),P(),f)return M()}else D(C.split(t));if(s&&s<=S)return E=E.slice(0,s),M(!0)}}return M()}for(var O=o.indexOf(t,c),j=o.indexOf(i,c),I=RegExp(p(h)+p(u),"g"),A=o.indexOf(u,c);;)if(o[c]===u)for(A=c,c++;;){if(-1===(A=o.indexOf(u,A+1)))return m||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:c}),N();if(A===_-1)return N(o.substring(c,A).replace(I,u));if(u===h&&o[A+1]===h)A++;else if(u===h||0===A||o[A-1]!==h){-1!==O&&O<A+1&&(O=o.indexOf(t,A+1));var L=T(-1===(j=-1!==j&&j<A+1?o.indexOf(i,A+1):j)?O:Math.min(O,j));if(o.substr(A+1+L,y)===t){C.push(o.substring(c,A).replace(I,u)),o[c=A+1+L+y]!==u&&(A=o.indexOf(u,c)),O=o.indexOf(t,c),j=o.indexOf(i,c);break}if(L=T(j),o.substring(A+1+L,A+1+L+b)===i){if(C.push(o.substring(c,A).replace(I,u)),z(A+1+L+b),O=o.indexOf(t,c),A=o.indexOf(u,c),x&&(P(),f))return M();if(s&&E.length>=s)return M(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:c}),A++}}else if(r&&0===C.length&&o.substring(c,c+v)===r){if(-1===j)return M();c=j+b,j=o.indexOf(i,c),O=o.indexOf(t,c)}else if(-1!==O&&(O<j||-1===j))C.push(o.substring(c,O)),c=O+y,O=o.indexOf(t,c);else{if(-1===j)break;if(C.push(o.substring(c,j)),z(j+b),x&&(P(),f))return M();if(s&&E.length>=s)return M(!0)}return N();function D(e){E.push(e),R=c}function T(e){return -1!==e&&(e=o.substring(A+1,e))&&""===e.trim()?e.length:0}function N(e){return m||(void 0===e&&(e=o.substring(c)),C.push(e),c=_,D(C),x&&P()),M()}function z(e){c=e,D(C),C=[],j=o.indexOf(i,c)}function M(r){if(e.header&&!g&&E.length&&!d){var n=E[0],s={},a=new Set(n);let t=!1;for(let i=0;i<n.length;i++){let r=n[i];if(s[r=k(e.transformHeader)?e.transformHeader(r,i):r]){let e,o=s[r];for(;e=r+"_"+o,o++,a.has(e););a.add(e),n[i]=e,s[r]++,t=!0,(l=null===l?{}:l)[e]=r}else s[r]=1,n[i]=r;a.add(r)}t&&console.warn("Duplicate headers found and renamed."),d=!0}return{data:E,errors:w,meta:{delimiter:t,linebreak:i,aborted:f,truncated:!!r,cursor:R+(g||0),renamedHeaders:l}}}function P(){n(M()),E=[],w=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,i=s[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(i.userStep)){for(var a=0;a<t.results.data.length&&(i.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},n),!r);a++);delete t.results}else k(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=s[e];k(i.userComplete)&&i.userComplete(t),i.terminate(),delete s[e]}function y(){throw Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t,i=Array.isArray(e)?[]:{};for(t in e)i[t]=b(e[t]);return i}function v(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return o.parse=function(t,r){var n,l,f,p=(r=r||{}).dynamicTyping||!1;if(k(p)&&(r.dynamicTypingFunction=p,p={}),r.dynamicTyping=p,r.transform=!!k(r.transform)&&r.transform,!r.worker||!o.WORKERS_SUPPORTED){let e;return p=null,o.NODE_STREAM_INPUT,"string"==typeof t?(t=65279!==(e=t).charCodeAt(0)?e:e.slice(1),p=new(r.download?d:h)(r)):!0===t.readable&&k(t.read)&&k(t.on)?p=new c(r):(i.File&&t instanceof File||t instanceof Object)&&(p=new u(r)),p.stream(t)}(p=!!o.WORKERS_SUPPORTED&&(l=i.URL||i.webkitURL||null,f=e.toString(),n=o.BLOB_URL||(o.BLOB_URL=l.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",f,")();"],{type:"text/javascript"}))),(n=new i.Worker(n)).onmessage=m,n.id=a++,s[n.id]=n)).userStep=r.step,p.userChunk=r.chunk,p.userComplete=r.complete,p.userError=r.error,r.step=k(r.step),r.chunk=k(r.chunk),r.complete=k(r.complete),r.error=k(r.error),delete r.worker,p.postMessage({input:t,config:r,workerId:p.id})},o.unparse=function(e,t){var i=!1,r=!0,n=",",s="\r\n",a='"',l=a+a,d=!1,u=null,h=!1,c=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(d=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");u=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),t.escapeFormulae instanceof RegExp?h=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(h=/^[=+\-@\t\r].*$/)}})(),RegExp(p(a),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,d);if("object"==typeof e[0])return f(u||Object.keys(e[0]),e,d)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],d);throw Error("Unable to serialize unrecognized input");function f(e,t,i){var a="",o=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),l=!Array.isArray(t[0]);if(o&&r){for(var d=0;d<e.length;d++)0<d&&(a+=n),a+=g(e[d],d);0<t.length&&(a+=s)}for(var u=0;u<t.length;u++){var h=(o?e:t[u]).length,c=!1,f=o?0===Object.keys(t[u]).length:0===t[u].length;if(i&&!o&&(c="greedy"===i?""===t[u].join("").trim():1===t[u].length&&0===t[u][0].length),"greedy"===i&&o){for(var p=[],m=0;m<h;m++){var _=l?e[m]:m;p.push(t[u][_])}c=""===p.join("").trim()}if(!c){for(var y=0;y<h;y++){0<y&&!f&&(a+=n);var b=o&&l?e[y]:y;a+=g(t[u][b],y)}u<t.length-1&&(!i||0<h&&!f)&&(a+=s)}}return a}function g(e,t){var r,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,h&&"string"==typeof e&&h.test(e)&&(e="'"+e,s=!0),r=e.toString().replace(c,l),(s=s||!0===i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||((e,t)=>{for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1})(r,o.BAD_DELIMITERS)||-1<r.indexOf(n)||" "===r.charAt(0)||" "===r.charAt(r.length-1))?a+r+a:r)}},o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!r&&!!i.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=0xa00000,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=f,o.NetworkStreamer=d,o.FileStreamer=u,o.StringStreamer=h,o.ReadableStreamStreamer=c,i.jQuery&&((t=i.jQuery).fn.parse=function(e){var r=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===t(this).prop("tagName").toUpperCase()&&"file"===t(this).attr("type").toLowerCase()&&i.FileReader)||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)n.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},r)})}),s(),this;function s(){if(0===n.length)k(e.complete)&&e.complete();else{var i,r,s,l,d=n[0];if(k(e.before)){var u=e.before(d.file,d.inputElem);if("object"==typeof u){if("abort"===u.action)return i="AbortError",r=d.file,s=d.inputElem,l=u.reason,void(k(e.error)&&e.error({name:i},r,s,l));if("skip"===u.action)return void a();"object"==typeof u.config&&(d.instanceConfig=t.extend(d.instanceConfig,u.config))}else if("skip"===u)return void a()}var h=d.instanceConfig.complete;d.instanceConfig.complete=function(e){k(h)&&h(e,d.file,d.inputElem),a()},o.parse(d.file,d.instanceConfig)}}function a(){n.splice(0,1),s()}}),n&&(i.onmessage=function(e){e=e.data,void 0===o.WORKER_ID&&e&&(o.WORKER_ID=e.workerId),"string"==typeof e.input?i.postMessage({workerId:o.WORKER_ID,results:o.parse(e.input,e.config),finished:!0}):(i.File&&e.input instanceof File||e.input instanceof Object)&&(e=o.parse(e.input,e.config))&&i.postMessage({workerId:o.WORKER_ID,results:e,finished:!0})}),(d.prototype=Object.create(l.prototype)).constructor=d,(u.prototype=Object.create(l.prototype)).constructor=u,(h.prototype=Object.create(h.prototype)).constructor=h,(c.prototype=Object.create(l.prototype)).constructor=c,o})?i.apply(t,r):i)&&(e.exports=n)},2061:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var r=i(5155);let n={オリジナル:{background:"#FFD700",color:"#000000"},"J-POP":{background:"#FF69B4",color:"#FFFFFF"},ドラえもん:{background:"#FFFFFF",color:"#1E90FF",boxShadow:"0 0 5px #FF69B4"},アニソン:{background:"#FF4500",color:"#FFFFFF"},ボカロ:{background:"#00CED1",color:"#FFFFFF"},ディズニー:{background:"#60B3E7",color:"#D2E6FA"},クリスマス:{background:"#008000",color:"#E9423A"},ガンダム:{background:"#EBF7EE",color:"#E9423A",border:"2px solid #F9C13A",boxShadow:"0 0 5px #5DA0E7"}},s=e=>e?n[e]:{background:"#CCCCCC",color:"#000000"},a=e=>{let{genre:t,onClick:i}=e,n=s(t);return(0,r.jsx)("span",{className:"ml-1 px-2 py-0.5 text-xs rounded-md font-bold leading-none flex items-center cursor-pointer",style:{backgroundColor:null==n?void 0:n.background,color:null==n?void 0:n.color,border:(null==n?void 0:n.border)||"none",boxShadow:(null==n?void 0:n.boxShadow)||"none",fontWeight:"bold",lineHeight:"1",alignSelf:"flex-start"},onClick:()=>i&&i(t),children:t})};var o=i(2115),l=i(9159),d=i.n(l);let u="/song-list-linca-tojou";function h(){let[e,t]=(0,o.useState)([]),[i,n]=(0,o.useState)({}),[s,l]=(0,o.useState)(""),[h,c]=(0,o.useState)(null),f=e=>{l(e)};(0,o.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat(u,"/songinfo.csv")),t=await e.text(),{data:i}=d().parse(t,{header:!0,skipEmptyLines:!0}),r={};i.forEach(e=>{r[e.title]=e}),c(r)}catch(e){console.error("Failed to load songinfo.csv:",e)}})()},[]),(0,o.useEffect)(()=>{h&&(async()=>{try{let e=await fetch("".concat(u,"/songs.json")),i=await e.json(),r=[...i.songs].sort((e,t)=>e.date!==t.date?t.date.localeCompare(e.date):(e.timestamp||0)-(t.timestamp||0)).map(e=>({...e,info:h[e.title]||null}));t(r),n(i.videos||{})}catch(e){console.error("Failed to load songs.json:",e)}})()},[h]);let p=e.filter(e=>{var t,r,n,a;let o=i[e.videoId];return e.title.toLowerCase().includes(s.toLowerCase())||e.date.includes(s)||((null==o?void 0:null===(r=o.snippet)||void 0===r?void 0:null===(t=r.title)||void 0===t?void 0:t.toLowerCase())||"").includes(s.toLowerCase())||((null===(a=e.info)||void 0===a?void 0:null===(n=a.genre)||void 0===n?void 0:n.toLowerCase())||"").includes(s.toLowerCase())}),g={};return p.forEach(e=>{g[e.date]||(g[e.date]={}),g[e.date][e.videoId]||(g[e.date][e.videoId]=[]),g[e.date][e.videoId].push(e)}),(0,r.jsxs)("main",{className:"max-w-4xl mx-auto p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-center mb-6",children:"戸定梨香ちゃんの歌リスト"}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("input",{type:"text",placeholder:"曲名・日付・動画タイトルで検索",value:s,onChange:e=>l(e.target.value),className:"w-full p-2 border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-100"})}),Object.entries(g).length>0?Object.entries(g).map(e=>{let[t,n]=e;return(0,r.jsxs)("section",{className:"mb-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold border-b-2 pb-2",children:t}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:Object.entries(n).map(e=>{var t,n,s,o,l,d;let[u,h]=e,c=i[u];return(0,r.jsxs)("div",{className:"p-4 border rounded-lg shadow-md transition-transform duration-300 ".concat(1===h[0].source?"bg-gray-300 dark:bg-gray-700 hover:scale-105":"bg-blue-100 dark:bg-blue-900 hover:scale-105 border-blue-500"),children:[(0,r.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(u,"&t=0s"),target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,r.jsx)("img",{src:(null==c?void 0:null===(s=c.snippet)||void 0===s?void 0:null===(n=s.thumbnails)||void 0===n?void 0:null===(t=n.high)||void 0===t?void 0:t.url)||"https://img.youtube.com/vi/".concat(u,"/hqdefault.jpg"),alt:(null==c?void 0:null===(o=c.snippet)||void 0===o?void 0:o.title)||h[0].title,className:"w-full object-cover rounded-md ".concat(1===h[0].source?"h-48":"h-32")})}),(null==c?void 0:null===(l=c.snippet)||void 0===l?void 0:l.title)&&(0,r.jsx)("p",{className:"mt-2 text-center font-semibold text-lg text-gray-900 dark:text-gray-100",children:c.snippet.title}),1===h[0].source?(0,r.jsxs)("p",{className:"mt-2 font-medium text-center text-lg flex items-start  space-x-2 text-gray-900 dark:text-gray-100",children:["♬ ",h[0].title,(null===(d=h[0].info)||void 0===d?void 0:d.genre)&&(0,r.jsx)(a,{genre:h[0].info.genre,onClick:f})]}):(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)("ul",{className:"mt-2 space-y-2 text-gray-800 dark:text-gray-300",children:h.map(e=>{var t;return(0,r.jsxs)("li",{className:"text-lg flex items-start  space-x-2",children:[(0,r.jsxs)("a",{href:"https://www.youtube.com/watch?v=".concat(e.videoId).concat(e.timestamp?"&t=".concat(e.timestamp,"s"):""),target:"_blank",rel:"noopener noreferrer",className:"block hover:underline hover:text-blue-500",children:["♪ ",e.title]}),(null===(t=e.info)||void 0===t?void 0:t.genre)&&(0,r.jsx)(a,{genre:e.info.genre,onClick:f})]},e.timestamp)})})})]},u)})})]},t)}):(0,r.jsx)("p",{className:"text-center text-gray-500",children:"検索結果がありません"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(2599)),_N_E=e.O()}]);