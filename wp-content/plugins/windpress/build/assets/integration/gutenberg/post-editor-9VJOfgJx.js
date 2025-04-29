import { l as logger } from "../../logger-DmkfWO2A.js";
logger("Loading...");
(async () => {
  let rootContainer;
  let scriptElements;
  logger("waiting for the rootContainer...");
  while (!rootContainer) {
    rootContainer = document.querySelector('iframe[name="editor-canvas"]');
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  logger("finding WindPress script...");
  let timeoutOccurred = false;
  let timeout = setTimeout(() => {
    timeoutOccurred = true;
  }, 45e3);
  while (!timeoutOccurred) {
    scriptElements = document.querySelectorAll("script");
    scriptElements = Array.from(scriptElements).filter((scriptElement) => {
      let id = scriptElement.getAttribute("id");
      return id && (id.startsWith("windpress:") || id.startsWith("vite-client")) && !id.startsWith("windpress:integration-");
    });
    if (scriptElements.length > 0) {
      clearTimeout(timeout);
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (timeoutOccurred) {
    logger("time out! failed to find WindPress script");
    return;
  }
  logger("found WindPress script");
  let contentWindow = rootContainer.contentWindow || rootContainer;
  let contentDocument = rootContainer.contentDocument || contentWindow.document;
  while (!contentDocument.head) {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  logger("injecting WindPress script into the root container");
  let injectedScript = contentDocument.querySelectorAll("script");
  let isScriptInjected = Array.from(injectedScript).some((script) => {
    let id = script.getAttribute("id");
    return id && id.startsWith("windpress:");
  });
  if (!isScriptInjected) {
    logger("starting the root injection process...");
    scriptElements.forEach((scriptElement) => {
      contentDocument.head.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
    });
  } else {
    logger("WindPress script is already injected, skipping the injection process...");
  }
})();
