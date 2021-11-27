/*
 * @lc app=leetcode id=284 lang=javascript
 *
 * [284] Peeking Iterator
 *
 * https://leetcode.com/problems/peeking-iterator/description/
 *
 * algorithms
 * Medium (51.19%)
 * Likes:    918
 * Dislikes: 643
 * Total Accepted:    148.5K
 * Total Submissions: 281.8K
 * Testcase Example:  '["PeekingIterator","next","peek","next","next","hasNext"]\n' +
  '[[[1,2,3]],[],[],[],[],[]]'
 *
 * Design an iterator that supports the peek operation on an existing iterator
 * in addition to the hasNext and the next operations.
 * 
 * Implement the PeekingIterator class:
 * 
 * 
 * PeekingIterator(Iterator<int> nums) Initializes the object with the given
 * integer iterator iterator.
 * int next() Returns the next element in the array and moves the pointer to
 * the next element.
 * boolean hasNext() Returns true if there are still elements in the array.
 * int peek() Returns the next element in the array without moving the
 * pointer.
 * 
 * 
 * Note: Each language may have a different implementation of the constructor
 * and Iterator, but they all support the int next() and boolean hasNext()
 * functions.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
 * [[[1, 2, 3]], [], [], [], [], []]
 * Output
 * [null, 1, 2, 2, 3, false]
 * 
 * Explanation
 * PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
 * peekingIterator.next();    // return 1, the pointer moves to the next
 * element [1,2,3].
 * peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
 * peekingIterator.next();    // return 2, the pointer moves to the next
 * element [1,2,3]
 * peekingIterator.next();    // return 3, the pointer moves to the next
 * element [1,2,3]
 * peekingIterator.hasNext(); // return False
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 1000
 * All the calls to next and peek are valid.
 * At most 1000 calls will be made to next, hasNext, and peek.
 * 
 * 
 * 
 * Follow up: How would you extend your design to be generic and work with all
 * types, not just integer?
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
