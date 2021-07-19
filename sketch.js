var lion
function setup() {
  createCanvas(400,400);
   lion = createSprite(200,200,130,50);
}


function draw() 
{
  background(30);
  if(keyDown("right")){
    lion.x = lion.x + 2;
  }
  if(keyDown("left")){
    lion.x = lion.x - 2;
  }
  if(keyDown("Up")){
    lion.y = lion.y - 2;
  }
  if(keyDown("Down")){
    lion.y = lion.y + 2;
  }
  drawSprites();
}




