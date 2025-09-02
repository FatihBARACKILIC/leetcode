import { describe, it, expect } from "vitest";
import {
  validMountainArray,
  validMountainArray1,
} from "@/00941-valid-mountain-array";

describe("941 validMountainArray", () => {
  it("should return false for array with less than 3 elements", () => {
    expect(validMountainArray([2, 1])).toBe(false);
    expect(validMountainArray([1])).toBe(false);
    expect(validMountainArray([])).toBe(false);
  });

  it("should return false for array with equal adjacent elements at peak", () => {
    expect(validMountainArray([3, 5, 5])).toBe(false);
    expect(validMountainArray([0, 1, 2, 3, 3, 2, 1])).toBe(false);
  });

  it("should return true for valid mountain array", () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    expect(validMountainArray([1, 2, 3, 4, 3, 2, 1])).toBe(true);
  });

  it("should return false for array with increasing or decreasing only", () => {
    expect(validMountainArray([1, 2, 3, 4])).toBe(false);
    expect(validMountainArray([4, 3, 2, 1])).toBe(false);
  });

  it("should return false if peak is at the start or end", () => {
    expect(validMountainArray([3, 2, 1])).toBe(false); // peak at start
    expect(validMountainArray([1, 2, 3])).toBe(false); // peak at end
  });
});

describe("941 validMountainArray1", () => {
  it("should return false for array with less than 3 elements", () => {
    expect(validMountainArray1([2, 1])).toBe(false);
    expect(validMountainArray1([1])).toBe(false);
    expect(validMountainArray1([])).toBe(false);
  });

  it("should return false for array with equal adjacent elements at peak", () => {
    expect(validMountainArray1([3, 5, 5])).toBe(false);
    expect(validMountainArray1([0, 1, 2, 3, 3, 2, 1])).toBe(false);
  });

  it("should return true for valid mountain array", () => {
    expect(validMountainArray1([0, 3, 2, 1])).toBe(true);
    expect(validMountainArray1([1, 2, 3, 4, 3, 2, 1])).toBe(true);
  });

  it("should return false for array with increasing or decreasing only", () => {
    expect(validMountainArray1([1, 2, 3, 4])).toBe(false);
    expect(validMountainArray1([4, 3, 2, 1])).toBe(false);
  });

  it("should return false if peak is at the start or end", () => {
    expect(validMountainArray1([3, 2, 1])).toBe(false); // peak at start
    expect(validMountainArray1([1, 2, 3])).toBe(false); // peak at end
  });
});
