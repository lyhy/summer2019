https://paloaltonetworks.udemy.com/course/mastering-regular-expressions-in-javascript/learn/lecture/12345214#questions

//email address
let a = 'something@domain.com'
let rex = new RegExp(/.+@.+\..+/);//to general
let rex1 = new RegExp(/^[^\s@]+@[^\s@.]+\.[^\s@.]+$/);//more specific
//no match cases
//som ething@domain.com, somet@hing@domain.com something@do.main.com

//twitter name
let a = '@javascript'
let rex = new RegExp(/^@?(\w+)$/);//unnamed capture
let capturegroup = new RegExp(/^@?(?<testname>\w+)$/);//named
//rex.exec(a), ret.groups.testname = 'javascript'

//password rule
//upper,lower, special char, length
let pass='dN2dadfa/>';
let length = /^.{8,32}$/,
upper = /[A-Z]/,
lower = /[a-z]/,
numbers = /[0-9]/,
spe = /[!"#"]/; //or spe = /[^a-zA-Z0-9]/;
//length.test(pass) && upper

//replace
let a = '<b>This is aaa</b>';
a.replace(/b>/g, 'strong>');
//name.replace(/(\w+), (\w+)/, "$2 $1")

//matching a word by another
let a = 'lets put several different word together and see what we can match.'
//\b(?:word\W+together)\b
let a = 'lets put several different word more text together and see what we can match.';
//match in between \b(?:word\W+(?:\w+\W+){2,5}together)\b
//two words match without order
let a = 'lets put several together different word more text  and see what we can match.';
//\b(?:word\W+(?:\w+\W+){2,5}together)|(?:together\W+(?:\w+\W+){0,5}word)\b

//date
let a = '24/06/1888'
//^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/([0-9]{2})?[0-9]{2}$

//capturing matched text
let a = 'first 1, second 100, third 15'
//to sum up
a.match(/\d+/g)

//discovering information about match. continue above
let b = /\d+/.exec(a)

//iterate match, continue above
let b = /\d+/g
while(match = b.exec(c)){//or !match 
	if(match.index === b.lastIndex) b.lastIndex++;
	console.log(match)
}



