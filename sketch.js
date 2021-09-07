var homebg,rocket;
var homebgimg,rokcetimg;

function preload(){
homebgimg=loadImage("1bg.jpg");
rokcetimg=loadImage("rocketbody.png");
}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 
    homebg=createSprite(680,320);
    homebg.addImage(homebgimg);
  homebg.scale=2.35;

  rocket=createSprite(620,400);
  rocket.addImage(rokcetimg);
  rocket.scale=0.25;

}


function draw(){
background(0);



drawSprites()


}
