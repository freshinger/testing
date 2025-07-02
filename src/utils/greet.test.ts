import { greet } from "./greet";

test("returns greeting with given name", () => {
  expect(greet("Lisa")).toBe("Hello, Lisa!");
});
test("returns greeting with empty name", () => {
  expect(greet("")).toBe("Hello, !");
});
test("returns greeting to world", () => {
  expect(greet("world")).toBe("Hello, world!");
});
