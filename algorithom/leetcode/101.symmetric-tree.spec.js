describe("Filter function", () => {
	let {func, TreeNode}  = require('./101.symmetric-tree');
	
	it("func 1", () => {
			let x = new TreeNode(1);
			x.left = new TreeNode(2);
			x.right = new TreeNode(2);
			x.left.left = new TreeNode(3);
			x.left.right = new TreeNode(4);
			x.right.left = new TreeNode(4);
			x.right.right = new TreeNode(3);
			let ret = true;
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = new TreeNode(1);
		x.left = new TreeNode(2); 
		x.right = new TreeNode(2); 
		x.left.right = new TreeNode(3);
		x.right.right = new TreeNode(3);
		let ret = false;

		let out = func(x);
		expect(out).toEqual(ret);
	});


});


