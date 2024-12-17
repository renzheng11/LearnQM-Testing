/* ------------------------------------------
Authors: Christina Wu, Ren Zheng,  Azad Naeemi
Contacts: renzheng112@gmail.com
------------------------------------------ */

// Variables ===================================================================
// tools
function qs(selector) {
	return document.querySelector(selector);
}

function scene(num) {
	return sceneCount == num;
}

// P5 canvas
let context;

// Scaling
let scale_x = 1440;
let scale_y = 789;
let sx;
let sy;

// Colors
const color = {
	bg: [18, 18, 18],
	blue: [102, 194, 255],
	EFColor: [255, 147, 86],
	EFColor2: [255, 147, 86],
	CDColor: [2, 104, 255], // charge density
	electricFieldOpacity: 160,
	chargeDensityOpacity: 160,
	white: [255],
	black: [0],
	black2: [30],
	red: [255],
	red2: [255, 40, 0],
	green: [125, 241, 148],
	greenBright: [0, 255, 0],
	yellow: [254, 246, 182],
};

// Charges + Electrons + Holes ============================================================
let fixedCharges = []; // fixed positive + negative charges
let initialHoles = []; // holes that exist when scene starts
let initialElectrons = []; // electrons that exist when scene starts
let generatedElectrons = []; // electrons that are generated
let generatedHoles = []; // holes that are generated
let generationRate = 500; // generation rate, the smaller the more frequent
var currentHoleCount = 0;
var electronCount = 0;
let chargeID = 0;
let recombine = 1;
let willScatter = false;
let boltzDistribution = []; //New random velocity distribution added by Azad

// Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
let recombineEffects = []; // circle that appears around a recombined pair
let recombineEffects_dot = [];
let recombinedElectrons = []; // electron that appears briefly at recombination location
let recombinedHoles = []; // hole that appears briefly at recombination location
let recombinePositions = []; //middle position store
let recombineCount = 0; //disappear number count

// Factors  ===================================================================
var recombinationRate = 1;
let recombineDistance = 1; // distance between electron and hole required to recombine, smaller number decreases likelihood of recombination
var voltageDepletionWidth = 0; // previously count_pn_num
let appliedVoltage = 0; // previously v_applied_p
let addedElectrons = 0; //added electron number
//let dopingConcentration = 0; //added hole number (used for initial fixed charges) // doping concentration/5. It is only used to put negative fixed charges on the screen and add one hole for each fixed charge. addedElectrons does the same for positive fixed charges on the other side. I think this is a legacy variable.
// REMOVE THIS, whre it's used - use

let addedDopants; //for getting added dopants number
let appliedVoltageFactor = 1; //factor for applied voltage

let temp = 270; //set temperature
var electronCount = 0;

let count_n = 0; // ???
let scatteringVelocity;
let scatteringCount = 0;
let scatteringCount_c = 0;

// Band Diagram  ===================================================================
let baseBand = [];
let electronBand = [];
let holeBand = [];
let electronLine = [];
let holeLine = [];
let bandDiagramVScale = 1;
let bandDiagramHeight;
let bandLength = 240; // original: 134

let electronLineData = new Array(100).fill(...color.black);
let holeLineData = [];

// Graphing  ===================================================================

let initialDepletionWidth;

let electronConcentrationData = []; // previously new_electronConcentrationPlotset_count
let holeConcentrationData = []; // previously new_holeConcentrationPlotset_count

let chargeDensityLeftData = []; // previously new_array_rou_e_set
let chargeDensityRightData = []; // previously new_array_rou_h_set
let chargeDensityData =[];

let switchGraph = false; //turn on or off the switch between charge density and electric field graph

let electronConcentrationPlotset;
let electronConcentrationPlot0_set;
let holeConcentrationPlotset;
let holeConcentrationPlot0_set;

let numXAxisTicks = 7;
var electronCount_graph = 0;

let graphPoints = 200;

let electronConcentrationPlot = [];
let holeConcentrationPlot = [];
let electronConcentrationPlot0 = [];
let holeConcentrationPlot0 = [];
let concentrationGraph = []; //set concentration

// Intervals  ===================================================================
let generationRateInterval;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

let interval_pn = 100;

let interval_s = 1000;

var run1;
var run45;
var run3;

var scatteringInterval; //scattering interval
let run11;
let run_outer;

let generateScene3 = 3; ////determines the rate of generation in Scene 3, the larger the more frequent

var blink;
let interval_blink = 1000;

let timeSinceLastInteraction = 0;

// Band Diagram Data Variables
// Data from EXCEL
//// get the excel sheet data for when donor density = 10^17

let dataArray1E14_neg_1_6;
let dataArray1E14_neg_1_5;
let dataArray1E14_neg_1_4;
let dataArray1E14_neg_1_3;
let dataArray1E14_neg_1_2;
let dataArray1E14_neg_1_1;
let dataArray1E14_neg_1_0;
let dataArray1E14_neg_0_9;
let dataArray1E14_neg_0_8;
let dataArray1E14_neg_0_7;
let dataArray1E14_neg_0_6;
let dataArray1E14_neg_0_5;
let dataArray1E14_neg_0_4;
let dataArray1E14_neg_0_3;
let dataArray1E14_neg_0_2;
let dataArray1E14_neg_0_1;
let dataArray1E14_0;
let dataArray1E14_pos_0_1;
let dataArray1E14_pos_0_2;
let dataArray1E14_pos_0_3;
let dataArray1E14_pos_0_4;
let dataArray1E14_pos_0_5;
let dataArray1E14_xPos;

let dataArray5E13_neg_1_6;
let dataArray5E13_neg_1_5;
let dataArray5E13_neg_1_4;
let dataArray5E13_neg_1_3;
let dataArray5E13_neg_1_2;
let dataArray5E13_neg_1_1;
let dataArray5E13_neg_1_0;
let dataArray5E13_neg_0_9;
let dataArray5E13_neg_0_8;
let dataArray5E13_neg_0_7;
let dataArray5E13_neg_0_6;
let dataArray5E13_neg_0_5;
let dataArray5E13_neg_0_4;
let dataArray5E13_neg_0_3;
let dataArray5E13_neg_0_2;
let dataArray5E13_neg_0_1;
let dataArray5E13_0;
let dataArray5E13_pos_0_1;
let dataArray5E13_pos_0_2;
let dataArray5E13_pos_0_3;
let dataArray5E13_pos_0_4;
let dataArray5E13_pos_0_5;
let dataArray5E13_xPos;
let ChargeDensity5E13_pos_0_1;
let ChargeDensity5E13_pos_0_2;
let ChargeDensity5E13_pos_0_3;
let ChargeDensity5E13_pos_0_4;
let ChargeDensity5E13_pos_0_5;

let ChargeDensity1E14_pos_0_1;
let ChargeDensity1E14_pos_0_2;
let ChargeDensity1E14_pos_0_3;
let ChargeDensity1E14_pos_0_4;
let ChargeDensity1E14_pos_0_5;

let currentArray = []; //is used to draw the banddiagram
let currentArrayScene2 = []; //is used to caclulate currentArray in Scene 1. 

