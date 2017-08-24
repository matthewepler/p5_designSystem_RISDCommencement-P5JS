class Layer {
  constructor () {
    // console.log('new Layer with', arg)
    this.sides = SIDES 
    this.layerColor = null
    this.numShapes = this.sides                               
    this.angle = TWO_PI / this.numShapes                      
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3

    this.layerColor = getRandomFromPalette(PALETTE)
    rectMode(CENTER)
  }
}

class Circles extends Layer {                         
  constructor () {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }
  
  render () {
    stroke(this.layerColor)
    strokeWeight(this.thinStroke)
    noFill()
    push()
    // translate(width / 2, height / 2)
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class OutlineShape extends Layer {
  constructor () {
    super()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    this.hexagonTrue = randomSelectTwo()
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    // translate(width / 2, height / 2)
    if (this.hexagonTrue) {
      rotate(this.angle / 2) 
      hexagon(0, 0, CRYSTAL_SIZE / 2)
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    pop()
  }
}

class SimpleLines extends Layer {
  constructor () {
    super()
    this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25) 
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
    this.weight = randomSelectTwo() ? 1 : 3
    this.angle = TWO_PI / this.numShapes
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    // translate(width / 2, height / 2)
    for (let i = 0; i < TWO_PI; i += this.angle) {
      line(this.start * this.step, 0, this.stop * this.step, 0)
      rotate(this.angle)
    }
    pop()
  }
}

class DottedLines extends Layer {                           
  constructor () {
    super()
    this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    this.angle = TWO_PI / this.numShapes
    this.shapeSize = 3
    this.centerOffset = this.singleStep
  }

  render () {
    fill(this.layerColor)
    noStroke()
    push()
    // translate(width / 2, height / 2)
    for(let i = 0; i <= this.numShapes; i++) {
      for(let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.singleStep) {
        rect(x, 0, this.shapeSize, this.shapeSize)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class CenteredShape extends Layer {                     
  constructor () {
    super()
    this.randomShape = random(0, 1)
    this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut)) * this.singleStep
  }

  render () {
    fill(this.layerColor)
    noStroke()
    push()
    // translate(width / 2, height / 2)
    if (this.randomShape < 0.1) {
      rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)
    } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
      ellipse(0, 0, this.shapeSize, this.shapeSize)
    } else if (this.randomShape >= 0.6) {
      rotate(this.angle / 2) 
      hexagon(0, 0, this.shapeSize)
    }
    pop()
  }
}

class RingOfShapes extends Layer {                    
  constructor () {
    super()
    this.steps = floor(random(1, this.stepsOut))
    this.center = this.steps * this.singleStep
    this.randomShape = random(0, 1)
    this.direction = randomSelectTwo() // used for triangle only
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

    if (this.steps < this.stepsOut / 2) {
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if (this.steps > this.stepsOut / 2) {
      this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else {
      this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
    }
  }

  render () {
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    // translate(width / 2, height / 2)
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        ellipse(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 ** this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.66) {
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class SteppedHexagons extends Layer {                 
  constructor () {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
    this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15
    this.singleStep = ((CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    // translate(width / 2, height / 2)
    rotate(this.angle / 2) 
    for (let i = 1; i < this.numSteps + 1; i++) {
      hexagon(0, 0, this.centerOffset + (i * this.singleStep))
    }
    pop()
  }
}

class TestLines extends Layer {
  constructor ({lines, circle}) {
    super()
    this.linesTrue = lines
    this.circleTrue = circle
    this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2
    this.angle = TWO_PI / this.numShapes
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.thickStroke)
    push()
    // translate(width / 2, height / 2)
    if (this.linesTrue) {
      for (let i = 0; i < TWO_PI - 0.1; i += this.angle) { 
        line(0, 0, 0, CRYSTAL_SIZE / 2)                  
        rotate(this.angle)
      }
    }
    if (this.circleTrue) {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)            
    }
    pop()
  }
}
