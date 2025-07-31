/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * # 876. Middle of the Linked List
 * @link [LeetCode](https://leetcode.com/problems/middle-of-the-linked-list/description/)
 *
 * @description
 * Given the `head` of a singly linked list, return _the middle node of the linked list_.
 * If there are two middle nodes, return **the second middle** node.
 * Constraints:
 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
 *
 * @example
 * @link ![Example 1](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)
 * - Input: head = [1,2,3,4,5]
 * - Output: [3,4,5]
 * - Explanation: The middle node of the list is node 3.
 *
 * @example
 * @link ![Example 2](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)
 * - Input: head = [1,2,3,4,5,6]
 * - Output: [4,5,6]
 * - Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 *
 * @function middleNode
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function middleNode(head: ListNode | null): ListNode | null {
  let length: number = 0;
  let tempList: ListNode | null = head;
  while (tempList?.next) {
    tempList = tempList.next;
    length++;
  }

  for (let i = 0; i < Math.ceil(length / 2); i++) {
    head = head?.next!;
  }
  return head;
}

function middleNode2(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export { middleNode, middleNode2, ListNode };
