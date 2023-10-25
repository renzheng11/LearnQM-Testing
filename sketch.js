// vars
let canvas;

// Toggle drawing
let showNegArrows;
let showPosArrows;
let showPurpleArrows;

let togglePairs;

let drawScene1;
let drawScreen4;

let screenAmount;

let animateNegBox5;
let negbox5animated;


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

// Colors
let color;
let grey;
let negColor;
let posColor;
let negSurface;
let posSurface;
let purpleColor;
let posCharge;
let negCharge;


function setup() {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');

    chargeDivisor = 4;
    flowDirection = "right";
    totalNegCharge = 0;

    animateNegBox5 = false;
    negbox5animated = false;

    color = [0, 0, 0];
    grey = [113, 113, 133];
    negSurface = [111, 67, 67];
    posSurface = [54, 78, 99];
    negColor = [91, 149, 203];
    posColor = [191, 81, 81];
    purpleColor = [147, 82, 212]; // purple
    posCharge = [66, 117, 166];
    negCharge = [245, 112, 112];

    chargeCoordinates = [];
    currNegBoxes =[];

    showNegArrows = true;
    showPosArrows = true;
    showPurpleArrows = true;


    bg = 18;
    bgColor = [18,18,18]

    graphY = 550;
    graphW = 540;

    leftPadding = 48;
    
    // graphX = graphC - graphW / 2;
    // graphC = graphW / 2 + leftPadding;
    graphC = graphW / 2 + leftPadding - 8;
    graphX = graphC - graphW / 2 + leftPadding;

    volumeWidth = 100;

    drawScene1 = false;
    drawScreen4 = false;

    boxThickness = 1;

    boxPadding = 70;

    let offsetY = 14;

    // instantiate boxes
    box1 = new Box(true, false, "pos", 0, 0, 40, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box2 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box3 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box4 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, false, "lrp", true, 310, 140, boxThickness, 80);

    negbox4 = new Box(true, false, "neg", 1, offsetY, 60, true, 440, true, true, "lrp", true, 400, 140, boxThickness, 80);

    box5 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox5 = new Box(true, false, "neg", 1, offsetY, 42, true, 440, true, true, "lrp", true, 400, 140, boxThickness, 80);

    box6 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox6a = new Box(true, false, "neg", 1, offsetY, 40, true, 440, true, true, "lrp", true, 310 + boxPadding, 140, boxThickness, 80);
    negbox6b = new Box(false, false, "neg", 2, offsetY * 2, 20, true, 440, true, true, "lrp", true, 310 + boxPadding*2, 140, boxThickness, 80);

    box7 = new Box(true, false, "pos", 0, 0, 80, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox7a = new Box(true, false, "neg", 1, offsetY, 15, true, 440, true, true, "lrp", true, 310 + boxPadding, 140, boxThickness, 80);
    negbox7b = new Box(true, false, "neg", 2, offsetY * 2, 25, true, 440, true, true, "lrp", true, 310 + boxPadding*2, 140, boxThickness, 80);
    negbox7c = new Box(true, false, "neg", 3, offsetY * 3, 40, true, 440, true, true, "lrp", true, 310 + boxPadding*3, 140, boxThickness, 80);

    box8 = new Box(true, false, "pos", 0, 0, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    negbox8 = new Box(true, false, "neg", 1, offsetY, 60, true, 440, true, true, "lrp", true, 380, 140, 142, 80);

    // (box.sceneOrder == 1) ? offsetY = 14 : null;
    // (box.sceneOrder == 2) ? offsetY = 14 * 2 : null;
    // (box.sceneOrder == 3) ? offsetY = 14 * 3 : null;


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
        rand.push(Math.random() * 10);
    }

    img = loadImage('vecE.png');
    img2 = loadImage('vecEGrey.png');

    // togglePairs = {
    //     // "posToggle4": box1
    //     // "posToggle2": box2

    //     "posToggle4": box4,
    //     "negToggle4": negbox4,

    //     "posToggle5": box5,
    //     "negToggle5": negbox5,

    //     "posToggle6": box6,
    //     "negToggle6a": negbox6a,
    //     "negToggle6b": negbox6b,

    //     "posToggle7": box7,
    //     "negToggle7a": negbox7a,
    //     "negToggle7b": negbox7b,
    //     "negToggle7c": negbox7c,

    //     "posToggle9": box8,
    //     "negToggle9": negbox8,
    // }

    negbox7a.resetCharges();
    negbox7b.resetCharges();
    negbox7c.resetCharges();

    
}

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

    // drawarrow test
    // drawArrow(30, 400, 30, "r", "r")
}

