//function type
function add(n1: number, n2: number){
	return n1 + n2;
	}


function printOut(a: string): void {
	console.log(a);
}

let comF: (a: number, b: number) => number;
comF = add;
//comF = print;

console.log(comF(1,2));

/*
function add(n1: number, n2: number) {

	return n1 + n2;
}

const number1 = 5;
const number2 = 9
const result = add(number1, number2);;
console.log(result);
*/
//enum
/*
enum Role {
	Admin=5, Read, User	
}

let person = {
	name: 'a',
	role: Role.Admin
}

console.log(person)
*/

//Union
/*
function combine(x: number | string, y: number | string) {
	let result;
	if(typeof x === 'number' && typeof y === 'number') {

	  result = x + y;
	}else {
		result = x.toString() + y.toString();
		}
	return result;
}

console.log(combine(1, '5'));
*/
