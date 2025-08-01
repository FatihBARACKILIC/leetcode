import { describe, expect, test } from "vitest";
import { generate } from "@/00118-pascals-triangle";

describe("00118 generate", () => {
  test.each([
    [[[1]], 1],
    [[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], 5],
  ])("should return %j for %i", (expected, numRows) => {
    expect(generate(numRows)).toEqual(expected);
  });
});
