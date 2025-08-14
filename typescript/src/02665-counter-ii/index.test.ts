import { createCounter } from "@/02665-counter-ii";
import { describe, it, expect } from "vitest";

describe("2665 createCounter", () => {
  it("should handle increment, reset, and decrement correctly (init = 5)", () => {
    const counter = createCounter(5);
    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });

  it("should handle a sequence of operations (init = 0)", () => {
    const counter = createCounter(0);
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
    expect(counter.reset()).toBe(0);
  });

  it("should handle negative init value", () => {
    const counter = createCounter(-10);
    expect(counter.increment()).toBe(-9);
    expect(counter.increment()).toBe(-8);
    expect(counter.decrement()).toBe(-9);
    expect(counter.reset()).toBe(-10);
  });

  it("should return same value on reset multiple times", () => {
    const counter = createCounter(3);
    counter.increment(); // 4
    counter.increment(); // 5
    expect(counter.reset()).toBe(3);
    expect(counter.reset()).toBe(3);
    expect(counter.decrement()).toBe(2);
  });

  it("should not affect state between different counter instances", () => {
    const counter1 = createCounter(10);
    const counter2 = createCounter(0);

    expect(counter1.increment()).toBe(11);
    expect(counter2.increment()).toBe(1);
    expect(counter1.decrement()).toBe(10);
    expect(counter2.reset()).toBe(0);
  });
});
