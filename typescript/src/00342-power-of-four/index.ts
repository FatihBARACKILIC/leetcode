/**
 * # 342. Power of Four
 * @link [LeetCode](https://leetcode.com/problems/power-of-four/description/)
 *
 * @description
 * Given an integer `n`, return `true` *if it is a power of four. Otherwise, return* `false`.
 *
 * An integer `n` is a power of four, if there exists an integer `x` such that `n == 4x`.
 *
 * Constraints:
 * - -231 <= n <= 231 - 1
 *
 * @example isPowerOfFour(16): true;
 * @example isPowerOfFour(5): false;
 * @example isPowerOfFour(1): true;
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;
  const logResult = Math.log(n) / Math.log(4);
  const tolerance = 10e-10;
  return Math.abs(Math.round(logResult) - logResult) < tolerance;
}

function isPowerOfFour1(n: number): boolean {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n /= 4;
  }
  return n === 1;
}

function isPowerOfFour2(n: number): boolean {
  if (n <= 0) return false;
  return n % 4 === 0 ? isPowerOfFour2(n / 4) : n === 1;
}

function isPowerOfFour3(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
}

export { isPowerOfFour, isPowerOfFour1, isPowerOfFour2, isPowerOfFour3 };
