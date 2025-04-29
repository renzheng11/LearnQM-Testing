// !!! comments where changes need to be made

class Charge {
	constructor(x, y, type, id, age) {
		this.x = x;
		this.y = y;
		this.id = id;
		this.position = createVector(x, y);
		this.bandPosition = createVector(x, y);
		this.bandOrigin = createVector(0, 0);
		this.diameter = 8;
		this.recomDiameter = 40;
		this.maxspeed = 5;
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
		this.chargeCreated = false;

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

	//find closest value of the y value of the generated point
	findClosestValue(array, targetX) {
		// Initialize closest diff with a very large value
		let closestDiff = 1000;
		// Initialize closestBValue as undefined
		let closestBValue;

		for (let i = 0; i < array.length; i++) {
			// Calculate absolute difference between targetX and current x value
			let diff = Math.abs(targetX - array[i][0]);
			// If this difference is less than closest diff found so far
			if (diff < closestDiff) {
				// Update closest diff and closestBValue
				closestDiff = diff;
				closestBValue = array[i][1]; // Assuming 'b' is represented as second element in sub-array
			}
		}

		// Return the 'b' value of the element with the x value closest to targetX
		return closestBValue;
	}
	draw() {
		// draw charges in transistor

		let size = 8; // fixed charges
		if (this.show) {
			if (this.type == "e") {
				//electron
				fill(...color.electron, this.appear);
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "h") {
				//hole
				noFill();
				stroke(...color.hole, this.appear);
				strokeWeight(1);
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
				stroke(255, 60);
				strokeWeight(5);
				line(this.x - size, this.y, this.x + size, this.y);
				line(this.x, this.y - size, this.x, this.y + size);
				noStroke();
				strokeWeight(1);
			} else if (this.type == "mp") {
				let add = 20;
				// positive charge in metal
				stroke(255, 160);
				strokeWeight(4);
				line(
					this.x - size / 1.2,
					this.y + size / 1.2,
					this.x + size / 1.2,
					this.y + size / 1.2
				);
				line(this.x, this.y, this.x, this.y + (size * 2) / 1.2); // up and down
				noStroke();
			} else if (this.type == "fn") {
				//plus sign add electron
				stroke(255, 60);
				strokeWeight(5);
				line(this.x - size, this.y, this.x + size, this.y);
				noStroke();
				strokeWeight(1);
			} else if (this.type == "ge") {
				// generation effect
				strokeWeight(1);
				fill(...color.generation, this.opacity);
				stroke(...color.generation, this.opacity);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "re" && this.recomDiameter > 0) {
				// recombination effect
				stroke(...color.recom, this.opacity);
				fill(...color.recom, this.opacity / 4);
				strokeWeight(1);
				ellipse(this.position.x, this.position.y, this.recomDiameter);
			}
			this.drawOnBand();
		}

		// draw charges in band diagram
	}

	drawOnBand() {
		if (this.type == "e") {
			// draw electrons on band
			fill(...color.electron, 160);
			noStroke();
			if (
				this.bandPosition.y > 10 &&
				this.position.y < base.y + base.bandThreshold
			) {
				ellipse(this.position.x, this.bandPosition.y, 5);
			}
			this.bandPosition.y = this.bandOrigin.y - (this.botz * 8.8 * 2 * 0.1) / 3;
		} else if (this.type == "h") {
			// draw holes on band
			noFill();
			stroke(...color.hole, 160); //
			strokeWeight(1);
			if (
				this.bandPosition.y > 10 &&
				this.position.y < base.y + base.bandThreshold
			) {
				ellipse(this.position.x, this.bandPosition.y, 5);
			}
			this.bandPosition.y = this.bandOrigin.y + (this.botz * 8.8 * 2 * 0.1) / 3;
		}
	}

	updateOpacity() {
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
			this.opacity -= 20;
			this.diameter += 3;
		} else if (this.type == "re") {
			this.opacity -= 20;
			this.recomDiameter -= 3;
		}
	}

