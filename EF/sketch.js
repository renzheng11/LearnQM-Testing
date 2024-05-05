/* ------------------------------- 
Author: Ren Zheng
Contact: renzheng112@gmail.com
------------------------------- */

// color variables for drawing
let color = {
	grey: [152, 152, 152],
	bg: [18, 18, 18],
	white: [255, 255, 255],
	pos: [125, 241, 148],
	neg: [255, 247, 174],
	net: [117, 190, 255],
};

let canvas;

// Toggle arrows
let showNegArrows;
let showPosArrows;
let showNetArrows;

let drawScene1; // tracks if scene 1 plane has been clicked

let animate;
let animated;

// new boxes
let boxLeft;
let boxRight1;
let boxRight2;
let boxRight3;

// graphs
let graphY;
let graphW;
let graphX;
let graphC;

// Charges
let chargeDivisor;
let chargeCoordinates;
let chargeXArray;
let chargeYArray;
let chargeXRArray;
let chargeYRArray;
let rand; // charge random offset
let totalNegCharge;

// Scenes
let currPosBox;
let currNegBoxes;
let boxPadding;
let flowDirection;

let chargeDensityY;
let eFieldY;

let volumeWidth;

let offsetY;

// Colors
// let color;

function setup() {
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");
	img = loadImage("./images/vecE.png");
	img2 = loadImage("./images/vecELabel.png");
	imgX = loadImage("./images/xLabel.png");

	chargeDivisor = 3.2;
	flowDirection = "right";
	totalNegCharge = 0;

	chargeDensityY = 30;
	eFieldY = 42;

	animate = {
		scene4: false,
		scene5: false,
		scene6: false,
		scene7: false,
	};

	animated = {
		scene4: false,
		scene5: false,
		scene6: false,
		scene7: false,
	};

	currNegBoxes = [];
	showNegArrows = true;
	showPosArrows = true;
	showNetArrows = false;

	graphY = 590;
	graphW = 540;

	leftPadding = 48;

	graphC = graphW / 2 + leftPadding - 8;
	graphX = graphC - graphW / 2 + leftPadding;

	drawScene1 = false;

	boxThickness = 1;

	boxPadding = 72;
	xStart = 310;

	offsetY = 14;

	// instantiate new boxes
	let initBoxes = [boxLeft, boxRight1, boxRight2, boxRight3];

	boxLeft = new Box(
		true,
		false,
		"pos",
		0,
		0,
		60,
		440,
		true,
		"lrp",
		true,
		310,
		140,
		boxThickness,
		80
	);
	boxRight1 = new Box(
		true,
		false,
		"pos",
		0,
		0,
		60,
		440,
		true,
		"lrp",
		true,
		310,
		140,
		boxThickness,
		80
	);
	boxRight2 = new Box(
		true,
		false,
		"pos",
		0,
		0,
		60,
		440,
		true,
		"lrp",
		true,
		310,
		140,
		boxThickness,
		80
	);
	boxRight3 = new Box(
		true,
		false,
		"pos",
		0,
		0,
		60,
		440,
		true,
		"lrp",
		true,
		310,
		140,
		boxThickness,
		80
	);

	volumeWidth = boxRight1.w / 75;

	allPosBoxes = [boxLeft];
	allNegBoxes = [boxRight1, boxRight2, boxRight3];

	chargeXArray = [];
	chargeYArray = [];
	chargeXRArray = [];
	chargeYRArray = [];

	let Px = 15;
	let Py = 16;

	// charge random offset
	rand = [];
	for (let i = 0; i < 170; i++) {
		rand.push(Math.random() * 6);
	}

	chargeCoordinates = [
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
			[Px * 5 + rand[0], Py * 1 + rand[1]],
		], // 1

		[
			[0, 0],
			[0, 0],
			[0, 0],
			[Px * 4 + rand[2], Py * 2 + rand[3]],
			[Px * 5 + rand[4], Py * 2 + rand[5]],
		], // 2

		[
			[0, 0],
			[0, 0],
			[Px * 3 + rand[6], Py * 3 + rand[7]],
			[Px * 4 + rand[8], Py * 3 + rand[9]],
			[Px * 5 + rand[10], Py * 3 + rand[11]],
		], // 3

		[
			[0, 0],
			[Px * 2 + rand[12], Py * 4 + rand[13]],
			[Px * 3 + rand[14], Py * 4 + rand[15]],
			[Px * 4 + rand[16], Py * 4 + rand[17]],
			[Px * 5 + rand[18], Py * 4 + rand[19]],
		], // 4

		[
			[Px + rand[20], Py * 5 + rand[21]],
			[Px * 2 + rand[22], Py * 5 + rand[23]],
			[Px * 3 + rand[24], Py * 5 + rand[25]],
			[Px * 4 + rand[26], Py * 5 + rand[27]],
			[Px * 5 + rand[28], Py * 5 + rand[29]],
		], // 5

		[
			[Px + rand[30], Py * 6 + rand[31]],
			[Px * 2 + rand[32], Py * 6 + rand[33]],
			[Px * 3 + rand[34], Py * 6 + rand[35]],
			[Px * 4 + rand[36], Py * 6 + rand[37]],
			[Px * 5 + rand[38], Py * 6 + rand[39]],
		], // 6

		[
			[Px + rand[40], Py * 7 + rand[41]],
			[Px * 2 + rand[42], Py * 7 + rand[43]],
			[Px * 3 + rand[44], Py * 7 + rand[45]],
			[Px * 4 + rand[46], Py * 7 + rand[47]],
			[Px * 5 + rand[48], Py * 7 + rand[49]],
		], // 7

		[
			[Px + rand[50], Py * 8 + rand[51]],
			[Px * 2 + rand[52], Py * 8 + rand[53]],
			[Px * 3 + rand[54], Py * 8 + rand[55]],
			[Px * 4 + rand[56], Py * 8 + rand[57]],
			[Px * 5 + rand[58], Py * 8 + rand[59]],
		], // 8

		[
			[Px + rand[60], Py * 9 + rand[61]],
			[Px * 2 + rand[62], Py * 9 + rand[63]],
			[Px * 3 + rand[64], Py * 9 + rand[65]],
			[Px * 4 + rand[66], Py * 9 + rand[67]],
			[Px * 5 + rand[68], Py * 9 + rand[69]],
		], // 9

		[
			[Px + rand[70], Py * 10 + rand[71]],
			[Px * 2 + rand[72], Py * 10 + rand[73]],
			[Px * 3 + rand[74], Py * 10 + rand[75]],
			[Px * 4 + rand[76], Py * 10 + rand[77]],
			[Px * 5 + rand[78], Py * 10 + rand[79]],
		], // 10

		[
			[Px + rand[80], Py * 11 + rand[81]],
			[Px * 2 + rand[82], Py * 11 + rand[83]],
			[Px * 3 + rand[84], Py * 11 + rand[85]],
			[Px * 4 + rand[86], Py * 11 + rand[87]],
			[Px * 5 + rand[88], Py * 11 + rand[89]],
		], // 11

		[
			[Px + rand[90], Py * 12 + rand[91]],
			[Px * 2 + rand[92], Py * 12 + rand[93]],
			[Px * 3 + rand[94], Py * 12 + rand[95]],
			[Px * 4 + rand[96], Py * 12 + rand[97]],
			[Px * 5 + rand[98], Py * 12 + rand[99]],
		], // 12

		[
			[Px + rand[100], Py * 13 + rand[101]],
			[Px * 2 + rand[102], Py * 13 + rand[103]],
			[Px * 3 + rand[104], Py * 13 + rand[105]],
			[Px * 4 + rand[106], Py * 13 + rand[107]],
			[Px * 5 + rand[108], Py * 13 + rand[109]],
		], // 13

		[
			[Px + rand[110], Py * 14 + rand[111]],
			[Px * 2 + rand[112], Py * 14 + rand[113]],
			[Px * 3 + rand[114], Py * 14 + rand[115]],
			[Px * 4 + rand[116], Py * 14 + rand[117]],
			[Px * 5 + rand[118], Py * 14 + rand[119]],
		], // 14

		[
			[Px + rand[120], Py * 15 + rand[121]],
			[Px * 2 + rand[122], Py * 15 + rand[123]],
			[Px * 3 + rand[124], Py * 15 + rand[125]],
			[Px * 4 + rand[126], Py * 15 + rand[127]],
			[Px * 5 + rand[128], Py * 15 + rand[129]],
		], // 15

		[
			[Px + rand[130], Py * 16 + rand[131]],
			[Px * 2 + rand[132], Py * 16 + rand[133]],
			[Px * 3 + rand[134], Py * 16 + rand[135]],
			[Px * 4 + rand[136], Py * 16 + rand[137]],
			[Px * 5 + rand[138], Py * 16 + rand[139]],
		], // 16

		[
			[Px + rand[140], Py * 17 + rand[141]],
			[Px * 2 + rand[142], Py * 17 + rand[143]],
			[Px * 3 + rand[144], Py * 17 + rand[145]],
			[Px * 4 + rand[146], Py * 17 + rand[147]],
			[Px * 5 + rand[148], Py * 17 + rand[149]],
		], // 17

		[
			[Px + rand[150], Py * 18 + rand[151]],
			[Px * 2 + rand[152], Py * 18 + rand[153]],
			[Px * 3 + rand[154], Py * 18 + rand[155]],
			[Px * 4 + rand[156], Py * 18 + rand[157]],
			[0, 0],
		], // 18

		[
			[Px + rand[158], Py * 19 + rand[159]],
			[Px * 2 + rand[160], Py * 19 + rand[161]],
			[Px * 3 + rand[162], Py * 19 + rand[163]],
			[0, 0],
			[0, 0],
		], // 19

		[
			[Px + rand[164], Py * 20 + rand[165]],
			[Px * 2 + rand[166], Py * 20 + rand[167]],
			[0, 0],
			[0, 0],
			[0, 0],
		], // 20

		[
			[Px + rand[168], Py * 21 + rand[169]],
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		], // 21
	];

	// less random array
	let num = 24;
	let col = Math.floor(num / 5);
	let row = Math.floor(num / 2);

	// box 1 ???
	for (let r = 0; r < row; r++) {
		for (let c = 0; c < col; c++) {
			chargeXArray.push(boxLeft.x + c * 18 + Math.random() * 2 + 18);
			chargeYArray.push(boxLeft.y + r * 18 + Math.random() * 2);
		}
	}

	for (let r = 0; r < row; r++) {
		for (let c = 0; c < col; c++) {
			chargeXRArray.push(boxLeft.x + c * 18 + Math.random() * 2 + 18);
			chargeYRArray.push(boxLeft.y + r * 18 + Math.random() * 2);
		}
	}

	allBoxes = [boxLeft, boxRight1, boxRight2, boxRight3];

	// populate each box's charge grid
	for (let i = 0; i < allBoxes.length; i++) {
		populateChargeGrid(allBoxes[i]);
	}
}

