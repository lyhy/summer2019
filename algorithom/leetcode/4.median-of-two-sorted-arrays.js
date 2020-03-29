/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length, len2 = nums2.length, total = len1 + len2, isEven = total% 2 === 0;
    var thresh = Math.floor(total / 2);
    var p1 = 0, p2 = 0, counter = 0, prev, curr;
    while(counter < thresh) {
        if(p1 === len1) {
            prev = nums2[p2];
            p2++;
            counter++;
        }else if(p2 === len2) {
            prev = nums1[p1];
            p1++;
            counter++;
        }else if(nums1[p1] < nums2[p2]) {
            prev = nums1[p1];
            p1++;
            counter++;
        }else if(nums1[p1] > nums2[p2]) {
            prev = nums2[p2];
            p2++;
            counter++;
        }else {
            prev = nums1[p1];
            p1++;
            counter++;
        }
    }

    if(nums1.length === 0 || p1 >= nums1.length)curr = nums2[p2]; 
    else if(nums2.length === 0 || p2 >= nums2.length)curr = nums1[p1]; 
    else if(nums1[p1]<= nums2[p2])curr = nums1[p1];
    else curr = nums2[p2];

    if(!isEven) return curr;
    else return (prev + curr)/2;
};
// @lc code=end
module.exports = findMedianSortedArrays;