
var player;
var score=0;
var wormGroup;

function preload() {
  playerImage=loadImage("images/frog.png")
  swampImage=loadImage("images/swampImg.png")
  wormImage=loadImage("images/worm.png")
}

function setup() {
createCanvas(600,600);

swamp=createSprite(300,300);
swamp.scale=2.5;
swamp.addImage(swampImage);

player = createSprite(40,550,30,30); 

player.addImage(playerImage);
player.scale=0.4;
wormGroup= new Group();
}

function draw() {
background("black");
stroke("red")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;

generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,60);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(40,380),random(490,380),40,5)
  worm.addImage(wormImage)
  worm.scale=random(0.1,0.3)
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
