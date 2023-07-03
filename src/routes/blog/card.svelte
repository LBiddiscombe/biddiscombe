<script lang="ts">
	import type { App } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let app: App;
</script>

<a href={`blog/${app.slug}`} class="">
	<article class="py-2">
		<p class="text-xl">{app.title}</p>
		<p class="text-gray-500">{formatDate(app.date)}</p>
		<p class="">{app.description}</p>
	</article>
</a>
