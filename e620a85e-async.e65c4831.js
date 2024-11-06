(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e620a85e"],{e620a85e:function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return I;}}),d("71680b5c");let I=[{value:"Shadow originates from the physical phenomenon of reflecting the distance between objects in real life. For the user interface (UI), we often simulate this through element projection to inform the user about the height distance and layer hierarchy between elements.",paraId:0},{value:"Shadows are produced by two surfaces at different levels, and the intensity is determined by the distance between them. Therefore, the height of an object directly affects its shadow. The farther an object is from the ground, the larger and blurrier the shadow becomes. We will divide the system into four UI levels: none, low, medium, and high, each distributed across different height levels, with varying shadow properties.",paraId:1,tocIndex:0},{value:"Layer 0",paraId:2,tocIndex:0},{value:": When an object is close to the ground, its shadow overlaps completely with the object itself. In the UI, no shadow value is defined for this layer. For example: input boxes.",paraId:2,tocIndex:0},{value:"Layer 1",paraId:3,tocIndex:0},{value:": When an object appears at the low level, it enters a floating state when manipulated (hovered, clicked, etc). Once the operation is completed or canceled, the hover state feedback disappears, and the object returns to its original level. For example: card hovering.",paraId:3,tocIndex:0},{value:"Layer 2",paraId:4,tocIndex:0},{value:": When an object appears at the medium level, it expands and follows the relationship with the reference layer. The object opens from elements on the ground and moves with the movement of the elements at that level. For example: dropdown panels.",paraId:4,tocIndex:0},{value:"Layer 3",paraId:5,tocIndex:0},{value:": When an object appears at the high level, its movement is independent of other levels. For example: dialog boxes.",paraId:5,tocIndex:0},{value:"The direction of a shadow is determined by the relative position of the light source and the object. Assuming the height of the light source remains constant, the distance between the light source and the object, as well as the distance between the object and the shadow, are directly proportional. The further away the light source, the further away the shadow from the object. In the UI, the direction of shadows is typically represented using the ",paraId:6,tocIndex:1},{value:"X, Y",paraId:6,tocIndex:1},{value:" coordinates.",paraId:6,tocIndex:1},{value:"As mentioned above, shadows are generated by illumination. The main factors affecting their values are the height of the object and the position of the light source:",paraId:7,tocIndex:2},{value:"At different heights, the shadow's color, blur, and area vary. Objects further from the ground produce lighter shadows with higher blur and larger area, while those closer to the ground create darker shadows with lower blur and smaller area.",paraId:8,tocIndex:2},{value:"The direction of the projection is primarily determined by the relative position of the light source and the object.",paraId:9,tocIndex:2},{value:"In Ant Design, different shadow directions are used in various contexts:",paraId:10,tocIndex:2},{value:"Downwards Shadow: mainly used inside components or the components themselves, which is the most common use case.",paraId:11,tocIndex:2},{value:"Upwards Shadow: mainly applied to bottom navigation or toolbars, etc.",paraId:11,tocIndex:2},{value:"Leftwards Shadow: mainly used in right-side navigation bars, drawer components, or fixed table headers.",paraId:11,tocIndex:2},{value:"Rightwards Shadow: mainly used in left-side navigation bars, drawer components, or fixed table headers.",paraId:11,tocIndex:2},{value:"Shadow simulates real-world feedback. To make shadows more realistic, Ant Design adopted a three-layer shadow expression method in version 4.0, making shadows softer and more realistic.",paraId:12,tocIndex:2},{value:"Layer One:",paraId:13,tocIndex:3},{value:"\n  ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"Shadow Type",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"Shadow Color (rgba)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"Direction (X, Y)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"Blur",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"Spread",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n  ",paraId:14,tocIndex:3},{value:"\n  ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"@shadow-1-up",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.16)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, -1px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"2px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-2px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, -3px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"6px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.09)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, -5px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"12px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"4px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"@shadow-1-down",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.16)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, 1px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"2px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-2px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, 3px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"6px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.09)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px, 5px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"12px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"4px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"@shadow-1-left",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.16)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-1px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"2px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-2px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-3px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"6px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.09)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-5px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"12px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"4px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"@shadow-1-right",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.16)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"1px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"2px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"-2px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"3px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"6px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"0px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"rgba(0, 0, 0, 0.09)",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"5px, 0px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"12px",paraId:14,tocIndex:3},{value:"\n      ",paraId:14,tocIndex:3},{value:"4px",paraId:14,tocIndex:3},{value:"\n    ",paraId:14,tocIndex:3},{value:"\n  ",paraId:14,tocIndex:3},{value:"Layer Two:",paraId:15,tocIndex:3},{value:"\n  ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"Shadow Type",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"Shadow Color (rgba)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"Direction (X, Y)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"Blur",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"Spread",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n  ",paraId:16,tocIndex:3},{value:"\n  ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"@shadow-2-up",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, -3px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-4px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, -6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"16px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, -9px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"28px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"8px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"@shadow-2-down",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, 3px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-4px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, 6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"16px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px, 9px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"28px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"8px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"@shadow-2-left",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-3px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-4px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-6px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"16px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-9px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"28px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"8px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"@shadow-2-right",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.12)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"3px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"6px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"-4px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"6px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"16px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"0px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"9px, 0px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"28px",paraId:16,tocIndex:3},{value:"\n      ",paraId:16,tocIndex:3},{value:"8px",paraId:16,tocIndex:3},{value:"\n    ",paraId:16,tocIndex:3},{value:"\n  ",paraId:16,tocIndex:3},{value:"Layer Three:",paraId:17,tocIndex:3},{value:"\n  ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"Shadow Type",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"Shadow Color (rgba)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"Direction (X, Y)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"Blur",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"Spread",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n  ",paraId:18,tocIndex:3},{value:"\n  ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"@shadow-3-up",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, -6px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-8px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, -9px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"28px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.03)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, -12px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"48px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"@shadow-3-down",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, 6px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-8px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, 9px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"28px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.03)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px, 12px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"48px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"@shadow-3-left",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-6px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-8px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-9px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"28px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.03)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-12px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"48px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"@shadow-3-right",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.08)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"6px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"-8px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.05)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"9px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"28px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"0px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"rgba(0, 0, 0, 0.03)",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"12px, 0px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"48px",paraId:18,tocIndex:3},{value:"\n      ",paraId:18,tocIndex:3},{value:"16px",paraId:18,tocIndex:3},{value:"\n    ",paraId:18,tocIndex:3},{value:"\n  ",paraId:18,tocIndex:3}];}}]);