import { describe, expect as vExpect, it, test } from "vitest";
import { expect } from "@/02704-to-be-or-not-to-be";

describe("2704 expect", () => {
  it("should toBe return true", () => {
    vExpect(expect(5).toBe(5)).toBe(true);
  });
  it("should toBe throw an error", () => {
    vExpect(() => expect(5).toBe(null)).toThrowError("Not Equal");
  });
  it("should notToBe return true", () => {
    vExpect(expect(5).notToBe(null)).toBe(true);
  });
  it("should notToBe throw an error ", () => {
    vExpect(() => expect(5).notToBe(5)).toThrowError("Equal");
  });
});
