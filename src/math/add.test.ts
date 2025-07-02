import { add } from "./add";

describe("add()", () => {
  test("adds 1 and 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("adds -4 and 5 to equal 1", () => {
    expect(add(-4, 5)).toBe(1);
  });
  test("adds 0 and 0 to equal 0", () => {
    expect(add(0, 0)).toBe(0);
  });
});
