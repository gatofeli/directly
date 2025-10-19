import { buildSearchUrl } from "./buildSearchUrl";

test("Cuando la 'query' sea un string vacio se retornara el origin de la 'url'", () => {
  const rawURL =
    "https://www.aaa.es/?a=--shortcutSearchExtension--&b=--shortcutSearchExtension&c=shortcutSearchExtension--&d=shortcutSearchExtension";
  const rawQuery = "";
  const output = "https://www.aaa.es";

  expect(buildSearchUrl(rawQuery, rawURL)).toBe(output);
});

test("Cuando la 'query' sea un string lleno se retornara una 'url' con la 'query'", () => {
  const rawURL =
    "https://www.aaa.es/?a=shortcutSearchExtension--&b=--shortcutSearchExtension--&c=shortcutSearchExtension&d=--shortcutSearchExtension";
  const rawQuery = "Hello";
  const output = "https://www.aaa.es/?a=Hello&b=Hello&c=Hello&d=Hello";

  expect(buildSearchUrl(rawQuery, rawURL)).toBe(output);
});

test.skip("Cuando la url resultante tenga un length mayor a 2000 caracteres .....");
