const CRYSTAL_SIZE = 500              
const SIDES = 6

let PALETTE = []
let layers = []

const layerConstructors = [
  {
    name: 'Outline Shape',
    init: () => new OutlineShape(),
    weight: 0.3
  },
  {
    name: 'Centered Shape',
    init: () => new CenteredShape(),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: () => new Circles(),
    weight: 0.3
  },
  {
    name: 'Simple Lines',
    init: () => new SimpleLines(),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    init: () => new DottedLines(),
    weight: 0.3
  },
  {
    name: 'Ring of Shapes',
    init: () => new RingOfShapes(),
    weight: 0.3
  },
  {
    name: 'Stepped Hexagons',
    init: () => new SteppedHexagons(),
    weight: 0.3
  },
  {
    name: 'Test Lines',
    init: () => new TestLines({
      lines: true,
      circle: true
    }),
    weight: 1
  }
]

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
  layerConstructors.forEach(lcon => {             //**
    let picker = random(0, 1)
    if (picker > lcon.weight) {
      const layer = lcon.init()
      console.log(layer)
      layers.push(layer)
    }
  })

  layers.forEach(layer => {
    layer.render()
  })

  // ** Deleted 'picker' if-blocks

  // used for testing new layers                     //**
  // const testLines = new TestLines()
  // testLines.render()

  // const dottedLines = new DottedLines()           
  // dottedLines.render()

  // const centeredShape = new CenteredShape()       
  // centeredShape.render()

  // const ringOfShapes = new RingOfShapes()          //** see also myTriangle() in helpers.js
  // ringOfShapes.render()

  // const steppedHexagons = new SteppedHexagons()   
  // steppedHexagons.render()
} 

//** ADDED REMAINING LAYER DEFINITIONS **//