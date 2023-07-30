<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';
	import { onMount } from 'svelte';

	export let path: string;
	let wrapper: HTMLDivElement;
	let sketch: Sketch;

	onMount(async () => {
		({ sketch } = await import(/* @vite-ignore */ path));
		const p5 = new P5({
			target: wrapper,
			props: { sketch }
		});
		p5.$on('ref', gotRef);
	});

	function gotRef(e: CustomEvent) {
		const parentNode = e.detail;
		const canvas = e.detail.childNodes[0];
		const parentWidth = parentNode.getBoundingClientRect().width;
		const canvasWidth = canvas.getBoundingClientRect().width;
		const scale = parentWidth / canvasWidth;

		if (scale < 1) {
			canvas.style.transformOrigin = 'left center';
			canvas.style.scale = `${scale}`;
		}
	}
</script>

<div bind:this={wrapper}></div>
