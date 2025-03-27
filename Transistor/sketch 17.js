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
	grey: [152, 152, 152],
	black: [0],
	black2: [30],
	red: [255],
	red2: [255, 40, 0],
	positive: [213, 94, 0],
	negative: [86, 180, 233],
	efCurve: [204, 121, 167],
	eiCurve: [240, 228, 66],
};
/******************************
 * Section: set variables
 *******************************/

// Arrays for storing charges
let fixedCharges = [];
let initHoles = []; // initial holes
let initElectrons = []; // initial electrons
let genElectrons = []; // generated electrons
let genHoles = []; // generated holes
let chargeID = 0; // charge id

// Effects for generation and recombination
let genEffects = []; // generation animation
let recomEffects = []; // recombination aimation
let recomEffectsPositions = []; // position of effect
let recomDistance = 9; //distance for recombine
let recomEffectsForElectrons = []; //circles disappear animation
let recomEffectsForHoles = []; //circles  disappear animation
let recomCount = 0; //disappear number count

// factors
let appliedVoltage = 0; //added voltage for p dopant
let generationRate = 1000; //generation rate
let generationRateInterval; //generation rate interval
let recombineOn = true; //recombine on or off
let dopingConcen = 0; // doping concentration
let dopingConcen_new = 0; // doping concentration
var timeElapsed = 0; //count down for timeIt functionn
let newAcceleration = 0;
let AccelerationFactor = 1; // used to exagerate E-field for acceleration based on the voltage and doping

// scattering
let willScatter = false; //scatter true or false
var scatteringInterval; //scattering interval
let scatteringVelocity; //scattering velocity
let scatteringCountInput = 0; //scattering count from slider
let scatteringCount = 0; //scattering count

// graphing

let graphTextSize = 12;

// band diagram
let bandScale = 1; //change the verticle distribution scale of band diagram
let getRandomBotz = []; //velocity of random distribution
let boltzDistribution = []; //New random velocity distribution
let electronBand = []; //graph negative line
let holeBand = []; //graph green line

let electronBand_data = new Array(100).fill(0); //store negative line data
let holeBand_data = []; //store green line data
let holeBand_data_indice = []; //store green line data

let holeBand_v1 = []; //for json data v_data_1.json store green line data
let electronBand_v1 = []; //for json data v_data_1.json store negative line data
let holeBand_data_v1 = []; //for json data v_data_1.json store green line data
let electronBand_data_v1 = []; //for json data v_data_1.json store negative line data

let bandLength = 134;
let FermiVoltage = 0; //used to plot Ef

// electron hole
var current_Electron_c = 0; //electron count // ???
let electron_add = 0; //added electron number // ???

let switchGraph = false; //turn on or off the switch between charge density and electric field graph

// Intervals
let genInterval = 2000; //interval for generation
var run45; // initiation for geenration
let run11; //initiation
let run_outer; //initiation

// dimensions / drawings / images
let outlineWidth = 750;
let outlineHeight = 180;
let outlineX = 150;
let outlineYs = [10, 180, 360];
let bandDiagramY = 0;
let chargeDensityDiagramY = bandDiagramY + outlineHeight;
let capacitorDiagramY = bandDiagramY + outlineHeight * 2;
let capacitorHeight = outlineHeight * 2;

let metalY = capacitorDiagramY;
let metalX = outlineX;
let metalWidth = 50;
let metalHeight = outlineHeight * 2;

let tightThreshold = 10; // make sure charges don't bounce beyond line

let holeRegion = {
	x: outlineX + metalWidth * 3,
	y: outlineYs[2],
	w: outlineWidth - metalWidth * 3,
	h: outlineHeight * 2,
};

let batteryPosImg;
let batteryNegImg;

let metalLabel;
let insulatorLabel;

// boundaries

let xMin = 260;
let xMax = 900;
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
let xPositionData;

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
let current_array_temp = []; //used to calculaate current_array in Scene 2
let charge_density_temp_data = []; //charge density temp data store
let E_field_temp_data = []; //electric field temp data
let x_counter; //used to read electric field at a given point in Accelerate function
let tesx; //used to read electric field at a given point in Accelerate function

let timeSinceLastInteraction = 0;

fetchBandDiagramData(); // DO NOT REMOVE this call, included in multiple places to prevent load failures

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
			xPositionData = jsonData[21]["21"].map(Number); //

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
			// clg(numberArray1_pos_2_0);
		})
		.catch((error) => console.error("Error loading the JSON data:", error));
}

/*******************************************************
 * Section: preload variables or functions
 *******************************************************/
function setup() {
	fetchBandDiagramData();
	let canvas = createCanvas((2 * windowWidth) / 3, windowHeight);
	canvas.parent("visualization");
	frameRate(10);
	context = canvas.drawingContext;

	scaleWindow();

	// generate charges
	run45 = setInterval(function () {
		generateCharges(1);
	}, genInterval);

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
	timeSinceLastInteraction += 0.1; // approx += 1 every second (depends on framerate)
	// checkTimeout();

	background(18, 18, 18);

	scaleWindow();

	checkSelect();

	if (scene(1) || scene(2)) {
		drawGraph();
		updateCharges();
		checkRecombines();
		drawBandDiagram();
	}
}

// check and reset scene if it has been running with no user interaction for amount of time
function checkTimeout() {
	if (timeSinceLastInteraction > 240) {
		// (approx 4 minutes)
		resetScene();
	}
}

/*******************************
 * Section: functions
 *******************************/

function doRecombine(chargeArray1, chargeArray2) {
	for (let i = 0; i < chargeArray1.length; i++) {
		for (let k = 0; k < chargeArray2.length; k++) {
			if (
				abs(chargeArray1[i].position.x - chargeArray2[k].position.x) <
					recomDistance &&
				abs(chargeArray1[i].position.y - chargeArray2[k].position.y) <
					recomDistance &&
				chargeArray1[i].id != chargeArray2[k].id &&
				chargeArray1[i].showing &&
				chargeArray2[k].showing
			) {
				chargeArray1[i].stop();
				chargeArray2[k].stop();
				chargeArray1[i].hide();
				chargeArray2[k].hide();
				chargeArray1[i].deactivate();
				chargeArray2[k].deactivate();

				recomEffectsPositions[recomCount] = p5.Vector.div(
					p5.Vector.add(chargeArray2[k].position, chargeArray1[i].position),
					2
				);

				//effects

				recomEffects[recomCount] = new Effect(
					recomEffectsPositions[recomCount].x,
					recomEffectsPositions[recomCount].y,
					10,
					"h",
					recomCount
				);
				recomEffectsForElectrons[recomCount] = new Effect(
					chargeArray1[i].position.x,
					chargeArray1[i].position.y,
					10,
					"gen",
					recomCount
				);
				recomEffectsForHoles[recomCount] = new Effect(
					chargeArray2[k].position.x,
					chargeArray2[k].position.y,
					10,
					"recom",
					recomCount
				);

				recomCount++;

				let b = chargeArray1[i].position.y;

				chargeArray1.splice(i, 1);
				chargeArray2.splice(k, 1);

				break;
			}
		}
	}
}

