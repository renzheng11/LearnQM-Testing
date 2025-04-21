/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
------------------------------- */

// Tools ============================================================
function qs(selector) {
	return document.querySelector(selector);
}

function scene(num) {
	return sceneCount == num;
}

// [vars] Canvas ============================================================
// P5 canvas
let context;

// factors for scaling drawing to fit various screen sizing
let scale_x = 1366;
let scale_y = 768;

let sx = 0;
let sy = 0;

// [vars] Colors -============================================================
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	red2: [255, 40, 0],
	hole: [213, 94, 0],
	electron: [86, 180, 233],
	efx: [230, 159, 0],
	efy: [0, 114, 178],
	graph: [102, 194, 255],
	wires: [255, 255, 255],
	CDColor: [2, 104, 255], // charge density
	controls: [102, 194, 255],
	generation: [0, 158, 115],
	recom: [152, 152, 152],
	brand: [255, 247, 174],
};

// [vars] Dimensions ============================================================
// base dimensions
const unit = 8;
const dim = {
	x: unit * 34,
	y: unit * 44,

	width: unit * 80, // 640
	height: unit * 40, // 320

	// metal + insulator
	metalWidth: unit * 40,
	metalHeight: unit * 5,

	// source + drain
	sourceWidth: unit * 20,
	sourceHeight: unit * 20,

	batteryHeight: 20,

	vgY: unit * 26, // inner wire // height from top of base = 208
	vdY: unit * 19, // outer wire
};

// [vars] Transfer charges on wires ============================================================
// all sizing + measurements (dependent on base dimensions)
const base = {
	x: dim.x,
	y: dim.y,
	midX: dim.x + dim.width / 2,
	endX: dim.x + dim.width,
	endY: dim.y + dim.height,

	vgY: dim.vgY,
	vdY: dim.vdY,

	width: dim.width,
	height: dim.height,

	graphX: dim.x - 128,
	graphY: dim.y,

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

	bandY: 120,

	drainX: dim.x + dim.width - dim.sourceWidth,
	drainEndX: dim.x + dim.width,
	drainEndY: dim.y + dim.sourceHeight,
	sourceEndX: dim.x + dim.sourceWidth,
	sourceEndY: dim.y + dim.sourceHeight,

	batteryWidth: 65,

	leftGroundX: dim.x + dim.sourceWidth / 2 - 40,
	insulatorLabelY: dim.y - (dim.metalHeight / 2) * 0.75,

	wire: {
		leftMetal: {
			x: dim.x + dim.sourceWidth / 2,
			y: dim.y - dim.metalHeight,
		},

		vg: {
			x: dim.x + dim.width / 2 - 32,
			y: dim.vgY - 16,
		}, // gate - inner battery

		vd: {
			x: dim.x + dim.width / 2 - 32,
			y: dim.vdY - 16,
		}, // drain - outer battery

		vgLeft: { x: dim.x + dim.sourceWidth / 2, y: dim.vgY },
		vgRight: { x: dim.x + 420, y: dim.vgY },
		topMetal: { x: dim.x + 420, y: dim.y - dim.metalHeight * 2 + 16 },
		vdLeft: { x: dim.x + dim.sourceWidth / 2, y: dim.vdY },
		vdRight: {
			x: dim.x + dim.width - dim.sourceWidth / 2,
			y: dim.vdY,
		},
		rightMetal: {
			x: dim.x + dim.width - dim.sourceWidth / 2,
			y: dim.y - dim.metalHeight,
		},

		// vgLeft: [dim.x + dim.sourceWidth / 2, dim.vgY], // corner
		// vgRight: [dim.x + 420, dim.vgY], // corner
		// topMetal: [dim.x + 420, dim.y - dim.metalHeight * 2 + 16],
		// vdLeft: [dim.x + dim.sourceWidth / 2, dim.vdY],
		// vdRight: [dim.x + dim.width - dim.sourceWidth / 2, dim.vdY],
		// rightMetal: [
		// 	dim.x + dim.width - dim.sourceWidth / 2,
		// 	dim.y - dim.metalHeight,
		// ],
	},

	efXMin: dim.x + 150.4,
	efXMax: dim.x + 203,

	efYMin: dim.y + 150.4,
	efYMax: dim.y + 203,

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

	bandThreshold: 30, // only charges above this line get plotted on band diagram
};

// [vars] Charges + Electrons + Holes ============================================================
let fixedCharges = []; // fixed positive + negative charges
let electrons = [];
let holes = [];
let chargeID = 0;
let botzDistribution = [];

let scatterCount = 20; // count down to next scatter
let scatterInterval;
let willScatter;

// [vars] Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
let recomdElectrons = []; // electron that appears briefly at recombination location
let recomdHoles = []; // hole that appears briefly at recombination location
let recomPositions = []; //middle position store
let generationInterval;
let recomInterval;
let rate = 4000; // for gen & recom
let recomOn = true;
let recomDistance = 12; //distance for recom
let recomEffectsPositions = [];
let recomCount = 0;
let recomEffects = [];
let recomTempElectrons = [];
let recomTempHoles = [];

let intervals = []; // array to store all intervals to help clear them on reset

// [vars] Battery ============================================================
// images
let batteryPosOff;
let batteryNegOff;
let batteryPosOn;
let batteryNegOn;

// [vars] Transfer charges on wires ============================================================

// on / off
let vgOn;
let vdOn;

let vgCharge; // actual vg charge amount in V
let vdCharge; // actual vd charge amount in mA

let prevVGChargeScreen; // keep track of last vg charge before current slider change

