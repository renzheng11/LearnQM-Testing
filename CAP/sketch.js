let fade;
let fadeAmount = 1;
let afterDelay = false;

const timeout = 4000;

// vars
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	grey: [175, 175, 175],
	pos: [218, 107, 107],
	posDim: [65, 46, 46],
	neg: [255, 247, 174],
	negDim: [18, 66, 104],
	sign: [122, 59, 59],
	signDim: [50, 31, 31],
	battery: [230, 226, 188],
	net: [117, 190, 255],
	neutral: [79, 79, 79],
};

const rows = 20;
const cols = 15;
let totalElectrons = rows * cols;

// box dimensions
const boxD = {
	xLeft: 0,
	xRight: 260,
	y: 110,
	width: 234,
	height: 280,
	depth: 80,
	angle: -60,
};

// battery dimensions
const batteryD = {
	imageX: boxD.xRight - 44,
	imageY: boxD.y + boxD.height + 44,
	leftX: boxD.xLeft + boxD.width / 2,
	rightX: boxD.xRight + boxD.width / 2,
	y1: boxD.y + boxD.height,
	y2: boxD.y + boxD.height + 60,
	batterySize: 40,
};

// graph dimensions
const graphD = {
	x: 0,
	y: batteryD.imageY + 140,
	width: 640,
	center: boxD.xLeft + boxD.width,
	end: 0,
};

graphD.x = graphD.center - graphD.width / 2;
graphD.end = graphD.center + graphD.width / 2 - 60;

const colorChangeInterval = 500;

// images
let batteryPosImg;
let batteryNegImg;
let mosImg;

let reverse = false;

// changing
let dest1;
let dest2;
let dest3;
let dest4;
let attractSide;
let destSide;

let currLeftBox;
let currRightBox;

let displayCharges = [];
let lastColorChange = 0;

let tempBox;
let atDestSide = false;

let currentlyAnimating = false;
let sceneAnimated = false;
let showEF = false;
let numTransfer = 12;
let numTransferRange = 16;
let Q = numTransfer / numTransferRange;

let brightChargesMetal = [];
let brightChargesSemi = [];
let animCharges = [];

let electronsTransferred = 0;
let defaultDopants = 30;

let currButton;
let currChargeSlider;

let moveBound = 0;

// scanner / sizes
let lastPos = 0;
const surfaceWidth = 10; // 10nm

let buttonState = "A";

function setup() {
	fade = 255;
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");
	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");
	mosImg = loadImage("mos.png");

	// tempBox
	tempBox = new Box(boxD.xLeft, boxD.y, boxD.width, boxD.height, 0);

	// instantiate left and right box

	newMetalBoxes();
}

// update number of electrons transferred to other box
function updateNumTransfer(value) {
	numTransfer = value;
}

