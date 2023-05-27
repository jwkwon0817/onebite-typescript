/**
 * keyof Operator
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
	return person[key];
}

const person = {
	name: 'jwkwon0817',
	age: 16,
};

getPropertyKey(person, 'name');