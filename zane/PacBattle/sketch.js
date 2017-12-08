var cols;
var rows;
var bullet;
var bullet2;
var walls;
var w = 47;
var grid;
var player;
var player2;
var p1Score = 0;
var p2Score = 0;
var p1Shot = 0;
var p2Shot = 0;
var dotScore = 1;
var place;
var gamePaused = 1;
var helpScreen = -1;
var powerUps;


function setup()
{
  createCanvas(800,800);
  textSize(40);
  useQuadTree(true);
  textAlign(CENTER);

//Calulates number of columns  and rows that are needed to fill canvas
  cols = round(width/w);
  rows = round(height/w);

//Creates groups for the wall sprites, grid sprites, and dot sprites
  walls = new Group();
  grid = new Group();
  dots = new Group();
  powerUps = new Group();

//Creates player 1 and player 2 turning sprites
//Used to lock sprites to grid turning
  playerTurn = createSprite(0,0,2,2);
  player2Turn = createSprite(0,0,2,2);

//Builds Grid and room
//Refer to room.js for functions
  buildGrid();
  buildRoom();

//Creates player 1 sprite and colors it to Pinkish red
  player = createSprite(352, 306, w-2, w-2);
  player.shapeColor = color('#ed1f5e');

//Creates player 2 sprite and colors it greenish
  player2 = createSprite(445, 306, w-2, w-2);
  player2.shapeColor = color('#1fedaf')
}

function draw()
{
  background(255);

// Sets player 1 collisions and sets turning sprites to the position of the
//player 1 sprite
  playerTurn.position = player.position;
  player.collide(walls);
  player.overlap(dots, p1collectDot);
  player.collide(player2, ResetRoom);
  player.overlap(powerUps, p1poweredUp);

  playerTurn.overlap(grid, canTurn);

// Sets player 2 collisions and sets turning sprites to the position of the
//player 2 sprite
  player2Turn.position = player2.position;
  player2.collide(walls);
  player2.overlap(dots, p2collectDot);
  player2.collide(player, ResetRoom);
  player2.overlap(powerUps, p2poweredUp);

  player2Turn.overlap(grid, p2canTurn);


  if (bullet!=undefined)
  {
    bullet.collide(walls, bulletHitWall);
    bullet.collide(player2, bulletHitPlayer);
  }
  if (bullet2!=undefined)
  {
  bullet2.collide(walls, bulletHitWall);
  bullet2.collide(player, bulletHitPlayer2);
  }

  drawSprites();

//Score text
  fill(color('#ed1f5e'));
  text(p1Score, 200,w-10);
  text(p1Shot, 100, w-10);
  fill(0,0,0);

  fill(color('#1fedaf'));
  text(p2Score, 600, w-10);
  text(p2Shot, 700, w-10);
  fill(0,0,0);


//Any operations needed to be done during the pause menu.
//Shows pause text, sets player speeds to 0, checks if there are still dots
//on screen and resets player positions and
  if(gamePaused == 1){
    fill(color('#ffffff'))
    text("Paused",width/2, height/2);
    textSize(20);
    text("Press escape to restart", width/2, 450);
    text("Press Space to start", width/2, 427);
    text("H for help", width/2, w+4-(w/2));
    player.setSpeed(0);
    player2.setSpeed(0);
  }
  else
  {
    player.setSpeed(4);
    player2.setSpeed(4)
  }
//checks to see if there are dots on screen still and if there is not,
//Sets players speed to 0 and resets player position
  if (dots.length == 0)
  {
    gamePaused = 1;
    player.setSpeed(0);
    player2.setSpeed(0);
    resetPlayerPosition();
    resetPlayer2Position();
  }

  if (helpScreen == 1){
    fill(color('#333333'));
    rect(0,0,width,height);
    fill(color('#ffffff'))
    textSize(30);
    text("This is a two-player game played on one keyboard", width/2, 100);
    textSize(25);
    fill(color('#ed1f5e'));
    text("Player 1 Controls: W A S D and Q to fire", width/2, 250);
    fill(color('#1fedaf'));
    text("Player 2 Controls: UP DOWN LEFT RIGHT Arrows and / to fire", width/2 , 400);
    fill(color('#ffffff'));
    text("Try to collect more dots than your opponent", width/2, 550);
    text("Good luck and have fun!", width/2, 700);
  }
}

