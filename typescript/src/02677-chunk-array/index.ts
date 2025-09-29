type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * # 2677. Chunk Array
 * @link [LeetCode](https://leetcode.com/problems/chunk-array/description/)
 *
 * Given an array arr and a chunk size size, return a chunked array.
 *
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 *
 * Please solve it without using lodash's _.chunk function.
 *
 * Constraints:
 * - arr is a string representing the array.
 * - 2 <= arr.length <= 105
 * - 1 <= size <= arr.length + 1
 *
 * @example chunk([1,2,3,4,5], 1): [[1],[2],[3],[4],[5]];
 * Explanation: The arr has been split into subarrays each with 1 element.
 *
 * @example chunk([1,9,6,3,2], 3): [[1,9,6],[3,2]];
 * Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
 *
 * @example chunk([8,5,3,2,6], 6): [[8,5,3,2,6]];
 * Explanation: Size is greater than arr.length thus all elements are in the first subarray.
 *
 * @example chunk([], 1): [];
 * Explanation: There are no elements to be chunked so an empty array is returned.
 *
 * @param {Obj[]} arr
 * @param {number} size
 * @returns {Obj[][]}
 */
function chunk(arr: Obj[], size: number): Obj[][] {
  const newArr: Obj[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}

export { chunk };
