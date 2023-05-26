/**
 * Function Overloading
 * Syntax for making multiple versions of a function
 * depending on the number or types of parameters
 * -> One function called func
 * -> Ver1. 1 parameter -> output the value multiplied by 20
 * -> Ver2. 3 parameters -> Outputs the sum of these parameters
 */

// Versions
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// Real Implementation -> Implementation Signature
function func(a: number, b?: number, c?: number) {
	if ((typeof b === 'number') && (typeof c === 'number')) {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);