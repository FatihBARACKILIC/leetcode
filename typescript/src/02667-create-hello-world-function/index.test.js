import { describe, expect, it } from "vitest";
import { createHelloWorld } from ".";

describe("2667 createHelloWorld", () => {
  it("should return Hello World", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });
});
