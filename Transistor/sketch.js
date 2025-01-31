/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
------------------------------- */

// tools
function qs(selector) {
	return document.querySelector(selector);
}

function scene(num) {
	return sceneCount == num;
}

// Variables ============================================================
// P5 canvas
let context;

// factors for scaling drawing to fit various screen sizing
let scale_x = 1366;
let scale_y = 768;

let sx = 0;
let sy = 0;

// color variables for drawing
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	red2: [255, 40, 0],
	electron: [254, 246, 182],
	hole: [125, 241, 148],
	graph: [102, 194, 255],
	wires: [255, 255, 255],
	EFColor: [218, 112, 214], // electric field
	CDColor: [2, 104, 255], // charge density
	controls: [102, 194, 255],
	// electron: [255, 255, 0],
	// grey: [175, 175, 175],
	// pos: [125, 241, 148],
	// posbase: [65, 46, 46],
	// posbase: [65, 46, 46],
	// neg: [255, 247, 174],
	// negbase: [18, 66, 104],
	// sign: [31, 145, 54],
	// signbase: [50, 31, 31],
	// battery: [230, 226, 188],
	// net: [117, 190, 255],
	// neutral: [79, 79, 79],
	// scanner: [218, 107, 107],
};

// Charges + Electrons + Holes ============================================================
let fixedCharges = []; // fixed positive + negative charges
let electrons = [];
let holes = [];
// let initialHoles = []; // holes that exist when scene starts
// let initialElectrons = []; // electrons that exist when scene starts
// let generatedElectrons = []; // electrons that are generated
// let generatedHoles = []; // holes that are generated
let electronCount;
let holeCount;
let chargeID = 0;

// Transfer charges on wires ============================================================

let innerLoopElectrons = [];
let outerLoopElectrons = [];
let innerLoopOn = false; // toggles inner battery electron transfer
let outerLoopOn = false; // toggles outer battery electron transfer
let numInnerLoop = 30;
let numOuterLoop = 30;

// Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
// let recomEffects = []; // circle that appears around a recomd pair
let recomdElectrons = []; // electron that appears briefly at recombination location
let recomdHoles = []; // hole that appears briefly at recombination location
let recomPositions = []; //middle position store
// let recomCount = 0; //disappear numChargesber count
// let recomDistance = 10; // distance between electron and hole required to recom, smaller number decreases likelihood of recombination
let generationInterval;
let generationRate = 4000;
let recomRate = 4000;
let recomOn = true;
let recomDistance = 2; //distance for recom
let recomEffectsPositions = [];
let recomCount = 0;
let recomEffects = [];
let recomTempElectrons = [];
let recomTempHoles = [];

//
let botzDistribution = [];

// !!!
let willScatter; // is this needed?
let voltageDepletionWidth = 1; // need to change, from PN
let bandDiagramHeight = 1; // need to change, from PN

let currentGraph = "ef";

// images
let batteryPosOff;
let batteryNegOff;
let batteryPosOn;
let batteryNegOn;

// on / off
let innerBatteryOn;
let outerBatteryOn;

const unit = 8;

// base dimensions
const dim = {
	x: unit * 26,
	y: unit * 38,

	width: unit * 80,
	height: unit * 40,

	// metal + insulator
	metalWidth: unit * 40,
	metalHeight: unit * 5,

	// source + drain
	sourceWidth: unit * 20,
	sourceHeight: unit * 20,

	batteryHeight: 20,

	innerY: unit * 20, // inner wire
	outerY: unit * 14, // outer wire
};

const controls = {
	cd: { x: 80, y: 600 },
	ef: { x: 80, y: 640 },
	bd: { x: 80, y: 680 },
	width: 80,
};

// all sizing + measurements (dependent on base dimensions)
const base = {
	x: dim.x,
	y: dim.y,
	midX: dim.x + dim.width / 2,
	endX: dim.x + dim.width,
	endY: dim.y + dim.height,

	innerY: dim.innerY,
	outerY: dim.outerY,

	width: dim.width,
	height: dim.height,

	// gate metal + insulator
	metalX: dim.x + (dim.width - dim.metalWidth) / 2,

	metalWidth: dim.metalWidth,
	metalHeight: dim.metalHeight,
	bottomMetalHeight: 40,

	// source + drain
	sourceWidth: dim.sourceWidth,
	sourceHeight: dim.sourceWidth,
	depletionPadding: unit * 4,

	// rectangle corner radius
	smallRadius: unit,
	largeRadius: unit,

	drainX: dim.x + dim.width - dim.sourceWidth,
	drainEndX: dim.x + dim.width,
	drainEndY: dim.y + dim.sourceHeight,
	sourceEndX: dim.x + dim.sourceWidth,
	sourceEndY: dim.y + dim.sourceHeight,

	batteryWidth: 65,
	innerBatteryX: dim.x + dim.width / 2 - 32,
	innerBatteryY: dim.innerY - 16, // custom change
	outerBatteryX: dim.x + dim.width / 2 - 32,
	outerBatteryY: dim.outerY - 16, // custom change

	leftGroundX: dim.x + dim.sourceWidth / 2 - 40,
	insulatorLabelY: dim.y - (dim.metalHeight / 2) * 0.75,

	wirePos0: [dim.x + dim.sourceWidth / 2, dim.y - dim.metalHeight],
	wirePos1: [dim.x + dim.sourceWidth / 2, dim.innerY],
	wirePos2: [dim.x + 420, dim.innerY],
	wirePos3: [dim.x + 420, dim.y - dim.metalHeight * 2],

	wirePos4: [dim.x + 420, dim.y - dim.metalHeight - 12],
	wirePos5: [dim.x + dim.sourceWidth + 16, dim.y - dim.metalHeight],

	wirePos6: [dim.x + dim.sourceWidth / 2, dim.outerY],
	wirePos7: [dim.x + dim.width - dim.sourceWidth / 2, dim.outerY],
	wirePos8: [dim.x + dim.width - dim.sourceWidth / 2, dim.y - dim.metalHeight],

	efXMin: dim.x + 150.4,
	efXMax: dim.x + 203,

	efYMin: dim.y + 150.4,
	efYMax: dim.y + 203,

	// ef:
	// - starts at .94 width (within source / drain)
	// - peaks at 1.0 width (edge of source / drain)
	// - stops at 1.3 width (outside source / drain)

	// drain math is inversed using above numbers

	ef: {
		source: {
			xMin: dim.x + 0.94 * dim.sourceWidth,
			xMax: dim.x + 1.3 * dim.sourceWidth,
			yMin: dim.y + 0.94 * dim.sourceWidth,
			yMax: dim.y + 1.3 * dim.sourceWidth,
		},
		drain: {
			xMin: dim.x + dim.width - dim.sourceWidth - 0.3 * dim.sourceWidth, // drainX - .3*drain width
			xMax: dim.x + dim.width - dim.sourceWidth + 0.06 * dim.sourceWidth, // drainX + .06*drain width
			yMin: dim.y + 0.94 * dim.sourceWidth, // same as source
			yMax: dim.y + 1.3 * dim.sourceWidth, // same as source
		},
	},
};

