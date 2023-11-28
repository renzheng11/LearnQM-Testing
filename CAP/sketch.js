// vars
let color = {
    grey: "#989898",
    pos: "#AB6464",
    posDim: "#412E2E",
    neg: "#80C2FF",
    negDim: "#124268",
    sign: "#B7B7B7",
    signDim: "#474747",
    grey: "#AFAFAF",
    battery: "#E6E2BC",
    none: "#94A2F3",
}

let boxes = {
    L1: null,
    R1: null,

    L2: null,
    R2: null,

    L3: null,
    R3: null,

    L4: null,
    R4: null,

    L5: null,
    R5: null,

    L6: null,
    R6: null,

    L7: null,
    R7: null,

    L8: null,
    R8: null,
}

let tempBox;

let charge;
let animCharges = [];
let displayCharges = [];

let numTransfer = 18;

let dest1;
let dest2;
let dest3;
let dest4;
let destSide;
let currLeftBox;
let currRightBox;

const myShape = {
    x: 200,
    y: 100,
    w: 50,
    h: 50
}

// battery measurements
const batteryPos = {
    center: 300,
    leftX: 180,
    rightX: 420,
    y1: 380,
    y2: 420,
    batterySize: 40
}

let balls = [];
let totalElectrons = 120;


function setup() {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');


    

    // instant
    tempBox = new Box(100, 100, 160, 280, 0);
    boxes.L1 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R1 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L2 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R2 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L3 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R3 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L4 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R4 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L5 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R5 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L6 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R6 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L7 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R7 = new Box(340, 100, 160, 280, totalElectrons);

    boxes.L8 = new Box(100, 100, 160, 280, totalElectrons);
    boxes.R8 = new Box(340, 100, 160, 280, totalElectrons);
}


// currently unused
function animateScanner() {
}
// currently unused
function animateScene() {
}


function updateNumTransfer(value) {
    numTransfer = value;
}

function animateElectrons() {
    for (let i = 0; i < numTransfer; i++) {
        currRightBox.electrons[i].updateAnimate(true);
    }
}



function resetScene() {
    animCharges = [];
}

function drawBattery() {
    let center = batteryPos.center;
    let leftX = batteryPos.leftX;
    let rightX = batteryPos.rightX;
    let y1 = batteryPos.y1;
    let y2 = batteryPos.y2;
    let batterySize = batteryPos.batterySize;

    noStroke();
    fill(color.battery);

    // nub left 
    rect(center - batterySize / 2, y2 - 10, batterySize, 20);
    rect(center - batterySize + 10, y2 - 8, batterySize / 6, 16);

    stroke("#AFAFAF");
    line(leftX, y1, leftX, y2); // x y x y
    line(leftX, y2, rightX, y2);
    line(rightX, y1, rightX, y2);

    line(center - 6, y2-20, center - 6, y2+20);
    line(center + 6, y2-30, center + 6, y2+30);
}

function drawMOS(box) {
    noFill();
    stroke("#fff")
    let boxD = 100;
    let boxA = -100;
    beginShape();
    vertex(box.x + box.w, box.y + box.h); // left top
    vertex(box.x + box.w, box.y); // left bottom
    vertex(box.x + box.w + boxD, box.y + boxA); // top right
    vertex(box.x + box.w + boxD, box.y + box.h + boxA);
    endShape(CLOSE);
}

function drawBox(box) {
    
    stroke("#AFAFAF");
    noFill();

    boxA = -20;
    boxD = 24;

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
    vertex(box.x + box.w + boxD, box.y + boxA); // top right
    vertex(box.x + box.w + boxD, box.y + box.h + boxA);
    endShape(CLOSE);

    // // box top
    beginShape();
    vertex(box.x, box.y); // bottom left
    vertex(box.x + box.w, box.y); // bottom right
    vertex(box.x + box.w + boxD, box.y + boxA); // top right
    vertex(box.x + boxD, box.y + boxA); // top left
    endShape(CLOSE);

    // drawCharges(box);
    // drawElectrons(box);
}


function drawAnimatedCharges(charges) {
    // for each row
    for (let i = 0; i < charges.length; i++) {
        // for each column
        let chargeX = charges[i].x + 20;
        let chargeY = charges[i].y + 20;
        let chargeType = charges[i].type;
        drawCharge(chargeX, chargeY, chargeType);
    }
}

