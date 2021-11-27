/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 *
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/description/
 *
 * algorithms
 * Medium (36.27%)
 * Likes:    955
 * Dislikes: 124
 * Total Accepted:    32.9K
 * Total Submissions: 88.8K
 * Testcase Example:  '"a"'
 *
 * We define the string s to be the infinite wraparound string of
 * "abcdefghijklmnopqrstuvwxyz", so s will look like this:
 * 
 * 
 * "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
 * 
 * 
 * Given a string p, return the number of unique non-empty substrings of p are
 * present in s.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: p = "a"
 * Output: 1
 * Explanation: Only the substring "a" of p is in s.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: p = "cac"
 * Output: 2
 * Explanation: There are two substrings ("a", "c") of p in s.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: p = "zab"
 * Output: 6
 * Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab")
 * of p in s.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= p.length <= 10^5
 * p consists of lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    
};
// @lc code=end
