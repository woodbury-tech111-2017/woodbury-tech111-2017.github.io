function player(inX,inY,inC) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.c;
  
  //Create Sprite
  this.playerSprite = createSprite(this.x,this.y)
  this.playerSprite.setCollider("rectangle",0,50,200,200);
//  this.playerSprite.debug = true;

  this.playerSprite.velocity.y = 10;

  //Animations
  this.playerSprite.addAnimation("RunAnim", RunningAnimation);
  this.playerSprite.addAnimation("JumpAnim", JumpingAnimation);
  this.playerSprite.addAnimation("FallAnim", FallingAnimation);
  this.playerSprite.addAnimation("InSlideAnim", InSlidingAnimation);
  this.playerSprite.addAnimation("SlideAnim", SlidingAnimation);
  this.playerSprite.addAnimation("RecoverAnim", RecoverAnimation);
  
  //Change the condition and set animations and speed
  this.changeCondition = function(newC){
    if (newC != this.c) {
      this.c = newC;
      if (this.c == "standing") {
        this.playerSprite.velocity.x = 0;
        this.playerSprite.shapeColor = color(255,0,0);
        this.playerSprite.setCollider("rectangle",0,0,100,100);
      }else if (this.c == "running") {
        this.playerSprite.velocity.x = 15;
        this.playerSprite.setCollider("rectangle",0,0,100,100);
        this.playerSprite.changeAnimation("RunAnim");
      }else if (this.c == "inSliding") {
        this.playerSprite.velocity.x = 12;
        this.playerSprite.setCollider("rectangle",0,37.5,100,25);
        this.playerSprite.changeAnimation("InSlideAnim");
      }else if (this.c == "sliding") {
        this.playerSprite.velocity.x = 10;
        this.playerSprite.setCollider("rectangle",0,37.5,100,25);
        this.playerSprite.changeAnimation("SlideAnim");
      }else if (this.c == "sliding2") {
        this.playerSprite.velocity.x = 10;
        this.playerSprite.changeAnimation("SlideAnim");
        this.playerSprite.setCollider("rectangle",0,37.5,100,25);
      }else if (this.c == "jumping") {
        this.playerSprite.velocity.x = 15;
        this.playerSprite.velocity.y = -5;
        this.playerSprite.changeAnimation("JumpAnim");
        this.playerSprite.setCollider("rectangle",0,0,100,100);
      }else if (this.c == "falling") {
        this.playerSprite.velocity.x = 12;
        this.playerSprite.velocity.y = 15;
        this.playerSprite.changeAnimation("FallAnim");
        this.playerSprite.setCollider("rectangle",0,0,100,100);
      }else if (this.c == "recovering") {
        this.playerSprite.velocity.x = 2;
        this.playerSprite.setCollider("rectangle",0,0,100,100);
        this.playerSprite.changeAnimation("RecoverAnim");
      }else if (this.c == "stopping") {
        this.playerSprite.velocity.x = 2;
        this.playerSprite.setCollider("rectangle",0,0,100,100);
      } else if (this.c == "dying") {
        this.playerSprite.velocity.x = 2;
        this.playerSprite.changeAnimation("FallAnim");
        this.playerSprite.setCollider("rectangle",0,0,100,100);
      }
    }
  }

  //Set the initial condition (I have to place it after the changeCondition function)
  this.changeCondition(inC);
  
  //This function overrides the velocity of the player to jump or do other things.
  this.changeVelocity = function(velX,velY) {
    this.playerSprite.velocity.x = velX;
    this.playerSprite.velocity.y = velY;
  }
  
  this.jump = function () {
    if (this.c == "running" || this.c == "stopping") {
      JumpingAnimation.rewind();
      this.changeCondition("jumping");
      var _this = this;
      setTimeout(function() {_this.fall();},800);
    }
  }
  
  this.enterSlide = function () {
    if (this.c == "running" || this.c == "stopping") {
      InSlidingAnimation.rewind();
      this.changeCondition("inSliding");
      var _this = this;
      setTimeout(function() {_this.slide();},150);
    }
  }
  
  this.slide = function () {
    if (this.c == "inSliding" || this.c == "sliding2") {
      this.changeCondition("sliding");
      var _this = this;
      if (this.playerSprite.overlap(lowGrounds)) {
      setTimeout(function() {_this.slide2();},500);
      } else {
      setTimeout(function() {_this.recover();},500);
      }
    }
  }
    
  this.slide2 = function () {
    if (this.c == "inSliding" || this.c == "sliding") {
      this.changeCondition("sliding2");
      var _this = this;
      if (this.playerSprite.overlap(lowGrounds)) {
      setTimeout(function() {_this.slide();},500);
      } else {
      setTimeout(function() {_this.recover();},500);
      }
    }
  }
   
  this.fall = function () {
    this.changeCondition("falling");
  }
  
  this.recover = function () {
    RecoverAnimation.rewind();
    this.changeCondition("recovering");
    var _this = this;
    setTimeout(function() {_this.run();},300);
  }
  
  this.run = function() {
    this.changeCondition("running");
  }
  
  this.stop = function() {
    this.changeCondition("stopping");
  }
  
  this.die = function() {
    this.changeCondition("dying");
    fade = 0;
    fadeIn = false;
    fadeOut = true;
    var _this = this;
    setTimeout(function() {startGame();},1000);
  }
  
}

