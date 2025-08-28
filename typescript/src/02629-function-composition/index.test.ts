// functionComposition.test.ts
import { describe, it, expect } from "vitest";
import { compose } from "@/02629-function-composition";

describe("2629 compose", () => {
  it("should compose [x => x + 1, x => x * x, x => 2 * x] and apply to 4 -> 65", () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    const composed = compose(functions);
    expect(composed(4)).toBe(65);
  });

  it("should compose [x => 10 * x, x => 10 * x, x => 10 * x] and apply to 1 -> 1000", () => {
    const functions = [
      (x: number) => 10 * x,
      (x: number) => 10 * x,
      (x: number) => 10 * x,
    ];
    const composed = compose(functions);
    expect(composed(1)).toBe(1000);
  });

  it("should return identity when no functions are provided", () => {
    const functions: ((x: number) => number)[] = [];
    const composed = compose(functions);
    expect(composed(42)).toBe(42);
    expect(composed(-7)).toBe(-7);
    expect(composed(0)).toBe(0);
  });

  it("should work with single function", () => {
    const functions = [(x: number) => x - 5];
    const composed = compose(functions);
    expect(composed(10)).toBe(5);
  });

  it("should work with two functions", () => {
    const functions = [(x: number) => x + 3, (x: number) => x * 2];
    const composed = compose(functions);
    expect(composed(5)).toBe(13); // 5 * 2 = 10, +3 = 13
  });
});
