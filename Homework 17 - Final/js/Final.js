//player
var playerX = 75;
var playerY = 200;
var playerVelocity = 8;
var playerRadius = 15;
//obstacles
var obstacleVelocity = 5;
var topLinesY = [];
var bottomLinesY = [];
var topLinesX = [600, 900, 1200, 1500, 1800];
var bottomLinesX = [600, 900, 1200, 1500, 1800];
//game modes
var mode = 0;
const introScreen = 0;
const gameScreen = 1;
const gameOverScreen = 2;
//text fade
var textFade;
var fadeAmount = 1;
//game time
var frames = 0;
var score = 0;

function setup() {
  createCanvas(500,600);
  for (var i = 0; i < topLinesX.length; i++) {
    var randomNumber = getRandomNumber(475);
    topLinesY.push(randomNumber);
    bottomLinesY.push(randomNumber+125);
  }
  textAlign(CENTER, CENTER);
  fade = 0;
}

function draw() {
  frames += 1;

  drawBackground(41, 182, 246);

  createCharacter(255,255,51);

  characterMovement();

  restartGame();

  if (frames >= 200 && mode == introScreen) {
    mode = gameScreen;
  }
  
  if (mode == introScreen) {
    textSize(30);
    fill(255,255,255);
    text("DODGE THE GAPS", width/2, height/2-50);
    text("Press W and S to move", width/2, height/2+50);
  } else if (mode == gameScreen) {
      collisionCheck();
      for (var i = 0; i < topLinesX.length; i++) {
        drawObstacles(i, topLinesX[i], topLinesY[i], bottomLinesX[i], bottomLinesY[i]);
      }
      fill(255,255,255);
      text(score, width/2, height-100);
  } else if (mode == gameOverScreen) {
      drawBackground(0, 0, 0);
      textSize(69);
      fill(255, 0, 0, fade);
      text("YOU DIED", width/2, height/2-100);
      textSize(36);
      text("Score: " + score, width/2, height-100);
      textSize(24);
      text("Press 'R' to Restart", width/2, height-25);
    if (fade < 0) fadeAmount = 1; 
    fade += fadeAmount;
  }
  
}

function drawObstacles(arrayIndex, topX, topY2, bottomX, bottomY1) {
  fill(0, 0, 0);
  line(topX, 0, topX, topY2);
  line(bottomX,bottomY1,bottomX,height);
  
  topLinesX[arrayIndex]-=obstacleVelocity;
  bottomLinesX[arrayIndex]-=obstacleVelocity;
  
  if (topLinesX[arrayIndex] <= 0) {
    var newValue = Math.max(...topLinesX) + 300;
    topLinesX[arrayIndex] = newValue;
    bottomLinesX[arrayIndex] = newValue;
    topLinesY[arrayIndex] = getRandomNumber(475);
    bottomLinesY[arrayIndex] = topLinesY[arrayIndex]+125;
  }
}

function drawBackground(r,g,b) {
  background(r,g,b);
}

function createCharacter(r,g,b) {
  fill(r,g,b);
  circle(playerX,playerY,playerRadius*2);
}

function characterMovement() {
  //up, W
  if(keyIsDown(87)) {
    playerY-=playerVelocity;
  }
  //down, S
  else if(keyIsDown(83)) {
    playerY+=playerVelocity;
  }
}

function restartGame() {
  //R to respawn
  if(keyIsDown(82)) {
    frames = 0;
    mode = introScreen;
    score = 0;
    fade = 0;
    topLinesX = [600, 900, 1200, 1500, 1800];
    bottomLinesX = [600, 900, 1200, 1500, 1800];
    drawObstacles();
  }
}

function collisionCheck() {
  for (var i = 0; i < topLinesX.length; i++) {
    if ((playerX+playerRadius >= topLinesX[i] && playerX-playerRadius <= topLinesX[i]) && 
      playerY-playerRadius <= topLinesY[i]) {
      mode = 2;
        
    }
    else if ((playerX+playerRadius >= topLinesX[i] && playerX-playerRadius <= topLinesX[i]) &&
      playerY+playerRadius >= bottomLinesY[i]) {
      mode = 2;
        
    }
    else if ((playerX >= topLinesX[i] && playerX <= topLinesX[i]) && 
      (playerY >= topLinesY[i] && playerY <= bottomLinesY[i])) {
      score = score+1;
    }
  }
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}