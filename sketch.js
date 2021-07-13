const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;



var background
var ground, beats,line1
var divider1, divider2, divider3, divider4, divider5, divider6
var score = 0;

var engine, world



function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  beats = new Beat(120,0,40)

  ground = new Ground(displayWidth/2,displayHeight/1.2,displayWidth,10)

  

 // console.log(displayWidth)

  //line1 = new Line(displayWidth/2,270,displayWidth,10)


  
}

function draw() {
  background("black");  
  Engine.update(engine);
 

  fill("white")
  text(mouseX + " , " + mouseY, mouseX,mouseY)

  for(var i = 0; i < 1540; i=i+261.17) {
    stroke("white");
    line(i,0,i,displayHeight);
  }


 if(keyCode === 36 && beats.body.position.x <= 257){
   World.remove(world, beats.body)
   
 }

  beats.display()
  ground.display()
  drawSprites();
  //line1.display()

 



}