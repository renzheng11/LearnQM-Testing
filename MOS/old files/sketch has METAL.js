/***********************************************************************
 * Section: set variables
 ***********************************************************************/
let appearArray_s1 = []; //appear list

let blackArray_h = []; //green dot list
let blackID_h = []; //green dot id
let whiteArray_e = []; //yellow dot list

let d_factor = 1; //distance factor

let array_band_depletion1 = []; //list for help drawing lines of band diagram

let change_v = 1; //change the distribution scale of band diagram

let hole_new; //for getting added dopants number
let V_applied_p = 0; //added voltage for p dopant
let V_applied_n = 0; //added voltage for n dopant

let isOn = false; //turn on or off the switch between charge density and electric field graph

let tempe_fraction_e; //from ealier chapter

let gg_rate = 1000; //generation rate

let factor_c = 1; //concentration

let new_array_rou_e_set = []; //draw charge density graph
let new_array_rou_h_set = []; //draw charge density graph
let new_array_rou_h_set_neg = []; //draw charge density graph

let new_array_rou_h_set_Efield = []; //draw e-field graph
let new_array_rou_h_set_Efield_neg = []; //draw e-field graph

let changg = 0; //slope for the addig dopant factor
let e_field_c = 0; //electric field factor

let rect_density; //from ealier chapter

let hole_add_new; //for getting added dopants number

let factor_new = 1; //factor for applied voltage

let whiteArray_dot = []; //draw yellow dot for testing(not using)
let blackArray_dot = []; //draw green dot for testing(not using)

let array_band_hardcode = []; //hardcoding array band (not usinng)

//fraction
//donor
let n_c; //
let delta_ED;
let fraction_e = [];
let fraction_e_count;
let fraction_e_count_t;
let dif_e; //difference in freeze count
let dif_e_current; //difference in freeze difference count and existing paired e count

//acceptor
let n_v; //from before
let fraction_h = []; //from ealier
let fraction_h_count; //from ealier
let fraction_h_count_t; //from ealier
let dif_h; //difference in freeze count
let dif_h_current; //difference in freeze difference count and existing paired e count

let new_generate = 6;

//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100); // zoom level from earlier

settings = {
	//setting initial state from earlier chapter
	nucleus: false,
	nn: false,
	kk: false,
	valence: true,
	conduction: true,
	nn_live: true,
};
var generation_R = 100; //generation rate from ealier
var generation_Rate; //generation rate from ealier
var generation_Rate_c; //generation rate from ealier
var current_Electron = 0; //electron count
var current_Hole = 0; //hole count
var current_Electron_c = 0; //electron count
var current_Hole_c = 0; //hole count
var recombination_R = 0; //recombinationn rate from earlier
var recombination_Rate = 1; //recombinationn rate from earlier
var recombination_Rate_c = 1; //recombinationn rate from earlier
var ni; //from earlier
var nn; //from earlier
var constant_beta = Math.pow(10, -12); //from earlier
let count_buffer = 0; //from earlier

var time_count = 0; //count down for timeIt functionn

////////////////////////////////
let whiteArray = []; //yellow dot storing
let blackArray = []; //green dot storing
let whiteID = []; //yellow dot id storing
let blackID = []; // green dot id storing
let white_seek_ball = []; //seek function from ealier
let black_seek_ball = []; //seek function from ealier
let global_id = 0; //global id

let appearArray = []; //appear animation
let disappearArray = []; //disappear aimation
let disappearArray_s1 = []; //disappear animation

let disappearArray_2 = []; //circles disappear animation
let disappearArray_2_pair = []; //circles  disappear animation
let disappearArray_dot = []; // disappear animation

let gap = 200; //test from earlier
let l = 560; //test from earlier
let w = 120; //test from earlier

// let scene1_aArray = []; //
// let scene1_dArray = [];
// let scene1_aArray2 = [];
// let scene1_dArray2 = [];

let switch_1 = 0; //switch from earlier
let recombine = 1; //recombine on or off

let fading = 255; //fading starting number

let change_square = -30; //change square dimension
let change_length = 100 + change_square; //change square length dimension

let temp = 270; //set temperature

let array_band = []; //for graphing
let array_band1 = []; //for graphing
let array_band2 = []; //for graphing
let array_band3 = []; //for graphing
let array_band4 = []; //for graphing
let random_botz = []; //velocity of random distribution
var generation_Rate_s1; //generation rate from earlier
var current_Electron_s1 = 0; //current elctro from earlier
var current_Hole_s1 = 0; //current hole from earlier
var recombination_Rate_s1 = 1; //recombination rate from earlier
// var constant_beta_s1 = Math.pow(10,-12); //constant

let g_rate; //generation rate

// let stop_s1 = false;

// let numm;

let interval_1 = 2000; //interval for generation
let interval_3 = 2000; //interval for generation
let interval_45 = 2000; //interval for generation

let interval_pn = 100; //interval for generation

let interval_s = 1000; //interval for generation

var run1; // initiation for geenration
var run45; // initiation for geenration
var run3; // initiation for geenration

var count_pn; //for animation for electric field from earlier

// let num_speed =1;

//var count_pn_num =0; //for animation for electric field from earlier

let button_reset; //reset button

let middle_position_Array = []; //middle position store
let disappear_count = 0; //disappear number count
/////////
let scale_x = 1440; //scale for x-axis adaptive window
let scale_y = 789; //scale for y-axis adaptive window

let sx; //scale for x-axis adaptive window
let sy; //scale for y-axis adaptive window

// let ran_num = 2; //

let electron_add = 0; //added electron number
let hole_add = 0; //added hole number

// let free_electron = [];
// let free_hole = [];
let random_direction; //random direction

var opacity; //opacity from earlier

// let electronLatticePositions = []; //lattice

// let random_num1 = [];

// let id_electron_s1 = 0;
// let id_hole_s1 = 0;

var blink; //from earlier
let interval_blink = 1000; //from earlier

var scattering_c; //scattering interval

var count_g; //count from earlier
let count_graph = 10; //count from earlier

let count_n = 0; ////count from earlier

let scattering_velocity; //scattering velocity
let scattering_count = 0; //scattering count
let scattering_count_c = 0; //scattering count

let scatter_tf = false; //scatter true or false

let constant_temperature_real; //temeprature from earlier
let temp_real; //temperature from earlier
// let box_count = [] //

let concentration = 50 / 3; //concennration from ealier

let context; //set up canvas

// var zincrement = 0.001; //increment
// var increment = 0.1;
// var zoff = 0.0;

// let test_num = 10
let ratio_num; // for counting how many elemnts been modified

let point_count = 200; //

let distance_dis = 9; //distance for recombine

let array_graph_con = []; //set concentration
let array_graph_current = []; //set concentration

