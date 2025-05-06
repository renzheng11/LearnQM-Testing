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
	x: unit * 32,
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

	graphX: dim.x - 140,
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

	bandThreshold: 30, // only charges on top surface (above threshold line) get plotted on band diagram
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

let initHoleCount = 200; // initial hole count at beginning of scene
let initElectronCount = 100; // source and drain each

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
let drainCurrent = 0; // number of charges for animation for vd wire - visual representation

let vgChargeScreenPrev = 0;

let addToMetalCharges = 0;
let removeFromMetalCharges = 0;

let stillAnimating = false;
let vgLoop = []; // contains electrons for animation
let vdLoop = []; // contains electrons for animation
let vgLoopOn = false; // toggles vg battery electron transfer
let vdLoopOn = true; // toggles vd battery electron transfer
let vgLoopAnimated = true;

// maps actual vg amount to vg to # electrons animated on the screen
let vgChargeMap = {
	0.0: 0,
	0.5: 8,
	1.0: 16,
	1.3: 20,
};

let metalChargesPositions = [];

let triedVDChange = 0; // if user has used vd slider at least once in scene 1

let vgLoopDirection = 0; // left - pos to neg
let showmetalCharges = false; // show positive charges on gate
let metalCharges = []; // positive charges on gate when vg battery is on

let dis1 = base.wire.leftMetal.y - base.wire.vdLeft.y; // left wire
let dis2 = base.wire.vdRight.x - base.wire.vdLeft.x; // middle wire
let dis3 = base.wire.rightMetal.y - base.wire.vdRight.y; // right wire
let disTotal = dis1 + dis2 + dis3; // 800

// drainCurrentMap: each object -> index 0 = distance between each electron, index 1 = number of electrons (spread out over distance to be continuous loop)
// if distance values are edited, they should still keep relationship between each other
// currently -> distance = 1/drainCurrent * 120
let drainCurrentMap = {
	0: 0,
	7.9: [240, Math.floor(disTotal / 240)],
	11: [120, Math.floor(disTotal / 120)],
	12: [100, Math.floor(disTotal / 100)],
	23: [60, Math.floor(disTotal / 60)],
	49: [26, Math.floor(disTotal / 24)],
	59: [21, Math.floor(disTotal / 20)], // offset so it appears to be animating (if same distance = speed, animation appears to be still)
};

// Band Diagram ============================================================
let bandScale = 1; // change the verticle distribution scale of band diagram
let electronBand = []; // graph negative line
let holeBand = []; // graph green line

// Data for electric field ============================================================
let efGrid = efGrid_vd00_vg00;
let hoverColumn = 0;
let EFData = [];

let graphMode = "both"; // graph ef in x direction, ef in y direction, or both (selected by ToggleGroup)
let scaleGraphOn = true;

// Displayed parameters ============================================================
let parameters = {
	"Source/Drain Doping Density": "",
	"Substrate Doping Density": "",
	"Oxide thickness": "2nm",
	"Oxide dielectric constant": "3.9",
	"Gate Workfunction": "5.0 eV",
};

/**
 * Default text style
 */
function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12);

	textStyle(NORMAL);
	textAlign(LEFT);
	textFont("Sans-serif");
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

let bandData = band_vd00_vg00; //current array displayibg

// Updating Functions ============================================================

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas(windowWidth / 2 + 200, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();
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
			drawParameters();
			drawVDExplain();
			updateCharges();
			drawWires();
			drawBandDiagram();
			drawGraph();
			updateWireElectrons();
			drawmetalCharges();
		}
	}

	stabilizeChargeCount();
}

