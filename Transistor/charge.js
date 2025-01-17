class Charge {
	constructor(x, y, type, age) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.positionBand = createVector(x, y);
		this.diameter = 10;
		this.maxspeed = 15;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.type = type; // "e: electron", "h: hole", "ge: generation effect", "re: recombination effect"
		this.age = age; // "i: initial, g: generated"
		this.location; // "s: source, "d: drain""
		this.show = 1;
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 0;
		this.alpha = 255;
		this.appear = 0;
		this.target = createVector(0, 0);
		this.dead = 0;
		this.opacity = 255;

		// setTimeout(() => {
		// 	this.checkProperties();
		// }, 8000);
	}

	// checkProperties() {
	// 	// Check if the top is 1 and origin is {x: 0, y: 0}

	// 	// if (appliedVoltage <= 0) { // UNCOMMENT!!!
	// 	if (this.type == "e") {
	// 		if (this.position.x < (550 + (400 / 8) * voltageDepletionWidth) * sx) {
	// 			this.show = 0;
	// 		}

	// 		// console.log("The conditions are met for a vehicle instance.");
	// 	} else if (this.type == "h") {
	// 		//electron

	// 		if (this.position.x > (550 - (400 / 8) * voltageDepletionWidth) * sx) {
	// 			this.show = 0;
	// 		}

	// 	}
	// 	// }
	// }

	noShow() {
		this.show = 0;
	}

	deadd() {
		this.dead = 1;
	}

	opacity() {
		this.appear -= 20;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	// restart() {
	// 	this.velocity = createVector(0, 0);
	// 	this.acceleartion = createVector(0, 0);
	// 	this.movingVelocity = ((5 * parseInt(scattering_velocity)) / 5) * this.botz;
	// 	this.maxspeed = 5;
	// }

	findClosestValue(array, targetX) {
		let closestDiff = 1000;
		let closestBValue;

		for (let i = 0; i < array.length; i++) {
			let diff = Math.abs(targetX - array[i][0]);
			if (diff < closestDiff) {
				closestDiff = diff;
				closestBValue = array[i][1];
			}
		}

		return closestBValue;
	}

	display() {
		// if (this.show == 1) {
		if (this.type == "e") {
			//electron

			fill(...color.electron, this.appear);
			stroke(...color.electron, this.appear);
			ellipse(this.position.x, this.position.y, this.diameter);
		} else if (this.type == "h") {
			//hole
			noFill();
			stroke(...color.hole, this.appear);
			strokeWeight(1);
			ellipse(this.position.x, this.position.y, this.diameter);
		} else if (this.type == "fp") {
			//plus sign add electron
			stroke(255, 120);
			strokeWeight(5);
			line(this.x - 10, this.y, this.x + 10, this.y);
			line(this.x, this.y - 10, this.x, this.y + 10);
			noStroke();
			strokeWeight(1);
		} else if (this.type == "fn") {
			//plus sign add electron
			stroke(255, 120);
			strokeWeight(5);
			line(this.x - 10, this.y, this.x + 10, this.y);
			// line(this.x, this.y - 10, this.x, this.y + 10);
			noStroke();
			strokeWeight(1);
		} else if (this.type == "ge") {
			// generation effect
			strokeWeight(1);
			fill(...color.electron, this.opacity);
			stroke(...color.electron, this.opacity);
			ellipse(this.position.x, this.position.y, this.diameter);
		} else if (this.type == "re") {
			stroke(...color.hole, this.alpha);
			strokeWeight(2);
			noFill();
			ellipse(this.position.x, this.position.y, this.diameter);
		}
	}

	update() {
		if (this.color == "ge") {
			this.opacity -= 15;
			this.diameter += 3;
		} else if (this.color == "re") {
			this.opacity -= 15;
			this.diameter -= 3;
		}
	}

	move() {
		// this.accelerate(); // accelerate() will update this.velocity
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity); // Update this.position dimd on its velocity

		this.movingVelocity = 1.6;

		// random_botz[Math.floor(Math.random() * random_botz.length)]; // UNCOMMENT!
		this.botz = this.movingVelocity;

		this.velocity = this.direction.mult(this.movingVelocity);

		////////////////////// avoid going into the bandgap (added by Azad)

		// UNCOMMENT ONCE YOU HAVE BANDS!!!
		// if (this.type == "e") {
		// 	//             //electron
		// 	let zz = findClosestValue(electronBand, this.position.x);
		// 	if (this.positionBand.y > zz) {
		// 		this.velocity.x = Math.abs(this.velocity.x);
		// 		this.position.add(this.velocity.x);
		// 	}
		// } else {
		// 	//hole
		// 	let zz = findClosestValue(holeBand, this.position.x);
		// 	if (this.positionBand.y < zz) {
		// 		this.velocity.x = -Math.abs(this.velocity.x);
		// 		this.position.add(this.velocity.x);
		// 	}
		// }
		////////////////////////////////////////////////

		// UNCOMMENT !!! ?
		// if (this.position.x > 940 * sx && opening == 1 && this.straight == 0) {
		// 	this.direction.x = 10;
		// 	this.show = 0;
		// 	if (this.type == "e" && !this.chargeCreated) {
		// 		var newCharge = new Charge(950 * sx, random(400, 760) * sy, 10, "e");
		// 		newCharge.direction = createVector(-1, random(-1, 1));
		// 		newCharge.movingVelocity = this.movingVelocity;
		// 		newCharge.velocity = createVector(-10, 0);
		// 		newCharge.botz = this.botz;
		// 		generatedElectrons.push(newCharge);
		// 		this.chargeCreated = true;
		// 	}
		// }
		// Bounce off boundaries
		let buffer = 24;

		let boundary = []; // l, r, t, b
		boundary = [base.x, base.x + base.width, base.y, base.endY];

		// if (this.type == "h") {
		// 	boundary = [base.x, base.x + base.width, base.y, base.endY];
		// } else if (this.type == "e" && this.age == "i") {
		// 	boundary = [base.x, base.sourceEndX, base.y, base.sourceEndY];
		// }

		// bounce holes off source
		// if (this.type == "h") {
		// 	// if hole within source x, bounce off source y
		// 	if (this.position.x < base.sourceEndX) {
		// 		if (this.position.y < base.sourceEndY + buffer) {
		// 			this.direction.y *= -1;
		// 		}
		// 	}

		// 	// if hole within source y, bounce off source x
		// 	if (this.position.y < base.sourceEndY) {
		// 		if (this.position.x < base.sourceEndX + buffer) {
		// 			this.direction.x *= -1;
		// 		}
		// 	}
		// }

		//////////////////Note from Azad, We don't need these boundries between source, body and drain. The electric field will take care of them.
		//////////////////We only need to enforce the boundries at the 4 sides of the device. The one at the bottom would be an open boundry and the other three will
		///////////////// be hard boudnries that electrons and holes will just bounce back.

		//////////////////////////////////////////////////////
		// bounce holes off drain
		// if (this.type == "h") {
		// 	// if hole within drain x, bounce off drain y
		// 	if (this.position.x > base.drainX) {
		// 		if (this.position.y < base.drainEndY + buffer) {
		// 			this.direction.y *= -1;
		// 		}
		// 	}
		// 	// if hole within drain y, bounce off drain x
		// 	if (this.position.y < base.drainEndY) {
		// 		if (this.position.x > base.drainX - buffer) {
		// 			this.direction.x *= -1;
		// 		}
		// 	}
		// }

		if (this.position.x - this.diameter < boundary[0] + buffer) {
			// l
			this.direction.x *= -1;
		}
		if (this.position.x + this.diameter > boundary[1] - buffer) {
			// r
			this.direction.x *= -1;
		}
		if (this.position.y < boundary[2] + buffer) {
			// t
			this.direction.y *= -1;
		}
		if (this.position.y + this.diameter > boundary[3] - buffer) {
			// b
			this.direction.y *= -1;
		}
	}

	accelerate() {
		//Need to Read the electric field at (this.position.x,this.position.y)
		//The electric feild that we read has x and y components. Let's call them Ex and Ey. For now I just give them values.
		let Ex = 1;
		let Ey = 2;

		//We need to multpliy the elctric feild by a constant to convert it to accelration on our screen. We need to find the value with trial and error. For now I just use a factor of 5.

		let AccelerationFactor = 5; ////It might be better to make it a global variable that we define. We can do that later.
		this.acceleration.x = Ex * AccelerationFactor;
		this.acceleration.y = Ey * AccelerationFactor;

		if (this.type == "e") {
			//if an electron, acceleration in in the opposite direction of the electric field.
			this.acceleration.x = -this.acceleration.x;
			this.acceleration.y = -this.acceleration.y;
		}

		this.velocity = p5.Vector.add(this.acceleration, this.velocity); //update velocity
	}

	updateAppear() {
		if (this.appear < 255) {
			this.appear += 20;
		}
	}

	updateOpacity() {
		if (this.type == "ge") {
			this.opacity -= 15;
			this.diameter += 3;
		} else if (this.type == "re") {
			this.opacity -= 15;
			this.diameter -= 3;
		}
	}
}

class Concentration {
	constructor(v, t) {
		this.v = v;
		this.t = t;
		this.counting = 1;
		this.x = 0;
	}

	update() {
		if (this.counting == 1 && count_graph == 0) {
			this.x = this.v * Math.pow(this.t * con_count * test_x_scale, 1 / 2);
		}
	}

	stop_count() {
		this.counting = 0;
	}
}