let con_count = 0; //settinng from earlier
let x_con = 0; //setting from earlier
let y_con = 0; //setting from earlier
let real_graph = 0; //see if real time graph from earlier
let real_graph_live = 0; //see if real time graph from earlier
let start_graph = 1; //see if start graph from earlier

let test_a; //testing from slider
let y_run; //set the y axis real time change from earlier
let y_con_c = 0; //from earlier
let y_con_2 = 0; //from earlier

let X_n; //width of the depletion regionn

let test_current_scale = 3; //test for the scale
let test_x_scale = 0.2; //test for x scale

let line_yellow = []; //graph yellow line
let line_green = []; //graph green line

let line_yellow_data = new Array(100).fill(0); //store yellow line data
let line_green_data = []; //store green line data
let line_green_data_indice = []; //store green line data

let E_gap_factor = 10; //Electric field gap for cushion when drawing

// let  array_plot_e_set //
// let array_plot_e_0_set
// let array_plot_h_set
// let array_plot_h_0_set

let x_num_count = 3; //draw ticker

let run11; //initiation
let run_outer; //initiation

let line_green_v1 = []; //for json data v_data_1.json store green line data
let line_yellow_v1 = []; //for json data v_data_1.json store yellow line data
let line_green_data_v1 = []; //for json data v_data_1.json store green line data
let line_yellow_data_v1 = []; //for json data v_data_1.json store yellow line data

//// get the excel sheet data for when donor density = 10^17
let numberArray1_neg_2_0;
let numberArray1_neg_1_8;
let numberArray1_neg_1_6;
let numberArray1_neg_1_4;
let numberArray1_neg_1_2;
let numberArray1_neg_1_0;
let numberArray1_neg_0_8;
let numberArray1_neg_0_6;
let numberArray1_neg_0_4;
let numberArray1_neg_0_2;
let numberArray1_0;
let numberArray1_pos_0_2;
let numberArray1_pos_0_4;
let numberArray1_pos_0_6;
let numberArray1_pos_0_8;
let numberArray1_pos_1_0;
let numberArray1_pos_1_2;
let numberArray1_pos_1_4;
let numberArray1_pos_1_6;
let numberArray1_pos_1_8;
let numberArray1_pos_2_0;
let x_values_1;

let numberArray2_neg_2_0;
let numberArray2_neg_1_8;
let numberArray2_neg_1_6;
let numberArray2_neg_1_4;
let numberArray2_neg_1_2;
let numberArray2_neg_1_0;
let numberArray2_neg_0_8;
let numberArray2_neg_0_6;
let numberArray2_neg_0_4;
let numberArray2_neg_0_2;
let numberArray2_0;
let numberArray2_pos_0_2;
let numberArray2_pos_0_4;
let numberArray2_pos_0_6;
let numberArray2_pos_0_8;
let numberArray2_pos_1_0;
let numberArray2_pos_1_2;
let numberArray2_pos_1_4;
let numberArray2_pos_1_6;
let numberArray2_pos_1_8;
let numberArray2_pos_2_0;
let x_values_2;

let current_array = []; //current array displayibg
let charge_density_temp_data = []; //charge density temp data store
let E_field_temp_data = []; //electric field temp data
let x_counter; //used to read electric field at a given point in Accelerate function
let tesx; //used to read electric field at a given point in Accelerate function

// REN NEW VARIABLES
let outlineWidth = 740;
let outlineHeight = 180;
let outlineX = 150;
let outlineYs = [10, 180, 360];
let bandDiagramY = 10;
let chargeDensityDiagramY = 180;
let capacitorDiagramY = 360;
let capacitorHeight = outlineHeight * 2;

let metalY = capacitorDiagramY;
let metalX = outlineX;
let metalWidth = 50;
let metalHeight = outlineHeight * 2;

let tightThreshold = 10; // make sure charges don't bounce beyond line

let batteryPosImg;
let batteryNegImg;

let metalLabel;
let insulatorLabel;

let bandLength = 132;

// END

fetch("v_data_1.json")
	.then((response) => response.json())
	.then((jsonData) => {
		// Assuming jsonData is an array and we're interested in specific object properties
		//using https://tableconvert.com/excel-to-json to convert excel to json
		//when density = 10^17
		numberArray1_neg_2_0 = jsonData[0]["0"].map(Number); // Data for one condition
		numberArray1_neg_1_8 = jsonData[1]["1"].map(Number); // Data for another condition
		numberArray1_neg_1_6 = jsonData[2]["2"].map(Number); //
		numberArray1_neg_1_4 = jsonData[3]["3"].map(Number); //
		numberArray1_neg_1_2 = jsonData[4]["4"].map(Number); //
		numberArray1_neg_1_0 = jsonData[5]["5"].map(Number); //
		numberArray1_neg_0_8 = jsonData[6]["6"].map(Number); //
		numberArray1_neg_0_6 = jsonData[7]["7"].map(Number); //
		numberArray1_neg_0_4 = jsonData[8]["8"].map(Number); //
		numberArray1_neg_0_2 = jsonData[9]["9"].map(Number); //
		numberArray1_0 = jsonData[10]["10"].map(Number); //
		numberArray1_pos_0_2 = jsonData[11]["11"].map(Number); //
		numberArray1_pos_0_4 = jsonData[12]["12"].map(Number); //
		numberArray1_pos_0_6 = jsonData[13]["13"].map(Number); //
		numberArray1_pos_0_8 = jsonData[14]["14"].map(Number); //
		numberArray1_pos_1_0 = jsonData[15]["15"].map(Number); //
		numberArray1_pos_1_2 = jsonData[16]["16"].map(Number); //
		numberArray1_pos_1_4 = jsonData[17]["17"].map(Number); //
		numberArray1_pos_1_6 = jsonData[18]["18"].map(Number); //
		numberArray1_pos_1_8 = jsonData[19]["19"].map(Number); //
		numberArray1_pos_2_0 = jsonData[20]["20"].map(Number); //
		x_values_1 = jsonData[21]["21"].map(Number); //

		// Output the array to verify
		// console.log(numberArray1_pos_2_0);
	})
	.catch((error) => console.error("Error loading the JSON data:", error));

