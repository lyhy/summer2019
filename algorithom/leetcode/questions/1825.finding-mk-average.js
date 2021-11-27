/*
 * @lc app=leetcode id=1825 lang=javascript
 *
 * [1825] Finding MK Average
 *
 * https://leetcode.com/problems/finding-mk-average/description/
 *
 * algorithms
 * Hard (31.43%)
 * Likes:    171
 * Dislikes: 77
 * Total Accepted:    6K
 * Total Submissions: 18.4K
 * Testcase Example:  '["MKAverage","addElement","addElement","calculateMKAverage","addElement","calculateMKAverage","addElement","addElement","addElement","calculateMKAverage"]\n' +
  '[[3,1],[3],[1],[],[10],[],[5],[5],[5],[]]'
 *
 * You are given two integers, m and k, and a stream of integers. You are
 * tasked to implement a data structure that calculates the MKAverage for the
 * stream.
 * 
 * The MKAverage can be calculated using these steps:
 * 
 * 
 * If the number of the elements in the stream is less than m you should
 * consider the MKAverage to be -1. Otherwise, copy the last m elements of the
 * stream to a separate container.
 * Remove the smallest k elements and the largest k elements from the
 * container.
 * Calculate the average value for the rest of the elements rounded down to the
 * nearest integer.
 * 
 * 
 * Implement the MKAverage class:
 * 
 * 
 * MKAverage(int m, int k) Initializes the MKAverage object with an empty
 * stream and the two integers m and k.
 * void addElement(int num) Inserts a new element num into the stream.
 * int calculateMKAverage() Calculates and returns the MKAverage for the
 * current stream rounded down to the nearest integer.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["MKAverage", "addElement", "addElement", "calculateMKAverage",
 * "addElement", "calculateMKAverage", "addElement", "addElement",
 * "addElement", "calculateMKAverage"]
 * [[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
 * Output
 * [null, null, null, -1, null, 3, null, null, null, 5]
 * 
 * Explanation
 * MKAverage obj = new MKAverage(3, 1); 
 * obj.addElement(3);        // current elements are [3]
 * obj.addElement(1);        // current elements are [3,1]
 * obj.calculateMKAverage(); // return -1, because m = 3 and only 2 elements
 * exist.
 * obj.addElement(10);       // current elements are [3,1,10]
 * obj.calculateMKAverage(); // The last 3 elements are [3,1,10].
 * ⁠                         // After removing smallest and largest 1 element
 * the container will be [3].
 * ⁠                         // The average of [3] equals 3/1 = 3, return 3
 * obj.addElement(5);        // current elements are [3,1,10,5]
 * obj.addElement(5);        // current elements are [3,1,10,5,5]
 * obj.addElement(5);        // current elements are [3,1,10,5,5,5]
 * obj.calculateMKAverage(); // The last 3 elements are [5,5,5].
 * ⁠                         // After removing smallest and largest 1 element
 * the container will be [5].
 * ⁠                         // The average of [5] equals 5/1 = 5, return 5
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 3 <= m <= 10^5
 * 1 <= k*2 < m
 * 1 <= num <= 10^5
 * At most 10^5 calls will be made to addElement and calculateMKAverage.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function(num) {
    
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {
    
};

/** 
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
// @lc code=end
