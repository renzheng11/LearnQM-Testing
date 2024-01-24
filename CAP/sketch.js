let fade;
let fadeAmount = 1;
let afterDelay = false;

// vars
let color = {
	grey: [175, 175, 175],
	pos: [218, 107, 107],
	posDim: [65, 46, 46],
	neg: [95, 177, 255],
	negDim: [18, 66, 104],
	sign: [122, 59, 59],
	signDim: [50, 31, 31],
	battery: [230, 226, 188],
	purple: [145, 87, 204],
	neutral: [79, 79, 79],
};

let boxes = {
	L1: null,
	R1: null,

	L2: null,
	R2: null,

	L3: null,
	R3: null,

	L4: null,
	R4: null,

	L5: null,
	R5: null,

	L6: null,
	R6: null,

	L7: null,
	R7: null,

	L8: null,
	R8: null,

	L9: null,
	R9: null,

	L10: null,
	R10: null,

	L11: null,
	R11: null,
};

const rows = 20;
const cols = 15;

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
	y: batteryD.imageY + 140,
	width: 616,
	center: boxD.xLeft + boxD.width,
	leftPadding: 140,
	x: 0,
	end: 0,
};

graphD.x = graphD.center - graphD.width / 2 + graphD.leftPadding;
graphD.end = graphD.center + graphD.width / 2 - 60;

const colorChangeInterval = 500;

// images
let batteryPosImg;
let batteryNegImg;

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

let sceneAnimated = false;
let showEF = false;
let numTransfer = 12;

let brightChargesMetal = [];
let brightChargesSemi = [];
let animCharges = [];

let balls = [];
let totalElectrons = 200;

let scannerSpeed = 0;

let electronsTransferred = 0;
let defaultDopants = 30;

let currButton;
let currVoltageSlider;
let currDopantSlider;

// scanner / sizes
let lastPos = 0;
const surfaceWidth = 10; // 10nm

function setup() {
	fade = 255;
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");
	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");

	// tempBox
	tempBox = new Box(boxD.xLeft, boxD.y, boxD.width, boxD.height, 0);

	let side = "left";

	for (let [box, value] of Object.entries(boxes)) {
		// instantiate each box with x position depending on left or right box

		let x;
		side == "left" ? (x = boxD.xLeft) : (x = boxD.xRight);
		boxes[box] = new Box(
			x,
			boxD.y,
			boxD.width,
			boxD.height,
			totalElectrons,
			"m"
		);
		side == "left" ? (side = "right") : (side = "left");
	}

	// change electrons, dopants, type for semiconductor boxes
	let semis = [boxes.R5, boxes.R6, boxes.R7, boxes.R8, boxes.R9, boxes.R10];
	semis.forEach((box) => {
		box.updateNumElectrons(defaultDopants);
		box.updateDopants(defaultDopants);
		box.updateType("s");
	});
}

// update number of electrons transferred to other box
function updateNumTransfer(value) {
	numTransfer = value;
}

function controlHelper(id, text, controlFunc, resetFunc) {
	// before: param 1 = scene
	// if (sceneCount == scene) {
	if (document.getElementById(`${id}`).textContent == "Reset") {
		resetFunc();
		electronsTransferred = 0;
		document.getElementById(`${id}`).textContent = `${text}`;
	} else if (document.getElementById(`${id}`).textContent == `${text}`) {
		controlFunc();
		document.getElementById(`${id}`).textContent = "Reset";
	}
	// }
}

function animateElectrons() {
	scannerSpeed = 1;

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

	// reset voltage controls
	const voltageButtons = document.querySelectorAll(".voltageButton");
	voltageButtons.forEach((btn) => {
		if (btn.textContent == "Reset") {
			// resetFunc()
			// re-initialize current boxes
			currLeftBox = new Box(100, 100, 160, 280, totalElectrons, "m");
			currRightBox = new Box(340, 100, 160, 280, totalElectrons, "m");
			// need special cases for semiconductors / other special boxes that aren't metals
			tempBox.electrons = [];
			sceneAnimated = false;
			showEF = false;
			electronsTransferred = 0;
			btn.textContent = "Apply Voltage";
		} else if (btn.textContent == "Apply Voltage") {
			if (sceneAnimated == false && btn.textContent == "Reset") {
				// hasn't animated yet and not reset
				setTimeout(() => {
					if (currRightBox.numElectrons < totalElectrons) {
						showEF = true;
						sceneAnimated = true;
					}
				}, "4000");
			}
			btn.textContent = "Reset";
		}
	});
}

