/* ------------------------------- 
Author: Christina Wu, Ren Zheng
Contacts: renzheng112@gmail.com
------------------------------- */

// tools
function qs(selector) {
	return document.querySelector(selector);
}

function scene(num) {
	return sceneCount == num;
}

// Scaling
let scale_x = 1440;
let scale_y = 789;

let sx;
let sy;

// Colors
const color = {
	bg: [18, 18, 18],
	blue: [102, 194, 255],
	pink: [218, 112, 214],
	pink2: [200, 146, 182],
	electricFieldOpacity: 50,
	chargeDensityOpacity: 100,
	white: [255],
	black: [0],
	black2: [30],
	red: [255],
	red2: [255, 40, 0],
	green: [125, 241, 148],
	greenBright: [0, 255, 0],
	yellow: [254, 246, 182],
};

// Variables

let fixedCharges = []; // fixed positive + negative charges

// Electrons & Holes
let initialHoles = []; // holes that exist when scene starts
let initialElectrons = []; // electrons that exist when scene starts
let generatedElectrons = []; // electrons that are generated // previously whiteArray_e
let generatedHoles = []; // holes that are generated // blackArray_h

// Effects for generation & recombination
let generationEffects = []; // circle that appears around a generated pair
let recombineEffects = []; // circle that appears around a recombined pair
let recombineEffects_dot = []; // IDK
let recombinedElectrons = []; // electron that appears briefly at recombination location
let recombinedHoles = []; // hole that appears briefly at recombination location

// Factors
var voltageDepletionWidth = 0; // previously count_pn_num
let recombineDistance = 1; // distance between electron and hole required to recombine, smaller number decreases likelihood of recombination
let appliedVoltage = 0; // previously v_applied_p

// Data for graphing
let electronConcentrationData = []; // previously new_electronConcentrationPlotset_count
let holeConcentrationData = []; // previously new_holeConcentrationPlotset_count

let chargeDensityLeftData = []; // previously new_array_rou_e_set
let chargeDensityRightData = []; // previously new_array_rou_h_set

let switchGraph = false; //turn on or off the switch between charge density and electric field graph

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var timnumPositiveFixedCharges_graph = 0;
let bandDiagramVScale = 1;
let cc = 0;
let generationRate = 4000; // generation rate
let e_field_c = 0; //electric field factor
let rect_density; // earlier???
let dopingConcentration_new; //for getting added dopants number
let factor_new = 1; //factor for applied voltage

//fraction
//donor
let n_c;
let fractionElectron = [];
let fractionElectronlectronCount;
let fractionElectronlectronCount_t;
let dif_e; //difference in freeze count
let dif_e_current; //difference in freeze difference count and existing paired e count

//acceptor

let new_generate = 6;

//eletron hole

// var generationRate;
var currentnumPositiveFixedCharges = 0;
var recombinationRate = 1;

var timnumPositiveFixedCharges = 0;

let x_probability;
let x_probability_time;

let chargeID = 0;

let switch_1 = 0;
let recombine = 1;

let change_square = -30; //change square dimension
let change_length = 100 + change_square; //change square length dimension

let temp = 270; //set temperature

let ni_s1;
let baseBand = [];
let electronBand = [];
let holeBand = [];
// let random_botz = [];

let generationRateInterval;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

let interval_pn = 100;

let interval_s = 1000;

var run1;
var run45;
var run3;

// var count_pn;

let button_reset; //reset button

let middle_position_Array = []; //middle position store
let zap_count = 0; //disappear number count

let electron_add = 0; //added electron number
let dopingConcentration = 0; //added hole number

var timnumPositiveFixedCharges = 0;

var timnumPositiveFixedCharges_blink = 100;

let random_direction;

var blink;
let interval_blink = 1000;

var scatteringInterval; //scattering interval

let count_n = 0; // ???

let scattering_velocity;
let scatteringIntervalount = 0;
let scatteringIntervalount_c = 0;

let willScatter = false; // previously scatter_tf

let context;
let test_num = 10;

let point_count = 200;

let electronConcentrationPlot = [];
let holeConcentrationPlot = [];
let electronConcentrationPlot0 = [];
let holeConcentrationPlot0 = [];

let array_graph_current = []; //set concentration
let initialDepletionWidth;

let test_current_scale = 3;
let test_x_scale = 0.2;

let electronLine = [];
let holeLine = [];

let electronLineData = new Array(100).fill(...color.black);
let holeLineData = [];

let electronConcentrationPlotset;
let electronConcentrationPlot0_set;
let holeConcentrationPlotset;
let holeConcentrationPlot0_set;

let NumXAxisTicks = 6;

let run11;
let run_outer;