function draw() {
	background(...color.bg);

	if (sceneCount == 1) {
		scene1();
	} else if (sceneCount == 2) {
		scene2();
	} else if (sceneCount == 3) {
		scene3();
	} else if (sceneCount == 4) {
		scene4();
	} else if (sceneCount == 5) {
		scene5();
	} else if (sceneCount == 6) {
		scene6();
	} else if (sceneCount == 7) {
		scene7();
	} else if (sceneCount == 8) {
		scene8();
	}
}

function scene1() {
	currPosBox = boxLeft;
	currNegBoxes = [];

	drawBox(boxLeft, "s");
	if (drawScene1) {
		drawBox(boxLeft, "l");
		drawBox(boxLeft, "s");
		drawBox(boxLeft, "r");

		drawCharges(boxLeft);

		// Draw E vec symbol
		fill(...color.grey);
		noStroke();
		image(img, 120, 90, img.width / 1.5, img.height / 1.5);
	}
}

function scene2() {
	currPosBox = boxLeft;
	currNegBoxes = [boxLeft];

	drawBox(boxLeft, "l");
	drawBox(boxLeft, "s");
	drawBox(boxLeft, "r");
	drawGraph(boxLeft);
	drawEqs(boxLeft);

	if (boxLeft.chargeAmount > 0) {
		drawCharges(boxLeft);
	}
}

function scene3() {
	currPosBox = boxLeft;
	currNegBoxes = [boxLeft];

	drawGraph(boxLeft);
	drawEqs(boxLeft);

	drawBox(boxLeft, "l");
	drawBox(boxLeft, "s");
	if (boxLeft.chargeAmount > 0) {
		drawCharges(boxLeft);
	}

	drawBox(boxLeft, "r");
}

function scene4() {
	currPosBox = boxLeft;
	currNegBoxes = [boxRight1];

	drawGraph(boxLeft);
	drawEqs(boxLeft);
	drawEqs(boxRight1);

	drawBox(boxLeft, "s");
	drawCharges(boxLeft);

	drawBox(boxRight1, "s");
	drawCharges(boxRight1);

	drawBox(boxLeft, "r");
	drawBox(boxLeft, "l");

	drawBox(boxRight1, "lr");
	drawBox(boxRight1, "p");

	if (mouseIsPressed) {
		mouseX > graphC && mouseX < graphW - 10 ? boxRight1.updateX(mouseX) : null;
	}

	// animating scene 4
	if (animate.scene4 && boxRight1.arrowOffsetY >= 0) {
		boxRight1.addArrowOffsetY(-0.2);
	}
}

function scene5() {
	currPosBox = boxLeft;
	currNegBoxes = [boxRight1];

	drawGraph(boxLeft);
	drawEqs(boxLeft);
	drawEqs(boxRight1);

	drawBox(boxLeft, "s");
	drawCharges(boxLeft);
	drawBox(boxRight1, "s");
	drawCharges(boxRight1);

	showPosArrows ? drawBox(boxLeft, "lr") : null;
	drawBox(boxRight1, "lr");
	drawBox(boxRight1, "p");

	if (animate.scene5 && boxRight1.arrowOffsetY >= 0) {
		boxRight1.addArrowOffsetY(-0.2);
	}
}

