(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["03d7b07f"],{"100dee4e":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var n=l("777fffbe"),d=l("f42785ac");l("8bf8bff2");var i=n._(l("1faec3b1")),s=l("23c6fa92"),r=l("2bcfd376");let{Header:a,Content:o,Footer:c,Sider:u}=r.Layout,x={overflow:"auto",height:"100vh",position:"fixed",insetInlineStart:0,top:0,bottom:0,scrollbarWidth:"thin",scrollbarGutter:"stable"},h=[s.UserOutlined,s.VideoCameraOutlined,s.UploadOutlined,s.BarChartOutlined,s.CloudOutlined,s.AppstoreOutlined,s.TeamOutlined,s.ShopOutlined].map((e,t)=>({key:String(t+1),icon:i.default.createElement(e),label:`nav ${t+1}`}));var m=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=r.theme.useToken();return(0,d.jsxs)(r.Layout,{hasSider:!0,children:[(0,d.jsxs)(u,{style:x,children:[(0,d.jsx)("div",{className:"demo-logo-vertical"}),(0,d.jsx)(r.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:h})]}),(0,d.jsxs)(r.Layout,{style:{marginInlineStart:200},children:[(0,d.jsx)(a,{style:{padding:0,background:e}}),(0,d.jsx)(o,{style:{margin:"24px 16px 0",overflow:"initial"},children:(0,d.jsxs)("div",{style:{padding:24,textAlign:"center",background:e,borderRadius:t},children:[(0,d.jsx)("p",{children:"long content"}),Array.from({length:100},(e,t)=>(0,d.jsxs)(i.default.Fragment,{children:[t%20==0&&t?"more":"...",(0,d.jsx)("br",{})]},t))]})}),(0,d.jsxs)(c,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]})]});};},"247f1ae8":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var n=l("777fffbe"),d=l("f42785ac");l("2deafc44");var i=n._(l("1faec3b1")),s=l("23c6fa92"),r=l("2bcfd376");let{Header:a,Content:o,Footer:c,Sider:u}=r.Layout,x=["1","2","3"].map(e=>({key:e,label:`nav ${e}`})),h=[s.UserOutlined,s.LaptopOutlined,s.NotificationOutlined].map((e,t)=>{let l=String(t+1);return{key:`sub${l}`,icon:i.default.createElement(e),label:`subnav ${l}`,children:[,,,,].fill(null).map((e,l)=>{let n=4*t+l+1;return{key:n,label:`option${n}`};})};});var m=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=r.theme.useToken();return(0,d.jsxs)(r.Layout,{children:[(0,d.jsxs)(a,{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("div",{className:"demo-logo"}),(0,d.jsx)(r.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:x,style:{flex:1,minWidth:0}})]}),(0,d.jsxs)(o,{style:{padding:"0 48px"},children:[(0,d.jsxs)(r.Breadcrumb,{style:{margin:"16px 0"},children:[(0,d.jsx)(r.Breadcrumb.Item,{children:"Home"}),(0,d.jsx)(r.Breadcrumb.Item,{children:"List"}),(0,d.jsx)(r.Breadcrumb.Item,{children:"App"})]}),(0,d.jsxs)(r.Layout,{style:{padding:"24px 0",background:e,borderRadius:t},children:[(0,d.jsx)(u,{style:{background:e},width:200,children:(0,d.jsx)(r.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},items:h})}),(0,d.jsx)(o,{style:{padding:"0 24px",minHeight:280},children:"Content"})]})]}),(0,d.jsxs)(c,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]});};},"2ca7b2b2":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return h;}});var n=l("f42785ac");l("2c9cd7e9");var d=l("1faec3b1"),i=l("23c6fa92"),s=l("2bcfd376");let{Header:r,Content:a,Footer:o,Sider:c}=s.Layout;function u(e,t,l,n){return{key:t,icon:l,children:n,label:e};}let x=[u("Option 1","1",(0,n.jsx)(i.PieChartOutlined,{})),u("Option 2","2",(0,n.jsx)(i.DesktopOutlined,{})),u("User","sub1",(0,n.jsx)(i.UserOutlined,{}),[u("Tom","3"),u("Bill","4"),u("Alex","5")]),u("Team","sub2",(0,n.jsx)(i.TeamOutlined,{}),[u("Team 1","6"),u("Team 2","8")]),u("Files","9",(0,n.jsx)(i.FileOutlined,{}))];var h=()=>{let[e,t]=(0,d.useState)(!1),{token:{colorBgContainer:l,borderRadiusLG:i}}=s.theme.useToken();return(0,n.jsxs)(s.Layout,{style:{minHeight:"100vh"},children:[(0,n.jsxs)(c,{collapsible:!0,collapsed:e,onCollapse:e=>t(e),children:[(0,n.jsx)("div",{className:"demo-logo-vertical"}),(0,n.jsx)(s.Menu,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:x})]}),(0,n.jsxs)(s.Layout,{children:[(0,n.jsx)(r,{style:{padding:0,background:l}}),(0,n.jsxs)(a,{style:{margin:"0 16px"},children:[(0,n.jsxs)(s.Breadcrumb,{style:{margin:"16px 0"},children:[(0,n.jsx)(s.Breadcrumb.Item,{children:"User"}),(0,n.jsx)(s.Breadcrumb.Item,{children:"Bill"})]}),(0,n.jsx)("div",{style:{padding:24,minHeight:360,background:l,borderRadius:i},children:"Bill is a cat."})]}),(0,n.jsxs)(o,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]})]});};},"472d1336":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f42785ac");l("55aa514e");var d=l("2bcfd376");let{Header:i,Content:s,Footer:r}=d.Layout,a=Array(15).fill(null).map((e,t)=>({key:t+1,label:`nav ${t+1}`}));var o=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=d.theme.useToken();return(0,n.jsxs)(d.Layout,{children:[(0,n.jsxs)(i,{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("div",{className:"demo-logo"}),(0,n.jsx)(d.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:a,style:{flex:1,minWidth:0}})]}),(0,n.jsxs)(s,{style:{padding:"0 48px"},children:[(0,n.jsxs)(d.Breadcrumb,{style:{margin:"16px 0"},children:[(0,n.jsx)(d.Breadcrumb.Item,{children:"Home"}),(0,n.jsx)(d.Breadcrumb.Item,{children:"List"}),(0,n.jsx)(d.Breadcrumb.Item,{children:"App"})]}),(0,n.jsx)("div",{style:{background:e,minHeight:280,padding:24,borderRadius:t},children:"Content"})]}),(0,n.jsxs)(r,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]});};},"8b8901c4":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var n=l("f42785ac");l("61252453");var d=l("1faec3b1"),i=l("23c6fa92"),s=l("2bcfd376");let{Header:r,Sider:a,Content:o}=s.Layout,c=[{key:"1",icon:(0,n.jsx)(i.PieChartOutlined,{}),label:"Option 1"},{key:"2",icon:(0,n.jsx)(i.DesktopOutlined,{}),label:"Option 2"},{key:"sub1",icon:(0,n.jsx)(i.UserOutlined,{}),label:"User",children:[{key:"3",label:"Tom"},{key:"4",label:"Bill"},{key:"5",label:"Alex"}]},{key:"sub2",icon:(0,n.jsx)(i.TeamOutlined,{}),label:"Team",children:[{key:"6",label:"Team 1"},{key:"7",label:"Team 2"}]},{key:"9",icon:(0,n.jsx)(i.FileOutlined,{})}];var u=()=>{let[e,t]=(0,d.useState)(!0),{token:{colorBgContainer:l,borderRadiusLG:u}}=s.theme.useToken();return(0,n.jsxs)(s.Layout,{children:[(0,n.jsxs)(a,{trigger:null,collapsible:!0,collapsed:e,children:[(0,n.jsx)("div",{className:"demo-logo-vertical"}),(0,n.jsx)(s.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["3"],defaultOpenKeys:["sub1"],items:c})]}),(0,n.jsxs)(s.Layout,{children:[(0,n.jsx)(r,{style:{padding:0,background:l},children:(0,n.jsx)(s.Button,{type:"text",icon:e?(0,n.jsx)(i.MenuUnfoldOutlined,{}):(0,n.jsx)(i.MenuFoldOutlined,{}),onClick:()=>t(!e),style:{fontSize:"16px",width:64,height:64}})}),(0,n.jsx)(o,{style:{margin:"24px 16px",padding:24,minHeight:280,background:l,borderRadius:u},children:"Content"})]})]});};},"951d1caa":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return h;}});var n=l("777fffbe"),d=l("f42785ac");l("20318884");var i=n._(l("1faec3b1")),s=l("23c6fa92"),r=l("2bcfd376");let{Header:a,Content:o,Footer:c,Sider:u}=r.Layout,x=[s.UserOutlined,s.VideoCameraOutlined,s.UploadOutlined,s.UserOutlined].map((e,t)=>({key:String(t+1),icon:i.default.createElement(e),label:`nav ${t+1}`}));var h=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=r.theme.useToken();return(0,d.jsxs)(r.Layout,{children:[(0,d.jsxs)(u,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:e=>{console.log(e);},onCollapse:(e,t)=>{console.log(e,t);},children:[(0,d.jsx)("div",{className:"demo-logo-vertical"}),(0,d.jsx)(r.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:x})]}),(0,d.jsxs)(r.Layout,{children:[(0,d.jsx)(a,{style:{padding:0,background:e}}),(0,d.jsx)(o,{style:{margin:"24px 16px 0"},children:(0,d.jsx)("div",{style:{padding:24,minHeight:360,background:e,borderRadius:t},children:"content"})}),(0,d.jsxs)(c,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]})]});};},ae0a686d:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return h;}});var n=l("777fffbe"),d=l("f42785ac");l("83604c47");var i=n._(l("1faec3b1")),s=l("23c6fa92"),r=l("2bcfd376");let{Header:a,Content:o,Sider:c}=r.Layout,u=["1","2","3"].map(e=>({key:e,label:`nav ${e}`})),x=[s.UserOutlined,s.LaptopOutlined,s.NotificationOutlined].map((e,t)=>{let l=String(t+1);return{key:`sub${l}`,icon:i.default.createElement(e),label:`subnav ${l}`,children:[,,,,].fill(null).map((e,l)=>{let n=4*t+l+1;return{key:n,label:`option${n}`};})};});var h=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=r.theme.useToken();return(0,d.jsxs)(r.Layout,{children:[(0,d.jsxs)(a,{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("div",{className:"demo-logo"}),(0,d.jsx)(r.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:u,style:{flex:1,minWidth:0}})]}),(0,d.jsxs)(r.Layout,{children:[(0,d.jsx)(c,{width:200,style:{background:e},children:(0,d.jsx)(r.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},items:x})}),(0,d.jsxs)(r.Layout,{style:{padding:"0 24px 24px"},children:[(0,d.jsx)(r.Breadcrumb,{items:[{title:"Home"},{title:"List"},{title:"App"}],style:{margin:"16px 0"}}),(0,d.jsx)(o,{style:{padding:24,margin:0,minHeight:280,background:e,borderRadius:t},children:"Content"})]})]})]});};},b05da2f0:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return x;}});var n=l("777fffbe"),d=l("f42785ac");l("95ec5dbf");var i=n._(l("1faec3b1")),s=l("23c6fa92"),r=l("2bcfd376");let{Header:a,Content:o,Sider:c}=r.Layout,u=[s.UserOutlined,s.LaptopOutlined,s.NotificationOutlined].map((e,t)=>{let l=String(t+1);return{key:`sub${l}`,icon:i.default.createElement(e),label:`subnav ${l}`,children:[,,,,].fill(null).map((e,l)=>{let n=4*t+l+1;return{key:n,label:`option${n}`};})};});var x=()=>{let{token:{colorBgContainer:e,colorBgLayout:t,borderRadiusLG:l}}=r.theme.useToken();return(0,d.jsx)(r.ConfigProvider,{theme:{components:{Layout:{bodyBg:"#fff",headerBg:"#1677ff",headerHeight:64,headerPadding:"0 24px",headerColor:e,siderBg:"#800080"}}},children:(0,d.jsxs)(r.Layout,{children:[(0,d.jsxs)(a,{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("div",{className:"demo-logo"}),(0,d.jsx)("div",{style:{marginInlineStart:24,fontSize:24},children:"Ant Design"})]}),(0,d.jsxs)(r.Layout,{children:[(0,d.jsx)(r.ConfigProvider,{theme:{components:{Layout:{siderBg:"red"}}},children:(0,d.jsx)(c,{width:32})}),(0,d.jsx)(c,{width:200,children:(0,d.jsx)(r.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{borderRight:0},items:u})}),(0,d.jsxs)(r.Layout,{style:{padding:"0 24px 24px"},children:[(0,d.jsxs)(r.Breadcrumb,{style:{margin:"16px 0"},children:[(0,d.jsx)(r.Breadcrumb.Item,{children:"Home"}),(0,d.jsx)(r.Breadcrumb.Item,{children:"List"}),(0,d.jsx)(r.Breadcrumb.Item,{children:"App"})]}),(0,d.jsx)(o,{style:{padding:24,margin:0,minHeight:280,background:t,borderRadius:l},children:"Content"})]})]})]})});};},c1437bc6:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return c;}});var n=l("f42785ac");l("fc9f44a0");var d=l("1faec3b1"),i=l("23c6fa92"),s=l("2bcfd376");let{Header:r,Sider:a,Content:o}=s.Layout;var c=()=>{let[e,t]=(0,d.useState)(!1),{token:{colorBgContainer:l,borderRadiusLG:c}}=s.theme.useToken();return(0,n.jsxs)(s.Layout,{children:[(0,n.jsxs)(a,{trigger:null,collapsible:!0,collapsed:e,children:[(0,n.jsx)("div",{className:"demo-logo-vertical"}),(0,n.jsx)(s.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],items:[{key:"1",icon:(0,n.jsx)(i.UserOutlined,{}),label:"nav 1"},{key:"2",icon:(0,n.jsx)(i.VideoCameraOutlined,{}),label:"nav 2"},{key:"3",icon:(0,n.jsx)(i.UploadOutlined,{}),label:"nav 3"}]})]}),(0,n.jsxs)(s.Layout,{children:[(0,n.jsx)(r,{style:{padding:0,background:l},children:(0,n.jsx)(s.Button,{type:"text",icon:e?(0,n.jsx)(i.MenuUnfoldOutlined,{}):(0,n.jsx)(i.MenuFoldOutlined,{}),onClick:()=>t(!e),style:{fontSize:"16px",width:64,height:64}})}),(0,n.jsx)(o,{style:{margin:"24px 16px",padding:24,minHeight:280,background:l,borderRadius:c},children:"Content"})]})]});};},c272b74b:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=l("f42785ac");l("f90a6897");var d=l("2bcfd376");let{Header:i,Content:s,Footer:r}=d.Layout,a=[,,,].fill(null).map((e,t)=>({key:String(t+1),label:`nav ${t+1}`}));var o=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=d.theme.useToken();return(0,n.jsxs)(d.Layout,{children:[(0,n.jsxs)(i,{style:{position:"sticky",top:0,zIndex:1,width:"100%",display:"flex",alignItems:"center"},children:[(0,n.jsx)("div",{className:"demo-logo"}),(0,n.jsx)(d.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:a,style:{flex:1,minWidth:0}})]}),(0,n.jsxs)(s,{style:{padding:"0 48px"},children:[(0,n.jsxs)(d.Breadcrumb,{style:{margin:"16px 0"},children:[(0,n.jsx)(d.Breadcrumb.Item,{children:"Home"}),(0,n.jsx)(d.Breadcrumb.Item,{children:"List"}),(0,n.jsx)(d.Breadcrumb.Item,{children:"App"})]}),(0,n.jsx)("div",{style:{padding:24,minHeight:380,background:e,borderRadius:t},children:"Content"})]}),(0,n.jsxs)(r,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]});};},e9d48197:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var n=l("f42785ac");l("a868ac04");var d=l("2bcfd376");let{Header:i,Footer:s,Sider:r,Content:a}=d.Layout,o={textAlign:"center",color:"#fff",height:64,paddingInline:48,lineHeight:"64px",backgroundColor:"#4096ff"},c={textAlign:"center",minHeight:120,lineHeight:"120px",color:"#fff",backgroundColor:"#0958d9"},u={textAlign:"center",lineHeight:"120px",color:"#fff",backgroundColor:"#1677ff"},x={textAlign:"center",color:"#fff",backgroundColor:"#4096ff"},h={borderRadius:8,overflow:"hidden",width:"calc(50% - 8px)",maxWidth:"calc(50% - 8px)"};var m=()=>(0,n.jsxs)(d.Flex,{gap:"middle",wrap:!0,children:[(0,n.jsxs)(d.Layout,{style:h,children:[(0,n.jsx)(i,{style:o,children:"Header"}),(0,n.jsx)(a,{style:c,children:"Content"}),(0,n.jsx)(s,{style:x,children:"Footer"})]}),(0,n.jsxs)(d.Layout,{style:h,children:[(0,n.jsx)(i,{style:o,children:"Header"}),(0,n.jsxs)(d.Layout,{children:[(0,n.jsx)(r,{width:"25%",style:u,children:"Sider"}),(0,n.jsx)(a,{style:c,children:"Content"})]}),(0,n.jsx)(s,{style:x,children:"Footer"})]}),(0,n.jsxs)(d.Layout,{style:h,children:[(0,n.jsx)(i,{style:o,children:"Header"}),(0,n.jsxs)(d.Layout,{children:[(0,n.jsx)(a,{style:c,children:"Content"}),(0,n.jsx)(r,{width:"25%",style:u,children:"Sider"})]}),(0,n.jsx)(s,{style:x,children:"Footer"})]}),(0,n.jsxs)(d.Layout,{style:h,children:[(0,n.jsx)(r,{width:"25%",style:u,children:"Sider"}),(0,n.jsxs)(d.Layout,{children:[(0,n.jsx)(i,{style:o,children:"Header"}),(0,n.jsx)(a,{style:c,children:"Content"}),(0,n.jsx)(s,{style:x,children:"Footer"})]})]})]});}}]);