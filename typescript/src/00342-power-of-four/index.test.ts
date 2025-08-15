import { describe, it, expect } from "vitest";
import {
  isPowerOfFour,
  isPowerOfFour1,
  isPowerOfFour2,
  isPowerOfFour3,
} from "@/00342-power-of-four";

describe("342 isPowerOfFour", () => {
  it("should return true for 1 (4^0)", () => {
    expect(isPowerOfFour(1)).toBe(true);
  });

  it("should return true for 4 (4^1)", () => {
    expect(isPowerOfFour(4)).toBe(true);
  });

  it("should return true for 16 (4^2)", () => {
    expect(isPowerOfFour(16)).toBe(true);
  });

  it("should return true for 64 (4^3)", () => {
    expect(isPowerOfFour(64)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfFour(0)).toBe(false);
  });

  it("should return false for negative number", () => {
    expect(isPowerOfFour(-4)).toBe(false);
  });

  it("should return false for non-power-of-four number like 5", () => {
    expect(isPowerOfFour(5)).toBe(false);
  });

  it("should return false for power of two but not four (like 8)", () => {
    expect(isPowerOfFour(8)).toBe(false);
  });

  it("should return true for 1024 (4^5)", () => {
    expect(isPowerOfFour(1024)).toBe(true);
  });
});

describe("342 isPowerOfFour1", () => {
  it("should return true for 1 (4^0)", () => {
    expect(isPowerOfFour1(1)).toBe(true);
  });

  it("should return true for 4 (4^1)", () => {
    expect(isPowerOfFour1(4)).toBe(true);
  });

  it("should return true for 16 (4^2)", () => {
    expect(isPowerOfFour1(16)).toBe(true);
  });

  it("should return true for 64 (4^3)", () => {
    expect(isPowerOfFour1(64)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfFour1(0)).toBe(false);
  });

  it("should return false for negative number", () => {
    expect(isPowerOfFour1(-4)).toBe(false);
  });

  it("should return false for non-power-of-four number like 5", () => {
    expect(isPowerOfFour1(5)).toBe(false);
  });

  it("should return false for power of two but not four (like 8)", () => {
    expect(isPowerOfFour1(8)).toBe(false);
  });

  it("should return true for 1024 (4^5)", () => {
    expect(isPowerOfFour1(1024)).toBe(true);
  });
});

describe("342 isPowerOfFour2", () => {
  it("should return true for 1 (4^0)", () => {
    expect(isPowerOfFour2(1)).toBe(true);
  });

  it("should return true for 4 (4^1)", () => {
    expect(isPowerOfFour2(4)).toBe(true);
  });

  it("should return true for 16 (4^2)", () => {
    expect(isPowerOfFour2(16)).toBe(true);
  });

  it("should return true for 64 (4^3)", () => {
    expect(isPowerOfFour2(64)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfFour2(0)).toBe(false);
  });

  it("should return false for negative number", () => {
    expect(isPowerOfFour2(-4)).toBe(false);
  });

  it("should return false for non-power-of-four number like 5", () => {
    expect(isPowerOfFour2(5)).toBe(false);
  });

  it("should return false for power of two but not four (like 8)", () => {
    expect(isPowerOfFour2(8)).toBe(false);
  });

  it("should return true for 1024 (4^5)", () => {
    expect(isPowerOfFour2(1024)).toBe(true);
  });
});

describe("342 isPowerOfFour3", () => {
  it("should return true for 1 (4^0)", () => {
    expect(isPowerOfFour3(1)).toBe(true);
  });

  it("should return true for 4 (4^1)", () => {
    expect(isPowerOfFour3(4)).toBe(true);
  });

  it("should return true for 16 (4^2)", () => {
    expect(isPowerOfFour3(16)).toBe(true);
  });

  it("should return true for 64 (4^3)", () => {
    expect(isPowerOfFour3(64)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isPowerOfFour3(0)).toBe(false);
  });

  it("should return false for negative number", () => {
    expect(isPowerOfFour3(-4)).toBe(false);
  });

  it("should return false for non-power-of-four number like 5", () => {
    expect(isPowerOfFour3(5)).toBe(false);
  });

  it("should return false for power of two but not four (like 8)", () => {
    expect(isPowerOfFour3(8)).toBe(false);
  });

  it("should return true for 1024 (4^5)", () => {
    expect(isPowerOfFour3(1024)).toBe(true);
  });
});
