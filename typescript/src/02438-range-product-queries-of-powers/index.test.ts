import { describe, it, expect } from "vitest";
import {
  productQueries,
  productQueries2,
} from "@/02438-range-product-queries-of-powers";

describe("2438 productQueries", () => {
  it("should return correct products for n = 15 and basic queries", () => {
    const n = 15;
    const q = [
      [0, 1],
      [2, 2],
      [0, 3],
    ];
    const expected = [2, 4, 64];
    expect(productQueries(n, q)).toEqual(expected);
  });

  it("should return correct product for single-element powers array (n = 2)", () => {
    const n = 2;
    const q = [[0, 0]];
    const expected = [2];
    expect(productQueries(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 10 with multiple range queries", () => {
    const n = 10;
    const q = [
      [0, 0],
      [1, 1],
      [0, 1],
    ];
    const expected = [2, 8, 16];
    expect(productQueries(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 23 with overlapping ranges", () => {
    const n = 23;
    const q = [
      [0, 1],
      [2, 2],
      [0, 2],
      [1, 3],
    ];
    const expected = [2, 4, 8, 128];
    expect(productQueries(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 30 with disjoint and overlapping queries", () => {
    const n = 30;
    const q = [
      [0, 2],
      [1, 3],
    ];
    const expected = [64, 512];
    expect(productQueries(n, q)).toEqual(expected);
  });

  it("should return correct products for a large number of queries on n = 919", () => {
    const n = 919;
    const q = [
      [5, 5],
      [4, 4],
      [0, 1],
      [1, 5],
      [4, 6],
      [6, 6],
      [5, 6],
      [0, 3],
      [5, 5],
      [5, 6],
      [1, 2],
      [3, 5],
      [3, 6],
      [5, 5],
      [4, 4],
      [1, 1],
      [2, 4],
      [4, 5],
      [4, 4],
      [5, 6],
      [0, 4],
      [3, 3],
      [0, 4],
      [0, 5],
      [4, 4],
      [5, 5],
      [4, 6],
      [4, 5],
      [0, 4],
      [6, 6],
      [6, 6],
      [6, 6],
      [2, 2],
      [0, 5],
      [1, 4],
      [0, 3],
      [2, 4],
      [5, 5],
      [6, 6],
      [2, 2],
      [2, 3],
      [5, 5],
      [0, 6],
      [3, 3],
      [6, 6],
      [4, 4],
      [0, 0],
      [0, 2],
      [6, 6],
      [6, 6],
      [3, 6],
      [0, 4],
      [6, 6],
      [2, 2],
      [4, 6],
    ];
    const expected = [
      256, 128, 2, 4194304, 16777216, 512, 131072, 128, 256, 131072, 8, 524288,
      268435456, 256, 128, 2, 8192, 32768, 128, 131072, 16384, 16, 16384,
      4194304, 128, 256, 16777216, 32768, 16384, 512, 512, 512, 4, 4194304,
      16384, 128, 8192, 256, 512, 4, 64, 256, 147483634, 16, 512, 128, 1, 8,
      512, 512, 268435456, 16384, 512, 4, 16777216,
    ];
    expect(productQueries(n, q)).toEqual(expected);
  });
});

describe("2438 productQueries2", () => {
  it("should return correct products for n = 15 and basic queries", () => {
    const n = 15;
    const q = [
      [0, 1],
      [2, 2],
      [0, 3],
    ];
    const expected = [2, 4, 64];
    expect(productQueries2(n, q)).toEqual(expected);
  });

  it("should return correct product for single-element powers array (n = 2)", () => {
    const n = 2;
    const q = [[0, 0]];
    const expected = [2];
    expect(productQueries2(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 10 with multiple range queries", () => {
    const n = 10;
    const q = [
      [0, 0],
      [1, 1],
      [0, 1],
    ];
    const expected = [2, 8, 16];
    expect(productQueries2(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 23 with overlapping ranges", () => {
    const n = 23;
    const q = [
      [0, 1],
      [2, 2],
      [0, 2],
      [1, 3],
    ];
    const expected = [2, 4, 8, 128];
    expect(productQueries2(n, q)).toEqual(expected);
  });

  it("should return correct products for n = 30 with disjoint and overlapping queries", () => {
    const n = 30;
    const q = [
      [0, 2],
      [1, 3],
    ];
    const expected = [64, 512];
    expect(productQueries2(n, q)).toEqual(expected);
  });

  it("should return correct products for a large number of queries on n = 919", () => {
    const n = 919;
    const q = [
      [5, 5],
      [4, 4],
      [0, 1],
      [1, 5],
      [4, 6],
      [6, 6],
      [5, 6],
      [0, 3],
      [5, 5],
      [5, 6],
      [1, 2],
      [3, 5],
      [3, 6],
      [5, 5],
      [4, 4],
      [1, 1],
      [2, 4],
      [4, 5],
      [4, 4],
      [5, 6],
      [0, 4],
      [3, 3],
      [0, 4],
      [0, 5],
      [4, 4],
      [5, 5],
      [4, 6],
      [4, 5],
      [0, 4],
      [6, 6],
      [6, 6],
      [6, 6],
      [2, 2],
      [0, 5],
      [1, 4],
      [0, 3],
      [2, 4],
      [5, 5],
      [6, 6],
      [2, 2],
      [2, 3],
      [5, 5],
      [0, 6],
      [3, 3],
      [6, 6],
      [4, 4],
      [0, 0],
      [0, 2],
      [6, 6],
      [6, 6],
      [3, 6],
      [0, 4],
      [6, 6],
      [2, 2],
      [4, 6],
    ];
    const expected = [
      256, 128, 2, 4194304, 16777216, 512, 131072, 128, 256, 131072, 8, 524288,
      268435456, 256, 128, 2, 8192, 32768, 128, 131072, 16384, 16, 16384,
      4194304, 128, 256, 16777216, 32768, 16384, 512, 512, 512, 4, 4194304,
      16384, 128, 8192, 256, 512, 4, 64, 256, 147483634, 16, 512, 128, 1, 8,
      512, 512, 268435456, 16384, 512, 4, 16777216,
    ];
    expect(productQueries2(n, q)).toEqual(expected);
  });
});
