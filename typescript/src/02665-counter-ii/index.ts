type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

/**
 * # 2665. Counter II
 * @link [LeetCode](https://leetcode.com/problems/counter-ii/description/)
 *
 * @description
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 *
 * The three functions are:
 *
 * - increment() increases the current value by 1 and then returns it.
 * - decrement() reduces the current value by 1 and then returns it.
 * - reset() sets the current value to init and then returns it.
 *
 * Constraints:
 * - -1000 <= init <= 1000
 * - 0 <= calls.length <= 1000
 * - calls[i] is one of "increment", "decrement" and "reset"
 *
 * @example
 * Input: init = 5, calls = ["increment","reset","decrement"]
 * Output: [6,5,4]
 * Explanation:
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 *
 * @example
 * Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
 * Output: [1,2,1,0,0]
 * Explanation:
 * const counter = createCounter(0);
 * counter.increment(); // 1
 * counter.increment(); // 2
 * counter.decrement(); // 1
 * counter.reset(); // 0
 * counter.reset(); // 0
 *
 * @param {number} init
 * @returns {Counter}
 */
function createCounter(init: number): Counter {
  let temp = init;
  return {
    increment: () => ++temp,
    decrement: () => --temp,
    reset: () => (temp = init),
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

export { createCounter, Counter };
