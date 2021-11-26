describe("Filter function", () => {
	let func = require('./500.keyboard-row');
	
	it("func 1", () => {
			let x = ["Hello","Alaska","Dad","Peace"];
			let ret = ["Alaska","Dad"];
	
			let out = func(x);
			expect(out).toEqual(ret);
	});

	it("func 2", () => {
		let x = ["omk"];
		let ret = [];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	it("func 3", () => {
		let x = ["adsdf","sfd"];
		let ret = ["adsdf","sfd"];

		let out = func(x);
		expect(out).toEqual(ret);
	});

	

});