// Switch from Charge Density graph to Electric Field graph
function mouseClicked() {
	// true: Electric Field
	// false: Charge Density

	// text("Charge Density", 160 * sx, 223 * sy);
	// text(" / ", 260 * sx, 223 * sy);
	// text("Electric Field", 273 * sx, 223 * sy);

	// charge density
	// if (abs(160 * sx - mouseX) < 30 * sx && abs(223 * sy - mouseY) < 9 * sy)

	// charge density button clicked
	if (
		abs(mouseX) > 160 * sx &&
		abs(mouseX) < 160 + 76 * sx &&
		abs(mouseY) > 200 * sy &&
		abs(mouseY) < (223 + 20) * sy
	) {
		if (switchGraph == true) switchGraph = false;
		// else switchGraph = true;
	}
	// electric field button clicked
	else if (
		abs(mouseX) > 273 * sx &&
		abs(mouseX) < 273 + 70 * sx &&
		abs(mouseY) > 200 * sy &&
		abs(mouseY) < (223 + 10) * sy
	) {
		if (switchGraph == false) switchGraph = true;
		// else switchGraph = false;
	}

	// if (abs(910 * sx - mouseX) < 30 * sx && abs(377 * sy - mouseY) < 9 * sy) {
	// 	if (switchGraph == true) switchGraph = false;
	// 	else switchGraph = true;
	// }
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

function setup() {
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();
	onRefresh();

	sceneCount = 0;
	goToHole = [];
	random_hole = [];
	random_direction = [];

	xLimit = int(width / 180);
	yLimit = int(height / 180);

	regenerate();
}

function regenerate() {
	// Regenerate pairs at time intervals
	setInterval(time_graph, 0.00000000002);
	// allow for recombine during interval
	setInterval(toggleRecombine, 2000);

	// generate balls based on frequency
	run45 = setInterval(function () {
		generateCharges(1);
	}, interval_45); // scene changing T

	// generate balls straight
	run11 = setInterval(function () {
		generateCharges_straight(1);
	}, 2000); // scene changing T

	run_outer = setInterval(function () {
		generateCharges_outer(1);
	}, 1000 / new_generate); // scene changing T

	count_pn = setInterval(function () {
		count_pn_f();
	}, interval_pn);

	// blink = setInterval(function () {
	// 	blinking();
	// }, interval_blink); // blinking

	scatteringInterval = setInterval(function () {
		scattering();
	}, 50); // scattring time
}
function drawOutlines() {
	stroke(...color.green, 100);
	strokeWeight(1);

	noFill();

	// third box outline (pn junction)
	rect(
		(10 + 100 + 70 + change_square) * sx,
		(10 + 385) * sy,
		(940 - change_length - 70) * sx,
		(770 / 2) * sy
	);

	fill(...color.black2);

	// top box outline (band diagram)
	rect(
		(10 + 100 + 70 + change_square) * sx,
		10 * sy,
		(940 - change_length - 70) * sx,
		(770 / 4) * sy
	);

	// middle box outline (charge density / electric field)
	rect(
		(10 + 100 + 70 + change_square) * sx,
		(10 + 385 / 2) * sy,
		(940 - change_length - 70) * sx,
		(770 / 4) * sy
	);

	noFill();
}

function recombineArrays() {
	function checkRecombines() {
		let arraysToCompare = [
			[initialElectrons, initialHoles, 1],
			[initialElectrons, generatedHoles, 2],
			[generatedElectrons, initialHoles, 3], // includes deadd functions
			[generatedElectrons, generatedHoles, 4], // includes deadd functions
		];

		for (let i = 0; i < arraysToCompare.length; i++) {
			zap(arraysToCompare[i][0], arraysToCompare[i][1], arraysToCompare[i][2]);
		}
	}
	if (scene(1) && recombine == 0) {
		checkRecombines();
	} else if (scene(2) && recombine == 1) {
		checkRecombines();
	} else if (scene(3) && recombine == 1) {
		checkRecombines();
	}
}

function zapLoopsIDK() {
	for (let i = 0; i < generatedElectrons.length; i++) {
		if (generatedElectrons[i].dead == 0) {
			generatedElectrons[i].display();
			generatedElectrons[i].appear_update();
			generatedElectrons[i].update();

			if (generatedElectrons[i].appear > 255) {
				generatedElectrons[i].random_walk();
			}
		}
	}

	function clearOut(arrayToClean) {
		for (let i = arrayToClean.length - 1; i >= 0; i--) {
			if (arrayToClean[i].show == 0) {
				arrayToClean.splice(i, 1);
			}
		}
	}

	clearOut(generatedElectrons);
	clearOut(initialElectrons);
	clearOut(generatedHoles);
	clearOut(initialHoles);

	for (let i = 0; i < generatedHoles.length; i++) {
		if (generatedHoles[i].dead == 0) {
			generatedHoles[i].display();
			generatedHoles[i].appear_update();
			generatedHoles[i].update();

			if (generatedHoles[i].appear > 255) {
				generatedHoles[i].random_walk();
			}
		}
	}

	for (let i = 0; i < initialHoles.length; i++) {
		initialHoles[i].display();
		initialHoles[i].appear_update();
		initialHoles[i].update();

		if (initialHoles[i].appear > 255) {
			initialHoles[i].straight_walk();
			if (initialHoles[i].position.y > 49 * sy) {
				initialHoles[i].random_walk();
			}
		}
	}

	for (let i = 0; i < initialElectrons.length; i++) {
		initialElectrons[i].display();
		initialElectrons[i].appear_update();
		initialElectrons[i].update();

		if (initialElectrons[i].appear > 255) {
			initialElectrons[i].straight_walk();
			if (initialElectrons[i].position.y > 49 * sy) {
				initialElectrons[i].random_walk();
			}
		}
	}

	for (let i = 0; i < recombineEffects.length; i++) {
		if (typeof recombineEffects[i] != "undefined") {
			if (recombineEffects[i].alpha < 1) {
				recombineEffects.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < recombinedHoles.length; i++) {
		if (typeof recombinedHoles[i] != "undefined") {
			if (recombinedHoles[i].zap < 1) {
				recombinedHoles.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].alpha < 1) {
			generationEffects.splice(i, 1);
		}
	}

	for (let i = 0; i < recombinedElectrons.length; i++) {
		if (typeof recombinedElectrons[i] != "undefined") {
			if (recombinedElectrons[i].zap < 1) {
				recombinedElectrons.splice(i, 1);
			}
		}
	}

	// Show appear effect when electron is generated
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].display();
		generationEffects[i].update();
	}

	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		fixedCharges[i].update();
	}

	// see outer circle effect when pair is recombined
	for (let i = 0; i < recombineEffects.length; i++) {
		if (typeof recombineEffects[i] != "undefined") {
			recombineEffects[i].display();
			recombineEffects[i].update();
		}
	}

	// IDK for dot is for
	for (let i = 0; i < recombineEffects_dot.length; i++) {
		if (typeof recombineEffects[i] != "undefined") {
			recombineEffects_dot[i].display();
		}
	}

	// new  double circle
	// see outer circle + electron
	for (let i = 0; i < recombinedElectrons.length; i++) {
		if (typeof recombinedElectrons[i] != "undefined") {
			recombinedElectrons[i].display();
			recombinedElectrons[i].update_circle();
			recombinedElectrons[i].update_location();
		}
	}

	// see outer circle + hole
	for (let i = 0; i < recombinedHoles.length; i++) {
		if (typeof recombinedHoles[i] != "undefined") {
			recombinedHoles[i].display();
			recombinedHoles[i].update_circle();
			recombinedHoles[i].update_location();
		}
	}

	for (let i = 0; i < recombinedHoles.length; i++) {
		if (typeof recombinedHoles[i] != "undefined") {
			for (let k = 0; k < recombinedElectrons.length; k++) {
				if (typeof recombinedElectrons[k] != "undefined") {
					if (recombinedHoles[i].id == recombinedElectrons[k].id) {
						recombinedElectrons[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									recombinedElectrons[k].position,
									recombinedHoles[i].position
								),
								2
							)
						);
						recombinedHoles[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									recombinedElectrons[k].position,
									recombinedHoles[i].position
								),
								2
							)
						);
					}
				}
			}
		}
	}
}

function drawScene3GraphLines() {
	//plot graph///////////////
	///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
	noFill();
	//coordinates
	//up
	stroke(...color.blue, 180);
	//horizon
	line(
		190 * sx,
		171.25 * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		171.25 * sy
	);
	//vertical
	line(190 * sx, 40 * sy, 190 * sx, 171.25 * sy);
	//arrow up right
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * sx,
		(171.25 + 3) * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		171.25 * sy
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * sx,
		(171.25 - 3) * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		171.25 * sy
	);
	//arrow up up
	line(
		(10 +
			100 +
			70 +
			change_square +
			940 -
			change_length -
			70 -
			760 -
			20 -
			3 +
			20) *
			sx,
		46 * sy,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20 + 20) *
			sx,
		40 * sy
	);
	line(
		(10 +
			100 +
			70 +
			change_square +
			940 -
			change_length -
			70 -
			760 -
			20 +
			3 +
			20) *
			sx,
		46 * sy,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20 + 20) *
			sx,
		40 * sy
	);
	//down
	//horizon
	line(
		190 * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	//vertical
	line(
		190 * sx,
		(10 + 385 / 2 + 96.25 - 70) * sy,
		190 * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	//arrow up
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * sx,
		(10 + 385 / 2 + 96.25 + 3 + 70) * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * sx,
		(10 + 385 / 2 + 96.25 - 3 + 70) * sy,
		(10 + 100 + 70 + change_square + 790) * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	//arrow down up
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760) * sx,
		(10 + 385 / 2 + 96.25 - 70) * sy,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 3) * sx,
		(10 + 385 / 2 + 96.25 - 60 - 5) * sy
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760) * sx,
		(10 + 385 / 2 + 96.25 - 70) * sy,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 + 3) * sx,
		(10 + 385 / 2 + 96.25 - 60 - 5) * sy
	);
}
function drawGraph() {
	noFill();
	stroke(...color.blue, 180);

	// ////////////new
	// graph x axis
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 + 30) * sx,
		(10 + 385 / 2 + 96.25) * sy,
		(10 + 100 + 70 + change_square + 790 - 30) * sx,
		(10 + 385 / 2 + 96.25) * sy
	);
	// graph y axis
	line(
		(10 + 100 + 70 + change_square + (940 - change_length - 70) / 2) * sx,
		(10 + 385 / 2 + 30) * sy,
		(10 + 100 + 70 + change_square + (940 - change_length - 70) / 2) * sx,
		(10 + 385 / 2 + 770 / 4 - 30) * sy
	);

	// graph +x axis ticks
	for (let i = 0; i < NumXAxisTicks; i++) {
		let x = 550 * sx + ((400 / 8) * sx * i + (400 / 8) * sx);
		let y = (10 + 385 / 2 + 96.25) * sy;
		line(x, y, x, y - 5 * sy); // Draw the line
	}

	// graph -x axis ticks
	for (let i = 0; i < NumXAxisTicks; i++) {
		let x = 550 * sx - (400 / 8) * sx * i - (400 / 8) * sx;
		let y = (10 + 385 / 2 + 96.25) * sy;
		line(x, y, x, y - 5 * sy); // Draw the line
	}

	if (switchGraph == false) {
		// Electric Field
		// graph -y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * sx;
			let y = (10 + 385 / 2 + 96.25) * sy + 12.5 * sy + 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		// graph +y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * sx;
			let y = (10 + 385 / 2 + 96.25) * sy - 12.5 * sy - 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		noStroke();
		fill(...color.blue);
		textSize(10 * sx);
		text("20 μC/cm\u00B3", 560 * sx, 252 * sy);
		text("-20 μC/cm\u00B3", 560 * sx, 351 * sy);
	} else {
		// Charge Density
		// graph -y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * sx;
			let y =
				(10 + 385 / 2 + 96.25) * sy +
				(40 / 1530) * 500 * sy +
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		// graph +y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * sx;
			let y =
				(10 + 385 / 2 + 96.25) * sy -
				(40 / 1530) * 500 * sy -
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		noStroke();
		fill(...color.blue);
		textSize(10 * sx);
		text("2000 V/cm", 560 * sx, 249 * sy);
		text("-2000 V/cm", 560 * sx, 353 * sy);
	}

	noStroke();
	fill(...color.blue);
	textSize(10 * sx);
	text("5 \u00B5m", 790 * sx, 313 * sy);
	text("-5 \u00B5m", 290 * sx, 313 * sy);

	textSize(17);
	noStroke();
	strokeWeight(1);

	fill(...color.blue);

	textSize(14 * sx);

	text("Band Diagram", 160 * sx, 30 * sy);
	text("Charge Density", 160 * sx, 223 * sy);
	text(" / ", 260 * sx, 223 * sy);
	text("Electric Field", 273 * sx, 223 * sy);

	if (switchGraph) {
		fill(...color.pink, color.electricFieldOpacity);
		rect(271 * sx, 210 * sy, 85 * sx, 18 * sy, 5 * sy, 5 * sy);
	} else {
		fill(...color.yellow, color.chargeDensityOpacity);
		rect(158 * sx, 210 * sy, 100 * sx, 18 * sy, 5 * sy, 5 * sy);
	}

	noStroke();
	fill(...color.blue);

	if (voltageDepletionWidth >= initialDepletionWidth) {
		text("Equilibrium", 760 * sx, 223 * sy);
	}
}

