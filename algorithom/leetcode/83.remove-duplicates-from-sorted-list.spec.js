describe("Filter function", () => {
	let {func, ListNode} = require('./83.remove-duplicates-from-sorted-list');
	
	it("func 1", () => {
			let x = new ListNode(1);
			x.next = new ListNode(1);
			x.next.next = new ListNode(2);
			let ret = [1,2];
	
			let out = func(x);
			expect(out.toArray()).toEqual(ret);
	});

	it("func 1", () => {
		let x = new ListNode(1);
		x.next = new ListNode(1);
		x.next.next = new ListNode(2);
		x.next.next.next = new ListNode(3);
		x.next.next.next.next = new ListNode(3);
		let ret = [1,2,3];

		let out = func(x);
		expect(out.toArray()).toEqual(ret);
});

	

});


