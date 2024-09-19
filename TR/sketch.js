/* ------------------------------- 
Author: Ren Zheng
Contact: renzheng112@gmail.com
------------------------------- */

// ------------------------------------ Variables ------------------------------------
// factors for scaling drawing to fit various screen sizing
let scale_x = 1296;
let scale_y = 710;
let sx = 0;
let sy = 0;

// color variables for drawing
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	red2: [255, 40, 0],
	yellow: [255, 255, 0],
	// grey: [175, 175, 175],
	// pos: [125, 241, 148],
	// posDim: [65, 46, 46],
	// posDim: [65, 46, 46],
	// neg: [255, 247, 174],
	// negDim: [18, 66, 104],
	// sign: [31, 145, 54],
	// signDim: [50, 31, 31],
	// battery: [230, 226, 188],
	// net: [117, 190, 255],
	// neutral: [79, 79, 79],
	// scanner: [218, 107, 107],
};

const unit = 8;
// dimensions
const base = {
	x: unit * 5,
	y: unit * 16,

	width: unit * 75,
	height: unit * 38,

	// metal + insulator
	metalWidth: unit * 52,
	metalHeight: unit * 4,

	// source + drain
	sourceWidth: unit * 15,
	sourceHeight: unit * 15,
	depletionPadding: unit * 4,

	// rectangle corner radius
	smallRadius: unit,
	largeRadius: unit,
};

/**
 * Default text style
 */
function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12 * sx);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");

	// reset all variables
	resetScene();
}

function draw() {
	background(...color.bg);
	drawBase(base);
}

function resetScene() {
	background(...color.bg);
}

function drawSourceBaseDepletionRegion() {
	strokeWeight(1.2);
	stroke(...color.red2, 210);
	fill(...color.red2, 20);
	canvas.drawingContext.setLineDash([7, 3]);
	// source depletion region
	rect(
		(base.x + base.width - base.sourceWidth - base.depletionPadding) * sx,
		base.y * sy,
		(base.sourceWidth + base.depletionPadding) * sx,
		(base.sourceHeight + base.depletionPadding) * sy,
		base.smallRadius
	);
	// drain depletion region
	rect(
		base.x * sx,
		base.y * sy,
		(base.sourceWidth + base.depletionPadding) * sx,
		(base.sourceHeight + base.depletionPadding) * sy,
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
	vertex(base.x * sx, base.y * sy);
	vertex(base.x + base.width * sx, base.y * sy);
	vertex(
		base.x + base.width * sx,
		(base.y + base.sourceHeight + base.depletionPadding) * sy
	);
	vertex(
		(base.x + base.width - base.sourceWidth - base.depletionPadding) * sx,
		(base.y + base.sourceHeight + base.depletionPadding) * sy
	);
	vertex(
		(base.x + base.width - base.sourceWidth - base.depletionPadding) * sx,
		(base.y + base.depletionPadding) * sy
	);
	vertex(
		(base.x + base.sourceWidth + base.depletionPadding) * sx,
		(base.y + base.depletionPadding) * sy
	);
	vertex(
		(base.x + base.sourceWidth + base.depletionPadding) * sx,
		(base.y + base.sourceHeight + base.depletionPadding) * sy
	);
	vertex(
		base.x * sx,
		(base.y + base.sourceHeight + base.depletionPadding) * sy
	);

	endShape(CLOSE);
}

function drawChannel() {
	// source + drain + channel depletion region
	strokeWeight(1.2);
	stroke(...color.yellow, 210);
	fill(...color.yellow, 20);
	canvas.drawingContext.setLineDash([7, 3]);

	rect(
		base.x * sx,
		base.y * sy,
		base.width * sx,
		base.depletionPadding * sy,
		base.smallRadius
	);
}

function drawBase(base) {
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
	rect(
		base.x * sx,
		base.y * sy,
		base.sourceWidth * sx,
		base.sourceHeight * sy,
		base.smallRadius
	);

	// drain
	rect(
		(base.x + base.width - base.sourceWidth) * sx,
		base.y * sy,
		base.sourceWidth * sx,
		base.sourceHeight * sy,
		base.smallRadius
	);

	// insulator
	rect(
		(base.x + (base.width - base.metalWidth) / 2) * sx,
		(base.y - base.metalHeight) * sy,
		base.metalWidth * sx,
		base.metalHeight * sy,
		base.smallRadius
	);

	// metal
	rect(
		(base.x + (base.width - base.metalWidth) / 2) * sx,
		(base.y - base.metalHeight * 2) * sy,
		base.metalWidth * sx,
		base.metalHeight * sy,
		base.smallRadius
	);

	noFill();

	// substrate
	rect(
		base.x * sx,
		base.y * sy,
		base.width * sx,
		base.height * sy,
		base.largeRadius
	);

	// text
	styleText();
	textAlign(CENTER);
	text(
		"Substrate",
		(base.x + base.width / 2) * sx,
		(base.y + base.height / 2) * sy
	);
	text(
		"Source",
		(base.x + base.sourceWidth / 2) * sx,
		(base.y + base.sourceHeight / 2) * sy
	);
	text(
		"Drain",
		(base.x + base.width - base.sourceWidth / 2) * sx,
		(base.y + base.sourceHeight / 2) * sy
	);
	text(
		"Metal",
		(base.x + base.width / 2) * sx,
		(base.y - base.metalHeight * 1.35) * sy
	);
	text(
		"Insulator",
		(base.x + base.width / 2) * sx,
		(base.y - (base.metalHeight / 2) * 0.75) * sy
	);
}
