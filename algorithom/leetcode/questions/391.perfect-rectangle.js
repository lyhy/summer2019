/*
 * @lc app=leetcode id=391 lang=javascript
 *
 * [391] Perfect Rectangle
 *
 * https://leetcode.com/problems/perfect-rectangle/description/
 *
 * algorithms
 * Hard (31.31%)
 * Likes:    543
 * Dislikes: 95
 * Total Accepted:    32.4K
 * Total Submissions: 101.8K
 * Testcase Example:  '[[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]'
 *
 * Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents
 * an axis-aligned rectangle. The bottom-left point of the rectangle is (xi,
 * yi) and the top-right point of it is (ai, bi).
 * 
 * Return true if all the rectangles together form an exact cover of a
 * rectangular region.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
 * Output: true
 * Explanation: All 5 rectangles together form an exact cover of a rectangular
 * region.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
 * Output: false
 * Explanation: Because there is a gap between the two rectangular regions.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[3,2,4,4]]
 * Output: false
 * Explanation: Because there is a gap in the top center.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
 * Output: false
 * Explanation: Because two of the rectangles overlap with each other.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= rectangles.length <= 2 * 10^4
 * rectangles[i].length == 4
 * -10^5 <= xi, yi, ai, bi <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    
};
// @lc code=end