function setVoltageDepletionWidth() {
	// previously setCountPN
	voltageDepletionWidth = initialDepletionWidth;

	let ratio =
		-appliedVoltage / 10 / (1.6 * Math.pow(10, -13) * dopingConcentration_new);

	voltageDepletionWidth = initialDepletionWidth * (1 + ratio);
}

function setInitialDepletionWidth() {
	// previously setX_n
	initialDepletionWidth =
		5811 *
		Math.pow(
			Math.log(dopingConcentration_new / Math.pow(10, 10)) /
				(Math.pow(10, 6) * dopingConcentration_new),
			1 / 2
		) *
		Math.pow(10, 6);
}

function drawDepletionRegion() {
	// Draw Depletion region
	stroke(...color.red2, 210);
	context.beginPath();
	context.setLineDash([10, 10]);
	context.rect(
		(550 - (400 / 8) * voltageDepletionWidth) * sx,
		(10 + 385) * sy,
		(400 / 8) * voltageDepletionWidth * 2 * sx,
		(770 / 2) * sy
	);
	context.closePath();
	context.stroke();
	context.setLineDash([]);
}

// scene 3
function countConcentration() {
	if (switch_1 == 2) {
		// Reset the arrays to be empty before starting the counting
		electronConcentrationPlot = new Array(point_count).fill().map(() => []);
		electronConcentrationPlot0 = [];
		holeConcentrationPlot = new Array(point_count).fill().map(() => []);
		holeConcentrationPlot0 = [];
		for (let i = 0; i < generatedElectrons.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					generatedElectrons[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * sx &&
					generatedElectrons[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * sx
				) {
					electronConcentrationPlot[k].push(generatedElectrons[i]);
				}
			}

			if (
				generatedElectrons[i].position.x <= 190 * sx &&
				generatedElectrons[i].position.x >= 150 * sx &&
				generatedElectrons[i].show == 1
			) {
				electronConcentrationPlot0.push(generatedElectrons[i]);
			}
		}

		for (let i = 0; i < initialElectrons.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					initialElectrons[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * sx &&
					initialElectrons[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * sx
				) {
					electronConcentrationPlot[k].push(initialElectrons[i]);
				}
			}

			if (
				initialElectrons[i].position.x <= 190 * sx &&
				initialElectrons[i].position.x >= 150 * sx &&
				initialElectrons[i].show == 1
			) {
				electronConcentrationPlot0.push(initialElectrons[i]);
			}
		}

		for (let i = 0; i < generatedHoles.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					generatedHoles[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * sx &&
					generatedHoles[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * sx
				) {
					holeConcentrationPlot[k].push(generatedHoles[i]);
				}
			}

			if (
				generatedHoles[i].position.x <= 190 * sx &&
				generatedHoles[i].position.x >= 150 * sx &&
				generatedHoles[i].show == 1
			) {
				holeConcentrationPlot0.push(generatedHoles[i]);
			}
		}

		// initialHoles

		for (let i = 0; i < initialHoles.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					initialHoles[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * sx &&
					initialHoles[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * sx
				) {
					holeConcentrationPlot[k].push(initialHoles[i]);
				}
			}

			if (
				initialHoles[i].position.x <= 190 * sx &&
				initialHoles[i].position.x >= 150 * sx &&
				initialHoles[i].show == 1
			) {
				holeConcentrationPlot0.push(initialHoles[i]);
			}
		}

		// Reset the arrays to be empty before starting the counting
		electronConcentrationPlotset = new Array(point_count).fill().map(() => []);
		electronConcentrationPlot0_set = [];
		holeConcentrationPlotset = new Array(point_count).fill().map(() => []);
		holeConcentrationPlot0_set = [];
		electronConcentrationData = [];

		for (let k = -72; k < Math.round(-voltageDepletionWidth * 10); k++) {
			let x = k;

			let n =
				Math.pow(10, 20) / dopingConcentration_new +
				(Math.pow(10, 20) / dopingConcentration_new) *
					(Math.exp(appliedVoltage / 40 / 0.026) - 1) *
					Math.exp(k / 10 + voltageDepletionWidth);

			electronConcentrationData.push({ x: x, y: n * 1 });
		}

		noStroke();
		strokeWeight(1);

		fill(...color.blue);

		textSize(14);

		for (let i = 0; i < electronConcentrationData.length; i++) {
			// Get the first and last 'y' values
			const firstY = electronConcentrationData[0].y;
			const lastY =
				electronConcentrationData[electronConcentrationData.length - 1].y;

			// Find the maximum 'y' value
			const maxYY = Math.max(firstY, lastY);
			const minYY = Math.min(firstY, lastY);

			// Determine the order of magnitude of the maxY value
			const orderOfMagnitude = Math.floor(Math.log10(maxYY));

			// The factor is 10 to the power of (order of magnitude - 1)
			const factor_ = Math.pow(10, orderOfMagnitude - 1);

			fill(...color.white);

			fill(...color.blue);

			// Calculate the y-coordinates for the tick marks
			if (appliedVoltage != 0) {
				const diff = maxYY - minYY;
				const scale = (171.25 - 55) / diff;
				const tickMarks = calculateTickMarks(minYY, maxYY);

				// Render text for minYY
				const minYTickY = 171.25 * sy - scale * (minYY - minYY);

				for (const tick of tickMarks) {
					const tickY = 171.25 * sy - scale * (tick - minYY);
					if (tick === minYY) {
						// Skip the minimum value for tick mark
					} else {
						// Draw the tick mark
						noFill();
						stroke(...color.blue, 120);
						line(190 * sx, tickY, 197 * sx, tickY);
						line(190 * sx, tickY + 197.5 * sy, 197 * sx, tickY + 197.5 * sy);

						// Add a label for the tick mark
						noStroke();
						fill(...color.blue, 10);
						text(tick.toExponential(1) + "  /cm\u00B3", 212 * sx, tickY + 5);
						text(
							tick.toExponential(1) + "  /cm\u00B3",
							212 * sx,
							tickY + 5 + 197.5 * sy
						);
					}
				}
			}
		}

		// Reset the arrays to be empty before starting the counting
		electronConcentrationPlotset = new Array(point_count).fill().map(() => []);
		electronConcentrationPlot0_set = [];
		holeConcentrationPlotset = new Array(point_count).fill().map(() => []);
		holeConcentrationPlot0_set = [];
		holeConcentrationData = [];

		for (let k = Math.round(voltageDepletionWidth * 10); k < 80; k++) {
			let x = k;

			let n =
				Math.pow(10, 20) / dopingConcentration_new +
				(Math.pow(10, 20) / dopingConcentration_new) *
					(Math.exp(appliedVoltage / 40 / 0.026) - 1) *
					Math.exp(-(k / 10 - voltageDepletionWidth));

			holeConcentrationData.push({ x: x, y: n * 1 });
		}
	}
}

