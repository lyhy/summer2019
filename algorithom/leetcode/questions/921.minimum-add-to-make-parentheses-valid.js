/*
 * @lc app=leetcode id=921 lang=javascript
 *
 * [921] Minimum Add to Make Parentheses Valid
 *
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 *
 * algorithms
 * Medium (75.14%)
 * Likes:    1858
 * Dislikes: 105
 * Total Accepted:    150.1K
 * Total Submissions: 194.3K
 * Testcase Example:  '"())"'
 *
 * A parentheses string is valid if and only if:
 * 
 * 
 * It is the empty string,
 * It can be written as AB (A concatenated with B), where A and B are valid
 * strings, or
 * It can be written as (A), where A is a valid string.
 * 
 * 
 * You are given a parentheses string s. In one move, you can insert a
 * parenthesis at any position of the string.
 * 
 * 
 * For example, if s = "()))", you can insert an opening parenthesis to be
 * "(()))" or a closing parenthesis to be "())))".
 * 
 * 
 * Return the minimum number of moves required to make s valid.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "())"
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "((("
 * Output: 3
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "()"
 * Output: 0
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: s = "()))(("
 * Output: 4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 1000
 * s[i] is either '(' or ')'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
};
// @lc code=end