function animateElectrons() {
	// reset voltage controls
	const btn = document.querySelector(`.chargeButton${sceneCount}`);
	if (buttonState == "R") {
		// reset
		const chargeSliders = document.querySelectorAll(".chargeSlider");
		chargeSliders.forEach((slider) => {
			slider.disabled = false;
		});

		const dopantSlider = document.querySelector(".dopantSlider");
		dopantSlider.disabled = false;

		// re-initialize current boxes
		currLeftBox = new Box(
			boxD.xLeft,
			boxD.y,
			boxD.width,
			boxD.height,
			totalElectrons,
			"m"
		);
		currRightBox = new Box(
			boxD.xRight,
			boxD.y,
			boxD.width,
			boxD.height,
			totalElectrons,
			"m"
		);
		tempBox.electrons = [];
		sceneAnimated = false;
		showEF = false;
		electronsTransferred = 0;
		buttonState = "A";
		moveBound = 0;
		btn.innerText = "Apply Charge";
	} else if (buttonState == "A") {
		// default
		const chargeSliders = document.querySelectorAll(".chargeSlider");
		chargeSliders.forEach((slider) => {
			slider.disabled = true;
		});

		const dopantSlider = document.querySelector(".dopantSlider");
		dopantSlider.disabled = true;

		btn.innerText = "Reset";
		// button is ready to apply

		if (!reverse) {
			if (sceneAnimated == false) {
				let i = 0;
				for (let i = 0; i < numTransfer; i++) {
					let e = currRightBox.electrons[currRightBox.electrons.length - 1];

					if (e.avail) {
						tempBox.electrons.push(e);
						currRightBox.electrons.pop();
						e.updateAnimate(true);
						e.updateLit(true);
					}
				}
			}
		} else {
			// ready to reset
			numTransfer *= -1;
			if (sceneAnimated == false) {
				let i = 0;
				for (let i = 0; i < numTransfer; i++) {
					let e = currLeftBox.electrons[currLeftBox.electrons.length - 1];

					if (e.avail) {
						tempBox.electrons.push(e);
						currLeftBox.electrons.pop();
						e.updateAnimate(true);
						e.updateLit(true);
					}
				}
			}
			numTransfer *= -1;
		}

		setTimeout(() => {
			if (currRightBox.numElectrons < totalElectrons) {
				// amount has transfered
				showEF = true;
				sceneAnimated = true;
				reverse ? (moveBound = -30) : (moveBound = 30);
			}
		}, timeout);

		buttonState = "R";
	}
}

function newMetalBoxes() {
	currLeftBox = new Box(
		boxD.xLeft,
		boxD.y,
		boxD.width,
		boxD.height,
		totalElectrons,
		"m"
	);
	currRightBox = new Box(
		boxD.xRight,
		boxD.y,
		boxD.width,
		boxD.height,
		totalElectrons,
		"m"
	);
}

function resetScene() {
	fade = 255;
	reverse = false;
	tempBox.electrons = [];
	numTransfer = 12;
	brightChargesMetal = [];
	brightChargesSemi = [];
	animCharges = [];
	displayCharges = [];
	sceneAnimated = false;
	timesAnimated = 0;
	electronsTransferred = 0;
	moveBound = 0;
	// slider.disabled = false;

	boxD.depth = 80;
	boxD.angle = -60;

	lastColorChange = 0;

	atDestSide = false;

	showEF = false;

	totalElectrons = rows * cols;

	newMetalBoxes();

	// change electrons, dopants, type for semiconductor boxes
	let semis = [5, 6, 7, 8, 9];
	semis.forEach((s) => {
		if (scene(s)) {
			currRightBox.updateNumElectrons(defaultDopants);
			currRightBox.updateDopants(defaultDopants);
			currRightBox.updateType("s");
		}
	});

	const dopantSliders = document.querySelectorAll(".dopantSlider");
	dopantSliders.forEach((slider) => {
		slider.value = defaultDopants;
	});

	const chargeSliders = document.querySelectorAll(".chargeSlider");
	chargeSliders.forEach((slider) => {
		slider.value = 12;
		slider.min = -numTransferRange;
		slider.max = numTransferRange;
		slider.disabled = false;
	});

	const dopantSlider = document.querySelector(".dopantSlider");
	dopantSlider.disabled = false;

	const btn = document.querySelector(`.chargeButton${sceneCount}`);
	btn.innerText = "Apply Charge";

	buttonState = "A";
}

function drawBattery() {
	let leftX = batteryD.leftX;
	let rightX = batteryD.rightX;
	let y1 = batteryD.y1;
	let y2 = batteryD.y2;
	let batterySize = batteryD.batterySize;

	noStroke();
	fill(...color.battery);

	strokeWeight(1.2);
	stroke(...color.white);
	line(leftX, y1, leftX, y2); // x y x y
	line(leftX, y2, rightX, y2);
	line(rightX, y1, rightX, y2);

	if (reverse) {
		image(
			batteryPosImg,
			batteryD.imageX,
			batteryD.imageY,
			batteryPosImg.width / 1.5,
			batteryPosImg.height / 1.5
		);
	} else {
		image(
			batteryNegImg,
			batteryD.imageX,
			batteryD.imageY,
			batteryNegImg.width / 1.5,
			batteryNegImg.height / 1.5
		);
	}
}

