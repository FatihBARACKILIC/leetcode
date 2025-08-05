/**
 * # 1295. Find Numbers with Even Number of Digits
 * @link [LeetCode](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/)
 *
 * @description
 * Given an array `nums` of integers, return how many of them contain an even number of digits.
 *
 * Constraints:
 * - 1 <= nums.length <= 500
 * - 1 <= nums[i] <= 105
 *
 * @example findNumbers([12,345,2,6,7896]): 2;
 * Explanation:
 * 12 contains 2 digits (even number of digits).
 * 345 contains 3 digits (odd number of digits).
 * 2 contains 1 digit (odd number of digits).
 * 6 contains 1 digit (odd number of digits).
 * 7896 contains 4 digits (even number of digits).
 * Therefore only 12 and 7896 contain an even number of digits.
 *
 * @example findNumbers([555,901,482,1771]): 1;
 * Explanation:
 * Only 1771 contains an even number of digits.
 *
 * @function findNumbers
 * @param {number[]} nums
 * @returns {number}
 */
function findNumbers(nums: number[]): number {
  let counter = 0;
  nums.forEach((v) => (counter += Math.log10(v) & 1));
  return counter;
}

export { findNumbers };
