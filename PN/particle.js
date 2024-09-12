class NewAtom {
	constructor(_x, _y) {
		this.x = _x;
		this.ox = _x;
		this.y = _y;
		this.oy = _y;

		this.electrons = [
			new NewElectron(this.ox + 40, this.oy),
			new NewElectron(this.ox, this.oy + 40),
			new NewElectron(this.ox - 40, this.oy),
			new NewElectron(this.ox, this.oy - 40)
		];
	}

	show() {
		fill(148, 163, 243);
		noStroke();
		ellipse(this.x, this.y, 30, 30);

		this.showElectrons();
	}

	showElectrons() {
		for (let electron of this.electrons)
			electron.show();
	}

	update() {
		if (settings.nucleus) {
			this.shake(temperature);
		}

		if (settings.valence) {
			for (let electron of this.electrons)
				electron.update();
		}
	}

	shake(a) {
		if (a == 0) {
			this.x = lerp(this.x, this.ox, 0.3);
			this.y = lerp(this.y, this.oy, 0.3);
		} else {
			this.x = constrain(lerp(this.x, this.x + random(-1, 1), temperature / 125), this.ox - 2, this.ox + 2);
			this.y = constrain(lerp(this.y, this.y + random(-1, 1), temperature / 125), this.oy - 2, this.oy + 2);
		}
	}
}

class NewElectron {
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;

		this.ox = _x;
		this.oy = _y;

		this.active = false;
	}

	show() {
		fill(255, 247, 174, 50);
		noStroke();
		ellipse(this.x, this.y, 10, 10);
	}

	update() {
		let prob_active = random(0, 1);
		let probd = map(temperature, 0, 300, 0, 0.001);
		if (!this.active && prob_active < probd && settings.conduction) {
			newHoles.push(new Hole(this.x, this.y, this));
			freeElectrons.push(new FreeElectron(this.x, this.y));
		}
	}

	activate() {
		this.active = true;
	}

	returnPos() {
		return {
			x: this.x,
			y: this.y
		}
	}
}

class Hole {
	constructor(_x, _y, parent) {
		this.x = _x;
		this.y = _y;

		this.dx = _x;
		this.dy = _y;
		this.occupied = false;

		this.alive = true;

		this.moving = false;

		this.speed = map(temperature, 0, 300, 0, 8);

		this.prob_dir = floor(random(0, 4));
	}

	show() {
		if (this.alive) {
			fill(18);
			stroke(110, 207, 127);
			ellipse(this.x, this.y, 10, 10);
		}
	}

	update() {
		this.speed = map(temperature, 0, 300, 2, 12);

		if (settings.valence && !this.occupied && !this.moving) {
			let prob_hole = random(0, 1);
			if (prob_hole < 0.99) {
				let pos = {
					x: this.dx,
					y: this.dy
				};
				this.moving = true;
				if (settings.nucleus) {
					pos = random(random(random(newLattice)).electrons).returnPos();
				} else {
					if (this.prob_dir == 0) {
						pos.x += 100;
						pos.y += 0;
						if (pos.x > width) {
							this.prob_dir = 1;
						}
					} else if (this.prob_dir == 1) {
						pos.x -= 100;
						pos.y += 0;
						if (pos.x < 0) {
							this.prob_dir = 0;
						}
					} else if (this.prob_dir == 2) {
						pos.y += 100;
						pos.x += 0;
						if (pos.y > height) {
							this.prob_dir = 3;
						}
					} else if (this.prob_dir == 3) {
						pos.y -= 100;
						pos.x += 0;
						if (pos.y < 0) {
							this.prob_dir = 2;
						}
					}
				}
				this.dx = pos.x;
				this.dy = pos.y;
			}
		}

		if (this.x == this.dx && this.y == this.dy) {
			this.moving = false;
		}

		if (this.moving) {
			if (dist(this.x, this.y, this.dx, this.dy) > 5) {
				let v = createVector(this.dx - this.x, this.dy - this.y).normalize().mult(this.speed);
				this.x += v.x;
				this.y += v.y;
			} else {
				this.x = this.dx;
				this.y = this.dy;
			}
		}
	}

	occupy() {
		this.occupied = true;
	}

	kill() {
		this.alive = false;
	}
}

class FreeElectron {
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
		this.ox = _x;
		this.oy = _y;

		this.recombining = false;
		this.recombine_hole = undefined;
		this.alive = true;

		this.seedValue = random(0, 100000);

		this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();