//Player 1 controller - W A S D controls
function canTurn()
{
  if(keyIsDown(65)){
    player.rotation = 180;
  }
  if(keyIsDown(68)){
    player.rotation = 0;
  }
  if(keyIsDown(87)){
    player.rotation = 270;
  }
  if(keyIsDown(83)){
    player.rotation = 90;
  }
  if(gamePaused == -1)
  {
  player.setSpeed(4, player.rotation);
  }
}

//Player 2 controller - UP DOWN LEFT RIGHT ARROWS
function p2canTurn()
{
  if(keyIsDown(37)){
    player2.rotation = 180;
  }
  if(keyIsDown(39)){
    player2.rotation = 0;
  }
  if(keyIsDown(38)){
    player2.rotation = 270;
  }
  if(keyIsDown(40)){
    player2.rotation = 90;
  }
  if(gamePaused == -1)
  {
  player2.setSpeed(4, player2.rotation);
  }
}

//Pressing space changes game state from paused to unpaused
function keyPressed(){
  if (keyCode == 32 && helpScreen!=1){
    gamePaused *= -1;

//Builds dots if there are no dots on screen when pausing/unpausing
    if (dots.length == 0){
      buildDots();
    }
  }
//Resets scores, Player positions and rebuilds dots/removes old dots, when
//pressing escape key
  if (keyCode == 27){
    if (gamePaused == 1)
    {
      location.reload();
    }
  }

  if(keyCode == 72){
    if(gamePaused == 1){
      helpScreen *= -1;
    }
  }

//If Q is pressed player 1 shoots
  if (keyCode == 81){
    //player 1 shoot
    if(gamePaused!=1)
    {
      if(p1Shot > 0)
      {
        bullet = createSprite(player.position.x, player.position.y, 20, 10);
        bullet.rotation = player.rotation;
        bullet.setSpeed(7);
        p1Shot--;
      }
    }
  }

//If forward slash is pressed player 2 shoots
  if (keyCode == 191){
    if(gamePaused!=1)
    {
      if(p2Shot > 0)
      {
        bullet2 = createSprite(player2.position.x, player2.position.y, 20, 10);
        bullet2.rotation = player2.rotation;
        bullet2.setSpeed(7);
        p2Shot--;
      }
    }
  }
}

//Resets player 1 position to default starting positions and speed to 0
function resetPlayerPosition(){
  player.position.x = 352;
  player.position.y = 306;
  player.setSpeed(0);
}
//Resets player 2 position to default starting positions and speed to 0
function resetPlayer2Position(){
  player2.position.x = 445;
  player2.position.y = 306;
  player2.setSpeed(0);
}

//Resets player positions, builds dots, Destroys pre-existing dots, Pauses game
function ResetRoom (){
  gamePaused = 1
  resetPlayerPosition();
  resetPlayer2Position();
  buildDots();
  dots.overlap(dots, overlapDots);

}

function p1poweredUp (player, powerUp)
{

  p1Shot++;
  powerUp.remove();
}

function p2poweredUp(player, powerUp){
  p2Shot++;
  powerUp.remove();
}

//Increases player 1 score when player 1 runs into dots
//Called at collision on player with dots
function p1collectDot (player, dot)
{
  p1Score += dotScore;
  dot.remove();
}

//Increases player 2 score when player 2 runs into dots
//Called at collision on player 2 with dots
function p2collectDot (player, dot)
{
  p2Score += dotScore;
  dot.remove();
}
//Destroys dots that are overlapping with walls in the level
function destroyDot (dot, walls)
{
  dot.remove();
}
//Destroys dots that are overlapping with other dots
function overlapDots(dot, dot){
  dot.remove();
}

function bulletHitWall(wall, bullet){
  wall.remove();
  bullet.remove();
}

function bulletHitPlayer(bullet){
  resetPlayer2Position();
  bullet.remove();
}

function bulletHitPlayer2(bullet){
  resetPlayerPosition();
  bullet2.remove();
}
