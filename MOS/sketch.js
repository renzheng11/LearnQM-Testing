/* ------------------------------------------
Author: Christina Wu, Azad Naeemi, Ren Zheng
Contacts: renzheng112@gmail.com
------------------------------------------ */

// P5 Canvas
let context; //set up canvas

// Window scaling
let scale_x = 1440; //scale for x-axis adaptive window
let scale_y = 789; //scale for y-axis adaptive window

let sx; //scale for x-axis adaptive window
let sy; //scale for y-axis adaptive window

let xSlide = 60; //

// color
const color = {
	bg: [18, 18, 18],
	blue: [102, 194, 255],
	EFColor: [218, 112, 214],
	EFColor2: [200, 146, 182],
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

/******************************
 * Section: set variables
 *******************************/

// Arrays for storing charges
let fixedCharges = []; //appear list
let initialHoles = []; //green dot list
let initialElectrons = []; //yellow dot list
let generatedElectrons = []; //yellow dot storing
let generatedHoles = []; //green dot storing
let chargeID = 0; // charge id

// Effects for generation and recombination
let generationEffects = []; // generation animation
let recombineEffects = []; // recombination aimation
let recombineEffectsPositions = []; // position of effect
let recombineDistance = 9; //distance for recombine
let recombineEffectsForElectrons = []; //circles disappear animation
let recombineEffectsForHoles = []; //circles  disappear animation
let recombineCount = 0; //disappear number count

// factors
let appliedVoltage = 0; //added voltage for p dopant
let generationRate = 1000; //generation rate
let generationRateInterval; //generation rate interval
let temp = 270; //set temperature
let recombine = 1; //recombine on or off
let dopingConcentration = 0;
dopingConcentration_new = 0;
var timeElapsed = 0; //count down for timeIt functionn

// scattering
let willScatter = false; //scatter true or false
var scatteringInterval; //scattering interval
let scatteringVelocity; //scattering velocity
let scatteringCountInput = 0; //scattering count from slider
let scatteringCount = 0; //scattering count

// graphing
let NumXAxisTicks = 3; //draw ticker

// band diagram
let bandDiagramVScale = 1; //change the verticle distribution scale of band diagram
let getRandomBotz = []; //velocity of random distribution
let boltzDistribution = []; //New random velocity distribution added by Azad
let electronBand = []; //graph yellow line
let holeBand = []; //graph green line

let electronBand_data = new Array(100).fill(0); //store yellow line data
let holeBand_data = []; //store green line data
let holeBand_data_indice = []; //store green line data

let holeBand_v1 = []; //for json data v_data_1.json store green line data
let electronBand_v1 = []; //for json data v_data_1.json store yellow line data
let holeBand_data_v1 = []; //for json data v_data_1.json store green line data
let electronBand_data_v1 = []; //for json data v_data_1.json store yellow line data

let bandLength = 134;

// electron hole
var current_Electron_c = 0; //electron count // ???
let electron_add = 0; //added electron number // ???

let switchGraph = false; //turn on or off the switch between charge density and electric field graph

// Intervals
let interval_45 = 2000; //interval for generation
var run45; // initiation for geenration
let run11; //initiation
let run_outer; //initiation

// dimensions / drawings / images
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

// boundaries

let xMin = 260;
let xMax = 820;
let yMin = 380;
let yMax = 710;

// Data from EXCEL
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

function fetchBandDiagramData() {
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
}

/*******************************************************
 * Section: preload variables or functions
 *******************************************************/
fetchBandDiagramData();
function setup() {
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");
	frameRate(10);
	context = canvas.drawingContext;

	scaleWindow();
	onRefresh();

	// generate balls based on frequency
	run45 = setInterval(function () {
		generateCharges(1);
	}, interval_45); // scene changing T
	// generate balls straight
	run11 = setInterval(function () {
		generateCharges_straight(1);
	}, 2000); // scene changing T

	scatteringInterval = setInterval(function () {
		scattering();
	}, 50); // scattring time
	setInterval(toggleRecombine, 2000);

	sceneCount = 0;

	batteryPosImg = loadImage("batteryPos.png");
	batteryNegImg = loadImage("batteryNeg.png");

	metalLabel = loadImage("metal.png");
	insulatorLabel = loadImage("insulator.png");
}

/***************************************************
 * Section: draw on canvas for different sceneCount
 ***************************************************/
function draw() {
	background(18, 18, 18);
	scaleWindow();

	checkSelect();

	if (scene(1) || scene(2)) {
		drawOutlines();
		updateChargeMovement();
		checkRecombines();
		drawGraph();
		drawBandDiagram();
	}
}

/*******************************
 * Section: functions
 *******************************/
function drawOutlines() {
	// draw background upper boxes
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
		(outlineWidth + xSlide) * sx,
		outlineHeight * sy
	);
	//two
	// rect (x, y, w, h)
	rect(
		outlineX * sx,
		chargeDensityDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		outlineHeight * sy
	);
	// three
	// rect (x, y, w, h)
	rect(
		outlineX * sx,
		capacitorDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		capacitorHeight * sy
	);
}

