import p5 from 'p5'

export class Mover {
  p: p5;
  mass: number;
  radius: number;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  constructor(p: p5, x: number, y: number, mass: number) {
    this.p = p;
    this.mass = mass;
    this.radius = mass * 8;
    this.position = p.createVector(x, y);
    this.velocity = p.createVector(1, 0);
    this.acceleration = p.createVector(0, 0);
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force: p5.Vector) {
    let f = this.p.createVector();
    p5.Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  bounceEdges() {
    if (this.position.x + this.radius > this.p.width) {
      this.position.x = this.p.width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x < this.radius) {
      this.velocity.x *= -1;
      this.position.x = this.radius;
    }
    if (this.position.y + this.radius > this.p.height) {
      this.velocity.y *= -1;
      this.position.y = this.p.height - this.radius;
    } else if (this.position.y < this.radius) {
      this.velocity.y *= -1;
      this.position.y = this.radius;
    }
  }

  wrapEdges() {
    if (this.position.x - this.radius > this.p.width) {
      this.position.x = -this.radius;
    } else if (this.position.x < -this.radius) {
      this.position.x = this.p.width + this.radius;
    }
    if (this.position.y - this.radius > this.p.height) {
      this.position.y = -this.radius;
    } else if (this.position.y < -this.radius) {
      this.position.y = this.p.height + this.radius;
    }
  }


  show() {
    this.p.stroke(0);
    this.p.strokeWeight(2);
    this.p.fill(255);
    this.p.circle(this.position.x, this.position.y, this.radius * 2);
  }
}
