/*
 * @lc app=leetcode id=850 lang=javascript
 *
 * [850] Rectangle Area II
 *
 * https://leetcode.com/problems/rectangle-area-ii/description/
 *
 * algorithms
 * Hard (48.53%)
 * Likes:    724
 * Dislikes: 45
 * Total Accepted:    27K
 * Total Submissions: 51.1K
 * Testcase Example:  '[[0,0,2,2],[1,0,2,3],[1,0,3,1]]'
 *
 * You are given a 2D array of axis-aligned rectangles. Each rectangle[i] =
 * [xi1, yi1, xi2, yi2] denotes the i^th rectangle where (xi1, yi1) are the
 * coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of
 * the top-right corner.
 * 
 * Calculate the total area covered by all rectangles in the plane. Any area
 * covered by two or more rectangles should only be counted once.
 * 
 * Return the total area. Since the answer may be too large, return it modulo
 * 10^9 + 7.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
 * Output: 6
 * Explanation: A total area of 6 is covered by all three rectangales, as
 * illustrated in the picture.
 * From (1,1) to (2,2), the green and red rectangles overlap.
 * From (1,0) to (2,3), all three rectangles overlap.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: rectangles = [[0,0,1000000000,1000000000]]
 * Output: 49
 * Explanation: The answer is 10^18 modulo (10^9 + 7), which is 49.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= rectangles.length <= 200
 * rectanges[i].length == 4
 * 0 <= xi1, yi1, xi2, yi2 <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
    
};
// @lc code=end
