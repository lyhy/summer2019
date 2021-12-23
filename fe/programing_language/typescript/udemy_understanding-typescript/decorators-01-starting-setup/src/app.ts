function Logger(logString: string) {
	console.log('logger above factory function')
	return function(constructor: Function) {
		console.log(logString);
		console.log(constructor);
	}
}

function WithTemplateDirectly(template: string, hookId: string) {
	console.log('WithTemplate above factory function')
	return function(constructor: any) {
		console.log('withtemplate')
				const hookEl = document.getElementById(hookId);
				const p = new constructor();
				if(hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = p.name
				}
		
		// return class extends origin_constructor {
		//   constructor() {
		// 		super();
				
		// 	}	
		// }
	}
}

function WithTemplateWithNewClassReturn(template: string, hookId: string) {
	console.log('WithTemplateWithNewClassReturn above factory function')
	return function<T extends {new(...args: any[]): {name: string}}>(origin_constructor: T) {
		console.log('WithTemplateWithNewClassReturn')
				
		
		return class extends origin_constructor {
		  constructor(..._args: any[]) {
				super();
				const hookEl = document.getElementById(hookId);
				if(hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = this.name
				}
				
			}	
		}
	}
}
	

@Logger('abc')
// @WithTemplateDirectly('<h1>MyPerson</h1>', 'app')
@WithTemplateWithNewClassReturn('<h1>MyPerson</h1>', 'app')
class Person {
	name = 'Max';
	constructor() {
		console.log('creating person obj...');
	}
}

const pers = new Person();//new will run the return function for WithTemplateWithNewClassReturn
console.log(pers)

function Log(target: any, propertyName: string | Symbol) {
	console.log('property decorator');
	console.log(target, propertyName);

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Access Decorator');
	console.log(target, name, descriptor);	
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('Method Decorator');
	console.log(target, name, descriptor);	

}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log('Param Decorator');
	console.log(target, name, position);	
}

class Product {
	@Log
	title: String;
	_price: number;
	@Log2
	set price(val: number) {
		if(val > 0) {
			this._price = val;
		}else {
			throw new Error('Invalid price');
		}
	}
	
	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;

	}
	@Log3
	getPrice(@Log4 tax: number){
		return this._price * (1 + tax);

	}
}

//function, access, class decorator can return something; return value will be ignored for property or param decorator


//autobind
function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	}

	return adjDescriptor;

}
class Printer {
	message = 'this works';
	// @Autobind
	showMessage() {
		console.log(this.message)
	}
}

const printer = new Printer();

const button = document.querySelector('button');
// button?.addEventListener('click', printer.showMessage.bind(printer));
button?.addEventListener('click', printer.showMessage)

//validation
interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]//['required', 'positive']
	}
}

const registeredValidator: ValidatorConfig = {};


function Required(target: any, name: string) {
  registeredValidator[target.constructor.name] = {
		...registeredValidator[target.constructor.name],
		[name]: [...(registeredValidator[target.constructor.name]?.[name] ?? []), 'required']
	}	


}

function positiveNumber(target: any, name: string) {
  registeredValidator[target.constructor.name] = {
		...registeredValidator[target.constructor.name],
		[name]: [...(registeredValidator[target.constructor.name]?.[name] ?? []), 'positive']


	}	


}

function validate(obj: any) {
	const objValidatorConfig = registeredValidator[obj.constructor.name];
	if(!objValidatorConfig) {
		return true;
	}

	let isValid = true;

	for(const prop in objValidatorConfig) {

		
		for(const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid &&  !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}
class Course {
	@Required
	title: string;
	@positiveNumber
	price: number;
	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
	event.preventDefault();
	const titleEl = document.getElementById('title')  as HTMLInputElement;
	const priceEl = document.getElementById('price')  as HTMLInputElement;

	const createdCourse = new Course(titleEl.value, +priceEl.value);
	if(!validate(createdCourse)) {
		alert ('invalid form, please try again');
		return;
	}
	console.log(createdCourse);

})
