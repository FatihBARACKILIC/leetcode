/**
 * # 1346. Check If N and Its Double Exist
 * @link [LeetCode](https://leetcode.com/problems/check-if-n-and-its-double-exist/description/)
 *
 * @description
 * Given an array `arr` of integers, check if there exist two indices `i` and `j` such that :
 *
 * - `i != j`
 * - `0 <= i, j < arr.length`
 * - `arr[i] == 2 * arr[j]`
 *
 * Constraints:
 * - `2 <= arr.length <= 500`
 * - `-103 <= arr[i] <= 103`
 *
 * @example checkIfExist([10,2,5,3]): true;
 * Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
 *
 * @example checkIfExist([3,1,7,11]): false;
 * Explanation: There is no i and j that satisfy the conditions.
 *
 * @param {number[]} arr
 * @returns {number}
 */
function checkIfExist(arr: number[]): boolean {
  const numbers = new Set<number>();
  for (const number of arr) {
    if (
      numbers.has(number * 2) ||
      (number % 2 === 0 && numbers.has(number / 2))
    ) {
      return true;
    }
    numbers.add(number);
  }
  return false;
}

function checkIfExist1(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] * 2 || arr[i] === arr[j] / 2) {
        return true;
      }
    }
  }
  return false;
}

export { checkIfExist, checkIfExist1 };
