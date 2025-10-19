export type StorageDataURL = {
  url: string;
  name: string;
  id: number;
};

export type StorageType = {
  _dataURLs_?: StorageDataURL[];
  _config_?: { pueba: string };
};

type ProcessedDataURLAlertProperty = {
  alert: boolean;
};

export type ProcessedDataURL = StorageDataURL & ProcessedDataURLAlertProperty;