// ef: {
// 		source: {
// 			xMin: dim.x + 150.4,
// 			xMax: dim.x + 203,
// 			yMin: dim.y + 150.4,
// 			yMax: dim.y + 203,
// 		},
// 		drain: {
// 			xMin: dim.x + 150.4,
// 			xMax: dim.x + 203,
// 			yMin: dim.y + 150.4,
// 			yMax: dim.y + 203,
// 		},
// 	},

// Tools ============================================================
function qs(selector) {
	return document.querySelector(selector);
}

function scene(numCharges) {
	return sceneCount == numCharges;
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

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

// Initial Function Calls ============================================================

// Updating Functions ============================================================

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas(windowWidth / 2 + 200, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();

	// reset all variables
	resetScene();

	regenerate();

	batteryPosOff = loadImage("batteryPosOff.png");
	batteryNegOff = loadImage("batteryNegOff.png");
	batteryPosOn = loadImage("batteryPosOn.png");
	batteryNegOn = loadImage("batteryNegOn.png");
	groundImg = loadImage("ground.png");
	leftGroundImg = loadImage("leftGround.png");
}

function scaleToWindow() {
	if (windowWidth > 1600) {
		sx = (windowWidth * 0.85) / scale_x;
		sy = (windowHeight * 0.85) / scale_y;
	} else {
		sx = (windowWidth * 0.95) / scale_x;
		sy = (windowHeight * 0.95) / scale_y;
	}
}

function draw() {
	scaleToWindow();

	scale(sx);
	background(...color.bg);

	if (sceneCount > 0) {
		drawBase();
		updateCharges();
		drawWires();
		drawGraph();
		drawBandDiagram();
		updateWireElectrons();
		// drawControls();
	}

	// y - source
	rect(
		base.x,
		base.ef.source.yMin,
		base.width,
		base.efYMax - base.ef.source.yMin
	);

	rect(
		base.ef.drain.xMin,
		base.y,
		base.ef.drain.xMax - base.ef.drain.xMin,
		204
	);

	// x
	rect(base.ef.source.xMin, base.y, base.efXMax - base.ef.source.xMin, 204);
}

function resetScene() {
	background(...color.bg);
	fixedCharges = [];
	initCharges();
	initWireElectrons();

	// holes = [];
	// electrons = [];
	// chargeID = 0;

	// innerLoopElectrons = [];
	// outerLoopElectrons = [];
	// innerLoopOn = false;
	// outerLoopOn = false;
	// numInnerLoop = 30;
	// numOuterLoop = 30;

	// generationEffects = [];

	// recomdElectrons = [];
	// recomdHoles = [];
	// recomPositions = [];

	// recomEffectsPositions = [];
	// recomCount = 0;
	// recomEffects = [];
	// recomTempElectrons = [];
	// recomTempHoles = [];
}

// Updating Functions ============================================================
function initWireElectrons() {
	for (let i = 0; i < numOuterLoop; i++) {
		let x = base.wirePos0[0];
		let y = base.wirePos0[1];
		outerLoopElectrons.push(new wireCharge(x, y, 1));
	}

	for (let i = 0; i < numInnerLoop; i++) {
		let x = base.wirePos0[0];
		let y = base.wirePos0[1];
		innerLoopElectrons.push(new wireCharge(x, y, 0));
	}
}

function initCharges() {
	let fixedPosChargesLeft = 15;
	let fixedPosChargesRight = 15;
	let fixedNegCharges = 40;

	holeCount = 40;
	electronCount = 20; // source and drain each

	let buffer = 12; // draw inside box borders
	// let electronCount =
	// 	Math.pow(100, (Math.log10(Math.round(addedDopants / 5)) - 8) / 2) / 1000;

	// source fixed positive charges
	for (let i = 0; i < fixedPosChargesLeft; i++) {
		let x = random(base.x + buffer, base.sourceEndX - buffer);
		let y = random(base.y + buffer, base.sourceEndY - buffer);
		fixedCharges.push(new Charge(x, y, "fp", chargeID));
	}

	// drain fixed positive charges
	for (let i = 0; i < fixedPosChargesRight; i++) {
		let x = random(base.drainX + buffer, base.drainEndX - buffer);
		let y = random(base.y + buffer, base.drainEndY - buffer);
		fixedCharges.push(new Charge(x, y, "fp", chargeID));
	}

	for (let i = 0; i < fixedNegCharges; i++) {
		let x = 0;
		let y = 0;

		// regenerate position if in source OR drain
		while (
			(x < base.sourceEndX + buffer && y < base.sourceEndY) ||
			(x > base.drainX - buffer && y < base.sourceEndY)
		) {
			x = random(base.x + buffer, base.endX);
			y = random(base.y + buffer, base.y + base.height);
		}

		fixedCharges.push(new Charge(x, y, "fn", chargeID));
	}

	random_botz = botzDistribution;

	// initiate substrate holes
	for (let i = 0; i < holeCount; i++) {
		// regenerate position if in source OR drain
		let x = 0;
		let y = 0;
		while (
			(x < base.sourceEndX + buffer && y < base.sourceEndY) ||
			(x > base.drainX - buffer && y < base.sourceEndY)
		) {
			x = random(base.x + buffer, base.endX);
			y = random(base.y + buffer, base.y + base.height);
		}

		let newCharge = new Charge(x, y, "h", chargeID, "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		holes.push(newCharge);
		chargeID++;
	}

	for (let i = 0; i < electronCount; i++) {
		// initiate source electrons
		let x = random(base.x + buffer, base.x + base.sourceWidth - buffer);
		// let b = random(30*sy,730*sy);
		let y = random(base.y + buffer, base.y + base.sourceHeight - buffer);

		let newCharge = new Charge(x, y, "e", chargeID, "i");

		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);
		chargeID++;

		// initiate drain electrons
		x = random(
			base.x + base.width - base.sourceWidth + buffer,
			base.x + base.width - buffer
		);
		// let b = random(30*sy,730*sy);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, "e", chargeID, "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);
		chargeID++;
	}
}

function toggleRecombine() {
	if (recomOn) {
		recomOn = false;
	} else {
		recomOn = true;
	}
}

function regenerate() {
	// // Regenerate pairs at time intervals
	// setInterval(time_graph, 0.00000000002);
	// // allow for recom during interval
	// setInterval(toggleRecombine, 2000);

	// generate balls based on frequency
	generationInterval = setInterval(function () {
		generateCharges(1);
	}, generationRate); // scene changing T

	setInterval(toggleRecombine, recomRate);

	// run_outer = setInterval(function () {
	// 	generateCharges_outer(1);
	// }, 1000 / generateScene3); // scene changing T

	// count_pn = setInterval(function () {
	// 	count_pn_f();
	// }, interval_pn);

	// scatteringInterval = setInterval(function () {
	// 	scattering();
	// }, 50); // scattring time
}

//generate electron hole pairs based on frequency
function generateCharges(numCharges) {
	// reset interval
	clearInterval(generationInterval);
	generationRate = 4000;

	// set next interval
	generationInterval = setInterval(function () {
		generateCharges(1);
	}, generationRate);

	// if (scene(1) || scene(2) || scene(3)) {
	// if (electronCount > 0) {
	// 	generatedElectrons = [];
	// 	generatedHoles = [];
	// 	recombinationRate = 0;
	// } else if (electronCount == 0) {
	for (let i = 0; i < numCharges; i++) {
		let x = random(base.x, base.endX);
		let y = random(base.y, base.endY);

		generationEffects.push(new Charge(x, y, "ge", chargeID));
		//let xx = findClosestValue(electronLine, a);
		// let xx = findClosestValue(electronBand, a);

		let newElectron = new Charge(x, y, "e", chargeID, "g");
		// aa.origin.x = xx;
		// aa.top = 1;
		electrons.push(newElectron);

		// let yy = findClosestValue(holeBand, a);

		let newHole = new Charge(x, y, "h", chargeID, "g");
		// bb.origin.y = yy;
		// bb.top = 1;
		holes.push(newHole);

		chargeID += 1;
	}
	// }
	// }
}

function findClosestValue(array, targetX) {
	// Initialize closest diff with a very large value
	let closestDiff = 1000;
	// Initialize closestBValue as undefined
	let closestBValue;

	for (let i = 0; i < array.length; i++) {
		// Calculate absolute difference between targetX and current x value
		let diff = Math.abs(targetX - array[i][0]);
		// If this difference is less than closest diff found so far
		if (diff < closestDiff) {
			// Update closest diff and closestBValue
			closestDiff = diff;
			closestBValue = array[i][1]; // Assuming 'b' is represented as second element in sub-array
		}
	}

	// Return the 'b' value of the element with the x value closest to targetX
	return closestBValue;
}

function updateBotz() {
	const norm_vel = [
		{ nv: 0.1, quantity: 3 },
		{ nv: 0.2, quantity: 10 },
		{ nv: 0.3, quantity: 21 },
		{ nv: 0.4, quantity: 35 },
		{ nv: 0.5, quantity: 49 },
		{ nv: 0.6, quantity: 63 },
		{ nv: 0.7, quantity: 74 },
		{ nv: 0.8, quantity: 82 },
		{ nv: 0.9, quantity: 86 },
		{ nv: 1.0, quantity: 86 },
		{ nv: 1.1, quantity: 83 },
		{ nv: 1.2, quantity: 77 },
		{ nv: 1.3, quantity: 69 },
		{ nv: 1.4, quantity: 59 },
		{ nv: 1.5, quantity: 50 },
		{ nv: 1.6, quantity: 40 },
		{ nv: 1.7, quantity: 32 },
		{ nv: 1.8, quantity: 24 },
		{ nv: 1.9, quantity: 18 },
		{ nv: 3.0, quantity: 13 },
		{ nv: 2.1, quantity: 9 },
		{ nv: 2.2, quantity: 6 },
		{ nv: 2.3, quantity: 4 },
		{ nv: 3.5, quantity: 3 },
		{ nv: 3, quantity: 2 },
		{ nv: 3, quantity: 1 },
		{ nv: 3, quantity: 1 },
	];

	for (let i = 0; i < norm_vel.length; i++) {
		let count = 0;
		while (count < norm_vel[i].quantity) {
			botzDistribution.push(3 * norm_vel[i].nv);
			count++;
		}
	}
}

function recom(electrons, holes) {
	for (let i = 0; i < electrons.length; i++) {
		for (let k = 0; k < holes.length; k++) {
			if (
				abs(electrons[i].position.x - holes[k].position.x) < recomDistance &&
				abs(electrons[i].position.y - holes[k].position.y) < recomDistance &&
				electrons[i].id != holes[k].id &&
				electrons[i].show &&
				holes[k].show
			) {
				electrons[i].stop();
				holes[k].stop();
				electrons[i].hide();
				holes[k].hide();
				// electrons[i].deactivate();
				// holes[k].deactivate();

				recomEffectsPositions[recomCount] = p5.Vector.div(
					p5.Vector.add(holes[k].position, electrons[i].position),
					2
				);

				//effects

				recomEffects[recomCount] = new Charge(
					recomEffectsPositions[recomCount].x,
					recomEffectsPositions[recomCount].y,
					"re",
					recomCount
				);
				recomTempElectrons[recomCount] = new Charge(
					electrons[i].position.x,
					electrons[i].position.y,
					"te",
					recomCount
				);
				recomTempHoles[recomCount] = new Charge(
					holes[k].position.x,
					holes[k].position.y,
					"th",
					recomCount
				);

				recomCount++;

				let b = electrons[i].position.y;

				electrons.splice(i, 1);
				holes.splice(k, 1);

				break;
			}
		}
	}
}

function checkDest(electron, dest) {
	let buffer = 8;
	xCondition =
		electron.position.x < dest.x + buffer &&
		electron.position.x > dest.x - buffer;
	yCondition =
		electron.position.y < dest.y + buffer &&
		electron.position.y > dest.y - buffer;

	if (xCondition && yCondition) {
		return true;
	} else {
		return false;
	}
}

function updateOuterLoop() {
	let stopPositions = [];
	stopPositions.push(createVector(base.wirePos6[0], base.wirePos6[1]));
	stopPositions.push(createVector(base.wirePos7[0], base.wirePos7[1]));
	stopPositions.push(createVector(base.wirePos8[0], base.wirePos8[1]));
	let stops = [1, 2, 3]; // based on stopPositions

	for (let i = 0; i < outerLoopElectrons.length; i++) {
		let electron = outerLoopElectrons[i];
		electron.display();

		let atDest1 = checkDest(electron, stopPositions[0], false);
		let atDest2 = checkDest(electron, stopPositions[1], false);
		let atDest3 = checkDest(electron, stopPositions[2], false);

		if (atDest1) {
			if (!electron.passedDest.includes(stops[0])) {
				electron.updatePassed(stops[0]);
			}
		}
		if (atDest2) {
			if (!electron.passedDest.includes(stops[1])) {
				electron.updatePassed(stops[1]);
			}
		}
		if (atDest3) {
			if (!electron.passedDest.includes(stops[2])) {
				electron.updatePassed(stops[2]);
			}
		}

		if (!electron.passedDest.includes(stops[0])) {
			electron.move(stopPositions[0]);
		}
		if (
			electron.passedDest.includes(stops[0]) &&
			!electron.passedDest.includes(stops[1])
		) {
			electron.move(stopPositions[1]);
		}
		if (
			electron.passedDest.includes(stops[1]) &&
			!electron.passedDest.includes(stops[2])
		) {
			electron.move(stopPositions[2]);
		}
		if (electron.passedDest.includes(stops[2])) {
			electron.clearPassed();
			electron.position = createVector(base.wirePos0[0], base.wirePos0[1]);
		}
	}
}

function updateInnerLoop() {
	let stopPositions = [];
	stopPositions.push(createVector(...base.wirePos1));
	stopPositions.push(createVector(...base.wirePos2));
	stopPositions.push(createVector(...base.wirePos4));

	let stops = [1, 2, 3]; // based on stopPositions

	for (let i = 0; i < innerLoopElectrons.length; i++) {
		let electron = innerLoopElectrons[i];
		electron.display();

		let atDest1 = checkDest(electron, stopPositions[0], false);
		let atDest2 = checkDest(electron, stopPositions[1], false);
		let atDest3 = checkDest(electron, stopPositions[2], false);

		if (atDest1) {
			if (!electron.passedDest.includes(stops[0])) {
				electron.updatePassed(stops[0]);
			}
		}
		if (atDest2) {
			if (!electron.passedDest.includes(stops[1])) {
				electron.updatePassed(stops[1]);
			}
		}
		if (atDest3) {
			if (!electron.passedDest.includes(stops[2])) {
				electron.updatePassed(stops[2]);
			}
		}

		if (!electron.passedDest.includes(stops[0])) {
			electron.move(stopPositions[0]);
		}
		if (
			electron.passedDest.includes(stops[0]) &&
			!electron.passedDest.includes(stops[1])
		) {
			electron.move(stopPositions[1]);
		}
		if (
			electron.passedDest.includes(stops[1]) &&
			!electron.passedDest.includes(stops[2])
		) {
			electron.move(stopPositions[2]);
		}
		if (electron.passedDest.includes(stops[2])) {
			// electron.move(
			// 	createVector(base.wirePos5[0] + electron.gateStop, base.wirePos5[1])
			// );
			// if (electron.position.x > base.wirePos5[0] + electron.gateStop) {
			// 	electron.position.x -= 8;
			// }
			electron.update();
		}
	}
}

function toggleOuterBattery() {
	outerLoopOn = !outerLoopOn;
}
function toggleInnerBattery() {
	innerLoopOn = true;
}
function updateInnerBatteryCharge(numCharges) {
	numInnerLoop = numCharges;

	innerLoopElectrons = [];
	for (let i = 0; i < numInnerLoop; i++) {
		let x = base.wirePos0[0];
		let y = base.wirePos0[1];
		innerLoopElectrons.push(new wireCharge(x, y, 0));
	}
	console.log(innerLoopElectrons);
}
function updateWireElectrons() {
	if (outerLoopOn) {
		updateOuterLoop();
	}
	if (innerLoopOn) {
		updateInnerLoop();
	}
}

function updateCharges() {
	// recom holes and electrons
	// recomArrays(holes, electrons);

	// display charges
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		// fixedCharges[i].update();
	}

	for (let i = 0; i < electrons.length; i++) {
		electrons[i].display();
		electrons[i].update();

		if (electrons[i].appear > 255) {
			// electrons[i].straight_walk();
			// if (electrons[i].position.y > 49 * sy) {
			electrons[i].move();
			// }
		}
	}

	for (let i = 0; i < holes.length; i++) {
		holes[i].display();
		holes[i].update();

		if (holes[i].appear > 255) {
			// holes[i].straight_walk();
			// if (holes[i].position.y > 49 * sy) {
			holes[i].move();
			// }
		}
	}

	// Show appear effect when electron is generated
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].display();
		generationEffects[i].update();
	}

	// show recom effect
	for (let i = 0; i < recomEffects.length; i++) {
		recomEffects[i].display();
		recomEffects[i].update();
	}

	// get rid of generation effect circle when it reaches 0 opacity
	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].opacity < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// get rid of recom effect circle when it reaches 0 opacity
	// for (let i = 0; i < recomEffects.length; i++) {
	// 	if (recomEffects[i].opacity < 1) {
	// 		recomEffects.splice(i, 1);
	// 	}
	// }

	// check for recombination
	if (recomOn) {
		recom(electrons, holes);
	}

	// update effects
	// (recombination visual effect, electron fading )
	for (let i = 0; i < recomTempElectrons.length; i++) {
		if (typeof recomTempElectrons[i] != "undefined") {
			recomTempElectrons[i].display();
			recomTempElectrons[i].update();
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < recomTempHoles.length; i++) {
		if (typeof recomTempHoles[i] != "undefined") {
			recomTempHoles[i].display();
			recomTempHoles[i].update();
		}
	}

	// for (let i = 0; i < recomTempHoles.length; i++) {
	// 	if (typeof recomTempHoles[i] != "undefined") {
	// 		for (let k = 0; k < recomTempElectrons.length; k++) {
	// 			if (typeof recomTempElectrons[k] != "undefined") {
	// 				if (
	// 					recomTempHoles[i].chargeType == recomTempElectrons[k].chargeType
	// 				) {
	// 					recomTempElectrons[k].seek(
	// 						p5.Vector.div(
	// 							p5.Vector.add(
	// 								recomTempElectrons[k].position,
	// 								recomTempHoles[i].position
	// 							),
	// 							2
	// 						)
	// 					);
	// 					recomTempHoles[i].seek(
	// 						p5.Vector.div(
	// 							p5.Vector.add(
	// 								recomTempElectrons[k].position,
	// 								recomTempHoles[i].position
	// 							),
	// 							2
	// 						)
	// 					);
	// 				}
	// 			}
	// 		}
	// 	}
	// }
}

