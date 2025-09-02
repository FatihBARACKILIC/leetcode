/**
 * # 941. Valid Mountain Array
 * @link [LeetCode](https://leetcode.com/problems/valid-mountain-array/description/)
 *
 * @description
 * Given an array of integers `arr`, return *`true` if and only if it is a valid mountain array*.
 *
 * Recall that arr is a mountain array if and only if:
 *
 * - `arr.length >= 3`
 * - There exists some `i` with `0 < i < arr.length - 1` such that:
 *   - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
 *   - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`
 *
 * ![Mountain Array](https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png)
 *
 * Constraints:
 * - 1 <= arr.length <= 104
 * - 0 <= arr[i] <= 104
 *
 * @example validMountainArray([2,1]): false
 * @example validMountainArray([3,5,5]): false
 * @example validMountainArray([0,3,2,1]): true
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
function validMountainArray(arr: number[]): boolean {
  let mountainType: "increasing" | "decreasing" = "increasing";

  if (arr.length < 3) {
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1] && mountainType === "increasing") {
      continue;
    } else if (i > 0 && arr[i] > arr[i + 1] && mountainType === "increasing") {
      mountainType = "decreasing";
      continue;
    } else if (arr[i] > arr[i + 1] && mountainType === "decreasing") {
      continue;
    }
    return false;
  }
  return mountainType === "decreasing";
}

function validMountainArray1(arr: number[]): boolean {
  const length = arr.length;
  if (length < 3) return false;

  let i = 0;
  while (i + 1 < length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === length - 1) return false;

  while (i + 1 < length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === length - 1;
}

export { validMountainArray, validMountainArray1 };
