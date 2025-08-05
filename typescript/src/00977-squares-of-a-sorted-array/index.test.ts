import { describe, expect, test } from "vitest";
import {
  sortedSquares,
  sortedSquares2,
} from "@/00977-squares-of-a-sorted-array";

describe("977 sortedSquares", () => {
  test.each([
    [
      [0, 1, 9, 16, 100],
      [-4, -1, 0, 3, 10],
    ],
    [
      [4, 9, 9, 49, 121],
      [-7, -3, 2, 3, 11],
    ],
  ])("should return %j for sortedSquares(%j)", (expected, nums) => {
    expect(sortedSquares(nums)).toEqual(expected);
  });

  test.each([
    [
      [0, 1, 9, 16, 100],
      [-4, -1, 0, 3, 10],
    ],
    [
      [4, 9, 9, 49, 121],
      [-7, -3, 2, 3, 11],
    ],
  ])("should return %j for sortedSquares2(%j)", (expected, nums) => {
    expect(sortedSquares2(nums)).toEqual(expected);
  });
});
