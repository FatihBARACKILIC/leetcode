type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

/**
 * # 2704. To Be Or Not To Be
 * @link [LeetCode](https://leetcode.com/problems/to-be-or-not-to-be/description/)
 *
 * @description
 * Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.
 * - `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
 * - notToBe(val) accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.
 *
 * @example
 * Input: func = () => expect(5).toBe(5)
 * Output: {"value": true}
 * Explanation: 5 === 5 so this expression returns true.
 *
 * @example
 * Input: func = () => expect(5).toBe(null)
 * Output: {"error": "Not Equal"}
 * Explanation: 5 !== null so this expression throw the error "Not Equal".
 *
 * @example
 * Input: func = () => expect(5).notToBe(null)
 * Output: {"value": true}
 * Explanation: 5 !== null so this expression returns true.
 *
 * @param val
 * @return {ToBeOrNotToBe}
 */
function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(x) {
      if (val === x) return true;
      throw new Error("Not Equal");
    },
    notToBe(x) {
      if (val !== x) return true;
      throw new Error("Equal");
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

export { expect };
