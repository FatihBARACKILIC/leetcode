/**
 * # 2621. Sleep
 * @link [LeetCode](https://leetcode.com/problems/sleep/description/)
 *
 * @description
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 *
 * Note that minor deviation from millis in the actual sleep duration is acceptable.
 *
 * Constraints:
 * - 1 <= millis <= 1000
 *
 * @example sleep(100);
 * Output: 100
 * It should return a promise that resolves after 100ms.
 * let t = Date.now();
 * sleep(100).then(() => {
 *   console.log(Date.now() - t); // 100
 * });
 *
 * @example sleep(200);
 * Output: 200
 * It should return a promise that resolves after 200ms.
 *
 * @param {number} millis
 * @returns {Promise<void>}
 */
async function sleep(millis: number): Promise<void> {
  return new Promise((res) => setTimeout(res, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

export { sleep };
