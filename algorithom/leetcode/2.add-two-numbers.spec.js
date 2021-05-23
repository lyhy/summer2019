
describe("Filter function", () => {
    var {ListNode} = require('./shared/data-structure.model');

    var node1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    // var node1 = new ListNode(5, new ListNode(6, new ListNode(4)));
    var {addTwoNumbers, reverse} = require('./2.add-two-numbers');
    // var out = addTwoNumbers(node1, node2);
    // it("findMedianSortedArrays", () => {
    //     expect(out.val).toEqual(7);
    //     expect(out.next.val).toEqual(0);
    //     expect(out.next.next.val).toEqual(8);
    // });

    it('reverse', ()=>{
        var ret = reverse(node1);
        expect(ret.val).toEqual(3);
    })
});