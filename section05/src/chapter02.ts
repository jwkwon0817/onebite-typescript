/**
 * Merge Declaration
 */

interface Person {
	name: string;
}

interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	name: 'hello';
}

const person: Person = {
	name: '',
	age: 0,
};

/**
 * Module Reinforcement
 */

interface Lib {
	a: number;
	b: number;
}

interface Lib {
	c: string;
}

const lib: Lib = {
	a: 1,
	b: 2,
	c: 'hello',
}