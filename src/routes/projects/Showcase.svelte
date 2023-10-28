<script lang="ts">
	import type { Content } from '$lib/types';
	import { shuffleArray } from '$lib/utils';

	export let data: Content[];
	export let tag: string;

	$: posts = shuffleArray(data.filter((post: Content) => post.tags.includes(tag))).slice(0, 2);
</script>

<section class="mx-auto max-w-screen-xl py-8 sm:py-12">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
		<div class="flex items-center justify-center bg-neutral/50 p-6 sm:p-8">
			<div class="mx-auto max-w-md text-center lg:text-left">
				<header>
					<h2 class="text-content text-xl font-bold sm:text-3xl">
						<slot name="title" />
					</h2>
					<p class="text-content mt-4">
						<slot name="description" />
					</p>
				</header>
				<a
					href="/blog?searchTags={tag}"
					class="btn btn-neutral mt-8 inline-block rounded-none px-12 py-3 text-sm font-medium hover:shadow focus:outline-none focus:ring"
				>
					View All
				</a>
			</div>
		</div>

		<div class="lg:col-span-2 lg:py-8">
			<ul class="grid grid-cols-2 gap-4">
				{#each posts as post}
					<li>
						<a href={post.link} class="group block">
							<img
								src={post.coverimg}
								alt=""
								class="aspect-square w-full object-cover object-left-top"
							/>
							<div class="mt-3">
								<h3 class="font-medium group-hover:underline group-hover:underline-offset-4">
									{post.title}
								</h3>
								<p class="mt-1 text-sm text-base-content/75">
									{post.description}
								</p>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
