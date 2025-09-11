import { describe, it, expect } from "vitest";
import { memoize } from "@/02623-memorize";

describe("memoize", () => {
  it("memoizes the sum function", () => {
    const sum = (a: number, b: number) => a + b;
    const memoizedSum = memoize(sum);

    expect(memoizedSum(2, 2)).toBe(4); // call
    expect(memoizedSum(2, 2)).toBe(4); // cached
    expect(memoizedSum.getCallCount()).toBe(1);

    expect(memoizedSum(1, 2)).toBe(3); // new call
    expect(memoizedSum.getCallCount()).toBe(2);
  });

  it("memoizes the factorial function", () => {
    const factorial = (n: number): number =>
      n <= 1 ? 1 : n * factorial(n - 1);
    const memoizedFact = memoize(factorial);

    expect(memoizedFact(2)).toBe(2); // call
    expect(memoizedFact(3)).toBe(6); // call
    expect(memoizedFact(2)).toBe(2); // cached
    expect(memoizedFact.getCallCount()).toBe(2);

    expect(memoizedFact(3)).toBe(6); // cached
    expect(memoizedFact.getCallCount()).toBe(2);
  });

  it("memoizes the fibonacci function", () => {
    const fib = (n: number): number => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
    const memoizedFib = memoize(fib);

    expect(memoizedFib(5)).toBe(8); // call
    expect(memoizedFib.getCallCount()).toBe(1);

    expect(memoizedFib(5)).toBe(8); // cached
    expect(memoizedFib.getCallCount()).toBe(1);
  });

  it("treats sum(a, b) and sum(b, a) as different", () => {
    const sum = (a: number, b: number) => a + b;
    const memoizedSum = memoize(sum);

    expect(memoizedSum(2, 3)).toBe(5); // call
    expect(memoizedSum(3, 2)).toBe(5); // new call
    expect(memoizedSum.getCallCount()).toBe(2);
  });
});
