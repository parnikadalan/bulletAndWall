var  wall, thickness 
var bullet,speed, weight
var rect
var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,150,50,20)
  wall = createSprite(1500,200, thickness, height/2)
  wall.shapeColor=color(80,80, 80)
  speed = random (223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet.velocityX= speed;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
}

function draw() {

  background(255,255,255);

  if (hasCollided(bullet, wall)) 

  {
  bullet.velocityX = 0; 
 var damage =  0.5 *weight *speed *speed /(thickness* thickness* thickness); 
  if(damage>10) 
  { 
    wall.shapeColor = color(255,0,0);
 
  } 
  if (damage<10) 
  {
  wall. shapeColor= color(0,255,0); 
  }
 
drawSprites();

text("DAMAGE:"+ damage, 250, 100);
}


function hasCollided(bullet, wall){
var bulletRightEdge = bullet.x + bullet.width
var wallLeftEdge = wall.x

if(bulletRightEdge>=wallLeftEdge)
{
return true 
}
return false

}
}