fetch("v_data_2.json")
	.then((response) => response.json())
	.then((jsonData) => {
		// Assuming jsonData is an array and we're interested in specific object properties
		//using https://tableconvert.com/excel-to-json to convert excel to json
		//when density = 10^17
		numberArray2_neg_2_0 = jsonData[0]["0"].map(Number); // Data for one condition
		numberArray2_neg_1_8 = jsonData[1]["1"].map(Number); // Data for another condition
		numberArray2_neg_1_6 = jsonData[2]["2"].map(Number); //
		numberArray2_neg_1_4 = jsonData[3]["3"].map(Number); //
		numberArray2_neg_1_2 = jsonData[4]["4"].map(Number); //
		numberArray2_neg_1_0 = jsonData[5]["5"].map(Number); //
		numberArray2_neg_0_8 = jsonData[6]["6"].map(Number); //
		numberArray2_neg_0_6 = jsonData[7]["7"].map(Number); //
		numberArray2_neg_0_4 = jsonData[8]["8"].map(Number); //
		numberArray2_neg_0_2 = jsonData[9]["9"].map(Number); //
		numberArray2_0 = jsonData[10]["10"].map(Number); //
		numberArray2_pos_0_2 = jsonData[11]["11"].map(Number); //
		numberArray2_pos_0_4 = jsonData[12]["12"].map(Number); //
		numberArray2_pos_0_6 = jsonData[13]["13"].map(Number); //
		numberArray2_pos_0_8 = jsonData[14]["14"].map(Number); //
		numberArray2_pos_1_0 = jsonData[15]["15"].map(Number); //
		numberArray2_pos_1_2 = jsonData[16]["16"].map(Number); //
		numberArray2_pos_1_4 = jsonData[17]["17"].map(Number); //
		numberArray2_pos_1_6 = jsonData[18]["18"].map(Number); //
		numberArray2_pos_1_8 = jsonData[19]["19"].map(Number); //
		numberArray2_pos_2_0 = jsonData[20]["20"].map(Number); //
		// x_values_2 = jsonData[21]["21"].map(Number); //

		// Output the array to verify
		// console.log(numberArray1_pos_2_0);
	})
	.catch((error) => console.error("Error loading the JSON data:", error));

function mouseClicked() {
	if (abs(910 * sx - mouseX) < 30 * sx && abs(377 * sy - mouseY) < 9 * sy) {
		if (isOn == true) isOn = false;
		else isOn = true;
	}
}

/***********************************************************************
 * Section: preload variables or functions
 ***********************************************************************/
function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	setInterval(toggleRecombine, 2000);

	onRefresh();
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");

	frameRate(10);

	context = canvas.drawingContext;

	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");

	metalLabel = loadImage("metal.png");
	insulatorLabel = loadImage("insulator.png");

	////////////
	// generate balls based on frequency
	run45 = setInterval(function () {
		genBalls(1);
	}, interval_45); // scene changing T
	// generate balls straight
	run11 = setInterval(function () {
		genBalls_straight(1);
	}, 2000); // scene changing T

	//count_pn = setInterval(function(){count_pn_f();}, interval_pn);

	scattering_c = setInterval(function () {
		scattering();
	}, 50); // scattring time

	//y_run = setInterval(function(){y_change();}, 1700); // y axis real time change

	/////////
	sceneCount = 0;

	///
	goToHole = [];

	random_hole = [];

	random_direction = [];

	xLimit = int(width / 180);
	yLimit = int(height / 180);
}

/***********************************************************************
 * Section: draw on canvas for different sceneCount
 ***********************************************************************/
