const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottomGround, topGround, leftGround, rightGround;
var ball;

var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  bottomGround = new Ground(200,390,400,10, "green");
  topGround = new Ground(200,10,400,10,"orange");
  leftGround = new Ground(10,200,10,400, "purple");
  rightGround = new Ground(390,200,10,400, "red");

  var ball_options={
    restitution: 0.95
  }
  ball = Bodies.circle(200,200,10, ball_options);
  World.add(world, ball);
  console.log(ball.position.x);
  console.log(ball.position.y);

  button1=createImg('push.png');
  button1.position(200, 30);
  button1.size(50, 50);
  button1.mouseClicked(hForce);

  button2 = createImg("push.png");
  button2.position(280,30);
  button2.size(50,50);
  button2.mouseClicked(vForce);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  bottomGround.show();
  topGround.show();
  leftGround.show();
  rightGround.show();
  
  ellipse(ball.position.x, ball.position.y, 10);
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}