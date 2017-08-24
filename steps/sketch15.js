const CRYSTAL_SIZE = 150
const SIDES = 6
const PADDING = CRYSTAL_SIZE * 0.2                  
const MARGIN = (CRYSTAL_SIZE / 2)                   
const COLUMNS = 3                                   
const ROWS = 4                                      
const start = MARGIN + (CRYSTAL_SIZE / 2)     
const gridBox = CRYSTAL_SIZE + PADDING        

let PALETTE = []
let allCrystals = []


function setup () {
  const totalX = start + (gridBox * COLUMNS)    
  const totalY = start + (gridBox * ROWS)       
  createCanvas(totalX, totalY, SVG)             

  PALETTE = [                        
    color(255, 52, 154),
    color(4, 0, 152)
  ]

  smooth()
  noLoop()
}

function draw () {
  for (let x = 0; x < COLUMNS; x++) {           
    for (let y = 0; y < ROWS; y++) {
      const posX = start + (x * gridBox)
      const posY = start + (y * gridBox)
      allCrystals.push(new Crystal(posX, posY))
    }
  }
  
  allCrystals.forEach(crystal => {             
    crystal.render()
  })
} 

