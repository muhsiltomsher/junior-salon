const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./monaco-editor-DjMEC8bx.css"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { _ as __vitePreload } from "../chunks/preload-helper-BazNuh42.min.js";
import { p as parse, w as walk, g as generate } from "../chunks/index-BhcUEIkR.min.js";
import { w as withKeys, a as withModifiers, c as createApp } from "../chunks/runtime-dom.esm-bundler-5tPCrDgD.min.js";
import { d as defineStore, u as useLogStore, a as useApi, c as createPinia, s as setupWorker, __tla as __tla_0 } from "./worker-W3fg9dm2.js";
import { t as toValue$3, i as isRef, h as hasInjectionContext, a as inject, r as ref, w as watchEffect, o as onBeforeUnmount, b as onDeactivated, c as onActivated, g as getCurrentInstance, s as shallowRef, d as defineComponent, u as unref, e as shallowReactive, f as computed, p as provide, j as watch, k as h, n as nextTick, l as reactive, m as toRef, q as onScopeDispose, v as onUnmounted, x as onMounted, y as getCurrentScope, z as shallowReadonly, F as Fragment, C as Comment, A as mergeProps, B as cloneVNode, D as createBlock, E as openBlock, G as withCtx, H as renderSlot, I as readonly, J as customRef, K as effectScope, L as toRefs, M as useId$1, N as createVNode, O as createCommentVNode, P as toHandlerKey, Q as camelize, T as Teleport, R as normalizeStyle, S as markRaw, U as createElementBlock, V as renderList, W as watchSyncEffect, X as watchPostEffect, Y as mergeDefaults, Z as withMemo, _ as normalizeProps$1, $ as guardReactiveProps, a0 as createTextVNode, a1 as toDisplayString, a2 as normalizeClass, a3 as resolveDynamicComponent, a4 as useSlots, a5 as createBaseVNode, a6 as toHandlers, a7 as mergeModels, a8 as useModel, a9 as createSlots, aa as useTemplateRef, ab as Suspense, ac as resolveComponent } from "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import { l as l$1 } from "../chunks/index-DmkUm1CH.min.js";
import { u as useDebounceFn$1, a as useActiveElement, b as useEventListener$1, c as createSharedComposable$1, d as useColorMode$1, e as useDark, r as reactivePick, f as reactiveOmit$1, g as useStorage, h as createReusableTemplate } from "../chunks/index-B5VrHBO0.min.js";
import { o as offset$1, f as flip$1, s as shift$1, a as size$1, h as hide$1, l as limitShift$1, c as computePosition$1, b as arrow$2, d as createCoords, r as rectToClientRect, e as round, m as max, g as min, i as floor } from "../chunks/floating-ui.core-XFSvPU2w.min.js";
import { c as createVirtualRef } from "./virtualRef-DG1xZSxh.js";
import { o as overArg, i as isPrototype, a as arrayLikeKeys, b as isArrayLike, c as cloneArrayBuffer, d as cloneTypedArray, e as baseUnary, n as nodeUtil, f as isBuffer, g as cloneBuffer, h as initCloneObject, S as Stack } from "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { a as assignValue } from "../chunks/set-CQpYICWN.min.js";
import { g as getNative, i as isArray$1, t as toSource, M as Map$1 } from "../chunks/_toKey-C72hUfwS.min.js";
import { r as root, b as baseGetTag, S as Symbol$1, i as isObjectLike, a as isObject$3 } from "../chunks/isObject-8EXUDN8T.min.js";
import { v as version$1, __tla as __tla_1 } from "./build-C4S0myzs.js";
import { F as Fuse } from "../chunks/fuse-Gm-adH5Q.min.js";
import { __tla as __tla_2 } from "./cssesc-DgwoVnGT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_3 } from "../chunks/index-DLCNveCc.min.js";
import "./build-BaSXQmfn.js";
import { __tla as __tla_4 } from "../chunks/index-CiedHqv8.min.js";
import "./pre-process-ChG-s8ET.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "../chunks/index-CMNY8QH5.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "./resolve-config-D3CNF9bs.js";
let useTimeoutFn, _sfc_main$9, _sfc_main$g, _sfc_main$3, useOverlay, useToast, _sfc_main$h, tv, useRouter, _sfc_main$7, useDashboard, useResizable, _sfc_main$j, MAP_KEY_TO_FOCUS_INTENT, _sfc_main$i, useForwardProps, Primitive, useLocalePro, useAppConfig$1, useAppConfig, version, _sfc_main$q, generateCache, _sfc_main$s, refAutoReset, useForwardExpose, injectTooltipProviderContext, _sfc_main$1E, useCollection, _sfc_main$1B, _sfc_main$1y, useEventListener, _sfc_main$1w, _sfc_main$1X, _sfc_main$1P, Presence, _sfc_main$1r, _sfc_main$1Q, defu, _sfc_main$d, useFormControl, _sfc_main$1C, useFormField, formLoadingInjectionKey, formOptionsInjectionKey, formBusInjectionKey, formInputsInjectionKey, getSlotChildrenText, formFieldInjectionKey, inputIdInjectionKey, findValuesBetween, createContext, useTypeahead, useDirection, focusFirst$1, getFocusIntent, useVModel, injectRovingFocusGroupContext, createEventHook, getActiveElement, loader, handleAndDispatchCustomEvent$1, getAllKeys, getTag, useBusyStore, cloneDeep, _appConfig, useForwardPropsEmits, tv$1, useId, _sfc_main$t, wrapArray$1, get, useSettingsStore, _sfc_main$p;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const links = document.querySelectorAll('link[rel="stylesheet"][href*="wp-admin/load-styles.php"], link[rel="stylesheet"][href*="wp-admin/css/colors/"]');
  Array.from(links).reverse().forEach((link2) => {
    if (link2 instanceof HTMLLinkElement) {
      fetch(link2.href).then((res) => res.text()).then((css) => {
        const style = document.createElement("style");
        style.textContent = dontTouchMe(css);
        document.head.prepend(style);
        link2.remove();
      });
    }
  });
  function dontTouchMe(css) {
    const ast = parse(css);
    walk(ast, {
      enter: (node, item, list) => {
        if (node.type === "Atrule" && node.name === "keyframes") {
          return walk.skip;
        }
        if (node.type === "SelectorList") {
          node.children.forEach((selector) => {
            if (selector.children.some((child) => child.type === "PseudoClassSelector" && ![
              "visible",
              "hover",
              "focus",
              "focus-visible",
              "focus-within",
              "target",
              "read-write",
              "active",
              "visited",
              "link"
            ].includes(child.name))) {
              return;
            }
            selector.children.push({
              type: "PseudoClassSelector",
              name: "not",
              children: [
                {
                  type: "ClassSelector",
                  name: "windpress-style"
                },
                {
                  type: "Combinator",
                  name: " "
                },
                {
                  type: "TypeSelector",
                  name: "*"
                }
              ]
            });
          });
        }
      }
    });
    return generate(ast);
  }
  document.body.classList.add("folded");
  const wpbody = document.querySelector("#wpbody");
  if (wpbody) {
    wpbody.classList.add("windpress-style");
  }
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList" && mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement && !node.closest("#wpbody") && node.dataset) {
            Object.keys(node.dataset).forEach((key) => {
              if (key.startsWith("reka") || key.startsWith("dismissable")) {
                node.classList.add("windpress-style");
              }
            });
          }
        });
      }
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: false
  });
  function flatHooks(configHooks, hooks2 = {}, parentName) {
    for (const key in configHooks) {
      const subHook = configHooks[key];
      const name = parentName ? `${parentName}:${key}` : key;
      if (typeof subHook === "object" && subHook !== null) {
        flatHooks(subHook, hooks2, name);
      } else if (typeof subHook === "function") {
        hooks2[name] = subHook;
      }
    }
    return hooks2;
  }
  const defaultTask = {
    run: (function_) => function_()
  };
  const _createTask = () => defaultTask;
  const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
  function serialTaskCaller(hooks2, args) {
    const name = args.shift();
    const task = createTask(name);
    return hooks2.reduce((promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))), Promise.resolve());
  }
  function parallelTaskCaller(hooks2, args) {
    const name = args.shift();
    const task = createTask(name);
    return Promise.all(hooks2.map((hook) => task.run(() => hook(...args))));
  }
  function callEachWith(callbacks, arg0) {
    for (const callback of [
      ...callbacks
    ]) {
      callback(arg0);
    }
  }
  class Hookable {
    constructor() {
      this._hooks = {};
      this._before = void 0;
      this._after = void 0;
      this._deprecatedMessages = void 0;
      this._deprecatedHooks = {};
      this.hook = this.hook.bind(this);
      this.callHook = this.callHook.bind(this);
      this.callHookWith = this.callHookWith.bind(this);
    }
    hook(name, function_, options = {}) {
      if (!name || typeof function_ !== "function") {
        return () => {
        };
      }
      const originalName = name;
      let dep;
      while (this._deprecatedHooks[name]) {
        dep = this._deprecatedHooks[name];
        name = dep.to;
      }
      if (dep && !options.allowDeprecated) {
        let message = dep.message;
        if (!message) {
          message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
        }
        if (!this._deprecatedMessages) {
          this._deprecatedMessages = /* @__PURE__ */ new Set();
        }
        if (!this._deprecatedMessages.has(message)) {
          console.warn(message);
          this._deprecatedMessages.add(message);
        }
      }
      if (!function_.name) {
        try {
          Object.defineProperty(function_, "name", {
            get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
            configurable: true
          });
        } catch {
        }
      }
      this._hooks[name] = this._hooks[name] || [];
      this._hooks[name].push(function_);
      return () => {
        if (function_) {
          this.removeHook(name, function_);
          function_ = void 0;
        }
      };
    }
    hookOnce(name, function_) {
      let _unreg;
      let _function = (...arguments_) => {
        if (typeof _unreg === "function") {
          _unreg();
        }
        _unreg = void 0;
        _function = void 0;
        return function_(...arguments_);
      };
      _unreg = this.hook(name, _function);
      return _unreg;
    }
    removeHook(name, function_) {
      if (this._hooks[name]) {
        const index2 = this._hooks[name].indexOf(function_);
        if (index2 !== -1) {
          this._hooks[name].splice(index2, 1);
        }
        if (this._hooks[name].length === 0) {
          delete this._hooks[name];
        }
      }
    }
    deprecateHook(name, deprecated) {
      this._deprecatedHooks[name] = typeof deprecated === "string" ? {
        to: deprecated
      } : deprecated;
      const _hooks = this._hooks[name] || [];
      delete this._hooks[name];
      for (const hook of _hooks) {
        this.hook(name, hook);
      }
    }
    deprecateHooks(deprecatedHooks) {
      Object.assign(this._deprecatedHooks, deprecatedHooks);
      for (const name in deprecatedHooks) {
        this.deprecateHook(name, deprecatedHooks[name]);
      }
    }
    addHooks(configHooks) {
      const hooks2 = flatHooks(configHooks);
      const removeFns = Object.keys(hooks2).map((key) => this.hook(key, hooks2[key]));
      return () => {
        for (const unreg of removeFns.splice(0, removeFns.length)) {
          unreg();
        }
      };
    }
    removeHooks(configHooks) {
      const hooks2 = flatHooks(configHooks);
      for (const key in hooks2) {
        this.removeHook(key, hooks2[key]);
      }
    }
    removeAllHooks() {
      for (const key in this._hooks) {
        delete this._hooks[key];
      }
    }
    callHook(name, ...arguments_) {
      arguments_.unshift(name);
      return this.callHookWith(serialTaskCaller, name, ...arguments_);
    }
    callHookParallel(name, ...arguments_) {
      arguments_.unshift(name);
      return this.callHookWith(parallelTaskCaller, name, ...arguments_);
    }
    callHookWith(caller, name, ...arguments_) {
      const event = this._before || this._after ? {
        name,
        args: arguments_,
        context: {}
      } : void 0;
      if (this._before) {
        callEachWith(this._before, event);
      }
      const result = caller(name in this._hooks ? [
        ...this._hooks[name]
      ] : [], arguments_);
      if (result instanceof Promise) {
        return result.finally(() => {
          if (this._after && event) {
            callEachWith(this._after, event);
          }
        });
      }
      if (this._after && event) {
        callEachWith(this._after, event);
      }
      return result;
    }
    beforeEach(function_) {
      this._before = this._before || [];
      this._before.push(function_);
      return () => {
        if (this._before !== void 0) {
          const index2 = this._before.indexOf(function_);
          if (index2 !== -1) {
            this._before.splice(index2, 1);
          }
        }
      };
    }
    afterEach(function_) {
      this._after = this._after || [];
      this._after.push(function_);
      return () => {
        if (this._after !== void 0) {
          const index2 = this._after.indexOf(function_);
          if (index2 !== -1) {
            this._after.splice(index2, 1);
          }
        }
      };
    }
  }
  function createHooks() {
    return new Hookable();
  }
  const DupeableTags = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]);
  const TagsWithInnerContent = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]);
  const HasElementTags = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]);
  const ValidHeadTags = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]);
  const UniqueTags = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]);
  const TagConfigKeys = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]);
  const UsesMergeStrategy = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]);
  const MetaTagsArrayable = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]);
  const allowedMetaProperties = [
    "name",
    "property",
    "http-equiv"
  ];
  function isMetaArrayDupeKey(v2) {
    const k = v2.split(":")[1];
    return MetaTagsArrayable.has(k);
  }
  function dedupeKey(tag) {
    const { props, tag: name } = tag;
    if (UniqueTags.has(name)) return name;
    if (name === "link" && props.rel === "canonical") return "canonical";
    if (props.charset) return "charset";
    if (tag.tag === "meta") {
      for (const n of allowedMetaProperties) {
        if (props[n] !== void 0) {
          return `${name}:${props[n]}`;
        }
      }
    }
    if (tag.key) {
      return `${name}:key:${tag.key}`;
    }
    if (props.id) {
      return `${name}:id:${props.id}`;
    }
    if (TagsWithInnerContent.has(name)) {
      const v2 = tag.textContent || tag.innerHTML;
      if (v2) {
        return `${name}:content:${v2}`;
      }
    }
  }
  function hashTag(tag) {
    const dedupe = tag._h || tag._d;
    if (dedupe) return dedupe;
    const inner = tag.textContent || tag.innerHTML;
    if (inner) return inner;
    return `${tag.tag}:${Object.entries(tag.props).map(([k, v2]) => `${k}:${String(v2)}`).join(",")}`;
  }
  function walkResolver(val, resolve, key) {
    const type = typeof val;
    if (type === "function") {
      if (!key || key !== "titleTemplate" && !(key[0] === "o" && key[1] === "n")) {
        val = val();
      }
    }
    let v2;
    if (resolve) {
      v2 = resolve(key, val);
    }
    if (Array.isArray(v2)) {
      return v2.map((r) => walkResolver(r, resolve));
    }
    if ((v2 == null ? void 0 : v2.constructor) === Object) {
      const next = {};
      for (const key2 of Object.keys(v2)) {
        next[key2] = walkResolver(v2[key2], resolve, key2);
      }
      return next;
    }
    return v2;
  }
  function normalizeStyleClassProps(key, value) {
    const store = key === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
    function processValue(rawValue) {
      const value2 = rawValue.trim();
      if (!value2) return;
      if (key === "style") {
        const [k, ...v2] = value2.split(":").map((s) => s.trim());
        if (k && v2.length) store.set(k, v2.join(":"));
      } else {
        value2.split(" ").filter(Boolean).forEach((c2) => store.add(c2));
      }
    }
    if (typeof value === "string") {
      key === "style" ? value.split(";").forEach(processValue) : processValue(value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => processValue(item));
    } else if (value && typeof value === "object") {
      Object.entries(value).forEach(([k, v2]) => {
        if (v2 && v2 !== "false") {
          key === "style" ? store.set(k.trim(), v2) : processValue(k);
        }
      });
    }
    return store;
  }
  function normalizeProps(tag, input2) {
    tag.props = tag.props || {};
    if (!input2) {
      return tag;
    }
    Object.entries(input2).forEach(([key, value]) => {
      if (value === null) {
        tag.props[key] = null;
        return;
      }
      if (key === "class" || key === "style") {
        tag.props[key] = normalizeStyleClassProps(key, value);
        return;
      }
      if (TagConfigKeys.has(key)) {
        if ([
          "textContent",
          "innerHTML"
        ].includes(key) && typeof value === "object") {
          let type = input2.type;
          if (!input2.type) {
            type = "application/json";
          }
          if (!(type == null ? void 0 : type.endsWith("json")) && type !== "speculationrules") {
            return;
          }
          input2.type = type;
          tag.props.type = type;
          tag[key] = JSON.stringify(value);
        } else {
          tag[key] = value;
        }
        return;
      }
      const strValue = String(value);
      const isDataKey = key.startsWith("data-");
      if (strValue === "true" || strValue === "") {
        tag.props[key] = isDataKey ? strValue : true;
      } else if (!value && isDataKey && strValue === "false") {
        tag.props[key] = "false";
      } else if (value !== void 0) {
        tag.props[key] = value;
      }
    });
    return tag;
  }
  function normalizeTag(tagName, _input) {
    const input2 = typeof _input === "object" && typeof _input !== "function" ? _input : {
      [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input
    };
    const tag = normalizeProps({
      tag: tagName,
      props: {}
    }, input2);
    if (tag.key && DupeableTags.has(tag.tag)) {
      tag.props["data-hid"] = tag._h = tag.key;
    }
    if (tag.tag === "script" && typeof tag.innerHTML === "object") {
      tag.innerHTML = JSON.stringify(tag.innerHTML);
      tag.props.type = tag.props.type || "application/json";
    }
    return Array.isArray(tag.props.content) ? tag.props.content.map((v2) => ({
      ...tag,
      props: {
        ...tag.props,
        content: v2
      }
    })) : tag;
  }
  function normalizeEntryToTags(input2, propResolvers) {
    if (!input2) {
      return [];
    }
    if (typeof input2 === "function") {
      input2 = input2();
    }
    const resolvers = (key, val) => {
      for (let i2 = 0; i2 < propResolvers.length; i2++) {
        val = propResolvers[i2](key, val);
      }
      return val;
    };
    input2 = resolvers(void 0, input2);
    const tags = [];
    input2 = walkResolver(input2, resolvers);
    Object.entries(input2 || {}).forEach(([key, value]) => {
      if (value === void 0) return;
      for (const v2 of Array.isArray(value) ? value : [
        value
      ]) tags.push(normalizeTag(key, v2));
    });
    return tags.flat();
  }
  const sortTags = (a2, b) => a2._w === b._w ? a2._p - b._p : a2._w - b._w;
  const TAG_WEIGHTS = {
    base: -10,
    title: 10
  };
  const TAG_ALIASES = {
    critical: -8,
    high: -1,
    low: 2
  };
  const WEIGHT_MAP = {
    meta: {
      "content-security-policy": -30,
      "charset": -20,
      "viewport": -15
    },
    link: {
      "preconnect": 20,
      "stylesheet": 60,
      "preload": 70,
      "modulepreload": 70,
      "prefetch": 90,
      "dns-prefetch": 90,
      "prerender": 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  };
  const ImportStyleRe = /@import/;
  const isTruthy = (val) => val === "" || val === true;
  function tagWeight(head, tag) {
    var _a2;
    if (typeof tag.tagPriority === "number") return tag.tagPriority;
    let weight = 100;
    const offset2 = TAG_ALIASES[tag.tagPriority] || 0;
    const weightMap = head.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : WEIGHT_MAP;
    if (tag.tag in TAG_WEIGHTS) {
      weight = TAG_WEIGHTS[tag.tag];
    } else if (tag.tag === "meta") {
      const metaType = tag.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : tag.props.charset ? "charset" : tag.props.name === "viewport" ? "viewport" : null;
      if (metaType) weight = WEIGHT_MAP.meta[metaType];
    } else if (tag.tag === "link" && tag.props.rel) {
      weight = weightMap.link[tag.props.rel];
    } else if (tag.tag === "script") {
      if (isTruthy(tag.props.async)) {
        weight = weightMap.script.async;
      } else if (tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && tag.props.type !== "module" && !((_a2 = tag.props.type) == null ? void 0 : _a2.endsWith("json"))) {
        weight = weightMap.script.sync;
      } else if (isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async)) {
        weight = weightMap.script.defer;
      }
    } else if (tag.tag === "style") {
      weight = tag.innerHTML && ImportStyleRe.test(tag.innerHTML) ? weightMap.style.imported : weightMap.style.sync;
    }
    return (weight || 100) + offset2;
  }
  function registerPlugin(head, p2) {
    const plugin = typeof p2 === "function" ? p2(head) : p2;
    const key = plugin.key || String(head.plugins.size + 1);
    const exists = head.plugins.get(key);
    if (!exists) {
      head.plugins.set(key, plugin);
      head.hooks.addHooks(plugin.hooks || {});
    }
  }
  function createUnhead(resolvedOptions = {}) {
    var _a2;
    const hooks2 = createHooks();
    hooks2.addHooks(resolvedOptions.hooks || {});
    const ssr = !resolvedOptions.document;
    const entries = /* @__PURE__ */ new Map();
    const plugins = /* @__PURE__ */ new Map();
    const normalizeQueue = [];
    const head = {
      _entryCount: 1,
      plugins,
      dirty: false,
      resolvedOptions,
      hooks: hooks2,
      ssr,
      entries,
      headEntries() {
        return [
          ...entries.values()
        ];
      },
      use: (p2) => registerPlugin(head, p2),
      push(input2, _options) {
        const options = {
          ..._options || {}
        };
        delete options.head;
        const _i2 = options._index ?? head._entryCount++;
        const inst = {
          _i: _i2,
          input: input2,
          options
        };
        const _2 = {
          _poll(rm = false) {
            head.dirty = true;
            !rm && normalizeQueue.push(_i2);
            hooks2.callHook("entries:updated", head);
          },
          dispose() {
            if (entries.delete(_i2)) {
              _2._poll(true);
            }
          },
          patch(input22) {
            if (!options.mode || options.mode === "server" && ssr || options.mode === "client" && !ssr) {
              inst.input = input22;
              entries.set(_i2, inst);
              _2._poll();
            }
          }
        };
        _2.patch(input2);
        return _2;
      },
      async resolveTags() {
        var _a3;
        const ctx = {
          tagMap: /* @__PURE__ */ new Map(),
          tags: [],
          entries: [
            ...head.entries.values()
          ]
        };
        await hooks2.callHook("entries:resolve", ctx);
        while (normalizeQueue.length) {
          const i2 = normalizeQueue.shift();
          const e = entries.get(i2);
          if (e) {
            const normalizeCtx = {
              tags: normalizeEntryToTags(e.input, resolvedOptions.propResolvers || []).map((t) => Object.assign(t, e.options)),
              entry: e
            };
            await hooks2.callHook("entries:normalize", normalizeCtx);
            e._tags = normalizeCtx.tags.map((t, i22) => {
              t._w = tagWeight(head, t);
              t._p = (e._i << 10) + i22;
              t._d = dedupeKey(t);
              return t;
            });
          }
        }
        let hasFlatMeta = false;
        ctx.entries.flatMap((e) => (e._tags || []).map((t) => ({
          ...t,
          props: {
            ...t.props
          }
        }))).sort(sortTags).reduce((acc, next) => {
          const k = String(next._d || next._p);
          if (!acc.has(k)) return acc.set(k, next);
          const prev = acc.get(k);
          const strategy = (next == null ? void 0 : next.tagDuplicateStrategy) || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null);
          if (strategy === "merge") {
            const newProps = {
              ...prev.props
            };
            Object.entries(next.props).forEach(([p2, v2]) => newProps[p2] = p2 === "style" ? new Map([
              ...prev.props.style || /* @__PURE__ */ new Map(),
              ...v2
            ]) : p2 === "class" ? /* @__PURE__ */ new Set([
              ...prev.props.class || /* @__PURE__ */ new Set(),
              ...v2
            ]) : v2);
            acc.set(k, {
              ...next,
              props: newProps
            });
          } else if (next._p >> 10 === prev._p >> 10 && isMetaArrayDupeKey(next._d)) {
            acc.set(k, Object.assign([
              ...Array.isArray(prev) ? prev : [
                prev
              ],
              next
            ], next));
            hasFlatMeta = true;
          } else if (next._w === prev._w ? next._p > prev._p : (next == null ? void 0 : next._w) < (prev == null ? void 0 : prev._w)) {
            acc.set(k, next);
          }
          return acc;
        }, ctx.tagMap);
        const title = ctx.tagMap.get("title");
        const titleTemplate = ctx.tagMap.get("titleTemplate");
        head._title = title == null ? void 0 : title.textContent;
        if (titleTemplate) {
          const titleTemplateFn = titleTemplate == null ? void 0 : titleTemplate.textContent;
          head._titleTemplate = titleTemplateFn;
          if (titleTemplateFn) {
            let newTitle = typeof titleTemplateFn === "function" ? titleTemplateFn(title == null ? void 0 : title.textContent) : titleTemplateFn;
            if (typeof newTitle === "string" && !head.plugins.has("template-params")) {
              newTitle = newTitle.replace("%s", (title == null ? void 0 : title.textContent) || "");
            }
            if (title) {
              newTitle === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", {
                ...title,
                textContent: newTitle
              });
            } else {
              titleTemplate.tag = "title";
              titleTemplate.textContent = newTitle;
            }
          }
        }
        ctx.tags = Array.from(ctx.tagMap.values());
        if (hasFlatMeta) {
          ctx.tags = ctx.tags.flat().sort(sortTags);
        }
        await hooks2.callHook("tags:beforeResolve", ctx);
        await hooks2.callHook("tags:resolve", ctx);
        await hooks2.callHook("tags:afterResolve", ctx);
        const finalTags = [];
        for (const t of ctx.tags) {
          const { innerHTML, tag, props } = t;
          if (!ValidHeadTags.has(tag)) {
            continue;
          }
          if (Object.keys(props).length === 0 && !t.innerHTML && !t.textContent) {
            continue;
          }
          if (tag === "meta" && !props.content && !props["http-equiv"] && !props.charset) {
            continue;
          }
          if (tag === "script" && innerHTML) {
            if ((_a3 = props.type) == null ? void 0 : _a3.endsWith("json")) {
              const v2 = typeof innerHTML === "string" ? innerHTML : JSON.stringify(innerHTML);
              t.innerHTML = v2.replace(/</g, "\\u003C");
            } else if (typeof innerHTML === "string") {
              t.innerHTML = innerHTML.replace(new RegExp(`</${tag}`, "g"), `<\\/${tag}`);
            }
            t._d = dedupeKey(t);
          }
          finalTags.push(t);
        }
        return finalTags;
      }
    };
    ((resolvedOptions == null ? void 0 : resolvedOptions.plugins) || []).forEach((p2) => registerPlugin(head, p2));
    head.hooks.callHook("init", head);
    (_a2 = resolvedOptions.init) == null ? void 0 : _a2.forEach((e) => e && head.push(e));
    return head;
  }
  async function renderDOMHead(head, options = {}) {
    const dom = options.document || head.resolvedOptions.document;
    if (!dom || !head.dirty) return;
    const beforeRenderCtx = {
      shouldRender: true,
      tags: []
    };
    await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
    if (!beforeRenderCtx.shouldRender) return;
    if (head._domUpdatePromise) {
      return head._domUpdatePromise;
    }
    head._domUpdatePromise = new Promise(async (resolve) => {
      var _a2;
      const dupeKeyCounter = /* @__PURE__ */ new Map();
      const resolveTagPromise = new Promise((resolve2) => {
        head.resolveTags().then((tags2) => {
          resolve2(tags2.map((tag) => {
            const count2 = dupeKeyCounter.get(tag._d) || 0;
            const res = {
              tag,
              id: (count2 ? `${tag._d}:${count2}` : tag._d) || hashTag(tag),
              shouldRender: true
            };
            if (tag._d && isMetaArrayDupeKey(tag._d)) {
              dupeKeyCounter.set(tag._d, count2 + 1);
            }
            return res;
          }));
        });
      });
      let state2 = head._dom;
      if (!state2) {
        state2 = {
          title: dom.title,
          elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", dom.documentElement).set("bodyAttrs", dom.body)
        };
        for (const key of [
          "body",
          "head"
        ]) {
          const children = (_a2 = dom[key]) == null ? void 0 : _a2.children;
          for (const c2 of children) {
            const tag = c2.tagName.toLowerCase();
            if (!HasElementTags.has(tag)) {
              continue;
            }
            const next = normalizeProps({
              tag,
              props: {}
            }, {
              innerHTML: c2.innerHTML,
              ...c2.getAttributeNames().reduce((props, name) => {
                props[name] = c2.getAttribute(name);
                return props;
              }, {}) || {}
            });
            next.key = c2.getAttribute("data-hid") || void 0;
            next._d = dedupeKey(next) || hashTag(next);
            if (state2.elMap.has(next._d)) {
              let count2 = 1;
              let k = next._d;
              while (state2.elMap.has(k)) {
                k = `${next._d}:${count2++}`;
              }
              state2.elMap.set(k, c2);
            } else {
              state2.elMap.set(next._d, c2);
            }
          }
        }
      }
      state2.pendingSideEffects = {
        ...state2.sideEffects
      };
      state2.sideEffects = {};
      function track(id, scope, fn) {
        const k = `${id}:${scope}`;
        state2.sideEffects[k] = fn;
        delete state2.pendingSideEffects[k];
      }
      function trackCtx({ id, $el, tag }) {
        const isAttrTag = tag.tag.endsWith("Attrs");
        state2.elMap.set(id, $el);
        if (!isAttrTag) {
          if (tag.textContent && tag.textContent !== $el.textContent) {
            $el.textContent = tag.textContent;
          }
          if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) {
            $el.innerHTML = tag.innerHTML;
          }
          track(id, "el", () => {
            $el == null ? void 0 : $el.remove();
            state2.elMap.delete(id);
          });
        }
        for (const k in tag.props) {
          if (!Object.prototype.hasOwnProperty.call(tag.props, k)) continue;
          const value = tag.props[k];
          if (k.startsWith("on") && typeof value === "function") {
            const dataset = $el == null ? void 0 : $el.dataset;
            if (dataset && dataset[`${k}fired`]) {
              const ek = k.slice(0, -5);
              value.call($el, new Event(ek.substring(2)));
            }
            if ($el.getAttribute(`data-${k}`) !== "") {
              (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(k.substring(2), value.bind($el));
              $el.setAttribute(`data-${k}`, "");
            }
            continue;
          }
          const ck = `attr:${k}`;
          if (k === "class") {
            if (!value) {
              continue;
            }
            for (const c2 of value) {
              isAttrTag && track(id, `${ck}:${c2}`, () => $el.classList.remove(c2));
              !$el.classList.contains(c2) && $el.classList.add(c2);
            }
          } else if (k === "style") {
            if (!value) {
              continue;
            }
            for (const [k2, v2] of value) {
              track(id, `${ck}:${k2}`, () => {
                $el.style.removeProperty(k2);
              });
              $el.style.setProperty(k2, v2);
            }
          } else if (value !== false && value !== null) {
            $el.getAttribute(k) !== value && $el.setAttribute(k, value === true ? "" : String(value));
            isAttrTag && track(id, ck, () => $el.removeAttribute(k));
          }
        }
      }
      const pending = [];
      const frag = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      };
      const tags = await resolveTagPromise;
      for (const ctx of tags) {
        const { tag, shouldRender, id } = ctx;
        if (!shouldRender) continue;
        if (tag.tag === "title") {
          dom.title = tag.textContent;
          track("title", "", () => dom.title = state2.title);
          continue;
        }
        ctx.$el = ctx.$el || state2.elMap.get(id);
        if (ctx.$el) {
          trackCtx(ctx);
        } else if (HasElementTags.has(tag.tag)) {
          pending.push(ctx);
        }
      }
      for (const ctx of pending) {
        const pos = ctx.tag.tagPosition || "head";
        ctx.$el = dom.createElement(ctx.tag.tag);
        trackCtx(ctx);
        frag[pos] = frag[pos] || dom.createDocumentFragment();
        frag[pos].appendChild(ctx.$el);
      }
      for (const ctx of tags) await head.hooks.callHook("dom:renderTag", ctx, dom, track);
      frag.head && dom.head.appendChild(frag.head);
      frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
      frag.bodyClose && dom.body.appendChild(frag.bodyClose);
      for (const k in state2.pendingSideEffects) {
        state2.pendingSideEffects[k]();
      }
      head._dom = state2;
      await head.hooks.callHook("dom:rendered", {
        renders: tags
      });
      resolve();
    }).finally(() => {
      head._domUpdatePromise = void 0;
      head.dirty = false;
    });
    return head._domUpdatePromise;
  }
  function createHead$1(options = {}) {
    var _a2, _b2, _c2;
    const render2 = ((_a2 = options.domOptions) == null ? void 0 : _a2.render) || renderDOMHead;
    options.document = options.document || (typeof window !== "undefined" ? document : void 0);
    const initialPayload = ((_c2 = (_b2 = options.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return createUnhead({
      ...options,
      plugins: [
        ...options.plugins || [],
        {
          key: "client",
          hooks: {
            "entries:updated": render2
          }
        }
      ],
      init: [
        initialPayload ? JSON.parse(initialPayload) : false,
        ...options.init || []
      ]
    });
  }
  function createDebouncedFn(callee, delayer) {
    let ctxId = 0;
    return () => {
      const delayFnCtxId = ++ctxId;
      delayer(() => {
        if (ctxId === delayFnCtxId) {
          callee();
        }
      });
    };
  }
  const VueResolver = (_2, value) => {
    return isRef(value) ? toValue$3(value) : value;
  };
  const headSymbol = "usehead";
  function vueInstall(head) {
    const plugin = {
      install(app2) {
        app2.config.globalProperties.$unhead = head;
        app2.config.globalProperties.$head = head;
        app2.provide(headSymbol, head);
      }
    };
    return plugin.install;
  }
  function injectHead() {
    if (hasInjectionContext()) {
      const instance = inject(headSymbol);
      if (!instance) {
        throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      }
      return instance;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function useHead(input2, options = {}) {
    const head = options.head || injectHead();
    return head.ssr ? head.push(input2 || {}, options) : clientUseHead(head, input2, options);
  }
  function clientUseHead(head, input2, options = {}) {
    const deactivated = ref(false);
    let entry;
    watchEffect(() => {
      const i2 = deactivated.value ? {} : walkResolver(input2, VueResolver);
      if (entry) {
        entry.patch(i2);
      } else {
        entry = head.push(i2, options);
      }
    });
    const vm = getCurrentInstance();
    if (vm) {
      onBeforeUnmount(() => {
        entry.dispose();
      });
      onDeactivated(() => {
        deactivated.value = true;
      });
      onActivated(() => {
        deactivated.value = false;
      });
    }
    return entry;
  }
  function createHead(options = {}) {
    const head = createHead$1({
      domOptions: {
        render: createDebouncedFn(() => renderDOMHead(head), (fn) => setTimeout(fn, 0))
      },
      ...options
    });
    head.install = vueInstall(head);
    return head;
  }
  const _47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47vue_47plugins_47head_46js = {
    install(app2) {
      if (app2._context.provides.usehead) {
        return;
      }
      const head = createHead();
      app2.use(head);
    }
  };
  _appConfig = {
    "ui": {
      "icons": {
        "caution": "i-lucide-circle-alert",
        "copy": "i-lucide-copy",
        "copyCheck": "i-lucide-copy-check",
        "dark": "i-lucide-moon",
        "error": "i-lucide-circle-x",
        "external": "i-lucide-arrow-up-right",
        "eye": "i-lucide-eye",
        "eyeOff": "i-lucide-eye-off",
        "file": "i-lucide-file-text",
        "folder": "i-lucide-folder",
        "folderOpen": "i-lucide-folder-open",
        "hash": "i-lucide-hash",
        "info": "i-lucide-info",
        "light": "i-lucide-sun",
        "menu": "i-lucide-menu",
        "panelClose": "i-lucide-panel-left-close",
        "panelOpen": "i-lucide-panel-left-open",
        "success": "i-lucide-circle-check",
        "system": "i-lucide-monitor",
        "tip": "i-lucide-lightbulb",
        "warning": "i-lucide-triangle-alert",
        "arrowLeft": "i-lucide-arrow-left",
        "arrowRight": "i-lucide-arrow-right",
        "check": "i-lucide-check",
        "chevronDoubleLeft": "i-lucide-chevrons-left",
        "chevronDoubleRight": "i-lucide-chevrons-right",
        "chevronDown": "i-lucide-chevron-down",
        "chevronLeft": "i-lucide-chevron-left",
        "chevronRight": "i-lucide-chevron-right",
        "chevronUp": "i-lucide-chevron-up",
        "close": "i-lucide-x",
        "ellipsis": "i-lucide-ellipsis",
        "loading": "i-lucide-refresh-cw",
        "minus": "i-lucide-minus",
        "plus": "i-lucide-plus",
        "search": "i-lucide-search"
      },
      "colors": {
        "primary": "indigo",
        "secondary": "blue",
        "success": "green",
        "info": "blue",
        "warning": "yellow",
        "error": "red",
        "neutral": "zinc"
      },
      "commandPalette": {
        "slots": {
          "root": "z-[10001]"
        }
      }
    },
    "colorMode": true
  };
  const isBrowser = typeof document !== "undefined";
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop$1 = () => {
  };
  const isArray = Array.isArray;
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash: decode(hash)
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a2, b) {
    const aLastIndex = a2.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b.params) && stringifyQuery2(a2.query) === stringifyQuery2(b.query) && a2.hash === b.hash;
  }
  function isSameRouteRecord(a2, b) {
    return (a2.aliasOf || a2) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a2, b) {
    if (Object.keys(a2).length !== Object.keys(b).length) return false;
    for (const key in a2) {
      if (!isSameRouteLocationParamsValue(a2[key], b[key])) return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a2, b) {
    return isArray(a2) ? isEquivalentArray(a2, b) : isArray(b) ? isEquivalentArray(b, a2) : a2 === b;
  }
  function isEquivalentArray(a2, b) {
    return isArray(b) ? a2.length === b.length && a2.every((value, i2) => value === b[i2]) : a2.length === 1 && a2[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/")) return to;
    if (!to) return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    const lastToSegment = toSegments[toSegments.length - 1];
    if (lastToSegment === ".." || lastToSegment === ".") {
      toSegments.push("");
    }
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".") continue;
      if (segment === "..") {
        if (position > 1) position--;
      } else break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  function normalizeBase(base) {
    if (!base) {
      if (isBrowser) {
        const baseEl = document.querySelector("base");
        base = baseEl && baseEl.getAttribute("href") || "/";
        base = base.replace(/^\w+:\/\/[^\/]+/, "");
      } else {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  function getElementPosition(el, offset2) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      behavior: offset2.behavior,
      left: elRect.left - docRect.left - (offset2.left || 0),
      top: elRect.top - docRect.top - (offset2.top || 0)
    };
  }
  const computeScrollPosition = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
      const positionEl = position.el;
      const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
      const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
      if (!el) {
        return;
      }
      scrollToOptions = getElementPosition(el, position);
    } else {
      scrollToOptions = position;
    }
    if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
    else {
      window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
    }
  }
  function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
  }
  const scrollPositions = /* @__PURE__ */ new Map();
  function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    scrollPositions.delete(key);
    return scroll;
  }
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state: state2 }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state2) {
        currentLocation.value = to;
        historyState.value = state2;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state2.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1) listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state) return;
      history2.replaceState(assign({}, history2.state, {
        scroll: computeScrollPosition()
      }), "");
    }
    function destroy() {
      for (const teardown of teardowns) teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener, {
      passive: true
    });
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = {
      value: history2.state
    };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state2, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state2, "", url);
        historyState.value = state2;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state2 = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, {
        position: historyState.value.position
      });
      changeLocation(to, state2, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state2 = assign({}, buildState(currentLocation.value, to, null), {
        position: currentState.position + 1
      }, data);
      changeLocation(to, state2, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners) historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const NavigationFailureSymbol = Symbol("");
  var NavigationFailureType;
  (function(NavigationFailureType2) {
    NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
    NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
    NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
  })(NavigationFailureType || (NavigationFailureType = {}));
  function createRouterError(type, params) {
    {
      return assign(new Error(), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys2 = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [
        90
      ];
      if (options.strict && !segment.length) pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex) pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys2.push({
            name: value,
            repeatable,
            optional
          });
          const re22 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re22 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re22})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re22}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re22})(?:/(?:${re22}))*)` : `(${re22})`;
          if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional) subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional) subSegmentScore += -8;
          if (repeatable) subSegmentScore += -20;
          if (re22 === ".*") subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i2 = score.length - 1;
      score[i2][score[i2].length - 1] += 0.7000000000000001;
    }
    if (!options.strict) pattern += "/?";
    if (options.end) pattern += "$";
    else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
    const re2 = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re2);
      const params = {};
      if (!match) return null;
      for (let i2 = 1; i2 < match.length; i2++) {
        const value = match[i2] || "";
        const key = keys2[i2 - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/")) path = path.slice(0, -1);
                  else avoidDuplicatedSlash = true;
                }
              } else throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re: re2,
      score,
      keys: keys2,
      parse: parse2,
      stringify
    };
  }
  function compareScoreArray(a2, b) {
    let i2 = 0;
    while (i2 < a2.length && i2 < b.length) {
      const diff2 = b[i2] - a2[i2];
      if (diff2) return diff2;
      i2++;
    }
    if (a2.length < b.length) {
      return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
    } else if (a2.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a2, b) {
    let i2 = 0;
    const aScore = a2.score;
    const bScore = b.score;
    while (i2 < aScore.length && i2 < bScore.length) {
      const comp = compareScoreArray(aScore[i2], bScore[i2]);
      if (comp) return comp;
      i2++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore)) return 1;
      if (isLastScoreNegative(bScore)) return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path) return [
      []
    ];
    if (path === "/") return [
      [
        ROOT_TOKEN
      ]
    ];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state2})/"${buffer}": ${message}`);
    }
    let state2 = 0;
    let previousState = state2;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment) tokens.push(segment);
      segment = [];
    }
    let i2 = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer) return;
      if (state2 === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state2 === 1 || state2 === 2 || state2 === 3) {
        if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i2 < path.length) {
      char = path[i2++];
      if (char === "\\" && state2 !== 2) {
        previousState = state2;
        state2 = 4;
        continue;
      }
      switch (state2) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state2 = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state2 = previousState;
          break;
        case 1:
          if (char === "(") {
            state2 = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state2 = 0;
            if (char !== "*" && char !== "?" && char !== "+") i2--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
            else state2 = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state2 = 0;
          if (char !== "*" && char !== "?" && char !== "+") i2--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state2 === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({
      strict: false,
      end: true,
      sensitive: false
    }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [
          record.alias
        ] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          })));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher)) {
            removeRoute(record.name);
          }
        }
        if (isMatchable(matcher)) {
          insertMatcher(matcher);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i2 = 0; i2 < children.length; i2++) {
            addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
          }
        }
        originalRecord = originalRecord || matcher;
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop$1;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      const index2 = findInsertionIndex(matcher, matchers);
      matchers.splice(index2, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher) throw createRouterError(1, {
          location: location2
        });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name)));
        path = matcher.stringify(params);
      } else if (location2.path != null) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher) throw createRouterError(1, {
          location: location2,
          currentLocation
        });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes.forEach((route) => addRoute(route));
    function clearRoutes() {
      matchers.length = 0;
      matcherMap.clear();
    }
    return {
      addRoute,
      resolve,
      removeRoute,
      clearRoutes,
      getRoutes,
      getRecordMatcher
    };
  }
  function paramsFromLocation(params, keys2) {
    const newParams = {};
    for (const key of keys2) {
      if (key in params) newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    const normalized = {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: record.aliasOf,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && {
        default: record.component
      }
    };
    Object.defineProperty(normalized, "mods", {
      value: {}
    });
    return normalized;
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf) return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function findInsertionIndex(matcher, matchers) {
    let lower = 0;
    let upper = matchers.length;
    while (lower !== upper) {
      const mid = lower + upper >> 1;
      const sortOrder = comparePathParserScore(matcher, matchers[mid]);
      if (sortOrder < 0) {
        upper = mid;
      } else {
        lower = mid + 1;
      }
    }
    const insertionAncestor = getInsertionAncestor(matcher);
    if (insertionAncestor) {
      upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
    }
    return upper;
  }
  function getInsertionAncestor(matcher) {
    let ancestor = matcher;
    while (ancestor = ancestor.parent) {
      if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
        return ancestor;
      }
    }
    return;
  }
  function isMatchable({ record }) {
    return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?") return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i2 = 0; i2 < searchParams.length; ++i2) {
      const searchParam = searchParams[i2].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray(currentValue)) {
          currentValue = query[key] = [
            currentValue
          ];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [
        value && encodeQueryValue(value)
      ];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null) search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i2 = handlers.indexOf(handler);
        if (i2 > -1) handlers.splice(i2, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers.slice(),
      reset
    };
  }
  function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve();
        }
      };
      const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3) guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.mods[name] = resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
          }));
        }
      }
    }
    return guards;
  }
  function useLink(props) {
    const router2 = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = computed(() => {
      const to = unref(props.to);
      return router2.resolve(to);
    });
    const activeRecordIndex = computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length) return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1) return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        const p2 = router2[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
        if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) {
          document.startViewTransition(() => p2);
        }
        return p2;
      }
      return Promise.resolve();
    }
    return {
      route,
      href: computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  function preferSingleVNode(vnodes) {
    return vnodes.length === 1 ? vnodes[0] : vnodes;
  }
  const RouterLinkImpl = defineComponent({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link2 = reactive(useLink(props));
      const { options } = inject(routerKey);
      const elClass = computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link2.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link2.isExactActive
      }));
      return () => {
        const children = slots.default && preferSingleVNode(slots.default(link2));
        return props.custom ? children : h("a", {
          "aria-current": link2.isExactActive ? props.ariaCurrentValue : null,
          href: link2.href,
          onClick: link2.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;
    if (e.button !== void 0 && e.button !== 0) return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target)) return;
    }
    if (e.preventDefault) e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue) return false;
      } else {
        if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2])) return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = inject(routerViewLocationKey);
      const routeToDisplay = computed(() => props.route || injectedRoute.value);
      const injectedDepth = inject(viewDepthKey, 0);
      const depth = computed(() => {
        let initialDepth = unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
      provide(viewDepthKey, computed(() => depth.value + 1));
      provide(matchedRouteKey, matchedRouteRef);
      provide(routerViewLocationKey, routeToDisplay);
      const viewRef = ref();
      watch(() => [
        viewRef.value,
        matchedRouteRef.value,
        props.name
      ], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, {
        flush: "post"
      });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot(slots.default, {
            Component: ViewComponent,
            route
          });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, {
          Component: component,
          route
        }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot) return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({
          path: locationNormalized.path
        }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if (rawLocation.path != null) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(targetParams)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), {
        replace: true
      }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : {
            path: newTargetLocation
          };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: newTargetLocation.path != null ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, {
          to: toLocation,
          from
        });
        handleScroll(from, from, true, false);
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign({
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function runWithContext(fn) {
      const app2 = installedApps.values().next().value;
      return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn) : fn();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of enteringRecords) {
          if (record.beforeEnter) {
            if (isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error) return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state2 = !isBrowser ? {} : history.state;
      if (isPush) {
        if (replace2 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state2 && state2.scroll
        }, data));
        else routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll(toLocation, from, isPush, isFirstNavigation);
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener) return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router2.listening) return;
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, {
            replace: true,
            force: true
          }), toLocation).catch(noop$1);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
          saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(assign(locationAsObject(error.to), {
              force: true
            }), toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop$1);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta && !isNavigationFailure(failure, 8)) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop$1);
      });
    }
    let readyHandlers = useCallbacks();
    let errorListeners = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorListeners.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([
          resolve2,
          reject
        ]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      const { scrollBehavior } = options;
      if (!isBrowser || !scrollBehavior) return Promise.resolve();
      const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
      return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = /* @__PURE__ */ new Set();
    const router2 = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      clearRoutes: matcher.clearRoutes,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorListeners.add,
      isReady,
      install(app2) {
        const router22 = this;
        app2.component("RouterLink", RouterLink);
        app2.component("RouterView", RouterView);
        app2.config.globalProperties.$router = router22;
        Object.defineProperty(app2.config.globalProperties, "$route", {
          enumerable: true,
          get: () => unref(currentRoute)
        });
        if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
          started = true;
          push(routerHistory.location).catch((err) => {
          });
        }
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          Object.defineProperty(reactiveRoute, key, {
            get: () => currentRoute.value[key],
            enumerable: true
          });
        }
        app2.provide(routerKey, router22);
        app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
        app2.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app2.unmount;
        installedApps.add(app2);
        app2.unmount = function() {
          installedApps.delete(app2);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            started = false;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    function runGuardQueue(guards) {
      return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
    }
    return router2;
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i2 = 0; i2 < len; i2++) {
      const recordFrom = from.matched[i2];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
        else leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i2];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [
      leavingRecords,
      updatingRecords,
      enteringRecords
    ];
  }
  useRouter = function() {
    return inject(routerKey);
  };
  function useRoute(_name) {
    return inject(routeLocationKey);
  }
  const chainedShortcutRegex = /^[^-]+.*-.*[^-]+$/;
  const combinedShortcutRegex = /^[^_]+.*_.*[^_]+$/;
  function extractShortcuts(items) {
    const shortcuts = {};
    function traverse(items2) {
      items2.forEach((item) => {
        var _a2;
        if (((_a2 = item.kbds) == null ? void 0 : _a2.length) && (item.onSelect || item.onClick)) {
          const shortcutKey = item.kbds.join("_");
          shortcuts[shortcutKey] = item.onSelect || item.onClick;
        }
        if (item.children) {
          traverse(item.children.flat());
        }
        if (item.items) {
          traverse(item.items.flat());
        }
      });
    }
    traverse(items.flat());
    return shortcuts;
  }
  function defineShortcuts(config2, options = {}) {
    const chainedInputs = ref([]);
    const clearChainedInput = () => {
      chainedInputs.value.splice(0, chainedInputs.value.length);
    };
    const debouncedClearChainedInput = useDebounceFn$1(clearChainedInput, options.chainDelay ?? 800);
    const activeElement = useActiveElement();
    const onKeyDown = (e) => {
      if (!e.key) {
        return;
      }
      const alphabeticalKey = /^[a-z]{1}$/i.test(e.key);
      let chainedKey;
      chainedInputs.value.push(e.key);
      if (chainedInputs.value.length >= 2) {
        chainedKey = chainedInputs.value.slice(-2).join("-");
        for (const shortcut of shortcuts.value.filter((s) => s.chained)) {
          if (shortcut.key !== chainedKey) {
            continue;
          }
          if (shortcut.enabled) {
            e.preventDefault();
            shortcut.handler(e);
          }
          clearChainedInput();
          return;
        }
      }
      for (const shortcut of shortcuts.value.filter((s) => !s.chained)) {
        if (e.key.toLowerCase() !== shortcut.key) {
          continue;
        }
        if (e.metaKey !== shortcut.metaKey) {
          continue;
        }
        if (e.ctrlKey !== shortcut.ctrlKey) {
          continue;
        }
        if (alphabeticalKey && e.shiftKey !== shortcut.shiftKey) {
          continue;
        }
        if (shortcut.enabled) {
          e.preventDefault();
          shortcut.handler();
        }
        clearChainedInput();
        return;
      }
      debouncedClearChainedInput();
    };
    const usingInput = computed(() => {
      var _a2, _b2, _c2;
      const tagName = (_a2 = activeElement.value) == null ? void 0 : _a2.tagName;
      const contentEditable = (_b2 = activeElement.value) == null ? void 0 : _b2.contentEditable;
      const usingInput2 = !!(tagName === "INPUT" || tagName === "TEXTAREA" || contentEditable === "true" || contentEditable === "plaintext-only");
      if (usingInput2) {
        return ((_c2 = activeElement.value) == null ? void 0 : _c2.name) || true;
      }
      return false;
    });
    const shortcuts = computed(() => {
      return Object.entries(toValue$3(config2)).map(([key, shortcutConfig]) => {
        var _a2, _b2;
        if (!shortcutConfig) {
          return null;
        }
        let shortcut;
        if (key.includes("-") && key !== "-" && !((_a2 = key.match(chainedShortcutRegex)) == null ? void 0 : _a2.length)) {
          console.trace(`[Shortcut] Invalid key: "${key}"`);
        }
        if (key.includes("_") && key !== "_" && !((_b2 = key.match(combinedShortcutRegex)) == null ? void 0 : _b2.length)) {
          console.trace(`[Shortcut] Invalid key: "${key}"`);
        }
        const chained = key.includes("-") && key !== "-";
        if (chained) {
          shortcut = {
            key: key.toLowerCase(),
            metaKey: false,
            ctrlKey: false,
            shiftKey: false,
            altKey: false
          };
        } else {
          const keySplit = key.toLowerCase().split("_").map((k) => k);
          shortcut = {
            key: keySplit.filter((k) => ![
              "meta",
              "command",
              "ctrl",
              "shift",
              "alt",
              "option"
            ].includes(k)).join("_"),
            metaKey: keySplit.includes("meta") || keySplit.includes("command"),
            ctrlKey: keySplit.includes("ctrl"),
            shiftKey: keySplit.includes("shift"),
            altKey: keySplit.includes("alt") || keySplit.includes("option")
          };
        }
        shortcut.chained = chained;
        if (typeof shortcutConfig === "function") {
          shortcut.handler = shortcutConfig;
        } else if (typeof shortcutConfig === "object") {
          shortcut = {
            ...shortcut,
            handler: shortcutConfig.handler
          };
        }
        if (!shortcut.handler) {
          console.trace("[Shortcut] Invalid value");
          return null;
        }
        let enabled = true;
        if (!shortcutConfig.usingInput) {
          enabled = !usingInput.value;
        } else if (typeof shortcutConfig.usingInput === "string") {
          enabled = usingInput.value === shortcutConfig.usingInput;
        }
        shortcut.enabled = enabled;
        return shortcut;
      }).filter(Boolean);
    });
    return useEventListener$1("keydown", onKeyDown);
  }
  function isPlainObject(value) {
    if (value === null || typeof value !== "object") {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
      return false;
    }
    if (Symbol.iterator in value) {
      return false;
    }
    if (Symbol.toStringTag in value) {
      return Object.prototype.toString.call(value) === "[object Module]";
    }
    return true;
  }
  function _defu(baseObject, defaults, namespace = ".", merger) {
    if (!isPlainObject(defaults)) {
      return _defu(baseObject, {}, namespace, merger);
    }
    const object = Object.assign({}, defaults);
    for (const key in baseObject) {
      if (key === "__proto__" || key === "constructor") {
        continue;
      }
      const value = baseObject[key];
      if (value === null || value === void 0) {
        continue;
      }
      if (merger && merger(object, key, value, namespace)) {
        continue;
      }
      if (Array.isArray(value) && Array.isArray(object[key])) {
        object[key] = [
          ...value,
          ...object[key]
        ];
      } else if (isPlainObject(value) && isPlainObject(object[key])) {
        object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
      } else {
        object[key] = value;
      }
    }
    return object;
  }
  function createDefu(merger) {
    return (...arguments_) => arguments_.reduce((p2, c2) => _defu(p2, c2, "", merger), {});
  }
  defu = createDefu();
  function defineLocale(options) {
    return defu(options, {
      dir: "ltr"
    });
  }
  function serialize(o) {
    return typeof o == "string" ? `'${o}'` : new c().serialize(o);
  }
  const c = function() {
    var _t2;
    class o {
      constructor() {
        __privateAdd(this, _t2, /* @__PURE__ */ new Map());
      }
      compare(t, r) {
        const e = typeof t, n = typeof r;
        return e === "string" && n === "string" ? t.localeCompare(r) : e === "number" && n === "number" ? t - r : String.prototype.localeCompare.call(this.serialize(t, true), this.serialize(r, true));
      }
      serialize(t, r) {
        if (t === null) return "null";
        switch (typeof t) {
          case "string":
            return r ? t : `'${t}'`;
          case "bigint":
            return `${t}n`;
          case "object":
            return this.$object(t);
          case "function":
            return this.$function(t);
        }
        return String(t);
      }
      serializeObject(t) {
        const r = Object.prototype.toString.call(t);
        if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), t);
        const e = t.constructor, n = e === Object || e === void 0 ? "" : e.name;
        if (n !== "" && globalThis[n] === e) return this.serializeBuiltInType(n, t);
        if (typeof t.toJSON == "function") {
          const i2 = t.toJSON();
          return n + (i2 !== null && typeof i2 == "object" ? this.$object(i2) : `(${this.serialize(i2)})`);
        }
        return this.serializeObjectEntries(n, Object.entries(t));
      }
      serializeBuiltInType(t, r) {
        const e = this["$" + t];
        if (e) return e.call(this, r);
        if (typeof (r == null ? void 0 : r.entries) == "function") return this.serializeObjectEntries(t, r.entries());
        throw new Error(`Cannot serialize ${t}`);
      }
      serializeObjectEntries(t, r) {
        const e = Array.from(r).sort((i2, a2) => this.compare(i2[0], a2[0]));
        let n = `${t}{`;
        for (let i2 = 0; i2 < e.length; i2++) {
          const [a2, l2] = e[i2];
          n += `${this.serialize(a2, true)}:${this.serialize(l2)}`, i2 < e.length - 1 && (n += ",");
        }
        return n + "}";
      }
      $object(t) {
        let r = __privateGet(this, _t2).get(t);
        return r === void 0 && (__privateGet(this, _t2).set(t, `#${__privateGet(this, _t2).size}`), r = this.serializeObject(t), __privateGet(this, _t2).set(t, r)), r;
      }
      $function(t) {
        const r = Function.prototype.toString.call(t);
        return r.slice(-15) === "[native code] }" ? `${t.name || ""}()[native]` : `${t.name}(${t.length})${r.replace(/\s*\n\s*/g, "")}`;
      }
      $Array(t) {
        let r = "[";
        for (let e = 0; e < t.length; e++) r += this.serialize(t[e]), e < t.length - 1 && (r += ",");
        return r + "]";
      }
      $Date(t) {
        try {
          return `Date(${t.toISOString()})`;
        } catch {
          return "Date(null)";
        }
      }
      $ArrayBuffer(t) {
        return `ArrayBuffer[${new Uint8Array(t).join(",")}]`;
      }
      $Set(t) {
        return `Set${this.$Array(Array.from(t).sort((r, e) => this.compare(r, e)))}`;
      }
      $Map(t) {
        return this.serializeObjectEntries("Map", t.entries());
      }
    }
    _t2 = new WeakMap();
    for (const s of [
      "Error",
      "RegExp",
      "URL"
    ]) o.prototype["$" + s] = function(t) {
      return `${s}(${t})`;
    };
    for (const s of [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array"
    ]) o.prototype["$" + s] = function(t) {
      return `${s}[${t.join(",")}]`;
    };
    for (const s of [
      "BigInt64Array",
      "BigUint64Array"
    ]) o.prototype["$" + s] = function(t) {
      return `${s}[${t.join("n,")}${t.length > 0 ? "n" : ""}]`;
    };
    return o;
  }();
  function isEqual(object1, object2) {
    if (object1 === object2) {
      return true;
    }
    if (serialize(object1) === serialize(object2)) {
      return true;
    }
    return false;
  }
  function diff(obj1, obj2) {
    const h1 = _toHashedObject(obj1);
    const h2 = _toHashedObject(obj2);
    return _diff(h1, h2);
  }
  function _diff(h1, h2) {
    var _a2, _b2;
    const diffs = [];
    const allProps = /* @__PURE__ */ new Set([
      ...Object.keys(h1.props || {}),
      ...Object.keys(h2.props || {})
    ]);
    if (h1.props && h2.props) {
      for (const prop of allProps) {
        const p1 = h1.props[prop];
        const p2 = h2.props[prop];
        if (p1 && p2) {
          diffs.push(..._diff((_a2 = h1.props) == null ? void 0 : _a2[prop], (_b2 = h2.props) == null ? void 0 : _b2[prop]));
        } else if (p1 || p2) {
          diffs.push(new DiffEntry((p2 || p1).key, p1 ? "removed" : "added", p2, p1));
        }
      }
    }
    if (allProps.size === 0 && h1.hash !== h2.hash) {
      diffs.push(new DiffEntry((h2 || h1).key, "changed", h2, h1));
    }
    return diffs;
  }
  function _toHashedObject(obj, key = "") {
    if (obj && typeof obj !== "object") {
      return new DiffHashedObject(key, obj, serialize(obj));
    }
    const props = {};
    const hashes = [];
    for (const _key in obj) {
      props[_key] = _toHashedObject(obj[_key], key ? `${key}.${_key}` : _key);
      hashes.push(props[_key].hash);
    }
    return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
  }
  class DiffEntry {
    constructor(key, type, newValue, oldValue) {
      this.key = key;
      this.type = type;
      this.newValue = newValue;
      this.oldValue = oldValue;
    }
    toString() {
      return this.toJSON();
    }
    toJSON() {
      var _a2;
      switch (this.type) {
        case "added": {
          return `Added   \`${this.key}\``;
        }
        case "removed": {
          return `Removed \`${this.key}\``;
        }
        case "changed": {
          return `Changed \`${this.key}\` from \`${((_a2 = this.oldValue) == null ? void 0 : _a2.toString()) || "-"}\` to \`${this.newValue.toString()}\``;
        }
      }
    }
  }
  class DiffHashedObject {
    constructor(key, value, hash, props) {
      this.key = key;
      this.value = value;
      this.hash = hash;
      this.props = props;
    }
    toString() {
      if (this.props) {
        return `{${Object.keys(this.props).join(",")}}`;
      } else {
        return JSON.stringify(this.value);
      }
    }
    toJSON() {
      const k = this.key || ".";
      if (this.props) {
        return `${k}({${Object.keys(this.props).join(",")}})`;
      }
      return `${k}(${this.value})`;
    }
  }
  function omit(data, keys2) {
    const result = {
      ...data
    };
    for (const key of keys2) {
      delete result[key];
    }
    return result;
  }
  get = function(object, path, defaultValue) {
    if (typeof path === "string") {
      path = path.split(".").map((key) => {
        const numKey = Number(key);
        return Number.isNaN(numKey) ? key : numKey;
      });
    }
    let result = object;
    for (const key of path) {
      if (result === void 0 || result === null) {
        return defaultValue;
      }
      result = result[key];
    }
    return result !== void 0 ? result : defaultValue;
  };
  function looseToNumber(val) {
    const n = Number.parseFloat(val);
    return Number.isNaN(n) ? val : n;
  }
  function isArrayOfArray(item) {
    return Array.isArray(item[0]);
  }
  function buildTranslator(locale) {
    return (path, option) => translate(path, option, unref(locale));
  }
  function translate(path, option, locale) {
    const prop = get(locale, `messages.${path}`, path);
    return prop.replace(/\{(\w+)\}/g, (_2, key) => `${(option == null ? void 0 : option[key]) ?? `{${key}}`}`);
  }
  function buildLocaleContext(locale) {
    const lang = computed(() => unref(locale).name);
    const code = computed(() => unref(locale).code);
    const dir = computed(() => unref(locale).dir);
    const localeRef = isRef(locale) ? locale : ref(locale);
    return {
      lang,
      code,
      dir,
      locale: localeRef,
      t: buildTranslator(locale)
    };
  }
  const en$1 = defineLocale({
    name: "English",
    code: "en",
    messages: {
      inputMenu: {
        noMatch: "No matching data",
        noData: "No data",
        create: 'Create "{label}"'
      },
      calendar: {
        prevYear: "Previous year",
        nextYear: "Next year",
        prevMonth: "Previous month",
        nextMonth: "Next month"
      },
      inputNumber: {
        increment: "Increment",
        decrement: "Decrement"
      },
      commandPalette: {
        placeholder: "Type a command or search...",
        noMatch: "No matching data",
        noData: "No data",
        close: "Close"
      },
      selectMenu: {
        noMatch: "No matching data",
        noData: "No data",
        create: 'Create "{label}"',
        search: "Search..."
      },
      toast: {
        close: "Close"
      },
      carousel: {
        prev: "Prev",
        next: "Next",
        goto: "Go to slide {slide}"
      },
      modal: {
        close: "Close"
      },
      slideover: {
        close: "Close"
      },
      alert: {
        close: "Close"
      },
      table: {
        noData: "No data"
      }
    }
  });
  const localeContextInjectionKey = Symbol.for("nuxt-ui.locale-context");
  const _useLocale = (localeOverrides) => {
    const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
    return buildLocaleContext(computed(() => locale.value || en$1));
  };
  const useLocale = createSharedComposable$1(_useLocale);
  const useColorMode = () => {
    if (!_appConfig.colorMode) {
      return {
        forced: true
      };
    }
    const { store, system } = useColorMode$1();
    return {
      get preference() {
        return store.value === "auto" ? "system" : store.value;
      },
      set preference(value) {
        store.value = value === "system" ? "auto" : value;
      },
      get value() {
        return store.value === "auto" ? system.value : store.value;
      },
      forced: false
    };
  };
  useAppConfig$1 = () => _appConfig;
  const useCookie = (_name, _options = {}) => {
    const value = ref(null);
    return {
      value,
      get: () => value.value,
      set: () => {
      },
      update: () => {
      },
      refresh: () => Promise.resolve(value.value),
      remove: () => {
      }
    };
  };
  const state = {};
  const useState = (key, init2) => {
    if (state[key]) {
      return state[key];
    }
    const value = ref(init2());
    state[key] = value;
    return value;
  };
  const hooks = createHooks();
  function useNuxtApp() {
    return {
      isHydrating: true,
      payload: {
        serverRendered: false
      },
      hooks,
      hook: hooks.hook
    };
  }
  function useRuntimeHook(name, fn) {
    const nuxtApp = useNuxtApp();
    const unregister = nuxtApp.hook(name, fn);
    onScopeDispose(unregister);
  }
  function defineNuxtPlugin(plugin) {
    return {
      install(app2) {
        app2.runWithContext(() => plugin({
          vueApp: app2
        }));
      }
    };
  }
  const shades = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    950
  ];
  function getColor(color, shade) {
    if (color in l$1 && typeof l$1[color] === "object" && shade in l$1[color]) {
      return l$1[color][shade];
    }
    return "";
  }
  function generateShades(key, value) {
    return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--color-${value === "neutral" ? "old-neutral" : value}-${shade}, ${getColor(value, shade)});`).join("\n  ")}`;
  }
  function generateColor(key, shade) {
    return `--ui-${key}: var(--ui-color-${key}-${shade});`;
  }
  const _47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47plugins_47colors_46js = defineNuxtPlugin(() => {
    const appConfig2 = useAppConfig$1();
    const nuxtApp = useNuxtApp();
    const root2 = computed(() => {
      const { neutral, ...colors2 } = appConfig2.ui.colors;
      return `@layer base {
  :root {
  ${Object.entries(appConfig2.ui.colors).map(([key, value]) => generateShades(key, value)).join("\n  ")}
  }
  :root, .light {
  ${Object.keys(colors2).map((key) => generateColor(key, 500)).join("\n  ")}
  }
  .dark {
  ${Object.keys(colors2).map((key) => generateColor(key, 400)).join("\n  ")}
  }
}`;
    });
    const headData = {
      style: [
        {
          innerHTML: () => root2.value,
          tagPriority: -2,
          id: "nuxt-ui-colors"
        }
      ]
    };
    if (nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
      const style = document.createElement("style");
      style.innerHTML = root2.value;
      style.setAttribute("data-nuxt-ui-colors", "");
      document.head.appendChild(style);
      headData.script = [
        {
          innerHTML: "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"
        }
      ];
    }
    useHead(headData);
  });
  const _47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47vue_47plugins_47color_45mode_46js = {
    install() {
      useDark();
    }
  };
  const ui = {
    install(app2) {
      app2.use(_47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47vue_47plugins_47head_46js);
      app2.use(_47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47plugins_47colors_46js);
      app2.use(_47home_47runner_47work_47windpress_47windpress_47node_modules_47_46pnpm_47_64nuxt_43ui_643_460_462__64babel_43parser_647_4627_460_axios_641_468_464_embla_45carousel_648_466_460_encoding_640_461_4613_id_44c9ba2ea234eb099a72a01b1816c3b4_47node_modules_47_64nuxt_47ui_47dist_47runtime_47vue_47plugins_47color_45mode_46js);
    }
  };
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread2$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n2 = true;
    var _d2 = false;
    var _e3 = void 0;
    try {
      for (var _i2 = arr[Symbol.iterator](), _s2; !(_n2 = (_s2 = _i2.next()).done); _n2 = true) {
        _arr.push(_s2.value);
        if (i2 && _arr.length === i2) break;
      }
    } catch (err) {
      _d2 = true;
      _e3 = err;
    } finally {
      try {
        if (!_n2 && _i2["return"] != null) _i2["return"]();
      } finally {
        if (_d2) throw _e3;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function compose$1() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function(x2) {
      return fns.reduceRight(function(y2, f) {
        return f(y2);
      }, x2);
    };
  }
  function curry$1(fn) {
    return function curried() {
      var _this = this;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return args.length >= fn.length ? fn.apply(this, args) : function() {
        for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          nextArgs[_key3] = arguments[_key3];
        }
        return curried.apply(_this, [].concat(args, nextArgs));
      };
    };
  }
  function isObject$2(value) {
    return {}.toString.call(value).includes("Object");
  }
  function isEmpty(obj) {
    return !Object.keys(obj).length;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function hasOwnProperty$2(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  function validateChanges(initial, changes) {
    if (!isObject$2(changes)) errorHandler$1("changeType");
    if (Object.keys(changes).some(function(field) {
      return !hasOwnProperty$2(initial, field);
    })) errorHandler$1("changeField");
    return changes;
  }
  function validateSelector(selector) {
    if (!isFunction(selector)) errorHandler$1("selectorType");
  }
  function validateHandler(handler) {
    if (!(isFunction(handler) || isObject$2(handler))) errorHandler$1("handlerType");
    if (isObject$2(handler) && Object.values(handler).some(function(_handler) {
      return !isFunction(_handler);
    })) errorHandler$1("handlersType");
  }
  function validateInitial(initial) {
    if (!initial) errorHandler$1("initialIsRequired");
    if (!isObject$2(initial)) errorHandler$1("initialType");
    if (isEmpty(initial)) errorHandler$1("initialContent");
  }
  function throwError$1(errorMessages2, type) {
    throw new Error(errorMessages2[type] || errorMessages2["default"]);
  }
  var errorMessages$1 = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    "default": "an unknown error accured in `state-local` package"
  };
  var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
  var validators$1 = {
    changes: validateChanges,
    selector: validateSelector,
    handler: validateHandler,
    initial: validateInitial
  };
  function create(initial) {
    var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    validators$1.initial(initial);
    validators$1.handler(handler);
    var state2 = {
      current: initial
    };
    var didUpdate = curry$1(didStateUpdate)(state2, handler);
    var update = curry$1(updateState)(state2);
    var validate = curry$1(validators$1.changes)(initial);
    var getChanges = curry$1(extractChanges)(state2);
    function getState2() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state3) {
        return state3;
      };
      validators$1.selector(selector);
      return selector(state2.current);
    }
    function setState2(causedChanges) {
      compose$1(didUpdate, update, validate, getChanges)(causedChanges);
    }
    return [
      getState2,
      setState2
    ];
  }
  function extractChanges(state2, causedChanges) {
    return isFunction(causedChanges) ? causedChanges(state2.current) : causedChanges;
  }
  function updateState(state2, changes) {
    state2.current = _objectSpread2(_objectSpread2({}, state2.current), changes);
    return changes;
  }
  function didStateUpdate(state2, handler, changes) {
    isFunction(handler) ? handler(state2.current) : Object.keys(changes).forEach(function(field) {
      var _handler$field;
      return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state2.current[field]);
    });
    return changes;
  }
  var index = {
    create
  };
  var config$1 = {
    paths: {
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
  };
  function curry(fn) {
    return function curried() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return args.length >= fn.length ? fn.apply(this, args) : function() {
        for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          nextArgs[_key2] = arguments[_key2];
        }
        return curried.apply(_this, [].concat(args, nextArgs));
      };
    };
  }
  function isObject$1(value) {
    return {}.toString.call(value).includes("Object");
  }
  function validateConfig(config2) {
    if (!config2) errorHandler("configIsRequired");
    if (!isObject$1(config2)) errorHandler("configType");
    if (config2.urls) {
      informAboutDeprecation();
      return {
        paths: {
          vs: config2.urls.monacoBase
        }
      };
    }
    return config2;
  }
  function informAboutDeprecation() {
    console.warn(errorMessages.deprecation);
  }
  function throwError(errorMessages2, type) {
    throw new Error(errorMessages2[type] || errorMessages2["default"]);
  }
  var errorMessages = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    "default": "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
  };
  var errorHandler = curry(throwError)(errorMessages);
  var validators = {
    config: validateConfig
  };
  var compose = function compose2() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function(x2) {
      return fns.reduceRight(function(y2, f) {
        return f(y2);
      }, x2);
    };
  };
  function merge(target, source) {
    Object.keys(source).forEach(function(key) {
      if (source[key] instanceof Object) {
        if (target[key]) {
          Object.assign(source[key], merge(target[key], source[key]));
        }
      }
    });
    return _objectSpread2$1(_objectSpread2$1({}, target), source);
  }
  var CANCELATION_MESSAGE = {
    type: "cancelation",
    msg: "operation is manually canceled"
  };
  function makeCancelable(promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function(resolve, reject) {
      promise.then(function(val) {
        return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
      });
      promise["catch"](reject);
    });
    return wrappedPromise.cancel = function() {
      return hasCanceled_ = true;
    }, wrappedPromise;
  }
  var _state$create = index.create({
    config: config$1,
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }), _state$create2 = _slicedToArray(_state$create, 2), getState = _state$create2[0], setState = _state$create2[1];
  function config(globalConfig) {
    var _validators$config = validators.config(globalConfig), monaco = _validators$config.monaco, config2 = _objectWithoutProperties(_validators$config, [
      "monaco"
    ]);
    setState(function(state2) {
      return {
        config: merge(state2.config, config2),
        monaco
      };
    });
  }
  function init() {
    var state2 = getState(function(_ref) {
      var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
      return {
        monaco,
        isInitialized,
        resolve
      };
    });
    if (!state2.isInitialized) {
      setState({
        isInitialized: true
      });
      if (state2.monaco) {
        state2.resolve(state2.monaco);
        return makeCancelable(wrapperPromise);
      }
      if (window.monaco && window.monaco.editor) {
        storeMonacoInstance(window.monaco);
        state2.resolve(window.monaco);
        return makeCancelable(wrapperPromise);
      }
      compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    }
    return makeCancelable(wrapperPromise);
  }
  function injectScripts(script) {
    return document.body.appendChild(script);
  }
  function createScript(src) {
    var script = document.createElement("script");
    return src && (script.src = src), script;
  }
  function getMonacoLoaderScript(configureLoader2) {
    var state2 = getState(function(_ref2) {
      var config2 = _ref2.config, reject = _ref2.reject;
      return {
        config: config2,
        reject
      };
    });
    var loaderScript = createScript("".concat(state2.config.paths.vs, "/loader.js"));
    loaderScript.onload = function() {
      return configureLoader2();
    };
    loaderScript.onerror = state2.reject;
    return loaderScript;
  }
  function configureLoader() {
    var state2 = getState(function(_ref3) {
      var config2 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
      return {
        config: config2,
        resolve,
        reject
      };
    });
    var require2 = window.require;
    require2.config(state2.config);
    require2([
      "vs/editor/editor.main"
    ], function(monaco) {
      storeMonacoInstance(monaco);
      state2.resolve(monaco);
    }, function(error) {
      state2.reject(error);
    });
  }
  function storeMonacoInstance(monaco) {
    if (!getState().monaco) {
      setState({
        monaco
      });
    }
  }
  function __getMonacoInstance() {
    return getState(function(_ref4) {
      var monaco = _ref4.monaco;
      return monaco;
    });
  }
  var wrapperPromise = new Promise(function(resolve, reject) {
    return setState({
      resolve,
      reject
    });
  });
  loader = {
    config,
    init,
    __getMonacoInstance
  };
  var __defProp$2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;
  var __spreadValues$2 = (a2, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a2, prop, b[prop]);
    if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a2, prop, b[prop]);
    }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  const styles = {
    wrapper: {
      display: "flex",
      position: "relative",
      textAlign: "initial"
    },
    fullWidth: {
      width: "100%"
    },
    hide: {
      display: "none"
    }
  };
  function useContainer(props, isEditorReady) {
    const wrapperStyle = computed(() => {
      const { width, height } = props;
      return __spreadProps(__spreadValues$2({}, styles.wrapper), {
        width,
        height
      });
    });
    const containerStyle = computed(() => {
      return __spreadValues$2(__spreadValues$2({}, styles.fullWidth), !isEditorReady.value && styles.hide);
    });
    return {
      wrapperStyle,
      containerStyle
    };
  }
  function useMonaco() {
    const monacoRef = shallowRef(loader.__getMonacoInstance());
    const isLoadFailed = ref(false);
    let promise;
    onMounted(() => {
      if (monacoRef.value) return;
      promise = loader.init();
      promise.then((monacoInstance) => monacoRef.value = monacoInstance).catch((error) => {
        if ((error == null ? void 0 : error.type) !== "cancelation") {
          isLoadFailed.value = true;
          console.error("Monaco initialization error:", error);
        }
      });
    });
    const unload = () => promise == null ? void 0 : promise.cancel();
    return {
      monacoRef,
      unload,
      isLoadFailed
    };
  }
  function slotHelper(slot) {
    return typeof slot == "function" ? slot() : slot;
  }
  function isUndefined(v2) {
    return v2 === void 0;
  }
  function getOrCreateModel(monaco, value, language, path) {
    return getModel(monaco, path) || createModel(monaco, value, language, path);
  }
  function getModel(monaco, path) {
    return monaco.editor.getModel(createModelUri(monaco, path));
  }
  function createModel(monaco, value, language, path) {
    return monaco.editor.createModel(value, language, path ? createModelUri(monaco, path) : void 0);
  }
  function createModelUri(monaco, path) {
    return monaco.Uri.parse(path);
  }
  var __defProp$1 = Object.defineProperty;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;
  var __spreadValues$1 = (a2, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a2, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a2, prop, b[prop]);
    }
    return a2;
  };
  const loadingStyle$1 = {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  };
  var VueMonacoEditor = defineComponent({
    name: "VueMonacoEditor",
    model: {
      prop: "value",
      event: "update:value"
    },
    props: {
      defaultValue: String,
      defaultPath: String,
      defaultLanguage: String,
      value: String,
      language: String,
      path: String,
      theme: {
        type: String,
        default: "vs"
      },
      line: Number,
      options: {
        type: Object,
        default: () => ({})
      },
      overrideServices: {
        type: Object,
        default: () => ({})
      },
      saveViewState: {
        type: Boolean,
        default: true
      },
      width: {
        type: [
          Number,
          String
        ],
        default: "100%"
      },
      height: {
        type: [
          Number,
          String
        ],
        default: "100%"
      },
      className: String
    },
    emits: [
      "update:value",
      "beforeMount",
      "mount",
      "change",
      "validate"
    ],
    setup(props, ctx) {
      const viewStates = /* @__PURE__ */ new Map();
      const containerRef = shallowRef(null);
      const { monacoRef, unload, isLoadFailed } = useMonaco();
      const { editorRef } = useEditor(ctx, props, monacoRef, containerRef);
      const { disposeValidator } = useValidator(ctx, props, monacoRef, editorRef);
      const isEditorReady = computed(() => !!monacoRef.value && !!editorRef.value);
      const { wrapperStyle, containerStyle } = useContainer(props, isEditorReady);
      onUnmounted(() => {
        var _a2, _b2;
        (_a2 = disposeValidator.value) == null ? void 0 : _a2.call(disposeValidator);
        if (editorRef.value) {
          (_b2 = editorRef.value.getModel()) == null ? void 0 : _b2.dispose();
          editorRef.value.dispose();
        } else {
          unload();
        }
      });
      watch([
        () => props.path,
        () => props.value,
        () => props.language,
        () => props.line
      ], ([newPath, newValue, newLanguage, newLine], [oldPath, oldValue, oldLanguage, oldLine]) => {
        if (!isEditorReady.value) {
          return;
        }
        if (newPath !== oldPath) {
          const newModel = getOrCreateModel(monacoRef.value, newValue || props.defaultValue || "", newLanguage || props.defaultLanguage || "", newPath || props.defaultPath || "");
          props.saveViewState && viewStates.set(oldPath, editorRef.value.saveViewState());
          editorRef.value.setModel(newModel);
          props.saveViewState && editorRef.value.restoreViewState(viewStates.get(newPath));
          if (!isUndefined(newLine)) {
            editorRef.value.revealLine(newLine);
          }
          return;
        }
        if (editorRef.value.getValue() !== newValue) {
          editorRef.value.setValue(newValue);
        }
        if (newLanguage !== oldLanguage) {
          monacoRef.value.editor.setModelLanguage(editorRef.value.getModel(), newLanguage);
        }
        if (!isUndefined(newLine) && newLine !== oldLine) {
          editorRef.value.revealLine(newLine);
        }
      });
      watch(() => props.options, (options) => editorRef.value && editorRef.value.updateOptions(options), {
        deep: true
      });
      watch(() => props.theme, (theme2) => monacoRef.value && monacoRef.value.editor.setTheme(theme2));
      return {
        containerRef,
        isEditorReady,
        isLoadFailed,
        wrapperStyle,
        containerStyle
      };
    },
    render() {
      const { $slots, isEditorReady, isLoadFailed, wrapperStyle, containerStyle, className } = this;
      return h("div", {
        style: wrapperStyle
      }, [
        !isEditorReady && h("div", {
          style: loadingStyle$1
        }, isLoadFailed ? $slots.failure ? slotHelper($slots.failure) : "load failed" : $slots.default ? slotHelper($slots.default) : "loading..."),
        h("div", {
          ref: "containerRef",
          key: "monaco_editor_container",
          style: containerStyle,
          class: className
        })
      ]);
    }
  });
  function useEditor({ emit }, props, monacoRef, containerRef) {
    const editorRef = shallowRef(null);
    onMounted(() => {
      const stop = watch(monacoRef, () => {
        if (containerRef.value && monacoRef.value) {
          nextTick(() => stop());
          createEditor();
        }
      }, {
        immediate: true
      });
    });
    function createEditor() {
      var _a2;
      if (!containerRef.value || !monacoRef.value || editorRef.value) {
        return;
      }
      emit("beforeMount", monacoRef.value);
      const autoCreatedModelPath = props.path || props.defaultPath;
      const defaultModel = getOrCreateModel(monacoRef.value, props.value || props.defaultValue || "", props.language || props.defaultLanguage || "", autoCreatedModelPath || "");
      editorRef.value = monacoRef.value.editor.create(containerRef.value, __spreadValues$1({
        model: defaultModel,
        theme: props.theme,
        automaticLayout: true,
        autoIndent: "brackets",
        formatOnPaste: true,
        formatOnType: true
      }, props.options), props.overrideServices);
      (_a2 = editorRef.value) == null ? void 0 : _a2.onDidChangeModelContent((event) => {
        const value = editorRef.value.getValue();
        if (value !== props.value) {
          emit("update:value", value);
          emit("change", value, event);
        }
      });
      if (editorRef.value && !isUndefined(props.line)) {
        editorRef.value.revealLine(props.line);
      }
      emit("mount", editorRef.value, monacoRef.value);
    }
    return {
      editorRef
    };
  }
  function useValidator({ emit }, props, monacoRef, editorRef) {
    const disposeValidator = ref(null);
    const stop = watch([
      monacoRef,
      editorRef
    ], () => {
      if (monacoRef.value && editorRef.value) {
        nextTick(() => stop());
        const changeMarkersListener = monacoRef.value.editor.onDidChangeMarkers((uris) => {
          var _a2, _b2;
          const editorUri = (_b2 = (_a2 = editorRef.value) == null ? void 0 : _a2.getModel()) == null ? void 0 : _b2.uri;
          if (editorUri) {
            const currentEditorHasMarkerChanges = uris.find((uri) => uri.path === editorUri.path);
            if (currentEditorHasMarkerChanges) {
              const markers = monacoRef.value.editor.getModelMarkers({
                resource: editorUri
              });
              emit("validate", markers);
            }
          }
        });
        disposeValidator.value = () => changeMarkersListener == null ? void 0 : changeMarkersListener.dispose();
      }
    });
    return {
      disposeValidator
    };
  }
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a2, prop, b[prop]);
    }
    return a2;
  };
  const loadingStyle = {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  };
  var VueMonacoDiffEditor = defineComponent({
    name: "VueMonacoDiffEditor",
    props: {
      original: String,
      modified: String,
      language: String,
      originalLanguage: String,
      modifiedLanguage: String,
      originalModelPath: String,
      modifiedModelPath: String,
      theme: {
        type: String,
        default: "vs"
      },
      options: {
        type: Object,
        default: () => ({})
      },
      width: {
        type: [
          Number,
          String
        ],
        default: "100%"
      },
      height: {
        type: [
          Number,
          String
        ],
        default: "100%"
      },
      className: String
    },
    setup(props, ctx) {
      const containerRef = shallowRef(null);
      const { monacoRef, unload, isLoadFailed } = useMonaco();
      const { diffEditorRef } = useDiffEditor(ctx, props, monacoRef, containerRef);
      const isDiffEditorReady = computed(() => !!monacoRef.value && !!diffEditorRef.value);
      const { wrapperStyle, containerStyle } = useContainer(props, isDiffEditorReady);
      onUnmounted(() => {
        var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
        !monacoRef.value && unload();
        const models = (_b2 = (_a2 = diffEditorRef.value) == null ? void 0 : _a2.getModel) == null ? void 0 : _b2.call(_a2);
        (_d2 = (_c2 = models == null ? void 0 : models.original) == null ? void 0 : _c2.dispose) == null ? void 0 : _d2.call(_c2);
        (_f2 = (_e3 = models == null ? void 0 : models.modified) == null ? void 0 : _e3.dispose) == null ? void 0 : _f2.call(_e3);
        (_h2 = (_g2 = diffEditorRef.value) == null ? void 0 : _g2.dispose) == null ? void 0 : _h2.call(_g2);
      });
      watch([
        () => props.originalModelPath,
        () => props.original,
        () => props.originalLanguage,
        () => props.language
      ], ([newOriginalModelPath, newOriginal, newOriginalLanguage, newLanguage], [oldOriginalModelPath, oldOriginal, oldOriginalLanguage, oldLanguage]) => {
        if (!isDiffEditorReady.value) {
          return;
        }
        const originalEditor = diffEditorRef.value.getOriginalEditor();
        if (newOriginalModelPath !== oldOriginalModelPath) {
          const newOriginModel = getOrCreateModel(monacoRef.value, newOriginal || "", newOriginalLanguage || newLanguage || "text", newOriginalModelPath || "");
          originalEditor.setModel(newOriginModel);
          return;
        }
        if (newOriginal !== originalEditor.getValue()) {
          originalEditor.setValue(newOriginal || "");
        }
        if (newOriginalLanguage !== oldOriginalLanguage || newLanguage !== oldLanguage) {
          monacoRef.value.editor.setModelLanguage(diffEditorRef.value.getModel().original, newOriginalLanguage || newLanguage || "text");
        }
      });
      watch([
        () => props.modifiedModelPath,
        () => props.modified,
        () => props.modifiedLanguage,
        () => props.language
      ], ([newModifiedModelPath, newModified, newModifiedLanguage, newLanguage], [oldModifiedModelPath, oldModified, oldModifiedLanguage, oldLanguage]) => {
        if (!isDiffEditorReady.value) {
          return;
        }
        const modifiedEditor = diffEditorRef.value.getModifiedEditor();
        if (oldModifiedModelPath !== newModifiedModelPath) {
          const newModifiedModel = getOrCreateModel(monacoRef.value, newModified || "", newModifiedLanguage || newLanguage || "text", newModifiedModelPath || "");
          modifiedEditor.setModel(newModifiedModel);
          return;
        }
        if (newModified !== modifiedEditor.getValue()) {
          const readOnlyCode = monacoRef.value.editor.EditorOption.readOnly;
          if (modifiedEditor.getOption(readOnlyCode)) {
            modifiedEditor.setValue(newModified || "");
          } else {
            modifiedEditor.executeEdits("", [
              {
                range: modifiedEditor.getModel().getFullModelRange(),
                text: newModified || "",
                forceMoveMarkers: true
              }
            ]);
            modifiedEditor.pushUndoStop();
          }
        }
        if (newModifiedLanguage !== oldModifiedLanguage || newLanguage !== oldLanguage) {
          monacoRef.value.editor.setModelLanguage(diffEditorRef.value.getModel().modified, newModifiedLanguage || newLanguage || "text");
        }
      });
      watch(() => props.theme, () => {
        var _a2;
        return (_a2 = monacoRef.value) == null ? void 0 : _a2.editor.setTheme(props.theme);
      });
      watch(() => props.options, () => {
        var _a2;
        return (_a2 = diffEditorRef.value) == null ? void 0 : _a2.updateOptions(props.options);
      }, {
        deep: true
      });
      return {
        containerRef,
        isDiffEditorReady,
        isLoadFailed,
        wrapperStyle,
        containerStyle
      };
    },
    render() {
      const { $slots, isDiffEditorReady, isLoadFailed, wrapperStyle, containerStyle, className } = this;
      return h("div", {
        style: wrapperStyle
      }, [
        !isDiffEditorReady && h("div", {
          style: loadingStyle
        }, isLoadFailed ? $slots.failure ? slotHelper($slots.failure) : "load failed" : $slots.default ? slotHelper($slots.default) : "loading..."),
        h("div", {
          ref: "containerRef",
          key: "monaco_diff_editor_container",
          style: containerStyle,
          class: className
        })
      ]);
    }
  });
  function useDiffEditor({ emit }, props, monacoRef, containerRef) {
    const diffEditorRef = shallowRef(null);
    onMounted(() => {
      const stop = watch(monacoRef, () => {
        if (containerRef.value && monacoRef.value) {
          nextTick(() => stop());
          createDiffEditor();
        }
      }, {
        immediate: true
      });
    });
    function createDiffEditor() {
      var _a2;
      if (!containerRef.value || !monacoRef.value || diffEditorRef.value) {
        return;
      }
      emit("beforeMount", monacoRef.value);
      diffEditorRef.value = monacoRef.value.editor.createDiffEditor(containerRef.value, __spreadValues({
        automaticLayout: true,
        autoIndent: "brackets",
        theme: props.theme,
        formatOnPaste: true,
        formatOnType: true
      }, props.options));
      const originalModel = getOrCreateModel(monacoRef.value, props.original || "", props.originalLanguage || props.language || "text", props.originalModelPath || "");
      const modifiedModel = getOrCreateModel(monacoRef.value, props.modified || "", props.modifiedLanguage || props.language || "text", props.modifiedModelPath || "");
      (_a2 = diffEditorRef.value) == null ? void 0 : _a2.setModel({
        original: originalModel,
        modified: modifiedModel
      });
      emit("mount", diffEditorRef.value, monacoRef.value);
    }
    return {
      diffEditorRef
    };
  }
  function install(app2, options) {
    if (options) {
      loader.config(options);
    }
    app2.component(VueMonacoEditor.name, VueMonacoEditor);
    app2.component(VueMonacoDiffEditor.name, VueMonacoDiffEditor);
  }
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement$1(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![
      "inline",
      "contents"
    ].includes(display);
  }
  function isTableElement(element) {
    return [
      "table",
      "td",
      "th"
    ].includes(getNodeName(element));
  }
  function isTopLayer(element) {
    return [
      ":popover-open",
      ":modal"
    ].some((selector) => {
      try {
        return element.matches(selector);
      } catch (e) {
        return false;
      }
    });
  }
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
    return [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective"
    ].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || [
      "transform",
      "translate",
      "scale",
      "rotate",
      "perspective",
      "filter"
    ].some((value) => (css.willChange || "").includes(value)) || [
      "paint",
      "layout",
      "strict",
      "content"
    ].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return [
      "html",
      "body",
      "#document"
    ].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }
  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement$1(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement$1(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement$1(element);
    if (!isHTMLElement$1(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x2 = ($ ? round(rect.width) : rect.width) / width;
    let y2 = ($ ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y2 || !Number.isFinite(y2)) {
      y2 = 1;
    }
    return {
      x: x2,
      y: y2
    };
  }
  const noOffsets = createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement$1(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y2 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y2 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y2 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y2
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
      ignoreScrollbarX = false;
    }
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : getWindowScrollBarX(documentElement, htmlRect));
    const y2 = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y: y2
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement$1(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y2 = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement$1(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y2 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [
        "absolute",
        "fixed"
      ].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
      ...elementClippingAncestors,
      rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y: y2,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle$1(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement$1(element) || getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement$1(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle$1(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a2, b) {
    return a2.x === b.x && a2.y === b.y && a2.width === b.width && a2.height === b.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root2 = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const { left, top, width, height } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root2.clientWidth - (left + width));
      const insetBottom = floor(root2.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          root: root2.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
    const referenceEl = unwrapElement$1(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
      ...referenceEl ? getOverflowAncestors(referenceEl) : [],
      ...getOverflowAncestors(floating)
    ] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const offset = offset$1;
  const shift = shift$1;
  const flip = flip$1;
  const size = size$1;
  const hide = hide$1;
  const arrow$1 = arrow$2;
  const limitShift = limitShift$1;
  const computePosition = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  function isComponentPublicInstance(target) {
    return target != null && typeof target === "object" && "$el" in target;
  }
  function unwrapElement(target) {
    if (isComponentPublicInstance(target)) {
      const element = target.$el;
      return isNode(element) && getNodeName(element) === "#comment" ? null : element;
    }
    return target;
  }
  function toValue$2(source) {
    return typeof source === "function" ? source() : unref(source);
  }
  function arrow(options) {
    return {
      name: "arrow",
      options,
      fn(args) {
        const element = unwrapElement(toValue$2(options.element));
        if (element == null) {
          return {};
        }
        return arrow$1({
          element,
          padding: options.padding
        }).fn(args);
      }
    };
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useFloating(reference, floating, options) {
    if (options === void 0) {
      options = {};
    }
    const whileElementsMountedOption = options.whileElementsMounted;
    const openOption = computed(() => {
      var _toValue;
      return (_toValue = toValue$2(options.open)) != null ? _toValue : true;
    });
    const middlewareOption = computed(() => toValue$2(options.middleware));
    const placementOption = computed(() => {
      var _toValue2;
      return (_toValue2 = toValue$2(options.placement)) != null ? _toValue2 : "bottom";
    });
    const strategyOption = computed(() => {
      var _toValue3;
      return (_toValue3 = toValue$2(options.strategy)) != null ? _toValue3 : "absolute";
    });
    const transformOption = computed(() => {
      var _toValue4;
      return (_toValue4 = toValue$2(options.transform)) != null ? _toValue4 : true;
    });
    const referenceElement = computed(() => unwrapElement(reference.value));
    const floatingElement = computed(() => unwrapElement(floating.value));
    const x2 = ref(0);
    const y2 = ref(0);
    const strategy = ref(strategyOption.value);
    const placement = ref(placementOption.value);
    const middlewareData = shallowRef({});
    const isPositioned = ref(false);
    const floatingStyles = computed(() => {
      const initialStyles = {
        position: strategy.value,
        left: "0",
        top: "0"
      };
      if (!floatingElement.value) {
        return initialStyles;
      }
      const xVal = roundByDPR(floatingElement.value, x2.value);
      const yVal = roundByDPR(floatingElement.value, y2.value);
      if (transformOption.value) {
        return {
          ...initialStyles,
          transform: "translate(" + xVal + "px, " + yVal + "px)",
          ...getDPR(floatingElement.value) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy.value,
        left: xVal + "px",
        top: yVal + "px"
      };
    });
    let whileElementsMountedCleanup;
    function update() {
      if (referenceElement.value == null || floatingElement.value == null) {
        return;
      }
      const open = openOption.value;
      computePosition(referenceElement.value, floatingElement.value, {
        middleware: middlewareOption.value,
        placement: placementOption.value,
        strategy: strategyOption.value
      }).then((position) => {
        x2.value = position.x;
        y2.value = position.y;
        strategy.value = position.strategy;
        placement.value = position.placement;
        middlewareData.value = position.middlewareData;
        isPositioned.value = open !== false;
      });
    }
    function cleanup() {
      if (typeof whileElementsMountedCleanup === "function") {
        whileElementsMountedCleanup();
        whileElementsMountedCleanup = void 0;
      }
    }
    function attach() {
      cleanup();
      if (whileElementsMountedOption === void 0) {
        update();
        return;
      }
      if (referenceElement.value != null && floatingElement.value != null) {
        whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
        return;
      }
    }
    function reset() {
      if (!openOption.value) {
        isPositioned.value = false;
      }
    }
    watch([
      middlewareOption,
      placementOption,
      strategyOption,
      openOption
    ], update, {
      flush: "sync"
    });
    watch([
      referenceElement,
      floatingElement
    ], attach, {
      flush: "sync"
    });
    watch(openOption, reset, {
      flush: "sync"
    });
    if (getCurrentScope()) {
      onScopeDispose(cleanup);
    }
    return {
      x: shallowReadonly(x2),
      y: shallowReadonly(y2),
      strategy: shallowReadonly(strategy),
      placement: shallowReadonly(placement),
      middlewareData: shallowReadonly(middlewareData),
      isPositioned: shallowReadonly(isPositioned),
      floatingStyles,
      update
    };
  }
  function renderSlotFragments(children) {
    if (!children) return [];
    return children.flatMap((child) => {
      if (child.type === Fragment) return renderSlotFragments(child.children);
      return [
        child
      ];
    });
  }
  const Slot = defineComponent({
    name: "PrimitiveSlot",
    inheritAttrs: false,
    setup(_2, { attrs, slots }) {
      return () => {
        var _a2, _b2;
        if (!slots.default) return null;
        const childrens = renderSlotFragments(slots.default());
        const firstNonCommentChildrenIndex = childrens.findIndex((child) => child.type !== Comment);
        if (firstNonCommentChildrenIndex === -1) return childrens;
        const firstNonCommentChildren = childrens[firstNonCommentChildrenIndex];
        (_a2 = firstNonCommentChildren.props) == null ? true : delete _a2.ref;
        const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
        if (attrs.class && ((_b2 = firstNonCommentChildren.props) == null ? void 0 : _b2.class)) delete firstNonCommentChildren.props.class;
        const cloned = cloneVNode(firstNonCommentChildren, mergedProps);
        for (const prop in mergedProps) {
          if (prop.startsWith("on")) {
            cloned.props || (cloned.props = {});
            cloned.props[prop] = mergedProps[prop];
          }
        }
        if (childrens.length === 1) return cloned;
        childrens[firstNonCommentChildrenIndex] = cloned;
        return childrens;
      };
    }
  });
  const SELF_CLOSING_TAGS = [
    "area",
    "img",
    "input"
  ];
  Primitive = defineComponent({
    name: "Primitive",
    inheritAttrs: false,
    props: {
      asChild: {
        type: Boolean,
        default: false
      },
      as: {
        type: [
          String,
          Object
        ],
        default: "div"
      }
    },
    setup(props, { attrs, slots }) {
      const asTag = props.asChild ? "template" : props.as;
      if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
      if (asTag !== "template") return () => h(props.as, attrs, {
        default: slots.default
      });
      return () => h(Slot, attrs, {
        default: slots.default
      });
    }
  });
  _sfc_main$1X = defineComponent({
    __name: "VisuallyHidden",
    props: {
      feature: {
        default: "focusable"
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "span"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-hidden": _ctx.feature === "focusable" ? "true" : void 0,
          "data-hidden": _ctx.feature === "fully-hidden" ? "" : void 0,
          tabindex: _ctx.feature === "fully-hidden" ? "-1" : void 0,
          style: {
            position: "absolute",
            border: 0,
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            clipPath: "inset(50%)",
            whiteSpace: "nowrap",
            wordWrap: "normal"
          }
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "aria-hidden",
          "data-hidden",
          "tabindex"
        ]);
      };
    }
  });
  function computedEager(fn, options) {
    var _a2;
    const result = shallowRef();
    watchEffect(() => {
      result.value = fn();
    }, {
      ...options,
      flush: (_a2 = void 0) != null ? _a2 : "sync"
    });
    return readonly(result);
  }
  function tryOnScopeDispose(fn) {
    if (getCurrentScope()) {
      onScopeDispose(fn);
      return true;
    }
    return false;
  }
  createEventHook = function() {
    const fns = /* @__PURE__ */ new Set();
    const off = (fn) => {
      fns.delete(fn);
    };
    const clear = () => {
      fns.clear();
    };
    const on = (fn) => {
      fns.add(fn);
      const offFn = () => off(fn);
      tryOnScopeDispose(offFn);
      return {
        off: offFn
      };
    };
    const trigger = (...args) => {
      return Promise.all(Array.from(fns).map((fn) => fn(...args)));
    };
    return {
      on,
      off,
      trigger,
      clear
    };
  };
  function createGlobalState(stateFactory) {
    let initialized = false;
    let state2;
    const scope = effectScope(true);
    return (...args) => {
      if (!initialized) {
        state2 = scope.run(() => stateFactory(...args));
        initialized = true;
      }
      return state2;
    };
  }
  function createSharedComposable(composable) {
    let subscribers = 0;
    let state2;
    let scope;
    const dispose = () => {
      subscribers -= 1;
      if (scope && subscribers <= 0) {
        scope.stop();
        state2 = void 0;
        scope = void 0;
      }
    };
    return (...args) => {
      subscribers += 1;
      if (!scope) {
        scope = effectScope(true);
        state2 = scope.run(() => composable(...args));
      }
      tryOnScopeDispose(dispose);
      return state2;
    };
  }
  function toReactive(objectRef) {
    if (!isRef(objectRef)) return reactive(objectRef);
    const proxy = new Proxy({}, {
      get(_2, p2, receiver) {
        return unref(Reflect.get(objectRef.value, p2, receiver));
      },
      set(_2, p2, value) {
        if (isRef(objectRef.value[p2]) && !isRef(value)) objectRef.value[p2].value = value;
        else objectRef.value[p2] = value;
        return true;
      },
      deleteProperty(_2, p2) {
        return Reflect.deleteProperty(objectRef.value, p2);
      },
      has(_2, p2) {
        return Reflect.has(objectRef.value, p2);
      },
      ownKeys() {
        return Object.keys(objectRef.value);
      },
      getOwnPropertyDescriptor() {
        return {
          enumerable: true,
          configurable: true
        };
      }
    });
    return reactive(proxy);
  }
  function reactiveComputed(fn) {
    return toReactive(computed(fn));
  }
  function reactiveOmit(obj, ...keys2) {
    const flatKeys = keys2.flat();
    const predicate = flatKeys[0];
    return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v2]) => !predicate(toValue$3(v2), k))) : Object.fromEntries(Object.entries(toRefs(obj)).filter((e) => !flatKeys.includes(e[0]))));
  }
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
  const isDef = (val) => typeof val !== "undefined";
  const toString = Object.prototype.toString;
  const isObject = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  const isIOS = getIsIOS();
  function getIsIOS() {
    var _a2, _b2;
    return isClient && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), {
          fn,
          thisArg: this,
          args
        })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  function debounceFilter(ms, options = {}) {
    let timer;
    let maxTimer;
    let lastRejector = noop;
    const _clearTimeout = (timer2) => {
      clearTimeout(timer2);
      lastRejector();
      lastRejector = noop;
    };
    let lastInvoker;
    const filter = (invoke) => {
      const duration = toValue$3(ms);
      const maxDuration = toValue$3(options.maxWait);
      if (timer) _clearTimeout(timer);
      if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
        if (maxTimer) {
          _clearTimeout(maxTimer);
          maxTimer = null;
        }
        return Promise.resolve(invoke());
      }
      return new Promise((resolve, reject) => {
        lastRejector = options.rejectOnCancel ? reject : resolve;
        lastInvoker = invoke;
        if (maxDuration && !maxTimer) {
          maxTimer = setTimeout(() => {
            if (timer) _clearTimeout(timer);
            maxTimer = null;
            resolve(lastInvoker());
          }, maxDuration);
        }
        timer = setTimeout(() => {
          if (maxTimer) _clearTimeout(maxTimer);
          maxTimer = null;
          resolve(invoke());
        }, duration);
      });
    };
    return filter;
  }
  function getLifeCycleTarget(target) {
    return getCurrentInstance();
  }
  function toArray(value) {
    return Array.isArray(value) ? value : [
      value
    ];
  }
  refAutoReset = function(defaultValue, afterMs = 1e4) {
    return customRef((track, trigger) => {
      let value = toValue$3(defaultValue);
      let timer;
      const resetAfter = () => setTimeout(() => {
        value = toValue$3(defaultValue);
        trigger();
      }, toValue$3(afterMs));
      tryOnScopeDispose(() => {
        clearTimeout(timer);
      });
      return {
        get() {
          track();
          return value;
        },
        set(newValue) {
          value = newValue;
          trigger();
          clearTimeout(timer);
          timer = resetAfter();
        }
      };
    });
  };
  function useDebounceFn(fn, ms = 200, options = {}) {
    return createFilterWrapper(debounceFilter(ms, options), fn);
  }
  const toValue$1 = toValue$3;
  function tryOnBeforeUnmount(fn, target) {
    const instance = getLifeCycleTarget();
    if (instance) onBeforeUnmount(fn, target);
  }
  useTimeoutFn = function(cb, interval, options = {}) {
    const { immediate = true, immediateCallback = false } = options;
    const isPending = shallowRef(false);
    let timer = null;
    function clear() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function stop() {
      isPending.value = false;
      clear();
    }
    function start(...args) {
      if (immediateCallback) cb();
      clear();
      isPending.value = true;
      timer = setTimeout(() => {
        isPending.value = false;
        timer = null;
        cb(...args);
      }, toValue$3(interval));
    }
    if (immediate) {
      isPending.value = true;
      if (isClient) start();
    }
    tryOnScopeDispose(stop);
    return {
      isPending: readonly(isPending),
      start,
      stop
    };
  };
  function useTimeout(interval = 1e3, options = {}) {
    const { controls: exposeControls = false, callback } = options;
    const controls = useTimeoutFn(callback != null ? callback : noop, interval, options);
    const ready = computed(() => !controls.isPending.value);
    if (exposeControls) {
      return {
        ready,
        ...controls
      };
    } else {
      return ready;
    }
  }
  function watchImmediate(source, cb, options) {
    return watch(source, cb, {
      ...options,
      immediate: true
    });
  }
  const defaultWindow = isClient ? window : void 0;
  function unrefElement(elRef) {
    var _a2;
    const plain = toValue$3(elRef);
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
  }
  useEventListener = function(...args) {
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options) => {
      el.addEventListener(event, listener, options);
      return () => el.removeEventListener(event, listener, options);
    };
    const firstParamTargets = computed(() => {
      const test = toArray(toValue$3(args[0])).filter((e) => e != null);
      return test.every((e) => typeof e !== "string") ? test : void 0;
    });
    const stopWatch = watchImmediate(() => {
      var _a2, _b2;
      return [
        (_b2 = (_a2 = firstParamTargets.value) == null ? void 0 : _a2.map((e) => unrefElement(e))) != null ? _b2 : [
          defaultWindow
        ].filter((e) => e != null),
        toArray(toValue$3(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        toValue$3(firstParamTargets.value ? args[3] : args[2])
      ];
    }, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length)) return;
      const optionsClone = isObject(raw_options) ? {
        ...raw_options
      } : raw_options;
      cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
    }, {
      flush: "post"
    });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(cleanup);
    return stop;
  };
  function useMounted() {
    const isMounted = shallowRef(false);
    const instance = getCurrentInstance();
    if (instance) {
      onMounted(() => {
        isMounted.value = true;
      }, instance);
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  function createKeyPredicate(keyFilter) {
    if (typeof keyFilter === "function") return keyFilter;
    else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
    else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
    return () => true;
  }
  function onKeyStroke(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
      key = args[0];
      handler = args[1];
      options = args[2];
    } else if (args.length === 2) {
      if (typeof args[1] === "object") {
        key = true;
        handler = args[0];
        options = args[1];
      } else {
        key = args[0];
        handler = args[1];
      }
    } else {
      key = true;
      handler = args[0];
    }
    const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e) => {
      if (e.repeat && toValue$3(dedupe)) return;
      if (predicate(e)) handler(e);
    };
    return useEventListener(target, eventName, listener, passive);
  }
  function useRafFn(fn, options = {}) {
    const { immediate = true, fpsLimit = void 0, window: window2 = defaultWindow, once = false } = options;
    const isActive = shallowRef(false);
    const intervalLimit = computed(() => {
      return fpsLimit ? 1e3 / toValue$3(fpsLimit) : null;
    });
    let previousFrameTimestamp = 0;
    let rafId = null;
    function loop(timestamp2) {
      if (!isActive.value || !window2) return;
      if (!previousFrameTimestamp) previousFrameTimestamp = timestamp2;
      const delta = timestamp2 - previousFrameTimestamp;
      if (intervalLimit.value && delta < intervalLimit.value) {
        rafId = window2.requestAnimationFrame(loop);
        return;
      }
      previousFrameTimestamp = timestamp2;
      fn({
        delta,
        timestamp: timestamp2
      });
      if (once) {
        isActive.value = false;
        rafId = null;
        return;
      }
      rafId = window2.requestAnimationFrame(loop);
    }
    function resume() {
      if (!isActive.value && window2) {
        isActive.value = true;
        previousFrameTimestamp = 0;
        rafId = window2.requestAnimationFrame(loop);
      }
    }
    function pause() {
      isActive.value = false;
      if (rafId != null && window2) {
        window2.cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
    if (immediate) resume();
    tryOnScopeDispose(pause);
    return {
      isActive: readonly(isActive),
      pause,
      resume
    };
  }
  function cloneFnJSON(source) {
    return JSON.parse(JSON.stringify(source));
  }
  function useResizeObserver(target, callback, options = {}) {
    const { window: window2 = defaultWindow, ...observerOptions } = options;
    let observer2;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer2) {
        observer2.disconnect();
        observer2 = void 0;
      }
    };
    const targets = computed(() => {
      const _targets = toValue$3(target);
      return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [
        unrefElement(_targets)
      ];
    });
    const stopWatch = watch(targets, (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer2 = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el) observer2.observe(_el, observerOptions);
        }
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  useVModel = function(props, key, emit, options = {}) {
    var _a2, _b2, _c2;
    const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
    const vm = getCurrentInstance();
    const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c2 = (_b2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b2.$emit) == null ? void 0 : _c2.bind(vm == null ? void 0 : vm.proxy));
    let event = eventName;
    if (!key) {
      key = "modelValue";
    }
    event = event || `update:${key.toString()}`;
    const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
    const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
    const triggerEmit = (value) => {
      if (shouldEmit) {
        if (shouldEmit(value)) _emit(event, value);
      } else {
        _emit(event, value);
      }
    };
    if (passive) {
      const initialValue = getValue2();
      const proxy = ref(initialValue);
      let isUpdating = false;
      watch(() => props[key], (v2) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v2);
          nextTick(() => isUpdating = false);
        }
      });
      watch(proxy, (v2) => {
        if (!isUpdating && (v2 !== props[key] || deep)) triggerEmit(v2);
      }, {
        deep
      });
      return proxy;
    } else {
      return computed({
        get() {
          return getValue2();
        },
        set(value) {
          triggerEmit(value);
        }
      });
    }
  };
  createContext = function(providerComponentName, contextName) {
    const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
    const injectionKey = Symbol(symbolDescription);
    const injectContext = (fallback) => {
      const context2 = inject(injectionKey, fallback);
      if (context2) return context2;
      if (context2 === null) return context2;
      throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
    };
    const provideContext = (contextValue) => {
      provide(injectionKey, contextValue);
      return contextValue;
    };
    return [
      injectContext,
      provideContext
    ];
  };
  const [injectConfigProviderContext, provideConfigProviderContext] = createContext("ConfigProvider");
  const _sfc_main$1W = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "ConfigProvider",
    props: {
      dir: {
        default: "ltr"
      },
      locale: {
        default: "en"
      },
      scrollBody: {
        type: [
          Boolean,
          Object
        ],
        default: true
      },
      nonce: {
        default: void 0
      },
      useId: {
        type: Function,
        default: void 0
      }
    },
    setup(__props) {
      const props = __props;
      const { dir, locale, scrollBody, nonce } = toRefs(props);
      provideConfigProviderContext({
        dir,
        locale,
        scrollBody,
        nonce,
        useId: props.useId
      });
      return (_ctx, _cache) => {
        return renderSlot(_ctx.$slots, "default");
      };
    }
  });
  useDirection = function(dir) {
    const context2 = injectConfigProviderContext({
      dir: ref("ltr")
    });
    return computed(() => {
      var _a2;
      return (dir == null ? void 0 : dir.value) || ((_a2 = context2.dir) == null ? void 0 : _a2.value) || "ltr";
    });
  };
  useForwardExpose = function() {
    const instance = getCurrentInstance();
    const currentRef = ref();
    const currentElement = computed(() => {
      var _a2, _b2;
      return [
        "#text",
        "#comment"
      ].includes((_a2 = currentRef.value) == null ? void 0 : _a2.$el.nodeName) ? (_b2 = currentRef.value) == null ? void 0 : _b2.$el.nextElementSibling : unrefElement(currentRef);
    });
    const localExpose = Object.assign({}, instance.exposed);
    const ret = {};
    for (const key in instance.props) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key]
      });
    }
    if (Object.keys(localExpose).length > 0) {
      for (const key in localExpose) {
        Object.defineProperty(ret, key, {
          enumerable: true,
          configurable: true,
          get: () => localExpose[key]
        });
      }
    }
    Object.defineProperty(ret, "$el", {
      enumerable: true,
      configurable: true,
      get: () => instance.vnode.el
    });
    instance.exposed = ret;
    function forwardRef(ref2) {
      currentRef.value = ref2;
      if (!ref2) return;
      Object.defineProperty(ret, "$el", {
        enumerable: true,
        configurable: true,
        get: () => ref2 instanceof Element ? ref2 : ref2.$el
      });
      instance.exposed = ret;
    }
    return {
      forwardRef,
      currentRef,
      currentElement
    };
  };
  const [injectCollapsibleRootContext, provideCollapsibleRootContext] = createContext("CollapsibleRoot");
  const _sfc_main$1V = defineComponent({
    __name: "CollapsibleRoot",
    props: {
      defaultOpen: {
        type: Boolean,
        default: false
      },
      open: {
        type: Boolean,
        default: void 0
      },
      disabled: {
        type: Boolean
      },
      unmountOnHide: {
        type: Boolean,
        default: true
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "update:open"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const open = useVModel(props, "open", emit, {
        defaultValue: props.defaultOpen,
        passive: props.open === void 0
      });
      const { disabled, unmountOnHide } = toRefs(props);
      provideCollapsibleRootContext({
        contentId: "",
        disabled,
        open,
        unmountOnHide,
        onOpenToggle: () => {
          open.value = !open.value;
        }
      });
      __expose({
        open
      });
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          "as-child": props.asChild,
          "data-state": unref(open) ? "open" : "closed",
          "data-disabled": unref(disabled) ? "" : void 0
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              open: unref(open)
            })
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-state",
          "data-disabled"
        ]);
      };
    }
  });
  const ignoredElement = [
    "INPUT",
    "TEXTAREA"
  ];
  function useArrowNavigation(e, currentElement, parentElement, options = {}) {
    if (!currentElement || options.enableIgnoredElement && ignoredElement.includes(currentElement.nodeName)) return null;
    const { arrowKeyOptions = "both", attributeName = "[data-reka-collection-item]", itemsArray = [], loop = true, dir = "ltr", preventScroll = true, focus: focus2 = false } = options;
    const [right, left, up, down, home, end] = [
      e.key === "ArrowRight",
      e.key === "ArrowLeft",
      e.key === "ArrowUp",
      e.key === "ArrowDown",
      e.key === "Home",
      e.key === "End"
    ];
    const goingVertical = up || down;
    const goingHorizontal = right || left;
    if (!home && !end && (!goingVertical && !goingHorizontal || arrowKeyOptions === "vertical" && goingHorizontal || arrowKeyOptions === "horizontal" && goingVertical)) {
      return null;
    }
    const allCollectionItems = parentElement ? Array.from(parentElement.querySelectorAll(attributeName)) : itemsArray;
    if (!allCollectionItems.length) return null;
    if (preventScroll) e.preventDefault();
    let item = null;
    if (goingHorizontal || goingVertical) {
      const goForward = goingVertical ? down : dir === "ltr" ? right : left;
      item = findNextFocusableElement(allCollectionItems, currentElement, {
        goForward,
        loop
      });
    } else if (home) {
      item = allCollectionItems.at(0) || null;
    } else if (end) {
      item = allCollectionItems.at(-1) || null;
    }
    if (focus2) item == null ? void 0 : item.focus();
    return item;
  }
  function findNextFocusableElement(elements, currentElement, options, iterations = elements.length) {
    if (--iterations === 0) return null;
    const index2 = elements.indexOf(currentElement);
    const newIndex = options.goForward ? index2 + 1 : index2 - 1;
    if (!options.loop && (newIndex < 0 || newIndex >= elements.length)) return null;
    const adjustedNewIndex = (newIndex + elements.length) % elements.length;
    const candidate = elements[adjustedNewIndex];
    if (!candidate) return null;
    const isDisabled = candidate.hasAttribute("disabled") && candidate.getAttribute("disabled") !== "false";
    if (isDisabled) {
      return findNextFocusableElement(elements, candidate, options, iterations);
    }
    return candidate;
  }
  let count$1 = 0;
  useId = function(deterministicId, prefix = "reka") {
    if (deterministicId) return deterministicId;
    const configProviderContext = injectConfigProviderContext({
      useId: void 0
    });
    if (useId$1) {
      return `${prefix}-${useId$1()}`;
    } else if (configProviderContext.useId) {
      return `${prefix}-${configProviderContext.useId()}`;
    }
    return `${prefix}-${++count$1}`;
  };
  function useStateMachine(initialState, machine) {
    const state2 = ref(initialState);
    function reducer(event) {
      const nextState = machine[state2.value][event];
      return nextState ?? state2.value;
    }
    const dispatch = (event) => {
      state2.value = reducer(event);
    };
    return {
      state: state2,
      dispatch
    };
  }
  function usePresence(present, node) {
    var _a2;
    const stylesRef = ref({});
    const prevAnimationNameRef = ref("none");
    const prevPresentRef = ref(present);
    const initialState = present.value ? "mounted" : "unmounted";
    let timeoutId;
    const ownerWindow = ((_a2 = node.value) == null ? void 0 : _a2.ownerDocument.defaultView) ?? defaultWindow;
    const { state: state2, dispatch } = useStateMachine(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    const dispatchCustomEvent = (name) => {
      var _a3;
      if (isClient) {
        const customEvent = new CustomEvent(name, {
          bubbles: false,
          cancelable: false
        });
        (_a3 = node.value) == null ? void 0 : _a3.dispatchEvent(customEvent);
      }
    };
    watch(present, async (currentPresent, prevPresent) => {
      var _a3;
      const hasPresentChanged = prevPresent !== currentPresent;
      await nextTick();
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.value;
        const currentAnimationName = getAnimationName(node.value);
        if (currentPresent) {
          dispatch("MOUNT");
          dispatchCustomEvent("enter");
          if (currentAnimationName === "none") dispatchCustomEvent("after-enter");
        } else if (currentAnimationName === "none" || currentAnimationName === "undefined" || ((_a3 = stylesRef.value) == null ? void 0 : _a3.display) === "none") {
          dispatch("UNMOUNT");
          dispatchCustomEvent("leave");
          dispatchCustomEvent("after-leave");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (prevPresent && isAnimating) {
            dispatch("ANIMATION_OUT");
            dispatchCustomEvent("leave");
          } else {
            dispatch("UNMOUNT");
            dispatchCustomEvent("after-leave");
          }
        }
      }
    }, {
      immediate: true
    });
    const handleAnimationEnd = (event) => {
      const currentAnimationName = getAnimationName(node.value);
      const isCurrentAnimation = currentAnimationName.includes(event.animationName);
      const directionName = state2.value === "mounted" ? "enter" : "leave";
      if (event.target === node.value && isCurrentAnimation) {
        dispatchCustomEvent(`after-${directionName}`);
        dispatch("ANIMATION_END");
        if (!prevPresentRef.value) {
          const currentFillMode = node.value.style.animationFillMode;
          node.value.style.animationFillMode = "forwards";
          timeoutId = ownerWindow == null ? void 0 : ownerWindow.setTimeout(() => {
            var _a3;
            if (((_a3 = node.value) == null ? void 0 : _a3.style.animationFillMode) === "forwards") {
              node.value.style.animationFillMode = currentFillMode;
            }
          });
        }
      }
      if (event.target === node.value && currentAnimationName === "none") dispatch("ANIMATION_END");
    };
    const handleAnimationStart = (event) => {
      if (event.target === node.value) {
        prevAnimationNameRef.value = getAnimationName(node.value);
      }
    };
    const watcher = watch(node, (newNode, oldNode) => {
      if (newNode) {
        stylesRef.value = getComputedStyle(newNode);
        newNode.addEventListener("animationstart", handleAnimationStart);
        newNode.addEventListener("animationcancel", handleAnimationEnd);
        newNode.addEventListener("animationend", handleAnimationEnd);
      } else {
        dispatch("ANIMATION_END");
        if (timeoutId !== void 0) ownerWindow == null ? void 0 : ownerWindow.clearTimeout(timeoutId);
        oldNode == null ? void 0 : oldNode.removeEventListener("animationstart", handleAnimationStart);
        oldNode == null ? void 0 : oldNode.removeEventListener("animationcancel", handleAnimationEnd);
        oldNode == null ? void 0 : oldNode.removeEventListener("animationend", handleAnimationEnd);
      }
    }, {
      immediate: true
    });
    const stateWatcher = watch(state2, () => {
      const currentAnimationName = getAnimationName(node.value);
      prevAnimationNameRef.value = state2.value === "mounted" ? currentAnimationName : "none";
    });
    onUnmounted(() => {
      watcher();
      stateWatcher();
    });
    const isPresent = computed(() => [
      "mounted",
      "unmountSuspended"
    ].includes(state2.value));
    return {
      isPresent
    };
  }
  function getAnimationName(node) {
    return node ? getComputedStyle(node).animationName || "none" : "none";
  }
  Presence = defineComponent({
    name: "Presence",
    props: {
      present: {
        type: Boolean,
        required: true
      },
      forceMount: {
        type: Boolean
      }
    },
    slots: {},
    setup(props, { slots, expose }) {
      var _a2;
      const { present, forceMount } = toRefs(props);
      const node = ref();
      const { isPresent } = usePresence(present, node);
      expose({
        present: isPresent
      });
      let children = slots.default({
        present: isPresent.value
      });
      children = renderSlotFragments(children || []);
      const instance = getCurrentInstance();
      if (children && (children == null ? void 0 : children.length) > 1) {
        const componentName = ((_a2 = instance == null ? void 0 : instance.parent) == null ? void 0 : _a2.type.name) ? `<${instance.parent.type.name} />` : "component";
        throw new Error([
          `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((line) => `  - ${line}`).join("\n")
        ].join("\n"));
      }
      return () => {
        if (forceMount.value || present.value || isPresent.value) {
          return h(slots.default({
            present: isPresent.value
          })[0], {
            ref: (v2) => {
              const el = unrefElement(v2);
              if (typeof (el == null ? void 0 : el.hasAttribute) === "undefined") return el;
              if (el == null ? void 0 : el.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
              else node.value = el;
              return el;
            }
          });
        } else {
          return null;
        }
      };
    }
  });
  const _sfc_main$1U = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "CollapsibleContent",
    props: {
      forceMount: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "contentFound"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectCollapsibleRootContext();
      rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-collapsible-content"));
      const presentRef = ref();
      const { forwardRef, currentElement } = useForwardExpose();
      const width = ref(0);
      const height = ref(0);
      const isOpen = computed(() => rootContext.open.value);
      const isMountAnimationPrevented = ref(isOpen.value);
      const currentStyle = ref();
      watch(() => {
        var _a2;
        return [
          isOpen.value,
          (_a2 = presentRef.value) == null ? void 0 : _a2.present
        ];
      }, async () => {
        await nextTick();
        const node = currentElement.value;
        if (!node) return;
        currentStyle.value = currentStyle.value || {
          transitionDuration: node.style.transitionDuration,
          animationName: node.style.animationName
        };
        node.style.transitionDuration = "0s";
        node.style.animationName = "none";
        const rect = node.getBoundingClientRect();
        height.value = rect.height;
        width.value = rect.width;
        if (!isMountAnimationPrevented.value) {
          node.style.transitionDuration = currentStyle.value.transitionDuration;
          node.style.animationName = currentStyle.value.animationName;
        }
      }, {
        immediate: true
      });
      const skipAnimation = computed(() => isMountAnimationPrevented.value && rootContext.open.value);
      onMounted(() => {
        requestAnimationFrame(() => {
          isMountAnimationPrevented.value = false;
        });
      });
      useEventListener(currentElement, "beforematch", (ev) => {
        requestAnimationFrame(() => {
          rootContext.onOpenToggle();
          emits("contentFound");
        });
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          ref_key: "presentRef",
          ref: presentRef,
          present: _ctx.forceMount || unref(rootContext).open.value,
          "force-mount": true
        }, {
          default: withCtx(({ present }) => {
            var _a2;
            return [
              createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
                id: unref(rootContext).contentId,
                ref: unref(forwardRef),
                "as-child": props.asChild,
                as: _ctx.as,
                hidden: !present ? unref(rootContext).unmountOnHide.value ? "" : "until-found" : void 0,
                "data-state": skipAnimation.value ? void 0 : unref(rootContext).open.value ? "open" : "closed",
                "data-disabled": ((_a2 = unref(rootContext).disabled) == null ? void 0 : _a2.value) ? "" : void 0,
                style: {
                  [`--reka-collapsible-content-height`]: `${height.value}px`,
                  [`--reka-collapsible-content-width`]: `${width.value}px`
                }
              }), {
                default: withCtx(() => [
                  (unref(rootContext).unmountOnHide.value ? present : true) ? renderSlot(_ctx.$slots, "default", {
                    key: 0
                  }) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, [
                "id",
                "as-child",
                "as",
                "hidden",
                "data-state",
                "data-disabled",
                "style"
              ])
            ];
          }),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const _sfc_main$1T = defineComponent({
    __name: "CollapsibleTrigger",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      const rootContext = injectCollapsibleRootContext();
      return (_ctx, _cache) => {
        var _a2, _b2;
        return openBlock(), createBlock(unref(Primitive), {
          type: _ctx.as === "button" ? "button" : void 0,
          as: _ctx.as,
          "as-child": props.asChild,
          "aria-controls": unref(rootContext).contentId,
          "aria-expanded": unref(rootContext).open.value,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          "data-disabled": ((_a2 = unref(rootContext).disabled) == null ? void 0 : _a2.value) ? "" : void 0,
          disabled: (_b2 = unref(rootContext).disabled) == null ? void 0 : _b2.value,
          onClick: unref(rootContext).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "type",
          "as",
          "as-child",
          "aria-controls",
          "aria-expanded",
          "data-state",
          "data-disabled",
          "disabled",
          "onClick"
        ]);
      };
    }
  });
  function useEmitAsProps(emit) {
    const vm = getCurrentInstance();
    const events = vm == null ? void 0 : vm.type.emits;
    const result = {};
    if (!(events == null ? void 0 : events.length)) {
      console.warn(`No emitted event found. Please check component: ${vm == null ? void 0 : vm.type.__name}`);
    }
    events == null ? void 0 : events.forEach((ev) => {
      result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
    });
    return result;
  }
  useForwardProps = function(props) {
    const vm = getCurrentInstance();
    const defaultProps = Object.keys((vm == null ? void 0 : vm.type.props) ?? {}).reduce((prev, curr) => {
      const defaultValue = (vm == null ? void 0 : vm.type.props[curr]).default;
      if (defaultValue !== void 0) prev[curr] = defaultValue;
      return prev;
    }, {});
    const refProps = toRef(props);
    return computed(() => {
      const preservedProps = {};
      const assignedProps = (vm == null ? void 0 : vm.vnode.props) ?? {};
      Object.keys(assignedProps).forEach((key) => {
        preservedProps[camelize(key)] = assignedProps[key];
      });
      return Object.keys({
        ...defaultProps,
        ...preservedProps
      }).reduce((prev, curr) => {
        if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
        return prev;
      }, {});
    });
  };
  useForwardPropsEmits = function(props, emit) {
    const parsedProps = useForwardProps(props);
    const emitsAsProps = emit ? useEmitAsProps(emit) : {};
    return computed(() => ({
      ...parsedProps.value,
      ...emitsAsProps
    }));
  };
  const [injectDialogRootContext, provideDialogRootContext] = createContext("DialogRoot");
  const _sfc_main$1S = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "DialogRoot",
    props: {
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: false
      },
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const open = useVModel(props, "open", emit, {
        defaultValue: props.defaultOpen,
        passive: props.open === void 0
      });
      const triggerElement = ref();
      const contentElement = ref();
      const { modal: modal2 } = toRefs(props);
      provideDialogRootContext({
        open,
        modal: modal2,
        openModal: () => {
          open.value = true;
        },
        onOpenChange: (value) => {
          open.value = value;
        },
        onOpenToggle: () => {
          open.value = !open.value;
        },
        contentId: "",
        titleId: "",
        descriptionId: "",
        triggerElement,
        contentElement
      });
      return (_ctx, _cache) => {
        return renderSlot(_ctx.$slots, "default", {
          open: unref(open)
        });
      };
    }
  });
  const _sfc_main$1R = defineComponent({
    __name: "DialogTrigger",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      const rootContext = injectDialogRootContext();
      const { forwardRef, currentElement } = useForwardExpose();
      rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-dialog-content"));
      onMounted(() => {
        rootContext.triggerElement.value = currentElement.value;
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(rootContext).open.value || false,
          "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          onClick: unref(rootContext).onOpenToggle
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "type",
          "aria-expanded",
          "aria-controls",
          "data-state",
          "onClick"
        ]);
      };
    }
  });
  _sfc_main$1Q = defineComponent({
    __name: "Teleport",
    props: {
      to: {
        default: "body"
      },
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(__props) {
      const isMounted = useMounted();
      return (_ctx, _cache) => {
        return unref(isMounted) || _ctx.forceMount ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: _ctx.to,
          disabled: _ctx.disabled,
          defer: _ctx.defer
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 8, [
          "to",
          "disabled",
          "defer"
        ])) : createCommentVNode("", true);
      };
    }
  });
  handleAndDispatchCustomEvent$1 = function(name, handler, detail) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
      bubbles: false,
      cancelable: true,
      detail
    });
    if (handler) target.addEventListener(name, handler, {
      once: true
    });
    target.dispatchEvent(event);
  };
  const POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
  const FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
  function isLayerExist(layerElement, targetElement) {
    const targetLayer = targetElement.closest("[data-dismissable-layer]");
    const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
    const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
    if (targetLayer && mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer)) {
      return true;
    } else {
      return false;
    }
  }
  function usePointerDownOutside(onPointerDownOutside, element) {
    var _a2;
    const ownerDocument = ((_a2 = element == null ? void 0 : element.value) == null ? void 0 : _a2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const isPointerInsideDOMTree = ref(false);
    const handleClickRef = ref(() => {
    });
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const handlePointerDown = async (event) => {
        const target = event.target;
        if (!(element == null ? void 0 : element.value)) return;
        if (isLayerExist(element.value, target)) {
          isPointerInsideDOMTree.value = false;
          return;
        }
        if (event.target && !isPointerInsideDOMTree.value) {
          let handleAndDispatchPointerDownOutsideEvent = function() {
            handleAndDispatchCustomEvent$1(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
          };
          const eventDetail = {
            originalEvent: event
          };
          if (event.pointerType === "touch") {
            ownerDocument.removeEventListener("click", handleClickRef.value);
            handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
            ownerDocument.addEventListener("click", handleClickRef.value, {
              once: true
            });
          } else {
            handleAndDispatchPointerDownOutsideEvent();
          }
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.value);
        }
        isPointerInsideDOMTree.value = false;
      };
      const timerId = window.setTimeout(() => {
        ownerDocument.addEventListener("pointerdown", handlePointerDown);
      }, 0);
      cleanupFn(() => {
        window.clearTimeout(timerId);
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("click", handleClickRef.value);
      });
    });
    return {
      onPointerDownCapture: () => isPointerInsideDOMTree.value = true
    };
  }
  function useFocusOutside(onFocusOutside, element) {
    var _a2;
    const ownerDocument = ((_a2 = element == null ? void 0 : element.value) == null ? void 0 : _a2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const isFocusInsideDOMTree = ref(false);
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const handleFocus = async (event) => {
        if (!(element == null ? void 0 : element.value)) return;
        await nextTick();
        await nextTick();
        if (!element.value || isLayerExist(element.value, event.target)) return;
        if (event.target && !isFocusInsideDOMTree.value) {
          const eventDetail = {
            originalEvent: event
          };
          handleAndDispatchCustomEvent$1(FOCUS_OUTSIDE, onFocusOutside, eventDetail);
        }
      };
      ownerDocument.addEventListener("focusin", handleFocus);
      cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
    });
    return {
      onFocusCapture: () => isFocusInsideDOMTree.value = true,
      onBlurCapture: () => isFocusInsideDOMTree.value = false
    };
  }
  const context = reactive({
    layersRoot: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  _sfc_main$1P = defineComponent({
    __name: "DismissableLayer",
    props: {
      disableOutsidePointerEvents: {
        type: Boolean,
        default: false
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "dismiss"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { forwardRef, currentElement: layerElement } = useForwardExpose();
      const ownerDocument = computed(() => {
        var _a2;
        return ((_a2 = layerElement.value) == null ? void 0 : _a2.ownerDocument) ?? globalThis.document;
      });
      const layers = computed(() => context.layersRoot);
      const index2 = computed(() => {
        return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
      });
      const isBodyPointerEventsDisabled = computed(() => {
        return context.layersWithOutsidePointerEventsDisabled.size > 0;
      });
      const isPointerEventsEnabled = computed(() => {
        const localLayers = Array.from(layers.value);
        const [highestLayerWithOutsidePointerEventsDisabled] = [
          ...context.layersWithOutsidePointerEventsDisabled
        ].slice(-1);
        const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
        return index2.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
      });
      const pointerDownOutside = usePointerDownOutside(async (event) => {
        const isPointerDownOnBranch = [
          ...context.branches
        ].some((branch) => branch == null ? void 0 : branch.contains(event.target));
        if (!isPointerEventsEnabled.value || isPointerDownOnBranch) return;
        emits("pointerDownOutside", event);
        emits("interactOutside", event);
        await nextTick();
        if (!event.defaultPrevented) emits("dismiss");
      }, layerElement);
      const focusOutside = useFocusOutside((event) => {
        const isFocusInBranch = [
          ...context.branches
        ].some((branch) => branch == null ? void 0 : branch.contains(event.target));
        if (isFocusInBranch) return;
        emits("focusOutside", event);
        emits("interactOutside", event);
        if (!event.defaultPrevented) emits("dismiss");
      }, layerElement);
      onKeyStroke("Escape", (event) => {
        const isHighestLayer = index2.value === layers.value.size - 1;
        if (!isHighestLayer) return;
        emits("escapeKeyDown", event);
        if (!event.defaultPrevented) emits("dismiss");
      });
      let originalBodyPointerEvents;
      watchEffect((cleanupFn) => {
        if (!layerElement.value) return;
        if (props.disableOutsidePointerEvents) {
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
            ownerDocument.value.body.style.pointerEvents = "none";
          }
          context.layersWithOutsidePointerEventsDisabled.add(layerElement.value);
        }
        layers.value.add(layerElement.value);
        cleanupFn(() => {
          if (props.disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
            ownerDocument.value.body.style.pointerEvents = originalBodyPointerEvents;
          }
        });
      });
      watchEffect((cleanupFn) => {
        cleanupFn(() => {
          if (!layerElement.value) return;
          layers.value.delete(layerElement.value);
          context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
        });
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref: unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "data-dismissable-layer": "",
          style: normalizeStyle({
            pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0
          }),
          onFocusCapture: unref(focusOutside).onFocusCapture,
          onBlurCapture: unref(focusOutside).onBlurCapture,
          onPointerdownCapture: unref(pointerDownOutside).onPointerDownCapture
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "style",
          "onFocusCapture",
          "onBlurCapture",
          "onPointerdownCapture"
        ]);
      };
    }
  });
  getActiveElement = function() {
    let activeElement = document.activeElement;
    if (activeElement == null) {
      return null;
    }
    while (activeElement != null && activeElement.shadowRoot != null && activeElement.shadowRoot.activeElement != null) {
      activeElement = activeElement.shadowRoot.activeElement;
    }
    return activeElement;
  };
  const ITEM_SELECT = "menu.itemSelect";
  const SELECTION_KEYS = [
    "Enter",
    " "
  ];
  const FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
  ];
  const LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
  ];
  const FIRST_LAST_KEYS = [
    ...FIRST_KEYS,
    ...LAST_KEYS
  ];
  const SUB_OPEN_KEYS = {
    ltr: [
      ...SELECTION_KEYS,
      "ArrowRight"
    ],
    rtl: [
      ...SELECTION_KEYS,
      "ArrowLeft"
    ]
  };
  const SUB_CLOSE_KEYS = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  };
  function getOpenState$1(open) {
    return open ? "open" : "closed";
  }
  function isIndeterminate(checked) {
    return checked === "indeterminate";
  }
  function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
  }
  function focusFirst$3(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus();
      if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }
  function isPointInPolygon(point, polygon) {
    const { x: x2, y: y2 } = point;
    let inside = false;
    for (let i2 = 0, j = polygon.length - 1; i2 < polygon.length; j = i2++) {
      const xi = polygon[i2].x;
      const yi = polygon[i2].y;
      const xj = polygon[j].x;
      const yj = polygon[j].y;
      const intersect = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
  function isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
      x: event.clientX,
      y: event.clientY
    };
    return isPointInPolygon(cursorPos, area);
  }
  function isMouseEvent(event) {
    return event.pointerType === "mouse";
  }
  const AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
  const AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
  const EVENT_OPTIONS$1 = {
    bubbles: false,
    cancelable: true
  };
  function focusFirst$2(candidates, { select = false } = {}) {
    const previouslyFocusedElement = getActiveElement();
    for (const candidate of candidates) {
      focus(candidate, {
        select
      });
      if (getActiveElement() !== previouslyFocusedElement) return true;
    }
  }
  function getTabbableEdges(container) {
    const candidates = getTabbableCandidates$1(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
      first,
      last
    ];
  }
  function getTabbableCandidates$1(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }
  function findVisible(elements, container) {
    for (const element of elements) {
      if (!isHidden(element, {
        upTo: container
      })) return element;
    }
  }
  function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while (node) {
      if (upTo !== void 0 && node === upTo) return false;
      if (getComputedStyle(node).display === "none") return true;
      node = node.parentElement;
    }
    return false;
  }
  function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
  }
  function focus(element, { select = false } = {}) {
    if (element && element.focus) {
      const previouslyFocusedElement = getActiveElement();
      element.focus({
        preventScroll: true
      });
      if (element !== previouslyFocusedElement && isSelectableInput(element) && select) {
        element.select();
      }
    }
  }
  const useFocusStackState = createGlobalState(() => {
    const stack = ref([]);
    return stack;
  });
  function createFocusScopesStack() {
    const stack = useFocusStackState();
    return {
      add(focusScope) {
        const activeFocusScope = stack.value[0];
        if (focusScope !== activeFocusScope) activeFocusScope == null ? void 0 : activeFocusScope.pause();
        stack.value = arrayRemove(stack.value, focusScope);
        stack.value.unshift(focusScope);
      },
      remove(focusScope) {
        var _a2;
        stack.value = arrayRemove(stack.value, focusScope);
        (_a2 = stack.value[0]) == null ? void 0 : _a2.resume();
      }
    };
  }
  function arrayRemove(array, item) {
    const updatedArray = [
      ...array
    ];
    const index2 = updatedArray.indexOf(item);
    if (index2 !== -1) updatedArray.splice(index2, 1);
    return updatedArray;
  }
  function removeLinks(items) {
    return items.filter((item) => item.tagName !== "A");
  }
  const _sfc_main$1O = defineComponent({
    __name: "FocusScope",
    props: {
      loop: {
        type: Boolean,
        default: false
      },
      trapped: {
        type: Boolean,
        default: false
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "mountAutoFocus",
      "unmountAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { currentRef, currentElement } = useForwardExpose();
      const lastFocusedElementRef = ref(null);
      const focusScopesStack = createFocusScopesStack();
      const focusScope = reactive({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      });
      watchEffect((cleanupFn) => {
        if (!isClient) return;
        const container = currentElement.value;
        if (!props.trapped) return;
        function handleFocusIn(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (container.contains(target)) lastFocusedElementRef.value = target;
          else focus(lastFocusedElementRef.value, {
            select: true
          });
        }
        function handleFocusOut(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, {
            select: true
          });
        }
        function handleMutations(mutations) {
          const isLastFocusedElementExist = container.contains(lastFocusedElementRef.value);
          if (!isLastFocusedElementExist) focus(container);
        }
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);
        const mutationObserver = new MutationObserver(handleMutations);
        if (container) mutationObserver.observe(container, {
          childList: true,
          subtree: true
        });
        cleanupFn(() => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
          mutationObserver.disconnect();
        });
      });
      watchEffect(async (cleanupFn) => {
        const container = currentElement.value;
        await nextTick();
        if (!container) return;
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = getActiveElement();
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst$2(removeLinks(getTabbableCandidates$1(container)), {
              select: true
            });
            if (getActiveElement() === previouslyFocusedElement) focus(container);
          }
        }
        cleanupFn(() => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
          const unmountEventHandler = (ev) => {
            emits("unmountAutoFocus", ev);
          };
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
          container.dispatchEvent(unmountEvent);
          setTimeout(() => {
            if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, {
              select: true
            });
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
            focusScopesStack.remove(focusScope);
          }, 0);
        });
      });
      function handleKeyDown(event) {
        if (!props.loop && !props.trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = getActiveElement();
        if (isTabKey && focusedElement) {
          const container = event.currentTarget;
          const [first, last] = getTabbableEdges(container);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (props.loop) focus(first, {
                select: true
              });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (props.loop) focus(last, {
                select: true
              });
            }
          }
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref_key: "currentRef",
          ref: currentRef,
          tabindex: "-1",
          "as-child": _ctx.asChild,
          as: _ctx.as,
          onKeydown: handleKeyDown
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as-child",
          "as"
        ]);
      };
    }
  });
  const _sfc_main$1N = defineComponent({
    __name: "DialogContentImpl",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectDialogRootContext();
      const { forwardRef, currentElement: contentElement } = useForwardExpose();
      rootContext.titleId || (rootContext.titleId = useId(void 0, "reka-dialog-title"));
      rootContext.descriptionId || (rootContext.descriptionId = useId(void 0, "reka-dialog-description"));
      onMounted(() => {
        rootContext.contentElement = contentElement;
        if (getActiveElement() !== document.body) rootContext.triggerElement.value = getActiveElement();
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1O), {
          "as-child": "",
          loop: "",
          trapped: props.trapFocus,
          onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
          onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$1P), mergeProps({
              id: unref(rootContext).contentId,
              ref: unref(forwardRef),
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
              role: "dialog",
              "aria-describedby": unref(rootContext).descriptionId,
              "aria-labelledby": unref(rootContext).titleId,
              "data-state": unref(getOpenState$1)(unref(rootContext).open.value)
            }, _ctx.$attrs, {
              onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
              onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
              onFocusOutside: _cache[2] || (_cache[2] = ($event) => emits("focusOutside", $event)),
              onInteractOutside: _cache[3] || (_cache[3] = ($event) => emits("interactOutside", $event)),
              onPointerDownOutside: _cache[4] || (_cache[4] = ($event) => emits("pointerDownOutside", $event))
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "id",
              "as",
              "as-child",
              "disable-outside-pointer-events",
              "aria-describedby",
              "aria-labelledby",
              "data-state"
            ])
          ]),
          _: 3
        }, 8, [
          "trapped"
        ]);
      };
    }
  });
  var getDefaultParent = function(originalTarget) {
    if (typeof document === "undefined") {
      return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
  };
  var counterMap = /* @__PURE__ */ new WeakMap();
  var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
  var markerMap = {};
  var lockCount = 0;
  var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
  };
  var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
      if (parent.contains(target)) {
        return target;
      }
      var correctedTarget = unwrapHost(target);
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
      return null;
    }).filter(function(x2) {
      return Boolean(x2);
    });
  };
  var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
      originalTarget
    ]);
    if (!markerMap[markerName]) {
      markerMap[markerName] = /* @__PURE__ */ new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = /* @__PURE__ */ new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
      if (!el || elementsToKeep.has(el)) {
        return;
      }
      elementsToKeep.add(el);
      keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
      if (!parent || elementsToStop.has(parent)) {
        return;
      }
      Array.prototype.forEach.call(parent.children, function(node) {
        if (elementsToKeep.has(node)) {
          deep(node);
        } else {
          try {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          } catch (e) {
            console.error("aria-hidden: cannot operate on ", node, e);
          }
        }
      });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
      hiddenNodes.forEach(function(node) {
        var counterValue = counterMap.get(node) - 1;
        var markerValue = markerCounter.get(node) - 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        if (!counterValue) {
          if (!uncontrolledNodes.has(node)) {
            node.removeAttribute(controlAttribute);
          }
          uncontrolledNodes.delete(node);
        }
        if (!markerValue) {
          node.removeAttribute(markerName);
        }
      });
      lockCount--;
      if (!lockCount) {
        counterMap = /* @__PURE__ */ new WeakMap();
        counterMap = /* @__PURE__ */ new WeakMap();
        uncontrolledNodes = /* @__PURE__ */ new WeakMap();
        markerMap = {};
      }
    };
  };
  var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
      markerName = "data-aria-hidden";
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
      originalTarget
    ]);
    var activeParentNode = getDefaultParent(originalTarget);
    if (!activeParentNode) {
      return function() {
        return null;
      };
    }
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
    return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
  };
  function useHideOthers(target) {
    let undo;
    watch(() => unrefElement(target), (el) => {
      if (el) undo = hideOthers(el);
      else if (undo) undo();
    });
    onUnmounted(() => {
      if (undo) undo();
    });
  }
  const _sfc_main$1M = defineComponent({
    __name: "DialogContentModal",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectDialogRootContext();
      const emitsAsProps = useEmitAsProps(emits);
      const { forwardRef, currentElement } = useForwardExpose();
      useHideOthers(currentElement);
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1N, mergeProps({
          ...props,
          ...unref(emitsAsProps)
        }, {
          ref: unref(forwardRef),
          "trap-focus": unref(rootContext).open.value,
          "disable-outside-pointer-events": true,
          onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
            var _a2;
            if (!event.defaultPrevented) {
              event.preventDefault();
              (_a2 = unref(rootContext).triggerElement.value) == null ? void 0 : _a2.focus();
            }
          }),
          onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
          }),
          onFocusOutside: _cache[2] || (_cache[2] = (event) => {
            event.preventDefault();
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "trap-focus"
        ]);
      };
    }
  });
  const _sfc_main$1L = defineComponent({
    __name: "DialogContentNonModal",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const emitsAsProps = useEmitAsProps(emits);
      useForwardExpose();
      const rootContext = injectDialogRootContext();
      const hasInteractedOutsideRef = ref(false);
      const hasPointerDownOutsideRef = ref(false);
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1N, mergeProps({
          ...props,
          ...unref(emitsAsProps)
        }, {
          "trap-focus": false,
          "disable-outside-pointer-events": false,
          onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
            var _a2;
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.value) (_a2 = unref(rootContext).triggerElement.value) == null ? void 0 : _a2.focus();
              event.preventDefault();
            }
            hasInteractedOutsideRef.value = false;
            hasPointerDownOutsideRef.value = false;
          }),
          onInteractOutside: _cache[1] || (_cache[1] = (event) => {
            var _a2;
            if (!event.defaultPrevented) {
              hasInteractedOutsideRef.value = true;
              if (event.detail.originalEvent.type === "pointerdown") {
                hasPointerDownOutsideRef.value = true;
              }
            }
            const target = event.target;
            const targetIsTrigger = (_a2 = unref(rootContext).triggerElement.value) == null ? void 0 : _a2.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) {
              event.preventDefault();
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1K = defineComponent({
    __name: "DialogContent",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectDialogRootContext();
      const emitsAsProps = useEmitAsProps(emits);
      const { forwardRef } = useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || unref(rootContext).open.value
        }, {
          default: withCtx(() => [
            unref(rootContext).modal.value ? (openBlock(), createBlock(_sfc_main$1M, mergeProps({
              key: 0,
              ref: unref(forwardRef)
            }, {
              ...props,
              ...unref(emitsAsProps),
              ..._ctx.$attrs
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16)) : (openBlock(), createBlock(_sfc_main$1L, mergeProps({
              key: 1,
              ref: unref(forwardRef)
            }, {
              ...props,
              ...unref(emitsAsProps),
              ..._ctx.$attrs
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16))
          ]),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const useBodyLockStackCount = createSharedComposable(() => {
    const map = ref(/* @__PURE__ */ new Map());
    const initialOverflow = ref();
    const locked = computed(() => {
      for (const value of map.value.values()) {
        if (value) return true;
      }
      return false;
    });
    const context2 = injectConfigProviderContext({
      scrollBody: ref(true)
    });
    let stopTouchMoveListener = null;
    const resetBodyStyle = () => {
      document.body.style.paddingRight = "";
      document.body.style.marginRight = "";
      document.body.style.pointerEvents = "";
      document.body.style.removeProperty("--scrollbar-width");
      document.body.style.overflow = initialOverflow.value ?? "";
      isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
      initialOverflow.value = void 0;
    };
    watch(locked, (val, oldVal) => {
      var _a2;
      if (!isClient) return;
      if (!val) {
        if (oldVal) resetBodyStyle();
        return;
      }
      if (initialOverflow.value === void 0) initialOverflow.value = document.body.style.overflow;
      const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const defaultConfig2 = {
        padding: verticalScrollbarWidth,
        margin: 0
      };
      const config2 = ((_a2 = context2.scrollBody) == null ? void 0 : _a2.value) ? typeof context2.scrollBody.value === "object" ? defu({
        padding: context2.scrollBody.value.padding === true ? verticalScrollbarWidth : context2.scrollBody.value.padding,
        margin: context2.scrollBody.value.margin === true ? verticalScrollbarWidth : context2.scrollBody.value.margin
      }, defaultConfig2) : defaultConfig2 : {
        padding: 0,
        margin: 0
      };
      if (verticalScrollbarWidth > 0) {
        document.body.style.paddingRight = typeof config2.padding === "number" ? `${config2.padding}px` : String(config2.padding);
        document.body.style.marginRight = typeof config2.margin === "number" ? `${config2.margin}px` : String(config2.margin);
        document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
        document.body.style.overflow = "hidden";
      }
      if (isIOS) {
        stopTouchMoveListener = useEventListener(document, "touchmove", (e) => preventDefault(e), {
          passive: false
        });
      }
      nextTick(() => {
        document.body.style.pointerEvents = "none";
        document.body.style.overflow = "hidden";
      });
    }, {
      immediate: true,
      flush: "sync"
    });
    return map;
  });
  function useBodyScrollLock(initialState) {
    const id = Math.random().toString(36).substring(2, 7);
    const map = useBodyLockStackCount();
    map.value.set(id, initialState ?? false);
    const locked = computed({
      get: () => map.value.get(id) ?? false,
      set: (value) => map.value.set(id, value)
    });
    tryOnBeforeUnmount(() => {
      map.value.delete(id);
    });
    return locked;
  }
  function checkOverflowScroll(ele) {
    const style = window.getComputedStyle(ele);
    if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) {
      return true;
    } else {
      const parent = ele.parentNode;
      if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
      return checkOverflowScroll(parent);
    }
  }
  function preventDefault(rawEvent) {
    const e = rawEvent || window.event;
    const _target = e.target;
    if (_target instanceof Element && checkOverflowScroll(_target)) return false;
    if (e.touches.length > 1) return true;
    if (e.preventDefault && e.cancelable) e.preventDefault();
    return false;
  }
  const _sfc_main$1J = defineComponent({
    __name: "DialogOverlayImpl",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const rootContext = injectDialogRootContext();
      useBodyScrollLock(true);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          style: {
            "pointer-events": "auto"
          }
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-state"
        ]);
      };
    }
  });
  const _sfc_main$1I = defineComponent({
    __name: "DialogOverlay",
    props: {
      forceMount: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const rootContext = injectDialogRootContext();
      const { forwardRef } = useForwardExpose();
      return (_ctx, _cache) => {
        var _a2;
        return ((_a2 = unref(rootContext)) == null ? void 0 : _a2.modal.value) ? (openBlock(), createBlock(unref(Presence), {
          key: 0,
          present: _ctx.forceMount || unref(rootContext).open.value
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1J, mergeProps(_ctx.$attrs, {
              ref: unref(forwardRef),
              as: _ctx.as,
              "as-child": _ctx.asChild
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "as",
              "as-child"
            ])
          ]),
          _: 3
        }, 8, [
          "present"
        ])) : createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$1H = defineComponent({
    __name: "DialogClose",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      const rootContext = injectDialogRootContext();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          type: _ctx.as === "button" ? "button" : void 0,
          onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "type"
        ]);
      };
    }
  });
  const _sfc_main$1G = defineComponent({
    __name: "DialogTitle",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "h2"
      }
    },
    setup(__props) {
      const props = __props;
      const rootContext = injectDialogRootContext();
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          id: unref(rootContext).titleId
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "id"
        ]);
      };
    }
  });
  const _sfc_main$1F = defineComponent({
    __name: "DialogDescription",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "p"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      const rootContext = injectDialogRootContext();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          id: unref(rootContext).descriptionId
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "id"
        ]);
      };
    }
  });
  function usePrimitiveElement() {
    const primitiveElement = ref();
    const currentElement = computed(() => {
      var _a2, _b2;
      return [
        "#text",
        "#comment"
      ].includes((_a2 = primitiveElement.value) == null ? void 0 : _a2.$el.nodeName) ? (_b2 = primitiveElement.value) == null ? void 0 : _b2.$el.nextElementSibling : unrefElement(primitiveElement);
    });
    return {
      primitiveElement,
      currentElement
    };
  }
  function useKbd$1() {
    return {
      ALT: "Alt",
      ARROW_DOWN: "ArrowDown",
      ARROW_LEFT: "ArrowLeft",
      ARROW_RIGHT: "ArrowRight",
      ARROW_UP: "ArrowUp",
      BACKSPACE: "Backspace",
      CAPS_LOCK: "CapsLock",
      CONTROL: "Control",
      DELETE: "Delete",
      END: "End",
      ENTER: "Enter",
      ESCAPE: "Escape",
      F1: "F1",
      F10: "F10",
      F11: "F11",
      F12: "F12",
      F2: "F2",
      F3: "F3",
      F4: "F4",
      F5: "F5",
      F6: "F6",
      F7: "F7",
      F8: "F8",
      F9: "F9",
      HOME: "Home",
      META: "Meta",
      PAGE_DOWN: "PageDown",
      PAGE_UP: "PageUp",
      SHIFT: "Shift",
      SPACE: " ",
      TAB: "Tab",
      CTRL: "Control",
      ASTERISK: "*",
      SPACE_CODE: "Space"
    };
  }
  useFormControl = function(el) {
    return computed(() => {
      var _a2;
      return toValue$1(el) ? Boolean((_a2 = unrefElement(el)) == null ? void 0 : _a2.closest("form")) : true;
    });
  };
  const ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
  const EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
  };
  MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
  }
  getFocusIntent = function(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
  };
  focusFirst$1 = function(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate.focus({
        preventScroll
      });
      if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  };
  wrapArray$1 = function(array, startIndex) {
    return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
  };
  const ITEM_DATA_ATTR = "data-reka-collection-item";
  useCollection = function(options = {}) {
    const { key = "", isProvider = false } = options;
    const injectionKey = `${key}CollectionProvider`;
    let context2;
    if (isProvider) {
      const itemMap = ref(/* @__PURE__ */ new Map());
      const collectionRef = ref();
      context2 = {
        collectionRef,
        itemMap
      };
      provide(injectionKey, context2);
    } else {
      context2 = inject(injectionKey);
    }
    const getItems = (includeDisabledItem = false) => {
      const collectionNode = context2.collectionRef.value;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context2.itemMap.value.values());
      const orderedItems = items.sort((a2, b) => orderedNodes.indexOf(a2.ref) - orderedNodes.indexOf(b.ref));
      if (includeDisabledItem) return orderedItems;
      else return orderedItems.filter((i2) => i2.ref.dataset.disabled !== "");
    };
    const CollectionSlot = defineComponent({
      name: "CollectionSlot",
      setup(_2, { slots }) {
        const { primitiveElement, currentElement } = usePrimitiveElement();
        watch(currentElement, () => {
          context2.collectionRef.value = currentElement.value;
        });
        return () => h(Slot, {
          ref: primitiveElement
        }, slots);
      }
    });
    const CollectionItem = defineComponent({
      name: "CollectionItem",
      inheritAttrs: false,
      props: {
        value: {
          validator: () => true
        }
      },
      setup(props, { slots, attrs }) {
        const { primitiveElement, currentElement } = usePrimitiveElement();
        watchEffect((cleanupFn) => {
          if (currentElement.value) {
            const key2 = markRaw(currentElement.value);
            context2.itemMap.value.set(key2, {
              ref: currentElement.value,
              value: props.value
            });
            cleanupFn(() => context2.itemMap.value.delete(key2));
          }
        });
        return () => h(Slot, {
          ...attrs,
          [ITEM_DATA_ATTR]: "",
          ref: primitiveElement
        }, slots);
      }
    });
    const reactiveItems = computed(() => Array.from(context2.itemMap.value.values()));
    const itemMapSize = computed(() => context2.itemMap.value.size);
    return {
      getItems,
      reactiveItems,
      itemMapSize,
      CollectionSlot,
      CollectionItem
    };
  };
  let provideRovingFocusGroupContext;
  [injectRovingFocusGroupContext, provideRovingFocusGroupContext] = createContext("RovingFocusGroup");
  _sfc_main$1E = defineComponent({
    __name: "RovingFocusGroup",
    props: {
      orientation: {
        default: void 0
      },
      dir: {},
      loop: {
        type: Boolean,
        default: false
      },
      currentTabStopId: {},
      defaultCurrentTabStopId: {},
      preventScrollOnEntryFocus: {
        type: Boolean,
        default: false
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "entryFocus",
      "update:currentTabStopId"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { loop, orientation, dir: propDir } = toRefs(props);
      const dir = useDirection(propDir);
      const currentTabStopId = useVModel(props, "currentTabStopId", emits, {
        defaultValue: props.defaultCurrentTabStopId,
        passive: props.currentTabStopId === void 0
      });
      const isTabbingBackOut = ref(false);
      const isClickFocus = ref(false);
      const focusableItemsCount = ref(0);
      const { getItems, CollectionSlot } = useCollection({
        isProvider: true
      });
      function handleFocus(event) {
        const isKeyboardFocus = !isClickFocus.value;
        if (event.currentTarget && event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut.value) {
          const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
          event.currentTarget.dispatchEvent(entryFocusEvent);
          emits("entryFocus", entryFocusEvent);
          if (!entryFocusEvent.defaultPrevented) {
            const items = getItems().map((i2) => i2.ref).filter((i2) => i2.dataset.disabled !== "");
            const activeItem = items.find((item) => item.getAttribute("data-active") === "");
            const currentItem = items.find((item) => item.id === currentTabStopId.value);
            const candidateItems = [
              activeItem,
              currentItem,
              ...items
            ].filter(Boolean);
            focusFirst$1(candidateItems, props.preventScrollOnEntryFocus);
          }
        }
        isClickFocus.value = false;
      }
      function handleMouseUp() {
        setTimeout(() => {
          isClickFocus.value = false;
        }, 1);
      }
      __expose({
        getItems
      });
      provideRovingFocusGroupContext({
        loop,
        dir,
        orientation,
        currentTabStopId,
        onItemFocus: (tabStopId) => {
          currentTabStopId.value = tabStopId;
        },
        onItemShiftTab: () => {
          isTabbingBackOut.value = true;
        },
        onFocusableItemAdd: () => {
          focusableItemsCount.value++;
        },
        onFocusableItemRemove: () => {
          focusableItemsCount.value--;
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionSlot), null, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              tabindex: isTabbingBackOut.value || focusableItemsCount.value === 0 ? -1 : 0,
              "data-orientation": unref(orientation),
              as: _ctx.as,
              "as-child": _ctx.asChild,
              dir: unref(dir),
              style: {
                "outline": "none"
              },
              onMousedown: _cache[0] || (_cache[0] = ($event) => isClickFocus.value = true),
              onMouseup: handleMouseUp,
              onFocus: handleFocus,
              onBlur: _cache[1] || (_cache[1] = ($event) => isTabbingBackOut.value = false)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "tabindex",
              "data-orientation",
              "as",
              "as-child",
              "dir"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$1D = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "VisuallyHiddenInputBubble",
    props: {
      name: {},
      value: {},
      checked: {
        type: Boolean,
        default: void 0
      },
      required: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      feature: {
        default: "fully-hidden"
      }
    },
    setup(__props) {
      const props = __props;
      const { primitiveElement, currentElement } = usePrimitiveElement();
      const valueState = computed(() => props.checked ?? props.value);
      watch(valueState, (cur, prev) => {
        if (!currentElement.value) return;
        const input2 = currentElement.value;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
        const setValue = descriptor.set;
        if (setValue && cur !== prev) {
          const inputEvent = new Event("input", {
            bubbles: true
          });
          const changeEvent = new Event("change", {
            bubbles: true
          });
          setValue.call(input2, cur);
          input2.dispatchEvent(inputEvent);
          input2.dispatchEvent(changeEvent);
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1X, mergeProps({
          ref_key: "primitiveElement",
          ref: primitiveElement
        }, {
          ...props,
          ..._ctx.$attrs
        }, {
          as: "input"
        }), null, 16);
      };
    }
  });
  _sfc_main$1C = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "VisuallyHiddenInput",
    props: {
      name: {},
      value: {},
      checked: {
        type: Boolean,
        default: void 0
      },
      required: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      feature: {
        default: "fully-hidden"
      }
    },
    setup(__props) {
      const props = __props;
      const isFormArrayEmptyAndRequired = computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
      const parsedValue = computed(() => {
        if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean") {
          return [
            {
              name: props.name,
              value: props.value
            }
          ];
        } else if (typeof props.value === "object" && Array.isArray(props.value)) {
          return props.value.flatMap((obj, index2) => {
            if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
              name: `[${props.name}][${index2}][${key}]`,
              value
            }));
            else return {
              name: `[${props.name}][${index2}]`,
              value: obj
            };
          });
        } else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) {
          return Object.entries(props.value).map(([key, value]) => ({
            name: `[${props.name}][${key}]`,
            value
          }));
        }
        return [];
      });
      return (_ctx, _cache) => {
        return isFormArrayEmptyAndRequired.value ? (openBlock(), createBlock(_sfc_main$1D, mergeProps({
          key: _ctx.name
        }, {
          ...props,
          ..._ctx.$attrs
        }, {
          name: _ctx.name,
          value: _ctx.value
        }), null, 16, [
          "name",
          "value"
        ])) : (openBlock(true), createElementBlock(Fragment, {
          key: 1
        }, renderList(parsedValue.value, (parsed) => {
          return openBlock(), createBlock(_sfc_main$1D, mergeProps({
            key: parsed.name,
            ref_for: true
          }, {
            ...props,
            ..._ctx.$attrs
          }, {
            name: parsed.name,
            value: parsed.value
          }), null, 16, [
            "name",
            "value"
          ]);
        }), 128));
      };
    }
  });
  const [injectPopperRootContext, providePopperRootContext] = createContext("PopperRoot");
  _sfc_main$1B = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "PopperRoot",
    setup(__props) {
      const anchor = ref();
      providePopperRootContext({
        anchor,
        onAnchorChange: (element) => anchor.value = element
      });
      return (_ctx, _cache) => {
        return renderSlot(_ctx.$slots, "default");
      };
    }
  });
  function valueComparator(value, currentValue, comparator) {
    if (value === void 0) return false;
    else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
    else return compare(value, currentValue, comparator);
  }
  function compare(value, currentValue, comparator) {
    if (value === void 0 || currentValue === void 0) return false;
    if (typeof value === "string") return value === currentValue;
    if (typeof comparator === "function") return comparator(value, currentValue);
    if (typeof comparator === "string") return (value == null ? void 0 : value[comparator]) === (currentValue == null ? void 0 : currentValue[comparator]);
    return isEqual(value, currentValue);
  }
  useTypeahead = function(callback) {
    const search = refAutoReset("", 1e3);
    const handleTypeaheadSearch = (key, items) => {
      search.value = search.value + key;
      {
        const currentItem = getActiveElement();
        const itemsWithTextValue = items.map((item) => {
          var _a2, _b2;
          return {
            ...item,
            textValue: ((_a2 = item.value) == null ? void 0 : _a2.textValue) ?? ((_b2 = item.ref.textContent) == null ? void 0 : _b2.trim()) ?? ""
          };
        });
        const currentMatch = itemsWithTextValue.find((item) => item.ref === currentItem);
        const values = itemsWithTextValue.map((item) => item.textValue);
        const nextMatch = getNextMatch(values, search.value, currentMatch == null ? void 0 : currentMatch.textValue);
        const newItem = itemsWithTextValue.find((item) => item.textValue === nextMatch);
        if (newItem) newItem.ref.focus();
        return newItem == null ? void 0 : newItem.ref;
      }
    };
    const resetTypeahead = () => {
      search.value = "";
    };
    return {
      search,
      handleTypeaheadSearch,
      resetTypeahead
    };
  };
  function wrapArray(array, startIndex) {
    return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
  }
  function getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v2) => v2 !== currentMatch);
    const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextMatch !== currentMatch ? nextMatch : void 0;
  }
  findValuesBetween = function(array, start, end) {
    const startIndex = array.findIndex((i2) => isEqual(i2, start));
    const endIndex = array.findIndex((i2) => isEqual(i2, end));
    if (startIndex === -1 || endIndex === -1) return [];
    const [minIndex, maxIndex] = [
      startIndex,
      endIndex
    ].sort((a2, b) => a2 - b);
    return array.slice(minIndex, maxIndex + 1);
  };
  const [injectListboxRootContext, provideListboxRootContext] = createContext("ListboxRoot");
  const _sfc_main$1A = defineComponent({
    __name: "ListboxRoot",
    props: {
      modelValue: {},
      defaultValue: {},
      multiple: {
        type: Boolean
      },
      orientation: {
        default: "vertical"
      },
      dir: {},
      disabled: {
        type: Boolean
      },
      selectionBehavior: {
        default: "toggle"
      },
      highlightOnHover: {
        type: Boolean
      },
      by: {},
      asChild: {
        type: Boolean
      },
      as: {},
      name: {},
      required: {
        type: Boolean
      }
    },
    emits: [
      "update:modelValue",
      "highlight",
      "entryFocus",
      "leave"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { multiple, highlightOnHover, orientation, disabled, selectionBehavior, dir: propDir } = toRefs(props);
      const { getItems } = useCollection({
        isProvider: true
      });
      const { handleTypeaheadSearch } = useTypeahead();
      const { primitiveElement, currentElement } = usePrimitiveElement();
      const kbd2 = useKbd$1();
      const dir = useDirection(propDir);
      const isFormControl = useFormControl(currentElement);
      const firstValue = ref();
      const isUserAction = ref(false);
      const focusable = ref(true);
      const modelValue = useVModel(props, "modelValue", emits, {
        defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
        passive: props.modelValue === void 0,
        deep: true
      });
      function onValueChange(val) {
        isUserAction.value = true;
        if (props.multiple) {
          const modelArray = Array.isArray(modelValue.value) ? [
            ...modelValue.value
          ] : [];
          const index2 = modelArray.findIndex((i2) => compare(i2, val, props.by));
          if (props.selectionBehavior === "toggle") {
            index2 === -1 ? modelArray.push(val) : modelArray.splice(index2, 1);
            modelValue.value = modelArray;
          } else {
            modelValue.value = [
              val
            ];
            firstValue.value = val;
          }
        } else {
          if (props.selectionBehavior === "toggle") {
            if (compare(modelValue.value, val, props.by)) modelValue.value = void 0;
            else modelValue.value = val;
          } else {
            modelValue.value = val;
          }
        }
        setTimeout(() => {
          isUserAction.value = false;
        }, 1);
      }
      const highlightedElement = ref(null);
      const previousElement = ref(null);
      const isVirtual = ref(false);
      const isComposing = ref(false);
      const virtualFocusHook = createEventHook();
      const virtualKeydownHook = createEventHook();
      const virtualHighlightHook = createEventHook();
      function getCollectionItem() {
        return getItems().map((i2) => i2.ref).filter((i2) => i2.dataset.disabled !== "");
      }
      function changeHighlight(el, scrollIntoView = true) {
        if (!el) return;
        highlightedElement.value = el;
        if (focusable.value) highlightedElement.value.focus();
        if (scrollIntoView) highlightedElement.value.scrollIntoView({
          block: "nearest"
        });
        const highlightedItem = getItems().find((i2) => i2.ref === el);
        emits("highlight", highlightedItem);
      }
      function highlightItem(value) {
        if (isVirtual.value) {
          virtualHighlightHook.trigger(value);
        } else {
          const item = getItems().find((i2) => compare(i2.value, value, props.by));
          if (item) {
            highlightedElement.value = item.ref;
            changeHighlight(item.ref);
          }
        }
      }
      function onKeydownEnter(event) {
        if (highlightedElement.value && highlightedElement.value.isConnected) {
          event.preventDefault();
          event.stopPropagation();
          if (!isComposing.value) {
            highlightedElement.value.click();
          }
        }
      }
      function onKeydownTypeAhead(event) {
        if (!focusable.value) return;
        isUserAction.value = true;
        if (isVirtual.value) {
          virtualKeydownHook.trigger(event);
        } else {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          if (isMetaKey && event.key === "a" && multiple.value) {
            const collection = getItems();
            const values = collection.map((i2) => i2.value);
            modelValue.value = [
              ...values
            ];
            event.preventDefault();
            changeHighlight(collection[collection.length - 1].ref);
          } else if (!isMetaKey) {
            const el = handleTypeaheadSearch(event.key, getItems());
            if (el) changeHighlight(el);
          }
        }
        setTimeout(() => {
          isUserAction.value = false;
        }, 1);
      }
      function onCompositionStart() {
        isComposing.value = true;
      }
      function onCompositionEnd() {
        requestAnimationFrame(() => {
          isComposing.value = false;
        });
      }
      function highlightFirstItem() {
        nextTick(() => {
          const event = new KeyboardEvent("keydown", {
            key: "PageUp"
          });
          onKeydownNavigation(event);
        });
      }
      function onLeave(event) {
        const el = highlightedElement.value;
        if (el == null ? void 0 : el.isConnected) {
          previousElement.value = el;
        }
        highlightedElement.value = null;
        emits("leave", event);
      }
      function onEnter(event) {
        var _a2, _b2;
        const entryFocusEvent = new CustomEvent("listbox.entryFocus", {
          bubbles: false,
          cancelable: true
        });
        (_a2 = event.currentTarget) == null ? void 0 : _a2.dispatchEvent(entryFocusEvent);
        emits("entryFocus", entryFocusEvent);
        if (entryFocusEvent.defaultPrevented) return;
        if (previousElement.value) {
          changeHighlight(previousElement.value);
        } else {
          const el = (_b2 = getCollectionItem()) == null ? void 0 : _b2[0];
          changeHighlight(el);
        }
      }
      function onKeydownNavigation(event) {
        const intent = getFocusIntent(event, orientation.value, dir.value);
        if (!intent) return;
        let collection = getCollectionItem();
        if (highlightedElement.value) {
          if (intent === "last") {
            collection.reverse();
          } else if (intent === "prev" || intent === "next") {
            if (intent === "prev") collection.reverse();
            const currentIndex = collection.indexOf(highlightedElement.value);
            collection = collection.slice(currentIndex + 1);
          }
          handleMultipleReplace(event, collection[0]);
        }
        if (collection.length) {
          const index2 = !highlightedElement.value && intent === "prev" ? collection.length - 1 : 0;
          changeHighlight(collection[index2]);
        }
        if (isVirtual.value) return virtualKeydownHook.trigger(event);
      }
      function handleMultipleReplace(event, targetEl) {
        var _a2;
        if (isVirtual.value || props.selectionBehavior !== "replace" || !multiple.value || !Array.isArray(modelValue.value)) return;
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        if (isMetaKey && !event.shiftKey) return;
        if (event.shiftKey) {
          const collection = getItems().filter((i2) => i2.ref.dataset.disabled !== "");
          let lastValue = (_a2 = collection.find((i2) => i2.ref === targetEl)) == null ? void 0 : _a2.value;
          if (event.key === kbd2.END) lastValue = collection[collection.length - 1].value;
          else if (event.key === kbd2.HOME) lastValue = collection[0].value;
          if (!lastValue || !firstValue.value) return;
          const values = findValuesBetween(collection.map((i2) => i2.value), firstValue.value, lastValue);
          modelValue.value = values;
        }
      }
      async function highlightSelected(event) {
        await nextTick();
        if (isVirtual.value) {
          virtualFocusHook.trigger(event);
        } else {
          const collection = getCollectionItem();
          const item = collection.find((i2) => i2.dataset.state === "checked");
          if (item) changeHighlight(item);
          else if (collection.length) changeHighlight(collection[0]);
        }
      }
      watch(modelValue, () => {
        if (!isUserAction.value) {
          nextTick(() => {
            highlightSelected();
          });
        }
      }, {
        immediate: true,
        deep: true
      });
      __expose({
        highlightedElement,
        highlightItem,
        highlightFirstItem,
        highlightSelected,
        getItems
      });
      provideListboxRootContext({
        modelValue,
        onValueChange,
        multiple,
        orientation,
        dir,
        disabled,
        highlightOnHover,
        highlightedElement,
        isVirtual,
        virtualFocusHook,
        virtualKeydownHook,
        virtualHighlightHook,
        by: props.by,
        firstValue,
        selectionBehavior,
        focusable,
        onLeave,
        onEnter,
        changeHighlight,
        onKeydownEnter,
        onKeydownNavigation,
        onKeydownTypeAhead,
        onCompositionStart,
        onCompositionEnd,
        highlightFirstItem
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref_key: "primitiveElement",
          ref: primitiveElement,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          dir: unref(dir),
          "data-disabled": unref(disabled) ? "" : void 0,
          onPointerleave: onLeave,
          onFocusout: _cache[0] || (_cache[0] = async (event) => {
            const target = event.relatedTarget || event.target;
            await nextTick();
            if (highlightedElement.value && unref(currentElement) && !unref(currentElement).contains(target)) {
              onLeave(event);
            }
          })
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              modelValue: unref(modelValue)
            }),
            unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(_sfc_main$1C), {
              key: 0,
              name: _ctx.name,
              value: unref(modelValue),
              disabled: unref(disabled),
              required: _ctx.required
            }, null, 8, [
              "name",
              "value",
              "disabled",
              "required"
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "dir",
          "data-disabled"
        ]);
      };
    }
  });
  const _sfc_main$1z = defineComponent({
    __name: "ListboxFilter",
    props: {
      modelValue: {},
      autoFocus: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "input"
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const modelValue = useVModel(props, "modelValue", emits, {
        defaultValue: "",
        passive: props.modelValue === void 0
      });
      const rootContext = injectListboxRootContext();
      const { primitiveElement, currentElement } = usePrimitiveElement();
      const disabled = computed(() => props.disabled || rootContext.disabled.value || false);
      const activedescendant = ref();
      watchSyncEffect(() => {
        var _a2;
        return activedescendant.value = (_a2 = rootContext.highlightedElement.value) == null ? void 0 : _a2.id;
      });
      onMounted(() => {
        rootContext.focusable.value = false;
        setTimeout(() => {
          var _a2;
          if (props.autoFocus) (_a2 = currentElement.value) == null ? void 0 : _a2.focus();
        }, 1);
      });
      onUnmounted(() => {
        rootContext.focusable.value = true;
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref_key: "primitiveElement",
          ref: primitiveElement,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          value: unref(modelValue),
          disabled: disabled.value ? "" : void 0,
          "data-disabled": disabled.value ? "" : void 0,
          "aria-disabled": disabled.value ?? void 0,
          "aria-activedescendant": activedescendant.value,
          type: "text",
          onKeydown: [
            withKeys(withModifiers(unref(rootContext).onKeydownNavigation, [
              "prevent"
            ]), [
              "down",
              "up",
              "home",
              "end"
            ]),
            withKeys(unref(rootContext).onKeydownEnter, [
              "enter"
            ])
          ],
          onInput: _cache[0] || (_cache[0] = (event) => {
            modelValue.value = event.target.value;
            unref(rootContext).highlightFirstItem(event);
          }),
          onCompositionstart: unref(rootContext).onCompositionStart,
          onCompositionend: unref(rootContext).onCompositionEnd
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              modelValue: unref(modelValue)
            })
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "value",
          "disabled",
          "data-disabled",
          "aria-disabled",
          "aria-activedescendant",
          "onKeydown",
          "onCompositionstart",
          "onCompositionend"
        ]);
      };
    }
  });
  _sfc_main$1y = defineComponent({
    __name: "PopperAnchor",
    props: {
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const { forwardRef, currentElement } = useForwardExpose();
      const rootContext = injectPopperRootContext();
      watchPostEffect(() => {
        rootContext.onAnchorChange(props.reference ?? currentElement.value);
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref: unref(forwardRef),
          as: _ctx.as,
          "as-child": _ctx.asChild
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child"
        ]);
      };
    }
  });
  const [injectListboxGroupContext, provideListboxGroupContext] = createContext("ListboxGroup");
  const _sfc_main$1x = defineComponent({
    __name: "ListboxGroup",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const id = useId(void 0, "reka-listbox-group");
      provideListboxGroupContext({
        id
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps({
          role: "group"
        }, props, {
          "aria-labelledby": unref(id)
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "aria-labelledby"
        ]);
      };
    }
  });
  function isNotNull(value) {
    return value !== null;
  }
  function transformOrigin(options) {
    return {
      name: "transformOrigin",
      options,
      fn(data) {
        var _a2, _b2, _c2;
        const { placement, rects, middlewareData } = data;
        const cannotCenterArrow = ((_a2 = middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
        const isArrowHidden = cannotCenterArrow;
        const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
        const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
        const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
        const noArrowAlign = {
          start: "0%",
          center: "50%",
          end: "100%"
        }[placedAlign];
        const arrowXCenter = (((_b2 = middlewareData.arrow) == null ? void 0 : _b2.x) ?? 0) + arrowWidth / 2;
        const arrowYCenter = (((_c2 = middlewareData.arrow) == null ? void 0 : _c2.y) ?? 0) + arrowHeight / 2;
        let x2 = "";
        let y2 = "";
        if (placedSide === "bottom") {
          x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y2 = `${-arrowHeight}px`;
        } else if (placedSide === "top") {
          x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
          y2 = `${rects.floating.height + arrowHeight}px`;
        } else if (placedSide === "right") {
          x2 = `${-arrowHeight}px`;
          y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        } else if (placedSide === "left") {
          x2 = `${rects.floating.width + arrowHeight}px`;
          y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
        }
        return {
          data: {
            x: x2,
            y: y2
          }
        };
      }
    };
  }
  function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
      side,
      align
    ];
  }
  function useSize(element) {
    const size2 = ref();
    const width = computed(() => {
      var _a2;
      return ((_a2 = size2.value) == null ? void 0 : _a2.width) ?? 0;
    });
    const height = computed(() => {
      var _a2;
      return ((_a2 = size2.value) == null ? void 0 : _a2.height) ?? 0;
    });
    onMounted(() => {
      const el = unrefElement(element);
      if (el) {
        size2.value = {
          width: el.offsetWidth,
          height: el.offsetHeight
        };
        const resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries)) return;
          if (!entries.length) return;
          const entry = entries[0];
          let width2;
          let height2;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry.borderBoxSize;
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width2 = borderSize.inlineSize;
            height2 = borderSize.blockSize;
          } else {
            width2 = el.offsetWidth;
            height2 = el.offsetHeight;
          }
          size2.value = {
            width: width2,
            height: height2
          };
        });
        resizeObserver.observe(el, {
          box: "border-box"
        });
        return () => resizeObserver.unobserve(el);
      } else {
        size2.value = void 0;
      }
    });
    return {
      width,
      height
    };
  }
  const PopperContentPropsDefaultValue = {
    side: "bottom",
    sideOffset: 0,
    align: "center",
    alignOffset: 0,
    arrowPadding: 0,
    avoidCollisions: true,
    collisionBoundary: () => [],
    collisionPadding: 0,
    sticky: "partial",
    hideWhenDetached: false,
    positionStrategy: "fixed",
    updatePositionStrategy: "optimized",
    prioritizePosition: false
  };
  const [injectPopperContentContext, providePopperContentContext] = createContext("PopperContent");
  _sfc_main$1w = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "PopperContent",
    props: mergeDefaults({
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    }, {
      ...PopperContentPropsDefaultValue
    }),
    emits: [
      "placed"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectPopperRootContext();
      const { forwardRef, currentElement: contentElement } = useForwardExpose();
      const floatingRef = ref();
      const arrow$12 = ref();
      const { width: arrowWidth, height: arrowHeight } = useSize(arrow$12);
      const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
      const collisionPadding = computed(() => {
        return typeof props.collisionPadding === "number" ? props.collisionPadding : {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...props.collisionPadding
        };
      });
      const boundary = computed(() => {
        return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [
          props.collisionBoundary
        ];
      });
      const detectOverflowOptions = computed(() => {
        return {
          padding: collisionPadding.value,
          boundary: boundary.value.filter(isNotNull),
          altBoundary: boundary.value.length > 0
        };
      });
      const computedMiddleware = computedEager(() => {
        return [
          offset({
            mainAxis: props.sideOffset + arrowHeight.value,
            alignmentAxis: props.alignOffset
          }),
          props.prioritizePosition && props.avoidCollisions && flip({
            ...detectOverflowOptions.value
          }),
          props.avoidCollisions && shift({
            mainAxis: true,
            crossAxis: !!props.prioritizePosition,
            limiter: props.sticky === "partial" ? limitShift() : void 0,
            ...detectOverflowOptions.value
          }),
          !props.prioritizePosition && props.avoidCollisions && flip({
            ...detectOverflowOptions.value
          }),
          size({
            ...detectOverflowOptions.value,
            apply: ({ elements, rects, availableWidth, availableHeight }) => {
              const { width: anchorWidth, height: anchorHeight } = rects.reference;
              const contentStyle = elements.floating.style;
              contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
              contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
              contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
              contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
            }
          }),
          arrow$12.value && arrow({
            element: arrow$12.value,
            padding: props.arrowPadding
          }),
          transformOrigin({
            arrowWidth: arrowWidth.value,
            arrowHeight: arrowHeight.value
          }),
          props.hideWhenDetached && hide({
            strategy: "referenceHidden",
            ...detectOverflowOptions.value
          })
        ];
      });
      const reference = computed(() => props.reference ?? rootContext.anchor.value);
      const { floatingStyles, placement, isPositioned, middlewareData } = useFloating(reference, floatingRef, {
        strategy: props.positionStrategy,
        placement: desiredPlacement,
        whileElementsMounted: (...args) => {
          const cleanup = autoUpdate(...args, {
            layoutShift: !props.disableUpdateOnLayoutShift,
            animationFrame: props.updatePositionStrategy === "always"
          });
          return cleanup;
        },
        middleware: computedMiddleware
      });
      const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
      const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
      watchPostEffect(() => {
        if (isPositioned.value) emits("placed");
      });
      const cannotCenterArrow = computed(() => {
        var _a2;
        return ((_a2 = middlewareData.value.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
      });
      const contentZIndex = ref("");
      watchEffect(() => {
        if (contentElement.value) contentZIndex.value = window.getComputedStyle(contentElement.value).zIndex;
      });
      const arrowX = computed(() => {
        var _a2;
        return ((_a2 = middlewareData.value.arrow) == null ? void 0 : _a2.x) ?? 0;
      });
      const arrowY = computed(() => {
        var _a2;
        return ((_a2 = middlewareData.value.arrow) == null ? void 0 : _a2.y) ?? 0;
      });
      providePopperContentContext({
        placedSide,
        onArrowChange: (element) => arrow$12.value = element,
        arrowX,
        arrowY,
        shouldHideArrow: cannotCenterArrow
      });
      return (_ctx, _cache) => {
        var _a2, _b2, _c2;
        return openBlock(), createElementBlock("div", {
          ref_key: "floatingRef",
          ref: floatingRef,
          "data-reka-popper-content-wrapper": "",
          style: normalizeStyle({
            ...unref(floatingStyles),
            transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: contentZIndex.value,
            ["--reka-popper-transform-origin"]: [
              (_a2 = unref(middlewareData).transformOrigin) == null ? void 0 : _a2.x,
              (_b2 = unref(middlewareData).transformOrigin) == null ? void 0 : _b2.y
            ].join(" "),
            ...((_c2 = unref(middlewareData).hide) == null ? void 0 : _c2.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none"
            }
          })
        }, [
          createVNode(unref(Primitive), mergeProps({
            ref: unref(forwardRef)
          }, _ctx.$attrs, {
            "as-child": props.asChild,
            as: _ctx.as,
            "data-side": placedSide.value,
            "data-align": placedAlign.value,
            style: {
              animation: !unref(isPositioned) ? "none" : void 0
            }
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, [
            "as-child",
            "as",
            "data-side",
            "data-align",
            "style"
          ])
        ], 4);
      };
    }
  });
  const _sfc_main$1v = defineComponent({
    __name: "ListboxContent",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const { CollectionSlot } = useCollection();
      const rootContext = injectListboxRootContext();
      const isClickFocus = refAutoReset(false, 10);
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionSlot), null, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              role: "listbox",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              tabindex: unref(rootContext).focusable.value ? unref(rootContext).highlightedElement.value ? "-1" : "0" : void 0,
              "aria-orientation": unref(rootContext).orientation.value,
              "aria-multiselectable": !!unref(rootContext).multiple.value,
              "data-orientation": unref(rootContext).orientation.value,
              onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => isClickFocus.value = true, [
                "left"
              ])),
              onFocus: _cache[1] || (_cache[1] = (ev) => {
                if (unref(isClickFocus)) return;
                unref(rootContext).onEnter(ev);
              }),
              onKeydown: [
                _cache[2] || (_cache[2] = withKeys(withModifiers((event) => {
                  unref(rootContext).focusable.value ? unref(rootContext).onKeydownNavigation(event) : void 0;
                }, [
                  "prevent"
                ]), [
                  "down",
                  "up",
                  "left",
                  "right",
                  "home",
                  "end"
                ])),
                withKeys(unref(rootContext).onKeydownEnter, [
                  "enter"
                ]),
                unref(rootContext).onKeydownTypeAhead
              ]
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "tabindex",
              "aria-orientation",
              "aria-multiselectable",
              "data-orientation",
              "onKeydown"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const LISTBOX_SELECT = "listbox.select";
  const [injectListboxItemContext, provideListboxItemContext] = createContext("ListboxItem");
  const _sfc_main$1u = defineComponent({
    __name: "ListboxItem",
    props: {
      value: {},
      disabled: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "div"
      }
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const id = useId(void 0, "reka-listbox-item");
      const { CollectionItem } = useCollection();
      const { forwardRef, currentElement } = useForwardExpose();
      const rootContext = injectListboxRootContext();
      const isHighlighted = computed(() => currentElement.value === rootContext.highlightedElement.value);
      const isSelected = computed(() => valueComparator(rootContext.modelValue.value, props.value, rootContext.by));
      const disabled = computed(() => rootContext.disabled.value || props.disabled);
      async function handleSelect(ev) {
        emits("select", ev);
        if (ev == null ? void 0 : ev.defaultPrevented) return;
        if (!disabled.value && ev) {
          rootContext.onValueChange(props.value);
          rootContext.changeHighlight(currentElement.value);
        }
      }
      function handleSelectCustomEvent(ev) {
        const eventDetail = {
          originalEvent: ev,
          value: props.value
        };
        handleAndDispatchCustomEvent$1(LISTBOX_SELECT, handleSelect, eventDetail);
      }
      provideListboxItemContext({
        isSelected
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionItem), {
          value: _ctx.value
        }, {
          default: withCtx(() => [
            withMemo([
              isHighlighted.value,
              isSelected.value
            ], () => createVNode(unref(Primitive), mergeProps({
              id: unref(id)
            }, _ctx.$attrs, {
              ref: unref(forwardRef),
              role: "option",
              tabindex: unref(rootContext).focusable.value ? isHighlighted.value ? "0" : "-1" : -1,
              "aria-selected": isSelected.value,
              as: _ctx.as,
              "as-child": _ctx.asChild,
              disabled: disabled.value ? "" : void 0,
              "data-disabled": disabled.value ? "" : void 0,
              "data-highlighted": isHighlighted.value ? "" : void 0,
              "data-state": isSelected.value ? "checked" : "unchecked",
              onClick: handleSelectCustomEvent,
              onKeydown: withKeys(withModifiers(handleSelectCustomEvent, [
                "prevent"
              ]), [
                "space"
              ]),
              onPointermove: _cache[0] || (_cache[0] = (event) => {
                if (unref(rootContext).highlightedElement.value === unref(currentElement)) return;
                if (unref(rootContext).highlightOnHover.value) unref(rootContext).changeHighlight(unref(currentElement), false);
                else unref(rootContext).focusable.value ? void 0 : unref(rootContext).changeHighlight(unref(currentElement), false);
              })
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "id",
              "tabindex",
              "aria-selected",
              "as",
              "as-child",
              "disabled",
              "data-disabled",
              "data-highlighted",
              "data-state",
              "onKeydown"
            ]), _cache, 1)
          ]),
          _: 3
        }, 8, [
          "value"
        ]);
      };
    }
  });
  const _sfc_main$1t = defineComponent({
    __name: "ListboxItemIndicator",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "span"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      const itemContext = injectListboxItemContext();
      return (_ctx, _cache) => {
        return unref(itemContext).isSelected.value ? (openBlock(), createBlock(unref(Primitive), mergeProps({
          key: 0,
          "aria-hidden": "true"
        }, props), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16)) : createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$4 = {
    key: 0,
    d: "M0 0L6 6L12 0"
  };
  const _hoisted_2$1 = {
    key: 1,
    d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
  };
  const _sfc_main$1s = defineComponent({
    __name: "Arrow",
    props: {
      width: {
        default: 10
      },
      height: {
        default: 5
      },
      rounded: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "svg"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          width: _ctx.width,
          height: _ctx.height,
          viewBox: _ctx.asChild ? void 0 : "0 0 12 6",
          preserveAspectRatio: _ctx.asChild ? void 0 : "none"
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.rounded ? (openBlock(), createElementBlock("path", _hoisted_1$4)) : (openBlock(), createElementBlock("path", _hoisted_2$1))
            ])
          ]),
          _: 3
        }, 16, [
          "width",
          "height",
          "viewBox",
          "preserveAspectRatio"
        ]);
      };
    }
  });
  const OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  _sfc_main$1r = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "PopperArrow",
    props: {
      width: {},
      height: {},
      rounded: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "svg"
      }
    },
    setup(__props) {
      const { forwardRef } = useForwardExpose();
      const contentContext = injectPopperContentContext();
      const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
      return (_ctx, _cache) => {
        var _a2, _b2, _c2, _d2;
        return openBlock(), createElementBlock("span", {
          ref: (el) => {
            unref(contentContext).onArrowChange(el);
            return void 0;
          },
          style: normalizeStyle({
            position: "absolute",
            left: ((_a2 = unref(contentContext).arrowX) == null ? void 0 : _a2.value) ? `${(_b2 = unref(contentContext).arrowX) == null ? void 0 : _b2.value}px` : void 0,
            top: ((_c2 = unref(contentContext).arrowY) == null ? void 0 : _c2.value) ? `${(_d2 = unref(contentContext).arrowY) == null ? void 0 : _d2.value}px` : void 0,
            [baseSide.value]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[unref(contentContext).placedSide.value],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: `rotate(180deg)`,
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[unref(contentContext).placedSide.value],
            visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
          })
        }, [
          createVNode(_sfc_main$1s, mergeProps(_ctx.$attrs, {
            ref: unref(forwardRef),
            style: {
              display: "block"
            },
            as: _ctx.as,
            "as-child": _ctx.asChild,
            rounded: _ctx.rounded,
            width: _ctx.width,
            height: _ctx.height
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, [
            "as",
            "as-child",
            "rounded",
            "width",
            "height"
          ])
        ], 4);
      };
    }
  });
  function useIsUsingKeyboardImpl() {
    const isUsingKeyboard = ref(false);
    onMounted(() => {
      useEventListener("keydown", () => {
        isUsingKeyboard.value = true;
      }, {
        capture: true,
        passive: true
      });
      useEventListener([
        "pointerdown",
        "pointermove"
      ], () => {
        isUsingKeyboard.value = false;
      }, {
        capture: true,
        passive: true
      });
    });
    return isUsingKeyboard;
  }
  const useIsUsingKeyboard = createSharedComposable(useIsUsingKeyboardImpl);
  const [injectMenuContext, provideMenuContext] = createContext([
    "MenuRoot",
    "MenuSub"
  ], "MenuContext");
  const [injectMenuRootContext, provideMenuRootContext] = createContext("MenuRoot");
  const _sfc_main$1q = defineComponent({
    __name: "MenuRoot",
    props: {
      open: {
        type: Boolean,
        default: false
      },
      dir: {},
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { modal: modal2, dir: propDir } = toRefs(props);
      const dir = useDirection(propDir);
      const open = useVModel(props, "open", emits);
      const content = ref();
      const isUsingKeyboardRef = useIsUsingKeyboard();
      provideMenuContext({
        open,
        onOpenChange: (value) => {
          open.value = value;
        },
        content,
        onContentChange: (element) => {
          content.value = element;
        }
      });
      provideMenuRootContext({
        onClose: () => {
          open.value = false;
        },
        isUsingKeyboardRef,
        dir,
        modal: modal2
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1B), null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$1p = defineComponent({
    __name: "MenuAnchor",
    props: {
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1y), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1o = defineComponent({
    __name: "MenuPortal",
    props: {
      to: {},
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1Q), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  let count = 0;
  function useFocusGuards() {
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const edgeGuards = document.querySelectorAll("[data-reka-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
      document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
      count++;
      cleanupFn(() => {
        if (count === 1) {
          document.querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
        }
        count--;
      });
    });
  }
  function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-reka-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
  }
  const [injectMenuContentContext, provideMenuContentContext] = createContext("MenuContent");
  const _sfc_main$1n = defineComponent({
    __name: "MenuContentImpl",
    props: mergeDefaults({
      loop: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      disableOutsideScroll: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    }, {
      ...PopperContentPropsDefaultValue
    }),
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus",
      "dismiss"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const menuContext = injectMenuContext();
      const rootContext = injectMenuRootContext();
      const { trapFocus, disableOutsidePointerEvents, loop } = toRefs(props);
      useFocusGuards();
      useBodyScrollLock(disableOutsidePointerEvents.value);
      const searchRef = ref("");
      const timerRef = ref(0);
      const pointerGraceTimerRef = ref(0);
      const pointerGraceIntentRef = ref(null);
      const pointerDirRef = ref("right");
      const lastPointerXRef = ref(0);
      const currentItemId = ref(null);
      const rovingFocusGroupRef = ref();
      const { forwardRef, currentElement: contentElement } = useForwardExpose();
      const { handleTypeaheadSearch } = useTypeahead();
      watch(contentElement, (el) => {
        menuContext.onContentChange(el);
      });
      onUnmounted(() => {
        window.clearTimeout(timerRef.value);
      });
      function isPointerMovingToSubmenu(event) {
        var _a2, _b2;
        const isMovingTowards = pointerDirRef.value === ((_a2 = pointerGraceIntentRef.value) == null ? void 0 : _a2.side);
        return isMovingTowards && isPointerInGraceArea(event, (_b2 = pointerGraceIntentRef.value) == null ? void 0 : _b2.area);
      }
      async function handleMountAutoFocus(event) {
        var _a2;
        emits("openAutoFocus", event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        (_a2 = contentElement.value) == null ? void 0 : _a2.focus({
          preventScroll: true
        });
      }
      function handleKeyDown(event) {
        var _a2;
        if (event.defaultPrevented) return;
        const target = event.target;
        const isKeyDownInside = target.closest("[data-reka-menu-content]") === event.currentTarget;
        const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
        const isCharacterKey = event.key.length === 1;
        const el = useArrowNavigation(event, getActiveElement(), contentElement.value, {
          loop: loop.value,
          arrowKeyOptions: "vertical",
          dir: rootContext == null ? void 0 : rootContext.dir.value,
          focus: true,
          attributeName: "[data-reka-collection-item]:not([data-disabled])"
        });
        if (el) return el == null ? void 0 : el.focus();
        if (event.code === "Space") return;
        const collectionItems = ((_a2 = rovingFocusGroupRef.value) == null ? void 0 : _a2.getItems()) ?? [];
        if (isKeyDownInside) {
          if (event.key === "Tab") event.preventDefault();
          if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key, collectionItems);
        }
        if (event.target !== contentElement.value) return;
        if (!FIRST_LAST_KEYS.includes(event.key)) return;
        event.preventDefault();
        const candidateNodes = [
          ...collectionItems.map((item) => item.ref)
        ];
        if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
        focusFirst$3(candidateNodes);
      }
      function handleBlur(event) {
        var _a2, _b2;
        if (!((_b2 = (_a2 = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a2.contains) == null ? void 0 : _b2.call(_a2, event.target))) {
          window.clearTimeout(timerRef.value);
          searchRef.value = "";
        }
      }
      function handlePointerMove(event) {
        var _a2;
        if (!isMouseEvent(event)) return;
        const target = event.target;
        const pointerXHasChanged = lastPointerXRef.value !== event.clientX;
        if (((_a2 = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a2.contains(target)) && pointerXHasChanged) {
          const newDir = event.clientX > lastPointerXRef.value ? "right" : "left";
          pointerDirRef.value = newDir;
          lastPointerXRef.value = event.clientX;
        }
      }
      provideMenuContentContext({
        onItemEnter: (event) => {
          if (isPointerMovingToSubmenu(event)) return true;
          else return false;
        },
        onItemLeave: (event) => {
          var _a2;
          if (isPointerMovingToSubmenu(event)) return;
          (_a2 = contentElement.value) == null ? void 0 : _a2.focus();
          currentItemId.value = null;
        },
        onTriggerLeave: (event) => {
          if (isPointerMovingToSubmenu(event)) return true;
          else return false;
        },
        searchRef,
        pointerGraceTimerRef,
        onPointerGraceIntentChange: (intent) => {
          pointerGraceIntentRef.value = intent;
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1O), {
          "as-child": "",
          trapped: unref(trapFocus),
          onMountAutoFocus: handleMountAutoFocus,
          onUnmountAutoFocus: _cache[7] || (_cache[7] = ($event) => emits("closeAutoFocus", $event))
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$1P), {
              "as-child": "",
              "disable-outside-pointer-events": unref(disableOutsidePointerEvents),
              onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
              onPointerDownOutside: _cache[3] || (_cache[3] = ($event) => emits("pointerDownOutside", $event)),
              onFocusOutside: _cache[4] || (_cache[4] = ($event) => emits("focusOutside", $event)),
              onInteractOutside: _cache[5] || (_cache[5] = ($event) => emits("interactOutside", $event)),
              onDismiss: _cache[6] || (_cache[6] = ($event) => emits("dismiss"))
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$1E), {
                  ref_key: "rovingFocusGroupRef",
                  ref: rovingFocusGroupRef,
                  "current-tab-stop-id": currentItemId.value,
                  "onUpdate:currentTabStopId": _cache[0] || (_cache[0] = ($event) => currentItemId.value = $event),
                  "as-child": "",
                  orientation: "vertical",
                  dir: unref(rootContext).dir.value,
                  loop: unref(loop),
                  onEntryFocus: _cache[1] || (_cache[1] = (event) => {
                    emits("entryFocus", event);
                    if (!unref(rootContext).isUsingKeyboardRef.value) event.preventDefault();
                  })
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1w), {
                      ref: unref(forwardRef),
                      role: "menu",
                      as: _ctx.as,
                      "as-child": _ctx.asChild,
                      "aria-orientation": "vertical",
                      "data-reka-menu-content": "",
                      "data-state": unref(getOpenState$1)(unref(menuContext).open.value),
                      dir: unref(rootContext).dir.value,
                      side: _ctx.side,
                      "side-offset": _ctx.sideOffset,
                      align: _ctx.align,
                      "align-offset": _ctx.alignOffset,
                      "avoid-collisions": _ctx.avoidCollisions,
                      "collision-boundary": _ctx.collisionBoundary,
                      "collision-padding": _ctx.collisionPadding,
                      "arrow-padding": _ctx.arrowPadding,
                      "prioritize-position": _ctx.prioritizePosition,
                      "position-strategy": _ctx.positionStrategy,
                      "update-position-strategy": _ctx.updatePositionStrategy,
                      sticky: _ctx.sticky,
                      "hide-when-detached": _ctx.hideWhenDetached,
                      reference: _ctx.reference,
                      onKeydown: handleKeyDown,
                      onBlur: handleBlur,
                      onPointermove: handlePointerMove
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, [
                      "as",
                      "as-child",
                      "data-state",
                      "dir",
                      "side",
                      "side-offset",
                      "align",
                      "align-offset",
                      "avoid-collisions",
                      "collision-boundary",
                      "collision-padding",
                      "arrow-padding",
                      "prioritize-position",
                      "position-strategy",
                      "update-position-strategy",
                      "sticky",
                      "hide-when-detached",
                      "reference"
                    ])
                  ]),
                  _: 3
                }, 8, [
                  "current-tab-stop-id",
                  "dir",
                  "loop"
                ])
              ]),
              _: 3
            }, 8, [
              "disable-outside-pointer-events"
            ])
          ]),
          _: 3
        }, 8, [
          "trapped"
        ]);
      };
    }
  });
  const _sfc_main$1m = defineComponent({
    __name: "MenuRootContentModal",
    props: {
      loop: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      const menuContext = injectMenuContext();
      const { forwardRef, currentElement } = useForwardExpose();
      useHideOthers(currentElement);
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1n, mergeProps(unref(forwarded), {
          ref: unref(forwardRef),
          "trap-focus": unref(menuContext).open.value,
          "disable-outside-pointer-events": unref(menuContext).open.value,
          "disable-outside-scroll": true,
          onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false)),
          onFocusOutside: _cache[1] || (_cache[1] = withModifiers(($event) => emits("focusOutside", $event), [
            "prevent"
          ]))
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "trap-focus",
          "disable-outside-pointer-events"
        ]);
      };
    }
  });
  const _sfc_main$1l = defineComponent({
    __name: "MenuRootContentNonModal",
    props: {
      loop: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      const menuContext = injectMenuContext();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1n, mergeProps(unref(forwarded), {
          "trap-focus": false,
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false))
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1k = defineComponent({
    __name: "MenuContent",
    props: {
      forceMount: {
        type: Boolean
      },
      loop: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      const menuContext = injectMenuContext();
      const rootContext = injectMenuRootContext();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || unref(menuContext).open.value
        }, {
          default: withCtx(() => [
            unref(rootContext).modal.value ? (openBlock(), createBlock(_sfc_main$1m, normalizeProps$1(mergeProps({
              key: 0
            }, {
              ..._ctx.$attrs,
              ...unref(forwarded)
            })), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16)) : (openBlock(), createBlock(_sfc_main$1l, normalizeProps$1(mergeProps({
              key: 1
            }, {
              ..._ctx.$attrs,
              ...unref(forwarded)
            })), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16))
          ]),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const _sfc_main$1j = defineComponent({
    __name: "MenuArrow",
    props: {
      width: {},
      height: {},
      rounded: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1r), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1i = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "MenuItemImpl",
    props: {
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const contentContext = injectMenuContentContext();
      const { forwardRef } = useForwardExpose();
      const { CollectionItem } = useCollection();
      const isFocused = ref(false);
      async function handlePointerMove(event) {
        if (event.defaultPrevented) return;
        if (!isMouseEvent(event)) return;
        if (props.disabled) {
          contentContext.onItemLeave(event);
        } else {
          const defaultPrevented = contentContext.onItemEnter(event);
          if (!defaultPrevented) {
            const item = event.currentTarget;
            item == null ? void 0 : item.focus({
              preventScroll: true
            });
          }
        }
      }
      async function handlePointerLeave(event) {
        await nextTick();
        if (event.defaultPrevented) return;
        if (!isMouseEvent(event)) return;
        contentContext.onItemLeave(event);
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionItem), {
          value: {
            textValue: _ctx.textValue
          }
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), mergeProps({
              ref: unref(forwardRef),
              role: "menuitem",
              tabindex: "-1"
            }, _ctx.$attrs, {
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "aria-disabled": _ctx.disabled || void 0,
              "data-disabled": _ctx.disabled ? "" : void 0,
              "data-highlighted": isFocused.value ? "" : void 0,
              onPointermove: handlePointerMove,
              onPointerleave: handlePointerLeave,
              onFocus: _cache[0] || (_cache[0] = async (event) => {
                await nextTick();
                if (event.defaultPrevented || _ctx.disabled) return;
                isFocused.value = true;
              }),
              onBlur: _cache[1] || (_cache[1] = async (event) => {
                await nextTick();
                if (event.defaultPrevented) return;
                isFocused.value = false;
              })
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "as",
              "as-child",
              "aria-disabled",
              "data-disabled",
              "data-highlighted"
            ])
          ]),
          _: 3
        }, 8, [
          "value"
        ]);
      };
    }
  });
  const _sfc_main$1h = defineComponent({
    __name: "MenuItem",
    props: {
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { forwardRef, currentElement } = useForwardExpose();
      const rootContext = injectMenuRootContext();
      const contentContext = injectMenuContentContext();
      const isPointerDownRef = ref(false);
      async function handleSelect() {
        const menuItem = currentElement.value;
        if (!props.disabled && menuItem) {
          const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
            bubbles: true,
            cancelable: true
          });
          emits("select", itemSelectEvent);
          await nextTick();
          if (itemSelectEvent.defaultPrevented) isPointerDownRef.value = false;
          else rootContext.onClose();
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1i, mergeProps(props, {
          ref: unref(forwardRef),
          onClick: handleSelect,
          onPointerdown: _cache[0] || (_cache[0] = () => {
            isPointerDownRef.value = true;
          }),
          onPointerup: _cache[1] || (_cache[1] = async (event) => {
            var _a2;
            await nextTick();
            if (event.defaultPrevented) return;
            if (!isPointerDownRef.value) (_a2 = event.currentTarget) == null ? void 0 : _a2.click();
          }),
          onKeydown: _cache[2] || (_cache[2] = async (event) => {
            const isTypingAhead = unref(contentContext).searchRef.value !== "";
            if (_ctx.disabled || isTypingAhead && event.key === " ") return;
            if (unref(SELECTION_KEYS).includes(event.key)) {
              event.currentTarget.click();
              event.preventDefault();
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1g = defineComponent({
    __name: "MenuGroup",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps({
          role: "group"
        }, props), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1f = defineComponent({
    __name: "MenuSeparator",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          role: "separator",
          "aria-orientation": "horizontal"
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext] = createContext([
    "MenuCheckboxItem",
    "MenuRadioItem"
  ], "MenuItemIndicatorContext");
  const _sfc_main$1e = defineComponent({
    __name: "MenuItemIndicator",
    props: {
      forceMount: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "span"
      }
    },
    setup(__props) {
      const indicatorContext = injectMenuItemIndicatorContext({
        modelValue: ref(false)
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || unref(isIndeterminate)(unref(indicatorContext).modelValue.value) || unref(indicatorContext).modelValue.value === true
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "data-state": unref(getCheckedState)(unref(indicatorContext).modelValue.value)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "data-state"
            ])
          ]),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const _sfc_main$1d = defineComponent({
    __name: "MenuCheckboxItem",
    props: {
      modelValue: {
        type: [
          Boolean,
          String
        ],
        default: false
      },
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select",
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const modelValue = useVModel(props, "modelValue", emits);
      provideMenuItemIndicatorContext({
        modelValue
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1h, mergeProps({
          role: "menuitemcheckbox"
        }, props, {
          "aria-checked": unref(isIndeterminate)(unref(modelValue)) ? "mixed" : unref(modelValue),
          "data-state": unref(getCheckedState)(unref(modelValue)),
          onSelect: _cache[0] || (_cache[0] = async (event) => {
            emits("select", event);
            if (unref(isIndeterminate)(unref(modelValue))) {
              modelValue.value = true;
            } else {
              modelValue.value = !unref(modelValue);
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              modelValue: unref(modelValue)
            })
          ]),
          _: 3
        }, 16, [
          "aria-checked",
          "data-state"
        ]);
      };
    }
  });
  const _sfc_main$1c = defineComponent({
    __name: "MenuLabel",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "div"
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const [injectMenuRadioGroupContext, provideMenuRadioGroupContext] = createContext("MenuRadioGroup");
  const _sfc_main$1b = defineComponent({
    __name: "MenuRadioGroup",
    props: {
      modelValue: {
        default: ""
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const modelValue = useVModel(props, "modelValue", emits);
      provideMenuRadioGroupContext({
        modelValue,
        onValueChange: (payload) => {
          modelValue.value = payload;
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1g, normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              modelValue: unref(modelValue)
            })
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$1a = defineComponent({
    __name: "MenuRadioItem",
    props: {
      value: {},
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { value } = toRefs(props);
      const radioGroupContext = injectMenuRadioGroupContext();
      const modelValue = computed(() => radioGroupContext.modelValue.value === (value == null ? void 0 : value.value));
      provideMenuItemIndicatorContext({
        modelValue
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1h, mergeProps({
          role: "menuitemradio"
        }, props, {
          "aria-checked": modelValue.value,
          "data-state": unref(getCheckedState)(modelValue.value),
          onSelect: _cache[0] || (_cache[0] = async (event) => {
            emits("select", event);
            unref(radioGroupContext).onValueChange(unref(value));
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "aria-checked",
          "data-state"
        ]);
      };
    }
  });
  const [injectMenuSubContext, provideMenuSubContext] = createContext("MenuSub");
  const _sfc_main$19 = defineComponent({
    __name: "MenuSub",
    props: {
      open: {
        type: Boolean,
        default: void 0
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const open = useVModel(props, "open", emits, {
        defaultValue: false,
        passive: props.open === void 0
      });
      const parentMenuContext = injectMenuContext();
      const trigger = ref();
      const content = ref();
      watchEffect((cleanupFn) => {
        if ((parentMenuContext == null ? void 0 : parentMenuContext.open.value) === false) open.value = false;
        cleanupFn(() => open.value = false);
      });
      provideMenuContext({
        open,
        onOpenChange: (value) => {
          open.value = value;
        },
        content,
        onContentChange: (element) => {
          content.value = element;
        }
      });
      provideMenuSubContext({
        triggerId: "",
        contentId: "",
        trigger,
        onTriggerChange: (element) => {
          trigger.value = element;
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1B), null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$18 = defineComponent({
    __name: "MenuSubContent",
    props: {
      forceMount: {
        type: Boolean
      },
      loop: {
        type: Boolean
      },
      sideOffset: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean,
        default: true
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      const menuContext = injectMenuContext();
      const rootContext = injectMenuRootContext();
      const menuSubContext = injectMenuSubContext();
      const { forwardRef, currentElement: subContentElement } = useForwardExpose();
      menuSubContext.contentId || (menuSubContext.contentId = useId(void 0, "reka-menu-sub-content"));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || unref(menuContext).open.value
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1n, mergeProps(unref(forwarded), {
              id: unref(menuSubContext).contentId,
              ref: unref(forwardRef),
              "aria-labelledby": unref(menuSubContext).triggerId,
              align: "start",
              side: unref(rootContext).dir.value === "rtl" ? "left" : "right",
              "disable-outside-pointer-events": false,
              "disable-outside-scroll": false,
              "trap-focus": false,
              onOpenAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
                var _a2;
                if (unref(rootContext).isUsingKeyboardRef.value) (_a2 = unref(subContentElement)) == null ? void 0 : _a2.focus();
              }, [
                "prevent"
              ])),
              onCloseAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {
              }, [
                "prevent"
              ])),
              onFocusOutside: _cache[2] || (_cache[2] = (event) => {
                if (event.defaultPrevented) return;
                if (event.target !== unref(menuSubContext).trigger.value) unref(menuContext).onOpenChange(false);
              }),
              onEscapeKeyDown: _cache[3] || (_cache[3] = (event) => {
                unref(rootContext).onClose();
                event.preventDefault();
              }),
              onKeydown: _cache[4] || (_cache[4] = (event) => {
                var _a2, _b2;
                const isKeyDownInside = (_a2 = event.currentTarget) == null ? void 0 : _a2.contains(event.target);
                const isCloseKey = unref(SUB_CLOSE_KEYS)[unref(rootContext).dir.value].includes(event.key);
                if (isKeyDownInside && isCloseKey) {
                  unref(menuContext).onOpenChange(false);
                  (_b2 = unref(menuSubContext).trigger.value) == null ? void 0 : _b2.focus();
                  event.preventDefault();
                }
              })
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "id",
              "aria-labelledby",
              "side"
            ])
          ]),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const _sfc_main$17 = defineComponent({
    __name: "MenuSubTrigger",
    props: {
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const menuContext = injectMenuContext();
      const rootContext = injectMenuRootContext();
      const subContext = injectMenuSubContext();
      const contentContext = injectMenuContentContext();
      const openTimerRef = ref(null);
      subContext.triggerId || (subContext.triggerId = useId(void 0, "reka-menu-sub-trigger"));
      function clearOpenTimer() {
        if (openTimerRef.value) window.clearTimeout(openTimerRef.value);
        openTimerRef.value = null;
      }
      onUnmounted(() => {
        clearOpenTimer();
      });
      function handlePointerMove(event) {
        if (!isMouseEvent(event)) return;
        const defaultPrevented = contentContext.onItemEnter(event);
        if (defaultPrevented) return;
        if (!props.disabled && !menuContext.open.value && !openTimerRef.value) {
          contentContext.onPointerGraceIntentChange(null);
          openTimerRef.value = window.setTimeout(() => {
            menuContext.onOpenChange(true);
            clearOpenTimer();
          }, 100);
        }
      }
      async function handlePointerLeave(event) {
        var _a2, _b2;
        if (!isMouseEvent(event)) return;
        clearOpenTimer();
        const contentRect = (_a2 = menuContext.content.value) == null ? void 0 : _a2.getBoundingClientRect();
        if (contentRect == null ? void 0 : contentRect.width) {
          const side = (_b2 = menuContext.content.value) == null ? void 0 : _b2.dataset.side;
          const rightSide = side === "right";
          const bleed = rightSide ? -5 : 5;
          const contentNearEdge = contentRect[rightSide ? "left" : "right"];
          const contentFarEdge = contentRect[rightSide ? "right" : "left"];
          contentContext.onPointerGraceIntentChange({
            area: [
              {
                x: event.clientX + bleed,
                y: event.clientY
              },
              {
                x: contentNearEdge,
                y: contentRect.top
              },
              {
                x: contentFarEdge,
                y: contentRect.top
              },
              {
                x: contentFarEdge,
                y: contentRect.bottom
              },
              {
                x: contentNearEdge,
                y: contentRect.bottom
              }
            ],
            side
          });
          window.clearTimeout(contentContext.pointerGraceTimerRef.value);
          contentContext.pointerGraceTimerRef.value = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
        } else {
          const defaultPrevented = contentContext.onTriggerLeave(event);
          if (defaultPrevented) return;
          contentContext.onPointerGraceIntentChange(null);
        }
      }
      async function handleKeyDown(event) {
        var _a2;
        const isTypingAhead = contentContext.searchRef.value !== "";
        if (props.disabled || isTypingAhead && event.key === " ") return;
        if (SUB_OPEN_KEYS[rootContext.dir.value].includes(event.key)) {
          menuContext.onOpenChange(true);
          await nextTick();
          (_a2 = menuContext.content.value) == null ? void 0 : _a2.focus();
          event.preventDefault();
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1p, {
          "as-child": ""
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1i, mergeProps(props, {
              id: unref(subContext).triggerId,
              ref: (vnode) => {
                var _a2;
                (_a2 = unref(subContext)) == null ? void 0 : _a2.onTriggerChange(vnode == null ? void 0 : vnode.$el);
                return void 0;
              },
              "aria-haspopup": "menu",
              "aria-expanded": unref(menuContext).open.value,
              "aria-controls": unref(subContext).contentId,
              "data-state": unref(getOpenState$1)(unref(menuContext).open.value),
              onClick: _cache[0] || (_cache[0] = async (event) => {
                if (props.disabled || event.defaultPrevented) return;
                event.currentTarget.focus();
                if (!unref(menuContext).open.value) unref(menuContext).onOpenChange(true);
              }),
              onPointermove: handlePointerMove,
              onPointerleave: handlePointerLeave,
              onKeydown: handleKeyDown
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "id",
              "aria-expanded",
              "aria-controls",
              "data-state"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$16 = defineComponent({
    __name: "DialogPortal",
    props: {
      to: {},
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1Q), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const [injectDropdownMenuRootContext, provideDropdownMenuRootContext] = createContext("DropdownMenuRoot");
  const _sfc_main$15 = defineComponent({
    __name: "DropdownMenuRoot",
    props: {
      defaultOpen: {
        type: Boolean
      },
      open: {
        type: Boolean,
        default: void 0
      },
      dir: {},
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      useForwardExpose();
      const open = useVModel(props, "open", emit, {
        defaultValue: props.defaultOpen,
        passive: props.open === void 0
      });
      const triggerElement = ref();
      const { modal: modal2, dir: propDir } = toRefs(props);
      const dir = useDirection(propDir);
      provideDropdownMenuRootContext({
        open,
        onOpenChange: (value) => {
          open.value = value;
        },
        onOpenToggle: () => {
          open.value = !open.value;
        },
        triggerId: "",
        triggerElement,
        contentId: "",
        modal: modal2,
        dir
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1q), {
          open: unref(open),
          "onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null),
          dir: unref(dir),
          modal: unref(modal2)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              open: unref(open)
            })
          ]),
          _: 3
        }, 8, [
          "open",
          "dir",
          "modal"
        ]);
      };
    }
  });
  const _sfc_main$14 = defineComponent({
    __name: "DropdownMenuTrigger",
    props: {
      disabled: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      const rootContext = injectDropdownMenuRootContext();
      const { forwardRef, currentElement: triggerElement } = useForwardExpose();
      onMounted(() => {
        rootContext.triggerElement = triggerElement;
      });
      rootContext.triggerId || (rootContext.triggerId = useId(void 0, "reka-dropdown-menu-trigger"));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1p), {
          "as-child": ""
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              id: unref(rootContext).triggerId,
              ref: unref(forwardRef),
              type: _ctx.as === "button" ? "button" : void 0,
              "as-child": props.asChild,
              as: _ctx.as,
              "aria-haspopup": "menu",
              "aria-expanded": unref(rootContext).open.value,
              "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
              "data-disabled": _ctx.disabled ? "" : void 0,
              disabled: _ctx.disabled,
              "data-state": unref(rootContext).open.value ? "open" : "closed",
              onClick: _cache[0] || (_cache[0] = async (event) => {
                var _a2;
                if (!_ctx.disabled && event.button === 0 && event.ctrlKey === false) {
                  (_a2 = unref(rootContext)) == null ? void 0 : _a2.onOpenToggle();
                  await nextTick();
                  if (unref(rootContext).open.value) event.preventDefault();
                }
              }),
              onKeydown: _cache[1] || (_cache[1] = withKeys((event) => {
                if (_ctx.disabled) return;
                if ([
                  "Enter",
                  " "
                ].includes(event.key)) unref(rootContext).onOpenToggle();
                if (event.key === "ArrowDown") unref(rootContext).onOpenChange(true);
                if ([
                  "Enter",
                  " ",
                  "ArrowDown"
                ].includes(event.key)) event.preventDefault();
              }, [
                "enter",
                "space",
                "arrow-down"
              ]))
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "id",
              "type",
              "as-child",
              "as",
              "aria-expanded",
              "aria-controls",
              "data-disabled",
              "disabled",
              "data-state"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$13 = defineComponent({
    __name: "DropdownMenuPortal",
    props: {
      to: {},
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1o), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$12 = defineComponent({
    __name: "DropdownMenuContent",
    props: {
      forceMount: {
        type: Boolean
      },
      loop: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      useForwardExpose();
      const rootContext = injectDropdownMenuRootContext();
      const hasInteractedOutsideRef = ref(false);
      function handleCloseAutoFocus(event) {
        if (event.defaultPrevented) return;
        if (!hasInteractedOutsideRef.value) {
          setTimeout(() => {
            var _a2;
            (_a2 = rootContext.triggerElement.value) == null ? void 0 : _a2.focus();
          }, 0);
        }
        hasInteractedOutsideRef.value = false;
        event.preventDefault();
      }
      rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-dropdown-menu-content"));
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(_sfc_main$1k), mergeProps(unref(forwarded), {
          id: unref(rootContext).contentId,
          "aria-labelledby": (_a2 = unref(rootContext)) == null ? void 0 : _a2.triggerId,
          style: {
            "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
            "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
            "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
          },
          onCloseAutoFocus: handleCloseAutoFocus,
          onInteractOutside: _cache[0] || (_cache[0] = (event) => {
            var _a3;
            if (event.defaultPrevented) return;
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!unref(rootContext).modal.value || isRightClick) hasInteractedOutsideRef.value = true;
            if ((_a3 = unref(rootContext).triggerElement.value) == null ? void 0 : _a3.contains(event.target)) event.preventDefault();
          })
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "id",
          "aria-labelledby"
        ]);
      };
    }
  });
  const _sfc_main$11 = defineComponent({
    __name: "DropdownMenuArrow",
    props: {
      width: {
        default: 10
      },
      height: {
        default: 5
      },
      rounded: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "svg"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1j), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$10 = defineComponent({
    __name: "DropdownMenuItem",
    props: {
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const emitsAsProps = useEmitAsProps(emits);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1h), normalizeProps$1(guardReactiveProps({
          ...props,
          ...unref(emitsAsProps)
        })), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$$ = defineComponent({
    __name: "DropdownMenuGroup",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1g), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$_ = defineComponent({
    __name: "DropdownMenuSeparator",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1f), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$Z = defineComponent({
    __name: "DropdownMenuCheckboxItem",
    props: {
      modelValue: {
        type: [
          Boolean,
          String
        ]
      },
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select",
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const emitsAsProps = useEmitAsProps(emits);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1d), normalizeProps$1(guardReactiveProps({
          ...props,
          ...unref(emitsAsProps)
        })), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$Y = defineComponent({
    __name: "DropdownMenuItemIndicator",
    props: {
      forceMount: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1e), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$X = defineComponent({
    __name: "DropdownMenuLabel",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1c), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$W = defineComponent({
    __name: "DropdownMenuRadioGroup",
    props: {
      modelValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const emitsAsProps = useEmitAsProps(emits);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1b), normalizeProps$1(guardReactiveProps({
          ...props,
          ...unref(emitsAsProps)
        })), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$V = defineComponent({
    __name: "DropdownMenuRadioItem",
    props: {
      value: {},
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1a), normalizeProps$1(guardReactiveProps(unref(forwarded))), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$U = defineComponent({
    __name: "DropdownMenuSub",
    props: {
      defaultOpen: {
        type: Boolean
      },
      open: {
        type: Boolean,
        default: void 0
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const open = useVModel(props, "open", emit, {
        passive: props.open === void 0,
        defaultValue: props.defaultOpen ?? false
      });
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$19), {
          open: unref(open),
          "onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {
              open: unref(open)
            })
          ]),
          _: 3
        }, 8, [
          "open"
        ]);
      };
    }
  });
  const _sfc_main$T = defineComponent({
    __name: "DropdownMenuSubContent",
    props: {
      forceMount: {
        type: Boolean
      },
      loop: {
        type: Boolean
      },
      sideOffset: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "entryFocus",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(props, emits);
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$18), mergeProps(unref(forwarded), {
          style: {
            "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
            "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
            "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
          }
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$S = defineComponent({
    __name: "DropdownMenuSubTrigger",
    props: {
      disabled: {
        type: Boolean
      },
      textValue: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$17), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$R = defineComponent({
    __name: "ListboxGroupLabel",
    props: {
      for: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: "div"
      }
    },
    setup(__props) {
      const props = __props;
      const groupContext = injectListboxGroupContext({
        id: ""
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
          id: unref(groupContext).id
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "id"
        ]);
      };
    }
  });
  const [injectNavigationMenuContext, provideNavigationMenuContext] = createContext([
    "NavigationMenuRoot",
    "NavigationMenuSub"
  ], "NavigationMenuContext");
  const _sfc_main$Q = defineComponent({
    __name: "NavigationMenuRoot",
    props: {
      modelValue: {
        default: void 0
      },
      defaultValue: {},
      dir: {},
      orientation: {
        default: "horizontal"
      },
      delayDuration: {
        default: 200
      },
      skipDelayDuration: {
        default: 300
      },
      disableClickTrigger: {
        type: Boolean,
        default: false
      },
      disableHoverTrigger: {
        type: Boolean,
        default: false
      },
      disablePointerLeaveClose: {
        type: Boolean
      },
      unmountOnHide: {
        type: Boolean,
        default: true
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "nav"
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const modelValue = useVModel(props, "modelValue", emits, {
        defaultValue: props.defaultValue ?? "",
        passive: props.modelValue === void 0
      });
      const previousValue = ref("");
      const { forwardRef, currentElement: rootNavigationMenu } = useForwardExpose();
      const indicatorTrack = ref();
      const viewport = ref();
      const activeTrigger = ref();
      const { getItems, CollectionSlot } = useCollection({
        key: "NavigationMenu",
        isProvider: true
      });
      const { delayDuration, skipDelayDuration, dir: propDir, disableClickTrigger, disableHoverTrigger, unmountOnHide } = toRefs(props);
      const dir = useDirection(propDir);
      const isDelaySkipped = refAutoReset(false, skipDelayDuration);
      const computedDelay = computed(() => {
        const isOpen = modelValue.value !== "";
        if (isOpen || isDelaySkipped.value) return 150;
        else return delayDuration.value;
      });
      const debouncedFn = useDebounceFn((val) => {
        if (typeof val === "string") {
          previousValue.value = modelValue.value;
          modelValue.value = val;
        }
      }, computedDelay);
      watchEffect(() => {
        if (!modelValue.value) return;
        const items = getItems().map((i2) => i2.ref);
        activeTrigger.value = items.find((item) => item.id.includes(modelValue.value));
      });
      provideNavigationMenuContext({
        isRootMenu: true,
        modelValue,
        previousValue,
        baseId: useId(void 0, "reka-navigation-menu"),
        disableClickTrigger,
        disableHoverTrigger,
        dir,
        unmountOnHide,
        orientation: props.orientation,
        rootNavigationMenu,
        indicatorTrack,
        activeTrigger,
        onIndicatorTrackChange: (val) => {
          indicatorTrack.value = val;
        },
        viewport,
        onViewportChange: (val) => {
          viewport.value = val;
        },
        onTriggerEnter: (val) => {
          debouncedFn(val);
        },
        onTriggerLeave: () => {
          isDelaySkipped.value = true;
          debouncedFn("");
        },
        onContentEnter: () => {
          debouncedFn();
        },
        onContentLeave: () => {
          if (!props.disablePointerLeaveClose) debouncedFn("");
        },
        onItemSelect: (val) => {
          previousValue.value = modelValue.value;
          modelValue.value = val;
        },
        onItemDismiss: () => {
          previousValue.value = modelValue.value;
          modelValue.value = "";
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionSlot), null, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              ref: unref(forwardRef),
              "aria-label": "Main",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "data-orientation": _ctx.orientation,
              dir: unref(dir),
              "data-reka-navigation-menu": ""
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  modelValue: unref(modelValue)
                })
              ]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "data-orientation",
              "dir"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  function getOpenState(open) {
    return open ? "open" : "closed";
  }
  function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
  }
  function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
  }
  const LINK_SELECT = "navigationMenu.linkSelect";
  const EVENT_ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
  function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }
  function focusFirst(candidates) {
    const previouslyFocusedElement = getActiveElement();
    return candidates.some((candidate) => {
      if (candidate === previouslyFocusedElement) return true;
      candidate.focus();
      return getActiveElement() !== previouslyFocusedElement;
    });
  }
  function removeFromTabOrder(candidates) {
    candidates.forEach((candidate) => {
      candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
      candidate.setAttribute("tabindex", "-1");
    });
    return () => {
      candidates.forEach((candidate) => {
        const prevTabIndex = candidate.dataset.tabindex;
        candidate.setAttribute("tabindex", prevTabIndex);
      });
    };
  }
  function whenMouse(handler) {
    return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
  }
  const [injectNavigationMenuItemContext, provideNavigationMenuItemContext] = createContext("NavigationMenuItem");
  const _sfc_main$P = defineComponent({
    __name: "NavigationMenuItem",
    props: {
      value: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: "li"
      }
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      const { getItems } = useCollection({
        key: "NavigationMenu"
      });
      const context2 = injectNavigationMenuContext();
      const value = useId(props.value);
      const triggerRef = ref();
      const focusProxyRef = ref();
      const contentId = makeContentId(context2.baseId, value);
      let restoreContentTabOrderRef = () => ({});
      const wasEscapeCloseRef = ref(false);
      async function handleContentEntry(side = "start") {
        const el = document.getElementById(contentId);
        if (el) {
          restoreContentTabOrderRef();
          const candidates = getTabbableCandidates(el);
          if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
        }
      }
      function handleContentExit() {
        const el = document.getElementById(contentId);
        if (el) {
          const candidates = getTabbableCandidates(el);
          if (candidates.length) restoreContentTabOrderRef = removeFromTabOrder(candidates);
        }
      }
      provideNavigationMenuItemContext({
        value,
        contentId,
        triggerRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onContentFocusOutside: handleContentExit,
        onRootContentClose: handleContentExit
      });
      function handleClose() {
        var _a2;
        context2.onItemDismiss();
        (_a2 = triggerRef.value) == null ? void 0 : _a2.focus();
      }
      function handleKeydown(ev) {
        const currentFocus = getActiveElement();
        if (ev.keyCode === 32 || ev.key === "Enter") {
          if (context2.modelValue.value === value) {
            handleClose();
            ev.preventDefault();
            return;
          } else {
            ev.target.click();
            ev.preventDefault();
            return;
          }
        }
        const itemsArray = getItems().filter((i2) => {
          var _a2;
          return (_a2 = i2.ref.parentElement) == null ? void 0 : _a2.hasAttribute("data-menu-item");
        }).map((i2) => i2.ref);
        if (!itemsArray.includes(currentFocus)) return;
        const newSelectedElement = useArrowNavigation(ev, currentFocus, void 0, {
          itemsArray,
          loop: false
        });
        if (newSelectedElement) newSelectedElement == null ? void 0 : newSelectedElement.focus();
        ev.preventDefault();
        ev.stopPropagation();
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "data-menu-item": "",
          onKeydown: withKeys(handleKeydown, [
            "up",
            "down",
            "left",
            "right",
            "home",
            "end",
            "space"
          ])
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as-child",
          "as"
        ]);
      };
    }
  });
  const _sfc_main$O = defineComponent({
    __name: "NavigationMenuContentImpl",
    props: {
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { getItems } = useCollection({
        key: "NavigationMenu"
      });
      const { forwardRef, currentElement } = useForwardExpose();
      const menuContext = injectNavigationMenuContext();
      const itemContext = injectNavigationMenuItemContext();
      const triggerId = makeTriggerId(menuContext.baseId, itemContext.value);
      const contentId = makeContentId(menuContext.baseId, itemContext.value);
      const prevMotionAttributeRef = ref(null);
      const motionAttribute = computed(() => {
        const values = getItems().map((i2) => i2.ref.id.split("trigger-")[1]);
        if (menuContext.dir.value === "rtl") values.reverse();
        const index2 = values.indexOf(menuContext.modelValue.value);
        const prevIndex = values.indexOf(menuContext.previousValue.value);
        const isSelected = itemContext.value === menuContext.modelValue.value;
        const wasSelected = prevIndex === values.indexOf(itemContext.value);
        if (!isSelected && !wasSelected) return prevMotionAttributeRef.value;
        const attribute = (() => {
          if (index2 !== prevIndex) {
            if (isSelected && prevIndex !== -1) return index2 > prevIndex ? "from-end" : "from-start";
            if (wasSelected && index2 !== -1) return index2 > prevIndex ? "to-start" : "to-end";
          }
          return null;
        })();
        prevMotionAttributeRef.value = attribute;
        return attribute;
      });
      function handleFocusOutside(ev) {
        var _a2, _b2;
        emits("focusOutside", ev);
        emits("interactOutside", ev);
        const target = ev.detail.originalEvent.target;
        if (target.hasAttribute("data-navigation-menu-trigger")) ev.preventDefault();
        if (!ev.defaultPrevented) {
          itemContext.onContentFocusOutside();
          const target2 = ev.target;
          if ((_b2 = (_a2 = menuContext.rootNavigationMenu) == null ? void 0 : _a2.value) == null ? void 0 : _b2.contains(target2)) ev.preventDefault();
        }
      }
      function handlePointerDownOutside(ev) {
        var _a2;
        emits("pointerDownOutside", ev);
        if (!ev.defaultPrevented) {
          const target = ev.target;
          const isTrigger = getItems().some((i2) => i2.ref.contains(target));
          const isRootViewport = menuContext.isRootMenu && ((_a2 = menuContext.viewport.value) == null ? void 0 : _a2.contains(target));
          if (isTrigger || isRootViewport || !menuContext.isRootMenu) ev.preventDefault();
        }
      }
      watchEffect((cleanupFn) => {
        const content = currentElement.value;
        if (menuContext.isRootMenu && content) {
          const handleClose = () => {
            var _a2;
            menuContext.onItemDismiss();
            itemContext.onRootContentClose();
            if (content.contains(getActiveElement())) (_a2 = itemContext.triggerRef.value) == null ? void 0 : _a2.focus();
          };
          content.addEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose);
          cleanupFn(() => content.removeEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose));
        }
      });
      function handleEscapeKeyDown(ev) {
        var _a2, _b2;
        emits("escapeKeyDown", ev);
        if (!ev.defaultPrevented) {
          menuContext.onItemDismiss();
          (_b2 = (_a2 = itemContext.triggerRef) == null ? void 0 : _a2.value) == null ? void 0 : _b2.focus();
          itemContext.wasEscapeCloseRef.value = true;
        }
      }
      function handleKeydown(ev) {
        var _a2;
        if (ev.target.closest("[data-reka-navigation-menu]") !== menuContext.rootNavigationMenu.value) return;
        const isMetaKey = ev.altKey || ev.ctrlKey || ev.metaKey;
        const isTabKey = ev.key === "Tab" && !isMetaKey;
        const candidates = getTabbableCandidates(ev.currentTarget);
        if (isTabKey) {
          const focusedElement = getActiveElement();
          const index2 = candidates.findIndex((candidate) => candidate === focusedElement);
          const isMovingBackwards = ev.shiftKey;
          const nextCandidates = isMovingBackwards ? candidates.slice(0, index2).reverse() : candidates.slice(index2 + 1, candidates.length);
          if (focusFirst(nextCandidates)) {
            ev.preventDefault();
          } else {
            (_a2 = itemContext.focusProxyRef.value) == null ? void 0 : _a2.focus();
            return;
          }
        }
        const newSelectedElement = useArrowNavigation(ev, getActiveElement(), void 0, {
          itemsArray: candidates,
          loop: false,
          enableIgnoredElement: true
        });
        newSelectedElement == null ? void 0 : newSelectedElement.focus();
      }
      function handleDismiss() {
        var _a2;
        const rootContentDismissEvent = new Event(EVENT_ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        (_a2 = currentElement.value) == null ? void 0 : _a2.dispatchEvent(rootContentDismissEvent);
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1P), mergeProps({
          id: unref(contentId),
          ref: unref(forwardRef),
          "aria-labelledby": unref(triggerId),
          "data-motion": motionAttribute.value,
          "data-state": unref(getOpenState)(unref(menuContext).modelValue.value === unref(itemContext).value),
          "data-orientation": unref(menuContext).orientation
        }, props, {
          onKeydown: handleKeydown,
          onEscapeKeyDown: handleEscapeKeyDown,
          onPointerDownOutside: handlePointerDownOutside,
          onFocusOutside: handleFocusOutside,
          onDismiss: handleDismiss
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "id",
          "aria-labelledby",
          "data-motion",
          "data-state",
          "data-orientation"
        ]);
      };
    }
  });
  const _sfc_main$N = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "NavigationMenuContent",
    props: {
      forceMount: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const forwarded = useForwardPropsEmits(reactiveOmit(props, "forceMount"), emits);
      const { forwardRef } = useForwardExpose();
      const menuContext = injectNavigationMenuContext();
      const itemContext = injectNavigationMenuItemContext();
      const open = computed(() => itemContext.value === menuContext.modelValue.value);
      const isLastActiveValue = computed(() => {
        if (menuContext.viewport.value) {
          if (!menuContext.modelValue.value && menuContext.previousValue.value) return menuContext.previousValue.value === itemContext.value;
        }
        return false;
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(Teleport, {
          to: unref(isClient) && unref(menuContext).viewport.value ? unref(menuContext).viewport.value : "body",
          disabled: unref(isClient) && unref(menuContext).viewport.value ? !unref(menuContext).viewport.value : true
        }, [
          createVNode(unref(Presence), {
            present: _ctx.forceMount || open.value || isLastActiveValue.value,
            "force-mount": !unref(menuContext).unmountOnHide.value
          }, {
            default: withCtx(({ present }) => [
              createVNode(_sfc_main$O, mergeProps({
                ref: unref(forwardRef),
                "data-state": unref(getOpenState)(open.value),
                style: {
                  pointerEvents: !open.value && unref(menuContext).isRootMenu ? "none" : void 0
                }
              }, {
                ..._ctx.$attrs,
                ...unref(forwarded)
              }, {
                hidden: !present,
                onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onContentEnter(unref(itemContext).value)),
                onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(whenMouse)(() => unref(menuContext).onContentLeave())($event)),
                onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
                onFocusOutside: _cache[3] || (_cache[3] = ($event) => emits("focusOutside", $event)),
                onInteractOutside: _cache[4] || (_cache[4] = ($event) => emits("interactOutside", $event))
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 2
              }, 1040, [
                "data-state",
                "style",
                "hidden"
              ])
            ]),
            _: 3
          }, 8, [
            "present",
            "force-mount"
          ])
        ], 8, [
          "to",
          "disabled"
        ]);
      };
    }
  });
  const _sfc_main$M = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "NavigationMenuIndicator",
    props: {
      forceMount: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const { forwardRef } = useForwardExpose();
      const menuContext = injectNavigationMenuContext();
      const indicatorStyle = ref();
      const isHorizontal = computed(() => menuContext.orientation === "horizontal");
      const isVisible = computed(() => !!menuContext.modelValue.value);
      const { activeTrigger } = menuContext;
      function handlePositionChange() {
        if (!activeTrigger.value) {
          return;
        }
        indicatorStyle.value = {
          size: isHorizontal.value ? activeTrigger.value.offsetWidth : activeTrigger.value.offsetHeight,
          position: isHorizontal.value ? activeTrigger.value.offsetLeft : activeTrigger.value.offsetTop
        };
      }
      watchEffect(() => {
        if (!menuContext.modelValue.value) {
          return;
        }
        handlePositionChange();
      });
      useResizeObserver(activeTrigger, handlePositionChange);
      useResizeObserver(menuContext.indicatorTrack, handlePositionChange);
      return (_ctx, _cache) => {
        return unref(menuContext).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: unref(menuContext).indicatorTrack.value
        }, [
          createVNode(unref(Presence), {
            present: _ctx.forceMount || isVisible.value
          }, {
            default: withCtx(() => [
              createVNode(unref(Primitive), mergeProps({
                ref: unref(forwardRef),
                "aria-hidden": "true",
                "data-state": isVisible.value ? "visible" : "hidden",
                "data-orientation": unref(menuContext).orientation,
                "as-child": props.asChild,
                as: _ctx.as,
                style: {
                  ...indicatorStyle.value ? {
                    "--reka-navigation-menu-indicator-size": `${indicatorStyle.value.size}px`,
                    "--reka-navigation-menu-indicator-position": `${indicatorStyle.value.position}px`
                  } : {}
                }
              }, _ctx.$attrs), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, [
                "data-state",
                "data-orientation",
                "as-child",
                "as",
                "style"
              ])
            ]),
            _: 3
          }, 8, [
            "present"
          ])
        ], 8, [
          "to"
        ])) : createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$L = defineComponent({
    __name: "NavigationMenuLink",
    props: {
      active: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "a"
      }
    },
    emits: [
      "select"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { CollectionItem } = useCollection({
        key: "NavigationMenu"
      });
      useForwardExpose();
      async function handleClick(ev) {
        var _a2;
        const linkSelectEvent = new CustomEvent(LINK_SELECT, {
          bubbles: true,
          cancelable: true,
          detail: {
            originalEvent: ev
          }
        });
        emits("select", linkSelectEvent);
        if (!linkSelectEvent.defaultPrevented && !ev.metaKey) {
          const rootContentDismissEvent = new CustomEvent(EVENT_ROOT_CONTENT_DISMISS, {
            bubbles: true,
            cancelable: true
          });
          (_a2 = ev.target) == null ? void 0 : _a2.dispatchEvent(rootContentDismissEvent);
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionItem), null, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              as: _ctx.as,
              "data-active": _ctx.active ? "" : void 0,
              "aria-current": _ctx.active ? "page" : void 0,
              "as-child": props.asChild,
              onClick: handleClick
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "as",
              "data-active",
              "aria-current",
              "as-child"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$K = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "NavigationMenuList",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "ul"
      }
    },
    setup(__props) {
      const props = __props;
      const menuContext = injectNavigationMenuContext();
      const { forwardRef, currentElement } = useForwardExpose();
      onMounted(() => {
        menuContext.onIndicatorTrackChange(currentElement.value);
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          ref: unref(forwardRef),
          style: {
            "position": "relative"
          }
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
              "as-child": props.asChild,
              as: _ctx.as,
              "data-orientation": unref(menuContext).orientation
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "as-child",
              "as",
              "data-orientation"
            ])
          ]),
          _: 3
        }, 512);
      };
    }
  });
  const _hoisted_1$3 = [
    "aria-owns"
  ];
  const _sfc_main$J = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "NavigationMenuTrigger",
    props: {
      disabled: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      const menuContext = injectNavigationMenuContext();
      const itemContext = injectNavigationMenuItemContext();
      const { CollectionItem } = useCollection({
        key: "NavigationMenu"
      });
      const { forwardRef, currentElement: triggerElement } = useForwardExpose();
      const triggerId = ref("");
      const contentId = ref("");
      const hasPointerMoveOpenedRef = refAutoReset(false, 300);
      const wasClickCloseRef = ref(false);
      const open = computed(() => itemContext.value === menuContext.modelValue.value);
      onMounted(() => {
        itemContext.triggerRef = triggerElement;
        triggerId.value = makeTriggerId(menuContext.baseId, itemContext.value);
        contentId.value = makeContentId(menuContext.baseId, itemContext.value);
      });
      function handlePointerEnter() {
        if (menuContext.disableHoverTrigger.value) return;
        wasClickCloseRef.value = false;
        itemContext.wasEscapeCloseRef.value = false;
      }
      function handlePointerMove(ev) {
        if (menuContext.disableHoverTrigger.value) return;
        if (ev.pointerType === "mouse") {
          if (props.disabled || wasClickCloseRef.value || itemContext.wasEscapeCloseRef.value || hasPointerMoveOpenedRef.value) {
            return;
          }
          menuContext.onTriggerEnter(itemContext.value);
          hasPointerMoveOpenedRef.value = true;
        }
      }
      function handlePointerLeave(ev) {
        if (menuContext.disableHoverTrigger.value) return;
        if (ev.pointerType === "mouse") {
          if (props.disabled) return;
          menuContext.onTriggerLeave();
          hasPointerMoveOpenedRef.value = false;
        }
      }
      function handleClick(event) {
        if (event.pointerType === "mouse" && menuContext.disableClickTrigger.value) return;
        if (hasPointerMoveOpenedRef.value) return;
        if (open.value) menuContext.onItemSelect("");
        else menuContext.onItemSelect(itemContext.value);
        wasClickCloseRef.value = open.value;
      }
      function handleKeydown(ev) {
        const verticalEntryKey = menuContext.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight";
        const entryKey = {
          horizontal: "ArrowDown",
          vertical: verticalEntryKey
        }[menuContext.orientation];
        if (open.value && ev.key === entryKey) {
          itemContext.onEntryKeyDown();
          ev.preventDefault();
          ev.stopPropagation();
        }
      }
      function setFocusProxyRef(node) {
        itemContext.focusProxyRef.value = unrefElement(node);
        return void 0;
      }
      function handleVisuallyHiddenFocus(ev) {
        const content = document.getElementById(itemContext.contentId);
        const prevFocusedElement = ev.relatedTarget;
        const wasTriggerFocused = prevFocusedElement === triggerElement.value;
        const wasFocusFromContent = content == null ? void 0 : content.contains(prevFocusedElement);
        if (wasTriggerFocused || !wasFocusFromContent) itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(CollectionItem), null, {
            default: withCtx(() => [
              createVNode(unref(Primitive), mergeProps({
                id: triggerId.value,
                ref: unref(forwardRef),
                disabled: _ctx.disabled,
                "data-disabled": _ctx.disabled ? "" : void 0,
                "data-state": unref(getOpenState)(open.value),
                "data-navigation-menu-trigger": "",
                "aria-expanded": open.value,
                "aria-controls": contentId.value,
                "as-child": props.asChild,
                as: _ctx.as
              }, _ctx.$attrs, {
                onPointerenter: handlePointerEnter,
                onPointermove: handlePointerMove,
                onPointerleave: handlePointerLeave,
                onClick: handleClick,
                onKeydown: handleKeydown
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, [
                "id",
                "disabled",
                "data-disabled",
                "data-state",
                "aria-expanded",
                "aria-controls",
                "as-child",
                "as"
              ])
            ]),
            _: 3
          }),
          open.value ? (openBlock(), createElementBlock(Fragment, {
            key: 0
          }, [
            createVNode(unref(_sfc_main$1X), {
              ref: setFocusProxyRef,
              "aria-hidden": "true",
              tabindex: 0,
              onFocus: handleVisuallyHiddenFocus
            }),
            unref(menuContext).viewport ? (openBlock(), createElementBlock("span", {
              key: 0,
              "aria-owns": contentId.value
            }, null, 8, _hoisted_1$3)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _sfc_main$I = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "NavigationMenuViewport",
    props: {
      forceMount: {
        type: Boolean
      },
      align: {
        default: "center"
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      var _a2;
      const props = __props;
      const { forwardRef, currentElement } = useForwardExpose();
      const menuContext = injectNavigationMenuContext();
      const { activeTrigger, rootNavigationMenu, modelValue } = menuContext;
      const size2 = ref();
      const position = ref();
      const open = computed(() => !!menuContext.modelValue.value);
      watch(currentElement, () => {
        menuContext.onViewportChange(currentElement.value);
      });
      const content = ref();
      watch([
        modelValue,
        open
      ], () => {
        if (!currentElement.value) return;
        requestAnimationFrame(() => {
          var _a3;
          const el = (_a3 = currentElement.value) == null ? void 0 : _a3.querySelector("[data-state=open]");
          content.value = el;
        });
      }, {
        immediate: true,
        flush: "post"
      });
      function updatePosition() {
        if (content.value && activeTrigger.value && rootNavigationMenu.value) {
          const bodyWidth = document.documentElement.offsetWidth;
          const bodyHeight = document.documentElement.offsetHeight;
          const rootRect = rootNavigationMenu.value.getBoundingClientRect();
          const rect = activeTrigger.value.getBoundingClientRect();
          const { offsetWidth, offsetHeight } = content.value;
          const startPositionLeft = rect.left - rootRect.left;
          const startPositionTop = rect.top - rootRect.top;
          let posLeft = null;
          let posTop = null;
          switch (props.align) {
            case "start":
              posLeft = startPositionLeft;
              posTop = startPositionTop;
              break;
            case "end":
              posLeft = startPositionLeft - offsetWidth + rect.width;
              posTop = startPositionTop - offsetHeight + rect.height;
              break;
            default:
              posLeft = startPositionLeft - offsetWidth / 2 + rect.width / 2;
              posTop = startPositionTop - offsetHeight / 2 + rect.height / 2;
          }
          const screenOffset = 10;
          if (posLeft + rootRect.left < screenOffset) {
            posLeft = screenOffset - rootRect.left;
          }
          const rightOffset = posLeft + rootRect.left + offsetWidth;
          if (rightOffset > bodyWidth - screenOffset) {
            posLeft -= rightOffset - bodyWidth + screenOffset;
            if (posLeft < screenOffset - rootRect.left) {
              posLeft = screenOffset - rootRect.left;
            }
          }
          if (posTop + rootRect.top < screenOffset) {
            posTop = screenOffset - rootRect.top;
          }
          const bottomOffset = posTop + rootRect.top + offsetHeight;
          if (bottomOffset > bodyHeight - screenOffset) {
            posTop -= bottomOffset - bodyHeight + screenOffset;
            if (posTop < screenOffset - rootRect.top) {
              posTop = screenOffset - rootRect.top;
            }
          }
          posLeft = Math.round(posLeft);
          posTop = Math.round(posTop);
          position.value = {
            left: posLeft,
            top: posTop
          };
        }
      }
      useResizeObserver(content, () => {
        if (content.value) {
          size2.value = {
            width: content.value.offsetWidth,
            height: content.value.offsetHeight
          };
          updatePosition();
        }
      });
      useResizeObserver([
        (_a2 = globalThis.document) == null ? void 0 : _a2.body,
        rootNavigationMenu
      ], () => {
        updatePosition();
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || open.value,
          "force-mount": !unref(menuContext).unmountOnHide.value,
          onAfterLeave: _cache[2] || (_cache[2] = () => {
            size2.value = void 0;
            position.value = void 0;
          })
        }, {
          default: withCtx(({ present }) => {
            var _a3, _b2, _c2, _d2;
            return [
              createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
                ref: unref(forwardRef),
                as: _ctx.as,
                "as-child": _ctx.asChild,
                "data-state": unref(getOpenState)(open.value),
                "data-orientation": unref(menuContext).orientation,
                style: {
                  pointerEvents: !open.value && unref(menuContext).isRootMenu ? "none" : void 0,
                  ["--reka-navigation-menu-viewport-width"]: size2.value ? `${(_a3 = size2.value) == null ? void 0 : _a3.width}px` : void 0,
                  ["--reka-navigation-menu-viewport-height"]: size2.value ? `${(_b2 = size2.value) == null ? void 0 : _b2.height}px` : void 0,
                  ["--reka-navigation-menu-viewport-left"]: position.value ? `${(_c2 = position.value) == null ? void 0 : _c2.left}px` : void 0,
                  ["--reka-navigation-menu-viewport-top"]: position.value ? `${(_d2 = position.value) == null ? void 0 : _d2.top}px` : void 0
                },
                hidden: !present,
                onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onContentEnter(unref(menuContext).modelValue.value)),
                onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(whenMouse)(() => unref(menuContext).onContentLeave())($event))
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 2
              }, 1040, [
                "as",
                "as-child",
                "data-state",
                "data-orientation",
                "style",
                "hidden"
              ])
            ];
          }),
          _: 3
        }, 8, [
          "present",
          "force-mount"
        ]);
      };
    }
  });
  const [injectToastProviderContext, provideToastProviderContext] = createContext("ToastProvider");
  const _sfc_main$H = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "ToastProvider",
    props: {
      label: {
        default: "Notification"
      },
      duration: {
        default: 5e3
      },
      swipeDirection: {
        default: "right"
      },
      swipeThreshold: {
        default: 50
      }
    },
    setup(__props) {
      const props = __props;
      const { label, duration, swipeDirection, swipeThreshold } = toRefs(props);
      useCollection({
        isProvider: true
      });
      const viewport = ref();
      const toastCount = ref(0);
      const isFocusedToastEscapeKeyDownRef = ref(false);
      const isClosePausedRef = ref(false);
      if (props.label && typeof props.label === "string" && !props.label.trim()) {
        const error = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
        throw new Error(error);
      }
      provideToastProviderContext({
        label,
        duration,
        swipeDirection,
        swipeThreshold,
        toastCount,
        viewport,
        onViewportChange(el) {
          viewport.value = el;
        },
        onToastAdd() {
          toastCount.value++;
        },
        onToastRemove() {
          toastCount.value--;
        },
        isFocusedToastEscapeKeyDownRef,
        isClosePausedRef
      });
      return (_ctx, _cache) => {
        return renderSlot(_ctx.$slots, "default");
      };
    }
  });
  const TOAST_SWIPE_START = "toast.swipeStart";
  const TOAST_SWIPE_MOVE = "toast.swipeMove";
  const TOAST_SWIPE_CANCEL = "toast.swipeCancel";
  const TOAST_SWIPE_END = "toast.swipeEnd";
  const VIEWPORT_PAUSE = "toast.viewportPause";
  const VIEWPORT_RESUME = "toast.viewportResume";
  function handleAndDispatchCustomEvent(name, handler, detail) {
    const currentTarget = detail.originalEvent.currentTarget;
    const event = new CustomEvent(name, {
      bubbles: false,
      cancelable: true,
      detail
    });
    if (handler) currentTarget.addEventListener(name, handler, {
      once: true
    });
    currentTarget.dispatchEvent(event);
  }
  function isDeltaInDirection(delta, direction, threshold = 0) {
    const deltaX = Math.abs(delta.x);
    const deltaY = Math.abs(delta.y);
    const isDeltaX = deltaX > deltaY;
    if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
    else return !isDeltaX && deltaY > threshold;
  }
  function isHTMLElement(node) {
    return node.nodeType === node.ELEMENT_NODE;
  }
  function getAnnounceTextContent(container) {
    const textContent = [];
    const childNodes = Array.from(container.childNodes);
    childNodes.forEach((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
      if (isHTMLElement(node)) {
        const isHidden2 = node.ariaHidden || node.hidden || node.style.display === "none";
        const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
        if (!isHidden2) {
          if (isExcluded) {
            const altText = node.dataset.rekaToastAnnounceAlt;
            if (altText) textContent.push(altText);
          } else {
            textContent.push(...getAnnounceTextContent(node));
          }
        }
      }
    });
    return textContent;
  }
  const _sfc_main$G = defineComponent({
    __name: "ToastAnnounce",
    setup(__props) {
      const providerContext = injectToastProviderContext();
      const isAnnounced = useTimeout(1e3);
      const renderAnnounceText = ref(false);
      useRafFn(() => {
        renderAnnounceText.value = true;
      });
      return (_ctx, _cache) => {
        return unref(isAnnounced) || renderAnnounceText.value ? (openBlock(), createBlock(unref(_sfc_main$1X), {
          key: 0
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(providerContext).label.value) + " ", 1),
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })) : createCommentVNode("", true);
      };
    }
  });
  const [injectToastRootContext, provideToastRootContext] = createContext("ToastRoot");
  const _sfc_main$F = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "ToastRootImpl",
    props: {
      type: {},
      open: {
        type: Boolean,
        default: false
      },
      duration: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: "li"
      }
    },
    emits: [
      "close",
      "escapeKeyDown",
      "pause",
      "resume",
      "swipeStart",
      "swipeMove",
      "swipeCancel",
      "swipeEnd"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { forwardRef, currentElement } = useForwardExpose();
      const { CollectionItem } = useCollection();
      const providerContext = injectToastProviderContext();
      const pointerStartRef = ref(null);
      const swipeDeltaRef = ref(null);
      const duration = computed(() => typeof props.duration === "number" ? props.duration : providerContext.duration.value);
      const closeTimerStartTimeRef = ref(0);
      const closeTimerRemainingTimeRef = ref(duration.value);
      const closeTimerRef = ref(0);
      const remainingTime = ref(duration.value);
      const remainingRaf = useRafFn(() => {
        const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.value;
        remainingTime.value = Math.max(closeTimerRemainingTimeRef.value - elapsedTime, 0);
      }, {
        fpsLimit: 60
      });
      function startTimer(duration2) {
        if (duration2 <= 0 || duration2 === Number.POSITIVE_INFINITY) return;
        if (!isClient) return;
        window.clearTimeout(closeTimerRef.value);
        closeTimerStartTimeRef.value = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.value = window.setTimeout(handleClose, duration2);
      }
      function handleClose(event) {
        var _a2, _b2;
        const isNonPointerEvent = (event == null ? void 0 : event.pointerType) === "";
        const isFocusInToast = (_a2 = currentElement.value) == null ? void 0 : _a2.contains(getActiveElement());
        if (isFocusInToast && isNonPointerEvent) (_b2 = providerContext.viewport.value) == null ? void 0 : _b2.focus();
        if (isNonPointerEvent) {
          providerContext.isClosePausedRef.value = false;
        }
        emits("close");
      }
      const announceTextContent = computed(() => currentElement.value ? getAnnounceTextContent(currentElement.value) : null);
      if (props.type && ![
        "foreground",
        "background"
      ].includes(props.type)) {
        const error = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
        throw new Error(error);
      }
      watchEffect((cleanupFn) => {
        const viewport = providerContext.viewport.value;
        if (viewport) {
          const handleResume = () => {
            startTimer(closeTimerRemainingTimeRef.value);
            remainingRaf.resume();
            emits("resume");
          };
          const handlePause = () => {
            const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.value;
            closeTimerRemainingTimeRef.value = closeTimerRemainingTimeRef.value - elapsedTime;
            window.clearTimeout(closeTimerRef.value);
            remainingRaf.pause();
            emits("pause");
          };
          viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.addEventListener(VIEWPORT_RESUME, handleResume);
          return () => {
            viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
            viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
          };
        }
      });
      watch(() => [
        props.open,
        duration.value
      ], () => {
        closeTimerRemainingTimeRef.value = duration.value;
        if (props.open && !providerContext.isClosePausedRef.value) startTimer(duration.value);
      }, {
        immediate: true
      });
      onKeyStroke("Escape", (event) => {
        emits("escapeKeyDown", event);
        if (!event.defaultPrevented) {
          providerContext.isFocusedToastEscapeKeyDownRef.value = true;
          handleClose();
        }
      });
      onMounted(() => {
        providerContext.onToastAdd();
      });
      onUnmounted(() => {
        providerContext.onToastRemove();
      });
      provideToastRootContext({
        onClose: handleClose
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(Fragment, null, [
          announceTextContent.value ? (openBlock(), createBlock(_sfc_main$G, {
            key: 0,
            role: "alert",
            "aria-live": _ctx.type === "foreground" ? "assertive" : "polite",
            "aria-atomic": "true"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(announceTextContent.value), 1)
            ]),
            _: 1
          }, 8, [
            "aria-live"
          ])) : createCommentVNode("", true),
          unref(providerContext).viewport.value ? (openBlock(), createBlock(Teleport, {
            key: 1,
            to: unref(providerContext).viewport.value
          }, [
            createVNode(unref(CollectionItem), null, {
              default: withCtx(() => [
                createVNode(unref(Primitive), mergeProps({
                  ref: unref(forwardRef),
                  role: "alert",
                  "aria-live": "off",
                  "aria-atomic": "true",
                  tabindex: "0"
                }, _ctx.$attrs, {
                  as: _ctx.as,
                  "as-child": _ctx.asChild,
                  "data-state": _ctx.open ? "open" : "closed",
                  "data-swipe-direction": unref(providerContext).swipeDirection.value,
                  style: {
                    userSelect: "none",
                    touchAction: "none"
                  },
                  onPointerdown: _cache[0] || (_cache[0] = withModifiers((event) => {
                    pointerStartRef.value = {
                      x: event.clientX,
                      y: event.clientY
                    };
                  }, [
                    "left"
                  ])),
                  onPointermove: _cache[1] || (_cache[1] = (event) => {
                    if (!pointerStartRef.value) return;
                    const x2 = event.clientX - pointerStartRef.value.x;
                    const y2 = event.clientY - pointerStartRef.value.y;
                    const hasSwipeMoveStarted = Boolean(swipeDeltaRef.value);
                    const isHorizontalSwipe = [
                      "left",
                      "right"
                    ].includes(unref(providerContext).swipeDirection.value);
                    const clamp = [
                      "left",
                      "up"
                    ].includes(unref(providerContext).swipeDirection.value) ? Math.min : Math.max;
                    const clampedX = isHorizontalSwipe ? clamp(0, x2) : 0;
                    const clampedY = !isHorizontalSwipe ? clamp(0, y2) : 0;
                    const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                    const delta = {
                      x: clampedX,
                      y: clampedY
                    };
                    const eventDetail = {
                      originalEvent: event,
                      delta
                    };
                    if (hasSwipeMoveStarted) {
                      swipeDeltaRef.value = delta;
                      unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_MOVE), (ev) => emits("swipeMove", ev), eventDetail);
                    } else if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, moveStartBuffer)) {
                      swipeDeltaRef.value = delta;
                      unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_START), (ev) => emits("swipeStart", ev), eventDetail);
                      event.target.setPointerCapture(event.pointerId);
                    } else if (Math.abs(x2) > moveStartBuffer || Math.abs(y2) > moveStartBuffer) {
                      pointerStartRef.value = null;
                    }
                  }),
                  onPointerup: _cache[2] || (_cache[2] = (event) => {
                    const delta = swipeDeltaRef.value;
                    const target = event.target;
                    if (target.hasPointerCapture(event.pointerId)) {
                      target.releasePointerCapture(event.pointerId);
                    }
                    swipeDeltaRef.value = null;
                    pointerStartRef.value = null;
                    if (delta) {
                      const toast2 = event.currentTarget;
                      const eventDetail = {
                        originalEvent: event,
                        delta
                      };
                      if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, unref(providerContext).swipeThreshold.value)) {
                        unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_END), (ev) => emits("swipeEnd", ev), eventDetail);
                      } else {
                        unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_CANCEL), (ev) => emits("swipeCancel", ev), eventDetail);
                      }
                      toast2 == null ? void 0 : toast2.addEventListener("click", (event2) => event2.preventDefault(), {
                        once: true
                      });
                    }
                  })
                }), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      remaining: remainingTime.value,
                      duration: duration.value
                    })
                  ]),
                  _: 3
                }, 16, [
                  "as",
                  "as-child",
                  "data-state",
                  "data-swipe-direction"
                ])
              ]),
              _: 3
            })
          ], 8, [
            "to"
          ])) : createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _sfc_main$E = defineComponent({
    __name: "ToastRoot",
    props: {
      defaultOpen: {
        type: Boolean,
        default: true
      },
      forceMount: {
        type: Boolean
      },
      type: {
        default: "foreground"
      },
      open: {
        type: Boolean,
        default: void 0
      },
      duration: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: "li"
      }
    },
    emits: [
      "escapeKeyDown",
      "pause",
      "resume",
      "swipeStart",
      "swipeMove",
      "swipeCancel",
      "swipeEnd",
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { forwardRef } = useForwardExpose();
      const open = useVModel(props, "open", emits, {
        defaultValue: props.defaultOpen,
        passive: props.open === void 0
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Presence), {
          present: _ctx.forceMount || unref(open)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$F, mergeProps({
              ref: unref(forwardRef),
              open: unref(open),
              type: _ctx.type,
              as: _ctx.as,
              "as-child": _ctx.asChild,
              duration: _ctx.duration
            }, _ctx.$attrs, {
              onClose: _cache[0] || (_cache[0] = ($event) => open.value = false),
              onPause: _cache[1] || (_cache[1] = ($event) => emits("pause")),
              onResume: _cache[2] || (_cache[2] = ($event) => emits("resume")),
              onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
              onSwipeStart: _cache[4] || (_cache[4] = (event) => {
                emits("swipeStart", event);
                event.currentTarget.setAttribute("data-swipe", "start");
              }),
              onSwipeMove: _cache[5] || (_cache[5] = (event) => {
                emits("swipeMove", event);
                const { x: x2, y: y2 } = event.detail.delta;
                const target = event.currentTarget;
                target.setAttribute("data-swipe", "move");
                target.style.setProperty("--reka-toast-swipe-move-x", `${x2}px`);
                target.style.setProperty("--reka-toast-swipe-move-y", `${y2}px`);
              }),
              onSwipeCancel: _cache[6] || (_cache[6] = (event) => {
                emits("swipeCancel", event);
                const target = event.currentTarget;
                target.setAttribute("data-swipe", "cancel");
                target.style.removeProperty("--reka-toast-swipe-move-x");
                target.style.removeProperty("--reka-toast-swipe-move-y");
                target.style.removeProperty("--reka-toast-swipe-end-x");
                target.style.removeProperty("--reka-toast-swipe-end-y");
              }),
              onSwipeEnd: _cache[7] || (_cache[7] = (event) => {
                emits("swipeEnd", event);
                const { x: x2, y: y2 } = event.detail.delta;
                const target = event.currentTarget;
                target.setAttribute("data-swipe", "end");
                target.style.removeProperty("--reka-toast-swipe-move-x");
                target.style.removeProperty("--reka-toast-swipe-move-y");
                target.style.setProperty("--reka-toast-swipe-end-x", `${x2}px`);
                target.style.setProperty("--reka-toast-swipe-end-y", `${y2}px`);
                open.value = false;
              })
            }), {
              default: withCtx(({ remaining, duration: _duration }) => [
                renderSlot(_ctx.$slots, "default", {
                  remaining,
                  duration: _duration,
                  open: unref(open)
                })
              ]),
              _: 3
            }, 16, [
              "open",
              "type",
              "as",
              "as-child",
              "duration"
            ])
          ]),
          _: 3
        }, 8, [
          "present"
        ]);
      };
    }
  });
  const _sfc_main$D = defineComponent({
    __name: "ToastPortal",
    props: {
      to: {},
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1Q), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$C = defineComponent({
    __name: "ToastAnnounceExclude",
    props: {
      altText: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-reka-toast-announce-exclude": "",
          "data-reka-toast-announce-alt": _ctx.altText || void 0
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-reka-toast-announce-alt"
        ]);
      };
    }
  });
  const _sfc_main$B = defineComponent({
    __name: "ToastClose",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(__props) {
      const props = __props;
      const rootContext = injectToastRootContext();
      const { forwardRef } = useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$C, {
          "as-child": ""
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), mergeProps(props, {
              ref: unref(forwardRef),
              type: _ctx.as === "button" ? "button" : void 0,
              onClick: unref(rootContext).onClose
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 16, [
              "type",
              "onClick"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$A = defineComponent({
    __name: "ToastAction",
    props: {
      altText: {},
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      if (!props.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
      const { forwardRef } = useForwardExpose();
      return (_ctx, _cache) => {
        return _ctx.altText ? (openBlock(), createBlock(_sfc_main$C, {
          key: 0,
          "alt-text": _ctx.altText,
          "as-child": ""
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$B, {
              ref: unref(forwardRef),
              as: _ctx.as,
              "as-child": _ctx.asChild
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "as",
              "as-child"
            ])
          ]),
          _: 3
        }, 8, [
          "alt-text"
        ])) : createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$z = defineComponent({
    __name: "FocusProxy",
    emits: [
      "focusFromOutsideViewport"
    ],
    setup(__props, { emit: __emit }) {
      const emits = __emit;
      const providerContext = injectToastProviderContext();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1X), {
          "aria-hidden": "true",
          tabindex: "0",
          style: {
            "position": "fixed"
          },
          onFocus: _cache[0] || (_cache[0] = (event) => {
            var _a2;
            const prevFocusedElement = event.relatedTarget;
            const isFocusFromOutsideViewport = !((_a2 = unref(providerContext).viewport.value) == null ? void 0 : _a2.contains(prevFocusedElement));
            if (isFocusFromOutsideViewport) emits("focusFromOutsideViewport");
          })
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        });
      };
    }
  });
  const _sfc_main$y = defineComponent({
    __name: "DismissableLayerBranch",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      const { forwardRef, currentElement } = useForwardExpose();
      onMounted(() => {
        context.branches.add(currentElement.value);
      });
      onUnmounted(() => {
        context.branches.delete(currentElement.value);
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps({
          ref: unref(forwardRef)
        }, props), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$x = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "ToastViewport",
    props: {
      hotkey: {
        default: () => [
          "F8"
        ]
      },
      label: {
        type: [
          String,
          Function
        ],
        default: "Notifications ({hotkey})"
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "ol"
      }
    },
    setup(__props) {
      const props = __props;
      const { hotkey, label } = toRefs(props);
      const { forwardRef, currentElement } = useForwardExpose();
      const { CollectionSlot, getItems } = useCollection();
      const providerContext = injectToastProviderContext();
      const hasToasts = computed(() => providerContext.toastCount.value > 0);
      const headFocusProxyRef = ref();
      const tailFocusProxyRef = ref();
      const hotkeyMessage = computed(() => hotkey.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
      onKeyStroke(hotkey.value, () => {
        currentElement.value.focus();
      });
      onMounted(() => {
        providerContext.onViewportChange(currentElement.value);
      });
      watchEffect((cleanupFn) => {
        const viewport = currentElement.value;
        if (hasToasts.value && viewport) {
          const handlePause = () => {
            if (!providerContext.isClosePausedRef.value) {
              const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
              viewport.dispatchEvent(pauseEvent);
              providerContext.isClosePausedRef.value = true;
            }
          };
          const handleResume = () => {
            if (providerContext.isClosePausedRef.value) {
              const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
              viewport.dispatchEvent(resumeEvent);
              providerContext.isClosePausedRef.value = false;
            }
          };
          const handleFocusOutResume = (event) => {
            const isFocusMovingOutside = !viewport.contains(event.relatedTarget);
            if (isFocusMovingOutside) handleResume();
          };
          const handlePointerLeaveResume = () => {
            const isFocusInside = viewport.contains(getActiveElement());
            if (!isFocusInside) handleResume();
          };
          const handleKeyDown = (event) => {
            var _a2, _b2, _c2;
            const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
            const isTabKey = event.key === "Tab" && !isMetaKey;
            if (isTabKey) {
              const focusedElement = getActiveElement();
              const isTabbingBackwards = event.shiftKey;
              const targetIsViewport = event.target === viewport;
              if (targetIsViewport && isTabbingBackwards) {
                (_a2 = headFocusProxyRef.value) == null ? void 0 : _a2.focus();
                return;
              }
              const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
              const sortedCandidates = getSortedTabbableCandidates({
                tabbingDirection
              });
              const index2 = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
              if (focusFirst$2(sortedCandidates.slice(index2 + 1))) {
                event.preventDefault();
              } else {
                isTabbingBackwards ? (_b2 = headFocusProxyRef.value) == null ? void 0 : _b2.focus() : (_c2 = tailFocusProxyRef.value) == null ? void 0 : _c2.focus();
              }
            }
          };
          viewport.addEventListener("focusin", handlePause);
          viewport.addEventListener("focusout", handleFocusOutResume);
          viewport.addEventListener("pointermove", handlePause);
          viewport.addEventListener("pointerleave", handlePointerLeaveResume);
          viewport.addEventListener("keydown", handleKeyDown);
          window.addEventListener("blur", handlePause);
          window.addEventListener("focus", handleResume);
          cleanupFn(() => {
            viewport.removeEventListener("focusin", handlePause);
            viewport.removeEventListener("focusout", handleFocusOutResume);
            viewport.removeEventListener("pointermove", handlePause);
            viewport.removeEventListener("pointerleave", handlePointerLeaveResume);
            viewport.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("blur", handlePause);
            window.removeEventListener("focus", handleResume);
          });
        }
      });
      function getSortedTabbableCandidates({ tabbingDirection }) {
        const toastItems = getItems().map((i2) => i2.ref);
        const tabbableCandidates = toastItems.map((toastNode) => {
          const toastTabbableCandidates = [
            toastNode,
            ...getTabbableCandidates$1(toastNode)
          ];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$y), {
          role: "region",
          "aria-label": typeof unref(label) === "string" ? unref(label).replace("{hotkey}", hotkeyMessage.value) : unref(label)(hotkeyMessage.value),
          tabindex: "-1",
          style: normalizeStyle({
            pointerEvents: hasToasts.value ? void 0 : "none"
          })
        }, {
          default: withCtx(() => [
            hasToasts.value ? (openBlock(), createBlock(_sfc_main$z, {
              key: 0,
              ref: (node) => {
                headFocusProxyRef.value = unref(unrefElement)(node);
                return void 0;
              },
              onFocusFromOutsideViewport: _cache[0] || (_cache[0] = () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                unref(focusFirst$2)(tabbableCandidates);
              })
            }, null, 512)) : createCommentVNode("", true),
            createVNode(unref(CollectionSlot), null, {
              default: withCtx(() => [
                createVNode(unref(Primitive), mergeProps({
                  ref: unref(forwardRef),
                  tabindex: "-1",
                  as: _ctx.as,
                  "as-child": _ctx.asChild
                }, _ctx.$attrs), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 16, [
                  "as",
                  "as-child"
                ])
              ]),
              _: 3
            }),
            hasToasts.value ? (openBlock(), createBlock(_sfc_main$z, {
              key: 1,
              ref: (node) => {
                tailFocusProxyRef.value = unref(unrefElement)(node);
                return void 0;
              },
              onFocusFromOutsideViewport: _cache[1] || (_cache[1] = () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                unref(focusFirst$2)(tabbableCandidates);
              })
            }, null, 512)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, [
          "aria-label",
          "style"
        ]);
      };
    }
  });
  const _sfc_main$w = defineComponent({
    __name: "ToastTitle",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const _sfc_main$v = defineComponent({
    __name: "ToastDescription",
    props: {
      asChild: {
        type: Boolean
      },
      as: {}
    },
    setup(__props) {
      const props = __props;
      useForwardExpose();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), normalizeProps$1(guardReactiveProps(props)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16);
      };
    }
  });
  let provideTooltipProviderContext;
  [injectTooltipProviderContext, provideTooltipProviderContext] = createContext("TooltipProvider");
  const _sfc_main$u = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "TooltipProvider",
    props: {
      delayDuration: {
        default: 700
      },
      skipDelayDuration: {
        default: 300
      },
      disableHoverableContent: {
        type: Boolean,
        default: false
      },
      disableClosingTrigger: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      ignoreNonKeyboardFocus: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const props = __props;
      const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger, ignoreNonKeyboardFocus, disabled } = toRefs(props);
      useForwardExpose();
      const isOpenDelayed = ref(true);
      const isPointerInTransitRef = ref(false);
      const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
        isOpenDelayed.value = true;
      }, skipDelayDuration, {
        immediate: false
      });
      provideTooltipProviderContext({
        isOpenDelayed,
        delayDuration,
        onOpen() {
          clearTimer();
          isOpenDelayed.value = false;
        },
        onClose() {
          startTimer();
        },
        isPointerInTransitRef,
        disableHoverableContent,
        disableClosingTrigger,
        disabled,
        ignoreNonKeyboardFocus
      });
      return (_ctx, _cache) => {
        return renderSlot(_ctx.$slots, "default");
      };
    }
  });
  useToast = function() {
    const toasts = useState("toasts", () => []);
    const running = ref(false);
    const queue = [];
    const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    async function processQueue() {
      if (running.value || queue.length === 0) {
        return;
      }
      running.value = true;
      while (queue.length > 0) {
        const toast2 = queue.shift();
        await nextTick();
        toasts.value = [
          ...toasts.value,
          toast2
        ].slice(-5);
      }
      running.value = false;
    }
    function add(toast2) {
      const body = {
        id: generateId(),
        open: true,
        ...toast2
      };
      queue.push(body);
      processQueue();
      return body;
    }
    function update(id, toast2) {
      const index2 = toasts.value.findIndex((t) => t.id === id);
      if (index2 !== -1) {
        toasts.value[index2] = {
          ...toasts.value[index2],
          ...toast2
        };
      }
    }
    function remove(id) {
      const index2 = toasts.value.findIndex((t) => t.id === id);
      if (index2 !== -1) {
        toasts.value[index2] = {
          ...toasts.value[index2],
          open: false
        };
      }
      setTimeout(() => {
        toasts.value = toasts.value.filter((t) => t.id !== id);
      }, 200);
    }
    function clear() {
      toasts.value = [];
    }
    return {
      toasts,
      add,
      update,
      remove,
      clear
    };
  };
  const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
    const colonSeparated = value.split(":");
    if (value.slice(0, 1) === "@") {
      if (colonSeparated.length < 2 || colonSeparated.length > 3) {
        return null;
      }
      provider = colonSeparated.shift().slice(1);
    }
    if (colonSeparated.length > 3 || !colonSeparated.length) {
      return null;
    }
    if (colonSeparated.length > 1) {
      const name2 = colonSeparated.pop();
      const prefix = colonSeparated.pop();
      const result = {
        provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
        prefix,
        name: name2
      };
      return validate && !validateIconName(result) ? null : result;
    }
    const name = colonSeparated[0];
    const dashSeparated = name.split("-");
    if (dashSeparated.length > 1) {
      const result = {
        provider,
        prefix: dashSeparated.shift(),
        name: dashSeparated.join("-")
      };
      return validate && !validateIconName(result) ? null : result;
    }
    if (allowSimpleName && provider === "") {
      const result = {
        provider,
        prefix: "",
        name
      };
      return validate && !validateIconName(result, allowSimpleName) ? null : result;
    }
    return null;
  };
  const validateIconName = (icon, allowSimpleName) => {
    if (!icon) {
      return false;
    }
    return !!((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
  };
  const defaultIconDimensions = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  });
  const defaultIconTransformations = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  });
  const defaultIconProps = Object.freeze({
    ...defaultIconDimensions,
    ...defaultIconTransformations
  });
  const defaultExtendedIconProps = Object.freeze({
    ...defaultIconProps,
    body: "",
    hidden: false
  });
  function mergeIconTransformations(obj1, obj2) {
    const result = {};
    if (!obj1.hFlip !== !obj2.hFlip) {
      result.hFlip = true;
    }
    if (!obj1.vFlip !== !obj2.vFlip) {
      result.vFlip = true;
    }
    const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
    if (rotate) {
      result.rotate = rotate;
    }
    return result;
  }
  function mergeIconData(parent, child) {
    const result = mergeIconTransformations(parent, child);
    for (const key in defaultExtendedIconProps) {
      if (key in defaultIconTransformations) {
        if (key in parent && !(key in result)) {
          result[key] = defaultIconTransformations[key];
        }
      } else if (key in child) {
        result[key] = child[key];
      } else if (key in parent) {
        result[key] = parent[key];
      }
    }
    return result;
  }
  function getIconsTree(data, names) {
    const icons = data.icons;
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    const resolved = /* @__PURE__ */ Object.create(null);
    function resolve(name) {
      if (icons[name]) {
        return resolved[name] = [];
      }
      if (!(name in resolved)) {
        resolved[name] = null;
        const parent = aliases[name] && aliases[name].parent;
        const value = parent && resolve(parent);
        if (value) {
          resolved[name] = [
            parent
          ].concat(value);
        }
      }
      return resolved[name];
    }
    Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
    return resolved;
  }
  function internalGetIconData(data, name, tree) {
    const icons = data.icons;
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    let currentProps = {};
    function parse2(name2) {
      currentProps = mergeIconData(icons[name2] || aliases[name2], currentProps);
    }
    parse2(name);
    tree.forEach(parse2);
    return mergeIconData(data, currentProps);
  }
  function parseIconSet(data, callback) {
    const names = [];
    if (typeof data !== "object" || typeof data.icons !== "object") {
      return names;
    }
    if (data.not_found instanceof Array) {
      data.not_found.forEach((name) => {
        callback(name, null);
        names.push(name);
      });
    }
    const tree = getIconsTree(data);
    for (const name in tree) {
      const item = tree[name];
      if (item) {
        callback(name, internalGetIconData(data, name, item));
        names.push(name);
      }
    }
    return names;
  }
  const optionalPropertyDefaults = {
    provider: "",
    aliases: {},
    not_found: {},
    ...defaultIconDimensions
  };
  function checkOptionalProps(item, defaults) {
    for (const prop in defaults) {
      if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
        return false;
      }
    }
    return true;
  }
  function quicklyValidateIconSet(obj) {
    if (typeof obj !== "object" || obj === null) {
      return null;
    }
    const data = obj;
    if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
      return null;
    }
    if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
      return null;
    }
    const icons = data.icons;
    for (const name in icons) {
      const icon = icons[name];
      if (!name || typeof icon.body !== "string" || !checkOptionalProps(icon, defaultExtendedIconProps)) {
        return null;
      }
    }
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    for (const name in aliases) {
      const icon = aliases[name];
      const parent = icon.parent;
      if (!name || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(icon, defaultExtendedIconProps)) {
        return null;
      }
    }
    return data;
  }
  const dataStorage = /* @__PURE__ */ Object.create(null);
  function newStorage(provider, prefix) {
    return {
      provider,
      prefix,
      icons: /* @__PURE__ */ Object.create(null),
      missing: /* @__PURE__ */ new Set()
    };
  }
  function getStorage(provider, prefix) {
    const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
    return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
  }
  function addIconSet(storage2, data) {
    if (!quicklyValidateIconSet(data)) {
      return [];
    }
    return parseIconSet(data, (name, icon) => {
      if (icon) {
        storage2.icons[name] = icon;
      } else {
        storage2.missing.add(name);
      }
    });
  }
  function addIconToStorage(storage2, name, icon) {
    try {
      if (typeof icon.body === "string") {
        storage2.icons[name] = {
          ...icon
        };
        return true;
      }
    } catch (err) {
    }
    return false;
  }
  let simpleNames = false;
  function allowSimpleNames(allow) {
    if (typeof allow === "boolean") {
      simpleNames = allow;
    }
    return simpleNames;
  }
  function getIconData(name) {
    const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
    if (icon) {
      const storage2 = getStorage(icon.provider, icon.prefix);
      const iconName = icon.name;
      return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
    }
  }
  function addIcon(name, data) {
    const icon = stringToIcon(name, true, simpleNames);
    if (!icon) {
      return false;
    }
    const storage2 = getStorage(icon.provider, icon.prefix);
    if (data) {
      return addIconToStorage(storage2, icon.name, data);
    } else {
      storage2.missing.add(icon.name);
      return true;
    }
  }
  function addCollection(data, provider) {
    if (typeof data !== "object") {
      return false;
    }
    if (typeof provider !== "string") {
      provider = data.provider || "";
    }
    if (simpleNames && !provider && !data.prefix) {
      let added = false;
      if (quicklyValidateIconSet(data)) {
        data.prefix = "";
        parseIconSet(data, (name, icon) => {
          if (addIcon(name, icon)) {
            added = true;
          }
        });
      }
      return added;
    }
    const prefix = data.prefix;
    if (!validateIconName({
      prefix,
      name: "a"
    })) {
      return false;
    }
    const storage2 = getStorage(provider, prefix);
    return !!addIconSet(storage2, data);
  }
  const defaultIconSizeCustomisations = Object.freeze({
    width: null,
    height: null
  });
  const defaultIconCustomisations = Object.freeze({
    ...defaultIconSizeCustomisations,
    ...defaultIconTransformations
  });
  const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
  const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function calculateSize(size2, ratio, precision) {
    if (ratio === 1) {
      return size2;
    }
    precision = precision || 100;
    if (typeof size2 === "number") {
      return Math.ceil(size2 * ratio * precision) / precision;
    }
    if (typeof size2 !== "string") {
      return size2;
    }
    const oldParts = size2.split(unitsSplit);
    if (oldParts === null || !oldParts.length) {
      return size2;
    }
    const newParts = [];
    let code = oldParts.shift();
    let isNumber2 = unitsTest.test(code);
    while (true) {
      if (isNumber2) {
        const num = parseFloat(code);
        if (isNaN(num)) {
          newParts.push(code);
        } else {
          newParts.push(Math.ceil(num * ratio * precision) / precision);
        }
      } else {
        newParts.push(code);
      }
      code = oldParts.shift();
      if (code === void 0) {
        return newParts.join("");
      }
      isNumber2 = !isNumber2;
    }
  }
  function splitSVGDefs(content, tag = "defs") {
    let defs = "";
    const index2 = content.indexOf("<" + tag);
    while (index2 >= 0) {
      const start = content.indexOf(">", index2);
      const end = content.indexOf("</" + tag);
      if (start === -1 || end === -1) {
        break;
      }
      const endEnd = content.indexOf(">", end);
      if (endEnd === -1) {
        break;
      }
      defs += content.slice(start + 1, end).trim();
      content = content.slice(0, index2).trim() + content.slice(endEnd + 1);
    }
    return {
      defs,
      content
    };
  }
  function mergeDefsAndContent(defs, content) {
    return defs ? "<defs>" + defs + "</defs>" + content : content;
  }
  function wrapSVGContent(body, start, end) {
    const split = splitSVGDefs(body);
    return mergeDefsAndContent(split.defs, start + split.content + end);
  }
  const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
  function iconToSVG(icon, customisations) {
    const fullIcon = {
      ...defaultIconProps,
      ...icon
    };
    const fullCustomisations = {
      ...defaultIconCustomisations,
      ...customisations
    };
    const box = {
      left: fullIcon.left,
      top: fullIcon.top,
      width: fullIcon.width,
      height: fullIcon.height
    };
    let body = fullIcon.body;
    [
      fullIcon,
      fullCustomisations
    ].forEach((props) => {
      const transformations = [];
      const hFlip = props.hFlip;
      const vFlip = props.vFlip;
      let rotation = props.rotate;
      if (hFlip) {
        if (vFlip) {
          rotation += 2;
        } else {
          transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
          transformations.push("scale(-1 1)");
          box.top = box.left = 0;
        }
      } else if (vFlip) {
        transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
        transformations.push("scale(1 -1)");
        box.top = box.left = 0;
      }
      let tempValue;
      if (rotation < 0) {
        rotation -= Math.floor(rotation / 4) * 4;
      }
      rotation = rotation % 4;
      switch (rotation) {
        case 1:
          tempValue = box.height / 2 + box.top;
          transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
          break;
        case 2:
          transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
          break;
        case 3:
          tempValue = box.width / 2 + box.left;
          transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
          break;
      }
      if (rotation % 2 === 1) {
        if (box.left !== box.top) {
          tempValue = box.left;
          box.left = box.top;
          box.top = tempValue;
        }
        if (box.width !== box.height) {
          tempValue = box.width;
          box.width = box.height;
          box.height = tempValue;
        }
      }
      if (transformations.length) {
        body = wrapSVGContent(body, '<g transform="' + transformations.join(" ") + '">', "</g>");
      }
    });
    const customisationsWidth = fullCustomisations.width;
    const customisationsHeight = fullCustomisations.height;
    const boxWidth = box.width;
    const boxHeight = box.height;
    let width;
    let height;
    if (customisationsWidth === null) {
      height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
      width = calculateSize(height, boxWidth / boxHeight);
    } else {
      width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
      height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    }
    const attributes = {};
    const setAttr = (prop, value) => {
      if (!isUnsetKeyword(value)) {
        attributes[prop] = value.toString();
      }
    };
    setAttr("width", width);
    setAttr("height", height);
    const viewBox = [
      box.left,
      box.top,
      boxWidth,
      boxHeight
    ];
    attributes.viewBox = viewBox.join(" ");
    return {
      attributes,
      viewBox,
      body
    };
  }
  const regex = /\sid="(\S+)"/g;
  const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  let counter = 0;
  function replaceIDs(body, prefix = randomPrefix) {
    const ids = [];
    let match;
    while (match = regex.exec(body)) {
      ids.push(match[1]);
    }
    if (!ids.length) {
      return body;
    }
    const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    ids.forEach((id) => {
      const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
      const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + suffix + "$3");
    });
    body = body.replace(new RegExp(suffix, "g"), "");
    return body;
  }
  const storage = /* @__PURE__ */ Object.create(null);
  function setAPIModule(provider, item) {
    storage[provider] = item;
  }
  function getAPIModule(provider) {
    return storage[provider] || storage[""];
  }
  function createAPIConfig(source) {
    let resources;
    if (typeof source.resources === "string") {
      resources = [
        source.resources
      ];
    } else {
      resources = source.resources;
      if (!(resources instanceof Array) || !resources.length) {
        return null;
      }
    }
    const result = {
      resources,
      path: source.path || "/",
      maxURL: source.maxURL || 500,
      rotate: source.rotate || 750,
      timeout: source.timeout || 5e3,
      random: source.random === true,
      index: source.index || 0,
      dataAfterTimeout: source.dataAfterTimeout !== false
    };
    return result;
  }
  const configStorage = /* @__PURE__ */ Object.create(null);
  const fallBackAPISources = [
    "https://api.simplesvg.com",
    "https://api.unisvg.com"
  ];
  const fallBackAPI = [];
  while (fallBackAPISources.length > 0) {
    if (fallBackAPISources.length === 1) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      if (Math.random() > 0.5) {
        fallBackAPI.push(fallBackAPISources.shift());
      } else {
        fallBackAPI.push(fallBackAPISources.pop());
      }
    }
  }
  configStorage[""] = createAPIConfig({
    resources: [
      "https://api.iconify.design"
    ].concat(fallBackAPI)
  });
  function addAPIProvider(provider, customConfig) {
    const config2 = createAPIConfig(customConfig);
    if (config2 === null) {
      return false;
    }
    configStorage[provider] = config2;
    return true;
  }
  function getAPIConfig(provider) {
    return configStorage[provider];
  }
  const detectFetch = () => {
    let callback;
    try {
      callback = fetch;
      if (typeof callback === "function") {
        return callback;
      }
    } catch (err) {
    }
  };
  let fetchModule = detectFetch();
  function calculateMaxLength(provider, prefix) {
    const config2 = getAPIConfig(provider);
    if (!config2) {
      return 0;
    }
    let result;
    if (!config2.maxURL) {
      result = 0;
    } else {
      let maxHostLength = 0;
      config2.resources.forEach((item) => {
        const host = item;
        maxHostLength = Math.max(maxHostLength, host.length);
      });
      const url = prefix + ".json?icons=";
      result = config2.maxURL - maxHostLength - config2.path.length - url.length;
    }
    return result;
  }
  function shouldAbort(status) {
    return status === 404;
  }
  const prepare = (provider, prefix, icons) => {
    const results = [];
    const maxLength = calculateMaxLength(provider, prefix);
    const type = "icons";
    let item = {
      type,
      provider,
      prefix,
      icons: []
    };
    let length = 0;
    icons.forEach((name, index2) => {
      length += name.length + 1;
      if (length >= maxLength && index2 > 0) {
        results.push(item);
        item = {
          type,
          provider,
          prefix,
          icons: []
        };
        length = name.length;
      }
      item.icons.push(name);
    });
    results.push(item);
    return results;
  };
  function getPath(provider) {
    if (typeof provider === "string") {
      const config2 = getAPIConfig(provider);
      if (config2) {
        return config2.path;
      }
    }
    return "/";
  }
  const send = (host, params, callback) => {
    if (!fetchModule) {
      callback("abort", 424);
      return;
    }
    let path = getPath(params.provider);
    switch (params.type) {
      case "icons": {
        const prefix = params.prefix;
        const icons = params.icons;
        const iconsList = icons.join(",");
        const urlParams = new URLSearchParams({
          icons: iconsList
        });
        path += prefix + ".json?" + urlParams.toString();
        break;
      }
      case "custom": {
        const uri = params.uri;
        path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
        break;
      }
      default:
        callback("abort", 400);
        return;
    }
    let defaultError = 503;
    fetchModule(host + path).then((response) => {
      const status = response.status;
      if (status !== 200) {
        setTimeout(() => {
          callback(shouldAbort(status) ? "abort" : "next", status);
        });
        return;
      }
      defaultError = 501;
      return response.json();
    }).then((data) => {
      if (typeof data !== "object" || data === null) {
        setTimeout(() => {
          if (data === 404) {
            callback("abort", data);
          } else {
            callback("next", defaultError);
          }
        });
        return;
      }
      setTimeout(() => {
        callback("success", data);
      });
    }).catch(() => {
      callback("next", defaultError);
    });
  };
  const fetchAPIModule = {
    prepare,
    send
  };
  function sortIcons(icons) {
    const result = {
      loaded: [],
      missing: [],
      pending: []
    };
    const storage2 = /* @__PURE__ */ Object.create(null);
    icons.sort((a2, b) => {
      if (a2.provider !== b.provider) {
        return a2.provider.localeCompare(b.provider);
      }
      if (a2.prefix !== b.prefix) {
        return a2.prefix.localeCompare(b.prefix);
      }
      return a2.name.localeCompare(b.name);
    });
    let lastIcon = {
      provider: "",
      prefix: "",
      name: ""
    };
    icons.forEach((icon) => {
      if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
        return;
      }
      lastIcon = icon;
      const provider = icon.provider;
      const prefix = icon.prefix;
      const name = icon.name;
      const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
      const localStorage2 = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
      let list;
      if (name in localStorage2.icons) {
        list = result.loaded;
      } else if (prefix === "" || localStorage2.missing.has(name)) {
        list = result.missing;
      } else {
        list = result.pending;
      }
      const item = {
        provider,
        prefix,
        name
      };
      list.push(item);
    });
    return result;
  }
  function removeCallback(storages, id) {
    storages.forEach((storage2) => {
      const items = storage2.loaderCallbacks;
      if (items) {
        storage2.loaderCallbacks = items.filter((row) => row.id !== id);
      }
    });
  }
  function updateCallbacks(storage2) {
    if (!storage2.pendingCallbacksFlag) {
      storage2.pendingCallbacksFlag = true;
      setTimeout(() => {
        storage2.pendingCallbacksFlag = false;
        const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
        if (!items.length) {
          return;
        }
        let hasPending = false;
        const provider = storage2.provider;
        const prefix = storage2.prefix;
        items.forEach((item) => {
          const icons = item.icons;
          const oldLength = icons.pending.length;
          icons.pending = icons.pending.filter((icon) => {
            if (icon.prefix !== prefix) {
              return true;
            }
            const name = icon.name;
            if (storage2.icons[name]) {
              icons.loaded.push({
                provider,
                prefix,
                name
              });
            } else if (storage2.missing.has(name)) {
              icons.missing.push({
                provider,
                prefix,
                name
              });
            } else {
              hasPending = true;
              return true;
            }
            return false;
          });
          if (icons.pending.length !== oldLength) {
            if (!hasPending) {
              removeCallback([
                storage2
              ], item.id);
            }
            item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
          }
        });
      });
    }
  }
  let idCounter = 0;
  function storeCallback(callback, icons, pendingSources) {
    const id = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id);
    if (!icons.pending.length) {
      return abort;
    }
    const item = {
      id,
      icons,
      callback,
      abort
    };
    pendingSources.forEach((storage2) => {
      (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
    });
    return abort;
  }
  function listToIcons(list, validate = true, simpleNames2 = false) {
    const result = [];
    list.forEach((item) => {
      const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
      if (icon) {
        result.push(icon);
      }
    });
    return result;
  }
  var defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: false,
    dataAfterTimeout: false
  };
  function sendQuery(config2, payload, query, done) {
    const resourcesCount = config2.resources.length;
    const startIndex = config2.random ? Math.floor(Math.random() * resourcesCount) : config2.index;
    let resources;
    if (config2.random) {
      let list = config2.resources.slice(0);
      resources = [];
      while (list.length > 1) {
        const nextIndex = Math.floor(Math.random() * list.length);
        resources.push(list[nextIndex]);
        list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
      }
      resources = resources.concat(list);
    } else {
      resources = config2.resources.slice(startIndex).concat(config2.resources.slice(0, startIndex));
    }
    const startTime = Date.now();
    let status = "pending";
    let queriesSent = 0;
    let lastError;
    let timer = null;
    let queue = [];
    let doneCallbacks = [];
    if (typeof done === "function") {
      doneCallbacks.push(done);
    }
    function resetTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function abort() {
      if (status === "pending") {
        status = "aborted";
      }
      resetTimer();
      queue.forEach((item) => {
        if (item.status === "pending") {
          item.status = "aborted";
        }
      });
      queue = [];
    }
    function subscribe(callback, overwrite) {
      if (overwrite) {
        doneCallbacks = [];
      }
      if (typeof callback === "function") {
        doneCallbacks.push(callback);
      }
    }
    function getQueryStatus() {
      return {
        startTime,
        payload,
        status,
        queriesSent,
        queriesPending: queue.length,
        subscribe,
        abort
      };
    }
    function failQuery() {
      status = "failed";
      doneCallbacks.forEach((callback) => {
        callback(void 0, lastError);
      });
    }
    function clearQueue() {
      queue.forEach((item) => {
        if (item.status === "pending") {
          item.status = "aborted";
        }
      });
      queue = [];
    }
    function moduleResponse(item, response, data) {
      const isError = response !== "success";
      queue = queue.filter((queued) => queued !== item);
      switch (status) {
        case "pending":
          break;
        case "failed":
          if (isError || !config2.dataAfterTimeout) {
            return;
          }
          break;
        default:
          return;
      }
      if (response === "abort") {
        lastError = data;
        failQuery();
        return;
      }
      if (isError) {
        lastError = data;
        if (!queue.length) {
          if (!resources.length) {
            failQuery();
          } else {
            execNext();
          }
        }
        return;
      }
      resetTimer();
      clearQueue();
      if (!config2.random) {
        const index2 = config2.resources.indexOf(item.resource);
        if (index2 !== -1 && index2 !== config2.index) {
          config2.index = index2;
        }
      }
      status = "completed";
      doneCallbacks.forEach((callback) => {
        callback(data);
      });
    }
    function execNext() {
      if (status !== "pending") {
        return;
      }
      resetTimer();
      const resource = resources.shift();
      if (resource === void 0) {
        if (queue.length) {
          timer = setTimeout(() => {
            resetTimer();
            if (status === "pending") {
              clearQueue();
              failQuery();
            }
          }, config2.timeout);
          return;
        }
        failQuery();
        return;
      }
      const item = {
        status: "pending",
        resource,
        callback: (status2, data) => {
          moduleResponse(item, status2, data);
        }
      };
      queue.push(item);
      queriesSent++;
      timer = setTimeout(execNext, config2.rotate);
      query(resource, payload, item.callback);
    }
    setTimeout(execNext);
    return getQueryStatus;
  }
  function initRedundancy(cfg) {
    const config2 = {
      ...defaultConfig,
      ...cfg
    };
    let queries = [];
    function cleanup() {
      queries = queries.filter((item) => item().status === "pending");
    }
    function query(payload, queryCallback, doneCallback) {
      const query2 = sendQuery(config2, payload, queryCallback, (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      });
      queries.push(query2);
      return query2;
    }
    function find(callback) {
      return queries.find((value) => {
        return callback(value);
      }) || null;
    }
    const instance = {
      query,
      find,
      setIndex: (index2) => {
        config2.index = index2;
      },
      getIndex: () => config2.index,
      cleanup
    };
    return instance;
  }
  function emptyCallback$1() {
  }
  const redundancyCache = /* @__PURE__ */ Object.create(null);
  function getRedundancyCache(provider) {
    if (!redundancyCache[provider]) {
      const config2 = getAPIConfig(provider);
      if (!config2) {
        return;
      }
      const redundancy = initRedundancy(config2);
      const cachedReundancy = {
        config: config2,
        redundancy
      };
      redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
  }
  function sendAPIQuery(target, query, callback) {
    let redundancy;
    let send2;
    if (typeof target === "string") {
      const api = getAPIModule(target);
      if (!api) {
        callback(void 0, 424);
        return emptyCallback$1;
      }
      send2 = api.send;
      const cached = getRedundancyCache(target);
      if (cached) {
        redundancy = cached.redundancy;
      }
    } else {
      const config2 = createAPIConfig(target);
      if (config2) {
        redundancy = initRedundancy(config2);
        const moduleKey = target.resources ? target.resources[0] : "";
        const api = getAPIModule(moduleKey);
        if (api) {
          send2 = api.send;
        }
      }
    }
    if (!redundancy || !send2) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    return redundancy.query(query, send2, callback)().abort;
  }
  function emptyCallback() {
  }
  function loadedNewIcons(storage2) {
    if (!storage2.iconsLoaderFlag) {
      storage2.iconsLoaderFlag = true;
      setTimeout(() => {
        storage2.iconsLoaderFlag = false;
        updateCallbacks(storage2);
      });
    }
  }
  function checkIconNamesForAPI(icons) {
    const valid = [];
    const invalid = [];
    icons.forEach((name) => {
      (name.match(matchIconName) ? valid : invalid).push(name);
    });
    return {
      valid,
      invalid
    };
  }
  function parseLoaderResponse(storage2, icons, data) {
    function checkMissing() {
      const pending = storage2.pendingIcons;
      icons.forEach((name) => {
        if (pending) {
          pending.delete(name);
        }
        if (!storage2.icons[name]) {
          storage2.missing.add(name);
        }
      });
    }
    if (data && typeof data === "object") {
      try {
        const parsed = addIconSet(storage2, data);
        if (!parsed.length) {
          checkMissing();
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
    checkMissing();
    loadedNewIcons(storage2);
  }
  function parsePossiblyAsyncResponse(response, callback) {
    if (response instanceof Promise) {
      response.then((data) => {
        callback(data);
      }).catch(() => {
        callback(null);
      });
    } else {
      callback(response);
    }
  }
  function loadNewIcons(storage2, icons) {
    if (!storage2.iconsToLoad) {
      storage2.iconsToLoad = icons;
    } else {
      storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
    }
    if (!storage2.iconsQueueFlag) {
      storage2.iconsQueueFlag = true;
      setTimeout(() => {
        storage2.iconsQueueFlag = false;
        const { provider, prefix } = storage2;
        const icons2 = storage2.iconsToLoad;
        delete storage2.iconsToLoad;
        if (!icons2 || !icons2.length) {
          return;
        }
        const customIconLoader = storage2.loadIcon;
        if (storage2.loadIcons && (icons2.length > 1 || !customIconLoader)) {
          parsePossiblyAsyncResponse(storage2.loadIcons(icons2, prefix, provider), (data) => {
            parseLoaderResponse(storage2, icons2, data);
          });
          return;
        }
        if (customIconLoader) {
          icons2.forEach((name) => {
            const response = customIconLoader(name, prefix, provider);
            parsePossiblyAsyncResponse(response, (data) => {
              const iconSet = data ? {
                prefix,
                icons: {
                  [name]: data
                }
              } : null;
              parseLoaderResponse(storage2, [
                name
              ], iconSet);
            });
          });
          return;
        }
        const { valid, invalid } = checkIconNamesForAPI(icons2);
        if (invalid.length) {
          parseLoaderResponse(storage2, invalid, null);
        }
        if (!valid.length) {
          return;
        }
        const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
        if (!api) {
          parseLoaderResponse(storage2, valid, null);
          return;
        }
        const params = api.prepare(provider, prefix, valid);
        params.forEach((item) => {
          sendAPIQuery(provider, item, (data) => {
            parseLoaderResponse(storage2, item.icons, data);
          });
        });
      });
    }
  }
  const loadIcons = (icons, callback) => {
    const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
    const sortedIcons = sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
      let callCallback = true;
      if (callback) {
        setTimeout(() => {
          if (callCallback) {
            callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
          }
        });
      }
      return () => {
        callCallback = false;
      };
    }
    const newIcons = /* @__PURE__ */ Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon) => {
      const { provider, prefix } = icon;
      if (prefix === lastPrefix && provider === lastProvider) {
        return;
      }
      lastProvider = provider;
      lastPrefix = prefix;
      sources.push(getStorage(provider, prefix));
      const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
      if (!providerNewIcons[prefix]) {
        providerNewIcons[prefix] = [];
      }
    });
    sortedIcons.pending.forEach((icon) => {
      const { provider, prefix, name } = icon;
      const storage2 = getStorage(provider, prefix);
      const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
      if (!pendingQueue.has(name)) {
        pendingQueue.add(name);
        newIcons[provider][prefix].push(name);
      }
    });
    sources.forEach((storage2) => {
      const list = newIcons[storage2.provider][storage2.prefix];
      if (list.length) {
        loadNewIcons(storage2, list);
      }
    });
    return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
  };
  function mergeCustomisations(defaults, item) {
    const result = {
      ...defaults
    };
    for (const key in item) {
      const value = item[key];
      const valueType = typeof value;
      if (key in defaultIconSizeCustomisations) {
        if (value === null || value && (valueType === "string" || valueType === "number")) {
          result[key] = value;
        }
      } else if (valueType === typeof result[key]) {
        result[key] = key === "rotate" ? value % 4 : value;
      }
    }
    return result;
  }
  const separator = /[\s,]+/;
  function flipFromString(custom, flip2) {
    flip2.split(separator).forEach((str) => {
      const value = str.trim();
      switch (value) {
        case "horizontal":
          custom.hFlip = true;
          break;
        case "vertical":
          custom.vFlip = true;
          break;
      }
    });
  }
  function rotateFromString(value, defaultValue = 0) {
    const units = value.replace(/^-?[0-9.]*/, "");
    function cleanup(value2) {
      while (value2 < 0) {
        value2 += 4;
      }
      return value2 % 4;
    }
    if (units === "") {
      const num = parseInt(value);
      return isNaN(num) ? 0 : cleanup(num);
    } else if (units !== value) {
      let split = 0;
      switch (units) {
        case "%":
          split = 25;
          break;
        case "deg":
          split = 90;
      }
      if (split) {
        let num = parseFloat(value.slice(0, value.length - units.length));
        if (isNaN(num)) {
          return 0;
        }
        num = num / split;
        return num % 1 === 0 ? cleanup(num) : 0;
      }
    }
    return defaultValue;
  }
  function iconToHTML(body, attributes) {
    let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const attr in attributes) {
      renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
  }
  function encodeSVGforURL(svg) {
    return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
  }
  function svgToData(svg) {
    return "data:image/svg+xml," + encodeSVGforURL(svg);
  }
  function svgToURL(svg) {
    return 'url("' + svgToData(svg) + '")';
  }
  const defaultExtendedIconCustomisations = {
    ...defaultIconCustomisations,
    inline: false
  };
  const svgDefaults = {
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": true,
    "role": "img"
  };
  const commonProps = {
    display: "inline-block"
  };
  const monotoneProps = {
    backgroundColor: "currentColor"
  };
  const coloredProps = {
    backgroundColor: "transparent"
  };
  const propsToAdd = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
  };
  const propsToAddTo = {
    webkitMask: monotoneProps,
    mask: monotoneProps,
    background: coloredProps
  };
  for (const prefix in propsToAddTo) {
    const list = propsToAddTo[prefix];
    for (const prop in propsToAdd) {
      list[prefix + prop] = propsToAdd[prop];
    }
  }
  const customisationAliases = {};
  [
    "horizontal",
    "vertical"
  ].forEach((prefix) => {
    const attr = prefix.slice(0, 1) + "Flip";
    customisationAliases[prefix + "-flip"] = attr;
    customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
    customisationAliases[prefix + "Flip"] = attr;
  });
  function fixSize(value) {
    return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
  }
  const render = (icon, props) => {
    const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
    const componentProps = {
      ...svgDefaults
    };
    const mode = props.mode || "svg";
    const style = {};
    const propsStyle = props.style;
    const customStyle = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
    for (let key in props) {
      const value = props[key];
      if (value === void 0) {
        continue;
      }
      switch (key) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          customisations[key] = value === true || value === "true" || value === 1;
          break;
        case "flip":
          if (typeof value === "string") {
            flipFromString(customisations, value);
          }
          break;
        case "color":
          style.color = value;
          break;
        case "rotate":
          if (typeof value === "string") {
            customisations[key] = rotateFromString(value);
          } else if (typeof value === "number") {
            customisations[key] = value;
          }
          break;
        case "ariaHidden":
        case "aria-hidden":
          if (value !== true && value !== "true") {
            delete componentProps["aria-hidden"];
          }
          break;
        default: {
          const alias = customisationAliases[key];
          if (alias) {
            if (value === true || value === "true" || value === 1) {
              customisations[alias] = true;
            }
          } else if (defaultExtendedIconCustomisations[key] === void 0) {
            componentProps[key] = value;
          }
        }
      }
    }
    const item = iconToSVG(icon, customisations);
    const renderAttribs = item.attributes;
    if (customisations.inline) {
      style.verticalAlign = "-0.125em";
    }
    if (mode === "svg") {
      componentProps.style = {
        ...style,
        ...customStyle
      };
      Object.assign(componentProps, renderAttribs);
      let localCounter = 0;
      let id = props.id;
      if (typeof id === "string") {
        id = id.replace(/-/g, "_");
      }
      componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
      return h("svg", componentProps);
    }
    const { body, width, height } = icon;
    const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
    const html = iconToHTML(body, {
      ...renderAttribs,
      width: width + "",
      height: height + ""
    });
    componentProps.style = {
      ...style,
      "--svg": svgToURL(html),
      "width": fixSize(renderAttribs.width),
      "height": fixSize(renderAttribs.height),
      ...commonProps,
      ...useMask ? monotoneProps : coloredProps,
      ...customStyle
    };
    return h("span", componentProps);
  };
  allowSimpleNames(true);
  setAPIModule("", fetchAPIModule);
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    const _window = window;
    if (_window.IconifyPreload !== void 0) {
      const preload = _window.IconifyPreload;
      const err = "Invalid IconifyPreload syntax.";
      if (typeof preload === "object" && preload !== null) {
        (preload instanceof Array ? preload : [
          preload
        ]).forEach((item) => {
          try {
            if (typeof item !== "object" || item === null || item instanceof Array || typeof item.icons !== "object" || typeof item.prefix !== "string" || !addCollection(item)) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        });
      }
    }
    if (_window.IconifyProviders !== void 0) {
      const providers = _window.IconifyProviders;
      if (typeof providers === "object" && providers !== null) {
        for (let key in providers) {
          const err = "IconifyProviders[" + key + "] is invalid.";
          try {
            const value = providers[key];
            if (typeof value !== "object" || !value || value.resources === void 0) {
              continue;
            }
            if (!addAPIProvider(key, value)) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        }
      }
    }
  }
  const emptyIcon = {
    ...defaultIconProps,
    body: ""
  };
  const Icon = defineComponent({
    inheritAttrs: false,
    data() {
      return {
        _name: "",
        _loadingIcon: null,
        iconMounted: false,
        counter: 0
      };
    },
    mounted() {
      this.iconMounted = true;
    },
    unmounted() {
      this.abortLoading();
    },
    methods: {
      abortLoading() {
        if (this._loadingIcon) {
          this._loadingIcon.abort();
          this._loadingIcon = null;
        }
      },
      getIcon(icon, onload, customise) {
        if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
          this._name = "";
          this.abortLoading();
          return {
            data: icon
          };
        }
        let iconName;
        if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
          this.abortLoading();
          return null;
        }
        let data = getIconData(iconName);
        if (!data) {
          if (!this._loadingIcon || this._loadingIcon.name !== icon) {
            this.abortLoading();
            this._name = "";
            if (data !== null) {
              this._loadingIcon = {
                name: icon,
                abort: loadIcons([
                  iconName
                ], () => {
                  this.counter++;
                })
              };
            }
          }
          return null;
        }
        this.abortLoading();
        if (this._name !== icon) {
          this._name = icon;
          if (onload) {
            onload(icon);
          }
        }
        if (customise) {
          data = Object.assign({}, data);
          const customised = customise(data.body, iconName.name, iconName.prefix, iconName.provider);
          if (typeof customised === "string") {
            data.body = customised;
          }
        }
        const classes = [
          "iconify"
        ];
        if (iconName.prefix !== "") {
          classes.push("iconify--" + iconName.prefix);
        }
        if (iconName.provider !== "") {
          classes.push("iconify--" + iconName.provider);
        }
        return {
          data,
          classes
        };
      }
    },
    render() {
      this.counter;
      const props = this.$attrs;
      const icon = this.iconMounted || props.ssr ? this.getIcon(props.icon, props.onLoad, props.customise) : null;
      if (!icon) {
        return render(emptyIcon, props);
      }
      let newProps = props;
      if (icon.classes) {
        newProps = {
          ...props,
          class: (typeof props["class"] === "string" ? props["class"] + " " : "") + icon.classes.join(" ")
        };
      }
      return render({
        ...defaultIconProps,
        ...icon.data
      }, newProps);
    }
  });
  _sfc_main$t = defineComponent({
    __name: "Icon",
    props: {
      name: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Icon), {
          icon: _ctx.name.replace(/^i-/, "")
        }, null, 8, [
          "icon"
        ]);
      };
    }
  });
  const ImageComponent = "img";
  const avatarGroupInjectionKey = Symbol("nuxt-ui.avatar-group");
  function useAvatarGroup(props) {
    const avatarGroup = inject(avatarGroupInjectionKey, void 0);
    const size2 = computed(() => props.size ?? (avatarGroup == null ? void 0 : avatarGroup.value.size));
    provide(avatarGroupInjectionKey, computed(() => ({
      size: size2.value
    })));
    return {
      size: size2
    };
  }
  const theme$l = {
    "slots": {
      "root": "inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full align-middle bg-(--ui-bg-elevated)",
      "image": "h-full w-full rounded-[inherit] object-cover",
      "fallback": "font-medium leading-none text-(--ui-text-muted) truncate",
      "icon": "text-(--ui-text-muted) shrink-0"
    },
    "variants": {
      "size": {
        "3xs": {
          "root": "size-4 text-[8px]"
        },
        "2xs": {
          "root": "size-5 text-[10px]"
        },
        "xs": {
          "root": "size-6 text-xs"
        },
        "sm": {
          "root": "size-7 text-sm"
        },
        "md": {
          "root": "size-8 text-base"
        },
        "lg": {
          "root": "size-9 text-lg"
        },
        "xl": {
          "root": "size-10 text-xl"
        },
        "2xl": {
          "root": "size-11 text-[22px]"
        },
        "3xl": {
          "root": "size-12 text-2xl"
        }
      }
    },
    "defaultVariants": {
      "size": "md"
    }
  };
  var l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x$1 = (e, o) => JSON.stringify(e) === JSON.stringify(o);
  function i(e, o) {
    e.forEach(function(r) {
      Array.isArray(r) ? i(r, o) : o.push(r);
    });
  }
  function y(e) {
    let o = [];
    return i(e, o), o;
  }
  var a = (...e) => y(e).filter(Boolean), p = (e, o) => {
    let r = {}, c2 = Object.keys(e), f = Object.keys(o);
    for (let t of c2) if (f.includes(t)) {
      let s = e[t], n = o[t];
      Array.isArray(s) || Array.isArray(n) ? r[t] = a(n, s) : typeof s == "object" && typeof n == "object" ? r[t] = p(s, n) : r[t] = n + " " + s;
    } else r[t] = e[t];
    for (let t of f) c2.includes(t) || (r[t] = o[t]);
    return r;
  }, g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
  const CLASS_PART_SEPARATOR = "-";
  const createClassGroupUtils = (config2) => {
    const classMap = createClassMap(config2);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config2;
    const getClassGroupId = (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [
          ...conflicts,
          ...conflictingClassGroupModifiers[classGroupId]
        ];
      }
      return conflicts;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  const getGroupRecursive = (classParts, classPartObject) => {
    var _a2;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a2 = classPartObject.validators.find(({ validator }) => validator(classRest))) == null ? void 0 : _a2.classGroupId;
  };
  const arbitraryPropertyRegex = /^\[(.+)\]$/;
  const getGroupIdForArbitraryProperty = (className) => {
    if (arbitraryPropertyRegex.test(className)) {
      const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  };
  const createClassMap = (config2) => {
    const { theme: theme2, classGroups } = config2;
    const classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const classGroupId in classGroups) {
      processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme2);
    }
    return classMap;
  };
  const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme2) => {
    classGroup.forEach((classDefinition) => {
      if (typeof classDefinition === "string") {
        const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme2), classPartObject, classGroupId, theme2);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(([key, classGroup2]) => {
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme2);
      });
    });
  };
  const getPart = (classPartObject, path) => {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  };
  const isThemeGetter = (func) => func.isThemeGetter;
  const createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ new Map();
    let previousCache = /* @__PURE__ */ new Map();
    const update = (key, value) => {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    };
    return {
      get(key) {
        let value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  };
  const IMPORTANT_MODIFIER = "!";
  const MODIFIER_SEPARATOR = ":";
  const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
  const createParseClassName = (config2) => {
    const { prefix, experimentalParseClassName } = config2;
    let parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let parenDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      for (let index2 = 0; index2 < className.length; index2++) {
        let currentCharacter = className[index2];
        if (bracketDepth === 0 && parenDepth === 0) {
          if (currentCharacter === MODIFIER_SEPARATOR) {
            modifiers.push(className.slice(modifierStart, index2));
            modifierStart = index2 + MODIFIER_SEPARATOR_LENGTH;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index2;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        } else if (currentCharacter === "(") {
          parenDepth++;
        } else if (currentCharacter === ")") {
          parenDepth--;
        }
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
      const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
    if (prefix) {
      const fullPrefix = prefix + MODIFIER_SEPARATOR;
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: className,
        maybePostfixModifierPosition: void 0
      };
    }
    if (experimentalParseClassName) {
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal
      });
    }
    return parseClassName;
  };
  const stripImportantModifier = (baseClassName) => {
    if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(0, baseClassName.length - 1);
    }
    if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(1);
    }
    return baseClassName;
  };
  const createSortModifiers = (config2) => {
    const orderSensitiveModifiers = Object.fromEntries(config2.orderSensitiveModifiers.map((modifier) => [
      modifier,
      true
    ]));
    const sortModifiers = (modifiers) => {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
        if (isPositionSensitive) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    };
    return sortModifiers;
  };
  const createConfigUtils = (config2) => ({
    cache: createLruCache(config2.cacheSize),
    parseClassName: createParseClassName(config2),
    sortModifiers: createSortModifiers(config2),
    ...createClassGroupUtils(config2)
  });
  const SPLIT_CLASSES_REGEX = /\s+/;
  const mergeClassList = (classList, configUtils) => {
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
      const originalClassName = classNames[index2];
      const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
      if (isExternal) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      let hasPostfixModifier = !!maybePostfixModifierPosition;
      let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.includes(classId)) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
        const group = conflictGroups[i2];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  function twJoin() {
    let index2 = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index2 < arguments.length) {
      if (argument = arguments[index2++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  const toValue = (mix) => {
    if (typeof mix === "string") {
      return mix;
    }
    let resolvedValue;
    let string = "";
    for (let k = 0; k < mix.length; k++) {
      if (mix[k]) {
        if (resolvedValue = toValue(mix[k])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config2 = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config2);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  const fromTheme = (key) => {
    const themeGetter = (theme2) => theme2[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  const fractionRegex = /^\d+\/\d+$/;
  const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  const isFraction = (value) => fractionRegex.test(value);
  const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
  const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
  const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  const isTshirtSize = (value) => tshirtUnitRegex.test(value);
  const isAny = () => true;
  const isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
  const isNever = () => false;
  const isShadow = (value) => shadowRegex.test(value);
  const isImage = (value) => imageRegex.test(value);
  const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
  const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
  const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
  const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
  const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
  const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
  const isArbitraryShadow = (value) => getIsArbitraryValue(value, isNever, isShadow);
  const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
  const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
  const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
  const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
  const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
  const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
  const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
  const getIsArbitraryValue = (value, testLabel, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return shouldMatchNoLabel;
    }
    return false;
  };
  const isLabelPosition = (label) => label === "position";
  const imageLabels = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]);
  const isLabelImage = (label) => imageLabels.has(label);
  const sizeLabels = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]);
  const isLabelSize = (label) => sizeLabels.has(label);
  const isLabelLength = (label) => label === "length";
  const isLabelNumber = (label) => label === "number";
  const isLabelFamilyName = (label) => label === "family-name";
  const isLabelShadow = (label) => label === "shadow";
  const getDefaultConfig = () => {
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ];
    const scalePosition = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top"
    ];
    const scaleOverflow = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ];
    const scaleOverscroll = () => [
      "auto",
      "contain",
      "none"
    ];
    const scaleUnambiguousSpacing = () => [
      isArbitraryVariable,
      isArbitraryValue,
      themeSpacing
    ];
    const scaleInset = () => [
      isFraction,
      "full",
      "auto",
      ...scaleUnambiguousSpacing()
    ];
    const scaleGridTemplateColsRows = () => [
      isInteger,
      "none",
      "subgrid",
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleGridColRowStartAndEnd = () => [
      "auto",
      {
        span: [
          "full",
          isInteger,
          isArbitraryVariable,
          isArbitraryValue
        ]
      },
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleGridColRowStartOrEnd = () => [
      isInteger,
      "auto",
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleGridAutoColsRows = () => [
      "auto",
      "min",
      "max",
      "fr",
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleAlignPrimaryAxis = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline"
    ];
    const scaleAlignSecondaryAxis = () => [
      "start",
      "end",
      "center",
      "stretch"
    ];
    const scaleMargin = () => [
      "auto",
      ...scaleUnambiguousSpacing()
    ];
    const scaleSizing = () => [
      isFraction,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...scaleUnambiguousSpacing()
    ];
    const scaleColor = () => [
      themeColor,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleGradientStopPosition = () => [
      isPercent,
      isArbitraryLength
    ];
    const scaleRadius = () => [
      "",
      "none",
      "full",
      themeRadius,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleBorderWidth = () => [
      "",
      isNumber,
      isArbitraryVariableLength,
      isArbitraryLength
    ];
    const scaleLineStyle = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ];
    const scaleBlendMode = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ];
    const scaleBlur = () => [
      "",
      "none",
      themeBlur,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleOrigin = () => [
      "center",
      "top",
      "top-right",
      "right",
      "bottom-right",
      "bottom",
      "bottom-left",
      "left",
      "top-left",
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleRotate = () => [
      "none",
      isNumber,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleScale = () => [
      "none",
      isNumber,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleSkew = () => [
      isNumber,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleTranslate = () => [
      isFraction,
      "full",
      ...scaleUnambiguousSpacing()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          isTshirtSize
        ],
        breakpoint: [
          isTshirtSize
        ],
        color: [
          isAny
        ],
        container: [
          isTshirtSize
        ],
        "drop-shadow": [
          isTshirtSize
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          isAnyNonArbitrary
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          isTshirtSize
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          isTshirtSize
        ],
        shadow: [
          isTshirtSize
        ],
        spacing: [
          "px",
          isNumber
        ],
        text: [
          isTshirtSize
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              isFraction,
              isArbitraryValue,
              isArbitraryVariable,
              themeAspect
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              isNumber,
              isArbitraryValue,
              isArbitraryVariable,
              themeContainer
            ]
          }
        ],
        "break-after": [
          {
            "break-after": scaleBreak()
          }
        ],
        "break-before": [
          {
            "break-before": scaleBreak()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: [
              ...scalePosition(),
              isArbitraryValue,
              isArbitraryVariable
            ]
          }
        ],
        overflow: [
          {
            overflow: scaleOverflow()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": scaleOverflow()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": scaleOverflow()
          }
        ],
        overscroll: [
          {
            overscroll: scaleOverscroll()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": scaleOverscroll()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": scaleOverscroll()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: scaleInset()
          }
        ],
        "inset-x": [
          {
            "inset-x": scaleInset()
          }
        ],
        "inset-y": [
          {
            "inset-y": scaleInset()
          }
        ],
        start: [
          {
            start: scaleInset()
          }
        ],
        end: [
          {
            end: scaleInset()
          }
        ],
        top: [
          {
            top: scaleInset()
          }
        ],
        right: [
          {
            right: scaleInset()
          }
        ],
        bottom: [
          {
            bottom: scaleInset()
          }
        ],
        left: [
          {
            left: scaleInset()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              isInteger,
              "auto",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        basis: [
          {
            basis: [
              isFraction,
              "full",
              "auto",
              themeContainer,
              ...scaleUnambiguousSpacing()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              isNumber,
              isFraction,
              "auto",
              "initial",
              "none",
              isArbitraryValue
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        order: [
          {
            order: [
              isInteger,
              "first",
              "last",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": scaleGridTemplateColsRows()
          }
        ],
        "col-start-end": [
          {
            col: scaleGridColRowStartAndEnd()
          }
        ],
        "col-start": [
          {
            "col-start": scaleGridColRowStartOrEnd()
          }
        ],
        "col-end": [
          {
            "col-end": scaleGridColRowStartOrEnd()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": scaleGridTemplateColsRows()
          }
        ],
        "row-start-end": [
          {
            row: scaleGridColRowStartAndEnd()
          }
        ],
        "row-start": [
          {
            "row-start": scaleGridColRowStartOrEnd()
          }
        ],
        "row-end": [
          {
            "row-end": scaleGridColRowStartOrEnd()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": scaleGridAutoColsRows()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": scaleGridAutoColsRows()
          }
        ],
        gap: [
          {
            gap: scaleUnambiguousSpacing()
          }
        ],
        "gap-x": [
          {
            "gap-x": scaleUnambiguousSpacing()
          }
        ],
        "gap-y": [
          {
            "gap-y": scaleUnambiguousSpacing()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...scaleAlignPrimaryAxis(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...scaleAlignSecondaryAxis(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...scaleAlignSecondaryAxis()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...scaleAlignPrimaryAxis()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...scaleAlignSecondaryAxis(),
              "baseline"
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...scaleAlignSecondaryAxis(),
              "baseline"
            ]
          }
        ],
        "place-content": [
          {
            "place-content": scaleAlignPrimaryAxis()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...scaleAlignSecondaryAxis(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...scaleAlignSecondaryAxis()
            ]
          }
        ],
        p: [
          {
            p: scaleUnambiguousSpacing()
          }
        ],
        px: [
          {
            px: scaleUnambiguousSpacing()
          }
        ],
        py: [
          {
            py: scaleUnambiguousSpacing()
          }
        ],
        ps: [
          {
            ps: scaleUnambiguousSpacing()
          }
        ],
        pe: [
          {
            pe: scaleUnambiguousSpacing()
          }
        ],
        pt: [
          {
            pt: scaleUnambiguousSpacing()
          }
        ],
        pr: [
          {
            pr: scaleUnambiguousSpacing()
          }
        ],
        pb: [
          {
            pb: scaleUnambiguousSpacing()
          }
        ],
        pl: [
          {
            pl: scaleUnambiguousSpacing()
          }
        ],
        m: [
          {
            m: scaleMargin()
          }
        ],
        mx: [
          {
            mx: scaleMargin()
          }
        ],
        my: [
          {
            my: scaleMargin()
          }
        ],
        ms: [
          {
            ms: scaleMargin()
          }
        ],
        me: [
          {
            me: scaleMargin()
          }
        ],
        mt: [
          {
            mt: scaleMargin()
          }
        ],
        mr: [
          {
            mr: scaleMargin()
          }
        ],
        mb: [
          {
            mb: scaleMargin()
          }
        ],
        ml: [
          {
            ml: scaleMargin()
          }
        ],
        "space-x": [
          {
            "space-x": scaleUnambiguousSpacing()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": scaleUnambiguousSpacing()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: scaleSizing()
          }
        ],
        w: [
          {
            w: [
              themeContainer,
              "screen",
              ...scaleSizing()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              themeContainer,
              "screen",
              "none",
              ...scaleSizing()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              themeContainer,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  themeBreakpoint
                ]
              },
              ...scaleSizing()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              ...scaleSizing()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "none",
              ...scaleSizing()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              ...scaleSizing()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              themeText,
              isArbitraryVariableLength,
              isArbitraryLength
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              themeFontWeight,
              isArbitraryVariable,
              isArbitraryNumber
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              isPercent,
              isArbitraryValue
            ]
          }
        ],
        "font-family": [
          {
            font: [
              isArbitraryVariableFamilyName,
              isArbitraryValue,
              themeFont
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              themeTracking,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              isNumber,
              "none",
              isArbitraryVariable,
              isArbitraryNumber
            ]
          }
        ],
        leading: [
          {
            leading: [
              themeLeading,
              ...scaleUnambiguousSpacing()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: scaleColor()
          }
        ],
        "text-color": [
          {
            text: scaleColor()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...scaleLineStyle(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              isNumber,
              "from-font",
              "auto",
              isArbitraryVariable,
              isArbitraryLength
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: scaleColor()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              isNumber,
              "auto",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: scaleUnambiguousSpacing()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: [
              ...scalePosition(),
              isArbitraryVariablePosition,
              isArbitraryPosition
            ]
          }
        ],
        "bg-repeat": [
          {
            bg: [
              "no-repeat",
              {
                repeat: [
                  "",
                  "x",
                  "y",
                  "space",
                  "round"
                ]
              }
            ]
          }
        ],
        "bg-size": [
          {
            bg: [
              "auto",
              "cover",
              "contain",
              isArbitraryVariableSize,
              isArbitrarySize
            ]
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  isInteger,
                  isArbitraryVariable,
                  isArbitraryValue
                ],
                radial: [
                  "",
                  isArbitraryVariable,
                  isArbitraryValue
                ],
                conic: [
                  isInteger,
                  isArbitraryVariable,
                  isArbitraryValue
                ]
              },
              isArbitraryVariableImage,
              isArbitraryImage
            ]
          }
        ],
        "bg-color": [
          {
            bg: scaleColor()
          }
        ],
        "gradient-from-pos": [
          {
            from: scaleGradientStopPosition()
          }
        ],
        "gradient-via-pos": [
          {
            via: scaleGradientStopPosition()
          }
        ],
        "gradient-to-pos": [
          {
            to: scaleGradientStopPosition()
          }
        ],
        "gradient-from": [
          {
            from: scaleColor()
          }
        ],
        "gradient-via": [
          {
            via: scaleColor()
          }
        ],
        "gradient-to": [
          {
            to: scaleColor()
          }
        ],
        rounded: [
          {
            rounded: scaleRadius()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": scaleRadius()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": scaleRadius()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": scaleRadius()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": scaleRadius()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": scaleRadius()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": scaleRadius()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": scaleRadius()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": scaleRadius()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": scaleRadius()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": scaleRadius()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": scaleRadius()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": scaleRadius()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": scaleRadius()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": scaleRadius()
          }
        ],
        "border-w": [
          {
            border: scaleBorderWidth()
          }
        ],
        "border-w-x": [
          {
            "border-x": scaleBorderWidth()
          }
        ],
        "border-w-y": [
          {
            "border-y": scaleBorderWidth()
          }
        ],
        "border-w-s": [
          {
            "border-s": scaleBorderWidth()
          }
        ],
        "border-w-e": [
          {
            "border-e": scaleBorderWidth()
          }
        ],
        "border-w-t": [
          {
            "border-t": scaleBorderWidth()
          }
        ],
        "border-w-r": [
          {
            "border-r": scaleBorderWidth()
          }
        ],
        "border-w-b": [
          {
            "border-b": scaleBorderWidth()
          }
        ],
        "border-w-l": [
          {
            "border-l": scaleBorderWidth()
          }
        ],
        "divide-x": [
          {
            "divide-x": scaleBorderWidth()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": scaleBorderWidth()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...scaleLineStyle(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...scaleLineStyle(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: scaleColor()
          }
        ],
        "border-color-x": [
          {
            "border-x": scaleColor()
          }
        ],
        "border-color-y": [
          {
            "border-y": scaleColor()
          }
        ],
        "border-color-s": [
          {
            "border-s": scaleColor()
          }
        ],
        "border-color-e": [
          {
            "border-e": scaleColor()
          }
        ],
        "border-color-t": [
          {
            "border-t": scaleColor()
          }
        ],
        "border-color-r": [
          {
            "border-r": scaleColor()
          }
        ],
        "border-color-b": [
          {
            "border-b": scaleColor()
          }
        ],
        "border-color-l": [
          {
            "border-l": scaleColor()
          }
        ],
        "divide-color": [
          {
            divide: scaleColor()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...scaleLineStyle(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              isNumber,
              isArbitraryVariableLength,
              isArbitraryLength
            ]
          }
        ],
        "outline-color": [
          {
            outline: [
              themeColor
            ]
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              themeShadow,
              isArbitraryVariableShadow,
              isArbitraryShadow
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: scaleColor()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              isArbitraryVariable,
              isArbitraryValue,
              themeInsetShadow
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": scaleColor()
          }
        ],
        "ring-w": [
          {
            ring: scaleBorderWidth()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: scaleColor()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              isNumber,
              isArbitraryLength
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": scaleColor()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": scaleBorderWidth()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": scaleColor()
          }
        ],
        opacity: [
          {
            opacity: [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...scaleBlendMode(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": scaleBlendMode()
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        blur: [
          {
            blur: scaleBlur()
          }
        ],
        brightness: [
          {
            brightness: [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              themeDropShadow,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": scaleBlur()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": scaleUnambiguousSpacing()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": scaleUnambiguousSpacing()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": scaleUnambiguousSpacing()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              isNumber,
              "initial",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              themeEase,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        delay: [
          {
            delay: [
              isNumber,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              themeAnimate,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              themePerspective,
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": scaleOrigin()
          }
        ],
        rotate: [
          {
            rotate: scaleRotate()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": scaleRotate()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": scaleRotate()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": scaleRotate()
          }
        ],
        scale: [
          {
            scale: scaleScale()
          }
        ],
        "scale-x": [
          {
            "scale-x": scaleScale()
          }
        ],
        "scale-y": [
          {
            "scale-y": scaleScale()
          }
        ],
        "scale-z": [
          {
            "scale-z": scaleScale()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: scaleSkew()
          }
        ],
        "skew-x": [
          {
            "skew-x": scaleSkew()
          }
        ],
        "skew-y": [
          {
            "skew-y": scaleSkew()
          }
        ],
        transform: [
          {
            transform: [
              isArbitraryVariable,
              isArbitraryValue,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: scaleOrigin()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: scaleTranslate()
          }
        ],
        "translate-x": [
          {
            "translate-x": scaleTranslate()
          }
        ],
        "translate-y": [
          {
            "translate-y": scaleTranslate()
          }
        ],
        "translate-z": [
          {
            "translate-z": scaleTranslate()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: scaleColor()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: scaleColor()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": scaleUnambiguousSpacing()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": scaleUnambiguousSpacing()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": scaleUnambiguousSpacing()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": scaleUnambiguousSpacing()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": scaleUnambiguousSpacing()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": scaleUnambiguousSpacing()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": scaleUnambiguousSpacing()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": scaleUnambiguousSpacing()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": scaleUnambiguousSpacing()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": scaleUnambiguousSpacing()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": scaleUnambiguousSpacing()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": scaleUnambiguousSpacing()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": scaleUnambiguousSpacing()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": scaleUnambiguousSpacing()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": scaleUnambiguousSpacing()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": scaleUnambiguousSpacing()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": scaleUnambiguousSpacing()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": scaleUnambiguousSpacing()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              isArbitraryVariable,
              isArbitraryValue
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...scaleColor()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              isNumber,
              isArbitraryVariableLength,
              isArbitraryLength,
              isArbitraryNumber
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...scaleColor()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**"
      ]
    };
  };
  const mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} }) => {
    overrideProperty(baseConfig, "cacheSize", cacheSize);
    overrideProperty(baseConfig, "prefix", prefix);
    overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
    overrideConfigProperties(baseConfig.theme, override.theme);
    overrideConfigProperties(baseConfig.classGroups, override.classGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
    overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
    mergeConfigProperties(baseConfig.theme, extend.theme);
    mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
    mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
    return baseConfig;
  };
  const overrideProperty = (baseObject, overrideKey, overrideValue) => {
    if (overrideValue !== void 0) {
      baseObject[overrideKey] = overrideValue;
    }
  };
  const overrideConfigProperties = (baseObject, overrideObject) => {
    if (overrideObject) {
      for (const key in overrideObject) {
        overrideProperty(baseObject, key, overrideObject[key]);
      }
    }
  };
  const mergeConfigProperties = (baseObject, mergeObject) => {
    if (mergeObject) {
      for (const key in mergeObject) {
        mergeArrayProperties(baseObject, mergeObject, key);
      }
    }
  };
  const mergeArrayProperties = (baseObject, mergeObject, key) => {
    const mergeValue = mergeObject[key];
    if (mergeValue !== void 0) {
      baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
    }
  };
  const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
  const twMerge = createTailwindMerge(getDefaultConfig);
  var ie$1 = {
    twMerge: true,
    twMergeConfig: {},
    responsiveVariants: false
  }, x = (s) => s || void 0, N = (...s) => x(y(s).filter(Boolean).join(" ")), R = null, v = {}, q = false, M = (...s) => (b$1) => b$1.twMerge ? ((!R || q) && (q = false, R = u(v) ? twMerge : extendTailwindMerge({
    ...v,
    extend: {
      theme: v.theme,
      classGroups: v.classGroups,
      conflictingClassGroupModifiers: v.conflictingClassGroupModifiers,
      conflictingClassGroups: v.conflictingClassGroups,
      ...v.extend
    }
  })), x(R(N(s)))) : N(s), _$1 = (s, b) => {
    for (let e in b) s.hasOwnProperty(e) ? s[e] = N(s[e], b[e]) : s[e] = b[e];
    return s;
  }, ce = (s, b$1) => {
    let { extend: e = null, slots: O2 = {}, variants: U = {}, compoundVariants: W = [], compoundSlots: C2 = [], defaultVariants: z = {} } = s, m = {
      ...ie$1,
      ...b$1
    }, k = e != null && e.base ? N(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(U, e.variants) : U, w = e != null && e.defaultVariants && !u(e.defaultVariants) ? {
      ...e.defaultVariants,
      ...z
    } : z;
    !u(m.twMergeConfig) && !x$1(m.twMergeConfig, v) && (q = true, v = m.twMergeConfig);
    let S = u(e == null ? void 0 : e.slots), T = u(O2) ? {} : {
      base: N(s == null ? void 0 : s.base, S && (e == null ? void 0 : e.base)),
      ...O2
    }, j = S ? T : _$1({
      ...e == null ? void 0 : e.slots
    }, u(T) ? {
      base: s == null ? void 0 : s.base
    } : T), h$1 = u(e == null ? void 0 : e.compoundVariants) ? W : a(e == null ? void 0 : e.compoundVariants, W), V = (l$12) => {
      if (u(g$1) && u(O2) && S) return M(k, l$12 == null ? void 0 : l$12.class, l$12 == null ? void 0 : l$12.className)(m);
      if (h$1 && !Array.isArray(h$1)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);
      if (C2 && !Array.isArray(C2)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C2}`);
      let P = (a2, n, t = [], i2) => {
        let r = t;
        if (typeof n == "string") r = r.concat(g(n).split(" ").map((o) => `${a2}:${o}`));
        else if (Array.isArray(n)) r = r.concat(n.reduce((o, c2) => o.concat(`${a2}:${c2}`), []));
        else if (typeof n == "object" && typeof i2 == "string") {
          for (let o in n) if (n.hasOwnProperty(o) && o === i2) {
            let c2 = n[o];
            if (c2 && typeof c2 == "string") {
              let u2 = g(c2);
              r[i2] ? r[i2] = r[i2].concat(u2.split(" ").map((f) => `${a2}:${f}`)) : r[i2] = u2.split(" ").map((f) => `${a2}:${f}`);
            } else Array.isArray(c2) && c2.length > 0 && (r[i2] = c2.reduce((u2, f) => u2.concat(`${a2}:${f}`), []));
          }
        }
        return r;
      }, D = (a$1, n = g$1, t = null, i2 = null) => {
        var L;
        let r = n[a$1];
        if (!r || u(r)) return null;
        let o = (L = i2 == null ? void 0 : i2[a$1]) != null ? L : l$12 == null ? void 0 : l$12[a$1];
        if (o === null) return null;
        let c2 = l(o), u$1 = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === true, f = w == null ? void 0 : w[a$1], d = [];
        if (typeof c2 == "object" && u$1) for (let [E, Q2] of Object.entries(c2)) {
          let ne = r[Q2];
          if (E === "initial") {
            f = Q2;
            continue;
          }
          Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(E) || (d = P(E, ne, d, t));
        }
        let $ = c2 != null && typeof c2 != "object" ? c2 : l(f), A = r[$ || "false"];
        return typeof d == "object" && typeof t == "string" && d[t] ? _$1(d, A) : d.length > 0 ? (d.push(A), t === "base" ? d.join(" ") : d) : A;
      }, p2 = () => g$1 ? Object.keys(g$1).map((a2) => D(a2, g$1)) : null, ee2 = (a2, n) => {
        if (!g$1 || typeof g$1 != "object") return null;
        let t = new Array();
        for (let i2 in g$1) {
          let r = D(i2, g$1, a2, n), o = a2 === "base" && typeof r == "string" ? r : r && r[a2];
          o && (t[t.length] = o);
        }
        return t;
      }, H = {};
      for (let a2 in l$12) l$12[a2] !== void 0 && (H[a2] = l$12[a2]);
      let I = (a2, n) => {
        var i2;
        let t = typeof (l$12 == null ? void 0 : l$12[a2]) == "object" ? {
          [a2]: (i2 = l$12[a2]) == null ? void 0 : i2.initial
        } : {};
        return {
          ...w,
          ...H,
          ...t,
          ...n
        };
      }, J = (a2 = [], n) => {
        let t = [];
        for (let { class: i2, className: r, ...o } of a2) {
          let c2 = true;
          for (let [u2, f] of Object.entries(o)) {
            let d = I(u2, n)[u2];
            if (Array.isArray(f)) {
              if (!f.includes(d)) {
                c2 = false;
                break;
              }
            } else {
              let $ = (A) => A == null || A === false;
              if ($(f) && $(d)) continue;
              if (d !== f) {
                c2 = false;
                break;
              }
            }
          }
          c2 && (i2 && t.push(i2), r && t.push(r));
        }
        return t;
      }, te = (a2) => {
        let n = J(h$1, a2);
        if (!Array.isArray(n)) return n;
        let t = {};
        for (let i2 of n) if (typeof i2 == "string" && (t.base = M(t.base, i2)(m)), typeof i2 == "object") for (let [r, o] of Object.entries(i2)) t[r] = M(t[r], o)(m);
        return t;
      }, ae = (a2) => {
        if (C2.length < 1) return null;
        let n = {};
        for (let { slots: t = [], class: i2, className: r, ...o } of C2) {
          if (!u(o)) {
            let c2 = true;
            for (let u2 of Object.keys(o)) {
              let f = I(u2, a2)[u2];
              if (f === void 0 || (Array.isArray(o[u2]) ? !o[u2].includes(f) : o[u2] !== f)) {
                c2 = false;
                break;
              }
            }
            if (!c2) continue;
          }
          for (let c2 of t) n[c2] = n[c2] || [], n[c2].push([
            i2,
            r
          ]);
        }
        return n;
      };
      if (!u(O2) || !S) {
        let a2 = {};
        if (typeof j == "object" && !u(j)) for (let n of Object.keys(j)) a2[n] = (t) => {
          var i2, r;
          return M(j[n], ee2(n, t), ((i2 = te(t)) != null ? i2 : [])[n], ((r = ae(t)) != null ? r : [])[n], t == null ? void 0 : t.class, t == null ? void 0 : t.className)(m);
        };
        return a2;
      }
      return M(k, p2(), J(h$1), l$12 == null ? void 0 : l$12.class, l$12 == null ? void 0 : l$12.className)(m);
    }, K = () => {
      if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
    };
    return V.variantKeys = K(), V.extend = e, V.base = k, V.slots = j, V.variants = g$1, V.defaultVariants = w, V.compoundSlots = C2, V.compoundVariants = h$1, V;
  }, fe = (s) => (b, e) => ce(b, e ? p(s, e) : s);
  const appConfigTv$1 = _appConfig;
  tv$1 = fe((_a = appConfigTv$1.ui) == null ? void 0 : _a.tv);
  const appConfigAvatar = _appConfig;
  const avatar = tv$1({
    extend: tv$1(theme$l),
    ...((_b = appConfigAvatar.ui) == null ? void 0 : _b.avatar) || {}
  });
  _sfc_main$s = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "Avatar",
    props: {
      as: {
        default: "span"
      },
      src: {},
      alt: {},
      icon: {},
      text: {},
      size: {},
      class: {},
      style: {},
      ui: {}
    },
    setup(__props) {
      const props = __props;
      const fallback = computed(() => props.text || (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2));
      const { size: size2 } = useAvatarGroup(props);
      const ui2 = computed(() => avatar({
        size: size2.value
      }));
      const sizePx = computed(() => ({
        "3xs": 16,
        "2xs": 20,
        "xs": 24,
        "sm": 28,
        "md": 32,
        "lg": 36,
        "xl": 40,
        "2xl": 44,
        "3xl": 48
      })[props.size || "md"]);
      const error = ref(false);
      watch(() => props.src, () => {
        if (error.value) {
          error.value = false;
        }
      });
      function onError() {
        error.value = true;
      }
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(ui2.value.root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          })),
          style: normalizeStyle(props.style)
        }, {
          default: withCtx(() => {
            var _a3;
            return [
              _ctx.src && !error.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                key: 0,
                role: "img",
                src: _ctx.src,
                alt: _ctx.alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                class: ui2.value.image({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.image
                }),
                onError
              }), null, 16, [
                "src",
                "alt",
                "width",
                "height",
                "class"
              ])) : (openBlock(), createBlock(unref(Slot), normalizeProps$1(mergeProps({
                key: 1
              }, _ctx.$attrs)), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4, _b2;
                    return [
                      _ctx.icon ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 0,
                        name: _ctx.icon,
                        class: normalizeClass(ui2.value.icon({
                          class: (_a4 = props.ui) == null ? void 0 : _a4.icon
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: normalizeClass(ui2.value.fallback({
                          class: (_b2 = props.ui) == null ? void 0 : _b2.fallback
                        }))
                      }, toDisplayString(fallback.value || "\xA0"), 3))
                    ];
                  })
                ]),
                _: 3
              }, 16))
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "class",
          "style"
        ]);
      };
    }
  });
  function useComponentIcons(componentProps) {
    const appConfig2 = useAppConfig$1();
    const props = computed(() => toValue$3(componentProps));
    const isLeading = computed(() => props.value.icon && props.value.leading || props.value.icon && !props.value.trailing || props.value.loading && !props.value.trailing || !!props.value.leadingIcon);
    const isTrailing = computed(() => props.value.icon && props.value.trailing || props.value.loading && props.value.trailing || !!props.value.trailingIcon);
    const leadingIconName = computed(() => {
      if (props.value.loading) {
        return props.value.loadingIcon || appConfig2.ui.icons.loading;
      }
      return props.value.leadingIcon || props.value.icon;
    });
    const trailingIconName = computed(() => {
      if (props.value.loading && !isLeading.value) {
        return props.value.loadingIcon || appConfig2.ui.icons.loading;
      }
      return props.value.trailingIcon || props.value.icon;
    });
    return {
      isLeading,
      isTrailing,
      leadingIconName,
      trailingIconName
    };
  }
  const buttonGroupInjectionKey = Symbol("nuxt-ui.button-group");
  function useButtonGroup(props) {
    const buttonGroup = inject(buttonGroupInjectionKey, void 0);
    return {
      orientation: computed(() => buttonGroup == null ? void 0 : buttonGroup.value.orientation),
      size: computed(() => (props == null ? void 0 : props.size) ?? (buttonGroup == null ? void 0 : buttonGroup.value.size))
    };
  }
  formOptionsInjectionKey = Symbol("nuxt-ui.form-options");
  formBusInjectionKey = Symbol("nuxt-ui.form-events");
  formFieldInjectionKey = Symbol("nuxt-ui.form-field");
  inputIdInjectionKey = Symbol("nuxt-ui.input-id");
  formInputsInjectionKey = Symbol("nuxt-ui.form-inputs");
  formLoadingInjectionKey = Symbol("nuxt-ui.form-loading");
  useFormField = function(props, opts) {
    const formOptions = inject(formOptionsInjectionKey, void 0);
    const formBus = inject(formBusInjectionKey, void 0);
    const formField = inject(formFieldInjectionKey, void 0);
    const formInputs = inject(formInputsInjectionKey, void 0);
    const inputId = inject(inputIdInjectionKey, void 0);
    if (formField && inputId) {
      if ((opts == null ? void 0 : opts.bind) === false) {
        inputId.value = void 0;
      } else if (props == null ? void 0 : props.id) {
        inputId.value = props == null ? void 0 : props.id;
      }
      if (formInputs && formField.value.name && inputId.value) {
        formInputs.value[formField.value.name] = {
          id: inputId.value,
          pattern: formField.value.errorPattern
        };
      }
    }
    function emitFormEvent(type, name, eager) {
      if (formBus && formField && name) {
        formBus.emit({
          type,
          name,
          eager
        });
      }
    }
    function emitFormBlur() {
      emitFormEvent("blur", formField == null ? void 0 : formField.value.name);
    }
    function emitFormFocus() {
      emitFormEvent("focus", formField == null ? void 0 : formField.value.name);
    }
    function emitFormChange() {
      emitFormEvent("change", formField == null ? void 0 : formField.value.name);
    }
    const emitFormInput = useDebounceFn$1(() => {
      emitFormEvent("input", formField == null ? void 0 : formField.value.name, !(opts == null ? void 0 : opts.deferInputValidation) || (formField == null ? void 0 : formField.value.eagerValidation));
    }, (formField == null ? void 0 : formField.value.validateOnInputDelay) ?? (formOptions == null ? void 0 : formOptions.value.validateOnInputDelay) ?? 0);
    return {
      id: computed(() => (props == null ? void 0 : props.id) ?? (inputId == null ? void 0 : inputId.value)),
      name: computed(() => (props == null ? void 0 : props.name) ?? (formField == null ? void 0 : formField.value.name)),
      size: computed(() => (props == null ? void 0 : props.size) ?? (formField == null ? void 0 : formField.value.size)),
      color: computed(() => (formField == null ? void 0 : formField.value.error) ? "error" : props == null ? void 0 : props.color),
      highlight: computed(() => (formField == null ? void 0 : formField.value.error) ? true : props == null ? void 0 : props.highlight),
      disabled: computed(() => (formOptions == null ? void 0 : formOptions.value.disabled) || (props == null ? void 0 : props.disabled)),
      emitFormBlur,
      emitFormInput,
      emitFormChange,
      emitFormFocus,
      ariaAttrs: computed(() => {
        if (!(formField == null ? void 0 : formField.value)) return;
        const descriptiveAttrs = [
          "error",
          "hint",
          "description",
          "help"
        ].filter((type) => {
          var _a2;
          return (_a2 = formField == null ? void 0 : formField.value) == null ? void 0 : _a2[type];
        }).map((type) => `${formField == null ? void 0 : formField.value.ariaId}-${type}`) || [];
        return {
          "aria-describedby": descriptiveAttrs.join(" "),
          "aria-invalid": !!(formField == null ? void 0 : formField.value.error)
        };
      })
    };
  };
  function pickLinkProps(link2) {
    const keys2 = Object.keys(link2);
    const ariaKeys = keys2.filter((key) => key.startsWith("aria-"));
    const dataKeys = keys2.filter((key) => key.startsWith("data-"));
    const propsToInclude = [
      "active",
      "activeClass",
      "ariaCurrentValue",
      "as",
      "disabled",
      "exact",
      "exactActiveClass",
      "exactHash",
      "exactQuery",
      "external",
      "href",
      "inactiveClass",
      "noPrefetch",
      "noRel",
      "prefetch",
      "prefetchedClass",
      "rel",
      "replace",
      "target",
      "to",
      "type",
      "title",
      "onClick",
      ...ariaKeys,
      ...dataKeys
    ];
    return reactivePick(link2, ...propsToInclude);
  }
  const _sfc_main$r = defineComponent({
    __name: "LinkBase",
    props: {
      as: {
        default: "button"
      },
      type: {
        default: "button"
      },
      disabled: {
        type: Boolean
      },
      onClick: {},
      href: {},
      navigate: {},
      target: {},
      rel: {},
      active: {
        type: Boolean
      },
      isExternal: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      function onClickWrapper(e) {
        if (props.disabled) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        if (props.onClick) {
          for (const onClick of Array.isArray(props.onClick) ? props.onClick : [
            props.onClick
          ]) {
            onClick(e);
          }
        }
        if (props.href && props.navigate && !props.isExternal) {
          props.navigate(e);
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.href ? {
          "as": "a",
          "href": _ctx.disabled ? void 0 : _ctx.href,
          "aria-disabled": _ctx.disabled ? "true" : void 0,
          "role": _ctx.disabled ? "link" : void 0,
          "tabindex": _ctx.disabled ? -1 : void 0
        } : _ctx.as === "button" ? {
          as: _ctx.as,
          type: _ctx.type,
          disabled: _ctx.disabled
        } : {
          as: _ctx.as
        }, {
          rel: _ctx.rel,
          target: _ctx.target,
          onClick: onClickWrapper
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, [
          "rel",
          "target"
        ]);
      };
    }
  });
  const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
  const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
  const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
  function hasProtocol(inputString, opts = {}) {
    if (typeof opts === "boolean") {
      opts = {
        acceptRelative: opts
      };
    }
    if (opts.strict) {
      return PROTOCOL_STRICT_REGEX.test(inputString);
    }
    return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
  }
  const theme$k = {
    "base": "focus-visible:outline-(--ui-primary)",
    "variants": {
      "active": {
        "true": "text-(--ui-primary)",
        "false": [
          "text-(--ui-text-muted) hover:text-(--ui-text)",
          "transition-colors"
        ]
      },
      "disabled": {
        "true": "cursor-not-allowed opacity-75"
      }
    }
  };
  const appConfigLink = _appConfig;
  const link = ce({
    extend: ce(theme$k),
    ...((_c = appConfigLink.ui) == null ? void 0 : _c.link) || {}
  });
  _sfc_main$q = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "Link",
    props: {
      as: {
        default: "button"
      },
      type: {
        default: "button"
      },
      disabled: {
        type: Boolean
      },
      active: {
        type: Boolean,
        default: void 0
      },
      exact: {
        type: Boolean
      },
      exactQuery: {
        type: [
          Boolean,
          String
        ]
      },
      exactHash: {
        type: Boolean
      },
      inactiveClass: {
        default: ""
      },
      custom: {
        type: Boolean
      },
      raw: {
        type: Boolean
      },
      class: {},
      to: {},
      href: {},
      external: {
        type: Boolean
      },
      target: {},
      rel: {},
      noRel: {
        type: Boolean
      },
      prefetchedClass: {},
      prefetch: {
        type: Boolean
      },
      prefetchOn: {},
      noPrefetch: {
        type: Boolean
      },
      activeClass: {
        default: ""
      },
      exactActiveClass: {},
      ariaCurrentValue: {
        default: "page"
      },
      viewTransition: {
        type: Boolean
      },
      replace: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      const hasRouter = computed(() => {
        var _a2, _b2, _c2;
        const app2 = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app;
        return !!((_c2 = (_b2 = app2 == null ? void 0 : app2.config) == null ? void 0 : _b2.globalProperties) == null ? void 0 : _c2.$router);
      });
      const route = computed(() => {
        if (!hasRouter.value) return null;
        try {
          return useRoute();
        } catch {
          return null;
        }
      });
      const routerLinkProps = useForwardProps(reactiveOmit$1(props, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "to", "raw", "class"));
      const ui2 = computed(() => ce({
        extend: link,
        variants: {
          active: {
            true: props.activeClass,
            false: props.inactiveClass
          }
        }
      }));
      function isPartiallyEqual(item1, item2) {
        const diffedKeys = diff(item1, item2).reduce((filtered, q2) => {
          if (q2.type === "added") {
            filtered.add(q2.key);
          }
          return filtered;
        }, /* @__PURE__ */ new Set());
        const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)));
        const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)));
        return isEqual(item1Filtered, item2Filtered);
      }
      const isExternal = computed(() => {
        if (!props.to) return false;
        return typeof props.to === "string" && hasProtocol(props.to, {
          acceptRelative: true
        });
      });
      function isLinkActive({ route: linkRoute, isActive, isExactActive }) {
        if (props.active !== void 0) {
          return props.active;
        }
        if (!props.to || !route.value) {
          return false;
        }
        if (props.exactQuery === "partial") {
          if (!isPartiallyEqual(linkRoute.query, route.value.query)) return false;
        } else if (props.exactQuery === true) {
          if (!isEqual(linkRoute.query, route.value.query)) return false;
        }
        if (props.exactHash && linkRoute.hash !== route.value.hash) {
          return false;
        }
        if (props.exact && isExactActive) {
          return true;
        }
        if (!props.exact && isActive) {
          return true;
        }
        return false;
      }
      function resolveLinkClass({ route: route2, isActive, isExactActive } = {}) {
        const active = isLinkActive({
          route: route2,
          isActive,
          isExactActive
        });
        if (props.raw) {
          return [
            props.class,
            active ? props.activeClass : props.inactiveClass
          ];
        }
        return ui2.value({
          class: props.class,
          active,
          disabled: props.disabled
        });
      }
      return (_ctx, _cache) => {
        const _component_ULinkBase = _sfc_main$r;
        return hasRouter.value && !isExternal.value ? (openBlock(), createBlock(unref(RouterLink), mergeProps({
          key: 0
        }, unref(routerLinkProps), {
          to: _ctx.to || "#",
          custom: ""
        }), {
          default: withCtx(({ href, navigate, route: linkRoute, isActive, isExactActive }) => [
            _ctx.custom ? renderSlot(_ctx.$slots, "default", normalizeProps$1(mergeProps({
              key: 0
            }, {
              ..._ctx.$attrs,
              ..._ctx.exact && isExactActive ? {
                "aria-current": props.ariaCurrentValue
              } : {},
              as: _ctx.as,
              type: _ctx.type,
              disabled: _ctx.disabled,
              href: _ctx.to ? href : void 0,
              navigate,
              active: isLinkActive({
                route: linkRoute,
                isActive,
                isExactActive
              })
            }))) : (openBlock(), createBlock(_component_ULinkBase, mergeProps({
              key: 1
            }, {
              ..._ctx.$attrs,
              ..._ctx.exact && isExactActive ? {
                "aria-current": props.ariaCurrentValue
              } : {},
              as: _ctx.as,
              type: _ctx.type,
              disabled: _ctx.disabled,
              href: _ctx.to ? href : void 0,
              navigate
            }, {
              class: resolveLinkClass({
                route: linkRoute,
                isActive,
                isExactActive
              })
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  active: isLinkActive({
                    route: linkRoute,
                    isActive,
                    isExactActive
                  })
                })
              ]),
              _: 2
            }, 1040, [
              "class"
            ]))
          ]),
          _: 3
        }, 16, [
          "to"
        ])) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [
          _ctx.custom ? renderSlot(_ctx.$slots, "default", normalizeProps$1(mergeProps({
            key: 0
          }, {
            ..._ctx.$attrs,
            as: _ctx.as,
            type: _ctx.type,
            disabled: _ctx.disabled,
            href: _ctx.to,
            target: isExternal.value ? "_blank" : void 0,
            active: false
          }))) : (openBlock(), createBlock(_component_ULinkBase, mergeProps({
            key: 1
          }, {
            ..._ctx.$attrs,
            as: _ctx.as,
            type: _ctx.type,
            disabled: _ctx.disabled,
            href: _ctx.to,
            target: isExternal.value ? "_blank" : void 0
          }, {
            "is-external": isExternal.value,
            class: resolveLinkClass()
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                active: false
              })
            ]),
            _: 3
          }, 16, [
            "is-external",
            "class"
          ]))
        ], 64));
      };
    }
  });
  const theme$j = {
    "slots": {
      "base": [
        "rounded-[calc(var(--ui-radius)*1.5)] font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
        "transition-colors"
      ],
      "label": "truncate",
      "leadingIcon": "shrink-0",
      "leadingAvatar": "shrink-0",
      "leadingAvatarSize": "",
      "trailingIcon": "shrink-0"
    },
    "variants": {
      "buttonGroup": {
        "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
        "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
      },
      "color": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "variant": {
        "solid": "",
        "outline": "",
        "soft": "",
        "subtle": "",
        "ghost": "",
        "link": ""
      },
      "size": {
        "xs": {
          "base": "px-2 py-1 text-xs gap-1",
          "leadingIcon": "size-4",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-4"
        },
        "sm": {
          "base": "px-2.5 py-1.5 text-xs gap-1.5",
          "leadingIcon": "size-4",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-4"
        },
        "md": {
          "base": "px-2.5 py-1.5 text-sm gap-1.5",
          "leadingIcon": "size-5",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-5"
        },
        "lg": {
          "base": "px-3 py-2 text-sm gap-2",
          "leadingIcon": "size-5",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-5"
        },
        "xl": {
          "base": "px-3 py-2 text-base gap-2",
          "leadingIcon": "size-6",
          "leadingAvatarSize": "xs",
          "trailingIcon": "size-6"
        }
      },
      "block": {
        "true": {
          "base": "w-full justify-center",
          "trailingIcon": "ms-auto"
        }
      },
      "square": {
        "true": ""
      },
      "leading": {
        "true": ""
      },
      "trailing": {
        "true": ""
      },
      "loading": {
        "true": ""
      },
      "active": {
        "true": {
          "base": ""
        },
        "false": {
          "base": ""
        }
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-primary) hover:bg-(--ui-primary)/75 disabled:bg-(--ui-primary) aria-disabled:bg-(--ui-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-secondary) hover:bg-(--ui-secondary)/75 disabled:bg-(--ui-secondary) aria-disabled:bg-(--ui-secondary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-success) hover:bg-(--ui-success)/75 disabled:bg-(--ui-success) aria-disabled:bg-(--ui-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
      },
      {
        "color": "info",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-info) hover:bg-(--ui-info)/75 disabled:bg-(--ui-info) aria-disabled:bg-(--ui-info) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-warning) hover:bg-(--ui-warning)/75 disabled:bg-(--ui-warning) aria-disabled:bg-(--ui-warning) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-error) hover:bg-(--ui-error)/75 disabled:bg-(--ui-error) aria-disabled:bg-(--ui-error) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
      },
      {
        "color": "primary",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-primary)/50 text-(--ui-primary) hover:bg-(--ui-primary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-secondary)/50 text-(--ui-secondary) hover:bg-(--ui-secondary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-success)/50 text-(--ui-success) hover:bg-(--ui-success)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-success)"
      },
      {
        "color": "info",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-info)/50 text-(--ui-info) hover:bg-(--ui-info)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-warning)/50 text-(--ui-warning) hover:bg-(--ui-warning)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-error)/50 text-(--ui-error) hover:bg-(--ui-error)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-error)"
      },
      {
        "color": "primary",
        "variant": "soft",
        "class": "text-(--ui-primary) bg-(--ui-primary)/10 hover:bg-(--ui-primary)/15 focus:outline-none focus-visible:bg-(--ui-primary)/15 disabled:bg-(--ui-primary)/10 aria-disabled:bg-(--ui-primary)/10"
      },
      {
        "color": "secondary",
        "variant": "soft",
        "class": "text-(--ui-secondary) bg-(--ui-secondary)/10 hover:bg-(--ui-secondary)/15 focus:outline-none focus-visible:bg-(--ui-secondary)/15 disabled:bg-(--ui-secondary)/10 aria-disabled:bg-(--ui-secondary)/10"
      },
      {
        "color": "success",
        "variant": "soft",
        "class": "text-(--ui-success) bg-(--ui-success)/10 hover:bg-(--ui-success)/15 focus:outline-none focus-visible:bg-(--ui-success)/15 disabled:bg-(--ui-success)/10 aria-disabled:bg-(--ui-success)/10"
      },
      {
        "color": "info",
        "variant": "soft",
        "class": "text-(--ui-info) bg-(--ui-info)/10 hover:bg-(--ui-info)/15 focus:outline-none focus-visible:bg-(--ui-info)/15 disabled:bg-(--ui-info)/10 aria-disabled:bg-(--ui-info)/10"
      },
      {
        "color": "warning",
        "variant": "soft",
        "class": "text-(--ui-warning) bg-(--ui-warning)/10 hover:bg-(--ui-warning)/15 focus:outline-none focus-visible:bg-(--ui-warning)/15 disabled:bg-(--ui-warning)/10 aria-disabled:bg-(--ui-warning)/10"
      },
      {
        "color": "error",
        "variant": "soft",
        "class": "text-(--ui-error) bg-(--ui-error)/10 hover:bg-(--ui-error)/15 focus:outline-none focus-visible:bg-(--ui-error)/15 disabled:bg-(--ui-error)/10 aria-disabled:bg-(--ui-error)/10"
      },
      {
        "color": "primary",
        "variant": "subtle",
        "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25 bg-(--ui-primary)/10 hover:bg-(--ui-primary)/15 disabled:bg-(--ui-primary)/10 aria-disabled:bg-(--ui-primary)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": "subtle",
        "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25 bg-(--ui-secondary)/10 hover:bg-(--ui-secondary)/15 disabled:bg-(--ui-secondary)/10 aria-disabled:bg-(--ui-secondary)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": "subtle",
        "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/25 bg-(--ui-success)/10 hover:bg-(--ui-success)/15 disabled:bg-(--ui-success)/10 aria-disabled:bg-(--ui-success)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-success)"
      },
      {
        "color": "info",
        "variant": "subtle",
        "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/25 bg-(--ui-info)/10 hover:bg-(--ui-info)/15 disabled:bg-(--ui-info)/10 aria-disabled:bg-(--ui-info)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": "subtle",
        "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25 bg-(--ui-warning)/10 hover:bg-(--ui-warning)/15 disabled:bg-(--ui-warning)/10 aria-disabled:bg-(--ui-warning)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": "subtle",
        "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/25 bg-(--ui-error)/10 hover:bg-(--ui-error)/15 disabled:bg-(--ui-error)/10 aria-disabled:bg-(--ui-error)/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-error)"
      },
      {
        "color": "primary",
        "variant": "ghost",
        "class": "text-(--ui-primary) hover:bg-(--ui-primary)/10 focus:outline-none focus-visible:bg-(--ui-primary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "secondary",
        "variant": "ghost",
        "class": "text-(--ui-secondary) hover:bg-(--ui-secondary)/10 focus:outline-none focus-visible:bg-(--ui-secondary)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "success",
        "variant": "ghost",
        "class": "text-(--ui-success) hover:bg-(--ui-success)/10 focus:outline-none focus-visible:bg-(--ui-success)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "info",
        "variant": "ghost",
        "class": "text-(--ui-info) hover:bg-(--ui-info)/10 focus:outline-none focus-visible:bg-(--ui-info)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "warning",
        "variant": "ghost",
        "class": "text-(--ui-warning) hover:bg-(--ui-warning)/10 focus:outline-none focus-visible:bg-(--ui-warning)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "error",
        "variant": "ghost",
        "class": "text-(--ui-error) hover:bg-(--ui-error)/10 focus:outline-none focus-visible:bg-(--ui-error)/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
      },
      {
        "color": "primary",
        "variant": "link",
        "class": "text-(--ui-primary) hover:text-(--ui-primary)/75 disabled:text-(--ui-primary) aria-disabled:text-(--ui-primary) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": "link",
        "class": "text-(--ui-secondary) hover:text-(--ui-secondary)/75 disabled:text-(--ui-secondary) aria-disabled:text-(--ui-secondary) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": "link",
        "class": "text-(--ui-success) hover:text-(--ui-success)/75 disabled:text-(--ui-success) aria-disabled:text-(--ui-success) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      },
      {
        "color": "info",
        "variant": "link",
        "class": "text-(--ui-info) hover:text-(--ui-info)/75 disabled:text-(--ui-info) aria-disabled:text-(--ui-info) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": "link",
        "class": "text-(--ui-warning) hover:text-(--ui-warning)/75 disabled:text-(--ui-warning) aria-disabled:text-(--ui-warning) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": "link",
        "class": "text-(--ui-error) hover:text-(--ui-error)/75 disabled:text-(--ui-error) aria-disabled:text-(--ui-error) focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      },
      {
        "color": "neutral",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-bg-inverted) hover:bg-(--ui-bg-inverted)/90 disabled:bg-(--ui-bg-inverted) aria-disabled:bg-(--ui-bg-inverted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
      },
      {
        "color": "neutral",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg) hover:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg) aria-disabled:bg-(--ui-bg) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
      },
      {
        "color": "neutral",
        "variant": "soft",
        "class": "text-(--ui-text) bg-(--ui-bg-elevated) hover:bg-(--ui-bg-accented)/75 focus:outline-none focus-visible:bg-(--ui-bg-accented)/75 disabled:bg-(--ui-bg-elevated) aria-disabled:bg-(--ui-bg-elevated)"
      },
      {
        "color": "neutral",
        "variant": "subtle",
        "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated) hover:bg-(--ui-bg-accented)/75 disabled:bg-(--ui-bg-elevated) aria-disabled:bg-(--ui-bg-elevated) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
      },
      {
        "color": "neutral",
        "variant": "ghost",
        "class": "text-(--ui-text) hover:bg-(--ui-bg-elevated) focus:outline-none focus-visible:bg-(--ui-bg-elevated) hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
      },
      {
        "color": "neutral",
        "variant": "link",
        "class": "text-(--ui-text-muted) hover:text-(--ui-text) disabled:text-(--ui-text-muted) aria-disabled:text-(--ui-text-muted) focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-(--ui-border-inverted)"
      },
      {
        "size": "xs",
        "square": true,
        "class": "p-1"
      },
      {
        "size": "sm",
        "square": true,
        "class": "p-1.5"
      },
      {
        "size": "md",
        "square": true,
        "class": "p-1.5"
      },
      {
        "size": "lg",
        "square": true,
        "class": "p-2"
      },
      {
        "size": "xl",
        "square": true,
        "class": "p-2"
      },
      {
        "loading": true,
        "leading": true,
        "class": {
          "leadingIcon": "animate-spin"
        }
      },
      {
        "loading": true,
        "leading": false,
        "trailing": true,
        "class": {
          "trailingIcon": "animate-spin"
        }
      }
    ],
    "defaultVariants": {
      "color": "primary",
      "variant": "solid",
      "size": "md"
    }
  };
  const appConfigButton = _appConfig;
  const button = tv$1({
    extend: tv$1(theme$j),
    ...((_d = appConfigButton.ui) == null ? void 0 : _d.button) || {}
  });
  _sfc_main$p = defineComponent({
    __name: "Button",
    props: {
      label: {},
      color: {},
      activeColor: {},
      variant: {},
      activeVariant: {},
      size: {},
      square: {
        type: Boolean
      },
      block: {
        type: Boolean
      },
      loadingAuto: {
        type: Boolean
      },
      onClick: {},
      class: {},
      ui: {},
      icon: {},
      avatar: {},
      leading: {
        type: Boolean
      },
      leadingIcon: {},
      trailing: {
        type: Boolean
      },
      trailingIcon: {},
      loading: {
        type: Boolean
      },
      loadingIcon: {},
      as: {},
      type: {},
      disabled: {
        type: Boolean
      },
      active: {
        type: Boolean,
        default: void 0
      },
      exact: {
        type: Boolean
      },
      exactQuery: {
        type: [
          Boolean,
          String
        ]
      },
      exactHash: {
        type: Boolean
      },
      inactiveClass: {
        default: ""
      },
      to: {},
      href: {},
      external: {
        type: Boolean
      },
      target: {},
      rel: {},
      noRel: {
        type: Boolean
      },
      prefetchedClass: {},
      prefetch: {
        type: Boolean
      },
      prefetchOn: {},
      noPrefetch: {
        type: Boolean
      },
      activeClass: {
        default: ""
      },
      exactActiveClass: {},
      ariaCurrentValue: {},
      viewTransition: {
        type: Boolean
      },
      replace: {
        type: Boolean
      }
    },
    setup(__props) {
      const props = __props;
      const slots = useSlots();
      const linkProps = useForwardProps(pickLinkProps(props));
      const { orientation, size: buttonSize } = useButtonGroup(props);
      const loadingAutoState = ref(false);
      const formLoading = inject(formLoadingInjectionKey, void 0);
      async function onClickWrapper(event) {
        loadingAutoState.value = true;
        const callbacks = Array.isArray(props.onClick) ? props.onClick : [
          props.onClick
        ];
        try {
          await Promise.all(callbacks.map((fn) => fn == null ? void 0 : fn(event)));
        } finally {
          loadingAutoState.value = false;
        }
      }
      const isLoading = computed(() => {
        return props.loading || props.loadingAuto && (loadingAutoState.value || (formLoading == null ? void 0 : formLoading.value) && props.type === "submit");
      });
      const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(computed(() => ({
        ...props,
        loading: isLoading.value
      })));
      const ui2 = computed(() => tv$1({
        extend: button,
        variants: {
          active: {
            true: {
              base: props.activeClass
            },
            false: {
              base: props.inactiveClass
            }
          }
        }
      })({
        color: props.color,
        variant: props.variant,
        size: buttonSize.value,
        loading: isLoading.value,
        block: props.block,
        square: props.square || !slots.default && !props.label,
        leading: isLeading.value,
        trailing: isTrailing.value,
        buttonGroup: orientation.value
      }));
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(_sfc_main$q, mergeProps({
          type: _ctx.type,
          disabled: _ctx.disabled || isLoading.value,
          class: ui2.value.base({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.base
            ]
          })
        }, unref(omit)(unref(linkProps), [
          "type",
          "disabled",
          "onClick"
        ]), {
          custom: ""
        }), {
          default: withCtx(({ active, ...slotProps }) => {
            var _a3;
            return [
              createVNode(_sfc_main$r, mergeProps(slotProps, {
                class: ui2.value.base({
                  class: [
                    props.class,
                    (_a3 = props.ui) == null ? void 0 : _a3.base
                  ],
                  active,
                  ...active && _ctx.activeVariant ? {
                    variant: _ctx.activeVariant
                  } : {},
                  ...active && _ctx.activeColor ? {
                    color: _ctx.activeColor
                  } : {}
                }),
                onClick: onClickWrapper
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "leading", {}, () => {
                    var _a4, _b2, _c2;
                    return [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 0,
                        name: unref(leadingIconName),
                        class: normalizeClass(ui2.value.leadingIcon({
                          class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon,
                          active
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                        key: 1,
                        size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui2.value.leadingAvatarSize()
                      }, _ctx.avatar, {
                        class: ui2.value.leadingAvatar({
                          class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar,
                          active
                        })
                      }), null, 16, [
                        "size",
                        "class"
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4;
                    return [
                      _ctx.label ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(ui2.value.label({
                          class: (_a4 = props.ui) == null ? void 0 : _a4.label,
                          active
                        }))
                      }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                    ];
                  }),
                  renderSlot(_ctx.$slots, "trailing", {}, () => {
                    var _a4;
                    return [
                      unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 0,
                        name: unref(trailingIconName),
                        class: normalizeClass(ui2.value.trailingIcon({
                          class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon,
                          active
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : createCommentVNode("", true)
                    ];
                  })
                ]),
                _: 2
              }, 1040, [
                "class"
              ])
            ];
          }),
          _: 3
        }, 16, [
          "type",
          "disabled",
          "class"
        ]);
      };
    }
  });
  const theme$i = {
    "slots": {
      "root": "relative group overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*2)] ring ring-(--ui-border) p-4 flex gap-2.5 focus:outline-none",
      "wrapper": "w-0 flex-1 flex flex-col",
      "title": "text-sm font-medium text-(--ui-text-highlighted)",
      "description": "text-sm text-(--ui-text-muted)",
      "icon": "shrink-0 size-5",
      "avatar": "shrink-0",
      "avatarSize": "2xl",
      "actions": "flex gap-1.5 shrink-0",
      "progress": "absolute inset-x-0 bottom-0 h-1 z-[-1]",
      "close": "p-0"
    },
    "variants": {
      "color": {
        "primary": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)",
          "icon": "text-(--ui-primary)",
          "progress": "bg-(--ui-primary)"
        },
        "secondary": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)",
          "icon": "text-(--ui-secondary)",
          "progress": "bg-(--ui-secondary)"
        },
        "success": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)",
          "icon": "text-(--ui-success)",
          "progress": "bg-(--ui-success)"
        },
        "info": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)",
          "icon": "text-(--ui-info)",
          "progress": "bg-(--ui-info)"
        },
        "warning": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)",
          "icon": "text-(--ui-warning)",
          "progress": "bg-(--ui-warning)"
        },
        "error": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
          "icon": "text-(--ui-error)",
          "progress": "bg-(--ui-error)"
        },
        "neutral": {
          "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)",
          "icon": "text-(--ui-text-highlighted)",
          "progress": "bg-(--ui-bg-inverted)"
        }
      },
      "orientation": {
        "horizontal": {
          "root": "items-center",
          "actions": "items-center"
        },
        "vertical": {
          "root": "items-start",
          "actions": "items-start mt-2.5"
        }
      },
      "title": {
        "true": {
          "description": "mt-1"
        }
      }
    },
    "defaultVariants": {
      "color": "primary"
    }
  };
  const appConfigToast = _appConfig;
  const toast$1 = tv$1({
    extend: tv$1(theme$i),
    ...((_e2 = appConfigToast.ui) == null ? void 0 : _e2.toast) || {}
  });
  const _sfc_main$o = defineComponent({
    __name: "Toast",
    props: {
      as: {},
      title: {},
      description: {},
      icon: {},
      avatar: {},
      color: {},
      orientation: {
        default: "vertical"
      },
      actions: {},
      close: {
        type: [
          Boolean,
          Object
        ],
        default: true
      },
      closeIcon: {},
      class: {},
      ui: {},
      defaultOpen: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      type: {},
      duration: {}
    },
    emits: [
      "escapeKeyDown",
      "pause",
      "resume",
      "swipeStart",
      "swipeMove",
      "swipeCancel",
      "swipeEnd",
      "update:open"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const { t } = useLocale();
      const appConfig2 = useAppConfig$1();
      const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
      const ui2 = computed(() => toast$1({
        color: props.color,
        orientation: props.orientation,
        title: !!props.title || !!slots.title
      }));
      const el = ref();
      const height = ref(0);
      onMounted(() => {
        if (!el.value) {
          return;
        }
        setTimeout(() => {
          var _a2;
          height.value = (_a2 = el.value.$el.getBoundingClientRect()) == null ? void 0 : _a2.height;
        }, 0);
      });
      __expose({
        height
      });
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(_sfc_main$E), mergeProps({
          ref_key: "el",
          ref: el
        }, unref(rootProps), {
          "data-orientation": _ctx.orientation,
          class: ui2.value.root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          }),
          style: {
            "--height": height.value
          }
        }), {
          default: withCtx(({ remaining, duration }) => {
            var _a3, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i2;
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b3, _c3;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui2.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui2.value.avatar({
                      class: (_b3 = props.ui) == null ? void 0 : _b3.avatar
                    })
                  }), null, 16, [
                    "size",
                    "class"
                  ])) : _ctx.icon ? (openBlock(), createBlock(_sfc_main$t, {
                    key: 1,
                    name: _ctx.icon,
                    class: normalizeClass(ui2.value.icon({
                      class: (_c3 = props.ui) == null ? void 0 : _c3.icon
                    }))
                  }, null, 8, [
                    "name",
                    "class"
                  ])) : createCommentVNode("", true)
                ];
              }),
              createBaseVNode("div", {
                class: normalizeClass(ui2.value.wrapper({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper
                }))
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$w), {
                  key: 0,
                  class: normalizeClass(ui2.value.title({
                    class: (_b2 = props.ui) == null ? void 0 : _b2.title
                  }))
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      typeof _ctx.title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title()), {
                        key: 0
                      })) : typeof _ctx.title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.title), {
                        key: 1
                      })) : (openBlock(), createElementBlock(Fragment, {
                        key: 2
                      }, [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, [
                  "class"
                ])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$v), {
                  key: 1,
                  class: normalizeClass(ui2.value.description({
                    class: (_c2 = props.ui) == null ? void 0 : _c2.description
                  }))
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      typeof _ctx.description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description()), {
                        key: 0
                      })) : typeof _ctx.description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.description), {
                        key: 1
                      })) : (openBlock(), createElementBlock(Fragment, {
                        key: 2
                      }, [
                        createTextVNode(toDisplayString(_ctx.description), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, [
                  "class"
                ])) : createCommentVNode("", true),
                _ctx.orientation === "vertical" && ((_d2 = _ctx.actions) == null ? void 0 : _d2.length) ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(ui2.value.actions({
                    class: (_e3 = props.ui) == null ? void 0 : _e3.actions
                  }))
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action, index2) => {
                      return openBlock(), createBlock(unref(_sfc_main$A), {
                        key: index2,
                        "alt-text": action.label || "Action",
                        "as-child": "",
                        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                        }, [
                          "stop"
                        ]))
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$p, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, 16, [
                            "color"
                          ])
                        ]),
                        _: 2
                      }, 1032, [
                        "alt-text"
                      ]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.orientation === "horizontal" && ((_f2 = _ctx.actions) == null ? void 0 : _f2.length) || _ctx.close ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(ui2.value.actions({
                  class: (_g2 = props.ui) == null ? void 0 : _g2.actions,
                  orientation: "horizontal"
                }))
              }, [
                _ctx.orientation === "horizontal" && ((_h2 = _ctx.actions) == null ? void 0 : _h2.length) ? renderSlot(_ctx.$slots, "actions", {
                  key: 0
                }, () => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action, index2) => {
                    return openBlock(), createBlock(unref(_sfc_main$A), {
                      key: index2,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                      }, [
                        "stop"
                      ]))
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$p, mergeProps({
                          size: "xs",
                          color: _ctx.color,
                          ref_for: true
                        }, action), null, 16, [
                          "color"
                        ])
                      ]),
                      _: 2
                    }, 1032, [
                      "alt-text"
                    ]);
                  }), 128))
                ]) : createCommentVNode("", true),
                _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(_sfc_main$B), {
                  key: 1,
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "close", {
                      ui: ui2.value
                    }, () => {
                      var _a4;
                      return [
                        _ctx.close ? (openBlock(), createBlock(_sfc_main$p, mergeProps({
                          key: 0,
                          icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                          size: "md",
                          color: "neutral",
                          variant: "link",
                          "aria-label": unref(t)("toast.close")
                        }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                          class: ui2.value.close({
                            class: (_a4 = props.ui) == null ? void 0 : _a4.close
                          }),
                          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                          }, [
                            "stop"
                          ]))
                        }), null, 16, [
                          "icon",
                          "aria-label",
                          "class"
                        ])) : createCommentVNode("", true)
                      ];
                    })
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              remaining > 0 && duration ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(ui2.value.progress({
                  class: (_i2 = props.ui) == null ? void 0 : _i2.progress
                })),
                style: normalizeStyle({
                  width: `${remaining / duration * 100}%`
                })
              }, null, 6)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 16, [
          "data-orientation",
          "class",
          "style"
        ]);
      };
    }
  });
  const theme$h = {
    "slots": {
      "viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
      "base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:invisible data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out"
    },
    "variants": {
      "position": {
        "top-left": {
          "viewport": "left-4"
        },
        "top-center": {
          "viewport": "left-1/2 transform -translate-x-1/2"
        },
        "top-right": {
          "viewport": "right-4"
        },
        "bottom-left": {
          "viewport": "left-4"
        },
        "bottom-center": {
          "viewport": "left-1/2 transform -translate-x-1/2"
        },
        "bottom-right": {
          "viewport": "right-4"
        }
      },
      "swipeDirection": {
        "up": "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]",
        "right": "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]",
        "down": "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]",
        "left": "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]"
      }
    },
    "compoundVariants": [
      {
        "position": [
          "top-left",
          "top-center",
          "top-right"
        ],
        "class": {
          "viewport": "top-4",
          "base": "top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]"
        }
      },
      {
        "position": [
          "bottom-left",
          "bottom-center",
          "bottom-right"
        ],
        "class": {
          "viewport": "bottom-4",
          "base": "bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]"
        }
      },
      {
        "swipeDirection": [
          "left",
          "right"
        ],
        "class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
      },
      {
        "swipeDirection": [
          "up",
          "down"
        ],
        "class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
      }
    ],
    "defaultVariants": {
      "position": "bottom-right"
    }
  };
  const appConfigToaster = _appConfig;
  const toaster = tv$1({
    extend: tv$1(theme$h),
    ...((_f = appConfigToaster.ui) == null ? void 0 : _f.toaster) || {}
  });
  const __default__$1 = {
    name: "Toaster"
  };
  const _sfc_main$n = defineComponent({
    ...__default__$1,
    props: {
      position: {},
      expand: {
        type: Boolean,
        default: true
      },
      portal: {
        type: Boolean,
        default: true
      },
      class: {},
      ui: {},
      label: {},
      duration: {
        default: 5e3
      },
      swipeThreshold: {}
    },
    setup(__props) {
      const props = __props;
      const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold"));
      const { toasts, remove } = useToast();
      const swipeDirection = computed(() => {
        switch (props.position) {
          case "top-center":
            return "up";
          case "top-right":
          case "bottom-right":
            return "right";
          case "bottom-center":
            return "down";
          case "top-left":
          case "bottom-left":
            return "left";
        }
        return "right";
      });
      const ui2 = computed(() => toaster({
        position: props.position,
        swipeDirection: swipeDirection.value
      }));
      function onUpdateOpen(value, id) {
        if (value) {
          return;
        }
        remove(id);
      }
      const hovered = ref(false);
      const expanded = computed(() => props.expand || hovered.value);
      const refs = ref([]);
      const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
      const frontHeight = computed(() => {
        var _a2;
        return ((_a2 = refs.value[refs.value.length - 1]) == null ? void 0 : _a2.height) || 0;
      });
      function getOffset(index2) {
        return refs.value.slice(index2 + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$H), mergeProps({
          "swipe-direction": swipeDirection.value
        }, unref(providerProps)), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default"),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(toasts), (toast2, index2) => {
              return openBlock(), createBlock(_sfc_main$o, mergeProps({
                key: toast2.id,
                ref_for: true,
                ref_key: "refs",
                ref: refs
              }, unref(omit)(toast2, [
                "id",
                "close"
              ]), {
                close: toast2.close,
                "data-expanded": expanded.value,
                "data-front": !expanded.value && index2 === unref(toasts).length - 1,
                style: {
                  "--index": index2 - unref(toasts).length + unref(toasts).length,
                  "--before": unref(toasts).length - 1 - index2,
                  "--offset": getOffset(index2),
                  "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                  "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                  "--transform": "translateY(var(--translate)) scale(var(--scale))"
                },
                class: [
                  ui2.value.base(),
                  {
                    "cursor-pointer": !!toast2.onClick
                  }
                ],
                "onUpdate:open": ($event) => onUpdateOpen($event, toast2.id),
                onClick: ($event) => toast2.onClick && toast2.onClick(toast2)
              }), null, 16, [
                "close",
                "data-expanded",
                "data-front",
                "style",
                "class",
                "onUpdate:open",
                "onClick"
              ]);
            }), 128)),
            createVNode(unref(_sfc_main$D), {
              disabled: !_ctx.portal
            }, {
              default: withCtx(() => {
                var _a2, _b2, _c2;
                return [
                  createVNode(unref(_sfc_main$x), {
                    "data-expanded": expanded.value,
                    class: normalizeClass(ui2.value.viewport({
                      class: [
                        props.class,
                        (_a2 = props.ui) == null ? void 0 : _a2.viewport
                      ]
                    })),
                    style: normalizeStyle({
                      "--scale-factor": "0.05",
                      "--translate-factor": ((_b2 = _ctx.position) == null ? void 0 : _b2.startsWith("top")) ? "1px" : "-1px",
                      "--gap": ((_c2 = _ctx.position) == null ? void 0 : _c2.startsWith("top")) ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    }),
                    onMouseenter: _cache[0] || (_cache[0] = ($event) => hovered.value = true),
                    onMouseleave: _cache[1] || (_cache[1] = ($event) => hovered.value = false)
                  }, null, 8, [
                    "data-expanded",
                    "class",
                    "style"
                  ])
                ];
              }),
              _: 1
            }, 8, [
              "disabled"
            ])
          ]),
          _: 3
        }, 16, [
          "swipe-direction"
        ]);
      };
    }
  });
  function _useOverlay() {
    const overlays = shallowReactive([]);
    const create2 = (component, _options) => {
      const { props, defaultOpen, destroyOnClose } = _options || {};
      const options = reactive({
        id: Symbol(import.meta.dev ? "useOverlay" : ""),
        modelValue: !!defaultOpen,
        component: markRaw(component),
        isMounted: !!defaultOpen,
        destroyOnClose: !!destroyOnClose,
        props: props || {}
      });
      overlays.push(options);
      return {
        open: (props2) => open(options.id, props2),
        close: (value) => close(options.id, value),
        patch: (props2) => patch(options.id, props2)
      };
    };
    const open = (id, props) => {
      const overlay = getOverlay(id);
      if (props) {
        patch(overlay.id, props);
      }
      overlay.modelValue = true;
      overlay.isMounted = true;
      return new Promise((resolve) => {
        overlay.resolvePromise = resolve;
      });
    };
    const close = (id, value) => {
      const overlay = getOverlay(id);
      overlay.modelValue = false;
      if (overlay.resolvePromise) {
        overlay.resolvePromise(value);
        overlay.resolvePromise = void 0;
      }
    };
    const unMount = (id) => {
      const overlay = getOverlay(id);
      overlay.isMounted = false;
      if (overlay.destroyOnClose) {
        const index2 = overlays.findIndex((overlay2) => overlay2.id === id);
        overlays.splice(index2, 1);
      }
    };
    const patch = (id, props) => {
      const overlay = getOverlay(id);
      Object.entries(props).forEach(([key, value]) => {
        overlay.props[key] = value;
      });
    };
    const getOverlay = (id) => {
      const overlay = overlays.find((overlay2) => overlay2.id === id);
      if (!overlay) {
        throw new Error("Overlay not found");
      }
      return overlay;
    };
    return {
      overlays,
      open,
      close,
      create: create2,
      patch,
      unMount
    };
  }
  useOverlay = createSharedComposable$1(_useOverlay);
  const _sfc_main$m = defineComponent({
    __name: "OverlayProvider",
    setup(__props) {
      const { overlays, unMount, close } = useOverlay();
      const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted));
      const onAfterLeave = (id) => {
        close(id);
        unMount(id);
      };
      const onClose = (id, value) => {
        close(id, value);
      };
      return (_ctx, _cache) => {
        return openBlock(true), createElementBlock(Fragment, null, renderList(mountedOverlays.value, (overlay) => {
          return openBlock(), createBlock(resolveDynamicComponent(overlay.component), mergeProps({
            key: overlay.id,
            ref_for: true
          }, overlay.props, {
            open: overlay.modelValue,
            "onUpdate:open": ($event) => overlay.modelValue = $event,
            onClose: (value) => onClose(overlay.id, value),
            "onAfter:leave": ($event) => onAfterLeave(overlay.id)
          }), null, 16, [
            "open",
            "onUpdate:open",
            "onClose",
            "onAfter:leave"
          ]);
        }), 128);
      };
    }
  });
  const __default__ = {
    name: "App"
  };
  const _sfc_main$l = defineComponent({
    ...__default__,
    props: {
      tooltip: {},
      toaster: {},
      locale: {},
      scrollBody: {
        type: [
          Boolean,
          Object
        ]
      },
      nonce: {}
    },
    setup(__props) {
      const props = __props;
      const configProviderProps = useForwardProps(reactivePick(props, "scrollBody"));
      const tooltipProps = toRef(() => props.tooltip);
      const toasterProps = toRef(() => props.toaster);
      const locale = toRef(() => props.locale);
      provide(localeContextInjectionKey, locale);
      return (_ctx, _cache) => {
        var _a2, _b2;
        return openBlock(), createBlock(unref(_sfc_main$1W), mergeProps({
          "use-id": () => useId$1(),
          dir: (_a2 = locale.value) == null ? void 0 : _a2.dir,
          locale: (_b2 = locale.value) == null ? void 0 : _b2.code
        }, unref(configProviderProps)), {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$u), normalizeProps$1(guardReactiveProps(tooltipProps.value)), {
              default: withCtx(() => [
                _ctx.toaster !== null ? (openBlock(), createBlock(_sfc_main$n, normalizeProps$1(mergeProps({
                  key: 0
                }, toasterProps.value)), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 16)) : renderSlot(_ctx.$slots, "default", {
                  key: 1
                }),
                createVNode(_sfc_main$m)
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 16, [
          "use-id",
          "dir",
          "locale"
        ]);
      };
    }
  });
  let provideDashboardContext;
  [useDashboard, provideDashboardContext] = createContext("DashboardGroup");
  const theme$g = {
    "base": "fixed inset-0 flex overflow-hidden"
  };
  const appConfigTv = _appConfig;
  tv = fe((_g = appConfigTv.ui) == null ? void 0 : _g.tv);
  const appConfig$2 = _appConfig;
  const dashboardGroup = tv({
    extend: tv(theme$g),
    ...((_h = appConfig$2.uiPro) == null ? void 0 : _h.dashboardGroup) || {}
  });
  const _sfc_main$k = defineComponent({
    __name: "DashboardGroup",
    props: {
      as: {},
      class: {},
      storage: {
        default: "cookie"
      },
      storageKey: {
        default: "dashboard"
      },
      persistent: {
        type: Boolean,
        default: true
      },
      unit: {
        default: "%"
      }
    },
    setup(__props) {
      const props = __props;
      const nuxtApp = useNuxtApp();
      const sidebarOpen = ref(false);
      const sidebarCollapsed = ref(false);
      provideDashboardContext({
        storage: props.storage,
        storageKey: props.storageKey,
        persistent: props.persistent,
        unit: props.unit,
        sidebarOpen,
        toggleSidebar: () => {
          nuxtApp.hooks.callHook("dashboard:sidebar:toggle");
        },
        sidebarCollapsed,
        collapseSidebar: (collapsed) => {
          nuxtApp.hooks.callHook("dashboard:sidebar:collapse", collapsed);
        },
        toggleSearch: () => {
          nuxtApp.hooks.callHook("dashboard:search:toggle");
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(unref(dashboardGroup)({
            class: props.class
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const theme$f = {
    "base": "hidden lg:block touch-none select-none cursor-ew-resize relative before:absolute before:inset-y-0 before:-left-1.5 before:-right-1.5"
  };
  const appConfig$1 = _appConfig;
  const dashboardResizeHandle = tv({
    extend: tv(theme$f),
    ...((_i = appConfig$1.uiPro) == null ? void 0 : _i.dashboardResizeHandle) || {}
  });
  _sfc_main$j = defineComponent({
    __name: "DashboardResizeHandle",
    props: {
      as: {},
      class: {}
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          role: "separator",
          class: normalizeClass(unref(dashboardResizeHandle)({
            class: props.class
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const en = defineLocale({
    ...en$1,
    messages: {
      ...en$1.messages,
      authForm: {
        submit: "Continue",
        hidePassword: "Hide password",
        showPassword: "Show password"
      },
      banner: {
        close: "Close"
      },
      colorMode: {
        system: "System",
        light: "Light",
        dark: "Dark",
        switchToLight: "Switch to light mode",
        switchToDark: "Switch to dark mode"
      },
      contentSearch: {
        links: "Links",
        theme: "Theme"
      },
      contentSearchButton: {
        label: "Search..."
      },
      contentToc: {
        title: "On this page"
      },
      dashboardSearch: {
        theme: "Theme"
      },
      dashboardSearchButton: {
        label: "Search..."
      },
      dashboardSidebarCollapse: {
        expand: "Expand sidebar",
        collapse: "Collapse sidebar"
      },
      dashboardSidebarToggle: {
        close: "Close sidebar",
        open: "Open sidebar"
      },
      error: {
        clear: "Back to home"
      },
      header: {
        close: "Close menu",
        open: "Open menu"
      },
      prose: {
        pre: {
          copy: "Copy code to clipboard"
        }
      }
    }
  });
  const _useLocalePro = (localeOverrides) => {
    const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
    return buildLocaleContext(computed(() => locale.value || en));
  };
  useLocalePro = createSharedComposable$1(_useLocalePro);
  const theme$e = {
    "base": "lg:hidden",
    "variants": {
      "side": {
        "left": "",
        "right": ""
      }
    }
  };
  const appConfigDashboardSidebarToggle = _appConfig;
  const dashboardSidebarToggle = tv({
    extend: tv(theme$e),
    ...((_j = appConfigDashboardSidebarToggle.uiPro) == null ? void 0 : _j.dashboardSidebarToggle) || {}
  });
  _sfc_main$i = defineComponent({
    __name: "DashboardSidebarToggle",
    props: {
      side: {
        default: "left"
      },
      color: {
        default: "neutral"
      },
      variant: {
        default: "ghost"
      },
      class: {}
    },
    setup(__props) {
      const props = __props;
      const rootProps = useForwardProps(reactivePick(props, "color", "variant", "size"));
      const appConfig2 = useAppConfig$1();
      const { sidebarOpen, toggleSidebar } = useDashboard({
        sidebarOpen: ref(false),
        toggleSidebar: () => {
        }
      });
      const { t } = useLocalePro();
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$p;
        return openBlock(), createBlock(_component_UButton, mergeProps(unref(rootProps), {
          "aria-label": unref(sidebarOpen) ? unref(t)("dashboardSidebarToggle.close") : unref(t)("dashboardSidebarToggle.open"),
          icon: unref(sidebarOpen) ? unref(appConfig2).ui.icons.close : unref(appConfig2).ui.icons.menu,
          class: unref(dashboardSidebarToggle)({
            class: props.class,
            side: props.side
          }),
          onClick: unref(toggleSidebar)
        }), null, 16, [
          "aria-label",
          "icon",
          "class",
          "onClick"
        ]);
      };
    }
  });
  const theme$d = {
    "slots": {
      "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
      "content": "fixed bg-(--ui-bg) divide-y divide-(--ui-border) sm:ring ring-(--ui-border) sm:shadow-lg flex flex-col focus:outline-none",
      "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
      "wrapper": "",
      "body": "flex-1 overflow-y-auto p-4 sm:p-6",
      "footer": "flex items-center gap-1.5 p-4 sm:px-6",
      "title": "text-(--ui-text-highlighted) font-semibold",
      "description": "mt-1 text-(--ui-text-muted) text-sm",
      "close": "absolute top-4 end-4"
    },
    "variants": {
      "side": {
        "top": {
          "content": "inset-x-0 top-0 max-h-full"
        },
        "right": {
          "content": "right-0 inset-y-0 w-full max-w-md"
        },
        "bottom": {
          "content": "inset-x-0 bottom-0 max-h-full"
        },
        "left": {
          "content": "left-0 inset-y-0 w-full max-w-md"
        }
      },
      "transition": {
        "true": {
          "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
        }
      }
    },
    "compoundVariants": [
      {
        "transition": true,
        "side": "top",
        "class": {
          "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
        }
      },
      {
        "transition": true,
        "side": "right",
        "class": {
          "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
        }
      },
      {
        "transition": true,
        "side": "bottom",
        "class": {
          "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
        }
      },
      {
        "transition": true,
        "side": "left",
        "class": {
          "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
        }
      }
    ]
  };
  const appConfigSlideover = _appConfig;
  const slideover = tv$1({
    extend: tv$1(theme$d),
    ...((_k = appConfigSlideover.ui) == null ? void 0 : _k.slideover) || {}
  });
  _sfc_main$h = defineComponent({
    __name: "Slideover",
    props: {
      title: {},
      description: {},
      content: {},
      overlay: {
        type: Boolean,
        default: true
      },
      transition: {
        type: Boolean,
        default: true
      },
      side: {
        default: "right"
      },
      portal: {
        type: Boolean,
        default: true
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        default: true
      },
      closeIcon: {},
      dismissible: {
        type: Boolean,
        default: true
      },
      class: {},
      ui: {},
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      },
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "after:leave",
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const { t } = useLocale();
      const appConfig2 = useAppConfig$1();
      const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
      const contentProps = toRef(() => props.content);
      const contentEvents = computed(() => {
        const events = {
          closeAutoFocus: (e) => e.preventDefault()
        };
        if (!props.dismissible) {
          return {
            pointerDownOutside: (e) => e.preventDefault(),
            interactOutside: (e) => e.preventDefault(),
            escapeKeyDown: (e) => e.preventDefault(),
            ...events
          };
        }
        return events;
      });
      const ui2 = computed(() => slideover({
        transition: props.transition,
        side: props.side
      }));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1S), normalizeProps$1(guardReactiveProps(unref(rootProps))), {
          default: withCtx(({ open }) => [
            !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$1R), {
              key: 0,
              "as-child": "",
              class: normalizeClass(props.class)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  open
                })
              ]),
              _: 2
            }, 1032, [
              "class"
            ])) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$16), {
              disabled: !_ctx.portal
            }, {
              default: withCtx(() => {
                var _a2, _b2;
                return [
                  _ctx.overlay ? (openBlock(), createBlock(unref(_sfc_main$1I), {
                    key: 0,
                    class: normalizeClass(ui2.value.overlay({
                      class: (_a2 = props.ui) == null ? void 0 : _a2.overlay
                    }))
                  }, null, 8, [
                    "class"
                  ])) : createCommentVNode("", true),
                  createVNode(unref(_sfc_main$1K), mergeProps({
                    "data-side": _ctx.side,
                    class: ui2.value.content({
                      class: [
                        !slots.default && props.class,
                        (_b2 = props.ui) == null ? void 0 : _b2.content
                      ]
                    })
                  }, contentProps.value, {
                    onAfterLeave: _cache[0] || (_cache[0] = ($event) => emits("after:leave"))
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(_sfc_main$1X), {
                        key: 0
                      }, {
                        default: withCtx(() => [
                          _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$1G), {
                            key: 0
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(_ctx.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$1F), {
                            key: 1
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(_ctx.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", {}, () => {
                        var _a3, _b3, _c2;
                        return [
                          !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass(ui2.value.header({
                              class: (_a3 = props.ui) == null ? void 0 : _a3.header
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b4, _c3;
                              return [
                                createBaseVNode("div", {
                                  class: normalizeClass(ui2.value.wrapper({
                                    class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper
                                  }))
                                }, [
                                  _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$1G), {
                                    key: 0,
                                    class: normalizeClass(ui2.value.title({
                                      class: (_b4 = props.ui) == null ? void 0 : _b4.title
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, [
                                    "class"
                                  ])) : createCommentVNode("", true),
                                  _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$1F), {
                                    key: 1,
                                    class: normalizeClass(ui2.value.description({
                                      class: (_c3 = props.ui) == null ? void 0 : _c3.description
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, [
                                    "class"
                                  ])) : createCommentVNode("", true)
                                ], 2),
                                _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(_sfc_main$1H), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", {
                                      ui: ui2.value
                                    }, () => {
                                      var _a5;
                                      return [
                                        _ctx.close ? (openBlock(), createBlock(_sfc_main$p, mergeProps({
                                          key: 0,
                                          icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                                          size: "md",
                                          color: "neutral",
                                          variant: "ghost",
                                          "aria-label": unref(t)("slideover.close")
                                        }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                          class: ui2.value.close({
                                            class: (_a5 = props.ui) == null ? void 0 : _a5.close
                                          })
                                        }), null, 16, [
                                          "icon",
                                          "aria-label",
                                          "class"
                                        ])) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 3
                                })) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true),
                          createBaseVNode("div", {
                            class: normalizeClass(ui2.value.body({
                              class: (_b3 = props.ui) == null ? void 0 : _b3.body
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "body")
                          ], 2),
                          !!slots.footer ? (openBlock(), createElementBlock("div", {
                            key: 1,
                            class: normalizeClass(ui2.value.footer({
                              class: (_c2 = props.ui) == null ? void 0 : _c2.footer
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("", true)
                        ];
                      })
                    ]),
                    _: 3
                  }, 16, [
                    "data-side",
                    "class"
                  ])
                ];
              }),
              _: 3
            }, 8, [
              "disabled"
            ])
          ]),
          _: 3
        }, 16);
      };
    }
  });
  const theme$c = {
    "slots": {
      "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
      "content": "fixed bg-(--ui-bg) divide-y divide-(--ui-border) flex flex-col focus:outline-none",
      "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
      "wrapper": "",
      "body": "flex-1 overflow-y-auto p-4 sm:p-6",
      "footer": "flex items-center gap-1.5 p-4 sm:px-6",
      "title": "text-(--ui-text-highlighted) font-semibold",
      "description": "mt-1 text-(--ui-text-muted) text-sm",
      "close": "absolute top-4 end-4"
    },
    "variants": {
      "transition": {
        "true": {
          "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
          "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
        }
      },
      "fullscreen": {
        "true": {
          "content": "inset-0"
        },
        "false": {
          "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)"
        }
      }
    }
  };
  const appConfigModal = _appConfig;
  const modal = tv$1({
    extend: tv$1(theme$c),
    ...((_l = appConfigModal.ui) == null ? void 0 : _l.modal) || {}
  });
  _sfc_main$g = defineComponent({
    __name: "Modal",
    props: {
      title: {},
      description: {},
      content: {},
      overlay: {
        type: Boolean,
        default: true
      },
      transition: {
        type: Boolean,
        default: true
      },
      fullscreen: {
        type: Boolean
      },
      portal: {
        type: Boolean,
        default: true
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        default: true
      },
      closeIcon: {},
      dismissible: {
        type: Boolean,
        default: true
      },
      class: {},
      ui: {},
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      },
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "after:leave",
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const { t } = useLocale();
      const appConfig2 = useAppConfig$1();
      const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
      const contentProps = toRef(() => props.content);
      const contentEvents = computed(() => {
        const events = {
          closeAutoFocus: (e) => e.preventDefault()
        };
        if (!props.dismissible) {
          return {
            pointerDownOutside: (e) => e.preventDefault(),
            interactOutside: (e) => e.preventDefault(),
            escapeKeyDown: (e) => e.preventDefault(),
            ...events
          };
        }
        return events;
      });
      const ui2 = computed(() => modal({
        transition: props.transition,
        fullscreen: props.fullscreen
      }));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$1S), normalizeProps$1(guardReactiveProps(unref(rootProps))), {
          default: withCtx(({ open }) => [
            !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$1R), {
              key: 0,
              "as-child": "",
              class: normalizeClass(props.class)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  open
                })
              ]),
              _: 2
            }, 1032, [
              "class"
            ])) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$16), {
              disabled: !_ctx.portal
            }, {
              default: withCtx(() => {
                var _a2, _b2;
                return [
                  _ctx.overlay ? (openBlock(), createBlock(unref(_sfc_main$1I), {
                    key: 0,
                    class: normalizeClass(ui2.value.overlay({
                      class: (_a2 = props.ui) == null ? void 0 : _a2.overlay
                    }))
                  }, null, 8, [
                    "class"
                  ])) : createCommentVNode("", true),
                  createVNode(unref(_sfc_main$1K), mergeProps({
                    class: ui2.value.content({
                      class: [
                        !slots.default && props.class,
                        (_b2 = props.ui) == null ? void 0 : _b2.content
                      ]
                    })
                  }, contentProps.value, {
                    onAfterLeave: _cache[0] || (_cache[0] = ($event) => emits("after:leave"))
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(_sfc_main$1X), {
                        key: 0
                      }, {
                        default: withCtx(() => [
                          _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$1G), {
                            key: 0
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(_ctx.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$1F), {
                            key: 1
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(_ctx.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", {}, () => {
                        var _a3, _b3, _c2;
                        return [
                          !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass(ui2.value.header({
                              class: (_a3 = props.ui) == null ? void 0 : _a3.header
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b4, _c3;
                              return [
                                createBaseVNode("div", {
                                  class: normalizeClass(ui2.value.wrapper({
                                    class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper
                                  }))
                                }, [
                                  _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$1G), {
                                    key: 0,
                                    class: normalizeClass(ui2.value.title({
                                      class: (_b4 = props.ui) == null ? void 0 : _b4.title
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, [
                                    "class"
                                  ])) : createCommentVNode("", true),
                                  _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$1F), {
                                    key: 1,
                                    class: normalizeClass(ui2.value.description({
                                      class: (_c3 = props.ui) == null ? void 0 : _c3.description
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, [
                                    "class"
                                  ])) : createCommentVNode("", true)
                                ], 2),
                                _ctx.close || !!slots.close ? (openBlock(), createBlock(unref(_sfc_main$1H), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", {
                                      ui: ui2.value
                                    }, () => {
                                      var _a5;
                                      return [
                                        _ctx.close ? (openBlock(), createBlock(_sfc_main$p, mergeProps({
                                          key: 0,
                                          icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                                          size: "md",
                                          color: "neutral",
                                          variant: "ghost",
                                          "aria-label": unref(t)("modal.close")
                                        }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                          class: ui2.value.close({
                                            class: (_a5 = props.ui) == null ? void 0 : _a5.close
                                          })
                                        }), null, 16, [
                                          "icon",
                                          "aria-label",
                                          "class"
                                        ])) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 3
                                })) : createCommentVNode("", true)
                              ];
                            })
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createElementBlock("div", {
                            key: 1,
                            class: normalizeClass(ui2.value.body({
                              class: (_b3 = props.ui) == null ? void 0 : _b3.body
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "body")
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createElementBlock("div", {
                            key: 2,
                            class: normalizeClass(ui2.value.footer({
                              class: (_c2 = props.ui) == null ? void 0 : _c2.footer
                            }))
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("", true)
                        ];
                      })
                    ]),
                    _: 3
                  }, 16, [
                    "class"
                  ])
                ];
              }),
              _: 3
            }, 8, [
              "disabled"
            ])
          ]),
          _: 3
        }, 16);
      };
    }
  });
  (function() {
    var t;
    try {
      if (typeof document < "u") {
        var a2 = document.createElement("style");
        a2.nonce = (t = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : t.content, a2.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(a2);
      }
    } catch (r) {
      console.error("vite-plugin-css-injected-by-js", r);
    }
  })();
  const rt = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const ut = (e) => typeof e < "u";
  function st(e) {
    return JSON.parse(JSON.stringify(e));
  }
  function $e(e, n, s, i2 = {}) {
    var t, w, d;
    const { clone: v2 = false, passive: D = false, eventName: $, deep: T = false, defaultValue: r, shouldEmit: l2 } = i2, h2 = getCurrentInstance(), m = s || (h2 == null ? void 0 : h2.emit) || ((t = h2 == null ? void 0 : h2.$emit) == null ? void 0 : t.bind(h2)) || ((d = (w = h2 == null ? void 0 : h2.proxy) == null ? void 0 : w.$emit) == null ? void 0 : d.bind(h2 == null ? void 0 : h2.proxy));
    let u2 = $;
    n || (n = "modelValue"), u2 = u2 || `update:${n.toString()}`;
    const L = (a2) => v2 ? typeof v2 == "function" ? v2(a2) : st(a2) : a2, H = () => ut(e[n]) ? L(e[n]) : r, p2 = (a2) => {
      l2 ? l2(a2) && m(u2, a2) : m(u2, a2);
    };
    if (D) {
      const a2 = H(), c2 = ref(a2);
      let f = false;
      return watch(() => e[n], (y2) => {
        f || (f = true, c2.value = L(y2), nextTick(() => f = false));
      }), watch(c2, (y2) => {
        !f && (y2 !== e[n] || T) && p2(y2);
      }, {
        deep: T
      }), c2;
    } else return computed({
      get() {
        return H();
      },
      set(a2) {
        p2(a2);
      }
    });
  }
  const [ee, ct] = createContext("DrawerRoot"), Ee = /* @__PURE__ */ new WeakMap();
  function C(e, n, s = false) {
    if (!e || !(e instanceof HTMLElement) || !n) return;
    const i2 = {};
    Object.entries(n).forEach(([t, w]) => {
      if (t.startsWith("--")) {
        e.style.setProperty(t, w);
        return;
      }
      i2[t] = e.style[t], e.style[t] = w;
    }), !s && Ee.set(e, i2);
  }
  function dt(e, n) {
    if (!e || !(e instanceof HTMLElement)) return;
    const s = Ee.get(e);
    s && Object.entries(s).forEach(([i2, t]) => {
      e.style[i2] = t;
    });
  }
  function ie(e, n) {
    const s = window.getComputedStyle(e), i2 = s.transform || s.webkitTransform || s.mozTransform;
    let t = i2.match(/^matrix3d\((.+)\)$/);
    return t ? Number.parseFloat(t[1].split(", ")[_(n) ? 13 : 12]) : (t = i2.match(/^matrix\((.+)\)$/), t ? Number.parseFloat(t[1].split(", ")[_(n) ? 5 : 4]) : null);
  }
  function vt(e) {
    return 8 * (Math.log(e + 1) - 2);
  }
  function _(e) {
    switch (e) {
      case "top":
      case "bottom":
        return true;
      case "left":
      case "right":
        return false;
      default:
        return e;
    }
  }
  function de(e, n) {
    if (!e) return () => {
    };
    const s = e.style.cssText;
    return Object.assign(e.style, n), () => {
      e.style.cssText = s;
    };
  }
  function ft(...e) {
    return (...n) => {
      for (const s of e) typeof s == "function" && s(...n);
    };
  }
  const O = {
    DURATION: 0.5,
    EASE: [
      0.32,
      0.72,
      0,
      1
    ]
  }, _e = 0.4, pt = 0.25, gt = 100, Be = 8, re = 16, Ce = 26, Oe = "vaul-dragging";
  function mt({ activeSnapPoint: e, snapPoints: n, drawerRef: s, overlayRef: i2, fadeFromIndex: t, onSnapPointChange: w, direction: d }) {
    const v2 = ref(typeof window < "u" ? {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    } : void 0);
    function D() {
      v2.value = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      };
    }
    onMounted(() => {
      typeof window < "u" && window.addEventListener("resize", D);
    }), onBeforeUnmount(() => {
      typeof window < "u" && window.removeEventListener("resize", D);
    });
    const $ = computed(() => (n.value && e.value === n.value[n.value.length - 1]) ?? null), T = computed(() => n.value && n.value.length > 0 && ((t == null ? void 0 : t.value) || (t == null ? void 0 : t.value) === 0) && !Number.isNaN(t == null ? void 0 : t.value) && n.value[(t == null ? void 0 : t.value) ?? -1] === e.value || !n.value), r = computed(() => {
      var p2;
      return ((p2 = n.value) == null ? void 0 : p2.findIndex((a2) => a2 === e.value)) ?? null;
    }), l2 = computed(() => {
      var p2;
      return ((p2 = n.value) == null ? void 0 : p2.map((a2) => {
        const c2 = typeof a2 == "string";
        let f = 0;
        if (c2 && (f = Number.parseInt(a2, 10)), _(d.value)) {
          const P = c2 ? f : v2.value ? a2 * v2.value.innerHeight : 0;
          return v2.value ? d.value === "bottom" ? v2.value.innerHeight - P : -v2.value.innerHeight + P : P;
        }
        const y2 = c2 ? f : v2.value ? a2 * v2.value.innerWidth : 0;
        return v2.value ? d.value === "right" ? v2.value.innerWidth - y2 : -v2.value.innerWidth + y2 : y2;
      })) ?? [];
    }), h2 = computed(() => {
      var p2;
      return r.value !== null ? (p2 = l2.value) == null ? void 0 : p2[r.value] : null;
    }), m = (p2) => {
      var c2, f, y2, P;
      const a2 = ((c2 = l2.value) == null ? void 0 : c2.findIndex((x2) => x2 === p2)) ?? null;
      nextTick(() => {
        var x2;
        w(a2, l2.value), C((x2 = s.value) == null ? void 0 : x2.$el, {
          transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
          transform: _(d.value) ? `translate3d(0, ${p2}px, 0)` : `translate3d(${p2}px, 0, 0)`
        });
      }), l2.value && a2 !== l2.value.length - 1 && a2 !== (t == null ? void 0 : t.value) ? C((f = i2.value) == null ? void 0 : f.$el, {
        transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
        opacity: "0"
      }) : C((y2 = i2.value) == null ? void 0 : y2.$el, {
        transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
        opacity: "1"
      }), e.value = a2 !== null ? ((P = n.value) == null ? void 0 : P[a2]) ?? null : null;
    };
    watch([
      e,
      l2,
      n
    ], () => {
      var p2;
      if (e.value) {
        const a2 = ((p2 = n.value) == null ? void 0 : p2.findIndex((c2) => c2 === e.value)) ?? -1;
        l2.value && a2 !== -1 && typeof l2.value[a2] == "number" && m(l2.value[a2]);
      }
    }, {
      immediate: true
    });
    function u2({ draggedDistance: p2, closeDrawer: a2, velocity: c2, dismissible: f }) {
      var j, G, z;
      if (t.value === void 0) return;
      const y2 = d.value === "bottom" || d.value === "right" ? (h2.value ?? 0) - p2 : (h2.value ?? 0) + p2, P = r.value === t.value - 1, x2 = r.value === 0, W = p2 > 0;
      if (P && C((j = i2.value) == null ? void 0 : j.$el, {
        transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
      }), c2 > 2 && !W) {
        f ? a2() : m(l2.value[0]);
        return;
      }
      if (c2 > 2 && W && l2 && n.value) {
        m(l2.value[n.value.length - 1]);
        return;
      }
      const te = (G = l2.value) == null ? void 0 : G.reduce((M2, g2) => typeof M2 != "number" || typeof g2 != "number" ? M2 : Math.abs(g2 - y2) < Math.abs(M2 - y2) ? g2 : M2), V = _(d.value) ? window.innerHeight : window.innerWidth;
      if (c2 > _e && Math.abs(p2) < V * 0.4) {
        const M2 = W ? 1 : -1;
        if (M2 > 0 && $) {
          m(l2.value[(((z = n.value) == null ? void 0 : z.length) ?? 0) - 1]);
          return;
        }
        if (x2 && M2 < 0 && f && a2(), r.value === null) return;
        m(l2.value[r.value + M2]);
        return;
      }
      m(te);
    }
    function L({ draggedDistance: p2 }) {
      var c2;
      if (h2.value === null) return;
      const a2 = d.value === "bottom" || d.value === "right" ? h2.value - p2 : h2.value + p2;
      (d.value === "bottom" || d.value === "right") && a2 < l2.value[l2.value.length - 1] || (d.value === "top" || d.value === "left") && a2 > l2.value[l2.value.length - 1] || C((c2 = s.value) == null ? void 0 : c2.$el, {
        transform: _(d.value) ? `translate3d(0, ${a2}px, 0)` : `translate3d(${a2}px, 0, 0)`
      });
    }
    function H(p2, a2) {
      if (!n.value || typeof r.value != "number" || !l2.value || t.value === void 0) return null;
      const c2 = r.value === t.value - 1;
      if (r.value >= t.value && a2) return 0;
      if (c2 && !a2) return 1;
      if (!T.value && !c2) return null;
      const y2 = c2 ? r.value + 1 : r.value - 1, P = c2 ? l2.value[y2] - l2.value[y2 - 1] : l2.value[y2 + 1] - l2.value[y2], x2 = p2 / Math.abs(P);
      return c2 ? 1 - x2 : x2;
    }
    return {
      isLastSnapPoint: $,
      shouldFade: T,
      getPercentageDragged: H,
      activeSnapPointIndex: r,
      onRelease: u2,
      onDrag: L,
      snapPointsOffset: l2
    };
  }
  function Te() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  let Q = null;
  function wt(e) {
    const { isOpen: n, modal: s, nested: i2, hasBeenOpened: t, preventScrollRestoration: w, noBodyStyles: d } = e, v2 = ref(typeof window < "u" ? window.location.href : ""), D = ref(0);
    function $() {
      if (Te() && Q === null && n.value && !d.value) {
        Q = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
          height: document.body.style.height
        };
        const { scrollX: r, innerHeight: l2 } = window;
        document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
          top: `${-D.value}px`,
          left: `${-r}px`,
          right: "0px",
          height: "auto"
        }), setTimeout(() => {
          requestAnimationFrame(() => {
            const h2 = l2 - window.innerHeight;
            h2 && D.value >= l2 && (document.body.style.top = `-${D.value + h2}px`);
          });
        }, 300);
      }
    }
    function T() {
      if (Te() && Q !== null && !d.value) {
        const r = -Number.parseInt(document.body.style.top, 10), l2 = -Number.parseInt(document.body.style.left, 10);
        Object.assign(document.body.style, Q), window.requestAnimationFrame(() => {
          if (w.value && v2.value !== window.location.href) {
            v2.value = window.location.href;
            return;
          }
          window.scrollTo(l2, r);
        }), Q = null;
      }
    }
    return onMounted(() => {
      function r() {
        D.value = window.scrollY;
      }
      r(), window.addEventListener("scroll", r), onUnmounted(() => {
        window.removeEventListener("scroll", r);
      });
    }), watch([
      n,
      t,
      v2
    ], () => {
      i2.value || !t.value || (n.value ? (window.matchMedia("(display-mode: standalone)").matches || $(), s.value || setTimeout(() => {
        T();
      }, 500)) : T());
    }), {
      restorePositionSetting: T
    };
  }
  function ht(e, n) {
    return e && e.value ? e : n;
  }
  function yt(e) {
    const { emitDrag: n, emitRelease: s, emitClose: i2, emitOpenChange: t, open: w, dismissible: d, nested: v2, modal: D, shouldScaleBackground: $, setBackgroundColorOnScale: T, scrollLockTimeout: r, closeThreshold: l2, activeSnapPoint: h2, fadeFromIndex: m, direction: u2, noBodyStyles: L, handleOnly: H, preventScrollRestoration: p2 } = e, a2 = ref(w.value ?? false), c2 = ref(false), f = ref(false), y2 = ref(false), P = ref(null), x2 = ref(null), W = ref(null), te = ref(null), V = ref(null), j = ref(false), G = ref(null), z = ref(0), M2 = ref(false);
    ref(0);
    const g2 = ref(null);
    ref(0);
    const pe = computed(() => {
      var o;
      return ((o = g2.value) == null ? void 0 : o.$el.getBoundingClientRect().height) || 0;
    }), U = ht(e.snapPoints, ref(void 0)), Ne = computed(() => {
      var o;
      return U && (((o = U.value) == null ? void 0 : o.length) ?? 0) > 0;
    }), Ae = ref(null), { activeSnapPointIndex: ge, onRelease: xe, snapPointsOffset: He, onDrag: Ue, shouldFade: me, getPercentageDragged: Le } = mt({
      snapPoints: U,
      activeSnapPoint: h2,
      drawerRef: g2,
      fadeFromIndex: m,
      overlayRef: P,
      onSnapPointChange: Me,
      direction: u2
    });
    function Me(o, R2) {
      U.value && o === R2.length - 1 && (x2.value = /* @__PURE__ */ new Date());
    }
    wt({
      isOpen: a2,
      modal: D,
      nested: v2,
      hasBeenOpened: c2,
      noBodyStyles: L,
      preventScrollRestoration: p2
    });
    function ne() {
      return (window.innerWidth - Ce) / window.innerWidth;
    }
    function we(o, R2) {
      var k;
      if (!o) return false;
      let b = o;
      const B = (k = window.getSelection()) == null ? void 0 : k.toString(), E = g2.value ? ie(g2.value.$el, u2.value) : null, A = /* @__PURE__ */ new Date();
      if (b.hasAttribute("data-vaul-no-drag") || b.closest("[data-vaul-no-drag]")) return false;
      if (u2.value === "right" || u2.value === "left") return true;
      if (x2.value && A.getTime() - x2.value.getTime() < 500) return false;
      if (E !== null && (u2.value === "bottom" ? E > 0 : E < 0)) return true;
      if (B && B.length > 0) return false;
      if (V.value && A.getTime() - V.value.getTime() < r.value && E === 0 || R2) return V.value = A, false;
      for (; b; ) {
        if (b.scrollHeight > b.clientHeight) {
          if (b.scrollTop !== 0) return V.value = /* @__PURE__ */ new Date(), false;
          if (b.getAttribute("role") === "dialog") return true;
        }
        b = b.parentNode;
      }
      return true;
    }
    function ke(o) {
      !d.value && !U.value || g2.value && !g2.value.$el.contains(o.target) || (f.value = true, W.value = /* @__PURE__ */ new Date(), o.target.setPointerCapture(o.pointerId), z.value = _(u2.value) ? o.clientY : o.clientX);
    }
    function Ie(o) {
      var R2, b, B, E, A, k;
      if (g2.value && f.value) {
        const X = u2.value === "bottom" || u2.value === "right" ? 1 : -1, ae = (z.value - (_(u2.value) ? o.clientY : o.clientX)) * X, le = ae > 0, ye = U.value && !d.value && !le;
        if (ye && ge.value === 0) return;
        const ce2 = Math.abs(ae), Se = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
        let q2 = ce2 / pe.value;
        const De = Le(ce2, le);
        if (De !== null && (q2 = De), ye && q2 >= 1 || !j.value && !we(o.target, le)) return;
        if ((R2 = g2 == null ? void 0 : g2.value) == null || R2.$el.classList.add(Oe), j.value = true, C((b = g2.value) == null ? void 0 : b.$el, {
          transition: "none"
        }), C((B = P.value) == null ? void 0 : B.$el, {
          transition: "none"
        }), U.value && Ue({
          draggedDistance: ae
        }), le && !U.value) {
          const Y = vt(ae), oe = Math.min(Y * -1, 0) * X;
          C((E = g2.value) == null ? void 0 : E.$el, {
            transform: _(u2.value) ? `translate3d(0, ${oe}px, 0)` : `translate3d(${oe}px, 0, 0)`
          });
          return;
        }
        const qe = 1 - q2;
        if ((me.value || m.value && ge.value === m.value - 1) && (n(q2), C((A = P.value) == null ? void 0 : A.$el, {
          opacity: `${qe}`,
          transition: "none"
        }, true)), Se && P.value && $.value) {
          const Y = Math.min(ne() + q2 * (1 - ne()), 1), oe = 8 - q2 * 8, be = Math.max(0, 14 - q2 * 14);
          C(Se, {
            borderRadius: `${oe}px`,
            transform: _(u2.value) ? `scale(${Y}) translate3d(0, ${be}px, 0)` : `scale(${Y}) translate3d(${be}px, 0, 0)`,
            transition: "none"
          }, true);
        }
        if (!U.value) {
          const Y = ce2 * X;
          C((k = g2.value) == null ? void 0 : k.$el, {
            transform: _(u2.value) ? `translate3d(0, ${Y}px, 0)` : `translate3d(${Y}px, 0, 0)`
          });
        }
      }
    }
    function he() {
      var b;
      if (!g2.value) return;
      const o = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), R2 = ie(g2.value.$el, u2.value);
      C(g2.value.$el, {
        transform: "translate3d(0, 0, 0)",
        transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
      }), C((b = P.value) == null ? void 0 : b.$el, {
        transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
        opacity: "1"
      }), $.value && R2 && R2 > 0 && a2.value && C(o, {
        borderRadius: `${Be}px`,
        overflow: "hidden",
        ..._(u2.value) ? {
          transform: `scale(${ne()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${ne()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${O.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
      }, true);
    }
    function K(o) {
      g2.value && (i2(), o || (a2.value = false), window.setTimeout(() => {
        U.value && (h2.value = U.value[0]);
      }, O.DURATION * 1e3));
    }
    watchEffect(() => {
      if (!a2.value && $.value && rt) {
        const o = setTimeout(() => {
          dt(document.body);
        }, 200);
        return () => clearTimeout(o);
      }
    }), watch(w, () => {
      a2.value = w.value, w.value || K();
    });
    function We(o) {
      if (!f.value || !g2.value) return;
      g2.value.$el.classList.remove(Oe), j.value = false, f.value = false, te.value = /* @__PURE__ */ new Date();
      const R2 = ie(g2.value.$el, u2.value);
      if (!we(o.target, false) || !R2 || Number.isNaN(R2) || W.value === null) return;
      const b = te.value.getTime() - W.value.getTime(), B = z.value - (_(u2.value) ? o.clientY : o.clientX), E = Math.abs(B) / b;
      if (E > 0.05 && (y2.value = true, window.setTimeout(() => {
        y2.value = false;
      }, 200)), U.value) {
        const k = u2.value === "bottom" || u2.value === "right" ? 1 : -1;
        xe({
          draggedDistance: B * k,
          closeDrawer: K,
          velocity: E,
          dismissible: d.value
        }), s(true);
        return;
      }
      if (u2.value === "bottom" || u2.value === "right" ? B > 0 : B < 0) {
        he(), s(true);
        return;
      }
      if (E > _e) {
        K(), s(false);
        return;
      }
      const A = Math.min(g2.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight);
      if (R2 >= A * l2.value) {
        K(), s(false);
        return;
      }
      s(true), he();
    }
    watch(a2, (o) => {
      o && (x2.value = /* @__PURE__ */ new Date()), t(o);
    }, {
      immediate: true
    });
    function Ve(o) {
      var B, E;
      const R2 = o ? (window.innerWidth - re) / window.innerWidth : 1, b = o ? -16 : 0;
      G.value && window.clearTimeout(G.value), C((B = g2.value) == null ? void 0 : B.$el, {
        transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
        transform: `scale(${R2}) translate3d(0, ${b}px, 0)`
      }), !o && ((E = g2.value) != null && E.$el) && (G.value = window.setTimeout(() => {
        var k, X;
        const A = ie((k = g2.value) == null ? void 0 : k.$el, u2.value);
        C((X = g2.value) == null ? void 0 : X.$el, {
          transition: "none",
          transform: _(u2.value) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
        });
      }, 500));
    }
    function je(o) {
      var A;
      if (o < 0) return;
      const R2 = _(u2.value) ? window.innerHeight : window.innerWidth, b = (R2 - re) / R2, B = b + o * (1 - b), E = -16 + o * re;
      C((A = g2.value) == null ? void 0 : A.$el, {
        transform: _(u2.value) ? `scale(${B}) translate3d(0, ${E}px, 0)` : `scale(${B}) translate3d(${E}px, 0, 0)`,
        transition: "none"
      });
    }
    function ze(o) {
      var E;
      const R2 = _(u2.value) ? window.innerHeight : window.innerWidth, b = o ? (R2 - re) / R2 : 1, B = o ? -16 : 0;
      o && C((E = g2.value) == null ? void 0 : E.$el, {
        transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
        transform: _(u2.value) ? `scale(${b}) translate3d(0, ${B}px, 0)` : `scale(${b}) translate3d(${B}px, 0, 0)`
      });
    }
    return {
      open: w,
      isOpen: a2,
      modal: D,
      keyboardIsOpen: M2,
      hasBeenOpened: c2,
      drawerRef: g2,
      drawerHeightRef: pe,
      overlayRef: P,
      handleRef: Ae,
      isDragging: f,
      dragStartTime: W,
      isAllowedToDrag: j,
      snapPoints: U,
      activeSnapPoint: h2,
      hasSnapPoints: Ne,
      pointerStart: z,
      dismissible: d,
      snapPointsOffset: He,
      direction: u2,
      shouldFade: me,
      fadeFromIndex: m,
      shouldScaleBackground: $,
      setBackgroundColorOnScale: T,
      onPress: ke,
      onDrag: Ie,
      onRelease: We,
      closeDrawer: K,
      onNestedDrag: je,
      onNestedRelease: ze,
      onNestedOpenChange: Ve,
      emitClose: i2,
      emitDrag: n,
      emitRelease: s,
      emitOpenChange: t,
      nested: v2,
      handleOnly: H,
      noBodyStyles: L
    };
  }
  const St = defineComponent({
    __name: "DrawerRoot",
    props: {
      activeSnapPoint: {
        default: void 0
      },
      closeThreshold: {
        default: pt
      },
      shouldScaleBackground: {
        type: Boolean,
        default: void 0
      },
      setBackgroundColorOnScale: {
        type: Boolean,
        default: true
      },
      scrollLockTimeout: {
        default: gt
      },
      fixed: {
        type: Boolean,
        default: void 0
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: void 0
      },
      nested: {
        type: Boolean,
        default: false
      },
      direction: {
        default: "bottom"
      },
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean,
        default: false
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {
        default: void 0
      },
      fadeFromIndex: {
        default: void 0
      }
    },
    emits: [
      "drag",
      "release",
      "close",
      "update:open",
      "update:activeSnapPoint",
      "animationEnd"
    ],
    setup(e, { expose: n, emit: s }) {
      const i2 = e, t = s;
      useSlots();
      const w = computed(() => i2.fadeFromIndex ?? (i2.snapPoints && i2.snapPoints.length - 1)), d = $e(i2, "open", t, {
        defaultValue: i2.defaultOpen,
        passive: i2.open === void 0
      }), v2 = $e(i2, "activeSnapPoint", t, {
        passive: i2.activeSnapPoint === void 0
      }), D = {
        emitDrag: (m) => t("drag", m),
        emitRelease: (m) => t("release", m),
        emitClose: () => t("close"),
        emitOpenChange: (m) => {
          t("update:open", m), setTimeout(() => {
            t("animationEnd", m);
          }, O.DURATION * 1e3);
        }
      }, { closeDrawer: $, hasBeenOpened: T, modal: r, isOpen: l2 } = ct(yt({
        ...D,
        ...toRefs(i2),
        activeSnapPoint: v2,
        fadeFromIndex: w,
        open: d
      }));
      function h2(m) {
        if (d.value !== void 0) {
          D.emitOpenChange(m);
          return;
        }
        l2.value = m, m ? T.value = true : $();
      }
      return n({
        open: l2
      }), (m, u2) => (openBlock(), createBlock(unref(_sfc_main$1S), {
        open: unref(l2),
        modal: unref(r),
        "onUpdate:open": h2
      }, {
        default: withCtx(() => [
          renderSlot(m.$slots, "default", {
            open: unref(l2)
          })
        ]),
        _: 3
      }, 8, [
        "open",
        "modal"
      ]));
    }
  }), Bt = defineComponent({
    __name: "DrawerOverlay",
    setup(e) {
      const { overlayRef: n, hasSnapPoints: s, isOpen: i2, shouldFade: t } = ee();
      return (w, d) => (openBlock(), createBlock(unref(_sfc_main$1I), {
        ref_key: "overlayRef",
        ref: n,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": unref(i2) && unref(s) ? "true" : "false",
        "data-vaul-snap-points-overlay": unref(i2) && unref(t) ? "true" : "false"
      }, null, 8, [
        "data-vaul-snap-points",
        "data-vaul-snap-points-overlay"
      ]));
    }
  }), Dt = () => () => {
  };
  function bt() {
    const { direction: e, isOpen: n, shouldScaleBackground: s, setBackgroundColorOnScale: i2, noBodyStyles: t } = ee(), w = ref(null), d = ref(document.body.style.backgroundColor);
    function v2() {
      return (window.innerWidth - Ce) / window.innerWidth;
    }
    watchEffect((D) => {
      if (n.value && s.value) {
        w.value && clearTimeout(w.value);
        const $ = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
        if (!$) return;
        ft(i2.value && !t.value ? de(document.body, {
          background: "black"
        }) : Dt, de($, {
          transformOrigin: _(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${O.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
        }));
        const T = de($, {
          borderRadius: `${Be}px`,
          overflow: "hidden",
          ..._(e.value) ? {
            transform: `scale(${v2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
          } : {
            transform: `scale(${v2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
          }
        });
        D(() => {
          T(), w.value = window.setTimeout(() => {
            d.value ? document.body.style.background = d.value : document.body.style.removeProperty("background");
          }, O.DURATION * 1e3);
        });
      }
    }, {
      flush: "pre"
    });
  }
  const Ct = defineComponent({
    __name: "DrawerContent",
    setup(e) {
      const { open: n, isOpen: s, snapPointsOffset: i2, hasSnapPoints: t, drawerRef: w, onPress: d, onDrag: v2, onRelease: D, modal: $, emitOpenChange: T, dismissible: r, keyboardIsOpen: l2, closeDrawer: h2, direction: m, handleOnly: u2 } = ee();
      bt();
      const L = ref(false), H = computed(() => i2.value && i2.value.length > 0 ? `${i2.value[0]}px` : "0");
      function p2(f) {
        if (!$.value || f.defaultPrevented) {
          f.preventDefault();
          return;
        }
        l2.value && (l2.value = false), r.value ? T(false) : f.preventDefault();
      }
      function a2(f) {
        u2.value || d(f);
      }
      function c2(f) {
        u2.value || v2(f);
      }
      return watchEffect(() => {
        t.value && window.requestAnimationFrame(() => {
          L.value = true;
        });
      }), (f, y2) => (openBlock(), createBlock(unref(_sfc_main$1K), {
        ref_key: "drawerRef",
        ref: w,
        "data-vaul-drawer": "",
        "data-vaul-drawer-direction": unref(m),
        "data-vaul-delayed-snap-points": L.value ? "true" : "false",
        "data-vaul-snap-points": unref(s) && unref(t) ? "true" : "false",
        style: normalizeStyle({
          "--snap-point-height": H.value
        }),
        onPointerdown: a2,
        onPointermove: c2,
        onPointerup: unref(D),
        onPointerDownOutside: p2,
        onOpenAutoFocus: y2[0] || (y2[0] = withModifiers(() => {
        }, [
          "prevent"
        ])),
        onEscapeKeyDown: y2[1] || (y2[1] = (P) => {
          unref(r) || P.preventDefault();
        })
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "data-vaul-drawer-direction",
        "data-vaul-delayed-snap-points",
        "data-vaul-snap-points",
        "style",
        "onPointerup"
      ]));
    }
  }), $t = [
    "data-vaul-drawer-visible"
  ], Ot = {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, Tt = 250, Pt = 120, Nt = defineComponent({
    __name: "DrawerHandle",
    props: {
      preventCycle: {
        type: Boolean,
        default: false
      }
    },
    setup(e) {
      const n = e, { onPress: s, onDrag: i2, handleRef: t, handleOnly: w, isOpen: d, snapPoints: v2, activeSnapPoint: D, isDragging: $, dismissible: T, closeDrawer: r } = ee(), l2 = ref(null), h2 = ref(false);
      function m() {
        if (h2.value) {
          H();
          return;
        }
        window.setTimeout(() => {
          u2();
        }, Pt);
      }
      function u2() {
        if ($.value || n.preventCycle || h2.value) {
          H();
          return;
        }
        if (H(), !v2.value || v2.value.length === 0) {
          T.value || r();
          return;
        }
        const c2 = D.value === v2.value[v2.value.length - 1];
        if (c2 && T.value) {
          r();
          return;
        }
        const f = v2.value.findIndex((P) => P === D.value);
        if (f === -1) return;
        const y2 = c2 ? 0 : f + 1;
        D.value = v2.value[y2];
      }
      function L() {
        l2.value = window.setTimeout(() => {
          h2.value = true;
        }, Tt);
      }
      function H() {
        l2.value && window.clearTimeout(l2.value), h2.value = false;
      }
      function p2(c2) {
        w.value && s(c2), L();
      }
      function a2(c2) {
        w.value && i2(c2);
      }
      return (c2, f) => (openBlock(), createElementBlock("div", {
        ref_key: "handleRef",
        ref: t,
        "data-vaul-drawer-visible": unref(d) ? "true" : "false",
        "data-vaul-handle": "",
        "aria-hidden": "true",
        onClick: m,
        onPointercancel: H,
        onPointerdown: p2,
        onPointermove: a2
      }, [
        createBaseVNode("span", Ot, [
          renderSlot(c2.$slots, "default")
        ])
      ], 40, $t));
    }
  });
  const theme$b = {
    "slots": {
      "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
      "content": "fixed bg-(--ui-bg) ring ring-(--ui-border) flex focus:outline-none",
      "handle": [
        "shrink-0 !bg-(--ui-bg-accented)",
        "transition-opacity"
      ],
      "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
      "header": "",
      "title": "text-(--ui-text-highlighted) font-semibold",
      "description": "mt-1 text-(--ui-text-muted) text-sm",
      "body": "flex-1",
      "footer": "flex flex-col gap-1.5"
    },
    "variants": {
      "direction": {
        "top": {
          "content": "mb-24 flex-col-reverse",
          "handle": "mb-4"
        },
        "right": {
          "content": "flex-row",
          "handle": "!ml-4"
        },
        "bottom": {
          "content": "mt-24 flex-col",
          "handle": "mt-4"
        },
        "left": {
          "content": "flex-row-reverse",
          "handle": "!mr-4"
        }
      },
      "inset": {
        "true": {
          "content": "rounded-[calc(var(--ui-radius)*2)] after:hidden"
        }
      }
    },
    "compoundVariants": [
      {
        "direction": [
          "top",
          "bottom"
        ],
        "class": {
          "content": "h-auto max-h-[96%]",
          "handle": "!w-12 !h-1.5 mx-auto"
        }
      },
      {
        "direction": [
          "right",
          "left"
        ],
        "class": {
          "content": "w-auto max-w-[calc(100%-2rem)]",
          "handle": "!h-12 !w-1.5 mt-auto mb-auto"
        }
      },
      {
        "direction": "top",
        "inset": true,
        "class": {
          "content": "inset-x-4 top-4"
        }
      },
      {
        "direction": "top",
        "inset": false,
        "class": {
          "content": "inset-x-0 top-0 rounded-b-[calc(var(--ui-radius)*2)]"
        }
      },
      {
        "direction": "bottom",
        "inset": true,
        "class": {
          "content": "inset-x-4 bottom-4"
        }
      },
      {
        "direction": "bottom",
        "inset": false,
        "class": {
          "content": "inset-x-0 bottom-0 rounded-t-[calc(var(--ui-radius)*2)]"
        }
      },
      {
        "direction": "left",
        "inset": true,
        "class": {
          "content": "inset-y-4 left-4"
        }
      },
      {
        "direction": "left",
        "inset": false,
        "class": {
          "content": "inset-y-0 left-0 rounded-r-[calc(var(--ui-radius)*2)]"
        }
      },
      {
        "direction": "right",
        "inset": true,
        "class": {
          "content": "inset-y-4 right-4"
        }
      },
      {
        "direction": "right",
        "inset": false,
        "class": {
          "content": "inset-y-0 right-0 rounded-l-[calc(var(--ui-radius)*2)]"
        }
      }
    ]
  };
  const appConfigDrawer = _appConfig;
  const drawer = tv$1({
    extend: tv$1(theme$b),
    ...((_m = appConfigDrawer.ui) == null ? void 0 : _m.drawer) || {}
  });
  const _sfc_main$f = defineComponent({
    __name: "Drawer",
    props: {
      as: {},
      title: {},
      description: {},
      inset: {
        type: Boolean
      },
      content: {},
      overlay: {
        type: Boolean,
        default: true
      },
      handle: {
        type: Boolean,
        default: true
      },
      portal: {
        type: Boolean,
        default: true
      },
      class: {},
      ui: {},
      activeSnapPoint: {},
      closeThreshold: {},
      shouldScaleBackground: {
        type: Boolean
      },
      setBackgroundColorOnScale: {
        type: Boolean
      },
      scrollLockTimeout: {},
      fixed: {
        type: Boolean
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      },
      nested: {
        type: Boolean
      },
      direction: {
        default: "bottom"
      },
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {}
    },
    emits: [
      "drag",
      "release",
      "close",
      "update:open",
      "update:activeSnapPoint",
      "animationEnd"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
      const contentProps = toRef(() => props.content);
      const contentEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      const ui2 = computed(() => drawer({
        direction: props.direction,
        inset: props.inset
      }));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(St), normalizeProps$1(guardReactiveProps(unref(rootProps))), {
          default: withCtx(() => [
            !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$1R), {
              key: 0,
              "as-child": "",
              class: normalizeClass(props.class)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "class"
            ])) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$16), {
              disabled: !_ctx.portal
            }, {
              default: withCtx(() => {
                var _a2, _b2;
                return [
                  _ctx.overlay ? (openBlock(), createBlock(unref(Bt), {
                    key: 0,
                    class: normalizeClass(ui2.value.overlay({
                      class: (_a2 = props.ui) == null ? void 0 : _a2.overlay
                    }))
                  }, null, 8, [
                    "class"
                  ])) : createCommentVNode("", true),
                  createVNode(unref(Ct), mergeProps({
                    class: ui2.value.content({
                      class: [
                        !slots.default && props.class,
                        (_b2 = props.ui) == null ? void 0 : _b2.content
                      ]
                    })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        _ctx.handle ? (openBlock(), createBlock(unref(Nt), {
                          key: 0,
                          class: normalizeClass(ui2.value.handle({
                            class: (_a3 = props.ui) == null ? void 0 : _a3.handle
                          }))
                        }, null, 8, [
                          "class"
                        ])) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a4, _b3, _c2, _d2;
                          return [
                            createBaseVNode("div", {
                              class: normalizeClass(ui2.value.container({
                                class: (_a4 = props.ui) == null ? void 0 : _a4.container
                              }))
                            }, [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: normalizeClass(ui2.value.header({
                                  class: (_b3 = props.ui) == null ? void 0 : _b3.header
                                }))
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a5, _b4;
                                  return [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(_sfc_main$1G), {
                                      key: 0,
                                      class: normalizeClass(ui2.value.title({
                                        class: (_a5 = props.ui) == null ? void 0 : _a5.title
                                      }))
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, [
                                      "class"
                                    ])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(_sfc_main$1F), {
                                      key: 1,
                                      class: normalizeClass(ui2.value.description({
                                        class: (_b4 = props.ui) == null ? void 0 : _b4.description
                                      }))
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, [
                                      "class"
                                    ])) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createElementBlock("div", {
                                key: 1,
                                class: normalizeClass(ui2.value.body({
                                  class: (_c2 = props.ui) == null ? void 0 : _c2.body
                                }))
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createElementBlock("div", {
                                key: 2,
                                class: normalizeClass(ui2.value.footer({
                                  class: (_d2 = props.ui) == null ? void 0 : _d2.footer
                                }))
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ];
                        })
                      ];
                    }),
                    _: 3
                  }, 16, [
                    "class"
                  ])
                ];
              }),
              _: 3
            }, 8, [
              "disabled"
            ])
          ]),
          _: 3
        }, 16);
      };
    }
  });
  useResizable = (key, options = {}, { collapsed = ref(false) } = {}) => {
    const el = ref(null);
    const opts = computed(() => ({
      side: "left",
      minSize: 0,
      maxSize: 100,
      defaultSize: 0,
      storage: "cookie",
      persistent: true,
      collapsible: false,
      collapsedSize: 0,
      resizable: true,
      unit: "%",
      ...isRef(options) ? options.value : options
    }));
    const defaultStorageValue = {
      size: opts.value.defaultSize,
      collapsed: unref(collapsed) ?? false
    };
    const storageData = opts.value.persistent && (opts.value.resizable || opts.value.collapsible) ? opts.value.storage === "cookie" ? useCookie(key, {}) : useStorage(key, defaultStorageValue) : ref(defaultStorageValue);
    const isCollapsed = computed({
      get: () => storageData.value.collapsed,
      set: (value) => {
        if (!opts.value.collapsible) {
          return;
        }
        if (isRef(collapsed)) {
          collapsed.value = value;
        }
        storageData.value.collapsed = value;
      }
    });
    const previousSize = ref(opts.value.defaultSize);
    const size2 = computed({
      get: () => storageData.value.size,
      set: (value) => {
        storageData.value.size = value;
      }
    });
    const currentSize = computed(() => isCollapsed.value ? opts.value.collapsedSize : size2.value);
    const isDragging = ref(false);
    const onMouseMove = (e, initialPos, initialSize) => {
      var _a2;
      if (!el.value || !opts.value.resizable) {
        return;
      }
      const parentSize = ((_a2 = el.value.parentElement) == null ? void 0 : _a2.offsetWidth) || 1;
      const delta = opts.value.side === "left" ? e.clientX - initialPos : initialPos - e.clientX;
      const newSize = initialSize + delta;
      let newValue;
      if (opts.value.unit === "rem") {
        const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
        newValue = newSize / rootFontSize;
      } else if (opts.value.unit === "px") {
        newValue = newSize;
      } else {
        newValue = newSize / parentSize * 100;
      }
      if (opts.value.collapsible && newValue < opts.value.collapsedSize + 4) {
        collapse(true);
        return;
      } else if (isCollapsed.value) {
        collapse(false);
      }
      size2.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newValue));
    };
    const onMouseDown = (e) => {
      if (!el.value || !opts.value.resizable) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const elWidth = el.value.getBoundingClientRect().width;
      if (!elWidth) {
        return;
      }
      const initialX = e.clientX;
      const initialWidth = elWidth;
      isDragging.value = true;
      const handleMouseMove = (e2) => {
        onMouseMove(e2, initialX, initialWidth);
      };
      const handleMouseUp = () => {
        isDragging.value = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    const onTouchMove = (e, initialPos, initialSize) => {
      var _a2;
      if (!el.value || !opts.value.resizable || !e.touches[0]) {
        return;
      }
      const parentSize = ((_a2 = el.value.parentElement) == null ? void 0 : _a2.offsetWidth) || 1;
      const delta = opts.value.side === "left" ? e.touches[0].clientX - initialPos : initialPos - e.touches[0].clientX;
      const newSize = initialSize + delta;
      let newValue;
      if (opts.value.unit === "rem") {
        const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
        newValue = newSize / rootFontSize;
      } else if (opts.value.unit === "px") {
        newValue = newSize;
      } else {
        newValue = newSize / parentSize * 100;
      }
      if (opts.value.collapsible && newValue < opts.value.collapsedSize + 4) {
        collapse(true);
        return;
      } else if (isCollapsed.value) {
        collapse(false);
      }
      size2.value = Math.min(opts.value.maxSize, Math.max(opts.value.minSize, newValue));
    };
    const onTouchStart = (e) => {
      if (!el.value || !opts.value.resizable || !e.touches[0]) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const elWidth = el.value.getBoundingClientRect().width;
      if (!elWidth) {
        return;
      }
      const initialX = e.touches[0].clientX;
      const initialWidth = elWidth;
      isDragging.value = true;
      const handleTouchMove = (e2) => {
        onTouchMove(e2, initialX, initialWidth);
      };
      const handleTouchEnd = () => {
        isDragging.value = false;
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
        document.removeEventListener("touchcancel", handleTouchEnd);
      };
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false
      });
      document.addEventListener("touchend", handleTouchEnd);
      document.addEventListener("touchcancel", handleTouchEnd);
    };
    const collapse = (value) => {
      if (!opts.value.collapsible) {
        return;
      }
      const newCollapsed = value ?? !isCollapsed.value;
      if (newCollapsed && !isCollapsed.value) {
        previousSize.value = size2.value;
      } else if (!newCollapsed && isCollapsed.value) {
        size2.value = previousSize.value;
      }
      isCollapsed.value = newCollapsed;
    };
    if (isRef(collapsed)) {
      watch(collapsed, (value) => {
        if (!opts.value.collapsible) {
          return;
        }
        if (storageData.value.collapsed !== value) {
          storageData.value.collapsed = value;
        }
      });
    }
    return {
      el,
      size: currentSize,
      isDragging,
      isCollapsed,
      onMouseDown,
      onTouchStart,
      collapse
    };
  };
  const theme$a = {
    "slots": {
      "root": "hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) shrink-0",
      "header": "h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4",
      "body": "flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2",
      "footer": "shrink-0 flex items-center gap-1.5 px-4 py-2",
      "toggle": "",
      "handle": "",
      "content": "lg:hidden",
      "overlay": "lg:hidden"
    },
    "variants": {
      "menu": {
        "true": {
          "header": "sm:px-6",
          "body": "sm:px-6",
          "footer": "sm:px-6"
        }
      },
      "side": {
        "left": {
          "root": "border-r border-(--ui-border)"
        },
        "right": {
          "root": ""
        }
      },
      "toggleSide": {
        "left": {
          "toggle": ""
        },
        "right": {
          "toggle": "ms-auto"
        }
      }
    }
  };
  const _hoisted_1$2 = [
    "data-collapsed",
    "data-dragging"
  ];
  const appConfig = _appConfig;
  const dashboardSidebar = tv({
    extend: tv(theme$a),
    ...((_n = appConfig.uiPro) == null ? void 0 : _n.dashboardSidebar) || {}
  });
  const _sfc_main$e = defineComponent({
    __name: "DashboardSidebar",
    props: mergeModels({
      mode: {
        default: "slideover"
      },
      menu: {},
      toggle: {
        type: [
          Boolean,
          Object
        ],
        default: true
      },
      toggleSide: {
        default: "left"
      },
      class: {},
      ui: {},
      id: {},
      side: {
        default: "left"
      },
      minSize: {
        default: 10
      },
      maxSize: {
        default: 20
      },
      defaultSize: {
        default: 15
      },
      resizable: {
        type: Boolean,
        default: false
      },
      collapsible: {
        type: Boolean,
        default: false
      },
      collapsedSize: {
        default: 0
      }
    }, {
      "open": {
        type: Boolean,
        ...{
          default: false
        }
      },
      "openModifiers": {},
      "collapsed": {
        type: Boolean,
        ...{
          default: false
        }
      },
      "collapsedModifiers": {}
    }),
    emits: [
      "update:open",
      "update:collapsed"
    ],
    setup(__props) {
      const props = __props;
      const slots = useSlots();
      const open = useModel(__props, "open");
      const collapsed = useModel(__props, "collapsed");
      const dashboardContext = useDashboard({
        storageKey: "dashboard",
        unit: "%",
        sidebarOpen: ref(false),
        sidebarCollapsed: ref(false)
      });
      const id = `${dashboardContext.storageKey}-sidebar-${props.id || useId$1()}`;
      const { el, size: size2, collapse, isCollapsed, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({
        ...dashboardContext,
        ...props
      })), {
        collapsed
      });
      const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
      const [DefineResizeHandleTemplate, ReuseResizeHandleTemplate] = createReusableTemplate();
      useRuntimeHook("dashboard:sidebar:toggle", () => {
        open.value = !open.value;
      });
      useRuntimeHook("dashboard:sidebar:collapse", (value) => {
        isCollapsed.value = value;
      });
      watch(open, () => dashboardContext.sidebarOpen.value = open.value, {
        immediate: true
      });
      watch(isCollapsed, () => dashboardContext.sidebarCollapsed.value = isCollapsed.value, {
        immediate: true
      });
      const ui2 = computed(() => dashboardSidebar({
        side: props.side
      }));
      const Menu = computed(() => ({
        slideover: _sfc_main$h,
        modal: _sfc_main$g,
        drawer: _sfc_main$f
      })[props.mode]);
      const menuProps = toRef(() => defu(props.menu, {
        content: {
          onOpenAutoFocus: (e) => e.preventDefault()
        }
      }, props.mode === "modal" ? {
        fullscreen: true,
        transition: false
      } : props.mode === "slideover" ? {
        side: "left"
      } : {}));
      return (_ctx, _cache) => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const _component_UDashboardSidebarToggle = _sfc_main$i;
        const _component_UDashboardResizeHandle = _sfc_main$j;
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(DefineToggleTemplate), null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: _ctx.toggle
              }, () => {
                var _a3;
                return [
                  _ctx.toggle ? (openBlock(), createBlock(_component_UDashboardSidebarToggle, mergeProps({
                    key: 0
                  }, typeof _ctx.toggle === "object" ? _ctx.toggle : {}, {
                    side: _ctx.toggleSide,
                    class: ui2.value.toggle({
                      class: (_a3 = props.ui) == null ? void 0 : _a3.toggle,
                      toggleSide: _ctx.toggleSide
                    })
                  }), null, 16, [
                    "side",
                    "class"
                  ])) : createCommentVNode("", true)
                ];
              })
            ]),
            _: 3
          }),
          createVNode(unref(DefineResizeHandleTemplate), null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "resize-handle", {
                onMouseDown: unref(onMouseDown),
                onTouchStart: unref(onTouchStart)
              }, () => {
                var _a3;
                return [
                  _ctx.resizable ? (openBlock(), createBlock(_component_UDashboardResizeHandle, {
                    key: 0,
                    "aria-controls": id,
                    class: normalizeClass(ui2.value.handle({
                      class: (_a3 = props.ui) == null ? void 0 : _a3.handle
                    })),
                    onMousedown: unref(onMouseDown),
                    onTouchstart: unref(onTouchStart)
                  }, null, 8, [
                    "class",
                    "onMousedown",
                    "onTouchstart"
                  ])) : createCommentVNode("", true)
                ];
              })
            ]),
            _: 3
          }),
          _ctx.side === "right" ? (openBlock(), createBlock(unref(ReuseResizeHandleTemplate), {
            key: 0
          })) : createCommentVNode("", true),
          createBaseVNode("div", {
            id,
            ref_key: "el",
            ref: el,
            "data-collapsed": unref(isCollapsed),
            "data-dragging": unref(isDragging),
            class: normalizeClass(ui2.value.root({
              class: [
                props.class,
                (_a2 = props.ui) == null ? void 0 : _a2.root
              ]
            })),
            style: normalizeStyle({
              "--width": `${unref(size2) || 0}${unref(dashboardContext).unit}`
            })
          }, [
            !!slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(ui2.value.header({
                class: (_b2 = props.ui) == null ? void 0 : _b2.header
              }))
            }, [
              renderSlot(_ctx.$slots, "header", {
                collapsed: unref(isCollapsed),
                collapse: unref(collapse)
              })
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(ui2.value.body({
                class: (_c2 = props.ui) == null ? void 0 : _c2.body
              }))
            }, [
              renderSlot(_ctx.$slots, "default", {
                collapsed: unref(isCollapsed),
                collapse: unref(collapse)
              })
            ], 2),
            !!slots.footer ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(ui2.value.footer({
                class: (_d2 = props.ui) == null ? void 0 : _d2.footer
              }))
            }, [
              renderSlot(_ctx.$slots, "footer", {
                collapsed: unref(isCollapsed),
                collapse: unref(collapse)
              })
            ], 2)) : createCommentVNode("", true)
          ], 14, _hoisted_1$2),
          _ctx.side === "left" ? (openBlock(), createBlock(unref(ReuseResizeHandleTemplate), {
            key: 1
          })) : createCommentVNode("", true),
          createVNode(unref(Menu), mergeProps({
            open: open.value,
            "onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event)
          }, menuProps.value, {
            ui: {
              overlay: ui2.value.overlay({
                class: (_e3 = props.ui) == null ? void 0 : _e3.overlay
              }),
              content: ui2.value.content({
                class: (_f2 = props.ui) == null ? void 0 : _f2.content
              })
            }
          }), {
            content: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => {
                var _a3, _b3, _c3;
                return [
                  !!slots.header || _ctx.mode !== "drawer" ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(ui2.value.header({
                      class: (_a3 = props.ui) == null ? void 0 : _a3.header,
                      menu: true
                    }))
                  }, [
                    _ctx.mode !== "drawer" && _ctx.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), {
                      key: 0
                    })) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "header"),
                    _ctx.mode !== "drawer" && _ctx.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), {
                      key: 1
                    })) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("div", {
                    class: normalizeClass(ui2.value.body({
                      class: (_b3 = props.ui) == null ? void 0 : _b3.body,
                      menu: true
                    }))
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  !!slots.footer ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(ui2.value.footer({
                      class: (_c3 = props.ui) == null ? void 0 : _c3.footer,
                      menu: true
                    }))
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ]),
            _: 3
          }, 16, [
            "open",
            "ui"
          ])
        ], 64);
      };
    }
  });
  const DropdownMenu = {
    Root: _sfc_main$15,
    Trigger: _sfc_main$14,
    Portal: _sfc_main$13,
    Content: _sfc_main$12,
    Arrow: _sfc_main$11,
    Item: _sfc_main$10,
    Group: _sfc_main$$,
    Separator: _sfc_main$_,
    CheckboxItem: _sfc_main$Z,
    ItemIndicator: _sfc_main$Y,
    Label: _sfc_main$X,
    RadioGroup: _sfc_main$W,
    RadioItem: _sfc_main$V,
    Sub: _sfc_main$U,
    SubContent: _sfc_main$T,
    SubTrigger: _sfc_main$S
  };
  const kbdKeysMap = {
    meta: "",
    ctrl: "",
    alt: "",
    win: "\u229E",
    command: "\u2318",
    shift: "\u21E7",
    option: "\u2325",
    enter: "\u21B5",
    delete: "\u2326",
    backspace: "\u232B",
    escape: "\u238B",
    tab: "\u21E5",
    capslock: "\u21EA",
    arrowup: "\u2191",
    arrowright: "\u2192",
    arrowdown: "\u2193",
    arrowleft: "\u2190",
    pageup: "\u21DE",
    pagedown: "\u21DF",
    home: "\u2196",
    end: "\u2198"
  };
  const _useKbd = () => {
    const macOS = computed(() => navigator && navigator.userAgent && navigator.userAgent.match(/Macintosh;/));
    const kbdKeysSpecificMap = reactive({
      meta: " ",
      alt: " ",
      ctrl: " "
    });
    onMounted(() => {
      kbdKeysSpecificMap.meta = macOS.value ? kbdKeysMap.command : kbdKeysMap.win;
      kbdKeysSpecificMap.alt = macOS.value ? kbdKeysMap.option : "alt";
      kbdKeysSpecificMap.ctrl = macOS.value ? "\u2303" : "ctrl";
    });
    function getKbdKey(value) {
      if (!value) {
        return;
      }
      if ([
        "meta",
        "alt",
        "ctrl"
      ].includes(value)) {
        return kbdKeysSpecificMap[value];
      }
      return kbdKeysMap[value] || value.toUpperCase();
    }
    return {
      macOS,
      getKbdKey
    };
  };
  const useKbd = createSharedComposable$1(_useKbd);
  const theme$9 = {
    "base": "inline-flex items-center justify-center px-1 rounded-(--ui-radius) font-medium font-sans",
    "variants": {
      "variant": {
        "solid": "bg-(--ui-bg-inverted) text-(--ui-bg)",
        "outline": "bg-(--ui-bg) text-(--ui-text-highlighted) ring ring-inset ring-(--ui-border-accented)",
        "subtle": "bg-(--ui-bg-elevated) text-(--ui-text) ring ring-inset ring-(--ui-border-accented)"
      },
      "size": {
        "sm": "h-4 min-w-[16px] text-[10px]",
        "md": "h-5 min-w-[20px] text-[11px]",
        "lg": "h-6 min-w-[24px] text-[12px]"
      }
    },
    "defaultVariants": {
      "variant": "outline",
      "size": "md"
    }
  };
  const appConfigKbd = _appConfig;
  const kbd = tv$1({
    extend: tv$1(theme$9),
    ...((_o = appConfigKbd.ui) == null ? void 0 : _o.kbd) || {}
  });
  _sfc_main$d = defineComponent({
    __name: "Kbd",
    props: {
      as: {
        default: "kbd"
      },
      value: {},
      variant: {},
      size: {},
      class: {}
    },
    setup(__props) {
      const props = __props;
      const { getKbdKey } = useKbd();
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(unref(kbd)({
            variant: _ctx.variant,
            size: _ctx.size,
            class: props.class
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(unref(getKbdKey)(_ctx.value)), 1)
            ])
          ]),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const theme$8 = {
    "slots": {
      "content": "min-w-32 bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) divide-y divide-(--ui-border) overflow-y-auto scroll-py-1 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",
      "arrow": "fill-(--ui-border)",
      "group": "p-1 isolate",
      "label": "w-full flex items-center font-semibold text-(--ui-text-highlighted)",
      "separator": "-mx-1 my-1 h-px bg-(--ui-border)",
      "item": "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "itemLeadingIcon": "shrink-0",
      "itemLeadingAvatar": "shrink-0",
      "itemLeadingAvatarSize": "",
      "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
      "itemTrailingIcon": "shrink-0",
      "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
      "itemTrailingKbdsSize": "",
      "itemLabel": "truncate",
      "itemLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)"
    },
    "variants": {
      "color": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "active": {
        "true": {
          "item": "text-(--ui-text-highlighted) before:bg-(--ui-bg-elevated)",
          "itemLeadingIcon": "text-(--ui-text)"
        },
        "false": {
          "item": [
            "text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-[state=open]:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50 data-[state=open]:before:bg-(--ui-bg-elevated)/50",
            "transition-colors before:transition-colors"
          ],
          "itemLeadingIcon": [
            "text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text) group-data-[state=open]:text-(--ui-text)",
            "transition-colors"
          ]
        }
      },
      "loading": {
        "true": {
          "itemLeadingIcon": "animate-spin"
        }
      },
      "size": {
        "xs": {
          "label": "p-1 text-xs gap-1",
          "item": "p-1 text-xs gap-1",
          "itemLeadingIcon": "size-4",
          "itemLeadingAvatarSize": "3xs",
          "itemTrailingIcon": "size-4",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "sm"
        },
        "sm": {
          "label": "p-1.5 text-xs gap-1.5",
          "item": "p-1.5 text-xs gap-1.5",
          "itemLeadingIcon": "size-4",
          "itemLeadingAvatarSize": "3xs",
          "itemTrailingIcon": "size-4",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "sm"
        },
        "md": {
          "label": "p-1.5 text-sm gap-1.5",
          "item": "p-1.5 text-sm gap-1.5",
          "itemLeadingIcon": "size-5",
          "itemLeadingAvatarSize": "2xs",
          "itemTrailingIcon": "size-5",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "md"
        },
        "lg": {
          "label": "p-2 text-sm gap-2",
          "item": "p-2 text-sm gap-2",
          "itemLeadingIcon": "size-5",
          "itemLeadingAvatarSize": "2xs",
          "itemTrailingIcon": "size-5",
          "itemTrailingKbds": "gap-1",
          "itemTrailingKbdsSize": "md"
        },
        "xl": {
          "label": "p-2 text-base gap-2",
          "item": "p-2 text-base gap-2",
          "itemLeadingIcon": "size-6",
          "itemLeadingAvatarSize": "xs",
          "itemTrailingIcon": "size-6",
          "itemTrailingKbds": "gap-1",
          "itemTrailingKbdsSize": "lg"
        }
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "active": false,
        "class": {
          "item": "text-(--ui-primary) data-highlighted:text-(--ui-primary) data-highlighted:before:bg-(--ui-primary)/10 data-[state=open]:before:bg-(--ui-primary)/10",
          "itemLeadingIcon": "text-(--ui-primary)/75 group-data-highlighted:text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
        }
      },
      {
        "color": "secondary",
        "active": false,
        "class": {
          "item": "text-(--ui-secondary) data-highlighted:text-(--ui-secondary) data-highlighted:before:bg-(--ui-secondary)/10 data-[state=open]:before:bg-(--ui-secondary)/10",
          "itemLeadingIcon": "text-(--ui-secondary)/75 group-data-highlighted:text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
        }
      },
      {
        "color": "success",
        "active": false,
        "class": {
          "item": "text-(--ui-success) data-highlighted:text-(--ui-success) data-highlighted:before:bg-(--ui-success)/10 data-[state=open]:before:bg-(--ui-success)/10",
          "itemLeadingIcon": "text-(--ui-success)/75 group-data-highlighted:text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
        }
      },
      {
        "color": "info",
        "active": false,
        "class": {
          "item": "text-(--ui-info) data-highlighted:text-(--ui-info) data-highlighted:before:bg-(--ui-info)/10 data-[state=open]:before:bg-(--ui-info)/10",
          "itemLeadingIcon": "text-(--ui-info)/75 group-data-highlighted:text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
        }
      },
      {
        "color": "warning",
        "active": false,
        "class": {
          "item": "text-(--ui-warning) data-highlighted:text-(--ui-warning) data-highlighted:before:bg-(--ui-warning)/10 data-[state=open]:before:bg-(--ui-warning)/10",
          "itemLeadingIcon": "text-(--ui-warning)/75 group-data-highlighted:text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
        }
      },
      {
        "color": "error",
        "active": false,
        "class": {
          "item": "text-(--ui-error) data-highlighted:text-(--ui-error) data-highlighted:before:bg-(--ui-error)/10 data-[state=open]:before:bg-(--ui-error)/10",
          "itemLeadingIcon": "text-(--ui-error)/75 group-data-highlighted:text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
        }
      },
      {
        "color": "primary",
        "active": true,
        "class": {
          "item": "text-(--ui-primary) before:bg-(--ui-primary)/10",
          "itemLeadingIcon": "text-(--ui-primary)"
        }
      },
      {
        "color": "secondary",
        "active": true,
        "class": {
          "item": "text-(--ui-secondary) before:bg-(--ui-secondary)/10",
          "itemLeadingIcon": "text-(--ui-secondary)"
        }
      },
      {
        "color": "success",
        "active": true,
        "class": {
          "item": "text-(--ui-success) before:bg-(--ui-success)/10",
          "itemLeadingIcon": "text-(--ui-success)"
        }
      },
      {
        "color": "info",
        "active": true,
        "class": {
          "item": "text-(--ui-info) before:bg-(--ui-info)/10",
          "itemLeadingIcon": "text-(--ui-info)"
        }
      },
      {
        "color": "warning",
        "active": true,
        "class": {
          "item": "text-(--ui-warning) before:bg-(--ui-warning)/10",
          "itemLeadingIcon": "text-(--ui-warning)"
        }
      },
      {
        "color": "error",
        "active": true,
        "class": {
          "item": "text-(--ui-error) before:bg-(--ui-error)/10",
          "itemLeadingIcon": "text-(--ui-error)"
        }
      }
    ],
    "defaultVariants": {
      "size": "md"
    }
  };
  tv$1(theme$8)();
  const _sfc_main$c = defineComponent({
    __name: "DropdownMenuContent",
    props: {
      items: {},
      portal: {
        type: Boolean
      },
      sub: {
        type: Boolean
      },
      labelKey: {},
      checkedIcon: {},
      loadingIcon: {},
      externalIcon: {
        type: [
          Boolean,
          String
        ]
      },
      class: {},
      ui: {},
      uiOverride: {},
      loop: {
        type: Boolean
      },
      side: {},
      sideOffset: {},
      align: {},
      alignOffset: {},
      avoidCollisions: {
        type: Boolean
      },
      collisionBoundary: {},
      collisionPadding: {},
      arrowPadding: {},
      sticky: {},
      hideWhenDetached: {
        type: Boolean
      },
      positionStrategy: {},
      updatePositionStrategy: {},
      disableUpdateOnLayoutShift: {
        type: Boolean
      },
      prioritizePosition: {
        type: Boolean
      },
      reference: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const appConfig2 = useAppConfig$1();
      const contentProps = useForwardPropsEmits(reactiveOmit$1(props, "sub", "items", "portal", "labelKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), emits);
      const proxySlots = omit(slots, [
        "default"
      ]);
      const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
      const groups = computed(() => {
        var _a2;
        return ((_a2 = props.items) == null ? void 0 : _a2.length) ? isArrayOfArray(props.items) ? props.items : [
          props.items
        ] : [];
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(DefineItemTemplate), null, {
            default: withCtx(({ item, active, index: index2 }) => [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index: index2
              }, () => {
                var _a2, _b2, _c2;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index: index2
                  }, () => {
                    var _a3, _b3, _c3, _d2;
                    return [
                      item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 0,
                        name: _ctx.loadingIcon || unref(appConfig2).ui.icons.loading,
                        class: normalizeClass(_ctx.ui.itemLeadingIcon({
                          class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.itemLeadingIcon,
                          color: item == null ? void 0 : item.color,
                          loading: true
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 1,
                        name: item.icon,
                        class: normalizeClass(_ctx.ui.itemLeadingIcon({
                          class: (_b3 = _ctx.uiOverride) == null ? void 0 : _b3.itemLeadingIcon,
                          color: item == null ? void 0 : item.color,
                          active
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : item.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                        key: 2,
                        size: ((_c3 = props.uiOverride) == null ? void 0 : _c3.itemLeadingAvatarSize) || _ctx.ui.itemLeadingAvatarSize()
                      }, item.avatar, {
                        class: _ctx.ui.itemLeadingAvatar({
                          class: (_d2 = _ctx.uiOverride) == null ? void 0 : _d2.itemLeadingAvatar,
                          active
                        })
                      }), null, 16, [
                        "size",
                        "class"
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.ui.itemLabel({
                      class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.itemLabel,
                      active
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index: index2
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig2).ui.icons.external,
                      class: normalizeClass(_ctx.ui.itemLabelExternalIcon({
                        class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.itemLabelExternalIcon,
                        color: item == null ? void 0 : item.color,
                        active
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.ui.itemTrailing({
                      class: (_c2 = _ctx.uiOverride) == null ? void 0 : _c2.itemTrailing
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index: index2
                    }, () => {
                      var _a3, _b3, _c3, _d2;
                      return [
                        ((_a3 = item.children) == null ? void 0 : _a3.length) ? (openBlock(), createBlock(_sfc_main$t, {
                          key: 0,
                          name: unref(appConfig2).ui.icons.chevronRight,
                          class: normalizeClass(_ctx.ui.itemTrailingIcon({
                            class: (_b3 = _ctx.uiOverride) == null ? void 0 : _b3.itemTrailingIcon,
                            color: item == null ? void 0 : item.color,
                            active
                          }))
                        }, null, 8, [
                          "name",
                          "class"
                        ])) : ((_c3 = item.kbds) == null ? void 0 : _c3.length) ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          class: normalizeClass(_ctx.ui.itemTrailingKbds({
                            class: (_d2 = _ctx.uiOverride) == null ? void 0 : _d2.itemTrailingKbds
                          }))
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.kbds, (kbd2, kbdIndex) => {
                            var _a4;
                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                              key: kbdIndex,
                              size: ((_a4 = props.uiOverride) == null ? void 0 : _a4.itemTrailingKbdsSize) || _ctx.ui.itemTrailingKbdsSize(),
                              ref_for: true
                            }, typeof kbd2 === "string" ? {
                              value: kbd2
                            } : kbd2), null, 16, [
                              "size"
                            ]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    createVNode(unref(DropdownMenu).ItemIndicator, {
                      "as-child": ""
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(_sfc_main$t, {
                            name: _ctx.checkedIcon || unref(appConfig2).ui.icons.check,
                            class: normalizeClass(_ctx.ui.itemTrailingIcon({
                              class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.itemTrailingIcon,
                              color: item == null ? void 0 : item.color
                            }))
                          }, null, 8, [
                            "name",
                            "class"
                          ])
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ], 2)
                ];
              })
            ]),
            _: 3
          }),
          createVNode(unref(DropdownMenu).Portal, {
            disabled: !_ctx.portal
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
                class: props.class
              }, unref(contentProps)), {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                    var _a2;
                    return openBlock(), createBlock(unref(DropdownMenu).Group, {
                      key: `group-${groupIndex}`,
                      class: normalizeClass(_ctx.ui.group({
                        class: (_a2 = _ctx.uiOverride) == null ? void 0 : _a2.group
                      }))
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(group, (item, index2) => {
                          var _a3, _b2, _c2, _d2;
                          return openBlock(), createElementBlock(Fragment, {
                            key: `group-${groupIndex}-${index2}`
                          }, [
                            item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
                              key: 0,
                              class: normalizeClass(_ctx.ui.label({
                                class: (_a3 = _ctx.uiOverride) == null ? void 0 : _a3.label
                              }))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index: index2
                                }, null, 8, [
                                  "item",
                                  "index"
                                ])
                              ]),
                              _: 2
                            }, 1032, [
                              "class"
                            ])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
                              key: 1,
                              class: normalizeClass(_ctx.ui.separator({
                                class: (_b2 = _ctx.uiOverride) == null ? void 0 : _b2.separator
                              }))
                            }, null, 8, [
                              "class"
                            ])) : ((_c2 = item == null ? void 0 : item.children) == null ? void 0 : _c2.length) ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
                              key: 2,
                              open: item.open,
                              "default-open": item.defaultOpen
                            }, {
                              default: withCtx(() => {
                                var _a4;
                                return [
                                  createVNode(unref(DropdownMenu).SubTrigger, {
                                    as: "button",
                                    type: "button",
                                    disabled: item.disabled,
                                    "text-value": unref(get)(item, props.labelKey),
                                    class: normalizeClass(_ctx.ui.item({
                                      class: (_a4 = _ctx.uiOverride) == null ? void 0 : _a4.item,
                                      color: item == null ? void 0 : item.color
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index: index2
                                      }, null, 8, [
                                        "item",
                                        "index"
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, [
                                    "disabled",
                                    "text-value",
                                    "class"
                                  ]),
                                  createVNode(_sfc_main$c, mergeProps({
                                    sub: "",
                                    class: props.class,
                                    ui: _ctx.ui,
                                    "ui-override": _ctx.uiOverride,
                                    portal: _ctx.portal,
                                    items: item.children,
                                    side: "right",
                                    align: "start",
                                    "align-offset": -4,
                                    "side-offset": 3,
                                    "label-key": _ctx.labelKey,
                                    "checked-icon": _ctx.checkedIcon,
                                    "loading-icon": _ctx.loadingIcon,
                                    "external-icon": _ctx.externalIcon,
                                    ref_for: true
                                  }, item.content), createSlots({
                                    _: 2
                                  }, [
                                    renderList(unref(proxySlots), (_2, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData) => [
                                          renderSlot(_ctx.$slots, name, mergeProps({
                                            ref_for: true
                                          }, slotData))
                                        ])
                                      };
                                    })
                                  ]), 1040, [
                                    "class",
                                    "ui",
                                    "ui-override",
                                    "portal",
                                    "items",
                                    "label-key",
                                    "checked-icon",
                                    "loading-icon",
                                    "external-icon"
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1032, [
                              "open",
                              "default-open"
                            ])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
                              key: 3,
                              "model-value": item.checked,
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              class: normalizeClass(_ctx.ui.item({
                                class: [
                                  (_d2 = _ctx.uiOverride) == null ? void 0 : _d2.item,
                                  item.class
                                ],
                                color: item == null ? void 0 : item.color
                              })),
                              "onUpdate:modelValue": item.onUpdateChecked,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index: index2
                                }, null, 8, [
                                  "item",
                                  "index"
                                ])
                              ]),
                              _: 2
                            }, 1032, [
                              "model-value",
                              "disabled",
                              "text-value",
                              "class",
                              "onUpdate:modelValue",
                              "onSelect"
                            ])) : (openBlock(), createBlock(unref(DropdownMenu).Item, {
                              key: 4,
                              "as-child": "",
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$q, mergeProps({
                                  ref_for: true
                                }, unref(pickLinkProps)(item), {
                                  custom: ""
                                }), {
                                  default: withCtx(({ active, ...slotProps }) => {
                                    var _a4;
                                    return [
                                      createVNode(_sfc_main$r, mergeProps({
                                        ref_for: true
                                      }, slotProps, {
                                        class: _ctx.ui.item({
                                          class: [
                                            (_a4 = _ctx.uiOverride) == null ? void 0 : _a4.item,
                                            item.class
                                          ],
                                          color: item == null ? void 0 : item.color,
                                          active
                                        })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            active,
                                            index: index2
                                          }, null, 8, [
                                            "item",
                                            "active",
                                            "index"
                                          ])
                                        ]),
                                        _: 2
                                      }, 1040, [
                                        "class"
                                      ])
                                    ];
                                  }),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 2
                            }, 1032, [
                              "disabled",
                              "text-value",
                              "onSelect"
                            ]))
                          ], 64);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, [
                      "class"
                    ]);
                  }), 128)),
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, [
                "class"
              ]))
            ]),
            _: 3
          }, 8, [
            "disabled"
          ])
        ], 64);
      };
    }
  });
  const appConfigDropdownMenu = _appConfig;
  const dropdownMenu = tv$1({
    extend: tv$1(theme$8),
    ...((_p = appConfigDropdownMenu.ui) == null ? void 0 : _p.dropdownMenu) || {}
  });
  const _sfc_main$b = defineComponent({
    __name: "DropdownMenu",
    props: {
      size: {},
      items: {},
      checkedIcon: {},
      loadingIcon: {},
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        default: true
      },
      content: {},
      arrow: {
        type: [
          Boolean,
          Object
        ]
      },
      portal: {
        type: Boolean,
        default: true
      },
      labelKey: {
        default: "label"
      },
      disabled: {
        type: Boolean
      },
      class: {},
      ui: {},
      defaultOpen: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "modal"), emits);
      const contentProps = toRef(() => defu(props.content, {
        side: "bottom",
        sideOffset: 8,
        collisionPadding: 8
      }));
      const arrowProps = toRef(() => props.arrow);
      const proxySlots = omit(slots, [
        "default"
      ]);
      const ui2 = computed(() => dropdownMenu({
        size: props.size
      }));
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$15), normalizeProps$1(guardReactiveProps(unref(rootProps))), {
          default: withCtx(({ open }) => {
            var _a2;
            return [
              !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$14), {
                key: 0,
                "as-child": "",
                class: normalizeClass(props.class),
                disabled: _ctx.disabled
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    open
                  })
                ]),
                _: 2
              }, 1032, [
                "class",
                "disabled"
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$c, mergeProps({
                class: ui2.value.content({
                  class: [
                    !slots.default && props.class,
                    (_a2 = props.ui) == null ? void 0 : _a2.content
                  ]
                }),
                ui: ui2.value,
                "ui-override": props.ui
              }, contentProps.value, {
                items: _ctx.items,
                portal: _ctx.portal,
                "label-key": _ctx.labelKey,
                "checked-icon": _ctx.checkedIcon,
                "loading-icon": _ctx.loadingIcon,
                "external-icon": _ctx.externalIcon
              }), createSlots({
                default: withCtx(() => {
                  var _a3;
                  return [
                    !!_ctx.arrow ? (openBlock(), createBlock(unref(_sfc_main$11), mergeProps({
                      key: 0
                    }, arrowProps.value, {
                      class: ui2.value.arrow({
                        class: (_a3 = props.ui) == null ? void 0 : _a3.arrow
                      })
                    }), null, 16, [
                      "class"
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                renderList(unref(proxySlots), (_2, name) => {
                  return {
                    name,
                    fn: withCtx((slotData) => [
                      renderSlot(_ctx.$slots, name, normalizeProps$1(guardReactiveProps(slotData)))
                    ])
                  };
                })
              ]), 1040, [
                "class",
                "ui",
                "ui-override",
                "items",
                "portal",
                "label-key",
                "checked-icon",
                "loading-icon",
                "external-icon"
              ])
            ];
          }),
          _: 3
        }, 16);
      };
    }
  });
  useAppConfig = () => _appConfig;
  const _sfc_main$a = defineComponent({
    __name: "UserMenu",
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(__props) {
      const colorMode = useColorMode$1();
      const appConfig2 = useAppConfig();
      const user = ref({
        name: windpress.current_user.name,
        avatar: {
          src: windpress.current_user.avatar,
          alt: windpress.current_user.name
        }
      });
      const supportMenuItems = computed(() => {
        const items2 = [
          {
            label: wp.i18n.__("Rate us", "windpress"),
            icon: "lucide:star",
            to: "https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post",
            target: "_blank"
          },
          {
            label: wp.i18n.__("Community", "windpress"),
            icon: "fa6-brands:facebook",
            to: "https://wind.press/go/facebook",
            target: "_blank"
          },
          {
            label: wp.i18n.__("Report an issue", "windpress"),
            icon: "lucide:bug",
            to: "https://github.com/wind-press/windpress/issues",
            target: "_blank"
          },
          {
            label: wp.i18n.__("Support", "windpress"),
            icon: "lucide:headset",
            to: `https://rosua.org/support-portal?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: "_blank"
          }
        ];
        if (window.windpress._via_wp_org) {
          items2.push({
            label: wp.i18n.__("Upgrade to Pro", "windpress"),
            icon: "lucide:sparkles",
            to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}#pricing`,
            target: "_blank"
          });
        }
        return items2;
      });
      const items = computed(() => [
        [
          {
            type: "label",
            label: user.value.name,
            avatar: user.value.avatar
          }
        ],
        [
          {
            label: wp.i18n.__("Appearance", "windpress"),
            icon: "i-lucide-sun-moon",
            children: [
              {
                label: wp.i18n.__("Light", "windpress"),
                icon: appConfig2.ui.icons.light,
                type: "checkbox",
                checked: colorMode.value === "light",
                onSelect(e) {
                  e.preventDefault();
                  colorMode.value = "light";
                }
              },
              {
                label: wp.i18n.__("Dark", "windpress"),
                icon: appConfig2.ui.icons.dark,
                type: "checkbox",
                checked: colorMode.value === "dark",
                onUpdateChecked(checked) {
                  if (checked) {
                    colorMode.value = "dark";
                  }
                },
                onSelect(e) {
                  e.preventDefault();
                }
              },
              {
                label: wp.i18n.__("System", "windpress"),
                icon: appConfig2.ui.icons.system,
                type: "checkbox",
                checked: colorMode.value === "system",
                onUpdateChecked(checked) {
                  if (checked) {
                    colorMode.value = "system";
                  }
                },
                onSelect(e) {
                  e.preventDefault();
                }
              }
            ]
          }
        ],
        [
          ...supportMenuItems.value
        ]
      ]);
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$p;
        const _component_UDropdownMenu = _sfc_main$b;
        return openBlock(), createBlock(_component_UDropdownMenu, {
          items: items.value,
          content: {
            align: "center",
            collisionPadding: 12
          },
          ui: {
            content: _ctx.collapsed ? "w-48" : "w-(--reka-dropdown-menu-trigger-width)"
          }
        }, {
          "chip-leading": withCtx(({ item }) => [
            createBaseVNode("span", {
              style: normalizeStyle({
                "--chip": `var(--color-${item.chip}-400)`
              }),
              class: "ms-0.5 size-2 rounded-full bg-(--chip)"
            }, null, 4)
          ]),
          default: withCtx(() => {
            var _a2;
            return [
              createVNode(_component_UButton, mergeProps({
                ...user.value,
                label: _ctx.collapsed ? void 0 : (_a2 = user.value) == null ? void 0 : _a2.name,
                trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
              }, {
                color: "neutral",
                variant: "ghost",
                block: "",
                square: _ctx.collapsed,
                class: "data-[state=open]:bg-(--ui-bg-elevated)",
                ui: {
                  trailingIcon: "text-(--ui-text-dimmed)"
                }
              }), null, 16, [
                "square"
              ])
            ];
          }),
          _: 1
        }, 8, [
          "items",
          "ui"
        ]);
      };
    }
  });
  const theme$7 = {
    "slots": {
      "base": "font-medium inline-flex items-center",
      "label": "truncate",
      "leadingIcon": "shrink-0",
      "leadingAvatar": "shrink-0",
      "leadingAvatarSize": "",
      "trailingIcon": "shrink-0"
    },
    "variants": {
      "buttonGroup": {
        "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
        "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
      },
      "color": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "variant": {
        "solid": "",
        "outline": "",
        "soft": "",
        "subtle": ""
      },
      "size": {
        "xs": {
          "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",
          "leadingIcon": "size-3",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-3"
        },
        "sm": {
          "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",
          "leadingIcon": "size-3",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-3"
        },
        "md": {
          "base": "text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",
          "leadingIcon": "size-4",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-4"
        },
        "lg": {
          "base": "text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
          "leadingIcon": "size-5",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-5"
        },
        "xl": {
          "base": "text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
          "leadingIcon": "size-6",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-6"
        }
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "variant": "solid",
        "class": "bg-(--ui-primary) text-(--ui-bg)"
      },
      {
        "color": "secondary",
        "variant": "solid",
        "class": "bg-(--ui-secondary) text-(--ui-bg)"
      },
      {
        "color": "success",
        "variant": "solid",
        "class": "bg-(--ui-success) text-(--ui-bg)"
      },
      {
        "color": "info",
        "variant": "solid",
        "class": "bg-(--ui-info) text-(--ui-bg)"
      },
      {
        "color": "warning",
        "variant": "solid",
        "class": "bg-(--ui-warning) text-(--ui-bg)"
      },
      {
        "color": "error",
        "variant": "solid",
        "class": "bg-(--ui-error) text-(--ui-bg)"
      },
      {
        "color": "primary",
        "variant": "outline",
        "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/50"
      },
      {
        "color": "secondary",
        "variant": "outline",
        "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/50"
      },
      {
        "color": "success",
        "variant": "outline",
        "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/50"
      },
      {
        "color": "info",
        "variant": "outline",
        "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/50"
      },
      {
        "color": "warning",
        "variant": "outline",
        "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/50"
      },
      {
        "color": "error",
        "variant": "outline",
        "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/50"
      },
      {
        "color": "primary",
        "variant": "soft",
        "class": "bg-(--ui-primary)/10 text-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": "soft",
        "class": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": "soft",
        "class": "bg-(--ui-success)/10 text-(--ui-success)"
      },
      {
        "color": "info",
        "variant": "soft",
        "class": "bg-(--ui-info)/10 text-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": "soft",
        "class": "bg-(--ui-warning)/10 text-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": "soft",
        "class": "bg-(--ui-error)/10 text-(--ui-error)"
      },
      {
        "color": "primary",
        "variant": "subtle",
        "class": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      },
      {
        "color": "secondary",
        "variant": "subtle",
        "class": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      },
      {
        "color": "success",
        "variant": "subtle",
        "class": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      },
      {
        "color": "info",
        "variant": "subtle",
        "class": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      },
      {
        "color": "warning",
        "variant": "subtle",
        "class": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      },
      {
        "color": "error",
        "variant": "subtle",
        "class": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      },
      {
        "color": "neutral",
        "variant": "solid",
        "class": "text-(--ui-bg) bg-(--ui-bg-inverted)"
      },
      {
        "color": "neutral",
        "variant": "outline",
        "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)"
      },
      {
        "color": "neutral",
        "variant": "soft",
        "class": "text-(--ui-text) bg-(--ui-bg-elevated)"
      },
      {
        "color": "neutral",
        "variant": "subtle",
        "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)"
      }
    ],
    "defaultVariants": {
      "color": "primary",
      "variant": "solid",
      "size": "md"
    }
  };
  const appConfigBadge = _appConfig;
  const badge = tv$1({
    extend: tv$1(theme$7),
    ...((_q = appConfigBadge.ui) == null ? void 0 : _q.badge) || {}
  });
  _sfc_main$9 = defineComponent({
    __name: "Badge",
    props: {
      as: {
        default: "span"
      },
      label: {},
      color: {},
      variant: {},
      size: {},
      class: {},
      ui: {},
      icon: {},
      avatar: {},
      leading: {
        type: Boolean
      },
      leadingIcon: {},
      trailing: {
        type: Boolean
      },
      trailingIcon: {}
    },
    setup(__props) {
      const props = __props;
      const { orientation, size: buttonGroupSize } = useButtonGroup(props);
      const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
      const ui2 = computed(() => badge({
        color: props.color,
        variant: props.variant,
        size: buttonGroupSize.value || props.size,
        buttonGroup: orientation.value
      }));
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(ui2.value.base({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.base
            ]
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "leading", {}, () => {
              var _a3, _b2, _c2;
              return [
                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                  key: 0,
                  name: unref(leadingIconName),
                  class: normalizeClass(ui2.value.leadingIcon({
                    class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon
                  }))
                }, null, 8, [
                  "name",
                  "class"
                ])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                  key: 1,
                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui2.value.leadingAvatarSize()
                }, _ctx.avatar, {
                  class: ui2.value.leadingAvatar({
                    class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar
                  })
                }), null, 16, [
                  "size",
                  "class"
                ])) : createCommentVNode("", true)
              ];
            }),
            renderSlot(_ctx.$slots, "default", {}, () => {
              var _a3;
              return [
                _ctx.label ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(ui2.value.label({
                    class: (_a3 = props.ui) == null ? void 0 : _a3.label
                  }))
                }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
              ];
            }),
            renderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a3;
              return [
                unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                  key: 0,
                  name: unref(trailingIconName),
                  class: normalizeClass(ui2.value.trailingIcon({
                    class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon
                  }))
                }, null, 8, [
                  "name",
                  "class"
                ])) : createCommentVNode("", true)
              ];
            })
          ]),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const theme$6 = {
    "slots": {
      "root": "",
      "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
    }
  };
  const appConfigCollapsible = _appConfig;
  const collapsible = tv$1({
    extend: tv$1(theme$6),
    ...((_r = appConfigCollapsible.ui) == null ? void 0 : _r.collapsible) || {}
  });
  const _sfc_main$8 = defineComponent({
    __name: "Collapsible",
    props: {
      as: {},
      class: {},
      ui: {},
      defaultOpen: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      unmountOnHide: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
      const ui2 = collapsible();
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(_sfc_main$1V), mergeProps(unref(rootProps), {
          class: unref(ui2).root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          })
        }), {
          default: withCtx(({ open }) => {
            var _a3;
            return [
              !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$1T), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    open
                  })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$1U), {
                class: normalizeClass(unref(ui2).content({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.content
                }))
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, [
                "class"
              ])
            ];
          }),
          _: 3
        }, 16, [
          "class"
        ]);
      };
    }
  });
  const theme$5 = {
    "slots": {
      "root": "relative flex gap-1.5 [&>div]:min-w-0",
      "list": "isolate min-w-0",
      "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-(--ui-text-highlighted) px-2.5 py-1.5",
      "item": "min-w-0",
      "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
      "linkLeadingIcon": "shrink-0 size-5",
      "linkLeadingAvatar": "shrink-0",
      "linkLeadingAvatarSize": "2xs",
      "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
      "linkTrailingBadge": "shrink-0",
      "linkTrailingBadgeSize": "sm",
      "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
      "linkLabel": "truncate",
      "linkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
      "childList": "",
      "childItem": "",
      "childLink": "group size-full px-3 py-2 rounded-[calc(var(--ui-radius)*1.5)] flex items-start gap-2 text-start",
      "childLinkWrapper": "flex flex-col items-start",
      "childLinkIcon": "size-5 shrink-0",
      "childLinkLabel": "font-semibold text-sm relative inline-flex",
      "childLinkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
      "childLinkDescription": "text-sm text-(--ui-text-muted)",
      "separator": "px-2 h-px bg-(--ui-border)",
      "viewportWrapper": "absolute top-full left-0 flex w-full",
      "viewport": "relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
      "content": "absolute top-0 left-0 w-full",
      "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
      "arrow": "relative top-[50%] size-2.5 rotate-45 border border-(--ui-border) bg-(--ui-bg) z-[1] rounded-[calc(var(--ui-radius)/2)]"
    },
    "variants": {
      "color": {
        "primary": {
          "link": "focus-visible:before:ring-(--ui-primary)",
          "childLink": "focus-visible:outline-(--ui-primary)"
        },
        "secondary": {
          "link": "focus-visible:before:ring-(--ui-secondary)",
          "childLink": "focus-visible:outline-(--ui-secondary)"
        },
        "success": {
          "link": "focus-visible:before:ring-(--ui-success)",
          "childLink": "focus-visible:outline-(--ui-success)"
        },
        "info": {
          "link": "focus-visible:before:ring-(--ui-info)",
          "childLink": "focus-visible:outline-(--ui-info)"
        },
        "warning": {
          "link": "focus-visible:before:ring-(--ui-warning)",
          "childLink": "focus-visible:outline-(--ui-warning)"
        },
        "error": {
          "link": "focus-visible:before:ring-(--ui-error)",
          "childLink": "focus-visible:outline-(--ui-error)"
        },
        "neutral": {
          "link": "focus-visible:before:ring-(--ui-border-inverted)",
          "childLink": "focus-visible:outline-(--ui-border-inverted)"
        }
      },
      "highlightColor": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "variant": {
        "pill": "",
        "link": ""
      },
      "orientation": {
        "horizontal": {
          "root": "items-center justify-between",
          "list": "flex items-center",
          "item": "py-2",
          "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
          "childList": "grid p-2"
        },
        "vertical": {
          "root": "flex-col",
          "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0"
        }
      },
      "contentOrientation": {
        "horizontal": {
          "viewport": "",
          "viewportWrapper": "justify-center",
          "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
        },
        "vertical": {
          "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
          "content": ""
        }
      },
      "active": {
        "true": {
          "childLink": "bg-(--ui-bg-elevated) text-(--ui-text-highlighted)",
          "childLinkIcon": "text-(--ui-text)"
        },
        "false": {
          "link": "text-(--ui-text-muted)",
          "linkLeadingIcon": "text-(--ui-text-dimmed)",
          "childLink": [
            "hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)",
            "transition-colors"
          ],
          "childLinkIcon": [
            "text-(--ui-text-dimmed) group-hover:text-(--ui-text)",
            "transition-colors"
          ]
        }
      },
      "disabled": {
        "true": {
          "link": "cursor-not-allowed opacity-75"
        }
      },
      "highlight": {
        "true": ""
      },
      "level": {
        "true": ""
      },
      "collapsed": {
        "true": ""
      }
    },
    "compoundVariants": [
      {
        "orientation": "horizontal",
        "contentOrientation": "horizontal",
        "class": {
          "childList": "grid-cols-2 gap-2"
        }
      },
      {
        "orientation": "horizontal",
        "contentOrientation": "vertical",
        "class": {
          "childList": "gap-1",
          "content": "w-60"
        }
      },
      {
        "orientation": "horizontal",
        "highlight": true,
        "class": {
          "link": [
            "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
            "after:transition-colors"
          ]
        }
      },
      {
        "orientation": "vertical",
        "highlight": true,
        "level": true,
        "class": {
          "link": [
            "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
            "after:transition-colors"
          ]
        }
      },
      {
        "disabled": false,
        "active": false,
        "variant": "pill",
        "class": {
          "link": [
            "hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50",
            "transition-colors before:transition-colors"
          ],
          "linkLeadingIcon": [
            "group-hover:text-(--ui-text)",
            "transition-colors"
          ]
        }
      },
      {
        "disabled": false,
        "active": false,
        "variant": "pill",
        "orientation": "horizontal",
        "class": {
          "link": "data-[state=open]:text-(--ui-text-highlighted)",
          "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
        }
      },
      {
        "disabled": false,
        "variant": "pill",
        "highlight": true,
        "orientation": "horizontal",
        "class": {
          "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
        }
      },
      {
        "disabled": false,
        "variant": "pill",
        "highlight": false,
        "active": false,
        "orientation": "horizontal",
        "class": {
          "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
        }
      },
      {
        "color": "primary",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-primary)",
          "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
        }
      },
      {
        "color": "secondary",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-secondary)",
          "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
        }
      },
      {
        "color": "success",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-success)",
          "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
        }
      },
      {
        "color": "info",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-info)",
          "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
        }
      },
      {
        "color": "warning",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-warning)",
          "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
        }
      },
      {
        "color": "error",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-error)",
          "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
        }
      },
      {
        "color": "neutral",
        "variant": "pill",
        "active": true,
        "class": {
          "link": "text-(--ui-text-highlighted)",
          "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
        }
      },
      {
        "variant": "pill",
        "active": true,
        "highlight": false,
        "class": {
          "link": "before:bg-(--ui-bg-elevated)"
        }
      },
      {
        "variant": "pill",
        "active": true,
        "highlight": true,
        "class": {
          "link": [
            "hover:before:bg-(--ui-bg-elevated)/50",
            "before:transition-colors"
          ]
        }
      },
      {
        "disabled": false,
        "active": false,
        "variant": "link",
        "class": {
          "link": [
            "hover:text-(--ui-text-highlighted)",
            "transition-colors"
          ],
          "linkLeadingIcon": [
            "group-hover:text-(--ui-text)",
            "transition-colors"
          ]
        }
      },
      {
        "disabled": false,
        "active": false,
        "variant": "link",
        "orientation": "horizontal",
        "class": {
          "link": "data-[state=open]:text-(--ui-text-highlighted)",
          "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
        }
      },
      {
        "color": "primary",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-primary)",
          "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
        }
      },
      {
        "color": "secondary",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-secondary)",
          "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
        }
      },
      {
        "color": "success",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-success)",
          "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
        }
      },
      {
        "color": "info",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-info)",
          "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
        }
      },
      {
        "color": "warning",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-warning)",
          "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
        }
      },
      {
        "color": "error",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-error)",
          "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
        }
      },
      {
        "color": "neutral",
        "variant": "link",
        "active": true,
        "class": {
          "link": "text-(--ui-text-highlighted)",
          "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
        }
      },
      {
        "highlightColor": "primary",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-primary)"
        }
      },
      {
        "highlightColor": "secondary",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-secondary)"
        }
      },
      {
        "highlightColor": "success",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-success)"
        }
      },
      {
        "highlightColor": "info",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-info)"
        }
      },
      {
        "highlightColor": "warning",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-warning)"
        }
      },
      {
        "highlightColor": "error",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-error)"
        }
      },
      {
        "highlightColor": "neutral",
        "highlight": true,
        "level": true,
        "active": true,
        "class": {
          "link": "after:bg-(--ui-bg-inverted)"
        }
      },
      {
        "orientation": "vertical",
        "collapsed": false,
        "class": {
          "childList": "ms-5 border-s border-(--ui-border)",
          "childItem": "ps-1.5 -ms-px"
        }
      },
      {
        "orientation": "vertical",
        "collapsed": true,
        "class": {
          "link": "px-1.5"
        }
      }
    ],
    "defaultVariants": {
      "color": "primary",
      "highlightColor": "primary",
      "variant": "pill"
    }
  };
  const appConfigNavigationMenu = _appConfig;
  const navigationMenu = tv$1({
    extend: tv$1(theme$5),
    ...((_s = appConfigNavigationMenu.ui) == null ? void 0 : _s.navigationMenu) || {}
  });
  _sfc_main$7 = defineComponent({
    __name: "NavigationMenu",
    props: {
      as: {},
      trailingIcon: {},
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        default: true
      },
      items: {},
      color: {},
      variant: {},
      orientation: {
        default: "horizontal"
      },
      collapsed: {
        type: Boolean
      },
      highlight: {
        type: Boolean
      },
      highlightColor: {},
      content: {},
      contentOrientation: {
        default: "horizontal"
      },
      arrow: {
        type: Boolean
      },
      labelKey: {
        default: "label"
      },
      class: {},
      ui: {},
      modelValue: {},
      defaultValue: {},
      delayDuration: {
        default: 0
      },
      disableClickTrigger: {
        type: Boolean
      },
      disableHoverTrigger: {
        type: Boolean
      },
      skipDelayDuration: {},
      disablePointerLeaveClose: {
        type: Boolean
      },
      unmountOnHide: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const rootProps = useForwardPropsEmits(computed(() => ({
        as: props.as,
        modelValue: props.modelValue,
        defaultValue: props.defaultValue,
        delayDuration: props.delayDuration,
        skipDelayDuration: props.skipDelayDuration,
        orientation: props.orientation,
        disableClickTrigger: props.disableClickTrigger,
        disableHoverTrigger: props.disableHoverTrigger,
        disablePointerLeaveClose: props.disablePointerLeaveClose,
        unmountOnHide: props.unmountOnHide
      })), emits);
      const contentProps = toRef(() => props.content);
      const appConfig2 = useAppConfig$1();
      const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
      const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
        props: {
          item: Object,
          index: Number,
          level: Number
        }
      });
      const ui2 = computed(() => navigationMenu({
        orientation: props.orientation,
        contentOrientation: props.contentOrientation,
        collapsed: props.collapsed,
        color: props.color,
        variant: props.variant,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      }));
      const lists = computed(() => {
        var _a2;
        return ((_a2 = props.items) == null ? void 0 : _a2.length) ? isArrayOfArray(props.items) ? props.items : [
          props.items
        ] : [];
      });
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(DefineLinkTemplate), null, {
            default: withCtx(({ item, active, index: index2 }) => [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index: index2
              }, () => {
                var _a3, _b2, _c2, _d2, _e3;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index: index2
                  }, () => {
                    var _a4, _b3, _c3;
                    return [
                      item.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                        key: 0,
                        size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui2.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui2.value.linkLeadingAvatar({
                          class: (_b3 = props.ui) == null ? void 0 : _b3.linkLeadingAvatar,
                          active,
                          disabled: !!item.disabled
                        })
                      }), null, 16, [
                        "size",
                        "class"
                      ])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                        key: 1,
                        name: item.icon,
                        class: normalizeClass(ui2.value.linkLeadingIcon({
                          class: (_c3 = props.ui) == null ? void 0 : _c3.linkLeadingIcon,
                          active,
                          disabled: !!item.disabled
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(ui2.value.linkLabel({
                      class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index: index2
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig2).ui.icons.external,
                      class: normalizeClass(ui2.value.linkLabelExternalIcon({
                        class: (_b2 = props.ui) == null ? void 0 : _b2.linkLabelExternalIcon,
                        active
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(ui2.value.linkTrailing({
                      class: (_e3 = props.ui) == null ? void 0 : _e3.linkTrailing
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index: index2
                    }, () => {
                      var _a4, _b3, _c3, _d3, _e4, _f2;
                      return [
                        item.badge ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                          key: 0,
                          color: "neutral",
                          variant: "outline",
                          size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui2.value.linkTrailingBadgeSize()
                        }, typeof item.badge === "string" || typeof item.badge === "number" ? {
                          label: item.badge
                        } : item.badge, {
                          class: ui2.value.linkTrailingBadge({
                            class: (_b3 = props.ui) == null ? void 0 : _b3.linkTrailingBadge
                          })
                        }), null, 16, [
                          "size",
                          "class"
                        ])) : createCommentVNode("", true),
                        _ctx.orientation === "horizontal" && (((_c3 = item.children) == null ? void 0 : _c3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d3 = item.children) == null ? void 0 : _d3.length) ? (openBlock(), createBlock(_sfc_main$t, {
                          key: 1,
                          name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig2).ui.icons.chevronDown,
                          class: normalizeClass(ui2.value.linkTrailingIcon({
                            class: (_e4 = props.ui) == null ? void 0 : _e4.linkTrailingIcon,
                            active
                          }))
                        }, null, 8, [
                          "name",
                          "class"
                        ])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$t, {
                          key: 2,
                          name: item.trailingIcon,
                          class: normalizeClass(ui2.value.linkTrailingIcon({
                            class: (_f2 = props.ui) == null ? void 0 : _f2.linkTrailingIcon,
                            active
                          }))
                        }, null, 8, [
                          "name",
                          "class"
                        ])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ]),
            _: 3
          }),
          createVNode(unref(DefineItemTemplate), null, {
            default: withCtx(({ item, index: index2, level = 0 }) => {
              var _a3, _b2, _c2;
              return [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_a3 = item.children) == null ? void 0 : _a3.length) && !_ctx.collapsed ? _sfc_main$8 : unref(_sfc_main$P)), {
                  as: "li",
                  value: item.value || String(index2),
                  "default-open": item.defaultOpen,
                  "unmount-on-hide": _ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
                  open: item.open
                }, createSlots({
                  default: withCtx(() => {
                    var _a4, _b3;
                    return [
                      _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(ui2.value.label({
                          class: (_a4 = props.ui) == null ? void 0 : _a4.label
                        }))
                      }, [
                        createVNode(unref(ReuseLinkTemplate), {
                          item,
                          index: index2
                        }, null, 8, [
                          "item",
                          "index"
                        ])
                      ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$q, mergeProps({
                        key: 1
                      }, _ctx.orientation === "vertical" && ((_b3 = item.children) == null ? void 0 : _b3.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), {
                        custom: ""
                      }), {
                        default: withCtx(({ active, ...slotProps }) => {
                          var _a5, _b4, _c3;
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(_sfc_main$J) : unref(_sfc_main$L)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  createVNode(_sfc_main$r, mergeProps(slotProps, {
                                    class: ui2.value.link({
                                      class: [
                                        (_a6 = props.ui) == null ? void 0 : _a6.link,
                                        item.class
                                      ],
                                      active: active || item.active,
                                      disabled: !!item.disabled,
                                      level: _ctx.orientation === "horizontal" || level > 0
                                    })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index: index2
                                      }, null, 8, [
                                        "item",
                                        "active",
                                        "index"
                                      ])
                                    ]),
                                    _: 2
                                  }, 1040, [
                                    "class"
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1064, [
                              "active",
                              "disabled",
                              "onSelect"
                            ])),
                            _ctx.orientation === "horizontal" && (((_b4 = item.children) == null ? void 0 : _b4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(_sfc_main$N), mergeProps({
                              key: 0
                            }, contentProps.value, {
                              class: ui2.value.content({
                                class: (_c3 = props.ui) == null ? void 0 : _c3.content
                              })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active,
                                  index: index2
                                }, () => {
                                  var _a6;
                                  return [
                                    createBaseVNode("ul", {
                                      class: normalizeClass(ui2.value.childList({
                                        class: (_a6 = props.ui) == null ? void 0 : _a6.childList
                                      }))
                                    }, [
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a7;
                                        return openBlock(), createElementBlock("li", {
                                          key: childIndex,
                                          class: normalizeClass(ui2.value.childItem({
                                            class: (_a7 = props.ui) == null ? void 0 : _a7.childItem
                                          }))
                                        }, [
                                          createVNode(_sfc_main$q, mergeProps({
                                            ref_for: true
                                          }, unref(pickLinkProps)(childItem), {
                                            custom: ""
                                          }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(_sfc_main$L), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(_sfc_main$r, mergeProps({
                                                      ref_for: true
                                                    }, childSlotProps, {
                                                      class: ui2.value.childLink({
                                                        class: [
                                                          (_a8 = props.ui) == null ? void 0 : _a8.childLink,
                                                          childItem.class
                                                        ],
                                                        active: childActive
                                                      })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b5, _c4, _d2, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: normalizeClass(ui2.value.childLinkIcon({
                                                              class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon,
                                                              active: childActive
                                                            }))
                                                          }, null, 8, [
                                                            "name",
                                                            "class"
                                                          ])) : createCommentVNode("", true),
                                                          createBaseVNode("div", {
                                                            class: normalizeClass(ui2.value.childLinkWrapper({
                                                              class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper
                                                            }))
                                                          }, [
                                                            createBaseVNode("p", {
                                                              class: normalizeClass(ui2.value.childLinkLabel({
                                                                class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel,
                                                                active: childActive
                                                              }))
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$t, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig2).ui.icons.external,
                                                                class: normalizeClass(ui2.value.childLinkLabelExternalIcon({
                                                                  class: (_d2 = props.ui) == null ? void 0 : _d2.childLinkLabelExternalIcon,
                                                                  active: childActive
                                                                }))
                                                              }, null, 8, [
                                                                "name",
                                                                "class"
                                                              ])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createElementBlock("p", {
                                                              key: 0,
                                                              class: normalizeClass(ui2.value.childLinkDescription({
                                                                class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription,
                                                                active: childActive
                                                              }))
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, [
                                                      "class"
                                                    ])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, [
                                                "active",
                                                "onSelect"
                                              ])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, [
                              "class"
                            ])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1040)) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, [
                  _ctx.orientation === "vertical" && ((_c2 = item.children) == null ? void 0 : _c2.length) && !_ctx.collapsed ? {
                    name: "content",
                    fn: withCtx(() => {
                      var _a4;
                      return [
                        createBaseVNode("ul", {
                          class: normalizeClass(ui2.value.childList({
                            class: (_a4 = props.ui) == null ? void 0 : _a4.childList
                          }))
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                            var _a5;
                            return openBlock(), createBlock(unref(ReuseItemTemplate), {
                              key: childIndex,
                              item: childItem,
                              index: childIndex,
                              level: level + 1,
                              class: normalizeClass(ui2.value.childItem({
                                class: (_a5 = props.ui) == null ? void 0 : _a5.childItem
                              }))
                            }, null, 8, [
                              "item",
                              "index",
                              "level",
                              "class"
                            ]);
                          }), 128))
                        ], 2)
                      ];
                    }),
                    key: "0"
                  } : void 0
                ]), 1032, [
                  "value",
                  "default-open",
                  "unmount-on-hide",
                  "open"
                ]))
              ];
            }),
            _: 3
          }),
          createVNode(unref(_sfc_main$Q), mergeProps(unref(rootProps), {
            "data-collapsed": _ctx.collapsed,
            class: ui2.value.root({
              class: [
                props.class,
                (_a2 = props.ui) == null ? void 0 : _a2.root
              ]
            })
          }), {
            default: withCtx(() => {
              var _a3, _b2, _c2;
              return [
                (openBlock(true), createElementBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                  var _a4, _b3;
                  return openBlock(), createElementBlock(Fragment, {
                    key: `list-${listIndex}`
                  }, [
                    createVNode(unref(_sfc_main$K), {
                      class: normalizeClass(ui2.value.list({
                        class: (_a4 = props.ui) == null ? void 0 : _a4.list
                      }))
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(list, (item, index2) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: `list-${listIndex}-${index2}`,
                            item,
                            index: index2,
                            class: normalizeClass(ui2.value.item({
                              class: (_a5 = props.ui) == null ? void 0 : _a5.item
                            }))
                          }, null, 8, [
                            "item",
                            "index",
                            "class"
                          ]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, [
                      "class"
                    ]),
                    _ctx.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(ui2.value.separator({
                        class: (_b3 = props.ui) == null ? void 0 : _b3.separator
                      }))
                    }, null, 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128)),
                _ctx.orientation === "horizontal" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(ui2.value.viewportWrapper({
                    class: (_a3 = props.ui) == null ? void 0 : _a3.viewportWrapper
                  }))
                }, [
                  _ctx.arrow ? (openBlock(), createBlock(unref(_sfc_main$M), {
                    key: 0,
                    class: normalizeClass(ui2.value.indicator({
                      class: (_b2 = props.ui) == null ? void 0 : _b2.indicator
                    }))
                  }, {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createBaseVNode("div", {
                          class: normalizeClass(ui2.value.arrow({
                            class: (_a4 = props.ui) == null ? void 0 : _a4.arrow
                          }))
                        }, null, 2)
                      ];
                    }),
                    _: 1
                  }, 8, [
                    "class"
                  ])) : createCommentVNode("", true),
                  createVNode(unref(_sfc_main$I), {
                    class: normalizeClass(ui2.value.viewport({
                      class: (_c2 = props.ui) == null ? void 0 : _c2.viewport
                    }))
                  }, null, 8, [
                    "class"
                  ])
                ], 2)) : createCommentVNode("", true)
              ];
            }),
            _: 1
          }, 16, [
            "data-collapsed",
            "class"
          ])
        ], 64);
      };
    }
  });
  getSlotChildrenText = function(children) {
    return children.map((node) => {
      if (!node.children || typeof node.children === "string") return node.children || "";
      else if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
      else if (node.children.default) return getSlotChildrenText(node.children.default());
    }).join("");
  };
  function transformUI(ui2) {
    return Object.entries(ui2).reduce((acc, [key, value]) => {
      acc[key] = typeof value === "function" ? value() : value;
      return acc;
    }, {});
  }
  const theme$4 = {
    "slots": {
      "base": "",
      "trailing": "hidden lg:flex items-center gap-0.5 ms-auto"
    }
  };
  const appConfigDashboardSearchButton = _appConfig;
  const dashboardSearchButton = tv({
    extend: tv(theme$4),
    ...((_t = appConfigDashboardSearchButton.uiPro) == null ? void 0 : _t.dashboardSearchButton) || {}
  });
  const _sfc_main$6 = defineComponent({
    __name: "DashboardSearchButton",
    props: {
      icon: {},
      label: {},
      color: {
        default: "neutral"
      },
      variant: {},
      size: {},
      collapsed: {
        type: Boolean,
        default: false
      },
      kbds: {
        default: () => [
          "meta",
          "k"
        ]
      },
      ui: {},
      class: {}
    },
    setup(__props) {
      const props = __props;
      const slots = useSlots();
      const rootProps = useForwardProps(reactivePick(props, "color", "size"));
      const appConfig2 = useAppConfig$1();
      const { toggleSearch } = useDashboard({
        toggleSearch: () => {
        }
      });
      const { t } = useLocalePro();
      const ui2 = dashboardSearchButton();
      return (_ctx, _cache) => {
        var _a2;
        const _component_UKbd = _sfc_main$d;
        const _component_UButton = _sfc_main$p;
        return openBlock(), createBlock(_component_UButton, mergeProps({
          icon: _ctx.icon || unref(appConfig2).ui.icons.search,
          label: _ctx.label || unref(t)("dashboardSearchButton.label"),
          variant: _ctx.variant || (_ctx.collapsed ? "ghost" : "outline")
        }, {
          ...unref(rootProps),
          ..._ctx.collapsed ? {
            "square": true,
            "label": void 0,
            "aria-label": _ctx.label || unref(t)("dashboardSearchButton.label")
          } : {}
        }, {
          class: unref(ui2).base({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.base
            ]
          }),
          ui: unref(transformUI)(unref(ui2)),
          onClick: unref(toggleSearch)
        }), createSlots({
          _: 2
        }, [
          renderList(slots, (_2, name) => {
            return {
              name,
              fn: withCtx((slotData) => [
                renderSlot(_ctx.$slots, name, normalizeProps$1(guardReactiveProps(slotData)))
              ])
            };
          }),
          !_ctx.collapsed ? {
            name: "trailing",
            fn: withCtx(() => {
              var _a3, _b2;
              return [
                createBaseVNode("div", {
                  class: normalizeClass(unref(ui2).trailing({
                    class: (_a3 = props.ui) == null ? void 0 : _a3.trailing
                  }))
                }, [
                  ((_b2 = _ctx.kbds) == null ? void 0 : _b2.length) ? (openBlock(true), createElementBlock(Fragment, {
                    key: 0
                  }, renderList(_ctx.kbds, (kbd2, index2) => {
                    return openBlock(), createBlock(_component_UKbd, mergeProps({
                      key: index2,
                      variant: "subtle",
                      ref_for: true
                    }, typeof kbd2 === "string" ? {
                      value: kbd2
                    } : kbd2), null, 16);
                  }), 128)) : createCommentVNode("", true)
                ], 2)
              ];
            }),
            key: "0"
          } : void 0
        ]), 1040, [
          "icon",
          "label",
          "variant",
          "class",
          "ui",
          "onClick"
        ]);
      };
    }
  });
  useBusyStore = defineStore("busy", () => {
    const log = useLogStore();
    const tasks = ref([]);
    const isBusy = computed(() => tasks.value.length > 0);
    const hasTask = computed(() => {
      return (task) => tasks.value.some((t) => t.task === task);
    });
    function add(task, message) {
      tasks.value.unshift({
        timestamp: Date.now(),
        task
      });
      if (message !== void 0 && message !== null) {
        if (typeof message === "string") {
          log.add({
            message,
            type: "info",
            group: "busy"
          });
        } else if (typeof message === "object") {
          log.add(Object.assign({
            type: "info",
            group: "busy"
          }, message));
        }
      }
    }
    function remove(task) {
      let found = false;
      tasks.value = tasks.value.filter((t) => {
        if (found) {
          return true;
        }
        if (t.task === task) {
          found = true;
          return false;
        }
        return true;
      });
    }
    function reset() {
      tasks.value = [];
    }
    return {
      tasks,
      isBusy,
      hasTask,
      add,
      remove,
      reset
    };
  });
  var WeakMap$1 = getNative(root, "WeakMap");
  function arrayEach(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  var nativeKeys = overArg(Object.keys, Object);
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$1.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function arrayPush(array, values) {
    var index2 = -1, length = values.length, offset2 = array.length;
    while (++index2 < length) {
      array[offset2 + index2] = values[index2];
    }
    return array;
  }
  function arrayFilter(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function stubArray() {
    return [];
  }
  var objectProto$1 = Object.prototype;
  var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  getAllKeys = function(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  };
  var DataView = getNative(root, "DataView");
  var Promise$1 = getNative(root, "Promise");
  var Set$1 = getNative(root, "Set");
  var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$2 = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
  getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$3;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = cloneArrayBuffer(dataView.buffer);
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$1:
        return cloneSymbol(object);
    }
  }
  var mapTag$1 = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag$1;
  }
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  var setTag$1 = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag$1;
  }
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var CLONE_DEEP_FLAG$1 = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$1;
    if (result !== void 0) {
      return result;
    }
    if (!isObject$3(value)) {
      return value;
    }
    var isArr = isArray$1(value);
    if (isArr) {
      result = initCloneArray(value);
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFunc ? {} : initCloneObject(value);
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = getAllKeys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
  cloneDeep = function(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  };
  useSettingsStore = defineStore("settings", () => {
    const busyStore = useBusyStore();
    const api = useApi();
    const { state: options, getVirtualRef: virtualOptions } = createVirtualRef({});
    async function doPull() {
      busyStore.add("settings.doPull");
      return await api.request("/admin/settings/options/index", {
        method: "GET"
      }).then((response) => {
        options.value = cloneDeep(response.data.options);
        return {
          message: response.data.message,
          success: true
        };
      }).catch((error) => {
      }).finally(() => {
        busyStore.remove("settings.doPull");
      });
    }
    async function doPush() {
      busyStore.add("settings.doPush");
      return api.request("/admin/settings/options/store", {
        method: "POST",
        data: {
          options: options.value
        }
      }).then((response) => {
        return {
          message: response.data.message,
          success: true
        };
      }).catch((error) => {
        throw new Error(error.response ? error.response.data.message : error.message);
      }).finally(() => {
        busyStore.remove("settings.doPush");
      });
    }
    function initPull() {
      if (Object.keys(options.value).length === 0) {
        doPull();
      }
    }
    return {
      options,
      virtualOptions,
      doPull,
      doPush,
      initPull
    };
  });
  const Logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='currentColor'%20d='M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16%20c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432%20c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z'%20/%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e";
  version = "4.1.4";
  const _sfc_main$5 = defineComponent({
    __name: "ProjectsMenu",
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(__props) {
      const settingsStore = useSettingsStore();
      const projects = ref([
        {
          label: "WindPress",
          avatar: {
            src: Logo,
            alt: "WindPress"
          }
        }
      ]);
      const selectedProject = ref(projects.value[0]);
      const items = computed(() => {
        return [
          [
            {
              label: `v${window.windpress._wp_version}`,
              icon: "fa6-brands:wordpress"
            },
            {
              label: Number(settingsStore.virtualOptions("general.tailwindcss.version", 4).value) === 4 ? `v${version}` : `v${version$1}`,
              icon: "devicon:tailwindcss"
            },
            {
              label: `v${window.windpress._version}`,
              avatar: {
                src: Logo,
                alt: "WindPress"
              }
            }
          ]
        ];
      });
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$p;
        const _component_UDropdownMenu = _sfc_main$b;
        return openBlock(), createBlock(_component_UDropdownMenu, {
          items: items.value,
          content: {
            align: "center",
            collisionPadding: 12
          },
          ui: {
            content: _ctx.collapsed ? "w-40" : "w-(--reka-dropdown-menu-trigger-width)"
          }
        }, {
          default: withCtx(() => {
            var _a2;
            return [
              createVNode(_component_UButton, mergeProps({
                ...selectedProject.value,
                label: _ctx.collapsed ? void 0 : (_a2 = selectedProject.value) == null ? void 0 : _a2.label,
                trailingIcon: _ctx.collapsed ? void 0 : "i-lucide-chevrons-up-down"
              }, {
                color: "neutral",
                variant: "ghost",
                block: "",
                square: _ctx.collapsed,
                class: [
                  "data-[state=open]:bg-(--ui-bg-elevated)",
                  [
                    !_ctx.collapsed && "py-2"
                  ]
                ],
                ui: {
                  trailingIcon: "text-(--ui-text-dimmed)"
                }
              }), null, 16, [
                "square",
                "class"
              ])
            ];
          }),
          _: 1
        }, 8, [
          "items",
          "ui"
        ]);
      };
    }
  });
  function useFuse(search, data, options) {
    const createFuse = () => {
      var _a2, _b2;
      return new Fuse((_a2 = toValue$3(data)) != null ? _a2 : [], (_b2 = toValue$3(options)) == null ? void 0 : _b2.fuseOptions);
    };
    const fuse = ref(createFuse());
    watch(() => {
      var _a2;
      return (_a2 = toValue$3(options)) == null ? void 0 : _a2.fuseOptions;
    }, () => {
      fuse.value = createFuse();
    }, {
      deep: true
    });
    watch(() => toValue$3(data), (newData) => {
      fuse.value.setCollection(newData);
    }, {
      deep: true
    });
    const results = computed(() => {
      const resolved = toValue$3(options);
      if ((resolved == null ? void 0 : resolved.matchAllWhenSearchEmpty) && !toValue$3(search)) return toValue$3(data).map((item, index2) => ({
        item,
        refIndex: index2
      }));
      const limit = resolved == null ? void 0 : resolved.resultLimit;
      return fuse.value.search(toValue$3(search), limit ? {
        limit
      } : void 0);
    });
    return {
      fuse,
      results
    };
  }
  function truncateHTMLFromStart(html, maxLength) {
    let truncated = "";
    let totalLength = 0;
    let insideTag = false;
    for (let i2 = html.length - 1; i2 >= 0; i2--) {
      if (html[i2] === ">") {
        insideTag = true;
      } else if (html[i2] === "<") {
        insideTag = false;
        truncated = html[i2] + truncated;
        continue;
      }
      if (!insideTag) {
        totalLength++;
      }
      if (totalLength <= maxLength) {
        truncated = html[i2] + truncated;
      } else {
        truncated = "..." + truncated;
        break;
      }
    }
    return truncated;
  }
  function highlight(item, searchTerm, forceKey, omitKeys) {
    var _a2;
    function generateHighlightedText(value, indices = []) {
      value = value || "";
      let content = "";
      let nextUnhighlightedRegionStartingIndex = 0;
      indices.forEach((region) => {
        if (region.length === 2 && region[0] === region[1]) {
          return;
        }
        const lastIndiceNextIndex = region[1] + 1;
        const isMatched = lastIndiceNextIndex - region[0] >= searchTerm.length;
        content += [
          value.substring(nextUnhighlightedRegionStartingIndex, region[0]),
          isMatched && `<mark>`,
          value.substring(region[0], lastIndiceNextIndex),
          isMatched && "</mark>"
        ].filter(Boolean).join("");
        nextUnhighlightedRegionStartingIndex = lastIndiceNextIndex;
      });
      content += value.substring(nextUnhighlightedRegionStartingIndex);
      const markIndex = content.indexOf("<mark>");
      if (markIndex !== -1) {
        content = truncateHTMLFromStart(content, content.length - markIndex);
      }
      return content;
    }
    if (!((_a2 = item.matches) == null ? void 0 : _a2.length)) {
      return;
    }
    for (const match of item.matches) {
      if (forceKey && match.key !== forceKey) {
        continue;
      }
      if (omitKeys == null ? void 0 : omitKeys.includes(match.key)) {
        continue;
      }
      return generateHighlightedText(match.value, match.indices);
    }
  }
  const theme$3 = {
    "slots": {
      "root": "relative inline-flex items-center justify-center shrink-0",
      "base": "rounded-full ring ring-(--ui-bg) flex items-center justify-center text-(--ui-bg) font-medium whitespace-nowrap"
    },
    "variants": {
      "color": {
        "primary": "bg-(--ui-primary)",
        "secondary": "bg-(--ui-secondary)",
        "success": "bg-(--ui-success)",
        "info": "bg-(--ui-info)",
        "warning": "bg-(--ui-warning)",
        "error": "bg-(--ui-error)",
        "neutral": "bg-(--ui-text-muted)"
      },
      "size": {
        "3xs": "h-[4px] min-w-[4px] text-[4px]",
        "2xs": "h-[5px] min-w-[5px] text-[5px]",
        "xs": "h-[6px] min-w-[6px] text-[6px]",
        "sm": "h-[7px] min-w-[7px] text-[7px]",
        "md": "h-[8px] min-w-[8px] text-[8px]",
        "lg": "h-[9px] min-w-[9px] text-[9px]",
        "xl": "h-[10px] min-w-[10px] text-[10px]",
        "2xl": "h-[11px] min-w-[11px] text-[11px]",
        "3xl": "h-[12px] min-w-[12px] text-[12px]"
      },
      "position": {
        "top-right": "top-0 right-0",
        "bottom-right": "bottom-0 right-0",
        "top-left": "top-0 left-0",
        "bottom-left": "bottom-0 left-0"
      },
      "inset": {
        "false": ""
      },
      "standalone": {
        "false": "absolute"
      }
    },
    "compoundVariants": [
      {
        "position": "top-right",
        "inset": false,
        "class": "-translate-y-1/2 translate-x-1/2 transform"
      },
      {
        "position": "bottom-right",
        "inset": false,
        "class": "translate-y-1/2 translate-x-1/2 transform"
      },
      {
        "position": "top-left",
        "inset": false,
        "class": "-translate-y-1/2 -translate-x-1/2 transform"
      },
      {
        "position": "bottom-left",
        "inset": false,
        "class": "translate-y-1/2 -translate-x-1/2 transform"
      }
    ],
    "defaultVariants": {
      "size": "md",
      "color": "primary",
      "position": "top-right"
    }
  };
  const appConfigChip = _appConfig;
  const chip = tv$1({
    extend: tv$1(theme$3),
    ...((_u = appConfigChip.ui) == null ? void 0 : _u.chip) || {}
  });
  const _sfc_main$4 = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "Chip",
    props: mergeModels({
      as: {},
      text: {},
      color: {},
      size: {},
      position: {},
      inset: {
        type: Boolean,
        default: false
      },
      standalone: {
        type: Boolean,
        default: false
      },
      class: {},
      ui: {}
    }, {
      "show": {
        type: Boolean,
        ...{
          default: true
        }
      },
      "showModifiers": {}
    }),
    emits: [
      "update:show"
    ],
    setup(__props) {
      const props = __props;
      const show = useModel(__props, "show");
      const { size: size2 } = useAvatarGroup(props);
      const ui2 = computed(() => chip({
        color: props.color,
        size: size2.value,
        position: props.position,
        inset: props.inset,
        standalone: props.standalone
      }));
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(ui2.value.root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          }))
        }, {
          default: withCtx(() => {
            var _a3;
            return [
              createVNode(unref(Slot), normalizeProps$1(guardReactiveProps(_ctx.$attrs)), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16),
              show.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(ui2.value.base({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.base
                }))
              }, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createTextVNode(toDisplayString(_ctx.text), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const theme$2 = {
    "slots": {
      "root": "relative inline-flex items-center",
      "base": [
        "w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
        "transition-colors"
      ],
      "leading": "absolute inset-y-0 start-0 flex items-center",
      "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
      "leadingAvatar": "shrink-0",
      "leadingAvatarSize": "",
      "trailing": "absolute inset-y-0 end-0 flex items-center",
      "trailingIcon": "shrink-0 text-(--ui-text-dimmed)"
    },
    "variants": {
      "buttonGroup": {
        "horizontal": {
          "root": "group",
          "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
        },
        "vertical": {
          "root": "group",
          "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
        }
      },
      "size": {
        "xs": {
          "base": "px-2 py-1 text-xs gap-1",
          "leading": "ps-2",
          "trailing": "pe-2",
          "leadingIcon": "size-4",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-4"
        },
        "sm": {
          "base": "px-2.5 py-1.5 text-xs gap-1.5",
          "leading": "ps-2.5",
          "trailing": "pe-2.5",
          "leadingIcon": "size-4",
          "leadingAvatarSize": "3xs",
          "trailingIcon": "size-4"
        },
        "md": {
          "base": "px-2.5 py-1.5 text-sm gap-1.5",
          "leading": "ps-2.5",
          "trailing": "pe-2.5",
          "leadingIcon": "size-5",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-5"
        },
        "lg": {
          "base": "px-3 py-2 text-sm gap-2",
          "leading": "ps-3",
          "trailing": "pe-3",
          "leadingIcon": "size-5",
          "leadingAvatarSize": "2xs",
          "trailingIcon": "size-5"
        },
        "xl": {
          "base": "px-3 py-2 text-base gap-2",
          "leading": "ps-3",
          "trailing": "pe-3",
          "leadingIcon": "size-6",
          "leadingAvatarSize": "xs",
          "trailingIcon": "size-6"
        }
      },
      "variant": {
        "outline": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",
        "soft": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",
        "subtle": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
        "ghost": "text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",
        "none": "text-(--ui-text-highlighted) bg-transparent"
      },
      "color": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "leading": {
        "true": ""
      },
      "trailing": {
        "true": ""
      },
      "loading": {
        "true": ""
      },
      "highlight": {
        "true": ""
      },
      "type": {
        "file": "file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      },
      {
        "color": "secondary",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      },
      {
        "color": "success",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      },
      {
        "color": "info",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      },
      {
        "color": "warning",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      },
      {
        "color": "error",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      },
      {
        "color": "primary",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-primary)"
      },
      {
        "color": "secondary",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-secondary)"
      },
      {
        "color": "success",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-success)"
      },
      {
        "color": "info",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-info)"
      },
      {
        "color": "warning",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-warning)"
      },
      {
        "color": "error",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-error)"
      },
      {
        "color": "neutral",
        "variant": [
          "outline",
          "subtle"
        ],
        "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
      },
      {
        "color": "neutral",
        "highlight": true,
        "class": "ring ring-inset ring-(--ui-border-inverted)"
      },
      {
        "leading": true,
        "size": "xs",
        "class": "ps-7"
      },
      {
        "leading": true,
        "size": "sm",
        "class": "ps-8"
      },
      {
        "leading": true,
        "size": "md",
        "class": "ps-9"
      },
      {
        "leading": true,
        "size": "lg",
        "class": "ps-10"
      },
      {
        "leading": true,
        "size": "xl",
        "class": "ps-11"
      },
      {
        "trailing": true,
        "size": "xs",
        "class": "pe-7"
      },
      {
        "trailing": true,
        "size": "sm",
        "class": "pe-8"
      },
      {
        "trailing": true,
        "size": "md",
        "class": "pe-9"
      },
      {
        "trailing": true,
        "size": "lg",
        "class": "pe-10"
      },
      {
        "trailing": true,
        "size": "xl",
        "class": "pe-11"
      },
      {
        "loading": true,
        "leading": true,
        "class": {
          "leadingIcon": "animate-spin"
        }
      },
      {
        "loading": true,
        "leading": false,
        "trailing": true,
        "class": {
          "trailingIcon": "animate-spin"
        }
      }
    ],
    "defaultVariants": {
      "size": "md",
      "color": "primary",
      "variant": "outline"
    }
  };
  const _hoisted_1$1 = [
    "id",
    "type",
    "value",
    "name",
    "placeholder",
    "disabled",
    "required",
    "autocomplete"
  ];
  const appConfigInput = _appConfig;
  const input = tv$1({
    extend: tv$1(theme$2),
    ...((_v = appConfigInput.ui) == null ? void 0 : _v.input) || {}
  });
  _sfc_main$3 = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "Input",
    props: mergeModels({
      as: {},
      id: {},
      name: {},
      type: {
        default: "text"
      },
      placeholder: {},
      color: {},
      variant: {},
      size: {},
      required: {
        type: Boolean
      },
      autocomplete: {
        default: "off"
      },
      autofocus: {
        type: Boolean
      },
      autofocusDelay: {
        default: 0
      },
      disabled: {
        type: Boolean
      },
      highlight: {
        type: Boolean
      },
      class: {},
      ui: {},
      icon: {},
      avatar: {},
      leading: {
        type: Boolean
      },
      leadingIcon: {},
      trailing: {
        type: Boolean
      },
      trailingIcon: {},
      loading: {
        type: Boolean
      },
      loadingIcon: {}
    }, {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: mergeModels([
      "update:modelValue",
      "blur",
      "change"
    ], [
      "update:modelValue"
    ]),
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const [modelValue, modelModifiers] = useModel(__props, "modelValue");
      const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight: highlight2, disabled, emitFormFocus, ariaAttrs } = useFormField(props, {
        deferInputValidation: true
      });
      const { orientation, size: buttonGroupSize } = useButtonGroup(props);
      const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
      const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
      const ui2 = computed(() => input({
        type: props.type,
        color: color.value,
        variant: props.variant,
        size: inputSize == null ? void 0 : inputSize.value,
        loading: props.loading,
        highlight: highlight2.value,
        leading: isLeading.value || !!props.avatar || !!slots.leading,
        trailing: isTrailing.value || !!slots.trailing,
        buttonGroup: orientation.value
      }));
      const inputRef = ref(null);
      function autoFocus() {
        var _a2;
        if (props.autofocus) {
          (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
        }
      }
      function updateInput(value) {
        if (modelModifiers.trim) {
          value = (value == null ? void 0 : value.trim()) ?? null;
        }
        if (modelModifiers.number || props.type === "number") {
          value = looseToNumber(value);
        }
        if (modelModifiers.nullify) {
          value || (value = null);
        }
        modelValue.value = value;
        emitFormInput();
      }
      function onInput(event) {
        if (!modelModifiers.lazy) {
          updateInput(event.target.value);
        }
      }
      function onChange(event) {
        const value = event.target.value;
        if (modelModifiers.lazy) {
          updateInput(value);
        }
        if (modelModifiers.trim) {
          event.target.value = value.trim();
        }
        emitFormChange();
        emits("change", event);
      }
      function onBlur(event) {
        emitFormBlur();
        emits("blur", event);
      }
      __expose({
        inputRef
      });
      onMounted(() => {
        setTimeout(() => {
          autoFocus();
        }, props.autofocusDelay);
      });
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(ui2.value.root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          }))
        }, {
          default: withCtx(() => {
            var _a3, _b2, _c2;
            return [
              createBaseVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: _ctx.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: _ctx.placeholder,
                class: ui2.value.base({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.base
                }),
                disabled: unref(disabled),
                required: _ctx.required,
                autocomplete: _ctx.autocomplete
              }, {
                ..._ctx.$attrs,
                ...unref(ariaAttrs)
              }, {
                onInput,
                onBlur,
                onChange,
                onFocus: _cache[0] || (_cache[0] = (...args) => unref(emitFormFocus) && unref(emitFormFocus)(...args))
              }), null, 16, _hoisted_1$1),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(ui2.value.leading({
                  class: (_b2 = props.ui) == null ? void 0 : _b2.leading
                }))
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a4, _b3, _c3;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: unref(leadingIconName),
                      class: normalizeClass(ui2.value.leadingIcon({
                        class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                      key: 1,
                      size: ((_b3 = props.ui) == null ? void 0 : _b3.leadingAvatarSize) || ui2.value.leadingAvatarSize()
                    }, _ctx.avatar, {
                      class: ui2.value.leadingAvatar({
                        class: (_c3 = props.ui) == null ? void 0 : _c3.leadingAvatar
                      })
                    }), null, 16, [
                      "size",
                      "class"
                    ])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(ui2.value.trailing({
                  class: (_c2 = props.ui) == null ? void 0 : _c2.trailing
                }))
              }, [
                renderSlot(_ctx.$slots, "trailing", {}, () => {
                  var _a4;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$t, {
                      key: 0,
                      name: unref(trailingIconName),
                      class: normalizeClass(ui2.value.trailingIcon({
                        class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  const theme$1 = {
    "slots": {
      "root": "flex flex-col min-h-0 min-w-0 divide-y divide-(--ui-border)",
      "input": "[&>input]:h-12",
      "close": "",
      "content": "relative overflow-hidden flex flex-col",
      "viewport": "relative divide-y divide-(--ui-border) scroll-py-1 overflow-y-auto flex-1 focus:outline-none",
      "group": "p-1 isolate",
      "empty": "py-6 text-center text-sm text-(--ui-text-muted)",
      "label": "px-2 py-1.5 text-xs font-semibold text-(--ui-text-highlighted)",
      "item": "group relative w-full flex items-center gap-2 px-2 py-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-[calc(var(--ui-radius)*1.5)] data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "itemLeadingIcon": "shrink-0 size-5",
      "itemLeadingAvatar": "shrink-0",
      "itemLeadingAvatarSize": "2xs",
      "itemLeadingChip": "shrink-0 size-5",
      "itemLeadingChipSize": "md",
      "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
      "itemTrailingIcon": "shrink-0 size-5",
      "itemTrailingHighlightedIcon": "shrink-0 size-5 text-(--ui-text-dimmed) hidden group-data-highlighted:inline-flex",
      "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5",
      "itemTrailingKbdsSize": "md",
      "itemLabel": "truncate space-x-1 rtl:space-x-reverse text-(--ui-text-dimmed)",
      "itemLabelBase": "text-(--ui-text-highlighted) [&>mark]:text-(--ui-bg) [&>mark]:bg-(--ui-primary)",
      "itemLabelPrefix": "text-(--ui-text)",
      "itemLabelSuffix": "text-(--ui-text-dimmed) [&>mark]:text-(--ui-bg) [&>mark]:bg-(--ui-primary)"
    },
    "variants": {
      "active": {
        "true": {
          "item": "text-(--ui-text-highlighted) before:bg-(--ui-bg-elevated)",
          "itemLeadingIcon": "text-(--ui-text)"
        },
        "false": {
          "item": [
            "text-(--ui-text) data-highlighted:text-(--ui-text-highlighted) data-highlighted:before:bg-(--ui-bg-elevated)/50",
            "transition-colors before:transition-colors"
          ],
          "itemLeadingIcon": [
            "text-(--ui-text-dimmed) group-data-highlighted:text-(--ui-text)",
            "transition-colors"
          ]
        }
      },
      "loading": {
        "true": {
          "itemLeadingIcon": "animate-spin"
        }
      }
    }
  };
  const _hoisted_1 = [
    "innerHTML"
  ];
  const _hoisted_2 = [
    "innerHTML"
  ];
  const appConfigCommandPalette = _appConfig;
  const commandPalette = tv$1({
    extend: tv$1(theme$1),
    ...((_w = appConfigCommandPalette.ui) == null ? void 0 : _w.commandPalette) || {}
  });
  const _sfc_main$2 = defineComponent({
    __name: "CommandPalette",
    props: mergeModels({
      as: {},
      icon: {},
      selectedIcon: {},
      placeholder: {},
      autofocus: {
        type: Boolean,
        default: true
      },
      close: {
        type: [
          Boolean,
          Object
        ]
      },
      closeIcon: {},
      groups: {},
      fuse: {},
      labelKey: {
        default: "label"
      },
      class: {},
      ui: {},
      multiple: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      modelValue: {
        default: ""
      },
      defaultValue: {},
      highlightOnHover: {
        type: Boolean
      },
      loading: {
        type: Boolean
      },
      loadingIcon: {}
    }, {
      "searchTerm": {
        default: ""
      },
      "searchTermModifiers": {}
    }),
    emits: mergeModels([
      "update:modelValue",
      "highlight",
      "entryFocus",
      "leave",
      "update:open"
    ], [
      "update:searchTerm"
    ]),
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const searchTerm = useModel(__props, "searchTerm");
      const { t } = useLocale();
      const appConfig2 = useAppConfig$1();
      const rootProps = useForwardPropsEmits(reactivePick(props, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover"), emits);
      const inputProps = useForwardProps(reactivePick(props, "loading", "loadingIcon"));
      const ui2 = commandPalette();
      const fuse = computed(() => defu({}, props.fuse, {
        fuseOptions: {
          ignoreLocation: true,
          threshold: 0.1,
          keys: [
            props.labelKey,
            "suffix"
          ]
        },
        resultLimit: 12,
        matchAllWhenSearchEmpty: true
      }));
      const items = computed(() => {
        var _a2;
        return ((_a2 = props.groups) == null ? void 0 : _a2.filter((group) => {
          if (!group.id) {
            console.warn(`[@nuxt/ui] CommandPalette group is missing an \`id\` property`);
            return false;
          }
          if (group.ignoreFilter) {
            return false;
          }
          return true;
        }).flatMap((group) => {
          var _a3;
          return ((_a3 = group.items) == null ? void 0 : _a3.map((item) => ({
            ...item,
            group: group.id
          }))) || [];
        })) || [];
      });
      const { results: fuseResults } = useFuse(searchTerm, items, fuse);
      function getGroupWithItems(group, items2) {
        if ((group == null ? void 0 : group.postFilter) && typeof group.postFilter === "function") {
          items2 = group.postFilter(searchTerm.value, items2);
        }
        return {
          ...group,
          items: items2.slice(0, fuse.value.resultLimit).map((item) => {
            return {
              ...item,
              labelHtml: highlight(item, searchTerm.value, props.labelKey),
              suffixHtml: highlight(item, searchTerm.value, void 0, [
                props.labelKey
              ])
            };
          })
        };
      }
      const groups = computed(() => {
        var _a2, _b2, _c2;
        const groupsById = fuseResults.value.reduce((acc, result) => {
          var _a3, _b3;
          const { item, matches } = result;
          if (!item.group) {
            return acc;
          }
          acc[_a3 = item.group] || (acc[_a3] = []);
          (_b3 = acc[item.group]) == null ? void 0 : _b3.push({
            ...item,
            matches
          });
          return acc;
        }, {});
        const fuseGroups = Object.entries(groupsById).map(([id, items2]) => {
          var _a3;
          const group = (_a3 = props.groups) == null ? void 0 : _a3.find((group2) => group2.id === id);
          if (!group) {
            return;
          }
          return getGroupWithItems(group, items2);
        }).filter((group) => !!group);
        const nonFuseGroups = ((_c2 = (_b2 = (_a2 = props.groups) == null ? void 0 : _a2.map((group, index2) => ({
          ...group,
          index: index2
        }))) == null ? void 0 : _b2.filter((group) => {
          var _a3;
          return group.ignoreFilter && ((_a3 = group.items) == null ? void 0 : _a3.length);
        })) == null ? void 0 : _c2.map((group) => ({
          ...getGroupWithItems(group, group.items || []),
          index: group.index
        }))) || [];
        return nonFuseGroups.reduce((acc, group) => {
          acc.splice(group.index, 0, group);
          return acc;
        }, [
          ...fuseGroups
        ]);
      });
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(_sfc_main$1A), mergeProps(unref(rootProps), {
          class: unref(ui2).root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          })
        }), {
          default: withCtx(() => {
            var _a3;
            return [
              createVNode(unref(_sfc_main$1z), {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchTerm.value = $event),
                "as-child": ""
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(_sfc_main$3, mergeProps({
                      placeholder: _ctx.placeholder || unref(t)("commandPalette.placeholder"),
                      variant: "none",
                      autofocus: _ctx.autofocus,
                      size: "lg"
                    }, unref(inputProps), {
                      icon: _ctx.icon || unref(appConfig2).ui.icons.search,
                      class: unref(ui2).input({
                        class: (_a4 = props.ui) == null ? void 0 : _a4.input
                      })
                    }), createSlots({
                      _: 2
                    }, [
                      _ctx.close || !!slots.close ? {
                        name: "trailing",
                        fn: withCtx(() => [
                          renderSlot(_ctx.$slots, "close", {
                            ui: unref(ui2)
                          }, () => {
                            var _a5;
                            return [
                              _ctx.close ? (openBlock(), createBlock(_sfc_main$p, mergeProps({
                                key: 0,
                                icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                                size: "md",
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("commandPalette.close")
                              }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                class: unref(ui2).close({
                                  class: (_a5 = props.ui) == null ? void 0 : _a5.close
                                }),
                                onClick: _cache[0] || (_cache[0] = ($event) => emits("update:open", false))
                              }), null, 16, [
                                "icon",
                                "aria-label",
                                "class"
                              ])) : createCommentVNode("", true)
                            ];
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, [
                      "placeholder",
                      "autofocus",
                      "icon",
                      "class"
                    ])
                  ];
                }),
                _: 3
              }, 8, [
                "modelValue"
              ]),
              createVNode(unref(_sfc_main$1v), {
                class: normalizeClass(unref(ui2).content({
                  class: (_a3 = props.ui) == null ? void 0 : _a3.content
                }))
              }, {
                default: withCtx(() => {
                  var _a4, _b2, _c2;
                  return [
                    ((_a4 = groups.value) == null ? void 0 : _a4.length) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(unref(ui2).viewport({
                        class: (_b2 = props.ui) == null ? void 0 : _b2.viewport
                      }))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
                        var _a5;
                        return openBlock(), createBlock(unref(_sfc_main$1x), {
                          key: `group-${group.id}`,
                          class: normalizeClass(unref(ui2).group({
                            class: (_a5 = props.ui) == null ? void 0 : _a5.group
                          }))
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              unref(get)(group, props.labelKey) ? (openBlock(), createBlock(unref(_sfc_main$R), {
                                key: 0,
                                class: normalizeClass(unref(ui2).label({
                                  class: (_a6 = props.ui) == null ? void 0 : _a6.label
                                }))
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(get)(group, props.labelKey)), 1)
                                ]),
                                _: 2
                              }, 1032, [
                                "class"
                              ])) : createCommentVNode("", true),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (item, index2) => {
                                return openBlock(), createBlock(unref(_sfc_main$1u), {
                                  key: `group-${group.id}-${index2}`,
                                  value: unref(omit)(item, [
                                    "matches",
                                    "group",
                                    "onSelect",
                                    "labelHtml",
                                    "suffixHtml"
                                  ]),
                                  disabled: item.disabled,
                                  "as-child": "",
                                  onSelect: item.onSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$q, mergeProps({
                                      ref_for: true
                                    }, unref(pickLinkProps)(item), {
                                      custom: ""
                                    }), {
                                      default: withCtx(({ active, ...slotProps }) => {
                                        var _a7;
                                        return [
                                          createVNode(_sfc_main$r, mergeProps({
                                            ref_for: true
                                          }, slotProps, {
                                            class: unref(ui2).item({
                                              class: (_a7 = props.ui) == null ? void 0 : _a7.item,
                                              active: active || item.active
                                            })
                                          }), {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, item.slot || group.slot || "item", {
                                                item,
                                                index: index2
                                              }, () => {
                                                var _a8, _b3;
                                                return [
                                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : group.slot ? `${group.slot}-leading` : `item-leading`, {
                                                    item,
                                                    index: index2
                                                  }, () => {
                                                    var _a9, _b4, _c3, _d2, _e3, _f2;
                                                    return [
                                                      item.loading ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 0,
                                                        name: _ctx.loadingIcon || unref(appConfig2).ui.icons.loading,
                                                        class: normalizeClass(unref(ui2).itemLeadingIcon({
                                                          class: (_a9 = props.ui) == null ? void 0 : _a9.itemLeadingIcon,
                                                          loading: true
                                                        }))
                                                      }, null, 8, [
                                                        "name",
                                                        "class"
                                                      ])) : item.icon ? (openBlock(), createBlock(_sfc_main$t, {
                                                        key: 1,
                                                        name: item.icon,
                                                        class: normalizeClass(unref(ui2).itemLeadingIcon({
                                                          class: (_b4 = props.ui) == null ? void 0 : _b4.itemLeadingIcon,
                                                          active: active || item.active
                                                        }))
                                                      }, null, 8, [
                                                        "name",
                                                        "class"
                                                      ])) : item.avatar ? (openBlock(), createBlock(_sfc_main$s, mergeProps({
                                                        key: 2,
                                                        size: ((_c3 = props.ui) == null ? void 0 : _c3.itemLeadingAvatarSize) || unref(ui2).itemLeadingAvatarSize(),
                                                        ref_for: true
                                                      }, item.avatar, {
                                                        class: unref(ui2).itemLeadingAvatar({
                                                          class: (_d2 = props.ui) == null ? void 0 : _d2.itemLeadingAvatar,
                                                          active: active || item.active
                                                        })
                                                      }), null, 16, [
                                                        "size",
                                                        "class"
                                                      ])) : item.chip ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
                                                        key: 3,
                                                        size: ((_e3 = props.ui) == null ? void 0 : _e3.itemLeadingChipSize) || unref(ui2).itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: "",
                                                        ref_for: true
                                                      }, item.chip, {
                                                        class: unref(ui2).itemLeadingChip({
                                                          class: (_f2 = props.ui) == null ? void 0 : _f2.itemLeadingChip,
                                                          active: active || item.active
                                                        })
                                                      }), null, 16, [
                                                        "size",
                                                        "class"
                                                      ])) : createCommentVNode("", true)
                                                    ];
                                                  }),
                                                  item.labelHtml || unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`] ? (openBlock(), createElementBlock("span", {
                                                    key: 0,
                                                    class: normalizeClass(unref(ui2).itemLabel({
                                                      class: (_a8 = props.ui) == null ? void 0 : _a8.itemLabel,
                                                      active: active || item.active
                                                    }))
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : group.slot ? `${group.slot}-label` : `item-label`, {
                                                      item,
                                                      index: index2
                                                    }, () => {
                                                      var _a9, _b4, _c3;
                                                      return [
                                                        item.prefix ? (openBlock(), createElementBlock("span", {
                                                          key: 0,
                                                          class: normalizeClass(unref(ui2).itemLabelPrefix({
                                                            class: (_a9 = props.ui) == null ? void 0 : _a9.itemLabelPrefix
                                                          }))
                                                        }, toDisplayString(item.prefix), 3)) : createCommentVNode("", true),
                                                        createBaseVNode("span", {
                                                          class: normalizeClass(unref(ui2).itemLabelBase({
                                                            class: (_b4 = props.ui) == null ? void 0 : _b4.itemLabelBase,
                                                            active: active || item.active
                                                          })),
                                                          innerHTML: item.labelHtml || unref(get)(item, props.labelKey)
                                                        }, null, 10, _hoisted_1),
                                                        createBaseVNode("span", {
                                                          class: normalizeClass(unref(ui2).itemLabelSuffix({
                                                            class: (_c3 = props.ui) == null ? void 0 : _c3.itemLabelSuffix,
                                                            active: active || item.active
                                                          })),
                                                          innerHTML: item.suffixHtml || item.suffix
                                                        }, null, 10, _hoisted_2)
                                                      ];
                                                    })
                                                  ], 2)) : createCommentVNode("", true),
                                                  createBaseVNode("span", {
                                                    class: normalizeClass(unref(ui2).itemTrailing({
                                                      class: (_b3 = props.ui) == null ? void 0 : _b3.itemTrailing
                                                    }))
                                                  }, [
                                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : group.slot ? `${group.slot}-trailing` : `item-trailing`, {
                                                      item,
                                                      index: index2
                                                    }, () => {
                                                      var _a9, _b4, _c3;
                                                      return [
                                                        ((_a9 = item.kbds) == null ? void 0 : _a9.length) ? (openBlock(), createElementBlock("span", {
                                                          key: 0,
                                                          class: normalizeClass(unref(ui2).itemTrailingKbds({
                                                            class: (_b4 = props.ui) == null ? void 0 : _b4.itemTrailingKbds
                                                          }))
                                                        }, [
                                                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.kbds, (kbd2, kbdIndex) => {
                                                            var _a10;
                                                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                              key: kbdIndex,
                                                              size: ((_a10 = props.ui) == null ? void 0 : _a10.itemTrailingKbdsSize) || unref(ui2).itemTrailingKbdsSize(),
                                                              ref_for: true
                                                            }, typeof kbd2 === "string" ? {
                                                              value: kbd2
                                                            } : kbd2), null, 16, [
                                                              "size"
                                                            ]);
                                                          }), 128))
                                                        ], 2)) : group.highlightedIcon ? (openBlock(), createBlock(_sfc_main$t, {
                                                          key: 1,
                                                          name: group.highlightedIcon,
                                                          class: normalizeClass(unref(ui2).itemTrailingHighlightedIcon({
                                                            class: (_c3 = props.ui) == null ? void 0 : _c3.itemTrailingHighlightedIcon
                                                          }))
                                                        }, null, 8, [
                                                          "name",
                                                          "class"
                                                        ])) : createCommentVNode("", true)
                                                      ];
                                                    }),
                                                    createVNode(unref(_sfc_main$1t), {
                                                      "as-child": ""
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a9;
                                                        return [
                                                          createVNode(_sfc_main$t, {
                                                            name: _ctx.selectedIcon || unref(appConfig2).ui.icons.check,
                                                            class: normalizeClass(unref(ui2).itemTrailingIcon({
                                                              class: (_a9 = props.ui) == null ? void 0 : _a9.itemTrailingIcon
                                                            }))
                                                          }, null, 8, [
                                                            "name",
                                                            "class"
                                                          ])
                                                        ];
                                                      }),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ];
                                              })
                                            ]),
                                            _: 2
                                          }, 1040, [
                                            "class"
                                          ])
                                        ];
                                      }),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 2
                                }, 1032, [
                                  "value",
                                  "disabled",
                                  "onSelect"
                                ]);
                              }), 128))
                            ];
                          }),
                          _: 2
                        }, 1032, [
                          "class"
                        ]);
                      }), 128))
                    ], 2)) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(unref(ui2).empty({
                        class: (_c2 = props.ui) == null ? void 0 : _c2.empty
                      }))
                    }, [
                      renderSlot(_ctx.$slots, "empty", {
                        searchTerm: searchTerm.value
                      }, () => [
                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("commandPalette.noMatch", {
                          searchTerm: searchTerm.value
                        }) : unref(t)("commandPalette.noData")), 1)
                      ])
                    ], 2))
                  ];
                }),
                _: 3
              }, 8, [
                "class"
              ])
            ];
          }),
          _: 3
        }, 16, [
          "class"
        ]);
      };
    }
  });
  const theme = {
    "slots": {
      "modal": "sm:max-w-3xl sm:h-[28rem]"
    }
  };
  const appConfigDashboardSearch = _appConfig;
  const dashboardSearch = tv({
    extend: tv(theme),
    ...((_x = appConfigDashboardSearch.uiPro) == null ? void 0 : _x.dashboardSearch) || {}
  });
  const _sfc_main$1 = defineComponent({
    __name: "DashboardSearch",
    props: mergeModels({
      icon: {},
      placeholder: {},
      loading: {
        type: Boolean
      },
      loadingIcon: {},
      shortcut: {
        default: "meta_k"
      },
      groups: {},
      fuse: {},
      colorMode: {
        type: Boolean,
        default: true
      },
      class: {},
      ui: {}
    }, {
      "open": {
        type: Boolean,
        ...{
          default: false
        }
      },
      "openModifiers": {},
      "searchTerm": {
        default: ""
      },
      "searchTermModifiers": {}
    }),
    emits: [
      "update:open",
      "update:searchTerm"
    ],
    setup(__props, { expose: __expose }) {
      const props = __props;
      const slots = useSlots();
      const open = useModel(__props, "open");
      const searchTerm = useModel(__props, "searchTerm");
      useRuntimeHook("dashboard:search:toggle", () => {
        open.value = !open.value;
      });
      const appConfig2 = useAppConfig$1();
      const colorMode = useColorMode();
      const { t } = useLocalePro();
      const fuse = computed(() => defu({}, props.fuse, {
        fuseOptions: {}
      }));
      const ui2 = dashboardSearch();
      const groups = computed(() => {
        const groups2 = [];
        groups2.push(...props.groups || []);
        if (props.colorMode && !(colorMode == null ? void 0 : colorMode.forced)) {
          groups2.push({
            id: "theme",
            label: t("dashboardSearch.theme"),
            items: [
              {
                label: t("colorMode.system"),
                icon: appConfig2.ui.icons.system,
                active: colorMode.preference === "system",
                onSelect: () => {
                  colorMode.preference = "system";
                }
              },
              {
                label: t("colorMode.light"),
                icon: appConfig2.ui.icons.light,
                active: colorMode.preference === "light",
                onSelect: () => {
                  colorMode.preference = "light";
                }
              },
              {
                label: t("colorMode.dark"),
                icon: appConfig2.ui.icons.dark,
                active: colorMode.preference === "dark",
                onSelect: () => {
                  colorMode.preference = "dark";
                }
              }
            ]
          });
        }
        return groups2;
      });
      function onSelect(item) {
        if (item.disabled) {
          return;
        }
        open.value = false;
        searchTerm.value = "";
      }
      defineShortcuts({
        [props.shortcut]: {
          usingInput: true,
          handler: () => open.value = !open.value
        }
      });
      const commandPaletteRef = useTemplateRef("commandPaletteRef");
      __expose({
        commandPaletteRef
      });
      return (_ctx, _cache) => {
        const _component_UCommandPalette = _sfc_main$2;
        const _component_UModal = _sfc_main$g;
        return openBlock(), createBlock(_component_UModal, {
          open: open.value,
          "onUpdate:open": _cache[2] || (_cache[2] = ($event) => open.value = $event),
          class: normalizeClass(unref(ui2).modal({
            class: props.class
          }))
        }, {
          content: withCtx(() => [
            createVNode(_component_UCommandPalette, {
              ref_key: "commandPaletteRef",
              ref: commandPaletteRef,
              "search-term": searchTerm.value,
              "onUpdate:searchTerm": _cache[0] || (_cache[0] = ($event) => searchTerm.value = $event),
              icon: _ctx.icon,
              placeholder: _ctx.placeholder,
              loading: _ctx.loading,
              "loading-icon": _ctx.loadingIcon,
              groups: groups.value,
              fuse: fuse.value,
              close: "",
              "onUpdate:modelValue": onSelect,
              "onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event)
            }, createSlots({
              _: 2
            }, [
              renderList(slots, (_2, name) => {
                return {
                  name,
                  fn: withCtx((slotData) => [
                    renderSlot(_ctx.$slots, name, normalizeProps$1(guardReactiveProps(slotData)))
                  ])
                };
              })
            ]), 1032, [
              "search-term",
              "icon",
              "placeholder",
              "loading",
              "loading-icon",
              "groups",
              "fuse"
            ])
          ]),
          _: 3
        }, 8, [
          "open",
          "class"
        ]);
      };
    }
  });
  const YabeWebfontIcon = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m255.487%20348.511-38.054%2021.97-15.574%20124.592c-.536%204.286.794%208.596%203.653%2011.834s6.97%205.093%2011.289%205.093h75.578c4.32%200%208.43-1.855%2011.289-5.093s4.189-7.548%203.653-11.834l-21.591-172.724c-8.206%2010.444-18.406%2019.327-30.243%2026.162z'%3e%3c/path%3e%3cpath%20d='m270.097%20158.141v-143.082c0-5.219-2.702-10.066-7.142-12.81-4.44-2.743-9.982-2.994-14.651-.659l-27.05%2013.525c-25.759%2012.879-41.761%2038.771-41.761%2067.57v83.59c0%2016.328%205.224%2031.449%2014.064%2043.817l29.912-17.27c11.989-15.749%2028.037-27.701%2046.628-34.681z'%3e%3c/path%3e%3cpath%20d='m236.976%20268.498c-13.719-5.811-23.992-18.2-26.868-33.186l-145.939%2084.259c-4.52%202.609-7.367%207.373-7.523%2012.59-.157%205.217%202.399%2010.143%206.755%2013.018l25.238%2016.664c12.671%208.366%2027.115%2012.574%2041.598%2012.574%2012.988%200%2026.008-3.386%2037.799-10.194l72.391-41.795c14.14-8.164%2024.624-20.249%2030.914-34.088z'%3e%3c/path%3e%3cpath%20d='m417.584%20233.375-72.391-41.795c-17.475-10.09-37.835-12.769-57.325-7.547-3.598.964-7.085%202.18-10.446%203.625%2013.427%207.871%2022.47%2022.446%2022.47%2039.103%200%2013.661-6.087%2025.919-15.68%2034.232l146.636%2084.66c2.327%201.344%204.927%202.018%207.529%202.018%202.452%200%204.906-.598%207.135-1.798%204.596-2.473%207.583-7.149%207.896-12.359l1.813-30.189c1.726-28.747-12.696-55.551-37.637-69.95z'%3e%3c/path%3e%3ccircle%20cx='254.59'%20cy='226.761'%20r='15.184'%3e%3c/circle%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e";
  const toZeroIfInfinity = (value) => Number.isFinite(value) ? value : 0;
  function parseNumber(milliseconds) {
    return {
      days: Math.trunc(milliseconds / 864e5),
      hours: Math.trunc(milliseconds / 36e5 % 24),
      minutes: Math.trunc(milliseconds / 6e4 % 60),
      seconds: Math.trunc(milliseconds / 1e3 % 60),
      milliseconds: Math.trunc(milliseconds % 1e3),
      microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e3) % 1e3),
      nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1e3)
    };
  }
  function parseBigint(milliseconds) {
    return {
      days: milliseconds / 86400000n,
      hours: milliseconds / 3600000n % 24n,
      minutes: milliseconds / 60000n % 60n,
      seconds: milliseconds / 1000n % 60n,
      milliseconds: milliseconds % 1000n,
      microseconds: 0n,
      nanoseconds: 0n
    };
  }
  function parseMilliseconds(milliseconds) {
    switch (typeof milliseconds) {
      case "number": {
        if (Number.isFinite(milliseconds)) {
          return parseNumber(milliseconds);
        }
        break;
      }
      case "bigint": {
        return parseBigint(milliseconds);
      }
    }
    throw new TypeError("Expected a finite number or bigint");
  }
  const isZero = (value) => value === 0 || value === 0n;
  const pluralize = (word, count2) => count2 === 1 || count2 === 1n ? word : `${word}s`;
  const SECOND_ROUNDING_EPSILON = 1e-7;
  const ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
  function prettyMilliseconds(milliseconds, options) {
    const isBigInt = typeof milliseconds === "bigint";
    if (!isBigInt && !Number.isFinite(milliseconds)) {
      throw new TypeError("Expected a finite number or bigint");
    }
    options = {
      ...options
    };
    const sign = milliseconds < 0 ? "-" : "";
    milliseconds = milliseconds < 0 ? -milliseconds : milliseconds;
    if (options.colonNotation) {
      options.compact = false;
      options.formatSubMilliseconds = false;
      options.separateMilliseconds = false;
      options.verbose = false;
    }
    if (options.compact) {
      options.unitCount = 1;
      options.secondsDecimalDigits = 0;
      options.millisecondsDecimalDigits = 0;
    }
    let result = [];
    const floorDecimals = (value, decimalDigits) => {
      const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
      const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
      return flooredValue.toFixed(decimalDigits);
    };
    const add = (value, long, short, valueString) => {
      if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === "m")) {
        return;
      }
      valueString ?? (valueString = String(value));
      if (options.colonNotation) {
        const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
        const minLength = result.length > 0 ? 2 : 1;
        valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
      } else {
        valueString += options.verbose ? " " + pluralize(long, value) : short;
      }
      result.push(valueString);
    };
    const parsed = parseMilliseconds(milliseconds);
    const days = BigInt(parsed.days);
    if (options.hideYearAndDays) {
      add(BigInt(days) * 24n + BigInt(parsed.hours), "hour", "h");
    } else {
      if (options.hideYear) {
        add(days, "day", "d");
      } else {
        add(days / 365n, "year", "y");
        add(days % 365n, "day", "d");
      }
      add(Number(parsed.hours), "hour", "h");
    }
    add(Number(parsed.minutes), "minute", "m");
    if (!options.hideSeconds) {
      if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3) {
        const seconds = Number(parsed.seconds);
        const milliseconds2 = Number(parsed.milliseconds);
        const microseconds = Number(parsed.microseconds);
        const nanoseconds = Number(parsed.nanoseconds);
        add(seconds, "second", "s");
        if (options.formatSubMilliseconds) {
          add(milliseconds2, "millisecond", "ms");
          add(microseconds, "microsecond", "\xB5s");
          add(nanoseconds, "nanosecond", "ns");
        } else {
          const millisecondsAndBelow = milliseconds2 + microseconds / 1e3 + nanoseconds / 1e6;
          const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
          const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
          const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
          add(Number.parseFloat(millisecondsString), "millisecond", "ms", millisecondsString);
        }
      } else {
        const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1e3 % 60;
        const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
        const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
        const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
        add(Number.parseFloat(secondsString), "second", "s", secondsString);
      }
    }
    if (result.length === 0) {
      return sign + "0" + (options.verbose ? " milliseconds" : "ms");
    }
    const separator2 = options.colonNotation ? ":" : " ";
    if (typeof options.unitCount === "number") {
      result = result.slice(0, Math.max(options.unitCount, 1));
    }
    return sign + result.join(separator2);
  }
  const channel = new BroadcastChannel("windpress");
  const toast = useToast();
  generateCache = async function(cb) {
    const settingsStore = useSettingsStore();
    const busyStore = useBusyStore();
    busyStore.add("settings.performance.cached_css.generate");
    const toastData = {
      title: wp.i18n.__("Generating cache...", "windpress"),
      description: wp.i18n.__("Please wait while we generate the CSS cache.", "windpress"),
      duration: 0,
      icon: "lucide:loader-circle",
      close: false,
      color: "neutral",
      ui: {
        icon: "animate-spin"
      }
    };
    if (toast.toasts.value.find((t) => t.id === "worker.doGenerateCache")) {
      toast.update("worker.doGenerateCache", {
        ...toastData
      });
    } else {
      toast.add({
        id: "worker.doGenerateCache",
        ...toastData
      });
    }
    let timeStart = performance.now();
    let timeEnd = timeStart;
    channel.postMessage({
      task: "generate-cache",
      source: "windpress/dashboard",
      target: "windpress/compiler",
      data: {
        tailwindcss_version: Number(settingsStore.virtualOptions("general.tailwindcss.version", 4).value)
      }
    });
    channel.addEventListener("message", (event) => {
      const data = event.data;
      const source = "windpress/compiler";
      const target = "windpress/dashboard";
      if (data.source === source && data.target === target && data.task === "generate-cache.response") {
        busyStore.remove("settings.performance.cached_css.generate");
        timeEnd = performance.now();
        if (data.data.status === "success") {
          toast.update("worker.doGenerateCache", {
            title: wp.i18n.__("Cache generated", "windpress"),
            description: wp.i18n.sprintf(wp.i18n.__("Cache generated in %s.", "windpress"), prettyMilliseconds(timeEnd - timeStart)),
            icon: "lucide:codesandbox",
            color: "success",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
          cb == null ? void 0 : cb(true);
        } else if (data.data.status === "error") {
          toast.update("worker.doGenerateCache", {
            title: wp.i18n.__("Generate Cache Error", "windpress"),
            description: wp.i18n.__("An error occurred while generating the CSS cache. Check the Browser's Console for more information", "windpress"),
            icon: "lucide:codesandbox",
            color: "error",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
          cb == null ? void 0 : cb(false);
        }
      }
    });
  };
  const _sfc_main = defineComponent({
    __name: "App",
    setup(__props) {
      const router2 = useRouter();
      const toast2 = useToast();
      const links2 = [
        [
          {
            label: wp.i18n.__("Files", "windpress"),
            icon: "lucide:folder",
            to: router2.resolve({
              name: "files"
            })
          },
          {
            label: wp.i18n.__("Wizard", "windpress"),
            icon: "lucide:zap"
          },
          {
            label: wp.i18n.__("Logs", "windpress"),
            icon: "lucide:logs",
            to: router2.resolve({
              name: "logs"
            })
          },
          {
            label: wp.i18n.__("Settings", "windpress"),
            icon: "lucide:settings",
            to: router2.resolve({
              name: "settings"
            }),
            defaultOpen: true,
            children: [
              {
                label: wp.i18n.__("General", "windpress"),
                to: router2.resolve({
                  name: "settings.general"
                }),
                exact: true
              },
              {
                label: wp.i18n.__("Performance", "windpress"),
                to: router2.resolve({
                  name: "settings.performance"
                }),
                exact: true
              },
              {
                label: wp.i18n.__("Integrations", "windpress"),
                to: router2.resolve({
                  name: "settings.integrations"
                }),
                exact: true
              }
            ]
          }
        ],
        [
          {
            label: wp.i18n.__("Documentation", "windpress"),
            icon: "i-lucide-book-open",
            to: `https://wind.press/docs?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: "_blank"
          },
          {
            label: wp.i18n.__("Discussions", "windpress"),
            icon: "lucide:messages-square",
            to: "https://github.com/wind-press/windpress/discussions",
            target: "_blank"
          }
        ]
      ];
      const groups = computed(() => [
        {
          id: "links",
          label: wp.i18n.__("Go to", "windpress"),
          items: links2[0].flat()
        },
        {
          id: "actions",
          label: wp.i18n.__("Actions", "windpress"),
          items: [
            {
              label: wp.i18n.__("Generate cache", "windpress"),
              icon: "lucide:codesandbox",
              kbds: [
                "meta",
                "J"
              ],
              onSelect: () => {
                generateCache();
              }
            }
          ]
        },
        {
          id: "misc",
          label: wp.i18n.__("Misc", "windpress"),
          items: [
            {
              id: "yabe-webfont",
              label: "Yabe Webfont",
              avatar: {
                src: YabeWebfontIcon,
                alt: "Yabe Webfont"
              },
              to: `https://webfont.yabe.land/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: "_blank"
            },
            ...links2[1].flat()
          ]
        }
      ]);
      const askForReview = localStorage.getItem(`windpress-ask-for-review-${window.windpress._version}`) ?? -1;
      const isAskForReview = ref(askForReview === -1 || askForReview !== "done" && askForReview !== "never" && /* @__PURE__ */ new Date() > new Date(askForReview));
      const askForReviewClick = (action) => {
        localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, action);
        if (action === "done") {
          window.open("https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post", "_blank");
        } else if (action === "later") {
          const date = /* @__PURE__ */ new Date();
          date.setDate(date.getDate() + 7);
          localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, date.toString());
        }
        isAskForReview.value = false;
      };
      onMounted(() => {
        if (isAskForReview.value) {
          toast2.add({
            title: wp.i18n.__("WindPress will always try to make you smile.", "windpress"),
            icon: "lucide:smile",
            description: wp.i18n.__("Would you mind taking a moment to leave a review on WordPress.org? It would mean a lot to us!", "windpress"),
            duration: 0,
            close: false,
            actions: [
              {
                label: wp.i18n.__(`OK, Let's do it!`, "windpress"),
                color: "success",
                variant: "outline",
                block: true,
                onClick: () => {
                  askForReviewClick("done");
                }
              },
              {
                label: wp.i18n.__("Later", "windpress"),
                color: "neutral",
                variant: "ghost",
                onClick: () => {
                  askForReviewClick("later");
                }
              },
              {
                label: wp.i18n.__("Never", "windpress"),
                color: "error",
                variant: "ghost",
                onClick: () => {
                  askForReviewClick("never");
                }
              }
            ]
          });
        }
      });
      defineShortcuts(extractShortcuts(groups.value));
      return (_ctx, _cache) => {
        const _component_UDashboardSearch = _sfc_main$1;
        const _component_ProjectsMenu = _sfc_main$5;
        const _component_UDashboardSearchButton = _sfc_main$6;
        const _component_UNavigationMenu = _sfc_main$7;
        const _component_UserMenu = _sfc_main$a;
        const _component_UDashboardSidebar = _sfc_main$e;
        const _component_RouterView = resolveComponent("RouterView");
        const _component_UDashboardGroup = _sfc_main$k;
        const _component_UApp = _sfc_main$l;
        return openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            createVNode(_component_UApp, {
              toaster: {
                class: "windpress-style"
              }
            }, {
              default: withCtx(() => [
                createVNode(_component_UDashboardGroup, {
                  storage: "local",
                  class: "bg-(--ui-bg) text-(--ui-text) top-(--wp-admin--admin-bar--height) left-(--wp-admin--sidebar-width) right-0 bottom-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UDashboardSearch, {
                      groups: groups.value,
                      placeholder: _ctx.i18n.__("Type a command or search...", "windpress"),
                      colorMode: false
                    }, null, 8, [
                      "groups",
                      "placeholder"
                    ]),
                    createVNode(_component_UDashboardSidebar, {
                      collapsible: "",
                      resizable: "",
                      class: "bg-(--ui-bg-elevated)/25 min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]",
                      ui: {
                        root: "flex",
                        footer: "lg:border-t lg:border-(--ui-border)"
                      }
                    }, {
                      header: withCtx(({ collapsed }) => [
                        createVNode(_component_ProjectsMenu, {
                          collapsed
                        }, null, 8, [
                          "collapsed"
                        ])
                      ]),
                      default: withCtx(({ collapsed }) => [
                        createVNode(_component_UDashboardSearchButton, {
                          label: _ctx.i18n.__("Search...", "windpress"),
                          collapsed,
                          class: "bg-transparent ring-(--ui-border)"
                        }, null, 8, [
                          "label",
                          "collapsed"
                        ]),
                        createVNode(_component_UNavigationMenu, {
                          collapsed,
                          items: links2[0],
                          orientation: "vertical"
                        }, null, 8, [
                          "collapsed",
                          "items"
                        ]),
                        createVNode(_component_UNavigationMenu, {
                          collapsed,
                          items: links2[1],
                          orientation: "vertical",
                          class: "mt-auto"
                        }, null, 8, [
                          "collapsed",
                          "items"
                        ])
                      ]),
                      footer: withCtx(({ collapsed }) => [
                        createVNode(_component_UserMenu, {
                          collapsed
                        }, null, 8, [
                          "collapsed"
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RouterView)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const router = createRouter({
    history: createWebHistory(`${window.windpress.site_meta.web_history}#/`),
    scrollBehavior(_2, _22, savedPosition) {
      return savedPosition || {
        left: 0,
        top: 0
      };
    },
    routes: [
      {
        path: "/",
        name: "home",
        redirect: {
          name: "files"
        }
      },
      {
        path: "/files",
        name: "files",
        component: () => __vitePreload(() => import("./File-BvRuZQLZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), true ? [] : void 0, import.meta.url)
      },
      {
        path: "/logs",
        name: "logs",
        component: () => __vitePreload(() => import("./Log-Dc45k5IE.js").then(async (m) => {
          await m.__tla;
          return m;
        }), true ? [] : void 0, import.meta.url)
      },
      {
        path: "/settings",
        name: "settings",
        redirect: {
          name: "settings.general"
        },
        component: () => __vitePreload(() => import("./Settings-LannJb13.js").then(async (m) => {
          await m.__tla;
          return m;
        }), true ? [] : void 0, import.meta.url),
        children: [
          {
            path: "/general",
            name: "settings.general",
            component: () => __vitePreload(() => import("./General-Bm8Qzx1T.js").then(async (m) => {
              await m.__tla;
              return m;
            }), true ? [] : void 0, import.meta.url)
          },
          {
            path: "/performance",
            name: "settings.performance",
            component: () => __vitePreload(() => import("./Performance-CmJcm7-B.js").then(async (m) => {
              await m.__tla;
              return m;
            }), true ? [] : void 0, import.meta.url)
          },
          {
            path: "/integrations",
            name: "settings.integrations",
            component: () => __vitePreload(() => import("./Integrations-X-3dHn8f.js").then(async (m) => {
              await m.__tla;
              return m;
            }), true ? [] : void 0, import.meta.url)
          }
        ]
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => __vitePreload(() => import("./NotFound-u7TpoC5s.js").then(async (m) => {
          await m.__tla;
          return m;
        }), true ? [] : void 0, import.meta.url)
      }
    ]
  });
  const i18nPlugin = {
    install: (app2, options) => {
      app2.config.globalProperties.i18n = wp.i18n;
    }
  };
  __vitePreload(() => import("../chunks/monaco-editor-M3RTrEyd.min.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((n) => n.a), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
  const app = createApp(_sfc_main);
  const pinia = createPinia();
  app.config.globalProperties.window = window;
  pinia.use(({ store }) => {
    if ([
      "volume",
      "settings"
    ].includes(store.$id)) {
      store.initPull();
    }
  });
  app.use(router).use(ui).use(pinia).use(install).use(i18nPlugin);
  app.mount("#windpress-app");
  setupWorker();
});
export {
  useTimeoutFn as $,
  _sfc_main$9 as A,
  _sfc_main$g as B,
  _sfc_main$3 as C,
  useOverlay as D,
  useToast as E,
  _sfc_main$h as F,
  tv as G,
  useRouter as H,
  _sfc_main$7 as I,
  useDashboard as J,
  useResizable as K,
  _sfc_main$j as L,
  MAP_KEY_TO_FOCUS_INTENT as M,
  _sfc_main$i as N,
  useForwardProps as O,
  Primitive as P,
  useLocalePro as Q,
  useAppConfig$1 as R,
  useAppConfig as S,
  version as T,
  _sfc_main$q as U,
  generateCache as V,
  _sfc_main$s as W,
  refAutoReset as X,
  useForwardExpose as Y,
  injectTooltipProviderContext as Z,
  _sfc_main$1E as _,
  __tla,
  useCollection as a,
  _sfc_main$1B as a0,
  _sfc_main$1y as a1,
  useEventListener as a2,
  _sfc_main$1w as a3,
  _sfc_main$1X as a4,
  _sfc_main$1P as a5,
  Presence as a6,
  _sfc_main$1r as a7,
  _sfc_main$1Q as a8,
  defu as a9,
  _sfc_main$d as aa,
  useFormControl as ab,
  _sfc_main$1C as ac,
  useFormField as ad,
  formLoadingInjectionKey as ae,
  formOptionsInjectionKey as af,
  formBusInjectionKey as ag,
  formInputsInjectionKey as ah,
  getSlotChildrenText as ai,
  formFieldInjectionKey as aj,
  inputIdInjectionKey as ak,
  findValuesBetween as b,
  createContext as c,
  useTypeahead as d,
  useDirection as e,
  focusFirst$1 as f,
  getFocusIntent as g,
  useVModel as h,
  injectRovingFocusGroupContext as i,
  createEventHook as j,
  getActiveElement as k,
  loader as l,
  handleAndDispatchCustomEvent$1 as m,
  getAllKeys as n,
  getTag as o,
  useBusyStore as p,
  cloneDeep as q,
  _appConfig as r,
  useForwardPropsEmits as s,
  tv$1 as t,
  useId as u,
  _sfc_main$t as v,
  wrapArray$1 as w,
  get as x,
  useSettingsStore as y,
  _sfc_main$p as z
};
