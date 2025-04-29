import { oxyIframe } from "./constant-DULjF_Zq.js";
import { d as decodeVFSContainer } from "./vfs-D01OmQx9.js";
import "../chunks/index-DmkUm1CH.min.js";
import { __tla as __tla_0 } from "./cssesc-DgwoVnGT.js";
import { __tla as __tla_1 } from "../chunks/index-DLCNveCc.min.js";
import { d as getVariableList } from "./intellisense-CjMxI9UR.js";
import { l as loadDesignSystem } from "./design-system-Z_JJTcO-.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "../chunks/preload-helper-BazNuh42.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-B8YHA8Ix.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-ChG-s8ET.js";
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
  async function mountVariablesStylesheet() {
    const vfsContainer = oxyIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
    const volume = decodeVFSContainer(vfsContainer.textContent);
    const variableLists = await getVariableList(await loadDesignSystem({
      volume
    }));
    let css = "";
    variableLists.forEach((variable) => {
      css += `--${variable.key.substring(2)}: ${variable.value};
`;
    });
    css = `@layer base { :root { ${css} } }`;
    let topStyle;
    if (document.head.querySelector("style#windpress-variables")) {
      topStyle = document.head.querySelector("style#windpress-variables");
    } else {
      topStyle = document.createElement("style");
      topStyle.id = "windpress-variables";
      document.head.appendChild(topStyle);
    }
    if (topStyle) {
      topStyle.textContent = css;
    }
    let iframeStyle;
    if (oxyIframe.contentWindow.document.head.querySelector("style#windpress-variables")) {
      iframeStyle = oxyIframe.contentWindow.document.head.querySelector("style#windpress-variables");
    } else {
      iframeStyle = oxyIframe.contentWindow.document.createElement("style");
      iframeStyle.id = "windpress-variables";
      oxyIframe.contentWindow.document.head.appendChild(iframeStyle);
    }
    if (iframeStyle) {
      iframeStyle.textContent = css;
    }
  }
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/autocomplete";
    const task = "windpress.code-editor.saved.done";
    if (data.source === source && data.task === task) {
      setTimeout(() => {
        mountVariablesStylesheet();
      }, 1e3);
    }
  });
  mountVariablesStylesheet();
  logger("Module loaded!", {
    module: "variables"
  });
});
