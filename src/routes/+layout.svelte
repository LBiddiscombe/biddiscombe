<script>
	import '../app.css';
	import '../app.postcss';
	import PageTransition from '$lib/components/transition.svelte';

	export let data;
</script>

<div class="flex h-full flex-col">
	<header class="bg-base-200">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex-1 md:flex md:items-center md:gap-12">
					<a class="text-gray-500 hover:text-gray-500/75" href="/">Lee Biddiscombe</a>
				</div>

				<div class="md:flex md:items-center md:gap-12">
					<nav aria-label="Global" class="hidden md:block">
						<ul class="flex items-center gap-6 text-sm">
							<li>
								<a class="text-gray-500 hover:text-gray-500/75" href="/about">About</a>
							</li>
							<li>
								<a class="text-gray-500 hover:text-gray-500/75" href="/projects">Projects</a>
							</li>
							<li>
								<a class="text-gray-500 hover:text-gray-500/75" href="/posts">Blog</a>
							</li>
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
