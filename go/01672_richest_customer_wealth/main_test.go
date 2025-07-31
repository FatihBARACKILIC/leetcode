package richest_customer_wealth

import (
	"fmt"
	"testing"
)

func TestMaximumWealth(t *testing.T) {
	tests := []struct {
		accounts [][]int
		expected int
	}{
		{
			accounts: [][]int{{1, 2, 3}, {3, 2, 1}},
			expected: 6,
		},
		{
			accounts: [][]int{{1, 5}, {7, 3}, {3, 5}},
			expected: 10,
		},
		{
			accounts: [][]int{{2, 8, 7}, {7, 1, 3}, {1, 9, 5}},
			expected: 17,
		},
	}

	for _, testData := range tests {
		testMessage := fmt.Sprintf("should return %v", testData.expected)
		t.Run(testMessage, func(t *testing.T) {
			result := maximumWealth(testData.accounts)
			if result != testData.expected {
				t.Errorf("maximumWealth([...]) = %v; want %v", result, testData.expected)
			}
		})
	}
}
