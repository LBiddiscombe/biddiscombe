<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';
	import { onDestroy, onMount } from 'svelte';

	export let path: string;
	let p5Instance: P5 | undefined;
	let p5Ref: HTMLDivElement | undefined;
	let wrapper: HTMLDivElement;
	let sketch: Sketch;

	onMount(async () => {
		({ sketch } = await import(/* @vite-ignore */ path));
		const p5 = new P5({
			target: wrapper,
			props: { sketch }
		});
		p5.$on('ref', gotRef);
		p5.$on('instance', gotInstance);
	});

	function gotRef(e: CustomEvent) {
		p5Ref = e.detail;
		if (!p5Ref) return;

		const canvas = e.detail.childNodes[0];
		const parentWidth = p5Ref.getBoundingClientRect().width;
		const canvasWidth = canvas.getBoundingClientRect().width;
		const scale = parentWidth / canvasWidth;

		if (scale < 1) {
			canvas.style.transformOrigin = 'left center';
			canvas.style.scale = `${scale}`;
		}
	}

	function gotInstance(e: CustomEvent) {
		p5Instance = e.detail;
	}

	onDestroy(() => {
		if (p5Ref && p5Instance) {
			p5Instance.remove();
			p5Instance = undefined;
			p5Ref.remove();
			p5Ref = undefined;
		}
	});
</script>

<div bind:this={wrapper}></div>
