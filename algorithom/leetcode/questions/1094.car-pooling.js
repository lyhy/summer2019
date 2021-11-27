/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 *
 * https://leetcode.com/problems/car-pooling/description/
 *
 * algorithms
 * Medium (59.66%)
 * Likes:    1698
 * Dislikes: 47
 * Total Accepted:    90.8K
 * Total Submissions: 152.7K
 * Testcase Example:  '[[2,1,5],[3,3,7]]\n4'
 *
 * There is a car with capacity empty seats. The vehicle only drives east
 * (i.e., it cannot turn around and drive west).
 * 
 * You are given the integer capacity and an array trips where trip[i] =
 * [numPassengersi, fromi, toi] indicates that the i^th trip has numPassengersi
 * passengers and the locations to pick them up and drop them off are fromi and
 * toi respectively. The locations are given as the number of kilometers due
 * east from the car's initial location.
 * 
 * Return true if it is possible to pick up and drop off all passengers for all
 * the given trips, or false otherwise.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 4
 * Output: false
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: trips = [[2,1,5],[3,3,7]], capacity = 5
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: trips = [[2,1,5],[3,5,7]], capacity = 3
 * Output: true
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
 * Output: true
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= trips.length <= 1000
 * trips[i].length == 3
 * 1 <= numPassengersi <= 100
 * 0 <= fromi < toi <= 1000
 * 1 <= capacity <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    
};
// @lc code=end
