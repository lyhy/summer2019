describe("Filter function", () => {
	let func = require('./13.roman-to-integer');
	
	it("func 1", () => {
			let x = 'III';
			let ret = 3;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 'IV';
		let ret = 4;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 'IX';
		let ret = 9;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = 'LVIII';
		let ret = 58;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 5", () => {
		let x = 'MCMXCIV';
		let ret = 1994;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


