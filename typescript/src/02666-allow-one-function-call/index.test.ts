import { describe, it, expect, vi } from "vitest";
import { once } from "@/02666-allow-one-function-call";

describe("once", () => {
  it("should call the function once and return its result", () => {
    const mockFn = vi.fn((a: number, b: number, c: number) => a + b + c);
    const onceFn = once(mockFn);

    const result1 = onceFn(1, 2, 3);
    const result2 = onceFn(4, 5, 6);

    expect(result1).toBe(6); // İlk çağrıda doğru sonucu döner
    expect(result2).toBeUndefined(); // İkinci çağrıda undefined döner
    expect(mockFn).toHaveBeenCalledTimes(1); // Sadece bir kez çağrılmış olmalı
  });

  it("should return undefined for all calls after the first one", () => {
    const mockFn = vi.fn((a: number) => a * 2);
    const onceFn = once(mockFn);

    expect(onceFn(10)).toBe(20); // İlk çağrı: 10 * 2 = 20
    expect(onceFn(20)).toBeUndefined();
    expect(onceFn(30)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1); // Yine sadece bir çağrı
  });

  it("should preserve the context if needed", () => {
    const obj = {
      x: 5,
      getX(this: any) {
        return this.x;
      },
    };

    const onceFn = once(obj.getX.bind(obj));

    expect(onceFn()).toBe(5);
    expect(onceFn()).toBeUndefined();
  });
});
