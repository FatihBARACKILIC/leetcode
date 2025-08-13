import { describe, it, expect } from "vitest";
import { removeDuplicates } from "@/00026-remove-duplicates-from-sorted-array";

describe("26 removeDuplicates", () => {
  it("should remove duplicates from [1,1,2]", () => {
    const nums = [1, 1, 2];
    const expected = [1, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(expected.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  it("should remove duplicates from [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expected = [0, 1, 2, 3, 4];
    const k = removeDuplicates(nums);

    expect(k).toBe(expected.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  it("should work with array of length 1", () => {
    const nums = [42];
    const expected = [42];
    const k = removeDuplicates(nums);

    expect(k).toBe(expected.length);
    expect(nums[0]).toBe(42);
  });

  it("should work with no duplicates", () => {
    const nums = [-2, -1, 0, 1, 2, 3];
    const expected = [-2, -1, 0, 1, 2, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(expected.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  it("should return 1 when all elements are the same", () => {
    const nums = [7, 7, 7, 7];
    const expected = [7];
    const k = removeDuplicates(nums);

    expect(k).toBe(expected.length);
    expect(nums[0]).toBe(7);
  });
});
