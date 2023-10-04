

let blueBox;
let canvas;

// scene 1
let box1;

// scene 2 / 3
let box2; 

// scene 4
let box4;
let redbox4;

// scene 5
let box5;
let redbox5;

let drawScreenScene4;
let drawScreenScene5;

// scene 6
let box6;
let redbox6a;
let redbox6b;

// scene 7
let box7;
let redbox7a;
let redbox7b;
let redbox7c;

// scene 9
let box9;
let redbox9;

// All scenes
let graphY;
let graphW;
let graphX;
let graphC;

let drawScene1;
let drawScene2;

let chargeXArray;
let chargeYArray;
let chargeXRArray;
let chargeYRArray;

let blueBoxes;
let redBoxes;

let chargeSlider;
let sliderCharge;

let volumeSlider;
let volumeWidth;

let shiftRed;

// COLORS
let color;
let grey;
let red;
let blue;
let redSurface;
let blueSurface;
let purpleColor;
let blueCharge;
let redCharge;
let blueSign;
let redSign;

let chargeDivisor;

setup = () => {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');

    showBlue = false;
    chargeDivisor = 4;

    color = [0, 0, 0];
    grey = [113, 113, 133];
    redSurface = [111, 67, 67];
    blueSurface = [54, 78, 99];
    blue = [91, 149, 203];
    red = [191, 81, 81];
    purpleColor = [147, 82, 212]; // purple
    blueCharge = [66, 117, 166];
    redCharge = [245, 112, 112];
    blueSign = [183, 220, 255];
    redSign = [253, 192, 192];

    bg = 18;

    graphY = 550;
    graphW = 540;

    leftPadding = 48;
    letShiftRed = 10;
    
    // graphX = graphC - graphW / 2;
    graphC = graphW / 2 + leftPadding;
    graphX = graphC - graphW / 2 + leftPadding;



    chargeSlider = createSlider(3, 60, 30, 1);
    sliderCharge = 20;

    volumeSlider = createSlider(40, 142, 100, 1);
    volumeWidth = 100;

    drawScreenScene5 = false;
    drawScene1 = false;
    drawScene2 = false;

    boxThickness = 1;

    // instantiate boxes
    box1 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);
    blueBox = box1;

    box2 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);

    box3 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);

    box4 = new Box("pos", true, 60, false, 440, true, false, "lrp", 0, 310, 140, boxThickness, 80);
    redbox4 = new Box("neg", true, 60, true, 440, true, true, "lrp", 0, 400, 150, boxThickness, 80);

    box5 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);
    redbox5 = new Box("neg", true, 42, true, 440, true, true, "lrp", 0, 400, 152, boxThickness, 80);

    box6 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);
    redbox6a = new Box("neg", true, 26, true, 440, true, true, "lrp", 120, 400, 150, boxThickness, 80);
    redbox6b = new Box("neg", true, 10, true, 440, true, true, "lrp", 0, 490, 150, boxThickness, 80);

    box7 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);
    redbox7a = new Box("neg", true, 30, true, 440, true, true, "lrp", 120, 370, 150, boxThickness, 80);
    redbox7b = new Box("neg", true, 20, true, 440, true, true, "lrp", 0, 430, 150, boxThickness, 80);
    redbox7c = new Box("neg", true, 10, true, 440, true, true, "lrp", 0, 490, 150, boxThickness, 80);

    box9 = new Box("pos", true, 60, false, 440, true, true, "lrp", 0, 310, 140, boxThickness, 80);
    redbox9 = new Box("neg", true, 60, true, 440, true, true, "lrp", 0, 420, 150, 100, 80);

    blueBoxes = [box1, box2, box4, box5, box6, box7, box9];
    redBoxes = [redbox4, redbox5, redbox6a, redbox6b, redbox7a, redbox7b, redbox7c, redbox9];

    chargeXArray = [];
    chargeYArray = [];
    chargeXRArray = [];
    chargeYRArray = [];

    // populate arrays
    // for (let i = 0; i < 40; i++) {
    //     chargeXArray.push(Math.floor(Math.random() * (60)) + box1.x + 20)
    //     chargeYArray.push(Math.floor(Math.random() * (box1.h + 60)) + box1.y - 70)
    // }
    // for (let i = 0; i < 40; i++) {
    //     chargeXRArray.push(Math.floor(Math.random() * (60)) + box1.x + 20)
    //     chargeYRArray.push(Math.floor(Math.random() * (box1.h + 60)) + box1.y - 80)
    // }

    // Returns a random integer from 1 to 100:
    // Example: Returns a random integer from 1 to 100:
    // Math.floor(Math.random() * 100) + 1;

    // Populate charge array
    for (let i = 0; i < 60; i++) {
        chargeXArray.push(Math.floor(Math.random() * (64)) + box1.x + 20);
        chargeYArray.push(Math.floor(Math.random() * (box1.h - 100)) + box1.y);
    }
    for (let i = 0; i < 60; i++) {
        chargeXRArray.push(Math.floor(Math.random() * (64)) + box1.x + 20);
        chargeYRArray.push(Math.floor(Math.random() * (box1.h - 100)) + box1.y);
    }

    // less random array
    // let num = 20;
    // let col = Math.floor(num / 13);
    // let row = Math.floor(num / 4);

    // for (let r = 0; r < row; r++) {
    //     for (let c = 0; c < col; c++) {
    //         chargeXArray.push(box1.x + c * 23 + Math.random() * (12) + 16);
    //         chargeYArray.push(box1.y + r * 23 + Math.random() * (12));
    //     }
    // }

    // for (let r = 0; r < row; r++) {
    //     for (let c = 0; c < col; c++) {
    //         chargeXRArray.push(box1.x + c * 23 + Math.random() * (12) + 16);
    //         chargeYRArray.push(box1.y + r * 23 + Math.random() * (12));
    //     }
    // }
}

