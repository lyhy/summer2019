/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (38.76%)
 * Likes:    2916
 * Dislikes: 146
 * Total Accepted:    94.9K
 * Total Submissions: 238.1K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * Given an integer array nums, return the number of longest increasing
 * subsequences.
 * 
 * Notice that the sequence has to be strictly increasing.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,3,5,4,7]
 * Output: 2
 * Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and
 * [1, 3, 5, 7].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,2,2,2,2]
 * Output: 5
 * Explanation: The length of longest continuous increasing subsequence is 1,
 * and there are 5 subsequences' length is 1, so output 5.
 * 
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 2000
 * -10^6 <= nums[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
	const len = nums?.length;
  if(!len)return 0;
  // n^2 solution
  let dp = new Array(len).fill(1);
  for(let i = 1; i < len; i++) {
	for(let j = 0; j <i; j++) {
		if(nums[i]>= nums[j]) {
			dp[i] = Math.max(dp[i], dp[j] + 1);
		}

	}
  } 
	const max =  Math.max(...dp);
	console.log(dp)
  return dp.filter(num => num === max).length; 
};
// @lc code=end
module.exports = findNumberOfLIS;
