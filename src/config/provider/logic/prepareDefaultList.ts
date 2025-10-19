import { ProviderType } from "@utils/lib/storage/type";
import { DEFAULT_PROVIDER } from "../../../utils/constants/listOfDefaultProvider";

export const prepareDefaultList = (enabledList: ProviderType[]) => {
  const enabledSet = new Set(enabledList.map(({ url }) => url));
  const newDefaultList: DefaultList = {};

  for (const [category, items] of Object.entries(DEFAULT_PROVIDER)) {
    const newArrayItems = items.map((rawProvider) => {
      const newProvider = {
        alias: rawProvider.alias,
        url: rawProvider.url,
        isEnabled: enabledSet.has(rawProvider.url),
      };
      return newProvider;
    });

    newDefaultList[category] = newArrayItems;
  }

  return Object.entries(newDefaultList);
};

export type DefaultList = {
  [key: string]: {
    url: string;
    alias: string;
    isEnabled: Boolean;
  }[];
};
