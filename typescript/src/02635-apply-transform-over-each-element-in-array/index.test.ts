import { describe, it, expect } from "vitest";
import { map } from "@/02635-apply-transform-over-each-element-in-array";

describe("2635 map", () => {
  it("should apply plusone to each element", () => {
    const plusone = (n: number) => n + 1;
    const result = map([1, 2, 3], plusone);
    expect(result).toEqual([2, 3, 4]);
  });

  it("should apply plusI (element + index)", () => {
    const plusI = (n: number, i: number) => n + i;
    const result = map([1, 2, 3], plusI);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should apply constant function that returns 42", () => {
    const constant = () => 42;
    const result = map([10, 20, 30], constant);
    expect(result).toEqual([42, 42, 42]);
  });

  it("should handle empty array", () => {
    const identity = (n: number) => n;
    const result = map([], identity);
    expect(result).toEqual([]);
  });

  it("should handle negative numbers", () => {
    const negate = (n: number) => -n;
    const result = map([-1, -2, 3], negate);
    expect(result).toEqual([1, 2, -3]);
  });
});
