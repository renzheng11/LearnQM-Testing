/* ------------------------------- 
Author: Christina Wu, Ren Zheng
Contacts: renzheng112@gmail.com
------------------------------- */

// Scaling
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

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

// Electrons & Holes
let initialHoles = []; // holes that exist when scene starts
let initialElectrons = []; // electrons that exist when scene starts
let generatedElectrons = []; // electrons that are generated
let generatedHoles = []; // holes that are generated

// Effects
let generationCircles = []; // circle that appears around a generated pair
let recombineCircles = []; // circle that appears around a recombined pair
let recombineCircles_dot = []; // IDK
let fixedCharges = []; // fixed positive + negative charges

let recombinedElectrons = []; // electron that appears briefly at recombination location
let recombinedHoles = []; // hole that appears briefly at recombination location

// BELOW = used, I don't understand yet

var timelectronCount_graph = 0;
let changeV = 1;

// ABOVE = CHECKED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let V_applied_p = 0;
let V_applied_n = 0;

let cc = 0;

let switchGraph = false;

let tempe_fractionElectron;

let gg_rate = 1000;

let factor_c = 1;

let electronConcentrationData = []; // old name: new_electronConcentrationPlotset_count
let holeConcentrationData = []; // old name: new_holeConcentrationPlotset_count

let chargeDensityLeftData = []; // old name: new_array_rou_e_set
let chargeDensityRightData = []; // old name: new_array_rou_h_set

let changg = 0;
let e_field_c = 0;
var rate_e = 1;

let rect_density;

let hole_add_new;

let factor_new = 1;

let array_band_hardcode = [];

//fraction
//donor
let n_c;
let delta_ED;
let fractionElectron = [];
let fractionElectronlectronCount;
let fractionElectronlectronCount_t;
let dif_e; //difference in freeze count
let dif_e_current; //difference in freeze difference count and existing paired e count

//acceptor
let n_v;
let delta_EA;
let fractionHole = [];
let fractionHole_count;
let fractionHole_count_t;
let dif_h; //difference in freeze count
let dif_h_current; //difference in freeze difference count and existing paired e count

let new_generate = 6;

//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100);

settings = {
	nucleus: false,
	nn: false,
	kk: false,
	valence: true,
	conduction: true,
	nn_live: true,
};
var generationRate;
var currentElectronCount = 0;
var currentHoleCount = 0;
var recombinationRate = 1;

var constant_EH = 0.0000001;
var ni;
var nn;
var constant_beta = Math.pow(10, -12);
let count_buffer = 0;

var timelectronCount = 0;

let x_probability;
let x_probability_time;

////////////////////////////////

let chargeID = 0;

let chargeID_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;

let t_f_prob = false;

let generate_num;

let gap = 200;
let l = 560;
let w = 120;

let switch_1 = 0;
let recombine = 1;

let change_square = -30;
let change_length = 100 + change_square;

let temp = 270;

let ni_s1;
let baseBand = [];
let electronBand = [];
let holeBand = [];
let random_botz = [];
var constant_beta_s1 = Math.pow(10, -12);

let g_rate;

let stop_s1 = false;

let numm;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

let interval_pn = 100;

let interval_s = 1000;

var run1;
var run45;
var run3;

var count_pn;

// let num_speed =1;

var count_pn_num = 0;

let button_reset;

let middle_position_Array = [];
let zap_count = 0;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var timelectronCount = 0;

var timelectronCount_blink = 100;

let fade;
var appear1 = 0;

let latticeAtoms = [];
let latticeAtoms_2 = [];
let latticeAtoms_e = [];
let latticeAtoms_h = [];
var globalOrbitalCount = 0;

let free_electron = [];
let free_hole = [];
let random_direction;

var opacity;

let electronLatticePositions = [];

let random_num1 = [];

let id_electron_s1 = 0;
let id_hole_s1 = 0;

var blink;
let interval_blink = 1000;

var scattering_c;

var count_g;
let count_graph = 10;

let count_n = 0;

let scattering_velocity;
let scattering_count = 0;
let scattering_count_c = 0;

let scatter_tf = false;

let constant_temperature_real;
let temp_real;
let box_count = [];

let concentration = 50 / 3;

let context;

var zincrement = 0.001;
var increment = 0.1;
var zoff = 0.0;

let test_num = 10;

let point_count = 200;
// let array_plot = [];
// let array_plot_0 = [];
// let array_positive_y = [];
// let array_negative_y = [];
// let array_positive_y_0 = [];
// let array_negative_y_0 = [];
// let array_positive_y_e = [];
// let array_negative_y_e = [];
// let array_positive_y_0_e = [];
// let array_negative_y_0_e = [];
// let array_positive_y_h = [];
// let array_negative_y_h = [];
// let array_positive_y_0_h = [];
// let array_negative_y_0_h = [];

let box_count_e = [];
let box_count_h = [];

let electronConcentrationPlot = [];
let holeConcentrationPlot = [];
let electronConcentrationPlot0 = [];
let holeConcentrationPlot0 = [];

let distanceThreshold = 9;

let array_graph_con = [];
let array_graph_current = [];

let con_count = 0;
let x_con = 0;
let y_con = 0;
let real_graph = 0;
let real_graph_live = 0;
let start_graph = 1;

let test_a;
let y_run;
let y_con_c = 0;
let y_con_2 = 0;

let X_n;

let test_current_scale = 3;
let test_x_scale = 0.2;

let electronLine = [];
let holeLine = [];

let electronLineData = new Array(100).fill(...color.black);
let holeLineData = [];

let E_gap_factor = 10;

let electronConcentrationPlotset;
let electronConcentrationPlot0_set;
let holeConcentrationPlotset;
let holeConcentrationPlot0_set;

let x_num_count = 6;

let run11;
let run_outer;

// Switch from Charge Density graph to Electric Field graph
function mouseClicked() {
	// true: Electric Field
	// false: Charge Density

	if (abs(910 * s_x - mouseX) < 30 * s_x && abs(377 * s_y - mouseY) < 9 * s_y) {
		if (switchGraph == true) switchGraph = false;
		else switchGraph = true;
	}
}

