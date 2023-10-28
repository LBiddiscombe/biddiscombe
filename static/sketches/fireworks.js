export const sketch = (_p5) => {
	// Based on
	// Daniel Shiffman
	// http://codingtra.in
	// https://youtu.be/CKeyIbT3vXI

	const fireworks = [];
	let gravity;

	_p5.setup = function () {
		_p5.createCanvas(_p5.windowWidth, _p5.windowHeight);
		_p5.colorMode(_p5.HSB);
		gravity = _p5.createVector(0, 0.2);
		_p5.stroke(255);
		_p5.strokeWeight(4);
		_p5.background(0);
	};
	_p5.draw = function () {
		_p5.colorMode(_p5.RGB);
		_p5.background(0, 27, 41, 30);
		if (_p5.random(1) < 0.04) {
			fireworks.push(new Firework());
		}
		for (let i = fireworks.length - 1; i >= 0; i--) {
			fireworks[i].update();
			fireworks[i].show();
			if (fireworks[i].done()) {
				fireworks.splice(i, 1);
			}
		}
	};
	class Firework {
		constructor() {
			this.hu = _p5.random(255);
			this.firework = new Particle(_p5.random(_p5.width), _p5.height, this.hu, true);
			this.exploded = false;
			this.particles = [];
		}
		done() {
			if (this.exploded && this.particles.length === 0) {
				return true;
			} else {
				return false;
			}
		}
		update() {
			if (!this.exploded) {
				this.firework.applyForce(gravity);
				this.firework.update();
				if (this.firework.vel.y >= 0) {
					this.exploded = true;
					this.explode();
				}
			}
			for (let i = this.particles.length - 1; i >= 0; i--) {
				this.particles[i].applyForce(gravity);
				this.particles[i].update();
				if (this.particles[i].done()) {
					this.particles.splice(i, 1);
				}
			}
		}
		explode() {
			for (let i = 0; i < 100; i++) {
				const hu = _p5.random(this.hu - 30, this.hu + 30);
				const p = new Particle(this.firework.pos.x, this.firework.pos.y, hu, false);
				this.particles.push(p);
			}
		}
		show() {
			if (!this.exploded) {
				this.firework.show();
			}
			for (let i = 0; i < this.particles.length; i++) {
				this.particles[i].show();
			}
		}
	}
	class Particle {
		constructor(x, y, hu, isFirework) {
			this.pos = _p5.createVector(x, y);
			this.isFirework = isFirework;
			this.lifespan = 255;
			this.spread = _p5.random(0.8, 0.99);
			this.hu = hu;
			this.acc = _p5.createVector(0, 0);
			if (this.isFirework) {
				this.vel = _p5.createVector(_p5.random(-1, 1), _p5.random(-16, -8));
			} else {
				this.vel = _p5.Vector.random2D();
				this.vel.mult(_p5.random(2, 10));
			}
		}
		applyForce(force) {
			this.acc.add(force);
		}
		update() {
			if (!this.isFirework) {
				this.vel.mult(this.spread);
				this.lifespan -= 4;
			}
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);
		}
		done() {
			if (this.lifespan < 0) {
				return true;
			} else {
				return false;
			}
		}
		show() {
			_p5.colorMode(_p5.HSB);
			if (!this.isFirework) {
				_p5.strokeWeight(2);
				_p5.stroke(this.hu, 255, 255, this.lifespan / 255);
			} else {
				_p5.strokeWeight(4);
				_p5.stroke(this.hu, 255, 255);
			}
			_p5.point(this.pos.x, this.pos.y);
		}
	}
};
