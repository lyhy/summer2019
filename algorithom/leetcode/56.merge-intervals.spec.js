describe("Filter function", () => {
	let func = require('./56.merge-intervals');
	
	it("func 1", () => {
			let x = [[1,3],[2,6],[8,10],[15,18]];
			let ret = [[1,6],[8,10],[15,18]];
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = [[1,4],[4,5]];
		let ret = [[1,5]];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


