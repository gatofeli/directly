import { DEFAULT_ALIAS, KEYWORD } from "../../../constants/default";
import { ProviderType } from "../type";
import { sanitizeProviderList } from "./sanitizedProviderList";

test("debería retornar { isOverwritten: false, providers: intacta } cuando el input tiene esquema válido", () => {
  const INPUT = [
    { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
    { alias: "bbb", url: `http://www.bbbb.com/res?q=${KEYWORD}` },
    { alias: "ccc", url: `https://www.ccc.com/res?q=${KEYWORD}` },
  ];

  const result = sanitizeProviderList(INPUT);

  expect(result).toHaveProperty("isOverwritten", false);
  expect(result).toHaveProperty("providers", INPUT);
});

describe("cuando el input tiene esquema inválido (debe isOverwritten=true)", () => {
  test("debería retornar providers=[] cuando el input no es un Array", () => {
    const OUTPUT: ProviderType[] = [];

    const INPUT_1 = {
      invalid: [
        { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
        { alias: "bbb", url: `http://www.bbbb.com/res?q=${KEYWORD}` },
        { alias: "ccc", url: `https://www.ccc.com/res?q=${KEYWORD}` },
      ],
    };

    const result_1 = sanitizeProviderList(INPUT_1);

    expect(result_1).toHaveProperty("isOverwritten", true);
    expect(result_1).toHaveProperty("providers", OUTPUT);

    //---------------------------------------------------------

    const INPUT_2 = undefined;

    const result_2 = sanitizeProviderList(INPUT_2);

    expect(result_2).toHaveProperty("isOverwritten", true);
    expect(result_2).toHaveProperty("providers", OUTPUT);
  });
  test("debería excluir el índice cuya estructura/tipo no es válido", () => {
    const OUTPUT: ProviderType[] = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "bbb", url: `http://www.bbbb.com/res?q=${KEYWORD}` },
      { alias: "ccc", url: `http://www.cccc.com/res?q=${KEYWORD}` },
    ];

    const INPUT = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      null,
      { alias: "bbb", url: `http://www.bbbb.com/res?q=${KEYWORD}` },
      () => undefined,
      3,
      { alias: "ccc", url: `http://www.cccc.com/res?q=${KEYWORD}` },
      "http://xxxxxxxxxxxxx",
    ];

    const result = sanitizeProviderList(INPUT);

    expect(result).toHaveProperty("isOverwritten", true);
    expect(result).toHaveProperty("providers", OUTPUT);
  });
  test("debería excluir el índice con propiedad 'url' que sea inválido", () => {
    const OUTPUT: ProviderType[] = [{ alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` }];

    const INPUT = [
      { alias: "AAA", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "invalid", url: `${KEYWORD}` },
      { alias: "invalid", url: `file://www.xxx.com/res?q=${KEYWORD}` },
      { alias: "invalid", url: `www.bbbb.com/res?q=${KEYWORD}` },
      { alias: "invalid", url: "http://www.cccc.com/res?q=NO_KEYWORD" },
    ];

    const result = sanitizeProviderList(INPUT);

    expect(result).toHaveProperty("isOverwritten", true);
    expect(result).toHaveProperty("providers", OUTPUT);
  });
  test("debería normalizar la propiedad 'alias' del indice cuando es inválida", () => {
    const OUTPUT: ProviderType[] = [
      { alias: "valid", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "trim", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "a".repeat(20), url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: DEFAULT_ALIAS, url: `https://www.aaa.com/res?q=${KEYWORD}` },
    ];

    const INPUT = [
      { alias: "valid", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "  trim  ", url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: "a".repeat(21), url: `https://www.aaa.com/res?q=${KEYWORD}` },
      { alias: " ", url: `https://www.aaa.com/res?q=${KEYWORD}` },
    ];

    const result = sanitizeProviderList(INPUT);

    expect(result).toHaveProperty("isOverwritten", true);
    expect(result).toHaveProperty("providers", OUTPUT);
  });
  test("debería normalizar la propiedad 'url' del indice aplicando trim cuando ésta tiene espacios en los extremos", () => {
    const OUTPUT: ProviderType[] = [{ alias: "aaa", url: `https://www.aaa.com/res?q=${KEYWORD}` }];

    const INPUT = [{ alias: "aaa", url: ` https://www.aaa.com/res?q=${KEYWORD} ` }];

    const result = sanitizeProviderList(INPUT);

    expect(result).toHaveProperty("isOverwritten", true);
    expect(result).toHaveProperty("providers", OUTPUT);
  });
});
