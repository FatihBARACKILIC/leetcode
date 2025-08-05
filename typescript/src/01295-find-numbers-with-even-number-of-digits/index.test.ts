import { describe, expect, test } from "vitest";
import { findNumbers } from "@/01295-find-numbers-with-even-number-of-digits";

describe("1295 findNumbers", () => {
  test.each([
    [2, [12, 345, 2, 6, 7896]],
    [1, [555, 901, 482, 1771]],
  ])("should return %i for %j", (expected, nums) => {
    expect(findNumbers(nums)).toBe(expected);
  });
});
