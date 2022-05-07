describe("Filter function", () => {
	let func = require('./334.increasing-triplet-subsequence');
	
	it("func1", () => {
			let x = [1,2,3,4,5];
			let ret = true;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func2", () => {
		let x = [5,4,3,2,1];
		let ret = false;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func3", () => {
		let x = [2,1,5,0,4,6];
		let ret = true;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func4", () => {
		let x = [2,5,1,6];
		let ret = true;

		let out = func(x);
		expect(out).toEqual(ret);
	});

});


