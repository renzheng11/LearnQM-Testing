class wireCharge {
	constructor(x, y, loop) {
		this.position = createVector(x, y);
		// this.velocity = createVector(random(4, 12), 0); // Initial random velocity
		this.velocity = createVector(10, 0); // Initial random velocity
		this.show = true;
		this.passedDest = [0];
		this.speed = 20; // at this speed, the charges move consistently on the wires, at lower or hire speeds sometimes it goes outside the wire due to dimensions
		this.loop = loop;
		this.gateStop = random(0, 360);
	}

	draw() {
		noStroke();
		let show = false;

		// outer loop - only show if above top metals (metal is treated as visual black box)
		if (this.loop == "vd") {
			if (this.position.y < base.y - base.metalHeight) {
				show = true;
			}
		}

		// inner loop
		// initial y is randomized below metal so they appear to be flowing out separately.. don't show if position is below metal/insulator
		// if (this.loop == 0) {
		// if on right side (where top metal is higher)
		if (this.loop == "vg") {
			show = true;
			// insulator
			if (
				this.position.x > base.wire.leftMetal.x + 24 &&
				this.position.y > base.y - base.metalHeight * 2
			) {
				show = false;
			} else if (
				this.position.x < base.wire.leftMetal.x + 24 &&
				this.position.y > base.y - base.metalHeight
			) {
				show = false;
			}
		}

		// }

		if (show) {
			fill(...color.electron);
			ellipse(this.position.x, this.position.y, 8);
		}
	}

	update() {
		this.position.add(this.velocity);

		let buffer = 18;
		if (
			this.position.x < base.x + base.sourceWidth + buffer ||
			this.position.x > base.endX - base.sourceWidth - buffer
		) {
			this.velocity.x *= -1;
		}
	}

	updatePassed(value) {
		this.passedDest.push(value);
	}

	clearPassed() {
		this.passedDest = [0];
	}

	hide() {
		this.show = false;
	}

	move(destination) {
		// Calculate the vector pointing from the current position to the destination
		let direction = createVector(
			destination.x - this.position.x,
			destination.y - this.position.y
		);

		// Normalize the direction vector to have a length of 1
		direction.normalize();

		// Scale the direction vector by the ball's speed
		if (this.loop == "vd") {
			direction.mult(15); // mult(speed)
		} else {
			direction.mult(20); // if above 10, will go above wire (height is divisble by 10?)
		}

		// Update the position based on the direction vector
		this.position.add(direction);

		if (this.loop == "vd") {
			// outer loop
			// horizontal
			if (this.position.y < base.vdY) {
				// this.position.y += 1;
			}
			if (this.position.y > base.vdY) {
				// this.position.y -= 1;
			}

			// vertical
			// if (this.position.x < base.wire.leftMetal.x - 4) {
			// 	if (this.position.x < base.wire.leftMetal.x) {
			// 		this.position.x += 1;
			// 	}
			// 	if (this.position.x > base.wire.leftMetal.x) {
			// 		this.position.x -= 1;
			// 	}
			// }
		} else {
			// inner loop
			if (this.position.y < base.vgY) {
				// this.position.y += 1;
			}
			if (this.position.y > base.vgY) {
				// this.position.y -= 1;
			}
			// if (this.position.x < base.wire.leftMetal.x - 4) {
			// vertical
			if (this.position.x < base.wire.leftMetal.x) {
				// this.position.x += 1;
			}
			if (this.position.x > base.wire.leftMetal.x) {
				// this.position.x -= 1;
			}
		}
	}
}