function drawElectricFieldData() {
	noFill();

	fill(...color.pink, 100);

	// E- field data
	if (switchGraph == true) {
		if (scene(1)) {
			triangle(
				(550 - (400 / 8) * voltageDepletionWidth) * sx,
				(10 + 385 / 2 + 96.25) * sy,
				(550 + (400 / 8) * voltageDepletionWidth) * sx,
				(10 + 385 / 2 + 96.25) * sy,
				550 * sx,
				(10 +
					385 / 2 +
					96.25 +
					((2 * rect_density) / (initialDepletionWidth * 100)) * count_n * 2) *
					sy
			);
		} else if (scene(2)) {
			triangle(
				(550 - (400 / 8) * voltageDepletionWidth) * sx,
				(10 + 385 / 2 + 96.25) * sy,
				(550 + (400 / 8) * voltageDepletionWidth) * sx,
				(10 + 385 / 2 + 96.25) * sy,
				550 * sx,
				(10 +
					385 / 2 +
					96.25 +
					(((1 / 2.5) * 2 * rect_density) / (initialDepletionWidth * 100)) *
						200 *
						2) *
					sy
			);
		}
	}
}

function drawChargeDensityData() {
	noStroke();
	fill(...color.yellow, color.chargeDensityOpacity);

	if (scene(1)) {
		rect_density = Math.pow(10, -13) * dopingConcentration_new;
	} else if (scene(2)) {
		rect_density =
			10 +
			0.7 * Math.pow(10, -13) * dopingConcentration_new -
			appliedVoltage / 2;
	}

	let rect_density_new = Math.pow(10, -13) * dopingConcentration_new;

	// draw graph data
	if (switchGraph == false) {
		// left charge density data
		beginShape();
		vertex(550 * sx, (10 + 385 / 2 + 96.25) * sy);
		// Add all points as curve vertices
		if (scene(1)) {
			for (let i = 0; i < Math.floor(voltageDepletionWidth * 100); i++) {
				let x = 550 * sx - (((400 / 8) * i) / 100) * sx;
				let y =
					(10 + 385 / 2 + 96.25) * sy +
					rect_density_new *
						4 *
						sy *
						(1 -
							Math.exp(-Math.pow(voltageDepletionWidth - i / 100, 2) / 0.026));
				vertex(x, y);
			}
		} else if (scene(2)) {
			for (let i = 0; i < chargeDensityLeftData.length; i++) {
				let x = chargeDensityLeftData[i].x;
				let y = chargeDensityLeftData[i].y;
				vertex(x, y);
			}
		}

		vertex(
			550 * sx - (400 / 8) * voltageDepletionWidth * sx,
			(10 + 385 / 2 + 96.25) * sy
		);
		endShape();

		// right charge density data
		beginShape();

		vertex(550 * sx, (10 + 385 / 2 + 96.25) * sy);

		// Add all points as curve vertices
		if (scene(1)) {
			for (let i = 0; i < Math.floor(voltageDepletionWidth * 100); i++) {
				let x = 550 * sx + (((400 / 8) * i) / 100) * sx;
				let y =
					(10 + 385 / 2 + 96.25) * sy -
					rect_density_new *
						4 *
						sy *
						(1 -
							Math.exp(-Math.pow(voltageDepletionWidth - i / 100, 2) / 0.026));
				vertex(x, y);
			}
		} else if (scene(2)) {
			for (let i = 0; i < chargeDensityRightData.length; i++) {
				let x = chargeDensityRightData[i].x;
				let y = chargeDensityRightData[i].y;
				vertex(x, y);
			}
		}

		vertex(
			550 * sx + (400 / 8) * voltageDepletionWidth * sx,
			(10 + 385 / 2 + 96.25) * sy
		);

		endShape();
		// END: right charge density
	}
}

function drawBands() {
	stroke(...color.green, 100);
	noFill();

	for (var i = 0; i < 100; i++) {
		if (
			(800 / 100) * i > 550 - (400 / 8) * voltageDepletionWidth &&
			(800 / 100) * i < 550
		) {
			if (scene(1)) {
				baseBand[i - 19] =
					-Math.pow(
						(((800 / 100) * i - (550 - (400 / 8) * voltageDepletionWidth)) /
							((400 / 8) * voltageDepletionWidth)) *
							(((2 * rect_density) / (initialDepletionWidth * 100)) *
								count_n *
								1.1),
						1
					) /
					5 /
					3;
			} else if (scene(2) || scene(3)) {
				baseBand[i - 19] =
					-Math.pow(
						(((800 / 100) * i - (550 - (400 / 8) * voltageDepletionWidth)) /
							((400 / 8) * voltageDepletionWidth)) *
							(((2 * rect_density) / (voltageDepletionWidth * 100)) * 177 * 2),
						1
					) /
					5 /
					3;
			}
		} else if (i == 50) {
		} else {
			baseBand[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			baseBand[i] = baseBand[100 - i];
		} else if ((i = 50)) {
			if (scene(1)) {
				baseBand[i] =
					-Math.pow(
						((2 * rect_density) / (initialDepletionWidth * 100)) *
							count_n *
							1.1,
						1
					) /
					5 /
					3;
			} else if (scene(2) || scene(3)) {
				baseBand[i] =
					-Math.pow(
						((2 * rect_density) / (voltageDepletionWidth * 100)) * 177 * 2,
						1
					) /
					5 /
					3;
			}
		}
	}

	if (scene(2) || scene(3)) {
		for (var i = 0; i < 100; i++) {
			baseBand[i] = baseBand[i] / 3;
		}
	}

	for (var i = 0; i < 100; i++) {
		electronBand[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				electronBand[i] = electronBand[i] + baseBand[k];
			}
		}
	}

	for (var i = 0; i < 100; i++) {
		holeBand[i] = electronBand[i];
	}
	noStroke();
	stroke(...color.yellow);

	for (var k = 0; k < 100; k++) {
		// electron curve
		electronLine[k] = [
			(150 + (800 / 100) * k) * sx,
			(171.25 - electronBand[k] - 100) * sy,
		];
	}

	for (var k = 0; k < 100; k++) {
		// hole curve
		holeLine[k] = [
			(150 + (800 / 100) * k) * sx,
			(+0 + 171.25 - holeBand[k] - 30) * sy,
		];
	}

	// Draw electron band
	beginShape();
	for (var k = 0; k < 100; k++) {
		//yellow curve
		if (scene(1) || scene(2)) {
			curveVertex(
				(150 + (800 / 100) * k) * sx,
				(171.25 - electronBand[k] - 100) * sy
			);
		}

		electronLineData[k] = {
			x: (150 + (800 / 100) * k) * sx,
			y: (171.25 - electronBand[k] - 100) * sy,
		};
	}
	endShape();

	// Draw hole band

	noStroke();
	///
	stroke(...color.green);
	beginShape();

	for (var k = 0; k < 100; k++) {
		//green curve
		if (scene(1) || scene(2)) {
			curveVertex(
				(150 + (800 / 100) * k) * sx,
				(-30 + 171.25 - holeBand[k] - 30) * sy
			);
		}
		holeLineData[k] = {
			x: (150 + (800 / 100) * k) * sx,
			y: (171.25 - holeBand[k] - 30 - 30) * sy,
		};
	}
	endShape();
}

function niceNum(range, round) {
	// helper for drawConcentrationData()
	let exponent = Math.floor(Math.log10(range)); // Exponent of range
	let niceFraction;

	if (round) {
		niceFraction = 10;
	} else {
		niceFraction = 1;
	}

	return niceFraction * Math.pow(10, exponent);
}

function calculateTickMarks(minYY, maxYY, desiredTicks = 5) {
	// helper for drawConcentrationData()
	let range = niceNum(maxYY - minYY, false);
	let tickSpacing = niceNum(range / (desiredTicks - 1), true);
	let niceMin = Math.floor(minYY / tickSpacing) * tickSpacing;
	let niceMax = Math.ceil(maxYY / tickSpacing) * tickSpacing;

	let ticks = [];
	for (let val = niceMin; val <= niceMax; val += tickSpacing) {
		if (val >= minYY) {
			ticks.push(val);
		}
	}

	return ticks;
}