function recomArrays(array1, array2, num) {
	let recomProb = 0.5;

	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			// check if electron and hole are close and they are show, not same ID
			let condition =
				abs(array1[i].position.x - array2[k].position.x) < recomDistance &&
				abs(array1[i].position.y - array2[k].position.y) < recomDistance &&
				array1[i].show == 1 &&
				array2[k].show == 1 &&
				random() < recomProb;

			// if (scene(2) || scene(3)) {
			// 	condition = condition && array1[i].within == 0;
			// }

			// if (num == 3 || num == 4) {
			// 	condition = condition && array1[i].position.x > 190 * sx;
			// }

			if (condition) {
				// stop the electron & hole
				array1[i].stop();
				array2[k].stop();

				// set to no show
				array1[i].hide();
				array2[k].hide();

				// label for removal
				// if (num == 3 && num == 4) {
				// 	array1[i].deadd();
				// 	array2[k].deadd();
				// }
				// generationEffects.push(new Charge(x, y, "ge", chargeID));

				recomPositions[recomCount] = p5.Vector.div(
					p5.Vector.add(array2[k].position, array1[i].position),
					2
				);

				//effects

				recomEffects[recomCount] = new Charge(
					recomPositions[recomCount].x,
					recomPositions[recomCount].y,
					"re",
					chargeID
				);
				recomdElectrons[recomCount] = new Charge(
					array1[i].position.x,
					array1[i].position.y,
					"re",
					chargeID
				);
				recomdHoles[recomCount] = new Charge(
					array2[k].position.x,
					array2[k].position.y,
					"re",
					chargeID
				);

				recomCount++;

				// if (
				// 	initialElectrons.length + generatedElectrons.length <
				// 	e_count_limit * 1.1
				// ) {
				// 	let b = array1[i].position.y;

				// 	var newCharge = new Charge(150 * sx, b, 10, "h", 1);
				// 	newCharge.botz = array2[k].botz;
				// 	newCharge.direction = createVector(1, random(-1, 1));
				// 	newCharge.movingVelocity = this.movingVelocity;
				// 	newCharge.velocity = createVector(10, 0);
				// 	array2.push(newCharge);

				// 	chargeID += 1;

				// 	var newCharge2 = new Charge(950 * sx, b, 10, "e", 0);
				// 	newCharge2.botz = array1[i].botz;
				// 	newCharge2.direction = createVector(-1, random(-1, 1));
				// 	newCharge2.movingVelocity = this.movingVelocity;
				// 	newCharge2.velocity = createVector(-10, 0);

				// 	array1.push(newCharge2);

				// 	// array1.push(new Charge((930)*sx, b, 10, "e", 0));
				// 	chargeID += 1;

				// 	array1.splice(i, 1);
				// 	array2.splice(k, 1);
				// }

				break;
			}
		}
	}
}

