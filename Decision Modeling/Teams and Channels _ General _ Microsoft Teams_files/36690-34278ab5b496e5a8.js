"use strict";(this.webpackChunk_msteams_react_web_client=this.webpackChunk_msteams_react_web_client||[]).push([[36690],{851706:(e,t,n)=>{n.d(t,{E:()=>F});var r=n(513432),o=n(48374),i=n(883027),a=n(602835),l=n(691478),c=n(164093),s=n(716300),u=n(250452),d=n(478304),p=n(31152),f=n(35871),v=n(103735);const m=(0,v.D)("r6pzz3z",null),b=(0,v.D)("r144vlu9",null);var h=n(115170),y=n(123082);const g=[{opacity:0},{opacity:1}],w=(0,h.$)({enter:{keyframes:g,easing:y.TV.curveLinear,duration:y.TV.durationGentle},exit:{keyframes:[...g].reverse(),easing:y.TV.curveLinear,duration:y.TV.durationGentle}});var k=n(712944);const D=(e,t)=>{const n=(0,k.Z)(),v=(0,p.e4)((e=>e.modalType)),h=(0,p.e4)((e=>e.isNestedDialog)),y=(0,p.e4)((e=>e.modalAttributes)),g=(0,p.e4)((e=>e.dialogRef)),D=(0,p.e4)((e=>e.requestOpenChange)),B=(0,p.e4)((e=>e.dialogTitleId)),E=(0,p.e4)((e=>e.open)),C=(0,a.D)((t=>{var n,r;(0,l.g)(e.backdrop)&&(null===(n=(r=e.backdrop).onClick)||void 0===n||n.call(r,t));"modal"!==v||t.isDefaultPrevented()||D({event:t,open:!1,type:"backdropClick"})})),z=(0,a.D)((t=>{var n;null===(n=e.onKeyDown)||void 0===n||n.call(e,t),t.key!==o.uf9||t.isDefaultPrevented()||(D({event:t,open:!1,type:"escapeKeyDown"}),t.preventDefault())})),T=c.lq(e.backdrop,{renderByDefault:"non-modal"!==v,defaultProps:{"aria-hidden":"true"},elementType:"div"});T&&(T.onClick=C);const{disableBodyScroll:R,enableBodyScroll:x}=function(){const e=m(),t=b(),{targetDocument:n}=(0,f.useFluent_unstable)();return{disableBodyScroll:(0,r.useCallback)((()=>{var r,o;n&&n.body.clientHeight>(null!==(o=null===(r=n.defaultView)||void 0===r?void 0:r.innerHeight)&&void 0!==o?o:0)&&(n.documentElement.classList.add(e),n.body.classList.add(t))}),[n,e,t]),enableBodyScroll:(0,r.useCallback)((()=>{n&&(n.documentElement.classList.remove(e),n.body.classList.remove(t))}),[n,e,t])}}();return(0,s.E)((()=>{if(!h&&"non-modal"!==v)return R(),()=>{x()}}),[x,h,R,v]),{components:{backdrop:"div",root:"div",backdropMotion:w},open:E,backdrop:T,isNestedDialog:h,mountNode:e.mountNode,root:c.Gk((0,u.g)("div",{tabIndex:-1,"aria-modal":"non-modal"!==v,role:"alert"===v?"alertdialog":"dialog","aria-labelledby":e["aria-label"]?void 0:B,...e,...y,onKeyDown:z,ref:(0,d.a)(t,n,g)}),{elementType:"div"}),backdropMotion:(0,i.s)(e.backdropMotion,{elementType:w,defaultProps:{appear:!0,visible:E}}),transitionStatus:void 0}};var B=n(644525),E=n(578902),C=n(854130),z=n(903645);var T=n(965804),R=n(526521);const x="fui-DialogSurface",q="fui-DialogSurface__backdrop",P=(0,v.D)("r1svjbtt","r131yuoq"),j=(0,v.D)("rsptlh5",null),N=(0,T.O)({nestedDialogBackdrop:{De3pzq:"f1c21dwh"}});const F=r.forwardRef(((e,t)=>{const n=D(e,t),r={dialogSurface:!0};return(e=>{const{isNestedDialog:t,root:n,backdrop:r}=e,o=P(),i=j(),a=N();n.className=(0,R.z)(x,o,n.className),r&&(r.className=(0,R.z)(q,i,t&&a.nestedDialogBackdrop,r.className))})(n),(0,f.useCustomStyleHook_unstable)("useDialogSurfaceStyles_unstable")(n),((e,t)=>((0,C.C)(e),(0,B.FD)(E.Z,{mountNode:e.mountNode,children:[e.backdrop&&(0,B.Y)(e.backdropMotion,{children:(0,B.Y)(e.backdrop,{})}),(0,B.Y)(z.Rc,{value:t.dialogSurface,children:(0,B.Y)(e.root,{})})]})))(n,r)}));F.displayName="DialogSurface"},712944:(e,t,n)=>{n.d(t,{Z:()=>i,K:()=>a});var r=n(513432);const o=r.createContext(void 0);function i(){return r.useContext(o)}const a=r.forwardRef(((e,t)=>r.createElement(o.Provider,{value:t},e.children)))},31152:(e,t,n)=>{n.d(t,{MV:()=>a,Co:()=>l,e4:()=>c});n(513432);var r=n(537602),o=n(925586);const i={open:!1,inertTrapFocus:!1,modalType:"modal",isNestedDialog:!1,dialogRef:{current:null},requestOpenChange(){}},a=(0,r.q)(void 0),l=a.Provider,c=e=>(0,o.i)(a,((t=i)=>e(t)))},903645:(e,t,n)=>{n.d(t,{Rc:()=>i,z6:()=>a});var r=n(513432);const o=(0,r.createContext)(void 0),i=o.Provider,a=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e&&e}},447105:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(513432);const o=r.createContext(void 0),i=(o.Provider,()=>{var e;return null!==(e=r.useContext(o))&&void 0!==e?e:"default"})},115170:(e,t,n)=>{n.d(t,{$:()=>b});var r=n(478304),o=n(597981),i=n(602835),a=n(716300),l=n(513432);const c=l.createContext(void 0);var s=n(258331),u=n(345083),d=n(818050);var p=n(179994),f=n(140188),v=n(447105);const m=Symbol("MOTION_DEFINITION");function b(e){return Object.assign((t=>{const n={...l.useContext(c),...t},m="skip"===(0,v.c)(),{appear:b,children:h,imperativeRef:y,onExit:g,onMotionFinish:w,onMotionStart:k,onMotionCancel:D,visible:B,unmountOnExit:E,...C}=n,z=C,[T,R]=function(e=!1,t=!1){const n=l.useRef(!t||e),r=(0,d.C)(),o=l.useCallback((e=>{n.current!==e&&(n.current=e,r())}),[r]);return l.useEffect((()=>{e&&(n.current=e)})),[e||n.current,o]}(B,E),x=(0,f.N)(h),q=(0,u.Z)(y),P=l.useRef(),j=(0,r.a)(P,x.ref),N=l.useRef({appear:b,params:z,skipMotions:m}),F=(0,s.B)(),M=(0,o.t)(),S=(0,p.u)(),_=(0,i.D)((e=>{null==k||k(null,{direction:e})})),A=(0,i.D)((e=>{null==w||w(null,{direction:e}),"exit"===e&&E&&(R(!1),null==g||g())})),L=(0,i.D)((e=>{null==D||D(null,{direction:e})}));return(0,a.E)((()=>{N.current={appear:b,params:z,skipMotions:m}})),(0,a.E)((()=>{const t=P.current;if(!t||function(e,t,n){return!e&&t&&!!n}(N.current.appear,M,B))return;const n="function"==typeof e?e({element:t,...N.current.params}):e,r=B?n.enter:n.exit,o=B?"enter":"exit",i=!B&&M,a=N.current.skipMotions;i||_(o);const l=F(t,r,{isReducedMotion:S()});if(!i)return q.current=l,l.setMotionEndCallbacks((()=>A(o)),(()=>L(o))),a&&l.finish(),()=>{l.cancel()};l.finish()}),[F,q,S,A,_,L,B]),T?l.cloneElement(x,{ref:j}):null}),{[m]:"function"==typeof e?e:()=>e})}},258331:(e,t,n)=>{n.d(t,{B:()=>i});var r=n(513432);function o(){return r.useCallback(((e,t,n)=>{const r=Array.isArray(t)?t:[t],{isReducedMotion:o}=n,i=r.map((t=>{const{keyframes:n,...r}=t,i=e.animate(n,{fill:"forwards",...r,...o&&{duration:1}});return i.persist(),i}));return{set playbackRate(e){i.forEach((t=>{t.playbackRate=e}))},setMotionEndCallbacks(t,n){Promise.all(i.map((e=>e.finished))).then((()=>{t()})).catch((t=>{var r;const o=null===(r=e.ownerDocument.defaultView)||void 0===r?void 0:r.DOMException;if(!(o&&t instanceof o&&"AbortError"===t.name))throw t;n()}))},cancel:()=>{i.forEach((e=>{e.cancel()}))},pause:()=>{i.forEach((e=>{e.pause()}))},play:()=>{i.forEach((e=>{e.play()}))},finish:()=>{i.forEach((e=>{e.finish()}))}}}),[])}function i(){return o()}},179994:(e,t,n)=>{n.d(t,{u:()=>a});var r=n(513432),o=n(35871);const i="screen and (prefers-reduced-motion: reduce)";function a(){const{targetDocument:e}=(0,o.useFluent_unstable)();var t;const n=null!==(t=null==e?void 0:e.defaultView)&&void 0!==t?t:null,a=r.useRef(!1),l=r.useCallback((()=>a.current),[]);return r.useEffect((()=>{if(null===n||"function"!=typeof n.matchMedia)return;const e=n.matchMedia(i);e.matches&&(a.current=!0);const t=e=>{a.current=e.matches};return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}),[n]),l}},345083:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(513432);function o(e){const t=r.useRef();return r.useImperativeHandle(e,(()=>({setPlayState:e=>{var n,r;"running"===e&&(null===(n=t.current)||void 0===n||n.play());"paused"===e&&(null===(r=t.current)||void 0===r||r.pause())},setPlaybackRate:e=>{t.current&&(t.current.playbackRate=e)}}))),t}},123082:(e,t,n)=>{n.d(t,{TV:()=>r});const r={durationUltraFast:50,durationFaster:100,durationFast:150,durationNormal:200,durationGentle:250,durationSlow:300,durationSlower:400,durationUltraSlow:500,curveAccelerateMax:"cubic-bezier(0.9,0.1,1,0.2)",curveAccelerateMid:"cubic-bezier(1,0,1,1)",curveAccelerateMin:"cubic-bezier(0.8,0,0.78,1)",curveDecelerateMax:"cubic-bezier(0.1,0.9,0.2,1)",curveDecelerateMid:"cubic-bezier(0,0,0,1)",curveDecelerateMin:"cubic-bezier(0.33,0,0.1,1)",curveEasyEaseMax:"cubic-bezier(0.8,0,0.2,1)",curveEasyEase:"cubic-bezier(0.33,0,0.67,1)",curveLinear:"cubic-bezier(0,0,1,1)"}},883027:(e,t,n)=>{n.d(t,{s:()=>i});var r=n(442052),o=n(513432);function i(e,t){const{as:n,children:i,...a}=null!=e?e:{};if(null===e){const e=!t.defaultProps.visible&&t.defaultProps.unmountOnExit,n=(t,n)=>e?null:o.createElement(o.Fragment,null,n.children);return{[r.Y]:n,[r.o]:t.elementType}}const l={...t.defaultProps,...a,[r.o]:t.elementType};return"function"==typeof i&&(l[r.Y]=i),l}},140188:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(513432),o=n(164391);function i(e){try{const t=r.Children.only(e);if("string"==typeof t.type||o.isForwardRef(t))return t}catch{}throw new Error(["@fluentui/react-motion: Invalid child element.","\n","Motion factories require a single child element to be passed. ","That element element should support ref forwarding i.e. it should be either an intrinsic element (e.g. div) or a component that uses React.forwardRef()."].join(""))}},205745:(e,t,n)=>{n.d(t,{y:()=>l});var r=n(411947),o=n(571807),i=n(367927),a=n(726138);const l=(e={})=>{const{trapFocus:t,alwaysFocusable:n,legacyTrapFocus:l}=e,c=(0,a.p)();c&&((0,i.Az)(c),(0,i.mz)(c));const s=(0,r.Bi)("modal-",e.id);return{modalAttributes:(0,o.g)({restorer:{type:i.CP.Source},...t&&{modalizer:{id:s,isOthersAccessible:!t,isAlwaysAccessible:n,isTrapped:l&&t}}}),triggerAttributes:(0,o.g)({restorer:{type:i.CP.Target}})}}},61875:(e,t,n)=>{n.d(t,{m:()=>R});var r=n(513432),o=n(910889),i=n(85647),a=n(437932),l=n(35871),c=n(838369),s=n(745690),u=n(132915),d=n(589256),p=n(164093),f=n(411947),v=n(478304),m=n(716300),b=n(264278),h=n(305143),y=n(706445),g=n(602835);var w=n(48374);var k=n(644525),D=n(578902),B=n(854130);var E=n(965804),C=n(526521);const z="fui-Tooltip__content",T=(0,E.O)({root:{mc9l5x:"fjseox",B7ck84d:"f1ewtqcl",B2u0y6b:"f132xexn",Bceei9c:"f158kwzp",Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bg96gwp:"fwrc4pm",Btd35i7:"fokg9q4",Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"ft85np5",Bgfg5da:0,B9xav0g:0,oivjwe:0,Bn0qgzm:0,B4g9neb:0,zhjwy3:0,wvpqe5:0,ibv6hh:0,u1mtju:0,h3c5rm:0,vrafjx:0,Bekrc4i:0,i8vvqc:0,g2u3we:0,icvyot:0,B4j52fo:0,irswps:"f9ggezi",Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"f1bzqsji",De3pzq:"fxugw4r",sj55zd:"f19n0e5",Bhu2qc9:"fxeb0a7"},visible:{mc9l5x:"ftgm304"},inverted:{De3pzq:"fg3r6xk",sj55zd:"fonrgv7"},arrow:{qhf8xq:"f1euv43f",De3pzq:"f1u2r49w",Bcdw1i0:"fd7fpy0",Bj3rh1h:"f1bsuimh",a9b677:"f1ekdpwm",Bqenvij:"f83vc9z",Ftih45:"f1wl9k8s",B1puzpu:"f1wkw4r9",Brfgrao:"f1j7ml58",Bcvre1j:"fyl8oag",Ccq8qp:"frdoeuz",Baz25je:"fb81m9q",cmx5o7:"f1ljr5q2",Bk5zm6e:0,m598lv:0,B4f6apu:0,eqrjj:"f15tymiq",Bqjgrrk:0,qa3bma:0,y0oebl:0,Bcgcnre:"fi8wnwo",Budzafs:["f9e5op9","f112wvtl"],Hv9wc6:"f16cagkn",hl6cv3:"f1773hnp",c8svkw:"fw7o64x",yayu3t:"f1v7783n",nr3p0k:"f1f0d6v",rhl9o9:"fh2hsk5",wiz9v7:"f1gj3y7g",B6q6orb:"f11yvu4",ndpsmx:"f17lejdj"}}),R=e=>{const t=(e=>{var t,n,k,D;const B=(0,l.useTooltipVisibility_unstable)(),E=(0,s.wR)(),{targetDocument:C}=(0,l.useFluent_unstable)(),[z,T]=(0,u.Z)(),{appearance:R="normal",children:x,content:q,withArrow:P=!1,positioning:j="above",onVisibleChange:N,relationship:F,showDelay:M=250,hideDelay:S=250,mountNode:_}=e,[A,L]=(0,d.i)({state:e.visible,initialState:!1}),O=r.useCallback(((e,t)=>{T(),L((n=>(t.visible!==n&&(null==N||N(e,t)),t.visible)))}),[T,L,N]),V={withArrow:P,positioning:j,showDelay:M,hideDelay:S,relationship:F,visible:A,shouldRenderTooltip:A,appearance:R,mountNode:_,components:{content:"div"},content:p.Gk(q,{defaultProps:{role:"tooltip"},elementType:"div"})};V.content.id=(0,f.Bi)("tooltip-",V.content.id);const Z={enabled:V.visible,arrowPadding:8,position:"above",align:"center",offset:4,...(0,o.P)(V.positioning)};V.withArrow&&(Z.offset=(0,i.H)(Z.offset,6));const{targetRef:I,containerRef:Y,arrowRef:H}=(0,a.T)(Z);V.content.ref=(0,v.a)(V.content.ref,Y),V.arrowRef=H,(0,m.E)((()=>{if(A){var e;const t={hide:e=>O(void 0,{visible:!1,documentKeyboardEvent:e})};null===(e=B.visibleTooltip)||void 0===e||e.hide(),B.visibleTooltip=t;const n=e=>{e.key!==w.uf9||e.defaultPrevented||(t.hide(e),e.preventDefault())};return null==C||C.addEventListener("keydown",n,{capture:!0}),()=>{B.visibleTooltip===t&&(B.visibleTooltip=void 0),null==C||C.removeEventListener("keydown",n,{capture:!0})}}}),[B,C,A,O]);const G=r.useRef(!1),K=r.useCallback((e=>{if("focus"===e.type&&G.current)return void(G.current=!1);const t=B.visibleTooltip?0:V.showDelay;z((()=>{O(e,{visible:!0})}),t),e.persist()}),[z,O,V.showDelay,B]),[U]=r.useState((()=>{const e=e=>{var t;(null===(t=e.detail)||void 0===t?void 0:t.isFocusedProgrammatically)&&(G.current=!0)};let t=null;return n=>{null==t||t.removeEventListener(c.Oy,e),null==n||n.addEventListener(c.Oy,e),t=n}})),$=r.useCallback((e=>{let t=V.hideDelay;"blur"===e.type&&(t=0,G.current=(null==C?void 0:C.activeElement)===e.target),z((()=>{O(e,{visible:!1})}),t),e.persist()}),[z,O,V.hideDelay,C]);V.content.onPointerEnter=(0,b.p)(V.content.onPointerEnter,T),V.content.onPointerLeave=(0,b.p)(V.content.onPointerLeave,$),V.content.onFocus=(0,b.p)(V.content.onFocus,T),V.content.onBlur=(0,b.p)(V.content.onBlur,$);const J=(0,h.h)(x),Q={};return"label"===F?"string"==typeof V.content.children?Q["aria-label"]=V.content.children:(Q["aria-labelledby"]=V.content.id,V.shouldRenderTooltip=!0):"description"===F&&(Q["aria-describedby"]=V.content.id,V.shouldRenderTooltip=!0),E&&(V.shouldRenderTooltip=!1),V.children=(0,y.L)(x,{...Q,...null==J?void 0:J.props,ref:(0,v.a)(null==J?void 0:J.ref,U,void 0===Z.target?I:void 0),onPointerEnter:(0,g.D)((0,b.p)(null==J||null===(t=J.props)||void 0===t?void 0:t.onPointerEnter,K)),onPointerLeave:(0,g.D)((0,b.p)(null==J||null===(n=J.props)||void 0===n?void 0:n.onPointerLeave,$)),onFocus:(0,g.D)((0,b.p)(null==J||null===(k=J.props)||void 0===k?void 0:k.onFocus,K)),onBlur:(0,g.D)((0,b.p)(null==J||null===(D=J.props)||void 0===D?void 0:D.onBlur,$))}),V})(e);return(e=>{const t=T();e.content.className=(0,C.z)(z,t.root,"inverted"===e.appearance&&t.inverted,e.visible&&t.visible,e.content.className),e.arrowClassName=t.arrow})(t),(0,l.useCustomStyleHook_unstable)("useTooltipStyles_unstable")(t),(e=>((0,B.C)(e),(0,k.FD)(r.Fragment,{children:[e.children,e.shouldRenderTooltip&&(0,k.Y)(D.Z,{mountNode:e.mountNode,children:(0,k.FD)(e.content,{children:[e.withArrow&&(0,k.Y)("div",{ref:e.arrowRef,className:e.arrowClassName}),e.content.children]})})]})))(t)};R.displayName="Tooltip",R.isFluentTriggerComponent=!0},691478:(e,t,n)=>{n.d(t,{g:()=>o});var r=n(513432);function o(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)&&!(0,r.isValidElement)(e)}},597981:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(513432);function o(){const e=r.useRef(!0);return e.current?(e.current=!1,!0):e.current}},818050:(e,t,n)=>{n.d(t,{C:()=>o});var r=n(513432);function o(){return(0,r.useReducer)((e=>e+1),0)[1]}},706445:(e,t,n)=>{n.d(t,{L:()=>i});var r=n(513432),o=n(680767);function i(e,t){return"function"==typeof e?e(t):e?a(e,t):e||null}function a(e,t){if(!r.isValidElement(e)||e.type===r.Fragment)throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");if((0,o.Z)(e)){const n=a(e.props.children,t);return r.cloneElement(e,void 0,n)}return r.cloneElement(e,t)}},305143:(e,t,n)=>{n.d(t,{h:()=>i});var r=n(513432),o=n(680767);function i(e){return r.isValidElement(e)?(0,o.Z)(e)?i(e.props.children):e:null}},680767:(e,t,n)=>{n.d(t,{Z:()=>r});n(513432);function r(e){return Boolean(e.type.isFluentTriggerComponent)}}}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/36690-34278ab5b496e5a8.js.map