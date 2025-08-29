type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

/**
 * # 2703. Return Length of Arguments Passed
 * @link [LeetCode](https://leetcode.com/problems/return-length-of-arguments-passed/description/)
 *
 * @description
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * Constraints:
 * - args is a valid JSON array
 * - 0 <= args.length <= 100
 *
 * @example
 * Input: args = [5]
 * Output: 1
 * Explanation:
 * argumentsLength(5); // 1
 *
 * One value was passed to the function so it should return 1.
 *
 * @example
 * Input: args = [{}, null, "3"]
 * Output: 3
 * Explanation:
 * argumentsLength({}, null, "3"); // 3
 *
 * Three values were passed to the function so it should return 3.
 *
 * @param args
 * @returns
 */
function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

function argumentsLength2(...args: JSONValue[]): number {
  let length = 0;
  while (args[length] !== undefined) {
    length++;
  }
  return length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

export { argumentsLength, argumentsLength2 };
