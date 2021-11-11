//https://kevinkreuzer.medium.com/advanced-typescript-43331bb4a875
//Union and intersection types
type UnionStringAndNumber = string | number;
let aUnionStringAndNumber: UnionStringAndNumber;
// aUnionStringAndNumber = true;//error
aUnionStringAndNumber = 'abc';
aUnionStringAndNumber = 123;

//Intersection types
interface Person {
	name: string
}
interface FootballPlayer {
	club: string
}
let aPersonAndFootballPlayer: Person & FootballPlayer = {
	name: 'abc',
	club: 'A'
} 


//keyof
interface MovieCharacter {
	firstname: string;
	name: string;
	movie: string;
}
type CharacterProps = keyof MovieCharacter;
let aCharacterProps: CharacterProps = 'firstname';
let bCharacterProps: CharacterProps = 'name';
let cCharacterProps: CharacterProps = 'movie';

//typeof
let firstname = 'abc';
let anotherFirstname: typeof firstname = 'ddd';

//Conditional types
interface StringId {
	id: string
}
interface NumberId {
	id: number
}
type ID<T> = T extends string ? StringId : NumberId;
let aStringID: ID<string> = {id: 'abc'};
let aNumberID: ID<number> = {id: 2};

//Utility types
//https://www.typescriptlang.org/docs/handbook/utility-types.html

//Partial
type PartialMovieCharacter = Partial<MovieCharacter>;
let aPartialMovieCharacter: PartialMovieCharacter = {};
//let bPartialMovieCharacter: PartialMovieCharacter = {random: 1};//wrong one
let bPartialMovieCharacter: PartialMovieCharacter = {name: 'abc'};


//Required
interface OptionalMovieCharacter {
	firstname?: string,
	name?: string;
}
let aOptionalMovieCharacter: OptionalMovieCharacter = {};
let bOptionalMovieCharacter: OptionalMovieCharacter = {name: 'abc'};


//Extract
type MovieCharacters = 
| 'Harry Potter'
| 'Tom Riddle'
| {firstname: string, name: string}
type ExtracAMovieCharacters = Extract<MovieCharacters, string>;
// let aExtracAMovieCharacters: ExtracAMovieCharacters = 'abc'//wrong
let bExtracAMovieCharacters: ExtracAMovieCharacters = 'Harry Potter';
type ExtracBMovieCharacters = Extract<MovieCharacters, {firstname: string}>;
// let aExtracBMovieCharacters: ExtracBMovieCharacters = 'Harry Potter';//wrong;
let bExtracBMovieCharacters: ExtracBMovieCharacters = {firstname: 'abc', name: 'a'};


//Exclude
type ExcludeAMovieCharacters = Exclude<MovieCharacters, string>;
// let aExcludeAMovieCharacters: ExcludeAMovieCharacters = 'Harry Potter';//wrong
let bExcludeAMovieCharacters: ExcludeAMovieCharacters = {firstname: 'abc', name: 'a'};


//Infer type








//? whatis the difference between interface and type?