let vgChargeScreen = 0; // number of charges for animation for vg wire - visual representation
let vdFlow = 0; // number of charges for animation for vd wire - visual representation

let vgChargeScreenPrev = 0;

let addToMetalCharges = 0;
let removeFromMetalCharges = 0;

let stillAnimating = false;
let vgLoop = []; // contains electrons for animation
let vdLoop = []; // contains electrons for animation
let vgLoopOn = false; // toggles vg battery electron transfer
let vdLoopOn = true; // toggles vd battery electron transfer
let vgLoopAnimated = true;

let triedVDChange = 0; // if user has used vd slider at least once in scene 1

let vgLoopDirection = 0; // left - pos to neg
let showMetalPosCharges = false; // show positive charges on gate
let metalPosCharges = []; // positive charges on gate when vg battery is on

let dis1 = base.wire.leftMetal.y - base.wire.vdLeft.y; // left wire
let dis2 = base.wire.vdRight.x - base.wire.vdLeft.x; // middle wire
let dis3 = base.wire.rightMetal.y - base.wire.vdRight.y; // right wire
let disTotal = dis1 + dis2 + dis3; // 800

// vdFlowMap: each object -> index 0 = distance between each electron, index 1 = number of electrons (spread out over distance to be continuous loop)
// if distance values are edited, they should still keep relationship between each other
// currently -> distance = 1/vdFlow * 120
let vdFlowMap = {
	0: 0,
	0.5: [240, Math.floor(disTotal / 240)],
	1.0: [120, Math.floor(disTotal / 120)],
	1.2: [100, Math.floor(disTotal / 100)],
	2: [60, Math.floor(disTotal / 60)],
	5: [26, Math.floor(disTotal / 24)],
	6: [21, Math.floor(disTotal / 20)], // offset so it appears to be animating (if same distance = speed, animation appears to be still)
};

// Band Diagram ============================================================
let bandScale = 1; // change the verticle distribution scale of band diagram
let electronBand = []; // graph negative line
let holeBand = []; // graph green line

// let electronBand_data = new Array(100).fill(0);
// let holeBand_data = [];
// let holeBand_data_indice = [];
// let holeBand_v1 = []; //for json data v_data_1.json store green line data
// let electronBand_v1 = []; //for json data v_data_1.json store negative line data
// let holeBand_data_v1 = []; //for json data v_data_1.json store green line data
// let electronBand_data_v1 = []; //for json data v_data_1.json store negative line data

// Data for electric field ============================================================
let efGrid = efGrid_vd00_vg00;
let hoverColumn = 0;
let EFData = [];

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

let bandData = band_vd00_vg00; //current array displayibg

// Updating Functions ============================================================

function setup() {
	// accessGrid();
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas(windowWidth / 2 + 200, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();

	// reset all variables
	resetScene();

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
	if (sceneCount >= 1) {
		scaleToWindow();

		scale(sx);
		background(...color.bg);

		if (sceneCount > 0) {
			drawBase();
			drawVDExplain();
			updateCharges();
			drawWires();
			drawBandDiagram();
			drawGraph();
			updateWireElectrons();
			drawMetalPosCharges();
			drawBandDiagram();
		}
	}
}

function resetScene() {
	background(...color.bg);

	fixedCharges = [];
	electrons = [];
	holes = [];
	electronBand = [];
	holeBand = [];
	chargeID = 0;
	botzDistribution = [];
	scatterCount = 20;
	willScatter = false;
	EFData = [];

	generationInterval = 0;
	generationEffects = [];
	recomdElectrons = [];
	recomdHoles = [];
	recomPositions = [];
	recomEffectsPositions = [];
	recomCount = 0;
	recomEffects = [];
	recomTempElectrons = [];
	recomTempHoles = [];

	metalPosCharges = [];
	showMetalPosCharges = false;
	vdOn = false;
	vgCharge = 0;
	vdCharge = 0;
	vdFlow = 0;
	vgLoop = [];
	vdLoop = [];
	vgLoopOn = false;
	vdLoopOn = false;
	vgChargeScreen = 0;
	prevVGChargeScreen = 0;
	vgChargeScreenPrev = 0;
	addToMetalCharges = 0;
	removeFromMetalCharges = 0;
	stillAnimating = false;
	vgLoopAnimated = true;
	triedVDChange = 0;
	vgLoopDirection = 0;

	initCharges();
	updateBotz();
	setIntervals();

	if (sceneCount != 2) {
		resetVDLoop();
	}

	if (sceneCount != 1) {
		resetVGLoop();
	}

	updateProfile(vdCharge, vgCharge);

	// reset sliders
	if (sceneCount >= 1) {
		let vdSlider = document.querySelector(`.vdSlider${sceneCount}`);
		if (vdSlider) {
			vdSlider.value = 0;
		}
		let vgSlider = document.querySelector(`.vgSlider${sceneCount}`);

		if (vgSlider) {
			vgSlider.value = 0;
		}
	}
	toggleChargeSliders("on");
}

// Updating Functions ============================================================

function resetVGLoop(direction) {
	prevVGCharge = 0;
	vgLoop = [];
	for (let i = 0; i < vgChargeScreen; i++) {
		// moving electrons
		let x, y;
		let distance = 20;
		if (direction == 0) {
			x = base.wire.vgRight.x;
			y = base.wire.topMetal.y + i * distance;
		} else {
			x = base.wire.vgLeft.x;
			y = base.wire.topMetal.y + i * distance;
		}

		vgLoop.push(new wireCharge(x, y, "vg"));
	}
}

function initCharges() {
	let holeCount = 200;
	let fixedNegCharges = holeCount / 2;
	let electronCount = 100; // source and drain each
	let fixedPosCharges = electronCount / 2;

	let buffer = 12; // draw inside box borders

	// source fixed positive charges
	for (let i = 0; i < fixedPosCharges; i++) {
		let x = random(base.x + buffer, base.sourceEndX - buffer);
		let y = random(base.y + buffer, base.sourceEndY - buffer);
		fixedCharges.push(new Charge(x, y, "fp", chargeID));
	}

	// drain fixed positive charges
	for (let i = 0; i < fixedPosCharges; i++) {
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
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		holes.push(newCharge);
		chargeID++;
	}

	for (let i = 0; i < electronCount; i++) {
		// initiate source electrons
		let x = random(base.x + buffer, base.x + base.sourceWidth - buffer);
		let y = random(base.y + buffer, base.y + base.sourceHeight - buffer);

		let newCharge = new Charge(x, y, "e", chargeID, "i");

		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		electrons.push(newCharge);
		chargeID++;

		// initiate drain electrons
		x = random(
			base.x + base.width - base.sourceWidth + buffer,
			base.x + base.width - buffer
		);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, "e", chargeID, "i");
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		electrons.push(newCharge);
		chargeID++;
	}
}

