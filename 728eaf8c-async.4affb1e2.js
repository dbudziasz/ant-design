(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["728eaf8c"],{"00601b9f":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("02bb2571");var i=n("23c6fa92"),a=n("2bcfd376");let o=[{key:"sub1",icon:(0,t.jsx)(i.MailOutlined,{}),label:"Navigation One",children:[{key:"1-1",label:"Item 1",type:"group",children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"}]},{key:"1-2",label:"Item 2",type:"group",children:[{key:"3",label:"Option 3"},{key:"4",label:"Option 4"}]}]},{key:"sub2",icon:(0,t.jsx)(i.AppstoreOutlined,{}),label:"Navigation Two",children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"sub3",label:"Submenu",children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]}]},{key:"sub4",label:"Navigation Three",icon:(0,t.jsx)(i.SettingOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]}],r=e=>{console.log("click",e);};var d=()=>(0,t.jsx)(a.Menu,{onClick:r,style:{width:256},mode:"vertical",items:o});},"15d11ef8":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("6461861d");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{key:"1",icon:(0,t.jsx)(a.PieChartOutlined,{}),label:"Option 1"},{key:"2",icon:(0,t.jsx)(a.DesktopOutlined,{}),label:"Option 2"},{key:"3",icon:(0,t.jsx)(a.ContainerOutlined,{}),label:"Option 3"},{key:"sub1",label:"Navigation One",icon:(0,t.jsx)(a.MailOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]},{key:"sub2",label:"Navigation Two",icon:(0,t.jsx)(a.AppstoreOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"sub3",label:"Submenu",children:[{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]}]}];var d=()=>{let[e,l]=(0,i.useState)(!1);return(0,t.jsxs)("div",{style:{width:256},children:[(0,t.jsx)(o.Button,{type:"primary",onClick:()=>{l(!e);},style:{marginBottom:16},children:e?(0,t.jsx)(a.MenuUnfoldOutlined,{}):(0,t.jsx)(a.MenuFoldOutlined,{})}),(0,t.jsx)(o.Menu,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",inlineCollapsed:e,items:r})]});};},"386fa7ba":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return s;}});var t=n("852bbaa9"),i=n("f42785ac");n("fcedfeb2");var a=t._(n("1faec3b1")),o=n("23c6fa92"),r=n("2bcfd376");let d=[{key:"sub1",label:"Navigation One Long Long Long Long",icon:(0,i.jsx)(o.MailOutlined,{}),children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"},{key:"3",label:"Option 3"},{key:"4",label:"Option 4"}]},{key:"sub2",label:"Navigation Two",icon:(0,i.jsx)(o.AppstoreOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"sub3",label:"Submenu",children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]}]},{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}];var s=()=>{let[e,l]=(0,a.useState)("dark"),[n,t]=(0,a.useState)("1");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Switch,{checked:"dark"===e,onChange:e=>{l(e?"dark":"light");},checkedChildren:"Dark",unCheckedChildren:"Light"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Menu,{theme:e,onClick:e=>{console.log("click ",e),t(e.key);},selectedKeys:[n],mode:"inline",items:d,inlineCollapsed:!0,_internalRenderMenuItem:e=>a.default.cloneElement(e,{style:{...e.props.style,textDecoration:"underline"}}),_internalRenderSubMenuItem:e=>a.default.cloneElement(e,{style:{...e.props.style,background:"rgba(255, 255, 255, 0.3)"}}),_internalDisableMenuItemTitleTooltip:!0})]});};},"45c80673":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("eaaddec2");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{key:"1",icon:(0,t.jsx)(a.MailOutlined,{}),label:"Navigation One"},{key:"2",icon:(0,t.jsx)(a.CalendarOutlined,{}),label:"Navigation Two"},{key:"sub1",label:"Navigation Two",icon:(0,t.jsx)(a.AppstoreOutlined,{}),children:[{key:"3",label:"Option 3"},{key:"4",label:"Option 4"},{key:"sub1-2",label:"Submenu",children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"}]}]},{key:"sub2",label:"Navigation Three",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"},{key:"9",label:"Option 9"},{key:"10",label:"Option 10"}]},{key:"link",icon:(0,t.jsx)(a.LinkOutlined,{}),label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})}];var d=()=>{let[e,l]=(0,i.useState)("inline"),[n,a]=(0,i.useState)("light");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Switch,{onChange:e=>{l(e?"vertical":"inline");}})," Change Mode",(0,t.jsx)(o.Divider,{type:"vertical"}),(0,t.jsx)(o.Switch,{onChange:e=>{a(e?"dark":"light");}})," Change Style",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(o.Menu,{style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:e,theme:n,items:r})]});};},"4781e6c5":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return r;}});var t=n("f42785ac");n("6309b621");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376"),r=()=>{let[e,l]=(0,i.useState)("light"),[n,r]=(0,i.useState)("1"),d=[{key:"sub1",icon:(0,t.jsx)(a.MailOutlined,{}),label:"Navigation One",theme:e,children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"},{key:"3",label:"Option 3"}]},{key:"5",label:"Option 5"},{key:"6",label:"Option 6"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Switch,{checked:"dark"===e,onChange:e=>{l(e?"dark":"light");},checkedChildren:"Dark",unCheckedChildren:"Light"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(o.Menu,{onClick:e=>{r(e.key);},style:{width:256},openKeys:["sub1"],selectedKeys:[n],mode:"vertical",theme:"dark",items:d,getPopupContainer:e=>e.parentNode})]});};},"6e921d65":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("78d89cc9");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{label:"Navigation One",key:"mail",icon:(0,t.jsx)(a.MailOutlined,{})},{label:"Navigation Two",key:"app",icon:(0,t.jsx)(a.AppstoreOutlined,{}),disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{key:"alipay",label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Navigation Four - Link"})}];var d=()=>{let[e,l]=(0,i.useState)("mail");return(0,t.jsx)(o.Menu,{onClick:e=>{console.log("click ",e),l(e.key);},selectedKeys:[e],mode:"horizontal",items:r});};},"71c10965":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("32fd0952");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{label:"Navigation One",key:"mail",icon:(0,t.jsx)(a.MailOutlined,{})},{label:"Navigation Two",key:"app",icon:(0,t.jsx)(a.AppstoreOutlined,{}),disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{key:"alipay",label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Navigation Four - Link"})}];var d=()=>{let[e,l]=(0,i.useState)("mail");return(0,t.jsx)(o.Menu,{onClick:e=>{console.log("click ",e),l(e.key);},selectedKeys:[e],mode:"horizontal",items:r,theme:"dark"});};},89208731:function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return s;}});var t=n("f42785ac");n("5fc19d7c");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{label:"Navigation One",key:"mail",icon:(0,t.jsx)(a.MailOutlined,{})},{label:"Navigation Two",key:"app",icon:(0,t.jsx)(a.AppstoreOutlined,{}),disabled:!0},{label:"Navigation Three - Submenu",key:"SubMenu",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{type:"group",label:"Item 1",children:[{label:"Option 1",key:"setting:1"},{label:"Option 2",key:"setting:2"}]},{type:"group",label:"Item 2",children:[{label:"Option 3",key:"setting:3"},{label:"Option 4",key:"setting:4"}]}]},{key:"alipay",label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Navigation Four - Link"})}],d=[{key:"1",icon:(0,t.jsx)(a.PieChartOutlined,{}),label:"Option 1"},{key:"2",icon:(0,t.jsx)(a.DesktopOutlined,{}),label:"Option 2"},{key:"3",icon:(0,t.jsx)(a.ContainerOutlined,{}),label:"Option 3"},{key:"sub1",label:"Navigation One",icon:(0,t.jsx)(a.MailOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]},{key:"sub2",label:"Navigation Two",icon:(0,t.jsx)(a.AppstoreOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"sub3",label:"Submenu",children:[{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]}]}];var s=()=>{let[e,l]=(0,i.useState)("mail"),n=e=>{console.log("click ",e),l(e.key);};return(0,t.jsxs)(o.Space,{direction:"vertical",children:[(0,t.jsxs)(o.ConfigProvider,{theme:{algorithm:[o.theme.darkAlgorithm],components:{Menu:{popupBg:"yellow",darkPopupBg:"red"}}},children:[(0,t.jsx)(o.Menu,{onClick:n,selectedKeys:[e],mode:"horizontal",items:r}),(0,t.jsx)(o.Menu,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",inlineCollapsed:!0,items:d,style:{width:56}})]}),(0,t.jsx)(o.ConfigProvider,{theme:{components:{Menu:{horizontalItemBorderRadius:6,popupBg:"red",horizontalItemHoverBg:"#f5f5f5"}}},children:(0,t.jsx)(o.Menu,{onClick:n,selectedKeys:[e],mode:"horizontal",items:r})}),(0,t.jsx)(o.ConfigProvider,{theme:{components:{Menu:{darkItemColor:"#91daff",darkItemBg:"#d48806",darkSubMenuItemBg:"#faad14",darkItemSelectedColor:"#ffccc7",darkItemSelectedBg:"#52c41a"}}},children:(0,t.jsx)(o.Menu,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",items:d,style:{width:256}})})]});};},"8a68bc25":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("2a821f04");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{key:"1",icon:(0,t.jsx)(a.MailOutlined,{}),label:"Navigation One"},{key:"2",icon:(0,t.jsx)(a.CalendarOutlined,{}),label:"Navigation Two"},{key:"sub1",icon:(0,t.jsx)(a.AppstoreOutlined,{}),label:"Navigation Two",children:[{key:"3",label:(0,t.jsx)(o.Typography.Text,{ellipsis:!0,children:"Ant Design, a design language for background applications, is refined by Ant UED Team"})},{key:"4",label:"Option 4"},{key:"sub1-2",label:"Submenu",children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"}]}]},{key:"sub2",label:"Navigation Three",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{label:"Option 7",key:"7"},{label:"Option 8",key:"8"},{label:"Option 9",key:"9"},{label:"Option 10",key:"10"}]},{key:"link",icon:(0,t.jsx)(a.LinkOutlined,{}),label:(0,t.jsx)("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})}];var d=()=>{let[e,l]=(0,i.useState)("inline");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Switch,{onChange:e=>{l(e?"vertical":"inline");}})," Change Mode",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(o.ConfigProvider,{theme:{components:{Menu:{itemBorderRadius:0,subMenuItemBorderRadius:0,itemHoverColor:"#1890ff",itemSelectedColor:"#1890ff",itemSelectedBg:"#e6f7ff",activeBarWidth:3,itemMarginInline:0,itemHoverBg:"transparent"}}},children:(0,t.jsx)(o.Menu,{style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:e,items:r})})]});};},"8e3aec0c":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return r;}});var t=n("f42785ac");n("117aac69");var i=n("23c6fa92"),a=n("2bcfd376");let o=[{key:"sub1",label:"Navigation One",icon:(0,t.jsx)(i.MailOutlined,{}),children:[{key:"g1",label:"Item 1",type:"group",children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"}]},{key:"g2",label:"Item 2",type:"group",children:[{key:"3",label:"Option 3"},{key:"4",label:"Option 4"}]}]},{key:"sub2",label:"Navigation Two",icon:(0,t.jsx)(i.AppstoreOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"sub3",label:"Submenu",children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]}]},{type:"divider"},{key:"sub4",label:"Navigation Three",icon:(0,t.jsx)(i.SettingOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]},{key:"grp",label:"Group",type:"group",children:[{key:"13",label:"Option 13"},{key:"14",label:"Option 14"}]}];var r=()=>(0,t.jsx)(a.Menu,{onClick:e=>{console.log("click ",e);},style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",items:o});},bc55ae3c:function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return s;}});var t=n("f42785ac");n("72b4e8eb");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{key:"1",icon:(0,t.jsx)(a.MailOutlined,{}),label:"Navigation One",children:[{key:"11",label:"Option 1"},{key:"12",label:"Option 2"},{key:"13",label:"Option 3"},{key:"14",label:"Option 4"}]},{key:"2",icon:(0,t.jsx)(a.AppstoreOutlined,{}),label:"Navigation Two",children:[{key:"21",label:"Option 1"},{key:"22",label:"Option 2"},{key:"23",label:"Submenu",children:[{key:"231",label:"Option 1"},{key:"232",label:"Option 2"},{key:"233",label:"Option 3"}]},{key:"24",label:"Submenu 2",children:[{key:"241",label:"Option 1"},{key:"242",label:"Option 2"},{key:"243",label:"Option 3"}]}]},{key:"3",icon:(0,t.jsx)(a.SettingOutlined,{}),label:"Navigation Three",children:[{key:"31",label:"Option 1"},{key:"32",label:"Option 2"},{key:"33",label:"Option 3"},{key:"34",label:"Option 4"}]}],d=(e=>{let l={},n=(e,t=1)=>{e.forEach(e=>{e.key&&(l[e.key]=t),e.children&&n(e.children,t+1);});};return n(e),l;})(r);var s=()=>{let[e,l]=(0,i.useState)(["2","23"]);return(0,t.jsx)(o.Menu,{mode:"inline",defaultSelectedKeys:["231"],openKeys:e,onOpenChange:n=>{let t=n.find(l=>-1===e.indexOf(l));if(void 0!==t){let e=n.filter(e=>e!==t).findIndex(e=>d[e]===d[t]);l(n.filter((l,n)=>n!==e).filter(e=>d[e]<=d[t]));}else l(n);},style:{width:256},items:r});};},c9610402:function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return d;}});var t=n("f42785ac");n("3f6815be");var i=n("1faec3b1"),a=n("23c6fa92"),o=n("2bcfd376");let r=[{key:"sub1",label:"Navigation One",icon:(0,t.jsx)(a.MailOutlined,{}),children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"},{key:"3",label:"Option 3"},{key:"4",label:"Option 4"}]},{key:"sub2",label:"Navigation Two",icon:(0,t.jsx)(a.AppstoreOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"sub3",label:"Submenu",children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]}]},{key:"sub4",label:"Navigation Three",icon:(0,t.jsx)(a.SettingOutlined,{}),children:[{key:"9",label:"Option 9"},{key:"10",label:"Option 10"},{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}]}];var d=()=>{let[e,l]=(0,i.useState)("dark"),[n,a]=(0,i.useState)("1");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Switch,{checked:"dark"===e,onChange:e=>{l(e?"dark":"light");},checkedChildren:"Dark",unCheckedChildren:"Light"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(o.Menu,{theme:e,onClick:e=>{console.log("click ",e),a(e.key);},style:{width:256},defaultOpenKeys:["sub1"],selectedKeys:[n],mode:"inline",items:r})]});};}}]);