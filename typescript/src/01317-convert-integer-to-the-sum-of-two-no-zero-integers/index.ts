/**
 * # 1317. Convert Integer to the Sum of Two No-Zero Integers
 * @link [LeetCode](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/)
 *
 * @description
 * **No-Zero integer** is a positive integer that **does not contain any** `0` in its decimal representation.
 *
 * Given an integer `n`, return a list of two integers `[a, b]` where:
 * - `a` and `b` are **No-Zero integers**.
 * - `a + b = n`
 * The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.
 *
 * Constraints:
 * - 2 <= n <= 104
 *
 * @example
 * Input: n = 2
 * Output: [1,1]
 * Explanation: Let a = 1 and b = 1.
 * Both a and b are no-zero integers, and a + b = 2 = n.
 *
 * @example
 * Input: n = 11
 * Output: [2,9]
 * Explanation: Let a = 2 and b = 9.
 * Both a and b are no-zero integers, and a + b = 11 = n.
 * Note that there are other valid answers as [8, 3] that can be accepted.
 *
 * @param {number} n
 * @returns {number[]}
 */

function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    if (hasZero(i)) continue;
    const remaining = n - i;
    if (!hasZero(remaining)) {
      return [i, remaining];
    }
  }
  return [];
}

function hasZero(n: number): boolean {
  while (n > 0) {
    if (n % 10 === 0) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

function getNoZeroIntegers1(n: number): number[] {
  for (let i = 1; i < n; i++) {
    if (hasZero1(i)) continue;
    const remaining = n - i;
    if (!hasZero1(remaining)) {
      return [i, remaining];
    }
  }
  return [];
}

function hasZero1(n: number): boolean {
  return n.toString().includes("0");
}

export { getNoZeroIntegers, getNoZeroIntegers1 };
