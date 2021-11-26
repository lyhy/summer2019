describe("Filter function", () => {
	let isPalindrome = require('./9.palindrome-number');
	
	it("isPalindrome 1 - true", () => {
			let x = 121;
			let ret = true;
	
			let out = isPalindrome(x);
			expect(out).toEqual(ret);
	});

	it("isPalindrome 2 - false", () => {
		let x = -121;
		let ret = false;

		let out = isPalindrome(x);
		expect(out).toEqual(ret);
	});

	it("isPalindrome 3 - false", () => {
		let x = 10;
		let ret = false;

		let out = isPalindrome(x);
		expect(out).toEqual(ret);
	});

	it("isPalindrome 3 - false", () => {
		let x = -101;
		let ret = false;

		let out = isPalindrome(x);
		expect(out).toEqual(ret);
	});

	it("isPalindrome 4 - true", () => {
		let x = 1;
		let ret = true;

		let out = isPalindrome(x);
		expect(out).toEqual(ret);
	});

	

});


