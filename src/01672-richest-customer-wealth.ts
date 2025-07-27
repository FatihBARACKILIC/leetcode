/**
 * # 1672. Richest Customer Wealth
 * @link [LeetCode](https://leetcode.com/problems/richest-customer-wealth/description/)
 *
 * You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i​​​​​​​​​​​th​​​​` customer has in the `j​​​​​​​​​​​th​​​​` bank. Return the wealth that the richest customer has.
 *
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 *
 * @example maximumWealth([[1,2,3],[3,2,1]]): 6;
 * Explanation:
 * 1st customer has wealth = 1 + 2 + 3 = 6
 * 2nd customer has wealth = 3 + 2 + 1 = 6
 * Both customers are considered the richest with a wealth of 6 each, so return 6.
 *
 * @example maximumWealth([[1,5],[7,3],[3,5]]): 10;
 * Explanation:
 * 1st customer has wealth = 6
 * 2nd customer has wealth = 10
 * 3rd customer has wealth = 8
 * The 2nd customer is the richest with a wealth of 10.
 *
 * @example maximumWealth([[2,8,7],[7,1,3],[1,9,5]]): 17;
 *
 * @function maximumWealth
 * @param {number[][]} accounts - A 2D array where `accounts[i]` is a list of the `i`th customer's bank account balances.
 * @returns {number} The wealth of the richest customer.
 */
function maximumWealth(accounts: number[][]): number {
  let maxBalance = 0;
  accounts.forEach((balances) => {
    const totalOfBalance = balances.reduce((prev, curr) => prev + curr, 0);
    if (totalOfBalance > maxBalance) {
      maxBalance = totalOfBalance;
    }
  });
  return maxBalance;
}

function maximumWealth2(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((balances) =>
      balances.reduce((prev, curr) => prev + curr, 0)
    )
  );
}

export { maximumWealth, maximumWealth2 };
