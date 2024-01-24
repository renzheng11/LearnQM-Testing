class Electron {
  constructor(x, y, radius, boxX, boxY, boxW, boxH, lit, avail) {
    this.position = createVector(x, y)
    this.velocity = p5.Vector.random2D().mult(2.5) // Initial random velocity
    this.radius = radius
    this.boxX = boxX
    this.boxY = boxY
    this.boxW = boxW
    this.boxH = boxH
    this.animate = false
    this.show = true
    this.passedDest = [0]
    this.pushed = false
    this.lit = lit
    this.message = "instance"
    this.moveBool = false
    this.avail = avail
  }
  updateMove(value) {
    this.moveBool = value
  }

  updateAvail(value) {
    this.avail = value
  }

  updateMessage(str) {
    this.message = str
  }
  updateBox(boxX, boxY, boxW, boxH) {
    this.boxX = boxX
    this.boxY = boxY
    this.boxW = boxW
    this.boxH = boxH
  }

  updatePushed(value) {
    this.pushed = value
  }

  updateDim(value) {
    this.dim = value
  }

  updatePassed(value) {
    this.passedDest.push(value)
  }

  updateAnimate(value) {
    this.animate = value
  }

  updateShow(value) {
    this.show = value
  }

  updateLit(value) {
    this.lit = value
  }

  updateVelocity(value) {
    this.velocity = value
  }

  update() {
    // Move the charge
    this.position.add(this.velocity)

    let buffer = 6

    let left = this.boxX + buffer

    let right = this.boxX + this.boxW - buffer
    let top = this.boxY + buffer
    let bottom = this.boxY + this.boxH - buffer

    if (this.position.x < left || this.position.x > right - this.radius) {
      this.velocity.x *= -1
    }
    if (this.position.y < top || this.position.y > bottom - this.radius) {
      this.velocity.y *= -1
    }
  }

  move(destination) {
    // Calculate the vector pointing from the current position to the destination
    let direction = createVector(
      destination.x - this.position.x,
      destination.y - this.position.y
    )

    // Normalize the direction vector to have a length of 1
    direction.normalize()

    // Scale the direction vector by the ball's speed
    direction.mult(6)

    // Update the position based on the direction vector
    this.position.add(direction)
  }

  display(dim) {
    // Draw the electron
    let colorFade = color.neg.concat(fade)

    this.animate || this.passedDest.includes(4)
      ? fill(color.neg)
      : fill(colorFade) // negative
    noStroke()
    ellipse(this.position.x, this.position.y, this.radius * 1.7)
  }
}

class Charge {
  constructor(type, x, y, lit) {
    this.type = type
    this.x = x
    this.y = y
    this.animated = false
    this.lit = false
  }

  updateAnimated(bool) {
    this.animated = bool
  }
  updateType(type) {
    this.type = type
  }

  updateLit(value) {
    this.lit = value
  }
}
