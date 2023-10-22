<script lang="ts">
	import P5Wrapper from '$lib/components/P5Wrapper.svelte';
	import { theme } from '$lib/theme';
</script>

<svelte:head>
	<title>Lee Biddiscombe</title>
	<meta property="og:title" content="Lee Biddiscombe" />
</svelte:head>

<div class="mx-auto grid h-full max-w-screen-xl place-items-center">
	<p class="-translate-y-16 z-10">Hi, I'm Lee, a developer based in the UK</p>

	{#if $theme === 'light'}
		<div class="w-full fixed left-0 bottom-0 pointer-events-none mix-blend-darken">
			<P5Wrapper path={'/sketches/beach-waves.js'} />
		</div>
		<p class="z-10 fixed right-4 bottom-4 text-sm bg-base-100 px-2 py-1 rounded-md">
			Sketch:
			<a href="/blog/beach-waves" class="underline">Beach Waves</a>
		</p>
	{:else}
		<div class="w-full fixed left-0 bottom-0 mix-blend-lighten pointer-events-none">
			<P5Wrapper path={'/sketches/fireworks.js'} />
		</div>
		<p class="z-10 fixed right-4 bottom-4 text-sm bg-base-100 px-2 py-1 rounded-md">
			Sketch:
			<a href="/blog/fireworks" class="underline">Fireworks</a>
		</p>
	{/if}

	<!-- <div class="grid grid-cols-3 gap-2 w-full border-2 border-accent p-2 lg:p-4">
		<h3 class="text-2xl font-semibold col-span-3 h-16">Theme Preview</h3>
		<div class="bg-base-100 text-base-content w-full h-16 md:h-32 grid place-items-center">Base 100</div>
		<div class="bg-base-200 text-base-content w-full h-16 md:h-32 grid place-items-center">Base 200</div>
		<div class="bg-base-300 text-base-content w-full h-16 md:h-32 grid place-items-center">Base 300</div>
		<div class="bg-primary text-primary-content w-full h-16 md:h-32 grid place-items-center">Primary</div>
		<div class="bg-secondary text-secondary-content w-full h-16 md:h-32 grid place-items-center">Secondary</div>
		<div class="bg-accent text-accent-content w-full h-16 md:h-32 grid place-items-center">Accent</div>
		<div class="bg-neutral text-neutral-content w-full h-16 md:h-32 grid place-items-center">Neutral</div>
		<div class="bg-info text-info-content w-full h-16 md:h-32 grid place-items-center">Info</div>
		<div class="bg-success text-success-content w-full h-16 md:h-32 grid place-items-center">Success</div>
		<div class="bg-warning text-warning-content w-full h-16 md:h-32 grid place-items-center">Warning</div>
		<div class="bg-error text-error-content w-full h-16 md:h-32 grid place-items-center">Error</div>
	</div> -->
</div>
