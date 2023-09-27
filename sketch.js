

let blueBox;
let canvas;

// scene 1
let boxScene1;

// scene 2 / 3
let boxScene2; 

// scene 4
let boxScene4;
let redboxScene4;

// scene 5
let boxScene5;
let redboxScene5;

let drawScreenScene4;
let drawScreenScene5;

// scene 6
let boxScene6;
let redboxScene6a;
let redboxScene6b;

// scene 7
let boxScene7;
let redboxScene7a;
let redboxScene7b;
let redboxScene7c;

// scene 9
let boxScene9;
let redboxScene9;

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

let shiftRed;

// COLORS
let color;
let grey;
let red;
let blue;
let redSurface;
let blueSurface;
let purple;
let blueCharge;
let redCharge;
let blueSign;
let redSign;


setup = () => {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');

    color = [0, 0, 0];
    grey = [113, 113, 133];
    redSurface = [111, 67, 67];
    blueSurface = [54, 78, 99];
    blue = [91, 149, 203];
    red = [191, 81, 81];
    purple = [140, 52, 228];
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

    chargeXArray = [];
    chargeYArray = [];
    chargeXRArray = [];
    chargeYRArray = [];

    chargeSlider = createSlider(1, 40, 20, 1);
    sliderCharge = 20;

    drawScreenScene5 = false;
    drawScene1 = false;
    drawScene2 = false;


    boxThickness = 1;

    // instantiate boxes
    boxScene1 = new Box("pos", true, 20, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    blueBox = boxScene1;

    boxScene2 = new Box("pos", true, 20, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);

    boxScene3 = new Box("pos", true, 20, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);

    boxScene4 = new Box("pos", true, 20, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    redboxScene4 = new Box("neg", true, 20, true, 440, true, "lrp", 0, 400, 150, boxThickness, 80);

    boxScene5 = new Box("pos", true, 36, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    redboxScene5 = new Box("neg", true, 16, true, 440, true, "lrp", 0, 400, 152, boxThickness, 80);

    boxScene6 = new Box("pos", true, 36, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    redboxScene6a = new Box("neg", true, 26, true, 440, true, "lrp", 120, 410, 150, boxThickness, 80);
    redboxScene6b = new Box("neg", true, 10, true, 440, true, "lrp", 0, 510, 150, boxThickness, 80);

    boxScene7 = new Box("pos", true, 36, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    redboxScene7a = new Box("neg", true, 24, true, 440, true, "lrp", 120, 390, 150, boxThickness, 80);
    redboxScene7b = new Box("neg", true, 8, true, 440, true, "lrp", 0, 470, 150, boxThickness, 80);
    redboxScene7c = new Box("neg", true, 4, true, 440, true, "lrp", 0, 540, 150, boxThickness, 80);

    boxScene9 = new Box("pos", true, 36, false, 440, true, "lrp", 0, 310, 140, boxThickness, 80);
    redboxScene9 = new Box("neg", true, 36, true, 440, true, "lrp", 0, 420, 150, 100, 80);

    blueBoxes = [boxScene1, boxScene2, boxScene4, boxScene5, boxScene6, boxScene7, boxScene9];
    redBoxes = [redboxScene4, redboxScene5, redboxScene6a, redboxScene6b, redboxScene7a, redboxScene7b, redboxScene7c, redboxScene9];
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
        scene7();
    }
    else if (sceneCount == 9) {
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
}

// SCENOS

function scene1() { // 1scene

    drawBox(boxScene1, false, false, "lrs");
    if (drawScene1) {
        drawCharges(boxScene1);
        drawCorners(boxScene1);
        drawBox(boxScene1, true, true, "lrs");
        fill(grey)
        text('vec E', 130, 50);
    }
}

function scene2() { // 2scene
    blueBox = boxScene2;

    drawCharges(boxScene2);
    drawCorners(boxScene2);

    drawBox(boxScene2, true, true, "lrs");
    drawGraph(boxScene2, null, false);
    // Set the position of slider on the canvas
    chargeSlider.position(86, 1760);
    
    sliderCharge = chargeSlider.value();
    boxScene2.changeChargeAmount(sliderCharge);
    console.log(boxScene2.chargeAmount);

    // background(18);
}

function scene3() { // 3scene
    blueBox = boxScene3;
    drawGraph(boxScene3, null, false);

    drawCharges(boxScene3);
    drawCorners(boxScene3);

    drawBox(boxScene3, true, true, "lrs");
}

function scene4() { // 4scene
    blueBox = boxScene4;
    drawGraph(boxScene4, redboxScene4, true);

    drawCharges(boxScene4);
    drawCorners(boxScene4);
    drawCharges(redboxScene4);
    drawCorners(redboxScene4);
    
    drawBox(boxScene4, true, true, "ls");
    drawBox(redboxScene4, true, true, "lrps");
    drawBox(boxScene4, true, true, "lr");

    if (mouseX > graphC && mouseX < graphW - 10) {
        redboxScene4.updateX(mouseX);
    }
    
    if (drawScreenScene4) {
        drawScreen(redboxScene4);
    }
}

function scene5() { // 5scene
    blueBox = boxScene5;



    drawGraph(boxScene5, redboxScene5, true); 
    drawBox(boxScene5, true, true, "ls");

    drawCharges(boxScene5);
    drawCorners(boxScene5);

    drawCharges(redboxScene5);
    drawCorners(redboxScene5);

    drawBox(boxScene5, true, true, "s");

    if (mouseX > graphC && mouseX < graphW) {
        redboxScene5.updateX(mouseX);
    }

    drawBox(redboxScene5, true, true, "lrps");
    drawBox(boxScene5, true, true, "r");




    if (drawScreenScene5) {
        drawScreen(redboxScene5);
    }
}

function scene6() { // 6scene
    blueBox = boxScene6;

    drawGraph(boxScene6, redboxScene6a, true);
    drawGraph(boxScene6, redboxScene6b, true);

    drawCharges(boxScene6);
    drawCorners(boxScene6);

    drawCharges(redboxScene6a);
    drawCorners(redboxScene6a);

    drawCharges(redboxScene6b);
    drawCorners(redboxScene6b);

    // show charge
    drawBox(boxScene6, true, true, "ls");
    drawBox(redboxScene6a, true, true, "lps");
    drawBox(redboxScene6b, true, true, "lrps");
    drawBox(boxScene6, true, true, "r");

    // drawBox(boxScene6, false, true, "ls");
    // drawBox(redboxScene6a, false, true, "lps");
    // drawBox(redboxScene6b, false, true, "lrps");
    // drawBox(boxScene6, false, true, "r");
}

function scene7() { // 7scene
    blueBox = boxScene7;
    drawGraph(boxScene7, redboxScene7a, true);
    drawGraph(boxScene6, redboxScene7b, true);
    drawGraph(boxScene6, redboxScene7c, true);

    drawCharges(boxScene7);
    drawCorners(boxScene7);

    drawCharges(redboxScene7a);
    drawCorners(redboxScene7a);

    drawCharges(redboxScene7b);
    drawCorners(redboxScene7b);

    drawCharges(redboxScene7c);
    drawCorners(redboxScene7c);

    drawBox(boxScene7, true, true, "ls");
    drawBox(redboxScene7a, true, true, "lps");
    drawBox(redboxScene7b, true, true, "lsp");
    drawBox(redboxScene7c, true, true, "lrsp");

    // drawBox(boxScene7, false, true, "ls");
    // drawBox(redboxScene7a, false, true, "lps");
    // drawBox(redboxScene7b, false, true, "lsp");
    // drawBox(redboxScene7c, false, true, "lrsp");

    drawBox(boxScene7, true, true, "r");

}

function scene8() { //8scene
    blueBox = boxScene8;
    drawGraph(boxScene7, redboxScene7a, true);


    drawCharges(redboxScene7a);
    drawCorners(redboxScene7a);

    drawCharges(redboxScene7b);
    drawCorners(redboxScene7b);

    drawCharges(redboxScene7c);
    drawCorners(redboxScene7c);

    drawBox(boxScene, true, true, "ls");
    drawBox(redboxScene7a, true, true, "lrps");
    drawBox(redboxScene7b, true, true, "lrs");
    drawBox(redboxScene7c, true, true, "lrs");
    drawBox(boxScene7, true, true, "r");
}

function scene9() { //9scene
    blueBox = boxScene9;
    drawGraph(boxScene9, redboxScene9, true);

    drawCharges(boxScene9);
    drawCorners(boxScene9);

    drawCharges(redboxScene9);
    drawCorners(redboxScene9);

    drawBox(boxScene9, true, true, "sl");
    redboxScene5.updateX(mouseX, true, true);
    drawBox(redboxScene9, true, true, "plrs");
    drawBox(boxScene9, true, true, "r");
}

drawAxis = () => {
    color = grey;
    stroke(grey); // axis color
    strokeWeight(2);
    
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

drawGraph = (box, red, purple) => {
    drawAxis();
    let redRightY;
    let redLeftY;
    strokeWeight(2);

    stroke(box.color);

    let unit = 1;

    let blueRightY = unit * box.chargeAmount;
    let blueLeftY = -(unit * box.chargeAmount);
    if (red) {
        redRightY = -(unit * red.chargeAmount);
        redLeftY = unit * red.chargeAmount;
    }
    else {
        redRightY = -(unit * box.chargeAmount);
        redLeftY = unit * box.chargeAmount;
    }
    
    // blue line
    if (box.charge == "pos") {
        line(graphX, graphY + blueRightY, graphC, graphY + blueRightY); // left
        line(graphC, graphY + blueLeftY, graphW, graphY + blueLeftY); // right
        line(graphC, graphY + blueLeftY, graphC, graphY + blueRightY); // straight
    }

    else if (box.charge == "neg") {
        line(graphX, graphY - redLeftY, graphC, graphY - redLeftY); // left
        line(graphC, graphY - redRightY, graphW, graphY - redRightY); // right
        line(graphC, graphY - redLeftY, graphC, graphY - redRightY); // straight
    }

    if (red) {
        let redX = red.x;
        stroke(red.color);
        line(graphX, graphY - redLeftY, redX, graphY - redLeftY); // left
        line(redX, graphY - redRightY, graphW, graphY - redRightY); // right
        line(redX, graphY - redLeftY, redX, graphY - redRightY); // straight
    }

    if (purple) {
        let redX = red.x;
        // purple graph line
        stroke(147, 82, 212); // purple
        let purpleRightY = -(redRightY + blueRightY);
        let purpleLeftY = -(redLeftY + blueLeftY);
        let purpleMidY = -(redLeftY + blueRightY);

        line(redX, graphY + purpleRightY,
            graphW, graphY + purpleRightY); // right
            
        line(graphX, graphY + purpleLeftY,
            graphC, graphY + purpleLeftY); // left

        if (mouseX > graphC || (sceneCount != 4 && sceneCount != 5)) {
            line(graphC, graphY + purpleMidY,
                redX, graphY + purpleMidY); // middle
            // right straight 
            // line(redX, graphY - blueRightY + redRightY, redX, graphY + blueRightY + redRightY);
            line(redX, graphY - blueRightY + redRightY, redX, graphW, graphY + purpleRightY);
            // left straight
            line(graphC, graphY - blueLeftY - redLeftY, graphC, graphY - blueRightY + redRightY);
        }

        if (sceneCount == 5) {
            print("redLeftY: " + redLeftY);
            print("redRightY: " + redRightY);
            print("blueLeftY: " + blueLeftY);
            print("blueRightY: " + blueRightY);
            print("purpleLeftY: " + (redLeftY + blueLeftY));
            print("purpleRightY: " + (redRightY + blueRightY));
        }
    }
}

toggleArrows = () => {
    if (sceneCount == 1) {
        boxScene1.toggleArrows();
    }
    else if (sceneCount == 2) {
        boxScene2.toggleArrows();
        // redBoxScene2.toggleArrows();
    }
    else if (sceneCount == 3) {
        boxScene2.toggleArrows();
        // redboxScene2.toggleArrows();
    }
    else if (sceneCount == 4) {
        boxScene4.toggleArrows();
        redboxScene4.toggleArrows();
    }
    else if (sceneCount == 5) {
        boxScene5.toggleArrows();
        redboxScene5.toggleArrows();
    }
    else if (sceneCount == 6) {
        boxScene6.toggleArrows();
        redboxScene6a.toggleArrows();
        redboxScene6b.toggleArrows();
    }
    else if (sceneCount == 7 || sceneCount == 8) {
        boxScene7.toggleArrows();
        redboxScene7a.toggleArrows();
        redboxScene7b.toggleArrows();
        redboxScene7c.toggleArrows();
    }
    else if (sceneCount == 9) {
        boxScene9.toggleArrows();
        redboxScene9.toggleArrows();
    }
}

changeChargeAmount = () => {
    if (sceneCount == 2) {
        boxScene2.changeChargeAmount(sliderCharge);
    }
}

reverseCharge = () => {
    boxScene3.reverseCharge();
}

showScreen = () => {
    if (sceneCount == 4) {
        drawScreenScene4 = !(drawScreenScene4);
    }
    if (sceneCount == 5) {
        drawScreenScene5 = !(drawScreenScene5);
    }
}

drawCorners = (box) => {
    let yOffset = 0;
    if (box.charge == "neg" && sceneCount != 3) {
        yOffset = -10;
    }
    noStroke();
    
    fill(bg);

    if (box.charge == "pos") {
        // fill('blue');

        // top
        beginShape();
        vertex(box.x, box.y + box.h + yOffset - box.h - 3); // left bottom
        vertex(box.x, box.y + yOffset + box.a - 3); // left top
        vertex(box.x + box.d, box.y + box.a + yOffset - 3); // right top
        endShape(CLOSE);

        // bottom
        beginShape();
        vertex(box.x, box.y + box.h + yOffset - box.h + 3 + box.h); // left bottom
        vertex(box.x - box.a - 18, box.y + yOffset + box.a + 3 + box.h - box.a); // right bottom
        vertex(box.x + box.d, box.y + box.a + yOffset + 3 + box.h); // right top

        endShape(CLOSE);
    }

    if (box.charge == "neg") {
        // fill('red');
        // top
        beginShape();
        vertex(box.x, box.y + box.h + yOffset - box.h - 3); // left bottom
        vertex(box.x, box.y + yOffset + box.a - 3); // left top
        vertex(box.x + box.d, box.y + box.a + yOffset - 3); // right top
        endShape(CLOSE);

        // bottom
        beginShape();
        vertex(box.x + box.w, box.y + box.h + yOffset - box.h + 3 + box.h); // left bottom
        vertex(box.x + box.w - box.a - 18, box.y + yOffset + box.a + 3 + box.h - box.a); // right bottom
        vertex(box.x + box.w + box.d, box.y + box.a + yOffset + 3 + box.h); // right top

        endShape(CLOSE);
    }

}

drawSurface = (box) => {
    strokeWeight(1.4);
    // stroke(box.color);
    let surfaceOpacity = 0;

    if (box == redboxScene6b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == redboxScene7b) {
        surfaceOpacity = surfaceOpacity + 40;
    }
    if (box == redboxScene7c) {
        surfaceOpacity = surfaceOpacity + 80;
    }

    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3 || sceneCount == 9) {
        // (box.charge == "pos") ? fill(blueSurface) : fill(redSurface);
        (box.charge == "pos") ? stroke(blue) : stroke(red);
    }
    else {
        // (box.charge == "pos") ? fill(54, 78, 99, 180 - surfaceOpacity) : fill(111, 67, 67, 180 - surfaceOpacity);
        // (box.charge == "pos") ? stroke(91, 149, 203, 120 - surfaceOpacity) : stroke(191, 81, 81, 120 - surfaceOpacity);
        (box.charge == "pos") ? stroke(91, 149, 203, 120) : stroke(191, 81, 81, 120);
    }

    noFill();

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
        text('EF (vector)', 130, 50);
    }

    if (sides.includes("s")) {
        drawSurface(box);
    }

    if (showArrows && (box.sides).includes("p") && sides.includes("p")) {
        drawArrows(box, "p");
    }

    if (showArrows && (box.sides).includes("l") && sides.includes("l")) {
        drawArrows(box, "l");
    }
    
    if (showArrows & (box.sides).includes("r") && sides.includes("r")) {
        drawArrows(box, "r");
    }
}

drawCharges = (box) => {
    frameRate(60);
    chargeXArray = [];
    chargeYArray = [];
    chargeXRArray = [];
    chargeYRArray = [];

    // populate arrays
    if (sceneCount == 9) { // scene 9
        for (let i = 0; i < 40; i++) {
            chargeXArray.push(Math.floor(Math.random() * (60)) + boxScene1.x + 20)
            chargeYArray.push(Math.floor(Math.random() * (boxScene1.h + 60)) + boxScene1.y - 80)
        }
        for (let i = 0; i < 40; i++) {
            chargeXRArray.push(Math.floor(Math.random() * (160)) + boxScene1.x + 20)
            chargeYRArray.push(Math.floor(Math.random() * (boxScene1.h + 70)) + boxScene1.y - 110)
        }
    } else { // all other scenes
        for (let i = 0; i < 40; i++) {
            chargeXArray.push(Math.floor(Math.random() * (60)) + boxScene1.x + 20)
            chargeYArray.push(Math.floor(Math.random() * (boxScene1.h + 60)) + boxScene1.y - 70)
        }
        for (let i = 0; i < 40; i++) {
            chargeXRArray.push(Math.floor(Math.random() * (60)) + boxScene1.x + 20)
            chargeYRArray.push(Math.floor(Math.random() * (boxScene1.h + 60)) + boxScene1.y - 80)
        }
    }

    

    let chargeSize = 12;
    let signSize = chargeSize - 4;
    let chargeOpacity = 100;
    let signOpacity = 100;

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
            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                fill(245, 112, 112, chargeOpacity + 60);
            }
            else {
                fill(245, 112, 112, chargeOpacity);
            }
            
            let chargeX = chargeXRArray[i];
            let chargeY = chargeYRArray[i];

            circle(chargeX + moveCharge, chargeY + 20, chargeSize);

            if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                stroke(253, 192, 192); // redSign
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
        let thickScale = .15;


        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
            fillAmount = 220; // 3d fillamount
        }
        else {
            fillAmount = 240; // 2d fillamount
        }
        
        // for each row
        for (let r = 0; r < rows; r++) {
            // for each set in z axis
            for (let i = 0; i < 5; i++) {
                (box.charge == "pos") ? stroke(91, 149, 203, fillAmount) : stroke(193, 81, 81, fillAmount);

                strokeWeight(box.chargeAmount * thickScale);
                
                strokeCap(SQUARE);
                let btwLine = 3;

                // stroke(91, 149, 203, fillAmount);
                let gap;
                // strokeWeight(3);
                // right set of lines
                
                if (box.charge == "pos") {
                    strokeWeight(box.chargeAmount * thickScale);
                    gap = 0;
                    // blue right lines
                    if (sides.includes("r")) {
                        line(gap + box.c + offsetX,
                            box.y + spacing + offsetY,
                            gap + box.c + lineSize + offsetX,
                            box.y + spacing + offsetY);
                    }
                    // blue left lines
                    if (sides.includes("l")) {
                        line(box.c - gap + offsetX,
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
                            line(gap + box.x + box.w + offsetX,
                                box.y + spacing + offsetY,
                                gap + box.x + lineSize + offsetX,
                                box.y + spacing + offsetY);
                        }
                        else {
                            // 2D
                            let redRightGap = 0;
                            if (sceneCount == 9) {
                                redRightGap = 50;
                            }

                            if (sceneCount == 6 || sceneCount == 7 || sceneCount == 8 ) {
                                strokeWeight(boxScene7.chargeAmount * thickScale);
                            }
                            
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
                            line(box.x - gap + offsetX,
                                box.y + spacing + offsetY,
                                gap + box.x - lineSize - gap + offsetX - triangleSize,
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
                    color = purple;
                    // stroke(color[0], color[1], color[2], fillAmount); // purple color
                    stroke(147, 82, 212, 200); // purple
                    
                    strokeWeight(box.chargeAmount * thickScale + (blueBox.chargeAmount * thickScale)); // box scene 5 charges
                    // strokeWeight(6);

                    let movePurple = 0;
                    if (box == redboxScene6b) {
                        movePurple = 100;
                    }
                    if (box == redboxScene7b) {
                        movePurple = 60;
                    }
                    if (box == redboxScene7c) {
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
                    // // mid blue triangle
                    if (sides.includes("p")) {
                        let yOffset = -11;
                        let off = -7;
                        noStroke();
                        fill(91, 149, 203, 100);
                        drawTriangle(triangleSize, "right", 7 + box.x + off, box.y + spacing + yOffset);
                    }

                    let off = -4;
                    // red left triangles
                    if (sides.includes("l")) {
                        drawTriangle(triangleSize, "right", box.x + offsetX, box.y + spacing + offsetY + btwLine);
                    }
                    // red right triangles
                    if (sides.includes("r")) {
                        let m = -8;
                        drawTriangle(triangleSize, "left", m + box.x + box.w + off + gap + offsetX, box.y + spacing + offsetY + btwLine);
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
    else if (mouseX > 0) {
        toggleArrows();
    }
}

showBlueArrows = () => {
    for (let i = 0; i < blueBoxes.length - 1; i++) {
        (blueBoxes[i].showArrows == true)?
            blueBoxes[i].showArrows = false:
            blueBoxes[i].showArrows = true;
    }
}

showRedArrows = () => {
    for (let i = 0; i < redBoxes.length - 1; i++) {
        (redBoxes[i].showArrows == true) ?
            redBoxes[i].showArrows = false :
            redBoxes[i].showArrows = true;
    }
}

showPurpleArrows = () => {
    // for (let i = 0; i < redBoxes.length - 1; i++) {
    //     (redBoxes[i].showArrows == true) ?
    //         redBoxes[i].showArrows = false :
    //         redBoxes[i].showArrows = true;
    // }
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