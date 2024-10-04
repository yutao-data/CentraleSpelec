"use strict";(this.webpackChunk_msteams_react_web_client=this.webpackChunk_msteams_react_web_client||[]).push([[988887],{792529:(e,a,t)=>{t.d(a,{e:()=>y});var r=t(513432),i=t(644525),f=t(854130);var n=t(411947),s=t(164093),l=t(250452),o=t(264278);const u=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,c=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,d=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,p=/\s+/g,b=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function v(e,a,t){return e?(e=function(e){return(e=(e=(e=e.replace(u,"")).replace(c,"")).replace(p," ")).trim()}(e),b.test(e)||!(null==t?void 0:t.allowPhoneInitials)&&d.test(e)?"":function(e,a,t){let r="";const i=e.split(" ");return 0!==i.length&&(r+=i[0].charAt(0).toUpperCase()),t||(2===i.length?r+=i[1].charAt(0).toUpperCase():3===i.length&&(r+=i[2].charAt(0).toUpperCase())),a&&r.length>1?r.charAt(1)+r.charAt(0):r}(e,a,null==t?void 0:t.firstInitialOnly)):""}var m=t(378200),g=t(83596),h=t(35871),B=t(500260);const z={active:"active",inactive:"inactive"},k=e=>e>=96?"extra-large":e>=64?"large":e>=56?"medium":e>=40?"small":e>=28?"extra-small":"tiny",j=["dark-red","cranberry","red","pumpkin","peach","marigold","gold","brass","brown","forest","seafoam","dark-green","light-teal","teal","steel","blue","royal-blue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],q=e=>{let a=0;for(let t=e.length-1;t>=0;t--){const r=e.charCodeAt(t),i=t%8;a^=(r<<i)+(r>>8-i)}return a};var w=t(457106);const y=r.forwardRef(((e,a)=>{const t=((e,a)=>{const{dir:t}=(0,h.useFluent_unstable)(),{shape:i,size:f}=(0,B.u)(),{name:u,size:c=(null!=f?f:32),shape:d=(null!=i?i:"circular"),active:p="unset",activeAppearance:b="ring",idForColor:w}=e;let{color:y="neutral"}=e;var x;"colorful"===y&&(y=j[q(null!==(x=null!=w?w:u)&&void 0!==x?x:"")%j.length]);const D=(0,n.Bi)("avatar-"),O=s.Gk((0,l.g)("span",{role:"img",id:D,...e,ref:a},["name"]),{elementType:"span"}),[C,F]=r.useState(void 0);let _=s.lq(e.image,{defaultProps:{alt:"",role:"presentation","aria-hidden":!0,hidden:C},elementType:"img"});(null==_?void 0:_.src)||(_=void 0),_&&(_.onError=(0,o.p)(_.onError,(()=>F(!0))),_.onLoad=(0,o.p)(_.onLoad,(()=>F(void 0))));let A,N=s.lq(e.initials,{renderByDefault:!0,defaultProps:{children:v(u,"rtl"===t,{firstInitialOnly:c<=16}),id:D+"__initials"},elementType:"span"});(null==N?void 0:N.children)||(N=void 0),N||_&&!C||(A=s.lq(e.icon,{renderByDefault:!0,defaultProps:{children:r.createElement(m.aUx,null),"aria-hidden":!0},elementType:"span"}));const T=s.lq(e.badge,{defaultProps:{size:k(c),id:D+"__badge"},elementType:g.n});let P;if(!O["aria-label"]&&!O["aria-labelledby"]&&(u?(O["aria-label"]=u,T&&(O["aria-labelledby"]=O.id+" "+T.id)):N&&(O["aria-labelledby"]=N.id+(T?" "+T.id:"")),"active"===p||"inactive"===p)){const e=z[p];if(O["aria-labelledby"]){const a=D+"__active";O["aria-labelledby"]+=" "+a,P=r.createElement("span",{hidden:!0,id:a},e)}else O["aria-label"]&&(O["aria-label"]+=" "+e)}return{size:c,shape:d,active:p,activeAppearance:b,activeAriaLabelElement:P,color:y,components:{root:"span",initials:"span",icon:"span",image:"img",badge:g.n},root:O,initials:N,icon:A,image:_,badge:T}})(e,a);return(0,w.CS)(t),(0,h.useCustomStyleHook_unstable)("useAvatarStyles_unstable")(t),(e=>((0,f.C)(e),(0,i.FD)(e.root,{children:[e.initials&&(0,i.Y)(e.initials,{}),e.icon&&(0,i.Y)(e.icon,{}),e.image&&(0,i.Y)(e.image,{}),e.badge&&(0,i.Y)(e.badge,{}),e.activeAriaLabelElement]})))(t)}));y.displayName="Avatar"},457106:(e,a,t)=>{t.d(a,{CS:()=>h,bU:()=>v});var r=t(103735),i=t(965804),f=t(526521);const n="fui-Avatar",s="fui-Avatar__image",l="fui-Avatar__initials",o="fui-Avatar__icon",u="fui-Avatar__badge",c=(0,r.D)("r81b29z","r1aatmv"),d=(0,r.D)("r136dc0n","rjly0nl"),p=(0,r.D)("rip04v","r31uzil"),b=(0,i.O)({textCaption2Strong:{Be2twd7:"f13mqy1h"},textCaption1Strong:{Be2twd7:"fy9rknc"},textSubtitle2:{Be2twd7:"fod5ikn"},textSubtitle1:{Be2twd7:"f1pp30po"},textTitle3:{Be2twd7:"f1x0m3f5"},squareSmall:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"fq9zq91"},squareMedium:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"ft85np5"},squareLarge:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"f1o0qvyv"},squareXLarge:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"f1kijzfu"},activeOrInactive:{Bz10aip:"ftfx35i",Bmy1vo4:"fv0atk9",B3o57yi:"f1iry5bo",Bkqvd7p:"f15n41j8",Hwfdqs:"f1onx1g3"},ring:{Ftih45:"f1wl9k8s"},ringBadgeCutout:{f4a502:"fp2gujx"},ringThick:{of393c:"fq1w1vq"},ringThicker:{of393c:"fzg6ace"},ringThickest:{of393c:"f1nu8p71"},shadow:{Bsft5z2:"f13zj6fq"},shadow4:{Be6vj1x:"fcjn15l"},shadow8:{Be6vj1x:"f1tm8t9f"},shadow16:{Be6vj1x:"f1a1aohj"},shadow28:{Be6vj1x:"fond6v5"},inactive:{abs64n:"fp25eh",Bz10aip:"f1clczzi",Bkqvd7p:"f1l3s34x",Bfgortx:0,Bnvr3x9:0,b2tv09:0,Bucmhp4:0,iayac2:"flkahu5",b6ubon:"fw457kn",Bqinb2h:"f1wmllxl"},badge:{qhf8xq:"f1euv43f",B5kzvoi:"f1yab3r1",j35jbq:["f1e31b4d","f1vgc2s3"]},badgeCutout:{btxmck:"f1eugkqs"},badgeAlign:{Dnlfbu:["f1tlnv9o","f1y9kyih"]},tiny:{Bdjeniz:"f1uwoubl",niu6jh:"fid048z"},"extra-small":{Bdjeniz:"f13ar0e0",niu6jh:"fid048z"},small:{Bdjeniz:"fwwuruf",niu6jh:"fid048z"},medium:{Bdjeniz:"f1af27q5",niu6jh:"fid048z"},large:{Bdjeniz:"f18yy57a",niu6jh:"f924bxt"},"extra-large":{Bdjeniz:"f2jg042",niu6jh:"f924bxt"},icon12:{Be2twd7:"f1ugzwwg"},icon16:{Be2twd7:"f4ybsrx"},icon20:{Be2twd7:"fe5j1ua"},icon24:{Be2twd7:"f1rt2boy"},icon28:{Be2twd7:"f24l1pt"},icon32:{Be2twd7:"ffl51b"},icon48:{Be2twd7:"f18m8u13"}}),v=(0,i.O)({16:{a9b677:"fjw5fx7",Bqenvij:"fd461yt"},20:{a9b677:"f64fuq3",Bqenvij:"fjamq6b"},24:{a9b677:"fq4mcun",Bqenvij:"frvgh55"},28:{a9b677:"f1w9dchk",Bqenvij:"fxldao9"},32:{a9b677:"f1szoe96",Bqenvij:"f1d2rq10"},36:{a9b677:"fpdz1er",Bqenvij:"f8ljn23"},40:{a9b677:"feqmc2u",Bqenvij:"fbhnoac"},48:{a9b677:"f124akge",Bqenvij:"ff2sm71"},56:{a9b677:"f1u66zr1",Bqenvij:"fzki0ko"},64:{a9b677:"fa9ln6p",Bqenvij:"f16k9i2m"},72:{a9b677:"fhcae8x",Bqenvij:"f1shusfg"},96:{a9b677:"f1kyr2gn",Bqenvij:"fypu0ge"},120:{a9b677:"fwfqyga",Bqenvij:"fjr5b71"},128:{a9b677:"f1iksgmy",Bqenvij:"fele2au"}}),m=(0,i.O)({neutral:{sj55zd:"f11d4kpn",De3pzq:"f18f03hv"},brand:{sj55zd:"fonrgv7",De3pzq:"f1blnnmj"},"dark-red":{sj55zd:"fqjd1y1",De3pzq:"f1vq2oo4"},cranberry:{sj55zd:"fg9gses",De3pzq:"f1lwxszt"},red:{sj55zd:"f23f7i0",De3pzq:"f1q9qhfq"},pumpkin:{sj55zd:"fjnan08",De3pzq:"fz91bi3"},peach:{sj55zd:"fknu15p",De3pzq:"f1b9nr51"},marigold:{sj55zd:"f9603vw",De3pzq:"f3z4w6d"},gold:{sj55zd:"fmq0uwp",De3pzq:"fg50kya"},brass:{sj55zd:"f28g5vo",De3pzq:"f4w2gd0"},brown:{sj55zd:"ftl572b",De3pzq:"f14wu1f4"},forest:{sj55zd:"f1gymlvd",De3pzq:"f19ut4y6"},seafoam:{sj55zd:"fnnb6wn",De3pzq:"f1n057jc"},"dark-green":{sj55zd:"ff58qw8",De3pzq:"f11t05wk"},"light-teal":{sj55zd:"f1up9qbj",De3pzq:"f42feg1"},teal:{sj55zd:"f135dsb4",De3pzq:"f6hvv1p"},steel:{sj55zd:"f151dlcp",De3pzq:"f1lnp8zf"},blue:{sj55zd:"f1rjv50u",De3pzq:"f1ggcpy6"},"royal-blue":{sj55zd:"f1emykk5",De3pzq:"f12rj61f"},cornflower:{sj55zd:"fqsigj7",De3pzq:"f8k7hur"},navy:{sj55zd:"f1nj97xi",De3pzq:"f19gw0ux"},lavender:{sj55zd:"fwctg0i",De3pzq:"ff379vm"},purple:{sj55zd:"fjrsgpu",De3pzq:"f1mzf1e1"},grape:{sj55zd:"f1fiiydq",De3pzq:"f1o4k8oy"},lilac:{sj55zd:"f1res9jt",De3pzq:"f1x6mz1o"},pink:{sj55zd:"fv3fbbi",De3pzq:"fydlv6t"},magenta:{sj55zd:"f1f1fwnz",De3pzq:"f4xb6j5"},plum:{sj55zd:"f8ptl6j",De3pzq:"fqo8e26"},beige:{sj55zd:"f1ntv3ld",De3pzq:"f101elhj"},mink:{sj55zd:"f1fscmp",De3pzq:"f13g8o5c"},platinum:{sj55zd:"f1dr00v2",De3pzq:"fkh7blw"},anchor:{sj55zd:"f1f3ti53",De3pzq:"fu4yj0j"}}),g=(0,i.O)({neutral:{Bic5iru:"f1uuiafn"},brand:{Bic5iru:"f1uuiafn"},"dark-red":{Bic5iru:"f1t2x9on"},cranberry:{Bic5iru:"f1pvshc9"},red:{Bic5iru:"f1ectbk9"},pumpkin:{Bic5iru:"fvzpl0b"},peach:{Bic5iru:"fwj2kd7"},marigold:{Bic5iru:"fr120vy"},gold:{Bic5iru:"f8xmmar"},brass:{Bic5iru:"f1hbety2"},brown:{Bic5iru:"f1vg3s4g"},forest:{Bic5iru:"f1m3olm5"},seafoam:{Bic5iru:"f17xiqtr"},"dark-green":{Bic5iru:"fx32vyh"},"light-teal":{Bic5iru:"f1mkihwv"},teal:{Bic5iru:"fecnooh"},steel:{Bic5iru:"f15hfgzm"},blue:{Bic5iru:"fqproka"},"royal-blue":{Bic5iru:"f17v2w59"},cornflower:{Bic5iru:"fp0q1mo"},navy:{Bic5iru:"f1nlym55"},lavender:{Bic5iru:"f62vk8h"},purple:{Bic5iru:"f15zl69q"},grape:{Bic5iru:"f53w4j7"},lilac:{Bic5iru:"fu2771t"},pink:{Bic5iru:"fzflscs"},magenta:{Bic5iru:"fb6rmqc"},plum:{Bic5iru:"f1a4gm5b"},beige:{Bic5iru:"f1qpf9z1"},mink:{Bic5iru:"f1l7or83"},platinum:{Bic5iru:"fzrj0iu"},anchor:{Bic5iru:"f8oz6wf"}}),h=e=>{const{size:a,shape:t,active:r,activeAppearance:i,color:h}=e,B=c(),z=d(),k=p(),j=b(),q=v(),w=m(),y=g(),x=[B,32!==a&&q[a]];if(e.badge&&x.push(j.badgeAlign,j[e.badge.size||"medium"]),a<=24?x.push(j.textCaption2Strong):a<=28?x.push(j.textCaption1Strong):a<=40||(a<=56?x.push(j.textSubtitle2):a<=96?x.push(j.textSubtitle1):x.push(j.textTitle3)),"square"===t&&(a<=24?x.push(j.squareSmall):a<=48?x.push(j.squareMedium):a<=72?x.push(j.squareLarge):x.push(j.squareXLarge)),"active"!==r&&"inactive"!==r||(x.push(j.activeOrInactive),"ring"!==i&&"ring-shadow"!==i||(x.push(j.ring,y[h]),e.badge&&x.push(j.ringBadgeCutout),a<=48?x.push(j.ringThick):a<=64?x.push(j.ringThicker):x.push(j.ringThickest)),"shadow"!==i&&"ring-shadow"!==i||(x.push(j.shadow),a<=28?x.push(j.shadow4):a<=48?x.push(j.shadow8):a<=64?x.push(j.shadow16):x.push(j.shadow28)),"inactive"===r&&x.push(j.inactive)),e.root.className=(0,f.z)(n,...x,e.root.className),e.badge&&(e.badge.className=(0,f.z)(u,j.badge,e.badge.className)),e.image&&(e.image.className=(0,f.z)(s,z,w[h],e.badge&&j.badgeCutout,e.image.className)),e.initials&&(e.initials.className=(0,f.z)(l,k,w[h],e.badge&&j.badgeCutout,e.initials.className)),e.icon){let t;t=a<=16?j.icon12:a<=24?j.icon16:a<=40?j.icon20:a<=48?j.icon24:a<=56?j.icon28:a<=72?j.icon32:j.icon48,e.icon.className=(0,f.z)(o,k,t,w[h],e.badge&&j.badgeCutout,e.icon.className)}return e}},500260:(e,a,t)=>{t.d(a,{U:()=>n,u:()=>s});var r=t(513432);const i=r.createContext(void 0),f={},n=i.Provider,s=()=>{var e;return null!==(e=r.useContext(i))&&void 0!==e?e:f}},634929:(e,a,t)=>{t.d(a,{r:()=>f});var r=t(644525),i=t(854130);const f=e=>((0,i.C)(e),(0,r.FD)(e.root,{children:["before"===e.iconPosition&&e.icon&&(0,r.Y)(e.icon,{}),e.root.children,"after"===e.iconPosition&&e.icon&&(0,r.Y)(e.icon,{})]}))},273178:(e,a,t)=>{t.d(a,{c:()=>f});t(513432);var r=t(164093),i=t(250452);const f=(e,a)=>{const{shape:t="circular",size:f="medium",iconPosition:n="before",appearance:s="filled",color:l="brand"}=e;return{shape:t,size:f,iconPosition:n,appearance:s,color:l,components:{root:"div",icon:"span"},root:r.Gk((0,i.g)("div",{ref:a,...e}),{elementType:"div"}),icon:r.lq(e.icon,{elementType:"span"})}}},83596:(e,a,t)=>{t.d(a,{n:()=>C});var r=t(513432),i=t(164093),f=t(883493);f.TTi,f.TTi,f.fGI,f.Ndk,f.qSk,f.qSk;const n={tiny:f.jcT,"extra-small":f.jcT,small:f.NUA,medium:f.B2S,large:f.grK,"extra-large":f.grK},s={tiny:f.qXC,"extra-small":f.qXC,small:f.uO1,medium:f.gNt,large:f.HkI,"extra-large":f.HkI},l={tiny:f.qvE,"extra-small":f.qvE,small:f._E3,medium:f.yQ7,large:f.Vo$,"extra-large":f.Vo$},o={tiny:f.DWd,"extra-small":f.DWd,small:f.Z4e,medium:f.TNE,large:f.mx_,"extra-large":f.mx_},u={tiny:f.U$D,"extra-small":f.U$D,small:f.gC_,medium:f.ORW,large:f.vsS,"extra-large":f.vsS},c={tiny:f.F$H,"extra-small":f.F$H,small:f.hmO,medium:f.fPq,large:f.MxQ,"extra-large":f.MxQ},d={tiny:f.xmy,"extra-small":f.xmy,small:f.X8c,medium:f.dR_,large:f.KCz,"extra-large":f.KCz},p={tiny:f.PM$,"extra-small":f.PM$,small:f.nPn,medium:f.lYg,large:f.omG,"extra-large":f.omG},b={tiny:f.y3Y,"extra-small":f.y3Y,small:f.gNc,medium:f.uOK,large:f.X0b,"extra-large":f.X0b},v={tiny:f.xo$,"extra-small":f.xo$,small:f.$Oq,medium:f.b8q,large:f.ADj,"extra-large":f.ADj};var m=t(273178);const g={busy:"busy","out-of-office":"out of office",away:"away",available:"available",offline:"offline","do-not-disturb":"do not disturb",unknown:"unknown",blocked:"blocked"},h=(e,a)=>{const{size:t="medium",status:f="available",outOfOffice:h=!1}=e,B=g[f],z=e.outOfOffice&&"out-of-office"!==e.status?` ${g["out-of-office"]}`:"",k=((e,a,t)=>{switch(e){case"available":return a?s[t]:l[t];case"away":return a?p[t]:n[t];case"blocked":return o[t];case"busy":return a?v[t]:u[t];case"do-not-disturb":return a?d[t]:c[t];case"offline":return a?p[t]:b[t];case"out-of-office":return p[t];case"unknown":return v[t]}})(f,h,t);return{...(0,m.c)({"aria-label":B+z,role:"img",...e,size:t,icon:i.lq(e.icon,{defaultProps:{children:k?r.createElement(k,null):null},renderByDefault:!0,elementType:"span"})},a),status:f,outOfOffice:h}};var B=t(103735),z=t(965804),k=t(526521);const j="fui-PresenceBadge",q="fui-PresenceBadge__icon",w=(0,B.D)("r832ydo",null),y=(0,B.D)("r11ag4qr",null),x=(0,z.O)({statusBusy:{sj55zd:"fvi85wt"},statusAway:{sj55zd:"f14k8a89"},statusAvailable:{sj55zd:"fqa5hgp"},statusOffline:{sj55zd:"f11d4kpn"},statusOutOfOffice:{sj55zd:"fdce8r3"},statusUnknown:{sj55zd:"f11d4kpn"},outOfOffice:{sj55zd:"fr0bkrk"},outOfOfficeAvailable:{sj55zd:"fqa5hgp"},outOfOfficeBusy:{sj55zd:"fvi85wt"},outOfOfficeUnknown:{sj55zd:"f11d4kpn"},tiny:{Bubjx69:"f9ikmtg",a9b677:"f16dn6v3",B2eet1l:"f1w2irj7",B5pe6w7:"fab5kbq",p4uzdd:"f1ms1d91"},large:{Bubjx69:"f9ikmtg",a9b677:"f64fuq3",B5pe6w7:"f1vfi1yj",p4uzdd:"f15s34gz"},extraLarge:{Bubjx69:"f9ikmtg",a9b677:"f1w9dchk",B5pe6w7:"f14efy9b",p4uzdd:"fhipgdu"}});var D=t(35871),O=t(634929);const C=r.forwardRef(((e,a)=>{const t=h(e,a);return(e=>{const a=w(),t=y(),r=x(),i="busy"===(f=e.status)||"do-not-disturb"===f||"blocked"===f;var f;e.root.className=(0,k.z)(j,a,i&&r.statusBusy,"away"===e.status&&r.statusAway,"available"===e.status&&r.statusAvailable,"offline"===e.status&&r.statusOffline,"out-of-office"===e.status&&r.statusOutOfOffice,"unknown"===e.status&&r.statusUnknown,e.outOfOffice&&r.outOfOffice,e.outOfOffice&&"available"===e.status&&r.outOfOfficeAvailable,e.outOfOffice&&i&&r.outOfOfficeBusy,e.outOfOffice&&("out-of-office"===e.status||"away"===e.status||"offline"===e.status)&&r.statusOutOfOffice,e.outOfOffice&&"unknown"===e.status&&r.outOfOfficeUnknown,"tiny"===e.size&&r.tiny,"large"===e.size&&r.large,"extra-large"===e.size&&r.extraLarge,e.root.className),e.icon&&(e.icon.className=(0,k.z)(q,t,e.icon.className))})(t),(0,D.useCustomStyleHook_unstable)("usePresenceBadgeStyles_unstable")(t),(0,O.r)(t)}));C.displayName="PresenceBadge"},537602:(e,a,t)=>{t.d(a,{q:()=>n});var r=t(716300),i=t(513432),f=t(253070);const n=e=>{const a=i.createContext({value:{current:e},version:{current:-1},listeners:[]});var t;return a.Provider=(t=a.Provider,e=>{const a=i.useRef(e.value),n=i.useRef(0),s=i.useRef();return s.current||(s.current={value:a,version:n,listeners:[]}),(0,r.E)((()=>{a.current=e.value,n.current+=1,(0,f.unstable_runWithPriority)(f.unstable_NormalPriority,(()=>{s.current.listeners.forEach((a=>{a([n.current,e.value])}))}))}),[e.value]),i.createElement(t,{value:s.current},e.children)}),delete a.Consumer,a}},925586:(e,a,t)=>{t.d(a,{i:()=>n});var r=t(602835),i=t(716300),f=t(513432);const n=(e,a)=>{const t=f.useContext(e),{value:{current:n},version:{current:s},listeners:l}=t,o=a(n),[u,c]=f.useState([n,o]),d=e=>{c((t=>{if(!e)return[n,o];if(e[0]<=s)return Object.is(t[1],o)?t:[n,o];try{if(Object.is(t[0],e[1]))return t;const r=a(e[1]);return Object.is(t[1],r)?t:[e[1],r]}catch(e){}return[t[0],t[1]]}))};Object.is(u[1],o)||d(void 0);const p=(0,r.D)(d);return(0,i.E)((()=>(l.push(p),()=>{const e=l.indexOf(p);l.splice(e,1)})),[p,l]),u[1]}},795631:(e,a,t)=>{t.d(a,{c:()=>l});var r=t(513432),i=t(488307),f=t(271300),n=t(330091),s=t(35871);const l=r.forwardRef(((e,a)=>{const t=(0,f.Y)(e,a);return(0,n.K)(t),(0,s.useCustomStyleHook_unstable)("useDividerStyles_unstable")(t),(0,i.v)(t)}));l.displayName="Divider"},488307:(e,a,t)=>{t.d(a,{v:()=>f});var r=t(644525),i=t(854130);const f=e=>((0,i.C)(e),(0,r.Y)(e.root,{children:void 0!==e.root.children&&(0,r.Y)(e.wrapper,{children:e.root.children})}))},271300:(e,a,t)=>{t.d(a,{Y:()=>n});t(513432);var r=t(411947),i=t(164093),f=t(250452);const n=(e,a)=>{const{alignContent:t="center",appearance:n="default",inset:s=!1,vertical:l=!1,wrapper:o}=e,u=(0,r.Bi)("divider-");return{alignContent:t,appearance:n,inset:s,vertical:l,components:{root:"div",wrapper:"div"},root:i.Gk((0,f.g)("div",{role:"separator","aria-orientation":l?"vertical":"horizontal","aria-labelledby":e.children?u:void 0,...e,ref:a}),{elementType:"div"}),wrapper:i.Gk(o,{defaultProps:{id:u,children:e.children},elementType:"div"})}}},330091:(e,a,t)=>{t.d(a,{K:()=>u});var r=t(965804),i=t(526521);const f="fui-Divider",n="fui-Divider__wrapper",s=(0,r.O)({base:{Bt984gj:"f122n59",B7ck84d:"f1ewtqcl",mc9l5x:"f22iagw",Beiy3e4:"f1063pyq",Bh6795r:"fqerorx",qhf8xq:"f10pi13n",Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bhrd7zp:"figsok6",Bg96gwp:"fwrc4pm",fsow6f:"f17mccla",Bcvre1j:"fyl8oag",Br0sdwz:"f16vkdww",Bn78ew0:"fhsnbul",li1rpt:"f1gw3sf2",ap17g6:"f1ly5f7u",B771hl4:"f1s3tz6t"},childless:{susq4k:"f1kyqvp9",Bicfajf:["fzynn9s","f1z0ukd1"],jwcpgy:["fekrn8e","ftdg338"],B4rk6o:"fesgyo"},start:{Bsft5z2:"f13zj6fq"},center:{Ftih45:"f1wl9k8s",Bsft5z2:"f13zj6fq"},end:{Ftih45:"f1wl9k8s"},brand:{sj55zd:"f16muhyy",Bq4z7u6:"fcbuu2a",Bk5zm6e:["f1wdw2dr","f1ttio3w"],Bqjgrrk:"f1582fpk",Bm6vgfq:["f1ttio3w","f1wdw2dr"],B0n5ga8:"f1ahrvm8",s924m2:["f1cd3wbc","f17hbk9y"],B1q35kw:"fvrapl0",Gp14am:["f17hbk9y","f1cd3wbc"]},default:{sj55zd:"fkfq4zb",Bq4z7u6:"f1vccso1",Bk5zm6e:["f1geml7w","fjml6kk"],Bqjgrrk:"f1r7kh1m",Bm6vgfq:["fjml6kk","f1geml7w"],B0n5ga8:"f16j7guv",s924m2:["fx01ahm","fj1a37q"],B1q35kw:"fl8d8yv",Gp14am:["fj1a37q","fx01ahm"]},subtle:{sj55zd:"f11d4kpn",Bq4z7u6:"f5g06un",Bk5zm6e:["f13sxdku","f1n015lb"],Bqjgrrk:"f1x6bl8t",Bm6vgfq:["f1n015lb","f13sxdku"],B0n5ga8:"fvod1wy",s924m2:["fwslg65","flk0e17"],B1q35kw:"f103fvts",Gp14am:["flk0e17","fwslg65"]},strong:{sj55zd:"f19n0e5",Bq4z7u6:"f10tv6oz",Bk5zm6e:["f16xp3sf","f1seuxxq"],Bqjgrrk:"fwrmqbx",Bm6vgfq:["f1seuxxq","f16xp3sf"],B0n5ga8:"ft83z1f",s924m2:["f1g4150c","f192dr6e"],B1q35kw:"f1qnawh6",Gp14am:["f192dr6e","f1g4150c"]}}),l=(0,r.O)({base:{a9b677:"fly5x3f",Bdkvgpv:"f163fonl",B0qfbqy:"f51yk4v",pbipgd:"f13rof3u",Bm2nyyq:"f8rth92",xrcqlc:"f6czdpx",i5u598:"f1iyka9k"},inset:{uwmqm3:["fjlbh76","f11qrl6u"],z189sj:["f11qrl6u","fjlbh76"]},start:{Ftih45:"f1wl9k8s",Bicfajf:["f1ojjlep","fk1kexq"],Bxwl2t9:"f1he2m4d",jwcpgy:["f12w1bnb","f1558wlj"]},center:{Bicfajf:["f1ojjlep","fk1kexq"],jwcpgy:["f12w1bnb","f1558wlj"]},end:{Bicfajf:["f1ojjlep","fk1kexq"],Bsft5z2:"f13zj6fq",jwcpgy:["f12w1bnb","f1558wlj"],Iy66sp:"f1ayce8x"}}),o=(0,r.O)({base:{Beiy3e4:"f1vx9l62",sshi5w:"f16gbxbe",m598lv:["f1yq6w5o","f1jpmc5p"],B4f6apu:["f9sc749","f1x8pvcy"],zkzzav:"fhkwbjy",Barhvk9:["flthirb","ftkbnf5"],Ihftqj:["f13hvwk3","f1en4csx"],Bde111x:"f19onpk6"},inset:{B6of3ja:"f1xdg43u",jrapky:"f1jlhsmd"},withChildren:{sshi5w:"f1tjaq3g"},start:{Ftih45:"f1wl9k8s",susq4k:"fg2pwug",Bbdr6tz:"fkjtzyi",B4rk6o:"f8vk40g"},center:{susq4k:"fg2pwug",B4rk6o:"f8vk40g"},end:{susq4k:"fg2pwug",Bsft5z2:"f13zj6fq",B4rk6o:"f8vk40g",gn64ia:"fqg5mu5"}}),u=e=>{const a=s(),t=l(),r=o(),{alignContent:u,appearance:c,inset:d,vertical:p}=e;return e.root.className=(0,i.z)(f,a.base,a[u],c&&a[c],!p&&t.base,!p&&d&&t.inset,!p&&t[u],p&&r.base,p&&d&&r.inset,p&&r[u],p&&void 0!==e.root.children&&r.withChildren,void 0===e.root.children&&a.childless,e.root.className),e.wrapper&&(e.wrapper.className=(0,i.z)(n,e.wrapper.className)),e}},618278:(e,a,t)=>{t.d(a,{q:()=>f});var r=t(644525),i=t(854130);const f=e=>((0,i.C)(e),(0,r.Y)(e.root,{}))},266713:(e,a,t)=>{t.d(a,{f:()=>s});t(513432);var r=t(164093),i=t(250452),f=t(35871),n=t(48374);const s=(e,a)=>{const t=(0,f.useBackgroundAppearance)(),{appearance:s="default",disabled:l=!1,disabledFocusable:o=!1,inline:u=!1}=e,c=e.as||(e.href?"a":"button"),d={role:"span"===c?"button":void 0,type:"button"===c?"button":void 0,...e,as:c},p={appearance:s,disabled:l,disabledFocusable:o,inline:u,components:{root:c},root:r.Gk((0,i.g)(c,{ref:a,...d}),{elementType:c}),backgroundAppearance:t};return(e=>{const{disabled:a,disabledFocusable:t}=e,{onClick:r,onKeyDown:i,role:f,tabIndex:s}=e.root;"a"===e.root.as&&(e.root.href=a?void 0:e.root.href,(a||t)&&(e.root.role=f||"link")),"a"!==e.root.as&&"span"!==e.root.as||(e.root.tabIndex=null!=s?s:a&&!t?void 0:0),e.root.onClick=e=>{a||t?e.preventDefault():null==r||r(e)},e.root.onKeyDown=e=>{!a&&!t||e.key!==n.xyI&&e.key!==n.$xS?null==i||i(e):(e.preventDefault(),e.stopPropagation())},e.disabled=a||t,e.root["aria-disabled"]=a||t||void 0,"button"===e.root.as&&(e.root.disabled=a&&!t)})(p),p}},284942:(e,a,t)=>{t.d(a,{r:()=>s});var r=t(965804),i=t(526521);const f="fui-Link",n=(0,r.O)({focusIndicator:{Bttzg6e:"fhgqx19",B3uz8dt:"f1olyrje",B6ihwck:"f1p93eir",g9k6zt:"f1nev41a"},root:{B486eqv:"f2hkw1w",De3pzq:"f3rmtva",B7ck84d:"f1ewtqcl",sj55zd:"fyind8e",Bceei9c:"f1k6fduh",mc9l5x:"f1w7gpdv",Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",jrapky:0,Frg6f3:0,t21cq0:0,B6of3ja:0,B74szlk:"f1s184ao",Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"f1mk8lai",B68tc82:0,Bmxbyg5:0,Bpg54ce:"fnbmjn9",fsow6f:["f1o700av","fes3tcz"],w71qe1:"f1iuv45f",Bkioxbp:"f1cmlufx",ygn44y:"f9n3di6",famaaq:"f1ids18y",Bde5pd6:"f1tx3yz7",Bi91k9c:"f1deo86v",i089h6:"f1eh06m1",lj723h:"f1iescvh"},button:{icvyot:"f1ern45e",vrafjx:["f1n71otn","f1deefiw"],oivjwe:"f1h8hb77",wvpqe5:["f1deefiw","f1n71otn"]},href:{Be2twd7:"fjoy568"},subtle:{sj55zd:"fkfq4zb",Bde5pd6:"f1tx3yz7",Bi91k9c:"fnwyq0v",i089h6:"f1eh06m1",lj723h:"flvvhsy"},inline:{w71qe1:"f13mvf36"},disabled:{w71qe1:"f1iuv45f",sj55zd:"f1s2aq7o",Bceei9c:"fdrzuqr",Bde5pd6:"fbnuktb",Bi91k9c:"fvgxktp",i089h6:"fljg2da",lj723h:"f19wldhg"},inverted:{sj55zd:"f1qz2gb0",Bi91k9c:"f1mlt8il",lj723h:"f1hsd4st"}}),s=e=>{const a=n(),{appearance:t,disabled:r,inline:s,root:l,backgroundAppearance:o}=e;return e.root.className=(0,i.z)(f,a.root,a.focusIndicator,"a"===l.as&&l.href&&a.href,"button"===l.as&&a.button,"subtle"===t&&a.subtle,"inverted"===o&&a.inverted,s&&a.inline,r&&a.disabled,e.root.className),e}},726138:(e,a,t)=>{t.d(a,{p:()=>l});var r=t(513432),i=t(35871),f=t(367927),n=t(132856),s=t(716300);const l=()=>{const{targetDocument:e}=(0,i.useFluent_unstable)(),a=(null==e?void 0:e.defaultView)||void 0,t=null==a?void 0:a.__tabsterShadowDOMAPI,l=r.useMemo((()=>a?(0,f._A)(a,{autoRoot:{},controlTab:!1,getParent:n.P,checkUncontrolledTrappingFocus:e=>{var a;return!!(null===(a=e.firstElementChild)||void 0===a?void 0:a.hasAttribute("data-is-focus-trap-zone-bumper"))},DOMAPI:t}):null),[a,t]);return(0,s.E)((()=>()=>{l&&(0,f.hC)(l)}),[l]),l}},571807:(e,a,t)=>{t.d(a,{g:()=>n});var r=t(367927),i=t(726138),f=t(513432);const n=e=>{(0,i.p)();const a=(0,r.U6)(e,!0);return f.useMemo((()=>({[r.h7]:a})),[a])}},466759:(e,a,t)=>{t.d(a,{X:()=>i});var r=t(513432);function i(e,a){const t=r.useRef(void 0),i=r.useCallback(((r,i)=>(void 0!==t.current&&a(t.current),t.current=e(r,i),t.current)),[a,e]),f=r.useCallback((()=>{void 0!==t.current&&(a(t.current),t.current=void 0)}),[a]);return r.useEffect((()=>f),[f]),[i,f]}},132915:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(466759);function i(){return(0,r.X)(setTimeout,clearTimeout)}},264278:(e,a,t)=>{function r(e,a){return(...t)=>{null==e||e(...t),null==a||a(...t)}}t.d(a,{p:()=>r})},132856:(e,a,t)=>{function r(e,a={}){if(!e)return null;if(!a.skipVirtual){const a=function(e){return(a=e)&&a._virtual&&e._virtual.parent||null;var a}(e);if(a)return a}const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t}t.d(a,{P:()=>r})}}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/988887-e26c0e96e78308d5.js.map