function checkRecombines() {
	//////////// if recombination is turned on, recombine happen, recombineDistance is the distance between each recombine (carrier lifetime)
	if (recombine == 1) {
		//disappear
		for (let i = 0; i < generatedElectrons.length; i++) {
			for (let k = 0; k < generatedHoles.length; k++) {
				if (
					abs(generatedElectrons[i].position.x - generatedHoles[k].position.x) <
						recombineDistance &&
					abs(generatedElectrons[i].position.y - generatedHoles[k].position.y) <
						recombineDistance &&
					generatedElectrons[i].id != generatedHoles[k].id &&
					generatedElectrons[i].show == 1 &&
					generatedHoles[k].show == 1 &&
					generatedElectrons[i].position.x > 190 * sx &&
					generatedElectrons[i].within == 0
				) {
					//mark
					generatedElectrons[i].stop();
					generatedHoles[k].stop();
					generatedElectrons[i].noShow();
					generatedHoles[k].noShow();
					generatedElectrons[i].deadd();
					generatedHoles[k].deadd();

					recombineEffectsPositions[recombineCount] = p5.Vector.div(
						p5.Vector.add(
							generatedHoles[k].position,
							generatedElectrons[i].position
						),
						2
					);

					//effects

					recombineEffects[recombineCount] = new Appear(
						recombineEffectsPositions[recombineCount].x,
						recombineEffectsPositions[recombineCount].y,
						10,
						1,
						recombineCount
					);
					recombineEffectsForElectrons[recombineCount] = new Appear(
						generatedElectrons[i].position.x,
						generatedElectrons[i].position.y,
						10,
						2,
						recombineCount
					);
					recombineEffectsForHoles[recombineCount] = new Appear(
						generatedHoles[k].position.x,
						generatedHoles[k].position.y,
						10,
						3,
						recombineCount
					);

					recombineCount++;

					let b = generatedElectrons[i].position.y;

					generatedElectrons.splice(i, 1);
					generatedHoles.splice(k, 1);

					break;
				}
			}
		}

		//disappear white & black new h
		for (let i = 0; i < generatedElectrons.length; i++) {
			for (let k = 0; k < initialHoles.length; k++) {
				if (
					abs(generatedElectrons[i].position.x - initialHoles[k].position.x) <
						recombineDistance &&
					abs(generatedElectrons[i].position.y - initialHoles[k].position.y) <
						recombineDistance &&
					generatedElectrons[i].id != initialHoles[k].id &&
					generatedElectrons[i].show == 1 &&
					initialHoles[k].show == 1 &&
					generatedElectrons[i].within == 0
				) {
					//huhu

					//mark
					generatedElectrons[i].stop();
					initialHoles[k].stop();
					generatedElectrons[i].noShow();
					initialHoles[k].noShow();
					generatedElectrons[i].deadd();
					initialHoles[k].deadd();

					recombineEffectsPositions[recombineCount] = p5.Vector.div(
						p5.Vector.add(
							initialHoles[k].position,
							generatedElectrons[i].position
						),
						2
					);

					//effects
					recombineEffects[recombineCount] = new Appear(
						recombineEffectsPositions[recombineCount].x,
						recombineEffectsPositions[recombineCount].y,
						10,
						1,
						recombineCount
					);
					recombineEffectsForElectrons[recombineCount] = new Appear(
						generatedElectrons[i].position.x,
						generatedElectrons[i].position.y,
						10,
						2,
						recombineCount
					);
					recombineEffectsForHoles[recombineCount] = new Appear(
						initialHoles[k].position.x,
						initialHoles[k].position.y,
						10,
						3,
						recombineCount
					);

					recombineCount++;

					generatedElectrons.splice(i, 1);
					initialHoles.splice(k, 1);
					break;
				}
			}
		}

		//disappear new white e & black
		for (let i = 0; i < initialElectrons.length; i++) {
			for (let k = 0; k < generatedHoles.length; k++) {
				if (
					abs(initialElectrons[i].position.x - generatedHoles[k].position.x) <
						recombineDistance &&
					abs(initialElectrons[i].position.y - generatedHoles[k].position.y) <
						recombineDistance &&
					initialElectrons[i].id != generatedHoles[k].id &&
					initialElectrons[i].show == 1 &&
					generatedHoles[k].show == 1 &&
					initialElectrons[i].within == 0
				) {
					//mark
					initialElectrons[i].stop();
					generatedHoles[k].stop();
					initialElectrons[i].noShow();
					generatedHoles[k].noShow();

					recombineEffectsPositions[recombineCount] = p5.Vector.div(
						p5.Vector.add(
							generatedHoles[k].position,
							initialElectrons[i].position
						),
						2
					);

					//effects

					recombineEffects[recombineCount] = new Appear(
						recombineEffectsPositions[recombineCount].x,
						recombineEffectsPositions[recombineCount].y,
						10,
						1,
						recombineCount
					);
					recombineEffectsForElectrons[recombineCount] = new Appear(
						initialElectrons[i].position.x,
						initialElectrons[i].position.y,
						10,
						2,
						recombineCount
					);
					recombineEffectsForHoles[recombineCount] = new Appear(
						generatedHoles[k].position.x,
						generatedHoles[k].position.y,
						10,
						3,
						recombineCount
					);

					recombineCount++;

					initialElectrons.splice(i, 1);
					generatedHoles.splice(k, 1);

					break;
				}
			}
		}

		//check distance between generated electrons and holes for recombine
		for (let i = 0; i < initialElectrons.length; i++) {
			for (let k = 0; k < initialHoles.length; k++) {
				if (
					abs(initialElectrons[i].position.x - initialHoles[k].position.x) <
						recombineDistance &&
					abs(initialElectrons[i].position.y - initialHoles[k].position.y) <
						recombineDistance &&
					initialElectrons[i].id != initialHoles[k].id &&
					initialElectrons[i].show == 1 &&
					initialHoles[k].show == 1 &&
					initialElectrons[i].within == 0
				) {
					initialElectrons[i].stop();
					initialHoles[k].stop();
					initialElectrons[i].noShow();
					initialHoles[k].noShow();
					recombineEffectsPositions[recombineCount] = p5.Vector.div(
						p5.Vector.add(
							initialHoles[k].position,
							initialElectrons[i].position
						),
						2
					);

					//effects

					recombineEffects[recombineCount] = new Appear(
						recombineEffectsPositions[recombineCount].x,
						recombineEffectsPositions[recombineCount].y,
						10,
						1,
						recombineCount
					);
					recombineEffectsForElectrons[recombineCount] = new Appear(
						initialElectrons[i].position.x,
						initialElectrons[i].position.y,
						10,
						2,
						recombineCount
					);
					recombineEffectsForHoles[recombineCount] = new Appear(
						initialHoles[k].position.x,
						initialHoles[k].position.y,
						10,
						3,
						recombineCount
					);

					recombineCount++;

					generatedElectrons.splice(i, 1);
					generatedHoles.splice(k, 1);

					break;
				}
			}
		}
	}
}

