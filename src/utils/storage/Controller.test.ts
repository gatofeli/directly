import { storage } from "./Controller";
import { ProcessedDataURL } from "./type";

describe("getURL(...)", () => {
  //TODO---------------------------------------------------------------
  test.skip("Cuando la API da Error ...ocurre...");

  test("Retorna un Array de objetos", async () => {
    // @ts-expect-error: Mock configuration collides with chrome typing
    chrome.storage.local.mock_setDB("OK");

    const output = [
      {
        name: "You",
        url: "https://www.you.com/results?search_query=--shortcutSearchExtension--",
        id: 0,
        alert: false,
      },
      {
        name: "Spot",
        url: "https://www.spot.com/results?search_query=--shortcutSearchExtension--",
        id: 1,
        alert: false,
      },
      {
        name: "Tw",
        url: "https://www.tw.com/results?search_query=--shortcutSearchExtension--",
        id: 2,
        alert: false,
      },
      {
        name: "Ude",
        url: "https://www.ude.com/results?search_query=--shortcutSearchExtension--",
        id: 3,
        alert: false,
      },
    ];

    expect(await storage.getURL()).toEqual(output);
  });
  test("Retorna un Array vacio cuando '_dataURLs_' esta vacia", async () => {
    // @ts-expect-error: Mock configuration collides with chrome typing
    chrome.storage.local.mock_setDB("EMPTY");

    const output: ProcessedDataURL[] = [];

    expect(await storage.getURL()).toEqual(output);
  });
  test("Se añade una alerta al objeto cuando su url no contiene la palabra clave", async () => {
    // @ts-expect-error: Mock configuration collides with chrome typing
    chrome.storage.local.mock_setDB("ALERT_URL");

    const output_url: ProcessedDataURL[] = [
      { url: "https://www.noKeyword1.com", name: "keyword_1", id: 2, alert: true },
      { url: "https://www.noKeyword2.com/res?query=aaa", name: "keyword_2", id: 3, alert: true },
      { url: "https://www.succes.com/res?query=--shortcutSearchExtension--", name: "succes", id: 4, alert: false },
    ];

    expect(await storage.getURL()).toEqual(output_url);
  });

  describe("Retorna Array manipulado y actualiza la DB cuando", () => {
    test("_dataURLs_ no Existe o es de un tipo invalido", async () => {
      // @ts-expect-error: Mock configuration collides with chrome typing
      chrome.storage.local.mock_setDB("UNDEFINED");

      const output: ProcessedDataURL[] = [];

      expect(await storage.getURL()).toEqual(output);
    });
    test("Hay algun objeto invalido eliminado", async () => {
      // @ts-expect-error: Mock configuration collides with chrome typing
      chrome.storage.local.mock_setDB("INVALID_DATA");

      const output_invalidData: ProcessedDataURL[] = [
        {
          name: "succes 1",
          url: "https://www.a.com/results?search_query=--shortcutSearchExtension--",
          id: 1,
          alert: false,
        },
        {
          name: "succes 2",
          url: "https://www.a.com/results?search_query=--shortcutSearchExtension--",
          id: 2,
          alert: false,
        },
      ];

      expect(await storage.getURL()).toEqual(output_invalidData);
    });
    test("Hay alguna propiedad 'name' o 'id' modificada", async () => {
      // @ts-expect-error: Mock configuration collides with chrome typing
      chrome.storage.local.mock_setDB("NAME_ID");

      const output_nameId: ProcessedDataURL[] = [
        {
          name: "It is too long, cut,",
          url: "https://www.a.com/res?query=--shortcutSearchExtension--",
          id: 0,
          alert: false,
        },
        {
          name: "[º_º]",
          url: "https://www.a.com/res?query=--shortcutSearchExtension--",
          id: 1,
          alert: false,
        },
        {
          name: "Apply trim",
          url: "https://www.a.com/res?query=--shortcutSearchExtension--",
          id: 2,
          alert: false,
        },
        {
          name: "Id repeat",
          url: "https://www.a.com/res?query=--shortcutSearchExtension--",
          id: 3,
          alert: false,
        },
        {
          name: "without Id",
          url: "https://www.a.com/res?query=--shortcutSearchExtension--",
          id: 4,
          alert: false,
        },
      ];

      expect(await storage.getURL()).toEqual(output_nameId);
    });
  });
});
