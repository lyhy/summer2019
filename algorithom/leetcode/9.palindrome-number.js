/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (50.35%)
 * Likes:    4451
 * Dislikes: 1921
 * Total Accepted:    1.6M
 * Total Submissions: 3.2M
 * Testcase Example:  '121'
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward. For
 * example, 121 is palindrome while 123 is not.
 *
 *
 * Example 1:
 *
 *
 * Input: x = 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Example 4:
 *
 *
 * Input: x = -101
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || x%1 !== 0) return false;
  let num = x;
  let len = 0;
  while (num) {
    len++;
    num = Math.floor(num / 10);
  }

  let l = 0,
    r = len;
  while (l < r) {
		if(Math.floor(x/(Math.pow(10, (r - l - 1)))) !== x%10) return false;
		x = Math.floor((x%(Math.pow(10, (r - l - 1))))/10);
    l++;
    r--;
  }

  return true;
};
// @lc code=end
module.exports = isPalindrome;
