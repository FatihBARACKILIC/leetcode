package fizz_buzz

import (
	"strconv"
)

// fizzBuzz returns the FizzBuzz sequence as a slice of strings from 1 to n.
//
// Given an integer n, the function returns a 1-indexed slice where:
// - Element is "FizzBuzz" if the index is divisible by both 3 and 5.
// - Element is "Fizz" if the index is divisible by 3.
// - Element is "Buzz" if the index is divisible by 5.
// - Otherwise, the element is the number itself as a string.
//
// Example 1:
// Input: 3
// Output: ["1", "2", "Fizz"]
//
// Example 2:
// Input: 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]
//
// Example 3:
// Input: 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
//
// Parameters:
// - n: An integer representing the upper bound of the FizzBuzz sequence.
//
// Returns:
// - A slice of strings representing the FizzBuzz sequence.
func fizzBuzz(n int) []string {
	answer := []string{}

	for i := 1; i <= n; i++ {
		disableBy3 := i%3 == 0
		disableBy5 := i%5 == 0
		if disableBy3 && disableBy5 {
			answer = append(answer, "FizzBuzz")
		} else if disableBy3 {
			answer = append(answer, "Fizz")
		} else if disableBy5 {
			answer = append(answer, "Buzz")
		} else {
			answer = append(answer, strconv.Itoa(i))
		}
	}

	return answer
}

func fizzBuzz2(n int) []string {
	answer := make([]string, n)
	for i := range answer {
		currentText := ""
		if (i+1)%3 == 0 {
			currentText += "Fizz"
		}
		if (i+1)%5 == 0 {
			currentText += "Buzz"
		}
		if currentText == "" {
			currentText = strconv.Itoa(i + 1)
		}
		answer[i] = currentText
	}
	return answer
}
