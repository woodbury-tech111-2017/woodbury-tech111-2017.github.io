var scr = 1;

function preload() {
  song = loadSound('Fly_Away.mp3');
  song2 = loadSound('Sound2.mp3');
  bgm = loadSound('Wind2.mp3');
  song3 = loadSound('Shelter2.mp3');
  song4 = loadSound('Shelter3.mp3');
  bgm2 = loadSound('Fairy.mp3');
  bgm3 = loadSound('Water.mp3');
  song5 = loadSound('Song4.mp3');

}

function setup() {
  createCanvas(600, 600);
  song.play();
  song2.play();
  bgm.play();
  bgm2.play();
  fft = new p5.FFT();
  song.amp(0.09);
  song2.amp(0.4);
  amplitude = new p5.Amplitude();
  analyzer = new p5.Amplitude();
  bgm3.play();
  song5.play();
  song5.amp(0.4);
  song4.amp(0.9);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  //head
  //ellipse(303,300,40,35);
  fill(109, 255, 138);
  noStroke();
  rect(mouseX + 34, mouseY - 16, 25, 19);
  //eye
  fill(0);
  ellipse(mouseX + 50, mouseY - 9, 6, 6);
  //body
  fill(19, 196, 54);
  arc(mouseX, mouseY, 90, 74, 180, 360, CHORD);
  fill(16, 234, 60);
  arc(mouseX, mouseY, 90, 50, 0, 180, CHORD);
  //tailes
  fill(255);
  triangle(mouseX - 16, mouseY, mouseX - 60, mouseY - 75, mouseX - 60, mouseY - 45);
  triangle(mouseX + 10, mouseY, mouseX - 35, mouseY - 110, mouseX - 42, mouseY - 80);
  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2) {
    drawScreen2();
  } else if (scr == 3) {
    drawScreen3();
  } else if (scr == 4) {
    drawScreen4();
  } else if (scr == 5) {
    drawScreen5();
  } else if (scr == 6) {
    drawScreen6();
  } else if (scr == 7) {
    drawScreen7();
  } else if (scr == 8) {
    drawScreen8();
  }

}

function drawScreen1() {
  song5.stop();
  bgm2.stop();
  bgm3.stop();
  song.stop();
  song2.stop();
  //Wind1.loop();  
  background(98, 201, 229);
  angleMode(DEGREES);
  //head
  //ellipse(303,300,40,35);
  fill(109, 255, 138);
  noStroke();
  rect(238 - 30, 290 - 50, 25, 19);
  //eye
  fill(0);
  ellipse(257 - 30, 300 - 50, 6, 6);
  //body
  fill(19, 196, 54);
  arc(200 - 30, 305 - 50, 90, 75, 180, 360, CHORD);
  fill(16, 234, 60);
  arc(200 - 30, 306 - 50, 92, 40, 0, 180, CHORD);
  //tailes
  fill(59, 198, 89);
  rect(100, 278, 150, 320);
  fill(68, 229, 103);
  rect(50, 300, 50, 310);
  rect(250, 290, 50, 310);

  // noStroke();
  // fill(255);
  // rect(110, 290, 130, 40);

  fill(72, 242, 109);
  rect(5, 305, 47, 290);
  rect(300, 300, 210, 300);

  fill(0);
  textSize(20);
  text("Click Here", 130, 314);

}

function drawScreen2() {
  bgm.stop();
  background(150);
  textSize(40);
  text("I want to fly", 180, 300);


}

function drawScreen3() {
  background(0);
  textSize(40);
  text("I will help you", 180, 300);
  fill(255, 198, 107);
  noStroke();
  ellipse(300, 160, 160, 160);

}

function drawScreen4() {
  var spectrum = fft.analyze();
  var rms = analyzer.getLevel();

  fill(255, 198, 107);
  noStroke();
  ellipse(200, mouseY - 120, 150 + rms * 190, 150 + rms * 190);
  fill(0, random(0, 255), 255);
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height * 0.9 + map(spectrum[i], 0, mouseY, height, 0);
    rect(x * 1.5, height, width / spectrum.length, h)
    //color change by pressing key buttons. - add 

  }
}

function drawScreen5() {
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(0, random(0, 255), random(0, 255));
  //stroke(147, 255, 238);
  strokeWeight(1);
  for (var k = 0; k < waveform.length; k++) {
    var ㅇ = map(k, 0, waveform.length, 0, width);
    var ㄷ = map(waveform[k], -1, 1, 0, mouseY + 100);
    vertex(ㅇ, ㄷ);
  }
  endShape();

  //   function drawScreen2() {
  //     var rms = analzyer.getLevel();

  //   }
}

// function drawScreen6() {
// background(104);
// textSize(40);
// text("Where are you, Sun?", 180,300);
// }

function drawScreen6() {
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(random(mouseX - 50), random(0, 255), random(mouseX - 50));
  //stroke(147, 255, 238);
  strokeWeight(1);
  for (var k = 0; k < waveform.length; k++) {
    var ㅇ = map(k, 0, waveform.length, 0, width);
    var ㄷ = map(waveform[k], -1, 1, 0, height);
    vertex(ㅇ, ㄷ);
  }
  endShape();

  var rms = analyzer.getLevel();
  for (var i = 0; i <= 16; i++) {
    for (var z = 0; z <= 16; z++) {
      noStroke();
      fill(random(0, 255), 20, random(30, 255));
      ellipse(i * 45 + 35, z * 41 + 35, 20 * rms, 20 * rms);
    }
  }



}