function checkRecombines() {
	//////////// if recombination is turned on, recombine happen, recomDistance is the distance between each recombine (carrier lifetime)
	if (recombineOn) {
		//disappear
		doRecombine(genElectrons, genHoles);
		doRecombine(genElectrons, initHoles);
		doRecombine(initElectrons, genHoles);
		doRecombine(initElectrons, initHoles);
	}
}

// switch graph
function mouseClicked() {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	let xCondition = 270 * sx - mouseX; // left border of right button
	let yCondition = abs(205 * sy - mouseY); // top border of right button
	if (xCondition < 100 * sx && xCondition < 0 && yCondition < 16 * sy) {
		switchGraph = true; // show charge density graph
	} else if (abs(164 * sx - mouseX) < 100 * sx && yCondition < 16 * sy) {
		switchGraph = false; // show electric field graph
	}
}

function drawGraph() {
	// draw background boxes for each section
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
	rect(
		outlineX * sx,
		chargeDensityDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		outlineHeight * sy
	);
	// three
	rect(
		outlineX * sx,
		capacitorDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		capacitorHeight * sy
	);

	noFill();
	//coordinates
	stroke(...color.blue, 180);
	// x axis line
	line(210 * sx, 290 * sy, 890 * sx, 290 * sy);
	// y axis line
	let xStart = 250;
	line(xStart * sx, 224 * sy, 250 * sx, 355 * sy);

	let numXTicks = 7;

	// x axis ticks
	for (let i = 0; i < numXTicks; i++) {
		stroke(...color.blue, 180);
		let x = (xStart + 100 * i) * sx;
		let y = 290 * sy;
		line(x, y, x, y - 5 * sy); // Draw the line

		// tick label
		if (i < numXTicks - 1) {
			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize * sx);

			text(`${50 * (i + 1)} nm`, (80 + (xStart + 101 * i)) * sx, 308 * sy);
		}
	}
	stroke(...color.blue, 180);
	//////////////////////////////////////////////////// tickers draw on y axis

	if (switchGraph == false) {
		// negative charge density y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.blue, 180);
			let x = 250 * sx;
			let y = (385 / 2 + 98) * sy + 12.5 * sy + 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line

			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize * sx);
			// only show units at end points
			if (i == 3) {
				text(`${-10 * (i + 1)} mC/cm`, x + 10, y - 4, x + 5 * sx, y);
				textSize(graphTextSize - 2);
				text(`3`, x + 68 * sx, y - 5, x + 5 * sx, y); // cubed superscript
			} else {
				text(`${-10 * (i + 1)}`, x + 10, y - 4, x + 5 * sx, y);
			}
		}
		//positive charge density y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.blue, 180);
			let x = 250 * sx;
			let y = (385 / 2 + 98) * sy - 12.5 * sy - 12.5 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line

			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize * sx);
			// only show units at end points
			if (i == 3) {
				text(`${10 * (i + 1)} mC/cm`, x + 10, y - 4, x + 5 * sx, y);
				textSize(graphTextSize - 2);
				text(`3`, x + 64 * sx, y - 5, x + 5 * sx, y);
			} else {
				text(`${10 * (i + 1)}`, x + 10, y - 4, x + 5 * sx, y);
			}
		}
	} else {
		// negative electric field y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.blue, 180);
			let x = 250 * sx;
			let y =
				(385 / 2 + 98) * sy +
				(40 / 1530) * 500 * sy +
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
			noStroke();
			fill(...color.blue, 180);
			textSize(graphTextSize * sx);
			// only show units at end points
			if (i == 3) {
				text(
					`${(0.1 * (i + 1)).toFixed(1)} MV/cm`,
					x + 10,
					y - 4,
					x + 5 * sx,
					y
				);
			} else {
				text(`${(0.1 * (i + 1)).toFixed(1)}`, x + 10, y - 4, x + 5 * sx, y);
			}
		}
		// positive electric field y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.blue, 180);
			let x = 250 * sx;
			let y =
				(385 / 2 + 98) * sy -
				(40 / 1530) * 500 * sy -
				(40 / 1530) * 500 * sy * i;
			line(x, y, x + 5 * sx, y); // Draw the line
			noStroke();
			fill(...color.blue, 180);
			textSize(graphTextSize * sx);
			// only show units at end points
			if (i == 3) {
				text(
					`${(0.1 * (i + 1)).toFixed(1)} MV/cm`,
					x + 10,
					y - 4,
					x + 5 * sx,
					y
				);
			} else {
				text(`${(0.1 * (i + 1)).toFixed(1)}`, x + 10, y - 4, x + 5 * sx, y);
			}
		}
	}

	//////////////////////////////////////////////////// x axis labeling

	// Buttons to swtich between E-field / charge density
	noFill();
	noStroke();
	if (switchGraph) {
		// electric field is showing
		stroke(...color.EFColor);
		fill(...color.EFColor, 80);
		rect(
			272 * sx,
			(chargeDensityDiagramY + 6) * sy,
			94 * sx,
			24 * sy,
			5 * sy,
			5 * sy
		);

		// charge density outline when not active
		stroke(...color.blue);
		noFill();
		rect(
			158 * sx,
			(chargeDensityDiagramY + 6) * sy,
			108 * sx,
			24 * sy,
			5 * sy,
			5 * sy
		);
	} else {
		// charge density is showing
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(
			158 * sx,
			(chargeDensityDiagramY + 6) * sy,
			108 * sx,
			24 * sy,
			5 * sy,
			5 * sy
		);
		// electric field outline
		stroke(...color.blue);
		noFill();
		rect(
			272 * sx,
			(chargeDensityDiagramY + 6) * sy,
			94 * sx,
			24 * sy,
			5 * sy,
			5 * sy
		);
	}

	noFill();
	noStroke();

	// text

	fill(...color.blue);

	// strokeWeight(1);
	fill(102, 194, 255, 180);
	textSize(14 * sx);

	text("Band Diagram", 160 * sx, 30 * sy);
	text("Charge Density", 164 * sx, (chargeDensityDiagramY + 24) * sy);
	text("Electric Field", 278 * sx, (chargeDensityDiagramY + 24) * sy);

	noFill();
	textSize(14);
	stroke(...color.grey);

	context.stroke();

	drawChargeDensityData();
	drawElectricFieldData();

	function drawChargeDensityData() {
		//////////////////////////////////////////////////// draw charge density when switch is False
		if (switchGraph == false) {
			noStroke();
			fill(...color.CDColor, color.chargeDensityOpacity);
			// fill(254, 246, 182, 100);
			if (electronBand_data_v1.length > 0) {
				//if (hole_new == 5e13 && electronBand_data_v1.length>0)
				//test case for v_data_1.json

				// calculate charge density data
				minorityDensity =
					Math.pow(10, 20) / Math.pow(dopingConcen_new * Math.pow(10, 3), 2);
				for (let i = 0; i < bandLength; i++) {
					if (scene(1)) {
						let y1 =
							-1.6 *
							Math.pow(10, -2) *
							dopingConcen_new *
							Math.pow(10, 3) *
							(-1 +
								Math.exp(-current_array[i] / 0.026) -
								minorityDensity * Math.exp(current_array[i] / 0.026));
						charge_density_temp_data[i] = {
							x: electronBand_data_v1[i].x,
							y: y1,
						};
					} else if (scene(2)) {
						let y1 =
							1.6 *
							Math.pow(10, -2) *
							dopingConcen_new *
							Math.pow(10, 3) *
							(-1 +
								Math.exp(current_array[i] / 0.026) -
								minorityDensity * Math.exp(-current_array[i] / 0.026));
						charge_density_temp_data[i] = {
							x: electronBand_data_v1[i].x,
							y: y1,
						};
					}
				}

				if (appliedVoltage > 0 || appliedVoltage < 0) {
					///charge density graph
					beginShape();

					vertex(250 * sx, (385 / 2 + 98) * sy);

					// Add all points as curve vertices
					for (let i = 0; i < charge_density_temp_data.length; i++) {
						let x = charge_density_temp_data[i].x;
						let y =
							((charge_density_temp_data[i].y / Math.pow(10, 14)) *
								(12.5 * sy)) /
								10 +
							(385 / 2 + 98) * sy;
						//let y = 20 + (10+385/2+96.25) * sy;
						vertex(x, y);
					}

					endShape();
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

					vertex(250 * sx, (385 / 2 + 98) * sy);

					// draw electric field graph
					// Add all points as curve vertices
					for (let i = 0; i < E_field_temp_data.length; i++) {
						let x = E_field_temp_data[i].x;
						let y =
							10 *
								(E_field_temp_data[i].y / Math.pow(10, 6)) *
								(40 / 1530) *
								500 *
								sy +
							(385 / 2 + 98) * sy;
						// let y =
						// 	(E_field_temp_data[i].y / Math.pow(10, 4)) * 2 +
						// 	(385 / 2 + 96.25) * sy;

						vertex(x, y);
					}
					vertex(
						E_field_temp_data[bandLength - 2].x,
						E_field_temp_data[bandLength - 2].y / Math.pow(10, 6) +
							(385 / 2 + 98) * sy
					);

					endShape();
				}
			}
		}
	}

	// draw rectangles to block charge density graph overflow
	// stroke(125, 241, 148, 100);

	fill(30);
	// fill("red");
	noStroke();
	// blocks graph in band diagram section
	rect(
		outlineX * sx,
		bandDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		outlineHeight * sy
	);

	// blocks graph in capacitor section
	rect(
		outlineX * sx,
		capacitorDiagramY * sy,
		(outlineWidth + xSlide) * sx,
		(capacitorHeight - 1) * sy
	);

	// blocks graph above band diagram section
	// rect(0 * sx, -1 * sy, 1000, 9.6 * sy);

	fill(...color.bg);
	// blocks graph below capacitor section
	rect(
		outlineX * sx,
		(capacitorDiagramY + capacitorHeight + 1) * sy,
		1000,
		80 * sy
	);

	stroke(...color.grey);
	fill(30);
	// draw metal on left side
	rect(metalX * sx, metalY * sy, metalWidth * sx, metalHeight * sy);

	// draw Insulator
	rect(
		(metalX + metalWidth) * sx,
		metalY * sy,
		metalWidth * sx,
		metalHeight * sy
	);

	let batteryX = outlineX + 360;
	let batteryY = capacitorDiagramY + 376;

	// battery image
	if (appliedVoltage >= 0) {
		image(
			batteryPosImg,
			(batteryX + xSlide / 2) * sx,
			batteryY * sy,
			(batteryPosImg.width / 1.5) * sx,
			(batteryPosImg.height / 1.5) * sy
		);
	} else {
		image(
			batteryNegImg,
			(batteryX + xSlide / 2) * sx,
			batteryY * sy,
			(batteryNegImg.width / 1.5) * sx,
			(batteryNegImg.height / 1.5) * sy
		);
	}

	// left metal label
	image(
		metalLabel,
		(outlineX + 16) * sx,
		(capacitorDiagramY + capacitorHeight / 2 - 36) * sy,
		(metalLabel.width / 1.5) * sx,
		(metalLabel.height / 1.5) * sy
	);

	// insulator label

	image(
		insulatorLabel,
		(outlineX + 68) * sx,
		(capacitorDiagramY + capacitorHeight / 2 - 53) * sy,
		(insulatorLabel.width / 1.5) * sx,
		(insulatorLabel.height / 1.5) * sy
	);

	stroke(...color.grey);
	strokeWeight(1.5);

	// line from left metal to battery, vertical
	line(
		(outlineX + metalWidth / 2) * sx,
		(capacitorDiagramY + capacitorHeight + 1) * sy,
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
		(capacitorDiagramY + capacitorHeight + 1) * sy,
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

	// draw outlines
	stroke(...color.grey);
	noFill();
	strokeWeight(1);

	//one
	// rect (x, y, w, h)
	rect(
		outlineX * sx,
		1 * sy,
		(outlineWidth + xSlide) * sx,
		(outlineHeight - 1) * sy
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

function drawBandDiagram() {
	///////////////////////////////////////////////////////////////////draw new band diagram using json data
	stroke(254, 246, 182);
	noFill();

	if (scene(1)) {
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
		} else if (hole_new == 5e13) {
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
	} else if (scene(2)) {
		if (hole_new == 99763115748444.14) {
			//10^17 case
			if (appliedVoltage / 20 == 2) {
				current_array_temp = numberArray1_neg_2_0;
			} else if (appliedVoltage / 20 == 1.6) {
				current_array_temp = numberArray1_neg_1_6;
			} else if (appliedVoltage / 20 == 1.2) {
				current_array_temp = numberArray1_neg_1_2;
			} else if (appliedVoltage / 20 == 0.8) {
				current_array_temp = numberArray1_neg_0_8;
			} else if (appliedVoltage / 20 == 0.4) {
				current_array_temp = numberArray1_neg_0_4;
			} else if (appliedVoltage / 20 == 0) {
				current_array_temp = numberArray1_0;
			} else if (appliedVoltage / 20 == -0.4) {
				current_array_temp = numberArray1_pos_0_4;
			} else if (appliedVoltage / 20 == -0.8) {
				current_array_temp = numberArray1_pos_0_8;
			} else if (appliedVoltage / 20 == -1.2) {
				current_array_temp = numberArray1_pos_1_2;
			} else if (appliedVoltage / 20 == -1.6) {
				current_array_temp = numberArray1_pos_1_6;
			} else if (appliedVoltage / 20 == -2) {
				current_array_temp = numberArray1_pos_2_0;
			}
			for (let i = 0; i < bandLength - 1; i++) {
				current_array[i] = current_array_temp[i] * -1;
			}
		} else if (hole_new == 5e13) {
			if (appliedVoltage / 20 == 2) {
				current_array_temp = numberArray2_neg_2_0;
			} else if (appliedVoltage / 20 == 1.6) {
				current_array_temp = numberArray2_neg_1_6;
			} else if (appliedVoltage / 20 == 1.2) {
				current_array_temp = numberArray2_neg_1_2;
			} else if (appliedVoltage / 20 == 0.8) {
				current_array_temp = numberArray2_neg_0_8;
			} else if (appliedVoltage / 20 == 0.4) {
				current_array_temp = numberArray2_neg_0_4;
			} else if (appliedVoltage / 20 == 0) {
				current_array_temp = numberArray2_0;
			} else if (appliedVoltage / 20 == -0.4) {
				current_array_temp = numberArray2_pos_0_4;
			} else if (appliedVoltage / 20 == -0.8) {
				current_array_temp = numberArray2_pos_0_8;
			} else if (appliedVoltage / 20 == -1.2) {
				current_array_temp = numberArray2_pos_1_2;
			} else if (appliedVoltage / 20 == -1.6) {
				current_array_temp = numberArray2_pos_1_6;
			} else if (appliedVoltage / 20 == -2) {
				current_array_temp = numberArray2_pos_2_0;
			}

			// populate current_array with current_array_temp
			for (let i = 0; i < bandLength - 1; i++) {
				current_array[i] = current_array_temp[i] * -1;
			}
		}
	}

	// calculate electric field
	if (electronBand_data_v1.length > 0) {
		//test case for v_data_1.json

		for (let i = 0; i < bandLength - 1; i++) {
			let y1 =
				((current_array[i + 1] - current_array[i]) /
					(xPositionData[i + 1] - xPositionData[i])) *
				Math.pow(10, 7);
			E_field_temp_data[i] = { x: electronBand_data_v1[i].x, y: y1 };
		}

		for (let i = 0; i < bandLength - 1; i++) {
			let y1 =
				((current_array[i + 1] - current_array[i]) /
					(xPositionData[i + 1] - xPositionData[i])) *
				Math.pow(10, 7);
			E_field_temp_data[i] = { x: electronBand_data_v1[i].x, y: y1 };
		}
	}

	//draw negative curve

	beginShape();

	let subscriptAddY = 2;
	let subscriptAddX = 8;
	let eTextSize = 14;
	let subscriptTextSize = 12;

	// draw band diagram labels
	textFont("Courier New");

	noStroke();

	// Ec label
	fill(...color.negative); // negative color
	textSize(eTextSize * sx);
	text("E", 920 * sx, 75 * sy);
	textSize(subscriptTextSize * sx);
	text("c", (920 + subscriptAddX) * sx, (75 + subscriptAddY) * sy); // subscript

	// Ei label
	fill(...color.eiCurve); // purple
	textSize(eTextSize * sx);
	textSize(subscriptTextSize * sx);

	let yPos_Ei = sceneCount == 1 ? 90 : 104;

	text("E", 920 * sx, yPos_Ei * sy);
	text("i", (920 + subscriptAddX) * sx, (yPos_Ei + subscriptAddY) * sy);

	// Ef label

	let yPos_Ef = sceneCount == 1 ? 104 : 90;
	// fill("#FF5839"); // red
	fill(...color.efCurve); // test
	textSize(eTextSize * sx);
	text("E", 920 * sx, yPos_Ef * sy);
	textSize(subscriptTextSize * sx);
	text("f", (920 + subscriptAddX) * sx, (yPos_Ef + subscriptAddY) * sy);

	// Ev label
	fill(...color.positive); // positive color
	textSize(eTextSize * sx);
	text("E", 920 * sx, 118 * sy);
	textSize(subscriptTextSize * sx);
	text("v", (920 + subscriptAddX) * sx, (118 + subscriptAddY) * sy);

	textSize(12 * sx);

	noFill();
	strokeWeight(1);
	//Draw E_c

	noFill();
	stroke(...color.negative);
	strokeWeight(1.5);
	// draw electron curve (E_c)

	for (var k = 0; k < bandLength; k++) {
		let x1 = 17;
		let x2 = 349;
		let y1 = 0;
		let y2 = 679;
		let a = (y2 - y1) / (x2 - x1);
		let b = y1 - a * x1;
		let y = a * xPositionData[k] + b;

		// vertex drawn from current_array
		curveVertex((250 + y) * sx, (171.25 + current_array[k] * 40 - 100) * sy);
		electronBand_data_v1[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * (40 / 1.2) - 100) * sy,
		};
		electronBand_data[k] = {
			x: (250 + y) * sx,
			y: (171.25 + current_array[k] * (40 / 1.2) - 100) * sy,
		};
		electronBand[k] = [
			(250 + y) * sx,
			(171.25 + current_array[k] * (40 / 1.2) - 100) * sy,
		];

		//}
	}
	endShape();
	noStroke();

	drawingContext.setLineDash([6]);
	noStroke();

	noFill();

	// draw Ei curve
	strokeWeight(1);

	stroke(...color.eiCurve); // purple
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		//negative curve
		let x1 = 17;
		let x2 = 349;
		let y1 = 0;
		let y2 = 679;
		let a = (y2 - y1) / (x2 - x1);
		let b = y1 - a * x1;
		let y = a * xPositionData[k] + b;
		curveVertex((250 + y) * sx, (171.25 + current_array[k] * 40 - 80) * sy);
	}
	endShape();

	// draw Ef curve
	stroke(...color.efCurve); // red
	drawingContext.setLineDash([0]);
	beginShape();
	for (var k = 0; k < bandLength; k++) {
		//negative curve
		let x1 = 17;
		let x2 = 349;
		let y1 = 0;
		let y2 = 679;
		let a = (y2 - y1) / (x2 - x1);
		let b = y1 - a * x1;
		let y = a * xPositionData[k] + b;
		if (scene(1)) {
			FermiVoltage = -0.026 * Math.log(hole_new / Math.pow(10, 8));
		}
		if (scene(2)) {
			FermiVoltage = 0.026 * Math.log(hole_new / Math.pow(10, 8));
		}

		curveVertex(
			(250 + y) * sx,
			(171.25 + FermiVoltage - 80 - (FermiVoltage / 1.19) * 40) * sy
		);
	}
	endShape();

	drawingContext.setLineDash([0]);

	//draw hole curve
	noFill();
	strokeWeight(1.5);
	stroke(...color.positive);
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

		curveVertex(
			(250 + x) * sx,
			(-30 + 171.25 + current_array[k] * 40 - 30) * sy
		);
		holeBand_data_v1[k] = {
			x: (250 + x) * sx,
			y: (171.25 + current_array[k] * (40 / 1.2) - 30 - 30) * sy,
		};
		holeBand_data[k] = {
			x: (250 + x) * sx,
			y: (171.25 + current_array[k] * (40 / 1.2) - 30 - 30) * sy,
		};

		holeBand[k] = [
			(250 + x) * sx,
			(171.25 + current_array[k] * (40 / 1.2) - 30 - 30) * sy,
		];
	}
	endShape();
	noStroke();
	strokeWeight(1);

	textFont("Sans-serif");
}

