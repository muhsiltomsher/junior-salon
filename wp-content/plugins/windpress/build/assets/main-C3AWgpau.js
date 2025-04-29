import { T as Transition, b as vShow, c as createApp } from "../chunks/runtime-dom.esm-bundler-5tPCrDgD.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo, _ as __unplugin_components_0, a as __unplugin_components_0$1, G as Gt, F } from "../chunks/chevron-right-CB27dDAM.min.js";
import { bde, bdeIframe } from "./constant-J0FlTYG6.js";
import { _ as _export_sfc } from "../chunks/_plugin-vue_export-helper-pcqpp-6-.min.js";
import { a as inject, x as onMounted, ac as resolveComponent, aC as resolveDirective, U as createElementBlock, E as openBlock, a5 as createBaseVNode, ag as withDirectives, N as createVNode, u as unref, a0 as createTextVNode, r as ref, j as watch, H as renderSlot, R as normalizeStyle, a2 as normalizeClass, G as withCtx, O as createCommentVNode, F as Fragment, V as renderList, a1 as toDisplayString, D as createBlock, ab as Suspense } from "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import { d as decodeVFSContainer } from "./vfs-D01OmQx9.js";
import "../chunks/index-DmkUm1CH.min.js";
import { __tla as __tla_0 } from "./cssesc-DgwoVnGT.js";
import { __tla as __tla_1 } from "../chunks/index-DLCNveCc.min.js";
import { d as getVariableList } from "./intellisense-CjMxI9UR.js";
import { l as loadDesignSystem } from "./design-system-Z_JJTcO-.js";
import { g as useStorage } from "../chunks/index-B5VrHBO0.min.js";
import { s as set } from "../chunks/set-CQpYICWN.min.js";
import "../chunks/floating-ui.core-XFSvPU2w.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BazNuh42.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-ChG-s8ET.js";
import "../chunks/_toKey-C72hUfwS.min.js";
Promise.all([
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
  })()
]).then(async () => {
  const _hoisted_1$4 = {
    id: "windpressbreakdance-variable-app-header",
    class: "header-container cursor:grab bb:1|solid|$(gray200)"
  };
  const _hoisted_2$3 = {
    class: "header-content flex gap:10 align-items:center fg:var(dark)"
  };
  const _hoisted_3$2 = {
    class: "header-logo flex align-items:center px:12 py:2"
  };
  const _hoisted_4$2 = {
    class: "header-title text-transform:none font:medium text:center flex-grow:1 gap:10 align-items:center cursor:default px:12 py:2"
  };
  const _sfc_main$5 = {
    __name: "PanelHeader",
    setup(__props) {
      const variableApp2 = inject("variableApp");
      const isOpen2 = inject("isOpen");
      function allowDragPanel() {
        const draggable = variableApp2.querySelector("#windpressbreakdance-variable-app-header");
        let isDragging = ref(false);
        let offsetX = 0;
        let offsetY = 0;
        watch(isDragging, (value) => {
          if (!value) {
            document.body.style.removeProperty("user-select");
            bde.querySelector("div.v-application--wrap").style.removeProperty("pointer-events");
            draggable.style.cursor = "grab";
          } else {
            document.body.style.userSelect = "none";
            bde.querySelector("div.v-application--wrap").style.pointerEvents = "none";
            draggable.style.cursor = "grabbing";
          }
        });
        const handleDragStart = (e) => {
          isDragging.value = true;
          const rect = draggable.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
        };
        draggable.removeEventListener("mousedown", handleDragStart);
        draggable.addEventListener("mousedown", handleDragStart);
        const handleDrag = (e) => {
          if (!isDragging.value) {
            return;
          }
          const rect = draggable.getBoundingClientRect();
          const clientX = e.clientX;
          const clientY = e.clientY;
          const x = clientX - offsetX;
          const y = clientY - offsetY;
          const posX = x < 0 ? 0 : x > window.innerWidth - rect.width ? window.innerWidth - rect.width : x;
          const posY = y < 0 ? 0 : y > window.innerHeight - rect.height ? window.innerHeight - rect.height : y;
          variableApp2.style.left = `${posX}px`;
          variableApp2.style.top = `${posY}px`;
        };
        document.removeEventListener("mousemove", handleDrag);
        document.addEventListener("mousemove", handleDrag);
        const endDragging = (e) => {
          isDragging.value = false;
        };
        document.removeEventListener("mouseup", endDragging);
        document.addEventListener("mouseup", endDragging);
      }
      onMounted(() => {
        allowDragPanel();
      });
      return (_ctx, _cache) => {
        const _component_inline_svg = resolveComponent("inline-svg");
        const _component_i_fa6_solid_xmark = __unplugin_components_0;
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(_component_inline_svg, {
                src: unref(Logo),
                class: "inline-svg fill:current font:24"
              }, null, 8, [
                "src"
              ])
            ]),
            withDirectives((openBlock(), createElementBlock("div", _hoisted_4$2, _cache[1] || (_cache[1] = [
              createTextVNode(" WindPress ")
            ]))), [
              [
                _directive_tooltip,
                {
                  placement: "top",
                  content: `v${_ctx.windpressbreakdance._version}`
                }
              ]
            ]),
            withDirectives((openBlock(), createElementBlock("button", {
              class: "header-exit flex align-items:center py:10 px:12 fg:$(blue600):hover bg:$(blue50):hover",
              onClick: _cache[0] || (_cache[0] = ($event) => isOpen2.value = !unref(isOpen2))
            }, [
              createVNode(_component_i_fa6_solid_xmark, {
                class: "iconify font:16"
              })
            ])), [
              [
                _directive_tooltip,
                {
                  placement: "top",
                  content: "Close"
                }
              ]
            ])
          ])
        ]);
      };
    }
  };
  const PanelHeader = _export_sfc(_sfc_main$5, [
    [
      "__scopeId",
      "data-v-7377c328"
    ]
  ]);
  const _hoisted_1$3 = {
    class: "header-slot flex-grow:1"
  };
  const _hoisted_2$2 = {
    key: 0,
    class: "expansion-panel__body"
  };
  const _sfc_main$4 = {
    __name: "ExpansionPanel",
    props: {
      namespace: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      const props = __props;
      const sectionRef = ref(null);
      const expand = useStorage(`windpressbreakdance-variable-app.ui.expansion-panels.${props.namespace}`, {
        [`${props.name}`]: false
      }, void 0, {
        mergeDefaults: true
      });
      function togglePanel(val) {
        expand.value[props.name] = val === null ? !expand.value[props.name] : val;
      }
      function scrollIntoView() {
        sectionRef.value.scrollIntoView();
      }
      __expose({
        togglePanel,
        scrollIntoView
      });
      return (_ctx, _cache) => {
        const _component_i_fa6_solid_chevron_right = __unplugin_components_0$1;
        return openBlock(), createElementBlock("div", {
          ref_key: "sectionRef",
          ref: sectionRef,
          class: "expansion-panel mx:10 py:8 mr:4"
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              {},
              "expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer"
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(expand)[__props.name] = !unref(expand)[__props.name])
          }, [
            createBaseVNode("div", _hoisted_1$3, [
              renderSlot(_ctx.$slots, "header", {}, void 0, true)
            ]),
            createBaseVNode("div", null, [
              createVNode(_component_i_fa6_solid_chevron_right, {
                style: normalizeStyle({
                  transform: unref(expand)[__props.name] ? "rotate(-90deg)" : "rotate(0deg)"
                }),
                class: "iconify ~duration:300 font:18"
              }, null, 8, [
                "style"
              ])
            ])
          ]),
          createVNode(Transition, null, {
            default: withCtx(() => [
              unref(expand)[__props.name] ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 512);
      };
    }
  };
  const ExpansionPanel = _export_sfc(_sfc_main$4, [
    [
      "__scopeId",
      "data-v-29d1aafa"
    ]
  ]);
  const _hoisted_1$2 = {
    class: "{m:10;pb:15}>div"
  };
  const _hoisted_2$1 = {
    class: "variable-section-title font:14 my:10"
  };
  const _hoisted_3$1 = {
    class: "variable-section-items flex flex:row gap:8 flex-wrap:wrap"
  };
  const _hoisted_4$1 = [
    "onClick",
    "onMouseenter"
  ];
  const _hoisted_5$1 = {
    class: "font:14"
  };
  const _sfc_main$3 = {
    __name: "CommonVariableItems",
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.variableItems, (item, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "var-item"
            }, [
              createBaseVNode("div", _hoisted_2$1, toDisplayString(key.replace("_", "-")), 1),
              createBaseVNode("div", _hoisted_3$1, [
                item.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                  key: 0
                }, renderList(item, (subItem, subItemKey) => {
                  return withDirectives((openBlock(), createElementBlock("button", {
                    key: subItemKey,
                    class: "px:12 py:8 r:8 font:medium fg:$(dark) fg:$(accent-normal):hover bg:$(gray150) bg:$(gray300):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% cursor:pointer {opacity:.5}>span opacity:100:hover>span",
                    onClick: (event) => _ctx.$emit("previewChose", event, subItem.key),
                    onMouseenter: (event) => _ctx.$emit("previewEnter", event, subItem.key),
                    onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("previewLeave"))
                  }, [
                    createBaseVNode("span", _hoisted_5$1, toDisplayString(subItem.label), 1)
                  ], 40, _hoisted_4$1)), [
                    [
                      _directive_tooltip,
                      {
                        placement: "top",
                        content: `var(${subItem.key}, ${subItem.value})`
                      }
                    ]
                  ]);
                }), 128)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]);
      };
    }
  };
  const CommonVariableItems = _export_sfc(_sfc_main$3, [
    [
      "__scopeId",
      "data-v-4955c1d9"
    ]
  ]);
  const _hoisted_1$1 = {
    class: "{m:10;pb:15}>div"
  };
  const _hoisted_2 = {
    class: "variable-section-title font:14 my:10"
  };
  const _hoisted_3 = {
    key: 0,
    class: "variable-section-items default-color"
  };
  const _hoisted_4 = [
    "onClick",
    "onMouseenter"
  ];
  const _hoisted_5 = [
    "onClick",
    "onMouseenter"
  ];
  const _sfc_main$2 = {
    __name: "ColorVariableItems",
    props: {
      variableItems: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _directive_tooltip = resolveDirective("tooltip");
        return openBlock(), createElementBlock("div", _hoisted_1$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.variableItems, (color, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: ""
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(key), 1),
              color.DEFAULT ? (openBlock(), createElementBlock("div", _hoisted_3, [
                withDirectives(createBaseVNode("button", {
                  style: normalizeStyle(`--wp-b-v-item-bg: var(--${color.DEFAULT.key.slice(2)});`),
                  class: "w:full r:4 h:24 border:1|solid|transparent border:white:hover cursor:pointer",
                  onClick: (event) => _ctx.$emit("previewChose", event, color.DEFAULT.key),
                  onMouseenter: (event) => _ctx.$emit("previewEnter", event, color.DEFAULT.key),
                  onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("previewLeave"))
                }, null, 44, _hoisted_4), [
                  [
                    _directive_tooltip,
                    {
                      placement: "top",
                      content: `var(${color.DEFAULT.key}, ${color.DEFAULT.value})`
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              color.shades && Object.keys(color.shades).length > 0 ? (openBlock(), createElementBlock("div", {
                key: 1,
                style: normalizeStyle(`--wp-b-v-items-grid: ${Object.keys(color.shades).length}`),
                class: "variable-section-items shades-colors grid r:4 overflow:hidden"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(color.shades, (shade, shadeKey) => {
                  return openBlock(), createElementBlock("div", {
                    key: shadeKey,
                    class: "flex gap:10"
                  }, [
                    withDirectives(createBaseVNode("button", {
                      style: normalizeStyle(`--wp-b-v-item-bg: var(--${shade.key.slice(2)})`),
                      class: "w:full h:24 border:1|solid|transparent border:white:hover cursor:pointer",
                      onClick: (event) => _ctx.$emit("previewChose", event, shade.key),
                      onMouseenter: (event) => _ctx.$emit("previewEnter", event, shade.key),
                      onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("previewLeave"))
                    }, null, 44, _hoisted_5), [
                      [
                        _directive_tooltip,
                        {
                          placement: "top",
                          content: `var(${shade.key}, ${shade.value})`
                        }
                      ]
                    ])
                  ]);
                }), 128))
              ], 4)) : createCommentVNode("", true)
            ]);
          }), 128))
        ]);
      };
    }
  };
  const ColorVariableItems = _export_sfc(_sfc_main$2, [
    [
      "__scopeId",
      "data-v-b5786bb3"
    ]
  ]);
  const _hoisted_1 = {
    id: "windpressbreakdance-variable-app-body",
    class: "var-body rel w:full h:full overflow-y:scroll! bb:1|solid|$(gray200)>div:not(:last-child)"
  };
  const HOVER_VARIABLE_PREVIEW_TIMEOUT = 1e3;
  const _sfc_main$1 = {
    __name: "PanelBody",
    setup(__props) {
      const commonVar = ref({
        colors: {},
        typography: {},
        sizing: {}
      });
      const focusedInput2 = inject("focusedInput");
      const recentVariableSelectionTimestamp2 = inject("recentVariableSelectionTimestamp");
      const tempInputValue2 = inject("tempInputValue");
      const variableApp2 = inject("variableApp");
      async function constructVariableList() {
        const vfsContainer = bdeIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
        const volume = decodeVFSContainer(vfsContainer.textContent);
        const variableLists = await getVariableList(await loadDesignSystem({
          volume
        }));
        let styleElement = variableApp2.querySelector("style#windpressbreakdance-variable-app-body-style");
        if (!styleElement) {
          styleElement = document.createElement("style");
          styleElement.id = "windpressbreakdance-variable-app-body-style";
          variableApp2.appendChild(styleElement);
        }
        styleElement.innerHTML = `
        #windpressbreakdance-variable-app-body {
            ${variableLists.map((variable) => `${variable.key}:${variable.value};`).join("")}
        }
    `;
        const palette = {};
        variableLists.filter((variable) => variable.key.startsWith("--color")).forEach((color) => {
          const key = color.key.slice(8);
          const segments = key.split("-");
          let colorPath = "";
          if (segments.length > 1) {
            const key2 = segments[0];
            const shadeKey = segments.slice(1).join("-");
            colorPath = `${key2}.shades.'${shadeKey}'`;
          } else {
            colorPath = `${key}.DEFAULT`;
          }
          set(palette, colorPath, color);
        });
        commonVar.value.colors = Object.keys(palette).sort().reduce((acc, key) => {
          acc[key] = palette[key];
          return acc;
        }, {});
        const typography = {
          font_size: [],
          line_height: [],
          letter_spacing: []
        };
        variableLists.filter((variable) => variable.key.startsWith("--text-") && !variable.key.endsWith("--line-height")).forEach((typo) => {
          const key = typo.key.slice(7);
          typography.font_size.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        variableLists.filter((variable) => variable.key.startsWith("--leading-") || variable.key.endsWith("--leading")).forEach((typo) => {
          const key = typo.key.startsWith("--leading-") ? typo.key.slice(10) : typo.key.slice(2, -9);
          typography.line_height.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        typography.line_height.sort((a, b) => {
          if (a.label.startsWith("font-size-") && !b.label.startsWith("font-size-")) {
            return 1;
          }
          if (!a.label.startsWith("font-size-") && b.label.startsWith("font-size-")) {
            return -1;
          }
          return 0;
        });
        variableLists.filter((variable) => variable.key.startsWith("--tracking-")).forEach((typo) => {
          const key = typo.key.slice(11);
          typography.letter_spacing.push({
            key: typo.key,
            label: key,
            value: typo.value
          });
        });
        commonVar.value.typography = typography;
        const sizing = {
          container: [],
          breakpoint: []
        };
        variableLists.filter((variable) => variable.key.startsWith("--container-")).forEach((size) => {
          const key = size.key.slice(12);
          sizing.container.push({
            key: size.key,
            label: key,
            value: size.value
          });
        });
        variableLists.filter((variable) => variable.key.startsWith("--breakpoint-")).forEach((size) => {
          const key = size.key.slice(13);
          sizing.breakpoint.push({
            key: size.key,
            label: key,
            value: size.value
          });
        });
        commonVar.value.sizing = sizing;
      }
      const sectionColor = ref(null);
      const sectionTypography = ref(null);
      const sectionSpacing = ref(null);
      watch(focusedInput2, (value) => {
        if (value) {
          const control = value.closest("[data-test-id]");
          const isColorInput = [
            "color"
          ].some((keyword) => control.getAttribute("data-test-id").includes(keyword));
          const isFontSize = [
            "fontSize"
          ].some((keyword) => control.getAttribute("data-test-id").includes(keyword));
          const isSpacing = [
            "spacing",
            "size-width"
          ].some((keyword) => control.getAttribute("data-test-id").includes(keyword));
          sectionTypography.value.togglePanel(false);
          sectionSpacing.value.togglePanel(false);
          sectionColor.value.togglePanel(false);
          async function swithUnitCustom() {
            while (value.parentElement.parentElement.parentElement.querySelector("div.dropdown>button.breakdance-unit-input-unit") === null) {
              await new Promise((resolve) => setTimeout(resolve, 10));
            }
            value.parentElement.parentElement.parentElement.querySelector("div.dropdown>button.breakdance-unit-input-unit").click();
            while (document.querySelector(".v-menu__content.menuable__content__active .dropdown-content .v-list .v-list-item:last-child .v-list-item__title") === null) {
              await new Promise((resolve) => setTimeout(resolve, 10));
            }
            document.querySelector(".v-menu__content.menuable__content__active .dropdown-content .v-list .v-list-item:last-child .v-list-item__title").click();
            setTimeout(() => {
              value.focus();
            }, 100);
          }
          if (isColorInput) {
            sectionColor.value.togglePanel(true);
            sectionColor.value.scrollIntoView();
          } else if (isFontSize) {
            sectionTypography.value.togglePanel(true);
            sectionTypography.value.scrollIntoView();
            swithUnitCustom();
          } else if (isSpacing) {
            sectionSpacing.value.togglePanel(true);
            sectionSpacing.value.scrollIntoView();
            swithUnitCustom();
          }
        }
      });
      function onMouseEnter(e, varKey) {
        const timeElapsedBetweenSelections = performance.now() - recentVariableSelectionTimestamp2.value;
        const isInCoolDown = timeElapsedBetweenSelections < HOVER_VARIABLE_PREVIEW_TIMEOUT;
        if (isInCoolDown) return;
        if (!focusedInput2.value) {
          return;
        }
        focusedInput2.value.value = `var(${varKey})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onMouseLeave(e) {
        if (!focusedInput2.value || tempInputValue2.value === null) {
          return;
        }
        focusedInput2.value.value = tempInputValue2.value;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
      }
      function onClick(e, varKey) {
        if (!focusedInput2.value) {
          return;
        }
        focusedInput2.value.value = `var(${varKey})`;
        focusedInput2.value.dispatchEvent(new Event("input"));
        focusedInput2.value.focus();
        tempInputValue2.value = `var(${varKey})`;
        recentVariableSelectionTimestamp2.value = performance.now();
      }
      onMounted(() => {
        constructVariableList();
      });
      const channel = new BroadcastChannel("windpress");
      channel.addEventListener("message", async (e) => {
        const data = e.data;
        const source = "windpress/autocomplete";
        const task = "windpress.code-editor.saved.done";
        if (data.source === source && data.task === task) {
          setTimeout(() => {
            constructVariableList();
          }, 1e3);
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(ExpansionPanel, {
            ref_key: "sectionColor",
            ref: sectionColor,
            namespace: "variable",
            name: "color"
          }, {
            header: withCtx(() => _cache[0] || (_cache[0] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Color", -1)
            ])),
            default: withCtx(() => [
              createVNode(ColorVariableItems, {
                "variable-items": commonVar.value.colors,
                onPreviewEnter: onMouseEnter,
                onPreviewLeave: onMouseLeave,
                onPreviewChose: onClick
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512),
          createVNode(ExpansionPanel, {
            ref_key: "sectionTypography",
            ref: sectionTypography,
            namespace: "variable",
            name: "typography"
          }, {
            header: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Typography", -1)
            ])),
            default: withCtx(() => [
              createVNode(CommonVariableItems, {
                "variable-items": commonVar.value.typography,
                onPreviewEnter: onMouseEnter,
                onPreviewLeave: onMouseLeave,
                onPreviewChose: onClick
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512),
          createVNode(ExpansionPanel, {
            ref_key: "sectionSpacing",
            ref: sectionSpacing,
            namespace: "variable",
            name: "spacing",
            class: ""
          }, {
            header: withCtx(() => _cache[2] || (_cache[2] = [
              createBaseVNode("span", {
                class: "var-body-title"
              }, "Sizing", -1)
            ])),
            default: withCtx(() => [
              createVNode(CommonVariableItems, {
                "variable-items": commonVar.value.sizing,
                onPreviewEnter: onMouseEnter,
                onPreviewLeave: onMouseLeave,
                onPreviewChose: onClick
              }, null, 8, [
                "variable-items"
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  const PanelBody = _export_sfc(_sfc_main$1, [
    [
      "__scopeId",
      "data-v-1dcc7e67"
    ]
  ]);
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const isOpen2 = inject("isOpen");
      const containerRef = ref(null);
      function updateTheme() {
        if (bde.classList.contains("theme--light")) {
          containerRef.value.classList.add("theme--light");
          containerRef.value.classList.remove("theme--dark");
        } else if (bde.classList.contains("theme--dark")) {
          containerRef.value.classList.add("theme--dark");
          containerRef.value.classList.remove("theme--light");
        }
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            updateTheme();
          }
        });
      });
      observer.observe(bde, {
        attributes: true,
        attributeFilter: [
          "class"
        ],
        childList: false,
        subtree: false
      });
      onMounted(() => {
        updateTheme();
      });
      return (_ctx, _cache) => {
        return withDirectives((openBlock(), createElementBlock("div", {
          id: "windpressbreakdance-variable-app-container",
          ref_key: "containerRef",
          ref: containerRef,
          class: "v-application flex flex:column w:full h:full"
        }, [
          createVNode(PanelHeader),
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode(PanelBody)
            ]),
            _: 1
          }))
        ], 512)), [
          [
            vShow,
            unref(isOpen2)
          ]
        ]);
      };
    }
  };
  const App = _export_sfc(_sfc_main, [
    [
      "__scopeId",
      "data-v-a1c4c142"
    ]
  ]);
  function observe({ selector, callback, options }) {
    const observer = new MutationObserver(callback);
    const target = document.querySelector(selector);
    if (!target) {
      logger(`Target not found for selector: ${selector}`, {
        module: "variable-picker",
        type: "error"
      });
      return;
    }
    const DEFAULT_OPTIONS = {
      childList: true,
      subtree: true
    };
    observer.observe(target, Object.assign(Object.assign({}, DEFAULT_OPTIONS), options));
  }
  const variableApp = document.createElement("windpressbreakdance-variable-app");
  variableApp.id = "windpressbreakdance-variable-app";
  bde.appendChild(variableApp);
  const isOpen = ref(false);
  const focusedInput = ref(null);
  const tempInputValue = ref(null);
  const recentVariableSelectionTimestamp = ref(0);
  const app = createApp(App);
  app.config.globalProperties.windpressbreakdance = window.windpressbreakdance;
  app.provide("variableApp", variableApp);
  app.provide("isOpen", isOpen);
  app.provide("focusedInput", focusedInput);
  app.provide("tempInputValue", tempInputValue);
  app.provide("recentVariableSelectionTimestamp", recentVariableSelectionTimestamp);
  app.use(Gt, {
    container: "#windpressbreakdance-variable-app"
  });
  app.component("InlineSvg", F);
  app.mount("#windpressbreakdance-variable-app");
  function onInputClick(e) {
    var _a;
    if (!e.shiftKey || !e.target) {
      return;
    }
    (_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges();
    e.preventDefault();
    e.stopPropagation();
    focusedInput.value = e.target;
    tempInputValue.value = e.target.value;
    isOpen.value = true;
  }
  function onFocusCallback(e) {
    focusedInput.value = e.target;
  }
  const breakdanceInputs = {
    includedFields: [
      "div.breakdance-control-wrapper-input-wrapper div.breakdance-text-input-wrapper"
    ]
  };
  function addTriggers() {
    setTimeout(() => {
      let shouldReset = false;
      breakdanceInputs.includedFields.forEach((field) => {
        const wrappers = typeof field === "string" ? [
          ...document.querySelectorAll(field)
        ] : [
          ...document.querySelectorAll(field.selector)
        ].filter((n) => field.hasChild.some((c) => n.querySelector(c)));
        wrappers.forEach((wrapper) => {
          const input = wrapper.querySelector("input[type='text']");
          if ((input == null ? void 0 : input.getAttribute("windpressbreakdance-variable-app")) === "listened") {
            return;
          }
          input == null ? void 0 : input.removeEventListener("click", onInputClick);
          input == null ? void 0 : input.addEventListener("click", onInputClick);
          input == null ? void 0 : input.removeEventListener("focus", onFocusCallback);
          input == null ? void 0 : input.addEventListener("focus", onFocusCallback);
          input == null ? void 0 : input.setAttribute("windpressbreakdance-variable-app", "listened");
          shouldReset = true;
        });
      });
      if (shouldReset) {
        focusedInput.value = null;
        tempInputValue.value = null;
      }
    }, 100);
  }
  let isObserverRunning = false;
  observe({
    selector: "div:has(>div.breakdance-add-panel)",
    options: {
      subtree: true,
      childList: true
    },
    callback() {
      if (isObserverRunning) {
        return;
      }
      isObserverRunning = true;
      addTriggers();
      setTimeout(() => {
        isObserverRunning = false;
      }, 100);
    }
  });
  addTriggers();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen.value) {
      isOpen.value = false;
    }
  });
  watch(isOpen, (value) => {
    variableApp.style.zIndex = value ? "calc(Infinity)" : "-1";
  });
  logger("Module loaded!", {
    module: "variable-picker"
  });
});
