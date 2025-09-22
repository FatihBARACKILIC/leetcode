import { cancellable } from "@/02725-interval-cancellation";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

describe("2725. cancellable function", () => {
  let fn: Fn;
  let cancelFn: Function;
  let args: JSONValue[];
  let t: number;
  let cancelTimeMs: number;

  beforeEach(() => {
    fn = vi.fn();
    args = [4];
    t = 35;
    cancelTimeMs = 190;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call fn immediately", () => {
    cancellable(fn, args, t);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(...args);
  });
});
