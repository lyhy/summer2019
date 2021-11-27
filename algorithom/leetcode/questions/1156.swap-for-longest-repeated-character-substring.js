/*
 * @lc app=leetcode id=1156 lang=javascript
 *
 * [1156] Swap For Longest Repeated Character Substring
 *
 * https://leetcode.com/problems/swap-for-longest-repeated-character-substring/description/
 *
 * algorithms
 * Medium (47.03%)
 * Likes:    621
 * Dislikes: 58
 * Total Accepted:    20.4K
 * Total Submissions: 43.4K
 * Testcase Example:  '"ababa"'
 *
 * You are given a string text. You can swap two of the characters in the
 * text.
 * 
 * Return the length of the longest substring with repeated characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text = "ababa"
 * Output: 3
 * Explanation: We can swap the first 'b' with the last 'a', or the last 'b'
 * with the first 'a'. Then, the longest repeated character substring is "aaa",
 * which its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text = "aaabaaa"
 * Output: 6
 * Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get
 * longest repeated character substring "aaaaaa", which its length is 6.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text = "aaabbaaa"
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: text = "aaaaa"
 * Output: 5
 * Explanation: No need to swap, longest repeated character substring is
 * "aaaaa", length is 5.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: text = "abcdef"
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text.length <= 2 * 10^4
 * text consist of lowercase English characters only.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    
};
// @lc code=end