// function drawMOS(box, label, leftPadding) {
// 	fill(...color.bg);
// 	stroke(...color.white);
// 	let boxD = 100;
// 	let boxA = -100;
// 	beginShape();
// 	vertex(box.x + box.w, box.y + box.h); // left top
// 	vertex(box.x + box.w, box.y); // left bottom
// 	vertex(box.x + box.w + boxD, box.y + boxA); // top right
// 	vertex(box.x + box.w + boxD, box.y + box.h + boxA);
// 	endShape(CLOSE);

// 	noStroke();
// 	fill(...color.white);
// 	text(label, box.x + box.w + leftPadding, box.y + box.h / 2 - 40);
// }

function drawBox(box) {
	if (scene(10)) {
		boxD.depth = 80;
		boxD.angle = -60;
	}

	stroke(...color.white);
	strokeWeight(1.2);
	fill(...color.bg);

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
	vertex(box.x + box.w + boxD.depth, box.y + boxD.angle); // top right
	vertex(box.x + box.w + boxD.depth, box.y + box.h + boxD.angle);
	endShape(CLOSE);

	// // box top
	beginShape();
	vertex(box.x, box.y); // bottom left
	vertex(box.x + box.w, box.y); // bottom right
	vertex(box.x + box.w + boxD.depth, box.y + boxD.angle); // top right
	vertex(box.x + boxD.depth, box.y + boxD.angle); // top left
	endShape(CLOSE);
}

function drawAnimatedCharges(charges) {
	// for each row
	for (let i = 0; i < charges.length; i++) {
		// for each column
		let chargeX = charges[i].x + 20;
		let chargeY = charges[i].y + 20;
		let chargeType = charges[i].type;
		let chargeLit = charges[i].lit;
		drawCharge(chargeX, chargeY, chargeType, chargeLit);
	}
}

function genBrightCharges(dopantIndices) {
	// Generate a new array of x random indices for bright circles in each frame
	brightChargesMetal = [];
	brightChargesSemi = [];

	// for (let i = 0; i < electrons)

	while (brightChargesMetal.length < electronsTransferred) {
		let randomIndex;
		if (!reverse) {
			randomIndex = floor(random(20)); // 20 rows
		} else if (reverse) {
			randomIndex = floor(totalElectrons - random(20)); // 20 rows
		}
		if (!brightChargesMetal.includes(randomIndex)) {
			brightChargesMetal.push(randomIndex);
		}
	}

	let index = 0;
	while (brightChargesSemi.length < electronsTransferred) {
		brightChargesSemi.push(index);
		index += 1;
	}
}

function drawCharges(box, type) {
	for (let i = 0; i < box.chargeMap.length; i++) {
		// for each column
		let chargeX = box.chargeMap[i].x + 19;
		let chargeY = box.chargeMap[i].y + 17;
		let chargeType = box.chargeMap[i].type;

		if (millis() - lastColorChange > colorChangeInterval) {
			genBrightCharges(box.dopantIndices);
			lastColorChange = millis();
		}

		// flicker positive charges on surface

		let boxSideCondition; // determines if left or right box gets lit up
		if (!reverse) {
			boxSideCondition = box.x >= boxD.xRight;
		} else if (reverse) {
			boxSideCondition = box.x < boxD.xRight;
		}

		let numLit = 0;
		if (box.type == "s") {
			for (let i = 0; i <= box.chargeMap.length - 1; i++) {
				let isDopant = box.dopantIndices.includes(i);

				if (isDopant) {
					box.chargeMap[i].updateType("pos");

					if (boxSideCondition) {
						// only light up dopants closest to side
						if (numLit < electronsTransferred) {
							box.chargeMap[i].updateLit(true);
							numLit += 1;
						}
					}
				}
			}
			numLit = 0;
		}

		if (boxSideCondition) {
			for (let i = 0; i <= box.chargeMap.length - 1; i++) {
				let isBrightMetal = brightChargesMetal.includes(i);

				if (box.type == "m") {
					// light up attracted positive charges
					if (isBrightMetal) {
						// box.chargeMap[i].updateType("pos")
						box.chargeMap[i].updateLit(true);
					} else {
						box.chargeMap[i].updateLit(false);
					}
				}
			}
		}

		drawCharge(chargeX, chargeY, chargeType, box.chargeMap[i].lit);
	}
}

