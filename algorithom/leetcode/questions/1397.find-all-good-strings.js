/*
 * @lc app=leetcode id=1397 lang=javascript
 *
 * [1397] Find All Good Strings
 *
 * https://leetcode.com/problems/find-all-good-strings/description/
 *
 * algorithms
 * Hard (38.93%)
 * Likes:    240
 * Dislikes: 94
 * Total Accepted:    3.4K
 * Total Submissions: 8.5K
 * Testcase Example:  '2\n"aa"\n"da"\n"b"'
 *
 * Given the strings s1 and s2 of size n and the string evil, return the number
 * of good strings.
 * 
 * A good string has size n, it is alphabetically greater than or equal to s1,
 * it is alphabetically smaller than or equal to s2, and it does not contain
 * the string evil as a substring. Since the answer can be a huge number,
 * return this modulo 10^9 + 7.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 2, s1 = "aa", s2 = "da", evil = "b"
 * Output: 51 
 * Explanation: There are 25 good strings starting with 'a':
 * "aa","ac","ad",...,"az". Then there are 25 good strings starting with 'c':
 * "ca","cc","cd",...,"cz" and finally there is one good string starting with
 * 'd': "da". 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
 * Output: 0 
 * Explanation: All strings greater than or equal to s1 and smaller than or
 * equal to s2 start with the prefix "leet", therefore, there is not any good
 * string.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: n = 2, s1 = "gx", s2 = "gz", evil = "x"
 * Output: 2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * s1.length == n
 * s2.length == n
 * s1 <= s2
 * 1 <= n <= 500
 * 1 <= evil.length <= 50
 * All strings consist of lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function(n, s1, s2, evil) {
    
};
// @lc code=end
