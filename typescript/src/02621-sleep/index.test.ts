import { describe, it, expect } from "vitest";
import { sleep } from "@/02621-sleep";

describe("sleep", () => {
  it("should resolve after approximately the given milliseconds", async () => {
    const millis = 200;
    const tolerance = 20; // milisaniye toleransı (±20ms)

    const start = Date.now();
    await sleep(millis);
    const end = Date.now();

    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(millis - tolerance);
    expect(elapsed).toBeLessThanOrEqual(millis + tolerance);
  });

  it("should work for small delays too", async () => {
    const millis = 50;
    const tolerance = 15;

    const start = Date.now();
    await sleep(millis);
    const end = Date.now();

    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(millis - tolerance);
    expect(elapsed).toBeLessThanOrEqual(millis + tolerance);
  });
});
