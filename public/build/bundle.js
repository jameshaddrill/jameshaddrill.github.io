var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function m(t,e){t.value=null==e?"":e}function y(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function v(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let w;function E(t){w=t}const b=[],T=[],I=[],S=[],C=Promise.resolve();let A=!1;function _(t){I.push(t)}function N(t){S.push(t)}const D=new Set;let k=0;function R(){const t=w;do{for(;k<b.length;){const t=b[k];k++,E(t),L(t.$$)}for(E(null),b.length=0,k=0;T.length;)T.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];D.has(e)||(D.add(e),e())}I.length=0}while(b.length);for(;S.length;)S.pop()();A=!1,D.clear(),E(t)}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const x=new Set;let O;function M(){O={r:0,c:[],p:O}}function P(){O.r||s(O.c),O=O.p}function V(t,e){t&&t.i&&(x.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(x.has(t))return;x.add(t),O.c.push((()=>{x.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function U(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function $(t){t&&t.c()}function q(t,n,r,o){const{fragment:a,on_mount:h,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,r),o||_((()=>{const n=h.map(e).filter(i);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(_)}function B(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(b.push(t),A||(A=!0,C.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,i,r,o,a,c,u,l=[-1]){const d=w;E(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:i.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=r?r(e,i.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&j(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();i.intro&&V(e.$$.fragment),q(e,i.target,i.anchor,i.customElement),R()}E(d)}class z{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
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
     */class K{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function G(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class W extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(Q,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new W(s,o,n)}}const Q=/\{\$([^}]+)}/g;function X(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(J(n)&&J(r)){if(!X(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function J(t){return null!==t&&"object"==typeof t}
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
     */class Z{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const tt="[DEFAULT]";
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
     */class et{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new K;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:tt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===tt?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:tt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class nt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new et(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var st;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(st||(st={}));const it={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},rt=st.INFO,ot={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},at=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=ot[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class ht{constructor(t){this.name=t,this._logLevel=rt,this._logHandler=at,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?it[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}
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
     */class ct{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ut="@firebase/app",lt="0.7.14",dt=new ht("@firebase/app"),ft="[DEFAULT]",pt={[ut]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},gt=new Map,mt=new Map;function yt(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vt(t){const e=t.name;if(mt.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;mt.set(e,t);for(const e of gt.values())yt(e,t);return!0}
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
const wt=new Y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Et{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Z("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}
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
     */function bt(t,e,n){var s;let i=null!==(s=pt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void dt.warn(t.join(" "))}vt(new Z(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */var Tt;Tt="",vt(new Z("platform-logger",(t=>new ct(t)),"PRIVATE")),bt(ut,lt,Tt),bt(ut,lt,"esm2017"),bt("fire-js","");
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
bt("firebase","9.6.4","app");var It,St="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ct=Ct||{},At=St||self;function _t(){}function Nt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Dt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var kt="closure_uid_"+(1e9*Math.random()>>>0),Rt=0;function Lt(t,e,n){return t.call.apply(t.bind,arguments)}function xt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ot(t,e,n){return(Ot=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Lt:xt).apply(null,arguments)}function Mt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Pt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Vt(){this.s=this.s,this.o=this.o}var Ft={};Vt.prototype.s=!1,Vt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,kt)&&t[kt]||(t[kt]=++Rt)}(this);delete Ft[t]}},Vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ut=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$t=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function qt(t){return Array.prototype.concat.apply([],arguments)}function Bt(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jt(t){return/^[\s\xa0]*$/.test(t)}var Ht,zt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kt(t,e){return-1!=t.indexOf(e)}function Gt(t,e){return t<e?-1:t>e?1:0}t:{var Wt=At.navigator;if(Wt){var Yt=Wt.userAgent;if(Yt){Ht=Yt;break t}}Ht=""}function Qt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xt(t){const e={};for(const n in t)e[n]=t[n];return e}var Jt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zt(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Jt.length;e++)n=Jt[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function te(t){return te[" "](t),t}te[" "]=_t;var ee,ne,se=Kt(Ht,"Opera"),ie=Kt(Ht,"Trident")||Kt(Ht,"MSIE"),re=Kt(Ht,"Edge"),oe=re||ie,ae=Kt(Ht,"Gecko")&&!(Kt(Ht.toLowerCase(),"webkit")&&!Kt(Ht,"Edge"))&&!(Kt(Ht,"Trident")||Kt(Ht,"MSIE"))&&!Kt(Ht,"Edge"),he=Kt(Ht.toLowerCase(),"webkit")&&!Kt(Ht,"Edge");function ce(){var t=At.document;return t?t.documentMode:void 0}t:{var ue="",le=(ne=Ht,ae?/rv:([^\);]+)(\)|;)/.exec(ne):re?/Edge\/([\d\.]+)/.exec(ne):ie?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ne):he?/WebKit\/(\S+)/.exec(ne):se?/(?:Version)[ \/]?(\S+)/.exec(ne):void 0);if(le&&(ue=le?le[1]:""),ie){var de=ce();if(null!=de&&de>parseFloat(ue)){ee=String(de);break t}}ee=ue}var fe,pe={};function ge(){return function(t){var e=pe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=zt(String(ee)).split("."),n=zt("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Gt(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Gt(0==i[2].length,0==r[2].length)||Gt(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(At.document&&ie){var me=ce();fe=me||(parseInt(ee,10)||void 0)}else fe=void 0;var ye=fe,ve=function(){if(!At.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{At.addEventListener("test",_t,e),At.removeEventListener("test",_t,e)}catch(t){}return t}();function we(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ee(t,e){if(we.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ae){t:{try{te(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:be[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ee.Z.h.call(this)}}we.prototype.h=function(){this.defaultPrevented=!0},Pt(Ee,we);var be={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Ie=0;function Se(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ie,this.ca=this.fa=!1}function Ce(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ae(t){this.src=t,this.g={},this.h=0}function _e(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Ut(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ce(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ne(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Ae.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Ne(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Se(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var De="closure_lm_"+(1e6*Math.random()|0),ke={};function Re(t,e,n,s,i){if(s&&s.once)return xe(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Re(t,e[r],n,s,i);return null}return n=$e(n),t&&t[Te]?t.N(e,n,Dt(s)?!!s.capture:!!s,i):Le(t,e,n,!1,s,i)}function Le(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Dt(i)?!!i.capture:!!i,a=Fe(t);if(a||(t[De]=a=new Ae(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Ve;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ve||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Pe(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function xe(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)xe(t,e[r],n,s,i);return null}return n=$e(n),t&&t[Te]?t.O(e,n,Dt(s)?!!s.capture:!!s,i):Le(t,e,n,!0,s,i)}function Oe(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Oe(t,e[r],n,s,i);else s=Dt(s)?!!s.capture:!!s,n=$e(n),t&&t[Te]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ne(r=t.g[e],n,s,i))&&(Ce(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Fe(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ne(e,n,s,i)),(n=-1<t?e[t]:null)&&Me(n))}function Me(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Te])_e(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Pe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fe(e))?(_e(n,t),0==n.h&&(n.src=null,e[De]=null)):Ce(t)}}}function Pe(t){return t in ke?ke[t]:ke[t]="on"+t}function Ve(t,e){if(t.ca)t=!0;else{e=new Ee(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Me(t),t=n.call(s,e)}return t}function Fe(t){return(t=t[De])instanceof Ae?t:null}var Ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function $e(t){return"function"==typeof t?t:(t[Ue]||(t[Ue]=function(e){return t.handleEvent(e)}),t[Ue])}function qe(){Vt.call(this),this.i=new Ae(this),this.P=this,this.I=null}function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new we(e,t);else if(e instanceof we)e.target=e.target||t;else{var i=e;Zt(e=new we(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=je(o,s,!0,e)&&i}if(i=je(o=e.g=t,s,!0,e)&&i,i=je(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=je(o=e.g=n[r],s,!1,e)&&i}function je(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&_e(t.i,o),i=!1!==a.call(h,s)&&i}}return i&&!s.defaultPrevented}Pt(qe,Vt),qe.prototype[Te]=!0,qe.prototype.removeEventListener=function(t,e,n,s){Oe(this,t,e,n,s)},qe.prototype.M=function(){if(qe.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ce(n[s]);delete e.g[t],e.h--}}this.I=null},qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var He=At.JSON.stringify;function ze(){var t=Je;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ke,Ge=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new We),(t=>t.reset()));class We{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ye(t){At.setTimeout((()=>{throw t}),0)}function Qe(t,e){Ke||function(){var t=At.Promise.resolve(void 0);Ke=function(){t.then(Ze)}}(),Xe||(Ke(),Xe=!0),Je.add(t,e)}var Xe=!1,Je=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ge.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Ze(){for(var t;t=ze();){try{t.h.call(t.g)}catch(t){Ye(t)}var e=Ge;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xe=!1}function tn(t,e){qe.call(this),this.h=t||1,this.g=e||At,this.j=Ot(this.kb,this),this.l=Date.now()}function en(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function nn(t,e,n){if("function"==typeof t)n&&(t=Ot(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ot(t.handleEvent,t)}return 2147483647<Number(e)?-1:At.setTimeout(t,e||0)}function sn(t){t.g=nn((()=>{t.g=null,t.i&&(t.i=!1,sn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Pt(tn,qe),(It=tn.prototype).da=!1,It.S=null,It.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(en(this),this.start()))}},It.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},It.M=function(){tn.Z.M.call(this),en(this),delete this.g};class rn extends Vt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:sn(this)}M(){super.M(),this.g&&(At.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(t){Vt.call(this),this.h=t,this.g={}}Pt(on,Vt);var an=[];function hn(t,e,n,s){Array.isArray(n)||(n&&(an[0]=n.toString()),n=an);for(var i=0;i<n.length;i++){var r=Re(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function cn(t){Qt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Me(t)}),t),t.g={}}function un(){this.g=!0}function ln(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return He(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}on.prototype.M=function(){on.Z.M.call(this),cn(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},un.prototype.Aa=function(){this.g=!1},un.prototype.info=function(){};var dn={},fn=null;function pn(){return fn=fn||new qe}function gn(t){we.call(this,dn.Ma,t)}function mn(t){const e=pn();Be(e,new gn(e,t))}function yn(t,e){we.call(this,dn.STAT_EVENT,t),this.stat=e}function vn(t){const e=pn();Be(e,new yn(e,t))}function wn(t,e){we.call(this,dn.Na,t),this.size=e}function En(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return At.setTimeout((function(){t()}),e)}dn.Ma="serverreachability",Pt(gn,we),dn.STAT_EVENT="statevent",Pt(yn,we),dn.Na="timingevent",Pt(wn,we);var bn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Tn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function In(){}function Sn(t){return t.h||(t.h=t.i())}function Cn(){}In.prototype.h=null;var An,_n={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nn(){we.call(this,"d")}function Dn(){we.call(this,"c")}function kn(){}function Rn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new on(this),this.P=xn,t=oe?125:void 0,this.W=new tn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ln}function Ln(){this.i=null,this.g="",this.h=!1}Pt(Nn,we),Pt(Dn,we),Pt(kn,In),kn.prototype.g=function(){return new XMLHttpRequest},kn.prototype.i=function(){return{}},An=new kn;var xn=45e3,On={},Mn={};function Pn(t,e,n){t.K=1,t.v=rs(Zn(e)),t.s=n,t.U=!0,Vn(t,null)}function Vn(t,e){t.F=Date.now(),qn(t),t.A=Zn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),vs(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ln,t.g=vi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new rn(Ot(t.Ia,t,t.g),t.O)),hn(t.V,t.g,"readystatechange",t.gb),e=t.H?Xt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mn(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Fn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Un(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=$n(t,n),s==Mn){4==e&&(t.o=4,vn(14),i=!1),ln(t.j,t.m,null,"[Incomplete Response]");break}if(s==On){t.o=4,vn(15),ln(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ln(t.j,t.m,s,null),Kn(t,s)}Fn(t)&&s!=Mn&&s!=On&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,vn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ui(e),e.L=!0,vn(11))):(ln(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),Hn(t))}function $n(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Mn:(n=Number(e.substring(n,s)),isNaN(n)?On:(s+=1)+n>e.length?Mn:(e=e.substr(s,n),t.C=s+n,e))}function qn(t){t.Y=Date.now()+t.P,Bn(t,t.P)}function Bn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=En(Ot(t.eb,t),e)}function jn(t){t.B&&(At.clearTimeout(t.B),t.B=null)}function Hn(t){0==t.l.G||t.I||fi(t.l,t)}function zn(t){jn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,en(t.W),cn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Kn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ss(n.i,t)))if(n.I=t.N,!t.J&&Ss(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;di(n),ei(n)}ci(n),vn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=En(Ot(n.ab,n),6e3));if(1>=Is(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else gi(n,11)}else if((t.J||n.g==t)&&di(n),!jt(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Kt(t,"spdy")||Kt(t,"quic")||Kt(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Cs(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,is(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=yi(s,s.H?s.la:null,s.W),o.J){As(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(jn(a),qn(a)),s.g=o}else hi(s);0<n.l.length&&ii(n)}else"stop"!=c[0]&&"close"!=c[0]||gi(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?gi(n,7):ti(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}mn(4)}catch(t){}}function Gn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Nt(t)||"string"==typeof t)$t(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Nt(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Nt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Wn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Wn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Yn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Qn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Qn(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(It=Rn.prototype).setTimeout=function(t){this.P=t},It.gb=function(t){t=t.target;const e=this.L;e&&3==Ys(t)?e.l():this.Ia(t)},It.Ia=function(t){try{if(t==this.g)t:{const u=Ys(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||oe||this.g&&(this.h.h||this.g.ga()||Qs(this.g)))){this.I||4!=u||7==e||mn(8==e||0>=l?3:2),jn(this);var n=this.g.ba();this.N=n;e:if(Fn(this)){var s=Qs(this.g);t="";var i=s.length,r=4==Ys(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){zn(this),Hn(this);var o="";break e}this.h.i=new At.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jt(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,vn(12),zn(this),Hn(this);break t}ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Kn(this,n)}this.U?(Un(this,u,o),oe&&this.i&&3==u&&(hn(this.V,this.W,"tick",this.fb),this.W.start())):(ln(this.j,this.m,o,null),Kn(this,o)),4==u&&zn(this),this.i&&!this.I&&(4==u?fi(this.l,this):(this.i=!1,qn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,vn(12)):(this.o=0,vn(13)),zn(this),Hn(this)}}}catch(t){}},It.fb=function(){if(this.g){var t=Ys(this.g),e=this.g.ga();this.C<e.length&&(jn(this),Un(this,t,e),this.i&&4!=t&&qn(this))}},It.cancel=function(){this.I=!0,zn(this)},It.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(mn(3),vn(17)),zn(this),this.o=2,Hn(this)):Bn(this,this.Y-t)},(It=Wn.prototype).R=function(){Yn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},It.T=function(){return Yn(this),this.g.concat()},It.get=function(t,e){return Qn(this.h,t)?this.h[t]:e},It.set=function(t,e){Qn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},It.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Xn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Jn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Jn){this.g=void 0!==e?e:t.g,ts(this,t.j),this.s=t.s,es(this,t.i),ns(this,t.m),this.l=t.l,e=t.h;var n=new ps;n.i=e.i,e.g&&(n.g=new Wn(e.g),n.h=e.h),ss(this,n),this.o=t.o}else t&&(n=String(t).match(Xn))?(this.g=!!e,ts(this,n[1]||"",!0),this.s=os(n[2]||""),es(this,n[3]||"",!0),ns(this,n[4]),this.l=os(n[5]||"",!0),ss(this,n[6]||"",!0),this.o=os(n[7]||"")):(this.g=!!e,this.h=new ps(null,this.g))}function Zn(t){return new Jn(t)}function ts(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function es(t,e,n){t.i=n?os(e,!0):e}function ns(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ss(t,e,n){e instanceof ps?(t.h=e,function(t,e){e&&!t.j&&(gs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ms(this,e),vs(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=as(e,ds)),t.h=new ps(e,t.g))}function is(t,e,n){t.h.set(e,n)}function rs(t){return is(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,hs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,cs,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(as(e,cs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(as(n,"/"==n.charAt(0)?ls:us,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,fs)),t.join("")};var cs=/[#\/\?@]/g,us=/[#\?:]/g,ls=/[#\?]/g,ds=/[#\?@]/g,fs=/#/g;function ps(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gs(t){t.g||(t.g=new Wn,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ms(t,e){gs(t),e=ws(t,e),Qn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Qn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Yn(t)))}function ys(t,e){return gs(t),e=ws(t,e),Qn(t.g.h,e)}function vs(t,e,n){ms(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),Bt(n)),t.h+=n.length)}function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(It=ps.prototype).add=function(t,e){gs(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},It.forEach=function(t,e){gs(this),this.g.forEach((function(n,s){$t(n,(function(n){t.call(e,n,s,this)}),this)}),this)},It.T=function(){gs(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},It.R=function(t){gs(this);var e=[];if("string"==typeof t)ys(this,t)&&(e=qt(e,this.g.get(ws(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qt(e,t[n])}return e},It.set=function(t,e){return gs(this),this.i=null,ys(this,t=ws(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},It.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},It.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Es(t){this.l=t||bs,At.PerformanceNavigationTiming?t=0<(t=At.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(At.g&&At.g.Ea&&At.g.Ea()&&At.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bs=10;function Ts(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Is(t){return t.h?1:t.g?t.g.size:0}function Ss(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cs(t,e){t.g?t.g.add(e):t.h=e}function As(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _s(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bt(t.i)}function Ns(){}function Ds(){this.g=new Ns}function ks(t,e,n){const s=n||"";try{Gn(t,(function(t,n){let i=t;Dt(t)&&(i=He(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Rs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Ls(t){this.l=t.$b||null,this.j=t.ib||!1}function xs(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Os,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Es.prototype.cancel=function(){if(this.i=_s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ns.prototype.stringify=function(t){return At.JSON.stringify(t,void 0)},Ns.prototype.parse=function(t){return At.JSON.parse(t,void 0)},Pt(Ls,In),Ls.prototype.g=function(){return new xs(this.l,this.j)},Ls.prototype.i=function(t){return function(){return t}}({}),Pt(xs,qe);var Os=0;function Ms(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ps(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vs(t)}function Vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(It=xs.prototype).open=function(t,e){if(this.readyState!=Os)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vs(this)},It.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||At).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},It.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ps(this)),this.readyState=Os},It.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==At.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ms(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},It.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ps(this):Vs(this),3==this.readyState&&Ms(this)}},It.Ua=function(t){this.g&&(this.response=this.responseText=t,Ps(this))},It.Ta=function(t){this.g&&(this.response=t,Ps(this))},It.ha=function(){this.g&&Ps(this)},It.setRequestHeader=function(t,e){this.v.append(t,e)},It.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},It.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fs=At.JSON.parse;function Us(t){qe.call(this),this.headers=new Wn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$s,this.K=this.L=!1}Pt(Us,qe);var $s="",qs=/^https?$/i,Bs=["POST","PUT"];function js(t){return"content-type"==t.toLowerCase()}function Hs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zs(t),Gs(t)}function zs(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}function Ks(t){if(t.h&&void 0!==Ct&&(!t.C[1]||4!=Ys(t)||2!=t.ba()))if(t.v&&4==Ys(t))nn(t.Fa,0,t);else if(Be(t,"readystatechange"),4==Ys(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Xn)[1]||null;if(!i&&At.self&&At.self.location){var r=At.self.location.protocol;i=r.substr(0,r.length-1)}s=!qs.test(i?i.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Ys(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",zs(t)}}finally{Gs(t)}}}function Gs(t,e){if(t.g){Ws(t);const n=t.g,s=t.C[0]?_t:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Ws(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(At.clearTimeout(t.A),t.A=null)}function Ys(t){return t.g?t.g.readyState:0}function Qs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $s:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Xs(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return Qt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):is(t,e,n))}function Js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zs(t){this.za=0,this.l=[],this.h=new un,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Js("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Js("baseRetryDelayMs",5e3,t),this.$a=Js("retryDelaySeedMs",1e4,t),this.Ya=Js("forwardChannelMaxRetries",2,t),this.ra=Js("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Es(t&&t.concurrentRequestLimit),this.Ca=new Ds,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ti(t){if(ni(t),3==t.G){var e=t.V++,n=Zn(t.F);is(n,"SID",t.J),is(n,"RID",e),is(n,"TYPE","terminate"),oi(t,n),(e=new Rn(t,t.h,e,void 0)).K=2,e.v=rs(Zn(n)),n=!1,At.navigator&&At.navigator.sendBeacon&&(n=At.navigator.sendBeacon(e.v.toString(),"")),!n&&At.Image&&((new Image).src=e.v,n=!0),n||(e.g=vi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qn(e)}mi(t)}function ei(t){t.g&&(ui(t),t.g.cancel(),t.g=null)}function ni(t){ei(t),t.u&&(At.clearTimeout(t.u),t.u=null),di(t),t.i.cancel(),t.m&&("number"==typeof t.m&&At.clearTimeout(t.m),t.m=null)}function si(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&ii(t)}function ii(t){Ts(t.i)||t.m||(t.m=!0,Qe(t.Ha,t),t.C=0)}function ri(t,e){var n;n=e?e.m:t.V++;const s=Zn(t.F);is(s,"SID",t.J),is(s,"RID",n),is(s,"AID",t.U),oi(t,s),t.o&&t.s&&Xs(s,t.o,t.s),n=new Rn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ai(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cs(t.i,n),Pn(n,s,e)}function oi(t,e){t.j&&Gn({},(function(t,n){is(e,n,t)}))}function ai(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ot(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{ks(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function hi(t){t.g||t.u||(t.Y=1,Qe(t.Ga,t),t.A=0)}function ci(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=En(Ot(t.Ga,t),pi(t,t.A)),t.A++,!0)}function ui(t){null!=t.B&&(At.clearTimeout(t.B),t.B=null)}function li(t){t.g=new Rn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Zn(t.oa);is(e,"RID","rpc"),is(e,"SID",t.J),is(e,"CI",t.N?"0":"1"),is(e,"AID",t.U),oi(t,e),is(e,"TYPE","xmlhttp"),t.o&&t.s&&Xs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=rs(Zn(e)),n.s=null,n.U=!0,Vn(n,t)}function di(t){null!=t.v&&(At.clearTimeout(t.v),t.v=null)}function fi(t,e){var n=null;if(t.g==e){di(t),ui(t),t.g=null;var s=2}else{if(!Ss(t.i,e))return;n=e.D,As(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Be(s=pn(),new wn(s,n,e,i)),ii(t)}else hi(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(Is(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=En(Ot(t.Ha,t,e),pi(t,t.C)),t.C++,0)))}(t,e)||2==s&&ci(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gi(t,5);break;case 4:gi(t,10);break;case 3:gi(t,6);break;default:gi(t,2)}}function pi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Ot(t.jb,t);n||(n=new Jn("//www.google.com/images/cleardot.gif"),At.location&&"http"==At.location.protocol||ts(n,"https"),rs(n)),function(t,e){const n=new un;if(At.Image){const s=new Image;s.onload=Mt(Rs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Mt(Rs,n,s,"TestLoadImage: error",!1,e),s.onabort=Mt(Rs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Mt(Rs,n,s,"TestLoadImage: timeout",!1,e),At.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else vn(2);t.G=0,t.j&&t.j.va(e),mi(t),ni(t)}function mi(t){t.G=0,t.I=-1,t.j&&(0==_s(t.i).length&&0==t.l.length||(t.i.i.length=0,Bt(t.l),t.l.length=0),t.j.ua())}function yi(t,e,n){let s=function(t){return t instanceof Jn?Zn(t):new Jn(t,void 0)}(n);if(""!=s.i)e&&es(s,e+"."+s.i),ns(s,s.m);else{const t=At.location;s=function(t,e,n,s){var i=new Jn(null,void 0);return t&&ts(i,t),e&&es(i,e),n&&ns(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Qt(t.aa,(function(t,e){is(s,e,t)})),e=t.D,n=t.sa,e&&n&&is(s,e,n),is(s,"VER",t.ma),oi(t,s),s}function vi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Us(new Ls({ib:!0})):new Us(t.qa)).L=t.H,e}function wi(){}function Ei(){if(ie&&!(10<=Number(ye)))throw Error("Environmental error: no available transport.")}function bi(t,e){qe.call(this),this.g=new Zs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!jt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jt(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Si(this)}function Ti(t){Nn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ii(){Dn.call(this),this.status=1}function Si(t){this.g=t}(It=Us.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():An.g(),this.C=this.u?Sn(this.u):Sn(An),this.g.onreadystatechange=Ot(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Hs(this,t)}t=n||"";const i=new Wn(this.headers);s&&Gn(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=js;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=At.FormData&&t instanceof At.FormData,!(0<=Ut(Bs,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ws(this),0<this.B&&((this.K=function(t){return ie&&ge()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.pa,this)):this.A=nn(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Hs(this,t)}},It.pa=function(){void 0!==Ct&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))},It.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Gs(this))},It.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gs(this,!0)),Us.Z.M.call(this)},It.Fa=function(){this.s||(this.F||this.v||this.l?Ks(this):this.cb())},It.cb=function(){Ks(this)},It.ba=function(){try{return 2<Ys(this)?this.g.status:-1}catch(t){return-1}},It.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},It.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fs(e)}},It.Da=function(){return this.m},It.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(It=Zs.prototype).ma=8,It.G=1,It.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},It.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Rn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Xt(r),Zt(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ai(this,i,e),is(n=Zn(this.F),"RID",t),is(n,"CVER",22),this.D&&is(n,"X-HTTP-Session-Id",this.D),oi(this,n),this.o&&r&&Xs(n,this.o,r),Cs(this.i,i),this.Ra&&is(n,"TYPE","init"),this.ja?(is(n,"$req",e),is(n,"SID","null"),i.$=!0,Pn(i,n,null)):Pn(i,n,e),this.G=2}}else 3==this.G&&(t?ri(this,t):0==this.l.length||Ts(this.i)||ri(this))},It.Ga=function(){if(this.u=null,li(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=En(Ot(this.bb,this),t)}},It.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,vn(10),ei(this),li(this))},It.ab=function(){null!=this.v&&(this.v=null,ei(this),ci(this),vn(19))},It.jb=function(t){t?(this.h.info("Successfully pinged google.com"),vn(2)):(this.h.info("Failed to ping google.com"),vn(1))},(It=wi.prototype).xa=function(){},It.wa=function(){},It.va=function(){},It.ua=function(){},It.Oa=function(){},Ei.prototype.g=function(t,e){return new bi(t,e)},Pt(bi,qe),bi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Qe(Ot(t.hb,t,e))),vn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yi(t,null,t.W),ii(t)},bi.prototype.close=function(){ti(this.g)},bi.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,si(this.g,e)}else this.v?((e={}).__data__=He(t),si(this.g,e)):si(this.g,t)},bi.prototype.M=function(){this.g.j=null,delete this.j,ti(this.g),delete this.g,bi.Z.M.call(this)},Pt(Ti,Nn),Pt(Ii,Dn),Pt(Si,wi),Si.prototype.xa=function(){Be(this.g,"a")},Si.prototype.wa=function(t){Be(this.g,new Ti(t))},Si.prototype.va=function(t){Be(this.g,new Ii(t))},Si.prototype.ua=function(){Be(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,bi.prototype.send=bi.prototype.u,bi.prototype.open=bi.prototype.m,bi.prototype.close=bi.prototype.close,bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,Tn.COMPLETE="complete",Cn.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",qe.prototype.listen=qe.prototype.N,Us.prototype.listenOnce=Us.prototype.O,Us.prototype.getLastError=Us.prototype.La,Us.prototype.getLastErrorCode=Us.prototype.Da,Us.prototype.getStatus=Us.prototype.ba,Us.prototype.getResponseJson=Us.prototype.Qa,Us.prototype.getResponseText=Us.prototype.ga,Us.prototype.send=Us.prototype.ea;var Ci=bn,Ai=Tn,_i=dn,Ni=10,Di=11,ki=Ls,Ri=Cn,Li=Us;const xi="@firebase/firestore";
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
     */class Oi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Oi.UNAUTHENTICATED=new Oi(null),Oi.GOOGLE_CREDENTIALS=new Oi("google-credentials-uid"),Oi.FIRST_PARTY=new Oi("first-party-uid"),Oi.MOCK_USER=new Oi("mock-user");
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
let Mi="9.6.3";
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
     */const Pi=new ht("@firebase/firestore");function Vi(){return Pi.logLevel}function Fi(t,...e){if(Pi.logLevel<=st.DEBUG){const n=e.map(qi);Pi.debug(`Firestore (${Mi}): ${t}`,...n)}}function Ui(t,...e){if(Pi.logLevel<=st.ERROR){const n=e.map(qi);Pi.error(`Firestore (${Mi}): ${t}`,...n)}}function $i(t,...e){if(Pi.logLevel<=st.WARN){const n=e.map(qi);Pi.warn(`Firestore (${Mi}): ${t}`,...n)}}function qi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Bi(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw Ui(e),new Error(e)}function ji(t,e){t||Bi()}function Hi(t,e){return t}
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
     */const zi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ki extends W{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Gi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Wi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Oi.UNAUTHENTICATED)))}shutdown(){}}class Qi{constructor(t){this.t=t,this.currentUser=Oi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gi,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Fi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Fi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Fi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ji("string"==typeof e.accessToken),new Wi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ji(null===t||"string"==typeof t),new Oi(t)}}class Xi{constructor(t,e,n){this.type="FirstParty",this.user=Oi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ji{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Xi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Oi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&Fi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{Fi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):Fi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ji("string"==typeof t.token),new Zi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */class er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
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
     */function nr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */er.I=-1;function sr(t,e){return t<e?-1:t>e?1:0}function ir(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
     */class rr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ki(zi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ki(zi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ki(zi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ki(zi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rr.fromMillis(Date.now())}static fromDate(t){return rr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?sr(this.nanoseconds,t.nanoseconds):sr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class or{constructor(t){this.timestamp=t}static fromTimestamp(t){return new or(t)}static min(){return new or(new rr(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function ar(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
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
class cr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Bi(),void 0===n?n=t.length-e:n>t.length-e&&Bi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===cr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof cr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ur extends cr{construct(t,e,n){return new ur(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ki(zi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ur(e)}static emptyPath(){return new ur([])}}const lr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dr extends cr{construct(t,e,n){return new dr(t,e,n)}static isValidIdentifier(t){return lr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Ki(zi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Ki(zi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ki(zi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Ki(zi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dr(e)}static emptyPath(){return new dr([])}}
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
     */class fr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new fr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new fr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return sr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fr.EMPTY_BYTE_STRING=new fr("");const pr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(ji(!!t),"string"==typeof t){let e=0;const n=pr.exec(t);if(ji(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:mr(t.seconds),nanos:mr(t.nanos)}}function mr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function yr(t){return"string"==typeof t?fr.fromBase64String(t):fr.fromUint8Array(t)}
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
     */function vr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function wr(t){const e=t.mapValue.fields.__previous_value__;return vr(e)?wr(e):e}function Er(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new rr(e.seconds,e.nanos)}
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
     */function br(t){return null==t}function Tr(t){return 0===t&&1/t==-1/0}
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
     */class Ir{constructor(t){this.path=t}static fromPath(t){return new Ir(ur.fromString(t))}static fromName(t){return new Ir(ur.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===ur.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ur.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ir(new ur(t.slice()))}}
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
     */function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vr(t)?4:10:Bi()}function Cr(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=gr(t.timestampValue),s=gr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return yr(t.bytesValue).isEqual(yr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return mr(t.geoPointValue.latitude)===mr(e.geoPointValue.latitude)&&mr(t.geoPointValue.longitude)===mr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return mr(t.integerValue)===mr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=mr(t.doubleValue),s=mr(e.doubleValue);return n===s?Tr(n)===Tr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ir(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ar(n)!==ar(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Cr(n[t],s[t])))return!1;return!0}(t,e);default:return Bi()}}function Ar(t,e){return void 0!==(t.values||[]).find((t=>Cr(t,e)))}function _r(t,e){if(t===e)return 0;const n=Sr(t),s=Sr(e);if(n!==s)return sr(n,s);switch(n){case 0:return 0;case 1:return sr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=mr(t.integerValue||t.doubleValue),s=mr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Nr(t.timestampValue,e.timestampValue);case 4:return Nr(Er(t),Er(e));case 5:return sr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=yr(t),s=yr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=sr(n[t],s[t]);if(0!==e)return e}return sr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=sr(mr(t.latitude),mr(e.latitude));return 0!==n?n:sr(mr(t.longitude),mr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=_r(n[t],s[t]);if(e)return e}return sr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=sr(s[t],r[t]);if(0!==e)return e;const o=_r(n[s[t]],i[r[t]]);if(0!==o)return o}return sr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Bi()}}function Nr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return sr(t,e);const n=gr(t),s=gr(e),i=sr(n.seconds,s.seconds);return 0!==i?i:sr(n.nanos,s.nanos)}function Dr(t){return kr(t)}function kr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=gr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ir.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=kr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${kr(t.fields[i])}`;return n+"}"}(t.mapValue):Bi();var e,n}function Rr(t){return!!t&&"integerValue"in t}function Lr(t){return!!t&&"arrayValue"in t}function xr(t){return!!t&&"nullValue"in t}function Or(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mr(t){return!!t&&"mapValue"in t}function Pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Pr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class Vr{constructor(t){this.value=t}static empty(){return new Vr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pr(e)}setAll(t){let e=dr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Pr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Cr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Mr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){hr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Vr(Pr(this.value))}}
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
     */class Fr{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new Fr(t,0,or.min(),Vr.empty(),0)}static newFoundDocument(t,e,n){return new Fr(t,1,e,n,0)}static newNoDocument(t,e){return new Fr(t,2,e,Vr.empty(),0)}static newUnknownDocument(t,e){return new Fr(t,3,e,Vr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Fr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Fr(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Ur{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function $r(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ur(t,e,n,s,i,r,o)}function qr(t){const e=Hi(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Dr(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),br(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=to(e.startAt)),e.endAt&&(t+="|ub:",t+=to(e.endAt)),e.R=t}return e.R}function Br(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!no(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Cr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!io(t.startAt,e.startAt)&&io(t.endAt,e.endAt)}function jr(t){return Ir.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Hr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new zr(t,e,n):"array-contains"===e?new Yr(t,n):"in"===e?new Qr(t,n):"not-in"===e?new Xr(t,n):"array-contains-any"===e?new Jr(t,n):new Hr(t,e,n)}static P(t,e,n){return"in"===e?new Kr(t,n):new Gr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(_r(e,this.value)):null!==e&&Sr(this.value)===Sr(e)&&this.v(_r(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Bi()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zr extends Hr{constructor(t,e,n){super(t,e,n),this.key=Ir.fromName(n.referenceValue)}matches(t){const e=Ir.comparator(t.key,this.key);return this.v(e)}}class Kr extends Hr{constructor(t,e){super(t,"in",e),this.keys=Wr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Gr extends Hr{constructor(t,e){super(t,"not-in",e),this.keys=Wr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Wr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ir.fromName(t.referenceValue)))}class Yr extends Hr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lr(e)&&Ar(e.arrayValue,this.value)}}class Qr extends Hr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ar(this.value.arrayValue,e)}}class Xr extends Hr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ar(this.value.arrayValue,e)}}class Jr extends Hr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ar(this.value.arrayValue,t)))}}class Zr{constructor(t,e){this.position=t,this.before=e}}function to(t){return`${t.before?"b":"a"}:${t.position.map((t=>Dr(t))).join(",")}`}class eo{constructor(t,e="asc"){this.field=t,this.dir=e}}function no(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function so(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Ir.comparator(Ir.fromName(o.referenceValue),n.key):_r(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function io(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cr(t.position[n],e.position[n]))return!1;return!0}
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
     */class ro{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function oo(t){return new ro(t)}function ao(t){return!br(t.limit)&&"F"===t.limitType}function ho(t){return!br(t.limit)&&"L"===t.limitType}function co(t){const e=Hi(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new eo(t)),e.S.push(new eo(dr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new eo(dr.keyField(),t))}}}return e.S}function uo(t){const e=Hi(t);if(!e.D)if("F"===e.limitType)e.D=$r(e.path,e.collectionGroup,co(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of co(e)){const e="desc"===n.dir?"asc":"desc";t.push(new eo(n.field,e))}const n=e.endAt?new Zr(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Zr(e.startAt.position,!e.startAt.before):null;e.D=$r(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function lo(t,e){return Br(uo(t),uo(e))&&t.limitType===e.limitType}function fo(t){return`${qr(uo(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Dr(e.value)}`;var e})).join(", ")}]`),br(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+to(t.startAt)),t.endAt&&(e+=", endAt: "+to(t.endAt)),`Target(${e})`}(uo(t))}; limitType=${t.limitType})`}function go(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ir.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!so(t.startAt,co(t),e))&&(!t.endAt||!so(t.endAt,co(t),e))}(t,e)}function mo(t){return(e,n)=>{let s=!1;for(const i of co(t)){const t=yo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function yo(t,e,n){const s=t.field.isKeyField()?Ir.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?_r(s,i):Bi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Bi()}}
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
     */class vo{constructor(){this._=void 0}}function wo(t,e,n){return t instanceof bo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof To?Io(t,e):t instanceof So?Co(t,e):function(t,e){const n=function(t,e){return t instanceof Ao?Rr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),s=_o(n)+_o(t.N);return Rr(n)&&Rr(t.N)?function(t){return{integerValue:""+t}}(s):function(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(e)?"-0":e}}(t.k,s)}(t,e)}function Eo(t,e,n){return t instanceof To?Io(t,e):t instanceof So?Co(t,e):n}class bo extends vo{}class To extends vo{constructor(t){super(),this.elements=t}}function Io(t,e){const n=No(e);for(const e of t.elements)n.some((t=>Cr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class So extends vo{constructor(t){super(),this.elements=t}}function Co(t,e){let n=No(e);for(const e of t.elements)n=n.filter((t=>!Cr(t,e)));return{arrayValue:{values:n}}}class Ao extends vo{constructor(t,e){super(),this.k=t,this.N=e}}function _o(t){return mr(t.integerValue||t.doubleValue)}function No(t){return Lr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Do(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ko{}function Ro(t,e,n){t instanceof Mo?function(t,e,n){const s=t.value.clone(),i=Fo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Po?function(t,e,n){if(!Do(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Fo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Vo(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n){t instanceof Mo?function(t,e,n){if(!Do(t.precondition,e))return;const s=t.value.clone(),i=Uo(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Oo(e),s).setHasLocalMutations()}(t,e,n):t instanceof Po?function(t,e,n){if(!Do(t.precondition,e))return;const s=Uo(t.fieldTransforms,n,e),i=e.data;i.setAll(Vo(t)),i.setAll(s),e.convertToFoundDocument(Oo(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Do(t.precondition,e)&&e.convertToNoDocument(or.min())}(t,e)}function xo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ir(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof To&&e instanceof To||t instanceof So&&e instanceof So?ir(t.elements,e.elements,Cr):t instanceof Ao&&e instanceof Ao?Cr(t.N,e.N):t instanceof bo&&e instanceof bo}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Oo(t){return t.isFoundDocument()?t.version:or.min()}class Mo extends ko{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Po extends ko{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Vo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Fo(t,e,n){const s=new Map;ji(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Eo(o,a,n[i]))}return s}function Uo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,wo(t,r,e))}return s}
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
     */class $o{constructor(t){this.count=t}}
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
     */var qo,Bo;function jo(t){if(void 0===t)return Ui("GRPC error has no .code"),zi.UNKNOWN;switch(t){case qo.OK:return zi.OK;case qo.CANCELLED:return zi.CANCELLED;case qo.UNKNOWN:return zi.UNKNOWN;case qo.DEADLINE_EXCEEDED:return zi.DEADLINE_EXCEEDED;case qo.RESOURCE_EXHAUSTED:return zi.RESOURCE_EXHAUSTED;case qo.INTERNAL:return zi.INTERNAL;case qo.UNAVAILABLE:return zi.UNAVAILABLE;case qo.UNAUTHENTICATED:return zi.UNAUTHENTICATED;case qo.INVALID_ARGUMENT:return zi.INVALID_ARGUMENT;case qo.NOT_FOUND:return zi.NOT_FOUND;case qo.ALREADY_EXISTS:return zi.ALREADY_EXISTS;case qo.PERMISSION_DENIED:return zi.PERMISSION_DENIED;case qo.FAILED_PRECONDITION:return zi.FAILED_PRECONDITION;case qo.ABORTED:return zi.ABORTED;case qo.OUT_OF_RANGE:return zi.OUT_OF_RANGE;case qo.UNIMPLEMENTED:return zi.UNIMPLEMENTED;case qo.DATA_LOSS:return zi.DATA_LOSS;default:return Bi()}}(Bo=qo||(qo={}))[Bo.OK=0]="OK",Bo[Bo.CANCELLED=1]="CANCELLED",Bo[Bo.UNKNOWN=2]="UNKNOWN",Bo[Bo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bo[Bo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bo[Bo.NOT_FOUND=5]="NOT_FOUND",Bo[Bo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bo[Bo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bo[Bo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bo[Bo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bo[Bo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bo[Bo.ABORTED=10]="ABORTED",Bo[Bo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bo[Bo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bo[Bo.INTERNAL=13]="INTERNAL",Bo[Bo.UNAVAILABLE=14]="UNAVAILABLE",Bo[Bo.DATA_LOSS=15]="DATA_LOSS";
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
class Ho{constructor(t,e){this.comparator=t,this.root=e||Ko.EMPTY}insert(t,e){return new Ho(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ko.BLACK,null,null))}remove(t){return new Ho(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ko.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zo(this.root,t,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zo(this.root,t,this.comparator,!0)}}class zo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ko{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ko.RED,this.left=null!=s?s:Ko.EMPTY,this.right=null!=i?i:Ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ko(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ko.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ko.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Bi();if(this.right.isRed())throw Bi();const t=this.left.check();if(t!==this.right.check())throw Bi();return t+(this.isRed()?0:1)}}Ko.EMPTY=null,Ko.RED=!0,Ko.BLACK=!1,Ko.EMPTY=new class{constructor(){this.size=0}get key(){throw Bi()}get value(){throw Bi()}get color(){throw Bi()}get left(){throw Bi()}get right(){throw Bi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ko(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Go{constructor(t){this.comparator=t,this.data=new Ho(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Go))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Go(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const Yo=new Ho(Ir.comparator);function Qo(){return Yo}const Xo=new Ho(Ir.comparator);function Jo(){return Xo}new Ho(Ir.comparator);const Zo=new Go(Ir.comparator);function ta(...t){let e=Zo;for(const n of t)e=e.add(n);return e}const ea=new Go(sr);function na(){return ea}
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
     */class sa{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,ia.createSynthesizedTargetChangeForCurrentChange(t,e)),new sa(or.min(),n,na(),Qo(),ta())}}class ia{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new ia(fr.EMPTY_BYTE_STRING,e,ta(),ta(),ta())}}
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
     */class ra{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.O=s}}class oa{constructor(t,e){this.targetId=t,this.M=e}}class aa{constructor(t,e,n=fr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ha{constructor(){this.F=0,this.L=la(),this.B=fr.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=ta(),e=ta(),n=ta();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Bi()}})),new ia(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=la()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class ca{constructor(t){this.et=t,this.nt=new Map,this.st=Qo(),this.it=ua(),this.rt=new Go(sr)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:Bi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.M.count,s=this.wt(e);if(s){const t=s.target;if(jr(t))if(0===n){const n=new Ir(t.path);this.at(e,n,Fr.newNoDocument(n,or.min()))}else ji(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&jr(i.target)){const e=new Ir(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.at(s,e,Fr.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=ta();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new sa(t,e,this.rt,this.st,n);return this.st=Qo(),this.it=ua(),this.rt=new Go(sr),s}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new ha,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Go(sr),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||Fi("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new ha),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function ua(){return new Ho(Ir.comparator)}function la(){return new Ho(Ir.comparator)}
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
     */const da={asc:"ASCENDING",desc:"DESCENDING"},fa={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class pa{constructor(t,e){this.databaseId=t,this.C=e}}function ga(t){return ji(!!t),or.fromTimestamp(function(t){const e=gr(t);return new rr(e.seconds,e.nanos)}(t))}function ma(t){const e=ur.fromString(t);return ji(xa(e)),e}function ya(t,e){const n=ma(e);if(n.get(1)!==t.databaseId.projectId)throw new Ki(zi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ki(zi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ir(Ea(n))}function va(t,e){return function(t,e){return function(t){return new ur(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function wa(t){return new ur(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ea(t){return ji(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ba(t,e){return{documents:[va(t,e.path)]}}function Ta(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=va(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=va(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Or(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NAN"}};if(xr(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Or(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NAN"}};if(xr(t.value))return{unaryFilter:{field:Da(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Da(t.field),op:Na(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Da(t.field),direction:_a(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||br(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ca(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ca(e.endAt)),n}function Ia(t){let e=function(t){const e=ma(t);return 4===e.length?ur.emptyPath():Ea(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ji(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Sa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new eo(ka(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,br(e)?null:e}(n.limit));let h=null;n.startAt&&(h=Aa(n.startAt));let c=null;return n.endAt&&(c=Aa(n.endAt)),function(t,e,n,s,i,r,o,a){return new ro(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",h,c)}function Sa(t){return t?void 0!==t.unaryFilter?[La(t)]:void 0!==t.fieldFilter?[Ra(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Sa(t))).reduce(((t,e)=>t.concat(e))):Bi():[]}function Ca(t){return{before:t.before,values:t.position}}function Aa(t){const e=!!t.before,n=t.values||[];return new Zr(n,e)}function _a(t){return da[t]}function Na(t){return fa[t]}function Da(t){return{fieldPath:t.canonicalString()}}function ka(t){return dr.fromServerFormat(t.fieldPath)}function Ra(t){return Hr.create(ka(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Bi()}}(t.fieldFilter.op),t.fieldFilter.value)}function La(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ka(t.unaryFilter.field);return Hr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ka(t.unaryFilter.field);return Hr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ka(t.unaryFilter.field);return Hr.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ka(t.unaryFilter.field);return Hr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Bi()}}function xa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class Oa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Bi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Oa(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Oa?e:Oa.resolve(e)}catch(t){return Oa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Oa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Oa.reject(e)}static resolve(t){return new Oa(((e,n)=>{e(t)}))}static reject(t){return new Oa(((e,n)=>{n(t)}))}static waitFor(t){return new Oa(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Oa.resolve(!1);for(const n of t)e=e.next((t=>t?Oa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function Ma(t){return"IndexedDbTransactionError"===t.name}
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
     */class Pa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Ro(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Lo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Lo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(or.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ta())}isEqual(t){return this.batchId===t.batchId&&ir(this.mutations,t.mutations,((t,e)=>xo(t,e)))&&ir(this.baseMutations,t.baseMutations,((t,e)=>xo(t,e)))}}
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
     */class Va{constructor(t,e,n,s,i=or.min(),r=or.min(),o=fr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class Fa{constructor(t){this.Gt=t}}function Ua(t){const e=Ia({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
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
     */class $a{constructor(){this.zt=new qa}addToCollectionParentIndex(t,e){return this.zt.add(e),Oa.resolve()}getCollectionParents(t,e){return Oa.resolve(this.zt.getEntries(e))}}class qa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Go(ur.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Go(ur.comparator)).toArray()}}
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
     */class Ba{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Ba(0)}static re(){return new Ba(-1)}}
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
     */async function ja(t){if(t.code!==zi.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Fi("LocalStore","Unexpectedly lost primary lease")}
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
     */class Ha{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){hr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
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
class za{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.bn(t,e,n)))}bn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ir.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new Ir(e)).next((t=>{let e=Jo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=Jo();return this.Jt.getCollectionParents(t,s).next((r=>Oa.forEach(r,(r=>{const o=function(t,e){return new ro(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=s.get(n);null==i&&(i=Fr.newInvalidDocument(n),s=s.insert(n,i)),Lo(e,i,t.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{go(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=ta();for(const t of e)for(const e of t.mutations)e instanceof Po&&null===n.get(e.key)&&(s=s.add(e.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
     */class Ka{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=ta(),s=ta();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Ka(t,e.fromCache,n,s)}}
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
     */class Ga{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(or.min())?this.Fn(t,e):this.Mn.vn(t,s).next((i=>{const r=this.Ln(e,i);return(ao(e)||ho(e))&&this.Bn(e.limitType,r,s,n)?this.Fn(t,e):(Vi()<=st.DEBUG&&Fi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),po(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new Go(mo(t));return e.forEach(((e,s)=>{go(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(t,e){return Vi()<=st.DEBUG&&Fi("QueryEngine","Using full collection scan to execute query:",po(e)),this.Mn.getDocumentsMatchingQuery(t,e,or.min())}}
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
     */class Wa{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new Ho(sr),this.Kn=new Ha((t=>qr(t)),Br),this.jn=or.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new za(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function Ya(t,e){const n=Hi(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new za(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=ta();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function Qa(t){const e=Hi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function Xa(t,e){const n=Hi(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((r,a)=>{const h=i.get(a);if(!h)return;o.push(n.He.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.He.addMatchingKeys(t,r.addedDocuments,a))));let c=h.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(fr.EMPTY_BYTE_STRING,or.min()).withLastLimboFreeSnapshotVersion(or.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(h,c,r)&&o.push(n.He.updateTargetData(t,c))}));let a=Qo();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=ta();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Qo();return n.forEach(((n,o)=>{const a=t.get(n),h=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(or.min())?(e.removeEntry(n,h),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),r=r.insert(n,o)):Fi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(or.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Oa.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}async function Ja(t,e,n){const s=Hi(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ma(t))throw t;Fi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function Za(t,e,n){const s=Hi(t);let i=or.min(),r=ta();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Hi(t),i=s.Kn.get(n);return void 0!==i?Oa.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,uo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:or.min(),n?r:ta()))).next((t=>({documents:t,zn:r})))))}
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
     */class th{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Oa.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:ga(n.createTime)}),Oa.resolve()}getNamedQuery(t,e){return Oa.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Ua(t.bundledQuery),readTime:ga(t.readTime)}}(e)),Oa.resolve()}}
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
     */class eh{constructor(){this.ts=new Go(nh.es),this.ns=new Go(nh.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new nh(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new nh(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Ir(new ur([])),n=new nh(e,t),s=new nh(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Ir(new ur([])),n=new nh(e,t),s=new nh(e,t+1);let i=ta();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new nh(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class nh{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Ir.comparator(t.key,e.key)||sr(t.fs,e.fs)}static ss(t,e){return sr(t.fs,e.fs)||Ir.comparator(t.key,e.key)}}
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
     */class sh{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Go(nh.es)}checkEmpty(t){return Oa.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new Pa(i,e,n,s);this.An.push(r);for(const e of s)this.ws=this.ws.add(new nh(e.key,i)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Oa.resolve(r)}lookupMutationBatch(t,e){return Oa.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return Oa.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Oa.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Oa.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new nh(e,0),s=new nh(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),Oa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Go(sr);return e.forEach((t=>{const e=new nh(t,0),s=new nh(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),Oa.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Ir.isDocumentKey(i)||(i=i.child(""));const r=new nh(new Ir(i),0);let o=new Go(sr);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),Oa.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ji(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Oa.forEach(e.mutations,(s=>{const i=new nh(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new nh(e,0),s=this.ws.firstAfterOrEqual(n);return Oa.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,Oa.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
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
     */class ih{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Ho(Ir.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Oa.resolve(n?n.document.mutableCopy():Fr.newInvalidDocument(e))}getEntries(t,e){let n=Qo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Fr.newInvalidDocument(t))})),Oa.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=Qo();const i=new Ir(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||go(e,i)&&(s=s.insert(i.key,i.mutableCopy()))}return Oa.resolve(s)}Es(t,e){return Oa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new rh(this)}getSize(t){return Oa.resolve(this.size)}}class rh extends class{constructor(){this.changes=new Ha((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:or.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Fr.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Oa.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),Oa.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
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
     */class oh{constructor(t){this.persistence=t,this.Is=new Ha((t=>qr(t)),Br),this.lastRemoteSnapshotVersion=or.min(),this.highestTargetId=0,this.As=0,this.Rs=new eh,this.targetCount=0,this.bs=Ba.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Oa.resolve()}getLastRemoteSnapshotVersion(t){return Oa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Oa.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Oa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Oa.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Ba(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Oa.resolve()}updateTargetData(t,e){return this.ae(e),Oa.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Oa.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Oa.waitFor(i).next((()=>s))}getTargetCount(t){return Oa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Oa.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Oa.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Oa.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Oa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Oa.resolve(n)}containsKey(t,e){return Oa.resolve(this.Rs.containsKey(e))}}
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
     */class ah{constructor(t,e){this.Ps={},this.Be=new er(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new oh(this),this.Jt=new $a,this.Je=function(t,e){return new ih(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new Fa(e),this.Ye=new th(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new sh(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){Fi("MemoryPersistence","Starting transaction:",t);const s=new hh(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return Oa.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class hh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class ch{constructor(t){this.persistence=t,this.Cs=new eh,this.Ns=null}static ks(t){return new ch(t)}get xs(){if(this.Ns)return this.Ns;throw Bi()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Oa.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Oa.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Oa.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Oa.forEach(this.xs,(n=>{const s=Ir.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Oa.or([()=>Oa.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class uh{constructor(){this.activeTargetIds=na()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lh{constructor(){this.pi=new uh,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new uh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
     */class dh{Ei(t){}shutdown(){}}
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
     */class fh{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Fi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){Fi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class gh{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
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
     */class mh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);Fi("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>(Fi("RestConnection","Received: ",t),t)),(e=>{throw $i("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Mi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=ph[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new Li;o.listenOnce(Ai.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ci.NO_ERROR:const e=o.getResponseJson();Fi("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ci.TIMEOUT:Fi("Connection",'RPC "'+t+'" timed out'),r(new Ki(zi.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const n=o.getStatus();if(Fi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(zi).indexOf(e)>=0?e:zi.UNKNOWN}(t.status);r(new Ki(e,t.message))}else r(new Ki(zi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Ki(zi.UNAVAILABLE,"Connection failed."));break;default:Bi()}}finally{Fi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Ei,r=pn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ki({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())||"object"==typeof navigator&&"ReactNative"===navigator.product||G().indexOf("Electron/")>=0||function(){const t=G();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||G().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Fi("Connection","Creating WebChannel: "+a,o);const h=i.createWebChannel(a,o);let c=!1,u=!1;const l=new gh({Vi:t=>{u?Fi("Connection","Not sending because WebChannel is closed:",t):(c||(Fi("Connection","Opening WebChannel transport."),h.open(),c=!0),Fi("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(h,Ri.EventType.OPEN,(()=>{u||Fi("Connection","WebChannel transport opened.")})),d(h,Ri.EventType.CLOSE,(()=>{u||(u=!0,Fi("Connection","WebChannel transport closed"),l.Oi())})),d(h,Ri.EventType.ERROR,(t=>{u||(u=!0,$i("Connection","WebChannel transport errored:",t),l.Oi(new Ki(zi.UNAVAILABLE,"The operation could not be completed")))})),d(h,Ri.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];ji(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Fi("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=qo[t];if(void 0!==e)return jo(e)}(t),n=i.message;void 0===e&&(e=zi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.Oi(new Ki(e,n)),h.close()}else Fi("Connection","WebChannel received:",n),l.Mi(n)}})),d(r,_i.STAT_EVENT,(t=>{t.stat===Ni?Fi("Connection","Detected buffering proxy"):t.stat===Di&&Fi("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.$i()}),0),l}}function yh(){return"undefined"!=typeof document?document:null}
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
     */function vh(t){return new pa(t,!0)}class wh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&Fi("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
     */class Eh extends class{constructor(t,e,n,s,i,r,o,a){this.Me=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new wh(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===zi.RESOURCE_EXHAUSTED?(Ui(e.toString()),Ui("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===zi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new Ki(zi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return Fi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget((()=>this.rr===t?e():(Fi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Bi()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.C?(ji(void 0===e||"string"==typeof e),fr.fromBase64String(e||"")):(ji(void 0===e||e instanceof Uint8Array),fr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?zi.UNKNOWN:jo(t.code);return new Ki(e,t.message||"")}(o);n=new aa(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ya(t,s.document.name),r=ga(s.document.updateTime),o=new Vr({mapValue:{fields:s.document.fields}}),a=Fr.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new ra(h,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ya(t,s.document),r=s.readTime?ga(s.readTime):or.min(),o=Fr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ya(t,s.document),r=s.removedTargetIds||[];n=new ra([],r,i,null)}else{if(!("filter"in e))return Bi();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new $o(s),r=t.targetId;n=new oa(r,i)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return or.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?or.min():e.readTime?ga(e.readTime):or.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=wa(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=jr(s)?{documents:ba(t,s)}:{query:Ta(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.C?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(or.min())>0&&(n.readTime=function(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Bi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=wa(this.k),e.removeTarget=t,this.gr(e)}}
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
     */class bh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Or(){if(this.$r)throw new Ki(zi.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ki(zi.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ki(zi.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class Th{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ui(e),this.Lr=!1):Fi("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
     */class Ih{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Lh(this)&&(Fi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Hi(t);e.Gr.add(4),await Ch(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Sh(e)}(this))}))})),this.Jr=new Th(n,s)}}async function Sh(t){if(Lh(t))for(const e of t.zr)await e(!0)}async function Ch(t){for(const e of t.zr)await e(!1)}function Ah(t,e){const n=Hi(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Rh(n)?kh(n):Fh(n).lr()&&Nh(n,e))}function _h(t,e){const n=Hi(t),s=Fh(n);n.Wr.delete(e),s.lr()&&Dh(n,e),0===n.Wr.size&&(s.lr()?s._r():Lh(n)&&n.Jr.set("Unknown"))}function Nh(t,e){t.Yr.X(e.targetId),Fh(t).Pr(e)}function Dh(t,e){t.Yr.X(e),Fh(t).vr(e)}function kh(t){t.Yr=new ca({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Fh(t).start(),t.Jr.Br()}function Rh(t){return Lh(t)&&!Fh(t).hr()&&t.Wr.size>0}function Lh(t){return 0===Hi(t).Gr.size}function xh(t){t.Yr=void 0}async function Oh(t){t.Wr.forEach(((e,n)=>{Nh(t,e)}))}async function Mh(t,e){xh(t),Rh(t)?(t.Jr.Kr(e),kh(t)):t.Jr.set("Unknown")}async function Ph(t,e,n){if(t.Jr.set("Online"),e instanceof aa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(n){Fi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Vh(t,n)}else if(e instanceof ra?t.Yr.ot(e):e instanceof oa?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(or.min()))try{const e=await Qa(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(fr.EMPTY_BYTE_STRING,n.snapshotVersion)),Dh(t,e);const s=new Va(n.target,e,1,n.sequenceNumber);Nh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Fi("RemoteStore","Failed to raise snapshot:",e),await Vh(t,e)}}async function Vh(t,e,n){if(!Ma(e))throw e;t.Gr.add(1),await Ch(t),t.Jr.set("Offline"),n||(n=()=>Qa(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Fi("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Sh(t)}))}function Fh(t){return t.Xr||(t.Xr=function(t,e,n){const s=Hi(t);return s.Or(),new Eh(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)
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
     */}(t.datastore,t.asyncQueue,{Di:Oh.bind(null,t),Ni:Mh.bind(null,t),br:Ph.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Rh(t)?kh(t):t.Jr.set("Unknown")):(await t.Xr.stop(),xh(t))}))),t.Xr
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
     */}class Uh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Uh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ki(zi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $h(t,e){if(Ui("AsyncQueue",`${e}: ${t}`),Ma(t))return new Ki(zi.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class qh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ir.comparator(e.key,n.key):(t,e)=>Ir.comparator(t.key,e.key),this.keyedMap=Jo(),this.sortedSet=new Ho(this.comparator)}static emptySet(t){return new qh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new qh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class Bh{constructor(){this.eo=new Ho(Ir.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):Bi():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class jh{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new jh(t,e,qh.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class Hh{constructor(){this.so=void 0,this.listeners=[]}}class zh{constructor(){this.queries=new Ha((t=>fo(t)),lo),this.onlineState="Unknown",this.io=new Set}}function Kh(t,e){const n=Hi(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.oo(t)&&(s=!0);i.so=t}}s&&Wh(n)}function Gh(t,e,n){const s=Hi(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Wh(t){t.io.forEach((t=>{t.next()}))}class Yh{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new jh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=jh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
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
     */class Qh{constructor(t){this.key=t}}class Xh{constructor(t){this.key=t}}class Jh{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=ta(),this.mutatedKeys=ta(),this.Ao=mo(t),this.Ro=new qh(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new Bh,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=ao(this.query)&&s.size===this.query.limit?s.last():null,h=ho(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const c=s.get(t),u=go(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||h&&this.Ao(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),ao(this.query)||ho(this.query))for(;r.size>this.query.limit;){const t=ao(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Bi()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new jh(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Bh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=ta(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new Xh(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new Qh(n))})),e}ko(t){this.To=t.zn,this.Io=ta();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return jh.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tc{constructor(t){this.key=t,this.$o=!1}}class ec{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Oo={},this.Mo=new Ha((t=>fo(t)),lo),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ho(Ir.comparator),this.Uo=new Map,this.qo=new eh,this.Ko={},this.jo=new Map,this.Qo=Ba.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function nc(t,e){const n=function(t){const e=Hi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ic.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oc.bind(null,e),e.Oo.br=Kh.bind(null,e.eventManager),e.Oo.zo=Gh.bind(null,e.eventManager),e}(t);let s,i;const r=n.Mo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=Hi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,Oa.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new Va(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,uo(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.Po(n);i.Bn&&(i=await Za(t.localStore,e.query,!1).then((({documents:t})=>e.view.Po(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return cc(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await Za(t.localStore,e,!0),r=new Jh(e,i.zn),o=r.Po(i.documents),a=ia.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),h=r.applyChanges(o,t.isPrimaryClient,a);cc(t,n,h.Co);const c=new Zh(e,n,r);return t.Mo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),h.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&Ah(n.remoteStore,t)}return i}async function sc(t,e){const n=Hi(t),s=n.Mo.get(e),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter((t=>!lo(t,e)))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ja(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),_h(n.remoteStore,s.targetId),ac(n,s.targetId)})).catch(ja)):(ac(n,s.targetId),await Ja(n.localStore,s.targetId,!0))}async function ic(t,e){const n=Hi(t);try{const t=await Xa(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(ji(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?ji(s.$o):t.removedDocuments.size>0&&(ji(s.$o),s.$o=!1))})),await dc(n,t,e)}catch(t){await ja(t)}}function rc(t,e,n){const s=Hi(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Mo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Hi(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(s=!0)})),s&&Wh(n)}(s.eventManager,e),t.length&&s.Oo.br(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function oc(t,e,n){const s=Hi(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new Ho(Ir.comparator);t=t.insert(r,Fr.newNoDocument(r,or.min()));const n=ta().add(r),i=new sa(or.min(),new Map,new Go(sr),t,n);await ic(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),lc(s)}else await Ja(s.localStore,e,!1).then((()=>ac(s,e,n))).catch(ja)}function ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||hc(t,e)}))}function hc(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(_h(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),lc(t))}function cc(t,e,n){for(const s of n)s instanceof Qh?(t.qo.addReference(s.key,e),uc(t,s)):s instanceof Xh?(Fi("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||hc(t,s.key)):Bi()}function uc(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(Fi("SyncEngine","New document in limbo: "+n),t.Lo.add(s),lc(t))}function lc(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Ir(ur.fromString(e)),s=t.Qo.next();t.Uo.set(s,new tc(n)),t.Bo=t.Bo.insert(n,s),Ah(t.remoteStore,new Va(uo(oo(n.path)),s,2,er.I))}}async function dc(t,e,n){const s=Hi(t),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ka.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Oo.br(i),await async function(t,e){const n=Hi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Oa.forEach(e,(e=>Oa.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Oa.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ma(t))throw t;Fi("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(e,i)}}}(s.localStore,r))}async function fc(t,e){const n=Hi(t);if(!n.currentUser.isEqual(e)){Fi("SyncEngine","User change. New user:",e.toKey());const t=await Ya(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new Ki(zi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await dc(n,t.Gn)}}function pc(t,e){const n=Hi(t),s=n.Uo.get(e);if(s&&s.$o)return ta().add(s.key);{let t=ta();const s=n.Fo.get(e);if(!s)return t;for(const e of s){const s=n.Mo.get(e);t=t.unionWith(s.view.bo)}return t}}class gc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=vh(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new Wa(t,e,n,s)}(this.persistence,new Ga,t.initialUser,this.k)}Yo(t){return new ah(ch.ks,this.k)}Jo(t){return new lh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>rc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fc.bind(null,this.syncEngine),await async function(t,e){const n=Hi(t);e?(n.Gr.delete(2),await Sh(n)):e||(n.Gr.add(2),await Ch(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zh}createDatastore(t){const e=vh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new mh(s));var s;return function(t,e,n,s){return new bh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>rc(this.syncEngine,t,0),r=fh.Pt()?new fh:new dh,new Ih(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new ec(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Hi(t);Fi("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Ch(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
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
     */class yc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class vc{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Oi.UNAUTHENTICATED,this.clientId=class{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=nr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Fi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ki(zi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=$h(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function wc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Fi("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Fi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ya(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new gc)),t.offlineComponents}(t);Fi("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>async function(t,e){const n=Hi(t);n.asyncQueue.verifyOperationInProgress(),Fi("RemoteStore","RemoteStore received new credentials");const s=Lh(n);n.Gr.add(3),await Ch(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Sh(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Ec(t){const e=await async function(t){return t.onlineComponents||(Fi("FirestoreClient","Using default OnlineComponentProvider"),await wc(t,new mc)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=nc.bind(null,e.syncEngine),n.onUnlisten=sc.bind(null,e.syncEngine),n}function bc(t,e,n={}){const s=new Gi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new yc({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=Hi(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o))),n.fromCache&&"server"===s.source?i.reject(new Ki(zi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Yh(n,r,{includeMetadataChanges:!0,wo:!0});return async function(t,e){const n=Hi(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Hh),i)try{r.so=await n.onListen(s)}catch(t){const n=$h(t,`Initialization of query '${po(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&Wh(n)}(t,o)}(await Ec(t),t.asyncQueue,e,n,s))),s.promise}class Tc{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ic{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ic&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Sc=new Map;
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
     */function Cc(t){if(Ir.isDocumentKey(t))throw new Ki(zi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ac(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ki(zi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Bi()}(t);throw new Ki(zi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class _c{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ki(zi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ki(zi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Ki(zi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class Nc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _c({}),this._settingsFrozen=!1,t instanceof Ic?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ki(zi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ic(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ki(zi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ki(zi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _c(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Yi;switch(t.type){case"gapi":const e=t.client;return ji(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ji(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ki(zi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Sc.get(t);e&&(Fi("ComponentProvider","Removing Datastore"),Sc.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class Dc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dc(this.firestore,t,this._key)}}class kc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new kc(this.firestore,t,this._query)}}class Rc extends kc{constructor(t,e,n){super(t,e,oo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dc(this.firestore,null,new Ir(t))}withConverter(t){return new Rc(this.firestore,t,this._path)}}function Lc(t,e,...n){if(t=(s=t)&&s._delegate?s._delegate:s,function(t,e,n){if(!n)throw new Ki(zi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}("collection","path",e),t instanceof Nc){const s=ur.fromString(e,...n);return Cc(s),new Rc(t,null,s)}var s;{if(!(t instanceof Dc||t instanceof Rc))throw new Ki(zi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ur.fromString(e,...n));return Cc(s),new Rc(t.firestore,null,s)}}
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
     */class xc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new wh(this,"async_queue_retry"),this.bc=()=>{const t=yh();t&&Fi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=yh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=yh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise((()=>{}));const e=new Gi;return this.vc((()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.gc.push(t),this.Vc())))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Ma(t))throw t;Fi("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi((()=>this.Vc()))}}vc(t){const e=this.mc.then((()=>(this.Ic=!0,t().catch((t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Ui("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ic=!1,t))))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const s=Uh.createAndSchedule(this,t,e,n,(t=>this.Sc(t)));return this.Tc.push(s),s}Pc(){this.Ec&&Bi()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then((()=>{this.Tc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()}))}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}class Oc extends Nc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new xc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Pc(this),this._firestoreClient.terminate()}}function Mc(t=function(t="[DEFAULT]"){const e=gt.get(t);if(!e)throw wt.create("no-app",{appName:t});return e}()){return function(t,e){return t.container.getProvider(e)}(t,"firestore").getImmediate()}function Pc(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Tc(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vc(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
     */class Vc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ki(zi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Fc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fc(fr.fromBase64String(t))}catch(t){throw new Ki(zi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Fc(fr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Uc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ki(zi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ki(zi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return sr(this._lat,t._lat)||sr(this._long,t._long)}}const $c=new RegExp("[~\\*/\\[\\]]");function qc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new Ki(zi.INVALID_ARGUMENT,a+t+h)
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
     */}class Bc{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jc extends Bc{data(){return super.data()}}function Hc(t,e){return"string"==typeof e?function(t,e,n){if(e.search($c)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch(s){throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}
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
     */class zc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kc extends Bc{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Gc extends Kc{data(t={}){return super.data(t)}}class Wc{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new zc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Gc(this._firestore,this._userDataWriter,n.key,n,new zc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ki(zi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Gc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new zc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Gc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new zc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Yc(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Bi()}}
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
     */class Qc extends
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
class{convertValue(t,e="none"){switch(Sr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(yr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Bi()}}convertObject(t,e){const n={};return hr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Uc(mr(t.latitude),mr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=wr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Er(t));default:return null}}convertTimestamp(t){const e=gr(t);return new rr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ur.fromString(t);ji(xa(n));const s=new Ic(n.get(1),n.get(3)),i=new Ir(n.popFirst(5));return s.isEqual(e)||Ui(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dc(this.firestore,null,e)}}function Xc(t){t=Ac(t,kc);const e=Ac(t.firestore,Oc),n=function(t){return t._firestoreClient||Pc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(e),s=new Qc(e);return function(t){if(ho(t)&&0===t.explicitOrderBy.length)throw new Ki(zi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),bc(n,t._query).then((n=>new Wc(e,s,t,n)))}function Jc(t,e,n){const s=t.slice();return s[2]=e[n],s}function Zc(t){let e,n,s,i,r=t[0][t[2]]+"";return{c(){e=u("span"),n=u("b"),s=l(r),i=d()},m(t,r){a(t,e,r),o(e,n),o(n,s),o(e,i)},p(t,e){3&e&&r!==(r=t[0][t[2]]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(s,r)},d(t){t&&h(e)}}}function tu(e){let n,s=e[1],i=[];for(let t=0;t<s.length;t+=1)i[t]=Zc(Jc(e,s,t));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();n=l("")},m(t,e){for(let n=0;n<i.length;n+=1)i[n].m(t,e);a(t,n,e)},p(t,[e]){if(3&e){let r;for(s=t[1],r=0;r<s.length;r+=1){const o=Jc(t,s,r);i[r]?i[r].p(o,e):(i[r]=Zc(o),i[r].c(),i[r].m(n.parentNode,n))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},i:t,o:t,d(t){c(i,t),t&&h(n)}}}function eu(t,e,n){let{pubData:s}=e,{headings:i}=e;return t.$$set=t=>{"pubData"in t&&n(0,s=t.pubData),"headings"in t&&n(1,i=t.headings)},[s,i]}!function(t,e=!0){Mi="9.6.4",vt(new Z("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Oc(s,new Qi(t.getProvider("auth-internal")),new tr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),bt(xi,"3.4.3",t),bt(xi,"3.4.3","esm2017")}();class nu extends z{constructor(t){super(),H(this,t,eu,tu,r,{pubData:0,headings:1})}}function su(e){let n,i,r,c,l,v,w,E,b,T,I,S,C,A,N,D,k,R,L,x,O,M,P;return{c(){n=u("section"),i=u("div"),r=u("label"),r.textContent="Group size",c=d(),l=u("input"),v=d(),w=u("div"),E=u("label"),E.textContent="Food?",b=d(),T=u("select"),I=u("option"),I.textContent="Don't care",S=u("option"),S.textContent="Yes",C=u("option"),C.textContent="No",A=d(),N=u("div"),D=u("label"),D.textContent="Shows sport?",k=d(),R=u("select"),L=u("option"),L.textContent="Don't care",x=u("option"),x.textContent="Yes",O=u("option"),O.textContent="No",p(r,"for","max_group"),p(l,"type","number"),p(l,"id","max_group"),p(l,"class","filters__input"),p(i,"class","filters__section mr-4"),p(E,"for","food"),I.__value="both",I.value=I.__value,S.__value=!0,S.value=S.__value,C.__value=!1,C.value=C.__value,p(T,"name","food"),void 0===e[1]&&_((()=>e[4].call(T))),p(w,"class","filters__section mr-4"),p(D,"for","sport"),L.__value="both",L.value=L.__value,x.__value=!0,x.value=x.__value,O.__value=!1,O.value=O.__value,p(R,"name","food"),void 0===e[2]&&_((()=>e[5].call(R))),p(N,"class","filters__section mr-4"),p(n,"class","filters flex justify-center")},m(t,s){a(t,n,s),o(n,i),o(i,r),o(i,c),o(i,l),m(l,e[0]),o(n,v),o(n,w),o(w,E),o(w,b),o(w,T),o(T,I),o(T,S),o(T,C),y(T,e[1]),o(n,A),o(n,N),o(N,D),o(N,k),o(N,R),o(R,L),o(R,x),o(R,O),y(R,e[2]),M||(P=[f(l,"input",e[3]),f(T,"change",e[4]),f(R,"change",e[5])],M=!0)},p(t,[e]){1&e&&g(l.value)!==t[0]&&m(l,t[0]),2&e&&y(T,t[1]),4&e&&y(R,t[2])},i:t,o:t,d(t){t&&h(n),M=!1,s(P)}}}function iu(t,e,n){let{groupSize:s=5}=e,{food:i="both"}=e,{sport:r="both"}=e;return t.$$set=t=>{"groupSize"in t&&n(0,s=t.groupSize),"food"in t&&n(1,i=t.food),"sport"in t&&n(2,r=t.sport)},[s,i,r,function(){s=g(this.value),n(0,s)},function(){i=v(this),n(1,i)},function(){r=v(this),n(2,r)}]}class ru extends z{constructor(t){super(),H(this,t,iu,su,r,{groupSize:0,food:1,sport:2})}}function ou(t,e,n){const s=t.slice();return s[14]=e[n],s}function au(e){let n;return{c(){n=u("p"),n.textContent="Sorry there are no pubs that match your criteria"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function hu(e){let n;return{c(){n=u("p"),n.textContent="Loading"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function cu(t){let e,n,s,i,r,l,f,g,m,y,v,w,E,b,T,I,S,C,A=t[6],_=[];for(let e=0;e<A.length;e+=1)_[e]=uu(ou(t,A,e));const N=t=>F(_[t],1,1,(()=>{_[t]=null}));return{c(){e=u("div"),n=u("span"),n.textContent="Name",s=d(),i=u("span"),i.textContent="Group size",r=d(),l=u("span"),l.textContent="Food?",f=d(),g=u("span"),g.textContent="Sports?",m=d(),y=u("span"),y.textContent="Music?",v=d(),w=u("span"),w.textContent="Non-beer choice",E=d(),b=u("span"),b.textContent="Drink quality",T=d(),I=u("span"),I.textContent="Drink choice",S=d();for(let t=0;t<_.length;t+=1)_[t].c();p(n,"class","table__header"),p(i,"class","table__header"),p(l,"class","table__header"),p(g,"class","table__header"),p(y,"class","table__header"),p(w,"class","table__header"),p(b,"class","table__header"),p(I,"class","table__header"),p(e,"class","grid table"),p(e,"style",t[4])},m(t,h){a(t,e,h),o(e,n),o(e,s),o(e,i),o(e,r),o(e,l),o(e,f),o(e,g),o(e,m),o(e,y),o(e,v),o(e,w),o(e,E),o(e,b),o(e,T),o(e,I),o(e,S);for(let t=0;t<_.length;t+=1)_[t].m(e,null);C=!0},p(t,n){if(192&n){let s;for(A=t[6],s=0;s<A.length;s+=1){const i=ou(t,A,s);_[s]?(_[s].p(i,n),V(_[s],1)):(_[s]=uu(i),_[s].c(),V(_[s],1),_[s].m(e,null))}for(M(),s=A.length;s<_.length;s+=1)N(s);P()}(!C||16&n)&&p(e,"style",t[4])},i(t){if(!C){for(let t=0;t<A.length;t+=1)V(_[t]);C=!0}},o(t){_=_.filter(Boolean);for(let t=0;t<_.length;t+=1)F(_[t]);C=!1},d(t){t&&h(e),c(_,t)}}}function uu(t){let e,n;return e=new nu({props:{pubData:t[14],headings:t[7]}}),{c(){$(e.$$.fragment)},m(t,s){q(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.pubData=t[14]),e.$set(s)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function lu(t){let e,n,s,i,r,c,l,f,g,m,y,v;function w(e){t[10](e)}function E(e){t[11](e)}function b(e){t[12](e)}function I(e){t[13](e)}let S={};void 0!==t[3]&&(S.name=t[3]),void 0!==t[0]&&(S.groupSize=t[0]),void 0!==t[1]&&(S.food=t[1]),void 0!==t[2]&&(S.sport=t[2]),n=new ru({props:S}),T.push((()=>U(n,"name",w))),T.push((()=>U(n,"groupSize",E))),T.push((()=>U(n,"food",b))),T.push((()=>U(n,"sport",I)));const C=[cu,hu,au],A=[];function _(t,e){return 96&e&&(f=null),32&e&&(g=null),null==f&&(f=!!(t[6].length>0&&t[5]())),f?0:(null==g&&(g=!t[5]()),g?1:2)}return m=_(t,-1),y=A[m]=C[m](t),{c(){e=u("section"),$(n.$$.fragment),l=d(),y.c(),p(e,"class","pub-listings")},m(t,s){a(t,e,s),q(n,e,null),o(e,l),A[m].m(e,null),v=!0},p(t,[o]){const a={};!s&&8&o&&(s=!0,a.name=t[3],N((()=>s=!1))),!i&&1&o&&(i=!0,a.groupSize=t[0],N((()=>i=!1))),!r&&2&o&&(r=!0,a.food=t[1],N((()=>r=!1))),!c&&4&o&&(c=!0,a.sport=t[2],N((()=>c=!1))),n.$set(a);let h=m;m=_(t,o),m===h?A[m].p(t,o):(M(),F(A[h],1,1,(()=>{A[h]=null})),P(),y=A[m],y?y.p(t,o):(y=A[m]=C[m](t),y.c()),V(y,1),y.m(e,null))},i(t){v||(V(n.$$.fragment,t),V(y),v=!0)},o(t){F(n.$$.fragment,t),F(y),v=!1},d(t){t&&h(e),B(n),A[m].d()}}}function du(t,e,n){let s,i,r,o,a,h,c,u,{data:l}=e;return t.$$set=t=>{"data"in t&&n(8,l=t.data)},t.$$.update=()=>{263&t.$$.dirty&&n(6,s=l.filter((t=>(void 0===a||t.max_group>=a)&&(void 0===h||t.food===h||"both"===h)&&(void 0===c||t.sport===c||"both"===c)))),256&t.$$.dirty&&n(5,i=()=>{if(l.length>0)return n(9,u=Object.keys(l[0]).length-2),!0}),512&t.$$.dirty&&n(4,r=`grid-template-columns: repeat(${u}, 1fr);`)},[a,h,c,o,r,i,s,["name","max_group","food","sport","music","non_beer","drink_quality","drink_choice"],l,u,function(t){o=t,n(3,o)},function(t){a=t,n(0,a)},function(t){h=t,n(1,h)},function(t){c=t,n(2,c)}]}class fu extends z{constructor(t){super(),H(this,t,du,lu,r,{data:8})}}function pu(t){let e,n;return e=new fu({props:{data:t[0]}}),{c(){$(e.$$.fragment)},m(t,s){q(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[0]),e.$set(s)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function gu(e){let n,s,i,c,l,f=e[0],g=pu(e);return{c(){n=u("main"),s=u("div"),i=u("h1"),i.textContent="Edinburgh Pub Finder",c=d(),g.c(),p(i,"class","text-center text-5xl p-6"),p(s,"class","container mx-auto")},m(t,e){a(t,n,e),o(n,s),o(s,i),o(s,c),g.m(s,null),l=!0},p(e,[n]){1&n&&r(f,f=e[0])?(M(),F(g,1,1,t),P(),g=pu(e),g.c(),V(g),g.m(s,null)):g.p(e,n)},i(t){l||(V(g),l=!0)},o(t){F(g),l=!1},d(t){t&&h(n),g.d(t)}}}function mu(t,e,n){!function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:ft,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw wt.create("bad-app-name",{appName:String(s)});const i=gt.get(s);if(i){if(X(t,i.options)&&X(n,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const r=new nt(s);for(const t of mt.values())r.addComponent(t);const o=new Et(t,n,r);gt.set(s,o)}({apiKey:"AIzaSyD7IVKm4pg_IG3FIYjzqrjVVet7KocGKcM",authDomain:"edinburgh-pubs-24942.firebaseapp.com",projectId:"edinburgh-pubs-24942",storageBucket:"edinburgh-pubs-24942.appspot.com",messagingSenderId:"600769056466",appId:"1:600769056466:web:ae2e55b79a8c7661eea70b",measurementId:"G-HC10EHXZBN"});const s=Mc();let i=new Array;return(async()=>{const t=[];(await Xc(Lc(s,"Pubs"))).forEach((e=>{t.push(e.data())})),n(0,i=t)})(),[i]}return new class extends z{constructor(t){super(),H(this,t,mu,gu,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