function setIntervals() {
	// intervals set how often an action happens, needs to reset when a scene starts

	// clear all intervals
	intervals.map((a) => {
		clearInterval(a);
		arr = [];
	});

	// generation interval
	intervals.push(
		setInterval(function () {
			generateCharges(1);
		}, rate)
	);

	// recombination interval
	intervals.push(
		setInterval(function () {
			if (recomOn) {
				recomOn = false;
			} else {
				recomOn = true;
			}
		}, rate)
	);

	// scatter interval
	intervals.push(
		setInterval(function () {
			scatter();
		}, 100)
	);
}

function generateCharges(numCharges) {
	for (let i = 0; i < numCharges; i++) {
		let x = random(base.x, base.endX);
		let y = random(base.y, base.endY);
		generationEffects.push(new Charge(x, y, "ge", chargeID));

		let newElectron = new Charge(x, y, "e", chargeID, "g");
		electrons.push(newElectron);

		let newHole = new Charge(x, y, "h", chargeID, "g");
		holes.push(newHole);

		chargeID += 1;
	}
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
	const normVelocity = [
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

	for (let i = 0; i < normVelocity.length; i++) {
		let count = 0;
		while (count < normVelocity[i].quantity) {
			botzDistribution.push(3 * normVelocity[i].nv);
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

				recomEffectsPositions.push(
					p5.Vector.div(
						p5.Vector.add(holes[k].position, electrons[i].position),
						2
					)
				);

				//effects

				recomEffects.push(
					new Charge(
						recomEffectsPositions[recomCount].x,
						recomEffectsPositions[recomCount].y,
						"re",
						recomCount
					)
				);
				recomTempElectrons.push(
					new Charge(
						electrons[i].position.x,
						electrons[i].position.y,
						"te",
						recomCount
					)
				);
				recomTempHoles.push(
					new Charge(holes[k].position.x, holes[k].position.y, "th", recomCount)
				);
				// recomEffectsPositions[recomCount] = p5.Vector.div(
				// 	p5.Vector.add(holes[k].position, electrons[i].position),
				// 	2
				// );

				// //effects

				// recomEffects[recomCount] = new Charge(
				// 	recomEffectsPositions[recomCount].x,
				// 	recomEffectsPositions[recomCount].y,
				// 	"re",
				// 	recomCount
				// );
				// recomTempElectrons[recomCount] = new Charge(
				// 	electrons[i].position.x,
				// 	electrons[i].position.y,
				// 	"te",
				// 	recomCount
				// );
				// recomTempHoles[recomCount] = new Charge(
				// 	holes[k].position.x,
				// 	holes[k].position.y,
				// 	"th",
				// 	recomCount
				// );

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

function animateVDLoop() {
	for (let i = 0; i < vdLoop.length; i++) {
		let electron = vdLoop[i];
		electron.draw();

		let distance = vdFlowMap[vdFlow][0]; // 100, 40, 24

		// conditions for moving in directions
		let Up =
			electron.position.x > base.wire.vdRight.x - 8 &&
			electron.position.y > base.wire.vdRight.y;
		let Left =
			electron.position.x > base.wire.vdLeft.x + 8 &&
			electron.position.y < base.wire.vdRight.y + 20;
		let Down =
			electron.position.x < base.wire.vdLeft.x + 8 &&
			electron.position.y < base.wire.leftMetal.y;
		let Right =
			electron.position.x < base.wire.vdRight.x + 8 &&
			electron.position.y > base.wire.leftMetal.y - 8;

		if (Up) {
			let speed = 20;

			let leftover = electron.position.y - base.wire.vdRight.y;
			if (leftover < speed) {
				electron.updatePosition(
					electron.position.x,
					electron.position.y - leftover
				);
			} else {
				// electron.updatePosition(electron.position.x, electron.position.y - 20);
				electron.updatePosition(
					electron.position.x,
					electron.position.y - speed
				);
			}
			// electron.move(createVector(base.wire.vdRight.x, base.wire.vdRight.y));
		} else if (Left) {
			electron.move(createVector(base.wire.vdLeft.x, base.wire.vdLeft.y));
		} else if (Down) {
			electron.move(createVector(base.wire.leftMetal.x, base.y));
		} else if (Right) {
			//  jump back to right, avoid gap in flow
			electron.updatePosition(base.wire.vdRight.x, base.wire.rightMetal.y);
			// electron.move(createVector(base.wire.vdRight.x, base.wire.rightMetal.y));
		}
	}
}

function resetVGLoopPositions() {
	// reset electron positions again so they appear spread out when they move back to metal
	for (let i = 0; i < vgLoop.length - 1; i++) {
		vgLoop[i].position.y = base.wire.leftMetal.y + i * 1;
	}
}

function animateVGLoop() {
	showMetalPosCharges = true;

	// draw new metal pos charges if any
	for (let i = 0; i < addToMetalCharges; i++) {
		x = random(base.x + base.sourceWidth, base.endX - base.sourceWidth);
		y = base.y - base.metalHeight * 1.5;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalPosCharges.push(newCharge);
		chargeID++;
		addToMetalCharges -= 1;
	}

	for (let i = 0; i < vgLoop.length; i++) {
		let electron = vgLoop[i];
		electron.draw();

		if (vgLoopDirection == 0) {
			// move to left metal
			if (
				electron.position.x > base.wire.vg.x + 8 &&
				electron.position.y > base.wire.vgRight.y + 0
			) {
				// up (1)
				electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y));
			} else if (electron.position.x > base.wire.vdLeft.x + 8) {
				// left (2)
				electron.move(createVector(base.wire.vgLeft.x, base.wire.vgLeft.y));
			} else if (
				electron.position.x < base.wire.vdLeft.x + 8 &&
				electron.position.y < base.wire.leftMetal.y
			) {
				// down (3)
				electron.move(createVector(base.wire.leftMetal.x, base.y));

				onFowardAnimationFinish(i);
			}
		} else {
			// when vg changed to less amount or 0, move BACK to metal
			if (
				electron.position.x < base.wire.vg.x &&
				electron.position.y > base.wire.vgLeft.y + 8
			) {
				electron.move(createVector(base.wire.vgLeft.x, base.wire.vgLeft.y)); // up
			} else if (electron.position.x < base.wire.vgRight.x + 8) {
				if (electron.position.x > base.wire.vgRight.x - 8) {
					// if on right line
					electron.move(createVector(base.wire.topMetal.x, base.y)); // down
					onBackAnimationFinish(i);
				} else {
					electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y)); // right
				}
			}
		}
	}

	function onBackAnimationFinish(i) {
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				// remove from metal charges the difference in charge amount
				for (let i = 0; i < removeFromMetalCharges; i++) {
					metalPosCharges.pop();
					removeFromMetalCharges -= 1;
				}

				toggleChargeSliders("on");
				resetVGLoopPositions();
				vgLoopAnimated = true;
			}
		}, vgLoop.length * 60);
	}

	function onFowardAnimationFinish(i) {
		// time out length will depend on how many charges animating - not using same multiplier

		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				vgLoopAnimated = true;
				resetVGLoopPositions();
				toggleChargeSliders("on");

				// add metal charge difference
			}
		}, vgLoop.length * 60);
	}
}

