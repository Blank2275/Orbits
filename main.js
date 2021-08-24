function setup(){
    rectMode(CENTER);
    createCanvas(windowWidth / 1.05, windowHeight / 1.05);
    noStroke();
}

function draw(){
    background(100);
    ellipse(mouseX, mouseY, 20, 20)
}