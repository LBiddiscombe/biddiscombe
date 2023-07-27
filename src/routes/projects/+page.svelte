<script lang="ts">
	import Showcase from './Showcase.svelte';

	export let data;
</script>

<svelte:head>
	<title>LB Projects</title>
	<meta property="og:title" content="LB Projects" />
</svelte:head>

<Showcase data={data.content} tag="app">
	<span slot="title">Apps</span>
	<span slot="description">Some of the apps I've made for various projects</span>
</Showcase>

<Showcase data={data.content} tag="game">
	<span slot="title">Games</span>
	<span slot="description">Some games I had fun creating over the years</span>
</Showcase>
