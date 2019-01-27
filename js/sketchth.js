
function setup() {
  createCanvas(600, 600);

}

function draw() {
  thomasHamp();
}

function thomasHamp() {

  colorMode(HSB);

  var weight=dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(weight);
  console.log(pmouseX)
  point(mouseX,mouseY,pmouseX,pmouseY);
  stroke(mouseX/2, 255,255, 10);

}
