import { describe, expect, test } from "vitest";
import { maximumWealth, maximumWealth2 } from "@/01672-richest-customer-wealth";

describe("01672 maximumWealth", () => {
  test.each([
    [
      6,
      [
        [1, 2, 3],
        [3, 2, 1],
      ],
    ],
    [
      10,
      [
        [1, 5],
        [7, 3],
        [3, 5],
      ],
    ],
    [
      17,
      [
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ],
    ],
  ])("should return %i for accounts %j", (expected, accounts) => {
    expect(maximumWealth(accounts)).toBe(expected);
  });
});

describe("01672 maximumWealth 2", () => {
  test.each([
    [
      6,
      [
        [1, 2, 3],
        [3, 2, 1],
      ],
    ],
    [
      10,
      [
        [1, 5],
        [7, 3],
        [3, 5],
      ],
    ],
    [
      17,
      [
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ],
    ],
  ])("should return %i for accounts %j", (expected, accounts) => {
    expect(maximumWealth2(accounts)).toBe(expected);
  });
});
