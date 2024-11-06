(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b3bed5ba"],{b3bed5ba:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"texts",{enumerable:!0,get:function(){return a;}}),n("a9ca6f49");let a=[{value:"We often encounter the need for pop-up elements when developing, such as the Select drop-down box, or the Modal component. When it is directly rendered under the current node, it may be clipped by the ",paraId:0},{value:"overflow: hidden",paraId:0},{value:" of the parent node:",paraId:0},{value:"Therefore we render it under ",paraId:1},{value:"body",paraId:1},{value:" by default in Ant Design, but this will bring new problems. Since they are not under the same container, when the user scrolls the screen, they will find that the popup layer does not follow the scrolling:",paraId:1},{value:"To solve this problem, we provide the ",paraId:2},{value:"getContainer",paraId:2},{value:" property, which allows users to customize the rendered container. The ",paraId:2},{value:"getContainer",paraId:2},{value:" method will be called when the component is mounted, returning a container node, and the component will be rendered under this node through ",paraId:2},{value:"createPortal",paraId:2},{value:".",paraId:2},{value:"// Fake Code. Just for Demo\nconst PopupWrapper = () => {\n  const eleRef = React.useRef<HTMLDivElement>(null);\n\n  React.useEffect(() => {\n    // It's much complex with timing in real world. You can view the source for more detail:\n    // https://github.com/react-component/portal/blob/master/src/Portal.tsx\n    const container: HTMLElement = getContainer(eleRef.current);\n\n    // ...\n  }, []);\n\n  return (\n    <div ref={eleRef}>\n      {...}\n    </div>\n  );\n}\n",paraId:3},{value:"// Fake Code. Just for Demo\nconst defaultGetContainer = () => {\n  const div = document.createElement('div');\n  document.body.appendChild(div);\n  return div;\n};\n\nconst SomeComponent = ({ getContainer = defaultGetContainer }) => (\n  <PopupWrapper getContainer={getContainer} />\n);\n",paraId:4},{value:"For the time being, we don\u2019t pay attention to ",paraId:5},{value:"getContainer",paraId:5},{value:"\u2019s need to dynamically switch the mount node (in fact, it has not been able to switch for a long time in the past), only from the perspective of React 18, it has encountered some problems.",paraId:5},{value:"In React 18, effects may fire multiple times. In order to prevent inadvertently breaking the developer's behavior, it has also been adjusted accordingly under ",paraId:6,tocIndex:0},{value:"StrictMode",paraId:6,tocIndex:0},{value:":",paraId:6,tocIndex:0},{value:"React mounts the component.\n",paraId:7,tocIndex:0},{value:"Layout effects are created.",paraId:8,tocIndex:0},{value:"Effect effects are created.",paraId:8,tocIndex:0},{value:"React simulates effects being destroyed on a mounted component.\n",paraId:7,tocIndex:0},{value:"Layout effects are destroyed.",paraId:9,tocIndex:0},{value:"Effects are destroyed.",paraId:9,tocIndex:0},{value:"React simulates effects being re-created on a mounted component.\n",paraId:7,tocIndex:0},{value:"Layout effects are created",paraId:10,tocIndex:0},{value:"Effect setup code runs",paraId:10,tocIndex:0},{value:"The simple understanding is that under StrictMode, even if your deps contains empty objects, the effect will still be triggered multiple times. When switching to React 18 StrictMode, we will find that there will be a pair of mount nodes in the HTML, and the previous one is empty:",paraId:11,tocIndex:0},{value:'<body>\n  <div id="root">...</div>\n\n  <!-- Empty -->\n  <div className="sample-holder"></div>\n\n  <!-- Real in use -->\n  <div className="sample-holder">\n    <div className="ant-component-wrapper">...</div>\n  </div>\n</body>\n',paraId:12,tocIndex:0},{value:"Therefore, we adjusted the call implementation, and the default ",paraId:13,tocIndex:0},{value:"getContainer",paraId:13,tocIndex:0},{value:" is also managed through state to ensure that the nodes generated by the previous effect will be cleaned up in StrictMode:",paraId:13,tocIndex:0},{value:"// Fake Code. Just for Demo\nconst SomeComponent = ({ getContainer }) => {\n  const [myContainer, setMyContainer] = React.useState<HTMLElement | null>(null);\n\n  React.useEffect(() => {\n    if (getContainer) {\n      setMyContainer(getContainer());\n      return;\n    }\n\n    const div = document.createElement('div');\n    document.body.appendChild(div);\n    setMyContainer(div);\n\n    return () => {\n      document.body.removeChild(div);\n    };\n  }, [getContainer]);\n\n  return <PopupWrapper getContainer={() => myContainer} />;\n};\n",paraId:14,tocIndex:0},{value:"After putting ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" into effect management, we can manage nodes in a way that is more in line with the React life cycle, and we can also clean up when ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" changes. So as to support the scenario of dynamically changing ",paraId:15,tocIndex:0},{value:"getContainer",paraId:15,tocIndex:0},{value:" (although I personally doubt the universality of this usage scenario).",paraId:15,tocIndex:0},{value:"Due to the fix that ",paraId:16,tocIndex:1},{value:"getContainer",paraId:16,tocIndex:1},{value:" does not support dynamic changes, it also introduces a potential breaking change at the same time. If the developer customizes ",paraId:16,tocIndex:1},{value:"getContainer",paraId:16,tocIndex:1},{value:" to create a new DOM node every time, it will cause an infinite loop because of the continuous execution of the effect, resulting in the continuous creation of nodes. If you use this method and encounter problems, you need to pay attention to check.",paraId:16,tocIndex:1}];}}]);