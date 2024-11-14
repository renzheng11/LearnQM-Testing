/* ------------------------------- 
Author: Ren Zheng
Contact: renzheng112@gmail.com
------------------------------- */

// ------------------------------------ Variables ------------------------------------
// factors for scaling drawing to fit various screen sizing
let scale_x = 1296;
let scale_y = 710;
let sx;
let sy;

let fade; // alpha that determines pos charges fade during beginning of scene

let timeoutID = 0; // used to clear timeout
const timeout = 3100; // time to wait to during transfer being drawing arrows, numbers, graphs

let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	grey: [175, 175, 175],
	// pos: [125, 241, 148], old
	// neg: [255, 247, 174], old
	pos: [200, 122, 121], // red
	neg: [60, 163, 255], // blue
	// sign:  [65, 46, 46, 1],
	// pos: [125, 241, 148], // green
	// neg: [254, 246, 182], // yellow
	sign: [90, 60, 60],
	battery: [230, 226, 188],
	net: [255, 241, 116],
	scanner: [125, 241, 148],
	neutral: [79, 79, 79],
};
// set rows & cols for positive charge grid
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

let boxMax; // pixel x position of box that corresponds to xmax

// battery dimensions
const battery = {
	imageX: boxD.xRight - 44,
	imageY: boxD.y + boxD.height + 44,
	leftX: boxD.xLeft + boxD.width / 2,
	rightX: boxD.xRight + boxD.width / 2,
	y1: boxD.y + boxD.height,
	y2: boxD.y + boxD.height + 60,
	size: 40,
};

let reverse = false; // keeps track of battery direction (whether charge flows left or right)

// graph dimensions
const graph = {
	x: 0,
	y: battery.imageY + 152,
	width: 640,
	center: boxD.xLeft + boxD.width,
	end: 0,
};

graph.x = graph.center - graph.width / 2;
graph.end = graph.center + graph.width / 2;

// images
let batteryPosImg;
let batteryNegImg;
let mosImg;
let vecEImg;

// variables for moving electrons
let dest1; // where battery line connects to box where charge flows from
let dest2; // corner under dest1
let dest3; // where battery line connects to box where charge flows to
let dest4; // corner under dest3

let attractSide; // boundary where electrons flow to

let currLeftBox; // current scene's left box
let currRightBox; // current scene's right box

let tempBox; // temporary place to store moving electrons

let sceneAnimated = false; // transfer of electrons completed
let showEF = false; // to show or hide electric field
let numTransfer = 2; // number of electrons to transfer
let numTransferRange = 18; // range for slider that determines numTransfer

const colorChangeInterval = 500; // determines rate of random color change for attracted positive charges in metal
let lastColorChange = 0; // tracks how much time has passed since last color change
let brightChargesMetal = []; // indexes for which positive charges to light up

let electronsTransferred = 0; // number of electrons transferred
let defaultDopants = 30; // default number of dopants when scene starts

let moveBound = 0; // set bounce boundary for depletion zone (where electrons are repulsed from lit up positive charges)

// scanner / variables related to xMax and charge (Q)
let scannerNM;
let scannerWidth;

let xMax; // end of depletion region, math amount
let xPercent; // percentage of xMax compared to total region width
let maxBox = 0; // box's pixel x position for xMax (scale labelled right below box)
let boxMouseX = 0; // tracks user's pixel mouse position within box
let graphMouseX = 0; // tracks user's pixel mouse position within canvas

let currX; // converts pixel boxMouseX to math amount

let Q = 1; // charge amount determined by user slider
let currQ; // calculated amount according to boxMouseX when scanning
let actualQ = 1; // ???

let buttonState = "A"; // tracks whether button text is "Apply" or "Reset"

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");
	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");
	mosImg = loadImage("mos.png");
	vecEImg = loadImage("EF.png");

	tempBox = new Box(boxD.xLeft, boxD.y, boxD.width, boxD.height, 0);

	// instantiate left and right box
	newBoxes();

	// reset all variables
	resetScene();
}