function drawMetalPosCharges() {
	// draw pos charges in top metal
	if (showMetalPosCharges) {
		for (let i = 0; i < metalPosCharges.length; i++) {
			metalPosCharges[i].draw();
		}
	}
}

function togglevd() {
	vdLoopOn = !vdLoopOn;
}

function disableVGSlider() {
	let slider = document.querySelector(`.vgSlider${sceneCount}`);
	slider.disabled = true;
}

function enableVGSlider() {
	let slider = document.querySelector(`.vgSlider${sceneCount}`);
	slider.disabled = false;
}

function toggleChargeSliders(state) {
	const chargeSliders = document.querySelectorAll(`.vgSlider${sceneCount}`);
	if (state == "on") {
		chargeSliders.forEach((slider) => {
			slider.disabled = false;
		});
	} else {
		chargeSliders.forEach((slider) => {
			slider.disabled = true;
		});
	}
}

function updateProfileTemp(value) {
	if (value == 0) {
		updateProfile(0, 0);
	} else if (value == 1) {
		updateProfile(0.2, 0.3);
	} else if (value == 2) {
		updateProfile(0.2, 0.9);
	} else if (value == 3) {
		updateProfile(0.2, 3.0);
	} else if (value == 4) {
		updateProfile(0.2, 2.5);
	} else if (value == 5) {
		updateProfile(1.6, 2.5);
	} else if (value == 6) {
		updateProfile(4.5, 2.5);
	}
}

function setBand(band) {
	bandData = [];
	for (let i = 0; i < band.length - 1; i++) {
		bandData[i] = band[i].cband;
	}
}

