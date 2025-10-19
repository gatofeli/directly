import { isValidURL } from "./modules/isValidURL";
import { verificationAlias } from "./modules/verificationAlias";
import { SearchProviders, StorageType } from "./type";

class Controller {
  async getSearchProviders() {
    const { searchProviders }: StorageType = await chrome.storage.local.get("searchProviders");
    if (chrome.runtime.lastError) {
      //!-------------------------------------------- Error de API
    }

    const { providers, needsUpdate } = this.#sanitizeProviders(searchProviders);
    if (needsUpdate) {
      //!-------------------------------------------- Actualizar DB (providers)
    }

    return providers;
  }

  #sanitizeProviders(searchProviders: SearchProviders[]) {
    const providers: SearchProviders[] = [];
    let needsUpdate = false;

    if (!Array.isArray(searchProviders)) {
      needsUpdate = true;
      return { providers, needsUpdate }; //? --------- ¿o {providers: default} ?
    }

    searchProviders.forEach((provider) => {
      if (typeof provider !== "object") {
        needsUpdate = true;
        return;
      }

      if (!isValidURL(provider.url)) {
        needsUpdate = true;
        return;
      }

      const { alias, updateAlias } = verificationAlias(provider.alias);

      if (updateAlias) {
        needsUpdate = true;
      }

      const newProvider: SearchProviders = {
        alias,
        url: provider.url,
      };

      providers.push(newProvider);
    });

    return { providers, needsUpdate };
  }
}

export const controller = new Controller();