function ground(inX,inY,inSizeX,inSizeY) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.sizeX = inSizeX;
  this.sizeY = inSizeY;
  
  //Create Sprites
  this.groundSprite = createSprite(this.x,this.y);
  this.groundSprite.shapeColor = color(0,0,0,0);
  this.groundSprite.setCollider("rectangle",this.sizeX/2,this.sizeY/2,this.sizeX,this.sizeY);
//  this.groundSprite.debug = true;
  
  //Display some visuals for debugging
  this.display = function(){
    noStroke();
    fill(0,0,255,100);
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }
}

function lowGround(inX,inY,inSizeX,inSizeY) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.sizeX = inSizeX;
  this.sizeY = inSizeY;
  
  //Create Sprites
  this.lowGroundSprite = createSprite(this.x,this.y);
  this.lowGroundSprite.shapeColor = color(0,0,0,0);
  this.lowGroundSprite.setCollider("rectangle",this.sizeX/2,this.sizeY/2,this.sizeX,this.sizeY);
//  this.lowGroundSprite.debug = true;
  
  //Display some visuals for debugging
  this.display = function(){
    noStroke();
    fill(0,200,100,100);
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }
}

function obstacle(inX,inY,inSizeX,inSizeY) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.sizeX = inSizeX;
  this.sizeY = inSizeY;
  
  //Create Sprites
  this.obstacleSprite = createSprite(this.x,this.y);
  this.obstacleSprite.shapeColor = color(0,0,0,0);
  this.obstacleSprite.setCollider("rectangle",this.sizeX/2,this.sizeY/2,this.sizeX,this.sizeY);
//  this.obstacleSprite.debug = true;
  
  //Display some visuals for debugging
  this.display = function(){
    noStroke();
    fill(200,200,0,100);
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }
}

function event(inX,inY,inSizeX,inSizeY) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.sizeX = inSizeX;
  this.sizeY = inSizeY;
  
  //Create Sprites
  this.eventSprite = createSprite(this.x,this.y);
  this.eventSprite.shapeColor = color(0,0,0,0);
  this.eventSprite.setCollider("rectangle",this.sizeX/2,this.sizeY/2,this.sizeX,this.sizeY);
//  this.eventSprite.debug = true;
  
  //Display some visuals for debugging
  this.display = function(){
    noStroke();
    fill(0,200,0,100);
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }
}


function death(inX,inY,inSizeX,inSizeY) {
  
  //Take in values and assign them
  this.x = inX;
  this.y = inY;
  this.sizeX = inSizeX;
  this.sizeY = inSizeY;
  
  //Create Sprites
  this.deathSprite = createSprite(this.x,this.y);
  this.deathSprite.shapeColor = color(0,0,0,0);
  this.deathSprite.setCollider("rectangle",this.sizeX/2,this.sizeY/2,this.sizeX,this.sizeY);
//  this.deathSprite.debug = true;
  
  //Display some visuals for debugging
  this.display = function(){
    noStroke();
    fill(255,0,0,100);
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }
}

function startGame() {
  if (myPlayer == undefined) {
    myPlayer = new player(checkpoint,500,"running");
    fadeOut = false;
    fade = 255;
    gameStart = true;
    z2 = 0.3;
    z3 = 0.8;
    z4 = 1.2;
    z5 = 0.8;
  } else {
    myPlayer.playerSprite.remove();
    myPlayer = new player(checkpoint,500,"running");
    fadeOut = false;
    fade = 255;
    fadeIn = true;
    z2 = 0.3;
    z3 = 0.8;
    z4 = 1.2;
    z5 = 0.8;
  }
}

function endGame() {
  fadeOutFinal = true;
  setTimeout(function() {displayEnd();},500);
}

function displayEnd() {
  displayEndCard = true;
}
