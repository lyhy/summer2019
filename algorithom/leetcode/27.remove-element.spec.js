describe("Filter function", () => {
	let func = require('./27.remove-element');
	
	it("func 1", () => {
			let x = [3,2,2,3], val = 3;
			let ret = [2,2];
	
			let out = func(x, val);
			expect(out).toEqual(ret.length);
			expect(x.slice(0, out).sort()).toEqual(ret.sort());
	});

	it("func 2", () => {
		let x = [0,1,2,2,3,0,4,2], val = 2;
		let ret = [0,1,4,0,3];

		let out = func(x, val);
		expect(out).toEqual(ret.length);
		expect(x.slice(0, out).sort()).toEqual(ret.sort());
});

	

	

});


