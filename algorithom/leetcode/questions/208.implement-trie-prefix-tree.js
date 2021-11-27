/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (53.13%)
 * Likes:    5931
 * Dislikes: 83
 * Total Accepted:    502.5K
 * Total Submissions: 896.1K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n' +
  '[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to
 * efficiently store and retrieve keys in a dataset of strings. There are
 * various applications of this data structure, such as autocomplete and
 * spellchecker.
 * 
 * Implement the Trie class:
 * 
 * 
 * Trie() Initializes the trie object.
 * void insert(String word) Inserts the string word into the trie.
 * boolean search(String word) Returns true if the string word is in the trie
 * (i.e., was inserted before), and false otherwise.
 * boolean startsWith(String prefix) Returns true if there is a previously
 * inserted string word that has the prefix prefix, and false otherwise.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 * 
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= word.length, prefix.length <= 2000
 * word and prefix consist only of lowercase English letters.
 * At most 3 * 10^4 calls in total will be made to insert, search, and
 * startsWith.
 * 
 * 
 */

// @lc code=start

var Trie = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
