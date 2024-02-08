"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5944],{62392:(ne,H,e)=>{e.d(H,{L:()=>M});var s=e(40476),D=e(8640),k=e(94700),C=e(95664),$=e(50584),X=e(41328),r=e(85668),G=e(38656),J=e(8024);const Y=(0,s.c)({svgIcon:{display:"inline-block","& svg":{display:"inline-block",fontSize:"inherit",verticalAlign:"baseline"}}});function N(o){const{href:i,text:c,Icon:p}=o,u=Y();return r.createElement(D.c,{display:"flex"},r.createElement(D.c,{mr:1,className:u.svgIcon},r.createElement(k.c,{component:"div"},p?r.createElement(p,null):r.createElement(G.c,null))),r.createElement(D.c,{flexGrow:"1"},r.createElement(J.Mj,{to:i,target:"_blank",rel:"noopener"},c||i)))}const t={xs:1,sm:1,md:1,lg:2,xl:3};function V(o){var i,c;const p=[(0,C.c)(l=>l.breakpoints.up("xl"))?"xl":null,(0,C.c)(l=>l.breakpoints.up("lg"))?"lg":null,(0,C.c)(l=>l.breakpoints.up("md"))?"md":null,(0,C.c)(l=>l.breakpoints.up("sm"))?"sm":null,(0,C.c)(l=>l.breakpoints.up("xs"))?"xs":null];let u=1;if(typeof o=="number")u=o;else{const l=(i=p.find(U=>U!==null))!=null?i:"xs";u=(c=o==null?void 0:o[l])!=null?c:t[l]}return u}function M(o){const{items:i,cols:c=void 0}=o,p=V(c);return r.createElement($.c,{rowHeight:"auto",cols:p},i.map(({text:u,href:l,Icon:U},Z)=>r.createElement(X.c,{key:Z},r.createElement(N,{href:l,text:u!=null?u:l,Icon:U}))))}},55944:(ne,H,e)=>{e.r(H),e.d(H,{AboutCard:()=>ue,AboutContent:()=>te,AboutField:()=>v});var s=e(17376),D=e(40476),k=e(94700),C=e(19947),$=e(84480),X=e(42704),r=e(1700),G=e(67256),J=e(24432),Y=e(43152),N=e(8024),t=e(85668),V=e(91548),M=e(91812),o=e(29292),i=e(7400),c=e(38348),p=e(48716),u=e(62392),l=e(2396),U=e(88224),Z=e(88312),ae=e(35936),le=e(3052),oe=e(17364),se=e(19664);const ie=(0,D.c)(m=>({value:{fontWeight:"bold",overflow:"hidden",lineHeight:"24px",wordBreak:"break-word"},label:{color:m.palette.text.secondary,textTransform:"uppercase",fontSize:"10px",fontWeight:"bold",letterSpacing:.5,overflow:"hidden",whiteSpace:"nowrap"}}));function v(m){const{label:g,value:d,gridSizes:f,children:O}=m,L=ie(),x=(0,M.aO)(O,h=>h.getElements()),I=x.length>0?x:t.createElement(k.c,{variant:"body2",className:L.value},d||"unknown");return t.createElement(C.c,{item:!0,...f},t.createElement(k.c,{variant:"h2",className:L.label},g),I)}const ce=(0,D.c)({description:{wordBreak:"break-word"}});function re(m,g,d){if(g==="url"||m.includes("://"))return m;const f=d.type==="file"?`file://${d.target}`:d.target;return g==="file"||d.type==="file"?new URL(m,f).href:f}function te(m){var g,d,f,O,L,x,I,h;const{entity:n}=m,b=ce(),a=n.kind.toLocaleLowerCase("en-US")==="system",F=n.kind.toLocaleLowerCase("en-US")==="resource",T=n.kind.toLocaleLowerCase("en-US")==="component",P=n.kind.toLocaleLowerCase("en-US")==="api",Q=n.kind.toLocaleLowerCase("en-US")==="template",A=n.kind.toLocaleLowerCase("en-US")==="location",K=n.kind.toLocaleLowerCase("en-US")==="group",z=(0,i.g)(n,s.QD,{kind:"system"}),S=(0,i.g)(n,s.QD,{kind:"component"}),R=(0,i.g)(n,s.QD,{kind:"domain"}),y=(0,i.g)(n,s.ag);let B;try{B=(0,s.ui)(n)}catch{B=void 0}return t.createElement(C.c,{container:!0},t.createElement(v,{label:"Description",gridSizes:{xs:12}},t.createElement(N.Ko,{className:b.description,content:((g=n==null?void 0:n.metadata)==null?void 0:g.description)||"No description"})),t.createElement(v,{label:"Owner",value:"No Owner",gridSizes:{xs:12,sm:6,lg:4}},y.length>0&&t.createElement(c.aK,{entityRefs:y,defaultKind:"group"})),(a||R.length>0)&&t.createElement(v,{label:"Domain",value:"No Domain",gridSizes:{xs:12,sm:6,lg:4}},R.length>0&&t.createElement(c.aK,{entityRefs:R,defaultKind:"domain"})),(P||T||F||z.length>0)&&t.createElement(v,{label:"System",value:"No System",gridSizes:{xs:12,sm:6,lg:4}},z.length>0&&t.createElement(c.aK,{entityRefs:z,defaultKind:"system"})),T&&S.length>0&&t.createElement(v,{label:"Parent Component",value:"No Parent Component",gridSizes:{xs:12,sm:6,lg:4}},t.createElement(c.aK,{entityRefs:S,defaultKind:"component"})),(P||T||F||Q||K||A||typeof((d=n==null?void 0:n.spec)==null?void 0:d.type)=="string")&&t.createElement(v,{label:"Type",value:(f=n==null?void 0:n.spec)==null?void 0:f.type,gridSizes:{xs:12,sm:6,lg:4}}),(P||T||typeof((O=n==null?void 0:n.spec)==null?void 0:O.lifecycle)=="string")&&t.createElement(v,{label:"Lifecycle",value:(L=n==null?void 0:n.spec)==null?void 0:L.lifecycle,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(v,{label:"Tags",value:"No Tags",gridSizes:{xs:12,sm:6,lg:4}},(((x=n==null?void 0:n.metadata)==null?void 0:x.tags)||[]).map(E=>t.createElement($.c,{key:E,size:"small",label:E}))),A&&(((I=n==null?void 0:n.spec)==null?void 0:I.targets)||((h=n==null?void 0:n.spec)==null?void 0:h.target))&&t.createElement(v,{label:"Targets",gridSizes:{xs:12}},t.createElement(u.L,{cols:1,items:(n.spec.targets||[n.spec.target]).map(E=>E).map(E=>{var W;return{text:E,href:re(E,((W=n==null?void 0:n.spec)==null?void 0:W.type)||"unknown",B)}})})))}const de="backstage.io/techdocs-ref",w="backstage.io/techdocs-entity",me=(0,D.c)({gridItemCard:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px"},fullHeightCard:{display:"flex",flexDirection:"column",height:"100%"},gridItemCardContent:{flex:1},fullHeightCardContent:{flex:1}});function ue(m){var g,d,f,O,L,x,I;const{variant:h}=m,n=(0,M.IT)(),b=me(),{entity:a}=(0,i.u)(),F=(0,o.u)(V.u1),T=(0,o.u)(c.sf),P=(0,o.u)(o.l),Q=(0,o.u)(o.r),A=(0,M.M7)(p.v),K=(0,M.M7)(p.b),{allowed:z}=(0,oe.mo)(se.Cs),S=(0,c.MF)(a,F),R=(g=a.metadata.annotations)==null?void 0:g[s.s1];let y;if((d=a.metadata.annotations)!=null&&d[w])try{y=(0,s.WK)((f=a.metadata.annotations)==null?void 0:f[w])}catch{y=void 0}const B={label:"View Source",disabled:!S,icon:t.createElement(V.mo,{type:S==null?void 0:S.integrationType}),href:S==null?void 0:S.locationTargetUrl},E={label:"View TechDocs",disabled:!((O=a.metadata.annotations)!=null&&O[de]||(L=a.metadata.annotations)!=null&&L[w])||!A,icon:t.createElement(Z.c,null),href:A&&A(y?{namespace:y.namespace||s.IV,kind:y.kind,name:y.name}:{namespace:a.metadata.namespace||s.IV,kind:a.kind,name:a.metadata.name})},W=[B,E];if((0,le.u)(a)){const ee=(x=n.getSystemIcon("scaffolder"))!=null?x:U.c,fe={label:"Launch Template",icon:t.createElement(ee,null),disabled:!K,href:K&&K({templateName:a.metadata.name,namespace:a.metadata.namespace||s.IV})};W.push(fe)}let q="";h==="gridItem"?q=b.gridItemCard:h==="fullHeight"&&(q=b.fullHeightCard);let _="";h==="gridItem"?_=b.gridItemCardContent:h==="fullHeight"&&(_=b.fullHeightCardContent);const j=(I=a.metadata.annotations)==null?void 0:I[s.Eg],ve=(j==null?void 0:j.startsWith("url:"))||(j==null?void 0:j.startsWith("file:")),ge=(0,t.useCallback)(async()=>{try{await T.refreshEntity((0,s.Qj)(a)),P.post({message:"Refresh scheduled",severity:"info",display:"transient"})}catch(ee){Q.post(ee)}},[T,P,Q,a]);return t.createElement(X.c,{className:q},t.createElement(r.c,{title:"About",action:t.createElement(t.Fragment,null,ve&&z&&t.createElement(G.c,{"aria-label":"Refresh",title:"Schedule entity refresh",onClick:ge},t.createElement(l.c,null)),t.createElement(G.c,{component:N.Mj,"aria-label":"Edit",disabled:!R,title:"Edit Metadata",to:R!=null?R:"#"},t.createElement(ae.c,null))),subheader:t.createElement(N.y,{links:W})}),t.createElement(J.c,null),t.createElement(Y.c,{className:_},t.createElement(te,{entity:a})))}var Ee=e(73208),pe=e(98880),he=e(67928)}}]);})();

//# sourceMappingURL=5944.b77edfd7.chunk.js.map