draw = () => {

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
        scene9();
    }
    else if (sceneCount == 8) {
        scene9();
    }
}

function resetScene() {
    // reset show arrows
    for (let i = 0; i < blueBoxes.length - 1; i++) {
        blueBoxes[i].addSide("l");
        blueBoxes[i].addSide("r");
    }
    for (let i = 0; i < redBoxes.length - 1; i++) {
        redBoxes[i].addSide("l");
        redBoxes[i].addSide("r");
        redBoxes[i].addSide("p");
    }
    for (let i = 0; i < redBoxes.length - 1; i++) {
        redBoxes[i].showArrows = true;
    }
    for (let i = 0; i < blueBoxes.length - 1; i++) {
        redBoxes[i].showArrows = true;
    }
}

// SCENOS
function scene1() { // 1scene
    drawBox(box1, false, false, "lrs");
    if (drawScene1) {
        drawBox(box1, true, true, "lr");
        drawBox(box1, true, true, "s");
        drawCharges(box1);
        
        fill(grey);
        noStroke();
        text('vec E', 130, 50);
    }
}

function scene2() { // 2scene
    blueBox = box2;

    drawBox(box2, true, true, "lr");
    drawBox(box2, true, true, "s");
    drawGraph(box2, null, false);
    
    drawCharges(box2);

    // Set the position of slider on the canvas
    chargeSlider.position(86, 1760);
    
    sliderCharge = chargeSlider.value();
    box2.changeChargeAmount(sliderCharge);

    // background(18);
}

function scene3() { // 3scene
    blueBox = box3;
    drawGraph(box3, null, false);

    drawBox(box3, true, true, "lr");
    drawBox(box3, true, true, "s");

    drawCharges(box3);
    // drawCharges(box3);
}

