var TrashBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	TrashSprite=createSprite(width/2, 80, 10,10);
	TrashSprite.scale=2
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	ground1 = createSprite(400, 678.9, 800, 12)
	ground1.shapeColor = color(255)

	rect1 = createSprite(535, 622, 20, 100)
	rect1.shapeColor = color("gray")

	rect2 = createSprite(280, 622, 20, 100)
	rect2.shapeColor = color("gray")

	rect3 = createSprite(400, 666.3, 250, 12)
	rect3.shapeColor = color("gray")



	engine = Engine.create();
	world = engine.world;

	TrashBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, TrashBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	 rect1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, rect1);
	 
	rect2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, rect2);
	 
	rect3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  rect3);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  TrashSprite.x= TrashBody.position.x 
  TrashSprite.y= TrashBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(TrashBody, false)
    
  }
}