let chargeArray = []; //array used to store charge density for positive voltages from fetched files
let currentArray_temp = []; //used to calculaate currentArray in Scene 2
let charge_density_temp_data = []; //charge density temp data store
let E_field_temp_data = []; //electric field temp data
let x_counter; //used to read electric field at a given point in Accelerate function
let tesx; //used to read electric field at a given point in Accelerate function

// band diagram
let getRandomBotz = []; //velocity of random distribution

let FermiVoltage = 0; //used to plot Ef

// FETCH DATA  ===================================================================
updateDopingConcentration(130);
fetchBandDiagramData(); // DO NOT REMOVE, included in multiple places to prevent load failures

function fetchBandDiagramData() {
	fetch("BandDiagramData1E14.json")
		.then((response) => response.json())
		.then((jsonData) => {
			// Assuming jsonData is an array and we're interested in specific object properties
			//using https://tableconvert.com/excel-to-json to convert excel to json
			//when density = 10^17

			dataArray1E14_neg_1_6 = jsonData["-1.6"].map(Number);
			dataArray1E14_neg_1_5 = jsonData["-1.5"].map(Number);
			dataArray1E14_neg_1_4 = jsonData["-1.4"].map(Number);
			dataArray1E14_neg_1_3 = jsonData["-1.3"].map(Number);
			dataArray1E14_neg_1_2 = jsonData["-1.2"].map(Number);
			dataArray1E14_neg_1_1 = jsonData["-1.1"].map(Number);
			dataArray1E14_neg_1_0 = jsonData["-1.0"].map(Number);
			dataArray1E14_neg_0_9 = jsonData["-0.9"].map(Number);
			dataArray1E14_neg_0_8 = jsonData["-0.8"].map(Number);
			dataArray1E14_neg_0_7 = jsonData["-0.7"].map(Number);
			dataArray1E14_neg_0_6 = jsonData["-0.6"].map(Number);
			dataArray1E14_neg_0_5 = jsonData["-0.5"].map(Number);
			dataArray1E14_neg_0_4 = jsonData["-0.4"].map(Number);
			dataArray1E14_neg_0_3 = jsonData["-0.3"].map(Number);
			dataArray1E14_neg_0_2 = jsonData["-0.2"].map(Number);
			dataArray1E14_neg_0_1 = jsonData["-0.1"].map(Number);
			dataArray1E14_0 = jsonData["0"].map(Number);
			dataArray1E14_pos_0_1 = jsonData["0.1"].map(Number);
			dataArray1E14_pos_0_2 = jsonData["0.2"].map(Number);
			dataArray1E14_pos_0_3 = jsonData["0.3"].map(Number);
			dataArray1E14_pos_0_4 = jsonData["0.4"].map(Number);
			dataArray1E14_pos_0_5 = jsonData["0.5"].map(Number);
			dataArray1E14_xPos = jsonData["xPos"].map(Number);

			// Output the array to verify
		})
		.catch((error) => console.error("Error loading the JSON data:", error));

	fetch("BandDiagramData5E13.json")
		.then((response) => response.json())
		.then((jsonData) => {
			// Assuming jsonData is an array and we're interested in specific object properties
			//using https://tableconvert.com/excel-to-json to convert excel to json
			//when density = 10^17

			dataArray5E13_neg_1_6 = jsonData["-1.6"].map(Number);
			dataArray5E13_neg_1_5 = jsonData["-1.5"].map(Number);
			dataArray5E13_neg_1_4 = jsonData["-1.4"].map(Number);
			dataArray5E13_neg_1_3 = jsonData["-1.3"].map(Number);
			dataArray5E13_neg_1_2 = jsonData["-1.2"].map(Number);
			dataArray5E13_neg_1_1 = jsonData["-1.1"].map(Number);
			dataArray5E13_neg_1_0 = jsonData["-1.0"].map(Number);
			dataArray5E13_neg_0_9 = jsonData["-0.9"].map(Number);
			dataArray5E13_neg_0_8 = jsonData["-0.8"].map(Number);
			dataArray5E13_neg_0_7 = jsonData["-0.7"].map(Number);
			dataArray5E13_neg_0_6 = jsonData["-0.6"].map(Number);
			dataArray5E13_neg_0_5 = jsonData["-0.5"].map(Number);
			dataArray5E13_neg_0_4 = jsonData["-0.4"].map(Number);
			dataArray5E13_neg_0_3 = jsonData["-0.3"].map(Number);
			dataArray5E13_neg_0_2 = jsonData["-0.2"].map(Number);
			dataArray5E13_neg_0_1 = jsonData["-0.1"].map(Number);
			dataArray5E13_0 = jsonData["0"].map(Number);
			dataArray5E13_pos_0_1 = jsonData["0.1"].map(Number);
			dataArray5E13_pos_0_2 = jsonData["0.2"].map(Number);
			dataArray5E13_pos_0_3 = jsonData["0.3"].map(Number);
			dataArray5E13_pos_0_4 = jsonData["0.4"].map(Number);
			dataArray5E13_pos_0_5 = jsonData["0.5"].map(Number);
			dataArray5E13_xPos = jsonData["xPos"].map(Number);

			// Output the array to verify
			// clg(dataArray1E14_pos_2_0);
		})

		fetch("ChargeDensity5E13.json")
		.then((response) => response.json())
		.then((jsonData) => {
			// Assuming jsonData is an array and we're interested in specific object properties
			//using https://tableconvert.com/excel-to-json to convert excel to json
			//when density = 10^17

			ChargeDensity5E13_pos_0_1 = jsonData["+0.1"].map(Number);
			ChargeDensity5E13_pos_0_2 = jsonData["+0.2"].map(Number);
			ChargeDensity5E13_pos_0_3 = jsonData["+0.3"].map(Number);
			ChargeDensity5E13_pos_0_4 = jsonData["+0.4"].map(Number);
			ChargeDensity5E13_pos_0_5 = jsonData["+0.5"].map(Number);

		})

		fetch("ChargeDensity1E14.json")
		.then((response) => response.json())
		.then((jsonData) => {
			// Assuming jsonData is an array and we're interested in specific object properties
			//using https://tableconvert.com/excel-to-json to convert excel to json
			//when density = 10^17

			ChargeDensity1E14_pos_0_1 = jsonData["+0.1"].map(Number);
			ChargeDensity1E14_pos_0_2 = jsonData["+0.2"].map(Number);
			ChargeDensity1E14_pos_0_3 = jsonData["+0.3"].map(Number);
			ChargeDensity1E14_pos_0_4 = jsonData["+0.4"].map(Number);
			ChargeDensity1E14_pos_0_5 = jsonData["+0.5"].map(Number);

		})


		.catch((error) => console.error("Error loading the JSON data:", error));
}

