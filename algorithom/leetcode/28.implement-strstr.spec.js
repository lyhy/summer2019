describe("Filter function", () => {
	let func = require('./28.implement-strstr');
	
	it("func 1", () => {
			let x = 'hello', needle = 'll';
			let ret = 2;
	
			let out = func(x, needle);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 'aaaaa', needle = 'bba';
		let ret = -1;

		let out = func(x, needle);
		expect(out).toEqual(ret);
});

it("func 3", () => {
	let x = '', needle = '';
	let ret = 0;

	let out = func(x, needle);
	expect(out).toEqual(ret);
});

	

	

});


