//text movement variables
var size = 32;
var count = 0;
var sizeDelta = .5;
//eye movement variables
//left eye
var leftEyeX = 220;
var leftEyeY = 450;
var leftEyeDelta = Math.floor((Math.random() * 7) + 1);
//right eye
var rightEyeX = 280;
var rightEyeY = 450;
var rightEyeDelta = Math.floor((Math.random() * 7) + 1);
//mouth movement variables
var mouthX = 250;
var mouthY = 430;
var mouthDelta = Math.floor((Math.random() * 7) + 1);
//left arm movement variables
var leftArmX = 175;
var leftArmY = 570;
var leftArmDelta = Math.floor((Math.random() * 7) + 1);
//right arm movement variables
var rightArmX = 325;
var rightArmY = 570;
var rightArmDelta = Math.floor((Math.random() * 7) + 1);

function setup() {
    createCanvas(500,600);
    angleMode(DEGREES);
}

function draw() {
    background(120,0,120);
    fill(0,0,0);
    textSize(size)
    size += sizeDelta;
    count++;
    if(count > 5){
        sizeDelta *= -1;
        count = 0;
    }

    text("Self Portrait of Garth Himself",50,200);
    textSize(12);
    text('by Garth Sorenson',395,595);

    //torso
    fill(120);
    circle(250,600,250);

    //arms
    //L
    line(leftArmX,leftArmY,175,600);
    leftArmY += leftArmDelta;
    if(leftArmY >= 590 || leftArmY <= 550){
        leftArmDelta *= -1;
    }

    //R
    line(rightArmX,rightArmY,325,600);
    rightArmY += rightArmDelta;
    if(rightArmY >= 590 || rightArmY <= 550){
        rightArmDelta *= -1;
    }

    //head
    fill(255,219,172);
    circle(250,450,125);

    //hat
    fill(70);
    arc(250,430,120,105,180,360);
    //bill
    rect(188,430,135,5);
    //logo
    fill(255,255,255);
    circle(270,410,30);
    fill(3,169,244);
    circle(270,410,20);
    fill(0,0,0);
    triangle(265,415,275,415,270,405);

    //eyes
    fill(0,0,0);
    //Left eye
    circle(leftEyeX,leftEyeY,20); 
    leftEyeX += leftEyeDelta;
    if(leftEyeX >= 230 || leftEyeX <= 200){
        leftEyeDelta *= -1;
    }

    //Right eye
    fill(0,0,0)
    circle(rightEyeX,rightEyeY,20);
    rightEyeX += rightEyeDelta;
    if(rightEyeX >= 300 || rightEyeX <= 270){
        rightEyeDelta *= -1;
    }
    
    //mouth
    noFill()
    arc(mouthX,mouthY,130,130,80,100);
    mouthX += mouthDelta;
    mouthY += mouthDelta;
    if(mouthX >= 260 || mouthX <= 240){
        mouthDelta *= -1;
    }
    
}