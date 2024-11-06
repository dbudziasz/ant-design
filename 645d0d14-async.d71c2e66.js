(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["645d0d14"],{"645d0d14":function(e,o,n){"use strict";n.d(o,"__esModule",{value:!0}),n.d(o,"texts",{enumerable:!0,get:function(){return t;}}),n("2c8d668d");let t=[{value:"There are some common mistake when submitting an issue to the community for the first time, making it difficult for maintainers to help solve problems. Repost an old article, hoping helps for submit issue after laughing :)",paraId:0},{value:"Original link: ",paraId:1},{value:"How to submit a issue which never can be answered to open source projects",paraId:1},{value:"As a developer, I use and participate in many open source projects. In the open source community, questions and answers are the most interesting part. Some issue with fully communication and some others are not. There are many fascinating and useful commonalities in the way people ask questions. I've distilled them in the hope that they will help those like me who are curious and willing to go out of their way to annoy the maintainers of open source projects.",paraId:2},{value:"Here are thirteen tips on how to ask questions which never can be answered:",paraId:3},{value:"Compress the number of bytes in the question, so that the other party does not think you are long-winded. Use the simplest words to describe your problem, refine keywords, and simplify the lengthy process and tedious details.",paraId:4,tocIndex:0},{value:"Style compilation error\n",paraId:5,tocIndex:1},{value:"Import xxx.css into my project, and an error occurred during compilation. The error message is as follows:\n\nModule build failed: SyntaxError: Unexpected token\n\nI import it like this:\n\nimport 'xxx.css';\n\nbalalalala.....\n",paraId:6,tocIndex:2},{value:"If the maintainer answers you, usually they will ask for further information. Remember not to reply in a hurry, that will make you look like a workaholic (bubble by the computer all the time, waiting pitifully for a reply). You still have other lives, drink a cup of coffee and reply after ten days and a half months. Believe me, they will quickly lose patience and close the question, or get depressed because they can't close it for a while.",paraId:7,tocIndex:3},{value:"You: When using Button, I find that the console reports an error, and the prompt is as follows.\nMaintainer (within 2 days): I can't reproduce your example, can you provide a reproducible example?\nMaintainer (3 days later): @you\nMaintainer (one week later): ping~\nYou (two weeks later): Whoops sorry for the late reply, here is my code.\n",paraId:8,tocIndex:4},{value:"You: When using Button, I find that the console reports an error, and the prompt is as follows.\nMaintainer (within 2 days): I can't reproduce your example, can you provide a reproducible example?\nYou (in 2 days): Maybe my situation is a bit different, here is the reproduce code.\n",paraId:9,tocIndex:5},{value:"Introducing open source modules in a medium or large project is prone to strange problems. There are dozens of files and hundreds of business modules, and the project schedule is tight. It is too hard to check one by one. It is better to hire someone else, and quickly pack a package and send it to the other party.",paraId:10,tocIndex:6},{value:"I have a problem with the front-end component of my database project, here is my code, can anyone help me?\nAttachment: db-service-app.rar (434MB)\n",paraId:11,tocIndex:7},{value:"There is a front-end component problem in my project, I simplified the code,\nIt is found that the xxx component and the yyy component are used at the same time. Here is a simple reproduction example.\nAttachment: component-xxx-yyy-bug.zip (10KB)\n",paraId:12,tocIndex:8},{value:"Always hold back, don't finish the sentence at once, make your question full of mystery, and fully mobilize the reader's curiosity.",paraId:13,tocIndex:9},{value:"You: My code is wrong and I don't know what to do?\nYou: I have a problem here, can someone help me?\nare u there?\n",paraId:14,tocIndex:10},{value:"You: I used the latest version of xxx just released, and the following error occurred in the console...\nI call it like this...\nMy code repository is here...\n",paraId:15,tocIndex:11},{value:"Never, never format code. You are not an artist, and beautifying the format is not your specialty. Your energy should be used in project development, and you don't have time to learn formatting syntax. As for whether the other party can understand, you don't need to care.",paraId:16,tocIndex:12},{value:'renderBatchButton() {\n\nreturn(\n\n\n\n<Dropdown overlay={this. renderExportMenu("2")}>\n\n\n\n\n\nexport warehouse order\n\n);\n\n}\n\n\nrenderExportMenu(category) {\n\nlet exportFile=({key})=>{\n\nconsole. log(key)\n\n}\n\nlet items=[];\n\nif(this.props.global.template_list){\n\nitems=this.props.global.template_list.map((item)=>{\n\nif(category===item.category){\n\nreturn <Menu.Item key={item.id}>{item.name}</Menu.Item>;\n\n}\n\n});\n\n}\n',paraId:17,tocIndex:13},{value:"import React from 'react';\nimport { Menu } from 'antd';\n\nconst Demo: React.FC = () => {\n  const [collapsed, setCollapsed] = useState<boolean>(false);\n\n  const toggle = () => setCollapsed(!collapsed);\n\n  return <Menu>...</Menu>;\n};\n\nexport default Demo;\n",paraId:18,tocIndex:14},{value:"The project code always runs well at the beginning, but when you do a certain operation, or change some code, or in a special environment, a problem occurs. This difference is often the key point of the problem, just keep it in your mind and don't say it easily.",paraId:19,tocIndex:15},{value:"You: My code is wrong.\nMaintainer: I have tried various methods but have not reproduced it, please provide the reproduction?\nYou (much later): Oh! I have this problem in chrome 35.\n",paraId:20,tocIndex:16},{value:"You: My code is wrong in chrome 35.\nMaintainer: Ok, I reproduced it too, I'll see how to fix it.\n",paraId:21,tocIndex:17},{value:"Sometimes you need to do some misleading, intentionally or unintentionally, in short, making difficulties is your strong point",paraId:22,tocIndex:18},{value:"You: My code is wrong.\nMaintainer: What version are you using?\nYou: 0.8.4 (actually 0.8.3 locally)\nMaintainer: Are you sure, 0.8.4 should have fixed this issue. I'll take another look...\n",paraId:23,tocIndex:19},{value:"You: My code is broken in version 0.8.3.\nMaintainer: 0.8.4 should have fixed this problem, and upgrading to the new version will solve it.\n",paraId:24,tocIndex:20},{value:"Open source projects cause bugs in your project, cause you to work overtime on Saturday night, make your missing the party and someone must be responsible. Your work and life are ruined by them, and don't make it easier for them.",paraId:25,tocIndex:21},{value:"This project sucks, it is full of pitfalls to use, and the documentation is too simple. It is really open source to do so.\n",paraId:26,tocIndex:22},{value:"This project has many details and the documentation is not perfect. Is there any improvement plan?\nI have collected the following specific questions and hope to continue to improve them.\n",paraId:27,tocIndex:23},{value:"Try asking a question with an ambitious goal, and only those grandmotherly maintainers will try to answer you (which is unlikely to happen). And because you showed unpreparedness and extreme ignorance in all technical details, the other party's answer can't satisfy you.",paraId:28,tocIndex:24},{value:"How to package and release?\n",paraId:29,tocIndex:25},{value:"I want to develop a front-end single-page project, the back-end is php, and the architecture is completely separated from the front-end.\nI have a problem when I try to use xxx to build a package... (50 words omitted) What should I do at this point?\n",paraId:30,tocIndex:26},{value:"The maintainers of many open source projects are arrogant, pedantic, freaks who like to set all kinds of rules. For example, they often provide weird question templates and ask you to fill in the blanks in a long and smelly form. Once you don't do what they say, they will see you as a troublemaker and judge you. How can you stand these constraints, write whatever you want, let them and their templates go to hell!",paraId:31,tocIndex:27},{value:"Call `xxx.close` not trigger popup close, please solve it\n",paraId:32,tocIndex:28},{value:"The popup of the xxx component is not closed\n\n- Version used: 1.0.0\n- Browser: Chrome 56.0987\n- OS: Windows 10\n\n## what have you done?\n\nI introduced the component xxx, the code is as follows, I clicked on the component to open the popup, and did the following operations.\n\n## What are you expecting?\n\nOverlays should be turned off.\n\n## What is the actual situation?\n\nThe popup closes briefly and then pops up again.\n\n[GIF screenshot]\n\n## Reproducible online demo\n\nhttps://codesandbox.io/xxx\n",paraId:33,tocIndex:29},{value:"Repeat the questions you asked in different places to deepen the other party's impression and subvert the other party's imagination!",paraId:34,tocIndex:30},{value:"Question 1: An error is reported when sending a request: `405 Method not allowed`.\nQuestion 2: Hello, I have the problem of `405 Method not allowed` here.\nQuestion 3: Request 405 error, what should I do?\nQuestion n:...\n",paraId:35,tocIndex:31},{value:"Problem 1: An error is reported when sending a request: `405 Method not allowed`\nYou: +1 I had this problem too.\n",paraId:36,tocIndex:32},{value:"Even if you know that there is an official channel, it is recommended to ask the maintainer in other ways: Twitter, Facebook, private Email, personal blog, their friends and so on. go to all the places you can find him to ask questions.",paraId:37,tocIndex:33},{value:"Private message of unfollowed people: Hello, our project uses your framework, I would like to ask, can the xxx component get the focus? for keyboard switching\n",paraId:38,tocIndex:34},{value:"Official channel: Hello, our project uses your framework. I would like to ask, can the xxx component get the focus? for keyboard switching\n",paraId:39,tocIndex:35},{value:"Raise your question to a higher level, take the moral high ground and make accusations, making they unable to argue.",paraId:40,tocIndex:36},{value:"It turns out that the teams of big companies are like this, don\u2019t they test well? It\u2019s a shame to take this thing out, it\u2019s just a KPI product, and I don\u2019t care about it after the promotion.\n",paraId:41,tocIndex:37},{value:"Although this project is a product of a large company, it has disadvantages compared with competing products in the following aspects, and I personally do not recommend using it.\n",paraId:42,tocIndex:38},{value:"All in all, maintainers of open source projects always want to see problems happen when they try to answer and solve problems, ",paraId:43,tocIndex:39},{value:"don't let them succeed",paraId:43,tocIndex:39},{value:". Also, most of them have OCD about unclosed questions, try to create as many of them as possible.",paraId:43,tocIndex:39}];}}]);