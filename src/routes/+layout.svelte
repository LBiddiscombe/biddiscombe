<script>
	import '../app.css';
	import '../app.postcss';
	import PageTransition from '$lib/components/transition.svelte';
	import Name from '$lib/components/name.svelte';
	import ThemeToggle from '$lib/components/themeToggle.svelte';

	export let data;
</script>

<div class="flex h-full flex-col">
	<header class="bg-base-100">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="flex-1 md:flex md:items-center md:gap-12">
					<a class="text-gray-500 hover:text-gray-500/75" href="/"><Name /></a>
				</div>

				<div class="md:flex md:items-center md:gap-12 md:p-4">
					<nav aria-label="Global" class="">
						<ul class="flex items-center gap-6">
							<li>
								<a class="text-base-content hover:text-base-content/75" href="/projects">Projects</a>
							</li>
							|
							<li>
								<a class="text-base-content hover:text-base-content/75" href="/blog">Blog</a>
							</li>
							|
							<li>
								<a class="text-base-content hover:text-base-content/75" href="/about">About</a>
							</li>
							|
						</ul>
					</nav>
				</div>
				<ThemeToggle />
			</div>
		</div>
	</header>

	<main class="mx-auto w-full max-w-screen-xl flex-1 px-4 sm:px-6 lg:px-8">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
</div>
