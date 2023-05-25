/**
 * Type Assertion
 */

type Person = {
	name: string;
	age: number;
};

let person = {} as Person;
person.name = 'jwkwon0817';
person.age = 16;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: 'Moongae',
	color: 'white',
	breed: 'Bichon Frise',
} as Dog;

/**
 * Rules for Type Assertion
 * Value as Assert <- Assert Expression
 * A as B
 * A is a supertype of B, or
 * A must be a subtype of B.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

/**
 * Constant Assertion
 */

let num4 = 10;

const cat = {
	name: 'Bella',
	color: 'white',
};

// cat.name = '';

/**
 * Non-Null Assertion
 */

type Post = {
	title: string;
	author?: string;
};

let post: Post = {
	title: 'Hello, TypeScript',
	author: 'jwkwon0817',
};

const len: number = post.author!.length;