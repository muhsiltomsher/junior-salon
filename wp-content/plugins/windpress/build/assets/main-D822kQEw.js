import { l as logger } from "./logger-DmkfWO2A.js";
const channel = new BroadcastChannel("windpress");
(function() {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    const response = await originalFetch(...args);
    if (new URL(args[0]).searchParams.get("_breakdance_doing_ajax") === "yes") {
      const payload = Object.fromEntries(args[1].body.entries());
      if (response.ok && response.status === 200 && payload.action === "breakdance_save") {
        channel.postMessage({
          task: "generate-cache",
          source: "windpress/integration",
          target: "windpress/compiler",
          data: {
            kind: "incremental",
            incremental: {
              providers: [
                "breakdance"
              ]
            }
          }
        });
      }
    }
    return response;
  };
})();
logger("Module loaded!", { module: "generate-cache" });
