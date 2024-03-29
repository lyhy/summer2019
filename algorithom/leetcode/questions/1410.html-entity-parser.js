/*
 * @lc app=leetcode id=1410 lang=javascript
 *
 * [1410] HTML Entity Parser
 *
 * https://leetcode.com/problems/html-entity-parser/description/
 *
 * algorithms
 * Medium (53.92%)
 * Likes:    126
 * Dislikes: 245
 * Total Accepted:    17.8K
 * Total Submissions: 33.6K
 * Testcase Example:  '"&amp; is an HTML entity but &ambassador; is not."'
 *
 * HTML entity parser is the parser that takes HTML code as input and replace
 * all the entities of the special characters by the characters itself.
 * 
 * The special characters and their entities for HTML are:
 * 
 * 
 * Quotation Mark: the entity is " and symbol character is ".
 * Single Quote Mark: the entity is ' and symbol character is '.
 * Ampersand: the entity is & and symbol character is &.
 * Greater Than Sign: the entity is > and symbol character is >.
 * Less Than Sign: the entity is < and symbol character is <.
 * Slash: the entity is ⁄ and symbol character is /.
 * 
 * 
 * Given the input text string to the HTML parser, you have to implement the
 * entity parser.
 * 
 * Return the text after replacing the entities by the special characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text = "& is an HTML entity but &ambassador; is not."
 * Output: "& is an HTML entity but &ambassador; is not."
 * Explanation: The parser will replace the & entity by &
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text = "and I quote: "...""
 * Output: "and I quote: \"...\""
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text = "Stay home! Practice on Leetcode :)"
 * Output: "Stay home! Practice on Leetcode :)"
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: text = "x > y && x < y is always false"
 * Output: "x > y && x < y is always false"
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: text = "leetcode.com⁄problemset⁄all"
 * Output: "leetcode.com/problemset/all"
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text.length <= 10^5
 * The string may contain any possible characters out of all the 256 ASCII
 * characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    
};
// @lc code=end
