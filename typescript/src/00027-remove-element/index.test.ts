import { describe, it, expect } from "vitest";
import { removeElement } from "@/00027-remove-element";

function sortFirstK(nums: number[], k: number) {
  const sorted = nums.slice(0, k).sort((a, b) => a - b);
  return sorted;
}

describe("removeElement", () => {
  it("should remove all instances of 3 from [3,2,2,3]", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expected = [2, 2];
    const k = removeElement(nums, val);

    expect(k).toBe(expected.length);
    expect(sortFirstK(nums, k)).toEqual(expected.sort((a, b) => a - b));
  });

  it("should remove all instances of 2 from [0,1,2,2,3,0,4,2]", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const expected = [0, 1, 4, 0, 3];
    const k = removeElement(nums, val);

    expect(k).toBe(expected.length);
    expect(sortFirstK(nums, k)).toEqual(expected.sort((a, b) => a - b));
  });

  it("should return 0 for empty array", () => {
    const nums: number[] = [];
    const val = 1;
    const expected: number[] = [];
    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(sortFirstK(nums, k)).toEqual(expected);
  });

  it("should return original array if val is not present", () => {
    const nums = [1, 2, 3];
    const val = 9;
    const expected = [1, 2, 3];
    const k = removeElement(nums, val);

    expect(k).toBe(expected.length);
    expect(sortFirstK(nums, k)).toEqual(expected.sort((a, b) => a - b));
  });

  it("should remove all elements if all are val", () => {
    const nums = [5, 5, 5];
    const val = 5;
    const expected: number[] = [];
    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(sortFirstK(nums, k)).toEqual(expected);
  });
});
