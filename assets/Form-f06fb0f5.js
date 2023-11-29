import{u as g,r as c,e as b,j as e,L as S,d as v,Q as r}from"./index-785252ed.js";import{I as l,a as w,b as m,c as O}from"./InputTextarea-e5da7da1.js";const k=({data:t})=>{var p;const u=g(),[i,y]=c.useState({}),[T,x]=c.useState(!1),[n,f]=c.useState({createdBy:(p=b)==null?void 0:p.userId,unitTypeName:t!=null&&t.unitTypeName?t.unitTypeName:"",unitTypeDesc:t!=null&&t.unitTypeDesc?t.unitTypeDesc:""}),a=s=>{const{name:o,value:I}=s.target;f({...n,[o]:I})},d=s=>{const o={};return s.unitTypeName||(o.unitTypeName="Unit Type Name is required"),s.unitTypeDesc||(o.unitTypeDesc="Unit Type Description is required"),o},N=s=>{y(d(n)),x(!0)},h=async()=>{try{await v.post("createUnitType",n),r.success("Successfully Excecuted!",{position:r.POSITION.TOP_RIGHT,autoClose:1500}),u("/master/unit-type")}catch(s){r.error("Something went wrong!",{position:r.POSITION.TOP_RIGHT,autoClose:1500}),console.log(s)}},j=async()=>{try{console.log("editUnitType",n),r.success("Successfully Excecuted!",{position:r.POSITION.TOP_RIGHT,autoClose:1500}),u("/master/unit-type")}catch(s){r.error("Something went wrong!",{position:r.POSITION.TOP_RIGHT,autoClose:1500}),console.log(s)}};return c.useEffect(()=>{Object.keys(i).length===0&&T&&(t!=null&&t.unitTypeId?j():h())},[i]),e.jsx(e.Fragment,{children:e.jsxs("form",{action:"#",children:[e.jsxs("div",{className:"mb-5.5 flex flex-col gap-5.5 sm:flex-row",children:[e.jsxs("div",{className:"w-full sm:w-1/2",children:[e.jsx(l,{htmlFor:"unitTypeName",lable:"Unit Type Name"}),e.jsx(w,{name:"unitTypeName",type:"text",changeHandler:a,value:n.unitTypeName}),e.jsx(m,{error:i.unitTypeName})]}),e.jsxs("div",{className:"w-full sm:w-1/2",children:[e.jsx(l,{htmlFor:"unitTypeDesc",lable:"Unit Type Name"}),e.jsx(O,{name:"unitTypeDesc",changeHandler:a,value:n.unitTypeDesc}),e.jsx(m,{error:i.unitTypeDesc})]})]}),e.jsxs("div",{className:"flex justify-end gap-4.5",children:[e.jsx(S,{to:"/master/unit-type",className:"flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white",children:"Cancel"}),e.jsx("button",{className:"flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1",type:"button",onClick:s=>N(),children:"Save"})]})]})})};export{k as F};