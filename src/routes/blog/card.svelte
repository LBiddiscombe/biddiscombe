<script lang="ts">
	import type { Content } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let app: Content;
</script>

<a href={`blog/${app.slug}`} class="bg-base-300 p-4">
	<article class="py-2">
		<p class="text-xl font-semibold text-balance">{app.title}</p>
		<p class=" text-base-content/50">{formatDate(app.date)}</p>
		<div class="flex gap-2 py-2">
			{#each app.tags as tag}
				<span class="rounded bg-base-200 px-2 py-1 font-mono text-xs">&num;{tag}</span>
			{/each}
		</div>
		<p class="text-base-content font-thin">{app.description}</p>
	</article>
</a>