		this.speed = map(temperature, 0, 300, 0, 8);
	}

	show() {
		if (this.alive) {
			fill(255, 247, 174);
			noStroke();
			ellipse(this.x, this.y, 10, 10);
		}
	}

	update() {
		if (settings.conduction && !this.recombining) {
			// this.x = lerp(this.x, this.ox + map(noise(frameCount / 10 + this.seedValue), 0, 1, -500, 500), 0.03);
			// this.y = lerp(this.y, this.oy + map(noise(frameCount / 10 + 1000 + this.seedValue), 0, 1, -500, 500), 0.03);

			this.x += this.direction.x * this.speed;
			this.y += this.direction.y * this.speed;

			if (settings.nucleus) {
				let frameLimit = 30 + temperature / 2;
				if (frameCount % frameLimit == 0) {
					this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
				}
				// let prob = random(0, 1);
				// if (prob < temperature / 15000) {
				// 	this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
				// }
			}
			if (this.x > width + 20 || this.x < -20 || this.y > height + 20 || this.y < -20) {
				this.direction = this.direction.mult(-1);
			}

			if (settings.valence && settings.conduction) {
				let prob_recombine = random(0, 1);
				if (temperature == 0) {
					this.recombine();
				} else if (prob_recombine < newHoles.length / 10000) {
					this.recombine();
				}
			}


		} else if (settings.conduction && this.recombining) {
			this.x = lerp(this.x, this.recombine_hole.x, 0.1);
			this.y = lerp(this.y, this.recombine_hole.y, 0.1);

			let d = int(dist(this.x, this.y, this.recombine_hole.x, this.recombine_hole.y));
			if (d < 2) {
				this.alive = false;
				this.recombine_hole.kill();
			}
		}

		this.speed = map(temperature, 0, 300, 2, 12);
	}

	recombine() {
		let hole = random(newHoles);
		if (!hole.occupied) {
			hole.occupy();
			this.recombining = true;
			this.recombine_hole = hole;
		}
	}
}

class Electron_Excite {
	constructor(x, y, opacity) {
		this.x = x;
		this.ox = x;
		this.oy = y;
		this.y = y;
		this.opacity = opacity;

		this.selected = false;
		this.excited = false;

		this.xDir = (random(0, 1) < 0.5) ? -1 : 1
		this.yDir = (random(0, 1) < 0.5) ? -1 : 1
	}

	show() {
		if (this.selected) {
			noFill()
			stroke(110, 207, 127);
			ellipse(this.ox, this.oy, 10, 10);

			fill(255, 247, 174);
		} else {
			fill(255, 247, 174, this.opacity);
		}
		noStroke();
		ellipse(this.x, this.y, 10, 10);
	}

	select() {
		this.selected = true;
	}

	update() {
		if (this.excited) {
			this.x += this.xDir * 2.5;
			this.y += this.yDir * 2.5;

			if (this.x > width / 2 + 30) {
				this.xDir = -1;
			} else if (this.x < -width / 2 - 30) {
				this.xDir = 1;
			}
			if (this.y > height / 2 + 30) {
				this.yDir = -1;
			} else if (this.y < -height / 2 - 30) {
				this.yDir = 1;
			}
		}
	}

	excite() {
		this.excited = true;
		d3bands2AddElec();
	}

	undo() {
		this.selected = false;
		this.excited = false;
		this.x = this.ox;
		this.y = this.oy;
	}
}

class Photon {
	constructor(y, endX, wv) {
		this.x = -width / 2;
		this.y = y;
		this.endX = endX;
		this.wv = wv;
	}

	show() {
		if (this.x < this.endX) {
			let lambda = this.wv;
			let x = this.x;
			noFill();
			let col = wavelengthToColor(lambda);
			if (col[1] == 0 && col[2] == 0 && col[3] == 0) {
				stroke(255);
			} else {
				stroke(col[1] * 255, col[2] * 255, col[3] * 255);
			}
			strokeWeight(2);
			beginShape();
			for (let i = 0; i < lambda / 2; i++) {
				vertex(x - (i) / 2, this.y + 60 * sin(2 * PI * i / lambda) * sin(40 * PI * i / lambda));
			}
			endShape();
		}
	}

	update() {
		this.x += 5;
	}

	check(electrons) {
		if (this.x > this.endX && this.endX != width) {
			for (let electron of electrons) {
				if (electron.selected && !electron.excited) {
					electron.excite();
					break;
				}
			}
		}
	}
}