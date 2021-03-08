var hour
var minute
var seconds
var hourAngle
var minuteAngle
var secondsAngle

function setup() {
createCanvas(400,400);
angleMode(DEGREES);




  
}

function draw() {

  background("black");

  translate(200,200);
  rotate( -90);
  hours= hour();
  minutes= minute();
  seconds= second();

  hourAngle= map(hours%12,0,12,0,360);
  minuteAngle= map(minutes,0,60,0,360);
  secondsAngle= map(seconds,0,60,0,360);

  push();
   rotate(secondsAngle);
       stroke(255,0,0); 
     strokeWeight(7);
      line(0,0,100,0);
       pop()
 
       push();
       rotate(minuteAngle);
           stroke(0,255,0); 
         strokeWeight(7);
          line(0,0,75,0);
           pop()

           push();
           rotate(hourAngle);
               stroke(0,0,255); 
             strokeWeight(7);
             line(0,0,50,0);
             pop()

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,secondsAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,minuteAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hourAngle);
 
  drawSprites();
}