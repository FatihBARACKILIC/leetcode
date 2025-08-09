/**
 * # 231. Power of Two
 * @link [LeetCode](https://leetcode.com/problems/power-of-two/description/)
 *
 * @description
 * Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.
 *
 * An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.
 * Constraints:
 * - -231 <= n <= 231 - 1
 *
 * @example isPowerOfTwo(1): true;
 * Explanation: 20 = 1
 *
 * @example isPowerOfTwo(16):true;
 * Explanation: 24 = 16
 *
 * @example isPowerOfTwo(3):false;
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfTwo(n: number): boolean {
  return n > 0 && !(n & (n - 1));
}

function isPowerOfTwo2(n: number): boolean {
  if (n === 1 || n === 2) return true;
  const loopLength = Math.min(Math.round(n / 2), 31);
  for (let i = 2; i <= loopLength; i++) {
    if (2 ** i == n) return true;
  }
  return false;
}

export { isPowerOfTwo, isPowerOfTwo2 };
