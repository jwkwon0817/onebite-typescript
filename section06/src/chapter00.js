/**
 * Class
 */

let studentA = {
	name: 'jwkwon0817',
	grade: 'A+',
	age: 16,
	study() {
		console.log('Studying hard.');
	},
	introduce() {
		console.log('Hello!');
	},
};

class Student {
	// Fields
	name;
	grade;
	age;
	
	// Constructor
	constructor(name, grade, age) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}
	
	// Methods
	study() {
		console.log('Studying hard.');
	}
	
	introduce() {
		console.log(`Hello! My name is ${ this.name }!`);
	}
}

class StudentDeveloper extends Student{
	// Field
	favoriteSkill;
	
	// Constructor
	constructor(name, grade, age, favoriteSkill) {
		super(name, grade, age);
		this.favoriteSkill = favoriteSkill;
	}
	
	// Method
	programming() {
		console.log(`I program with ${ this.favoriteSkill }!`);
	}
}

const studentDeveloper = new StudentDeveloper(('jwkwon0817', 'B+', 16, 'TypeScript'));
console.log(studentDeveloper);
studentDeveloper.programming();

// Objects created using classes are called Instances.
// Student Instance
let studentB = new Student('jwkwon0817', 'A+', 27);
console.log(studentB);
studentB.study();
studentB.introduce();