function draw() {
	background(18, 18, 18);
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	//console.log("SV",scattering_velocity);

	if (mouseX > 0) {
		select("body").addClass("noselect");
	} else {
		if (select("body").hasClass("noselect")) {
			select("body").removeClass("noselect");
		}
	}

	if (sceneCount == 0.5) {
	} else if (sceneCount == 2) {
		///////////////// draw background upper boxes
		stroke(125, 241, 148, 100);
		strokeWeight(1);
		noFill();

		// draw outlines
		fill(30);
		//one
		// rect (x, y, w, h)
		rect(
			outlineX * sx,
			bandDiagramY * sy,
			outlineWidth * sx,
			outlineHeight * sy
		);
		//two
		// rect (x, y, w, h)
		rect(
			outlineX * sx,
			chargeDensityDiagramY * sy,
			outlineWidth * sx,
			outlineHeight * sy
		);
		// three
		// rect (x, y, w, h)
		rect(
			outlineX * sx,
			capacitorDiagramY * sy,
			outlineWidth * sx,
			capacitorHeight * sy
		);

		//line(250*sx,49*sy, 950*sx, 49*sy);

		noFill();

		///////////////////////////////////////////////////the function to update the electron hole movements and animations
		update_electron_hole();
		///////////////////////

		//////////// if recombination is turned on, recombine happen, distance_dis is the distance between each recombine (carrier lifetime)
		if (recombine == 1) {
			//disappear
			for (let i = 0; i < whiteArray.length; i++) {
				for (let k = 0; k < blackArray.length; k++) {
					if (
						abs(whiteArray[i].position.x - blackArray[k].position.x) <
							distance_dis &&
						abs(whiteArray[i].position.y - blackArray[k].position.y) <
							distance_dis &&
						whiteArray[i].id != blackArray[k].id &&
						whiteArray[i].show == 1 &&
						blackArray[k].show == 1 &&
						whiteArray[i].position.x > 190 * sx &&
						whiteArray[i].within == 0
					) {
						//mark
						whiteArray[i].stop();
						blackArray[k].stop();
						whiteArray[i].noShow();
						blackArray[k].noShow();
						whiteArray[i].deadd();
						blackArray[k].deadd();

						middle_position_Array[disappear_count] = p5.Vector.div(
							p5.Vector.add(blackArray[k].position, whiteArray[i].position),
							2
						);
						//original dots
						// whiteArray[i].seek(middle_position_Array[disappear_count]);
						// blackArray[k].seek(middle_position_Array[disappear_count]);

						//effects

						disappearArray[disappear_count] = new Appear(
							middle_position_Array[disappear_count].x,
							middle_position_Array[disappear_count].y,
							10,
							1,
							disappear_count
						);
						disappearArray_2[disappear_count] = new Appear(
							whiteArray[i].position.x,
							whiteArray[i].position.y,
							10,
							2,
							disappear_count
						);
						disappearArray_2_pair[disappear_count] = new Appear(
							blackArray[k].position.x,
							blackArray[k].position.y,
							10,
							3,
							disappear_count
						);

						disappear_count++;

						let b = whiteArray[i].position.y;

						whiteArray.splice(i, 1);
						blackArray.splice(k, 1);

						break;
					}
				}
			}

			//disappear white & black new h
			for (let i = 0; i < whiteArray.length; i++) {
				for (let k = 0; k < blackArray_h.length; k++) {
					if (
						abs(whiteArray[i].position.x - blackArray_h[k].position.x) <
							distance_dis &&
						abs(whiteArray[i].position.y - blackArray_h[k].position.y) <
							distance_dis &&
						whiteArray[i].id != blackArray_h[k].id &&
						whiteArray[i].show == 1 &&
						blackArray_h[k].show == 1 &&
						whiteArray[i].within == 0
					) {
						//huhu

						//mark
						whiteArray[i].stop();
						blackArray_h[k].stop();
						whiteArray[i].noShow();
						blackArray_h[k].noShow();
						whiteArray[i].deadd();
						blackArray_h[k].deadd();
						// whiteArray[i].update();
						// blackArray[k].update();

						middle_position_Array[disappear_count] = p5.Vector.div(
							p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),
							2
						);
						//original dots
						// whiteArray[i].seek(middle_position_Array[disappear_count]);
						// blackArray[k].seek(middle_position_Array[disappear_count]);

						//effects

						disappearArray[disappear_count] = new Appear(
							middle_position_Array[disappear_count].x,
							middle_position_Array[disappear_count].y,
							10,
							1,
							disappear_count
						);
						disappearArray_2[disappear_count] = new Appear(
							whiteArray[i].position.x,
							whiteArray[i].position.y,
							10,
							2,
							disappear_count
						);
						disappearArray_2_pair[disappear_count] = new Appear(
							blackArray_h[k].position.x,
							blackArray_h[k].position.y,
							10,
							3,
							disappear_count
						);

						disappear_count++;

						whiteArray.splice(i, 1);
						blackArray_h.splice(k, 1);
						break;
					}
				}
			}

			//disappear new white e & black
			for (let i = 0; i < whiteArray_e.length; i++) {
				for (let k = 0; k < blackArray.length; k++) {
					if (
						abs(whiteArray_e[i].position.x - blackArray[k].position.x) <
							distance_dis &&
						abs(whiteArray_e[i].position.y - blackArray[k].position.y) <
							distance_dis &&
						whiteArray_e[i].id != blackArray[k].id &&
						whiteArray_e[i].show == 1 &&
						blackArray[k].show == 1 &&
						whiteArray_e[i].within == 0
					) {
						//huhu

						//mark
						whiteArray_e[i].stop();
						blackArray[k].stop();
						whiteArray_e[i].noShow();
						blackArray[k].noShow();
						// whiteArray[i].update();
						// blackArray[k].update();

						middle_position_Array[disappear_count] = p5.Vector.div(
							p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),
							2
						);
						//original dots
						// whiteArray[i].seek(middle_position_Array[disappear_count]);
						// blackArray[k].seek(middle_position_Array[disappear_count]);

						//effects

						disappearArray[disappear_count] = new Appear(
							middle_position_Array[disappear_count].x,
							middle_position_Array[disappear_count].y,
							10,
							1,
							disappear_count
						);
						disappearArray_2[disappear_count] = new Appear(
							whiteArray_e[i].position.x,
							whiteArray_e[i].position.y,
							10,
							2,
							disappear_count
						);
						disappearArray_2_pair[disappear_count] = new Appear(
							blackArray[k].position.x,
							blackArray[k].position.y,
							10,
							3,
							disappear_count
						);

						disappear_count++;

						whiteArray_e.splice(i, 1);
						blackArray.splice(k, 1);

						break;
					}
				}
			}

			//disappear new white e & new black h
			for (let i = 0; i < whiteArray_e.length; i++) {
				for (let k = 0; k < blackArray_h.length; k++) {
					if (
						abs(whiteArray_e[i].position.x - blackArray_h[k].position.x) <
							distance_dis &&
						abs(whiteArray_e[i].position.y - blackArray_h[k].position.y) <
							distance_dis &&
						whiteArray_e[i].id != blackArray_h[k].id &&
						whiteArray_e[i].show == 1 &&
						blackArray_h[k].show == 1 &&
						whiteArray_e[i].within == 0
					) {
						// console.log (whiteArray_e[i].position.x)
						// console.log ((550-(400)/8*count_pn_num)*sx)

						//mark
						whiteArray_e[i].stop();
						blackArray_h[k].stop();
						whiteArray_e[i].noShow();
						blackArray_h[k].noShow();
						// whiteArray[i].update();
						// blackArray[k].update();

						middle_position_Array[disappear_count] = p5.Vector.div(
							p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),
							2
						);
						//original dots
						// whiteArray[i].seek(middle_position_Array[disappear_count]);
						// blackArray[k].seek(middle_position_Array[disappear_count]);

						//effects

						disappearArray[disappear_count] = new Appear(
							middle_position_Array[disappear_count].x,
							middle_position_Array[disappear_count].y,
							10,
							1,
							disappear_count
						);
						disappearArray_2[disappear_count] = new Appear(
							whiteArray_e[i].position.x,
							whiteArray_e[i].position.y,
							10,
							2,
							disappear_count
						);
						disappearArray_2_pair[disappear_count] = new Appear(
							blackArray_h[k].position.x,
							blackArray_h[k].position.y,
							10,
							3,
							disappear_count
						);

						disappear_count++;

						whiteArray.splice(i, 1);
						blackArray.splice(k, 1);

						break;
					}
				}
			}
		}

		////////////////////////////////////////////DRAW THE horizon on the second graph
		noFill();
		//coordinates
		//up
		stroke(102, 194, 255, 180);
		////horizoN
		// ////////////new
		//horizon down 1

		line(
			(10 + 100 + 70 + change_square + 940 - change_length - 70 - 760 + 30) *
				sx,
			(385 / 2 + 96.25) * sy,
			(10 + 100 + 70 + change_square + 700) * sx,
			(385 / 2 + 96.25) * sy
		);
		//vertical down 1
		line(
			250 * sx,
			(385 / 2 + 30) * sy,
			250 * sx,
			(385 / 2 + 770 / 4 - 30) * sy
		);

		//line(250*sx,(385/2)*sy, 950*sx, (385/2)*sy)

		//////////////////////////////////////////////////// tickers draw on x axis
		for (let i = 0; i < x_num_count; i++) {
			let x = 550 * sx + ((400 / 8) * sx * i * 2 + (400 / 8) * 2 * sx);
			let y = (10 + 385 / 2 + 96.25) * sy;
			line(x, y, x, y - 5 * sy); // Draw the line
		}

		for (let i = 0; i < x_num_count; i++) {
			let x = 550 * sx - (400 / 8) * sx * i * 2;
			let y = (10 + 385 / 2 + 96.25) * sy;
			line(x, y, x, y - 5 * sy); // Draw the line
		}
		//////////////////////////////////////////////////// tickers draw on y axis

		if (isOn == false) {
			for (let i = 0; i < 4; i++) {
				let x = 250 * sx;
				let y = (10 + 385 / 2 + 96.25) * sy + 12.5 * sy + 12.5 * sy * i;
				line(x, y, x + 5 * sx, y); // Draw the line
			}

			for (let i = 0; i < 4; i++) {
				let x = 250 * sx;
				let y = (10 + 385 / 2 + 96.25) * sy - 12.5 * sy - 12.5 * sy * i;
				line(x, y, x + 5 * sx, y); // Draw the line
			}

			noStroke();
			fill(102, 194, 255, 180);
			textSize(10 * sx);
			// text("20 μC/cm\u00B3",560*sx,252*sy);
			// text("-20 μC/cm\u00B3",560*sx,351*sy);
		} else {
			for (let i = 0; i < 4; i++) {
				let x = 250 * sx;
				let y =
					(10 + 385 / 2 + 96.25) * sy +
					(40 / 1530) * 500 * sy +
					(40 / 1530) * 500 * sy * i;
				line(x, y, x + 5 * sx, y); // Draw the line
			}

			for (let i = 0; i < 4; i++) {
				let x = 250 * sx;
				let y =
					(10 + 385 / 2 + 96.25) * sy -
					(40 / 1530) * 500 * sy -
					(40 / 1530) * 500 * sy * i;
				line(x, y, x + 5 * sx, y); // Draw the line
			}

			noStroke();
			fill(102, 194, 255, 180);
			textSize(10 * sx);
			// text("2000 V/cm",560*sx,249*sy);
			// text("-2000 V/cm",560*sx,353*sy);
		}

		//////////////////////////////////////////////////// x axis labeling

		noStroke();
		fill(102, 194, 255, 180);
		textSize(10 * sx);
		text("1 \u00B5m", 340 * sx, 313 * sy);

		///////////new box graphing

		noStroke();
		fill(254, 246, 182, 100);
		//rect_density = 10+0.7*Math.pow(10,-13)*hole_add_new-V_applied_p/2+V_applied_n/2

		//////////////////////////////////////////////////// draw charge density when switch is False
		if (isOn == false) {
			if (line_yellow_data_v1.length > 0) {
				//if (hole_new == 50000000000000 && line_yellow_data_v1.length>0)
				//test case for v_data_1.json

				miority_density =
					Math.pow(10, 20) / Math.pow(hole_add_new * Math.pow(10, 3), 2);
				for (let i = 0; i < bandLength; i++) {
					//let y1 = 1.6*Math.pow(10,-2)*hole_add_new*Math.pow(10,3)*(-1-miority_density*Math.exp(-current_array[i]/0.026)+Math.exp(current_array[i]/0.026))

					let y1 =
						-1.6 *
						Math.pow(10, -2) *
						hole_add_new *
						Math.pow(10, 3) *
						(-1 +
							Math.exp(-current_array[i] / 0.026) -
							miority_density * Math.exp(current_array[i] / 0.026));
					//let y1 = 1.6*Math.pow(10,-13)*hole_add_new*Math.pow(10,3)*(-1)
					charge_density_temp_data[i] = { x: line_yellow_data_v1[i].x, y: y1 };
				}

				//console.log("current_arrayyyyyy=", current_array);

				if (V_applied_p > 0 || V_applied_p < 0) {
					///charge density graph
					beginShape();

					vertex(250 * sx, (10 + 385 / 2 + 96.25) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < charge_density_temp_data.length; i++) {
						let x = charge_density_temp_data[i].x;
						let y =
							charge_density_temp_data[i].y / Math.pow(10, 14) +
							(10 + 385 / 2 + 96.25) * sy;
						//let y = 20 + (10+385/2+96.25) * sy;
						vertex(x, y);
					}
					//vertex(charge_density_temp_data[136].x, charge_density_temp_data[136].y)

					endShape();
				} else if (V_applied_p == 0) {
				}
			}
		}
		noFill();

		fill(218, 112, 214, 100);

		//////////////////////////////////////////////////// draw E-field graph on second graph when switch is On, and draw charge density graph when not clicked switch
		if (isOn == true) {
			if (line_yellow_data_v1.length > 0) {
				//test case for v_data_1.json

				// for (let i =0; i<136;i++) {
				//   let y1 = (current_array[i+1]-current_array[i])/(x_values_1[i+1]-x_values_1[i])*Math.pow(10,7)
				//   E_field_temp_data[i] = {x:line_yellow_data_v1[i].x,y:y1}
				// }

				if (V_applied_p > 0 || V_applied_p < 0) {
					///charge density graph
					beginShape();

					vertex(250 * sx, (10 + 385 / 2 + 96.25) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < E_field_temp_data.length; i++) {
						let x = E_field_temp_data[i].x;
						let y =
							(E_field_temp_data[i].y / Math.pow(10, 4)) * 2 +
							(10 + 385 / 2 + 96.25) * sy;
						vertex(x, y);
					}
					vertex(
						E_field_temp_data[135].x,
						E_field_temp_data[135].y / Math.pow(10, 5) +
							(10 + 385 / 2 + 96.25) * sy
					);

					endShape();

					// x_counter=0;
					// tesx= (2*100+250)*sx;
					// while ( tesx > E_field_temp_data[x_counter].x) {x_counter=x_counter+1};
					// console.log("x-counter=",x_counter);
					// console.log("E_fld=",E_field_temp_data[x_counter-1].x);
					// console.log("E_fld=",E_field_temp_data[x_counter-1].y);
				} else if (V_applied_p == 0) {
				}
			}
		}

		//////////////////////////////////////////////////// graph switch on and off change looks
		if (isOn) {
			fill("white");
		} else {
			fill(102, 194, 255, 100);
		}

		noStroke();
		rect(830 * sx, 334 * sy, 50 * sx, 16 * sy, 5 * sy, 5 * sy);

		textSize(12 * sx);
		if (isOn) {
			fill("black");
			text("SWITCH", 830 * sx, 346 * sy);
		} else {
			fill("white");
			text("SWITCH", 830 * sx, 346 * sy);
		}

		////////////////////////////////////////////////////draw band diagram lines data calcuation based on array: array_band_depletion1

		stroke(125, 241, 148, 100);
		noFill();

		/////////////////////////////////draw red dashed line ox

		///red box
		///middle 550
		//150

		// REN DRAWING SECTION

		stroke("#fff");
		// context.setLineDash([10, 10]);

		// draw metal on left side
		rect(metalX * sx, metalY * sy, metalWidth * sx, metalHeight * sy);

		stroke("#fff");

		// draw Insulator
		rect(
			(metalX + metalWidth) * sx,
			metalY * sy,
			metalWidth * sx,
			metalHeight * sy
		);

		// draw metal on right side
		rect(
			(outlineX + outlineWidth - metalWidth) * sx,
			metalY * sy,
			metalWidth * sx,
			metalHeight * sy
		);

		let batteryX = outlineX + 360;
		let batteryY = capacitorDiagramY + 376;

		// battery image
		image(
			batteryPosImg,
			batteryX * sx,
			batteryY * sy,
			(batteryPosImg.width / 1.5) * sx,
			(batteryPosImg.height / 1.5) * sy
		);

		// left metal label
		image(
			metalLabel,
			(outlineX + 16) * sx,
			(capacitorDiagramY + capacitorHeight / 2 - 36) * sy,
			(metalLabel.width / 1.5) * sx,
			(metalLabel.height / 1.5) * sy
		);

		// right metal label
		image(
			metalLabel,
			(outlineX + outlineWidth - 32) * sx,
			(capacitorDiagramY + capacitorHeight / 2 - 36) * sy,
			(metalLabel.width / 1.5) * sx,
			(metalLabel.height / 1.5) * sy
		);

		// insulator label

		image(
			insulatorLabel,
			(outlineX + 68) * sx,
			(capacitorDiagramY + capacitorHeight / 2 - 54) * sy,
			(insulatorLabel.width / 1.5) * sx,
			(insulatorLabel.height / 1.5) * sy
		);

		stroke("fff");

		// line from left metal to battery, vertical
		line(
			(outlineX + metalWidth / 2) * sx,
			(capacitorDiagramY + capacitorHeight) * sy,
			(outlineX + metalWidth / 2) * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy // -5 because battery not aligned
		);

		// line from left metal to battery, horizontal
		line(
			(outlineX + metalWidth / 2) * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy,
			batteryX * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy
		);

		// line from battery to right metal, vertical
		line(
			(outlineX + outlineWidth - 26) * sx,
			(capacitorDiagramY + capacitorHeight) * sy,
			(outlineX + outlineWidth - 26) * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy // -5 because battery not aligned
		);

		// line from battery to right metal, horizontal
		line(
			(batteryX + batteryPosImg.width - 34) * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy,
			(outlineX + outlineWidth - 26) * sx,
			(batteryY + batteryPosImg.height / 2 - 5) * sy
		);

		context.stroke();

		///////////////////////////////////////////////////////////////////draw new band diagram using json data

		stroke(254, 246, 182);

		if (hole_new == 99763115748444.14) {
			//10^17 case

			if (V_applied_p / 20 == -2) {
				current_array = numberArray1_neg_2_0;
			} else if (V_applied_p / 20 == -1.6) {
				current_array = numberArray1_neg_1_6;
			} else if (V_applied_p / 20 == -1.2) {
				current_array = numberArray1_neg_1_2;
			} else if (V_applied_p / 20 == -0.8) {
				current_array = numberArray1_neg_0_8;
			} else if (V_applied_p / 20 == -0.4) {
				current_array = numberArray1_neg_0_4;
			} else if (V_applied_p / 20 == 0) {
				current_array = numberArray1_0;
			} else if (V_applied_p / 20 == 0.4) {
				current_array = numberArray1_pos_0_4;
			} else if (V_applied_p / 20 == 0.8) {
				current_array = numberArray1_pos_0_8;
			} else if (V_applied_p / 20 == 1.2) {
				current_array = numberArray1_pos_1_2;
			} else if (V_applied_p / 20 == 1.6) {
				current_array = numberArray1_pos_1_6;
			} else if (V_applied_p / 20 == 2) {
				current_array = numberArray1_pos_2_0;
			}
		} else if (hole_new == 50000000000000) {
			if (V_applied_p / 20 == -2) {
				current_array = numberArray2_neg_2_0;
			} else if (V_applied_p / 20 == -1.6) {
				current_array = numberArray2_neg_1_6;
			} else if (V_applied_p / 20 == -1.2) {
				current_array = numberArray2_neg_1_2;
			} else if (V_applied_p / 20 == -0.8) {
				current_array = numberArray2_neg_0_8;
			} else if (V_applied_p / 20 == -0.4) {
				current_array = numberArray2_neg_0_4;
			} else if (V_applied_p / 20 == 0) {
				current_array = numberArray2_0;
			} else if (V_applied_p / 20 == 0.4) {
				current_array = numberArray2_pos_0_4;
			} else if (V_applied_p / 20 == 0.8) {
				current_array = numberArray2_pos_0_8;
			} else if (V_applied_p / 20 == 1.2) {
				current_array = numberArray2_pos_1_2;
			} else if (V_applied_p / 20 == 1.6) {
				current_array = numberArray2_pos_1_6;
			} else if (V_applied_p / 20 == 2) {
				current_array = numberArray2_pos_2_0;
			}
		}

		//draw yellow curve
		beginShape();

		for (var k = 0; k < bandLength; k++) {
			//yellow curve

			//if (hole_new == 50000000000000 || hole_new == 99763115748444.14){
			// curveVertex((250+10*k/2)*sx,(171.25+current_array[k]*40-100)*sy)
			let x1 = 17;
			let x2 = 349;
			let y1 = 0;
			let y2 = 679;
			let a = (y2 - y1) / (x2 - x1);
			let b = y1 - a * x1;
			let y = a * x_values_1[k] + b;
			curveVertex((250 + y) * sx, (171.25 + current_array[k] * 40 - 100) * sy);
			line_yellow_data_v1[k] = {
				x: (250 + y) * sx,
				y: (171.25 + current_array[k] * 40 - 100) * sy,
			};
			line_yellow_data[k] = {
				x: (250 + y) * sx,
				y: (171.25 + current_array[k] * 40 - 100) * sy,
			};
			// line_yellow[k] = { x: (250+y)*sx, y: (171.25+current_array[k]*40-100)*sy};
			line_yellow[k] = [
				(250 + y) * sx,
				(171.25 + current_array[k] * 40 - 100) * sy,
			];

			//}
		}
		endShape();
		noStroke();
		stroke(125, 241, 148);

		//draw green curve
		beginShape();

		for (var k = 0; k < bandLength; k++) {
			//green curve

			let x1 = 17;
			let x2 = 349;
			let y1 = 0;
			let y2 = 679;
			let a = (y2 - y1) / (x2 - x1);
			let b = y1 - a * x1;
			let y = a * x_values_1[k] + b;

			curveVertex(
				(250 + y) * sx,
				(-30 + 171.25 + current_array[k] * 40 - 30) * sy
			);
			line_green_data_v1[k] = {
				x: (250 + y) * sx,
				y: (171.25 + current_array[k] * 40 - 30 - 30) * sy,
			};
			line_green_data[k] = {
				x: (250 + y) * sx,
				y: (171.25 + current_array[k] * 40 - 30 - 30) * sy,
			};

			// line_green[k]= { x: (250+y)*sx, y: (171.25+current_array[k]*40-30-30)*sy};
			line_green[k] = [
				(250 + y) * sx,
				(171.25 + current_array[k] * 40 - 30 - 30) * sy,
			];
		}
		endShape();
		noStroke();

		///////////////////////////////////////////////////////////////////other text on diagrams

		stroke(125, 241, 148, 100);

		textSize(17);
		noStroke();
		strokeWeight(1);
		fill(255);
		///////////////////

		fill(102, 194, 255, 180);

		textSize(14 * sx);

		text("Band Diagram", 160 * sx, 30 * sy);

		text("Charge Density", 160 * sx, 204 * sy);
		text(" / ", 260 * sx, 204 * sy);
		text("Electric Field", 273 * sx, 204 * sy);

		//choosing the E-field or charge density box around text
		if (isOn) {
			fill(218, 112, 214, 50);
			rect(271 * sx, 192 * sy, 85 * sx, 18 * sy, 5 * sy, 5 * sy);
		} else {
			fill(255, 40);
			rect(158 * sx, 192 * sy, 100 * sx, 18 * sy, 5 * sy, 5 * sy);
		}

		noStroke();
		fill(102, 194, 255, 180);

		textSize(14);

		// if (count_pn_num >=X_n && V_applied_p ==0) {
		//   text("Equilibrium",(760)*sx,(223)*sy)
		// }
	}
}