// switch graph
function mouseClicked() {
	let xCondition = 270 * sx - mouseX; // left border of right button
	let yCondition = abs(205 * sy - mouseY); // top border of right button
	if (xCondition < 100 * sx && xCondition < 0 && yCondition < 16 * sy) {
		console.log("EF");
		switchGraph = true; // show charge density graph
	} else if (abs(164 * sx - mouseX) < 100 * sx && yCondition < 16 * sy) {
		console.log("charge density");
		switchGraph = false; // show electric field graph
	}
}

function drawGraph() {
	////////////////////////////////////////////DRAW THE horizon on the second graph
	noFill();
	//coordinates
	//up
	stroke(102, 194, 255, 180);
	////horizoN
	// ////////////new
	//horizon down 1
	line(
		(100 + 70 + -30 + 940 - 70 - 70 - 760 + 30) * sx,
		(385 / 2 + 96.25) * sy,
		890 * sx,
		(385 / 2 + 96.25) * sy
	);
	//vertical down 1
	line(250 * sx, (385 / 2 + 30) * sy, 250 * sx, (385 / 2 + 770 / 4 - 30) * sy);

	//////////////////////////////////////////////////// tickers draw on x axis
	for (let i = 0; i < NumXAxisTicks; i++) {
		let x = 550 * sx + ((400 / 8) * sx * i * 2 + (400 / 8) * 2 * sx);
		let y = (385 / 2 + 96.25) * sy;
		line(x, y, x, y - 5 * sy); // Draw the line
	}

	for (let i = 0; i < NumXAxisTicks; i++) {
		let x = 550 * sx - (400 / 8) * sx * i * 2;
		let y = (385 / 2 + 96.25) * sy;
		line(x, y, x, y - 5 * sy); // Draw the line
	}
	//////////////////////////////////////////////////// tickers draw on y axis

	if (switchGraph == false) {
		for (let i = 0; i < 4; i++) {
			let x = 250 * sx;
			let y = (385 / 2 + 96.25) * sy + 12.5 * sy + 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		for (let i = 0; i < 4; i++) {
			let x = 250 * sx;
			let y = (385 / 2 + 96.25) * sy - 12.5 * sy - 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		noStroke();
		fill(102, 194, 255, 180);
		textSize(10 * sx);
	} else {
		for (let i = 0; i < 4; i++) {
			let x = 250 * sx;
			let y =
				(385 / 2 + 96.25) * sy +
				(40 / 1530) * 500 * sy +
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		for (let i = 0; i < 4; i++) {
			let x = 250 * sx;
			let y =
				(385 / 2 + 96.25) * sy -
				(40 / 1530) * 500 * sy -
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
		}

		noStroke();
		fill(102, 194, 255, 180);
		textSize(10 * sx);
	}

	//////////////////////////////////////////////////// x axis labeling

	noStroke();
	fill(102, 194, 255, 180);
	textSize(10 * sx);
	text("1 \u00B5m", 340 * sx, 313 * sy);

	///////////new box graphing

	noStroke();
	fill(254, 246, 182, 100);

	//////////////////////////////////////////////////// graph switch on and off change looks
	if (switchGraph) {
		fill("white");
	} else {
		fill(102, 194, 255, 100);
	}

	//choosing the E-field or charge density box around text
	if (switchGraph) {
		// electric field is showing
		stroke(...color.EFColor);
		fill(...color.EFColor, 80);
		rect(272 * sx, 186 * sy, 94 * sx, 24 * sy, 5 * sy, 5 * sy);

		// charge density
		stroke(...color.blue);
		noFill();
		rect();

		rect(158 * sx, 186 * sy, 108 * sx, 24 * sy, 5 * sy, 5 * sy);
	} else {
		// charge density is showing
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(158 * sx, 186 * sy, 108 * sx, 24 * sy, 5 * sy, 5 * sy);

		// electric field
		stroke(...color.blue);
		noFill();
		rect();

		rect(272 * sx, 186 * sy, 94 * sx, 24 * sy, 5 * sy, 5 * sy);
	}

	// text

	stroke(125, 241, 148, 100);
	noStroke();
	strokeWeight(1);

	fill(102, 194, 255, 180);

	textSize(14 * sx);

	text("Band Diagram", 160 * sx, 30 * sy);

	text("Charge Density", 164 * sx, 203 * sy);
	text("Electric Field", 278 * sx, 203 * sy);

	noStroke();

	stroke(125, 241, 148, 100);
	noFill();

	textSize(14);

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
		(outlineX + outlineWidth - metalWidth + xSlide) * sx,
		metalY * sy,
		metalWidth * sx,
		metalHeight * sy
	);

	let batteryX = outlineX + 360;
	let batteryY = capacitorDiagramY + 376;

	// battery image
	image(
		batteryPosImg,
		(batteryX + xSlide / 2) * sx,
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
		(outlineX + outlineWidth - 32 + xSlide) * sx,
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
		(batteryX + xSlide / 2) * sx,
		(batteryY + batteryPosImg.height / 2 - 5) * sy
	);

	// line from battery to right metal, vertical
	line(
		(outlineX + outlineWidth - 26 + xSlide) * sx,
		(capacitorDiagramY + capacitorHeight) * sy,
		(outlineX + outlineWidth - 26 + xSlide) * sx,
		(batteryY + batteryPosImg.height / 2 - 5) * sy // -5 because battery not aligned
	);

	// line from battery to right metal, horizontal
	line(
		(batteryX + batteryPosImg.width - 34 + xSlide / 2) * sx,
		(batteryY + batteryPosImg.height / 2 - 5) * sy,
		(outlineX + outlineWidth - 26 + xSlide) * sx,
		(batteryY + batteryPosImg.height / 2 - 5) * sy
	);

	context.stroke();

	drawChargeDensityData();
	drawElectricFieldData();

	function drawChargeDensityData() {
		//////////////////////////////////////////////////// draw charge density when switch is False
		if (switchGraph == false) {
			noStroke();
			fill(254, 246, 182, 100);
			if (electronBand_data_v1.length > 0) {
				//if (hole_new == 50000000000000 && electronBand_data_v1.length>0)
				//test case for v_data_1.json

				minorityDensity =
					Math.pow(10, 20) /
					Math.pow(dopingConcentration_new * Math.pow(10, 3), 2);
				for (let i = 0; i < bandLength; i++) {
					let y1 =
						-1.6 *
						Math.pow(10, -2) *
						dopingConcentration_new *
						Math.pow(10, 3) *
						(-1 +
							Math.exp(-current_array[i] / 0.026) -
							minorityDensity * Math.exp(current_array[i] / 0.026));
					//let y1 = 1.6*Math.pow(10,-13)*dopingConcentration_new*Math.pow(10,3)*(-1)
					charge_density_temp_data[i] = { x: electronBand_data_v1[i].x, y: y1 };
				}

				if (appliedVoltage > 0 || appliedVoltage < 0) {
					///charge density graph
					beginShape();

					vertex(250 * sx, (385 / 2 + 96.25) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < charge_density_temp_data.length; i++) {
						let x = charge_density_temp_data[i].x;
						let y =
							charge_density_temp_data[i].y / Math.pow(10, 14) +
							(385 / 2 + 96.25) * sy;
						//let y = 20 + (10+385/2+96.25) * sy;
						vertex(x, y);
					}

					endShape();
				} else if (appliedVoltage == 0) {
				}
			}
		}
	}
	function drawElectricFieldData() {
		//////////////////////////////////////////////////// draw E-field graph on second graph when switch is On, and draw charge density graph when not clicked switch
		if (switchGraph == true) {
			noStroke();

			fill(218, 112, 214, 100);
			if (electronBand_data_v1.length > 0) {
				if (appliedVoltage > 0 || appliedVoltage < 0) {
					///charge density graph
					beginShape();

					vertex(250 * sx, (385 / 2 + 96.25) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < E_field_temp_data.length; i++) {
						let x = E_field_temp_data[i].x;
						let y =
							(E_field_temp_data[i].y / Math.pow(10, 4)) * 2 +
							(385 / 2 + 96.25) * sy;
						// console.log("x value=",E_field_temp_data[i].x);
						// console.log("E-fld=",E_field_temp_data[i].y);

						vertex(x, y);
					}
					vertex(
						E_field_temp_data[bandLength - 2].x,
						E_field_temp_data[bandLength - 2].y / Math.pow(10, 5) +
							(385 / 2 + 96.25) * sy
					);

					endShape();
				} else if (appliedVoltage == 0) {
				}
			}
		}
	}
	function drawRedZone() {
		/////////////////////////////////draw red dashed line ox

		stroke(255, 58, 23, 210);
		context.beginPath();
		context.setLineDash([10, 10]);
		context.rect(
			150 * sx,
			(10 + 385) * sy,
			(400 / 8) * 1 * 2 * sx,
			(770 / 2) * sy
		);
		context.closePath();
		context.stroke();
		context.setLineDash([]);
	}
}

function drawBandDiagram() {
	///////////////////////////////////////////////////////////////////draw new band diagram using json data

	stroke(254, 246, 182);
	noFill();

	if (hole_new == 99763115748444.14) {
		//10^17 case

		if (appliedVoltage / 20 == -2) {
			current_array = numberArray1_neg_2_0;
		} else if (appliedVoltage / 20 == -1.6) {
			current_array = numberArray1_neg_1_6;
		} else if (appliedVoltage / 20 == -1.2) {
			current_array = numberArray1_neg_1_2;
		} else if (appliedVoltage / 20 == -0.8) {
			current_array = numberArray1_neg_0_8;
		} else if (appliedVoltage / 20 == -0.4) {
			current_array = numberArray1_neg_0_4;
		} else if (appliedVoltage / 20 == 0) {
			current_array = numberArray1_0;
		} else if (appliedVoltage / 20 == 0.4) {
			current_array = numberArray1_pos_0_4;
		} else if (appliedVoltage / 20 == 0.8) {
			current_array = numberArray1_pos_0_8;
		} else if (appliedVoltage / 20 == 1.2) {
			current_array = numberArray1_pos_1_2;
		} else if (appliedVoltage / 20 == 1.6) {
			current_array = numberArray1_pos_1_6;
		} else if (appliedVoltage / 20 == 2) {
			current_array = numberArray1_pos_2_0;
		}
	} else if (hole_new == 50000000000000) {
		if (appliedVoltage / 20 == -2) {
			current_array = numberArray2_neg_2_0;
		} else if (appliedVoltage / 20 == -1.6) {
			current_array = numberArray2_neg_1_6;
		} else if (appliedVoltage / 20 == -1.2) {
			current_array = numberArray2_neg_1_2;
		} else if (appliedVoltage / 20 == -0.8) {
			current_array = numberArray2_neg_0_8;
		} else if (appliedVoltage / 20 == -0.4) {
			current_array = numberArray2_neg_0_4;
		} else if (appliedVoltage / 20 == 0) {
			current_array = numberArray2_0;
		} else if (appliedVoltage / 20 == 0.4) {
			current_array = numberArray2_pos_0_4;
		} else if (appliedVoltage / 20 == 0.8) {
			current_array = numberArray2_pos_0_8;
		} else if (appliedVoltage / 20 == 1.2) {
			current_array = numberArray2_pos_1_2;
		} else if (appliedVoltage / 20 == 1.6) {
			current_array = numberArray2_pos_1_6;
		} else if (appliedVoltage / 20 == 2) {
			current_array = numberArray2_pos_2_0;
		}
	}

	if (electronBand_data_v1.length > 0) {
		//test case for v_data_1.json

		for (let i = 0; i < bandLength - 1; i++) {
			let y1 =
				((current_array[i + 1] - current_array[i]) /
					(x_values_1[i + 1] - x_values_1[i])) *
				Math.pow(10, 7);
			E_field_temp_data[i] = { x: electronBand_data_v1[i].x, y: y1 };
		}
	}

	//draw yellow curve
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		//yellow curve
		let x1 = 17;
		let x2 = 349;
		let y1 = 0;
		let y2 = 679;
		let a = (y2 - y1) / (x2 - x1);
		let b = y1 - a * x1;
		let y = a * x_values_1[k] + b;
		curveVertex((250 + y) * sx, (171.25 + current_array[k] * 40 - 100) * sy);
		electronBand_data_v1[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * 40 - 100) * sy,
		};
		electronBand_data[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * 40 - 100) * sy,
		};
		electronBand[k] = [
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
		holeBand_data_v1[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * 40 - 30 - 30) * sy,
		};
		holeBand_data[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * 40 - 30 - 30) * sy,
		};

		holeBand[k] = [
			(250 + y) * sx,
			(171.25 + current_array[k] * 40 - 30 - 30) * sy,
		];
	}
	endShape();
	noStroke();
}
//reset button
function reset_scene1() {
	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];
	fixedCharges = [];

	if (scene(1) || scene(2)) {
		if (scene(1)) {
			updateDopingConcentration(document.getElementById("slider_61").value);
		} else if (scene(2)) {
			updateDopingConcentration(document.getElementById("slider_611").value);
		}
	}
}

