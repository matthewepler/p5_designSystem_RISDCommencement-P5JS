const CRYSTAL_SIZE = 500
const SIDES = 6

let PALETTE = []

function setup () {
  createCanvas(510, 510, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152)
  ]

  smooth()
  noLoop()
}

function draw () {
  testLines()
  outlineShape()                                      //**
} 

function outlineShape () {                            // **
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  noFill()
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
}

function testLines () {
  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()

  const angle = TWO_PI / numShapes

  stroke(strokeColor)
  noFill()
  strokeWeight(3)
  
  push()
  translate(width/2, height/2)
  for (let i = 0; i < TWO_PI - 0.1; i += angle) { 
    line(0, 0, 0, CRYSTAL_SIZE / 2)
    rotate(angle)
  }
  pop()
}

function randomSelectTwo () {
  const rando = random(2)
  return rando > 1 ? true : false
}

function getRandomFromPalette () {
  const rando = floor(random(0, PALETTE.length))
  return PALETTE[rando]
}

function hexagon (posX, posY, radius) {                     //**
  const rotAngle = TWO_PI / 6
  beginShape()
  rotate(rotAngle / 2) // could make optional/random
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {         //**
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}