function updateProfile(vd, vg) {
	vdCharge = vd;
	vgCharge = vg;

	// vd 0, vary vg
	if (vd == 0 && vg == 0) {
		efGrid = efGrid_vd00_vg00;
		setBand(band_vd00_vg00);
	} else if (vd == 0 && vg == 0.5) {
		efGrid = efGrid_vd00_vg05;
		setBand(band_vd00_vg05);
	} else if (vd == 0 && vg == 1.0) {
		efGrid = efGrid_vd00_vg10;
		setBand(band_vd00_vg10);
	} else if (vd == 0 && vg == 1.3) {
		efGrid = efGrid_vd00_vg13;
		setBand(band_vd00_vg13);
	}

	// vd .1, vary vg
	else if (vd == 0.1 && vg == 0) {
		efGrid = efGrid_vd01_vg00;
		setBand(band_vd01_vg00);
	} else if (vd == 0.1 && vg == 0.5) {
		efGrid = efGrid_vd01_vg05;
		setBand(band_vd01_vg05);
	} else if (vd == 0.1 && vg == 1.0) {
		efGrid = efGrid_vd01_vg10;
		setBand(band_vd01_vg10);
	} else if (vd == 0.1 && vg == 1.3) {
		efGrid = efGrid_vd01_vg13;
		setBand(band_vd01_vg13);
	}

	// vd .3, vary vg
	else if (vd == 0.3 && vg == 0) {
		efGrid = efGrid_vd03_vg00;
		setBand(band_vd03_vg00);
	} else if (vd == 0.3 && vg == 0.5) {
		efGrid = efGrid_vd03_vg05;
		setBand(band_vd03_vg05);
	} else if (vd == 0.3 && vg == 1.0) {
		efGrid = efGrid_vd03_vg10;
		setBand(band_vd03_vg10);
	} else if (vd == 0.3 && vg == 1.3) {
		efGrid = efGrid_vd03_vg13;
		setBand(band_vd03_vg13);
	}

	// vd 1.0, vary vg
	else if (vd == 1.0 && vg == 0) {
		efGrid = efGrid_vd10_vg00;
		setBand(band_vd10_vg00);
	} else if (vd == 1.0 && vg == 0.5) {
		efGrid = efGrid_vd10_vg05;
		setBand(band_vd10_vg05);
	} else if (vd == 1.0 && vg == 1.0) {
		efGrid = efGrid_vd10_vg10;
		setBand(band_vd10_vg10);
	} else if (vd == 1.0 && vg == 1.3) {
		efGrid = efGrid_vd10_vg13;
		setBand(band_vd10_vg13);
	}

	// currently: if profile is not included, nothing happens - stays on last selected valid profile
}

function updateVD(value, input) {
	if (scene(1)) {
		triedVDChange += 1;
	}
	// being updated by slider with value range [0-3]
	let valueToChargeMap = [0.0, 0.1, 0.3, 1.0];
	vdCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);
	scaleVDFlow();
}

function scaleVDFlow() {
	// scale vd flow amount (ranges .5 - 6) to a visual amount of charges on screen

	// map vd to visual amount based on vg, vd values (listed in vdValues.png)
	if (vgCharge == 0 || vgCharge == 0.5 || vdCharge == 0) {
		// no VD flow
		vdFlow = 0;
	} else if (vdCharge == 0.1 && vgCharge == 1.0) {
		vdFlow = 0.5;
	} else if (vdCharge == 0.3 && vgCharge == 1.0) {
		vdFlow = 1;
	} else if (vdCharge == 1.0 && vgCharge == 1.0) {
		vdFlow = 1.2;
	} else if (vdCharge == 0.1 && vgCharge == 1.3) {
		vdFlow = 2;
	} else if (vdCharge == 0.3 && vgCharge == 1.3) {
		vdFlow = 5;
	} else if (vdCharge == 1.0 && vgCharge == 1.3) {
		vdFlow = 6;
	}

	// scale vd flow amount
	// let vdChargeScale = 8;
	// vdFlow = vdFlow * vdChargeScale;

	resetVDLoop();
}

function resetVDLoop() {
	// currently clears out and animates from beginning
	// able to make more continuous when Vd slider is changed?
	vdLoop = [];

	// total total distance electron animates

	let distance = vdFlowMap[vdFlow][0];
	let amount = vdFlowMap[vdFlow][1];

	if (vdFlow > 0) {
		for (let i = 0; i < amount; i++) {
			// for (let i = 0; i < vdFlow; i++) {
			let x = base.wire.rightMetal.x;
			// yRange is range of y used to spread out the charges during animation
			// yRange is divided by vdFlow to determine how spread out charges are

			// let x, y;

			// let distance = vdFlow ;
			// if (direction == 0) {
			// 	x = base.wire.vgRight.x;
			// 	y = base.wire.topMetal.y + i * distance;
			// } else {
			// 	x = base.wire.vgLeft.x;
			// 	y = base.wire.topMetal.y + i * distance;
			// }
			let yRange = 1000;
			// let y =
			// 	base.wire.rightMetal.y +
			// 	i * (yRange / vdFlow) +
			// 	Math.random() * 10;

			y = base.wire.rightMetal.y + i * distance;

			vdLoop.push(new wireCharge(x, y, "vd"));
		}
	}
}

function resetMetalCharges() {
	metalPosCharges = [];
	for (let i = 0; i < vgChargeScreen; i++) {
		let x = base.wire.vgRight.x;
		let y = base.wire.leftMetal.y + i * 50;
		vgLoop.push(new wireCharge(x, y, "vd"));

		// metal
		x = random(base.x + base.sourceWidth, base.endX - base.sourceWidth);
		y = base.y - base.metalHeight * 1.5;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalPosCharges.push(newCharge);
		chargeID++;
	}
}

