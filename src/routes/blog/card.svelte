<script lang="ts">
	import type { App } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let app: App;
</script>

<a href={`blog/${app.slug}`} class="bg-base-300 p-4">
	<article class="py-2">
		<p class="text-xl font-semibold">{app.title}</p>
		<p class="mb-4 text-gray-500">{formatDate(app.date)}</p>
		<p class="font-thin">{app.description}</p>
	</article>
</a>
