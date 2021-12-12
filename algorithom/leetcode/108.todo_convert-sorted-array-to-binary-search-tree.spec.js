describe("Filter function", () => {
	let {func, TreeNode } = require('./108.convert-sorted-array-to-binary-search-tree');
	
	it("func 1", () => {
			let x = [-10,-3,0,5,9];
			let ret = new TreeNode(0);
			ret.left = new TreeNode(-3);
			ret.right = new TreeNode(9);
			ret.left = new TreeNode(-10);
			ret.right = new TreeNode(5);


	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = 'IV';
		let ret = 4;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = 'IX';
		let ret = 9;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = 'LVIII';
		let ret = 58;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 5", () => {
		let x = 'MCMXCIV';
		let ret = 1994;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


