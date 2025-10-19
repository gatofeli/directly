import { MAX_LENGTH_QUERY } from "../../utils/constants/default";
import { sanitizeQuery } from "./sanitizeQuery";

describe("A value different from the original value of the 'queryInput' prop will be returned when", () => {
  test("Its type is not 'String' ==> empty string", () => {
    // @ts-expect-error
    expect(sanitizeQuery(undefined)).toBe("");
  });

  test("It contains spaces at the beginning or end ==> `.trim()`", () => {
    expect(sanitizeQuery("    hi    ")).toBe("hi");
  });

  test("It exceeds the maximum character limit `MAX_LENGTH_QUERY` ==> it is truncated", () => {
    expect(sanitizeQuery("x".repeat(8000)).length).toEqual(MAX_LENGTH_QUERY);
  });
});
