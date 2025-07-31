package running_sum_of_1d_array

// Package main provides a solution for the LeetCode problem "1480. Running Sum of 1d Array".
// https://leetcode.com/problems/running-sum-of-1d-array/description/

// runningSum returns the running sum of a given integer slice.
// A running sum is defined as: runningSum[i] = sum(nums[0]…nums[i]).
//
// Example:
//
//	runningSum([]int{1, 2, 3, 4}) => []int{1, 3, 6, 10}
//	// Explanation: [1, 1+2, 1+2+3, 1+2+3+4]
//
//	runningSum([]int{1, 1, 1, 1, 1}) => []int{1, 2, 3, 4, 5}
//	// Explanation: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
//
//	runningSum([]int{3, 1, 2, 10, 1}) => []int{3, 4, 6, 16, 17}
//
// Parameters:
//   - nums: A slice of integers.
//
// Returns:
//   - A slice of integers representing the running sum.
func runningSum(nums []int) []int {
	for i := 1; i < len(nums); i++ {
		nums[i] += nums[i-1]
	}
	return nums
}
