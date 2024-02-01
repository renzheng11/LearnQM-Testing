class Box {
	constructor(
		showBox,
		foward,
		charge,
		sceneOrder,
		arrowOffsetY,
		chargeAmount,
		midzone,
		arrowLength,
		showArrows,
		showNet,
		sides,
		showCharges,
		x,
		y,
		w,
		d
	) {
		this.showBox = showBox;
		this.foward = foward;
		this.charge = charge;
		this.arrowLength = arrowLength;
		this.showArrows = showArrows;
		this.showNet = showNet;
		this.chargeAmount = chargeAmount;
		this.midzone = midzone;
		this.showCharges = showCharges;
		this.sides = sides;
		this.showChargeGrid = [];
		this.sceneOrder = sceneOrder;
		this.arrowOffsetY = arrowOffsetY;

		this.x = x; // x position
		this.y = y; // y position
		this.h = 300; // height
		this.w = w; // width

		this.d = d; // depth
		this.a = -86; // angle
		this.c = this.x + this.w / 2;

		this.lineWeight = this.chargeAmount;
		this.minusLineWeight = 0;

		// this.showChargeGrid = [ // 5 x 20
		//     [0, 0, 0, 1], // 1
		//     [0, 0, 1, 1], // 2
		//     [0, 1, 1, 1], // 3
		//     [1, 1, 1, 1], // 4
		//     [1, 1, 1, 1], // 5
		//     [1, 1, 1, 1], // 6
		//     [1, 1, 1, 1], // 7
		//     [1, 1, 1, 1], // 8
		//     [1, 1, 1, 1], // 9
		//     [1, 1, 1, 1], // 10
		//     [1, 1, 1, 1], // 11
		//     [1, 1, 1, 1], // 12
		//     [1, 1, 1, 1], // 13
		//     [1, 1, 1, 1], // 14
		//     [1, 1, 1, 1], // 15
		//     [1, 1, 1, 0], // 16
		//     [1, 1, 0, 0], // 17
		//     [1, 0, 0, 0]  // 18
		// ]

		this.showChargeGrid = [
			// 5 x 20
			[0, 0, 0, 0, 1], // 1
			[0, 0, 0, 1, 1], // 1
			[0, 0, 1, 1, 1], // 2
			[0, 1, 1, 1, 1], // 3
			[1, 1, 1, 1, 1], // 4
			[1, 1, 1, 1, 1], // 5
			[1, 1, 1, 1, 1], // 6
			[1, 1, 1, 1, 1], // 7
			[1, 1, 1, 1, 1], // 8
			[1, 1, 1, 1, 1], // 9
			[1, 1, 1, 1, 1], // 10
			[1, 1, 1, 1, 1], // 11
			[1, 1, 1, 1, 1], // 12
			[1, 1, 1, 1, 1], // 13
			[1, 1, 1, 1, 1], // 14
			[1, 1, 1, 1, 1], // 15
			[1, 1, 1, 1, 1], // 16
			[1, 1, 1, 1, 1], // 17
			[1, 1, 1, 1, 0], // 18
			[1, 1, 1, 0, 0], // 19
			[1, 1, 0, 0, 0], // 20
			[1, 0, 0, 0, 0], // 21
		];

		if (this.charge == "pos") {
			blue = "#5B95CB";
			this.color = blue;
			this.c = this.x + this.w / 2;
		} else if (this.charge == "neg") {
			red = "#C15151";
			this.color = red;
			this.x = x;
			this.c = this.x + this.w / 2;
		}
	}

	updateCharge(num) {
		this.chargeAmount = num;
		this.lineWeight = num - this.minusLineWeight;
	}

	updateMinusLineWeight(num) {
		this.minusLineWeight += num;
		this.lineWeight += this.minusLineWeight;
	}

	updateArrowOffsetY(num) {
		this.arrowOffsetY += num;
	}

	resetArrowOffsetY(num) {
		this.arrowOffsetY = num;
	}

	reverseCharge() {
		if (this.charge == "neg") {
			this.charge = "pos";
			blue = "#5B95CB";
			this.color = blue;
			this.c = this.x + this.w / 2;
		} else if (this.charge == "pos") {
			this.charge = "neg";
			red = "#C15151";
			this.color = red;
			// this.x = mouseX;
			this.c = this.x + this.w / 2;
		}
	}

	updateX(x) {
		this.x = x;
		this.c = this.x + this.w / 2;
	}

	updateW(w) {
		this.w = w;
	}

	addSide(str) {
		this.sides += str;
	}

	removeSide(str) {
		this.sides.replace(str, "");
	}

	toggleArrows(value) {
		this.showArrows = value;
	}

	toggleNet(value) {
		this.showNet = value;
	}

	toggleShowBox(value) {
		this.showBox = value;
	}
}
