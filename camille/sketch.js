var anim;
var character;
var npcPurple;
var npcBlue;
var npcGreen;
var npcWhite;
var npcYellow;
var npcRed;
var objGray;
var objBrown;
var speech;
var music;
var left = true;
var x = 2000;
var y = 2000;
var sceneWidth = 4000;
var sceneHeight = 4000;

function preload() {
  anim1 = loadAnimation('Tangerine.png');
  anim2 = loadAnimation('Tangerine Walking A.png', 'Tangerine Walking B.png');
  anim3 = loadAnimation('Tangerine2.png');
  anim4 = loadAnimation('Tangerine Walking Right A.png', 'Tangerine Walking Right B.png');
  anim5 = loadAnimation('Trust Issues.png');
  anim6 = loadAnimation('Trust Issues Talking.png', 'Trust Issues.png');
  anim7 = loadAnimation('Insecurities.png');
  anim8 = loadAnimation('Insecurities Talking.png', 'Insecurities.png');
  anim9 = loadAnimation('Self Esteem.png');
  anim10 = loadAnimation('Self Esteem Talking.png','Self Esteem.png');
  anim11 = loadAnimation('Affection.png');
  anim12 = loadAnimation('Affection Talking.png', 'Affection.png');
  anim13 = loadAnimation('Logic.png');
  anim14 = loadAnimation('Logic Talking.png','Logic.png');
  
  bg = loadImage('Background.png');
  border = loadImage('Border.png');
  icon = loadImage('Speech Icon.png');
  grave = loadImage('Gravestone.png');
  sign = loadImage('Sign.png');
  car = loadImage('Life Driver.png');
  
  speech = loadStrings('dialog.txt');
  
  music = loadSound("Tangerine's Theme Slow.ogg");
}

function setup() {
  createCanvas(1280, 720);
  
  music.loop();
  
  anim2.frameDelay = 7;
  anim4.frameDelay = 7;
  anim6.frameDelay = 7;
  anim8.frameDelay = 7;
  anim10.frameDelay = 7;
  anim12.frameDelay = 7;
  anim14.frameDelay = 7;
  
  npcPurple = createSprite(1125, 1200);
  npcPurple.addAnimation("standP", anim5);
  npcPurple.addAnimation("talkP", anim6);
  npcPurple.setCollider("rectangle", -3, -15, 115, 75);
  
  npcGreen = createSprite(2125, 1875);
  npcGreen.addAnimation("standG", anim9);
  npcGreen.addAnimation("talkG", anim10);
  npcGreen.setCollider("rectangle", 5, 0, 115, 45);
  
  npcYellow = createSprite(2775, 2375);
  npcYellow.addAnimation("standY", anim13);
  npcYellow.addAnimation("talkY", anim14);
  npcYellow.setCollider("rectangle", 0, -10, 100, 75);
  
  npcRed = createSprite(3700, 225);
  npcRed.addImage(car);
  npcRed.setCollider("rectangle", 0, -10, 300, 125);
  
  objGray = createSprite(300, 3700);
  objGray.addImage(grave);
  objGray.setCollider("rectangle", 0, 0, 90, 20);
  
  objBrown = createSprite(3100, 3400);
  objBrown.addImage(sign);
  objBrown.setCollider("rectangle", 0, 0, 75, 20);
  
  character = createSprite(2000, 2000);
  character.addAnimation("stand1", anim1);
  character.addAnimation("walk1", anim2);
  character.addAnimation("stand2", anim3);
  character.addAnimation("walk2", anim4);
  character.setCollider("rectangle", 0, 25, 75, 75);
  
  npcBlue = createSprite(2475, 1175);
  npcBlue.addAnimation("standB", anim7);
  npcBlue.addAnimation("talkB", anim8);
  npcBlue.setCollider("rectangle", 0, 85, 75, 15);
  
  npcWhite = createSprite(1200, 2700);
  npcWhite.addAnimation("standW", anim11);
  npcWhite.addAnimation("talkW", anim12);
  npcWhite.setCollider("rectangle", 0, 85, 75, 15);
}

function overCircle(x, y, radius) {
	if (dist(x, y, character.position.x, character.position.y) < radius) {
	  return true;}
	else {
	  return false;}}

