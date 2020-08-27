import{r as e,c as i,w as t,h as s,H as n,g as o}from"./p-7d485867.js";import{P as r}from"./p-d8000c6e.js";import{e as a,g as h}from"./p-eef3d203.js";import{w as m}from"./p-e9fb6631.js";import"./p-29d1ed0b.js";import{b as u}from"./p-bd8dee20.js";const c=class{constructor(t){e(this,t),this.vOpen=i(this,"vOpen",7),this.vClose=i(this,"vClose",7),this.vMenuItemsChange=i(this,"vMenuItemsChange",7),this.vFocusMenuItemChange=i(this,"vFocusMenuItemChange",7),this.shouldFocusOnOpen=!1,this.currFocusedMenuItem=0,this.active=!1}onMenuItemsChange(){this.vMenuItemsChange.emit(this.menuItems)}async onFocusedMenuItemChange(){const e=await this.getFocusedMenuItem();this.vFocusMenuItemChange.emit(e)}onActiveChange(){this.active&&(this.findMenuItems(),this.findSubmenus()),this.active?this.vOpen.emit():this.vClose.emit()}componentWillLoad(){this.findMenuItems()}componentDidRender(){this.active&&this.shouldFocusOnOpen&&t(()=>{this.el.focus(),this.shouldFocusOnOpen=!1})}async getController(){return document.querySelector("#"+this.controller)}async getFocusedMenuItem(){return this.menuItems[this.currFocusedMenuItem]}async focusOnOpen(){this.shouldFocusOnOpen=!0}findMenuItems(){this.menuItems=document.querySelectorAll(u("#"+this.identifier,"vime-menu","vime-menu-item",5))}async focusController(){const e=await this.getController();null==e||e.focus()}focusMenuItem(e){var i;let t=e>=0?e:this.menuItems.length-1;t>=this.menuItems.length&&(t=0),this.currFocusedMenuItem=t,null===(i=this.menuItems[t])||void 0===i||i.focus()}openSubmenu(){const e=this.menuItems[this.currFocusedMenuItem];a(e)||(e.click(),t(()=>{const i=document.querySelector("#"+e.menu);null==i||i.focus()}))}onOpen(e){e.stopPropagation(),this.findMenuItems(),this.currFocusedMenuItem=0,setTimeout(()=>{var e;null===(e=this.menuItems[this.currFocusedMenuItem])||void 0===e||e.focus()},10),this.active=!0}onClose(){this.currFocusedMenuItem=-1,this.active=!1,this.focusController()}onClick(e){e.stopPropagation()}onKeyDown(e){if(this.active&&0!==this.menuItems.length)switch(e.preventDefault(),e.stopPropagation(),e.key){case"Escape":this.onClose();break;case"ArrowDown":case"Tab":this.focusMenuItem(this.currFocusedMenuItem+1);break;case"ArrowUp":this.focusMenuItem(this.currFocusedMenuItem-1);break;case"ArrowLeft":this.onClose();break;case"ArrowRight":case"Enter":case" ":this.openSubmenu();break;case"Home":case"PageUp":this.focusMenuItem(0);break;case"End":case"PageDown":this.focusMenuItem(this.menuItems.length-1)}}findSubmenus(){this.submenus=document.querySelectorAll(u("#"+this.identifier,"vime-menu","vime-menu",4))}isValidSubmenu(e){return!h(e)&&!a(Array.from(this.submenus).find(i=>i.id===e.id))}toggleSubmenu(e,i){this.isValidSubmenu(e)&&(Array.from(this.menuItems).filter(i=>i.identifier!==e.controller).forEach(e=>{e.hidden=i}),e.active=i)}onSubmenuOpen(e){this.toggleSubmenu(e.target,!0)}onSubmenuClose(e){this.toggleSubmenu(e.target,!1)}onWindowClick(){this.active&&(this.active=!1)}onWindowKeyDown(e){this.active&&"Escape"===e.key&&this.onClose()}render(){return s(n,{id:this.identifier,role:"menu",tabindex:"-1","aria-labelledby":this.controller,"aria-hidden":this.active?"false":"true",onFocus:this.onOpen.bind(this),onClick:this.onClick.bind(this),onKeyDown:this.onKeyDown.bind(this)},s("div",null,s("slot",null)))}get el(){return o(this)}static get watchers(){return{menuItems:["onMenuItemsChange"],currFocusedMenuItem:["onFocusedMenuItemChange"],active:["onActiveChange"]}}};c.style="vime-menu{display:flex;flex-direction:column;position:relative;overflow:hidden;width:100%;height:auto;pointer-events:auto;color:var(--menu-color);background:var(--menu-bg);font-size:var(--menu-font-size);font-weight:var(--menu-font-weight);text-align:left;z-index:70}vime-menu[aria-hidden=true]{display:none}vime-menu:focus{outline:0}";const l=class{constructor(i){e(this,i),this.showTapHighlight=!1,this.hidden=!1,this.checkedIcon="#vime-checkmark",this.isTouch=!1}onClick(){if(a(this.menu))return;const e=document.querySelector("#"+this.menu);h(e)||(e.active=!this.expanded)}onTouchStart(){this.showTapHighlight=!0,setTimeout(()=>{this.showTapHighlight=!1},100)}onMouseLeave(){this.el.blur()}render(){var e;const i=!a(this.checked),t=!a(this.menu),o=this.expanded?"true":"false",r=this.checked?"true":"false",h=i&&!a(this.checkedIcon),m=t&&this.expanded,u=t&&!this.expanded,c=!(a(this.hint)||i||t&&this.expanded),l=!a(this.badge)&&!c&&!u,d=c||l||u;return s(n,{class:{notTouch:!this.isTouch,tapHighlight:this.showTapHighlight,showDivider:t&&null!==(e=this.expanded)&&void 0!==e&&e},id:this.identifier,role:i?"menuitemradio":"menuitem",tabindex:"0","aria-label":this.label,"aria-hidden":this.hidden?"true":"false","aria-haspopup":t?"true":void 0,"aria-controls":this.menu,"aria-expanded":t?o:void 0,"aria-checked":i?r:void 0,onClick:this.onClick.bind(this),onTouchStart:this.onTouchStart.bind(this),onMouseLeave:this.onMouseLeave.bind(this)},h&&s("vime-icon",{href:this.checkedIcon}),m&&s("span",{class:"arrow left"}),this.label,d&&s("span",{class:"spacer"}),c&&s("span",{class:"hint"},this.hint),l&&s("span",{class:"badge"},this.badge),u&&s("span",{class:"arrow right"}))}get el(){return o(this)}};m(l,[r.IsTouch]),l.style="vime-menu-item{display:flex;align-items:center;flex-direction:row;width:100%;cursor:pointer;color:var(--menu-color);background:var(--menu-bg);font-size:var(--menu-font-size);font-weight:var(--menu-font-weight);padding:var(--menu-item-padding)}vime-menu-item:focus{outline:0}vime-menu-item.hidden{display:none}vime-menu-item.tapHighlight{background:var(--menu-item-tap-highlight)}vime-menu-item.showDivider{border-bottom:0.5px solid var(--menu-item-divider-color)}vime-menu-item.notTouch:hover,vime-menu-item.notTouch:focus{outline:0;color:var(--menu-item-focus-color);background-color:var(--menu-item-focus-bg)}vime-menu-item[aria-hidden=true]{display:none}vime-menu-item vime-icon{display:inline-block}vime-menu-item svg{fill:currentColor;pointer-events:none;width:var(--menu-item-check-icon-width, 10px) !important;height:var(--menu-item-check-icon-height, 10px) !important;margin-right:10px;opacity:0;visibility:hidden;transition:var(--player-fade-transition, opacity 0.4s ease-in-out)}vime-menu-item[aria-checked=true] svg{opacity:1;visibility:visible}vime-menu-item .hint{display:inline-block;margin-left:auto;overflow:hidden;pointer-events:none;margin-right:6px;font-size:var(--menu-item-hint-font-size);opacity:var(--menu-item-hint-opacity);color:var(--menu-item-hint-color)}vime-menu-item .badge{display:inline-block;line-height:1;overflow:hidden;pointer-events:none;color:var(--menu-item-badge-color);background:var(--menu-item-badge-bg);font-size:var(--menu-item-badge-font-size)}vime-menu-item .spacer{flex:1}vime-menu-item .arrow{color:var(--menu-item-arrow-color);border:2px solid;padding:2px;display:inline-block;border-width:0 2px 2px 0}vime-menu-item .arrow.left{margin-right:6px;transform:rotate(135deg)}vime-menu-item .arrow.right{transform:rotate(-45deg);opacity:0.38}";export{c as vime_menu,l as vime_menu_item}