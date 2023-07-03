<script lang="ts">
	import Card from './card.svelte';
	export let data;
</script>

<section class="pt-8">
	<ul class="">
		<li>
			{#each data.apps as app}
				<Card {app} />
			{/each}
		</li>
	</ul>
</section>
