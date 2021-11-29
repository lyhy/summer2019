describe("Filter function", () => {
	let func = require('./70.climbing-stairs');
	
	it("func 1", () => {
			let x = 2;
			let ret = 2;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 3;
		let ret = 3;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 4;
		let ret = 5;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	
	

});


