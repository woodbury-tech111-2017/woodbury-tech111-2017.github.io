function preload() {
  RunningAnimation = loadAnimation("assets/Running S_00000.png","assets/Running S_00012.png");
  JumpingAnimation = loadAnimation("assets/Jumping S_00000.png","assets/Jumping S_00008.png");
  FallingAnimation = loadAnimation("assets/Falling S_00000.png","assets/Falling S_00012.png");
  InSlidingAnimation = loadAnimation("assets/InSliding S_00000.png","assets/InSliding S_00003.png");
  SlidingAnimation = loadAnimation("assets/SlideFrame_00008.png","assets/SlideFrame_00008.png");
  RecoverAnimation = loadAnimation("assets/Recover_00000.png","assets/Recover_00007.png");
}

function setup() {
    
  //Set animation speeds
  RunningAnimation.frameDelay = 2;
  JumpingAnimation.frameDelay = 2;
  FallingAnimation.frameDelay = 2;
  InSlidingAnimation.frameDelay = 2;
  RecoverAnimation.frameDelay = 2;
  
  //Canvas and other parameters
  createCanvas(windowWidth, windowHeight - 10);
  imageMode(CENTER);
  rectMode(CORNER);
  
  //Game parameters
  frameRate(30);
  fade = 255;
  startGame();
  
  //Create groups
  grounds = new Group();
  lowGrounds = new Group();
  obstacles = new Group();
  events = new Group();
  deaths = new Group();
  
  //Grounds
  ground1 = new ground(-600,500,2100,100);
  grounds.add(ground1.groundSprite);
  ground2 = new ground(1700,500,400,600);
  grounds.add(ground2.groundSprite);
  ground3 = new ground(2300,500,400,600);
  grounds.add(ground3.groundSprite);
  ground4 = new ground(3100,500,2900,100);
  grounds.add(ground4.groundSprite);
  ground5 = new ground(5700,425,320,100);
  grounds.add(ground5.groundSprite);
  ground6 = new ground(6200,350,300,100);
  grounds.add(ground6.groundSprite);
  ground7 = new ground(6700,275,300,100);
  grounds.add(ground7.groundSprite);
  ground8 = new ground(7200,200,300,100);
  grounds.add(ground8.groundSprite);
  ground9 = new ground(8200,500,600,100);
  grounds.add(ground9.groundSprite);
  ground10 = new ground(8800,425,200,100);
  grounds.add(ground10.groundSprite);
  ground11 = new ground(9200,325,200,100);
  grounds.add(ground11.groundSprite);
  ground12 = new ground(9600,250,200,100);
  grounds.add(ground12.groundSprite);
  ground13 = new ground(10000,175,1000,275);
  grounds.add(ground13.groundSprite);
  ground14 = new ground(9400,500,1000,200);
  grounds.add(ground14.groundSprite);
  ground15 = new ground(10200,700,1000,200);
  grounds.add(ground15.groundSprite);
  ground16 = new ground(11400,625,2000,200);
  grounds.add(ground16.groundSprite);
  
  
  //LowGrounds
  lowGround1 = new lowGround(3750,400,500,100);
  lowGrounds.add(lowGround1.lowGroundSprite);
  lowGround2 = new lowGround(4750,400,300,100);
  lowGrounds.add(lowGround2.lowGroundSprite);
  lowGround3 = new lowGround(9900,400,500,100);
  lowGrounds.add(lowGround3.lowGroundSprite);
  
  //Obstacles 
  obstacle1 = new obstacle(4050,300,200,150);
  obstacles.add(obstacle1.obstacleSprite);
  obstacle2 = new obstacle(4850,300,200,150);
  obstacles.add(obstacle2.obstacleSprite);
  
  //Events
  event1 = new event(8300,400,200,100);
  events.add(event1.eventSprite);
  event2 = new event(-500,400,1700,100);
  events.add(event2.eventSprite);
  event3 = new event(3500,400,1200,100);
  events.add(event3.eventSprite);
  event4 = new event(5200,400,500,100);
  events.add(event4.eventSprite);
  event5 = new event(12000,400,2000,400);
  events.add(event5.eventSprite);
  
  
  //Death
  death1 = new death(0,601,6000,400);
  deaths.add(death1.deathSprite);
  death2 = new death(6000,500,200,400);
  deaths.add(death2.deathSprite);
  death3 = new death(6500,450,200,400);
  deaths.add(death3.deathSprite);
  death4 = new death(7000,400,200,400);
  deaths.add(death4.deathSprite);
  death5 = new death(7500,600,700,400);
  deaths.add(death5.deathSprite);
  death6 = new death(9000,600,400,400);
  deaths.add(death6.deathSprite);
  death7 = new death(11200,800,200,400);
  deaths.add(death7.deathSprite);
  
  
}

