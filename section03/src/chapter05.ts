/**
 * Type Inference
 */

let a = 10;
let b = 'hello';
let c = {
	id: 1,
	name: 'jwkwon0817',
	profile: {
		nickname: 'jwkwon',
	},
	urls: [ 'https://github.com/jwkwon0817' ],
};

let { id, name, profile } = c;

let [ one, two, three ] = [ 1, 'hello', true ];

function func(message = 'hello') {
	return 'hello';
}

let d;
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

const num = 10;
const str = 'hello';

let arr = [ 1, 'string' ];