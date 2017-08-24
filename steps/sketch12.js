const CRYSTAL_SIZE = 500              
const SIDES = 6

let PALETTE = []
let layers = []

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
  // const testLines = new TestLines()
  // testLines.render()

  // const circle1 = new Circles()         //** do it here first
  // circle1.render()

  // const outlineShape = new OutlineShape()
  // outlineShape.render()

  // const simpleLines = new SimpleLines()
  // simpleLines.render()

  // ...

  // testLines()       

  let picker = random(0, 1)
  if (picker > 0.3) {
    layers.push(new OutlineShape())
  }

  picker = random(0, 1)
  if (picker > 0.3) {
    layers.push(new Circles())                        
  }            
  
  picker = random(0, 1)
  if (picker > 0.3) {
    layers.push(new SimpleLines())                             
  }

  layers.forEach(layer => {
    layer.render()
  })
} 
