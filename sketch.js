var counter = 0;

function setup() {
  }

function draw() {
  background(255);
  
  if(counter==1){
     ellipse(width/2,height/2,100,100);
  } else if(counter==2){
     ellipse(width/2,height/2,80,80);
  } else if(counter==3){
     ellipse(width/2,height/2,60,60);
  } 
  else if(counter==4){
     ellipse(width/2,height/2,40,40);
  } 
  else if(counter==5){
     ellipse(width/2,height/2,20,20);
  } 
  else {
     ellipse(width/2,height/2,100,100);
    conter=0;
  }
}
function mousePressed(){
  counter = counter +1;
  console.log(counter);
}
function mouseReleased(){}