// export type StorageType = {
//   _dataURLs_?: StorageDataURL[];
//   _config_?: { pueba: string };
// };

// type ProcessedDataURLAlertProperty = {
//   alert: boolean;
// };

// export type ProcessedDataURL = StorageDataURL & ProcessedDataURLAlertProperty;

import { STORAGE_KEYS } from "../constants/storageKeys";

export type ProviderType = {
  url: string;
  alias: string;
};
export type ConfigurationType = {};

export type StorageType = {
  [STORAGE_KEYS.PROVIDERS]: ProviderType[];
  [STORAGE_KEYS.CONFIG]: ConfigurationType;
};
