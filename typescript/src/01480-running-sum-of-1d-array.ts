/**
 * # 1480. Running Sum of 1d Array
 * @link [LeetCode](https://leetcode.com/problems/running-sum-of-1d-array/description/)
 *
 * Given an array nums. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.
 *
 * Return the running sum of nums.
 *
 * @example runningSum([1,2,3,4]): [1,3,6,10];
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * @example runningSum([1,1,1,1,1]): [1,2,3,4,5];
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 *
 * @example runningSum([3,1,2,10,1]): [3,4,6,16,17]
 *
 * @function runningSum
 * @param {number[]} nums - The input array of numbers.
 * @returns The running sum of the input array.
 */
export function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}
