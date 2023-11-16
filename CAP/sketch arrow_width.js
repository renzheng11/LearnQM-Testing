

let chargeCoordinates;
let numRedBoxes;

let blueBox;
let canvas;

let drawScreen4;
let drawScreen5;
let drawScreen6;
let drawScreen7;
let drawScreen8;


let box1;

let box2; 

let box4;
let redbox4;

let box5;
let redbox5;

let box6;
let redbox6a;
let redbox6b;

let box7;
let redbox7a;
let redbox7b;
let redbox7c;

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

let scene6RedBoxes;

let flowDirection;
let togglePairs;


setup = () => {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');

    showBlue = false;
    chargeDivisor = 4;
    flowDirection = "right";
    numRedBoxes = 0;

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

    chargeCoordinates = [];

    bg = 18;

    graphY = 550;
    graphW = 540;

    leftPadding = 48;
    letShiftRed = 10;
    
    // graphX = graphC - graphW / 2;
    graphC = graphW / 2 + leftPadding;
    graphX = graphC - graphW / 2 + leftPadding;

    volumeWidth = 100;

    drawScreen4 = false;
    drawScreen5 = false;
    drawScreen6 = false;
    drawScreen7 = false;
    drawScreen8 = false;

    drawScene1 = false;
    drawScene2 = false;

    

    boxThickness = 1;



    // instantiate boxes
    box1 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    blueBox = box1;

    box2 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box3 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);

    box4 = new Box(true, "pos", true, 60, false, 440, true, false, "lrp", true, 310, 140, boxThickness, 80);
    redbox4 = new Box(true, "neg", true, 60, true, 440, true, true, "lrp", true, 400, 150, boxThickness, 80);

    box5 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    redbox5 = new Box(true, "neg", true, 42, true, 440, true, true, "lrp", true, 400, 152, boxThickness, 80);

    box6 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    redbox6a = new Box(true, "neg", true, 40, true, 440, true, true, "lrp", true, 400, 150, boxThickness, 80);
    redbox6b = new Box(false, "neg", true, 20, true, 440, true, true, "lrp", true, 490, 170, boxThickness, 80);

    box7 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    redbox7a = new Box(true, "neg", true, 10, true, 440, true, true, "lrp", true, 380, 150, boxThickness, 80);
    redbox7b = new Box(true, "neg", true, 20, true, 440, true, true, "lrp", true, 450, 160, boxThickness, 80);
    redbox7c = new Box(true, "neg", true, 30, true, 440, true, true, "lrp", true, 520, 170, boxThickness, 80);

    box9 = new Box(true, "pos", true, 60, false, 440, true, true, "lrp", true, 310, 140, boxThickness, 80);
    redbox9 = new Box(true, "neg", true, 60, true, 440, true, true, "lrp", true, 380, 150, 142, 80);

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
    // for (let i = 0; i < 60; i++) {
    //     chargeXArray.push(Math.floor(Math.random() * (64)) + box1.x + 20);
    //     chargeYArray.push(Math.floor(Math.random() * (box1.h - 100)) + box1.y);
    // }
    // for (let i = 0; i < 60; i++) {
    //     chargeXRArray.push(Math.floor(Math.random() * (64)) + box1.x + 20);
    //     chargeYRArray.push(Math.floor(Math.random() * (box1.h - 100)) + box1.y);
    // }

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

    scene6RedBoxes = [redbox6a];
    img = loadImage('vecE.png');
    img2 = loadImage('vecEGrey.png');

    togglePairs = {
        // "blueToggle4": box1
        // "blueToggle2": box2

        "blueToggle4": box4,
        "redToggle4": redbox4,

        "blueToggle5": box5,
        "redToggle5": redbox5,

        "blueToggle6": box6,
        "redToggle6a": redbox6a,
        "redToggle6b": redbox6b,

        "blueToggle7": box7,
        "redToggle7a": redbox7a,
        "redToggle7b": redbox7b,
        "redToggle7c": redbox7c,

        "blueToggle9": box9,
        "redToggle9": redbox9,

        // "blueToggle7": redbox9,
        // // document.getElementById("redToggle7").checked = true;
        // "redToggle7a": redbox9,
        // "redToggle7b": redbox9,
        // "redToggle7c": redbox9,
        // "purpleToggle7": redbox9,
    }
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
    // resetToggles();
    drawBox(box1, false, false, "s");
    if (drawScene1) {
        drawBox(box1, true, true, "l");
        drawBox(box1, true, true, "s");
        drawBox(box1, true, true, "r");
        // drawBox(box1, true, true, "s");
        drawCharges(box1);
        
        fill(grey);
        noStroke();
        // text('vec E', 130, 50);
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
        
    }
}