function onRefresh() {
	resetScene();
}

//reset button
function resetScene() {
	fetchBandDiagramData();
	genElectrons = [];
	genHoles = [];
	initElectrons = [];
	initHoles = [];
	fixedCharges = [];
	genEffects = [];
	recomEffects = [];
	recomEffectsForHoles = [];
	recomEffectsForElectrons = [];

	// updateDopingConcentration(130);
	setScattering(20);
	setVelocity(9);
	setDistance(9);
	setConcentration(1);
	appliedVoltage = 0;

	if (scene(1)) {
		document.getElementById("dopingScene1").value = 130;
		document.getElementById("appliedVoltageScene1").value = 0;
	} else if (scene(2)) {
		document.getElementById("dopingScene2").value = 130;
		document.getElementById("appliedVoltageScene2").value = 0;
	}

	if (scene(1) || scene(2)) {
		if (scene(1)) {
			updateDopingConcentration(document.getElementById("dopingScene1").value);
		} else if (scene(2)) {
			updateDopingConcentration(document.getElementById("dopingScene2").value);
		}
	}
}

//set carrier lifetime slider
function setDistance(te) {
	recomDistance = te;
}

//
function setConcentration(te) {
	concentration = te / 3;

	genElectrons = [];
	genHoles = [];
}

