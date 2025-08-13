/**
 * # 326. Power of Three
 * @link [LeetCode](https://leetcode.com/problems/power-of-three/description/)
 *
 * @description
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 *
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * @example isPowerOfThree(27): true;
 * Explanation: 27 = 3**3
 *
 * @example isPowerOfThree(0): false;
 * Explanation: There is no x where 3x = 0.
 *
 * @example isPowerOfThree(-1): false;
 * Explanation: There is no x where 3x = (-1).
 *
 * @function isPowerOfThree
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  const logResult = Math.log(n) / Math.log(3);
  const tolerance = 1e-10;
  return Math.abs(Math.round(logResult) - logResult) < tolerance;
}

function isPowerOfThree2(n: number): boolean {
  if (n < 1) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

function isPowerOfThree3(n: number): boolean {
  return n > 1 && n % 3 === 0 ? isPowerOfThree3(n / 3) : n === 1;
}

export { isPowerOfThree, isPowerOfThree2, isPowerOfThree3 };
