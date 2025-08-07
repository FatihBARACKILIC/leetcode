import { describe, expect, it } from "vitest";
import { merge } from "@/00088-merge-sorted-array";

describe("88 merge", () => {
  it("should merge nums2 into nums1 and sort correctly", () => {
    const arr: number[] = [1, 2, 3, 0, 0, 0];
    merge(arr, 3, [2, 5, 6], 3);
    expect(arr).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should handle empty nums2", () => {
    const arr: number[] = [1];
    merge(arr, 1, [], 0);
    expect(arr).toEqual([1]);
  });

  it("should handle empty nums1", () => {
    const arr: number[] = [];
    merge(arr, 0, [1], 1);
    expect(arr).toEqual([1]);
  });

  it("should merge with duplicates and negatives", () => {
    const arr: number[] = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    merge(arr, 6, [1, 2, 2], 3);
    expect(arr).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });
});
