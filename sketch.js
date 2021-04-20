var canvas;
var music;
var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    movingSprite = createSprite(random(10,750),300,20,20);
    movingSprite.shapeColour="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;


    fixSprite1 = createSprite(100,590,180,20);
    fixSprite1.shapeColour="red"; 

    fixSprite2 = createSprite(300,590,180,20);
    fixSprite1.shapeColour="green"; 

    fixSprite3 = createSprite(500,590,180,20);
    fixSprite1.shapeColour="blue"; 

    fixSprite4 = createSprite(700,590,180,20);
    fixSprite1.shapeColour="yellow"; 


   

}

function draw() {
    background(rgb(10,10,10));

    if (movingSprite.x<0){
    music.stop()
    movingSprite.velocityX=3}
   else if(movingSprite.x<800){
    music.stop()
    movingSprite.velocityX=-3
 }
    
if (isTouching(movingSprite,fixSprite4)){
music.play()
movingSprite.shapeColour="yellow";
bounceOff(movingSprite,fixSprite4);
}

else if (isTouching(movingSprite,fixSprite3)){
    music.play()
    movingSprite.shapeColour="blue";
    bounceOff(movingSprite,fixSprite3);
    } 

    else if (isTouching(movingSprite,fixSprite2)){
        music.play()
        movingSprite.shapeColour="green";
        bounceOff(movingSprite,fixSprite2);
        }
        
        else if (isTouching(movingSprite,fixSprite1)){
            music.play()
            movingSprite.shapeColour="red";
            bounceOff(movingSprite,fixSprite1);
            }   

    drawSprites();
}

function isTouching(object1,object2) {
    if (object1.x-object2.x<object1.width/2 + object2.width/2
      && object2.x-object1.x<object1.width/2 + object2.width/2
      && object1.y-object2.y<object1.height/2 + object2.height/2 
      && object2.y-object1.y<object2.height/2 + object1.height/2) {
    return true;
    }
    else 
    {
      return false;
    }
  }