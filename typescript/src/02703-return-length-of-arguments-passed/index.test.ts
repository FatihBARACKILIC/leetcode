import { describe, it, expect } from "vitest";
import {
  argumentsLength,
  argumentsLength2,
} from "@/02703-return-length-of-arguments-passed";

describe("argumentsLength", () => {
  it("should return 0 when no arguments are passed", () => {
    expect(argumentsLength()).toBe(0);
    expect(argumentsLength2()).toBe(0);
  });

  it("should return 1 when one argument is passed", () => {
    expect(argumentsLength(5)).toBe(1);
    expect(argumentsLength2(5)).toBe(1);
  });

  it("should return 3 when three arguments are passed", () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
    expect(argumentsLength2({}, null, "3")).toBe(3);
  });

  it("should return correct length with array and object", () => {
    expect(argumentsLength([1, 2, 3], { a: 1 }, "test")).toBe(3);
    expect(argumentsLength2([1, 2, 3], { a: 1 }, "test")).toBe(3);
  });

  it("should handle mixed types", () => {
    const args = [null, true, 42, "string", [1, 2], { key: "value" }];
    expect(argumentsLength(...args)).toBe(args.length);
    expect(argumentsLength2(...args)).toBe(args.length);
  });
});
