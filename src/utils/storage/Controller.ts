import { STORAGE_KEYS } from "../constants/storageKeys";
import { isValidURL } from "./modules/isValidURL";
import { verificationAlias } from "./modules/verificationAlias";
import { ProviderType } from "./type";

class Controller {
  async getSearchProviders() {
    const storageProviders: { [STORAGE_KEYS.PROVIDERS]: ProviderType[] } = await chrome.storage.local.get([
      STORAGE_KEYS.PROVIDERS,
    ]);
    if (chrome.runtime.lastError) {
      //!-------------------------------------------- Error de API
    }

    const { providers, needsUpdate } = this.#sanitizeProviders(storageProviders[STORAGE_KEYS.PROVIDERS]);
    if (needsUpdate) {
      //!-------------------------------------------- Actualizar DB (providers)
    }

    return providers;
  }

  #sanitizeProviders(searchProviders: ProviderType[]) {
    const providers: ProviderType[] = [];
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

      const newProvider: ProviderType = {
        alias,
        url: provider.url,
      };

      providers.push(newProvider);
    });

    return { providers, needsUpdate };
  }
}

export const controller = new Controller();
