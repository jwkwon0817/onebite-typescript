/**
 * Algebraic Type
 * -> A new type created by combining several types
 * -> There are union types and intersection types.
 */

/**
 * 1. Union Type
 */

let a: string | number | boolean | undefined | null | {};
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [ 1, 'hello', true ];

type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type Union = Dog | Person;

let union1: Union = {
	name: '',
	color: '',
};

let union2: Union = {
	name: '',
	language: '',
};

let union3: Union = {
	name: '',
	color: '',
	language: '',
};

/*
let union4: Union1 = {
	name: '',
};
 */

/**
 * 2. Intersection Type
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
	name: '',
	color: '',
	language: '',
}
