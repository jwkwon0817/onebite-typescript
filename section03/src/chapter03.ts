/**
 * Compatibility between Primitive Types
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * Compatibility between Object Types
 * -> Is it okay to treat some object types as other object types?
 */

type Animal = {
	name: string;
	color: string;
};

type Dog = {
	name: string;
	color: string;
	breed: string;
};

let animal: Animal = {
	name: 'Giraffe',
	color: 'yellow',
};

let dog: Dog = {
	name: 'Moongae',
	color: 'white',
	breed: 'Bichon Frise',
};

animal = dog;
// dog = animal;

type Book = {
	name: string;
	price: number;
};

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
}

let book: Book;

let programmingBook: ProgrammingBook = {
	name: 'TypeScript Programming',
	price: 20000,
	skill: 'TypeScript',
};

book = programmingBook;
// programmingBook = book;

/**
 * Excess Property Check
 */

let book2: Book = {
	name: 'TypeScript Programming',
	price: 20000,
	// skill: 'TypeScript',
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
	name: 'TypeScript Programming',
	price: 20000,
	// skill: 'TypeScript',
});

func(programmingBook);