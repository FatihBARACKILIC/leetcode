/**
 * # 2264. Largest 3-Same-Digit Number in String
 * @link [LeetCode](https://leetcode.com/problems/largest-3-same-digit-number-in-string/)
 *
 * @description
 * You are given a string `num` representing a large integer. An integer is **good** if it meets the following conditions:
 *
 * - It is a **substring** of `num` with length `3`.
 * - It consists of only one unique digit.
 *
 * Return the **maximum good** integer as a **string** or an empty string `""` if no such integer exists.
 *
 * Note
 * - A **substring** is a contiguous sequence of characters within a string.
 * - There may be **leading zeroes** in `num` or a good integer.
 *
 * Constraints:
 * - 3 <= num.length <= 1000
 * - num only consists of digits.
 *
 * @example largestGoodInteger("6777133339"): "777";
 * Explanation: There are two distinct good integers: "777" and "333".
 * "777" is the largest, so we return "777".
 *
 * @example largestGoodInteger("2300019"): "000";
 * Explanation: "000" is the only good integer.
 *
 * @example largestGoodInteger("42352338"): "";
 * Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
 *
 * @param {string} num
 * @returns {string}
 */
function largestGoodInteger(num: string): string {
  let holdedNumber: number | undefined;
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] !== num[i + 1] || num[i] !== num[i + 2]) continue;
    if (holdedNumber === undefined || +num[i] > holdedNumber)
      holdedNumber = +num[i];
  }

  return holdedNumber === undefined
    ? ""
    : "".padEnd(3, holdedNumber.toString());
}

export { largestGoodInteger };
