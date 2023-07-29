<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { formatDate } from '$lib/utils';
	import CopyButton from '$lib/components/CopyButton.svelte';

	export let data;

	afterUpdate(() => {
		for (const node of document.querySelectorAll(
			`:not(pre) > code[class*='language-'], pre[class*='language-']`
		)) {
			const wrapper = document.createElement('div');
			const lang = document.createElement('span');

			lang.classList.add('font-mono');
			lang.innerText = node.className.replaceAll('language-', '');

			node.parentNode?.insertBefore(wrapper, node);

			wrapper.appendChild(lang);
			wrapper.appendChild(node);
			wrapper.style.position = 'relative';

			new CopyButton({
				target: wrapper,
				props: { content: node.textContent ?? '' }
			});
		}
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="my-4"><a href="/blog" class="underline">Back</a></div>

<article class="prose max-w-screen-xl">
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

	<img src={data.meta.coverimg} alt="" class="w-full" />

	<!-- Post -->
	<div class="prose max-w-5xl pb-8">
		<svelte:component this={data.content} />
	</div>
</article>

<div class="my-4"><a href="/blog" class="underline">Back</a></div>
