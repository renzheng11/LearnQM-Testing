// vars
let canvas;

// Toggle drawing
let showNegArrows;
let showPosArrows;
let showPurpleArrows;

let togglePairs;

let drawScene1;
let drawScreen4;
let toggleNegBox6;

let screenAmount;

let animate;
let animated;

// Surfaces
let box1;
let box2; 

let box4;
let negbox4;

let box5;
let negbox5;

let box6;
let negbox6a;
let negbox6b;

let box7;
let negbox7a;
let negbox7b;
let negbox7c;

let box8;
let negbox8;

// graphs
let graphY;
let graphW;
let graphX;
let graphC;

// Charges
let chargeDivisor;
let chargeCoordinates;
let chargeXArray;
let chargeYArray;
let chargeXRArray;
let chargeYRArray;
let rand; // charge random offset
let totalNegCharge;

// Scenes
let currPosBox;
let currNegBoxes;
let boxPadding;
let flowDirection;

let chargeDensityY;
let eFieldY;

// Colors
let color;


function setup() {
    
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');

    chargeDivisor = 3.2;
    flowDirection = "right";
    totalNegCharge = 0;

    chargeDensityY = 30;
    eFieldY = 42;

    animate = {
        scene4: false,
        scene5: false,
        scene6: false,
        scene7: false
    }

    animated = {
        scene4: false,
        scene5: false,
        scene6: false,
        scene7: false
    }

    color = {
        grey: [113, 113, 133],
        bg: [18,18,18], // unused
        pos: [204, 75, 73], // red
        neg: [104, 159, 208], // blue
        purple: [145, 87, 204], // purple
        posSurface: [54, 78, 99], // unused
        negSurface: [111, 67, 67], // unused
        negCharge: [66, 117, 166], // unused
        posCharge: [245, 112, 112], // unused
        negsign: [183, 220, 255]

    }

    chargeCoordinates = [];
    currNegBoxes =[];

    showNegArrows = true;
    showPosArrows = true;
    showPurpleArrows = true;

    toggleNegBox6 = false;


    bg = 18;

    graphY = 550;
    graphW = 540;

    leftPadding = 48;
    
    graphC = graphW / 2 + leftPadding - 8;
    graphX = graphC - graphW / 2 + leftPadding;

    volumeWidth = 100;

    drawScene1 = false;
    drawScreen4 = false;

    boxThickness = 1;

    boxPadding = 72;
    xStart = 310;

    let offsetY = 14;

    // instantiate boxes
    box1 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box2 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box3 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box4 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, false, "lrp", true, 310, 140, boxThickness, 80);

    negbox4 = new Box(true, false, "neg", 1, offsetY, 80, true, 440, true, true, "lrp", true, 400, 140, boxThickness, 80);

    box5 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox5 = new Box(true, false, "neg", 1, offsetY, 56, true, 440, true, true, "lrp", true, 400, 140, boxThickness, 80);

    box6 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox6a = new Box(true, false, "neg", 1, offsetY, 50, true, 440, true, true, "lrp", true, 310 + boxPadding, 140, boxThickness, 80);
    negbox6b = new Box(false, false, "neg", 2, offsetY * 2, 30, true, 440, true, true, "lrp", true, 310 + boxPadding*2, 140, boxThickness, 80);

    box7 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox7a = new Box(true, false, "neg", 1, offsetY, 15, true, 440, true, true, "lrp", true, 310 + boxPadding, 140, boxThickness, 80);
    negbox7b = new Box(true, false, "neg", 2, offsetY * 2, 25, true, 440, true, true, "lrp", true, 310 + boxPadding*2, 140, boxThickness, 80);
    negbox7c = new Box(true, false, "neg", 3, offsetY * 3, 40, true, 440, true, true, "lrp", true, 310 + boxPadding*3, 140, boxThickness, 80);

    box8 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox8 = new Box(true, false, "neg", 1, offsetY, 80, true, 440, true, true, "lrp", true, 380, 140, 142, 80);

    allPosBoxes = [box1, box2, box4, box5, box6, box7, box8];
    allNegBoxes = [negbox4, negbox5, negbox6a, negbox6b, negbox7a, negbox7b, negbox7c, negbox8];

    chargeXArray = [];
    chargeYArray = [];
    chargeXRArray = [];
    chargeYRArray = [];

    // less random array
    let num = 24;
    let col = Math.floor(num / 5);
    let row = Math.floor(num / 2);

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            chargeXArray.push(box1.x + c * 18 + Math.random() * (2) +18);
            chargeYArray.push(box1.y + r * 18 + Math.random() * (2));
        }
    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            chargeXRArray.push(box1.x + c * 18 + Math.random() * (2) + 18);
            chargeYRArray.push(box1.y + r * 18 + Math.random() * (2));
        }
    }

    // charge random offset
    rand = [];
    for (let i = 0; i < 170; i++) {
        rand.push(Math.random() * 6);
    }

    img = loadImage('vecE.png');
    img2 = loadImage('vecEGrey.png');

    // negbox7a.resetCharges();
    // negbox7b.resetCharges();
    // negbox7c.resetCharges();    
}

function resetScene() {
    background(bg);
};

function draw() {
    background(bg);

    if (sceneCount == 1) {
        scene1();
    }
    else if (sceneCount == 2) {
        scene2();
    }
    else if (sceneCount == 3) {
        scene3();
    }
    else if (sceneCount == 4) {
        scene4();
    }
    else if (sceneCount == 5) {
        scene5();
    }
    else if (sceneCount == 6) {
        scene6();
    }
    else if (sceneCount == 7) {
        scene7();
    }
    else if (sceneCount == 8) {
        scene8();
    }
    else if (sceneCount == 9) {
        scene9();
    }
}


function scene1() {
    currPosBox = box1;
    currNegBoxes = [];

    drawBox(box1,   "s");
    if (drawScene1) {
        drawBox(box1,   "l");
        drawBox(box1,   "s");
        drawBox(box1,   "r");
        drawCharges(box1);
        
        // E vec
        fill(color.grey);
        noStroke();
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
    }
}

function scene2() {
    currPosBox = box2;
    currNegBoxes = [box2];

    drawBox(box2,   "l");
    drawBox(box2,   "s");
    drawBox(box2,   "r");
    drawGraph(box2);
    drawEqs(box2);
    
    drawCharges(box2);
}

function scene3() { 
    currPosBox = box3;
    currNegBoxes = [box3];

    drawGraph(box3);
    drawEqs(box3);

    drawBox(box3,   "l");
    drawBox(box3,  "s");
    drawCharges(box3);
    drawBox(box3,  "r");
}

function scene4() {
    currPosBox = box4;
    currNegBoxes = [negbox4];
    
    // document.getElementById(Object.keys(togglePairs)[0]).checked ? Object.values(togglePairs)[0].toggleArrows(true): null;
    // document.getElementById("posToggle4").checked ? box4.toggleArrows(true): null;
    // document.getElementById("negToggle4").checked ? negbox4.toggleArrows(true) : null;
    // document.getElementById("purpleToggle4").checked ? negbox4.togglePurple(true) : null;
    // !document.getElementById("screen4").checked ? drawScreen4 = false : null;

    drawGraph(box4);
    drawEqs(box4);
    drawEqs(negbox4);
    
    drawBox(box4,  "s");
    drawCharges(box4);

    drawBox(negbox4,   "s");
    drawCharges(negbox4);
    
    drawBox(box4,  "r");
    drawBox(box4,   "l");

    drawBox(negbox4, "lr");
    drawBox(negbox4, "p");

    if (mouseIsPressed) {
        (mouseX > graphC && mouseX < graphW - 10) ? negbox4.updateX(mouseX) : null;
    }

    drawScreen4? drawScreen(negbox4): null;

    // animating scene 4
    if (animate.scene4 && negbox4.arrowOffsetY >= 0) {
        negbox4.updateArrowOffsetY(-.2);
    }
    if (negbox4.arrowOffsetY <= 0) {
        // negbox4.toggleArrows(false);
    }
}

