const CRYSTAL_SIZE = 500
const SIDES = 6

let PALETTE = []

function setup () {
  createCanvas(510, 510, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152),
  ]

  smooth()
  noLoop()
}

function draw () {
  // clear()
  // ellipse(width/2, height/2, CRYSTAL_SIZE, CRYSTAL_SIZE)
  testLines()
} 

function testLines () {
  const angle = TWO_PI / SIDES

  stroke(PALETTE[0])
  noFill()
  strokeWeight(3)
  
  push()
  translate(width/2, height/2)
  for (let i = 0; i < TWO_PI - 0.1; i += angle) { // show where 0deg is
    line(0, 0, 0, CRYSTAL_SIZE / 2)
    rotate(angle)
  }
  pop()
}

function outlineShape () {
  
}