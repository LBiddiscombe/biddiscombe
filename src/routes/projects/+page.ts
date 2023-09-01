export async function load({ fetch, url }) {
	const contentResponse = await fetch(`api/posts?${url.searchParams.toString()}`);
	const { content, tags } = await contentResponse.json();

	const sketchesResponse = await fetch(`api/sketches`);
	const { sketches } = await sketchesResponse.json();

	return { content, tags, sketches };
}