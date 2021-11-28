describe("Filter function", () => {
	let {mergeTwoLists, ListNode} = require('./21.merge-two-sorted-lists');
	
	it("func 1", () => {
			let list1 = [1,2,4], list2 = [1,3,4];
			let input1 = new ListNode(1), input2 = new ListNode(1);
			input1.next = new ListNode(2);
			input1.next.next = new ListNode(4);
			input2.next = new ListNode(3);
			input2.next.next = new ListNode(4);
			let ret = [1,1,2,3,4,4];
			// let result = new ListNode(1);
			// result.next = new ListNode(1);
			// result.next.next = new ListNode(2);
			// result.next.next.next = new ListNode(3);
			// result.next.next.next.next = new ListNode(4);
			// result.next.next.next.next.next = new ListNode(4);
	
			let out = mergeTwoLists(input1, input2);
			expect(out.toArray()).toEqual(ret);
	});

// 	it("func 2", () => {
// 		let list1 = [], list2 = []
// 		let ret = [];

// 		let out = func(list1, list2);
// 		expect(out).toEqual(ret);
// });



	

});