function scene5() { // 5scene
    currPosBox = box5;
    currNegBoxes = [negbox5];
    // document.getElementById("posToggle5").checked ? box5.toggleArrows(true) : null;
    // document.getElementById("negToggle5").checked ? negbox5.toggleArrows(true) : null;
    // document.getElementById("purpleToggle5").checked ? negbox5.togglePurple(true) : null;
    // !document.getElementById("screen5").checked ? drawScreen5 = false : null;

    drawGraph(box5); 
    drawEqs(box5);
    drawEqs(negbox5);
    
    drawBox(box5,   "s");
    drawCharges(box5);
    drawBox(negbox5,  "s");
    drawCharges(negbox5);

    showPosArrows? drawBox(box5,   "lr"): null;
    (drawBox(negbox5,   "lr"));
    drawBox(negbox5,   "p");

    if (animate.scene5 && negbox5.arrowOffsetY >= 0) {
        negbox5.updateArrowOffsetY(-.2);   
    }
    if (negbox5.arrowOffsetY <= 0) {
        // negbox5.toggleArrows(false); // makes blue neg arrow dissapear
    }
}

function scene6() { // 6scene
    // document.getElementById("posToggle6").checked ? box6.toggleArrows(true) : null;
    // document.getElementById("negToggle6").checked ? negbox6a.toggleArrows(true) : null;
    // document.getElementById("purpleToggle6").checked ? negbox6a.togglePurple(true) : null;
    // document.getElementById("negToggle6b").checked ? negbox6b.toggleArrows(true) : null;
    // !document.getElementById("screen6").checked ? drawScreen6 = false : null;

    currPosBox = box6;
    currNegBoxes = [negbox6a];

    drawBox(box6,  "s")
    drawCharges(box6);
    drawBox(negbox6a,   "s");    
    drawCharges(negbox6a);


    // if (negbox6b.showBox) {
    //     drawEqs(negbox6b);
    // }

    if (negbox6b.showBox) {
        currNegBoxes.push(negbox6b)
        drawBox(negbox6b,   "s");
        drawCharges(negbox6b);
        drawBox(negbox6b,   "lr");
        drawGraph(box6);
        drawEqs(box6);
        drawEqs(negbox6a);
        drawEqs(negbox6b);
        
    }
    else {
        drawGraph(box6);
        drawEqs(box6);
        drawEqs(negbox6a);
    }

    drawBox(negbox6a,   "lr");
    drawBox(box6,   "lr");
    drawBox(box6,   "p");

    // drawScreen6 ? drawScreen(negbox6a): null;

    if (fowardSurface(box6)) {
        drawBox(box6,  "s");
        drawCharges(box6);
    }
    if (fowardSurface(negbox6a)) {
        drawBox(negbox6a,   "s");
        drawCharges(negbox6a);
    }
    if (fowardSurface(negbox6b) && negbox6b.showBox) {
        drawBox(negbox6b,   "s");
        drawCharges(negbox6b);
    }

    if (animate.scene6 && negbox6a.arrowOffsetY >= 0) {
        negbox6a.updateArrowOffsetY(-.2);
    }


}

function scene7() { // 7scene

    currPosBox = box7;
    currNegBoxes = [negbox7a, negbox7b, negbox7c];

    let purpleWeights = getEField();


    drawGraph(box7);

    drawEqs(box7);
    drawEqs(negbox7a);
    drawEqs(negbox7b);
    drawEqs(negbox7c);

    // document.getElementById("posToggle7").checked ? showPosArrows = true : null;
    // document.getElementById("negToggle7").checked ? showNegArrows = true : null;
    // document.getElementById("purpleToggle7").checked ? showPurpleArrows = true : null;

    // document.getElementById("posToggle7").checked ? box7.toggleArrows(true) : null;
    // document.getElementById("negToggle7a").checked ? negbox7a.toggleArrows(true) : null;
    // document.getElementById("negToggle7b").checked ? negbox7b.toggleArrows(true) : null;
    // document.getElementById("negToggle7c").checked ? negbox7c.toggleArrows(true) : null;
    // document.getElementById("purpleToggle7").checked ? negbox7a.togglePurple(true) : null;
    // !document.getElementById("screen7").checked ? drawScreen7 = false : null;
    
    drawBox(box7,   "s");
    drawCharges(box7);

    drawBox(box7,   "l");
    drawBox(negbox7a,   "s");
    drawCharges(negbox7a);

    drawBox(negbox7a,   "p");
    drawBox(negbox7b,   "s");
    drawCharges(negbox7b);

    drawBox(negbox7b,   "p");
    drawBox(negbox7c,   "s");
    drawCharges(negbox7c);

    drawBox(negbox7c,   "p");
    drawBox(box7,   "r");

    drawBox(negbox7a,   "lr");
    drawBox(negbox7b,   "lr");
    drawBox(negbox7c,   "lr");

    if (fowardSurface(box7)) {
        drawBox(box7,   "s");
        drawCharges(box7);
    }
    if (fowardSurface(negbox7a)) {
        drawBox(negbox7a,   "s");
        drawCharges(negbox7a);
    }
    if (fowardSurface(negbox7b)) {
        drawBox(negbox7b,   "s");
        drawCharges(negbox7b);
    }
    if (fowardSurface(negbox7c)) {
        drawBox(negbox7c,   "s");
        drawCharges(negbox7c);
    }
}


function fowardSurface (box) {
    if (mouseX > box.x && mouseX < box.x + 64) {
        return true
    }
    else {
        return false
    }
}

function scene8() { //8scene
    // resetToggles();

    currPosBox = box8;
    currNegBoxes = [negbox8];
    drawGraph(box8);
    drawEqs(box8);
    drawEqs(negbox8);

    drawBox(box8, "sl");
    drawCharges(box8);
    drawBox(negbox8, "plrs");
    drawBox(box8, "r");
    drawCharges(negbox8);
    drawBox(negbox8, "p");
}

function scene9() {
    drawGraph(box8);
}

function toggleBox() {
    resetCharges(negbox6b)
    // if (!toggleNegBox6) {
        
        toggleNegBox6
    // }
    if (!negbox6b.showBox) {
        negbox6b.toggleShowBox(true);
        currNegBoxes.push(negbox6b);

        document.getElementById('negbox6').textContent = 'Remove surface';
    }
    else {
        negbox6b.toggleShowBox(false);
        if (currNegBoxes.length > 1) {

            currNegBoxes.pop();
        }
  
        document.getElementById('negbox6').textContent = 'Add surface';
    }
    
    
}

function resetCharges(box) {
    for (let r = 0; r < chargeCoordinates.length; r++) {
        for (let c = 0; c < 5; c++) {

            // positive charges
            let chance = Math.floor(Math.random() * 100);
            if (chance <= box.chargeAmount) {
                box.showChargeGrid[r][c] = 1;
            } else {
                box.showChargeGrid[r][c] = 0;
            }

            // negative charges
            chance = Math.floor(Math.random() * 100);
            if (chance <= box.chargeAmount) {
                box.showChargeGrid[r][c] = 1;
            } else {
                box.showChargeGrid[r][c] = 0;
            }
        }
    }
}

