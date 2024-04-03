class Box {
	constructor(x, y, w, h, numElectrons, type) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.numElectrons = numElectrons;
		this.scannerX = this.x;
		this.scannerY = this.y;
		this.chargeMap = [];
		this.electrons = [];
		this.dopantIndices = [];
		this.dim = false;
		this.type = type;
		this.dopantAmount = 0;

		// populate chargeMap
		this.populateChargeMap();
		this.populateElectrons();
	}

	updateType(value) {
		this.type = value;
	}

	updateNumElectrons(value) {
		this.numElectrons = value;
	}

	updateScannerX(x) {
		this.scannerX = x;
	}

	//   updateDim(value) {
	//     this.dim = value
	//   }

	populateElectrons() {
		this.electrons = [];
		for (let i = 0; i < this.numElectrons; i++) {
			let xMin = this.x + 14;
			let xMax = this.w + this.x - 14;
			let yMin = this.y + 14;
			let yMax = this.h + this.y - 14;

			let dim = false;
			//   if (this.type == "s") {
			//     dim = true
			//   }

			let electron = new Electron(
				random(xMin, xMax),
				random(yMin, yMax),
				4.6,
				this.x,
				this.y,
				this.w,
				this.h,
				dim,
				true
			);

			this.electrons.push(electron);
		}
	}

	populateChargeMap() {
		let col = 1;
		// row = 1;
		let xUnit = 15; //19
		let yUnit = 13.4; // 18
		let type = "pos";

		if (this.type == "s") {
			type = "neutral";
		}
		// for each row

		let index = 0;
		for (let col = 0; col < cols; col++) {
			for (let row = 0; row < rows; row++) {
				this.chargeMap.push(
					new Charge(
						type,
						xUnit * col + this.x - 7,
						yUnit * row + this.y - 4,
						false
					)
				);
			}
		}
	}

	updateDopants(value) {
		let allCharges = rows * cols;
		this.dopantAmount = value;
		this.numElectrons = this.dopantAmount;
		this.populateElectrons();

		// Reset the array of dopant indices
		this.dopantIndices = [];
		for (let i = 0; i < this.chargeMap.length; i++) {
			//   this.chargeMap[i].updateType("dim")
			this.chargeMap[i].updateType("neutral");
		}

		// Generate random indices for dopants
		for (let i = 0; i < this.dopantAmount; i++) {
			//   this.electrons[this.numElectrons - i - 1].updateDim(false)

			let index = floor(random(allCharges));
			while (this.dopantIndices.includes(index)) {
				index = floor(random(allCharges));
			}
			this.dopantIndices.push(index);
		}
	}
}