// ----------------------------- Update functions from button presses -----------------------------

/**
 * Updates dopant amount when dopant slider value changes
 * @param {*} value
 */
function updateDopantAmount(value) {
	currRightBox.updateDopants(value);
}

// update number of electrons transferred to other box
function updateNumTransfer(value) {
	if (value < 0) {
		reverse = true;
	} else {
		reverse = false;
	}
	numTransfer = Math.round(value / 555); // ???
	// if (numTransfer < 0) {
	// 	numTransfer = 1;
	// }
	Q = value / 1000;
}

// ------------------------------- Scene control functions -------------------------------

/**
 * Reset all variables for new scene
 */
function resetScene() {
	background(...color.bg);
	clearTimeout(timeoutID);

	fade = 255;
	reverse = false;
	tempBox.electrons = [];
	numTransfer = 2;
	brightChargesMetal = [];
	sceneAnimated = false;
	timesAnimated = 0;
	electronsTransferred = 0;
	moveBound = 0;

	// re-initialize current boxes
	boxD.depth = 80;
	boxD.angle = -60;
	lastColorChange = 0;
	showEF = false;
	totalElectrons = rows * cols;

	newBoxes();

	// change electrons, dopants, type for semiconductor boxes
	let semis = [5, 6, 7, 8, 9]; // scenes where right boxes = semiconductor
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
		slider.min = -10000;
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

/**
 * Generate indices for which positive charges are attracted and light up after transfer
 * @param {*} dopantIndices Indices for which positive charges are dopants
 */
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

/**
 * Initiate electron transfer and start animation
 */
function animateElectrons() {
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
				for (let i = 0; i < Math.abs(numTransfer); i++) {
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
				for (let i = 0; i < Math.abs(numTransfer); i++) {
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
				// push electrons away from depletion region

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

/**
 * Instantiates default box
 */
function newBoxes() {
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

/**
 * Fade all neutral charges during beginning of scene
 */
function fadeFunc() {
	let fadeLimit = 70;
	if (fade > fadeLimit) {
		fade -= 2;
	}
}

/**
 * Check if mouse hovering over battery to change cursor
 */
// function mouseHover() {
// 	if (
// 		mouseX / sx > battery.imageX - 10 &&
// 		mouseX / sx < battery.imageX + 66 &&
// 		mouseY / sy > battery.y1 * sy &&
// 		mouseY / sy < (battery.y1 + 40) * sy
// 	) {
// 		if (buttonState == "A") {
// 			document.body.style.cursor = "pointer";
// 		}
// 	} else {
// 		document.body.style.cursor = "default";
// 	}
// }

/**
 * Check if mouse pressed on the battery to reverse the battery direction
 */
// function mousePressed() {
// 	if (
// 		mouseX / sx > battery.imageX - 10 &&
// 		mouseX / sx < battery.imageX + 66 &&
// 		mouseY / sy > battery.y1 * sy &&
// 		mouseY / sy < (battery.y1 + 40) * sy &&
// 		buttonState == "A"
// 	) {
// 		reverse = !reverse;
// 	}
// }

// ------------------------------- Drawing functions ------------------------------- //
/**
 * Draw battery and wires
 */
function drawBattery() {
	let leftX = battery.leftX;
	let rightX = battery.rightX;
	let y1 = battery.y1;
	let y2 = battery.y2;

	noStroke();
	fill(...color.battery);
	strokeWeight(1.2);
	stroke(...color.white);

	line(leftX, y1, leftX, y2);
	line(leftX, y2, rightX, y2);
	line(rightX, y1, rightX, y2);

	if (reverse) {
		image(
			batteryPosImg,
			battery.imageX,
			battery.imageY,
			batteryPosImg.width / 1.5,
			batteryPosImg.height / 1.5
		);
	} else {
		image(
			batteryNegImg,
			battery.imageX,
			battery.imageY,
			batteryNegImg.width / 1.5,
			batteryNegImg.height / 1.5
		);
	}
}

/**
 * Draw box outline
 * @param {*} box instance to draw
 */
function drawBox(box) {
	if (scene(10)) {
		boxD.depth = 80;
		boxD.angle = -60;
	}

	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1.2);

	// box front
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

/**
 * Draws positive charges
 * @param {*} box Box to draw charges for
 */
function drawCharges(box) {
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

/**
 * Helper function for drawElectrons
 * @param {*} electron
 * @param {*} dest destination
 * @param {*} side
 * @returns
 */
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

/**
 * Draw electrons, controls animation during transfer
 * @param {*} box
 */
function drawElectrons(box) {
	// check for animation, animate
	for (let i = 0; i < box.electrons.length; i++) {
		let electron = box.electrons[i];

		// set destinations for travel
		if (!reverse) {
			dest1 = createVector(battery.rightX, battery.y1);
			dest2 = createVector(battery.rightX, battery.y2);
			dest3 = createVector(battery.leftX, battery.y2);
			dest4 = createVector(battery.leftX, battery.y1 - (i % 15) * 17 - 20);
			attractSide = currLeftBox.x + currLeftBox.w - 8;
		} else {
			dest1 = createVector(battery.leftX, battery.y1);
			dest2 = createVector(battery.leftX, battery.y2);
			dest3 = createVector(battery.rightX, battery.y2);
			dest4 = createVector(battery.rightX, battery.y1 - (i % 15) * 17 - 20);
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
							// charges get attracted to the side
							electron.position.x += 8;
						}

						if (electron.position.x > attractSide - 2) {
							let possibleSpeeds = [];
							for (let i = 8; i < 12; i++) {
								possibleSpeeds.push(i);
							}
							for (let i = -8; i > -12; i--) {
								possibleSpeeds.push(i);
							}
							let index = floor(Math.random() * possibleSpeeds.length);

							electron.updateVelocity(createVector(0, possibleSpeeds[index]));
							electron.updateAnimate(false);
							if (electron.pushed == false) {
								electron.updatePushed(true);
								electronsTransferred += 1;
							}
						}
					} else if (reverse) {
						if (electron.position.x > attractSide) {
							// charges get attracted to the side
							electron.position.x -= 8;
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
								timesAnimated += 1;
								electronsTransferred += 1;
							}
						}
					}
				}
			} else {
				// not animated - moving around in box
				electron.update();

				// push away free electrons in semiconductor away from depletion region (highlighted positive charges)
				if (
					electron.boxX > 200 &&
					electron.position.x > boxD.xRight &&
					electron.position.x < boxD.xRight + moveBound
				) {
					electron.position.x += 4;
				}
			}
		}
		if (electron.show) {
			electron.display(electron.dim);
		}
	}
}

/**
 * Draw individual positive charge
 * @param {*} chargeX
 * @param {*} chargeY
 * @param {*} chargeType
 * @param {*} lit Is charge lit up
 */
function drawCharge(chargeX, chargeY, chargeType, lit) {
	let posSize = 9;
	let signSize = 7;
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

/**
 * Scale units from nano (which all numbers are based)
 * @param {*} item
 * @param {*} unit
 * @returns
 */
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
		item = "<.1nm";
	}
	// < 100nm
	else if (item < 1000) {
		item = item.toFixed(2) + `n${unit}`;
	}

	return item;
}