function scene4() { // 4scene
    blueBox = box4;
    drawGraph(box4, [redbox4], true);

    drawCharges(box4);
    drawCharges(redbox4);
    
    drawBox(box4, true, true, "s");

    box4.showArrows?    drawBox(box4, true, true, "l"): null;
                             drawBox(redbox4, true, true, "s");

    redbox4.showArrows? drawBox(redbox4, true, true, "lrp"): null;
    box4.showArrows ? drawBox(box4, true, true, "r") : null;

    (mouseX > graphC && mouseX < graphW - 10)? redbox4.updateX(mouseX): null;
    
    drawScreenScene4? drawScreen(redbox4): null;
}

function scene5() { // 5scene
    blueBox = box5;

    drawGraph(box5, [redbox5], true); 

    box5.showArrows? drawBox(box5, true, true, "ls"): null;
    
    drawCharges(box5);
    drawCharges(redbox5);

    drawBox(box5, true, true, "s");
    drawBox(redbox5, true, true, "s");

    mouseX > graphC && mouseX < graphW? redbox5.updateX(mouseX): null;
    redbox5.showArrows? drawBox(redbox5, true, true, "lr"): null;
    redbox5.showPurple? drawBox(redbox5, true, true, "p"): null;
    box5.showArrows?    drawBox(box5, true, true, "r"): null;
    drawScreenScene5?        drawScreen(redbox5): null;
}

function scene6() { // 6scene
    blueBox = box6;

    drawGraph(box6, [redbox6a, redbox6b], true);
    drawCharges(box6);
    drawCharges(redbox6a);
    drawCharges(redbox6b);

    // show charge
    drawBox(box6, true, true, "s")
    box6.showArrows? drawBox(box6, true, true, "l"): null;
    drawBox(redbox6a, true, true, "s");
    redbox6a.showArrows? drawBox(redbox6a, true, true, "lr"): null;
    redbox6a.showPurple ? drawBox(redbox6a, true, true, "p") : null;
    drawBox(redbox6b, true, true, "s");
    redbox6b.showArrows? drawBox(redbox6b, true, true, "lr"): null;
    redbox6b.showPurple? drawBox(redbox6b, true, true, "p") : null;
    box6.showArrows? drawBox(box6, true, true, "r"): null;
}

function scene7() { // 7scene
    blueBox = box7;
    drawGraph(box7, [redbox7a, redbox7b, redbox7c], true);

    drawCharges(box7);
    drawCharges(redbox7a);
    drawCharges(redbox7b);
    drawCharges(redbox7c);

    drawBox(box7, true, true, "s");
    drawBox(box7, true, true, "l");
    drawBox(redbox7a, true, true, "s");
    drawBox(redbox7a, true, true, "lr");
    drawBox(redbox7a, true, true, "p");
    drawBox(redbox7b, true, true, "s");
    drawBox(redbox7b, true, true, "lr");
    drawBox(redbox7b, true, true, "p");
    drawBox(redbox7c, true, true, "s");
    drawBox(redbox7c, true, true, "lr");
    drawBox(redbox7c, true, true, "p");
    drawBox(box7, true, true, "r");
}

function scene8() { //8scene
    // blueBox = box8;
    // drawGraph(box7, [redbox7a], true);


    // drawCharges(redbox7a);
    // drawCharges(redbox7b);
    // drawCharges(redbox7c);

    // drawBox(box, true, true, "ls");
    // drawBox(redbox7a, true, true, "lrps");
    // drawBox(redbox7b, true, true, "lrs");
    // drawBox(redbox7c, true, true, "lrs");
    // drawBox(box7, true, true, "r");
    volumeSlider.position(86, 6400);
    redbox9.updateW(volumeSlider.value());

    blueBox = box9;
    drawGraph(box9, [redbox9], true);

    drawCharges(box9);
    drawCharges(redbox9);

    drawBox(box9, true, true, "sl");
    drawBox(redbox9, true, true, "plrs");
    drawBox(box9, true, true, "r");
}