function scattering() {
	//timebetween scatter
	if (scatteringCount_c > 2) {
		//time when straight line no scatter

		willScatter = false;
	} else if (scatteringCount_c <= 2) {
		//time to scatter 2s
		willScatter = true;
	}

	/////////Note from Azad
	///We need to add the code that once scatteringCount == 0 randomizes the velocity for all electreons and holes from scattering() in MOSCAP here. I have copied the code here in comments
	//// Christina had intial and generated electrons and holes in different arrays
	//// movingVelocity is the speed without direction (just a number)
	//// direction is a vector that shows the relative values of the speeds in the x and y direction. For example, (1,1) means velocity in 45 degree angle. Although I just notice that we need to normalize this vector so that it does not affect the speed.
	//////////////
	// function moveCharges(chargeArray, band) {
	// 	for (let i = 0; i < chargeArray.length; i++) {
	// 		chargeArray[i].botz =
	// 			getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
	// 		let closestToBand = findClosestValue(band, chargeArray[i].position.x);
	// 		chargeArray[i].bandOrigin.y = closestToBand;
	// 		chargeArray[i].movingVelocity = chargeArray[i].botz;
	// 		chargeArray[i].direction = createVector(random(-1, 1), random(-1, 1));
	// 		chargeArray[i].velocity = p5.Vector.mult(
	// 			chargeArray[i].direction,
	// 			chargeArray[i].movingVelocity
	// 		);
	// 	}
	// }

	// if (scatteringCount == 0) {
	// 	moveCharges(initElectrons, electronBand);
	// 	moveCharges(genElectrons, electronBand);
	// 	moveCharges(initHoles, holeBand);
	// 	moveCharges(genHoles, holeBand);
	// 	scatteringCount = parseInt(scatteringCountInput) + 2;
	// }

	///////////////

	scatteringCount_c -= 1;

	if (scatteringCount_c == 0) {
		scatteringCount_c = parseInt(scatteringCount) + 2;
	}
}

