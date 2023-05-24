// Array
let numArr: number[] = [ 1, 2, 3 ];
let strArr: string[] = [ 'hello', 'im', 'jwkwon0817' ];
let boolArr: Array<boolean> = [ true, false, true ];

// If the elements in the array are of different types
let multiArr: (number | string)[] = [ 1, 'hello' ];

// How to define the type of a multidimensional array
let doubleArr: number[][] = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
];

// Tuple
// Arrays of fixed length and type
let tup1: [ number, number ] = [ 1, 2 ];
let tup2: [ number, string, boolean ] = [ 1, '2', true ];

const users: [ string, number ][] = [
	[ 'jwkwon0817', 1 ],
	[ 'John', 2 ],
	[ 'Jane', 3 ],
	[ 'Mary', 4 ],
];