function updateVG(value) {
	addToMetalCharges = 0;
	removeFromMetalCharges = 0;
	// value is from 0-3V - map to actual vg amount
	// prevVGChargeScreen = vgChargeScreen;
	prevVGChargeScreen = vgChargeScreenPrev;

	let valueToChargeMap = [0.0, 0.5, 1.0, 1.3];
	vgCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);

	// maps actual vg amount to vg to # electrons animated on the screen
	let vgChargeMap = {
		0.0: 0,
		0.5: 8,
		1.0: 16,
		1.3: 20,
	};

	vgChargeScreen = vgChargeMap[vgCharge];

	vgLoop = [];

	// applyCharge();

	vgLoopAnimated = false;

	vgChargeScreenPrev = vgChargeScreen;

	if (prevVGChargeScreen == 0) {
		// previously 0, now > 0
		//1 on paper
		vgLoopDirection = 0;
		resetMetalCharges();
	} else if (prevVGChargeScreen > 0 && vgChargeScreenPrev == 0) {
		// previously > 0, now 0
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen; //whatever previous was
		removeFromMetalCharges = vgChargeScreen;
	} else if (prevVGChargeScreen < vgChargeScreenPrev) {
		// previously smaller, now larger
		vgLoopDirection = 0;
		vgChargeScreen = vgChargeScreen - prevVGChargeScreen;

		addToMetalCharges = vgChargeScreen;
	} else if (prevVGChargeScreen > vgChargeScreenPrev) {
		// previously larger, now smaller
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen - vgChargeScreen;

		// remove some move metal
		removeFromMetalCharges = vgChargeScreen;
	}
	toggleChargeSliders("off");
	resetVGLoop(vgLoopDirection);
	// disableApplyCharge();
	disableVGSlider();

	// resetVGLoopPositions();
	scaleVDFlow();
}
function updateWireElectrons() {
	if (sceneCount != 2) {
		if (vdCharge > 0) {
			animateVDLoop();
		}
	}
	if (!vgLoopAnimated) {
		animateVGLoop();
	}

	stillAnimating = false;
	// enable button if no electrons are animating (all below the topmetal)
	for (let i = 0; i < vgLoop.length; i++) {
		const electron = vgLoop[i];
		if (electron.position.y < base.wire.leftMetal.y - 10) {
			stillAnimating = true;
		}
	}

	// if (sceneCount == 2 && !stillAnimating) {
	// 	enableApplyCharge();
	// }

	// if (
	// 	sceneCount == 2 &&
	// 	!stillAnimating &&
	// 	document.querySelector(`.chargeButton`).innerText == "Apply Charge to Vg"
	// ) {
	// 	enableVGSlider();
	// }
}

// used by charges in charge.js
//find closest value of the y value of the generated point
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

function updateCharges() {
	// recom holes and electrons

	// display charges
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].draw();
		// fixedCharges[i].update();
	}

	for (let i = 0; i < electrons.length; i++) {
		electrons[i].draw();
		electrons[i].updateOpacity();

		if (electrons[i].appear > 20) {
			// electrons[i].straight_walk();
			// if (electrons[i].position.y > 49) {
			electrons[i].update();
			// }
		}
	}

	for (let i = 0; i < holes.length; i++) {
		holes[i].draw();
		holes[i].updateOpacity();

		if (holes[i].appear > 20) {
			// holes[i].straight_walk();
			// if (holes[i].position.y > 49) {
			holes[i].update();
			// }
		}
	}

	// Show appear effect when electron is generated
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].draw();
		generationEffects[i].updateOpacity();
	}

	// show recom effect
	for (let i = 0; i < recomEffects.length; i++) {
		recomEffects[i].draw();
		recomEffects[i].updateOpacity();
	}

	// get rid of generation effect circle when it reaches 0 opacity
	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].opacity < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// get rid of recom effect circle when it reaches 0 opacity
	for (let i = 0; i < recomEffects.length; i++) {
		if (recomEffects[i].opacity < 1) {
			recomEffects.splice(i, 1);
		}
	}

	// check for recombination
	if (recomOn) {
		recom(electrons, holes);
	}

	// update effects
	// (recombination visual effect, electron fading )
	for (let i = 0; i < recomTempElectrons.length; i++) {
		if (typeof recomTempElectrons[i] != "undefined") {
			recomTempElectrons[i].draw();
			recomTempElectrons[i].updateOpacity();
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < recomTempHoles.length; i++) {
		if (typeof recomTempHoles[i] != "undefined") {
			recomTempHoles[i].draw();
			recomTempHoles[i].updateOpacity();
		}
	}
}

