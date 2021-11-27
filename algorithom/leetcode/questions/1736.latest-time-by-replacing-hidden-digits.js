/*
 * @lc app=leetcode id=1736 lang=javascript
 *
 * [1736] Latest Time by Replacing Hidden Digits
 *
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/
 *
 * algorithms
 * Easy (41.38%)
 * Likes:    172
 * Dislikes: 94
 * Total Accepted:    19.4K
 * Total Submissions: 46.4K
 * Testcase Example:  '"2?:?0"'
 *
 * You are given a string time in the form of  hh:mm, where some of the digits
 * in the string are hidden (represented by ?).
 * 
 * The valid times are those inclusively between 00:00 and 23:59.
 * 
 * Return the latest valid time you can get from time by replacing the hidden
 * digits.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: time = "2?:?0"
 * Output: "23:50"
 * Explanation: The latest hour beginning with the digit '2' is 23 and the
 * latest minute ending with the digit '0' is 50.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: time = "0?:3?"
 * Output: "09:39"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: time = "1?:22"
 * Output: "19:22"
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * time is in the format hh:mm.
 * It is guaranteed that you can produce a valid time from the given string.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    
};
// @lc code=end
