package richest_customer_wealth

// maximumWealth returns the wealth of the richest customer.
//
// Given a 2D slice 'accounts' where accounts[i][j] represents the amount of money
// the i-th customer has in the j-th bank, this function calculates and returns
// the maximum total wealth across all customers.
//
// A customer's wealth is the sum of money in all of their bank accounts.
//
// Example 1:
// Input:  [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6.
//
// Example 2:
// Input:  [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest.
//
// Example 3:
// Input:  [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
//
// Parameters:
// - accounts: A 2D slice of integers, where accounts[i] is a list of bank balances for the i-th customer.
//
// Returns:
// - An integer representing the maximum wealth found among all customers.
func maximumWealth(accounts [][]int) int {
	maxBalance := 0
	for _, balances := range accounts {
		totalBalance := 0
		for _, balance := range balances {
			totalBalance += balance
		}
		if totalBalance > maxBalance {
			maxBalance = totalBalance
		}
	}
	return maxBalance
}
