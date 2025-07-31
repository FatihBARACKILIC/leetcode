package fizz_buzz

import (
	"reflect"
	"testing"
)

type TestCase struct {
	n        int
	expected []string
}

var tests = []TestCase{
	{
		n:        3,
		expected: []string{"1", "2", "Fizz"},
	},
	{
		n:        5,
		expected: []string{"1", "2", "Fizz", "4", "Buzz"},
	},
	{
		n: 15,
		expected: []string{
			"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
			"11", "Fizz", "13", "14", "FizzBuzz",
		},
	},
}

func TestFizzBuzz(t *testing.T) {
	for _, tt := range tests {
		t.Run("n = "+string(rune(tt.n)), func(t *testing.T) {
			result := fizzBuzz(tt.n)
			if !reflect.DeepEqual(result, tt.expected) {
				t.Errorf("fizzBuzz(%d) = %v; want %v", tt.n, result, tt.expected)
			}
		})
	}
}

func TestFizzBuzz2(t *testing.T) {
	for _, tt := range tests {
		t.Run("n = "+string(rune(tt.n)), func(t *testing.T) {
			result := fizzBuzz2(tt.n)
			if !reflect.DeepEqual(result, tt.expected) {
				t.Errorf("fizzBuzz2(%d) = %v; want %v", tt.n, result, tt.expected)
			}
		})
	}
}
