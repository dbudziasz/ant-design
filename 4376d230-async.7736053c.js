(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4376d230"],{"4376d230":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return I;}}),d("f04691f8");let I=[{value:"ConfigProvider \u4F7F\u7528 React \u7684 ",paraId:0,tocIndex:0},{value:"context",paraId:0,tocIndex:0},{value:" \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002",paraId:0,tocIndex:0},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\n// ...\nconst Demo: React.FC = () => (\n  <ConfigProvider direction=\"rtl\">\n    <App />\n  </ConfigProvider>\n);\n\nexport default Demo;\n",paraId:1,tocIndex:0},{value:"\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:1},{value:"csp",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A",paraId:2,tocIndex:1},{value:"<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>\n  <Button>My Button</Button>\n</ConfigProvider>\n",paraId:3,tocIndex:1},{value:"\u53C2\u6570",paraId:4,tocIndex:12},{value:"\u8BF4\u660E",paraId:4,tocIndex:12},{value:"\u7C7B\u578B",paraId:4,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:12},{value:"\u7248\u672C",paraId:4,tocIndex:12},{value:"componentDisabled",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E antd \u7EC4\u4EF6\u7981\u7528\u72B6\u6001",paraId:4,tocIndex:12},{value:"boolean",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"4.21.0",paraId:4,tocIndex:12},{value:"componentSize",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E antd \u7EC4\u4EF6\u5927\u5C0F",paraId:4,tocIndex:12},{value:"small",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"middle",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"large",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"csp",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E ",paraId:4,tocIndex:12},{value:"Content Security Policy",paraId:4,tocIndex:12},{value:" \u914D\u7F6E",paraId:4,tocIndex:12},{value:"{ nonce: string }",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"direction",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u6587\u672C\u5C55\u793A\u65B9\u5411\u3002 ",paraId:4,tocIndex:12},{value:"\u793A\u4F8B",paraId:5,tocIndex:12},{value:"ltr",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"rtl",paraId:4,tocIndex:12},{value:"ltr",paraId:4,tocIndex:12},{value:"getPopupContainer",paraId:4,tocIndex:12},{value:"\u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002",paraId:4,tocIndex:12},{value:"function(triggerNode)",paraId:4,tocIndex:12},{value:"() => document.body",paraId:4,tocIndex:12},{value:"getTargetContainer",paraId:4,tocIndex:12},{value:"\u914D\u7F6E Affix\u3001Anchor \u6EDA\u52A8\u76D1\u542C\u5BB9\u5668\u3002",paraId:4,tocIndex:12},{value:"() => HTMLElement",paraId:4,tocIndex:12},{value:"() => window",paraId:4,tocIndex:12},{value:"4.2.0",paraId:4,tocIndex:12},{value:"iconPrefixCls",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u56FE\u6807\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00",paraId:4,tocIndex:12},{value:"string",paraId:4,tocIndex:12},{value:"anticon",paraId:4,tocIndex:12},{value:"4.11.0",paraId:4,tocIndex:12},{value:"locale",paraId:4,tocIndex:12},{value:"\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 ",paraId:4,tocIndex:12},{value:"antd/locale",paraId:4,tocIndex:12},{value:" \u76EE\u5F55\u4E0B\u5BFB\u627E",paraId:4,tocIndex:12},{value:"object",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"popupMatchSelectWidth",paraId:4,tocIndex:12},{value:"\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E ",paraId:4,tocIndex:12},{value:"min-width",paraId:4,tocIndex:12},{value:"\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:" \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8",paraId:4,tocIndex:12},{value:"boolean | number",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.5.0",paraId:4,tocIndex:12},{value:"popupOverflow",paraId:4,tocIndex:12},{value:"Select \u7C7B\u7EC4\u4EF6\u5F39\u5C42\u5C55\u793A\u903B\u8F91\uFF0C\u9ED8\u8BA4\u4E3A\u53EF\u89C6\u533A\u57DF\u6EDA\u52A8\uFF0C\u53EF\u914D\u7F6E\u6210\u6EDA\u52A8\u533A\u57DF\u6EDA\u52A8",paraId:4,tocIndex:12},{value:"'viewport' | 'scroll' ",paraId:4,tocIndex:12},{value:"'viewport'",paraId:4,tocIndex:12},{value:"5.5.0",paraId:4,tocIndex:12},{value:"prefixCls",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00",paraId:4,tocIndex:12},{value:"string",paraId:4,tocIndex:12},{value:"ant",paraId:4,tocIndex:12},{value:"renderEmpty",paraId:4,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 ",paraId:4,tocIndex:12},{value:"\u7A7A\u72B6\u6001",paraId:6,tocIndex:12},{value:"function(componentName: string): ReactNode",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"theme",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u4E3B\u9898\uFF0C\u53C2\u8003 ",paraId:4,tocIndex:12},{value:"\u5B9A\u5236\u4E3B\u9898",paraId:7,tocIndex:12},{value:"Theme",paraId:8,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.0.0",paraId:4,tocIndex:12},{value:"variant",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u5168\u5C40\u8F93\u5165\u7EC4\u4EF6\u5F62\u6001\u53D8\u4F53",paraId:4,tocIndex:12},{value:"outlined",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"filled",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"borderless",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.19.0",paraId:4,tocIndex:12},{value:"virtual",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E ",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:" \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8",paraId:4,tocIndex:12},{value:"boolean",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"4.3.0",paraId:4,tocIndex:12},{value:"warning",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E\u8B66\u544A\u7B49\u7EA7\uFF0C",paraId:4,tocIndex:12},{value:"strict",paraId:4,tocIndex:12},{value:" \u4E3A ",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:" \u65F6\u4F1A\u5C06\u5E9F\u5F03\u76F8\u5173\u4FE1\u606F\u805A\u5408\u4E3A\u5355\u6761\u4FE1\u606F",paraId:4,tocIndex:12},{value:"{ strict: boolean }",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.10.0",paraId:4,tocIndex:12},{value:"\u8BBE\u7F6E ",paraId:9,tocIndex:13},{value:"Modal",paraId:9,tocIndex:13},{value:"\u3001",paraId:9,tocIndex:13},{value:"Message",paraId:9,tocIndex:13},{value:"\u3001",paraId:9,tocIndex:13},{value:"Notification",paraId:9,tocIndex:13},{value:" \u9759\u6001\u65B9\u6CD5\u914D\u7F6E\uFF0C\u53EA\u4F1A\u5BF9\u975E hooks \u7684\u9759\u6001\u65B9\u6CD5\u8C03\u7528\u751F\u6548\u3002",paraId:9,tocIndex:13},{value:'ConfigProvider.config({\n  // 5.13.0+\n  holderRender: (children) => (\n    <ConfigProvider\n      prefixCls="ant"\n      iconPrefixCls="anticon"\n      theme={{ token: { colorPrimary: \'red\' } }}\n    >\n      {children}\n    </ConfigProvider>\n  ),\n});\n',paraId:10,tocIndex:13},{value:"5.3.0+",paraId:11},{value:"5.2.0",paraId:12,tocIndex:14},{value:" \u7248\u672C\u540E\u53EF\u7528\u3002\u83B7\u53D6\u7236\u7EA7 ",paraId:12,tocIndex:14},{value:"Provider",paraId:12,tocIndex:14},{value:" \u7684\u503C\u3002\u5982 ",paraId:12,tocIndex:14},{value:"DisabledContextProvider",paraId:12,tocIndex:14},{value:"\u3001",paraId:12,tocIndex:14},{value:"SizeContextProvider",paraId:12,tocIndex:14},{value:"\u3002",paraId:12,tocIndex:14},{value:"const {\n  componentDisabled, // 5.3.0+\n  componentSize, // 5.3.0+\n} = ConfigProvider.useConfig();\n",paraId:13,tocIndex:14},{value:"\u8FD4\u56DE\u503C",paraId:14,tocIndex:14},{value:"\u8BF4\u660E",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"\u7248\u672C",paraId:14,tocIndex:14},{value:"componentDisabled",paraId:14,tocIndex:14},{value:"antd \u7EC4\u4EF6\u7981\u7528\u72B6\u6001",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"-",paraId:14,tocIndex:14},{value:"5.3.0",paraId:14,tocIndex:14},{value:"componentSize",paraId:14,tocIndex:14},{value:"antd \u7EC4\u4EF6\u5927\u5C0F\u72B6\u6001",paraId:14,tocIndex:14},{value:"small",paraId:14,tocIndex:14},{value:" | ",paraId:14,tocIndex:14},{value:"middle",paraId:14,tocIndex:14},{value:" | ",paraId:14,tocIndex:14},{value:"large",paraId:14,tocIndex:14},{value:"-",paraId:14,tocIndex:14},{value:"5.3.0",paraId:14,tocIndex:14},{value:"\u53C2\u6570",paraId:15,tocIndex:15},{value:"\u8BF4\u660E",paraId:15,tocIndex:15},{value:"\u7C7B\u578B",paraId:15,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:15},{value:"\u7248\u672C",paraId:15,tocIndex:15},{value:"alert",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Alert \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"anchor",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Anchor \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"avatar",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Avatar \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"badge",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Badge \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'BadgeProps["classNames"]',paraId:16,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'BadgeProps["styles"]',paraId:17,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"breadcrumb",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Breadcrumb \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"button",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Button \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'ButtonProps["classNames"]',paraId:18,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'ButtonProps["styles"]',paraId:19,tocIndex:15},{value:", autoInsertSpace?: boolean }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.6.0, autoInsertSpace: 5.17.0",paraId:15,tocIndex:15},{value:"calendar",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Calendar \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"card",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Card \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'CardProps["classNames"]',paraId:20,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'CardProps["styles"]',paraId:21,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" \u548C ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"carousel",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Carousel \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"cascader",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Cascader \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"checkbox",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Checkbox \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"collapse",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Collapse \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandIcon?: (props) => ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandIcon: 5.15.0",paraId:15,tocIndex:15},{value:"colorPicker",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E ColorPicker \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"datePicker",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E DatePicker \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"rangePicker",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E RangePicker \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.11.0",paraId:15,tocIndex:15},{value:"descriptions",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Descriptions \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"divider",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Divider \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"drawer",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Drawer \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'DrawerProps["classNames"]',paraId:22,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'DrawerProps["styles"]',paraId:23,tocIndex:15},{value:", closeIcon?: ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" \u548C ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.10.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"dropdown",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Dropdown \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.11.0",paraId:15,tocIndex:15},{value:"empty",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Empty \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"flex",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Flex \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, vertical?: boolean }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.10.0",paraId:15,tocIndex:15},{value:"floatButtonGroup",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E FloatButton.Group \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.16.0",paraId:15,tocIndex:15},{value:"form",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Form \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, validateMessages?: ",paraId:15,tocIndex:15},{value:"ValidateMessages",paraId:24,tocIndex:15},{value:", requiredMark?: boolean | ",paraId:15,tocIndex:15},{value:"optional",paraId:15,tocIndex:15},{value:", colon?: boolean, scrollToFirstError?: boolean | ",paraId:15,tocIndex:15},{value:"Options",paraId:15,tocIndex:15},{value:"}",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"requiredMark: 4.8.0; colon: 4.18.0; scrollToFirstError: 5.2.0; className: 5.7.0; style: 5.7.0",paraId:15,tocIndex:15},{value:"image",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Image \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, preview?: { closeIcon?: React.ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"input",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Input \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ autoComplete?: string, className?: string, style?: React.CSSProperties, allowClear?: boolean | { clearIcon?: ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, allowClear: 5.15.0",paraId:15,tocIndex:15},{value:"textArea",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E TextArea \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ autoComplete?: string, className?: string, style?: React.CSSProperties, allowClear?: boolean | { clearIcon?: ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.15.0",paraId:15,tocIndex:15},{value:"layout",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Layout \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"list",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E List \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, item?:{ classNames: ",paraId:15,tocIndex:15},{value:'ListItemProps["classNames"]',paraId:25,tocIndex:15},{value:", styles: ",paraId:15,tocIndex:15},{value:'ListItemProps["styles"]',paraId:26,tocIndex:15},{value:" } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"menu",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Menu \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandIcon?: ReactNode | props => ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandIcon: 5.15.0",paraId:15,tocIndex:15},{value:"mentions",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Mentions \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"message",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Message \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"modal",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Modal \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'ModalProps["classNames"]',paraId:27,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'ModalProps["styles"]',paraId:28,tocIndex:15},{value:", closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" \u548C ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.10.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"notification",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Notification \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"pagination",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Pagination \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ showSizeChanger?: boolean, className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"progress",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Progress \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"radio",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Radio \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"rate",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Rate \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"result",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Result \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"skeleton",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Skeleton \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"segmented",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Segmented \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"select",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Select \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, showSearch?: boolean, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"slider",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Slider \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"switch",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Switch \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"space",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Space \u7684\u901A\u7528\u5C5E\u6027\uFF0C\u53C2\u8003 ",paraId:15,tocIndex:15},{value:"Space",paraId:29,tocIndex:15},{value:"{ size: ",paraId:15,tocIndex:15},{value:"small",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"middle",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"large",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"number",paraId:15,tocIndex:15},{value:", className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'SpaceProps["classNames"]',paraId:30,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'SpaceProps["styles"]',paraId:31,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.6.0",paraId:15,tocIndex:15},{value:"splitter",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Splitter \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.21.0",paraId:15,tocIndex:15},{value:"spin",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Spin \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, indicator?: React.ReactElement }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, indicator: 5.20.0",paraId:15,tocIndex:15},{value:"statistic",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Statistic \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"steps",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Steps \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"table",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Table \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandable?: { expandIcon?: props => React.ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandable: 5.14.0",paraId:15,tocIndex:15},{value:"tabs",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Tabs \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, indicator?: { size?: GetIndicatorSize, align?: ",paraId:15,tocIndex:15},{value:"start",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"center",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"end",paraId:15,tocIndex:15},{value:" }, moreIcon?: ReactNode, addIcon?: ReactNode, removeIcon?: ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"moreIcon",paraId:15,tocIndex:15},{value:" and ",paraId:15,tocIndex:15},{value:"addIcon",paraId:15,tocIndex:15},{value:": 5.14.0, ",paraId:15,tocIndex:15},{value:"removeIcon",paraId:15,tocIndex:15},{value:": 5.15.0",paraId:15,tocIndex:15},{value:"tag",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Tag \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"timeline",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Timeline \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"timePicker",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E TimePicker \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"tour",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Tour \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.14.0",paraId:15,tocIndex:15},{value:"transfer",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Transfer \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, selectionsIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, selectionsIcon: 5.14.0",paraId:15,tocIndex:15},{value:"tree",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Tree \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"typography",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Typography \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"upload",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E Upload \u7EC4\u4EF6\u7684\u901A\u7528\u5C5E\u6027",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"wave",paraId:15,tocIndex:15},{value:"\u8BBE\u7F6E\u6C34\u6CE2\u7EB9\u7279\u6548",paraId:15,tocIndex:15},{value:"{ disabled?: boolean, showEffect?: (node: HTMLElement, info: { className, token, component }) => void }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.8.0",paraId:15,tocIndex:15},{value:"\u53C2\u8003",paraId:32,tocIndex:17},{value:"\u300A\u589E\u52A0\u8BED\u8A00\u5305\u300B",paraId:33,tocIndex:17},{value:"\u3002",paraId:32,tocIndex:17},{value:"\u53C2\u8003 FAQ ",paraId:34,tocIndex:18},{value:"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F",paraId:35,tocIndex:18},{value:"\u3002",paraId:34,tocIndex:18},{value:"getPopupContainer",paraId:11},{value:"\u76F8\u5173 issue\uFF1A",paraId:36,tocIndex:19},{value:"https://github.com/ant-design/ant-design/issues/19974",paraId:36,tocIndex:19},{value:"\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E ",paraId:37,tocIndex:19},{value:"getPopupContainer",paraId:37,tocIndex:19},{value:" \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 ",paraId:37,tocIndex:19},{value:"triggerNode",paraId:37,tocIndex:19},{value:"\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 ",paraId:37,tocIndex:19},{value:"triggerNode is undefined",paraId:37,tocIndex:19},{value:" \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A",paraId:37,tocIndex:19},{value:"\u5224\u65AD\u6761\u4EF6",paraId:37,tocIndex:19},{value:"\u3002",paraId:37,tocIndex:19},{value:" <ConfigProvider\n-  getPopupContainer={triggerNode => triggerNode.parentNode}\n+  getPopupContainer={node => {\n+    if (node) {\n+      return node.parentNode;\n+    }\n+    return document.body;\n+  }}\n >\n   <App />\n </ConfigProvider>\n",paraId:38,tocIndex:19},{value:"prefixCls",paraId:11},{value:"theme",paraId:11},{value:"\u9759\u6001\u65B9\u6CD5\u662F\u4F7F\u7528 ReactDOM.render \u91CD\u65B0\u6E32\u67D3\u4E00\u4E2A React \u6839\u8282\u70B9\u4E0A\uFF0C\u548C\u4E3B\u5E94\u7528\u7684 React \u8282\u70B9\u662F\u8131\u79BB\u7684\u3002\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 useMessage\u3001useNotification \u548C useModal \u6765\u4F7F\u7528\u76F8\u5173\u65B9\u6CD5\u3002\u539F\u5148\u7684\u9759\u6001\u65B9\u6CD5\u5728 5.0 \u4E2D\u5DF2\u88AB\u5E9F\u5F03\u3002",paraId:39,tocIndex:20},{value:"\u76F8\u5173 issue\uFF1A",paraId:40,tocIndex:21},{value:"#39045",paraId:40,tocIndex:21},{value:"\u7531\u4E8E Vite \u751F\u4EA7\u6A21\u5F0F\u4E0B\u6253\u5305\u4E0E\u5F00\u53D1\u6A21\u5F0F\u4E0D\u540C\uFF0Ccjs \u683C\u5F0F\u7684\u6587\u4EF6\u4F1A\u591A\u4E00\u5C42\uFF0C\u9700\u8981 ",paraId:41,tocIndex:21},{value:"zhCN.default",paraId:41,tocIndex:21},{value:" \u6765\u83B7\u53D6\u3002\u63A8\u8350 Vite \u7528\u6237\u76F4\u63A5\u4ECE ",paraId:41,tocIndex:21},{value:"antd/es/locale",paraId:41,tocIndex:21},{value:" \u76EE\u5F55\u4E0B\u5F15\u5165 esm \u683C\u5F0F\u7684 locale \u6587\u4EF6\u3002",paraId:41,tocIndex:21},{value:"ConfigProvider.config({ prefixCls: 'prefix-1' })",paraId:42,tocIndex:22},{value:'ConfigProvider.config({ holderRender: (children) => <ConfigProvider prefixCls="prefix-2">{children}</ConfigProvider> })',paraId:42,tocIndex:22},{value:"message.config({ prefixCls: 'prefix-3' })",paraId:42,tocIndex:22}];}}]);