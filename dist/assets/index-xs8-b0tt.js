var $t=Object.defineProperty;var ft=(r,t,e)=>t in r?$t(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var m=(r,t,e)=>ft(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,q=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Z=new WeakMap;let nt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const mt=r=>new nt(typeof r=="string"?r:r+"",void 0,K),N=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new nt(e,r,K)},_t=(r,t)=>{if(q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},G=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gt,defineProperty:yt,getOwnPropertyDescriptor:At,getOwnPropertyNames:vt,getOwnPropertySymbols:bt,getPrototypeOf:Et}=Object,g=globalThis,J=g.trustedTypes,St=J?J.emptyScript:"",j=g.reactiveElementPolyfillSupport,x=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>!gt(r,t),Q={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,i=[...vt(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:D;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ot)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[x("elementProperties")]=new Map,b[x("finalized")]=new Map,j==null||j({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,k=P.trustedTypes,Y=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+_,wt=`<${lt}>`,v=document,C=()=>v.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",F=Array.isArray,xt=r=>F(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,tt=/>/g,y=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,at=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),T=Pt(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),it=new WeakMap,A=v.createTreeWalker(v,129);function ct(r,t){if(!F(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Ct=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=w;for(let a=0;a<e;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(o.lastIndex=u,p=o.exec(h),p!==null);)u=o.lastIndex,o===w?p[1]==="!--"?o=X:p[1]!==void 0?o=tt:p[2]!==void 0?(at.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=s??w,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?y:p[3]==='"'?st:et):o===st||o===et?o=y:o===X||o===tt?o=w:(o=y,s=void 0);const f=o===y&&r[a+1].startsWith("/>")?" ":"";n+=o===w?h+wt:l>=0?(i.push(c),h.slice(0,l)+ht+h.slice(l)+_+f):h+_+(l===-2?a:f)}return[ct(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const a=t.length-1,h=this.parts,[c,p]=Ct(t,e);if(this.el=O.createElement(c,i),A.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=A.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ht)){const u=p[o++],f=s.getAttribute(l).split(_),M=/([.?@])?(.*)/.exec(u);h.push({type:1,index:n,name:M[2],strings:f,ctor:M[1]==="."?Ot:M[1]==="?"?Nt:M[1]==="@"?Tt:L}),s.removeAttribute(l)}else l.startsWith(_)&&(h.push({type:6,index:n}),s.removeAttribute(l));if(at.test(s.tagName)){const l=s.textContent.split(_),u=l.length-1;if(u>0){s.textContent=k?k.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],C()),A.nextNode(),h.push({type:2,index:++n});s.append(l[u],C())}}}else if(s.nodeType===8)if(s.data===lt)h.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(_,l+1))!==-1;)h.push({type:7,index:n}),l+=_.length-1}n++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function S(r,t,e=r,i){var o,a;if(t===E)return t;let s=i!==void 0?(o=e.o)==null?void 0:o[i]:e.l;const n=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e.o??(e.o=[]))[i]=s:e.l=s),s!==void 0&&(t=S(r,s._$AS(r,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);A.currentNode=s;let n=A.nextNode(),o=0,a=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new H(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Ht(n,this,t)),this._$AV.push(c),h=i[++a]}o!==(h==null?void 0:h.index)&&(n=A.nextNode(),o++)}return A.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ct(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Ut(s,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new O(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new H(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const a=t;let h,c;for(t=n[0],h=0;h<n.length-1;h++)c=S(this,a[i+h],e,h),c===E&&(c=this._$AH[h]),o||(o=!U(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Nt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===E)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=P.litHtmlPolyfillSupport;B==null||B(O,H),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.0");const Mt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new H(t.insertBefore(C(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return E}}var rt;$._$litElement$=!0,$.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:$});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:$});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const Rt=N`
    button {
        background-color: green;
        border: none;
        padding: 5px;
    }
`;class dt extends ${render(){return T`
        <button>Eu sou verde</button>
        `}}m(dt,"styles",[Rt]);const kt=N`
    button {
        background-color: red;
        border: none;
        padding: 5px;
    }
`;class pt extends ${render(){return T`
        <button>Eu sou vermelho</button>
        `}}m(pt,"styles",[kt]);const Lt=N`
    h1, h2 {
        color: white;
    }
`;class W extends ${constructor(){super(),this.versao="especial"}mudouNome(t){const e=t.target;this.nome=e.value}render(){return T`
        <h1>Essa é uma versão ${this.versao}!</h1>
        <h2>Por favor ${this.nome}, insira seu nome na caixa abaixo:</h2><br>
        <input @input=${this.mudouNome} placeholder="Seu nome vai aqui!">
        `}}m(W,"properties",{versao:{},nome:{}}),m(W,"styles",[Lt]);const jt=N`
    .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }

    .child, .child2, .child3, .child4 {
        display: flex;
        flex: 1 1 auto;
        text-align: center;
        justify-content: center;
        padding: 1rem;
        margin-inline: auto;
        margin-top: 3em;
        height: 100dvh;
        align-items: center;
    }

    .child {
        background-color: blue;
    }

    .child2 {
        background-color: purple;
    }

    .child3 {
        background-color: orange
    }

    .child4 {
        background-color: brown
    }

    @media (max-width: 1000px) {
        .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
    }

    @media (max-width: 600px) {
        .master { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
    }

    .child, .child2, .child3, .child4 {
        padding: 5rem;
        height: 0;
        margin-top: 0em;
    }
    }
`;class ut extends ${render(){return T`
        <div class="master">
            <div class="child">
                <p>1. Blue</p>
            </div>
            <div class="child2">
                <p>2. Purple </p>
            </div>
            <div class="child3">
                <p>3. Orange</p>
            </div>
            <div class="child4">
                <p>4. Brown</p>
            </div>
        </div>
        `}}m(ut,"styles",[jt]);const zt=N`
    p {
        font-family: 'arial';
    }
`;class V extends ${constructor(){super(),this.resultado=""}girarMoeda(){Math.random()<.5?this.resultado="Cara":this.resultado="Coroa"}render(){return T`
        <button @onclick=${this.girarMoeda}>Gire a moeda!</button>
        <p>O resultado é: ${this.resultado}</p>
        `}}m(V,"styles",[zt]),m(V,"properties",{resultado:{}});window.customElements.define("botao-verde",dt);window.customElements.define("botao-vermelho",pt);window.customElements.define("dita-versao",W);window.customElements.define("grid-layout",ut);window.customElements.define("cara-coroa",V);
