<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose max-w-screen-xl pt-8">
	<!-- Title -->
	<hgroup class="">
		<h1 class="">{data.meta.title}</h1>
		<p class="-mt-8 mb-0">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags flex gap-2 py-4">
		{#each data.meta.tags as tag}
			<span class="rounded bg-base-300 px-2 py-1 font-mono">&num;{tag}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose max-w-5xl">
		<svelte:component this={data.content} />
	</div>
</article>
