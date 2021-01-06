const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var ground1,stand1,stand2;
var slingshot;
var stand3;

var score = 0;

var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24;
var pentagon;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    pentagon = new Box(100,300,40,40);

    ground1 = new Ground(400,390,800,20);

    stand1 = new Ground(405,245,185,10);
    stand2 = new Ground(700,110,230,10);
    //stand3 = new Ground(100,350,100,10);
    

    block1 = new Block(420,235,30,20);
    block2 = new Block(360,235,30,20);
    block3 = new Block(390,235,30,20);
    block4 = new Block(420,235,30,20);
    block5 = new Block(450,235,30,20);
    block6 = new Block(390,235,30,20);

    block7 = new Block(330,235,30,20);
    block8 = new Block(360,235,30,20);
    block9 = new Block(390,235,30,20);
    block10 = new Block(420,235,30,20);
    block11 = new Block(450,235,30,20);
    block12 = new Block(480,235,30,20);

    block13 = new Block(720,100,30,20);
    block14 = new Block(660,100,30,20);
    block15 = new Block(690,100,30,20);
    block16 = new Block(720,100,30,20);
    block17 = new Block(750,100,30,20);
    block18 = new Block(690,100,30,20);

    block19 = new Block(730,100,30,20);
    block20 = new Block(760,100,30,20);
    block21 = new Block(790,100,30,20);
    block22 = new Block(620,100,30,20);
    block23 = new Block(650,100,30,20);
    block24 = new Block(680,100,30,20);

    slingshot = new SlingShot(pentagon.body,{x:100,y:300});
    

    

  //createSprite(400, 200, 50, 50);
}

function draw() {
  //background(0);
  
  Engine.update(engine);

  fill("white");
  textSize(20);
  text("Score:"+score,50,40);
  //text("Press space bar to return the pentagon",100,60);
  //textFont("JOKERMAN");

  drawSprites();

  ground1.display();

  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display(); 

  block7.display(); 
  block8.display(); 
  block9.display(); 
  block10.display(); 
  block11.display(); 
  block12.display();

  block13.display(); 
  block14.display(); 
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  //block25.display();

  pentagon.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score(); 
  block6.score(); 

  block7.score(); 
  block8.score(); 
  block9.score(); 
  block10.score(); 
  block11.score(); 
  block12.score();

  block13.score(); 
  block14.score(); 
  block15.score(); 
  block16.score(); 
  block17.score(); 
  block18.score(); 

  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  slingshot.display();

  //stand3.display();

  //mouseDragged();
  //mouseReleased();

  getBackground();


}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(pentagon.body);
  }
}

async function getBackground(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();
  //console.log(responseType);

  var dt = responseType.datetime;
  //console.log(dt);

  var hour = dt.slice(11,13);
  //console.log(hour);

  if(hour>=6 && hour<=18){
     background("yellow");
  }

  else{
      background("black");
  }
  //backgroundImg = loadImage(bg);
  //console.log(backgroundImg);

}