function scene2() { // 2scene
    // resetToggles();
    blueBox = box2;

    drawBox(box2, true, true, "l");
    drawBox(box2, true, true, "s");
    drawBox(box2, true, true, "r");
    drawGraph(box2, null);
    
    drawCharges(box2);

    // box2.updateCharge(sliderCharge);
}

function scene3() { // 3scene
    // resetToggles();
    blueBox = box3;
    drawGraph(box3, null);

    drawBox(box3, true, true, "l");
    drawBox(box3, true, true, "s");
    drawCharges(box3);
    drawBox(box3, true, true, "r");


    // drawCharges(box3);
}

function scene4() { // 4scene
    // resetToggles();

    // document.getElementById(Object.keys(togglePairs)[0]).checked ? Object.values(togglePairs)[0].toggleArrows(true): null;
    document.getElementById("blueToggle4").checked ? box4.toggleArrows(true): null;
    document.getElementById("redToggle4").checked ? redbox4.toggleArrows(true) : null;
    document.getElementById("purpleToggle4").checked ? redbox4.togglePurple(true) : null;
    !document.getElementById("screen4").checked ? drawScreen4 = false : null;

    blueBox = box4;
    drawGraph(box4, [redbox4]);


    
    drawBox(box4, true, true, "s");
    drawCharges(box4);
    box4.showArrows? drawBox(box4, true, true, "l"): null;
    
    
    
    box4.showArrows ? drawBox(box4, true, true, "r") : null;
    drawBox(redbox4, true, true, "s");
    
    drawCharges(redbox4);
    redbox4.showArrows ? drawBox(redbox4, true, true, "lrp") : null;




    (mouseX > graphC && mouseX < graphW - 10)? redbox4.updateX(mouseX): null;
    
    drawScreen4? drawScreen(redbox4): null;
}

function scene5() { // 5scene
    // resetToggles();
    document.getElementById("blueToggle5").checked ? box5.toggleArrows(true) : null;
    document.getElementById("redToggle5").checked ? redbox5.toggleArrows(true) : null;
    document.getElementById("purpleToggle5").checked ? redbox5.togglePurple(true) : null;
    !document.getElementById("screen5").checked ? drawScreen5 = false : null;

    blueBox = box5;

    drawGraph(box5, [redbox5]); 

    box5.showArrows? drawBox(box5, true, true, "l"): null;
    


    drawBox(box5, true, true, "s");
    drawCharges(box5);
    box5.showArrows ? drawBox(box5, true, true, "r") : null;
    drawBox(redbox5, true, true, "s");
    drawCharges(redbox5);

    mouseX > graphC && mouseX < graphW? redbox5.updateX(mouseX): null;
    redbox5.showArrows? drawBox(redbox5, true, true, "lr"): null;
    redbox5.showPurple? drawBox(redbox5, true, true, "p"): null;
    
    drawScreen5?        drawScreen(redbox5): null;
}