// Drawing Functions ============================================================
function drawSourceBaseDepletionRegion() {
	strokeWeight(1.2);
	stroke(...color.red2, 210);
	fill(...color.red2, 20);
	canvas.drawingContext.setLineDash([7, 3]);
	// source depletion region
	rect(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y,
		base.sourceWidth + base.depletionPadding,
		base.sourceHeight + base.depletionPadding,
		base.smallRadius
	);
	// drain depletion region
	rect(
		base.x,
		base.y,
		base.sourceWidth + base.depletionPadding,
		base.sourceHeight + base.depletionPadding,
		base.smallRadius
	);
}

function drawFullDepletionRegion() {
	// source + drain + channel depletion region
	strokeWeight(1.2);
	stroke(...color.red2, 210);
	fill(...color.red2, 20);
	canvas.drawingContext.setLineDash([7, 3]);
	beginShape();
	vertex(base.x, base.y);
	vertex(base.x + base.width, base.y);
	vertex(
		base.x + base.width,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y + base.depletionPadding
	);
	vertex(
		base.x + base.sourceWidth + base.depletionPadding,
		base.y + base.depletionPadding
	);
	vertex(
		base.x + base.sourceWidth + base.depletionPadding,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(base.x, base.y + base.sourceHeight + base.depletionPadding);

	endShape(CLOSE);
}

function drawChannel() {
	// source + drain + channel depletion region
	strokeWeight(1.2);
	stroke(...color.yellow, 210);
	fill(...color.yellow, 20);
	canvas.drawingContext.setLineDash([7, 3]);

	rect(base.x, base.y, base.width, base.depletionPadding, base.smallRadius);
}

function drawBase() {
	// style depletion regions

	// drawSourceBaseDepletionRegion();
	drawFullDepletionRegion();
	// drawChannel();

	// style bases
	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1.2);
	canvas.drawingContext.setLineDash([]);

	// source
	rect(base.x, base.y, base.sourceWidth, base.sourceHeight, base.smallRadius);

	// drain
	rect(
		base.x + base.width - base.sourceWidth,
		base.y,
		base.sourceWidth,
		base.sourceHeight,
		base.smallRadius
	);

	// insulator
	rect(
		base.metalX,
		base.y - base.metalHeight,
		base.metalWidth,
		base.metalHeight,
		base.smallRadius
	);

	// gate metal
	rect(
		base.metalX,
		base.y - base.metalHeight * 2,
		base.metalWidth,
		base.metalHeight,
		base.smallRadius
	);

	// metal above source
	rect(
		base.x,
		base.y - base.metalHeight,
		base.sourceWidth,
		base.metalHeight,
		base.smallRadius
	);

	// metal above drain
	rect(
		base.drainX,
		base.y - base.metalHeight,
		base.sourceWidth,
		base.metalHeight,
		base.smallRadius
	);

	noFill();

	// substrate
	rect(base.x, base.y, base.width, base.height, base.largeRadius);

	// bottom metal
	// substrate
	noFill();
	rect(
		base.x,
		base.y + base.height,
		base.width,
		base.bottomMetalHeight,
		base.largeRadius
	);

	// bottom ground
	image(
		groundImg,
		base.midX - 16,
		base.endY + base.bottomMetalHeight,
		groundImg.width * 0.4,
		groundImg.height * 0.4
	);

	// left ground
	image(
		leftGroundImg,
		base.leftGroundX + 8,
		base.innerY - 16,
		leftGroundImg.width * 0.8,
		leftGroundImg.height * 0.8
	);

	// labels
	styleText();
	textAlign(CENTER);
	text("Substrate", base.x + base.width / 2, base.y + base.height / 2);
	text("Source", base.x + base.sourceWidth / 2, base.y + base.sourceHeight / 2);

	// source metal
	text("Metal", base.x + base.sourceWidth / 2, base.insulatorLabelY);

	// drain metal
	text("Metal", base.drainX + base.sourceWidth / 2, base.insulatorLabelY);
	// drain
	text(
		"Drain",
		base.drainX + base.sourceWidth / 2,
		base.y + base.sourceHeight / 2
	);

	text("Metal", base.x + base.width / 2, base.y - base.metalHeight * 1.35);

	text("Insulator", base.x + base.width / 2, base.insulatorLabelY);

	// bottom metal
	text(
		"Metal",
		base.x + base.width / 2,
		base.y + base.height + base.bottomMetalHeight / 2 + 8
	);
}

