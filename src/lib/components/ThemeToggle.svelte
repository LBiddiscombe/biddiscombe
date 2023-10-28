<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button
	on:click={toggleTheme}
	aria-label="Toggle theme"
	class="overflow-hidden p-0 text-base-content hover:text-base-content/75"
>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }} class="flex gap-2">
			<Sun />
			<span class="hidden sm:inline-block">Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }} class="flex gap-2">
			<Moon />
			<span class="hidden sm:inline-block">Dark</span>
		</div>
	{/if}
</button>
