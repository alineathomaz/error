var player,playerImg,playerFight,playerPunch;
var Enemies;
var escritorio;
var chaoImg,chao;
var paredeImg,parede;
var gameState = "fight"

function preload()
{
  playerImg = loadImage("sprites/pixilframe24.png") //eu renomeei os arquivos de imagem todos tbm para tirar os - e os (
  //shooter_shooting = loadImage("assets/shooter_3.png")
 // zombieImg = loadImage("assets/zombie.png")
  chaoImg = loadImage("sprites/pixilframe26.png")
  paredeImg = loadImage("sprites/pixilframe9.png")
  //heart1Img = loadImage("assets/heart_1.png")
  //heart2Img = loadImage("assets/heart_2.png")
  //heart3Img = loadImage("assets/heart_3.png")
  //lose = loadSound("assets/lose.mp3")
  //winning = loadSound("assets/win.mp3")
  //explosionSound = loadSound("assets/boom.wav")
}

function setup() 
{  
  //OBSERVAÇÃO: INDENTE BEM SEU CÓDIGO! ISSO FACILITA ACHAR OS ERROS E A LEITURA DO CÓDIGO
  createCanvas(windowWidth, windowHeight);

  //adicionando a imagem de fundo
  chao = createSprite (displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  chao.addImage("chao", chaoImg);
  chao.scale= 1.28;
  
  parede = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  parede.addImage("parede", paredeImg);
  parede.scale= 1.28;
  
  //criando o sprite do jogador
  player = createSprite(displayWidth - 1150, displayHeight - 300,5 0, 50);
  player.addImage(playerImg);
  player.scale=0.4;
  //player.debug=true;
  player.setCollider("rectangle",0,0,300,300)
}

function draw() 
{
  background(0); 
  
  if (gameState === "fight") {
    //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
    if(keyDown("UP_ARROW")||touches.length>0){
      player.y = player.y-30
    }
    
    if(keyDown("DOWN_ARROW")||touches.length>0){
      player.y = player.y+30
    }

  }

  drawSprites();
}