function scene9() { //9scene
    volumeSlider.position(86, 6400);
    redbox9.updateW(volumeSlider.value());

    blueBox = box9;
    drawGraph(box9, [redbox9], true);

    drawCharges(box9);
    drawCharges(redbox9);

    drawBox(box9, true, true, "sl");
    drawBox(redbox9, true, true, "plrs");
    drawBox(box9, true, true, "r");
}

drawAxis = () => {
    color = grey;
    stroke(grey); // axis color
    strokeWeight(1);
    
    canvas.drawingContext.setLineDash([10, 5]);

    line(graphX, graphY, graphW, graphY); // hor
    line(graphC, graphY - 64, graphC, graphY + 64); // vert

    noStroke();

    fill(grey);
    text('vec E', graphC - 26, graphY + 80);
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

drawGraph = (box, redBoxes, purple) => {
    let graphDivisor = 2;
    drawAxis();
    strokeWeight(2);

    let unit = 1 / graphDivisor;

    let blueLeftY = -(unit * box.chargeAmount);
    let blueRightY = unit * box.chargeAmount;

    let redLeftY;
    let purpleLeftY;

    let points;
    let heights;
    
    if (redBoxes) {
        redLeftY = -(unit * redBoxes[0].chargeAmount);
    }
    else {
        redY1 = -(unit * box.chargeAmount);
        redLeftY = unit * box.chargeAmount;
    }

    // blue graph lines
    if (box.charge == "pos" && box.showArrows) {
        points = [graphX, graphC];
        heights = [graphY - blueLeftY, graphY - blueRightY];
        drawLines(points, heights, blue, false, false);
    }
    else if (box.charge == "neg") { // scene3
        points = [graphX, graphC];
        heights = [graphY + blueLeftY, graphY + blueRightY];
        drawLines(points, heights, red, false, false);
    }

    // red graph lines
    if (redBoxes) {
        if (redBoxes[0].showArrows) {
            points = [graphX];
            heights = [redLeftY + graphY];
            for (i = 0; i < redBoxes.length; i++) {
                points.push(redBoxes[i].x);
            }
            for (i = 0; i < redBoxes.length; i++) {
                heights.push((unit * redBoxes[i].chargeAmount) + graphY);
            }
            drawLines(points, heights, red, false, false);
        }   
        // purple graph lines
        if (redBoxes[0].showPurple) {
            purpleLeftY = (redLeftY-  blueLeftY);
            points = [graphX, graphC];
            heights = [purpleLeftY + graphY, graphY - (unit * redBoxes[0].chargeAmount) - (unit * box.chargeAmount)];

            if (sceneCount != 9) {
                for (i = 0; i < redBoxes.length; i++) {
                    points.push(redBoxes[i].x);
                }
                for (i = 0; i < redBoxes.length; i++) {
                    heights.push((unit * redBoxes[i].chargeAmount) - (unit * box.chargeAmount) + graphY);
                }
                drawLines(points, heights, purpleColor, true, false);
            } else {
                drawLines(points, heights, purpleColor, true, true);
            }

        }   
    }
}

drawLines = (points, heights, color, drawMid, slope) => {
    let graphEnd = graphC + graphW / 2 - 46;
    stroke(color);
    // if () {
    //     line(points[0], heights[0], points[1], heights[0]);
    //     line(redBoxes[7].x, heights[0], points[1], heights[0]);
    // }
    // else {
        for (i = 0; i < points.length; i++) {
            if (i == points.length - 1) {
                // last line
                line(points[i], heights[i], graphEnd, heights[i]); // line
            }
            else {
                line(points[i], heights[i], points[i + 1], heights[i]); // line
                if (drawMid) {
                    if (redBoxes[0].x > graphC + 4 && sceneCount ==4) {
                        line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
                    }
                    if (redBoxes[1].x > graphC + 4 && sceneCount ==5) {
                        line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
                    }
                    if (sceneCount != 4 && sceneCount != 5) {
                        line(points[i + 1], heights[i], points[i + 1], heights[i + 1]);
                    }
                }
                else {
                    line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
                }
            }
        }
    // }
}


changeChargeAmount = () => {
    if (sceneCount == 2) {
        box2.changeChargeAmount(sliderCharge);
    }
}

reverseCharge = () => {
    box3.reverseCharge();
}

showScreen = () => {
    if (sceneCount == 4) {
        drawScreenScene4 = !(drawScreenScene4);
    }
    if (sceneCount == 5) {
        drawScreenScene5 = !(drawScreenScene5);
    }
}

drawSurface = (box) => {
    strokeWeight(1.4);
    // stroke(box.color);
    let surfaceOpacity = 0;

    if (box == redbox6b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == redbox7b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == redbox7c) {
        surfaceOpacity = surfaceOpacity + 80;
    }

    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3 || sceneCount == 8) {
        // (box.charge == "pos") ? fill(blueSurface) : fill(redSurface);
        (box.charge == "pos") ? stroke(blue) : stroke(red);
        fill(18, 18, 18, 200);
        // noFill();
    }
    else {
        (box.charge == "pos") ? stroke(91, 149, 203, 120) : stroke(191, 81, 81, 120);
        noFill();
    }

    let yOffset = 0;
    if (box.charge == "neg" && sceneCount != 3) {
        yOffset = -10;
    }

    beginShape();
    vertex(box.x, box.y + yOffset);
    vertex(box.x, box.y + box.h + yOffset);
    vertex(box.x + box.w, box.y + box.h + yOffset);
    vertex(box.x + box.w, box.y + yOffset);
    endShape(CLOSE);

    // box side
    beginShape();
    vertex(box.x + box.w, box.y + box.h + yOffset); // left top
    vertex(box.x + box.w, box.y + yOffset); // left bottom
    vertex(box.x + box.w + box.d, box.y + box.a + yOffset); // top right
    vertex(box.x + box.w + box.d, box.y + box.h + box.a + yOffset);
    endShape(CLOSE);

    // box top
    beginShape();
    vertex(box.x, box.y + yOffset); // bottom left
    vertex(box.x + box.w, box.y + yOffset); // bottom right
    vertex(box.x + box.w + box.d, box.y + box.a + yOffset); // top right
    vertex(box.x + box.d, box.y + box.a + yOffset); // top left
    endShape(CLOSE);
}

