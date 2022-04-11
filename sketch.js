
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var paper;
var ground;
var dustbin;
var bin;


function preload()
{
dustbin = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);

         
	engine = Engine.create();
	world = engine.world;

    left = new Bin(620,550,10,150)
    right = new Bin(730,550,10,150)
    bottom= new Bin(675,620,150,10)
    paper = new Paper(200,10,60);
  	ground = new Ground(400,650);
    

	Engine.run(engine);
  
}


function draw() {
  background("white");
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottom.display();

  image(dustbin,600,470,160,180)

  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
     Body.applyForce(paper.body, paper.body.position,{x:145,y:-145})

   }
}



