var img1
var scr = 1;
var x1
var j
var sung

function preload() {

  sung = loadSound('sung.mp3')
  bullet = loadSound('bullet.mp3')
  fade = loadSound('fade.mp3')
  ritz = loadSound('rittz.mp3')
  lean = loadSound('lean.mp3')
}

function setup() {

  createCanvas(400, 400, WEBGL);
  sung.play();
  fft = new p5.FFT();
  sung.amp(0.4);
  bullet.amp(0.2);
  amplitude = new p5.Amplitude();
  analyzer = new p5.Amplitude();



}

function draw() {
  background(0);
  //screen set up to switch

  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2) {
    drawScreen2();
  } else if (scr == 3) {
    drawScreen3();
  } else if (scr == 4) {
    drawScreen4();
  } else if (scr == 5){
    drawScreen5();
  }
}

function drawScreen1() {
  //rinnengan pictures
  var rms = analyzer.getLevel();
  for (var j = 0; j <= 1; j++) {
    for (var z = 0; z <= 1; z++) {
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipse(rms + 5 * j, rms + 5 * j, 100);
    }
  }
}


function drawScreen2() {


  var rms = analyzer.getLevel();
  for (var i = 0; i <= 4; i++) {
    for (var z = 0; z <= 4; z++) {
      stroke(200, 100, 100)
      rotateX(frameCount * 0.086);
      rotateY(frameCount * 0.086);
      box(i, z, 250);

    }
  }
}

function drawScreen3() {
  pointLight(400, 300, 400, 200, 300, 200);
  normalMaterial(30);
  var rms = analyzer.getLevel();
  for (var i = 1; i <= 1; i++) {
    for (var z = 1; z <= 1; z++) {

      strokeWeight(1);
      noStroke();
      rotateX(frameCount * 0.005);
      rotateY(frameCount * 0.005);
      torus(rms * i * 100 + 500, rms + z * 10 + 500);
    }
  }
}
//something preventing this and draw screen 3 from-
//-working
function drawScreen4() {
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(25, 250, 150); // waveform is red
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, -400, width);
    var y = map(waveform[i], -1, 1, -200, height);
    vertex(x, y);
  }
  endShape();
  rotateX(frameCount * 0.060);
  rotateY(frameCount * 0.060);
  sphere(70);
  sphere(50);
  sphere(20);
}
function drawScreen5(){
  var rms = analyzer.getLevel();
  for (var i = 0; i <= 4; i++) {
    for (var z = 0; z <= 4; z++) {
      stroke(200, 100, 100)
      rotateX(frameCount * 0.086);
      rotateY(frameCount * 0.086);
      box(rms+i, rms+z, 250);
    }
  }
}

function mousePressed() {
  //mouse clicked makes screen change
  if (scr == 1) {
    scr = 2;
  } else if (scr == 2) {
    scr = 3;
  } else if (scr == 3) {
    scr = 4;
  } else if (scr == 4) {
    scr = 5;
  } else if (scr == 5) {
    scr = 1;
    if (mouseX < width / 2) {}
  }
}
//toggles sound
function keyPressed() {

  if (key == '1') {
    sung.play();
  }
  if (key == '2') {
    sung.stop();
    bullet.play();
  }
  if (key == '3') {
    bullet.stop();
    fade.play();
  }
  if (key == '4') {
    fade.stop();
    ritz.play();
  }
  if (key == '5') {
    ritz.stop();
    lean.play();
    if (keyCode == ENTER) {
      sung.pause();
      bullet.pause();
      fade.pause();
    }
  }
}