/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 *
 * https://leetcode.com/problems/different-ways-to-add-parentheses/description/
 *
 * algorithms
 * Medium (57.92%)
 * Likes:    2953
 * Dislikes: 155
 * Total Accepted:    143.7K
 * Total Submissions: 239.6K
 * Testcase Example:  '"2-1-1"'
 *
 * Given a string expression of numbers and operators, return all possible
 * results from computing all the different possible ways to group numbers and
 * operators. You may return the answer in any order.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: expression = "2-1-1"
 * Output: [0,2]
 * Explanation:
 * ((2-1)-1) = 0 
 * (2-(1-1)) = 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: expression = "2*3-4*5"
 * Output: [-34,-14,-10,-10,10]
 * Explanation:
 * (2*(3-(4*5))) = -34 
 * ((2*3)-(4*5)) = -14 
 * ((2*(3-4))*5) = -10 
 * (2*((3-4)*5)) = -10 
 * (((2*3)-4)*5) = 10
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= expression.length <= 20
 * expression consists of digits and the operator '+', '-', and '*'.
 * All the integer values in the input expression are in the range [0, 99].
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    
};
// @lc code=end
