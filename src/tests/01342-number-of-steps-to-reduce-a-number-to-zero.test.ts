import { describe, expect, test } from "vitest";
import {
  numberOfSteps,
  numberOfStepsBitManipulation,
} from "../01342-number-of-steps-to-reduce-a-number-to-zero";

describe("01342 numberOfSteps", () => {
  test.each([
    [6, 14],
    [4, 8],
    [12, 123],
    [0, 0],
  ])("should return %i steps for number %i", (excepted, num) => {
    expect(numberOfSteps(num)).toBe(excepted);
  });
});

describe("01342 numberOfStepsBitManipulation", () => {
  test.each([
    [6, 14],
    [4, 8],
    [12, 123],
    [0, 0],
  ])("should return %i steps for number %i", (excepted, num) => {
    expect(numberOfStepsBitManipulation(num)).toBe(excepted);
  });
});
