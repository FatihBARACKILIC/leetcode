import { describe, it, expect } from "vitest";
import { getNoZeroIntegers } from "@/01317-convert-integer-to-the-sum-of-two-no-zero-integers";

function hasZero(n: number): boolean {
  return n.toString().includes("0");
}

describe("getNoZeroIntegers", () => {
  it("should return two no-zero integers that sum to n (n = 2)", () => {
    const result = getNoZeroIntegers(2);
    expect(result.length).toBe(2);
    expect(result[0] + result[1]).toBe(2);
    expect(hasZero(result[0])).toBe(false);
    expect(hasZero(result[1])).toBe(false);
  });

  it("should return valid result for n = 11", () => {
    const result = getNoZeroIntegers(11);
    expect(result.length).toBe(2);
    expect(result[0] + result[1]).toBe(11);
    expect(hasZero(result[0])).toBe(false);
    expect(hasZero(result[1])).toBe(false);
  });

  it("should return valid result for a range of n values", () => {
    for (let n = 2; n <= 100; n++) {
      const [a, b] = getNoZeroIntegers(n);
      expect(a + b).toBe(n);
      expect(hasZero(a)).toBe(false);
      expect(hasZero(b)).toBe(false);
    }
  });

  it("should handle upper bound n = 10000", () => {
    const [a, b] = getNoZeroIntegers(10000);
    expect(a + b).toBe(10000);
    expect(hasZero(a)).toBe(false);
    expect(hasZero(b)).toBe(false);
  });
});
