/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
------------------------------- */

// KEY
// !!! go back to, need to revisit
// ? question

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
	wires: [150, 150, 150],
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

// Intervals  ===================================================================
let generationInterval;
let generationRate = 4000;

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

// Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
let recombineEffects = []; // circle that appears around a recombined pair
let recombinedElectrons = []; // electron that appears briefly at recombination location
let recombinedHoles = []; // hole that appears briefly at recombination location
let recombinePositions = []; //middle position store
let recombineCount = 0; //disappear numChargesber count
let recombineDistance = 1; // distance between electron and hole required to recombine, smaller number decreases likelihood of recombination

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
	y: unit * 28,

	width: unit * 80,
	height: unit * 50,

	// metal + insulator
	metalWidth: unit * 52,
	metalHeight: unit * 6,

	// source + drain
	sourceWidth: unit * 20,
	sourceHeight: unit * 20,

	batteryHeight: 20,
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

	width: dim.width,
	height: dim.height,

	// metal + insulator
	metalX: dim.x + (dim.width - dim.metalWidth) / 2,

	metalWidth: dim.metalWidth,
	metalHeight: dim.metalHeight,
	bottomMetalHeight: 60,

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

	innerBatteryX: dim.x + dim.width / 2 - 32,
	innerBatteryY: dim.y - 160,
	batteryWidth: 65,
	outerBatteryX: dim.x + dim.width / 2 - 32,
	outerBatteryY: dim.y - 220,
	innerBatteryMidY: dim.y - 160 + dim.batteryHeight / 2,
	outerBatteryMidY: dim.y - 220 + dim.batteryHeight / 2,
};

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
		// drawControls();
	}
}

function resetScene() {
	background(...color.bg);
	fixedCharges = [];
	initCharges();
}

// Updating Functions ============================================================

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
		fixedCharges.push(new Charge(x, y, "fp"));
	}

	// drain fixed positive charges
	for (let i = 0; i < fixedPosChargesRight; i++) {
		let x = random(base.drainX + buffer, base.drainEndX - buffer);
		let y = random(base.y + buffer, base.drainEndY - buffer);
		fixedCharges.push(new Charge(x, y, "fp"));
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

		fixedCharges.push(new Charge(x, y, "fn"));
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

		let newCharge = new Charge(x, y, "h", "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		holes.push(newCharge);
	}

	for (let i = 0; i < electronCount; i++) {
		// initiate source electrons
		let x = random(base.x + buffer, base.x + base.sourceWidth - buffer);
		// let b = random(30*sy,730*sy);
		let y = random(base.y + buffer, base.y + base.sourceHeight - buffer);

		let newCharge = new Charge(x, y, "e", "i");

		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);

		// initiate drain electrons
		x = random(
			base.x + base.width - base.sourceWidth + buffer,
			base.x + base.width - buffer
		);
		// let b = random(30*sy,730*sy);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, "e", "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);
	}
}

function regenerate() {
	// // Regenerate pairs at time intervals
	// setInterval(time_graph, 0.00000000002);
	// // allow for recombine during interval
	// setInterval(toggleRecombine, 2000);

	// generate balls based on frequency
	generationInterval = setInterval(function () {
		generateCharges(1);
	}, generationRate); // scene changing T

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

		generationEffects.push(new Charge(x, y, "ge"));
		// console.log(generationEffects);
		//let xx = findClosestValue(electronLine, a);
		// let xx = findClosestValue(electronBand, a);

		let newElectron = new Charge(x, y, "e", "g");
		// aa.origin.x = xx;
		// aa.top = 1;
		electrons.push(newElectron);

		// let yy = findClosestValue(holeBand, a);

		let newHole = new Charge(x, y, "h", "g");
		// bb.origin.y = yy;
		// bb.top = 1;
		holes.push(newHole);
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
function updateCharges() {
	// recombine holes and electrons
	// recombineArrays(holes, electrons);

	// display charges
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		// fixedCharges[i].update();
	}

	for (let i = 0; i < electrons.length; i++) {
		electrons[i].display();
		electrons[i].updateAppear();
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
		holes[i].updateAppear();
		holes[i].update();

		if (holes[i].appear > 255) {
			// holes[i].straight_walk();
			// if (holes[i].position.y > 49 * sy) {
			holes[i].move();
			// }
		}
	}

	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].alpha < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// Show appear effect when electron is generated
	for (let i = 0; i < generationEffects.length; i++) {
		// console.log(i);
		// console.log(generationEffects[i]);
		generationEffects[i].display();
		generationEffects[i].updateOpacity();
	}

	// get rid of generation effect circle when it reaches 0 opacity
	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].opacity < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// get rid of recombine effect circle when it reaches 0 opacity
	for (let i = 0; i < recombineEffects.length; i++) {
		if (recombineEffects[i].opacity < 1) {
			recombineEffects.splice(i, 1);
		}
	}
}

