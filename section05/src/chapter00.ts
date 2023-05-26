/**
 * Interface
 */

interface Person {
	readonly name: string;
	age?: number;
	sayHi(): void;
	sayHi(a: number, b: number): void;
}

const person: Person = {
	name: 'jwkwon0817',
	sayHi: function () {
		console.log('Hi');
	},
};

// person.name = 'jwkwon';