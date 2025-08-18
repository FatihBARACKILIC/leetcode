import { describe, it, expect } from "vitest";
import {
  checkIfExist,
  checkIfExist1,
} from "@/01346-check-if-n-and-its-double-exist";

describe("1346 checkIfExist", () => {
  it("should return true when a double exists (example 1)", () => {
    const arr = [10, 2, 5, 3];
    expect(checkIfExist(arr)).toBe(true);
  });

  it("should return false when no double exists (example 2)", () => {
    const arr = [3, 1, 7, 11];
    expect(checkIfExist(arr)).toBe(false);
  });

  it("should return true with negative and positive numbers", () => {
    const arr = [-2, 0, 10, -19, 4, 6, -8];
    expect(checkIfExist(arr)).toBe(false);
  });

  it("should return true when zero is doubled", () => {
    const arr = [0, 0];
    expect(checkIfExist(arr)).toBe(true);
  });

  it("should return false for single element", () => {
    const arr = [1];
    expect(checkIfExist(arr)).toBe(false);
  });

  it("should return true for negative doubles", () => {
    const arr = [-10, -5, 2, 4];
    expect(checkIfExist(arr)).toBe(true); // -10 == 2 * -5
  });

  it("should return true when 6 is double of 3", () => {
    const arr = [1, 3, 6, 13];
    expect(checkIfExist(arr)).toBe(true); // 6 == 2 * 3
  });

  it("should return true for array [-20,8,-6,-14,0,-19,14,4]", () => {
    const arr = [-20, 8, -6, -14, 0, -19, 14, 4];
    expect(checkIfExist(arr)).toBe(true); // 8 == 2 * 4
  });

  it("should return true when 14 is double of 7", () => {
    const arr = [7, 1, 14, 11];
    expect(checkIfExist(arr)).toBe(true);
  });
});

describe("1346 checkIfExist1", () => {
  it("should return true when a double exists (example 1)", () => {
    const arr = [10, 2, 5, 3];
    expect(checkIfExist1(arr)).toBe(true);
  });

  it("should return false when no double exists (example 2)", () => {
    const arr = [3, 1, 7, 11];
    expect(checkIfExist1(arr)).toBe(false);
  });

  it("should return true with negative and positive numbers", () => {
    const arr = [-2, 0, 10, -19, 4, 6, -8];
    expect(checkIfExist1(arr)).toBe(false);
  });

  it("should return true when zero is doubled", () => {
    const arr = [0, 0];
    expect(checkIfExist1(arr)).toBe(true);
  });

  it("should return false for single element", () => {
    const arr = [1];
    expect(checkIfExist1(arr)).toBe(false);
  });

  it("should return true for negative doubles", () => {
    const arr = [-10, -5, 2, 4];
    expect(checkIfExist1(arr)).toBe(true); // -10 == 2 * -5
  });

  it("should return true when 6 is double of 3", () => {
    const arr = [1, 3, 6, 13];
    expect(checkIfExist1(arr)).toBe(true); // 6 == 2 * 3
  });

  it("should return true for array [-20,8,-6,-14,0,-19,14,4]", () => {
    const arr = [-20, 8, -6, -14, 0, -19, 14, 4];
    expect(checkIfExist1(arr)).toBe(true); // 8 == 2 * 4
  });

  it("should return true when 14 is double of 7", () => {
    const arr = [7, 1, 14, 11];
    expect(checkIfExist1(arr)).toBe(true);
  });
});
