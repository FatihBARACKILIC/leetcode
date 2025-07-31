import { describe, expect, test } from "vitest";
import { fizzBuzz, fizzBuzz2 } from "../00412-fizz-buzz";

describe("00412 fizzBuzz", () => {
  test.each([
    [["1", "2", "Fizz"], 3],
    [["1", "2", "Fizz", "4", "Buzz"], 5],
    [
      [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ],
      15,
    ],
  ])("should return %j for n = %i", (expected, n) => {
    expect(fizzBuzz(n)).toEqual(expected);
  });
});

describe("00412 fizzBuzz 2", () => {
  test.each([
    [["1", "2", "Fizz"], 3],
    [["1", "2", "Fizz", "4", "Buzz"], 5],
    [
      [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ],
      15,
    ],
  ])("should return %j for n = %i", (expected, n) => {
    expect(fizzBuzz2(n)).toEqual(expected);
  });
});