function updateDopantAmount(value) {
	currRightBox.updateDopants(value);
}

function checkDest(electron, dest, side) {
	xCondition =
		electron.position.x < dest.x + 5 && electron.position.x > dest.x - 5;
	yCondition =
		electron.position.y < dest.y + 5 && electron.position.y > dest.y - 5;

	if (xCondition && yCondition) {
		return true;
	} else {
		return false;
	}
}

// controls animations / colors after animation (including charges and electrons)
function drawElectrons(box) {
	// check for animation, animate
	for (let i = 0; i < box.electrons.length; i++) {
		let electron = box.electrons[i];

		// set destinations for travel
		if (!reverse) {
			dest1 = createVector(batteryD.rightX, batteryD.y1);
			dest2 = createVector(batteryD.rightX, batteryD.y2);
			dest3 = createVector(batteryD.leftX, batteryD.y2);
			dest4 = createVector(batteryD.leftX, batteryD.y1 - (i % 15) * 17 - 20);
			attractSide = currLeftBox.x + currLeftBox.w - 10;
		} else {
			dest1 = createVector(batteryD.leftX, batteryD.y1);
			dest2 = createVector(batteryD.leftX, batteryD.y2);
			dest3 = createVector(batteryD.rightX, batteryD.y2);
			dest4 = createVector(batteryD.rightX, batteryD.y1 - (i % 15) * 17 - 20);
			attractSide = currRightBox.x + 10;
		}

		if (frameCount % 2 == 0) {
			if (electron.animate) {
				let atDest1 = checkDest(electron, dest1, false);
				let atDest2 = checkDest(electron, dest2, false);
				let atDest3 = checkDest(electron, dest3, false);
				let atDest4 = checkDest(electron, dest4, false);

				if (atDest1) {
					if (!electron.passedDest.includes(1)) {
						electron.updatePassed(1);
						currRightBox.updateNumElectrons((currRightBox.numElectrons -= 1));
					}
				}
				if (atDest2) {
					if (!electron.passedDest.includes(2)) {
						electron.updatePassed(2);
					}
				}
				if (atDest3) {
					if (!electron.passedDest.includes(3)) {
						electron.updatePassed(3);
						setTimeout(() => {
							currLeftBox.updateNumElectrons((currLeftBox.numElectrons += 1));
						}, 300);
					}
				}
				if (atDest4) {
					if (!electron.passedDest.includes(4)) {
						electron.updatePassed(4);
					}
				}

				if (
					electron.passedDest.includes(0) &&
					!electron.passedDest.includes(1)
				) {
					electron.move(dest1);
				}
				if (
					electron.passedDest.includes(1) &&
					!electron.passedDest.includes(2)
				) {
					electron.move(dest2);
				}
				if (
					electron.passedDest.includes(2) &&
					!electron.passedDest.includes(3)
				) {
					electron.move(dest3);
				}
				if (
					electron.passedDest.includes(3) &&
					!electron.passedDest.includes(4)
				) {
					electron.move(dest4);
				}

				if (electron.passedDest.includes(4)) {
					if (!reverse) {
						if (electron.position.x < attractSide) {
							electron.position.x += 4;
						}

						if (electron.position.x > attractSide - 2) {
							let possibleSpeeds = [];
							for (let i = 5; i < 8; i++) {
								possibleSpeeds.push(i);
							}
							for (let i = -5; i > -8; i--) {
								possibleSpeeds.push(i);
							}
							let index = floor(Math.random() * possibleSpeeds.length);

							electron.updateVelocity(createVector(0, possibleSpeeds[index]));
							electron.updateAnimate(false);
							if (electron.pushed == false) {
								electron.updatePushed(true);
								sceneAnimated = true;
								electronsTransferred += 1;
							}
						}
					} else if (reverse) {
						if (electron.position.x > attractSide) {
							electron.position.x -= 4;
						}

						if (electron.position.x < attractSide + 2) {
							electron.updateVelocity(createVector(0, -3));
							electron.updateAnimate(false);
							if (electron.pushed == false) {
								electron.updatePushed(true);
								sceneAnimated = true;
								timesAnimated += 1;
								electronsTransferred += 1;
							}
						}
					}
				}
			} else {
				// not animated - moving around in box
				electron.update();
			}
		}
		if (electron.show) {
			electron.display(electron.dim);
		}
	}
}

