/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
------------------------------- */

// current profiles

// profiles
// vd 0.0 / vg 0.0
// vd 0.2 / vg 0.3
// vd 0.2 / vg 0.9
// vd 0.2 / vg 3.0
// vd 0.2 / vg 2.5
// vd 1.6 / vg 2.5
// vd 4.5 / vg 2.5

// band - vary_VD
// vd 0.0 / vg 0.0
// vd 0.2 / vg 2.5
// vd 1.6 / vg 2.5
// vd 4.5 / vg 2.5

// band - vary_VG
// vd 0.0 / vg 0.0
// vd 0.2 / vg 0.3
// vd 0.2 / vg 0.9
// vd 0.2 / vg 3.0

// possible vd profiles
0.0;
0.2;
1.6;
4.5;

// possible vg profiles
0.0;
0.3;
0.9;
2.5;
3.0;

// tools
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
	EFColor: [240, 228, 66],
	graph: [102, 194, 255],
	wires: [255, 255, 255],
	CDColor: [2, 104, 255], // charge density
	controls: [102, 194, 255],
	generation: [0, 158, 115],
	recom: [152, 152, 152],
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
let generationRate = 4000;
let recomRate = 4000;
let recomOn = true;
let recomDistance = 12; //distance for recom
let recomEffectsPositions = [];
let recomCount = 0;
let recomEffects = [];
let recomTempElectrons = [];
let recomTempHoles = [];

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
let vdChargeScreen = 10; // number of charges for animation for vd wire - visual representation

let beforechange = 0;

let addToMetalCharges = 0;
let removeFromMetalCharges = 0;

let stillAnimating = false;
let vgLoop = []; // contains electrons for animation
let vdLoop = []; // contains electrons for animation
let vgLoopOn = false; // toggles vg battery electron transfer
let vdLoopOn = true; // toggles vd battery electron transfer
let vgLoopAnimated = true;

let vgLoopDirection = 0; // left - pos to neg
let showMetalPosCharges = false; // show positive charges on gate
let metalPosCharges = []; // positive charges on gate when vg battery is on

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

let FermiVoltage = 0; //used to plot Ef

// Data for electric field ============================================================
let efGrid = efGrid_vd00_vg00;

// [vars] Graphing ============================================================
let currentGraph = "ef";
let EFData = [];

// [vars] Dimensions ============================================================
// base dimensions
const unit = 8;
const dim = {
	x: unit * 26,
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
	vdY: unit * 20, // outer wire
};

