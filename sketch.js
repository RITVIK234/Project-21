var bullet, wall,thickness;
var speed,weight,damage;

function setup() {
createCanvas(windowWidth-10,windowHeight-20);

speed=random(223,321);
weight=random(30,52);

thickness=random(22,83);

damage=(0.5*weight*speed*speed)/(speed*speed*speed);

bullet = createSprite(100, height/2, 50, 5);
bullet.velocityX = speed;

wall = createSprite(width*(17/20),height/2,thickness,height/2);
}

function draw() {
background(0,0,0);  

if(isTouching(bullet,wall)){
bullet.velocityX=0;

if(damage>=10){
wall.shapeColor="red";
}

if(damage<10){
wall.shapeColor="green";
}
}

if(bullet.x>width){
wall.shapeColor="red";
}

drawSprites();
}

