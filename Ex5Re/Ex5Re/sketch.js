function setup() {
  createCanvas( 800, 800);
  
}

function draw() {
  background(255);
  shane(400, 400);
  shane(0,0);
  if (mouseIsPressed){
    amy(0,0,0);
  } else{
    amy(160, 32, 240);
  }
  if (mouseIsPressed){
    joyce(100 , 70);
  } else{
    joyce(50, 20);
  }
  
}
function shaneBody( x, y){
    //monster body
  ellipseMode(CENTER);
  rectMode(CENTER);
  fill(255);
  ellipse(100 + x, 70 + y, 90, 80);
  fill(127,80,20);
  ellipse(100 + x,50 + y,40,20);
  fill(255,0,0);
  rect(100 + x, 85 + y, 20, 20);
  fill(0);
  rect(100 + x, 135 + y, 50, 50);
  fill(0,255,0);
}

function shane(x,y){
  //background(175);
  stroke(0);
  strokeWeight(1);
  shaneBody(x, y);
  
    if(mouseIsPressed) //arm waves
  {
    if((int)(random(3)) == 1)
    {
      
    quad(120 + x, 135 + y, 120 + x, 155 + y, 200 + x, 55 + y, 190 + x, 45 + y); 
    rect( 30 + x, 135+ y, 90, 20);
    
    }
    if((int)(random(3) == 2 || (int)(random(3)) === 0))
    {
      
    rect( 30 + x, 135 + y, 90, 20);
    rect( 160 + x , 135 + y, 70, 20);
    }
    if((int)(random(3)) == 2)
    {
      rect( 30 + x, 135 + y, 90, 20);
      quad( 120 + x, 135 + y, 120 + x, 155 + y, 190 + x, 245 + y, 200 + x, 235 + y);

    }
    
  }
  else
  {
  fill(0,255,0);
  rect( 30 + x, 135+ y, 90, 20);
  rect( 160 + x, 135 + y, 70, 20);
  }
  
  rectMode(CORNER);
}

function amy(eyeR, eyeG, eyeB){

  //background(175);
    // HORNS
  noStroke();
  fill(0, 0, 225);
  triangle(200, 150, 200, 50, 275, 100);
  triangle(325, 100, 400, 50, 400, 150);
  
 // TAIL
  noFill();
  stroke(50);
  //noStroke();
  strokeWeight(4);
  //line(50, 325, 150, 325);
  //line(75, 510, 200, 500);
  bezier(50, 325, 150, 325, 75, 510, 220, 500);
  
  noStroke();
  fill(225, 225, 10);
  quad(20, 325, 40, 315, 50, 325, 40, 335); 

// BODY
  stroke(0);
  strokeWeight(5);
  fill(10);
  ellipse (300, 400, 225, 275);
  
  fill(100, 50);
  ellipse(300, 425, 180, 200);
  
  fill(255);
  ellipse(250, 400, 40, 40);
  ellipse(350, 400, 40, 40);

  
  // HEAD lightning design
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290, 200, 290, 175);
  line(290, 175, 270, 155);
  line(270, 155, 290, 135);
  line(290, 135, 270, 115);
  line(310, 200, 310, 175);
  line(310, 175, 330, 155);
  line(330, 155, 310, 135);
  line(310, 135, 330, 115);

  // HEAD
  stroke(0);
  fill(0);
  ellipse(300, 200, 250, 225);

// EYES
  stroke(225, 225, 0);
  strokeWeight(5);
  fill (eyeR, eyeG, eyeB);
  ellipse(250, 200, 50, 50);
  ellipse(350, 200, 50, 50);

 
// MOUTH
  noStroke();
  fill(220);
  ellipse(300, 250, 80, 80);
  
  fill(200, 0, 0, 50);
  rect(280, 230, 40, 20, 7);
  
  //screw whiskers
  point(270, 240);
  point(270, 250);
  point(290, 240);
  point(290, 250);
  
// FEET
  fill(240);
  ellipse(250, 520, 60, 45);
  ellipse(350, 520, 60, 45);

}

function joyce(outerEyeD, innerEyeD){
  
//SPIKES
fill(125,90,165);
triangle(380,180,340,100,420,140);  //bottom
triangle(420,140,420,60,480,120);  //middle
triangle(480,120,500,20,520,120);  //top

//ANTENNA
noFill();
strokeWeight(10);
stroke(235,150,190);
arc(680,140,160,160,radians(180),radians(270));  //bendy thing
fill(135,215,255);
strokeWeight(1);
stroke(235,150,190);
ellipse(680,60,40,40);  //ball

//ROBOT FEET
fill(140);
triangle(420,340,320,400,460,380);  

//NORMAL FEET
fill(215,200,230);
ellipse(600,390,120,40);  

//ROBOT ARMS
//arms
noFill();
strokeWeight(15);
stroke(235,150,190);
curve(340,220,340,220,260,180,220,100); 
curve(340,220,260,180,220,100,220,100);
//shoulder
fill(100); 
strokeWeight(1);
stroke(235,150,190);
ellipse(340,220,30,30);
//hand
fill(180);
quad(220,100,200,100,160,40,220,80); 
//ROBOT: lower
//arm
noFill();
strokeWeight(15);
stroke(235,150,190);
curve(340,280,340,280,140,220,140,340);
curve(340,280,140,220,140,340,140,340); 
//shoulder
fill(100);
strokeWeight(1);
ellipse(340,280,30,30);
//hand
fill(180);
quad(140,340,140,360,200,400,160,340);

//NORMAL ARM
fill(215,200,230);
stroke(235,150,190);
arc(640,280,100,100,radians(-135),radians(45),CHORD);

//ROBOT FACE
fill(180);
stroke(235,150,190);
arc(500,250,305,305,radians(110),radians(290),CHORD);
//outer eye
fill(100);
ellipse(420,220,outerEyeD, outerEyeD);
fill(194,0,0);
//inner eye
strokeWeight(2);
stroke(235,150,190);
ellipse(420,220, innerEyeD, innerEyeD);
//mouth
rect(420,300,100,30); 
line(440,300,440,330);  
line(460,300,460,330);  

//NORMAL FACE
fill(215,200,230);
strokeWeight(1);
arc(500,250,300,300,radians(-70),radians(110),CHORD);
//eye
noFill();
strokeWeight(4);
stroke(235,150,190);
arc(580,240,60,60,radians(200),radians(340));
//mouth
strokeWeight(3);
stroke(235,150,190);
arc(500,250,180,180,radians(30),radians(110));
//blush
strokeWeight(1);
stroke(235,150,190);
line(560,270,580,250);
line(580,270,600,250);
line(600,270,620,250); 
}