const controls = {
	cd: { x: 80, y: 600 },
	ef: { x: 80, y: 640 },
	bd: { x: 80, y: 680 },
	width: 80,
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

	bandY: 150,

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

// Particle test

let particles = [];
const PARTICLE_COUNT = 30;
const SQUARE_SIZE = 300;
const PARTICLE_SPEED = 8;

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

	// test particles

	// Initialize particles
	// for (let i = 0; i < PARTICLE_COUNT; i++) {
	// 	const spacing = (i / PARTICLE_COUNT) * (4 * SQUARE_SIZE);
	// 	particles[i] = new Particle(SQUARE_SIZE, spacing, PARTICLE_SPEED);
	// }
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

// function accessGrid() {
// 	// create test charge
// 	let newCharge = new Charge(35, 70, "h", 1000, "i");

// 	let row = Math.ceil(newCharge.y / 10); // 7 - 7th row
// 	let col = Math.ceil(newCharge.x / 10); // 3.5 - round up = 4th row

// 	let chargeEFX = efGrid[row][col].efx;
// 	let chargeEFY = efGrid[row][col].efy;
// }

function draw() {
	if (sceneCount >= 1) {
		scaleToWindow();

		scale(sx);
		background(...color.bg);

		if (sceneCount > 0) {
			drawBase();
			updateCharges();
			drawWires();
			drawBandDiagram();
			drawGraph();
			updateWireElectrons();
			drawMetalPosCharges();
			// if (vgLoopAnimated) {
			// 	enableControls();

			// }
			drawBandDiagram();
		}

		// test particle
		noFill();
		stroke(200);
		// rect(
		// 	windowWidth / 2 - SQUARE_SIZE / 2,
		// 	windowHeight / 2 - SQUARE_SIZE / 2,
		// 	SQUARE_SIZE,
		// 	SQUARE_SIZE
		// );

		// Update and display particles
		particles.forEach((particle) => {
			// particle.update();
			// particle.display();
		});
	}
}

function setScatter() {
	scatterInterval = setInterval(function () {
		scatter();
	}, 100); // scattring time
}

function resetScene() {
	background(...color.bg);
	updateBotz();
	setScatter();
	fixedCharges = [];
	holes = [];
	electrons = [];
	initCharges();
	regenerate();
	if (sceneCount != 2) {
		resetVDLoop();
	}

	if (sceneCount != 1) {
		resetVGLoop();
	}
	metalPosCharges = [];
	showMetalPosCharges = false;
	vdOn = true;
	// vg = 0.3;
	vgCharge = 0;
	// vd = 0.2;
	vdCharge = 0;

	vgChargeScreen = 0;
	prevVGChargeScreen = 0;
	beforechange = 0;
	updateProfile(vdCharge, vgCharge);

	// reset sliders
	let vdSlider = document.querySelector(`.vdSlider`);
	vdSlider.value = 0;

	let vgSlider = document.querySelector(`.vgSlider`);
	vgSlider.value = 0;
	toggleChargeSliders("on");

	let profileSlider = document.querySelector(`.profileSlider`);
	profileSlider.value = 1;

	// holes = [];
	// electrons = [];
	chargeID = 0;

	vgLoop = [];
	vdLoop = [];
	vgLoopOn = false;
	vdLoopOn = false;
	// vgChargeScreen = 30;
	// vdChargeScreen = 30;

	generationEffects = [];

	recomdElectrons = [];
	recomdHoles = [];
	recomPositions = [];

	recomEffectsPositions = [];
	recomCount = 0;
	recomEffects = [];
	recomTempElectrons = [];
	recomTempHoles = [];
}

// Updating Functions ============================================================

function resetVGLoop(direction) {
	prevVGCharge = 0;
	vgLoop = [];
	// metalPosCharges = [];
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
	// holes = [];
	// electrons = [];
	let holeCount = 200;
	let fixedNegCharges = holeCount / 2;
	let electronCount = 100; // source and drain each
	let fixedPosCharges = electronCount / 2;
	// holeCount = 20;
	// electronCount = 10;

	let buffer = 12; // draw inside box borders
	// let electronCount =
	// 	Math.pow(100, (Math.log10(Math.round(addedDopants / 5)) - 8) / 2) / 1000;

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
		// let b = random(30*sy,730*sy);
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
		// let b = random(30*sy,730*sy);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, "e", chargeID, "i");
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
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
}

// test generation / recombination effects
// function mouseClicked() {
// 	let x = mouseX - 100;
// 	let y = mouseY - 120;

// 	generationEffects.push(new Charge(x, y, "ge", chargeID));

// 	let newElectron = new Charge(x, y, "e", chargeID, "g");
// 	electrons.push(newElectron);

// 	let newHole = new Charge(x, y, "h", chargeID, "g");
// 	holes.push(newHole);

// 	chargeID += 1;
// }

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
	let stopPositions = [];
	stopPositions.push(createVector(base.wire.vdRight.x, base.wire.vdRight.y));
	stopPositions.push(createVector(base.wire.vdLeft.x, base.wire.vdLeft.y));
	stopPositions.push(
		createVector(base.wire.leftMetal.x, base.wire.leftMetal.y)
	);
	let stops = [1, 2, 3]; // based on stopPositions

	for (let i = 0; i < vdLoop.length; i++) {
		let electron = vdLoop[i];
		electron.draw();

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
			electron.position = createVector(
				base.wire.rightMetal.x,
				base.wire.rightMetal.y
			);
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
	// let stopPositions = [];
	// stopPositions.push(createVector(...base.wire.vgRight));
	// stopPositions.push(createVector(...base.wire.vgLeft));
	// stopPositions.push(createVector(...base.wire.leftMetal));

	// let stops = [1, 2, 3]; // based on stopPositions

	let positions = [];

	for (let i = 0; i < vgLoop.length; i++) {
		let electron = vgLoop[i];
		electron.draw();

		// let atDest1 = checkDest(electron, stopPositions[0], false);
		// let atDest2 = checkDest(electron, stopPositions[1], false);
		// let atDest3 = checkDest(electron, stopPositions[2], false);

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

			// check if done
			// if (electron.position.y > base.wire.topMetal.y - 8) {
			// 	// vgLoop.splice(i);
			// 	vgLoop[i].hide();
			// }

			// if (
			// 	electron.position.x < base.wire.vg.x &&
			// 	electron.position.y > base.wire.vgRight.y
			// ) {
			// 	electron.move(createVector(...base.wire.vgLeft));
			// } else if (electron.position.x < base.wire.vdLeft.x) {
			// 	electron.move(createVector(...base.wire.vgRight));
			// } else if (
			// 	electron.position.x > base.wire.vg.x &&
			// 	electron.position.y < base.wire.leftMetal.y
			// ) {
			// 	electron.move(createVector(...base.wire.topMetal));
			// }
			// if (
			// 	electron.position.x < base.wire.vdLeft.x + 8 &&
			// 	electron.position.y < base.wire.leftMetal.y
			// ) {
			// 	electron.move(createVector(...base.wire.vgLeft));
			// } else if (
			// 	electron.position.x < base.wire.vgRight.x &&
			// 	electron.position.y < base.wire.vgRight.y
			// ) {
			// 	electron.move(createVector(...base.wire.vgRight));
			// } else if (electron.position.x > base.wire.vgRight.x - 16) {
			// 	electron.move(createVector(...base.wire.topMetal));
			// }
		}
	}

	function onBackAnimationFinish(i) {
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				// remove from metal charges the difference in charge amount
				for (let i = 0; i < removeFromMetalCharges; i++) {
					console.log("popping i");
					metalPosCharges.pop();
					removeFromMetalCharges -= 1;
				}

				toggleChargeSliders("on");
				resetVGLoopPositions();
				vgLoopAnimated = true;
			}
		}, 1200);
		// 	setTimeout(() => {
		// 	enableControls();
		// }, vgLoop.length * 40 + 5000);
	}
	// drawMetalPosCharges();

	function onFowardAnimationFinish(i) {
		// time out length will depend on how many charges animating - not using same multiplier
		// timeoutLength = [40, 50, 60, 70];

		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				showMetalPosCharges = true;
				vgLoopAnimated = true;
				resetVGLoopPositions();
				toggleChargeSliders("on");

				// add metal charge difference
			}
		}, vgLoop.length * 60);
		// setTimeout(() => {
		// 	enableControls();
		// }, vgLoop.length * 40 + 5000);
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

