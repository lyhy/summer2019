/*
 * @lc app=leetcode id=546 lang=javascript
 *
 * [546] Remove Boxes
 *
 * https://leetcode.com/problems/remove-boxes/description/
 *
 * algorithms
 * Hard (44.06%)
 * Likes:    1367
 * Dislikes: 89
 * Total Accepted:    32.1K
 * Total Submissions: 67.9K
 * Testcase Example:  '[1,3,2,2,2,3,4,3,1]'
 *
 * You are given several boxes with different colors represented by different
 * positive numbers.
 * 
 * You may experience several rounds to remove boxes until there is no box
 * left. Each time you can choose some continuous boxes with the same color
 * (i.e., composed of k boxes, k >= 1), remove them and get k * k points.
 * 
 * Return the maximum points you can get.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: boxes = [1,3,2,2,2,3,4,3,1]
 * Output: 23
 * Explanation:
 * [1, 3, 2, 2, 2, 3, 4, 3, 1] 
 * ----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
 * ----> [1, 3, 3, 3, 1] (1*1=1 points) 
 * ----> [1, 1] (3*3=9 points) 
 * ----> [] (2*2=4 points)
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: boxes = [1,1,1]
 * Output: 9
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: boxes = [1]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= boxes.length <= 100
 * 1 <= boxes[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    
};
// @lc code=end
