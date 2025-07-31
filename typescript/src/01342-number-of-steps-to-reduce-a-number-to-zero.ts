/**
 * # 1342. Number of Steps to Reduce a Number to Zero
 * @link [LeetCode](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/)
 *
 * @description
 * Given an integer `num`, return the number of steps to reduce it to zero.
 *
 * In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.
 *
 * @example numberOfSteps(14): 6;
 * - `Step 1) 14 is even; divide by 2 and obtain 7.`
 * - `Step 2) 7 is odd; subtract 1 and obtain 6.`
 * - `Step 3) 6 is even; divide by 2 and obtain 3. `
 * - `Step 4) 3 is odd; subtract 1 and obtain 2. `
 * - `Step 5) 2 is even; divide by 2 and obtain 1. `
 * - `Step 6) 1 is odd; subtract 1 and obtain 0.`
 *
 * @example numberOfSteps(8): 4;
 * - `Step 1) 8 is even; divide by 2 and obtain 4.`
 * - `Step 2) 4 is even; divide by 2 and obtain 2.`
 * - `Step 3) 2 is even; divide by 2 and obtain 1.`
 * - `Step 4) 1 is odd; subtract 1 and obtain 0.`
 *
 * @example numberOfSteps(123): 12;
 *
 * @function numberOfSteps
 * @param {number} num - The non-negative integer to reduce to zero.
 * @returns {number} The number of steps to reduce `num` to zero.
 */
function numberOfSteps(num: number): number {
  let counter = 0;

  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    counter++;
  }

  return counter;
}

function numberOfStepsBitManipulation(num: number): number {
  if (num === 0) {
    return 0;
  }

  let counter = 0;

  while (num > 0) {
    counter += (num & 1) === 0 ? 1 : 2;
    num >>= 1;
  }

  return counter - 1;
}

function numberOfStepsBitManipulation2(num: number): number {
  let counter = 0;

  while (num > 0) {
    counter += (num & 1) === 0 || num === 1 ? 1 : 2;
    num >>= 1;
  }

  return counter;
}

export {
  numberOfSteps,
  numberOfStepsBitManipulation,
  numberOfStepsBitManipulation2,
};
