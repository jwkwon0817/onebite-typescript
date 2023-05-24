// Enum Type
// A type that enumerates and uses various values by giving them names

enum Role {
	ADMIN,
	USER = 10,
	GUEST,
}

enum Language {
	KOREAN = 'ko',
	ENGLISH = 'en',
}

const user1 = {
	name: 'jwkwon0817',
	role: Role.ADMIN, // 0 <- Admin
	language: Language.KOREAN,
};

const user2 = {
	name: 'John',
	role: Role.USER, // 1 <- User
	language: Language.ENGLISH,
};

const user3 = {
	name: 'Jane',
	role: Role.GUEST, // 2 <- Guest
	language: Language.ENGLISH,
};

console.log(user1, user2, user3);