/***********************************************************************
 * Section: functions
 ***********************************************************************/

//reset button
reset_scene1 = () => {
	count_n = 0;
	//count_pn_num =0
	e_field_c = 0;

	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	start_graph = 1;
	count_graph = 10;

	whiteArray = [];
	blackArray = [];
	whiteArray_e = [];
	blackArray_h = [];
	appearArray_s1 = [];

	appearArray_s1 = [];
	whiteArray_e = [];
	whiteID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	blackArray_h = [];
	blackID_h = [];

	// console.log("sss")
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
};

//set carrier lifetime slider
setDistance = (te) => {
	//reverse
	// te = 999+1-te

	// factor_ca = te

	//  distance_dis = 10-factor_ca*(d_factor)
	//  distance_dis = parseInt(te)

	distance_dis = te;
	//  console.log(te)
};

//
setConcentration = (te) => {
	factor_c = te;
	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	concentration = te / 3;
	count_graph = 10;

	whiteArray = [];
	blackArray = [];
	array_graph_con = [];

	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);
};

//turn on or off recombine
switch_recombine = () => {
	if (recombine == 1) {
		//off
		recombine = 0;
		switch_re.checked = false;
	} else {
		recombine = 1;
		switch_re.checked = true;
	}
};

//set electron velocity slider
setVelocity = (v) => {
	scattering_velocity = v;
};

