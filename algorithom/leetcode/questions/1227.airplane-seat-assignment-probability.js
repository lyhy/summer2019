/*
 * @lc app=leetcode id=1227 lang=javascript
 *
 * [1227] Airplane Seat Assignment Probability
 *
 * https://leetcode.com/problems/airplane-seat-assignment-probability/description/
 *
 * algorithms
 * Medium (62.37%)
 * Likes:    319
 * Dislikes: 588
 * Total Accepted:    22.1K
 * Total Submissions: 34.9K
 * Testcase Example:  '1'
 *
 * n passengers board an airplane with exactly n seats. The first passenger has
 * lost the ticket and picks a seat randomly. But after that, the rest of
 * passengers will:
 * 
 * 
 * Take their own seat if it is still available, 
 * Pick other seats randomly when they find their seat occupied 
 * 
 * 
 * What is the probability that the n-th person can get his own seat?
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 1
 * Output: 1.00000
 * Explanation: The first person can only get the first seat.
 * 
 * Example 2:
 * 
 * 
 * Input: n = 2
 * Output: 0.50000
 * Explanation: The second person has a probability of 0.5 to get the second
 * seat (when first person gets the first seat).
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^5
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
    
};
// @lc code=end
