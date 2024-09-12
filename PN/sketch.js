/* ------------------------------- 
Author: Christina Wu, Ren Zheng
Contacts: renzheng112@gmail.com
------------------------------- */
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

let appearArray_s1 = [];

let newHoleArray = [];
let holeID_h = [];
let newElectronArray = [];
var time_count_graph = 0;

let factor_ca = 1;
let d_factor = 1;

let num_e;
let num_h;

let changeV = 1;
let volume1;

let V_applied_p = 0;
let V_applied_n = 0;

let cc = 0;

let switchGraph = false;

let appear_id;
let zap_id;

let tempe_fraction_e;

let gg_rate = 1000;

let factor_c = 1;

let new_array_plot_e_set_count = [];
let new_array_plot_h_set_count = [];

let new_array_rou_e_set = [];
let new_array_rou_h_set = [];

let changg = 0;
let e_field_c = 0;
var rate_e = 1;

let rect_density;

let hole_add_new;

let factor_new = 1;

let oldElectronArray_dot = [];
let oldHoleArray_dot = [];

let array_band_hardcode = [];

//fraction
//donor
let n_c;
let delta_ED;
let fraction_e = [];
let fraction_e_count;
let fraction_e_count_t;
let dif_e; //difference in freeze count
let dif_e_current; //difference in freeze difference count and existing paired e count

//acceptor
let n_v;
let delta_EA;
let fraction_h = [];
let fraction_h_count;
let fraction_h_count_t;
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
var generation_R = 100;
var generation_Rate;
var generation_Rate_c;
var current_Electron = 0;
var current_Hole = 0;
var current_Electron_c = 0;
var current_Hole_c = 0;
var constant_EH = 0.0000001;
var recombination_R = 0;
var recombination_Rate = 1;
var recombination_Rate_c = 1;
var ni;
var nn;
var constant_beta = Math.pow(10, -12);
let count_buffer = 0;

var time_count = 0;

let x_probability;
let x_probability_time;

////////////////////////////////
let oldElectronArray = [];
let oldHoleArray = [];
let electronID = [];
let holeID = [];

let global_id = 0;

let global_id_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;

let t_f_prob = false;

let appearArray = [];
let zapArray = [];
let zapArray_s1 = [];

let zapArray_2 = []; //circles
let zapArray_2_pair = []; //circles
let zapArray_dot = [];

let generate_num;

let gap = 200;
let l = 560;
let w = 120;

let scene1_aArray = [];
let scene1_dArray = [];
let scene1_aArray2 = [];
let scene1_dArray2 = [];

let switch_1 = 0;
let recombine = 1;

let fading = 255;

let loopp = true;

let change_square = -30;
let change_length = 100 + change_square;

let temp = 270;

let ni_s1;
let array_band = [];
let array_band1 = [];
let array_band2 = [];
let array_band3 = [];
let array_band4 = [];
let random_botz = [];
var generation_Rate_s1;
var current_Electron_s1 = 0;
var current_Hole_s1 = 0;
var recombination_Rate_s1 = 1;
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

// scaling
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var time_count = 0;

var time_count_blink = 100;

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

let context_1;

var zincrement = 0.001;
var increment = 0.1;
var zoff = 0.0;

let test_num = 10;

let point_count = 200;
let array_plot = [];
let array_plot_0 = [];
let array_positive_y = [];
let array_negative_y = [];
let array_positive_y_0 = [];
let array_negative_y_0 = [];

let box_count_e = [];
let box_count_h = [];

let array_plot_e = [];
let array_plot_h = [];
let array_plot_e_0 = [];
let array_plot_h_0 = [];

let array_positive_y_e = [];
let array_negative_y_e = [];
let array_positive_y_0_e = [];
let array_negative_y_0_e = [];

let array_positive_y_h = [];
let array_negative_y_h = [];
let array_positive_y_0_h = [];
let array_negative_y_0_h = [];

let distance_dis = 9;

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

let line_yellow = [];
let line_green = [];

let line_yellow_data = new Array(100).fill(...color.black);
let line_green_data = [];
let line_green_data_indice = [];

let E_gap_factor = 10;

let array_plot_e_set;
let array_plot_e_0_set;
let array_plot_h_set;
let array_plot_h_0_set;

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
	// window scaling
	scaleWindow();
	setInterval(toggleRecombine, 2000);

	onRefresh();
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");

	frameRate(10);
	setInterval(time_graph, 0.00000000002);

	context_1 = canvas.drawingContext;

	////////////
	// generate balls based on frequency
	run45 = setInterval(function () {
		genBalls(1);
	}, interval_45); // scene changing T
	// generate balls straight
	run11 = setInterval(function () {
		genBalls_straight(1);
	}, 2000); // scene changing T

	count_pn = setInterval(function () {
		count_pn_f();
	}, interval_pn);

	run1 = setInterval(function () {
		genBalls_scene1(1);
	}, interval_1); // scene 1 gen

	blink = setInterval(function () {
		blinking();
	}, interval_blink); // blinking

	scattering_c = setInterval(function () {
		scattering();
	}, 50); // scattring time

	y_run = setInterval(function () {
		y_change();
	}, 1700); // y axis real time change

	run_outer = setInterval(function () {
		genBalls_outer(1);
	}, 1000 / new_generate); // scene changing T

	setInterval(time_concentration, 10);
	/////////
	sceneCount = 0;

	///
	goToHole = [];

	random_hole = [];

	random_direction = [];

	xLimit = int(width / 180);
	yLimit = int(height / 180);
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

