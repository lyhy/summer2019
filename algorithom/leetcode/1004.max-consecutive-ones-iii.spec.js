describe("Filter function", () => {
	let longestOnes = require('./1004.max-consecutive-ones-iii.js');
	
	it("longestOnes 1 - true", () => {
			let x = [1,1,1,0,0,0,1,1,1,1,0];
			let k = 2;
			let ret = 6;
	
			let out = longestOnes(x, k);
			expect(out).toEqual(ret);
	});

	it("longestOnes 2 - false", () => {
		 let x = [1,1,1,0,0,0,1,1,1,1,0];
		 let k = 0;
		let ret = 4;

		let out = longestOnes(x,k);
		expect(out).toEqual(ret);
	});

	it("longestOnes 3 - false", () => {
		 let x = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
		 let k = 3;
		let ret = 10;

		let out = longestOnes(x, k);
		expect(out).toEqual(ret);
	});

	//[1,1,1,0,0,0,1,1,1,1,0]

	

});


