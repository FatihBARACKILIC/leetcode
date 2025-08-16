import { describe, it, expect } from "vitest";
import { maximum69Number } from "@/01323-maximum-69-number";

describe("1323 maximum69Number", () => {
  it("should return 9969 when input is 9669", () => {
    expect(maximum69Number(9669)).toBe(9969);
  });

  it("should return 9999 when input is 9996", () => {
    expect(maximum69Number(9996)).toBe(9999);
  });

  it("should return 9999 when input is 9999 (no change)", () => {
    expect(maximum69Number(9999)).toBe(9999);
  });

  it("should return 996969 when input is 696969", () => {
    expect(maximum69Number(696969)).toBe(996969);
  });

  it("should return 9 when input is 6", () => {
    expect(maximum69Number(6)).toBe(9);
  });

  it("should return 9 when input is 9", () => {
    expect(maximum69Number(9)).toBe(9);
  });
});
