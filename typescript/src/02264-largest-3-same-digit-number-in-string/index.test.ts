// largestGoodInteger.test.ts

import { describe, it, expect } from "vitest";
import { largestGoodInteger } from "@/02264-largest-3-same-digit-number-in-string";

describe("largestGoodInteger", () => {
  it("should return '777' from '6777133339'", () => {
    expect(largestGoodInteger("6777133339")).toBe("777");
  });

  it("should return '000' from '2300019'", () => {
    expect(largestGoodInteger("2300019")).toBe("000");
  });

  it("should return '' when no good integer exists", () => {
    expect(largestGoodInteger("42352338")).toBe("");
  });

  it("should return '777' from '12377774689'", () => {
    expect(largestGoodInteger("12377774689")).toBe("777");
  });

  it("should handle repeated digits like '77777'", () => {
    expect(largestGoodInteger("77777")).toBe("777");
  });

  it("should return the largest among multiple good integers", () => {
    expect(largestGoodInteger("000111222333444")).toBe("444");
  });

  it("should return '' when all digits are different", () => {
    expect(largestGoodInteger("1234567890")).toBe("");
  });

  it("should return '999' when it's at the start", () => {
    expect(largestGoodInteger("999123000")).toBe("999");
  });

  it("should return '333' if it's the only good integer", () => {
    expect(largestGoodInteger("abcd333efg")).toBe("333");
  });

  it("should ignore scattered same digits", () => {
    expect(largestGoodInteger("7a7b7")).toBe("");
  });
});