//set carrier lifetime slider
function setDistance(te) {
	recombineDistance = te;
}

//
function setConcentration(te) {
	concentration = te / 3;

	generatedElectrons = [];
	generatedHoles = [];
}

//turn on or off recombine
function switch_recombine() {
	if (recombine == 1) {
		//off
		recombine = 0;
		switch_re.checked = false;
	} else {
		recombine = 1;
		switch_re.checked = true;
	}
}

//set electron velocity slider
function setVelocity(v) {
	scatteringVelocity = v;
}

//set scattering time slider
function setScattering(c) {
	scatteringCountInput = c;
	scatteringCount = parseInt(c) + 2;
}

//set factor E (scale the final electric field by a factor)
function setFactor(c) {
	let appliedVoltageFactor = (1 / c) * 10;
	let ll = appliedVoltageFactor.toFixed(2);
}

//set count down of some function
function timeIt() {
	if (timeElapsed > 0) {
		timeElapsed--;
	}
}

//actual scattering happening
function scattering() {
	//timebetween scatter
	if (scatteringCount > 2) {
		//time when straight line no scatter

		willScatter = false;
	} else if (scatteringCount <= 2) {
		//time to scatter 2s
		willScatter = true;
	}

	scatteringCount -= 1;

	if (scatteringCount == 0) {
		for (let i = 0; i < generatedElectrons.length; i++) {
			if (generatedElectrons[i].push == 0) {
				generatedElectrons[i].botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
				let xx = findClosestValue(
					electronBand,
					generatedElectrons[i].position.x
				);
				generatedElectrons[i].origin.x = xx;
				generatedElectrons[i].movingVelocity = generatedElectrons[i].botz;
				generatedElectrons[i].direction = createVector(
					random(-1, 1),
					random(-1, 1)
				);
				generatedElectrons[i].velocity = p5.Vector.mult(
					generatedElectrons[i].direction,
					generatedElectrons[i].movingVelocity
				);
			}
		}

		for (let i = 0; i < generatedHoles.length; i++) {
			if (generatedHoles[i].push == 0) {
				generatedHoles[i].botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
				let xx = findClosestValue(holeBand, generatedHoles[i].position.x);
				generatedHoles[i].origin.y = xx;

				generatedHoles[i].movingVelocity = generatedHoles[i].botz;
				generatedHoles[i].direction = createVector(
					random(-1, 1),
					random(-1, 1)
				);
				generatedHoles[i].velocity = p5.Vector.mult(
					generatedHoles[i].direction,
					generatedHoles[i].movingVelocity
				);
			}
		}

		for (let i = 0; i < initialHoles.length; i++) {
			if (initialHoles[i].push == 0) {
				initialHoles[i].botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
				let xx = findClosestValue(holeBand, initialHoles[i].position.x);
				initialHoles[i].origin.y = xx;

				initialHoles[i].movingVelocity = initialHoles[i].botz;
				initialHoles[i].direction = createVector(random(-1, 1), random(-1, 1));
				initialHoles[i].velocity = p5.Vector.mult(
					initialHoles[i].direction,
					initialHoles[i].movingVelocity
				);
			}
		}

		for (let i = 0; i < initialElectrons.length; i++) {
			if (initialElectrons[i].push == 0) {
				initialElectrons[i].botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
				let xx = findClosestValue(holeBand, initialElectrons[i].position.x);
				initialElectrons[i].origin.y = xx;

				initialElectrons[i].movingVelocity = initialElectrons[i].botz;
				initialElectrons[i].direction = createVector(
					random(-1, 1),
					random(-1, 1)
				);
				initialElectrons[i].velocity = p5.Vector.mult(
					initialElectrons[i].direction,
					initialElectrons[i].movingVelocity
				);
			}
		}

		scatteringCount = parseInt(scatteringCountInput) + 2;
	}
}

