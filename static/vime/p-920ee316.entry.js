import{r as s,c as t,h as i,g as e}from"./p-7d485867.js";import{a as h}from"./p-eef3d203.js";import"./p-bd8dee20.js";import"./p-0d34702b.js";import{e as r,p as a}from"./p-64e9395d.js";let n=0;const o=new Set,d=class{constructor(i){s(this,i),this.vEmbedSrcChange=t(this,"vEmbedSrcChange",3),this.vEmbedMessage=t(this,"vEmbedMessage",3),this.vEmbedLoaded=t(this,"vEmbedLoaded",3),this.srcWithParams="",this.hasEnteredViewport=!1,this.embedSrc="",this.mediaTitle="",this.params="",this.preconnections=[]}srcChange(){this.srcWithParams=r(this.embedSrc,this.params)}srcWithParamsChange(){this.hasEnteredViewport||o.has(this.embedSrc)||a(this.srcWithParams)&&o.add(this.embedSrc),this.vEmbedSrcChange.emit(this.srcWithParams)}preconnectionsChange(){this.hasEnteredViewport||this.preconnections.filter(s=>!o.has(s)).forEach(s=>{a(s)&&o.add(s)})}componentWillLoad(){this.srcChange(),this.genIframeId()}onWindowMessage(s){var t,i,e;if(s.source!==(null===(t=this.iframe)||void 0===t?void 0:t.contentWindow)||h(this.origin)&&this.origin!==s.origin)return;const r=null!==(e=null===(i=this.decoder)||void 0===i?void 0:i.call(this,s.data))&&void 0!==e?e:s.data;r&&this.vEmbedMessage.emit(r)}async postMessage(s,t){var i,e;null===(e=null===(i=this.iframe)||void 0===i?void 0:i.contentWindow)||void 0===e||e.postMessage(JSON.stringify(s),null!=t?t:"*")}onLoad(){this.vEmbedLoaded.emit()}genIframeId(){n+=1,this.id="vime-iframe-"+n}render(){return i("iframe",{class:"lazy",id:this.id,title:this.mediaTitle,"data-src":this.srcWithParams,allowfullscreen:"1",allow:"autoplay; encrypted-media; picture-in-picture",onLoad:this.onLoad.bind(this),ref:s=>{this.iframe=s}})}get el(){return e(this)}static get watchers(){return{embedSrc:["srcChange"],params:["srcChange"],srcWithParams:["srcWithParamsChange"],preconnections:["preconnectionsChange"]}}};d.style="vime-embed>iframe{position:absolute;top:0;left:0;border:0;width:100%;height:100%;user-select:none;z-index:0}";export{d as vime_embed}