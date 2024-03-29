/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (66.78%)
 * Likes:    6218
 * Dislikes: 263
 * Total Accepted:    1.2M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes'
 * values.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [1]
 * Output: [1]
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: root = [1,2]
 * Output: [2,1]
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: root = [1,null,2]
 * Output: [1,2]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	//STACK DFS
	let stack = [root];
	let ret = [];
	while(!!stack.length) {
		let current = stack.pop();
		if(current === null) continue;
		if(typeof current === 'number') {
			ret.push(current);
			continue;
		}
		if(current.right) {
			stack.push(current.right);
		}
		stack.push(current.val);
		if(current.left) {
			stack.push(current.left);
		}

		
	}

	return ret;
    
};
// @lc code=end
//recursive

// var inorderTraversal = function(root) {
// 	let ret = [];
// 	if(!root) return ret;
// 	ret = ret.concat(inorderTraversal(root.left));
// 	ret.push(root.val);
// 	ret = ret.concat(inorderTraversal(root.right));
// 	return ret;
    
// };

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}
module.exports = {
	func: inorderTraversal,
	TreeNode

};
