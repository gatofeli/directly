import { STORAGE_KEYS } from "../constants/storageKeys";
import { ApiError, ApiOperation } from "../error/apiError";
import { MESSAGE_UNKNOWN_ERROR, retry } from "./retry";

const RESOLVE_GET = {
  [STORAGE_KEYS.PROVIDERS]: [
    { alias: "AAA", url: "https://www.aaa.com/" },
    { alias: "BBB", url: "https://www.bbb.com/" },
    { alias: "CCC", url: "https://www.ccc.com/" },
  ],
};
const INPUT_SET = {
  [STORAGE_KEYS.PROVIDERS]: [
    { alias: "XXX", url: "https://www.xxx.com/" },
    { alias: "YYY", url: "https://www.yyy.com/" },
    { alias: "ZZZ", url: "https://www.zzz.com/" },
  ],
};
const RESOLVE_SET = undefined;

beforeEach(() => {
  vi.resetAllMocks();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe("Petición establecida", () => {
  test("antes del ultimo intento (inferior a 3)", async () => {
    chrome.storage.local.get
      //@ts-ignore
      .mockResolvedValue(RESOLVE_GET);

    const promise = retry(
      () => chrome.storage.local.get(STORAGE_KEYS.PROVIDERS) as Promise<Record<typeof STORAGE_KEYS.PROVIDERS, unknown>>,
      ApiOperation.STORAGE_GET,
    );
    await vi.runAllTimersAsync();

    await expect(promise).resolves.toEqual(RESOLVE_GET);

    //--------------------------------------------------------------
    expect(chrome.storage.local.get).toHaveBeenCalledTimes(1);
  });

  test("último intento (3 intento)", async () => {
    chrome.storage.local.get
      //@ts-ignore
      .mockRejectedValueOnce(Error("1 Error"))
      .mockRejectedValueOnce(Error("2 Error"))
      .mockResolvedValue(RESOLVE_GET);

    const promise = retry(
      () => chrome.storage.local.get(STORAGE_KEYS.PROVIDERS) as Promise<Record<typeof STORAGE_KEYS.PROVIDERS, unknown>>,
      ApiOperation.STORAGE_GET,
    );
    await vi.runAllTimersAsync();

    await expect(promise).resolves.toEqual(RESOLVE_GET);

    //--------------------------------------------------------------
    expect(chrome.storage.local.get).toHaveBeenCalledTimes(3);
  });
});
describe("Petición establecida", () => {
  test("con retorno de datos", async () => {
    chrome.storage.local.get
      //@ts-ignore
      .mockResolvedValue(RESOLVE_GET);

    const promise = retry(
      () => chrome.storage.local.get(STORAGE_KEYS.PROVIDERS) as Promise<Record<typeof STORAGE_KEYS.PROVIDERS, unknown>>,
      ApiOperation.STORAGE_GET,
    );
    await vi.runAllTimersAsync();

    await expect(promise).resolves.toEqual(RESOLVE_GET);

    //--------------------------------------------------------------
    expect(chrome.storage.local.get).toHaveBeenCalledTimes(1);
  });

  test("sin retorno de datos", async () => {
    chrome.storage.local.set
      //@ts-ignore
      .mockRejectedValueOnce(Error("1 Error"))
      .mockResolvedValue();

    const promise = retry(() => chrome.storage.local.set(INPUT_SET), ApiOperation.STORAGE_SET);
    await vi.runAllTimersAsync();

    await expect(promise).resolves.toEqual(RESOLVE_SET);

    //--------------------------------------------------------------
    expect(chrome.storage.local.set).toHaveBeenCalledTimes(2);
  });
});

describe("Petición fallida, se generará un ApiError", () => {
  test("al fallar la peticion en su último intento (3 intento)", async () => {
    chrome.storage.local.set
      //@ts-ignore
      .mockRejectedValueOnce(Error("1 Error"))
      .mockRejectedValueOnce(Error("2 Error"))
      .mockRejectedValueOnce(Error("3 Error"));

    const promise = retry(() => chrome.storage.local.set(INPUT_SET), ApiOperation.STORAGE_SET);

    const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
    const expect_2 = expect(promise).rejects.toHaveProperty("message", "3 Error");
    await vi.runAllTimersAsync();

    await expect_1;
    await expect_2;

    //--------------------------------------------------------------
    expect(chrome.storage.local.set).toHaveBeenCalledTimes(3);
  });

  describe("el tipo de petición estará declarado en el ApiError y será un", () => {
    test("ApiOperation.STORAGE_GET, cuando sí se espera retorno de datos", async () => {
      chrome.storage.local.get
        //@ts-ignore
        .mockRejectedValueOnce(Error("1 Error"))
        .mockRejectedValueOnce(Error("2 Error"))
        .mockRejectedValueOnce(Error("3 Error"));

      const promise = retry(
        () =>
          chrome.storage.local.get(STORAGE_KEYS.PROVIDERS) as Promise<Record<typeof STORAGE_KEYS.PROVIDERS, unknown>>,
        ApiOperation.STORAGE_GET,
      );

      const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
      const expect_2 = expect(promise).rejects.toHaveProperty("message", "3 Error");
      const expect_3 = expect(promise).rejects.toHaveProperty("operation", ApiOperation.STORAGE_GET);
      await vi.runAllTimersAsync();

      await expect_1;
      await expect_2;
      await expect_3;

      //--------------------------------------------------------------
      expect(chrome.storage.local.get).toHaveBeenCalledTimes(3);
    });
    test("ApiOperation.STORAGE_SET, cuando no se espera retorno de datos", async () => {
      chrome.storage.local.set
        //@ts-ignore
        .mockRejectedValueOnce(Error("1 Error"))
        .mockRejectedValueOnce(Error("2 Error"))
        .mockRejectedValueOnce(Error("3 Error"));

      const promise = retry(() => chrome.storage.local.set(INPUT_SET), ApiOperation.STORAGE_SET);

      const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
      const expect_2 = expect(promise).rejects.toHaveProperty("message", "3 Error");
      const expect_3 = expect(promise).rejects.toHaveProperty("operation", ApiOperation.STORAGE_SET);
      await vi.runAllTimersAsync();

      await expect_1;
      await expect_2;
      await expect_3;

      //--------------------------------------------------------------
      expect(chrome.storage.local.set).toHaveBeenCalledTimes(3);
    });
  });

  test("Se generará un mensaje de 'Error desconocido' cuando la API rechaza sin retornar una instancia de Error", async () => {
    const REJECTION_MSG = "This rejection does NOT return an Error Instance";

    chrome.storage.local.set
      //@ts-ignore
      .mockRejectedValueOnce(Error("1 Error"))
      .mockRejectedValueOnce(Error("2 Error"))
      .mockRejectedValueOnce(REJECTION_MSG);

    const promise = retry(() => chrome.storage.local.set(INPUT_SET), ApiOperation.STORAGE_SET);

    const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
    const expect_2 = expect(promise).rejects.toHaveProperty("message", MESSAGE_UNKNOWN_ERROR);
    const expect_3 = expect(promise).rejects.toHaveProperty("cause", REJECTION_MSG);
    await vi.runAllTimersAsync();

    await expect_1;
    await expect_2;
    await expect_3;

    //--------------------------------------------------------------
    expect(chrome.storage.local.set).toHaveBeenCalledTimes(3);
  });
});
