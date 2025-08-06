import { describe, expect, it } from "vitest";
import { duplicateZeros, duplicateZeros2 } from "@/01089-duplicate-zeros";

describe("1089 duplicateZeros", () => {
  it("should handle example case with multiple zeros", () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  it("should handle array with no zeros", () => {
    const arr = [1, 2, 3];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("should handle array with only zeros", () => {
    const arr = [0, 0, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it("should handle zero at the end", () => {
    const arr = [1, 2, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 2, 0]);
  });

  it("should handle large input with mixed values", () => {
    const arr = [8, 4, 5, 0, 0, 0, 0, 7];
    duplicateZeros(arr);
    expect(arr).toEqual([8, 4, 5, 0, 0, 0, 0, 0]);
  });
});

describe("1089 duplicateZeros2", () => {
  it("should handle example case with multiple zeros", () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros2(arr);
    expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  it("should handle array with no zeros", () => {
    const arr = [1, 2, 3];
    duplicateZeros2(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("should handle array with only zeros", () => {
    const arr = [0, 0, 0];
    duplicateZeros2(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it("should handle zero at the end", () => {
    const arr = [1, 2, 0];
    duplicateZeros2(arr);
    expect(arr).toEqual([1, 2, 0]);
  });

  it("should handle large input with mixed values", () => {
    const arr = [8, 4, 5, 0, 0, 0, 0, 7];
    duplicateZeros2(arr);
    expect(arr).toEqual([8, 4, 5, 0, 0, 0, 0, 0]);
  });
});
