package fizz_buzz

import (
	"strconv"
)

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