//turn on or off recombine
function switch_recombine() {
	if (recombineOn) {
		recombineOn = false;
		switch_re.checked = false;
	} else {
		recombineOn = true;
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
	function moveCharges(chargeArray, band) {
		for (let i = 0; i < chargeArray.length; i++) {
			if (chargeArray[i].notScatter == false){
			chargeArray[i].botz =
				getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
			let closestToBand = findClosestValue(band, chargeArray[i].position.x);
			chargeArray[i].bandOrigin.y = closestToBand;
			chargeArray[i].movingVelocity = chargeArray[i].botz;
			chargeArray[i].direction = createVector(random(-1, 1), random(-1, 1));
			chargeArray[i].velocity = p5.Vector.mult(
				chargeArray[i].direction,
				chargeArray[i].movingVelocity
			);
		}
		}
	}



	if (scatteringCount == 0) {
		moveCharges(initElectrons, electronBand);
		moveCharges(genElectrons, electronBand);
		moveCharges(initHoles, holeBand);
		moveCharges(genHoles, holeBand);
		scatteringCount = parseInt(scatteringCountInput) + 2;
	}
}

//generating electron hole pairs based on frequency
function generateCharges(num) {
	clearInterval(run45);
	genInterval = 4000 / generationRateInterval;

	run45 = setInterval(function () {
		generateCharges(1);
	}, 500);

	if (scene(2) || scene(1)) {
		if (timeElapsed > 0) {
			genElectrons = [];
			genHoles = [];
		} else if (timeElapsed == 0) {
			// at beggining of scene
			for (let i = 0; i < num; i++) {
				const buffer = 16; // make sure charges don't get stuck bouncing on edge
				let xPosition = random((xMin + buffer) * sx, (xMax - buffer) * sx);
				let yPosition = random((yMin + buffer) * sy, (yMax - buffer) * sy);

				genEffects.push(new Effect(xPosition, yPosition, 10, "e"));

				let closestValueToElectronBand = findClosestValue(
					electronBand,
					xPosition
				);

				// create new generated electron
				let newElectron = new Charge(xPosition, yPosition, chargeID, "e");
				newElectron.bandOrigin.x = closestValueToElectronBand;

				newElectron.top = 1;
				////botz is the velocity here, and it comes from a randomly generated number list
				newElectron.botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];

				genElectrons.push(newElectron);

				// create new generated hole
				let closestValueToHoleBand = findClosestValue(holeBand, xPosition);

				let newHole = new Charge(xPosition, yPosition, chargeID, "h");

				newHole.bandOrigin.x = closestValueToHoleBand;
				newHole.top = 1;
				newHole.botz =
					getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];

				genHoles.push(newHole);

				chargeID += 1;
			}
		}
	}
}

