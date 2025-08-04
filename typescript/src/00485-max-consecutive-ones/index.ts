/**
 * # 485. Max Consecutive Ones
 * @link [LeetCode](https://leetcode.com/problems/max-consecutive-ones/description/)
 *
 * @description
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * Constraints:
 * - 1 <= nums.length <= 105
 * - nums[i] is either 0 or 1.
 *
 * @example findMaxConsecutiveOnes([1,1,0,1,1,1]): 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 *
 * @example findMaxConsecutiveOnes([1,0,1,1,0,1]): 2
 *
 * @function findMaxConsecutiveOnes
 * @param {number[]} nums
 * @returns number
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let savedPoint = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.at(i) === 1) {
      counter++;
      continue;
    }
    savedPoint = Math.max(savedPoint, counter);
    counter = 0;
  }
  return Math.max(savedPoint, counter);
}

function findMaxConsecutiveOnes2(nums: number[]): number {
  let savedPoint = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    counter = nums.at(i) === 0 ? 0 : counter + 1;
    savedPoint = Math.max(savedPoint, counter);
  }
  return savedPoint;
}

export { findMaxConsecutiveOnes, findMaxConsecutiveOnes2 };
