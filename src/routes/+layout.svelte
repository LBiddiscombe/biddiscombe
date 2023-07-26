<script>
	import '../app.css';
	import '../app.postcss';
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/Transition.svelte';
	import Name from '$lib/components/Name.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	export let data;
</script>

<div class="flex h-full flex-col">
	<header class="bg-base-100">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between lg:flex-row w-full gap-2">
				<a href="/"><Name /></a>
				<div class="md:flex items-center md:gap-12 md:p-4">
					<nav aria-label="Global" class="">
						<ul class="flex items-center gap-2 md:gap-6">
							<li>
								<a
									class="text-base-content hover:text-base-content/75 pb-2 border-base-content"
									class:border-b-2={$page.url.pathname === '/projects'}
									href="/projects">Projects</a
								>
							</li>
							|
							<li>
								<a
									class="text-base-content hover:text-base-content/75 pb-2 border-base-content"
									class:border-b-2={$page.url.pathname === '/blog'}
									href="/blog">Blog</a
								>
							</li>
							|
							<li>
								<a
									class="text-base-content hover:text-base-content/75 pb-2 border-base-content"
									class:border-b-2={$page.url.pathname === '/about'}
									href="/about">About</a
								>
							</li>
							|
							<ThemeToggle />
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>

	<main class="mx-auto w-full max-w-screen-xl flex-1 px-4 sm:px-6 lg:px-8">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
</div>
