// Enum Type
// A type that enumerates and uses various values by giving them names

enum Role {
	ADMIN,
	USER = 10,
	GUEST,
}

const user1 = {
	name: 'jwkwon0817',
	role: Role.ADMIN, // 0 <- Admin
};

const user2 = {
	name: 'John',
	role: Role.USER, // 1 <- User
};

const user3 = {
	name: 'Jane',
	role: Role.GUEST, // 2 <- Guest
};

console.log(user1, user2, user3);