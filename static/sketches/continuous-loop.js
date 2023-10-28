export const sketch = (_p5) => {
	_p5.setup = function () {
		_p5.createCanvas(408, 408);
	};

	_p5.draw = function () {
		_p5.background(0);
		_p5.translate(_p5.width / 2, _p5.height);
		_p5.stroke(255);
		let n = 1;
		_p5.fill(255);
		for (let y = 0; y < _p5.width; y += 12) {
			for (let i = 0; i < _p5.TAU; i += _p5.TAU / 32) {
				const Y = y + (_p5.frameCount % 12);
				_p5.strokeWeight((_p5.width - Y) / 32 / n);
				n = 1 == n ? 2 : 1;
				_p5.rotate(_p5.sin(Y / 64 - _p5.frameCount / 16 + i) / (_p5.width / 2));
				_p5.point(_p5.sin(i) * Y, _p5.cos(i) * Y);
			}
		}
		_p5.circle(0, 0, 16);
	};
};
