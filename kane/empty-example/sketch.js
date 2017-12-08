/* songs in order going right.
THINK - Kaleida
Flower Dance - DJ Okawari
Nightcall - Kavinsky
Winterspell - Two Steps From Hell
*/

var song; 
var analyzer;
var song2;
var song3;

var system;
var track1 = true;
var track2;
var track3;
var track4;
function preload() {
  song = loadSound('think.mp3');
  song2 = loadSound('Flowerdance.mp3');
  song3 = loadSound('nightcall.mp3');
  song4 = loadSound('winterspell.mp3');
  pixelText = loadFont('pixel.TTF');
}

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  analyze = new p5.Amplitude();
  analyzer2 = new p5.Amplitude();
  analyzer3 = new p5.Amplitude();
  analyzer.setInput(song);
  analyze.setInput(song2);
  analyzer2.setInput(song3);
  analyzer3.setInput(song4);
  // Patch the input to an volume analyzer
  system = new ParticleSystem();

}

function draw() {
  
  background(25);
  
  var rms = analyzer.getLevel();
  var lms = analyze.getLevel();
  var lck = analyzer2.getLevel();
  var lcs = analyzer3.getLevel();
  noStroke();
  fill(255, 0, 0);
  rect(500, 570, 50, 10);
  rect(100, 570, 50, 10);
  triangle(525, 560, 525, 580, 550, 570);
  triangle(75, 560, 75, 580, 50, 570);
  
  textFont(pixelText);
  textSize(17);
  fill(255);
  text("next", 400, 580);
  text("previous", 150, 580);
  
  // Get the average (root mean square) amplitude
if(track1 == true){
  noFill();
  stroke(255,0,255, 100);
  strokeWeight(2);
  var nk = constrain(mouseY, 0, 500);
  // Draw an ellipse with size based on volume
  
  //rect(100, 400, 10, 25+rms*200);
  ellipse(300, nk, 10 + rms * 200, 10 + rms * 200);
  stroke(0,255,255, 150);
  strokeWeight(3);
  ellipse(300, nk, 15 + rms * 100, 15 + rms * 100);
  stroke(255,150);
  strokeWeight(2);
  rect(0, nk+100, 20+rms*350, 10);
  rect(0, nk+90, 20+rms*550, 10);
  rect(0, nk+80, 20+rms*450, 10);
  rect(600, nk+100, 20+rms*350, 10);
  rect(600, nk+90, 20+rms*450, 10);
  rect(600, nk+80, 20+rms*550, 10);
  for (var i = 100; i<=500; i = i + 50) {
    stroke(255, 0, 255, 0+rms*300);
    strokeWeight(5);
    line(i, 200 - rms * 100, i, 400 + rms * 100);
  }
  system.addParticle();
  system.runs();
}else if(track2 == true) {
  
  stroke(46, 173, 0);
  strokeWeight(3);
  line(100, 400, 200, 400-lms*100);
  line(400, 400-lms*125, 500, 400);
  stroke(255, 231, 15);
  line(500, 400-lms*200, 500, 500);
  line(100, 400-lms*200, 100, 500);
  line(200, 500, 200, 500+lms*200);
  line(400, 500, 400, 500+lms*200);
  fill(255, 231, 15, mouseY-200);
  noStroke();
  rect(500, 500, 100, 50+lms*200);
  rect(100, 500, 100, 50+lms*200);
  triangle(300, 500-lms*200, 200, 500, 400, 500);
  system.addParticleTrack2();
  system.runs();
  
}else if(track3 == true) {
  noFill();
  stroke(186, 0, 62);
  strokeWeight(5);
  rect(300, 300, 200+lck*500, 50);
  strokeWeight(1);
  stroke(2, 0, 173);
  rect(300, 300, 150+lck*500, 40);
  strokeWeight(1);
  stroke(186, 0, 62);
  var ab = constrain(mouseY, 0, 500);
  rect(500, ab, 50, 200+lck*500);
  rect(100, ab, 50, 200+lck*500);
  fill(186, 0, 62, mouseY-300);
  rect(500, 500, 200+lck*100, 100);
  rect(100, 500, 200+lck*100, 100);
  for (var l = 100; l<=500; l = l + 100) {
    fill(2, 0, 173, 255-mouseY);
    stroke(2, 0, 173);
    ellipse(l,100+lck*200,70,70);
  }
  system.addParticleTrack3();
  system.runs();

}else if(track4 == true) {
  
  stroke(255, 150+lcs*100)
  var mm = constrain(mouseY, 0, 300);
  var mb = constrain(mouseY, 0, 200);
  var mc = constrain(mouseY, 100, 500);
  //triangle lines
  line(400+lcs*300, 500, 400, 500-mm);
  line(200-lcs*300, 500, 200, 500-mm);
  //second layer
  line(500-lcs*300, 300, 500, 300-mb);
  line(100+lcs*300, 300, 100, 300-mb);
  //horizontal lines
  line(400, mc+lcs*100, 500, mc);
  line(200, mc+lcs*100, 100, mc);
  //horizontal middle
  //stroke(255, 0+mouseY)
  line(400+lcs*100, 300, 500-lcs*300, 300);
  line(200-lcs*100, 300, 100+lcs*300, 300);
  noFill();
  stroke(255, 0+mouseY);
  //second layer
  ellipse(500, 100, 10+lcs*100, 10+lcs*100);
  ellipse(100, 100, 10+lcs*100, 10+lcs*100);
  //first layer
  ellipse(400, 200, 10+lcs*200, 10+lcs*200);
  ellipse(200, 200, 10+lcs*200, 10+lcs*200);
  //horrizontal layer
  ellipse(500, 500, 10+lcs*300, 10+lcs*300);
  ellipse(100, 500, 10+lcs*300, 10+lcs*300);
  
  fill(255, 180);
  noStroke();
  triangle(300, 400-lcs*300, 400+lcs*100, 500, 200-lcs*100, 500);
  system.addParticleTrack4v1();
  system.runs();
  }
  
}

