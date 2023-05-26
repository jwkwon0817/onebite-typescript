/**
 * First Example
 */

function swap<T, K>(a: T, b: K) {
	return [ b, a ];
}

const [ a, b ] = swap(1, 2);

/**
 * Second Example
 */

function returnFirstValue<T>(data: [ T, ...unknown[] ]) {
	return data[0];
}

let num = returnFirstValue([ 0, 1, 2 ]);

let str = returnFirstValue([ 1, 'hello', 'mynameis' ]);

/**
 * Third Example
 */

interface InterfaceA {
	length: number;
}

interface InterfaceB extends InterfaceA {
}

function getLength<T extends { length: number }>(data: T) {
	return data.length;
}

let var1 = getLength([ 1, 2, 3 ]); // 3

let var2 = getLength('12345'); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
