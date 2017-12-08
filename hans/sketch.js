// var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12;
var players = [0, 0, 5, 5, 2, 1, 0, 5, 0, 3, 5, 4]
var scr = 1;
var kill;
var poison;
var WitchCure = true;
var WitchPoison = true;
var SeerRead;
var SeerReadStatus;
var coin;
var bt,bto;
var mc=0;
var speed=0.1;
var sft=0;
function preload(){
bt = loadImage("game start normal.png");
bto = loadImage("game start on.png");
}

//Warewolf=0,Seer=1,witch=2,hunter=3,fool=4,villager=5

function setup() {
  createCanvas(600, 600);
  // p1=0;
  // p2=0;
  // p3=5;
  // p4=5;
  // p5=2;
  // p6=1;
  // p7=0;
  // p8=5;
  // p9=0;
  // p10=3;
  // p11=5;
  // p12=4;
}

function draw() {

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
  background(70);
  fill(255,255-mc,130-mc);
  ellipse(150,250,200,200);
  
  if (overRect(width / 2 - 170, height / 2-120, 350, 250)) {
image(bto,width/2-170,height/2-120);
    mc=mc+2;
    mc=constrain(mc,0,255);
  } else {
image(bt,width/2-170, height/2-120);
        mc=mc-3;
    mc=constrain(mc,0,255);
  }

  fill(255);

  for (var i = 0; i < players.length; i++) {
    var x = 20
    text(i+1, x + 50 * i, 50);
    if(players[i]==0){}
  }
  
var gx= sin(sft)*5
  sft=sft+speed;
  
  fill(20,255,20);
  beginShape();
  vertex(0,height);
  vertex(0,height-120);
  vertex(50,height-70);
  vertex(120+gx,height-159);
  vertex(180,height-30);
  vertex(240-gx,height-110);
  vertex(280,height-50);
  vertex(320+gx,height-140);
  vertex(380,height-70);
  vertex(420-gx,height-120);
  vertex(460,height-20);
  vertex(500+gx,height-100);
  vertex(540,height-50);
  vertex(580-gx,height-140);
  vertex(600,height-70);
  vertex(600,height);
  endShape(CLOSE);
}

function drawScreen2() {
  background(70);
  textSize(18);
  fill(255);
  text("the night is dark, everyone close their eyes", 150,200,300,100);
  text("Warewolves wake up and kill a player", 150, 300,300,100);

  for (var i = 0; i < players.length; i++) {
px =300+200*sin(i*PI/6);
py=300 +200*cos(i*PI/6);
    if (overCircle(px, py, 20)) {
      fill(200, 0, 0);
    } else {
      fill(255);
    }

    ellipse(px, py, 40, 40);
    fill(0);
    text(i + 1, px-5, py);
  }
}

function drawScreen3() {
  background(70);
  textSize(18);
  fill(255);
  text("Warewolves close your eyes", 200,150,300,100);
  text("Witch open your eyes, This player died tonight, do you want to use your cure on him or use your poison on some one?",150,200,300,100);
  for (var i = 0; i < players.length; i++) {
px =300+200*sin(i*PI/6);
py=300 +200*cos(i*PI/6);
    if (overCircle(px, py, 20)) {
      fill(200, 0, 0);
    } else {
      fill(255);
    }
    ellipse(px, py, 40, 40);
    fill(0);
    text(i + 1, px-5, py);
  }
fill(255);
  text("player  " + (kill + 1) + '  died', 150, 325);
  if (overRect(300, 300, 150, 50)) {
    fill(0, 200, 0);
  } else {
    fill(255);
  }
  rect(300, 300, 150, 50);
  fill(0);
  text("Save Him/Her!", 300, 325);
  fill(255);
  text("or Use Poison", 200, 420);
}

function drawScreen4() {
  background(70);
  textSize(18);
  fill(255);
  text("Witch close your eyes", 200,150,300,100);
  text("Seer Open your Eyes, choose a player you want to read his/her role", 150,300,300,100);
  for (var i = 0; i < players.length; i++) {
px =300+200*sin(i*PI/6);
py=300 +200*cos(i*PI/6);
    if (overCircle(px, py, 20)) {
      fill(0, 200, 200);
    } else {
      fill(255);
    }
    ellipse(px, py, 40, 40);
    fill(0);
 text(i + 1, px-5, py);
  }
}


