//create html tag
class Tag {
	static get indentSize() {return 2}
	constructor(name = '', text = '') {
		this.name = name;
		this.text = text;
		this.children = [];
	}

	toString() {
		return this.toStringImple(0);
	}

	toStringImple(indent) {
		let html = [];
		let indentStr = ' '.repeat(indent * Tag.indentSize);
		html.push(`${indentStr}<${this.name}>\n`);
		if(this.text.length > 0) {
			html.push(' '.repeat((indent + 1) * Tag.indentSize))
			html.push(this.text);
			html.push('\n');
		}

		for(let child of this.children) {
			html.push(child.toStringImple(indent + 1));
		}
	
		html.push(`${indentStr}</${this.name}>\n`);

		return html.join('');
	}

	static create(name)
  {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
	constructor(rootName) {
		this.root = new Tag(rootName);
		this.rootName = rootName;
	}

	addChild(childName, childText) {
		let child = new Tag(childName, childText);
		this.root.children.push(child);
		//chain
		return this;

	}

	clear()
  {
    this.root = new Tag(this.rootName);
  }

	toString() {
		return this.root.toString();
	}

	build() {
		return this.root;
	}

}

// let builder = new HtmlBuilder('ul');
// const words = ['hello', 'word']
// for(let word of words) {
// 	builder.addChild('li', word);
// }

// console.log(builder.root.toString())

// let builder = Tag.create('ul');
// const words = ['hello', 'word']
// for(let word of words) {
// 	builder.addChild('li', word);
// }

// console.log(builder.root.toString())

let builder = Tag.create('ul');
const words = ['hello', 'word']
for(let word of words) {
	builder.addChild('li', word);
}

console.log(builder.root.toString());

builder.clear();
builder.addChild('li', 'foo');
builder.addChild('li', 'bar');
builder.addChild('li', 'baz');
console.log(builder.root.toString());