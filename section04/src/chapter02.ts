/**
 * Compatibility of function types
 * Determines whether a function type can be treated as another function type
 * 1. Whether the return value types are compatible
 * 2. Whether the types of parameters are compatible
 */

// Criterion 1. Are return values compatible?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// Criterion 2. Are the parameters compatible?
// 2-1. When the number of parameters is the same

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
	console.log(animal.name);
	// console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
	console.log(dog.name);
};

// 2-2. When the number of parameters is different

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;