function scaleWindow() {
	s_x = windowWidth / scale_x;
	s_y = windowHeight / scale_y;
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
		genBalls(1);
	}, interval_45); // scene changing T
	// generate balls straight
	run11 = setInterval(function () {
		genBalls_straight(1);
	}, 2000); // scene changing T

	run1 = setInterval(function () {
		genBalls_scene1(1);
	}, interval_1); // scene 1 gen

	run_outer = setInterval(function () {
		genBalls_outer(1);
	}, 1000 / new_generate); // scene changing T

	count_pn = setInterval(function () {
		count_pn_f();
	}, interval_pn);

	blink = setInterval(function () {
		blinking();
	}, interval_blink); // blinking

	scattering_c = setInterval(function () {
		scattering();
	}, 50); // scattring time

	y_run = setInterval(function () {
		y_change();
	}, 1700); // y axis real time change

	setInterval(time_concentration, 10);
}
function drawOutlines() {
	stroke(...color.green, 100);
	strokeWeight(1);

	noFill();

	// third box outline (pn junction)
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 2) * s_y
	);

	fill(...color.black2);

	// top box outline (band diagram)
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		10 * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	// middle box outline (charge density / electric field)
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385 / 2) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	noFill();
}

function timeRateIDK() {
	x_probability = Math.round(
		100 /
			(1 +
				Math.exp(
					(300 * (y_cordi / 500 - constant_fermi)) /
						(0.026 * constant_temperature)
				))
	);

	x_probability_time = x_probability;

	//tcb = 10
	if (timelectronCount_blink > x_probability_time) {
		opacity_circle = 0;
		opacity_circle_up = 0;
	} else if (timelectronCount_blink <= x_probability_time) {
		if (x_probability_time < 30) {
			opacity_circle = 1;
		} else {
			opacity_circle = 1;
			opacity_circle_up = 1;
		}
	}

	if (timelectronCount == 0) {
		ni =
			9.15 *
			Math.pow(10, 19) *
			Math.pow(temp / 300, 1.5) *
			Math.exp(-0.59 / ((0.026 * temp) / 300));
		generationRate = 0.01 * ni;

		currentElectronCount += generationRate - recombinationRate;
		currentHoleCount += generationRate - recombinationRate;
		recombinationRate = currentElectronCount * 0.01;
	} else {
		generationRate = 0;
		currentElectronCount = 0;
		currentHoleCount = 0;
		recombinationRate = 0;
	}

	scaleWindow();

	g_rate = 0.00000112099 * generationRate + 0.999998791;
}

function recombineArrays() {
	function doRecombine() {
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
		doRecombine();
	} else if (scene(2) && recombine == 1) {
		doRecombine();
	} else if (scene(3) && recombine == 1) {
		doRecombine();
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
			if (initialHoles[i].position.y > 49 * s_y) {
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
			if (initialElectrons[i].position.y > 49 * s_y) {
				initialElectrons[i].random_walk();
			}
		}
	}

	for (let i = 0; i < recombineCircles.length; i++) {
		if (typeof recombineCircles[i] != "undefined") {
			if (recombineCircles[i].alpha < 1) {
				recombineCircles.splice(i, 1);
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

	for (let i = 0; i < generationCircles.length; i++) {
		if (generationCircles[i].alpha < 1) {
			generationCircles.splice(i, 1);
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
	for (let i = 0; i < generationCircles.length; i++) {
		generationCircles[i].display();
		generationCircles[i].update();
	}

	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		fixedCharges[i].update();
	}

	// see outer circle effect when pair is recombined
	for (let i = 0; i < recombineCircles.length; i++) {
		if (typeof recombineCircles[i] != "undefined") {
			recombineCircles[i].display();
			recombineCircles[i].update();
		}
	}

	// IDK for dot is for
	for (let i = 0; i < recombineCircles_dot.length; i++) {
		if (typeof recombineCircles[i] != "undefined") {
			recombineCircles_dot[i].display();
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
		190 * s_x,
		171.25 * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		171.25 * s_y
	);
	//vertical
	line(190 * s_x, 40 * s_y, 190 * s_x, 171.25 * s_y);
	//arrow up right
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * s_x,
		(171.25 + 3) * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		171.25 * s_y
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * s_x,
		(171.25 - 3) * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		171.25 * s_y
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
			s_x,
		46 * s_y,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20 + 20) *
			s_x,
		40 * s_y
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
			s_x,
		46 * s_y,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20 + 20) *
			s_x,
		40 * s_y
	);
	//down
	//horizon
	line(
		190 * s_x,
		(10 + 385 / 2 + 96.25 + 70) * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		(10 + 385 / 2 + 96.25 + 70) * s_y
	);
	//vertical
	line(
		190 * s_x,
		(10 + 385 / 2 + 96.25 - 70) * s_y,
		190 * s_x,
		(10 + 385 / 2 + 96.25 + 70) * s_y
	);
	//arrow up
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * s_x,
		(10 + 385 / 2 + 96.25 + 3 + 70) * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		(10 + 385 / 2 + 96.25 + 70) * s_y
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 20 + 4) * s_x,
		(10 + 385 / 2 + 96.25 - 3 + 70) * s_y,
		(10 + 100 + 70 + change_square + 790) * s_x,
		(10 + 385 / 2 + 96.25 + 70) * s_y
	);
	//arrow down up
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760) * s_x,
		(10 + 385 / 2 + 96.25 - 70) * s_y,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 3) * s_x,
		(10 + 385 / 2 + 96.25 - 60 - 5) * s_y
	);
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760) * s_x,
		(10 + 385 / 2 + 96.25 - 70) * s_y,
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 + 3) * s_x,
		(10 + 385 / 2 + 96.25 - 60 - 5) * s_y
	);
}
function drawGraph() {
	noFill();
	stroke(...color.blue, 180);

	// ////////////new
	// graph x axis
	line(
		(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 + 30) * s_x,
		(10 + 385 / 2 + 96.25) * s_y,
		(10 + 100 + 70 + change_square + 790 - 30) * s_x,
		(10 + 385 / 2 + 96.25) * s_y
	);
	// graph y axis
	line(
		(10 + 100 + 70 + change_square + (940 - change_length - 70) / 2) * s_x,
		(10 + 385 / 2 + 30) * s_y,
		(10 + 100 + 70 + change_square + (940 - change_length - 70) / 2) * s_x,
		(10 + 385 / 2 + 770 / 4 - 30) * s_y
	);

	// graph +x axis ticks
	for (let i = 0; i < x_num_count; i++) {
		let x = 550 * s_x + ((400 / 8) * s_x * i + (400 / 8) * s_x);
		let y = (10 + 385 / 2 + 96.25) * s_y;
		line(x, y, x, y - 5 * s_y); // Draw the line
	}

	// graph -x axis ticks
	for (let i = 0; i < x_num_count; i++) {
		let x = 550 * s_x - (400 / 8) * s_x * i - (400 / 8) * s_x;
		let y = (10 + 385 / 2 + 96.25) * s_y;
		line(x, y, x, y - 5 * s_y); // Draw the line
	}

	if (switchGraph == false) {
		// Electric Field
		// graph -y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * s_x;
			let y = (10 + 385 / 2 + 96.25) * s_y + 12.5 * s_y + 12.5 * s_y * i;
			line(x, y, x + 5 * s_x, y); // Draw the line
		}

		// graph +y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * s_x;
			let y = (10 + 385 / 2 + 96.25) * s_y - 12.5 * s_y - 12.5 * s_y * i;
			line(x, y, x + 5 * s_x, y); // Draw the line
		}

		noStroke();
		fill(...color.blue);
		textSize(10 * s_x);
		text("20 μC/cm\u00B3", 560 * s_x, 252 * s_y);
		text("-20 μC/cm\u00B3", 560 * s_x, 351 * s_y);
	} else {
		// Charge Density
		// graph -y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * s_x;
			let y =
				(10 + 385 / 2 + 96.25) * s_y +
				(40 / 1530) * 500 * s_y +
				(40 / 1530) * 500 * s_y * i;
			line(x, y, x + 5 * s_x, y); // Draw the line
		}

		// graph +y axis ticks
		for (let i = 0; i < 4; i++) {
			let x = 550 * s_x;
			let y =
				(10 + 385 / 2 + 96.25) * s_y -
				(40 / 1530) * 500 * s_y -
				(40 / 1530) * 500 * s_y * i;
			line(x, y, x + 5 * s_x, y); // Draw the line
		}

		noStroke();
		fill(...color.blue);
		textSize(10 * s_x);
		text("2000 V/cm", 560 * s_x, 249 * s_y);
		text("-2000 V/cm", 560 * s_x, 353 * s_y);
	}

	noStroke();
	fill(...color.blue);
	textSize(10 * s_x);
	text("5 \u00B5m", 790 * s_x, 313 * s_y);
	text("-5 \u00B5m", 290 * s_x, 313 * s_y);

	textSize(17);
	noStroke();
	strokeWeight(1);

	fill(...color.blue);

	textSize(14 * s_x);

	text("Band Diagram", 160 * s_x, 30 * s_y);
	text("Charge Density", 160 * s_x, 223 * s_y);
	text(" / ", 260 * s_x, 223 * s_y);
	text("Electric Field", 273 * s_x, 223 * s_y);

	if (switchGraph) {
		fill(...color.pink, color.electricFieldOpacity);
		rect(271 * s_x, 210 * s_y, 85 * s_x, 18 * s_y, 5 * s_y, 5 * s_y);
	} else {
		fill(...color.yellow, color.chargeDensityOpacity);
		rect(158 * s_x, 210 * s_y, 100 * s_x, 18 * s_y, 5 * s_y, 5 * s_y);
	}

	noStroke();
	fill(...color.blue);

	if (count_pn_num >= X_n) {
		text("Equilibrium", 760 * s_x, 223 * s_y);
	}
}

