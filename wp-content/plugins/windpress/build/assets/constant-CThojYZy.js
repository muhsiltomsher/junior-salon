import { c as createVirtualRef } from "./virtualRef-DG1xZSxh.js";
import "../chunks/index-B5VrHBO0.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/runtime-core.esm-bundler-LUlud-H8.min.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
const brx = document.querySelector(".brx-body");
const brxGlobalProp = document.querySelector(".brx-body").__vue_app__.config.globalProperties;
const brxIframe = document.getElementById("bricks-builder-iframe");
const brxIframeGlobalProp = brxIframe.contentDocument.querySelector(".brx-body").__vue_app__.config.globalProperties;
const { getVirtualRef: settingsState } = createVirtualRef({}, {
  persist: "windpress.bricks.settings.state"
});
export {
  brx,
  brxGlobalProp,
  brxIframe,
  brxIframeGlobalProp,
  settingsState
};
