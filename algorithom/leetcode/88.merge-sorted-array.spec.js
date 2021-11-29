describe("Filter function", () => {
	let func = require('./88.merge-sorted-array');
	
	it("func 1", () => {
			let x = [1,2,3,0,0,0], m = 3, y = [2,5,6], n = 3;
			let ret = [1,2,2,3,5,6];
	
			func(x,m,y,n);
			expect(x).toEqual(ret);
	});

	it("func 2", () => {
		let x = [1], m = 1, y = [], n = 0;
		let ret = [1];

		func(x,m,y,n);
			expect(x).toEqual(ret);
});

it("func 3", () => {
	let x = [0], m = 0, y = [1], n = 1;
	let ret = [1];

	func(x,m,y,n);
	expect(x).toEqual(ret);
});

	

});