/**
 * Draws scanner
 * @param {*} box Box to draw scanner for
 */
function drawScanner(box) {
	boxMouseX = 0;

	let scale = 1;
	scannerNM = 1;
	scannerWidth = scannerNM * scale; // 1nm

	// if mouse is in box

	if (mouseX / sx < box.x + boxD.width && mouseX / sx > box.x) {
		boxMouseX = mouseX / sx - box.x;
	}

	// percentage
	currX = boxMouseX / boxD.width;

	if (box.type == "m") {
		// following equations
		xMax = ((Q * 10 ** -6) / (1.6 * 10 ** 3)) * 10 ** 4;
	} else if (box.type == "s") {
		// following equations
		xMax =
			(((Q * 10 ** -6) / (1.6 * 10 ** -4)) * 10 ** 4) / (box.dopantAmount / 20);
	}

	// set max of where dopants stop lighting up, stop graph
	xPercent = xMax / 1000; // divide by max µm

	// convert x max to pixel
	boxMax = boxD.width * xPercent;

	// calculate currQ
	currQ = (Q * currX) / xPercent;

	// if scanning Q is greater than set Q, has saturated
	if (currQ > Q) {
		currQ = Number(Q);
	}

	// light up attracted uncompensated dopants in semiconductors
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
		fill(...color.scanner, 72);
		noStroke();

		// only draw if electrons have been animated
		rect(box.x, box.y, boxMouseX + scannerWidth, box.h);

		styleText();
		fill(...color.grey);

		styleText();
		xMax = xMax.toFixed(2);
		if (xMax < 0.001) {
			xMax = "<.001";
		}

		// let electronsLeft = (actualQ / (1.6 * 10 ** -19)).toExponential(2);
		let electronsLeft = (Q / (1.6 * 10 ** -19)).toExponential(2);
		let electronsRight = (currQ / (1.6 * 10 ** -19)).toExponential(2);

		fill(...color.net);

		// pixels into right box where 1st column appears to end
		if (!reverse) {
			fill(...color.scanner);
			// right box Q + electrons

			// for scenes where both sides are metal
			let surfaceDepth = 18;
			// for scanner scenes
			// when scanning, linearly increase Q, absent electrons / extra electrons when scanning over surface (which is really small distance but represented as larger - about size of first column)
			console.log(sceneCount);
			if (sceneCount == 4 || sceneCount == 8 || sceneCount == 9) {
				if (boxMouseX < surfaceDepth) {
					currQ = Q * (boxMouseX / surfaceDepth);
					electronsRight = (
						(currQ / (1.6 * 10 ** -19)) *
						(boxMouseX / surfaceDepth)
					).toExponential(2);
				} else {
					currQ = Q;
					electronsRight = (currQ / (1.6 * 10 ** -19)).toExponential(2);
				}
			}

			text(`Q: ${currQ.toFixed(2)}µC`, box.x + 80, box.y - 32);

			text(`# absent electrons: ${electronsRight}`, box.x + 152, box.y - 32);
			styleText();
			// left box Q + electrons
			text(`Q: -${Q.toFixed(2)}µC`, boxD.xLeft + 80, box.y - 32);

			// right box xMax
			text(`xMax: ${xMax}µm`, box.x + 80, box.y - 16);
			// drag over box prompt
			if (currX == 0) {
				text(
					`Drag over box to see how \n Q changes over a distance`,
					box.x + 80,
					box.y + boxD.height / 2
				);
			}

			// reset for calculations for electric field
			// currQ = Q;
			// electronsRight = (currQ / (1.6 * 10 ** -19)).toExponential(2);
		} else if (reverse) {
			let surfaceDepth = 8;
			if (sceneCount == 4 || sceneCount == 8 || sceneCount == 9) {
				if (boxMouseX < surfaceDepth) {
					currQ = Q * (boxMouseX / surfaceDepth);
					electronsLeft = (
						(Q / (1.6 * 10 ** -19)) *
						(boxMouseX / surfaceDepth)
					).toExponential(2);
					console.log(electronsLeft);
				} else {
					currQ = Q;
					electronsLeft = (Q / (1.6 * 10 ** -19)).toExponential(2);
					console.log(electronsLeft);
				}
			}
			// right box Q
			// text(`Q: -${currQ.toFixed(2)}µC`, box.x + 120, box.y - 32);

			text(`Q: -${currQ.toFixed(2)}µC`, box.x + 80, box.y - 32);
			text(`# extra electrons:  ${electronsLeft}`, box.x + 152, box.y - 32);

			// if (boxMouseX >= 6) {
			// 	// num is picked (scanner looks like it's right of electrons) - may need to change later
			// 	// if scanner is right of electrons
			// 	text(`Q: -${Q.toFixed(2)}µC`, box.x + 80, box.y - 32);
			// 	text(`# extra electrons:  ${electronsLeft}`, box.x + 152, box.y - 32);
			// } else {
			// 	// if scanner out of box
			// 	text(`Q: 0µC`, box.x + 80, box.y - 32);
			// 	text(`# extra electrons: 0`, box.x + 152, box.y - 32);
			// }
			// left box Q
			text(`Q: ${Q.toFixed(2)}µC`, boxD.xLeft + 120, box.y - 32);
		}
		styleText();
		for (let i = 0; i < 5; i++) {
			let distance = boxD.width / 5;
			if (i != 1) {
				// skip 200 temporarily
				text(
					`${i * 200}µm`,
					box.x + i * distance - 12,
					box.y + boxD.height + 24
				);
			}
			text("|", box.x + i * distance - 1.4, box.y + boxD.height + 9);
		}
		text("1cm x 1cm 1cm", box.x + 4, box.y + boxD.height - 4);
		text("|", box.x + boxD.width - 1.4, box.y + boxD.height + 10);
		text("1mm", box.x + boxD.width, box.y + boxD.height + 24);

		// on left surface of box that charges are transferred to
		fill(...color.scanner);
		text("|", box.x + 20, box.y + boxD.height + 10);
		text("<.001µm", box.x + 20, box.y + boxD.height + 24);
	}
}

