/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (47.64%)
 * Likes:    3708
 * Dislikes: 434
 * Total Accepted:    709.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let lena = a.length, lenb = b.length, ret = '', plus = 0;
	let len = Math.max(lena, lenb);

	for(let i = 0; i < len; i++) {
		let sum;
		if(i < lena && i < lenb) {
		  sum = parseInt(a[lena - i - 1]) + parseInt(b[lenb - i -1]) + plus;
		} else if( i >= lena) {
			sum = parseInt(b[lenb - i -1]) + plus;
		} else {
			sum = parseInt(a[lena - i -1]) + plus;
		}
		
		plus = sum > 1 ? 1 : 0;
		ret = (sum%2) + ret;
	}
	
	if(plus === 1) {
		ret = 1 + ret;
	}

  return ret;
};
// @lc code=end
module.exports = addBinary