function scene1() {
	drawOutlines();

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
	if (time_count_blink > x_probability_time) {
		opacity_circle = 0;
		opacity_circle_up = 0;
	} else if (time_count_blink <= x_probability_time) {
		if (x_probability_time < 30) {
			opacity_circle = 1;
		} else {
			opacity_circle = 1;
			opacity_circle_up = 1;
		}
	}

	if (time_count == 0) {
		ni =
			9.15 *
			Math.pow(10, 19) *
			Math.pow(temp / 300, 1.5) *
			Math.exp(-0.59 / ((0.026 * temp) / 300));
		generation_Rate_c = 0.01 * ni;

		current_Electron_c += generation_Rate_c - recombination_Rate_c;
		current_Hole_c += generation_Rate_c - recombination_Rate_c;
		recombination_Rate_c = current_Electron_c * 0.01;
	} else {
		generation_Rate_c = 0;
		current_Electron_c = 0;
		current_Hole_c = 0;
		recombination_Rate_c = 0;
	}

	scaleWindow();

	g_rate = 0.00000112099 * generation_Rate_c + 0.999998791;

	var target = createVector(300, 300);

	for (let i = 0; i < oldElectronArray.length; i++) {
		if (oldElectronArray[i].dead == 0) {
			oldElectronArray[i].display();
			oldElectronArray[i].appear_update();
			oldElectronArray[i].update();

			if (oldElectronArray[i].appear > 255) {
				oldElectronArray[i].random_walk();
			}
		}
	}

	for (let i = oldElectronArray.length - 1; i >= 0; i--) {
		if (oldElectronArray[i].show == 0) {
			oldElectronArray.splice(i, 1);
		}
	}

	for (let i = newElectronArray.length - 1; i >= 0; i--) {
		if (newElectronArray[i].show == 0) {
			newElectronArray.splice(i, 1);
		}
	}

	for (let i = oldHoleArray.length - 1; i >= 0; i--) {
		if (oldHoleArray[i].show == 0) {
			oldHoleArray.splice(i, 1);
		}
	}

	for (let i = newHoleArray.length - 1; i >= 0; i--) {
		if (newHoleArray[i].show == 0) {
			newHoleArray.splice(i, 1);
		}
	}

	for (let i = 0; i < oldHoleArray.length; i++) {
		if (oldHoleArray[i].dead == 0) {
			oldHoleArray[i].display();
			oldHoleArray[i].appear_update();
			oldHoleArray[i].update();

			if (oldHoleArray[i].appear > 255) {
				oldHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newHoleArray.length; i++) {
		newHoleArray[i].display();
		newHoleArray[i].appear_update();
		newHoleArray[i].update();

		if (newHoleArray[i].appear > 255) {
			newHoleArray[i].straight_walk();
			if (newHoleArray[i].position.y > 49 * s_y) {
				newHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newElectronArray.length; i++) {
		newElectronArray[i].display();
		newElectronArray[i].appear_update();
		newElectronArray[i].update();

		if (newElectronArray[i].appear > 255) {
			newElectronArray[i].straight_walk();
			if (newElectronArray[i].position.y > 49 * s_y) {
				newElectronArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			if (zapArray[i].alpha < 1) {
				zapArray.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		if (appearArray[i].alpha < 1) {
			appearArray.splice(i, 1);
		}
	}

	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			if (zapArray_2[i].zap < 1) {
				zapArray_2.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			} else {
				continue;
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		appearArray[i].display();
		appearArray[i].update();
	}

	for (let i = 0; i < appearArray_s1.length; i++) {
		appearArray_s1[i].display();
		appearArray_s1[i].update();
	}
	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray[i].display();
			zapArray[i].update();
		}
	}

	for (let i = 0; i < zapArray_dot.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray_dot[i].display();
			// zapArray_dot[i].update();
		}
	}

	// new  double circle
	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			zapArray_2[i].display();
			zapArray_2[i].update_circle();
			zapArray_2[i].update_location();
			// zapArray_2[i].seek(middle_position_Array[i]);
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			zapArray_2_pair[i].display();
			zapArray_2_pair[i].update_circle();
			zapArray_2_pair[i].update_location();
			// zapArray_2_pair[i].seek(middle_position_Array[i]);
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			for (let k = 0; k < zapArray_2.length; k++) {
				if (typeof zapArray_2[k] != "undefined") {
					if (zapArray_2_pair[i].id == zapArray_2[k].id) {
						zapArray_2[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
						zapArray_2_pair[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
					}
				}
			}
		}
	}

	if (recombine == 0) {
		zap4(); //zap old electron & old hole
		zap3(); //zap old electron & new hole
		zap2(); //zap new electron & old hole
		zap(); //zap new electron & new hole
	}

	// NOT CHECKED COMPLETELY

	drawGraph();

	///////////new box graphing

	noStroke();
	fill(...color.yellow, color.chargeDensityOpacity);

	rect_density = Math.pow(10, -13) * hole_add_new;
	let rect_density_new = Math.pow(10, -13) * hole_add_new;

	// draw graph data
	if (switchGraph == false) {
		// BEGIN: left charge density
		beginShape();
		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);
		// Add all points as curve vertices
		let left_set = [];

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

		vertex(
			550 * s_x - (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
		);
		endShape();
		// END: left charge density

		// BEGIN: right charge density
		beginShape();

		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);

		// Add all points as curve vertices
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

		vertex(
			550 * s_x + (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
		);

		endShape();
		// END: right charge density
	}

	// START: CHECKED

	noFill();

	fill(...color.pink, 100);

	// E- field data
	if (switchGraph == true) {
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
	}

	let V_built = 0.052 * Math.log(hole_add_new / Math.pow(10, 10));
	X_n =
		5811 *
		Math.pow(
			Math.log(hole_add_new / Math.pow(10, 10)) /
				(Math.pow(10, 6) * hole_add_new),
			1 / 2
		) *
		Math.pow(10, 6);

	for (var i = 0; i < 50; i++) {
		stroke(...color.green, 100);
		noFill();
	}

	for (var i = 0; i < 100; i++) {
		if (
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			array_band1[i - 19] =
				-Math.pow(
					(((800 / 100) * i - (550 - (400 / 8) * count_pn_num)) /
						((400 / 8) * count_pn_num)) *
						(((2 * rect_density) / (X_n * 100)) * count_n * 1.1),
					1
				) /
				5 /
				3;
		} else if (i == 50) {
		} else {
			array_band1[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			array_band1[i] = array_band1[100 - i];
		} else if ((i = 50)) {
			array_band1[i] =
				-Math.pow(((2 * rect_density) / (X_n * 100)) * count_n * 1.1, 1) /
				5 /
				3;
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band2[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				array_band2[i] = array_band2[i] + array_band1[k];
			}
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band3[i] = array_band2[i];
	}

	// END: CHECKED

	drawBands();
	drawDepletionRegion();

	textSize(12);

	stroke(...color.green, 100);

	//real world graph
	if (real_graph == 1) {
		// if (switch_1 ==0){
		noStroke();

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

		// }

		// if (switch_1==0){
		noStroke();
		fill(...color.yellow, 50);
		//scale current

		// if (count_graph ==0){
		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale; //scale by 5
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, (test_a / x_con) * s_y);
		// }
		// } else if (switch_1 ==1) {
		noStroke();
		fill(...color.green, 50);

		// if (count_graph==0){
		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale;
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, -(test_a / x_con) * s_y);
		// }
		// }

		// console.log(con_count)
		// if (count_graph ==0){
		for (let i = 0; i < array_graph_con.length; i++) {
			array_graph_con[i].update();
		}
		// }
	}
}

function scene2() {
	drawOutlines();

	count_pn_num = X_n;

	let ratio =
		(-V_applied_p / 10 + V_applied_n / 10) /
		(1.6 * Math.pow(10, -13) * hole_add_new);

	// console.log (ratio)

	count_pn_num = X_n * (1 + ratio);

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
	if (time_count_blink > x_probability_time) {
		opacity_circle = 0;
		opacity_circle_up = 0;
	} else if (time_count_blink <= x_probability_time) {
		if (x_probability_time < 30) {
			opacity_circle = 1;
		} else {
			opacity_circle = 1;
			opacity_circle_up = 1;
		}
	}

	if (time_count == 0) {
		ni =
			9.15 *
			Math.pow(10, 19) *
			Math.pow(temp / 300, 1.5) *
			Math.exp(-0.59 / ((0.026 * temp) / 300));
		generation_Rate_c = 0.01 * ni;

		current_Electron_c += generation_Rate_c - recombination_Rate_c;
		current_Hole_c += generation_Rate_c - recombination_Rate_c;
		recombination_Rate_c = current_Electron_c * 0.01;
	} else {
		generation_Rate_c = 0;
		current_Electron_c = 0;
		current_Hole_c = 0;
		recombination_Rate_c = 0;
	}

	scaleWindow();

	g_rate = 0.00000112099 * generation_Rate_c + 0.999998791;

	var target = createVector(300, 300);

	for (let i = 0; i < oldElectronArray.length; i++) {
		if (oldElectronArray[i].dead == 0) {
			oldElectronArray[i].display();
			oldElectronArray[i].appear_update();
			oldElectronArray[i].update();

			if (oldElectronArray[i].appear > 255) {
				oldElectronArray[i].random_walk();
			}
		}
	}

	for (let i = oldElectronArray.length - 1; i >= 0; i--) {
		if (oldElectronArray[i].show == 0) {
			oldElectronArray.splice(i, 1);
			// console.log("haha")
		}
	}

	for (let i = newElectronArray.length - 1; i >= 0; i--) {
		if (newElectronArray[i].show == 0) {
			newElectronArray.splice(i, 1);
		}
	}

	for (let i = oldHoleArray.length - 1; i >= 0; i--) {
		if (oldHoleArray[i].show == 0) {
			oldHoleArray.splice(i, 1);
		}
	}

	for (let i = newHoleArray.length - 1; i >= 0; i--) {
		if (newHoleArray[i].show == 0) {
			newHoleArray.splice(i, 1);
		}
	}

	for (let i = 0; i < oldHoleArray.length; i++) {
		if (oldHoleArray[i].dead == 0) {
			oldHoleArray[i].display();
			oldHoleArray[i].appear_update();
			oldHoleArray[i].update();

			if (oldHoleArray[i].appear > 255) {
				oldHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newHoleArray.length; i++) {
		newHoleArray[i].display();
		newHoleArray[i].appear_update();
		newHoleArray[i].update();

		if (newHoleArray[i].appear > 255) {
			newHoleArray[i].straight_walk();
			if (newHoleArray[i].position.y > 49 * s_y) {
				newHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newElectronArray.length; i++) {
		newElectronArray[i].display();
		newElectronArray[i].appear_update();
		newElectronArray[i].update();

		if (newElectronArray[i].appear > 255) {
			newElectronArray[i].straight_walk();
			if (newElectronArray[i].position.y > 49 * s_y) {
				newElectronArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			if (zapArray[i].alpha < 1) {
				zapArray.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		if (appearArray[i].alpha < 1) {
			appearArray.splice(i, 1);
		}
	}

	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			if (zapArray_2[i].zap < 1) {
				zapArray_2.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			} else {
				continue;
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		appearArray[i].display();
		appearArray[i].update();
	}

	for (let i = 0; i < appearArray_s1.length; i++) {
		appearArray_s1[i].display();
		appearArray_s1[i].update();
	}
	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray[i].display();
			zapArray[i].update();
		}
	}

	for (let i = 0; i < zapArray_dot.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray_dot[i].display();
			// zapArray_dot[i].update();
		}
	}

	// new  double circle
	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			zapArray_2[i].display();
			zapArray_2[i].update_circle();
			zapArray_2[i].update_location();
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			zapArray_2_pair[i].display();
			zapArray_2_pair[i].update_circle();
			zapArray_2_pair[i].update_location();
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			for (let k = 0; k < zapArray_2.length; k++) {
				if (typeof zapArray_2[k] != "undefined") {
					if (zapArray_2_pair[i].id == zapArray_2[k].id) {
						zapArray_2[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
						zapArray_2_pair[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
					}
				}
			}
		}
	}

	if (recombine == 1) {
		// zap4();
		for (let i = 0; i < oldElectronArray.length; i++) {
			for (let k = 0; k < oldHoleArray.length; k++) {
				if (
					abs(oldElectronArray[i].position.x - oldHoleArray[k].position.x) <
						distance_dis &&
					abs(oldElectronArray[i].position.y - oldHoleArray[k].position.y) <
						distance_dis &&
					oldElectronArray[i].id != oldHoleArray[k].id &&
					oldElectronArray[i].show == 1 &&
					oldHoleArray[k].show == 1 &&
					oldElectronArray[i].position.x > 190 * s_x &&
					oldElectronArray[i].within == 0 // scene 2 diff
				) {
					//mark
					oldElectronArray[i].stop();
					oldHoleArray[k].stop();
					oldElectronArray[i].noShow();
					oldHoleArray[k].noShow();
					oldElectronArray[i].deadd();
					oldHoleArray[k].deadd();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							oldHoleArray[k].position,
							oldElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						oldElectronArray[i].position.x,
						oldElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						oldHoleArray[k].position.x,
						oldHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = oldElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = oldHoleArray[k].botz;
					oldHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = oldElectronArray[i].botz;
					oldElectronArray.push(vehicle2);

					global_id += 1;

					oldElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);

					break;
				}
			}
		}

		// zap3();
		//zap electron & hole new h
		for (let i = 0; i < oldElectronArray.length; i++) {
			for (let k = 0; k < newHoleArray.length; k++) {
				if (
					abs(oldElectronArray[i].position.x - newHoleArray[k].position.x) <
						distance_dis &&
					abs(oldElectronArray[i].position.y - newHoleArray[k].position.y) <
						distance_dis &&
					oldElectronArray[i].id != newHoleArray[k].id &&
					oldElectronArray[i].show == 1 &&
					newHoleArray[k].show == 1 &&
					oldElectronArray[i].within == 0 // scene 2 diff
				) {
					//mark
					oldElectronArray[i].stop();
					newHoleArray[k].stop();
					oldElectronArray[i].noShow();
					newHoleArray[k].noShow();
					oldElectronArray[i].deadd();
					newHoleArray[k].deadd();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							newHoleArray[k].position,
							oldElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						oldElectronArray[i].position.x,
						oldElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						newHoleArray[k].position.x,
						newHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = oldElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = newHoleArray[k].botz;
					newHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = oldElectronArray[i].botz;
					oldElectronArray.push(vehicle2);

					global_id += 1;

					oldElectronArray.splice(i, 1);
					newHoleArray.splice(k, 1);
					break;
				}
			}
		}

		// zap2();
		//zap new electron e & hole
		for (let i = 0; i < newElectronArray.length; i++) {
			for (let k = 0; k < oldHoleArray.length; k++) {
				if (
					abs(newElectronArray[i].position.x - oldHoleArray[k].position.x) <
						distance_dis &&
					abs(newElectronArray[i].position.y - oldHoleArray[k].position.y) <
						distance_dis &&
					newElectronArray[i].id != oldHoleArray[k].id &&
					newElectronArray[i].show == 1 &&
					oldHoleArray[k].show == 1 &&
					newElectronArray[i].within == 0 // scene 2 diff
				) {
					//mark
					newElectronArray[i].stop();
					oldHoleArray[k].stop();
					newElectronArray[i].noShow();
					oldHoleArray[k].noShow();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							oldHoleArray[k].position,
							newElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						newElectronArray[i].position.x,
						newElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						oldHoleArray[k].position.x,
						oldHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = newElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = oldHoleArray[k].botz;
					oldHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = newElectronArray[i].botz;
					newElectronArray.push(vehicle2);

					global_id += 1;

					newElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);

					break;
				}
			}
		}

		// zap();
		//zap new electron e & new hole h
		for (let i = 0; i < newElectronArray.length; i++) {
			for (let k = 0; k < newHoleArray.length; k++) {
				if (
					abs(newElectronArray[i].position.x - newHoleArray[k].position.x) <
						distance_dis &&
					abs(newElectronArray[i].position.y - newHoleArray[k].position.y) <
						distance_dis &&
					newElectronArray[i].id != newHoleArray[k].id &&
					newElectronArray[i].show == 1 &&
					newHoleArray[k].show == 1 &&
					newElectronArray[i].within == 0 // scene 2 diff
				) {
					//mark
					newElectronArray[i].stop();
					newHoleArray[k].stop();
					newElectronArray[i].noShow();
					newHoleArray[k].noShow();
					// oldElectronArray[i].update();
					// oldHoleArray[k].update();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							newHoleArray[k].position,
							newElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						newElectronArray[i].position.x,
						newElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						newHoleArray[k].position.x,
						newHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					console.log("diss2");

					let b = newElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = newHoleArray[k].botz;
					newHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = newElectronArray[i].botz;
					newElectronArray.push(vehicle2);

					// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
					// electronID_e.push(global_id);
					global_id += 1;

					oldElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);

					break;
				}
			}
		}
	}

	drawGraph();

	// NOT CHECKED COMPLETELY

	///////////new box graphing

	noStroke();
	fill(...color.yellow, 100);

	rect_density =
		10 +
		0.7 * Math.pow(10, -13) * hole_add_new -
		V_applied_p / 2 +
		V_applied_n / 2;

	/////

	let rect_density_new = Math.pow(10, -13) * hole_add_new;

	if (switchGraph == false) {
		///left
		beginShape();
		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);
		// Add all points as curve vertices
		for (let i = 0; i < new_array_rou_e_set.length; i++) {
			let x = new_array_rou_e_set[i].x;
			let y = new_array_rou_e_set[i].y;
			vertex(x, y);
		}
		vertex(
			550 * s_x - (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
		);
		endShape();

		///right
		beginShape();

		vertex(550 * s_x, (10 + 385 / 2 + 96.25) * s_y);

		// Add all points as curve vertices
		// start scene 2 diff
		for (let i = 0; i < new_array_rou_h_set.length; i++) {
			let x = new_array_rou_h_set[i].x;
			let y = new_array_rou_h_set[i].y;
			vertex(x, y);
		}
		// end scene 2 diff
		vertex(
			550 * s_x + (400 / 8) * count_pn_num * s_x,
			(10 + 385 / 2 + 96.25) * s_y
		);

		endShape();
	}

	// START: CHECKED
	noFill();

	fill(...color.pink, 100);

	//E- field
	if (switchGraph == true) {
		// scene 2 diff: count n
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

	let V_built = 0.052 * Math.log(hole_add_new / Math.pow(10, 10));
	// console.log(V_built)
	X_n =
		5811 *
		Math.pow(
			Math.log(hole_add_new / Math.pow(10, 10)) /
				(Math.pow(10, 6) * hole_add_new),
			1 / 2
		) *
		Math.pow(10, 6);

	for (var i = 0; i < 50; i++) {
		stroke(...color.green, 100);
		noFill();
	}

	for (var i = 0; i < 100; i++) {
		//(800)/100*i
		if (
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			// start scene 2 different (math.pow line)
			array_band1[i - 19] =
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
			array_band1[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			array_band1[i] = array_band1[100 - i];
		} else if ((i = 50)) {
			// start scene 2 different (Math.pow line)
			array_band1[i] =
				-Math.pow(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2, 1) /
				5 /
				3;
			// end
		}
	}

	// start: scene 2 different
	for (var i = 0; i < 100; i++) {
		array_band1[i] = array_band1[i] / 3;
	}
	// end

	for (var i = 0; i < 100; i++) {
		array_band2[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				array_band2[i] = array_band2[i] + array_band1[k];
			}
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band3[i] = array_band2[i];
	}

	// END: CHECKED

	drawBands();
	drawDepletionRegion();

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

	// Set the circle properties
	fill(...color.greenBright); // green
	noStroke();
}

function scene3() {
	count_pn_num = X_n;

	let ratio =
		(-V_applied_p / 10 + V_applied_n / 10) /
		(1.6 * Math.pow(10, -13) * hole_add_new);

	// console.log (ratio)

	count_pn_num = X_n * (1 + ratio);

	stroke(...color.green, 100);
	strokeWeight(1);

	noFill();
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 2) * s_y
	);

	fill(...color.black2);
	//one
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		10 * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	//two
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385 / 2) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	noFill();

	/////////////////

	// x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
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
	if (time_count_blink > x_probability_time) {
		opacity_circle = 0;
		opacity_circle_up = 0;
	} else if (time_count_blink <= x_probability_time) {
		if (x_probability_time < 30) {
			opacity_circle = 1;
		} else {
			opacity_circle = 1;
			opacity_circle_up = 1;
		}
	}

	if (time_count == 0) {
		ni =
			9.15 *
			Math.pow(10, 19) *
			Math.pow(temp / 300, 1.5) *
			Math.exp(-0.59 / ((0.026 * temp) / 300));
		generation_Rate_c = 0.01 * ni;

		current_Electron_c += generation_Rate_c - recombination_Rate_c;
		current_Hole_c += generation_Rate_c - recombination_Rate_c;
		recombination_Rate_c = current_Electron_c * 0.01;
	} else {
		generation_Rate_c = 0;
		current_Electron_c = 0;
		current_Hole_c = 0;
		recombination_Rate_c = 0;
	}

	s_x = windowWidth / scale_x;
	s_y = windowHeight / scale_y;

	g_rate = 0.00000112099 * generation_Rate_c + 0.999998791;

	var target = createVector(300, 300);

	for (let i = 0; i < oldElectronArray.length; i++) {
		if (oldElectronArray[i].dead == 0) {
			oldElectronArray[i].display();
			oldElectronArray[i].appear_update();
			oldElectronArray[i].update();

			if (oldElectronArray[i].appear > 255) {
				oldElectronArray[i].random_walk();
			}
		}
	}

	for (let i = oldElectronArray.length - 1; i >= 0; i--) {
		if (oldElectronArray[i].show == 0) {
			oldElectronArray.splice(i, 1);
		}
	}

	for (let i = newElectronArray.length - 1; i >= 0; i--) {
		if (newElectronArray[i].show == 0) {
			newElectronArray.splice(i, 1);
		}
	}

	for (let i = oldHoleArray.length - 1; i >= 0; i--) {
		if (oldHoleArray[i].show == 0) {
			oldHoleArray.splice(i, 1);
		}
	}

	for (let i = newHoleArray.length - 1; i >= 0; i--) {
		if (newHoleArray[i].show == 0) {
			newHoleArray.splice(i, 1);
		}
	}

	for (let i = 0; i < oldHoleArray.length; i++) {
		if (oldHoleArray[i].dead == 0) {
			oldHoleArray[i].display();
			oldHoleArray[i].appear_update();
			oldHoleArray[i].update();

			if (oldHoleArray[i].appear > 255) {
				oldHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newHoleArray.length; i++) {
		newHoleArray[i].display();
		newHoleArray[i].appear_update();
		newHoleArray[i].update();

		if (newHoleArray[i].appear > 255) {
			newHoleArray[i].straight_walk();
			if (newHoleArray[i].position.y > 49 * s_y) {
				newHoleArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < newElectronArray.length; i++) {
		newElectronArray[i].display();
		newElectronArray[i].appear_update();
		newElectronArray[i].update();

		if (newElectronArray[i].appear > 255) {
			newElectronArray[i].straight_walk();
			if (newElectronArray[i].position.y > 49 * s_y) {
				newElectronArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			if (zapArray[i].alpha < 1) {
				zapArray.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		if (appearArray[i].alpha < 1) {
			appearArray.splice(i, 1);
		}
	}

	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			if (zapArray_2[i].zap < 1) {
				zapArray_2.splice(i, 1);
			}
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			if (zapArray_2_pair[i].zap < 1) {
				zapArray_2_pair.splice(i, 1);
			} else {
				continue;
			}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		appearArray[i].display();
		appearArray[i].update();
	}

	for (let i = 0; i < appearArray_s1.length; i++) {
		appearArray_s1[i].display();
		appearArray_s1[i].update();
	}
	for (let i = 0; i < zapArray.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray[i].display();
			zapArray[i].update();
		}
	}

	for (let i = 0; i < zapArray_dot.length; i++) {
		if (typeof zapArray[i] != "undefined") {
			zapArray_dot[i].display();
		}
	}

	// new  double circle
	for (let i = 0; i < zapArray_2.length; i++) {
		if (typeof zapArray_2[i] != "undefined") {
			zapArray_2[i].display();
			zapArray_2[i].update_circle();
			zapArray_2[i].update_location();
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			zapArray_2_pair[i].display();
			zapArray_2_pair[i].update_circle();
			zapArray_2_pair[i].update_location();
		}
	}

	for (let i = 0; i < zapArray_2_pair.length; i++) {
		if (typeof zapArray_2_pair[i] != "undefined") {
			for (let k = 0; k < zapArray_2.length; k++) {
				if (typeof zapArray_2[k] != "undefined") {
					if (zapArray_2_pair[i].id == zapArray_2[k].id) {
						zapArray_2[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
						zapArray_2_pair[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									zapArray_2[k].position,
									zapArray_2_pair[i].position
								),
								2
							)
						);
					}
				}
			}
		}
	}

	if (recombine == 1) {
		//zap
		for (let i = 0; i < oldElectronArray.length; i++) {
			for (let k = 0; k < oldHoleArray.length; k++) {
				if (
					abs(oldElectronArray[i].position.x - oldHoleArray[k].position.x) <
						distance_dis &&
					abs(oldElectronArray[i].position.y - oldHoleArray[k].position.y) <
						distance_dis &&
					oldElectronArray[i].id != oldHoleArray[k].id &&
					oldElectronArray[i].show == 1 &&
					oldHoleArray[k].show == 1 &&
					oldElectronArray[i].position.x > 190 * s_x &&
					oldElectronArray[i].within == 0
				) {
					//huhu

					//15

					//mark
					oldElectronArray[i].stop();
					oldHoleArray[k].stop();
					oldElectronArray[i].noShow();
					oldHoleArray[k].noShow();
					oldElectronArray[i].deadd();
					oldHoleArray[k].deadd();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							oldHoleArray[k].position,
							oldElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						oldElectronArray[i].position.x,
						oldElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						oldHoleArray[k].position.x,
						oldHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = oldElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = oldHoleArray[k].botz;
					oldHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = oldElectronArray[i].botz;
					oldElectronArray.push(vehicle2);

					global_id += 1;

					oldElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);
					console.log("diss");

					break;
				}
			}
		}

		//zap electron & hole new h
		for (let i = 0; i < oldElectronArray.length; i++) {
			for (let k = 0; k < newHoleArray.length; k++) {
				if (
					abs(oldElectronArray[i].position.x - newHoleArray[k].position.x) <
						distance_dis &&
					abs(oldElectronArray[i].position.y - newHoleArray[k].position.y) <
						distance_dis &&
					oldElectronArray[i].id != newHoleArray[k].id &&
					oldElectronArray[i].show == 1 &&
					newHoleArray[k].show == 1 &&
					oldElectronArray[i].within == 0
				) {
					//huhu

					//mark
					oldElectronArray[i].stop();
					newHoleArray[k].stop();
					oldElectronArray[i].noShow();
					newHoleArray[k].noShow();
					oldElectronArray[i].deadd();
					newHoleArray[k].deadd();
					// oldElectronArray[i].update();
					// oldHoleArray[k].update();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							newHoleArray[k].position,
							oldElectronArray[i].position
						),
						2
					);
					//original dots
					// oldElectronArray[i].seek(middle_position_Array[zap_count]);
					// oldHoleArray[k].seek(middle_position_Array[zap_count]);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						oldElectronArray[i].position.x,
						oldElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						newHoleArray[k].position.x,
						newHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = oldElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = newHoleArray[k].botz;
					newHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = oldElectronArray[i].botz;
					oldElectronArray.push(vehicle2);

					// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
					// electronID_e.push(global_id);
					global_id += 1;

					oldElectronArray.splice(i, 1);
					newHoleArray.splice(k, 1);
					break;
				}
			}
		}

		//zap new electron e & hole
		for (let i = 0; i < newElectronArray.length; i++) {
			for (let k = 0; k < oldHoleArray.length; k++) {
				if (
					abs(newElectronArray[i].position.x - oldHoleArray[k].position.x) <
						distance_dis &&
					abs(newElectronArray[i].position.y - oldHoleArray[k].position.y) <
						distance_dis &&
					newElectronArray[i].id != oldHoleArray[k].id &&
					newElectronArray[i].show == 1 &&
					oldHoleArray[k].show == 1 &&
					newElectronArray[i].within == 0
				) {
					//mark
					newElectronArray[i].stop();
					oldHoleArray[k].stop();
					newElectronArray[i].noShow();
					oldHoleArray[k].noShow();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							oldHoleArray[k].position,
							newElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						newElectronArray[i].position.x,
						newElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						oldHoleArray[k].position.x,
						oldHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					let b = newElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = oldHoleArray[k].botz;
					oldHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = newElectronArray[i].botz;
					newElectronArray.push(vehicle2);

					// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
					// electronID_e.push(global_id);
					global_id += 1;

					newElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);

					break;
				}
			}
		}

		//zap new electron e & new hole h
		for (let i = 0; i < newElectronArray.length; i++) {
			for (let k = 0; k < newHoleArray.length; k++) {
				if (
					abs(newElectronArray[i].position.x - newHoleArray[k].position.x) <
						distance_dis &&
					abs(newElectronArray[i].position.y - newHoleArray[k].position.y) <
						distance_dis &&
					newElectronArray[i].id != newHoleArray[k].id &&
					newElectronArray[i].show == 1 &&
					newHoleArray[k].show == 1 &&
					newElectronArray[i].within == 0
				) {
					//mark
					newElectronArray[i].stop();
					newHoleArray[k].stop();
					newElectronArray[i].noShow();
					newHoleArray[k].noShow();
					// oldElectronArray[i].update();
					// oldHoleArray[k].update();

					middle_position_Array[zap_count] = p5.Vector.div(
						p5.Vector.add(
							newHoleArray[k].position,
							newElectronArray[i].position
						),
						2
					);

					//effects

					zapArray[zap_count] = new Appear(
						middle_position_Array[zap_count].x,
						middle_position_Array[zap_count].y,
						10,
						1,
						zap_count
					);
					zapArray_2[zap_count] = new Appear(
						newElectronArray[i].position.x,
						newElectronArray[i].position.y,
						10,
						2,
						zap_count
					);
					zapArray_2_pair[zap_count] = new Appear(
						newHoleArray[k].position.x,
						newHoleArray[k].position.y,
						10,
						3,
						zap_count
					);

					zap_count++;

					console.log("diss2");

					let b = newElectronArray[i].position.y;

					var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
					vehicle.botz = newHoleArray[k].botz;
					newHoleArray.push(vehicle);

					holeID_h.push(global_id);
					global_id += 1;

					var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
					vehicle2.botz = newElectronArray[i].botz;
					newElectronArray.push(vehicle2);

					// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
					// electronID_e.push(global_id);
					global_id += 1;

					oldElectronArray.splice(i, 1);
					oldHoleArray.splice(k, 1);

					break;
				}
			}
		}
	}

	noFill();

	//coordinates
	//up
	stroke(...color.blue, 180);

	//       //horizon

	///////////new box graphing

	noStroke();
	fill(...color.yellow, 100);

	rect_density =
		10 +
		0.7 * Math.pow(10, -13) * hole_add_new -
		V_applied_p / 2 +
		V_applied_n / 2;

	/////

	let rect_density_new = Math.pow(10, -13) * hole_add_new;

	let V_built = 0.052 * Math.log(hole_add_new / Math.pow(10, 10));
	// console.log(V_built)
	X_n =
		5811 *
		Math.pow(
			Math.log(hole_add_new / Math.pow(10, 10)) /
				(Math.pow(10, 6) * hole_add_new),
			1 / 2
		) *
		Math.pow(10, 6);

	for (var i = 0; i < 50; i++) {
		stroke(...color.green, 100);
		noFill();
	}

	for (var i = 0; i < 100; i++) {
		//(800)/100*i
		if (
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			array_band1[i - 19] =
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
			array_band1[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			array_band1[i] = array_band1[100 - i];
		} else if ((i = 50)) {
			array_band1[i] =
				-Math.pow(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2, 1) /
				5 /
				3;
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band1[i] = array_band1[i] / 3;
	}

	for (var i = 0; i < 100; i++) {
		array_band2[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				array_band2[i] = array_band2[i] + array_band1[k];
			}
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band3[i] = array_band2[i];
	}

	stroke(...color.yellow);

	for (var k = 0; k < 100; k++) {
		//yellow curve
		line_yellow[k] = [
			(150 + (800 / 100) * k) * s_x,
			(171.25 - array_band2[k] - 100) * s_y,
		];
	}

	for (var k = 0; k < 100; k++) {
		//yellow curve
		line_green[k] = [
			(150 + (800 / 100) * k) * s_x,
			(+171.25 - array_band3[k] - 30) * s_y,
		];
	}

	// beginShape();

	for (var k = 0; k < 100; k++) {
		//yellow curve
		// curveVertex((150+(800)/100*k)*s_x,(171.25-array_band2[k]-100)*s_y)

		line_yellow_data[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - array_band2[k] - 100) * s_y,
		};
	}

	for (var k = 0; k < 100; k++) {
		//green curve

		// curveVertex((150+(800)/100*k)*s_x,(-30+171.25-array_band3[k]-30)*s_y)
		line_green_data[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - array_band3[k] - 30 - 30) * s_y,
		};
	}

	// Draw depletion region?
	stroke(...color.red2, 210);
	context_1.beginPath();
	context_1.setLineDash([10, 10]);
	context_1.rect(
		(550 - (400 / 8) * count_pn_num) * s_x,
		(10 + 385) * s_y,
		(400 / 8) * count_pn_num * 2 * s_x,
		(770 / 2) * s_y
	);

	context_1.closePath();
	context_1.stroke();
	context_1.setLineDash([]);

	stroke(...color.green, 100);

	// Set the circle properties
	fill(...color.greenBright); // green
	noStroke();

	stroke(...color.green, 100);
	strokeWeight(1);

	noFill();
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 2) * s_y
	);

	fill(...color.black2);
	//one
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		10 * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	//two
	rect(
		(10 + 100 + 70 + change_square) * s_x,
		(10 + 385 / 2) * s_y,
		(940 - change_length - 70) * s_x,
		(770 / 4) * s_y
	);

	noFill();

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

	if (switch_1 == 2) {
		// Reset the arrays to be empty before starting the counting
		array_plot_e = new Array(point_count).fill().map(() => []);
		array_plot_e_0 = [];
		array_plot_h = new Array(point_count).fill().map(() => []);
		array_plot_h_0 = [];
		for (let i = 0; i < oldElectronArray.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					oldElectronArray[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					oldElectronArray[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					array_plot_e[k].push(oldElectronArray[i]);
					// console.log(array_plot)
				}
			}

			if (
				oldElectronArray[i].position.x <= 190 * s_x &&
				oldElectronArray[i].position.x >= 150 * s_x &&
				oldElectronArray[i].show == 1
			) {
				array_plot_e_0.push(oldElectronArray[i]);

				// console.log(array_plot_0.length)
			}
		}

		for (let i = 0; i < newElectronArray.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					newElectronArray[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					newElectronArray[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					array_plot_e[k].push(newElectronArray[i]);
					// console.log(array_plot)
				}
			}

			if (
				newElectronArray[i].position.x <= 190 * s_x &&
				newElectronArray[i].position.x >= 150 * s_x &&
				newElectronArray[i].show == 1
			) {
				array_plot_e_0.push(newElectronArray[i]);

				// console.log(array_plot_0.length)
			}
		}

		///////////

		for (let i = 0; i < oldHoleArray.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					oldHoleArray[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					oldHoleArray[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					array_plot_h[k].push(oldHoleArray[i]);
					// console.log(array_plot)
				}
			}

			if (
				oldHoleArray[i].position.x <= 190 * s_x &&
				oldHoleArray[i].position.x >= 150 * s_x &&
				oldHoleArray[i].show == 1
			) {
				array_plot_h_0.push(oldHoleArray[i]);

				// console.log(array_plot_0.length)
			}
		}

		// newHoleArray

		for (let i = 0; i < newHoleArray.length; i++) {
			for (let k = 0; k < point_count; k++) {
				if (
					newHoleArray[i].position.x <=
						(190 + ((950 - 190) / point_count) * (k + 1)) * s_x &&
					newHoleArray[i].position.x >=
						(190 + ((950 - 190) / point_count) * k) * s_x
				) {
					array_plot_h[k].push(newHoleArray[i]);
					// console.log(array_plot)
				}
			}

			if (
				newHoleArray[i].position.x <= 190 * s_x &&
				newHoleArray[i].position.x >= 150 * s_x &&
				newHoleArray[i].show == 1
			) {
				array_plot_h_0.push(newHoleArray[i]);

				// console.log(array_plot_0.length)
			}
		}

		///////

		fill(...color.white);
		noStroke();
		for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
			// Get the first and last 'y' values
			const firstY = new_array_plot_h_set_count[0].y;
			const lastY =
				new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1].y;

			// Find the maximum 'y' value
			const maxYY = Math.max(firstY, lastY);
			const minYY = Math.min(firstY, lastY);

			// Determine the order of magnitude of the maxY value
			const orderOfMagnitude = Math.floor(Math.log10(maxYY));

			// The factor is 10 to the power of (order of magnitude - 1)
			const factor_ = Math.pow(10, orderOfMagnitude - 1);
			// console.log (orderOfMagnitude)

			noFill();
			stroke(...color.green);

			if (V_applied_p == 0) {
				// Draw ellipses as before
				beginShape(); // Start the shape

				// Calculate first point's coordinates for control point
				let firstX =
					(550 + ((400 / 8) * new_array_plot_h_set_count[0].x) / 10) * s_x;
				let firstY = 368 * s_y;

				// Duplicate the first point as a control point
				curveVertex(firstX, firstY);

				// Add all points as curve vertices
				for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
					let x =
						(550 + ((400 / 8) * new_array_plot_h_set_count[i].x) / 10) * s_x;
					let y = 368 * s_y;
					curveVertex(x, y);
				}

				// Calculate last point's coordinates for control point
				let lastX =
					(550 +
						((400 / 8) *
							new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1]
								.x) /
							10) *
					s_x;
				let lastY = 368 * s_y;

				// Duplicate the last point as a control point
				curveVertex(lastX, lastY);

				// Add an extra control point at the end if there are multiple points
				if (new_array_plot_h_set_count.length > 1) {
					let secondLastX =
						(550 +
							((400 / 8) *
								new_array_plot_h_set_count[
									new_array_plot_h_set_count.length - 2
								].x) /
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
				let firstX =
					(550 + ((400 / 8) * new_array_plot_h_set_count[0].x) / 10) * s_x;
				let firstY =
					368 * s_y -
					((171.25 - 55) * (new_array_plot_h_set_count[0].y - minYY)) / diff;

				// Duplicate first point as a control point
				curveVertex(firstX, firstY);

				// Add all points as curve vertices
				for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
					let x =
						(550 + ((400 / 8) * new_array_plot_h_set_count[i].x) / 10) * s_x;
					let y =
						368 * s_y -
						((171.25 - 55) * (new_array_plot_h_set_count[i].y - minYY)) / diff;
					curveVertex(x, y);
				}

				// Calculate last point's coordinates
				let lastX =
					(550 +
						((400 / 8) *
							new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1]
								.x) /
							10) *
					s_x;
				let lastY =
					368 * s_y -
					((171.25 - 55) *
						(new_array_plot_h_set_count[new_array_plot_h_set_count.length - 1]
							.y -
							minYY)) /
						diff;

				// Duplicate last point as a control point
				curveVertex(lastX, lastY);

				// Add an extra control point at the end
				if (new_array_plot_h_set_count.length > 1) {
					let secondLastX =
						(550 +
							((400 / 8) *
								new_array_plot_h_set_count[
									new_array_plot_h_set_count.length - 2
								].x) /
								10) *
						s_x;
					let secondLastY =
						368 * s_y -
						((171.25 - 55) *
							(new_array_plot_h_set_count[new_array_plot_h_set_count.length - 2]
								.y -
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

		for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
			// Get the first and last 'y' values
			const firstY = new_array_plot_e_set_count[0].y;
			const lastY =
				new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y;

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
					(550 + ((400 / 8) * new_array_plot_e_set_count[0].x) / 10) * s_x;
				let firstY = 171.25 * s_y;
				curveVertex(firstX, firstY);

				// Add all points as curve vertices
				for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
					let x =
						(550 + ((400 / 8) * new_array_plot_e_set_count[i].x) / 10) * s_x;
					let y = 171.25 * s_y;
					curveVertex(x, y);
				}

				// Last control point
				let lastX =
					(550 +
						((400 / 8) *
							new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1]
								.x) /
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
					(550 + ((400 / 8) * new_array_plot_e_set_count[0].x) / 10) * s_x;
				let firstY =
					171.25 * s_y -
					((171.25 - 55) * (new_array_plot_e_set_count[0].y - minYY)) / diff;
				curveVertex(firstX, firstY);

				// Add all points as curve vertices
				for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
					let x =
						(550 + ((400 / 8) * new_array_plot_e_set_count[i].x) / 10) * s_x;
					let y =
						171.25 * s_y -
						((171.25 - 55) * (new_array_plot_e_set_count[i].y - minYY)) / diff;
					curveVertex(x, y);
				}

				// Last control point
				let lastX =
					(550 +
						((400 / 8) *
							new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1]
								.x) /
							10) *
					s_x;
				let lastY =
					171.25 * s_y -
					((171.25 - 55) *
						(new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1]
							.y -
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

		// Reset the arrays to be empty before starting the counting
		array_plot_e_set = new Array(point_count).fill().map(() => []);
		array_plot_e_0_set = [];
		array_plot_h_set = new Array(point_count).fill().map(() => []);
		array_plot_h_0_set = [];
		new_array_plot_e_set_count = [];

		for (let k = -72; k < Math.round(-count_pn_num * 10); k++) {
			// let x = (190 + (950 - 190) / point_count * (k + 1))*s_x;
			let x = k;

			let n =
				Math.pow(10, 20) / hole_add_new +
				(Math.pow(10, 20) / hole_add_new) *
					(Math.exp(V_applied_p / 40 / 0.026) - 1) *
					Math.exp(k / 10 + count_pn_num);
			// console.log (n+"hellpppppppp")
			// if (x<(550-((400)/8*X_n)*s_x)){

			new_array_plot_e_set_count.push({ x: x, y: n * 1 });
			// }
		}

		stroke(...color.green, 100);

		textSize(17);
		noStroke();
		strokeWeight(1);
		fill(...color.white);
		///////////////////

		fill(...color.blue);

		textSize(14);

		for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
			// Get the first and last 'y' values
			const firstY = new_array_plot_e_set_count[0].y;
			const lastY =
				new_array_plot_e_set_count[new_array_plot_e_set_count.length - 1].y;

			// Find the maximum 'y' value
			const maxYY = Math.max(firstY, lastY);
			const minYY = Math.min(firstY, lastY);

			// Determine the order of magnitude of the maxY value
			const orderOfMagnitude = Math.floor(Math.log10(maxYY));

			// The factor is 10 to the power of (order of magnitude - 1)
			const factor_ = Math.pow(10, orderOfMagnitude - 1);
			// console.log (orderOfMagnitude)

			fill(...color.white);

			fill(...color.blue);
			// const tickMarks = calculateTickMarks(minYY, maxYY);

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
						// continue;
						// noFill();
						// stroke(...color.blue, 120);
						// line(100 * s_x, tickY+245, 200 * s_x, tickY+245);
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

		function niceNum(range, round) {
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

		// Reset the arrays to be empty before starting the counting
		array_plot_e_set = new Array(point_count).fill().map(() => []);
		array_plot_e_0_set = [];
		array_plot_h_set = new Array(point_count).fill().map(() => []);
		array_plot_h_0_set = [];
		new_array_plot_h_set_count = [];

		for (let k = Math.round(count_pn_num * 10); k < 80; k++) {
			// let x = (190 + (950 - 190) / point_count * (k + 1))*s_x;
			let x = k;

			let n =
				Math.pow(10, 20) / hole_add_new +
				(Math.pow(10, 20) / hole_add_new) *
					(Math.exp(V_applied_p / 40 / 0.026) - 1) *
					Math.exp(-(k / 10 - count_pn_num));
			// console.log (n+"hellpppppppp")
			// if (x<(550-((400)/8*X_n)*s_x)){

			new_array_plot_h_set_count.push({ x: x, y: n * 1 });
			// }
		}
	}
	if (real_graph_live == 0) {
		//green
		stroke(...color.green);
		strokeWeight(1.5);

		// endShape();
		noStroke();

		//yellow
		stroke(...color.yellow);
		strokeWeight(1.5);

		noFill();
		//yellow
		stroke(...color.yellow);
	}

	stroke(...color.green, 100);

	textSize(17);
	noStroke();
	strokeWeight(1);
	fill(...color.white);
	///////////////////

	fill(...color.blue);

	textSize(14);

	text("Electron Concentration ", 160 * s_x, 30 * s_y);
	text("Hole Concentration ", 160 * s_x, 223 * s_y);

	text("x", 930 * s_x, 190 * s_y);
	text("x", 930 * s_x, (318 + 70) * s_y);

	textSize(14);

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
		// } else if (switch_1 ==1) {
		// noStroke()
		// fill(...color.green,50)
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

		// }

		// if (switch_1==0){
		noStroke();
		fill(...color.yellow, 50);
		//scale current

		// if (count_graph ==0){
		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale; //scale by 5
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, (test_a / x_con) * s_y);
		// }
		// } else if (switch_1 ==1) {
		noStroke();
		fill(...color.green, 50);

		// if (count_graph==0){
		test_a =
			((5.33 *
				Math.pow(10, 5) *
				Math.pow(scattering_velocity, 2) *
				scattering_count *
				concentration) /
				Math.pow(10, 7)) *
			test_current_scale;
		rect(170 * s_x, 298.75 * s_y, x_con * s_x, -(test_a / x_con) * s_y);
		// }
		// }

		// console.log(con_count)
		// if (count_graph ==0){
		for (let i = 0; i < array_graph_con.length; i++) {
			array_graph_con[i].update();
		}
		// }
	}
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

function drawDepletionRegion() {
	// Draw Depletion region
	stroke(...color.red2, 210);
	context_1.beginPath();
	context_1.setLineDash([10, 10]);
	context_1.rect(
		(550 - (400 / 8) * X_n) * s_x,
		(10 + 385) * s_y,
		(400 / 8) * X_n * 2 * s_x,
		(770 / 2) * s_y
	);
	context_1.closePath();
	context_1.stroke();
	context_1.setLineDash([]);
}

function drawBands() {
	// //////band graph
	// stroke(...color.yellow);

	// strokeWeight(1.5);
	// beginShape();

	// // for (var k = 0; k < 50; k++) {
	// // 	curveVertex((150 + (800 / 50) * k) * s_x, (171.25 - array_band[k]) * s_y);
	// // }

	// endShape();

	noStroke();
	stroke(...color.yellow);

	for (var k = 0; k < 100; k++) {
		// electron curve
		line_yellow[k] = [
			(150 + (800 / 100) * k) * s_x,
			(171.25 - array_band2[k] - 100) * s_y,
		];
	}

	for (var k = 0; k < 100; k++) {
		// hole curve
		line_green[k] = [
			(150 + (800 / 100) * k) * s_x,
			(+0 + 171.25 - array_band3[k] - 30) * s_y,
		];
	}

	// Draw electron band
	beginShape();
	for (var k = 0; k < 100; k++) {
		//yellow curve
		curveVertex(
			(150 + (800 / 100) * k) * s_x,
			(171.25 - array_band2[k] - 100) * s_y
		);

		line_yellow_data[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - array_band2[k] - 100) * s_y,
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

		curveVertex(
			(150 + (800 / 100) * k) * s_x,
			(-30 + 171.25 - array_band3[k] - 30) * s_y
		);
		line_green_data[k] = {
			x: (150 + (800 / 100) * k) * s_x,
			y: (171.25 - array_band3[k] - 30 - 30) * s_y,
		};
	}
	endShape();
}

function zap4() {
	//zap
	for (let i = 0; i < oldElectronArray.length; i++) {
		for (let k = 0; k < oldHoleArray.length; k++) {
			if (
				abs(oldElectronArray[i].position.x - oldHoleArray[k].position.x) <
					distance_dis &&
				abs(oldElectronArray[i].position.y - oldHoleArray[k].position.y) <
					distance_dis &&
				oldElectronArray[i].id != oldHoleArray[k].id &&
				oldElectronArray[i].show == 1 &&
				oldHoleArray[k].show == 1 &&
				oldElectronArray[i].position.x > 190 * s_x
			) {
				//15

				//mark
				oldElectronArray[i].stop();
				oldHoleArray[k].stop();
				oldElectronArray[i].noShow();
				oldHoleArray[k].noShow();
				oldElectronArray[i].deadd();
				oldHoleArray[k].deadd();

				middle_position_Array[zap_count] = p5.Vector.div(
					p5.Vector.add(oldHoleArray[k].position, oldElectronArray[i].position),
					2
				);

				//effects

				zapArray[zap_count] = new Appear(
					middle_position_Array[zap_count].x,
					middle_position_Array[zap_count].y,
					10,
					1,
					zap_count
				);
				zapArray_2[zap_count] = new Appear(
					oldElectronArray[i].position.x,
					oldElectronArray[i].position.y,
					10,
					2,
					zap_count
				);
				zapArray_2_pair[zap_count] = new Appear(
					oldHoleArray[k].position.x,
					oldHoleArray[k].position.y,
					10,
					3,
					zap_count
				);

				zap_count++;

				let b = oldElectronArray[i].position.y;

				var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
				vehicle.botz = oldHoleArray[k].botz;
				oldHoleArray.push(vehicle);

				holeID_h.push(global_id);
				global_id += 1;

				var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
				vehicle2.botz = oldElectronArray[i].botz;
				oldElectronArray.push(vehicle2);

				// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
				// electronID_e.push(global_id);
				global_id += 1;

				oldElectronArray.splice(i, 1);
				oldHoleArray.splice(k, 1);

				break;
			}
		}
	}
}

function zap3() {
	//zap electron & hole new h
	for (let i = 0; i < oldElectronArray.length; i++) {
		for (let k = 0; k < newHoleArray.length; k++) {
			if (
				abs(oldElectronArray[i].position.x - newHoleArray[k].position.x) <
					distance_dis &&
				abs(oldElectronArray[i].position.y - newHoleArray[k].position.y) <
					distance_dis &&
				oldElectronArray[i].id != newHoleArray[k].id &&
				oldElectronArray[i].show == 1 &&
				newHoleArray[k].show == 1
			) {
				//mark
				oldElectronArray[i].stop();
				newHoleArray[k].stop();
				oldElectronArray[i].noShow();
				newHoleArray[k].noShow();
				oldElectronArray[i].deadd();
				newHoleArray[k].deadd();
				// oldElectronArray[i].update();
				// oldHoleArray[k].update();

				middle_position_Array[zap_count] = p5.Vector.div(
					p5.Vector.add(newHoleArray[k].position, oldElectronArray[i].position),
					2
				);

				//effects

				zapArray[zap_count] = new Appear(
					middle_position_Array[zap_count].x,
					middle_position_Array[zap_count].y,
					10,
					1,
					zap_count
				);
				zapArray_2[zap_count] = new Appear(
					oldElectronArray[i].position.x,
					oldElectronArray[i].position.y,
					10,
					2,
					zap_count
				);
				zapArray_2_pair[zap_count] = new Appear(
					newHoleArray[k].position.x,
					newHoleArray[k].position.y,
					10,
					3,
					zap_count
				);

				zap_count++;

				let b = oldElectronArray[i].position.y;

				var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
				vehicle.botz = newHoleArray[k].botz;
				newHoleArray.push(vehicle);

				holeID_h.push(global_id);
				global_id += 1;

				var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
				vehicle2.botz = oldElectronArray[i].botz;
				oldElectronArray.push(vehicle2);

				global_id += 1;

				oldElectronArray.splice(i, 1);
				newHoleArray.splice(k, 1);
				break;
			}
		}
	}
}

function zap2() {
	for (let i = 0; i < newElectronArray.length; i++) {
		for (let k = 0; k < oldHoleArray.length; k++) {
			if (
				abs(newElectronArray[i].position.x - oldHoleArray[k].position.x) <
					distance_dis &&
				abs(newElectronArray[i].position.y - oldHoleArray[k].position.y) <
					distance_dis &&
				newElectronArray[i].id != oldHoleArray[k].id &&
				newElectronArray[i].show == 1 &&
				oldHoleArray[k].show == 1
			) {
				//mark
				newElectronArray[i].stop();
				oldHoleArray[k].stop();
				newElectronArray[i].noShow();
				oldHoleArray[k].noShow();

				middle_position_Array[zap_count] = p5.Vector.div(
					p5.Vector.add(oldHoleArray[k].position, newElectronArray[i].position),
					2
				);

				//effects

				zapArray[zap_count] = new Appear(
					middle_position_Array[zap_count].x,
					middle_position_Array[zap_count].y,
					10,
					1,
					zap_count
				);
				zapArray_2[zap_count] = new Appear(
					newElectronArray[i].position.x,
					newElectronArray[i].position.y,
					10,
					2,
					zap_count
				);
				zapArray_2_pair[zap_count] = new Appear(
					oldHoleArray[k].position.x,
					oldHoleArray[k].position.y,
					10,
					3,
					zap_count
				);

				zap_count++;

				let b = newElectronArray[i].position.y;

				var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
				vehicle.botz = oldHoleArray[k].botz;
				oldHoleArray.push(vehicle);

				holeID_h.push(global_id);
				global_id += 1;

				var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
				vehicle2.botz = newElectronArray[i].botz;
				newElectronArray.push(vehicle2);

				// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
				// electronID_e.push(global_id);
				global_id += 1;

				newElectronArray.splice(i, 1);
				oldHoleArray.splice(k, 1);

				break;
			}
		}
	}
}

function zap() {
	for (let i = 0; i < newElectronArray.length; i++) {
		for (let k = 0; k < newHoleArray.length; k++) {
			if (
				abs(newElectronArray[i].position.x - newHoleArray[k].position.x) <
					distance_dis &&
				abs(newElectronArray[i].position.y - newHoleArray[k].position.y) <
					distance_dis &&
				newElectronArray[i].id != newHoleArray[k].id &&
				newElectronArray[i].show == 1 &&
				newHoleArray[k].show == 1
			) {
				//mark
				newElectronArray[i].stop();
				newHoleArray[k].stop();
				newElectronArray[i].noShow();
				newHoleArray[k].noShow();

				middle_position_Array[zap_count] = p5.Vector.div(
					p5.Vector.add(newHoleArray[k].position, newElectronArray[i].position),
					2
				);

				//effects

				zapArray[zap_count] = new Appear(
					middle_position_Array[zap_count].x,
					middle_position_Array[zap_count].y,
					10,
					1,
					zap_count
				);
				zapArray_2[zap_count] = new Appear(
					newElectronArray[i].position.x,
					newElectronArray[i].position.y,
					10,
					2,
					zap_count
				);
				zapArray_2_pair[zap_count] = new Appear(
					newHoleArray[k].position.x,
					newHoleArray[k].position.y,
					10,
					3,
					zap_count
				);

				zap_count++;

				let b = newElectronArray[i].position.y;

				var vehicle = new Vehicle(170 * s_x, b, 10, "h", 1);
				vehicle.botz = newHoleArray[k].botz;
				newHoleArray.push(vehicle);

				holeID_h.push(global_id);
				global_id += 1;

				var vehicle2 = new Vehicle(930 * s_x, b, 10, "e", 0);
				vehicle2.botz = newElectronArray[i].botz;
				newElectronArray.push(vehicle2);

				// newElectronArray.push(new Vehicle((930)*s_x, b, 10, "e", 0));
				// electronID_e.push(global_id);
				global_id += 1;

				oldElectronArray.splice(i, 1);
				oldHoleArray.splice(k, 1);

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

	if (sceneCount == 1) {
		// p-n junction
		scene1();
	} else if (sceneCount == 2) {
		// apply voltage
		scene2();
	} else if (sceneCount == 3) {
		// diffusion
		scene3();
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

	oldElectronArray = [];
	oldHoleArray = [];
	newElectronArray = [];
	newHoleArray = [];
	appearArray_s1 = [];

	appearArray_s1 = [];
	newElectronArray = [];
	electronID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	newHoleArray = [];
	holeID_h = [];

	array_graph_con = [];

	con_count = 0;

	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

	if (sceneCount == 2 || sceneCount == 3) {
		if (sceneCount == 2) {
			add_h(document.getElementById("slider_61").value);
		} else if (sceneCount == 3) {
			add_h(document.getElementById("slider_611").value);
		}
	}

	if (sceneCount == 1) {
		add_h(document.getElementById("slider_6").value);
	}
};

setTemperature = (te) => {
	constant_temperature = te;
	temp = te;
	if (sceneCount == 2) {
		temp = te;
		constant_fermi =
			Math.round(((1000 * -0.28 * 0.026) / 300) * constant_temperature) / 1000;
		reset_d3bands();
		d3bands();
	}
};

setDistance = (te) => {
	distance_dis = te;
};

setConcentration = (te) => {
	factor_c = te;
	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	concentration = te / 3;
	count_graph = 10;

	oldElectronArray = [];
	oldHoleArray = [];
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
		console.log("sss");

		oldElectronArray = [];
		array_graph_con = [];

		con_count = 0;
		array_graph_con.push(
			new Concentration(scattering_velocity, scattering_count)
		);
	} else {
		switch_1 = 0;
		switch_eh_1.checked = false;
		oldHoleArray = [];
		array_graph_con = [];

		con_count = 0;
		array_graph_con.push(
			new Concentration(scattering_velocity, scattering_count)
		);
	}
};

// switch_recombine = () => {
// 	if (recombine == 1) {
// 		//off
// 		recombine = 0;
// 		switch_re.checked = false;
// 	} else {
// 		recombine = 1;
// 		switch_re.checked = true;
// 	}
// };

setTemperature_real = (te) => {
	constant_temperature_real = te;
	temp_real = te;

	document.getElementById("speed_1").value = Math.pow(
		(Math.pow(2.6, 2) * Math.pow(10, 10) * constant_temperature_real) / 300,
		1 / 2
	).toExponential(1);
	document.getElementById("speed_2").value = Math.round(
		150 * Math.pow(constant_temperature_real / 300, -2.3)
	); //scarer

	//
	scattering_velocity = constant_temperature_real / 50;

	setScattering(
		Math.round((150 * Math.pow(constant_temperature_real / 300, -2.3)) / 14)
	);

	for (let i = 0; i < oldElectronArray.length; i++) {
		oldElectronArray[i].movingVelocity =
			(5 * parseInt(constant_temperature_real / 30)) / 5;
	}

	for (let i = 0; i < oldHoleArray.length; i++) {
		oldHoleArray[i].movingVelocity =
			(5 * parseInt(constant_temperature_real / 30)) / 5;
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
	// console.log(scattering_velocity)
	for (let i = 0; i < array_graph_con.length; i++) {
		array_graph_con[i].stop_count();
	}
	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

	for (let i = 0; i < oldElectronArray.length; i++) {
		oldElectronArray[i].movingVelocity =
			(5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < oldHoleArray.length; i++) {
		oldHoleArray[i].movingVelocity = (5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < newHoleArray.length; i++) {
		newHoleArray[i].movingVelocity = (5 * parseInt(scattering_velocity)) / 5;
	}

	for (let i = 0; i < newElectronArray.length; i++) {
		newElectronArray[i].movingVelocity =
			(5 * parseInt(scattering_velocity)) / 5;
	}
};

setScattering = (c) => {
	scattering_count = c;
	scattering_count_c = parseInt(c) + 2;
	// console.log(scattering_count_c+"countc")

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

setPoint = (k) => {
	point_count = k;
	for (var i = 0; i < point_count; i++) {
		array_plot[i] = [];
		array_positive_y[i] = [];
		array_negative_y[i] = [];
	}
};

setVolume = (v) => {
	volume1 = v;
	num_multi = 1 / v;
};

checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
	for (let i = -xLimit; i <= xLimit; i++) {
		for (let j = -yLimit; j <= yLimit; j++) {
			if (latticeAtoms[i][j].selected) {
				latticeAtoms[i][j].boundary = false;
			} else if (
				latticeAtoms[i - 1][j].selected ||
				latticeAtoms[i + 1][j].selected ||
				latticeAtoms[i][j - 1].selected ||
				latticeAtoms[i][j + 1].selected
			) {
				latticeAtoms[i][j].boundary = true;
			} else {
				latticeAtoms[i][j].boundary = false;
			}
		}
	}
};

timeIt = () => {
	if (time_count > 0) {
		time_count--;
	}
};

time_concentration = () => {
	if (x_con < 750 && count_graph == 0) {
		con_count += 1;
	}
};

timeIt_blink = () => {
	if (time_count_blink > 0) {
		time_count_blink--;
	}
	if (time_count_blink == 0) {
		time_count_blink = 100;
	}
};

scattering = () => {
	//timebetween scatter
	if (scattering_count_c > 2) {
		//time when straight line no scatter

		scatter_tf = false;
		// console.log("no")

		// console.log(scattering_count_c) count scatter
	} else if (scattering_count_c <= 2) {
		//time to scatter 2s
		scatter_tf = true;
		// console.log("yes")
	}

	scattering_count_c -= 1;

	if (scattering_count_c == 0) {
		scattering_count_c = parseInt(scattering_count) + 2;
	}
};

count_start_graph = () => {
	if ((start_graph = 1 && count_graph > 0)) {
		count_graph -= 1;
		// console.log(count_graph)
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

	if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
		// console.log("haha")
		if (time_count > 0) {
			oldElectronArray = [];
			oldHoleArray = [];

			recombination_Rate_c = 0;

			recombination_Rate = 0;

			recombination_Rate_c = 0;
		} else if (time_count == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(200 * s_x, 930 * s_x);
				let b = random((20 + 385) * s_y, 770 * s_y);

				appearArray.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(line_yellow, a);

				let aa = new Vehicle(a, b, 10, global_id, 0);
				aa.origin.x = xx;
				aa.top = 1;
				oldElectronArray.push(aa);

				let yy = findClosestValue(line_green, a);
				// console.log(yy)

				let bb = new Vehicle(a, b, 10, global_id, 1);
				bb.origin.y = yy;
				bb.top = 1;
				oldHoleArray.push(bb);

				electronID.push(global_id);
				holeID.push(global_id);
				global_id += 1;
			}
		}
	}
};

genBalls_outer = (num) => {
	clearInterval(run_outer);

	run_outer = setInterval(function () {
		genBalls_outer(1); // Generate 1 new set of balls at the rate defined by new_generate
	}, 1000 / new_generate);

	if (sceneCount == 3) {
		// console.log("haha")
		if (time_count > 0) {
			oldElectronArray = [];
			oldHoleArray = [];

			recombination_Rate_c = 0;

			recombination_Rate = 0;

			recombination_Rate_c = 0;
		} else if (time_count == 0) {
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

				appearArray.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(line_yellow, a);

				let aa = new Vehicle(a, b, 10, global_id, 0);
				aa.origin.x = xx;
				aa.top = 1;
				oldElectronArray.push(aa);

				let yy = findClosestValue(line_green, a);
				// console.log(yy)

				let bb = new Vehicle(a, b, 10, global_id, 1);
				bb.origin.y = yy;
				bb.top = 1;
				oldHoleArray.push(bb);

				electronID.push(global_id);
				holeID.push(global_id);
				global_id += 1;
			}
		}
	}
};

genBalls_straight = (num) => {
	if (sceneCount == 1) {
		// console.log("haha")
		if (time_count > 0) {
			oldElectronArray = [];
			oldHoleArray = [];

			recombination_Rate_c = 0;

			recombination_Rate = 0;

			recombination_Rate_c = 0;
		} else if (time_count == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(500 * s_x, 930 * s_x);
				let b = random((20 + 385) * s_y, 770 * s_y);

				appearArray.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(line_yellow, a);

				let aa = new Vehicle(a, b, 10, global_id, 0);
				aa.origin.x = xx;
				aa.top = 1;
				aa.straight = 1;
				aa.botz = 3;
				oldElectronArray.push(aa);

				// console.log(yy)

				let a_2 = random(300 * s_x, 530 * s_x);
				let b_2 = random((20 + 385) * s_y, 770 * s_y);

				appearArray.push(new Appear(a_2, b_2, 10, 0));

				let yy = findClosestValue(line_green, a_2);

				let bb = new Vehicle(a_2, b_2, 10, global_id, 1);
				bb.origin.y = yy;
				bb.top = 1;
				bb.straight = 1;
				bb.botz = 3;
				oldHoleArray.push(bb);

				electronID.push(global_id);
				holeID.push(global_id);
				global_id += 1;
			}
		}
	}
};

time_graph = () => {
	if (time_count_graph > 0) {
		time_count_graph -= 1;
	}
};

setGeneration = (a) => {
	gg_rate = a;
};

add_e = (a) => {
	//123-133
	// distance_dis = 10-((a-123)/10*8+1)

	d_factor = Math.pow(((a - 123) / 10) * 5, 1 / 2);
	// distance_dis = 10-factor_ca*(d_factor)

	changg = ((a - 123) / 10) * 122;
	electron_add = Math.pow(10, a / 10);
	// let mmm = Math.pow(10,((30 / 23)*(a - 110)+110)/10)
	let mmm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;
	let nnn = mmm.toExponential(1);
	// document.getElementById("add_e_text").value=nnn
	document.getElementById("add_e_text_2").value = nnn;
	time_count = 0;

	appearArray_s1 = [];

	resetScene();

	appearArray_s1 = [];
	newElectronArray = [];
	electronID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	newHoleArray = [];
	holeID_h = [];

	if (sceneCount == 3) {
		current_Electron_c = Math.round(electron_add);

		e_count =
			Math.pow(100, (Math.log10(Math.round(electron_add)) - 8) / 2) / 1000;

		///  fraction cal   // n_c delta_ED

		n_c = 2.86 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		// let tempe_fraction_e
		tempe_fraction_e =
			(-1 +
				Math.pow(
					1 +
						((8 * Math.round(electron_add)) / n_c) *
							Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * Math.round(electron_add)) / n_c) *
				Math.exp((45 * 300) / 26 / temp));

		current_Electron_c = Math.round(electron_add) * tempe_fraction_e;
		// console.log(Math.round(100*tempe_fraction_e)/100)
		fraction_e.push(Math.round(100 * tempe_fraction_e) / 100);

		fraction_e_count = Math.round(
			e_count * (1 - fraction_e[fraction_e.length - 1])
		);

		constant_fermi_final =
			((0.026 * constant_temperature) / 300) *
				Math.log(
					(electron_add +
						Math.pow(
							Math.pow(electron_add, 2) +
								Math.pow(
									(constant_temperature / 300) * 1.06 * Math.pow(10, 10),
									2
								),
							1 / 2
						)) /
						(((2 * constant_temperature) / 300) * 1.06 * Math.pow(10, 10))
				) -
			(0.28 * 0.026 * constant_temperature) / 300;

		constant_fermi_final = Math.round(1000 * constant_fermi_final) / 1000;

		//freeze

		nn =
			4.6 *
			Math.pow(10, 15) *
			Math.pow(temp, 1.5) *
			Math.exp(-1.12 / (((2 * 0.026) / 300) * temp)); //new wrong
		let inside =
			(electron_add * tempe_fraction_e +
				Math.pow(
					Math.pow(electron_add * tempe_fraction_e, 2) + 4 * Math.pow(nn, 2),
					1 / 2
				)) /
			(2 * nn);
		constant_fermi_positive =
			(0.026 / 300) * temp * Math.log(inside) + -0.28 * ((0.026 / 300) * temp);

		for (let i = 0; i < e_count; i++) {
			let a = random(170 * s_x, 930 * s_x);
			let b = random((20 + 385) * s_y, 760 * s_y);
			appearArray_s1.push(new Appear(a, b, 10, 4, i));
			//id start from 0 ,color 4

			newElectronArray.push(new Vehicle(a, b, 10, "e", 0));
			electronID_e.push(global_id);
			global_id += 1;
		}

		///////hole

		current_Hole_c = Math.round(hole_add);
		// h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4;
		h_count = Math.pow(100, (Math.log10(current_Hole_c) - 8) / 2) / 1000;

		//note_bun

		///  fraction cal   // n_c delta_ED

		n_v = 2.66 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		let tempe_fraction_h;
		tempe_fraction_h =
			(-1 +
				Math.pow(
					1 + ((8 * current_Hole_c) / n_v) * Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * current_Hole_c) / n_v) * Math.exp((45 * 300) / 26 / temp));

		fraction_h.push(Math.round(100 * tempe_fraction_h) / 100);

		fraction_h_count = Math.round(
			e_count * (1 - fraction_h[fraction_h.length - 1])
		);
		// console.log(fraction_e_count)
		// console.log(tempe_fraction_e+"donor")
		///

		for (let i = 0; i < h_count; i++) {
			let a = random(200 * s_x, 900 * s_x);
			let b = random(30 * s_y, 730 * s_y);

			appearArray_s1.push(new Appear(a, b, 10, 5, i));

			newHoleArray.push(new Vehicle(a, b, 10, "h", 1));
			holeID_h.push(global_id);
			global_id += 1;
		}
	}

	if (sceneCount == 22) {
		if (electron_add - hole_add >= 0) {
			//more e

			current_Electron_c = Math.round(electron_add) - Math.round(hole_add);
			// e_count  = Math.round(Math.log10(current_Electron_c));

			e_count = Math.pow(100, (Math.log10(current_Electron_c) - 8) / 2) / 1000;

			constant_fermi =
				((0.026 * constant_temperature) / 300) *
					Math.log(
						(electron_add +
							Math.pow(
								Math.pow(electron_add, 2) +
									Math.pow(
										(constant_temperature / 300) * 1.06 * Math.pow(10, 10),
										2
									),
								1 / 2
							)) /
							(((2 * constant_temperature) / 300) * 1.06 * Math.pow(10, 10))
					) -
				(0.28 * 0.026 * constant_temperature) / 300;

			constant_fermi = Math.round(1000 * constant_fermi) / 1000;

			//mark me

			nn =
				4.6 *
				Math.pow(10, 15) *
				Math.pow(temp, 1.5) *
				Math.exp(-1.12 / (((2 * 0.026) / 300) * temp)); //new wrong
			let inside =
				(electron_add +
					Math.pow(Math.pow(electron_add, 2) + 4 * Math.pow(nn, 2), 1 / 2)) /
				(2 * nn);
			constant_fermi_positive =
				(0.026 / 300) * temp * Math.log(inside) +
				-0.28 * ((0.026 / 300) * temp);

			reset_d3bands_2();
			d3bands_2();

			for (let i = 0; i < e_count; i++) {
				let a = random(200 * s_x, 900 * s_x);
				let b = random(30 * s_y, 730 * s_y);
				appearArray_s1.push(new Appear(a, b, 10, 4));

				newElectronArray.push(new Vehicle(a, b, 10, global_id, 0));
				electronID_e.push(global_id);
				global_id += 1;
			}
		}
	}
};

add_h = (a) => {
	// distance_dis = 10-((a-123)/10*8+1)

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

	d_factor = Math.pow(((a - 123) / 10) * 5, 1 / 2);
	// distance_dis = 10-factor_ca*(d_factor)

	changg = ((a - 123) / 10) * 122;

	// changg =80

	hole_add = Math.pow(10, a / 10);
	electron_add = Math.pow(10, a / 10);

	// console.log(hole_add)
	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;
	let pp = mm.toExponential(1);
	document.getElementById("add_h_text").value = pp;
	document.getElementById("add_h_text_2").value = pp;
	document.getElementById("add_h_text_3").value = pp;
	hole_add_new = mm;

	time_count = 0;
	appearArray_s1 = [];

	// resetScene()
	appearArray_s1 = [];
	newElectronArray = [];
	electronID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	newHoleArray = [];
	holeID_h = [];
	random_botz = [];
	oldElectronArray = [];
	oldHoleArray = [];

	////

	count_n = 0;
	count_pn_num = 0;
	e_field_c = 0;

	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	start_graph = 1;
	count_graph = 10;

	oldElectronArray = [];
	oldHoleArray = [];
	newElectronArray = [];
	newHoleArray = [];
	appearArray_s1 = [];

	appearArray_s1 = [];
	newElectronArray = [];
	electronID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	newHoleArray = [];
	holeID_h = [];

	array_graph_con = [];

	con_count = 0;

	//  console.log(concentration)

	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

	//add ---- hhhh left
	if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
		if (sceneCount == 2) {
			new_array_rou_e_set = [];
			new_array_rou_h_set = [];

			let rect_density_new = Math.pow(10, -13) * hole_add_new;

			X_n =
				5811 *
				Math.pow(
					Math.log(hole_add_new / Math.pow(10, 10)) /
						(Math.pow(10, 6) * hole_add_new),
					1 / 2
				) *
				Math.pow(10, 6);
			count_pn_num = X_n;

			let ratio =
				(-V_applied_p / 10 + V_applied_n / 10) /
				(1.6 * Math.pow(10, -13) * hole_add_new);

			count_pn_num = X_n * (1 + ratio);

			for (let k = 0; k < Math.round(count_pn_num * 100); k++) {
				//left of 0 negative
				let x = 550 * s_x - (((400 / 8) * k) / 100) * s_x;

				let n =
					(10 + 385 / 2 + 96.25) * s_y +
					rect_density_new *
						4 *
						s_y *
						(1 - Math.exp(-Math.pow(count_pn_num - k / 100, 2) / 0.026));

				new_array_rou_e_set.push({ x: x, y: n * 1 });
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

				new_array_rou_h_set.push({ x: x, y: n * 1 });
				// }
			}
		}

		if (sceneCount == 1) {
			new_array_rou_e_set = [];
			new_array_rou_h_set = [];

			let rect_density_new = Math.pow(10, -13) * hole_add_new;

			X_n =
				5811 *
				Math.pow(
					Math.log(hole_add_new / Math.pow(10, 10)) /
						(Math.pow(10, 6) * hole_add_new),
					1 / 2
				) *
				Math.pow(10, 6);
			// count_pn_num = X_n

			let ratio =
				(-V_applied_p / 10 + V_applied_n / 10) /
				(1.6 * Math.pow(10, -13) * hole_add_new);

			// count_pn_num = X_n*(1+ratio)

			for (let k = 0; k < Math.round(X_n * 100); k++) {
				//left of 0 negative
				let x = 550 * s_x - (((400 / 8) * k) / 100) * s_x;

				let n =
					(10 + 385 / 2 + 96.25) * s_y +
					rect_density_new *
						4 *
						s_y *
						(1 - Math.exp(-Math.pow(X_n - k / 100, 2) / 0.026));

				new_array_rou_e_set.push({ x: x, y: n * 1 });
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

				new_array_rou_h_set.push({ x: x, y: n * 1 });
				// }
			}
		}

		current_Electron_c = Math.round(electron_add);
		e_count = Math.pow(100, (Math.log10(current_Electron_c) - 8) / 2) / 1000;

		///  fraction cal   // n_c delta_ED

		while (random_botz.length < e_count - 2) {
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
			//  console.log("?")
			//  console.log(y)
			if (bb < y) {
				random_botz.push(Math.round((aa / Math.pow(10, 6)) * 2) / 4);
				//  random_botz.push(Math.round(10))
			}
		}

		n_c = 2.86 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		// let tempe_fraction_e
		tempe_fraction_e =
			(-1 +
				Math.pow(
					1 +
						((8 * current_Electron_c) / n_c) * Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * current_Electron_c) / n_c) * Math.exp((45 * 300) / 26 / temp));

		fraction_e.push(Math.round(100 * tempe_fraction_e) / 100);

		fraction_e_count = Math.round(
			e_count * (1 - fraction_e[fraction_e.length - 1])
		);
		// console.log(fraction_e_count)
		// console.log(tempe_fraction_e+"donor")
		///

		for (let i = 0; i < e_count; i++) {
			let a = random(550 * s_x, 930 * s_x);
			// let b = random(30*s_y,730*s_y);
			let b = random((20 + 385) * s_y, 760 * s_y);
			appearArray_s1.push(new Appear(a, b, 10, 4, i));
			//id start from 0 ,color 4
			var vehicle = new Vehicle(a, b, 10, "e", 0);
			vehicle.botz = random_botz[i];
			newElectronArray.push(vehicle);
			global_id += 1;
		}

		///////hole

		current_Hole_c = Math.round(hole_add);
		// h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4;
		h_count = Math.pow(100, (Math.log10(current_Hole_c) - 8) / 2) / 1000;

		//note_bun

		///  fraction cal   // n_c delta_ED

		n_v = 2.66 * Math.pow(10, 19) * Math.pow(temp / 300, 3 / 2);
		let tempe_fraction_h;
		tempe_fraction_h =
			(-1 +
				Math.pow(
					1 + ((8 * current_Hole_c) / n_v) * Math.exp((45 * 300) / 26 / temp),
					1 / 2
				)) /
			(((4 * current_Hole_c) / n_v) * Math.exp((45 * 300) / 26 / temp));

		fraction_h.push(Math.round(100 * tempe_fraction_h) / 100);

		fraction_h_count = Math.round(
			e_count * (1 - fraction_h[fraction_h.length - 1])
		);
		// console.log(fraction_e_count)
		// console.log(tempe_fraction_e+"donor")
		///

		for (let i = 0; i < h_count; i++) {
			let a = random(170 * s_x, 550 * s_x);
			let b = random((20 + 385) * s_y, 760 * s_y);

			appearArray_s1.push(new Appear(a, b, 10, 5, i));

			var vehicle2 = new Vehicle(a, b, 10, "h", 1);
			vehicle2.botz = random_botz[i];
			newHoleArray.push(vehicle2);
			holeID_h.push(global_id);
			global_id += 1;
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

resetGraph = () => {
	setTemperature(constant_temperature);

	if (real_graph == 0) {
		//on
		real_graph = 1;
		settings.nn = document.querySelector("#nn").checked;
		// console.log("real")
	} else {
		real_graph = 0;
	}
};

resetGraph_live = () => {
	if (real_graph_live == 0) {
		//on
		real_graph_live = 1;
		nn_live.checked = true;
	} else {
		real_graph_live = 0;
		nn_live.checked = false;
	}
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

	// console.log(factor_new)

	// console.log ("old"+line_yellow[99][1])
	let old = line_yellow[99][1];

	count_pn_num = X_n;
	rect_density =
		1.6 * Math.pow(10, -13) * hole_add_new -
		V_applied_p / 10 +
		V_applied_n / 10;

	let ratio =
		(-V_applied_p / 10 + V_applied_n / 10) /
		(1.6 * Math.pow(10, -13) * hole_add_new);

	// console.log (ratio)

	count_pn_num = X_n * (1 + ratio);

	// X_n = count_pn_num

	for (var i = 0; i < 100; i++) {
		//(800)/100*i
		if (
			(800 / 100) * i > 550 - (400 / 8) * count_pn_num &&
			(800 / 100) * i < 550
		) {
			array_band1[i - 19] =
				-Math.pow(
					(((800 / 100) * i - (550 - (400 / 8) * count_pn_num)) /
						((400 / 8) * count_pn_num)) *
						(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2),
					1
				) /
				5 /
				3;
		} else if (i == 50) {
			// array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
		} else {
			array_band1[i] = 0;
		}
	}

	for (var i = 0; i < 100; i++) {
		if (i > 50) {
			array_band1[i] = array_band1[100 - i];
		} else if ((i = 50)) {
			array_band1[i] =
				-Math.pow(((2 * rect_density) / (count_pn_num * 100)) * 177 * 2, 1) /
				5 /
				3;
		}
	}

	for (var i = 0; i < 100; i++) {
		array_band1[i] = array_band1[i] / 3;
	}

	for (var i = 0; i < 100; i++) {
		array_band2[i] = 0; // initialize to 0

		if (i > 0) {
			// run the inner loop only if i > 0
			for (var k = 0; k < i; k++) {
				array_band2[i] = array_band2[i] + array_band1[k];
			}
		}
	}

	for (var k = 0; k < 100; k++) {
		line_yellow[k] = [
			(150 + (800 / 100) * k) * s_x,
			(171.25 - array_band2[k] - 100) * s_y,
		];
	}

	// console.log(line_yellow[99][1])

	// console.log ("new"+line_yellow[99][1])
	let dif = line_yellow[99][1] - old;

	for (let i = 0; i < oldElectronArray.length; i++) {
		let vehicle = oldElectronArray[i];
		// console.log("old"+vehicle.origin.x)

		let newOriginX = findClosestValue(line_yellow, vehicle.position.x);
		// // vehicle.origin.x = line_yellow[99][1]
		vehicle.origin.x = line_yellow[99][1];
		// console.log(line_yellow[99][1])

		// console.log("new"+vehicle.origin.x)
	}

	resetScene();
};

apply_V_n = (a) => {
	V_applied_n = a;
};

function updateVehicleOrigins() {
	for (let i = 0; i < oldElectronArray.length; i++) {
		let vehicle = oldElectronArray[i];
		let newOriginX = findClosestValue(line_yellow, vehicle.position.x);
		vehicle.origin.x = newOriginX;
	}
}

function onRefresh() {
	// console.log("The page was refreshed or loaded!");
	add_h(130);
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
	for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
		let x = (550 + ((400 / 8) * new_array_plot_e_set_count[i].x) / 10) * s_x;
		let y =
			171.25 * s_y -
			((171.25 - 55) * (new_array_plot_e_set_count[i].y - minYY)) / diff;

		// Calculate the distance between the mouse and the current point
		let d = dist(mouseX, mouseY, x, y);
		// console.log(d)

		// If the mouse is within the threshold distance, draw an ellipse
		if (d < threshold) {
			noStroke();
			fill(...color.yellow, 100); // electron color
			ellipse(x, y, 10, 10); // Draw electron ellipse with diameter of 10
			// console.log("????")

			// Calculate the value at this point
			let value = new_array_plot_e_set_count[i].y;
			textSize(12);
			fill(...color.yellow, 100); // Black color for text
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points (optional, remove if you want multiple points to be highlighted)
		}
	}
}

function checkMouseHoverForNewCurve(minYY, diff) {
	const threshold = 10; // Threshold distance to detect mouse hover

	for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
		let x = (550 + ((400 / 8) * new_array_plot_h_set_count[i].x) / 10) * s_x;
		let y =
			368 * s_y -
			((171.25 - 55) * (new_array_plot_h_set_count[i].y - minYY)) / diff;

		// Calculate the distance between the mouse and the current point
		let d = dist(mouseX, mouseY, x, y);

		// If the mouse is within the threshold distance, draw an ellipse
		if (d < threshold) {
			strokeWeight(1);
			fill(...color.black2);
			stroke(...color.green); // Semi-transparent white color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = new_array_plot_h_set_count[i].y;
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

	for (let i = 0; i < new_array_plot_h_set_count.length; i++) {
		let x = (550 + ((400 / 8) * new_array_plot_h_set_count[i].x) / 10) * s_x;
		let y = 368 * s_y;

		// Check if mouse x-coordinate is close to the point's x-coordinate
		if (abs(mouseX - x) < threshold) {
			strokeWeight(1);
			fill(...color.black2);
			stroke(...color.green); // Semi-transparent white color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = new_array_plot_h_set_count[i].y;
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

	for (let i = 0; i < new_array_plot_e_set_count.length; i++) {
		let x = (550 + ((400 / 8) * new_array_plot_e_set_count[i].x) / 10) * s_x;
		let y = 171.25 * s_y; // y-coordinate for the new line

		// Check if mouse x-coordinate is close to the point's x-coordinate
		if (abs(mouseX - x) < threshold) {
			noStroke();
			fill(...color.yellow, 100); // White color
			ellipse(x, y, 10, 10); // Draw ellipse with diameter of 10

			// Calculate the value at this point
			let value = new_array_plot_e_set_count[i].y;
			textSize(12);
			fill(...color.yellow, 100); // Text color
			text(value.toExponential(1), x + 15, y); // Display the value next to the ellipse
			break; // Stop checking other points
		}
	}
}

apply_new_generation = (a) => {
	new_generate = a;
};

setChangeV = (a) => {
	changeV = a;
};
