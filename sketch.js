const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Earth,Mars;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    earth = new Earth (300,320,40,40);
    mars = new Mars (200,200,30,30);
}

function draw(){
    background(0);
    Engine.update(engine);
       
    earth.display();
    Mars.display();
}