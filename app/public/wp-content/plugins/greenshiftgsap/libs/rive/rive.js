(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rive"] = factory();
	else
		root["rive"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Rive = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Rive) {
  Rive = Rive || {};


null;var m;m||(m=typeof Rive !== 'undefined' ? Rive : {});var aa,ba;m.ready=new Promise(function(b,a){aa=b;ba=a});
function ca(){function b(h){const g=d;c=a=0;d=new Map;g.forEach(l=>{try{l(h)}catch(k){console.error(k)}});this.La();e&&e.fb()}let a=0,c=0,d=new Map,e=null,f=null;this.requestAnimationFrame=function(h){a||(a=requestAnimationFrame(b.bind(this)));const g=++c;d.set(g,h);return g};this.cancelAnimationFrame=function(h){d.delete(h);a&&0==d.size&&(cancelAnimationFrame(a),a=0)};this.cb=function(h){f&&(document.body.remove(f),f=null);h||(f=document.createElement("div"),f.style.backgroundColor="black",f.style.position=
"fixed",f.style.right=0,f.style.top=0,f.style.color="white",f.style.padding="4px",f.innerHTML="RIVE FPS",h=function(g){f.innerHTML="RIVE FPS "+g.toFixed(1)},document.body.appendChild(f));e=new function(){let g=0,l=0;this.fb=function(){var k=performance.now();l?(++g,k-=l,1E3<k&&(h(1E3*g/k),g=l=0)):(l=k,g=0)}}};this.$a=function(){f&&(document.body.remove(f),f=null);e=null};this.La=function(){}}
function ea(b){console.assert(!0);const a=new Map;let c=-Infinity;this.push=function(d){d=d+((1<<b)-1)>>b;a.has(d)&&clearTimeout(a.get(d));a.set(d,setTimeout(function(){a.delete(d);0==a.length?c=-Infinity:d==c&&(c=Math.max(...a.keys()),console.assert(c<d))},1E3));c=Math.max(d,c);return c<<b}}
const fa=new function(){function b(){if(!a){var t=document.createElement("canvas"),v={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,renderViaOffscreenBackBuffer:1};let q=t.getContext("webgl2",v);if(q)c=2;else if(q=t.getContext("webgl",v))c=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;d=Math.min(q.getParameter(q.MAX_RENDERBUFFER_SIZE),
q.getParameter(q.MAX_TEXTURE_SIZE));function E(I,w,z){w=q.createShader(w);q.shaderSource(w,z);q.compileShader(w);z=q.getShaderInfoLog(w);if(0<z.length)throw z;q.attachShader(I,w)}t=q.createProgram();E(t,q.VERTEX_SHADER,"attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
E(t,q.FRAGMENT_SHADER,"precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");q.bindAttribLocation(t,0,"vertex");q.bindAttribLocation(t,1,"uv");q.linkProgram(t);v=q.getProgramInfoLog(t);if(0<v.length)throw v;e=q.getUniformLocation(t,"mat");f=q.getUniformLocation(t,"translate");q.useProgram(t);q.bindBuffer(q.ARRAY_BUFFER,q.createBuffer());q.enableVertexAttribArray(0);
q.enableVertexAttribArray(1);q.bindBuffer(q.ELEMENT_ARRAY_BUFFER,q.createBuffer());q.uniform1i(q.getUniformLocation(t,"image"),0);q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);a=q}return!0}let a=null,c=0,d=0,e=null,f=null,h=0,g=0;this.ob=function(){b();return d};this.Ya=function(t){if(!b())return null;const v=a.createTexture();a.bindTexture(a.TEXTURE_2D,v);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);2==c?(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.generateMipmap(a.TEXTURE_2D)):a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);return v};const l=new ea(8),k=new ea(8),p=new ea(10),r=new ea(10);this.bb=function(t,v,q,E,I){if(b()){var w=l.push(t),z=k.push(v);if(a.canvas.width!=w||a.canvas.height!=z)a.canvas.width=w,a.canvas.height=z;a.viewport(0,z-v,t,v);a.disable(a.SCISSOR_TEST);
a.clearColor(0,0,0,0);a.clear(a.COLOR_BUFFER_BIT);a.enable(a.SCISSOR_TEST);q.sort((y,da)=>da.Oa-y.Oa);w=p.push(E);h!=w&&(a.bufferData(a.ARRAY_BUFFER,8*w,a.DYNAMIC_DRAW),h=w);w=0;for(var J of q)a.bufferSubData(a.ARRAY_BUFFER,w,J.Aa),w+=4*J.Aa.length;console.assert(w==4*E);for(var P of q)a.bufferSubData(a.ARRAY_BUFFER,w,P.Ra),w+=4*P.Ra.length;console.assert(w==8*E);w=r.push(I);g!=w&&(a.bufferData(a.ELEMENT_ARRAY_BUFFER,2*w,a.DYNAMIC_DRAW),g=w);J=0;for(var X of q)a.bufferSubData(a.ELEMENT_ARRAY_BUFFER,
J,X.indices),J+=2*X.indices.length;console.assert(J==2*I);X=0;P=!0;w=J=0;for(const y of q){y.image.va!=X&&(a.bindTexture(a.TEXTURE_2D,y.image.Va||null),X=y.image.va);y.rb?(a.scissor(y.Ea,z-y.Fa-y.Ka,y.yb,y.Ka),P=!0):P&&(a.scissor(0,z-v,t,v),P=!1);q=2/t;const da=-2/v;a.uniform4f(e,y.la[0]*q*y.ra,y.la[1]*da*y.sa,y.la[2]*q*y.ra,y.la[3]*da*y.sa);a.uniform2f(f,y.la[4]*q*y.ra+q*(y.Ea-y.pb*y.ra)-1,y.la[5]*da*y.sa+da*(y.Fa-y.qb*y.sa)+1);a.vertexAttribPointer(0,2,a.FLOAT,!1,0,w);a.vertexAttribPointer(1,2,
a.FLOAT,!1,0,w+4*E);a.drawElements(a.TRIANGLES,y.indices.length,a.UNSIGNED_SHORT,J);w+=4*y.Aa.length;J+=2*y.indices.length}console.assert(w==4*E);console.assert(J==2*I)}};this.canvas=function(){return b()&&a.canvas}};
Rive.onRuntimeInitialized=function(){function b(n){switch(n){case k.srcOver:return"source-over";case k.screen:return"screen";case k.overlay:return"overlay";case k.darken:return"darken";case k.lighten:return"lighten";case k.colorDodge:return"color-dodge";case k.colorBurn:return"color-burn";case k.hardLight:return"hard-light";case k.softLight:return"soft-light";case k.difference:return"difference";case k.exclusion:return"exclusion";case k.multiply:return"multiply";case k.hue:return"hue";case k.saturation:return"saturation";
case k.color:return"color";case k.luminosity:return"luminosity"}}function a(n){return"rgba("+((16711680&n)>>>16)+","+((65280&n)>>>8)+","+((255&n)>>>0)+","+((4278190080&n)>>>24)/255+")"}function c(){0<J.length&&(fa.bb(z.drawWidth(),z.drawHeight(),J,P,X),J=[],X=P=0,z.reset(512,512));for(const n of w){for(const u of n.da)u();n.da=[]}w.clear()}var d=Rive.RenderPaintStyle;const e=Rive.RenderPath,f=Rive.RenderPaint,h=Rive.Renderer,g=Rive.StrokeCap,l=Rive.StrokeJoin,k=Rive.BlendMode,p=d.fill,r=d.stroke,
t=Rive.FillRule.evenOdd;let v=1;var q=Rive.RenderImage.extend("CanvasRenderImage",{__construct:function(){this.__parent.__construct.call(this);this.va=v;v=v+1&2147483647||1},decode:function(n){let u=Xa;u.total++;var F=this,B=new Image;B.src=URL.createObjectURL(new Blob([n],{type:"image/png"}));B.onload=function(){F.Ta=B;F.Va=fa.Ya(B);F.size(B.width,B.height);u.loaded++;if(u.loaded===u.total){const D=u.ready;D&&(D(),u.ready=null)}}}}),E=e.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this);
this.ga=new Path2D},reset:function(){this.ga=new Path2D},addPath:function(n,u,F,B,D,G,A){var C=this.ga,R=C.addPath;n=n.ga;const K=new DOMMatrix;K.a=u;K.b=F;K.c=B;K.d=D;K.e=G;K.f=A;R.call(C,n,K)},fillRule:function(n){this.Ca=n},moveTo:function(n,u){this.ga.moveTo(n,u)},lineTo:function(n,u){this.ga.lineTo(n,u)},cubicTo:function(n,u,F,B,D,G){this.ga.bezierCurveTo(n,u,F,B,D,G)},close:function(){this.ga.closePath()}}),I=f.extend("CanvasRenderPaint",{color:function(n){this.Da=a(n)},thickness:function(n){this.Wa=
n},join:function(n){switch(n){case l.miter:this.ua="miter";break;case l.round:this.ua="round";break;case l.bevel:this.ua="bevel"}},cap:function(n){switch(n){case g.butt:this.ta="butt";break;case g.round:this.ta="round";break;case g.square:this.ta="square"}},style:function(n){this.Ua=n},blendMode:function(n){this.Sa=b(n)},linearGradient:function(n,u,F,B){this.oa={Pa:n,Qa:u,Ha:F,Ia:B,za:[]}},radialGradient:function(n,u,F,B){this.oa={Pa:n,Qa:u,Ha:F,Ia:B,za:[],mb:!0}},addStop:function(n,u){this.oa.za.push({color:n,
stop:u})},completeGradient:function(){},draw:function(n,u,F){let B=this.Ua;var D=this.Da,G=this.oa;n.globalCompositeOperation=this.Sa;if(null!=G){D=G.Pa;var A=G.Qa;const R=G.Ha;var C=G.Ia;const K=G.za;G.mb?(G=R-D,C-=A,D=n.createRadialGradient(D,A,0,D,A,Math.sqrt(G*G+C*C))):D=n.createLinearGradient(D,A,R,C);for(let U=0,L=K.length;U<L;U++)A=K[U],D.addColorStop(A.stop,a(A.color));this.Da=D;this.oa=null}switch(B){case r:n.strokeStyle=D;n.lineWidth=this.Wa;n.lineCap=this.ta;n.lineJoin=this.ua;n.stroke(u);
break;case p:n.fillStyle=D,n.fill(u,F)}}});const w=new Set;let z=null,J=[],P=0,X=0;var y=Rive.CanvasRenderer=h.extend("Renderer",{__construct:function(n){this.__parent.__construct.call(this);this.fa=[1,0,0,1,0,0];this.Z=n.getContext("2d");this.Ba=n;this.da=[]},save:function(){this.fa.push(...this.fa.slice(this.fa.length-6));this.da.push(this.Z.save.bind(this.Z))},restore:function(){const n=this.fa.length-6;if(6>n)throw"restore() called without matching save().";this.fa.splice(n);this.da.push(this.Z.restore.bind(this.Z))},
transform:function(n,u,F,B,D,G){const A=this.fa,C=A.length-6;A.splice(C,6,A[C]*n+A[C+2]*u,A[C+1]*n+A[C+3]*u,A[C]*F+A[C+2]*B,A[C+1]*F+A[C+3]*B,A[C]*D+A[C+2]*G+A[C+4],A[C+1]*D+A[C+3]*G+A[C+5]);this.da.push(this.Z.transform.bind(this.Z,n,u,F,B,D,G))},rotate:function(n){const u=Math.sin(n);n=Math.cos(n);this.transform(n,u,-u,n,0,0)},_drawPath:function(n,u){this.da.push(u.draw.bind(u,this.Z,n.ga,n.Ca===t?"evenodd":"nonzero"))},_drawImage:function(n,u,F){var B=n.Ta;if(B){var D=this.Z,G=b(u);this.da.push(function(){D.globalCompositeOperation=
G;D.globalAlpha=F;D.drawImage(B,0,0);D.globalAlpha=1})}},_getMatrix:function(n){const u=this.fa,F=u.length-6;for(let B=0;6>B;++B)n[B]=u[F+B]},_drawImageMesh:function(n,u,F,B,D,G,A,C,R,K){var U=this.Z.canvas.width,L=this.Z.canvas.height;const pb=R-A,qb=K-C;A=Math.max(A,0);C=Math.max(C,0);R=Math.min(R,U);K=Math.min(K,L);const sa=R-A,ta=K-C;console.assert(sa<=Math.min(pb,U));console.assert(ta<=Math.min(qb,L));if(!(0>=sa||0>=ta)){R=sa<pb||ta<qb;U=K=1;var ia=Math.ceil(sa*K),ja=Math.ceil(ta*U);L=fa.ob();
ia>L&&(K*=L/ia,ia=L);ja>L&&(U*=L/ja,ja=L);z||(z=new m.DynamicRectanizer(L),z.reset(512,512));L=z.addRect(ia,ja);0>L&&(c(),w.add(this),L=z.addRect(ia,ja),console.assert(0<=L));var rb=L&65535,sb=L>>16;J.push({la:this.fa.slice(this.fa.length-6),image:n,Ea:rb,Fa:sb,pb:A,qb:C,yb:ia,Ka:ja,ra:K,sa:U,Aa:new Float32Array(B),Ra:new Float32Array(D),indices:new Uint16Array(G),rb:R,Oa:n.va<<1|(R?1:0)});P+=B.length;X+=G.length;var na=this.Z,Yb=b(u);this.da.push(function(){na.save();na.resetTransform();na.globalCompositeOperation=
Yb;na.globalAlpha=F;na.drawImage(fa.canvas(),rb,sb,ia,ja,A,C,sa,ta);na.restore()})}},_clipPath:function(n){this.da.push(this.Z.clip.bind(this.Z,n.ga,n.Ca===t?"evenodd":"nonzero"))},clear:function(){w.add(this);this.da.push(this.Z.clearRect.bind(this.Z,0,0,this.Ba.width,this.Ba.height))},flush:function(){},translate:function(n,u){this.transform(1,0,0,1,n,u)}});Rive.makeRenderer=function(n){return new y(n)};Rive.renderFactory={makeRenderPaint:function(){return new I},makeRenderPath:function(){return new E},
makeRenderImage:function(){return new q}};let da=Rive.load,Xa=null;Rive.load=function(n){return new Promise(function(u){let F=null;Xa={total:0,loaded:0,ready:function(){u(F)}};F=da(n);0==Xa.total&&u(F)})};d=new ca;Rive.requestAnimationFrame=d.requestAnimationFrame.bind(d);Rive.cancelAnimationFrame=d.cancelAnimationFrame.bind(d);Rive.enableFPSCounter=d.cb.bind(d);Rive.disableFPSCounter=d.$a;d.La=c;Rive.cleanup=function(){z&&z.delete()}};
var ha=Object.assign({},m),ka="object"==typeof window,la="function"==typeof importScripts,x="",ma,oa;
if(ka||la)la?x=self.location.href:"undefined"!=typeof document&&document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):x="",la&&(oa=b=>{var a=new XMLHttpRequest;a.open("GET",b,!1);a.responseType="arraybuffer";a.send(null);return new Uint8Array(a.response)}),ma=(b,a,c)=>{var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?
a(d.response):c()};d.onerror=c;d.send(null)};var pa=m.print||console.log.bind(console),qa=m.printErr||console.warn.bind(console);Object.assign(m,ha);ha=null;var ra;m.wasmBinary&&(ra=m.wasmBinary);var noExitRuntime=m.noExitRuntime||!0;"object"!=typeof WebAssembly&&ua("no native wasm support detected");var va,wa=!1,xa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ya(b,a,c){var d=a+c;for(c=a;b[c]&&!(c>=d);)++c;if(16<c-a&&b.buffer&&xa)return xa.decode(b.subarray(a,c));for(d="";a<c;){var e=b[a++];if(e&128){var f=b[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var h=b[a++]&63;e=224==(e&240)?(e&15)<<12|f<<6|h:(e&7)<<18|f<<12|h<<6|b[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}var za,Aa,H,Ba,Ca,Da,M,Ea,Fa;
function Ga(){var b=va.buffer;za=b;m.HEAP8=Aa=new Int8Array(b);m.HEAP16=Ba=new Int16Array(b);m.HEAP32=Da=new Int32Array(b);m.HEAPU8=H=new Uint8Array(b);m.HEAPU16=Ca=new Uint16Array(b);m.HEAPU32=M=new Uint32Array(b);m.HEAPF32=Ea=new Float32Array(b);m.HEAPF64=Fa=new Float64Array(b)}var Ha,Ia=[],Ja=[],Ka=[];function La(){var b=m.preRun.shift();Ia.unshift(b)}var Ma=0,Na=null,Oa=null;
function ua(b){if(m.onAbort)m.onAbort(b);b="Aborted("+b+")";qa(b);wa=!0;b=new WebAssembly.RuntimeError(b+". Build with -sASSERTIONS for more info.");ba(b);throw b;}function Pa(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="canvas_advanced.wasm";if(!Pa()){var Qa=N;N=m.locateFile?m.locateFile(Qa,x):x+Qa}function Ra(){var b=N;try{if(b==N&&ra)return new Uint8Array(ra);if(oa)return oa(b);throw"both async and sync fetching of the wasm failed";}catch(a){ua(a)}}
function Sa(){if(!ra&&(ka||la)){if("function"==typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+N+"'";return b.arrayBuffer()}).catch(function(){return Ra()});if(ma)return new Promise(function(b,a){ma(N,function(c){b(new Uint8Array(c))},a)})}return Promise.resolve().then(function(){return Ra()})}function Ta(b){for(;0<b.length;)b.shift()(m)}
function Ua(b){if(void 0===b)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var a=b.charCodeAt(0);return 48<=a&&57>=a?"_"+b:b}function Va(b,a){b=Ua(b);return function(){null;return a.apply(this,arguments)}}var O=[{},{value:void 0},{value:null},{value:!0},{value:!1}],Wa=[];
function Ya(b){var a=Error,c=Va(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Za=void 0;function Q(b){throw new Za(b);}
var $a=b=>{b||Q("Cannot use deleted val. handle = "+b);return O[b].value},S=b=>{switch(b){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var a=Wa.length?Wa.pop():O.length;O[a]={ya:1,value:b};return a}},ab=void 0,bb=void 0;function T(b){for(var a="";H[b];)a+=bb[H[b++]];return a}var cb=[];function db(){for(;cb.length;){var b=cb.pop();b.U.ka=!1;b["delete"]()}}var eb=void 0,V={};
function fb(b,a){for(void 0===a&&Q("ptr should not be undefined");b.$;)a=b.na(a),b=b.$;return a}var gb={};function hb(b){b=ib(b);var a=T(b);jb(b);return a}function kb(b,a){var c=gb[b];void 0===c&&Q(a+" has unknown type "+hb(b));return c}function lb(){}var mb=!1;function nb(b){--b.count.value;0===b.count.value&&(b.aa?b.ca.ha(b.aa):b.X.V.ha(b.W))}function ob(b,a,c){if(a===c)return b;if(void 0===c.$)return null;b=ob(b,a,c.$);return null===b?null:c.ab(b)}var tb={};
function ub(b,a){a=fb(b,a);return V[a]}var vb=void 0;function wb(b){throw new vb(b);}function xb(b,a){a.X&&a.W||wb("makeClassHandle requires ptr and ptrType");!!a.ca!==!!a.aa&&wb("Both smartPtrType and smartPtr must be specified");a.count={value:1};return yb(Object.create(b,{U:{value:a}}))}
function yb(b){if("undefined"===typeof FinalizationRegistry)return yb=a=>a,b;mb=new FinalizationRegistry(a=>{nb(a.U)});yb=a=>{var c=a.U;c.aa&&mb.register(a,{U:c},a);return a};lb=a=>{mb.unregister(a)};return yb(b)}var zb={};function Ab(b){for(;b.length;){var a=b.pop();b.pop()(a)}}function Bb(b){return this.fromWireType(Da[b>>2])}var Cb={},Db={};
function W(b,a,c){function d(g){g=c(g);g.length!==b.length&&wb("Mismatched type converter count");for(var l=0;l<b.length;++l)Y(b[l],g[l])}b.forEach(function(g){Db[g]=a});var e=Array(a.length),f=[],h=0;a.forEach((g,l)=>{gb.hasOwnProperty(g)?e[l]=gb[g]:(f.push(g),Cb.hasOwnProperty(g)||(Cb[g]=[]),Cb[g].push(()=>{e[l]=gb[g];++h;h===f.length&&d(e)}))});0===f.length&&d(e)}
function Eb(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b);}}
function Y(b,a,c={}){if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=a.name;b||Q('type "'+d+'" must have a positive integer typeid pointer');if(gb.hasOwnProperty(b)){if(c.lb)return;Q("Cannot register type '"+d+"' twice")}gb[b]=a;delete Db[b];Cb.hasOwnProperty(b)&&(a=Cb[b],delete Cb[b],a.forEach(e=>e()))}function Fb(b){Q(b.U.X.V.name+" instance already deleted")}function Gb(){}
function Hb(b,a,c){if(void 0===b[a].Y){var d=b[a];b[a]=function(){b[a].Y.hasOwnProperty(arguments.length)||Q("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[a].Y+")!");return b[a].Y[arguments.length].apply(this,arguments)};b[a].Y=[];b[a].Y[d.ja]=d}}
function Ib(b,a,c){m.hasOwnProperty(b)?((void 0===c||void 0!==m[b].Y&&void 0!==m[b].Y[c])&&Q("Cannot register public name '"+b+"' twice"),Hb(m,b,b),m.hasOwnProperty(c)&&Q("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),m[b].Y[c]=a):(m[b]=a,void 0!==c&&(m[b].zb=c))}function Jb(b,a,c,d,e,f,h,g){this.name=b;this.constructor=a;this.ea=c;this.ha=d;this.$=e;this.gb=f;this.na=h;this.ab=g;this.Ma=[]}
function Kb(b,a,c){for(;a!==c;)a.na||Q("Expected null or instance of "+c.name+", got an instance of "+a.name),b=a.na(b),a=a.$;return b}function Lb(b,a){if(null===a)return this.wa&&Q("null is not a valid "+this.name),0;a.U||Q('Cannot pass "'+Mb(a)+'" as a '+this.name);a.U.W||Q("Cannot pass deleted object as a pointer of type "+this.name);return Kb(a.U.W,a.U.X.V,this.V)}
function Nb(b,a){if(null===a){this.wa&&Q("null is not a valid "+this.name);if(this.qa){var c=this.xa();null!==b&&b.push(this.ha,c);return c}return 0}a.U||Q('Cannot pass "'+Mb(a)+'" as a '+this.name);a.U.W||Q("Cannot pass deleted object as a pointer of type "+this.name);!this.pa&&a.U.X.pa&&Q("Cannot convert argument of type "+(a.U.ca?a.U.ca.name:a.U.X.name)+" to parameter type "+this.name);c=Kb(a.U.W,a.U.X.V,this.V);if(this.qa)switch(void 0===a.U.aa&&Q("Passing raw pointer to smart pointer is illegal"),
this.xb){case 0:a.U.ca===this?c=a.U.aa:Q("Cannot convert argument of type "+(a.U.ca?a.U.ca.name:a.U.X.name)+" to parameter type "+this.name);break;case 1:c=a.U.aa;break;case 2:if(a.U.ca===this)c=a.U.aa;else{var d=a.clone();c=this.tb(c,S(function(){d["delete"]()}));null!==b&&b.push(this.ha,c)}break;default:Q("Unsupporting sharing policy")}return c}
function Ob(b,a){if(null===a)return this.wa&&Q("null is not a valid "+this.name),0;a.U||Q('Cannot pass "'+Mb(a)+'" as a '+this.name);a.U.W||Q("Cannot pass deleted object as a pointer of type "+this.name);a.U.X.pa&&Q("Cannot convert argument of type "+a.U.X.name+" to parameter type "+this.name);return Kb(a.U.W,a.U.X.V,this.V)}
function Pb(b,a,c,d){this.name=b;this.V=a;this.wa=c;this.pa=d;this.qa=!1;this.ha=this.tb=this.xa=this.Na=this.xb=this.sb=void 0;void 0!==a.$?this.toWireType=Nb:(this.toWireType=d?Lb:Ob,this.ba=null)}function Qb(b,a,c){m.hasOwnProperty(b)||wb("Replacing nonexistant public symbol");void 0!==m[b].Y&&void 0!==c?m[b].Y[c]=a:(m[b]=a,m[b].ja=c)}
function Rb(b,a){var c=[];return function(){c.length=0;Object.assign(c,arguments);if(b.includes("j")){var d=m["dynCall_"+b];d=c&&c.length?d.apply(null,[a].concat(c)):d.call(null,a)}else d=Ha.get(a).apply(null,c);return d}}function Z(b,a){b=T(b);var c=b.includes("j")?Rb(b,a):Ha.get(a);"function"!=typeof c&&Q("unknown function pointer with signature "+b+": "+a);return c}var Sb=void 0;
function Tb(b,a){function c(f){e[f]||gb[f]||(Db[f]?Db[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};a.forEach(c);throw new Sb(b+": "+d.map(hb).join([", "]));}
function Ub(b,a,c,d,e){var f=a.length;2>f&&Q("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==a[1]&&null!==c,g=!1;for(c=1;c<a.length;++c)if(null!==a[c]&&void 0===a[c].ba){g=!0;break}var l="void"!==a[0].name,k=f-2,p=Array(k),r=[],t=[];return function(){arguments.length!==k&&Q("function "+b+" called with "+arguments.length+" arguments, expected "+k+" args!");t.length=0;r.length=h?2:1;r[0]=e;if(h){var v=a[1].toWireType(t,this);r[1]=v}for(var q=0;q<k;++q)p[q]=
a[q+2].toWireType(t,arguments[q]),r.push(p[q]);q=d.apply(null,r);if(g)Ab(t);else for(var E=h?1:2;E<a.length;E++){var I=1===E?v:p[E-2];null!==a[E].ba&&a[E].ba(I)}v=l?a[0].fromWireType(q):void 0;return v}}function Vb(b,a){for(var c=[],d=0;d<b;d++)c.push(M[a+4*d>>2]);return c}
function Wb(b,a,c){b instanceof Object||Q(c+' with invalid "this": '+b);b instanceof a.V.constructor||Q(c+' incompatible with "this" of type '+b.constructor.name);b.U.W||Q("cannot call emscripten binding method "+c+" on deleted object");return Kb(b.U.W,b.U.X.V,a.V)}function Xb(b){4<b&&0===--O[b].ya&&(O[b]=void 0,Wa.push(b))}
function Zb(b,a,c){switch(a){case 0:return function(d){return this.fromWireType((c?Aa:H)[d])};case 1:return function(d){return this.fromWireType((c?Ba:Ca)[d>>1])};case 2:return function(d){return this.fromWireType((c?Da:M)[d>>2])};default:throw new TypeError("Unknown integer type: "+b);}}function Mb(b){if(null===b)return"null";var a=typeof b;return"object"===a||"array"===a||"function"===a?b.toString():""+b}
function $b(b,a){switch(a){case 2:return function(c){return this.fromWireType(Ea[c>>2])};case 3:return function(c){return this.fromWireType(Fa[c>>3])};default:throw new TypeError("Unknown float type: "+b);}}
function ac(b,a,c){switch(a){case 0:return c?function(d){return Aa[d]}:function(d){return H[d]};case 1:return c?function(d){return Ba[d>>1]}:function(d){return Ca[d>>1]};case 2:return c?function(d){return Da[d>>2]}:function(d){return M[d>>2]};default:throw new TypeError("Unknown integer type: "+b);}}var bc="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function cc(b,a){var c=b>>1;for(var d=c+a/2;!(c>=d)&&Ca[c];)++c;c<<=1;if(32<c-b&&bc)return bc.decode(H.subarray(b,c));c="";for(d=0;!(d>=a/2);++d){var e=Ba[b+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function dc(b,a,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=a;c=c<2*b.length?c/2:b.length;for(var e=0;e<c;++e)Ba[a>>1]=b.charCodeAt(e),a+=2;Ba[a>>1]=0;return a-d}function ec(b){return 2*b.length}
function fc(b,a){for(var c=0,d="";!(c>=a/4);){var e=Da[b+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function gc(b,a,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=a;c=d+c-4;for(var e=0;e<b.length;++e){var f=b.charCodeAt(e);if(55296<=f&&57343>=f){var h=b.charCodeAt(++e);f=65536+((f&1023)<<10)|h&1023}Da[a>>2]=f;a+=4;if(a+4>c)break}Da[a>>2]=0;return a-d}
function hc(b){for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&++c;a+=4}return a}var ic={};function jc(b){var a=ic[b];return void 0===a?T(b):a}var kc=[];function lc(b){var a=kc.length;kc.push(b);return a}function mc(b,a){for(var c=Array(b),d=0;d<b;++d)c[d]=kb(M[a+4*d>>2],"parameter "+d);return c}var nc=[],oc=[null,[],[]];Za=m.BindingError=Ya("BindingError");m.count_emval_handles=function(){for(var b=0,a=5;a<O.length;++a)void 0!==O[a]&&++b;return b};
m.get_first_emval=function(){for(var b=5;b<O.length;++b)if(void 0!==O[b])return O[b];return null};ab=m.PureVirtualError=Ya("PureVirtualError");for(var pc=Array(256),qc=0;256>qc;++qc)pc[qc]=String.fromCharCode(qc);bb=pc;m.getInheritedInstanceCount=function(){return Object.keys(V).length};m.getLiveInheritedInstances=function(){var b=[],a;for(a in V)V.hasOwnProperty(a)&&b.push(V[a]);return b};m.flushPendingDeletes=db;m.setDelayFunction=function(b){eb=b;cb.length&&eb&&eb(db)};vb=m.InternalError=Ya("InternalError");
Gb.prototype.isAliasOf=function(b){if(!(this instanceof Gb&&b instanceof Gb))return!1;var a=this.U.X.V,c=this.U.W,d=b.U.X.V;for(b=b.U.W;a.$;)c=a.na(c),a=a.$;for(;d.$;)b=d.na(b),d=d.$;return a===d&&c===b};Gb.prototype.clone=function(){this.U.W||Fb(this);if(this.U.ma)return this.U.count.value+=1,this;var b=yb,a=Object,c=a.create,d=Object.getPrototypeOf(this),e=this.U;b=b(c.call(a,d,{U:{value:{count:e.count,ka:e.ka,ma:e.ma,W:e.W,X:e.X,aa:e.aa,ca:e.ca}}}));b.U.count.value+=1;b.U.ka=!1;return b};
Gb.prototype["delete"]=function(){this.U.W||Fb(this);this.U.ka&&!this.U.ma&&Q("Object already scheduled for deletion");lb(this);nb(this.U);this.U.ma||(this.U.aa=void 0,this.U.W=void 0)};Gb.prototype.isDeleted=function(){return!this.U.W};Gb.prototype.deleteLater=function(){this.U.W||Fb(this);this.U.ka&&!this.U.ma&&Q("Object already scheduled for deletion");cb.push(this);1===cb.length&&eb&&eb(db);this.U.ka=!0;return this};Pb.prototype.hb=function(b){this.Na&&(b=this.Na(b));return b};
Pb.prototype.Ga=function(b){this.ha&&this.ha(b)};Pb.prototype.argPackAdvance=8;Pb.prototype.readValueFromPointer=Bb;Pb.prototype.deleteObject=function(b){if(null!==b)b["delete"]()};
Pb.prototype.fromWireType=function(b){function a(){return this.qa?xb(this.V.ea,{X:this.sb,W:c,ca:this,aa:b}):xb(this.V.ea,{X:this,W:b})}var c=this.hb(b);if(!c)return this.Ga(b),null;var d=ub(this.V,c);if(void 0!==d){if(0===d.U.count.value)return d.U.W=c,d.U.aa=b,d.clone();d=d.clone();this.Ga(b);return d}d=this.V.gb(c);d=tb[d];if(!d)return a.call(this);d=this.pa?d.Xa:d.pointerType;var e=ob(c,this.V,d.V);return null===e?a.call(this):this.qa?xb(d.V.ea,{X:d,W:e,ca:this,aa:b}):xb(d.V.ea,{X:d,W:e})};
Sb=m.UnboundTypeError=Ya("UnboundTypeError");
var sc={l:function(b,a,c){b=T(b);a=kb(a,"wrapper");c=$a(c);var d=[].slice,e=a.V,f=e.ea,h=e.$.ea,g=e.$.constructor;b=Va(b,function(){e.$.Ma.forEach(function(k){if(this[k]===h[k])throw new ab("Pure virtual function "+k+" must be implemented in JavaScript");}.bind(this));Object.defineProperty(this,"__parent",{value:f});this.__construct.apply(this,d.call(arguments))});f.__construct=function(){this===f&&Q("Pass correct 'this' to __construct");var k=g.implement.apply(void 0,[this].concat(d.call(arguments)));
lb(k);var p=k.U;k.notifyOnDestruction();p.ma=!0;Object.defineProperties(this,{U:{value:p}});yb(this);k=p.W;k=fb(e,k);V.hasOwnProperty(k)?Q("Tried to register registered instance: "+k):V[k]=this};f.__destruct=function(){this===f&&Q("Pass correct 'this' to __destruct");lb(this);var k=this.U.W;k=fb(e,k);V.hasOwnProperty(k)?delete V[k]:Q("Tried to unregister unregistered instance: "+k)};b.prototype=Object.create(f);for(var l in c)b.prototype[l]=c[l];return S(b)},I:function(b){var a=zb[b];delete zb[b];
var c=a.xa,d=a.ha,e=a.Ja,f=e.map(h=>h.kb).concat(e.map(h=>h.vb));W([b],f,h=>{var g={};e.forEach((l,k)=>{var p=h[k],r=l.ib,t=l.jb,v=h[k+e.length],q=l.ub,E=l.wb;g[l.eb]={read:I=>p.fromWireType(r(t,I)),write:(I,w)=>{var z=[];q(E,I,v.toWireType(z,w));Ab(z)}}});return[{name:a.name,fromWireType:function(l){var k={},p;for(p in g)k[p]=g[p].read(l);d(l);return k},toWireType:function(l,k){for(var p in g)if(!(p in k))throw new TypeError('Missing field:  "'+p+'"');var r=c();for(p in g)g[p].write(r,k[p]);null!==
l&&l.push(d,r);return r},argPackAdvance:8,readValueFromPointer:Bb,ba:d}]})},x:function(){},B:function(b,a,c,d,e){var f=Eb(c);a=T(a);Y(b,{name:a,fromWireType:function(h){return!!h},toWireType:function(h,g){return g?d:e},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var g=Aa;else if(2===c)g=Ba;else if(4===c)g=Da;else throw new TypeError("Unknown boolean type size: "+a);return this.fromWireType(g[h>>f])},ba:null})},c:function(b,a,c,d,e,f,h,g,l,k,p,r,t){p=T(p);f=Z(e,f);g&&(g=Z(h,g));k&&(k=
Z(l,k));t=Z(r,t);var v=Ua(p);Ib(v,function(){Tb("Cannot construct "+p+" due to unbound types",[d])});W([b,a,c],d?[d]:[],function(q){q=q[0];if(d){var E=q.V;var I=E.ea}else I=Gb.prototype;q=Va(v,function(){if(Object.getPrototypeOf(this)!==w)throw new Za("Use 'new' to construct "+p);if(void 0===z.ia)throw new Za(p+" has no accessible constructor");var P=z.ia[arguments.length];if(void 0===P)throw new Za("Tried to invoke ctor of "+p+" with invalid number of parameters ("+arguments.length+") - expected ("+
Object.keys(z.ia).toString()+") parameters instead!");return P.apply(this,arguments)});var w=Object.create(I,{constructor:{value:q}});q.prototype=w;var z=new Jb(p,q,w,t,E,f,g,k);E=new Pb(p,z,!0,!1);I=new Pb(p+"*",z,!1,!1);var J=new Pb(p+" const*",z,!1,!0);tb[b]={pointerType:I,Xa:J};Qb(v,q);return[E,I,J]})},h:function(b,a,c,d,e,f,h){var g=Vb(c,d);a=T(a);f=Z(e,f);W([],[b],function(l){function k(){Tb("Cannot call "+p+" due to unbound types",g)}l=l[0];var p=l.name+"."+a;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);
var r=l.V.constructor;void 0===r[a]?(k.ja=c-1,r[a]=k):(Hb(r,a,p),r[a].Y[c-1]=k);W([],g,function(t){t=Ub(p,[t[0],null].concat(t.slice(1)),null,f,h);void 0===r[a].Y?(t.ja=c-1,r[a]=t):r[a].Y[c-1]=t;return[]});return[]})},n:function(b,a,c,d,e,f,h,g){a=T(a);f=Z(e,f);W([],[b],function(l){l=l[0];var k=l.name+"."+a,p={get:function(){Tb("Cannot access "+k+" due to unbound types",[c])},enumerable:!0,configurable:!0};p.set=g?()=>{Tb("Cannot access "+k+" due to unbound types",[c])}:()=>{Q(k+" is a read-only property")};
Object.defineProperty(l.V.constructor,a,p);W([],[c],function(r){r=r[0];var t={get:function(){return r.fromWireType(f(d))},enumerable:!0};g&&(g=Z(h,g),t.set=v=>{var q=[];g(d,r.toWireType(q,v));Ab(q)});Object.defineProperty(l.V.constructor,a,t);return[]});return[]})},k:function(b,a,c,d,e,f){0<a||ua();var h=Vb(a,c);e=Z(d,e);W([],[b],function(g){g=g[0];var l="constructor "+g.name;void 0===g.V.ia&&(g.V.ia=[]);if(void 0!==g.V.ia[a-1])throw new Za("Cannot register multiple constructors with identical number of parameters ("+
(a-1)+") for class '"+g.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");g.V.ia[a-1]=()=>{Tb("Cannot construct "+g.name+" due to unbound types",h)};W([],h,function(k){k.splice(1,0,null);g.V.ia[a-1]=Ub(l,k,null,e,f);return[]});return[]})},a:function(b,a,c,d,e,f,h,g){var l=Vb(c,d);a=T(a);f=Z(e,f);W([],[b],function(k){function p(){Tb("Cannot call "+r+" due to unbound types",l)}k=k[0];var r=k.name+"."+a;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);
g&&k.V.Ma.push(a);var t=k.V.ea,v=t[a];void 0===v||void 0===v.Y&&v.className!==k.name&&v.ja===c-2?(p.ja=c-2,p.className=k.name,t[a]=p):(Hb(t,a,r),t[a].Y[c-2]=p);W([],l,function(q){q=Ub(r,q,k,f,h);void 0===t[a].Y?(q.ja=c-2,t[a]=q):t[a].Y[c-2]=q;return[]});return[]})},b:function(b,a,c,d,e,f,h,g,l,k){a=T(a);e=Z(d,e);W([],[b],function(p){p=p[0];var r=p.name+"."+a,t={get:function(){Tb("Cannot access "+r+" due to unbound types",[c,h])},enumerable:!0,configurable:!0};t.set=l?()=>{Tb("Cannot access "+r+" due to unbound types",
[c,h])}:()=>{Q(r+" is a read-only property")};Object.defineProperty(p.V.ea,a,t);W([],l?[c,h]:[c],function(v){var q=v[0],E={get:function(){var w=Wb(this,p,r+" getter");return q.fromWireType(e(f,w))},enumerable:!0};if(l){l=Z(g,l);var I=v[1];E.set=function(w){var z=Wb(this,p,r+" setter"),J=[];l(k,z,I.toWireType(J,w));Ab(J)}}Object.defineProperty(p.V.ea,a,E);return[]});return[]})},A:function(b,a){a=T(a);Y(b,{name:a,fromWireType:function(c){var d=$a(c);Xb(c);return d},toWireType:function(c,d){return S(d)},
argPackAdvance:8,readValueFromPointer:Bb,ba:null})},j:function(b,a,c,d){function e(){}c=Eb(c);a=T(a);e.values={};Y(b,{name:a,constructor:e,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,h){return h.value},argPackAdvance:8,readValueFromPointer:Zb(a,c,d),ba:null});Ib(a,e)},i:function(b,a,c){var d=kb(b,"enum");a=T(a);b=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Va(d.name+"_"+a,function(){})}});b.values[c]=d;b[a]=d},r:function(b,
a,c){c=Eb(c);a=T(a);Y(b,{name:a,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:$b(a,c),ba:null})},q:function(b,a,c,d,e,f){var h=Vb(a,c);b=T(b);e=Z(d,e);Ib(b,function(){Tb("Cannot call "+b+" due to unbound types",h)},a-1);W([],h,function(g){Qb(b,Ub(b,[g[0],null].concat(g.slice(1)),null,e,f),a-1);return[]})},g:function(b,a,c,d,e){a=T(a);-1===e&&(e=4294967295);e=Eb(c);var f=g=>g;if(0===d){var h=32-8*c;f=g=>g<<h>>>h}c=a.includes("unsigned")?
function(g,l){return l>>>0}:function(g,l){return l};Y(b,{name:a,fromWireType:f,toWireType:c,argPackAdvance:8,readValueFromPointer:ac(a,e,0!==d),ba:null})},d:function(b,a,c){function d(f){f>>=2;var h=M;return new e(za,h[f+1],h[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][a];c=T(c);Y(b,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{lb:!0})},s:function(b,a){a=T(a);var c="std::string"===a;Y(b,{name:a,fromWireType:function(d){var e=
M[d>>2],f=d+4;if(c)for(var h=f,g=0;g<=e;++g){var l=f+g;if(g==e||0==H[l]){h=h?ya(H,h,l-h):"";if(void 0===k)var k=h;else k+=String.fromCharCode(0),k+=h;h=l+1}}else{k=Array(e);for(g=0;g<e;++g)k[g]=String.fromCharCode(H[f+g]);k=k.join("")}jb(d);return k},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f,h="string"==typeof e;h||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||Q("Cannot pass non-string to std::string");var g;if(c&&h)for(f=g=0;f<
e.length;++f){var l=e.charCodeAt(f);127>=l?g++:2047>=l?g+=2:55296<=l&&57343>=l?(g+=4,++f):g+=3}else g=e.length;f=g;g=rc(4+f+1);l=g+4;M[g>>2]=f;if(c&&h){if(h=l,l=f+1,f=H,0<l){l=h+l-1;for(var k=0;k<e.length;++k){var p=e.charCodeAt(k);if(55296<=p&&57343>=p){var r=e.charCodeAt(++k);p=65536+((p&1023)<<10)|r&1023}if(127>=p){if(h>=l)break;f[h++]=p}else{if(2047>=p){if(h+1>=l)break;f[h++]=192|p>>6}else{if(65535>=p){if(h+2>=l)break;f[h++]=224|p>>12}else{if(h+3>=l)break;f[h++]=240|p>>18;f[h++]=128|p>>12&63}f[h++]=
128|p>>6&63}f[h++]=128|p&63}}f[h]=0}}else if(h)for(h=0;h<f;++h)k=e.charCodeAt(h),255<k&&(jb(l),Q("String has UTF-16 code units that do not fit in 8 bits")),H[l+h]=k;else for(h=0;h<f;++h)H[l+h]=e[h];null!==d&&d.push(jb,g);return g},argPackAdvance:8,readValueFromPointer:Bb,ba:function(d){jb(d)}})},p:function(b,a,c){c=T(c);if(2===a){var d=cc;var e=dc;var f=ec;var h=()=>Ca;var g=1}else 4===a&&(d=fc,e=gc,f=hc,h=()=>M,g=2);Y(b,{name:c,fromWireType:function(l){for(var k=M[l>>2],p=h(),r,t=l+4,v=0;v<=k;++v){var q=
l+4+v*a;if(v==k||0==p[q>>g])t=d(t,q-t),void 0===r?r=t:(r+=String.fromCharCode(0),r+=t),t=q+a}jb(l);return r},toWireType:function(l,k){"string"!=typeof k&&Q("Cannot pass non-string to C++ string type "+c);var p=f(k),r=rc(4+p+a);M[r>>2]=p>>g;e(k,r+4,p+a);null!==l&&l.push(jb,r);return r},argPackAdvance:8,readValueFromPointer:Bb,ba:function(l){jb(l)}})},K:function(b,a,c,d,e,f){zb[b]={name:T(a),xa:Z(c,d),ha:Z(e,f),Ja:[]}},J:function(b,a,c,d,e,f,h,g,l,k){zb[b].Ja.push({eb:T(a),kb:c,ib:Z(d,e),jb:f,vb:h,
ub:Z(g,l),wb:k})},C:function(b,a){a=T(a);Y(b,{nb:!0,name:a,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:function(b,a,c){b=$a(b);a=kb(a,"emval::as");var d=[],e=S(d);M[c>>2]=e;return a.toWireType(d,b)},t:function(b,a,c,d,e){b=kc[b];a=$a(a);c=jc(c);var f=[];M[d>>2]=S(f);return b(a,c,f,e)},f:function(b,a,c,d){b=kc[b];a=$a(a);c=jc(c);b(a,c,null,d)},L:Xb,e:function(b,a){var c=mc(b,a),d=c[0];a=d.name+"_$"+c.slice(1).map(function(h){return h.name}).join("_")+"$";var e=nc[a];if(void 0!==
e)return e;var f=Array(b-1);e=lc((h,g,l,k)=>{for(var p=0,r=0;r<b-1;++r)f[r]=c[r+1].readValueFromPointer(k+p),p+=c[r+1].argPackAdvance;h=h[g].apply(h,f);for(r=0;r<b-1;++r)c[r+1].Za&&c[r+1].Za(f[r]);if(!d.nb)return d.toWireType(l,h)});return nc[a]=e},D:function(b){b=jc(b);return S(m[b])},H:function(b,a){b=$a(b);a=$a(a);return S(b[a])},E:function(b){4<b&&(O[b].ya+=1)},G:function(b){return S(jc(b))},F:function(b){var a=$a(b);Ab(a);Xb(b)},u:function(b,a){b=kb(b,"_emval_take_value");b=b.readValueFromPointer(a);
return S(b)},v:function(){ua("")},o:function(b){var a=H.length;b>>>=0;if(2147483648<b)return!1;for(var c=1;4>=c;c*=2){var d=a*(1+.2/c);d=Math.min(d,b+100663296);var e=Math;d=Math.max(b,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{va.grow(e-za.byteLength+65535>>>16);Ga();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},z:function(){return 52},w:function(){return 70},y:function(b,a,c,d){for(var e=0,f=0;f<c;f++){var h=M[a>>2],g=M[a+4>>2];a+=8;for(var l=0;l<g;l++){var k=H[h+
l],p=oc[b];0===k||10===k?((1===b?pa:qa)(ya(p,0)),p.length=0):p.push(k)}e+=g}M[d>>2]=e;return 0}};
(function(){function b(e){m.asm=e.exports;va=m.asm.M;Ga();Ha=m.asm.S;Ja.unshift(m.asm.N);Ma--;m.monitorRunDependencies&&m.monitorRunDependencies(Ma);0==Ma&&(null!==Na&&(clearInterval(Na),Na=null),Oa&&(e=Oa,Oa=null,e()))}function a(e){b(e.instance)}function c(e){return Sa().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){qa("failed to asynchronously prepare wasm: "+f);ua(f)})}var d={a:sc};Ma++;m.monitorRunDependencies&&m.monitorRunDependencies(Ma);
if(m.instantiateWasm)try{return m.instantiateWasm(d,b)}catch(e){return qa("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return ra||"function"!=typeof WebAssembly.instantiateStreaming||Pa()||N.startsWith("file://")||"function"!=typeof fetch?c(a):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(a,function(f){qa("wasm streaming compile failed: "+f);qa("falling back to ArrayBuffer instantiation");return c(a)})})})().catch(ba);
return{}})();m.___wasm_call_ctors=function(){return(m.___wasm_call_ctors=m.asm.N).apply(null,arguments)};var jb=m._free=function(){return(jb=m._free=m.asm.O).apply(null,arguments)},rc=m._malloc=function(){return(rc=m._malloc=m.asm.P).apply(null,arguments)},ib=m.___getTypeName=function(){return(ib=m.___getTypeName=m.asm.Q).apply(null,arguments)};m.__embind_initialize_bindings=function(){return(m.__embind_initialize_bindings=m.asm.R).apply(null,arguments)};
m.dynCall_jiji=function(){return(m.dynCall_jiji=m.asm.T).apply(null,arguments)};var tc;Oa=function uc(){tc||vc();tc||(Oa=uc)};
function vc(){function b(){if(!tc&&(tc=!0,m.calledRun=!0,!wa)){Ta(Ja);aa(m);if(m.onRuntimeInitialized)m.onRuntimeInitialized();if(m.postRun)for("function"==typeof m.postRun&&(m.postRun=[m.postRun]);m.postRun.length;){var a=m.postRun.shift();Ka.unshift(a)}Ta(Ka)}}if(!(0<Ma)){if(m.preRun)for("function"==typeof m.preRun&&(m.preRun=[m.preRun]);m.preRun.length;)La();Ta(Ia);0<Ma||(m.setStatus?(m.setStatus("Running..."),setTimeout(function(){setTimeout(function(){m.setStatus("")},1);b()},1)):b())}}
if(m.preInit)for("function"==typeof m.preInit&&(m.preInit=[m.preInit]);0<m.preInit.length;)m.preInit.pop()();vc();


  return Rive.ready
}
);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rive);

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@rive-app/canvas","version":"1.0.98","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerTouchInteractions": () => (/* reexport safe */ _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions)
/* harmony export */ });
/* harmony import */ var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerTouchInteractions": () => (/* binding */ registerTouchInteractions)
/* harmony export */ });
/**
 * Registers mouse move/up/down callback handlers on the canvas to send meaningful coordinates to
 * the state machine pointer move/up/down functions based on cursor interaction
 */
const registerTouchInteractions = ({
  canvas,
  artboard,
  stateMachines = [],
  renderer,
  rive,
  fit,
  alignment,
}) => {
  if (!canvas || !stateMachines.length || !renderer || !rive || !artboard) {
    return null;
  }

  const mouseCallback = (event) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();

    const canvasX = event.clientX - boundingRect.left;
    const canvasY = event.clientY - boundingRect.top;
    const forwardMatrix = rive.computeAlignment(
      fit,
      alignment,
      {
        minX: 0,
        minY: 0,
        maxX: boundingRect.width,
        maxY: boundingRect.height,
      },
      artboard.bounds
    );
    let invertedMatrix = new rive.Mat2D();
    forwardMatrix.invert(invertedMatrix);
    const canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
    const transformedVector = rive.mapXY(
      invertedMatrix,
      canvasCoordinatesVector
    );
    const transformedX = transformedVector.x();
    const transformedY = transformedVector.y();

    transformedVector.delete();
    invertedMatrix.delete();
    canvasCoordinatesVector.delete();
    forwardMatrix.delete();

    switch (event.type) {
      // Pointer moving/hovering on the canvas
      case "mouseover":
      case "mouseout":
      case "mousemove": {
        for (const stateMachine of stateMachines) {
          stateMachine.pointerMove(transformedX, transformedY);
        }
        break;
      }
      // Pointer click initiated but not released yet on the canvas
      case "mousedown": {
        for (const stateMachine of stateMachines) {
          stateMachine.pointerDown(transformedX, transformedY);
        }
        break;
      }
      // Pointer click released on the canvas
      case "mouseup": {
        for (const stateMachine of stateMachines) {
          stateMachine.pointerUp(transformedX, transformedY);
        }
        break;
      }
      default:
    }
  };
  const callback = mouseCallback.bind(undefined);
  canvas.addEventListener("mouseover", callback);
  canvas.addEventListener("mouseout", callback);
  canvas.addEventListener("mousemove", callback);
  canvas.addEventListener("mousedown", callback);
  canvas.addEventListener("mouseup", callback);
  return () => {
    canvas.removeEventListener("mouseover", callback);
    canvas.removeEventListener("mouseout", callback);
    canvas.removeEventListener("mousemove", callback);
    canvas.removeEventListener("mousedown", callback);
    canvas.removeEventListener("mouseup", callback);
  };
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fit": () => (/* binding */ Fit),
/* harmony export */   "Alignment": () => (/* binding */ Alignment),
/* harmony export */   "Layout": () => (/* binding */ Layout),
/* harmony export */   "RuntimeLoader": () => (/* binding */ RuntimeLoader),
/* harmony export */   "StateMachineInputType": () => (/* binding */ StateMachineInputType),
/* harmony export */   "StateMachineInput": () => (/* binding */ StateMachineInput),
/* harmony export */   "EventType": () => (/* binding */ EventType),
/* harmony export */   "LoopType": () => (/* binding */ LoopType),
/* harmony export */   "Rive": () => (/* binding */ Rive),
/* harmony export */   "Testing": () => (/* binding */ Testing)
/* harmony export */ });
/* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// #region layout
// Fit options for the canvas
var Fit;
(function (Fit) {
    Fit["Cover"] = "cover";
    Fit["Contain"] = "contain";
    Fit["Fill"] = "fill";
    Fit["FitWidth"] = "fitWidth";
    Fit["FitHeight"] = "fitHeight";
    Fit["None"] = "none";
    Fit["ScaleDown"] = "scaleDown";
})(Fit || (Fit = {}));
// Alignment options for the canvas
var Alignment;
(function (Alignment) {
    Alignment["Center"] = "center";
    Alignment["TopLeft"] = "topLeft";
    Alignment["TopCenter"] = "topCenter";
    Alignment["TopRight"] = "topRight";
    Alignment["CenterLeft"] = "centerLeft";
    Alignment["CenterRight"] = "centerRight";
    Alignment["BottomLeft"] = "bottomLeft";
    Alignment["BottomCenter"] = "bottomCenter";
    Alignment["BottomRight"] = "bottomRight";
})(Alignment || (Alignment = {}));
// Alignment options for Rive animations in a HTML canvas
var Layout = /** @class */ (function () {
    function Layout(params) {
        var _a, _b, _c, _d, _e, _f;
        this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
        this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
        this.minX = (_c = params === null || params === void 0 ? void 0 : params.minX) !== null && _c !== void 0 ? _c : 0;
        this.minY = (_d = params === null || params === void 0 ? void 0 : params.minY) !== null && _d !== void 0 ? _d : 0;
        this.maxX = (_e = params === null || params === void 0 ? void 0 : params.maxX) !== null && _e !== void 0 ? _e : 0;
        this.maxY = (_f = params === null || params === void 0 ? void 0 : params.maxY) !== null && _f !== void 0 ? _f : 0;
    }
    // Alternative constructor to build a Layout from an interface/object
    Layout.new = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        console.warn("This function is deprecated: please use `new Layout({})` instead");
        return new Layout({ fit: fit, alignment: alignment, minX: minX, minY: minY, maxX: maxX, maxY: maxY });
    };
    /**
     * Makes a copy of the layout, replacing any specified parameters
     */
    Layout.prototype.copyWith = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        return new Layout({
            fit: fit !== null && fit !== void 0 ? fit : this.fit,
            alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
            minX: minX !== null && minX !== void 0 ? minX : this.minX,
            minY: minY !== null && minY !== void 0 ? minY : this.minY,
            maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
            maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY,
        });
    };
    // Returns fit for the Wasm runtime format
    Layout.prototype.runtimeFit = function (rive) {
        if (this.cachedRuntimeFit)
            return this.cachedRuntimeFit;
        var fit;
        if (this.fit === Fit.Cover)
            fit = rive.Fit.cover;
        else if (this.fit === Fit.Contain)
            fit = rive.Fit.contain;
        else if (this.fit === Fit.Fill)
            fit = rive.Fit.fill;
        else if (this.fit === Fit.FitWidth)
            fit = rive.Fit.fitWidth;
        else if (this.fit === Fit.FitHeight)
            fit = rive.Fit.fitHeight;
        else if (this.fit === Fit.ScaleDown)
            fit = rive.Fit.scaleDown;
        else
            fit = rive.Fit.none;
        this.cachedRuntimeFit = fit;
        return fit;
    };
    // Returns alignment for the Wasm runtime format
    Layout.prototype.runtimeAlignment = function (rive) {
        if (this.cachedRuntimeAlignment)
            return this.cachedRuntimeAlignment;
        var alignment;
        if (this.alignment === Alignment.TopLeft)
            alignment = rive.Alignment.topLeft;
        else if (this.alignment === Alignment.TopCenter)
            alignment = rive.Alignment.topCenter;
        else if (this.alignment === Alignment.TopRight)
            alignment = rive.Alignment.topRight;
        else if (this.alignment === Alignment.CenterLeft)
            alignment = rive.Alignment.centerLeft;
        else if (this.alignment === Alignment.CenterRight)
            alignment = rive.Alignment.centerRight;
        else if (this.alignment === Alignment.BottomLeft)
            alignment = rive.Alignment.bottomLeft;
        else if (this.alignment === Alignment.BottomCenter)
            alignment = rive.Alignment.bottomCenter;
        else if (this.alignment === Alignment.BottomRight)
            alignment = rive.Alignment.bottomRight;
        else
            alignment = rive.Alignment.center;
        this.cachedRuntimeAlignment = alignment;
        return alignment;
    };
    return Layout;
}());

// Runtime singleton; use getInstance to provide a callback that returns the
// Rive runtime
var RuntimeLoader = /** @class */ (function () {
    // Class is never instantiated
    function RuntimeLoader() {
    }
    // Loads the runtime
    RuntimeLoader.loadRuntime = function () {
        _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__.default({
            // Loads Wasm bundle
            locateFile: function () { return RuntimeLoader.wasmURL; },
        }).then(function (rive) {
            var _a;
            RuntimeLoader.runtime = rive;
            // Fire all the callbacks
            while (RuntimeLoader.callBackQueue.length > 0) {
                (_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader.runtime);
            }
        });
    };
    // Provides a runtime instance via a callback
    RuntimeLoader.getInstance = function (callback) {
        // If it's not loading, start loading runtime
        if (!RuntimeLoader.isLoading) {
            RuntimeLoader.isLoading = true;
            RuntimeLoader.loadRuntime();
        }
        if (!RuntimeLoader.runtime) {
            RuntimeLoader.callBackQueue.push(callback);
        }
        else {
            callback(RuntimeLoader.runtime);
        }
    };
    // Provides a runtime instance via a promise
    RuntimeLoader.awaitInstance = function () {
        return new Promise(function (resolve) {
            return RuntimeLoader.getInstance(function (rive) { return resolve(rive); });
        });
    };
    // Manually sets the wasm url
    RuntimeLoader.setWasmUrl = function (url) {
        RuntimeLoader.wasmURL = url;
    };
    // Flag to indicate that loading has started/completed
    RuntimeLoader.isLoading = false;
    // List of callbacks for the runtime that come in while loading
    RuntimeLoader.callBackQueue = [];
    // Path to the Wasm file; default path works for testing only;
    // if embedded wasm is used then this is never used.
    RuntimeLoader.wasmURL = "https://unpkg.com/" + package_json__WEBPACK_IMPORTED_MODULE_1__.name + "@" + package_json__WEBPACK_IMPORTED_MODULE_1__.version + "/rive.wasm";
    return RuntimeLoader;
}());

// #endregion
// #region animations
// Wraps animations and instances from the runtime and keeps track of playback
// state
var Animation = /** @class */ (function () {
    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */
    function Animation(animation, artboard, runtime, playing) {
        this.animation = animation;
        this.artboard = artboard;
        this.playing = playing;
        this.loopCount = 0;
        // Time to which the animation should move to on the next render
        this.scrubTo = null;
        this.instance = new runtime.LinearAnimationInstance(animation, artboard);
    }
    Object.defineProperty(Animation.prototype, "name", {
        // Returns the animation's name
        get: function () {
            return this.animation.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "time", {
        // Returns the animation's current time
        get: function () {
            return this.instance.time;
        },
        // Sets the animation's current time
        set: function (value) {
            this.instance.time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "loopValue", {
        // Returns the animation's loop type
        get: function () {
            return this.animation.loopValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */
    Animation.prototype.advance = function (time) {
        if (this.scrubTo === null) {
            this.instance.advance(time);
        }
        else {
            this.instance.time = 0;
            this.instance.advance(this.scrubTo);
            this.scrubTo = null;
        }
    };
    /**
     * Apply interpolated keyframe values to the artboard. This should be called after calling
     * .advance() on an animation instance so that new values are applied to properties.
     *
     * Note: This does not advance the artboard, which updates all objects on the artboard
     * @param mix - Mix value for the animation from 0 to 1
     */
    Animation.prototype.apply = function (mix) {
        this.instance.apply(mix);
    };
    Object.defineProperty(Animation.prototype, "needsScrub", {
        get: function () {
            return this.scrubTo !== null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */
    Animation.prototype.cleanup = function () {
        this.instance.delete();
    };
    return Animation;
}());
// #endregion
// #region state machines
var StateMachineInputType;
(function (StateMachineInputType) {
    StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
    StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
    StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
})(StateMachineInputType || (StateMachineInputType = {}));
/**
 * An input for a state machine
 */
var StateMachineInput = /** @class */ (function () {
    function StateMachineInput(type, runtimeInput) {
        this.type = type;
        this.runtimeInput = runtimeInput;
    }
    Object.defineProperty(StateMachineInput.prototype, "name", {
        /**
         * Returns the name of the input
         */
        get: function () {
            return this.runtimeInput.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachineInput.prototype, "value", {
        /**
         * Returns the current value of the input
         */
        get: function () {
            return this.runtimeInput.value;
        },
        /**
         * Sets the value of the input
         */
        set: function (value) {
            this.runtimeInput.value = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */
    StateMachineInput.prototype.fire = function () {
        if (this.type === StateMachineInputType.Trigger) {
            this.runtimeInput.fire();
        }
    };
    return StateMachineInput;
}());

var StateMachine = /** @class */ (function () {
    /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */
    function StateMachine(stateMachine, runtime, playing, artboard) {
        this.stateMachine = stateMachine;
        this.playing = playing;
        this.artboard = artboard;
        /**
         * Caches the inputs from the runtime
         */
        this.inputs = [];
        this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
        this.initInputs(runtime);
    }
    Object.defineProperty(StateMachine.prototype, "name", {
        get: function () {
            return this.stateMachine.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachine.prototype, "statesChanged", {
        /**
         * Returns a list of state names that have changed on this frame
         */
        get: function () {
            var names = [];
            for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                names.push(this.instance.stateChangedNameByIndex(i));
            }
            return names;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the state machine instance by a given time.
     * @param time - the time to advance the animation by in seconds
     */
    StateMachine.prototype.advance = function (time) {
        this.instance.advance(time);
    };
    /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */
    StateMachine.prototype.initInputs = function (runtime) {
        // Fetch the inputs from the runtime if we don't have them
        for (var i = 0; i < this.instance.inputCount(); i++) {
            var input = this.instance.input(i);
            this.inputs.push(this.mapRuntimeInput(input, runtime));
        }
    };
    /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */
    StateMachine.prototype.mapRuntimeInput = function (input, runtime) {
        if (input.type === runtime.SMIInput.bool) {
            return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
        }
        else if (input.type === runtime.SMIInput.number) {
            return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
        }
        else if (input.type === runtime.SMIInput.trigger) {
            return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
        }
    };
    /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */
    StateMachine.prototype.cleanup = function () {
        this.instance.delete();
    };
    return StateMachine;
}());
// #endregion
// #region animator
/**
 * Manages animation
 */
var Animator = /** @class */ (function () {
    /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */
    function Animator(runtime, artboard, eventManager, animations, stateMachines) {
        if (animations === void 0) { animations = []; }
        if (stateMachines === void 0) { stateMachines = []; }
        this.runtime = runtime;
        this.artboard = artboard;
        this.eventManager = eventManager;
        this.animations = animations;
        this.stateMachines = stateMachines;
    }
    /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */
    Animator.prototype.add = function (animatables, playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        animatables = mapToStringArray(animatables);
        // If animatables is empty, play or pause everything
        if (animatables.length === 0) {
            this.animations.forEach(function (a) { return (a.playing = playing); });
            this.stateMachines.forEach(function (m) { return (m.playing = playing); });
        }
        else {
            // Play/pause already instanced items, or create new instances
            var instancedAnimationNames = this.animations.map(function (a) { return a.name; });
            var instancedMachineNames = this.stateMachines.map(function (m) { return m.name; });
            for (var i in animatables) {
                var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                var mIndex = instancedMachineNames.indexOf(animatables[i]);
                if (aIndex >= 0 || mIndex >= 0) {
                    if (aIndex >= 0) {
                        // Animation is instanced, play/pause it
                        this.animations[aIndex].playing = playing;
                    }
                    else {
                        // State machine is instanced, play/pause it
                        this.stateMachines[mIndex].playing = playing;
                    }
                }
                else {
                    // Try to create a new animation instance
                    var anim = this.artboard.animationByName(animatables[i]);
                    if (anim) {
                        var newAnimation = new Animation(anim, this.artboard, this.runtime, playing);
                        // Display the first frame of the specified animation
                        newAnimation.advance(0);
                        newAnimation.apply(1.0);
                        this.animations.push(newAnimation);
                    }
                    else {
                        // Try to create a new state machine instance
                        var sm = this.artboard.stateMachineByName(animatables[i]);
                        if (sm) {
                            var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                            this.stateMachines.push(newStateMachine);
                        }
                    }
                }
            }
        }
        // Fire play/paused events for animations
        if (fireEvent) {
            if (playing) {
                this.eventManager.fire({
                    type: EventType.Play,
                    data: this.playing,
                });
            }
            else {
                this.eventManager.fire({
                    type: EventType.Pause,
                    data: this.paused,
                });
            }
        }
        return playing ? this.playing : this.paused;
    };
    /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */
    Animator.prototype.play = function (animatables) {
        return this.add(animatables, true);
    };
    /**
     * Pauses named animations and state machines, or everything if nothing is
     * specified
     * @param animatables names of the animations and state machines to pause
     * @returns a list of names of the animations and state machines paused
     */
    Animator.prototype.pause = function (animatables) {
        return this.add(animatables, false);
    };
    /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */
    Animator.prototype.scrub = function (animatables, value) {
        var forScrubbing = this.animations.filter(function (a) {
            return animatables.includes(a.name);
        });
        forScrubbing.forEach(function (a) { return (a.scrubTo = value); });
        return forScrubbing.map(function (a) { return a.name; });
    };
    Object.defineProperty(Animator.prototype, "playing", {
        /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */
        get: function () {
            return this.animations
                .filter(function (a) { return a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "paused", {
        /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */
        get: function () {
            return this.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return !m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */
    Animator.prototype.stop = function (animatables) {
        var _this = this;
        animatables = mapToStringArray(animatables);
        // If nothing's specified, wipe them out, all of them
        var removedNames = [];
        // Stop everything
        if (animatables.length === 0) {
            removedNames = this.animations
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.map(function (m) { return m.name; }));
            // Clean up before emptying the arrays
            this.animations.forEach(function (a) { return a.cleanup(); });
            this.stateMachines.forEach(function (m) { return m.cleanup(); });
            // Empty out the arrays
            this.animations.splice(0, this.animations.length);
            this.stateMachines.splice(0, this.stateMachines.length);
        }
        else {
            // Remove only the named animations/state machines
            var animationsToRemove = this.animations.filter(function (a) {
                return animatables.includes(a.name);
            });
            animationsToRemove.forEach(function (a) {
                a.cleanup();
                _this.animations.splice(_this.animations.indexOf(a), 1);
            });
            var machinesToRemove = this.stateMachines.filter(function (m) {
                return animatables.includes(m.name);
            });
            machinesToRemove.forEach(function (m) {
                m.cleanup();
                _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
            });
            removedNames = animationsToRemove
                .map(function (a) { return a.name; })
                .concat(machinesToRemove.map(function (m) { return m.name; }));
        }
        this.eventManager.fire({
            type: EventType.Stop,
            data: removedNames,
        });
        // Return the list of animations removed
        return removedNames;
    };
    Object.defineProperty(Animator.prototype, "isPlaying", {
        /**
         * Returns true if at least one animation is active
         */
        get: function () {
            return (this.animations.reduce(function (acc, curr) { return acc || curr.playing; }, false) ||
                this.stateMachines.reduce(function (acc, curr) { return acc || curr.playing; }, false));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isPaused", {
        /**
         * Returns true if all animations are paused and there's at least one animation
         */
        get: function () {
            return (!this.isPlaying &&
                (this.animations.length > 0 || this.stateMachines.length > 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isStopped", {
        /**
         * Returns true if there are no playing or paused animations/state machines
         */
        get: function () {
            return this.animations.length === 0 && this.stateMachines.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */
    Animator.prototype.atLeastOne = function (playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        var instancedName;
        if (this.animations.length === 0 && this.stateMachines.length === 0) {
            if (this.artboard.animationCount() > 0) {
                // Add the first animation
                this.add([(instancedName = this.artboard.animationByIndex(0).name)], playing, fireEvent);
            }
            else if (this.artboard.stateMachineCount() > 0) {
                // Add the first state machine
                this.add([(instancedName = this.artboard.stateMachineByIndex(0).name)], playing, fireEvent);
            }
        }
        return instancedName;
    };
    /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */
    Animator.prototype.handleLooping = function () {
        for (var _i = 0, _a = this.animations.filter(function (a) { return a.playing; }); _i < _a.length; _i++) {
            var animation = _a[_i];
            // Emit if the animation looped
            if (animation.loopValue === 0 && animation.loopCount) {
                animation.loopCount = 0;
                // This is a one-shot; if it has ended, delete the instance
                this.stop(animation.name);
            }
            else if (animation.loopValue === 1 && animation.loopCount) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.Loop },
                });
                animation.loopCount = 0;
            }
            // Wasm indicates a loop at each time the animation
            // changes direction, so a full loop/lap occurs every
            // two loop counts
            else if (animation.loopValue === 2 && animation.loopCount > 1) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.PingPong },
                });
                animation.loopCount = 0;
            }
        }
    };
    /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */
    Animator.prototype.handleStateChanges = function () {
        var statesChanged = [];
        for (var _i = 0, _a = this.stateMachines.filter(function (sm) { return sm.playing; }); _i < _a.length; _i++) {
            var stateMachine = _a[_i];
            statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
        }
        if (statesChanged.length > 0) {
            this.eventManager.fire({
                type: EventType.StateChange,
                data: statesChanged,
            });
        }
    };
    return Animator;
}());
// #endregion
// #region events
/**
 * Supported event types triggered in Rive
 */
var EventType;
(function (EventType) {
    EventType["Load"] = "load";
    EventType["LoadError"] = "loaderror";
    EventType["Play"] = "play";
    EventType["Pause"] = "pause";
    EventType["Stop"] = "stop";
    EventType["Loop"] = "loop";
    EventType["Draw"] = "draw";
    EventType["StateChange"] = "statechange";
})(EventType || (EventType = {}));
/**
 * Looping types: one-shot, loop, and ping-pong
 */
var LoopType;
(function (LoopType) {
    LoopType["OneShot"] = "oneshot";
    LoopType["Loop"] = "loop";
    LoopType["PingPong"] = "pingpong";
})(LoopType || (LoopType = {}));
// Manages Rive events and listeners
var EventManager = /** @class */ (function () {
    function EventManager(listeners) {
        if (listeners === void 0) { listeners = []; }
        this.listeners = listeners;
    }
    // Gets listeners of specified type
    EventManager.prototype.getListeners = function (type) {
        return this.listeners.filter(function (e) { return e.type === type; });
    };
    // Adds a listener
    EventManager.prototype.add = function (listener) {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener);
        }
    };
    /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */
    EventManager.prototype.remove = function (listener) {
        // We can't simply look for the listener as it'll be a different instance to
        // one originally subscribed. Find all the listeners of the right type and
        // then check their callbacks which should match.
        for (var i = 0; i < this.listeners.length; i++) {
            var currentListener = this.listeners[i];
            if (currentListener.type === listener.type) {
                if (currentListener.callback === listener.callback) {
                    this.listeners.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */
    EventManager.prototype.removeAll = function (type) {
        var _this = this;
        if (!type) {
            this.listeners.splice(0, this.listeners.length);
        }
        else {
            this.listeners
                .filter(function (l) { return l.type === type; })
                .forEach(function (l) { return _this.remove(l); });
        }
    };
    // Fires an event
    EventManager.prototype.fire = function (event) {
        var eventListeners = this.getListeners(event.type);
        eventListeners.forEach(function (listener) { return listener.callback(event); });
    };
    return EventManager;
}());
// Manages a queue of tasks
var TaskQueueManager = /** @class */ (function () {
    function TaskQueueManager(eventManager) {
        this.eventManager = eventManager;
        this.queue = [];
    }
    // Adds a task top the queue
    TaskQueueManager.prototype.add = function (task) {
        this.queue.push(task);
    };
    // Processes all tasks in the queue
    TaskQueueManager.prototype.process = function () {
        while (this.queue.length > 0) {
            var task = this.queue.shift();
            if (task === null || task === void 0 ? void 0 : task.action) {
                task.action();
            }
            if (task === null || task === void 0 ? void 0 : task.event) {
                this.eventManager.fire(task.event);
            }
        }
    };
    return TaskQueueManager;
}());
var Rive = /** @class */ (function () {
    function Rive(params) {
        var _a;
        // Flag to indicate if the layout has changed; used by the renderer to know
        // when to align
        this._updateLayout = true;
        /**
         * Flag to active/deactivate renderer
         */
        this.isRendererActive = true;
        // Tracks if a Rive file is loaded
        this.loaded = false;
        /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */
        this.readyForPlaying = false;
        // Runtime artboard
        this.artboard = null;
        // place to clear up event listeners
        this.eventCleanup = null;
        // Durations to generate a frame for the last second. Used for performance profiling.
        this.durations = [];
        this.frameTimes = [];
        this.frameCount = 0;
        /**
         * Used be draw to track when a second of active rendering time has passed.
         * Used for debugging purposes
         */
        this.renderSecondTimer = 0;
        this.canvas = params.canvas;
        this.src = params.src;
        this.buffer = params.buffer;
        this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
        // New event management system
        this.eventManager = new EventManager();
        if (params.onLoad)
            this.on(EventType.Load, params.onLoad);
        if (params.onLoadError)
            this.on(EventType.LoadError, params.onLoadError);
        if (params.onPlay)
            this.on(EventType.Play, params.onPlay);
        if (params.onPause)
            this.on(EventType.Pause, params.onPause);
        if (params.onStop)
            this.on(EventType.Stop, params.onStop);
        if (params.onLoop)
            this.on(EventType.Loop, params.onLoop);
        if (params.onStateChange)
            this.on(EventType.StateChange, params.onStateChange);
        /**
         * @deprecated Use camelCase'd versions instead.
         */
        if (params.onload && !params.onLoad)
            this.on(EventType.Load, params.onload);
        if (params.onloaderror && !params.onLoadError)
            this.on(EventType.LoadError, params.onloaderror);
        if (params.onplay && !params.onPlay)
            this.on(EventType.Play, params.onplay);
        if (params.onpause && !params.onPause)
            this.on(EventType.Pause, params.onpause);
        if (params.onstop && !params.onStop)
            this.on(EventType.Stop, params.onstop);
        if (params.onloop && !params.onLoop)
            this.on(EventType.Loop, params.onloop);
        if (params.onstatechange && !params.onStateChange)
            this.on(EventType.StateChange, params.onstatechange);
        // Hook up the task queue
        this.taskQueue = new TaskQueueManager(this.eventManager);
        this.init({
            src: this.src,
            buffer: this.buffer,
            autoplay: params.autoplay,
            animations: params.animations,
            stateMachines: params.stateMachines,
            artboard: params.artboard,
            useOffscreenRenderer: params.useOffscreenRenderer,
        });
    }
    // Alternative constructor to build a Rive instance from an interface/object
    Rive.new = function (params) {
        console.warn("This function is deprecated: please use `new Rive({})` instead");
        return new Rive(params);
    };
    // Initializes the Rive object either from constructor or load()
    Rive.prototype.init = function (_a) {
        var _this = this;
        var src = _a.src, buffer = _a.buffer, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
        this.src = src;
        this.buffer = buffer;
        // If no source file url specified, it's a bust
        if (!this.src && !this.buffer) {
            throw new Error(Rive.missingErrorMessage);
        }
        // List of animations that should be initialized.
        var startingAnimationNames = mapToStringArray(animations);
        // List of state machines that should be initialized
        var startingStateMachineNames = mapToStringArray(stateMachines);
        // Ensure loaded is marked as false if loading new file
        this.loaded = false;
        this.readyForPlaying = false;
        // Ensure the runtime is loaded
        RuntimeLoader.awaitInstance()
            .then(function (runtime) {
            _this.runtime = runtime;
            // Get the canvas where you want to render the animation and create a renderer
            _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
            // Initial size adjustment based on devicePixelRatio if no width/height are
            // specified explicitly
            if (!(_this.canvas.width || _this.canvas.height)) {
                _this.resizeDrawingSurfaceToCanvas();
            }
            // Load Rive data from a source uri or a data buffer
            _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay)
                .then(function () {
                var activeStateMachineInstances = (_this.animator.stateMachines || [])
                    .filter(function (sm) { return sm.playing; })
                    .map(function (sm) { return sm.instance; });
                _this.eventCleanup = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.registerTouchInteractions)({
                    canvas: _this.canvas,
                    artboard: _this.artboard,
                    stateMachines: activeStateMachineInstances,
                    renderer: _this.renderer,
                    rive: _this.runtime,
                    fit: _this._layout.runtimeFit(_this.runtime),
                    alignment: _this._layout.runtimeAlignment(_this.runtime),
                });
            })
                .catch(function (e) {
                console.error(e);
            });
        })
            .catch(function (e) {
            console.error(e);
        });
    };
    // Initializes runtime with Rive data and preps for playing
    Rive.prototype.initData = function (artboardName, animationNames, stateMachineNames, autoplay) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, msg;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, loadRiveFile(this.src)];
                    case 1:
                        _b.buffer = _d.sent();
                        _d.label = 2;
                    case 2:
                        // Load the Rive file
                        _c = this;
                        return [4 /*yield*/, this.runtime.load(new Uint8Array(this.buffer))];
                    case 3:
                        // Load the Rive file
                        _c.file = _d.sent();
                        if (this.file) {
                            // Initialize and draw frame
                            this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                            // Everything's set up, emit a load event
                            this.loaded = true;
                            this.eventManager.fire({
                                type: EventType.Load,
                                data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer",
                            });
                            // Flag ready for playback commands and clear the task queue; this order
                            // is important or it may infinitely recurse
                            this.readyForPlaying = true;
                            this.taskQueue.process();
                            this.drawFrame();
                            return [2 /*return*/, Promise.resolve()];
                        }
                        else {
                            msg = "Problem loading file; may be corrupt!";
                            console.warn(msg);
                            this.eventManager.fire({ type: EventType.LoadError, data: msg });
                            return [2 /*return*/, Promise.reject(msg)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Initialize for playback
    Rive.prototype.initArtboard = function (artboardName, animationNames, stateMachineNames, autoplay) {
        // Fetch the artboard
        var rootArtboard = artboardName
            ? this.file.artboardByName(artboardName)
            : this.file.defaultArtboard();
        // Check we have a working artboard
        if (!rootArtboard) {
            var msg = "Invalid artboard name or no default artboard";
            console.warn(msg);
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            return;
        }
        this.artboard = rootArtboard;
        // Check that the artboard has at least 1 animation
        if (this.artboard.animationCount() < 1) {
            var msg = "Artboard has no animations";
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            throw msg;
        }
        // Initialize the animator
        this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
        // Initialize the animations; as loaded hasn't happened yet, we need to
        // suppress firing the play/pause events until the load event has fired. To
        // do this we tell the animator to suppress firing events, and add event
        // firing to the task queue.
        var instanceNames;
        if (animationNames.length > 0 || stateMachineNames.length > 0) {
            instanceNames = animationNames.concat(stateMachineNames);
            this.animator.add(instanceNames, autoplay, false);
        }
        else {
            instanceNames = [this.animator.atLeastOne(autoplay, false)];
        }
        // Queue up firing the playback events
        this.taskQueue.add({
            event: {
                type: autoplay ? EventType.Play : EventType.Pause,
                data: instanceNames,
            },
        });
    };
    // Draws the current artboard frame
    Rive.prototype.drawFrame = function () {
        this.startRendering();
    };
    /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */
    Rive.prototype.draw = function (time, onSecond) {
        var before = performance.now();
        // Clear the frameRequestId, as we're now rendering a fresh frame
        this.frameRequestId = null;
        // On the first pass, make sure lastTime has a valid value
        if (!this.lastRenderTime) {
            this.lastRenderTime = time;
        }
        // Handle the onSecond callback
        this.renderSecondTimer += time - this.lastRenderTime;
        if (this.renderSecondTimer > 5000) {
            this.renderSecondTimer = 0;
            onSecond === null || onSecond === void 0 ? void 0 : onSecond();
        }
        // Calculate the elapsed time between frames in seconds
        var elapsedTime = (time - this.lastRenderTime) / 1000;
        this.lastRenderTime = time;
        // - Advance non-paused animations by the elapsed number of seconds
        // - Advance any animations that require scrubbing
        // - Advance to the first frame even when autoplay is false
        var activeAnimations = this.animator.animations
            .filter(function (a) { return a.playing || a.needsScrub; })
            // The scrubbed animations must be applied first to prevent weird artifacts
            // if the playing animations conflict with the scrubbed animating attribuates.
            .sort(function (first) { return (first.needsScrub ? -1 : 1); });
        for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
            var animation = activeAnimations_1[_i];
            animation.advance(elapsedTime);
            if (animation.instance.didLoop) {
                animation.loopCount += 1;
            }
            animation.apply(1.0);
        }
        // - Advance non-paused state machines by the elapsed number of seconds
        // - Advance to the first frame even when autoplay is false
        var activeStateMachines = this.animator.stateMachines.filter(function (a) { return a.playing; });
        for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
            var stateMachine = activeStateMachines_1[_a];
            stateMachine.advance(elapsedTime);
            // stateMachine.instance.apply(this.artboard);
        }
        // Once the animations have been applied to the artboard, advance it
        // by the elapsed time.
        this.artboard.advance(elapsedTime);
        var renderer = this.renderer;
        // Canvas must be wiped to prevent artifacts
        renderer.clear();
        renderer.save();
        // Update the renderer alignment if necessary
        this.alignRenderer();
        this.artboard.draw(renderer);
        renderer.restore();
        renderer.flush();
        // Check for any animations that looped
        this.animator.handleLooping();
        // Check for any state machines that had a state change
        this.animator.handleStateChanges();
        // Add duration to create frame to durations array
        this.frameCount++;
        var after = performance.now();
        this.frameTimes.push(after);
        this.durations.push(after - before);
        while (this.frameTimes[0] <= after - 1000) {
            this.frameTimes.shift();
            this.durations.shift();
        }
        // Calling requestAnimationFrame will rerun draw() at the correct rate:
        // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
        if (this.animator.isPlaying) {
            // Request a new rendering frame
            this.startRendering();
        }
        else if (this.animator.isPaused) {
            // Reset the end time so on playback it starts at the correct frame
            this.lastRenderTime = 0;
        }
        else if (this.animator.isStopped) {
            // Reset animation instances, artboard and time
            // TODO: implement this properly when we have instancing
            // this.initArtboard();
            // this.drawFrame();
            this.lastRenderTime = 0;
        }
    };
    /**
     * Align the renderer
     */
    Rive.prototype.alignRenderer = function () {
        var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
        // Align things up safe in the knowledge we can restore if changed
        renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
            minX: _layout.minX,
            minY: _layout.minY,
            maxX: _layout.maxX,
            maxY: _layout.maxY,
        }, artboard.bounds);
    };
    Object.defineProperty(Rive.prototype, "fps", {
        get: function () {
            return this.durations.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "frameTime", {
        get: function () {
            if (this.durations.length === 0) {
                return 0;
            }
            return (this.durations.reduce(function (a, b) { return a + b; }, 0) / this.durations.length).toFixed(4);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Cleans up all Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances,
     * renderer instance, file and runtime.
     *
     * Once this is called, you will need to initialise a new instance of the
     * Rive class
     */
    Rive.prototype.cleanup = function () {
        // Stop the renderer if it hasn't already been stopped.
        this.stopRendering();
        // Clean up any artboard, animation or state machine instances.
        this.cleanupInstances();
        // Delete the renderer
        this.renderer.delete();
        // Delete the rive file
        this.file.delete();
    };
    /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */
    Rive.prototype.cleanupInstances = function () {
        if (this.eventCleanup !== null) {
            this.eventCleanup();
        }
        // Delete all animation and state machine instances
        this.stop();
        if (this.artboard) {
            this.artboard.delete();
            this.artboard = null;
        }
    };
    // Plays specified animations; if none specified, it unpauses everything.
    Rive.prototype.play = function (animationNames, autoplay) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, queue up the play
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.play(animationNames, autoplay); },
            });
            return;
        }
        this.animator.play(animationNames);
        this.startRendering();
    };
    // Pauses specified animations; if none specified, pauses all.
    Rive.prototype.pause = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.pause(animationNames); },
            });
            return;
        }
        this.animator.pause(animationNames);
    };
    Rive.prototype.scrub = function (animationNames, value) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.scrub(animationNames, value); },
            });
            return;
        }
        // Scrub the animation time; we draw a single frame here so that if
        // nothing's currently playing, the scrubbed animation is still rendered/
        this.animator.scrub(animationNames, value || 0);
        this.drawFrame();
    };
    // Stops specified animations; if none specifies, stops them all.
    Rive.prototype.stop = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.stop(animationNames); },
            });
            return;
        }
        this.animator.stop(animationNames);
    };
    /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */
    Rive.prototype.reset = function (params) {
        var _a;
        // Get the current artboard, animations, state machines, and playback states
        var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
        var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
        var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
        var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
        // Stop everything and clean up
        this.cleanupInstances();
        // Reinitialize an artboard instance with the state
        this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
        this.taskQueue.process();
    };
    // Loads a new Rive file, keeping listeners in place
    Rive.prototype.load = function (params) {
        // Stop all animations
        this.stop();
        // Reinitialize
        this.init(params);
    };
    Object.defineProperty(Rive.prototype, "layout", {
        /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */
        get: function () {
            return this._layout;
        },
        // Sets a new layout
        set: function (layout) {
            this._layout = layout;
            // If the maxX or maxY are 0, then set them to the canvas width and height
            if (!layout.maxX || !layout.maxY) {
                this.resizeToCanvas();
            }
            if (this.loaded && !this.animator.isPlaying) {
                this.drawFrame();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */
    Rive.prototype.resizeToCanvas = function () {
        this._layout = this.layout.copyWith({
            minX: 0,
            minY: 0,
            maxX: this.canvas.width,
            maxY: this.canvas.height,
        });
    };
    /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards.
     * Useful function for consumers to include in a window resize listener
     */
    Rive.prototype.resizeDrawingSurfaceToCanvas = function () {
        if (this.canvas instanceof HTMLCanvasElement && !!window) {
            var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
            var dpr = window.devicePixelRatio || 1;
            this.canvas.width = dpr * width;
            this.canvas.height = dpr * height;
            this.startRendering();
            this.resizeToCanvas();
        }
    };
    Object.defineProperty(Rive.prototype, "source", {
        // Returns the animation source, which may be undefined
        get: function () {
            return this.src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "activeArtboard", {
        /**
         * Returns the name of the active artboard
         */
        get: function () {
            return this.artboard ? this.artboard.name : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "animationNames", {
        // Returns a list of animation names on the chosen artboard
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var animationNames = [];
            for (var i = 0; i < this.artboard.animationCount(); i++) {
                animationNames.push(this.artboard.animationByIndex(i).name);
            }
            return animationNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "stateMachineNames", {
        /**
         * Returns a list of state machine names from the current artboard
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var stateMachineNames = [];
            for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
            }
            return stateMachineNames;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */
    Rive.prototype.stateMachineInputs = function (name) {
        // If the file's not loaded, early out, nothing to pause
        if (!this.loaded) {
            return;
        }
        var stateMachine = this.animator.stateMachines.find(function (m) { return m.name === name; });
        return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
    };
    Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
        // Returns a list of playing machine names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "playingAnimationNames", {
        // Returns a list of playing animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations.filter(function (a) { return a.playing; }).map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
        // Returns a list of paused animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
        /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return !m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPlaying", {
        /**
         * @returns true if any animation is playing
         */
        get: function () {
            return this.animator.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPaused", {
        /**
         * @returns true if all instanced animations are paused
         */
        get: function () {
            return this.animator.isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isStopped", {
        /**
         * @returns true if no animations are playing or paused
         */
        get: function () {
            return this.animator.isStopped;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "bounds", {
        /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */
        get: function () {
            return this.artboard ? this.artboard.bounds : undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */
    Rive.prototype.on = function (type, callback) {
        this.eventManager.add({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @param callback the callback to unsubscribe from
     */
    Rive.prototype.unsubscribe = function (type, callback) {
        this.eventManager.remove({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.unsubscribeAll = function (type) {
        this.eventManager.removeAll(type);
    };
    /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */
    Rive.prototype.stopRendering = function () {
        if (this.loaded && this.frameRequestId) {
            if (this.runtime.cancelAnimationFrame) {
                this.runtime.cancelAnimationFrame(this.frameRequestId);
            }
            else {
                cancelAnimationFrame(this.frameRequestId);
            }
            this.frameRequestId = null;
        }
    };
    /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */
    Rive.prototype.startRendering = function () {
        if (this.loaded && this.artboard && !this.frameRequestId) {
            if (this.runtime.requestAnimationFrame) {
                this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
            }
            else {
                this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * Enables frames-per-second (FPS) reporting for the runtime
     * If no callback is provided, Rive will append a fixed-position div at the top-right corner of
     * the page with the FPS reading
     * @param fpsCallback - Callback from the runtime during the RAF loop that supplies the FPS value
     */
    Rive.prototype.enableFPSCounter = function (fpsCallback) {
        this.runtime.enableFPSCounter(fpsCallback);
    };
    /**
     * Disables frames-per-second (FPS) reporting for the runtime
     */
    Rive.prototype.disableFPSCounter = function () {
        this.runtime.disableFPSCounter();
    };
    Object.defineProperty(Rive.prototype, "contents", {
        /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */
        get: function () {
            if (!this.loaded) {
                return undefined;
            }
            var riveContents = {
                artboards: [],
            };
            for (var i = 0; i < this.file.artboardCount(); i++) {
                var artboard = this.file.artboardByIndex(i);
                var artboardContents = {
                    name: artboard.name,
                    animations: [],
                    stateMachines: [],
                };
                for (var j = 0; j < artboard.animationCount(); j++) {
                    var animation = artboard.animationByIndex(j);
                    artboardContents.animations.push(animation.name);
                }
                for (var k = 0; k < artboard.stateMachineCount(); k++) {
                    var stateMachine = artboard.stateMachineByIndex(k);
                    var name_1 = stateMachine.name;
                    var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                    var inputContents = [];
                    for (var l = 0; l < instance.inputCount(); l++) {
                        var input = instance.input(l);
                        inputContents.push({ name: input.name, type: input.type });
                    }
                    artboardContents.stateMachines.push({
                        name: name_1,
                        inputs: inputContents,
                    });
                }
                riveContents.artboards.push(artboardContents);
            }
            return riveContents;
        },
        enumerable: false,
        configurable: true
    });
    // Error message for missing source or buffer
    Rive.missingErrorMessage = "Rive source file or data buffer required";
    return Rive;
}());

// Loads Rive data from a URI via fetch.
var loadRiveFile = function (src) { return __awaiter(void 0, void 0, void 0, function () {
    var req, res, buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req = new Request(src);
                return [4 /*yield*/, fetch(req)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.arrayBuffer()];
            case 2:
                buffer = _a.sent();
                return [2 /*return*/, buffer];
        }
    });
}); };
// #endregion
// #region utility functions
/*
 * Utility function to ensure an object is a string array
 */
var mapToStringArray = function (obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else if (obj instanceof Array) {
        return obj;
    }
    // If obj is undefined, return empty array
    return [];
};
// #endregion
// #region testing utilities
// Exports to only be used for tests
var Testing = {
    EventManager: EventManager,
    TaskQueueManager: TaskQueueManager,
};
// #endregion

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rive.js.map