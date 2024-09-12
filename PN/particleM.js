class AtomM {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.r = 30;

		this.electrons = [
			new ElectronM(x + 35, y + 0),
			new ElectronM(x + 0, y + 35),
			new ElectronM(x - 35, y + 0),
			new ElectronM(x + 0, y - 35)
		];
		let rx = abs(x);
		let ry = abs(y);
		this.opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255 / 2);
	}

	show() {
		fill(148, 163, 243, this.opacity);
		noStroke();
		ellipse(this.x, this.y, this.r, this.r);
	}

	showAllElectrons() {
		for (let electron of this.electrons) {
			electron.showElectron();
		}
	}

	showAllHoles() {
		for (let electron of this.electrons) {
			electron.showHoles();
		}
	}

	check() {
		for (let electron of this.electrons) {
			electron.check();
		}
	}

	update() {
		for (let electron of this.electrons) {
			electron.update();
		}
	}
}

class ElectronM {
	constructor(x, y) {
		this.x = x;
		this.ox = x;
		this.oy = y;
		this.y = y;
		this.r = 10;

		let rx = abs(x);
		let ry = abs(y);
		this.opacity = map(sqrt(rx * rx + ry * ry) / 1.414, sqrt(width * width + height * height) / 5, 0, 0, 255 / 2);

		if (this.x == hole.x && this.y == hole.y) {
			this.fill = color(0, 0, 0, 0);
		} else {
			this.fill = color(255, 247, 174, this.opacity);
		}
		this.move = false;
	}

	showElectron() {
		fill(this.fill);
		ellipse(this.x, this.y, this.r, this.r);
	}

	showHoles() {
		stroke(10, 255, 10, this.opacity);
		noFill();
		ellipse(this.ox, this.oy, 10, 10);
	}

	check() {
		if ((dist(this.x, this.y, mouseX - width / 2, mouseY - height / 2)) < this.r && (dist(this.x, this.y, hole.x, hole.y)) > 31) {
			this.fill = color(255, 247, 174);
			this.move = true;
			movingElectron = true;
		}
	}

	update() {
		if (this.move) {
			this.x = lerp(this.x, hole.x, 0.03);
			this.y = lerp(this.y, hole.y, 0.03);

			if (dist(this.x, this.y, hole.x, hole.y) < 1) {
				this.x = hole.x;
				this.y = hole.y;
				movingElectron = false;
				this.move = false;
				hole.x = this.ox;
				hole.y = this.oy;
				holePath.push({
					x: hole.x,
					y: hole.y
				});
			}
		} else {
			if ((dist(this.x, this.y, mouseX - width / 2, mouseY - height / 2)) < this.r && (dist(this.x, this.y, hole.x, hole.y)) > 31) {
				select('body').addClass('cursor-point');
			}
		}
	}
}