// function animateScanner() {
//     animateElectrons();
// }

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
	electronsTransferred = 0;

	lastColorChange = 0;

	atDestSide = false;

	showEF = false;

	balls = [];
	totalElectrons = 200;

	scannerSpeed = 0;

	const voltageButtons = document.querySelectorAll(".voltageButton");
	voltageButtons.forEach((btn) => {
		btn.value = 12;
	});

	const dopantSliders = document.querySelectorAll(".dopantSlider");
	dopantSliders.forEach((slider) => {
		slider.value = defaultDopants;
	});

	// dim neutrals after 2 seconds
	setTimeout(() => {
		// background(255, 0, 0, fade)
		// afterDelay = true
		// for (let i = 0; i <= currRightBox.chargeMap.length - 1; i++) {
		//   currRightBox.chargeMap[i].updateType("dim")
		// }
		// for (let i = 0; i <= currRightBox.electrons.length - 1; i++) {
		//   currRightBox.electrons[i].updateDim(true)
		// }
		// for (let i = 0; i <= currLeftBox.chargeMap.length - 1; i++) {
		//   currLeftBox.chargeMap[i].updateType("dim")
		// }
		// for (let i = 0; i <= currLeftBox.electrons.length - 1; i++) {
		//   currLeftBox.electrons[i].updateDim(true)
		// }
	}, 1000);
}

