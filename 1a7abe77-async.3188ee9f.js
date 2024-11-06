(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1a7abe77"],{"1a7abe77":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return m;}});var a=l("777fffbe"),i=l("f42785ac"),n=l("1faec3b1"),r=a._(l("5ad87df3")),s=l("6ade16ea"),o=a._(l("db72365b")),d=l("3a418b8a"),u=a._(l("15a5d0fa")),c=a._(l("c28f6bd9"));let f=(0,s.createStyles)(({token:e,css:t})=>({contributorsList:t`
    margin-top: 120px !important;
  `,listMobile:t`
    margin: 1em 0 !important;
  `,title:t`
    font-size: ${e.fontSizeSM}px;
    opacity: 0.5;
    margin-bottom: ${e.marginXS}px;
  `,list:t`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all ${e.motionDurationSlow};
      margin-inline-end: -${e.marginXS}px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `}));var m=({filename:e})=>{let{formatMessage:t}=(0,d.useIntl)(),{styles:l}=f(),{isMobile:a}=(0,n.useContext)(u.default);return e?(0,i.jsxs)("div",{className:(0,o.default)(l.contributorsList,{[l.listMobile]:a}),children:[(0,i.jsx)("div",{className:l.title,children:t({id:"app.content.contributors"})}),(0,i.jsx)(r.default,{cache:!0,repo:"ant-design",owner:"ant-design",fileName:e,className:l.list,renderItem:(e,t)=>(0,i.jsx)(c.default,{item:e,loading:t},null==e?void 0:e.url)})]}):null;};},c28f6bd9:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=l("f42785ac"),i=l("2bcfd376");let n=({num:e=3})=>(0,a.jsx)("li",{children:Array.from({length:e}).map((e,t)=>(0,a.jsx)(i.Skeleton.Avatar,{size:"small",active:!0,style:{marginInlineStart:0===t?0:-8}},t))});var r=e=>{let{item:{username:t,url:l}={},loading:r}=e;return r?(0,a.jsx)(n,{}):(null==t?void 0:t.includes("github-actions"))?null:(0,a.jsx)(i.Tooltip,{title:t,children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:`https://github.com/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(i.Avatar,{size:"small",src:l,alt:t,children:t})})})});};}}]);