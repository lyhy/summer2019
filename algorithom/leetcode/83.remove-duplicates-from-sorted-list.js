/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (46.88%)
 * Likes:    3639
 * Dislikes: 169
 * Total Accepted:    719.1K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,1,2]'
 *
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [1,1,2]
 * Output: [1,2]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	if(!head || !head.next) return head;
	let prev = head, curr = head.next;
	while(curr) {
		if(prev.val === curr.val) {
			prev.next = curr.next;
		}else {
			prev = curr;
		}
		
		curr = curr.next;
	}

	return head;
    
};
// @lc code=end
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
	this.toArray = () => {
		let ret = [];
		let next = this;
		while(next) {
      ret.push(next.val);
			next = next.next;
		}
		return ret;
	}	
}
module.exports = {
	func: deleteDuplicates,
  ListNode	
};
