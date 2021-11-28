/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (35.51%)
 * Likes:    3177
 * Dislikes: 2986
 * Total Accepted:    1.1M
 * Total Submissions: 3M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 * 
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= haystack.length, needle.length <= 5 * 10^4
 * haystack and needle consist of only lower-case English characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if(!needle) return 0;
	const l1 = haystack.length, l2 = needle.length;
	for(let i = 0; i <= l1 - l2; i++) {
		let j;
		for( j = 0; j < l2; j++) {
			if(haystack[i + j] !== needle[j])break;
		}
		if(j === l2) {
			return i;
		}
	}

	return -1; 
};
// @lc code=end
module.exports = strStr;
