describe("Filter function", () => {
	let func = require('./53.maximum-subarray');
	
	it("func 1", () => {
			let x = [-2,1,-3,4,-1,2,1,-5,4];
			let ret = 6;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = [1];
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = [5,4,-1,7,8];
		let ret = 23;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	
	

});


