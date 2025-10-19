import { internalMessage } from "./InternalMessage";
import { KEY_MESSAGE } from "./types";

describe("extractMessage(...)", () => {
  describe("Lanza un Error cuando", () => {
    test("El mensaje no es un Objeto", () => {
      const input = [1, 2, 3, 4];

      const output = "------------------------- Key no es Enum -----------------------------";

      expect(() => internalMessage.extractMessage(input)).toThrowError(output);
    });
    test("La clave del objeto no Corresponde con el Enum 'KEY_MESSAGE'", () => {
      const input = { INVALID_KEY: { url: "https://www.a.com" } };

      const output = "------------------------- Key no es Enum -----------------------------";

      expect(() => internalMessage.extractMessage(input)).toThrowError(output);
    });
  });

  describe("Con la accion 'NAVIGATION_SAME'", () => {
    const key = "NAVIGATION_SAME";
    test("Se retorna el tipo de accion y la data necesaria", () => {
      const msg = { url: "https://www.a.com/" };
      const input = { [key]: msg };

      const output = [KEY_MESSAGE.NAVIGATION_SAME, msg];

      expect(internalMessage.extractMessage(input)).toEqual(output);
    });
    test("Lanza Error cuando no se obtienen la data obligatoria o no es valida", () => {
      const input1 = { [key]: "https://www.a.com/" };
      const input2 = { [key]: { url: "www.a.com" } };

      const output = "------------- same [URL.canParse] --------------------";

      expect(() => internalMessage.extractMessage(input1)).toThrowError(output);
      expect(() => internalMessage.extractMessage(input2)).toThrowError(output);
    });
  });

  describe("Con la accion 'NAVIGATION_NEW'", () => {
    const key = "NAVIGATION_NEW";
    test("Se retorna el tipo de accion y la data necesaria", () => {
      const msg = { url: "https://www.a.com/", active: true };
      const input = { [key]: msg };

      const output = [KEY_MESSAGE.NAVIGATION_NEW, msg];

      expect(internalMessage.extractMessage(input)).toEqual(output);
    });
    test("Asignacion de valores default en dato opcionales invalidos", () => {
      const msgInput = { url: "https://www.a.com/" };
      const input = { [key]: msgInput };

      const msgOutput = { url: "https://www.a.com/", active: true };
      const output = [KEY_MESSAGE.NAVIGATION_NEW, msgOutput];

      expect(internalMessage.extractMessage(input)).toEqual(output);
    });
    test("Lanza Error cuando no se obtienen la data obligatoria o no es valida", () => {
      const input1 = { [key]: "https://www.a.com/" };
      const input2 = { [key]: { url: "www.a.com", active: true } };

      const output = "------------- new [URL.canParse] --------------------";

      expect(() => internalMessage.extractMessage(input1)).toThrowError(output);
      expect(() => internalMessage.extractMessage(input2)).toThrowError(output);
    });
  });
});

//TODO: SKIP ---> falta implementar mock
describe("requestNavigation(...)", () => {
  test("Lanza Error cuando el parametro 'url' no es una URL", () => {
    const INVALID_URL = "www.a.com";

    const output = "--------------- url ---------------";

    expect(() => internalMessage.requestNavigation(INVALID_URL, true)).toThrowError(output);
  });

  test.skip("Envia una peticion de tipo 'NAVIGATION_SAME' cuando 'isNewTab' === true", () => {
    const VALID_URL = "https://www.a.com";

    internalMessage.requestNavigation(VALID_URL, true);

    expect(1).toEqual(1);
  });
  test.skip("Envia una peticion de tipo 'NAVIGATION_NEW' cuando 'isNewTab' === false", () => {
    const VALID_URL = "https://www.a.com";

    internalMessage.requestNavigation(VALID_URL, true);

    expect(1).toEqual(1);
  });
});
