const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	roof = new Roof(350,100,300,30)
	
	ballDiameter = 30;
	ball1 = new Ball(width/2-ballDiameter*4,height/4+200,ballDiameter)
	ball2 = new Ball(width/2-ballDiameter*2,height/4+200,ballDiameter)
	ball3 = new Ball(width/2,height/4+200,ballDiameter)
	ball4 = new Ball(width/2+ballDiameter*2,height/4+200,ballDiameter)
	ball5 = new Ball(width/2+ballDiameter*4,height/4+200,ballDiameter)

	rope1 = new Rope(ball1.body, roof.body, -ballDiameter*4,0)
	rope2 = new Rope(ball2.body, roof.body,-ballDiameter*2,0)
	rope3 = new Rope(ball3.body, roof.body,0,0)
	rope4 = new Rope(ball4.body, roof.body,ballDiameter*2,0)
	rope5 = new Rope(ball5.body, roof.body,ballDiameter*4,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-50,y:-45});
	}
}