function scene6() {
	currPosBox = boxLeft;
	currNegBoxes = [boxRight1];

	drawBox(boxLeft, "s");
	drawCharges(boxLeft);
	drawBox(boxRight1, "s");
	drawCharges(boxRight1);

	if (boxRight2.showBox) {
		currNegBoxes.push(boxRight2);
		drawBox(boxRight2, "s");
		drawCharges(boxRight2);
		drawBox(boxRight2, "lr");
		drawGraph(boxLeft);
		drawEqs(boxLeft);
		drawEqs(boxRight1);
		drawEqs(boxRight2);
	} else {
		drawGraph(boxLeft);
		drawEqs(boxLeft);
		drawEqs(boxRight1);
	}

	drawBox(boxRight1, "lr");
	drawBox(boxLeft, "lr");
	drawBox(boxLeft, "p");

	if (fowardSurface(boxLeft)) {
		drawBox(boxLeft, "s");
		drawCharges(boxLeft);
	}
	if (fowardSurface(boxRight1)) {
		drawBox(boxRight1, "s");
		drawCharges(boxRight1);
	}
	if (fowardSurface(boxRight2) && boxRight2.showBox) {
		drawBox(boxRight2, "s");
		drawCharges(boxRight2);
	}

	if (animate.scene6 && boxRight1.arrowOffsetY >= 0) {
		boxRight1.addArrowOffsetY(-0.2);
	}
}

function scene7() {
	currPosBox = boxLeft;
	currNegBoxes = [boxRight1, boxRight2, boxRight3];

	drawGraph(boxLeft);

	drawEqs(boxLeft);
	drawEqs(boxRight1);
	drawEqs(boxRight2);
	drawEqs(boxRight3);

	drawBox(boxLeft, "s");
	drawCharges(boxLeft);

	drawBox(boxLeft, "l");
	drawBox(boxRight1, "s");
	drawCharges(boxRight1);

	drawBox(boxRight1, "p");
	drawBox(boxRight2, "s");
	drawCharges(boxRight2);

	drawBox(boxRight2, "p");
	drawBox(boxRight3, "s");
	drawCharges(boxRight3);

	drawBox(boxRight3, "p");
	drawBox(boxLeft, "r");

	drawBox(boxRight1, "lr");
	drawBox(boxRight2, "lr");
	drawBox(boxRight3, "lr");

	if (fowardSurface(boxLeft)) {
		drawBox(boxLeft, "s");
		drawCharges(boxLeft);
	}
	if (fowardSurface(boxRight1)) {
		drawBox(boxRight1, "s");
		drawCharges(boxRight1);
	}
	if (fowardSurface(boxRight2)) {
		drawBox(boxRight2, "s");
		drawCharges(boxRight2);
	}
	if (fowardSurface(boxRight3)) {
		drawBox(boxRight3, "s");
		drawCharges(boxRight3);
	}
}

function fowardSurface(box) {
	if (mouseX > box.x && mouseX < box.x + 64) {
		return true;
	} else {
		return false;
	}
}

function scene8() {
	//8scene
	currPosBox = boxLeft;
	currNegBoxes = [boxRight1];
	drawGraph(boxLeft);
	drawEqs(boxLeft);
	drawEqs(boxRight1);

	drawBox(boxLeft, "sl");
	drawCharges(boxLeft);
	drawBox(boxRight1, "pslr");
	drawBox(boxRight1, "l");

	drawBox(boxLeft, "r");
	drawCharges(boxRight1);
	drawBox(boxRight1, "p");
}

function toggleBox() {
	resetCharges();

	// scene 6 negative box
	if (!boxRight2.showBox) {
		boxRight2.updateShowBox(true);
		currNegBoxes.push(boxRight2);

		document.getElementById("negbox6").textContent = "Remove surface";
	} else {
		boxRight2.updateShowBox(false);
		if (currNegBoxes.length > 1) {
			currNegBoxes.pop();
		}

		document.getElementById("negbox6").textContent = "Add surface";
	}
}

function populateChargeGrid(box) {
	for (let r = 0; r < chargeCoordinates.length; r++) {
		for (let c = 0; c < 5; c++) {
			let chance = Math.floor(Math.random() * 100);
			if (chance <= box.chargeAmount) {
				box.showChargeGrid[r][c] = 1;
			} else {
				box.showChargeGrid[r][c] = 0;
			}
		}
	}
}

function flowCharges(value) {
	let chargeMapA = {};
	let chargeMapC = {};

	// box A amount - starts with 40
	let start = 40;
	for (let i = 0; i <= 40; i++) {
		chargeMapA[i] = start;
		start -= 1;
	}

	// boxC amount - starts with 15
	start = 0;
	for (let i = 0; i <= 40; i++) {
		chargeMapC[i] = start;
		start += 1;
	}

	boxRight1.updateChargeAmount(chargeMapA[value]);
	boxRight3.updateChargeAmount(chargeMapC[value]);
	resetCharges(boxRight1);
	resetCharges(boxRight3);
}

function drawEqs(box, loc) {
	// E = 5.56 x 10^6 (p)
	// Math.pow(x, y) returns x^y
	// let ef = Math.pow(10,6)

	// charge density: box.chargeAmount / max charge

	// example
	// E = 5.56 x 10^6
	// charge density: .1 microC/cm^2
	// electric field: 5.56 x 10^5

	noStroke();

	let max = 80;
	let chargeDensity = (box.chargeAmount / 80).toFixed(2);
	let eField = (5.56 * chargeDensity).toFixed(2);

	if (sceneCount == 8 && box.chargeType == "neg") {
		// charge per unit volume (mC/cm^3) = ( charge per unit area (µC/cm^2) / width (µm) ) * 10
		chargeDensity = ((chargeDensity / volumeWidth) * 10).toFixed(2);
	}

	// Electric Field:
	textSize(9.4);

	if (box.chargeType == "pos") {
		fill(...color.pos);
	} else {
		fill(...color.neg);
	}

	let sign = "";
	box.chargeType == "pos" ? (sign += "+") : (sign += "-");

	if (sceneCount < 8 || box.chargeType == "pos") {
		text(`${sign}${chargeDensity} µC/cm^2`, box.x + 46, chargeDensityY);
	} else if (sceneCount == 8 && box.chargeType == "neg") {
		text(
			`${sign}${chargeDensity} mC/cm^3`,
			box.x + boxRight1.w / 2 + 46,
			chargeDensityY
		);
	}

	if (sceneCount == 8) {
		if (box.chargeType == "neg") {
		} else {
			text(`± ${eField} MV/cm`, box.x + 46, eFieldY);
		}
	} else {
		text(`± ${eField} MV/cm`, box.x + 46, eFieldY);
	}
}

