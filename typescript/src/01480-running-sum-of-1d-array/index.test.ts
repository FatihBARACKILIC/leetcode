import { describe, expect, test } from "vitest";
import { runningSum } from "@/01480-running-sum-of-1d-array";

describe("01480 runningSum", () => {
  test.each([
    [
      [1, 2, 3, 4],
      [1, 3, 6, 10],
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 2, 3, 4, 5],
    ],
    [
      [3, 1, 2, 10, 1],
      [3, 4, 6, 16, 17],
    ],
  ])("should return running sum of %j as %j", (numbers, expected) => {
    expect(runningSum(numbers)).toEqual(expected);
  });
});
