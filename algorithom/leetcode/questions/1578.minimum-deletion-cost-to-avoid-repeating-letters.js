/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Deletion Cost to Avoid Repeating Letters
 *
 * https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/description/
 *
 * algorithms
 * Medium (60.79%)
 * Likes:    769
 * Dislikes: 31
 * Total Accepted:    50K
 * Total Submissions: 81.6K
 * Testcase Example:  '"abaac"\n[1,2,3,4,5]'
 *
 * Given a string s and an array of integers cost where cost[i] is the cost of
 * deleting the i^th character in s.
 * 
 * Return the minimum cost of deletions such that there are no two identical
 * letters next to each other.
 * 
 * Notice that you will delete the chosen characters at the same time, in other
 * words, after deleting a character, the costs of deleting other characters
 * will not change.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "abaac", cost = [1,2,3,4,5]
 * Output: 3
 * Explanation: Delete the letter "a" with cost 3 to get "abac" (String without
 * two identical letters next to each other).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "abc", cost = [1,2,3]
 * Output: 0
 * Explanation: You don't need to delete any character because there are no
 * identical letters next to each other.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "aabaa", cost = [1,2,3,4,1]
 * Output: 2
 * Explanation: Delete the first and the last character, getting the string
 * ("aba").
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * s.length == cost.length
 * 1 <= s.length, cost.length <= 10^5
 * 1 <= cost[i] <= 10^4
 * s contains only lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    
};
// @lc code=end
