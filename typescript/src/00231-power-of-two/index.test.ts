import { describe, expect, test } from "vitest";
import { isPowerOfTwo, isPowerOfTwo2 } from "@/00231-power-of-two";

describe("231 isPowerOfTwo", () => {
  test.each([
    [false, 0],
    [true, 1],
    [false, 3],
    [true, 16],
    [false, -16],
    [false, 67108865],
    [false, 134217727],
  ])("should return %s for isPowerOfTwo(%i)", (expected, n) => {
    expect(isPowerOfTwo(n)).toBe(expected);
  });

  test.each([
    [false, 0],
    [true, 1],
    [false, 3],
    [true, 16],
    [false, -16],
    [false, 67108865],
    [false, 134217727],
  ])("should return %s for isPowerOfTwo2(%i)", (expected, n) => {
    expect(isPowerOfTwo2(n)).toBe(expected);
  });
});
