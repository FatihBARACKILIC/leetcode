/**
 * # 1323. Maximum 69 Number
 * @link [LeetCode](https://leetcode.com/problems/maximum-69-number/description/)
 *
 * @description
 * You are given a positive integer num consisting only of digits 6 and 9.
 *
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 *
 * Constraints:
 * - 1 <= num <= 104
 * - num consists of only 6 and 9 digits.
 *
 * @example maximum69Number(9669): 9969;
 * Explanation:
 * Changing the first digit results in 6669.
 * Changing the second digit results in 9969.
 * Changing the third digit results in 9699.
 * Changing the fourth digit results in 9666.
 * The maximum number is 9969.
 *
 * @example maximum69Number(9996): 9999;
 * Explanation: Changing the last digit 6 to 9 results in the maximum number.
 *
 * @example maximum69Number(9999): 9999;
 * Explanation: It is better not to apply any change.
 *
 * @param {number} num
 * @returns {number}
 */
function maximum69Number(num: number): number {
  let nums = num.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "6") {
      nums[i] = "9";
      break;
    }
  }
  return parseInt(nums.join(""));
}

export { maximum69Number };
