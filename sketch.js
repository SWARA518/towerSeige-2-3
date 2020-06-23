function setup() {
  createCanvas(800,400);
  
  //level one [four blocks]
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  //level two [three blocks]
  block5 = new Block(360,195,30,40);
  block6 = new Block(390,195,30,40);
  block7 = new Block(420,195,30,40);
  //level three [two blocks]
  block8 = new Block(390,155,30,40);
  block9 = new Block(420,155,30,40);
  //level four(top) [one block]
  block10 = new Block(420,115,30,40);

  poly = new Polygon(200,175,30,40);

  ground = new Ground(400,230,30,50);
  
}

function draw() {
  background(255,255,255); 
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  poly.display();
  ground.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    poly.attach(slingshot);
  }
}