import{r as t,c as s,h as i}from"./p-7d485867.js";import{P as a}from"./p-d8000c6e.js";import{a as h}from"./p-eef3d203.js";import{c as e}from"./p-59c69388.js";import{w as r}from"./p-e9fb6631.js";import"./p-29d1ed0b.js";import{d as o}from"./p-b0ea4d0d.js";import"./p-bd8dee20.js";import"./p-0d34702b.js";import{l as d}from"./p-64e9395d.js";import{M as c}from"./p-8b74fa0e.js";const n=class{constructor(i){t(this,i),this.vLoadStart=s(this,"vLoadStart",7),this.hasAttached=!1,this.version="latest",this.config={},this.preload="metadata"}onSrcChange(){this.hasAttached&&(this.vLoadStart.emit(),this.dash.attachSource(this.src))}componentWillLoad(){this.dispatch=e(this)}async componentDidLoad(){try{const t=`https://cdn.jsdelivr.net/npm/dashjs@${this.version}/dist/dash.all.min.js`,s=await d(t,"dashjs"),i=this.videoProvider.querySelector("video");this.dash=s.MediaPlayer(this.config).create(),this.dash.initialize(i,null,this.autoplay),this.dash.on(s.MediaPlayer.events.CAN_PLAY,()=>{this.dispatch(a.MediaType,c.Video),this.dispatch(a.CurrentSrc,this.src),this.dispatch(a.PlaybackReady,!0)}),this.dash.on(s.MediaPlayer.events.ERROR,t=>{this.dispatch(a.Errors,[t])}),this.hasAttached=!0}catch(t){this.dispatch(a.Errors,[t])}}disconnectedCallback(){var t;null===(t=this.dash)||void 0===t||t.reset(),this.dash=void 0,this.hasAttached=!1}async getAdapter(){const t=await this.videoProvider.getAdapter(),s=t.canPlay;return Object.assign(Object.assign({},t),{getInternalPlayer:async()=>this.dash,canPlay:async t=>h(t)&&o.test(t)||s(t)})}render(){return i("vime-video",{willAttach:!0,crossOrigin:this.crossOrigin,preload:this.preload,poster:this.poster,controlsList:this.controlsList,autoPiP:this.autoPiP,disablePiP:this.disablePiP,disableRemotePlayback:this.disableRemotePlayback,mediaTitle:this.mediaTitle,ref:t=>{this.videoProvider=t}})}static get watchers(){return{src:["onSrcChange"],hasAttached:["onSrcChange"]}}};r(n,[a.Autoplay]);export{n as vime_dash}