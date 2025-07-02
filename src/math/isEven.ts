export function isEven(x: number): boolean {
  if (!Number.isInteger(x)) {
    console.warn(
      "warning: function isEven used with decimal value: " + x.toString()
    );
  }
  return x % 2 === 0;
}
