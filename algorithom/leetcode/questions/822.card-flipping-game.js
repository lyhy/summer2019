/*
 * @lc app=leetcode id=822 lang=javascript
 *
 * [822] Card Flipping Game
 *
 * https://leetcode.com/problems/card-flipping-game/description/
 *
 * algorithms
 * Medium (43.85%)
 * Likes:    97
 * Dislikes: 588
 * Total Accepted:    12.1K
 * Total Submissions: 27.3K
 * Testcase Example:  '[1,2,4,4,7]\n[1,3,4,1,3]'
 *
 * You are given n cards, with a positive integer printed on the front and back
 * of each card (possibly different). You can flip any number of cards
 * (possibly zero).
 * 
 * After choosing the front and the back of each card, you will pick each card,
 * and if the integer printed on the back of this card is not printed on the
 * front of any other card, then this integer is good.
 * 
 * You are given two integer array fronts and backs where fronts[i] and
 * backs[i] are the integers printer on the front and the back of the i^th card
 * respectively.
 * 
 * Return the smallest good and integer after flipping the cards. If there are
 * no good integers, return 0.
 * 
 * Note that a flip swaps the front and back numbers, so the value on the front
 * is now on the back and vice versa.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
 * Output: 2
 * Explanation: If we flip the second card, the fronts are [1,3,4,4,7] and the
 * backs are [1,2,4,1,3].
 * We choose the second card, which has the number 2 on the back, and it is not
 * on the front of any card, so 2 is good.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: fronts = [1], backs = [1]
 * Output: 0
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == fronts.length
 * n == backs.length
 * 1 <= n <= 1000
 * 1 <= fronts[i], backs[i] <= 2000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    
};
// @lc code=end