function scene1() { // 1scene
    currPosBox = box1;
    currNegBoxes = [];


    // resetToggles();
    drawBox(box1,   "s");
    if (drawScene1) {
        drawBox(box1,   "l");
        drawBox(box1,   "s");
        drawBox(box1,   "r");
        drawCharges(box1);
        
        // E vec
        fill(grey);
        noStroke();
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
        
    }
}

function scene2() { // 2scene
    // resetToggles();
    currPosBox = box2;
    currNegBoxes = [box2];

    drawBox(box2,   "l");
    drawBox(box2,   "s");
    drawBox(box2,   "r");
    drawGraph(box2, null);
    
    drawCharges(box2);

    // box2.updateCharge(sliderCharge);
}

function scene3() { // 3scene
    // resetToggles();
    currPosBox = box3;
    currNegBoxes = [box3];

    drawGraph(box3, null);

    drawBox(box3,   "l");
    drawBox(box3,  "s");
    drawCharges(box3);
    drawBox(box3,  "r");

}

function scene4() { // 4scene
    // resetToggles();
    currPosBox = box4;
    
    // document.getElementById(Object.keys(togglePairs)[0]).checked ? Object.values(togglePairs)[0].toggleArrows(true): null;
    document.getElementById("posToggle4").checked ? box4.toggleArrows(true): null;
    document.getElementById("negToggle4").checked ? negbox4.toggleArrows(true) : null;
    document.getElementById("purpleToggle4").checked ? negbox4.togglePurple(true) : null;
    // !document.getElementById("screen4").checked ? drawScreen4 = false : null;


    drawGraph(box4, [negbox4]);

    
    drawBox(box4,  "s");
    drawCharges(box4);

    drawBox(negbox4,   "s");
    drawCharges(negbox4);
    
    drawBox(box4,  "r");
    drawBox(box4,   "l");

    drawBox(negbox4, "lrp");
    (mouseX > graphC && mouseX < graphW - 10)? negbox4.updateX(mouseX): null;

    drawScreen4? drawScreen(negbox4): null;
}

function scene5() { // 5scene
    currPosBox = box5;
    currNegBoxes = [negbox5];
    // resetToggles();
    // document.getElementById("posToggle5").checked ? box5.toggleArrows(true) : null;
    // document.getElementById("negToggle5").checked ? negbox5.toggleArrows(true) : null;
    // document.getElementById("purpleToggle5").checked ? negbox5.togglePurple(true) : null;
    // !document.getElementById("screen5").checked ? drawScreen5 = false : null;


    drawGraph(box5, [negbox5]); 
    
    drawBox(box5,   "s");
    drawCharges(box5);
    drawBox(negbox5,  "s");
    drawCharges(negbox5);

    showPosArrows? drawBox(box5,   "lr"): null;
    // mouseX > graphC && mouseX < graphW? negbox5.updateX(mouseX): null;

    negbox5.showArrows? (drawBox(negbox5,   "lr")):null;
    

    
    // showPurpleArrows? drawBox(negbox5,   "p") : null;
    drawBox(negbox5,   "p");
    // drawScreen5?        drawScreen(negbox5): null;


    if (animateNegBox5 && negbox5.arrowOffsetY >= 0) {
        
        negbox5.updateArrowOffsetY(-.2);   
    }
    if (negbox5.arrowOffsetY <= 0) {
        negbox5.toggleArrows(false);
    }
    
}

function wait() {

}

