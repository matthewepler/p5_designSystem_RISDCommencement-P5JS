const CRYSTAL_SIZE = 500              
const SIDES = 6

let PALETTE = []

function setup () {
  createCanvas(550, 550, SVG)

  PALETTE = [                        //**
    color(255, 52, 154),
    color(4, 0, 152)
  ]

  noLoop()
}

function draw () {
  const layer1 = new Layer('hello')     
  // layer1.render()                    //**

  const circle1 = new Circles()         //**
  //console.log(circle1)
  circle1.render()

  // smooth()
  // // testLines()       

  // let picker = random(0, 1)
  // if (picker > 0.3) {
  //   outlineShape()    
  // }

  // picker = random(0, 1)
  // if (picker > 0.3) {
  //   simpleLines()                        
  // }            
  
  // picker = random(0, 1)
  // if (picker > 0.3) {
  //   circles()                             
  // }
} 


//** MOVED CIRCLES BELOW **//

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

class Layer {
  constructor (palette) {
    // console.log('new Layer with', arg)
    this.sides = SIDES 
    this.layerColor = null
    this.numShapes = this.sides                               //**
    this.angle = TWO_PI / this.numShapes                      //**
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3

    this.layerColor = getRandomFromPalette()
    rectMode(CENTER)
  }
}

class Circles extends Layer {                         // ** deleted stuff that is now redundant            
  constructor () {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }
  
  render () {
    stroke(this.layerColor)
    strokeWeight(1)
    noFill()
    push()
    translate(width / 2, height / 2)
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}