drawMidzone = (box) => {
    if (box.midzone) {
        // Mid Zone
        color = purple;
        fill(color[0], color[1], color[2]); // purple
        noStroke();

        let blueEnd = 330;
        let offset = 20;

        // box front
        beginShape();
        vertex(blueEnd, box.y); // right top
        vertex(blueEnd, box.y + box.h); // right bottom
        vertex(box.x - offset + box.w, box.y + box.h);  // left bottom
        vertex(box.x - offset + box.w, box.y); // left top
        endShape(CLOSE);

        // box top
        beginShape();
        vertex(blueEnd, box.y); // bottom left
        vertex(box.x - offset + box.w, box.y); // bottom right
        vertex(box.x- offset + box.w + box.d, box.y + box.a); // top right
        vertex(blueEnd + box.d, box.y + box.a); // top left
        endShape(CLOSE);
        // filter(BLUR);
    }
}



drawBox = (box, showCharges, showArrows, sides) => {
    //order: left arrows, box, charges, right arrows
    noStroke();
    fill(grey);

    if (sceneCount != 1) {
        text('vec E', 130, 50);
    }

    if (showArrows && (box.sides).includes("p") && sides.includes("p") && box.showPurple) {
        drawArrows(box, "p");
    }

    if (showArrows && (box.sides).includes("l") && sides.includes("l") && box.showArrows) {
        drawArrows(box, "l");
    }

    if (sides.includes("s")) {
        drawSurface(box);
    }
    
    if (showArrows & (box.sides).includes("r") && sides.includes("r") && box.showArrows) {
        drawArrows(box, "r");
    }
}