/**
 * Default text style
 */
function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

/**
 * Draw electric field graph
 */
function drawGraph() {
	stroke(...color.grey); // axis color
	strokeWeight(1);

	canvas.drawingContext.setLineDash([7, 3]);

	line(graph.center, graph.y - 76, graph.center, graph.y + 76); // vert

	line(graph.x, graph.y, graph.end, graph.y); // hor

	fill(...color.grey);

	canvas.drawingContext.setLineDash([]);

	let size = 4.4;
	stroke(...color.grey);

	// graph lines + arrows
	// y axis arrow - up
	line(graph.center, graph.y - 76, graph.center - size, graph.y - 76 + size);
	line(graph.center, graph.y - 76, graph.center + size, graph.y - 76 + size);

	// y axis arrow - down
	line(graph.center, graph.y + 76, graph.center + size, graph.y + 76 - size);
	line(graph.center, graph.y + 76, graph.center - size, graph.y + 76 - size);

	// x axis arrow - right
	line(graph.end, graph.y, graph.end - size, graph.y - size);
	line(graph.end, graph.y, graph.end - size, graph.y + size);

	// x axis arrow - right
	line(0, graph.y, 0 + size, graph.y - size);
	line(0, graph.y, 0 + size, graph.y + size);

	// y axis labels
	noStroke();
	fill(...color.grey);
	text("120 MV/cm —", graph.center - 70, graph.y - 54);
	text("-120 MV/cm —", graph.center - 70, graph.y + 54);

	// track mouse position
	graphMouseX = mouseX / sx;

	if (sceneAnimated) {
		stroke(...color.net);
		noFill();

		// draw line indicating where E = [x] amount is referring to
		line(graphMouseX, graph.y - 60, graphMouseX, graph.y + 60);

		noStroke();
		fill(...color.net);
		// draw EF amount text
		if (graphMouseX > boxD.xRight && (reverse || sceneCount == 4)) {
			text(`= ${0} MV/cm`, graph.center + 30, graph.y - 64);
		} else if (graphMouseX > graph.center) {
			let displayQ = -(Q * 11.3).toFixed(2);
			if (reverse) {
				displayQ = -displayQ;
			}
			text(`= ${displayQ} MV/cm`, graph.center + 30, graph.y - 64);
		} else {
			text(`= ${0} MV/cm`, graph.center + 30, graph.y - 64);
		}
	}

	textFont("Cambria");
	textStyle(ITALIC);
	textSize(16);
	stroke(1);
	text("x", graph.end + 6, graph.y + 3);

	strokeWeight(2);
	stroke(...color.net);

	let eFieldHeight = 0;

	if (sceneAnimated) {
		eFieldHeight = Q * 11.3 * 1.1;
	}

	let netHeights = [0, 0];
	let netXPoints = [graph.x, graph.end];

	image(
		vecEImg,
		graph.center + 8,
		graph.y - 80,
		vecEImg.width / 3.4,
		vecEImg.height / 3.4
	);

	if (showEF) {
		if (!reverse) {
			netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
			netXPoints = [
				graph.x,
				graph.center,
				graph.center,
				boxD.xRight,
				boxD.xRight,
				graph.end,
			];

			// over distance
			if (sceneCount >= 6) {
				netHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
				netXPoints = [
					graph.x,
					graph.center,
					graph.center,
					boxD.xRight,
					currRightBox.x + boxMax,
					graph.end,
				];
			}
		} else if (reverse) {
			netHeights = [0, 0, eFieldHeight, eFieldHeight, 0, 0, 5];
			netXPoints = [
				graph.x,
				graph.center,
				graph.center,
				boxD.xRight,
				boxD.xRight,
				graph.end,
			];
		}
	}
	graphNorm = 1.4;
	// standardize the heights
	for (let i = 0; i < netHeights.length; i++) {
		netHeights[i] = -netHeights[i] / graphNorm;
	}

	drawLines(netXPoints, netHeights);
	drawArrows();
}

