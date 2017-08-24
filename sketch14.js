const CRYSTAL_SIZE = 500              
const SIDES = 6

let PALETTE = []
// moved layers[] to Crystal.js              //**

// moved layerConstructors to helpers.js    //**

// added Crystal.js                         //**

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
  // moved layerConstructors.forEach to Crystal constructor //**
  //moved layers.foreach to Crystal render()

  const oneCrystal = new Crystal(width / 2, height /2)
  oneCrystal.render() 
} 

