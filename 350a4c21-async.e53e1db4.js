(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["350a4c21"],{"350a4c21":function(a,e,o){"use strict";o.d(e,"__esModule",{value:!0}),o.d(e,"texts",{enumerable:!0,get:function(){return d;}}),o("4bff7ffb");let d=[{value:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use ",paraId:0,tocIndex:0},{value:"Modal",paraId:0,tocIndex:0},{value:" to create a new floating layer over the current page to get user feedback or display information.",paraId:0,tocIndex:0},{value:"Additionally, if you need to show a simple confirmation dialog, you can use ",paraId:1,tocIndex:0},{value:"App.useApp",paraId:2,tocIndex:0},{value:" hooks.",paraId:1,tocIndex:0},{value:"Common props ref\uFF1A",paraId:3,tocIndex:24},{value:"Common props",paraId:4,tocIndex:24},{value:"Property",paraId:5,tocIndex:24},{value:"Description",paraId:5,tocIndex:24},{value:"Type",paraId:5,tocIndex:24},{value:"Default",paraId:5,tocIndex:24},{value:"Version",paraId:5,tocIndex:24},{value:"afterClose",paraId:5,tocIndex:24},{value:"Specify a function that will be called when modal is closed completely",paraId:5,tocIndex:24},{value:"function",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"classNames",paraId:5,tocIndex:24},{value:"Config Modal build-in module's className",paraId:5,tocIndex:24},{value:"Record<SemanticDOM, string>",paraId:6,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"styles",paraId:5,tocIndex:24},{value:"Config Modal build-in module's style",paraId:5,tocIndex:24},{value:"Record<SemanticDOM, CSSProperties>",paraId:7,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"5.10.0",paraId:5,tocIndex:24},{value:"cancelButtonProps",paraId:5,tocIndex:24},{value:"The cancel button props",paraId:5,tocIndex:24},{value:"ButtonProps",paraId:8,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"cancelText",paraId:5,tocIndex:24},{value:"Text of the Cancel button",paraId:5,tocIndex:24},{value:"ReactNode",paraId:5,tocIndex:24},{value:"Cancel",paraId:5,tocIndex:24},{value:"centered",paraId:5,tocIndex:24},{value:"Centered Modal",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"closable",paraId:5,tocIndex:24},{value:"Whether a close (x) button is visible on top right or not",paraId:5,tocIndex:24},{value:"boolean | { closeIcon?: React.ReactNode; disabled?: boolean; }",paraId:5,tocIndex:24},{value:"true",paraId:5,tocIndex:24},{value:"closeIcon",paraId:5,tocIndex:24},{value:"Custom close icon. 5.7.0: close button will be hidden when setting to ",paraId:5,tocIndex:24},{value:"null",paraId:5,tocIndex:24},{value:" or ",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"ReactNode",paraId:5,tocIndex:24},{value:"<CloseOutlined />",paraId:5,tocIndex:24},{value:"confirmLoading",paraId:5,tocIndex:24},{value:"Whether to apply loading visual effect for OK button or not",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"destroyOnClose",paraId:5,tocIndex:24},{value:"Whether to unmount child components on onClose",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"focusTriggerAfterClose",paraId:5,tocIndex:24},{value:"Whether need to focus trigger element after dialog is closed",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"true",paraId:5,tocIndex:24},{value:"4.9.0",paraId:5,tocIndex:24},{value:"footer",paraId:5,tocIndex:24},{value:"Footer content, set as ",paraId:5,tocIndex:24},{value:"footer={null}",paraId:5,tocIndex:24},{value:" when you don't need default buttons",paraId:5,tocIndex:24},{value:"React.ReactNode | ((params:",paraId:5,tocIndex:24},{value:"footerRenderParams",paraId:9,tocIndex:24},{value:")=> React.ReactNode)",paraId:5,tocIndex:24},{value:"(OK and Cancel buttons)",paraId:5,tocIndex:24},{value:"renderFunction: 5.9.0",paraId:5,tocIndex:24},{value:"forceRender",paraId:5,tocIndex:24},{value:"Force render Modal",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"getContainer",paraId:5,tocIndex:24},{value:"The mounted node for Modal but still display at fullscreen",paraId:5,tocIndex:24},{value:"HTMLElement | () => HTMLElement | Selectors | false",paraId:5,tocIndex:24},{value:"document.body",paraId:5,tocIndex:24},{value:"keyboard",paraId:5,tocIndex:24},{value:"Whether support press esc to close",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"true",paraId:5,tocIndex:24},{value:"mask",paraId:5,tocIndex:24},{value:"Whether show mask or not",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"true",paraId:5,tocIndex:24},{value:"maskClosable",paraId:5,tocIndex:24},{value:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"true",paraId:5,tocIndex:24},{value:"modalRender",paraId:5,tocIndex:24},{value:"Custom modal content render",paraId:5,tocIndex:24},{value:"(node: ReactNode) => ReactNode",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"4.7.0",paraId:5,tocIndex:24},{value:"okButtonProps",paraId:5,tocIndex:24},{value:"The ok button props",paraId:5,tocIndex:24},{value:"ButtonProps",paraId:10,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"okText",paraId:5,tocIndex:24},{value:"Text of the OK button",paraId:5,tocIndex:24},{value:"ReactNode",paraId:5,tocIndex:24},{value:"OK",paraId:5,tocIndex:24},{value:"okType",paraId:5,tocIndex:24},{value:"Button ",paraId:5,tocIndex:24},{value:"type",paraId:5,tocIndex:24},{value:" of the OK button",paraId:5,tocIndex:24},{value:"string",paraId:5,tocIndex:24},{value:"primary",paraId:5,tocIndex:24},{value:"style",paraId:5,tocIndex:24},{value:"Style of floating layer, typically used at least for adjusting the position",paraId:5,tocIndex:24},{value:"CSSProperties",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"loading",paraId:5,tocIndex:24},{value:"Show the skeleton",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"5.18.0",paraId:5,tocIndex:24},{value:"title",paraId:5,tocIndex:24},{value:"The modal dialog's title",paraId:5,tocIndex:24},{value:"ReactNode",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"open",paraId:5,tocIndex:24},{value:"Whether the modal dialog is visible or not",paraId:5,tocIndex:24},{value:"boolean",paraId:5,tocIndex:24},{value:"false",paraId:5,tocIndex:24},{value:"width",paraId:5,tocIndex:24},{value:"Width of the modal dialog",paraId:5,tocIndex:24},{value:"string | number",paraId:5,tocIndex:24},{value:"520",paraId:5,tocIndex:24},{value:"wrapClassName",paraId:5,tocIndex:24},{value:"The class name of the container of the modal dialog",paraId:5,tocIndex:24},{value:"string",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"zIndex",paraId:5,tocIndex:24},{value:"The ",paraId:5,tocIndex:24},{value:"z-index",paraId:5,tocIndex:24},{value:" of the Modal",paraId:5,tocIndex:24},{value:"number",paraId:5,tocIndex:24},{value:"1000",paraId:5,tocIndex:24},{value:"onCancel",paraId:5,tocIndex:24},{value:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",paraId:5,tocIndex:24},{value:"function(e)",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"onOk",paraId:5,tocIndex:24},{value:"Specify a function that will be called when a user clicks the OK button",paraId:5,tocIndex:24},{value:"function(e)",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"afterOpenChange",paraId:5,tocIndex:24},{value:"Callback when the animation ends when Modal is turned on and off",paraId:5,tocIndex:24},{value:"(open: boolean) => void",paraId:5,tocIndex:24},{value:"-",paraId:5,tocIndex:24},{value:"5.4.0",paraId:5,tocIndex:24},{value:"The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state every time, set ",paraId:11,tocIndex:25},{value:"destroyOnClose",paraId:11,tocIndex:25},{value:" on it.",paraId:11,tocIndex:25},{value:"There is a situation that using ",paraId:11,tocIndex:25},{value:"<Modal />",paraId:11,tocIndex:25},{value:" with Form, which won't clear fields value when closing Modal even you have set ",paraId:11,tocIndex:25},{value:"destroyOnClose",paraId:11,tocIndex:25},{value:". You need ",paraId:11,tocIndex:25},{value:"<Form preserve={false} />",paraId:11,tocIndex:25},{value:" in this case.",paraId:11,tocIndex:25},{value:"Modal.method()",paraId:11,tocIndex:25},{value:" RTL mode only supports hooks.",paraId:11,tocIndex:25},{value:"There are five ways to display the information based on the content's nature:",paraId:12,tocIndex:26},{value:"Modal.info",paraId:13,tocIndex:26},{value:"Modal.success",paraId:13,tocIndex:26},{value:"Modal.error",paraId:13,tocIndex:26},{value:"Modal.warning",paraId:13,tocIndex:26},{value:"Modal.confirm",paraId:13,tocIndex:26},{value:"The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:",paraId:14,tocIndex:26},{value:"Property",paraId:15,tocIndex:26},{value:"Description",paraId:15,tocIndex:26},{value:"Type",paraId:15,tocIndex:26},{value:"Default",paraId:15,tocIndex:26},{value:"Version",paraId:15,tocIndex:26},{value:"afterClose",paraId:15,tocIndex:26},{value:"Specify a function that will be called when modal is closed completely",paraId:15,tocIndex:26},{value:"function",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"4.9.0",paraId:15,tocIndex:26},{value:"autoFocusButton",paraId:15,tocIndex:26},{value:"Specify which button to autofocus",paraId:15,tocIndex:26},{value:"null | ",paraId:15,tocIndex:26},{value:"ok",paraId:15,tocIndex:26},{value:" | ",paraId:15,tocIndex:26},{value:"cancel",paraId:15,tocIndex:26},{value:"ok",paraId:15,tocIndex:26},{value:"cancelButtonProps",paraId:15,tocIndex:26},{value:"The cancel button props",paraId:15,tocIndex:26},{value:"ButtonProps",paraId:16,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"cancelText",paraId:15,tocIndex:26},{value:"Text of the Cancel button with Modal.confirm",paraId:15,tocIndex:26},{value:"string",paraId:15,tocIndex:26},{value:"Cancel",paraId:15,tocIndex:26},{value:"centered",paraId:15,tocIndex:26},{value:"Centered Modal",paraId:15,tocIndex:26},{value:"boolean",paraId:15,tocIndex:26},{value:"false",paraId:15,tocIndex:26},{value:"className",paraId:15,tocIndex:26},{value:"The className of container",paraId:15,tocIndex:26},{value:"string",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"closable",paraId:15,tocIndex:26},{value:"Whether a close (x) button is visible on top right of the confirm dialog or not",paraId:15,tocIndex:26},{value:"boolean",paraId:15,tocIndex:26},{value:"false",paraId:15,tocIndex:26},{value:"4.9.0",paraId:15,tocIndex:26},{value:"closeIcon",paraId:15,tocIndex:26},{value:"Custom close icon",paraId:15,tocIndex:26},{value:"ReactNode",paraId:15,tocIndex:26},{value:"undefined",paraId:15,tocIndex:26},{value:"4.9.0",paraId:15,tocIndex:26},{value:"content",paraId:15,tocIndex:26},{value:"Content",paraId:15,tocIndex:26},{value:"ReactNode",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"footer",paraId:15,tocIndex:26},{value:"Footer content, set as ",paraId:15,tocIndex:26},{value:"footer: null",paraId:15,tocIndex:26},{value:" when you don't need default buttons",paraId:15,tocIndex:26},{value:"React.ReactNode | ((params:",paraId:15,tocIndex:26},{value:"footerRenderParams",paraId:17,tocIndex:26},{value:")=> React.ReactNode)",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"renderFunction: 5.9.0",paraId:15,tocIndex:26},{value:"getContainer",paraId:15,tocIndex:26},{value:"Return the mount node for Modal",paraId:15,tocIndex:26},{value:"HTMLElement | () => HTMLElement | Selectors | false",paraId:15,tocIndex:26},{value:"document.body",paraId:15,tocIndex:26},{value:"icon",paraId:15,tocIndex:26},{value:"Custom icon",paraId:15,tocIndex:26},{value:"ReactNode",paraId:15,tocIndex:26},{value:"<ExclamationCircleFilled />",paraId:15,tocIndex:26},{value:"keyboard",paraId:15,tocIndex:26},{value:"Whether support press esc to close",paraId:15,tocIndex:26},{value:"boolean",paraId:15,tocIndex:26},{value:"true",paraId:15,tocIndex:26},{value:"mask",paraId:15,tocIndex:26},{value:"Whether show mask or not.",paraId:15,tocIndex:26},{value:"boolean",paraId:15,tocIndex:26},{value:"true",paraId:15,tocIndex:26},{value:"maskClosable",paraId:15,tocIndex:26},{value:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",paraId:15,tocIndex:26},{value:"boolean",paraId:15,tocIndex:26},{value:"false",paraId:15,tocIndex:26},{value:"okButtonProps",paraId:15,tocIndex:26},{value:"The ok button props",paraId:15,tocIndex:26},{value:"ButtonProps",paraId:18,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"okText",paraId:15,tocIndex:26},{value:"Text of the OK button",paraId:15,tocIndex:26},{value:"string",paraId:15,tocIndex:26},{value:"OK",paraId:15,tocIndex:26},{value:"okType",paraId:15,tocIndex:26},{value:"Button ",paraId:15,tocIndex:26},{value:"type",paraId:15,tocIndex:26},{value:" of the OK button",paraId:15,tocIndex:26},{value:"string",paraId:15,tocIndex:26},{value:"primary",paraId:15,tocIndex:26},{value:"style",paraId:15,tocIndex:26},{value:"Style of floating layer, typically used at least for adjusting the position",paraId:15,tocIndex:26},{value:"CSSProperties",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"title",paraId:15,tocIndex:26},{value:"Title",paraId:15,tocIndex:26},{value:"ReactNode",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"width",paraId:15,tocIndex:26},{value:"Width of the modal dialog",paraId:15,tocIndex:26},{value:"string | number",paraId:15,tocIndex:26},{value:"416",paraId:15,tocIndex:26},{value:"wrapClassName",paraId:15,tocIndex:26},{value:"The class name of the container of the modal dialog",paraId:15,tocIndex:26},{value:"string",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"4.18.0",paraId:15,tocIndex:26},{value:"zIndex",paraId:15,tocIndex:26},{value:"The ",paraId:15,tocIndex:26},{value:"z-index",paraId:15,tocIndex:26},{value:" of the Modal",paraId:15,tocIndex:26},{value:"number",paraId:15,tocIndex:26},{value:"1000",paraId:15,tocIndex:26},{value:"onCancel",paraId:15,tocIndex:26},{value:"Click to onCancel the callback, the parameter is the closing function, if it returns a promise, resolve means normal closing, reject means not closing",paraId:15,tocIndex:26},{value:"function(close)",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"onOk",paraId:15,tocIndex:26},{value:"Click to onOk the callback, the parameter is the closing function, if it returns a promise, resolve means normal closing, reject means not closing",paraId:15,tocIndex:26},{value:"function(close)",paraId:15,tocIndex:26},{value:"-",paraId:15,tocIndex:26},{value:"All the ",paraId:19,tocIndex:26},{value:"Modal.method",paraId:19,tocIndex:26},{value:"s will return a reference, and then we can update and close the modal dialog by the reference.",paraId:19,tocIndex:26},{value:"const modal = Modal.info();\n\nmodal.update({\n  title: 'Updated title',\n  content: 'Updated content',\n});\n\n// on 4.8.0 or above, you can pass a function to update modal\nmodal.update((prevConfig) => ({\n  ...prevConfig,\n  title: `${prevConfig.title} (New)`,\n}));\n\nmodal.destroy();\n",paraId:20,tocIndex:26},{value:"Modal.destroyAll",paraId:21,tocIndex:26},{value:"Modal.destroyAll()",paraId:22,tocIndex:26},{value:" could destroy all confirmation modal dialogs(",paraId:22,tocIndex:26},{value:"Modal.confirm|success|info|error|warning",paraId:22,tocIndex:26},{value:"). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)",paraId:22,tocIndex:26},{value:"import { browserHistory } from 'react-router';\n\n// router change\nbrowserHistory.listen(() => {\n  Modal.destroyAll();\n});\n",paraId:23,tocIndex:26},{value:"When you need using Context, you can use ",paraId:24,tocIndex:27},{value:"contextHolder",paraId:24,tocIndex:27},{value:" which created by ",paraId:24,tocIndex:27},{value:"Modal.useModal",paraId:24,tocIndex:27},{value:" to insert into children. Modal created by hooks will get all the context where ",paraId:24,tocIndex:27},{value:"contextHolder",paraId:24,tocIndex:27},{value:" are. Created ",paraId:24,tocIndex:27},{value:"modal",paraId:24,tocIndex:27},{value:" has the same creating function with ",paraId:24,tocIndex:27},{value:"Modal.method",paraId:24,tocIndex:27},{value:".",paraId:24,tocIndex:27},{value:"const [modal, contextHolder] = Modal.useModal();\n\nReact.useEffect(() => {\n  modal.confirm({\n    // ...\n  });\n}, []);\n\nreturn <div>{contextHolder}</div>;\n",paraId:25,tocIndex:27},{value:"modal.confirm",paraId:26,tocIndex:27},{value:" return method:",paraId:26,tocIndex:27},{value:"destroy",paraId:27,tocIndex:27},{value:": Destroy current modal",paraId:27,tocIndex:27},{value:"update",paraId:27,tocIndex:27},{value:": Update current modal",paraId:27,tocIndex:27},{value:"then",paraId:27,tocIndex:27},{value:": (Hooks only) Promise chain call, support ",paraId:27,tocIndex:27},{value:"await",paraId:27,tocIndex:27},{value:" operation",paraId:27,tocIndex:27},{value:"// Return `true` when click `onOk` and `false` when click `onCancel`\nconst confirmed = await modal.confirm({ ... });\n",paraId:28,tocIndex:27},{value:"Property",paraId:29,tocIndex:28},{value:"Description",paraId:29,tocIndex:28},{value:"Type",paraId:29,tocIndex:28},{value:"Default",paraId:29,tocIndex:28},{value:"originNode",paraId:29,tocIndex:28},{value:"default node",paraId:29,tocIndex:28},{value:"React.ReactNode",paraId:29,tocIndex:28},{value:"-",paraId:29,tocIndex:28},{value:"extra",paraId:29,tocIndex:28},{value:"extended options",paraId:29,tocIndex:28},{value:"{ OkBtn: FC; CancelBtn: FC }",paraId:29,tocIndex:28},{value:"-",paraId:29,tocIndex:28},{value:"Modal will use memo to avoid content jumping when closed. Also, if you use Form in Modal, you can reset ",paraId:30,tocIndex:32},{value:"initialValues",paraId:30,tocIndex:32},{value:" by calling ",paraId:30,tocIndex:32},{value:"resetFields",paraId:30,tocIndex:32},{value:" in effect.",paraId:30,tocIndex:32},{value:"locale/prefixCls",paraId:31},{value:"antd will dynamic create React instance by ",paraId:32,tocIndex:33},{value:"ReactDOM.render",paraId:32,tocIndex:33},{value:" when call Modal methods. Whose context is different with origin code located context.",paraId:32,tocIndex:33},{value:"When you need context info (like ConfigProvider context), you can use ",paraId:33,tocIndex:33},{value:"Modal.useModal",paraId:33,tocIndex:33},{value:" to get ",paraId:33,tocIndex:33},{value:"modal",paraId:33,tocIndex:33},{value:" instance and ",paraId:33,tocIndex:33},{value:"contextHolder",paraId:33,tocIndex:33},{value:" node. And put it in your children:",paraId:33,tocIndex:33},{value:'const [modal, contextHolder] = Modal.useModal();\n\n// then call modal.confirm instead of Modal.confirm\n\nreturn (\n  <Context1.Provider value="Ant">\n    {/* contextHolder is in Context1, which means modal will get context of Context1 */}\n    {contextHolder}\n    <Context2.Provider value="Design">\n      {/* contextHolder is out of Context2, which means modal will not get context of Context2 */}\n    </Context2.Provider>\n  </Context1.Provider>\n);\n',paraId:34,tocIndex:33},{value:"Note:",paraId:35,tocIndex:33},{value:" You must insert ",paraId:35,tocIndex:33},{value:"contextHolder",paraId:35,tocIndex:33},{value:" into your children with hooks. You can use origin method if you do not need context connection.",paraId:35,tocIndex:33},{value:"App Package Component",paraId:36,tocIndex:33},{value:" can be used to simplify the problem of ",paraId:37,tocIndex:33},{value:"useModal",paraId:37,tocIndex:33},{value:" and other methods that need to manually implant contextHolder.",paraId:37,tocIndex:33},{value:"You can config with ",paraId:38,tocIndex:34},{value:"ConfigProvider.config",paraId:39,tocIndex:34}];}}]);