/**
 * # 2438. Range Product Queries of Powers
 * @link [LeetCode](https://leetcode.com/problems/range-product-queries-of-powers/description/)
 *
 * @description
 * Given a positive integer `n`, there exists a **0-indexed** array called `powers`, composed of the **minimum** number of powers of `2` that sum to `n`. The array is sorted in **non-decreasing** order, and there is **only one** way to form the array.
 * You are also given a **0-indexed** 2D integer array `queries`, where `queries[i] = [leftₖ, rightₖ]`. Each `queries[i]` represents a query where you have to find the product of all `powers[j]` with `leftₖ <= j <= rightₖ`.
 * Return *an array* `answers`, *equal in length to* `queries`, *where* `answers[i]` *is the answer to the* `iᵗʰ` *query*. Since the answer to the `iᵗʰ` query may be too large, each `answers[i]` should be returned **modulo** `10⁹ + 7`.
 *
 * @example productQueries(15, [[0,1],[2,2],[0,3]]): [2,4,64];
 * Explanation:
 * For n = 15, powers = [1,2,4,8]. It can be shown that powers cannot be a smaller size.
 * Answer to 1st query: powers[0] * powers[1] = 1 * 2 = 2.
 * Answer to 2nd query: powers[2] = 4.
 * Answer to 3rd query: powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64.
 * Each answer modulo 109 + 7 yields the same answer, so [2,4,64] is returned.
 *
 * @example productQueries(2, [[0,0]]): [2];
 * Explanation:
 * For n = 2, powers = [2].
 * The answer to the only query is powers[0] = 2. The answer modulo 109 + 7 is the same, so [2] is returned.
 *
 * @function productQueries
 * @param {number} n
 * @param {number[][]} queries
 * @returns {number[]}
 */
function productQueries(n: number, queries: number[][]): number[] {
  const MOD = 1000000007;
  let powers: number[] = [];
  let rep = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      powers.push(rep);
    }
    n = Math.floor(n / 2);
    rep *= 2;
  }

  const result: number[] = [];
  for (const [start, end] of queries) {
    let total = powers[start];
    for (let i = start + 1; i <= end; i++) {
      total = (total * powers[i]) % MOD;
    }
    result.push(total);
  }

  return result;
}

//! ERROR: Time Limit Exceeded
function productQueries2(n: number, queries: number[][]): number[] {
  const MOD = 1000000007;
  let powers: number[] = [];
  for (let i = n; i > 0; i--) {
    if (!(i & (i - 1)) && n - i >= 0) {
      n -= i;
      powers.unshift(i);
      i = n + 1;
    }
  }

  const result: number[] = [];
  for (const [start, end] of queries) {
    let total = powers[start];
    for (let i = start + 1; i <= end; i++) {
      total = (total * powers[i]) % MOD;
    }
    result.push(total);
  }

  return result;
}

export { productQueries, productQueries2 };
