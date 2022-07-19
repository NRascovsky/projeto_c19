var cachorro;
var menina;
var fundo;
var meninaImg;
var cachorroImg;

function preload(){
fundo = loadImage("floresta.jpg");
meninaImg = loadImage("menina.png");
cachorroImg = loadImage("cachorromal.png");


}

function setup() {
  createCanvas(1350, 650);
  menina = createSprite(10,500,20,50);
  menina.x = 1000;
  menina.addImage(meninaImg);
  menina.rotateToDirection = true;

  
  ground = createSprite(100,600,1500,20);
  //ground.addImage("ground",groundImage);
  ground.x = 700;
}

function draw() {
background(fundo);
cachorro_mal();
drawSprites();
}


function cachorro_mal() {
  
  if (frameCount%1350==0) {
    var cachorro = createSprite(1350,500,50,50);
  cachorro.addImage(cachorroImg);
  cachorro.velocityX = -2;
  cachorro.scale = 0.2;
  }

}