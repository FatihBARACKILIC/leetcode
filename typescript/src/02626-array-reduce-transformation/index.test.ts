import { describe, it, expect } from "vitest";
import { reduce } from "@/02626-array-reduce-transformation";

describe("reduce", () => {
  it("should reduce an array with sum function and init 0", () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr;
    const init = 0;
    const result = reduce(nums, fn, init);
    expect(result).toBe(10);
  });

  it("should reduce with custom function and init 100", () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => accum + curr * curr;
    const init = 100;
    const result = reduce(nums, fn, init);
    expect(result).toBe(130);
  });

  it("should return init when array is empty", () => {
    const nums: number[] = [];
    const fn = (accum: number, curr: number) => 0;
    const init = 25;
    const result = reduce(nums, fn, init);
    expect(result).toBe(25);
  });

  it("should handle single element array", () => {
    const nums = [5];
    const fn = (accum: number, curr: number) => accum * curr;
    const init = 2;
    const result = reduce(nums, fn, init);
    expect(result).toBe(10);
  });

  it("should handle complex operation", () => {
    const nums = [2, 3];
    const fn = (accum: number, curr: number) => (accum + curr) * 2;
    const init = 1;
    const result = reduce(nums, fn, init); // ((1+2)*2 = 6), ((6+3)*2 = 18)
    expect(result).toBe(18);
  });
});