function drawConcentrationData() {
	fill(...color.white);
	noStroke();

	// draw hole concentration data line
	for (let i = 0; i < holeConcentrationData.length; i++) {
		// Get the first and last 'y' values
		const firstY = holeConcentrationData[0].y;
		const lastY = holeConcentrationData[holeConcentrationData.length - 1].y;

		// Find the maximum 'y' value
		const maxYY = Math.max(firstY, lastY);
		const minYY = Math.min(firstY, lastY);

		// Determine the order of magnitude of the maxY value
		const orderOfMagnitude = Math.floor(Math.log10(maxYY));

		// The factor is 10 to the power of (order of magnitude - 1)
		const factor_ = Math.pow(10, orderOfMagnitude - 1);

		noFill();
		stroke(...color.green);

		if (appliedVoltage == 0) {
			// Draw ellipses as before
			beginShape(); // Start the shape

			// Calculate first point's coordinates for control point
			let firstX = (550 + ((400 / 8) * holeConcentrationData[0].x) / 10) * sx;
			let firstY = 368 * sy;

			// Duplicate the first point as a control point
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < holeConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * sx;
				let y = 368 * sy;
				curveVertex(x, y);
			}

			// Calculate last point's coordinates for control point
			let lastX =
				(550 +
					((400 / 8) *
						holeConcentrationData[holeConcentrationData.length - 1].x) /
						10) *
				sx;
			let lastY = 368 * sy;

			// Duplicate the last point as a control point
			curveVertex(lastX, lastY);

			// Add an extra control point at the end if there are multiple points
			if (holeConcentrationData.length > 1) {
				let secondLastX =
					(550 +
						((400 / 8) *
							holeConcentrationData[holeConcentrationData.length - 2].x) /
							10) *
					sx;
				let secondLastY = 368 * sy;
				curveVertex(secondLastX, secondLastY);
			} else {
				curveVertex(lastX, lastY); // Duplicate last point if there's only one point
			}

			endShape(); // End the shape

			checkMouseHoverForStraightLine();
		} else {
			const diff = maxYY - minYY;
			const xyfactor = (171.25 - 55) / diff;

			beginShape(); // Start the shape

			// Calculate first point's coordinates
			let firstX = (550 + ((400 / 8) * holeConcentrationData[0].x) / 10) * sx;
			let firstY =
				368 * sy -
				((171.25 - 55) * (holeConcentrationData[0].y - minYY)) / diff;

			// Duplicate first point as a control point
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < holeConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * sx;
				let y =
					368 * sy -
					((171.25 - 55) * (holeConcentrationData[i].y - minYY)) / diff;
				curveVertex(x, y);
			}

			// Calculate last point's coordinates
			let lastX =
				(550 +
					((400 / 8) *
						holeConcentrationData[holeConcentrationData.length - 1].x) /
						10) *
				sx;
			let lastY =
				368 * sy -
				((171.25 - 55) *
					(holeConcentrationData[holeConcentrationData.length - 1].y - minYY)) /
					diff;

			// Duplicate last point as a control point
			curveVertex(lastX, lastY);

			// Add an extra control point at the end
			if (holeConcentrationData.length > 1) {
				let secondLastX =
					(550 +
						((400 / 8) *
							holeConcentrationData[holeConcentrationData.length - 2].x) /
							10) *
					sx;
				let secondLastY =
					368 * sy -
					((171.25 - 55) *
						(holeConcentrationData[holeConcentrationData.length - 2].y -
							minYY)) /
						diff;
				curveVertex(secondLastX, secondLastY);
			} else {
				curveVertex(lastX, lastY); // Duplicate last point if there's only one point
			}

			endShape(); // End the shape

			checkMouseHoverForNewCurve(minYY, diff);
		}
	}

	// draw electron concentration data line
	for (let i = 0; i < electronConcentrationData.length; i++) {
		// Get the first and last 'y' values
		const firstY = electronConcentrationData[0].y;
		const lastY =
			electronConcentrationData[electronConcentrationData.length - 1].y;

		// Find the maximum 'y' value
		const maxYY = Math.max(firstY, lastY);
		const minYY = Math.min(firstY, lastY);

		noFill();
		stroke(...color.yellow);

		if (appliedVoltage == 0) {
			// Draw a smooth curve for appliedVoltage == 0
			beginShape();

			// First control point
			let firstX =
				(550 + ((400 / 8) * electronConcentrationData[0].x) / 10) * sx;
			let firstY = 171.25 * sy;
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < electronConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * sx;
				let y = 171.25 * sy;
				curveVertex(x, y);
			}

			// Last control point
			let lastX =
				(550 +
					((400 / 8) *
						electronConcentrationData[electronConcentrationData.length - 1].x) /
						10) *
				sx;
			let lastY = 171.25 * sy;
			curveVertex(lastX, lastY);

			endShape();

			checkMouseHoverForNewStraightLine();

			// Draw text for minYY
			noStroke();
			fill(...color.blue, 10);
			textSize(12);
			// text(minYY.toExponential(1) + " /cm\u00B3", 212 * sx, (181.25 - 15) * sy);
			// text(minYY.toExponential(1) + " /cm\u00B3", 212 * sx, (181.25 - 15) * sy + 197.5 * sy);

			// Draw the tick marks and labels

			for (let i = -2; i <= 2; i++) {
				textSize(12);
				let middleX = 550 * sx;
				let tickSpacing = (400 / 8) * sx * 3; // Spacing between ticks
				let tickLength = 10; // Length of the tick marks
				let yPosition = (10 + 385 / 2 + 96.25 + 70) * sy; // Y position for the horizontal line

				let tickX = middleX + i * tickSpacing;

				noFill();
				stroke(...color.blue, 120);
				// Draw the tick mark
				line(tickX, yPosition, tickX, yPosition + tickLength / 2);
				line(tickX, 171.25 * sy, tickX, 171.25 * sy + tickLength / 2);

				noStroke();
				fill(...color.blue, 5);
				textSize(12);
				// Draw the label
				text(i * 3 + "\u00B5m", tickX - 5, yPosition + 17);
				text(i * 3 + "\u00B5m", tickX - 5, 171.25 * sy + 17);
			}

			const diff = 4 * Math.pow(10, 7) - minYY;
			const scale = (171.25 - 55) / diff;
			const tickMarks = calculateTickMarks(minYY, 4 * Math.pow(10, 7));

			// Render text for minYY
			const minYTickY = 171.25 * sy - scale * (minYY - minYY);

			for (const tick of tickMarks) {
				const tickY = 171.25 * sy - scale * (tick - minYY);
				if (tick === minYY) {
					// Skip the minimum value for tick mark
					// continue;
					// noFill();
					// stroke(...color.blue, 120);
					// line(100 * sx, tickY+245, 200 * sx, tickY+245);
				} else {
					// Draw the tick mark
					noFill();
					stroke(...color.blue, 120);
					line(190 * sx, tickY, 197 * sx, tickY);
					line(190 * sx, tickY + 197.5 * sy, 197 * sx, tickY + 197.5 * sy);

					// Add a label for the tick mark
					noStroke();
					fill(...color.blue, 10);
					text(tick.toExponential(1) + "  /cm\u00B3", 212 * sx, tickY + 5);
					text(
						tick.toExponential(1) + "  /cm\u00B3",
						212 * sx,
						tickY + 5 + 197.5 * sy
					);
				}
			}
		} else {
			// Draw the tick marks and labels

			// Draw a smooth curve for appliedVoltage != 0
			const diff = maxYY - minYY;
			const xyfactor = (171.25 - 55) / diff;

			beginShape();

			// vertex(190 * sx, 171.25 * sy)

			// curveVertex(190 * sx, 171.25 * sy);
			// Calculate first point's coordinates
			let firstX =
				(550 + ((400 / 8) * electronConcentrationData[0].x) / 10) * sx;
			let firstY =
				171.25 * sy -
				((171.25 - 55) * (electronConcentrationData[0].y - minYY)) / diff;
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < electronConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * sx;
				let y =
					171.25 * sy -
					((171.25 - 55) * (electronConcentrationData[i].y - minYY)) / diff;
				curveVertex(x, y);
			}

			// Last control point
			let lastX =
				(550 +
					((400 / 8) *
						electronConcentrationData[electronConcentrationData.length - 1].x) /
						10) *
				sx;
			let lastY =
				171.25 * sy -
				((171.25 - 55) *
					(electronConcentrationData[electronConcentrationData.length - 1].y -
						minYY)) /
					diff;
			curveVertex(lastX, lastY);

			// curveVertex(190 * sx, 171.25 * sy);
			// vertex(190 * sx, 171.25 * sy)

			endShape();

			checkMouseHover(minYY, diff);

			for (let i = -2; i <= 2; i++) {
				textSize(12);
				let middleX = 550 * sx;
				let tickSpacing = (400 / 8) * sx * 3; // Spacing between ticks
				let tickLength = 10; // Length of the tick marks
				let yPosition = (10 + 385 / 2 + 96.25 + 70) * sy; // Y position for the horizontal line

				let tickX = middleX + i * tickSpacing;

				noFill();
				stroke(...color.blue, 120);
				// Draw the tick mark
				line(tickX, yPosition, tickX, yPosition + tickLength / 2);
				line(tickX, 171.25 * sy, tickX, 171.25 * sy + tickLength / 2);

				noStroke();
				fill(...color.blue, 5);
				textSize(12);
				// Draw the label
				text(i * 3 + "\u00B5m", tickX - 5, yPosition + 17);
				text(i * 3 + "\u00B5m", tickX - 5, 171.25 * sy + 17);
			}
		}
	}

	fill(...color.blue);

	textSize(14);

	text("Electron Concentration ", 160 * sx, 30 * sy);
	text("Hole Concentration ", 160 * sx, 223 * sy);

	text("x", 930 * sx, 190 * sy);
	text("x", 930 * sx, (318 + 70) * sy);

	textSize(14);

	stroke(...color.green, 100);
}