function drawAxis() {
	stroke(...color.grey); // axis color
	strokeWeight(1);

	canvas.drawingContext.setLineDash([7, 3]);

	line(graphC, graphY - 76, graphC, graphY + 60); // vert

	let xAxisExtend = 0;
	sceneCount == 8 ? (xAxisExtend = 20) : null;
	line(graphX, graphY, graphW + xAxisExtend + 10, graphY); // hor

	noStroke();
	fill(...color.grey);
	image(img2, graphC - 10, graphY - 100, img.width / 2, img.height / 2);

	textFont("Cambria");
	textStyle(ITALIC);
	textSize(16);

	if (sceneCount == 8) {
		text("x (µm)", graphC + graphW / 2 - 34 + xAxisExtend, graphY + 3);
	} else {
		text("x", graphC + graphW / 2 - 24 + xAxisExtend, graphY + 3);
	}

	textStyle(NORMAL);
	textFont("Sans-serif");
	textSize(9.4);

	canvas.drawingContext.setLineDash([]);

	let size = 4.4;
	stroke(...color.grey);

	noStroke();
	// ticks
	text("1.11 MV/cm —", graphC - 60, graphY - 54);
	text("-1.11 MV/cm —", graphC - 64, graphY + 54);

	// y axis arrow
	stroke(...color.grey);
	// up
	line(graphC, graphY - 76, graphC - size, graphY - 76 + size);
	line(graphC, graphY - 76, graphC + size, graphY - 76 + size);

	// down
	line(graphC, graphY + 61, graphC + size, graphY + 61 - size);
	line(graphC, graphY + 61, graphC - size, graphY + 61 - size);

	if (sceneCount != 8) {
		// x axis arrow - right
		line(graphW + 10, graphY, graphW - size + 10, graphY - size);
		line(graphW + 10, graphY, graphW - size + 10, graphY + size);

		// x axis arrow - left
		line(graphX, graphY, graphX + size, graphY + size);
		line(graphX, graphY, graphX + size, graphY - size);
	}

	if (sceneCount == 8) {
		textStyle(NORMAL);
		// x axis arrow
		line(graphW + 14, graphY, graphW - size + 14, graphY - size);
		line(graphW + 14, graphY, graphW - size + 14, graphY + size);

		// x axis arrow - left
		line(graphX, graphY, graphX + size, graphY + size);
		line(graphX, graphY, graphX + size, graphY - size);

		// tick 1
		text("|", graphC + 70, graphY + 7);
		text("1µm", graphC + 60, graphY + 16);

		// tick 2
		text("|", graphC + 143, graphY + 7);
		text("2µm", graphC + 135, graphY + 16);

		// tick 3
		text("|", graphC + 220, graphY + 7);
		text("3µm", graphC + 214, graphY + 16);
	}
}

function drawGraph(box) {
	drawAxis();
	strokeWeight(2);

	let posHeights = [];
	let negHeights = [];
	let netHeights = [];
	let negHeightsTotal = 0;

	let posXPoints;
	let negXPoints;
	let netXPoints;

	// pos graph lines
	posXPoints = [graphX, graphC];
	posHeights.push(Number(boxLeft.chargeAmount), Number(-boxLeft.chargeAmount));
	// console.log(posHeights);

	// neg graph lines
	// left side
	if (currNegBoxes[0]) {
		negXPoints = [graphX];
		// populate negative box x positions
		for (let i = 0; i < currNegBoxes.length; i++) {
			negXPoints.push(float(currNegBoxes[i].x));
		}

		// right side
		// populate negative graph line heights
		negHeights.push(-currNegBoxes[0].chargeAmount);

		for (let i = 0; i < currNegBoxes.length; i++) {
			negHeightsTotal += currNegBoxes[i].chargeAmount;
			negHeights.push(float(negHeightsTotal));
		}

		// for positive left side - make the last one the negative total of the right side
		negHeights[0] = -negHeights[negHeights.length - 1];

		// volume
		netHeightsTotal = 0;

		// net graph lines
		if (currNegBoxes.length >= 1) {
			netXPoints = [graphX, graphC, negXPoints[1]];

			netHeights.push(posHeights[0] + negHeights[0]); // index 0
			netHeights.push(-posHeights[0] + negHeights[0]); // index 1
			netHeights.push(-posHeights[0] + negHeights[1]); // index 2
		}
		// console.log("xPos", posXPoints);
		// console.log("HPos", posHeights);
		// console.log("xNeg", negXPoints);
		// console.log("hNeg", negHeights);
		// console.log("Xnet", netXPoints);
		// console.log("Hnet", netHeights);
		if (currNegBoxes.length >= 2) {
			netXPoints.push(negXPoints[2]);
			netHeights.push(-posHeights[0] + negHeights[2]);
		}
		if (currNegBoxes.length >= 3) {
			if (flowDirection == "right") {
				// right
				netXPoints.push(negXPoints[3]);
				netHeights.push(-posHeights[0] + negHeights[3]);
			} else if (flowDirection == "left") {
				// left
				netXPoints.push(negXPoints[3]);
				netHeights.push(-posHeights[0] + negHeights[3]);
			}
		}

		graphNorm = 1.4;
		// standardize the heights
		for (let i = 0; i < posHeights.length; i++) {
			posHeights[i] = posHeights[i] / graphNorm;
		}
		for (let i = 0; i < negHeights.length; i++) {
			negHeights[i] = negHeights[i] / graphNorm;
		}
		for (let i = 0; i < netHeights.length; i++) {
			netHeights[i] = netHeights[i] / graphNorm;
		}

		if (box.chargeType == "pos" && showPosArrows) {
			drawLines(posXPoints, posHeights, color.pos, "pos", false, false);
		}
		if (sceneCount == 3 && boxLeft.chargeType == "neg" && showNegArrows) {
			drawLines(negXPoints, negHeights, color.neg, "neg", false, false);
		}

		if (sceneCount > 3 && showNegArrows) {
			drawLines(negXPoints, negHeights, color.neg, "neg", false, false);
		}

		if (
			sceneCount != 1 &&
			sceneCount != 2 &&
			sceneCount != 3 &&
			showNetArrows
		) {
			drawLines(netXPoints, netHeights, color.net, "net", false, false);
		}
	}

	noStroke();
	fill(...color.white);
	text("Charge Density:", 240, chargeDensityY);
	text("Electric Field:", 240, eFieldY);

	if (sceneCount > 3 && showNetArrows) {
		text("Net Electric Field:", 240, eFieldY + 420);

		let eFieldArray = getEField();

		let gap = 8;
		for (let i = 0; i < currNegBoxes.length; i++) {
			let chargeAmount = eFieldArray[i + 1];

			let chargeDensity = (chargeAmount / 80).toFixed(2);
			let eField = (5.56 * chargeDensity).toFixed(2);

			fill(...color.net);
			text(` ${int(eField).toFixed(2)} MV/cm`, box.x + gap, eFieldY + 420);
			gap += 72;
		}
		gap = 0;
	}
}

function drawLines(points, rawHeights, color, colorString, drawMid) {
	let graphDivisor = 2;
	let unit = 1 / graphDivisor;

	let heights = [];

	for (let i = 0; i < rawHeights.length; i++) {
		heights[i] = unit * rawHeights[i] + graphY;
	}

	let graphEnd = graphC + graphW / 2 - 46;
	stroke(...color);
	let drawConnecting = true;

	for (i = 0; i < points.length; i++) {
		if (sceneCount == 8 && i == points.length - 2 && colorString != "pos") {
			drawConnecting = false;
		}

		if (i == points.length - 1) {
			// last graph line
			if (sceneCount == 8 && (colorString == "neg" || colorString == "net")) {
				line(points[i], heights[i - 1], boxRight1.x + boxRight1.w, heights[i]); // line
				line(boxRight1.x + boxRight1.w, heights[i], graphEnd + 17, heights[i]); // line
			} else {
				line(points[i], heights[i], graphEnd + 17, heights[i]); // line
			}
		} else {
			// all other lines
			line(points[i], heights[i], points[i + 1], heights[i]); // line
			if (sceneCount == 4 && boxRight1.x > graphC + 4) {
				line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
			} else if (drawConnecting && (sceneCount != 4 || color != color.net)) {
				line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
			}
		}
	}
}

