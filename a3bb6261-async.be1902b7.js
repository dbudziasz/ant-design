(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a3bb6261"],{a3bb6261:function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return n;}}),d("ec35381e");let n=[{value:"Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers two navigation options: top and side. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website.",paraId:0,tocIndex:0},{value:"More layouts with navigation: ",paraId:1,tocIndex:0},{value:"Layout",paraId:2,tocIndex:0},{value:".",paraId:1,tocIndex:0},{value:"Menu is rendered as a ",paraId:3,tocIndex:1},{value:"ul",paraId:3,tocIndex:1},{value:" element, so it only supports ",paraId:3,tocIndex:1},{value:"li",paraId:3,tocIndex:1},{value:" and ",paraId:3,tocIndex:1},{value:"script-supporting",paraId:3,tocIndex:1},{value:" elements",paraId:3,tocIndex:1},{value:" as children nodes\u3002Your customized node should be wrapped by ",paraId:3,tocIndex:1},{value:"Menu.Item",paraId:3,tocIndex:1},{value:".",paraId:3,tocIndex:1},{value:"Menu needs to collect its node structure, so its children should be ",paraId:3,tocIndex:1},{value:"Menu.*",paraId:3,tocIndex:1},{value:" or encapsulated HOCs.",paraId:3,tocIndex:1},{value:"Common props ref\uFF1A",paraId:4,tocIndex:15},{value:"Common props",paraId:5,tocIndex:15},{value:"Param",paraId:6,tocIndex:16},{value:"Description",paraId:6,tocIndex:16},{value:"Type",paraId:6,tocIndex:16},{value:"Default value",paraId:6,tocIndex:16},{value:"Version",paraId:6,tocIndex:16},{value:"defaultOpenKeys",paraId:6,tocIndex:16},{value:"Array with the keys of default opened sub menus",paraId:6,tocIndex:16},{value:"string[]",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"defaultSelectedKeys",paraId:6,tocIndex:16},{value:"Array with the keys of default selected menu items",paraId:6,tocIndex:16},{value:"string[]",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"expandIcon",paraId:6,tocIndex:16},{value:"custom expand icon of submenu",paraId:6,tocIndex:16},{value:"ReactNode | ",paraId:6,tocIndex:16},{value:"(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"4.9.0",paraId:6,tocIndex:16},{value:"forceSubMenuRender",paraId:6,tocIndex:16},{value:"Render submenu into DOM before it becomes visible",paraId:6,tocIndex:16},{value:"boolean",paraId:6,tocIndex:16},{value:"false",paraId:6,tocIndex:16},{value:"inlineCollapsed",paraId:6,tocIndex:16},{value:"Specifies the collapsed status when menu is inline mode",paraId:6,tocIndex:16},{value:"boolean",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"inlineIndent",paraId:6,tocIndex:16},{value:"Indent (in pixels) of inline menu items on each level",paraId:6,tocIndex:16},{value:"number",paraId:6,tocIndex:16},{value:"24",paraId:6,tocIndex:16},{value:"items",paraId:6,tocIndex:16},{value:"Menu item content",paraId:6,tocIndex:16},{value:"ItemType[]",paraId:7,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"4.20.0",paraId:6,tocIndex:16},{value:"mode",paraId:6,tocIndex:16},{value:"Type of menu",paraId:6,tocIndex:16},{value:"vertical",paraId:6,tocIndex:16},{value:" | ",paraId:6,tocIndex:16},{value:"horizontal",paraId:6,tocIndex:16},{value:" | ",paraId:6,tocIndex:16},{value:"inline",paraId:6,tocIndex:16},{value:"vertical",paraId:6,tocIndex:16},{value:"multiple",paraId:6,tocIndex:16},{value:"Allows selection of multiple items",paraId:6,tocIndex:16},{value:"boolean",paraId:6,tocIndex:16},{value:"false",paraId:6,tocIndex:16},{value:"openKeys",paraId:6,tocIndex:16},{value:"Array with the keys of currently opened sub-menus",paraId:6,tocIndex:16},{value:"string[]",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"overflowedIndicator",paraId:6,tocIndex:16},{value:"Customized the ellipsis icon when menu is collapsed horizontally",paraId:6,tocIndex:16},{value:"ReactNode",paraId:6,tocIndex:16},{value:"<EllipsisOutlined />",paraId:6,tocIndex:16},{value:"selectable",paraId:6,tocIndex:16},{value:"Allows selecting menu items",paraId:6,tocIndex:16},{value:"boolean",paraId:6,tocIndex:16},{value:"true",paraId:6,tocIndex:16},{value:"selectedKeys",paraId:6,tocIndex:16},{value:"Array with the keys of currently selected menu items",paraId:6,tocIndex:16},{value:"string[]",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"style",paraId:6,tocIndex:16},{value:"Style of the root node",paraId:6,tocIndex:16},{value:"CSSProperties",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"subMenuCloseDelay",paraId:6,tocIndex:16},{value:"Delay time to hide submenu when mouse leaves (in seconds)",paraId:6,tocIndex:16},{value:"number",paraId:6,tocIndex:16},{value:"0.1",paraId:6,tocIndex:16},{value:"subMenuOpenDelay",paraId:6,tocIndex:16},{value:"Delay time to show submenu when mouse enters, (in seconds)",paraId:6,tocIndex:16},{value:"number",paraId:6,tocIndex:16},{value:"0",paraId:6,tocIndex:16},{value:"theme",paraId:6,tocIndex:16},{value:"Color theme of the menu",paraId:6,tocIndex:16},{value:"light",paraId:6,tocIndex:16},{value:" | ",paraId:6,tocIndex:16},{value:"dark",paraId:6,tocIndex:16},{value:"light",paraId:6,tocIndex:16},{value:"triggerSubMenuAction",paraId:6,tocIndex:16},{value:"Which action can trigger submenu open/close",paraId:6,tocIndex:16},{value:"hover",paraId:6,tocIndex:16},{value:" | ",paraId:6,tocIndex:16},{value:"click",paraId:6,tocIndex:16},{value:"hover",paraId:6,tocIndex:16},{value:"onClick",paraId:6,tocIndex:16},{value:"Called when a menu item is clicked",paraId:6,tocIndex:16},{value:"function({ item, key, keyPath, domEvent })",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"onDeselect",paraId:6,tocIndex:16},{value:"Called when a menu item is deselected (multiple mode only)",paraId:6,tocIndex:16},{value:"function({ item, key, keyPath, selectedKeys, domEvent })",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"onOpenChange",paraId:6,tocIndex:16},{value:"Called when sub-menus are opened or closed",paraId:6,tocIndex:16},{value:"function(openKeys: string[])",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"onSelect",paraId:6,tocIndex:16},{value:"Called when a menu item is selected",paraId:6,tocIndex:16},{value:"function({ item, key, keyPath, selectedKeys, domEvent })",paraId:6,tocIndex:16},{value:"-",paraId:6,tocIndex:16},{value:"More options in ",paraId:8,tocIndex:16},{value:"rc-menu",paraId:8,tocIndex:16},{value:"type ItemType = ",paraId:9,tocIndex:17},{value:"MenuItemType",paraId:10,tocIndex:17},{value:" | ",paraId:9,tocIndex:17},{value:"SubMenuType",paraId:11,tocIndex:17},{value:" | ",paraId:9,tocIndex:17},{value:"MenuItemGroupType",paraId:12,tocIndex:17},{value:" | ",paraId:9,tocIndex:17},{value:"MenuDividerType",paraId:13,tocIndex:17},{value:";",paraId:9,tocIndex:17},{value:"Param",paraId:14,tocIndex:18},{value:"Description",paraId:14,tocIndex:18},{value:"Type",paraId:14,tocIndex:18},{value:"Default value",paraId:14,tocIndex:18},{value:"Version",paraId:14,tocIndex:18},{value:"danger",paraId:14,tocIndex:18},{value:"Display the danger style",paraId:14,tocIndex:18},{value:"boolean",paraId:14,tocIndex:18},{value:"false",paraId:14,tocIndex:18},{value:"disabled",paraId:14,tocIndex:18},{value:"Whether menu item is disabled",paraId:14,tocIndex:18},{value:"boolean",paraId:14,tocIndex:18},{value:"false",paraId:14,tocIndex:18},{value:"extra",paraId:14,tocIndex:18},{value:"The extra of the menu item",paraId:14,tocIndex:18},{value:"ReactNode",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"5.21.0",paraId:14,tocIndex:18},{value:"icon",paraId:14,tocIndex:18},{value:"The icon of the menu item",paraId:14,tocIndex:18},{value:"ReactNode",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"key",paraId:14,tocIndex:18},{value:"Unique ID of the menu item",paraId:14,tocIndex:18},{value:"string",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"label",paraId:14,tocIndex:18},{value:"Menu label",paraId:14,tocIndex:18},{value:"ReactNode",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"title",paraId:14,tocIndex:18},{value:"Set display title for collapsed item",paraId:14,tocIndex:18},{value:"string",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"Property",paraId:15,tocIndex:19},{value:"Description",paraId:15,tocIndex:19},{value:"Type",paraId:15,tocIndex:19},{value:"Default value",paraId:15,tocIndex:19},{value:"Version",paraId:15,tocIndex:19},{value:"children",paraId:15,tocIndex:19},{value:"Sub-menus or sub-menu items",paraId:15,tocIndex:19},{value:"ItemType[]",paraId:16,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"disabled",paraId:15,tocIndex:19},{value:"Whether sub-menu is disabled",paraId:15,tocIndex:19},{value:"boolean",paraId:15,tocIndex:19},{value:"false",paraId:15,tocIndex:19},{value:"icon",paraId:15,tocIndex:19},{value:"Icon of sub menu",paraId:15,tocIndex:19},{value:"ReactNode",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"key",paraId:15,tocIndex:19},{value:"Unique ID of the sub-menu",paraId:15,tocIndex:19},{value:"string",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"label",paraId:15,tocIndex:19},{value:"Menu label",paraId:15,tocIndex:19},{value:"ReactNode",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"popupClassName",paraId:15,tocIndex:19},{value:"Sub-menu class name, not working when ",paraId:15,tocIndex:19},{value:'mode="inline"',paraId:15,tocIndex:19},{value:"string",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"popupOffset",paraId:15,tocIndex:19},{value:"Sub-menu offset, not working when ",paraId:15,tocIndex:19},{value:'mode="inline"',paraId:15,tocIndex:19},{value:"[number, number]",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"theme",paraId:15,tocIndex:19},{value:"Color theme of the SubMenu (inherits from Menu by default)",paraId:15,tocIndex:19},{value:"light",paraId:15,tocIndex:19},{value:" | ",paraId:15,tocIndex:19},{value:"dark",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"onTitleClick",paraId:15,tocIndex:19},{value:"Callback executed when the sub-menu title is clicked",paraId:15,tocIndex:19},{value:"function({ key, domEvent })",paraId:15,tocIndex:19},{value:"-",paraId:15,tocIndex:19},{value:"Define ",paraId:17,tocIndex:20},{value:"type",paraId:17,tocIndex:20},{value:" as ",paraId:17,tocIndex:20},{value:"group",paraId:17,tocIndex:20},{value:" to make as group:",paraId:17,tocIndex:20},{value:"const groupItem = {\n  type: 'group', // Must have\n  label: 'My Group',\n  children: [],\n};\n",paraId:18,tocIndex:20},{value:"Param",paraId:19,tocIndex:20},{value:"Description",paraId:19,tocIndex:20},{value:"Type",paraId:19,tocIndex:20},{value:"Default value",paraId:19,tocIndex:20},{value:"Version",paraId:19,tocIndex:20},{value:"children",paraId:19,tocIndex:20},{value:"Sub-menu items",paraId:19,tocIndex:20},{value:"MenuItemType[]",paraId:20,tocIndex:20},{value:"-",paraId:19,tocIndex:20},{value:"label",paraId:19,tocIndex:20},{value:"The title of the group",paraId:19,tocIndex:20},{value:"ReactNode",paraId:19,tocIndex:20},{value:"-",paraId:19,tocIndex:20},{value:"Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu. Need define the ",paraId:21,tocIndex:21},{value:"type",paraId:21,tocIndex:21},{value:" as ",paraId:21,tocIndex:21},{value:"divider",paraId:21,tocIndex:21},{value:"\uFF1A",paraId:21,tocIndex:21},{value:"const dividerItem = {\n  type: 'divider', // Must have\n};\n",paraId:22,tocIndex:21},{value:"Param",paraId:23,tocIndex:21},{value:"Description",paraId:23,tocIndex:21},{value:"Type",paraId:23,tocIndex:21},{value:"Default value",paraId:23,tocIndex:21},{value:"Version",paraId:23,tocIndex:21},{value:"dashed",paraId:23,tocIndex:21},{value:"Whether line is dashed",paraId:23,tocIndex:21},{value:"boolean",paraId:23,tocIndex:21},{value:"false",paraId:23,tocIndex:21},{value:"Menu collects structure info with ",paraId:24,tocIndex:23},{value:"twice-render",paraId:24,tocIndex:23},{value:" to support HOC usage. Merging into one render may cause the logic to become much more complex. Contributions to help improve the collection logic are welcomed.",paraId:24,tocIndex:23},{value:"Menu will render fully item in flex layout and then collapse it. You need tell flex not consider Menu width to enable responsive (",paraId:25,tocIndex:24},{value:"online demo",paraId:25,tocIndex:24},{value:"):",paraId:25,tocIndex:24},{value:'<div style={{ flex }}>\n  <div style={{ ... }}>Some Content</div>\n  <Menu style={{ minWidth: 0, flex: "auto" }} />\n</div>\n',paraId:26,tocIndex:24}];}}]);