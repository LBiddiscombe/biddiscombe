import type { Content } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const apps: Content[] = await response.json();
	return { apps };
}
