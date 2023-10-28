<script lang="ts">
	import P5Wrapper from '$lib/components/P5Wrapper.svelte';
	import type { SketchInfo } from '$lib/types';
	export let data: SketchInfo[];

	let selectedSketch = data.length > 0 ? data[0] : null;
</script>

<section class="mx-auto max-w-screen-xl py-8 sm:py-12">
	<div class="grid h-auto grid-cols-1 gap-4 sm:h-[540px] lg:grid-cols-3 lg:items-stretch">
		<div class="flex items-center justify-center bg-neutral/50 p-6 sm:p-8">
			<div class="mx-auto max-w-md text-center lg:text-left">
				<header>
					<h2 class="text-content text-xl font-bold sm:text-3xl">P5 Sketch Explorer</h2>
				</header>
				<ul class="grid grid-cols-2 gap-4">
					{#each data as sketch}
						<li>
							<button on:click={() => (selectedSketch = sketch)}>{sketch.name}</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="lg:col-span-2 lg:py-8">
			{#if selectedSketch}
				{#key selectedSketch.path}
					<P5Wrapper path={selectedSketch.path} />
				{/key}
			{/if}
		</div>
	</div>
</section>