function scene6() { // 6scene
    // resetToggles();
    document.getElementById("posToggle6").checked ? box6.toggleArrows(true) : null;
    document.getElementById("negToggle6").checked ? negbox6a.toggleArrows(true) : null;
    // document.getElementById("negToggle6b").checked ? negbox6b.toggleArrows(true) : null;
    document.getElementById("purpleToggle6").checked ? negbox6a.togglePurple(true) : null;
    // !document.getElementById("screen6").checked ? drawScreen6 = false : null;

    currPosBox = box6;
    currNegBoxes = [negbox6a];

    drawBox(box6,  "s")
    drawCharges(box6);
    drawBox(negbox6a,   "s");    
    drawCharges(negbox6a);

    if (negbox6b.showBox) {
        currNegBoxes.push(negbox6b)
        drawBox(negbox6b,   "s");
        drawCharges(negbox6b);
        drawBox(negbox6b,   "lr");
        drawGraph(box6, currNegBoxes);
    }
    else {
        drawGraph(box6, currNegBoxes);
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
    if (fowardSurface(negbox6b)) {
        drawBox(negbox6b,   "s");
        drawCharges(negbox6b);
    }

}

function scene7() { // 7scene

    currPosBox = box7;
    currNegBoxes = [negbox7a, negbox7b, negbox7c];

    drawGraph(box7, [negbox7a, negbox7b, negbox7c]);

    document.getElementById("posToggle7").checked ? showPosArrows = true : null;
    document.getElementById("negToggle7").checked ? showNegArrows = true : null;
    document.getElementById("purpleToggle7").checked ? showPurpleArrows = true : null;

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

    // drawScreen7 ? drawScreen(negbox7a): null;

    
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
    drawGraph(box8, [negbox8], true);

    drawBox(box8, "sl");
    drawCharges(box8);
    drawBox(negbox8, "plrs");
    drawBox(box8, "r");
    drawCharges(negbox8);
}

function addBox() {
    negbox6b.resetCharges();
    negbox6b.toggleShowBox(true);
}

function flowCharges() {
    if (flowDirection == "right") {
        negbox7a.updateCharge(15);
        negbox7a.resetCharges();
        negbox7b.updateCharge(25);
        negbox7b.resetCharges();
        negbox7c.updateCharge(40);
        negbox7c.resetCharges();
        flowDirection = "left";
    }
    else if (flowDirection == "left") {
        negbox7a.updateCharge(40);
        negbox7a.resetCharges();
        negbox7b.updateCharge(25);
        negbox7b.resetCharges();
        negbox7c.updateCharge(15);
        negbox7c.resetCharges();
        flowDirection = "right";
    }
}

function drawAxis() {
    color = grey;
    stroke(grey); // axis color
    strokeWeight(1);
    
    canvas.drawingContext.setLineDash([10, 5]);

    line(graphX, graphY, graphW, graphY); // hor
    line(graphC, graphY - 64, graphC, graphY + 64); // vert

    noStroke();

    fill(grey);
    // text('vec E', graphC - 26, graphY + 80);
    image(img2, graphC - 10, graphY + 66, img.width / 2, img.height / 2);

    text('x', graphW + 10, graphY);

    canvas.drawingContext.setLineDash([]);

    let size = 7;
    stroke(grey);

    // y axis arrow
    line(graphC, graphY - 64, graphC - size, graphY - 64 + size);
    line(graphC, graphY - 64, graphC + size, graphY - 64 + size);

    // x axis arrow
    line(graphW, graphY, graphW - size, graphY - size);
    line(graphW, graphY, graphW - size, graphY + size);
}

function drawGraph(box, allNegBoxes) {

    let graphEnd = graphC + graphW / 2 - 46;
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


        if (sceneCount == 7 && flowDirection == "left") {
            let temp = negHeights[1];
            negHeights[1] = negHeights[3];
            negHeights[3] = 0;
        }


        // volume
        netHeightsTotal = 0;


        // purple graph lines
        if (currNegBoxes.length >= 1) {
            purpleXPoints = [graphX, graphC, negXPoints[1]];

            purpleHeights.push((posHeights[0] + negHeights[0])); // index 0
            // purpleHeights.push((posHeights[0] + negHeights[0]) / 2); // index 0
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

        
        if (box.charge == "pos" && showPosArrows) {
            drawLines(posXPoints, posHeights, posColor, false, false);
        }

        if ((sceneCount > 3 || box3.charge == "neg") && showNegArrows) {
            drawLines(negXPoints, negHeights, negColor, false, false);
        }
        
        if (sceneCount != 1 && sceneCount != 2 && sceneCount != 3 && showPurpleArrows) {
            drawLines(purpleXPoints, purpleHeights, purpleColor, false, false);
        }
    }
}

function drawSlope(points, heights, color) {
    stroke(color);
    for (i = 0; i < points.length; i++) {
        line(points[i], heights[i], points[i + 1], heights[i + 1]); // line
    }
}

function drawLines(points, rawHeights, color, drawMid) {
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
        if (sceneCount == 8 && i == points.length - 2 && color != posColor) {
            drawConnecting = false;
        }
        if (i == points.length - 1) {

            if (sceneCount == 8 && (color == negColor || color == purpleColor)) {
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
            else if (drawConnecting && (sceneCount != 4 || color != purpleColor)) {

                line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
            }
            // }
        }
    }
}

function reverseCharge() {
    box3.reverseCharge();
}

function showScreen() {
    if (animateNegBox5 == false) {
        animateNegBox5 = true;
    }

    if (negbox5animated == false) {
        setTimeout(() => {
            currPosBox.updateMinusLineWeight(-negbox5.lineWeight);
        }, "1200");
    }

    negbox5animated = true;
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
        (box.charge == "pos") ? stroke(posColor) : stroke(negColor);
        // (box.charge == "pos") ? fill("#2F2121"): fill("#1D252B");
        fill("#181818");
    }
    else {
        (box.charge == "pos") ? stroke(posColor) : stroke(negColor);
        // (box.charge == "pos") ? fill("#2F2121") : fill("#1D252B");
        fill("#181818");
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
        color = purpleColor;
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
    fill(grey);

    let screenAmount = 0;

    if (sceneCount != 1) {
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
    }

    if (sides.includes("p")) {
        drawArrows(box, false, "p");
    }

    if (sides.includes("l")) {
        drawArrows(box, false, "l");
    }

    if (sides.includes("s")) {
        drawSurface(box);
    }
    
    if (sides.includes("r")) {
        drawArrows(box, false, "r");
    }
}

function drawCharges(box) {
    let showCharges = box.showChargeGrid;
    let chargeSize = 9;
    let signSize = chargeSize - 4;
    let chargeOpacity = 40;
    let signOpacity = 40;

    noStroke();

    let X = box.x - 6;
    let Y = box.y - 70;
    let Px = 15;
    let Py = 16;

    if (box.charge == "pos") {
        if (sceneCount == 1 || sceneCount == 2) {
            fill(245, 112, 112, chargeOpacity + 20);
        }
        else if (sceneCount == 3) {
            fill(245, 112, 112, chargeOpacity + 20);
        }
        else {
            fill(245, 112, 112, chargeOpacity);
        }
    }
    else if (box.charge == "neg") {
        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
            fill(66, 117, 166, chargeOpacity + 30);
        }
        else {
            fill(66, 117, 166, chargeOpacity);
        }
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
                    stroke(183, 220, 255, signOpacity + 30); // neg sign
                }
                else {
                    stroke(183, 220, 255, signOpacity); // neg sign
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
                            stroke(183, 220, 255, signOpacity + 30); // neg sign
                        }
                        else {
                            stroke(183, 220, 255, signOpacity); // neg sign
                        }

                        // cross line
                        line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY)
                        // up line
                        line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
                    }
                }
            }

            fill(bg);
            noStroke();
            // hide corners
            rect(0, 0, 30, 30);
    }
}

