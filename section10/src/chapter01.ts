/**
 * Partial<T>
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailUrl?: string;
}

type Partial<T> = {
	[key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
	title: 'Test Title',
	content: 'Test Content',
};

/**
 * Required<T>
 */

type Required<T> = {
	[key in keyof T]-?: T[key];
}

const withThumbnail: Required<Post> = {
	title: 'Test Title',
	tags: [ 'ts' ],
	content: 'Test Content',
	thumbnailUrl: 'https://github.com/jwkwon0817',
};

/**
 * Readonly<T>
 */

type Readonly<T> = {
	readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
	title: 'Test Title',
	tags: [ 'ts' ],
	content: 'Test Content',
};