function flowCharges() {
    if (flowDirection == "right") {
        negbox7a.updateCharge(15);
        resetCharges(negbox7a);
        negbox7b.updateCharge(25);
        resetCharges(negbox7b);
        negbox7c.updateCharge(40);
        resetCharges(negbox7c);
        flowDirection = "left";
    }
    else if (flowDirection == "left") {
        negbox7a.updateCharge(40);
        resetCharges(negbox7a);
        negbox7b.updateCharge(25);
        resetCharges(negbox7b);
        negbox7c.updateCharge(15);
        resetCharges(negbox7c);
        flowDirection = "right";
    }
}

function drawEqs(box, loc) {
    // E = 5.56 x 10^6 (p)
    // Math.pow(x, y) returns x^y
    // let ef = Math.pow(10,6)
    
    // charge density: box.chargeAmount / max charge

    // example
    // E = 5.56 x 10^6
    // charge density: .1 microC/cm^2
    // electric field: 5.56 x 10^5
    // if less than 1: 10^5
    // if 1: 10^5

    noStroke();

    let max = 80;
    let chargeDensity = (box.chargeAmount / 80).toFixed(3);
    let eField = (5.56 * chargeDensity).toFixed(3);
    if (chargeDensity < 1) {
        // eField += + "x 10^5";
    }
    else {
        // eField += + "x 10^6";
    }

    // 
    // Electric Field: 

    textSize(9.4);
    // createTeX(
    //     `y(t)=\\frac{1}{2}-\\frac{1}{\\pi}\\ \\sum_{k=1}^{\\textcolor{blue}{${0}}}\\frac{(-1)^{{\\textcolor{blue}{${0}}}}\\sin\\left(2\\pi \\cdot {\\textcolor{blue}{${0}}} \\cdot f  \\cdot t\\right)}{\\textcolor{blue}{${0}}}`
    // );
    // createTeX(
    //     `\\frac{µC}{cm^2}`
    // );

    fill('FFF')
    text(` ${chargeDensity} µC/cm^2`, box.x + 46, chargeDensityY);
    text(` ${eField} V/cm`, box.x + 46, eFieldY);
}

function drawAxis() {
    stroke(color.grey); // axis color
    strokeWeight(1);
    
    canvas.drawingContext.setLineDash([10, 5]);

    line(graphX, graphY, graphW, graphY); // hor
    line(graphC, graphY - 66, graphC, graphY + 66); // vert

    noStroke();

    fill(color.grey);
    image(img2, graphC - 10, graphY + 68, img.width / 2, img.height / 2);

    
    text('x', graphW + 10, graphY);


    canvas.drawingContext.setLineDash([]);

    let size = 7;
    stroke(color.grey);

    // y axis arrow
    line(graphC, graphY - 66, graphC - size, graphY - 66 + size);
    line(graphC, graphY - 66, graphC + size, graphY - 66 + size);

    // x axis arrow
    line(graphW, graphY, graphW - size, graphY - size);
    line(graphW, graphY, graphW - size, graphY + size);


}

function drawGraph(box) {
    let graphEnd = graphC + graphW / 2 - 46;
    
    // if (sceneCount == 7) {
    //     graphEnd += 12;
    // }

    drawAxis();
    strokeWeight(2);
    
    let posHeights = [];
    let negHeights = [];
    let purpleHeights = [];
    let negHeightsTotal = 0;

    let posXPoints;
    let negXPoints;
    let purpleXPoints;

    // pos graph lines
    posXPoints = [graphX, graphC];
    posHeights.push(currPosBox.chargeAmount, -currPosBox.chargeAmount);
    
    // neg graph lines
    // left side
    if (currNegBoxes[0]) {
        negXPoints = [graphX];
        // populate negative box x positions
        for (let i = 0; i < currNegBoxes.length; i++) {
            negXPoints.push(float(currNegBoxes[i].x));
        }

        // right side
        // populate negative graph line heights
        negHeights.push(-currNegBoxes[0].chargeAmount);

        for (let i = 0; i < currNegBoxes.length; i++) {
            negHeightsTotal += currNegBoxes[i].chargeAmount;
            negHeights.push(float(negHeightsTotal));
        }

        // for positive left side - make the last one the negative total of the right side
        negHeights[0] = -negHeights[negHeights.length - 1];


        // if (sceneCount == 7 && flowDirection == "left") {
        //     let temp = negHeights[1];
        //     negHeights[1] = negHeights[3];
        //     negHeights[3] = 0;
        // }

        // volume
        netHeightsTotal = 0;


        // purple graph lines
        if (currNegBoxes.length >= 1) {
            purpleXPoints = [graphX, graphC, negXPoints[1]];
            purpleHeights.push((posHeights[0] + negHeights[0])); // index 0
            purpleHeights.push((-posHeights[0] + negHeights[0])); // index 1
            purpleHeights.push((-posHeights[0] + negHeights[1])); // index 2
        }
        if (currNegBoxes.length >= 2) {
            purpleXPoints.push(negXPoints[2]);
            purpleHeights.push((-posHeights[0] + negHeights[2]));
        }
        if (currNegBoxes.length >= 3) {
            if (flowDirection == "right") {
                // right
                purpleXPoints.push(negXPoints[3]);
                purpleHeights.push((-posHeights[0] + negHeights[3]));
            }
            else if (flowDirection == "left") {
                // left
                purpleXPoints.push(negXPoints[3]);
                purpleHeights.push((-posHeights[0] + negHeights[3]));
            }
        }

        if (sceneCount == 5 && negbox5.chargeAmount == 0) {
            purpleHeights[1] = 0;
            purpleHeights[2] = 0;
        }

        graphNorm = 1.4;
        // standardize the heights
        for (let i = 0; i < posHeights.length; i++) {
            posHeights[i] = posHeights[i] / graphNorm;
        }
        for (let i = 0; i < negHeights.length; i++) {
            negHeights[i] = negHeights[i] / graphNorm;
        }
        for (let i = 0; i < purpleHeights.length; i++) {
            purpleHeights[i] = purpleHeights[i] / graphNorm;
        }

        if (box.charge == "pos" && showPosArrows) {
            drawLines(posXPoints, posHeights, color.pos, "pos", false, false);
        }
        if ((sceneCount == 3 && box3.charge == "neg") && showNegArrows) {
            drawLines(negXPoints, negHeights, color.neg, "neg", false, false);
        }
        
        if ((sceneCount > 3) && showNegArrows) {
            drawLines(negXPoints, negHeights, color.neg, "neg", false, false);
        }
        
        if (sceneCount != 1 && sceneCount != 2 && sceneCount != 3 && showPurpleArrows) {
            drawLines(purpleXPoints, purpleHeights, color.purple, "purple", false, false);
        }
    }

    noStroke();
    fill('FFF')
    text("Charge Density:", 240, chargeDensityY);
    text("Electric Field:", 240, eFieldY);

    if (sceneCount > 3) {

    
        text("Electric Field:", 240, eFieldY + 420);
    
        let eFieldArray = getEField();
    
        let gap = 8;
        for (let i = 0; i < currNegBoxes.length; i++) {
            let chargeDen = eFieldArray[i + 1];
    
            let chargeDensity = (chargeDen / 80).toFixed(3);
            let eField = (5.56 * chargeDensity).toFixed(3);
    
            text(` ${eField} V/cm`, box.x + gap, eFieldY + 420);
            gap += 72;
        }
        gap = 0;
    }
}

function drawSlope(points, heights, color) {
    stroke(color);
    for (i = 0; i < points.length; i++) {
        line(points[i], heights[i], points[i + 1], heights[i + 1]); // line
    }
}

// function drawLines(points, rawHeights, color, drawMid) {
//     let graphDivisor = 2;
//     let unit = 1 / graphDivisor;

//     let heights = []

//     for (let i = 0; i < rawHeights.length; i++) {
//         heights[i] = (unit * rawHeights[i]) + graphY;
//     }

//     let graphEnd = graphC + graphW / 2 - 46;
//     stroke(color);
//     let drawConnecting = true;