function recombineArrays(array1, array2, num) {
	let recombineProb = 0.5;

	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			// check if electron and hole are close and they are showing, not same ID
			let condition =
				abs(array1[i].position.x - array2[k].position.x) < recombineDistance &&
				abs(array1[i].position.y - array2[k].position.y) < recombineDistance &&
				array1[i].show == 1 &&
				array2[k].show == 1 &&
				random() < recombineProb;

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
				array1[i].noShow();
				array2[k].noShow();

				// label for removal
				// if (num == 3 && num == 4) {
				// 	array1[i].deadd();
				// 	array2[k].deadd();
				// }

				recombinePositions[recombineCount] = p5.Vector.div(
					p5.Vector.add(array2[k].position, array1[i].position),
					2
				);

				//effects

				recombineEffects[recombineCount] = new Charge(
					recombinePositions[recombineCount].x,
					recombinePositions[recombineCount].y,
					"re"
				);
				recombinedElectrons[recombineCount] = new Charge(
					array1[i].position.x,
					array1[i].position.y,
					"re"
				);
				recombinedHoles[recombineCount] = new Charge(
					array2[k].position.x,
					array2[k].position.y,
					"re"
				);

				recombineCount++;

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

	// metal
	rect(
		base.metalX,
		base.y - base.metalHeight * 2,
		base.metalWidth,
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

	// ground
	image(
		groundImg,
		base.midX - 22,
		base.endY + base.bottomMetalHeight,
		batteryNegOff.width / 2,
		batteryNegOff.height
	);

	// labels
	styleText();
	textAlign(CENTER);
	text("Substrate", base.x + base.width / 2, base.y + base.height / 2);
	text("Source", base.x + base.sourceWidth / 2, base.y + base.sourceHeight / 2);
	text(
		"Drain",
		base.x + base.width - base.sourceWidth / 2,
		base.y + base.sourceHeight / 2
	);

	text("Metal", base.x + base.width / 2, base.y - base.metalHeight * 1.35);

	text(
		"Insulator",
		base.x + base.width / 2,
		base.y - (base.metalHeight / 2) * 0.75
	);

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
	// wire from source to inner battery
	beginShape();
	vertex(base.x, base.y + base.sourceHeight / 2 - wireGap); // source
	vertex(base.x - wireOffsetX, base.y + base.sourceHeight / 2 - wireGap); // corner left of source
	vertex(base.x - wireOffsetX, base.innerBatteryMidY); // top left corner
	vertex(base.innerBatteryX, base.innerBatteryMidY);
	endShape(); // battery

	// wire from source to bottom metal
	beginShape();
	vertex(base.x, base.y + base.sourceHeight / 2 + wireGap); // source
	vertex(base.x - wireOffsetX, base.y + base.sourceHeight / 2 + wireGap); // corner left of source
	vertex(base.x - wireOffsetX, base.endY + 24); // bottom left corner
	vertex(base.x, base.endY + 24); // metal
	endShape();

	// wire from inner battery to top metal
	beginShape();
	vertex(base.innerBatteryX + base.batteryWidth, base.innerBatteryMidY);
	vertex(base.innerBatteryX + 160, base.innerBatteryMidY);
	vertex(base.innerBatteryX + 160, base.y - base.metalHeight * 2);
	endShape(); // battery

	// wire from drain to bottom metal
	beginShape();
	vertex(base.endX, base.y + base.sourceHeight / 2 + wireGap); // drain
	vertex(base.endX + wireOffsetX, base.y + base.sourceHeight / 2 + wireGap); // corner right of drain
	vertex(base.endX + wireOffsetX, base.endY + 24); // bottom right corner
	vertex(base.endX, base.endY + 24); // metal
	endShape();

	// wire from source to outer battery

	// wire from outer battery to drain
	beginShape();
	vertex(base.x + base.sourceWidth / 2, base.y); // source
	vertex(base.x + base.sourceWidth / 2, base.outerBatteryMidY); // top let corner
	vertex(base.outerBatteryX, base.outerBatteryMidY);
	endShape(); // outer battery

	// wire from outer battery to drain
	beginShape();
	vertex(base.outerBatteryX + base.batteryWidth, base.outerBatteryMidY); // outer battery
	vertex(base.endX - base.sourceWidth / 2, base.outerBatteryMidY); // corner
	vertex(base.endX - base.sourceWidth / 2, base.y); // corner left of source
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
