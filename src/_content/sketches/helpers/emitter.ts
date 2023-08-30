import type p5 from 'p5';
import { Particle } from './particle';

export class Emitter {
  p: p5;
  origin: p5.Vector;
  particles: Particle[];
  constructor(p: p5, x: number, y: number) {
    this.p = p;
    this.origin = p.createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.p, this.origin.x, this.origin.y));
  }

  run() {
    // Looping through backwards to delete
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].run();
      if (this.particles[i].isDead()) {
        // Remove the particle
        this.particles.splice(i, 1);
      }
    }
  }
}
