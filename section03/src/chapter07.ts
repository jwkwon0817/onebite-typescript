/**
 * Narrow Down the Type
 * Talk about how to narrow the type from a wide type to a narrow type depending
 * on the situation using conditional statements, etc.
 */

type Person = {
	name: string;
	age: number;
}

// value ==> number: toFixed
// value ==> string: toUpperCase
// value ==> Date: getTime
function func(value: number | string | Date | Person) {
	if (typeof value === 'number') {
		console.log(value.toFixed());
	} else if (typeof value === 'string') {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getTime());
	} else if (value && 'age' in value) {
		console.log(`${ value.name } is ${ value.age } years old.`)
	}
}