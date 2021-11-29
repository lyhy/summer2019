describe("Filter function", () => {
	let func = require('./69.sqrtx');
	
	it("func 1", () => {
			let x = 4;
			let ret = 2;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 8;
		let ret = 2;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 0;
		let ret = 0;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 1;
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});

});