//     for (i = 0; i < points.length; i++) {
//         if (sceneCount == 8 && i == points.length - 2 && color != color.pos) {
//             drawConnecting = false;
//         }
//         if (i == points.length - 1) {
//             if (sceneCount == 8 && (color == color.neg || color == color.purple)) {
//                 line(points[i], heights[i - 1], negbox8.x + negbox8.w, heights[i]); // line
//             }
//             // last graph line
//             else {
//                 line(points[i], heights[i], graphEnd, heights[i]); // line
//             }
//         }
//         else {
//             line(points[i], heights[i], points[i + 1], heights[i]); // line
//             if (negbox4.x > graphC + 4 && sceneCount == 4) {
//                 line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
//             }
//             else if (drawConnecting && (sceneCount != 4 || color != color.purple)) {

//                 line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
//             }
//         }
//     }
// }

function drawLines(points, rawHeights, color, colorString, drawMid) {
    let graphDivisor = 2;
    let unit = 1 / graphDivisor;

    let heights = []

    for (let i = 0; i < rawHeights.length; i++) {
        heights[i] = (unit * rawHeights[i]) + graphY;
    }

    let graphEnd = graphC + graphW / 2 - 46;
    stroke(color);
    let drawConnecting = true;

    for (i = 0; i < points.length; i++) {
        if (sceneCount == 8 && i == points.length - 2 && colorString != "pos") {
            drawConnecting = false;
        }
        if (i == points.length - 1) {
            if (sceneCount == 8 && (colorString == "neg" || colorString == "purple")) {
                line(points[i], heights[i - 1], negbox8.x + negbox8.w, heights[i]); // line
            }
            // last graph line
            else {
                line(points[i], heights[i], graphEnd, heights[i]); // line
            }
        }
        else {
            line(points[i], heights[i], points[i + 1], heights[i]); // line
            // if (drawMid) {
            if (negbox4.x > graphC + 4 && sceneCount == 4) {
                line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
            }

            // else if (currNegBoxes[1].x > graphC + 4 && sceneCount ==5) {
            //     if (drawConnecting) {
            //         // line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
            //     }
            // }

            // else if (sceneCount != 4 && sceneCount != 5) {
            //     // line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
            // }
            // }
            // else {
            else if (drawConnecting && (sceneCount != 4 || color != color.purple)) {

                line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
            }
            // }
        }
    }
}

function reverseCharge() {
    box3.reverseCharge();
}

function animateScreen() {
    showPosArrows = true;
    showNegArrows = true;
    showPurpleArrows = true;

    if (sceneCount == 4) {
        document.getElementById("posToggle4").checked = true;
        document.getElementById("negToggle4").checked = true;
        document.getElementById("purpleToggle4").checked = true;

        if (document.getElementById('showScreen4').textContent == 'Reset') {
            animate.scene4 = false;
            animated.scene4 = false;
            currPosBox.updateMinusLineWeight(negbox4.chargeAmount);
            negbox4.updateArrowOffsetY(14);
            document.getElementById('showScreen4').textContent = 'Show Screening';
        }
        else {
            // scene4
            if (animate.scene4 == false) {
                animate.scene4 = true;
                document.getElementById('showScreen4').textContent = 'Reset';
            }

            if (animated.scene4 == false) {
                setTimeout(() => {
                    currPosBox.updateMinusLineWeight(-negbox4.chargeAmount);
                    animated.scene4 = true;
                    
                }, "1200");
                // animated.scene4 = true;
            }
            
        }
    }

    if (sceneCount == 5) {
        document.getElementById("posToggle5").checked = true;
        document.getElementById("negToggle5").checked = true;
        document.getElementById("purpleToggle5").checked = true;

        if (document.getElementById('showScreen5').textContent == 'Reset') {
            animate.scene5 = false;
            animated.scene5 = false;
            currPosBox.updateMinusLineWeight(negbox5.chargeAmount);
            negbox5.updateArrowOffsetY(14);
            document.getElementById('showScreen5').textContent = 'Show Screening';
        }
        else if (negbox5.chargeAmount > 0) {
            // button = showScreening and negbox 5 has charge

            if (animate.scene5 == false) {
                animate.scene5 = true;
                document.getElementById('showScreen5').textContent = 'Reset';
            }

            if (animated.scene5 == false) {
                setTimeout(() => {
                    currPosBox.updateMinusLineWeight(-negbox5.lineWeight);
                    animated.scene5 = true;
                }, "1200");

            }
        }
    }

    if (sceneCount == 6) {
        if (animate.scene6 == false) {
            animate.scene6 = true;
        }

        if (animated.scene6 == false) {
            setTimeout(() => {
                currPosBox.updateMinusLineWeight(-negbox6a.lineWeight);
                animated.scene6 = true;
            }, "1200");

        }
    }


}

function drawSurface(box) {
    strokeWeight(1.4);
    let surfaceOpacity = 0;

    if (box == negbox6b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == negbox7b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == negbox7c) {
        surfaceOpacity = surfaceOpacity + 80;
    }

    // surface color
    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
        (box.charge == "pos") ? stroke(color.pos) : stroke(color.neg);
        // (box.charge == "pos") ? fill("#2F2121"): fill("#1D252B");
        fill(bg);
    }
    else {
        (box.charge == "pos") ? stroke(color.pos) : stroke(color.neg);
        // (box.charge == "pos") ? fill("#2F2121") : fill("#1D252B");
        fill(bg);
    }

    beginShape();
    vertex(box.x, box.y);
    vertex(box.x, box.y + box.h);
    vertex(box.x + box.w, box.y + box.h);
    vertex(box.x + box.w, box.y);
    endShape(CLOSE);
    

    // box side
    beginShape();
    vertex(box.x + box.w, box.y + box.h); // left top
    vertex(box.x + box.w, box.y); // left bottom
    vertex(box.x + box.w + box.d, box.y + box.a); // top right
    vertex(box.x + box.w + box.d, box.y + box.h + box.a);
    endShape(CLOSE);

    // box top
    beginShape();
    vertex(box.x, box.y); // bottom left
    vertex(box.x + box.w, box.y); // bottom right
    vertex(box.x + box.w + box.d, box.y + box.a); // top right
    vertex(box.x + box.d, box.y + box.a); // top left
    endShape(CLOSE);
}

function drawMidzone(box) {
    if (box.midzone) {
        // Mid Zone
        color = color.purple;
        fill(color[0], color[1], color[2]); // purple
        noStroke();

        let postEnd = 330;
        let offset = 20;

        // box front
        beginShape();
        vertex(postEnd, box.y); // right top
        vertex(postEnd, box.y + box.h); // right bottom
        vertex(box.x - offset + box.w, box.y + box.h);  // left bottom
        vertex(box.x - offset + box.w, box.y); // left top
        endShape(CLOSE);

        // box top
        beginShape();
        vertex(postEnd, box.y); // bottom left
        vertex(box.x - offset + box.w, box.y); // bottom right
        vertex(box.x- offset + box.w + box.d, box.y + box.a); // top right
        vertex(postEnd + box.d, box.y + box.a); // top left
        endShape(CLOSE);
        // filter(BLUR);
    }
}

function drawBox (box, sides) {
    noStroke();
    fill(color.grey);

    let screenAmount = 0;

    if (sceneCount != 1) {
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
    }

    if (sides.includes("p")) {
        drawBoxArrows(box, false, "p");
    }

    if (sides.includes("l") && box.showArrows) {
        drawBoxArrows(box, false, "l");
    }

    if (sides.includes("s")) {
        drawSurface(box);
    }
    
    if (sides.includes("r") && box.showArrows) {
        drawBoxArrows(box, false, "r");
    }
}

