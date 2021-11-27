/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 *
 * https://leetcode.com/problems/elimination-game/description/
 *
 * algorithms
 * Medium (45.47%)
 * Likes:    690
 * Dislikes: 467
 * Total Accepted:    42.4K
 * Total Submissions: 92.2K
 * Testcase Example:  '9'
 *
 * You have a list arr of all integers in the range [1, n] sorted in a strictly
 * increasing order. Apply the following algorithm on arr:
 * 
 * 
 * Starting from left to right, remove the first number and every other number
 * afterward until you reach the end of the list.
 * Repeat the previous step again, but this time from right to left, remove the
 * rightmost number and every other number from the remaining numbers.
 * Keep repeating the steps again, alternating left to right and right to left,
 * until a single number remains.
 * 
 * 
 * Given the integer n, return the last number that remains in arr.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 9
 * Output: 6
 * Explanation:
 * arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * arr = [2, 4, 6, 8]
 * arr = [2, 6]
 * arr = [6]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 1
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    
};
// @lc code=end
