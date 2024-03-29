/*
 * @lc app=leetcode id=916 lang=javascript
 *
 * [916] Word Subsets
 *
 * https://leetcode.com/problems/word-subsets/description/
 *
 * algorithms
 * Medium (52.75%)
 * Likes:    853
 * Dislikes: 116
 * Total Accepted:    47.5K
 * Total Submissions: 89.7K
 * Testcase Example:  '["amazon","apple","facebook","google","leetcode"]\n["e","o"]'
 *
 * You are given two string arrays words1 and words2.
 * 
 * A string b is a subset of string a if every letter in b occurs in a
 * including multiplicity.
 * 
 * 
 * For example, "wrr" is a subset of "warrior" but is not a subset of
 * "world".
 * 
 * 
 * A string a from words1 is universal if for every string b in words2, b is a
 * subset of a.
 * 
 * Return an array of all the universal strings in words1. You may return the
 * answer in any order.
 * 
 * 
 * Example 1:
 * Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["e","o"]
 * Output: ["facebook","google","leetcode"]
 * Example 2:
 * Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["l","e"]
 * Output: ["apple","google","leetcode"]
 * Example 3:
 * Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["e","oo"]
 * Output: ["facebook","google"]
 * Example 4:
 * Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["lo","eo"]
 * Output: ["google","leetcode"]
 * Example 5:
 * Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["ec","oc","ceo"]
 * Output: ["facebook","leetcode"]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= words1.length, words2.length <= 10^4
 * 1 <= words1[i].length, words2[i].length <= 10
 * words1[i] and words2[i] consist only of lowercase English letters.
 * All the strings of words1 are unique.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    
};
// @lc code=end
