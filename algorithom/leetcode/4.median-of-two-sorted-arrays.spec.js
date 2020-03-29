describe("Filter function", () => {
    var nums1 = [2];
    var nums2 = [1];
    var findMedianSortedArrays = require('./4.median-of-two-sorted-arrays');
    var out = findMedianSortedArrays(nums1, nums2);
    it("findMedianSortedArrays", () => {
        expect(out).toEqual(1.5);
    });
});


