import type p5 from 'p5';

export class Particle {
  p: p5;
  position: p5.Vector;
  acceleration: p5.Vector;
  velocity: p5.Vector;
  lifespan: number;

  constructor(p: p5, x: number, y: number) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 0));
    this.lifespan = 255.0;
  }

  run() {
    let gravity = this.p.createVector(0, 0.05);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

  applyForce(force: p5.Vector) {
    this.acceleration.add(force);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    this.p.noStroke();
    this.p.fill(127, this.lifespan);
    this.p.circle(this.position.x, this.position.y, 10);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
