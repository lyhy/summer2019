/*
 * @lc app=leetcode id=745 lang=javascript
 *
 * [745] Prefix and Suffix Search
 *
 * https://leetcode.com/problems/prefix-and-suffix-search/description/
 *
 * algorithms
 * Hard (35.92%)
 * Likes:    896
 * Dislikes: 310
 * Total Accepted:    44.7K
 * Total Submissions: 124.7K
 * Testcase Example:  '["WordFilter","f"]\n[[["apple"]],["a","e"]]'
 *
 * Design a special dictionary with some words that searchs the words in it by
 * a prefix and a suffix.
 * 
 * Implement the WordFilter class:
 * 
 * 
 * WordFilter(string[] words) Initializes the object with the words in the
 * dictionary.
 * f(string prefix, string suffix) Returns the index of the word in the
 * dictionary, which has the prefix prefix and the suffix suffix. If there is
 * more than one valid index, return the largest of them. If there is no such
 * word in the dictionary, return -1.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["WordFilter", "f"]
 * [[["apple"]], ["a", "e"]]
 * Output
 * [null, 0]
 * 
 * Explanation
 * WordFilter wordFilter = new WordFilter(["apple"]);
 * wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix
 * = "a" and suffix = 'e".
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= words.length <= 15000
 * 1 <= words[i].length <= 10
 * 1 <= prefix.length, suffix.length <= 10
 * words[i], prefix and suffix consist of lower-case English letters only.
 * At most 15000 calls will be made to the function f.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
// @lc code=end
