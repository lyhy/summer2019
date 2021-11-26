describe("Filter function", () => {
	let twoSum = require('./167.two-sum-ii-input-array-is-sorted');
	
	it("twoSum 1 - found", () => {
			let nums = [2,7,11,15];
			let target = 9;
			let ret = [1,2];
	
			let out = twoSum(nums, target);
			expect(out).toEqual(ret);
	});

	it("twoSum 2 - found", () => {
			let nums = [2,3,4];
			let target = 6;
			let ret = [1,3];
	
			let out = twoSum(nums, target);
			expect(out).toEqual(ret);
	});

	it("twoSum 3 - found same number", () => {
			let nums = [-1,0];
			let target = -1;
			let ret = [1,2];
	
			let out = twoSum(nums, target);
			expect(out).toEqual(ret);
	});

});


