!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){t.exports=function(){return n(3)('!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}String.prototype.inString=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if("object"!==e(n))throw new Error("Argument is not an array");return n.find(function(n){return n===t.toString()})},String.prototype.in=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("object"!==e(n))throw new Error("Argument is not an array");return n.find(function(n){return n===t.charCodeAt(r)})},String.prototype.split=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,e=[],r="",i=0;i<this.length;i++){if(e.length===n)return e;""===t?e.push(this[i]):this[i]!==t?r+=this[i]:(e.push(r),r="")}return""!==r.trim()&&e.push(r),e},String.prototype.reverseStr=function(){for(var t="",n=this.length-1;n>=0;n--)t+=this[n];return t},String.prototype.multipleSpaces=function(){for(var t="",n=0;n<this.length;n++)this.in([32,160,65279],n)&&this.in([32,160,65279],n+1)||(t+=this[n]);return t},String.prototype.hyphenSpaces=function(){for(var t="",n=0;n<this.length;n++)this.in([32,160,65279],n)&&(this.in([45,8208],n-1)||this.in([45,8208],n+1))||(t+=this[n]);return t}},function(t,n){Array.prototype.swap=function(t,n){var e=this[n];this[n]=this[t],this[t]=e},Array.prototype.isort=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.length-1,r=n+1;r<=e;r++)for(var i=r;i>0&&t(this[i],this[i-1]);i--)this.swap(i-1,i);return this},Array.prototype.qsort=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.length-1;if(void 0===t&&(t=function(t,n){return t<n?1:0}),"function"!=typeof t)throw new Error("Argument compareFn must be a function");if(e-n<=32)return this.isort(t,n,e);for(var r=n,i=e,o=this[Math.floor(n+Math.random()*(e+1-n))];r<=i;){for(;t(this[r],o);)r++;for(;t(o,this[i]);)i--;r<=i&&this.swap(r++,i--)}return n<i&&this.qsort(t,n,i),e>r&&this.qsort(t,r,e),this}},function(t,n,e){"use strict";e.r(n);e(0),e(1);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.goodSymbol=function(t){return n.goodSymbols.find(function(n){return t>=n[0]&&t<=n[1]})},this.hyphen=function(t,e){return n.goodSymbol(t.charCodeAt(e-1))&&n.goodSymbol(t.charCodeAt(e+1))},this.irrationalNumber=function(t,n){return Number.isInteger(Number.parseInt(t[n-1]))&&Number.isInteger(Number.parseInt(t[n+1]))},this.goodSymbols=[[48,57],[97,122],[1072,1103],[1105,1105]]}return function(t,n,e){n&&r(t.prototype,n),e&&r(t,e)}(t,[{key:"breakText",value:function(t){t=t.toLowerCase();for(var n=[],e="",r=0;r<t.length;r++)this.goodSymbol(t.charCodeAt(r))||t.in([45,8208],r)&&this.hyphen(t,r)||t.in([44],r)&&this.irrationalNumber(t,r)?e+=t[r]:""!==e.trim()&&(n.push(e),e="");return""!==e.trim()&&n.push(e),n}}]),t}(),o=[["вшись","вши","в"],["ывшись","ившись","ывши","ивши","ив","ыв"],[6,5,4,3,2,1]],s=[["его","ого","ему","ому","ими","ыми","ее","ие","ые","ое","ей","ий","ый","ой","ем","им","ым","ом","их","ых","ую","юю","ая","яя","ою","ею"],[3,2]],u=[["ем","нн","вш","ющ","щ"],["ивш","ывш","ующ"],[3,2,1]],a=[["ся","сь"],[2]],l=[["ете","йте","ешь","нно","ла","на","ли","ем","ло","но","ет","ют","ны","ть","н","й","л"],["ейте","уйте","ует","уют","ило","ыло","ено","ила","ыла","ена","ите","или","ены","ить","ыть","ишь","ыли","ей","уй","ил","ыл","им","ым","ен","ят","ит","ыт","ую","ю"],[4,3,2,1]],f=[["иями","ями","ами","ией","иях","иям","ием","ев","ов","ие","ье","еи","ии","ей","ой","ий","ям","ем","ам","ом","ах","ях","ию","ью","ю","ия","ья","ю","и","о","у","ы","ь","й","е","а","я"],[4,3,2,1]],c=[["ейше","ейш"],[4,3]],h=[["ость","ост"],[4,3]];function g(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.vowelCodes=[1072,1077,1105,1080,1086,1091,1099,1101,1102,1103]}return function(t,n,e){n&&p(t.prototype,n),e&&p(t,e)}(t,[{key:"getRV",value:function(t){for(var n=0;n<t.length-1;){if(!t[n].in(g(this.vowelCodes).concat([1098,1100]))&&t[n+1].in(this.vowelCodes))return[t.slice(0,n+=2),t.slice(n)];n++}return[t,""]}},{key:"getR1",value:function(t){for(var n=0;n<t.length-1;){if(t[n].in(this.vowelCodes)&&!t[n+1].in(g(this.vowelCodes).concat([1098,1100])))return[t.slice(0,n+=2),t.slice(n)];n++}return[t,""]}},{key:"getR2",value:function(t){return this.getR1(t)}},{key:"stemWords",value:function(t){for(var n=[],e=0;e<t.length;e++)n.push(this.stemWord(t[e]));return n}},{key:"stemWord",value:function(t){var n,e,r,i,o,s,u;if(t.length<=2)return t;var a=[];t=t.split("-");for(var l=0;l<t.length;l++)if(n=this.getRV(t[l])[0],!1!==(i=this.firstStep(t[l]))){o=this.secondStep(i),e=this.getR1(n+o),r=this.getR2(e[1]),s=this.thirdStep(r[1]);var f=this.getRV(e[0]+r[0]+s);u=this.fourthStep(f[1]),a.push(f[0]+u)}else a.push(t[l]);return t.length>=2?a.join("-"):a[0]}},{key:"findEnding",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="",i=[],o=0,s=t[1];3===t.length&&(s=t[2]);for(var u=0;u<s.length;u++)if(n.length>=s[u]&&(o=n.length-s[u],r=n.slice(o),i=3===t.length?n.in([1072,1103],o-1)||void 0===n[o-1]&&e?t[0]:t[1]:t[0],r.inString(i)))return this.unDoubleN(n.slice(0,n.length-r.length));return!1}},{key:"firstStep",value:function(t){var n,e,r=!1,i=this.getRV(t)[0],c=this.getRV(t)[1];return!1!==(e=this.findEnding(o,t))?this.getRV(e)[1]:""!==c&&(!1!==(e=this.findEnding(a,c))&&(r=!0,c=this.unDoubleN(e)),!1!==(e=this.findEnding(s,c))?!1!==(n=this.findEnding(u,e,!!i[i.length-1].inString(["а","я"])))?n:e:!1!==(e=this.findEnding(l,c,!!i[i.length-1].inString(["а","я"])))?e:r||!1===(e=this.findEnding(f,c))?c:e)}},{key:"secondStep",value:function(t){return"и"===t[t.length-1]?t.slice(0,t.length-1):t}},{key:"thirdStep",value:function(t){if(t.length>=3){var n=this.findEnding(h,t);return!1!==n?n:t}return t}},{key:"fourthStep",value:function(t){var n;return(n=this.unDoubleN(t))!==t?n:!1!==(n=this.findEnding(c,t))?this.unDoubleN(n):"ь"===t[t.length-1]?t.slice(0,t.length-1):t}},{key:"unDoubleN",value:function(t){return"н"===t[t.length-1]&&"н"===t[t.length-2]?t.slice(0,t.length-1):t}}]),t}(),v=["дела","мног","может","быт","бол","сам","долж","друг","наш","вне","конец","сказа","такж","видел","мо","никогд","сейчас","из","на","тольк","или","немн","все","еще","так","зат","тот","их","там","этот","они","те","посл","как","во","он","имеет","её","зде","его","если","оно","за","подойд","мог","кажд","для","откуд","имет","имел","пот","был","до","явля","межд","но","от","иди","через","тож","под","над","очен","пут","мы","хорош","что","где","котор","пок","кто","кем","хотел","ты","тво","ве","видет","вопрос","данн","кардинальн","да","однак","же","называ","непривычн","нескольк","полност","когд","тем","лиш","едва","не","это","он","она","оно","они","нег","их","а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function y(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,n,e){n&&y(t.prototype,n),e&&y(t,e)}(t,null,[{key:"countDescriptors",value:function(t){for(var n={},e=0;e<t.length;e++)n[t[e]]=n.hasOwnProperty(t[e])?n[t[e]]+1:1;return n}},{key:"cleanDescriptors",value:function(t){for(var n in t)-1!==v.indexOf(n)&&delete t[n]}},{key:"compressDescriptors",value:function(t){for(var n=[],e=Object.keys(t),r=Object.values(t),i=0;i<Object.keys(t).length;i++)n.push([e[i],r[i]]);n=n.qsort(function(t,n){return t[1]>n[1]?1:t[1]===n[1]&&t[0]>n[0]?1:void 0}),t={};for(var o=0;o<n.length&&o<20;o++)t[n[o][0]]=n[o][1];return t}},{key:"getDescriptors",value:function(t){var n=this.countDescriptors(t);return this.cleanDescriptors(n),this.compressDescriptors(n)}}]),t}(),m=new i,S=new d;onmessage=function(t){try{"break"===t.data.action?postMessage({action:"break",result:m.breakText(t.data.text)}):"stem"===t.data.action?postMessage({action:"stem",result:S.stemWords(t.data.words)}):"descriptors"===t.data.action&&postMessage({action:t.data.action,result:b.getDescriptors(t.data.words)})}catch(t){postMessage({action:"error",error:t.stack})}}}]);',n.p+"worker.bundle.js")}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}String.prototype.inString=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if("object"!==n(e))throw new Error("Argument is not an array");return e.find(function(e){return e===t.toString()})},String.prototype.in=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("object"!==n(e))throw new Error("Argument is not an array");return e.find(function(e){return e===t.charCodeAt(r)})},String.prototype.split=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=[],r="",i=0;i<this.length;i++){if(n.length===e)return n;""===t?n.push(this[i]):this[i]!==t?r+=this[i]:(n.push(r),r="")}return""!==r.trim()&&n.push(r),n},String.prototype.reverseStr=function(){for(var t="",e=this.length-1;e>=0;e--)t+=this[e];return t},String.prototype.multipleSpaces=function(){for(var t="",e=0;e<this.length;e++)this.in([32,160,65279],e)&&this.in([32,160,65279],e+1)||(t+=this[e]);return t},String.prototype.hyphenSpaces=function(){for(var t="",e=0;e<this.length;e++)this.in([32,160,65279],e)&&(this.in([45,8208],e-1)||this.in([45,8208],e+1))||(t+=this[e]);return t}},function(t,e){Array.prototype.swap=function(t,e){var n=this[e];this[e]=this[t],this[t]=n},Array.prototype.isort=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.length-1,r=e+1;r<=n;r++)for(var i=r;i>0&&t(this[i],this[i-1]);i--)this.swap(i-1,i);return this},Array.prototype.qsort=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.length-1;if(void 0===t&&(t=function(t,e){return t<e?1:0}),"function"!=typeof t)throw new Error("Argument compareFn must be a function");if(n-e<=32)return this.isort(t,e,n);for(var r=e,i=n,o=this[Math.floor(e+Math.random()*(n+1-e))];r<=i;){for(;t(this[r],o);)r++;for(;t(o,this[i]);)i--;r<=i&&this.swap(r++,i--)}return e<i&&this.qsort(t,e,i),n>r&&this.qsort(t,r,n),this}},function(t,e,n){"use strict";var r=window.URL||window.webkitURL;t.exports=function(t,e){try{try{var n;try{(n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),n=n.getBlob()}catch(e){n=new Blob([t])}return new Worker(r.createObjectURL(n))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(t){if(!e)throw Error("Inline worker is not supported");return new Worker(e)}}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(2);var r=function(t,e){return t>e?1:0},i=function(t,e){if(t[1]>e[1])return 1};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(t,null,[{key:"countNGrams",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n={};return t.map(function(t){t=t.split("-");for(var r=0;r<t.length;r++)if(t[r].length>=e)for(var i=0;i<t[r].length-e+1;i++){var o=t[r].slice(i,i+e);n[o]=n.hasOwnProperty(o)?n[o]+1:1}}),n}}]),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(t,null,[{key:"encodeBase64",value:function(t){return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode(parseInt(e,16))}))}},{key:"decodeBase64",value:function(t){return decodeURIComponent(Array.prototype.map.call(atob(t),function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}}]),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.goodSymbol=function(t){return e.goodSymbols.find(function(e){return t>=e[0]&&t<=e[1]})},this.hyphen=function(t,n){return e.goodSymbol(t.charCodeAt(n-1))&&e.goodSymbol(t.charCodeAt(n+1))},this.irrationalNumber=function(t,e){return Number.isInteger(Number.parseInt(t[e-1]))&&Number.isInteger(Number.parseInt(t[e+1]))},this.goodSymbols=[[48,57],[97,122],[1072,1103],[1105,1105]]}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"breakText",value:function(t){t=t.toLowerCase();for(var e=[],n="",r=0;r<t.length;r++)this.goodSymbol(t.charCodeAt(r))||t.in([45,8208],r)&&this.hyphen(t,r)||t.in([44],r)&&this.irrationalNumber(t,r)?n+=t[r]:""!==n.trim()&&(e.push(n),n="");return""!==n.trim()&&e.push(n),e}}]),t}(),h=[["вшись","вши","в"],["ывшись","ившись","ывши","ивши","ив","ыв"],[6,5,4,3,2,1]],f=[["его","ого","ему","ому","ими","ыми","ее","ие","ые","ое","ей","ий","ый","ой","ем","им","ым","ом","их","ых","ую","юю","ая","яя","ою","ею"],[3,2]],d=[["ем","нн","вш","ющ","щ"],["ивш","ывш","ующ"],[3,2,1]],p=[["ся","сь"],[2]],g=[["ете","йте","ешь","нно","ла","на","ли","ем","ло","но","ет","ют","ны","ть","н","й","л"],["ейте","уйте","ует","уют","ило","ыло","ено","ила","ыла","ена","ите","или","ены","ить","ыть","ишь","ыли","ей","уй","ил","ыл","им","ым","ен","ят","ит","ыт","ую","ю"],[4,3,2,1]],v=[["иями","ями","ами","ией","иях","иям","ием","ев","ов","ие","ье","еи","ии","ей","ой","ий","ям","ем","ам","ом","ах","ях","ию","ью","ю","ия","ья","ю","и","о","у","ы","ь","й","е","а","я"],[4,3,2,1]],y=[["ейше","ейш"],[4,3]],m=[["ость","ост"],[4,3]];function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.vowelCodes=[1072,1077,1105,1080,1086,1091,1099,1101,1102,1103]}return function(t,e,n){e&&S(t.prototype,e),n&&S(t,n)}(t,[{key:"getRV",value:function(t){for(var e=0;e<t.length-1;){if(!t[e].in(b(this.vowelCodes).concat([1098,1100]))&&t[e+1].in(this.vowelCodes))return[t.slice(0,e+=2),t.slice(e)];e++}return[t,""]}},{key:"getR1",value:function(t){for(var e=0;e<t.length-1;){if(t[e].in(this.vowelCodes)&&!t[e+1].in(b(this.vowelCodes).concat([1098,1100])))return[t.slice(0,e+=2),t.slice(e)];e++}return[t,""]}},{key:"getR2",value:function(t){return this.getR1(t)}},{key:"stemWords",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(this.stemWord(t[n]));return e}},{key:"stemWord",value:function(t){var e,n,r,i,o,s,a;if(t.length<=2)return t;var u=[];t=t.split("-");for(var c=0;c<t.length;c++)if(e=this.getRV(t[c])[0],!1!==(i=this.firstStep(t[c]))){o=this.secondStep(i),n=this.getR1(e+o),r=this.getR2(n[1]),s=this.thirdStep(r[1]);var l=this.getRV(n[0]+r[0]+s);a=this.fourthStep(l[1]),u.push(l[0]+a)}else u.push(t[c]);return t.length>=2?u.join("-"):u[0]}},{key:"findEnding",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="",i=[],o=0,s=t[1];3===t.length&&(s=t[2]);for(var a=0;a<s.length;a++)if(e.length>=s[a]&&(o=e.length-s[a],r=e.slice(o),i=3===t.length?e.in([1072,1103],o-1)||void 0===e[o-1]&&n?t[0]:t[1]:t[0],r.inString(i)))return this.unDoubleN(e.slice(0,e.length-r.length));return!1}},{key:"firstStep",value:function(t){var e,n,r=!1,i=this.getRV(t)[0],o=this.getRV(t)[1];return!1!==(n=this.findEnding(h,t))?this.getRV(n)[1]:""!==o&&(!1!==(n=this.findEnding(p,o))&&(r=!0,o=this.unDoubleN(n)),!1!==(n=this.findEnding(f,o))?!1!==(e=this.findEnding(d,n,!!i[i.length-1].inString(["а","я"])))?e:n:!1!==(n=this.findEnding(g,o,!!i[i.length-1].inString(["а","я"])))?n:r||!1===(n=this.findEnding(v,o))?o:n)}},{key:"secondStep",value:function(t){return"и"===t[t.length-1]?t.slice(0,t.length-1):t}},{key:"thirdStep",value:function(t){if(t.length>=3){var e=this.findEnding(m,t);return!1!==e?e:t}return t}},{key:"fourthStep",value:function(t){var e;return(e=this.unDoubleN(t))!==t?e:!1!==(e=this.findEnding(y,t))?this.unDoubleN(e):"ь"===t[t.length-1]?t.slice(0,t.length-1):t}},{key:"unDoubleN",value:function(t){return"н"===t[t.length-1]&&"н"===t[t.length-2]?t.slice(0,t.length-1):t}}]),t}();function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=new l,B=new w,O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&k(t.prototype,e),n&&k(t,n)}(t,null,[{key:"handleRequest",value:function(t){var e=L.breakText(t.multipleSpaces().hyphenSpaces());return B.stemWords(e)}},{key:"calcWeights",value:function(t,e,n){for(var r=0,i=0,o=0,s=[],a=0;a<t.length;a++){var u=e.indexOf(t[a]);-1!==u&&(i++,r+=n[u])}if(i===t.length)for(var c=0;c<t.length;c++)s.push(n[e.indexOf(t[c])]/r);else if(i>0&&i<t.length){r+=(o=r/i)*(t.length-i);for(var l=0;l<t.length;l++){var h=e.indexOf(t[l]);s.push(-1!==h?n[h]/r:o/r)}}else for(var f=0;f<t.length;f++)s.push(1/t.length);return s}},{key:"calculateR",value:function(t){for(var e,n={},r=[],o=0;o<localStorage.length;o++){var s=0;try{if("document"===(e=JSON.parse(localStorage.getItem(localStorage.key(o)))).type){0;for(var a=this.calcWeights(t,e.descriptors,e.n),c=0;c<t.length;c++){var l=e.descriptors.indexOf(t[c]);-1!==l&&(l<4?s+=1*a[c]:l<10?s+=.5*a[c]:l<20&&(s+=1/3*a[c]))}s=Math.round(s/t.length*100),r.push([u.decodeBase64(localStorage.key(o)),s])}}finally{continue}}r.qsort(i);for(var h=0;h<r.length;h++)n[r[h][0]]=r[h][1];return n}}]),t}();function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){e&&E(t.prototype,e),n&&E(t,n)}(t,null,[{key:"renderSteps",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.map(function(t,r){e[r]?t.classList.add("animate"):t.classList.remove("animate"),n[r]?t.classList.add("active"):t.classList.remove("active")})}},{key:"loader",value:function(t){document.querySelector(".lds-ellipsis").attributeStyleMap.set("opacity",t?"1":"0")}},{key:"createElement",value:function(t,e,n){var r;return r=document.createElement(t),e&&(r.className=e),n&&(r.innerHTML=n),r}},{key:"createLine",value:function(t,e,n){var r,i;return r=this.createElement("div","line"),i=this.createElement("div","number",t+1),r.appendChild(i),i=this.createElement("div","word",e),r.appendChild(i),n&&(i=this.createElement("div","word",n),r.appendChild(i)),r}},{key:"print",value:function(t,e){var n,r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.length?(t.innerHTML="",e.map(function(e,o){n=r.createLine(o,e,i[o]),t.appendChild(n)})):(t.innerHTML="",t.appendChild(this.createLine(0,"","")))}},{key:"printDocuments",value:function(t,e){t.innerHTML="";for(var n=Object.keys(e),r=Object.values(e),i=0,o=0;o<n.length;o++)if(0!==r[o]){i++;var s=this.createElement("div","document"),a=this.createElement("div","num",i);s.appendChild(a),a=this.createElement("div","title",n[o]+"..."),s.appendChild(a),a=this.createElement("div","docinfo","Релевантность: ".concat(r[o],"%")),s.appendChild(a),s.classList.add("animation"),t.appendChild(s)}return i}}]),t}(),C=n(0);function x(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var q=new(n.n(C).a),N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=Object.freeze({isInputChanged:!0,isSearchBoxOpen:!1,direction:1,wordList:[],stemmedList:[],nGramKeys:[],nGramValues:[],descriptorsKeys:[],descriptorsValues:[],currentList:["wordList"]}),this.input=document.querySelector("textarea"),this.output=document.querySelector(".linesbox"),this.lineNumberBox=document.querySelector(".lines"),this.searchButton=document.querySelector(".searchbutton"),this.search=document.querySelector(".search"),this.searchInput=document.querySelector(".searchinput"),this.documentsBox=document.querySelector(".documents"),this.breakWordButton=document.querySelector("a[data-type=breaktext]"),this.stemmingButton=document.querySelector("a[data-type=stemming]"),this.podButton=document.querySelector("a[data-type=pod]"),this.buttons=[this.breakWordButton,this.stemmingButton,this.podButton],this.ascSortButton=document.querySelector("div[data-type=asc]"),this.descSortButton=document.querySelector("div[data-type=desc]"),this.nGramButton=document.querySelector(".ngram"),this.directionButton=document.querySelector(".direction"),this.fileLoader=document.querySelector("#fileloader"),this.breakWordButtonHandler=this.breakWordButtonHandler.bind(this),this.stemmingButtonHandler=this.stemmingButtonHandler.bind(this),this.podButtonHandler=this.podButtonHandler.bind(this),this.workerHandler=this.workerHandler.bind(this),this.createListeners()}return function(t,e,n){e&&R(t.prototype,e),n&&R(t,n)}(t,[{key:"dispatch",value:function(t,e){this.state=Object.freeze(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){M(t,e,n[e])})}return t}({},t,e)),console.info(this.state)}},{key:"getSortedArray",value:function(t){var e,n,i=this.state,o=i.currentList,s=i.direction,a=[],u=[],c=[];if(2===o.length){e=t.hasOwnProperty("side")?t.side:1,n=function(t,n){return t[e]<n[e]?1:0},t.hasOwnProperty("order")&&"desc"===t.order&&(n=function(t,n){return t[e]>n[e]?1:0});for(var l=0;l<this.state[o[0]].length;l++){var h=s?this.state[o[0]][l]:this.state[o[0]][l].toString().reverseStr(),f=s?this.state[o[1]][l]:this.state[o[1]][l].toString().reverseStr();a.push([h,f])}return a.qsort(n).map(function(t){u.push(s?t[0]:t[0].toString().reverseStr()),c.push(s?t[1]:t[1].toString().reverseStr())}),[u,c]}return t.hasOwnProperty("order")&&(n="desc"===t.order?r:void 0),a=this.state[o[0]].slice(),[a=s?a.qsort(n):(a=a.map(function(t){return t.toString().reverseStr()})).qsort(n).map(function(t){return t.toString().reverseStr()})]}},{key:"sortHandler",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.state.currentList;if("object"!==A(n)||!n.length)return!1;var r=this.getSortedArray(e);j.print.apply(j,[this.output].concat(x(r)))}},{key:"createListeners",value:function(){var t=this,e=new FileReader;e.addEventListener("loadend",function(e){t.input.value=e.target.result,t.dispatch(t.state,{isInputChanged:!0})}),this.fileLoader.addEventListener("change",function(t){var n=t.target.files[0];e.readAsText(n)}),this.ascSortButton.addEventListener("click",function(e){return t.sortHandler(e)}),this.descSortButton.addEventListener("click",function(e){return t.sortHandler(e,{order:"desc"})}),this.directionButton.addEventListener("click",function(e){t.directionButton.attributeStyleMap.set("transform","rotateZ(".concat(CSS.deg(t.state.direction?180:0),")")),t.dispatch(t.state,{direction:!t.state.direction})}),this.searchButton.addEventListener("click",function(e){t.state.isSearchBoxOpen?(t.search.attributeStyleMap.set("opacity","0"),t.search.attributeStyleMap.set("pointer-events","none"),t.searchInput.classList.remove("animation"),t.documentsBox.classList.remove("animation"),t.searchButton.classList.remove("close")):(t.search.attributeStyleMap.set("opacity","1"),t.search.attributeStyleMap.set("pointer-events","unset"),t.searchInput.classList.add("animation"),t.documentsBox.classList.add("animation"),t.searchButton.classList.add("close")),t.dispatch(t.state,{isSearchBoxOpen:!t.state.isSearchBoxOpen})}),this.searchInput.addEventListener("change",function(e){if(""!==e.target.value.trim()){var n=O.handleRequest(t.searchInput.value),r=O.calculateR(n);t.search.style.background="rgba(255,255,255, 0.95)",t.documentsBox.attributeStyleMap.set("padding-left",CSS.px(15)),j.printDocuments(t.documentsBox,r)||(t.documentsBox.textContent="По вашему запросу ничего не найдено",t.documentsBox.attributeStyleMap.set("padding-left",CSS.px(20)))}else t.documentsBox.innerHTML="",t.search.style.background="rgba(0, 0, 0, 0.2)"}),this.nGramButton.addEventListener("click",function(e){if(t.state.wordList.length){var n=s.countNGrams(t.state.wordList,3);t.dispatch(t.state,{nGramKeys:Object.keys(n),nGramValues:Object.values(n),currentList:["nGramKeys","nGramValues"]}),j.print(t.output,t.state.nGramKeys,t.state.nGramValues)}}),this.breakWordButton.addEventListener("click",this.breakWordButtonHandler),this.stemmingButton.addEventListener("click",this.stemmingButtonHandler),this.podButton.addEventListener("click",this.podButtonHandler),document.querySelector(".outputbox").addEventListener("click",function(t){"percent"===t.target.className&&(document.querySelector("main").attributeStyleMap.set("grid-template-columns","".concat(CSS.percent(100-t.target.dataset.percent)," ").concat(CSS.percent(t.target.dataset.percent))),t.target.dataset.percent=125-t.target.dataset.percent)}),this.input.addEventListener("change",function(e){t.dispatch({isInputChanged:!0})}),q.addEventListener("message",this.workerHandler)}},{key:"workerHandler",value:function(t){var e=t.data;if("break"===e.action)j.print(this.output,e.result),j.renderSteps(this.buttons,[!0,!0],[!0]),this.dispatch(this.state,{wordList:e.result,isInputChanged:!1,stemmedList:[],currentList:["wordList"]});else if("stem"===e.action)j.print(this.output,this.state.wordList,e.result),j.renderSteps([this.stemmingButton,this.podButton],[!0,!0],[!0]),this.dispatch(this.state,{stemmedList:e.result,currentList:["wordList","stemmedList"]});else if("descriptors"===e.action){var n=Object.keys(e.result),r=Object.values(e.result);localStorage.setItem(u.encodeBase64(this.input.value.split(" ",7).join(" ")),JSON.stringify({descriptors:n,n:r,type:"document"})),j.print(this.output,n,r),j.renderSteps([this.podButton],[!0],[!0]),this.dispatch(this.state,{descriptorsKeys:n,descriptorsValues:r,currentList:["descriptorsKeys","descriptorsValues"]})}else console.error(t.data.error);j.loader(!1)}},{key:"breakWordButtonHandler",value:function(t){t.preventDefault();var e=this.state,n=e.isInputChanged,r=e.wordList;e.sortedList;if(!n)return this.dispatch(this.state,{currentList:["wordList"]}),j.print(this.output,r),j.renderSteps(this.buttons,[!0,!0],[!0]),!1;j.loader(!0),q.postMessage({action:"break",text:this.input.value.multipleSpaces().hyphenSpaces()})}},{key:"stemmingButtonHandler",value:function(t){t.preventDefault();var e=this.state,n=e.wordList,r=e.stemmedList;if(r.length)return this.dispatch(this.state,{currentList:["wordList","stemmedList"]}),j.print(this.output,n,r),j.renderSteps([this.stemmingButton,this.podButton],[!0,!0],[!0]),!1;j.loader(!0),q.postMessage({action:"stem",words:n.slice()})}},{key:"podButtonHandler",value:function(t){var e=this.state.stemmedList;t.preventDefault(),j.loader(!0),q.postMessage({action:"descriptors",words:e.slice()})}}]),t}();n(4),n(5),new N}]);