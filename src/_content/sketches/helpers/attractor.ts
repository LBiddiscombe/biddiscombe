import p5 from 'p5'
import type { Mover } from './mover';

export class Attractor {
  p: p5;
  position: p5.Vector;
  mass: number;

  constructor(p: p5, x: number, y: number, mass: number) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.mass = mass;
  }

  attract(mover: Mover) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.position, mover.position);
    // Distance between objects
    let distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = this.p.constrain(distance, 5, 25);

    // Calculate force magnitude
    let strength = (this.mass * mover.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.setMag(strength);
    return force;
  }

  // Method to display
  show() {
    this.p.strokeWeight(4);
    this.p.stroke(0);
    this.p.fill(128);
    this.p.circle(this.position.x, this.position.y, this.mass * 2);
  }

}