function drawCharge(chargeX, chargeY, chargeType, lit) {
	let posSize = 8;
	let signSize = 6;
	noStroke();

	// charge circles
	// positive charge
	if (chargeType == "pos") {
		lit ? fill(...color.pos) : fill(...color.pos, fade);
		circle(chargeX, chargeY, posSize);
		lit ? stroke(...color.sign) : stroke(...color.sign, fade * 8);
	}
	if (chargeType == "neutral") {
		fill(...color.neutral);
		circle(chargeX, chargeY, posSize);
	}

	strokeWeight(1);
	canvas.drawingContext.setLineDash([]);

	// cross line
	line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY);
	// up line
	line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2);
}

function distanceLog(position) {
	// position will be between 0 and 100
	var minp = 0;
	var maxp = boxD.width;

	// The result should be between 100 an 10000000
	var minv = Math.log(0.1);
	var maxv = Math.log(10000000);

	// calculate adjustment factor
	var scale = (maxv - minv) / (maxp - minp);

	return Math.exp(minv + scale * (position - minp));
}

function drawScanner(box) {
	// draw scanner
	fill(255, 250, 202, 80);
	noStroke();

	let xPos = 0;
	let scale = 1;
	let scannerNM = 1;
	let scannerWidth = scannerNM * scale; // 1nm

	// if mouse is in box
	if (mouseX < box.x + boxD.width + 2 && mouseX > box.x - 2) {
		xPos = mouseX - box.x - scannerWidth;
	}

	// only draw if electrons have been animated
	rect(box.scannerX, box.scannerY, xPos + scannerWidth, box.h);

	beginShape();
	vertex(box.x, box.y); // bottom left
	vertex(box.x + scannerWidth + lastPos, box.y); // bottom right
	vertex(box.x + scannerWidth + lastPos + boxD.depth, box.y + boxD.angle); // top right
	vertex(box.x + boxD.depth, box.y + boxD.angle); // top left
	endShape(CLOSE);

	styleText();

	let xDistance = distanceLog(xPos);
	// scale to units

	// // 100 nm
	if (xDistance < 1) {
		scaledDistance = "< 1nm";
	}

	// < 100nm
	if (xDistance >= 1) {
		scaledDistance = xDistance.toFixed(2) + "nm";
	}

	// µm
	if (xDistance >= 10000) {
		scaledDistance = xDistance / 10000;
		scaledDistance = scaledDistance.toFixed(2) + "µm";
	}

	// mm
	if (xDistance >= 1000000) {
		scaledDistance = xDistance / 1000000;
		scaledDistance = scaledDistance.toFixed(2) + "mm";
	}

	// cm
	if (xDistance >= 10000000) {
		scaledDistance = xDistance / 10000000;
		scaledDistance = scaledDistance.toFixed(2) + "cm";
	}

	Q = numTransfer / numTransferRange;

	let saturationX;
	if (box.type == "m") {
		saturationX = Q / (1.6 * (10 ^ 3)); // in cm
	} else if (box.type == "s") {
		saturationX = Q / (1.6 * (10 ^ -4)); // in cm
	}

	text(`x distance: ${scaledDistance}`, box.x + 90, box.y - 86);

	text(`Q: ${Q}`, box.x + 90, box.y - 72); // right box (from)
	text(`Q: ${-Q}`, boxD.xLeft + 90, box.y - 72); // left box (to)

	text(`S : ${saturationX}`, box.x + 150, box.y - 72); // left box (to)

	// let numElectrons = (scannerNM * 10 ** 15).toExponential();

	// let nr1 = numElectrons.substr(0, 4);
	// let nr2 = numElectrons.substr(4, numElectrons.length);
	// let finalNr = Number(nr1 + 0 + nr2).toExponential(2);

	// 3 text

	// if (box.type == "m") {
	// let totalNM = 10;

	// // code numtransfer = 12
	// // # / 20 in 1m = #/20nm
	// if (electronsTransferred > 1) {
	// 	if (box.x > 0) {
	// 		totalNM -= numTransfer / 20;
	// 	} else {
	// 		totalNM += numTransfer / 20;
	// 	}
	// }

	// let numElectrons = (totalNM * 10 ** 15).toExponential();

	styleText();
	text("1cm x 1cm 1cm", box.x + 4, box.y + boxD.height - 4);
	text("|", box.x + 29, box.y + boxD.height + 10);
	text("1nm", box.x + 19, box.y + boxD.height + 24);
	text("|", box.x + 88, box.y + boxD.height + 10);
	text("100nm", box.x + 78, box.y + boxD.height + 24);
	text("|", box.x + 147, box.y + boxD.height + 10);
	text("10µm", box.x + 137, box.y + boxD.height + 24);
	text("|", box.x + 205, box.y + boxD.height + 10);
	text("1mm", box.x + 195, box.y + boxD.height + 24);
	text("|", box.x + boxD.width - 2, box.y + boxD.height + 8);
	text("1cm", box.x + boxD.width - 10, box.y + boxD.height + 24);

	// fill(...color.neg);
	// text(`Total electrons: ${numElectrons}`, box.x + 90, box.y - 40);
	// fill(...color.pos);
	// text(`Total positive charge: ${numElectrons}`, box.x + 90, box.y - 24);
	// fill(...color.net);
	// text(`Total net charge: ${numElectrons}`, box.x + 90, box.y - 8);
	// }
	// else if (box.type == "s") {
	// 	let totalNM = 10;
	// 	let expo = 10 ** 15;

	// 	text(`Total nm: 10`, box.x + 20, box.y + 300);
	// 	let numElectrons = (totalNM * expo).toExponential();

	// 	let nr1 = numElectrons.substr(0, 4);
	// 	let nr2 = numElectrons.substr(4, numElectrons.length);
	// 	let finalNr = Number(nr1 + 0 + nr2).toExponential(2);

	// 	text(`Total electrons: ${finalNr}`, box.x + 20, box.y + 320);
	// }
}

