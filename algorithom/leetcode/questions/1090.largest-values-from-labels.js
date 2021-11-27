/*
 * @lc app=leetcode id=1090 lang=javascript
 *
 * [1090] Largest Values From Labels
 *
 * https://leetcode.com/problems/largest-values-from-labels/description/
 *
 * algorithms
 * Medium (60.18%)
 * Likes:    256
 * Dislikes: 527
 * Total Accepted:    24.8K
 * Total Submissions: 41K
 * Testcase Example:  '[5,4,3,2,1]\n[1,1,2,2,3]\n3\n1'
 *
 * There is a set of n items. You are given two integer arrays values and
 * labels where the value and the label of the i^th element are values[i] and
 * labels[i] respectively. You are also given two integers numWanted and
 * useLimit.
 * 
 * Choose a subset s of the n elements such that:
 * 
 * 
 * The size of the subset s is less than or equal to numWanted.
 * There are at most useLimit items with the same label in s.
 * 
 * 
 * The score of a subset is the sum of the values in the subset.
 * 
 * Return the maximum score of a subset s.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit =
 * 1
 * Output: 9
 * Explanation: The subset chosen is the first, third, and fifth items.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit =
 * 2
 * Output: 12
 * Explanation: The subset chosen is the first, second, and third items.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit =
 * 1
 * Output: 16
 * Explanation: The subset chosen is the first and fourth items.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit =
 * 2
 * Output: 24
 * Explanation: The subset chosen is the first, second, and fourth items.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == values.length == labels.length
 * 1 <= n <= 2 * 10^4
 * 0 <= values[i], labels[i] <= 2 * 10^4
 * 1 <= numWanted, useLimit <= n
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    
};
// @lc code=end
