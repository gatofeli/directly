import { ProviderType } from "../type";
import { isValidURL } from "./isValidURL";
import { normalizeAlias } from "./normalizeAlias";

export function sanitizeProviderList(rawProviders: unknown) {
  const providers: ProviderType[] = [];
  let isOverwritten = false;

  if (!Array.isArray(rawProviders)) {
    isOverwritten = true;
    return { providers, isOverwritten };
  }

  rawProviders.forEach((provider) => {
    if (typeof provider !== "object" || provider == undefined) {
      isOverwritten = true;
      return;
    }

    if (!isValidURL(provider.url)) {
      isOverwritten = true;
      return;
    }

    const normalizedURL = provider.url.trim();

    if (provider.url !== normalizedURL) {
      isOverwritten = true;
    }

    const { normalizedAlias, isUpdateAlias } = normalizeAlias(provider.alias);

    if (isUpdateAlias) {
      isOverwritten = true;
    }

    const newProvider: ProviderType = {
      alias: normalizedAlias,
      url: normalizedURL,
    };

    providers.push(newProvider);
  });

  return { providers, isOverwritten };
}
