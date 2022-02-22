var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(){return l("")}function p(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function w(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function E(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let b;function T(t){b=t}const I=[],S=[],A=[],C=[],_=Promise.resolve();let N=!1;function D(t){A.push(t)}function k(t){C.push(t)}const R=new Set;let L=0;function x(){const t=b;do{for(;L<I.length;){const t=I[L];L++,T(t),O(t.$$)}for(T(null),I.length=0,L=0;S.length;)S.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];R.has(e)||(R.add(e),e())}A.length=0}while(I.length);for(;C.length;)C.pop()();N=!1,R.clear(),T(t)}function O(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const M=new Set;let P;function V(){P={r:0,c:[],p:P}}function F(){P.r||s(P.c),P=P.p}function U(t,e){t&&t.i&&(M.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(M.has(t))return;M.add(t),P.c.push((()=>{M.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function q(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function j(t){t&&t.c()}function B(t,n,r,o){const{fragment:a,on_mount:h,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,r),o||D((()=>{const n=h.map(e).filter(i);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(D)}function H(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(I.push(t),N||(N=!0,_.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,i,r,o,a,c,u,l=[-1]){const d=b;T(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:i.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&z(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();i.intro&&U(e.$$.fragment),B(e,i.target,i.anchor,i.customElement),x()}T(d)}class G{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
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
     */class W{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function Y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Q extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(J,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new Q(s,o,n)}}const J=/\{\$([^}]+)}/g;function Z(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(tt(n)&&tt(r)){if(!Z(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function tt(t){return null!==t&&"object"==typeof t}
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
     */class et{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const nt="[DEFAULT]";
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
     */class st{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new W;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:nt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===nt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:nt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class it{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new st(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var rt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(rt||(rt={}));const ot={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},at=rt.INFO,ht={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},ct=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=ht[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class ut{constructor(t){this.name=t,this._logLevel=at,this._logHandler=ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ot[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}
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
     */class lt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const dt="@firebase/app",ft="0.7.14",pt=new ut("@firebase/app"),gt="[DEFAULT]",mt={[dt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},yt=new Map,vt=new Map;function wt(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(vt.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;vt.set(e,t);for(const e of yt.values())wt(e,t);return!0}
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
const bt=new X("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Tt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new et("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}
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
     */function It(t,e,n){var s;let i=null!==(s=mt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void pt.warn(t.join(" "))}Et(new et(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */var St;St="",Et(new et("platform-logger",(t=>new lt(t)),"PRIVATE")),It(dt,ft,St),It(dt,ft,"esm2017"),It("fire-js","");
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
It("firebase","9.6.4","app");var At,Ct="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},_t=_t||{},Nt=Ct||self;function Dt(){}function kt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Rt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Lt="closure_uid_"+(1e9*Math.random()>>>0),xt=0;function Ot(t,e,n){return t.call.apply(t.bind,arguments)}function Mt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return(Pt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ot:Mt).apply(null,arguments)}function Vt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ft(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Ut(){this.s=this.s,this.o=this.o}var $t={};Ut.prototype.s=!1,Ut.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Lt)&&t[Lt]||(t[Lt]=++xt)}(this);delete $t[t]}},Ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},jt=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Bt(t){return Array.prototype.concat.apply([],arguments)}function Ht(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function zt(t){return/^[\s\xa0]*$/.test(t)}var Kt,Gt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wt(t,e){return-1!=t.indexOf(e)}function Yt(t,e){return t<e?-1:t>e?1:0}t:{var Qt=Nt.navigator;if(Qt){var Xt=Qt.userAgent;if(Xt){Kt=Xt;break t}}Kt=""}function Jt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zt(t){const e={};for(const n in t)e[n]=t[n];return e}var te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<te.length;e++)n=te[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ne(t){return ne[" "](t),t}ne[" "]=Dt;var se,ie,re=Wt(Kt,"Opera"),oe=Wt(Kt,"Trident")||Wt(Kt,"MSIE"),ae=Wt(Kt,"Edge"),he=ae||oe,ce=Wt(Kt,"Gecko")&&!(Wt(Kt.toLowerCase(),"webkit")&&!Wt(Kt,"Edge"))&&!(Wt(Kt,"Trident")||Wt(Kt,"MSIE"))&&!Wt(Kt,"Edge"),ue=Wt(Kt.toLowerCase(),"webkit")&&!Wt(Kt,"Edge");function le(){var t=Nt.document;return t?t.documentMode:void 0}t:{var de="",fe=(ie=Kt,ce?/rv:([^\);]+)(\)|;)/.exec(ie):ae?/Edge\/([\d\.]+)/.exec(ie):oe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ie):ue?/WebKit\/(\S+)/.exec(ie):re?/(?:Version)[ \/]?(\S+)/.exec(ie):void 0);if(fe&&(de=fe?fe[1]:""),oe){var pe=le();if(null!=pe&&pe>parseFloat(de)){se=String(pe);break t}}se=de}var ge,me={};function ye(){return function(t){var e=me;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Gt(String(se)).split("."),n=Gt("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Yt(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Yt(0==i[2].length,0==r[2].length)||Yt(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Nt.document&&oe){var ve=le();ge=ve||(parseInt(se,10)||void 0)}else ge=void 0;var we=ge,Ee=function(){if(!Nt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Nt.addEventListener("test",Dt,e),Nt.removeEventListener("test",Dt,e)}catch(t){}return t}();function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Te(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ce){t:{try{ne(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ie[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Te.Z.h.call(this)}}be.prototype.h=function(){this.defaultPrevented=!0},Ft(Te,be);var Ie={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),Ae=0;function Ce(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ae,this.ca=this.fa=!1}function _e(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ne(t){this.src=t,this.g={},this.h=0}function De(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=qt(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(_e(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ke(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Ne.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ke(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Ce(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var Re="closure_lm_"+(1e6*Math.random()|0),Le={};function xe(t,e,n,s,i){if(s&&s.once)return Me(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xe(t,e[r],n,s,i);return null}return n=je(n),t&&t[Se]?t.N(e,n,Rt(s)?!!s.capture:!!s,i):Oe(t,e,n,!1,s,i)}function Oe(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Rt(i)?!!i.capture:!!i,a=$e(t);if(a||(t[Re]=a=new Ne(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Ue;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ee||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Fe(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Me(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Me(t,e[r],n,s,i);return null}return n=je(n),t&&t[Se]?t.O(e,n,Rt(s)?!!s.capture:!!s,i):Oe(t,e,n,!0,s,i)}function Pe(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Pe(t,e[r],n,s,i);else s=Rt(s)?!!s.capture:!!s,n=je(n),t&&t[Se]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ke(r=t.g[e],n,s,i))&&(_e(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=$e(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ke(e,n,s,i)),(n=-1<t?e[t]:null)&&Ve(n))}function Ve(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Se])De(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Fe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$e(e))?(De(n,t),0==n.h&&(n.src=null,e[Re]=null)):_e(t)}}}function Fe(t){return t in Le?Le[t]:Le[t]="on"+t}function Ue(t,e){if(t.ca)t=!0;else{e=new Te(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Ve(t),t=n.call(s,e)}return t}function $e(t){return(t=t[Re])instanceof Ne?t:null}var qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function je(t){return"function"==typeof t?t:(t[qe]||(t[qe]=function(e){return t.handleEvent(e)}),t[qe])}function Be(){Ut.call(this),this.i=new Ne(this),this.P=this,this.I=null}function He(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;ee(e=new be(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ze(o,s,!0,e)&&i}if(i=ze(o=e.g=t,s,!0,e)&&i,i=ze(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=ze(o=e.g=n[r],s,!1,e)&&i}function ze(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&De(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}Ft(Be,Ut),Be.prototype[Se]=!0,Be.prototype.removeEventListener=function(t,e,n,s){Pe(this,t,e,n,s)},Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)_e(n[s]);delete e.g[t],e.h--}}this.I=null},Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ke=Nt.JSON.stringify;function Ge(){var t=tn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var We,Ye=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Qe),(t=>t.reset()));class Qe{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Xe(t){Nt.setTimeout((()=>{throw t}),0)}function Je(t,e){We||function(){var t=Nt.Promise.resolve(void 0);We=function(){t.then(en)}}(),Ze||(We(),Ze=!0),tn.add(t,e)}var Ze=!1,tn=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ye.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function en(){for(var t;t=Ge();){try{t.h.call(t.g)}catch(t){Xe(t)}var e=Ye;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ze=!1}function nn(t,e){Be.call(this),this.h=t||1,this.g=e||Nt,this.j=Pt(this.kb,this),this.l=Date.now()}function sn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function rn(t,e,n){if("function"==typeof t)n&&(t=Pt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Nt.setTimeout(t,e||0)}function on(t){t.g=rn((()=>{t.g=null,t.i&&(t.i=!1,on(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ft(nn,Be),(At=nn.prototype).da=!1,At.S=null,At.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),He(this,"tick"),this.da&&(sn(this),this.start()))}},At.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},At.M=function(){nn.Z.M.call(this),sn(this),delete this.g};class an extends Ut{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:on(this)}M(){super.M(),this.g&&(Nt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(t){Ut.call(this),this.h=t,this.g={}}Ft(hn,Ut);var cn=[];function un(t,e,n,s){Array.isArray(n)||(n&&(cn[0]=n.toString()),n=cn);for(var i=0;i<n.length;i++){var r=xe(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ln(t){Jt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ve(t)}),t),t.g={}}function dn(){this.g=!0}function fn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Ke(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}hn.prototype.M=function(){hn.Z.M.call(this),ln(this)},hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},dn.prototype.Aa=function(){this.g=!1},dn.prototype.info=function(){};var pn={},gn=null;function mn(){return gn=gn||new Be}function yn(t){be.call(this,pn.Ma,t)}function vn(t){const e=mn();He(e,new yn(e,t))}function wn(t,e){be.call(this,pn.STAT_EVENT,t),this.stat=e}function En(t){const e=mn();He(e,new wn(e,t))}function bn(t,e){be.call(this,pn.Na,t),this.size=e}function Tn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Nt.setTimeout((function(){t()}),e)}pn.Ma="serverreachability",Ft(yn,be),pn.STAT_EVENT="statevent",Ft(wn,be),pn.Na="timingevent",Ft(bn,be);var In={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function An(){}function Cn(t){return t.h||(t.h=t.i())}function _n(){}An.prototype.h=null;var Nn,Dn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function kn(){be.call(this,"d")}function Rn(){be.call(this,"c")}function Ln(){}function xn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new hn(this),this.P=Mn,t=he?125:void 0,this.W=new nn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new On}function On(){this.i=null,this.g="",this.h=!1}Ft(kn,be),Ft(Rn,be),Ft(Ln,An),Ln.prototype.g=function(){return new XMLHttpRequest},Ln.prototype.i=function(){return{}},Nn=new Ln;var Mn=45e3,Pn={},Vn={};function Fn(t,e,n){t.K=1,t.v=as(es(e)),t.s=n,t.U=!0,Un(t,null)}function Un(t,e){t.F=Date.now(),Bn(t),t.A=es(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Es(n.h,"t",s),t.C=0,n=t.l.H,t.h=new On,t.g=Ei(t.l,n?e:null,!t.s),0<t.O&&(t.L=new an(Pt(t.Ia,t,t.g),t.O)),un(t.V,t.g,"readystatechange",t.gb),e=t.H?Zt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vn(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function $n(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function qn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=jn(t,n),s==Vn){4==e&&(t.o=4,En(14),i=!1),fn(t.j,t.m,null,"[Incomplete Response]");break}if(s==Pn){t.o=4,En(15),fn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}fn(t.j,t.m,s,null),Wn(t,s)}$n(t)&&s!=Vn&&s!=Pn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,En(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),di(e),e.L=!0,En(11))):(fn(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),Kn(t))}function jn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Vn:(n=Number(e.substring(n,s)),isNaN(n)?Pn:(s+=1)+n>e.length?Vn:(e=e.substr(s,n),t.C=s+n,e))}function Bn(t){t.Y=Date.now()+t.P,Hn(t,t.P)}function Hn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Tn(Pt(t.eb,t),e)}function zn(t){t.B&&(Nt.clearTimeout(t.B),t.B=null)}function Kn(t){0==t.l.G||t.I||gi(t.l,t)}function Gn(t){zn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,sn(t.W),ln(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cs(n.i,t)))if(n.I=t.N,!t.J&&Cs(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;pi(n),si(n)}li(n),En(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Tn(Pt(n.ab,n),6e3));if(1>=As(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else yi(n,11)}else if((t.J||n.g==t)&&pi(n),!zt(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Wt(t,"spdy")||Wt(t,"quic")||Wt(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(_s(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,os(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=wi(s,s.H?s.la:null,s.W),o.J){Ns(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(zn(a),Bn(a)),s.g=o}else ui(s);0<n.l.length&&oi(n)}else"stop"!=c[0]&&"close"!=c[0]||yi(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?yi(n,7):ni(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}vn(4)}catch(t){}}function Yn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(kt(t)||"string"==typeof t)jt(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(kt(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(kt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Qn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Qn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Xn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Jn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Jn(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(At=xn.prototype).setTimeout=function(t){this.P=t},At.gb=function(t){t=t.target;const e=this.L;e&&3==Xs(t)?e.l():this.Ia(t)},At.Ia=function(t){try{if(t==this.g)t:{const u=Xs(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||he||this.g&&(this.h.h||this.g.ga()||Js(this.g)))){this.I||4!=u||7==e||vn(8==e||0>=l?3:2),zn(this);var n=this.g.ba();this.N=n;e:if($n(this)){var s=Js(this.g);t="";var i=s.length,r=4==Xs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gn(this),Kn(this);var o="";break e}this.h.i=new Nt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zt(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,En(12),Gn(this),Kn(this);break t}fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wn(this,n)}this.U?(qn(this,u,o),he&&this.i&&3==u&&(un(this.V,this.W,"tick",this.fb),this.W.start())):(fn(this.j,this.m,o,null),Wn(this,o)),4==u&&Gn(this),this.i&&!this.I&&(4==u?gi(this.l,this):(this.i=!1,Bn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,En(12)):(this.o=0,En(13)),Gn(this),Kn(this)}}}catch(t){}},At.fb=function(){if(this.g){var t=Xs(this.g),e=this.g.ga();this.C<e.length&&(zn(this),qn(this,t,e),this.i&&4!=t&&Bn(this))}},At.cancel=function(){this.I=!0,Gn(this)},At.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(vn(3),En(17)),Gn(this),this.o=2,Kn(this)):Hn(this,this.Y-t)},(At=Qn.prototype).R=function(){Xn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},At.T=function(){return Xn(this),this.g.concat()},At.get=function(t,e){return Jn(this.h,t)?this.h[t]:e},At.set=function(t,e){Jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},At.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Zn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ts(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ts){this.g=void 0!==e?e:t.g,ns(this,t.j),this.s=t.s,ss(this,t.i),is(this,t.m),this.l=t.l,e=t.h;var n=new ms;n.i=e.i,e.g&&(n.g=new Qn(e.g),n.h=e.h),rs(this,n),this.o=t.o}else t&&(n=String(t).match(Zn))?(this.g=!!e,ns(this,n[1]||"",!0),this.s=hs(n[2]||""),ss(this,n[3]||"",!0),is(this,n[4]),this.l=hs(n[5]||"",!0),rs(this,n[6]||"",!0),this.o=hs(n[7]||"")):(this.g=!!e,this.h=new ms(null,this.g))}function es(t){return new ts(t)}function ns(t,e,n){t.j=n?hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ss(t,e,n){t.i=n?hs(e,!0):e}function is(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rs(t,e,n){e instanceof ms?(t.h=e,function(t,e){e&&!t.j&&(ys(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vs(this,e),Es(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=cs(e,ps)),t.h=new ms(e,t.g))}function os(t,e,n){t.h.set(e,n)}function as(t){return os(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cs(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,us),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function us(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cs(e,ls,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(cs(e,ls,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(cs(n,"/"==n.charAt(0)?fs:ds,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cs(n,gs)),t.join("")};var ls=/[#\/\?@]/g,ds=/[#\?:]/g,fs=/[#\?]/g,ps=/[#\?@]/g,gs=/#/g;function ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ys(t){t.g||(t.g=new Qn,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vs(t,e){ys(t),e=bs(t,e),Jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Jn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Xn(t)))}function ws(t,e){return ys(t),e=bs(t,e),Jn(t.g.h,e)}function Es(t,e,n){vs(t,e),0<n.length&&(t.i=null,t.g.set(bs(t,e),Ht(n)),t.h+=n.length)}function bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(At=ms.prototype).add=function(t,e){ys(this),this.i=null,t=bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},At.forEach=function(t,e){ys(this),this.g.forEach((function(n,s){jt(n,(function(n){t.call(e,n,s,this)}),this)}),this)},At.T=function(){ys(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},At.R=function(t){ys(this);var e=[];if("string"==typeof t)ws(this,t)&&(e=Bt(e,this.g.get(bs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Bt(e,t[n])}return e},At.set=function(t,e){return ys(this),this.i=null,ws(this,t=bs(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},At.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},At.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ts(t){this.l=t||Is,Nt.PerformanceNavigationTiming?t=0<(t=Nt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Nt.g&&Nt.g.Ea&&Nt.g.Ea()&&Nt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Is=10;function Ss(t){return!!t.h||!!t.g&&t.g.size>=t.j}function As(t){return t.h?1:t.g?t.g.size:0}function Cs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _s(t,e){t.g?t.g.add(e):t.h=e}function Ns(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ds(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ht(t.i)}function ks(){}function Rs(){this.g=new ks}function Ls(t,e,n){const s=n||"";try{Yn(t,(function(t,n){let i=t;Rt(t)&&(i=Ke(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function xs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Os(t){this.l=t.$b||null,this.j=t.ib||!1}function Ms(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ts.prototype.cancel=function(){if(this.i=Ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ks.prototype.stringify=function(t){return Nt.JSON.stringify(t,void 0)},ks.prototype.parse=function(t){return Nt.JSON.parse(t,void 0)},Ft(Os,An),Os.prototype.g=function(){return new Ms(this.l,this.j)},Os.prototype.i=function(t){return function(){return t}}({}),Ft(Ms,Be);var Ps=0;function Vs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Us(t)}function Us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(At=Ms.prototype).open=function(t,e){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Us(this)},At.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Nt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},At.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fs(this)),this.readyState=Ps},At.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Nt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vs(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},At.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fs(this):Us(this),3==this.readyState&&Vs(this)}},At.Ua=function(t){this.g&&(this.response=this.responseText=t,Fs(this))},At.Ta=function(t){this.g&&(this.response=t,Fs(this))},At.ha=function(){this.g&&Fs(this)},At.setRequestHeader=function(t,e){this.v.append(t,e)},At.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},At.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var $s=Nt.JSON.parse;function qs(t){Be.call(this),this.headers=new Qn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=js,this.K=this.L=!1}Ft(qs,Be);var js="",Bs=/^https?$/i,Hs=["POST","PUT"];function zs(t){return"content-type"==t.toLowerCase()}function Ks(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gs(t),Ys(t)}function Gs(t){t.D||(t.D=!0,He(t,"complete"),He(t,"error"))}function Ws(t){if(t.h&&void 0!==_t&&(!t.C[1]||4!=Xs(t)||2!=t.ba()))if(t.v&&4==Xs(t))rn(t.Fa,0,t);else if(He(t,"readystatechange"),4==Xs(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Zn)[1]||null;if(!i&&Nt.self&&Nt.self.location){var r=Nt.self.location.protocol;i=r.substr(0,r.length-1)}s=!Bs.test(i?i.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<Xs(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Gs(t)}}finally{Ys(t)}}}function Ys(t,e){if(t.g){Qs(t);const n=t.g,s=t.C[0]?Dt:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Qs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Nt.clearTimeout(t.A),t.A=null)}function Xs(t){return t.g?t.g.readyState:0}function Js(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case js:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zs(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return Jt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):os(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ei(t){this.za=0,this.l=[],this.h=new dn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ti("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ti("baseRetryDelayMs",5e3,t),this.$a=ti("retryDelaySeedMs",1e4,t),this.Ya=ti("forwardChannelMaxRetries",2,t),this.ra=ti("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ts(t&&t.concurrentRequestLimit),this.Ca=new Rs,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ni(t){if(ii(t),3==t.G){var e=t.V++,n=es(t.F);os(n,"SID",t.J),os(n,"RID",e),os(n,"TYPE","terminate"),hi(t,n),(e=new xn(t,t.h,e,void 0)).K=2,e.v=as(es(n)),n=!1,Nt.navigator&&Nt.navigator.sendBeacon&&(n=Nt.navigator.sendBeacon(e.v.toString(),"")),!n&&Nt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ei(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Bn(e)}vi(t)}function si(t){t.g&&(di(t),t.g.cancel(),t.g=null)}function ii(t){si(t),t.u&&(Nt.clearTimeout(t.u),t.u=null),pi(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Nt.clearTimeout(t.m),t.m=null)}function ri(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&oi(t)}function oi(t){Ss(t.i)||t.m||(t.m=!0,Je(t.Ha,t),t.C=0)}function ai(t,e){var n;n=e?e.m:t.V++;const s=es(t.F);os(s,"SID",t.J),os(s,"RID",n),os(s,"AID",t.U),hi(t,s),t.o&&t.s&&Zs(s,t.o,t.s),n=new xn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ci(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_s(t.i,n),Fn(n,s,e)}function hi(t,e){t.j&&Yn({},(function(t,n){os(e,n,t)}))}function ci(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Pt(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Ls(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function ui(t){t.g||t.u||(t.Y=1,Je(t.Ga,t),t.A=0)}function li(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Tn(Pt(t.Ga,t),mi(t,t.A)),t.A++,!0)}function di(t){null!=t.B&&(Nt.clearTimeout(t.B),t.B=null)}function fi(t){t.g=new xn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=es(t.oa);os(e,"RID","rpc"),os(e,"SID",t.J),os(e,"CI",t.N?"0":"1"),os(e,"AID",t.U),hi(t,e),os(e,"TYPE","xmlhttp"),t.o&&t.s&&Zs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=as(es(e)),n.s=null,n.U=!0,Un(n,t)}function pi(t){null!=t.v&&(Nt.clearTimeout(t.v),t.v=null)}function gi(t,e){var n=null;if(t.g==e){pi(t),di(t),t.g=null;var s=2}else{if(!Cs(t.i,e))return;n=e.D,Ns(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;He(s=mn(),new bn(s,n,e,i)),oi(t)}else ui(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(As(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Tn(Pt(t.Ha,t,e),mi(t,t.C)),t.C++,0)))}(t,e)||2==s&&li(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}function mi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Pt(t.jb,t);n||(n=new ts("//www.google.com/images/cleardot.gif"),Nt.location&&"http"==Nt.location.protocol||ns(n,"https"),as(n)),function(t,e){const n=new dn;if(Nt.Image){const s=new Image;s.onload=Vt(xs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Vt(xs,n,s,"TestLoadImage: error",!1,e),s.onabort=Vt(xs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Vt(xs,n,s,"TestLoadImage: timeout",!1,e),Nt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else En(2);t.G=0,t.j&&t.j.va(e),vi(t),ii(t)}function vi(t){t.G=0,t.I=-1,t.j&&(0==Ds(t.i).length&&0==t.l.length||(t.i.i.length=0,Ht(t.l),t.l.length=0),t.j.ua())}function wi(t,e,n){let s=function(t){return t instanceof ts?es(t):new ts(t,void 0)}(n);if(""!=s.i)e&&ss(s,e+"."+s.i),is(s,s.m);else{const t=Nt.location;s=function(t,e,n,s){var i=new ts(null,void 0);return t&&ns(i,t),e&&ss(i,e),n&&is(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Jt(t.aa,(function(t,e){os(s,e,t)})),e=t.D,n=t.sa,e&&n&&os(s,e,n),os(s,"VER",t.ma),hi(t,s),s}function Ei(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new qs(new Os({ib:!0})):new qs(t.qa)).L=t.H,e}function bi(){}function Ti(){if(oe&&!(10<=Number(we)))throw Error("Environmental error: no available transport.")}function Ii(t,e){Be.call(this),this.g=new ei(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!zt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zt(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ci(this)}function Si(t){kn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ai(){Rn.call(this),this.status=1}function Ci(t){this.g=t}(At=qs.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nn.g(),this.C=this.u?Cn(this.u):Cn(Nn),this.g.onreadystatechange=Pt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ks(this,t)}t=n||"";const i=new Qn(this.headers);s&&Yn(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=zs;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Nt.FormData&&t instanceof Nt.FormData,!(0<=qt(Hs,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qs(this),0<this.B&&((this.K=function(t){return oe&&ye()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.pa,this)):this.A=rn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ks(this,t)}},At.pa=function(){void 0!==_t&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))},At.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),Ys(this))},At.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ys(this,!0)),qs.Z.M.call(this)},At.Fa=function(){this.s||(this.F||this.v||this.l?Ws(this):this.cb())},At.cb=function(){Ws(this)},At.ba=function(){try{return 2<Xs(this)?this.g.status:-1}catch(t){return-1}},At.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},At.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),$s(e)}},At.Da=function(){return this.m},At.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(At=ei.prototype).ma=8,At.G=1,At.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},At.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new xn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Zt(r),ee(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ci(this,i,e),os(n=es(this.F),"RID",t),os(n,"CVER",22),this.D&&os(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&r&&Zs(n,this.o,r),_s(this.i,i),this.Ra&&os(n,"TYPE","init"),this.ja?(os(n,"$req",e),os(n,"SID","null"),i.$=!0,Fn(i,n,null)):Fn(i,n,e),this.G=2}}else 3==this.G&&(t?ai(this,t):0==this.l.length||Ss(this.i)||ai(this))},At.Ga=function(){if(this.u=null,fi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Tn(Pt(this.bb,this),t)}},At.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,En(10),si(this),fi(this))},At.ab=function(){null!=this.v&&(this.v=null,si(this),li(this),En(19))},At.jb=function(t){t?(this.h.info("Successfully pinged google.com"),En(2)):(this.h.info("Failed to ping google.com"),En(1))},(At=bi.prototype).xa=function(){},At.wa=function(){},At.va=function(){},At.ua=function(){},At.Oa=function(){},Ti.prototype.g=function(t,e){return new Ii(t,e)},Ft(Ii,Be),Ii.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Je(Pt(t.hb,t,e))),En(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wi(t,null,t.W),oi(t)},Ii.prototype.close=function(){ni(this.g)},Ii.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,ri(this.g,e)}else this.v?((e={}).__data__=Ke(t),ri(this.g,e)):ri(this.g,t)},Ii.prototype.M=function(){this.g.j=null,delete this.j,ni(this.g),delete this.g,Ii.Z.M.call(this)},Ft(Si,kn),Ft(Ai,Rn),Ft(Ci,bi),Ci.prototype.xa=function(){He(this.g,"a")},Ci.prototype.wa=function(t){He(this.g,new Si(t))},Ci.prototype.va=function(t){He(this.g,new Ai(t))},Ci.prototype.ua=function(){He(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,Ii.prototype.send=Ii.prototype.u,Ii.prototype.open=Ii.prototype.m,Ii.prototype.close=Ii.prototype.close,In.NO_ERROR=0,In.TIMEOUT=8,In.HTTP_ERROR=6,Sn.COMPLETE="complete",_n.EventType=Dn,Dn.OPEN="a",Dn.CLOSE="b",Dn.ERROR="c",Dn.MESSAGE="d",Be.prototype.listen=Be.prototype.N,qs.prototype.listenOnce=qs.prototype.O,qs.prototype.getLastError=qs.prototype.La,qs.prototype.getLastErrorCode=qs.prototype.Da,qs.prototype.getStatus=qs.prototype.ba,qs.prototype.getResponseJson=qs.prototype.Qa,qs.prototype.getResponseText=qs.prototype.ga,qs.prototype.send=qs.prototype.ea;var _i=In,Ni=Sn,Di=pn,ki=10,Ri=11,Li=Os,xi=_n,Oi=qs;const Mi="@firebase/firestore";
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
     */class Pi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pi.UNAUTHENTICATED=new Pi(null),Pi.GOOGLE_CREDENTIALS=new Pi("google-credentials-uid"),Pi.FIRST_PARTY=new Pi("first-party-uid"),Pi.MOCK_USER=new Pi("mock-user");
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
let Vi="9.6.3";
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
     */const Fi=new ut("@firebase/firestore");function Ui(){return Fi.logLevel}function $i(t,...e){if(Fi.logLevel<=rt.DEBUG){const n=e.map(Bi);Fi.debug(`Firestore (${Vi}): ${t}`,...n)}}function qi(t,...e){if(Fi.logLevel<=rt.ERROR){const n=e.map(Bi);Fi.error(`Firestore (${Vi}): ${t}`,...n)}}function ji(t,...e){if(Fi.logLevel<=rt.WARN){const n=e.map(Bi);Fi.warn(`Firestore (${Vi}): ${t}`,...n)}}function Bi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Hi(t="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+t;throw qi(e),new Error(e)}function zi(t,e){t||Hi()}function Ki(t,e){return t}
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
     */const Gi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wi extends Q{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Yi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Qi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pi.UNAUTHENTICATED)))}shutdown(){}}class Ji{constructor(t){this.t=t,this.currentUser=Pi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yi,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{$i("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):($i("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?($i("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(zi("string"==typeof e.accessToken),new Qi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zi(null===t||"string"==typeof t),new Pi(t)}}class Zi{constructor(t,e,n){this.type="FirstParty",this.user=Pi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class tr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Zi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Pi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class er{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&$i("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{$i("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):$i("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(zi("string"==typeof t.token),new er(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
     */function ir(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */sr.I=-1;function rr(t,e){return t<e?-1:t>e?1:0}function or(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class ar{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Wi(Gi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Wi(Gi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Wi(Gi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Wi(Gi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ar.fromMillis(Date.now())}static fromDate(t){return ar.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ar(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rr(this.nanoseconds,t.nanoseconds):rr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class hr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new hr(t)}static min(){return new hr(new ar(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function cr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
class lr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Hi(),void 0===n?n=t.length-e:n>t.length-e&&Hi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===lr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof lr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class dr extends lr{construct(t,e,n){return new dr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Wi(Gi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new dr(e)}static emptyPath(){return new dr([])}}const fr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pr extends lr{construct(t,e,n){return new pr(t,e,n)}static isValidIdentifier(t){return fr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new pr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Wi(Gi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Wi(Gi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Wi(Gi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Wi(Gi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pr(e)}static emptyPath(){return new pr([])}}
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
     */class gr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new gr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new gr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gr.EMPTY_BYTE_STRING=new gr("");const mr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(zi(!!t),"string"==typeof t){let e=0;const n=mr.exec(t);if(zi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vr(t.seconds),nanos:vr(t.nanos)}}function vr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function wr(t){return"string"==typeof t?gr.fromBase64String(t):gr.fromUint8Array(t)}
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
     */function Er(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function br(t){const e=t.mapValue.fields.__previous_value__;return Er(e)?br(e):e}function Tr(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new ar(e.seconds,e.nanos)}
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
     */function Ir(t){return null==t}function Sr(t){return 0===t&&1/t==-1/0}
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
     */class Ar{constructor(t){this.path=t}static fromPath(t){return new Ar(dr.fromString(t))}static fromName(t){return new Ar(dr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===dr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return dr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ar(new dr(t.slice()))}}
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
     */function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Er(t)?4:10:Hi()}function _r(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tr(t).isEqual(Tr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=yr(t.timestampValue),s=yr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return wr(t.bytesValue).isEqual(wr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return vr(t.geoPointValue.latitude)===vr(e.geoPointValue.latitude)&&vr(t.geoPointValue.longitude)===vr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return vr(t.integerValue)===vr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=vr(t.doubleValue),s=vr(e.doubleValue);return n===s?Sr(n)===Sr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return or(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(cr(n)!==cr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!_r(n[t],s[t])))return!1;return!0}(t,e);default:return Hi()}}function Nr(t,e){return void 0!==(t.values||[]).find((t=>_r(t,e)))}function Dr(t,e){if(t===e)return 0;const n=Cr(t),s=Cr(e);if(n!==s)return rr(n,s);switch(n){case 0:return 0;case 1:return rr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=vr(t.integerValue||t.doubleValue),s=vr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return kr(t.timestampValue,e.timestampValue);case 4:return kr(Tr(t),Tr(e));case 5:return rr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=wr(t),s=wr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=rr(n[t],s[t]);if(0!==e)return e}return rr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=rr(vr(t.latitude),vr(e.latitude));return 0!==n?n:rr(vr(t.longitude),vr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Dr(n[t],s[t]);if(e)return e}return rr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=rr(s[t],r[t]);if(0!==e)return e;const o=Dr(n[s[t]],i[r[t]]);if(0!==o)return o}return rr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Hi()}}function kr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rr(t,e);const n=yr(t),s=yr(e),i=rr(n.seconds,s.seconds);return 0!==i?i:rr(n.nanos,s.nanos)}function Rr(t){return Lr(t)}function Lr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=yr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?wr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ar.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Lr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Lr(t.fields[i])}`;return n+"}"}(t.mapValue):Hi();var e,n}function xr(t){return!!t&&"integerValue"in t}function Or(t){return!!t&&"arrayValue"in t}function Mr(t){return!!t&&"nullValue"in t}function Pr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vr(t){return!!t&&"mapValue"in t}function Fr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Fr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fr(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class Ur{constructor(t){this.value=t}static empty(){return new Ur({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fr(e)}setAll(t){let e=pr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Fr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _r(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Vr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ur(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ur(Fr(this.value))}}
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
     */class $r{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new $r(t,0,hr.min(),Ur.empty(),0)}static newFoundDocument(t,e,n){return new $r(t,1,e,n,0)}static newNoDocument(t,e){return new $r(t,2,e,Ur.empty(),0)}static newUnknownDocument(t,e){return new $r(t,3,e,Ur.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ur.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ur.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof $r&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $r(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class qr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function jr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new qr(t,e,n,s,i,r,o)}function Br(t){const e=Ki(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Rr(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ir(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=no(e.startAt)),e.endAt&&(t+="|ub:",t+=no(e.endAt)),e.R=t}return e.R}function Hr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!io(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!_r(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!oo(t.startAt,e.startAt)&&oo(t.endAt,e.endAt)}function zr(t){return Ar.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Kr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Gr(t,e,n):"array-contains"===e?new Xr(t,n):"in"===e?new Jr(t,n):"not-in"===e?new Zr(t,n):"array-contains-any"===e?new to(t,n):new Kr(t,e,n)}static P(t,e,n){return"in"===e?new Wr(t,n):new Yr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Dr(e,this.value)):null!==e&&Cr(this.value)===Cr(e)&&this.v(Dr(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Hi()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Gr extends Kr{constructor(t,e,n){super(t,e,n),this.key=Ar.fromName(n.referenceValue)}matches(t){const e=Ar.comparator(t.key,this.key);return this.v(e)}}class Wr extends Kr{constructor(t,e){super(t,"in",e),this.keys=Qr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Yr extends Kr{constructor(t,e){super(t,"not-in",e),this.keys=Qr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Qr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ar.fromName(t.referenceValue)))}class Xr extends Kr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Or(e)&&Nr(e.arrayValue,this.value)}}class Jr extends Kr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Nr(this.value.arrayValue,e)}}class Zr extends Kr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Nr(this.value.arrayValue,e)}}class to extends Kr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Or(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Nr(this.value.arrayValue,t)))}}class eo{constructor(t,e){this.position=t,this.before=e}}function no(t){return`${t.before?"b":"a"}:${t.position.map((t=>Rr(t))).join(",")}`}class so{constructor(t,e="asc"){this.field=t,this.dir=e}}function io(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ro(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Ar.comparator(Ar.fromName(o.referenceValue),n.key):Dr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function oo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}
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
     */class ao{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function ho(t){return new ao(t)}function co(t){return!Ir(t.limit)&&"F"===t.limitType}function uo(t){return!Ir(t.limit)&&"L"===t.limitType}function lo(t){const e=Ki(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new so(t)),e.S.push(new so(pr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new so(pr.keyField(),t))}}}return e.S}function fo(t){const e=Ki(t);if(!e.D)if("F"===e.limitType)e.D=jr(e.path,e.collectionGroup,lo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of lo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new so(n.field,e))}const n=e.endAt?new eo(e.endAt.position,!e.endAt.before):null,s=e.startAt?new eo(e.startAt.position,!e.startAt.before):null;e.D=jr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function po(t,e){return Hr(fo(t),fo(e))&&t.limitType===e.limitType}function go(t){return`${Br(fo(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Rr(e.value)}`;var e})).join(", ")}]`),Ir(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+no(t.startAt)),t.endAt&&(e+=", endAt: "+no(t.endAt)),`Target(${e})`}(fo(t))}; limitType=${t.limitType})`}function yo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ar.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!ro(t.startAt,lo(t),e))&&(!t.endAt||!ro(t.endAt,lo(t),e))}(t,e)}function vo(t){return(e,n)=>{let s=!1;for(const i of lo(t)){const t=wo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function wo(t,e,n){const s=t.field.isKeyField()?Ar.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Dr(s,i):Hi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Hi()}}
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
     */class Eo{constructor(){this._=void 0}}function bo(t,e,n){return t instanceof Io?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof So?Ao(t,e):t instanceof Co?_o(t,e):function(t,e){const n=function(t,e){return t instanceof No?xr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=Do(n)+Do(t.N);return xr(n)&&xr(t.N)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sr(e)?"-0":e}}(t.k,s)}(t,e)}function To(t,e,n){return t instanceof So?Ao(t,e):t instanceof Co?_o(t,e):n}class Io extends Eo{}class So extends Eo{constructor(t){super(),this.elements=t}}function Ao(t,e){const n=ko(e);for(const e of t.elements)n.some((t=>_r(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Co extends Eo{constructor(t){super(),this.elements=t}}function _o(t,e){let n=ko(e);for(const e of t.elements)n=n.filter((t=>!_r(t,e)));return{arrayValue:{values:n}}}class No extends Eo{constructor(t,e){super(),this.k=t,this.N=e}}function Do(t){return vr(t.integerValue||t.doubleValue)}function ko(t){return Or(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ro(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Lo{}function xo(t,e,n){t instanceof Vo?function(t,e,n){const s=t.value.clone(),i=$o(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Fo?function(t,e,n){if(!Ro(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=$o(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Uo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oo(t,e,n){t instanceof Vo?function(t,e,n){if(!Ro(t.precondition,e))return;const s=t.value.clone(),i=qo(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Po(e),s).setHasLocalMutations()}(t,e,n):t instanceof Fo?function(t,e,n){if(!Ro(t.precondition,e))return;const s=qo(t.fieldTransforms,n,e),i=e.data;i.setAll(Uo(t)),i.setAll(s),e.convertToFoundDocument(Po(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ro(t.precondition,e)&&e.convertToNoDocument(hr.min())}(t,e)}function Mo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&or(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof So&&e instanceof So||t instanceof Co&&e instanceof Co?or(t.elements,e.elements,_r):t instanceof No&&e instanceof No?_r(t.N,e.N):t instanceof Io&&e instanceof Io}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Po(t){return t.isFoundDocument()?t.version:hr.min()}class Vo extends Lo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Fo extends Lo{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Uo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function $o(t,e,n){const s=new Map;zi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,To(o,a,n[i]))}return s}function qo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,bo(t,r,e))}return s}
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
     */class jo{constructor(t){this.count=t}}
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
     */var Bo,Ho;function zo(t){if(void 0===t)return qi("GRPC error has no .code"),Gi.UNKNOWN;switch(t){case Bo.OK:return Gi.OK;case Bo.CANCELLED:return Gi.CANCELLED;case Bo.UNKNOWN:return Gi.UNKNOWN;case Bo.DEADLINE_EXCEEDED:return Gi.DEADLINE_EXCEEDED;case Bo.RESOURCE_EXHAUSTED:return Gi.RESOURCE_EXHAUSTED;case Bo.INTERNAL:return Gi.INTERNAL;case Bo.UNAVAILABLE:return Gi.UNAVAILABLE;case Bo.UNAUTHENTICATED:return Gi.UNAUTHENTICATED;case Bo.INVALID_ARGUMENT:return Gi.INVALID_ARGUMENT;case Bo.NOT_FOUND:return Gi.NOT_FOUND;case Bo.ALREADY_EXISTS:return Gi.ALREADY_EXISTS;case Bo.PERMISSION_DENIED:return Gi.PERMISSION_DENIED;case Bo.FAILED_PRECONDITION:return Gi.FAILED_PRECONDITION;case Bo.ABORTED:return Gi.ABORTED;case Bo.OUT_OF_RANGE:return Gi.OUT_OF_RANGE;case Bo.UNIMPLEMENTED:return Gi.UNIMPLEMENTED;case Bo.DATA_LOSS:return Gi.DATA_LOSS;default:return Hi()}}(Ho=Bo||(Bo={}))[Ho.OK=0]="OK",Ho[Ho.CANCELLED=1]="CANCELLED",Ho[Ho.UNKNOWN=2]="UNKNOWN",Ho[Ho.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ho[Ho.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ho[Ho.NOT_FOUND=5]="NOT_FOUND",Ho[Ho.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ho[Ho.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ho[Ho.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ho[Ho.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ho[Ho.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ho[Ho.ABORTED=10]="ABORTED",Ho[Ho.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ho[Ho.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ho[Ho.INTERNAL=13]="INTERNAL",Ho[Ho.UNAVAILABLE=14]="UNAVAILABLE",Ho[Ho.DATA_LOSS=15]="DATA_LOSS";
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
class Ko{constructor(t,e){this.comparator=t,this.root=e||Wo.EMPTY}insert(t,e){return new Ko(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wo.BLACK,null,null))}remove(t){return new Ko(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Go(this.root,t,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Go(this.root,t,this.comparator,!0)}}class Go{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wo{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Wo.RED,this.left=null!=s?s:Wo.EMPTY,this.right=null!=i?i:Wo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Wo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Wo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Wo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Hi();if(this.right.isRed())throw Hi();const t=this.left.check();if(t!==this.right.check())throw Hi();return t+(this.isRed()?0:1)}}Wo.EMPTY=null,Wo.RED=!0,Wo.BLACK=!1,Wo.EMPTY=new class{constructor(){this.size=0}get key(){throw Hi()}get value(){throw Hi()}get color(){throw Hi()}get left(){throw Hi()}get right(){throw Hi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Wo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yo{constructor(t){this.comparator=t,this.data=new Ko(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yo(this.comparator);return e.data=t,e}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const Xo=new Ko(Ar.comparator);function Jo(){return Xo}const Zo=new Ko(Ar.comparator);function ta(){return Zo}new Ko(Ar.comparator);const ea=new Yo(Ar.comparator);function na(...t){let e=ea;for(const n of t)e=e.add(n);return e}const sa=new Yo(rr);function ia(){return sa}
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
     */class ra{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,oa.createSynthesizedTargetChangeForCurrentChange(t,e)),new ra(hr.min(),n,ia(),Jo(),na())}}class oa{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new oa(gr.EMPTY_BYTE_STRING,e,na(),na(),na())}}
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
     */class aa{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.O=s}}class ha{constructor(t,e){this.targetId=t,this.M=e}}class ca{constructor(t,e,n=gr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ua{constructor(){this.F=0,this.L=fa(),this.B=gr.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=na(),e=na(),n=na();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Hi()}})),new oa(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=fa()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class la{constructor(t){this.et=t,this.nt=new Map,this.st=Jo(),this.it=da(),this.rt=new Yo(rr)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:Hi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.M.count,s=this.wt(e);if(s){const t=s.target;if(zr(t))if(0===n){const n=new Ar(t.path);this.at(e,n,$r.newNoDocument(n,hr.min()))}else zi(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&zr(i.target)){const e=new Ar(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.at(s,e,$r.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=na();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new ra(t,e,this.rt,this.st,n);return this.st=Jo(),this.it=da(),this.rt=new Yo(rr),s}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new ua,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Yo(rr),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||$i("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new ua),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function da(){return new Ko(Ar.comparator)}function fa(){return new Ko(Ar.comparator)}
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
     */const pa={asc:"ASCENDING",desc:"DESCENDING"},ga={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ma{constructor(t,e){this.databaseId=t,this.C=e}}function ya(t){return zi(!!t),hr.fromTimestamp(function(t){const e=yr(t);return new ar(e.seconds,e.nanos)}(t))}function va(t){const e=dr.fromString(t);return zi(Ma(e)),e}function wa(t,e){const n=va(e);if(n.get(1)!==t.databaseId.projectId)throw new Wi(Gi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Wi(Gi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ar(Ta(n))}function Ea(t,e){return function(t,e){return function(t){return new dr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function ba(t){return new dr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ta(t){return zi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ia(t,e){return{documents:[Ea(t,e.path)]}}function Sa(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ea(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ea(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Pr(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NAN"}};if(Mr(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Pr(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NAN"}};if(Mr(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(t.field),op:ka(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ra(t.field),direction:Da(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||Ir(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=_a(e.startAt)),e.endAt&&(n.structuredQuery.endAt=_a(e.endAt)),n}function Aa(t){let e=function(t){const e=va(t);return 4===e.length?dr.emptyPath():Ta(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){zi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Ca(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new so(La(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ir(e)?null:e}(n.limit));let h=null;n.startAt&&(h=Na(n.startAt));let c=null;return n.endAt&&(c=Na(n.endAt)),function(t,e,n,s,i,r,o,a){return new ao(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",h,c)}function Ca(t){return t?void 0!==t.unaryFilter?[Oa(t)]:void 0!==t.fieldFilter?[xa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ca(t))).reduce(((t,e)=>t.concat(e))):Hi():[]}function _a(t){return{before:t.before,values:t.position}}function Na(t){const e=!!t.before,n=t.values||[];return new eo(n,e)}function Da(t){return pa[t]}function ka(t){return ga[t]}function Ra(t){return{fieldPath:t.canonicalString()}}function La(t){return pr.fromServerFormat(t.fieldPath)}function xa(t){return Kr.create(La(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Hi()}}(t.fieldFilter.op),t.fieldFilter.value)}function Oa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=La(t.unaryFilter.field);return Kr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=La(t.unaryFilter.field);return Kr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=La(t.unaryFilter.field);return Kr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=La(t.unaryFilter.field);return Kr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Hi()}}function Ma(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Pa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Hi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pa(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pa?e:Pa.resolve(e)}catch(t){return Pa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pa.reject(e)}static resolve(t){return new Pa(((e,n)=>{e(t)}))}static reject(t){return new Pa(((e,n)=>{n(t)}))}static waitFor(t){return new Pa(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Pa.resolve(!1);for(const n of t)e=e.next((t=>t?Pa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function Va(t){return"IndexedDbTransactionError"===t.name}
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
     */class Fa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&xo(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Oo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Oo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(hr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),na())}isEqual(t){return this.batchId===t.batchId&&or(this.mutations,t.mutations,((t,e)=>Mo(t,e)))&&or(this.baseMutations,t.baseMutations,((t,e)=>Mo(t,e)))}}
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
     */class Ua{constructor(t,e,n,s,i=hr.min(),r=hr.min(),o=gr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Ua(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class $a{constructor(t){this.Gt=t}}function qa(t){const e=Aa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class ja{constructor(){this.zt=new Ba}addToCollectionParentIndex(t,e){return this.zt.add(e),Pa.resolve()}getCollectionParents(t,e){return Pa.resolve(this.zt.getEntries(e))}}class Ba{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Yo(dr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Yo(dr.comparator)).toArray()}}
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
     */class Ha{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Ha(0)}static re(){return new Ha(-1)}}
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
     */async function za(t){if(t.code!==Gi.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;$i("LocalStore","Unexpectedly lost primary lease")}
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
     */class Ka{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){ur(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
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
class Ga{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ar.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new Ar(e)).next((t=>{let e=ta();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=ta();return this.Jt.getCollectionParents(t,s).next((r=>Pa.forEach(r,(r=>{const o=function(t,e){return new ao(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=$r.newInvalidDocument(n),s=s.insert(n,i)),Oo(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{yo(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=na();for(const t of e)for(const e of t.mutations)e instanceof Fo&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
     */class Wa{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=na(),s=na();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Wa(t,e.fromCache,n,s)}}
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
     */class Ya{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(hr.min())?this.Fn(t,e):this.Mn.vn(t,s).next((i=>{const r=this.Ln(e,i);return(co(e)||uo(e))&&this.Bn(e.limitType,r,s,n)?this.Fn(t,e):(Ui()<=rt.DEBUG&&$i("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),mo(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new Yo(vo(t));return e.forEach(((e,s)=>{yo(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(t,e){return Ui()<=rt.DEBUG&&$i("QueryEngine","Using full collection scan to execute query:",mo(e)),this.Mn.getDocumentsMatchingQuery(t,e,hr.min())}}
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
     */class Qa{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new Ko(rr),this.Kn=new Ka((t=>Br(t)),Hr),this.jn=hr.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Ga(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function Xa(t,e){const n=Ki(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new Ga(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=na();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function Ja(t){const e=Ki(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function Za(t,e){const n=Ki(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((r,a)=>{const h=i.get(a);if(!h)return;o.push(n.He.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,r.addedDocuments,a))));let c=h.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(gr.EMPTY_BYTE_STRING,hr.min()).withLastLimboFreeSnapshotVersion(hr.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(h,c,r)&&o.push(n.He.updateTargetData(t,c))}));let a=Jo();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=na();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Jo();return n.forEach(((n,o)=>{const a=t.get(n),h=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(hr.min())?(e.removeEntry(n,h),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),r=r.insert(n,o)):$i("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(hr.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Pa.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}async function th(t,e,n){const s=Ki(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Va(t))throw t;$i("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function eh(t,e,n){const s=Ki(t);let i=hr.min(),r=na();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Ki(t),i=s.Kn.get(n);return void 0!==i?Pa.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,fo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:hr.min(),n?r:na()))).next((t=>({documents:t,zn:r})))))}
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
     */class nh{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Pa.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:ya(n.createTime)}),Pa.resolve()}getNamedQuery(t,e){return Pa.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:qa(t.bundledQuery),readTime:ya(t.readTime)}}(e)),Pa.resolve()}}
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
     */class sh{constructor(){this.ts=new Yo(ih.es),this.ns=new Yo(ih.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new ih(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new ih(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Ar(new dr([])),n=new ih(e,t),s=new ih(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Ar(new dr([])),n=new ih(e,t),s=new ih(e,t+1);let i=na();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ih(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ih{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Ar.comparator(t.key,e.key)||rr(t.fs,e.fs)}static ss(t,e){return rr(t.fs,e.fs)||Ar.comparator(t.key,e.key)}}
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
     */class rh{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Yo(ih.es)}checkEmpty(t){return Pa.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new Fa(i,e,n,s);this.An.push(r);for(const e of s)this.ws=this.ws.add(new ih(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Pa.resolve(r)}lookupMutationBatch(t,e){return Pa.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Pa.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Pa.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Pa.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ih(e,0),s=new ih(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),Pa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yo(rr);return e.forEach((t=>{const e=new ih(t,0),s=new ih(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),Pa.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Ar.isDocumentKey(i)||(i=i.child(""));const r=new ih(new Ar(i),0);let o=new Yo(rr);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),Pa.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){zi(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Pa.forEach(e.mutations,(s=>{const i=new ih(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new ih(e,0),s=this.ws.firstAfterOrEqual(n);return Pa.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Pa.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
     */class oh{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Ko(Ar.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pa.resolve(n?n.document.mutableCopy():$r.newInvalidDocument(e))}getEntries(t,e){let n=Jo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():$r.newInvalidDocument(t))})),Pa.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=Jo();const i=new Ar(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||yo(e,i)&&(s=s.insert(i.key,i.mutableCopy()))}return Pa.resolve(s)}Es(t,e){return Pa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ah(this)}getSize(t){return Pa.resolve(this.size)}}class ah extends class{constructor(){this.changes=new Ka((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:hr.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:$r.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pa.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),Pa.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
     */class hh{constructor(t){this.persistence=t,this.Is=new Ka((t=>Br(t)),Hr),this.lastRemoteSnapshotVersion=hr.min(),this.highestTargetId=0,this.As=0,this.Rs=new sh,this.targetCount=0,this.bs=Ha.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Pa.resolve()}getLastRemoteSnapshotVersion(t){return Pa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pa.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Pa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Pa.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Ha(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Pa.resolve()}updateTargetData(t,e){return this.ae(e),Pa.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Pa.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Pa.waitFor(i).next((()=>s))}getTargetCount(t){return Pa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Pa.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Pa.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Pa.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Pa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Pa.resolve(n)}containsKey(t,e){return Pa.resolve(this.Rs.containsKey(e))}}
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
     */class ch{constructor(t,e){this.Ps={},this.Be=new sr(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new hh(this),this.Jt=new ja,this.Je=function(t,e){return new oh(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new $a(e),this.Ye=new nh(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new rh(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){$i("MemoryPersistence","Starting transaction:",t);const s=new uh(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return Pa.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class uh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class lh{constructor(t){this.persistence=t,this.Cs=new sh,this.Ns=null}static ks(t){return new lh(t)}get xs(){if(this.Ns)return this.Ns;throw Hi()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Pa.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Pa.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Pa.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pa.forEach(this.xs,(n=>{const s=Ar.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Pa.or([()=>Pa.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class dh{constructor(){this.activeTargetIds=ia()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fh{constructor(){this.pi=new dh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new dh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
     */class ph{Ei(t){}shutdown(){}}
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
     */class gh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){$i("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){$i("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const mh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class yh{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
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
     */class vh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);$i("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>($i("RestConnection","Received: ",t),t)),(e=>{throw ji("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=mh[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new Oi;o.listenOnce(Ni.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case _i.NO_ERROR:const e=o.getResponseJson();$i("Connection","XHR received:",JSON.stringify(e)),i(e);break;case _i.TIMEOUT:$i("Connection",'RPC "'+t+'" timed out'),r(new Wi(Gi.DEADLINE_EXCEEDED,"Request time out"));break;case _i.HTTP_ERROR:const n=o.getStatus();if($i("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Gi).indexOf(e)>=0?e:Gi.UNKNOWN}(t.status);r(new Wi(e,t.message))}else r(new Wi(Gi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Wi(Gi.UNAVAILABLE,"Connection failed."));break;default:Hi()}}finally{$i("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Ti,r=mn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Li({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())||"object"==typeof navigator&&"ReactNative"===navigator.product||Y().indexOf("Electron/")>=0||function(){const t=Y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||Y().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");$i("Connection","Creating WebChannel: "+a,o);const h=i.createWebChannel(a,o);let c=!1,u=!1;const l=new yh({Vi:t=>{u?$i("Connection","Not sending because WebChannel is closed:",t):(c||($i("Connection","Opening WebChannel transport."),h.open(),c=!0),$i("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(h,xi.EventType.OPEN,(()=>{u||$i("Connection","WebChannel transport opened.")})),d(h,xi.EventType.CLOSE,(()=>{u||(u=!0,$i("Connection","WebChannel transport closed"),l.Oi())})),d(h,xi.EventType.ERROR,(t=>{u||(u=!0,ji("Connection","WebChannel transport errored:",t),l.Oi(new Wi(Gi.UNAVAILABLE,"The operation could not be completed")))})),d(h,xi.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];zi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){$i("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Bo[t];if(void 0!==e)return zo(e)}(t),n=i.message;void 0===e&&(e=Gi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.Oi(new Wi(e,n)),h.close()}else $i("Connection","WebChannel received:",n),l.Mi(n)}})),d(r,Di.STAT_EVENT,(t=>{t.stat===ki?$i("Connection","Detected buffering proxy"):t.stat===Ri&&$i("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.$i()}),0),l}}function wh(){return"undefined"!=typeof document?document:null}
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
     */function Eh(t){return new ma(t,!0)}class bh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&$i("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Th extends class{constructor(t,e,n,s,i,r,o,a){this.Me=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new bh(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===Gi.RESOURCE_EXHAUSTED?(qi(e.toString()),qi("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===Gi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new Wi(Gi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return $i("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget((()=>this.rr===t?e():($i("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Hi()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(zi(void 0===e||"string"==typeof e),gr.fromBase64String(e||"")):(zi(void 0===e||e instanceof Uint8Array),gr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Gi.UNKNOWN:zo(t.code);return new Wi(e,t.message||"")}(o);n=new ca(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=wa(t,s.document.name),r=ya(s.document.updateTime),o=new Ur({mapValue:{fields:s.document.fields}}),a=$r.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new aa(h,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=wa(t,s.document),r=s.readTime?ya(s.readTime):hr.min(),o=$r.newNoDocument(i,r),a=s.removedTargetIds||[];n=new aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=wa(t,s.document),r=s.removedTargetIds||[];n=new aa([],r,i,null)}else{if(!("filter"in e))return Hi();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new jo(s),r=t.targetId;n=new ha(r,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return hr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?hr.min():e.readTime?ya(e.readTime):hr.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=ba(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=zr(s)?{documents:Ia(t,s)}:{query:Sa(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.C?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(hr.min())>0&&(n.readTime=function(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Hi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=ba(this.k),e.removeTarget=t,this.gr(e)}}
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
     */class Ih extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Or(){if(this.$r)throw new Wi(Gi.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Wi(Gi.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Gi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Wi(Gi.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class Sh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(qi(e),this.Lr=!1):$i("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
     */class Ah{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Oh(this)&&($i("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ki(t);e.Gr.add(4),await _h(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Ch(e)}(this))}))})),this.Jr=new Sh(n,s)}}async function Ch(t){if(Oh(t))for(const e of t.zr)await e(!0)}async function _h(t){for(const e of t.zr)await e(!1)}function Nh(t,e){const n=Ki(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),xh(n)?Lh(n):$h(n).lr()&&kh(n,e))}function Dh(t,e){const n=Ki(t),s=$h(n);n.Wr.delete(e),s.lr()&&Rh(n,e),0===n.Wr.size&&(s.lr()?s._r():Oh(n)&&n.Jr.set("Unknown"))}function kh(t,e){t.Yr.X(e.targetId),$h(t).Pr(e)}function Rh(t,e){t.Yr.X(e),$h(t).vr(e)}function Lh(t){t.Yr=new la({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),$h(t).start(),t.Jr.Br()}function xh(t){return Oh(t)&&!$h(t).hr()&&t.Wr.size>0}function Oh(t){return 0===Ki(t).Gr.size}function Mh(t){t.Yr=void 0}async function Ph(t){t.Wr.forEach(((e,n)=>{kh(t,e)}))}async function Vh(t,e){Mh(t),xh(t)?(t.Jr.Kr(e),Lh(t)):t.Jr.set("Unknown")}async function Fh(t,e,n){if(t.Jr.set("Online"),e instanceof ca&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){$i("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Uh(t,n)}else if(e instanceof aa?t.Yr.ot(e):e instanceof ha?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(hr.min()))try{const e=await Ja(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(gr.EMPTY_BYTE_STRING,n.snapshotVersion)),Rh(t,e);const s=new Ua(n.target,e,1,n.sequenceNumber);kh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){$i("RemoteStore","Failed to raise snapshot:",e),await Uh(t,e)}}async function Uh(t,e,n){if(!Va(e))throw e;t.Gr.add(1),await _h(t),t.Jr.set("Offline"),n||(n=()=>Ja(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{$i("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Ch(t)}))}function $h(t){return t.Xr||(t.Xr=function(t,e,n){const s=Ki(t);return s.Or(),new Th(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
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
     */}(t.datastore,t.asyncQueue,{Di:Ph.bind(null,t),Ni:Vh.bind(null,t),br:Fh.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),xh(t)?Lh(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Mh(t))}))),t.Xr
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
     */}class qh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new qh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wi(Gi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jh(t,e){if(qi("AsyncQueue",`${e}: ${t}`),Va(t))return new Wi(Gi.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class Bh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ar.comparator(e.key,n.key):(t,e)=>Ar.comparator(t.key,e.key),this.keyedMap=ta(),this.sortedSet=new Ko(this.comparator)}static emptySet(t){return new Bh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Bh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class Hh{constructor(){this.eo=new Ko(Ar.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):Hi():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class zh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new zh(t,e,Bh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&po(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class Kh{constructor(){this.so=void 0,this.listeners=[]}}class Gh{constructor(){this.queries=new Ka((t=>go(t)),po),this.onlineState="Unknown",this.io=new Set}}function Wh(t,e){const n=Ki(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(s=!0);i.so=t}}s&&Qh(n)}function Yh(t,e,n){const s=Ki(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Qh(t){t.io.forEach((t=>{t.next()}))}class Xh{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new zh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=zh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
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
     */class Jh{constructor(t){this.key=t}}class Zh{constructor(t){this.key=t}}class tc{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=na(),this.mutatedKeys=na(),this.Ao=vo(t),this.Ro=new Bh(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new Hh,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=co(this.query)&&s.size===this.query.limit?s.last():null,h=uo(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),u=yo(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||h&&this.Ao(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),co(this.query)||uo(this.query))for(;r.size>this.query.limit;){const t=co(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Hi()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new zh(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Hh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=na(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new Zh(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new Jh(n))})),e}ko(t){this.To=t.zn,this.Io=na();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return zh.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class ec{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class nc{constructor(t){this.key=t,this.$o=!1}}class sc{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new Ka((t=>go(t)),po),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ko(Ar.comparator),this.Uo=new Map,this.qo=new sh,this.Ko={},this.jo=new Map,this.Qo=Ha.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ic(t,e){const n=function(t){const e=Ki(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hc.bind(null,e),e.Oo.br=Wh.bind(null,e.eventManager),e.Oo.zo=Yh.bind(null,e.eventManager),e}(t);let s,i;const r=n.Mo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=Ki(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,Pa.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new Ua(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,fo(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.Po(n);i.Bn&&(i=await eh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return lc(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await eh(t.localStore,e,!0),r=new tc(e,i.zn),o=r.Po(i.documents),a=oa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),h=r.applyChanges(o,t.isPrimaryClient,a);lc(t,n,h.Co);const c=new ec(e,n,r);return t.Mo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),h.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&Nh(n.remoteStore,t)}return i}async function rc(t,e){const n=Ki(t),s=n.Mo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter((t=>!po(t,e)))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await th(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Dh(n.remoteStore,s.targetId),cc(n,s.targetId)})).catch(za)):(cc(n,s.targetId),await th(n.localStore,s.targetId,!0))}async function oc(t,e){const n=Ki(t);try{const t=await Za(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(zi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?zi(s.$o):t.removedDocuments.size>0&&(zi(s.$o),s.$o=!1))})),await pc(n,t,e)}catch(t){await za(t)}}function ac(t,e,n){const s=Ki(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Mo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ki(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(s=!0)})),s&&Qh(n)}(s.eventManager,e),t.length&&s.Oo.br(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hc(t,e,n){const s=Ki(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new Ko(Ar.comparator);t=t.insert(r,$r.newNoDocument(r,hr.min()));const n=na().add(r),i=new ra(hr.min(),new Map,new Yo(rr),t,n);await oc(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),fc(s)}else await th(s.localStore,e,!1).then((()=>cc(s,e,n))).catch(za)}function cc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||uc(t,e)}))}function uc(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Dh(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),fc(t))}function lc(t,e,n){for(const s of n)s instanceof Jh?(t.qo.addReference(s.key,e),dc(t,s)):s instanceof Zh?($i("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||uc(t,s.key)):Hi()}function dc(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||($i("SyncEngine","New document in limbo: "+n),t.Lo.add(s),fc(t))}function fc(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Ar(dr.fromString(e)),s=t.Qo.next();t.Uo.set(s,new nc(n)),t.Bo=t.Bo.insert(n,s),Nh(t.remoteStore,new Ua(fo(ho(n.path)),s,2,sr.I))}}async function pc(t,e,n){const s=Ki(t),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Wa.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Oo.br(i),await async function(t,e){const n=Ki(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pa.forEach(e,(e=>Pa.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Pa.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Va(t))throw t;$i("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(e,i)}}}(s.localStore,r))}async function gc(t,e){const n=Ki(t);if(!n.currentUser.isEqual(e)){$i("SyncEngine","User change. New user:",e.toKey());const t=await Xa(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new Wi(Gi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await pc(n,t.Gn)}}function mc(t,e){const n=Ki(t),s=n.Uo.get(e);if(s&&s.$o)return na().add(s.key);{let t=na();const s=n.Fo.get(e);if(!s)return t;for(const e of s){const s=n.Mo.get(e);t=t.unionWith(s.view.bo)}return t}}class yc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Eh(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new Qa(t,e,n,s)}(this.persistence,new Ya,t.initialUser,this.k)}Yo(t){return new ch(lh.ks,this.k)}Jo(t){return new fh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ac(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=gc.bind(null,this.syncEngine),await async function(t,e){const n=Ki(t);e?(n.Gr.delete(2),await Ch(n)):e||(n.Gr.add(2),await _h(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gh}createDatastore(t){const e=Eh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new vh(s));var s;return function(t,e,n,s){return new Ih(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>ac(this.syncEngine,t,0),r=gh.Pt()?new gh:new ph,new Ah(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new sc(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ki(t);$i("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await _h(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class wc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class Ec{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Pi.UNAUTHENTICATED,this.clientId=class{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=ir(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{$i("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wi(Gi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=jh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||($i("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),$i("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Xa(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new yc)),t.offlineComponents}(t);$i("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>async function(t,e){const n=Ki(t);n.asyncQueue.verifyOperationInProgress(),$i("RemoteStore","RemoteStore received new credentials");const s=Oh(n);n.Gr.add(3),await _h(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Ch(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Tc(t){const e=await async function(t){return t.onlineComponents||($i("FirestoreClient","Using default OnlineComponentProvider"),await bc(t,new vc)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=ic.bind(null,e.syncEngine),n.onUnlisten=rc.bind(null,e.syncEngine),n}function Ic(t,e,n={}){const s=new Yi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new wc({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=Ki(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o))),n.fromCache&&"server"===s.source?i.reject(new Wi(Gi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Xh(n,r,{includeMetadataChanges:!0,wo:!0});return async function(t,e){const n=Ki(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Kh),i)try{r.so=await n.onListen(s)}catch(t){const n=jh(t,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&Qh(n)}(t,o)}(await Tc(t),t.asyncQueue,e,n,s))),s.promise}class Sc{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ac{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ac&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Cc=new Map;
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
     */function _c(t){if(Ar.isDocumentKey(t))throw new Wi(Gi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Wi(Gi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Hi()}(t);throw new Wi(Gi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class Dc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Wi(Gi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Wi(Gi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Wi(Gi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class kc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dc({}),this._settingsFrozen=!1,t instanceof Ac?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Wi(Gi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ac(t.options.projectId)}(t))}get app(){if(!this._app)throw new Wi(Gi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Wi(Gi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Xi;switch(t.type){case"gapi":const e=t.client;return zi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new tr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Wi(Gi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Cc.get(t);e&&($i("ComponentProvider","Removing Datastore"),Cc.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class Rc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rc(this.firestore,t,this._key)}}class Lc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Lc(this.firestore,t,this._query)}}class xc extends Lc{constructor(t,e,n){super(t,e,ho(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rc(this.firestore,null,new Ar(t))}withConverter(t){return new xc(this.firestore,t,this._path)}}function Oc(t,e,...n){if(t=(s=t)&&s._delegate?s._delegate:s,function(t,e,n){if(!n)throw new Wi(Gi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof kc){const s=dr.fromString(e,...n);return _c(s),new xc(t,null,s)}var s;{if(!(t instanceof Rc||t instanceof xc))throw new Wi(Gi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(dr.fromString(e,...n));return _c(s),new xc(t.firestore,null,s)}}
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
     */class Mc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new bh(this,"async_queue_retry"),this.bc=()=>{const t=wh();t&&$i("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=wh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=wh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const e=new Yi;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Va(t))throw t;$i("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const e=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw qi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ic=!1,t))))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const s=qh.createAndSchedule(this,t,e,n,(t=>this.Sc(t)));return this.Tc.push(s),s}Pc(){this.Ec&&Hi()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}class Pc extends kc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Mc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fc(this),this._firestoreClient.terminate()}}function Vc(t=function(t="[DEFAULT]"){const e=yt.get(t);if(!e)throw bt.create("no-app",{appName:t});return e}()){return function(t,e){return t.container.getProvider(e)}(t,"firestore").getImmediate()}function Fc(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Sc(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ec(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
     */class Uc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Wi(Gi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class $c{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $c(gr.fromBase64String(t))}catch(t){throw new Wi(Gi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new $c(gr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class qc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Wi(Gi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Wi(Gi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rr(this._lat,t._lat)||rr(this._long,t._long)}}const jc=new RegExp("[~\\*/\\[\\]]");function Bc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new Wi(Gi.INVALID_ARGUMENT,a+t+h)
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
     */}class Hc{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Kc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class zc extends Hc{data(){return super.data()}}function Kc(t,e){return"string"==typeof e?function(t,e,n){if(e.search(jc)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch(s){throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}
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
     */class Gc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wc extends Hc{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Kc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yc extends Wc{data(t={}){return super.data(t)}}class Qc{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Gc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yc(this._firestore,this._userDataWriter,n.key,n,new Gc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Wi(Gi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Yc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Gc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Yc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Gc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Xc(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Hi()}}
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
     */class Jc extends
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
class{convertValue(t,e="none"){switch(Cr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return vr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(wr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Hi()}}convertObject(t,e){const n={};return ur(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new qc(vr(t.latitude),vr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=br(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=yr(t);return new ar(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=dr.fromString(t);zi(Ma(n));const s=new Ac(n.get(1),n.get(3)),i=new Ar(n.popFirst(5));return s.isEqual(e)||qi(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new $c(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rc(this.firestore,null,e)}}function Zc(t){t=Nc(t,Lc);const e=Nc(t.firestore,Pc),n=function(t){return t._firestoreClient||Fc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),s=new Jc(e);return function(t){if(uo(t)&&0===t.explicitOrderBy.length)throw new Wi(Gi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Ic(n,t._query).then((n=>new Qc(e,s,t,n)))}function tu(t,e,n){const s=t.slice();return s[3]=e[n][0],s[4]=e[n][1],s}function eu(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function nu(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function su(t){let e,n,s=t[4]+"";return{c(){e=u("span"),n=l(s),g(e,"class","md:hidden")},m(t,s){a(t,e,s),o(e,n)},p(t,e){2&e&&s!==(s=t[4]+"")&&y(n,s)},d(t){t&&h(e)}}}function iu(t){let e,n=t[0][t[3]]+"";return{c(){e=l(n)},m(t,n){a(t,e,n)},p(t,s){3&s&&n!==(n=t[0][t[3]]+"")&&y(e,n)},d(t){t&&h(e)}}}function ru(e){let n;return{c(){n=l("👎")},m(t,e){a(t,n,e)},p:t,d(t){t&&h(n)}}}function ou(e){let n;return{c(){n=l("👍")},m(t,e){a(t,n,e)},p:t,d(t){t&&h(n)}}}function au(t){let e,n={length:t[0][t[3]]},s=[];for(let e=0;e<n.length;e+=1)s[e]=cu(eu(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=f()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);a(t,e,n)},p(t,i){if(3&i){const i=n.length;let r;for(n={length:t[0][t[3]]},r=i;r<n.length;r+=1)eu(t,n,r),s[r]||(s[r]=cu(),s[r].c(),s[r].m(e.parentNode,e));for(r=n.length;r<i;r+=1)s[r].d(1);s.length=n.length}},d(t){c(s,t),t&&h(e)}}}function hu(t){let e,n={length:t[0][t[3]]},s=[];for(let e=0;e<n.length;e+=1)s[e]=uu(nu(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=f()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);a(t,e,n)},p(t,i){if(3&i){const i=n.length;let r;for(n={length:t[0][t[3]]},r=i;r<n.length;r+=1)nu(t,n,r),s[r]||(s[r]=uu(),s[r].c(),s[r].m(e.parentNode,e));for(r=n.length;r<i;r+=1)s[r].d(1);s.length=n.length}},d(t){c(s,t),t&&h(e)}}}function cu(t){let e;return{c(){e=l("🍸")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function uu(t){let e;return{c(){e=l("🍺")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function lu(t){let e,n,s,i,r="name"!==t[3]&&su(t);function c(t,e){return"drink_quality"===t[3]?hu:"drink_choice"===t[3]?au:!0===t[0][t[3]]?ou:!1===t[0][t[3]]?ru:iu}let l=c(t),f=l(t);return{c(){e=u("span"),r&&r.c(),n=d(),f.c(),s=d(),g(e,"class",i=t[2](t[3]))},m(t,i){a(t,e,i),r&&r.m(e,null),o(e,n),f.m(e,null),o(e,s)},p(t,o){"name"!==t[3]?r?r.p(t,o):(r=su(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),l===(l=c(t))&&f?f.p(t,o):(f.d(1),f=l(t),f&&(f.c(),f.m(e,s))),6&o&&i!==(i=t[2](t[3]))&&g(e,"class",i)},d(t){t&&h(e),r&&r.d(),f.d()}}}function du(e){let n,s=Object.entries(e[1]),i=[];for(let t=0;t<s.length;t+=1)i[t]=lu(tu(e,s,t));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();n=f()},m(t,e){for(let n=0;n<i.length;n+=1)i[n].m(t,e);a(t,n,e)},p(t,[e]){if(7&e){let r;for(s=Object.entries(t[1]),r=0;r<s.length;r+=1){const o=tu(t,s,r);i[r]?i[r].p(o,e):(i[r]=lu(o),i[r].c(),i[r].m(n.parentNode,n))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},i:t,o:t,d(t){c(i,t),t&&h(n)}}}function fu(t,e,n){let s,{pubData:i}=e,{headings:r}=e;return t.$$set=t=>{"pubData"in t&&n(0,i=t.pubData),"headings"in t&&n(1,r=t.headings)},n(2,s=t=>{let e="";return e="name"===t?"border-b-2 w-full text-xl":"w-1/2 md:w-full",`flex flex-col md:flex-row justify-center md:justify-start items-center py-4 md:border-b-2 ${e}`}),[i,r,s]}!function(t,e=!0){Vi="9.6.4",Et(new et("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Pc(s,new Ji(t.getProvider("auth-internal")),new nr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),It(Mi,"3.4.3",t),It(Mi,"3.4.3","esm2017")}();class pu extends G{constructor(t){super(),K(this,t,fu,du,r,{pubData:0,headings:1})}}function gu(t){let e;return{c(){e=l("+")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function mu(t){let e;return{c(){e=l("-")},m(t,n){a(t,e,n)},d(t){t&&h(e)}}}function yu(t){let e,n,i,r,c,l,f,y,E,b,T,I,S,A,C,_,N,k,R,L,x,O,M,P,V,F,U,$;return{c(){e=u("div"),n=u("label"),n.textContent="Group size",i=d(),r=u("input"),c=d(),l=u("div"),f=u("label"),f.textContent="Food?",y=d(),E=u("select"),b=u("option"),b.textContent="Don't care",I=u("option"),I.textContent="Yes",A=u("option"),A.textContent="No",_=d(),N=u("div"),k=u("label"),k.textContent="Shows sport?",R=d(),L=u("select"),x=u("option"),x.textContent="Don't care",M=u("option"),M.textContent="Yes",V=u("option"),V.textContent="No",g(n,"for","max_group"),g(r,"type","number"),g(r,"id","max_group"),g(r,"class","filters__input w-full md:w-auto"),g(e,"class","filters__section text-center md:text-left md:mr-4 mb-4 md:mb-0"),g(f,"for","food"),b.__value=T="both",b.value=b.__value,I.__value=S=!0,I.value=I.__value,A.__value=C=!1,A.value=A.__value,g(E,"name","food"),g(E,"class","w-full md:w-auto"),void 0===t[1]&&D((()=>t[6].call(E))),g(l,"class","filters__section text-center md:text-left md:mr-4 mb-4 md:mb-0"),g(k,"for","sport"),x.__value=O="both",x.value=x.__value,M.__value=P=!0,M.value=M.__value,V.__value=F=!1,V.value=V.__value,g(L,"name","food"),g(L,"class","w-full md:w-auto"),void 0===t[2]&&D((()=>t[7].call(L))),g(N,"class","filters__section text-center md:text-left md:mr-4 mb-4 md:mb-0")},m(s,h){a(s,e,h),o(e,n),o(e,i),o(e,r),v(r,t[0]),a(s,c,h),a(s,l,h),o(l,f),o(l,y),o(l,E),o(E,b),o(E,I),o(E,A),w(E,t[1]),a(s,_,h),a(s,N,h),o(N,k),o(N,R),o(N,L),o(L,x),o(L,M),o(L,V),w(L,t[2]),U||($=[p(r,"input",t[5]),p(E,"change",t[6]),p(L,"change",t[7])],U=!0)},p(t,e){1&e&&m(r.value)!==t[0]&&v(r,t[0]),2&e&&w(E,t[1]),4&e&&w(L,t[2])},d(t){t&&h(e),t&&h(c),t&&h(l),t&&h(_),t&&h(N),U=!1,s($)}}}function vu(e){let n,s,i,r,c,f;function m(t,e){return t[3]?mu:gu}let y=m(e),v=y(e),w=e[3]&&yu(e);return{c(){n=u("section"),s=u("h2"),i=l("Filters \r\n\r\n        "),v.c(),r=d(),w&&w.c(),g(s,"class","text-2xl md:hidden text-center mb-4 border-y-2"),g(n,"class","filters flex flex-col md:flex-row justify-center")},m(t,h){a(t,n,h),o(n,s),o(s,i),v.m(s,null),o(n,r),w&&w.m(n,null),c||(f=p(s,"click",e[4]),c=!0)},p(t,[e]){y!==(y=m(t))&&(v.d(1),v=y(t),v&&(v.c(),v.m(s,null))),t[3]?w?w.p(t,e):(w=yu(t),w.c(),w.m(n,null)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&h(n),v.d(),w&&w.d(),c=!1,f()}}}function wu(t,e,n){let{groupSize:s=5}=e,{food:i="both"}=e,{sport:r="both"}=e,o=!0;return t.$$set=t=>{"groupSize"in t&&n(0,s=t.groupSize),"food"in t&&n(1,i=t.food),"sport"in t&&n(2,r=t.sport)},[s,i,r,o,()=>{n(3,o=!o)},function(){s=m(this.value),n(0,s)},function(){i=E(this),n(1,i)},function(){r=E(this),n(2,r)}]}class Eu extends G{constructor(t){super(),K(this,t,wu,vu,r,{groupSize:0,food:1,sport:2})}}function bu(t,e,n){const s=t.slice();return s[14]=e[n],s}function Tu(t,e,n){const s=t.slice();return s[17]=e[n][0],s[18]=e[n][1],s}function Iu(e){let n;return{c(){n=u("p"),n.textContent="Sorry there are no pubs that match your criteria"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function Su(e){let n;return{c(){n=u("p"),n.textContent="Loading"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function Au(t){let e,n,s,i=Object.entries(t[7]),r=[];for(let e=0;e<i.length;e+=1)r[e]=Cu(Tu(t,i,e));let l=t[6],f=[];for(let e=0;e<l.length;e+=1)f[e]=_u(bu(t,l,e));const p=t=>$(f[t],1,1,(()=>{f[t]=null}));return{c(){e=u("div");for(let t=0;t<r.length;t+=1)r[t].c();n=d();for(let t=0;t<f.length;t+=1)f[t].c();g(e,"class","flex flex-wrap md:grid mt-6"),g(e,"style",t[4])},m(t,i){a(t,e,i);for(let t=0;t<r.length;t+=1)r[t].m(e,null);o(e,n);for(let t=0;t<f.length;t+=1)f[t].m(e,null);s=!0},p(t,o){if(128&o){let s;for(i=Object.entries(t[7]),s=0;s<i.length;s+=1){const a=Tu(t,i,s);r[s]?r[s].p(a,o):(r[s]=Cu(a),r[s].c(),r[s].m(e,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=i.length}if(192&o){let n;for(l=t[6],n=0;n<l.length;n+=1){const s=bu(t,l,n);f[n]?(f[n].p(s,o),U(f[n],1)):(f[n]=_u(s),f[n].c(),U(f[n],1),f[n].m(e,null))}for(V(),n=l.length;n<f.length;n+=1)p(n);F()}(!s||16&o)&&g(e,"style",t[4])},i(t){if(!s){for(let t=0;t<l.length;t+=1)U(f[t]);s=!0}},o(t){f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)$(f[t]);s=!1},d(t){t&&h(e),c(r,t),c(f,t)}}}function Cu(e){let n,s,i=e[18]+"";return{c(){n=u("span"),s=l(i),g(n,"class","table__header text-lg hidden md:block")},m(t,e){a(t,n,e),o(n,s)},p:t,d(t){t&&h(n)}}}function _u(t){let e,n;return e=new pu({props:{pubData:t[14],headings:t[7]}}),{c(){j(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.pubData=t[14]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Nu(t){let e,n,s,i,r,c,l,f,p,m,y,v;function w(e){t[10](e)}function E(e){t[11](e)}function b(e){t[12](e)}function T(e){t[13](e)}let I={};void 0!==t[3]&&(I.name=t[3]),void 0!==t[0]&&(I.groupSize=t[0]),void 0!==t[1]&&(I.food=t[1]),void 0!==t[2]&&(I.sport=t[2]),n=new Eu({props:I}),S.push((()=>q(n,"name",w))),S.push((()=>q(n,"groupSize",E))),S.push((()=>q(n,"food",b))),S.push((()=>q(n,"sport",T)));const A=[Au,Su,Iu],C=[];function _(t,e){return 96&e&&(f=null),32&e&&(p=null),null==f&&(f=!!(t[6].length>0&&t[5]())),f?0:(null==p&&(p=!t[5]()),p?1:2)}return m=_(t,-1),y=C[m]=A[m](t),{c(){e=u("section"),j(n.$$.fragment),l=d(),y.c(),g(e,"class","pub-listings")},m(t,s){a(t,e,s),B(n,e,null),o(e,l),C[m].m(e,null),v=!0},p(t,[o]){const a={};!s&&8&o&&(s=!0,a.name=t[3],k((()=>s=!1))),!i&&1&o&&(i=!0,a.groupSize=t[0],k((()=>i=!1))),!r&&2&o&&(r=!0,a.food=t[1],k((()=>r=!1))),!c&&4&o&&(c=!0,a.sport=t[2],k((()=>c=!1))),n.$set(a);let h=m;m=_(t,o),m===h?C[m].p(t,o):(V(),$(C[h],1,1,(()=>{C[h]=null})),F(),y=C[m],y?y.p(t,o):(y=C[m]=A[m](t),y.c()),U(y,1),y.m(e,null))},i(t){v||(U(n.$$.fragment,t),U(y),v=!0)},o(t){$(n.$$.fragment,t),$(y),v=!1},d(t){t&&h(e),H(n),C[m].d()}}}function Du(t,e,n){let s,i,r,o,a,h,c,u,{data:l}=e;return t.$$set=t=>{"data"in t&&n(8,l=t.data)},t.$$.update=()=>{263&t.$$.dirty&&n(6,s=l.filter((t=>(void 0===a||t.max_group>=a)&&(void 0===h||t.food===h||"both"===h)&&(void 0===c||t.sport===c||"both"===c)))),256&t.$$.dirty&&n(5,i=()=>{if(l.length>0)return n(9,u=Object.keys(l[0]).length-3),!0}),512&t.$$.dirty&&n(4,r=`grid-template-columns: repeat(${u}, 1fr);`)},[a,h,c,o,r,i,s,{name:"Name",max_group:"Max group size",food:"Food?",sport:"Sport?",music:"Music",non_beer:"Non-beer choice",drink_choice:"Drink variety"},l,u,function(t){o=t,n(3,o)},function(t){a=t,n(0,a)},function(t){h=t,n(1,h)},function(t){c=t,n(2,c)}]}class ku extends G{constructor(t){super(),K(this,t,Du,Nu,r,{data:8})}}function Ru(t){let e,n;return e=new ku({props:{data:t[0]}}),{c(){j(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[0]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Lu(e){let n,s,i,c,l,f=e[0],p=Ru(e);return{c(){n=u("main"),s=u("div"),i=u("h1"),i.textContent="Edinburgh Pub Finder",c=d(),p.c(),g(i,"class","text-center text-4xl md:text-5xl p-6"),g(s,"class","container mx-auto")},m(t,e){a(t,n,e),o(n,s),o(s,i),o(s,c),p.m(s,null),l=!0},p(e,[n]){1&n&&r(f,f=e[0])?(V(),$(p,1,1,t),F(),p=Ru(e),p.c(),U(p),p.m(s,null)):p.p(e,n)},i(t){l||(U(p),l=!0)},o(t){$(p),l=!1},d(t){t&&h(n),p.d(t)}}}function xu(t,e,n){!function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:gt,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw bt.create("bad-app-name",{appName:String(s)});const i=yt.get(s);if(i){if(Z(t,i.options)&&Z(n,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const r=new it(s);for(const t of vt.values())r.addComponent(t);const o=new Tt(t,n,r);yt.set(s,o)}({apiKey:"AIzaSyD7IVKm4pg_IG3FIYjzqrjVVet7KocGKcM",authDomain:"edinburgh-pubs-24942.firebaseapp.com",projectId:"edinburgh-pubs-24942",storageBucket:"edinburgh-pubs-24942.appspot.com",messagingSenderId:"600769056466",appId:"1:600769056466:web:ae2e55b79a8c7661eea70b",measurementId:"G-HC10EHXZBN"});const s=Vc();let i=new Array;return(async()=>{const t=[];(await Zc(Oc(s,"Pubs"))).forEach((e=>{t.push(e.data())})),n(0,i=t)})(),[i]}return new class extends G{constructor(t){super(),K(this,t,xu,Lu,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
