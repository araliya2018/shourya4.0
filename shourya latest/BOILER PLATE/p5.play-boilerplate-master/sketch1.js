var bg;
var platform;
var platformIMG;
var tile1;
var tile2;
var tile3;  
var player,player_idle,player_stand,player_attack;
var player2,player2_stand, player2_attack,player2_idle;

function preload()
{
bg=loadImage("Backgrounds/TheGhouls.png");
tile1=loadImage("platforms/false platform.png")
tile2=loadImage("platforms/hard platform.png")
//playeridle=loadAnimation("idle.png","idle1.png")
player_idle=loadAnimation("walk/four.png");
player_stand=loadAnimation("walk/one.png","walk/two.png","walk/three.png","walk/four.png","walk/five.png")
player_attack=loadAnimation("attack/one.png","attack/two.png","attack/three.png","attack/four.png","attack/five.png","attack/six.png","attack/seven.png")
  


player2_idle=loadAnimation("walk2/three.png")
player2_stand=loadAnimation("walk2/one.png","walk2/two.png","walk2/three.png","walk2/four.png","walk2/five.png")
  player2_attack=loadAnimation("attack2/one.png","attack2/two.png","attack2/three.png","attack2/four.png","attack2/five.png")
  }
function setup() {
  createCanvas(displayWidth-80,displayHeight);
  platform= createSprite(displayWidth/2,displayHeight/2-200);
 platform.addImage(tile1);
 platform.scale=2;

  platform2= createSprite(displayWidth/2-50,displayHeight/2+290,displayWidth,displayHeight/4);
  platform2.addImage(tile2);
  platform2.scale=4.5;



player=createSprite(200,450);
player.addAnimation("player_idle",player_idle);
  player.addAnimation("player_stand",player_stand);
 player.addAnimation("player_attack",player_attack);
  player.scale=0.3;



player2=createSprite(800,450);
  player2.addAnimation("player2_idle",player2_idle);
  player2.addAnimation("player2_stand",player2_stand);
  player2.addAnimation("player2_attack",player2_attack);
  player2.scale=0.3;
}

function draw() {
  background(bg);  
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX=3;
   player.changeAnimation("player_stand");
    
  } 
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
   player.changeAnimation("player_idle");
   
  }
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX=-3;
   player.changeAnimation("player_stand");
    
  } 
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
   player.changeAnimation("player_idle");
   
  }

  if(keyWentDown("UP_ARROW")) 
  {
    player.changeAnimation("player_attack");
    
  }
  if(keyWentUp("UP_ARROW")){
    player.changeAnimation("player_idle");
  }

//---------player2-----------------------------------------------
  if(keyWentDown("a"))
  {
    player2.velocityX=3;
   player2.changeAnimation("player2_stand");
    
  } 
  if(keyWentUp("a")){
    player2.velocityX=0;
   player2.changeAnimation("player2_idle");
   
  }
  if(keyWentDown("d")){
    player2.velocityX=-3;
   player2.changeAnimation("player2_stand");
    
  } 
  if(keyWentUp("d")){
    player2.velocityX=0;
   player2.changeAnimation("player2_idle");
   
  } 

  if(keyWentDown("t")) 
  {
    player2.changeAnimation("player2_attack");
    
  }
  if(keyWentUp("t")){
    player2.changeAnimation("player2_idle");
  }

  
  drawSprites();
}