(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54008,(e,t,i)=>{"use strict";function r(e,t,i){i=i||2;var r,d,c,_,y,x,v,b=t&&t.length,w=b?t[0]*i:e.length,M=a(e,0,w,i,!0),A=[];if(!M||M.next===M.prev)return A;if(b&&(M=function(e,t,i,r){var n,u,f,d,c,_=[];for(n=0,u=t.length;n<u;n++)f=t[n]*r,d=n<u-1?t[n+1]*r:e.length,(c=a(e,f,d,r,!1))===c.next&&(c.steiner=!0),_.push(function(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(c));for(_.sort(o),n=0;n<_.length;n++)i=function(e,t){var i=function(e,t){var i,r,a,s=t,o=e.x,n=e.y,u=-1/0;do{if(n<=s.y&&n>=s.next.y&&s.next.y!==s.y){var f=s.x+(n-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(f<=o&&f>u&&(u=f,a=s.x<s.next.x?s:s.next,f===o))return a}s=s.next}while(s!==t)if(!a)return null;var d,c=a,m=a.x,_=a.y,g=1/0;s=a;do{o>=s.x&&s.x>=m&&o!==s.x&&l(n<_?o:u,n,m,_,n<_?u:o,n,s.x,s.y)&&(d=Math.abs(n-s.y)/(o-s.x),p(s,e)&&(d<g||d===g&&(s.x>a.x||s.x===a.x&&(i=a,r=s,0>h(i.prev,i,r.prev)&&0>h(r.next,i,i.next))))&&(a=s,g=d)),s=s.next}while(s!==c)return a}(e,t);if(!i)return t;var r=m(i,e);return s(r,r.next),s(i,i.next)}(_[n],i);return i}(e,t,M,i)),e.length>80*i){r=c=e[0],d=_=e[1];for(var C=i;C<w;C+=i)y=e[C],x=e[C+1],y<r&&(r=y),x<d&&(d=x),y>c&&(c=y),x>_&&(_=x);v=0!==(v=Math.max(c-r,_-d))?32767/v:0}return function e(t,i,r,a,o,d,c){if(t){!c&&d&&function(e,t,i,r){var a=e;do 0===a.z&&(a.z=n(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e)a.prevZ.nextZ=null,a.prevZ=null,function(e){var t,i,r,a,s,o,n,l,h=1;do{for(i=e,e=null,s=null,o=0;i;){for(o++,r=i,n=0,t=0;t<h&&(n++,r=r.nextZ);t++);for(l=h;n>0||l>0&&r;)0!==n&&(0===l||!r||i.z<=r.z)?(a=i,i=i.nextZ,n--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(o>1)}(a)}(t,a,o,d);for(var _,y,x=t;t.prev!==t.next;){if(_=t.prev,y=t.next,d?function(e,t,i,r){var a=e.prev,s=e.next;if(h(a,e,s)>=0)return!1;for(var o=a.x,u=e.x,f=s.x,d=a.y,c=e.y,p=s.y,m=o<u?o<f?o:f:u<f?u:f,_=d<c?d<p?d:p:c<p?c:p,g=o>u?o>f?o:f:u>f?u:f,y=d>c?d>p?d:p:c>p?c:p,x=n(m,_,t,i,r),v=n(g,y,t,i,r),b=e.prevZ,w=e.nextZ;b&&b.z>=x&&w&&w.z<=v;){if(b.x>=m&&b.x<=g&&b.y>=_&&b.y<=y&&b!==a&&b!==s&&l(o,d,u,c,f,p,b.x,b.y)&&h(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=m&&w.x<=g&&w.y>=_&&w.y<=y&&w!==a&&w!==s&&l(o,d,u,c,f,p,w.x,w.y)&&h(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=x;){if(b.x>=m&&b.x<=g&&b.y>=_&&b.y<=y&&b!==a&&b!==s&&l(o,d,u,c,f,p,b.x,b.y)&&h(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=v;){if(w.x>=m&&w.x<=g&&w.y>=_&&w.y<=y&&w!==a&&w!==s&&l(o,d,u,c,f,p,w.x,w.y)&&h(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}(t,a,o,d):function(e){var t=e.prev,i=e.next;if(h(t,e,i)>=0)return!1;for(var r=t.x,a=e.x,s=i.x,o=t.y,n=e.y,u=i.y,f=r<a?r<s?r:s:a<s?a:s,d=o<n?o<u?o:u:n<u?n:u,c=r>a?r>s?r:s:a>s?a:s,p=o>n?o>u?o:u:n>u?n:u,m=i.next;m!==t;){if(m.x>=f&&m.x<=c&&m.y>=d&&m.y<=p&&l(r,o,a,n,s,u,m.x,m.y)&&h(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}(t)){i.push(_.i/r|0),i.push(t.i/r|0),i.push(y.i/r|0),g(t),t=y.next,x=y.next;continue}if((t=y)===x){c?1===c?e(t=function(e,t,i){var r=e;do{var a=r.prev,o=r.next.next;!u(a,o)&&f(a,r,r.next,o)&&p(a,o)&&p(o,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(o.i/i|0),g(r),g(r.next),r=e=o),r=r.next}while(r!==e)return s(r)}(s(t),i,r),i,r,a,o,d,2):2===c&&function(t,i,r,a,o,n){var l=t;do{for(var d,c,_=l.next.next;_!==l.prev;){if(l.i!==_.i&&(d=l,c=_,d.next.i!==c.i&&d.prev.i!==c.i&&!function(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&f(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(d,c)&&(p(d,c)&&p(c,d)&&function(e,t){var i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e)return r}(d,c)&&(h(d.prev,d,c.prev)||h(d,c.prev,c))||u(d,c)&&h(d.prev,d,d.next)>0&&h(c.prev,c,c.next)>0))){var g=m(l,_);l=s(l,l.next),g=s(g,g.next),e(l,i,r,a,o,n,0),e(g,i,r,a,o,n,0);return}_=_.next}l=l.next}while(l!==t)}(t,i,r,a,o,d):e(s(t),i,r,a,o,d,1);break}}}}(M,A,i,r,d,v,0),A}function a(e,t,i,r,a){var s,o;if(a===x(e,t,i,r)>0)for(s=t;s<i;s+=r)o=_(s,e[s],e[s+1],o);else for(s=i-r;s>=t;s-=r)o=_(s,e[s],e[s+1],o);return o&&u(o,o.next)&&(g(o),o=o.next),o}function s(e,t){if(!e)return e;t||(t=e);var i,r=e;do if(i=!1,!r.steiner&&(u(r,r.next)||0===h(r.prev,r,r.next))){if(g(r),(r=t=r.prev)===r.next)break;i=!0}else r=r.next;while(i||r!==t)return t}function o(e,t){return e.x-t.x}function n(e,t,i,r,a){return(e=((e=((e=((e=((e=(e-i)*a|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-r)*a|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function l(e,t,i,r,a,s,o,n){return(a-o)*(t-n)>=(e-o)*(s-n)&&(e-o)*(r-n)>=(i-o)*(t-n)&&(i-o)*(s-n)>=(a-o)*(r-n)}function h(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function u(e,t){return e.x===t.x&&e.y===t.y}function f(e,t,i,r){var a=c(h(e,t,i)),s=c(h(e,t,r)),o=c(h(i,r,e)),n=c(h(i,r,t));return!!(a!==s&&o!==n||0===a&&d(e,i,t)||0===s&&d(e,r,t)||0===o&&d(i,e,r)||0===n&&d(i,t,r))}function d(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function c(e){return e>0?1:e<0?-1:0}function p(e,t){return 0>h(e.prev,e,e.next)?h(e,t,e.next)>=0&&h(e,e.prev,t)>=0:0>h(e,t,e.prev)||0>h(e,e.next,t)}function m(e,t){var i=new y(e.i,e.x,e.y),r=new y(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function _(e,t,i,r){var a=new y(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function g(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function y(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x(e,t,i,r){for(var a=0,s=t,o=i-r;s<i;s+=r)a+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return a}t.exports=r,t.exports.default=r,r.deviation=function(e,t,i,r){var a=t&&t.length,s=a?t[0]*i:e.length,o=Math.abs(x(e,0,s,i));if(a)for(var n=0,l=t.length;n<l;n++){var h=t[n]*i,u=n<l-1?t[n+1]*i:e.length;o-=Math.abs(x(e,h,u,i))}var f=0;for(n=0;n<r.length;n+=3){var d=r[n]*i,c=r[n+1]*i,p=r[n+2]*i;f+=Math.abs((e[d]-e[p])*(e[c+1]-e[d+1])-(e[d]-e[c])*(e[p+1]-e[d+1]))}return 0===o&&0===f?0:Math.abs((f-o)/o)},r.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},r=0,a=0;a<e.length;a++){for(var s=0;s<e[a].length;s++)for(var o=0;o<t;o++)i.vertices.push(e[a][s][o]);a>0&&(r+=e[a-1].length,i.holes.push(r))}return i}},154136,839936,50271,214364,495553,201718,64537,960956,119443,774439,694409,594230,269669,709826,513462,906322,324994,909697,293736,373326,459870,97580,346433,380317,594050,e=>{"use strict";let t,i,r,a,s;var o=e.i(347760);let n={extension:{type:o.ExtensionType.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await e.A(886043)}},l={extension:{type:o.ExtensionType.Environment,name:"webworker",priority:0},test:()=>"u">typeof self&&void 0!==self.WorkerGlobalScope,load:async()=>{await e.A(762925)}};e.i(110463),e.i(199650),e.i(358035),e.i(595932),o.extensions.add(n,l),e.s([],839936);var h=e.i(527402),u=e.i(802351);async function f(e={}){return void 0!==i?i:i=await (async()=>{let t=h.DOMAdapter.get().getNavigator().gpu;if(!t)return!1;try{let i=await t.requestAdapter(e);return await i.requestDevice(),!0}catch(e){return!1}})()}let d=["webgl","webgpu","canvas"];async function c(i){let r,a=[];i.preference?(a.push(i.preference),d.forEach(e=>{e!==i.preference&&a.push(e)})):a=d.slice();let s={};for(let o=0;o<a.length;o++){let n=a[o];if("webgpu"===n&&await f()){let{WebGPURenderer:t}=await e.A(553088);r=t,s={...i,...i.webgpu};break}if("webgl"===n&&function(e){return void 0!==t?t:t=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??u.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat};try{if(!h.DOMAdapter.get().getWebGLRenderingContext())return!1;let e=h.DOMAdapter.get().createCanvas().getContext("webgl",t),i=!!e?.getContextAttributes()?.stencil;if(e){let t=e.getExtension("WEBGL_lose_context");t&&t.loseContext()}return e=null,i}catch(e){return!1}})()}(i.failIfMajorPerformanceCaveat??u.AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:t}=await e.A(899331);r=t,s={...i,...i.webgl};break}if("canvas"===n){let{CanvasRenderer:t}=await e.A(335640);r=t,s={...i,...i.canvasOptions};break}}if(delete s.webgpu,delete s.webgl,delete s.canvasOptions,!r)throw Error("No available renderer for the current environment");let o=new r;return await o.init(s),o}var p=e.i(950147),m=e.i(181834),_=e.i(649864);class g{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{let e,t;if(this._resizeTo){if(this._cancelResize(),this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:i,clientHeight:r}=this._resizeTo;e=i,t=r}this.renderer.resize(e,t),this.render()}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}g.extension=o.ExtensionType.Application;var y=e.i(59750),x=e.i(606972);class v{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,y.UPDATE_PRIORITY.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?x.Ticker.shared:new x.Ticker,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}}v.extension=o.ExtensionType.Application,o.extensions.add(g),o.extensions.add(v);let b=class e{constructor(...e){this.stage=new p.Container,void 0!==e[0]&&(0,_.deprecation)(_.v8_0_0,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.stage||(this.stage=new p.Container),this.renderer=await c(t),e._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return(0,_.deprecation)(_.v8_0_0,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,i=!1){let r=e._plugins.slice(0);r.reverse(),r.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(t),this.renderer=null}};b._plugins=[],o.extensions.handleByList(o.ExtensionType.Application,b._plugins),o.extensions.add(m.ApplicationInitHook);var w=e.i(555056),M=e.i(959691),A=e.i(633219),C=e.i(281481),S=e.i(940766);class P extends S.BatchableSprite{}class T{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),this._managedTexts=new A.GCManagedHash({renderer:e,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(let e in this._managedTexts.items){let t=this._managedTexts.items[e];t?._autoResolution&&t.onViewUpdate()}}validateRenderable(e){let t=this._getGpuText(e),i=e.styleKey;return t.currentKey!==i||e._didTextUpdate}addRenderable(e,t){let i=this._getGpuText(e);if(e._didTextUpdate){let t=e._autoResolution?this._renderer.resolution:e.resolution;(i.currentKey!==e.styleKey||e._resolution!==t)&&this._updateGpuText(e),e._didTextUpdate=!1,function(e,t){let{texture:i,bounds:r}=e,a=t._style._getFinalPadding();(0,C.updateQuadBounds)(r,t._anchor,i);let s=t._anchor._x*a*2,o=t._anchor._y*a*2;r.minX-=a-s,r.minY-=a-o,r.maxX-=a-s,r.maxY-=a-o}(i,e)}this._renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){let t=this._getGpuText(e);t._batcher.updateElement(t)}_updateGpuText(e){let t=this._getGpuText(e);t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,t.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let t=new P;return t.currentKey="--",t.renderable=e,t.transform=e.groupTransform,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,this._managedTexts.add(e),t}onTextUnload(e){let t=e._gpuData[this._renderer.uid];if(!t)return;let{canvasText:i}=this._renderer;i.getReferenceCount(t.currentKey)>0?i.decreaseReferenceCount(t.currentKey):t.texture&&i.returnTexture(t.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}}T.extension={type:[o.ExtensionType.WebGLPipes,o.ExtensionType.WebGPUPipes,o.ExtensionType.CanvasPipes],name:"text"};var k=e.i(494425),I=e.i(299166),z=e.i(480493),L=e.i(802464),E=e.i(595627),F=e.i(804864),B=e.i(956857),R=e.i(997377);class D extends R.ViewContainer{constructor(e,t){const{text:i,resolution:r,style:a,anchor:s,width:o,height:n,roundPixels:l,...h}=e;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=i??"",this.style=a,this.resolution=r??null,this.allowChildren=!1,this._anchor=new B.ObservablePoint({_onUpdate:()=>{this.onViewUpdate()}}),s&&(this.anchor=s),this.roundPixels=l??!1,void 0!==o&&(this.width=o),void 0!==n&&(this.height=n)}get anchor(){return this._anchor}set anchor(e){"number"==typeof e?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=null===e,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||(e={}),this._style?.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){"object"==typeof e?(t=e.height??e.width,e=e.width):t??(t=e),void 0!==e&&this._setWidth(e,this.bounds.width),void 0!==t&&this._setHeight(t,this.bounds.height)}containsPoint(e){let t=this.bounds.width,i=this.bounds.height,r=-t*this.anchor.x,a=0;return!!(e.x>=r)&&!!(e.x<=r+t)&&(a=-i*this.anchor.y,!!(e.y>=a)&&!!(e.y<=a+i))||!1}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,("boolean"==typeof e?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}}var O=e.i(657471),U=e.i(663646),Z=e.i(981735),V=e.i(661411);let G=null,W=null;function X(e,t,i){for(let r=0,a=4*i*t;r<t;++r,a+=4)if(0!==e[a+3])return!1;return!0}function Y(e,t,i,r,a){let s=4*t;for(let t=r,o=r*s+4*i;t<=a;++t,o+=s)if(0!==e[o+3])return!1;return!0}var N=e.i(69590),$=e.i(159841),j=e.i(600070);let q=new U.Rectangle;function H(e){let t=0;for(let i=0;i<e.length;i++)32===e.charCodeAt(i)&&t++;return t}let K=new class{getCanvasAndContext(e){let{text:t,style:i,resolution:r=1}=e,a=i._getFinalPadding(),s=N.CanvasTextMetrics.measureText(t||" ",i),o=Math.ceil(Math.ceil(Math.max(1,s.width)+2*a)*r),n=Math.ceil(Math.ceil(Math.max(1,s.height)+2*a)*r),l=Z.CanvasPool.getOptimalCanvasAndContext(o,n);this._renderTextToCanvas(i,a,r,l,s);let u=i.trim?function(...e){let t=e[0];t.canvas||(t={canvas:e[0],resolution:e[1]});let{canvas:i}=t,r=Math.min(t.resolution??1,1),a=t.width??i.width,s=t.height??i.height,o=t.output;if(G||((W=(G=h.DOMAdapter.get().createCanvas(256,128)).getContext("2d",{willReadFrequently:!0})).globalCompositeOperation="copy",W.globalAlpha=1),(G.width<a||G.height<s)&&(G.width=(0,V.nextPow2)(a),G.height=(0,V.nextPow2)(s)),!W)throw TypeError("Failed to get canvas 2D context");W.drawImage(i,0,0,a,s,0,0,a*r,s*r);let n=W.getImageData(0,0,a,s).data,l=0,u=0,f=a-1,d=s-1;for(;u<s&&X(n,a,u);)++u;if(u===s)return U.Rectangle.EMPTY;for(;X(n,a,d);)--d;for(;Y(n,a,l,u,d);)++l;for(;Y(n,a,f,u,d);)--f;return++f,++d,W.globalCompositeOperation="source-over",W.strokeRect(l,u,f-l,d-u),W.globalCompositeOperation="copy",o??(o=new U.Rectangle),o.set(l/r,u/r,(f-l)/r,(d-u)/r),o}({canvas:l.canvas,width:o,height:n,resolution:1,output:q}):q.set(0,0,o,n);return{canvasAndContext:l,frame:u}}returnCanvasAndContext(e){Z.CanvasPool.returnCanvasAndContext(e)}_renderTextToCanvas(e,t,i,r,a){let s,o;if(a.runsByLine&&a.runsByLine.length>0)return void this._renderTaggedTextToCanvas(a,e,t,i,r);let{canvas:n,context:l}=r,h=(0,$.fontStringFromTextStyle)(e),u=a.lines,f=a.lineHeight,d=a.lineWidths,c=a.maxLineWidth,p=a.fontProperties,m=n.height;if(l.resetTransform(),l.scale(i,i),l.textBaseline=e.textBaseline,e._stroke?.width){let t=e._stroke;l.lineWidth=t.width,l.miterLimit=t.miterLimit,l.lineJoin=t.join,l.lineCap=t.cap}l.font=h;let _=e.dropShadow?2:1,g=e.wordWrap?Math.max(e.wordWrapWidth,c):c,y=(e._stroke?.width??0)/2,x=(f-p.fontSize)/2;f-p.fontSize<0&&(x=0);for(let n=0;n<_;++n){let h=e.dropShadow&&0===n,c=h?Math.ceil(Math.max(1,m)+2*t):0,_=c*i;if(h)this._setupDropShadow(l,e,i,_);else{let i=e._gradientBounds,r=e._gradientOffset;if(i){let s={width:i.width,height:i.height,lineHeight:i.height,lines:a.lines};this._setFillAndStrokeStyles(l,e,s,t,y,r?.x??0,r?.y??0)}else r?this._setFillAndStrokeStyles(l,e,a,t,y,r.x,r.y):this._setFillAndStrokeStyles(l,e,a,t,y);l.shadowColor="rgba(0,0,0,0)"}for(let i=0;i<u.length;i++){s=y,o=y+i*f+p.ascent+x,s+=this._getAlignmentOffset(d[i],g,e.align);let a=0;if("justify"===e.align&&e.wordWrap&&i<u.length-1){let e=H(u[i]);e>0&&(a=(g-d[i])/e)}e._stroke?.width&&this._drawLetterSpacing(u[i],e,r,s+t,o+t-c,!0,a),void 0!==e._fill&&this._drawLetterSpacing(u[i],e,r,s+t,o+t-c,!1,a)}}}_renderTaggedTextToCanvas(e,t,i,r,a){let{canvas:s,context:o}=a,{runsByLine:n,lineWidths:l,maxLineWidth:h,lineAscents:u,lineHeights:f,hasDropShadow:d}=e,c=s.height;o.resetTransform(),o.scale(r,r),o.textBaseline=t.textBaseline;let p=d?2:1,m=t.wordWrap?Math.max(t.wordWrapWidth,h):h,_=t._stroke?.width??0;for(let e of n)for(let t of e){let e=t.style._stroke?.width??0;e>_&&(_=e)}let g=_/2,y=[];for(let e=0;e<n.length;e++){let t=n[e],i=[];for(let e of t){let t=(0,$.fontStringFromTextStyle)(e.style);o.font=t,i.push({width:N.CanvasTextMetrics._measureText(e.text,e.style.letterSpacing,o),font:t})}y.push(i)}for(let e=0;e<p;++e){let s=d&&0===e,h=s?Math.ceil(Math.max(1,c)+2*i):0,p=h*r;s||(o.shadowColor="rgba(0,0,0,0)");let _=g;for(let e=0;e<n.length;e++){let d=n[e],c=l[e],x=u[e],v=f[e],b=y[e],w=g;w+=this._getAlignmentOffset(c,m,t.align);let M=0;if("justify"===t.align&&t.wordWrap&&e<n.length-1){let e=0;for(let t of d)e+=H(t.text);e>0&&(M=(m-c)/e)}let A=_+x,C=w+i;for(let e=0;e<d.length;e++){let t=d[e],{width:n,font:l}=b[e];if(o.font=l,o.textBaseline=t.style.textBaseline,t.style._stroke?.width){let e=t.style._stroke;if(o.lineWidth=e.width,o.miterLimit=e.miterLimit,o.lineJoin=e.join,o.lineCap=e.cap,s)if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,p);else{C+=n+H(t.text)*M;continue}else{let r=N.CanvasTextMetrics.measureFont(l),a=t.style.lineHeight||r.fontSize,s={width:n,height:a,lineHeight:a,lines:[t.text]};o.strokeStyle=(0,j.getCanvasFillStyle)(e,o,s,2*i,C-i,_)}this._drawLetterSpacing(t.text,t.style,a,C,A+i-h,!0,M)}C+=n+H(t.text)*M}C=w+i;for(let e=0;e<d.length;e++){let t=d[e],{width:n,font:l}=b[e];if(o.font=l,o.textBaseline=t.style.textBaseline,void 0!==t.style._fill){if(s)if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,p);else{C+=n+H(t.text)*M;continue}else{let e=N.CanvasTextMetrics.measureFont(l),r=t.style.lineHeight||e.fontSize,a={width:n,height:r,lineHeight:r,lines:[t.text]};o.fillStyle=(0,j.getCanvasFillStyle)(t.style._fill,o,a,2*i,C-i,_)}this._drawLetterSpacing(t.text,t.style,a,C,A+i-h,!1,M)}C+=n+H(t.text)*M}_+=v}}}_setFillAndStrokeStyles(e,t,i,r,a,s=0,o=0){e.fillStyle=t._fill?(0,j.getCanvasFillStyle)(t._fill,e,i,2*r,s,o):null,t._stroke?.width&&(e.strokeStyle=(0,j.getCanvasFillStyle)(t._stroke,e,i,a+2*r,s,o))}_setupDropShadow(e,t,i,r){e.fillStyle="black",e.strokeStyle="black";let a=t.dropShadow,s=a.color,o=a.alpha;e.shadowColor=O.Color.shared.setValue(s).setAlpha(o).toRgbaString();let n=a.blur*i,l=a.distance*i;e.shadowBlur=n,e.shadowOffsetX=Math.cos(a.angle)*l,e.shadowOffsetY=Math.sin(a.angle)*l+r}_getAlignmentOffset(e,t,i){return"right"===i?t-e:"center"===i?(t-e)/2:0}_drawLetterSpacing(e,t,i,r,a,s=!1,o=0){let{context:n}=i,l=t.letterSpacing,h=!1;if(N.CanvasTextMetrics.experimentalLetterSpacingSupported&&(N.CanvasTextMetrics.experimentalLetterSpacing?(n.letterSpacing=`${l}px`,n.textLetterSpacing=`${l}px`,h=!0):(n.letterSpacing="0px",n.textLetterSpacing="0px")),(0===l||h)&&0===o)return void(s?n.strokeText(e,r,a):n.fillText(e,r,a));if(0!==o&&(0===l||h)){let t=e.split(" "),i=r,l=n.measureText(" ").width;for(let e=0;e<t.length;e++)s?n.strokeText(t[e],i,a):n.fillText(t[e],i,a),i+=n.measureText(t[e]).width+l+o;return}let u=r,f=N.CanvasTextMetrics.graphemeSegmenter(e),d=n.measureText(e).width,c=0;for(let e=0;e<f.length;++e){let t=f[e];s?n.strokeText(t,u,a):n.fillText(t,u,a);let i="";for(let t=e+1;t<f.length;++t)i+=f[t];u+=d-(c=n.measureText(i).width)+l," "===t&&(u+=o),d=c}}};var Q=e.i(173239),J=e.i(41163);let ee=new(e.i(869553)).Bounds;class et{constructor(e,t){this._activeTextures={},this._renderer=e,this._retainCanvasContext=t}getTexture(e,t,i,r){"string"==typeof e&&((0,_.deprecation)("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:i,resolution:t}),e.style instanceof Q.TextStyle||(e.style=new Q.TextStyle(e.style)),e.textureStyle instanceof F.TextureStyle||(e.textureStyle=new F.TextureStyle(e.textureStyle)),"string"!=typeof e.text&&(e.text=e.text.toString());let{text:a,style:s,textureStyle:o,autoGenerateMipmaps:n}=e,l=e.resolution??this._renderer.resolution,{frame:h,canvasAndContext:u}=K.getCanvasAndContext({text:a,style:s,resolution:l}),f=function(e,t,i,r,a=!1){ee.minX=0,ee.minY=0,ee.maxX=e.width/r|0,ee.maxY=e.height/r|0;let s=J.TexturePool.getOptimalTexture(ee.width,ee.height,r,!1,a);return s.source.uploadMethodId="image",s.source.resource=e,s.source.alphaMode="premultiply-alpha-on-upload",s.frame.width=t/r,s.frame.height=i/r,s.source.emit("update",s.source),s.updateUvs(),s}(u.canvas,h.width,h.height,l,n);if(o&&(f.source.style=o),s.trim&&(h.pad(s.padding),f.frame.copyFrom(h),f.frame.scale(1/l),f.updateUvs()),s.filters){let e=this._applyFilters(f,s.filters);return this.returnTexture(f),K.returnCanvasAndContext(u),e}return this._renderer.texture.initSource(f._source),this._retainCanvasContext||K.returnCanvasAndContext(u),f}returnTexture(e){let t=e.source,i=t.resource;if(this._retainCanvasContext&&i?.getContext){let e=i.getContext("2d");e&&K.returnCanvasAndContext({canvas:i,context:e})}t.resource=null,t.uploadMethodId="unknown",t.alphaMode="no-premultiply-alpha",J.TexturePool.returnTexture(e,!0)}renderTextToCanvas(){(0,_.deprecation)("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;let i=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle,autoGenerateMipmaps:e.autoGenerateMipmaps});return this._activeTextures[t]={texture:i,usageCount:1},i}decreaseReferenceCount(e){let t=this._activeTextures[e];t&&(t.usageCount--,0===t.usageCount&&(this.returnTexture(t.texture),this._activeTextures[e]=null))}getReferenceCount(e){return this._activeTextures[e]?.usageCount??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,t){let i=this._renderer.renderTarget.renderTarget,r=this._renderer.filter.generateFilteredTexture({texture:e,filters:t});return this._renderer.renderTarget.bind(i,!1),r}destroy(){for(let e in this._renderer=null,this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}}class ei extends et{constructor(e){super(e,!0)}}ei.extension={type:[o.ExtensionType.CanvasSystem],name:"canvasText"};class er extends et{constructor(e){super(e,!1)}}er.extension={type:[o.ExtensionType.WebGLSystem,o.ExtensionType.WebGPUSystem],name:"canvasText"},o.extensions.add(ei),o.extensions.add(er),o.extensions.add(T);class ea extends D{constructor(...e){const t=function(e,t){let i=e[0]??{};return("string"==typeof i||e[1])&&((0,_.deprecation)(_.v8_0_0,`use new ${t}({ text: "hi!", style }) instead`),i={text:i,style:e[1]}),i}(e,"Text");super(t,Q.TextStyle),this.renderPipeId="text",t.textureStyle&&(this.textureStyle=t.textureStyle instanceof F.TextureStyle?t.textureStyle:new F.TextureStyle(t.textureStyle)),this.autoGenerateMipmaps=t.autoGenerateMipmaps??E.TextureSource.defaultOptions.autoGenerateMipmaps}updateBounds(){let e=this._bounds,t=this._anchor,i=0,r=0;if(this._style.trim){let{frame:e,canvasAndContext:t}=K.getCanvasAndContext({text:this.text,style:this._style,resolution:1});K.returnCanvasAndContext(t),i=e.width,r=e.height}else{let e=N.CanvasTextMetrics.measureText(this._text,this._style);i=e.width,r=e.height}e.minX=-t._x*i,e.maxX=e.minX+i,e.minY=-t._y*r,e.maxY=e.minY+r}}var es=e.i(428959);let eo=6378137*Math.PI;function en(e,t){return{x:e*Math.PI/180*6378137,y:6378137*Math.log(Math.tan((90+Math.max(-85.051129,Math.min(85.051129,t)))*Math.PI/360))}}function el(e,t){return{lng:e/6378137*(180/Math.PI),lat:360*Math.atan(Math.exp(t/6378137))/Math.PI-90}}function eh(e,t,i){let r=256*Math.pow(2,i)/(2*eo);return{px:(e+eo)*r,py:(eo-t)*r}}function eu(e,t,i){let r=256*Math.pow(2,i)/(2*eo);return{mx:e/r-eo,my:eo-t/r}}function ef(e,t){return 2*Math.cos(e*Math.PI/180)*Math.PI*6378137/(256*Math.pow(2,t))}e.s(["ORIGIN_SHIFT",()=>eo,"groundResolution",()=>ef,"lngLatToMercator",()=>en,"mercatorToLngLat",()=>el,"mercatorToPixel",()=>eh,"pixelToMercator",()=>eu],50271);class ed{centerX;centerY;zoom;viewportWidth;viewportHeight;minZoom;maxZoom;singleWorld;worldBoundsMeters;get effectiveMinZoom(){if(this.worldBoundsMeters){let[e,t,i,r]=this.worldBoundsMeters;return Math.max(this.minZoom,Math.log2(2*Math.max(1,this.viewportWidth)*eo/(256*(i-e))),Math.log2(2*Math.max(1,this.viewportHeight)*eo/(256*(r-t))))}return this.singleWorld?Math.max(this.minZoom,Math.log2(Math.max(1,this.viewportHeight)/256),Math.log2(Math.max(1,this.viewportWidth)/256)):Math.max(this.minZoom,Math.log2(Math.max(1,this.viewportHeight)/256))}constructor(e){const t=e?.center??[0,0],i=en(t[0],t[1]);if(this.centerX=i.x,this.centerY=i.y,this.zoom=e?.zoom??2,this.viewportWidth=e?.viewportWidth??800,this.viewportHeight=e?.viewportHeight??600,this.minZoom=e?.minZoom??0,this.maxZoom=e?.maxZoom??20,e?.worldBounds){const t=en(e.worldBounds.west,e.worldBounds.south),i=en(e.worldBounds.east,e.worldBounds.north);this.worldBoundsMeters=[t.x,t.y,i.x,i.y],this.singleWorld=!0}else this.worldBoundsMeters=null,this.singleWorld=e?.hideParallelWorlds??!1}setCenter(e,t){let i=en(e,t);this.centerX=i.x,this.centerY=i.y}getCenter(){let{lng:e,lat:t}=el(this.centerX,this.centerY);return[e,t]}setZoom(e){this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,e))}clampToBounds(){this.zoom=Math.max(this.effectiveMinZoom,Math.min(this.maxZoom,this.zoom));let e=2*eo/(256*Math.pow(2,this.zoom));if(this.worldBoundsMeters){let[t,i,r,a]=this.worldBoundsMeters,s=this.viewportWidth/2*e,o=this.viewportHeight/2*e,n=t+s,l=r-s,h=i+o,u=a-o;this.centerX=l>=n?Math.max(n,Math.min(l,this.centerX)):(t+r)/2,this.centerY=u>=h?Math.max(h,Math.min(u,this.centerY)):(i+a)/2;return}let t=this.viewportHeight/2*e,i=eo-t,r=-eo+t;if(i>=r?this.centerY=Math.max(r,Math.min(i,this.centerY)):this.centerY=0,this.singleWorld){let t=this.viewportWidth/2*e,i=eo-t,r=-eo+t;this.centerX=i>=r?Math.max(r,Math.min(i,this.centerX)):0}else{let e=2*eo;this.centerX=((this.centerX+eo)%e+e)%e-eo}}getWorldTransform(){let e=6378137*Math.PI,t=256*Math.pow(2,this.zoom)/(2*e),i=new es.Matrix;return i.a=t,i.b=0,i.c=0,i.d=-t,i.tx=-this.centerX*t+this.viewportWidth/2,i.ty=this.centerY*t+this.viewportHeight/2,i}screenToMercator(e,t){let i=6378137*Math.PI*2/(256*Math.pow(2,this.zoom));return{x:this.centerX+(e-this.viewportWidth/2)*i,y:this.centerY-(t-this.viewportHeight/2)*i}}mercatorToScreen(e,t){let i=6378137*Math.PI,r=256*Math.pow(2,this.zoom)/(2*i);return{x:(e-this.centerX)*r+this.viewportWidth/2,y:(this.centerY-t)*r+this.viewportHeight/2}}getState(){return{centerX:this.centerX,centerY:this.centerY,zoom:this.zoom,viewportWidth:this.viewportWidth,viewportHeight:this.viewportHeight}}}e.s(["Camera",()=>ed],214364);let ec=6378137*Math.PI;class ep{_camera;_worldContainer;_events;_ticker;_dirty=!0;_lastCenterX=NaN;_lastCenterY=NaN;_lastZoom=NaN;_lastVpW=NaN;_lastVpH=NaN;constructor(e,t,i,r){this._camera=e,this._worldContainer=t,this._events=i,this._ticker=r,this._ticker.add(this._onTick,this)}markDirty(){this._dirty=!0}applyNow(){this._applyTransform(),this._dirty=!1}_onTick(){(this._dirty||this._hasChanged())&&(this._applyTransform(),this._dirty=!1)}_hasChanged(){let e=this._camera;return e.centerX!==this._lastCenterX||e.centerY!==this._lastCenterY||e.zoom!==this._lastZoom||e.viewportWidth!==this._lastVpW||e.viewportHeight!==this._lastVpH}_applyTransform(){let e=this._camera;e.clampToBounds();let t=256*Math.pow(2,e.zoom)/(2*ec);this._worldContainer.position.set(-e.centerX*t+e.viewportWidth/2,e.centerY*t+e.viewportHeight/2),this._worldContainer.scale.set(t,-t),this._lastCenterX=e.centerX,this._lastCenterY=e.centerY,this._lastZoom=e.zoom,this._lastVpW=e.viewportWidth,this._lastVpH=e.viewportHeight,this._events.emit("view:change",{center:e.getCenter(),zoom:e.zoom})}destroy(){this._ticker.remove(this._onTick,this)}}function em(e){return e}function e_(e){return e*e}function eg(e){return e*(2-e)}function ey(e){return e<.5?2*e*e:-1+(4-2*e)*e}function ex(e){return e<.36363636363636365?7.5625*e*e:e<.7272727272727273?7.5625*(e-=.5454545454545454)*e+.75:e<.9090909090909091?7.5625*(e-=.8181818181818182)*e+.9375:7.5625*(e-=.9545454545454546)*e+.984375}function ev(e){return Math.pow(2,-10*e)*Math.sin(2*Math.PI*(e-.075)/.3)+1}e.s(["CameraController",()=>ep],495553),e.s(["bounce",()=>ex,"easeIn",()=>e_,"easeInOut",()=>ey,"easeOut",()=>eg,"elastic",()=>ev,"linear",()=>em],201718);class eb{_camera;_ticker;_markDirty;_lanes=[];_resolver=null;_tickerCallback=null;constructor(e,t,i){this._camera=e,this._ticker=t,this._markDirty=i}get isAnimating(){return null!=this._tickerCallback}animate(...e){this.cancel();let t=this._camera;return(this._lanes=e.map(e=>({steps:(Array.isArray(e)?e:[e]).map(e=>this._buildStep(t,e)),currentStepIndex:0})),0===this._lanes.length)?Promise.resolve(!0):new Promise(e=>{this._resolver=e,this._tickerCallback=()=>this._onTick(),this._ticker.add(this._tickerCallback),this._markDirty()})}animatePath(e,t,i){this.cancel();let r=i??ey,a=Math.max(t,1),s=0;return new Promise(t=>{this._resolver=t,this._tickerCallback=()=>{let t=Math.min((s+=this._ticker.deltaMS)/a,1),i=e(r(t));if(this._camera.centerX=i.centerX,this._camera.centerY=i.centerY,this._camera.zoom=i.zoom,this._camera.clampToBounds(),this._markDirty(),t>=1){let t=e(1);this._camera.centerX=t.centerX,this._camera.centerY=t.centerY,this._camera.zoom=t.zoom,this._camera.clampToBounds(),this._finish(!0)}},this._ticker.add(this._tickerCallback),this._markDirty()})}cancel(){this._tickerCallback&&(this._ticker.remove(this._tickerCallback),this._tickerCallback=null),this._lanes=[],this._resolver&&(this._resolver(!1),this._resolver=null)}destroy(){this.cancel()}_finish(e){this._tickerCallback&&(this._ticker.remove(this._tickerCallback),this._tickerCallback=null),this._lanes=[],this._resolver&&(this._resolver(e),this._resolver=null)}_buildStep(e,t){let i=null!=t.center,r=null!=t.zoom,a=i?en(t.center[0],t.center[1]):{x:e.centerX,y:e.centerY},s=t.zoom??e.zoom;return{startCenterX:e.centerX,startCenterY:e.centerY,startZoom:e.zoom,endCenterX:a.x,endCenterY:a.y,endZoom:s,hasCenter:i,hasZoom:r,duration:Math.max(t.duration??250,1),easing:t.easing??ey,elapsed:0}}_onTick(){let e=this._ticker.deltaMS,t=this._camera,i=!0;for(let o of this._lanes){var r,a,s;if(o.currentStepIndex>=o.steps.length)continue;let n=o.steps[o.currentStepIndex];n.elapsed+=e;let l=Math.min(n.elapsed/n.duration,1),h=n.easing(l);if(n.hasCenter&&(r=n.startCenterX,t.centerX=r+(n.endCenterX-r)*h,a=n.startCenterY,t.centerY=a+(n.endCenterY-a)*h),n.hasZoom&&(s=n.startZoom,t.zoom=s+(n.endZoom-s)*h),l>=1){if(n.hasCenter&&(t.centerX=n.endCenterX,t.centerY=n.endCenterY),n.hasZoom&&(t.zoom=n.endZoom),o.currentStepIndex++,o.currentStepIndex<o.steps.length){let e=o.steps[o.currentStepIndex];e.startCenterX=t.centerX,e.startCenterY=t.centerY,e.startZoom=t.zoom,i=!1}}else i=!1}t.clampToBounds(),this._markDirty(),i&&this._finish(!0)}}e.s(["CameraAnimator",()=>eb],64537);class ew{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,...t){let i=this.listeners.get(e);if(i)for(let e of i)e(...t)}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}}e.s(["EventBus",()=>ew],960956);let eM=6378137*Math.PI;function eA(e){return 2*eM/(256*Math.pow(2,e))}function eC(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}class eS{_camera;_canvas;_ticker;_enabled=!0;zoomSensitivity=1;invertZoomDirection=!1;disablePanInertia=!1;_pointers=new Map;_isDragging=!1;_lastPointerX=0;_lastPointerY=0;_lastMoveTime=0;_lastPinchDist=0;_lastPinchMidX=0;_lastPinchMidY=0;_lastPinchTime=0;_pinchZoomSamples=[];_velocitySamples=[];_momentumVx=0;_momentumVy=0;_isMomentumActive=!1;_momentumStartTime=0;_momentumInitialVx=0;_momentumInitialVy=0;_isZoomMomentumActive=!1;_zoomMomentumVz=0;_zoomMomentumInitialVz=0;_zoomMomentumStartTime=0;_zoomMomentumScreenX=0;_zoomMomentumScreenY=0;_zoomTarget=null;_zoomScreenX=0;_zoomScreenY=0;_pointerDownX=0;_pointerDownY=0;_pointerDownId=-1;_lastTapTime=0;_lastTapX=0;_lastTapY=0;_isDragZooming=!1;_dragZoomAnchorX=0;_dragZoomAnchorY=0;_dragZoomStartY=0;_dragZoomStartZoom=0;_pendingDoubleTapDown=!1;_pendingDoubleTapPointerId=-1;_onPointerDown;_onPointerMove;_onPointerUp;_onWheel;_preventTouch;_onActivity;_onClick;_onInteractionStart;_onHover;_hoverRafPending=!1;constructor(e,t,i,r,a){this._camera=t,this._canvas=e,this._ticker=i,this._onActivity=r,this._onClick=a,this._canvas.style.touchAction="none",this._onPointerDown=this._handlePointerDown.bind(this),this._onPointerMove=this._handlePointerMove.bind(this),this._onPointerUp=this._handlePointerUp.bind(this),this._onWheel=this._handleWheel.bind(this),this._preventTouch=e=>{this._enabled&&e.preventDefault()},this._canvas.addEventListener("pointerdown",this._onPointerDown),this._canvas.addEventListener("pointermove",this._onPointerMove),this._canvas.addEventListener("pointerup",this._onPointerUp),this._canvas.addEventListener("pointercancel",this._onPointerUp),this._canvas.addEventListener("wheel",this._onWheel,{passive:!1}),this._canvas.addEventListener("touchstart",this._preventTouch,{passive:!1}),this._canvas.addEventListener("touchmove",this._preventTouch,{passive:!1}),this._ticker.add(this._onTick,this)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,e||(this._stopMomentum(),this._stopZoomMomentum(),this._zoomTarget=null,this._pointers.clear(),this._isDragging=!1,this._isDragZooming=!1,this._pendingDoubleTapDown=!1)}set onInteractionStart(e){this._onInteractionStart=e}set onHover(e){this._onHover=e}_handlePointerDown(e){if(!this._enabled)return;this._onActivity?.(),this._canvas.setPointerCapture(e.pointerId),this._pointers.set(e.pointerId,{id:e.pointerId,x:e.clientX,y:e.clientY});let t=this._canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top;if(1===this._pointers.size){this._stopMomentum(),this._stopZoomMomentum(),this._onInteractionStart?.();let t=performance.now()-this._lastTapTime,a=i-this._lastTapX,s=r-this._lastTapY,o=Math.sqrt(a*a+s*s);t<300&&o<30&&this._lastTapTime>0?(this._pendingDoubleTapDown=!0,this._pendingDoubleTapPointerId=e.pointerId,this._isDragging=!1):(this._pendingDoubleTapDown=!1,this._isDragging=!0),this._lastPointerX=e.clientX,this._lastPointerY=e.clientY,this._lastMoveTime=0,this._velocitySamples=[],this._pointerDownX=i,this._pointerDownY=r,this._pointerDownId=e.pointerId}else 2===this._pointers.size&&(this._isDragging=!1,this._isDragZooming=!1,this._pendingDoubleTapDown=!1,this._onInteractionStart?.(),this._initPinch())}_handlePointerMove(e){if(!this._enabled)return;let t=this._pointers.get(e.pointerId);if(t){if(t.x=e.clientX,t.y=e.clientY,1===this._pointers.size){if(this._pendingDoubleTapDown&&e.pointerId===this._pendingDoubleTapPointerId){let t=this._canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,a=i-this._pointerDownX,s=r-this._pointerDownY;Math.sqrt(a*a+s*s)>=5&&(this._pendingDoubleTapDown=!1,this._lastTapTime=0,this._isDragZooming=!0,this._dragZoomAnchorX=this._pointerDownX,this._dragZoomAnchorY=this._pointerDownY,this._dragZoomStartY=e.clientY,this._dragZoomStartZoom=this._camera.zoom,this._onActivity?.());return}if(this._isDragZooming){this._onActivity?.(),this._handleDragZoom(e);return}if(this._isDragging){this._onActivity?.(),this._handleDrag(e);return}}else if(2===this._pointers.size){this._onActivity?.(),this._handlePinch();return}}if(this._onHover&&!this._hoverRafPending&&0===this._pointers.size){this._hoverRafPending=!0;let t=this._canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top;requestAnimationFrame(()=>{this._hoverRafPending=!1,this._onHover?.(i,r)})}}_handlePointerUp(e){let t=this._canvas.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top;if(this._isDragZooming&&e.pointerId===this._pointerDownId){this._isDragZooming=!1,this._pendingDoubleTapDown=!1,this._lastTapTime=0,this._pointerDownId=-1,this._pointers.delete(e.pointerId);return}if(this._pendingDoubleTapDown&&e.pointerId===this._pendingDoubleTapPointerId){this._pendingDoubleTapDown=!1,this._lastTapTime=0,this._pointerDownId=-1,this._pointers.delete(e.pointerId);let t=i-this._pointerDownX,a=r-this._pointerDownY;5>Math.sqrt(t*t+a*a)&&this._handleDoubleTapZoom(i,r);return}if(e.pointerId===this._pointerDownId&&1===this._pointers.size){let e=i-this._pointerDownX,t=r-this._pointerDownY;5>Math.sqrt(e*e+t*t)&&(this._lastTapTime=performance.now(),this._lastTapX=i,this._lastTapY=r,this._onClick?.(i,r))}this._pointerDownId=-1;let a=2===this._pointers.size;if(this._pointers.delete(e.pointerId),0===this._pointers.size&&this._isDragging)this._isDragging=!1,this.disablePanInertia||this._startMomentum();else if(0===this._pointers.size&&a)this.disablePanInertia||this._startZoomMomentum();else if(1===this._pointers.size){this.disablePanInertia||this._startZoomMomentum();let e=this._pointers.values().next().value;this._lastPointerX=e.x,this._lastPointerY=e.y,this._lastMoveTime=0,this._isDragging=!0,this._velocitySamples=[]}}_handleDrag(e){let t=e.clientX-this._lastPointerX,i=e.clientY-this._lastPointerY;if(0===t&&0===i)return;let r=eA(this._camera.zoom),a=-t*r,s=i*r;this._camera.centerX+=a,this._camera.centerY+=s,this._camera.clampToBounds();let o=performance.now(),n=this._lastMoveTime>0?(o-this._lastMoveTime)/1e3:1/60;this._lastMoveTime=o,this._velocitySamples.push({dx:a,dy:s,dt:n,time:o}),this._velocitySamples.length>20&&this._velocitySamples.shift(),this._lastPointerX=e.clientX,this._lastPointerY=e.clientY}_handleDragZoom(e){let t=e.clientY-this._dragZoomStartY,i=this._dragZoomStartZoom+.01*t,r=Math.max(this._camera.effectiveMinZoom,Math.min(this._camera.maxZoom,i))-this._camera.zoom;0!==r&&this._zoomAtScreen(this._dragZoomAnchorX,this._dragZoomAnchorY,r)}_initPinch(){let e=Array.from(this._pointers.values()),t=this._canvas.getBoundingClientRect();this._lastPinchDist=eC(e[0],e[1]),this._lastPinchMidX=(e[0].x+e[1].x)/2-t.left,this._lastPinchMidY=(e[0].y+e[1].y)/2-t.top,this._lastPinchTime=performance.now(),this._pinchZoomSamples=[],this._stopZoomMomentum()}_handlePinch(){let e=Array.from(this._pointers.values());if(e.length<2)return;let t=eC(e[0],e[1]),i=this._canvas.getBoundingClientRect(),r=(e[0].x+e[1].x)/2-i.left,a=(e[0].y+e[1].y)/2-i.top;if(this._lastPinchDist<10){this._lastPinchDist=t,this._lastPinchMidX=r,this._lastPinchMidY=a,this._lastPinchTime=performance.now();return}let s=Math.log2(t/this._lastPinchDist);this._zoomAtScreen(r,a,s);let o=performance.now(),n=this._lastPinchTime>0?(o-this._lastPinchTime)/1e3:1/60;this._lastPinchTime=o,n>0&&(this._pinchZoomSamples.push({dz:s,dt:n,time:o}),this._pinchZoomSamples.length>10&&this._pinchZoomSamples.shift());let l=r-this._lastPinchMidX,h=a-this._lastPinchMidY;if(0!==l||0!==h){let e=eA(this._camera.zoom);this._camera.centerX-=l*e,this._camera.centerY+=h*e}this._camera.clampToBounds(),this._lastPinchDist=t,this._lastPinchMidX=r,this._lastPinchMidY=a}_handleWheel(e){if(!this._enabled)return;e.preventDefault(),this._onActivity?.(),this._onInteractionStart?.();let t=this.invertZoomDirection?1:-1,i=e.ctrlKey?.01:.001,r=t*e.deltaY*i*this.zoomSensitivity,a=this._canvas.getBoundingClientRect();this._zoomScreenX=e.clientX-a.left,this._zoomScreenY=e.clientY-a.top;let s=this._zoomTarget??this._camera.zoom;this._zoomTarget=Math.max(this._camera.effectiveMinZoom,Math.min(this._camera.maxZoom,s+r))}_zoomAtScreen(e,t,i){let r=this._camera,a=eA(r.zoom),s=r.centerX+(e-r.viewportWidth/2)*a,o=r.centerY-(t-r.viewportHeight/2)*a,n=r.zoom;if(r.setZoom(r.zoom+i),r.zoom===n)return;let l=eA(r.zoom),h=r.centerX+(e-r.viewportWidth/2)*l,u=r.centerY-(t-r.viewportHeight/2)*l;r.centerX+=s-h,r.centerY+=o-u,r.clampToBounds()}_handleDoubleTapZoom(e,t){this._onActivity?.(),this._onInteractionStart?.();let i=this._camera;if(i.zoom>=i.maxZoom-.5){let r=Math.max(i.effectiveMinZoom,i.effectiveMinZoom+2);this._zoomScreenX=e,this._zoomScreenY=t,this._zoomTarget=r}else{let r=Math.min(i.maxZoom,i.zoom+1);this._zoomScreenX=e,this._zoomScreenY=t,this._zoomTarget=r}}_startMomentum(){let e=performance.now(),t=e-100,i=this._velocitySamples.filter(e=>e.time>=t);if(0===i.length)return;let r=0,a=0,s=0,o=i[0].time,n=e-o||1;for(let e of i){let t=((e.time-o)/n+.5)*e.dt;r+=e.dx/e.dt*t,a+=e.dy/e.dt*t,s+=t}if(s<=0)return;let l=r/s,h=a/s,u=1/eA(this._camera.zoom),f=Math.sqrt(l**2+h**2)*u;if(f>4e3){let e=4e3/f;l*=e,h*=e}Math.sqrt(l**2+h**2)*u>5&&(this._momentumInitialVx=l,this._momentumInitialVy=h,this._momentumVx=l,this._momentumVy=h,this._momentumStartTime=performance.now(),this._isMomentumActive=!0)}_stopMomentum(){this._isMomentumActive=!1,this._momentumVx=0,this._momentumVy=0}_startZoomMomentum(){let e=performance.now(),t=e-100,i=this._pinchZoomSamples.filter(e=>e.time>=t);if(0===i.length)return;let r=0,a=0;for(let e of i)r+=e.dz,a+=e.dt;if(a<=0)return;let s=r/a;.1>Math.abs(s)||(this._zoomMomentumInitialVz=s,this._zoomMomentumVz=s,this._zoomMomentumStartTime=e,this._zoomMomentumScreenX=this._lastPinchMidX,this._zoomMomentumScreenY=this._lastPinchMidY,this._isZoomMomentumActive=!0)}_stopZoomMomentum(){this._isZoomMomentumActive=!1,this._zoomMomentumVz=0,this._pinchZoomSamples=[]}_onTick(){let e=this._ticker.deltaMS/1e3;if(null!==this._zoomTarget){let t=this._zoomTarget-this._camera.zoom;if(1e-4>Math.abs(t))0!==t&&this._zoomAtScreen(this._zoomScreenX,this._zoomScreenY,t),this._zoomTarget=null;else{let i=1-Math.exp(-20*e);this._zoomAtScreen(this._zoomScreenX,this._zoomScreenY,t*i),this._onActivity?.()}}if(this._isMomentumActive){this._onActivity?.();let t=Math.exp(-8*((performance.now()-this._momentumStartTime)/1e3));this._momentumVx=this._momentumInitialVx*t,this._momentumVy=this._momentumInitialVy*t,this._camera.centerX+=this._momentumVx*e,this._camera.centerY+=this._momentumVy*e,this._camera.clampToBounds();let i=1/eA(this._camera.zoom);Math.sqrt(this._momentumVx**2+this._momentumVy**2)*i<1&&this._stopMomentum()}if(this._isZoomMomentumActive){this._onActivity?.();let t=Math.exp(-12*((performance.now()-this._zoomMomentumStartTime)/1e3));this._zoomMomentumVz=this._zoomMomentumInitialVz*t;let i=this._zoomMomentumVz*e;this._zoomAtScreen(this._zoomMomentumScreenX,this._zoomMomentumScreenY,i),.1>Math.abs(this._zoomMomentumVz)&&this._stopZoomMomentum()}}destroy(){this._canvas.removeEventListener("pointerdown",this._onPointerDown),this._canvas.removeEventListener("pointermove",this._onPointerMove),this._canvas.removeEventListener("pointerup",this._onPointerUp),this._canvas.removeEventListener("pointercancel",this._onPointerUp),this._canvas.removeEventListener("wheel",this._onWheel),this._canvas.removeEventListener("touchstart",this._preventTouch),this._canvas.removeEventListener("touchmove",this._preventTouch),this._ticker.remove(this._onTick,this),this._pointers.clear()}}e.s(["PanZoomHandler",()=>eS],119443);var eP=e.i(485465),eT=e.i(64957),ek=e.i(860406),eI=e.i(481107),ez=e.i(527076);function eL(e,t,i,r,a,s,o,n){let l=o-i,h=n-r,u=a-i,f=s-r,d=e-i,c=t-r,p=l*l+h*h,m=l*u+h*f,_=l*d+h*c,g=u*u+f*f,y=u*d+f*c,x=1/(p*g-m*m),v=(g*_-m*y)*x,b=(p*y-m*_)*x;return v>=0&&b>=0&&v+b<1}var eE=e.i(822558),eF=e.i(631320),eB=R,eR=ek;let eD=class e extends eR.Geometry{constructor(...t){let i=t[0]??{};i instanceof Float32Array&&((0,_.deprecation)(_.v8_0_0,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:t[1],indices:t[2]});const r=(i={...e.defaultOptions,...i}).positions||new Float32Array([0,0,1,0,1,1,0,1]);let a=i.uvs;a||(a=new Float32Array(i.positions?r.length:[0,0,1,0,1,1,0,1]));const s=i.indices||new Uint32Array([0,1,2,0,2,3]),o=i.shrinkBuffersToFit,n=new eP.Buffer({data:r,label:"attribute-mesh-positions",shrinkToFit:o,usage:eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST});super({attributes:{aPosition:{buffer:n,format:"float32x2",stride:8,offset:0},aUV:{buffer:new eP.Buffer({data:a,label:"attribute-mesh-uvs",shrinkToFit:o,usage:eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST}),format:"float32x2",stride:8,offset:0}},indexBuffer:new eP.Buffer({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST}),topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};eD.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};var eO=e.i(694359),eU=e.i(432543),eZ=e.i(660728),eV=e.i(889506);class eG{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(e){this._topology=e}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(e){this.texture!==e&&(this.texture=e,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),t=e.data,i=t,r=this.texture.textureMatrix;return r.isSimple||(i=this._transformedUvs,(this._textureMatrixUpdateId!==r._updateID||this._uvUpdateId!==e._updateID)&&((!i||i.length<t.length)&&(i=this._transformedUvs=new Float32Array(t.length)),this._textureMatrixUpdateId=r._updateID,this._uvUpdateId=e._updateID,r.multiplyUvs(t,i))),i}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class eW{destroy(){}}class eX{constructor(e,t){this.localUniforms=new eU.UniformGroup({uTransformMatrix:{value:new es.Matrix,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new eO.BindGroup({0:this.localUniforms}),this.renderer=e,this._adaptor=t,this._adaptor.init()}validateRenderable(e){let t=this._getMeshData(e),i=t.batched,r=e.batched;if(t.batched=r,i!==r)return!0;if(r){let i=e._geometry;if(i.indices.length!==t.indexSize||i.positions.length!==t.vertexSize)return t.indexSize=i.indices.length,t.vertexSize=i.positions.length,!0;let r=this._getBatchableMesh(e);return r.texture.uid!==e._texture.uid&&(r._textureMatrixUpdateId=-1),!r._batcher.checkAndUpdateTexture(r,e._texture)}return!1}addRenderable(e,t){let i=this.renderer.renderPipes.batch,r=this._getMeshData(e);if(e.didViewUpdate&&(r.indexSize=e._geometry.indices?.length,r.vertexSize=e._geometry.positions?.length),r.batched){let r=this._getBatchableMesh(e);r.setTexture(e._texture),r.geometry=e._geometry,i.addToBatch(r,t)}else i.break(t),t.add(e)}updateRenderable(e){if(e.batched){let t=this._getBatchableMesh(e);t.setTexture(e._texture),t.geometry=e._geometry,t._batcher.updateElement(t)}}execute(e){if(!e.isRenderable)return;e.state.blendMode=(0,eZ.getAdjustedBlendModeBlend)(e.groupBlendMode,e.texture._source);let t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform,t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,t.update(),(0,eV.color32BitToUniform)(e.groupColorAlpha,t.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){var t,i;return(t=e._gpuData)[i=this.renderer.uid]||(t[i]=new eW),e._gpuData[this.renderer.uid].meshData||this._initMeshData(e)}_initMeshData(e){return e._gpuData[this.renderer.uid].meshData={batched:e.batched,indexSize:0,vertexSize:0},e._gpuData[this.renderer.uid].meshData}_getBatchableMesh(e){var t,i;return(t=e._gpuData)[i=this.renderer.uid]||(t[i]=new eW),e._gpuData[this.renderer.uid].batchableMesh||this._initBatchableMesh(e)}_initBatchableMesh(e){let t=new eG;return t.renderable=e,t.setTexture(e._texture),t.transform=e.groupTransform,t.roundPixels=this.renderer._roundPixels|e._roundPixels,e._gpuData[this.renderer.uid].batchableMesh=t,t}destroy(){this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}}eX.extension={type:[o.ExtensionType.WebGLPipes,o.ExtensionType.WebGPUPipes],name:"mesh"},o.extensions.add(eX);class eY extends eB.ViewContainer{constructor(...e){let t=e[0];t instanceof ek.Geometry&&((0,_.deprecation)(_.v8_0_0,"Mesh: use new Mesh({ geometry, shader }) instead"),t={geometry:t,shader:e[1]},e[3]&&((0,_.deprecation)(_.v8_0_0,"Mesh: drawMode argument has been removed, use geometry.topology instead"),t.geometry.topology=e[3]));const{geometry:i,shader:r,texture:a,roundPixels:s,state:o,...n}=t;super({label:"Mesh",...n}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=r??null,this.texture=a??r?.texture??eF.Texture.WHITE,this.state=o??eE.State.for2d(),this._geometry=i,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=s??!1}get material(){return(0,_.deprecation)(_.v8_0_0,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(e){this._shader!==e&&(this._shader=e,this.onViewUpdate())}get shader(){return this._shader}set geometry(e){this._geometry!==e&&(this._geometry?.off("update",this.onViewUpdate,this),e.on("update",this.onViewUpdate,this),this._geometry=e,this.onViewUpdate())}get geometry(){return this._geometry}set texture(e){e||(e=eF.Texture.EMPTY);let t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=e),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}get batched(){return!this._shader&&(12&this.state.data)==0&&this._geometry instanceof eD&&("auto"===this._geometry.batchMode?this._geometry.positions.length/2<=100:"batch"===this._geometry.batchMode)}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(e){let{x:t,y:i}=e;if(!this.bounds.containsPoint(t,i))return!1;let r=this.geometry.getBuffer("aPosition").data,a="triangle-strip"===this.geometry.topology?3:1;if(this.geometry.getIndex()){let e=this.geometry.getIndex().data,s=e.length;for(let o=0;o+2<s;o+=a){let a=2*e[o],s=2*e[o+1],n=2*e[o+2];if(eL(t,i,r[a],r[a+1],r[s],r[s+1],r[n],r[n+1]))return!0}}else{let e=r.length/2;for(let s=0;s+2<e;s+=a){let e=2*s,a=(s+1)*2,o=(s+2)*2;if(eL(t,i,r[e],r[e+1],r[a],r[a+1],r[o],r[o+1]))return!0}}return!1}destroy(e){if(super.destroy(e),"boolean"==typeof e?e:e?.texture){let t="boolean"==typeof e?e:e?.textureSource;this._texture.destroy(t)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}var eN=e.i(965654);let e$=`

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};

@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};

@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

struct BorderUniforms {
    uHalfWidth: f32,
};

@group(2) @binding(0) var<uniform> borderUniforms: BorderUniforms;

struct VertexInput {
    @location(0) aCenter: vec2<f32>,
    @location(1) aNormal: vec2<f32>,
    @location(2) aSide: f32,
    @location(3) aMiter: f32,
    @location(4) aAlpha: f32,
    @location(5) aChainLen: f32,
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vAlpha: f32,
};

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let ratio = borderUniforms.uHalfWidth / max(input.aChainLen, 1.0);
    let scale = clamp(1.0 - (ratio - 0.05) * 10.0, 0.0, 1.0);
    let hw = borderUniforms.uHalfWidth * scale;
    let offset = input.aSide * hw * input.aMiter;
    let worldPos = input.aCenter + input.aNormal * offset;

    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;

    let clip = mvp * vec3<f32>(worldPos, 1.0);

    var out: VertexOutput;
    out.position = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vAlpha = input.aAlpha;
    return out;
}

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(localUniforms.uColor.rgb, localUniforms.uColor.a * input.vAlpha);
}

`,ej=`#version 300 es
in vec2 aCenter;
in vec2 aNormal;
in float aSide;
in float aMiter;
in float aAlpha;
in float aChainLen;

out float vAlpha;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uHalfWidth;

void main() {
    float ratio = uHalfWidth / max(aChainLen, 1.0);
    float scale = clamp(1.0 - (ratio - 0.05) * 10.0, 0.0, 1.0);
    float hw = uHalfWidth * scale;
    float offset = aSide * hw * aMiter;
    vec2 worldPos = aCenter + aNormal * offset;

    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    gl_Position = vec4(clip.xy, 0.0, 1.0);
    vAlpha = aAlpha;
}
`,eq=`#version 300 es
precision highp float;

in float vAlpha;
uniform vec4 uColor;
out vec4 finalColor;

void main() {
    finalColor = vec4(uColor.rgb, uColor.a * vAlpha);
}
`;function eH(e,t){let i=0,r=0;for(let a of e){let e=a.length/2;if(e<2)continue;let s=t?e-1:e;s<2||(i+=2*s,r+=(s-!t)*2)}if(0===i)return{center:new Float32Array(0),normal:new Float32Array(0),side:new Float32Array(0),miter:new Float32Array(0),alpha:new Float32Array(0),chainLength:new Float32Array(0),indices:new Uint32Array(0),vertexCount:0};let a=new Float32Array(2*i),s=new Float32Array(2*i),o=new Float32Array(i),n=new Float32Array(i),l=new Float32Array(i),h=new Float32Array(i),u=new Uint32Array(3*r),f=0,d=0;for(let i of e){let e=i.length/2;if(e<2)continue;let r=t?e-1:e;if(r<2)continue;let c=t?r:r-1,p=0;for(let e=0;e<c;e++){let a=t?(e+1)%r:e+1,s=i[2*a]-i[2*e],o=i[2*a+1]-i[2*e+1];p+=Math.sqrt(s*s+o*o)}let m=f;for(let e=0;e<r;e++){let u=i[2*e],d=i[2*e+1],{nx:c,ny:m,m:_}=function(e,t,i,r){let a,s,o,n,l,h,u=e[2*t],f=e[2*t+1];if(r?(a=!0,s=!0,o=(t-1+i)%i,n=(t+1)%i):(a=t>0,s=t<i-1,o=t-1,n=t+1),a&&s){let t=e[2*o],i=e[2*o+1],r=e[2*n],a=e[2*n+1],s=u-t,l=f-i,h=Math.sqrt(s*s+l*l),d=r-u,c=a-f,p=Math.sqrt(d*d+c*c);if(h>0&&p>0){let e=-l/h,t=s/h,i=e+-c/p,r=t+d/p,a=Math.sqrt(i*i+r*r);if(a>.001){let s=i/a,o=r/a,n=s*e+o*t;return{nx:s,ny:o,m:Math.min(n>.1?1/n:10,3)}}return{nx:e,ny:t,m:1}}}if(s){let t=e[2*n],i=e[2*n+1];l=t-u,h=i-f}else{if(!a)return{nx:0,ny:1,m:1};let t=e[2*o],i=e[2*o+1];l=u-t,h=f-i}let d=Math.sqrt(l*l+h*h);return d>0?{nx:-h/d,ny:l/d,m:1}:{nx:0,ny:1,m:1}}(i,e,r,t);a[2*f]=u,a[2*f+1]=d,s[2*f]=c,s[2*f+1]=m,o[f]=1,n[f]=_,l[f]=1,h[f]=p,a[2*++f]=u,a[2*f+1]=d,s[2*f]=c,s[2*f+1]=m,o[f]=-1,n[f]=_,l[f]=1,h[f]=p,f++}for(let e=0;e<c;e++){let i=m+2*e,a=t?m+(e+1)%r*2:i+2;u[d++]=i,u[d++]=i+1,u[d++]=a,u[d++]=a,u[d++]=i+1,u[d++]=a+1}}return{center:a,normal:s,side:o,miter:n,alpha:l,chainLength:h,indices:u.subarray(0,d),vertexCount:f}}let eK=null;function eQ(){return eK||(eK=new ez.GpuProgram({vertex:{source:e$,entryPoint:"vsMain"},fragment:{source:e$,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),eK}let eJ=null;function e0(){return eJ||(eJ=new eI.GlProgram({vertex:ej,fragment:eq})),eJ}class e2{_topology=null;_mesh=null;_geometry=null;_shader=null;_color;_alpha;_lineWidthPx;_ghosts=[];get vertexCount(){return this._topology?.vertexCount??0}get alphaBuffer(){return this._topology?.alpha??null}constructor(e,t,i){this._color=e,this._alpha=t,this._lineWidthPx=i}get hasGeometry(){return null!==this._topology&&this._topology.vertexCount>0}get mesh(){return this._mesh}tessellateChains(e){this._topology=eH(e,!1),this._createMesh()}tessellateRings(e){this._topology=eH(e,!0),this._createMesh()}updateForZoom(e){if(!this._shader||!this._mesh)return null;let t=this._lineWidthPx*e/2;for(let e of(this._shader.resources.borderUniforms.uniforms.uHalfWidth=t,this._ghosts))e.shader.resources.borderUniforms.uniforms.uHalfWidth=t;return this._mesh}setAlpha(e){for(let t of(this._mesh&&(this._mesh.alpha=e),this._ghosts))t.mesh.alpha=e}setVertexAlphaRange(e,t,i){let r=this._topology?.alpha;if(!r)return;let a=Math.min(e+t,r.length);for(let t=e;t<a;t++)r[t]=i;for(let e of(this._geometry&&this._geometry.getAttribute("aAlpha").buffer.update(),this._ghosts))e.geometry.getAttribute("aAlpha").buffer.update()}resetAlphaBuffer(){let e=this._topology?.alpha;if(e)for(let t of(e.fill(1),this._geometry&&this._geometry.getAttribute("aAlpha").buffer.update(),this._ghosts))t.geometry.getAttribute("aAlpha").buffer.update()}updateGhostVisibility(e,t,i){for(let r of this._ghosts)r.mesh.visible=r.xOffset<0?e<i+r.xOffset:t>-i+r.xOffset}createGhostMesh(e){let t=this._topology;if(!t||0===t.vertexCount)return null;let i=new Float32Array(t.center.length);for(let r=0;r<t.center.length;r+=2)i[r]=t.center[r]+e,i[r+1]=t.center[r+1];let r=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,a=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,s=new ek.Geometry({attributes:{aCenter:{buffer:new eP.Buffer({data:i,usage:r}),format:"float32x2"},aNormal:{buffer:new eP.Buffer({data:t.normal,usage:r}),format:"float32x2"},aSide:{buffer:new eP.Buffer({data:t.side,usage:r}),format:"float32"},aMiter:{buffer:new eP.Buffer({data:t.miter,usage:r}),format:"float32"},aAlpha:{buffer:new eP.Buffer({data:t.alpha,usage:r}),format:"float32"},aChainLen:{buffer:new eP.Buffer({data:t.chainLength,usage:r}),format:"float32"}},indexBuffer:new eP.Buffer({data:t.indices,usage:a})}),o=new eN.Shader({gpuProgram:eQ(),glProgram:e0(),resources:{borderUniforms:{uHalfWidth:{value:0,type:"f32"}}}}),n=new eY({geometry:s,shader:o});return n.tint=this._color,n.alpha=this._alpha,n.label=`border:ghost(${e>0?"+":""}${e})`,n.visible=!1,this._ghosts.push({mesh:n,geometry:s,shader:o,xOffset:e}),n}reparentTo(e){for(let t of(this._mesh?.parent&&e.addChild(this._mesh),this._ghosts))t.mesh.parent&&e.addChild(t.mesh)}destroy(){for(let e of this._ghosts)e.mesh.destroy(),e.geometry.destroy(!0),e.shader.destroy();this._ghosts=[],this._mesh?.destroy(),this._mesh=null,this._geometry?.destroy(!0),this._geometry=null,this._shader?.destroy(),this._shader=null,this._topology=null}_createMesh(){let e=this._topology;if(this._mesh?.destroy(),this._mesh=null,this._geometry?.destroy(!0),this._geometry=null,this._shader?.destroy(),this._shader=null,!e||0===e.vertexCount)return;let t=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,i=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST;this._geometry=new ek.Geometry({attributes:{aCenter:{buffer:new eP.Buffer({data:e.center,usage:t}),format:"float32x2"},aNormal:{buffer:new eP.Buffer({data:e.normal,usage:t}),format:"float32x2"},aSide:{buffer:new eP.Buffer({data:e.side,usage:t}),format:"float32"},aMiter:{buffer:new eP.Buffer({data:e.miter,usage:t}),format:"float32"},aAlpha:{buffer:new eP.Buffer({data:e.alpha,usage:t}),format:"float32"},aChainLen:{buffer:new eP.Buffer({data:e.chainLength,usage:t}),format:"float32"}},indexBuffer:new eP.Buffer({data:e.indices,usage:i})}),this._shader=new eN.Shader({gpuProgram:eQ(),glProgram:e0(),resources:{borderUniforms:{uHalfWidth:{value:0,type:"f32"}}}}),this._mesh=new eY({geometry:this._geometry,shader:this._shader}),this._mesh.tint=this._color,this._mesh.alpha=this._alpha}}e.s(["BorderMesh",()=>e2],774439);class e1{container;_internalMesh;_externalMeshes=new Map;_regions=new Map;_ownershipMap=new Map;_edgeMap=new Map;_regionEdges=new Map;_vtxToRegions=new Map;_externalByStyle=new Map;_edgeClassification=new Map;_externalEdgeKeys=new Set;_cachedChains=new Map;_edgeKeyToChainId=new Map;_chainEndpoints=new Map;_nextChainId=0;_chainVertexRanges=new Map;_invisibleRegionIds=new Set;_conquestClumpRegions=new Set;_conquestTakerRegions=new Set;_currentZoom=0;_dirty=!0;_fadeStartZoom=2.4;_fadeEndZoom=7;skipGhosts=!1;constructor(){this.container=new p.Container({label:"borders"}),this._internalMesh=new e2(0,.135,.85)}setRegions(e){this._regions=e,this._buildEdgeMap(),this._rebuildInternalMesh(),this._dirty=!0}setInvisibleRegions(e){this._invisibleRegionIds=e,this._rebuildInternalMesh(),this._rebuildExternalMeshes()}suppressConquestBorders(e,t){this._conquestClumpRegions=new Set(e),this._conquestTakerRegions=new Set(t);let i=[...e,...t],r=this._reclassifyRegionEdges(i);r&&(this._patchChains(r.removed,r.added),this._recreateMeshes())}unsuppressConquestBorders(){if(0===this._conquestClumpRegions.size&&0===this._conquestTakerRegions.size)return;let e=[...this._conquestClumpRegions,...this._conquestTakerRegions];this._conquestClumpRegions.clear(),this._conquestTakerRegions.clear();let t=this._reclassifyRegionEdges(e);t&&(this._patchChains(t.removed,t.added),this._recreateMeshes())}_rebuildInternalMesh(){this._removeInternalMesh();let e=[];for(let[t,i]of this._regions)if(!this._invisibleRegionIds.has(t))for(let t of i.rings)t.length>=6&&e.push(t);if(this._internalMesh.tessellateRings(e),this._addInternalMesh(),!this.skipGhosts){let e=2*eo;for(let t of[-2,-1,1,2])this._addGhostMesh(this._internalMesh,t*e)}}lastOwnershipDiff={promoted:[],demoted:[],demotedChainCoords:[],promotedChainCoords:[]};updateOwnership(e){let t=0===this._ownershipMap.size;if(this.lastOwnershipDiff.promoted=[],this.lastOwnershipDiff.demoted=[],this.lastOwnershipDiff.demotedChainCoords=[],this.lastOwnershipDiff.promotedChainCoords=[],t&&e.size>0){this._ownershipMap=e,this._rebuildExternalMeshes();return}let i=[];for(let[t,r]of e)(this._ownershipMap.get(t)??null)!==(r??null)&&i.push(t);for(let t of this._ownershipMap.keys())e.has(t)||i.push(t);if(this._ownershipMap=e,0===i.length)return;let r=this._reclassifyRegionEdges(i);if(r){this.lastOwnershipDiff.promoted=r.added,this.lastOwnershipDiff.demoted=r.removed;let e=new Set;for(let t of r.removed){let i=this._edgeKeyToChainId.get(t);if(void 0!==i&&!e.has(i)){e.add(i);let t=this._cachedChains.get(i);t&&this.lastOwnershipDiff.demotedChainCoords.push(t.coords)}}this._patchChains(r.removed,r.added);let t=new Set;for(let e of r.added){let i=this._edgeKeyToChainId.get(e);if(void 0!==i&&!t.has(i)){t.add(i);let e=this._cachedChains.get(i);e&&this.lastOwnershipDiff.promotedChainCoords.push(e.coords)}}this._recreateMeshes()}}updateForZoom(e){let t=Math.abs(e-this._currentZoom)>=.01;if(this._dirty){this._currentZoom=e,this._dirty=!1,this._updateZoomUniforms(e);return}t&&(this._currentZoom=e,this._updateZoomUniforms(e))}rebuild(){this._dirty=!1,this._updateZoomUniforms(this._currentZoom)}setFadeRange(e,t){this._fadeStartZoom=e,this._fadeEndZoom=Math.max(e+.01,t),this._dirty=!0}updateWrapping(e,t,i){let r=i/2*(2*eo/(256*Math.pow(2,t))),a=e-r,s=e+r;for(let e of(this._internalMesh.updateGhostVisibility(a,s,eo),this._externalMeshes.values()))e.mesh.updateGhostVisibility(a,s,eo)}detachExternalContent(){let e=new p.Container({label:"borders-external-snapshot"}),t=[];for(let i of this._externalMeshes.values())i.mesh.reparentTo(e),t.push(i.mesh);return this._externalMeshes=new Map,{container:e,borderMeshes:t}}setExternalAlpha(e){for(let t of this._externalMeshes.values())t.mesh.setAlpha(t.alpha*e)}getExternalEdgeKeys(){return new Set(this._externalMeshes.keys())}setNewEdgesAlpha(e,t){for(let[i,r]of this._externalMeshes)e.has(i)||r.mesh.setAlpha(r.alpha*t)}setEdgesAlpha(e,t){let i=new Set;for(let r of e){let e=this._edgeKeyToChainId.get(r);if(void 0===e||i.has(e))continue;i.add(e);let a=this._chainVertexRanges.get(e);if(!a)continue;let s=this._externalMeshes.get(a.styleKey);s&&s.mesh.setVertexAlphaRange(a.vertexStart,a.vertexCount,t)}}resetAllEdgeAlphas(){for(let e of this._externalMeshes.values())e.mesh.resetAlphaBuffer()}getEdgesForRegionBorder(e){let t=new Set(e),i=new Set;for(let r of e){let e=this._regionEdges.get(r);if(e)for(let r of e){let e=this._edgeMap.get(r);e&&(1===e.regions.length?i.add(r):e.regions.some(e=>!t.has(e))&&i.add(r))}}return i}getEdgeRegions(e,t,i,r){let a=e1._edgeKey(e,t,i,r);return this._edgeMap.get(a)?.regions}getAllExternalChainCoords(){let e=[];for(let t of this._cachedChains.values())e.push(t.coords);return e}getExternalChainCoordsExcluding(e){let t=new Set;for(let i of e){let e=this._edgeKeyToChainId.get(i);void 0!==e&&t.add(e)}let i=[];for(let[e,r]of this._cachedChains)t.has(e)||i.push(r.coords);return i}buildChainsExcludingEdges(e){let t=[];for(let i of this._cachedChains.values()){let r=!1;for(let t of i.edgeKeys)if(e.has(t)){r=!0;break}if(!r){t.push(i.coords);continue}let a=[];for(let r=0;r<i.edgeKeys.length;r++){let s=i.edgeKeys[r];if(e.has(s)){a.length>=4&&t.push(a),a=[];continue}let o=this._edgeMap.get(s);if(o)if(0===a.length){let e=2*r;if(e+1<i.coords.length){let t=i.coords[e],r=i.coords[e+1];.01>Math.abs(t-o.x1)&&.01>Math.abs(r-o.y1)?a.push(o.x1,o.y1,o.x2,o.y2):a.push(o.x2,o.y2,o.x1,o.y1)}else a.push(o.x1,o.y1,o.x2,o.y2)}else{let e=a[a.length-2],t=a[a.length-1];.01>Math.abs(e-o.x1)&&.01>Math.abs(t-o.y1)?a.push(o.x2,o.y2):a.push(o.x1,o.y1)}}a.length>=4&&t.push(a)}return t}destroy(){for(let e of(this._edgeMap.clear(),this._regionEdges.clear(),this._vtxToRegions.clear(),this._edgeClassification.clear(),this._externalEdgeKeys.clear(),this._cachedChains.clear(),this._edgeKeyToChainId.clear(),this._chainEndpoints.clear(),this._externalByStyle.clear(),this._conquestClumpRegions.clear(),this._conquestTakerRegions.clear(),this._internalMesh.destroy(),this._externalMeshes.values()))e.mesh.destroy();this._externalMeshes.clear(),this.container.destroy({children:!0})}_updateZoomUniforms(e){let t,i=2*eo/(256*Math.pow(2,e));for(let r of(t=e<=this._fadeStartZoom?0:e>=this._fadeEndZoom?1:(e-this._fadeStartZoom)/(this._fadeEndZoom-this._fadeStartZoom),this._internalMesh.updateForZoom(i),this._externalMeshes.values()))r.mesh.updateForZoom(i);this._internalMesh.setAlpha(.135*t)}_removeInternalMesh(){this._internalMesh.mesh?.parent===this.container&&this.container.removeChild(this._internalMesh.mesh)}_addInternalMesh(){let e=this._internalMesh.mesh;e&&(e.label="borders:internal",this.container.addChildAt(e,0))}_removeExternalMeshes(){for(let e of this._externalMeshes.values())e.mesh.mesh?.parent===this.container&&this.container.removeChild(e.mesh.mesh),e.mesh.destroy();this._externalMeshes.clear()}_rebuildExternalMeshes(){this._classifyAllEdges(),this._buildExternalChains(),this._recreateMeshes()}_reclassifyRegionEdges(e){let t=new Set;for(let i of e){let e=this._regionEdges.get(i);if(e)for(let i of e)t.add(i)}let i=[],r=[],a=new Set;for(let e of t)this._edgeClassification.get(e)&&a.add(e);for(let e of t){let t=this._edgeMap.get(e);if(!t)continue;let a=this._edgeClassification.get(e)??!1,s=this._isExternalEdge(t);a!==s&&(this._edgeClassification.set(e,s),s?(this._externalEdgeKeys.add(e),r.push(e)):(this._externalEdgeKeys.delete(e),i.push(e)))}this._demoteBoundaryMismatchEdges();let s=new Set(r),o=new Set(i);for(let e of t){let t=this._edgeClassification.get(e)??!1;s.has(e)&&!t?(s.delete(e),o.add(e)):!s.has(e)&&!o.has(e)&&!t&&a.has(e)&&o.add(e)}let n=[...s],l=[...o];return 0===l.length&&0===n.length?null:{removed:l,added:n}}_classifyAllEdges(){for(let[e,t]of(this._externalEdgeKeys.clear(),this._edgeMap)){let i=this._isExternalEdge(t);this._edgeClassification.set(e,i),i&&this._externalEdgeKeys.add(e)}this._demoteBoundaryMismatchEdges()}_buildExternalChains(){this._cachedChains.clear(),this._edgeKeyToChainId.clear(),this._chainEndpoints.clear(),this._nextChainId=0,this._buildAndRegisterChains(this._externalEdgeKeys),this._rebuildStyleFromCache()}_patchChains(e,t){let i=(e,t)=>`${e},${t}`,r=new Set;for(let t of e){let e=this._edgeKeyToChainId.get(t);void 0!==e&&r.add(e)}for(let e of t){let t=this._edgeMap.get(e);if(!t)continue;let a=i(t.x1,t.y1),s=i(t.x2,t.y2),o=this._chainEndpoints.get(a),n=this._chainEndpoints.get(s);if(o)for(let e of o)r.add(e.chainId);if(n)for(let e of n)r.add(e.chainId)}let a=new Set(e),s=new Set;for(let e of r){let t=this._cachedChains.get(e);if(t){for(let e of t.edgeKeys)a.has(e)||s.add(e);this._unregisterChain(e)}}for(let e of t)s.add(e);s.size>0&&this._buildAndRegisterChains(s),this._rebuildStyleFromCache()}_buildAndRegisterChains(e){let t=(e,t)=>`${e},${t}`,i=new Map;for(let t of e){var r,a,s;let e=this._edgeMap.get(t);if(!e)continue;let o=this._edgeStrokeStyle(e),n=(r=o.widthPx,a=o.color,s=o.alpha,`${r}|${a}|${s}`),l=i.get(n);l||(l={edges:[],...o},i.set(n,l)),l.edges.push({key:t,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2})}for(let[e,r]of i){let i=r.edges,a=new Map;for(let e=0;e<i.length;e++){let r=i[e],s=t(r.x1,r.y1),o=t(r.x2,r.y2),n=a.get(s);n||(n=[],a.set(s,n)),n.push({edgeIdx:e,otherKey:o,ox:r.x2,oy:r.y2});let l=a.get(o);l||(l=[],a.set(o,l)),l.push({edgeIdx:e,otherKey:s,ox:r.x1,oy:r.y1})}let s=new Set;for(let o=0;o<i.length;o++){if(s.has(o))continue;s.add(o);let n=i[o],l=[n.x2,n.y2],h=[],u=t(n.x2,n.y2);for(;;){let e=a.get(u);if(!e)break;let t=!1;for(let r of e)if(!s.has(r.edgeIdx)){s.add(r.edgeIdx),l.push(r.ox,r.oy),h.push(i[r.edgeIdx].key),u=r.otherKey,t=!0;break}if(!t)break}let f=[],d=[];for(u=t(n.x1,n.y1);;){let e=a.get(u);if(!e)break;let t=!1;for(let r of e)if(!s.has(r.edgeIdx)){s.add(r.edgeIdx),f.push(r.ox,r.oy),d.push(i[r.edgeIdx].key),u=r.otherKey,t=!0;break}if(!t)break}let c=[],p=[];for(let e=f.length-2;e>=0;e-=2)c.push(f[e],f[e+1]);for(let e=d.length-1;e>=0;e--)p.push(d[e]);c.push(n.x1,n.y1),p.push(n.key);for(let e=0;e<l.length;e++)c.push(l[e]);for(let e of h)p.push(e);if(c.length>=4){let t=this._nextChainId++,i=`${c[0]},${c[1]}`,a=`${c[c.length-2]},${c[c.length-1]}`;for(let s of(this._cachedChains.set(t,{coords:c,edgeKeys:p,startVtx:i,endVtx:a,styleKey:e,widthPx:r.widthPx,color:r.color,alpha:r.alpha}),p))this._edgeKeyToChainId.set(s,t);this._addChainEndpoint(i,t,!0),i!==a&&this._addChainEndpoint(a,t,!1)}}}}_unregisterChain(e){let t=this._cachedChains.get(e);if(t){for(let e of t.edgeKeys)this._edgeKeyToChainId.delete(e);this._removeChainEndpoint(t.startVtx,e),t.startVtx!==t.endVtx&&this._removeChainEndpoint(t.endVtx,e),this._cachedChains.delete(e)}}_addChainEndpoint(e,t,i){let r=this._chainEndpoints.get(e);r||(r=[],this._chainEndpoints.set(e,r)),r.push({chainId:t,isStart:i})}_removeChainEndpoint(e,t){let i=this._chainEndpoints.get(e);if(!i)return;let r=i.findIndex(e=>e.chainId===t);r>=0&&i.splice(r,1),0===i.length&&this._chainEndpoints.delete(e)}_styleChainOrder=new Map;_rebuildStyleFromCache(){for(let[e,t]of(this._externalByStyle.clear(),this._styleChainOrder.clear(),this._cachedChains)){let i=this._externalByStyle.get(t.styleKey);i||(i={chains:[],widthPx:t.widthPx,color:t.color,alpha:t.alpha},this._externalByStyle.set(t.styleKey,i)),i.chains.push(t.coords);let r=this._styleChainOrder.get(t.styleKey);r||(r=[],this._styleChainOrder.set(t.styleKey,r)),r.push(e)}}_recreateMeshes(){this._removeExternalMeshes(),this._chainVertexRanges.clear();let e=2*eo;for(let[t,i]of this._externalByStyle){let r=new e2(i.color,i.alpha,i.widthPx);r.tessellateChains(i.chains),this._externalMeshes.set(t,{mesh:r,...i});let a=r.mesh;if(a&&(a.label=`borders:external(${t})`,this.container.addChild(a)),!this.skipGhosts)for(let t of[-2,-1,1,2])this._addGhostMesh(r,t*e);let s=this._styleChainOrder.get(t);if(s){let e=0;for(let r=0;r<s.length;r++){let a=i.chains[r].length/2;if(a<2)continue;let o=2*a;this._chainVertexRanges.set(s[r],{styleKey:t,vertexStart:e,vertexCount:o}),e+=o}}}this._updateZoomUniforms(this._currentZoom)}_addGhostMesh(e,t){let i=e.createGhostMesh(t);i&&this.container.addChild(i)}_buildEdgeMap(){this._edgeMap.clear(),this._regionEdges.clear(),this._edgeClassification.clear(),this._externalEdgeKeys.clear(),this._cachedChains.clear(),this._edgeKeyToChainId.clear(),this._chainEndpoints.clear(),this._nextChainId=0;let e=new Map;for(let[t,i]of this._regions){let r=this._regionEdges.get(t);r||(r=[],this._regionEdges.set(t,r));let a=new Map;for(let e of i.rings)if(!(e.length<6))for(let i=0;i<e.length-2;i+=2){let s=e[i],o=e[i+1],n=e[i+2],l=e[i+3];if(s===n&&o===l)continue;let h=e1._edgeKey(s,o,n,l),u=this._edgeMap.get(h);u?u.regions.includes(t)||u.regions.push(t):this._edgeMap.set(h,{x1:s,y1:o,x2:n,y2:l,regions:[t]}),r.push(h),a.set(h,(a.get(h)??0)+1)}for(let[i,r]of a)if(r>1&&r%2==0){let r=e.get(i);r||(r=new Set,e.set(i,r)),r.add(t)}}for(let[t,i]of e){let e=this._edgeMap.get(t);if(e){for(let t of i){let i=e.regions.indexOf(t);i>=0&&e.regions.splice(i,1)}0===e.regions.length&&this._edgeMap.delete(t)}}for(let e of(this._vtxToRegions.clear(),this._edgeMap.values())){let t=`${e.x1},${e.y1}`,i=`${e.x2},${e.y2}`;for(let r of e.regions){let e=this._vtxToRegions.get(t);e||(e=[],this._vtxToRegions.set(t,e)),e.includes(r)||e.push(r);let a=this._vtxToRegions.get(i);a||(a=[],this._vtxToRegions.set(i,a)),a.includes(r)||a.push(r)}}}static _edgeKey(e,t,i,r){return e<i||e===i&&t<r?`${e},${t};${i},${r}`:`${i},${r};${e},${t}`}_edgeStrokeStyle(e){for(let t of e.regions){let e=this._regions.get(t);if(e)return{widthPx:e.strokeWidthPx??1.5,color:e.strokeColor??1118481,alpha:e.strokeAlpha??.66}}return{widthPx:1.5,color:1118481,alpha:.66}}_demoteBoundaryMismatchEdges(){let e=new Map;for(let t of this._externalEdgeKeys){let i=this._edgeMap.get(t);if(!i||1!==i.regions.length)continue;let r=i.regions[0],a=e.get(r);a||(a=[],e.set(r,a)),a.push({key:t,entry:i})}for(let[t,i]of e){let e=this._ownershipMap.get(t)??null;if(null===e)continue;let r=new Map;for(let{key:e,entry:t}of i){let i=`${t.x1},${t.y1}`,a=`${t.x2},${t.y2}`,s=r.get(i);s||(s=[],r.set(i,s)),s.push({edgeKey:e,otherVtx:a});let o=r.get(a);o||(o=[],r.set(a,o)),o.push({edgeKey:e,otherVtx:i})}let a=new Set;for(let{key:s,entry:o}of i){if(a.has(s))continue;a.add(s);let i=[s],n=`${o.x1},${o.y1}`,l=`${o.x2},${o.y2}`,h=n,u=l;for(;;){let e=r.get(u);if(!e)break;let t=!1;for(let r of e)if(!a.has(r.edgeKey)){a.add(r.edgeKey),i.push(r.edgeKey),u=r.otherVtx,t=!0;break}if(!t)break}let f=u;for(u=n;;){let e=r.get(u);if(!e)break;let t=!1;for(let r of e)if(!a.has(r.edgeKey)){a.add(r.edgeKey),i.unshift(r.edgeKey),u=r.otherVtx,t=!0;break}if(!t)break}h=u;let d=this._vtxToRegions.get(h),c=this._vtxToRegions.get(f);if(!d||!c)continue;let p=!1;for(let i of d)if(i!==t&&c.includes(i)&&(this._ownershipMap.get(i)??null)===e){p=!0;break}if(p)for(let e of i)this._edgeClassification.set(e,!1),this._externalEdgeKeys.delete(e)}}}getDebugEdgesForRegions(e){let t=[],i=new Set,r=0;for(let a of e){let e=this._regionEdges.get(a);if(e)for(let a of e){let e;if(i.has(a))continue;i.add(a);let s=this._edgeMap.get(a);if(!s)continue;let o=this._edgeClassification.get(a)??!1,n=this._isExternalEdge(s)&&!o,l=s.regions.map(e=>this._ownershipMap.get(e)??null);if(1===s.regions.length){let t=l[0];e=null!==t?`coastline, owned by ${t}`:"coastline, unowned"}else{let t=[...new Set(l.map(e=>e??"null"))];e=t.length>1?`shared, different owners: ${t.join(", ")}`:`shared, same owner: ${t[0]}`}n&&(e+=" [DEMOTED by boundary mismatch]"),t.push({index:r++,key:a,x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,regions:[...s.regions],owners:l,isExternal:o,wasDemoted:n,reason:e})}}return t}_isExternalEdge(e){let{regions:t}=e;if(this._conquestClumpRegions.size>0&&t.length>=2){let e=t.some(e=>this._conquestClumpRegions.has(e)),i=t.some(e=>this._conquestTakerRegions.has(e));if(e&&i)return!1}if(this._invisibleRegionIds.size>0&&t.every(e=>this._invisibleRegionIds.has(e)))return!1;if(1===t.length)return null!==(this._ownershipMap.get(t[0])??null);if(2===t.length)return(this._ownershipMap.get(t[0])??null)!==(this._ownershipMap.get(t[1])??null);let i=this._ownershipMap.get(t[0])??null;for(let e=1;e<t.length;e++)if((this._ownershipMap.get(t[e])??null)!==i)return!0;return!1}}e.s(["BorderLayer",()=>e1],694409);var e3=e.i(16203);class e5{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:r=.25,fontFamily:a="sans-serif",fontWeight:s="normal",fontStyle:o="normal",lang:n=null}={}){this.buffer=t,this.cutoff=r,this.radius=i,this.lang=n;const l=this.size=e+4*t,h=this._createCanvas(l),u=this.ctx=h.getContext("2d",{willReadFrequently:!0});u.font=`${o} ${s} ${e}px ${a}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){let t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:a,actualBoundingBoxRight:s}=this.ctx.measureText(e),o=Math.ceil(i),n=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s-a))),l=Math.min(this.size-this.buffer,o+Math.ceil(r)),h=n+2*this.buffer,u=l+2*this.buffer,f=Math.max(h*u,0),d=new Uint8ClampedArray(f),c={data:d,width:h,height:u,glyphWidth:n,glyphHeight:l,glyphTop:o,glyphLeft:0,glyphAdvance:t};if(0===n||0===l)return c;let{ctx:p,buffer:m,gridInner:_,gridOuter:g}=this;this.lang&&(p.lang=this.lang),p.clearRect(m,m,n,l),p.fillText(e,m,m+o);let y=p.getImageData(m,m,n,l);g.fill(1e20,0,f),_.fill(0,0,f);for(let e=0;e<l;e++)for(let t=0;t<n;t++){let i=y.data[4*(e*n+t)+3]/255;if(0===i)continue;let r=(e+m)*h+t+m;if(1===i)g[r]=0,_[r]=1e20;else{let e=.5-i;g[r]=e>0?e*e:0,_[r]=e<0?e*e:0}}e4(g,0,0,h,u,h,this.f,this.v,this.z),e4(_,m,m,n,l,h,this.f,this.v,this.z);for(let e=0;e<f;e++){let t=Math.sqrt(g[e])-Math.sqrt(_[e]);d[e]=Math.round(255-255*(t/this.radius+this.cutoff))}return c}}function e4(e,t,i,r,a,s,o,n,l){for(let h=t;h<t+r;h++)e6(e,i*s+h,s,a,o,n,l);for(let h=i;h<i+a;h++)e6(e,h*s+t,1,r,o,n,l)}function e6(e,t,i,r,a,s,o){s[0]=0,o[0]=-1e20,o[1]=1e20,a[0]=e[t];for(let n=1,l=0,h=0;n<r;n++){a[n]=e[t+n*i];let r=n*n;do{let e=s[l];h=(a[n]-a[e]+r-e*e)/(n-e)/2}while(h<=o[l]&&--l>-1)s[++l]=n,o[l]=h,o[l+1]=1e20}for(let n=0,l=0;n<r;n++){for(;o[l+1]<n;)l++;let r=s[l],h=n-r;e[t+n*i]=a[r]+h*h}}class e8{texture;glyphs;cellHeight;_canvas;_ctx;_sdf;_fontAscent;_shelfX=0;_shelfY=0;_dirty=!1;constructor(){const e=document.createElement("canvas").getContext("2d");e.font="bold 48px serif";const t=e.measureText("M"),i=Math.ceil(t.fontBoundingBoxAscent??t.actualBoundingBoxAscent??38.400000000000006),r=Math.ceil(t.fontBoundingBoxDescent??t.actualBoundingBoxDescent??9.600000000000001);this._fontAscent=i,this.cellHeight=Math.max(i+r+6+4,67),this._sdf=new e5({fontSize:48,buffer:3,radius:8,cutoff:.5,fontFamily:"serif",fontWeight:"bold"});const a=document.createElement("canvas");a.width=2048,a.height=2048;const s=a.getContext("2d",{willReadFrequently:!1});this._canvas=a,this._ctx=s,this.glyphs=new Map,this._renderGlyph(" ");const o=new e3.ImageSource({resource:a,scaleMode:"linear",autoGenerateMipmaps:!0,alphaMode:"premultiplied-alpha"});this.texture=new eF.Texture({source:o}),this._dirty=!1}ensureGlyphs(e){for(let t of e)this.glyphs.has(t)||this._renderGlyph(t);this._flush()}getGlyph(e){let t=this.glyphs.get(e);return t||(this._renderGlyph(e),this._flush(),t=this.glyphs.get(e)??this.glyphs.get(" ")),t}destroy(){this.texture.destroy(!0)}_renderGlyph(e){let{data:t,width:i,height:r,glyphTop:a}=this._sdf.draw(e),s=i+4;if(this._shelfX+s>2048&&(this._shelfX=0,this._shelfY+=this.cellHeight),this._shelfY+this.cellHeight>2048)return void console.warn(`[GlyphAtlas] Atlas full — cannot render '${e}'. Falling back to space glyph.`);if(" "!==e&&i>0&&r>0){let e=2+this._fontAscent-a,s=new Uint8ClampedArray(i*r*4);for(let e=0;e<i*r;e++){let i=t[e];s[4*e]=i,s[4*e+1]=i,s[4*e+2]=i,s[4*e+3]=255}let o=new ImageData(s,i,r);this._ctx.putImageData(o,this._shelfX+2,this._shelfY+e)}this.glyphs.set(e,{atlasRect:[this._shelfX/2048,this._shelfY/2048,s/2048,this.cellHeight/2048],size:[s,this.cellHeight]}),this._shelfX+=s,this._dirty=!0}_flush(){this._dirty&&(this.texture.source.update(),this._dirty=!1)}}let e7=null;function e9(){return e7||(e7=new e8),e7}let te=`

// ── Styling constants (must match LabelLineLayer.ts) ─────────────────

const RENDER_FONT_SIZE: f32 = 48.0;
const AVG_CHAR_WIDTH_FACTOR: f32 = 0.85;
const MARGIN_FACTOR: f32 = 0.73;
const BASE_OPACITY: f32 = 0.75;
const MIN_FONT_SIZE: f32 = 10.0;
const MAX_FONT_SIZE: f32 = 26.0;
const MIN_FONT_SIZE_FADE_FACTOR: f32 = 0.66;
const MAX_FONT_SIZE_FADE_FACTOR: f32 = 5.0;

// ── Bind group 0: PixiJS global uniforms ─────────────────────────────

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};

@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

// ── Bind group 1: PixiJS local uniforms ──────────────────────────────

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};

@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

// ── Bind group 2: atlas texture + label uniforms ─────────────────────

@group(2) @binding(0) var uAtlasTexture: texture_2d<f32>;
@group(2) @binding(1) var uAtlasSampler: sampler;

struct LabelUniforms {
    uMetersPerPixel: f32,
};

@group(2) @binding(2) var<uniform> labelUniforms: LabelUniforms;

// ── Vertex I/O ───────────────────────────────────────────────────────

struct VertexInput {
    // Per-vertex (shared unit quad — 4 vertices)
    @location(0) aQuadPos: vec2<f32>,    // [-0.5 .. 0.5]
    @location(1) aQuadUV: vec2<f32>,     // [0 .. 1]
    // Per-instance (one per character)
    @location(2) aWorldPos: vec2<f32>,   // Mercator meters
    @location(3) aRotation: f32,         // tangent angle along label line
    @location(4) aAtlasRect: vec4<f32>,  // (u, v, w, h) in atlas — normalized
    @location(5) aGlyphSize: vec2<f32>,  // glyph pixel dimensions
    @location(6) aLabelInfo: vec2<f32>,  // (lineLengthM, nameLen)
    @location(7) aInstanceAlpha: f32,    // per-label alpha override (0..1)
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vUV: vec2<f32>,
    @location(1) vOpacity: f32,
};

// ── Vertex shader ────────────────────────────────────────────────────

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let mpp = labelUniforms.uMetersPerPixel;

    // ── Compute font size from label metadata ──
    let lineLengthPx = input.aLabelInfo.x / mpp;
    let nameLen = input.aLabelInfo.y;
    let capacity = lineLengthPx * MARGIN_FACTOR;
    let rawFontSize = capacity / (nameLen * AVG_CHAR_WIDTH_FACTOR);

    // ── Compute opacity with fade at extremes ──
    let lowerFadeEnd = MIN_FONT_SIZE * MIN_FONT_SIZE_FADE_FACTOR;
    let upperFadeEnd = MAX_FONT_SIZE * MAX_FONT_SIZE_FADE_FACTOR;
    var opacity = BASE_OPACITY;

    if (rawFontSize < MIN_FONT_SIZE) {
        let t = (rawFontSize - lowerFadeEnd) / (MIN_FONT_SIZE - lowerFadeEnd);
        opacity = BASE_OPACITY * clamp(t, 0.0, 1.0);
    } else if (rawFontSize > MAX_FONT_SIZE) {
        let t = (upperFadeEnd - rawFontSize) / (upperFadeEnd - MAX_FONT_SIZE);
        opacity = BASE_OPACITY * clamp(t, 0.0, 1.0);
    }

    // Use rawFontSize for the scale calculation (not the clamped value) so that
    // the glyph size stays proportional to the line length at all zoom levels.
    // When rawFontSize is clamped (too small or too large), using the clamped
    // value would cause the scale to change with mpp even though the line length
    // is tracking it — resulting in visual shrinking during the opacity fade.
    // Using rawFontSize keeps scale = rawFontSize * mpp / RENDER_FONT_SIZE
    //   = (lineLengthPx * MARGIN_FACTOR / nameLen / AVG_CHAR_WIDTH_FACTOR) * mpp / RENDER_FONT_SIZE
    //   ∝ lineLengthM (constant in world space) → no visual size change during fade.
    let fontSize = rawFontSize;

    // Apply per-instance alpha before the visibility check
    opacity = opacity * input.aInstanceAlpha;

    // ── Collapse invisible chars to degenerate triangle ──
    if (opacity < 0.05) {
        var out: VertexOutput;
        out.position = vec4<f32>(0.0, 0.0, 0.0, 1.0);
        out.vUV = vec2<f32>(0.0, 0.0);
        out.vOpacity = 0.0;
        return out;
    }

    // ── Scale quad by glyph size ──
    let scale = (fontSize * mpp) / RENDER_FONT_SIZE;
    var localPos = vec2<f32>(
        input.aQuadPos.x * input.aGlyphSize.x * scale,
        input.aQuadPos.y * input.aGlyphSize.y * -scale  // -Y for Mercator flip
    );

    // ── Rotate by line tangent ──
    let cosR = cos(input.aRotation);
    let sinR = sin(input.aRotation);
    let rotated = vec2<f32>(
        localPos.x * cosR - localPos.y * sinR,
        localPos.x * sinR + localPos.y * cosR,
    );

    // ── World position + MVP projection ──
    let worldPos = input.aWorldPos + rotated;
    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;
    let clip = mvp * vec3<f32>(worldPos, 1.0);

    // ── Remap quad UV to atlas sub-region ──
    let atlasUV = input.aAtlasRect.xy + input.aQuadUV * input.aAtlasRect.zw;

    var out: VertexOutput;
    out.position = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vUV = atlasUV;
    out.vOpacity = opacity;
    return out;
}

// ── Fragment shader (SDF) ────────────────────────────────────────────
//
// The atlas stores a signed distance field: values above SDF_CUTOFF are
// inside the glyph, below are outside. smoothstep + fwidth give crisp
// anti-aliased edges at any zoom. Outline is a second threshold further
// from the edge.

const SDF_EDGE: f32 = 0.5;
const OUTLINE_FACTOR: f32 = 0.26;
const MIN_OUTLINE_PX: f32 = 2.0;
const FILL_COLOR = vec3<f32>(1.0, 1.0, 1.0);
const OUTLINE_COLOR = vec3<f32>(0.0, 0.0, 0.0);

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    let dist = textureSample(uAtlasTexture, uAtlasSampler, input.vUV).r;
    let fw = fwidth(dist);
    let smoothing = fw * 0.5;

    let fillAlpha = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, dist);

    // At small sizes fw is large, so the natural outline compresses into
    // sub-pixel territory. Guarantee a minimum screen-pixel width by pushing
    // the outer edge out when needed.
    let naturalEdge = SDF_EDGE * OUTLINE_FACTOR;
    let minPxEdge = SDF_EDGE - MIN_OUTLINE_PX * fw;
    let outlineEdge = min(naturalEdge, max(minPxEdge, 0.0));

    let outlineAlpha = smoothstep(outlineEdge - smoothing, SDF_EDGE, dist);

    let color = mix(OUTLINE_COLOR, FILL_COLOR, fillAlpha);
    let alpha = outlineAlpha * input.vOpacity * localUniforms.uColor.a;
    return vec4<f32>(color * alpha, alpha);
}

`,tt=`#version 300 es
in vec2 aQuadPos;
in vec2 aQuadUV;
in vec2 aWorldPos;
in float aRotation;
in vec4 aAtlasRect;
in vec2 aGlyphSize;
in vec2 aLabelInfo;
in float aInstanceAlpha;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uMetersPerPixel;

out vec2 vUV;
out float vOpacity;

const float RENDER_FONT_SIZE = 48.0;
const float AVG_CHAR_WIDTH_FACTOR = 0.85;
const float MARGIN_FACTOR = 0.73;
const float BASE_OPACITY = 0.75;
const float MIN_FONT_SIZE = 10.0;
const float MAX_FONT_SIZE = 26.0;
const float MIN_FONT_SIZE_FADE_FACTOR = 0.66;
const float MAX_FONT_SIZE_FADE_FACTOR = 5.0;

void main() {
    float mpp = uMetersPerPixel;

    float lineLengthPx = aLabelInfo.x / mpp;
    float nameLen = aLabelInfo.y;
    float capacity = lineLengthPx * MARGIN_FACTOR;
    float rawFontSize = capacity / (nameLen * AVG_CHAR_WIDTH_FACTOR);

    float lowerFadeEnd = MIN_FONT_SIZE * MIN_FONT_SIZE_FADE_FACTOR;
    float upperFadeEnd = MAX_FONT_SIZE * MAX_FONT_SIZE_FADE_FACTOR;
    float opacity = BASE_OPACITY;

    if (rawFontSize < MIN_FONT_SIZE) {
        float t = (rawFontSize - lowerFadeEnd) / (MIN_FONT_SIZE - lowerFadeEnd);
        opacity = BASE_OPACITY * clamp(t, 0.0, 1.0);
    } else if (rawFontSize > MAX_FONT_SIZE) {
        float t = (upperFadeEnd - rawFontSize) / (upperFadeEnd - MAX_FONT_SIZE);
        opacity = BASE_OPACITY * clamp(t, 0.0, 1.0);
    }

    float fontSize = rawFontSize;
    opacity *= aInstanceAlpha;

    if (opacity < 0.05) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        vUV = vec2(0.0);
        vOpacity = 0.0;
        return;
    }

    float scale = (fontSize * mpp) / RENDER_FONT_SIZE;
    vec2 localPos = vec2(
        aQuadPos.x * aGlyphSize.x * scale,
        aQuadPos.y * aGlyphSize.y * -scale
    );

    float cosR = cos(aRotation);
    float sinR = sin(aRotation);
    vec2 rotated = vec2(
        localPos.x * cosR - localPos.y * sinR,
        localPos.x * sinR + localPos.y * cosR
    );

    vec2 worldPos = aWorldPos + rotated;
    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    gl_Position = vec4(clip.xy, 0.0, 1.0);
    vUV = aAtlasRect.xy + aQuadUV * aAtlasRect.zw;
    vOpacity = opacity;
}
`,ti=`#version 300 es
precision highp float;

uniform sampler2D uAtlasTexture;
uniform vec4 uColor;

in vec2 vUV;
in float vOpacity;
out vec4 finalColor;

const float SDF_EDGE = 0.5;
const float OUTLINE_FACTOR = 0.26;
const float MIN_OUTLINE_PX = 2.0;
const vec3 FILL_COLOR = vec3(1.0, 1.0, 1.0);
const vec3 OUTLINE_COLOR = vec3(0.0, 0.0, 0.0);

void main() {
    float dist = texture(uAtlasTexture, vUV).r;
    float fw = fwidth(dist);
    float smoothing = fw * 0.5;

    float fillAlpha = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, dist);

    float naturalEdge = SDF_EDGE * OUTLINE_FACTOR;
    float minPxEdge = SDF_EDGE - MIN_OUTLINE_PX * fw;
    float outlineEdge = min(naturalEdge, max(minPxEdge, 0.0));

    float outlineAlpha = smoothstep(outlineEdge - smoothing, SDF_EDGE, dist);

    vec3 color = mix(OUTLINE_COLOR, FILL_COLOR, fillAlpha);
    float alpha = outlineAlpha * vOpacity * uColor.a;
    finalColor = vec4(color * alpha, alpha);
}
`,tr=null;function ta(){return tr||(tr=new ez.GpuProgram({vertex:{source:te,entryPoint:"vsMain"},fragment:{source:te,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),tr}let ts=null;function to(){return ts||(ts=new eI.GlProgram({vertex:tt,fragment:ti})),ts}function tn(e,t,i){let r=0;for(let a=0;a<t.length;a++){let s=t[a];if(r+s>=i||a===t.length-1){let t=s>0?Math.max(0,Math.min(1,(i-r)/s)):0,o=e[2*a],n=e[2*a+1],l=e[2*a+2],h=e[2*a+3];return{x:o+t*(l-o),y:n+t*(h-n),angle:Math.atan2(h-n,l-o)}}r+=s}let a=e.length;return{x:e[a-2],y:e[a-1],angle:0}}class tl{container;_labels=[];_textMesh=null;_textGeometry=null;_textShader=null;_atlas=null;_ghostTextMeshes=[];_instanceAlphaData=null;_currentZoom=0;_dirty=!0;skipGhosts=!1;constructor(){this.container=new p.Container({label:"labelLines"})}setLines(e){this._destroyGpuResources(),this._labels=[],this._atlas||(this._atlas=e9());let t=this._atlas;for(let i of e)t.ensureGlyphs(i.ownerName.toUpperCase());let i=[];for(let r of e){if(r.coordinates.length<2)continue;let e=[];for(let[t,i]of r.coordinates){let r=en(t,i);e.push(r.x,r.y)}let a=[],s=0;for(let t=2;t<e.length;t+=2){let i=e[t]-e[t-2],r=e[t+1]-e[t-1],o=Math.sqrt(i*i+r*r);a.push(o),s+=o}if(s<1)continue;let o=e[e.length-2]-e[0];if(Math.abs(Math.atan2(e[e.length-1]-e[1],o))>Math.PI/2){for(let t=0;t<e.length/2;t+=2){let i=e.length-2-t,r=e[t],a=e[t+1];e[t]=e[i],e[t+1]=e[i+1],e[i]=r,e[i+1]=a}a.reverse()}let n=i.length,l=r.ownerName.toUpperCase().split(""),h=l.length,u=.834*s,f=(s-u)/2;if(h<=1){if(1===h&&" "!==l[0]){let r=tn(e,a,s/2),o=t.getGlyph(l[0]);i.push({worldX:r.x,worldY:r.y,rotation:r.angle,atlasRect:o.atlasRect,glyphSize:o.size,lineLengthM:s,nameLen:h,char:l[0]})}}else{let r=.73*s/(.85*h*48),o=l.map(e=>t.getGlyph(e).size[0]),n=o.reduce((e,t)=>e+t,0)*r,d=h-1,c=d>0?Math.max(0,(u-n)/d):0,p=f+o[0]*r/2;for(let n=0;n<h;n++){if(n>0&&(p+=o[n-1]*r/2+c+o[n]*r/2)," "===l[n])continue;let u=tn(e,a,p),f=t.getGlyph(l[n]);i.push({worldX:u.x,worldY:u.y,rotation:u.angle,atlasRect:f.atlasRect,glyphSize:f.size,lineLengthM:s,nameLen:h,char:l[n]})}}this._labels.push({ownerName:r.ownerName,flat:e,segLens:a,lineLengthM:s,instanceStart:n,instanceEnd:i.length})}if(i.length>0&&this._buildTextMesh(i,t),!this.skipGhosts){let e=2*eo;if(i.length>0)for(let r of[-2,-1,1,2])this._buildGhostTextMesh(i,t,r*e)}this._dirty=!0}updateForZoom(e){let t=Math.abs(e-this._currentZoom)>=.01;if(this._dirty){this._currentZoom=e,this._dirty=!1,this._updateZoomUniforms(e);return}t&&(this._currentZoom=e,this._updateZoomUniforms(e))}updateWrapping(e,t,i){let r=i/2*(2*eo/(256*Math.pow(2,t))),a=e-r,s=e+r;for(let e of this._ghostTextMeshes)e.mesh.visible=e.xOffset<0?a<eo+e.xOffset:s>-eo+e.xOffset}setAlpha(e){for(let t of(this._textMesh&&(this._textMesh.alpha=e),this._ghostTextMeshes))t.mesh.alpha=e}setLabelAlpha(e,t){let i=this._instanceAlphaData;if(!i)return;let r=!1;for(let a of this._labels)if(a.ownerName===e){for(let e=a.instanceStart;e<a.instanceEnd;e++)i[e]=t;r=!0}if(r)for(let e of(this._textGeometry&&this._textGeometry.getAttribute("aInstanceAlpha").buffer.update(),this._ghostTextMeshes))e.geometry.getAttribute("aInstanceAlpha").buffer.update()}resetAllLabelAlphas(){let e=this._instanceAlphaData;if(e)for(let t of(e.fill(1),this._textGeometry&&this._textGeometry.getAttribute("aInstanceAlpha").buffer.update(),this._ghostTextMeshes))t.geometry.getAttribute("aInstanceAlpha").buffer.update()}detachContent(){let e=new p.Container({label:"labelLines-snapshot"});for(;this.container.children.length>0;)e.addChild(this.container.children[0]);return this._textMesh=null,this._textGeometry=null,this._textShader=null,this._ghostTextMeshes=[],this._labels=[],e}destroy(){this._destroyGpuResources(),this._labels=[],this.container.destroy({children:!0})}_updateZoomUniforms(e){let t=2*eo/(256*Math.pow(2,e));for(let e of(this._textShader&&(this._textShader.resources.labelUniforms.uniforms.uMetersPerPixel=t),this._ghostTextMeshes))e.shader.resources.labelUniforms.uniforms.uMetersPerPixel=t}_buildTextMesh(e,t){let i=e.length,r=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),a=new Float32Array([0,0,1,0,1,1,0,1]),s=new Uint32Array([0,1,2,0,2,3]),o=new Float32Array(2*i),n=new Float32Array(i),l=new Float32Array(4*i),h=new Float32Array(2*i),u=new Float32Array(2*i),f=new Float32Array(i);f.fill(1);for(let t=0;t<i;t++){let i=e[t];o[2*t]=i.worldX,o[2*t+1]=i.worldY,n[t]=i.rotation,l[4*t]=i.atlasRect[0],l[4*t+1]=i.atlasRect[1],l[4*t+2]=i.atlasRect[2],l[4*t+3]=i.atlasRect[3],h[2*t]=i.glyphSize[0],h[2*t+1]=i.glyphSize[1],u[2*t]=i.lineLengthM,u[2*t+1]=i.nameLen}this._instanceAlphaData=f;let d=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,c=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST;this._textGeometry=new ek.Geometry({attributes:{aQuadPos:{buffer:new eP.Buffer({data:r,usage:d}),format:"float32x2"},aQuadUV:{buffer:new eP.Buffer({data:a,usage:d}),format:"float32x2"},aWorldPos:{buffer:new eP.Buffer({data:o,usage:d}),format:"float32x2",instance:!0},aRotation:{buffer:new eP.Buffer({data:n,usage:d}),format:"float32",instance:!0},aAtlasRect:{buffer:new eP.Buffer({data:l,usage:d}),format:"float32x4",instance:!0},aGlyphSize:{buffer:new eP.Buffer({data:h,usage:d}),format:"float32x2",instance:!0},aLabelInfo:{buffer:new eP.Buffer({data:u,usage:d}),format:"float32x2",instance:!0},aInstanceAlpha:{buffer:new eP.Buffer({data:f,usage:d}),format:"float32",instance:!0}},indexBuffer:new eP.Buffer({data:s,usage:c}),instanceCount:i}),this._textShader=new eN.Shader({gpuProgram:ta(),glProgram:to(),resources:{uAtlasTexture:t.texture.source,uAtlasSampler:t.texture.source.style,labelUniforms:{uMetersPerPixel:{value:0,type:"f32"}}}}),this._textMesh=new eY({geometry:this._textGeometry,shader:this._textShader}),this._textMesh.label="labelLines:text",this.container.addChild(this._textMesh)}_buildGhostTextMesh(e,t,i){if(!this._textGeometry)return;let r=e.length,a=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),s=new Float32Array([0,0,1,0,1,1,0,1]),o=new Uint32Array([0,1,2,0,2,3]),n=new Float32Array(2*r),l=new Float32Array(r),h=new Float32Array(4*r),u=new Float32Array(2*r),f=new Float32Array(2*r);for(let t=0;t<r;t++){let r=e[t];n[2*t]=r.worldX+i,n[2*t+1]=r.worldY,l[t]=r.rotation,h[4*t]=r.atlasRect[0],h[4*t+1]=r.atlasRect[1],h[4*t+2]=r.atlasRect[2],h[4*t+3]=r.atlasRect[3],u[2*t]=r.glyphSize[0],u[2*t+1]=r.glyphSize[1],f[2*t]=r.lineLengthM,f[2*t+1]=r.nameLen}let d=this._instanceAlphaData??new Float32Array(r).fill(1),c=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,p=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,m=new ek.Geometry({attributes:{aQuadPos:{buffer:new eP.Buffer({data:a,usage:c}),format:"float32x2"},aQuadUV:{buffer:new eP.Buffer({data:s,usage:c}),format:"float32x2"},aWorldPos:{buffer:new eP.Buffer({data:n,usage:c}),format:"float32x2",instance:!0},aRotation:{buffer:new eP.Buffer({data:l,usage:c}),format:"float32",instance:!0},aAtlasRect:{buffer:new eP.Buffer({data:h,usage:c}),format:"float32x4",instance:!0},aGlyphSize:{buffer:new eP.Buffer({data:u,usage:c}),format:"float32x2",instance:!0},aLabelInfo:{buffer:new eP.Buffer({data:f,usage:c}),format:"float32x2",instance:!0},aInstanceAlpha:{buffer:new eP.Buffer({data:d,usage:c}),format:"float32",instance:!0}},indexBuffer:new eP.Buffer({data:o,usage:p}),instanceCount:r}),_=new eN.Shader({gpuProgram:ta(),glProgram:to(),resources:{uAtlasTexture:t.texture.source,uAtlasSampler:t.texture.source.style,labelUniforms:{uMetersPerPixel:{value:0,type:"f32"}}}}),g=new eY({geometry:m,shader:_});g.label=`labelLines:text:ghost(${i>0?"+":""}${i})`,g.visible=!1,this.container.addChild(g),this._ghostTextMeshes.push({mesh:g,geometry:m,shader:_,xOffset:i})}_destroyGpuResources(){for(let e of this._ghostTextMeshes)e.mesh.parent&&e.mesh.parent.removeChild(e.mesh),e.mesh.destroy(),e.geometry.destroy(!0),e.shader.destroy();this._ghostTextMeshes=[],this._textMesh&&(this._textMesh.parent&&this._textMesh.parent.removeChild(this._textMesh),this._textMesh.destroy(),this._textMesh=null),this._textGeometry?.destroy(!0),this._textGeometry=null,this._textShader?.destroy(),this._textShader=null}}e.s(["LabelLineLayer",()=>tl],594230);var th=e.i(54008);function tu(e){if(!function(e){for(let t=1;t<e.length;t++)if(Math.abs(e[t][0]-e[t-1][0])>180)return!0;return!1}(e))return e;let t=[e[0]],i=e[0][0];for(let r=1;r<e.length;r++){let a=e[r][0],s=e[r][1];for(;a-i>180;)a-=360;for(;i-a>180;)a+=360;t.push([a,s]),i=a}return t}function tf(e){if(e.length<4)return e;let t=e.length>1&&e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1],i=t?e.slice(0,-1):e;if(i.length<3)return e;let r=Array(i.length).fill(!0);for(let e=0;e<i.length;e++){let t=(e-1+i.length)%i.length,a=(e+1)%i.length,s=i[e][0]-i[t][0],o=i[e][1]-i[t][1],n=i[a][0]-i[e][0],l=i[a][1]-i[e][1],h=Math.sqrt(s*s+o*o),u=Math.sqrt(n*n+l*l);if(0===h&&0===u){r[e]=!1;continue}if(0===h||0===u||(s*n+o*l)/(h*u)>-.9)continue;let f=Math.max(h,u);Math.abs(s*l-o*n)/(f*f)<.001&&(r[e]=!1)}let a=0;for(let e of r)e&&a++;if(a<3)return e;let s=i.filter((e,t)=>r[t]);return t&&s.push(s[0]),s}function td(e){let{flatCoords:t,holeIndices:i,bounds:r}=function(e){let t=[],i=[],r=1/0,a=1/0,s=-1/0,o=-1/0;for(let n=0;n<e.length;n++){let l=tu(tf(e[n])),h=t.length;for(let e=0;e<l.length;e++){let[i,u]=l[e],{x:f,y:d}=en(i,u);(!(t.length>h)||Math.fround(f)!==Math.fround(t[t.length-2])||Math.fround(d)!==Math.fround(t[t.length-1]))&&(t.push(f,d),0===n&&(f<r&&(r=f),d<a&&(a=d),f>s&&(s=f),d>o&&(o=d)))}t.length>=h+4&&Math.fround(t[t.length-2])===Math.fround(t[h])&&Math.fround(t[t.length-1])===Math.fround(t[h+1])&&(t.length-=2);let u=!0;for(;u;){u=!1;let e=(t.length-h)/2;if(e<4)break;let i=Array(e).fill(!0);for(let r=0;r<e;r++){let a=(r-1+e)%e,s=(r+1)%e,o=h+2*r,n=h+2*a,l=h+2*s,f=t[o]-t[n],d=t[o+1]-t[n+1],c=t[l]-t[o],p=t[l+1]-t[o+1],m=Math.sqrt(f*f+d*d),_=Math.sqrt(c*c+p*p);if(0===m&&0===_){i[r]=!1,u=!0;continue}if(0===m||0===_||(f*c+d*p)/(m*_)>-.9)continue;let g=Math.max(m,_);Math.abs(f*p-d*c)/(g*g)<.001&&(i[r]=!1,u=!0)}if(u){let r=0;for(let e of i)e&&r++;if(r<3)break;let a=[];for(let r=0;r<e;r++)i[r]&&a.push(t[h+2*r],t[h+2*r+1]);t.length=h;for(let e=0;e<a.length;e++)t.push(a[e])}}{let e=(t.length-h)/2;if(e>=3){let i=[];for(let r=0;r<e;r++){let e=t[h+2*r],a=t[h+2*r+1];i.length>=2&&Math.fround(e)===Math.fround(i[i.length-2])&&Math.fround(a)===Math.fround(i[i.length-1])||i.push(e,a)}if(i.length/2<e){t.length=h;for(let e=0;e<i.length;e++)t.push(i[e])}}}let f=(t.length-h)/2;if(f<3){t.length=h;continue}if(n>0){let e=0;for(let i=0;i<f;i++){let r=(i+1)%f;e+=t[h+2*i]*t[h+2*r+1]-t[h+2*r]*t[h+2*i+1]}if(Math.abs(e)/2<100){t.length=h;continue}i.push(h/2)}}return{flatCoords:t,holeIndices:i,bounds:{minX:r,minY:a,maxX:s,maxY:o}}}(e),a=(0,th.default)(t,i.length>0?i:void 0,2);return{positions:new Float32Array(t),indices:new Uint32Array(a),bounds:r,vertexCount:t.length/2}}function tc(e){if("Polygon"===e.type)return td(e.coordinates);let t=[];for(let i of e.coordinates)t.push(td(i));if(1===t.length)return t[0];let i=0,r=0,a=t[0].bounds;for(let e of t){var s,o;i+=e.positions.length,r+=e.indices.length,s=a,o=e.bounds,a={minX:Math.min(s.minX,o.minX),minY:Math.min(s.minY,o.minY),maxX:Math.max(s.maxX,o.maxX),maxY:Math.max(s.maxY,o.maxY)}}let n=new Float32Array(i),l=new Uint32Array(r),h=0,u=0,f=0;for(let e of t){n.set(e.positions,h);for(let t=0;t<e.indices.length;t++)l[u+t]=e.indices[t]+f;h+=e.positions.length,u+=e.indices.length,f+=e.vertexCount}return{positions:n,indices:l,bounds:a,vertexCount:f}}e.s(["removeRingSpikes",()=>tf,"triangulate",()=>tc,"triangulatePolygon",()=>td],269669);class tp{constructor(){this.ids=[],this.values=[],this.length=0}clear(){this.length=0}push(e,t){let i=this.length++;for(;i>0;){let e=i-1>>1,r=this.values[e];if(t>=r)break;this.ids[i]=this.ids[e],this.values[i]=r,i=e}this.ids[i]=e,this.values[i]=t}pop(){if(0===this.length)return;let e=this.ids,t=this.values,i=e[0],r=--this.length;if(r>0){let i=e[r],a=t[r],s=0,o=r>>1;for(;s<o;){let i=(s<<1)+1,o=i+1,n=i+(o<r&t[o]<t[i]);if(t[n]>=a)break;e[s]=e[n],t[s]=t[n],s=n}e[s]=i,t[s]=a}return i}peek(){return this.length>0?this.ids[0]:void 0}peekValue(){return this.length>0?this.values[0]:void 0}shrink(){this.ids.length=this.values.length=this.length}}let tm=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class t_{static from(e,t=0){if(t%8!=0)throw Error("byteOffset must be 8-byte aligned.");if(!e||void 0===e.byteLength||e.buffer)throw Error("Data must be an instance of ArrayBuffer or SharedArrayBuffer.");let[i,r]=new Uint8Array(e,t+0,2);if(251!==i)throw Error("Data does not appear to be in a Flatbush format.");let a=r>>4;if(3!==a)throw Error(`Got v${a} data when expected v3.`);let s=tm[15&r];if(!s)throw Error("Unrecognized array type.");let[o]=new Uint16Array(e,t+2,1),[n]=new Uint32Array(e,t+4,1);return new t_(n,o,s,void 0,e,t)}constructor(e,t=16,i=Float64Array,r=ArrayBuffer,a,s=0){if(void 0===e)throw Error("Missing required argument: numItems.");if(isNaN(e)||e<=0)throw Error(`Unexpected numItems value: ${e}.`);this.numItems=+e,this.nodeSize=Math.min(Math.max(+t,2),65535),this.byteOffset=s;let o=e,n=o;this._levelBounds=[4*o];do n+=o=Math.ceil(o/this.nodeSize),this._levelBounds.push(4*n);while(1!==o)this.ArrayType=i,this.IndexArrayType=n<16384?Uint16Array:Uint32Array;const l=tm.indexOf(i),h=4*n*i.BYTES_PER_ELEMENT;if(l<0)throw Error(`Unexpected typed array class: ${i}.`);if(a)this.data=a,this._boxes=new i(a,s+8,4*n),this._indices=new this.IndexArrayType(a,s+8+h,n),this._pos=4*n,this.minX=this._boxes[this._pos-4],this.minY=this._boxes[this._pos-3],this.maxX=this._boxes[this._pos-2],this.maxY=this._boxes[this._pos-1];else{const a=this.data=new r(8+h+n*this.IndexArrayType.BYTES_PER_ELEMENT);this._boxes=new i(a,8,4*n),this._indices=new this.IndexArrayType(a,8+h,n),this._pos=0,this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,new Uint8Array(a,0,2).set([251,48+l]),new Uint16Array(a,2,1)[0]=t,new Uint32Array(a,4,1)[0]=e}this._queue=new tp}add(e,t,i=e,r=t){let a=this._pos>>2,s=this._boxes;return this._indices[a]=a,s[this._pos++]=e,s[this._pos++]=t,s[this._pos++]=i,s[this._pos++]=r,e<this.minX&&(this.minX=e),t<this.minY&&(this.minY=t),i>this.maxX&&(this.maxX=i),r>this.maxY&&(this.maxY=r),a}finish(){if(this._pos>>2!==this.numItems)throw Error(`Added ${this._pos>>2} items when expected ${this.numItems}.`);let e=this._boxes;if(this.numItems<=this.nodeSize){e[this._pos++]=this.minX,e[this._pos++]=this.minY,e[this._pos++]=this.maxX,e[this._pos++]=this.maxY;return}let t=this.maxX-this.minX||1,i=this.maxY-this.minY||1,r=new Uint32Array(this.numItems);for(let a=0,s=0;a<this.numItems;a++){let o=e[s++],n=e[s++],l=e[s++],h=e[s++],u=Math.floor(65535*((o+l)/2-this.minX)/t),f=Math.floor(65535*((n+h)/2-this.minY)/i);r[a]=function(e,t){let i=e^t,r=65535^i,a=65535^(e|t),s=e&(65535^t),o=i|r>>1,n=i>>1^i,l=a>>1^r&s>>1^a,h=i&a>>1^s>>1^s;i=o,r=n,a=l,s=h,o=i&i>>2^r&r>>2,n=i&r>>2^r&(i^r)>>2,l^=i&a>>2^r&s>>2,h^=r&a>>2^(i^r)&s>>2,i=o,r=n,a=l,s=h,o=i&i>>4^r&r>>4,n=i&r>>4^r&(i^r)>>4,l^=i&a>>4^r&s>>4,h^=r&a>>4^(i^r)&s>>4,i=o,r=n,a=l,l^=i&a>>8^r&(s=h)>>8,h^=r&a>>8^(i^r)&s>>8,i=l^l>>1;let u=e^t,f=(r=h^h>>1)|65535^(u|i);return((f=((f=((f=((f=(f|f<<8)&0xff00ff)|f<<4)&0xf0f0f0f)|f<<2)&0x33333333)|f<<1)&0x55555555)<<1|(u=((u=((u=((u=(u|u<<8)&0xff00ff)|u<<4)&0xf0f0f0f)|u<<2)&0x33333333)|u<<1)&0x55555555))>>>0}(u,f)}!function e(t,i,r,a,s,o){if(Math.floor(a/o)>=Math.floor(s/o))return;let n=t[a],l=t[a+s>>1],h=t[s],u=h,f=Math.max(n,l);h>f?u=f:f===n?u=Math.max(l,h):f===l&&(u=Math.max(n,h));let d=a-1,c=s+1;for(;;){do d++;while(t[d]<u)do c--;while(t[c]>u)if(d>=c)break;!function(e,t,i,r,a){let s=e[r];e[r]=e[a],e[a]=s;let o=4*r,n=4*a,l=t[o],h=t[o+1],u=t[o+2],f=t[o+3];t[o]=t[n],t[o+1]=t[n+1],t[o+2]=t[n+2],t[o+3]=t[n+3],t[n]=l,t[n+1]=h,t[n+2]=u,t[n+3]=f;let d=i[r];i[r]=i[a],i[a]=d}(t,i,r,d,c)}e(t,i,r,a,c,o),e(t,i,r,c+1,s,o)}(r,e,this._indices,0,this.numItems-1,this.nodeSize);for(let t=0,i=0;t<this._levelBounds.length-1;t++){let r=this._levelBounds[t];for(;i<r;){let t=i,a=e[i++],s=e[i++],o=e[i++],n=e[i++];for(let t=1;t<this.nodeSize&&i<r;t++)a=Math.min(a,e[i++]),s=Math.min(s,e[i++]),o=Math.max(o,e[i++]),n=Math.max(n,e[i++]);this._indices[this._pos>>2]=t,e[this._pos++]=a,e[this._pos++]=s,e[this._pos++]=o,e[this._pos++]=n}}}search(e,t,i,r,a){if(this._pos!==this._boxes.length)throw Error("Data not yet indexed - call index.finish().");let s=this._boxes.length-4,o=[],n=[];for(;void 0!==s;){let l=Math.min(s+4*this.nodeSize,tg(s,this._levelBounds));for(let h=s;h<l;h+=4){let l=this._boxes[h];if(i<l)continue;let u=this._boxes[h+1];if(r<u)continue;let f=this._boxes[h+2];if(e>f)continue;let d=this._boxes[h+3];if(t>d)continue;let c=0|this._indices[h>>2];s>=4*this.numItems?o.push(c):(void 0===a||a(c,l,u,f,d))&&n.push(c)}s=o.pop()}return n}neighbors(e,t,i=1/0,r=1/0,a){if(this._pos!==this._boxes.length)throw Error("Data not yet indexed - call index.finish().");let s=this._boxes.length-4,o=this._queue,n=[],l=r*r;e:for(;void 0!==s;){let r=Math.min(s+4*this.nodeSize,tg(s,this._levelBounds));for(let i=s;i<r;i+=4){let r=0|this._indices[i>>2],n=this._boxes[i],h=this._boxes[i+1],u=this._boxes[i+2],f=this._boxes[i+3],d=e<n?n-e:e>u?e-u:0,c=t<h?h-t:t>f?t-f:0,p=d*d+c*c;!(p>l)&&(s>=4*this.numItems?o.push(r<<1,p):(void 0===a||a(r))&&o.push((r<<1)+1,p))}for(;o.length&&1&o.peek();)if(o.peekValue()>l||(n.push(o.pop()>>1),n.length===i))break e;s=o.length?o.pop()>>1:void 0}return o.clear(),n}}function tg(e,t){let i=0,r=t.length-1;for(;i<r;){let a=i+r>>1;t[a]>e?r=a:i=a+1}return t[i]}function ty(e,t,i){let r=!1,a=i.length/2;for(let s=0,o=a-1;s<a;o=s++){let a=i[2*s],n=i[2*s+1],l=i[2*o],h=i[2*o+1];n>t!=h>t&&e<(l-a)*(t-n)/(h-n)+a&&(r=!r)}return r}function tx(e,t,i,r){if(!ty(e,t,i))return!1;if(r){for(let i of r)if(ty(e,t,i))return!1}return!0}function tv(e,t,i){for(let r of i){let i=r[0];if(i&&tx(e,t,i,r.length>1?r.slice(1):void 0))return!0}return!1}e.s(["pointInMultiPolygon",()=>tv,"pointInPolygon",()=>tx,"pointInRing",()=>ty],709826);class tb{_index;_regions;constructor(e){if(this._regions=e,0===e.length){this._index=null;return}for(const t of(this._index=new t_(e.length),e))this._index.add(t.bounds.minX,t.bounds.minY,t.bounds.maxX,t.bounds.maxY);this._index.finish()}query(e,t){return this._index?this._index.search(e,t,e,t).map(e=>this._regions[e].id):[]}queryExact(e,t){if(!this._index)return null;for(let i of this._index.search(e,t,e,t)){let r=this._regions[i];if(tv(e,t,r.parts))return r.id}return null}queryLngLat(e,t){let{x:i,y:r}=en(e,t);return this.queryExact(i,r)}get size(){return this._regions.length}}function tw(e){let t=e.startsWith("#")?e.slice(1):e;return 3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),parseInt(t,16)}e.s(["SpatialIndex",()=>tb],513462),e.s(["hexToNumber",()=>tw],906322);var tM=e.i(340373);class tA extends eY{constructor(e){const{texture:t,vertices:i,uvs:r,indices:a,topology:s,...o}=e,n=new eD((0,tM.definedProps)({positions:i,uvs:r,indices:a,topology:s}));super((0,tM.definedProps)({...o,texture:t,geometry:n})),this.autoUpdate=!0,this.onRender=this._render}get vertices(){return this.geometry.getBuffer("aPosition").data}set vertices(e){this.geometry.getBuffer("aPosition").data=e}_render(){this.autoUpdate&&this.geometry.getBuffer("aPosition").update()}}class tC{mesh;regionCount;_lutWidth;_lutCanvas;_lutCtx;_lutImageData;_lutSource;_lutTexture;_lutDirty=!1;_positions;_uvs;_indices;_ghosts=[];constructor(e,t,i){this.regionCount=e.length,this._lutWidth=function(e){let t=Math.max(e,4);return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1}(this.regionCount);let r=0,a=0,s=0;for(const t of e)r+=t.positions.length,a+=t.indices.length,s+=t.vertexCount;const o=new Float32Array(r),n=new Uint32Array(a),l=new Float32Array(2*s);let h=0,u=0,f=0;for(let t=0;t<e.length;t++){const i=e[t];o.set(i.positions,h);for(let e=0;e<i.indices.length;e++)n[u+e]=i.indices[e]+f;const r=(t+.5)/this._lutWidth;for(let e=0;e<i.vertexCount;e++)l[(f+e)*2]=r,l[(f+e)*2+1]=.5;h+=i.positions.length,u+=i.indices.length,f+=i.vertexCount}this._lutCanvas=document.createElement("canvas"),this._lutCanvas.width=this._lutWidth,this._lutCanvas.height=1,this._lutCtx=this._lutCanvas.getContext("2d",{willReadFrequently:!0}),this._lutImageData=this._lutCtx.createImageData(this._lutWidth,1);const d=t>>16&255,c=t>>8&255,p=255&t,m=Math.round(255*i),_=this._lutImageData.data;for(let e=0;e<this.regionCount;e++){const t=4*e;_[t]=d,_[t+1]=c,_[t+2]=p,_[t+3]=m}this._lutCtx.putImageData(this._lutImageData,0,0),this._lutSource=new e3.ImageSource({resource:this._lutCanvas,scaleMode:"nearest",autoGenerateMipmaps:!1,alphaMode:"premultiply-alpha-on-upload"}),this._lutTexture=new eF.Texture({source:this._lutSource}),this._positions=o,this._uvs=l,this._indices=n,this.mesh=new tA({texture:this._lutTexture,vertices:o,uvs:l,indices:n}),this.mesh.label="merged-regions",this.mesh.alpha=1}setColor(e,t,i){let r=4*e,a=this._lutImageData.data;a[r]=t>>16&255,a[r+1]=t>>8&255,a[r+2]=255&t,a[r+3]=Math.round(255*i),this._lutDirty=!0}setAlpha(e,t){e<0||e>=this.regionCount||(this._lutImageData.data[4*e+3]=Math.round(255*t),this._lutDirty=!0)}getColor(e){if(e<0||e>=this.regionCount)return null;let t=4*e,i=this._lutImageData.data;return[i[t],i[t+1],i[t+2]]}flush(){this._lutDirty&&(this._lutCtx.putImageData(this._lutImageData,0,0),this._lutSource.update(),this._lutDirty=!1)}createGhostMesh(e){let t=new Float32Array(this._positions.length);for(let i=0;i<this._positions.length;i+=2)t[i]=this._positions[i]+e,t[i+1]=this._positions[i+1];let i=new tA({texture:this._lutTexture,vertices:t,uvs:this._uvs,indices:this._indices});return i.label=`merged-regions:ghost(${e>0?"+":""}${e})`,i.alpha=1,i.visible=!1,this._ghosts.push(i),i}destroy(){for(let e of this._ghosts)e.destroy();this._ghosts=[],this.mesh.destroy(),this._lutTexture.destroy(!0)}}function tS(e,t,i,r,a,s){let o=a-i,n=s-r,l=o*o+n*n;if(0===l)return Math.hypot(e-i,t-r);let h=Math.max(0,Math.min(1,((e-i)*o+(t-r)*n)/l));return Math.hypot(e-(i+h*o),t-(r+h*n))}e.s(["RegionMesh",()=>tC],324994);class tP{container;_meshGroups=[];_ghosts=[];_regions=new Map;_spatialIndex=null;_adjacencies=new Map;_defaultColor;_defaultAlpha;constructor(e){this.container=new p.Container({label:"regions"}),this._defaultColor=e?.defaultColor??0,this._defaultAlpha=e?.defaultAlpha??.25}skipGhosts=!1;loadFromParsed(e){this._clear();let t=new Map;for(let i of e){let e=i.zIndex??1,r=t.get(e);r||(r=[],t.set(e,r)),r.push(i)}let i=Array.from(t.keys()).sort((e,t)=>e-t),r=[],a=2*eo;for(let e=0;e<i.length;e++){let s=i[e],o=t.get(s),n=[],l=[],h=[],u=[],f=[];for(let e of o){let t=tc(e.geometry);0!==t.indices.length&&(n.push({positions:t.positions,indices:t.indices,vertexCount:t.vertexCount}),l.push(e.id),h.push(t.bounds),u.push(this._convertAllPartsToMercator(e.geometry)),f.push({id:e.id,adjacencies:e.adjacencies}))}if(0===n.length)continue;let d=new tC(n,this._defaultColor,this._defaultAlpha);if(this.container.addChild(d.mesh),this._meshGroups.push({mesh:d,zIndex:s}),!this.skipGhosts)for(let e of[-2,-1,1,2]){let t=e*a,i=d.createGhostMesh(t);this.container.addChild(i),this._ghosts.push({displayObject:i,xOffset:t})}for(let t=0;t<l.length;t++){let i=l[t],a=h[t],s=u[t];this._regions.set(i,{index:t,meshGroupIndex:e,bounds:a,parts:s,ownerId:null}),r.push({id:i,bounds:a,parts:s});let o=f[t];o.adjacencies&&this._adjacencies.set(i,o.adjacencies)}}this._spatialIndex=new tb(r)}loadFromPreparedGroups(e,t){this._clear();let i=2*eo;for(let t=0;t<e.length;t++){let r=e[t];if(0===r.mergedInputs.length)continue;let a=new tC(r.mergedInputs,this._defaultColor,this._defaultAlpha);if(this.container.addChild(a.mesh),this._meshGroups.push({mesh:a,zIndex:r.zIndex}),!this.skipGhosts)for(let e of[-2,-1,1,2]){let t=e*i,r=a.createGhostMesh(t);this.container.addChild(r),this._ghosts.push({displayObject:r,xOffset:t})}for(let e=0;e<r.regionIds.length;e++){this._regions.set(r.regionIds[e],{index:e,meshGroupIndex:t,bounds:r.regionBounds[e],parts:r.regionParts[e],ownerId:null});let i=r.regionAdjacencies[e];i.adjacencies&&this._adjacencies.set(i.id,i.adjacencies)}}this._spatialIndex=new tb(t)}setOwnership(e,t,i=.55,r){let a=this._regions.get(e);a&&(this._meshGroups[a.meshGroupIndex]?.mesh.setColor(a.index,t,i),a.ownerId=r??null)}setOwnerIdOnly(e,t){let i=this._regions.get(e);i&&(i.ownerId=t)}batchSetOwnership(e){for(let[t,{color:i,alpha:r,ownerId:a}]of e)this.setOwnership(t,i,r,a);this.flushColors()}applyOwnershipMap(e){for(let[t,i]of Object.entries(e)){let e=tw(i);this.setOwnership(t,e)}this.flushColors()}clearOwnership(e){let t=this._regions.get(e);t&&(this._meshGroups[t.meshGroupIndex]?.mesh.setColor(t.index,this._defaultColor,this._defaultAlpha),t.ownerId=null)}setRegionAlpha(e,t){let i=this._regions.get(e);i&&this._meshGroups[i.meshGroupIndex]?.mesh.setAlpha(i.index,t)}getRegionColor(e){let t=this._regions.get(e);if(!t)return null;let i=this._meshGroups[t.meshGroupIndex];return i?i.mesh.getColor(t.index):null}flushColors(){for(let e of this._meshGroups)e.mesh.flush()}_zoomRegions=new Map;registerZoomRegion(e,t,i,r){this._zoomRegions.set(e,{disappearAtResolution:t.disappearAtResolution,fullAtResolution:t.fullAtResolution,baseColor:i,baseAlpha:r})}unregisterZoomRegion(e){this._zoomRegions.delete(e)}get hasZoomRegions(){return this._zoomRegions.size>0}updateForZoom(e){if(0===this._zoomRegions.size)return;let t=156543/Math.pow(2,e);for(let[e,i]of this._zoomRegions){let r,a=this._regions.get(e);if(!a)continue;let{disappearAtResolution:s,fullAtResolution:o}=i;r=t<=s?0:t>=o?1:Math.max(0,Math.min(1,r=(s-t)/(s-o))),this._meshGroups[a.meshGroupIndex]?.mesh.setColor(a.index,i.baseColor,i.baseAlpha*r)}this.flushColors()}getOuterRings(){let e=new Map;for(let[t,i]of this._regions){let r=i.parts.flatMap(e=>e).filter(e=>e&&e.length>=6);r.length>0&&e.set(t,{rings:r})}return e}getAllAdjacencies(){return this._adjacencies}get spatialIndex(){return this._spatialIndex}getRegion(e){return this._regions.get(e)}getAdjacencies(e){return this._adjacencies.get(e)}getRegionGeometry(e){return this.getMultiRegionGeometry([e])}getMultiRegionGeometry(e){let t=[],i=[],r=0,a=null;for(let s of e){let e=this._regions.get(s);if(e)for(let s of(a?(a.minX=Math.min(a.minX,e.bounds.minX),a.minY=Math.min(a.minY,e.bounds.minY),a.maxX=Math.max(a.maxX,e.bounds.maxX),a.maxY=Math.max(a.maxY,e.bounds.maxY)):a={...e.bounds},e.parts)){let e=[],a=[];for(let t=0;t<s.length;t++){t>0&&a.push(e.length/2);let i=s[t];for(let t=0;t<i.length;t++)e.push(i[t])}let o=(0,th.default)(e,a.length>0?a:void 0,2);for(let i=0;i<e.length;i++)t.push(e[i]);for(let e=0;e<o.length;e++)i.push(o[e]+r);r+=e.length/2}}return 0!==i.length&&a?{positions:new Float32Array(t),indices:new Uint32Array(i),bounds:a}:null}getConnectedPolityRegions(e){let t=this._regions.get(e);if(!t||!t.ownerId)return[e];let i=t.ownerId,r=new Set,a=[e];for(r.add(e);a.length>0;){let e=a.pop(),t=this._adjacencies.get(e);if(t)for(let e of t){if(r.has(e))continue;let t=this._regions.get(e);t&&t.ownerId===i&&(r.add(e),a.push(e))}}return Array.from(r)}getSharedBorderSegments(e,t){let i=this._regions.get(e);if(!i)return[];let r=new Set,a=(e,t)=>`${Math.round(100*e)/100},${Math.round(100*t)/100}`;for(let e of t){let t=this._regions.get(e);if(t)for(let e of t.parts){let t=e[0];if(t)for(let e=0;e<t.length;e+=2)r.add(a(t[e],t[e+1]))}}let s=[];for(let e of i.parts){let t=e[0];if(t&&!(t.length<4))for(let e=0;e<t.length-2;e+=2){let i=t[e],o=t[e+1],n=t[e+2],l=t[e+3];r.has(a(i,o))&&r.has(a(n,l))&&s.push([i,o,n,l])}}return s}computeTakerBoundaryEdgeKeys(e,t){let i=new Set,r=(e,t)=>e<t?`${e},${t}`:`${t},${e}`,a=new Set;for(let i of e)for(let[e,r,s,o]of this.getSharedBorderSegments(i,t)){let t=e<s||e===s&&r<o?`${e},${r};${s},${o}`:`${s},${o};${e},${r}`;a.add(t)}if(0===a.size)return i;let s=0;for(let t of e){let e=this._regions.get(t);if(e)for(let t of e.parts){let e=[];for(let i=0;i<t.length;i++){let r=t[i];for(let t=0;t<r.length;t++)e.push(r[t])}let o=e.length/2;for(let e=0;e<t.length;e++){let o=0===e?0:t.slice(0,e).reduce((e,t)=>e+t.length/2,0),n=t[e],l=n.length/2;for(let e=0;e<l-1;e++){let t=n[2*e],l=n[2*e+1],h=n[(e+1)*2],u=n[(e+1)*2+1],f=t<h||t===h&&l<u?`${t},${l};${h},${u}`:`${h},${u};${t},${l}`;if(a.has(f)){let t=s+o+e,a=s+o+e+1;i.add(r(t,a))}}}s+=o}}return i}computeConquestDistanceField(e,t){let i=this.getMultiRegionGeometry(e);if(!i)return null;let r=[];for(let i of e)for(let e of this.getSharedBorderSegments(i,t))r.push(e);if(0===r.length)return null;let a=i.positions.length/2,s=new Float32Array(a),o=r.length>150,n=0;if(o){let{minX:e,minY:t,maxX:o,maxY:l}=i.bounds,h=(o-e||1)/24,u=(l-t||1)/24,f=Math.min(h,u),d=Array(576);for(let e=0;e<d.length;e++)d[e]=[];for(let i=0;i<r.length;i++){let[a,s,o,n]=r[i],l=Math.max(0,Math.min(23,Math.floor((Math.min(a,o)-e)/h))),f=Math.max(0,Math.min(23,Math.floor((Math.max(a,o)-e)/h))),c=Math.max(0,Math.min(23,Math.floor((Math.min(s,n)-t)/u))),p=Math.max(0,Math.min(23,Math.floor((Math.max(s,n)-t)/u)));for(let e=l;e<=f;e++)for(let t=c;t<=p;t++)d[24*t+e].push(i)}for(let o=0;o<a;o++){let a=i.positions[2*o],l=i.positions[2*o+1],c=Math.max(0,Math.min(23,Math.floor((a-e)/h))),p=Math.max(0,Math.min(23,Math.floor((l-t)/u))),m=1/0;for(let e=0;e<24&&(!(e>=2)||!(m<=(e-1)*f));e++){let t=Math.max(0,c-e),i=Math.min(23,c+e),s=Math.max(0,p-e),o=Math.min(23,p+e);for(let n=t;n<=i;n++)for(let h=s;h<=o;h++){if(e>0&&n>t&&n<i&&h>s&&h<o)continue;let u=d[24*h+n];for(let e=0;e<u.length;e++){let t=r[u[e]],i=tS(a,l,t[0],t[1],t[2],t[3]);i<m&&(m=i)}}}if(m===1/0)for(let e=0;e<r.length;e++){let t=r[e],i=tS(a,l,t[0],t[1],t[2],t[3]);i<m&&(m=i)}s[o]=m,m>n&&(n=m)}}else for(let e=0;e<a;e++){let t=i.positions[2*e],a=i.positions[2*e+1],o=1/0;for(let e=0;e<r.length;e++){let i=r[e],s=tS(t,a,i[0],i[1],i[2],i[3]);s<o&&(o=s)}s[e]=o,o>n&&(n=o)}if(n>0)for(let e=0;e<a;e++)s[e]/=n;return{distances:s,geometry:i}}get regionCount(){return this._regions.size}get regionIds(){return this._regions.keys()}updateWrapping(e,t,i){let r=i/2*(2*eo/(256*Math.pow(2,t))),a=e-r,s=e+r;for(let e of this._ghosts)e.displayObject.visible=e.xOffset<0?a<eo+e.xOffset:s>-eo+e.xOffset}destroy(){this._clear(),this.container.destroy({children:!0})}_clear(){for(let e of this._meshGroups)e.mesh.destroy();this._meshGroups=[],this._ghosts=[],this._zoomRegions.clear(),this._regions.clear(),this._adjacencies.clear(),this._spatialIndex=null,this.container.removeChildren()}_convertAllPartsToMercator(e){return"Polygon"===e.type?[this._convertRingsToMercator(e.coordinates)]:e.coordinates.map(e=>this._convertRingsToMercator(e))}_convertRingsToMercator(e){return e.map(e=>{let t=tu(tf(e)),i=[];for(let[e,r]of t){let{x:t,y:a}=en(e,r);i.push(t,a)}return i})}}e.s(["RegionLayer",()=>tP],909697);var tT=e.i(881324),tk=e.i(972116),tI=e.i(930774);let tz={test:e=>"string"==typeof e&&e.startsWith("info face="),parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),i={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let e in t){let r=t[e].match(/^[a-z]+/gm)[0],a=t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(let e in a){let t=a[e].split("="),i=t[0],r=t[1].replace(/"/gm,""),o=parseFloat(r),n=isNaN(o)?r:o;s[i]=n}i[r].push(s)}let r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[a]=i.info,[s]=i.common,[o]=i.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(a.size,10),r.fontFamily=a.face,r.lineHeight=parseInt(s.lineHeight,10);let n=i.page;for(let e=0;e<n.length;e++)r.pages.push({id:parseInt(n[e].id,10)||0,file:n[e].file});let l={};r.baseLineOffset=r.lineHeight-parseInt(s.base,10);let h=i.char;for(let e=0;e<h.length;e++){let t=h[e],i=parseInt(t.id,10),a=t.letter??t.char??String.fromCharCode(i);"space"===a&&(a=" "),l[i]=a,r.chars[a]={id:i,page:parseInt(t.page,10)||0,x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xOffset:parseInt(t.xoffset,10),yOffset:parseInt(t.yoffset,10),xAdvance:parseInt(t.xadvance,10),kerning:{}}}let u=i.kerning||[];for(let e=0;e<u.length;e++){let t=parseInt(u[e].first,10),i=parseInt(u[e].second,10),a=parseInt(u[e].amount,10);r.chars[l[i]]&&(r.chars[l[i]].kerning[l[t]]=a)}return r}},tL={test:e=>"string"!=typeof e&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&null!==e.getElementsByTagName("info")[0].getAttribute("face"),parse(e){let t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},i=e.getElementsByTagName("info")[0],r=e.getElementsByTagName("common")[0],a=e.getElementsByTagName("distanceField")[0];a&&(t.distanceField={type:a.getAttribute("fieldType"),range:parseInt(a.getAttribute("distanceRange"),10)});let s=e.getElementsByTagName("page"),o=e.getElementsByTagName("char"),n=e.getElementsByTagName("kerning");t.fontSize=parseInt(i.getAttribute("size"),10),t.fontFamily=i.getAttribute("face"),t.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let e=0;e<s.length;e++)t.pages.push({id:parseInt(s[e].getAttribute("id"),10)||0,file:s[e].getAttribute("file")});let l={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute("base"),10);for(let e=0;e<o.length;e++){let i=o[e],r=parseInt(i.getAttribute("id"),10),a=i.getAttribute("letter")??i.getAttribute("char")??String.fromCharCode(r);"space"===a&&(a=" "),l[r]=a,t.chars[a]={id:r,page:parseInt(i.getAttribute("page"),10)||0,x:parseInt(i.getAttribute("x"),10),y:parseInt(i.getAttribute("y"),10),width:parseInt(i.getAttribute("width"),10),height:parseInt(i.getAttribute("height"),10),xOffset:parseInt(i.getAttribute("xoffset"),10),yOffset:parseInt(i.getAttribute("yoffset"),10),xAdvance:parseInt(i.getAttribute("xadvance"),10),kerning:{}}}for(let e=0;e<n.length;e++){let i=parseInt(n[e].getAttribute("first"),10),r=parseInt(n[e].getAttribute("second"),10),a=parseInt(n[e].getAttribute("amount"),10);t.chars[l[r]]&&(t.chars[l[r]].kerning[l[i]]=a)}return t}},tE=e=>!!("string"==typeof e&&e.match(/<font(\s|>)/))&&tL.test(h.DOMAdapter.get().parseXML(e)),tF=e=>tL.parse(h.DOMAdapter.get().parseXML(e)),tB=[".xml",".fnt"],tR={extension:{type:o.ExtensionType.CacheParser,name:"cacheBitmapFont"},test:e=>!!e?.pages&&!!e?.chars&&"string"==typeof e?.fontFamily&&""!==e.fontFamily,getCacheableAssets(e,t){let i={};return e.forEach(e=>{i[e]=t,i[`${e}-bitmap`]=t}),i[`${t.fontFamily}-bitmap`]=t,i}},tD={extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.Normal},name:"loadBitmapFont",id:"bitmap-font",test:e=>tB.includes(tI.path.extname(e).toLowerCase()),testParse:async e=>tz.test(e)||tE(e),async parse(t,i,r){let a=tz.test(t)?tz.parse(t):tF(t),{src:s}=i,{pages:o}=a,n=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let e=0;e<o.length;++e){let t=o[e].file,i=tI.path.join(tI.path.dirname(s),t);i=(0,tk.copySearchParams)(i,s),n.push({src:i,data:l})}let[h,{BitmapFont:u}]=await Promise.all([r.load(n),e.A(972891)]);return new u({data:a,textures:n.map(e=>h[e.src])},s)},async load(e,t){let i=await h.DOMAdapter.get().fetch(e);return await i.text()},async unload(e,t,i){await Promise.all(e.pages.map(e=>i.unload(e.texture.source._sourceOrigin))),e.destroy()}};var tO=e.i(485830);class tU{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<t;i++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}var tZ=e.i(692206);let tV={extension:{type:o.ExtensionType.CacheParser,name:"cacheTextureArray"},test:e=>Array.isArray(e)&&e.every(e=>e instanceof eF.Texture),getCacheableAssets:(e,t)=>{let i={};return e.forEach(e=>{t.forEach((t,r)=>{i[e+(0===r?"":r+1)]=t})}),i}};async function tG(e){if("Image"in globalThis)return new Promise(t=>{let i=new Image;i.onload=()=>{t(!0)},i.onerror=()=>{t(!1)},i.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let t=await (await fetch(e)).blob();await createImageBitmap(t)}catch(e){return!1}return!0}return!1}let tW={extension:{type:o.ExtensionType.DetectionParser,priority:1},test:async()=>tG("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async e=>[...e,"avif"],remove:async e=>e.filter(e=>"avif"!==e)},tX=["png","jpg","jpeg"],tY={extension:{type:o.ExtensionType.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...tX],remove:async e=>e.filter(e=>!tX.includes(e))},tN="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function t$(e){return!tN&&""!==document.createElement("video").canPlayType(e)}let tj={extension:{type:o.ExtensionType.DetectionParser,priority:0},test:async()=>t$("video/mp4"),add:async e=>[...e,"mp4","m4v"],remove:async e=>e.filter(e=>"mp4"!==e&&"m4v"!==e)},tq={extension:{type:o.ExtensionType.DetectionParser,priority:0},test:async()=>t$("video/ogg"),add:async e=>[...e,"ogv"],remove:async e=>e.filter(e=>"ogv"!==e)},tH={extension:{type:o.ExtensionType.DetectionParser,priority:0},test:async()=>t$("video/webm"),add:async e=>[...e,"webm"],remove:async e=>e.filter(e=>"webm"!==e)},tK={extension:{type:o.ExtensionType.DetectionParser,priority:0},test:async()=>tG("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async e=>[...e,"webp"],remove:async e=>e.filter(e=>"webp"!==e)};var tQ=e.i(589698),tJ=e.i(624103);let t0=class e{constructor(){this.loadOptions={...e.defaultOptions},this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,i)=>(this._parsersValidated=!1,e[t]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){let i={promise:null,parser:null};return i.promise=(async()=>{let r=null,a=null;if((t.parser||t.loadParser)&&(a=this._parserHash[t.parser||t.loadParser],t.loadParser&&(0,tO.warn)(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||(0,tO.warn)(`[Assets] specified load parser "${t.parser||t.loadParser}" not found while loading ${e}`)),!a){for(let i=0;i<this.parsers.length;i++){let r=this.parsers[i];if(r.load&&r.test?.(e,t,this)){a=r;break}}if(!a)return(0,tO.warn)(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await a.load(e,t,this),i.parser=a;for(let e=0;e<this.parsers.length;e++){let a=this.parsers[e];a.parse&&a.parse&&await a.testParse?.(r,t,this)&&(r=await a.parse(r,t,this)||r,i.parser=a)}return r})(),i}async load(t,i){this._parsersValidated||this._validateParsers();let{onProgress:r,onError:a,strategy:s,retryCount:o,retryDelay:n}="function"==typeof i?{...e.defaultOptions,...this.loadOptions,onProgress:i}:{...e.defaultOptions,...this.loadOptions,...i||{}},l=0,h={},u=(0,tJ.isSingleItem)(t),f=(0,tQ.convertToList)(t,e=>({alias:[e],src:e,data:{}})),d=f.reduce((e,t)=>e+(t.progressSize||1),0),c=f.map(async e=>{let t=tI.path.toAbsolute(e.src);!h[e.src]&&(await this._loadAssetWithRetry(t,e,{onProgress:r,onError:a,strategy:s,retryCount:o,retryDelay:n},h),l+=e.progressSize||1,r&&r(l/d))});return await Promise.all(c),u?h[f[0].src]:h}async unload(e){let t=(0,tQ.convertToList)(e,e=>({alias:[e],src:e})).map(async e=>{let t=tI.path.toAbsolute(e.src),i=this.promiseCache[t];if(i){let r=await i.promise;delete this.promiseCache[t],await i.parser?.unload?.(r,e,this)}});await Promise.all(t)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,t)=>(t.name||t.id?(e[t.name]||e[t.id])&&(0,tO.warn)(`[Assets] parser id conflict "${t.id}"`):(0,tO.warn)("[Assets] parser should have an id"),e[t.name]=t,t.id&&(e[t.id]=t),e),{})}async _loadAssetWithRetry(e,t,i,r){let a=0,{onError:s,strategy:o,retryCount:n,retryDelay:l}=i,h=e=>new Promise(t=>setTimeout(t,e));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,t)),r[t.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete r[t.src],a++;let i="retry"!==o||a>n;if("retry"===o&&!i){s&&s(f,t),await h(l);continue}if("skip"===o){s&&s(f,t);return}s&&s(f,t);let u=Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(u.stack=f.stack),u}}};function t2(e,t){if(Array.isArray(t)){for(let i of t)if(e.startsWith(`data:${i}`))return!0;return!1}return e.startsWith(`data:${t}`)}function t1(e,t){let i=e.split("?")[0],r=tI.path.extname(i).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}t0.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250};let t3={extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.Low},name:"loadJson",id:"json",test:e=>t2(e,"application/json")||t1(e,".json"),async load(e){let t=await h.DOMAdapter.get().fetch(e);return await t.json()}},t5={name:"loadTxt",id:"text",extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.Low,name:"loadTxt"},test:e=>t2(e,"text/plain")||t1(e,".txt"),async load(e){let t=await h.DOMAdapter.get().fetch(e);return await t.text()}},t4=["normal","bold","100","200","300","400","500","600","700","800","900"],t6=[".ttf",".otf",".woff",".woff2"],t8=["font/ttf","font/otf","font/woff","font/woff2"],t7=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i,t9=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/,ie={extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.Low},name:"loadWebFont",id:"web-font",test:e=>t2(e,t8)||t1(e,t6),async load(e,t){let i=h.DOMAdapter.get().getFontFaceSet();if(i){let r=[],a=t.data?.family??function(e){let t=tI.path.extname(e),i=tI.path.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)),r=i.length>0;for(let e of i)if(!e.match(t7)){r=!1;break}let a=i.join(" ");return r||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}(e),s=t.data?.weights?.filter(e=>t4.includes(e))??["normal"],o=t.data??{};for(let t=0;t<s.length;t++){let n=s[t],l=new FontFace(a,`url('${t9.test(e)?e:encodeURI(e)}')`,{...o,weight:n});await l.load(),i.add(l),r.push(l)}return tZ.Cache.has(`${a}-and-url`)?tZ.Cache.get(`${a}-and-url`).entries.push({url:e,faces:r}):tZ.Cache.set(`${a}-and-url`,{entries:[{url:e,faces:r}]}),1===r.length?r[0]:r}return(0,tO.warn)("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){let t=Array.isArray(e)?e:[e],i=t[0].family,r=tZ.Cache.get(`${i}-and-url`),a=r.entries.find(e=>e.faces.some(e=>-1!==t.indexOf(e)));a.faces=a.faces.filter(e=>-1===t.indexOf(e)),0===a.faces.length&&(r.entries=r.entries.filter(e=>e!==a)),t.forEach(e=>{h.DOMAdapter.get().getFontFaceSet().delete(e)}),0===r.entries.length&&tZ.Cache.remove(`${i}-and-url`)}};var it=e.i(620446),ii=e.i(139260);function ir(e,t=1){let i=ii.Resolver.RETINA_PREFIX?.exec(e);return i?parseFloat(i[1]):t}function ia(e,t,i){e.label=i,e._sourceOrigin=i;let r=new eF.Texture({source:e,label:i}),a=()=>{delete t.promiseCache[i],tZ.Cache.has(i)&&tZ.Cache.remove(i)};return r.source.once("destroy",()=>{t.promiseCache[i]&&((0,tO.warn)("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),a())}),r.once("destroy",()=>{e.destroyed||((0,tO.warn)("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),a())}),r}let is={extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test:e=>t2(e,"image/svg+xml")||t1(e,".svg"),async load(e,t,i){return t.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?il(e):io(e,t,i,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function io(e,t,i,r){let a=await h.DOMAdapter.get().fetch(e),s=h.DOMAdapter.get().createImage();s.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await a.text())}`,s.crossOrigin=r,await s.decode();let o=t.data?.width??s.width,n=t.data?.height??s.height,l=t.data?.resolution||ir(e),u=Math.ceil(o*l),f=Math.ceil(n*l),d=h.DOMAdapter.get().createCanvas(u,f),c=d.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(s,0,0,o*l,n*l);let{parseAsGraphicsContext:p,...m}=t.data??{};return ia(new e3.ImageSource({resource:d,alphaMode:"premultiply-alpha-on-upload",resolution:l,...m}),i,e)}async function il(e){let t=await h.DOMAdapter.get().fetch(e),i=await t.text(),r=new it.GraphicsContext;return r.svg(i),r}let ih=null;class iu{constructor(){ih||(ih=URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";\n    async function checkImageBitmap() {\n      try {\n        if (typeof createImageBitmap !== "function") return false;\n        const response = await fetch(WHITE_PNG);\n        const imageBlob = await response.blob();\n        const imageBitmap = await createImageBitmap(imageBlob);\n        return imageBitmap.width === 1 && imageBitmap.height === 1;\n      } catch (_e) {\n        return false;\n      }\n    }\n    void checkImageBitmap().then((result) => {\n      self.postMessage(result);\n    });\n\n})();\n'],{type:"application/javascript"}))),this.worker=new Worker(ih)}}iu.revokeObjectURL=function(){ih&&(URL.revokeObjectURL(ih),ih=null)};let id=null;class ic{constructor(){id||(id=URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    async function loadImageBitmap(url, alphaMode) {\n      const response = await fetch(url);\n      if (!response.ok) {\n        throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: ${response.status} ${response.statusText}`);\n      }\n      const imageBlob = await response.blob();\n      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);\n    }\n    self.onmessage = async (event) => {\n      try {\n        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);\n        self.postMessage({\n          data: imageBitmap,\n          uuid: event.data.uuid,\n          id: event.data.id\n        }, [imageBitmap]);\n      } catch (e) {\n        self.postMessage({\n          error: e,\n          uuid: event.data.uuid,\n          id: event.data.id\n        });\n      }\n    };\n\n})();\n'],{type:"application/javascript"}))),this.worker=new Worker(id)}}ic.revokeObjectURL=function(){id&&(URL.revokeObjectURL(id),id=null)};let ip=0,im=new class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return void 0!==this._isImageBitmapSupported||(this._isImageBitmapSupported=new Promise(e=>{let{worker:t}=new iu;t.addEventListener("message",i=>{t.terminate(),iu.revokeObjectURL(),e(i.data)})})),this._isImageBitmapSupported}loadImageBitmap(e,t){return this._run("loadImageBitmap",[e,t?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){void 0===r&&(r=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<r&&(this._createdWorkers++,(e=new ic().worker).addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){this._resolveHash[e.uuid]&&(void 0!==e.error?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),delete this._resolveHash[e.uuid])}async _run(e,t){await this._initWorkers();let i=new Promise((i,r)=>{this._queue.push({id:e,arguments:t,resolve:i,reject:r})});return this._next(),i}_next(){if(!this._queue.length)return;let e=this._getWorker();if(!e)return;let t=this._queue.pop(),i=t.id;this._resolveHash[ip]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:ip++,id:i})}reset(){this._workerPool.forEach(e=>e.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:e})=>{e?.(Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},i_=[".jpeg",".jpg",".png",".webp",".avif"],ig=["image/jpeg","image/png","image/webp","image/avif"];async function iy(e,t){let i=await h.DOMAdapter.get().fetch(e);if(!i.ok)throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${i.status} ${i.statusText}`);let r=await i.blob();return t?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}let ix={name:"loadTextures",id:"texture",extension:{type:o.ExtensionType.LoadParser,priority:tT.LoaderParserPriority.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test:e=>t2(e,ig)||t1(e,i_),async load(e,t,i){let r=null;return r=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await im.isImageBitmapSupported()?await im.loadImageBitmap(e,t):await iy(e,t):await new Promise((t,i)=>{(r=h.DOMAdapter.get().createImage()).crossOrigin=this.config.crossOrigin,r.src=e,r.complete?t(r):(r.onload=()=>{t(r)},r.onerror=i)}),ia(new e3.ImageSource({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:t.data?.resolution||ir(e),...t.data}),i,e)},unload(e){e.destroy(!0)}};var iv=e.i(597556),ib=e.i(416763);let iw=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],iM={name:"loadVideo",id:"video",extension:{type:o.ExtensionType.LoadParser,name:"loadVideo"},test(e){if(!a||!s){let{validVideoExtensions:e,validVideoMime:t}=function(){let e=[],t=[];for(let i of iw){let r=iv.VideoSource.MIME_TYPES[i.substring(1)]||`video/${i.substring(1)}`;t$(r)&&(e.push(i),t.includes(r)||t.push(r))}return{validVideoExtensions:e,validVideoMime:t}}();a=e,s=t}let t=t2(e,s),i=t1(e,a);return t||i},async load(e,t,i){var r;let a,s={...iv.VideoSource.defaultOptions,resolution:t.data?.resolution||ir(e),alphaMode:t.data?.alphaMode||await (0,ib.detectVideoAlphaMode)(),...t.data},o=document.createElement("video"),n={preload:!1!==s.autoLoad?"auto":void 0,"webkit-playsinline":!1!==s.playsinline?"":void 0,playsinline:!1!==s.playsinline?"":void 0,muted:!0===s.muted?"":void 0,loop:!0===s.loop?"":void 0,autoplay:!1!==s.autoPlay?"":void 0};Object.keys(n).forEach(e=>{let t=n[e];void 0!==t&&o.setAttribute(e,t)}),!0===s.muted&&(o.muted=!0),void 0!==(r=s.crossorigin)||e.startsWith("data:")?!1!==r&&(o.crossOrigin="string"==typeof r?r:"anonymous"):o.crossOrigin=function(e,t=globalThis.location){if(e.startsWith("data:"))return"";t||(t=globalThis.location);let i=new URL(e,document.baseURI);return i.hostname!==t.hostname||i.port!==t.port||i.protocol!==t.protocol?"anonymous":""}(e);let l=document.createElement("source");if(s.mime)a=s.mime;else if(e.startsWith("data:"))a=e.slice(5,e.indexOf(";"));else if(!e.startsWith("blob:")){let t=e.split("?")[0].slice(e.lastIndexOf(".")+1).toLowerCase();a=iv.VideoSource.MIME_TYPES[t]||`video/${t}`}return l.src=e,a&&(l.type=a),new Promise((r,a)=>{async function n(){let a=new iv.VideoSource({...s,resource:o});u(),t.data.preload&&await new Promise((e,t)=>{function i(){a(),e()}function r(e){a(),t(e)}function a(){o.removeEventListener("canplaythrough",i),o.removeEventListener("error",r)}o.addEventListener("canplaythrough",i),o.addEventListener("error",r),o.load()}),r(ia(a,i,e))}function h(e){u(),a(e)}function u(){o.removeEventListener("canplay",n),o.removeEventListener("error",h),l.removeEventListener("error",h)}s.preload&&!s.autoPlay&&o.load(),o.addEventListener("canplay",n),o.addEventListener("error",h),l.addEventListener("error",h),o.appendChild(l)})},unload(e){e.destroy(!0)}},iA={extension:{type:o.ExtensionType.ResolveParser,name:"resolveTexture"},test:ix.test,parse:e=>({resolution:parseFloat(ii.Resolver.RETINA_PREFIX.exec(e)?.[1]??"1"),format:e.split(".").pop(),src:e})},iC={extension:{type:o.ExtensionType.ResolveParser,priority:-2,name:"resolveJson"},test:e=>ii.Resolver.RETINA_PREFIX.test(e)&&e.endsWith(".json"),parse:iA.parse},iS=new class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ii.Resolver,this.loader=new t0,this.cache=tZ.Cache,this._backgroundLoader=new tU(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){if(this._initialized)return void(0,tO.warn)("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let t=e.manifest;"string"==typeof t&&(t=await this.load(t)),this.resolver.addManifest(t)}let t=e.texturePreference?.resolution??1,i=await this._detectFormats({preferredFormats:e.texturePreference?.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:"number"==typeof t?[t]:t}}),e.preferences&&this.setPreferences(e.preferences),e.loadOptions&&(this.loader.loadOptions={...this.loader.loadOptions,...e.loadOptions})}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();let i=(0,tJ.isSingleItem)(e),r=(0,tQ.convertToList)(e).map(e=>{if("string"!=typeof e){let t=this.resolver.getAlias(e);return t.some(e=>!this.resolver.hasKey(e))&&this.add(e),Array.isArray(t)?t[0]:t}return this.resolver.hasKey(e)||this.add({alias:e,src:e}),e}),a=this.resolver.resolve(r),s=await this._mapLoadToResolve(a,t);return i?s[r[0]]:s}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let i=!1;"string"==typeof e&&(i=!0,e=[e]);let r=this.resolver.resolveBundle(e),a={},s=Object.keys(r),o=0,n=[],l=s.map((e,i)=>{let s=r[e],l=[...new Set(Object.values(s).flat())].reduce((e,t)=>e+(t.progressSize||1),0);return n.push(0),o+=l,this._mapLoadToResolve(s,e=>{n[i]=e*l,t?.(n.reduce((e,t)=>e+t,0)/o)}).then(t=>{a[e]=t})});return await Promise.all(l),i?a[e[0]]:a}async backgroundLoad(e){this._initialized||await this.init(),"string"==typeof e&&(e=[e]);let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),"string"==typeof e&&(e=[e]),Object.values(this.resolver.resolveBundle(e)).forEach(e=>{this._backgroundLoader.add(Object.values(e))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if("string"==typeof e)return tZ.Cache.get(e);let t={};for(let i=0;i<e.length;i++)t[i]=tZ.Cache.get(e[i]);return t}async _mapLoadToResolve(e,t){let i=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,t);this._backgroundLoader.active=!0;let a={};return i.forEach(e=>{let t=r[e.src],i=[e.src];e.alias&&i.push(...e.alias),i.forEach(e=>{a[e]=t}),tZ.Cache.set(i,t)}),a}async unload(e){this._initialized||await this.init();let t=(0,tQ.convertToList)(e).map(e=>"string"!=typeof e?e.src:e),i=this.resolver.resolve(t);await this._unloadFromResolved(i)}async unloadBundle(e){this._initialized||await this.init(),e=(0,tQ.convertToList)(e);let t=this.resolver.resolveBundle(e),i=Object.keys(t).map(e=>this._unloadFromResolved(t[e]));await Promise.all(i)}async _unloadFromResolved(e){let t=Object.values(e);t.forEach(e=>{tZ.Cache.remove(e.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];for(let i of(e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]),e.detections))e.skipDetections||await i.test()?t=await i.add(t):e.skipDetections||(t=await i.remove(t));return t=t.filter((e,i)=>t.indexOf(e)===i)}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(t=>t in e).forEach(i=>{t.config[i]=e[i]})})}};o.extensions.handleByList(o.ExtensionType.LoadParser,iS.loader.parsers).handleByList(o.ExtensionType.ResolveParser,iS.resolver.parsers).handleByList(o.ExtensionType.CacheParser,iS.cache.parsers).handleByList(o.ExtensionType.DetectionParser,iS.detections),o.extensions.add(tV,tY,tW,tK,tj,tq,tH,t3,t5,ie,is,ix,iM,tD,tR,iA,iC);let iP={loader:o.ExtensionType.LoadParser,resolver:o.ExtensionType.ResolveParser,cache:o.ExtensionType.CacheParser,detection:o.ExtensionType.DetectionParser};o.extensions.handle(o.ExtensionType.Asset,e=>{let t=e.ref;Object.entries(iP).filter(([e])=>!!t[e]).forEach(([e,i])=>o.extensions.add(Object.assign(t[e],{extension:t[e].extension??i})))},e=>{let t=e.ref;Object.keys(iP).filter(e=>!!t[e]).forEach(e=>o.extensions.remove(t[e]))});var iT=e.i(40069);let ik=["circle","square","triangle","diamond","star","cross","x","rectangle","pentagon","hexagon","octagon"];class iI{texture;shapes;constructor(){const e=iL(56*ik.length),t=iL(56),i=document.createElement("canvas");i.width=e,i.height=t;const r=i.getContext("2d"),a=r.createImageData(e,t),s=document.createElement("canvas");s.width=56,s.height=56;const o=s.getContext("2d");this.shapes=new Map;for(let i=0;i<ik.length;i++){const r=ik[i],s=28;o.clearRect(0,0,56,56),o.save(),o.translate(s,s);const n=new Path2D;iI._buildPath(n,r,24),o.fillStyle="#ffffff",o.fill(n),o.restore();const l=o.getImageData(0,0,56,56);o.clearRect(0,0,56,56),o.save(),o.translate(s,s);const h=new Path2D;iI._buildPath(h,r,24),o.strokeStyle="#ffffff",o.lineWidth=2,o.lineJoin="round",o.stroke(h),o.restore();const u=o.getImageData(0,0,56,56),f=56*i;for(let t=0;t<56;t++)for(let i=0;i<56;i++){const r=(56*t+i)*4,s=(t*e+(f+i))*4,o=l.data[r+3]/255,n=u.data[r+3]/255,h=Math.max(0,n-o);a.data[s]=Math.round(255*o),a.data[s+1]=Math.round(255*h),a.data[s+2]=0,a.data[s+3]=Math.round(255*Math.max(o,n))}this.shapes.set(r,{atlasRect:[56*i/e,0,56/e,56/t],size:[56,56]})}r.putImageData(a,0,0);const n=new e3.ImageSource({resource:i,scaleMode:"linear",autoGenerateMipmaps:!1,alphaMode:"no-premultiply-alpha"});this.texture=new eF.Texture({source:n})}getShape(e){return this.shapes.get(e)??this.shapes.get("circle")}destroy(){this.texture.destroy(!0)}static _buildPath(e,t,i){switch(t){case"circle":e.arc(0,0,i,0,2*Math.PI);break;case"square":iI._regularPolygon(e,4,i,Math.PI/4);break;case"triangle":iI._regularPolygon(e,3,i,-Math.PI/2);break;case"diamond":iI._regularPolygon(e,4,i,0);break;case"star":iI._starPolygon(e,5,i,.5*i,-Math.PI/2);break;case"cross":iI._starPolygon(e,4,i,.3*i,-Math.PI/2);break;case"x":iI._starPolygon(e,4,i,.3*i,-Math.PI/4);break;case"rectangle":iI._rectangle(e,i,.666);break;case"pentagon":iI._regularPolygon(e,5,i,-Math.PI/2);break;case"hexagon":iI._regularPolygon(e,6,i,-Math.PI/2);break;case"octagon":iI._regularPolygon(e,8,i,-Math.PI/2)}}static _regularPolygon(e,t,i,r){let a=[];for(let e=0;e<t;e++){let s=r+2*e*Math.PI/t;a.push([Math.cos(s)*i,Math.sin(s)*i])}let s=a[t-1];e.moveTo((s[0]+a[0][0])/2,(s[1]+a[0][1])/2);for(let i=0;i<t;i++){let[r,s]=a[i],[o,n]=a[(i+1)%t];e.arcTo(r,s,o,n,2)}e.closePath()}static _starPolygon(e,t,i,r,a=-Math.PI/2){let s=2*t,o=[];for(let e=0;e<s;e++){let s=a+e*Math.PI/t,n=e%2==0?i:r;o.push([Math.cos(s)*n,Math.sin(s)*n])}let n=o[s-1];e.moveTo((n[0]+o[0][0])/2,(n[1]+o[0][1])/2);for(let t=0;t<s;t++){let[i,r]=o[t],[a,n]=o[(t+1)%s];e.arcTo(i,r,a,n,2)}e.closePath()}static _rectangle(e,t,i){let r=t/Math.SQRT2,a=-Math.PI/2,s=[];for(let e=0;e<8;e++){let o=a+e*Math.PI/4,n=e%2==0?r:t;s.push([Math.cos(o)*n,Math.sin(o)*n*i])}let o=s[7];e.moveTo((o[0]+s[0][0])/2,(o[1]+s[0][1])/2);for(let t=0;t<8;t++){let[i,r]=s[t],[a,o]=s[(t+1)%8];e.arcTo(i,r,a,o,2)}e.closePath()}}let iz=null;function iL(e){let t=Math.max(e,4);return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1}let iE=`

// ── Bind group 0: PixiJS global uniforms ─────────────────────────────

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};
@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

// ── Bind group 1: PixiJS local uniforms ──────────────────────────────

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};
@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

// ── Bind group 2: shape atlas texture + feature uniforms ─────────────

@group(2) @binding(0) var uAtlasTexture: texture_2d<f32>;
@group(2) @binding(1) var uAtlasSampler: sampler;

struct FeatureUniforms {
    uMetersPerPixel: f32,
    uStrokeWidthPx: f32,
};
@group(2) @binding(2) var<uniform> featureUniforms: FeatureUniforms;

// ── Vertex I/O ───────────────────────────────────────────────────────

struct VertexInput {
    @location(0) aQuadPos:    vec2<f32>,  // [-0.5 .. 0.5]
    @location(1) aQuadUV:     vec2<f32>,  // [0 .. 1]
    @location(2) aWorldPos:   vec2<f32>,  // Mercator meters
    @location(3) aAtlasRect:  vec4<f32>,  // UV rect (u, v, w, h)
    @location(4) aColor:      vec4<f32>,  // RGBA fill color + visibility alpha
    @location(5) aSize:       f32,        // screen-px (relative) or meters (absolute)
    @location(6) aStrokeColor:vec4<f32>,  // RGBA stroke color
    @location(7) aZoomParams: vec4<f32>,  // (appearZoom, fullZoom, scaleMode, disappearZoom)
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vStrokeUV:    vec2<f32>,
    @location(1) vFillUV:      vec2<f32>,
    @location(2) vFillColor:   vec4<f32>,
    @location(3) vStrokeColor: vec3<f32>,
    @location(4) vAtlasClamp:  vec4<f32>,  // (minU, minV, maxU, maxV)
};

// ── Vertex shader ────────────────────────────────────────────────────

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let mpp = featureUniforms.uMetersPerPixel;

    let appearZoom    = input.aZoomParams.x;
    let fullZoom      = input.aZoomParams.y;
    let scaleMode     = input.aZoomParams.z;
    let disappearZoom = input.aZoomParams.w;

    let zoom = log2(40075016.685578488 / (256.0 * mpp));
    var zoomAlpha = 1.0;
    if (zoom < appearZoom) {
        zoomAlpha = 0.0;
    } else if (zoom < fullZoom) {
        zoomAlpha = (zoom - appearZoom) / (fullZoom - appearZoom);
    }
    if (disappearZoom < 90.0 && zoom > disappearZoom) {
        zoomAlpha *= max(0.0, 1.0 - (zoom - disappearZoom));
    }

    let effectiveAlpha = input.aColor.a * zoomAlpha;
    if (effectiveAlpha < 0.01) {
        var out: VertexOutput;
        out.position     = vec4<f32>(0.0, 0.0, 0.0, 1.0);
        out.vStrokeUV    = vec2<f32>(0.0, 0.0);
        out.vFillUV      = vec2<f32>(0.0, 0.0);
        out.vFillColor   = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        out.vStrokeColor = vec3<f32>(0.0, 0.0, 0.0);
        out.vAtlasClamp  = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        return out;
    }

    // Base fill size in meters
    var sizeM: f32;
    if (scaleMode < 0.5) {
        sizeM = input.aSize * mpp;   // relative: pixels → meters
    } else {
        sizeM = input.aSize;         // absolute: already meters
    }

    // Stroke ring: centered half-in / half-out.
    // 56/48 converts from fill-boundary space to cell space.
    //   Relative mode: constant screen-pixel stroke (fixed visual px at any zoom).
    //   Absolute mode: proportional to feature size (constant fraction, zoom-independent).
    //   BASE_SIZE_REF = 2 * 6.75 * 0.75 * (56/48), matching TypeScript BASE_SIZE_PX.
    const BASE_SIZE_REF: f32 = 11.8125;
    var halfStroke: f32;
    if (scaleMode < 0.5) {
        halfStroke = 0.5 * featureUniforms.uStrokeWidthPx * mpp * (56.0 / 48.0);
    } else {
        halfStroke = sizeM * 0.5 * featureUniforms.uStrokeWidthPx * (56.0 / 48.0) / BASE_SIZE_REF;
    }
    let drawSizeM = sizeM + 2.0 * halfStroke;   // stroke outer edge
    let fillSizeM = sizeM - 2.0 * halfStroke;   // stroke inner edge (fill inset)

    let localPos = vec2<f32>(
        input.aQuadPos.x *  drawSizeM,
        input.aQuadPos.y * -drawSizeM
    );

    let worldPos = input.aWorldPos + localPos;
    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;
    let clip = mvp * vec3<f32>(worldPos, 1.0);

    // Stroke UV: maps the expanded quad directly to the atlas cell.
    // The fill mask boundary at this UV = the stroke outer edge.
    let strokeUV = input.aAtlasRect.xy + input.aQuadUV * input.aAtlasRect.zw;

    // Fill UV: scaled around the cell center so the fill mask boundary
    // matches the inset fill size (stroke inner edge). Points outside
    // the cell get clamped in the fragment shader.
    let uvCenter = input.aAtlasRect.xy + 0.5 * input.aAtlasRect.zw;
    let uvScale  = drawSizeM / max(fillSizeM, 0.001);
    let fillUV   = uvCenter + (strokeUV - uvCenter) * uvScale;

    // Clamp bounds for fillUV (prevents sampling into adjacent atlas cells)
    let clampMin = input.aAtlasRect.xy;
    let clampMax = input.aAtlasRect.xy + input.aAtlasRect.zw;

    var out: VertexOutput;
    out.position     = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vStrokeUV    = strokeUV;
    out.vFillUV      = fillUV;
    out.vFillColor   = vec4<f32>(input.aColor.rgb, effectiveAlpha);
    out.vStrokeColor = input.aStrokeColor.rgb;
    out.vAtlasClamp  = vec4<f32>(clampMin, clampMax);
    return out;
}

// ── Fragment shader ──────────────────────────────────────────────────

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    // Stroke silhouette: fill mask at expanded UV (covers stroke outer boundary)
    let strokeMask = textureSample(uAtlasTexture, uAtlasSampler, input.vStrokeUV).r;

    // Fill silhouette: fill mask at scaled UV (covers original feature boundary)
    let clampedFillUV = clamp(input.vFillUV, input.vAtlasClamp.xy, input.vAtlasClamp.zw);
    let fillMask = textureSample(uAtlasTexture, uAtlasSampler, clampedFillUV).r;

    // Stroke ring = silhouette difference. Amplified to full opacity so
    // concave shapes (star, cross, x) don't get lighter strokes where the
    // UV-scaled fill mask produces partial coverage at inner vertices.
    let strokeRing = min(1.0, max(0.0, strokeMask - fillMask) * 2.5);
    let alpha = input.vFillColor.a;

    // Premultiplied-alpha composite: fill + stroke in one shot
    let rgb = (fillMask * input.vFillColor.rgb + strokeRing * input.vStrokeColor) * alpha;
    let a   = max(fillMask, strokeMask) * alpha;
    return vec4<f32>(rgb, a);
}

`,iF=`

// ── Bind group 0: PixiJS global uniforms ─────────────────────────────

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};

@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

// ── Bind group 1: PixiJS local uniforms ──────────────────────────────

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};

@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

// ── Bind group 2: atlas texture + label uniforms ─────────────────────

@group(2) @binding(0) var uAtlasTexture: texture_2d<f32>;
@group(2) @binding(1) var uAtlasSampler: sampler;

struct FeatureLabelUniforms {
    uMetersPerPixel: f32,
};

@group(2) @binding(2) var<uniform> featureLabelUniforms: FeatureLabelUniforms;

// ── Constants ────────────────────────────────────────────────────────

const RENDER_FONT_SIZE: f32 = 48.0;
const LABEL_FONT_SIZE: f32 = 10.0;

// ── Vertex I/O ───────────────────────────────────────────────────────

struct VertexInput {
    // Per-vertex (shared unit quad — 4 vertices)
    @location(0) aQuadPos: vec2<f32>,    // [-0.5 .. 0.5]
    @location(1) aQuadUV: vec2<f32>,     // [0 .. 1]
    // Per-instance (one per character)
    @location(2) aWorldPos: vec2<f32>,   // Feature center in Mercator meters
    @location(3) aPixelOffset: vec2<f32>,// Offset from feature center (pixels OR meters — see aZoomParams.z)
    @location(4) aAtlasRect: vec4<f32>,  // (u, v, w, h) in atlas — normalized
    @location(5) aGlyphSize: vec2<f32>,  // glyph pixel dimensions in atlas
    @location(6) aAlpha: f32,            // 0 = hidden, 1 = visible
    // Packed vec4: (appearZoom, fullZoom, fontSizeEncoded, disappearZoom)
    // fontSizeEncoded > 0: absolute mode — value is font height in world meters.
    // fontSizeEncoded < 0: relative mode — abs(value) is font height in screen pixels.
    @location(7) aZoomParams: vec4<f32>,
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vUV: vec2<f32>,
    @location(1) vAlpha: f32,
};

// ── Vertex shader ────────────────────────────────────────────────────

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let mpp = featureLabelUniforms.uMetersPerPixel;

    // ── Per-instance zoom-based fade ──
    let appearZoom      = input.aZoomParams.x;
    let fullZoom        = input.aZoomParams.y;
    let fontSizeEncoded = input.aZoomParams.z;
    let disappearZoom   = input.aZoomParams.w;

    let zoom = log2(40075016.685578488 / (256.0 * mpp));
    var zoomAlpha = 1.0;
    if (zoom < appearZoom) {
        zoomAlpha = 0.0;
    } else if (zoom < fullZoom) {
        zoomAlpha = (zoom - appearZoom) / (fullZoom - appearZoom);
    }
    if (disappearZoom < 90.0 && zoom > disappearZoom) {
        zoomAlpha *= max(0.0, 1.0 - (zoom - disappearZoom));
    }

    // Collapse invisible chars to degenerate triangle
    let effectiveAlpha = input.aAlpha * zoomAlpha;
    if (effectiveAlpha < 0.01) {
        var out: VertexOutput;
        out.position = vec4<f32>(0.0, 0.0, 0.0, 1.0);
        out.vUV = vec2<f32>(0.0, 0.0);
        out.vAlpha = 0.0;
        return out;
    }

    // ── Font size and scale mode ──
    // fontSizeEncoded > 0: absolute — font height in world meters, constant at all zooms.
    // fontSizeEncoded < 0: relative — font height in screen pixels, scale with mpp.
    var charScale: f32;
    var offsetM: vec2<f32>;
    if (fontSizeEncoded > 0.0) {
        // Absolute mode: glyph size in world meters = aGlyphSize * fontSizeM / RENDER_FONT_SIZE
        charScale = fontSizeEncoded / RENDER_FONT_SIZE;
        // aPixelOffset was pre-computed in world meters (no mpp multiply)
        offsetM = vec2<f32>(input.aPixelOffset.x, -input.aPixelOffset.y);
    } else {
        // Relative mode: glyph size in world meters = aGlyphSize * fontSizePx * mpp / RENDER_FONT_SIZE
        let fontSizePx = select(LABEL_FONT_SIZE, -fontSizeEncoded, fontSizeEncoded < -0.001);
        charScale = fontSizePx * mpp / RENDER_FONT_SIZE;
        // aPixelOffset is in screen pixels — convert to world meters
        offsetM = input.aPixelOffset * mpp;
        offsetM.y = -offsetM.y;
    }

    // Scale quad by glyph size (no rotation, flip Y for Mercator)
    let localPos = vec2<f32>(
        input.aQuadPos.x * input.aGlyphSize.x * charScale,
        input.aQuadPos.y * input.aGlyphSize.y * -charScale
    );

    // World position = feature center + offset (in meters) + glyph quad
    let worldPos = input.aWorldPos + offsetM + localPos;
    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;
    let clip = mvp * vec3<f32>(worldPos, 1.0);

    // Remap quad UV to atlas sub-region
    let atlasUV = input.aAtlasRect.xy + input.aQuadUV * input.aAtlasRect.zw;

    var out: VertexOutput;
    out.position = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vUV = atlasUV;
    out.vAlpha = effectiveAlpha;
    return out;
}

// ── Fragment shader (SDF) ────────────────────────────────────────────

const SDF_EDGE: f32 = 0.5;
const OUTLINE_FACTOR: f32 = 0.56;
const FILL_COLOR = vec3<f32>(1.0, 1.0, 1.0);
const OUTLINE_COLOR = vec3<f32>(0.0, 0.0, 0.0);

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    let dist = textureSample(uAtlasTexture, uAtlasSampler, input.vUV).r;
    let smoothing = fwidth(dist) * 0.5;

    let fillAlpha = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, dist);
    let outlineEdge = SDF_EDGE * OUTLINE_FACTOR;
    let outlineAlpha = smoothstep(outlineEdge - smoothing, outlineEdge + smoothing, dist);

    let color = mix(OUTLINE_COLOR, FILL_COLOR, fillAlpha);
    let alpha = outlineAlpha * input.vAlpha;
    return vec4<f32>(color * alpha, alpha);
}

`,iB=`

// ── Bind group 0: PixiJS global uniforms ─────────────────────────────

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};
@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

// ── Bind group 1: PixiJS local uniforms ──────────────────────────────

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};
@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

// ── Bind group 2: shape atlas texture + feature uniforms ─────────────

@group(2) @binding(0) var uAtlasTexture: texture_2d<f32>;
@group(2) @binding(1) var uAtlasSampler: sampler;

struct FeatureUniforms {
    uMetersPerPixel: f32,
    uStrokeWidthPx: f32,
};
@group(2) @binding(2) var<uniform> featureUniforms: FeatureUniforms;

// ── Vertex I/O ───────────────────────────────────────────────────────

struct VertexInput {
    @location(0) aQuadPos:    vec2<f32>,
    @location(1) aQuadUV:     vec2<f32>,
    @location(2) aWorldPos:   vec2<f32>,
    @location(3) aAtlasRect:  vec4<f32>,
    @location(4) aColor:      vec4<f32>,
    @location(5) aSize:       f32,
    @location(6) aZoomParams: vec4<f32>,  // (appearZoom, fullZoom, scaleMode, disappearZoom)
    @location(7) aPickId:     vec3<f32>,  // pre-encoded (R, G, B) in [0..1]
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vStrokeUV:   vec2<f32>,
    @location(1) vPickColor:  vec3<f32>,
    @location(2) vAtlasClamp: vec4<f32>,
};

// ── Vertex shader ────────────────────────────────────────────────────

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let mpp = featureUniforms.uMetersPerPixel;

    let appearZoom    = input.aZoomParams.x;
    let fullZoom      = input.aZoomParams.y;
    let scaleMode     = input.aZoomParams.z;
    let disappearZoom = input.aZoomParams.w;

    let zoom = log2(40075016.685578488 / (256.0 * mpp));

    // For picking, use a hard cutoff — no fade, just visible or not
    let effectiveAlpha = input.aColor.a;
    let fullyDisappeared = disappearZoom < 90.0 && zoom > disappearZoom + 1.0;
    if (effectiveAlpha < 0.01 || zoom < appearZoom || fullyDisappeared) {
        var out: VertexOutput;
        out.position    = vec4<f32>(0.0, 0.0, 0.0, 1.0);
        out.vStrokeUV   = vec2<f32>(0.0, 0.0);
        out.vPickColor  = vec3<f32>(0.0, 0.0, 0.0);
        out.vAtlasClamp = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        return out;
    }

    var sizeM: f32;
    if (scaleMode < 0.5) {
        sizeM = input.aSize * mpp;
    } else {
        sizeM = input.aSize;
    }

    // Include stroke in the clickable area
    const BASE_SIZE_REF: f32 = 11.8125;
    var halfStroke: f32;
    if (scaleMode < 0.5) {
        halfStroke = 0.5 * featureUniforms.uStrokeWidthPx * mpp * (56.0 / 48.0);
    } else {
        halfStroke = sizeM * 0.5 * featureUniforms.uStrokeWidthPx * (56.0 / 48.0) / BASE_SIZE_REF;
    }
    let drawSizeM = sizeM + 2.0 * halfStroke;

    let localPos = vec2<f32>(
        input.aQuadPos.x *  drawSizeM,
        input.aQuadPos.y * -drawSizeM
    );

    let worldPos = input.aWorldPos + localPos;
    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;
    let clip = mvp * vec3<f32>(worldPos, 1.0);

    let strokeUV = input.aAtlasRect.xy + input.aQuadUV * input.aAtlasRect.zw;
    let clampMin = input.aAtlasRect.xy;
    let clampMax = input.aAtlasRect.xy + input.aAtlasRect.zw;

    var out: VertexOutput;
    out.position    = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vStrokeUV   = strokeUV;
    out.vPickColor  = input.aPickId;
    out.vAtlasClamp = vec4<f32>(clampMin, clampMax);
    return out;
}

// ── Fragment shader ──────────────────────────────────────────────────

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    let shapeMask = textureSample(uAtlasTexture, uAtlasSampler, input.vStrokeUV).r;

    // Hard cutoff — pixel is inside the shape or not
    if (shapeMask < 0.25) {
        discard;
    }

    return vec4<f32>(input.vPickColor, 1.0);
}

`,iR=`#version 300 es
in vec2 aQuadPos;
in vec2 aQuadUV;
in vec2 aWorldPos;
in vec4 aAtlasRect;
in vec4 aColor;
in float aSize;
in vec4 aStrokeColor;
in vec4 aZoomParams;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uMetersPerPixel;
uniform float uStrokeWidthPx;

out vec2 vStrokeUV;
out vec2 vFillUV;
out vec4 vFillColor;
out vec3 vStrokeColor;
out vec4 vAtlasClamp;

void main() {
    float mpp = uMetersPerPixel;
    float appearZoom    = aZoomParams.x;
    float fullZoom      = aZoomParams.y;
    float scaleMode     = aZoomParams.z;
    float disappearZoom = aZoomParams.w;

    float zoom = log2(40075016.685578488 / (256.0 * mpp));
    float zoomAlpha = 1.0;
    if (zoom < appearZoom) {
        zoomAlpha = 0.0;
    } else if (zoom < fullZoom) {
        zoomAlpha = (zoom - appearZoom) / (fullZoom - appearZoom);
    }
    if (disappearZoom < 90.0 && zoom > disappearZoom) {
        zoomAlpha *= max(0.0, 1.0 - (zoom - disappearZoom));
    }

    float effectiveAlpha = aColor.a * zoomAlpha;
    if (effectiveAlpha < 0.01) {
        gl_Position  = vec4(0.0, 0.0, 0.0, 1.0);
        vStrokeUV    = vec2(0.0);
        vFillUV      = vec2(0.0);
        vFillColor   = vec4(0.0);
        vStrokeColor = vec3(0.0);
        vAtlasClamp  = vec4(0.0);
        return;
    }

    float sizeM = (scaleMode < 0.5) ? aSize * mpp : aSize;

    const float BASE_SIZE_REF = 11.8125;
    float halfStroke = (scaleMode < 0.5)
        ? 0.5 * uStrokeWidthPx * mpp * (56.0 / 48.0)
        : sizeM * 0.5 * uStrokeWidthPx * (56.0 / 48.0) / BASE_SIZE_REF;

    float drawSizeM = sizeM + 2.0 * halfStroke;
    float fillSizeM = sizeM - 2.0 * halfStroke;

    vec2 localPos = vec2(aQuadPos.x * drawSizeM, aQuadPos.y * -drawSizeM);
    vec2 worldPos = aWorldPos + localPos;

    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    vec2 strokeUV = aAtlasRect.xy + aQuadUV * aAtlasRect.zw;
    vec2 uvCenter = aAtlasRect.xy + 0.5 * aAtlasRect.zw;
    float uvScale  = drawSizeM / max(fillSizeM, 0.001);
    vec2 fillUV    = uvCenter + (strokeUV - uvCenter) * uvScale;

    gl_Position  = vec4(clip.xy, 0.0, 1.0);
    vStrokeUV    = strokeUV;
    vFillUV      = fillUV;
    vFillColor   = vec4(aColor.rgb, effectiveAlpha);
    vStrokeColor = aStrokeColor.rgb;
    vAtlasClamp  = vec4(aAtlasRect.xy, aAtlasRect.xy + aAtlasRect.zw);
}
`,iD=`#version 300 es
precision highp float;

uniform sampler2D uAtlasTexture;

in vec2 vStrokeUV;
in vec2 vFillUV;
in vec4 vFillColor;
in vec3 vStrokeColor;
in vec4 vAtlasClamp;
out vec4 finalColor;

void main() {
    float strokeMask = texture(uAtlasTexture, vStrokeUV).r;
    vec2 clampedFillUV = clamp(vFillUV, vAtlasClamp.xy, vAtlasClamp.zw);
    float fillMask = texture(uAtlasTexture, clampedFillUV).r;

    float strokeRing = min(1.0, max(0.0, strokeMask - fillMask) * 2.5);
    float alpha = vFillColor.a;

    vec3 rgb = (fillMask * vFillColor.rgb + strokeRing * vStrokeColor) * alpha;
    float a   = max(fillMask, strokeMask) * alpha;
    finalColor = vec4(rgb, a);
}
`,iO=`#version 300 es
in vec2 aQuadPos;
in vec2 aQuadUV;
in vec2 aWorldPos;
in vec2 aPixelOffset;
in vec4 aAtlasRect;
in vec2 aGlyphSize;
in float aAlpha;
in vec4 aZoomParams;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uMetersPerPixel;

out vec2 vUV;
out float vAlpha;

const float RENDER_FONT_SIZE = 48.0;
const float LABEL_FONT_SIZE = 10.0;

void main() {
    float mpp = uMetersPerPixel;
    float appearZoom      = aZoomParams.x;
    float fullZoom        = aZoomParams.y;
    float fontSizeEncoded = aZoomParams.z;
    float disappearZoom   = aZoomParams.w;

    float zoom = log2(40075016.685578488 / (256.0 * mpp));
    float zoomAlpha = 1.0;
    if (zoom < appearZoom) {
        zoomAlpha = 0.0;
    } else if (zoom < fullZoom) {
        zoomAlpha = (zoom - appearZoom) / (fullZoom - appearZoom);
    }
    if (disappearZoom < 90.0 && zoom > disappearZoom) {
        zoomAlpha *= max(0.0, 1.0 - (zoom - disappearZoom));
    }

    float effectiveAlpha = aAlpha * zoomAlpha;
    if (effectiveAlpha < 0.01) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        vUV = vec2(0.0);
        vAlpha = 0.0;
        return;
    }

    float charScale;
    vec2 offsetM;
    if (fontSizeEncoded > 0.0) {
        charScale = fontSizeEncoded / RENDER_FONT_SIZE;
        offsetM = vec2(aPixelOffset.x, -aPixelOffset.y);
    } else {
        float fontSizePx = (fontSizeEncoded < -0.001) ? -fontSizeEncoded : LABEL_FONT_SIZE;
        charScale = fontSizePx * mpp / RENDER_FONT_SIZE;
        offsetM = aPixelOffset * mpp;
        offsetM.y = -offsetM.y;
    }

    vec2 localPos = vec2(
        aQuadPos.x * aGlyphSize.x * charScale,
        aQuadPos.y * aGlyphSize.y * -charScale
    );

    vec2 worldPos = aWorldPos + offsetM + localPos;
    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    gl_Position = vec4(clip.xy, 0.0, 1.0);
    vUV = aAtlasRect.xy + aQuadUV * aAtlasRect.zw;
    vAlpha = effectiveAlpha;
}
`,iU=`#version 300 es
precision highp float;

uniform sampler2D uAtlasTexture;

in vec2 vUV;
in float vAlpha;
out vec4 finalColor;

const float SDF_EDGE = 0.5;
const float OUTLINE_FACTOR = 0.56;
const vec3 FILL_COLOR = vec3(1.0, 1.0, 1.0);
const vec3 OUTLINE_COLOR = vec3(0.0, 0.0, 0.0);

void main() {
    float dist = texture(uAtlasTexture, vUV).r;
    float smoothing = fwidth(dist) * 0.5;

    float fillAlpha = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, dist);
    float outlineEdge = SDF_EDGE * OUTLINE_FACTOR;
    float outlineAlpha = smoothstep(outlineEdge - smoothing, outlineEdge + smoothing, dist);

    vec3 color = mix(OUTLINE_COLOR, FILL_COLOR, fillAlpha);
    float alpha = outlineAlpha * vAlpha;
    finalColor = vec4(color * alpha, alpha);
}
`,iZ=`#version 300 es
in vec2 aQuadPos;
in vec2 aQuadUV;
in vec2 aWorldPos;
in vec4 aAtlasRect;
in vec4 aColor;
in float aSize;
in vec4 aZoomParams;
in vec3 aPickId;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uMetersPerPixel;
uniform float uStrokeWidthPx;

out vec2 vStrokeUV;
out vec3 vPickColor;
out vec4 vAtlasClamp;

void main() {
    float mpp = uMetersPerPixel;
    float appearZoom    = aZoomParams.x;
    float scaleMode     = aZoomParams.z;
    float disappearZoom = aZoomParams.w;

    float zoom = log2(40075016.685578488 / (256.0 * mpp));

    bool fullyDisappeared = disappearZoom < 90.0 && zoom > disappearZoom + 1.0;
    if (aColor.a < 0.01 || zoom < appearZoom || fullyDisappeared) {
        gl_Position  = vec4(0.0, 0.0, 0.0, 1.0);
        vStrokeUV    = vec2(0.0);
        vPickColor   = vec3(0.0);
        vAtlasClamp  = vec4(0.0);
        return;
    }

    float sizeM = (scaleMode < 0.5) ? aSize * mpp : aSize;

    const float BASE_SIZE_REF = 11.8125;
    float halfStroke = (scaleMode < 0.5)
        ? 0.5 * uStrokeWidthPx * mpp * (56.0 / 48.0)
        : sizeM * 0.5 * uStrokeWidthPx * (56.0 / 48.0) / BASE_SIZE_REF;

    float drawSizeM = sizeM + 2.0 * halfStroke;
    vec2 localPos = vec2(aQuadPos.x * drawSizeM, aQuadPos.y * -drawSizeM);
    vec2 worldPos = aWorldPos + localPos;

    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    gl_Position  = vec4(clip.xy, 0.0, 1.0);
    vStrokeUV    = aAtlasRect.xy + aQuadUV * aAtlasRect.zw;
    vPickColor   = aPickId;
    vAtlasClamp  = vec4(aAtlasRect.xy, aAtlasRect.xy + aAtlasRect.zw);
}
`,iV=`#version 300 es
precision highp float;

uniform sampler2D uAtlasTexture;

in vec2 vStrokeUV;
in vec3 vPickColor;
in vec4 vAtlasClamp;
out vec4 finalColor;

void main() {
    float shapeMask = texture(uAtlasTexture, vStrokeUV).r;
    if (shapeMask < 0.25) {
        discard;
    }
    finalColor = vec4(vPickColor, 1.0);
}
`,iG=56/48*10.125,iW={floor:3.817931,ceiling:8.192349,midScale:.8700965,steepness:2.330058};function iX(e,t){return t.floor+(t.ceiling-t.floor)/(1+Math.pow(e/t.midScale,t.steepness))}function iY(e,t,i){return Math.log2(40075016.68557849/(e*t/i*256))}function iN(e){if(!e||0===e.length)return 5;for(let t of e){let e=t.toLowerCase();if("city"===e)return 3;if("battalion"===e)return 4}return 5}let i$=null,ij=null,iq=null,iH=null,iK=null,iQ=null,iJ=new Map,i0=null,i2=null,i1=56/48*2/(2*iG);function i3(e){if(e.width<=8192&&e.height<=8192)return e;let t=8192/Math.max(e.width,e.height),i=Math.round(e.width*t),r=Math.round(e.height*t),a=document.createElement("canvas");return a.width=i,a.height=r,a.getContext("2d").drawImage(e.source.resource,0,0,i,r),new eF.Texture({source:new e3.ImageSource({resource:a,scaleMode:"linear"})})}async function i5(e){let t=e.filter(e=>e&&!iJ.has(e));if(0===t.length)return;let i=t.map(e=>iS.load({src:e,parser:"loadTextures"}).then(t=>{iJ.set(e,i3(t))}).catch(t=>{console.warn(`[MapFeatureLayer] preload failed: ${e}`,t)}));await Promise.all(i)}class i4{container;_shapeMesh=null;_shapeGeometry=null;_shapeShader=null;_shapeAtlas=null;_colorData=null;_colorBuffer=null;_strokeColorData=null;_strokeColorBuffer=null;_labelMesh=null;_labelGeometry=null;_labelShader=null;_glyphAtlas=null;_labelAlphaData=null;_labelAlphaBuffer=null;_labelWorldPosData=null;_labelWorldPosBuffer=null;_labelPixelOffsetData=null;_labelPixelOffsetBuffer=null;_flagSprites=new Map;_flagContainer;_flagData=[];_flagById=new Map;pickingContainer;_pickMesh=null;_pickGeometry=null;_pickShader=null;_pickIdData=null;_pickIdBuffer=null;_pickIndexToId=[];_featureMeta=[];_metaById=new Map;_sortedMeta=[];_visibleSet=new Set;_prevVisibleCount=-1;_metersPerPixel=1;_worldPosData=null;_worldPosBuffer=null;_sizeData=null;_sizeBuffer=null;_atlasRectData=null;_atlasRectBuffer=null;_zoomParamsData=null;_zoomParamsBuffer=null;_bufferCapacity=0;_shapeCount=0;_prevShapeFeatureIds=new Map;_lastFingerprint="";_batchMode=!1;_dirtyBuffers=new Set;_viewportWidth=1920;_viewportHeight=1080;debugShowLabelBoxes=!1;_debugGraphics=null;constructor(){this.container=new p.Container({label:"mapFeatures"}),this._flagContainer=new p.Container({label:"mapFeatures:flags"}),this.container.addChild(this._flagContainer),this.pickingContainer=new p.Container({label:"mapFeatures:picking"})}setViewport(e,t){this._viewportWidth=e,this._viewportHeight=t}beginBatch(){this._batchMode=!0}endBatch(){for(let e of this._dirtyBuffers)e.update();this._dirtyBuffers.clear(),this._batchMode=!1}_updateBuffer(e){this._batchMode?this._dirtyBuffers.add(e):e.update()}_renderingOptions={};setFeatures(e,t){let i=i4._computeFingerprint(e);if(i===this._lastFingerprint&&this._featureMeta.length>0)return;this._lastFingerprint=i,t&&(this._renderingOptions=t);let r=this._renderingOptions;this._shapeAtlas||(this._shapeAtlas=(iz||(iz=new iI),iz)),this._glyphAtlas||(this._glyphAtlas=e9());let a=this._glyphAtlas,s=[],o=[];for(let t of e){var n;"flag"!==(n=t.shape)&&"full-flag"!==n?s.push(t):o.push(t)}let l=(e,t)=>iN(e.tags)-iN(t.tags);s.sort(l),o.sort(l);let h=this._canUpdateShapeBuffersInPlace(s);for(let t of e)t.label&&a.ensureGlyphs(t.label);this._featureMeta=[];let u=[],f=(e,t,i)=>{let s,o,n,l,h,f,d,c,p,m=en(e.position[0],e.position[1]),_=e.scale??1,g=+("absolute"===(s=e.scaleMode?e.scaleMode:"centroid"===(e.featureType??"coordinate")?r.centroidScaleMode??"absolute":r.coordinateScaleMode??"relative"));if(e.scaleMode)o=e.appearCurve??("relative"===s?iW:void 0),n=e.absoluteBaseSizeMeters??15e3,l=e.absoluteMinPixelSize??2,h=e.absoluteMaxPixelSize??56;else{let t="centroid"===(e.featureType??"coordinate");o=t?r.centroidAppearCurve??iW:r.coordinateAppearCurve??iW,n=t?r.centroidAbsoluteBaseSize??15e3:r.coordinateAbsoluteBaseSize??15e3,l=t?r.centroidAbsoluteMinPixelSize??2:r.coordinateAbsoluteMinPixelSize??2,h=t?r.centroidAbsoluteMaxPixelSize??56:r.coordinateAbsoluteMaxPixelSize??56}let y=(f=1===g?iY(n,_,l):iX(_,o??iW))+(1===g?.5:.4),x=1===g?iY(n,_,h):100,v=1===g?n*_:iG*_,b=e.lbScale??_,w=(d=1===g?iY(n,b,l):iX(b,o??iW))+.4,M=e.lbSize??1;c=1===g?n*b*1.2*M:-(Math.max(6,Math.min(16,6.75*_*1.2))*M),p=0===g?6.75*_:v/2;let A=this._buildLabelChars(e,m.x,m.y,a,u,d,w,c,p,x),C=A>=0?u.length-A:0,S=1.1*p,P=(c>0?c:Math.abs(c))/48,T=0;if(e.label)for(let t of e.label)T+=a.getGlyph(t).size[0]*P*.65;let k=0,I=0,z=e.labelPlacement??"above";"above"===z?I=S:"below"===z?I=-S:"left"===z?k=-S-T/2:"right"===z&&(k=S+T/2),this._featureMeta.push({id:e.id,mercX:m.x,mercY:m.y,originalAlpha:e.opacity??1,appearZoom:f,fullZoom:y,disappearZoom:x,scaleMode:g,baseSizeMeters:n,tagZIndex:iN(e.tags),shapeIndex:t,labelCharStart:A,labelCharCount:C,labelBaseOffsetX:k,labelBaseOffsetY:I,labelTotalWidth:T,scale:_,sizeValue:v,isFlag:i})};for(let e=0;e<s.length;e++)f(s[e],e,!1);for(let e of o)f(e,-1,!0);for(let e of(this._metaById.clear(),this._featureMeta))this._metaById.set(e.id,e);this._sortedMeta=[...this._featureMeta].sort((e,t)=>e.tagZIndex-t.tagZIndex||t.scale-e.scale),h?this._updateShapeBuffersInPlace(s):(this._destroyShapeResources(),s.length>0&&this._buildShapeMesh(s,this._shapeAtlas)),this._destroyLabelResources(),u.length>0&&this._buildLabelMesh(u,a),this._destroyFlagResources(),o.length>0&&this._buildFlagSprites(o),this._buildPickMesh(),this._prevVisibleCount=-1}updateForZoom(e,t,i){let r=2*eo/(256*Math.pow(2,e));for(let t of(this._metersPerPixel=r,this._shapeShader&&(this._shapeShader.resources.featureUniforms.uniforms.uMetersPerPixel=r),this._pickShader&&(this._pickShader.resources.featureUniforms.uniforms.uMetersPerPixel=r),this._labelShader&&(this._labelShader.resources.featureLabelUniforms.uniforms.uMetersPerPixel=r),this._visibleSet.clear(),this._sortedMeta))!(e<t.appearZoom)&&(t.disappearZoom<100&&e>t.disappearZoom+1||this._visibleSet.add(t.id));let a=this._visibleSet.size!==this._prevVisibleCount;if(this._prevVisibleCount=this._visibleSet.size,a){if(this._colorData&&this._colorBuffer){for(let e of this._featureMeta){if(e.shapeIndex<0)continue;let t=4*e.shapeIndex+3;this._colorData[t]=this._visibleSet.has(e.id)?e.originalAlpha:0}this._colorBuffer.update()}if(this._labelAlphaData&&this._labelAlphaBuffer){for(let e of this._featureMeta){if(e.labelCharStart<0)continue;let t=this._visibleSet.has(e.id)?e.originalAlpha:0;for(let i=e.labelCharStart;i<e.labelCharStart+e.labelCharCount;i++)this._labelAlphaData[i]=t}this._labelAlphaBuffer.update()}for(let e of this._flagData){let t=e.loaded&&this._visibleSet.has(e.id);e.sprite.visible=t,e.borderSprite.visible=t}}let s=56/48*r;for(let t of this._flagData){let i;if(!t.sprite.visible||(i=e<t.appearZoom?0:e<t.fullZoom?(e-t.appearZoom)/(t.fullZoom-t.appearZoom):1,t.disappearZoom<100&&e>t.disappearZoom&&(i*=Math.max(0,1-(e-t.disappearZoom)/1)),t.sprite.alpha=i,t.borderSprite.alpha=i,i<.01)){t.borderSprite.visible=!1;continue}let a=1===t.scaleMode?t.sizeValue:t.sizeValue*r,o=1===t.scaleMode?a*i1:s;if(t.isFullFlag){let e=(1===t.scaleMode?t.sizeValue/r/2:t.sizeValue*(48/56)/2)*t.fullFlagScaleFactor,i=t.sprite.texture,a=i.width*e*r,s=i.height*e*r;t.sprite.scale.set(a/i.width,-(s/i.height));let n=(a+2*o)/64,l=(s+2*o)/64;t.borderSprite.scale.set(n,-l)}else{let e;e=1===t.scaleMode?t.sizeValue:t.sizeValue*r;let i=t.sprite.texture,a=Math.max(i.width,i.height);if(a>1){let i=e/a;t.sprite.scale.set(i,-i)}else t.sprite.scale.set(e,-e);let s=(e+2*o)/64;t.borderSprite.scale.set(s,-s)}t.borderSprite.visible=!0}if(this.debugShowLabelBoxes&&this._featureMeta.length>0){this._debugGraphics||(this._debugGraphics=new k.Graphics,this._debugGraphics.label="mapFeatures:debugLabelBoxes",this.container.addChild(this._debugGraphics));let t=this._debugGraphics;for(let i of(t.clear(),this._featureMeta)){if(i.labelCharStart<0||0===i.labelCharCount||e<i.appearZoom||!this._visibleSet.has(i.id))continue;let a=1===i.scaleMode,s=a?1.2*i.sizeValue*.85/2:.85*Math.max(6,Math.min(16,6.75*i.scale*1.2))*r/2,o=i.labelTotalWidth/2,n=i.labelBaseOffsetX,l=i.labelBaseOffsetY;a||(o*=r,n*=r,l*=r);let h=i.mercX+n,u=i.mercY-l,f=0xff0000;l>0&&1>Math.abs(n)?f=65280:l<0&&1>Math.abs(n)?f=35071:n<0?f=0xffff00:n>0&&(f=0xff00ff),t.rect(h-o,u-s,2*o,2*s),t.stroke({color:f,width:2*r,alpha:.7})}}else this._debugGraphics&&this._debugGraphics.clear()}isFeatureVisible(e){return this._visibleSet.has(e)}destroy(){this._destroyResources(),this._flagContainer.destroy({children:!0}),this.pickingContainer.destroy({children:!0}),this.container.destroy({children:!0})}_buildLabelChars(e,t,i,r,a,s,o,n,l,h){if(!e.label||"noLabel"===e.labelPlacement)return -1;let u=a.length,f=e.label,d=e.labelPlacement??"above",c=(n>0?n:Math.abs(n))/48,p=0;for(let e of f)p+=r.getGlyph(e).size[0]*c*.65;let m=1.1*l,_=0,g=0;switch(d){case"above":g=m;break;case"below":g=-m;break;case"left":_=-m-p/2;break;case"right":_=m+p/2}let y=-p/2;for(let e of f){let l=r.getGlyph(e),u=l.size[0]*c*.65,f=y+u/2;a.push({mercX:t,mercY:i,pxOffsetX:_+f,pxOffsetY:g,atlasRect:l.atlasRect,glyphSize:l.size,labelAppearZoom:s,labelFullZoom:o,fontSizeEncoded:n,disappearZoom:h}),y+=u}return u}_canUpdateShapeBuffersInPlace(e){if(!this._shapeGeometry||0===this._prevShapeFeatureIds.size||e.length!==this._prevShapeFeatureIds.size)return!1;for(let t=0;t<e.length;t++){let i=this._prevShapeFeatureIds.get(e[t].id);if(void 0===i||i!==t)return!1}return!0}_updateShapeBuffersInPlace(e){let t=this._shapeAtlas;for(let i=0;i<e.length;i++){let r=e[i],a=r.opacity??1,s=en(r.position[0],r.position[1]);this._worldPosData[2*i]=s.x,this._worldPosData[2*i+1]=s.y;let o=t.getShape(r.shape);this._atlasRectData[4*i]=o.atlasRect[0],this._atlasRectData[4*i+1]=o.atlasRect[1],this._atlasRectData[4*i+2]=o.atlasRect[2],this._atlasRectData[4*i+3]=o.atlasRect[3],this._colorData[4*i]=(r.color>>16&255)/255,this._colorData[4*i+1]=(r.color>>8&255)/255,this._colorData[4*i+2]=(255&r.color)/255,this._colorData[4*i+3]=a;let n=r.strokeColor??0xffffff;this._strokeColorData[4*i]=(n>>16&255)/255,this._strokeColorData[4*i+1]=(n>>8&255)/255,this._strokeColorData[4*i+2]=(255&n)/255,this._strokeColorData[4*i+3]=a;let l=this._featureMeta[i];this._sizeData[i]=l.sizeValue,this._zoomParamsData[4*i]=l.appearZoom,this._zoomParamsData[4*i+1]=l.fullZoom,this._zoomParamsData[4*i+2]=l.scaleMode,this._zoomParamsData[4*i+3]=l.disappearZoom}this._worldPosBuffer.update(),this._atlasRectBuffer.update(),this._colorBuffer.update(),this._strokeColorBuffer.update(),this._sizeBuffer.update(),this._zoomParamsBuffer.update()}_buildShapeMesh(e,t){let i=e.length,r=Math.max(2*i,256);this._bufferCapacity=r,this._shapeCount=i;let a=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),s=new Float32Array([0,0,1,0,1,1,0,1]),o=new Uint32Array([0,1,2,0,2,3]),n=new Float32Array(2*r),l=new Float32Array(4*r),h=new Float32Array(4*r),u=new Float32Array(4*r),f=new Float32Array(r),d=new Float32Array(4*r);this._prevShapeFeatureIds=new Map;for(let r=0;r<i;r++){let i=e[r],a=i.opacity??1,s=en(i.position[0],i.position[1]);n[2*r]=s.x,n[2*r+1]=s.y;let o=t.getShape(i.shape);l[4*r]=o.atlasRect[0],l[4*r+1]=o.atlasRect[1],l[4*r+2]=o.atlasRect[2],l[4*r+3]=o.atlasRect[3],h[4*r]=(i.color>>16&255)/255,h[4*r+1]=(i.color>>8&255)/255,h[4*r+2]=(255&i.color)/255,h[4*r+3]=a;let c=i.strokeColor??0xffffff;u[4*r]=(c>>16&255)/255,u[4*r+1]=(c>>8&255)/255,u[4*r+2]=(255&c)/255,u[4*r+3]=a;let p=this._featureMeta[r];f[r]=p.sizeValue,d[4*r]=p.appearZoom,d[4*r+1]=p.fullZoom,d[4*r+2]=p.scaleMode,d[4*r+3]=p.disappearZoom,this._prevShapeFeatureIds.set(i.id,r)}this._colorData=h,this._strokeColorData=u,this._worldPosData=n,this._sizeData=f,this._atlasRectData=l,this._zoomParamsData=d;let c=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,p=new eP.Buffer({data:h,usage:c,label:"feat-color"}),m=new eP.Buffer({data:u,usage:c,label:"feat-stroke"}),_=new eP.Buffer({data:n,usage:c,label:"feat-world-pos"}),g=new eP.Buffer({data:f,usage:c,label:"feat-size"}),y=new eP.Buffer({data:l,usage:c,label:"feat-atlas-rect"}),x=new eP.Buffer({data:d,usage:c,label:"feat-zoom"});this._shapeGeometry=new ek.Geometry({attributes:{aQuadPos:{buffer:new eP.Buffer({data:a,usage:c,label:"feat-quad-pos"}),format:"float32x2"},aQuadUV:{buffer:new eP.Buffer({data:s,usage:c,label:"feat-quad-uv"}),format:"float32x2"},aWorldPos:{buffer:_,format:"float32x2",instance:!0},aAtlasRect:{buffer:y,format:"float32x4",instance:!0},aColor:{buffer:p,format:"float32x4",instance:!0},aSize:{buffer:g,format:"float32",instance:!0},aStrokeColor:{buffer:m,format:"float32x4",instance:!0},aZoomParams:{buffer:x,format:"float32x4",instance:!0}},indexBuffer:new eP.Buffer({data:o,usage:eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,label:"feat-index"}),instanceCount:i}),this._colorBuffer=p,this._strokeColorBuffer=m,this._worldPosBuffer=_,this._sizeBuffer=g,this._atlasRectBuffer=y,this._zoomParamsBuffer=x,this._shapeShader=new eN.Shader({gpuProgram:(i$||(i$=new ez.GpuProgram({vertex:{source:iE,entryPoint:"vsMain"},fragment:{source:iE,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),i$),glProgram:(iH||(iH=new eI.GlProgram({vertex:iR,fragment:iD})),iH),resources:{uAtlasTexture:t.texture.source,uAtlasSampler:t.texture.source.style,featureUniforms:{uMetersPerPixel:{value:this._metersPerPixel,type:"f32"},uStrokeWidthPx:{value:2,type:"f32"}}}}),this._shapeMesh=new eY({geometry:this._shapeGeometry,shader:this._shapeShader}),this._shapeMesh.label="mapFeatures:shapes",this.container.addChildAt(this._shapeMesh,0)}_buildPickMesh(){this._destroyPickResources();let e=this._shapeAtlas;if(!e||0===this._featureMeta.length)return;let t=this._featureMeta.length,i=[""],r=new Float32Array(2*t),a=new Float32Array(4*t),s=new Float32Array(4*t),o=new Float32Array(t),n=new Float32Array(4*t),l=new Float32Array(3*t),h=e.getShape("circle");for(let e=0;e<t;e++){let t=this._featureMeta[e],u=e+1;if(i.push(t.id),r[2*e]=t.mercX,r[2*e+1]=t.mercY,t.isFlag)a[4*e]=h.atlasRect[0],a[4*e+1]=h.atlasRect[1],a[4*e+2]=h.atlasRect[2],a[4*e+3]=h.atlasRect[3];else if(t.shapeIndex>=0&&this._atlasRectData){let i=t.shapeIndex;a[4*e]=this._atlasRectData[4*i],a[4*e+1]=this._atlasRectData[4*i+1],a[4*e+2]=this._atlasRectData[4*i+2],a[4*e+3]=this._atlasRectData[4*i+3]}else{let t=h.atlasRect;a[4*e]=t[0],a[4*e+1]=t[1],a[4*e+2]=t[2],a[4*e+3]=t[3]}s[4*e+3]=t.originalAlpha,o[e]=t.sizeValue,n[4*e]=t.appearZoom,n[4*e+1]=t.fullZoom,n[4*e+2]=t.scaleMode,n[4*e+3]=t.disappearZoom,l[3*e]=(u>>16&255)/255,l[3*e+1]=(u>>8&255)/255,l[3*e+2]=(255&u)/255}this._pickIdData=l,this._pickIndexToId=i;let u=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,f=new Uint32Array([0,1,2,0,2,3]),d=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),c=new eP.Buffer({data:d,usage:u,label:"pick-quad"}),p=new eP.Buffer({data:r,usage:u,label:"pick-world-pos"}),m=new eP.Buffer({data:l,usage:u,label:"pick-id"});this._pickIdBuffer=m,this._pickGeometry=new ek.Geometry({attributes:{aQuadPos:{buffer:c,format:"float32x2",stride:16,offset:0},aQuadUV:{buffer:c,format:"float32x2",stride:16,offset:8},aWorldPos:{buffer:p,format:"float32x2",instance:!0},aAtlasRect:{buffer:new eP.Buffer({data:a,usage:u,label:"pick-atlas"}),format:"float32x4",instance:!0},aColor:{buffer:new eP.Buffer({data:s,usage:u,label:"pick-color"}),format:"float32x4",instance:!0},aSize:{buffer:new eP.Buffer({data:o,usage:u,label:"pick-size"}),format:"float32",instance:!0},aZoomParams:{buffer:new eP.Buffer({data:n,usage:u,label:"pick-zoom"}),format:"float32x4",instance:!0},aPickId:{buffer:m,format:"float32x3",instance:!0}},indexBuffer:new eP.Buffer({data:f,usage:eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,label:"pick-index"}),instanceCount:t}),this._pickShader=new eN.Shader({gpuProgram:(iq||(iq=new ez.GpuProgram({vertex:{source:iB,entryPoint:"vsMain"},fragment:{source:iB,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),iq),glProgram:(iQ||(iQ=new eI.GlProgram({vertex:iZ,fragment:iV})),iQ),resources:{uAtlasTexture:e.texture.source,uAtlasSampler:e.texture.source.style,featureUniforms:{uMetersPerPixel:{value:this._metersPerPixel,type:"f32"},uStrokeWidthPx:{value:2,type:"f32"}}}}),this._pickMesh=new eY({geometry:this._pickGeometry,shader:this._pickShader}),this._pickMesh.label="mapFeatures:picking",this.pickingContainer.addChild(this._pickMesh)}resolvePickedColor(e,t,i){let r=e<<16|t<<8|i;if(0!==r&&!(r>=this._pickIndexToId.length))return this._pickIndexToId[r]}hitTestCPU(e,t){let i,r=this._metersPerPixel,a=12*r,s=1/0,o=-1/0;for(let n=this._sortedMeta.length-1;n>=0;n--){let l=this._sortedMeta[n];if(!this._visibleSet.has(l.id))continue;let h=(l.scaleMode<.5?l.sizeValue*r:l.sizeValue)/2+a,u=e-l.mercX,f=t-l.mercY,d=u*u+f*f;!(d>h*h)&&(l.tagZIndex>o||l.tagZIndex===o&&d<s)&&(s=d,o=l.tagZIndex,i=l.id)}return i}_destroyPickResources(){this._pickMesh&&(this._pickMesh.parent?.removeChild(this._pickMesh),this._pickMesh.destroy(),this._pickMesh=null),this._pickGeometry?.destroy(!0),this._pickGeometry=null,this._pickShader?.destroy(),this._pickShader=null,this._pickIdData=null,this._pickIdBuffer=null,this._pickIndexToId=[]}_buildLabelMesh(e,t){let i=e.length,r=new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5]),a=new Float32Array([0,0,1,0,1,1,0,1]),s=new Uint32Array([0,1,2,0,2,3]),o=new Float32Array(2*i),n=new Float32Array(2*i),l=new Float32Array(4*i),h=new Float32Array(2*i),u=new Float32Array(i),f=new Float32Array(4*i);for(let t=0;t<i;t++){let i=e[t];o[2*t]=i.mercX,o[2*t+1]=i.mercY,n[2*t]=i.pxOffsetX,n[2*t+1]=i.pxOffsetY,f[4*t]=i.labelAppearZoom,f[4*t+1]=i.labelFullZoom,f[4*t+2]=i.fontSizeEncoded,f[4*t+3]=i.disappearZoom,l[4*t]=i.atlasRect[0],l[4*t+1]=i.atlasRect[1],l[4*t+2]=i.atlasRect[2],l[4*t+3]=i.atlasRect[3],h[2*t]=i.glyphSize[0],h[2*t+1]=i.glyphSize[1],u[t]=1}this._labelAlphaData=u,this._labelWorldPosData=o,this._labelPixelOffsetData=n;let d=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,c=new eP.Buffer({data:u,usage:d,label:"lbl-alpha"}),p=new eP.Buffer({data:o,usage:d,label:"lbl-world-pos"});this._labelWorldPosBuffer=p;let m=new eP.Buffer({data:n,usage:d,label:"lbl-px-offset"});this._labelPixelOffsetBuffer=m,this._labelGeometry=new ek.Geometry({attributes:{aQuadPos:{buffer:new eP.Buffer({data:r,usage:d,label:"lbl-quad-pos"}),format:"float32x2"},aQuadUV:{buffer:new eP.Buffer({data:a,usage:d,label:"lbl-quad-uv"}),format:"float32x2"},aWorldPos:{buffer:p,format:"float32x2",instance:!0},aPixelOffset:{buffer:m,format:"float32x2",instance:!0},aAtlasRect:{buffer:new eP.Buffer({data:l,usage:d,label:"lbl-atlas-rect"}),format:"float32x4",instance:!0},aGlyphSize:{buffer:new eP.Buffer({data:h,usage:d,label:"lbl-glyph-size"}),format:"float32x2",instance:!0},aAlpha:{buffer:c,format:"float32",instance:!0},aZoomParams:{buffer:new eP.Buffer({data:f,usage:d,label:"lbl-zoom"}),format:"float32x4",instance:!0}},indexBuffer:new eP.Buffer({data:s,usage:eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,label:"lbl-index"}),instanceCount:i}),this._labelAlphaBuffer=c,this._labelShader=new eN.Shader({gpuProgram:(ij||(ij=new ez.GpuProgram({vertex:{source:iF,entryPoint:"vsMain"},fragment:{source:iF,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),ij),glProgram:(iK||(iK=new eI.GlProgram({vertex:iO,fragment:iU})),iK),resources:{uAtlasTexture:t.texture.source,uAtlasSampler:t.texture.source.style,featureLabelUniforms:{uMetersPerPixel:{value:this._metersPerPixel,type:"f32"}}}}),this._labelMesh=new eY({geometry:this._labelGeometry,shader:this._labelShader}),this._labelMesh.label="mapFeatures:labels",this.container.addChild(this._labelMesh)}_buildFlagSprites(e){this._flagData=[],this._flagById.clear(),function(){if(i0)return;let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.fillStyle="#ffffff",t.beginPath(),t.arc(32,32,32,0,2*Math.PI),t.fill(),i0=new eF.Texture({source:new e3.ImageSource({resource:e,scaleMode:"linear"})});let i=document.createElement("canvas");i.width=i.height=64;let r=i.getContext("2d");r.fillStyle="#ffffff",r.beginPath(),r.roundRect(0,0,64,64,6),r.fill(),i2=new eF.Texture({source:new e3.ImageSource({resource:i,scaleMode:"linear"})})}();let t=this._featureMeta.filter(e=>!e.isFlag).length,i=0;for(let r of e){if(!r.flagUrl)continue;let e=en(r.position[0],r.position[1]),a=r.flagUrl,s="full-flag"===r.shape,o=this._featureMeta[t+i];i++;let n=o.sizeValue,l=o.scaleMode,h=NaN;s&&r.flagWidth&&r.flagHeight&&(h=.0035*(r.flagZoom??1)*(575/Math.min(r.flagWidth,r.flagHeight)));let u=iJ.get(a),f=s?i2:i0,d=new iT.Sprite(f);d.anchor.set(.5,.5),d.position.set(e.x,e.y),d.tint=r.strokeColor??0xffffff,d.visible=!1,d.label=`${s?"full-flag":"flag"}-border:${r.id}`;let c=new iT.Sprite(u??eF.Texture.WHITE);c.anchor.set(.5,.5),c.position.set(e.x,e.y),c.label=`${s?"full-flag":"flag"}:${r.id}`;let p=!!u;c.visible=!1;let m=null;if(!s){let e=u?Math.max(u.width,u.height):1;(m=new k.Graphics).circle(0,0,e/2),m.fill({color:0xffffff}),c.addChild(m),c.mask=m}if(u){let e=(1===l?n:n*this._metersPerPixel)/Math.max(u.width,u.height);c.scale.set(e,-e)}else{let e=1===l?n:n*this._metersPerPixel;c.scale.set(e,-e)}this._flagSprites.set(r.id,c);let _={id:r.id,sizeValue:n,scaleMode:l,appearZoom:o.appearZoom,fullZoom:o.fullZoom,disappearZoom:o.disappearZoom,sprite:c,borderSprite:d,clipMask:m,loaded:p,isFullFlag:s,fullFlagScaleFactor:h};if(this._flagData.push(_),this._flagById.set(r.id,_),!u){let e=this._metersPerPixel,t=m;iS.load({src:a,parser:"loadTextures"}).then(i=>{let r=i3(i);if(iJ.set(a,r),c.destroyed)return;c.texture=r;let s=1===l?n:n*e,o=Math.max(r.width,r.height),h=s/o;c.scale.set(h,-h),t&&(t.clear(),t.circle(0,0,o/2),t.fill({color:0xffffff})),_.loaded=!0}).catch(e=>{console.warn(`[MapFeatureLayer] Failed to load flag: ${a}`,e)})}}for(let e of this._flagData)this._flagContainer.addChild(e.borderSprite);for(let e of this._flagData)this._flagContainer.addChild(e.sprite)}setFeatureColor(e,t){let i=this._metaById.get(e);if(!i)return;if(i.shapeIndex>=0&&this._colorData&&this._colorBuffer){let e=4*i.shapeIndex;this._colorData[e]=(t>>16&255)/255,this._colorData[e+1]=(t>>8&255)/255,this._colorData[e+2]=(255&t)/255,this._updateBuffer(this._colorBuffer)}let r=this._flagById.get(e);r&&(r.sprite.tint=t)}setFeaturePosition(e,t){let i=this._metaById.get(e);if(!i)return;let r=en(t[0],t[1]);if(i.mercX=r.x,i.mercY=r.y,i.shapeIndex>=0&&this._worldPosData&&this._worldPosBuffer&&(this._worldPosData[2*i.shapeIndex]=r.x,this._worldPosData[2*i.shapeIndex+1]=r.y,this._updateBuffer(this._worldPosBuffer)),i.labelCharStart>=0&&this._labelWorldPosData&&this._labelWorldPosBuffer){for(let e=i.labelCharStart;e<i.labelCharStart+i.labelCharCount;e++)this._labelWorldPosData[2*e]=r.x,this._labelWorldPosData[2*e+1]=r.y;this._updateBuffer(this._labelWorldPosBuffer)}let a=this._flagById.get(e);a&&(a.sprite.position.set(r.x,r.y),a.borderSprite.position.set(r.x,r.y))}setFeatureScale(e,t){let i=this._metaById.get(e);if(!i)return;let r=(1===i.scaleMode?i.baseSizeMeters:iG)*t;i.scale=t,i.sizeValue=r,i.shapeIndex>=0&&this._sizeData&&this._sizeBuffer&&(this._sizeData[i.shapeIndex]=r,this._updateBuffer(this._sizeBuffer));let a=this._flagById.get(e);if(a){a.sizeValue=r;let e=this._metersPerPixel,t=1===i.scaleMode;if(a.isFullFlag){let i=(t?r/e/2:48/56*r/2)*a.fullFlagScaleFactor,s=a.sprite.texture;if(s.width>1&&s.height>1){let o=s.width*i*e,n=s.height*i*e;a.sprite.scale.set(o/s.width,-(n/s.height));let l=t?r*i1:iG*i1*e;a.borderSprite.scale.set((o+2*l)/64,-((n+2*l)/64))}}else{let i=t?r:r*e,s=a.sprite.texture,o=Math.max(s.width,s.height);if(o>1){let e=i/o;a.sprite.scale.set(e,-e)}else a.sprite.scale.set(i,-i);let n=(i+2*(t?r*i1:iG*i1*e))/64;a.borderSprite.scale.set(n,-n)}}}setFeatureVisible(e,t){let i=this._metaById.get(e);if(!i)return;if(i.shapeIndex>=0&&this._colorData&&this._colorBuffer&&(this._colorData[4*i.shapeIndex+3]=t?i.originalAlpha:0,this._updateBuffer(this._colorBuffer)),i.labelCharStart>=0&&this._labelAlphaData&&this._labelAlphaBuffer){let e=t?i.originalAlpha:0;for(let t=i.labelCharStart;t<i.labelCharStart+i.labelCharCount;t++)this._labelAlphaData[t]=e;this._updateBuffer(this._labelAlphaBuffer)}let r=this._flagById.get(e);r&&(r.sprite.visible=t&&r.loaded,r.borderSprite.visible=t&&r.loaded)}setFeatureOpacity(e,t){let i=this._metaById.get(e);if(!i)return;if(i.originalAlpha=t,i.shapeIndex>=0&&this._colorData&&this._colorBuffer&&(this._colorData[4*i.shapeIndex+3]=this._visibleSet.has(i.id)?t:0,this._updateBuffer(this._colorBuffer)),i.labelCharStart>=0&&this._labelAlphaData&&this._labelAlphaBuffer){let e=this._visibleSet.has(i.id)?t:0;for(let t=i.labelCharStart;t<i.labelCharStart+i.labelCharCount;t++)this._labelAlphaData[t]=e;this._updateBuffer(this._labelAlphaBuffer)}let r=this._flagById.get(e);r&&(r.sprite.alpha=t,r.borderSprite.alpha=t)}getFeatureLabelOffset(e){let t=this._metaById.get(e);return!t||t.labelCharStart<0?null:[t.labelBaseOffsetX,t.labelBaseOffsetY]}computeFeatureLabelOffset(e,t){let i=this._metaById.get(e);if(!i||i.labelCharStart<0)return null;let r=(1===i.scaleMode?i.sizeValue/2:6.75*i.scale)*1.1,a=i.labelTotalWidth,s=0,o=0;switch(t){case"above":default:o=r;break;case"below":o=-r;break;case"left":s=-r-a/2;break;case"right":s=r+a/2;case"center":}return[s,o]}setFeatureLabelOffset(e,t,i){let r=this._metaById.get(e);if(!r||r.labelCharStart<0||!this._labelPixelOffsetData||!this._labelPixelOffsetBuffer)return;let a=t-r.labelBaseOffsetX,s=i-r.labelBaseOffsetY;for(let e=r.labelCharStart;e<r.labelCharStart+r.labelCharCount;e++)this._labelPixelOffsetData[2*e]+=a,this._labelPixelOffsetData[2*e+1]+=s;r.labelBaseOffsetX=t,r.labelBaseOffsetY=i,this._updateBuffer(this._labelPixelOffsetBuffer)}setFeatureLabelOpacity(e,t){let i=this._metaById.get(e);if(i&&!(i.labelCharStart<0)&&this._labelAlphaData&&this._labelAlphaBuffer){let e=this._visibleSet.has(i.id)?t:0;for(let t=i.labelCharStart;t<i.labelCharStart+i.labelCharCount;t++)this._labelAlphaData[t]=e;this._updateBuffer(this._labelAlphaBuffer)}}static _computeFingerprint(e){if(0===e.length)return"0";let t=e.length;for(let i of e)t=31*(t=31*(t=31*(t=31*(t=31*t+i4._hashStr(i.id)|0)+i4._hashF64(i.position[0])|0)+i4._hashF64(i.position[1])|0)+i.color|0)+((i.scale??1)*1e3|0)|0;return`${e.length}:${t>>>0}`}static _hashStr(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return t}static _hashF64(e){let t=1e7*e|0;return t^t>>>16}_destroyShapeResources(){this._destroyPickResources(),this._shapeMesh&&(this._shapeMesh.parent?.removeChild(this._shapeMesh),this._shapeMesh.destroy(),this._shapeMesh=null),this._shapeGeometry?.destroy(!0),this._shapeGeometry=null,this._shapeShader?.destroy(),this._shapeShader=null,this._colorData=null,this._colorBuffer=null,this._strokeColorData=null,this._strokeColorBuffer=null,this._worldPosData=null,this._worldPosBuffer=null,this._sizeData=null,this._sizeBuffer=null,this._atlasRectData=null,this._atlasRectBuffer=null,this._zoomParamsData=null,this._zoomParamsBuffer=null,this._bufferCapacity=0,this._shapeCount=0,this._prevShapeFeatureIds.clear()}_destroyLabelResources(){this._labelMesh&&(this._labelMesh.parent?.removeChild(this._labelMesh),this._labelMesh.destroy(),this._labelMesh=null),this._labelGeometry?.destroy(!0),this._labelGeometry=null,this._labelShader?.destroy(),this._labelShader=null,this._labelAlphaData=null,this._labelAlphaBuffer=null,this._labelWorldPosData=null,this._labelWorldPosBuffer=null,this._labelPixelOffsetData=null,this._labelPixelOffsetBuffer=null}_destroyFlagResources(){for(let e of this._flagData)e.borderSprite.destroy();for(let e of this._flagSprites.values())e.destroy();this._flagSprites.clear(),this._flagData=[],this._flagById.clear(),this._flagContainer.removeChildren()}_destroyResources(){this._destroyShapeResources(),this._destroyLabelResources(),this._destroyFlagResources(),this._featureMeta=[],this._metaById.clear(),this._sortedMeta=[],this._visibleSet.clear(),this._prevVisibleCount=-1}}e.s(["DEFAULT_APPEAR_CURVE",0,iW,"MapFeatureLayer",()=>i4,"preloadFlagTextures",()=>i5],293736);let i6=`

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};

@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};

@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

struct ConquestUniforms {
    uProgress: f32,
    uNoiseAmplitude: f32,
    uToColor: vec4<f32>,
    uFromColorTarget: vec4<f32>,
    uFromColorLerpT: f32,
};

@group(2) @binding(0) var<uniform> conquestUniforms: ConquestUniforms;

struct VertexInput {
    @location(0) aPosition: vec2<f32>,
    @location(1) aDistance: f32,
    @location(2) aFromColor: vec4<f32>,
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) vWorldPos: vec2<f32>,
    @location(1) vDistance: f32,
    @location(2) vFromColor: vec4<f32>,
};

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;

    let clip = mvp * vec3<f32>(input.aPosition, 1.0);

    var out: VertexOutput;
    out.position = vec4<f32>(clip.xy, 0.0, 1.0);
    out.vWorldPos = input.aPosition;
    out.vDistance = input.aDistance;
    out.vFromColor = input.aFromColor;
    return out;
}

// ── Procedural noise ────────────────────────────────────────────────

fn hash2(p: vec2<f32>) -> vec2<f32> {
    var p3 = fract(vec3<f32>(p.x, p.y, p.x) * vec3<f32>(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}

fn gnoise(p: vec2<f32>) -> f32 {
    let i = floor(p);
    let f = fract(p);
    let u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    let g00 = dot(hash2(i + vec2<f32>(0.0, 0.0)), f - vec2<f32>(0.0, 0.0));
    let g10 = dot(hash2(i + vec2<f32>(1.0, 0.0)), f - vec2<f32>(1.0, 0.0));
    let g01 = dot(hash2(i + vec2<f32>(0.0, 1.0)), f - vec2<f32>(0.0, 1.0));
    let g11 = dot(hash2(i + vec2<f32>(1.0, 1.0)), f - vec2<f32>(1.0, 1.0));

    return mix(mix(g00, g10, u.x), mix(g01, g11, u.x), u.y) * 0.5 + 0.5;
}

const GA_COS: f32 = -0.7374;
const GA_SIN: f32 =  0.6755;

fn fbm(p: vec2<f32>) -> f32 {
    var value = 0.0;
    var amplitude = 0.5;
    var pos = p;

    value += amplitude * gnoise(pos);
    amplitude *= 0.5;
    pos = vec2<f32>(pos.x * GA_COS - pos.y * GA_SIN, pos.x * GA_SIN + pos.y * GA_COS) * 2.0 + vec2<f32>(1.7, 9.2);

    value += amplitude * gnoise(pos);
    amplitude *= 0.5;
    pos = vec2<f32>(pos.x * GA_COS - pos.y * GA_SIN, pos.x * GA_SIN + pos.y * GA_COS) * 2.0 + vec2<f32>(5.3, 2.8);

    value += amplitude * gnoise(pos);
    amplitude *= 0.5;
    pos = vec2<f32>(pos.x * GA_COS - pos.y * GA_SIN, pos.x * GA_SIN + pos.y * GA_COS) * 2.0 + vec2<f32>(8.1, 4.7);

    value += amplitude * gnoise(pos);

    return value;
}

const NOISE_PERIOD: f32 = 60000.0;

// ── Fragment shader ─────────────────────────────────────────────────
//
// The overlay covers the ENTIRE region at all times:
//   - Behind the sweep front → new owner color (uToColor)
//   - Ahead of the sweep front → old owner color (per-vertex vFromColor)

@fragment
fn fsMain(input: VertexOutput) -> @location(0) vec4<f32> {
    let progress = conquestUniforms.uProgress;

    let noiseCoord = input.vWorldPos / NOISE_PERIOD;
    let edgeNoise = (fbm(noiseCoord) - 0.5) * conquestUniforms.uNoiseAmplitude;

    let threshold = progress * 1.15 + edgeNoise;

    let softEdge = 0.015;
    let blend = smoothstep(threshold + softEdge, threshold - softEdge, input.vDistance);

    var oldC = input.vFromColor;
    if (conquestUniforms.uFromColorLerpT > 0.0) {
        oldC = vec4<f32>(
            mix(oldC.rgb, conquestUniforms.uFromColorTarget.rgb, conquestUniforms.uFromColorLerpT),
            mix(oldC.a,   conquestUniforms.uFromColorTarget.a,   conquestUniforms.uFromColorLerpT)
        );
    }
    let newC = conquestUniforms.uToColor;
    var color = vec4<f32>(
        mix(oldC.rgb, newC.rgb, blend),
        mix(oldC.a,   newC.a,   blend)
    );

    if (color.a < 0.005) { discard; }

    return vec4<f32>(color.rgb * color.a, color.a);
}

`,i8=`#version 300 es
in vec2 aPosition;
in float aDistance;
in vec4 aFromColor;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

out vec2 vWorldPos;
out float vDistance;
out vec4 vFromColor;

void main() {
    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(aPosition, 1.0);
    gl_Position = vec4(clip.xy, 0.0, 1.0);
    vWorldPos = aPosition;
    vDistance = aDistance;
    vFromColor = aFromColor;
}
`,i7=`#version 300 es
precision highp float;

uniform float uProgress;
uniform float uNoiseAmplitude;
uniform vec4 uToColor;
uniform vec4 uFromColorTarget;
uniform float uFromColorLerpT;

in vec2 vWorldPos;
in float vDistance;
in vec4 vFromColor;
out vec4 finalColor;

vec2 hash2(vec2 p) {
    vec3 p3 = fract(vec3(p.x, p.y, p.x) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}

float gnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    float g00 = dot(hash2(i), f);
    float g10 = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
    float g01 = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
    float g11 = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
    return mix(mix(g00, g10, u.x), mix(g01, g11, u.x), u.y) * 0.5 + 0.5;
}

const float GA_COS = -0.7374;
const float GA_SIN =  0.6755;

float fbm(vec2 p) {
    float value = 0.0; float amplitude = 0.5; vec2 pos = p;
    value += amplitude * gnoise(pos); amplitude *= 0.5;
    pos = vec2(pos.x*GA_COS - pos.y*GA_SIN, pos.x*GA_SIN + pos.y*GA_COS)*2.0 + vec2(1.7,9.2);
    value += amplitude * gnoise(pos); amplitude *= 0.5;
    pos = vec2(pos.x*GA_COS - pos.y*GA_SIN, pos.x*GA_SIN + pos.y*GA_COS)*2.0 + vec2(5.3,2.8);
    value += amplitude * gnoise(pos); amplitude *= 0.5;
    pos = vec2(pos.x*GA_COS - pos.y*GA_SIN, pos.x*GA_SIN + pos.y*GA_COS)*2.0 + vec2(8.1,4.7);
    value += amplitude * gnoise(pos);
    return value;
}

const float NOISE_PERIOD = 60000.0;

void main() {
    vec2 noiseCoord = vWorldPos / NOISE_PERIOD;
    float edgeNoise = (fbm(noiseCoord) - 0.5) * uNoiseAmplitude;
    float threshold = uProgress * 1.15 + edgeNoise;
    float softEdge = 0.015;
    float blend = smoothstep(threshold + softEdge, threshold - softEdge, vDistance);

    vec4 oldC = vFromColor;
    if (uFromColorLerpT > 0.0) {
        oldC = vec4(mix(oldC.rgb, uFromColorTarget.rgb, uFromColorLerpT),
                    mix(oldC.a,   uFromColorTarget.a,   uFromColorLerpT));
    }
    vec4 newC = uToColor;
    vec4 color = vec4(mix(oldC.rgb, newC.rgb, blend), mix(oldC.a, newC.a, blend));

    if (color.a < 0.005) { discard; }
    finalColor = vec4(color.rgb * color.a, color.a);
}
`;class i9{container;_data;_borderMesh;_lastThreshold=-1;_currentZoom=0;skipGhosts=!1;constructor(e){this.container=new p.Container({label:"sweep-border"}),this._data=e,this._borderMesh=new e2(1118481,.66,1.5)}setPromotedEdgeSegments(e){this._data.promotedEdgeSegments=e}update(e){if(.001>Math.abs(e-this._lastThreshold))return;this._lastThreshold=e;let t=this._extractContour(e);if(this._borderMesh.mesh?.parent===this.container&&this.container.removeChild(this._borderMesh.mesh),this.container.removeChildren(),0===t.length)return;this._borderMesh.destroy(),this._borderMesh=new e2(1118481,.66,1.5),this._borderMesh.tessellateChains(t);let i=this._borderMesh.mesh;if(i&&(i.label="sweep-border-line",this.container.addChild(i)),!this.skipGhosts){let e=2*eo;for(let t of[-2,-1,1,2]){let i=this._borderMesh.createGhostMesh(t*e);i&&(i.visible=!1,this.container.addChild(i))}}this._updateZoom()}updateForZoom(e){this._currentZoom=e,this._updateZoom()}_updateZoom(){let e=2*eo/(256*Math.pow(2,this._currentZoom));this._borderMesh.updateForZoom(e)}destroy(){this._borderMesh.destroy(),this.container.destroy({children:!0})}_extractContour(e){let{positions:t,indices:i,distances:r}=this._data,a=i.length/3,s=[];for(let o=0;o<a;o++){let a=i[3*o],n=i[3*o+1],l=i[3*o+2],h=r[a],u=r[n],f=r[l],d=h<e,c=u<e,p=f<e;if(d===c&&c===p)continue;let m=[];d!==c&&m.push(this._interpolateEdge(a,n,h,u,e,t)),c!==p&&m.push(this._interpolateEdge(n,l,u,f,e,t)),p!==d&&m.push(this._interpolateEdge(l,a,f,h,e,t)),m.length>=2&&s.push([m[0][0],m[0][1],m[1][0],m[1][1]])}let o=this._data.promotedEdgeSegments;if(o)for(let t of o){let i=t.dist1<e,r=t.dist2<e;if(i&&r)s.push([t.x1,t.y1,t.x2,t.y2]);else if(i&&!r){let i=(e-t.dist1)/(t.dist2-t.dist1),r=t.x1+(t.x2-t.x1)*i,a=t.y1+(t.y2-t.y1)*i;s.push([t.x1,t.y1,r,a])}else if(!i&&r){let i=(e-t.dist2)/(t.dist1-t.dist2),r=t.x2+(t.x1-t.x2)*i,a=t.y2+(t.y1-t.y2)*i;s.push([t.x2,t.y2,r,a])}}return 0===s.length?[]:this._chainSegments(s)}_interpolateEdge(e,t,i,r,a,s){let o=r-i,n=0!==o?(a-i)/o:.5,l=s[2*e],h=s[2*e+1];return[l+(s[2*t]-l)*n,h+(s[2*t+1]-h)*n]}_chainSegments(e){let t=(e,t)=>`${Math.round(e/.5)},${Math.round(t/.5)}`,i=new Map;for(let r=0;r<e.length;r++){let[a,s,o,n]=e[r],l=t(a,s),h=t(o,n),u=i.get(l);u||(u=[],i.set(l,u)),u.push({segIdx:r,otherKey:h,ox:o,oy:n});let f=i.get(h);f||(f=[],i.set(h,f)),f.push({segIdx:r,otherKey:l,ox:a,oy:s})}let r=new Set,a=[];for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let[o,n,l,h]=e[s],u=[l,h],f=t(l,h);for(;;){let e=i.get(f);if(!e)break;let t=!1;for(let i of e)if(!r.has(i.segIdx)){r.add(i.segIdx),u.push(i.ox,i.oy),f=i.otherKey,t=!0;break}if(!t)break}let d=[];for(f=t(o,n);;){let e=i.get(f);if(!e)break;let t=!1;for(let i of e)if(!r.has(i.segIdx)){r.add(i.segIdx),d.push(i.ox,i.oy),f=i.otherKey,t=!0;break}if(!t)break}let c=[];for(let e=d.length-2;e>=0;e-=2)c.push(d[e],d[e+1]);c.push(o,n);for(let e=0;e<u.length;e++)c.push(u[e]);c.length>=4&&a.push(c)}return a}}let re=null,rt=null;class ri{container;_entries=[];_currentZoom=0;skipGhosts=!1;constructor(){this.container=new p.Container({label:"conquest-fill"})}start(e){for(let t of(this.finish(),e)){if(0==t.positions.length/2||0===t.indices.length)continue;let e=new i9({positions:t.positions,indices:t.indices,distances:t.distances,promotedEdgeSegments:t.promotedEdgeSegments});e.skipGhosts=this.skipGhosts,this.container.addChild(e.container);let i=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,r=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,a=new ek.Geometry({attributes:{aPosition:{buffer:new eP.Buffer({data:t.positions,usage:i}),format:"float32x2",stride:8,offset:0},aDistance:{buffer:new eP.Buffer({data:t.distances,usage:i}),format:"float32",stride:4,offset:0},aFromColor:{buffer:new eP.Buffer({data:t.fromColors,usage:i}),format:"float32x4",stride:16,offset:0}},indexBuffer:new eP.Buffer({data:t.indices,usage:r})}),s=t.noiseAmplitude??.15,o=new eN.Shader({gpuProgram:(re||(re=new ez.GpuProgram({vertex:{source:i6,entryPoint:"vsMain"},fragment:{source:i6,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),re),glProgram:(rt||(rt=new eI.GlProgram({vertex:i8,fragment:i7})),rt),resources:{conquestUniforms:{uProgress:{value:0,type:"f32"},uNoiseAmplitude:{value:s,type:"f32"},uToColor:{value:new Float32Array(t.toColor),type:"vec4<f32>"},uFromColorTarget:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uFromColorLerpT:{value:0,type:"f32"}}}}),n=new eY({geometry:a,shader:o});n.label="conquest-fill-mesh",this.container.addChild(n),this._entries.push({fillMesh:n,fillGeometry:a,fillShader:o,sweepBorder:e})}}setPromotedEdgeSegments(e,t){let i=this._entries[e];i&&i.sweepBorder.setPromotedEdgeSegments(t)}setProgress(e){let t=1.15*e;for(let i of this._entries)i.fillShader.resources.conquestUniforms.uniforms.uProgress=e,i.sweepBorder.update(t)}setToColor(e,t,i,r,a){let s=this._entries[e];if(!s)return;let o=s.fillShader.resources.conquestUniforms.uniforms.uToColor;o[0]=t,o[1]=i,o[2]=r,o[3]=a}updateFromColors(e,t){let i=this._entries[e];i&&(i.fillGeometry.getAttribute("aFromColor").buffer.data=t)}setFromColorLerp(e,t,i,r,a,s){let o=this._entries[e];if(!o)return;let n=o.fillShader.resources.conquestUniforms.uniforms,l=n.uFromColorTarget;l[0]=t,l[1]=i,l[2]=r,l[3]=a,n.uFromColorLerpT=s}updateForZoom(e){for(let t of(this._currentZoom=e,this._entries))t.sweepBorder.updateForZoom(e)}get isActive(){return this._entries.length>0}finish(){for(let e of this._entries)this.container.removeChild(e.fillMesh),e.fillMesh.destroy(),e.fillGeometry.destroy(!0),e.fillShader.destroy(),this.container.removeChild(e.sweepBorder.container),e.sweepBorder.destroy();this._entries=[]}destroy(){this.finish(),this.container.destroy({children:!0})}}e.s(["ConquestFillLayer",()=>ri],373326);let rr=`

struct GlobalUniforms {
    uProjectionMatrix: mat3x3<f32>,
    uWorldTransformMatrix: mat3x3<f32>,
    uWorldColorAlpha: vec4<f32>,
    uResolution: vec2<f32>,
};

@group(0) @binding(0) var<uniform> globalUniforms: GlobalUniforms;

struct LocalUniforms {
    uTransformMatrix: mat3x3<f32>,
    uColor: vec4<f32>,
    uRound: f32,
};

@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

struct SelectionUniforms {
    uHalfWidth: f32,
    uTime: f32,
};

@group(2) @binding(0) var<uniform> selectionUniforms: SelectionUniforms;

struct VertexInput {
    @location(0) aCenter: vec2<f32>,
    @location(1) aNormal: vec2<f32>,
    @location(2) aSide: f32,
    @location(3) aMiter: f32,
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(input: VertexInput) -> VertexOutput {
    let offset = input.aSide * selectionUniforms.uHalfWidth * input.aMiter;
    let worldPos = input.aCenter + input.aNormal * offset;

    let mvp = globalUniforms.uProjectionMatrix
            * globalUniforms.uWorldTransformMatrix
            * localUniforms.uTransformMatrix;

    let clip = mvp * vec3<f32>(worldPos, 1.0);

    return VertexOutput(vec4<f32>(clip.xy, 0.0, 1.0));
}

@fragment
fn fsMain() -> @location(0) vec4<f32> {
    let pulse = 0.88 + 0.12 * sin(selectionUniforms.uTime * 2.0);
    let alpha = localUniforms.uColor.a * pulse;
    return vec4<f32>(localUniforms.uColor.rgb, alpha);
}

`,ra=`#version 300 es
in vec2 aCenter;
in vec2 aNormal;
in float aSide;
in float aMiter;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uHalfWidth;

void main() {
    float offset = aSide * uHalfWidth * aMiter;
    vec2 worldPos = aCenter + aNormal * offset;

    mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
    vec3 clip = mvp * vec3(worldPos, 1.0);

    gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,rs=`#version 300 es
precision highp float;

uniform vec4 uColor;
uniform float uTime;
out vec4 finalColor;

void main() {
    float pulse = 0.88 + 0.12 * sin(uTime * 2.0);
    float alpha = uColor.a * pulse;
    finalColor = vec4(uColor.rgb, alpha);
}
`,ro=null;function rn(){return ro||(ro=new ez.GpuProgram({vertex:{source:rr,entryPoint:"vsMain"},fragment:{source:rr,entryPoint:"fsMain"},autoAssignGlobalUniforms:!0,autoAssignLocalUniforms:!0})),ro}let rl=null;function rh(){return rl||(rl=new eI.GlProgram({vertex:ra,fragment:rs})),rl}class ru{container;_topology=null;_mesh=null;_geometry=null;_shader=null;_ghosts=[];_time=0;_widthPx=3;_color=3900150;_alpha=.9;_currentMpp=0;skipGhosts=!1;constructor(){this.container=new p.Container({label:"selection-border"})}get isActive(){return null!==this._mesh}activate(e,t,i){if(this.deactivate(),this._color=i?.color??3900150,this._widthPx=i?.widthPx??3,this._alpha=i?.alpha??.9,this._time=0,0===e.length)return;let r=function(e){let t=new Map;for(let i of e){let e=i.length/2;if(!(e<2))for(let r=0;r<e-1;r++){let e=rf(i[2*r],i[2*r+1],i[(r+1)*2],i[(r+1)*2+1]);t.set(e,(t.get(e)??0)+1)}}let i=[];for(let r of e){let e=r.length/2;if(e<2)continue;let a=e-1,s=-1;for(let e=0;e<a;e++){let i=rf(r[2*e],r[2*e+1],r[(e+1)*2],r[(e+1)*2+1]);if((t.get(i)??0)>1){s=e;break}}if(-1===s){i.push(r.slice());continue}let o=null;for(let e=0;e<a;e++){let n=(s+1+e)%a,l=r[2*n],h=r[2*n+1],u=r[(n+1)*2],f=r[(n+1)*2+1],d=rf(l,h,u,f);(t.get(d)??0)===1?(null===o&&(o=[l,h]),o.push(u,f)):(null!==o&&o.length>=4&&i.push(o),o=null)}null!==o&&o.length>=4&&i.push(o)}return i}(e);if(0===r.length||(this._currentMpp=2*eo/(256*Math.pow(2,t)),this._topology=eH(r,!1),0===this._topology.vertexCount))return;let a=this._widthPx*this._currentMpp/2,s=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,o=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST;if(this._geometry=new ek.Geometry({attributes:{aCenter:{buffer:new eP.Buffer({data:this._topology.center,usage:s}),format:"float32x2"},aNormal:{buffer:new eP.Buffer({data:this._topology.normal,usage:s}),format:"float32x2"},aSide:{buffer:new eP.Buffer({data:this._topology.side,usage:s}),format:"float32"},aMiter:{buffer:new eP.Buffer({data:this._topology.miter,usage:s}),format:"float32"}},indexBuffer:new eP.Buffer({data:this._topology.indices,usage:o})}),this._shader=new eN.Shader({gpuProgram:rn(),glProgram:rh(),resources:{selectionUniforms:{uHalfWidth:{value:a,type:"f32"},uTime:{value:0,type:"f32"}}}}),this._mesh=new eY({geometry:this._geometry,shader:this._shader}),this._mesh.tint=this._color,this._mesh.alpha=this._alpha,this._mesh.label="selection-border",this.container.addChild(this._mesh),!this.skipGhosts){let e=2*eo;for(let t of[-2,-1,1,2])this._addGhost(t*e,a)}}update(e){if(!this._shader)return!1;for(let t of(this._time+=e,this._shader.resources.selectionUniforms.uniforms.uTime=this._time,this._ghosts))t.shader.resources.selectionUniforms.uniforms.uTime=this._time;return!0}updateForZoom(e){if(this._currentMpp=2*eo/(256*Math.pow(2,e)),!this._shader)return;let t=this._widthPx*this._currentMpp/2;for(let e of(this._shader.resources.selectionUniforms.uniforms.uHalfWidth=t,this._ghosts))e.shader.resources.selectionUniforms.uniforms.uHalfWidth=t}updateGhostVisibility(e,t){for(let i of this._ghosts)i.mesh.visible=i.xOffset<0?e<eo+i.xOffset:t>-eo+i.xOffset}deactivate(){for(let e of this._ghosts)this.container.removeChild(e.mesh),e.mesh.destroy(),e.geometry.destroy(!0),e.shader.destroy();this._ghosts=[],this._mesh&&(this.container.removeChild(this._mesh),this._mesh.destroy(),this._mesh=null),this._geometry?.destroy(!0),this._geometry=null,this._shader?.destroy(),this._shader=null,this._topology=null,this._time=0}destroy(){this.deactivate(),this.container.destroy()}_addGhost(e,t){let i=this._topology;if(!i||0===i.vertexCount)return;let r=new Float32Array(i.center.length);for(let t=0;t<i.center.length;t+=2)r[t]=i.center[t]+e,r[t+1]=i.center[t+1];let a=eT.BufferUsage.VERTEX|eT.BufferUsage.COPY_DST,s=eT.BufferUsage.INDEX|eT.BufferUsage.COPY_DST,o=new ek.Geometry({attributes:{aCenter:{buffer:new eP.Buffer({data:r,usage:a}),format:"float32x2"},aNormal:{buffer:new eP.Buffer({data:i.normal,usage:a}),format:"float32x2"},aSide:{buffer:new eP.Buffer({data:i.side,usage:a}),format:"float32"},aMiter:{buffer:new eP.Buffer({data:i.miter,usage:a}),format:"float32"}},indexBuffer:new eP.Buffer({data:i.indices,usage:s})}),n=new eN.Shader({gpuProgram:rn(),glProgram:rh(),resources:{selectionUniforms:{uHalfWidth:{value:t,type:"f32"},uTime:{value:0,type:"f32"}}}}),l=new eY({geometry:o,shader:n});l.tint=this._color,l.alpha=this._alpha,l.label=`selection-border:ghost(${e>0?"+":""}${e})`,l.visible=!1,this._ghosts.push({mesh:l,geometry:o,shader:n,xOffset:e}),this.container.addChild(l)}}function rf(e,t,i,r){return e<i||e===i&&t<r?`${e},${t};${i},${r}`:`${i},${r};${e},${t}`}function rd(e,t=19,i=0,r=0){let a=Math.max(i,Math.min(t,Math.floor(e.zoom))),s=Math.pow(2,a),o=2*eo/s,n=e.screenToMercator(0,0),l=e.screenToMercator(e.viewportWidth,0),h=e.screenToMercator(0,e.viewportHeight),u=e.screenToMercator(e.viewportWidth,e.viewportHeight),f=Math.min(n.x,l.x,h.x,u.x),d=Math.max(n.x,l.x,h.x,u.x),c=Math.min(n.y,l.y,h.y,u.y),p=Math.max(n.y,l.y,h.y,u.y),m=Math.floor((f+eo)/o),_=Math.ceil((d+eo)/o)-1,g=[],y=Math.max(0,Math.floor((eo-p)/o)-r),x=Math.min(s-1,Math.ceil((eo-c)/o)-1+r);for(let e=y;e<=x;e++)for(let t=m-r;t<=_+r;t++){let i=(t%s+s)%s;g.push({z:a,x:i,y:e,displayX:t})}return g}function rc(e,t,i){return`${e}/${t}/${i}`}e.s(["SelectionBorderLayer",()=>ru],459870);class rp{_capacity;_map=new Map;_onEvict;constructor(e=256,t){this._capacity=Math.max(1,e),this._onEvict=t}get size(){return this._map.size}has(e){return this._map.has(e)}get(e){let t=this._map.get(e);if(void 0!==t)return this._map.delete(e),this._map.set(e,t),t}set(e,t){for(this._map.has(e)&&this._map.delete(e),this._map.set(e,t);this._map.size>this._capacity;){let e=this._map.keys().next().value;if(void 0!==e){let t=this._map.get(e);this._map.delete(e),t&&(this._onEvict?this._onEvict(e,t):t.destroy(!0))}}}remove(e){let t=this._map.get(e);return void 0!==t&&this._map.delete(e),t}clear(){for(let e of this._map.values())e.destroy(!0);this._map.clear()}}class rm{_urlTemplate;_maxConcurrent;_debugDelay;_pending=new Map;_queue=[];_activeCount=0;_destroyed=!1;constructor(e,t=6,i=0){this._urlTemplate=e,this._maxConcurrent=t,this._debugDelay=i}load(e,t,i){let r,a=rc(e,t,i),s=this._pending.get(a);if(s)return s.promise;let o=new Promise(e=>{r=e}),n={key:a,abort:new AbortController,promise:o};return this._pending.set(a,n),this._queue.push({z:e,x:t,y:i,key:a,resolve:r}),this._drain(),o}abort(e){let t=this._pending.get(e);t&&(t.abort.abort(),this._pending.delete(e)),this._queue=this._queue.filter(t=>t.key!==e)}abortAll(){for(let e of this._pending.values())e.abort.abort();this._pending.clear(),this._queue=[]}destroy(){this._destroyed=!0,this.abortAll()}get pendingCount(){return this._pending.size}_drain(){for(;this._activeCount<this._maxConcurrent&&this._queue.length>0&&!this._destroyed;){let e=this._queue.shift();this._activeCount++,this._fetchTile(e.z,e.x,e.y,e.key,e.resolve)}}async _fetchTile(e,t,i,r,a){let s=this._pending.get(r);if(!s){this._activeCount--,this._drain(),a(null);return}let o=this._urlTemplate.replace("{z}",String(e)).replace("{x}",String(t)).replace("{y}",String(i)),n=null;for(let e=0;e<2&&!s.abort.signal.aborted&&!this._destroyed;e++)try{let e=await fetch(o,{signal:s.abort.signal});if(!e.ok){if(e.status>=400&&e.status<500)break;continue}let t=await e.blob();if(s.abort.signal.aborted||this._destroyed)break;let i=await createImageBitmap(t);if(s.abort.signal.aborted||this._destroyed||this._debugDelay>0&&(await new Promise(e=>setTimeout(e,this._debugDelay)),s.abort.signal.aborted||this._destroyed)){i.close();break}n=eF.Texture.from({resource:i,alphaMode:"premultiply-alpha-on-upload"});break}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)break;1===e&&console.warn(`[TileLoader] Failed to load tile ${r}:`,t)}this._pending.delete(r),this._activeCount--,this._drain(),a(n)}}function r_(e){return null!=e.source}function rg(e){return`${e.z}/${e.displayX}/${e.y}`}class ry{container;_camera;_cache;_loader;_maxZoom;_minZoom;_tileSize;_bufferSize;_sprites=new Map;_staleSprites=new Map;_fallbackSprites=new Map;_currentZ=-1;_loading=new Set;_neededDisplayKeys=new Set;_neededTiles=new Map;_evictedTextures=[];_destroyed=!1;_spritePool=[];static _MAX_POOL_SIZE=64;_onActivity;constructor(e,t,i){this._camera=e,this._maxZoom=t.maxZoom??19,this._minZoom=t.minZoom??0,this._tileSize=t.tileSize??256,this._bufferSize=t.bufferSize??2,this._onActivity=i,this._cache=new rp(t.cacheCapacity??256,(e,t)=>{this._evictedTextures.push(t)}),this._loader=new rm(t.urlTemplate,t.maxConcurrent??6,t.debugDelay??0),this.container=new p.Container({label:"tiles"})}update(){if(this._destroyed)return;let e=rd(this._camera,this._maxZoom,this._minZoom,this._bufferSize);if(0===e.length)return;let t=e[0].z;for(let t of(this._neededDisplayKeys.clear(),this._neededTiles.clear(),e)){let e=rg(t);this._neededDisplayKeys.add(e),this._neededTiles.set(e,t)}if(t!==this._currentZ){for(let[e,t]of(this._clearStaleSprites(),this._sprites))this._staleSprites.set(e,t);this._sprites.clear(),this._currentZ=t}else for(let[e,t]of this._sprites)this._neededDisplayKeys.has(e)||(this.container.removeChild(t),this._recycleSprite(t),this._sprites.delete(e));let i=new Set;for(let e of this._neededTiles.values())i.add(rc(e.z,e.x,e.y));for(let e of this._loading)i.has(e)||(this._loader.abort(e),this._loading.delete(e));for(let[e,t]of this._sprites)r_(t.texture)||(this.container.removeChild(t),this._recycleSprite(t),this._sprites.delete(e));for(let t of e){let e=rg(t),i=rc(t.z,t.x,t.y);if(this._sprites.has(e))continue;let r=this._cache.get(i);if(r){if(r_(r)){this._addTileSprite(t,r);continue}this._cache.remove(i)}this._loading.has(i)||(this._loading.add(i),this._loader.load(t.z,t.x,t.y).then(e=>{this._loading.delete(i),this._destroyed||e&&(this._cache.set(i,e),this._createSpritesForTile(i,e),this._updateFallbacks(),this._sweepStale(),this._destroyOrphanedTextures(),this._onActivity?.())}))}this._updateFallbacks(),0===this._loading.size&&this._sweepStale(),this._destroyOrphanedTextures()}destroy(){for(let e of(this._destroyed=!0,this._loader.destroy(),this._removeAllSprites(),this._evictedTextures))e.destroy(!0);this._evictedTextures=[],this._cache.clear(),this.container.destroy({children:!0})}_createPositionedSprite(e,t){let{z:i,displayX:r,y:a}=e,s=2*eo/Math.pow(2,i),o=s/(t.width||this._tileSize),n=this._spritePool.length>0?this._spritePool.pop():new iT.Sprite;return n.texture=t,n.position.set(r*s-eo,eo-a*s),n.scale.set(o,-o),n}_addTileSprite(e,t){let i=rg(e),r=this._createPositionedSprite(e,t);this.container.addChild(r),this._sprites.set(i,r)}_createSpritesForTile(e,t){for(let[i,r]of this._neededTiles)this._sprites.has(i)||this._currentZ!==r.z||rc(r.z,r.x,r.y)===e&&this._addTileSprite(r,t)}_updateFallbacks(){let e=new Map;for(let[t,i]of this._neededTiles){if(this._sprites.has(t))continue;let r=i.z-1,a=Math.floor(i.displayX/2),s=Math.floor(i.x/2),o=Math.floor(i.y/2);for(;r>=0;){let t=rc(r,s,o);if(this._staleSprites.has(`${r}/${a}/${o}`))break;let i=this._cache.get(t);if(i){if(r_(i)){let t=`${r}/${a}/${o}`;e.set(t,{z:r,x:s,y:o,displayX:a});break}this._cache.remove(t)}r--,a=Math.floor(a/2),s=Math.floor(s/2),o=Math.floor(o/2)}}for(let[t,i]of this._fallbackSprites)e.has(t)||(this.container.removeChild(i),this._recycleSprite(i),this._fallbackSprites.delete(t));for(let[t,i]of e){if(this._fallbackSprites.has(t))continue;let e=rc(i.z,i.x,i.y),r=this._cache.get(e);if(!r||!r_(r))continue;let a=this._createPositionedSprite(i,r);this.container.addChildAt(a,0),this._fallbackSprites.set(t,a)}}_destroyOrphanedTextures(){if(0===this._evictedTextures.length)return;let e=new Set;for(let t of this._sprites.values())e.add(t.texture);for(let t of this._staleSprites.values())e.add(t.texture);for(let t of this._fallbackSprites.values())e.add(t.texture);let t=[];for(let i of this._evictedTextures)e.has(i)?t.push(i):i.destroy(!0);this._evictedTextures=t}_clearStaleSprites(){for(let e of this._staleSprites.values())this.container.removeChild(e),this._recycleSprite(e);this._staleSprites.clear()}_sweepStale(){if(0!==this._staleSprites.size&&!(this._loading.size>0)){for(let e of this._staleSprites.values())this.container.removeChild(e),this._recycleSprite(e);this._staleSprites.clear()}}_recycleSprite(e){this._spritePool.length<ry._MAX_POOL_SIZE?(e.texture=eF.Texture.EMPTY,this._spritePool.push(e)):e.destroy()}_removeAllSprites(){for(let e of this._sprites.values())this.container.removeChild(e),e.destroy();for(let e of(this._sprites.clear(),this._staleSprites.values()))this.container.removeChild(e),e.destroy();for(let e of(this._staleSprites.clear(),this._fallbackSprites.values()))this.container.removeChild(e),e.destroy();for(let e of(this._fallbackSprites.clear(),this._spritePool))e.destroy();this._spritePool=[]}}let rx=`
"use strict";

// ── Protobuf primitives ─────────────────────────────────────────────────

function readVarint(buf, p) {
  var val = 0, shift = 0, b;
  do { b = buf[p.v++]; val |= (b & 0x7f) << shift; shift += 7; } while (b >= 0x80);
  return val >>> 0;
}

function readSVarint(buf, p) {
  var n = readVarint(buf, p);
  return (n >>> 1) ^ -(n & 1);
}

function readBytes(buf, p) {
  var len = readVarint(buf, p);
  var out = buf.subarray(p.v, p.v + len);
  p.v += len;
  return out;
}

function readString(buf, p) {
  return new TextDecoder().decode(readBytes(buf, p));
}

function skipField(buf, p, wt) {
  if (wt === 0) readVarint(buf, p);
  else if (wt === 1) p.v += 8;
  else if (wt === 2) { var len = readVarint(buf, p); p.v += len; }
  else if (wt === 5) p.v += 4;
}

// ── MVT Value message ───────────────────────────────────────────────────

function readValue(buf, end, p) {
  while (p.v < end) {
    var tag = readVarint(buf, p);
    var field = tag >>> 3, wt = tag & 7;
    if (field === 1 && wt === 2) return readString(buf, p);
    if (field === 2 && wt === 5) {
      var dv = new DataView(buf.buffer, buf.byteOffset + p.v, 4);
      p.v += 4; return dv.getFloat32(0, true);
    }
    if (field === 3 && wt === 1) {
      var dv2 = new DataView(buf.buffer, buf.byteOffset + p.v, 8);
      p.v += 8; return dv2.getFloat64(0, true);
    }
    if (field >= 4 && field <= 6 && wt === 0) {
      var n = readVarint(buf, p);
      return field === 6 ? ((n >>> 1) ^ -(n & 1)) : n;
    }
    if (field === 7 && wt === 0) return !!readVarint(buf, p);
    skipField(buf, p, wt);
  }
  return null;
}

// ── MVT packed uint32 array ─────────────────────────────────────────────

function readPackedUints(buf, p) {
  var data = readBytes(buf, p);
  var out = [], pp = { v: 0 };
  while (pp.v < data.length) out.push(readVarint(data, pp));
  return out;
}

// ── MVT Feature ─────────────────────────────────────────────────────────

function readFeature(buf, end, p, keys, values) {
  var type = 0, tags = null, geom = null;
  while (p.v < end) {
    var tag = readVarint(buf, p);
    var field = tag >>> 3, wt = tag & 7;
    if (field === 3 && wt === 0) type = readVarint(buf, p);
    else if (field === 2 && wt === 2) tags = readPackedUints(buf, p);
    else if (field === 4 && wt === 2) geom = readPackedUints(buf, p);
    else skipField(buf, p, wt);
  }
  var kind = null;
  if (tags) {
    for (var i = 0; i < tags.length - 1; i += 2) {
      if (keys[tags[i]] === "kind") {
        var v = values[tags[i + 1]];
        if (typeof v === "string") kind = v;
        break;
      }
    }
  }
  return { type: type, kind: kind, geom: geom };
}

// ── MVT Layer ───────────────────────────────────────────────────────────

function readLayer(buf, end, p) {
  var name = "", extent = 4096, keys = [], values = [], fRanges = [];
  while (p.v < end) {
    var tag = readVarint(buf, p);
    var field = tag >>> 3, wt = tag & 7;
    if (field === 1 && wt === 2) { name = readString(buf, p); }
    else if (field === 5 && wt === 0) { extent = readVarint(buf, p); }
    else if (field === 3 && wt === 2) { keys.push(readString(buf, p)); }
    else if (field === 4 && wt === 2) {
      var vLen = readVarint(buf, p), vEnd = p.v + vLen;
      values.push(readValue(buf, vEnd, p));
      p.v = vEnd;
    }
    else if (field === 2 && wt === 2) {
      var fLen = readVarint(buf, p);
      fRanges.push({ s: p.v, e: p.v + fLen });
      p.v += fLen;
    }
    else skipField(buf, p, wt);
  }
  var features = [];
  for (var i = 0; i < fRanges.length; i++) {
    var fp = { v: fRanges[i].s };
    features.push(readFeature(buf, fRanges[i].e, fp, keys, values));
  }
  return { name: name, extent: extent, features: features };
}

// ── MVT Tile ────────────────────────────────────────────────────────────

function parseTile(buffer) {
  var buf = new Uint8Array(buffer);
  var layers = {}, p = { v: 0 };
  while (p.v < buf.length) {
    var tag = readVarint(buf, p);
    var field = tag >>> 3, wt = tag & 7;
    if (field === 3 && wt === 2) {
      var len = readVarint(buf, p), end = p.v + len;
      var layer = readLayer(buf, end, p);
      p.v = end;
      layers[layer.name] = layer;
    } else { skipField(buf, p, wt); }
  }
  return layers;
}

// ── Geometry command decoder (polygons only) ────────────────────────────

function decodePolygonRings(geom) {
  var rings = [], ring = [], x = 0, y = 0, i = 0;
  while (i < geom.length) {
    var cmdInt = geom[i++];
    var cmd = cmdInt & 0x7, count = cmdInt >> 3;
    if (cmd === 1) {
      if (ring.length > 0) rings.push(ring);
      ring = [];
      for (var j = 0; j < count; j++) {
        x += (geom[i] >>> 1) ^ -(geom[i] & 1); i++;
        y += (geom[i] >>> 1) ^ -(geom[i] & 1); i++;
      }
      ring.push(x, y);
    } else if (cmd === 2) {
      for (var j = 0; j < count; j++) {
        x += (geom[i] >>> 1) ^ -(geom[i] & 1); i++;
        y += (geom[i] >>> 1) ^ -(geom[i] & 1); i++;
        ring.push(x, y);
      }
    } else if (cmd === 7) {
      if (ring.length >= 6) rings.push(ring);
      ring = [];
    }
  }
  if (ring.length >= 6) rings.push(ring);
  return rings;
}

// ── Canvas renderer ─────────────────────────────────────────────────────

function colorToCSS(c) {
  return "#" + ("000000" + c.toString(16)).slice(-6);
}

function renderTile(layers, styles, tileSize) {
  var canvas = new OffscreenCanvas(tileSize, tileSize);
  var ctx = canvas.getContext("2d");
  var hasGeometry = false;

  for (var si = 0; si < styles.length; si++) {
    var style = styles[si];
    var layer = layers[style.sourceLayer];
    if (!layer) continue;

    var scale = tileSize / layer.extent;
    var kindSet = style.kinds && style.kinds.length > 0 ? {} : null;
    if (kindSet) {
      for (var ki = 0; ki < style.kinds.length; ki++) kindSet[style.kinds[ki]] = 1;
    }

    ctx.fillStyle = colorToCSS(style.fillColor);

    for (var fi = 0; fi < layer.features.length; fi++) {
      var feature = layer.features[fi];
      if (feature.type !== 3) continue;
      if (kindSet && (!feature.kind || !kindSet[feature.kind])) continue;
      if (!feature.geom) continue;

      var rings = decodePolygonRings(feature.geom);
      if (rings.length === 0) continue;
      ctx.beginPath();
      for (var ri = 0; ri < rings.length; ri++) {
        var ring = rings[ri];
        if (ring.length < 6) continue;
        ctx.moveTo(ring[0] * scale, ring[1] * scale);
        for (var pi = 2; pi < ring.length; pi += 2) {
          ctx.lineTo(ring[pi] * scale, ring[pi + 1] * scale);
        }
        ctx.closePath();
        hasGeometry = true;
      }
      ctx.fill("evenodd");
    }
  }

  if (!hasGeometry) return null;
  return canvas.transferToImageBitmap();
}

// ── Message handler ─────────────────────────────────────────────────────

var abortControllers = {};

self.onmessage = function(e) {
  var msg = e.data;

  if (msg.type === "abort") {
    var ac = abortControllers[msg.id];
    if (ac) { ac.abort(); delete abortControllers[msg.id]; }
    return;
  }

  if (msg.type === "render") {
    var id = msg.id;
    var controller = new AbortController();
    abortControllers[id] = controller;

    fetch(msg.url, { signal: controller.signal })
      .then(function(resp) {
        if (!resp.ok) return null;
        return resp.arrayBuffer();
      })
      .then(function(buffer) {
        delete abortControllers[id];
        if (!buffer || controller.signal.aborted) {
          self.postMessage({ id: id, bitmap: null });
          return;
        }
        var layers = parseTile(buffer);
        var bitmap = renderTile(layers, msg.styles, msg.tileSize);
        if (bitmap) {
          self.postMessage({ id: id, bitmap: bitmap }, [bitmap]);
        } else {
          self.postMessage({ id: id, bitmap: null });
        }
      })
      .catch(function(err) {
        delete abortControllers[id];
        if (err && err.name !== "AbortError") {
          console.warn("[MVTWorker] Tile " + id + ":", err);
        }
        self.postMessage({ id: id, bitmap: null });
      });
  }
};
`;class rv{_workers=[];_nextWorker=0;_pending=new Map;_destroyed=!1;_blobUrl=null;constructor(e=4){try{const t=new Blob([rx],{type:"application/javascript"});this._blobUrl=URL.createObjectURL(t);for(let t=0;t<e;t++){const e=new Worker(this._blobUrl);e.onmessage=e=>this._onMessage(e),this._workers.push(e)}}catch{}}get available(){return this._workers.length>0}render(e,t,i,r,a,s){if(this._destroyed||0===this._workers.length)return Promise.resolve(null);let o=rc(e,t,i),n=r.replace("{z}",String(e)).replace("{x}",String(t)).replace("{y}",String(i));return new Promise(e=>{this._pending.set(o,e);let t=this._workers[this._nextWorker%this._workers.length];this._nextWorker++,t.postMessage({type:"render",id:o,url:n,styles:a,tileSize:s})})}abort(e){let t=this._pending.get(e);for(let i of(t&&(t(null),this._pending.delete(e)),this._workers))i.postMessage({type:"abort",id:e})}destroy(){for(let[,e]of(this._destroyed=!0,this._pending))e(null);for(let e of(this._pending.clear(),this._workers))e.terminate();this._workers=[],this._blobUrl&&(URL.revokeObjectURL(this._blobUrl),this._blobUrl=null)}_onMessage(e){let{id:t,bitmap:i}=e.data,r=this._pending.get(t);r?(this._pending.delete(t),r(i)):i&&i.close()}}function rb(e){return`${e.z}/${e.displayX}/${e.y}`}class rw{container;_camera;_urlTemplate;_styles;_maxZoom;_minZoom;_tileSize;_bufferSize;_workerPool;_textureCache=new Map;_textureCacheCapacity;_evictedTextures=[];_sprites=new Map;_staleSprites=new Map;_fallbackSprites=new Map;_currentZ=-1;_loading=new Set;_neededDisplayKeys=new Set;_neededTiles=new Map;_spritePool=[];static _MAX_POOL_SIZE=64;_onActivity;_destroyed=!1;constructor(e,t,i){this._camera=e,this._urlTemplate=t.urlTemplate,this._styles=t.styles,this._maxZoom=t.maxZoom??14,this._minZoom=t.minZoom??0,this._tileSize=t.tileSize??256,this._bufferSize=t.bufferSize??1,this._textureCacheCapacity=t.cacheCapacity??256,this._workerPool=new rv(t.workerPoolSize??4),this._onActivity=i,this.container=new p.Container({label:"vector-tiles"})}update(){if(this._destroyed)return;let e=rd(this._camera,this._maxZoom,this._minZoom,this._bufferSize);if(0===e.length)return;let t=e[0].z;for(let t of(this._neededDisplayKeys.clear(),this._neededTiles.clear(),e)){let e=rb(t);this._neededDisplayKeys.add(e),this._neededTiles.set(e,t)}if(t!==this._currentZ){for(let[e,t]of(this._clearStaleSprites(),this._sprites))this._staleSprites.set(e,t);this._sprites.clear(),this._currentZ=t}else for(let[e,t]of this._sprites)this._neededDisplayKeys.has(e)||(this.container.removeChild(t),this._recycleSprite(t),this._sprites.delete(e));let i=new Set;for(let e of this._neededTiles.values())i.add(rc(e.z,e.x,e.y));for(let e of this._loading)i.has(e)||(this._workerPool.abort(e),this._loading.delete(e));for(let t of e){let e=rb(t),i=rc(t.z,t.x,t.y);if(this._sprites.has(e))continue;let r=this._getTexture(i);if(r){this._addTileSprite(t,r);continue}this._loading.has(i)||(this._loading.add(i),this._workerPool.render(t.z,t.x,t.y,this._urlTemplate,this._styles,this._tileSize).then(e=>{if(this._loading.delete(i),this._destroyed)return void e?.close();if(!e)return;let t=new eF.Texture({source:new e3.ImageSource({resource:e})});this._cacheTexture(i,t),this._createSpritesForTile(i,t),this._updateFallbacks(),this._sweepStale(),this._onActivity?.()}))}this._updateFallbacks(),0===this._loading.size&&this._sweepStale(),this._destroyOrphanedTextures()}destroy(){for(let e of(this._destroyed=!0,this._workerPool.destroy(),this._removeAllSprites(),this._textureCache.values()))e.destroy(!0);for(let e of(this._textureCache.clear(),this._evictedTextures))e.destroy(!0);this._evictedTextures=[],this.container.destroy({children:!0})}_getTexture(e){let t=this._textureCache.get(e);if(void 0!==t)return this._textureCache.delete(e),this._textureCache.set(e,t),t}_cacheTexture(e,t){if(this._textureCache.size>=this._textureCacheCapacity){let e=this._textureCache.keys().next().value;if(void 0!==e){let t=this._textureCache.get(e);this._textureCache.delete(e),t&&this._evictedTextures.push(t)}}this._textureCache.set(e,t)}_destroyOrphanedTextures(){if(0===this._evictedTextures.length)return;let e=new Set;for(let t of this._sprites.values())e.add(t.texture);for(let t of this._staleSprites.values())e.add(t.texture);for(let t of this._fallbackSprites.values())e.add(t.texture);let t=[];for(let i of this._evictedTextures)e.has(i)?t.push(i):i.destroy(!0);this._evictedTextures=t}_createPositionedSprite(e,t){let{z:i,displayX:r,y:a}=e,s=2*eo/Math.pow(2,i),o=s/this._tileSize,n=this._spritePool.length>0?this._spritePool.pop():new iT.Sprite;return n.texture=t,n.position.set(r*s-eo,eo-a*s),n.scale.set(o,-o),n}_addTileSprite(e,t){let i=rb(e),r=this._createPositionedSprite(e,t);this.container.addChild(r),this._sprites.set(i,r)}_createSpritesForTile(e,t){for(let[i,r]of this._neededTiles)this._sprites.has(i)||this._currentZ!==r.z||rc(r.z,r.x,r.y)===e&&this._addTileSprite(r,t)}_updateFallbacks(){let e=new Map;for(let[t,i]of this._neededTiles){if(this._sprites.has(t))continue;let r=i.z-1,a=Math.floor(i.displayX/2),s=Math.floor(i.x/2),o=Math.floor(i.y/2);for(;r>=0&&!this._staleSprites.has(`${r}/${a}/${o}`);){if(this._getTexture(rc(r,s,o))){let t=`${r}/${a}/${o}`;e.set(t,{z:r,x:s,y:o,displayX:a});break}r--,a=Math.floor(a/2),s=Math.floor(s/2),o=Math.floor(o/2)}}for(let[t,i]of this._fallbackSprites)e.has(t)||(this.container.removeChild(i),this._recycleSprite(i),this._fallbackSprites.delete(t));for(let[t,i]of e){if(this._fallbackSprites.has(t))continue;let e=rc(i.z,i.x,i.y),r=this._getTexture(e);if(!r)continue;let a=this._createPositionedSprite(i,r);this.container.addChildAt(a,0),this._fallbackSprites.set(t,a)}}_clearStaleSprites(){for(let e of this._staleSprites.values())this.container.removeChild(e),this._recycleSprite(e);this._staleSprites.clear()}_sweepStale(){0===this._staleSprites.size||this._loading.size>0||this._clearStaleSprites()}_recycleSprite(e){this._spritePool.length<rw._MAX_POOL_SIZE?(e.texture=eF.Texture.EMPTY,this._spritePool.push(e)):e.destroy()}_removeAllSprites(){for(let e of this._sprites.values())this.container.removeChild(e),e.destroy();for(let e of(this._sprites.clear(),this._staleSprites.values()))this.container.removeChild(e),e.destroy();for(let e of(this._staleSprites.clear(),this._fallbackSprites.values()))this.container.removeChild(e),e.destroy();for(let e of(this._fallbackSprites.clear(),this._spritePool))e.destroy();this._spritePool=[]}}class rM{container;_camera;_onActivity;_layers=[];_background=null;_destroyed=!1;constructor(e,t){this._camera=e,this._onActivity=t,this.container=new p.Container({label:"basemap"})}setLayers(e,t){if(this._destroyLayers(),null!=t){let e=2*eo;this._background=new k.Graphics().rect(-eo-2*e,-eo,5*e,e).fill({color:t}),this.container.addChild(this._background)}for(let t of e){let e,i=t.opacity??(()=>1);(e="raster"===t.type?new ry(this._camera,{urlTemplate:t.url,maxZoom:t.maxZoom??19,minZoom:t.minZoom,tileSize:t.tileSize??512,bufferSize:t.bufferSize??2},this._onActivity):new rw(this._camera,{urlTemplate:t.url,styles:t.styles,maxZoom:t.maxZoom??14,minZoom:t.minZoom,tileSize:t.tileSize??512,bufferSize:t.bufferSize??1},this._onActivity)).container.alpha=i(this._camera.zoom),this.container.addChild(e.container),this._layers.push({layer:e,opacityFn:i})}this.update()}update(){if(this._destroyed)return;let e=this._camera.zoom;for(let{layer:t,opacityFn:i}of this._layers){let r=i(e);t.container.alpha=r,r>0&&t.update()}}setVisible(e){this.container.visible=e}destroy(){this._destroyed=!0,this._destroyLayers(),this.container.destroy({children:!0})}_destroyLayers(){for(let{layer:e}of(this._background&&(this.container.removeChild(this._background),this._background.destroy(),this._background=null),this._layers))this.container.removeChild(e.container),e.destroy();this._layers=[]}}let rA={background:0xfcf2e5,plains:0xd5f5a5,forests:0xbde49a,desert:0xdfd6ca,hills:0xfcf2e5,snow:0xffffff,shallowOcean:7979508},rC={background:2763310,plains:4551265,forests:3107691,desert:8026981,hills:6974553,snow:6786993,shallowOcean:1780324};function rS(e){let t=e?rC:rA;return{backgroundColor:t.background,layers:[{type:"vector",url:"https://map-tiles-worker.paxhistoria.co/worldOSM/{z}/{x}/{y}.mvt",maxZoom:14,opacity:()=>1,styles:[{sourceLayer:"landcover",kinds:["farmland","grassland","scrubland","urban_area"],fillColor:t.plains},{sourceLayer:"landcover",kinds:["forest"],fillColor:t.forests},{sourceLayer:"landcover",kinds:["barren"],fillColor:t.hills},{sourceLayer:"landcover",kinds:["glacier"],fillColor:t.snow},{sourceLayer:"landuse",kinds:["sand","beach"],fillColor:t.desert},{sourceLayer:"landuse",kinds:["wood","forest"],fillColor:t.forests},{sourceLayer:"landuse",kinds:["scrub","grass","residential","farmland","meadow","nature_reserve"],fillColor:t.plains},{sourceLayer:"landuse",kinds:["glacier"],fillColor:t.snow},{sourceLayer:"landuse",kinds:["wetland"],fillColor:t.plains},{sourceLayer:"water",fillColor:t.shallowOcean}]},{type:"raster",url:e?"https://map-tiles-worker.paxhistoria.co/darkMode/{z}/{x}/{y}.png":"https://map-tiles-worker.paxhistoria.co/ModernLight/{z}/{x}/{y}.png",maxZoom:7,tileSize:512,opacity:t=>{let i=e?.6:.3;return t<=5?i:t<=6?i*Math.max(0,1-(t-5)):0}}]}}e.s(["BasemapManager",()=>rM,"buildDefaultBasemapLayers",()=>rS],97580);function rP(e,t){for(;e[t]!==t;)e[t]=e[e[t]],t=e[t];return t}function rT(e,t,i,r,a,s){let o=a-i,n=s-r,l=o*o+n*n;if(l<1e-10)return{distSq:(e-i)**2+(t-r)**2,t:0};let h=((e-i)*o+(t-r)*n)/l;return{distSq:(e-(i+(h=Math.max(0,Math.min(1,h)))*o))**2+(t-(r+h*n))**2,t:h}}function rk(e,t,i){let r=e.length/2-1,a=t.length/2-1,s=new Map;for(let e=0;e<a;e++){let i=t[2*e],r=t[2*e+1],a=s.get(i);a||(a=[],s.set(i,a)),a.push(r)}let o=[];for(let t=0;t<r;t++){let i=e[2*t],a=e[2*t+1],n=(t+1)%r,l=e[2*n],h=e[2*n+1],u=s.get(i),f=s.get(l);(u&&u.includes(a)||f&&f.includes(h))&&o.push(t)}if(0===o.length)return e;let n=[];if(a>500){let s=Math.sqrt(i),l=1/s,h=new Map;for(let e=0;e<a;e++){let i=1000003*Math.floor(t[2*e]*l)+Math.floor(t[2*e+1]*l),r=h.get(i);r||(r=[],h.set(i,r)),r.push(e)}let u=new Float64Array(a),f=new Int32Array(a),d=new Float64Array(a),c=new Float64Array(a),p=new Float64Array(a);u.fill(1/0),f.fill(-1);for(let a=0;a<o.length;a++){let n=o[a],m=e[2*n],_=e[2*n+1],g=(n+1)%r,y=e[2*g],x=e[2*g+1],v=Math.floor((Math.min(m,y)-s)*l),b=Math.floor((Math.max(m,y)+s)*l),w=Math.floor((Math.min(_,x)-s)*l),M=Math.floor((Math.max(_,x)+s)*l);for(let e=v;e<=b;e++)for(let r=w;r<=M;r++){let a=h.get(1000003*e+r);if(a)for(let e=0;e<a.length;e++){let r=a[e],s=t[2*r],o=t[2*r+1],{distSq:l,t:h}=rT(s,o,m,_,y,x);if(l>=i||l>=u[r])continue;let g=s-m,v=o-_,b=s-y,w=o-x;if(g*g+v*v<6400||b*b+w*w<6400)continue;let M=y-m,A=x-_,C=m+h*M,S=_+h*A,P=C-m,T=S-_,k=C-y,I=S-x;!(P*P+T*T<100)&&(k*k+I*I<100||(u[r]=l,f[r]=n,d[r]=h,c[r]=C,p[r]=S))}}}for(let i=0;i<a;i++){let a=f[i];if(a<0)continue;let s=u[i],o=t[2*i],l=t[2*i+1],h=(a+1)%r,m=e[2*a],_=e[2*a+1];100*s<=(e[2*h]-m)**2+(e[2*h+1]-_)**2?n.push({edgeIdx:a,t:d[i],x:o,y:l}):n.push({edgeIdx:a,t:d[i],x:c[i],y:p[i]})}}else for(let s=0;s<a;s++){let a=t[2*s],l=t[2*s+1],h=1/0,u=-1,f=0,d=0,c=0;for(let t=0;t<o.length;t++){let s=o[t],n=e[2*s],p=e[2*s+1],m=(s+1)%r,_=e[2*m],g=e[2*m+1],{distSq:y,t:x}=rT(a,l,n,p,_,g);if(y>=i||y>=h)continue;let v=a-n,b=l-p,w=a-_,M=l-g;if(v*v+b*b<6400||w*w+M*M<6400)continue;let A=_-n,C=g-p,S=n+x*A,P=p+x*C,T=S-n,k=P-p,I=S-_,z=P-g;!(T*T+k*k<100)&&(I*I+z*z<100||(h=y,u=s,f=x,d=S,c=P))}if(u>=0){let t=u,i=(t+1)%r,s=e[2*t],o=e[2*t+1];100*h<=(e[2*i]-s)**2+(e[2*i+1]-o)**2?n.push({edgeIdx:u,t:f,x:a,y:l}):n.push({edgeIdx:u,t:f,x:d,y:c})}}if(0===n.length)return e;let l=new Map;for(let e of n){let t=l.get(e.edgeIdx);t||(t=[],l.set(e.edgeIdx,t)),t.push(e)}for(let e of l.values())e.sort((e,t)=>e.t-t.t);let h=[];for(let t=0;t<r;t++){h.push(e[2*t],e[2*t+1]);let i=l.get(t);if(i)for(let{x:e,y:t}of i)h.push(e,t)}return h.push(h[0],h[1]),h}function rI(e,t){let i=performance.now(),r=Array.from(t);for(let t=0;t<2;t++)for(let t of r){let[i,r]=t.split("\0"),a=e.get(i),s=e.get(r);if(!a||!s)continue;let o=new Map;for(let e=0;e<s.rings.length;e++){let t=s.rings[e],i=t.length/2-1;for(let r=0;r<i;r++){let i=t[2*r],a=t[2*r+1],s=o.get(i);s||(s=[],o.set(i,s)),s.push(a,e)}}for(let e=0;e<a.rings.length;e++){let t=a.rings[e],i=t.length/2-1,r=new Set;for(let e=0;e<i;e++){let i=t[2*e],a=t[2*e+1],s=o.get(i);if(s)for(let e=0;e<s.length;e+=2)s[e]===a&&r.add(s[e+1])}if(0!==r.size)for(let t of r)a.rings[e]=rk(a.rings[e],s.rings[t],22500),s.rings[t]=rk(s.rings[t],a.rings[e],22500)}}return performance.now()-i}function rz(e,t){let i=performance.now(),r=new Set;for(let e of t){let[t,i]=e.split("\0");r.add(t),r.add(i)}if(0===r.size)return performance.now()-i;let a=[],s=new Map;for(let t of r){let i=e.get(t);if(!i)continue;let r=a.length;for(let e of i.rings){let t=e.length/2-1;for(let i=0;i<t;i++)a.push({ringArr:e,offset:2*i})}s.set(t,[r,a.length])}let o=a.length,n=Array(o),l=Array(o);for(let e=0;e<o;e++)n[e]=e,l[e]=0;for(let e of t){let[t,i]=e.split("\0"),[r,o]=s.get(t)??[0,0],[f,d]=s.get(i)??[0,0];if(r===o||f===d)continue;let c=new Uint8Array(o-r),p=new Uint8Array(d-f),m=new Map;for(let e=f;e<d;e++){let t=a[e],i=t.ringArr[t.offset],r=t.ringArr[t.offset+1],s=m.get(i);s||(s=[],m.set(i,s)),s.push(r)}for(let e=r;e<o;e++){let t=a[e],i=t.ringArr[t.offset],s=t.ringArr[t.offset+1],n=m.get(i);if(n){for(let t=0;t<n.length;t++)if(n[t]===s){c[e-r]=1,e>r&&(c[e-1-r]=1),e<o-1&&(c[e+1-r]=1);break}}}let _=new Map;for(let e=r;e<o;e++){let t=a[e],i=t.ringArr[t.offset],r=t.ringArr[t.offset+1],s=_.get(i);s||(s=[],_.set(i,s)),s.push(r)}for(let e=f;e<d;e++){let t=a[e],i=t.ringArr[t.offset],r=t.ringArr[t.offset+1],s=_.get(i);if(s){for(let t=0;t<s.length;t++)if(s[t]===r){p[e-f]=1,e>f&&(p[e-1-f]=1),e<d-1&&(p[e+1-f]=1);break}}}let g=new Map;for(let e=f;e<d;e++){if(!p[e-f])continue;let t=a[e],i=1000003*Math.floor(.0125*t.ringArr[t.offset])+Math.floor(.0125*t.ringArr[t.offset+1]),r=g.get(i);r||(r=[],g.set(i,r)),r.push(e)}for(let e=r;e<o;e++){if(!c[e-r])continue;let t=a[e],i=t.ringArr[t.offset],s=t.ringArr[t.offset+1],o=Math.floor(.0125*i),f=Math.floor(.0125*s);for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++){let d=g.get((o+t)*1000003+(f+r));if(d)for(let t=0;t<d.length;t++){var h,u;let r=d[t],o=a[r],f=i-o.ringArr[o.offset],c=s-o.ringArr[o.offset+1];f*f+c*c<6400&&(h=e,u=r,(h=rP(n,h))!==(u=rP(n,u))&&(l[h]<l[u]?n[h]=u:l[h]>l[u]?n[u]=h:(n[u]=h,l[h]++)))}}}}let f=new Map;for(let e=0;e<o;e++){let t=rP(n,e),i=f.get(t);i||(i=[],f.set(t,i)),i.push(e)}for(let e of f.values()){if(e.length<2)continue;let t=0,i=0;for(let r of e){let e=a[r];t+=e.ringArr[e.offset],i+=e.ringArr[e.offset+1]}let r=t/e.length,s=i/e.length,o=!1;for(let t of e){let e=a[t],i=e.ringArr[e.offset]-r,n=e.ringArr[e.offset+1]-s;if(i*i+n*n>1600){o=!0;break}}if(!o)for(let t of e){let e=a[t];e.ringArr[e.offset]=r,e.ringArr[e.offset+1]=s,0===e.offset&&(e.ringArr[e.ringArr.length-2]=r,e.ringArr[e.ringArr.length-1]=s)}}return performance.now()-i}function rL(e){return e.map(e=>{let t=tu(tf(e)),i=[];for(let[e,r]of t){let{x:t,y:a}=en(e,r);i.push(t,a)}return i})}function rE(e,t){let i=[];for(let[r,a]of Object.entries(e))try{let e=JSON.parse(a.geometry);i.push({id:r,geojson:e,adjacencies:a.adjacencies,zIndex:t?.[r]?.zIndex??1})}catch{console.warn(`[prepareRegions] Failed to parse geometry for region ${r}`)}let r=new Map;for(let e of i){let t=r.get(e.zIndex);t||(t=[],r.set(e.zIndex,t)),t.push(e)}let a=Array.from(r.keys()).sort((e,t)=>e-t),s=[],o=[],n=new Map,l=new Map;for(let e of a){let t=r.get(e),i=[],a=[],u=[],f=[],d=[];for(let e of t){var h;let t=tc(e.geojson);if(0===t.indices.length)continue;i.push({positions:t.positions,indices:t.indices,vertexCount:t.vertexCount}),a.push(e.id),u.push(t.bounds);let r="Polygon"===(h=e.geojson).type?[rL(h.coordinates)]:h.coordinates.map(e=>rL(e));f.push(r),l.set(e.id,r),d.push({id:e.id,adjacencies:e.adjacencies}),e.adjacencies&&n.set(e.id,e.adjacencies),o.push({id:e.id,bounds:t.bounds,parts:r})}0!==i.length&&s.push({zIndex:e,mergedInputs:i,regionIds:a,regionBounds:u,regionParts:f,regionAdjacencies:d})}let u=new Map;for(let[e,t]of l){let i=t.flatMap(e=>e).filter(e=>e&&e.length>=6);i.length>0&&u.set(e,{rings:i})}let f=new Set;for(let[t,i]of Object.entries(e)){let e=i.type?.toLowerCase();("ocean"===e||"strait"===e)&&f.add(t)}if(!function(e,t,i){let r=performance.now();for(let[i,r]of e){let a=[];for(let e of r.rings){let t=e.length/2-1;if(t<3)continue;let i=0,r=0;for(let a=0;a<t;a++){let s=(a+1)%t,o=e[2*a],n=e[2*a+1],l=e[2*s],h=e[2*s+1];i+=o*h-l*n;let u=l-o,f=h-n;r+=Math.sqrt(u*u+f*f)}let s=Math.abs(i)/2;!(s<1)&&(r*r/(4*s)>250||a.push(e))}0===a.length?(e.delete(i),t.delete(i)):a.length<r.rings.length&&(r.rings=a)}let a=new Set;for(let[e,r]of t)if(!i?.has(e))for(let t of r){if(e===t||i?.has(t))continue;let r=e<t?`${e}\0${t}`:`${t}\0${e}`;a.add(r)}let s=rI(e,a),o=rz(e,a),n=function(e){let t=new Map;for(let[i,r]of e)for(let e of r.rings){let r=e.length/2-1;for(let a=0;a<r;a++){let r=`${e[2*a]},${e[2*a+1]}`,s=t.get(r);s||(s=[],t.set(r,s)),s.includes(i)||s.push(i)}}let i=new Set;for(let e of t.values())if(!(e.length<2))for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++){let a=e[t],s=e[r];i.add(a<s?`${a}\0${s}`:`${s}\0${a}`)}return i}(e),l=new Set;for(let e of n)if(!a.has(e)){if(i){let t=e.indexOf("\0");if(i.has(e.slice(0,t))||i.has(e.slice(t+1)))continue}l.add(e)}let h=0,u=0;if(l.size>0){let i=new Set(a);for(let e of l)i.add(e);for(let r of(h=rI(e,l),u=rz(e,i),l)){let[e,i]=r.split("\0"),a=t.get(e);a||(a=[],t.set(e,a)),a.includes(i)||a.push(i);let s=t.get(i);s||(s=[],t.set(i,s)),s.includes(e)||s.push(e)}}console.log("[closeGeometryGaps] timing:",{totalMs:+(performance.now()-r).toFixed(2),pass1_tJunctionsMs:+s.toFixed(2),pass1_vertexSnapMs:+o.toFixed(2),pass2_tJunctionsMs:+h.toFixed(2),pass2_vertexSnapMs:+u.toFixed(2),declaredPairs:a.size,newPairs:l.size,regions:e.size})}(u,n,f),t)for(let[e,i]of Object.entries(t)){let t=u.get(e);t&&(void 0!==i.strokeWidthPx&&(t.strokeWidthPx=i.strokeWidthPx),void 0!==i.strokeColor&&(t.strokeColor=i.strokeColor),void 0!==i.strokeAlpha&&(t.strokeAlpha=i.strokeAlpha))}let d={};for(let[e,t]of u)d[e]=t;let c={};for(let[e,t]of n)c[e]=t;return{groups:s,borderRegions:d,adjacencies:c,spatialData:o}}function rF(e){let t=[];for(let i of e.groups)for(let e of i.mergedInputs)t.push(e.positions.buffer,e.indices.buffer);return t}e.s(["collectTransferables",()=>rF,"prepareRegions",()=>rE],346433),o.extensions.add(w.CanvasGraphicsPipe,M.CanvasGraphicsContextSystem,z.GraphicsPipe,I.GraphicsContextSystem,T);class rB{app;camera;events;worldContainer;_container;_options;_initialized=!1;_canvasMode=!1;_resizeObserver=null;_intersectionObserver=null;_cameraController=null;_cameraAnimator=null;_panZoomHandler=null;_regionLayer=null;_borderLayer=null;_borderFadeStart=null;_borderFadeEnd=null;_borderZoomListener=null;_labelLineLayer=null;_labelLineZoomListener=null;_nonInteractableRegionIds=new Set;_featureLayer=null;_featureZoomListener=null;_basemapManager=null;_basemapViewListener=null;_conquestFillLayer=null;_gapClosedRings=null;_selectionLayer=null;_selectionTickerCb=null;_selectionZoomListener=null;_ownershipMap=new Map;_lastHoveredRegionId=void 0;_debugContainer=null;_pickingTexture=null;_idleFrameCount=0;static _IDLE_THRESHOLD=3;_featureBatching=!1;_contextLost=!1;_contextLostAbort=null;constructor(e){this._container=e.container,this._options=e,this.app=new b,this.camera=new ed({center:e.center??[0,0],zoom:e.zoom??2,minZoom:e.minZoom??1,maxZoom:e.maxZoom??20,hideParallelWorlds:e.hideParallelWorlds,worldBounds:e.worldBounds}),this.events=new ew,this.worldContainer=new p.Container({label:"world"})}async init(){if(this._initialized)return;let e=this._container.getBoundingClientRect(),t={backgroundColor:1710638,antialias:!0,resolution:window.devicePixelRatio||1,autoDensity:!0,width:e.width||800,height:e.height||600,gcActive:!1};try{await this.app.init({...t,preference:"webgpu"})}catch{this.app=new b,await this.app.init({...t,preference:"webgl"})}if("canvas"===this.app.renderer.name&&(this._canvasMode=!0),this._container.appendChild(this.app.canvas),this.camera.viewportWidth=this.app.screen.width,this.camera.viewportHeight=this.app.screen.height,this.camera.clampToBounds(),this.app.stage.addChild(this.worldContainer),this._cameraController=new ep(this.camera,this.worldContainer,this.events,this.app.ticker),this._cameraAnimator=new eb(this.camera,this.app.ticker,()=>this.markDirty()),this._panZoomHandler=new eS(this.app.canvas,this.camera,this.app.ticker,()=>this.markDirty(),(e,t)=>this._handleClick(e,t)),this._panZoomHandler.onInteractionStart=()=>{this._cameraAnimator?.cancel()},this._panZoomHandler.onHover=(e,t)=>{this._handleHover(e,t)},this._basemapManager=new rM(this.camera,()=>this.markDirty()),this.worldContainer.addChildAt(this._basemapManager.container,0),this.events.on("view:change",()=>{this.markDirty(),this._updateWrapping()}),this._basemapViewListener=()=>{this._basemapManager?.update()},this.events.on("view:change",this._basemapViewListener),this._resizeObserver=new ResizeObserver(e=>{for(let t of e){let{width:e,height:i}=t.contentRect;e>0&&i>0&&(this.camera.viewportWidth=e,this.camera.viewportHeight=i,this.camera.clampToBounds(),this.app.renderer.resize(e,i),this._featureLayer?.setViewport(e,i),this._cameraController?.applyNow(),this.app.render())}}),this._resizeObserver.observe(this._container),this.app.ticker.add(this._checkIdle,this,y.UPDATE_PRIORITY.UTILITY),this._intersectionObserver=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&this.markDirty()}),this._intersectionObserver.observe(this._container),this._cameraController.applyNow(),!this._canvasMode){this._contextLostAbort=new AbortController;let e=this._contextLostAbort.signal,t=e=>{!this._contextLost&&this._initialized&&(this._contextLost=!0,console.warn(`[PaxMap] GPU context lost: ${e}`),this.events.emit("context:lost",{reason:e}))};this.app.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),t("webgl-context-lost")},{signal:e});try{let i=this.app.renderer?.gpu?.device;i?.lost&&i.lost.then(i=>{e.aborted||t(i.reason||"device-lost")})}catch{}}this._initialized=!0}get isCanvasMode(){return this._canvasMode}get isContextLost(){return this._contextLost}updateWorldTransform(){this._cameraController?.applyNow()}markDirty(){this._idleFrameCount=0,this.app.ticker&&!this.app.ticker.started&&this.app.ticker.start()}_checkIdle(){this._idleFrameCount++,this._idleFrameCount>rB._IDLE_THRESHOLD&&this.app.ticker.stop()}_updateWrapping(){if(this.camera.singleWorld)return;let{centerX:e,zoom:t,viewportWidth:i}=this.camera;this._regionLayer?.updateWrapping(e,t,i),this._borderLayer?.updateWrapping(e,t,i),this._labelLineLayer?.updateWrapping(e,t,i)}on(e,t){this.events.on(e,t)}off(e,t){this.events.off(e,t)}getRendererInfo(){let e=this.app.renderer;return{type:e.name,resolution:e.resolution,width:this.app.screen.width,height:this.app.screen.height}}animate(...e){return this._cameraAnimator?this._cameraAnimator.animate(...e):Promise.resolve(!1)}get isAnimating(){return this._cameraAnimator?.isAnimating??!1}async flyTo(e){let t;if(!this._cameraAnimator)return!1;let i=this.camera.zoom;t=e.extent?this._zoomForExtent(e.extent):e.zoom??i;let r=this.camera.centerX,a=this.camera.centerY,s=en(e.center[0],e.center[1]),o=s.x-r,n=s.y-a,l=Math.sqrt(o*o+n*n),h=Math.abs(i-t);if(l<100&&h<.25)return!0;let u=2*eo*(Math.max(this.camera.viewportWidth,this.camera.viewportHeight)||1e3)/256,f=u*Math.pow(2,-i),d=u*Math.pow(2,-t),c=Math.SQRT2,p=c*c,m=p*p;if(l<1){let r=Math.max(600,Math.min(3e3,Math.round(Math.abs(Math.log(d/f))/c*1e3/1.2)));return this._cameraAnimator.animatePath(e=>({centerX:s.x,centerY:s.y,zoom:i+(t-i)*e}),r,e.easing)}let _=-Math.asinh((d*d-f*f+m*l*l)/(2*f*p*l)),g=(-Math.asinh((d*d-f*f-m*l*l)/(2*d*p*l))-_)/c;if(!isFinite(g)||g<=0)return this._cameraAnimator.animate({center:e.center,zoom:t,duration:1e3,easing:e.easing});let y=Math.max(600,Math.min(4e3,Math.round(1e3*g/1.2))),x=Math.cosh(_),v=Math.sinh(_);return this._cameraAnimator.animatePath(e=>{let t=e*g,i=f/(p*l)*(x*Math.tanh(c*t+_)-v);return{centerX:r+i*o,centerY:a+i*n,zoom:Math.log2(u/(f*x/Math.cosh(c*t+_)))}},y,e.easing)}_zoomForExtent(e){let t=this.camera.viewportWidth||800,i=this.camera.viewportHeight||600,r=en(e[0],e[3]),a=en(e[2],e[1]),s=Math.abs(a.x-r.x),o=Math.abs(r.y-a.y);if(s<=0&&o<=0)return this.camera.zoom;let n=1.5*s/t,l=1.5*o/i,h=Math.max(s/t,o/i),u=Math.max(n,l),f=u/Math.max(Math.min(n,l),.001);return Math.max(1,Math.min(14,Math.log2(1/(h+(u-h)*(1-(f>4?Math.min(.8,(f-4)*.1):0)))*2*eo/256)))}cancelAnimation(){this._cameraAnimator?.cancel()}setBasemapLayers(e,t){this._basemapManager?.setLayers(e,t),this.markDirty()}setDefaultBasemap(e){let{layers:t,backgroundColor:i}=rS(e);this._basemapManager?.setLayers(t,i),this.markDirty()}setTileLayerVisible(e){this._basemapManager?.setVisible(e),this.markDirty()}setBorderLayerVisible(e){this._borderLayer&&(this._borderLayer.container.visible=e,this.markDirty())}setBorderFadeRange(e,t){this._borderFadeStart=e,this._borderFadeEnd=t,this._borderLayer&&(this._borderLayer.setFadeRange(e,t),this._borderLayer.updateForZoom(this.camera.zoom),this.markDirty())}setLabelLineLayerVisible(e){this._labelLineLayer&&(this._labelLineLayer.container.visible=e,this.markDirty())}isFeatureVisible(e){return this._featureLayer?.isFeatureVisible(e)??!1}setFeatureLayerVisible(e){this._featureLayer&&(this._featureLayer.container.visible=e,this.markDirty())}setDebugLabelBoxes(e){this._featureLayer&&(this._featureLayer.debugShowLabelBoxes=e,this._featureLayer.updateForZoom(this.camera.zoom,this.camera.centerX,this.camera.centerY),this.markDirty())}get regionLayer(){return this._regionLayer}get borderLayerContainer(){return this._borderLayer?.container??null}get labelLineLayerContainer(){return this._labelLineLayer?.container??null}snapshotBorders(){if(!this._borderLayer)return null;let{container:e,borderMeshes:t}=this._borderLayer.detachExternalContent(),i=this.worldContainer.children.indexOf(this._borderLayer.container);return this.worldContainer.addChildAt(e,i>=0?i:this.worldContainer.children.length),{container:e,borderMeshes:t}}setBorderExternalAlpha(e){this._borderLayer?.setExternalAlpha(e),this.markDirty()}snapshotBorderEdgeKeys(){return this._borderLayer?.getExternalEdgeKeys()??new Set}setNewBorderEdgesAlpha(e,t){this._borderLayer?.setNewEdgesAlpha(e,t),this.markDirty()}setEdgesAlpha(e,t){this._borderLayer?.setEdgesAlpha(e,t),this.markDirty()}resetAllEdgeAlphas(){this._borderLayer?.resetAllEdgeAlphas(),this.markDirty()}getEdgesForRegionBorder(e){return this._borderLayer?.getEdgesForRegionBorder(e)??new Set}getEdgeRegions(e,t,i,r){return this._borderLayer?.getEdgeRegions(e,t,i,r)}get lastBorderDiff(){return this._borderLayer?.lastOwnershipDiff??{promoted:[],demoted:[],demotedChainCoords:[],promotedChainCoords:[]}}getAllExternalBorderChains(){return this._borderLayer?.getAllExternalChainCoords()??[]}getExternalBorderChainsExcluding(e){return this._borderLayer?.getExternalChainCoordsExcluding(e)??[]}buildBorderChainsExcludingEdges(e){return this._borderLayer?.buildChainsExcludingEdges(e)??[]}snapshotLabelLines(){if(!this._labelLineLayer)return null;let e=this._labelLineLayer.detachContent(),t=this.worldContainer.children.indexOf(this._labelLineLayer.container);return this.worldContainer.addChildAt(e,t>=0?t:this.worldContainer.children.length),e}loadRegions(e,t){let i=rE(e,t);this.loadPreparedRegions(i)}loadPreparedRegions(e){this._regionLayer?.destroy(),this._borderLayer?.destroy(),this._regionLayer=new tP,this._regionLayer.skipGhosts=this.camera.singleWorld,this._regionLayer.loadFromPreparedGroups(e.groups,e.spatialData),this.worldContainer.addChildAt(this._regionLayer.container,1);let t=new Map;for(let[i,r]of Object.entries(e.borderRegions))t.set(i,r);this._gapClosedRings=t,this._borderLayer=new e1,this._borderLayer.skipGhosts=this.camera.singleWorld,this._borderLayer.setRegions(t),null!=this._borderFadeStart&&null!=this._borderFadeEnd&&this._borderLayer.setFadeRange(this._borderFadeStart,this._borderFadeEnd),this.worldContainer.addChildAt(this._borderLayer.container,2),this._borderLayer.updateForZoom(this.camera.zoom),this._borderZoomListener&&this.events.off("view:change",this._borderZoomListener),this._borderZoomListener=({zoom:e})=>{this._borderLayer?.updateForZoom(e),this._conquestFillLayer?.updateForZoom(e),this._regionLayer?.hasZoomRegions&&this._regionLayer.updateForZoom(e)},this.events.on("view:change",this._borderZoomListener),this._updateWrapping(),this.markDirty()}setOwnership(e,t,i){if(!this._regionLayer)return;let r=new Map;for(let[a,s]of Object.entries(e)){let e="number"==typeof s?s:tw(s),o=t?.[a]??String(s),n=i?.[a];this._regionLayer.setOwnership(a,e,n,o),r.set(a,o)}for(let e of this._ownershipMap.keys())r.has(e)||this._regionLayer.clearOwnership(e);this._ownershipMap=r,this._regionLayer.flushColors();let a=this._borderLayer,s=this._ownershipMap,o=()=>this.markDirty(),n=()=>this._updateWrapping();a&&queueMicrotask(()=>{a.updateOwnership(s),n(),o()}),this.markDirty()}setOwnershipIdsOnly(e){if(!this._regionLayer)return;let t=new Map;for(let[i,r]of Object.entries(e))this._regionLayer.setOwnerIdOnly(i,r),t.set(i,r);for(let e of this._ownershipMap.keys())t.has(e)||this._regionLayer.setOwnerIdOnly(e,null);this._ownershipMap=t;let i=this._borderLayer,r=this._ownershipMap,a=()=>this.markDirty();i&&queueMicrotask(()=>{i.updateOwnership(r),a()}),this.markDirty()}updateOwnership(e,t,i,r){if(!this._regionLayer)return;let a="number"==typeof t?t:tw(t),s=r??String(t);this._regionLayer.setOwnership(e,a,i,s),this._ownershipMap.set(e,s),this._regionLayer.flushColors(),this._borderLayer?.updateOwnership(this._ownershipMap),this.markDirty()}setRegionAlphas(e){if(!this._regionLayer)return;for(let[t,i]of Object.entries(e))this._regionLayer.setRegionAlpha(t,i);this._regionLayer.flushColors();let t=new Set;for(let[i,r]of Object.entries(e))0===r&&t.add(i);this._borderLayer?.setInvisibleRegions(t),this.markDirty()}setNonInteractableRegions(e){this._nonInteractableRegionIds=e}registerZoomRegion(e,t,i,r){this._regionLayer?.registerZoomRegion(e,t,i,r)}setLabelLinesAlpha(e){this._labelLineLayer?.setAlpha(e),this.markDirty()}setLabelLineAlpha(e,t){this._labelLineLayer?.setLabelAlpha(e,t),this.markDirty()}resetAllLabelAlphas(){this._labelLineLayer?.resetAllLabelAlphas(),this.markDirty()}setInteractionEnabled(e){this._panZoomHandler&&(this._panZoomHandler.enabled=e)}setMapPreferences(e){this._panZoomHandler&&(void 0!==e.zoomSensitivity&&(this._panZoomHandler.zoomSensitivity=Math.max(.5,Math.min(3,e.zoomSensitivity))),void 0!==e.invertZoomDirection&&(this._panZoomHandler.invertZoomDirection=e.invertZoomDirection),void 0!==e.disablePanInertia&&(this._panZoomHandler.disablePanInertia=e.disablePanInertia))}setLabelLines(e){this._labelLineLayer||(this._labelLineLayer=new tl,this._labelLineLayer.skipGhosts=this.camera.singleWorld,this.worldContainer.addChild(this._labelLineLayer.container),this._labelLineZoomListener=({zoom:e})=>{this._labelLineLayer?.updateForZoom(e)},this.events.on("view:change",this._labelLineZoomListener)),this._labelLineLayer.setLines(e),this._labelLineLayer.updateForZoom(this.camera.zoom),this._updateWrapping(),this.markDirty()}clearLabelLines(){this._labelLineZoomListener&&(this.events.off("view:change",this._labelLineZoomListener),this._labelLineZoomListener=null),this._labelLineLayer&&(this.worldContainer.removeChild(this._labelLineLayer.container),this._labelLineLayer.destroy(),this._labelLineLayer=null)}_featureRenderingOptions={};setFeatures(e,t){t&&(this._featureRenderingOptions=t),this._featureLayer||(this._featureLayer=new i4,this._featureLayer.setViewport(this.app.screen.width,this.app.screen.height),this.worldContainer.addChild(this._featureLayer.container),this._featureZoomListener=({zoom:e})=>{this._featureLayer?.updateForZoom(e,this.camera.centerX,this.camera.centerY)},this.events.on("view:change",this._featureZoomListener)),this._featureLayer.setFeatures(e,this._featureRenderingOptions),this._featureLayer.updateForZoom(this.camera.zoom,this.camera.centerX,this.camera.centerY),this.markDirty()}async preloadFlags(e){await i5(e)}clearFeatures(){this._featureZoomListener&&(this.events.off("view:change",this._featureZoomListener),this._featureZoomListener=null),this._featureLayer&&(this.worldContainer.removeChild(this._featureLayer.container),this._featureLayer.destroy(),this._featureLayer=null)}beginFeatureBatch(){this._featureBatching=!0,this._featureLayer?.beginBatch()}endFeatureBatch(){this._featureLayer?.endBatch(),this._featureBatching=!1,this.markDirty()}setFeatureColor(e,t){this._featureLayer?.setFeatureColor(e,t),this._featureBatching||this.markDirty()}setFeaturePosition(e,t){this._featureLayer?.setFeaturePosition(e,t),this._featureBatching||this.markDirty()}setFeatureScale(e,t){this._featureLayer?.setFeatureScale(e,t),this._featureBatching||this.markDirty()}setFeatureOpacity(e,t){this._featureLayer?.setFeatureOpacity(e,t),this._featureBatching||this.markDirty()}getFeatureLabelOffset(e){return this._featureLayer?.getFeatureLabelOffset(e)??null}computeFeatureLabelOffset(e,t){return this._featureLayer?.computeFeatureLabelOffset(e,t)??null}setFeatureLabelOffset(e,t,i){this._featureLayer?.setFeatureLabelOffset(e,t,i),this._featureBatching||this.markDirty()}setFeatureLabelOpacity(e,t){this._featureLayer?.setFeatureLabelOpacity(e,t),this._featureBatching||this.markDirty()}setFeatureVisible(e,t){this._featureLayer?.setFeatureVisible(e,t),this._featureBatching||this.markDirty()}async _handleClick(e,t){let{x:i,y:r}=this.camera.screenToMercator(e,t),{lng:a,lat:s}=el(i,r),o=2*eo,n=((i+eo)%o+o)%o-eo,l=this._regionLayer?.spatialIndex,h=l?.queryExact(n,r)??void 0,u=h&&this._nonInteractableRegionIds.has(h)?void 0:h,f=await this._pickFeatureAt(e,t);!f&&this._featureLayer&&(f=this._featureLayer.hitTestCPU(n,r)),this.events.emit("click:map",{coordinate:[a,s],mercator:[i,r],regionId:u,featureId:f}),u&&this.events.emit("click:region",{regionId:u,coordinate:[a,s]})}async _pickFeatureAt(e,t){if(!this._featureLayer||!this._initialized)return;let i=this._featureLayer.pickingContainer;if(!i.children.length)return;let r=this.app.renderer,a=this.app.screen.width,s=this.app.screen.height;this._pickingTexture&&this._pickingTexture.width===a&&this._pickingTexture.height===s||(this._pickingTexture?.destroy(!0),this._pickingTexture=L.RenderTexture.create({width:a,height:s,resolution:1}));let o=this.worldContainer.worldTransform;i.position.set(o.tx,o.ty),i.scale.set(o.a,o.d),r.render({container:i,target:this._pickingTexture,clear:!0}),i.position.set(0,0),i.scale.set(1,1);let n=Math.round(Math.max(0,Math.min(e,a-1))),l=Math.round(Math.max(0,Math.min(t,s-1)));try{let e=await r.extract.pixels({target:this._pickingTexture}),t=e.pixels;if(t&&t.length>=4){let i=(l*e.width+n)*4;return this._featureLayer.resolvePickedColor(t[i],t[i+1],t[i+2])}}catch{}}_handleHover(e,t){let{x:i,y:r}=this.camera.screenToMercator(e,t),{lng:a,lat:s}=el(i,r),o=2*eo,n=this._regionLayer?.spatialIndex,l=n?.queryExact(((i+eo)%o+o)%o-eo,r)??void 0,h=l&&this._nonInteractableRegionIds.has(l)?void 0:l;h!==this._lastHoveredRegionId&&(this._lastHoveredRegionId=h,this.events.emit("hover:map",{coordinate:[a,s],mercator:[i,r],regionId:h}))}startConquestFill(e){if(!this._regionLayer||0===e.length)return null;this.stopConquestFill(),this._conquestFillLayer=new ri,this._conquestFillLayer.skipGhosts=this.camera.singleWorld,this._conquestFillLayer.start(e),this._conquestFillLayer.updateForZoom(this.camera.zoom);let t=this._borderLayer?this.worldContainer.children.indexOf(this._borderLayer.container):-1,i=t>=0?t:this.worldContainer.children.length;return this.worldContainer.addChildAt(this._conquestFillLayer.container,i),this.markDirty(),this._conquestFillLayer}stopConquestFill(){this._conquestFillLayer&&(this.worldContainer.removeChild(this._conquestFillLayer.container),this._conquestFillLayer.destroy(),this._conquestFillLayer=null)}suppressConquestBorders(e,t){this._borderLayer?.suppressConquestBorders(e,t)}unsuppressConquestBorders(){this._borderLayer?.unsuppressConquestBorders()}setSelectedRegions(e,t){if(this.clearSelection(),!this._regionLayer||0===e.length)return;let i=this._gapClosedRings??this._regionLayer.getOuterRings(),r=[];for(let t of e){let e=i.get(t);if(e)for(let t of e.rings)t.length>=6&&r.push(t)}if(0===r.length)return;let a=new ru;a.skipGhosts=this.camera.singleWorld,a.activate(r,this.camera.zoom,t);let s=this.worldContainer.children.indexOf(this._borderLayer?.container),o=s>=0?s+1:this.worldContainer.children.length;this.worldContainer.addChildAt(a.container,o);let n=()=>{a.update(this.app.ticker.deltaMS/1e3),this.markDirty()};this.app.ticker.add(n);let l=e=>{a.updateForZoom(e.zoom)};this.events.on("view:change",l),this._selectionLayer=a,this._selectionTickerCb=n,this._selectionZoomListener=l,this.markDirty()}clearSelection(){this._selectionLayer&&(this._selectionTickerCb&&(this.app.ticker.remove(this._selectionTickerCb),this._selectionTickerCb=null),this._selectionZoomListener&&(this.events.off("view:change",this._selectionZoomListener),this._selectionZoomListener=null),this.worldContainer.removeChild(this._selectionLayer.container),this._selectionLayer.destroy(),this._selectionLayer=null,this.markDirty())}_debugClickListener=null;debugClickAdjacencies(e=!0){if(!e){this._debugClickListener&&(this.events.off("click:region",this._debugClickListener),this._debugClickListener=null),this._debugContainer&&(this.worldContainer.removeChild(this._debugContainer),this._debugContainer.destroy({children:!0}),this._debugContainer=null,this.markDirty());return}this._debugClickListener||(this._debugClickListener=({regionId:e})=>{if(!this._regionLayer)return;let t=this._regionLayer.getAdjacencies(e)??[];console.log(`[debug] Region ${e} adjacencies (${t.length}):`,t),this._debugContainer&&(this.worldContainer.removeChild(this._debugContainer),this._debugContainer.destroy({children:!0}),this._debugContainer=null);let i=new p.Container({label:"debug-adj"});this._debugContainer=i;let r=[0xff3333,3407667,3381759,0xffff33,0xff33ff,3407871,0xff9933],a=(e,t,i)=>{this._regionLayer?.setOwnership(e,t,i)};a(e,0xffffff,.9);for(let e=0;e<t.length;e++)a(t[e],r[e%r.length],.7);this._regionLayer?.flushColors();let s=new Q.TextStyle({fontFamily:"monospace",fontSize:14,fill:0xffffff,stroke:{color:0,width:4}});for(let r of[e,...t]){let e=this._regionLayer?.getRegion(r);if(!e)continue;let t=(e.bounds.minX+e.bounds.maxX)/2,a=(e.bounds.minY+e.bounds.maxY)/2,o=new ea({text:r,style:s});o.anchor.set(.5,.5),o.x=t,o.y=a,o.scale.set(100,-100),i.addChild(o)}this.worldContainer.addChild(i),this.markDirty()},this.events.on("click:region",this._debugClickListener),console.log("[debug] Click any region to see its adjacencies. Call debugClickAdjacencies(false) to disable."))}debugRegionInfo(e){let t=this._regionLayer?.getRegion(e);if(!t)return void console.log(`Region ${e} not found`);let i=this._regionLayer?.getAdjacencies(e)??[],r=t.parts.map(e=>e.map(e=>e.length/2)),a=r.flat().reduce((e,t)=>e+t,0),s=t.bounds,o=s.maxX-s.minX,n=s.maxY-s.minY;console.log(`Region ${e}:`,{parts:t.parts.length,ringVertices:r,totalVerts:a,boundsSize:`${Math.round(o)}m x ${Math.round(n)}m`,bounds:s,adjacencies:i,ownerId:t.ownerId})}debugEdges(e){if(!this._borderLayer)return;this._debugContainer&&(this.worldContainer.removeChild(this._debugContainer),this._debugContainer.destroy({children:!0}),this._debugContainer=null);let t=new p.Container({label:"debug-edges"});this._debugContainer=t;let i=this._borderLayer.getDebugEdgesForRegions(e),r=new Q.TextStyle({fontFamily:"monospace",fontSize:14,fill:0xffffff,stroke:{color:0,width:4}});for(let e of i){let i=(e.x1+e.x2)/2,a=(e.y1+e.y2)/2,s=new k.Graphics,o=e.isExternal?0xff3333:e.wasDemoted?0xff9900:3407667;s.moveTo(e.x1,e.y1),s.lineTo(e.x2,e.y2),s.stroke({color:o,width:2e3,alpha:.9});let n=new ea({text:String(e.index),style:r});n.anchor.set(.5,.5),n.x=i,n.y=a,n.scale.set(100,-100),t.addChild(s),t.addChild(n)}this.worldContainer.addChild(t),this.markDirty()}destroy(){this._initialized&&(this.clearSelection(),this.stopConquestFill(),this._cameraAnimator?.destroy(),this._cameraAnimator=null,this._basemapManager?.destroy(),this._basemapManager=null,this._basemapViewListener=null,this._panZoomHandler?.destroy(),this._panZoomHandler=null,this.clearFeatures(),this.clearLabelLines(),this._pickingTexture?.destroy(!0),this._pickingTexture=null,this._borderLayer?.destroy(),this._borderLayer=null,this._borderZoomListener=null,this._gapClosedRings=null,this._regionLayer?.destroy(),this._regionLayer=null,this._cameraController?.destroy(),this._cameraController=null,this._resizeObserver?.disconnect(),this._resizeObserver=null,this._intersectionObserver?.disconnect(),this._intersectionObserver=null,this._contextLostAbort?.abort(),this._contextLostAbort=null,this._ownershipMap.clear(),this.app.ticker.remove(this._checkIdle,this),this.events.removeAllListeners(),this.app.destroy(!1,{children:!0,texture:!0}),this._initialized=!1)}}e.s(["PaxMap",()=>rB],380317);let rR=[{name:"London",lng:-.1276,lat:51.5074,color:0xff6b6b},{name:"Paris",lng:2.3522,lat:48.8566,color:5164484},{name:"Rome",lng:12.4964,lat:41.9028,color:0xffe66d},{name:"Cairo",lng:31.2357,lat:30.0444,color:0xff8a5c},{name:"Tokyo",lng:139.6917,lat:35.6895,color:0xa8e6cf},{name:"New York",lng:-74.006,lat:40.7128,color:0xdda0dd},{name:"São Paulo",lng:-46.6333,lat:-23.5505,color:0x98d8c8}];function rD(e){let t=new k.Graphics;t.circle(0,0,5e5),t.fill({color:5227511,alpha:.6}),t.stroke({color:166097,width:5e4,alpha:.8}),e.worldContainer.addChild(t);let i=new ea({text:"Pax Cartography Engine — PixiJS v8",style:new Q.TextStyle({fontFamily:"system-ui, -apple-system, sans-serif",fontSize:16,fontWeight:"bold",fill:0xffffff,dropShadow:{color:0,blur:4,distance:2,alpha:.5}})});for(let t of(i.anchor.set(.5,0),i.x=e.app.screen.width/2,i.y=16,e.app.stage.addChild(i),rR)){let{x:i,y:r}=en(t.lng,t.lat),a=new k.Graphics;a.circle(0,0,2e5),a.fill({color:t.color,alpha:.8}),a.x=i,a.y=r,e.worldContainer.addChild(a)}}e.s(["addDemoContent",()=>rD],594050),e.s([],154136)}]);