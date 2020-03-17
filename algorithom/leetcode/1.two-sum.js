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
    if(!Array.isArray(nums) || nums.length < 2) return [];
    var dic = nums.reduce((prev, curr, index)=>{
        prev[curr + ''] = index;
        return prev
    }, {});

    var ret = [], i = 0, len = nums.length;

    for(;i < len; i++) {
        var key = (target - nums[i]) + '';
        if(dic[key] && i !== dic[key]) {
            ret = [i, dic[key]];
            break;
        }
    }
    return ret;
    
};
// @lc code=end

