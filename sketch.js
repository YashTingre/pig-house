const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    pig1 = new Pig(790,500);
    box2 = new Box(885,550,70,70);
    log1 = new Log(790,450,250,PI/2);

    box3 = new Box(700,400,70,70);
    pig2 = new Pig(790,350);
    box4 = new Box(885,400,70,70);
    log2 = new Log(790,300,250,PI/2);

    box5 = new Box(790,250,70,70);
    log3 = new Log(700,200,150,PI/7);
    log4 = new Log(880,200,150,-PI/7);

    bird = new Bird(100,100);
   

    ground = new Ground(600,height,1200,20);
     
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}