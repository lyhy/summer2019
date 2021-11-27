/*
 * @lc app=leetcode id=1288 lang=javascript
 *
 * [1288] Remove Covered Intervals
 *
 * https://leetcode.com/problems/remove-covered-intervals/description/
 *
 * algorithms
 * Medium (57.57%)
 * Likes:    782
 * Dislikes: 30
 * Total Accepted:    51.9K
 * Total Submissions: 89.8K
 * Testcase Example:  '[[1,4],[3,6],[2,8]]'
 *
 * Given an array intervals where intervals[i] = [li, ri] represent the
 * interval [li, ri), remove all intervals that are covered by another interval
 * in the list.
 * 
 * The interval [a, b) is covered by the interval [c, d) if and only if c <= a
 * and b <= d.
 * 
 * Return the number of remaining intervals.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,4],[3,6],[2,8]]
 * Output: 2
 * Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,4],[2,3]]
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: intervals = [[0,10],[5,12]]
 * Output: 2
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: intervals = [[3,10],[4,10],[5,11]]
 * Output: 2
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: intervals = [[1,2],[1,4],[3,4]]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= intervals.length <= 1000
 * intervals[i].length == 2
 * 0 <= li <= ri <= 10^5
 * All the given intervals are unique.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
};
// @lc code=end
