/**
 * # 977. Squares of a Sorted Array
 * @link [LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/description/)
 *
 * @description
 * Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in non-decreasing order.
 *
 * @example sortedSquares([-4,-1,0,3,10]): [0,1,9,16,100];
 * Explanation:
 * After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 *
 * @example sortedSquares([-7,-3,2,3,11]): [4,9,9,49,121];
 *
 * @function sortedSquares
 * @param {number[]} nums
 * @returns {number[]}
 */
function sortedSquares(nums: number[]): number[] {
  const response = [];
  let left = 0;
  let right = nums.length - 1;
  for (let i = right; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      response[i] = nums[left] ** 2;
      left++;
    } else {
      response[i] = nums[right] ** 2;
      right--;
    }
  }
  return response;
}

function sortedSquares2(nums: number[]): number[] {
  return nums.map((n) => n ** 2).sort((a, b) => a - b);
}

export { sortedSquares, sortedSquares2 };