function stabilizeChargeCount() {
	// stabilize hole count =======================================================================================
	// constantly count number of holes in transistor
	// if number dips lower than original amount, bring some holes from bottom metal into transistor (create new holes to represent existing holes)

	// clean out holes that are below transistor - for code performance
	for (let index = 0; index < holes.length; index++) {
		const hole = holes[index];
		let buffer = 50; // allow holes to leave first before getting spliced, allows code in charge.js that brings hole back up for each hole that leaves transistor
		if (hole.position.y > base.endY + buffer) {
			holes.splice(index, 1);
		}
	}

	// count number of holes
	let numHolesInTransistor = holes.filter(
		(hole) => hole.position.y < base.endY
	).length; // currently stabilizes around 215

	// if hole count drops below original hole count, bring some holes from bottom metal
	if (numHolesInTransistor < initHoleCount) {
		var newCharge = new Charge(
			random(base.x, base.endX),
			base.endY,
			"h",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), -1);
		// newCharge.movingVelocity = this.movingVelocity;
		newCharge.velocity = createVector(0, -10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		holes.push(newCharge);
	}
	// stabilize electron count =======================================================================================

	// constantly count number of electrons in source / drain
	// if number dips lower than original amount, bring some electrons from left / right metal into source / drain (create new electrons to represent existing electrons)

	// SOURCE
	// count number of electrons
	let numElectronsInSource = electrons.filter(
		(electron) => electron.position.x < base.sourceEndX
	).length;

	// if it dips below the initial count, reinsert more
	if (numElectronsInSource < initElectronCount) {
		var newCharge = new Charge(
			random(base.x, base.sourceEndX),
			base.y,
			"e",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), 1);
		newCharge.velocity = createVector(0, 10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		electrons.push(newCharge);
	}

	// count number of electrons
	let numElectronsInDrain = electrons.filter(
		(electron) => electron.position.x > base.drainX
	).length;

	// if it dips below the initial count, reinsert more
	if (numElectronsInDrain < initElectronCount) {
		var newCharge = new Charge(
			random(base.drainX, base.drainEndX),
			base.y,
			"e",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), 1);
		newCharge.velocity = createVector(0, 10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		electrons.push(newCharge);
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

	metalCharges = [];
	showmetalCharges = false;
	vdOn = false;
	vgCharge = 0;
	vdCharge = 0;
	drainCurrent = 0;
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
	setMetalChargesPositions();

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
		toggleChargeSliders("on");
	}

	// reset toggle
	if (sceneCount >= 1) {
		scaleGraphOn = true;
		let scaleGraphToggle = document.querySelector(
			`#scaleGraphToggle${sceneCount}`
		);
		scaleGraphToggle.checked = true;

		// reset toggleGroup and graphMode to both x & y
		graphMode = "both";
		let toggleGroup = document.querySelector(`#toggleBoth${sceneCount}`);
		toggleGroup.checked = true;
	}
}

function setMetalChargesPositions() {
	// define set of equidistant positions within top metal for positive charges when VG is applied
	metalChargesPositions = [];
	let maxNumMetalCharges = vgChargeMap[1.3];
	let x = base.x + base.sourceWidth;
	let y = base.y - base.metalHeight;
	let distance = (base.width - base.sourceWidth * 2) / maxNumMetalCharges - 0.2; // subtracting small amount to make it fit into box

	for (let i = 1; i <= maxNumMetalCharges; i++) {
		metalChargesPositions.push({
			x: x + i * distance - 6,
			taken: false,
		});
	}
}

// Updating Functions ============================================================

function resetVGLoop(direction) {
	/* Function: Resets gate electrons to initial animating position depending on position */
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
			x = base.wire.vgLeft.x + i * distance;
			y = base.wire.vgLeft.y;
		}

		vgLoop.push(new wireCharge(x, y, "vg"));
	}
}

function initCharges() {
	/* Function: Initialize charges at beginning of scene */

	let fixedNegCharges = initHoleCount / 2;
	let fixedPosCharges = initElectronCount / 2;
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
	for (let i = 0; i < initHoleCount; i++) {
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

	for (let i = 0; i < initElectronCount; i++) {
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

		let distance = drainCurrentMap[drainCurrent][0]; // 100, 40, 24

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
				electron.updatePosition(
					electron.position.x,
					electron.position.y - speed
				);
			}
		} else if (Left) {
			electron.move(createVector(base.wire.vdLeft.x, base.wire.vdLeft.y));
		} else if (Down) {
			electron.move(createVector(base.wire.leftMetal.x, base.y));
		} else if (Right) {
			//  jump back to right, avoid gap in flow
			electron.updatePosition(base.wire.vdRight.x, base.wire.rightMetal.y);
		}
	}
}

