/**
 * # 2667. Create Hello World Function
 *
 * @description
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 *
 * Constraints:
 * 0 <= args.length <= 10
 *
 * @example
 * Input: args = []
 * Output: "Hello World"
 * Explanation:
 * ```typescript
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * ```
 * The function returned by createHelloWorld should always return "Hello World".
 *
 * @example
 * Input: args = [{},null,42]
 * Output: "Hello World"
 * Explanation:
 * const f = createHelloWorld();
 * f({}, null, 42); // "Hello World"
 *
 * Any arguments could be passed to the function but it should still always return "Hello World".
 *
 * @function createHelloWorld
 * @param {...*} args
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

export { createHelloWorld };
