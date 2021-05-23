/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ret = [];
    var dic = {}, i, len;
    
    if(!Array.isArray(nums) || nums.length < 2 ) return ret;
    len = nums.length;
    for(i=0;i<len;i++){
        if(typeof dic[nums[i]] === 'undefined') {
            dic[nums[i]] = i;
        }
    };
    
    for(i = 1; i < len; i++ ) {
        var lookfor = target - nums[i];
        if(typeof dic[lookfor] === 'number' && dic[lookfor] < i) {
            ret = [dic[lookfor], i];
            break;
        }
    }
    
    return ret;
};
// @lc code=end

