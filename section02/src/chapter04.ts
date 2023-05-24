// Type Alias
type  User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
};

let user: User = {
	id: 1,
	name: 'jwkwon0817',
	nickname: 'jwkwon',
	birth: '2008.08.17',
	bio: 'Hello, World!',
	location: 'Bucheon-si, Gyeonggi-do, Republic of Korea',
};

let user2: User = {
	id: 2,
	name: 'John',
	nickname: 'John',
	birth: '1997.01.07',
	bio: 'Hello, World!',
	location: 'Bucheon-si, Gyeonggi-do, Republic of Korea',
};

// Index Signature
type CountryCodes = {
	[ key: string ]: string;
};

let countryCodes: CountryCodes = {
	Korea: 'ko',
	UnitedStates: 'us',
	UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
	[ key: string ]: number;
}

let countryNumberCodes: CountryNumberCodes = {
	Korea: 410,
	UnitedStates: 840,
	UnitedKingdom: 826,
};