function disableApplyCharge() {
	let btn = document.querySelector(`.chargeButton`);
	btn.classList.add("disabled");
	btn.disabled = true;
}

function disableVGSlider() {
	let slider = document.querySelector(`.vgSlider`);
	slider.disabled = true;
}

function enableApplyCharge() {
	let btn = document.querySelector(`.chargeButton`);
	btn.classList.remove("disabled");
	btn.disabled = false;
}

function enableVGSlider() {
	let slider = document.querySelector(`.vgSlider`);
	slider.disabled = false;
}

function toggleChargeSliders(state) {
	const chargeSliders = document.querySelectorAll(".vgSlider");
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
	if (vd == 0 && vg == 0) {
		efGrid = efGrid_vd00_vg00;
		setBand(band_vd00_vg00);
	} else if (vd == 0.2 && vg == 0.3) {
		efGrid = efGrid_vd02_vg03;
		setBand(band_vd02_vg03);
	} else if (vd == 0.2 && vg == 0.9) {
		efGrid = efGrid_vd02_vg09;
		setBand(band_vd02_vg09);
	} else if (vd == 0.2 && vg == 3.0) {
		efGrid = efGrid_vd02_vg30;
		setBand(band_vd02_vg30);
	} else if (vd == 0.2 && vg == 2.5) {
		efGrid = efGrid_vd02_vg25;
		setBand(band_vd02_vg25);
	} else if (vd == 1.6 && vg == 2.5) {
		efGrid = efGrid_vd16_vg25;
		setBand(band_vd16_vg25);
	} else if (vd == 4.5 && vg == 2.5) {
		efGrid = efGrid_vd45_vg25;
		setBand(band_vd45_vg25);
	}

	// currently: if profile is not included, nothing happens - stays on last selected valid profile
}