function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

function drawGraph() {
	stroke(...color.grey); // axis color
	strokeWeight(1);

	canvas.drawingContext.setLineDash([7, 3]);

	line(graphD.center, graphD.y - 76, graphD.center, graphD.y + 60); // vert

	line(graphD.x, graphD.y, graphD.end, graphD.y); // hor

	fill(...color.grey);

	canvas.drawingContext.setLineDash([]);

	let size = 4.4;
	stroke(...color.grey);

	// graph lines + arrows
	// y axis arrow - up
	line(
		graphD.center,
		graphD.y - 76,
		graphD.center - size,
		graphD.y - 76 + size
	);
	line(
		graphD.center,
		graphD.y - 76,
		graphD.center + size,
		graphD.y - 76 + size
	);

	// y axis arrow - down
	line(
		graphD.center,
		graphD.y + 61,
		graphD.center + size,
		graphD.y + 61 - size
	);
	line(
		graphD.center,
		graphD.y + 61,
		graphD.center - size,
		graphD.y + 61 - size
	);

	// x axis arrow - right
	line(graphD.end, graphD.y, graphD.end - size, graphD.y - size);
	line(graphD.end, graphD.y, graphD.end - size, graphD.y + size);

	// x axis arrow - right
	line(0, graphD.y, 0 + size, graphD.y - size);
	line(0, graphD.y, 0 + size, graphD.y + size);

	// // x axis arrow - left
	// line(graphD.x, graphD.y, graphD.x + size, graphD.y + size);
	// line(graphD.x, graphD.y, graphD.x + size, graphD.y - size);

	strokeWeight(2);
	stroke(...color.net);

	let eFieldHeight = 0;
	if (sceneAnimated) {
		eFieldHeight = numTransfer * 6;
	}

	let noHeights = [0, 0];
	let noHeightXPoints = [graphD.x, graphD.end];

	if (!showEF) {
		drawLines(noHeightXPoints, noHeights);
	}

	if (!reverse) {
		netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
		netXPoints = [
			graphD.x,
			graphD.center,
			graphD.center,
			graphD.center + 26,
			graphD.center + 26,
			graphD.end,
		];

		// over distance
		if (sceneCount > 6) {
			netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0];
			netXPoints = [
				graphD.x,
				graphD.center,
				graphD.center,
				graphD.center + 26,
				graphD.end,
			];
		}
	} else {
		netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
		netXPoints = [
			graphD.x,
			graphD.center,
			graphD.center,
			graphD.center + 26,
			graphD.center + 26,
			graphD.end,
		];

		// over distance
		if (sceneCount > 6) {
			netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0];
			netXPoints = [
				graphD.x,
				graphD.center,
				graphD.center,
				graphD.center + 26,
				graphD.end,
			];
		}
	}

	graphNorm = 1.4;
	// standardize the heights
	for (let i = 0; i < netHeights.length; i++) {
		netHeights[i] = -netHeights[i] / graphNorm;
	}

	// const btn = document.querySelector(`.voltageButton${sceneCount}`);
	if (buttonState == "R") {
		drawLines(netXPoints, netHeights);
		drawArrows();
	}
}