function drawCharges(box, type) {
    // for each row
    for (let row = 0; row < box.chargeMap.length; row++) {
    // for each column
        for (let col = 0; col < box.chargeMap[0].length; col++) {
            let chargeX = box.chargeMap[row][col].x + 20;
            let chargeY = box.chargeMap[row][col].y + 20;
            let chargeType = box.chargeMap[row][col].type;
            
            drawCharge(chargeX, chargeY, chargeType, box.chargeMap[row][col].dim);

        }
    }

    noStroke();
    fill("white")
    text(`#electrons: ${box.numElectrons}`, box.x + 30, box.y - 30)
}

function checkDest(electron, dest) {
    xCondition = electron.position.x < dest.x + 5 && electron.position.x > dest.x - 5;
    yCondition = electron.position.y < dest.y + 5 && electron.position.y > dest.y - 5;

    if (xCondition && yCondition) {
        return true;
    }
    else {
        return false;
    }
}

function drawElectrons(box) {

    // check for animation, animate
    for (let i = 0; i < box.electrons.length; i++) {
        let electron = box.electrons[i];
        let attractSide = (currLeftBox.x + currLeftBox.w - 16);
        dest1 = createVector(batteryPos.rightX, batteryPos.y1);
        dest2 = createVector(batteryPos.rightX, batteryPos.y2);
        dest3 = createVector(batteryPos.leftX, batteryPos.y2);
        dest4 = createVector(batteryPos.leftX, batteryPos.y1 - random(20, 400));
        let destSide = createVector(attractSide, electron.position.y);

        if (frameCount % 2 == 0) {
            if (electron.animate) {
                let atDest1 = checkDest(electron, dest1);
                let atDest2 = checkDest(electron, dest2);
                let atDest3 = checkDest(electron, dest3);
                let atDest4 = checkDest(electron, dest4);
                let atDestSide = checkDest(electron, destSide);
                if (electron.position.y > box.y + box.h) {
                    atDestSide = false;
                }

                if (atDest1) {
                    if (!electron.passedDest.includes(1)) {
                        electron.updatePassed(1);
                    }
                }
                if (atDest2) {
                    if (!electron.passedDest.includes(2)) {
                        electron.updatePassed(2);
                    }
                }
                if (atDest3) {
                    if (!electron.passedDest.includes(3)) {
                        electron.updatePassed(3);
                    }
                }
                if (atDest4) {
                    if (!electron.passedDest.includes(4)) {
                        electron.updatePassed(4);
                    }
                }
                if (atDestSide) {
                    if (!electron.passedDest.includes(5)) {
                        electron.updatePassed(5);
                    }
                }

                if (electron.passedDest.includes(0) && !electron.passedDest.includes(1)) {
                    electron.move(dest1);
                }
                if (electron.passedDest.includes(1) && !electron.passedDest.includes(2)) {
                    electron.move(dest2);
                }
                if (electron.passedDest.includes(2) && !electron.passedDest.includes(3)) {
                    electron.move(dest3);
                }
                if (electron.passedDest.includes(3) && !electron.passedDest.includes(4)) {
                    electron.move(dest4);
                }
                if (electron.passedDest.includes(4) && !electron.passedDest.includes(5)) {
                    electron.move(destSide);
                }

                if (atDestSide) { // start end animation
                    // move into other box
                    
                    if (electron.show) {
                        electron.updatePassed(3);
                        electron.updateAnimate(false);
                        if (electron.pushed == false) {

                            electron.updatePushed(true);
                            tempBox.electrons.push(electron);
                            // console.log(electron);
                            
                            currLeftBox.updateNumElectrons(currLeftBox.numElectrons += 1);
                            box.updateNumElectrons(box.numElectrons -= 1);

                            // dim 
                            for (let i = 0; i < totalElectrons; i++) {
                                currLeftBox.electrons[i].updateDim(true);
                            }
                            for (let i = 0; i < totalElectrons; i++) {
                                if (currRightBox.electrons[i].position.x > currRightBox.x) {
                                    currRightBox.electrons[i].updateDim(true);
                                }
                            }
                            for (let row = 0; row < currRightBox.chargeMap.length; row++) {
                                // for each column
                                for (let col = 0; col < currRightBox.chargeMap[0].length; col++) {
                                    if (col != 0) {
                                        currRightBox.chargeMap[row][col].updateDim(true);
                                    }
                                }
                            }
                            for (let row = 0; row < currLeftBox.chargeMap.length; row++) {
                                // for each column
                                for (let col = 0; col < currLeftBox.chargeMap[0].length; col++) {
                                    currLeftBox.chargeMap[row][col].updateDim(true);
                                }
                            }
                        }
                    }
                }
            }
            else { // not animated - moving around in box
                electron.update();
            }
        }
        if (electron.show) {
            electron.display(electron.dim);
        }
    }
}

