(this.webpackChunk_msteams_react_web_client=this.webpackChunk_msteams_react_web_client||[]).push([[574626],{690784:(t,r,e)=>{var o=e(212218)(e(587809),"DataView");t.exports=o},180345:(t,r,e)=>{var o=e(807732),n=e(968386),a=e(2909),s=e(458865),i=e(87225);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},796779:(t,r,e)=>{var o=e(189546),n=e(398316),a=e(902719),s=e(631683),i=e(577051);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},342587:(t,r,e)=>{var o=e(212218)(e(587809),"Map");t.exports=o},525801:(t,r,e)=>{var o=e(678436),n=e(603154),a=e(687181),s=e(328929),i=e(247241);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},653504:(t,r,e)=>{var o=e(212218)(e(587809),"Promise");t.exports=o},875829:(t,r,e)=>{var o=e(212218)(e(587809),"Set");t.exports=o},993551:(t,r,e)=>{var o=e(525801),n=e(77904),a=e(941775);function s(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new o;++r<e;)this.add(t[r])}s.prototype.add=s.prototype.push=n,s.prototype.has=a,t.exports=s},195181:(t,r,e)=>{var o=e(796779),n=e(225200),a=e(406038),s=e(500366),i=e(228973),c=e(447013);function u(t){var r=this.__data__=new o(t);this.size=r.size}u.prototype.clear=n,u.prototype.delete=a,u.prototype.get=s,u.prototype.has=i,u.prototype.set=c,t.exports=u},139829:(t,r,e)=>{var o=e(587809).Symbol;t.exports=o},449592:(t,r,e)=>{var o=e(587809).Uint8Array;t.exports=o},799355:(t,r,e)=>{var o=e(212218)(e(587809),"WeakMap");t.exports=o},963342:t=>{t.exports=function(t,r){for(var e=-1,o=null==t?0:t.length,n=0,a=[];++e<o;){var s=t[e];r(s,e,t)&&(a[n++]=s)}return a}},790483:(t,r,e)=>{var o=e(325060),n=e(643056),a=e(666293),s=e(796788),i=e(139253),c=e(267571),u=Object.prototype.hasOwnProperty;t.exports=function(t,r){var e=a(t),p=!e&&n(t),f=!e&&!p&&s(t),v=!e&&!p&&!f&&c(t),l=e||p||f||v,_=l?o(t.length,String):[],h=_.length;for(var b in t)!r&&!u.call(t,b)||l&&("length"==b||f&&("offset"==b||"parent"==b)||v&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||i(b,h))||_.push(b);return _}},887212:t=>{t.exports=function(t,r){for(var e=-1,o=r.length,n=t.length;++e<o;)t[n+e]=r[e];return t}},900596:t=>{t.exports=function(t,r){for(var e=-1,o=null==t?0:t.length;++e<o;)if(r(t[e],e,t))return!0;return!1}},63125:(t,r,e)=>{var o=e(484636);t.exports=function(t,r){for(var e=t.length;e--;)if(o(t[e][0],r))return e;return-1}},910955:(t,r,e)=>{var o=e(887212),n=e(666293);t.exports=function(t,r,e){var a=r(t);return n(t)?a:o(a,e(t))}},479860:(t,r,e)=>{var o=e(139829),n=e(258375),a=e(199890),s=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?n(t):a(t)}},118970:(t,r,e)=>{var o=e(479860),n=e(511262);t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},574626:(t,r,e)=>{var o=e(65e3),n=e(511262);t.exports=function t(r,e,a,s,i){return r===e||(null==r||null==e||!n(r)&&!n(e)?r!=r&&e!=e:o(r,e,a,s,t,i))}},65e3:(t,r,e)=>{var o=e(195181),n=e(868099),a=e(340854),s=e(564621),i=e(18313),c=e(666293),u=e(796788),p=e(267571),f="[object Arguments]",v="[object Array]",l="[object Object]",_=Object.prototype.hasOwnProperty;t.exports=function(t,r,e,h,b,y){var x=c(t),d=c(r),j=x?v:i(t),g=d?v:i(r),O=(j=j==f?l:j)==l,w=(g=g==f?l:g)==l,m=j==g;if(m&&u(t)){if(!u(r))return!1;x=!0,O=!1}if(m&&!O)return y||(y=new o),x||p(t)?n(t,r,e,h,b,y):a(t,r,j,e,h,b,y);if(!(1&e)){var A=O&&_.call(t,"__wrapped__"),z=w&&_.call(r,"__wrapped__");if(A||z){var S=A?t.value():t,P=z?r.value():r;return y||(y=new o),b(S,P,e,h,y)}}return!!m&&(y||(y=new o),s(t,r,e,h,b,y))}},916367:(t,r,e)=>{var o=e(848870),n=e(375876),a=e(69633),s=e(877525),i=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,f=u.hasOwnProperty,v=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||n(t))&&(o(t)?v:i).test(s(t))}},769921:(t,r,e)=>{var o=e(479860),n=e(102282),a=e(511262),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&n(t.length)&&!!s[o(t)]}},778036:(t,r,e)=>{var o=e(73283),n=e(332998),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!o(t))return n(t);var r=[];for(var e in Object(t))a.call(t,e)&&"constructor"!=e&&r.push(e);return r}},325060:t=>{t.exports=function(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}},934545:t=>{t.exports=function(t){return function(r){return t(r)}}},966935:t=>{t.exports=function(t,r){return t.has(r)}},917509:(t,r,e)=>{var o=e(587809)["__core-js_shared__"];t.exports=o},868099:(t,r,e)=>{var o=e(993551),n=e(900596),a=e(966935);t.exports=function(t,r,e,s,i,c){var u=1&e,p=t.length,f=r.length;if(p!=f&&!(u&&f>p))return!1;var v=c.get(t),l=c.get(r);if(v&&l)return v==r&&l==t;var _=-1,h=!0,b=2&e?new o:void 0;for(c.set(t,r),c.set(r,t);++_<p;){var y=t[_],x=r[_];if(s)var d=u?s(x,y,_,r,t,c):s(y,x,_,t,r,c);if(void 0!==d){if(d)continue;h=!1;break}if(b){if(!n(r,(function(t,r){if(!a(b,r)&&(y===t||i(y,t,e,s,c)))return b.push(r)}))){h=!1;break}}else if(y!==x&&!i(y,x,e,s,c)){h=!1;break}}return c.delete(t),c.delete(r),h}},340854:(t,r,e)=>{var o=e(139829),n=e(449592),a=e(484636),s=e(868099),i=e(463521),c=e(489203),u=o?o.prototype:void 0,p=u?u.valueOf:void 0;t.exports=function(t,r,e,o,u,f,v){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!f(new n(t),new n(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var l=i;case"[object Set]":var _=1&o;if(l||(l=c),t.size!=r.size&&!_)return!1;var h=v.get(t);if(h)return h==r;o|=2,v.set(t,r);var b=s(l(t),l(r),o,u,f,v);return v.delete(t),b;case"[object Symbol]":if(p)return p.call(t)==p.call(r)}return!1}},564621:(t,r,e)=>{var o=e(795390),n=Object.prototype.hasOwnProperty;t.exports=function(t,r,e,a,s,i){var c=1&e,u=o(t),p=u.length;if(p!=o(r).length&&!c)return!1;for(var f=p;f--;){var v=u[f];if(!(c?v in r:n.call(r,v)))return!1}var l=i.get(t),_=i.get(r);if(l&&_)return l==r&&_==t;var h=!0;i.set(t,r),i.set(r,t);for(var b=c;++f<p;){var y=t[v=u[f]],x=r[v];if(a)var d=c?a(x,y,v,r,t,i):a(y,x,v,t,r,i);if(!(void 0===d?y===x||s(y,x,e,a,i):d)){h=!1;break}b||(b="constructor"==v)}if(h&&!b){var j=t.constructor,g=r.constructor;j==g||!("constructor"in t)||!("constructor"in r)||"function"==typeof j&&j instanceof j&&"function"==typeof g&&g instanceof g||(h=!1)}return i.delete(t),i.delete(r),h}},426732:(t,r,e)=>{var o="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=o},795390:(t,r,e)=>{var o=e(910955),n=e(69556),a=e(446482);t.exports=function(t){return o(t,a,n)}},551655:(t,r,e)=>{var o=e(980838);t.exports=function(t,r){var e=t.__data__;return o(r)?e["string"==typeof r?"string":"hash"]:e.map}},212218:(t,r,e)=>{var o=e(916367),n=e(204012);t.exports=function(t,r){var e=n(t,r);return o(e)?e:void 0}},258375:(t,r,e)=>{var o=e(139829),n=Object.prototype,a=n.hasOwnProperty,s=n.toString,i=o?o.toStringTag:void 0;t.exports=function(t){var r=a.call(t,i),e=t[i];try{t[i]=void 0;var o=!0}catch(t){}var n=s.call(t);return o&&(r?t[i]=e:delete t[i]),n}},69556:(t,r,e)=>{var o=e(963342),n=e(677605),a=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,i=s?function(t){return null==t?[]:(t=Object(t),o(s(t),(function(r){return a.call(t,r)})))}:n;t.exports=i},18313:(t,r,e)=>{var o=e(690784),n=e(342587),a=e(653504),s=e(875829),i=e(799355),c=e(479860),u=e(877525),p="[object Map]",f="[object Promise]",v="[object Set]",l="[object WeakMap]",_="[object DataView]",h=u(o),b=u(n),y=u(a),x=u(s),d=u(i),j=c;(o&&j(new o(new ArrayBuffer(1)))!=_||n&&j(new n)!=p||a&&j(a.resolve())!=f||s&&j(new s)!=v||i&&j(new i)!=l)&&(j=function(t){var r=c(t),e="[object Object]"==r?t.constructor:void 0,o=e?u(e):"";if(o)switch(o){case h:return _;case b:return p;case y:return f;case x:return v;case d:return l}return r}),t.exports=j},204012:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},807732:(t,r,e)=>{var o=e(583158);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},968386:t=>{t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},2909:(t,r,e)=>{var o=e(583158),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(o){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return n.call(r,t)?r[t]:void 0}},458865:(t,r,e)=>{var o=e(583158),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return o?void 0!==r[t]:n.call(r,t)}},87225:(t,r,e)=>{var o=e(583158);t.exports=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===r?"__lodash_hash_undefined__":r,this}},139253:t=>{var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},980838:t=>{t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},375876:(t,r,e)=>{var o,n=e(917509),a=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!a&&a in t}},73283:t=>{var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},189546:t=>{t.exports=function(){this.__data__=[],this.size=0}},398316:(t,r,e)=>{var o=e(63125),n=Array.prototype.splice;t.exports=function(t){var r=this.__data__,e=o(r,t);return!(e<0)&&(e==r.length-1?r.pop():n.call(r,e,1),--this.size,!0)}},902719:(t,r,e)=>{var o=e(63125);t.exports=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]}},631683:(t,r,e)=>{var o=e(63125);t.exports=function(t){return o(this.__data__,t)>-1}},577051:(t,r,e)=>{var o=e(63125);t.exports=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}},678436:(t,r,e)=>{var o=e(180345),n=e(796779),a=e(342587);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(a||n),string:new o}}},603154:(t,r,e)=>{var o=e(551655);t.exports=function(t){var r=o(this,t).delete(t);return this.size-=r?1:0,r}},687181:(t,r,e)=>{var o=e(551655);t.exports=function(t){return o(this,t).get(t)}},328929:(t,r,e)=>{var o=e(551655);t.exports=function(t){return o(this,t).has(t)}},247241:(t,r,e)=>{var o=e(551655);t.exports=function(t,r){var e=o(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}},463521:t=>{t.exports=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,o){e[++r]=[o,t]})),e}},583158:(t,r,e)=>{var o=e(212218)(Object,"create");t.exports=o},332998:(t,r,e)=>{var o=e(500403)(Object.keys,Object);t.exports=o},700173:(t,r,e)=>{t=e.nmd(t);var o=e(426732),n=r&&!r.nodeType&&r,a=n&&t&&!t.nodeType&&t,s=a&&a.exports===n&&o.process,i=function(){try{var t=a&&a.require&&a.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=i},199890:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},500403:t=>{t.exports=function(t,r){return function(e){return t(r(e))}}},587809:(t,r,e)=>{var o=e(426732),n="object"==typeof self&&self&&self.Object===Object&&self,a=o||n||Function("return this")();t.exports=a},77904:t=>{t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},941775:t=>{t.exports=function(t){return this.__data__.has(t)}},489203:t=>{t.exports=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}},225200:(t,r,e)=>{var o=e(796779);t.exports=function(){this.__data__=new o,this.size=0}},406038:t=>{t.exports=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}},500366:t=>{t.exports=function(t){return this.__data__.get(t)}},228973:t=>{t.exports=function(t){return this.__data__.has(t)}},447013:(t,r,e)=>{var o=e(796779),n=e(342587),a=e(525801);t.exports=function(t,r){var e=this.__data__;if(e instanceof o){var s=e.__data__;if(!n||s.length<199)return s.push([t,r]),this.size=++e.size,this;e=this.__data__=new a(s)}return e.set(t,r),this.size=e.size,this}},877525:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},484636:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},643056:(t,r,e)=>{var o=e(118970),n=e(511262),a=Object.prototype,s=a.hasOwnProperty,i=a.propertyIsEnumerable,c=o(function(){return arguments}())?o:function(t){return n(t)&&s.call(t,"callee")&&!i.call(t,"callee")};t.exports=c},666293:t=>{var r=Array.isArray;t.exports=r},890178:(t,r,e)=>{var o=e(848870),n=e(102282);t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},796788:(t,r,e)=>{t=e.nmd(t);var o=e(587809),n=e(150907),a=r&&!r.nodeType&&r,s=a&&t&&!t.nodeType&&t,i=s&&s.exports===a?o.Buffer:void 0,c=(i?i.isBuffer:void 0)||n;t.exports=c},848870:(t,r,e)=>{var o=e(479860),n=e(69633);t.exports=function(t){if(!n(t))return!1;var r=o(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},102282:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},69633:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},511262:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},267571:(t,r,e)=>{var o=e(769921),n=e(934545),a=e(700173),s=a&&a.isTypedArray,i=s?n(s):o;t.exports=i},446482:(t,r,e)=>{var o=e(790483),n=e(778036),a=e(890178);t.exports=function(t){return a(t)?o(t):n(t)}},677605:t=>{t.exports=function(){return[]}},150907:t=>{t.exports=function(){return!1}}}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/574626-81646a4463eeafd6.js.map