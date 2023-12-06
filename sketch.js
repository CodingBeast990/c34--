
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;
var berry, berryIMG;
var bird, birdIMG, bird_options;
var bird2;
var score = 0;

function preload(){
bg = loadImage('background.jpg');
birdIMG = loadImage('BirdImage.png');
berryIMG  = loadImage('berry.png');
}

function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;

 

  bird = new Bird(width/2 +80, height/2 -80, 100);
  
  
  
}


function draw() {
  Engine.update(engine); 
  
  image(bg,0,0,width, height);


  
  drawSprites();
  bird.show();
  spawnBerries();
  


}
 
function spawnBerries(){

if(frameCount % 100 === 0){
  berry = createSprite(Math.round(random(900)), (Math.round(random(400))));
  berry.addImage(berryIMG);
  berry.scale=0.4;
  berry.velocityY = 3; 
}
}