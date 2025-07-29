import { describe, expect, it } from "vitest";
import {
  ListNode,
  middleNode,
  middleNode2,
} from "../00876-middle-of-the-linked-list";

describe("00876 middleNode", () => {
  it("should return [3,4,5] for [1,2,3,4,5]", () => {
    const l5 = new ListNode(5);
    const l4 = new ListNode(4, l5);
    const l3 = new ListNode(3, l4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    expect(middleNode(l1)).toEqual(l3);
  });

  it("should return [4,5,6] for [1,2,3,4,5,6]", () => {
    const l6 = new ListNode(6);
    const l5 = new ListNode(5, l6);
    const l4 = new ListNode(4, l5);
    const l3 = new ListNode(3, l4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    expect(middleNode(l1)).toEqual(l4);
  });
});

describe("00876 middleNode2", () => {
  it("should return [3,4,5] for [1,2,3,4,5]", () => {
    const l5 = new ListNode(5);
    const l4 = new ListNode(4, l5);
    const l3 = new ListNode(3, l4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    expect(middleNode2(l1)).toEqual(l3);
  });

  it("should return [4,5,6] for [1,2,3,4,5,6]", () => {
    const l6 = new ListNode(6);
    const l5 = new ListNode(5, l6);
    const l4 = new ListNode(4, l5);
    const l3 = new ListNode(3, l4);
    const l2 = new ListNode(2, l3);
    const l1 = new ListNode(1, l2);

    expect(middleNode2(l1)).toEqual(l4);
  });
});
