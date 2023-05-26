/**
 * Access Modifier
 * => public, private, protected
 */

class Employee {
	// Constructor
	constructor(private name: string, protected age: number, public position: string) {}
	
	// Methods
	work() {
		console.log('Working.')
	}
}

class ExecutiveOfficer extends Employee {
	// Field
	officeNumber: number;
	
	// Constructor
	constructor(name: string, age: number, position: string, officeNumber: number) {
		super(name, age, position);
		this.officeNumber = officeNumber;
	}
	
	// Methods
	func() {
		console.log(this.age);
	}
}

const employee: Employee = new Employee('jwkwon0817', 16, 'Developer');
// employee.name = 'jwkwon';
// employee.age = 17;
employee.position = 'Designer';

console.log(employee);