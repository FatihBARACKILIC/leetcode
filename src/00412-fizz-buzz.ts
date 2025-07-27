/**
 * # 412. Fizz Buzz
 * @link [LeetCode](https://leetcode.com/problems/fizz-buzz/description/)
 *
 * @description
 * Given an integer `n`, return a _string array_ `answer` **_(1-indexed)_** where:
 * - `answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
 * - `answer[i] == "Fizz"` if `i` is divisible by `3`.
 * - `answer[i] == "Buzz"` if `i` is divisible by `5`.
 * - `answer[i] == i` (as a string) if none of the above conditions are true.
 *
 * @example fizzBuzz(3): ["1","2","Fizz"];
 * @example fizzBuzz(5): ["1","2","Fizz","4","Buzz"];
 * @example fizzBuzz(15): ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
 *
 * @function fizzBuzz
 * @param {number} n - The upper bound for the sequence.
 * @returns {string[]} The FizzBuzz sequence from 1 to n.
 */
function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      answer.push("FizzBuzz");
    } else if (divisibleBy3) {
      answer.push("Fizz");
    } else if (divisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
}

function fizzBuzz2(n: number): string[] {
  const answer: string[] = [];
  for (let i = 1; i <= n; i++) {
    let currString = "";
    if (i % 3 === 0) {
      currString += "Fizz";
    }
    if (i % 5 === 0) {
      currString += "Buzz";
    }
    if (!currString) {
      currString = i.toString();
    }
    answer.push(currString);
  }
  return answer;
}

export { fizzBuzz, fizzBuzz2 };