function Particle(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rmp = analyzer.getLevel();
  this.acceleration = createVector(0, .05);
  this.velocity = createVector(random(-1 , 0), random(-1, 1 + this.rmp*75));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 250;

  this.display = function() {
    stroke(255,0,255, this.lifespan);
    strokeWeight(2);
    
    fill(0,255,255, this.lifespan);
    ellipse(this.position.x, this.position.y, 10+this.rmp*100, 10+this.rmp*100);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function Particle2(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rmp = analyzer.getLevel();
  this.acceleration = createVector(0, .05);
  this.velocity = createVector(random(-1 , 0), random(-1, 1 + this.rmp*75));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 250;

  this.display = function() {
    stroke(0,255,255, this.lifespan);
    strokeWeight(2);
    fill(255,0,255, this.lifespan);
    ellipse(this.position.x, this.position.y, 10+this.rmp*100, 10+this.rmp*100);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function ParticleTrack2(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rmp = analyze.getLevel();
  this.acceleration = createVector(0, .001);
  this.velocity = createVector(random(-3 , 0), random(1, 1 - this.rmp*50));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 253;

  this.display = function() {
    stroke(this.lifespan,205,80, this.lifespan);
    strokeWeight(2);
    fill(this.lifespan,151,39, this.lifespan);
    ellipse(this.position.x, this.position.y, 1+this.rmp*100, 1+this.rmp*100);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function ParticleTrack2v3(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rmp = analyze.getLevel();
  this.acceleration = createVector(0, .001);
  this.velocity = createVector(random(0 , 3), random(1, 1 - this.rmp*50));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 253;

  this.display = function() {
    stroke(this.lifespan,151,39, this.lifespan);
    strokeWeight(2);
    fill(this.lifespan,205,80, this.lifespan);//this.lifespan,151,39, this.lifespan
    ellipse(this.position.x, this.position.y, 1+this.rmp*100, 1+this.rmp*100);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function ParticleTrack3(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rar = analyzer2.getLevel();
  this.acceleration = createVector(0, .01);
  this.velocity = createVector(random(-1 , 1), random(-1, 1 - this.rar*75));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 180;

  this.display = function() {
    stroke(2, 0, 173, this.lifespan);
    strokeWeight(2);
    fill(2, 100, 173, this.lifespan);//this.lifespan,151,39, this.lifespan
    rect(this.position.x, this.position.y, 1+this.rar*150, 1+this.rar*150);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function ParticleTrack4v1(_x, _y) {
  //default values, (0, .05), (random(-1, 1), random(-1, 0)),(250)
  this.rek = analyzer3.getLevel();
  this.acceleration = createVector(0, .005+this.rek);
  this.velocity = createVector(random(-1 , 1), random(-1, 1 - this.rmp*50));
  this.positionX = _x;
  this.positionY = _y;
  this.position = createVector(_x,_y);
  this.lifespan = 250;

  this.display = function() {
    stroke(255, this.lifespan);
    //strokeWeight(2);
    fill(255, this.lifespan);//this.lifespan,151,39, this.lifespan
    ellipse(this.position.x, this.position.y, 0.5, 0.5);

  }
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
    this.isDead = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;

    }
  }

}
function ParticleSystem() {
  this.particles = [];
  this.addParticle = function() {
    var lol = new Particle(200, -100);
    var lmao = new Particle2(400, -100);
    this.particles.push(new Particle(200, 5));
    this.particles.push(new Particle2(400, 5));
    lol.display();
    lol.update();
    lmao.display();
    lmao.update();

  }
  this.addParticleTrack2 = function() {
    var kek = new ParticleTrack2(300, 300);
    var kek2 = new ParticleTrack2v3(300, 300);
    this.particles.push(new ParticleTrack2(300,300));
    this.particles.push(new ParticleTrack2v3(300,300))
    kek.display();
    kek.update();
    kek2.display();
    kek2.update();
  }
  this.addParticleTrack3 = function() {
    var kek3 = new ParticleTrack3(mouseX, 550);
    
    this.particles.push(new ParticleTrack3(mouseX,550));
    
    kek3.display();
    kek3.update();
    
  }
  this.addParticleTrack4v1 = function() {
    var kek4 = new ParticleTrack4v1(100, -50);
    var kek5 = new ParticleTrack4v1(500, -50);
    var kek6 = new ParticleTrack4v1(300, -50);
    this.particles.push(new ParticleTrack4v1(100,-50));
    this.particles.push(new ParticleTrack4v1(500, -50));
    this.particles.push(new ParticleTrack4v1(300, -50));
    
    kek4.display();
    kek4.update();
    kek5.display();
    kek5.update();
    kek6.display();
    kek6.update();
    
  }
  this.runs = function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.update();
      p.display();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
function keyPressed() {
  if(keyCode === LEFT_ARROW){
    if(song.isPlaying() == true){
      track2 = false;
      track3 = false;
      track1 = false;
      track4 = true;
      song2.stop();
      song4.loop();
      song.stop();
      song3.stop();
    }else if(song2.isPlaying() == true) {
      track2 = false;
      track3 = false;
      track1 = true;
      track4 = false;
      song2.stop();
      song.loop();
      song3.stop();
      song4.stop();
    }else if(song3.isPlaying() == true) {
      track2 = true;
      track3 = false;
      track1 = false;
      track4 = false;
      song3.stop();
      song2.loop();
      song.stop();
      song4.stop();
    }else if(song4.isPlaying() == true) {
      track2 = false;
      track3 = true;
      track1 = false;
      track4 = false;
      song3.loop();
      song4.stop();
      song.stop();
      song2.stop();
    
  }
  }
  if(keyCode === RIGHT_ARROW){
    if(song.isPlaying() == true){
      track2 = true;
      track3 = false;
      track1 = false;
      song2.loop();
      song3.stop();
      song.stop();
      song4.stop();
    }else if(song2.isPlaying() == true) {
      track2 = false;
      track3 = true;
      track1 = false;
      song2.stop();
      song.stop();
      song4.stop();
      song3.loop();
    }else if(song3.isPlaying() == true) {
      track2 = false;
      track1 = false;
      track3 = false;
      track4 = true;
      song.stop();
      song2.stop();
      song3.stop();
      song4.loop();
    }else if (song4.isPlaying() == true) {
      track2 = false;
      track1 = true;
      track3 = false;
      track4 = false;  
      song.loop();
      song4.stop();
      song2.stop();
      song3.stop();
      
    }
  }
}
