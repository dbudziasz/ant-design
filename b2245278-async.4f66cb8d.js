(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b2245278"],{b2245278:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return o;}}),t("c7987772");let o=[{value:"Ant Design React is dedicated to providing a ",paraId:0},{value:"good development experience",paraId:0},{value:" for programmers. Before starting, it is recommended to learn ",paraId:0},{value:"React",paraId:0},{value:" first, and correctly install and configure ",paraId:0},{value:"Node.js",paraId:0},{value:" v16 or above.",paraId:0},{value:"The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step.",paraId:1},{value:"Finally, if you are working in a local development environment, please refer to ",paraId:2},{value:"Use with create-react-app",paraId:3},{value:".",paraId:2},{value:"Here is a simple online codesandbox demo of an Ant Design component to show the usage of Ant Design React.",paraId:4,tocIndex:0},{value:"const sandpackConfig = {\n  autorun: true,\n};\n\nimport React from 'react';\nimport { Button, Space, DatePicker, version } from 'antd';\n\nconst App = () => (\n  <div style={{ padding: '0 24px' }}>\n    <h1>antd version: {version}</h1>\n    <Space>\n      <DatePicker />\n      <Button type=\"primary\">Primary Button</Button>\n    </Space>\n  </div>\n);\n\nexport default App;\n",paraId:5,tocIndex:0},{value:"Follow the steps below to play around with Ant Design yourself:",paraId:6,tocIndex:0},{value:"Visit ",paraId:7,tocIndex:1},{value:"https://u.ant.design/codesandbox-repro",paraId:7,tocIndex:1},{value:" to create a codesandbox -- don't forget to press the save button as well to create a new instance.",paraId:7,tocIndex:1},{value:"Replace the contents of ",paraId:8,tocIndex:2},{value:"index.js",paraId:8,tocIndex:2},{value:" with the following code. As you can see, there is no difference between antd's components and typical React components.",paraId:8,tocIndex:2},{value:"If you have already set things up by following the ",paraId:9,tocIndex:2},{value:"Use with create-react-app",paraId:10,tocIndex:2},{value:", replace the content of ",paraId:9,tocIndex:2},{value:"/src/index.js",paraId:9,tocIndex:2},{value:" as follows:",paraId:9,tocIndex:2},{value:"import React, { useState } from 'react';\nimport { DatePicker, message } from 'antd';\nimport { createRoot } from 'react-dom/client';\n\nimport './index.css';\n\nconst App = () => {\n  const [date, setDate] = useState(null);\n  const [messageApi, contextHolder] = message.useMessage();\n  const handleChange = (value) => {\n    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);\n    setDate(value);\n  };\n  return (\n    <div style={{ width: 400, margin: '100px auto' }}>\n      <DatePicker onChange={handleChange} />\n      <div style={{ marginTop: 16 }}>\n        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}\n      </div>\n      {contextHolder}\n    </div>\n  );\n};\n\ncreateRoot(document.getElementById('root')).render(<App />);\n",paraId:11,tocIndex:2},{value:"You can view the list of components in the side menu of the Components page, such as the ",paraId:12,tocIndex:3},{value:"Alert",paraId:13,tocIndex:3},{value:" component. Plenty of examples are also provided in the component pages and API documentation as well.",paraId:12,tocIndex:3},{value:'Click the "Open in Editor" icon in the first example to open an editor with source code to use out-of-the-box. Now you can import the ',paraId:14,tocIndex:3},{value:"Alert",paraId:14,tocIndex:3},{value:" component into the codesandbox:",paraId:14,tocIndex:3},{value:"- import { DatePicker, message } from 'antd';\n+ import { DatePicker, message, Alert } from 'antd';\n",paraId:15,tocIndex:3},{value:"Now add the following jsx inside the ",paraId:16,tocIndex:3},{value:"render",paraId:16,tocIndex:3},{value:" function.",paraId:16,tocIndex:3},{value:"  <DatePicker onChange={value => this.handleChange(value)} />\n  <div style={{ marginTop: 20 }}>\n-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}\n+   <Alert message=\"Selected Date\" description={date ? date.format('YYYY-MM-DD') : 'None'} />\n  </div>\n",paraId:17,tocIndex:3},{value:"Select a date, and you can see the effect in the preview area on the right:",paraId:18,tocIndex:3},{value:"OK! Now that you know the basics of using antd components, you are welcome to explore more components in the codesandbox. When reporting a bug with ant design, we also strongly recommend using codesandbox to provide a reproducible demo as well.",paraId:19,tocIndex:3},{value:"During actual real-world project development, you will most likely need a development workflow consisting of ",paraId:20,tocIndex:4},{value:"compile/build/deploy/lint/debug/",paraId:20,tocIndex:4},{value:" deployment. You can read the following documents on the subject or use the following scaffolds and examples provided below:",paraId:20,tocIndex:4},{value:"Ant Design Pro",paraId:21,tocIndex:4},{value:"create-next-app",paraId:21,tocIndex:4},{value:"More scaffolds at ",paraId:21,tocIndex:4},{value:"Scaffold Market",paraId:21,tocIndex:4},{value:"If you use ",paraId:22,tocIndex:5},{value:"create-react-app",paraId:22,tocIndex:5},{value:" follow the instructions ",paraId:22,tocIndex:5},{value:"here",paraId:23,tocIndex:5},{value:" instead.",paraId:22,tocIndex:5},{value:"Jest does not support ",paraId:24,tocIndex:5},{value:"esm",paraId:24,tocIndex:5},{value:" modules, and Ant Design uses them. In order to test your Ant Design application with Jest you have to add the following to your Jest config :",paraId:24,tocIndex:5},{value:'"transform": { "^.+\\\\.(ts|tsx|js|jsx)?$": "ts-jest" }\n',paraId:25,tocIndex:5},{value:"antd",paraId:26,tocIndex:6},{value:" supports tree shaking of ES modules, so using ",paraId:26,tocIndex:6},{value:"import { Button } from 'antd';",paraId:26,tocIndex:6},{value:" would drop js code you didn't use.",paraId:26,tocIndex:6},{value:"If you want to customize your workflow, we recommend using ",paraId:27,tocIndex:7},{value:"webpack",paraId:27,tocIndex:7},{value:" or ",paraId:27,tocIndex:7},{value:"vite",paraId:27,tocIndex:7},{value:" to build and debug code. You can try out plenty of ",paraId:27,tocIndex:7},{value:"boilerplates",paraId:27,tocIndex:7},{value:" available in the React ecosystem.",paraId:27,tocIndex:7},{value:"There are also some ",paraId:28,tocIndex:7},{value:"scaffolds",paraId:28,tocIndex:7},{value:" which have already been integrated into antd, so you can try and start with one of these and even contribute.",paraId:28,tocIndex:7}];}}]);