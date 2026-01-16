import { MAX_LENGTH_QUERY } from "@utils/constants/default";
import { sanitizeQuery } from "./sanitizeQuery";

describe("sanitizeQuery", () => {
  describe("validation", () => {
    test.for([
      { value: undefined, type: "undefined" },
      { value: null, type: "null" },
      { value: 4, type: "number" },
      { value: true, type: "boolean" },
      { value: { a: "a" }, type: "object" },
      { value: ["a"], type: "array" },
    ])("returns an empty string when the input is $type", ({ value }) => {
      const expected = "";

      // @ts-expect-error
      const result = sanitizeQuery(value);

      expect(result).toBe(expected);
    });
  });

  describe("normalization", () => {
    test("trims leading and trailing whitespace", () => {
      const input = "  hello world  ";
      const expected = "hello world";

      const result = sanitizeQuery(input);

      expect(result).toBe(expected);
    });

    test("does not modify the string when it is already valid", () => {
      const validString = "hello world";

      const result = sanitizeQuery(validString);

      expect(result).toBe(validString);
    });

    test("truncates the string when it exceeds the maximum length", () => {
      const input = "x".repeat(8000);

      const result = sanitizeQuery(input);

      expect(result.length).toBe(MAX_LENGTH_QUERY);
    });
  });
});
