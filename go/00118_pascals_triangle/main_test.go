package pascals_triangle

import (
	"fmt"
	"reflect"
	"testing"
)

func TestGenerate(t *testing.T) {
	tests := []struct {
		numRows  int
		expected [][]int
	}{
		{
			numRows:  1,
			expected: [][]int{{1}},
		},
		{
			numRows:  1,
			expected: [][]int{{1}, {1, 1}, {1, 2, 1}, {1, 3, 3, 1}, {1, 4, 6, 4, 1}},
		},
	}
	for _, testData := range tests {
		testMessage := fmt.Sprintf("should return %v for %v", testData.expected, testData.numRows)
		t.Run(testMessage, func(t *testing.T) {
			result := generate(testData.numRows)
			if !reflect.DeepEqual(result, testData.expected) {
				t.Errorf("generate(%v) = %v; want %v", testData.numRows, result, testData.expected)
			}
		})
	}
}
