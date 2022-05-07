/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 *
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/
 *
 * algorithms
 * Medium (40.99%)
 * Likes:    3238
 * Dislikes: 188
 * Total Accepted:    238.7K
 * Total Submissions: 580.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given an integer array nums, return true if there exists a triple of indices
 * (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such
 * indices exists, return false.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4]
 * == 4 < nums[5] == 6.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 * 
 * Follow up: Could you implement a solution that runs in O(n) time complexity
 * and O(1) space complexity?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) {
	let len = nums?.length;
	let min1, min2;
	if(!len || len < 3) return false;
	min1 = nums[0], min2 = Number.MAX_SAFE_INTEGER;
	for(let i = 1; i<len; ++i) {
		let curr = nums[i];
		if(curr < min1) {
			min1 = curr;
		}else if(curr > min1 && curr < min2) {
			min2 = curr;

		}else if(curr > min2){
			return true;
		}
	}
   return false; 
};


// @lc code=end
module.exports = increasingTriplet;
