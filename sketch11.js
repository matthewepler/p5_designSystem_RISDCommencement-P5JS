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
  //** deleted new Layer()

  // const testLines = new TestLines()
  // testLines.render()

  const circle1 = new Circles()         
  circle1.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  // ...

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

//** MOVED HELPER FUNCTIONS TO HELPERS.JS **// - add to index.html

//** MOVED LAYER and other Classes to Layers.js **//

