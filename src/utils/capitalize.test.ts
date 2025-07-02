import { capitalize } from "./capitalize";

describe("capitalizes a single lowercase word", () => {
  test("hello to Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Hello to Hello", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
  test("h to H", () => {
    expect(capitalize("h")).toBe("H");
  });
  test("empty", () => {
    expect(capitalize("")).toBe("");
  });
  test("javaScript to JavaScript", () => {
    expect(capitalize("javaScript")).toBe("JavaScript");
  });
  test("!test to !test", () => {
    expect(capitalize("!test")).toBe("!test");
  });
  test(" test to  Test", () => {
    expect(capitalize(" test")).toBe("Test");
  });
});