function drawBattery() {
	let leftX = batteryD.leftX;
	let rightX = batteryD.rightX;
	let y1 = batteryD.y1;
	let y2 = batteryD.y2;
	let batterySize = batteryD.batterySize;

	noStroke();
	fill(color.battery);

	strokeWeight(1.2);
	stroke("#FFF");
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

function drawMOS(box, label) {
	fill(18);
	stroke("#fff");
	let boxD = 100;
	let boxA = -100;
	beginShape();
	vertex(box.x + box.w, box.y + box.h); // left top
	vertex(box.x + box.w, box.y); // left bottom
	vertex(box.x + box.w + boxD, box.y + boxA); // top right
	vertex(box.x + box.w + boxD, box.y + box.h + boxA);
	endShape(CLOSE);

	noStroke();
	fill("white");
	text(label, box.x + box.w + graphD.leftPadding, box.y + box.h / 2 - 40);
}

function drawBox(box) {
	stroke("#FFF");
	strokeWeight(1.2);
	fill(18);

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

	styleText();

	if (box.type == "m") {
		let totalNM = 10;
		text(`Total nm: 10`, box.x + 20, box.y + 300);

		// code numtransfer = 12
		// # / 20 in 1m = #/20nm
		if (electronsTransferred > 1) {
			if (box.x > 300) {
				totalNM -= numTransfer / 20;
			} else {
				totalNM += numTransfer / 20;
			}
		}

		let numElectrons = (totalNM * 10 ** 15).toExponential();

		// let nr1 = numElectrons.substr(0, 4)
		// let nr2 = numElectrons.substr(4, numElectrons.length)

		// let finalNr = Number(nr1 + 0 + nr2).toExponential(2)

		text(`Total electrons: ${numElectrons}`, box.x + 20, box.y + 320);
	} else if (box.type == "s") {
		let totalNM = 10;
		// let expoRange = 10 ** 2 / box.dopantAmount
		let expo = 10 ** 15;

		// let expo = 10 ** 15

		text(`Total nm: 10`, box.x + 20, box.y + 300);
		let numElectrons = (totalNM * expo).toExponential();

		let nr1 = numElectrons.substr(0, 4);
		let nr2 = numElectrons.substr(4, numElectrons.length);
		let finalNr = Number(nr1 + 0 + nr2).toExponential(2);

		// console.log(numElectrons)
		text(`Total electrons: ${finalNr}`, box.x + 20, box.y + 320);
	}
	// text(`total negative charges:${box.numElectrons}`, box.x + 20, box.y + 320)
	// text(
	//   `total positive charges:${box.chargeMap.length}`,
	//   box.x + 20,
	//   box.y + 340
	// )

	// text(
	//   `net charge: ${box.chargeMap.length - box.numElectrons}`,
	//   box.x + 20,
	//   box.y + 360
	// )

	// // left box
	// text(`total nm: 10`, boxD.xLeft + 20, box.y + 300)
	// text(
	//   `total negative charges:${currLeftBox.numElectrons}`,
	//   boxD.xLeft + 20,
	//   box.y + 320
	// )
	// text(
	//   `total positive charges:${currLeftBox.chargeMap.length}`,
	//   boxD.xLeft + 20,
	//   box.y + 340
	// )
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
	while (brightChargesSemi.length < electronsTransferred) {
		let randomIndex = floor(random(defaultDopants));
		if (!brightChargesSemi.includes(randomIndex)) {
			brightChargesSemi.push(randomIndex);
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

		if (box.type == "s") {
			for (let i = 0; i <= box.chargeMap.length - 1; i++) {
				let isDopant = box.dopantIndices.includes(i);
				if (isDopant) {
					box.chargeMap[i].updateType("pos");
				}
			}
		}

		if (boxSideCondition) {
			for (let i = 0; i <= box.chargeMap.length - 1; i++) {
				let isBrightMetal = brightChargesMetal.includes(i);

				if (box.type == "m") {
					// dim all right positive charges
					// if (electronsTransferred >= 1) {
					//   box.chargeMap[i].updateType("dim")
					// }
					// light up attracted positive charges
					if (isBrightMetal) {
						// box.chargeMap[i].updateType("pos")
						box.chargeMap[i].updateLit(true);
					} else {
						box.chargeMap[i].updateLit(false);
					}
				}

				// // make all neutrals
				// if (box.type == "s") {
				//   if (electronsTransferred >= 1) {
				//     box.chargeMap[i].updateType("dim")
				//   }
				// }
			}
			if (box.type == "s") {
				// light up attracted dopants
				for (let j = 0; j < brightChargesSemi.length; j++) {
					let dopant = box.chargeMap[box.dopantIndices[brightChargesSemi[j]]];
					if (brightChargesSemi.includes(j)) {
						dopant.updateLit(true);
					} else {
						dopant.updateLit(false);
					}
				}
			}
		}

		drawCharge(chargeX, chargeY, chargeType, box.chargeMap[i].lit);
	}

	// styleText()
	// text(`#negative charges: ${box.numElectrons}`, box.x + 30, box.y + 300)
}

function updateDopantAmount(value) {
	sceneCount == 5 ? boxes.R5.updateDopants(value) : null;
	sceneCount == 6 ? boxes.R6.updateDopants(value) : null;
	sceneCount == 7 ? boxes.R7.updateDopants(value) : null;
	sceneCount == 8 ? boxes.R8.updateDopants(value) : null;
	sceneCount == 9 ? boxes.R9.updateDopants(value) : null;
	sceneCount == 10 ? boxes.R10.updateDopants(value) : null;
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

								// dim all electrons
								// for (let i = 0; i < currLeftBox.electrons.length; i++) {
								//   currLeftBox.electrons[i].updateDim(true)
								// }
								// for (let i = 0; i < currRightBox.electrons.length; i++) {
								//   currRightBox.electrons[i].updateDim(true)
								// }

								electronsTransferred += 1;

								// for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
								//   // for each column
								//   currLeftBox.chargeMap[i].updateType("dim")
								// }
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

								// dim all electrons
								// for (let i = 0; i < currLeftBox.electrons.length; i++) {
								//   currLeftBox.electrons[i].updateDim(true)
								// }
								// for (let i = 0; i < currRightBox.electrons.length; i++) {
								//   currRightBox.electrons[i].updateDim(true)
								// }

								electronsTransferred += 1;

								// for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
								//   // for each column
								//   currLeftBox.chargeMap[i].updateType("dim")
								// }
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
		lit ? fill(218, 107, 107) : fill(218, 107, 107, fade);
		circle(chargeX, chargeY, posSize);
		lit ? stroke(122, 59, 59) : stroke(122, 59, 59, fade);
	}
	if (chargeType == "neutral") {
		fill(color.neutral);
		circle(chargeX, chargeY, posSize);
	}

	strokeWeight(1);
	canvas.drawingContext.setLineDash([]);

	// cross line
	line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY);
	// up line
	line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2);
}