//set scattering time slider
setScattering = (c) => {
	scattering_count = c;
	scattering_count_c = parseInt(c) + 2;
	console.log("scattering_count_c=", scattering_count_c);
	console.log("scattering_count =", scattering_count);

	for (let i = 0; i < array_graph_con.length; i++) {
		array_graph_con[i].stop_count();
	}
	con_count = 0;
	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);
};

//set factor E (scale the final electric field by a factor)
setFactor = (c) => {
	factor_new = (1 / c) * 10;

	let ll = factor_new.toFixed(2);

	// document.getElementById("factor_E" ).value=ll
};

//set count down of some function
timeIt = () => {
	if (time_count > 0) {
		time_count--;
	}
};

//actual scattering happening
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
		for (let i = 0; i < whiteArray.length; i++) {
			if (whiteArray[i].push == 0) {
				//whiteArray[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
				let xx = findClosestValue(line_yellow, whiteArray[i].position.x);
				//whiteArray[i].origin.x = xx;
			}
		}

		for (let i = 0; i < blackArray.length; i++) {
			if (blackArray[i].push == 0) {
				//blackArray[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
				let xx = findClosestValue(line_green, blackArray[i].position.x);
				blackArray[i].origin.y = xx;
			}
		}

		for (let i = 0; i < blackArray_h.length; i++) {
			if (blackArray_h[i].push == 0) {
				//blackArray_h[i].botz = random_botz[Math.floor(Math.random() * random_botz.length)]
				let xx = findClosestValue(line_green, blackArray_h[i].position.x);
				blackArray_h[i].origin.y = xx;
			}
		}

		scattering_count_c = parseInt(scattering_count) + 2;
	}
};