function drawWires() {
	if (innerBatteryOn) {
		// inner battery on
		image(
			batteryNegOn,
			base.innerBatteryX,
			base.innerBatteryY,
			batteryNegOn.width / 1.5,
			batteryNegOn.height / 1.5
		);
	} else {
		// inner battery off
		image(
			batteryNegOff,
			base.innerBatteryX,
			base.innerBatteryY,
			batteryNegOff.width / 1.5,
			batteryNegOff.height / 1.5
		);
	}

	// outer battery
	if (outerBatteryOn) {
		// outer battery on
		image(
			batteryNegOn,
			base.outerBatteryX,
			base.outerBatteryY,
			batteryNegOn.width / 1.5,
			batteryNegOn.height / 1.5
		);
	} else {
		// outer battery off
		image(
			batteryNegOff,
			base.outerBatteryX,
			base.outerBatteryY,
			batteryNegOff.width / 1.5,
			batteryNegOff.height / 1.5
		);
	}

	stroke(...color.wires);
	noFill();
	// wires
	let wireOffsetX = 20;

	let wireGap = 8; // * 2 = 16
	// wire from source metal to inner battery
	beginShape();
	vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
	vertex(base.x + base.sourceWidth / 2, base.innerY); // top left corner
	vertex(base.innerBatteryX, base.innerY);
	endShape(); // battery

	// wire from inner battery to gate metal
	beginShape();
	vertex(base.innerBatteryX + base.batteryWidth, base.innerY);
	vertex(base.wirePos2[0], base.innerY);
	vertex(base.wirePos2[0], base.y - base.metalHeight * 2);
	endShape(); // battery

	// wire from source to outer battery
	beginShape();
	vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
	vertex(base.x + base.sourceWidth / 2, base.outerY); // top left corner
	vertex(base.outerBatteryX, base.outerY);
	endShape(); // outer battery

	// wire from outer battery to drain metal
	beginShape();
	vertex(base.outerBatteryX + base.batteryWidth, base.outerY); // outer battery
	vertex(base.endX - base.sourceWidth / 2, base.outerY); // corner
	vertex(base.endX - base.sourceWidth / 2, base.y - base.metalHeight); // drain metal
	endShape(); // battery
}