function updateElectronBox(electron, box) {
    // electron.update
}

function drawCharge(chargeX, chargeY, chargeType, dim) {
    let posSize = 10;
    let negSize = 2;
    let signSize = 6;
    noStroke();

    // charge circles
    // positive charge
    if (chargeType == "both" || chargeType == "pos" || chargeType == "empty") {
        dim? fill(color.posDim): fill(color.pos);
        circle(chargeX, chargeY, posSize);
    }
    // negative charge
    if (chargeType == "both" || chargeType == "neg") {
        dim ? fill(color.negDim) : fill(color.neg);
        let negDistanceAway = 8;
        circle(chargeX + negDistanceAway, chargeY - negDistanceAway, negSize);
    }
    if (chargeType == "empty") {
        noFill();
        stroke(color.grey);
        strokeWeight(.4);
        canvas.drawingContext.setLineDash([2, 2]);
        let negDistanceAway = 8;
        circle(chargeX + negDistanceAway, chargeY - negDistanceAway, negSize);
    }
    if (chargeType == "none") {
        fill(color.none);
        circle(chargeX, chargeY, posSize);
    }

    // charge signs
    dim ? stroke(color.signDim) : stroke(color.sign);
    strokeWeight(2);
    canvas.drawingContext.setLineDash([]);

    if (chargeType == "both" || chargeType == "pos" || chargeType == "empty") {
        // cross line
        line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY);
        // up line
        line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
    }
}

function drawScanner(box) {
    box.updateScannerX(mouseX);
    fill(color.battery);
    noStroke();
    rect(box.scannerX, box.scannerY, 20, box.h);

    fill("#fff");
    rect(box.scannerX, box.scannerY, 20, 4);
    rect(box.scannerX, box.scannerY + box.h - 4, 20, 4);
}

function drawAxis() {
    let graphY = 540;
    let graphW = 540;

    let leftPadding = 48;

    let graphC = graphW / 2 + leftPadding - 8;
    let graphX = graphC - graphW / 2 + leftPadding;

    stroke(color.grey); // axis color
    strokeWeight(1);

    canvas.drawingContext.setLineDash([7, 3]);

    line(graphC, graphY - 76, graphC, graphY + 60); // vert

    let xAxisExtend = 0;
    (sceneCount == 8) ? xAxisExtend = 20 : null;
    line(graphX, graphY, graphW - 6 + xAxisExtend, graphY); // hor

    noStroke();
    fill(color.grey);

    textFont('Cambria');
    textStyle(ITALIC);
    textSize(16);

    textStyle(NORMAL);
    textFont('Sans-serif');
    textSize(9.4);

    canvas.drawingContext.setLineDash([]);

    let size = 4.4;
    stroke(color.grey);

    // y axis arrow
    line(graphC, graphY - 76, graphC - size, graphY - 76 + size);
    line(graphC, graphY - 76, graphC + size, graphY - 76 + size);

    // x axis arrow
    line(graphW, graphY, graphW - size, graphY - size);
    line(graphW, graphY, graphW - size, graphY + size);

    //     // tick 1
    //     text("|", graphC + 70, graphY + 7);
    //     text("1µm", graphC + 60, graphY + 16);

    //     // tick 2
    //     text("|", graphC + 143, graphY + 7);
    //     text("2µm", graphC + 135, graphY + 16);

    //     // tick 3
    //     text("|", graphC + 220, graphY + 7);
    //     text("3µm", graphC + 214, graphY + 16);
}

