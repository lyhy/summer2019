/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 *
 * https://leetcode.com/problems/critical-connections-in-a-network/description/
 *
 * algorithms
 * Hard (51.51%)
 * Likes:    3122
 * Dislikes: 134
 * Total Accepted:    134.9K
 * Total Submissions: 259.8K
 * Testcase Example:  '4\n[[0,1],[1,2],[2,0],[1,3]]'
 *
 * There are n servers numbered from 0 to n - 1 connected by undirected
 * server-to-server connections forming a network where connections[i] = [ai,
 * bi] represents a connection between servers ai and bi. Any server can reach
 * other servers directly or indirectly through the network.
 * 
 * A critical connection is a connection that, if removed, will make some
 * servers unable to reach some other server.
 * 
 * Return all critical connections in the network in any order.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
 * Output: [[1,3]]
 * Explanation: [[3,1]] is also accepted.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 2, connections = [[0,1]]
 * Output: [[0,1]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= n <= 10^5
 * n - 1 <= connections.length <= 10^5
 * 0 <= ai, bi <= n - 1
 * ai != bi
 * There are no repeated connections.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    
};
// @lc code=end