function zap(array1, array2, num) {
	//zap new electron e & new hole h
	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			// check if electron and hole are close and they are showing, not same ID
			let condition =
				abs(array1[i].position.x - array2[k].position.x) < recombineDistance &&
				abs(array1[i].position.y - array2[k].position.y) < recombineDistance &&
				array1[i].id != array2[k].id &&
				array1[i].show == 1 &&
				array2[k].show == 1;

			if (scene(2) || scene(3)) {
				condition = condition && array1[i].within == 0;
			}

			if (num == 3 || num == 4) {
				condition = condition && array1[i].position.x > 190 * sx;
			}

			if (condition) {
				// stop the electron & hole
				array1[i].stop();
				array2[k].stop();

				// set to no show
				array1[i].noShow();
				array2[k].noShow();

				// label for removal
				if (num == 3 && num == 4) {
					array1[i].deadd();
					array2[k].deadd();
				}

				middle_position_Array[zap_count] = p5.Vector.div(
					p5.Vector.add(array2[k].position, array1[i].position),
					2
				);

				//effects

				recombineEffects[zap_count] = new Appear(
					middle_position_Array[zap_count].x,
					middle_position_Array[zap_count].y,
					10,
					1,
					zap_count
				);
				recombinedElectrons[zap_count] = new Appear(
					array1[i].position.x,
					array1[i].position.y,
					10,
					2,
					zap_count
				);
				recombinedHoles[zap_count] = new Appear(
					array2[k].position.x,
					array2[k].position.y,
					10,
					3,
					zap_count
				);

				zap_count++;

				let b = array1[i].position.y;

				var newCharge = new Charge(170 * sx, b, 10, "h", 1);
				newCharge.botz = array2[k].botz;
				array2.push(newCharge);

				chargeID += 1;

				var newCharge2 = new Charge(930 * sx, b, 10, "e", 0);
				newCharge2.botz = array1[i].botz;
				array1.push(newCharge2);

				// array1.push(new Charge((930)*sx, b, 10, "e", 0));
				chargeID += 1;

				array1.splice(i, 1);
				array2.splice(k, 1);

				break;
			}
		}
	}
}

function draw() {
	background(...color.bg);
	scaleWindow();

	if (mouseX > 0) {
		select("body").addClass("noselect");
	} else {
		if (select("body").hasClass("noselect")) {
			select("body").removeClass("noselect");
		}
	}

	// For all scenes
	if (scene(1) || scene(2) || scene(3)) {
		drawOutlines();
		// timeRateIDK();
		zapLoopsIDK();
		recombineArrays();
		drawChargeDensityData();
		drawElectricFieldData();
		setInitialDepletionWidth();
		drawBands();
		drawDepletionRegion();
	}
	// drawRealWorldGraphIDK();
	if (scene(1) || scene(2)) {
		drawGraph();
	}
	if (scene(2) || scene(3)) {
		setVoltageDepletionWidth();
	}
	if (scene(3)) {
		rect_density =
			10 +
			0.7 * Math.pow(10, -13) * dopingConcentration_new -
			appliedVoltage / 2;
		drawScene3GraphLines();
		drawConcentrationData();
		countConcentration();
	}

	// graph on off switch
	// if (switchGraph) {
	// 	fill(...color.white);
	// } else {
	// 	fill(...color.blue, 100);
	// }

	// noStroke();
	// rect(879 * sx, 368 * sy, 50 * sx, 16 * sy, 5 * sy, 5 * sy);

	// textSize(12 * sx);
	// if (switchGraph) {
	// 	fill(...color.black);
	// 	text("SWITCH", 880 * sx, 380 * sy);
	// } else {
	// 	fill(...color.white);
	// 	text("SWITCH", 880 * sx, 380 * sy);
	// }
}

resetScene = () => {
	count_n = 0;
	voltageDepletionWidth = 0;
	e_field_c = 0;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];
	fixedCharges = [];

	populateInitial();
};

function populateInitial() {
	// currently only for SCENE 1???
	// populate initial electrons, holes, and fixed charges
	if (scene(2) || scene(3)) {
		if (scene(2)) {
			updateDopingConcentration(document.getElementById("slider_61").value);
		} else if (scene(3)) {
			updateDopingConcentration(document.getElementById("slider_611").value);
		}
	}

	if (scene(1)) {
		updateDopingConcentration(document.getElementById("slider_6").value);
	}
}

setbandDiagramVScale = (a) => {
	bandDiagramVScale = a;
};

setDistance = (te) => {
	recombineDistance = te;
};