function draw() {
  
  //Debugging
  console.log(frameRate());
  
  //background
  camera.off();
  background(100,200,255);
  camera.on();
  
  //Player conditions that have to do with world interactions
  
  //if the player touches a death collision, then die
  if(myPlayer.playerSprite.overlap(deaths)) {
    myPlayer.die();
  } //if the player runs into an obstacle, stop
  else if (myPlayer.playerSprite.overlap(obstacles)) {
    myPlayer.stop();
  }  
  //if the player is not touching the ground and not jumping, then fall
  else if (!(myPlayer.playerSprite.overlap(grounds)) && myPlayer.c != "jumping") {
    myPlayer.fall();
  } else if (myPlayer.playerSprite.overlap(grounds) && myPlayer.c == "falling") {
    myPlayer.recover();
  }
  
  //Collide with mesh
  myPlayer.playerSprite.collide(grounds);
  myPlayer.playerSprite.collide(obstacles);
  
  //Background Art
  fill(150);
  stroke(150);
  rect(4050,200,850,1000);
  rect(-3000,-1000,3850,1700);
  rect(10000,275,1000,1000);
  stroke(100);
  fill(100);
  rect(800,-1000,50,1300);
  rect(4050,200,850,25);
  
  //Draw Sprites
  drawSprites();
  
  //Level Art (very primitive)
  stroke(100);
  fill(100);
    
    //Level 01
    
      //Platform 01 
      rect(-3000,600,4500,1500);
  
      //Plaform 02
      rect(1700,600,400,1000);
  
      //Plaform 03
      rect(2300,600,400,1000);
  
      //Platform 04
      rect(3100,600,2600,1000);
      rect(4050,200,50,320);
      rect(4850,200,50,320);
  
      //Platform 05
      rect(5700,500,325,700);
  
    //Level 02
      rect(6200,450,300,1000);
      rect(6700,375,300,1000);
      rect(7200,300,300,1000);
      rect(8200,600,600,1000);
      rect(8800,525,200,1000);
      rect(9200,425,200,1000);
      rect(9600,350,200,100);
      rect(10000,275,1000,250);
      rect(9400,600,1000,2000);
      rect(10200,800,1000,2000);
      rect(11400,725,2000,200);
  
  //Camera
  camera.position.x = myPlayer.playerSprite.position.x;
  camera.position.y = myPlayer.playerSprite.position.y;
  
  //Events
  if (myPlayer.playerSprite.overlap(event1.eventSprite)) {
    checkpoint = 8300;
  } else if (myPlayer.playerSprite.overlap(event2.eventSprite)) {
    z2 += 0.005;
    z2 = constrain(z2,0,0.8);
    camera.zoom = z2;
  } else if (myPlayer.playerSprite.overlap(event3.eventSprite)) {
    z3 += 0.01;
    z3 = constrain(z3,0,1.2);
    camera.zoom = z3;
  } else if (myPlayer.playerSprite.overlap(event4.eventSprite)) {
    z4 -= 0.05;
    z4 = constrain(z4,0.7,1.2);
    camera.zoom = z4;
  }  else if (myPlayer.playerSprite.overlap(event5.eventSprite)) {
    z5 += 0.05;
    z5 = constrain(z5,0.7,2);
    camera.zoom = z5;
    if (temp == 0) {
      temp = nf(millis() / 1000, 0, 2);
      yourTime = temp;
    }
    setTimeout(function() {endGame();},2000);
  }
  
  
  if(fadeIn == true) {
    fade -= 5;
  }
  if (fadeOut == true) {
    fade += 5;
  }
    camera.off();
    noStroke();
    fill(0,0,0,fade);
    rect(0,0,width,height);
    fill(255);
    textSize(50);
    textAlign(RIGHT);
  	text("Your time: " + nf(millis() / 1000, 0, 2), width - 25, 50);
    textAlign(LEFT);
    text("Up Arrow = Jump", 25, 50);
    text("Down Arrow = Slide", 25, 100);
    camera.on();
 
  if (fadeOutFinal == true) {
    camera.off();
    rectMode(CORNER);
    stroke(0,0,0,fade2);
    fill(0,0,0,fade2);
    rect(0,0,width,height);
    fade2 += 5;
    camera.on();
  }
  
  if (displayEndCard == true) {
    camera.off();
    rectMode(CENTER);
    textAlign(CENTER);
    stroke(255);
    fill(255);
    text("Your time: " + yourTime,width/2,height/2);
    text("Thank you for playing!",width/2,(height/2) + 200);
    text("By Ben Luker",width/2,(height/2) + 275);
    textSize(100);
    text("Robot Escape",width/2,(height/2)-200);
    camera.on();
  }
  
}
  
  

//Player Input
function keyPressed() {
  if (keyCode == UP_ARROW) {
    myPlayer.jump();
  } else if (keyCode == DOWN_ARROW) {
    myPlayer.enterSlide();
  } 
}