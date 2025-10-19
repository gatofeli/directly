import { buildSearchURL } from "./buildSearchURL";

test('When "query" is empty, the "origin" of the URL is returned.', () => {
  const result = buildSearchURL("", "https://example.com/?k=--DirectlyExtension--");
  expect(result).toBe("https://example.com");
});
test('When "query" has content, the URL with the markers replaced is returned.', () => {
  const result = buildSearchURL("hi", "https://example.com/?k=--DirectlyExtension--");
  expect(result).toBe("https://example.com/?k=hi");
});
