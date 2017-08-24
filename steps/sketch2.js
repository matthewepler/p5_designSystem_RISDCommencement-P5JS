const CRYSTAL_SIZE = 500
const SIDES = 6

let PALETTE = []

function setup () {
  createCanvas(510, 510, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152),
    color('limegreen')
  ]

  smooth()
  noLoop()
}

function draw () {
  // ellipse(width/2, height/2, CRYSTAL_SIZE, CRYSTAL_SIZE)
  testLines()
} 

function testLines () {
  const rando = random(1)
  const numShapes = rando > 0.5 ? SIDES : SIDES * 2

  // const rando2 = random(1)
  // const strokeColor = rando2 > 0.5 ? PALETTE[0] : PALETTE[1]
  const rando2 = floor(random(0, PALETTE.length))
  const strokeColor = PALETTE[rando2]

  const angle = TWO_PI / numShapes

  stroke(strokeColor)
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