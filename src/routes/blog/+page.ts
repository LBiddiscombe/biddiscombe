export async function load({ fetch, url }) {
	const response = await fetch(`api/posts?${url.searchParams.toString()}`);
	const { content, tags } = await response.json();
	return { content, tags };
}
