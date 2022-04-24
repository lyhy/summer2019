describe("Filter function", () => {
	let func = require('./852.peak-index-in-a-mountain-array');
	
	it("func 1", () => {
			let x = [0,1,0]
			let ret = 1;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = [0,2,1,0]
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = [0,10,5,2]
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = [3,4,5,1]
		let ret = 2;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 5", () => {
		let x = [24,69,100,99,79,78,67,36,26,19]
		let ret = 2;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


