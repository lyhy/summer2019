describe("Filter function", () => {
	let findMaxConsecutiveOnes = require('./485.max-consecutive-ones.js');
	
	it("findMaxConsecutiveOnes 1 - true", () => {
			let x = [1,1,1,0,0,0,1,1,1,1,0];
			let ret = 4;
	
			let out = findMaxConsecutiveOnes(x);
			expect(out).toEqual(ret);
	});

	it("findMaxConsecutiveOnes 2 - false", () => {
		 let x = [1,1,0,1,1,1];
		let ret = 3;

		let out = findMaxConsecutiveOnes(x);
		expect(out).toEqual(ret);
	});

	it("findMaxConsecutiveOnes 3 - false", () => {
		 let x = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
		let ret = 4;

		let out = findMaxConsecutiveOnes(x);
		expect(out).toEqual(ret);
	});

	

});


