import { describe, it, expect } from "vitest";
import { chunk } from "@/02677-chunk-array";

describe("2677. chunk", () => {
  it("should split array into chunks of size 1", () => {
    const input = [1, 2, 3, 4, 5] as any;
    const result = chunk(input, 1);
    expect(result).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("should split array into chunks of size 3", () => {
    const input = [1, 9, 6, 3, 2] as any;
    const result = chunk(input, 3);
    expect(result).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });

  it("should return full array in one chunk when size > array length", () => {
    const input = [8, 5, 3, 2, 6] as any;
    const result = chunk(input, 6);
    expect(result).toEqual([[8, 5, 3, 2, 6]]);
  });

  it("should return empty array when input is empty", () => {
    const input: any[] = [] as any;
    const result = chunk(input, 1);
    expect(result).toEqual([]);
  });

  it("should handle array of objects", () => {
    const input = [{ a: 1 }, { b: 2 }, { c: 3 }] as any;
    const result = chunk(input, 2);
    expect(result).toEqual([[{ a: 1 }, { b: 2 }], [{ c: 3 }]]);
  });

  it("should handle size equal to array length", () => {
    const input = [1, 2, 3] as any;
    const result = chunk(input, 3);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it("should handle size of 2 with even number of elements", () => {
    const input = [1, 2, 3, 4] as any;
    const result = chunk(input, 2);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should handle size of 2 with odd number of elements", () => {
    const input = [1, 2, 3, 4, 5] as any;
    const result = chunk(input, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });
});
