/**
 * Disjoint Union Type
 * A Union Type Made Only of Non-Intersecting Types.
 */

type Admin = {
	tag: 'ADMIN',
	name: string;
	kickCount: number;
};

type Member = {
	tag: 'MEMBER',
	name: string;
	point: number;
};

type Guest = {
	tag: 'GUEST',
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> { name } has { kickCount } kicks so far.
// Member -> { name } has { point } points so far.
// Guest -> { name } has visited { visitCount } times so far.
function logIn(user: User) {
	switch (user.tag) {
		case 'ADMIN':
			console.log(`${ user.name } has ${ user.kickCount } kicks so far.`);
			break;
		case 'MEMBER':
			console.log(`${ user.name } has ${ user.point } points so far.`);
			break;
		case 'GUEST':
			console.log(`${ user.name } has visited ${ user.visitCount } times so far.`);
			break;
	}
}

/**
 * Example
 */

// An object that handles the result of an asynchronous operation.

type LoadingTask = {
	state: 'LOADING';
};

type FailedTask = {
	state: 'FAILED';
	error: {
		message: string;
	}
};

type SuccessTask = {
	state: 'SUCCESS';
	response: {
		data: string;
	}
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// LOADING -> Log 'Loading...'
// FAILED -> Log 'An error occurred.'
// SUCCESS -> Log the data.
function processResult(task: AsyncTask) {
	switch (task.state) {
		case 'LOADING':
			console.log('Loading...');
			break;
		case 'FAILED':
			console.log(`An error occurred: ${ task.error.message }`);
			break;
		case 'SUCCESS':
			console.log(`Success: ${ task.response.data }`);
			break;
	}
}

const loading: AsyncTask = {
	state: 'LOADING',
};

const failed: AsyncTask = {
	state: 'FAILED',
	error: {
		message: 'An error occurred.',
	},
};

const success: AsyncTask = {
	state: 'SUCCESS',
	response: {
		data: 'Data',
	},
};