/**
 * DefFunction Type Definition
 */

// Best way to describe a function
// Takes some parameters, returns some result
// The type of the parameter and the type of the return value are specified separately.
function func(a: number, b: number): number {
	return a + b;
}

/**
 * The Way to Define an Arrow Function Type
 */

const add = (a: number, b: number): number => {
	return a + b;
}

/**
 * The parameters of the Function
 */

function introduce(name = 'jwkwon0817', age: number, height?: number) {
	console.log(`name: ${ name }`);
	if (typeof height === 'number') {
		console.log(`height: ${ height + 10 }`);
	}
}

introduce('jwkwon0817', 16, 172);
introduce('jwkwon0817', 16);

function getSum(...numbers: number[]) {
	let sum = 0;
	numbers.forEach((number) => (sum += number));
	
	return sum;
}