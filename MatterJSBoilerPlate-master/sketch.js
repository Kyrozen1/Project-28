const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5;
var tree,boy, boyImg, stone, chain;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(150, 620, 10, 10)
	boy.addImage(boyImg);
	boy.scale=0.12;

	

	//Create the Bodies Here.
	tree = new Tree(590, 420, 480, 600);
	mango1 = new Mango(420, 270);
	mango2 = new Mango(460, 430);
	mango3 = new Mango(565, 170);
	mango4 = new Mango(730, 220);
	mango5 = new Mango(740, 410);
	stone = new Stone(80, 540)
	ground = new Ground(400,680,800,40);
	chain = new Chain(stone.body, {x:80, y:524})

	mango1.body.depth = tree.body.depth;
	mango1.body.depth = tree.body.depth + 1;
	Engine.run(engine);
  
}


function draw() {
  background(255);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  ground.display();
  chain.display();
  
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  //console.log(stone)
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	chain.fly();
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:80, y:524})
        chain.attach(stone.body)
    }
}

function detectcollision(object1,object2){
	object2BodyPosition=object2.body.position
	object1BodyPosition=object1.body.position

	var distance = dist(object1BodyPosition.x, object1BodyPosition.y, object2BodyPosition.x, object2BodyPosition.y)
	if(distance<=object2.r+object1.r)
	{
		Matter.Body.setStatic(object2.body,false);
	}
}