function setCountPN() {
	count_pn_num = X_n;

	let ratio =
		(-V_applied_p / 10 + V_applied_n / 10) /
		(1.6 * Math.pow(10, -13) * hole_add_new);

	count_pn_num = X_n * (1 + ratio);
}

function setX_n() {
	X_n =
		5811 *
		Math.pow(
			Math.log(hole_add_new / Math.pow(10, 10)) /
				(Math.pow(10, 6) * hole_add_new),
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
		(550 - (400 / 8) * X_n) * s_x,
		(10 + 385) * s_y,
		(400 / 8) * X_n * 2 * s_x,
		(770 / 2) * s_y
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
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					generatedElectrons[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					electronConcentrationPlot[k].push(generatedElectrons[i]);
				}
			}

			if (
				generatedElectrons[i].position.x <= 190 * s_x &&
				generatedElectrons[i].position.x >= 150 * s_x &&
				generatedElectrons[i].show == 1
			) {
				electronConcentrationPlot0.push(generatedElectrons[i]);
			}
		}

		for (let i = 0; i < initialElectrons.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					initialElectrons[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					initialElectrons[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					electronConcentrationPlot[k].push(initialElectrons[i]);
				}
			}

			if (
				initialElectrons[i].position.x <= 190 * s_x &&
				initialElectrons[i].position.x >= 150 * s_x &&
				initialElectrons[i].show == 1
			) {
				electronConcentrationPlot0.push(initialElectrons[i]);
			}
		}

		for (let i = 0; i < generatedHoles.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					generatedHoles[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					generatedHoles[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					holeConcentrationPlot[k].push(generatedHoles[i]);
				}
			}

			if (
				generatedHoles[i].position.x <= 190 * s_x &&
				generatedHoles[i].position.x >= 150 * s_x &&
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
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					initialHoles[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					holeConcentrationPlot[k].push(initialHoles[i]);
				}
			}

			if (
				initialHoles[i].position.x <= 190 * s_x &&
				initialHoles[i].position.x >= 150 * s_x &&
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

		for (let k = -72; k < Math.round(-count_pn_num * 10); k++) {
			let x = k;

			let n =
				Math.pow(10, 20) / hole_add_new +
				(Math.pow(10, 20) / hole_add_new) *
					(Math.exp(V_applied_p / 40 / 0.026) - 1) *
					Math.exp(k / 10 + count_pn_num);

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
			if (V_applied_p != 0) {
				const diff = maxYY - minYY;
				const scale = (171.25 - 55) / diff;
				const tickMarks = calculateTickMarks(minYY, maxYY);

				// Render text for minYY
				const minYTickY = 171.25 * s_y - scale * (minYY - minYY);

				for (const tick of tickMarks) {
					const tickY = 171.25 * s_y - scale * (tick - minYY);
					if (tick === minYY) {
						// Skip the minimum value for tick mark
					} else {
						// Draw the tick mark
						noFill();
						stroke(...color.blue, 120);
						line(190 * s_x, tickY, 197 * s_x, tickY);
						line(
							190 * s_x,
							tickY + 197.5 * s_y,
							197 * s_x,
							tickY + 197.5 * s_y
						);

						// Add a label for the tick mark
						noStroke();
						fill(...color.blue, 10);
						text(tick.toExponential(1) + "  /cm\u00B3", 212 * s_x, tickY + 5);
						text(
							tick.toExponential(1) + "  /cm\u00B3",
							212 * s_x,
							tickY + 5 + 197.5 * s_y
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

		for (let k = Math.round(count_pn_num * 10); k < 80; k++) {
			let x = k;

			let n =
				Math.pow(10, 20) / hole_add_new +
				(Math.pow(10, 20) / hole_add_new) *
					(Math.exp(V_applied_p / 40 / 0.026) - 1) *
					Math.exp(-(k / 10 - count_pn_num));

			holeConcentrationData.push({ x: x, y: n * 1 });
		}
	}
}

function drawRealWorldGraphIDK() {
	textSize(12);

	stroke(...color.green, 100);

	//real world graph
	if (real_graph == 1) {
		// if (switch_1 ==0){
		noStroke();
		// } else if (switch_1 ==1) {
		//   noStroke()
		fill(...color.green, 50);
		// }

		// if (count_graph ==0){
		x_con = 0;
		for (let i = 0; i < array_graph_con.length; i++) {
			if (x_con < 750) {
				x_con += array_graph_con[i].x;
			} else {
				x_con = 750;
			}
		}

		triangle(
			170 * s_x,
			171.25 * s_y,
			(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20) *
				s_x,
			(171.2 - concentration * 0.7) * s_y,
			(170 + x_con) * s_x,
			171.25 * s_y
		);

		noStroke();
		fill(...color.yellow, 50);

		x_con = 0;
		for (let i = 0; i < array_graph_con.length; i++) {
			if (x_con < 750) {
				x_con += array_graph_con[i].x;
			} else {
				x_con = 750;
			}
		}

		triangle(
			170 * s_x,
			171.25 * s_y,
			(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 - 20) *
				s_x,
			(171.2 - concentration * 0.7) * s_y,
			(170 + x_con) * s_x,
			171.25 * s_y
		);

		noStroke();
		fill(...color.yellow, 50);
		//scale current

		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale; //scale by 5
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, (test_a / x_con) * s_y);
		noStroke();
		fill(...color.green, 50);

		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale;
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, -(test_a / x_con) * s_y);

		for (let i = 0; i < array_graph_con.length; i++) {
			array_graph_con[i].update();
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
				(550 - (400 / 8) * count_pn_num) * s_x,
				(10 + 385 / 2 + 96.25) * s_y,
				(550 + (400 / 8) * count_pn_num) * s_x,
				(10 + 385 / 2 + 96.25) * s_y,
				550 * s_x,
				(10 +
					385 / 2 +
					96.25 +
					((2 * rect_density) / (X_n * 100)) * count_n * 2) *
					s_y
			);
		} else if (scene(2)) {
			triangle(
				(550 - (400 / 8) * count_pn_num) * s_x,
				(10 + 385 / 2 + 96.25) * s_y,
				(550 + (400 / 8) * count_pn_num) * s_x,
				(10 + 385 / 2 + 96.25) * s_y,
				550 * s_x,
				(10 +
					385 / 2 +
					96.25 +
					(((1 / 2.5) * 2 * rect_density) / (X_n * 100)) * 200 * 2) *
					s_y
			);
		}
	}
}

function drawChargeDensityData() {
	noStroke();
	fill(...color.yellow, color.chargeDensityOpacity);

	if (scene(1)) {
		rect_density = Math.pow(10, -13) * hole_add_new;
	} else if (scene(2)) {
		rect_density =
			10 +
			0.7 * Math.pow(10, -13) * hole_add_new -
			V_applied_p / 2 +
			V_applied_n / 2;
	}

	let rect_density_new = Math.pow(10, -13) * hole_add_new;

	// draw graph data
	if (switchGraph == false) {
		// left charge density data
		beginShape();
		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);
		// Add all points as curve vertices
		if (scene(1)) {
			for (let i = 0; i < Math.floor(count_pn_num * 100); i++) {
				let x = 550 * s_x - (((400 / 8) * i) / 100) * s_x;
				let y =
					(10 + 385 / 2 + 96.25) * s_y +
					rect_density_new *
						4 *
						s_y *
						(1 - Math.exp(-Math.pow(count_pn_num - i / 100, 2) / 0.026));
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
			550 * s_x - (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
		);
		endShape();

		// right charge density data
		beginShape();

		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);

		// Add all points as curve vertices
		if (scene(1)) {
			for (let i = 0; i < Math.floor(count_pn_num * 100); i++) {
				let x = 550 * s_x + (((400 / 8) * i) / 100) * s_x;
				let y =
					(10 + 385 / 2 + 96.25) * s_y -
					rect_density_new *
						4 *
						s_y *
						(1 - Math.exp(-Math.pow(count_pn_num - i / 100, 2) / 0.026));
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
			550 * s_x + (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
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
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			if (scene(1)) {
				baseBand[i - 19] =
					-Math.pow(
						(((800 / 100) * i - (550 - (400 / 8) * count_pn_num)) /
							((400 / 8) * count_pn_num)) *
							(((2 * rect_density) / (X_n * 100)) * count_n * 1.1),
						1
					) /
					5 /
					3;
			} else if (scene(2) || scene(3)) {
				baseBand[i - 19] =
					-Math.pow(
						(((800 / 100) * i - (550 - (400 / 8) * count_pn_num)) /
							((400 / 8) * count_pn_num)) *
							(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2),
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
					-Math.pow(((2 * rect_density) / (X_n * 100)) * count_n * 1.1, 1) /
					5 /
					3;
			} else if (scene(2) || scene(3)) {
				baseBand[i] =
					-Math.pow(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2, 1) /
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
			(150 + (800 / 100) * k) * s_x,
			(171.25 - electronBand[k] - 100) * s_y,
		];
	}

	for (var k = 0; k < 100; k++) {
		// hole curve
		holeLine[k] = [
			(150 + (800 / 100) * k) * s_x,
			(+0 + 171.25 - holeBand[k] - 30) * s_y,
		];
	}

	// Draw electron band
	beginShape();
	for (var k = 0; k < 100; k++) {
		//yellow curve
		if (scene(1) || scene(2)) {
			curveVertex(
				(150 + (800 / 100) * k) * s_x,
				(171.25 - electronBand[k] - 100) * s_y
			);
		}

		electronLineData[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - electronBand[k] - 100) * s_y,
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
				(150 + (800 / 100) * k) * s_x,
				(-30 + 171.25 - holeBand[k] - 30) * s_y
			);
		}
		holeLineData[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - holeBand[k] - 30 - 30) * s_y,
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

		if (V_applied_p == 0) {
			// Draw ellipses as before
			beginShape(); // Start the shape

			// Calculate first point's coordinates for control point
			let firstX = (550 + ((400 / 8) * holeConcentrationData[0].x) / 10) * s_x;
			let firstY = 368 * s_y;

			// Duplicate the first point as a control point
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < holeConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * s_x;
				let y = 368 * s_y;
				curveVertex(x, y);
			}

			// Calculate last point's coordinates for control point
			let lastX =
				(550 +
					((400 / 8) *
						holeConcentrationData[holeConcentrationData.length - 1].x) /
						10) *
				s_x;
			let lastY = 368 * s_y;

			// Duplicate the last point as a control point
			curveVertex(lastX, lastY);

			// Add an extra control point at the end if there are multiple points
			if (holeConcentrationData.length > 1) {
				let secondLastX =
					(550 +
						((400 / 8) *
							holeConcentrationData[holeConcentrationData.length - 2].x) /
							10) *
					s_x;
				let secondLastY = 368 * s_y;
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
			let firstX = (550 + ((400 / 8) * holeConcentrationData[0].x) / 10) * s_x;
			let firstY =
				368 * s_y -
				((171.25 - 55) * (holeConcentrationData[0].y - minYY)) / diff;

			// Duplicate first point as a control point
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < holeConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * s_x;
				let y =
					368 * s_y -
					((171.25 - 55) * (holeConcentrationData[i].y - minYY)) / diff;
				curveVertex(x, y);
			}

			// Calculate last point's coordinates
			let lastX =
				(550 +
					((400 / 8) *
						holeConcentrationData[holeConcentrationData.length - 1].x) /
						10) *
				s_x;
			let lastY =
				368 * s_y -
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
					s_x;
				let secondLastY =
					368 * s_y -
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

		if (V_applied_p == 0) {
			// Draw a smooth curve for V_applied_p == 0
			beginShape();

			// First control point
			let firstX =
				(550 + ((400 / 8) * electronConcentrationData[0].x) / 10) * s_x;
			let firstY = 171.25 * s_y;
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < electronConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * s_x;
				let y = 171.25 * s_y;
				curveVertex(x, y);
			}

			// Last control point
			let lastX =
				(550 +
					((400 / 8) *
						electronConcentrationData[electronConcentrationData.length - 1].x) /
						10) *
				s_x;
			let lastY = 171.25 * s_y;
			curveVertex(lastX, lastY);

			endShape();

			checkMouseHoverForNewStraightLine();

			// Draw text for minYY
			noStroke();
			fill(...color.blue, 10);
			textSize(12);
			// text(minYY.toExponential(1) + " /cm\u00B3", 212 * s_x, (181.25 - 15) * s_y);
			// text(minYY.toExponential(1) + " /cm\u00B3", 212 * s_x, (181.25 - 15) * s_y + 197.5 * s_y);

			// Draw the tick marks and labels

			for (let i = -2; i <= 2; i++) {
				textSize(12);
				let middleX = 550 * s_x;
				let tickSpacing = (400 / 8) * s_x * 3; // Spacing between ticks
				let tickLength = 10; // Length of the tick marks
				let yPosition = (10 + 385 / 2 + 96.25 + 70) * s_y; // Y position for the horizontal line

				let tickX = middleX + i * tickSpacing;

				noFill();
				stroke(...color.blue, 120);
				// Draw the tick mark
				line(tickX, yPosition, tickX, yPosition + tickLength / 2);
				line(tickX, 171.25 * s_y, tickX, 171.25 * s_y + tickLength / 2);

				noStroke();
				fill(...color.blue, 5);
				textSize(12);
				// Draw the label
				text(i * 3 + "\u00B5m", tickX - 5, yPosition + 17);
				text(i * 3 + "\u00B5m", tickX - 5, 171.25 * s_y + 17);
			}

			const diff = 4 * Math.pow(10, 7) - minYY;
			const scale = (171.25 - 55) / diff;
			const tickMarks = calculateTickMarks(minYY, 4 * Math.pow(10, 7));

			// Render text for minYY
			const minYTickY = 171.25 * s_y - scale * (minYY - minYY);

			for (const tick of tickMarks) {
				const tickY = 171.25 * s_y - scale * (tick - minYY);
				if (tick === minYY) {
					// Skip the minimum value for tick mark
					// continue;
					// noFill();
					// stroke(...color.blue, 120);
					// line(100 * s_x, tickY+245, 200 * s_x, tickY+245);
				} else {
					// Draw the tick mark
					noFill();
					stroke(...color.blue, 120);
					line(190 * s_x, tickY, 197 * s_x, tickY);
					line(190 * s_x, tickY + 197.5 * s_y, 197 * s_x, tickY + 197.5 * s_y);

					// Add a label for the tick mark
					noStroke();
					fill(...color.blue, 10);
					text(tick.toExponential(1) + "  /cm\u00B3", 212 * s_x, tickY + 5);
					text(
						tick.toExponential(1) + "  /cm\u00B3",
						212 * s_x,
						tickY + 5 + 197.5 * s_y
					);
				}
			}
		} else {
			// Draw the tick marks and labels

			// Draw a smooth curve for V_applied_p != 0
			const diff = maxYY - minYY;
			const xyfactor = (171.25 - 55) / diff;

			beginShape();

			// vertex(190 * s_x, 171.25 * s_y)

			// curveVertex(190 * s_x, 171.25 * s_y);
			// Calculate first point's coordinates
			let firstX =
				(550 + ((400 / 8) * electronConcentrationData[0].x) / 10) * s_x;
			let firstY =
				171.25 * s_y -
				((171.25 - 55) * (electronConcentrationData[0].y - minYY)) / diff;
			curveVertex(firstX, firstY);

			// Add all points as curve vertices
			for (let i = 0; i < electronConcentrationData.length; i++) {
				let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * s_x;
				let y =
					171.25 * s_y -
					((171.25 - 55) * (electronConcentrationData[i].y - minYY)) / diff;
				curveVertex(x, y);
			}

			// Last control point
			let lastX =
				(550 +
					((400 / 8) *
						electronConcentrationData[electronConcentrationData.length - 1].x) /
						10) *
				s_x;
			let lastY =
				171.25 * s_y -
				((171.25 - 55) *
					(electronConcentrationData[electronConcentrationData.length - 1].y -
						minYY)) /
					diff;
			curveVertex(lastX, lastY);

			// curveVertex(190 * s_x, 171.25 * s_y);
			// vertex(190 * s_x, 171.25 * s_y)

			endShape();

			checkMouseHover(minYY, diff);

			for (let i = -2; i <= 2; i++) {
				textSize(12);
				let middleX = 550 * s_x;
				let tickSpacing = (400 / 8) * s_x * 3; // Spacing between ticks
				let tickLength = 10; // Length of the tick marks
				let yPosition = (10 + 385 / 2 + 96.25 + 70) * s_y; // Y position for the horizontal line

				let tickX = middleX + i * tickSpacing;

				noFill();
				stroke(...color.blue, 120);
				// Draw the tick mark
				line(tickX, yPosition, tickX, yPosition + tickLength / 2);
				line(tickX, 171.25 * s_y, tickX, 171.25 * s_y + tickLength / 2);

				noStroke();
				fill(...color.blue, 5);
				textSize(12);
				// Draw the label
				text(i * 3 + "\u00B5m", tickX - 5, yPosition + 17);
				text(i * 3 + "\u00B5m", tickX - 5, 171.25 * s_y + 17);
			}
		}
	}

	fill(...color.blue);

	textSize(14);

	text("Electron Concentration ", 160 * s_x, 30 * s_y);
	text("Hole Concentration ", 160 * s_x, 223 * s_y);

	text("x", 930 * s_x, 190 * s_y);
	text("x", 930 * s_x, (318 + 70) * s_y);

	textSize(14);

	stroke(...color.green, 100);
}

function zap(array1, array2, num) {
	//zap new electron e & new hole h
	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			// check if electron and hole are close and they are showing, not same ID
			let condition =
				abs(array1[i].position.x - array2[k].position.x) < distanceThreshold &&
				abs(array1[i].position.y - array2[k].position.y) < distanceThreshold &&
				array1[i].id != array2[k].id &&
				array1[i].show == 1 &&
				array2[k].show == 1;

			if (scene(2) || scene(3)) {
				condition = condition && array1[i].within == 0;
			}

			if (num == 3 || num == 4) {
				condition = condition && array1[i].position.x > 190 * s_x;
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

				recombineCircles[zap_count] = new Appear(
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

				var newCharge = new Charge(170 * s_x, b, 10, "h", 1);
				newCharge.botz = array2[k].botz;
				array2.push(newCharge);

				chargeID += 1;

				var newCharge2 = new Charge(930 * s_x, b, 10, "e", 0);
				newCharge2.botz = array1[i].botz;
				array1.push(newCharge2);

				// array1.push(new Charge((930)*s_x, b, 10, "e", 0));
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
		timeRateIDK();
		zapLoopsIDK();
		recombineArrays();
		drawChargeDensityData();
		drawElectricFieldData();
		setX_n();
		drawBands();
		drawDepletionRegion();
	}
	// drawRealWorldGraphIDK();
	if (scene(1) || scene(2)) {
		drawGraph();
	}
	if (scene(2) || scene(3)) {
		setCountPN();
	}
	if (scene(3)) {
		rect_density =
			10 +
			0.7 * Math.pow(10, -13) * hole_add_new -
			V_applied_p / 2 +
			V_applied_n / 2;
		drawScene3GraphLines();
		drawConcentrationData();
		countConcentration();
	}

	// graph on off switch
	if (switchGraph) {
		fill(...color.white);
	} else {
		fill(...color.blue, 100);
	}

	noStroke();
	rect(879 * s_x, 368 * s_y, 50 * s_x, 16 * s_y, 5 * s_y, 5 * s_y);

	textSize(12 * s_x);
	if (switchGraph) {
		fill(...color.black);
		text("SWITCH", 880 * s_x, 380 * s_y);
	} else {
		fill(...color.white);
		text("SWITCH", 880 * s_x, 380 * s_y);
	}
}

resetScene = () => {
	count_n = 0;
	count_pn_num = 0;
	e_field_c = 0;

	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	start_graph = 1;
	count_graph = 10;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];
	fixedCharges = [];

	array_graph_con = [];

	con_count = 0;

	// below affects scene 1 + 2
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);
	populateInitial();
};

function populateInitial() {
	// currently only for SCENE 1???
	// populate initial electrons, holes, and fixed charges
	if (scene(2) || scene(3)) {
		if (scene(2)) {
			addInitialCharges(document.getElementById("slider_61").value);
		} else if (scene(3)) {
			addInitialCharges(document.getElementById("slider_611").value);
		}
	}

	if (scene(1)) {
		addInitialCharges(document.getElementById("slider_6").value);
	}
}

setChangeV = (a) => {
	changeV = a;
};

setDistance = (te) => {
	distanceThreshold = te;
};

setConcentration = (te) => {
	factor_c = te;
	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	concentration = te / 3;
	count_graph = 10;

	generatedElectrons = [];
	generatedHoles = [];
	array_graph_con = [];

	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);
};

switch_eh_1 = () => {
	if (switch_1 == 0) {
		//hole
		switch_1 = 1;
		switch_eh_1.checked = true;

		generatedElectrons = [];
		array_graph_con = [];

		con_count = 0;
		array_graph_con.push(
			new Concentration(scattering_velocity, scattering_count)
		);
	} else {
		switch_1 = 0;
		switch_eh_1.checked = false;
		generatedHoles = [];
		array_graph_con = [];

		con_count = 0;
		array_graph_con.push(
			new Concentration(scattering_velocity, scattering_count)
		);
	}
};

setCurrent = (v) => {
	test_current_scale = v;
	document.getElementById("scale_1").value = v;
};

setTest = (v) => {
	test_x_scale = 2 * 0.1;
	document.getElementById("scale_2").value = Math.round(2 * 0.1 * 100) / 100;
};

setVelocity = (v) => {
	scattering_velocity = v;
	for (let i = 0; i < array_graph_con.length; i++) {
		array_graph_con[i].stop_count();
	}
	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

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
	scattering_count = c;
	scattering_count_c = parseInt(c) + 2;

	for (let i = 0; i < array_graph_con.length; i++) {
		array_graph_con[i].stop_count();
	}
	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);
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

time_concentration = () => {
	if (x_con < 750 && count_graph == 0) {
		con_count += 1;
	}
};

scattering = () => {
	//timebetween scatter
	if (scattering_count_c > 2) {
		//time when straight line no scatter

		scatter_tf = false;
	} else if (scattering_count_c <= 2) {
		//time to scatter 2s
		scatter_tf = true;
	}

	scattering_count_c -= 1;

	if (scattering_count_c == 0) {
		scattering_count_c = parseInt(scattering_count) + 2;
	}
};

count_pn_f = () => {
	if (count_pn_num < X_n && hole_add != 0) {
		count_pn_num += 0.03;
		e_field_c += ((0.1 * 1) / rect_density) * 5 * 3;
		count_n += 3;
	}
};

y_change = () => {
	if (x_con > 750 && y_con < concentration * 0.7 * s_y) {
		y_con += 1;
		y_con_2 += test_a / x_con / (concentration * 0.7);
	}
	if (y_con > concentration * 0.7 * s_y) {
		y_con = concentration * 0.7 * s_y;
		y_con_2 = test_a / x_con;
	}

	// y_con_c+=1;
};

genBalls_scene1 = (num) => {};

blinking = () => {
	clearInterval(blink);
	interval_blink = 2000;
	blink = setInterval(function () {
		blinking();
	}, interval_blink);
};

genBalls = (num) => {
	clearInterval(run45);
	interval_45 = 4000 / g_rate;

	run45 = setInterval(function () {
		genBalls(1);
	}, gg_rate);

	if (scene(1) || scene(2) || scene(3)) {
		if (timelectronCount > 0) {
			generatedElectrons = [];
			generatedHoles = [];

			recombinationRate = 0;
		} else if (timelectronCount == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(200 * s_x, 930 * s_x);
				let b = random((20 + 385) * s_y, 770 * s_y);

				generationCircles.push(new Appear(a, b, 10, 0));

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

genBalls_outer = (num) => {
	clearInterval(run_outer);

	run_outer = setInterval(function () {
		genBalls_outer(1); // Generate 1 new set of balls at the rate defined by new_generate
	}, 1000 / new_generate);

	if (scene(3)) {
		if (timelectronCount > 0) {
			generatedElectrons = [];
			generatedHoles = [];

			recombinationRate = 0;

			recombinationRate = 0;
		} else if (timelectronCount == 0) {
			for (let i = 0; i < num; i++) {
				const condition = Math.random() < 0.5; // This gives a 50-50 chance to choose between the two conditions

				let a;
				if (condition) {
					// If condition is true, satisfy the first condition: a >= (550 - (400 / 8) * X_n) * s_x
					// const min = (550 - (400 / 8) * X_n) * s_x;
					const min =
						(400 / 8) * count_pn_num * 2 * s_x +
						(550 - (400 / 8) * count_pn_num) * s_x;
					const max = 930 * s_x; // Assuming 930*s_x is the upper limit for 'a'
					a = random(min, max); // Generate a random number between min and max
				} else {
					// If condition is false, satisfy the second condition: a <= ((400 / 8) * X_n * 2) * s_x + (550 - (400 / 8) * X_n)
					// const max = ((400 / 8) * X_n * 2) * s_x + (550 - (400 / 8) * X_n) * s_x;
					const max = (550 - (400 / 8) * count_pn_num) * s_x;
					const min = 200 * s_x; // Assuming 200*s_x is the lower limit for 'a'
					a = random(min, max); // Generate a random number between min and max
				}

				let b = random((20 + 385) * s_y, 770 * s_y);

				generationCircles.push(new Appear(a, b, 10, 0));

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

genBalls_straight = (num) => {
	if (scene(1)) {
		if (timelectronCount > 0) {
			generatedElectrons = [];
			generatedHoles = [];

			recombinationRate = 0;

			recombinationRate = 0;
		} else if (timelectronCount == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(500 * s_x, 930 * s_x);
				let b = random((20 + 385) * s_y, 770 * s_y);

				generationCircles.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(electronLine, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				aa.straight = 1;
				aa.botz = 3;
				generatedElectrons.push(aa);

				let a_2 = random(300 * s_x, 530 * s_x);
				let b_2 = random((20 + 385) * s_y, 770 * s_y);

				generationCircles.push(new Appear(a_2, b_2, 10, 0));

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
	if (timelectronCount_graph > 0) {
		timelectronCount_graph -= 1;
	}
};

setGeneration = (a) => {
	gg_rate = a;
};

addInitialCharges = (a) => {
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

	count_pn_num = 0;

	changg = ((a - 123) / 10) * 122;

	// changg =80

	hole_add = Math.pow(10, a / 10);
	electron_add = Math.pow(10, a / 10);

	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;
	let pp = mm.toExponential(1);
	document.getElementById("addInitialCharges").value = pp;
	document.getElementById("addInitialCharges_scene2").value = pp;
	document.getElementById("addInitialCharges_scene3").value = pp;
	hole_add_new = mm;

	timelectronCount = 0;
	fixedCharges = [];

	// resetScene()

	random_botz = [];

	////

	count_n = 0;
	count_pn_num = 0;
	e_field_c = 0;

	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	start_graph = 1;
	count_graph = 10;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];

	fixedCharges = [];

	array_graph_con = [];

	con_count = 0;

	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

	//add ---- hhhh left
	if (scene(1) || scene(2) || scene(3)) {
		if (scene(1) || scene(2)) {
			chargeDensityLeftData = [];
			chargeDensityRightData = [];

			let rect_density_new = Math.pow(10, -13) * hole_add_new;

			X_n =
				5811 *
				Math.pow(
					Math.log(hole_add_new / Math.pow(10, 10)) /
						(Math.pow(10, 6) * hole_add_new),
					1 / 2
				) *
				Math.pow(10, 6);

			let ratio =
				(-V_applied_p / 10 + V_applied_n / 10) /
				(1.6 * Math.pow(10, -13) * hole_add_new);
			if (scene(2)) {
				count_pn_num = X_n * (1 + ratio);
			}

			// push charge density data
			if (scene(1)) {
				for (let k = 0; k < Math.round(X_n * 100); k++) {
					//left of 0 negative
					let x = 550 * s_x - (((400 / 8) * k) / 100) * s_x;

					let n =
						(10 + 385 / 2 + 96.25) * s_y +
						rect_density_new *
							4 *
							s_y *
							(1 - Math.exp(-Math.pow(X_n - k / 100, 2) / 0.026));

					chargeDensityLeftData.push({ x: x, y: n * 1 });
					// }
				}

				for (let k = 0; k < Math.round(X_n * 100); k++) {
					//right of 0 negative
					let x = 550 * s_x + (((400 / 8) * k) / 100) * s_x;

					let n =
						(10 + 385 / 2 + 96.25) * s_y -
						rect_density_new *
							4 *
							s_y *
							(1 - Math.exp(-Math.pow(X_n - k / 100, 2) / 0.026));

					chargeDensityRightData.push({ x: x, y: n * 1 });
					// }
				}
			}
			if (scene(2)) {
				for (let k = 0; k < Math.round(count_pn_num * 100); k++) {
					//left of 0 negative
					let x = 550 * s_x - (((400 / 8) * k) / 100) * s_x;

					let n =
						(10 + 385 / 2 + 96.25) * s_y +
						rect_density_new *
							4 *
							s_y *
							(1 - Math.exp(-Math.pow(count_pn_num - k / 100, 2) / 0.026));

					chargeDensityLeftData.push({ x: x, y: n * 1 });
					// }
				}

				for (let k = 0; k < Math.round(count_pn_num * 100); k++) {
					//right of 0 negative
					let x = 550 * s_x + (((400 / 8) * k) / 100) * s_x;

					let n =
						(10 + 385 / 2 + 96.25) * s_y -
						rect_density_new *
							4 *
							s_y *
							(1 - Math.exp(-Math.pow(count_pn_num - k / 100, 2) / 0.026));

					chargeDensityRightData.push({ x: x, y: n * 1 });
					// }
				}
			}
		}

		currentElectronCount = Math.round(electron_add);
		electronCount =
			Math.pow(100, (Math.log10(currentElectronCount) - 8) / 2) / 1000;

		///  fraction cal   // n_c delta_ED

		while (random_botz.length < electronCount - 2) {
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

		n_c = 2.86 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		// let tempe_fractionElectron
		tempe_fractionElectron =
			(-1 +
				Math.pow(
					1 +
						((8 * currentElectronCount) / n_c) *
							Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * currentElectronCount) / n_c) * Math.exp((45 * 300) / 26 / temp));

		fractionElectron.push(Math.round(100 * tempe_fractionElectron) / 100);

		fractionElectronlectronCount = Math.round(
			electronCount * (1 - fractionElectron[fractionElectron.length - 1])
		);
		///

		for (let i = 0; i < electronCount; i++) {
			let a = random(550 * s_x, 930 * s_x);
			// let b = random(30*s_y,730*s_y);
			let b = random((20 + 385) * s_y, 760 * s_y);
			fixedCharges.push(new Appear(a, b, 10, 4, i));
			//id start from 0 ,color 4
			var newCharge = new Charge(a, b, 10, "e", 0);
			newCharge.botz = random_botz[i];
			initialElectrons.push(newCharge);
			chargeID += 1;
		}

		///////hole

		currentHoleCount = Math.round(hole_add);
		// h_count  = (100-0.01)/4*Math.log10(currentHoleCount)+0.01-(100-0.01)*8/4;
		h_count = Math.pow(100, (Math.log10(currentHoleCount) - 8) / 2) / 1000;

		//note_bun

		///  fraction cal   // n_c delta_ED

		n_v = 2.66 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		let tempe_fractionHole;
		tempe_fractionHole =
			(-1 +
				Math.pow(
					1 + ((8 * currentHoleCount) / n_v) * Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * currentHoleCount) / n_v) * Math.exp((45 * 300) / 26 / temp));

		fractionHole.push(Math.round(100 * tempe_fractionHole) / 100);

		fractionHole_count = Math.round(
			electronCount * (1 - fractionHole[fractionHole.length - 1])
		);
		///

		for (let i = 0; i < h_count; i++) {
			let a = random(170 * s_x, 550 * s_x);
			let b = random((20 + 385) * s_y, 760 * s_y);

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

e_field_r = (a) => {
	rate_e = a * 0.1;
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

apply_V_p = (a) => {
	// if ( a>0) {
	//   factor_new=0
	// }

	V_applied_p = a;

	if (parseInt(V_applied_p) >= 3) {
		setFactor(1000);
		factor_new = (1 / 1000) * 10;
	} else {
		// factor_new =1*10
		setFactor(1);
		factor_new = 1 * 20;
	}

	count_pn_num = X_n;
	rect_density =
		1.6 * Math.pow(10, -13) * hole_add_new -
		V_applied_p / 10 +
		V_applied_n / 10;

	let ratio =
		(-V_applied_p / 10 + V_applied_n / 10) /
		(1.6 * Math.pow(10, -13) * hole_add_new);

	count_pn_num = X_n * (1 + ratio);

	// X_n = count_pn_num

	for (var i = 0; i < 100; i++) {
		//(800)/100*i
		if (
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			baseBand[i - 19] =
				-Math.pow(
					(((800 / 100) * i - (550 - (400 / 8) * count_pn_num)) /
						((400 / 8) * count_pn_num)) *
						(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2),
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
				-Math.pow(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2, 1) /
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
			(150 + (800 / 100) * k) * s_x,
			(171.25 - electronBand[k] - 100) * s_y,
		];
	}

	for (let i = 0; i < generatedElectrons.length; i++) {
		let Charge = generatedElectrons[i];
		Charge.origin.x = electronLine[99][1];
	}

	resetScene();
};

apply_V_n = (a) => {
	V_applied_n = a;
};

function updateChargeOrigins() {
	for (let i = 0; i < generatedElectrons.length; i++) {
		let Charge = generatedElectrons[i];
		let newOriginX = findClosestValue(electronLine, Charge.position.x);
		Charge.origin.x = newOriginX;
	}
}

function onRefresh() {
	addInitialCharges(130);
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
		let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * s_x;
		let y =
			171.25 * s_y -
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
		let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * s_x;
		let y =
			368 * s_y - ((171.25 - 55) * (holeConcentrationData[i].y - minYY)) / diff;

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
		let x = (550 + ((400 / 8) * holeConcentrationData[i].x) / 10) * s_x;
		let y = 368 * s_y;

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
		let x = (550 + ((400 / 8) * electronConcentrationData[i].x) / 10) * s_x;
		let y = 171.25 * s_y; // y-coordinate for the new line

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
