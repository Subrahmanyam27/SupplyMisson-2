var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);	

	//creating sprites for coloring rects
	rect1 = createSprite(width/2,630,200,20);
	rect1.shapeColor = ("red");
	rect2 = createSprite(300,590,20,100);
	rect2.shapeColor = ("red");
	rect3 = createSprite(500,590,20,100);
	rect3.shapeColor = ("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);	

	//creating boxes
	box1 = Bodies.rectangle(width/2,630,200,20,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(300,590,20,100,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(500,590,20,100,{isStatic:true});
	World.add(world,box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);

  background(0);

  var pos1 = box1.position;
  var pos2 = box2.position;
  var pos3 = box3.position;

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  rect(pos1.x,pos1.y,200,20);
  rect(pos2.x,pos2.y,20,100);
  rect(pos3.x,pos3.y,20,100);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);     
  }
}



