(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["dfcdedb0"],{dfcdedb0:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"SandpackNode",{enumerable:!0,get:function(){return l;}});var n=r("fcb0aa14"),i=r("d02fac4f"),a=r("8ed784bd"),o=r("d1fbe4a8");r("a0d42341"),r("647d6416");var s=function(e,t){e.style.border="0",e.style.width=t.width||"100%",e.style.height=t.height||"100%",e.style.overflow="hidden",e.allow="cross-origin-isolated";},c=[{code:(function(e){var t=e.scope,r=window.history.__proto__,n=[],i=0,a=function(e){parent.postMessage({type:"urlchange",url:e,back:i>0,forward:i<n.length-1,channelId:t.channelId},"*");};Object.assign(window.history,{go:function(e){var t=i+e;if(t>=0&&t<=n.length-1){var o=n[i=t],s=o.url,c=o.state;r.replaceState.call(window.history,c,"",s),a(document.location.href),window.dispatchEvent(new PopStateEvent("popstate",{state:c}));}},back:function(){window.history.go(-1);},forward:function(){window.history.go(1);},pushState:function(e,t,o){r.replaceState.call(window.history,e,t,o),n.splice(i+1),n.push({url:o,state:e}),i=n.length-1,a(document.location.href);},replaceState:function(e,t,o){r.replaceState.call(window.history,e,t,o),n[i]={state:e,url:o},a(document.location.href);}}),window.addEventListener("message",function(e){var t=e.data;"urlback"===t.type?history.back():"urlforward"===t.type?history.forward():"refresh"===t.type&&document.location.reload();});}).toString(),id:"historyListener"},{code:"function consoleHook({ scope }) {"+o.c+"\n};",id:"consoleHook"},{code:(function(e){var t,r=e.scope,n=0;function i(){var e=function(){if("undefined"==typeof window)return 0;var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.offsetHeight);}();n!==e&&window.parent.postMessage({type:"resize",height:e,codesandbox:!0,channelId:r.channelId},"*"),n=e;}i(),new MutationObserver(function(){void 0===t&&(i(),t=setTimeout(function(){t=void 0;},300));}).observe(document,{attributes:!0,childList:!0,subtree:!0}),setInterval(i,300);}).toString(),id:"watchResize"}],u=function(e,t){c.forEach(function(r){var n,a=r.code,o={uid:r.id,type:i.INJECT_MESSAGE_TYPE,code:"exports.activate = ".concat(a),scope:{channelId:t}};null===(n=e.contentWindow)||void 0===n||n.postMessage(o,"*");});},l=function(e){function t(t,r,a){void 0===a&&(a={});var s=e.call(this,t,r,(0,n.h)((0,n.h)({},a),{bundlerURL:a.bundlerURL}))||this;return s._modulesCache=new Map,s.messageChannelId=(0,o.g)(),s._initPromise=null,s.emitter=new o.E,s.manageIframes(t),s.emulator=new i.Nodebox({iframe:s.emulatorIframe,runtimeUrl:s.options.bundlerURL}),s.updateSandbox(r),s;}return(0,n.g)(t,e),t.prototype._init=function(e){return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(t){switch(t.label){case 0:return[4,this.emulator.connect()];case 1:return t.sent(),[4,this.emulator.fs.init(e)];case 2:return t.sent(),[4,this.globalListeners()];case 3:return t.sent(),[2];}});});},t.prototype.compile=function(e){return(0,n._)(this,void 0,void 0,function(){var t,r;return(0,n.a)(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),this.status="initializing",this.dispatch({type:"start",firstLoad:!0}),this._initPromise||(this._initPromise=this._init(e)),[4,this._initPromise];case 1:return n.sent(),this.dispatch({type:"connected"}),[4,this.createShellProcessFromTask(e)];case 2:return t=n.sent().id,[4,this.createPreviewURLFromId(t)];case 3:return n.sent(),[4,this.setLocationURLIntoIFrame()];case 4:return n.sent(),this.dispatchDoneMessage(),[3,6];case 5:return r=n.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,o.a)(r)}),this.dispatch({type:"done",compilatonError:!0}),[3,6];case 6:return[2];}});});},t.prototype.createShellProcessFromTask=function(e){return(0,n._)(this,void 0,void 0,function(){var t,r,i=this;return(0,n.a)(this,function(a){switch(a.label){case 0:return t=(0,o.r)(e["/package.json"]),this.emulatorCommand=(0,o.b)(t),this.emulatorShellProcess=this.emulator.shell.create(),[4,this.emulatorShellProcess.on("exit",function(e){i.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,n.c)("Error: process.exit(".concat(e,") called."))});})];case 1:return a.sent(),[4,this.emulatorShellProcess.on("progress",function(e){var t,r;if("command_running"===e.state||"starting_command"===e.state){i.dispatch({type:"shell/progress",data:(0,n.h)((0,n.h)({},e),{command:[null===(t=i.emulatorCommand)||void 0===t?void 0:t[0],null===(r=i.emulatorCommand)||void 0===r?void 0:r[1].join(" ")].join(" ")})}),i.status="installing-dependencies";return;}i.dispatch({type:"shell/progress",data:e});})];case 2:return a.sent(),this.emulatorShellProcess.stdout.on("data",function(e){i.dispatch({type:"stdout",payload:{data:e,type:"out"}});}),this.emulatorShellProcess.stderr.on("data",function(e){i.dispatch({type:"stdout",payload:{data:e,type:"err"}});}),[4,(r=this.emulatorShellProcess).runCommand.apply(r,this.emulatorCommand)];case 3:return[2,a.sent()];}});});},t.prototype.createPreviewURLFromId=function(e){var t;return(0,n._)(this,void 0,void 0,function(){var r;return(0,n.a)(this,function(n){switch(n.label){case 0:return this.iframePreviewUrl=void 0,[4,this.emulator.preview.getByShellId(e)];case 1:return r=n.sent().url,this.iframePreviewUrl=r+(null!==(t=this.options.startRoute)&&void 0!==t?t:""),[2];}});});},t.prototype.manageIframes=function(e){var t;if("string"==typeof e){var r=document.querySelector(e);(0,n.n)(r,"The element '".concat(e,"' was not found")),this.iframe=document.createElement("iframe"),null==r||r.appendChild(this.iframe);}else this.iframe=e;s(this.iframe,this.options),(0,n.n)(this.iframe.parentNode,"The given iframe does not have a parent."),this.emulatorIframe=document.createElement("iframe"),this.emulatorIframe.classList.add("sp-bridge-frame"),null===(t=this.iframe.parentNode)||void 0===t||t.appendChild(this.emulatorIframe);},t.prototype.setLocationURLIntoIFrame=function(){return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(e){switch(e.label){case 0:if(!this.iframePreviewUrl)return[3,2];return[4,function(e,t){return(0,n._)(this,void 0,void 0,function(){var r,i,a;return(0,n.a)(this,function(o){return r=e.contentWindow,(0,n.n)(r,"Failed to await preview iframe: no content window found"),i=0,[2,new Promise(function(r,o){var s=function(){var c=function(){clearTimeout(a),i=20,r(),e.removeEventListener("load",c);};if(i>=20){o((0,n.c)("Could not able to connect to preview."));return;}e.setAttribute("src",t),a=setTimeout(function(){s(),e.removeEventListener("load",c);},9e4),i+=1,e.addEventListener("load",c);};e.addEventListener("error",function(){return o(Error("Iframe error"));}),e.addEventListener("abort",function(){return o(Error("Aborted"));}),s();})];});});}(this.iframe,this.iframePreviewUrl)];case 1:e.sent(),e.label=2;case 2:return[2];}});});},t.prototype.dispatchDoneMessage=function(){this.status="done",this.dispatch({type:"done",compilatonError:!1}),this.iframePreviewUrl&&this.dispatch({type:"urlchange",url:this.iframePreviewUrl,back:!1,forward:!1});},t.prototype.globalListeners=function(){return(0,n._)(this,void 0,void 0,function(){var e=this;return(0,n.a)(this,function(t){switch(t.label){case 0:return window.addEventListener("message",function(t){t.data.type===i.PREVIEW_LOADED_MESSAGE_TYPE&&u(e.iframe,e.messageChannelId),"urlchange"===t.data.type&&t.data.channelId===e.messageChannelId?e.dispatch({type:"urlchange",url:t.data.url,back:t.data.back,forward:t.data.forward}):t.data.channelId===e.messageChannelId&&e.dispatch(t.data);}),[4,this.emulator.fs.watch(["*"],[".next","node_modules","build","dist","vendor",".config",".vuepress"],function(t){return(0,n._)(e,void 0,void 0,function(){var e,r,i,a,s;return(0,n.a)(this,function(n){switch(n.label){case 0:if(!t)return[2];return r="newPath"in(e=t)?e.newPath:"path"in e?e.path:"",[4,this.emulator.fs.stat(r)];case 1:if("file"!==n.sent().type)return[2,null];n.label=2;case 2:switch(n.trys.push([2,10,,11]),e.type){case"change":case"create":return[3,3];case"remove":return[3,5];case"rename":return[3,6];case"close":return[3,8];}return[3,9];case 3:return[4,this.emulator.fs.readFile(e.path,"utf8")];case 4:return i=n.sent(),this.dispatch({type:"fs/change",path:e.path,content:i}),this._modulesCache.set(e.path,(0,o.w)(i)),[3,9];case 5:return this.dispatch({type:"fs/remove",path:e.path}),this._modulesCache.delete(e.path),[3,9];case 6:return this.dispatch({type:"fs/remove",path:e.oldPath}),this._modulesCache.delete(e.oldPath),[4,this.emulator.fs.readFile(e.newPath,"utf8")];case 7:return a=n.sent(),this.dispatch({type:"fs/change",path:e.newPath,content:a}),this._modulesCache.set(e.newPath,(0,o.w)(a)),[3,9];case 8:return[3,9];case 9:return[3,11];case 10:return s=n.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,o.a)(s)}),[3,11];case 11:return[2];}});});})];case 1:return t.sent(),[2];}});});},t.prototype.restartShellProcess=function(){var e;return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(t){switch(t.label){case 0:if(!(this.emulatorShellProcess&&this.emulatorCommand))return[3,3];return this.dispatch({type:"start",firstLoad:!0}),this.status="initializing",[4,this.emulatorShellProcess.kill()];case 1:return t.sent(),null===(e=this.iframe)||void 0===e||e.removeAttribute("attr"),this.emulator.fs.rm("/node_modules/.vite",{recursive:!0,force:!0}),[4,this.compile(Object.fromEntries(this._modulesCache))];case 2:t.sent(),t.label=3;case 3:return[2];}});});},t.prototype.updateSandbox=function(e){var t,r=this,n=(0,o.f)(e.files);if((null===(t=this.emulatorShellProcess)||void 0===t?void 0:t.state)==="running"){Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r._modulesCache.get(t)&&(0,o.r)(n)===(0,o.r)(r._modulesCache.get(t))||r.emulator.fs.writeFile(t,n,{recursive:!0});});return;}this.dispatch({codesandbox:!0,modules:n,template:e.template,type:"compile"}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r._modulesCache.set(t,(0,o.w)(n));});},t.prototype.dispatch=function(e){var t,r;return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(n){switch(n.label){case 0:switch(e.type){case"compile":return[3,1];case"refresh":return[3,2];case"urlback":case"urlforward":return[3,4];case"shell/restart":return[3,5];case"shell/openPreview":return[3,6];}return[3,7];case 1:return this.compile(e.modules),[3,8];case 2:return[4,this.setLocationURLIntoIFrame()];case 3:return n.sent(),[3,8];case 4:return null===(r=null===(t=this.iframe)||void 0===t?void 0:t.contentWindow)||void 0===r||r.postMessage(e,"*"),[3,8];case 5:return this.restartShellProcess(),[3,8];case 6:return window.open(this.iframePreviewUrl,"_blank"),[3,8];case 7:this.emitter.dispatch(e),n.label=8;case 8:return[2];}});});},t.prototype.listen=function(e){return this.emitter.listener(e);},t.prototype.destroy=function(){this.emulatorIframe.remove(),this.emitter.cleanup();},t;}(a.S);}}]);