
//Builds all walls by square inside the outer walls. buildWalls(x,y). Functions sort of as a
// 2D Array without the array. Counts from left to right for x, and top to bottom for y.
function buildRoom()
{
  buildWalls(8,1);
  buildWalls(2,2);
  buildWalls(3, 2);
  buildWalls(4,2);
  buildWalls(6,2);
  buildWalls(8,2);
  buildWalls(10,2);
  buildWalls(12,2);
  buildWalls(13,2);
  buildWalls(14,2);
  buildWalls(2,3);
  buildWalls(3,3);
  buildWalls(4,3);
  buildWalls(6,3);
  buildWalls(10,3);
  buildWalls(12,3);
  buildWalls(13,3);
  buildWalls(14,3);
  buildWalls(2,4);
  buildWalls(3,4);
  buildWalls(4,4);
  buildWalls(6,4);
  buildWalls(7,4);
  buildWalls(9,4);
  buildWalls(10,4);
  buildWalls(12,4);
  buildWalls(13,4);
  buildWalls(14,4);
  buildWalls(6,5);
  buildWalls(10,5);
  buildWalls(2, 6);
  buildWalls(3,6);
  buildWalls(4,6);
  buildWalls(8,6);
  buildWalls(12,6);
  buildWalls(13,6);
  buildWalls(14,6);
  buildWalls(2, 7);
  buildWalls(6,7);
  buildWalls(7,7);
  buildWalls(8,7);
  buildWalls(9,7);
  buildWalls(10,7);
  buildWalls(14,7);
  buildWalls(2,8);
  buildWalls(4,8);
  buildWalls(6,8);
  buildWalls(7,8);
  buildWalls(8,8);
  buildWalls(9,8);
  buildWalls(10,8);
  buildWalls(12,8);
  buildWalls(14,8);
  buildWalls(4,9);
  buildWalls(6,9);
  buildWalls(7,9);
  buildWalls(8,9);
  buildWalls(9,9);
  buildWalls(10,9);
  buildWalls(12,9);
  buildWalls(2,10);
  buildWalls(3,10);
  buildWalls(4,10);
  buildWalls(8,10);
  buildWalls(12,10);
  buildWalls(13,10);
  buildWalls(14,10);
  buildWalls(6,11);
  buildWalls(10,11);
  buildWalls(2, 12);
  buildWalls(3,12);
  buildWalls(4,12);
  buildWalls(6,12);
  buildWalls(7,12);
  buildWalls(9,12);
  buildWalls(10,12);
  buildWalls(12,12);
  buildWalls(13,12);
  buildWalls(14,12);
  buildWalls(2,13);
  buildWalls(3,13);
  buildWalls(4,13);
  buildWalls(6,13);
  buildWalls(10,13);
  buildWalls(12,13);
  buildWalls(13,13);
  buildWalls(14,13);
  buildWalls(2, 14);
  buildWalls(3,14);
  buildWalls(4,14);
  buildWalls(6,14);
  buildWalls(8,14)
  buildWalls(10,14);
  buildWalls(12,14);
  buildWalls(13,14);
  buildWalls(14,14);
  buildWalls(8,15);

  for(var i = 0 ; i < cols; i++)
  {
    for(var j = 0 ; j < rows ; j++)
    {
      if(i == 0 || j == 0 || i == cols-1 || j == rows-1)
      {
        var wall = createSprite(i*w+w/2,j*w+w/2, w, w)
        wall.shapeColor = color('#333333');
        walls.add(wall);
      }
    }
  }

}

//creates wall sprite at target location and colors it to grey.
//Adds wall sprite to walls group.
function buildWalls(x, y)
{
  wall = createSprite(gridSpot(x), gridSpot(y), w, w);
  wall.shapeColor = color('#333333');
  walls.add(wall);
}

//Finds the position that the wall needs to be in on the grid. Used in buildWalls to give
//coordinates to the function instead of x and y positions by pixel.
function gridSpot(x)
{
  place = x*w+w/2;
  return place;
}

//Builds in collectable dots to all squares inside the outer walls. Checks to see if
// dots overlap with a wall, if they do it runs destroyDot function and destroys it.
function buildDots ()
{
  for(var i = 1 ; i < cols-1; i++)
  {
    for (var j = 1 ; j < rows-1 ; j++)
    {
      if(i>=1 && j>=1 && i<cols-1 && j< rows-1)
      {
        var dot = createSprite(i*w+(w/2), j*w+(w/2), 10, 10);
        //dot.collide(walls, destroyDot);
        dot.shapeColor = color('#ed1f5e');
        dots.add(dot);
        dot.overlap(walls, destroyDot);
      }
    }
  }
  buildPowerUp(1,1, "blue");
  buildPowerUp(15, 1, "blue");
  buildPowerUp(1, 15, "blue");
  buildPowerUp(15, 15, "blue");
  //buildPowerUp(1, 8, "orange");
  //buildPowerUp(15,8, "orange");
}

function buildPowerUp (x, y, type){
  powerUp = createSprite(gridSpot(x), gridSpot(y), w/2, w/2);
  if(type == "blue"){
    powerUp.shapeColor = color('#1f5ded');
  }
  if(type == "orange"){
    powerUp.shapeColor = color('#edaf1f');
  }
  powerUps.add(powerUp);
}

//Builds grid for the player to move on and creates outer walls.
function buildGrid(){
for(var i = 0 ; i < cols ; i++)
{
  for (var j = 0 ; j < rows ; j++)
  {
    var gridCheck = createSprite(i*w+w/2, j*w+w/2, 2, 2);
    gridCheck.shapeColor = (255);
    grid.add(gridCheck);
  }
}
}
