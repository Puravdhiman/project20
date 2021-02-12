var cat,catrunning;
var mouse,mouserunning;
var background,backgroundImg;


function preload() {
    backgroundImg=loadImage("garden.png");
    catrunning=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");

    mouserunning=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    
}

function setup(){
    createCanvas(800,800);
    background=createSprite("0,0,0,0");
     background.addImage("backgroundImg");
    
    cat=createSprite(400,400,50,50);
     cat.addAnimation("catrunning",catrunning);
     cat.scale=0.4;

     mouse=createSprite("300,300,50,50");
     mouse.addAnimation("mouserunning",mouserunning);
     mouse.scale=0.2;
     }
function draw() {
    background(255);

    
if (cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.Collide(mouse);
    cat.velocityX=0;
    cat.addAnimation("catlastImage",catImg3);
    cat.changeAnimation("catlastImage")
}

     keyPressed();

     text(mouseX + ',' + mouseY,10,45);
    drawSprites();
}


function keyPressed(){



if(keyCode === LEFT_ARROW){

   cat.velocityX= -5;
    cat.addAnimation("catrunning",catImg2)
     cat.changeAnimation("catrunning");

}




}




