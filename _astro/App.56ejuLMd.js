import{r as p}from"./index.DhYZZe0J.js";/* empty css                     */var x={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=p,h=Symbol.for("react.element"),j=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,g=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(s,t,a){var n,l={},r=null,c=null;a!==void 0&&(r=""+a),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)N.call(t,n)&&!v.hasOwnProperty(n)&&(l[n]=t[n]);if(s&&s.defaultProps)for(n in t=s.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:h,type:s,key:r,ref:c,props:l,_owner:g.current}}d.Fragment=j;d.jsx=u;d.jsxs=u;x.exports=d;var e=x.exports;function b({text:s="Nota",type:t=null,funct:a=null}){return e.jsx("input",{className:"app-input br-6",placeholder:s,inputype:t==="%"?"true":"false",onChange:a,maxLength:3,tabIndex:0})}function C({text:s="00%"}){const t=a=>{a.target.value>=100&&(a.target.value=100)};return e.jsx("input",{className:"app-input per br-6",placeholder:s,maxLength:3,tabIndex:-1,onChange:t})}const y=p.createContext();function S(){const[s,t]=p.useState([{},{},{},{}]),[a,n]=p.useState(20),l=()=>{t([...s,{}]),r()},r=()=>{let o=0;document.querySelectorAll(".app-input[inputype = false]").forEach(i=>{let f=Number(i.value);o+=f}),n(o/s.length)},c=o=>{o.target.closest(".click").nextElementSibling.classList.toggle("d-none")};return e.jsx(y.Provider,{value:{GCData:a},children:e.jsxs("div",{className:"app-container mx-auto",children:[e.jsxs("section",{className:"app-left f-col g-10",children:[e.jsxs("div",{className:"app-config relative",children:[e.jsxs("section",{className:"click f-row f-justify-between f-align-center pointer",onClick:c,children:[e.jsx("p",{className:"app-text no-select",style:{fontSize:"14.5px",margin:"0px"},children:"Configuration"}),e.jsx("span",{className:"separator no-select"}),e.jsx("span",{className:"arrow no-select",children:e.jsx("svg",{className:"no-select",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",fill:"#a5a5a5"})})})]}),e.jsxs("section",{className:"app-drop-config absolute f-col br-8 d-none o-hidden",children:[e.jsx("h4",{children:"Configuration"}),e.jsx("div",{className:"f-col"})]})]}),e.jsxs("div",{className:"app-result br-10 f-col f-align-center",children:[e.jsx("h3",{className:"app-title",children:"Final Result"}),e.jsxs("div",{className:"d-flex f-center relative",children:[e.jsx("h4",{className:"text-center",children:Math.floor(a)}),e.jsx("div",{className:"absolute"})]}),e.jsx("p",{className:"text-center",children:a>=11.5?"Felicidades !Aprobaste!":"Lo sentimos, No aprobaste"})]})]}),e.jsxs("section",{className:"app-right f-col",children:[e.jsx("h3",{className:"app-subtitle",children:"Promedy Calculator"}),e.jsx("p",{className:"app-text",children:"Astroplate is a free starter template built with Astro and TailwindCSS, providing."}),e.jsxs("ul",{className:"app-in-parent f-col g-10",children:[s&&s.map((o,i)=>e.jsxs("li",{className:"f-row g-15",children:[e.jsx(b,{text:`Nota ${i+1}`,funct:r}),e.jsx(C,{text:`${Math.round(100/s.length)}%`})]},i)),e.jsxs("li",{className:"f-row g-15",children:[e.jsx("span",{className:"none",tabIndex:"0"}),e.jsx("span",{className:"pc-btn-black d-flex f-center br-6",onClick:l,children:"Add"})]})]})]})]})})}export{S as default};
