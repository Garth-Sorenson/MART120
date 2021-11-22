//player
var playerX = Math.floor(Math.random() * (Math.floor(Math.random() * 550)) + 26);
var playerY = Math.floor(Math.random() * (Math.floor(Math.random() * 350)) + 26);
var playerVelocity = 6;
//mouse click shape
var myMouseX;
var myMouseY;
//enemy one
var enemyOneX = Math.floor(Math.random() * (Math.floor(Math.random() * 600)));
var enemyOneY = Math.floor(Math.random() * (Math.floor(Math.random() * 400)));
var enemyOneDiameter = Math.floor(Math.random() * (Math.floor(Math.random() * 30)) + 16);
var enemyOneXSpeed;
var enemyOneYSpeed;
//enemy two
var enemyTwoX = Math.floor(Math.random() * (Math.floor(Math.random() * 600)));
var enemyTwoY = Math.floor(Math.random() * (Math.floor(Math.random() * 400)));
var enemyTwoDiameter = Math.floor(Math.random() * (Math.floor(Math.random() * 50)) + 31);
var enemyTwoXSpeed
var enemyTwoYSpeed

function setup() {
    createCanvas(600,400);
}

function draw() {
    drawBackground(153,50,204);

    createBorders(0,0,0);
    
    createExitSign();

    createCharacter(0,0,0);

    characterRespawn();
    
    characterMovement();
    
    createWinCondition();

    createEnemyOne(255,255,255);

    enemyOneMovement();

    createEnemyTwo(128,128,128);

    enemyTwoMovement();
    
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
    circle(playerX,playerY,20);
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

function createEnemyOne(r,g,b) {
    fill(r,g,b);
    circle(enemyOneX,enemyOneY,enemyOneDiameter)
}

function enemyOneMovement() {
    //randomize speed
    enemyOneXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 3);
    enemyOneYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 3);
    //move enemy
    enemyOneX += enemyOneXSpeed;
    enemyOneY += enemyOneYSpeed;
    //check boundaries
    if(enemyOneX > width) {
        enemyOneX = 0;
    }
    if(enemyOneX < 0) {
        enemyOneX = width;
    }
    if(enemyOneY > height) {
        enemyOneY = 0;
    }
    if(enemyOneY < 0) {
        enemyOneY = height;
    }
}

function createEnemyTwo(r,g,b) {
    fill(r,g,b);
    circle(enemyTwoX,enemyTwoY,enemyTwoDiameter);
}

function enemyTwoMovement() {
    //randomize speed
    enemyTwoXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 3);
    enemyTwoYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 3);
    //move enemy
    enemyTwoX -= enemyTwoXSpeed;
    enemyTwoY += enemyTwoYSpeed;
    //check boundaries and 
    if(enemyTwoX > width) {
        enemyTwoX = 0;
    }
    if(enemyTwoX < 0) {
        enemyTwoX = width;
    }
    if(enemyTwoY > height) {
        enemyTwoY = 0;
    }
    if(enemyTwoY < 0) {
        enemyTwoY = height;
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