// Functions  ===================================================================
function keyPressed() {
	if (switchGraph) {
		switchGraph = false; // show electric field graph
	} else {
		switchGraph = true;
	}
}
// Switch from Charge Density graph to Electric Field graph
function mouseClicked() {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	let xCondition = 270 * sx - mouseX;
	let yCondition = abs(220 * sy - mouseY);

	if (xCondition < 100 * sx && xCondition < 0 && yCondition < 12 * sy) {
		switchGraph = true; // show electric field graph
	} else if (abs(162 * sx - mouseX) < 120 * sx && yCondition < 16 * sy) {
		switchGraph = false; // show charge density graph
	}
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

function setup() {
	fetchBandDiagramData();
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();
	updateDopingConcentration(130);
	resetScene();

	sceneCount = 0;
	goToHole = [];
	random_hole = [];

	xLimit = int(width / 180);
	yLimit = int(height / 180);

	regenerate();
}

// check and reset scene if it has been running with no user interaction for amount of time
function checkTimeout() {
	// if greater than 240 (approx 4 minutes)
	if (timeSinceLastInteraction > 240) {
		resetScene();
	}
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

	run_outer = setInterval(function () {
		generateCharges_outer(1);
	}, 1000 / generateScene3); // scene changing T

	count_pn = setInterval(function () {
		count_pn_f();
	}, interval_pn);

	scatteringInterval = setInterval(function () {
		scattering();
	}, 50); // scattring time
}
function drawOutlines() {
	stroke(...color.white, 100);
	strokeWeight(1);

	noFill();

	// third box outline (pn junction)
	rect(
		(10 + 100 + 70 + -30) * sx,
		(10 + 385) * sy,
		(940 - 70 - 70) * sx,
		(770 / 2) * sy
	);

	fill(...color.black2);

	// top box outline (band diagram)
	rect(
		(10 + 100 + 70 + -30) * sx,
		10 * sy,
		(940 - 70 - 70) * sx,
		(770 / 4) * sy
	);

	// middle box outline (charge density / electric field)
	rect(
		(10 + 100 + 70 + -30) * sx,
		(10 + 385 / 2) * sy,
		(940 - 70 - 70) * sx,
		(770 / 4) * sy
	);

	noFill();
}

function recombineArrays() {
	function checkForRecombines() {
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
		checkForRecombines();
	} else if (scene(2) && recombine == 1) {
		checkForRecombines();
	} else if (scene(3) && recombine == 1) {
		checkForRecombines();
	}
}

function updateCharges() {
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
	///up graph x:190-(950-(950-190)/graphPoints y:down171.25-40up
	noFill();
	//coordinates
	//up
	stroke(...color.blue, 180);
	//horizon
	line(190 * sx, 171.25 * sy, (10 + 100 + 70 + -30 + 790) * sx, 171.25 * sy);
	//vertical
	line(190 * sx, 40 * sy, 190 * sx, 171.25 * sy);
	//arrow up right
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 20 + 4) * sx,
		(171.25 + 3) * sy,
		(10 + 100 + 70 + -30 + 790) * sx,
		171.25 * sy
	);
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 20 + 4) * sx,
		(171.25 - 3) * sy,
		(10 + 100 + 70 + -30 + 790) * sx,
		171.25 * sy
	);
	//arrow up up
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 - 20 - 3 + 20) * sx,
		46 * sy,
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 - 20 + 20) * sx,
		40 * sy
	);
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 - 20 + 3 + 20) * sx,
		46 * sy,
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 - 20 + 20) * sx,
		40 * sy
	);
	//down
	//horizon
	line(
		190 * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy,
		(10 + 100 + 70 + -30 + 790) * sx,
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
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 20 + 4) * sx,
		(10 + 385 / 2 + 96.25 + 3 + 70) * sy,
		(10 + 100 + 70 + -30 + 790) * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 20 + 4) * sx,
		(10 + 385 / 2 + 96.25 - 3 + 70) * sy,
		(10 + 100 + 70 + -30 + 790) * sx,
		(10 + 385 / 2 + 96.25 + 70) * sy
	);
	//arrow down up
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760) * sx,
		(10 + 385 / 2 + 96.25 - 70) * sy,
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 - 3) * sx,
		(10 + 385 / 2 + 96.25 - 60 - 5) * sy
	);
	line(
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760) * sx,
		(10 + 385 / 2 + 96.25 - 70) * sy,
		(10 + 100 + 70 + -30 + 940 - 70 - 70 - 760 + 3) * sx,
		(10 + 385 / 2 + 96.25 - 60 - 5) * sy
	);
}
function drawGraph() {
	noFill();
	stroke(...color.blue, 180);

	// ////////////new
	// graph x axis
	line(
		(150 + 0) * sx,
		(10 + 385 / 2 + 96.25) * sy,
		(150 + 800) * sx,
		(10 + 385 / 2 + 96.25) * sy
	);
	// graph y axis
	line(
		(150 + 800 /2) * sx,
		(10 + 385 / 2 + 30) * sy,
		(150 + 800 /2) * sx,
		(10 + 385 / 2 + 770 / 4 - 30) * sy
	);

	// graph +x axis ticks
	for (let i = 0; i < numXAxisTicks; i++) {
		let x = 550 * sx + ((400 / 8) * sx * i + (400 / 8) * sx);
		let y = (10 + 385 / 2 + 96.25) * sy;
		line(x, y, x, y - 5 * sy); // Draw the line
	}

	// graph -x axis ticks
	for (let i = 0; i < numXAxisTicks; i++) {
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

	if (switchGraph) {
		// electric field is showing
		stroke(...color.EFColor);
		fill(...color.EFColor, 80);
		rect(276 * sx, 210 * sy, 95 * sx, 24 * sy, 5 * sy, 5 * sy);

		// charge density
		stroke(...color.blue);
		noFill();
		rect(158 * sx, 210 * sy, 110 * sx, 24 * sy, 5 * sy, 5 * sy);
	} else {
		// charge density is showing
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(158 * sx, 210 * sy, 110 * sx, 24 * sy, 5 * sy, 5 * sy);

		stroke(...color.blue);
		noFill();
		rect(276 * sx, 210 * sy, 95 * sx, 24 * sy, 5 * sy, 5 * sy);

		// stroke(...color.black);
		// text("Charge Density", 160 * sx, 223 * sy);
	}

	noStroke();
	fill(...color.blue);
	// textSize(14 * sx);
	textSize(14 * sx);

	// text("Band Diagram", 160 * sx, 30 * sy);
	// text("Charge Density", 164 * sx, 226 * sy);
	// text("Electric Field", 283 * sx, 226 * sy);

	text("Band Diagram", 160 * sx, 30 * sy);
	text("Charge Density", 163 * sx, 226 * sy);
	text("Electric Field", 283 * sx, 226 * sy);

	noStroke();
	fill(...color.blue);

	if (voltageDepletionWidth >= initialDepletionWidth && appliedVoltage == 0) {
		text("Equilibrium", 760 * sx, 223 * sy);
	}
}

function setVoltageDepletionWidth() {
	// previously setCountPN
	voltageDepletionWidth = initialDepletionWidth;

	// let ratio = -appliedVoltage / 10 / (1.6 * Math.pow(10, -13) * addedDopants);

	// voltageDepletionWidth = initialDepletionWidth * (1 + ratio);

	voltageDepletionWidth =
		5800 *
		Math.pow(
			(Math.log(addedDopants / Math.pow(10, 10)) - appliedVoltage / 2) /
				addedDopants,
			1 / 2
		) *
		Math.pow(10, 3);
}

function setInitialDepletionWidth() {
	// previously setX_n
	initialDepletionWidth =
		5811 *
		Math.pow(
			Math.log(addedDopants / Math.pow(10, 10)) /
				(Math.pow(10, 6) * addedDopants),
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
	// Reset the arrays to be empty before starting the counting
	electronConcentrationPlot = new Array(graphPoints).fill().map(() => []);
	electronConcentrationPlot0 = [];
	holeConcentrationPlot = new Array(graphPoints).fill().map(() => []);
	holeConcentrationPlot0 = [];
	for (let i = 0; i < generatedElectrons.length; i++) {
		for (let k = 0; k < graphPoints; k++) {
			if (
				generatedElectrons[i].position.x <=
					(190 + ((950 - 190) / graphPoints) * (k + 1)) * sx &&
				generatedElectrons[i].position.x >=
					(190 + ((950 - 190) / graphPoints) * k) * sx
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
		for (let k = 0; k < graphPoints; k++) {
			if (
				initialElectrons[i].position.x <=
					(190 + ((950 - 190) / graphPoints) * (k + 1)) * sx &&
				initialElectrons[i].position.x >=
					(190 + ((950 - 190) / graphPoints) * k) * sx
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
		for (let k = 0; k < graphPoints; k++) {
			if (
				generatedHoles[i].position.x <=
					(190 + ((950 - 190) / graphPoints) * (k + 1)) * sx &&
				generatedHoles[i].position.x >=
					(190 + ((950 - 190) / graphPoints) * k) * sx
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
		for (let k = 0; k < graphPoints; k++) {
			if (
				initialHoles[i].position.x <=
					(190 + ((950 - 190) / graphPoints) * (k + 1)) * sx &&
				initialHoles[i].position.x >=
					(190 + ((950 - 190) / graphPoints) * k) * sx
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
	electronConcentrationPlotset = new Array(graphPoints).fill().map(() => []);
	electronConcentrationPlot0_set = [];
	holeConcentrationPlotset = new Array(graphPoints).fill().map(() => []);
	holeConcentrationPlot0_set = [];
	electronConcentrationData = [];

	for (let k = -72; k < Math.round(-voltageDepletionWidth * 10); k++) {
		let x = k;

		let n =
			Math.pow(10, 20) / addedDopants +
			(Math.pow(10, 20) / addedDopants) *
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
	electronConcentrationPlotset = new Array(graphPoints).fill().map(() => []);
	electronConcentrationPlot0_set = [];
	holeConcentrationPlotset = new Array(graphPoints).fill().map(() => []);
	holeConcentrationPlot0_set = [];
	holeConcentrationData = [];

	for (let k = Math.round(voltageDepletionWidth * 10); k < 80; k++) {
		let x = k;

		let n =
			Math.pow(10, 20) / addedDopants +
			(Math.pow(10, 20) / addedDopants) *
				(Math.exp(appliedVoltage / 40 / 0.026) - 1) *
				Math.exp(-(k / 10 - voltageDepletionWidth));

		holeConcentrationData.push({ x: x, y: n * 1 });
	}
}

function drawElectricFieldData() {
	noFill();

	fill(...color.EFColor, color.electricFieldOpacity);

	// E- field data
	if (switchGraph == true) {
		// if (scene(1)) {
		// 	triangle(
		// 		(550 - (400 / 8) * voltageDepletionWidth) * sx,
		// 		(10 + 385 / 2 + 96.25) * sy,
		// 		(550 + (400 / 8) * voltageDepletionWidth) * sx,
		// 		(10 + 385 / 2 + 96.25) * sy,
		// 		550 * sx,
		// 		(10 +
		// 			385 / 2 +
		// 			96.25 +
		// 			((2 * bandDiagramHeight) / (initialDepletionWidth * 100)) *
		// 				count_n *
		// 				2) *
		// 			sy
		// 	);
		//}
		 if (scene(2)||scene(1)) {
			// triangle(
			// 	(550 - (400 / 8) * voltageDepletionWidth) * sx,
			// 	(10 + 385 / 2 + 96.25) * sy,
			// 	(550 + (400 / 8) * voltageDepletionWidth) * sx,
			// 	(10 + 385 / 2 + 96.25) * sy,
			// 	550 * sx,
			// 	(10 +
			// 		385 / 2 +
			// 		96.25 +
			// 		(((1 / 2.5) * 2 * bandDiagramHeight) /
			// 			(initialDepletionWidth * 100)) *
			// 			200 *
			// 			2) *
			// 		sy
			// );

			//console.log('E_field_temp_data=', E_field_temp_data);
			noStroke();

			fill(...color.EFColor, color.electricFieldOpacity);

			//fill(218, 112, 214, 100);
			//if (electronBand_data_v1.length > 0) {
				//if (appliedVoltage > 0 || appliedVoltage < 0) {
					///charge density graph
					beginShape();

					vertex(150 * sx, (10 + 385 / 2 + 96.25) * sy);
					

					// Add all points as curve vertices
					for (let i = 0; i < E_field_temp_data.length; i++) {
						let x = E_field_temp_data[i].x;
						let y =
							10 *
								(E_field_temp_data[i].y / Math.pow(10, 4)) *
								(40 / 1530) *
								500 *
								sy +
								(10 + 385 / 2 + 96.25) * sy;
						// let y =
						// 	(E_field_temp_data[i].y / Math.pow(10, 4)) * 2 +
						// 	(385 / 2 + 96.25) * sy;
						
						vertex(x, y);
					}
					// vertex(
					// 	E_field_temp_data[bandLength - 2].x,
					// 	E_field_temp_data[bandLength - 2].y / Math.pow(10, 6) +
					// 		(385 / 2 + 98) * sy
					// );
					vertex(940 * sx, (10 + 385 / 2 + 96.25) * sy);
					endShape();
				//}
			//}


		}
	}
}

function drawChargeDensityData() {
	noStroke();
	fill(...color.CDColor, color.chargeDensityOpacity);

	// if (scene(1)) {
	// 	bandDiagramHeight = Math.pow(10, -13) * addedDopants;
	// } else if (scene(2)) {
	// 	bandDiagramHeight =
	// 		10 + 0.7 * Math.pow(10, -13) * addedDopants - appliedVoltage / 2;
	// }

	
	if (scene(2)||scene(1)){
	// draw graph data
	if (switchGraph == false) {
		
		beginShape();

					vertex(150 * sx, (10 + 385 / 2 + 96.25) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < E_field_temp_data.length; i++) {
						let x = E_field_temp_data[i].x;
						let y =
							10 *
							(chargeDensityData[i].y / Math.pow(10, 12)) *
								(40 / 1530) *
								100 *
								sy +
								(10 + 385 / 2 + 96.25) * sy;
						

						// let y =
						// 	(E_field_temp_data[i].y / Math.pow(10, 4)) * 2 +
						// 	(385 / 2 + 96.25) * sy;

						vertex(x, y);
					}
					vertex(950 * sx, (10 + 385 / 2 + 96.25) * sy);
					// vertex(
					// 	E_field_temp_data[bandLength - 2].x,
					// 	E_field_temp_data[bandLength - 2].y / Math.pow(10, 6) +
					// 		(385 / 2 + 98) * sy
					// );

					endShape();
	 }
	}
}

function setCurrentDataArray() {
	if (addedDopants == 1e14) {
		let voltageRounded = Math.round((appliedVoltage / 40) * 10) / 10;
		//console.log('voltageRounded=', voltageRounded);
		if (voltageRounded == -1.6) {
			currentArray = dataArray1E14_neg_1_6;
		} else if (voltageRounded == -1.5) {
			currentArray = dataArray1E14_neg_1_5;
		} else if (voltageRounded == -1.4) {
			currentArray = dataArray1E14_neg_1_4;
		} else if (voltageRounded == -1.3) {
			currentArray = dataArray1E14_neg_1_3;
		} else if (voltageRounded == -1.2) {
			currentArray = dataArray1E14_neg_1_2;
		} else if (voltageRounded == -1.1) {
			currentArray = dataArray1E14_neg_1_1;
		} else if (voltageRounded == -1.0) {
			currentArray = dataArray1E14_neg_1_0;
		} else if (voltageRounded == -0.9) {
			currentArray = dataArray1E14_neg_0_9;
		} else if (voltageRounded == -0.8) {
			currentArray = dataArray1E14_neg_0_8;
		} else if (voltageRounded == -0.7) {
			currentArray = dataArray1E14_neg_0_7;
		} else if (voltageRounded == -0.6) {
			currentArray = dataArray1E14_neg_0_6;
		} else if (voltageRounded == -0.5) {
			currentArray = dataArray1E14_neg_0_5;
		} else if (voltageRounded == -0.4) {
			currentArray = dataArray1E14_neg_0_4;
		} else if (voltageRounded == -0.3) {
			currentArray = dataArray1E14_neg_0_3;
		} else if (voltageRounded == -0.2) {
			currentArray = dataArray1E14_neg_0_2;
		} else if (voltageRounded == -0.1) {
			currentArray = dataArray1E14_neg_0_1;
		} else if (voltageRounded == 0) {
			currentArray = [...dataArray1E14_0];
		} else if (voltageRounded == 0.1) {
			currentArray = dataArray1E14_pos_0_1;
			chargeArray = ChargeDensity1E14_pos_0_1;
		} else if (voltageRounded == 0.2) {
			currentArray = dataArray1E14_pos_0_2;
			chargeArray = ChargeDensity1E14_pos_0_2;
		} else if (voltageRounded == 0.3) {
			currentArray = dataArray1E14_pos_0_3;
			chargeArray = ChargeDensity1E14_pos_0_3;
		} else if (voltageRounded == 0.4) {
			currentArray = dataArray1E14_pos_0_4;
			chargeArray = ChargeDensity1E14_pos_0_4;
		} else if (voltageRounded == 0.5) {
			currentArray = dataArray1E14_pos_0_5;
			chargeArray = ChargeDensity1E14_pos_0_5;
		}
	} else if (addedDopants == 5e13) {
		let voltageRounded = Math.round((appliedVoltage / 40) * 10) / 10;
		//console.log('voltageRounded=', voltageRounded);
		if (voltageRounded == -1.6) {
			currentArray = dataArray5E13_neg_1_6;
		} else if (voltageRounded == -1.5) {
			currentArray = dataArray5E13_neg_1_5;
		} else if (voltageRounded == -1.4) {
			currentArray = dataArray5E13_neg_1_4;
		} else if (voltageRounded == -1.3) {
			currentArray = dataArray5E13_neg_1_3;
		} else if (voltageRounded == -1.2) {
			currentArray = dataArray5E13_neg_1_2;
		} else if (voltageRounded == -1.1) {
			currentArray = dataArray5E13_neg_1_1;
		} else if (voltageRounded == -1.0) {
			currentArray = dataArray5E13_neg_1_0;
		} else if (voltageRounded == -0.9) {
			currentArray = dataArray5E13_neg_0_9;
		} else if (voltageRounded == -0.8) {
			currentArray = dataArray5E13_neg_0_8;
		} else if (voltageRounded == -0.7) {
			currentArray = dataArray5E13_neg_0_7;
		} else if (voltageRounded == -0.6) {
			currentArray = dataArray5E13_neg_0_6;
		} else if (voltageRounded == -0.5) {
			currentArray = dataArray5E13_neg_0_5;
		} else if (voltageRounded == -0.4) {
			currentArray = dataArray5E13_neg_0_4;
		} else if (voltageRounded == -0.3) {
			currentArray = dataArray5E13_neg_0_3;
		} else if (voltageRounded == -0.2) {
			currentArray = dataArray5E13_neg_0_2;
		} else if (voltageRounded == -0.1) {
			currentArray = dataArray5E13_neg_0_1;
		} else if (voltageRounded == 0) {
			currentArray = [...dataArray5E13_0];
			//currentArrayScene2 = dataArray5E13_0;
		} else if (voltageRounded == 0.1) {
			chargeArray = ChargeDensity5E13_pos_0_1;
			currentArray = dataArray5E13_pos_0_1;
		} else if (voltageRounded == 0.2) {
			chargeArray = ChargeDensity5E13_pos_0_2;
			currentArray = dataArray5E13_pos_0_2;
		} else if (voltageRounded == 0.3) {
			chargeArray = ChargeDensity5E13_pos_0_3;
			currentArray = dataArray5E13_pos_0_3;
		} else if (voltageRounded == 0.4) {
			chargeArray = ChargeDensity5E13_pos_0_4;
			currentArray = dataArray5E13_pos_0_4;
		} else if (voltageRounded == 0.5) {
			chargeArray = ChargeDensity5E13_pos_0_5;
			currentArray = dataArray5E13_pos_0_5;
		}
	}

// 	for (var k = 0; k < bandLength; k++) {
// 		 currentArrayScene2[k] = currentArray[k];
// }
	//console.log('addedDopants=', addedDopants);
	//console.log('currentArray=',currentArray);
	//console.log('dataArray1E14_0',dataArray1E14_0);
	
	//currentArrayScene2 = currentArray;
}


function handleBands() {
	setCurrentDataArray(); // according to slider applied voltage

	stroke(...color.green, 100);
	noFill();

	bandDiagramHeight = 1.6 * Math.pow(10, -13) * addedDopants;
	// if (scene(1)) {
	// let istart = Math.floor(50 - (50 * voltageDepletionWidth) / 8);
	// for (var i = 0; i < 51; i++) {
	// 	//Given the left side of the x axis is 8um and we want to divide the entire x axis to 100 points, each grid point is 8/50um
	// 	if (i < istart) {
	// 		baseBand[i] = 0;
	// 	} else {
	// 		baseBand[i] =
	// 			((bandDiagramHeight * 7.76) / 10) *
	// 			11.5 *
	// 			((i - istart) / 50) *
	// 			((i - istart) / 50);
	// 	}
	// }

	// for (var i = 51; i < 100; i++) {
	// 	baseBand[i] = 2 * baseBand[50] - baseBand[100 - i];
	// }

	// for (var i = 0; i < 100; i++) {
	// 	electronBand[i] = -baseBand[i];
	// }
	// for (var i = 0; i < 100; i++) {
	// 	holeBand[i] = electronBand[i];
	// }
	// for (var k = 0; k < 100; k++) {
	// 	// electron curve
	// 	electronLine[k] = [
	// 		(150 + (800 / 100) * k) * sx,
	// 		(171.25 - electronBand[k] - 100) * sy,
	// 	];
	// }
	// for (var k = 0; k < 100; k++) {
	// 	// hole curve
	// 	holeLine[k] = [
	// 		(150 + (800 / 100) * k) * sx,
	// 		(+0 + 171.25 - holeBand[k] - 60) * sy,
	// 	];
	// }

	drawBands();
}

function drawBandsOriginal() {
	// Draw electron band
	// beginShape();
	// for (var k = 0; k < 100; k++) {
	// 	//yellow curve
	// 	if (scene(1) || scene(2)) {
	// 		curveVertex(
	// 			(150 + (800 / 100) * k) * sx,
	// 			(171.25 - electronBand[k] - 100) * sy
	// 		);
	// 	}
	// 	electronLineData[k] = {
	// 		x: (150 + (800 / 100) * k) * sx,
	// 		y: (171.25 - electronBand[k] - 100) * sy,
	// 	};
	// }
	// endShape();
	// // Draw hole band
	// noStroke();
	// ///
	// stroke(...color.green);
	// beginShape();
	// for (var k = 0; k < 100; k++) {
	// 	//green curve
	// 	if (scene(1) || scene(2)) {
	// 		curveVertex(
	// 			(150 + (800 / 100) * k) * sx,
	// 			(-30 + 171.25 - holeBand[k] - 30) * sy
	// 		);
	// 	}
	// 	holeLineData[k] = {
	// 		x: (150 + (800 / 100) * k) * sx,
	// 		y: (171.25 - holeBand[k] - 30 - 30) * sy,
	// 	};
	// }
	// endShape();
}

function drawBands() {
	// draw electron band
	noFill();
	stroke(...color.yellow);

	strokeWeight(1.5);

	if (scene(1)) {
		if(voltageDepletionWidth < initialDepletionWidth) {
			if (addedDopants == 5e13){
			for (var k = 0; k < bandLength; k++) {
				let y11 = ((dataArray5E13_0[k]));
				currentArray[k] = y11 * (voltageDepletionWidth/initialDepletionWidth) ;
				}
			}
			if (addedDopants == 1e14){
				for (var k = 0; k < bandLength; k++) {
					let y11 = ((dataArray1E14_0[k]));
					currentArray[k] = y11 * (voltageDepletionWidth/initialDepletionWidth) ;
					}
				}
	
	}


	}
	
	
	//console.log('dataArray5E13_0', dataArray5E13_0)
	beginShape();
	for (var k = 0; k < bandLength; k++) {
		// parameters for drawing band diagram
		let x1 = 0;
		let x2 = 16;
		let y1 = 150;
		let y2 = 950;
		let a = (y2 - y1) / (x2 - x1);
		//let b = y1 - a * x1;
		let xPos = a * dataArray1E14_xPos[k] + y1;

		// vertex drawn from currentArray
		fill("red");
		noFill();
		curveVertex(xPos * sx, (171.25 + currentArray[k] * 40 - 100) * sy); // electron band + extra line bug
		electronBand[k] = [
			(xPos) * sx,
			(171.25 + currentArray[k] * (40) - 100) * sy,
		];
		let b =
			((currentArray[k + 1] - currentArray[k]) /
				(dataArray1E14_xPos[k+1] - dataArray1E14_xPos[k])) *
			Math.pow(10, 4);
		E_field_temp_data[k] = { x: xPos * sx, y: b };
		
	}

	// for (let k = 0; k < bandLength; k++) {
	// 	let y1 =
	// 		((currentArray[k + 1] - currentArray[k]) /
	// 			(dataArray1E14_xPos[k+1] - dataArray1E14_xPos[k])) *
	// 		Math.pow(10, 4);
	// 	E_field_temp_data[k] = { x: electronBand[k].x, y: y1 };
	// }
	
	endShape();
	noStroke();

	// for (var k = 0; k < 100; k++) {
	// 	// electron curve
	// 	electronLine[k] = [
	// 		(150 + (800 / 100) * k) * sx,
	// 		(171.25 - electronBand[k] - 100) * sy,
	// 	];
	// }
	// for (var k = 0; k < 100; k++) {
	// 	// hole curve
	// 	holeLine[k] = [
	// 		(150 + (800 / 100) * k) * sx,
	// 		(+0 + 171.25 - holeBand[k] - 60) * sy,
	// 	];
	// }
	// draw hole curve
	noFill();
	strokeWeight(1.5);
	stroke(...color.green);
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		let x1 = 0;
		let x2 = 16;
		let y1 = 150;
		let y2 = 950;
		let a = (y2 - y1) / (x2 - x1);
		//let b = y1 - a * x1;
		let y = a * dataArray1E14_xPos[k] + y1;

		curveVertex((0 + y) * sx, (-30 + 171.25 + currentArray[k] * 40 - 30) * sy);
		holeBand[k] = [
			(0 + y) * sx,
			(171.25 + currentArray[k] * (40) - 30 - 30) * sy,
		];
	}

	for (let i = 0; i < bandLength/2; i++) {
		// let minorityDensity =
		// Math.pow(10, 20) / Math.pow(addedDopants, 2);
			let y1 =
				-1.6 *
				Math.pow(10, -2) *
				addedDopants *
				(-1 +
					Math.exp(-currentArray[i] / 0.026));
					
					//console.log('currentArray[i]',currentArray[i]);
					//console.log('addedDopants',addedDopants);
					chargeDensityData[i] = {
				x: E_field_temp_data[i].x,
				y: y1,
			};

	}
	//console.log('E_field_temp_data',E_field_temp_data);		
		
	//console.log('currentArray',currentArray);			
	for (let i = 120; i < bandLength; i++) {		
	let y2 = currentArray[bandLength-1]
		let y1 =
		1.6 *
		Math.pow(10, -2) *
		addedDopants *
		(-1 +
			Math.exp((- y2 + currentArray[i]) / 0.026));

			//  let y1 =
			// 	1.6 *
			// 	Math.pow(10, -2) *
			// 	addedDopants *
			// 	(1 - Math.exp(-currentArray[i] / 0.026));
				
					chargeDensityData[i] = {
						x: E_field_temp_data[i].x,
						y: y1,
					};	
					
			// 		chargeDensitytData[i] = {
			// 	x: E_field_temp_data[i].x,
			// 	y: y1,
			// };
		}
	//console.log('chargeDensityData', chargeDensityData);
	let voltageRounded = Math.round((appliedVoltage / 40) * 10) / 10;
	if (voltageRounded > 0){
		for (let i = 0; i < bandLength; i++) {	
			chargeDensityData[i] = {
				x: E_field_temp_data[i].x,
				y: -chargeArray[i] *100000000000000000,
			};	
	}
	}

	//console.log('voltageRounded', voltageRounded);
	//console.log('chargeDensityData', chargeDensityData);
	endShape();
	noStroke();
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

	text("Electron Concentration ", 466 * sx, 30 * sy);
	text("Hole Concentration ", 480 * sx, 223 * sy);

	text("x", 930 * sx, 190 * sy);
	text("x", 930 * sx, (318 + 70) * sy);

	textSize(14);

	stroke(...color.green, 100);
}

function zap(array1, array2, num) {
	//zap new electron e & new hole h
	let Recombin_Prob = 0.5;
	if (scene(3)) {
		if (appliedVoltage / 10 < -0.2) {
			Recombin_Prob = 0.05;
		}
	}

	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			// check if electron and hole are close and they are showing, not same ID
			let condition =
				abs(array1[i].position.x - array2[k].position.x) < recombineDistance &&
				abs(array1[i].position.y - array2[k].position.y) < recombineDistance &&
				array1[i].id != array2[k].id &&
				array1[i].show == 1 &&
				array2[k].show == 1 &&
				random() < Recombin_Prob;

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

				recombinePositions[recombineCount] = p5.Vector.div(
					p5.Vector.add(array2[k].position, array1[i].position),
					2
				);

				//effects

				recombineEffects[recombineCount] = new Appear(
					recombinePositions[recombineCount].x,
					recombinePositions[recombineCount].y,
					10,
					1,
					recombineCount
				);
				recombinedElectrons[recombineCount] = new Appear(
					array1[i].position.x,
					array1[i].position.y,
					10,
					2,
					recombineCount
				);
				recombinedHoles[recombineCount] = new Appear(
					array2[k].position.x,
					array2[k].position.y,
					10,
					3,
					recombineCount
				);

				recombineCount++;

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
	timeSinceLastInteraction += 0.1; // approx += 1 every second (depends on framerate)
	checkTimeout();
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
		updateCharges();
		recombineArrays();
		drawChargeDensityData();
		drawElectricFieldData();
		setInitialDepletionWidth();
		drawDepletionRegion();
	}
	if (scene(1) || scene(2)) {
		drawGraph();
		handleBands();
	}
	if (scene(2) || scene(3)) {
		setVoltageDepletionWidth();
	}
	if (scene(3)) {
		drawScene3GraphLines();
		drawConcentrationData();
		countConcentration();
	}
}

function resetScene() {
	fetchBandDiagramData();
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	count_n = 0;
	voltageDepletionWidth = 0;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];
	fixedCharges = [];

	concentrationGraph = [];

	con_count = 0;

	// below affects scene 1 + 2
	concentrationGraph.push(
		new Concentration(scatteringVelocity, scatteringCount)
	);
	populateInitial();
}

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

function setBandDiagramVScale(a) {
	bandDiagramVScale = a;
}

function setDistance(te) {
	recombineDistance = te;
}

function setVelocity(v) {
	scatteringVelocity = v;
	for (let i = 0; i < concentrationGraph.length; i++) {
		concentrationGraph[i].stop_count();
	}
	con_count = 0;
	concentrationGraph.push(
		new Concentration(scatteringVelocity, scatteringCount)
	);

	for (let i = 0; i < generatedElectrons.length; i++) {
		generatedElectrons[i].movingVelocity =
			(5 * parseInt(scatteringVelocity)) / 5;
	}

	for (let i = 0; i < generatedHoles.length; i++) {
		generatedHoles[i].movingVelocity = (5 * parseInt(scatteringVelocity)) / 5;
	}

	for (let i = 0; i < initialHoles.length; i++) {
		initialHoles[i].movingVelocity = (5 * parseInt(scatteringVelocity)) / 5;
	}

	for (let i = 0; i < initialElectrons.length; i++) {
		initialElectrons[i].movingVelocity = (5 * parseInt(scatteringVelocity)) / 5;
	}
}

function setScattering(c) {
	scatteringCount = c;
	scatteringCount_c = parseInt(c) + 2;

	for (let i = 0; i < concentrationGraph.length; i++) {
		concentrationGraph[i].stop_count();
	}
	con_count = 0;
	concentrationGraph.push(
		new Concentration(scatteringVelocity, scatteringCount)
	);
}

function setFactor(c) {
	appliedVoltageFactor = (1 / c) * 10;

	let ll = appliedVoltageFactor.toFixed(2);

	// document.getElementById("factor_E" ).value=ll
}

function setVolume(v) {
	volume1 = v;
	num_multi = 1 / v;
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

	scatteringCount_c -= 1;

	if (scatteringCount_c == 0) {
		scatteringCount_c = parseInt(scatteringCount) + 2;
	}
}

function count_pn_f() {
	if (voltageDepletionWidth < initialDepletionWidth) {
		voltageDepletionWidth += 0.01;
		count_n += 1;
	}
}

function generateCharges_scene1(num) {}

function blinking() {
	clearInterval(blink);
	interval_blink = 2000;
	blink = setInterval(function () {
		blinking();
	}, interval_blink);
}

//generating electron hole pairs based on frequency
function generateCharges(num) {
	clearInterval(run45);
	interval_45 = 4000 / generationRateInterval;

	run45 = setInterval(function () {
		generateCharges(1);
	}, generationRate);

	if (scene(1) || scene(2) || scene(3)) {
		if (electronCount > 0) {
			generatedElectrons = [];
			generatedHoles = [];
			recombinationRate = 0;
		} else if (electronCount == 0) {
			for (let i = 0; i < num; i++) {
				let a = random(200 * sx, 930 * sx);
				let b = random((20 + 385) * sy, 770 * sy);

				generationEffects.push(new Appear(a, b, 10, 0));

				//let xx = findClosestValue(electronLine, a);
				let xx = findClosestValue(electronBand, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				generatedElectrons.push(aa);

				let yy = findClosestValue(holeBand, a);

				let bb = new Charge(a, b, 10, chargeID, 1);
				bb.origin.y = yy;
				bb.top = 1;
				generatedHoles.push(bb);

				chargeID += 1;
			}
		}
	}
}

function generateCharges_outer(num) {
	clearInterval(run_outer);

	run_outer = setInterval(function () {
		generateCharges_outer(1); // Generate 1 new set of balls at the rate defined by generateScene3
	}, 1000 / generateScene3);

	if (scene(3)) {
		if (electronCount > 0) {
			generatedElectrons = [];
			generatedHoles = [];

			recombinationRate = 0;

			recombinationRate = 0;
		} else if (electronCount == 0) {
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

				//let xx = findClosestValue(electronLine, a);
				let xx = findClosestValue(electronBand, a);

				let aa = new Charge(a, b, 10, chargeID, 0);
				aa.origin.x = xx;
				aa.top = 1;
				generatedElectrons.push(aa);

				let yy = findClosestValue(holeBand, a);

				let bb = new Charge(a, b, 10, chargeID, 1);
				bb.origin.y = yy;
				bb.top = 1;
				generatedHoles.push(bb);

				chargeID += 1;
			}
		}
	}
}

function time_graph() {
	if (electronCount_graph > 0) {
		electronCount_graph -= 1;
	}
}

function setGeneration(a) {
	generationRate = a;
}

function updateDopingConcentration(a) {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	if (a == 130) {
		addedDopants = 5 * Math.pow(10, 13);
	}
	if (a == 133) {
		addedDopants = Math.pow(10, 14);
	}
	

	voltageDepletionWidth = 0;
	//handleBands();

	//dopingConcentration = addedDopants;
	//addedElectrons = addedDopants/5;

	//let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;
	//let mm = addedDopants;
	//let pp = mm.toExponential(1);

	//document.getElementById("updateDopingConcentration").value = pp;
	//document.getElementById("updateDopingConcentration_scene2").value = pp;
	//document.getElementById("updateDopingConcentration_scene3").value = pp;
	//addedDopants = mm;

	electronCount = 0;
	fixedCharges = [];

	// resetScene()

	random_botz = [];

	////

	count_n = 0;
	voltageDepletionWidth = 0;

	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];

	fixedCharges = [];

	concentrationGraph = [];

	con_count = 0;

	// ???????
	// concentrationGraph.push(
	// 	new Concentration(scatteringVelocity, scatteringCount)
	// );

	//add ---- hhhh left
	if (scene(1) || scene(2) || scene(3)) {
		if (scene(1) || scene(2)) {
			chargeDensityLeftData = [];
			chargeDensityRightData = [];

			let chargeDensityHeight = Math.pow(10, -13) * addedDopants;

			initialDepletionWidth =
				5811 *
				Math.pow(
					Math.log(addedDopants / Math.pow(10, 10)) / addedDopants,
					1 / 2
				) *
				Math.pow(10, 3);

			if (scene(2)) {
				voltageDepletionWidth =
					5811 *
					Math.pow(
						(Math.log(addedDopants / Math.pow(10, 10)) - appliedVoltage / 2) /
							addedDopants,
						1 / 2
					) *
					Math.pow(10, 3);
			}

			
		}

		let electronCount =
			Math.pow(100, (Math.log10(Math.round(addedDopants / 5)) - 8) / 2) / 1000;

		////////////////Note from Azad: This is the code from Christina to generate boltzmann distribution of velocities

		// while (random_botz.length < electronCount - 2) {
		// 	//v
		// 	let aa = (random(1, 2000) / 100) * Math.pow(10, 6);
		// 	//p
		// 	let bb = (random(1, 400) / 100) * Math.pow(10, 6);
		// 	let y =
		// 		4 *
		// 		Math.PI *
		// 		Math.pow(1.03 * Math.pow(10, -10), 3 / 2) *
		// 		Math.pow(Math.pow(10, 4) * aa, 2) *
		// 		Math.exp(-1.3 * Math.pow(10, -21) * Math.pow(aa * Math.pow(10, 4), 2));
		// 	if (bb < y) {
		// 		random_botz.push(Math.round((aa / Math.pow(10, 6)) * 2) / 4);
		// 		//  random_botz.push(Math.round(10))
		// 	}
		// }

		///////////////////Note from Azad: This is the new code Azad added to generate boltzmann distribution of velocities
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
				boltzDistribution.push(3 * norm_vel[i].nv);
				count++;
			}
		}
		//to avoid changing the rest of the code, used the same array (random_botz) Christina generated and boltzDistribution is not used any more.
		random_botz = boltzDistribution;

		for (let i = 0; i < electronCount; i++) {
			let a = random(550 * sx, 930 * sx);
			// let b = random(30*sy,730*sy);
			let b = random((20 + 385) * sy, 760 * sy);
			fixedCharges.push(new Appear(a, b, 10, 4, i));
			//id start from 0 ,color 4
			var newCharge = new Charge(a, b, 10, "e", 0);
			newCharge.botz =
				random_botz[Math.floor(Math.random() * random_botz.length)];
			initialElectrons.push(newCharge);
			chargeID += 1;
		}

		///////hole

		//currentHoleCount = Math.round(dopingConcentration);
		h_count = Math.pow(100, (Math.log10(addedDopants / 5) - 8) / 2) / 1000;

		for (let i = 0; i < h_count; i++) {
			let a = random(170 * sx, 550 * sx);
			let b = random((20 + 385) * sy, 760 * sy);

			fixedCharges.push(new Appear(a, b, 10, 5, i));

			var Charge2 = new Charge(a, b, 10, "h", 1);
			Charge2.botz =
				random_botz[Math.floor(Math.random() * random_botz.length)];
			initialHoles.push(Charge2);
			chargeID += 1;
		}
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

let isApplyVpCalled = false;

function updateAppliedVoltage(a) {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	appliedVoltage = a;

	if (parseInt(appliedVoltage) >= 3) {
		setFactor(1000);
		appliedVoltageFactor = (1 / 1000) * 10;
	} else {
		// appliedVoltageFactor =1*10
		setFactor(1);
		appliedVoltageFactor = 1 * 20;
	}

	voltageDepletionWidth = initialDepletionWidth;
	//	bandDiagramHeight = 1.6 * Math.pow(10, -13) * addedDopants - appliedVoltage / 10;
	bandDiagramHeight = 1.6 * Math.pow(10, -13) * addedDopants;
	//let ratio = -appliedVoltage / 10 / (1.6 * Math.pow(10, -13) * addedDopants);

	//voltageDepletionWidth = initialDepletionWidth * (1 + ratio);

	// initialDepletionWidth = voltageDepletionWidth

	voltageDepletionWidth =
		5800 *
		Math.pow(
			(Math.log(addedDopants / Math.pow(10, 10)) - appliedVoltage / 2) /
				addedDopants,
			1 / 2
		) *
		Math.pow(10, 3);

		updateChargeOrigins();

	//for (var i = 0; i < 100; i++) {
	//(800)/100*i
	// 	if (
	// 		(800 / 100) * i > 550 - (400 / 8) * voltageDepletionWidth &&
	// 		(800 / 100) * i < 550
	// 	) {
	// 		baseBand[i - 19] =
	// 			-Math.pow(
	// 				(((800 / 100) * i - (550 - (400 / 8) * voltageDepletionWidth)) /
	// 					((400 / 8) * voltageDepletionWidth)) *
	// 					(((2 * bandDiagramHeight) / (voltageDepletionWidth * 100)) * 177 * 2),
	// 				1
	// 			) /
	// 			5 /
	// 			3;
	// 	} else if (i == 50) {
	// 	} else {
	// 		baseBand[i] = 0;
	// 	}
	// }
	// let istart = Math.floor(50 - voltageDepletionWidth / 8);
	// for (var i = 0; i < 51; i++) {
	// 	//Given the left side of the x axis is 8um and we want to divide the entire x axis to 100 points, each grid point is 8/50um
	// 	if (i < istart) {
	// 		baseBand[i] = 0;
	// 	} else {
	// 		baseBand[i] =
	// 			(((2 * bandDiagramHeight * 7.76) / 1000) *
	// 				voltageDepletionWidth *
	// 				(i - istart)) /
	// 			50;
	// 	}
	// }

	// for (var i = 51; i < 100; i++) {
	// 	baseBand[i] = baseBand[100 - i];
	// }

	// for (var i = 0; i < 100; i++) {
	// 	baseBand[i] = baseBand[i] / 3;
	// }

	// for (var i = 0; i < 100; i++) {
	// 	electronBand[i] = 0; // initialize to 0

	// 	if (i > 0) {
	// 		// run the inner loop only if i > 0
	// 		for (var k = 0; k < i; k++) {
	// 			electronBand[i] = electronBand[i] + baseBand[k];
	// 		}
	// 	}
	// }

	// for (var k = 0; k < 100; k++) {
	// 	electronLine[k] = [
	// 		(150 + (800 / 100) * k) * sx,
	// 		(171.25 - electronBand[k] - 100) * sy,
	// 	];
	// }

	// for (let i = 0; i < generatedElectrons.length; i++) {
	// 	let Charge = generatedElectrons[i];
	// 	//Charge.origin.x = electronLine[99][1];
	// 	Charge.origin.x = electronBand[bandLength][1];
	// }

	resetScene();
}

function updateChargeOrigins() {
	for (let i = 0; i < generatedElectrons.length; i++) {
		let Charge = generatedElectrons[i];
		let newOriginX = findClosestValue(electronBand, Charge.position.x);
		Charge.origin.x = newOriginX;
	}
}

function onRefresh() {
	updateDopingConcentration(130);
	resetScene();
}

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
