(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["400a8c2f"],{"1839f594":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=a("f42785ac");a("4229cdeb");var l=a("1faec3b1"),r=a("2bcfd376"),i=()=>{let[e,t]=(0,l.useState)("top");return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.Radio.Group,{onChange:e=>{t(e.target.value);},value:e,style:{marginBottom:8},children:[(0,n.jsx)(r.Radio.Button,{value:"top",children:"Horizontal"}),(0,n.jsx)(r.Radio.Button,{value:"left",children:"Vertical"})]}),(0,n.jsx)(r.Tabs,{defaultActiveKey:"1",tabPosition:e,style:{height:220},items:Array(30).fill(null).map((e,t)=>{let a=String(t);return{label:`Tab-${a}`,key:a,disabled:28===t,children:`Content of tab ${a}`};})})]});};},"2f82509d":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=a("f42785ac");a("803de642");var l=a("1faec3b1"),r=a("2bcfd376"),i=()=>{let[e,t]=(0,l.useState)("left");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.Space,{style:{marginBottom:24},children:["Tab position:",(0,n.jsxs)(r.Radio.Group,{value:e,onChange:e=>{t(e.target.value);},children:[(0,n.jsx)(r.Radio.Button,{value:"top",children:"top"}),(0,n.jsx)(r.Radio.Button,{value:"bottom",children:"bottom"}),(0,n.jsx)(r.Radio.Button,{value:"left",children:"left"}),(0,n.jsx)(r.Radio.Button,{value:"right",children:"right"})]})]}),(0,n.jsx)(r.Tabs,{tabPosition:e,items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of Tab ${a}`};})})]});};},"52b86c16":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=a("f42785ac");a("8050f0d3");var l=a("1faec3b1"),r=a("2bcfd376");let{Option:i}=r.Select,d=["left","right","top","bottom"];var o=()=>{let[e,t]=(0,l.useState)(void 0),[a,o]=(0,l.useState)(void 0),[s,c]=(0,l.useState)(void 0),[u,b]=(0,l.useState)(void 0);return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Select,{style:{width:200},onChange:e=>{t(e);},children:d.map(e=>(0,n.jsxs)(i,{value:e,children:["Parent - ",e]},e))}),(0,n.jsx)(r.Select,{style:{width:200},onChange:e=>{o(e);},children:d.map(e=>(0,n.jsxs)(i,{value:e,children:["Child - ",e]},e))}),(0,n.jsxs)(r.Select,{style:{width:200},onChange:e=>{c(e);},children:[(0,n.jsx)(i,{value:"line",children:"Parent - line"}),(0,n.jsx)(i,{value:"card",children:"Parent - card"}),(0,n.jsx)(i,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsxs)(r.Select,{style:{width:200},onChange:e=>{b(e);},children:[(0,n.jsx)(i,{value:"line",children:"Child - line"}),(0,n.jsx)(i,{value:"card",children:"Child - card"}),(0,n.jsx)(i,{value:"editable-card",children:"Parent - card edit"})]}),(0,n.jsx)(r.Tabs,{defaultActiveKey:"1",tabPosition:e,type:s,items:[{label:"Tab 1",key:"1",children:(0,n.jsx)(r.Tabs,{defaultActiveKey:"1",tabPosition:a,type:u,style:{height:300},items:Array(20).fill(null).map((e,t)=>{let a=String(t);return{label:`Tab ${a}`,key:a,children:`TTTT ${a}`};})})},{label:"Tab 2",key:"2",children:"Content of Tab Pane 2"}]})]});};},"67f40136":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=a("f42785ac");a("51ef363f");var l=a("2bcfd376");let r=(0,a("6ade16ea").createStyles)(({token:e,css:t})=>{let a=".ant-tabs";return t`
    ${a}${a}-card {
      ${a}-content {
        padding: ${e.padding}px;
        background: ${e.colorBgContainer};
      }

      ${a}-nav {
        margin: 0;

        ${a}-nav-wrap > ${a}-nav-list > ${a}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: ${e.colorBorderBg};
            background: ${e.colorBgContainer};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `;}),i=[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab Title ${a}`,key:a,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,n.jsxs)("p",{children:["Content of Tab Pane ",a]})]})};});var d=()=>{let{styles:e}=r();return(0,n.jsx)("div",{className:e,children:(0,n.jsx)(l.Tabs,{type:"card",items:i})});};},"6e35e0e0":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=a("777fffbe"),l=a("f42785ac");a("e028029b");var r=n._(a("1faec3b1")),i=a("2bcfd376"),d=()=>{let[e,t]=r.default.useState(!0),[a,n]=r.default.useState(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Space,{children:[(0,l.jsx)(i.Switch,{checkedChildren:"inkBar",unCheckedChildren:"inkBar",checked:e,onChange:()=>t(!e)}),(0,l.jsx)(i.Switch,{checkedChildren:"tabPane",unCheckedChildren:"tabPane",checked:a,onChange:()=>n(!a)})]}),(0,l.jsx)(i.Tabs,{animated:{inkBar:e,tabPane:a},items:[{label:"Bamboo",key:"1",children:"Hello Bamboo!",style:{height:200,boxShadow:"0 0 3px rgba(255, 0, 0, 0.5)"}},{label:"Little",key:"2",children:"Hi Little!",style:{height:300,boxShadow:"0 0 3px rgba(0, 255, 0, 0.5)"}},{label:"Light",key:"3",children:"Welcome Light!",style:{height:100,boxShadow:"0 0 3px rgba(0, 0, 255, 0.5)"}}]})]});};},"771d991f":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return u;}});var n=a("f42785ac");a("bc1fa6ac");var l=a("1faec3b1"),r=a("2bcfd376");let i=r.Checkbox.Group,d=(0,n.jsx)(r.Button,{children:"Extra Action"}),o={left:(0,n.jsx)(r.Button,{className:"tabs-extra-demo-button",children:"Left Extra Action"}),right:(0,n.jsx)(r.Button,{children:"Right Extra Action"})},s=["left","right"],c=[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};});var u=()=>{let[e,t]=(0,l.useState)(["left","right"]),a=(0,l.useMemo)(()=>0===e.length?null:e.reduce((e,t)=>({...e,[t]:o[t]}),{}),[e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Tabs,{tabBarExtraContent:d,items:c}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{children:"You can also specify its direction or both side"}),(0,n.jsx)(r.Divider,{}),(0,n.jsx)(i,{options:s,value:e,onChange:e=>{t(e);}}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.Tabs,{tabBarExtraContent:a,items:c})]});};},"7fe1e40e":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=a("f42785ac");a("e1568d1e");var l=a("1faec3b1"),r=a("2bcfd376");let i=[,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,children:`Content of Tab Pane ${t+1}`,key:a};});var d=()=>{let[e,t]=(0,l.useState)(i[0].key),[a,d]=(0,l.useState)(i),o=(0,l.useRef)(0),s=()=>{let e=`newTab${o.current++}`;d([...a,{label:"New Tab",children:"New Tab Pane",key:e}]),t(e);},c=n=>{let l=a.findIndex(e=>e.key===n),r=a.filter(e=>e.key!==n);if(r.length&&n===e){let{key:e}=r[l===r.length?l-1:l];t(e);}d(r);};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{style:{marginBottom:16},children:(0,n.jsx)(r.Button,{onClick:s,children:"ADD"})}),(0,n.jsx)(r.Tabs,{hideAdd:!0,onChange:e=>{t(e);},activeKey:e,type:"editable-card",onEdit:(e,t)=>{"add"===t?s():c(e);},items:a})]});};},"89f672f4":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return o;}});var n=a("777fffbe"),l=a("f42785ac");a("0d34a1e4");var r=a("2bcfd376"),i=n._(a("ed553036"));let d=[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`,style:0===t?{height:200}:void 0};});var o=()=>{let{token:{colorBgContainer:e}}=r.theme.useToken();return(0,l.jsx)(r.Tabs,{defaultActiveKey:"1",renderTabBar:(t,a)=>(0,l.jsx)(i.default,{offsetTop:64,offsetBottom:20,style:{zIndex:1},children:(0,l.jsx)(a,{...t,style:{background:e}})}),items:d});};},"983091a8":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=a("f42785ac");a("e78d6e98");var l=a("2bcfd376"),r=()=>(0,n.jsx)(l.Tabs,{defaultActiveKey:"1",centered:!0,items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`};})});},afa48794:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=a("f42785ac");a("9c708bcc");var l=a("2bcfd376"),r=()=>(0,n.jsx)(l.ConfigProvider,{theme:{components:{Tabs:{cardBg:"#f6ffed",cardHeight:60,cardPadding:"20px",cardPaddingSM:"20px",cardPaddingLG:"20px",titleFontSize:20,titleFontSizeLG:20,titleFontSizeSM:20,inkBarColor:"#52C41A",horizontalMargin:"0 0 12px 0",horizontalItemGutter:12,horizontalItemPadding:"20px",horizontalItemPaddingSM:"20px",horizontalItemPaddingLG:"20px",verticalItemPadding:"8px",verticalItemMargin:"4px 0 0 0",itemColor:"rgba(0,0,0,0.85)",itemSelectedColor:"#389e0d",itemHoverColor:"#d9f7be",itemActiveColor:"#b7eb8f",cardGutter:12}}},children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l.Tabs,{defaultActiveKey:"1",tabBarExtraContent:(0,n.jsx)(l.Button,{children:"Extra Action"}),style:{marginBottom:32},items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};})}),(0,n.jsx)(l.Tabs,{tabPosition:"left",defaultActiveKey:"1",tabBarExtraContent:(0,n.jsx)(l.Button,{children:"Extra Action"}),style:{marginBottom:32},items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};})}),(0,n.jsx)(l.Tabs,{size:"small",defaultActiveKey:"1",tabBarExtraContent:(0,n.jsx)(l.Button,{children:"Extra Action"}),style:{marginBottom:32},items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};})}),(0,n.jsx)(l.Tabs,{size:"large",defaultActiveKey:"1",tabBarExtraContent:(0,n.jsx)(l.Button,{children:"Extra Action"}),style:{marginBottom:32},items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};})}),(0,n.jsx)(l.Tabs,{defaultActiveKey:"1",centered:!0,type:"card",items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{disabled:2===t,label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`};})}),(0,n.jsx)(l.Tabs,{size:"small",defaultActiveKey:"1",centered:!0,type:"card",items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{disabled:2===t,label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`};})}),(0,n.jsx)(l.Tabs,{size:"large",defaultActiveKey:"1",centered:!0,type:"card",items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{disabled:2===t,label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`};})})]})});},b44564ee:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return r;}});var n=a("f42785ac");a("d67b5243");var l=a("2bcfd376"),r=()=>(0,n.jsx)(l.Tabs,{defaultActiveKey:"1",items:[{label:"Tab 1",key:"1",children:"Tab 1"},{label:"Tab 2",key:"2",children:"Tab 2",disabled:!0},{label:"Tab 3",key:"3",children:"Tab 3"}]});},c02c22f9:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return s;}});var n=a("777fffbe"),l=a("f42785ac");a("43197d31");var r=n._(a("1faec3b1")),i=a("2bcfd376");let d=e=>{console.log(e);},o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];var s=()=>{let[e,t]=r.default.useState("center");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Segmented,{value:e,style:{marginBottom:8},onChange:t,options:["start","center","end"]}),(0,l.jsx)(i.Tabs,{defaultActiveKey:"1",items:o,onChange:d,indicator:{size:e=>e-20,align:e}})]});};},c7be258f:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return u;}});var n=a("852bbaa9"),l=a("f42785ac"),r=n._(a("1faec3b1"));a("73a22472");var i=a("391e453e"),d=a("cae14e84"),o=a("5a4fe57b"),s=a("2bcfd376");let c=({className:e,...t})=>{let{attributes:a,listeners:n,setNodeRef:l,transform:i,transition:s}=(0,d.useSortable)({id:t["data-node-key"]}),c={...t.style,transform:o.CSS.Translate.toString(i),transition:s,cursor:"move"};return r.default.cloneElement(t.children,{ref:l,style:c,...a,...n});};var u=()=>{let[e,t]=(0,r.useState)([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),a=(0,i.useSensor)(i.PointerSensor,{activationConstraint:{distance:10}}),n=({active:e,over:a})=>{e.id!==(null==a?void 0:a.id)&&t(t=>{let n=t.findIndex(t=>t.key===e.id),l=t.findIndex(e=>e.key===(null==a?void 0:a.id));return(0,d.arrayMove)(t,n,l);});};return(0,l.jsx)(s.Tabs,{items:e,renderTabBar:(t,o)=>(0,l.jsx)(i.DndContext,{sensors:[a],onDragEnd:n,collisionDetection:i.closestCenter,children:(0,l.jsx)(d.SortableContext,{items:e.map(e=>e.key),strategy:d.horizontalListSortingStrategy,children:(0,l.jsx)(o,{...t,children:e=>(0,r.createElement)(c,{...e.props,key:e.key},e)})})})});};},d36cb415:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=a("f42785ac");a("07a29879");var l=a("2bcfd376");let r=e=>{console.log(e);};var i=()=>(0,n.jsx)(l.Tabs,{onChange:r,type:"card",items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of Tab Pane ${a}`};})});},d4c70ca1:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=a("f42785ac");a("904bc8ef");var l=a("1faec3b1"),r=a("2bcfd376");let i=[{label:"Tab 1",children:"Content of Tab 1",key:"1"},{label:"Tab 2",children:"Content of Tab 2",key:"2"},{label:"Tab 3",children:"Content of Tab 3",key:"3",closable:!1}];var d=()=>{let[e,t]=(0,l.useState)(i[0].key),[a,d]=(0,l.useState)(i),o=(0,l.useRef)(0),s=()=>{let e=`newTab${o.current++}`,n=[...a];n.push({label:"New Tab",children:"Content of new Tab",key:e}),d(n),t(e);},c=n=>{let l=e,r=-1;a.forEach((e,t)=>{e.key===n&&(r=t-1);});let i=a.filter(e=>e.key!==n);i.length&&l===n&&(l=r>=0?i[r].key:i[0].key),d(i),t(l);};return(0,n.jsx)(r.Tabs,{type:"editable-card",onChange:e=>{t(e);},activeKey:e,onEdit:(e,t)=>{"add"===t?s():c(e);},items:a});};},d6de9ee6:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=a("f42785ac");a("e55f2e40");var l=a("2bcfd376");let r=e=>{console.log(e);},i=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];var d=()=>(0,n.jsx)(l.Tabs,{defaultActiveKey:"1",items:i,onChange:r});},d7b209b0:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=a("f42785ac");a("1af628d9");var l=a("1faec3b1"),r=a("2bcfd376"),i=()=>{let[e,t]=(0,l.useState)("small");return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r.Radio.Group,{value:e,onChange:e=>{t(e.target.value);},style:{marginBottom:16},children:[(0,n.jsx)(r.Radio.Button,{value:"small",children:"Small"}),(0,n.jsx)(r.Radio.Button,{value:"middle",children:"Middle"}),(0,n.jsx)(r.Radio.Button,{value:"large",children:"Large"})]}),(0,n.jsx)(r.Tabs,{defaultActiveKey:"1",size:e,style:{marginBottom:32},items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Tab ${a}`,key:a,children:`Content of tab ${a}`};})}),(0,n.jsx)(r.Tabs,{defaultActiveKey:"1",type:"card",size:e,items:[,,,].fill(null).map((e,t)=>{let a=String(t+1);return{label:`Card Tab ${a}`,key:a,children:`Content of card tab ${a}`};})})]});};},ec25ee4b:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=a("f42785ac");a("ac66b18d");var l=a("23c6fa92"),r=a("2bcfd376"),i=()=>(0,n.jsx)(r.Tabs,{defaultActiveKey:"2",items:[l.AppleOutlined,l.AndroidOutlined].map((e,t)=>{let a=String(t+1);return{key:a,label:`Tab ${a}`,children:`Tab ${a}`,icon:(0,n.jsx)(e,{})};})});}}]);