function drawCharges(box) {
    let showCharges = box.showChargeGrid;
    let chargeSize = 11;
    let signSize = chargeSize - 4;
    let chargeOpacity = 100;
    let signOpacity = 80;

    noStroke();

    let X = box.x - 6;
    let Y = box.y - 70;
    let Px = 15;
    let Py = 16;

    if (box.charge == "pos") {
        fill(color.pos[0], color.pos[1], color.pos[2], chargeOpacity);
        // if (sceneCount == 1 || sceneCount == 2) {
            
        // }
        // else if (sceneCount == 3) {
        //     fill(color.pos[0], color.pos[1], color.pos[2], chargeOpacity);
        // }
        // else {
        //     fill(color.pos[0], color.pos[1], color.pos[2], chargeOpacity);
        // }
    }
    else if (box.charge == "neg") {
        fill(color.neg[0], color.neg[1], color.neg[2], chargeOpacity);
        // if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
        //     fill(color.neg[0], color.neg[1], color.neg[2], chargeOpacity);
        // }
        // else {
        //     fill(color.neg[0], color.neg[1], color.neg[2], chargeOpacity);
        // }
    }

    if (box == negbox8) {
        Px = 0;
        Py = 18;
        let margin = 12;

        for (let r = 0; r < 16; r++) {
            Px = 0;
            // for each column
            for (let c = 0; c < 5; c++) {
                Px = box.w / 5.5;
                margin = box.w/8;
                
                let chargeX = margin + box.x + Px * c;
                let chargeY = 14 + box.y + Py * r;

                noStroke();
                circle(chargeX, chargeY, chargeSize);
                strokeWeight(1);

                if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                    stroke(color.negsign[0], color.negsign[1], color.negsign[2], signOpacity); // neg sign
                } 
                else {
                    stroke(color.negsign[0], color.negsign[1], color.negsign[2],  signOpacity); // neg sign
                }

                // cross line
                line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY)
                // up line
                line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
            }
        }
    }
    else {
        chargeCoordinates = [
            [[0, 0], [0, 0], [0, 0], [0, 0], [X + Px * 5 + rand[0], Y + Py * 1 + rand[1]]], // 1

            [[0, 0], [0, 0], [0, 0], [X + Px * 4 + rand[2], Y + Py * 2 + rand[3]], [X + Px * 5 + rand[4], Y + Py * 2 + rand[5]]], // 2

            [[0, 0], [0, 0], [X + Px * 3 + rand[6], Y + Py * 3 + rand[7]], [X + Px * 4 + rand[8], Y + Py * 3 + rand[9]], [X + Px * 5 + rand[10], Y + Py * 3 + rand[11]]], // 3

            [[0, 0], [X + Px * 2 + rand[12], Y + Py * 4 + rand[13]], [X + Px * 3 + rand[14], Y + Py * 4 + rand[15]], [X + Px * 4 + rand[16], Y + Py * 4 + rand[17]], [X + Px * 5 + rand[18], Y + Py * 4 + rand[19]]], // 4

            [[X + Px + rand[20], Y + Py * 5 + rand[21]], [X + Px * 2 + rand[22], Y + Py * 5 + rand[23]], [X + Px * 3 + rand[24], Y + Py * 5 + rand[25]], [X + Px * 4 + rand[26], Y + Py * 5 + rand[27]], [X + Px * 5 + rand[28], Y + Py * 5+rand[29]]], // 5

            [[X + Px + rand[30], Y + Py * 6 + rand[31]], [X + Px * 2 + rand[32], Y + Py * 6 + rand[33]], [X + Px * 3 + rand[34], Y + Py * 6 + rand[35]], [X + Px * 4 + rand[36], Y + Py * 6 + rand[37]], [X + Px * 5 + rand[38], Y + Py * 6 + rand[39]]], // 6

            [[X + Px + rand[40], Y + Py * 7 + rand[41]], [X + Px * 2 + rand[42], Y + Py * 7 + rand[43]], [X + Px * 3 + rand[44], Y + Py * 7 + rand[45]], [X + Px * 4 + rand[46], Y + Py * 7 + rand[47]], [X + Px * 5 + rand[48], Y + Py * 7 + rand[49]]], // 7

            [[X + Px + rand[50], Y + Py * 8 + rand[51]], [X + Px * 2 + rand[52], Y + Py * 8 + rand[53]], [X + Px * 3 + rand[54], Y + Py * 8 + rand[55]], [X + Px * 4 + rand[56], Y + Py * 8 + rand[57]], [X + Px * 5 + rand[58], Y + Py * 8 + rand[59]]], // 8

            [[X + Px + rand[60], Y + Py * 9 + rand[61]], [X + Px * 2 + rand[62], Y + Py * 9 + rand[63]], [X + Px * 3 + rand[64], Y + Py * 9 + rand[65]], [X + Px * 4 + rand[66], Y + Py * 9 + rand[67]], [X + Px * 5 + rand[68], Y + Py * 9 + rand[69]]], // 9

            [[X + Px + rand[70], Y + Py * 10 + rand[71]], [X + Px * 2 + rand[72], Y + Py * 10 + rand[73]], [X + Px * 3 + rand[74], Y + Py * 10 + rand[75]], [X + Px * 4 + rand[76], Y + Py * 10 + rand[77]], [X + Px * 5 + rand[78], Y + Py * 10+rand[79]]], // 10

            [[X + Px + rand[80], Y + Py * 11 + rand[81]], [X + Px * 2 + rand[82], Y + Py * 11 + rand[83]], [X + Px * 3 + rand[84], Y + Py * 11 + rand[85]], [X + Px * 4 + rand[86], Y + Py * 11 + rand[87]], [X + Px * 5 + rand[88], Y + Py * 11 + rand[89]]], // 11

            [[X + Px + rand[90], Y + Py * 12 + rand[91]], [X + Px * 2 + rand[92], Y + Py * 12 + rand[93]], [X + Px * 3 + rand[94], Y + Py * 12 + rand[95]], [X + Px * 4 + rand[96], Y + Py * 12 + rand[97]], [X + Px * 5 + rand[98], Y + Py * 12 + rand[99]]], // 12

            [[X + Px+rand[100], Y + Py * 13+rand[101]], [X + Px * 2+rand[102], Y + Py * 13+rand[103]], [X + Px * 3+rand[104], Y + Py * 13+rand[105]], [X + Px * 4+rand[106], Y + Py * 13+rand[107]], [X + Px * 5 + rand[108], Y + Py * 13+rand[109]]], // 13

            [[X + Px+rand[110], Y + Py * 14+rand[111]], [X + Px * 2+rand[112], Y + Py * 14+rand[113]], [X + Px * 3+rand[114], Y + Py * 14+rand[115]], [X + Px * 4+rand[116], Y + Py * 14+rand[117]], [X + Px * 5 + rand[118], Y + Py * 14+rand[119]]], // 14

            [[X + Px+rand[120], Y + Py * 15+rand[121]], [X + Px * 2+rand[122], Y + Py * 15+rand[123]], [X + Px * 3+rand[124], Y + Py * 15+rand[125]], [X + Px * 4+rand[126], Y + Py * 15+rand[127]], [X + Px * 5 + rand[128], Y + Py * 15+rand[129]]], // 15

            [[X + Px+rand[130], Y + Py * 16+rand[131]], [X + Px * 2+rand[132], Y + Py * 16+rand[133]], [X + Px * 3+rand[134], Y + Py * 16+rand[135]], [X + Px * 4+rand[136], Y + Py * 16+rand[137]], [X + Px * 5 + rand[138], Y + Py * 16+rand[139]]], // 16

            [[X + Px+rand[140], Y + Py * 17+rand[141]], [X + Px * 2+rand[142], Y + Py * 17+rand[143]], [X + Px * 3+rand[144], Y + Py * 17+rand[145]], [X + Px * 4+rand[146], Y + Py * 17+rand[147]], [X + Px * 5 + rand[148], Y + Py * 17+rand[149]]], // 17

            [[X + Px+rand[150], Y + Py * 18+rand[151]], [X + Px * 2+rand[152], Y + Py * 18+rand[153]], [X + Px * 3+rand[154], Y + Py * 18+rand[155]], [X + Px * 4+rand[156], Y + Py * 18+rand[157]], [0, 0]], // 18

            [[X + Px+rand[158], Y + Py * 19+rand[159]], [X + Px * 2+rand[160], Y + Py * 19+rand[161]], [X + Px * 3+rand[162], Y + Py * 19+rand[163]], [0, 0], [0, 0]], // 19

            [[X + Px + rand[164], Y + Py * 20 + rand[165]], [X + Px * 2 + rand[166], Y + Py * 20 + rand[167]], [0, 0], [0, 0], [0, 0]], // 20

            [[X + Px + rand[168], Y + Py * 21 + rand[169]], [0, 0], [0, 0], [0, 0], [0,0]] // 21
        ]

        // for each row (18)
        for (let r = 0; r < chargeCoordinates.length; r++) {
            // for each column
            for (let c = 0; c < 5; c++) {

                let chargeX = chargeCoordinates[r][c][0];
                let chargeY = chargeCoordinates[r][c][1];
                
                if (showCharges[r][c] == 1) {
                        noStroke();
                        circle(chargeX, chargeY, chargeSize);
                        strokeWeight(1);

                        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                            stroke(color.negsign[0], color.negsign[1], color.negsign[2], signOpacity + 30); // neg sign
                        } 
                        else {
                            stroke(color.negsign[0], color.negsign[1], color.negsign[2], signOpacity); // neg sign
                        }

                        // cross line
                        line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY);
                        if (box.charge == "pos") {
                            // up line
                            line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
                        }
                    }
                }
            }

            fill(bg);
            noStroke();
            // hide corners
            rect(0, 0, 30, 30);
    }
}