function updateVD(value) {
	let vdChargeMap = [0.0, 0.2, 1.6, 4.5];
	vdCharge = vdChargeMap[value];
	updateProfile(vdCharge, vgCharge);
	let vdChargeScreenMap = [0, 10, 20, 30];
	vdChargeScreen = vdChargeScreenMap[value];
	resetVDLoop();
}

function resetVDLoop() {
	// currently clears out and animates from beginning
	// able to make more continuous when Vd slider is changed?
	vdLoop = [];
	for (let i = 0; i < vdChargeScreen; i++) {
		let x = base.wire.rightMetal.x;
		// yRange is range of y used to spread out the charges during animation
		// yRange is divided by vdChargeScreen to determine how spread out charges are
		let yRange = 900;
		let y = base.wire.rightMetal.y + i * (yRange / vdChargeScreen);

		vdLoop.push(new wireCharge(x, y, "vd"));
	}
}

function resetMetalCharges() {
	// console.log("in resetmetalcharges");
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
	prevVGChargeScreen = beforechange;

	let valueToChargeMap = [0.0, 0.3, 0.9, 2.5, 3.0];
	vgCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);

	vgChargeScreen = getVGChargeScreen(vgCharge);

	vgLoop = [];

	// applyCharge();

	vgLoopAnimated = false;

	beforechange = vgChargeScreen;

	if (prevVGChargeScreen == 0) {
		// console.log("prev 0 now > 0");
		// previously 0, now > 0
		//1 on paper
		vgLoopDirection = 0;
		resetMetalCharges();
	} else if (prevVGChargeScreen > 0 && beforechange == 0) {
		// previously > 0, now 0
		// console.log("// previously > 0, now 0");
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen; //whatever previous was
		removeFromMetalCharges = vgChargeScreen;
	} else if (prevVGChargeScreen < beforechange) {
		// console.log("// previously smaller, now larger");
		// previously smaller, now larger
		vgLoopDirection = 0;
		vgChargeScreen = vgChargeScreen - prevVGChargeScreen;

		addToMetalCharges = vgChargeScreen;
	} else if (prevVGChargeScreen > beforechange) {
		// console.log("// previously larger, now smaller");
		// previously larger, now smaller
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen - vgChargeScreen;

		// remove some move metal
		removeFromMetalCharges = vgChargeScreen;
		// console.log("removefrommetalcharges", removeFromMetalCharges);
	}
	toggleChargeSliders("off");
	resetVGLoop(vgLoopDirection);
	// console.log("resetted vgLoop");
	// disableApplyCharge();
	disableVGSlider();

	// resetVGLoopPositions();

	function getVGChargeScreen(vgChargeActual) {
		// maps actual vg amount to vg to # electrons animated on the screen
		let chargeMap = {
			0.0: 0,
			0.3: 5,
			0.9: 10,
			2.5: 15,
			3.0: 20,
		};

		return chargeMap[vgChargeActual];
	}
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
			// if (electrons[i].position.y > 49 * sy) {
			electrons[i].update();
			// }
		}
	}

	for (let i = 0; i < holes.length; i++) {
		holes[i].draw();
		holes[i].updateOpacity();

		if (holes[i].appear > 20) {
			// holes[i].straight_walk();
			// if (holes[i].position.y > 49 * sy) {
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

// function recomArrays(array1, array2, num) {
// 	let recomProb = 0.5;

// 	for (let i = 0; i < array1.length; i++) {
// 		for (let k = 0; k < array2.length; k++) {
// 			// check if electron and hole are close and they are show, not same ID
// 			let condition =
// 				abs(array1[i].position.x - array2[k].position.x) < recomDistance &&
// 				abs(array1[i].position.y - array2[k].position.y) < recomDistance &&
// 				array1[i].show == 1 &&
// 				array2[k].show == 1 &&
// 				random() < recomProb;

// 			if (condition) {
// 				// stop the electron & hole
// 				array1[i].stop();
// 				array2[k].stop();

// 				// set to no show
// 				array1[i].hide();
// 				array2[k].hide();

// 				recomPositions.push(
// 					p5.Vector.div(
// 						p5.Vector.add(array2[k].position, array1[i].position),
// 						2
// 					)
// 				);

// 				//effects
// 				recomEffects.push(
// 					new Charge(
// 						recomPositions[recomCount].x,
// 						recomPositions[recomCount].y,
// 						"re",
// 						chargeID
// 					)
// 				);
// 				recomdElectrons.push(
// 					new Charge(array1[i].position.x, array1[i].position.y, "re", chargeID)
// 				);
// 				recomdHoles.push(
// 					new Charge(array2[k].position.x, array2[k].position.y, "re", chargeID)
// 				);

// 				// recomPositions[recomCount] = p5.Vector.div(
// 				// 	p5.Vector.add(array2[k].position, array1[i].position),
// 				// 	2
// 				// );

// 				// //effects
// 				// recomEffects[recomCount] = new Charge(
// 				// 	recomPositions[recomCount].x,
// 				// 	recomPositions[recomCount].y,
// 				// 	"re",
// 				// 	chargeID
// 				// );
// 				// recomdElectrons[recomCount] = new Charge(
// 				// 	array1[i].position.x,
// 				// 	array1[i].position.y,
// 				// 	"re",
// 				// 	chargeID
// 				// );
// 				// recomdHoles[recomCount] = new Charge(
// 				// 	array2[k].position.x,
// 				// 	array2[k].position.y,
// 				// 	"re",
// 				// 	chargeID
// 				// );
// 				// recomCount++;
// 				break;
// 			}
// 		}
// 	}
// }

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

	// if (scatterCount == 0) {
	// 	let scatteringCountInput = 20; // test timing for scatter count
	// 	scatterCount = parseInt(scatteringCountInput) + 2;
	// }

	/////////Note from Azad
	///We need to add the code that once scatterCount == 0 randomizes the velocity for all electreons and holes from scattering() in MOSCAP here. I have copied the code here in comments
	//// Christina had intial and generated electrons and holes in different arrays
	//// movingVelocity is the speed without direction (just a number)
	//// direction is a vector that shows the relative values of the speeds in the x and y direction. For example, (1,1) means velocity in 45 degree angle. Although I just notice that we need to normalize this vector so that it does not affect the speed.
	//////////////
	// function moveCharges(chargeArray, band) {
	// 	for (let i = 0; i < chargeArray.length; i++) {
	// 		chargeArray[i].botz =
	// 			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
	// 		// let closestToBand = findClosestValue(band, chargeArray[i].position.x);
	// 		// chargeArray[i].bandOrigin.y = closestToBand;
	// 		chargeArray[i].movingVelocity = chargeArray[i].botz;
	// 		chargeArray[i].direction = createVector(random(-1, 1), random(-1, 1));
	// 		chargeArray[i].velocity = p5.Vector.mult(
	// 			chargeArray[i].direction,
	// 			chargeArray[i].movingVelocity
	// 		);
	// 	}
	// }

	if (scatterCount == 0) {
		// let electronBand;
		// moveCharges(electrons, electronBand);
		// moveCharges(holes, electronBand);
		// moveCharges(initHoles, holeBand);
		// moveCharges(genHoles, holeBand);
		scatterCount = parseInt(20) + 2;
	}

	///////////////
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

		stroke(...color.wires);
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

		stroke(...color.wires);
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

function drawGraph() {
	drawAxes();
	drawLineOver();
	drawEFData();
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

	function drawEFData() {
		//////////////////////////////////////////////////// draw E-field graph on second graph when switch is On, and draw charge density graph when not clicked switch
		noStroke();

		fill(218, 112, 214, 100);
		// if (electronBand_data_v1.length > 0) {
		// if (appliedVoltage > 0 || appliedVoltage < 0) {
		beginShape();

		vertex(250 * sx, (385 / 2 + 98) * sy);

		// draw electric field graph
		// Add all points as curve vertices
		// for (let i = 0; i < EFData.length; i++) {
		// 	let x = EFData[i].x;
		// 	let y =
		// 		10 * (EFData[i].y / Math.pow(10, 6)) * (40 / 1530) * 500 * sy +
		// 		(385 / 2 + 98) * sy;
		// 	// let y =
		// 	// 	(EFData[i].y / Math.pow(10, 4)) * 2 +
		// 	// 	(385 / 2 + 96.25) * sy;

		// 	vertex(x, y);
		// }
		// vertex(
		// 	EFData[bandData.length - 2].x,
		// 	EFData[bandData.length - 2].y / Math.pow(10, 6) + (385 / 2 + 98) * sy
		// );

		endShape();
	}
}

function drawBandDiagram() {
	// draw band threshold - where hole charges show up on band
	// line(
	// 	base.x,
	// 	base.y + base.bandThreshold,
	// 	base.endX,
	// 	base.y + base.bandThreshold
	// );

	beginShape();

	let subscriptAddY = 2;
	let subscriptAddX = 8;
	let eTextSize = 14;
	let subscriptTextSize = 12;

	// draw band diagram labels
	textFont("Courier New");

	noStroke();

	// Ec label
	fill(...color.electron); // negative color
	textSize(eTextSize * sx);
	text("E", 920 * sx, 75 * sy);
	textSize(subscriptTextSize * sx);
	text("c", (920 + subscriptAddX) * sx, (75 + subscriptAddY) * sy); // subscript

	// Ev label
	fill(...color.hole); // positive color
	textSize(eTextSize * sx);
	text("E", 920 * sx, 118 * sy);
	textSize(subscriptTextSize * sx);
	text("v", (920 + subscriptAddX) * sx, (118 + subscriptAddY) * sy);

	textSize(12 * sx);

	noFill();
	strokeWeight(1);
	//Draw E_f

	noFill();
	stroke(...color.electron);
	strokeWeight(1.5);

	let bandLength = 62;

	// populate
	for (var k = 0; k < bandLength; k++) {
		// let x1 = 17;
		// let x2 = 349;
		// let y1 = 0;
		// let y2 = 679;
		// let a = (y2 - y1) / (x2 - x1);
		// let b = y1 - a * x1;
		// let y = a * bandData[k] + b;

		// vertex drawn from bandData
		// curveVertex(base.x + y, base.bandY + bandData[k] * 40 - 100);
		// curveVertex(base.x + y, base.bandY + bandData[k] * 40 - 100);

		let vertexX = base.x + (base.width / bandLength) * k;
		let vertexY = base.bandY - bandData[k] * 40 - 100;
		curveVertex(vertexX, vertexY);

		// electronBand[k] = [base.x + y, base.bandY + bandData[k] * (40 / 1.2) - 100];
		electronBand[k] = [vertexX, vertexY];

		//}
	}
	endShape();

	//draw hole curve
	stroke(...color.hole);
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		//hole curve
		let x1 = 17;
		let x2 = 349;
		let y1 = 0;
		let y2 = 679;
		let a = (y2 - y1) / (x2 - x1);
		let b = y1 - a * x1;
		let x = a * xPositionData[k] + b;

		let ver;

		let vertexX = base.x + (base.width / bandLength) * k;
		let vertexY = base.bandY - bandData[k] * 40;
		let bandGap = -60;

		curveVertex(vertexX, vertexY + bandGap);
		holeBand[k] = [vertexX, vertexY + bandGap];
		// curveVertex(base.x + x, -30 + base.bandY + bandData[k] * 40 - 30);
		// holeBand[k] = [base.x + x, base.bandY + bandData[k] * (40 / 1.2) - 60];
	}
	endShape();
	noStroke();
	strokeWeight(1);

	// calculate electric field
	for (let i = 0; i < bandLength - 1; i++) {
		let y =
			((bandData[i + 1] - bandData[i]) /
				(xPositionData[i + 1] - xPositionData[i])) *
			Math.pow(10, 7);
		EFData[i] = { x: electronBand[i][0], y: y };
	}
}
