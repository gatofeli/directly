import { buildSearchURL } from "./buildSearchURL";

describe("buildSearchURL", () => {
  const BASE_URL = "https://example.com/?k=--DirectlyExtension--";

  test('When "query" is empty, the "origin" of the URL is returned.', () => {
    const query = "";
    const expected = "https://example.com";

    const result = buildSearchURL(query, BASE_URL);

    expect(result).toBe(expected);
  });

  test('When "query" has content, the URL with the markers replaced is returned.', () => {
    const query = "hi";
    const expected = "https://example.com/?k=hi";

    const result = buildSearchURL(query, BASE_URL);

    expect(result).toBe(expected);
  });
});
