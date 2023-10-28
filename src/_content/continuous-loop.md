---
title: Continuous Loop Sketch
description: A sketch based on a creation by Koma Tebe
date: '2023-01-01'
tags: ['p5', 'dwitter', 'sketch']
published: true
---

A P5 sketch based on this [creation](https://twitter.com/KomaTebe/status/1622885628152086528?s=20) by Koma Tebe

```javascript
(f = 0),
	(q = 200),
	(draw = (r) => {
		for (
			f++ || createCanvas((W = 400), W),
				background(0),
				translate((w = 200), W),
				stroke(W),
				n = 1,
				y = 0;
			y < W;
			y += 12
		)
			for (i = 0; i < TAU; i += PI / 16)
				(Y = y + (f % 12)),
					strokeWeight((W - Y) / 36 / n),
					(n = 1 == n ? 2 : 1),
					rotate(sin(Y / 64 - f / 16 + i) / w),
					point(sin(i) * Y, cos(i) * Y);
	});
```

<script>
	import P5Wrapper from '$lib/components/P5Wrapper.svelte';
</script>

<P5Wrapper path={'/sketches/continuous-loop.js'} />