//generating electron hole pairs based on frequency
function generateCharges(num) {
	clearInterval(run45);
	interval_45 = 4000 / generationRateInterval;

	run45 = setInterval(function () {
		generateCharges(1);
	}, 500);

	if (scene(2) || scene(1)) {
		if (timeElapsed > 0) {
			generatedElectrons = [];
			generatedHoles = [];
		} else if (timeElapsed == 0) {
			// at beggining of scene
			for (let i = 0; i < num; i++) {
				let buffer = 14; // make sure charges don't get stuck bouncing on edge
				let xPosition = random((xMin + buffer) * sx, (xMax - buffer) * sx);
				let yPosition = random((yMin + buffer) * sy, (yMax - buffer) * sy);

				generationEffects.push(new Appear(xPosition, yPosition, 10, 0));

				let closestValueToElectronBand = findClosestValue(
					electronBand,
					xPosition
				);

				let newCharge = new Charge(xPosition, yPosition, 10, chargeID, 0);
				newCharge.origin.x = closestValueToElectronBand;
				newCharge.top = 1;
				////botz is the velocity here, and it comes from a randomly generated number list
				newCharge.botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
				generatedElectrons.push(newCharge);

				let closestValueToHoleBand = findClosestValue(holeBand, xPosition);

				let color = 0;
				if (scene(2)) {
					color = 1;
				}
				let newHole = new Charge(xPosition, yPosition, 10, chargeID, color);

				newHole.origin.y = closestValueToHoleBand;
				newHole.top = 1;
				newHole.botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];

				if (scene(1)) {
					generatedHoles.push(newHole);
				} else if (scene(2)) {
					generatedElectrons.push(newHole); // ???
				}

				chargeID += 1;
			}
		}
	}
}

