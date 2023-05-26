/**
 * Promise
 */

const promise = new Promise<number>(() => {
	setTimeout((resolve, reject) => {
		// resolve(20);
		// resolve(20);
		reject('Failed by some reason');
	}, 3000);
});

promise.then((response) => {
	console.log();
});

promise.catch((err) => {
	if (typeof err === 'string') {
		console.log(err);
	}
});

/**
 * Defines the type of function that returns a promise
 */

interface Post {
	id: number;
	title: string;
	content: string;
}

function fetchPost(): Promise<Post> {
	return new Promise(() => {
		setTimeout((resolve, reject) => {
			resolve({
				id: 1,
				title: 'Post Title',
				content: 'Post Content',
			});
		}, 3000);
	});
}

const postRequest = fetchPost();

postRequest.then((post) => {
	post.id;
});