// switch graph
function mouseClicked() {
	// monitor cd: 96, 717
	// laptop cd: 83, 617

	// check cd button
	if (
		mouseX / sx > controls.cd.x &&
		mouseX / sx < controls.cd.x + controls.width &&
		mouseY / sy > controls.cd.y &&
		mouseY / sy < controls.cd.y + 40
	) {
		currentGraph = "CD";
	}
	// check ef button
	else if (
		mouseX / sx > controls.ef.x &&
		mouseX / sx < controls.ef.x + controls.width &&
		mouseY / sy > controls.ef.y &&
		mouseY / sy < controls.ef.y + 40
	) {
		currentGraph = "EF";
	}

	// check bd button
	else if (
		mouseX / sx > controls.bd.x &&
		mouseX / sx < controls.bd.x + controls.width &&
		mouseY / sy > controls.bd.y &&
		mouseY / sy < controls.bd.y + 40
	) {
		currentGraph = "BD";
	}
	// let xCondition = 270 * sx - mouseX; // left border of right button
	// let yCondition = abs(205 * sy - mouseY); // top border of right button
	// if (xCondition < 100 * sx && xCondition < 0 && yCondition < 16 * sy) {
	// 	switchGraph = true; // show charge density graph
	// } else if (abs(164 * sx - mouseX) < 100 * sx && yCondition < 16 * sy) {
	// 	switchGraph = false; // show electric field graph
	// }
}

