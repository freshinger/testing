import { isPalindrome } from "./isPalindrome";

describe("word is read forward like backwards", () => {
  test("level", () => {
    expect(isPalindrome("level")).toBe(true);
  });
  test("test", () => {
    expect(isPalindrome("test")).toBe(false);
  });
  test("madam", () => {
    expect(isPalindrome("madam")).toBe(true);
  });
  test("<empty>", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
