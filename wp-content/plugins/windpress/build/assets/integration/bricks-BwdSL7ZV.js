const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-Bjw0gqJ0.css","../main-Cc2SfUr5.css","../main-CvOpmFB-.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../../chunks/preload-helper-BazNuh42.min.js";
import { l as logger } from "../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a, _b, _c, _d;
    while (!((_a = document.querySelector(".brx-body")) == null ? void 0 : _a.__vue_app__)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    while (document.getElementById("bricks-preloader")) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    while (!((_c = (_b = document.getElementById("bricks-builder-iframe")) == null ? void 0 : _b.contentDocument.querySelector(".brx-body")) == null ? void 0 : _c.__vue_app__)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const { brxIframe } = await __vitePreload(async () => {
      const { brxIframe: brxIframe2 } = await import("../constant-CThojYZy.js");
      return {
        brxIframe: brxIframe2
      };
    }, true ? [] : void 0, import.meta.url);
    logger("Loading modules...");
    await __vitePreload(() => import("../main-Orehojk2.js"), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
    await __vitePreload(() => import("../main-BONegtUY.js").then(async (m) => {
      await m.__tla;
      return m;
    }), true ? __vite__mapDeps([1]) : void 0, import.meta.url);
    await __vitePreload(() => import("../main-EYDEB9L9.js"), true ? [] : void 0, import.meta.url);
    await __vitePreload(() => import("../main-CUaTn7mw.js"), true ? [] : void 0, import.meta.url);
    if (Number((_d = brxIframe.contentWindow.windpress) == null ? void 0 : _d._tailwindcss_version) === 4) {
      await __vitePreload(() => import("../main-B1C7_dpg.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../main-DBwwF3LF.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? [] : void 0, import.meta.url);
      await __vitePreload(() => import("../main-BKd1DJDU.js").then(async (m) => {
        await m.__tla;
        return m;
      }), true ? __vite__mapDeps([2]) : void 0, import.meta.url);
    }
    logger("Modules loaded!");
  })();
})();