function drawScreen(box) {
    fill(color.bg[0], color.bg[1], color.bg[2], 255);
    noStroke();
    let gap = 20;

    if (sceneCount == 5) {
        fill(color.bg[0], color.bg[1], color.bg[2], 180);  
    }

    // right
    beginShape();
    vertex(box.x + box.w, box.y); // left top
    vertex(box.x + box.w, box.y + box.h); // left bottom
    vertex(windowWidth, box.y + box.h); // right bottom
    vertex(windowWidth, box.y); // right top
    endShape(CLOSE);
    // left
    beginShape();
    vertex(0, box.y); // left top
    vertex(0, box.y + box.h); // left bottom
    vertex(graphC - gap + 11, box.y + box.h); // right bottom
    vertex(graphC - gap + 11, box.y); // right top
    endShape(CLOSE);
}

function setScreenAmount() {
    // calculate screening amount
    let totalPosCharge = currPosBox.chargeAmount;
    let totalNegCharge = 0;
    for (let i = 0; i < currNegBoxes.length; i++) {
        totalNegCharge += currNegBoxes[i].chargeAmount;
    }

    screenAmount = 255 - ((totalNegCharge / totalPosCharge) * 255);
}

function drawBoxArrows(box, showScreen, sides) {

    let rows;
    let spaceBetween;
    let spacing;
    let offsetX = 0;
    let offsetY = 0;
    let fillAmount;

    setScreenAmount();


    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
        fillAmount = 255; // 3d fillamount
        rows = 5;
        spaceBetween = rows * 10;
        spacing = 40;
        screenAmount = 0;
    }
    else {
        fillAmount = 240; // 2d fillamount
        rows = 4;
        spaceBetween = rows * 17;
        spacing = 20;
    }
    
    // for each row
    for (let r = 0; r < rows; r++) {
        fillAmount = 255;

        // for each set in z axis
        for (let i = 0; i < 4; i++) {
            if (sceneCount != 1 && sceneCount != 2 && sceneCount != 3) {
                if (sides.includes("p") && showPurpleArrows) {
                    drawSets(box, "purple", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }
            }

            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) { // 3D
                if (box.charge == "pos" && showPosArrows) {
                    drawSets(box, "pos", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }

                if (box.charge == "neg" && showNegArrows) {
                    drawSets(box, "neg", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }
            }
            else { //2D
                if (box.charge == "pos" && showPosArrows && box.showArrows) {

                    drawSets(box, "pos", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }

                if (box.charge == "neg" && showNegArrows && box.showArrows) {
                    drawSets(box, "neg", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }
            }


            offsetX += 20;
            offsetY -= 24;
            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                if (i == 0) {
                    fillAmount -= fillAmount/3; // change for 3d // 40 - 255
                }
                else if (i == 1) {
                    fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
                }
                else if (i == 2) {
                    fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
                }
                else if (i == 3) {
                    fillAmount -= fillAmount / 3; // change for 3d // 40 - 255
                }
            }
            else {
                fillAmount = 0;
                screenAmount = 0;
            }
        }
        spacing += spaceBetween;
        offsetX = 0;
        offsetY = 0;
        zRow = 1;

        // reset fillAmount
        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
            fillAmount = 255; // 3d fillamount
        }
        else {
            fillAmount = 255;
            setScreenAmount();
        }
    }
    spacing = spaceBetween - 6;
}

// currfunction
function drawArrow(x1, x2, y, arrowLoc, arrowDir, color, lineWeight, fillAmount) {
    // draw line + triangle together
    strokeCap(SQUARE);
    strokeWeight(lineWeight);
    stroke(color[0], color[1], color[2], fillAmount);

    let triangleSize = 12;
    
    if (arrowLoc == "l" && arrowDir == "l") {
        line(x1 + triangleSize, y, x2, y);
        fill(color[0], color[1], color[2], fillAmount);
        noStroke();
        drawTriangle(triangleSize, arrowDir, x1, y);
    }
    else if (arrowLoc == "l" && arrowDir == "r") {
        line(x1, y, x2 - triangleSize, y);
        fill(color[0], color[1], color[2], fillAmount);
        noStroke();
        drawTriangle(triangleSize, arrowDir, x2 - 140 + triangleSize, y);
    }
    else if (arrowLoc == "r" && arrowDir == "l") {
        line(x1, y, x2 - triangleSize, y);
        fill(color[0], color[1], color[2], fillAmount);
        noStroke();
        drawTriangle(triangleSize, arrowDir, x2 -140, y);
    }
    else if (arrowLoc == "r" && arrowDir == "r") {
        line(x1, y, x2 - triangleSize, y);
        fill(color[0], color[1], color[2], fillAmount);
        noStroke();
        drawTriangle(triangleSize, arrowDir, x2, y);
    }
}

function getEField() {
    let fieldCharges = [];
        // left = pos - all neg

        // first =  pos + neg1 + neg2 + neg 3
        // second = pos - (neg 1)
        // third = pos - (neg 1 + neg 2)

        // last = pos - all neg

    //     total += currNegBoxes[i].chargeAmount;
    //     purpleWeights.unshift( total);

    let pos = currPosBox.chargeAmount;

    let neg1 = currNegBoxes[0].chargeAmount;
    console.log(neg1);

    let neg2 = 0;
    let neg3 = 0;

    if (currNegBoxes[1]) {
        neg2 = currNegBoxes[1].chargeAmount;
        console.log(neg2);
    }

    if (currNegBoxes[2]) {
        neg3 = currNegBoxes[2].chargeAmount;
        console.log(neg3);
    }

    // left = pos - all neg
    fieldCharges.push(pos - (neg1 + neg2 + neg3));
    // first =  pos + neg1 + neg2 + neg 3
    fieldCharges.push(int(pos) + int(neg1) + int(neg2) + int(neg3));
    // second = pos - (neg 1)
    fieldCharges.push(pos - neg1);
    // third = pos - (neg 1 + neg 2)
    fieldCharges.push(pos - (neg1 + neg2));
    // last = pos - all neg
    fieldCharges.push(pos - (neg1 + neg2 + neg3));
    



    // if (currNegBoxes.length >= 3) {
    //     let total = pos + currNegBoxes[0].chargeAmount + currNegBoxes[1].chargeAmount + currNegBoxes[2].chargeAmount;
    //     purpleWeights.push(total);
    // }
    // if (currNegBoxes.length >= 2) {
    //     let total = pos - (currNegBoxes[1].chargeAmount);
    //     purpleWeights.push(total);
    // }
    // if (currNegBoxes.length >= 1) {
    //     let total = pos - (currNegBoxes[0].chargeAmount + currNegBoxes[1].chargeAmount);
    //     purpleWeights.push(total);
    // }

    // if (currNegBoxes.length >= 1) {
    //     purpleWeights.push((pos + currNegBoxes[0].chargeAmount)); 
    //     // purpleWeights.push((pos + currNegBoxes[1].chargeAmount)); 
    // }
    // if (currNegBoxes.length >= 2) {
    //     purpleWeights.push((pos + currNegBoxes[1].chargeAmount));
    // }
    // if (currNegBoxes.length >= 3) {
    //     if (flowDirection == "right") {
    //         // right
    //         purpleWeights.push((pos + currNegBoxes[2].chargeAmount));
    //     }
    //     else if (flowDirection == "left") {
    //         // left
    //         purpleWeights.push((pos + currNegBoxes[2].chargeAmount));
    //     }
    // }

    // for (let i = 0; i < currNegBoxes.length; i++) {


    // }
    console.log(fieldCharges);
    return fieldCharges;
}

function drawSets(box, type, fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY) {
    let thickScale = .20;
    let gap = 3;
    let lineSize = 255;

    let currAnimate;
    let currAnimated;
    let currNegBox;


    (sceneCount == 4) ? currAnimate = animate.scene4 : null;
    (sceneCount == 4) ? currAnimated = animated.scene4 : null;
    (sceneCount == 4) ? currNegBox = negbox4 : null;

    (sceneCount == 5) ? currAnimate = animate.scene5 : null;
    (sceneCount == 5) ? currAnimated = animated.scene5 : null;
    (sceneCount == 5) ? currNegBox = negbox5 : null;

    (sceneCount == 6) ? currAnimate = animate.scene6 : null;
    (sceneCount == 6) ? currAnimated = animated.scene6 : null;
    (sceneCount == 6) ? currNegBox = negbox6a : null;

    (sceneCount == 7) ? currAnimate = animate.scene7 : null;
    (sceneCount == 7) ? currAnimated = animated.scene7 : null;
    (sceneCount == 7) ? currNegBox = negbox7a : null;

    if (type == "pos") {
        let lineWeight = currPosBox.chargeAmount / chargeDivisor * thickScale;
        // pos left lines
        lineWeight = currPosBox.chargeAmount / chargeDivisor * thickScale;
        if (sides.includes("l") && currPosBox.chargeAmount != 0 && lineWeight != 0) {


            if (sceneCount == 4 || sceneCount == 5 || sceneCount == 6 || sceneCount == 7) {
                if (!currAnimated) {
                    let x1 = currPosBox.c - lineSize - gap + offsetX;
                    let x2 = currPosBox.c - gap + offsetX - 2;
                    let y = currPosBox.y + spacing + offsetY;

                    drawArrow(x1, x2, y, "l", "l", color.pos, lineWeight, fillAmount);
                }
                else if (currAnimated) {
                    lineWeight = (currPosBox.chargeAmount - currNegBox.chargeAmount) / chargeDivisor * thickScale;
                    let x1 = currPosBox.c - lineSize - gap + offsetX;
                    let x2 = currPosBox.c - gap + offsetX - 2;
                    let y = currPosBox.y + spacing + offsetY;

                    if (lineWeight > 0) {
                        drawArrow(x1, x2, y, "l", "l", color.pos, lineWeight, fillAmount);
                    }
                }
            }
            else {  
                let x1 = currPosBox.c - lineSize - gap + offsetX;
                let x2 = currPosBox.c - gap + offsetX - 2;
                let y = currPosBox.y + spacing + offsetY;

                drawArrow(x1, x2, y, "l", "l", color.pos, lineWeight, fillAmount);
            }
        }  
        
        
        // pos right lines
        if (sides.includes("r") && currPosBox.chargeAmount != 0 && lineWeight != 0) {
            if (sceneCount == 4 || sceneCount == 5 || sceneCount == 6 || sceneCount == 7) {
                if (!currAnimated) {
                    lineWeight = currPosBox.chargeAmount / chargeDivisor * thickScale;
                    let x1 = gap + currPosBox.c + offsetX;
                    let x2 = gap + currPosBox.c + lineSize + offsetX;
                    let y = currPosBox.y + spacing + offsetY;

                    drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);
                }
                else if (currAnimated) {
                    lineWeight = (currPosBox.chargeAmount) / chargeDivisor * thickScale;
                    let x1 = gap + currPosBox.c + offsetX;
                    let x2 = gap + currNegBox.c + offsetX - 6;
                    let y = currPosBox.y + spacing + offsetY;

                    drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);

                    lineWeight = (currPosBox.chargeAmount - currNegBox.chargeAmount) / chargeDivisor * thickScale;
                    x1 = gap + currPosBox.c + offsetX + 30;
                    x2 = gap + currPosBox.c + lineSize + offsetX;
                    y = currPosBox.y + spacing + offsetY;

                    if (lineWeight > 0) {
                        drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);
                    }
                }
            }
            else {
                let x1 = gap + currPosBox.c + offsetX;
                let x2 = gap + currPosBox.c + lineSize + offsetX;
                let y = currPosBox.y + spacing + offsetY;
                
                drawArrow(x1, x2, y, "r", "r", color.pos, lineWeight, fillAmount);
            }
        }



    }

    if (type == "neg") {
        let lineWeight = box.chargeAmount / chargeDivisor * thickScale;

        stroke(color.neg[0], color.neg[1], color.neg[2], fillAmount); // HERE

        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) { // 3D
            if (sides.includes("r")) {
                // drawArrow(currPosBox.x + currPoxBox.w, currPosBox.x, currPosBox.y, spacing, offsetX, offsetY);
                let x1 = gap + box.x + box.w + offsetX;
                let x2 = gap + box.x + lineSize + offsetX;
                let y = box.y + spacing + offsetY;
    
                // neg right line
                drawArrow(x1, x2, y, "r", "l", color.neg, lineWeight, fillAmount);

            }

            if (sides.includes("l")) {
                x1 = box.x - lineSize + offsetX;
                x2 = box.x + offsetX + 8;
                y = box.y + spacing + offsetY;
    
                drawArrow(x1, x2, y, "l", "r", color.neg, lineWeight, fillAmount);

            }
        }
        
        else { // 2d
            offsetY = box.arrowOffsetY;
            if (sides.includes("r") && offsetY > 0 && box.chargeAmount > 0) {
                let x1 = gap + box.x + box.w;
                let x2 = 567;
                let y = box.y + spacing + offsetY;
    
                drawArrow(x1, x2, y, "l", "l", color.neg, lineWeight, fillAmount);
            }
    
            if (sides.includes("l") && box.chargeAmount > 0) {
                if (sceneCount == 4 || sceneCount == 5 || sceneCount == 6 || sceneCount == 7) {
                    if (!currAnimate) {
                        let lineWeight = box.chargeAmount / chargeDivisor * thickScale;
                        let x1 = 52;
                        let x2 = box.x - gap;
                        let y = box.y + spacing + offsetY;

                        drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount);

                    }
                    else if (currAnimate && offsetY > 0) {
                        let lineWeight = box.chargeAmount / chargeDivisor * thickScale;
                        let x1 = 52;
                        let x2 = currPosBox.x - gap;
                        let y = box.y + spacing + offsetY;

                        drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount); // left

                        lineWeight = box.chargeAmount / chargeDivisor * thickScale;
                        x1 = currPosBox.x + gap;
                        x2 = box.x - gap;
                        // y = box.y + spacing + offsetY;
                        y = box.y + spacing + 14;

                        drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount); // middle
                    }
                    if (currAnimated) {
                        lineWeight = box.chargeAmount / chargeDivisor * thickScale;
                        x1 = currPosBox.x + gap;
                        x2 = box.x - gap;
                        // y = box.y + spacing + offsetY;
                        y = box.y + spacing + 14;

                        drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount);
                    }
                }
                else {  
                    let lineWeight = box.chargeAmount / chargeDivisor * thickScale;
                    let x1 = 52;
                    let x2 = box.x - gap;
                    let y = box.y + spacing + offsetY;
                    
                    drawArrow(x1, x2, y, "r", "r", color.neg, lineWeight, fillAmount);
                }
            }
        }
    }

    if (type == "purple") {
        let purpleOffsetY = 32;
        let purpleOffsetX = -6;

        (sceneCount == 6) ? purpleOffsetY = 42 : null;
        (sceneCount == 7) ? purpleOffsetY = 54 : null;

        if (sceneCount == 8) {
            // draw thinning arrow
            fill(color.purple, fillAmount);
            noStroke();

            // straight
            beginShape();
            vertex(negbox8.x - 66, negbox8.y + spacing + purpleOffsetY - 3);
            vertex(negbox8.x, negbox8.y + spacing + purpleOffsetY - 3);
            vertex(negbox8.x, negbox8.y + spacing + purpleOffsetY + 3);
            vertex(negbox8.x - 66, negbox8.y + spacing + purpleOffsetY + 3);
            
            endShape(CLOSE);

            // sloping
            beginShape();
            vertex(negbox8.x, negbox8.y + spacing + purpleOffsetY - 3);
            vertex(negbox8.x, negbox8.y + spacing + purpleOffsetY + 3);
            vertex(negbox8.x + negbox8.w, negbox8.y + spacing + purpleOffsetY);
            endShape(CLOSE);

            // draw triangle

            let x = negbox8.x + purpleOffsetX + 4 + negbox8.w; // left x
            let y = negbox8.y + spacing + purpleOffsetY; // left y
            drawTriangle(12, "r", x, y);
        }
        else {
            // for each negative box
            for (i = 0; i <= currNegBoxes.length - 1; i++) {
                let lineWeight = (currNegBoxes[i].chargeAmount / chargeDivisor * thickScale) + (currPosBox.chargeAmount / chargeDivisor * thickScale);

                let purpleChargeAmount = getEField();
                // let lineWeight = purpleChargeAmount[i - 1] / chargeDivisor * thickScale;
    
                // purple right line
                if (i == 0) { // first neg box
                    if (currNegBoxes[i].x > graphC + 16 && currNegBoxes[i].chargeAmount > 0) {
                        let lineWeight = purpleChargeAmount[i + 1] / chargeDivisor * thickScale;
                        let x1 = currPosBox.x + gap; // right x
                        let x2 = currNegBoxes[i].x + purpleOffsetX + 3; // left x
                        let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y
                        
                        drawArrow(x1, x2, y, "r", "r", color.purple, lineWeight, fillAmount);

                        // if (currNegBoxes.length == 1) {
                        //     let x1 = currNegBoxes[i].x + currNegBoxes[i].d + gap; // right x
                        //     let x2 = 567; // left x
                        //     let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y

                        //     drawArrow(x1, x2, y, "r", "r", color.purple, lineWeight, fillAmount);
                        // }
                    }

                } else { // in betweens
                    // calculate line weights up to now
                    let lineWeight = purpleChargeAmount[i + 1] / chargeDivisor * thickScale;
                    let x1 = currNegBoxes[i - 1].x + gap; // right x
                    let x2 = currNegBoxes[i].x + purpleOffsetX - gap; // left x
                    let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y



                    drawArrow(x1, x2, y, "r", "r", color.purple, lineWeight, fillAmount);
                }
                if (i == currNegBoxes.length - 1) { // last box
                    let totalNegCharge = 0;
                    for (let i = 0; i < currNegBoxes.length; i++) {
                        totalNegCharge += currNegBoxes[i].chargeAmount;
                    }
                    totalNegCharge = float(totalNegCharge);

                    let lineWeight = (currPosBox.chargeAmount - totalNegCharge) / chargeDivisor * thickScale;

                    let x1 = currPosBox.c - lineSize - 3; // left x
                    let x2 = currPosBox.c - gap; // right x
                    let y = currNegBoxes[0].y + spacing + purpleOffsetY; // right y

                    if (currNegBoxes[i].x > graphC + 16 && currNegBoxes[i].chargeAmount > 0) {
                        let x1 = currNegBoxes[i].x + purpleOffsetX + 12; // right x
                        let x2 = 570; // left x
                        let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y

                        if (lineWeight > 0) {
                            drawArrow(x1, x2, y, "r", "r", color.purple, lineWeight, fillAmount);
                        }
                    }
                }

            }
        }

        // left purple line

        // calculate total left negative charge
        let totalNegCharge = 0;
        for (let i = 0; i < currNegBoxes.length; i++) {
            totalNegCharge += currNegBoxes[i].chargeAmount;
        }
        totalNegCharge = float(totalNegCharge);

        let lineWeight = (currPosBox.chargeAmount - totalNegCharge) / chargeDivisor * thickScale;

        let x1 = currPosBox.c - lineSize - 3; // left x
        let x2 = currPosBox.c - gap; // right x
        let y = currNegBoxes[0].y + spacing + purpleOffsetY; // right y

        if (totalNegCharge != 0 && totalNegCharge != currPosBox.chargeAmount) { //  && currPoxBox
            drawArrow(x1, x2, y, "l", "l", color.purple, lineWeight, fillAmount);
        }
    }  
}

function mousePressed() {
    if (sceneCount == 1) {
        drawScene1 = true;
    }
}

function toggleArrows(value) {
    if (value == "pos") {
        showPosArrows = !showPosArrows;
    }

    if (value == "purple") {
        showPurpleArrows = !showPurpleArrows;
    }
        
    if (value == "neg") {
        showNegArrows = !showNegArrows;
    }
}

function drawTriangle(size, dir, x, y) {
    if (dir == "l") {
        triangle(
            x, y,
            x + size, y - size/1.7,
            x + size, y + size/1.7
        )
    }
    else if (dir == "r") {
        triangle(
            x, y,
            x - size, y - size / 1.7,
            x - size, y + size / 1.7
        )
    }
}

function updatebox2(value) {
    box2.updateCharge(value);
    resetCharges(box2)
}

function updateTotalCharge() {
    // totalNegCharge = 0;
    // currNegBoxes.forEach(box => {
    //     totalNegCharge += box.chargeAmount;
    // });
}

function updateWidth(value) {
    negbox8.updateW(int(value));
}

function updateNegBox4(value) {
    negbox4.updateX(value);
}

function updateNegbox5(value) {
    negbox5.updateCharge(value);
    resetCharges(negbox5);
}