import{u as d,j as t,M as I,D as L,A as p,S as P,R as x,N as h}from"./App.DADufZEj.js";/* empty css                     */import{r as N}from"./index.DhYZZe0J.js";function b(){return{Normal:n=>{let l=0;return n.forEach(r=>{l+=Number(r.Note)}),l/n.length},Ponderado:n=>{let l=0,r=100,s=n.filter(e=>e.per==="");return n.forEach(e=>{r-=e.per}),r=r/s.length,n.forEach(e=>{l+=e.Note*(e.per?e.per/100:r/100)}),{Result:l,NoPer:r,array:n}},Local:(n,l)=>n*(l/100)}}function S({text:a="Nota"}){const{MaxNote:o,Decimal:c}={MaxNote:d(I),Decimal:d(L)},n=d(p),l=b(),[r,s]=N.useState(null),e=N.useRef(null),i=u=>{Number(u.target.value)>=o&&(u.target.value=o);const m=P(),f=l.Ponderado(m);x.set(f.Result),p.set(m)};return N.useEffect(()=>{let u=e.current.parentElement,m=u.getAttribute("inputid"),f=n.find(v=>v.id===Number(m));if(!f.Note)return;let g=u.querySelector(".app-input-per"),j=0;g.value?j=Number(g.value):j=Number(g.getAttribute("placeholder").replace("%","")),s(l.Local(f.Note,j))},[n]),t.jsxs("div",{className:"app-input-div br-6 f-row f-align-center relative",ref:e,children:[t.jsx("input",{className:"app-input-input br-6",placeholder:a,onChange:i,maxLength:c?7:4,tabIndex:0,use:"yes"}),t.jsx("span",{className:"app-input-local d-flex absolute f-center no-select","data-select":"local",children:n&&r?r.toFixed(2):null})]})}function D({msg:a,Delete:o}){const c=d(h),n=b(),l=s=>{s.target.value>=100&&(s.target.value=100);const e=P(),i=n.Ponderado(e);x.set(i.Result),h.set(i.NoPer),r(),p.set(e)},r=()=>{let s=0;document.querySelectorAll(".app-input-per").forEach(e=>{s+=Number(e.value)}),a(s!==100?"No suman 100%":null)};return t.jsxs("div",{className:"app-in-per-list f-row f-center",children:[t.jsxs("label",{className:"app-label-in-per br-6 f-row f-center",children:[t.jsx("input",{className:"app-input-per",placeholder:c&&c>0?`${Math.round(c)}`:"0",maxLength:4,tabIndex:-1,onChange:l}),t.jsx("span",{className:"no-select",children:"%"})]}),t.jsx("span",{className:"app-in-close d-flex f-center",onClick:o,children:t.jsxs("svg",{className:"no-select",height:28,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"1.5"}),t.jsx("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})}function M({data:a,msg:o,Delete:c}){return t.jsxs("li",{className:"app-input-parent d-grid g-15",inputid:a.id,children:[t.jsx(S,{text:a.Note?a.Note:`Nota ${a.id}`}),t.jsx(D,{msg:o,Delete:()=>c(a.id)})]})}function E(){const a=d(p),[o,c]=N.useState(null),n=b(),l=()=>{let s=P();p.set([...a,{Note:0,id:a.reduce((e,i)=>Math.max(e,i.id),0)+1,per:0}]),h.set(100/(s.length+1)),x.set(n.Normal(s))},r=s=>{let e=a.filter(i=>i.id!==s);p.set(e),h.set(100/e.length),x.set(n.Normal(e))};return t.jsxs("ul",{className:"f-col g-15 f-center",children:[a&&a.map((s,e)=>t.jsx(M,{data:s,msg:c,Delete:r},s.id)),t.jsxs("li",{className:"app-input-parent d-grid g-15",children:[t.jsx("p",{className:"app-text-error app-input-div none f-row f-justify-end f-align-center",children:o||null}),t.jsxs("div",{className:"app-in-per-list f-row f-align-center",children:[t.jsx("span",{className:"pc-btn-black d-flex f-justify-center br-6",onClick:l,children:"Add"}),t.jsx("span",{className:"app-in-close none no-select"})]})]})]})}export{E as default};
