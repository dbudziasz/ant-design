(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1eb6e259"],{"1eb6e259":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return o;}}),d("857ec2ce");let o=[{value:"\n  ",paraId:0},{value:"In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections.",paraId:1,tocIndex:0},{value:"We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit.",paraId:2,tocIndex:0},{value:"In the grid system, we define the frame outside the information area based on ",paraId:3,tocIndex:1},{value:"row",paraId:3,tocIndex:1},{value:" and ",paraId:3,tocIndex:1},{value:"column",paraId:3,tocIndex:1},{value:", to ensure that every area can have stable arrangement.",paraId:3,tocIndex:1},{value:"Following is a brief look at how it works:",paraId:4,tocIndex:1},{value:"Establish a set of ",paraId:5,tocIndex:1},{value:"column",paraId:5,tocIndex:1},{value:" in the horizontal space defined by ",paraId:5,tocIndex:1},{value:"row",paraId:5,tocIndex:1},{value:" (abbreviated col).",paraId:5,tocIndex:1},{value:"Your content elements should be placed directly in the ",paraId:5,tocIndex:1},{value:"col",paraId:5,tocIndex:1},{value:", and only ",paraId:5,tocIndex:1},{value:"col",paraId:5,tocIndex:1},{value:" should be placed directly in ",paraId:5,tocIndex:1},{value:"row",paraId:5,tocIndex:1},{value:".",paraId:5,tocIndex:1},{value:"The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by ",paraId:5,tocIndex:1},{value:"<Col span={8} />",paraId:5,tocIndex:1},{value:".",paraId:5,tocIndex:1},{value:"If the sum of ",paraId:5,tocIndex:1},{value:"col",paraId:5,tocIndex:1},{value:" spans in a ",paraId:5,tocIndex:1},{value:"row",paraId:5,tocIndex:1},{value:" are more than 24, then the overflowing ",paraId:5,tocIndex:1},{value:"col",paraId:5,tocIndex:1},{value:" as a whole will start a new line arrangement.",paraId:5,tocIndex:1},{value:"Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using ",paraId:6,tocIndex:1},{value:"order",paraId:6,tocIndex:1},{value:".",paraId:6,tocIndex:1},{value:'Layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.',paraId:7,tocIndex:1},{value:"Common props ref\uFF1A",paraId:8,tocIndex:16},{value:"Common props",paraId:9,tocIndex:16},{value:"If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:",paraId:10,tocIndex:16},{value:"react-flexbox-grid",paraId:11,tocIndex:16},{value:"react-blocks",paraId:11,tocIndex:16},{value:"Property",paraId:12,tocIndex:17},{value:"Description",paraId:12,tocIndex:17},{value:"Type",paraId:12,tocIndex:17},{value:"Default",paraId:12,tocIndex:17},{value:"Version",paraId:12,tocIndex:17},{value:"align",paraId:12,tocIndex:17},{value:"Vertical alignment",paraId:12,tocIndex:17},{value:"top",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"middle",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"bottom",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"stretch",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"{[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'}",paraId:12,tocIndex:17},{value:"top",paraId:12,tocIndex:17},{value:"object: 4.24.0",paraId:12,tocIndex:17},{value:"gutter",paraId:12,tocIndex:17},{value:"Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time ",paraId:12,tocIndex:17},{value:"[horizontal, vertical]",paraId:12,tocIndex:17},{value:"number | object | array",paraId:12,tocIndex:17},{value:"0",paraId:12,tocIndex:17},{value:"justify",paraId:12,tocIndex:17},{value:"Horizontal arrangement",paraId:12,tocIndex:17},{value:"start",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"end",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"center",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"space-around",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"space-between",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"space-evenly",paraId:12,tocIndex:17},{value:" | ",paraId:12,tocIndex:17},{value:"{[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'}",paraId:12,tocIndex:17},{value:"start",paraId:12,tocIndex:17},{value:"object: 4.24.0",paraId:12,tocIndex:17},{value:"wrap",paraId:12,tocIndex:17},{value:"Auto wrap line",paraId:12,tocIndex:17},{value:"boolean",paraId:12,tocIndex:17},{value:"true",paraId:12,tocIndex:17},{value:"4.8.0",paraId:12,tocIndex:17},{value:"Property",paraId:13,tocIndex:18},{value:"Description",paraId:13,tocIndex:18},{value:"Type",paraId:13,tocIndex:18},{value:"Default",paraId:13,tocIndex:18},{value:"Version",paraId:13,tocIndex:18},{value:"flex",paraId:13,tocIndex:18},{value:"Flex layout style",paraId:13,tocIndex:18},{value:"string | number",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"offset",paraId:13,tocIndex:18},{value:"The number of cells to offset Col from the left",paraId:13,tocIndex:18},{value:"number",paraId:13,tocIndex:18},{value:"0",paraId:13,tocIndex:18},{value:"order",paraId:13,tocIndex:18},{value:"Raster order",paraId:13,tocIndex:18},{value:"number",paraId:13,tocIndex:18},{value:"0",paraId:13,tocIndex:18},{value:"pull",paraId:13,tocIndex:18},{value:"The number of cells that raster is moved to the left",paraId:13,tocIndex:18},{value:"number",paraId:13,tocIndex:18},{value:"0",paraId:13,tocIndex:18},{value:"push",paraId:13,tocIndex:18},{value:"The number of cells that raster is moved to the right",paraId:13,tocIndex:18},{value:"number",paraId:13,tocIndex:18},{value:"0",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:"Raster number of cells to occupy, 0 corresponds to ",paraId:13,tocIndex:18},{value:"display: none",paraId:13,tocIndex:18},{value:"number",paraId:13,tocIndex:18},{value:"none",paraId:13,tocIndex:18},{value:"xs",paraId:13,tocIndex:18},{value:"screen < 576px",paraId:13,tocIndex:18},{value:" and also default setting, could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"sm",paraId:13,tocIndex:18},{value:"screen \u2265 576px",paraId:13,tocIndex:18},{value:", could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"md",paraId:13,tocIndex:18},{value:"screen \u2265 768px",paraId:13,tocIndex:18},{value:", could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"lg",paraId:13,tocIndex:18},{value:"screen \u2265 992px",paraId:13,tocIndex:18},{value:", could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"xl",paraId:13,tocIndex:18},{value:"screen \u2265 1200px",paraId:13,tocIndex:18},{value:", could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"xxl",paraId:13,tocIndex:18},{value:"screen \u2265 1600px",paraId:13,tocIndex:18},{value:", could be a ",paraId:13,tocIndex:18},{value:"span",paraId:13,tocIndex:18},{value:" value or an object containing above props",paraId:13,tocIndex:18},{value:"number | object",paraId:13,tocIndex:18},{value:"-",paraId:13,tocIndex:18},{value:"You can modify the breakpoints values using by modifying ",paraId:14,tocIndex:18},{value:"screen[XS|SM|MD|LG|XL|XXL]",paraId:14,tocIndex:18},{value:" with ",paraId:14,tocIndex:18},{value:"theme customization",paraId:15,tocIndex:18},{value:" (since 5.1.0, ",paraId:14,tocIndex:18},{value:"sandbox demo",paraId:14,tocIndex:18},{value:").",paraId:14,tocIndex:18},{value:"The breakpoints of responsive grid follow ",paraId:16,tocIndex:18},{value:"BootStrap 4 media queries rules",paraId:16,tocIndex:18},{value:" (not including ",paraId:16,tocIndex:18},{value:"occasionally part",paraId:16,tocIndex:18},{value:").",paraId:16,tocIndex:18}];}}]);