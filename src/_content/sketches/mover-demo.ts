import type { Sketch } from 'p5-svelte';
import { Mover } from './helpers/mover';
import { Attractor } from './helpers/attractor';
import { Emitter } from './helpers/emitter';

export const sketch: Sketch = (p5) => {
  let mover: Mover;
  let attractor: Attractor;
  let emitter: Emitter;

  p5.setup = function () {
    p5.createCanvas(408, 408);
    mover = new Mover(p5, p5.width / 2, p5.height / 4, 1);
    attractor = new Attractor(p5, p5.width / 2, p5.height / 2, 20);
    emitter = new Emitter(p5, p5.width / 2, 50);
  };

  p5.draw = function () {
    p5.background(0);

    let force = attractor.attract(mover);
    mover.applyForce(force);

    mover.update();

    mover.show()
    attractor.show()

    emitter.addParticle();
    emitter.run();

  }
}