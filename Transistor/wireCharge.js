class wireCharge {
	constructor(x, y) {
		this.position = createVector(x, y);
		this.velocity = p5.Vector.random2D().mult(4); // Initial random velocity
		this.show = true;
		this.passedDest = [0];
		this.speed = random(6, 10);
	}

	display() {
		fill("red");
		noStroke();

		if (
			this.position.x < base.innerBatteryX &&
			this.position.y < base.y - base.metalHeight
		) {
			fill(...color.electron);
		} else if (
			this.position.x > base.innerBatteryX &&
			this.position.y < base.y - base.metalHeight * 2
		) {
			fill(...color.electron);
		}
		ellipse(this.position.x, this.position.y, 10);
	}

	update() {
		this.position.add(this.velocity);
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
	}
}
