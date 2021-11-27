/*
 * @lc app=leetcode id=991 lang=javascript
 *
 * [991] Broken Calculator
 *
 * https://leetcode.com/problems/broken-calculator/description/
 *
 * algorithms
 * Medium (49.77%)
 * Likes:    1014
 * Dislikes: 143
 * Total Accepted:    45.9K
 * Total Submissions: 91.9K
 * Testcase Example:  '2\n3'
 *
 * There is a broken calculator that has the integer startValue on its display
 * initially. In one operation, you can:
 * 
 * 
 * multiply the number on display by 2, or
 * subtract 1 from the number on display.
 * 
 * 
 * Given two integers startValue and target, return the minimum number of
 * operations needed to display target on the calculator.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: startValue = 2, target = 3
 * Output: 2
 * Explanation: Use double operation and then decrement operation {2 -> 4 ->
 * 3}.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: startValue = 5, target = 8
 * Output: 2
 * Explanation: Use decrement and then double {5 -> 4 -> 8}.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: startValue = 3, target = 10
 * Output: 3
 * Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: startValue = 1024, target = 1
 * Output: 1023
 * Explanation: Use decrement operations 1023 times.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= x, y <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    
};
// @lc code=end
