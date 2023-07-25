let t = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  translate(width / 2, height / 2);
}

function draw() {
  background(0);
  noStroke();
  drawingContext.depthFunc(519);
  drawingContext.blendFunc(770, 1);
  rotateX((t += 0.004));
  for (let i = 350; i >= 0; i--) {
    const n = i / 350;
    push();
    let a = (i % 9) * t;
    rotateX(a);
    rotate(a);
    translate(99, 99, 99);
    fill((i % 9) * 28, 99, 400, 8 * n);
    box((x = (1 - n) ** 9 * width), width, x);
    pop();
  }
}
