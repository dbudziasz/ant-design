(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["98316a3c"],{"98316a3c":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var a=t("f42785ac");t("94f4c2e4");var d=t("1faec3b1"),o=t("2bcfd376");let{SHOW_PARENT:i}=o.TreeSelect,n=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0"},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}];var u=()=>{let[e,l]=(0,d.useState)(["0-0-0"]);return(0,a.jsx)(o.TreeSelect,{treeData:n,value:e,onChange:e=>{console.log("onChange ",e),l(e);},treeCheckable:!0,showCheckedStrategy:i,placeholder:"Please select",style:{width:"100%"}});};}}]);