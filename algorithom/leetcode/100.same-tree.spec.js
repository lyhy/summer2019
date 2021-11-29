describe("Filter function", () => {
	let {func, TreeNode} = require('./100.same-tree');
	
	it("func 1", () => {
			let x = new TreeNode(1), y = new TreeNode(1);
			x.left = new TreeNode(2);
			x.right = new TreeNode(3);
		  y.left = new TreeNode(2);
			y.right = new TreeNode(3);	
			let ret = true;
	
			let out = func(x, y);
			expect(out).toEqual(ret);
	});
	
	it("func 1", () => {
		let x = new TreeNode(1), y = new TreeNode(1);
		x.left = new TreeNode(2);
		y.right = new TreeNode(2);	
		let ret = false;

		let out = func(x, y);
		expect(out).toEqual(ret);
});

it("func 1", () => {
	let x = new TreeNode(1), y = new TreeNode(1);
	x.left = new TreeNode(2);
	x.right = new TreeNode(1);
	y.left = new TreeNode(1);
	y.right = new TreeNode(2);	
	let ret = false;

	let out = func(x, y);
	expect(out).toEqual(ret);
});


	
	

});