//generating electron hole pairs based on frequency
genBalls = (num) => {
	clearInterval(run45);
	interval_45 = 4000 / g_rate;

	run45 = setInterval(function () {
		genBalls(1);
	}, 500);

	if (sceneCount == 2) {
		// console.log("haha")
		if (time_count > 0) {
			whiteArray = [];
			blackArray = [];

			recombination_Rate_c = 0;

			recombination_Rate = 0;

			recombination_Rate_c = 0;
		} else if (time_count == 0) {
			for (let i = 0; i < num; i++) {
				// let a = random(250 * sx, 930 * sx);
				let a = random(
					(outlineX + metalWidth * 2 + tightThreshold) * sx,
					(outlineX + outlineWidth - metalWidth - tightThreshold) * sx
				);
				// let b = random((20 + 385) * sy, 770 * sy);
				let b = random(
					(capacitorDiagramY + tightThreshold) * sy,
					(capacitorDiagramY + capacitorHeight - tightThreshold) * sy
				);

				appearArray.push(new Appear(a, b, 10, 0));

				let xx = findClosestValue(line_yellow, a);

				let aa = new Vehicle(a, b, 10, global_id, 0);
				aa.origin.x = xx;
				aa.top = 1;
				////botz is the velocity here, and it comes from a randomly generated number list
				aa.botz = random_botz[Math.floor(Math.random() * random_botz.length)];
				// new electrons / generated electrons
				whiteArray.push(aa);

				let yy = findClosestValue(line_green, a);
				// console.log(yy)

				let bb = new Vehicle(a, b, 10, global_id, 1);
				bb.origin.y = yy;
				bb.top = 1;
				bb.botz = random_botz[Math.floor(Math.random() * random_botz.length)];
				blackArray.push(bb);

				whiteID.push(global_id);
				blackID.push(global_id);
				global_id += 1;
			}
		}
	}
};

//straight moving balls generating for higher velocity
genBalls_straight = (num) => {};