function toggleArrows(value) {
	if (value == "pos") {
		showPosArrows = !showPosArrows;
	}
	if (value == "net") {
		showNetArrows = !showNetArrows;
	}
	if (value == "neg") {
		showNegArrows = !showNegArrows;
	}
}

function reverseCharge() {
	boxLeft.reverseCharge();
}

function animateScreen() {
	if (currNegBoxes[0].chargeAmount == 0) {
		alert(
			"The negative charge amount must be greater than 0 in order to screen the electric field due to  positive charge."
		);
	}

	showPosArrows = true;
	showNegArrows = true;

	if (sceneCount == 4 || sceneCount == 5) {
		resetHTML(".posToggle", "checked", true);
		resetHTML(".negToggle", "checked", true);
		resetHTML(".netToggle", "checked", true);

		if (document.querySelector(".showScreen").textContent == "Reset") {
			if (sceneCount == 5) {
				animate.scene5 = false;
				animated.scene5 = false;
			}
			if (sceneCount == 4) {
				animate.scene4 = false;
				animated.scene4 = false;
			}
			currPosBox.updateMinusLineWeight(boxRight1.chargeAmount);
			boxRight1.updateArrowOffsetY(14);
			resetHTML(".showScreen", "textContent", "Show Screening");
			resetHTML(".netToggle", "display", "none");
			resetHTML(".netLabel", "display", "none");

			showNetArrows = false;
		} else if (boxRight1.chargeAmount > 0) {
			if (sceneCount == 4) {
				if (animate.scene4 == false) {
					animate.scene4 = true;
					resetHTML(".showScreen", "textContent", "Reset");
				}
			}
			if (sceneCount == 5) {
				if (animate.scene5 == false) {
					animate.scene5 = true;
					resetHTML(".showScreen", "textContent", "Reset");
				}
			}

			if (animated.scene5 == false) {
				// wait for arrows to animate up
				setTimeout(() => {
					currPosBox.updateMinusLineWeight(-boxRight1.lineWeight);
					if (sceneCount == 4) {
						animated.scene4 = true;
					}
					if (sceneCount == 5) {
						animated.scene5 = true;
					}
					showNetArrows = true;
					showPosArrows = false;
					showNegArrows = false;
					resetHTML(".posToggle", "checked", false);
					resetHTML(".negToggle", "checked", false);
					resetHTML(".netToggle", "display", "inline-block");
					resetHTML(".netLabel", "display", "inline-block");
				}, "1200");
			}
		}
	}

	if (sceneCount == 6) {
		if (animate.scene6 == false) {
			animate.scene6 = true;
		}

		if (animated.scene6 == false) {
			setTimeout(() => {
				currPosBox.updateMinusLineWeight(-boxRight1.lineWeight);
				animated.scene6 = true;
			}, "1200");
		}
	}
}

function drawSurface(box) {
	strokeWeight(1.4);
	let surfaceOpacity = 0;

	if (sceneCount == 6 && box == boxRight2) {
		surfaceOpacity = surfaceOpacity + 40;
	}

	if (sceneCount == 7 && box == boxRight2) {
		surfaceOpacity = surfaceOpacity + 40;
	}
	if (sceneCount == 7 && box == boxRight3) {
		surfaceOpacity = surfaceOpacity + 80;
	}

	// surface color
	if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
		box.chargeType == "pos" ? stroke(...color.pos) : stroke(...color.neg);
		fill(...color.bg);
	} else {
		box.chargeType == "pos" ? stroke(...color.pos) : stroke(...color.neg);
		fill(...color.bg);
	}

	beginShape();
	vertex(box.x, box.y);
	vertex(box.x, box.y + box.h);
	vertex(box.x + box.w, box.y + box.h);
	vertex(box.x + box.w, box.y);
	endShape(CLOSE);

	// box side
	beginShape();
	vertex(box.x + box.w, box.y + box.h); // left top
	vertex(box.x + box.w, box.y); // left bottom
	vertex(box.x + box.w + box.d, box.y + box.a); // top right
	vertex(box.x + box.w + box.d, box.y + box.h + box.a);
	endShape(CLOSE);

	// box top
	beginShape();
	vertex(box.x, box.y); // bottom left
	vertex(box.x + box.w, box.y); // bottom right
	vertex(box.x + box.w + box.d, box.y + box.a); // top right
	vertex(box.x + box.d, box.y + box.a); // top left
	endShape(CLOSE);
}

function drawBox(box, sides) {
	noStroke();
	fill(...color.grey);

	if (sceneCount != 1) {
		image(img, 120, 90, img.width / 1.5, img.height / 1.5);
	}

	if (sides.includes("p")) {
		drawBoxArrows(box, false, "p");
	}

	if (sides.includes("l") && box.showArrows) {
		drawBoxArrows(box, false, "l");
	}

	if (sides.includes("s")) {
		drawSurface(box);
	}

	if (sides.includes("r") && box.showArrows) {
		drawBoxArrows(box, false, "r");
	}
}

function drawCharges(box) {
	let showCharges = box.showChargeGrid;
	let chargeSize = 11;
	let signSize = chargeSize - 4;
	let chargeOpacity = 100;
	let signOpacity = 80;

	noStroke();

	if (box.chargeType == "pos") {
		fill(...color.pos, chargeOpacity);
	} else if (box.chargeType == "neg") {
		fill(...color.neg, chargeOpacity);
	}

	if (sceneCount == 8 && box == boxRight1) {
		Px = 0;
		Py = 18;
		let margin = 12;

		for (let r = 0; r < 16; r++) {
			Px = 0;
			// for each column
			for (let c = 0; c < 5; c++) {
				Px = box.w / 5.36;
				margin = box.w / 8;

				let chargeX = margin + box.x + Px * c;
				let chargeY = 14 + box.y + Py * r;

				noStroke();
				chargeY > 70 ? circle(chargeX, chargeY, chargeSize) : null;
				strokeWeight(1);

				stroke(...color.neg, signOpacity); // neg sign

				// cross line
				chargeY > 70
					? line(
							chargeX - signSize / 2,
							chargeY,
							chargeX + signSize / 2,
							chargeY
					  )
					: null;
			}
		}
	} else {
		let X = box.x - 6;
		let Y = box.y - 70;
		// for each row (18)
		for (let r = 0; r < chargeCoordinates.length; r++) {
			// for each column
			for (let c = 0; c < 5; c++) {
				let chargeX = chargeCoordinates[r][c][0] + X;
				let chargeY = chargeCoordinates[r][c][1] + Y;

				if (showCharges[r][c] == 1 && chargeY > 70) {
					noStroke();
					circle(chargeX, chargeY, chargeSize);
					strokeWeight(1);

					if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
						stroke(...color.neg, signOpacity + 30); // neg sign
					} else {
						stroke(...color.neg, signOpacity); // neg sign
					}

					// cross line
					line(
						chargeX - signSize / 2,
						chargeY,
						chargeX + signSize / 2,
						chargeY
					);
					if (box.chargeType == "pos") {
						// up line
						line(
							chargeX,
							chargeY - signSize / 2,
							chargeX,
							chargeY + signSize / 2
						);
					}
				}
			}
		}
		fill(...color.bg);
		noStroke();
		rect(0, 0, 30, 30); //hide corners
	}
}

