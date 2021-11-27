/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (47.51%)
 * Likes:    7111
 * Dislikes: 86
 * Total Accepted:    415.8K
 * Total Submissions: 841.5K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2.
 * 
 * You have the following three operations permitted on a word:
 * 
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= word1.length, word2.length <= 500
 * word1 and word2 consist of lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
};
// @lc code=end
