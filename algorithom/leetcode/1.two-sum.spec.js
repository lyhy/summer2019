describe("Filter function", () => {
    let twoSum = require('./1.two-sum');
    
    it("twoSum 1 - found", () => {
        let nums = [2,7,11,15];
        let target = 9;
        let ret = [0,1];
    
        let out = twoSum(nums, target);
        expect(out).toEqual(ret);
    });

    it("twoSum 2 - found", () => {
        let nums = [3,2,4];
        let target = 6;
        let ret = [1,2];
    
        let out = twoSum(nums, target);
        expect(out).toEqual(ret);
    });

    it("twoSum 3 - found same number", () => {
        let nums = [3,3];
        let target = 6;
        let ret = [0,1];
    
        let out = twoSum(nums, target);
        expect(out).toEqual(ret);
    });

});


