class Crystal {
  constructor(posX, posY) {
    this.x = posX
    this.y = posY
    this.layers = []

    layerConstructors.forEach(lcon => {             
      let picker = random(0, 1)
      if (picker > lcon.weight) {
        const layer = lcon.init()
        this.layers.push(layer)
      }
    })
  }

  render () {
    push()
    translate(this.x, this.y)
    this.layers.forEach(layer => {
      layer.render()
    })
    pop()
  }
}