function drawScreen5() {
  background(70);
  textSize(18);
  fill(255);
  text("you read player  " + (SeerRead + 1) + '  and he/she is', 50, 300);
  textSize(36);
  if (SeerReadStatus == false) {
    text("A WareWolf!", 320, 300);
  } else {
    text("A good person!", 320, 300);
  }
  if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
    fill(200, 0, 0);
  } else {
    fill(255)
  }
  rect(width / 2 - 100, height / 2 + 100, 200, 100);
  fill(0);
  textSize(20);
  text("Done Reading", width / 2 - 50, height / 2 + 170);
}

function drawScreen6() {
  background(70);
  textSize(18);
  fill(255);
  text("Seer close your eyes", 50, 100);
  text("Hunter Open your Eyes, This is the status whether or not you can fire your gun", 50, 120, 500, 500);
  textSize(30);
  if (players[poison] == 3) {
    text("You were poisoned! you can NOT fire!", 50, 250);
  } else {
    text("Fire at your will!", 50, 250);
  }
  if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
    fill(200, 0, 0);
  } else {
    fill(255)
  }
  rect(width / 2 - 100, height / 2 + 100, 200, 100);
  fill(0);
  textSize(36);
  text("Done", width / 2 - 50, height / 2 + 170);
}

function drawScreen7() {
  background(70);
  textSize(18);
  fill(255);
  text("Hunter close your eyes", 50, 100);
  text("Everyone, raise your hand if you want to run for sheriff, and then everyone open your eyes in 3 - 2 - 1!", 50, 120, 500, 500);
  text("Hit RESULT buttom when you ready to hear what happened last night", 50, 170, 500, 500);
  if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
    fill(200, 0, 0);
  } else {
    fill(255)
  }
  rect(width / 2 - 100, height / 2 + 100, 200, 100);
  fill(0);
  textSize(36);
  text("RESULT", width / 2 - 50, height / 2 + 170);
}

function drawScreen8() {
  background(70);
  fill(255);
  textSize(18);
  if (WitchCure == false) {
    text("Last night is a PEACEFUL NIGHT! no one died!", 50, 170, 500, 500);
  } else if (WitchPoison == false && kill!==poison) {if(coin>0.5){
    text("Last night is a brutal night! player  " + (kill + 1) + "  and  " + (poison + 1) + " died!", 50, 170, 500, 500);
  } else{
    text("Last night is a brutal night! player  " + (poison + 1) + "  and  " + (kill + 1) + " died!", 50, 170, 500, 500);
  }
  } else {
    text("Player  " + (kill + 1) + "  died last night!", 50, 170, 500, 500);
  }

}

  function overRect(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      return true;
    } else {
      return false;
    }
  }

  function overCircle(x, y, r) {
    if (dist(x, y, mouseX, mouseY) < r) {
      return true;
    } else {
      return false;
    }
  }

  function mousePressed() {
    if (scr == 1) {
  if (overRect(width / 2 - 170, height / 2-120, 350, 250)){
        scr = 2;
      }
    } else if (scr == 2) {
      for (var i = 0; i < players.length; i++) {
px =300+200*sin(i*PI/6);
py=300 +200*cos(i*PI/6);
    if (overCircle(px, py, 20)) {
          kill = i;
          print(kill);
          scr = 3;
        }
      }
    } else if (scr == 3) {
      for (var n = 0; n < players.length; n++) {
px =300+200*sin(n*PI/6);
py=300 +200*cos(n*PI/6);
    if (overCircle(px, py, 20)) {
          poison = n;
          print(poison);
          WitchPoison = false;
          scr = 4;
        }
      }
      if (overRect(300, 300, 150, 50)) {
        scr = 4;
        WitchCure = false;
      }
    } else if (scr == 4) {
      for (var v = 0; v < players.length; v++) {
px =300+200*sin(v*PI/6);
py=300 +200*cos(v*PI/6);
    if (overCircle(px, py, 20)) {
          if (players[v] == 0) {
            SeerReadStatus = false;
            print(SeerReadStatus);
            SeerRead = v;
            scr = 5;
          } else {
            SeerReadStatus = true;
            print(SeerReadStatus);
            SeerRead = v;
            scr = 5;
          }
        }
      }
    } else if (scr == 5) {
      if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
        scr = 6;
      }
    } else if (scr == 6) {
      if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
        scr = 7;
      }
    } else if (scr == 7) {
      if (overRect(width / 2 - 100, height / 2 + 100, 200, 100)) {
        coin= random();
        scr = 8;
      }
    }
  }

function wf(x,y,s){

}