function scene6() { // 6scene
    // resetToggles();
    document.getElementById("blueToggle6").checked ? box6.toggleArrows(true) : null;
    document.getElementById("redToggle6a").checked ? redbox6a.toggleArrows(true) : null;
    document.getElementById("redToggle6b").checked ? redbox6b.toggleArrows(true) : null;
    document.getElementById("purpleToggle6").checked ? redbox6a.togglePurple(true) : null;
    !document.getElementById("screen6").checked ? drawScreen6 = false : null;

    blueBox = box6;

    drawGraph(box6, scene6RedBoxes);

    
    

    drawBox(box6, true, true, "s")
    drawCharges(box6);
    box6.showArrows? drawBox(box6, true, true, "l"): null;
    box6.showArrows? drawBox(box6, true, true, "r"): null;
    drawBox(redbox6a, true, true, "s");
    drawCharges(redbox6a);
    redbox6a.showArrows? drawBox(redbox6a, true, true, "lr"): null;
    redbox6a.showPurple ? drawBox(redbox6a, true, true, "p") : null;

    if (redbox6b.showBox) {
        scene6RedBoxes.push(redbox6b);
        
        drawBox(redbox6b, true, true, "s");
        drawCharges(redbox6b);
        redbox6b.showArrows? drawBox(redbox6b, true, true, "lr"): null;
        redbox6b.showPurple? drawBox(redbox6b, true, true, "p") : null;
    }

    drawScreen6 ? drawScreen(redbox6a): null;
}

function scene7() { // 7scene
    // resetToggles();
    blueBox = box7;
    drawGraph(box7, [redbox7a, redbox7b, redbox7c]);

    document.getElementById("blueToggle7").checked ? box7.toggleArrows(true) : null;
    document.getElementById("redToggle7a").checked ? redbox7a.toggleArrows(true) : null;
    document.getElementById("redToggle7b").checked ? redbox7b.toggleArrows(true) : null;
    document.getElementById("redToggle7c").checked ? redbox7c.toggleArrows(true) : null;
    document.getElementById("purpleToggle7").checked ? redbox7a.togglePurple(true) : null;
    !document.getElementById("screen7").checked ? drawScreen7 = false : null;

    
    
    drawBox(box7, true, true, "s");
    drawCharges(box7);
    drawBox(box7, true, true, "l");
    drawBox(redbox7a, true, true, "s");
    drawCharges(redbox7a);
    drawBox(redbox7a, true, true, "lr");
    drawBox(redbox7a, true, true, "p");
    drawBox(redbox7b, true, true, "s");
    drawCharges(redbox7b);
    drawBox(redbox7b, true, true, "lr");
    drawBox(redbox7b, true, true, "p");
    drawBox(redbox7c, true, true, "s");
    drawCharges(redbox7c);
    drawBox(redbox7c, true, true, "lr");
    drawBox(redbox7c, true, true, "p");
    drawBox(box7, true, true, "r");

    drawScreen7 ? drawScreen(redbox7a): null;
}

function scene8() { //8scene
    resetToggles();
    // blueBox = box8;
    // drawGraph(box7, [redbox7a]);


    // drawCharges(redbox7a);
    // drawCharges(redbox7b);
    // drawCharges(redbox7c);

    // drawBox(box, true, true, "ls");
    // drawBox(redbox7a, true, true, "lrps");
    // drawBox(redbox7b, true, true, "lrs");
    // drawBox(redbox7c, true, true, "lrs");
    // drawBox(box7, true, true, "r");

    blueBox = box9;
    drawGraph(box9, [redbox9], true);

    drawBox(box9, true, true, "sl");
    drawCharges(box9);
    drawBox(box9, true, true, "r");
    drawBox(redbox9, true, true, "plrs");
    drawCharges(redbox9);
}

function scene9() { //9scene
    resetToggles();
    // for (i = 0; i < blueBoxes.length; i++) {
    //     blueBoxes[i].toggleArrows(true);
    // }
    // for (i = 0; i < redBoxes.length; i++) {
    //     redBoxes[i].toggleArrows(true);
    //     redBoxes[i].togglePurple(true);
    // }

    blueBox = box9;
    drawGraph(box9, [redbox9]);

    
    drawBox(box9, true, true, "sl");
    drawCharges(box9);
    drawBox(redbox9, true, true, "plrs");
    drawCharges(redbox9);
    drawBox(box9, true, true, "r");
}

resetToggles = () => {
    console.log("reset toggles");
    for (let index = 0; index < togglePairs.length; index++) {
        console.log(document.getElementById(Object.keys(togglePairs)[i]).checked);
        document.getElementById(Object.keys(togglePairs)[i]).checked ? Object.values(togglePairs)[i].toggleArrows(true) : null;
    }
    // for (let key in togglePairs) {
    //     // console.log(key, yourobject[key]);

    // }
}

