/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 *
 * https://leetcode.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (48.48%)
 * Likes:    6633
 * Dislikes: 346
 * Total Accepted:    326.4K
 * Total Submissions: 656.6K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * Given the root of a binary tree and an integer targetSum, return the number
 * of paths where the sum of the values along the path equals targetSum.
 * 
 * The path does not need to start or end at the root or a leaf, but it must go
 * downwards (i.e., traveling only from parent nodes to child nodes).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * Output: 3
 * Explanation: The paths that sum to 8 are shown.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 1000].
 * -10^9 <= Node.val <= 10^9
 * -1000 <= targetSum <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
};
// @lc code=end
