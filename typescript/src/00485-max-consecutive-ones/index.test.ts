import { describe, test, expect } from "vitest";
import {
  findMaxConsecutiveOnes,
  findMaxConsecutiveOnes2,
} from "@/00485-max-consecutive-ones";

describe("485 findMaxConsecutiveOnes", () => {
  test.each([
    [3, [1, 1, 0, 1, 1, 1]],
    [2, [1, 0, 1, 1, 0, 1]],
  ])("should return %i for findMaxConsecutiveOnes(%j)", (expected, nums) => {
    expect(findMaxConsecutiveOnes(nums)).toBe(expected);
  });

  test.each([
    [3, [1, 1, 0, 1, 1, 1]],
    [2, [1, 0, 1, 1, 0, 1]],
  ])("should return %i for findMaxConsecutiveOnes2(%j)", (expected, nums) => {
    expect(findMaxConsecutiveOnes2(nums)).toBe(expected);
  });
});
