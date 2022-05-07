describe("Filter function", () => {
	let func = require('./673.number-of-longest-increasing-subsequence');
	
	it("func1", () => {
			let x = [1,3,5,4,7];
			let ret = 2;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func2", () => {
		let x = [2,2,2,2,2];
		let ret = 5;

		let out = func(x);
		expect(out).toEqual(ret);
	});



});