function drawBoxArrows(box, showScreen, sides) {
	let rows;
	let spaceBetween;
	let spacing;
	let offsetX = 0;
	let offsetY = 0;
	let fillAmount;

	if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
		fillAmount = 255; // 3d fillamount
		rows = 5;
		spaceBetween = rows * 10;
		spacing = 40;
	} else {
		fillAmount = 240; // 2d fillamount
		rows = 4;
		spaceBetween = rows * 17;
		spacing = 20;
	}

	// for each row
	for (let r = 0; r < rows; r++) {
		fillAmount = 255;

		// for each set in z axis
		for (let i = 0; i < 4; i++) {
			if (sceneCount != 1 && sceneCount != 2 && sceneCount != 3) {
				if (sides.includes("p") && showNetArrows) {
					drawSets(
						box,
						"net",
						fillAmount,
						showScreen,
						spacing,
						sides,
						offsetX,
						offsetY
					);
				}
			}

			if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
				// 3D
				if (box.chargeType == "pos" && showPosArrows) {
					drawSets(
						box,
						"pos",
						fillAmount,
						showScreen,
						spacing,
						sides,
						offsetX,
						offsetY
					);
				}
				if (box.chargeType == "neg" && showNegArrows) {
					drawSets(
						box,
						"neg",
						fillAmount,
						showScreen,
						spacing,
						sides,
						offsetX,
						offsetY
					);
				}
			} else {
				//2D
				if (box.chargeType == "pos" && showPosArrows && box.showArrows) {
					drawSets(
						box,
						"pos",
						fillAmount,
						showScreen,
						spacing,
						sides,
						offsetX,
						offsetY
					);
				}
				if (box.chargeType == "neg" && showNegArrows && box.showArrows) {
					drawSets(
						box,
						"neg",
						fillAmount,
						showScreen,
						spacing,
						sides,
						offsetX,
						offsetY
					);
				}
			}

			offsetX += 20;
			offsetY -= 24;
			if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
				if (i == 0) {
					fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
				} else if (i == 1) {
					fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
				} else if (i == 2) {
					fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
				} else if (i == 3) {
					fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
				}
			} else {
				fillAmount = 0;
			}
		}
		spacing += spaceBetween;
		offsetX = 0;
		offsetY = 0;
		zRow = 1;

		// reset fillAmount
		if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
			fillAmount = 255; // 3d fillamount
		} else {
			fillAmount = 255;
		}
	}
	spacing = spaceBetween - 6;
}

// currfunction
function drawArrow(
	x1,
	x2,
	y,
	arrowLoc,
	arrowDir,
	color,
	lineWeight,
	fillAmount
) {
	// draw line + triangle together
	strokeCap(SQUARE);
	strokeWeight(lineWeight);
	stroke(...color, fillAmount);

	let triangleSize = 12;

	if (arrowLoc == "l" && arrowDir == "l") {
		line(x1 + triangleSize, y, x2, y);
		fill(...color, fillAmount);
		noStroke();
		if (lineWeight > 0) {
			drawTriangle(triangleSize, arrowDir, x1, y);
		}
	} else if (arrowLoc == "l" && arrowDir == "r") {
		line(x1, y, x2 - triangleSize, y);
		fill(...color, fillAmount);
		noStroke();
		if (lineWeight > 0) {
			drawTriangle(triangleSize, arrowDir, x2 - 140 + triangleSize, y);
		}
	} else if (arrowLoc == "r" && arrowDir == "l") {
		line(x1, y, x2 - triangleSize, y);
		fill(...color, fillAmount);
		noStroke();
		if (lineWeight > 0) {
			drawTriangle(triangleSize, arrowDir, x2 - 140, y);
		}
	} else if (arrowLoc == "r" && arrowDir == "r") {
		line(x1, y, x2 - triangleSize, y);
		fill(...color, fillAmount);
		noStroke();
		if (lineWeight > 0) {
			drawTriangle(triangleSize, arrowDir, x2, y);
		}
	}
}

function getEField() {
	let fieldCharges = [];
	let pos = currPosBox.chargeAmount;
	let neg1 = currNegBoxes[0].chargeAmount;
	let neg2 = 0;
	let neg3 = 0;

	if (currNegBoxes[1]) {
		neg2 = currNegBoxes[1].chargeAmount;
	}

	if (currNegBoxes[2]) {
		neg3 = currNegBoxes[2].chargeAmount;
	}

	// left = pos - all neg
	fieldCharges.push(pos - (neg1 + neg2 + neg3));
	// first =  pos + neg1 + neg2 + neg 3
	fieldCharges.push(int(pos) + int(neg1) + int(neg2) + int(neg3));
	// second = pos - (neg 1)
	fieldCharges.push(pos - neg1);
	// third = pos - (neg 1 + neg 2)
	fieldCharges.push(pos - (neg1 + neg2));
	// last = pos - all neg
	fieldCharges.push(pos - (neg1 + neg2 + neg3));

	return fieldCharges;
}

