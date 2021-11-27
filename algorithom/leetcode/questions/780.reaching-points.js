/*
 * @lc app=leetcode id=780 lang=javascript
 *
 * [780] Reaching Points
 *
 * https://leetcode.com/problems/reaching-points/description/
 *
 * algorithms
 * Hard (30.46%)
 * Likes:    860
 * Dislikes: 140
 * Total Accepted:    36.3K
 * Total Submissions: 117.6K
 * Testcase Example:  '1\n1\n3\n5'
 *
 * Given four integers sx, sy, tx, and ty, return true if it is possible to
 * convert the point (sx, sy) to the point (tx, ty) through some operations, or
 * false otherwise.
 * 
 * The allowed operation on some point (x, y) is to convert it to either (x, x
 * + y) or (x + y, y).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: sx = 1, sy = 1, tx = 3, ty = 5
 * Output: true
 * Explanation:
 * One series of moves that transforms the starting point to the target is:
 * (1, 1) -> (1, 2)
 * (1, 2) -> (3, 2)
 * (3, 2) -> (3, 5)
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: sx = 1, sy = 1, tx = 2, ty = 2
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: sx = 1, sy = 1, tx = 1, ty = 1
 * Output: true
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= sx, sy, tx, ty <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    
};
// @lc code=end
