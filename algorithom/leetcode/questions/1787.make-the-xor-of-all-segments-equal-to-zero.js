/*
 * @lc app=leetcode id=1787 lang=javascript
 *
 * [1787] Make the XOR of All Segments Equal to Zero
 *
 * https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/description/
 *
 * algorithms
 * Hard (36.66%)
 * Likes:    227
 * Dislikes: 8
 * Total Accepted:    3.1K
 * Total Submissions: 8K
 * Testcase Example:  '[1,2,0,3,0]\n1'
 *
 * You are given an array nums​​​ and an integer k​​​​​. The XOR of a segment
 * [left, right] where left <= right is the XOR of all the elements with
 * indices between left and right, inclusive: nums[left] XOR nums[left+1] XOR
 * ... XOR nums[right].
 * 
 * Return the minimum number of elements to change in the array such that the
 * XOR of all segments of size k​​​​​​ is equal to zero.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,0,3,0], k = 1
 * Output: 3
 * Explanation: Modify the array from [1,2,0,3,0] to from [0,0,0,0,0].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [3,4,5,2,1,7,3,4,7], k = 3
 * Output: 3
 * Explanation: Modify the array from [3,4,5,2,1,7,3,4,7] to
 * [3,4,7,3,4,7,3,4,7].
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,2,4,1,2,5,1,2,6], k = 3
 * Output: 3
 * Explanation: Modify the array from [1,2,4,1,2,5,1,2,6] to
 * [1,2,3,1,2,3,1,2,3].
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= k <= nums.length <= 2000
 * ​​​​​​0 <= nums[i] < 2^10
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
    
};
// @lc code=end
