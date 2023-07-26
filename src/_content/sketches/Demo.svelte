<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';

	const sketch: Sketch = (p5) => {
		p5.setup = function () {
			p5.createCanvas(408, 408);
		};

		p5.draw = function () {
			p5.background(0);
			p5.translate(p5.width / 2, p5.height);
			p5.stroke(255);
			let n = 1;
			p5.fill(255);
			for (let y = 0; y < p5.width; y += 12) {
				for (let i = 0; i < p5.TAU; i += p5.TAU / 32) {
					const Y = y + (p5.frameCount % 12);
					p5.strokeWeight((p5.width - Y) / 32 / n);
					n = 1 == n ? 2 : 1;
					p5.rotate(p5.sin(Y / 64 - p5.frameCount / 16 + i) / (p5.width / 2));
					p5.point(p5.sin(i) * Y, p5.cos(i) * Y);
				}
			}
			p5.circle(0, 0, 16);
		};

		p5.keyPressed = function () {
			if (p5.key === 's') {
				p5.saveGif('loop', p5.width / 4, {
					delay: 0,
					units: 'frames'
				});
			}
		};
	};
</script>

<P5 {sketch} />