setVelocity = (v) => {
	scattering_velocity = v;

	for (let i = 0; i < generatedElectrons.length; i++) {
		generatedElectrons[i].movingVelocity =
			(5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < generatedHoles.length; i++) {
		generatedHoles[i].movingVelocity = (5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < initialHoles.length; i++) {
		initialHoles[i].movingVelocity = (5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < initialElectrons.length; i++) {
		initialElectrons[i].movingVelocity =
			(5 * parseInt(scattering_velocity)) / 5;
	}
};

setScattering = (c) => {
	scatteringIntervalount = c;
	scatteringIntervalount_c = parseInt(c) + 2;
};

setFactor = (c) => {
	factor_new = (1 / c) * 10;

	let ll = factor_new.toFixed(2);

	// document.getElementById("factor_E" ).value=ll
};

setVolume = (v) => {
	volume1 = v;
	num_multi = 1 / v;
};

scattering = () => {
	//timebetween scatter
	if (scatteringIntervalount_c > 2) {
		//time when straight line no scatter

		willScatter = false;
	} else if (scatteringIntervalount_c <= 2) {
		//time to scatter 2s
		willScatter = true;
	}

	scatteringIntervalount_c -= 1;

	if (scatteringIntervalount_c == 0) {
		scatteringIntervalount_c = parseInt(scatteringIntervalount) + 2;
	}
};

count_pn_f = () => {
	if (
		voltageDepletionWidth < initialDepletionWidth &&
		dopingConcentration != 0
	) {
		voltageDepletionWidth += 0.03;
		e_field_c += ((0.1 * 1) / rect_density) * 5 * 3;
		count_n += 3;
	}
};

generateCharges_scene1 = (num) => {};

blinking = () => {
	clearInterval(blink);
	interval_blink = 2000;
	blink = setInterval(function () {
		blinking();
	}, interval_blink);
};

//generating electron hole pairs based on frequency
generateCharges = (num) => {
	clearInterval(run45);
	interval_45 = 4000 / generationRateInterval;

	run45 = setInterval(function () {
		generateCharges(1);
	}, generationRate);

	if (scene(1) || scene(2) || scene(3)) {
		if (timnumPositiveFixedCharges > 0) {
			generatedElectrons = [];
			generatedHoles = [];
			recombinationRate = 0;
		} else if (timnumPositiveFixedCharges == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(200 * sx, 930 * sx);
				let b = random((20 + 385) * sy, 770 * sy);

				generationEffects.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(electronLine, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				generatedElectrons.push(aa);

				let yy = findClosestValue(holeLine, a);

				let bb = new Charge(a, b, 10, chargeID, 1);
				bb.origin.y = yy;
				bb.top = 1;
				generatedHoles.push(bb);

				chargeID += 1;
			}
		}
	}
};

generateCharges_outer = (num) => {
	clearInterval(run_outer);

	run_outer = setInterval(function () {
		generateCharges_outer(1); // Generate 1 new set of balls at the rate defined by new_generate
	}, 1000 / new_generate);

	if (scene(3)) {
		if (timnumPositiveFixedCharges > 0) {
			generatedElectrons = [];
			generatedHoles = [];

			recombinationRate = 0;

			recombinationRate = 0;
		} else if (timnumPositiveFixedCharges == 0) {
			for (let i = 0; i < num; i++) {
				const condition = Math.random() < 0.5; // This gives a 50-50 chance to choose between the two conditions

				let a;
				if (condition) {
					// If condition is true, satisfy the first condition: a >= (550 - (400 / 8) * initialDepletionWidth) * sx
					// const min = (550 - (400 / 8) * initialDepletionWidth) * sx;
					const min =
						(400 / 8) * voltageDepletionWidth * 2 * sx +
						(550 - (400 / 8) * voltageDepletionWidth) * sx;
					const max = 930 * sx; // Assuming 930*sx is the upper limit for 'a'
					a = random(min, max); // Generate a random number between min and max
				} else {
					// If condition is false, satisfy the second condition: a <= ((400 / 8) * initialDepletionWidth * 2) * sx + (550 - (400 / 8) * initialDepletionWidth)
					// const max = ((400 / 8) * initialDepletionWidth * 2) * sx + (550 - (400 / 8) * initialDepletionWidth) * sx;
					const max = (550 - (400 / 8) * voltageDepletionWidth) * sx;
					const min = 200 * sx; // Assuming 200*sx is the lower limit for 'a'
					a = random(min, max); // Generate a random number between min and max
				}

				let b = random((20 + 385) * sy, 770 * sy);

				generationEffects.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(electronLine, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				generatedElectrons.push(aa);

				let yy = findClosestValue(holeLine, a);

				let bb = new Charge(a, b, 10, chargeID, 1);
				bb.origin.y = yy;
				bb.top = 1;
				generatedHoles.push(bb);

				chargeID += 1;
			}
		}
	}
};

//straight moving balls generating for higher velocity
generateCharges_straight = (num) => {
	if (scene(1)) {
		if (timnumPositiveFixedCharges > 0) {
			generatedElectrons = [];
			generatedHoles = [];
			recombinationRate = 0;
		} else if (timnumPositiveFixedCharges == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(500 * sx, 930 * sx);
				let b = random((20 + 385) * sy, 770 * sy);

				generationEffects.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(electronLine, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				aa.straight = 1;
				aa.botz = 3;
				generatedElectrons.push(aa);

				let a_2 = random(300 * sx, 530 * sx);
				let b_2 = random((20 + 385) * sy, 770 * sy);

				generationEffects.push(new Appear(a_2, b_2, 10, 0));

				let yy = findClosestValue(holeLine, a_2);

				let bb = new Charge(a_2, b_2, 10, chargeID, 1);
				bb.origin.y = yy;
				bb.top = 1;
				bb.straight = 1;
				bb.botz = 3;
				generatedHoles.push(bb);

				chargeID += 1;
			}
		}
	}
};

time_graph = () => {
	if (timnumPositiveFixedCharges_graph > 0) {
		timnumPositiveFixedCharges_graph -= 1;
	}
};

setGeneration = (a) => {
	generationRate = a;
};

updateDopingConcentration = (a) => {
	array_band_hardcode = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.008894972236313038,
		-0.1601095002536185, -0.4536435840519165, -0.8894972236312069,
		-1.46767041899149, -2.188163170132765, -3.050975477055033,
		-4.056107339758293, -5.203558758242546, -6.493329732507791,
		-7.925420262554029, -9.46425045943601, -10.896340989482248,
		-12.186111963747493, -13.333563382231745, -14.338695244935005,
		-15.201507551857272, -15.922000302998548, -16.50017349835883,
		-16.93602713793812, -17.229561221736418, -17.380775749753724,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036, -17.389670721990036,
		-17.389670721990036, -17.389670721990036,
	];

	voltageDepletionWidth = 0;

	dopingConcentration = Math.pow(10, a / 10);
	electron_add = Math.pow(10, a / 10);

	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;
	dopingConcentration_new = mm;

	let pp = mm.toExponential(1);
	document.getElementById("updateDopingConcentration").value = pp;
	document.getElementById("updateDopingConcentration_scene2").value = pp;
	document.getElementById("updateDopingConcentration_scene3").value = pp;

	timnumPositiveFixedCharges = 0;
	fixedCharges = [];

	// resetScene()

	random_botz = [];

	////

	count_n = 0;
	voltageDepletionWidth = 0;
	e_field_c = 0;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];

	fixedCharges = [];

	//add ---- hhhh left
	if (scene(1) || scene(2) || scene(3)) {
		if (scene(1) || scene(2)) {
			chargeDensityLeftData = [];
			chargeDensityRightData = [];

			let rect_density_new = Math.pow(10, -13) * dopingConcentration_new;

			initialDepletionWidth =
				5811 *
				Math.pow(
					Math.log(dopingConcentration_new / Math.pow(10, 10)) /
						(Math.pow(10, 6) * dopingConcentration_new),
					1 / 2
				) *
				Math.pow(10, 6);

			let ratio =
				-appliedVoltage /
				10 /
				(1.6 * Math.pow(10, -13) * dopingConcentration_new);
			if (scene(2)) {
				voltageDepletionWidth = initialDepletionWidth * (1 + ratio);
			}

			// push charge density data
			if (scene(1)) {
				for (let k = 0; k < Math.round(initialDepletionWidth * 100); k++) {
					//left of 0 negative
					let x = 550 * sx - (((400 / 8) * k) / 100) * sx;

					let n =
						(10 + 385 / 2 + 96.25) * sy +
						rect_density_new *
							4 *
							sy *
							(1 -
								Math.exp(
									-Math.pow(initialDepletionWidth - k / 100, 2) / 0.026
								));

					chargeDensityLeftData.push({ x: x, y: n * 1 });
					// }
				}

				for (let k = 0; k < Math.round(initialDepletionWidth * 100); k++) {
					//right of 0 negative
					let x = 550 * sx + (((400 / 8) * k) / 100) * sx;

					let n =
						(10 + 385 / 2 + 96.25) * sy -
						rect_density_new *
							4 *
							sy *
							(1 -
								Math.exp(
									-Math.pow(initialDepletionWidth - k / 100, 2) / 0.026
								));

					chargeDensityRightData.push({ x: x, y: n * 1 });
					// }
				}
			}
			if (scene(2)) {
				for (let k = 0; k < Math.round(voltageDepletionWidth * 100); k++) {
					//left of 0 negative
					let x = 550 * sx - (((400 / 8) * k) / 100) * sx;

					let n =
						(10 + 385 / 2 + 96.25) * sy +
						rect_density_new *
							4 *
							sy *
							(1 -
								Math.exp(
									-Math.pow(voltageDepletionWidth - k / 100, 2) / 0.026
								));

					chargeDensityLeftData.push({ x: x, y: n * 1 });
					// }
				}

				for (let k = 0; k < Math.round(voltageDepletionWidth * 100); k++) {
					//right of 0 negative
					let x = 550 * sx + (((400 / 8) * k) / 100) * sx;

					let n =
						(10 + 385 / 2 + 96.25) * sy -
						rect_density_new *
							4 *
							sy *
							(1 -
								Math.exp(
									-Math.pow(voltageDepletionWidth - k / 100, 2) / 0.026
								));

					chargeDensityRightData.push({ x: x, y: n * 1 });
					// }
				}
			}
		}

		currentnumPositiveFixedCharges = Math.round(electron_add);
		numPositiveFixedCharges =
			Math.pow(100, (Math.log10(currentnumPositiveFixedCharges) - 8) / 2) /
			1000;

		while (random_botz.length < numPositiveFixedCharges - 2) {
			//v
			let aa = (random(1, 2000) / 100) * Math.pow(10, 6);
			//p
			let bb = (random(1, 400) / 100) * Math.pow(10, 6);
			let y =
				4 *
				Math.PI *
				Math.pow(1.03 * Math.pow(10, -10), 3 / 2) *
				Math.pow(Math.pow(10, 4) * aa, 2) *
				Math.exp(-1.3 * Math.pow(10, -21) * Math.pow(aa * Math.pow(10, 4), 2));
			if (bb < y) {
				random_botz.push(Math.round((aa / Math.pow(10, 6)) * 2) / 4);
				//  random_botz.push(Math.round(10))
			}
		}

		for (let i = 0; i < numPositiveFixedCharges; i++) {
			let a = random(550 * sx, 930 * sx);
			// let b = random(30*sy,730*sy);
			let b = random((20 + 385) * sy, 760 * sy);
			fixedCharges.push(new Appear(a, b, 10, 4, i));
			//id start from 0 ,color 4
			var newCharge = new Charge(a, b, 10, "e", 0);
			newCharge.botz = random_botz[i];
			initialElectrons.push(newCharge);
			chargeID += 1;
		}

		///////hole

		let numNegativeFixedCharges =
			Math.pow(100, (Math.log10(Math.round(dopingConcentration)) - 8) / 2) /
			1000;

		for (let i = 0; i < numNegativeFixedCharges; i++) {
			let a = random(170 * sx, 550 * sx);
			let b = random((20 + 385) * sy, 760 * sy);

			fixedCharges.push(new Appear(a, b, 10, 5, i));

			var Charge2 = new Charge(a, b, 10, "h", 1);
			Charge2.botz = random_botz[i];
			initialHoles.push(Charge2);
			chargeID += 1;
		}
	}
};

e_field = (a) => {
	e_field_c = a / 10;

	document.getElementById("e_f_text").value = a;
};

findClosestValue = (array, targetX) => {
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
};

let isApplyVpCalled = false;

updateAppliedVoltage = (a) => {
	appliedVoltage = a;

	if (parseInt(appliedVoltage) >= 3) {
		setFactor(1000);
		factor_new = (1 / 1000) * 10;
	} else {
		// factor_new =1*10
		setFactor(1);
		factor_new = 1 * 20;
	}

	voltageDepletionWidth = initialDepletionWidth;
	rect_density =
		1.6 * Math.pow(10, -13) * dopingConcentration_new - appliedVoltage / 10;

	let ratio =
		-appliedVoltage / 10 / (1.6 * Math.pow(10, -13) * dopingConcentration_new);

	voltageDepletionWidth = initialDepletionWidth * (1 + ratio);

	// initialDepletionWidth = voltageDepletionWidth

	for (var i = 0; i < 100; i++) {
		//(800)/100*i
		if (
			(800 / 100) * i > 550 - (400 / 8) * voltageDepletionWidth &&
			(800 / 100) * i < 550
		) {
			baseBand[i - 19] =
				-Math.pow(
					(((800 / 100) * i - (550 - (400 / 8) * voltageDepletionWidth)) /
						((400 / 8) * voltageDepletionWidth)) *
						(((2 * rect_density) / (voltageDepletionWidth * 100)) * 177 * 2),
					1
				) /
				5 /
				3;
		} else if (i == 50) {
		} else {
			baseBand[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			baseBand[i] = baseBand[100 - i];
		} else if ((i = 50)) {
			baseBand[i] =
				-Math.pow(
					((2 * rect_density) / (voltageDepletionWidth * 100)) * 177 * 2,
					1
				) /
				5 /
				3;
		}
	}

	for (var i = 0; i < 100; i++) {
		baseBand[i] = baseBand[i] / 3;
	}

	for (var i = 0; i < 100; i++) {
		electronBand[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				electronBand[i] = electronBand[i] + baseBand[k];
			}
		}
	}

	for (var k = 0; k < 100; k++) {
		electronLine[k] = [
			(150 + (800 / 100) * k) * sx,
			(171.25 - electronBand[k] - 100) * sy,
		];
	}

	for (let i = 0; i < generatedElectrons.length; i++) {
		let Charge = generatedElectrons[i];
		Charge.origin.x = electronLine[99][1];
	}

	resetScene();
};

function updateChargeOrigins() {
	for (let i = 0; i < generatedElectrons.length; i++) {
		let Charge = generatedElectrons[i];
		let newOriginX = findClosestValue(electronLine, Charge.position.x);
		Charge.origin.x = newOriginX;
	}
}

function onRefresh() {
	updateDopingConcentration(130);
	resetScene();
}
setTest = (a) => {
	test_num = a;
};

function toggleRecombine() {
	if (recombine === 0) {
		recombine = 1;
	} else {
		recombine = 0;
	}
	// Now recombine will toggle between 0 and 1 every 3 seconds
}

function checkMouseHover(minYY, diff) {
	//yelow
	const threshold = 10; // Threshold distance to detect mouse hover
	for (let i = 0; i < electronConcentrationData.length; i++) {
		let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * sx;
		let y =
			171.25 * sy -
			((171.25 - 55) * (electronConcentrationData[i].y - minYY)) / diff;

		// Calculate the distance between the mouse and the current point
		let d = dist(mouseX, mouseY, x, y);

		// If the mouse is within the threshold distance, draw an ellipse
		if (d < threshold) {
			noStroke();
			fill(...color.yellow, 100); // electron color
			ellipse(x, y, 10, 10); // Draw electron ellipse with diameter of 10

			// Calculate the value at this point
			let value = electronConcentrationData[i].y;
			textSize(12);
			fill(...color.yellow, 100); // Black color for text
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points (optional, remove if you want multiple points to be highlighted)
		}
	}
}

function checkMouseHoverForNewCurve(minYY, diff) {
	const threshold = 10; // Threshold distance to detect mouse hover

	for (let i = 0; i < holeConcentrationData.length; i++) {
		let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * sx;
		let y =
			368 * sy - ((171.25 - 55) * (holeConcentrationData[i].y - minYY)) / diff;

		// Calculate the distance between the mouse and the current point
		let d = dist(mouseX, mouseY, x, y);

		// If the mouse is within the threshold distance, draw an ellipse
		if (d < threshold) {
			strokeWeight(1);
			fill(...color.black2);
			stroke(...color.green); // Semi-transparent white color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = holeConcentrationData[i].y;
			textSize(12);
			noStroke();
			fill(...color.green, 100); // Text color
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points (optional)
		}
	}
}

function checkMouseHoverForStraightLine() {
	// green
	const threshold = 10; // Threshold distance to detect mouse hover on x-axis

	for (let i = 0; i < holeConcentrationData.length; i++) {
		let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * sx;
		let y = 368 * sy;

		// Check if mouse x-coordinate is close to the point's x-coordinate
		if (abs(mouseX - x) < threshold) {
			strokeWeight(1);
			fill(...color.black2);
			stroke(...color.green); // Semi-transparent white color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = holeConcentrationData[i].y;
			textSize(12);
			noStroke();
			fill(...color.green, 100); // Text color
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points
		}
	}
}

function checkMouseHoverForNewStraightLine() {
	//yellow
	const threshold = 10; // Threshold distance to detect mouse hover on x-axis

	for (let i = 0; i < electronConcentrationData.length; i++) {
		let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * sx;
		let y = 171.25 * sy; // y-coordinate for the new line

		// Check if mouse x-coordinate is close to the point's x-coordinate
		if (abs(mouseX - x) < threshold) {
			noStroke();
			fill(...color.yellow, 100); // White color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = electronConcentrationData[i].y;
			textSize(12);
			fill(...color.yellow, 100); // Text color
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points
		}
	}
}