function drawArrows() {

    let x1 = 262;
    let x2 = 338;
    let y = 112;

    for (let i = 0; i < 7; i++) {
        let purple = [145, 87, 204]; // purple
        strokeCap(SQUARE);
        stroke(purple[0], purple[1], purple[2]);

        let triangleSize = 12;
        line(x1, y, x2 - triangleSize, y);
        fill(purple[0], purple[1], purple[2]);
        noStroke();

        triangle(
            x2, y,
            x2 - triangleSize, y - triangleSize / 1.7,
            x2 - triangleSize, y + triangleSize / 1.7
        )
        y += 40;
    }
}

function draw() {
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
}

function scene1() {
    currLeftBox = boxes.L1;
    currRightBox = boxes.R1;
    background(18);
    noStroke();

    drawBox(boxes.L1);
    drawBox(boxes.R1);

    drawBattery();


    drawCharges(boxes.L1);
    drawCharges(boxes.R1);
    drawElectrons(boxes.L1);
    drawElectrons(boxes.R1);
    drawElectrons(tempBox);


    
}

function scene2() {
    currLeftBox = boxes.L2;
    currRightBox = boxes.R2;
    background(18);
    noStroke();

    drawBox(boxes.L2);
    drawBox(boxes.R2);

    drawCharges(boxes.L2);
    drawCharges(boxes.R2);
    drawElectrons(boxes.L2);
    drawElectrons(boxes.R2);
    drawElectrons(tempBox);

    drawBattery();
}

function scene3() { 
    background(18);
    currLeftBox = boxes.L3;
    currRightBox = boxes.R3;
    background(18);
    drawBox(boxes.L3);
    drawBox(boxes.R3);

    drawCharges(boxes.L3);
    drawCharges(boxes.R3);
    drawElectrons(boxes.L3);
    drawElectrons(boxes.R3);
    drawElectrons(tempBox);

    drawArrows();
    drawAxis();

    drawBattery();
}

function scene4() {
    background(18);
    currLeftBox = boxes.L4;
    currRightBox = boxes.R4;
    drawBox(boxes.L4);
    drawBox(boxes.R4);

    drawCharges(boxes.L4);
    drawCharges(boxes.R4);
    drawElectrons(boxes.L4);
    drawElectrons(boxes.R4);
    drawElectrons(tempBox);

    drawBattery();
}

function scene5() {
    background(18);
    currLeftBox = boxes.L5;
    currRightBox = boxes.R5;
    drawBox(boxes.L5);
    drawBox(boxes.R5);

    drawCharges(boxes.L5);
    drawCharges(boxes.R5);
    drawElectrons(boxes.L5);
    drawElectrons(boxes.R5);
    drawElectrons(tempBox);

    drawBattery();
}

function scene6() {
    background(18);
    currLeftBox = boxes.L6;
    currRightBox = boxes.R6;
    drawBox(boxes.L6);
    drawBox(boxes.R6);

    drawCharges(boxes.L6);
    drawCharges(boxes.R6);
    drawElectrons(boxes.L6);
    drawElectrons(boxes.R6);
    drawElectrons(tempBox);

    drawBattery();
}

function scene7() {
    background(18);
    currLeftBox = boxes.L7;
    currRightBox = boxes.R7;
    drawBox(boxes.L7);
    drawBox(boxes.R7);

    drawCharges(boxes.L7);
    drawCharges(boxes.R7);
    drawElectrons(boxes.L7);
    drawElectrons(boxes.R7);
    drawElectrons(tempBox);

    drawBattery();
}

function scene8() {
    background(18);

    let surface1 = new Box(30, 200, 120, 300);
    let surface2 = new Box(200, 200, 120, 300);
    let surface3 = new Box(370, 200, 120, 300);

    drawMOS(surface1);
    drawMOS(surface2);
    drawMOS(surface3);

    // currLeftBox = boxes.L8;
    // currRightBox = boxes.R8;
    // drawBox(boxes.L8);
    // drawBox(boxes.R8);

    // drawCharges(boxes.L8);
    // drawCharges(boxes.R8);
    // drawElectrons(boxes.L8);
    // drawElectrons(boxes.R8);
    // drawElectrons(tempBox);

    // drawBattery();
}

function scene9() {

}



