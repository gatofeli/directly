import { KEYWORD } from "../../../constants/default";
import { isValidURL } from "./isValidURL";

test("Debería retornar true cuando el input contiene esquema válido", () => {
  const INPUT = `https://www.example.es/result?q=${KEYWORD}`;

  expect(isValidURL(INPUT)).toBeTruthy();
});

test("en la validación deberían ignorarse los espacios en blanco de los extremos", () => {
  const INPUT = `    https://www.example.es/result?q=${KEYWORD}    `;

  expect(isValidURL(INPUT)).toBeTruthy();
});

describe("Debería retornar false cuando el input", () => {
  test("no es de tipo string", () => {
    const INPUT = new URL(`https://www.example.es/result?q=${KEYWORD}`);

    //@ts-expect-error
    expect(isValidURL(INPUT)).toBeFalsy();
  });
  test("no tiene un esquema válido para URL", () => {
    const INPUT = `www.example.es/result?q=${KEYWORD}`;

    expect(isValidURL(INPUT)).toBeFalsy();
  });
  test("tiene un protocolo distinto a https || https", () => {
    const INPUT = `tpc://www.example.es/result?q=${KEYWORD}`;

    expect(isValidURL(INPUT)).toBeFalsy();
  });
  test(`no contiene la keyword "${KEYWORD}" al menos una vez`, () => {
    const INPUT = "https://www.example.es/result?q=noKeyword";

    expect(isValidURL(INPUT)).toBeFalsy();
  });
});
