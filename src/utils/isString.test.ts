import { isString } from "./isString";

describe("isString()", () => {
  test('"hello" is string', () => {
    expect(isString("hello")).toBe(true);
  });
  test("123 is not a string", () => {
    expect(isString(123)).toBe(false);
  });
  test("{} is not a string", () => {
    expect(isString({})).toBe(false);
  });
  test("`` is string", () => {
    expect(isString(``)).toBe(true);
  });
  test("undefined is not a string", () => {
    expect(isString(undefined)).toBe(false);
  });
});
