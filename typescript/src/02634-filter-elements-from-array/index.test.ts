import { describe, it, expect } from "vitest";
import { filter } from "@/02634-filter-elements-from-array";

describe("filter", () => {
  it("should filter numbers greater than 10", () => {
    const arr = [0, 10, 20, 30];
    const fn = (n: number) => n > 10;
    const result = filter(arr, fn);
    expect(result).toEqual([20, 30]);
  });

  it("should filter only first index", () => {
    const arr = [1, 2, 3];
    const fn = (_: number, i: number) => i === 0;
    const result = filter(arr, fn);
    expect(result).toEqual([1]);
  });

  it("should remove falsey results like 0", () => {
    const arr = [-2, -1, 0, 1, 2];
    const fn = (n: number) => n + 1;
    const result = filter(arr, fn);
    expect(result).toEqual([-2, 0, 1, 2]);
  });

  it("should return empty array if all filtered out", () => {
    const arr = [1, 2, 3];
    const fn = () => false;
    const result = filter(arr, fn);
    expect(result).toEqual([]);
  });

  it("should return original array if all pass", () => {
    const arr = [1, 2, 3];
    const fn = () => true;
    const result = filter(arr, fn);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should work with empty array", () => {
    const arr: number[] = [];
    const fn = () => true;
    const result = filter(arr, fn);
    expect(result).toEqual([]);
  });

  it("should handle negative numbers correctly", () => {
    const arr = [-5, -10, 0, 5];
    const fn = (n: number) => n < 0;
    const result = filter(arr, fn);
    expect(result).toEqual([-5, -10]);
  });
});
