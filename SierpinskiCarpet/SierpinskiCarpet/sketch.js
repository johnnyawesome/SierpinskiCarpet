/// <reference path="../TSDef/p5.global-mode.d.ts" />

//Change size to change the sidelength of the initial Square
let size = 250;

function setup() {
  createCanvas(800, 800, P2D);
  background(0);
  stroke(255);
  strokeWeight(1);
  //noFill();

  translate(width / 2 - size / 2, height / 2 - size / 2);

  generateSierpinskiCarpet(size);
}

function draw() {
}

function generateSierpinskiCarpet(size) {

  if (size > 4) {

    rect(0, 0, size, size);

    size /= 3;

    //Left
    push()
    translate(0 - size * 3 + size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Right
    push()
    translate(0 + size * 5 - size, 0 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top
    push()
    translate(0 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom
    push()
    translate(0 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top Left
    push()
    translate(0 - size * 3 + size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Top Right
    push()
    translate(0 + size * 5 - size, 0 - size * 3 + size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom Left
    push()
    translate(0 - size * 3 + size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();

    //Bottom Right
    push()
    translate(0 + size * 5 - size, 0 + size * 5 - size);
    rect(0, 0, size, size);
    generateSierpinskiCarpet(size);
    pop();
  }
}