//straight moving balls generating for higher velocity
function generateCharges_straight(num) {}

//Reads doping concentration
function updateDopingConcentration(a) {
	//// Azad: Doping concentration * 0.001
	hole_new = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	//// Azad: Doping concentration * 0.001/5
	dopingConcentration = Math.pow(10, a / 10);

	// same as above
	electron_add = Math.pow(10, a / 10);

	//// Azad: Doping concentration * 0.001/5
	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	/// this is later is used for calculating charge density
	dopingConcentration_new = mm;

	timeElapsed = 0;

	getRandomBotz = [];

	////
	generatedElectrons = [];
	generatedHoles = [];
	initialElectrons = [];
	initialHoles = [];
	fixedCharges = [];

	//add ---- hhhh left
	if (scene(1) || scene(2)) {
		current_Electron_c = Math.round(electron_add);
		e_count = Math.pow(100, (Math.log10(current_Electron_c) - 8) / 2) / 1000;

		///////////////////////calculating the random generated list from boltzmann distribution
		///////////////////////generating random number on y and x axis, and if it falls within the graph area, then add it into the list
		while (getRandomBotz.length < e_count - 2) {
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
				getRandomBotz.push(Math.round((aa / Math.pow(10, 6)) * 2 * 2) / 4);
			}
		}

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
			{ nv: 4, quantity: 2 },
			{ nv: 5, quantity: 1 },
			{ nv: 6, quantity: 1 },
		];

		for (let i = 0; i < norm_vel.length; i++) {
			let count = 0;
			while (count < norm_vel[i].quantity) {
				boltzDistribution.push(6 * norm_vel[i].nv);
				count++;
			}
		}

		getRandomBotz = boltzDistribution;

		////////add holes pairs/////////////////////////////////////////////////////////////////////////

		///////hole

		let numFixedCharges =
			Math.pow(100, (Math.log10(Math.round(dopingConcentration)) - 8) / 2) /
			1000;

		////////add holes pairs/////////////////////////////////////////////////////////////////////////

		for (let i = 0; i < numFixedCharges; i++) {
			let a = random(xMin * sx, xMax * sx);
			let b = random(yMin * sy, yMax * sy);

			if (scene(1)) {
				fixedCharges.push(new Appear(a, b, 10, 5, i));
				var Charge2 = new Charge(a, b, 10, "h", 1);
				Charge2.botz = getRandomBotz[i];
				initialHoles.push(Charge2);
				chargeID += 1;
			} else if (scene(2)) {
				fixedCharges.push(new Appear(a, b, 10, 4, i));
				var Charge2 = new Charge(a, b, 10, "e", 0);
				Charge2.botz = getRandomBotz[i];
				initialElectrons.push(Charge2);
				chargeID += 1;
			}
		}

		////////add holes pairs/////////////////////////////////////////////////////////////////////////
	}
}

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

