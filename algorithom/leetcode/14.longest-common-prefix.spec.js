describe("Filter function", () => {
	let func = require('./14.longest-common-prefix');
	
	it("func 1", () => {
			let x = ["flower","flow","flight"];
			let ret = 'fl';
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = ["dog","racecar","car"];
		let ret = '';

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


