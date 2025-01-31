class Charge {
	constructor(x, y, type, id, age) {
		this.x = x;
		this.y = y;
		this.id = id;
		this.position = createVector(x, y);
		this.positionBand = createVector(x, y);
		this.diameter = 10;
		this.maxspeed = 15;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.accel = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.type = type; // "e: electron", "h: hole", "ge: generation effect", "re: recombination effect"
		this.age = age; // "i: initial, g: generated"
		this.location; // "s: source, "d: drain""
		this.show = true;
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 0;
		this.appear = 0;
		this.target = createVector(0, 0);
		this.dead = 0;
		this.opacity = 255;
		this.color = null;

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

	hide() {
		this.show = false;
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
		if (this.show) {
			if (this.type == "e") {
				//electron
				fill(...color.electron, this.appear);
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "eef") {
				fill("red");
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "h") {
				//hole
				noFill();
				stroke(...color.hole, this.appear);
				strokeWeight(1);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "hef") {
				noFill();
				stroke("blue");
				strokeWeight(2);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "te") {
				// temp electron for recombination effect
				fill(...color.electron, this.opacity);
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "th") {
				// temp hole for recombination effect
				noFill();
				stroke(...color.hole, this.opacity);
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
				// recombination effect
				stroke(...color.hole, this.opacity);
				noFill();
				strokeWeight(1);
				// ellipse(this.position.x, this.position.y, this.diameter);
				ellipse(this.position.x, this.position.y, this.diameter);
			}
		}
	}

	update() {
		if (this.type == "e" || this.type == "h") {
			// slowly appear at beginning
			if (this.appear < 255) {
				this.appear += 20;
			}
		} else if (this.type == "te") {
			this.opacity -= 10;
		} else if (this.type == "th") {
			this.opacity -= 10;
		} else if (this.type == "ge") {
			this.opacity -= 15;
			this.diameter += 3;
		} else if (this.type == "re") {
			this.opacity -= 10;
			this.diameter -= 3;
		}
	}

	move() {
		this.accelerate(); // update this.velocity baed on EF
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity); // Update this.position dimd on its velocity

		this.movingVelocity = 1.6;

		// random_botz[Math.floor(Math.random() * random_botz.length)]; // UNCOMMENT!
		this.botz = this.movingVelocity;

		this.velocity = this.direction.mult(this.movingVelocity);

		////////////////////// avoid going into the bandgap (added by Azad)

		// UNCOMMENT ONCE YOU HAVE BANDS!
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

		// UNCOMMENT ! ?
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
		let buffer = 0;

		if (this.position.x - this.diameter < base.x + buffer) {
			// l
			this.velocity.x = -this.velocity.x;
			this.position.x += 8;
		}
		if (this.position.x + this.diameter > base.endX - buffer) {
			// r
			this.velocity.x = -this.velocity.x;
			this.position.x -= 8;
		}
		if (this.position.y - this.diameter < base.y + buffer) {
			// t
			this.velocity.y = -this.velocity.y;
			this.position.y += 8;
		}
		if (this.position.y + this.diameter > base.endY - buffer) {
			// b
			this.velocity.y = -this.velocity.y;
			this.position.y -= 8;
		}
	}

	accelerate() {
		//Need to Read the electric field at (this.position.x,this.position.y)
		//The electric feild that we read has x and y components. Let's call them Ex and Ey. For now I just give them values.

		// check if in zones with EF
		// check if x zone

		// console.log("efmin", base.efMin);
		// console.log("pos.x", this.position.x);
		// console.log("x > base.efmin", this.position.x > base.efMin);

		let Ex = 0;
		let Ey = 0;

		// --- SOURCE electric field ---
		// check in x zone
		if (
			this.position.x > base.ef.source.xMin &&
			this.position.x < base.ef.source.xMax
		) {
			// check in y zone within x zone
			if (this.position.y < base.ef.source.yMax) {
				//  base.efYMax
				// in EF zone
				let xDistance = this.position.x - base.x;
				let yDistance = this.position.y - base.y;
				Ex = xDistance * 160;
				// Ey = yDistance * 160;

				// this.diameter = 24;
			}
		} else if (
			this.position.y > base.ef.source.yMin &&
			this.position.y < base.ef.source.yMax
		) {
			if (this.position.x < base.ef.source.xMax) {
				// base.efXMax
				// in EF zone
				let xDistance = this.position.x - base.x;
				let yDistance = this.position.y - base.y;
				// Ex = xDistance * 160;
				Ey = yDistance * 160;
				// this.diameter = 24;
			}
		}

		// --- DRAIN electric field ---
		if (
			this.position.x > base.ef.drain.xMin &&
			this.position.x < base.ef.drain.xMax
		) {
			// check in y zone within y zone
			if (this.position.y < base.ef.drain.yMax) {
				//  base.efYMax
				// in EF zone
				let xDistance = this.position.x - base.x;
				let yDistance = this.position.y - base.y;
				Ex = -xDistance * 160;
				// Ey = yDistance * 160;

				// this.diameter = 24;
			}
		} else if (
			this.position.y > base.ef.drain.yMin &&
			this.position.y < base.ef.drain.yMax
		) {
			// check if within x
			if (this.position.x > base.ef.drain.xMin) {
				// base.efXMax
				// in EF zone
				let xDistance = this.position.x - base.x;
				let yDistance = this.position.y - base.y;
				// Ex = xDistance * 160;
				Ey = yDistance * 160;
				// this.diameter = 24;
			}
		}

		// NOT IN EF
		// else {
		// 	this.diameter = 10;
		// }

		//We need to multpliy the elctric feild by a constant to convert it to accelration on our screen. We need to find the value with trial and error. For now I just use a factor of 5.

		let accelFactor = 5; ////It might be better to make it a global variable that we define. We can do that later.
		this.accel.x = Ex * accelFactor;
		this.accel.y = Ey * accelFactor;

		if (this.type == "e") {
			//if an electron, accel in in the opposite direction of the electric field.
			this.accel.x = -this.accel.x;
			this.accel.y = -this.accel.y;
		}

		this.velocity.add(this.accel);
	}

	seek(target) {
		this.target = target;
		this.desired = p5.Vector.sub(target, this.position);

		this.desired.setMag(this.maxspeed);

		this.steer = p5.Vector.sub(this.desired, this.velocity);
		this.steer.limit(this.maxforce);

		this.applyForce(this.steer);
	}

	applyForce(force) {
		this.accel.add(force);
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
