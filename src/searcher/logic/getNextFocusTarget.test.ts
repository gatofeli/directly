import { getNextFocusTarget, ARROW_KEY } from "./getNextFocusTarget";

function makeAnchors(n: number) {
  const list = Array.from({ length: n }, (_, i) => {
    const anchor = document.createElement("a");
    anchor.textContent = `URL-${i}`;
    anchor.href = `https://example.com/${i}`;

    return anchor;
  });

  return list;
}

describe("getNextFocusTarget", () => {
  describe("validation", () => {
    test.todo("returns the first element when currentIdx is not set");
  });

  describe("small lists", () => {
    test.todo(".for([arrows]) => With one element, %o returns the same element");
  });

  describe("arrowUp", () => {
    test("selects the previous target element", () => {
      const list = makeAnchors(5);
      const currentIdx = 4;
      const arrow = ARROW_KEY[0];
      const expected = list[3];

      const result = getNextFocusTarget(list, currentIdx, arrow);

      expect(result).toEqual(expected);
    });
    test("wraps to the last element when moving before the first", () => {
      const list = makeAnchors(5);
      const currentIdx = 0;
      const arrow = ARROW_KEY[0];
      const expected = list[4];

      const result = getNextFocusTarget(list, currentIdx, arrow);

      expect(result).toEqual(expected);
    });
    test.todo("wraps to the last element when currentIdx is below the valid range");
  });

  describe("arrowDown", () => {
    test("selects the next target element", () => {
      const list = makeAnchors(5);
      const currentIdx = 0;
      const arrow = ARROW_KEY[1];
      const expected = list[1];

      const result = getNextFocusTarget(list, currentIdx, arrow);

      expect(result).toEqual(expected);
    });
    test("wraps to the first element when moving past the last", () => {
      const list = makeAnchors(5);
      const currentIdx = 4;
      const arrow = ARROW_KEY[1];
      const expected = list[0];

      const result = getNextFocusTarget(list, currentIdx, arrow);

      expect(result).toEqual(expected);
    });
    test.todo("wraps to the first element when currentIdx is above range");
  });

  describe.todo("arrowLeft");
  describe.todo("arrowRight");
});
