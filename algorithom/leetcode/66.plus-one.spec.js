describe("Filter function", () => {
	let func = require('./66.plus-one');
	
	it("func 1", () => {
			let x = [4,3,2,1];
			let ret = [4,3,2,2];
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = [1,2,3];
		let ret = [1,2,4];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = [0];
		let ret = [1];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = [9];
		let ret = [1,0];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = [9,9,9];
		let ret = [1,0,0,0];

		let out = func(x);
		expect(out).toEqual(ret);
	});

});


