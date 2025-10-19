import { KEYWORD, NAME_EXTENSION } from "../../constants/default";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import { ApiError, ApiOperation } from "../../error/apiError";
import { controller } from "./Controller";

beforeEach(() => {
  vi.resetAllMocks();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe("Controller", () => {
  describe("canUrlOfProvider", () => {
    test("debería retornar [] cuando el input tiene esquema válido", () => {
      const INPUT = `https://ejemplo.es/res?q=${KEYWORD}`;

      const result = controller.canUrlOfProvider(INPUT);

      expect(result).toEqual([]);
    });
    test("en la validación deberían ignorarse los espacios en blanco de los extremos", () => {
      const INPUT = `   https://ejemplo.es/res?q=${KEYWORD}   `;

      const result = controller.canUrlOfProvider(INPUT);

      expect(result).toEqual([]);
    });

    describe("debería retornar un array con contenido cuando", () => {
      const MSG_TYPE = "La URL debe ser de tipo texto";
      const MSG_PARSE_URL = "El link debe ser una URL válida. Ejemplo: https://ejemplo.es/)";
      const MSG_PROTOCOL = "Solo se admiten los protocolos http:// & https://";
      const MSG_KEYWORD = `La URL debe contener al menos una vez la palabra clave: ${KEYWORD}`;

      test("el input no es de tipo string", () => {
        const INPUT_1 = undefined;

        //@ts-expect-error
        const result_1 = controller.canUrlOfProvider(INPUT_1);

        expect(result_1[0]).toBe(MSG_TYPE);

        //---------------------------------------------------------------

        const INPUT_2 = new URL(`https://ejemplo.es/res?q=${KEYWORD}`);

        //@ts-expect-error
        const result_2 = controller.canUrlOfProvider(INPUT_2);

        expect(result_2[0]).toBe(MSG_TYPE);
      });
      test("el input no es una URL válida", () => {
        const INPUT = "undefined";

        const result = controller.canUrlOfProvider(INPUT);

        expect(result[0]).toBe(MSG_PARSE_URL);
      });
      test("el input contiene un protocolo distinto a: http:// || https://", () => {
        const INPUT = "file://ejemplo.es/res/";

        const result = controller.canUrlOfProvider(INPUT);

        expect(result[0]).toBe(MSG_PROTOCOL);
      });
      test(`el input no contiene almenos una vez la keyword "${NAME_EXTENSION}"`, () => {
        const INPUT = "https://ejemplo.es/res/";

        const result = controller.canUrlOfProvider(INPUT);

        expect(result[0]).toBe(MSG_KEYWORD);
      });
      test(`debería no acumular errores cuando el error principal sea de tipado`, () => {
        const INPUT = 23;

        //@ts-expect-error
        const result = controller.canUrlOfProvider(INPUT);

        expect(result).toEqual([MSG_TYPE]);
      });
      test(`debería poder acumular errores cuando el error principal no sea de tipado`, () => {
        const INPUT = "ejemplo";

        const result = controller.canUrlOfProvider(INPUT);

        expect(result).toEqual([MSG_PARSE_URL, MSG_PROTOCOL, MSG_KEYWORD]);
      });
    });
  });

  describe("fetchProviders", () => {
    test("debería retornar la data sanitizada y no sobrescribir la DB cuando la respuesta tiene esquema válido", async () => {
      const listOfProviders = [
        { alias: "AAA", url: `https://www.aaa.com/results?search_query=${KEYWORD}` },
        { alias: "bbb", url: `https://www.bbb.com/results?search_query=${KEYWORD}` },
        { alias: "ccc", url: `https://www.ccc.com/results?search_query=${KEYWORD}` },
      ];

      //@ts-ignore
      chrome.storage.local.get.mockResolvedValue({ [STORAGE_KEYS.PROVIDERS]: listOfProviders });

      const promise = controller.fetchProviders();
      await vi.runAllTimersAsync();

      await expect(promise).resolves.toEqual(listOfProviders);

      //--------------------------------------------------------------
      expect(chrome.storage.local.get).toHaveBeenCalledTimes(1);
      expect(chrome.storage.local.set).toHaveBeenCalledTimes(0);
    });
    test("debería sobrescribir la DB y retornar la data sanitizada cuando la respuesta incumple el esquema", async () => {
      //@ts-ignore
      chrome.storage.local.get.mockResolvedValue({
        [STORAGE_KEYS.PROVIDERS]: [
          { alias: "   trim   ", url: `https://aaaa/res?q=${KEYWORD}` },
          { alias: "alias válido", url: `https://bbbb/res?q=${KEYWORD}` },
        ],
      });

      //@ts-ignore
      chrome.storage.local.set.mockResolvedValue();

      const promise = controller.fetchProviders();
      await vi.runAllTimersAsync();

      await expect(promise).resolves.toEqual([
        { alias: "trim", url: `https://aaaa/res?q=${KEYWORD}` },
        { alias: "alias válido", url: `https://bbbb/res?q=${KEYWORD}` },
      ]);

      //@ts-ignore
      expect(chrome.storage.local.set.mock.calls[0][0]).toEqual({
        [STORAGE_KEYS.PROVIDERS]: [
          { alias: "trim", url: `https://aaaa/res?q=${KEYWORD}` },
          { alias: "alias válido", url: `https://bbbb/res?q=${KEYWORD}` },
        ],
      });
    });
    test("debería propagar un ApiError con propiedades operation=STORAGE_GET & fallback=undefined cuando se rechaza la petición de obtener data", async () => {
      //@ts-ignore
      chrome.storage.local.get.mockRejectedValue(new Error("Ejemplo de error"));

      const promise = controller.fetchProviders();

      const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
      const expect_2 = expect(promise).rejects.toHaveProperty("message", "Ejemplo de error");
      const expect_3 = expect(promise).rejects.toHaveProperty("operation", ApiOperation.STORAGE_GET);
      const expect_4 = expect(promise).rejects.toHaveProperty("fallback", undefined);
      await vi.runAllTimersAsync();

      await expect_1;
      await expect_2;
      await expect_3;
      await expect_4;
      //--------------------------------------------------------------
      expect(chrome.storage.local.get).toHaveBeenCalledTimes(3);
      expect(chrome.storage.local.set).toHaveBeenCalledTimes(0);
    });
    test("debería propagar ApiError con propiedades operation=STORAGE_SET & fallback=sanitizados cuando se rechaza la petición de sobrescritura de la DB", async () => {
      const RAW_LIST = [
        { alias: "   trim   ", url: `https://aaaa/res?q=${KEYWORD}` },
        { alias: "alias válido", url: `https://bbbb/res?q=${KEYWORD}` },
      ];
      const SANITIZED_LIST = [
        { alias: "trim", url: `https://aaaa/res?q=${KEYWORD}` },
        { alias: "alias válido", url: `https://bbbb/res?q=${KEYWORD}` },
      ];

      //@ts-ignore
      chrome.storage.local.get.mockResolvedValue({ [STORAGE_KEYS.PROVIDERS]: RAW_LIST });
      //@ts-ignore
      chrome.storage.local.set.mockRejectedValue(new Error("Ejemplo de error"));

      const promise = controller.fetchProviders();

      const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
      const expect_2 = expect(promise).rejects.toHaveProperty("message", "Ejemplo de error");
      const expect_3 = expect(promise).rejects.toHaveProperty("operation", ApiOperation.STORAGE_SET);
      const expect_4 = expect(promise).rejects.toHaveProperty("fallback", SANITIZED_LIST);
      await vi.runAllTimersAsync();

      await expect_1;
      await expect_2;
      await expect_3;
      await expect_4;
      //--------------------------------------------------------------
      expect(chrome.storage.local.get).toHaveBeenCalledTimes(1);
      expect(chrome.storage.local.set).toHaveBeenCalledTimes(3);
    });
  });

  describe("updateProviders", () => {
    const spy = vi.spyOn(console, "info");

    const INVALID_RAW_LIST = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "bbb", url: "INVALID_URL" },
      { alias: "ccc", url: `https://www.ccc.com/res?q=${KEYWORD}` },
    ];
    const VALID_RAW_LIST = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "bbb", url: `https://www.bbb.com/res?q=${KEYWORD}` },
      { alias: "ccc", url: `https://www.ccc.com/res?q=${KEYWORD}` },
    ];
    const SANITIZED_LIST = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "ccc", url: `https://www.ccc.com/res?q=${KEYWORD}` },
    ];

    test("debería sanitizar los datos de entrada y enviar a la API el payload sanitizado", async () => {
      //@ts-ignore
      chrome.storage.local.set.mockResolvedValue();

      await vi.runAllTimersAsync();
      await controller.updateProviders(VALID_RAW_LIST);

      //@ts-ignore
      expect(chrome.storage.local.set.mock.calls[0][0]).toEqual({ [STORAGE_KEYS.PROVIDERS]: VALID_RAW_LIST });
    });
    test("debería emitir 'console.info' cuando la sanitización produce cambios", async () => {
      //@ts-ignore
      chrome.storage.local.set.mockResolvedValue();

      const promise = controller.updateProviders(INVALID_RAW_LIST);
      await vi.runAllTimersAsync();
      await promise;

      //@ts-ignore
      expect(chrome.storage.local.set.mock.calls[0][0]).toEqual({ [STORAGE_KEYS.PROVIDERS]: SANITIZED_LIST });
      expect(spy).toHaveBeenCalledTimes(1);
    });
    test("no debería emitir 'console.info' cuando la sanitización no produce cambios", async () => {
      //@ts-ignore
      chrome.storage.local.set.mockResolvedValue();

      const promise = controller.updateProviders(VALID_RAW_LIST);
      await vi.runAllTimersAsync();
      await promise;

      //@ts-ignore
      expect(chrome.storage.local.set.mock.calls[0][0]).toEqual({ [STORAGE_KEYS.PROVIDERS]: VALID_RAW_LIST });
      expect(spy).not.toHaveBeenCalled();
    });
    test("debería propagar error cuando la API rechaza la actualización", async () => {
      //@ts-ignore
      chrome.storage.local.set.mockRejectedValue(new Error("Ejemplo de Error"));

      const promise = controller.updateProviders(VALID_RAW_LIST);

      const expect_1 = expect(promise).rejects.toBeInstanceOf(ApiError);
      const expect_2 = expect(promise).rejects.toThrow(ApiError);
      await vi.runAllTimersAsync();

      await expect_1;
      await expect_2;
    });
  });
});
