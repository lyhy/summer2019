/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
 *
 * https://leetcode.com/problems/all-possible-full-binary-trees/description/
 *
 * algorithms
 * Medium (77.57%)
 * Likes:    2115
 * Dislikes: 163
 * Total Accepted:    70.4K
 * Total Submissions: 89.2K
 * Testcase Example:  '7'
 *
 * Given an integer n, return a list of all possible full binary trees with n
 * nodes. Each node of each tree in the answer must have Node.val == 0.
 * 
 * Each element of the answer is the root node of one possible tree. You may
 * return the final list of trees in any order.
 * 
 * A full binary tree is a binary tree where each node has exactly 0 or 2
 * children.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 7
 * Output:
 * [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 3
 * Output: [[0,0,0]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 20
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    
};
// @lc code=end
