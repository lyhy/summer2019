describe("q300 ", () => {
	let func = require('./300.longest-increasing-subsequence');
	
	it("func1", () => {
			let x = [10,9,2,5,3,7,101,18];
			let ret = 4;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func2", () => {
			let x = [0,1,0,3,2,3];
			let ret = 4;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});
	it("func3", () => {
			let x = [0,0,0];
			let ret = 1;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});


	


	

});