//Reads doping concentration
add_h = (a) => {
	// distance_dis = 10-((a-123)/10*8+1)

	count_pn_num = 0;

	d_factor = Math.pow(((a - 123) / 10) * 5, 1 / 2);
	// distance_dis = 10-factor_ca*(d_factor)

	changg = ((a - 123) / 10) * 122;

	// changg =80

	//// Azad: Doping concentration * 0.001
	hole_new = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	//// Azad: Doping concentration * 0.001/5
	hole_add = Math.pow(10, a / 10);

	// same as above
	electron_add = Math.pow(10, a / 10);

	console.log("hole_add", hole_add);
	console.log("a", a);
	console.log("hole_new", hole_new);

	//// Azad: Doping concentration * 0.001/5
	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	/// this is later is used for calculating charge density
	hole_add_new = mm;

	time_count = 0;
	appearArray_s1 = [];

	// reset_scene1()
	appearArray_s1 = [];
	whiteArray_e = [];
	whiteID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	blackArray_h = [];
	blackID_h = [];
	random_botz = [];
	whiteArray = [];
	blackArray = [];

	////

	count_n = 0;
	//count_pn_num =0
	e_field_c = 0;

	y_con_c = 0;
	y_con_2 = 0;
	y_con = 0;
	start_graph = 1;
	count_graph = 10;

	whiteArray = [];
	blackArray = [];
	whiteArray_e = [];
	blackArray_h = [];
	appearArray_s1 = [];

	appearArray_s1 = [];
	whiteArray_e = [];
	whiteID_e = [];

	appearArray_s1 = [];
	appearArray_s2 = [];
	blackArray_h = [];
	blackID_h = [];

	console.log("sss");
	array_graph_con = [];

	con_count = 0;

	//  console.log(concentration)

	array_graph_con.push(
		new Concentration(scattering_velocity, scattering_count)
	);

	//add ---- hhhh left
	if (sceneCount == 1.5 || sceneCount == 2 || sceneCount == 3) {
		// console.log(count_pn_num)

		current_Electron_c = Math.round(electron_add);
		e_count = Math.pow(100, (Math.log10(current_Electron_c) - 8) / 2) / 1000;

		///  fraction cal   // n_c delta_ED

		///////////////////////calculating the random generated list from boltzmann distribution
		///////////////////////generating random number on y and x axis, and if it falls within the graph area, then add it into the list
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

			if (bb < y) {
				random_botz.push(Math.round((aa / Math.pow(10, 6)) * 2) / 4);
			}
		}

		console.log("random_botz.length", random_botz.length);

		////////add holes pairs/////////////////////////////////////////////////////////////////////////

		///////hole

		current_Hole_c = Math.round(hole_add);
		// h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4;
		h_count = Math.pow(100, (Math.log10(current_Hole_c) - 8) / 2) / 1000;

		////////add holes pairs/////////////////////////////////////////////////////////////////////////

		for (let i = 0; i < h_count; i++) {
			// let a = random(250 * sx, 930 * sx);
			// let b = random((20 + 385) * sy, 760 * sy);

			let a = random(
				(outlineX + metalWidth * 2 + tightThreshold) * sx,
				(outlineX + outlineWidth - metalWidth - tightThreshold) * sx
			);
			let b = random(
				(capacitorDiagramY + tightThreshold) * sy,
				(capacitorDiagramY + capacitorHeight - tightThreshold) * sy
			);

			appearArray_s1.push(new Appear(a, b, 10, 5, i));

			var vehicle2 = new Vehicle(a, b, 10, "h", 1);
			vehicle2.botz = random_botz[i];
			blackArray_h.push(vehicle2);
			blackID_h.push(global_id);
			global_id += 1;
		}

		////////add holes pairs/////////////////////////////////////////////////////////////////////////
	}
};

//find closest value of the y value of the generated point
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

//change applied voltage slider
apply_V_p = (a) => {
	// if ( a>0) {
	//   factor_new=0
	// }

	V_applied_p = a;

	reset_scene1();
};

//change applied voltage negative value case
// apply_V_n = (a) =>{

//   V_applied_n = a
// }

//refreshing page reset
function onRefresh() {
	// console.log("The page was refreshed or loaded!");
	add_h(130);
	reset_scene1();
}

//recombine toggle between 0 and 1 every 3 seconds
function toggleRecombine() {
	if (recombine === 0) {
		recombine = 1;
	} else {
		recombine = 0;
	}
	// Now recombine will toggle between 0 and 1 every 3 seconds
}

// the function to update the electron hole movements and animations
update_electron_hole = () => {
	for (let i = 0; i < whiteArray.length; i++) {
		if (whiteArray[i].dead == 0) {
			whiteArray[i].display();
			whiteArray[i].appear_update();
			whiteArray[i].update();

			if (whiteArray[i].appear > 255) {
				whiteArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < blackArray.length; i++) {
		// whiteArray[i].display();
		// whiteArray[i].appear_update();
		// whiteArray[i].update();

		if (blackArray[i].dead == 0) {
			blackArray[i].display();
			blackArray[i].appear_update();
			blackArray[i].update();

			if (blackArray[i].appear > 255) {
				blackArray[i].random_walk();
			}
		}
	}

	for (let i = 0; i < blackArray_h.length; i++) {
		blackArray_h[i].display();
		blackArray_h[i].appear_update();
		blackArray_h[i].update();

		if (blackArray_h[i].appear > 255) {
			//blackArray_h[i].straight_walk()
			blackArray_h[i].random_walk();
			// if (blackArray_h[i].position.y > 49*sy) {

			// }
		}
	}

	for (let i = 0; i < whiteArray_e.length; i++) {
		whiteArray_e[i].display();
		whiteArray_e[i].appear_update();
		whiteArray_e[i].update();

		if (whiteArray_e[i].appear > 255) {
			//whiteArray_e[i].straight_walk()
			//if (whiteArray_e[i].position.y > 49*sy) {
			whiteArray_e[i].random_walk();
			//}
		}
	}

	for (let i = 0; i < appearArray.length; i++) {
		if (appearArray[i].alpha < 1) {
			appearArray.splice(i, 1);
		}
	}

	//generation visual effect
	for (let i = 0; i < appearArray.length; i++) {
		appearArray[i].display();
		appearArray[i].update();
	}

	//negative signs appear
	for (let i = 0; i < appearArray_s1.length; i++) {
		appearArray_s1[i].display();
		appearArray_s1[i].update();
	}

	// (recombination visual effect
	for (let i = 0; i < disappearArray.length; i++) {
		if (typeof disappearArray[i] != "undefined") {
			disappearArray[i].display();
			disappearArray[i].update();
		}
	}

	for (let i = 0; i < disappearArray_dot.length; i++) {
		if (typeof disappearArray[i] != "undefined") {
			disappearArray_dot[i].display();
			// disappearArray_dot[i].update();
		}
	}

	// (recombination visual effect, electron fading )
	for (let i = 0; i < disappearArray_2.length; i++) {
		if (typeof disappearArray_2[i] != "undefined") {
			disappearArray_2[i].display();
			disappearArray_2[i].update_circle();
			disappearArray_2[i].update_location();
			// disappearArray_2[i].seek(middle_position_Array[i]);
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < disappearArray_2_pair.length; i++) {
		if (typeof disappearArray_2_pair[i] != "undefined") {
			disappearArray_2_pair[i].display();
			disappearArray_2_pair[i].update_circle();
			disappearArray_2_pair[i].update_location();
			// disappearArray_2_pair[i].seek(middle_position_Array[i]);
		}
	}

	for (let i = 0; i < disappearArray_2_pair.length; i++) {
		if (typeof disappearArray_2_pair[i] != "undefined") {
			for (let k = 0; k < disappearArray_2.length; k++) {
				if (typeof disappearArray_2[k] != "undefined") {
					if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
						disappearArray_2[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									disappearArray_2[k].position,
									disappearArray_2_pair[i].position
								),
								2
							)
						);
						disappearArray_2_pair[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									disappearArray_2[k].position,
									disappearArray_2_pair[i].position
								),
								2
							)
						);
					}
				}
			}
		}
	}
};

setScale_v = (v) => {
	change_v = v;
};
