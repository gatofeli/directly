import { DEFAULT_ALIAS, MAX_LENGTH_ALIAS } from "../../../constants/default";
import { normalizeAlias } from "./normalizeAlias";

test("Debería retornar { isUpdateAlias: false, normalizedAlias: input } cuando el input tiene esquema válido", () => {
  const INPUT = "Ejemplo de Alias";

  const result = normalizeAlias(INPUT);

  expect(result).toHaveProperty("isUpdateAlias", false);
  expect(result).toHaveProperty("normalizedAlias", INPUT);
});

test("Debería retornar { isUpdateAlias: true, normalizedAlias: default_alias } cuando el input no es un tipo string", () => {
  const INPUT_1 = undefined;

  //@ts-expect-error
  const result_1 = normalizeAlias(INPUT_1);

  expect(result_1).toHaveProperty("isUpdateAlias", true);
  expect(result_1).toHaveProperty("normalizedAlias", DEFAULT_ALIAS);

  //--------------------------------------------------------

  const INPUT_2 = 65;

  //@ts-expect-error
  const result_2 = normalizeAlias(INPUT_2);

  expect(result_2).toHaveProperty("isUpdateAlias", true);
  expect(result_2).toHaveProperty("normalizedAlias", DEFAULT_ALIAS);
});

test("Debería retornar { isUpdateAlias: true, normalizedAlias: input_trim } cuando tiene espacios en los extremos", () => {
  const INPUT = "    ejemplo    ";
  const OUTPUT = "ejemplo";

  const result = normalizeAlias(INPUT);

  expect(result).toHaveProperty("isUpdateAlias", true);
  expect(result).toHaveProperty("normalizedAlias", OUTPUT);
});

test("Debería retornar { isUpdateAlias: true, normalizedAlias: default_alias } cuando es una cadena vacía (despues de aplicarle trim)", () => {
  const INPUT_1 = "";

  const result_1 = normalizeAlias(INPUT_1);

  expect(result_1).toHaveProperty("isUpdateAlias", true);
  expect(result_1).toHaveProperty("normalizedAlias", DEFAULT_ALIAS);

  //----------------------------------------------------------

  const INPUT_2 = "       ";

  const result_2 = normalizeAlias(INPUT_2);

  expect(result_2).toHaveProperty("isUpdateAlias", true);
  expect(result_2).toHaveProperty("normalizedAlias", DEFAULT_ALIAS);
});
test(`Debería retornar { isUpdateAlias: true, normalizedAlias: input_truncado } cuando la longitud supera el máximo permitido ( > ${MAX_LENGTH_ALIAS})`, () => {
  const INPUT = "--------20caracteres--------40caracteres";
  const OUTPUT = "--------20caracteres";

  const result = normalizeAlias(INPUT);

  expect(INPUT.length).toBe(40);
  expect(result.normalizedAlias.length).toBe(MAX_LENGTH_ALIAS);
  expect(result).toHaveProperty("isUpdateAlias", true);
  expect(result).toHaveProperty("normalizedAlias", OUTPUT);
});
test(`no debería truncar cuando la longitud es justo del máximo permitido ( = ${MAX_LENGTH_ALIAS})`, () => {
  const INPUT = "a".repeat(MAX_LENGTH_ALIAS);

  const result = normalizeAlias(INPUT);

  expect(INPUT.length).toBe(MAX_LENGTH_ALIAS);
  expect(result.normalizedAlias.length).toBe(MAX_LENGTH_ALIAS);

  expect(result).toHaveProperty("isUpdateAlias", false);
  expect(result).toHaveProperty("normalizedAlias", INPUT);
});
