// addTwoPromises.test.ts
import { describe, it, expect } from "vitest";
import { addTwoPromises } from "@/02723-add-two-promises";

describe("addTwoPromises", () => {
  it("should resolve to the sum of two promises (2 + 5 = 7)", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(2), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(5), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(7);
  });

  it("should resolve to the sum of two promises (10 + -12 = -2)", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 50)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-12), 30)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(-2);
  });

  it("should work with immediately resolved promises", async () => {
    const result = await addTwoPromises(Promise.resolve(3), Promise.resolve(4));
    expect(result).toBe(7);
  });
});
