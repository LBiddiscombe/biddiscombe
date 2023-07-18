<script lang="ts">
	import type { Content } from '$lib/types';
	import Card from './card.svelte';
	export let data;

	let searchTags: Set<string> = new Set();

	function handleTagClick(tag: string) {
		if (!searchTags.has(tag)) {
			searchTags.add(tag);
		} else {
			searchTags.delete(tag);
		}

		searchTags = searchTags;
	}

	$: content = data.content.filter(
		(c: Content) => searchTags.size === 0 || [...searchTags].every((tag) => c.tags.includes(tag))
	);
</script>

<svelte:head>
	<title>LB Blog</title>
	<meta property="og:title" content="LB Blog" />
</svelte:head>

<div class="flex gap-2 py-2">
	{#each data.tags as tag}
		<button
			class="rounded bg-base-200 px-2 py-1 font-mono text-xs"
			class:outline={searchTags.has(tag)}
			value={tag}
			on:click={() => handleTagClick(tag)}>&num;{tag}</button
		>
	{/each}
</div>

<section class="grid auto-rows-fr grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
	{#each content as app}
		<Card {app} />
	{/each}
</section>
