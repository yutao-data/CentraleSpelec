"use strict";(this.webpackChunk_msteams_react_web_client=this.webpackChunk_msteams_react_web_client||[]).push([[196395],{692934:(e,n,t)=>{t.d(n,{J4:()=>c,Dl:()=>h,On:()=>m,As:()=>C,Fd:()=>s,L2:()=>p,Oi:()=>v,oU:()=>d,ge:()=>f,wI:()=>I,PX:()=>w,X4:()=>l,kL:()=>g,qP:()=>u});var a=t(938510),r="locale",i="ver",o="name",s=(0,a.o)({UserExt:[0,"user"],DeviceExt:[1,"device"],TraceExt:[2,"trace"],WebExt:[3,"web"],AppExt:[4,"app"],OSExt:[5,"os"],SdkExt:[6,"sdk"],IntWebExt:[7,"intweb"],UtcExt:[8,"utc"],LocExt:[9,"loc"],CloudExt:[10,"cloud"],DtExt:[11,"dt"]}),c=(0,a.o)({id:[0,"id"],ver:[1,i],appName:[2,o],locale:[3,r],expId:[4,"expId"],env:[5,"env"]}),u=(0,a.o)({domain:[0,"domain"],browser:[1,"browser"],browserVer:[2,"browserVer"],screenRes:[3,"screenRes"],userConsent:[4,"userConsent"],consentDetails:[5,"consentDetails"]}),l=(0,a.o)({locale:[0,r],localId:[1,"localId"],id:[2,"id"]}),d=(0,a.o)({osName:[0,o],ver:[1,i]}),f=(0,a.o)({ver:[0,i],seq:[1,"seq"],installId:[2,"installId"],epoch:[3,"epoch"]}),p=(0,a.o)({msfpc:[0,"msfpc"],anid:[1,"anid"],serviceName:[2,"serviceName"]}),g=(0,a.o)({popSample:[0,"popSample"],eventFlags:[1,"eventFlags"]}),v=(0,a.o)({tz:[0,"tz"]}),I=(0,a.o)({sessionId:[0,"sesId"]}),m=(0,a.o)({localId:[0,"localId"],deviceClass:[1,"deviceClass"],make:[2,"make"],model:[3,"model"]}),h=(0,a.o)({role:[0,"role"],roleInstance:[1,"roleInstance"],roleVer:[2,"roleVer"]}),w=(0,a.o)({traceId:[0,"traceID"],traceName:[1,o],parentId:[2,"parentID"]}),C=(0,a.o)({traceId:[0,"traceId"],spanId:[1,"spanId"],traceFlags:[2,"traceFlags"]})},196395:(e,n,t)=>{t.d(n,{H:()=>oe});var a,r=t(340415),i=t(344411),o=t(584074),s=t(179233),c=t(680828),u=t(779497),l=t(943085),d=t(256775),f=t(692934),p=t(710556),g=t(661187),v=t(722990),I=t(128019);function m(){return void 0===a&&(a=!!w(0)),a}function h(){return m()?w(0):null}function w(e){var n,t,a=null;try{var r=(0,s.mS$)();if(!r)return null;t=new Date,(a=0===e?r.localStorage:r.sessionStorage)&&(0,s.Tnt)(a.setItem)&&(a.setItem(t,t),n=a.getItem(t)!==t,a.removeItem(t),n&&(a=null))}catch(e){a=null}return a}function C(){return this.getId()}function x(e){this.setId(e)}var S=function(){function e(){(0,i.A)(e,this,(function(e){e.setId=function(n){e.customId=n},e.getId=function(){return(0,s.KgX)(e.customId)?e.customId:e.automaticId}}))}return e._staticInit=void(0,s.vF1)(e.prototype,"id",{g:C,s:x}),e}(),b="ai_session",D=function(){function e(n,t,r){var u,l,d,f=(0,g.y0)(n),p=(0,v.um)(n);(0,i.A)(e,this,(function(n){var i=(0,c.a)(t,(function(){d=t,n.config=d}));function v(e){var t=n.automaticSession,a=e.split("|");a.length>0&&t.setId(a[0]);try{if(a.length>1){var r=+a[1];t.acquisitionDate=+new Date(r),t.acquisitionDate=t.acquisitionDate>0?t.acquisitionDate:0}if(a.length>2){var i=+a[2];t.renewalDate=+new Date(i),t.renewalDate=t.renewalDate>0?t.renewalDate:0}}catch(e){(0,g.ZP)(f,1,510,"Error parsing ai_session cookie, session will be reset: "+e)}0===t.renewalDate&&(0,g.ZP)(f,2,517,"AI session renewal date is 0, session will be reset.")}function w(){var e=n.automaticSession,t=(new Date).getTime(),a=n.config.sessionAsGuid;!(0,s.b07)(a)&&a?(0,s.Lmq)(a)?e.setId((0,o.gj)()):e.setId((0,o.gj)(a)):e.setId((0,I.Si)(d.idLength||22)),e.acquisitionDate=t,e.renewalDate=t,C(e.getId(),e.acquisitionDate,e.renewalDate),m()||(0,g.ZP)(f,2,505,"Browser does not support local storage. Session durations will be inaccurate.")}function C(e,t,a){var r=t+n.config.sessionExpirationMs,i=a+n.config.sessionRenewalMs,o=new Date,s=[e,t,a];r<i?o.setTime(r):o.setTime(i);var c=n.config.cookieDomain||null;p.set(l(),s.join("|")+";expires="+o.toUTCString(),null,c),u=(new Date).getTime()}r&&r.add(i),l=function(){return n.config.namePrefix?b+n.config.namePrefix:b},n.automaticSession=new S,n.update=function(){n.automaticSession.getId()||function(){var e=p.get(l());if(e&&(0,s.Tnt)(e.split))v(e);else{var t=function(e,n){var t=h();if(null!==t)try{return t.getItem(n)}catch(n){a=!1,(0,g.ZP)(e,1,503,"Browser failed read of local storage. "+n)}return null}(f,l());t&&v(t)}n.automaticSession.getId()||w()}();var t=n.automaticSession,r=n.config,i=(new Date).getTime(),o=i-t.acquisitionDate>r.sessionExpirationMs,c=i-t.renewalDate>r.sessionRenewalMs;if(o||c)w();else{(!u||i-u>e.cookieUpdateInterval)&&(t.renewalDate=i,C(t.getId(),t.acquisitionDate,t.renewalDate))}},n.backup=function(){var e,t,r,i=n.automaticSession;e=i.getId(),t=i.acquisitionDate,r=i.renewalDate,function(e,n,t){var r=h();if(null!==r)try{return r.setItem(n,t),!0}catch(n){a=!1,(0,g.ZP)(e,1,504,"Browser failed write to local storage. "+n)}}(f,l(),[e,t,r].join("|"))}}))}return e.cookieUpdateInterval=6e4,e}(),y=t(169547),E=function(){},k=function(){};function T(){return this.getMsfpc()}function A(){return this.getAnid()}var O=function(){function e(n,t,a){var r;(0,i.A)(e,this,(function(e){var i,s;i=n,s=(0,c.a)(i,(function(){r=t&&t.getCookieMgr();var n=i||{};n.serviceName&&(e.serviceName=n.serviceName)})),a&&a.add(s),e.getMsfpc=function(){return(0,o.UM)(r,"MSFPC")},e.getAnid=function(){return(0,o.UM)(r,"ANON").slice(0,34)}}))}var n;return e._staticInit=(n=e.prototype,(0,s.vF1)(n,"msfpc",{g:T}),void(0,s.vF1)(n,"anid",{g:A})),e}(),F=function(){var e=(new Date).getTimezoneOffset(),n=e%60,t=(e-n)/60,a="+";t>0&&(a="-"),t=Math.abs(t),n=Math.abs(n),this.tz=a+(t<10?"0"+t:t.toString())+":"+(n<10?"0"+n:n.toString())},N=t(585359),U=t(190990),M="MicrosoftApplicationsTelemetryDeviceId";var _=function(){function e(n,t,a){var r,s=0;(0,i.A)(e,this,(function(e){e.seq=s,e.epoch=(0,I.VN)(!1).toString(),e.getSequenceId=function(){return++s};var i=(0,c.a)(n,(function(n){r=t&&t.getCookieMgr();var a=n.cfg.propertyStorageOverride;if(r.isEnabled()||a){var i=function(e,n,t){return n?n.getProperty(t)||"":(0,o.UM)(e,t)}(r,a,M);i||(i=(0,U.aq)()),function(e,n,t,a){n?n.setProperty(t,a):e.set(t,a,31536e3)}(r,a,M,i),e.installId=i}else r.purge(M)}));a&&a.add(i)}))}return e.__ieDyn=1,e}(),L=t(30192),P=function(e,n,t,a,r){var i=this;i.traceId=n||(0,U.cL)();var o=(0,c.a)(e,(function(){var n=e;if(n.enableDistributedTracing&&!t&&(t=(0,U.cL)().substring(0,16)),i.parentId=i.parentId||t,n.enableApplicationInsightsTrace&&!a){var r=(0,L.g$)();r&&r.pathname&&(a=r.pathname)}i.name=i.name||a}));r&&r.add(o)},q=t(952741),X="setLocalId";function R(){return this.getLocalId()}function W(e){this[X](e)}var j=function(){function e(n,t,a,r){var u,l,d;(0,i.A)(e,this,(function(i){var f,p;if(f=t,p=(0,c.a)(f,(function(){if(d=a&&a.getCookieMgr(),u=f,l=null,d&&d.isEnabled()&&(v(),u.enableApplicationInsightsUser)){var t=(0,o.UM)(d,e.userCookieName);if(t){var r=t.split(e.cookieSeparator);r.length>0&&(i.id=r[0])}if(!i.id){i.id=(0,I.Si)(n&&!(0,s.b07)(n.idLength)?n.idLength:22);var c=(0,q._u)(new Date);i.accountAcquisitionDate=c;var p=[i.id,c],g=u.cookieDomain?u.cookieDomain:void 0;d.set(e.userCookieName,p.join(e.cookieSeparator),31536e3,g)}}})),r&&r.add(p),"undefined"!=typeof navigator){var g=navigator;i.locale=g.userLanguage||g.language}function v(){if(!u.hashIdentifiers&&!u.dropIdentifiers){var e=(0,o.UM)(d,"MUID");e&&(l="t:"+e)}return l}i.getLocalId=function(){return l||v()},i[X]=function(e){l=e}}))}return e.cookieSeparator="|",e.userCookieName="ai_user",e._staticInit=void(0,s.vF1)(e.prototype,"localId",{g:R,s:W}),e}(),z=function(e,n){var t=this;t.popSample=100;var a=(0,c.a)(e,(function(){t.eventFlags=0,e.hashIdentifiers&&(t.eventFlags=1048576|t.eventFlags),e.dropIdentifiers&&(t.eventFlags=2097152|t.eventFlags),e.scrubIpOnly&&(t.eventFlags=4194304|t.eventFlags)}));n&&n.add(a)},V=["Required","Analytics","SocialMedia","Advertising"],H="([\\d,.]+)",B="Unknown",K="Edg/",G=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:K,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],J=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}];function Z(e,n){return n.indexOf(e)>-1}function $(e,n){for(var t=0;t<n.length;t++)if(e==n[t].brand)return n[t].version;return null}function Y(e,n){return"MSIE"===n?function(e){var n=e.match(new RegExp("MSIE "+H));if(n)return n[1];var t=e.match(new RegExp("rv:"+H));if(t)return t[1]}(e):function(e,n){"Safari"===e?e="Version":"Edge"===e&&Z(K,n)&&(e="Edg");var t=n.match(new RegExp(e+"/"+H));if(t)return t[1];if("Opera"===e&&(t=n.match(new RegExp("OPR/"+H))))return t[1];return B}(n,e)}function Q(){return this.getUserConsent()}var ee=function(){function e(n,t,a){var r=(0,v.um)(t),u=n||{},l=null,d=null,f=null,p=null,g=null,I=null,m=null;(0,i.A)(e,this,(function(e){var t,i;t=n,i=(0,c.a)(t,(function(){if((u=t).populateBrowserInfo){var e=u.userAgent,n=(u.userAgentData||{}).brands;if(e!==l||n!==d){if(!e||!n||0===n.length){var a=(0,s.w3n)();a&&(e=e||a.userAgent||"",n=n||(a.userAgentData||{}).brands)}!function(e,n){if((0,s.cyL)(n))try{for(var t=0;t<J.length;t++){var a=$(J[t].br,n);if(a)return g=J[t].b,void(I=a)}}catch(e){}if(e){var r=function(e){if(e)for(var n=0;n<G.length;n++)if(Z(G[n].ua,e))return G[n].b;return B}(e);g=r,I=Y(e,r)}}(e,n),l=e,d=n}}m=(0,s.Lmq)(u.gpcDataSharingOptIn)?u.gpcDataSharingOptIn:null})),a&&a.add(i);var v=(0,L.g$)();if(v){var h=v.hostname;h&&(e.domain="file:"===v.protocol?"local":h)}var w=function(){var e={h:0,w:0},n=(0,s.zkX)();return n&&n.screen&&(e.h=screen.height,e.w=screen.width),e}();e.screenRes=w.w+"X"+w.h,e.getUserConsent=function(){return u.userConsented||!!(0,o.UM)(r,u.userConsentCookieName||"MSCC")},e.getUserConsentDetails=function(){var e=null;try{var n=u.callback;if(n&&n.userConsentDetails){var t=n.userConsentDetails();if(t){e=u.disableConsentDetailsSanitize?t:{};for(var a=0;a<V.length;a++){var r=V[a];e[r]=t[r]||!1}}}return null!==m&&((e=e||{}).GPC_DataSharingOptIn=!!m),e?JSON.stringify(e):null}catch(e){}};(0,s.lKJ)(e,{userConsent:{g:e.getUserConsent},browser:{s:function(e){f=e},g:function(){return f||g}},browserVer:{s:function(e){p=e},g:function(){return p||I}},gpcDataSharingOptIn:{g:function(){return m},s:function(e){m=(0,s.Lmq)(e)?e:null,u.gpcDataSharingOptIn=m}}})}))}return e._staticInit=void(0,s.vF1)(e.prototype,"userConsent",{g:Q}),e}();function ne(e,n,t,a,r){var i=n.ext[f.Fd[e]];if(i)try{(0,s.zav)(a,(function(e,n){if((0,s.KgX)(n)||(0,s.EtT)(n)||(0,s.Lmq)(n)){var a=i[t[e]];!r&&(a||(0,s.KgX)(a)||(0,s.EtT)(a)||(0,s.Lmq)(a))&&(n=a),i[t[e]]=n}}))}catch(e){}return i}var te,ae=function(){function e(n,t,a,r){(0,i.A)(e,this,(function(e){e.app=new y.l(t,a,r),e.cloud=new E,e.user=new j(n,t,a,r),e.os=new N.f(t,r),e.web=new ee(t,a,r);var i=new _(n,a,r),o=new O(t,a,r),c=new z(t,r);e.loc=new F,e.device=new k;var u=new D(a,t,r);e.session=new S;var l,d,g,v=void 0,I=(l=new P(t,v,v,v,r),d=w(),g=l||{},{getName:function(){return g.name},setName:function(e){d&&d.setName(e),g.name=e},getTraceId:function(){return g.traceId},setTraceId:function(e){d&&d.setTraceId(e),(0,p.hX)(e)&&(g.traceId=e)},getSpanId:function(){return g.parentId},setSpanId:function(e){d&&d.setSpanId(e),(0,p.wN)(e)&&(g.parentId=e)},getTraceFlags:function(){return g.traceFlags},setTraceFlags:function(e){d&&d.setTraceFlags(e),g.traceFlags=e}}),m=!(t||{}).eventContainExtFields;function h(){var n=e.session;if(n&&(0,s.KgX)(n.customId))return n.customId;u.update();var t=u.automaticSession;if(t){var a=t.getId();a&&(0,s.KgX)(a)&&(n.automaticId=a)}return n.automaticId}function w(){var e=I;return a&&a.getTraceCtx&&(e=a.getTraceCtx(!1)||I),e}e.getTraceCtx=function(){return I},e.getSessionId=h,e.applyApplicationContext=function(n){var t,a=e.app;ne(4,n,f.J4,((t={})[0]=a.id,t[1]=a.ver,t[2]=a.name,t[3]=a.locale,t[4]=a.getExpId(),t[5]=a.env,t),m)},e.applyUserContext=function(n){var t,a=e.user;ne(0,n,f.X4,((t={})[1]=a.getLocalId(),t[0]=a.locale,t[2]=a.id,t),m)},e.applyWebContext=function(n){var t,a=e.web;ne(3,n,f.qP,((t={})[0]=a.domain,t[1]=a.browser,t[2]=a.browserVer,t[3]=a.screenRes,t[5]=a.getUserConsentDetails(),t[4]=a.getUserConsent(),t),m)},e.applyOsContext=function(n){var t,a=e.os;ne(5,n,f.oU,((t={})[0]=a.name,t[1]=a.ver,t),m)},e.applySdkContext=function(e){var n;ne(6,e,f.ge,((n={})[2]=i.installId,n[1]=i.getSequenceId(),n[3]=i.epoch,n),m)},e.applyIntWebContext=function(e){var n;ne(7,e,f.L2,((n={})[0]=o.getMsfpc(),n[1]=o.getAnid(),n[2]=o.serviceName,n),m)},e.applyUtcContext=function(e){var n,t=((n={})[0]=c.popSample,n);c.eventFlags>0&&(t[1]=c.eventFlags),ne(8,e,f.kL,t,m)},e.applyLocContext=function(n){var t;ne(9,n,f.Oi,((t={})[0]=e.loc.tz,t),m)},e.applySessionContext=function(e){var n;ne(4,e,f.wI,((n={})[0]=h(),n),m)},e.applyDeviceContext=function(n){var t,a=e.device;ne(1,n,f.On,((t={})[0]=a.localId,t[2]=a.make,t[3]=a.model,t[1]=a.deviceClass,t),m)},e.applyCloudContext=function(n){var t,a=e.cloud;ne(10,n,f.Dl,((t={})[0]=a.role,t[1]=a.roleInstance,t[2]=a.roleVer,t),m)},e.applyAITraceContext=function(e){var n;if(t.enableApplicationInsightsTrace){var a=w();a&&ne(2,e,f.PX,((n={})[0]=a.getTraceId(),n[1]=a.getName(),n[2]=a.getSpanId(),n),!1)}},e.applyDistributedTraceContext=function(e){var n,t=w();if(t){var a=((n={})[0]=t.getTraceId(),n[1]=t.getSpanId(),n),r=t.getTraceFlags();(0,s.hXl)(r)||(a[2]=r),ne(11,e,f.As,a,!1)}}}))}return e.__ieDyn=1,e}();var re=[f.Fd[4],f.Fd[0],f.Fd[3],f.Fd[5],f.Fd[6],f.Fd[7],f.Fd[8],f.Fd[9],f.Fd[1],f.Fd[2],f.Fd[11],f.Fd[10]],ie=(0,s.ZHX)({populateBrowserInfo:!1,populateOperatingSystemInfo:!1,userAgent:(0,d.ej)(),userAgentData:(0,d.NU)({brands:te,mobile:te,platform:te}),userConsentCookieName:(0,d.ej)(),userConsented:!1,serviceName:(0,d.ej)(),env:(0,d.ej)(),expId:(0,d.ej)(),sessionRenewalMs:18e5,sessionExpirationMs:864e5,sessionAsGuid:null,cookieDomain:(0,d.ej)(),namePrefix:(0,d.ej)(),enableApplicationInsightsTrace:!1,enableApplicationInsightsUser:!1,hashIdentifiers:!1,dropIdentifiers:!1,scrubIpOnly:!1,callback:(0,d.NU)({userConsentDetails:null}),gpcDataSharingOptIn:te,idLength:22,enableDistributedTracing:!1,eventContainExtFields:!1}),oe=function(e){function n(){var t,a,r,l=e.call(this)||this;return l.identifier="SystemPropertiesCollector",l.priority=3,l.version="4.2.0",(0,i.A)(n,l,(function(e,n){function i(){t=null,a={}}i(),e.initialize=function(a,i,o){n.initialize(a,i,o),function(n){var a=e.identifier,i=e.core;e._addHook((0,c.a)(n,(function(){var e=(0,u.i8)(null,n,i);r=e.getExtCfg(a,ie)}))),t=new ae(n,r,i,e._unloadHooks),i&&i.setTraceCtx&&i.setTraceCtx(t.getTraceCtx())}(a)},e.processTelemetry=function(n,i){(0,o.u9)(n,e.identifier),i=e._getTelCtx(i);var c,u,l=n.ext=n.ext?n.ext:{};n.data=n.data?n.data:{},(0,s.Iuo)(re,(function(e){l[e]=l[e]||{}})),t&&(t.applyUtcContext(n),t.applyApplicationContext(n),t.applyUserContext(n),t.applyWebContext(n),t.applyOsContext(n),t.applySdkContext(n),t.applyIntWebContext(n),t.applyLocContext(n),t.applySessionContext(n),t.applyDeviceContext(n),r.enableApplicationInsightsTrace&&t.applyAITraceContext(n),r.enableDistributedTracing&&t.applyDistributedTraceContext(n),t.applyCloudContext(n)),(0,s.Iuo)((0,s.cGk)(l),(function(e){0===(0,s.cGk)(l[e]).length&&delete l[e]})),c=a,u=n.data,c&&(0,s.zav)(c,(function(e,n){u[e]||(u[e]=n)})),e.processNext(n,i)},e.getPropertiesContext=function(){return t},e.setProperty=function(e,n){a[e]=n},e._doTeardown=function(e,n){var a=(e||{}).core();if(a&&a.getTraceCtx&&t){var r=a.getTraceCtx(!1);r&&r===t.getTraceCtx()&&a.setTraceCtx(null)}i()},e._getDbgPlgTargets=function(){return[r]}})),l}return(0,r.qU)(n,e),n.__ieDyn=1,n}(l.s)},169547:(e,n,t)=>{t.d(n,{l:()=>d});var a=t(344411),r=t(179233),i=t(584074),o=t(680828),s=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];function c(e,n){void 0===n&&(n=s);var t=null;if(e)for(var a=e.split(","),r=0;r<a.length;r++)u(a[r],n)&&(t?t+=","+a[r]:t=a[r]);return t}function u(e,n){if(void 0===n&&(n=s),!e||e.length<4)return!1;for(var t=!1,a=e.substring(0,3).toString().toUpperCase(),r=0;r<n.length;r++)if(n[r]+":"===a&&e.length<=256){t=!0;break}return t}function l(){return this.getExpId()}var d=function(){function e(n,t,u){var l,d=null,f=s.slice(0),p="Treatments",g=null;(0,a.A)(e,this,(function(e){var a,s;if(a=n,s=(0,o.a)(a,(function(){l=t&&t.getCookieMgr(),g=a||{},e.env=g.env||function(e){var n,t={},a=(0,r.YEm)();if(a){n=a&&a.querySelectorAll("meta");for(var i=0;i<n.length;i++){var o=n[i];o.name&&0===o.name.toLowerCase().indexOf(e)&&(t[o.name.replace(e,"")]=o.content)}}return t}("awa-").env})),u&&u.add(s),(0,r.Wtk)()){var v=(0,r.YEm)().documentElement;v&&(e.locale=v.lang)}function I(e){e!==d&&(d=c(e,f))}e.getExpId=function(){return g.expId?(I(g.expId),d):(I((0,i.UM)(l,p)),d)}}))}return e.validateAppExpId=c,e._staticInit=void(0,r.vF1)(e.prototype,"expId",{g:l}),e}()},585359:(e,n,t)=>{t.d(n,{f:()=>g});var a=t(680828),r=t(179233),i={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},o={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},s="([\\d,.]+)",c="([\\d,_,.]+)",u="Unknown",l=[{r:i.WINPHONE,os:"Windows Phone"},{r:i.WINRT,os:"Windows RT"},{r:i.WIN,os:"Windows"},{r:i.IOS,os:"iOS"},{r:i.ANDROID,os:"Android"},{r:i.LINUX,os:"Linux"},{r:i.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:i.OSX,os:"Mac OS X"}];function d(e,n){return"Windows"===n?f(e,"Windows NT"):"Android"===n?f(e,n):"Mac OS X"===n?function(e){var n=e.match(new RegExp("Mac OS X "+c));if(n){var t=n[1].replace(/_/g,".");if(t){var a=p(t);return a?t.split(a)[0]:t}}return u}(e):"iOS"===n?function(e){var n=e.match(new RegExp("OS "+c));if(n){var t=n[1].replace(/_/g,".");if(t){var a=p(t);return a?t.split(a)[0]:t}}return u}(e):u}function f(e,n){var t=e.match(new RegExp(n+" "+s));return t?o[t[1]]?o[t[1]]:t[1]:u}function p(e){return e.indexOf(".")>-1?".":e.indexOf("_")>-1?"_":null}var g=function(e,n){var t=null,i=null,o=null,s=null,c=(0,a.a)(e,(function(){if((e||{}).populateOperatingSystemInfo){var n=(0,r.w3n)()||{},a=e.userAgent||n.userAgent||"",o=(e.userAgentData||{}).platform||(n.userAgentData||{}).platform;if(a){var s=function(e){for(var n=0;n<l.length;n++){var t=l[n];if(t.r&&e.match(t.r))return t.os;if(t.s&&-1!==e.indexOf(t.s))return t.os}return u}(a.toLowerCase());t=s,i=d(a,s)}t&&t!==u||!(0,r.KgX)(o)||(t=o)}}));n&&n.add(c),(0,r.vF1)(this,"name",{s:function(e){o=e},g:function(){return o||t}}),(0,r.vF1)(this,"ver",{s:function(e){s=e},g:function(){return s||i}})}}}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/196395-04975d44a0a148a8.js.map