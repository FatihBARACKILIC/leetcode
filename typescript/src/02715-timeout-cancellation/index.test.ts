/// <reference types="vitest" />
/// <vitest-environment jsdom />

import { describe, it, expect, vi } from "vitest";
import { cancellable } from "@/02715-timeout-cancellation";

describe("2715. cancellable", () => {
  it("fn should be called after delay if not cancelled", async () => {
    const fn = vi.fn();
    const args = [2];
    const t = 50;

    cancellable(fn, args, t);

    await new Promise((resolve) => setTimeout(resolve, t + 20));

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(...args);
  });

  it("fn should NOT be called if cancelled before delay", async () => {
    const fn = vi.fn();
    const args = [2];
    const t = 100;
    const cancelTime = 50;

    const cancel = cancellable(fn, args, t);

    setTimeout(() => cancel(), cancelTime);

    await new Promise((resolve) => setTimeout(resolve, t + 20));

    expect(fn).not.toHaveBeenCalled();
  });

  it("cancel after execution does nothing", async () => {
    const fn = vi.fn();
    const args = [3];
    const t = 30;
    const cancelTime = 100;

    const cancel = cancellable(fn, args, t);

    setTimeout(() => cancel(), cancelTime);

    await new Promise((resolve) => setTimeout(resolve, cancelTime + 10));

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(...args);
  });
});
