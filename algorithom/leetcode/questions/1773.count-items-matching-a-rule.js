/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 *
 * https://leetcode.com/problems/count-items-matching-a-rule/description/
 *
 * algorithms
 * Easy (84.68%)
 * Likes:    585
 * Dislikes: 79
 * Total Accepted:    76.4K
 * Total Submissions: 90.4K
 * Testcase Example:  '[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]\n' +
  '"color"\n' +
  '"silver"'
 *
 * You are given an array items, where each items[i] = [typei, colori, namei]
 * describes the type, color, and name of the i^th item. You are also given a
 * rule represented by two strings, ruleKey and ruleValue.
 * 
 * The i^th item is said to match the rule if one of the following is
 * true:
 * 
 * 
 * ruleKey == "type" and ruleValue == typei.
 * ruleKey == "color" and ruleValue == colori.
 * ruleKey == "name" and ruleValue == namei.
 * 
 * 
 * Return the number of items that match the given rule.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: items =
 * [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
 * ruleKey = "color", ruleValue = "silver"
 * Output: 1
 * Explanation: There is only one item matching the given rule, which is
 * ["computer","silver","lenovo"].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: items =
 * [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
 * ruleKey = "type", ruleValue = "phone"
 * Output: 2
 * Explanation: There are only two items matching the given rule, which are
 * ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item
 * ["computer","silver","phone"] does not match.
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= items.length <= 10^4
 * 1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
 * ruleKey is equal to either "type", "color", or "name".
 * All strings consist only of lowercase letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
};
// @lc code=end
