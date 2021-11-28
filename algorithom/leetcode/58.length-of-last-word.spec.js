describe("Filter function", () => {
	let func = require('./58.length-of-last-word');
	
	it("func 1", () => {
			let x = 'Hello World';
			let ret = 5;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = '   fly me   to   the moon  ';
		let ret = 4;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 'luffy is still joyboy';
		let ret = 6;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 'a';
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});
});


