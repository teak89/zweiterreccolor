
let rectColor;
let x_w,y_w;
let x_p,y_p;
let r,g,b;



function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(255);
  g = random(255);
  b = random(255);

  rectColor = color(r, g, b, 80);

  noCursor();


}

function draw() {
  background(1,0.1);

  noStroke();
  fill(rectColor);
  rectMode(CENTER);
  rect(x_p, y_p, x_w, y_w);

  y_p += 2;
  x_p += 2;

}

function mousePressed(){

  r = random(255);
  g = random(255);
  b = random(255);

  rectColor = color(r, g, b, 5);

  x_w = random(width);
  y_w = random(height);
  x_p = mouseX;
  y_p = mouseY;


}