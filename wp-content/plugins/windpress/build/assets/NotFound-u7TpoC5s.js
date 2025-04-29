import { H as useRouter, z as _sfc_main$1, __tla as __tla_0 } from "./dashboard-B6ltDXPX.js";
import { d as defineComponent, U as createElementBlock, a5 as createBaseVNode, a1 as toDisplayString, N as createVNode, u as unref, E as openBlock } from "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import "../chunks/preload-helper-BazNuh42.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/runtime-dom.esm-bundler-5tPCrDgD.min.js";
import { __tla as __tla_1 } from "./worker-W3fg9dm2.js";
import { __tla as __tla_2 } from "./cssesc-DgwoVnGT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import "../chunks/index-B5VrHBO0.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import { __tla as __tla_3 } from "../chunks/index-DLCNveCc.min.js";
import "./build-BaSXQmfn.js";
import "../chunks/index-DmkUm1CH.min.js";
import { __tla as __tla_4 } from "../chunks/index-CiedHqv8.min.js";
import "./pre-process-ChG-s8ET.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CvyxREt8.min.js";
import { __tla as __tla_5 } from "./build-C4S0myzs.js";
import "./resolve-config-D3CNF9bs.js";
import "../chunks/index-CMNY8QH5.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/floating-ui.core-XFSvPU2w.min.js";
import "./virtualRef-DG1xZSxh.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
let _sfc_main;
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  const _hoisted_1 = {
    class: "min-h-full w-full"
  };
  const _hoisted_2 = {
    class: "h-full flex justify-center border border-b-0 border-(--ui-border-muted) relative p-4 z-[1]"
  };
  const _hoisted_3 = {
    class: "h-full flex flex-col items-center justify-center text-center"
  };
  const _hoisted_4 = {
    class: "mt-2 text-4xl sm:text-5xl font-bold text-(--ui-text-highlighted) text-balance"
  };
  const _hoisted_5 = {
    class: "mt-4 text-lg text-(--ui-text-muted) text-balance"
  };
  const _hoisted_6 = {
    class: "mt-8 flex items-center justify-center gap-6"
  };
  _sfc_main = defineComponent({
    __name: "NotFound",
    setup(__props) {
      const router = useRouter();
      const homeLink = router.resolve({
        name: "home"
      });
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$1;
        return openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              _cache[0] || (_cache[0] = createBaseVNode("p", {
                class: "text-base font-semibold text-(--ui-primary)"
              }, " 404 ", -1)),
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.i18n.__("Page not found", "windpress")), 1),
              createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.i18n.__("Sorry, we couldn\u2019t find the page you\u2019re looking for.", "windpress")), 1),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_UButton, {
                  to: unref(homeLink),
                  size: "lg",
                  color: "primary",
                  variant: "solid",
                  label: _ctx.i18n.__("Back to home", "windpress")
                }, null, 8, [
                  "to",
                  "label"
                ])
              ])
            ])
          ])
        ]);
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
