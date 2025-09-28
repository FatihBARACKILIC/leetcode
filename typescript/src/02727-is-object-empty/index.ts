type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

/**
 * # 2727. Is Object Empty
 * @link [LeetCode](https://leetcode.com/problems/is-object-empty/description/)
 *
 * @description
 * Given an object or an array, return if it is empty.
 *
 * - An empty object contains no key-value pairs.
 * - An empty array contains no elements.
 *
 * You may assume the object or array is the output of JSON.parse.
 *
 * @example isEmpty({"x": 5, "y": 42}): false
 * Explanation: The object has 2 key-value pairs so it is not empty.
 *
 * @example isEmpty({}): true
 * Explanation: The object doesn't have any key-value pairs so it is empty.
 *
 * @example isEmpty([null, false, 0]): false
 * Explanation: The array has 3 elements so it is not empty.
 *
 * @param obj
 * @returns
 */
function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
}

function isEmpty2(obj: Obj): boolean {
  return JSON.stringify(obj).length === 2;
}

export { isEmpty, isEmpty2 };
