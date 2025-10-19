import { StorageDataURL, StorageType } from "../../src/utils/storage/type";

export type DatabasesURLMap = {
  OK: StorageDataURL[];

  ALERT_URL: StorageDataURL[];
  INVALID_DATA: StorageDataURL[];
  NAME_ID: StorageDataURL[];
  EMPTY: StorageDataURL[];
  UNDEFINED: undefined;
};
export type KeyDatabasesURL = keyof DatabasesURLMap;
export type GetFunction = (key?: keyof StorageType) => Promise<StorageType>;

/* --------------- TO DO --------------------
TODO: lanzamiento de errores REFACTORIZAR
TODO: Metodo set()
TODO: Implementar _config_
*/

const ALERT_URL = [
  { url: "https://www.noKeyword1.com", name: "keyword_1", id: 2 },
  { url: "https://www.noKeyword2.com/res?query=aaa", name: "keyword_2", id: 3 },
  { url: "https://www.succes.com/res?query=--shortcutSearchExtension--", name: "succes", id: 4 },
] as unknown as StorageDataURL[];
const INVALID_DATA = [
  "|------------------ [º_º] ------------------|",
  { url: "www.invalidURL.com", name: "invalid URL", id: 0 },
  {
    name: "succes 1",
    url: "https://www.a.com/results?search_query=--shortcutSearchExtension--",
    id: 1,
  },
  "|------------------ [º_º] ------------------|",
  {
    name: "succes 2",
    url: "https://www.a.com/results?search_query=--shortcutSearchExtension--",
    id: 1,
  },
  { ciudad: "barcelona", pais: "españa", id: 6 },
  "|------------------ [º_º] ------------------|",
] as unknown as StorageDataURL[];
const NAME_ID = [
  {
    name: "It is too long, cut, maximum 20 characters",
    url: "https://www.a.com/res?query=--shortcutSearchExtension--",
    id: 0,
  },
  {
    name: undefined,
    url: "https://www.a.com/res?query=--shortcutSearchExtension--",
    id: 1,
  },
  {
    name: "   Apply trim   ",
    url: "https://www.a.com/res?query=--shortcutSearchExtension--",
    id: 2,
  },
  {
    name: "Id repeat",
    url: "https://www.a.com/res?query=--shortcutSearchExtension--",
    id: 1,
  },
  {
    name: "without Id",
    url: "https://www.a.com/res?query=--shortcutSearchExtension--",
  },
] as unknown as StorageDataURL[];
const OK: StorageDataURL[] = [
  {
    name: "You",
    url: "https://www.you.com/results?search_query=--shortcutSearchExtension--",
    id: 0,
  },
  {
    name: "Spot",
    url: "https://www.spot.com/results?search_query=--shortcutSearchExtension--",
    id: 1,
  },
  {
    name: "Tw",
    url: "https://www.tw.com/results?search_query=--shortcutSearchExtension--",
    id: 2,
  },
  {
    name: "Ude",
    url: "https://www.ude.com/results?search_query=--shortcutSearchExtension--",
    id: 3,
  },
];
export const OPTIONAL_DATABASES_URL: DatabasesURLMap = {
  OK,
  ALERT_URL,
  INVALID_DATA,
  NAME_ID,
  EMPTY: [],
  UNDEFINED: undefined,
};

export const error_mock_validationDB = 'Necesitas preparar el mock de storage con el metodo: "mock_setDB"';

export const storage = {
  _mockCurrentDataURL: null as undefined | StorageDataURL[] | null,
  // _mockCurrentConfig: false,

  mock_setDB(dataURLs: KeyDatabasesURL) {
    this._mockCurrentDataURL = OPTIONAL_DATABASES_URL[dataURLs];
  },

  get: vi.fn<GetFunction>().mockImplementation((key?: keyof StorageType) => {
    return new Promise((resolve, rejects) => {
      const { _mockCurrentDataURL } = storage;

      if (_mockCurrentDataURL === null) {
        return rejects(error_mock_validationDB);
      }

      setTimeout(() => {
        if (typeof _mockCurrentDataURL === "undefined") {
          return resolve({});
        }

        const currentDatabase: StorageType = {
          _dataURLs_: _mockCurrentDataURL,
          _config_: undefined,
        };

        const result = key ? { [key]: currentDatabase[key] } : currentDatabase;
        return resolve(result);
      }, 10);
    });
  }),

  set: vi.fn(),
};
