/**
 * Pick<T, K>
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
	[key in K]: T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
	title: 'Legacy Title',
	content: 'Legacy Content',
};

/**
 * Omit<T, K>
 */

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
	content: '',
	tags: [],
	thumbnailUrl: '',
};

/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
	large: {
		url: string;
	},
	medium: {
		url: string;
	},
	small: {
		url: string;
	},
	watch: {
		url: string;
	},
};

type Record<K extends keyof any, V> = {
	[key in K]: V;
}

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string, size: number }>;