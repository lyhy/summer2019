//listNode
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
	this.toArray = () => {
		let ret = [];
		let next = this;
		while(next) {
      ret.push(next.val);
			next = next.next;
		}
		return ret;
	}	
}