drawCharges = (box) => {
    frameRate(60);    

    let chargeSize = 12;
    let signSize = chargeSize - 4;
    let chargeOpacity = 50;
    let signOpacity = 50;

    for (let i = 0; i < box.chargeAmount; i++) {
        noStroke();
        noStroke();
        moveCharge = box.x - 316;

        if (box.charge == "pos") {
            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                fill(66, 117, 166, chargeOpacity + 60); // blueCharge
            }
            else {
                fill(66, 117, 166, chargeOpacity); //redCharge
            }

            let chargeX = chargeXArray[i];
            let chargeY = chargeYArray[i]

            circle(chargeX + moveCharge, chargeY, chargeSize);

            strokeWeight(1);

            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                stroke(183, 220, 255, signOpacity + 60); // blueSign
            }
            else {
                stroke(183, 220, 255, signOpacity); // blueSign
            }
            // cross line
            line(chargeX + moveCharge - signSize / 2, chargeY, chargeX + moveCharge + signSize / 2, chargeY)
            // up line
            line(chargeX + moveCharge, chargeY - signSize / 2, chargeX + moveCharge, chargeY + signSize / 2)
        }
        else if (box.charge == "neg") {
            if (sceneCount == 1 || sceneCount == 2) {
                fill(245, 112, 112, chargeOpacity + 60);
            }
            else if (sceneCount == 3) {
                fill(245, 112, 112, chargeOpacity + 60);
            }
            else {
                fill(245, 112, 112, chargeOpacity);
            }
            
            let chargeX = chargeXRArray[i];
            let chargeY = chargeYRArray[i];

            circle(chargeX + moveCharge, chargeY + 20, chargeSize);

            if (sceneCount == 1 || sceneCount == 2) {
                stroke(253, 192, 192); // redSign
            }
            else if (sceneCount ==3) {
                stroke(253, 192, 192, 120); // redSign
            }
            else {
                stroke(253, 192, 192, signOpacity); // redSign
            }
            strokeWeight(1);

            // cross line
            line(chargeX + moveCharge - signSize / 2, chargeY + 20, chargeX + moveCharge + signSize / 2, chargeY + 20)
        }

    }
}

drawScreen = (box) => {
    fill(18, 18, 18, 150);
    noStroke();
    let gap = 20;

    if (sceneCount == 5) {
        fill(18, 18, 18, 56);
    }

    // right
    beginShape();
    vertex(box.x + box.w, box.y); // left top
    vertex(box.x + box.w, box.y + box.h); // left bottom
    vertex(windowWidth, box.y + box.h); // right bottom
    vertex(windowWidth, box.y); // right top
    endShape(CLOSE);

    fill(18, 18, 18, 150);
    // left
    beginShape();
    vertex(0, box.y); // left top
    vertex(0, box.y + box.h); // left bottom
    vertex(graphC - gap + 11, box.y + box.h); // right bottom
    vertex(graphC - gap + 11, box.y); // right top
    endShape(CLOSE);
}


