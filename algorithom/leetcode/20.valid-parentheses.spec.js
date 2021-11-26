describe("Filter function", () => {
	let func = require('./20.valid-parentheses');
	
	it("func 1", () => {
			let x = '()';
			let ret = true;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = '()[]{}';
		let ret = true;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = '(]';
		let ret = false;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = '([)]';
		let ret = false;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = '{[]}';
		let ret = true;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 5", () => {
		let x = '(}{)';
		let ret = false;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


