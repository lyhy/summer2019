var ListNode = require('./shared/data-structure.model').ListNode;
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode();


    var reversedNode = reverse(head);
    return reversedNode;
};

var reverse = function(head) {
    if(!head || !head.next)return head;
    var prev, current = head, next = head.next;
    while(next) {
        prev = current;
        next = next.next;
        current = current.next;
        current.next = prev;
    }

    return current;
}

module.exports = {
    addTwoNumbers: addTwoNumbers,
    reverse: reverse
};
