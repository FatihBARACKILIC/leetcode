import { describe, it, expect } from "vitest";
import {
  isPowerOfThree,
  isPowerOfThree2,
  isPowerOfThree3,
} from "@/00326-power-of-three";

describe("326 isPowerOfThree", () => {
  it("should return true for 27 (3^3)", () => {
    expect(isPowerOfThree(27)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfThree(0)).toBe(false);
  });

  it("should return false for -1", () => {
    expect(isPowerOfThree(-1)).toBe(false);
  });

  it("should return true for 1 (3^0)", () => {
    expect(isPowerOfThree(1)).toBe(true);
  });

  it("should return false for 45 (not a power of 3)", () => {
    expect(isPowerOfThree(45)).toBe(false);
  });

  it("should return true for 9 (3^2)", () => {
    expect(isPowerOfThree(9)).toBe(true);
  });
});

describe("326 isPowerOfThree2", () => {
  it("should return true for 27 (3^3)", () => {
    expect(isPowerOfThree2(27)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfThree2(0)).toBe(false);
  });

  it("should return false for -1", () => {
    expect(isPowerOfThree2(-1)).toBe(false);
  });

  it("should return true for 1 (3^0)", () => {
    expect(isPowerOfThree2(1)).toBe(true);
  });

  it("should return false for 45 (not a power of 3)", () => {
    expect(isPowerOfThree2(45)).toBe(false);
  });

  it("should return true for 9 (3^2)", () => {
    expect(isPowerOfThree2(9)).toBe(true);
  });
});

describe("326 isPowerOfThree3", () => {
  it("should return true for 27 (3^3)", () => {
    expect(isPowerOfThree3(27)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfThree3(0)).toBe(false);
  });

  it("should return false for -1", () => {
    expect(isPowerOfThree3(-1)).toBe(false);
  });

  it("should return true for 1 (3^0)", () => {
    expect(isPowerOfThree3(1)).toBe(true);
  });

  it("should return false for 45 (not a power of 3)", () => {
    expect(isPowerOfThree3(45)).toBe(false);
  });

  it("should return true for 9 (3^2)", () => {
    expect(isPowerOfThree3(9)).toBe(true);
  });
});