function drawSets(
	box,
	type,
	fillAmount,
	showScreen,
	spacing,
	sides,
	offsetX,
	offsetY
) {
	let thickScale = 0.2;
	let gap = 3;
	let lineSize = 255;

	let currAnimate;
	let currAnimated;

	let animatedOffset = 18;

	if (sceneCount == 4) {
		currAnimate = animate.scene4;
		currAnimated = animated.scene4;
	}
	if (sceneCount == 5) {
		currAnimate = animate.scene5;
		currAnimated = animated.scene5;
	}

	if (type == "pos") {
		let lineWeight = (currPosBox.chargeAmount / chargeDivisor) * thickScale;
		// pos left lines
		lineWeight = (currPosBox.chargeAmount / chargeDivisor) * thickScale;
		if (
			sides.includes("l") &&
			currPosBox.chargeAmount != 0 &&
			lineWeight != 0
		) {
			if (
				sceneCount == 4 ||
				sceneCount == 5 ||
				sceneCount == 6 ||
				sceneCount == 7
			) {
				let x1 = currPosBox.c - lineSize - gap + offsetX;
				let x2 = currPosBox.c - gap + offsetX - 2;
				let y = currPosBox.y + spacing + offsetY;

				if (currAnimated) {
					y += animatedOffset;
				}

				drawArrow(x1, x2, y, "l", "l", color.pos, lineWeight, fillAmount);
			} else {
				// 3d
				let x1 = currPosBox.c - lineSize - gap + offsetX;
				let x2 = currPosBox.c - gap + offsetX - 2;
				let y = currPosBox.y + spacing + offsetY;

				drawArrow(x1, x2, y, "l", "l", color.pos, lineWeight, fillAmount);
			}
		}

		// pos right lines
		if (
			sides.includes("r") &&
			currPosBox.chargeAmount != 0 &&
			lineWeight != 0
		) {
			if (
				sceneCount == 4 ||
				sceneCount == 5 ||
				sceneCount == 6 ||
				sceneCount == 7
			) {
				lineWeight = (currPosBox.chargeAmount / chargeDivisor) * thickScale;
				let x1 = gap + currPosBox.c + offsetX;
				let x2 = gap + currPosBox.c + lineSize + offsetX;
				let y = currPosBox.y + spacing + offsetY;

				if (currAnimated) {
					y += animatedOffset;
				}

				drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);
			} else {
				let x1 = gap + currPosBox.c + offsetX;
				let x2 = gap + currPosBox.c + lineSize + offsetX;
				let y = currPosBox.y + spacing + offsetY;

				drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);
			}
		}
	}

	if (type == "neg") {
		let lineWeight = (box.chargeAmount / chargeDivisor) * thickScale;
		stroke(...color.neg, fillAmount); // HERE

		if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
			// 3D
			if (sides.includes("r")) {
				let x1 = gap + box.x + box.w + offsetX;
				let x2 = gap + box.x + lineSize + offsetX;
				let y = box.y + spacing + offsetY;

				// neg right line
				if (box.chargeAmount > 0) {
					drawArrow(x1, x2, y, "r", "l", color.neg, lineWeight, fillAmount);
				}
			}

			if (sides.includes("l")) {
				x1 = box.x - lineSize + offsetX;
				x2 = box.x + offsetX + 8;
				y = box.y + spacing + offsetY;

				if (box.chargeAmount > 0) {
					drawArrow(x1, x2, y, "l", "r", color.neg, lineWeight, fillAmount);
				}
			}
		}

		// arrows neg 2d
		else {
			// 2d
			offsetY = box.arrowOffsetY;
			// neg right side
			if (sides.includes("r") && box.chargeAmount > 0) {
				// if (sides.includes("r") && offsetY > 0 && box.chargeAmount > 0) {
				// scene 8 sloped arrows
				if (sceneCount == 8) {
					fill(...color.neg, fillAmount);
					noStroke();

					// straight
					beginShape();

					vertex(568, boxRight1.y + spacing - 3 + offsetY);
					vertex(
						boxRight1.x + boxRight1.w,
						boxRight1.y + spacing - 3 + offsetY
					);
					vertex(
						boxRight1.x + boxRight1.w,
						boxRight1.y + spacing + 3 + offsetY
					);
					vertex(568, boxRight1.y + spacing + 3 + offsetY);
					endShape(CLOSE);

					// sloping
					beginShape();
					vertex(
						boxRight1.x + boxRight1.w,
						boxRight1.y + spacing - 3 + offsetY
					);
					vertex(
						boxRight1.x + boxRight1.w,
						boxRight1.y + spacing + 3 + offsetY
					);
					vertex(
						boxRight1.x + boxRight1.w / 2 + 6,
						boxRight1.y + spacing + offsetY
					);
					endShape(CLOSE);

					// draw triangle
					let x = boxRight1.x + boxRight1.w / 2; // left x
					let y = boxRight1.y + spacing + offsetY; // left y
					drawTriangle(12, "l", x, y);
				}
				// all other scenes
				else {
					let x1 = gap + box.x + box.w;
					let x2 = 567;
					let y = box.y + spacing + offsetY;

					if (currAnimated) {
						y += animatedOffset * 2;
					}

					drawArrow(x1, x2, y, "l", "l", color.neg, lineWeight, fillAmount);
				}
			}

			// neg left arrows
			if (sides.includes("l") && box.chargeAmount > 0) {
				if (
					sceneCount == 4 ||
					sceneCount == 5 ||
					sceneCount == 6 ||
					sceneCount == 7
				) {
					let lineWeight = (box.chargeAmount / chargeDivisor) * thickScale;
					let x1 = 52;
					let x2 = box.x - gap;
					let y = box.y + spacing + offsetY;

					// if (currAnimated) {
					//     x1 = currPosBox.x + gap;
					//     y += animatedOffset * 2;
					// }

					if (currAnimated) {
						y += animatedOffset * 2;
					}

					drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount);
				} else if (sceneCount == 8) {
					// right
					fill(...color.neg, fillAmount);
					noStroke();

					// straight
					beginShape();
					vertex(boxRight1.x - 66, boxRight1.y + spacing - 3 + offsetY);
					vertex(boxRight1.x, boxRight1.y + spacing - 3 + offsetY);
					vertex(boxRight1.x, boxRight1.y + spacing + 3 + offsetY);
					vertex(boxRight1.x - 66, boxRight1.y + spacing + 3 + offsetY);
					endShape(CLOSE);

					// sloping
					beginShape();
					vertex(boxRight1.x, boxRight1.y + spacing - 3 + offsetY);
					vertex(boxRight1.x, boxRight1.y + spacing + 3 + offsetY);
					vertex(
						boxRight1.x + boxRight1.w / 2 - 6,
						boxRight1.y + spacing + offsetY
					);
					endShape(CLOSE);

					// draw triangle
					let x = boxRight1.x + boxRight1.w / 2; // left x
					let y = boxRight1.y + spacing + offsetY; // left y
					drawTriangle(12, "r", x, y);
				} else {
					let lineWeight = (box.chargeAmount / chargeDivisor) * thickScale;
					let x1 = 52;
					let x2 = box.x - gap;
					let y = box.y + spacing + offsetY;

					drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount);
				}
			}
		}
	}

	if (type == "net") {
		let netOffsetY = 32;
		let netOffsetX = -6;

		sceneCount == 6 ? (netOffsetY = 42) : null;
		sceneCount == 7 ? (netOffsetY = 54) : null;

		if (sceneCount == 8) {
			// draw thinning arrow
			fill(...color.net, fillAmount);
			noStroke();

			// straight
			beginShape();
			vertex(boxRight1.x - 66, boxRight1.y + spacing + netOffsetY - 3);
			vertex(boxRight1.x, boxRight1.y + spacing + netOffsetY - 3);
			vertex(boxRight1.x, boxRight1.y + spacing + netOffsetY + 3);
			vertex(boxRight1.x - 66, boxRight1.y + spacing + netOffsetY + 3);

			endShape(CLOSE);

			// sloping
			beginShape();
			vertex(boxRight1.x, boxRight1.y + spacing + netOffsetY - 3);
			vertex(boxRight1.x, boxRight1.y + spacing + netOffsetY + 3);
			vertex(boxRight1.x + boxRight1.w, boxRight1.y + spacing + netOffsetY);
			endShape(CLOSE);

			// draw triangle
			let x = boxRight1.x + netOffsetX + 4 + boxRight1.w; // left x
			let y = boxRight1.y + spacing + netOffsetY; // left y
			drawTriangle(12, "r", x, y);
		} else if (sceneCount < 8) {
			// for each negative box
			for (i = 0; i <= currNegBoxes.length - 1; i++) {
				let lineWeight =
					(currNegBoxes[i].chargeAmount / chargeDivisor) * thickScale +
					(currPosBox.chargeAmount / chargeDivisor) * thickScale;

				let netChargeAmount = getEField();

				// net right line
				if (i == 0) {
					// first neg box
					// if (
					// 	currNegBoxes[i].x > graphC + 16 &&
					// 	currNegBoxes[i].chargeAmount > 0
					// ) {
					if (currNegBoxes[i].x > graphC + 16) {
						let lineWeight =
							(netChargeAmount[i + 1] / chargeDivisor) * thickScale;
						let x1 = currPosBox.x + gap; // right x
						let x2 = currNegBoxes[i].x + netOffsetX + 4; // left x

						let y = currNegBoxes[i].y + spacing; // left y (no offset after animation)

						if (!currAnimate && !currAnimated) {
							y += netOffsetY;
						}
						console.log(lineWeight);
						drawArrow(x1, x2, y, "r", "r", color.net, lineWeight, fillAmount);
					}
				} else {
					// in betweens
					// calculate line weights up to now
					let lineWeight =
						(netChargeAmount[i + 1] / chargeDivisor) * thickScale;
					let x1 = currNegBoxes[i - 1].x + gap; // right x
					let x2 = currNegBoxes[i].x + netOffsetX + 3; // left x
					let y = currNegBoxes[i].y + spacing + netOffsetY; // left y

					drawArrow(x1, x2, y, "r", "r", color.net, lineWeight, fillAmount);
				}
				if (i == currNegBoxes.length - 1) {
					// last box
					let totalNegCharge = 0;
					for (let i = 0; i < currNegBoxes.length; i++) {
						totalNegCharge += currNegBoxes[i].chargeAmount;
					}
					totalNegCharge = float(totalNegCharge);

					let lineWeight =
						((currPosBox.chargeAmount - totalNegCharge) / chargeDivisor) *
						thickScale;

					if (
						currNegBoxes[i].x > graphC + 16 &&
						currNegBoxes[i].chargeAmount > 0
					) {
						let x1 = currNegBoxes[i].x + netOffsetX + 9; // right x
						let x2 = 570; // left x
						// let y = currNegBoxes[i].y + spacing + netOffsetY; // left y
						let y = currNegBoxes[i].y + spacing; // left y
						if (!currAnimate && !currAnimated) {
							y += netOffsetY;
						}

						if (lineWeight > 0) {
							drawArrow(x1, x2, y, "r", "r", color.net, lineWeight, fillAmount);
						}
					}
				}
			}
		}

		// left net line
		// calculate total left negative charge
		let totalNegCharge = 0;
		for (let i = 0; i < currNegBoxes.length; i++) {
			totalNegCharge += currNegBoxes[i].chargeAmount;
		}
		totalNegCharge = float(totalNegCharge);

		let lineWeight =
			((currPosBox.chargeAmount - totalNegCharge) / chargeDivisor) * thickScale;

		let x1 = currPosBox.c - lineSize - 3; // left x
		let x2 = currPosBox.c - gap; // right x
		let y = currNegBoxes[0].y + spacing; // right y
		if (!currAnimate && !currAnimated) {
			y += netOffsetY;
		}

		if (totalNegCharge != 0 && totalNegCharge != currPosBox.chargeAmount) {
			//  && currPoxBox
			drawArrow(x1, x2, y, "l", "l", color.net, lineWeight, fillAmount);
		}
	}
}