//Reads doping concentration
function updateDopingConcentration(a) {
	timeSinceLastInteraction = 0; // reset for checkTimeout function

	//// Azad: Doping concentration * 0.001
	hole_new = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	//// Azad: Doping concentration * 0.001/5
	dopingConcen = Math.pow(10, a / 10);

	// same as above
	electron_add = Math.pow(10, a / 10);

	//// Azad: Doping concentration * 0.001/5
	let mm = Math.pow(10, ((10 / 10) * (a - 124) + 124) / 10) * 5;

	/// this is later is used for calculating charge density
	dopingConcen_new = mm;

	timeElapsed = 0;

	getRandomBotz = [];

	////
	genElectrons = [];
	genHoles = [];
	initElectrons = [];
	initHoles = [];
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
			{ nv: 2.0, quantity: 13 },
			{ nv: 2.1, quantity: 9 * 5 },
			{ nv: 2.2, quantity: 6 * 5 },
			{ nv: 2.3, quantity: 4 * 5 },
			{ nv: 3.5, quantity: 3 * 5 },
			{ nv: 4, quantity: 2 * 5 },
			{ nv: 5, quantity: 1 * 5 },
			{ nv: 6, quantity: 1 * 5 },
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
			Math.pow(100, (Math.log10(Math.round(dopingConcen)) - 8) / 2) / 1000;

		////////add fixed charges + free charges /////////////////////////////////////////////////////////////////////////

		for (let i = 0; i < numFixedCharges; i++) {
			// let a = random(xMin * sx, xMax * sx);
			// let b = random(yMin * sy, yMax * sy);

			const buffer = 16;
			let xPosition = random((xMin + buffer) * sx, (xMax - buffer) * sx);
			let yPosition = random((yMin + buffer) * sy, (yMax - buffer) * sy);

			if (scene(1)) {
				// p-doped
				fixedCharges.push(new Effect(xPosition, yPosition, 10, "fixneg", i)); // fixed negative charges

				// free holes
				var Charge2 = new Charge(xPosition, yPosition, chargeID, "h");
				Charge2.botz = getRandomBotz[i];
				initHoles.push(Charge2);
				chargeID += 1;
			} else if (scene(2)) {
				// n-doped
				fixedCharges.push(new Effect(xPosition, yPosition, 10, "fixpos", i)); // fixed positive charges

				// free electron
				var Charge2 = new Charge(xPosition, yPosition, chargeID, "e");
				Charge2.botz = getRandomBotz[i];
				initElectrons.push(Charge2); // working
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
function updateAppliedVoltage(a) {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	appliedVoltage = a;

	AccelerationFactor = 1;
	if (scene(1)) {
		if (appliedVoltage / 20 < -0.3) {
			// newAcceleration = newAcceleration * 10;  // original
			AccelerationFactor = 5;
		}

		if (dopingConcen_new == 5e13) {
			recomDistance = 15;
			if (appliedVoltage / 20 == 0.4) {
				AccelerationFactor = 2;
			}

			if (appliedVoltage / 20 == 0 / 8) {
				AccelerationFactor = 1.5;
			}

			if (appliedVoltage / 20 == 1.2) {
				AccelerationFactor = 0.8;
				recomDistance = 21;
			}

			if (appliedVoltage / 20 > 1.4) {
				AccelerationFactor = 1.5;
				recomDistance = 27;
			}
		}

		if (dopingConcen_new > 5e13) {
			recomDistance = 12;
			if (appliedVoltage / 20 == 0.4) {
				AccelerationFactor = 2;
			}

			if (appliedVoltage / 20 == 0.8) {
				AccelerationFactor = 1.5;
			}

			if (appliedVoltage / 20 == 1.2) {
				AccelerationFactor = 0.8;
			}

			if (appliedVoltage / 20 > 1.4) {
				AccelerationFactor = 1.5;
			}
		}
	} else if (scene(2)) {
		if (appliedVoltage / 20 > 0.3) {
			// newAcceleration = newAcceleration * 10; // original

			AccelerationFactor = 5;
		}

		if (dopingConcen_new == 5e13) {
			recomDistance = 12;
			if (appliedVoltage / 20 == -0.4) {
				AccelerationFactor = 2;
			}

			if (appliedVoltage / 20 == -1.2) {
				AccelerationFactor = 0.8;
				recomDistance = 21;
			}

			if (appliedVoltage / 20 < -1.4) {
				AccelerationFactor = 1.5;
				recomDistance = 27;
			}
		}

		if (dopingConcen_new > 5e13) {
			recomDistance = 12;
			if (appliedVoltage / 20 == -0.4) {
				AccelerationFactor = 2;
			}

			if (appliedVoltage / 20 == -0.8) {
				AccelerationFactor = 1.1;
			}

			if (appliedVoltage / 20 == -1.2) {
				AccelerationFactor = 0.8;
			}

			if (appliedVoltage / 20 < -1.4) {
				AccelerationFactor = 1.5;
			}
		}
	}
}

//recombine toggle between 0 and 1 every 3 seconds
function toggleRecombine() {
	if (recombineOn) {
		recombineOn = false;
	} else {
		recombineOn = true;
	}
}

function checkHoleCount() {
	// this function is to prevent loss of holes when applied voltage is negative and holes concentrate on the left due to strong electric field
	// only for scene 1: p-type MOS capacitor (majority holes)
	if (scene(1)) {
		let leftHoleCount = 0;
		for (let i = 0; i < initHoles.length; i++) {
			if (initHoles[i].position.x < holeRegion.x) {
				leftHoleCount++;
			} else {
			}
		}
		for (let i = 0; i < genHoles.length; i++) {
			if (genHoles[i].position.x < holeRegion.x) {
				leftHoleCount++;
			}
		}
		if (dopingConcen > 10000000000000) {
			if (leftHoleCount > 150) {
				resetScene();
				alert("Timeout, Visualization Reset"); // measured: didn't reach this point. levels at at around 70-80. enough high energy holes leaving this zone
			}
		} else {
			if (leftHoleCount > 100) {
				resetScene();
				alert("Timeout, Visualization Reset"); // measured: takes about 4 min (depends on computer)
			}
		}
		console.log("leftHoleCount", leftHoleCount);

			// Check the number of electrons in the inversion layer 

			let leftElectronSurfMax = 10;
			if (appliedVoltage / 20 == 2.0) {
				if (dopingConcen > 10000000000000) {leftElectronSurfMax = 40}
				else {leftElectronSurfMax = 30}
			}

			if (appliedVoltage / 20 == 1.6) {
				if (dopingConcen > 10000000000000) {leftElectronSurfMax = 30}
				else {leftElectronSurfMax = 20}
			}

			if (appliedVoltage / 20 == 1.2) {
				if (dopingConcen > 10000000000000) {leftElectronSurfMax = 10}
				else {leftElectronSurfMax = 5}
			}


	let leftElectronSurfCount = 0;
	for (let i = 0; i < initElectrons.length; i++) {
		if (initElectrons[i].position.x < holeRegion.x-30) {
			leftElectronSurfCount++;
			//if (dopingConcen > 10000000000000) {
			if (leftElectronSurfCount > leftElectronSurfMax) {
				let closestToBand = findClosestValue(electronBand, initElectrons[i].position.x);
					initElectrons[i].botz = 60;
					//initElectrons[i].maxspeed = 20; 
					initElectrons[i].notScatter = true;
					initElectrons[i].bandOrigin.y = closestToBand;
					initElectrons[i].movingVelocity = 1000*initElectrons[i].botz;
					initElectrons[i].direction = createVector(1, 0);
					initElectrons[i].velocity = p5.Vector.mult(
						initElectrons[i].direction,
						initElectrons[i].movingVelocity,
					
					)
					//console.log(initElectrons[i].velocity);
				}
			//} 
			// else {
			// 	if (leftElectronSurfCount > 30) {
			// 		let closestToBand = findClosestValue(electronBand, initElectrons[i].position.x);
			// 		initElectrons[i].botz = 50;
			// 		initElectrons[i].notScatter = true;
			// 		initElectrons[i].bandOrigin.y = closestToBand;
			// 		initElectrons[i].movingVelocity = 1000*initElectrons[i].botz;
			// 		initElectrons[i].direction = createVector(1, 0);
			// 		initElectrons[i].velocity = p5.Vector.mult(
			// 			initElectrons[i].direction,
			// 			initElectrons[i].movingVelocity,
			// 			)
			// 		}
			// }
		} 
	}
	for (let i = 0; i < genElectrons.length; i++) {
		if (genElectrons[i].position.x < holeRegion.x-30) {
			leftElectronSurfCount++;
			//if (dopingConcen > 10000000000000) {
				if (leftElectronSurfCount > leftElectronSurfMax) {
					let closestToBand = findClosestValue(electronBand, genElectrons[i].position.x);
					genElectrons[i].botz = 60;
					genElectrons[i].notScatter = true;
					genElectrons[i].bandOrigin.y = closestToBand;
					genElectrons[i].movingVelocity = 1000*genElectrons[i].botz;
					genElectrons[i].direction = createVector(1, 0);
					genElectrons[i].velocity = p5.Vector.mult(
						genElectrons[i].direction,
						genElectrons[i].movingVelocity,
					)
					
				}
			//} 
			// else {
			// 	if (leftElectronSurfCount > 30) {
			// 		let closestToBand = findClosestValue(electronBand, genElectrons[i].position.x);
			// 		genElectrons[i].botz = 50;
			// 		genElectrons[i].notScatter = true;
			// 		genElectrons[i].bandOrigin.y = closestToBand;
			// 		genElectrons[i].movingVelocity = 1000*genElectrons[i].botz;
			// 		genElectrons[i].direction = createVector(1, 0);
			// 		genElectrons[i].velocity = p5.Vector.mult(
			// 			genElectrons[i].direction,
			// 			genElectrons[i].movingVelocity,
			// 		)
			// 	}
			// }
		}
	}
		
	console.log('leftElectronSurfCount', leftElectronSurfCount);

	let leftHoleSurfMax = 10;
	if (appliedVoltage / 20 == -2.0) {
		if (dopingConcen > 10000000000000) {leftHoleSurfMax = 50}
		else {leftHoleSurfMax = 35}
	}

	if (appliedVoltage / 20 == -1.6) {
		if (dopingConcen > 10000000000000) {leftHoleSurfMax = 40}
		else {leftHoleSurfMax = 30}
	}

	if (appliedVoltage / 20 == -1.2) {
		if (dopingConcen > 10000000000000) {leftHoleSurfMax = 30}
		else {leftHoleSurfMax = 25}
	}

	if (appliedVoltage / 20 == -0.8) {
		if (dopingConcen > 10000000000000) {leftHoleSurfMax = 20}
		else {leftHoleSurfMax = 10}
	}

	if (appliedVoltage / 20 == -0.4) {
		if (dopingConcen > 10000000000000) {leftHoleSurfMax = 10}
		else {leftHoleSurfMax = 5}
	}


///////Check the number of holes near the surface		
	let leftHoleSurfCount = 0;
	for (let i = 0; i < initHoles.length; i++) {
		if (initHoles[i].position.x < holeRegion.x-30) {
			leftHoleSurfCount++;
			
			if (leftHoleSurfCount > leftHoleSurfMax) {
				let closestToBand = findClosestValue(holeBand, initHoles[i].position.x);
					initHoles[i].botz = 20;
					//initHoles[i].notScatter = true;
					initHoles[i].bandOrigin.y = closestToBand;
					initHoles[i].movingVelocity = 1000*initHoles[i].botz;
					initHoles[i].direction = createVector(1, 0);
					initHoles[i].velocity = p5.Vector.mult(
						initHoles[i].direction,
						initHoles[i].movingVelocity			
					)
				}
		} 
	}
	for (let i = 0; i < genHoles.length; i++) {
		if (genHoles[i].position.x < holeRegion.x-30) {
			leftHoleSurfCount++;
				if (leftHoleSurfCount > leftHoleSurfMax) {
					let closestToBand = findClosestValue(holeBand, genHoles[i].position.x);
					genHoles[i].botz = 20;
					//genHoles[i].notScatter = true;
					genHoles[i].bandOrigin.y = closestToBand;
					genHoles[i].movingVelocity = 1000*genHoles[i].botz;
					genHoles[i].direction = createVector(1, 0);
					genHoles[i].velocity = p5.Vector.mult(
						genHoles[i].direction,
						genHoles[i].movingVelocity,
					)
					//console.log(genElectrons[i].velocity);
				}
		}
	}
	
		
		
		// count num holes in right region (90%) -> if it dips below regular normal of holes - insert holes from right
		let holeCount = 0;
		for (let i = 0; i < initHoles.length; i++) {
			if (initHoles[i].position.x > holeRegion.x) {
				holeCount++;
			} else {
			}
		}
		for (let i = 0; i < genHoles.length; i++) {
			if (genHoles[i].position.x > holeRegion.x) {
				holeCount++;
			}
		}

		if (appliedVoltage / 20 == -0.4) {
			holeCount = holeCount * 0.98;
		}
		if (appliedVoltage / 20 == -0.8) {
			holeCount = holeCount * 0.96;
		}
		if (appliedVoltage / 20 == -1.2) {
			holeCount = holeCount * 0.94;
		}
		if (appliedVoltage / 20 == -1.6) {
			holeCount = holeCount * 0.92;
		}
		if (appliedVoltage / 20 == -2.0) {
			holeCount = holeCount * 0.9;
		}

		// check if #holes dipping too low, if so - repopulate from right side
		if (dopingConcen > 10000000000000) {
			if (holeCount < 200) {
				const buffer = 14;
				var vehicle = new Charge(
					(xMax - buffer) * sx,
					random(yMin + buffer, yMax - buffer) * sy,
					chargeID,
					"h"
				);
				vehicle.direction = createVector(-1, random(-1, 1));
				vehicle.movingVelocity = this.movingVelocity;
				vehicle.velocity = createVector(-10, 0);
				vehicle.botz = this.botz;
				initHoles.push(vehicle);
				chargeID++;
			}
		} else {
			if (holeCount < 100) {
				const buffer = 14;
				var vehicle = new Charge(
					(xMax - buffer) * sx,
					random(yMin + buffer, yMax - buffer) * sy,
					chargeID,
					"h"
				);
				vehicle.direction = createVector(-1, random(-1, 1));
				vehicle.movingVelocity = this.movingVelocity;
				vehicle.velocity = createVector(-10, 0);
				vehicle.botz = this.botz;
				initHoles.push(vehicle);
				chargeID++;
			}
		}
	}
}

// the function to update the electron hole movements and animations
function updateCharges() {
	checkHoleCount();
	function moveHelper(chargeArray) {
		for (let i = 0; i < chargeArray.length; i++) {
			if (chargeArray[i].active) {
				chargeArray[i].display();
				chargeArray[i].updateOpacity();
				chargeArray[i].update();

				if (chargeArray[i].opacity > 255) {
					chargeArray[i].randomWalk();
				}
			}
		}
	}

	let chargeArrays = [initElectrons, genElectrons, initHoles, genHoles];
	for (let i = 0; i < chargeArrays.length; i++) {
		moveHelper(chargeArrays[i]);
	}

	for (let i = 0; i < genEffects.length; i++) {
		if (genEffects[i].generationOpacity < 1) {
			genEffects.splice(i, 1);
		}
	}

	for (let i = 0; i < genHoles.length; i++) {
		if (genHoles[i].showing == false) {
			genHoles.splice(i, 1);
		}
	}

	for (let i = 0; i < initHoles.length; i++) {
		if (initHoles[i].showing == false) {
			initHoles.splice(i, 1);
		}
	}

	function displayCharges(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i]) {
				array[i].display();
				array[i].update();
			}
		}
	}

	const displayArrays = [fixedCharges, genEffects, recomEffects];

	for (let i = 0; i < displayArrays.length; i++) {
		if (displayArrays[i].length > 0) {
			displayCharges(displayArrays[i]);
		}
	}

	// (recombination visual effect, electron fading )
	for (let i = 0; i < recomEffectsForElectrons.length; i++) {
		if (typeof recomEffectsForElectrons[i] != "undefined") {
			recomEffectsForElectrons[i].display();
			recomEffectsForElectrons[i].update_circle();
			recomEffectsForElectrons[i].update_location();
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < recomEffectsForHoles.length; i++) {
		if (typeof recomEffectsForHoles[i] != "undefined") {
			recomEffectsForHoles[i].display();
			recomEffectsForHoles[i].update_circle();
			recomEffectsForHoles[i].update_location();
		}
	}

	// for (let i = 0; i < recomEffectsForHoles.length; i++) {
	// 	if (typeof recomEffectsForHoles[i] != "undefined") {
	// 		for (let k = 0; k < recomEffectsForElectrons.length; k++) {
	// 			if (typeof recomEffectsForElectrons[k] != "undefined") {
	// 				if (
	// 					recomEffectsForHoles[i].chargeType ==
	// 					recomEffectsForElectrons[k].chargeType
	// 				) {
	// 					recomEffectsForElectrons[k].seek(
	// 						p5.Vector.div(
	// 							p5.Vector.add(
	// 								recomEffectsForElectrons[k].position,
	// 								recomEffectsForHoles[i].position
	// 							),
	// 							2
	// 						)
	// 					);
	// 					recomEffectsForHoles[i].seek(
	// 						p5.Vector.div(
	// 							p5.Vector.add(
	// 								recomEffectsForElectrons[k].position,
	// 								recomEffectsForHoles[i].position
	// 							),
	// 							2
	// 						)
	// 					);
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// draw metal on right side - drawn here to hide charges going into metal
	stroke(...color.grey);
	strokeWeight(1);
	fill(30);
	rect(
		(outlineX + outlineWidth - metalWidth + xSlide) * sx,
		metalY * sy,
		metalWidth * sx,
		metalHeight * sy
	);
	// right metal label
	image(
		metalLabel,
		(outlineX + outlineWidth - 32 + xSlide) * sx,
		(capacitorDiagramY + capacitorHeight / 2 - 36) * sy,
		(metalLabel.width / 1.5) * sx,
		(metalLabel.height / 1.5) * sy
	);
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
