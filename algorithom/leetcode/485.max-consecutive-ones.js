/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (52.89%)
 * Likes:    2017
 * Dislikes: 391
 * Total Accepted:    549.4K
 * Total Submissions: 1M
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s. The maximum number of consecutive 1s is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let ret = 0;
	 let left = 0, right = 0, len = nums.length;
	 while(right < len && left < len) {//left = 1
		 while(nums[left] === 0) {
			 left++;
		 }
		 while(nums[right] === 1) {//right = 2
			 right++;
		 }
		 ret = Math.max(ret, right - left); //2
		 left = right;
		 right++;
	 }
	 return ret; 
};
// @lc code=end
module.exports = findMaxConsecutiveOnes;


