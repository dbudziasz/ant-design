(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["34b5d85b"],{"34b5d85b":function(e,a,r){"use strict";r.d(a,"__esModule",{value:!0}),r.d(a,"default",{enumerable:!0,get:function(){return y;}});var t=r("f42785ac");r("b899cecc");var d=r("2bcfd376");let{RangePicker:n}=d.DatePicker,l=e=>12*e.year()+e.month(),s=(e,{from:a,type:r})=>{if(a){let t=a.add(-6,"days"),d=a.add(6,"days");switch(r){case"year":return e.year()<t.year()||e.year()>d.year();case"month":return l(e)<l(t)||l(e)>l(d);default:return Math.abs(e.diff(a,"days"))>=7;}}return!1;},i=(e,{from:a,type:r})=>{if(a){let t=a.add(-5,"months"),d=a.add(5,"months");return"year"===r?e.year()<t.year()||e.year()>d.year():l(e)<l(t)||l(e)>l(d);}return!1;};var y=()=>(0,t.jsxs)(d.Space,{direction:"vertical",children:[(0,t.jsx)(d.Typography.Title,{level:5,children:"7 days range"}),(0,t.jsx)(n,{disabledDate:s}),(0,t.jsx)(d.Typography.Title,{level:5,children:"6 months range"}),(0,t.jsx)(n,{disabledDate:i,picker:"month"})]});}}]);