	moveBandDiagram() {
		let band;
		this.type == "e" ? (band = electronBand) : (band = holeBand);
		let closestToBand = findClosestValue(band, this.position.x);
		this.bandOrigin.y = closestToBand;

		if (this.type == "e") {
			//             //electron
			let closestPos = findClosestValue(electronBand, this.position.x);
			if (this.bandPosition.y > closestPos) {
				// this.velocity.x = Math.abs(this.velocity.x);
				// this.position.add(this.velocity.x);
			}
		} else {
			//hole
			let closestPos = findClosestValue(holeBand, this.position.x);
			if (this.bandPosition.y < closestPos) {
				// this.velocity.x = -Math.abs(this.velocity.x);
				// this.position.add(this.velocity.x);
			}
		}

		if (this.chargeType == "e") {
			//electron
			///////find the near_index: find where the electron appear (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(
				electronBand[0].y - this.bandPosition.y
			);
			for (let i = 0; i < electronBand.length; i++) {
				let difference = Math.abs(electronBand[i].y - this.bandPosition.y);

				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
		if (this.chargeType == "h") {
			//hole
			///////find the near_index: find where the hole appear  (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(holeBand[0].y - this.bandPosition.y);
			for (let i = 0; i < holeBand.length; i++) {
				let difference = Math.abs(holeBand[i].y - this.bandPosition.y);
				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
	}

	moveToSource() {
		this.position.x -= base.width - base.sourceWidth;
		this.velocity.y = -this.velocity.y;
	}

	update() {
		this.accelerate(); // update this.velocity baed on EF
		//this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity); // Update this.position dimd on its velocity
		this.x = this.position.x;
		this.y = this.position.y;
		this.moveBandDiagram();
		// this.movingVelocity = 1.6;

		//botzDistribution[Math.floor(Math.random() * botzDistribution.length)]; // UNCOMMENT!
		//this.botz = this.movingVelocity;

		//this.velocity = this.direction.mult(this.movingVelocity);

		////////////////////// avoid going into the bandgap (added by Azad)

		////////////////////////////////////////////////

		// Bounce off boundaries
		let buffer = 0;

		if (this.position.x - this.diameter < base.x + buffer) {
			// left
			this.velocity.x = -this.velocity.x;
			this.position.x += 8;
		}
		if (this.position.x + this.diameter > base.endX - buffer) {
			// right
			this.velocity.x = -this.velocity.x;
			this.position.x -= 8;
		}

		// top
		if (this.position.y - this.diameter < base.y + buffer) {
			// if outside of drain  - bounce of top
			if (this.position.x < base.drainX) {
				// bounce off top
				this.velocity.y = -this.velocity.y;
				this.position.y += 8;
			} else if (this.position.x > base.drainX) {
				// if vd on & vg voltage is large enough

				let vdFlowConditions = [
					vdCharge == 0.1 && vgCharge == 1.0, // 0
					vdCharge == 0.3 && vgCharge == 1.0, // 1
					vdCharge == 1.0 && vgCharge == 1.0, // 2
					vdCharge == 0.1 && vgCharge == 1.3, // 3
					vdCharge == 0.3 && vgCharge == 1.3, // 4
					vdCharge == 1.0 && vgCharge == 1.3, // 5
				];

				// probability of leaving drain and moving to source
				let multiplier = 1;
				let vdFlowProb = [
					Math.random() * 6 < multiplier * 0.5, // 0 - for flow = .5
					Math.random() * 6 < multiplier * 1, // 1 - for flow = 1
					Math.random() * 6 < multiplier * 1.2, // 2 - for flow = 1.2
					Math.random() * 6 < multiplier * 2, // 3 - for flow = 2
					Math.random() * 6 < multiplier * 5, // 4 - for flow = 5
					Math.random() * 6 < multiplier * 6, // 5 - for flow = 6
				];

				if (vgCharge == 0 || vgCharge == 0.5 || vdCharge == 0) {
					// no VD flow
					this.velocity.y = -this.velocity.y;
					this.position.y += 8;
				} else if (vdFlowConditions[0] && vdFlowProb[0]) {
					this.moveToSource();
				} else if (vdFlowConditions[1] && vdFlowProb[1]) {
					this.moveToSource();
				} else if (vdFlowConditions[2] && vdFlowProb[2]) {
					this.moveToSource();
				} else if (vdFlowConditions[3] && vdFlowProb[3]) {
					this.moveToSource();
				} else if (vdFlowConditions[4] && vdFlowProb[4]) {
					this.moveToSource();
				} else if (vdFlowConditions[5] && vdFlowProb[5]) {
					this.moveToSource();
				} else {
					// bounce off top of drain
					this.velocity.y = -this.velocity.y;
					this.position.y += 8;
				}
			}
		}

		// Bottom
		if (this.position.y > base.endY) {
			this.direction.y = 10;
			this.show = 0;

			// if holes leave the bottom into the metal, bring some back to keep the number of holes consistent (create new charges that represent existing charges coming from metal)
			if (this.type == "h" && !this.chargeCreated) {
				// holes
				var newCharge = new Charge(
					random(base.x, base.endX),
					base.endY,
					"h",
					chargeID,
					"g"
				);
				newCharge.direction = createVector(random(-1, 1), -1);
				newCharge.movingVelocity = this.movingVelocity;
				newCharge.velocity = createVector(0, -10);
				newCharge.botz = this.botz;
				this.chargeCreated = true;
				chargeID++;
				holes.push(newCharge);
			}
		}

		// Scatter
		if (willScatter && random(1)) {
			this.direction = createVector(random(-1, 1), random(-1, 1));
			this.botz =
				botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
			this.movingVelocity = this.botz;
			this.velocity = p5.Vector.mult(this.direction, this.movingVelocity);

			let band;
			this.type == "e" ? (band = electronBand) : (band = holeBand);
			// move position on band diagram
			// if (this.type == "e") {
			// 	//electron
			// 	let closestToBand = findClosestValue(electronBand, this.position.x);

			// 	// this.bandOrigin.x = findClosestValue(electronBand, this.position.x);
			// 	// this.bandPosition.y =
			// 	// 	this.bandOrigin.x - (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
			// }
			// if (this.type == "h") {
			// 	//hole
			// 	let closestToBand = findClosestValue(electronBand, this.position.x);
			// 	// this.bandPosition.y =
			// 	// 	this.bandOrigin.y + (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
			// }
			let closestToBand = findClosestValue(band, this.position.x);
			this.bandOrigin.y = closestToBand;
		}
	}

	accelerate() {
		//Need to Read the electric field at (this.position.x,this.position.y)
		//The electric feild that we read has x and y components. Let's call them Ex and Ey. For now I just give them values.

		// READ EF DATA FROM current efGrid profile ==============================================================
		// subtract base x&y to get dimensions within transistor

		width: 640;
		height: 320;
		let Ex;
		let Ey;

		let x = this.x - base.x;
		let y = this.y - base.y;

		if (x < 640 && x > 0 && y < 320 && y > 0) {
			let row = Math.floor(y / 10); // 7 - 7th row
			let col = Math.floor(x / 10); // 3.5 - round up = 4th row

			Ey = efGrid[row][col].efy / 2;
			if (Ey < 6000) {
				Ey = 0;
			} else {
				Ey = Ey / 100000;
			}

			// CHANGE PROFILE - change name of efGrid
			Ex = efGrid[row][col].efx;

			if (Ex < 3000 && Ex > -3000) {
				Ex = 0;
			} else {
				Ex = Ex / 100000;
			}

			if (row < 5) {
				Ex = efGrid[0][col].efx;
				Ex = Ex / 100000;
			}
			if (vgCharge == 1.3) {
				if (vdCharge == 0) {
					if (col > 8 && col < 32 && row < 3) {
						Ex = -0.01;
					}
					if (col > 33 && col < 57 && row < 3) {
						Ex = 0.01;
					}
				}

				if (vdCharge == 0.1) {
					if (Ex > 0 && row < 3) {
						Ex = -Ex;
					}
					if (row < 3) {
						Ex = 3 * Ex;
					}
					if (col > 3 && col < 14 && row < 5) {
						Ex = -0.1;
					}
				}

				if (vdCharge == 0.3) {
					if (Ex > 0 && row < 3) {
						Ex = -Ex;
					}
					if (row < 3) {
						Ex = 3 * Ex;
					}
					if (col > 3 && col < 14 && row < 5) {
						Ex = -0.1;
					}
				}

				if (vdCharge == 1) {
					if (Ex > 0 && row < 3) {
						Ex = -Ex;
					}
					if (row < 3) {
						Ex = 3 * Ex;
					}
					if (col > 3 && col < 14 && row < 5) {
						Ex = -0.1;
					}
					if (
						this.type == "h" &&
						col < 49 - 0.3 * row &&
						col > 46 - 0.3 * row
					) {
						Ex = 0.5;
						Ey = -0.5;
					}
				}
			}
			// Ey = efGrid[row][col].efy / 2;
			// if (Ey < 6000) {
			// 	Ey = 0;
			// } else {
			// 	Ey = Ey / 100000;
			// }
		} else {
			Ex = 0;
			Ey = 0;
		}
		let col = Math.floor((640 - 120) / 10);

		//We need to multpliy the elctric feild by a constant to convert it to accelration on our screen. We need to find the value with trial and error. For now I just use a factor of 5.

		let randomXdirection = createVector(random(-1, 1), 1);
		let randomYdirection = createVector(1, random(-1, 1));

		let accelFactor = 5; ////It might be better to make it a global variable that we define. We can do that later.
		this.accel.x = Ex * accelFactor;
		this.accel.y = Ey * accelFactor;

		if (this.type == "e") {
			//if an electron, accel in in the opposite direction of the electric field.
			this.accel.x = -this.accel.x;
			this.accel.y = -this.accel.y;
		}

		if (this.type == "h") {
			//if an electron, accel in in the opposite direction of the electric field.
			this.accel.x = this.accel.x / 10;
			this.accel.y = this.accel.y;
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