function animateVGLoop() {
	showmetalCharges = true;

	// draw new metal pos charges if any
	for (let i = 0; i < addToMetalCharges; i++) {
		// x = random(base.x + base.sourceWidth, base.endX - base.sourceWidth);
		x = getMetalX(metalChargesPositions);
		y = base.y - base.metalHeight - 14;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalCharges.push(newCharge);
		chargeID++;
		addToMetalCharges -= 1;
	}

	for (let i = 0; i < vgLoop.length; i++) {
		let electron = vgLoop[i];

		electron.draw();

		if (vgLoopDirection == 0) {
			// move to left metal to left ground terminal
			if (
				electron.position.x > base.wire.vg.x + 8 &&
				electron.position.y > base.wire.vgRight.y + 0
			) {
				// up (1)
				electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y));
			} else if (electron.position.x > base.wire.vdLeft.x + 8) {
				// left (2)
				electron.move(createVector(base.wire.vgLeft.x, base.wire.vgLeft.y));
			}
			if (electron.position.x < base.wire.vgLeft.x + 8) {
				// stops at left ground terminal
				onFowardAnimationFinish(i); // waits certain amount of time to finish animating, then carries out code on animation finish
			}
		} else {
			if (
				electron.position.x < base.wire.vgRight.x + 8 &&
				electron.position.y < base.wire.vgLeft.y + 8
			) {
				electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y)); // move right
			}
			if (electron.position.x > base.wire.vgRight.x - 8) {
				// if on right line
				electron.move(createVector(base.wire.topMetal.x, base.y)); // move down
			}
			if (electron.position.y > base.y - base.metalHeight - 8) {
				// reached metal
				onBackAnimationFinish(i);
			}
		}
	}

	function onBackAnimationFinish(i) {
		//  disable slider during animation
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				// remove from metal charges the difference in charge amount
				for (let i = 0; i < removeFromMetalCharges; i++) {
					let popped = metalCharges.pop();
					releaseMetalPosition(metalChargesPositions, popped.x);
					removeFromMetalCharges -= 1;
				}
			}
			vgLoopAnimated = true;
			toggleChargeSliders("on");
		}, vgChargeScreen * 120); // set wait time according to number of charges being animated
	}

	function onFowardAnimationFinish(i) {
		//  disable slider during animation
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				vgLoopAnimated = true;
				toggleChargeSliders("on");
			}
		}, vgChargeScreen * 30); // set wait time according to number of charges being animated
	}
}

