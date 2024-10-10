class Charge {
	constructor(x, y, diameter, id, color) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.position2 = createVector(x, y);
		this.diameter = diameter;
		this.isRolling = false; // Is the ball rolling?
		this.time = 0;
		this.id = id;
		this.maxspeed = 5;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.color = color;
		this.show = 1;
		this.freeze = 0;
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 1;
		//   this.movingVelocity = this.botz*5*parseInt(scattering_velocity)/5
		this.starting_p = createVector(x, y);
		this.alpha = 255;
		this.appear = 0;
		this.override = 0;
		this.target = createVector(0, 0);
		this.assigned = 0;
		this.match;
		this.swap = 0;
		this.dead = 0;
		this.box = 0;
		this.chargeCreated = false; // add a flag variable
		this.origin = createVector(0, 0);
		this.near_index = 0;
		this.within = 0;
		this.top = 0;
		this.straight = 0;

		this.transitionTime = 100; // for example, transition over 60 frames
		this.elapsedTime = 0; // initialize this somewhere in your object

		setTimeout(() => {
			this.checkProperties();
		}, 8000);
	}

	checkProperties() {
		// Check if the top is 1 and origin is {x: 0, y: 0}
		if (this.top == 1 && appliedVoltage <= 0) {
			if (this.color == 0) {
				if (this.position.x < (550 + (400 / 8) * voltageDepletionWidth) * sx) {
					this.show = 0;
				}
				this.origin.x = 0;
				this.origin.y = 0;
				// console.log("The conditions are met for a vehicle instance.");
			} else if (this.color == 1) {
				//electron

				if (this.position.x > (550 - (400 / 8) * voltageDepletionWidth) * sx) {
					this.show = 0;
				}
				this.origin.x = 0;
				this.origin.y = 0;
			}
		}
	}

	addTime() {
		this.time += 1;
	}

	noShow() {
		this.show = 0;
	}

	deadd() {
		this.dead = 1;
	}

	zap() {
		this.appear -= 20;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	restart() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = ((5 * parseInt(scattering_velocity)) / 5) * this.botz;
		this.maxspeed = 5;
	}

	// restart(){
	//     this.movingVelocity = 5;
	// }

	applyForce(force) {
		this.acceleration.add(force);
	}

	seek(target) {
		this.target = target;
		this.desired = p5.Vector.sub(target, this.position);

		this.desired.setMag(this.maxspeed);

		this.steer = p5.Vector.sub(this.desired, this.velocity);
		this.steer.limit(this.maxforce);

		this.applyForce(this.steer);
	}

	easy_seek() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		var m = createVector(
			this.target.x - this.position.x,
			this.target.y - this.position.y
		);
		m.normalize();
		this.position.x += 20 * m.x;
		this.position.y += 20 * m.y;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		this.acceleartion = createVector(0, 0);
	}

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
		if (this.show == 1) {
			if (this.color == 0) {
				//electron

				fill(254, 246, 182, this.appear);
				stroke(254, 246, 182, this.appear);
			} else {
				//hole
				noFill();

				stroke(125, 241, 148, this.appear); //green
				// stroke(254,246,182, this.appear);
				strokeWeight(1);
			}
			ellipse(this.position.x, this.position.y, this.diameter);

			if (this.color == 0 && sceneCount != 3) {
				//middle part

				if (this.origin.x == 0) {
					// // console.log("this.origin.x=",this.origin.x);
					// // console.log("this.origin.y=",this.origin.y);
					// fill(254, 246, 182, 100);
					// stroke(254, 246, 182, 100);
					// //yellow
					// ellipse(
					// 	this.position.x,
					// 	(-electronBand[99] -
					// 		17.4 +
					// 		72 +
					// 		17.4 -
					// 		this.botz * 8.8 * 0.2 * changeV) *
					// 		sy,
					// 	5
					// );
					// this.position2.y =
					// 	(-electronBand[99] -
					// 		17.4 +
					// 		72 +
					// 		17.4 -
					// 		this.botz * 8.8 * 0.2 * changeV) *
					// 	sy;
					// this.position2.x = this.position.x;
				} else {
					if (this.straight == 0) {
						fill(254, 246, 182, 100);
						stroke(254, 246, 182, 100);
						ellipse(this.position.x, this.position2.y, 5);

						//this.position2.y = this.origin.x - 4;

						this.position2.x = this.position.x;
					} else {
						// fill(254, 246, 182, 100);
						// stroke(254, 246, 182, 100);
						// ellipse(this.position.x, electronLineData[0].y - 4, 5);

						// this.position2.y = this.origin.x - 4;
						// this.position2.x = this.position.x;
						fill(254, 246, 182, 100);
						stroke(254, 246, 182, 100);
						ellipse(this.position.x, this.position2.y, 5);

						//this.position2.y = this.origin.x - 4;

						this.position2.x = this.position.x;
					}
				}

				// ellipse(630*sx,200*sy,20)
			} else if (sceneCount != 3) {
				//hole

				let k = 0;
				let s = 0;
				if (scene(2) || scene(3)) {
					k = -30;
				}

				if (scene(1)) {
					s = 0;
				}

				if (this.origin.x == 0 && this.origin.y == 0) {
					// noFill();
					// stroke(125, 241, 148, 100); //green
					// strokeWeight(1);
					// //dense area
					// //new
					// ellipse(
					// 	this.position.x,
					// 	(s + 111 + this.botz * 8.8 * 0.2 * changeV) * sy,
					// 	5
					// );
					// this.position2.y = (s + 111 + this.botz * 8.8 * 0.2 * changeV) * sy;
					// this.position2.x = this.position.x;
				} else {
					if (this.straight == 0) {
						noFill();
						stroke(125, 241, 148, 100); //green
						strokeWeight(1);

						ellipse(this.position.x, this.position2.y, 5);

						//this.position2.y = this.origin.y + 4 - 30 * sy;

						this.position2.x = this.position.x;
					} else {
						noFill();
						stroke(125, 241, 148, 100); //green
						strokeWeight(1);

						ellipse(this.position.x, this.position2.y, 5);
						//this.position2.y = this.origin.y;
						this.position2.x = this.position.x;
					}
				}

				// }
			}
		}
	}

	opposite_walk() {
		let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		this.position.add(uPOS);

		const r = floor(random(10));
		const r2 = floor(random(10));

		if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 == 0) {
			this.direction = createVector(random(-1, 1), random(-1, 1));
		}

		if (
			this.position.x < this.diameter ||
			this.position.x > 950 * sx - this.diameter
		) {
			this.direction.x *= -1;
		}
		if (
			this.position.y < this.diameter ||
			this.position.y > 950 * sy - this.diameter
		) {
			this.direction.y *= -1;
		}
	}

	straight_walk() {
		try {
			let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
			this.position.add(uPOS);
		} catch (error) {
			//
			this.position.add(createVector(0, 0));
		}

		if (this.position.y < 50 * sy) {
			this.direction = createVector(0, 1);
		}
	}

	random_walk() {
		// this.movingVelocity = (this.botz * 5 * parseInt(scattering_velocity)) / 5;

		// if (this.botz == 4 || this.botz == 5) {
		// 	this.movingVelocity =
		// 		(4 * this.botz * 5 * parseInt(scattering_velocity)) / 5;
		// 	this.direction.y = this.direction.y * 0.1;
		// }

		// if (isNaN(this.movingVelocity)) {
		// 	this.movingVelocity = 0;
		// }

		// try {
		// 	let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		// 	this.position.add(uPOS);
		// } catch (error) {
		// 	//
		// 	this.position.add(createVector(0, 0));
		// }

		this.accelerate(); // accelerate() will update this.velocity

		this.position.add(this.velocity); // add the effect of acceleration to position
		// }

		const r = floor(random(10));
		const r2 = floor(random(10));

		if (scene(1) || scene(2) || scene(3)) {
			if (
				this.position.x > (550 - (400 / 8) * voltageDepletionWidth) * sx &&
				this.position.x <
					(550 -
						(400 / 8) * voltageDepletionWidth +
						(400 / 8) * voltageDepletionWidth * 2) *
						sx
			) {
				this.within = 1;
				// ellipse(this.position.x, this.position.y, 30);
			} else {
				this.within = 0;
			}

			// if (this.straight ==1) {
			if (willScatter == false) {
				//if false no scatter
			} else {
				this.direction = createVector(random(-1, 1), random(-1, 1));
				this.movingVelocity =
					random_botz[Math.floor(Math.random() * random_botz.length)];
				this.botz = this.movingVelocity;
				this.velocity = p5.Vector.mult(this.direction, this.movingVelocity);
				if (this.color == 0) {
					//electron
					this.origin.x = findClosestValue(electronLine, this.position.x);
					this.position2.y =
						this.origin.x - (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
				}
				if (this.color == 1) {
					//hole
					this.origin.y = findClosestValue(holeLine, this.position.x);
					this.position2.y =
						this.origin.y + (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
				}
			}

			////////////////////// avoid going into the bandgap (added by Azad)

			if (this.color == 0) {
				//             //electron
				let zz = findClosestValue(electronLine, this.position.x);
				if (this.position2.y > zz) {
					this.velocity.x = Math.abs(this.velocity.x);
					this.position.add(this.velocity.x);
				}
			} else {
				//hole
				let zz = findClosestValue(holeLine, this.position.x);
				if (this.position2.y < zz) {
					this.velocity.x = -Math.abs(this.velocity.x);
					this.position.add(this.velocity.x);
				}
			}
			////////////////////////////////////////////////

			if (this.position.x > 940 * sx && opening == 1 && this.straight == 0) {
				this.direction.x = 10;
				this.show = 0;
				if (this.id == "e" && !this.chargeCreated) {
					// holeArray.push(new Vehicle(160*sx, 600*sy, 10, "h", 1));
					var newCharge = new Charge(
						950 * sx,
						random(400, 760) * sy,
						10,
						"e",
						0
					);
					newCharge.direction = createVector(-1, random(-1, 1));
					newCharge.movingVelocity = this.movingVelocity;
					newCharge.velocity = createVector(-10, 0);
					newCharge.botz = this.botz;
					generatedElectrons.push(newCharge);
					this.chargeCreated = true;
				}
			}

			if (this.position.x > 940 * sx && opening == 1 && this.straight == 1) {
				this.direction.x = 10;
				this.show = 0;
			}

			if (this.position.x < 145 * sx) {
				this.position.x = 50 * sx;
			}

			if (this.position.x < 150 * sx && opening == 1 && this.straight == 0) {
				this.direction.x = -10;
				this.show = 0;
				if (this.id == "h" && !this.chargeCreated) {
					var newCharge = new Charge(
						140 * sx,
						random(400, 760) * sy,
						10,
						"h",
						1
					);
					newCharge.direction = createVector(1, random(-1, 1));
					newCharge.movingVelocity = this.movingVelocity;
					newCharge.velocity = createVector(10, 0);
					newCharge.botz = this.botz;
					generatedHoles.push(newCharge);
					this.chargeCreated = true;
				}
			}

			// if (this.position.x < 150 * sx && opening == 1 && this.straight == 1) {
			// 	this.direction.x = -10;
			// 	this.show = 0;
			// }

			// if (this.position.x > 940 * sx && opening == 0) {
			// 	this.direction.x = -1;
			// }
			// if (this.position.y < 405 * sy) {
			// 	this.direction.y = 1;
			// }

			if (this.position.y < 405 * sy) {
				this.velocity.y = -this.velocity.y;
				this.position.y = 410 * sy;
			}
			// if (this.position.y > 770 * sy) {
			// 	this.direction.y = -1;
			// }

			if (this.position.y > 770 * sy) {
				this.velocity.y = -this.velocity.y;
				this.position.y = 765 * sy;
			}

			//if (scene(2) || scene(3)) {
			// if (this.color == 0) {
			// 	//electron
			// 	let smallestDifference = Math.abs(
			// 		electronLineData[0].y - this.position2.y
			// 	);

			// 	for (let i = 0; i < electronLineData.length; i++) {
			// 		let difference = Math.abs(electronLineData[i].y - this.position2.y);

			// 		if (difference < smallestDifference) {
			// 			smallestDifference = difference;
			// 			this.near_index = i;
			// 		}
			// 	}
			// }
			// if (this.color == 1) {
			// 	//hole
			// 	let smallestDifference = Math.abs(
			// 		holeLineData[0].y - this.position2.y
			// 	);

			// 	for (let i = 0; i < holeLineData.length; i++) {
			// 		let difference = Math.abs(holeLineData[i].y - this.position2.y);

			// 		if (difference < smallestDifference) {
			// 			smallestDifference = difference;
			// 			this.near_index = i;
			// 		}
			// 	}
			// }

			// Utility functions
			// function lerp(start, end, t) {
			// 	return start * (1 - t) + end * t;
			// }

			//wrong
			// try {
			// 	if (this.near_index < 60) {
			// 		if (
			// 			this.color == 1 &&
			// 			this.position2.x >=
			// 				holeLineData[this.near_index].x - E_gap_factor - 10
			// 		) {
			// 			// {this.direction.x = -2; }

			// 			if (this.elapsedTime < this.transitionTime) {
			// 				// Increment elapsed time
			// 				this.elapsedTime++;

			// 				// Calculate delta
			// 				let delta = this.elapsedTime / this.transitionTime;

			// 				// Update direction.x with lerp
			// 				this.direction.x = lerp(0, -2, delta);
			// 			} else {
			// 				// After the transition, make sure direction.x stays at -2
			// 				this.direction.x = -2;
			// 			}
			// 		}
			// 	}
			// } catch (error) {}

			// try {
			// 	if (
			// 		this.color == 0 &&
			// 		this.position2.x <=
			// 			electronLineData[this.near_index].x + E_gap_factor + 10
			// 	) {
			// 		this.direction.x = 2;
			// 	}
			// } catch (error) {
			// 	//
			// }
			//}
			//else if (scene(1)) {
			// if (this.color == 0) {
			// 	let smallestDifference = Math.abs(
			// 		electronLineData[0].y - this.position2.y
			// 	);

			// 	for (let i = 99; i >= 0; i--) {
			// 		let difference = Math.abs(electronLineData[i].y - this.position2.y);

			// 		if (difference < smallestDifference) {
			// 			smallestDifference = difference;
			// 			this.near_index = i;
			// 		}
			// 	}
			// }
			// if (this.color == 1) {
			// 	let smallestDifference = Math.abs(
			// 		holeLineData[0].y - this.position2.y
			// 	);

			// 	for (let i = 99; i >= 0; i--) {
			// 		let difference = Math.abs(holeLineData[i].y - this.position2.y);

			// 		if (difference < smallestDifference) {
			// 			smallestDifference = difference;
			// 			this.near_index = i;
			// 		}
			// 	}
			// }

			// function lerp(start, end, t) {
			// 	return start * (1 - t) + end * t;
			// }

			// try {
			// 	if (
			// 		this.color == 1 &&
			// 		this.position2.x >=
			// 			holeLineData[this.near_index].x - E_gap_factor - 10
			// 	) {
			// 		this.direction.x = -2;
			// 	} else if (this.color == 1 && this.straight == 1) {
			// 		this.direction.x = 3;
			// 	}
			// } catch (error) {
			// 	//
			// }

			// try {
			// 	// if (this.near_index<50)  {

			// 	if (
			// 		this.color == 0 &&
			// 		this.position2.x <=
			// 			electronLineData[this.near_index].x + E_gap_factor + 10
			// 	) {
			// 		this.direction.x = 2;
			// 	} else if (this.color == 0 && this.straight == 1) {
			// 		this.direction.x = -3;
			// 	}

			// 	// }

			// 	//electron
			// } catch (error) {
			// 	//
			// }
			//}
		}
		//else {
		// if (willScatter == false) {
		// 	//if false no scatter
		// } else if (this.straight == 1) {
		// 	if (this.color == 0) {
		// 		this.direction = createVector(-3, 0);
		// 	} else {
		// 		this.direction = createVector(3, 0);
		// 	}
		// } else {
		// 	this.direction = createVector(random(-1, 1), random(-1, 1));
		// }
		// //  } else if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 ==0) {this.direction = createVector(random(-1,1), random(-1,1));}

		// if (this.position.x < (90 + 70) * sx) {
		// 	this.direction.x = 1;
		// }

		// if (this.position.x > 940 * sx && opening == 1) {
		// 	this.direction.x = 10;
		// }

		// if (this.position.x < 150 * sx && opening == 1) {
		// 	this.direction.x = -10;
		// }

		// if (this.position.x > 940 * sx && opening == 0) {
		// 	this.direction.x = -1;
		// }
		// if (this.position.y < (20 + 385) * sy) {
		// 	this.direction.y = 1;
		// }
		// if (this.position.y > 770 * sy) {
		// 	this.direction.y = -1;
		// }
		//}

		// }
	}

	accelerate() {
		let a = (voltageDepletionWidth * bandDiagramHeight) / 20;
		let x_depletion_start = (550 - (400 / 8) * voltageDepletionWidth) * sx;
		let x_depletion_middle = 550 * sx;
		let x_depletion_end = (550 + (400 / 8) * voltageDepletionWidth) * sx;
		let x_depletion_width = x_depletion_end - x_depletion_start;
		//console.log("a",a)
		if (
			this.position.x > x_depletion_start &&
			this.position.x < x_depletion_middle
		) {
			if (this.color == 0) {
				this.acceleration =
					(a * (this.position.x - x_depletion_start)) /
					(0.5 * x_depletion_width);
			} else if (this.color == 1) {
				this.acceleration =
					(-a * (this.position.x - x_depletion_start)) /
					(0.5 * x_depletion_width);
			} else {
			}
		} else if (
			this.position.x > x_depletion_middle &&
			this.position.x < x_depletion_end
		) {
			if (this.color == 0) {
				this.acceleration =
					(a * (x_depletion_end - this.position.x)) / (0.5 * x_depletion_width);
			} else if (this.color == 1) {
				this.acceleration =
					(-a * (x_depletion_end - this.position.x)) /
					(0.5 * x_depletion_width);
			} else {
			}
		} else {
			this.acceleration = 0;
		}

		// else if (
		// 	this.position.x > 550 * sx &&
		// 	this.position.x < (550 + (400 / 8) * voltageDepletionWidth) * sx
		// ) {
		// 	// if (sceneCount==1.5) {

		// 	// } else {
		// 	e_field_c = (initialDepletionWidth / bandDiagramHeight) * 50;
		// 	// }

		// 	if (this.color == 0) {
		// 		let a =
		// 			(e_field_c /
		// 				(550 * sx - (550 - (400 / 8) * voltageDepletionWidth) * sx)) *
		// 				(this.position.x - 550 * sx) -
		// 			((550 - (400 / 8) * voltageDepletionWidth) * sx * e_field_c) /
		// 				(550 * sx - (550 - (400 / 8) * voltageDepletionWidth) * sx);

		// 		this.acceleration = (-a / 140) * factor_new;

		// 		this.velocity = p5.Vector.add(
		// 			createVector(this.acceleration, 0),
		// 			this.velocity
		// 		);
		// 		this.position.add(this.velocity);
		// 	} else if (this.color == 1) {
		// 		let a =
		// 			(e_field_c /
		// 				(550 * sx - (550 - (400 / 8) * voltageDepletionWidth) * sx)) *
		// 				(this.position.x - 550 * sx) -
		// 			((550 - (400 / 8) * voltageDepletionWidth) * sx * e_field_c) /
		// 				(550 * sx - (550 - (400 / 8) * voltageDepletionWidth) * sx);

		// 		this.acceleration = (a / 140) * factor_new;

		// 		this.velocity = p5.Vector.add(
		// 			createVector(this.acceleration, 0),
		// 			this.velocity
		// 		);
		// 	} else {
		// 	}
		// } else {
		// 	this.velocity = createVector(0, 0);
		// 	this.acceleartion = createVector(0, 0);
		// }
	}

	tube_walk() {
		let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		this.position.add(uPOS);

		if (this.time < 100) {
			this.direction = createVector(0, 1);
			this.time++;
		}
	}

	alpha_update() {
		this.alpha -= 10;
	}

	appear_update() {
		this.appear += 20;
	}
}

class Appear {
	constructor(x, y, length, color, id) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.length = length;
		this.time = 0;
		this.color = color;
		this.show = 1;
		this.starting_p = createVector(x, y);
		this.alpha = 135; //appear opacity
		this.beta = 0;
		this.zap = 255;
		this.d = 1;
		this.dd = 50;
		this.alpha2 = 0;
		this.id = id;
		this.occupied = 0;
		this.dead = 0;

		// this.id = id

		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.velocity = createVector(0, 0);
		this.maxforce = 0.1;
		this.maxspeed = 0.8;
	}

	display() {
		if (this.show == 1) {
			if (this.color == 0) {
				noStroke();
				fill(254, 246, 182, this.alpha);
				//fill(125, 241, 148, this.alpha);

				ellipse(this.position.x, this.position.y, this.d);
			} else if (this.color == 1) {
				stroke(125, 241, 148, this.alpha);
				//stroke(255, 121, 97, this.alpha);
				strokeWeight(2);
				noFill();

				ellipse(this.position.x, this.position.y, this.dd);

				// }
				// ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.color == 2) {
				strokeWeight(1);
				fill(254, 246, 182, this.zap);
				stroke(254, 246, 182, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.color == 3) {
				//hollow
				strokeWeight(1);
				noFill();
				stroke(125, 241, 148, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.color == 4) {
				//plus sign add electron
				stroke(255, this.beta);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				line(this.x, this.y - 10, this.x, this.y + 10);
				noStroke();
				strokeWeight(1);
			} else if (this.color == 5) {
				//minus sign add electron
				stroke(255, this.beta);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				noStroke();
				strokeWeight(1);
			}
		}
	}

	noShow() {
		this.show = 0;
	}

	dead() {
		this.dead = 1;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	update() {
		if (this.color == 0) {
			this.alpha -= 15;
			this.d += 5;
		} else if (this.color == 1) {
			this.alpha -= 15;
			this.dd -= 3;
		} else if (this.color == 4 || this.color == 5) {
			if (this.beta < 100) {
				this.beta += 30;
				// this.d += 4;
			}
		}
	}

	update_location() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		this.acceleartion = createVector(0, 0);
	}

	update_circle() {
		this.zap -= 20;
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
		this.acceleration.add(force);
	}
}

class Disappear {
	constructor(x, y, length, color, target) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.length = length;
		this.time = 0;
		this.maxspeed = 5;
		this.color = color;
		this.show = 1;
		this.starting_p = createVector(x, y);
		this.alpha = 255;
		this.zap = 255;
		this.d = 1;
		this.dd = 50;
		this.alpha2 = 0;
		this, (target = target);
		this.occupied = 0;
		// this.id =id;
	}

	display() {
		if (this.show == 1) {
			if (this.color == 0) {
				noStroke();
				fill(254, 246, 182, this.alpha);
				//fill(125, 241, 148, this.alpha);

				ellipse(this.position.x, this.position.y, this.d);
			} else if (this.color == 1) {
				stroke(125, 241, 148, this.alpha);
				//stroke(255, 121, 97, this.alpha);
				strokeWeight(2);
				noFill();

				// line(this.position.x-10,this.position.y-10,this.position.x+10,this.position.y+10);
				// line(this.position.x-10,this.position.y+10,this.position.x+10,this.position.y-10);

				// noStroke();
				// fill(125, 241, 148, this.alpha);

				ellipse(this.position.x, this.position.y, this.dd);

				// }
				// ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.color == 2) {
				strokeWeight(1);
				fill(254, 246, 182, this.zap);
				stroke(254, 246, 182, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			}
		}
	}

	update() {
		if (this.color == 0) {
			this.alpha -= 15;
			this.d += 5;
		} else if (this.color == 1) {
			this.alpha -= 15;
			this.dd -= 3;
		}
	}

	update_circle() {
		this.zap -= 20;
	}
}

class LatticeAtom {
	constructor(x, y, selected, opacity, num) {
		this.x = x;
		this.y = y;

		this.selected = selected;
		this.boundary = false;
		this.opacity = opacity;
		this.fadee = opacity;
		this.num = num;
		this.appear1 = appear1;
		this.count = 100;

		this.r = 30;
	}

	mouseHover() {
		let d = dist(mouseX, mouseY, this.x, this.y);
		return d < this.r;
	}

	show() {
		// if (scene(1)) {
		//     stroke(255, 255, 255, this.fadee );
		//     line(this.x, this.y, this.x + 90, this.y);
		//     line(this.x, this.y, this.x, this.y + 90);
		//     noStroke();
		//     this.fadee -=5;
		// }

		if (this.selected == false) {
			//selected !!!
			if (scene(2)) {
				drawingContext.setLineDash([]);
				noStroke();
				fill(254, 246, 182, this.opacity);
				ellipse(this.x + width / 45, this.y, 10, 10);
				ellipse(this.x - width / 45, this.y, 10, 10);
				ellipse(this.x, this.y + width / 45, 10, 10);
				ellipse(this.x, this.y - width / 45, 10, 10);
			} else if (scene(3)) {
				if (this.num == 1) {
					drawingContext.setLineDash([]);
					noStroke();
					// fill(255, 92, 255, 250); //e
					fill(198, 92, 255, this.opacity); //e
					ellipse(this.x, this.y, 30, 30);
				} else if (this.num == 2) {
					drawingContext.setLineDash([]);
					noStroke();
					fill(254, 246, 182, this.opacity);
					ellipse(this.x + width / 45, this.y, 10, 10);
					ellipse(this.x - width / 45, this.y, 10, 10);
					ellipse(this.x, this.y + width / 45, 10, 10);
					ellipse(this.x, this.y - width / 45, 10, 10);

					fill(71, 172, 255, this.opacity); //h
					ellipse(this.x, this.y, 30, 30);

					stroke(255, this.appear1);
					strokeWeight(5);
					line(this.x - 10, this.y, this.x + 10, this.y);
					// line(this.x, this.y-10, this.x, this.y+10);
					strokeWeight(1);

					this.count -= 10;
					if (this.count < 0) {
						this.appear1 += 20;
					}
				}
				// fill(71, 172, 255, this.opacity);
			} else if (sceneCount == 4) {
				if (this.num == 1) {
					fill(198, 92, 255, this.fadee); //e
					ellipse(this.x, this.y, 30, 30);

					stroke(255, this.appear1);
					strokeWeight(5);
					line(this.x - 10, this.y, this.x + 10, this.y);
					line(this.x, this.y - 10, this.x, this.y + 10);
					strokeWeight(0);

					this.count -= 10;
					if (this.count < 0) {
						this.appear1 += 20;
					}
				} else if (this.num == 2) {
					// drawingContext.setLineDash([]);
					noStroke();
					fill(254, 246, 182, this.fadee);
					ellipse(this.x + width / 45, this.y, 10, 10);
					ellipse(this.x - width / 45, this.y, 10, 10);
					ellipse(this.x, this.y + width / 45, 10, 10);

					stroke(255, this.appear1);
					strokeWeight(5);
					line(this.x - 10, this.y, this.x + 10, this.y);
					// line(this.x, this.y-10, this.x, this.y+10);
					strokeWeight(0);
				}
			}
		}

		if (this.selected) {
			if (sceneCount == 0.5 || scene(1) || sceneCount == 0.7) {
				//normal
				drawingContext.setLineDash([]);
				noStroke();
				fill(254, 246, 182, this.opacity);
				ellipse(this.x + width / 45, this.y, 10, 10);
				ellipse(this.x - width / 45, this.y, 10, 10);
				ellipse(this.x, this.y + width / 45, 10, 10);

				ellipse(this.x, this.y - width / 45, 10, 10);

				noStroke();
				fill(148, 163, 243, this.opacity);
				ellipse(this.x, this.y, 30, 30);
			} else if (scene(2)) {
				//electron
				drawingContext.setLineDash([]);
				noStroke();
				fill(254, 246, 182, this.opacity);
				ellipse(this.x + width / 45, this.y, 10, 10);
				ellipse(this.x - width / 45, this.y, 10, 10);
				ellipse(this.x, this.y + width / 45, 10, 10);
				ellipse(this.x, this.y - width / 45, 10, 10);

				noStroke();
				fill(148, 163, 243, this.opacity);
				ellipse(this.x, this.y, 30, 30);
			} else if (scene(3)) {
				//hole
				drawingContext.setLineDash([]);
				noStroke();
				fill(254, 246, 182, this.opacity);
				ellipse(this.x + width / 45, this.y, 10, 10);
				ellipse(this.x - width / 45, this.y, 10, 10);
				ellipse(this.x, this.y + width / 45, 10, 10);
				ellipse(this.x, this.y - width / 45, 10, 10);

				noStroke();
				fill(148, 163, 243, this.opacity);
				ellipse(this.x, this.y, 30, 30);
			} else if (sceneCount == 4) {
				//hole
				drawingContext.setLineDash([]);
				noStroke();
				fill(254, 246, 182, this.fadee);
				ellipse(this.x + width / 45, this.y, 10, 10);
				ellipse(this.x - width / 45, this.y, 10, 10);
				ellipse(this.x, this.y + width / 45, 10, 10);
				ellipse(this.x, this.y - width / 45, 10, 10);

				noStroke();
				noFill();
				fill(148, 163, 243, this.fadee);
				ellipse(this.x, this.y, 30, 30);
			}
		} else if (this.boundary) {
			// clicked

			if (scene(2) || scene(3)) {
				fill(198, 92, 255, this.opacity + 30);
				ellipse(this.x, this.y, 30, 30);

				stroke(255, this.appear1);
				strokeWeight(5);

				line(this.x - 10, this.y, this.x + 10, this.y);
				line(this.x, this.y - 10, this.x, this.y + 10);
				strokeWeight(1);

				this.count -= 10;
				if (this.count < 0) {
					this.appear1 += 20;
				}
			} else if (scene(3)) {
				if (this.num == 1) {
					fill(198, 92, 255, this.opacity + 30); //e
					ellipse(this.x, this.y, 30, 30);

					stroke(255, this.appear1);
					strokeWeight(5);
					line(this.x - 10, this.y, this.x + 10, this.y);
					line(this.x, this.y - 10, this.x, this.y + 10);
					strokeWeight(1);

					this.count -= 10;
					if (this.count < 0) {
						this.appear1 += 20;
					}
				} else if (this.num == 2) {
				}
			} else if (scene(3)) {
				if (this.num == 1) {
					fill(198, 92, 255, this.fadee); //e
					ellipse(this.x, this.y, 30, 30);
				} else if (this.num == 2) {
					fill(71, 172, 255, this.fadee); //h
					ellipse(this.x, this.y, 30, 30);
				}
			}
		}

		if (this.mouseHover() && this.opacity > 0) {
			if (scene(2) || scene(3)) {
				textAlign(CENTER, CENTER);
				textSize(18);
				fill(255);
				noStroke();
				text("Replace Silicon Atom with Donor Atom", this.x, this.y + 50);
				textAlign(LEFT, BASELINE);
			} else if (scene(3)) {
				textAlign(CENTER, CENTER);
				textSize(18);
				fill(255);
				noStroke();
				text("Replace Silicon Atom with Acceptor Atom", this.x, this.y + 50);
				textAlign(LEFT, BASELINE);
			}
		}
	}

	selectAtom() {
		this.selected = false;
	}
}

class freeElectron {
	constructor(x, y, scene, id) {
		this.x = x;
		this.y = y;
		this.r = 10;
		this.count = 10;
		this.scene = scene;
		this.id = id;

		this.position = createVector(x, y);
		this.maxspeed = 5;
		this.velocity = createVector(0, 0);
		this.maxforce = 0.5;
		this.acceleration = createVector(0, 0);
		this.show = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 5;
	}

	show_1() {
		if (this.scene == 1) {
			noStroke();
			fill(254, 246, 182, 190);
			ellipse(this.position.x, this.position.y, 10, 10);
		} else if (this.scene == 2) {
			fill(18);
			strokeWeight(2);
			stroke(125, 241, 148, 225); //green

			ellipse(this.position.x, this.position.y, 10, 10);
		}
	}

	update_1() {
		if (this.count > 0) {
			this.count--;
		}
	}

	random_walk_1() {
		if (this.scene == 1) {
			let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
			this.position.add(uPOS);

			const r = floor(random(10));
			const r2 = floor(random(10));

			if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 == 0) {
				this.direction = createVector(random(-1, 1), random(-1, 1));
			}

			if (this.position.x < 90 * sx) {
				this.direction.x = 1;
			}
			if (this.position.x > 940 * sx) {
				this.direction.x = -1;
			}
			if (this.position.y < 20 * sy) {
				this.direction.y = 1;
			}
			if (this.position.y > 770 * sy) {
				this.direction.y = -1;
			}
		}

		if (this.scene == 2) {
			let d = int(
				dist(
					this.position.x,
					this.position.y,
					random_hole[this.id].x,
					random_hole[this.id].y
				)
			);

			if (this.position.x <= width / 2 - 6 * 90) {
				random_hole[this.id] = createVector(
					width / 2 + 3 * 90,
					height / 2 + width / 45 + random(random_num1).y * 1 * 90
				);
			}
			if (this.position.x >= width / 2 + 6 * 90) {
				random_hole[this.id] = createVector(
					width / 2 - 3 * 90,
					height / 2 + width / 45 + random(random_num1).y * 1 * 90
				);
			}
			if (this.position.y <= height / 2 - 6 * 90 + width / 45) {
				random_hole[this.id] = createVector(
					width / 2 + random(random_num1).x * 2 * 90,
					height / 2 + width / 45 + 1 * 90
				);
			}
			if (this.position.y >= height / 2 + 6 * 90 + width / 45) {
				random_hole[this.id] = createVector(
					width / 2 + random(random_num1).x * 1 * 90,
					height / 2 + width / 45 + 1 * 90
				);
			}

			if (d < 15) {
				this.position = random_hole[this.id];
				let numm = int(random(-5, 5));
				random_hole[this.id] = createVector(
					this.position.x + random(random_num1).x * numm * 90,
					this.position.y + random(random_num1).y * numm * 90
				);
			}
			this.direction = p5.Vector.sub(
				random_hole[this.id],
				this.position
			).normalize();
			let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
			this.position.add(uPOS);
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
