/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (41.74%)
 * Likes:    10473
 * Dislikes: 449
 * Total Accepted:    1.1M
 * Total Submissions: 2.6M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if(!Array.isArray(intervals) || !intervals.length)return [];
	let ret = [];
	intervals.sort((a, b) => a[0] - b[0]);
	let prev = intervals[0];
	ret.push(prev);
	for(let i = 1; i < intervals.length; i++ ) {
		let curr = intervals[i];
		if(curr[0] <= prev[1]) {//overlapped
			prev[1] = Math.max(prev[1], curr[1]);//extends end to the new one
		} else {
			ret.push(curr);
			prev = curr;
		}
	}
  return ret;
};
// @lc code=end
module.exports = merge;
