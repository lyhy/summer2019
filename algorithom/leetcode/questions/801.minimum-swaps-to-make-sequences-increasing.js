/*
 * @lc app=leetcode id=801 lang=javascript
 *
 * [801] Minimum Swaps To Make Sequences Increasing
 *
 * https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/description/
 *
 * algorithms
 * Medium (38.81%)
 * Likes:    1820
 * Dislikes: 122
 * Total Accepted:    49.2K
 * Total Submissions: 125.7K
 * Testcase Example:  '[1,3,5,4]\n[1,2,3,7]'
 *
 * You are given two integer arrays of the same length nums1 and nums2. In one
 * operation, you are allowed to swap nums1[i] with nums2[i].
 * 
 * 
 * For example, if nums1 = [1,2,3,8], and nums2 = [5,6,7,4], you can swap the
 * element at i = 3 to obtain nums1 = [1,2,3,4] and nums2 = [5,6,7,8].
 * 
 * 
 * Return the minimum number of needed operations to make nums1 and nums2
 * strictly increasing. The test cases are generated so that the given input
 * always makes it possible.
 * 
 * An array arr is strictly increasing if and only if arr[0] < arr[1] < arr[2]
 * < ... < arr[arr.length - 1].
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
 * Output: 1
 * Explanation: 
 * Swap nums1[3] and nums2[3]. Then the sequences are:
 * nums1 = [1, 3, 5, 7] and nums2 = [1, 2, 3, 4]
 * which are both strictly increasing.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= nums1.length <= 10^5
 * nums2.length == nums1.length
 * 0 <= nums1[i], nums2[i] <= 2 * 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    
};
// @lc code=end