function resetCharges(box) {
    for (let r = 0; r < chargeCoordinates.length; r++) {
        for (let c = 0; c < 4; c++) {

            // positive charges
            let chance = Math.floor(Math.random() * 60);
            if (chance <= box.chargeAmount) {
                this.showChargeGrid[r][c] = 1;
            } else {
                this.showChargeGrid[r][c] = 0;
            }

            // negative charges
            chance = Math.floor(Math.random() * 60);
            if (chance <= box.chargeAmount) {
                this.showChargeGrid[r][c] = 1;
            } else {
                this.showChargeGrid[r][c] = 0;
            }
        }
    }
}

function drawScreen(box) {
    fill(18, 18, 18, 255);
    noStroke();
    let gap = 20;

    if (sceneCount == 5) {
        fill(18, 18, 18, 180); 
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

function drawArrows(box, showScreen, sides) {

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
                    drawArrowSet(box, "purple", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }
            }

            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) { // 3D
                if (box.charge == "pos" && showPosArrows) {
                    drawArrowSet(box, "pos", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }

                if (box.charge == "neg" && showNegArrows) {
                    drawArrowSet(box, "neg", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }
            }
            else { //2D

                if (sceneCount == 5) {
                    showScreen = true;
                }

                // turn on screening effect / screen 
                // uncomment and use screenamount instead of fillamount below
                // if (!showScreen) {
                //     screenAmount = fillAmount;
                // }

                if (box.charge == "pos" && showPosArrows && box.showArrows) {

                    drawArrowSet(box, "pos", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                    // drawArrowSet(box, "pos", screenAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                }

                if (box.charge == "neg" && showNegArrows && box.showArrows) {
                    if (box == negbox4) {
                    }
                    drawArrowSet(box, "neg", fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
                    // drawArrowSet(box, "neg", screenAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY);
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

function drawArrowSet(box, type, fillAmount, showScreen, screenAmount, spacing, sides, offsetX, offsetY) {
    let thickScale = .20;
    let gap = 3;
    let lineSize = 255;

    if (type == "pos") {
        let lineWeight = currPosBox.lineWeight / chargeDivisor * thickScale;
        // pos right lines
        if (sides.includes("r")) {
            let x1 = gap + currPosBox.c + offsetX;
            let x2 = gap + currPosBox.c + lineSize + offsetX;
            let y = currPosBox.y + spacing + offsetY;

            drawArrow(x1, x2, y, "r", "r", posColor, lineWeight, fillAmount);
        }

        // pos left lines
        if (sides.includes("l")) {
            let x1 = currPosBox.c - lineSize - gap + offsetX;
            let x2 = currPosBox.c - gap + offsetX - 2;
            let y = currPosBox.y + spacing + offsetY;

            drawArrow(x1, x2, y, "l", "l", posColor, lineWeight, fillAmount);
        }
    }

    if (type == "neg") {
        let lineWeight = box.lineWeight / chargeDivisor * thickScale;

        stroke(91, 149, 203, fillAmount);

        // neg y offsets
        // (box.sceneOrder == 1) ? offsetY = 14 : null;
        // (box.sceneOrder == 2) ? offsetY = 14 * 2 : null;
        // (box.sceneOrder == 3) ? offsetY = 14 * 3 : null;
        offsetY = box.arrowOffsetY;

        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) { // 3D
            // drawArrow(currPosBox.x + currPoxBox.w, currPosBox.x, currPosBox.y, spacing, offsetX, offsetY);
            let x1 = gap + box.x + box.w + offsetX;
            let x2 = gap + box.x + lineSize + offsetX;
            let y = box.y + spacing + offsetY;

            // neg right line
            drawArrow(x1, x2, y, "r", "l", negColor, lineWeight, fillAmount);

            x1 = box.x - lineSize + offsetX;
            x2 = box.x + offsetX + 8;
            y = box.y + spacing + offsetY;

            drawArrow(x1, x2, y, "l", "r", negColor, lineWeight, fillAmount);
        }
        
        else { // 2d
            if (sides.includes("r")) {
                let x1 = gap + box.x + box.w;
                let x2 = 567;
                let y = box.y + spacing + offsetY;
    
                drawArrow(x1, x2, y, "l", "l", negColor, lineWeight, fillAmount);
            }
    
            if (sides.includes("l")) {
                let x1 = 52;
                let x2 = box.x - gap;
                let y = box.y + spacing + offsetY;

                drawArrow(x1, x2, y, "r", "r", negColor, lineWeight, fillAmount);
            }
        }
    }

    if (type == "purple") {
        let purpleOffsetY = 32;
        let purpleOffsetX = -6;

        (sceneCount == 6) ? purpleOffsetY = 42 : null;
        (sceneCount == 7) ? purpleOffsetY = 54 : null;

        // for each negative box
        for (i = 0; i <= currNegBoxes.length - 1; i++) {
            let lineWeight = (currNegBoxes[i].lineWeight / chargeDivisor * thickScale) + (currPosBox.lineWeight / chargeDivisor * thickScale);

            // purple right line
            if (i == 0) { // first neg box
                if (currNegBoxes[i].x > graphC + 16 && currNegBoxes[i].chargeAmount > 0) {
                    let x1 = currPosBox.x + gap; // right x
                    let x2 = currNegBoxes[i].x + purpleOffsetX + 2; // left x
                    let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y
                    

                    drawArrow(x1, x2, y, "r", "r", purpleColor, lineWeight, fillAmount);
                }
            } else {
                let x1 = currNegBoxes[i - 1].x + gap; // right x
                let x2 = currNegBoxes[i].x + purpleOffsetX - gap; // left x
                let y = currNegBoxes[i].y + spacing + purpleOffsetY; // left y

                drawArrow(x1, x2, y, "r", "r", purpleColor, lineWeight, fillAmount);
            }
        }

        // left purple line


        // calculate total left negative charge
        let totalNegCharge = 0;
        for (let i = 0; i < currNegBoxes.length; i++) {
            totalNegCharge += currNegBoxes[i].lineWeight;
        }
        totalNegCharge = float(totalNegCharge);

        let lineWeight = (currPosBox.lineWeight - totalNegCharge) / -chargeDivisor * thickScale;

        let x1 = currPosBox.c - lineSize - 3; // left x
        let x2 = currPosBox.c - gap; // right x
        let y = currNegBoxes[0].y + spacing + purpleOffsetY; // right y

        if (totalNegCharge != 0 && totalNegCharge != currPosBox.lineWeight) {
            drawArrow(x1, x2, y, "l", "l", purpleColor, lineWeight, fillAmount);
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
    box2.resetCharges();
}

function updateTotalCharge() {
    totalNegCharge = 0;
    currNegBoxes.forEach(box => {
        totalNegCharge += box.chargeAmount;
    });
}

function updateWidth(value) {
    negbox8.updateW(int(value));
}

function updateNegBox4(value) {
    negbox4.updateX(value);
}

function updateNegbox5(value) {
    negbox5.updateCharge(value);
    negbox5.resetCharges();
}