function drawScreen7() {
  background(0);
  var rms = analyzer.getLevel();
  fill(0);
  stroke(random(0, 255), 0, 0);
  ellipse(200, 200, 160 + rms * 220, 160 + rms * 220);
  stroke(random(0, 255), 0, 0);
  line(120 - rms * 100, 200, 280 + rms * 100, 200);
  line(200, 120 - rms * 100, 200, 279 + rms * 100);

  for (var p = 0; p <= 16; p++) {
    for (var l = 0; l <= 16; l++) {
      noStroke();
      fill(255);
      ellipse(p * 45 + 35, l * 41 + 35, 20 * rms, 20 * rms);
    }
  }
  angleMode(DEGREES);
  //head
  //ellipse(303,300,40,35);
  fill(109, 255, 138);
  noStroke();
  rect(mouseX + 34, mouseY - 16, 25, 19);
  //eye
  fill(0);
  ellipse(mouseX + 50, mouseY - 9, 6, 6);
  //body
  fill(19, 196, 54);
  arc(mouseX, mouseY, 90, 74, 180, 360, CHORD);
  fill(16, 234, 60);
  arc(mouseX, mouseY, 90, 50, 0, 180, CHORD);
  //tailes
  fill(255);
  triangle(mouseX - 16, mouseY, mouseX - 60, mouseY - 75, mouseX - 60, mouseY - 45);
  triangle(mouseX + 10, mouseY, mouseX - 35, mouseY - 110, mouseX - 42, mouseY - 80);

  var spectrum = fft.analyze();



  fill(mouseX, 0, random(0, 255));
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height * 0.9 + map(spectrum[i], 0, mouseY, height, 0);
    rect(x * 1.5, height, width / spectrum.length, h)
  }



}

function drawScreen8() {
  background(0);

  var rms = analyzer.getLevel();
  for (var i = 0; i <= 16; i++) {
    for (var z = 0; z <= 16; z++) {
      noStroke();
      fill(random(0, 255), 20, mouseY);
      ellipse(i * 45 + 35, z * 41 + 35, 29 * rms, 29 * rms);
    }
  }
  angleMode(DEGREES);
  //head
  //ellipse(303,300,40,35);
  fill(109, 255, 138);
  noStroke();
  rect(mouseX + 34, mouseY - 16, 25, 19);
  //eye
  fill(0);
  ellipse(mouseX + 50, mouseY - 9, 6, 6);
  //body
  fill(19, 196, 54);
  arc(mouseX, mouseY, 90, 74, 180, 360, CHORD);
  fill(16, 234, 60);
  arc(mouseX, mouseY, 90, 50, 0, 180, CHORD);
  //tailes
  fill(255);
  triangle(mouseX - 16, mouseY, mouseX - 60, mouseY - 75, mouseX - 60, mouseY - 45);
  triangle(mouseX + 10, mouseY, mouseX - 35, mouseY - 110, mouseX - 42, mouseY - 80);

  fill(0, random(20, 180), mouseX);
  noStroke();

  var spectrum = fft.analyze();

  for (var k = 0; k < spectrum.length; k++) {
    var x = map(k, 0, spectrum.length, 0, width);
    var h = -height * 0.9 + map(spectrum[k], 0, mouseY, height, 0);
    rect(x * 1.5, height, width / spectrum.length, h)
  }
}

function mousePressed() {
  if (scr == 1) {
    if (mouseX >= 110 && mouseX <= 240 && mouseY >= 290 && mouseY <= 330) {
      scr = 2;
    }
  } else if (scr == 2) {
    scr = 3;
  } else if (scr == 3) {
    scr = 4;
  } else if (scr == 4) {
    scr = 5;
  } else if (scr == 5) {
    scr = 6;
  } else if (scr == 6) {
    scr = 7;
  } else if (scr == 7) {
    scr = 8;
  }
  if (scr == 3) {
    bgm2.play();
  }
  if (scr == 2) {
    bgm3.play();
  }
  // if (scr ==4){
  //   song5.play();
  // }
}

function keyPressed() {
  if (keyCode == ENTER) {
    song.stop();
    song2.stop();
    bgm.stop();
    song5.stop();
    song4.stop();
    song3.stop();
  }
  if (key == 'Q') {
    song.play();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
  }
  if (key == 'W') {
    song.stop();
    song2.play();
    song3.stop();
    song4.stop();
    song5.stop();
  }
  if (key == 'E') {
    song.stop();
    song2.stop();
    song3.play();
    song5.stop();
    song4.stop();
  }
  if (key == 'R') {
    song.stop();
    song2.stop();
    song4.play();
    song5.stop();
    song3.stop();
  }
  if (key == 'A') {
    song.stop();
    song2.stop();
    song5.play();
    song3.stop();
    song4.stop();
  }
  if (key == '1') {
    scr = 4;
  }
  if (key == '2') {
    scr = 5;
  }
  if (key == '3') {
    scr = 6;
  }
  if (key == '4') {
    scr = 7;
  }
  if (key == '5') {
    scr = 8;
  }
}