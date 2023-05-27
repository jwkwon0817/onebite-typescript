/**
 * Mapped Type
 */

interface User {
	id: number;
	name: string;
	age: number;
}

type PartialUser = {
	[key in keyof User]?: User[key];
};

type BooleanUser = {
	[key in keyof User]: boolean;
};

type ReadonlyUser = {
	readonly [key in keyof User]: User[key];
};

// Load a user information
function fetchUser(): ReadonlyUser {
	// ... function
	return {
		id: 1,
		name: 'jwkwon0817',
		age: 16,
	};
}

// Update a user information
function updateUser(user: PartialUser) {
	// ... function
}

updateUser({
	// id: 1,
	// name: 'jwkwon0817',
	age: 17,
});