function toggleBattery(value) {
	if (value == "ib") {
		innerBatteryOn = !innerBatteryOn;
	} else if (value == "ob") {
		outerBatteryOn = !outerBatteryOn;
	}
}

function triggerControls(value) {
	currentGraph = value;
}

function drawControls() {
	stroke(...color.controls);
	noFill();

	function cdInactiveButton() {
		// charge density outline when not active
		// x, y, w, h, r, r
		rect(controls.cd.x, controls.cd.y, controls.width, 24, 5, 5);
	}

	function efInactiveButton() {
		// electric field outline
		rect(controls.ef.x, controls.ef.y, controls.width, 24, 5, 5);
	}

	function bdInactiveButton() {
		// electric field outline
		rect(controls.bd.x, controls.bd.y, controls.width, 24, 5, 5);
	}

	if (currentGraph == "ef") {
		cdInactiveButton();
		bdInactiveButton();
		// electric field active button
		stroke(...color.EFColor);
		fill(...color.EFColor, 80);
		rect(controls.ef.x, controls.ef.y, controls.width, 24, 5, 5);
	} else if (currentGraph == "cd") {
		bdInactiveButton();
		efInactiveButton();
		// charge density active button
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(controls.cd.x, controls.cd.y, controls.width, 24, 5, 5);
	} else if (currentGraph == "bd") {
		efInactiveButton();
		cdInactiveButton();
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(controls.bd.x, controls.bd.y, controls.width, 24, 5, 5);
	}

	noFill();
	stroke(...color.white);
	text("Band Diagram", controls.bd.x + 40, controls.bd.y + 16);
	text("Charge Density", controls.cd.x + 40, controls.cd.y + 16);
	text("Electric Field", controls.ef.x + 40, controls.ef.y + 16);
}

function drawBandDiagram() {
	if (currentGraph == "bd") {
		stroke(...color.electron);
		line(60, 30, 60, 600);

		stroke(...color.hole);
		line(120, 30, 120, 600);
	}
}

function drawGraph() {
	if (currentGraph == "cd" || currentGraph == "ef") {
		drawAxes();
		drawLineOver();
	}
	function drawLineOver() {
		noFill();
		stroke(...color.graph, 180);
		strokeWeight(1);
		// graph y axis
		if (mouseX > base.x)
			line(mouseX / sx, base.y - 200, mouseX / sx, base.endY);
	}
	function drawAxes() {
		noFill();
		stroke(...color.graph, 180);
		strokeWeight(1);

		let offset = unit * 16;

		// graph x axis
		line(
			base.x - offset - 56,
			base.y - base.metalHeight,
			base.metalX,
			base.y - base.metalHeight
		);
		// graph y axis
		line(base.x - offset, base.y - 200, base.x - offset, base.endY);

		if (currentGraph == "ef") {
			// Electric Field
			let numXAxisTicks = 10;
			// graph +x axis ticks
			for (let i = 0; i < numXAxisTicks; i++) {
				let x = (base.x - offset) * i;
				let y = base.y - base.metalHeight;
				line(x, y, x, y - 5); // Draw the line
			}

			let numYAxisTicks = 25;
			// graph -y axis ticks
			for (let i = 0; i < numYAxisTicks; i++) {
				let x = base.x - offset;
				let y = (base.y - 200) * i + 32;
				line(x, y, x + 5, y); // Draw the line
			}

			noStroke();
			fill(...color.graph);
			textSize(10);

			text("800 V/cm", base.x - offset + 32, 80);
			text("–800 V/cm", base.x - offset + 32, 300);

			text("5 \u00B5m", base.x - offset + 160, base.y - base.metalHeight - 16);
		} else if (currentGraph == "cd") {
			// Charge Density
			let numXAxisTicks = 10;
			// graph +x axis ticks
			for (let i = 0; i < numXAxisTicks; i++) {
				let x = (base.x - offset) * i;
				let y = base.y - base.metalHeight;
				line(x, y, x, y - 5); // Draw the line
			}

			let numYAxisTicks = 25;
			// graph -y axis ticks
			for (let i = 0; i < numYAxisTicks; i++) {
				let x = base.x - offset;
				let y = (base.y - 200) * i + 32;
				line(x, y, x + 5, y); // Draw the line
			}

			noStroke();
			fill(...color.graph);
			textSize(10);

			text("20 μC/cm\u00B3", base.x - offset + 32, 80);
			text("-20 μC/cm\u00B3", base.x - offset + 32, 300);

			text("5 \u00B5m", base.x - offset + 160, base.y - base.metalHeight - 16);
		}
	}
}

// CLASSES ====================================
