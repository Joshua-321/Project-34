
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  wall=new Wall(30,200,200,10)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  wall .display()
}

