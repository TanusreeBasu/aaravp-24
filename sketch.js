
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var crumpledpaper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

  var option={
  isStatic:true
  }
  ground=Bodies.rectangle(620,690,1250,10,option);
  World.add(world,ground);
  
  dustbin1 = new Dustbin(1020,680,200,20);
  World.add(world,dustbin1);
  dustbin2 = new Dustbin(1130,600,20,170);
  World.add(world,dustbin2);
  dustbin3 = new Dustbin(915,600,20,170);
  World.add(world,dustbin3);

  crumpledpaper = new Ball(200,450,20);
  

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,1250,10);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  crumpledpaper.display();

}
  
  

function keypressed(){
  if (keyCode===UP_ARROW) {
Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:85,y:-85})
}
}


