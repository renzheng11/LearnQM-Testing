class wireCharge {
	constructor(x, y, loop) {
		this.position = createVector(x, y);
		this.velocity = createVector(random(4, 12), 0); // Initial random velocity
		this.show = true;
		this.passedDest = [0];
		this.speed = random(8, 12); // 8, 12, buffer = 8 working
		this.loop = loop;
		this.gateStop = random(0, 360);
	}

	display() {
		noStroke();

		this.position.x > base.innerBatteryX &&
			this.position.y < base.y - base.metalHeight * 2;
		fill(...color.electron);
		ellipse(this.position.x, this.position.y, 10);
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

		if ((this.loop = 1)) {
			// outer loop
			if (this.position.y < base.outerY) {
				this.position.y += 1;
			}
			if (this.position.y > base.outerY) {
				this.position.y -= 1;
			}
		} else {
			// inner loop
			if (this.position.y < base.innerY) {
				this.position.y += 1;
			}
			if (this.position.y > base.innerY) {
				this.position.y -= 1;
			}
		}
	}
}
