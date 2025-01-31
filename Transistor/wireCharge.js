class wireCharge {
	constructor(x, y, loop) {
		this.position = createVector(x, y);
		this.velocity = createVector(random(4, 12), 0); // Initial random velocity
		this.show = true;
		this.passedDest = [0];
		this.speed = random(12, 16); // 8, 12, buffer = 8 working
		this.loop = loop;
		this.gateStop = random(0, 360);
	}

	display() {
		noStroke();
		let show = false;

		// outer loop - only show if above top metals (metal is treated as visual black box)
		if (this.position.y < base.y - base.metalHeight) {
			show = true;
		}

		// inner loop
		// initial y is randomized below metal so they appear to be flowing out separately.. don't show if position is below metal/insulator
		// if (this.loop == 0) {
		// if on right side (where top metal is higher)
		if (this.position.x > base.wire.leftMetal[0] + 24) {
			if (this.position.y > base.y - base.metalHeight * 2) {
				show = false;
			}
		}
		// }

		if (show) {
			fill(...color.electron);
			ellipse(this.position.x, this.position.y, 10);
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

	move(destination) {
		// Calculate the vector pointing from the current position to the destination
		let direction = createVector(
			destination.x - this.position.x,
			destination.y - this.position.y
		);

		// Normalize the direction vector to have a length of 1
		direction.normalize();

		// Scale the direction vector by the ball's speed
		direction.mult(this.speed);

		// Update the position based on the direction vector
		this.position.add(direction);

		// make electrons stay on line
		if (this.loop == 1) {
			// outer loop
			// horizontal
			if (this.position.y < base.outerY) {
				this.position.y += 1;
			}
			if (this.position.y > base.outerY) {
				this.position.y -= 1;
			}

			// vertical
			if (this.position.x < base.wire.leftMetal[0] - 4) {
				if (this.position.x < base.wire.leftMetal[0]) {
					this.position.x += 1;
				}
				if (this.position.x > base.wire.leftMetal[0]) {
					this.position.x -= 1;
				}
			}
		} else {
			// inner loop
			if (this.position.y < base.innerY) {
				this.position.y += 1;
			}
			if (this.position.y > base.innerY) {
				this.position.y -= 1;
			}

			// if (this.position.x < base.wire.leftMetal[0] - 4) {
			// vertical
			if (this.position.x < base.wire.leftMetal[0]) {
				this.position.x += 1;
			}
			if (this.position.x > base.wire.leftMetal[0]) {
				this.position.x -= 1;
			}
			// }
		}
	}
}