function drawLines(points, rawHeights) {
	let graphDivisor = 2;
	let unit = 1 / graphDivisor;

	let heights = [];

	for (let i = 0; i < rawHeights.length; i++) {
		heights[i] = unit * rawHeights[i] + graphD.y;
	}

	for (i = 0; i < points.length - 1; i++) {
		line(points[i], heights[i], points[i + 1], heights[i + 1]); // line
	}
}

function drawArrows() {
	if (showEF) {
		let y = 120;

		// draw 7 arrows
		for (let i = 0; i < 7; i++) {
			strokeCap(SQUARE);
			stroke(...color.net);
			let weight = Math.abs(numTransfer) / 3;

			let triangleSize = 12;
			fill(...color.net);

			if (weight != 0) {
				if (!reverse) {
					noStroke();
					triangle(
						boxD.xLeft + boxD.width,
						y,
						boxD.xLeft + boxD.width + 12,
						y + triangleSize / 1.7,
						boxD.xLeft + boxD.width + 12,
						y - triangleSize / 1.7
					);
					if (sceneCount > 5) {
						noStroke();
						beginShape();
						vertex(boxD.xRight - 16, y - 2); // left top
						vertex(boxD.xRight - 16, y - 2 + weight); // left bottom
						vertex(boxD.xRight + boxD.width, y + weight / 2); // right bottom
						vertex(boxD.xRight + boxD.width, y + weight / 2); // right top
						endShape(CLOSE);
					} else {
						strokeWeight(weight);
						stroke(...color.net);
						line(boxD.xLeft + boxD.width + 4, y, boxD.xRight, y);
					}
				} else if (reverse) {
					noStroke();
					triangle(
						boxD.xRight,
						y + 4,
						boxD.xRight - 12,
						y + triangleSize / 1.7 + 4,
						boxD.xRight - 12,
						y - triangleSize / 1.7 + 4
					);
					if (sceneCount > 5) {
						noStroke();
						beginShape();
						vertex(boxD.xLeft, y + weight / 2); // left top
						vertex(boxD.xLeft, y + weight / 2); // left bottom
						vertex(boxD.xLeft + boxD.width + 16, y); // right bottom
						vertex(boxD.xLeft + boxD.width + 16, y + weight); // right top
						endShape(CLOSE);
					} else {
						strokeWeight(weight);
						stroke(...color.net);
						line(boxD.xLeft + boxD.width, y, boxD.xRight - 4, y);
					}
				}
			}

			y += 40;
		}
	}
}

