<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Copy, Check } from 'lucide-svelte';

	export let content: string;

	let showCheck = false;

	function handleClick(event: Event) {
		showCheck = true;
		navigator.clipboard.writeText(content);
		setTimeout(() => {
			showCheck = false;
		}, 1000);
	}
</script>

{#if showCheck}
	<span in:fly={{ y: 10 }} class="absolute right-2 top-2"><Check /></span>
{:else}
	<button
		in:fly={{ y: -10 }}
		class="absolute right-2 top-2"
		on:click={handleClick}
		title="Copy to clipboard"><Copy /></button
	>
{/if}
