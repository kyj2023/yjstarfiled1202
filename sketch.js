let stars=[];
let factor=100;
let speedSlider;
let width, height;

function setup() {
  width=windowWidth;
  height=windowHeight;

  createCanvas(width,height);
  speedSlider=createSlider(0,20,1,1);
  for(let i=0;i<500;i++){
  stars[i]=createVector(  
   random(-width*factor,width*factor),
   random(-height*factor,height*factor),
   random(width));
  stars[i].pz=stars[i].z;
 } 
}
function draw() {
  background(0);
  fill(255);
  translate(width/2,height/2);
  for(let star of stars){
  let x=star.x/star.z;
  let y=star.y/star.z;
  let px=star.x/star.pz;
  let py=star.y/star.pz;
 
  let d=map(star.z,0,width,10,1); 
  fill(255);
  //stroke(0,0,255); 
  noStroke();
  circle(x,y,d);
  noStroke();
  //stroke(255);
  line(x,y,px,py);
  //rect(x,y,d);
  //text(int(random(1,10)),x,y);
  //textSize(d*5);
  star.z -= speedSlider.value();
  if(star.z<1){
  star.x=random(-width*factor,width*factor);
  star.y=random(-height*factor,height*factor);
  star.z=width;  
  star.pz=width;
  }
 }
}