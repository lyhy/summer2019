describe("Filter function", () => {
	let func = require('./2073.time-needed-to-buy-tickets');
	
	it("func 1", () => {
			let x = [2,3,2], k = 2;
			let ret = 6;
	
			let out = func(x, k);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = [5,1,1,1], k = 0;
		let ret = 8;

		let out = func(x, k);
		expect(out).toEqual(ret);
  });

	it("func 3", () => {
		let x = [84,49,5,24,70,77,87,8], k =3;
		//24+24+5+24+23+23+23+8
		let ret = 154;

		let out = func(x, k);
		expect(out).toEqual(ret);
  });//

  it("func 4", () => {
		let x = [15,66,3,47,71,27,54,43,97,34,94,33,54,26,15,52,20,71,88,42,50,6,66,88,36,99,27,82,7,72], k =18;
		//24+24+5+24+23+23+23+8
		let ret = 1457;

		let out = func(x, k);
		expect(out).toEqual(ret);
  });
	

});