/**
 * Draw graph lines
 * @param {*} netXPoints points on x axis
 * @param {*} netHeights points on y axis
 */
function drawLines(netXPoints, netHeights) {
	let graphivisor = 2;
	let unit = 1 / graphivisor;

	let heights = [];

	for (let i = 0; i < netHeights.length; i++) {
		heights[i] = unit * netHeights[i] + graph.y;
	}

	for (i = 0; i < netXPoints.length; i++) {
		line(netXPoints[i], heights[i], netXPoints[i + 1], heights[i + 1]); // line
	}
}

/**
 * Draw electric field arrows
 */
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
						vertex(boxD.xRight - 28, y - weight / 2); // left top
						vertex(boxD.xRight - 28, y + weight / 2); // left bottom
						vertex(currRightBox.x + boxMax, y + weight / 2); // right bottom
						vertex(currRightBox.x + boxMax, y + weight / 2); // right top
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
						y,
						boxD.xRight - 12,
						y + triangleSize / 1.7,
						boxD.xRight - 12,
						y - triangleSize / 1.7
					);
					strokeWeight(weight);
					stroke(...color.net);
					line(boxD.xLeft + boxD.width, y, boxD.xRight - 4, y);
				}
			}
			y += 40;
		}
	}
}

function draw() {
	sx = (windowWidth / scale_x) * 0.95;
	sy = (windowHeight / scale_y) * 0.95;
	scale(sx);
	if (sceneCount > 0) {
		// canvas

		background(...color.bg);

		// ongoing functions
		fadeFunc();
		// mouseHover();

		// boxes & charges
		drawBox(currLeftBox);
		drawBox(currRightBox);
		drawCharges(currLeftBox);
		drawCharges(currRightBox);
		drawElectrons(currLeftBox);
		drawElectrons(currRightBox);
		drawElectrons(tempBox);

		// scanner
		if (sceneAnimated) {
			drawScanner(currRightBox);
		}

		// battery
		styleText();
		fill(...color.grey);

		drawBattery();
		styleText();
		// if (buttonState == "A") {
		// 	text(
		// 		"Click battery to reverse polarity",
		// 		battery.leftX + 80,
		// 		battery.y2 + 40
		// 	);
		// }

		// graph
		if (sceneCount > 2 && sceneCount != 5) {
			drawGraph();
		}
	} else {
		background(...color.bg);
	}
}
