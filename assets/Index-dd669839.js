import{r as l,j as e,c as h,L as p,I as o,d as n,e as b}from"./index-d97e6660.js";import{D as j}from"./DataNotFound-8c6ca2ec.js";import{B as k}from"./Breadcrumb-972ba08a.js";const f="/master/unit-type/create",w=()=>{const[d,x]=l.useState([]),[i,r]=l.useState(!1);l.useEffect(()=>{(async()=>{var s;try{r(!0);let a=(await n.get("GetAllUnitType",{params:{projectId:(s=b)==null?void 0:s.projectId}})).data;(a==null?void 0:a.statusCode)==200&&x(a.data),r(!1)}catch(c){console.log(c),r(!1)}})()},[]);const m=async t=>{try{r(!0);let s=await n.post("DeleteUnitType",t);console.log(s)}catch(s){console.log(s)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(k,{title:"Unit types",button:"Create",buttonLink:f}),e.jsx("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-3 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:e.jsx("div",{className:"max-w-full overflow-x-auto",children:e.jsxs("table",{className:"w-full table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-2 text-left dark:bg-meta-4",children:[e.jsx("th",{className:"min-w-[120px] py-4 px-4 font-medium text-black dark:text-white",children:"Unit Name"}),e.jsx("th",{className:"min-w-[120px] py-4 px-4 font-medium text-black dark:text-white",children:"Unit Desc"}),e.jsx("th",{className:"py-4 px-4 font-medium text-black dark:text-white",children:"Actions"})]})}),e.jsx("tbody",{children:i?e.jsx("tr",{children:e.jsx("td",{colSpan:4,children:e.jsx(h,{})})}):e.jsxs(e.Fragment,{children:[d&&d.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e.jsx("h5",{className:"font-medium text-black dark:text-white",children:t==null?void 0:t.unitTypeName})}),e.jsx("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e.jsxs("p",{className:"text-black dark:text-white",children:[" ",t==null?void 0:t.unitTypeDesc," "]})}),e.jsx("td",{className:"border-b border-[#eee] py-5 px-4 dark:border-strokedark",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(p,{to:`/master/unit-type/${t==null?void 0:t.unitTypeId}/edit`,className:"hover:text-primary",children:e.jsx(o,{name:"edit"})}),e.jsx("button",{className:"hover:text-primary",onClick:()=>m(t==null?void 0:t.unitTypeId),children:e.jsx(o,{name:"delete"})})]})})]},s)),d.length==0&&e.jsx("tr",{children:e.jsx("td",{colSpan:4,children:e.jsx(j,{title:"Unit Type not found"})})})]})})]})})})]})})};export{w as default};