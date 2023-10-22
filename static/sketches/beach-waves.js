export const sketch = (_p5) => {
  const res = 8;
  let xoff = 0;
  let yoff = 2.5;
  let prevSy;
  const speedFactor = 0.5;
  let wave = [];
  let shadow = [];
  _p5.setup = function () {
    _p5.createCanvas(_p5.windowWidth, _p5.windowHeight * 0.75);
    _p5.noiseSeed(0);
    _p5.noStroke();
  };
  _p5.draw = function () {
    _p5.background('#ebfbe7');
    const sy = _p5.sin(yoff);
    generateWave(sy);
    const shadowColor = _p5.color(0, 0, 0, _p5.map(sy, -1, 1, 12, 0));
    const shadowOffset = _p5.map(sy, -1, 1, 0, _p5.height / 4);
    drawWave(shadow, shadowColor, shadowOffset);
    drawWave(wave, _p5.color(0, 113, 173));
    prevSy = sy;
    xoff += 0.1;
    yoff += _p5.map(sy, 0, 1, 0.03 * speedFactor, 0.008, true);
  };
  function generateWave(sy) {
    if (sy > -0.01 && sy < 0.01) _p5.noiseSeed(_p5.random(1000));
    wave = [];
    wave.push({
      x: _p5.width,
      y: _p5.height
    });
    wave.push({
      x: 0,
      y: _p5.height
    });

    const waveXSize = _p5.map(_p5.width, 0, 3000, _p5.width, _p5.width / 4);

    for (let x = 0; x < _p5.width + res; x += res) {
      const y = _p5.height + _p5.height / 8;
      const ny = _p5.noise((x + xoff) / waveXSize) * sy * _p5.height / 1.2 - _p5.height / 4;
      const cy = _p5.cos((x + yoff * 100) / _p5.width * 4) * _p5.height / 8;
      wave.push({
        x,
        y: y + ny + cy
      });
    }

    // at the peak set the shadow wave
    if (shadow.length === 0 && sy > prevSy) {
      shadow = [...wave];
    }
    // at the trough delete the shadow
    if (shadow.length > 0 && sy < prevSy) {
      shadow = [];
    }
  }
  function drawWave(points, col, yoffset = 0) {
    _p5.beginShape();
    for (const p of points) {
      _p5.vertex(p.x, p.y + yoffset);
    }
    _p5.fill(col);
    _p5.endShape(_p5.CLOSE);
  }
};