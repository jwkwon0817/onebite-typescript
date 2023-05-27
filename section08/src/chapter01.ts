/**
 * Indexed Access Types
 */

type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		age: number;
	};
}[];

function printAuthorInfo(author: PostList[number]['author']) {
	console.log(`${ author.name } - ${ author.id }`);
}

const post: PostList[number] = {
	title: 'Post Title',
	content: 'Post Content',
	author: {
		id: 1,
		name: 'jwkwon0817',
		age: 16,
	},
};

printAuthorInfo(post.author);

type Tup = [ number, string, boolean ]

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNumber = Tup[number];