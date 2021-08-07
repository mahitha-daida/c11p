var path;
var pathimg;
var boy;
var boyimg;
var leftb,rightb;
function preload(){
  //pre-load images
 pathimg=loadImage('path.png');

boyimg=loadAnimation('Runner-1.png','Runner-2.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathimg);
path.scale=1.2;
path.velocityY=4;


boy=createSprite(180,340,30,30);
boy.addAnimation('running',boyimg);
boy.scale=0.08;

leftb=createSprite(0,0,100,800);
leftb.visible=false;

rightb=createSprite(0,370,100,800);
rightb.visible=false;
}

function draw() {
  background('black');

  if(path.y>400){
    path.y=height/2;
  }
  boy.x=World.mouseX;
  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftb);
  boy.collide(rightb);
  drawSprites();
}
