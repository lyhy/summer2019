/*
 * @lc app=leetcode id=472 lang=javascript
 *
 * [472] Concatenated Words
 *
 * https://leetcode.com/problems/concatenated-words/description/
 *
 * algorithms
 * Hard (43.72%)
 * Likes:    1610
 * Dislikes: 196
 * Total Accepted:    114.5K
 * Total Submissions: 267.1K
 * Testcase Example:  '["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]'
 *
 * Given an array of strings words (without duplicates), return all the
 * concatenated words in the given list of words.
 * 
 * A concatenated word is defined as a string that is comprised entirely of at
 * least two shorter words in the given array.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: words =
 * ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 * "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
 * "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
 * 
 * Example 2:
 * 
 * 
 * Input: words = ["cat","dog","catdog"]
 * Output: ["catdog"]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= words.length <= 10^4
 * 0 <= words[i].length <= 1000
 * words[i] consists of only lowercase English letters.
 * 0 <= sum(words[i].length) <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
};
// @lc code=end
