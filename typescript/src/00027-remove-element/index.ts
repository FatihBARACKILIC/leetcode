/**
 * # 27. Remove Element
 * @link [LeetCode](https://leetcode.com/problems/remove-element/description/)
 *
 * @description
 * Given an integer array nums and an integer val, remove all occurrences of val in nums
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you
 *
 * Change the array nums such that the first k elements of nums contain the elements which are
 * Return k.
 * Custom Judge:
 *
 * The judge will test your solution with the following code:
 *```
 * int[] nums = [...]; // Input array
 * int val = ...; // Value to remove
 * int[] expectedNums = [...]; // The expected answer with correct length.
 *                             // It is sorted with no values equaling val.
 *
 * int k = removeElement(nums, val); // Calls your implementation
 *
 * assert k == expectedNums.length;
 * sort(nums, 0, k); // Sort the first k elements of nums
 * for (int i = 0; i < actualLength; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 * ```
 * If all assertions pass, then your solution will be accepted.
 *
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 *
 * @example removeElement([3,2,2,3], 3): 2;
 * nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * @example removeElement([0,1,2,2,3,0,4,2], 2): 5;
 * nums = [0,1,4,0,3,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
 * Note that the five elements can be returned in any order.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) continue;
    nums[j] = nums[i];
    j++;
  }
  return j;
}

export { removeElement };
