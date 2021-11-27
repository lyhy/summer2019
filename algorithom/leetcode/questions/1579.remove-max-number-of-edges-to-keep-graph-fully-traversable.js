/*
 * @lc app=leetcode id=1579 lang=javascript
 *
 * [1579] Remove Max Number of Edges to Keep Graph Fully Traversable
 *
 * https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/
 *
 * algorithms
 * Hard (46.47%)
 * Likes:    485
 * Dislikes: 4
 * Total Accepted:    9.6K
 * Total Submissions: 19.5K
 * Testcase Example:  '4\n[[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]'
 *
 * Alice and Bob have an undirected graph of n nodes and 3 types of
 * edges:
 * 
 * 
 * Type 1: Can be traversed by Alice only.
 * Type 2: Can be traversed by Bob only.
 * Type 3: Can by traversed by both Alice and Bob.
 * 
 * 
 * Given an array edges where edges[i] = [typei, ui, vi] represents a
 * bidirectional edge of type typei between nodes ui and vi, find the maximum
 * number of edges you can remove so that after removing the edges, the graph
 * can still be fully traversed by both Alice and Bob. The graph is fully
 * traversed by Alice and Bob if starting from any node, they can reach all
 * other nodes.
 * 
 * Return the maximum number of edges you can remove, or return -1 if it's
 * impossible for the graph to be fully traversed by Alice and Bob.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
 * Output: 2
 * Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will
 * still be fully traversable by Alice and Bob. Removing any additional edge
 * will not make it so. So the maximum number of edges we can remove is 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * 
 * Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
 * Output: 0
 * Explanation: Notice that removing any edge will not make the graph fully
 * traversable by Alice and Bob.
 * 
 * 
 * Example 3:
 * 
 * 
 * 
 * 
 * Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
 * Output: -1
 * Explanation: In the current graph, Alice cannot reach node 4 from the other
 * nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the
 * graph fully traversable.
 * 
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^5
 * 1 <= edges.length <= min(10^5, 3 * n * (n-1) / 2)
 * edges[i].length == 3
 * 1 <= edges[i][0] <= 3
 * 1 <= edges[i][1] < edges[i][2] <= n
 * All tuples (typei, ui, vi) are distinct.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    
};
// @lc code=end
