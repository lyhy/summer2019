/*
 * @lc app=leetcode id=1444 lang=javascript
 *
 * [1444] Number of Ways of Cutting a Pizza
 *
 * https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/description/
 *
 * algorithms
 * Hard (54.28%)
 * Likes:    387
 * Dislikes: 14
 * Total Accepted:    10.8K
 * Total Submissions: 19.6K
 * Testcase Example:  '["A..","AAA","..."]\n3'
 *
 * Given a rectangular pizza represented as a rows x cols matrix containing the
 * following characters: 'A' (an apple) and '.' (empty cell) and given the
 * integer k. You have to cut the pizza into k pieces using k-1 cuts. 
 * 
 * For each cut you choose the direction: vertical or horizontal, then you
 * choose a cut position at the cell boundary and cut the pizza into two
 * pieces. If you cut the pizza vertically, give the left part of the pizza to
 * a person. If you cut the pizza horizontally, give the upper part of the
 * pizza to a person. Give the last piece of pizza to the last person.
 * 
 * Return the number of ways of cutting the pizza such that each piece contains
 * at least one apple. Since the answer can be a huge number, return this
 * modulo 10^9 + 7.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: pizza = ["A..","AAA","..."], k = 3
 * Output: 3 
 * Explanation: The figure above shows the three ways to cut the pizza. Note
 * that pieces must contain at least one apple.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: pizza = ["A..","AA.","..."], k = 3
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: pizza = ["A..","A..","..."], k = 1
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= rows, cols <= 50
 * rows == pizza.length
 * cols == pizza[i].length
 * 1 <= k <= 10
 * pizza consists of characters 'A' and '.' only.
 * 
 */

// @lc code=start
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    
};
// @lc code=end
