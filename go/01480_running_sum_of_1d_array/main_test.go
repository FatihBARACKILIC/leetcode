package running_sum_of_1d_array

import (
	"fmt"
	"reflect"
	"testing"
)

func TestRunningSum(t *testing.T) {
	tests := []struct {
		numbers  []int
		expected []int
	}{
		{
			numbers:  []int{1, 2, 3, 4},
			expected: []int{1, 3, 6, 10},
		},
		{
			numbers:  []int{1, 1, 1, 1, 1},
			expected: []int{1, 2, 3, 4, 5},
		},
		{
			numbers:  []int{3, 1, 2, 10, 1},
			expected: []int{3, 4, 6, 16, 17},
		},
	}

	for _, testCase := range tests {
		testMessage := fmt.Sprintf("should return running sum of %v as %v", testCase.numbers, testCase.expected)
		t.Run(testMessage, func(t *testing.T) {
			result := runningSum(testCase.numbers)
			if !reflect.DeepEqual(result, testCase.expected) {
				t.Errorf("runningSum(%v) = %v; want %v", testCase.numbers, result, testCase.expected)
			}
		})
	}
}
