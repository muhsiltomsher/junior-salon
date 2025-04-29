import { _ as _sfc_main$2, b as _sfc_main$3, a as _sfc_main$4, __tla as __tla_0 } from "../chunks/DashboardSidebarCollapse.vue_vue_type_script_setup_true_lang-4LIVwuSn.min.js";
import { G as tv, P as Primitive, r as _appConfig, E as useToast, y as useSettingsStore, p as useBusyStore, H as useRouter, I as _sfc_main$5, __tla as __tla_1 } from "./dashboard-B6ltDXPX.js";
import { d as defineComponent, D as createBlock, u as unref, a2 as normalizeClass, G as withCtx, H as renderSlot, a5 as createBaseVNode, E as openBlock, N as createVNode, ac as resolveComponent } from "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import "../chunks/index-B5VrHBO0.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BazNuh42.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/runtime-dom.esm-bundler-5tPCrDgD.min.js";
import { __tla as __tla_2 } from "./worker-W3fg9dm2.js";
import { __tla as __tla_3 } from "./cssesc-DgwoVnGT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_4 } from "../chunks/index-DLCNveCc.min.js";
import "./build-BaSXQmfn.js";
import "../chunks/index-DmkUm1CH.min.js";
import { __tla as __tla_5 } from "../chunks/index-CiedHqv8.min.js";
import "./pre-process-ChG-s8ET.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CvyxREt8.min.js";
import { __tla as __tla_6 } from "./build-C4S0myzs.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  const theme = {
    "slots": {
      "root": "shrink-0 flex items-center justify-between border-b border-(--ui-border) px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]",
      "left": "flex items-center gap-1.5",
      "right": "flex items-center gap-1.5"
    }
  };
  const appConfigdashboardToolbar = _appConfig;
  const dashboardToolbar = tv({
    extend: tv(theme),
    ...((_a = appConfigdashboardToolbar.uiPro) == null ? void 0 : _a.dashboardToolbar) || {}
  });
  const _sfc_main$1 = defineComponent({
    __name: "DashboardToolbar",
    props: {
      as: {},
      class: {},
      ui: {}
    },
    setup(__props) {
      const props = __props;
      const ui = dashboardToolbar();
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createBlock(unref(Primitive), {
          as: _ctx.as,
          class: normalizeClass(unref(ui).root({
            class: [
              props.class,
              (_a2 = props.ui) == null ? void 0 : _a2.root
            ]
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => {
              var _a3, _b;
              return [
                createBaseVNode("div", {
                  class: normalizeClass(unref(ui).left({
                    class: [
                      (_a3 = props.ui) == null ? void 0 : _a3.left
                    ]
                  }))
                }, [
                  renderSlot(_ctx.$slots, "left")
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(unref(ui).right({
                    class: [
                      (_b = props.ui) == null ? void 0 : _b.right
                    ]
                  }))
                }, [
                  renderSlot(_ctx.$slots, "right")
                ], 2)
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
  const _hoisted_1 = {
    class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto"
  };
  _sfc_main = defineComponent({
    __name: "Settings",
    setup(__props) {
      const router = useRouter();
      const toast = useToast();
      const settingsStore = useSettingsStore();
      const busyStore = useBusyStore();
      async function saveSetting() {
        const toastData = {
          title: wp.i18n.__("Saving...", "windpress"),
          description: wp.i18n.__("Please wait while we save your changes.", "windpress"),
          duration: 0,
          icon: "lucide:loader-circle",
          close: false,
          color: "neutral",
          ui: {
            icon: "animate-spin"
          }
        };
        if (toast.toasts.value.find((t) => t.id === "settings.doSave")) {
          toast.update("settings.doSave", {
            ...toastData
          });
        } else {
          toast.add({
            id: "settings.doSave",
            ...toastData
          });
        }
        return settingsStore.doPush().then(() => {
          toast.update("settings.doSave", {
            title: wp.i18n.__("Saved", "windpress"),
            description: wp.i18n.__("Your changes have been saved.", "windpress"),
            icon: "i-lucide-save",
            color: "success",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
        }).catch((err) => {
          toast.update("settings.doSave", {
            title: wp.i18n.__("Error", "windpress"),
            description: wp.i18n.__("An error occurred while saving your changes.", "windpress"),
            icon: "i-lucide-save",
            color: "error",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
        }).finally(() => {
        });
      }
      const links = [
        [
          {
            label: wp.i18n.__("General", "windpress"),
            to: router.resolve({
              name: "settings.general"
            }),
            icon: "lucide:settings",
            exact: true
          },
          {
            label: wp.i18n.__("Performance", "windpress"),
            to: router.resolve({
              name: "settings.performance"
            }),
            icon: "lucide:rocket",
            exact: true
          },
          {
            label: wp.i18n.__("Integrations", "windpress"),
            to: router.resolve({
              name: "settings.integrations"
            }),
            icon: "lucide:package",
            exact: true
          }
        ],
        [
          {
            label: wp.i18n.__("Save", "windpress"),
            icon: "lucide:save",
            color: "primary",
            onSelect: saveSetting,
            disabled: busyStore.isBusy
          }
        ]
      ];
      return (_ctx, _cache) => {
        const _component_UDashboardSidebarCollapse = _sfc_main$3;
        const _component_UDashboardNavbar = _sfc_main$4;
        const _component_UNavigationMenu = _sfc_main$5;
        const _component_UDashboardToolbar = _sfc_main$1;
        const _component_RouterView = resolveComponent("RouterView");
        const _component_UDashboardPanel = _sfc_main$2;
        return openBlock(), createBlock(_component_UDashboardPanel, {
          id: "settings",
          ui: {
            body: "lg:py-12"
          }
        }, {
          header: withCtx(() => [
            createVNode(_component_UDashboardNavbar, {
              title: _ctx.i18n.__("Settings", "windpress")
            }, {
              leading: withCtx(() => [
                createVNode(_component_UDashboardSidebarCollapse)
              ]),
              _: 1
            }, 8, [
              "title"
            ]),
            createVNode(_component_UDashboardToolbar, null, {
              default: withCtx(() => [
                createVNode(_component_UNavigationMenu, {
                  items: links,
                  highlight: "",
                  class: "-mx-1 flex-1"
                })
              ]),
              _: 1
            })
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_component_RouterView)
            ])
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
