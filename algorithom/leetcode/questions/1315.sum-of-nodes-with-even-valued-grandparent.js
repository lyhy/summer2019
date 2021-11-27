/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
 *
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/description/
 *
 * algorithms
 * Medium (84.40%)
 * Likes:    1407
 * Dislikes: 49
 * Total Accepted:    86.6K
 * Total Submissions: 102.1K
 * Testcase Example:  '[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]'
 *
 * Given the root of a binary tree, return the sum of values of nodes with an
 * even-valued grandparent. If there are no nodes with an even-valued
 * grandparent, return 0.
 * 
 * A grandparent of a node is the parent of its parent if it exists.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 18
 * Explanation: The red nodes are the nodes with even-value grandparent while
 * the blue nodes are the even-value grandparents.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1]
 * Output: 0
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 10^4].
 * 1 <= Node.val <= 100
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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    
};
// @lc code=end
