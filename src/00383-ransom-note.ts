/**
 * # 383. Ransom Note
 * @link [LeetCode](https://leetcode.com/problems/ransom-note/description/)
 *
 * @description
 * Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.
 *
 * Each letter in `magazine` can only be used once in `ransomNote`.
 *
 * - 1 <= `ransomNote.length`, `magazine.length` <= 105
 * - `ransomNote` and `magazine` consist of lowercase English letters.
 *
 * @example canConstruct("a", "b"): false;
 * | Input: `ransomNote = "a", magazine = "b"`
 * | Output: `false`
 *
 * @example canConstruct("aa", "ab"): false;
 * | Input: `ransomNote = "aa", magazine = "ab"`
 * | Output: `false`
 *
 * @example canConstruct("aa", "aab"): true;
 * | Input: `ransomNote = "aa", magazine = "aab"`
 * | Output: `true`
 *
 * @function canConstruct
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const letterIndex = new Map<string, number>();
  for (const char of ransomNote) {
    const start = (letterIndex.get(char) ?? -1) + 1;
    const pos = magazine.indexOf(char, start);
    if (pos === -1) return false;
    letterIndex.set(char, pos);
  }
  return true;
}
function canConstruct2(ransomNote: string, magazine: string): boolean {
  const magazineLetters = new Map<string, number>();
  for (let i = 0; i < magazine.length; i++) {
    const m = magazine.charAt(i);
    const currentCount = magazineLetters.get(m) ?? 0;
    magazineLetters.set(m, currentCount + 1);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const r = ransomNote.charAt(i);
    const currentCount = magazineLetters.get(r) ?? 0;
    if (currentCount === 0) return false;
    magazineLetters.set(r, currentCount - 1);
  }
  return true;
}

export { canConstruct, canConstruct2 };