function drawScanner(box) {
	// setTimeout(() => {
	//   if (sceneCount == 4) {
	//     let measure = int(box.x) + int(currVoltageSlider.value)
	//     if (box.scannerX >= measure) {
	//       scannerSpeed = 0
	//     }
	//   }
	//   if (sceneCount == 8) {
	//     let measure = int(box.x) + int(currVoltageSlider.value) * 6
	//     if (box.scannerX >= measure) {
	//       scannerSpeed = 0
	//     }
	//   }
	//   if (sceneCount == 9) {
	//     // let measure = int(box.x) + int(currVoltageSlider.value) * 6;
	//     let measure = int(box.x) + Math.log(int(currVoltageSlider.value)) * 42
	//     measure = measure - int(currDopantSlider.value) / 2
	//     if (box.scannerX >= measure) {
	//       if (int(currDopantSlider.value) > 0) {
	//         scannerSpeed = 0
	//       }
	//     }
	//   }
	//   if (sceneCount == 10) {
	//     let measure = int(box.x) + int(currVoltageSlider.value)
	//     if (box.scannerX >= measure) {
	//       scannerSpeed = 0
	//     }
	//   }
	// }, "200")

	// // if scanner hits end of box or electron goal has been transferred
	// if (
	//   box.scannerX > box.x + box.w - 10 ||
	//   electronsTransferred >= numTransfer
	// ) {
	//   scannerSpeed = 0
	// }

	// // move the scanner using scannerSpeed
	// box.updateScannerX(box.scannerX + scannerSpeed)

	// // how much of box has been scanned
	// let scannerOverBox = box.scannerX - box.x // total = 150

	// // gets percentage of scan
	// let scanProgress = scannerOverBox / 150

	// // which electron to move based on scan percentage
	// let electronIndex = Math.floor(box.numElectrons * scanProgress)

	// draw scanner
	fill(255, 250, 202, 80);
	noStroke();

	let xPos = 0;
	let scale = 10;
	let scannerNM = 1;
	let scannerWidth = scannerNM * scale; // 1nm

	if (mouseX > boxD.xRight + scannerWidth && mouseX < boxD.xRight + box.w) {
		xPos = mouseX - boxD.xRight - scannerWidth;
		lastPos = xPos;
		scannerNM += (mouseX - boxD.xRight) / (boxD.width / scale) - 1; // 1 = default scannerNM
	} else if (mouseX > boxD.xRight + box.w) {
		// if over right side of box, set nm = 10 (prevent fast mouse exit)
		lastPos = boxD.width - scannerWidth;
		scannerNM = scannerWidth;
	} else if (mouseX < boxD.xRight + scannerWidth) {
		// if over left side of box, set nm = 1 (prevent fast mouse exit)
		lastPos = scannerWidth;
		scannerNM = 1;
	}

	// only draw if electrons have been animated
	if (electronsTransferred > 1) {
		rect(box.scannerX, box.scannerY, lastPos + scannerWidth, box.h);

		beginShape();
		vertex(box.x, box.y); // bottom left
		vertex(box.x + scannerWidth + lastPos, box.y); // bottom right
		vertex(box.x + scannerWidth + 24 + lastPos, box.y + boxA); // top right
		vertex(box.x + boxD, box.y + boxA); // top left
		endShape(CLOSE);

		// text of numbers

		styleText();
		// text(`scanner nm: ${scannerNM.toFixed(2)}`, box.x + 30, box.y - 60)
		// text(
		//   `scanner negative charges: ${floor(scannerNM * 20)}`,
		//   box.x + 30,
		//   box.y - 40
		// )

		// text(
		//   `scanner positive charges: ${floor(scannerNM * 20)}`,
		//   box.x + 30,
		//   box.y - 20
		// )

		// text(`Scanner net charge: 0`, box.x + 30, box.y - 0)

		// + floor(Math.random() * 4 - 2)

		text(`Scanner nm: ${scannerNM.toFixed(2)}`, box.x + 30, box.y - 60);

		let numElectrons = (scannerNM * 10 ** 15).toExponential();

		let nr1 = numElectrons.substr(0, 4);
		let nr2 = numElectrons.substr(4, numElectrons.length);
		let finalNr = Number(nr1 + 0 + nr2).toExponential(2);

		text(`Electrons within scanner: ${finalNr}`, box.x + 30, box.y - 40);
	}
}

function styleText() {
	noStroke();
	fill("white");
	textSize(12);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

function drawGraph() {
	stroke(color.grey); // axis color
	strokeWeight(1);

	canvas.drawingContext.setLineDash([7, 3]);

	line(graphD.center, graphD.y - 76, graphD.center, graphD.y + 60); // vert

	// sceneCount == 8 ? (xAxisExtend = 20) : null
	line(graphD.x, graphD.y, graphD.end, graphD.y); // hor

	fill(color.grey);

	canvas.drawingContext.setLineDash([]);

	let size = 4.4;
	stroke(color.grey);

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

	// x axis arrow - left
	line(graphD.x, graphD.y, graphD.x + size, graphD.y + size);
	line(graphD.x, graphD.y, graphD.x + size, graphD.y - size);

	strokeWeight(2);
	stroke(color.purple);

	let eFieldHeight = 0;
	if (sceneAnimated) {
		eFieldHeight = numTransfer * 6;
	}

	let noHeights = [0, 0];
	let noHeightXPoints = [graphD.x, graphD.end];

	if (!showEF) {
		drawLines(noHeightXPoints, noHeights, color.purple);
	}

	purpleHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0];
	purpleXPoints = [
		graphD.x,
		graphD.center,
		graphD.center,
		graphD.center + 80,
		graphD.center + 80,
		graphD.end,
	];

	if (
		sceneCount == 6 ||
		sceneCount == 7 ||
		sceneCount == 8 ||
		sceneCount == 9
	) {
		purpleHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0];
		purpleXPoints = [
			graphD.x,
			graphD.center,
			graphD.center,
			graphD.center + 80,
			graphD.end,
		];
	}

	graphNorm = 1.4;
	// standardize the heights
	for (let i = 0; i < purpleHeights.length; i++) {
		purpleHeights[i] = purpleHeights[i] / graphNorm;
	}

	if (currButton && currButton.textContent == "Reset" && showEF) {
		drawLines(purpleXPoints, purpleHeights, color.purple);
		drawArrows();
	}
}

