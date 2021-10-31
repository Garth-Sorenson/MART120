function setup() {
    createCanvas(500,600);
    angleMode(DEGREES);
}

function draw() {
    background(120,0,120);
    fill(0,0,0);
    textSize(32);
    text('Self Portrait of Garth Himself',50,200);
    textSize(12);
    text('by Garth Sorenson',395,595);

    //torso
    fill(120);
    circle(250,600,250);

    //arms
    //L
    line(175,570,175,600);
    //R
    line(325,570,325,600);

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
    //L
    circle(220,450,20);
    
    //R
    fill(0,0,0)
    circle(280,450,20);

    //mouth
    noFill()
    arc(250,430,130,130,80,100);

    //eye glint - I meant to use this to add a white dot to make the eyes glint, but changing the stroke weight here seemed to change the stroke glint everywhere. 
    //fill(255,255,255);
    //strokeWeight(5);
    //point(225,445);
    
}