drawArrows = (box, sides) => {
    let rows = 6;
    // let spaceBetween = rows * 4.2;
    let spaceBetween = rows * 7;
    let spacing = spaceBetween - 6;

    let triangleSize = 12;
    let lineSize = 255;

        let offsetX = 0;
        let offsetY = 0;
        let fillAmount;
        let thickScale = .18;


        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
            fillAmount = 240; // 3d fillamount
        }
        else {
            fillAmount = 240; // 2d fillamount
        }
        
        let moveRed = 0;  
        let moveBlue = 0;
        let moveRedTriangles = 0;
    if (sceneCount == 3 || sceneCount == 2 || sceneCount == 1) {
            moveRed = 60;
            moveRedTriangles = 60;
            moveBlue = 60;
        }  
        // for each row
        for (let r = 0; r < rows; r++) {
            // for each set in z axis
            for (let i = 0; i < 5; i++) {
                (box.charge == "pos") ? stroke(91, 149, 203, fillAmount) : stroke(193, 81, 81, fillAmount);

                strokeWeight(box.chargeAmount/chargeDivisor * thickScale);
                
                strokeCap(SQUARE);
                let btwLine = 3;

                // stroke(91, 149, 203, fillAmount);
                let gap;
                // strokeWeight(3);
                // right set of lines
                
                if (box.charge == "pos") {
                    strokeWeight(box.chargeAmount/chargeDivisor * thickScale);
                    gap = 0;
                    // blue right lines
                    if (sides.includes("r")) {
                        line(gap + box.c + offsetX + moveBlue,
                            box.y + spacing + offsetY,
                            gap + box.c + lineSize + offsetX,
                            box.y + spacing + offsetY);
                    }
                    // blue left lines
                    if (sides.includes("l")) {
                        line(box.c - gap + offsetX - moveBlue,
                            box.y + spacing + offsetY,
                            box.c - lineSize - gap + offsetX,
                            box.y + spacing + offsetY);
                    }
                }

                else if (box.charge == "neg") {
                    gap = 12;
                    // red right lines
                    if (sides.includes("r")) {
                        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                            // 3D
                            line(gap + box.x + box.w + offsetX + moveRed,
                                box.y + spacing + offsetY,
                                gap + box.x + lineSize + offsetX + moveRed,
                                box.y + spacing + offsetY);
                        }
                        else {
                            // 2D
                            let redRightGap = 0;
                            if (sceneCount == 8) {
                                redRightGap = 50;
                            }

                            // if (sceneCount == 6 || sceneCount == 7 || sceneCount == 8 ) {
                            //     strokeWeight(box7.chargeAmount/chargeDivisor * thickScale);
                            // }
                            
                            line(gap + box.c + box.w + offsetX - 4 - redRightGap, // left x
                                box.y + spacing + offsetY + btwLine, // left y
                                gap + blueBox.c + lineSize + offsetX - box.minusLine, // right x
                                box.y + spacing + offsetY + btwLine); // right y
                        }
                        
                    }
                    // red left lines
                    if (sides.includes("l")) {
                        // 3D
                        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                            line(box.x - gap + offsetX - moveRed,
                                box.y + spacing + offsetY,
                                gap + box.x - lineSize - gap + offsetX - triangleSize - moveRed,
                                box.y + spacing + offsetY);
                        }
                        else {
                            // for 2D
                            line(box.x - gap + offsetX, // right x
                                box.y + spacing + offsetY + btwLine, // right y
                                gap + blueBox.c - lineSize - gap + offsetX - triangleSize, // left x
                                box.y + spacing + offsetY + btwLine); // left y
                        }
                    }
                }

                // purple lines
                if (sides.includes("p") && (mouseX > graphC || (sceneCount != 4 && sceneCount !=5))) {
                    let purpleOffset = 16;
                    let offsetX = 0;
                    color = purpleColor;
                    // stroke(color[0], color[1], color[2], fillAmount); // purple color
                    stroke(147, 82, 212, 200); // purple
                    
                    strokeWeight(box.chargeAmount / chargeDivisor * thickScale + (blueBox.chargeAmount / chargeDivisor * thickScale)); // box scene 5 charges
                    // strokeWeight(6);

                    let movePurple = 0;
                    if (box == redbox6b) {
                        movePurple = 100;
                    }
                    if (box == redbox7b) {
                        movePurple = 60;
                    }
                    if (box == redbox7c) {
                        movePurple = 120;
                    }

                    line( offsetX + box.x - 12, // x1
                        purpleOffset + box.y + spacing, // y1
                        offsetX + lineSize + 57 + movePurple, // x2
                        purpleOffset + box.y + spacing); // y

                    // purple triangles
                    noStroke();
                    let off = -10;

                    fill(147, 82, 212, 200); // purple
                    // stroke(147, 82, 212); // purple
                    let m = 10;
                    // if (mouseX > graphC) {
                        drawTriangle(triangleSize, "right", m + box.x + off, box.y + spacing + purpleOffset);
                    // }


                }

                // TRIANGLES
                noStroke();
                // let move = 40;
                let move = 44;
                (box.charge == "pos") ? fill(91, 149, 203, fillAmount) : fill(193, 81, 81, fillAmount);

                if (box.charge == "pos") {
                    // blue right triangles
                    if (sides.includes("r")) {
                        let arrowOffset = 584;
                        drawTriangle(triangleSize, "right",
                        box.c + lineSize + offsetX + 12, // x
                        box.y + spacing + offsetY); //y
                    }
                    // blue left triangles
                    if (sides.includes("l")) {
                        drawTriangle(triangleSize, "left",
                        move + offsetX,
                        box.y + spacing + offsetY);
                    }
                }

            
                else if (box.charge == "neg") {
                    // console.log(box.charge);
                    // // mid blue triangle
                    // if (sides.includes("p")) {
                    //     let yOffset = -11;
                    //     let off = -7;
                    //     noStroke();
                    //     fill(91, 149, 203, 100);
                    //     drawTriangle(triangleSize, "right", 7 + box.x + off, box.y + spacing + yOffset);
                    // }

                    let off = -4;
                    // red left triangles
                    let v = 0;
                    if (sceneCount != 1 && sceneCount != 2 && sceneCount != 3) {
                        v = 3; // fix red triangle offset
                    }
                    
                    
                    if (sides.includes("l")) {
                        drawTriangle(triangleSize, "right", box.x + offsetX - moveRedTriangles, box.y + spacing + offsetY + v);
                    }
                    // red right triangles
                    if (sides.includes("r")) {
                        let m = -8;

                        drawTriangle(triangleSize, "left", m + box.x + box.w + off + gap + offsetX + moveRedTriangles, box.y + offsetY + spacing + v);
                    } 
                }                

                offsetX += 20;
                offsetY -= 24;
                if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                    fillAmount -= 40;
                }
                else {
                    if (r == 0) {
                        if (i == 0) {
                            fillAmount -= 200; // change for 3d // 40 - 255
                        }
                        else if (i == 1) {
                            fillAmount -= 20; // change for 3d // 40 - 255
                        }
                        else if (i == 2) {
                            fillAmount -= 20; // change for 3d // 40 - 255
                        }
                        else if (i == 3) {
                            fillAmount -= 20; // change for 3d // 40 - 255
                        }
                        
                    }
                    else {
                        fillAmount -= 255;
                    }
                }

                // fillAmount -= 255;
            }
            spacing += spaceBetween;
            offsetX = 0;
            offsetY = 0;
            zRow = 1;

            // reset fillAmount
            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                fillAmount = 220; // 3d fillamount
            }
            else {
                fillAmount = 240; // 2d fillamount
            }
        }
        spacing = spaceBetween - 6;
        // lineSize = 260;
    
}

mousePressed = () => {
    if (sceneCount == 1) {
        drawScene1 = true;
    }
    // else if (mouseX > 0) {
    //     toggleArrows();
    // }
}

toggleBlue = () => {
    for (i = 0; i < blueBoxes.length; i++) {
        blueBoxes[i].showArrows = !blueBoxes[i].showArrows;
    }
}

toggleRed = () => {
    console.log("toggle red");
    for (i = 0; i < redBoxes.length; i++) {
        redBoxes[i].showArrows = !redBoxes[i].showArrows;
    }
}

togglePurple = () => {
    for (i = 0; i < redBoxes.length; i++) {
        redBoxes[i].showPurple = !redBoxes[i].showPurple;
    }
}

drawTriangle = (size, dir, x, y) => {
    if (dir == "left") {
        triangle(
            x, y,
            x + size, y - size/1.7,
            x + size, y + size/1.7
        )
    }
    else if (dir == "right") {
        triangle(
            x, y,
            x - size, y - size / 1.7,
            x - size, y + size / 1.7
        )
    }

}