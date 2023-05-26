/**
 * Extension of the Interface
 */

interface Animal {
	name: string;
	color: string;
}

interface Dog extends Animal {
	isBark: boolean;
}

const dog: Dog = {
	name: 'Moongae',
	color: 'white',
	isBark: true,
}

interface Cat extends Animal {
	isScratch: boolean;
}

interface Chicken extends Animal {
	isFly: boolean;
}

interface DogCat extends Dog, Cat {
}

const dogCat: DogCat = {
	name: 'Moongae',
	color: 'white',
	isBark: true,
	isScratch: true,
}