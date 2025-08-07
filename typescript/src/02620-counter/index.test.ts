import { createCounter } from "@/02620-counter";
import { describe, expect, it } from "vitest";

describe("2620 createCounter", () => {
  it("should start with 10 and continue 11, 12, ..., 20", () => {
    const counter = createCounter(10);
    for (let i = 10; i <= 20; i++) {
      expect(counter()).toBe(i);
    }
  });

  it("should start with -2 and continue -1, 0, 1, 2, ..., 10", () => {
    const counter = createCounter(-2);
    for (let i = -2; i <= 10; i++) {
      expect(counter()).toBe(i);
    }
  });
});