addBox = () => {
    redbox6b.resetCharges();
    redbox6b.toggleShowBox(true);
}

flowCharges = () => {
    if (flowDirection == "right") {
        redbox7a.updateCharge(10);
        redbox7a.resetCharges();
        redbox7b.updateCharge(20);
        redbox7b.resetCharges();
        redbox7c.updateCharge(30);
        redbox7c.resetCharges();
        flowDirection = "left";
    }
    else if (flowDirection == "left") {
        redbox7a.updateCharge(30);
        redbox7a.resetCharges();
        redbox7b.updateCharge(20);
        redbox7b.resetCharges();
        redbox7c.updateCharge(10);
        redbox7c.resetCharges();
        flowDirection = "right";
    }

    // redbox7a = new Box(true, "neg", true, 30, true, 440, true, true, "lrp", 120, 370, 150, boxThickness, 80);
    // redbox7b = new Box(true, "neg", true, 20, true, 440, true, true, "lrp", 0, 430, 150, boxThickness, 80);
    // redbox7c = new Box(true, "neg", true, 10, true, 440, true, true, "lrp", 0, 490, 150, boxThickness, 80);

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

drawGraph = (box, redBoxes) => {
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
            if (sceneCount != 8) {
                points = [graphX];
                heights = [redLeftY + graphY];
                for (i = 0; i < redBoxes.length; i++) {
                    points.push(redBoxes[i].x);
                }
                for (i = 0; i < redBoxes.length; i++) {
                    heights.push((unit * redBoxes[i].chargeAmount) + graphY);
                }
                drawLines(points, heights, red, false, false);
            } else {
                let graphEnd = graphC + graphW / 2 - 46;
                points = [
                    graphX,
                    graphC,
                    graphC,
                    redbox9.x,
                    redbox9.x + redbox9.w,
                ];
                heights = [
                    purpleLeftY + graphY,
                    graphY,
                    graphY - (unit * redbox9.chargeAmount),
                    graphY - (unit * redbox9.chargeAmount),
                    graphY + (unit * redbox9.chargeAmount),
                ];
                drawSlope(points, heights, red);
            }
        }   
        // purple graph lines
        if (redBoxes[0].showPurple) {
            purpleLeftY = (redLeftY-  blueLeftY);


            if (sceneCount != 8) {
                points = [graphX, graphC];
                heights = [purpleLeftY + graphY, graphY - (unit * redBoxes[0].chargeAmount) - (unit * box.chargeAmount)];
                for (i = 0; i < redBoxes.length; i++) {
                    points.push(redBoxes[i].x);
                }
                for (i = 0; i < redBoxes.length; i++) {
                    heights.push((unit * redBoxes[i].chargeAmount) - (unit * box.chargeAmount) + graphY);
                }
                drawLines(points, heights, purpleColor, true, false);
            } else {
                let graphEnd = graphC + graphW / 2 - 46;
                points = [
                    graphX,
                    graphC,
                    graphC,
                    redbox9.x,
                    redbox9.x + redbox9.w,
                ];
                heights = [
                    purpleLeftY + graphY,
                    graphY,
                    graphY - (unit * redbox9.chargeAmount) - (unit * box.chargeAmount),
                    graphY - (unit * redbox9.chargeAmount) - (unit * box.chargeAmount),
                    graphY,
                ];
                drawSlope(points, heights, purpleColor);
            }

        }   
    }
}

drawSlope = (points, heights, color) => {
    stroke(color);
    for (i = 0; i < points.length; i++) {
        line(points[i], heights[i], points[i + 1], heights[i + 1]); // line
    }
}

