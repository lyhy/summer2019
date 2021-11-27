/*
 * @lc app=leetcode id=458 lang=javascript
 *
 * [458] Poor Pigs
 *
 * https://leetcode.com/problems/poor-pigs/description/
 *
 * algorithms
 * Hard (54.69%)
 * Likes:    596
 * Dislikes: 1099
 * Total Accepted:    32.5K
 * Total Submissions: 58.9K
 * Testcase Example:  '1000\n15\n60'
 *
 * There are buckets buckets of liquid, where exactly one of the buckets is
 * poisonous. To figure out which one is poisonous, you feed some number of
 * (poor) pigs the liquid to see whether they will die or not. Unfortunately,
 * you only have minutesToTest minutes to determine which bucket is poisonous.
 * 
 * You can feed the pigs according to these steps:
 * 
 * 
 * Choose some live pigs to feed.
 * For each pig, choose which buckets to feed it. The pig will consume all the
 * chosen buckets simultaneously and will take no time.
 * Wait for minutesToDie minutes. You may not feed any other pigs during this
 * time.
 * After minutesToDie minutes have passed, any pigs that have been fed the
 * poisonous bucket will die, and all others will survive.
 * Repeat this process until you run out of time.
 * 
 * 
 * Given buckets, minutesToDie, and minutesToTest, return the minimum number of
 * pigs needed to figure out which bucket is poisonous within the allotted
 * time.
 * 
 * 
 * Example 1:
 * Input: buckets = 1000, minutesToDie = 15, minutesToTest = 60
 * Output: 5
 * Example 2:
 * Input: buckets = 4, minutesToDie = 15, minutesToTest = 15
 * Output: 2
 * Example 3:
 * Input: buckets = 4, minutesToDie = 15, minutesToTest = 30
 * Output: 2
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= buckets <= 1000
 * 1 <= minutesToDie <= minutesToTest <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    
};
// @lc code=end
