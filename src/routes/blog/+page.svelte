<script lang="ts">
	import Card from './card.svelte';
	export let data;
</script>

<section class="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
	{#each data.apps as app}
		<Card {app} />
	{/each}
</section>
