import { describe, it, expect } from "vitest";
import { isEmpty, isEmpty2 } from "@/02727-is-object-empty";

describe("2727. isEmpty", () => {
  it("should return true for empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("should return false for non-empty object", () => {
    expect(isEmpty({ x: 5, y: 42 })).toBe(false);
  });

  it("should return true for empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for non-empty array", () => {
    expect(isEmpty([null, false, 0])).toBe(false);
  });

  it("should return true for empty nested object", () => {
    expect(isEmpty({ nested: {} })).toBe(false);
  });

  it("should return false for non-empty nested object", () => {
    expect(isEmpty({ nested: { key: "value" } })).toBe(false);
  });
});

describe("2727. isEmpty2", () => {
  it("should return true for empty object", () => {
    expect(isEmpty2({})).toBe(true);
  });

  it("should return false for non-empty object", () => {
    expect(isEmpty2({ x: 5, y: 42 })).toBe(false);
  });

  it("should return true for empty array", () => {
    expect(isEmpty2([])).toBe(true);
  });

  it("should return false for non-empty array", () => {
    expect(isEmpty2([null, false, 0])).toBe(false);
  });

  it("should return true for empty nested object", () => {
    expect(isEmpty2({ nested: {} })).toBe(false);
  });

  it("should return false for non-empty nested object", () => {
    expect(isEmpty2({ nested: { key: "value" } })).toBe(false);
  });
});
