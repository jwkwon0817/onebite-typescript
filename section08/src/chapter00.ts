/**
 * Indexed Access Types
 */

interface Post {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
	};
}

function printAuthorInfo(author: Post['author']) {
	console.log(`${ author.name } - ${ author.id }`);
}

const post: Post = {
	title: 'Post Title',
	content: 'Post Content',
	author: {
		id: 1,
		name: 'jwkwon0817',
	},
};