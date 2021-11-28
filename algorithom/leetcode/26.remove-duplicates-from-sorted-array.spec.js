describe("Filter function", () => {
	let func = require('./26.remove-duplicates-from-sorted-array');
	
	it("func 1", () => {
			let x = [1,1,2];
			let ret = [1,2];
	
			let k = func(x);
			expect(ret.length).toEqual(k);
			expect(x.slice(0,ret.length)).toEqual(ret)
	});

	it("func 2", () => {
		let x = [0,0,1,1,1,2,2,3,3,4];
		let ret = [0,1,2,3,4];

		let k = func(x);
		expect(ret.length).toEqual(k);
		expect(x.slice(0,ret.length)).toEqual(ret)
});

	

	

});


