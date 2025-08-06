/**
 * # 1089. Duplicate Zeros
 * @link [LeetCode](https://leetcode.com/problems/duplicate-zeros/description/)
 *
 * @description
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
 *
 * Constraints:
 * - 1 <= arr.length <= 104
 * - 0 <= arr[i] <= 9
 *
 * @example
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 *
 * @example
 * Input: arr = [1,2,3]
 * Output: [1,2,3]
 * Explanation: After calling your function, the input array is modified to: [1,2,3]
 *
 * @function duplicateZeros
 * @param {number[]} arr
 * @returns {void}
 */
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const temp = [];
  for (let i = 0; i < arr.length && temp.length < arr.length; i++) {
    temp.push(arr[i]);
    if (arr[i] === 0) {
      temp.push(0);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
}
function duplicateZeros2(arr: number[]): void {
  const cached: number[] = [];
  arr.forEach((v, i) => {
    if (cached.length > 0) {
      const firstElement = cached.shift()!;
      arr[i] = firstElement;
      cached.push(v);
    }
    if (v === 0) cached.push(0);
  });
}

export { duplicateZeros, duplicateZeros2 };