function mousePressed() {
	// Detect if plane is clicked
	if (sceneCount == 1) {
		drawScene1 = true;
	}
}

function drawTriangle(size, dir, x, y) {
	if (dir == "l") {
		triangle(x, y, x + size, y - size / 1.7, x + size, y + size / 1.7);
	} else if (dir == "r") {
		triangle(x, y, x - size, y - size / 1.7, x - size, y + size / 1.7);
	}
}

function updateBoxChargeAmount(value) {
	boxRight1.updateChargeAmount(value);
	resetCharges();
}

function updateWidth(value) {
	boxRight1.updateW(int(value));
	volumeWidth = boxRight1.w / 75;
}

function resetCharges(box) {
	if (box) {
		populateChargeGrid(box);
	} else {
		for (let i = 0; i < currNegBoxes.length; i++) {
			populateChargeGrid(currNegBoxes[i]);
		}
		populateChargeGrid(currPosBox);
	}
}

function resetScene() {
	boxRight1.updateW(boxThickness);
	// reset boxes
	drawScene1 = false;
	if (sceneCount == 1) {
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(60);
	}
	if (sceneCount == 2) {
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(60);
	}
	if (sceneCount == 3) {
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(60);
	}
	if (sceneCount == 4) {
		//
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(80);
		//
		boxRight1.updateChargeType("neg");
		boxRight1.updateChargeAmount(80);
		boxRight1.updateSceneOrder(1);
		boxRight1.updateArrowOffsetY(14);
		boxRight1.updateX(400);
	}
	if (sceneCount == 5) {
		//
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(80);
		//
		boxRight1.updateChargeType("neg");
		boxRight1.updateChargeAmount(56);
		boxRight1.updateSceneOrder(1);
		boxRight1.updateArrowOffsetY(14);
		boxRight1.updateX(400);
	}

	if (sceneCount == 6) {
		//
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(80);
		//
		boxRight1.updateChargeType("neg");
		boxRight1.updateChargeAmount(50);
		boxRight1.updateSceneOrder(1);
		boxRight1.updateArrowOffsetY(offsetY);
		boxRight1.updateX(310 + boxPadding);
		//
		boxRight2.updateChargeType("neg");
		boxRight2.updateChargeAmount(30);
		boxRight2.updateSceneOrder(2);
		boxRight2.updateArrowOffsetY(offsetY * 2);
		boxRight2.updateX(310 + boxPadding * 2);
		boxRight2.updateShowBox(false);
	}

	if (sceneCount == 7) {
		//
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(80);
		//
		boxRight1.updateChargeType("neg");
		boxRight1.updateChargeAmount(15);
		boxRight1.updateSceneOrder(1);
		boxRight1.updateArrowOffsetY(offsetY);
		boxRight1.updateX(310 + boxPadding);
		//
		boxRight2.updateChargeType("neg");
		boxRight2.updateChargeAmount(25);
		boxRight2.updateSceneOrder(2);
		boxRight2.updateArrowOffsetY(offsetY * 2);
		boxRight2.updateX(310 + boxPadding * 2);
		//
		boxRight3.updateChargeType("neg");
		boxRight3.updateChargeAmount(40);
		boxRight3.updateSceneOrder(3);
		boxRight3.updateArrowOffsetY(offsetY * 3);
		boxRight3.updateX(310 + boxPadding * 3);
	}
	if (sceneCount == 8) {
		//
		boxLeft.updateChargeType("pos");
		boxLeft.updateChargeAmount(80);
		//
		boxRight1.updateChargeType("neg");
		boxRight1.updateChargeAmount(80);
		boxRight1.updateW(75);
		boxRight1.updateSceneOrder(1);
		boxRight1.updateArrowOffsetY(offsetY);
		boxRight1.updateX(380);
	}

	resetCharges();

	resetHTML(".negToggle", "checked", true);
	resetHTML(".posToggle", "checked", true);
	resetHTML(".netToggle", "checked", false);
	resetHTML(".netToggle", "display", "none");
	resetHTML(".netLabel", "display", "none");
	resetHTML(".showScreen", "textContent", "Show Screening");

	document.getElementById("flow").value = 40;
	document.getElementById("widthSlider").value = 75;

	animate.scene4 = false;
	animated.scene4 = false;
	animate.scene5 = false;
	animated.scene5 = false;

	showNetArrows = true;
	showPosArrows = true;
	showNegArrows = true;

	if (sceneCount == 4 || sceneCount == 5) {
		showNetArrows = false;
	}
}

function resetHTML(selector, type, value) {
	if (type == "checked") {
		const selected = document.querySelectorAll(selector);
		selected.forEach((control) => {
			control.checked = value;
		});
	} else if (type == "display") {
		const selected = document.querySelectorAll(selector);
		selected.forEach((control) => {
			control.style.display = value;
		});
	} else if (type == "textContent") {
		const selected = document.querySelectorAll(selector);
		selected.forEach((control) => {
			control.textContent = value;
		});
	}
}
