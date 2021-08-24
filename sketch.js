var ship, ship_sailing,edges;
var seaImage;
var sea

function preload(){
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
//creating ship
sea = createSprite(400, 200)
sea.addImage(seaImg)
sea.velocityX = -2;
sea.scale = 0.3
ship= creatSprite(130,200,30,30);
ship.addAnimation("sailing", ship_sailing);
edges = creatEdgeSprites();
ship.scale = 0.5;
ship.x = 50
sea.velocityX = -2;
}

function draw() {
//set background color 
background("blue");




console.log(ship.y)
if(sea.x < 0){
sea.x=widht/2;
}

  
  
  ship.velocityY = ship.velocityY + 0.5;
  
  //stop ship from falling down
  ship.collide(sea)
  
  drawSprites();
}