import { describe, test, expect } from "vitest";
import { canConstruct, canConstruct2 } from "../00383-ransom-note";

describe("00383 canConstruct", () => {
  test.each([
    ["a", "b", false],
    ["aa", "ab", false],
    ["aa", "aab", true],
    ["fihjjjjei", "hjibagacbhadfaefdjaeaebgi", false],
  ])(
    "canConstruct(%s, %s) should return %s",
    (ransomNode, magazine, expected) => {
      expect(canConstruct(ransomNode, magazine)).toBe(expected);
    }
  );
});

describe("00383 canConstruct2", () => {
  test.each([
    ["a", "b", false],
    ["aa", "ab", false],
    ["aa", "aab", true],
    ["fihjjjjei", "hjibagacbhadfaefdjaeaebgi", false],
  ])(
    "canConstruct2(%s, %s) should return %s",
    (ransomNode, magazine, expected) => {
      expect(canConstruct2(ransomNode, magazine)).toBe(expected);
    }
  );
});
