import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4, __tla as __tla_0 } from "../chunks/PageCard.vue_vue_type_script_setup_true_lang-CdtyLJs4.min.js";
import { _ as _sfc_main$3, __tla as __tla_1 } from "../chunks/FormField.vue_vue_type_script_setup_true_lang-DehRuCbs.min.js";
import { y as useSettingsStore, __tla as __tla_2 } from "./dashboard-B6ltDXPX.js";
import { a as useApi, __tla as __tla_3 } from "./worker-W3fg9dm2.js";
import { d as defineComponent, r as ref, af as onBeforeMount, D as createBlock, G as withCtx, N as createVNode, U as createElementBlock, V as renderList, F as Fragment, E as openBlock, u as unref } from "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import "../chunks/runtime-dom.esm-bundler-5tPCrDgD.min.js";
import "../chunks/index-B5VrHBO0.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BazNuh42.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/index-DmkUm1CH.min.js";
import { __tla as __tla_4 } from "./cssesc-DgwoVnGT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/floating-ui.core-XFSvPU2w.min.js";
import "./virtualRef-DG1xZSxh.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { __tla as __tla_5 } from "./build-C4S0myzs.js";
import { __tla as __tla_6 } from "../chunks/index-CiedHqv8.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./resolve-config-D3CNF9bs.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_7 } from "../chunks/index-DLCNveCc.min.js";
import "./build-BaSXQmfn.js";
import "./pre-process-ChG-s8ET.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CMNY8QH5.min.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })()
]).then(async () => {
  _sfc_main = defineComponent({
    __name: "Integrations",
    setup(__props) {
      const settingsStore = useSettingsStore();
      const api = useApi();
      const providers = ref([]);
      async function pullProviders() {
        await api.get("admin/settings/cache/providers").then((resp) => {
          providers.value = resp.data.providers.sort((a, b) => a.id.localeCompare(b.id));
        });
      }
      onBeforeMount(() => {
        pullProviders();
      });
      return (_ctx, _cache) => {
        const _component_UPageCard = _sfc_main$2;
        const _component_USwitch = _sfc_main$4;
        const _component_UFormField = _sfc_main$3;
        const _component_UForm = _sfc_main$1;
        return openBlock(), createBlock(_component_UForm, {
          id: "integrations",
          state: {}
        }, {
          default: withCtx(() => [
            createVNode(_component_UPageCard, {
              title: _ctx.i18n.__("Integrations", "windpress"),
              description: _ctx.i18n.__("Enable or disable integrations with other services.", "windpress"),
              variant: "naked",
              class: "mb-4"
            }, null, 8, [
              "title",
              "description"
            ]),
            createVNode(_component_UPageCard, {
              variant: "subtle",
              ui: {
                container: "divide-y divide-(--ui-border)"
              }
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(providers.value, (provider) => {
                  return openBlock(), createBlock(_component_UFormField, {
                    key: provider.id,
                    name: provider.id,
                    label: provider.name,
                    description: provider.description,
                    class: "flex items-center justify-between not-last:pb-4 gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USwitch, {
                        modelValue: unref(settingsStore).virtualOptions(`integration.${provider.id}.enabled`, true).value,
                        "onUpdate:modelValue": ($event) => unref(settingsStore).virtualOptions(`integration.${provider.id}.enabled`, true).value = $event,
                        label: `[${provider.id}]`,
                        ui: {
                          label: "whitespace-nowrap text-(--ui-text-muted) font-normal"
                        },
                        class: "flex-row-reverse gap-2"
                      }, null, 8, [
                        "modelValue",
                        "onUpdate:modelValue",
                        "label"
                      ])
                    ]),
                    _: 2
                  }, 1032, [
                    "name",
                    "label",
                    "description"
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
