describe("Filter function", () => {
	let {func, TreeNode} = require('./104.maximum-depth-of-binary-tree');
	
	it("func 1", () => {
			let x = new TreeNode(3);
			x.left = new TreeNode(9);
			x.right = new TreeNode(20);
			x.right.left = new TreeNode(15);
			x.right.right = new TreeNode(7);
			let ret = 3;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = new TreeNode(3);
			x.right = new TreeNode(2);
		
		let ret = 2;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = null;
		
		let ret = 0;

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 4", () => {
		let x = new TreeNode();
		
		let ret = 1;

		let out = func(x);
		expect(out).toEqual(ret);
	});

});


