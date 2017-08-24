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
} 

function testLines () {
  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2   //**
  const strokeColor = getRandomFromPalette()                //**

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

function randomSelectTwo () {                               //**
  const rando = random(2)
  return rando > 1 ? true : false
}

function getRandomFromPalette () {                          //**
  const rando = floor(random(0, PALETTE.length))
  return PALETTE[rando]
}