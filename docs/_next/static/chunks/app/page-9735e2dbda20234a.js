(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2599:(e,t,r)=>{Promise.resolve().then(r.bind(r,9155))},9159:function(e,t){var r,n,i;n=[],void 0!==(i="function"==typeof(r=function e(){var t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},n=!r.document&&!!r.postMessage,i=r.IS_PAPA_WORKER||!1,s={},o=0,a={};function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,t){var n=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<n){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(n)].join(t)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1;var n=this._partialLine+e,s=(this._partialLine="",this._handle.parse(n,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=n.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),n=this._finished||this._config.preview&&this._rowCount>=this._config.preview,i)r.postMessage({results:s,workerId:a.WORKER_ID,finished:n});else if(k(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!n||!k(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),n||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):i&&this._config.error&&r.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function d(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e,r,i=this._config.downloadRequestHeaders;for(r in i)t.setRequestHeader(r,i[r])}this._config.chunkSize&&(e=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+e));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){let e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null!==(e=(e=t).getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),l.call(this,e);var t,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,i)),t.readAsText(e,this._config.encoding));n||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function u(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return t=(e=this._config.chunkSize)?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function h(e){l.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=v(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=v(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=v(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function f(e){var t,r,n,i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,o=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,d=0,c=0,u=!1,h=!1,f=[],m={data:[],errors:[],meta:{}};function x(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function b(){if(m&&n&&(_("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(m.data=m.data.filter(function(e){return!x(e)})),v()){if(m){if(Array.isArray(m.data[0])){for(var t,r=0;v()&&r<m.data.length;r++)m.data[r].forEach(i);m.data.splice(0,1)}else m.data.forEach(i)}function i(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),f.push(t)}}function l(t,r){for(var n=e.header?{}:[],i=0;i<t.length;i++){let r,d;var a=i,l=t[i],l=(r=a=e.header?i>=f.length?"__parsed_extra":f[i]:a,d=l=e.transform?e.transform(l,a):l,(e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping))?"true"===d||"TRUE"===d||"false"!==d&&"FALSE"!==d&&((e=>{if(s.test(e)&&-0x20000000000000<(e=parseFloat(e))&&e<0x20000000000000)return 1})(d)?parseFloat(d):o.test(d)?new Date(d):""===d?null:d):d);"__parsed_extra"===a?(n[a]=n[a]||[],n[a].push(l)):n[a]=l}return e.header&&(i>f.length?_("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+i,c+r):i<f.length&&_("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+i,c+r)),n}m&&(e.header||e.dynamicTyping||e.transform)&&(t=1,!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(l),t=m.data.length):m.data=l(m.data,0),e.header&&m.meta&&(m.meta.fields=f),c+=t)}function v(){return e.header&&0===f.length}function _(e,t,r,n){e={type:e,code:t,message:r},void 0!==n&&(e.row=n),m.errors.push(e)}k(e.step)&&(i=e.step,e.step=function(t){m=t,v()?b():(b(),0!==m.data.length&&(d+=t.data.length,e.preview&&d>e.preview?r.abort():(m.data=m.data[0],i(m,l))))}),this.parse=function(i,s,o){var l=e.quoteChar||'"',l=(e.newline||(e.newline=this.guessLineEndings(i,l)),n=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(i),m.meta.delimiter=e.delimiter):((l=((t,r,n,i,s)=>{var o,l,d,c;s=s||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var u=0;u<s.length;u++){for(var h,f=s[u],p=0,m=0,b=0,y=(d=void 0,new g({comments:i,delimiter:f,newline:r,preview:10}).parse(t)),v=0;v<y.data.length;v++)n&&x(y.data[v])?b++:(m+=h=y.data[v].length,void 0===d?d=h:0<h&&(p+=Math.abs(h-d),d=h));0<y.data.length&&(m/=y.data.length-b),(void 0===l||p<=l)&&(void 0===c||c<m)&&1.99<m&&(l=p,o=f,c=m)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),m.meta.delimiter=e.delimiter),y(e));return e.preview&&e.header&&l.preview++,t=i,m=(r=new g(l)).parse(t,s,o),b(),u?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){l.streamer._halted?(u=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),m.meta.aborted=!0,k(e.complete)&&e.complete(m),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<r[0].length;if(1===r.length||e)return"\n";for(var n=0,i=0;i<r.length;i++)"\n"===r[i][0]&&n++;return n>=r.length/2?"\r\n":"\r"}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t=(e=e||{}).delimiter,r=e.newline,n=e.comments,i=e.step,s=e.preview,o=e.fastMode,l=null,d=!1,c=null==e.quoteChar?'"':e.quoteChar,u=c;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof t||-1<a.BAD_DELIMITERS.indexOf(t))&&(t=","),n===t)throw Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var h=0,f=!1;this.parse=function(a,g,m){if("string"!=typeof a)throw Error("Input must be a string");var x=a.length,b=t.length,y=r.length,v=n.length,_=k(i),w=[],E=[],F=[],C=h=0;if(!a)return P();if(o||!1!==o&&-1===a.indexOf(c)){for(var j=a.split(r),N=0;N<j.length;N++){if(F=j[N],h+=F.length,N!==j.length-1)h+=r.length;else if(m)break;if(!n||F.substring(0,v)!==n){if(_){if(w=[],A(F.split(t)),M(),f)return P()}else A(F.split(t));if(s&&s<=N)return w=w.slice(0,s),P(!0)}}return P()}for(var R=a.indexOf(t,h),S=a.indexOf(r,h),O=RegExp(p(u)+p(c),"g"),L=a.indexOf(c,h);;)if(a[h]===c)for(L=h,h++;;){if(-1===(L=a.indexOf(c,L+1)))return m||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:w.length,index:h}),T();if(L===x-1)return T(a.substring(h,L).replace(O,c));if(c===u&&a[L+1]===u)L++;else if(c===u||0===L||a[L-1]!==u){-1!==R&&R<L+1&&(R=a.indexOf(t,L+1));var D=I(-1===(S=-1!==S&&S<L+1?a.indexOf(r,L+1):S)?R:Math.min(R,S));if(a.substr(L+1+D,b)===t){F.push(a.substring(h,L).replace(O,c)),a[h=L+1+D+b]!==c&&(L=a.indexOf(c,h)),R=a.indexOf(t,h),S=a.indexOf(r,h);break}if(D=I(S),a.substring(L+1+D,L+1+D+y)===r){if(F.push(a.substring(h,L).replace(O,c)),z(L+1+D+y),R=a.indexOf(t,h),L=a.indexOf(c,h),_&&(M(),f))return P();if(s&&w.length>=s)return P(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:w.length,index:h}),L++}}else if(n&&0===F.length&&a.substring(h,h+v)===n){if(-1===S)return P();h=S+y,S=a.indexOf(r,h),R=a.indexOf(t,h)}else if(-1!==R&&(R<S||-1===S))F.push(a.substring(h,R)),h=R+b,R=a.indexOf(t,h);else{if(-1===S)break;if(F.push(a.substring(h,S)),z(S+y),_&&(M(),f))return P();if(s&&w.length>=s)return P(!0)}return T();function A(e){w.push(e),C=h}function I(e){return -1!==e&&(e=a.substring(L+1,e))&&""===e.trim()?e.length:0}function T(e){return m||(void 0===e&&(e=a.substring(h)),F.push(e),h=x,A(F),_&&M()),P()}function z(e){h=e,A(F),F=[],S=a.indexOf(r,h)}function P(n){if(e.header&&!g&&w.length&&!d){var i=w[0],s={},o=new Set(i);let t=!1;for(let r=0;r<i.length;r++){let n=i[r];if(s[n=k(e.transformHeader)?e.transformHeader(n,r):n]){let e,a=s[n];for(;e=n+"_"+a,a++,o.has(e););o.add(e),i[r]=e,s[n]++,t=!0,(l=null===l?{}:l)[e]=n}else s[n]=1,i[r]=n;o.add(n)}t&&console.warn("Duplicate headers found and renamed."),d=!0}return{data:w,errors:E,meta:{delimiter:t,linebreak:r,aborted:f,truncated:!!n,cursor:C+(g||0),renamedHeaders:l}}}function M(){i(P()),w=[],E=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return h}}function m(e){var t=e.data,r=s[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){n=!0,x(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!n);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!n&&x(t.workerId,t.results)}function x(e,t){var r=s[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function b(){throw Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=y(e[t]);return r}function v(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return a.parse=function(t,n){var i,l,f,p=(n=n||{}).dynamicTyping||!1;if(k(p)&&(n.dynamicTypingFunction=p,p={}),n.dynamicTyping=p,n.transform=!!k(n.transform)&&n.transform,!n.worker||!a.WORKERS_SUPPORTED){let e;return p=null,a.NODE_STREAM_INPUT,"string"==typeof t?(t=65279!==(e=t).charCodeAt(0)?e:e.slice(1),p=new(n.download?d:u)(n)):!0===t.readable&&k(t.read)&&k(t.on)?p=new h(n):(r.File&&t instanceof File||t instanceof Object)&&(p=new c(n)),p.stream(t)}(p=!!a.WORKERS_SUPPORTED&&(l=r.URL||r.webkitURL||null,f=e.toString(),i=a.BLOB_URL||(a.BLOB_URL=l.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",f,")();"],{type:"text/javascript"}))),(i=new r.Worker(i)).onmessage=m,i.id=o++,s[i.id]=i)).userStep=n.step,p.userChunk=n.chunk,p.userComplete=n.complete,p.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,p.postMessage({input:t,config:n,workerId:p.id})},a.unparse=function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"',l=o+o,d=!1,c=null,u=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(d=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+o),t.escapeFormulae instanceof RegExp?u=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(u=/^[=+\-@\t\r].*$/)}})(),RegExp(p(o),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,d);if("object"==typeof e[0])return f(c||Object.keys(e[0]),e,d)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],d);throw Error("Unable to serialize unrecognized input");function f(e,t,r){var o="",a=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),l=!Array.isArray(t[0]);if(a&&n){for(var d=0;d<e.length;d++)0<d&&(o+=i),o+=g(e[d],d);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var u=(a?e:t[c]).length,h=!1,f=a?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!a&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&a){for(var p=[],m=0;m<u;m++){var x=l?e[m]:m;p.push(t[c][x])}h=""===p.join("").trim()}if(!h){for(var b=0;b<u;b++){0<b&&!f&&(o+=i);var y=a&&l?e[b]:b;o+=g(t[c][y],b)}c<t.length-1&&(!r||0<u&&!f)&&(o+=s)}}return o}function g(e,t){var n,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,u&&"string"==typeof e&&u.test(e)&&(e="'"+e,s=!0),n=e.toString().replace(h,l),(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(n,a.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1))?o+n+o:n)}},a.RECORD_SEP="\x1e",a.UNIT_SEP="\x1f",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!n&&!!r.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=0xa00000,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=f,a.NetworkStreamer=d,a.FileStreamer=c,a.StringStreamer=u,a.ReadableStreamStreamer=h,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var n=e.config||{},i=[];return this.each(function(e){if(!("INPUT"===t(this).prop("tagName").toUpperCase()&&"file"===t(this).attr("type").toLowerCase()&&r.FileReader)||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)i.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},n)})}),s(),this;function s(){if(0===i.length)k(e.complete)&&e.complete();else{var r,n,s,l,d=i[0];if(k(e.before)){var c=e.before(d.file,d.inputElem);if("object"==typeof c){if("abort"===c.action)return r="AbortError",n=d.file,s=d.inputElem,l=c.reason,void(k(e.error)&&e.error({name:r},n,s,l));if("skip"===c.action)return void o();"object"==typeof c.config&&(d.instanceConfig=t.extend(d.instanceConfig,c.config))}else if("skip"===c)return void o()}var u=d.instanceConfig.complete;d.instanceConfig.complete=function(e){k(u)&&u(e,d.file,d.inputElem),o()},a.parse(d.file,d.instanceConfig)}}function o(){i.splice(0,1),s()}}),i&&(r.onmessage=function(e){e=e.data,void 0===a.WORKER_ID&&e&&(a.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=a.parse(e.input,e.config))&&r.postMessage({workerId:a.WORKER_ID,results:e,finished:!0})}),(d.prototype=Object.create(l.prototype)).constructor=d,(c.prototype=Object.create(l.prototype)).constructor=c,(u.prototype=Object.create(u.prototype)).constructor=u,(h.prototype=Object.create(l.prototype)).constructor=h,a})?r.apply(t,n):r)&&(e.exports=i)},9155:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(5155);let i=e=>{let{menuOpen:t,onClick:r}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("button",{onClick:r,className:"text-xl text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300",children:"☰"}),t&&(0,n.jsx)("div",{className:"absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden border border-gray-300 dark:border-gray-700 z-[999]",children:(0,n.jsx)("ul",{className:"text-sm text-gray-900 dark:text-gray-200",children:[{name:"YouTube（戸定梨香）",url:"https://youtube.com/@linca_tojou?si=tDAbk7IO_RccPD5m"},{name:"\uD835\uDD4F（戸定梨香）",url:"https://x.com/Tojou_Linca"},{name:"データ提供（きっくーのメモ帳）",url:"https://kicku-tw.blogspot.com/"},{name:"\uD835\uDD4F（かつき）",url:"https://x.com/katsu1101"}].map((e,t)=>(0,n.jsx)("li",{className:"border-b border-gray-200 dark:border-gray-700",children:(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"block pl-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700",children:e.name})},t))})})]})},s={オリジナル:{background:"#FFD700",color:"#000000"},"J-POP":{background:"#FF69B4",color:"#FFFFFF"},ドラえもん:{background:"#FFFFFF",color:"#1E90FF",boxShadow:"0 0 5px #FF69B4"},アニソン:{background:"#FF4500",color:"#FFFFFF"},ボカロ:{background:"#00CED1",color:"#FFFFFF"},ディズニー:{background:"#60B3E7",color:"#D2E6FA",border:"1px solid #243e81"},クリスマス:{background:"#00E000",color:"#E9423A"},ガンダム:{background:"#EBF7EE",color:"#E9423A",border:"2px solid #F9C13A",boxShadow:"0 0 5px #5DA0E7"},市民の歌:{background:"#008000",color:"#FFFFFF"}},o=e=>e?s[e]:{background:"#CCCCCC",color:"#000000"},a=e=>{let{genre:t,onClick:r}=e,i=o(t);return t?(0,n.jsx)("span",{className:"ml-1 px-2 py-0.5 text-xs rounded-md font-bold leading-none inline-flex   items-start cursor-pointer whitespace-nowrap",style:{backgroundColor:null==i?void 0:i.background,color:null==i?void 0:i.color,border:(null==i?void 0:i.border)||"none",boxShadow:(null==i?void 0:i.boxShadow)||"none",fontWeight:"bold",lineHeight:"1"},onClick:()=>r&&t&&r(t),children:t}):null},l={OP:{background:"#FFD700",color:"#000000"},主題歌:{background:"#FFD700",color:"#000000",border:"2px solid #F9C13A",boxShadow:"0 0 5px #5DA0E7"},テーマソング:{background:"#FFD700",color:"#000000",border:"2px solid #F9C13A",boxShadow:"0 0 5px #5DA0E7"},挿入歌:{background:"#FF4500",color:"#FFFFFF"},キャラソン:{background:"#FF69B4",color:"#FFFFFF"},CMソング:{background:"#00CED1",color:"#FFFFFF",border:"2px solid #F9C13A"},イメージソング:{background:"#00CED1",color:"#FFFFFF",border:"2px solid #F9C13A"},ED:{background:"#FFFFFF",color:"#1E90FF"}},d=e=>e?l[e]:{background:"#CCCCCC",color:"#000000"},c=e=>{let{opEd:t,onClick:r}=e,i=d(t);return t?(0,n.jsx)("span",{className:"ml-1 px-2 py-0.5 text-xs rounded-md font-bold leading-none inline-flex   items-start cursor-pointer whitespace-nowrap",style:{backgroundColor:null==i?void 0:i.background,color:null==i?void 0:i.color,border:(null==i?void 0:i.border)||"none",boxShadow:(null==i?void 0:i.boxShadow)||"none",fontWeight:"bold",lineHeight:"1"},onClick:()=>r&&t&&r(t),children:t}):null};var u=r(2115);let h=e=>{var t,r,i,s,o,a,l,d;let{song:c,onClose:h}=e,f=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=e=>{f.current&&!f.current.contains(e.target)&&h()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[h]),(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,n.jsxs)("div",{ref:f,className:"bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg w-96",children:[(0,n.jsxs)("h2",{className:"text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4",children:["♪ ",c.title]}),(0,n.jsx)("table",{className:"w-full border-collapse",children:(0,n.jsxs)("tbody",{children:[(null===(t=c.info)||void 0===t?void 0:t.release)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"リリース日"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.release})]}),(null===(r=c.info)||void 0===r?void 0:r.album)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"アルバム"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.album})]}),(null===(i=c.info)||void 0===i?void 0:i.genre)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"ジャンル"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.genre})]}),(null===(s=c.info)||void 0===s?void 0:s.lyricist)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"作詞"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.lyricist})]}),(null===(o=c.info)||void 0===o?void 0:o.composer)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"作曲"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.composer})]}),(null===(a=c.info)||void 0===a?void 0:a.arranger)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"編曲"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.arranger})]}),(null===(l=c.info)||void 0===l?void 0:l.work)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"作品名"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.work})]}),(null===(d=c.info)||void 0===d?void 0:d.opEd)&&(0,n.jsxs)("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[(0,n.jsx)("td",{className:"text-nowrap py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300",children:"OP/ED区分"}),(0,n.jsx)("td",{className:"py-2 text-gray-900 dark:text-gray-100",children:c.info.opEd})]})]})}),(0,n.jsx)("button",{className:"mt-4 w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none",onClick:h,children:"✖ 閉じる"})]})})},f=e=>{var t,r,i,s,o,l,d;let{videoData:f,songs:p,handleGenreClick:g}=e,[m,x]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=()=>{x(null)};return m&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[m]),(0,n.jsxs)("div",{className:"p-4 border rounded-lg shadow-md transition-transform duration-300 bg-gray-300 dark:bg-gray-700",children:[(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(f.id,"&t=0s"),target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,n.jsx)("img",{src:(null==f?void 0:null===(i=f.snippet)||void 0===i?void 0:null===(r=i.thumbnails)||void 0===r?void 0:null===(t=r.high)||void 0===t?void 0:t.url)||"https://img.youtube.com/vi/".concat(f.id,"/hqdefault.jpg"),alt:(null==f?void 0:null===(s=f.snippet)||void 0===s?void 0:s.title)||p[0].title,className:"w-full object-cover rounded-md h-48"})}),(null==f?void 0:null===(o=f.snippet)||void 0===o?void 0:o.title)&&(0,n.jsx)("p",{className:"mt-2 text-center font-semibold text-lg text-gray-900 dark:text-gray-100",children:f.snippet.title}),(0,n.jsxs)("p",{className:"mt-2 font-medium text-center text-lg flex flex-wrap items-start  space-x-2 text-gray-900 dark:text-gray-100",children:["♬ ",p[0].title,(0,n.jsx)("button",{className:"ml-2 px-2 pl-0 py-1 text-sm text-white rounded-md hover:bg-blue-700 focus:outline-none",onClick:()=>x(p[0].title),children:"ℹ️"}),(0,n.jsx)(a,{genre:null===(l=p[0].info)||void 0===l?void 0:l.genre,onClick:g}),(0,n.jsx)(c,{opEd:null===(d=p[0].info)||void 0===d?void 0:d.opEd,onClick:g})]}),m===p[0].title&&(0,n.jsx)(h,{song:p.find(e=>e.title===m),onClose:()=>x(null)})]})},p=e=>{var t,r,i,s,o;let{videoData:l,songs:d,handleGenreClick:f}=e,[p,g]=(0,u.useState)(null),m=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&g(null)};return p&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[p]),(0,n.jsxs)("div",{className:"p-4 border rounded-lg shadow-md transition-transform duration-300   bg-blue-100 dark:bg-blue-900 border-blue-500",children:[(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(l.id,"&t=0s"),target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,n.jsx)("img",{src:(null==l?void 0:null===(i=l.snippet)||void 0===i?void 0:null===(r=i.thumbnails)||void 0===r?void 0:null===(t=r.high)||void 0===t?void 0:t.url)||"https://img.youtube.com/vi/".concat(l.id,"/hqdefault.jpg"),alt:(null==l?void 0:null===(s=l.snippet)||void 0===s?void 0:s.title)||d[0].title,className:"w-full object-cover rounded-md h-32"})}),(null==l?void 0:null===(o=l.snippet)||void 0===o?void 0:o.title)&&(0,n.jsx)("p",{className:"mt-2 text-center font-semibold text-lg text-gray-900 dark:text-gray-100",children:l.snippet.title}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("ul",{className:"mt-2 space-y-2 text-gray-800 dark:text-gray-300",children:d.map(e=>{var t,r;return(0,n.jsxs)("li",{className:"text-lg flex flex-wrap items-center space-x-2",children:[(0,n.jsxs)("a",{href:"https://www.youtube.com/watch?v=".concat(e.videoId).concat(e.timestamp?"&t=".concat(e.timestamp,"s"):""),target:"_blank",rel:"noopener noreferrer",className:"block hover:underline hover:text-blue-500",children:["♪ ",e.title]}),(0,n.jsx)("button",{className:"ml-2 px-2 pl-0 py-1 text-sm text-white rounded-md hover:bg-blue-700 focus:outline-none",onClick:()=>g(p===e.title?null:e.title),children:"ℹ️"}),(0,n.jsx)(a,{genre:null===(t=e.info)||void 0===t?void 0:t.genre,onClick:f}),(0,n.jsx)(c,{opEd:null===(r=e.info)||void 0===r?void 0:r.opEd,onClick:f}),p===e.title&&(0,n.jsx)(h,{song:d.find(e=>e.title===p),onClose:()=>g(null)})]},e.timestamp)})})})]})},g=e=>{var t;let{videoData:r,songs:i,handleGenreClick:s}=e;return(null===(t=i[0])||void 0===t?void 0:t.source)===1?(0,n.jsx)(f,{videoData:r,songs:i,handleGenreClick:s}):(0,n.jsx)(p,{videoData:r,songs:i,handleGenreClick:s})};var m=r(9159),x=r.n(m);let b="/song-list-linca-tojou";function y(){let[e,t]=(0,u.useState)([]),[r,s]=(0,u.useState)({}),[o,a]=(0,u.useState)(""),[l,d]=(0,u.useState)(null),[c,h]=(0,u.useState)(!1),[f,p]=(0,u.useState)(!1),[m,y]=(0,u.useState)(!1),v=e=>{a("#"+e)},k=()=>{let e=()=>{let t=window.scrollY;t>0&&(window.scrollTo(0,t-t/5),requestAnimationFrame(e))};requestAnimationFrame(e)};(0,u.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat(b,"/songinfo.csv")),t=await e.text(),{data:r}=x().parse(t,{header:!0,skipEmptyLines:!0}),n={};r.forEach(e=>{n[e.title]=e}),d(n)}catch(e){console.error("Failed to load songinfo.csv:",e)}})()},[]),(0,u.useEffect)(()=>{l&&(async()=>{try{let e=await fetch("".concat(b,"/songs.json")),r=await e.json(),n=[...r.songs].sort((e,t)=>e.date!==t.date?t.date.localeCompare(e.date):(e.timestamp||0)-(t.timestamp||0)).map(e=>({...e,info:l[e.title]||null}));t(n),s(r.videos||{})}catch(e){console.error("Failed to load songs.json:",e)}})()},[l]),(0,u.useEffect)(()=>{p(!0);let e=()=>{h(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,u.useEffect)(()=>{let e=e=>{e.target.closest(".menu-container")||y(!1)};return m?document.addEventListener("click",e):document.removeEventListener("click",e),()=>{document.removeEventListener("click",e)}},[m]);let _=e.filter(e=>{var t,n,i,s,a,l;let d=r[e.videoId];if(o.startsWith("#")){let t=o.slice(1).toLowerCase();return(null===(s=e.info)||void 0===s?void 0:null===(i=s.genre)||void 0===i?void 0:i.toLowerCase())===t||(null===(l=e.info)||void 0===l?void 0:null===(a=l.opEd)||void 0===a?void 0:a.toLowerCase())===t}return e.title.toLowerCase().includes(o.toLowerCase())||e.date.includes(o)||((null==d?void 0:null===(n=d.snippet)||void 0===n?void 0:null===(t=n.title)||void 0===t?void 0:t.toLowerCase())||"").includes(o.toLowerCase())}),w={};return(_.forEach(e=>{w[e.date]||(w[e.date]={}),w[e.date][e.videoId]||(w[e.date][e.videoId]=[]),w[e.date][e.videoId].push(e)}),f)?(0,n.jsxs)("main",{className:"max-w-4xl mx-auto p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900",children:[(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-0",children:(0,n.jsxs)("div",{className:"max-w-4xl mx-auto flex flex-col items-center transition-all",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full px-4 pt-2  ".concat(c?"opacity-0 h-0":"opacity-100 h-auto"),children:[(0,n.jsx)("h1",{className:"text-2xl md:text-4xl font-bold whitespace-nowrap",children:"戸定梨香ちゃんの歌リスト"}),(0,n.jsx)(i,{menuOpen:m,onClick:()=>y(!m)})]}),(0,n.jsxs)("div",{className:"max-w-4xl mx-auto flex items-center w-full z-[998] p-0",children:[(0,n.jsx)("div",{className:"mr-2 h-full p-1 cursor-pointer",onClick:()=>{k(),a("")},children:(0,n.jsx)("img",{src:"".concat(b,"/icon-192x192.png"),alt:"Logo",className:"w-12 h-12"})}),(0,n.jsxs)("div",{className:"flex-1 relative pr-3",children:[(0,n.jsx)("input",{type:"text",placeholder:"曲名・日付・動画タイトルで検索",value:o,onChange:e=>a(e.target.value),className:"w-full p-2 border border-gray-400 rounded-md   dark:bg-gray-800 dark:text-gray-100"}),o&&(0,n.jsx)("button",{onClick:()=>a(""),className:"absolute right-4 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100   rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-400 dark:hover:bg-gray-600 transition",children:"✕"})]})]})]})}),(0,n.jsx)("div",{className:"mt-24",children:0==Object.entries(w).length?(0,n.jsx)("p",{className:"text-center text-gray-500",children:"検索結果がありません"}):Object.entries(w).map(e=>{let[t,i]=e;return(0,n.jsxs)("section",{className:"mb-8",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold border-b-2 pb-2",children:t}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:Object.entries(i).map(e=>{let[t,i]=e;return(0,n.jsx)(g,{videoData:r[t],songs:i,handleGenreClick:v},t)})})]},t)})})]}):(0,n.jsx)("div",{children:"Loading..."})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(2599)),_N_E=e.O()}]);