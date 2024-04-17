// let scale_x = 1440;
// let scale_y = 789;
let scale_x = 1296;
let scale_y = 710;

let sx;
let sy;

let fade;
let fadeAmount = 1;
let afterDelay = false;

let timeoutID = 0;

const timeout = 4400;
// const timeout = 0;

// vars
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	grey: [175, 175, 175],
	// pos: [218, 107, 107],
	pos: [125, 241, 148],
	// pos: [218, 107, 107],
	posDim: [65, 46, 46],
	posDim: [65, 46, 46],
	neg: [255, 247, 174],
	negDim: [18, 66, 104],
	// sign: [122, 59, 59],
	sign: [31, 145, 54],
	signDim: [50, 31, 31],
	battery: [230, 226, 188],
	net: [117, 190, 255],
	neutral: [79, 79, 79],
	scanner: [218, 107, 107],
};

const rows = 22;
const cols = 18;
let totalElectrons = rows * cols;

// box dimensions
const boxD = {
	xLeft: 2,
	xRight: 320,
	y: 62,
	width: 280,
	height: 306,
	depth: 80,
	angle: -60,
};
let boxMax;

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

let batteryState = 0;

// graph dimensions
const graphD = {
	x: 0,
	y: batteryD.imageY + 152,
	width: 640,
	center: boxD.xLeft + boxD.width,
	end: 0,
};

graphD.x = graphD.center - graphD.width / 2;
graphD.end = graphD.center + graphD.width / 2;

const colorChangeInterval = 500;

// images
let batteryPosImg;
let batteryNegImg;
let mosImg;
let vecEImg;
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
let numTransfer = 2;
let numTransferRange = 18;
let Q = 1;
let actualQ = 1;

let brightChargesMetal = [];
let animCharges = [];

let electronsTransferred = 0;
let numBright = 0;
let defaultDopants = 30;

let currButton;
let currChargeSlider;

let moveBound = 0;

let xDistance = 0;
let maxBox = 0;

// scanner / sizes
let lastPos = 0;
const surfaceWidth = 10; // 10nm

let buttonState = "A";

// scanner
let xPos;
let scale;
let scannerNM;
let scannerWidth;

let currX;
let xMax;
let currQ;
let xPercent;

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	fade = 255;

	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);

	canvas.parent("visualization");
	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");
	mosImg = loadImage("mos.png");
	vecEImg = loadImage("blue_E.png");

	// tempBox
	tempBox = new Box(boxD.xLeft, boxD.y, boxD.width, boxD.height, 0);

	// instantiate left and right box
	newMetalBoxes();
	resetScene();
}

// update number of electrons transferred to other box
function updateNumTransfer(value) {
	numTransfer = Math.round(value / 555);
	if (numTransfer < 0) {
		numTransfer = 1;
	}
	Q = value / 1000;
}