//change applied voltage slider
function apply_V_p(a) {
	appliedVoltage = a;
	reset_scene1();
}

//refreshing page reset
function onRefresh() {
	updateDopingConcentration(130);
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
function updateChargeMovement() {
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
			initialHoles[i].random_walk();
		}
	}

	for (let i = 0; i < initialElectrons.length; i++) {
		initialElectrons[i].display();
		initialElectrons[i].appear_update();
		initialElectrons[i].update();

		if (initialElectrons[i].appear > 255) {
			initialElectrons[i].random_walk();
		}
	}

	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].alpha < 1) {
			generationEffects.splice(i, 1);
		}
	}

	//generation visual effect
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].display();
		generationEffects[i].update();
	}

	//negative signs appear
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		fixedCharges[i].update();
	}

	// (recombination visual effect
	for (let i = 0; i < recombineEffects.length; i++) {
		if (typeof recombineEffects[i] != "undefined") {
			recombineEffects[i].display();
			recombineEffects[i].update();
		}
	}

	// (recombination visual effect, electron fading )
	for (let i = 0; i < recombineEffectsForElectrons.length; i++) {
		if (typeof recombineEffectsForElectrons[i] != "undefined") {
			recombineEffectsForElectrons[i].display();
			recombineEffectsForElectrons[i].update_circle();
			recombineEffectsForElectrons[i].update_location();
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < recombineEffectsForHoles.length; i++) {
		if (typeof recombineEffectsForHoles[i] != "undefined") {
			recombineEffectsForHoles[i].display();
			recombineEffectsForHoles[i].update_circle();
			recombineEffectsForHoles[i].update_location();
		}
	}

	for (let i = 0; i < recombineEffectsForHoles.length; i++) {
		if (typeof recombineEffectsForHoles[i] != "undefined") {
			for (let k = 0; k < recombineEffectsForElectrons.length; k++) {
				if (typeof recombineEffectsForElectrons[k] != "undefined") {
					if (
						recombineEffectsForHoles[i].id == recombineEffectsForElectrons[k].id
					) {
						recombineEffectsForElectrons[k].seek(
							p5.Vector.div(
								p5.Vector.add(
									recombineEffectsForElectrons[k].position,
									recombineEffectsForHoles[i].position
								),
								2
							)
						);
						recombineEffectsForHoles[i].seek(
							p5.Vector.div(
								p5.Vector.add(
									recombineEffectsForElectrons[k].position,
									recombineEffectsForHoles[i].position
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

function setBandDiagramVScale(v) {
	bandDiagramVScale = v;
}

/******************************
 * Section: Helper tools
 *******************************/

function qs(selector) {
	return document.querySelector(selector);
}

function scene(num) {
	return sceneCount == num;
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

function checkSelect() {
	if (mouseX > 0) {
		select("body").addClass("noselect");
	} else {
		if (select("body").hasClass("noselect")) {
			select("body").removeClass("noselect");
		}
	}
}
