/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 *
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
 *
 * algorithms
 * Medium (48.34%)
 * Likes:    2330
 * Dislikes: 94
 * Total Accepted:    107.3K
 * Total Submissions: 216.7K
 * Testcase Example:  '[1,2,3,4,5,6,1]\n3'
 *
 * There are several cards arranged in a row, and each card has an associated
 * number of points. The points are given in the integer array cardPoints.
 * 
 * In one step, you can take one card from the beginning or from the end of the
 * row. You have to take exactly k cards.
 * 
 * Your score is the sum of the points of the cards you have taken.
 * 
 * Given the integer array cardPoints and the integer k, return the maximum
 * score you can obtain.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: cardPoints = [1,2,3,4,5,6,1], k = 3
 * Output: 12
 * Explanation: After the first step, your score will always be 1. However,
 * choosing the rightmost card first will maximize your total score. The
 * optimal strategy is to take the three cards on the right, giving a final
 * score of 1 + 6 + 5 = 12.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: cardPoints = [2,2,2], k = 2
 * Output: 4
 * Explanation: Regardless of which two cards you take, your score will always
 * be 4.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: cardPoints = [9,7,7,9,7,7,9], k = 7
 * Output: 55
 * Explanation: You have to take all the cards. Your score is the sum of points
 * of all cards.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: cardPoints = [1,1000,1], k = 1
 * Output: 1
 * Explanation: You cannot take the card in the middle. Your best score is
 * 1. 
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
 * Output: 202
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= cardPoints.length <= 10^5
 * 1 <= cardPoints[i] <= 10^4
 * 1 <= k <= cardPoints.length
 * 
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
};
// @lc code=end
