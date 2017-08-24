const CRYSTAL_SIZE = 500              
const SIDES = 6

let PALETTE = []

function setup () {
  createCanvas(550, 550, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152)
  ]

  smooth()
  noLoop()
}

function draw () {
  // testLines()       

  let picker = random(0, 1)                   //**
  if (picker > 0.3) {
    outlineShape()    
  }

  picker = random(0, 1)                       //**
  if (picker > 0.3) {
    simpleLines()                        
  }            
  
  picker = random(0, 1)                       //**
  if (picker > 0.3) {
    circles()                             
  }
} 

function circles () {                   
  const numShapes = SIDES
  const angle = TWO_PI / numShapes
  const shapeSize = (CRYSTAL_SIZE / 2) * 0.93
  const position = (CRYSTAL_SIZE / 2) - (shapeSize / 2) 
  const strokeColor = getRandomFromPalette()
  
  stroke(strokeColor)
  strokeWeight(1)
  noFill()
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}

function simpleLines () {                           
  const stepsOut = 8;
  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25) 
  const step = (CRYSTAL_SIZE / 2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))
  const weight = randomSelectTwo() ? 1 : 3
  const angle = TWO_PI / numShapes
  const strokeColor = getRandomFromPalette()

  stroke(strokeColor)
  noFill()
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < TWO_PI; i += angle) {
    line(start * step, 0, stop * step, 0)
    rotate(angle)
  }
  pop()
}

function outlineShape () {  
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
  pop()
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
    // line(0, 0, 0, CRYSTAL_SIZE / 2)                  
    rotate(angle)
  }
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)            
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

function hexagon (posX, posY, radius) {                     
  const rotAngle = TWO_PI / 6
  beginShape()
  rotate(rotAngle / 2) 
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}