function animateElectrons(currAnim) {
	// reset voltage controls
	const btn = document.querySelector(`.chargeButton${sceneCount}`);
	if (buttonState == "R") {
		resetScene();
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
		}

		timeoutID = setTimeout(() => {
			let condition = !reverse
				? currRightBox.numElectrons < totalElectrons
				: currLeftBox.numElectrons < totalElectrons;

			if (condition) {
				// amount has transfered
				showEF = true;
				sceneAnimated = true;
				// set bounce when electrons hit positively attracted region
				reverse ? (moveBound = -30) : (moveBound = 30);
				// if semiconductor scene
				if (currRightBox.type == "s" && !reverse) {
					// set bounce to boxMax calculated from xMax
					reverse ? (moveBound = -boxMax) : (moveBound = boxMax);
				}
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
	clearTimeout(timeoutID);

	fade = 255;
	reverse = false;
	tempBox.electrons = [];
	numTransfer = 2;
	brightChargesMetal = [];
	animCharges = [];
	displayCharges = [];
	sceneAnimated = false;
	timesAnimated = 0;
	electronsTransferred = 0;
	moveBound = 0;

	// re-initialize current boxes
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

	// reset dopant sliders + default values
	const dopantSliders = document.querySelectorAll(".dopantSlider");
	dopantSliders.forEach((slider) => {
		slider.value = defaultDopants;
	});

	// reset charge sliders + default values
	const chargeSliders = document.querySelectorAll(".chargeSlider");
	chargeSliders.forEach((slider) => {
		slider.value = 8000;
		slider.min = 1000;
		slider.max = 10000;
		slider.disabled = false;
	});
	updateNumTransfer(8000);

	const dopantSlider = document.querySelector(".dopantSlider");
	dopantSlider.disabled = false;

	const btn = document.querySelector(`.chargeButton${sceneCount}`);
	if (btn) {
		btn.innerText = "Apply Charge";
	}

	buttonState = "A";
}

function resetDraw() {
	background(...color.bg);
}

// check if hovering over battery
function mouseHover() {
	if (
		mouseX > 266 * sx &&
		mouseX < 344 * sx &&
		mouseY > 420 * sy &&
		mouseY < 456 * sy
	) {
		if (buttonState == "A") {
			document.body.style.cursor = "pointer";
		}
	} else {
		document.body.style.cursor = "default";
	}
}

// flip battery
function mousePressed() {
	if (
		mouseX > 266 * sx &&
		mouseX < 344 * sx &&
		mouseY > 420 * sy &&
		mouseY < 456 * sy &&
		buttonState == "A"
	) {
		reverse = !reverse;
		document.body.style.cursor = "pointer";
	}
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
	line(leftX * sx, y1 * sy, leftX * sx, y2 * sy); // x y x y
	line(leftX * sx, y2 * sy, rightX * sx, y2 * sy);
	line(rightX * sx, y1 * sy, rightX * sx, y2 * sy);

	if (reverse) {
		image(
			batteryPosImg,
			batteryD.imageX * sx,
			batteryD.imageY * sy,
			(batteryPosImg.width / 1.5) * sx,
			(batteryPosImg.height / 1.5) * sy
		);
	} else {
		image(
			batteryNegImg,
			batteryD.imageX * sx,
			batteryD.imageY * sy,
			(batteryNegImg.width / 1.5) * sx,
			(batteryNegImg.height / 1.5) * sy
		);
	}
}

function drawBox(box) {
	if (scene(10)) {
		boxD.depth = 80;
		boxD.angle = -60;
	}

	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1.2);
	// box cross section
	// box front
	beginShape();
	vertex(box.x * sx, box.y * sy);
	vertex(box.x * sx, (box.y + box.h) * sy);
	vertex((box.x + box.w) * sx, (box.y + box.h) * sy);
	vertex((box.x + box.w) * sx, box.y * sy);
	endShape(CLOSE);

	// box side
	beginShape();
	vertex((box.x + box.w) * sx, (box.y + box.h) * sy); // left top
	vertex((box.x + box.w) * sx, box.y * sy); // left bottom
	vertex((box.x + box.w + boxD.depth) * sx, (box.y + boxD.angle) * sy); // top right
	vertex((box.x + box.w + boxD.depth) * sx, (box.y + box.h + boxD.angle) * sy);
	endShape(CLOSE);

	// // box top
	beginShape();
	vertex(box.x * sx, box.y * sy); // bottom left
	vertex((box.x + box.w) * sx, box.y * sy); // bottom right
	vertex((box.x + box.w + boxD.depth) * sx, (box.y + boxD.angle) * sy); // top right
	vertex((box.x + boxD.depth) * sx, (box.y + boxD.angle) * sy); // top left
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
	// brightChargesSemi = [];

	while (brightChargesMetal.length < electronsTransferred) {
		let randomIndex;
		if (!reverse) {
			randomIndex = floor(random(rows));
		} else if (reverse) {
			randomIndex = floor(totalElectrons - random(rows));
		}
		if (!brightChargesMetal.includes(randomIndex)) {
			brightChargesMetal.push(randomIndex);
		}
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
			attractSide = currLeftBox.x + currLeftBox.w - 8;
		} else {
			dest1 = createVector(batteryD.leftX, batteryD.y1);
			dest2 = createVector(batteryD.leftX, batteryD.y2);
			dest3 = createVector(batteryD.rightX, batteryD.y2);
			dest4 = createVector(batteryD.rightX, batteryD.y1 - (i % 15) * 17 - 20);
			attractSide = currRightBox.x + 6;
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
							reverse
								? currLeftBox.updateNumElectrons(
										(currLeftBox.numElectrons -= 1)
								  )
								: currRightBox.updateNumElectrons(
										(currRightBox.numElectrons -= 1)
								  );
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
							for (let i = 7; i < 10; i++) {
								possibleSpeeds.push(i);
							}
							for (let i = -7; i > -10; i--) {
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
							// electron.updateVelocity(createVector(0, -3));
							let possibleSpeeds = [];
							for (let i = 7; i < 10; i++) {
								possibleSpeeds.push(i);
							}
							for (let i = -7; i > -10; i--) {
								possibleSpeeds.push(i);
							}
							let index = floor(Math.random() * possibleSpeeds.length);
							electron.updateVelocity(createVector(0, possibleSpeeds[index]));
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
	let posSize = 9 * sx;
	let signSize = 7 * sx;
	noStroke();

	// charge circles
	// positive charge
	if (chargeType == "pos") {
		lit ? fill(...color.pos) : fill(...color.pos, fade);
		circle(chargeX * sx, chargeY * sy, posSize);
		lit ? stroke(...color.sign) : stroke(...color.sign, fade * 8);
	}
	if (chargeType == "neutral") {
		fill(...color.neutral);
		circle(chargeX * sx, chargeY * sy, posSize);
	}

	strokeWeight(1);
	canvas.drawingContext.setLineDash([]);

	// cross line
	line(
		(chargeX - signSize / 2) * sx,
		chargeY * sy,
		(chargeX + signSize / 2) * sx,
		chargeY * sy
	);
	// up line
	line(
		chargeX * sx,
		(chargeY - signSize / 2) * sy,
		chargeX * sx,
		(chargeY + signSize / 2) * sy
	);
}

function distanceLog(position, box) {
	// position will be between 0 and 100
	var minp = 0;
	var maxp = boxD.width;

	// The result should be between 100 an 10000000
	if (box.type == "m") {
		var minv = Math.log(0.1);
	} else {
		var minv = Math.log(0.1);
	}
	var maxv = Math.log(10000000);

	// calculate adjustment factor
	var scale = (maxv - minv) / (maxp - minp);

	return Math.exp(minv + scale * (position - minp));
}

function qLog(sliderValue) {
	var minp = 0; // min slider
	var maxp = 100; // max slider

	// result
	var minv = Math.log(10);
	var maxv = Math.log(10000);

	// calculate adjustment factor
	var scale = (maxv - minv) / (maxp - minp);

	return Math.exp(minv + scale * (sliderValue - minp));
}

function scaleUnits(item, unit) {
	item = Number(item);
	// cm
	if (item >= 10000000) {
		item = item / 10000000;
		item = item.toFixed(2) + `c${unit}`;
	}
	// mm
	else if (item >= 1000000) {
		item = item / 1000000;
		item = item.toFixed(2) + `m${unit}`;
	}
	// µm
	else if (item >= 1000) {
		item = item / 1000;
		item = item.toFixed(2) + `µ${unit}`;
	} else if (item < 1 && unit == "m") {
		item = "<1nm";
	}
	// < 100nm
	else if (item < 1000) {
		item = item.toFixed(2) + `n${unit}`;
	}

	return item;
}

function drawScanner(box) {
	xPos = 0;
	scale = 1;
	scannerNM = 1;
	scannerWidth = scannerNM * scale; // 1nm

	// if mouse is in box
	if (mouseX < box.x + boxD.width + 2 && mouseX > box.x) {
		xPos = mouseX - box.x;
	}

	currX = (xPos / boxD.width) * 1000;
	if (reverse) {
		currX = currX * 10;
	}

	if (box.type == "m") {
		// following equations
		xMax = ((Q * 10 ** -6) / (1.6 * 10 ** 3)) * 10 ** 4;
		actualQ = xMax * (1.6 * 10 ** 3) * 10 ** 4 * 10 ** -2;
		currQ = currX * (1.6 * 10 ** 3) * 10 ** 4 * 10 ** -2;
	} else if (box.type == "s") {
		// following equations
		xMax =
			(((Q * 10 ** -6) / (1.6 * 10 ** -4)) * 10 ** 4) / (box.dopantAmount / 20);
		actualQ = xMax * (1.6 * 10 ** -4) * 10 ** 4 * 10 ** -2;
		currQ = currX * (1.6 * 10 ** -4) * 10 ** 4 * 10 ** -2;
	}

	// set max of where dopants stop lighting up, stop graph
	xPercent = xMax / 1000; // divide by max µm

	// convert x max to pixel
	boxMax = boxD.width * xPercent;

	// if calculated Q is greater than set Q, has saturated
	if (currQ > actualQ) {
		currQ = Number(actualQ);
	}

	// if mouse off of box, set currQ to calculated Q

	// light up lit dopants
	if (!reverse) {
		for (let i = 0; i <= box.dopantIndices.length - 1; i++) {
			let charge = box.chargeMap[box.dopantIndices[i]];
			if (charge.x <= currRightBox.x + boxMax - 16) {
				charge.updateLit(true);
			}
		}
	}

	// scale units
	textQ = scaleUnits(Q, "C");
	textActualQ = scaleUnits(actualQ, "C");

	if (sceneCount > 7 || sceneCount == 4) {
		// draw scanner
		fill(...color.scanner, 100);
		noStroke();

		// only draw if electrons have been animated
		rect(
			box.scannerX * sx,
			box.scannerY * sy,
			(xPos + scannerWidth) * sx,
			box.h * sy
		);

		beginShape();
		vertex(box.x * sx, box.y * sy); // bottom left
		vertex((box.x + scannerWidth + lastPos) * sx, box.y * sy); // bottom right
		vertex(
			(box.x + scannerWidth + lastPos + boxD.depth) * sx,
			(box.y + boxD.angle) * sy
		); // top right
		vertex((box.x + boxD.depth) * sx, (box.y + boxD.angle) * sy); // top left
		endShape(CLOSE);
		styleText();
		fill(...color.grey);

		styleText();
		xMax = xMax.toFixed(2);
		if (xMax < 0.001) {
			xMax = "<1";
		}

		let electrons = 1;

		fill(...color.net);

		if (!reverse) {
			fill(...color.scanner);
			// right box Q + electrons
			text(`Q: ${currQ.toFixed(2)}µC`, (box.x + 80) * sx, (box.y - 32) * sy);
			styleText();
			text(`#Electrons: ${electrons}`, (box.x + 160) * sx, (box.y - 32) * sy);
			// fill(...color.net);

			// left box Q + electrons
			text(
				`Q: -${actualQ.toFixed(2)}µC`,
				(boxD.xLeft + 80) * sx,
				(box.y - 32) * sy
			);
			text(
				`#Electrons: ${electrons}`,
				(boxD.xLeft + 160) * sx,
				(box.y - 32) * sy
			);
			// right box xMax
			text(`xMax: ${xMax}µm`, (box.x + 80) * sx, (box.y - 16) * sy);
			// drag over box prompt
			if (currX == 0) {
				text(
					`Drag over box to see how \n Q changes over a distance`,
					(box.x + 80) * sx,
					box.y + boxD.height / 2
				);
			}
		} else if (reverse) {
			// right box Q
			text(`Q: -${currQ.toFixed(2)}µC`, (box.x + 120) * sx, (box.y - 32) * sy);
			// left box Q
			text(
				`Q: ${actualQ.toFixed(2)}µC`,
				(boxD.xLeft + 120) * sx,
				(box.y - 32) * sy
			);
		}
		styleText();
		for (let i = 0; i < 5; i++) {
			let distance = boxD.width / 5;
			text(
				`${i * 200}µm`,
				(box.x + i * distance - 12) * sx,
				(box.y + boxD.height + 24) * sy
			);
			text(
				"|",
				(box.x + i * distance - 1.4) * sx,
				(box.y + boxD.height + 9) * sy
			);
		}
		text("1cm x 1cm 1cm", (box.x + 4) * sx, (box.y + boxD.height - 4) * sy);
		text("|", (box.x + boxD.width - 1.4) * sx, (box.y + boxD.height + 10) * sy);
		text("1mm", (box.x + boxD.width) * sx, (box.y + boxD.height + 24) * sy);
	}
}

function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12 * sx);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

function drawGraph() {
	stroke(...color.grey); // axis color
	strokeWeight(1);

	canvas.drawingContext.setLineDash([7, 3]);

	line(
		graphD.center * sx,
		(graphD.y - 76) * sy,
		graphD.center * sx,
		(graphD.y + 76) * sy
	); // vert

	line(graphD.x * sx, graphD.y * sy, graphD.end * sx, graphD.y * sy); // hor

	fill(...color.grey);

	canvas.drawingContext.setLineDash([]);

	let size = 4.4;
	stroke(...color.grey);

	// graph lines + arrows
	// y axis arrow - up
	line(
		graphD.center * sx,
		(graphD.y - 76) * sy,
		(graphD.center - size) * sx,
		(graphD.y - 76 + size) * sy
	);
	line(
		graphD.center * sx,
		(graphD.y - 76) * sy,
		(graphD.center + size) * sx,
		(graphD.y - 76 + size) * sy
	);

	// y axis arrow - down
	line(
		graphD.center * sx,
		(graphD.y + 76) * sy,
		(graphD.center + size) * sx,
		(graphD.y + 76 - size) * sy
	);
	line(
		graphD.center * sx,
		(graphD.y + 76) * sy,
		(graphD.center - size) * sx,
		(graphD.y + 76 - size) * sy
	);

	// x axis arrow - right
	line(
		graphD.end * sx,
		graphD.y * sy,
		(graphD.end - size) * sx,
		(graphD.y - size) * sy
	);
	line(
		graphD.end * sx,
		graphD.y * sy,
		(graphD.end - size) * sx,
		(graphD.y + size) * sy
	);

	// x axis arrow - right
	line(0, graphD.y * sy, (0 + size) * sx, (graphD.y - size) * sy);
	line(0, graphD.y * sy, (0 + size) * sx, (graphD.y + size) * sy);

	// y axis labels
	noStroke();
	fill(...color.grey);
	text("120 MV/cm —", (graphD.center - 70) * sx, (graphD.y - 54) * sy);
	text("-120 MV/cm —", (graphD.center - 70) * sx, (graphD.y + 54) * sy);

	if (sceneAnimated) {
		fill(...color.net);
		text(
			`= ${Q * 11.3} MV/cm`,
			(graphD.center + 30) * sx,
			(graphD.y - 64) * sy
		);
	}

	textFont("Cambria");
	textStyle(ITALIC);
	textSize(16);
	stroke(1);
	text("x", (graphD.end + 6) * sx, (graphD.y + 3) * sy);

	strokeWeight(2);
	stroke(...color.net);

	let eFieldHeight = 0;

	if (sceneAnimated) {
		eFieldHeight = Q * 11.3 * 1.1;
	}

	let netHeights = [0, 0];
	let netXPoints = [graphD.x, graphD.end];

	image(
		vecEImg,
		(graphD.center + 8) * sx,
		(graphD.y - 80) * sy,
		(vecEImg.width / 3.4) * sx,
		(vecEImg.height / 3.4) * sy
	);

	if (showEF) {
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
			if (sceneCount >= 6) {
				netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
				netXPoints = [
					graphD.x,
					graphD.center,
					graphD.center,
					graphD.center + 26,
					currRightBox.x + boxMax,
					graphD.end,
				];
			}
		} else if (reverse) {
			netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0, 5];
			netXPoints = [
				graphD.x,
				graphD.center,
				graphD.center,
				graphD.center + 26,
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

	// if (buttonState == "R") {
	drawLines(netXPoints, netHeights);
	drawArrows();
	// }
}

function drawLines(netXPoints, netHeights) {
	let graphDivisor = 2;
	let unit = 1 / graphDivisor;

	let heights = [];

	for (let i = 0; i < netHeights.length; i++) {
		heights[i] = unit * netHeights[i] + graphD.y;
	}

	for (i = 0; i < netXPoints.length; i++) {
		line(
			netXPoints[i] * sx,
			heights[i] * sy,
			netXPoints[i + 1] * sx,
			heights[i + 1] * sy
		); // line
	}
}

function drawArrows() {
	if (showEF) {
		let y = 100;
		// draw 7 arrows
		for (let i = 0; i < 7; i++) {
			strokeCap(SQUARE);
			stroke(...color.net);
			let weight = Math.abs(numTransfer) / 2.4;
			if (weight < 2) {
				weight = 2;
			}

			let triangleSize = 16;
			fill(...color.net);

			if (weight != 0) {
				// some electrons transferred so weight > 0
				if (!reverse) {
					noStroke();
					triangle(
						(boxD.xLeft + boxD.width) * sx,
						y * sy,
						(boxD.xLeft + boxD.width + 12) * sx,
						(y + triangleSize / 1.7) * sy,
						(boxD.xLeft + boxD.width + 12) * sx,
						(y - triangleSize / 1.7) * sy
					);
					if (sceneCount > 5) {
						noStroke();
						beginShape();
						vertex((boxD.xRight - 28) * sx, (y - weight / 2) * sy); // left top
						vertex((boxD.xRight - 28) * sx, (y + weight / 2) * sy); // left bottom
						vertex((currRightBox.x + boxMax) * sx, (y + weight / 2) * sy); // right bottom
						vertex((currRightBox.x + boxMax) * sx, (y + weight / 2) * sy); // right top
						endShape(CLOSE);
					} else {
						strokeWeight(weight);
						stroke(...color.net);
						line(
							(boxD.xLeft + boxD.width + 4) * sx,
							y * sy,
							boxD.xRight * sx,
							y * sy
						);
					}
				} else if (reverse) {
					noStroke();
					triangle(
						boxD.xRight * sx,
						y * sy,
						(boxD.xRight - 12) * sx,
						(y + triangleSize / 1.7) * sy,
						(boxD.xRight - 12) * sx,
						(y - triangleSize / 1.7) * sy
					);
					strokeWeight(weight);
					stroke(...color.net);
					line(
						(boxD.xLeft + boxD.width) * sx,
						y * sy,
						(boxD.xRight - 4) * sx,
						y * sy
					);
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
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	mouseHover();
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

	drawBox(currLeftBox);
	drawBox(currRightBox);
	drawCharges(currLeftBox);
	drawCharges(currRightBox);
	drawElectrons(currLeftBox);
	drawElectrons(currRightBox);
	drawElectrons(tempBox);

	if (sceneAnimated) {
		drawScanner(currRightBox);
	}

	styleText();
	fill(...color.grey);

	drawBattery();
	styleText();
	if (buttonState == "A") {
		text(
			"Click battery to reverse polarity",
			(batteryD.leftX + 80) * sx,
			(batteryD.y2 + 40) * sy
		);
	}

	if (sceneCount > 2 && sceneCount != 5) {
		drawGraph();
	}
}

function scene1() {
	updateNumTransfer(8000);
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
	updateNumTransfer(8000);
	drawItems();
}

function scene6() {
	updateNumTransfer(8000);
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
}

function scene11() {}
