describe("Filter function", () => {
	let func = require('./392.is-subsequence');
	
	it("func 1", () => {
			let x = 'abc';
			let y = 'ahbgdc';
			let ret = true;
	
			let out = func(x, y);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 'axc';
			let y = 'ahbgdc';
			let ret = false;
	
			let out = func(x, y);
			expect(out).toEqual(ret);
	});

	// it("func 3", () => {
	// 	let x = 'IX';
	// 	let ret = 9;

	// 	let out = func(x);
	// 	expect(out).toEqual(ret);
	// });

	// it("func 4", () => {
	// 	let x = 'LVIII';
	// 	let ret = 58;

	// 	let out = func(x);
	// 	expect(out).toEqual(ret);
	// });

	// it("func 5", () => {
	// 	let x = 'MCMXCIV';
	// 	let ret = 1994;

	// 	let out = func(x);
	// 	expect(out).toEqual(ret);
	// });

	

});


