import { KEYWORD } from "../../constants/default";
import { EXTENSION_KEYWORD_REGEX } from "../../constants/regex";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import { ApiError, ApiOperation } from "../../error/apiError";
import { retry } from "../retry";
import { sanitizeProviderList } from "./modules/sanitizedProviderList";
import { ProviderType } from "./type";

class Controller {
  canUrlOfProvider(url: string) {
    const errors: string[] = [];

    if (typeof url !== "string") {
      errors.push("La URL debe ser de tipo texto");
      return errors;
    }

    const trimmedURL = url.trim();

    if (!URL.canParse(trimmedURL)) {
      errors.push("El link debe ser una URL válida. Ejemplo: https://ejemplo.es/)");
    }

    if (!trimmedURL.startsWith("http://") && !trimmedURL.startsWith("https://")) {
      errors.push("Solo se admiten los protocolos http:// & https://");
    }

    if (!EXTENSION_KEYWORD_REGEX.test(trimmedURL)) {
      errors.push(`La URL debe contener al menos una vez la palabra clave: ${KEYWORD}`);
    }

    return errors;
  }

  async fetchProviders() {
    let fallback: ProviderType[] = [];

    try {
      const buffer = await this.getProviders();

      const { isOverwritten, providers } = sanitizeProviderList(buffer[STORAGE_KEYS.PROVIDERS]);
      fallback = providers;

      if (isOverwritten) {
        console.warn("[storage: provider list] Invalid schema detected - attempting self-heal");
        await this.setProviders(providers);
        console.info("[storage: provider list] Self-heal applied");
      }
      return providers;
    } catch (error) {
      const { operation, message } = error as ApiError;

      if (operation === ApiOperation.STORAGE_SET) {
        console.error("[storage] Self-heal failed - Chrome API error", error);
        throw new ApiError(message, operation, fallback, { cause: error });
      }

      throw error;
    }
  }

  async updateProviders(rawProviders: ProviderType[]) {
    const { providers, isOverwritten } = sanitizeProviderList(rawProviders);

    await this.setProviders(providers);

    if (isOverwritten) {
      console.info("[controller] Update provider list - Invalid schema detected, self-heal applied");
    }
  }

  private async setProviders(providers: ProviderType[]) {
    await retry(() => chrome.storage.local.set({ [STORAGE_KEYS.PROVIDERS]: providers }), ApiOperation.STORAGE_SET);
  }
  private async getProviders() {
    type StorageProviderType = Record<typeof STORAGE_KEYS.PROVIDERS, unknown>;

    return await retry(
      () => chrome.storage.local.get(STORAGE_KEYS.PROVIDERS) as Promise<StorageProviderType>,
      ApiOperation.STORAGE_GET,
    );
  }
}

export const controller = new Controller();