function scatter() {
	//timebetween scatter
	if (scatterCount > 2) {
		//time when straight line no scatter

		willScatter = false;
	} else if (scatterCount <= 2) {
		//time to scatter 2s
		willScatter = true;
	}

	scatterCount -= 1;

	if (scatterCount == 0) {
		scatterCount = parseInt(20) + 2;
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

function drawBase() {
	// style depletion regions

	// drawSourceBaseDepletionRegion();
	// drawFullDepletionRegion();

	// style bases
	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1);
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
		base.vgY - 16,
		leftGroundImg.width * 0.8,
		leftGroundImg.height * 0.8
	);

	// vg vd

	textSize(16);
	text(`vd: ${vdCharge}, vg: ${vgCharge}`, 800, 20);

	textSize(16);
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
	if (sceneCount != 1) {
		drawVG();
	}

	if (sceneCount != 2) {
		drawVD();
	}

	function drawVD() {
		// vd battery
		if (vdCharge > 0) {
			// vd battery on
			image(
				batteryNegOn,
				base.wire.vd.x,
				base.wire.vd.y,
				batteryNegOn.width / 1.5,
				batteryNegOn.height / 1.5
			);
		} else {
			// vd battery off
			image(
				batteryNegOff,
				base.wire.vd.x,
				base.wire.vd.y,
				batteryNegOff.width / 1.5,
				batteryNegOff.height / 1.5
			);
		}

		// strokeWeight(0.5);
		stroke(...color.wires, 160);
		noFill();
		// wire from source to vd battery
		beginShape();
		vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
		vertex(base.x + base.sourceWidth / 2, base.vdY); // top left corner
		vertex(base.wire.vd.x, base.vdY);
		endShape(); // vd battery

		// wire from vd battery to drain metal
		beginShape();
		vertex(base.wire.vd.x + base.batteryWidth, base.vdY); // vd battery
		vertex(base.endX - base.sourceWidth / 2, base.vdY); // corner
		vertex(base.endX - base.sourceWidth / 2, base.y - base.metalHeight); // drain metal
		endShape(); // battery
	}

	function drawVG() {
		if (vgCharge > 0) {
			// vg battery on
			image(
				batteryNegOn,
				base.wire.vg.x,
				base.wire.vg.y,
				batteryNegOn.width / 1.5,
				batteryNegOn.height / 1.5
			);
		} else {
			// vg battery off
			image(
				batteryNegOff,
				base.wire.vg.x,
				base.wire.vg.y,
				batteryNegOff.width / 1.5,
				batteryNegOff.height / 1.5
			);
		}

		// wires

		// strokeWeight(0.5);
		stroke(...color.wires, 160);
		noFill();
		// wire from source metal to vg battery
		beginShape();
		vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
		vertex(base.x + base.sourceWidth / 2, base.vgY); // top left corner
		vertex(base.wire.vg.x, base.vgY);
		endShape(); // battery

		// wire from vg battery to gate metal
		beginShape();
		vertex(base.wire.vg.x + base.batteryWidth, base.vgY);
		vertex(base.wire.vgRight.x, base.vgY);
		vertex(base.wire.vgRight.x, base.y - base.metalHeight * 2);
		endShape(); // battery
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

function updateHoverColumn(x) {
	hoverColumn = Math.floor(x / 10);
}

function drawGraph() {
	// variables for dynamic axes based on highest peak of efx or efy
	let efPeak = 0; // highest peak of ef
	let graphMaxX = 100; // max # pixels that graph takes up in (+-)x direction
	let numTicks = 10; // number of x-axis ticks + labels
	let maxRange = 0; // max value of current x range (based on efPeak)
	let graphScale = 100; // used to scale data being plotted
	let xTickMultiplier = 0; // for plotting x tick labels

	let mouseInTransistor =
		mouseX / sx > base.x && mouseX / sx - base.x < base.width; // is mouse being hovered over transistor

	let peakX = 0;
	let peakY = 0;

	getPeak();
	drawAxes();
	getXRange();

	if (mouseInTransistor) {
		drawHoverLine();
		drawEFData();
		drawXTicks();
	}

	function drawHoverLine() {
		noFill();
		stroke(...color.graph, 220);
		strokeWeight(1);

		// graph hover line for ef graph

		line(mouseX / sx, base.y, mouseX / sx, base.endY);
		updateHoverColumn(mouseX / sx - base.x);
	}

	function drawAxes() {
		noFill();
		stroke(...color.graph, 220);
		strokeWeight(1);

		// graph y axis
		line(base.graphX, base.graphY - base.metalHeight, base.graphX, base.endY);

		let axisScale = 50;
		let numYAxisTicks = base.height / axisScale;

		// .5 micrometer
		let x = base.graphX;
		let y = base.y + base.sourceHeight;
		line(x, y, x + 5, y); // Draw the line
		text(".5\u00B5m", x - 24, y);

		// 1
		x = base.graphX;
		y = base.y + base.height;
		line(x, y, x + 5, y); // Draw the line
		text("1\u00B5m", x - 24, y);

		noStroke();
		fill(...color.graph);
		textSize(10);

		// x-axis
		// stroke("red");
		// line(
		// 	base.graphX + 100,
		// 	base.graphY,
		// 	base.graphX + 100,
		// 	base.graphY + base.height
		// ); // graphMaxX

		noFill();
		stroke(...color.graph, 180);
		strokeWeight(1);

		// graph x axis
		line(20, base.graphY, base.metalX, base.graphY); // starts at left edge of canvas
	}

	function getXRange() {
		// some ranges allow for some tolerance because some of the data is close to the values used (ex. 5001, 1002, 31065)
		kvPeak = efPeak / 1000;
		if (kvPeak > 0 && kvPeak <= 5.1) {
			numTicks = 5;
			xTickMultiplier = 1;
			maxRange = 5;
		} else if (kvPeak > 5 && kvPeak <= 11) {
			numTicks = 10;
			xTickMultiplier = 1;
			maxRange = 10;
		} else if (kvPeak > 10 && kvPeak <= 21) {
			numTicks = 2;
			xTickMultiplier = 10;
			maxRange = 20;
		} else if (kvPeak > 20 && kvPeak <= 31.5) {
			numTicks = 3;
			xTickMultiplier = 10;
			maxRange = 30;
		} else if (kvPeak > 30 && kvPeak <= 41) {
			numTicks = 4;
			xTickMultiplier = 10;
			maxRange = 40;
		} else if (kvPeak > 40) {
			numTicks = 5;
			xTickMultiplier = 10;
			maxRange = 50;
		}
	}

	function drawXTicks() {
		// draws a discrete range of x values based on max range

		textSize(10);
		let xUnit = " V/cm";
		for (let i = 1; i <= numTicks; i++) {
			let distanceBetween = graphMaxX / numTicks;
			let x = base.graphX + i * distanceBetween; // EDIT!!

			let y = base.graphY;
			if (x < base.x) {
				stroke(...color.graph);
				line(x, y, x, y - 5); // Draw the line

				noStroke();
				fill(...color.graph);
				text(`${i * xTickMultiplier}`, x, y + 12); // \u00B5m
			}
		}

		// graph -x axis ticks + labels
		for (let i = 1; i <= numTicks; i++) {
			let x = base.graphX - (i * graphMaxX) / numTicks;
			let y = base.graphY;
			if (x < base.x) {
				stroke(...color.graph);
				line(x, y, x, y - 5); // Draw the line

				noStroke();
				fill(...color.graph);
				text(`-${i * xTickMultiplier}`, x, y + 12); // \u00B5m
			}

			// if (i == numTicks - 1) {
			// 	text(`-${i * xTickMultiplier} V/cm`, x, y + 12); // \u00B5m
			// }
		}
	}

	function getPeak() {
		// get highest peak of efx or efy data
		for (let row = 0; row < efGrid.length; row++) {
			// for every row, plot efy at specific col
			let efy = efGrid[row][hoverColumn].efy;
			let efx = efGrid[row][hoverColumn].efx;
			if (Math.abs(efy) > Math.abs(peakY)) {
				peakY = Math.abs(efy);
			}
			if (Math.abs(efx) > Math.abs(peakX)) {
				peakX = Math.abs(efx);
			}
			if (Math.abs(efy) > Math.abs(efPeak)) {
				efPeak = Math.abs(efy);
			}
			if (Math.abs(efx) > Math.abs(efPeak)) {
				efPeak = Math.abs(efx);
			}
		}
	}

	function drawEFData() {
		styleText();

		let efxLabel = { x: 26, y: 230 };
		let efyLabel = { x: 26, y: 260 };

		text(
			"Electric field (kV) in x direction" + `-- (${peakX})`,
			efxLabel.x + 120,
			efxLabel.y + 6
		);
		text(
			"Electric field (kV) in y direction" + `-- (${peakY})`,
			efyLabel.x + 120,
			efyLabel.y + 6
		);

		stroke("white");
		// draw efx label
		fill(...color.efx, 160);
		circle(efxLabel.x, efxLabel.y, 20);

		// draw efy label
		fill(...color.efy, 160);
		circle(efyLabel.x, efyLabel.y, 20);

		// draw efx data
		stroke("white");
		fill(...color.efx, 160);

		// set scale
		// graphScale = efPeak / graphScale;

		graphScale = efPeak / graphMaxX; // divisor is pixel value beyond x axis where max will be drawn
		// get percentage of ef max compared to discrete range max
		let percent = efPeak / 1000 / maxRange; // percentage good

		// scale graphscale by percentage to graph at percentage
		graphScale = graphScale / percent;

		beginShape();

		vertex(base.graphX, base.graphY);

		for (let row = 0; row < efGrid.length; row++) {
			// for every row, plot efx at specific col
			let efx = efGrid[row][hoverColumn].efx;

			let y = base.graphY + (base.height * row) / 32; // plot over y of transistor
			let x = base.graphX + efx / graphScale;

			if (x < base.graphX + graphMaxX + 12) {
				// condition prevents plotting when ef still scaling (happens when mouse hovers too fast)
				vertex(x, y);
			}
		}
		vertex(base.graphX, base.graphY + base.height);
		endShape();

		// draw efy data
		stroke("white");
		fill(...color.efy, 160);
		beginShape();
		vertex(base.graphX, base.graphY);
		for (let row = 0; row < efGrid.length; row++) {
			// for every row, plot efy at specific col
			let efy = efGrid[row][hoverColumn].efy;

			let y = base.graphY + (base.height * row) / 32;
			let x = base.graphX + efy / graphScale;
			if (x < base.graphX + graphMaxX + 12) {
				vertex(x, y);
			}
		}

		vertex(base.graphX, base.graphY + base.height);

		endShape();
	}
}

function drawBandDiagram() {
	beginShape();

	let subscriptAddY = 2;
	let subscriptAddX = 8;
	let eTextSize = 14;
	let subscriptTextSize = 12;

	// draw band diagram labels
	textFont("Courier New");

	noStroke();

	// Ec label
	fill(...color.electron);
	textSize(eTextSize);
	text("E", 920, 75);
	textSize(subscriptTextSize);
	text("c", 920 + subscriptAddX, 75 + subscriptAddY);

	// Ev label
	fill(...color.hole);
	textSize(eTextSize);
	text("E", 920, 118);
	textSize(subscriptTextSize);
	text("v", 920 + subscriptAddX, 118 + subscriptAddY);

	textSize(12);

	noFill();
	strokeWeight(1);

	noFill();
	stroke(...color.electron);
	strokeWeight(1.5);

	let bandLength = 62;

	// populate
	for (var k = 0; k < bandLength; k++) {
		let columns = 64;
		let vertexX = base.x + (base.width * k) / columns;
		let vertexY = base.bandY - bandData[k] * 40 - 100;
		curveVertex(vertexX, vertexY);
		electronBand[k] = [vertexX, vertexY];
	}
	endShape();

	//draw hole curve
	stroke(...color.hole);
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		//hole curve
		let columns = 64;
		let vertexX = base.x + (base.width * k) / columns;
		let vertexY = base.bandY - bandData[k] * 40;
		let bandGap = -60;

		curveVertex(vertexX, vertexY + bandGap);
		holeBand[k] = [vertexX, vertexY + bandGap];
	}
	endShape();
	noStroke();
	strokeWeight(1);
}

function drawVDExplain() {
	if (scene(1) && triedVDChange >= 3) {
		// style bases
		fill(...color.brand, 100);
		stroke(...color.white);
		strokeWeight(1);
		canvas.drawingContext.setLineDash([]);

		// source
		let loc = {
			x: 20,
			y: base.wire.vdLeft.y,
		};
		rect(loc.x, loc.y, 180, 80, 8);
		textSize(16);
		// labels
		styleText();
		// textAlign(CENTER);

		// source metal
		text(
			"Vd does not flow because \n... add explaination here",
			loc.x + 90,
			loc.y + 30
		);
	}
}
