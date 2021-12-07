//player
var playerX = Math.floor(Math.random() * (Math.floor(Math.random() * 550)) + 26);
var playerY = Math.floor(Math.random() * (Math.floor(Math.random() * 350)) + 26);
var playerVelocity = 6;
//mouse click shape
var myMouseX;
var myMouseY;
//enemy arrays
var enemyXs = [];
var enemyYs = [];
var enemyDiameters = [];
var enemyXSpeeds = [];
var enemyYSpeeds = [];
var enemyR = [];
var enemyG = [];
var enemyB = [];

function setup() {
    createCanvas(600,400);
    for (var i = 0; i < 15; i++) {
        enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyXs[i] = getRandomNumber(600);
        enemyYs[i] = getRandomNumber(400);
        enemyDiameters[i] = getRandomNumber(30);
        enemyR[i] = getRandomNumber(255);
        enemyG[i] = getRandomNumber(255);
        enemyB[i] = getRandomNumber(255);
    }
}
function draw() {
    drawBackground(153,50,204);

    createBorders(0,0,0);
    
    createExitSign();

    createCharacter(255,255,255);

    characterRespawn();
    
    characterMovement();
    
    createWinCondition();

    createEnemies();

    createObjectAtClick(255,255,255,80);
}
function drawBackground(r,g,b) {
    background(r,g,b);
}
function createBorders(r,g,b) {
    stroke(0);
    fill(r,g,b);
    //top border
    rect(0,0,width,10);
    //left border
    rect(0,0,10,height);
    //bottom border
    rect(0, height-10,width, 10);
    //right upper border
    rect(width-10,0,10,height-50);
}
function createExitSign() {
    //Exit sign
    textSize(16);
    text("EXIT >", width-70,height-25)
}
function createCharacter(r,g,b) {
    fill(r,g,b);
    circle(playerX,playerY,30);
}
function characterRespawn() {
    //R to respawn
    if(keyIsDown(82)) {
        playerX=Math.floor(Math.random() * (Math.floor(Math.random() * 589)) + 26);
        playerY=Math.floor(Math.random() * (Math.floor(Math.random() * 374)) + 26);
    }
}
function characterMovement() {
    //up,right
    if(keyIsDown(87) && keyIsDown(68)) {
        playerY-=playerVelocity;
        playerX+=playerVelocity;
    }
    //up,left
    else if(keyIsDown(87) && keyIsDown(65)) {
        playerY-=playerVelocity;
        playerX-=playerVelocity;
    }
    //down,right
    else if(keyIsDown(83) && keyIsDown(68)) {
        playerY+=playerVelocity;
        playerX+=playerVelocity;
    }
    //down,left
    else if(keyIsDown(83) && keyIsDown(65)) {
        playerY+=playerVelocity;
        playerX-=playerVelocity;
    }
    //right
    else if(keyIsDown(68)) {
        playerX+=playerVelocity;
    }
    //left
    else if(keyIsDown(65)) {
        playerX-=playerVelocity;
    }
    //up
    else if(keyIsDown(87)) {
        playerY-=playerVelocity;
    }
    //down
    else if(keyIsDown(83)) {
        playerY+=playerVelocity;
    }
}
function createWinCondition() {
    if(playerX > width && playerY > height-50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
        textSize(18);
        text("Press R to reset", width/2-60, height/2-20)
    }
}
function createEnemies() {
    for (var i = 0; i < enemyXs.length; i++) {
        //assign random color
        fill(enemyR[i],enemyG[i],enemyB[i]);
        square(enemyXs[i], enemyYs[i], enemyDiameters[i]);
        //move enemy
        enemyXs[i] += enemyXSpeeds[i];
        enemyYs[i] += enemyYSpeeds[i];
        //check boundaries
        if (enemyXs[i] > width) {
            enemyXs[i] = 0;
        }
        if (enemyXs[i] < 0) {
            enemyXs[i] = width;
        }
        if (enemyYs[i] > height) {
            enemyYs[i] = 0;
        }
        if (enemyYs[i] < 0) {
            enemyYs[i] = height;
        }
    }
}
function createObjectAtClick(r,g,b,diameter) {
    //mouse click object
    fill(r,g,b);
    circle(myMouseX,myMouseY,diameter);

}
function mousePressed() {
    myMouseX = mouseX;
    myMouseY = mouseY;
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
