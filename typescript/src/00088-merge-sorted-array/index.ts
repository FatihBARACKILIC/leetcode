/**
 Do not return anything, modify nums1 in-place instead.
 */
/**
 * # 88. Merge Sorted Array
 * @link [LeetCode](https://leetcode.com/problems/merge-sorted-array/description/)
 *
 * @description
 * You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.
 *
 * **Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1LastIndex = m - 1;
  let n2LastIndex = n - 1;
  let lastIndex = m + n - 1;

  while (n2LastIndex >= 0) {
    if (n1LastIndex >= 0 && nums1[n1LastIndex] > nums2[n2LastIndex]) {
      nums1[lastIndex] = nums1[n1LastIndex];
      n1LastIndex--;
    } else {
      nums1[lastIndex] = nums2[n2LastIndex];
      n2LastIndex--;
    }
    lastIndex--;
  }
}

export { merge };
