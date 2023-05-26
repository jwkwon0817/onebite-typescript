/**
 * Class of TypeScript
 */

const employee = {
	name: 'jwkwon0817',
	age: 16,
	position: 'Developer',
	work() {
		console.log('Working.')
	},
};

class Employee {
	// Fields
	name: string;
	age: number;
	position: string;
	
	// Constructor
	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}
	
	// Methods
	work() {
		console.log('Working.')
	}
}

const employeeB: Employee = new Employee('jwkwon0817', 16, 'Developer');
console.log(employeeB);