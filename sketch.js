var fixedrectangle ,  movingrectangle 


function setup() {
  
  createCanvas(1200,800);

  fixedrectangle=createSprite(400, 100, 50, 80);
  fixedrectangle.shapeColor="red";
  movingrectangle=createSprite(400,800,80,30)
  movingrectangle.shapeColor="green";
movingrectangle.velocityY=-5
fixedrectangle.velocityY=5
}
function draw() {
  background(255,255,255);  
  drawSprites();
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  fixedrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2){
    movingrectangle.velocityX = movingrectangle.velocityX * (-1);
    fixedrectangle.velocityX = fixedrectangle.velocityX * (-1);




  }
 if(movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+fixedrectangle.height/2)
   {
    movingrectangle.velocityY = movingrectangle.velocityY * (-1);
    fixedrectangle.velocityY = fixedrectangle.velocityY * (-1);

   }
 

/*if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
  fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
  ){
    movingrectangle.shapeColor="blue"
    fixedrectangle.shapeColor="blue"}
    else{fixedrectangle .shapeColor="pink"
    movingrectangle.shapeColor ="pink"
  }*/


 
}