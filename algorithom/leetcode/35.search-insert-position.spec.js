describe("Filter function", () => {
    let searchInsert = require('./35.search-insert-position');
    
    it("searchInsert 1 - found", () => {
        let nums = [1,3,5,6];
        let target = 5;
        let ret = 2;
    
        let out = searchInsert(nums, target);
        expect(out).toEqual(ret);
    });

    it("searchInsert 2 - not found", () => {
        let nums = [1,3,5,6];
        let target = 2;
        let ret = 1;
    
        let out = searchInsert(nums, target);
        expect(out).toEqual(ret);
    });

    it("searchInsert 3 - not found last", () => {
        let nums = [1,3,5,6];
        let target = 7;
        let ret = 4;
    
        let out = searchInsert(nums, target);
        expect(out).toEqual(ret);
    });

    it("searchInsert 4 - not found first", () => {
        let nums = [1,3,5,6];
        let target = 0;
        let ret = 0;
    
        let out = searchInsert(nums, target);
        expect(out).toEqual(ret);
    });

    it("searchInsert 5 - not found first only one item", () => {
        let nums = [1];
        let target = 0;
        let ret = 0;
    
        let out = searchInsert(nums, target);
        expect(out).toEqual(ret);
    });
});


