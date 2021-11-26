/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (66.09%)
 * Likes:    772
 * Dislikes: 836
 * Total Accepted:    139.9K
 * Total Submissions: 208.2K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given an array of strings words, return the words that can be typed using
 * letters of the alphabet on only one row of American keyboard like the image
 * below.
 * 
 * In the American keyboard:
 * 
 * 
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: words = ["Hello","Alaska","Dad","Peace"]
 * Output: ["Alaska","Dad"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: words = ["omk"]
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: words = ["adsdf","sfd"]
 * Output: ["adsdf","sfd"]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] consists of English letters (both lowercase and uppercase). 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	let ret = [];
	if(!Array.isArray(words) || !words.length) return ret;
	const row0 = 'qwertyuiop';
	const row1 = 'asdfghjkl';
	const row2 = 'zxcvbnm'
	let rowMap = {};
	for( let i = 0; i < row0.length; i++) {
		rowMap[row0[i]] = 0;
	}

	for( let i = 0; i < row1.length; i++) {
		rowMap[row1[i]] = 1;
	}

	for( let i = 0; i < row2.length; i++) {
		rowMap[row2[i]] = 2;
	}

	for(let i = 0; i < words.length; i++) {
		const first = rowMap[words[i][0].toLowerCase()];
		let inOneRow = true;
		for(let j = 1; j < words[i].length; j++) {
			if(rowMap[words[i][j].toLowerCase()] !== first) {
				inOneRow = false;
				break;
			}
		}
		if(inOneRow) {
			ret.push(words[i]);
		}
	}

	return ret;
    
};
// @lc code=end
module.exports = findWords; 