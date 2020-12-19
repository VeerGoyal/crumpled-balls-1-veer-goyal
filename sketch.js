
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ball = new PAPER(100,200,20);
	ground = new GROUND(780,690,1700,10);
	dustbin1 = new DUSTBIN(700,630,20,100);
	dustbin2 = new DUSTBIN(810,670,200,20);
	dustbin3 = new DUSTBIN(900,630,20,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}
}	
