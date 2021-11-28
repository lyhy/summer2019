describe("Filter function", () => {
	let func = require('./67.add-binary');
	
	it("func 1", () => {
			let x = '11', y = '1';
			let ret = '100';
	
			let out = func(x,y);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = '1010', y='1011';
		let ret = '10101';

		let out = func(x,y);
		expect(out).toEqual(ret);
	});


});


