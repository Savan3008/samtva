import{u as y,r as c,e as g,j as e,L as S,i as T,Q as n}from"./index-d97e6660.js";import{I as u,a as v,b as k,c as w}from"./InputTextarea-66b12ff0.js";const D=({data:s})=>{var m;const l=y(),[o,b]=c.useState({}),[x,p]=c.useState(!1),[a,f]=c.useState({createdBy:(m=g)==null?void 0:m.userId,bankName:s!=null&&s.bankName?s.bankName:"",bankDesc:s!=null&&s.bankDesc?s.bankDesc:""}),i=r=>{const{name:t,value:I}=r.target;f({...a,[t]:I})},d=r=>{const t={};return r.bankName||(t.bankName="Bank Name is required"),r.bankDesc||(t.bankDesc="Bank Description is required"),t},N=r=>{b(d(a)),p(!0)},h=async()=>{try{await T.post("createBank",a),n.success("Successfully Excecuted!",{position:n.POSITION.TOP_RIGHT,autoClose:1500}),l("/master/bank-type")}catch(r){n.error("Something went wrong!",{position:n.POSITION.TOP_RIGHT,autoClose:1500}),console.log(r)}},j=async()=>{try{console.log("editBank",a),n.success("Successfully Excecuted!",{position:n.POSITION.TOP_RIGHT,autoClose:1500}),l("/master/bank-type")}catch(r){n.error("Something went wrong!",{position:n.POSITION.TOP_RIGHT,autoClose:1500}),console.log(r)}};return c.useEffect(()=>{Object.keys(o).length===0&&x&&(s!=null&&s.bankId?j():h())},[o]),e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",children:[e.jsxs("div",{className:"mb-5.5 flex flex-col gap-5.5 sm:flex-row",children:[e.jsxs("div",{className:"w-full sm:w-1/2",children:[e.jsx(u,{htmlFor:"bankName",lable:"Bank Name"}),e.jsx(v,{name:"bankName",type:"text",changeHandler:i,value:a.bankName}),e.jsx(k,{error:o.bankName})]}),e.jsxs("div",{className:"w-full sm:w-1/2",children:[e.jsx(u,{htmlFor:"bankDesc",lable:"Bank Name"}),e.jsx(w,{name:"bankDesc",changeHandler:i,value:a.bankDesc}),e.jsx(k,{error:o.bankDesc})]})]}),e.jsxs("div",{className:"flex justify-end gap-4.5",children:[e.jsx(S,{to:"/master/bank",className:"flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white",children:"Cancel"}),e.jsx("button",{className:"flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1",type:"button",onClick:r=>N(),children:"Save"})]})]})})};export{D as F};