function draw() { 
  background(0);
  
  camera.position.x = character.position.x;
  camera.position.y = character.position.y;
  
  image(bg, 0, 0, 4000, 4000);
  
  if (left == true) {
    character.changeAnimation('stand1');}
  else if (left == false) {
    character.changeAnimation('stand2');}
  
  if (keyIsDown(87)) {
    y = y - 3;
    if (left == true) {
    	character.changeAnimation('walk1');}
  	else if (left == false) {
    	character.changeAnimation('walk2');}}
  if (keyIsDown(65)) {
    x = x - 3;
    left = true;
    character.changeAnimation('walk1');}
  if (keyIsDown(83)) {
    y = y + 3;
    if (left == true) {
    	character.changeAnimation('walk1');}
  	else if (left == false) {
    	character.changeAnimation('walk2');}}
  if (keyIsDown(68)) {
    x = x + 3;
    left = false;
    character.changeAnimation('walk2');}
  
  character.position.x = x;
  character.position.y = y;
  
  character.collide(npcPurple);
  character.collide(npcBlue);
  character.collide(npcGreen);
  character.collide(npcWhite);
  character.collide(npcYellow);
  character.collide(npcRed);
  character.collide(objGray);
  character.collide(objBrown);
  
  if(character.position.x < 70)
    character.position.x = 70;
  if(character.position.y < 70)
    character.position.y = 70;
  if(character.position.x > sceneWidth - 70)
    character.position.x = sceneWidth - 70;
  if(character.position.y > sceneHeight - 70)
    character.position.y = sceneHeight - 70;
  
  x = character.position.x;
  y = character.position.y;
  
  noStroke();
  fill(0, 77);
  ellipse(character.position.x, character.position.y + 60, 75, 25);
  ellipse(npcPurple.position.x, npcPurple.position.y + 60, 100, 25);
  ellipse(npcBlue.position.x, npcBlue.position.y + 100, 75, 25);
  ellipse(npcGreen.position.x, npcGreen.position.y + 60, 75, 25);
  ellipse(npcWhite.position.x, npcWhite.position.y + 100, 75, 25);
  ellipse(npcYellow.position.x, npcYellow.position.y + 60, 75, 25);
  ellipse(npcRed.position.x, npcRed.position.y + 85, 275, 45);
  ellipse(objGray.position.x, objGray.position.y + 60, 75, 25);
  ellipse(objBrown.position.x, objBrown.position.y + 60, 75, 25);
  
  drawSprites();
  
  image(border, 0, 0);
  
  angleMode(DEGREES);
  
  push();
  translate(2000, 2000);
  rotate(180);
  image(border, -2000, -2000);
  pop();
  
  push();
  translate(2000, 2000);
  rotate(90);
  image(border, -2000, -2000);
  pop();
  
  push();
  translate(2000, 2000);
  rotate(270);
  image(border, -2000, -2000);
  pop();
  
  stroke(0);
  strokeWeight(7);
  fill(0, 255);
  textSize(24);
  
  if (overCircle(npcPurple.position.x, npcPurple.position.y - 25, 145)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      npcPurple.changeAnimation('talkP');
      fill(255);
      text(speech[0], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      npcPurple.changeAnimation('standP');
      image(icon, npcPurple.position.x - 40, npcPurple.position.y - 100);}}
  else {
    npcPurple.changeAnimation('standP');}
  
  if (overCircle(npcBlue.position.x, npcBlue.position.y + 25, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      npcBlue.changeAnimation('talkB');
      fill(255);
      text(speech[1], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      npcBlue.changeAnimation('standB');
      image(icon, npcBlue.position.x - 40, npcBlue.position.y - 115);}}
  else {
    npcBlue.changeAnimation('standB');}
  
  if (overCircle(npcGreen.position.x, npcGreen.position.y - 25, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      npcGreen.changeAnimation('talkG');
      fill(255);
      text(speech[2], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      npcGreen.changeAnimation('standG');
      image(icon, npcGreen.position.x - 40, npcGreen.position.y - 85);}}
  else {
    npcGreen.changeAnimation('standG');}
  
  if (overCircle(npcWhite.position.x, npcWhite.position.y + 25, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      npcWhite.changeAnimation('talkW');
      fill(255);
      text(speech[3], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      npcWhite.changeAnimation('standW');
      image(icon, npcWhite.position.x - 40, npcWhite.position.y - 100);}}
  else {
    npcWhite.changeAnimation('standW');}
  
  if (overCircle(npcYellow.position.x, npcYellow.position.y - 45, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      npcYellow.changeAnimation('talkY');
      fill(255);
      text(speech[4], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      npcYellow.changeAnimation('standY');
      image(icon, npcYellow.position.x - 40, npcYellow.position.y - 110);}}
  else {
    npcYellow.changeAnimation('standY');}
  
  if (overCircle(npcRed.position.x, npcRed.position.y - 25, 225)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      fill(255);
      text(speech[5], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      image(icon, npcRed.position.x - 40, npcRed.position.y - 135);}}
  
  if (overCircle(objGray.position.x, objGray.position.y - 25, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      fill(255);
      text(speech[6], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      image(icon, objGray.position.x - 40, objGray.position.y - 95);}}
  
  if (overCircle(objBrown.position.x, objBrown.position.y - 25, 125)) {
    if (keyIsDown(74)) {
      rect(camera.position.x - width/2, camera.position.y + height/4, width, height/4);
      fill(255);
      text(speech[7], camera.position.x - 575, camera.position.y + 215, 1100, 125);}
    else {
      image(icon, objBrown.position.x - 40, objBrown.position.y - 95);}}
}