function drawLines(points, rawHeights, color) {
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
		let x1;
		let x2;
		let y;

		if (!reverse) {
			x1 = 268;
			x2 = 350;
			y = 112;
		} else if (reverse) {
			x1 = 262;
			x2 = 338;
			y = 112;
		}

		// draw 7 arrows
		for (let i = 0; i < 7; i++) {
			strokeCap(SQUARE);
			stroke(color.purple);
			let weight = numTransfer / 3;
			strokeWeight(weight);

			let triangleSize = 12;
			fill(color.purple);
			// draw line
			line(x1, y, x2 - triangleSize, y);
			if (
				sceneCount == 6 ||
				sceneCount == 7 ||
				sceneCount == 8 ||
				sceneCount == 9
			) {
				noStroke();
				// rect(boxD.xRight, y, 100, weight)
				beginShape();
				vertex(boxD.xRight - 4, y - 2); // left top
				vertex(boxD.xRight - 4, y - 2 + weight); // left bottom
				vertex(boxD.xRight + boxD.width, y - 2 + weight / 2); // right bottom
				vertex(boxD.xRight + boxD.width, y - 2 + weight / 2); // right top
				endShape(CLOSE);
			}
			noStroke();

			if (weight > 0) {
				if (!reverse) {
					triangle(
						x1 - 8,
						y,
						x1 + triangleSize - 8,
						y + triangleSize / 1.7,
						x1 + triangleSize - 8,
						y - triangleSize / 1.7
					);
				} else if (reverse) {
					triangle(
						x2,
						y,
						x2 - triangleSize,
						y - triangleSize / 1.7,
						x2 - triangleSize,
						y + triangleSize / 1.7
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
	background(18);
	noStroke();

	drawBox(currLeftBox);
	drawBox(currRightBox);

	drawCharges(currLeftBox);
	drawCharges(currRightBox);
	drawElectrons(currLeftBox);
	drawElectrons(currRightBox);
	drawElectrons(tempBox);

	drawBattery();

	if (sceneCount > 3) {
		drawGraph();
	}
}

function scene1() {
	currLeftBox = boxes.L1;
	currRightBox = boxes.R1;

	drawItems();
}

function scene2() {
	currLeftBox = boxes.L2;
	currRightBox = boxes.R2;
	drawItems();
}

function scene3() {
	currLeftBox = boxes.L3;
	currRightBox = boxes.R3;
	drawItems();
}

function scene4() {
	currLeftBox = boxes.L4;
	currRightBox = boxes.R4;
	drawItems();
}

function scene5() {
	currLeftBox = boxes.L5;
	currRightBox = boxes.R5;
	drawItems();
}

function scene6() {
	currLeftBox = boxes.L6;
	currRightBox = boxes.R6;
	drawItems();
}

function scene7() {
	currLeftBox = boxes.L7;
	currRightBox = boxes.R7;
	drawItems();
}

function scene8() {
	currLeftBox = boxes.L8;
	currRightBox = boxes.R8;
	drawItems();
}

function scene9() {
	currLeftBox = boxes.L9;
	currRightBox = boxes.R9;
	drawItems();
}

function scene10() {
	// reversePol = true;
	// background(18);
	// currLeftBox = boxes.L10;
	// currRightBox = boxes.R10;

	// drawScanner(boxes.L10);

	background(18);

	let surface1 = new Box(30, 200, 120, 300);
	let surface2 = new Box(120, 200, 120, 300);
	let surface3 = new Box(210, 200, 120, 300);

	drawMOS(surface1, "Metal", 30);
	drawMOS(surface2, "Oxide", 30);
	drawMOS(surface3, "Semiconductor", 10);
}

function scene11() {}