// fade all neutral charges
function fadeFunc() {
	fadeAmount = -2;
	if (fade > 56) {
		fade += fadeAmount;
	}
}

function draw() {
	if (sceneCount == 1) {
		scene1();
		fadeFunc();
	} else if (sceneCount == 2) {
		scene2();
		fadeFunc();
	} else if (sceneCount == 3) {
		scene3();
		fadeFunc();
	} else if (sceneCount == 4) {
		scene4();
		fadeFunc();
	} else if (sceneCount == 5) {
		scene5();
		fadeFunc();
	} else if (sceneCount == 6) {
		scene6();
		fadeFunc();
	} else if (sceneCount == 7) {
		scene7();
		fadeFunc();
	} else if (sceneCount == 8) {
		scene8();
		fadeFunc();
	} else if (sceneCount == 9) {
		scene9();
		fadeFunc();
	} else if (sceneCount == 10) {
		scene10();
		fadeFunc();
	} else if (sceneCount == 11) {
		scene11();
		fadeFunc();
	}
}

function drawItems() {
	background(...color.bg);
	noStroke();
	reverse = numTransfer < 0;

	drawBox(currLeftBox);
	drawBox(currRightBox);
	drawCharges(currLeftBox);
	drawCharges(currRightBox);
	drawElectrons(currLeftBox);
	drawElectrons(currRightBox);
	drawElectrons(tempBox);

	if (sceneAnimated) {
		if (scene(4) || scene(8) || scene(9)) {
			reverse ? drawScanner(currLeftBox) : drawScanner(currRightBox);
		}
	}

	styleText();
	text("n: " + numTransfer, 20, 20);

	// text("Q: " + Q, 20, 34);

	drawBattery();

	if (sceneCount > 2) {
		drawGraph();
	}
}

function scene1() {
	drawItems();
}

function scene2() {
	drawItems();
}

function scene3() {
	drawItems();
}

function scene4() {
	drawItems();
}

function scene5() {
	drawItems();
}

function scene6() {
	drawItems();
}

function scene7() {
	drawItems();
}

function scene8() {
	drawItems();
}

function scene9() {
	drawItems();
}

function scene10() {
	background(...color.bg);
	image(mosImg, 60, 60, 251, 495);

	// let surface1 = new Box(120, 200, 20, 300);
	// let surface2 = new Box(150, 200, 20, 300);
	// let surface3 = new Box(180, 200, 20, 300);

	// drawBox(surface1);
	// drawBox(surface2);
	// drawBox(surface3);

	// styleText();
	// // rotate(angle1);

	// text("Metal", surface1.x, boxD.y / 2 - 40);
	// text("Oxide", surface2.x, boxD.y / 2 - 40);
	// text("Semiconductor", surface3.x, boxD.y / 2 - 40);
}

function scene11() {}
