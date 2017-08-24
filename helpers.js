function randomSelectTwo () {
  const rando = random(2)
  return rando > 1 ? true : false
}

function getRandomFromPalette (palette) {
  const rando = floor(random(0, palette.length))
  return palette[rando]
}

function hexagon (posX, posY, radius) {                     
  const rotAngle = TWO_PI / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function myTriangle (center, radius, direction) {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(radians(120)), radius * sin(radians(120)));
    vertex(center + radius * cos(radians(240)), radius * sin(radians(240)));
    endShape(CLOSE); 
  } else {
    beginShape();
    vertex(center + radius * cos(radians(180)), radius * sin(radians(180)));
    vertex(center + radius * cos(radians(300)), radius * sin(radians(300)));
    vertex(center + radius * cos(radians(60)), radius * sin(radians(60)));
    endShape(CLOSE);
  }
}

function saveSVG() {
  p5.saveSVG() // see docs for options: http://zenozeng.github.io/p5.js-svg/doc/reference/p5.html
}

const layerConstructors = [
  {
    name: 'Centered Shape',
    render: () => centeredShape(setState(state)).render(),
    weight: 0.3
  },
  {
    name: 'Outline Shape',
    render: () => outlineShape(setState(state)).render(),
    weight: 0.3
  },
  {
    name: 'Stepped Hexagons',
    render: () => steppedHexagons(setState(state)).render(),
    weight: 0.8
  },
  {
    name: 'Circles',
    render: () => circles(setState(state)).render(),
    weight: 0.7
  },
  {
    name: 'Simple Lines',
    render: () => simpleLines(setState(state)).render(),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    render: () => dottedLines(setState(state)).render(),
    weight: 0.5
  },
  {
    name: 'Ring of Shapes',
    render: () => ringOfShapes(setState(state)).render(),
    weight: 0.3
  },
  {
    name: 'Test Lines',
    render: () => testLines({...setState(state), lines: true, circle: true}).render(),
    weight: 1
  }
]

const drawCrystal = (posX, posY) => {
  push()
  translate(posX, posY)
  layerConstructors.forEach(layer => {
    let picker = random(0, 1)
    if (picker > layer.weight) {
      layer.render()
    }
  })
  pop()
}