function drawmetalCharges() {
	// draw pos charges in top metal
	if (showmetalCharges) {
		for (let i = 0; i < metalCharges.length; i++) {
			metalCharges[i].draw();
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
	getDrainCurrent();
}

function getDrainCurrent() {
	if (vgCharge == 0 || vgCharge == 0.5 || vdCharge == 0) {
		drainCurrent = 0;
	} else if (vdCharge == 0.1 && vgCharge == 1.0) {
		drainCurrent = 7.9;
	} else if (vdCharge == 0.3 && vgCharge == 1.0) {
		drainCurrent = 11;
	} else if (vdCharge == 1.0 && vgCharge == 1.0) {
		drainCurrent = 12;
	} else if (vdCharge == 0.1 && vgCharge == 1.3) {
		drainCurrent = 23;
	} else if (vdCharge == 0.3 && vgCharge == 1.3) {
		drainCurrent = 49;
	} else if (vdCharge == 1.0 && vgCharge == 1.3) {
		drainCurrent = 59;
	}

	resetVDLoop();
}

function resetVDLoop() {
	// currently clears out and animates from beginning
	// able to make more continuous when Vd slider is changed?
	vdLoop = [];

	// total total distance electron animates

	let distance = drainCurrentMap[drainCurrent][0];
	let amount = drainCurrentMap[drainCurrent][1];

	if (drainCurrent > 0) {
		for (let i = 0; i < amount; i++) {
			let x = base.wire.rightMetal.x;
			y = base.wire.rightMetal.y + i * distance;
			vdLoop.push(new wireCharge(x, y, "vd"));
		}
	}
}

function resetMetalCharges() {
	metalCharges = [];
	for (let i = 0; i < vgChargeScreen; i++) {
		let x = base.wire.vgRight.x;
		let y = base.wire.leftMetal.y + i * 50;
		vgLoop.push(new wireCharge(x, y, "vd"));

		// metal
		x = getMetalX(metalChargesPositions);

		y = base.y - base.metalHeight - 14;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalCharges.push(newCharge);
		chargeID++;
	}
}

function getMetalX(arr) {
	// gets random available x position within the metal
	const availableIndices = arr
		.map((item, index) => (!item.taken ? index : null))
		.filter((index) => index !== null);

	if (availableIndices.length === 0) {
		return null; // or throw an error if all are taken
	}

	const randomIndex =
		availableIndices[Math.floor(Math.random() * availableIndices.length)];
	arr[randomIndex].taken = true;
	return arr[randomIndex].x;
}

function releaseMetalPosition(arr, x) {
	// mark the position in metal as open again
	const item = arr.find((obj) => obj.x === x);
	if (item) {
		item.taken = false;
		return true; // success
	}
	return false; // not found
}

function updateVG(value) {
	addToMetalCharges = 0;
	removeFromMetalCharges = 0;

	prevVGChargeScreen = vgChargeScreenPrev;

	let valueToChargeMap = [0.0, 0.5, 1.0, 1.3];
	vgCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);

	vgChargeScreen = vgChargeMap[vgCharge];

	vgLoop = [];

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
	disableVGSlider();
	getDrainCurrent();
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
		base.midX - 14,
		base.endY + base.bottomMetalHeight,
		groundImg.width / 1.2,
		groundImg.height / 1.2
	);

	// left ground
	image(
		leftGroundImg,
		base.leftGroundX + 10,
		base.vgY - 15.5,
		leftGroundImg.width,
		leftGroundImg.height
	);

	// drain current
	styleText();
	fill(...color.white, 200);
	if (sceneCount != 2) {
		text(
			`Drain Current: ${drainCurrent} mA`,
			base.wire.rightMetal.x - 130,
			base.wire.vdRight.y + 20
		);
	}

	textSize(16);
	// labels
	styleText();
	textAlign(CENTER);
	text("Substrate", base.midX, base.y + base.height / 2);
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

	text("Metal", base.midX, base.y - base.metalHeight * 1.35);

	text("Insulator", base.midX, base.insulatorLabelY);

	// bottom metal
	text(
		"Metal",
		base.midX,
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
		stroke(...color.white, 160);
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
		stroke(...color.white, 160);
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

function updateHoverColumn(x) {
	hoverColumn = Math.floor(x / 10);
}

function switchGraphMode(mode) {
	// Function: based on HTML toggle - swithes graph mode to plot EF in directions X, Y, or X&Y
	console.log(mode);
	graphMode = mode;
}

function toggleScaleGraph() {
	// Function: based on HTML switch - turns on/off scaling to highest peak
	scaleGraphOn = !scaleGraphOn;
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

	getPeak();
	drawAxes();
	getXRange();

	if (mouseInTransistor) {
		drawHoverLine();
		drawEFData();
		drawXTicks();
	}

	drawTransistorWidth();

	function drawTransistorWidth() {
		// Function: draws measurement across transistor width on bottom
		let y = base.endY + 72;

		// draw right arrow
		noFill();
		stroke(...color.graph, 220);
		line(base.x, y, base.endX, y);

		fill(...color.graph);
		drawTriangle(8, "r", base.endX + 8, y);

		// draw ticks
		stroke(...color.graph);
		let tickHeight = 8;
		line(base.x, y, base.x, y + tickHeight); // begin transistor
		line(base.sourceEndX, y, base.sourceEndX, y + tickHeight); // end of source
		line(base.midX, y, base.midX, y + tickHeight); // middle of transistor
		line(base.drainX, y, base.drainX, y + tickHeight); // start of drain
		// line(base.endX, y, base.endX, y + tickHeight); // end transistor

		// draw width num & units
		textSize(12);
		noStroke();
		fill(...color.graph);
		textAlign(CENTER);
		text("0\u00B5m", base.x, y + 24);
		text(".5\u00B5m", base.sourceEndX, y + 24);
		text("1\u00B5m", base.midX, y + 24);
		text("1.5\u00B5m", base.drainX, y + 24);
		text("2\u00B5m", base.endX, y + 24);
	}

	function drawHoverLine() {
		// Function: Draws line at mouse position to represent what position the EF graph is plotting
		noFill();
		stroke(...color.graph, 220);
		strokeWeight(1);

		// graph hover line for ef graph

		line(mouseX / sx, base.y, mouseX / sx, base.endY);
		updateHoverColumn(mouseX / sx - base.x);
	}

	function drawAxes() {
		// Function: draws lines for x and y axes
		noFill();
		stroke(...color.graph, 220);
		strokeWeight(1);
		textSize(12);
		textAlign(CENTER);

		// graph y axis
		line(base.graphX, base.graphY, base.graphX, base.endY + 6);

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

		noFill();
		stroke(...color.graph, 180);
		strokeWeight(1);

		// graph x axis
		line(8, base.graphY, base.graphX + 120, base.graphY); // starts at left edge of canvas

		fill(...color.graph);
		drawTriangle(8, "r", base.graphX + 120, base.graphY); // left
		drawTriangle(8, "d", base.graphX, base.endY + 6);

		textSize(16);
		noStroke();
		// x & z label
		// text("x", 8, base.graphY + 3);
		text("z", base.graphX, base.endY + 28);
	}

	function drawTriangle(size, dir, x, y) {
		// Function: draws arrows at ends of axes
		let wScale = 1.7; // scales width
		if (dir == "r") {
			triangle(x, y, x - size, y - size / wScale, x - size, y + size / wScale);
		} else if (dir == "l") {
			triangle(x, y, x + size, y - size / wScale, x + size, y + size / wScale);
		} else if (dir == "d") {
			triangle(x - size / wScale, y, x + size / wScale, y, x, y + size);
		}
	}

	function getXRange() {
		// Function: Get range of x axis depending on highest peak in EF data

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

		// draw unit
		textSize(12);
		textAlign(CENTER);
		noStroke();
		fill(...color.graph);
		text("V/cm", base.graphX + graphMaxX, base.graphY + 30);

		// draw ticks

		for (let i = 1; i <= numTicks; i++) {
			let distanceBetween = graphMaxX / numTicks;
			let x = base.graphX + i * distanceBetween; // EDIT!!

			let y = base.graphY;
			if (x < base.x) {
				stroke(...color.graph);
				line(x, y, x, y - 5); // Draw the line

				noStroke();
				fill(...color.graph);
				text(`${i * xTickMultiplier}`, x, y + 16); // \u00B5m
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
				text(`-${i * xTickMultiplier}`, x, y + 16); // \u00B5m
			}
		}
	}

	function getPeak() {
		// Function: get highest peak of efx or efy data

		if (scaleGraphOn) {
			for (let row = 0; row < efGrid.length; row++) {
				// for every row, plot efy at specific col
				let efy = efGrid[row][hoverColumn].efy;
				let efx = efGrid[row][hoverColumn].efx;

				if (
					Math.abs(efy) > Math.abs(efPeak) &&
					(graphMode == "y" || graphMode == "both")
				) {
					efPeak = Math.abs(efy);
				}
				if (
					Math.abs(efx) > Math.abs(efPeak) &&
					(graphMode == "x" || graphMode == "both")
				) {
					efPeak = Math.abs(efx);
				}
			}
		} else {
			// if scaleGraphOn is set to false - set default efPeak to highest possible efPeak
			efPeak = 50000;
		}
	}

	function drawEFData() {
		// Function: Plots electric field data

		// draw graph legend labels
		styleText();

		// set scale
		graphScale = efPeak / graphMaxX; // divisor is pixel value beyond x axis where max will be drawn
		// get percentage of ef max compared to discrete range max
		let percent = efPeak / 1000 / maxRange; // percentage good

		// scale graphscale by percentage to graph at percentage
		graphScale = graphScale / percent;

		// graph ef in x direction
		if (graphMode == "x" || graphMode == "both") {
			let efxLabel = { x: 36, y: 280 };
			styleText();
			text("Electric field in x direction", efxLabel.x + 20, efxLabel.y + 5);
			stroke("white");
			// draw efx label
			fill(...color.efx, 160);
			circle(efxLabel.x, efxLabel.y, 20);

			// draw efx data
			stroke("white");
			fill(...color.efx, 160);

			// draw efx data
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
		}

		// graph ef in y direction
		if (graphMode == "y" || graphMode == "both") {
			let efyLabel = { x: 36, y: 310 };
			styleText();
			text("Electric field in z direction", efyLabel.x + 20, efyLabel.y + 5);

			// draw efy label
			stroke("white");
			fill(...color.efy, 160);
			circle(efyLabel.x, efyLabel.y, 20);

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
}

function drawBandDiagram() {
	beginShape();

	let subscriptAddY = 2;
	let subscriptAddX = 8;
	let eTextSize = 14;
	let subscriptTextSize = 12;

	// draw band diagram labels
	textFont("Courier New");
	textAlign(CENTER);

	noStroke();

	// Ec label
	fill(...color.electron);
	textSize(eTextSize);
	text("E", 900, 66);
	textSize(subscriptTextSize);
	text("c", 900 + subscriptAddX, 66 + subscriptAddY);

	// Ev label
	fill(...color.hole);
	textSize(eTextSize);
	text("E", 900, 106);
	textSize(subscriptTextSize);
	text("v", 900 + subscriptAddX, 106 + subscriptAddY);

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

function drawParameters() {
	// Function: Draws parameters box on upper left
	noFill();
	stroke(...color.white, 80);
	rect(0, 0, 200, 220, 8);

	let y = 20;

	for (item in parameters) {
		let name = item;
		let amount = parameters[item];

		styleText();
		fill(...color.white, 180);
		text(name, 12, y);

		fill(...color.white);
		if (item == "Source/Drain Doping Density") {
			// custom text with superscripts
			text("5x10", 12, y + 18);
			textSize(10);
			text("17", 38, y + 12);
			textSize(12);
			text("cm", 50, y + 18);
			textSize(10);
			text("-3", 66, y + 12);
		} else if (item == "Substrate Doping Density") {
			// custom text with superscripts
			text("10", 12, y + 18);
			textSize(10);
			text("16", 24, y + 12);
			textSize(12);
			text("cm", 38, y + 18);
			textSize(10);
			text("-3", 54, y + 12);
		} else {
			text(amount, 12, y + 18);
		}

		y += 42;
	}
}

function drawVDExplain() {
	/* Function: On scene 1, Draws explaination bubble after user tries to change VD 3 times  */
	if (scene(1) && triedVDChange >= 3) {
		// style bases
		fill(...color.brand, 100);
		stroke(...color.white);
		strokeWeight(1);
		canvas.drawingContext.setLineDash([]);

		rect(base.wire.leftMetal.x + 16, base.wire.leftMetal.y - 140, 184, 80, 8);
		textSize(16);
		// labels
		styleText();

		// source metal
		text(
			"The large energy barrier blocks \n the flow of electrons between \n the source and drain. ",
			base.wire.leftMetal.x + 24,
			base.wire.leftMetal.y - 140 + 24
		);
	}
}