drawLines = (points, heights, color, drawMid) => {
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

reverseCharge = () => {
    box3.reverseCharge();
}

showScreen = () => {
    if (sceneCount == 4) {
        drawScreen4 = !(drawScreen4);
    }
    if (sceneCount == 5) {
        drawScreen5 = !(drawScreen5);
    }
    if (sceneCount == 6) {
        drawScreen6 = !(drawScreen6);
    }
    if (sceneCount == 7) {
        drawScreen7 = !(drawScreen7);
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

    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
        // (box.charge == "pos") ? fill(blueSurface) : fill(redSurface);
        (box.charge == "pos") ? stroke(blue) : stroke(red);
        (box.charge == "pos") ? fill("#1D252B") : fill("#2F2121");
        // fill(18, 18, 18);
        // (box.charge == "pos") ? fill(54, 78, 99, 80) : fill(111, 67, 67, 80);
        // noFill();scen
    }
    else {
        (box.charge == "pos") ? stroke(91, 149, 203, 120) : stroke(191, 81, 81, 120);
        // fill(18, 18, 18);
        // noFill();
        // (box.charge == "pos") ? fill(54, 78, 99, 200) : fill(111, 67, 67, 200);
        (box.charge == "pos") ? fill(29, 37, 43, 120) : fill(47, 33, 33, 120);
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
        color = purpleColor;
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
        // let mathContent = "\\(x^2 + y^2 = r^2\\)";
        // let mathDiv = createDiv(mathContent);
        // mathDiv.position(10, 10);
        // MathJax.Hub.Queue(["Typeset", MathJax.Hub, mathDiv.elt]);
        // // var mathContent = '\\vec E';

        // let mathDiv = createDiv(mathContent);
        // mathDiv.position(10, 10);

        // text(math, 130, 50);
        image(img, 120, 90, img.width / 1.5, img.height / 1.5);
        // Displays the image at point (0, height/2) at half size
        // image(img, 0, height / 2, img.width / 2, img.height / 2);
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
    let showCharges = box.showChargeGrid;
    let chargeSize = 12;
    let signSize = chargeSize - 4;
    let chargeOpacity = 60;
    let signOpacity = 60;

    noStroke();
    
    // grid charges
    // Returns a random integer from 1 to 100:
    // Example: Returns a random integer from 1 to 100:
    // Math.floor(Math.random() * 100) + 1;

    // for (let i = 0; i < box.chargeAmount; i++) {
    //     noStroke(); 
    //     fill(66, 117, 166, chargeOpacity + 60); // blueCharge
    //     // moveCharge = box.x - 316;

    //     let xPos = Math.floor(Math.random() * chargeXArray.length);
    //     let yPos = Math.floor(Math.random() * chargeYArray.length);

    //     let chargeX = chargeXArray[xPos];
    //     let chargeY = chargeYArray[i];

    // }

    let X = box.x - 4;
    let Y = box.y - 70;
    let P = 18;

    chargeCoordinates = [
        [[0, 0], [0, 0], [0, 0], [X + P*4, Y + P*1]], // 1
        [[0, 0], [0, 0], [X + P*3, Y + P*2], [X + P*4, Y + P*2]], // 2
        [[0, 0], [X + P*2, Y + P*3], [X + P*3, Y + P*3], [X + P*4, Y + P*3]], // 3
        [[X + P, Y + P*4], [X + P*2, Y + P*4], [X + P*3, Y + P*4], [X + P*4, Y + P*4]], // 4

        [[X + P, Y + P * 5], [X + P * 2, Y + P * 5], [X + P * 3, Y + P * 5], [X + P * 4, Y + P * 5]], // 5
        [[X + P, Y + P * 6], [X + P * 2, Y + P * 6], [X + P * 3, Y + P * 6], [X + P * 4, Y + P * 6]], // 6
        [[X + P, Y + P * 7], [X + P * 2, Y + P * 7], [X + P * 3, Y + P * 7], [X + P * 4, Y + P * 7]], // 7
        [[X + P, Y + P * 8], [X + P * 2, Y + P * 8], [X + P * 3, Y + P * 8], [X + P * 4, Y + P * 8]], // 8
        [[X + P, Y + P * 9], [X + P * 2, Y + P * 9], [X + P * 3, Y + P * 9], [X + P * 4, Y + P * 9]], // 9
        [[X + P, Y + P * 10], [X + P * 2, Y + P * 10], [X + P * 3, Y + P * 10], [X + P * 4, Y + P * 10]], // 10
        [[X + P, Y + P * 11], [X + P * 2, Y + P * 11], [X + P * 3, Y + P * 11], [X + P * 4, Y + P * 11]], // 11
        [[X + P, Y + P * 12], [X + P * 2, Y + P * 12], [X + P * 3, Y + P * 12], [X + P * 4, Y + P * 12]], // 12
        [[X + P, Y + P * 13], [X + P * 2, Y + P * 13], [X + P * 3, Y + P * 13], [X + P * 4, Y + P * 13]], // 13
        [[X + P, Y + P * 14], [X + P * 2, Y + P * 14], [X + P * 3, Y + P * 14], [X + P * 4, Y + P * 14]], // 14
        // [[X + P, Y + P * 15], [X + P * 2, Y + P * 15], [X + P * 3, Y + P * 15], [X + P * 4, Y + P * 15]], // 15
        // [[X + P, Y + P * 16], [X + P * 2, Y + P * 16], [X + P * 3, Y + P * 16], [X + P * 4, Y + P * 16]], // 16

        [[X + P, Y + P * 15], [X + P * 2, Y + P * 15], [X + P * 3, Y + P * 15], [X + P * 4, Y + P * 15]], // 15
        [[X + P, Y + P * 16], [X + P * 2, Y + P * 16], [X + P * 3, Y + P * 16], [0, 0]], // 16
        [[X + P, Y + P * 17], [X + P * 2, Y + P * 17], [0, 0], [0, 0]], // 17
        [[X + P, Y + P * 18], [0, 0], [0, 0], [0, 0]], // 18
    ]

    // for each row (18)
    for (let r = 0; r < chargeCoordinates.length; r++) {
        // for eah column
        for (let c = 0; c < 4; c++) {
            // if (box.charge == "pos") {
            // colors
            if (box.charge == "pos") {
                // showCharges = showPosCharges;
                if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                    fill(66, 117, 166, chargeOpacity + 30); // blueCharge
                }
                else {
                    fill(66, 117, 166, chargeOpacity); //redCharge
                }
            }
            else if (box.charge == "neg") {
                // showCharges = showNegCharges;
                if (sceneCount == 1 || sceneCount == 2) {
                    fill(245, 112, 112, chargeOpacity + 30);
                }
                else if (sceneCount == 3) {
                    fill(245, 112, 112, chargeOpacity + 30);
                }
                else {
                    fill(245, 112, 112, chargeOpacity);
                }
            }

            let chargeX = chargeCoordinates[r][c][0];
            let chargeY = chargeCoordinates[r][c][1];
            
            if (showCharges[r][c] == 1) {
                // random based on number of charges
                // Returns a random integer from 1 to 100:
                // Example: Returns a random integer from 1 to 100:
                // Math.floor(Math.random() * 100) + 1;

                    noStroke();
                    circle(chargeX, chargeY, chargeSize);

                    strokeWeight(1);


                    if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                        stroke(183, 220, 255, signOpacity + 30); // blueSign
                    }
                    else {
                        stroke(183, 220, 255, signOpacity); // blueSign
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
        rect(0, 0, 30, 30);
    }


    // random location charges
    // for (let i = 0; i < box.chargeAmount; i++) {
    //     noStroke();
    //     moveCharge = box.x - 316;

    //     if (box.charge == "pos") {
    //         if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
    //             fill(66, 117, 166, chargeOpacity + 30); // blueCharge
    //         }
    //         else {
    //             fill(66, 117, 166, chargeOpacity); //redCharge
    //         }

    //         let chargeX = chargeXArray[i];
    //         let chargeY = chargeYArray[i]

    //         circle(chargeX + moveCharge, chargeY, chargeSize);

    //         strokeWeight(1);

    //         if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
    //             stroke(183, 220, 255, signOpacity + 30); // blueSign
    //         }
    //         else {
    //             stroke(183, 220, 255, signOpacity); // blueSign
    //         }
    //         // cross line
    //         line(chargeX + moveCharge - signSize / 2, chargeY, chargeX + moveCharge + signSize / 2, chargeY)
    //         // up line
    //         line(chargeX + moveCharge, chargeY - signSize / 2, chargeX + moveCharge, chargeY + signSize / 2)
    //     }
    //     else if (box.charge == "neg") {
    //         if (sceneCount == 1 || sceneCount == 2) {
    //             fill(245, 112, 112, chargeOpacity + 30);
    //         }
    //         else if (sceneCount == 3) {
    //             fill(245, 112, 112, chargeOpacity + 30);
    //         }
    //         else {
    //             fill(245, 112, 112, chargeOpacity);
    //         }
            
    //         let chargeX = chargeXRArray[i];
    //         let chargeY = chargeYRArray[i];

    //         circle(chargeX + moveCharge, chargeY + 20, chargeSize);

    //         if (sceneCount == 1 || sceneCount == 2) {
    //             stroke(253, 192, 192); // redSign
    //         }
    //         else if (sceneCount ==3) {
    //             stroke(253, 192, 192, 120); // redSign
    //         }
    //         else {
    //             stroke(253, 192, 192, signOpacity); // redSign
    //         }
    //         strokeWeight(1);

    //         // cross line
    //         line(chargeX + moveCharge - signSize / 2, chargeY + 20, chargeX + moveCharge + signSize / 2, chargeY + 20)
    //     }
    // }

resetCharges = (box) => {
    for (let r = 0; r < chargeCoordinates.length; r++) {
        for (let c = 0; c < 4; c++) {

            // positive charges
            let chance = Math.floor(Math.random() * 60);
            // console.log(box.chargeAmount);
            if (chance <= box.chargeAmount) {
                // console.log("chance 1");
                this.showChargeGrid[r][c] = 1;
            } else {
                this.showChargeGrid[r][c] = 0;
                // console.log("chance 0");
            }

            // negative charges
            chance = Math.floor(Math.random() * 60);
            // console.log(box.chargeAmount);
            if (chance <= box.chargeAmount) {
                // console.log("chance 1");
                this.showChargeGrid[r][c] = 1;
            } else {
                this.showChargeGrid[r][c] = 0;
                // console.log("chance 0");
            }
        }
    }
}

drawScreen = (box) => {
    fill(18, 18, 18, 255);
    noStroke();
    let gap = 20;

    if (sceneCount == 5) {
        fill(18, 18, 18, 180); // 56 opacity
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


drawArrows = (box, sides) => {
    let rows = 5;
    // let spaceBetween = rows * 4.2;
    let spaceBetween = rows * 10;
    let spacing = spaceBetween;

    let triangleSize = 12;
    let lineSize = 255;

        let offsetX = 0;
        let offsetY = 0;
        let fillAmount;
        let thickScale = .20;


        if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
            fillAmount = 255; // 3d fillamount
        }
        else {
            fillAmount = 240; // 2d fillamount
        }
        
        let moveRed = 0;  
        let moveBlue = 0;
        let moveRedTriangles = 0;
    if (sceneCount == 3 || sceneCount == 2 || sceneCount == 1) {
            // moveRed = 60;
            // moveRedTriangles = 60;
            // moveBlue = 60;
            moveRed = 0;
            moveRedTriangles = 100;
            moveBlue = 0;
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
                    gap = 4;
                    // blue right lines
                    if (sides.includes("r")) {
                        line(gap + box.c + offsetX + moveBlue,
                            box.y + spacing + offsetY,
                            gap + box.c + lineSize + offsetX + 10,
                            box.y + spacing + offsetY);
                    }
                    // blue left lines
                    if (sides.includes("l")) {
                        line(box.c - gap + offsetX - moveBlue - 2,
                            box.y + spacing + offsetY,
                            box.c - lineSize - gap + offsetX,
                            box.y + spacing + offsetY);
                    }
                }

                else if (box.charge == "neg") {
                    gap = 6;
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
                                redRightGap = 70;
                            }

                            // if (sceneCount == 6 || sceneCount == 7 || sceneCount == 8 ) {
                            //     strokeWeight(box7.chargeAmount/chargeDivisor * thickScale);
                            // }
                            
                            line(gap + box.c + box.w + offsetX - 4 - redRightGap, // left x
                                box.y + spacing + offsetY + btwLine, // left y
                                gap + blueBox.c + lineSize + offsetX, // right x
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
                        movePurple = 90;
                    }
                    if (box == redbox7b) {
                        movePurple = 70;
                    }
                    if (box == redbox7c) {
                        movePurple = 140;
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
                let move = 40;
                (box.charge == "pos") ? fill(91, 149, 203, fillAmount) : fill(193, 81, 81, fillAmount);

                if (box.charge == "pos") {
                    // blue right triangles
                    if (sides.includes("r")) {
                        let arrowOffset = 584;
                        drawTriangle(triangleSize, "right",
                        box.c + lineSize + offsetX + 18, // x
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
                    // mid blue triangle
                    if (sides.includes("p")) {
                        let yOffset = -12;
                        let off = -7;
                        // noStroke();
                        // noFill();
                        fill(91, 149, 203, 100);
                        // stroke(91, 149, 203, 100);
                        // strokeWeight(1);
                        drawTriangle(triangleSize, "right", 7 + box.x + off, box.y + spacing + yOffset);

                        // fill(bg);
                        // drawTriangle(triangleSize - 4, "right", 7 + box.x + off - 3, box.y + spacing + yOffset);
                    }

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
                        let m = 0;

                        drawTriangle(triangleSize, "left", m + box.x + box.w + off + gap + offsetX + moveRedTriangles, box.y + offsetY + spacing + v);
                    } 
                }                

                offsetX += 20;
                offsetY -= 24;
                if (sceneCount == 1 || sceneCount == 2 || sceneCount == 3) {
                    if (i == 0) {
                        fillAmount -= 90; // change for 3d // 40 - 255
                    }
                    else if (i == 1) {
                        fillAmount -= 60; // change for 3d // 40 - 255
                    }
                    else if (i == 2) {
                        fillAmount -= 40; // change for 3d // 40 - 255
                    }
                    else if (i == 3) {
                        fillAmount -= 20; // change for 3d // 40 - 255
                    }
                }
                else {
                    if (r == 0) {
                        if (i == 0) {
                            fillAmount -= 220; // change for 3d // 40 - 255
                        }
                        else if (i == 1) {
                            fillAmount -= 40; // change for 3d // 40 - 255
                        }
                        else if (i == 2) {
                            fillAmount -= 40; // change for 3d // 40 - 255
                        }
                        else if (i == 3) {
                            fillAmount -= 40; // change for 3d // 40 - 255
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
                fillAmount = 255; // 3d fillamount
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

toggleArrows = (value) => {
    if (value == "blue") {
        for (i = 0; i < blueBoxes.length; i++) {
            blueBoxes[i].toggleArrows(!blueBoxes[i].showArrows);
            // blueBoxes[i].showArrows = !blueBoxes[i].showArrows;
        }
    }
    else if (value == "red") {
        for (i = 0; i < redBoxes.length; i++) {
            // redBoxes[i].toggleArrows("");
            redBoxes[i].toggleArrows(!redBoxes[i].showArrows);
        }
    }
    else if (value == "purple") {
        for (i = 0; i < redBoxes.length; i++) {
            // redBoxes[i].togglePurple("");
            redBoxes[i].togglePurple(!redBoxes[i].showPurple);
        }
    }
    else if (value == "red6a") {
        redbox6a.toggleArrows(!redbox6a.showArrows);
    }
    else if (value == "red6b") {
        redbox6b.toggleArrows(!redbox6b.showArrows);
    }
    else if (value == "red7a") {
        redbox7a.toggleArrows(!redbox7a.showArrows);
    }
    else if (value == "red7b") {
        redbox7b.toggleArrows(!redbox7b.showArrows);
    }
    else if (value == "red7c") {
        redbox7c.toggleArrows(!redbox7c.showArrows);
    }
}

// toggleRed = () => {
//     for (i = 0; i < redBoxes.length; i++) {
//         redBoxes[i].showArrows = !redBoxes[i].showArrows;
//     }
// }

// togglePurple = () => {
//     for (i = 0; i < redBoxes.length; i++) {
//         redBoxes[i].showPurple = !redBoxes[i].showPurple;
//     }
// }

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

updateCharge = (value) => {
    box2.updateCharge(value);
    box2.resetCharges();
}

updateWidth = (value) => {
    redbox9.updateW(int(value));
}