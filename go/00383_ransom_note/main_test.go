package ransom_note

import (
	"fmt"
	"testing"
)

type testCase struct {
	expected   bool
	ransomNode string
	magazine   string
}

var testCases = []testCase{
	{
		expected:   false,
		ransomNode: "a",
		magazine:   "b",
	},
	{
		expected:   false,
		ransomNode: "aa",
		magazine:   "ab",
	},
	{
		expected:   true,
		ransomNode: "aa",
		magazine:   "aab",
	},
	{
		expected:   false,
		ransomNode: "fihjjjjei",
		magazine:   "hjibagacbhadfaefdjaeaebgi",
	},
}

func TestCanConstruct(t *testing.T) {
	for _, tc := range testCases {
		testMessage := fmt.Sprintf("should return %t for %s & %s", tc.expected, tc.ransomNode, tc.magazine)
		t.Run(testMessage, func(t *testing.T) {
			result := canConstruct(tc.ransomNode, tc.magazine)
			if result != tc.expected {
				t.Errorf("canConstruct(%s, %s) = %t; want %t", tc.ransomNode, tc.magazine, result, tc.expected)
			}
		})
	}
}

func TestCanConstruct2(t *testing.T) {
	for _, tc := range testCases {
		testMessage := fmt.Sprintf("should return %t for %s & %s", tc.expected, tc.ransomNode, tc.magazine)
		t.Run(testMessage, func(t *testing.T) {
			result := canConstruct2(tc.ransomNode, tc.magazine)
			if result != tc.expected {
				t.Errorf("canConstruct2(%s, %s) = %t; want %t", tc.ransomNode, tc.magazine, result, tc.expected)
			}
		})
	}
}
