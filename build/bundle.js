var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return""===t?null:+t}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function _(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function T(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let E;function b(t){E=t}function I(){const t=function(){if(!E)throw new Error("Function called outside component initialization");return E}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,i)}))}}}const k=[],S=[],C=[],A=[],N=Promise.resolve();let R=!1;function D(t){C.push(t)}function O(t){A.push(t)}const L=new Set;let x=0;function P(){const t=E;do{for(;x<k.length;){const t=k[x];x++,b(t),M(t.$$)}for(b(null),k.length=0,x=0;S.length;)S.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];L.has(e)||(L.add(e),e())}C.length=0}while(k.length);for(;A.length;)A.pop()();R=!1,L.clear(),b(t)}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const U=new Set;let V;function F(){V={r:0,c:[],p:V}}function $(){V.r||s(V.c),V=V.p}function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function q(t,e,n,s){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function B(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function K(t){t&&t.c()}function z(t,n,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,r),o||D((()=>{const n=c.map(e).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(D)}function H(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(k.push(t),R||(R=!0,N.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,i,r,o,a,c,l,h=[-1]){const d=E;b(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&G(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();i.intro&&j(e.$$.fragment),z(e,i.target,i.anchor,i.customElement),P()}b(d)}class J{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const X={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Q{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Z(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function tt(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function et(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function nt(){const t=Y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}class st extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(rt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new st(s,o,n)}}const rt=/\{\$([^}]+)}/g;function ot(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(at(n)&&at(r)){if(!ot(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function at(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ct(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}class ut{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let s;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");s=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===s.next&&(s.next=lt),void 0===s.error&&(s.error=lt),void 0===s.complete&&(s.complete=lt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(t){}})),this.observers.push(s),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function lt(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ht(t){return t&&t._delegate?t._delegate:t}class dt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ft="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Q;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:ft})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===ft?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:ft:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class gt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new pt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var mt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(mt||(mt={}));const yt={debug:mt.DEBUG,verbose:mt.VERBOSE,info:mt.INFO,warn:mt.WARN,error:mt.ERROR,silent:mt.SILENT},vt=mt.INFO,wt={[mt.DEBUG]:"log",[mt.VERBOSE]:"log",[mt.INFO]:"info",[mt.WARN]:"warn",[mt.ERROR]:"error"},_t=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=wt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class Tt{constructor(t){this.name=t,this._logLevel=vt,this._logHandler=_t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?yt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,mt.DEBUG,...t),this._logHandler(this,mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,mt.VERBOSE,...t),this._logHandler(this,mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,mt.INFO,...t),this._logHandler(this,mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,mt.WARN,...t),this._logHandler(this,mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,mt.ERROR,...t),this._logHandler(this,mt.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Et{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const bt="@firebase/app",It="0.7.17",kt=new Tt("@firebase/app"),St="[DEFAULT]",Ct={[bt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},At=new Map,Nt=new Map;function Rt(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(Nt.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Nt.set(e,t);for(const e of At.values())Rt(e,t);return!0}function Ot(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lt=new it("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pt="9.6.7";function Mt(t="[DEFAULT]"){const e=At.get(t);if(!e)throw Lt.create("no-app",{appName:t});return e}function Ut(t,e,n){var s;let i=null!==(s=Ct[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void kt.warn(t.join(" "))}Dt(new dt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Vt;Vt="",Dt(new dt("platform-logger",(t=>new Et(t)),"PRIVATE")),Ut(bt,It,Vt),Ut(bt,It,"esm2017"),Ut("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Ut("firebase","9.6.7","app");var Ft,$t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},jt=jt||{},qt=$t||self;function Bt(){}function Kt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function zt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Ht="closure_uid_"+(1e9*Math.random()>>>0),Gt=0;function Wt(t,e,n){return t.call.apply(t.bind,arguments)}function Jt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Xt(t,e,n){return(Xt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wt:Jt).apply(null,arguments)}function Qt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Yt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Zt(){this.s=this.s,this.o=this.o}var te={};Zt.prototype.s=!1,Zt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Ht)&&t[Ht]||(t[Ht]=++Gt)}(this);delete te[t]}},Zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ee=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ne=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function se(t){return Array.prototype.concat.apply([],arguments)}function ie(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function re(t){return/^[\s\xa0]*$/.test(t)}var oe,ae=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ce(t,e){return-1!=t.indexOf(e)}function ue(t,e){return t<e?-1:t>e?1:0}t:{var le=qt.navigator;if(le){var he=le.userAgent;if(he){oe=he;break t}}oe=""}function de(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function fe(t){const e={};for(const n in t)e[n]=t[n];return e}var pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ge(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<pe.length;e++)n=pe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function me(t){return me[" "](t),t}me[" "]=Bt;var ye,ve,we=ce(oe,"Opera"),_e=ce(oe,"Trident")||ce(oe,"MSIE"),Te=ce(oe,"Edge"),Ee=Te||_e,be=ce(oe,"Gecko")&&!(ce(oe.toLowerCase(),"webkit")&&!ce(oe,"Edge"))&&!(ce(oe,"Trident")||ce(oe,"MSIE"))&&!ce(oe,"Edge"),Ie=ce(oe.toLowerCase(),"webkit")&&!ce(oe,"Edge");function ke(){var t=qt.document;return t?t.documentMode:void 0}t:{var Se="",Ce=(ve=oe,be?/rv:([^\);]+)(\)|;)/.exec(ve):Te?/Edge\/([\d\.]+)/.exec(ve):_e?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ve):Ie?/WebKit\/(\S+)/.exec(ve):we?/(?:Version)[ \/]?(\S+)/.exec(ve):void 0);if(Ce&&(Se=Ce?Ce[1]:""),_e){var Ae=ke();if(null!=Ae&&Ae>parseFloat(Se)){ye=String(Ae);break t}}ye=Se}var Ne,Re={};function De(){return function(t){var e=Re;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ae(String(ye)).split("."),n=ae("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ue(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ue(0==i[2].length,0==r[2].length)||ue(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(qt.document&&_e){var Oe=ke();Ne=Oe||(parseInt(ye,10)||void 0)}else Ne=void 0;var Le=Ne,xe=function(){if(!qt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{qt.addEventListener("test",Bt,e),qt.removeEventListener("test",Bt,e)}catch(t){}return t}();function Pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Me(t,e){if(Pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(be){t:{try{me(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ue[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Me.Z.h.call(this)}}Pe.prototype.h=function(){this.defaultPrevented=!0},Yt(Me,Pe);var Ue={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Fe,this.ca=this.fa=!1}function je(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function qe(t){this.src=t,this.g={},this.h=0}function Be(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ee(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(je(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ke(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}qe.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Ke(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new $e(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var ze="closure_lm_"+(1e6*Math.random()|0),He={};function Ge(t,e,n,s,i){if(s&&s.once)return Je(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ge(t,e[r],n,s,i);return null}return n=nn(n),t&&t[Ve]?t.N(e,n,zt(s)?!!s.capture:!!s,i):We(t,e,n,!1,s,i)}function We(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=zt(i)?!!i.capture:!!i,a=tn(t);if(a||(t[ze]=a=new qe(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Ze;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xe||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ye(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Je(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Je(t,e[r],n,s,i);return null}return n=nn(n),t&&t[Ve]?t.O(e,n,zt(s)?!!s.capture:!!s,i):We(t,e,n,!0,s,i)}function Xe(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xe(t,e[r],n,s,i);else s=zt(s)?!!s.capture:!!s,n=nn(n),t&&t[Ve]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ke(r=t.g[e],n,s,i))&&(je(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=tn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ke(e,n,s,i)),(n=-1<t?e[t]:null)&&Qe(n))}function Qe(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Ve])Be(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ye(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tn(e))?(Be(n,t),0==n.h&&(n.src=null,e[ze]=null)):je(t)}}}function Ye(t){return t in He?He[t]:He[t]="on"+t}function Ze(t,e){if(t.ca)t=!0;else{e=new Me(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Qe(t),t=n.call(s,e)}return t}function tn(t){return(t=t[ze])instanceof qe?t:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function nn(t){return"function"==typeof t?t:(t[en]||(t[en]=function(e){return t.handleEvent(e)}),t[en])}function sn(){Zt.call(this),this.i=new qe(this),this.P=this,this.I=null}function rn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Pe(e,t);else if(e instanceof Pe)e.target=e.target||t;else{var i=e;ge(e=new Pe(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=on(o,s,!0,e)&&i}if(i=on(o=e.g=t,s,!0,e)&&i,i=on(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=on(o=e.g=n[r],s,!1,e)&&i}function on(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Be(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Yt(sn,Zt),sn.prototype[Ve]=!0,sn.prototype.removeEventListener=function(t,e,n,s){Xe(this,t,e,n,s)},sn.prototype.M=function(){if(sn.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)je(n[s]);delete e.g[t],e.h--}}this.I=null},sn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},sn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var an=qt.JSON.stringify;function cn(){var t=gn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var un,ln=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new hn),(t=>t.reset()));class hn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function dn(t){qt.setTimeout((()=>{throw t}),0)}function fn(t,e){un||function(){var t=qt.Promise.resolve(void 0);un=function(){t.then(mn)}}(),pn||(un(),pn=!0),gn.add(t,e)}var pn=!1,gn=new class{constructor(){this.h=this.g=null}add(t,e){const n=ln.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function mn(){for(var t;t=cn();){try{t.h.call(t.g)}catch(t){dn(t)}var e=ln;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pn=!1}function yn(t,e){sn.call(this),this.h=t||1,this.g=e||qt,this.j=Xt(this.kb,this),this.l=Date.now()}function vn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function wn(t,e,n){if("function"==typeof t)n&&(t=Xt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Xt(t.handleEvent,t)}return 2147483647<Number(e)?-1:qt.setTimeout(t,e||0)}function _n(t){t.g=wn((()=>{t.g=null,t.i&&(t.i=!1,_n(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Yt(yn,sn),(Ft=yn.prototype).da=!1,Ft.S=null,Ft.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),rn(this,"tick"),this.da&&(vn(this),this.start()))}},Ft.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ft.M=function(){yn.Z.M.call(this),vn(this),delete this.g};class Tn extends Zt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_n(this)}M(){super.M(),this.g&&(qt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(t){Zt.call(this),this.h=t,this.g={}}Yt(En,Zt);var bn=[];function In(t,e,n,s){Array.isArray(n)||(n&&(bn[0]=n.toString()),n=bn);for(var i=0;i<n.length;i++){var r=Ge(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function kn(t){de(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Qe(t)}),t),t.g={}}function Sn(){this.g=!0}function Cn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return an(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}En.prototype.M=function(){En.Z.M.call(this),kn(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Sn.prototype.Aa=function(){this.g=!1},Sn.prototype.info=function(){};var An={},Nn=null;function Rn(){return Nn=Nn||new sn}function Dn(t){Pe.call(this,An.Ma,t)}function On(t){const e=Rn();rn(e,new Dn(e,t))}function Ln(t,e){Pe.call(this,An.STAT_EVENT,t),this.stat=e}function xn(t){const e=Rn();rn(e,new Ln(e,t))}function Pn(t,e){Pe.call(this,An.Na,t),this.size=e}function Mn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return qt.setTimeout((function(){t()}),e)}An.Ma="serverreachability",Yt(Dn,Pe),An.STAT_EVENT="statevent",Yt(Ln,Pe),An.Na="timingevent",Yt(Pn,Pe);var Un={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Fn(){}function $n(t){return t.h||(t.h=t.i())}function jn(){}Fn.prototype.h=null;var qn,Bn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Kn(){Pe.call(this,"d")}function zn(){Pe.call(this,"c")}function Hn(){}function Gn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new En(this),this.P=Jn,t=Ee?125:void 0,this.W=new yn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wn}function Wn(){this.i=null,this.g="",this.h=!1}Yt(Kn,Pe),Yt(zn,Pe),Yt(Hn,Fn),Hn.prototype.g=function(){return new XMLHttpRequest},Hn.prototype.i=function(){return{}},qn=new Hn;var Jn=45e3,Xn={},Qn={};function Yn(t,e,n){t.K=1,t.v=Ts(gs(e)),t.s=n,t.U=!0,Zn(t,null)}function Zn(t,e){t.F=Date.now(),ss(t),t.A=gs(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),xs(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Wn,t.g=xi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Tn(Xt(t.Ia,t,t.g),t.O)),In(t.V,t.g,"readystatechange",t.gb),e=t.H?fe(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),On(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ts(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function es(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=ns(t,n),s==Qn){4==e&&(t.o=4,xn(14),i=!1),Cn(t.j,t.m,null,"[Incomplete Response]");break}if(s==Xn){t.o=4,xn(15),Cn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Cn(t.j,t.m,s,null),cs(t,s)}ts(t)&&s!=Qn&&s!=Xn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,xn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(e),e.L=!0,xn(11))):(Cn(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),os(t))}function ns(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Qn:(n=Number(e.substring(n,s)),isNaN(n)?Xn:(s+=1)+n>e.length?Qn:(e=e.substr(s,n),t.C=s+n,e))}function ss(t){t.Y=Date.now()+t.P,is(t,t.P)}function is(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Mn(Xt(t.eb,t),e)}function rs(t){t.B&&(qt.clearTimeout(t.B),t.B=null)}function os(t){0==t.l.G||t.I||Ni(t.l,t)}function as(t){rs(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,vn(t.W),kn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||$s(n.i,t)))if(n.I=t.N,!t.J&&$s(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ai(n),yi(n)}ki(n),xn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Mn(Xt(n.ab,n),6e3));if(1>=Fs(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Di(n,11)}else if((t.J||n.g==t)&&Ai(n),!re(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(ce(t,"spdy")||ce(t,"quic")||ce(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,_s(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Li(s,s.H?s.la:null,s.W),o.J){qs(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(rs(a),ss(a)),s.g=o}else Ii(s);0<n.l.length&&_i(n)}else"stop"!=u[0]&&"close"!=u[0]||Di(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Di(n,7):mi(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}On(4)}catch(t){}}function us(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Kt(t)||"string"==typeof t)ne(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Kt(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Kt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function ls(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ls)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function hs(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ds(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)ds(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function ds(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ft=Gn.prototype).setTimeout=function(t){this.P=t},Ft.gb=function(t){t=t.target;const e=this.L;e&&3==hi(t)?e.l():this.Ia(t)},Ft.Ia=function(t){try{if(t==this.g)t:{const l=hi(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Ee||this.g&&(this.h.h||this.g.ga()||di(this.g)))){this.I||4!=l||7==e||On(8==e||0>=h?3:2),rs(this);var n=this.g.ba();this.N=n;e:if(ts(this)){var s=di(this.g);t="";var i=s.length,r=4==hi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){as(this),os(this);var o="";break e}this.h.i=new qt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,xn(12),as(this),os(this);break t}Cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cs(this,n)}this.U?(es(this,l,o),Ee&&this.i&&3==l&&(In(this.V,this.W,"tick",this.fb),this.W.start())):(Cn(this.j,this.m,o,null),cs(this,o)),4==l&&as(this),this.i&&!this.I&&(4==l?Ni(this.l,this):(this.i=!1,ss(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,xn(12)):(this.o=0,xn(13)),as(this),os(this)}}}catch(t){}},Ft.fb=function(){if(this.g){var t=hi(this.g),e=this.g.ga();this.C<e.length&&(rs(this),es(this,t,e),this.i&&4!=t&&ss(this))}},Ft.cancel=function(){this.I=!0,as(this)},Ft.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(On(3),xn(17)),as(this),this.o=2,os(this)):is(this,this.Y-t)},(Ft=ls.prototype).R=function(){hs(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ft.T=function(){return hs(this),this.g.concat()},Ft.get=function(t,e){return ds(this.h,t)?this.h[t]:e},Ft.set=function(t,e){ds(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ft.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var fs=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ps(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ps){this.g=void 0!==e?e:t.g,ms(this,t.j),this.s=t.s,ys(this,t.i),vs(this,t.m),this.l=t.l,e=t.h;var n=new Rs;n.i=e.i,e.g&&(n.g=new ls(e.g),n.h=e.h),ws(this,n),this.o=t.o}else t&&(n=String(t).match(fs))?(this.g=!!e,ms(this,n[1]||"",!0),this.s=Es(n[2]||""),ys(this,n[3]||"",!0),vs(this,n[4]),this.l=Es(n[5]||"",!0),ws(this,n[6]||"",!0),this.o=Es(n[7]||"")):(this.g=!!e,this.h=new Rs(null,this.g))}function gs(t){return new ps(t)}function ms(t,e,n){t.j=n?Es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ys(t,e,n){t.i=n?Es(e,!0):e}function vs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ws(t,e,n){e instanceof Rs?(t.h=e,function(t,e){e&&!t.j&&(Ds(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Os(this,e),xs(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=bs(e,As)),t.h=new Rs(e,t.g))}function _s(t,e,n){t.h.set(e,n)}function Ts(t){return _s(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Is),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Is(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bs(e,ks,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(bs(e,ks,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(bs(n,"/"==n.charAt(0)?Cs:Ss,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bs(n,Ns)),t.join("")};var ks=/[#\/\?@]/g,Ss=/[#\?:]/g,Cs=/[#\?]/g,As=/[#\?@]/g,Ns=/#/g;function Rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ds(t){t.g||(t.g=new ls,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Os(t,e){Ds(t),e=Ps(t,e),ds(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ds((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&hs(t)))}function Ls(t,e){return Ds(t),e=Ps(t,e),ds(t.g.h,e)}function xs(t,e,n){Os(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),ie(n)),t.h+=n.length)}function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ft=Rs.prototype).add=function(t,e){Ds(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ft.forEach=function(t,e){Ds(this),this.g.forEach((function(n,s){ne(n,(function(n){t.call(e,n,s,this)}),this)}),this)},Ft.T=function(){Ds(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},Ft.R=function(t){Ds(this);var e=[];if("string"==typeof t)Ls(this,t)&&(e=se(e,this.g.get(Ps(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=se(e,t[n])}return e},Ft.set=function(t,e){return Ds(this),this.i=null,Ls(this,t=Ps(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ft.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ft.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ms(t){this.l=t||Us,qt.PerformanceNavigationTiming?t=0<(t=qt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(qt.g&&qt.g.Ea&&qt.g.Ea()&&qt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Us=10;function Vs(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Fs(t){return t.h?1:t.g?t.g.size:0}function $s(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function js(t,e){t.g?t.g.add(e):t.h=e}function qs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Bs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ie(t.i)}function Ks(){}function zs(){this.g=new Ks}function Hs(t,e,n){const s=n||"";try{us(t,(function(t,n){let i=t;zt(t)&&(i=an(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Gs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Ws(t){this.l=t.$b||null,this.j=t.ib||!1}function Js(t,e){sn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ms.prototype.cancel=function(){if(this.i=Bs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ks.prototype.stringify=function(t){return qt.JSON.stringify(t,void 0)},Ks.prototype.parse=function(t){return qt.JSON.parse(t,void 0)},Yt(Ws,Fn),Ws.prototype.g=function(){return new Js(this.l,this.j)},Ws.prototype.i=function(t){return function(){return t}}({}),Yt(Js,sn);var Xs=0;function Qs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ys(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zs(t)}function Zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ft=Js.prototype).open=function(t,e){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zs(this)},Ft.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||qt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ft.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ys(this)),this.readyState=Xs},Ft.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==qt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qs(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ft.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ys(this):Zs(this),3==this.readyState&&Qs(this)}},Ft.Ua=function(t){this.g&&(this.response=this.responseText=t,Ys(this))},Ft.Ta=function(t){this.g&&(this.response=t,Ys(this))},Ft.ha=function(){this.g&&Ys(this)},Ft.setRequestHeader=function(t,e){this.v.append(t,e)},Ft.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ft.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Js.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ti=qt.JSON.parse;function ei(t){sn.call(this),this.headers=new ls,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ni,this.K=this.L=!1}Yt(ei,sn);var ni="",si=/^https?$/i,ii=["POST","PUT"];function ri(t){return"content-type"==t.toLowerCase()}function oi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ai(t),ui(t)}function ai(t){t.D||(t.D=!0,rn(t,"complete"),rn(t,"error"))}function ci(t){if(t.h&&void 0!==jt&&(!t.C[1]||4!=hi(t)||2!=t.ba()))if(t.v&&4==hi(t))wn(t.Fa,0,t);else if(rn(t,"readystatechange"),4==hi(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(fs)[1]||null;if(!i&&qt.self&&qt.self.location){var r=qt.self.location.protocol;i=r.substr(0,r.length-1)}s=!si.test(i?i.toLowerCase():"")}n=s}if(n)rn(t,"complete"),rn(t,"success");else{t.m=6;try{var o=2<hi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",ai(t)}}finally{ui(t)}}}function ui(t,e){if(t.g){li(t);const n=t.g,s=t.C[0]?Bt:null;t.g=null,t.C=null,e||rn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function li(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(qt.clearTimeout(t.A),t.A=null)}function hi(t){return t.g?t.g.readyState:0}function di(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ni:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function fi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return de(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):_s(t,e,n))}function pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gi(t){this.za=0,this.l=[],this.h=new Sn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pi("baseRetryDelayMs",5e3,t),this.$a=pi("retryDelaySeedMs",1e4,t),this.Ya=pi("forwardChannelMaxRetries",2,t),this.ra=pi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ms(t&&t.concurrentRequestLimit),this.Ca=new zs,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function mi(t){if(vi(t),3==t.G){var e=t.V++,n=gs(t.F);_s(n,"SID",t.J),_s(n,"RID",e),_s(n,"TYPE","terminate"),Ei(t,n),(e=new Gn(t,t.h,e,void 0)).K=2,e.v=Ts(gs(n)),n=!1,qt.navigator&&qt.navigator.sendBeacon&&(n=qt.navigator.sendBeacon(e.v.toString(),"")),!n&&qt.Image&&((new Image).src=e.v,n=!0),n||(e.g=xi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ss(e)}Oi(t)}function yi(t){t.g&&(Si(t),t.g.cancel(),t.g=null)}function vi(t){yi(t),t.u&&(qt.clearTimeout(t.u),t.u=null),Ai(t),t.i.cancel(),t.m&&("number"==typeof t.m&&qt.clearTimeout(t.m),t.m=null)}function wi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&_i(t)}function _i(t){Vs(t.i)||t.m||(t.m=!0,fn(t.Ha,t),t.C=0)}function Ti(t,e){var n;n=e?e.m:t.V++;const s=gs(t.F);_s(s,"SID",t.J),_s(s,"RID",n),_s(s,"AID",t.U),Ei(t,s),t.o&&t.s&&fi(s,t.o,t.s),n=new Gn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=bi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),js(t.i,n),Yn(n,s,e)}function Ei(t,e){t.j&&us({},(function(t,n){_s(e,n,t)}))}function bi(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Xt(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Hs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Ii(t){t.g||t.u||(t.Y=1,fn(t.Ga,t),t.A=0)}function ki(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Mn(Xt(t.Ga,t),Ri(t,t.A)),t.A++,!0)}function Si(t){null!=t.B&&(qt.clearTimeout(t.B),t.B=null)}function Ci(t){t.g=new Gn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=gs(t.oa);_s(e,"RID","rpc"),_s(e,"SID",t.J),_s(e,"CI",t.N?"0":"1"),_s(e,"AID",t.U),Ei(t,e),_s(e,"TYPE","xmlhttp"),t.o&&t.s&&fi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ts(gs(e)),n.s=null,n.U=!0,Zn(n,t)}function Ai(t){null!=t.v&&(qt.clearTimeout(t.v),t.v=null)}function Ni(t,e){var n=null;if(t.g==e){Ai(t),Si(t),t.g=null;var s=2}else{if(!$s(t.i,e))return;n=e.D,qs(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;rn(s=Rn(),new Pn(s,n,e,i)),_i(t)}else Ii(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(Fs(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Mn(Xt(t.Ha,t,e),Ri(t,t.C)),t.C++,0)))}(t,e)||2==s&&ki(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Di(t,5);break;case 4:Di(t,10);break;case 3:Di(t,6);break;default:Di(t,2)}}function Ri(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Di(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Xt(t.jb,t);n||(n=new ps("//www.google.com/images/cleardot.gif"),qt.location&&"http"==qt.location.protocol||ms(n,"https"),Ts(n)),function(t,e){const n=new Sn;if(qt.Image){const s=new Image;s.onload=Qt(Gs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qt(Gs,n,s,"TestLoadImage: error",!1,e),s.onabort=Qt(Gs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qt(Gs,n,s,"TestLoadImage: timeout",!1,e),qt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else xn(2);t.G=0,t.j&&t.j.va(e),Oi(t),vi(t)}function Oi(t){t.G=0,t.I=-1,t.j&&(0==Bs(t.i).length&&0==t.l.length||(t.i.i.length=0,ie(t.l),t.l.length=0),t.j.ua())}function Li(t,e,n){let s=function(t){return t instanceof ps?gs(t):new ps(t,void 0)}(n);if(""!=s.i)e&&ys(s,e+"."+s.i),vs(s,s.m);else{const t=qt.location;s=function(t,e,n,s){var i=new ps(null,void 0);return t&&ms(i,t),e&&ys(i,e),n&&vs(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&de(t.aa,(function(t,e){_s(s,e,t)})),e=t.D,n=t.sa,e&&n&&_s(s,e,n),_s(s,"VER",t.ma),Ei(t,s),s}function xi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ei(new Ws({ib:!0})):new ei(t.qa)).L=t.H,e}function Pi(){}function Mi(){if(_e&&!(10<=Number(Le)))throw Error("Environmental error: no available transport.")}function Ui(t,e){sn.call(this),this.g=new gi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!re(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!re(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new $i(this)}function Vi(t){Kn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Fi(){zn.call(this),this.status=1}function $i(t){this.g=t}(Ft=ei.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qn.g(),this.C=this.u?$n(this.u):$n(qn),this.g.onreadystatechange=Xt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void oi(this,t)}t=n||"";const i=new ls(this.headers);s&&us(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=ri;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=qt.FormData&&t instanceof qt.FormData,!(0<=ee(ii,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{li(this),0<this.B&&((this.K=function(t){return _e&&De()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xt(this.pa,this)):this.A=wn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){oi(this,t)}},Ft.pa=function(){void 0!==jt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rn(this,"timeout"),this.abort(8))},Ft.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rn(this,"complete"),rn(this,"abort"),ui(this))},Ft.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ui(this,!0)),ei.Z.M.call(this)},Ft.Fa=function(){this.s||(this.F||this.v||this.l?ci(this):this.cb())},Ft.cb=function(){ci(this)},Ft.ba=function(){try{return 2<hi(this)?this.g.status:-1}catch(t){return-1}},Ft.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ft.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ti(e)}},Ft.Da=function(){return this.m},Ft.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ft=gi.prototype).ma=8,Ft.G=1,Ft.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ft.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Gn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=fe(r),ge(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=bi(this,i,e),_s(n=gs(this.F),"RID",t),_s(n,"CVER",22),this.D&&_s(n,"X-HTTP-Session-Id",this.D),Ei(this,n),this.o&&r&&fi(n,this.o,r),js(this.i,i),this.Ra&&_s(n,"TYPE","init"),this.ja?(_s(n,"$req",e),_s(n,"SID","null"),i.$=!0,Yn(i,n,null)):Yn(i,n,e),this.G=2}}else 3==this.G&&(t?Ti(this,t):0==this.l.length||Vs(this.i)||Ti(this))},Ft.Ga=function(){if(this.u=null,Ci(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Mn(Xt(this.bb,this),t)}},Ft.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xn(10),yi(this),Ci(this))},Ft.ab=function(){null!=this.v&&(this.v=null,yi(this),ki(this),xn(19))},Ft.jb=function(t){t?(this.h.info("Successfully pinged google.com"),xn(2)):(this.h.info("Failed to ping google.com"),xn(1))},(Ft=Pi.prototype).xa=function(){},Ft.wa=function(){},Ft.va=function(){},Ft.ua=function(){},Ft.Oa=function(){},Mi.prototype.g=function(t,e){return new Ui(t,e)},Yt(Ui,sn),Ui.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),fn(Xt(t.hb,t,e))),xn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Li(t,null,t.W),_i(t)},Ui.prototype.close=function(){mi(this.g)},Ui.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,wi(this.g,e)}else this.v?((e={}).__data__=an(t),wi(this.g,e)):wi(this.g,t)},Ui.prototype.M=function(){this.g.j=null,delete this.j,mi(this.g),delete this.g,Ui.Z.M.call(this)},Yt(Vi,Kn),Yt(Fi,zn),Yt($i,Pi),$i.prototype.xa=function(){rn(this.g,"a")},$i.prototype.wa=function(t){rn(this.g,new Vi(t))},$i.prototype.va=function(t){rn(this.g,new Fi(t))},$i.prototype.ua=function(){rn(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,Ui.prototype.send=Ui.prototype.u,Ui.prototype.open=Ui.prototype.m,Ui.prototype.close=Ui.prototype.close,Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,Vn.COMPLETE="complete",jn.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",sn.prototype.listen=sn.prototype.N,ei.prototype.listenOnce=ei.prototype.O,ei.prototype.getLastError=ei.prototype.La,ei.prototype.getLastErrorCode=ei.prototype.Da,ei.prototype.getStatus=ei.prototype.ba,ei.prototype.getResponseJson=ei.prototype.Qa,ei.prototype.getResponseText=ei.prototype.ga,ei.prototype.send=ei.prototype.ea;var ji=Un,qi=Vn,Bi=An,Ki=10,zi=11,Hi=Ws,Gi=jn,Wi=ei;const Ji="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xi.UNAUTHENTICATED=new Xi(null),Xi.GOOGLE_CREDENTIALS=new Xi("google-credentials-uid"),Xi.FIRST_PARTY=new Xi("first-party-uid"),Xi.MOCK_USER=new Xi("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Qi="9.6.7";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yi=new Tt("@firebase/firestore");function Zi(){return Yi.logLevel}function tr(t,...e){if(Yi.logLevel<=mt.DEBUG){const n=e.map(sr);Yi.debug(`Firestore (${Qi}): ${t}`,...n)}}function er(t,...e){if(Yi.logLevel<=mt.ERROR){const n=e.map(sr);Yi.error(`Firestore (${Qi}): ${t}`,...n)}}function nr(t,...e){if(Yi.logLevel<=mt.WARN){const n=e.map(sr);Yi.warn(`Firestore (${Qi}): ${t}`,...n)}}function sr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ir(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw er(e),new Error(e)}function rr(t,e){t||ir()}function or(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ar={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class cr extends st{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ur{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Xi.UNAUTHENTICATED)))}shutdown(){}}class dr{constructor(t){this.t=t,this.currentUser=Xi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ur,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{tr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(tr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ur)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(tr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(rr("string"==typeof e.accessToken),new lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rr(null===t||"string"==typeof t),new Xi(t)}}class fr{constructor(t,e,n){this.type="FirstParty",this.user=Xi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class pr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new fr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Xi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&tr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,tr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{tr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):tr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(rr("string"==typeof t.token),this.p=t.token,new gr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */yr.A=-1;class wr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=vr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function _r(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Er{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new cr(ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new cr(ar.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new cr(ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new cr(ar.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Er.fromMillis(Date.now())}static fromDate(t){return Er.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Er(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_r(this.nanoseconds,t.nanoseconds):_r(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class br{constructor(t){this.timestamp=t}static fromTimestamp(t){return new br(t)}static min(){return new br(new Er(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ir(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cr{constructor(t,e,n){void 0===e?e=0:e>t.length&&ir(),void 0===n?n=t.length-e:n>t.length-e&&ir(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Cr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Cr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ar extends Cr{construct(t,e,n){return new Ar(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new cr(ar.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ar(e)}static emptyPath(){return new Ar([])}}const Nr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rr extends Cr{construct(t,e,n){return new Rr(t,e,n)}static isValidIdentifier(t){return Nr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Rr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new cr(ar.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new cr(ar.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new cr(ar.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new cr(ar.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rr(e)}static emptyPath(){return new Rr([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dr{constructor(t){this.fields=t,t.sort(Rr.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Tr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Or{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Or(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Or(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _r(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Or.EMPTY_BYTE_STRING=new Or("");const Lr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(rr(!!t),"string"==typeof t){let e=0;const n=Lr.exec(t);if(rr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pr(t.seconds),nanos:Pr(t.nanos)}}function Pr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Mr(t){return"string"==typeof t?Or.fromBase64String(t):Or.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ur(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vr(t){const e=t.mapValue.fields.__previous_value__;return Ur(e)?Vr(e):e}function Fr(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Er(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $r{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qr(t){return null==t}function Br(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kr{constructor(t){this.path=t}static fromPath(t){return new Kr(Ar.fromString(t))}static fromName(t){return new Kr(Ar.fromString(t).popFirst(5))}static empty(){return new Kr(Ar.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ar.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ar.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Kr(new Ar(t.slice()))}}function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ur(t)?4:10:ir()}function Hr(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fr(t).isEqual(Fr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xr(t.timestampValue),s=xr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Mr(t.bytesValue).isEqual(Mr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pr(t.geoPointValue.latitude)===Pr(e.geoPointValue.latitude)&&Pr(t.geoPointValue.longitude)===Pr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pr(t.integerValue)===Pr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pr(t.doubleValue),s=Pr(e.doubleValue);return n===s?Br(n)===Br(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],Hr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Ir(n)!==Ir(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Hr(n[t],s[t])))return!1;return!0}(t,e);default:return ir()}}function Gr(t,e){return void 0!==(t.values||[]).find((t=>Hr(t,e)))}function Wr(t,e){if(t===e)return 0;const n=zr(t),s=zr(e);if(n!==s)return _r(n,s);switch(n){case 0:return 0;case 1:return _r(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pr(t.integerValue||t.doubleValue),s=Pr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Jr(t.timestampValue,e.timestampValue);case 4:return Jr(Fr(t),Fr(e));case 5:return _r(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Mr(t),s=Mr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=_r(n[t],s[t]);if(0!==e)return e}return _r(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_r(Pr(t.latitude),Pr(e.latitude));return 0!==n?n:_r(Pr(t.longitude),Pr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Wr(n[t],s[t]);if(e)return e}return _r(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=_r(s[t],r[t]);if(0!==e)return e;const o=Wr(n[s[t]],i[r[t]]);if(0!==o)return o}return _r(s.length,r.length)}(t.mapValue,e.mapValue);default:throw ir()}}function Jr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _r(t,e);const n=xr(t),s=xr(e),i=_r(n.seconds,s.seconds);return 0!==i?i:_r(n.nanos,s.nanos)}function Xr(t){return Qr(t)}function Qr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Kr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Qr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Qr(t.fields[i])}`;return n+"}"}(t.mapValue):ir();var e,n}function Yr(t){return!!t&&"integerValue"in t}function Zr(t){return!!t&&"arrayValue"in t}function to(t){return!!t&&"nullValue"in t}function eo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=so(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(t){this.value=t}static empty(){return new io({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!no(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=so(e)}setAll(t){let e=Rr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=so(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());no(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];no(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){kr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new io(so(this.value))}}function ro(t){const e=[];return kr(t.fields,((t,n)=>{const s=new Rr([t]);if(no(n)){const t=ro(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Dr(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class oo{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new oo(t,0,br.min(),br.min(),io.empty(),0)}static newFoundDocument(t,e,n){return new oo(t,1,e,br.min(),n,0)}static newNoDocument(t,e){return new oo(t,2,e,br.min(),io.empty(),0)}static newUnknownDocument(t,e){return new oo(t,3,e,br.min(),io.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=io.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=io.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ao{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function co(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ao(t,e,n,s,i,r,o)}function uo(t){const e=or(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Xr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xr(t))).join(",")),e.P=t}return e.P}function lo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Io(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Hr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!So(t.startAt,e.startAt)&&So(t.endAt,e.endAt)}function ho(t){return Kr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class fo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,n):new po(t,e,n):"array-contains"===e?new vo(t,n):"in"===e?new wo(t,n):"not-in"===e?new _o(t,n):"array-contains-any"===e?new To(t,n):new fo(t,e,n)}static v(t,e,n){return"in"===e?new go(t,n):new mo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(Wr(e,this.value)):null!==e&&zr(this.value)===zr(e)&&this.V(Wr(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ir()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class po extends fo{constructor(t,e,n){super(t,e,n),this.key=Kr.fromName(n.referenceValue)}matches(t){const e=Kr.comparator(t.key,this.key);return this.V(e)}}class go extends fo{constructor(t,e){super(t,"in",e),this.keys=yo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class mo extends fo{constructor(t,e){super(t,"not-in",e),this.keys=yo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function yo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Kr.fromName(t.referenceValue)))}class vo extends fo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zr(e)&&Gr(e.arrayValue,this.value)}}class wo extends fo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Gr(this.value.arrayValue,e)}}class _o extends fo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Gr(this.value.arrayValue,e)}}class To extends fo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Gr(this.value.arrayValue,t)))}}class Eo{constructor(t,e){this.position=t,this.inclusive=e}}class bo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Io(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ko(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Kr.comparator(Kr.fromName(o.referenceValue),n.key):Wr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function So(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hr(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Co{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ao(t){return new Co(t)}function No(t){return!qr(t.limit)&&"F"===t.limitType}function Ro(t){return!qr(t.limit)&&"L"===t.limitType}function Do(t){const e=or(t);if(null===e.D){e.D=[];const t=function(t){for(const e of t.filters)if(e.S())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new bo(t)),e.D.push(new bo(Rr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new bo(Rr.keyField(),t))}}}return e.D}function Oo(t){const e=or(t);if(!e.C)if("F"===e.limitType)e.C=co(e.path,e.collectionGroup,Do(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Do(e)){const e="desc"===n.dir?"asc":"desc";t.push(new bo(n.field,e))}const n=e.endAt?new Eo(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Eo(e.startAt.position,!e.startAt.inclusive):null;e.C=co(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function Lo(t,e){return lo(Oo(t),Oo(e))&&t.limitType===e.limitType}function xo(t){return`${uo(Oo(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Xr(e.value)}`;var e})).join(", ")}]`),qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xr(t))).join(",")),`Target(${e})`}(Oo(t))}; limitType=${t.limitType})`}function Mo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Kr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=ko(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Do(t),e))&&!(t.endAt&&!function(t,e,n){const s=ko(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Do(t),e))}(t,e)}function Uo(t){return(e,n)=>{let s=!1;for(const i of Do(t)){const t=Vo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Vo(t,e,n){const s=t.field.isKeyField()?Kr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Wr(s,i):ir()}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ir()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fo(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function $o(t){return{integerValue:""+t}}function jo(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?$o(e):Fo(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qo{constructor(){this._=void 0}}function Bo(t,e,n){return t instanceof Ho?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Go?Wo(t,e):t instanceof Jo?Xo(t,e):function(t,e){const n=zo(t,e),s=Yo(n)+Yo(t.k);return Yr(n)&&Yr(t.k)?$o(s):Fo(t.O,s)}(t,e)}function Ko(t,e,n){return t instanceof Go?Wo(t,e):t instanceof Jo?Xo(t,e):n}function zo(t,e){return t instanceof Qo?Yr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ho extends qo{}class Go extends qo{constructor(t){super(),this.elements=t}}function Wo(t,e){const n=Zo(e);for(const e of t.elements)n.some((t=>Hr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Jo extends qo{constructor(t){super(),this.elements=t}}function Xo(t,e){let n=Zo(e);for(const e of t.elements)n=n.filter((t=>!Hr(t,e)));return{arrayValue:{values:n}}}class Qo extends qo{constructor(t,e){super(),this.O=t,this.k=e}}function Yo(t){return Pr(t.integerValue||t.doubleValue)}function Zo(t){return Zr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class ta{constructor(t,e){this.version=t,this.transformResults=e}}class ea{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ea}static exists(t){return new ea(void 0,t)}static updateTime(t){return new ea(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function na(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class sa{}function ia(t,e,n){t instanceof ua?function(t,e,n){const s=t.value.clone(),i=da(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof la?function(t,e,n){if(!na(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=da(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ha(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n){t instanceof ua?function(t,e,n){if(!na(t.precondition,e))return;const s=t.value.clone(),i=fa(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(ca(e),s).setHasLocalMutations()}(t,e,n):t instanceof la?function(t,e,n){if(!na(t.precondition,e))return;const s=fa(t.fieldTransforms,n,e),i=e.data;i.setAll(ha(t)),i.setAll(s),e.convertToFoundDocument(ca(e),i).setHasLocalMutations()}(t,e,n):function(t,e){na(t.precondition,e)&&e.convertToNoDocument(br.min())}(t,e)}function oa(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=zo(s.transform,t||null);null!=i&&(null==n&&(n=io.empty()),n.set(s.field,i))}return n||null}function aa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Tr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Go&&e instanceof Go||t instanceof Jo&&e instanceof Jo?Tr(t.elements,e.elements,Hr):t instanceof Qo&&e instanceof Qo?Hr(t.k,e.k):t instanceof Ho&&e instanceof Ho}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ca(t){return t.isFoundDocument()?t.version:br.min()}class ua extends sa{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class la extends sa{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function ha(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function da(t,e,n){const s=new Map;rr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ko(o,a,n[i]))}return s}function fa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Bo(t,r,e))}return s}class pa extends sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class ga extends sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ma{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ya,va;function wa(t){if(void 0===t)return er("GRPC error has no .code"),ar.UNKNOWN;switch(t){case ya.OK:return ar.OK;case ya.CANCELLED:return ar.CANCELLED;case ya.UNKNOWN:return ar.UNKNOWN;case ya.DEADLINE_EXCEEDED:return ar.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return ar.RESOURCE_EXHAUSTED;case ya.INTERNAL:return ar.INTERNAL;case ya.UNAVAILABLE:return ar.UNAVAILABLE;case ya.UNAUTHENTICATED:return ar.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return ar.INVALID_ARGUMENT;case ya.NOT_FOUND:return ar.NOT_FOUND;case ya.ALREADY_EXISTS:return ar.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return ar.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return ar.FAILED_PRECONDITION;case ya.ABORTED:return ar.ABORTED;case ya.OUT_OF_RANGE:return ar.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return ar.UNIMPLEMENTED;case ya.DATA_LOSS:return ar.DATA_LOSS;default:return ir()}}(va=ya||(ya={}))[va.OK=0]="OK",va[va.CANCELLED=1]="CANCELLED",va[va.UNKNOWN=2]="UNKNOWN",va[va.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",va[va.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",va[va.NOT_FOUND=5]="NOT_FOUND",va[va.ALREADY_EXISTS=6]="ALREADY_EXISTS",va[va.PERMISSION_DENIED=7]="PERMISSION_DENIED",va[va.UNAUTHENTICATED=16]="UNAUTHENTICATED",va[va.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",va[va.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",va[va.ABORTED=10]="ABORTED",va[va.OUT_OF_RANGE=11]="OUT_OF_RANGE",va[va.UNIMPLEMENTED=12]="UNIMPLEMENTED",va[va.INTERNAL=13]="INTERNAL",va[va.UNAVAILABLE=14]="UNAVAILABLE",va[va.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class _a{constructor(t,e){this.comparator=t,this.root=e||Ea.EMPTY}insert(t,e){return new _a(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ea.BLACK,null,null))}remove(t){return new _a(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ea.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ta(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ta(this.root,t,this.comparator,!0)}}class Ta{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ea{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ea.RED,this.left=null!=s?s:Ea.EMPTY,this.right=null!=i?i:Ea.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ea(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ea.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ea.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ea.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ea.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir();if(this.right.isRed())throw ir();const t=this.left.check();if(t!==this.right.check())throw ir();return t+(this.isRed()?0:1)}}Ea.EMPTY=null,Ea.RED=!0,Ea.BLACK=!1,Ea.EMPTY=new class{constructor(){this.size=0}get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ea(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ba{constructor(t){this.comparator=t,this.data=new _a(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ia(this.data.getIterator())}getIteratorFrom(t){return new Ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ba))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ba(this.comparator);return e.data=t,e}}class Ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ka=new _a(Kr.comparator);function Sa(){return ka}const Ca=new _a(Kr.comparator);function Aa(){return Ca}const Na=new _a(Kr.comparator),Ra=new ba(Kr.comparator);function Da(...t){let e=Ra;for(const n of t)e=e.add(n);return e}const Oa=new ba(_r);function La(){return Oa}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xa{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Pa.createSynthesizedTargetChangeForCurrentChange(t,e)),new xa(br.min(),n,La(),Sa(),Da())}}class Pa{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Pa(Or.EMPTY_BYTE_STRING,e,Da(),Da(),Da())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ma{constructor(t,e,n,s){this.M=t,this.removedTargetIds=e,this.key=n,this.$=s}}class Ua{constructor(t,e){this.targetId=t,this.F=e}}class Va{constructor(t,e,n=Or.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Fa{constructor(){this.B=0,this.L=qa(),this.U=Or.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Da(),e=Da(),n=Da();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ir()}})),new Pa(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=qa()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class $a{constructor(t){this.nt=t,this.st=new Map,this.it=Sa(),this.rt=ja(),this.ot=new ba(_r)}ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:ir()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.F.count,s=this.wt(e);if(s){const t=s.target;if(ho(t))if(0===n){const n=new Kr(t.path);this.at(e,n,oo.newNoDocument(n,br.min()))}else rr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&ho(i.target)){const e=new Kr(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.at(s,e,oo.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=Da();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new xa(t,e,this.ot,this.it,n);return this.it=Sa(),this.rt=ja(),this.ot=new ba(_r),s}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Fa,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new ba(_r),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||tr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new Fa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function ja(){return new _a(Kr.comparator)}function qa(){return new _a(Kr.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ba={asc:"ASCENDING",desc:"DESCENDING"},Ka={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class za{constructor(t,e){this.databaseId=t,this.N=e}}function Ha(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ga(t,e){return t.N?e.toBase64():e.toUint8Array()}function Wa(t,e){return Ha(t,e.toTimestamp())}function Ja(t){return rr(!!t),br.fromTimestamp(function(t){const e=xr(t);return new Er(e.seconds,e.nanos)}(t))}function Xa(t,e){return function(t){return new Ar(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qa(t){const e=Ar.fromString(t);return rr(gc(e)),e}function Ya(t,e){return Xa(t.databaseId,e.path)}function Za(t,e){const n=Qa(e);if(n.get(1)!==t.databaseId.projectId)throw new cr(ar.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new cr(ar.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Kr(nc(n))}function tc(t,e){return Xa(t.databaseId,e)}function ec(t){return new Ar(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nc(t){return rr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function sc(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function ic(t,e){return{documents:[tc(t,e.path)]}}function rc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=tc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(eo(t.value))return{unaryFilter:{field:lc(t.field),op:"IS_NAN"}};if(to(t.value))return{unaryFilter:{field:lc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(eo(t.value))return{unaryFilter:{field:lc(t.field),op:"IS_NOT_NAN"}};if(to(t.value))return{unaryFilter:{field:lc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lc(t.field),op:uc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:lc(t.field),direction:cc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||qr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function oc(t){let e=function(t){const e=Qa(t);return 4===e.length?Ar.emptyPath():nc(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){rr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ac(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new bo(hc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,qr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Eo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Eo(n,e)}(n.endAt)),function(t,e,n,s,i,r,o,a){return new Co(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,u)}function ac(t){return t?void 0!==t.unaryFilter?[fc(t)]:void 0!==t.fieldFilter?[dc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ac(t))).reduce(((t,e)=>t.concat(e))):ir():[]}function cc(t){return Ba[t]}function uc(t){return Ka[t]}function lc(t){return{fieldPath:t.canonicalString()}}function hc(t){return Rr.fromServerFormat(t.fieldPath)}function dc(t){return fo.create(hc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(t.fieldFilter.op),t.fieldFilter.value)}function fc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hc(t.unaryFilter.field);return fo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hc(t.unaryFilter.field);return fo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hc(t.unaryFilter.field);return fo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hc(t.unaryFilter.field);return fo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}function pc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class mc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mc(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mc?e:mc.resolve(e)}catch(t){return mc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mc.reject(e)}static resolve(t){return new mc(((e,n)=>{e(t)}))}static reject(t){return new mc(((e,n)=>{n(t)}))}static waitFor(t){return new mc(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=mc.resolve(!1);for(const n of t)e=e.next((t=>t?mc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function yc(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&ia(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ra(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ra(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(br.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Da())}isEqual(t){return this.batchId===t.batchId&&Tr(this.mutations,t.mutations,((t,e)=>aa(t,e)))&&Tr(this.baseMutations,t.baseMutations,((t,e)=>aa(t,e)))}}class wc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){rr(t.mutations.length===n.length);let s=Na;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new wc(t,e,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _c{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tc{constructor(t,e,n,s,i=br.min(),r=br.min(),o=Or.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Tc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Tc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Tc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ec{constructor(t){this.Ht=t}}function bc(t){const e=oc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ic{constructor(){this.xe=new kc}addToCollectionParentIndex(t,e){return this.xe.add(e),mc.resolve()}getCollectionParents(t,e){return mc.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return mc.resolve()}deleteFieldIndex(t,e){return mc.resolve()}getDocumentsMatchingTarget(t,e,n){return mc.resolve(Da())}getFieldIndex(t,e){return mc.resolve(null)}getFieldIndexes(t,e){return mc.resolve([])}getNextCollectionGroupToUpdate(t){return mc.resolve(null)}updateCollectionGroup(t,e,n){return mc.resolve()}updateIndexEntries(t,e){return mc.resolve()}}class kc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ba(Ar.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ba(Ar.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sc{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new Sc(0)}static Je(){return new Sc(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Cc(t){if(t.code!==ar.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;tr("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ac{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){kr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Sr(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Nc{constructor(t,e,n){this.qn=t,this.gs=e,this.indexManager=n}ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.ps(t,e,n)))}ps(t,e,n){return this.qn.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Is(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Es(t,e){return this.qn.getEntries(t,e).next((e=>this.Ts(t,e).next((()=>e))))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Is(e,t)))}As(t,e,n){return function(t){return Kr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Rs(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Ps(t,e,n):this.bs(t,e,n)}Rs(t,e){return this.ys(t,new Kr(e)).next((t=>{let e=Aa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ps(t,e,n){const s=e.collectionGroup;let i=Aa();return this.indexManager.getCollectionParents(t,s).next((r=>mc.forEach(r,(r=>{const o=function(t,e){return new Co(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.bs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}bs(t,e,n){let s;return this.qn.getAll(t,e.path,n).next((n=>(s=n,this.gs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=oo.newInvalidDocument(n),s=s.insert(n,i)),ra(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{Mo(e,n)||(s=s.remove(t))})),s)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.vs=n,this.Vs=s}static Ss(t,e){let n=Da(),s=Da();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Rc(t,e.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dc{Ds(t){this.Cs=t}As(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(br.min())?this.Ns(t,e):this.Cs.Es(t,s).next((i=>{const r=this.xs(e,i);return(No(e)||Ro(e))&&this.ks(e.limitType,r,s,n)?this.Ns(t,e):(Zi()<=mt.DEBUG&&tr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Po(e)),this.Cs.As(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}xs(t,e){let n=new ba(Uo(t));return e.forEach(((e,s)=>{Mo(t,s)&&(n=n.add(s))})),n}ks(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ns(t,e){return Zi()<=mt.DEBUG&&tr("QueryEngine","Using full collection scan to execute query:",Po(e)),this.Cs.As(t,e,br.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oc{constructor(t,e,n,s){this.persistence=t,this.Os=e,this.O=s,this.Ms=new _a(_r),this.$s=new Ac((t=>uo(t)),lo),this.Fs=br.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(n)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new Nc(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}async function Lc(t,e){const n=or(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.gs.getAllMutationBatches(t).next((i=>(s=i,n.Ls(e),n.gs.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Da();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.Us.Es(t,o).next((t=>({qs:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function xc(t){const e=or(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Un.getLastRemoteSnapshotVersion(t)))}function Pc(t,e){const n=or(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Un.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Or.EMPTY_BYTE_STRING,br.min()).withLastLimboFreeSnapshotVersion(br.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Un.updateTargetData(t,u))}));let a=Sa();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=Da();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Sa();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(br.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):tr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),s}))}(t,r,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(br.min())){const e=n.Un.getLastRemoteSnapshotVersion(t).next((e=>n.Un.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return mc.waitFor(o).next((()=>r.apply(t))).next((()=>n.Us.Ts(t,a))).next((()=>a))})).then((t=>(n.Ms=i,t)))}function Mc(t,e){const n=or(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(t,e))))}async function Uc(t,e,n){const s=or(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!yc(t))throw t;tr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ms=s.Ms.remove(e),s.$s.delete(i.target)}function Vc(t,e,n){const s=or(t);let i=br.min(),r=Da();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=or(t),i=s.$s.get(n);return void 0!==i?mc.resolve(s.Ms.get(i)):s.Un.getTargetData(e,n)}(s,t,Oo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Os.As(t,e,n?i:br.min(),n?r:Da()))).next((t=>({documents:t,Ks:r})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fc{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,e){return mc.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var n;return this.Ws.set(e.id,{id:(n=e).id,version:n.version,createTime:Ja(n.createTime)}),mc.resolve()}getNamedQuery(t,e){return mc.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,function(t){return{name:t.name,query:bc(t.bundledQuery),readTime:Ja(t.readTime)}}(e)),mc.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $c{constructor(){this.overlays=new _a(Kr.comparator),this.Hs=new Map}getOverlay(t,e){return mc.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n=>{this.Yt(t,e,n)})),mc.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Hs.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Hs.delete(n)),mc.resolve()}getOverlaysForCollection(t,e,n){const s=new Map,i=e.length+1,r=new Kr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return mc.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new _a(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=new Map,i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=new Map,a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(e,t))),!(o.size>=s)););return mc.resolve(o)}Yt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);null!==s&&this.Hs.get(s.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new _c(e,n));let i=this.Hs.get(e);void 0===i&&(i=new Set,this.Hs.set(e,i)),i.add(n.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jc{constructor(){this.Js=new ba(qc.Ys),this.Xs=new ba(qc.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,e){const n=new qc(t,e);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ei(new qc(t,e))}ni(t,e){t.forEach((t=>this.removeReference(t,e)))}si(t){const e=new Kr(new Ar([])),n=new qc(e,t),s=new qc(e,t+1),i=[];return this.Xs.forEachInRange([n,s],(t=>{this.ei(t),i.push(t.key)})),i}ii(){this.Js.forEach((t=>this.ei(t)))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new Kr(new Ar([])),n=new qc(e,t),s=new qc(e,t+1);let i=Da();return this.Xs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new qc(t,0),n=this.Js.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class qc{constructor(t,e){this.key=t,this.oi=e}static Ys(t,e){return Kr.comparator(t.key,e.key)||_r(t.oi,e.oi)}static Zs(t,e){return _r(t.oi,e.oi)||Kr.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new ba(qc.Ys)}checkEmpty(t){return mc.resolve(0===this.gs.length)}addMutationBatch(t,e,n,s){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const r=new vc(i,e,n,s);this.gs.push(r);for(const e of s)this.ui=this.ui.add(new qc(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return mc.resolve(r)}lookupMutationBatch(t,e){return mc.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.hi(n),i=s<0?0:s;return mc.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return mc.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return mc.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new qc(e,0),s=new qc(e,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,s],(t=>{const e=this.ai(t.oi);i.push(e)})),mc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ba(_r);return e.forEach((t=>{const e=new qc(t,0),s=new qc(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,s],(t=>{n=n.add(t.oi)}))})),mc.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Kr.isDocumentKey(i)||(i=i.child(""));const r=new qc(new Kr(i),0);let o=new ba(_r);return this.ui.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.oi)),!0)}),r),mc.resolve(this.li(o))}li(t){const e=[];return t.forEach((t=>{const n=this.ai(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){rr(0===this.fi(e.batchId,"removed")),this.gs.shift();let n=this.ui;return mc.forEach(e.mutations,(s=>{const i=new qc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ui=n}))}Qe(t){}containsKey(t,e){const n=new qc(e,0),s=this.ui.firstAfterOrEqual(n);return mc.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.gs.length,mc.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kc{constructor(t){this.di=t,this.docs=new _a(Kr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.di(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mc.resolve(n?n.document.mutableCopy():oo.newInvalidDocument(e))}getEntries(t,e){let n=Sa();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():oo.newInvalidDocument(t))})),mc.resolve(n)}getAll(t,e,n){let s=Sa();const i=new Kr(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||i.readTime.compareTo(n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return mc.resolve(s)}_i(t,e){return mc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new zc(this)}getSize(t){return mc.resolve(this.size)}}class zc extends class{constructor(){this.changes=new Ac((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mc.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Tn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Tn.addEntry(t,s)):this.Tn.removeEntry(n)})),mc.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hc{constructor(t){this.persistence=t,this.wi=new Ac((t=>uo(t)),lo),this.lastRemoteSnapshotVersion=br.min(),this.highestTargetId=0,this.mi=0,this.gi=new jc,this.targetCount=0,this.yi=Sc.He()}forEachTarget(t,e){return this.wi.forEach(((t,n)=>e(n))),mc.resolve()}getLastRemoteSnapshotVersion(t){return mc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mc.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),mc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.mi&&(this.mi=e),mc.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new Sc(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,mc.resolve()}updateTargetData(t,e){return this.Ze(e),mc.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,mc.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.wi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.wi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),mc.waitFor(i).next((()=>s))}getTargetCount(t){return mc.resolve(this.targetCount)}getTargetData(t,e){const n=this.wi.get(e)||null;return mc.resolve(n)}addMatchingKeys(t,e,n){return this.gi.ti(e,n),mc.resolve()}removeMatchingKeys(t,e,n){this.gi.ni(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),mc.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),mc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.gi.ri(e);return mc.resolve(n)}containsKey(t,e){return mc.resolve(this.gi.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gc{constructor(t,e){this.pi={},this.overlays={},this.Nn=new yr(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new Hc(this),this.indexManager=new Ic,this.qn=function(t){return new Kc(t)}((t=>this.referenceDelegate.Ii(t))),this.O=new Ec(e),this.Kn=new Fc(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $c,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.pi[t.toKey()];return n||(n=new Bc(e,this.referenceDelegate),this.pi[t.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,n){tr("MemoryPersistence","Starting transaction:",t);const s=new Wc(this.Nn.next());return this.referenceDelegate.Ei(),n(s).next((t=>this.referenceDelegate.Ti(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ai(t,e){return mc.or(Object.values(this.pi).map((n=>()=>n.containsKey(t,e))))}}class Wc extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Jc{constructor(t){this.persistence=t,this.Ri=new jc,this.Pi=null}static bi(t){return new Jc(t)}get vi(){if(this.Pi)return this.Pi;throw ir()}addReference(t,e,n){return this.Ri.addReference(n,e),this.vi.delete(n.toString()),mc.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.vi.add(n.toString()),mc.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),mc.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach((t=>this.vi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.vi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mc.forEach(this.vi,(n=>{const s=Kr.fromPath(n);return this.Vi(t,s).next((t=>{t||e.removeEntry(s,br.min())}))})).next((()=>(this.Pi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Vi(t,e).next((t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())}))}Ii(t){return 0}Vi(t,e){return mc.or([()=>mc.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Xc{constructor(){this.activeTargetIds=La()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qc{constructor(){this._r=new Xc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,n){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new Xc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yc{mr(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zc{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){tr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){tr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const tu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eu{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,e,n,s,i){const r=this.$r(t,e);tr("RestConnection","Sending: ",r,n);const o={};return this.Fr(o,s,i),this.Br(t,r,o,n).then((t=>(tr("RestConnection","Received: ",t),t)),(e=>{throw nr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}Lr(t,e,n,s,i){return this.Mr(t,e,n,s,i)}Fr(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}$r(t,e){const n=tu[t];return`${this.kr}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,e,n,s){return new Promise(((i,r)=>{const o=new Wi;o.listenOnce(qi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ji.NO_ERROR:const e=o.getResponseJson();tr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case ji.TIMEOUT:tr("Connection",'RPC "'+t+'" timed out'),r(new cr(ar.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const n=o.getStatus();if(tr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ar).indexOf(e)>=0?e:ar.UNKNOWN}(t.status);r(new cr(e,t.message))}else r(new cr(ar.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new cr(ar.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{tr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Ur(t,e,n){const s=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Mi,r=Rn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Hi({})),this.Fr(o.initMessageHeaders,e,n),Z()||et()||Y().indexOf("Electron/")>=0||nt()||Y().indexOf("MSAppHost/")>=0||tt()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");tr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new eu({Ar:t=>{l?tr("Connection","Not sending because WebChannel is closed:",t):(u||(tr("Connection","Opening WebChannel transport."),c.open(),u=!0),tr("Connection","WebChannel sending:",t),c.send(t))},Rr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Gi.EventType.OPEN,(()=>{l||tr("Connection","WebChannel transport opened.")})),d(c,Gi.EventType.CLOSE,(()=>{l||(l=!0,tr("Connection","WebChannel transport closed"),h.Cr())})),d(c,Gi.EventType.ERROR,(t=>{l||(l=!0,nr("Connection","WebChannel transport errored:",t),h.Cr(new cr(ar.UNAVAILABLE,"The operation could not be completed")))})),d(c,Gi.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];rr(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){tr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ya[t];if(void 0!==e)return wa(e)}(t),n=i.message;void 0===e&&(e=ar.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.Cr(new cr(e,n)),c.close()}else tr("Connection","WebChannel received:",n),h.Nr(n)}})),d(r,Bi.STAT_EVENT,(t=>{t.stat===Ki?tr("Connection","Detected buffering proxy"):t.stat===zi&&tr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Dr()}),0),h}}function su(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function iu(t){return new za(t,!0)}class ru{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Sn=t,this.timerId=e,this.qr=n,this.Kr=s,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),s=Math.max(0,e-n);s>0&&tr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,s,(()=>(this.Wr=Date.now(),t()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ou{constructor(t,e,n,s,i,r,o,a){this.Sn=t,this.Xr=n,this.Zr=s,this.eo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new ru(t,e)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===ar.RESOURCE_EXHAUSTED?(er(e.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===ar.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.no===e&&this.po(t,n)}),(e=>{t((()=>{const t=new cr(ar.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)}))}))}po(t,e){const n=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((t=>{n((()=>this.Io(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(t){return tr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget((()=>this.no===t?e():(tr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class au extends ou{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.O=i}Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ir()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(rr(void 0===e||"string"==typeof e),Or.fromBase64String(e||"")):(rr(void 0===e||e instanceof Uint8Array),Or.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ar.UNKNOWN:wa(t.code);return new cr(e,t.message||"")}(o);n=new Va(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Za(t,s.document.name),r=Ja(s.document.updateTime),o=new io({mapValue:{fields:s.document.fields}}),a=oo.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ma(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Za(t,s.document),r=s.readTime?Ja(s.readTime):br.min(),o=oo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ma([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Za(t,s.document),r=s.removedTargetIds||[];n=new Ma([],r,i,null)}else{if(!("filter"in e))return ir();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ma(s),r=t.targetId;n=new Ua(r,i)}}return n}(this.O,t),n=function(t){if(!("targetChange"in t))return br.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?br.min():e.readTime?Ja(e.readTime):br.min()}(t);return this.listener.To(e,n)}Ao(t){const e={};e.database=ec(this.O),e.addTarget=function(t,e){let n;const s=e.target;return n=ho(s)?{documents:ic(t,s)}:{query:rc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ga(t,e.resumeToken):e.snapshotVersion.compareTo(br.min())>0&&(n.readTime=Ha(t,e.snapshotVersion.toTimestamp())),n}(this.O,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ir()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.O,t);n&&(e.labels=n),this.fo(e)}Ro(t){const e={};e.database=ec(this.O),e.removeTarget=t,this.fo(e)}}class cu extends ou{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(rr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const e=function(t,e){return t&&t.length>0?(rr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ja(t.updateTime):Ja(e);return n.isEqual(br.min())&&(n=Ja(e)),new ta(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Ja(t.commitTime);return this.listener.Vo(n,e)}return rr(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=ec(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof ua)n={update:sc(t,e.key,e.value)};else if(e instanceof pa)n={delete:Ya(t,e.key)};else if(e instanceof la)n={update:sc(t,e.key,e.data),updateMask:pc(e.fieldMask)};else{if(!(e instanceof ga))return ir();n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ho)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Go)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qo)return{fieldPath:e.field.canonicalString(),increment:n.k};throw ir()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Wa(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ir()}(t,e.precondition)),n}(this.O,t)))};this.fo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=n,this.O=s,this.Co=!1}No(){if(this.Co)throw new cr(ar.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.eo.Mr(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cr(ar.UNKNOWN,t.toString())}))}Lr(t,e,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.eo.Lr(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ar.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cr(ar.UNKNOWN,t.toString())}))}terminate(){this.Co=!0}}class lu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(er(e),this.Oo=!1):tr("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr((t=>{n.enqueueAndForget((async()=>{_u(this)&&(tr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=or(t);e.Ko.add(4),await fu(e),e.Qo.set("Unknown"),e.Ko.delete(4),await du(e)}(this))}))})),this.Qo=new lu(n,s)}}async function du(t){if(_u(t))for(const e of t.Go)await e(!0)}async function fu(t){for(const e of t.Go)await e(!1)}function pu(t,e){const n=or(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),wu(n)?vu(n):Uu(n).co()&&mu(n,e))}function gu(t,e){const n=or(t),s=Uu(n);n.qo.delete(e),s.co()&&yu(n,e),0===n.qo.size&&(s.co()?s.ho():_u(n)&&n.Qo.set("Unknown"))}function mu(t,e){t.Wo.Z(e.targetId),Uu(t).Ao(e)}function yu(t,e){t.Wo.Z(e),Uu(t).Ro(e)}function vu(t){t.Wo=new $a({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Uu(t).start(),t.Qo.Mo()}function wu(t){return _u(t)&&!Uu(t).oo()&&t.qo.size>0}function _u(t){return 0===or(t).Ko.size}function Tu(t){t.Wo=void 0}async function Eu(t){t.qo.forEach(((e,n)=>{mu(t,e)}))}async function bu(t,e){Tu(t),wu(t)?(t.Qo.Bo(e),vu(t)):t.Qo.set("Unknown")}async function Iu(t,e,n){if(t.Qo.set("Online"),e instanceof Va&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.qo.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.qo.delete(s),t.Wo.removeTarget(s))}(t,e)}catch(n){tr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ku(t,n)}else if(e instanceof Ma?t.Wo.ct(e):e instanceof Ua?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(br.min()))try{const e=await xc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Wo.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qo.get(s);i&&t.qo.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qo.get(e);if(!n)return;t.qo.set(e,n.withResumeToken(Or.EMPTY_BYTE_STRING,n.snapshotVersion)),yu(t,e);const s=new Tc(n.target,e,1,n.sequenceNumber);mu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){tr("RemoteStore","Failed to raise snapshot:",e),await ku(t,e)}}async function ku(t,e,n){if(!yc(e))throw e;t.Ko.add(1),await fu(t),t.Qo.set("Offline"),n||(n=()=>xc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{tr("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await du(t)}))}function Su(t,e){return e().catch((n=>ku(t,n,e)))}async function Cu(t){const e=or(t),n=Vu(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Au(e);)try{const t=await Mc(e.localStore,s);if(null===t){0===e.Uo.length&&n.ho();break}s=t.batchId,Nu(e,t)}catch(t){await ku(e,t)}Ru(e)&&Du(e)}function Au(t){return _u(t)&&t.Uo.length<10}function Nu(t,e){t.Uo.push(e);const n=Vu(t);n.co()&&n.bo&&n.vo(e.mutations)}function Ru(t){return _u(t)&&!Vu(t).oo()&&t.Uo.length>0}function Du(t){Vu(t).start()}async function Ou(t){Vu(t).Do()}async function Lu(t){const e=Vu(t);for(const n of t.Uo)e.vo(n.mutations)}async function xu(t,e,n){const s=t.Uo.shift(),i=wc.from(s,e,n);await Su(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Cu(t)}async function Pu(t,e){e&&Vu(t).bo&&await async function(t,e){if(function(t){switch(t){default:return ir();case ar.CANCELLED:case ar.UNKNOWN:case ar.DEADLINE_EXCEEDED:case ar.RESOURCE_EXHAUSTED:case ar.INTERNAL:case ar.UNAVAILABLE:case ar.UNAUTHENTICATED:return!1;case ar.INVALID_ARGUMENT:case ar.NOT_FOUND:case ar.ALREADY_EXISTS:case ar.PERMISSION_DENIED:case ar.FAILED_PRECONDITION:case ar.ABORTED:case ar.OUT_OF_RANGE:case ar.UNIMPLEMENTED:case ar.DATA_LOSS:return!0}}(n=e.code)&&n!==ar.ABORTED){const n=t.Uo.shift();Vu(t).ao(),await Su(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Cu(t)}var n}(t,e),Ru(t)&&Du(t)}async function Mu(t,e){const n=or(t);n.asyncQueue.verifyOperationInProgress(),tr("RemoteStore","RemoteStore received new credentials");const s=_u(n);n.Ko.add(3),await fu(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await du(n)}function Uu(t){return t.zo||(t.zo=function(t,e,n){const s=or(t);return s.No(),new au(e,s.eo,s.authCredentials,s.appCheckCredentials,s.O,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Pr:Eu.bind(null,t),vr:bu.bind(null,t),To:Iu.bind(null,t)}),t.Go.push((async e=>{e?(t.zo.ao(),wu(t)?vu(t):t.Qo.set("Unknown")):(await t.zo.stop(),Tu(t))}))),t.zo}function Vu(t){return t.Ho||(t.Ho=function(t,e,n){const s=or(t);return s.No(),new cu(e,s.eo,s.authCredentials,s.appCheckCredentials,s.O,n)}(t.datastore,t.asyncQueue,{Pr:Ou.bind(null,t),vr:Pu.bind(null,t),So:Lu.bind(null,t),Vo:xu.bind(null,t)}),t.Go.push((async e=>{e?(t.Ho.ao(),await Cu(t)):(await t.Ho.stop(),t.Uo.length>0&&(tr("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))}))),t.Ho
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Fu{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Fu(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new cr(ar.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(er("AsyncQueue",`${e}: ${t}`),yc(t))return new cr(ar.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ju{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Kr.comparator(e.key,n.key):(t,e)=>Kr.comparator(t.key,e.key),this.keyedMap=Aa(),this.sortedSet=new _a(this.comparator)}static emptySet(t){return new ju(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ju))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ju;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qu{constructor(){this.Jo=new _a(Kr.comparator)}track(t){const e=t.doc.key,n=this.Jo.get(e);n?0!==t.type&&3===n.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==n.type?this.Jo=this.Jo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jo=this.Jo.remove(e):1===t.type&&2===n.type?this.Jo=this.Jo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):ir():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Bu{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Bu(t,e,ju.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ku{constructor(){this.Xo=void 0,this.listeners=[]}}class zu{constructor(){this.queries=new Ac((t=>xo(t)),Lo),this.onlineState="Unknown",this.Zo=new Set}}function Hu(t,e){const n=or(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.ec(t)&&(s=!0);i.Xo=t}}s&&Wu(n)}function Gu(t,e,n){const s=or(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Wu(t){t.Zo.forEach((t=>{t.next()}))}class Ju{constructor(t,e,n){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Bu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uc&&n||t.docs.isEmpty()&&"Offline"!==e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=Bu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xu{constructor(t){this.key=t}}class Qu{constructor(t){this.key=t}}class Yu{constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=Da(),this.mutatedKeys=Da(),this.mc=Uo(t),this.gc=new ju(this.mc)}get yc(){return this.dc}Ic(t,e){const n=e?e.Ec:new qu,s=e?e.gc:this.gc;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=No(this.query)&&s.size===this.query.limit?s.last():null,c=Ro(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),l=Mo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Tc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.mc(l,a)>0||c&&this.mc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),No(this.query)||Ro(this.query))for(;r.size>this.query.limit;){const t=No(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{gc:r,Ec:n,ks:o,mutatedKeys:i}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const i=t.Ec.Yo();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.mc(t.doc,e.doc))),this.Ac(n);const r=e?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==i.length||a?{snapshot:new Bu(this.query,t.gc,s,i,t.mutatedKeys,0===o,a,!1),Pc:r}:{Pc:r}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new qu,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach((t=>this.dc=this.dc.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.dc=this.dc.delete(t))),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=Da(),this.gc.forEach((t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))}));const e=[];return t.forEach((t=>{this.wc.has(t)||e.push(new Qu(t))})),this.wc.forEach((n=>{t.has(n)||e.push(new Xu(n))})),e}vc(t){this.dc=t.Ks,this.wc=Da();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return Bu.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Zu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tl{constructor(t){this.key=t,this.Sc=!1}}class el{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Dc={},this.Cc=new Ac((t=>xo(t)),Lo),this.Nc=new Map,this.xc=new Set,this.kc=new _a(Kr.comparator),this.Oc=new Map,this.Mc=new jc,this.$c={},this.Fc=new Map,this.Bc=Sc.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function nl(t,e){const n=function(t){const e=or(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=al.bind(null,e),e.Dc.To=Hu.bind(null,e.eventManager),e.Dc.qc=Gu.bind(null,e.eventManager),e}(t);let s,i;const r=n.Cc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const t=await function(t,e){const n=or(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Un.getTargetData(t,e).next((i=>i?(s=i,mc.resolve(s)):n.Un.allocateTargetId(t).next((i=>(s=new Tc(e,i,0,t.currentSequenceNumber),n.Un.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ms.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.$s.set(e,t.targetId)),t}))}(n.localStore,Oo(e));n.isPrimaryClient&&pu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Uc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Ic(n);i.ks&&(i=await Vc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ic(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return pl(t,e.targetId,o.Pc),o.snapshot}(t,e,n,s);const i=await Vc(t.localStore,e,!0),r=new Yu(e,i.Ks),o=r.Ic(i.documents),a=Pa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);pl(t,n,c.Pc);const u=new Zu(e,n,r);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}(n,e,s,"current"===r)}return i}async function sl(t,e){const n=or(t),s=n.Cc.get(e),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter((t=>!Lo(t,e)))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),gu(n.remoteStore,s.targetId),dl(n,s.targetId)})).catch(Cc)):(dl(n,s.targetId),await Uc(n.localStore,s.targetId,!0))}async function il(t,e,n){const s=function(t){const e=or(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ul.bind(null,e),e}(t);try{const t=await function(t,e){const n=or(t),s=Er.now(),i=e.reduce(((t,e)=>t.add(e.key)),Da());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Us.Es(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=oa(t,r.get(t.key));null!=e&&o.push(new la(t.key,e,ro(e.value.mapValue),ea.exists(!0)))}return n.gs.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.$c[t.currentUser.toKey()];s||(s=new _a(_r)),s=s.insert(e,n),t.$c[t.currentUser.toKey()]=s}(s,t.batchId,n),await yl(s,t.changes),await Cu(s.remoteStore)}catch(t){const e=$u(t,"Failed to persist write");n.reject(e)}}async function rl(t,e){const n=or(t);try{const t=await Pc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Oc.get(e);s&&(rr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Sc=!0:t.modifiedDocuments.size>0?rr(s.Sc):t.removedDocuments.size>0&&(rr(s.Sc),s.Sc=!1))})),await yl(n,t,e)}catch(t){await Cc(t)}}function ol(t,e,n){const s=or(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Cc.forEach(((n,s)=>{const i=s.view.tc(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=or(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.tc(e)&&(s=!0)})),s&&Wu(n)}(s.eventManager,e),t.length&&s.Dc.To(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function al(t,e,n){const s=or(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Oc.get(e),r=i&&i.key;if(r){let t=new _a(Kr.comparator);t=t.insert(r,oo.newNoDocument(r,br.min()));const n=Da().add(r),i=new xa(br.min(),new Map,new ba(_r),t,n);await rl(s,i),s.kc=s.kc.remove(r),s.Oc.delete(e),ml(s)}else await Uc(s.localStore,e,!1).then((()=>dl(s,e,n))).catch(Cc)}async function cl(t,e){const n=or(t),s=e.batch.batchId;try{const t=await function(t,e){const n=or(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=mc.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);rr(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.gs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,s)))}))}(n.localStore,e);hl(n,s,null),ll(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await yl(n,t)}catch(t){await Cc(t)}}async function ul(t,e,n){const s=or(t);try{const t=await function(t,e){const n=or(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.gs.lookupMutationBatch(t,e).next((e=>(rr(null!==e),s=e.keys(),n.gs.removeMutationBatch(t,e)))).next((()=>n.gs.performConsistencyCheck(t))).next((()=>n.Us.Es(t,s)))}))}(s.localStore,e);hl(s,e,n),ll(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await yl(s,t)}catch(n){await Cc(n)}}function ll(t,e){(t.Fc.get(e)||[]).forEach((t=>{t.resolve()})),t.Fc.delete(e)}function hl(t,e,n){const s=or(t);let i=s.$c[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.$c[s.currentUser.toKey()]=i}}function dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach((e=>{t.Mc.containsKey(e)||fl(t,e)}))}function fl(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);null!==n&&(gu(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),ml(t))}function pl(t,e,n){for(const s of n)s instanceof Xu?(t.Mc.addReference(s.key,e),gl(t,s)):s instanceof Qu?(tr("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||fl(t,s.key)):ir()}function gl(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(tr("SyncEngine","New document in limbo: "+n),t.xc.add(s),ml(t))}function ml(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new Kr(Ar.fromString(e)),s=t.Bc.next();t.Oc.set(s,new tl(n)),t.kc=t.kc.insert(n,s),pu(t.remoteStore,new Tc(Oo(Ao(n.path)),s,2,yr.A))}}async function yl(t,e,n){const s=or(t),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach(((t,a)=>{o.push(s.Uc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Rc.Ss(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Dc.To(i),await async function(t,e){const n=or(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mc.forEach(e,(e=>mc.forEach(e.vs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>mc.forEach(e.Vs,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!yc(t))throw t;tr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ms.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ms=n.Ms.insert(e,i)}}}(s.localStore,r))}async function vl(t,e){const n=or(t);if(!n.currentUser.isEqual(e)){tr("SyncEngine","User change. New user:",e.toKey());const t=await Lc(n.localStore,e);n.currentUser=e,function(t,e){t.Fc.forEach((t=>{t.forEach((t=>{t.reject(new cr(ar.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Fc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await yl(n,t.qs)}}function wl(t,e){const n=or(t),s=n.Oc.get(e);if(s&&s.Sc)return Da().add(s.key);{let t=Da();const s=n.Nc.get(e);if(!s)return t;for(const e of s){const s=n.Cc.get(e);t=t.unionWith(s.view.yc)}return t}}class _l{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=iu(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return function(t,e,n,s){return new Oc(t,e,n,s)}(this.persistence,new Dc,t.initialUser,this.O)}jc(t){return new Gc(Jc.bi,this.O)}Gc(t){return new Qc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ol(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vl.bind(null,this.syncEngine),await async function(t,e){const n=or(t);e?(n.Ko.delete(2),await du(n)):e||(n.Ko.add(2),await fu(n),n.Qo.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zu}createDatastore(t){const e=iu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new nu(s));var s;return function(t,e,n,s){return new uu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>ol(this.syncEngine,t,0),r=Zc.Vt()?new Zc:new Yc,new hu(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new el(t,e,n,s,i,r);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=or(t);tr("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await fu(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class El{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Xi.UNAUTHENTICATED,this.clientId=wr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{tr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(tr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new cr(ar.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=$u(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(tr("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),tr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Lc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new _l)),t.offlineComponents}(t);tr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Mu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Mu(e.remoteStore,n))),t.onlineComponents=e}async function kl(t){return t.onlineComponents||(tr("FirestoreClient","Using default OnlineComponentProvider"),await Il(t,new Tl)),t.onlineComponents}async function Sl(t){const e=await kl(t),n=e.eventManager;return n.onListen=nl.bind(null,e.syncEngine),n.onUnlisten=sl.bind(null,e.syncEngine),n}function Cl(t,e,n={}){const s=new ur;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new El({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=or(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o))),n.fromCache&&"server"===s.source?i.reject(new cr(ar.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ju(n,r,{includeMetadataChanges:!0,uc:!0});return async function(t,e){const n=or(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ku),i)try{r.Xo=await n.onListen(s)}catch(t){const n=$u(t,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&Wu(n)}(t,o)}(await Sl(t),t.asyncQueue,e,n,s))),s.promise}const Al=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nl(t,e,n){if(!n)throw new cr(ar.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rl(t){if(!Kr.isDocumentKey(t))throw new cr(ar.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dl(t){if(Kr.isDocumentKey(t))throw new cr(ar.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ol(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ir()}function Ll(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new cr(ar.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ol(t);throw new cr(ar.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new cr(ar.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new cr(ar.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new cr(ar.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,t instanceof jr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new cr(ar.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(t.options.projectId)}(t))}get app(){if(!this._app)throw new cr(ar.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new cr(ar.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new hr;switch(t.type){case"gapi":const e=t.client;return rr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new pr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new cr(ar.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Al.get(t);e&&(tr("ComponentProvider","Removing Datastore"),Al.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ml{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ml(this.firestore,t,this._key)}}class Ul{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ul(this.firestore,t,this._query)}}class Vl extends Ul{constructor(t,e,n){super(t,e,Ao(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ml(this.firestore,null,new Kr(t))}withConverter(t){return new Vl(this.firestore,t,this._path)}}function Fl(t,e,...n){if(t=ht(t),Nl("collection","path",e),t instanceof Pl){const s=Ar.fromString(e,...n);return Dl(s),new Vl(t,null,s)}{if(!(t instanceof Ml||t instanceof Vl))throw new cr(ar.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ar.fromString(e,...n));return Dl(s),new Vl(t.firestore,null,s)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $l{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new ru(this,"async_queue_retry"),this.yu=()=>{const t=su();t&&tr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=su();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=su();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise((()=>{}));const e=new ur;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.lu.push(t),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!yc(t))throw t;tr("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(t){const e=this.hu.then((()=>(this.wu=!0,t().catch((t=>{this._u=t,this.wu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw er("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.wu=!1,t))))));return this.hu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const s=Fu.createAndSchedule(this,t,e,n,(t=>this.Tu(t)));return this.du.push(s),s}pu(){this._u&&ir()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()}))}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class jl extends Pl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new $l,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Bl(this),this._firestoreClient.terminate()}}function ql(t){return t._firestoreClient||Bl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bl(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new $r(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bl(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new cr(ar.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zl(Or.fromBase64String(t))}catch(t){throw new cr(ar.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new zl(Or.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hl{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new cr(ar.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new cr(ar.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _r(this._lat,t._lat)||_r(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wl=/^__.*__$/;class Jl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new la(t,this.data,this.fieldMask,e,this.fieldTransforms):new ua(t,this.data,e,this.fieldTransforms)}}function Xl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir()}}class Ql{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.O=n,this.ignoreUndefinedProperties=s,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new Ql(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Cu:!1});return s.Nu(t),s}xu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Su({path:n,Cu:!1});return s.vu(),s}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return ch(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(Xl(this.Vu)&&Wl.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class Yl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=n||iu(t)}Fu(t,e,n,s=!1){return new Ql({Vu:t,methodName:e,$u:n,path:Rr.emptyPath(),Cu:!1,Mu:s},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Zl(t){const e=t._freezeSettings(),n=iu(t._databaseId);return new Yl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function th(t,e,n,s,i,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,i);ih("Data must be an object, but it was:",o,s);const a=nh(s,o);let c,u;if(r.merge)c=new Dr(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=rh(e,s,n);if(!o.contains(i))throw new cr(ar.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);uh(t,i)||t.push(i)}c=new Dr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Jl(new io(a),c,u)}function eh(t,e){if(sh(t=ht(t)))return ih("Unsupported field value:",e,t),nh(t,e);if(t instanceof Hl)return function(t,e){if(!Xl(e.Vu))throw e.Ou(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ou(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=eh(i,e.ku(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ht(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return jo(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Er.fromDate(t);return{timestampValue:Ha(e.O,n)}}if(t instanceof Er){const n=new Er(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ha(e.O,n)}}if(t instanceof Gl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof zl)return{bytesValue:Ga(e.O,t._byteString)};if(t instanceof Ml){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou(`Unsupported field value: ${Ol(t)}`)}(t,e)}function nh(t,e){const n={};return Sr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,((t,s)=>{const i=eh(s,e.Du(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function sh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Er||t instanceof Gl||t instanceof zl||t instanceof Ml||t instanceof Hl)}function ih(t,e,n){if(!sh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ol(n);throw"an object"===s?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function rh(t,e,n){if((e=ht(e))instanceof Kl)return e._internalPath;if("string"==typeof e)return ah(t,e);throw ch("Field path arguments must be of type string or ",t,!1,void 0,n)}const oh=new RegExp("[~\\*/\\[\\]]");function ah(t,e,n){if(e.search(oh)>=0)throw ch(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch(s){throw ch(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ch(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new cr(ar.INVALID_ARGUMENT,a+t+c)}function uh(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lh{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ml(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new hh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class hh extends lh{data(){return super.data()}}function dh(t,e){return"string"==typeof e?ah(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ph extends lh{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gh extends ph{data(t={}){return super.data(t)}}class mh{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fh(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gh(this._firestore,this._userDataWriter,n.key,n,new fh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new cr(ar.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new gh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new gh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:yh(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vh extends
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class{convertValue(t,e="none"){switch(zr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ir()}}convertObject(t,e){const n={};return kr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Gl(Pr(t.latitude),Pr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Fr(t));default:return null}}convertTimestamp(t){const e=xr(t);return new Er(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ar.fromString(t);rr(gc(n));const s=new jr(n.get(1),n.get(3)),i=new Kr(n.popFirst(5));return s.isEqual(e)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new zl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ml(this.firestore,null,e)}}function wh(t){t=Ll(t,Ul);const e=Ll(t.firestore,jl),n=ql(e),s=new vh(e);return function(t){if(Ro(t)&&0===t.explicitOrderBy.length)throw new cr(ar.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Cl(n,t._query).then((n=>new mh(e,s,t,n)))}function _h(t,e){const n=Ll(t.firestore,jl),s=function(t,e,...n){if(t=ht(t),1===arguments.length&&(e=wr.R()),Nl("doc","path",e),t instanceof Pl){const s=Ar.fromString(e,...n);return Rl(s),new Ml(t,null,new Kr(s))}{if(!(t instanceof Ml||t instanceof Vl))throw new cr(ar.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ar.fromString(e,...n));return Rl(s),new Ml(t.firestore,t instanceof Vl?t.converter:null,new Kr(s))}}(t),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e);return function(t,e){return function(t,e){const n=new ur;return t.asyncQueue.enqueueAndForget((async()=>il(await function(t){return kl(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(ql(t),e)}(n,[th(Zl(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,ea.exists(!1))]).then((()=>s))}function Th(t,e,n){const s=t.slice();return s[2]=e[n][0],s[3]=e[n][1],s}function Eh(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function bh(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Ih(t){let e,n,s=t[3]+"";return{c(){e=h("span"),n=d(s),m(e,"class","md:hidden")},m(t,s){c(t,e,s),a(e,n)},p(t,e){2&e&&s!==(s=t[3]+"")&&v(n,s)},d(t){t&&u(e)}}}function kh(t){let e,n=t[0][t[2]]+"";return{c(){e=d(n)},m(t,n){c(t,e,n)},p(t,s){3&s&&n!==(n=t[0][t[2]]+"")&&v(e,n)},d(t){t&&u(e)}}}function Sh(e){let n;return{c(){n=d("👎")},m(t,e){c(t,n,e)},p:t,d(t){t&&u(n)}}}function Ch(e){let n;return{c(){n=d("👍")},m(t,e){c(t,n,e)},p:t,d(t){t&&u(n)}}}function Ah(t){let e,n={length:t[0][t[2]]},s=[];for(let e=0;e<n.length;e+=1)s[e]=Rh(Eh(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=p()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);c(t,e,n)},p(t,i){if(3&i){const i=n.length;let r;for(n={length:t[0][t[2]]},r=i;r<n.length;r+=1)Eh(t,n,r),s[r]||(s[r]=Rh(),s[r].c(),s[r].m(e.parentNode,e));for(r=n.length;r<i;r+=1)s[r].d(1);s.length=n.length}},d(t){l(s,t),t&&u(e)}}}function Nh(t){let e,n={length:t[0][t[2]]},s=[];for(let e=0;e<n.length;e+=1)s[e]=Dh(bh(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=p()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);c(t,e,n)},p(t,i){if(3&i){const i=n.length;let r;for(n={length:t[0][t[2]]},r=i;r<n.length;r+=1)bh(t,n,r),s[r]||(s[r]=Dh(),s[r].c(),s[r].m(e.parentNode,e));for(r=n.length;r<i;r+=1)s[r].d(1);s.length=n.length}},d(t){l(s,t),t&&u(e)}}}function Rh(t){let e;return{c(){e=d("🍸")},m(t,n){c(t,e,n)},d(t){t&&u(e)}}}function Dh(t){let e;return{c(){e=d("🍺")},m(t,n){c(t,e,n)},d(t){t&&u(e)}}}function Oh(t){let e,n,s,i,r,o,l="name"!==t[2]&&Ih(t);function d(t,e){return"drink_quality"===t[2]?Nh:"drink_choice"===t[2]?Ah:!0===t[0][t[2]]?Ch:!1===t[0][t[2]]?Sh:kh}let p=d(t),g=p(t);return{c(){e=h("span"),l&&l.c(),n=f(),s=h("span"),g.c(),r=f(),m(s,"class",i="listing__value "+("max_group"===t[2]?"listing__value--max-group":"")+" svelte-vmvirr"),m(e,"class",o="listing "+("name"===t[2]?"listing--name":"")+" svelte-vmvirr")},m(t,i){c(t,e,i),l&&l.m(e,null),a(e,n),a(e,s),g.m(s,null),a(e,r)},p(t,r){"name"!==t[2]?l?l.p(t,r):(l=Ih(t),l.c(),l.m(e,n)):l&&(l.d(1),l=null),p===(p=d(t))&&g?g.p(t,r):(g.d(1),g=p(t),g&&(g.c(),g.m(s,null))),2&r&&i!==(i="listing__value "+("max_group"===t[2]?"listing__value--max-group":"")+" svelte-vmvirr")&&m(s,"class",i),2&r&&o!==(o="listing "+("name"===t[2]?"listing--name":"")+" svelte-vmvirr")&&m(e,"class",o)},d(t){t&&u(e),l&&l.d(),g.d()}}}function Lh(e){let n,s=Object.entries(e[1]),i=[];for(let t=0;t<s.length;t+=1)i[t]=Oh(Th(e,s,t));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();n=p()},m(t,e){for(let n=0;n<i.length;n+=1)i[n].m(t,e);c(t,n,e)},p(t,[e]){if(3&e){let r;for(s=Object.entries(t[1]),r=0;r<s.length;r+=1){const o=Th(t,s,r);i[r]?i[r].p(o,e):(i[r]=Oh(o),i[r].c(),i[r].m(n.parentNode,n))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},i:t,o:t,d(t){l(i,t),t&&u(n)}}}function xh(t,e,n){let{pubData:s}=e,{headings:i}=e;return t.$$set=t=>{"pubData"in t&&n(0,s=t.pubData),"headings"in t&&n(1,i=t.headings)},[s,i]}!function(t,e=!0){Qi="9.6.7",Dt(new dt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new jl(s,new dr(t.getProvider("auth-internal")),new mr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),Ut(Ji,"3.4.5",t),Ut(Ji,"3.4.5","esm2017")}();class Ph extends J{constructor(t){super(),W(this,t,xh,Lh,r,{pubData:0,headings:1})}}function Mh(t){let e;return{c(){e=d("+")},m(t,n){c(t,e,n)},d(t){t&&u(e)}}}function Uh(t){let e;return{c(){e=d("-")},m(t,n){c(t,e,n)},d(t){t&&u(e)}}}function Vh(t){let e,n,i,r,o,l,d,p,v,T,E,b,I,k,S,C,A,N,R,O,L,x,P,M,U,V,F,$;return{c(){e=h("div"),n=h("label"),n.textContent="Group size",i=f(),r=h("input"),o=f(),l=h("div"),d=h("label"),d.textContent="Food?",p=f(),v=h("select"),T=h("option"),T.textContent="Don't care",b=h("option"),b.textContent="Yes",k=h("option"),k.textContent="No",C=f(),A=h("div"),N=h("label"),N.textContent="Shows sport?",R=f(),O=h("select"),L=h("option"),L.textContent="Don't care",P=h("option"),P.textContent="Yes",U=h("option"),U.textContent="No",m(n,"for","max_group"),m(n,"class","svelte-9sz64g"),m(r,"type","number"),m(r,"id","max_group"),m(r,"class","filters__input svelte-9sz64g"),m(e,"class","filters__section svelte-9sz64g"),m(d,"for","food"),m(d,"class","svelte-9sz64g"),T.__value=E="both",T.value=T.__value,b.__value=I=!0,b.value=b.__value,k.__value=S=!1,k.value=k.__value,m(v,"name","food"),m(v,"class","filters__input svelte-9sz64g"),void 0===t[1]&&D((()=>t[6].call(v))),m(l,"class","filters__section svelte-9sz64g"),m(N,"for","sport"),m(N,"class","svelte-9sz64g"),L.__value=x="both",L.value=L.__value,P.__value=M=!0,P.value=P.__value,U.__value=V=!1,U.value=U.__value,m(O,"name","food"),m(O,"class","filters__input svelte-9sz64g"),void 0===t[2]&&D((()=>t[7].call(O))),m(A,"class","filters__section svelte-9sz64g")},m(s,u){c(s,e,u),a(e,n),a(e,i),a(e,r),w(r,t[0]),c(s,o,u),c(s,l,u),a(l,d),a(l,p),a(l,v),a(v,T),a(v,b),a(v,k),_(v,t[1]),c(s,C,u),c(s,A,u),a(A,N),a(A,R),a(A,O),a(O,L),a(O,P),a(O,U),_(O,t[2]),F||($=[g(r,"input",t[5]),g(v,"change",t[6]),g(O,"change",t[7])],F=!0)},p(t,e){1&e&&y(r.value)!==t[0]&&w(r,t[0]),2&e&&_(v,t[1]),4&e&&_(O,t[2])},d(t){t&&u(e),t&&u(o),t&&u(l),t&&u(C),t&&u(A),F=!1,s($)}}}function Fh(e){let n,s,i,r,o,l;function p(t,e){return t[3]?Uh:Mh}let y=p(e),v=y(e),w=e[3]&&Vh(e);return{c(){n=h("section"),s=h("h2"),i=d("Filters \r\n\r\n        "),v.c(),r=f(),w&&w.c(),m(s,"class","text-2xl md:hidden text-center mb-4 border-y-2"),m(n,"class","filters flex flex-col md:flex-row justify-center")},m(t,u){c(t,n,u),a(n,s),a(s,i),v.m(s,null),a(n,r),w&&w.m(n,null),o||(l=g(s,"click",e[4]),o=!0)},p(t,[e]){y!==(y=p(t))&&(v.d(1),v=y(t),v&&(v.c(),v.m(s,null))),t[3]?w?w.p(t,e):(w=Vh(t),w.c(),w.m(n,null)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&u(n),v.d(),w&&w.d(),o=!1,l()}}}function $h(t,e,n){let{groupSize:s=5}=e,{food:i="both"}=e,{sport:r="both"}=e,o=!0;return t.$$set=t=>{"groupSize"in t&&n(0,s=t.groupSize),"food"in t&&n(1,i=t.food),"sport"in t&&n(2,r=t.sport)},[s,i,r,o,()=>{n(3,o=!o)},function(){s=y(this.value),n(0,s)},function(){i=T(this),n(1,i)},function(){r=T(this),n(2,r)}]}class jh extends J{constructor(t){super(),W(this,t,$h,Fh,r,{groupSize:0,food:1,sport:2})}}function qh(t,e,n){const s=t.slice();return s[14]=e[n],s}function Bh(t,e,n){const s=t.slice();return s[17]=e[n][0],s[18]=e[n][1],s}function Kh(e){let n;return{c(){n=h("p"),n.innerHTML='Sorry there are no pubs that match your criteria <span class="pub-listings__errormoji svelte-4sfbto">🍺</span>',m(n,"class","pub-listings__info svelte-4sfbto")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function zh(e){let n;return{c(){n=h("p"),n.textContent="Loading",m(n,"class","pub-listings__info svelte-4sfbto")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function Hh(t){let e,n,s,i=Object.entries(t[7]),r=[];for(let e=0;e<i.length;e+=1)r[e]=Gh(Bh(t,i,e));let o=t[6],d=[];for(let e=0;e<o.length;e+=1)d[e]=Wh(qh(t,o,e));const p=t=>q(d[t],1,1,(()=>{d[t]=null}));return{c(){e=h("div");for(let t=0;t<r.length;t+=1)r[t].c();n=f();for(let t=0;t<d.length;t+=1)d[t].c();m(e,"class","pub-listings__container svelte-4sfbto"),m(e,"style",t[4])},m(t,i){c(t,e,i);for(let t=0;t<r.length;t+=1)r[t].m(e,null);a(e,n);for(let t=0;t<d.length;t+=1)d[t].m(e,null);s=!0},p(t,a){if(128&a){let s;for(i=Object.entries(t[7]),s=0;s<i.length;s+=1){const o=Bh(t,i,s);r[s]?r[s].p(o,a):(r[s]=Gh(o),r[s].c(),r[s].m(e,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=i.length}if(192&a){let n;for(o=t[6],n=0;n<o.length;n+=1){const s=qh(t,o,n);d[n]?(d[n].p(s,a),j(d[n],1)):(d[n]=Wh(s),d[n].c(),j(d[n],1),d[n].m(e,null))}for(F(),n=o.length;n<d.length;n+=1)p(n);$()}(!s||16&a)&&m(e,"style",t[4])},i(t){if(!s){for(let t=0;t<o.length;t+=1)j(d[t]);s=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)q(d[t]);s=!1},d(t){t&&u(e),l(r,t),l(d,t)}}}function Gh(e){let n,s,i=e[18]+"";return{c(){n=h("span"),s=d(i),m(n,"class","pub-listings__header svelte-4sfbto")},m(t,e){c(t,n,e),a(n,s)},p:t,d(t){t&&u(n)}}}function Wh(t){let e,n;return e=new Ph({props:{pubData:t[14],headings:t[7]}}),{c(){K(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.pubData=t[14]),e.$set(s)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Jh(t){let e,n,s,i,r,o,l,d,p,g,y,v;function w(e){t[10](e)}function _(e){t[11](e)}function T(e){t[12](e)}function E(e){t[13](e)}let b={};void 0!==t[3]&&(b.name=t[3]),void 0!==t[0]&&(b.groupSize=t[0]),void 0!==t[1]&&(b.food=t[1]),void 0!==t[2]&&(b.sport=t[2]),n=new jh({props:b}),S.push((()=>B(n,"name",w))),S.push((()=>B(n,"groupSize",_))),S.push((()=>B(n,"food",T))),S.push((()=>B(n,"sport",E)));const I=[Hh,zh,Kh],k=[];function C(t,e){return 96&e&&(d=null),32&e&&(p=null),null==d&&(d=!!(t[6].length>0&&t[5]())),d?0:(null==p&&(p=!t[5]()),p?1:2)}return g=C(t,-1),y=k[g]=I[g](t),{c(){e=h("section"),K(n.$$.fragment),l=f(),y.c(),m(e,"class","pub-listings")},m(t,s){c(t,e,s),z(n,e,null),a(e,l),k[g].m(e,null),v=!0},p(t,[a]){const c={};!s&&8&a&&(s=!0,c.name=t[3],O((()=>s=!1))),!i&&1&a&&(i=!0,c.groupSize=t[0],O((()=>i=!1))),!r&&2&a&&(r=!0,c.food=t[1],O((()=>r=!1))),!o&&4&a&&(o=!0,c.sport=t[2],O((()=>o=!1))),n.$set(c);let u=g;g=C(t,a),g===u?k[g].p(t,a):(F(),q(k[u],1,1,(()=>{k[u]=null})),$(),y=k[g],y?y.p(t,a):(y=k[g]=I[g](t),y.c()),j(y,1),y.m(e,null))},i(t){v||(j(n.$$.fragment,t),j(y),v=!0)},o(t){q(n.$$.fragment,t),q(y),v=!1},d(t){t&&u(e),H(n),k[g].d()}}}function Xh(t,e,n){let s,i,r,o,a,c,u,l,{data:h}=e;return t.$$set=t=>{"data"in t&&n(8,h=t.data)},t.$$.update=()=>{263&t.$$.dirty&&n(6,s=h.filter((t=>(void 0===a||t.max_group>=a)&&(void 0===c||t.food===c||"both"===c)&&(void 0===u||t.sport===u||"both"===u)))),256&t.$$.dirty&&n(5,i=()=>{if(h.length>0)return n(9,l=Object.keys(h[0]).length-3),!0}),512&t.$$.dirty&&n(4,r=`grid-template-columns: repeat(${l}, 1fr);`)},[a,c,u,o,r,i,s,{name:"Name",max_group:"Max group size",food:"Food?",sport:"Sport?",music:"Music",drink_quality:"Drink quality",drink_choice:"Drink variety"},h,l,function(t){o=t,n(3,o)},function(t){a=t,n(0,a)},function(t){c=t,n(1,c)},function(t){u=t,n(2,u)}]}class Qh extends J{constructor(t){super(),W(this,t,Xh,Jh,r,{data:8})}}function Yh(e){let n,i,r,o,l,d,p,y,v,T,E,b,I,k,S,C,A,N,R,O,L,x,P,M,U,V,F,$,j,q,B,K,z,H,G,W,J,X,Q,Y,Z,tt,et,nt,st,it,rt,ot,at,ct,ut,lt,ht,dt,ft,pt,gt,mt,yt,vt;return{c(){n=h("section"),i=h("p"),i.textContent="Close x",r=f(),o=h("h1"),o.textContent="Add a pub",l=f(),d=h("form"),p=h("div"),y=h("label"),y.textContent="Name",v=f(),T=h("input"),E=f(),b=h("div"),I=h("label"),I.textContent="Max group size",k=f(),S=h("input"),C=f(),A=h("div"),N=h("label"),N.textContent="Food",R=f(),O=h("select"),L=h("option"),L.textContent="Yes",x=h("option"),x.textContent="No",P=f(),M=h("div"),U=h("label"),U.textContent="Sport",V=f(),F=h("select"),$=h("option"),$.textContent="Yes",j=h("option"),j.textContent="No",q=f(),B=h("div"),K=h("label"),K.textContent="Music",z=f(),H=h("select"),G=h("option"),G.textContent="Yes",W=h("option"),W.textContent="No",J=f(),X=h("div"),Q=h("label"),Q.textContent="Drink quality",Y=f(),Z=h("select"),tt=h("option"),tt.textContent="1",et=h("option"),et.textContent="2",nt=h("option"),nt.textContent="3",st=h("option"),st.textContent="4",it=h("option"),it.textContent="5",rt=f(),ot=h("div"),at=h("label"),at.textContent="Drink variety",ct=f(),ut=h("select"),lt=h("option"),lt.textContent="1",ht=h("option"),ht.textContent="2",dt=h("option"),dt.textContent="3",ft=h("option"),ft.textContent="4",pt=h("option"),pt.textContent="5",gt=f(),mt=h("input"),m(i,"class","add-pub__close svelte-mksk70"),m(y,"for","name"),m(T,"type","text"),m(T,"name","name"),m(T,"id","name"),m(T,"class","svelte-mksk70"),m(p,"class","add-pub__input-group svelte-mksk70"),m(I,"for","max_group"),m(S,"type","text"),m(S,"name","max_group"),m(S,"id","max_group"),m(S,"class","svelte-mksk70"),m(b,"class","add-pub__input-group svelte-mksk70"),m(N,"for","food"),L.__value="true",L.value=L.__value,x.__value="false",x.value=x.__value,m(O,"name","food"),m(O,"id","food"),m(O,"class","svelte-mksk70"),void 0===e[2]&&D((()=>e[12].call(O))),m(A,"class","add-pub__input-group svelte-mksk70"),m(U,"for","sport"),$.__value="true",$.value=$.__value,j.__value="false",j.value=j.__value,m(F,"name","sport"),m(F,"id","sport"),m(F,"class","svelte-mksk70"),void 0===e[3]&&D((()=>e[13].call(F))),m(M,"class","add-pub__input-group svelte-mksk70"),m(K,"for","music"),G.__value="true",G.value=G.__value,W.__value="false",W.value=W.__value,m(H,"name","music"),m(H,"id","music"),m(H,"class","svelte-mksk70"),void 0===e[4]&&D((()=>e[14].call(H))),m(B,"class","add-pub__input-group svelte-mksk70"),m(Q,"for","drink_quality"),tt.__value="1",tt.value=tt.__value,et.__value="2",et.value=et.__value,nt.__value="3",nt.value=nt.__value,st.__value="4",st.value=st.__value,it.__value="5",it.value=it.__value,m(Z,"name","drink_quality"),m(Z,"id","drink_quality"),m(Z,"class","svelte-mksk70"),void 0===e[5]&&D((()=>e[15].call(Z))),m(X,"class","add-pub__input-group svelte-mksk70"),m(at,"for","drink_choice"),lt.__value="1",lt.value=lt.__value,ht.__value="2",ht.value=ht.__value,dt.__value="3",dt.value=dt.__value,ft.__value="4",ft.value=ft.__value,pt.__value="5",pt.value=pt.__value,m(ut,"name","drink_choice"),m(ut,"id","drink_choice"),m(ut,"class","svelte-mksk70"),void 0===e[6]&&D((()=>e[16].call(ut))),m(ot,"class","add-pub__input-group svelte-mksk70"),m(mt,"type","submit"),mt.value="submit",m(d,"class","add-pub__form svelte-mksk70"),m(n,"class","add-pub__container svelte-mksk70")},m(t,s){c(t,n,s),a(n,i),a(n,r),a(n,o),a(n,l),a(n,d),a(d,p),a(p,y),a(p,v),a(p,T),w(T,e[0]),a(d,E),a(d,b),a(b,I),a(b,k),a(b,S),w(S,e[1]),a(d,C),a(d,A),a(A,N),a(A,R),a(A,O),a(O,L),a(O,x),_(O,e[2]),a(d,P),a(d,M),a(M,U),a(M,V),a(M,F),a(F,$),a(F,j),_(F,e[3]),a(d,q),a(d,B),a(B,K),a(B,z),a(B,H),a(H,G),a(H,W),_(H,e[4]),a(d,J),a(d,X),a(X,Q),a(X,Y),a(X,Z),a(Z,tt),a(Z,et),a(Z,nt),a(Z,st),a(Z,it),_(Z,e[5]),a(d,rt),a(d,ot),a(ot,at),a(ot,ct),a(ot,ut),a(ut,lt),a(ut,ht),a(ut,dt),a(ut,ft),a(ut,pt),_(ut,e[6]),a(d,gt),a(d,mt),yt||(vt=[g(i,"click",e[8]),g(T,"input",e[10]),g(S,"input",e[11]),g(O,"change",e[12]),g(F,"change",e[13]),g(H,"change",e[14]),g(Z,"change",e[15]),g(ut,"change",e[16]),g(d,"submit",e[7])],yt=!0)},p(t,[e]){1&e&&T.value!==t[0]&&w(T,t[0]),2&e&&S.value!==t[1]&&w(S,t[1]),4&e&&_(O,t[2]),8&e&&_(F,t[3]),16&e&&_(H,t[4]),32&e&&_(Z,t[5]),64&e&&_(ut,t[6])},i:t,o:t,d(t){t&&u(n),yt=!1,s(vt)}}}function Zh(t,e,n){let{formOpen:s=!1}=e;const i=I();let r,o,a,c,u,l,h,d={};return t.$$set=t=>{"formOpen"in t&&n(9,s=t.formOpen)},[r,o,a,c,u,l,h,t=>{t.preventDefault(),d={name:r,max_group:o,food:a,sport:c,music:u,non_beer:l,drink_choice:h},i("form-submit",d)},()=>{n(9,s=!1)},s,function(){r=this.value,n(0,r)},function(){o=this.value,n(1,o)},function(){a=T(this),n(2,a)},function(){c=T(this),n(3,c)},function(){u=T(this),n(4,u)},function(){l=T(this),n(5,l)},function(){h=T(this),n(6,h)}]}class td extends J{constructor(t){super(),W(this,t,Zh,Yh,r,{formOpen:9})}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function ed(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]])}return n}function nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sd=nd,id=new it("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rd=new Tt("@firebase/auth");function od(t,...e){rd.logLevel<=mt.ERROR&&rd.error(`Auth (9.6.7): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ad(t,...e){throw ld(t,...e)}function cd(t,...e){return ld(t,...e)}function ud(t,e,n){const s=Object.assign(Object.assign({},sd()),{[e]:n});return new it("auth","Firebase",s).create(e,{appName:t.name})}function ld(t,...e){if("string"!=typeof t){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return id.create(t,...e)}function hd(t,e,...n){if(!t)throw ld(e,...n)}function dd(t){const e="INTERNAL ASSERTION FAILED: "+t;throw od(e),new Error(e)}function fd(t,e){t||dd(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pd=new Map;function gd(t){fd(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(fd(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function md(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function yd(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vd(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==yd()&&"https:"!==yd()&&!tt()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wd{constructor(t,e){this.shortDelay=t,this.longDelay=e,fd(e>t,"Short delay should be less than long delay!"),this.isMobile=Z()||et()}get(){return vd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _d(t,e){fd(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Td{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ed={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},bd=new wd(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Id(t,e,n,s,i={}){return kd(t,i,(async()=>{let i={},r={};s&&("GET"===e?r=s:i={body:JSON.stringify(s)});const o=ct(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Td.fetch()(Sd(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ed),e);try{const e=new Cd(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw Ad(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ad(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Ad(t,"email-already-in-use",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ud(t,a,o);ad(t,a)}}catch(e){if(e instanceof st)throw e;ad(t,"network-request-failed")}}function Sd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?_d(t.config,i):`${t.config.apiScheme}://${i}`}class Cd{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(cd(this.auth,"network-request-failed"))),bd.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ad(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=cd(t,e,s);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Nd(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Rd(t){return 1e3*Number(t)}function Dd(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return od("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return X.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(od("Failed to decode base64 JWT payload"),null)}catch(t){return od("Caught error parsing JWT payload as JSON",t),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Od(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof st&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ld{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xd{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nd(this.lastLoginAt),this.creationTime=Nd(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Pd(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Od(t,async function(t,e){return Id(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:s}));hd(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=ed(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xd(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Md{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){hd(t.idToken,"internal-error"),hd(void 0!==t.idToken,"internal-error"),hd(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Dd(t);return hd(e,"internal-error"),hd(void 0!==e.exp,"internal-error"),hd(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return hd(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){const n=await kd(t,{},(async()=>{const n=ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,r=Sd(t,s,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Td.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:s,expirationTime:i}=e,r=new Md;return n&&(hd("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),s&&(hd("string"==typeof s,"internal-error",{appName:t}),r.accessToken=s),i&&(hd("number"==typeof i,"internal-error",{appName:t}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Md,this.toJSON())}_performRefresh(){return dd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ud(t,e){hd("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Vd{constructor(t){var{uid:e,auth:n,stsTokenManager:s}=t,i=ed(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ld(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Od(this,this.stsTokenManager.getToken(this.auth,t));return hd(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=ht(t),s=await n.getIdToken(e),i=Dd(s);hd(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Nd(Rd(i.auth_time)),issuedAtTime:Nd(Rd(i.iat)),expirationTime:Nd(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=ht(t);await Pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(hd(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Vd(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){hd(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Pd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Od(this,async function(t,e){return Id(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,s,i,r,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(s=e.email)&&void 0!==s?s:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:T,stsTokenManager:E}=e;hd(v&&E,t,"internal-error");const b=Md.fromJSON(this.name,E);hd("string"==typeof v,t,"internal-error"),Ud(l,t.name),Ud(h,t.name),hd("boolean"==typeof w,t,"internal-error"),hd("boolean"==typeof _,t,"internal-error"),Ud(d,t.name),Ud(f,t.name),Ud(p,t.name),Ud(g,t.name),Ud(m,t.name),Ud(y,t.name);const I=new Vd({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(I.providerData=T.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const s=new Md;s.updateFromServerResponse(e);const i=new Vd({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:n});return await Pd(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fd.type="NONE";const $d=Fd;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jd(t,e,n){return`firebase:${t}:${e}:${n}`}class qd{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=jd(this.userKey,s.apiKey,i),this.fullPersistenceKey=jd("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vd._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new qd(gd($d),t,n);const s=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=s[0]||gd($d);const r=jd(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const s=Vd._fromJSON(t,e);n!==i&&(o=s),i=n;break}}catch(t){}const a=s.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(r)}catch(t){}}))),new qd(i,t,n)):new qd(i,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jd(e))return"Blackberry";if(Xd(e))return"Webos";if(zd(e))return"Safari";if((e.includes("chrome/")||Hd(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Kd(t=Y()){return/firefox\//i.test(t)}function zd(t=Y()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hd(t=Y()){return/crios\//i.test(t)}function Gd(t=Y()){return/iemobile/i.test(t)}function Wd(t=Y()){return/android/i.test(t)}function Jd(t=Y()){return/blackberry/i.test(t)}function Xd(t=Y()){return/webos/i.test(t)}function Qd(t=Y()){return/iphone|ipad|ipod/i.test(t)}function Yd(t=Y()){return Qd(t)||Wd(t)||Xd(t)||Jd(t)||/windows phone/i.test(t)||Gd(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Zd(t,e=[]){let n;switch(t){case"Browser":n=Bd(Y());break;case"Worker":n=`${Bd(Y())}-${t}`;break;default:n=t}return`${n}/JsCore/9.6.7/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tf{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=id,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=gd(e)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await qd.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(t);s&&s!==i||!(null==r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(hd(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Pd(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?ht(t):null;return e&&hd(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&hd(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gd(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new it("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&gd(t)||this._popupRedirectResolver;hd(e,this,"argument-error"),this.redirectPersistenceManager=await qd.create(this,[gd(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,s){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return hd(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,s):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return hd(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function ef(t){return ht(t)}class nf{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new ut(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return hd(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return dd("not implemented")}_getIdTokenResponse(t){return dd("not implemented")}_linkToIdToken(t,e){return dd("not implemented")}_getReauthenticationResolver(t){return dd("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function rf(t,e){return async function(t,e,n,s,i={}){const r=await Id(t,e,n,s,i);return"mfaPendingCredential"in r&&ad(t,"multi-factor-auth-required",{_serverResponse:r}),r}(t,"POST","/v1/accounts:signInWithIdp",function(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class of extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new of(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ad("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:s}=e,i=ed(e,["providerId","signInMethod"]);if(!n||!s)return null;const r=new of(n,s);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(t){return rf(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,rf(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,rf(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ct(e)}return t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class af{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cf extends af{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uf extends cf{constructor(){super("facebook.com")}static credential(t){return of._fromParams({providerId:uf.PROVIDER_ID,signInMethod:uf.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return uf.credentialFromTaggedObject(t)}static credentialFromError(t){return uf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return uf.credential(t.oauthAccessToken)}catch(t){return null}}}uf.FACEBOOK_SIGN_IN_METHOD="facebook.com",uf.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lf extends cf{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return of._fromParams({providerId:lf.PROVIDER_ID,signInMethod:lf.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return lf.credentialFromTaggedObject(t)}static credentialFromError(t){return lf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return lf.credential(e,n)}catch(t){return null}}}lf.GOOGLE_SIGN_IN_METHOD="google.com",lf.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hf extends cf{constructor(){super("github.com")}static credential(t){return of._fromParams({providerId:hf.PROVIDER_ID,signInMethod:hf.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hf.credentialFromTaggedObject(t)}static credentialFromError(t){return hf.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return hf.credential(t.oauthAccessToken)}catch(t){return null}}}hf.GITHUB_SIGN_IN_METHOD="github.com",hf.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class df extends cf{constructor(){super("twitter.com")}static credential(t,e){return of._fromParams({providerId:df.PROVIDER_ID,signInMethod:df.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return df.credentialFromTaggedObject(t)}static credentialFromError(t){return df.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return df.credential(e,n)}catch(t){return null}}}df.TWITTER_SIGN_IN_METHOD="twitter.com",df.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ff{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,s=!1){const i=await Vd._fromIdTokenResponse(t,n,s),r=pf(n);return new ff({user:i,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const s=pf(n);return new ff({user:t,providerId:s,_tokenResponse:n,operationType:e})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf extends st{constructor(t,e,n,s){var i;super(e.code,e.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,gf.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,s){return new gf(t,e,n,s)}}function mf(t,e,n,s){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gf._fromErrorAndOperation(t,n,e,s);throw n}))}const yf="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(yf,"1"),this.storage.removeItem(yf),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wf extends vf{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Y();return zd(t)||Qd(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Yd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),s=this.localCache[e];n!==s&&t(e,s,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(t.newValue!==s)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const s=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);nt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,10):s()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}wf.type="LOCAL";const _f=wf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tf extends vf{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Tf.type="SESSION";const Ef=Tf;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new bf(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:s,data:i}=e.data,r=this.handlersMap[s];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(r).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function If(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */bf.receivers=[];class kf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,r;return new Promise(((o,a)=>{const c=If("",20);s.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:s,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sf(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Cf(){return void 0!==Sf().WorkerGlobalScope&&"function"==typeof Sf().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Af="firebaseLocalStorageDb",Nf="firebaseLocalStorage",Rf="fbase_key";class Df{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Of(t,e){return t.transaction([Nf],e?"readwrite":"readonly").objectStore(Nf)}function Lf(){const t=indexedDB.open(Af,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Nf,{keyPath:Rf})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Nf)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Af);return new Df(t).toPromise()}(),e(await Lf()))}))}))}async function xf(t,e,n){const s=Of(t,!0).put({[Rf]:e,value:n});return new Df(s).toPromise()}function Pf(t,e){const n=Of(t,!0).delete(e);return new Df(n).toPromise()}class Mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Lf()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bf._getInstance(Cf()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new kf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Lf();return await xf(t,yf,"1"),await Pf(t,yf),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>xf(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Of(t,!1).get(e),s=await new Df(n).toPromise();return void 0===s?null:s.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Pf(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Of(t,!1).getAll();return new Df(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:s,value:i}of t)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mf.type="LOCAL";const Uf=Mf;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vf(t){return new Promise(((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=t=>{const e=cd("internal-error");e.customData=t,n(e)},s.type="text/javascript",s.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(s)}))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ff(t,e){return e?gd(e):(hd(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new wd(3e4,6e4);class $f extends sf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rf(t,this._buildIdpRequest())}_linkToIdToken(t,e){return rf(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return rf(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function jf(t){
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(t,e,n=!1){const s="signIn",i=await mf(t,s,e),r=await ff._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}(t.auth,new $f(t),t.bypassAuthState)}function qf(t){const{auth:e,user:n}=t;return hd(n,e,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Od(t,mf(s,i,e,t),n);hd(r.idToken,s,"internal-error");const o=Dd(r.idToken);hd(o,s,"internal-error");const{sub:a}=o;return hd(t.uid===a,s,"user-mismatch"),ff._forOperation(t,i,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&ad(s,"user-mismatch"),t}}(n,new $f(t),t.bypassAuthState)}async function Bf(t){const{auth:e,user:n}=t;return hd(n,e,"internal-error"),async function(t,e,n=!1){const s=await Od(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ff._forOperation(t,"link",s)}(n,new $f(t),t.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kf{constructor(t,e,n,s,i=!1){this.auth=t,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:s,tenantId:i,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jf;case"linkViaPopup":case"linkViaRedirect":return Bf;case"reauthViaPopup":case"reauthViaRedirect":return qf;default:ad(this.auth,"internal-error")}}resolve(t){fd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fd(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zf=new wd(2e3,1e4);async function Hf(t,e,n){const s=ef(t);!function(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&ad(t,"argument-error"),ud(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e,af);const i=Ff(s,n);return new Gf(s,"signInViaPopup",e,i).executeNotNull()}class Gf extends Kf{constructor(t,e,n,s,i){super(t,e,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Gf.currentPopupAction&&Gf.currentPopupAction.cancel(),Gf.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return hd(t,this.auth,"internal-error"),t}async onExecution(){fd(1===this.filter.length,"Popup operations only handle one event");const t=If();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(cd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(cd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gf.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(cd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,zf.get())};t()}}Gf.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Wf="pendingRedirect",Jf=new Map;class Xf extends Kf{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Jf.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return jd(Wf,t.config.apiKey,t.name)}(e),s=function(t){return gd(t._redirectPersistence)}(t);if(!await s._isAvailable())return!1;const i="true"===await s._get(n);return await s._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Jf.set(this.auth._key(),t)}return this.bypassAuthState||Jf.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qf(t,e,n=!1){const s=ef(t),i=Ff(s,e),r=new Xf(s,i,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yf{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tp(t);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!tp(t)){const s=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(cd(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zf(t))}saveEventToCache(t){this.cachedEventUids.add(Zf(t)),this.lastProcessedEventTime=Date.now()}}function Zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function tp({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ep=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,np=/^https?/;async function sp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Id(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(ip(t))return}catch(t){}ad(t,"unauthorized-domain")}function ip(t){const e=md(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===s?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===s}if(!np.test(n))return!1;if(ep.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rp=new wd(3e4,6e4);function op(){const t=Sf().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function ap(t){return new Promise(((e,n)=>{var s,i,r;function o(){op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{op(),n(cd(t,"network-request-failed"))},timeout:rp.get()})}if(null===(i=null===(s=Sf().gapi)||void 0===s?void 0:s.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Sf().gapi)||void 0===r?void 0:r.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Sf()[e]=()=>{gapi.load?o():n(cd(t,"network-request-failed"))},Vf(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw cp=null,t}))}let cp=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const up=new wd(5e3,15e3),lp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dp(t){const e=t.config;hd(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_d(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:Pt},i=hp.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ct(s).slice(1)}`}async function fp(t){const e=await function(t){return cp=cp||ap(t),cp}(t),n=Sf().gapi;return hd(n,t,"internal-error"),e.open({where:document.body,url:dp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lp,dontclear:!0},(e=>new Promise((async(n,s)=>{await e.restyle({setHideOnLeave:!1});const i=cd(t,"network-request-failed"),r=Sf().setTimeout((()=>{s(i)}),up.get());function o(){Sf().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{s(i)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function mp(t,e,n,s=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pp),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Y().toLowerCase();n&&(a=Hd(u)?"_blank":n),Kd(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Y()){var e;return Qd(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e||"",a),new gp(null);const h=window.open(e||"",a,l);hd(h,t,"popup-blocked");try{h.focus()}catch(t){}return new gp(h)}const yp="__/auth/handler",vp="emulator/auth/handler";function wp(t,e,n,s,i,r){hd(t.config.authDomain,t,"auth-domain-config-required"),hd(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Pt,eventId:i};if(e instanceof af){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof cf){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${yp}`;return _d(t,vp)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}?${ct(a).slice(1)}`}const _p="webStorageSupport";const Tp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=Qf}async _openPopup(t,e,n,s){var i;fd(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return mp(t,wp(t,e,n,md(),s),If())}async _openRedirect(t,e,n,s){var i;return await this._originValidation(t),i=wp(t,e,n,md(),s),Sf().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(fd(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await fp(t),n=new Yf(t);return e.register("authEvent",(e=>{hd(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(_p,{type:_p},(n=>{var s;const i=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s.webStorageSupport;void 0!==i&&e(!!i),ad(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=sp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yd()||zd()||Qd()}};var Ep,bp="@firebase/auth",Ip="0.19.9";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){hd(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Sp(t=Mt()){const e=Ot(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Ot(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(ot(n.getOptions(),null!=e?e:{}))return t;ad(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Tp,persistence:[Uf,_f,Ef]})}Ep="Browser",Dt(new dt("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=n.options;return(t=>{hd(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),hd(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:s,authDomain:i,clientPlatform:Ep,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zd(Ep)},r=new tf(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gd);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,null==e?void 0:e.popupRedirectResolver)}(r,e),r})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Dt(new dt("auth-internal",(t=>(t=>new kp(t))(ef(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(bp,Ip,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ep)),Ut(bp,Ip,"esm2017");const Cp=t=>({userDetails:1&t,loggedIn:2&t}),Ap=t=>({userDetails:t[0],loggedIn:t[1]});function Np(e){let n,s,i,r,o,a,l;return{c(){n=h("p"),n.textContent="Hi there",s=f(),i=h("p"),i.textContent="🍺",r=f(),o=h("p"),o.textContent="SIGN IN",m(n,"class","auth-bar__welcome svelte-8ujagc"),m(i,"class","svelte-8ujagc"),m(o,"class","auth-bar__login svelte-8ujagc")},m(t,u){c(t,n,u),c(t,s,u),c(t,i,u),c(t,r,u),c(t,o,u),a||(l=g(o,"click",e[2]),a=!0)},p:t,d(t){t&&u(n),t&&u(s),t&&u(i),t&&u(r),t&&u(o),a=!1,l()}}}function Rp(t){let e,n,s,i,r,o,l,p,y,w=t[0].displayName+"";return{c(){e=h("p"),n=d("Welcome "),s=d(w),i=f(),r=h("p"),r.textContent="🍺",o=f(),l=h("p"),l.textContent="SIGN OUT",m(e,"class","auth-bar__welcome svelte-8ujagc"),m(r,"class","svelte-8ujagc"),m(l,"class","auth-bar__login svelte-8ujagc")},m(u,h){c(u,e,h),a(e,n),a(e,s),c(u,i,h),c(u,r,h),c(u,o,h),c(u,l,h),p||(y=g(l,"click",t[3]),p=!0)},p(t,e){1&e&&w!==(w=t[0].displayName+"")&&v(s,w)},d(t){t&&u(e),t&&u(i),t&&u(r),t&&u(o),t&&u(l),p=!1,y()}}}function Dp(t){let e,n,s,i;const r=t[5].default,l=function(t,e,n,s){if(t){const i=o(t,e,n,s);return t[0](i)}}(r,t,t[4],Ap);function d(t,e){return t[1]?Rp:Np}let p=d(t),g=p(t);return{c(){e=h("div"),l&&l.c(),n=f(),s=h("div"),g.c(),m(s,"class","auth-bar svelte-8ujagc")},m(t,r){c(t,e,r),l&&l.m(e,null),a(e,n),a(e,s),g.m(s,null),i=!0},p(t,[e]){l&&l.p&&(!i||19&e)&&function(t,e,n,s,i,r){if(i){const a=o(e,n,s,r);t.p(a,i)}}(l,r,t,t[4],i?function(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|i[s];return t}return e.dirty|i}return e.dirty}(r,t[4],e,Cp):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[4]),Ap),p===(p=d(t))&&g?g.p(t,e):(g.d(1),g=p(t),g&&(g.c(),g.m(s,null)))},i(t){i||(j(l,t),i=!0)},o(t){q(l,t),i=!1},d(t){t&&u(e),l&&l.d(t),g.d()}}}function Op(t,e,n){let s,{$$slots:i={},$$scope:r}=e,{userDetails:o=null}=e;const a=new lf,c=Sp();Sp().onAuthStateChanged((t=>{t?(console.log("User is signed in."),console.log(t),n(0,o=t)):console.log(" User is signed out.")}));return t.$$set=t=>{"userDetails"in t&&n(0,o=t.userDetails),"$$scope"in t&&n(4,r=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&n(1,s=null!==o)},[o,s,()=>{Hf(c,a).then((t=>{lf.credentialFromResult(t).accessToken,n(0,o=t.user)})).catch((t=>{t.code,t.message,t.email,lf.credentialFromError(t)}))},()=>{(function(t){return ht(t).signOut()})(c).then((()=>{console.log("signed ou"),n(0,o=null)})).catch((t=>{}))},r,i]}class Lp extends J{constructor(t){super(),W(this,t,Op,Dp,r,{userDetails:0})}}function xp(e){let n,s,i;return{c(){n=h("button"),n.textContent="Add pub",m(n,"class","svelte-1m5iylt")},m(t,r){c(t,n,r),s||(i=g(n,"click",e[3]),s=!0)},p:t,d(t){t&&u(n),s=!1,i()}}}function Pp(t){let e,n=t[10]&&xp(t);return{c(){n&&n.c(),e=p()},m(t,s){n&&n.m(t,s),c(t,e,s)},p(t,s){t[10]?n?n.p(t,s):(n=xp(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(e)}}}function Mp(t){let e,n;return e=new Qh({props:{data:t[1]}}),{c(){K(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.data=t[1]),e.$set(s)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Up(t){let e,n,s;function i(e){t[4](e)}let r={};return void 0!==t[0]&&(r.formOpen=t[0]),e=new td({props:r}),S.push((()=>B(e,"formOpen",i))),e.$on("form-submit",t[2]),{c(){K(e.$$.fragment)},m(t,n){z(e,t,n),s=!0},p(t,s){const i={};!n&&1&s&&(n=!0,i.formOpen=t[0],O((()=>n=!1))),e.$set(i)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Vp(e){let n,s,i,o,l,d,p,g,y,v=e[1];s=new Lp({props:{$$slots:{default:[Pp,({userDetails:t,loggedIn:e,loginWithGoogle:n,loginWithEmailPassword:s,logout:i})=>({9:t,10:e,11:n,12:s,13:i}),({userDetails:t,loggedIn:e,loginWithGoogle:n,loginWithEmailPassword:s,logout:i})=>(t?512:0)|(e?1024:0)|(n?2048:0)|(s?4096:0)|(i?8192:0)]},$$scope:{ctx:e}}});let w=Mp(e),_=e[0]&&Up(e);return{c(){n=h("main"),K(s.$$.fragment),i=f(),o=h("div"),l=h("h1"),l.textContent="Edinburgh Pub Finder",d=f(),w.c(),p=f(),_&&_.c(),m(l,"class","text-center text-4xl md:text-5xl p-6"),m(o,"class",g="app-container container "+(e[0]?"form-visible":"")+" svelte-1m5iylt")},m(t,e){c(t,n,e),z(s,n,null),a(n,i),a(n,o),a(o,l),a(o,d),w.m(o,null),a(o,p),_&&_.m(o,null),y=!0},p(e,[n]){const i={};17408&n&&(i.$$scope={dirty:n,ctx:e}),s.$set(i),2&n&&r(v,v=e[1])?(F(),q(w,1,1,t),$(),w=Mp(e),w.c(),j(w),w.m(o,p)):w.p(e,n),e[0]?_?(_.p(e,n),1&n&&j(_,1)):(_=Up(e),_.c(),j(_,1),_.m(o,null)):_&&(F(),q(_,1,1,(()=>{_=null})),$()),(!y||1&n&&g!==(g="app-container container "+(e[0]?"form-visible":"")+" svelte-1m5iylt"))&&m(o,"class",g)},i(t){y||(j(s.$$.fragment,t),j(w),j(_),y=!0)},o(t){q(s.$$.fragment,t),q(w),q(_),y=!1},d(t){t&&u(n),H(s),w.d(t),_&&_.d()}}}function Fp(t,e,n){let s=!1;!function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Lt.create("bad-app-name",{appName:String(s)});const i=At.get(s);if(i){if(ot(t,i.options)&&ot(n,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const r=new gt(s);for(const t of Nt.values())r.addComponent(t);const o=new xt(t,n,r);At.set(s,o)}({apiKey:"AIzaSyD7IVKm4pg_IG3FIYjzqrjVVet7KocGKcM",authDomain:"edinburgh-pubs-24942.firebaseapp.com",projectId:"edinburgh-pubs-24942",storageBucket:"edinburgh-pubs-24942.appspot.com",messagingSenderId:"600769056466",appId:"1:600769056466:web:ae2e55b79a8c7661eea70b",measurementId:"G-HC10EHXZBN"});const i=function(t=Mt()){return Ot(t,"firestore").getImmediate()}();let r=new Array;const o=async t=>{try{const e=await _h(Fl(i,"Pubs"),t);console.log("Document written with ID: ",e.id)}catch(t){console.error("Error adding document: ",t)}};return(async()=>{const t=[];(await wh(Fl(i,"Pubs"))).forEach((e=>{t.push(e.data())})),n(1,r=t)})(),[s,r,t=>{console.log(t.detail);let e=t.detail;e.submittedBy=user.email,o(e)},()=>{n(0,s=!s)},function(t){s=t,n(0,s)}]}return new class extends J{constructor(t){super(),W(this,t,Fp,Vp,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
