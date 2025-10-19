// export type StorageType = {
//   _dataURLs_?: StorageDataURL[];
//   _config_?: { pueba: string };
// };

// type ProcessedDataURLAlertProperty = {
//   alert: boolean;
// };

// export type ProcessedDataURL = StorageDataURL & ProcessedDataURLAlertProperty;

export type SearchProviders = {
  url: string;
  alias: string;
};

export type StorageType = {
  searchProviders: SearchProviders[];
  _config_?: { pueba: string };
};
