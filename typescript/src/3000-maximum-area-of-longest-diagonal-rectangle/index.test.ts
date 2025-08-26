import { describe, it, expect } from "vitest";
import { areaOfMaxDiagonal } from "@/3000-maximum-area-of-longest-diagonal-rectangle";

describe("3000. areaOfMaxDiagonal", () => {
  it("should return 48 for input [[9, 3], [8, 6]]", () => {
    const dimensions = [
      [9, 3],
      [8, 6],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(48);
  });

  it("should return 12 for input [[3, 4], [4, 3]]", () => {
    const dimensions = [
      [3, 4],
      [4, 3],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(12);
  });

  it("should return 10000 for input [[100, 100], [99, 99]]", () => {
    const dimensions = [
      [100, 100],
      [99, 99],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(10000);
  });

  it("should handle single rectangle input correctly", () => {
    const dimensions = [[10, 5]];
    expect(areaOfMaxDiagonal(dimensions)).toBe(50);
  });

  it("should handle multiple rectangles with same diagonal", () => {
    const dimensions = [
      [6, 8],
      [8, 6],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(48); // Both have same diagonal, pick max area
  });

  it("should handle rectangles with the same area and different diagonals", () => {
    const dimensions = [
      [4, 3],
      [3, 4],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(12); // Diagonal is same, pick max area (same area here)
  });

  it("should return 20 for input [[6,5],[8,6],[2,10],[8,1],[9,2],[3,5],[3,5]]", () => {
    const dimensions = [
      [6, 5],
      [8, 6],
      [2, 10],
      [8, 1],
      [9, 2],
      [3, 5],
      [3, 5],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(20);
  });
});
