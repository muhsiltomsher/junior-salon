import { e as el } from "../chunks/index-DmkUm1CH.min.js";
import { l as loadModule } from "./cssesc-DgwoVnGT.js";
import { p as preprocess, l as loadStylesheet } from "./pre-process-ChG-s8ET.js";
async function loadDesignSystem({ entrypoint = "/main.css", volume = {}, ...opts } = {}) {
  opts = { entrypoint, volume, ...opts };
  opts.volume[opts.entrypoint] = (await preprocess(opts)).css;
  return el(opts.volume[opts.entrypoint], {
    ...opts,
    loadModule: async (modulePath, base, resourceHint) => loadModule(modulePath, base, resourceHint, opts.volume),
    loadStylesheet: async (id, base) => loadStylesheet(id, base, opts.volume)
  });
}
export {
  loadDesignSystem as l
};
