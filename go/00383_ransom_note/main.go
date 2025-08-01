package ransom_note

// canConstruct determines if the `ransomNote` string can be constructed from the letters of the `magazine` string.
// Each letter in magazine can only be used once in ransomNote.
//
// LeetCode Problem: 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description/
//
// Constraints:
// - 1 <= len(ransomNote), len(magazine) <= 10^5
// - ransomNote and magazine consist of lowercase English letters.
//
// Examples:
// canConstruct("a", "b") => false
// canConstruct("aa", "ab") => false
// canConstruct("aa", "aab") => true
func canConstruct(ransomNote string, magazine string) bool {
	letterCounts := make(map[rune]int)
	for _, letter := range magazine {
		letterCounts[letter]++
	}
	for _, ransomLetter := range ransomNote {
		if letterCounts[ransomLetter] == 0 {
			return false
		}
		letterCounts[ransomLetter]--
	}
	return true
}

func canConstruct2(ransomNote string, magazine string) bool {
	lettersCounts := [26]int{}
	for i := range magazine {
		lettersCounts[magazine[i]-'a']++
	}
	for i := range ransomNote {
		lettersCounts[ransomNote[i]-'a']--
		if lettersCounts[ransomNote[i]-'a'] < 0 {
			return false
		}
	}
	return true
}
