class Box {
	constructor() {
		this.showBox = true;
		this.foward = false;
		this.chargeType = "pos";
		this.arrowLength = 440;
		this.showArrows = true;
		this.showNet = true;
		this.chargeAmount = 60;
		this.showCharges = true;
		this.sides = "lrp";
		this.sceneOrder = 0;
		this.arrowOffsetY = 0;

		this.x = 310; // x position
		this.y = 140; // y position
		this.h = 300; // height
		this.w = 1; // width

		this.d = 80; // depth
		this.a = -86; // angle
		this.c = this.x + this.w / 2;

		this.lineWeight = this.chargeAmount;
		this.minusLineWeight = 0;

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

	// negbox8 - [charge: "neg", sceneOrder: 1, arrowOffsetY: offsetY, chargeAmount: 80, midzone: true, x = 380]

	updateChargeType(charge) {
		this.chargeType = charge;
	}

	updateChargeAmount(num) {
		this.chargeAmount = num;
		this.lineWeight = num - this.minusLineWeight;
	}

	updateSceneOrder(num) {
		this.sceneOrder = num;
	}

	updateMinusLineWeight(num) {
		this.minusLineWeight += num;
		this.lineWeight += this.minusLineWeight;
	}

	addArrowOffsetY(num) {
		this.arrowOffsetY += num;
	}

	updateArrowOffsetY(num) {
		this.arrowOffsetY = num;
	}

	reverseCharge() {
		if (this.chargeType == "neg") {
			this.chargeType = "pos";
			blue = "#5B95CB";
			this.color = blue;
			this.c = this.x + this.w / 2;
		} else if (this.chargeType == "pos") {
			this.chargeType = "neg";
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

	updateShowBox(value) {
		this.showBox = value;
	}
}
