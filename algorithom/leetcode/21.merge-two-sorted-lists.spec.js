describe("Filter function", () => {
	let {mergeTwoLists, ListNode} = require('./21.merge-two-sorted-lists');
	
	it("func 1", () => {
			let list1 = [1,2,4], list2 = [1,3,4];
			let input1 = new ListNode(4)
			let ret = [1,1,2,3,4,4];
	
			let out = func(list1, list2);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let list1 = [], list2 = []
		let ret = [];

		let out = func(list1, list2);
		expect(out).toEqual(ret);
});



	

});


