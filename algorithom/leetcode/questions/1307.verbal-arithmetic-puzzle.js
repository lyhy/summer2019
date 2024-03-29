/*
 * @lc app=leetcode id=1307 lang=javascript
 *
 * [1307] Verbal Arithmetic Puzzle
 *
 * https://leetcode.com/problems/verbal-arithmetic-puzzle/description/
 *
 * algorithms
 * Hard (36.12%)
 * Likes:    267
 * Dislikes: 70
 * Total Accepted:    6.3K
 * Total Submissions: 17.9K
 * Testcase Example:  '["SEND","MORE"]\n"MONEY"'
 *
 * Given an equation, represented by words on left side and the result on right
 * side.
 * 
 * You need to check if the equation is solvable under the following
 * rules:
 * 
 * 
 * Each character is decoded as one digit (0 - 9).
 * Every pair of different characters they must map to different digits.
 * Each words[i] and result are decoded as one number without leading
 * zeros.
 * Sum of numbers on left side (words) will equal to the number on right side
 * (result). 
 * 
 * 
 * Return True if the equation is solvable otherwise return False.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: words = ["SEND","MORE"], result = "MONEY"
 * Output: true
 * Explanation: Map 'S'-> 9, 'E'->5, 'N'->6, 'D'->7, 'M'->1, 'O'->0, 'R'->8,
 * 'Y'->'2'
 * Such that: "SEND" + "MORE" = "MONEY" ,  9567 + 1085 = 10652
 * 
 * Example 2:
 * 
 * 
 * Input: words = ["SIX","SEVEN","SEVEN"], result = "TWENTY"
 * Output: true
 * Explanation: Map 'S'-> 6, 'I'->5, 'X'->0, 'E'->8, 'V'->7, 'N'->2, 'T'->1,
 * 'W'->'3', 'Y'->4
 * Such that: "SIX" + "SEVEN" + "SEVEN" = "TWENTY" ,  650 + 68782 + 68782 =
 * 138214
 * 
 * Example 3:
 * 
 * 
 * Input: words = ["THIS","IS","TOO"], result = "FUNNY"
 * Output: true
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: words = ["LEET","CODE"], result = "POINT"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= words.length <= 5
 * 1 <= words[i].length, result.length <= 7
 * words[i], result contain only uppercase English letters.
 * The number of different characters used in the expression is at most 10.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
    
};
// @lc code=end
