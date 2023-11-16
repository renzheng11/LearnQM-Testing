// vars
let color = {
    pos: "#DF7575",
    posDim: "#412E2E",
    neg: "#80C2FF",
    negDim: "#2A333A",
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

let charge;
let animCharges = [];
let displayCharges = [];

let dest1;
let dest2;
let dest3;
let dest4;

const myShape = {
    x: 200,
    y: 100,
    w: 50,
    h: 50
}

const batteryDim = {
    center: 300,
    leftX: 180,
    rightX: 420,
    y1: 380,
    y2: 440,
    batterySize: 40
}

let balls = [];

function setup() {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');


    dest1 = createVector(batteryDim.rightX, batteryDim.y1);
    dest2 = createVector(batteryDim.rightX, batteryDim.y2);
    dest3 = createVector(batteryDim.leftX, batteryDim.y2);
    dest4 = createVector(batteryDim.leftX, batteryDim.y1 - 120);

    // instant
    boxes.L1 = new Box(100, 100, 160, 280, 60);
    boxes.R1 = new Box(340, 100, 160, 280, 60);

    boxes.L2 = new Box(100, 100, 160, 280, 60);
    boxes.R2 = new Box(340, 100, 160, 280, 60);

    boxes.L3 = new Box(100, 100, 160, 280, 60);
    boxes.R3 = new Box(340, 100, 160, 280, 60);

    boxes.L4 = new Box(100, 100, 160, 280, 60);
    boxes.R4 = new Box(340, 100, 160, 280, 60);

    boxes.L5 = new Box(100, 100, 160, 280, 60);
    boxes.R5 = new Box(340, 100, 160, 280, 60);

    boxes.L6 = new Box(100, 100, 160, 280, 60);
    boxes.R6 = new Box(340, 100, 160, 280, 60);

    boxes.L7 = new Box(100, 100, 160, 280, 60);
    boxes.R7 = new Box(340, 100, 160, 280, 60);

    boxes.L8 = new Box(100, 100, 160, 280, 60);
    boxes.R8 = new Box(340, 100, 160, 280, 60);
}

function animateScanner() {
    // let b = boxes.R3;
    // // for each row
    // for (let row = 0; row < b.chargeMap.length; row++) {
    //     // for each column
    //     for (let col = 0; col < b.chargeMap[0].length; col++) {

                
    //             // console.log(charge.animated);
                
    //             // console.log(charge == b.chargeMap[row][col]);
    //                 // // change all charge types in first column to empty
    //                 // // release negative charges
    //         if (!(b.chargeMap[row][col].animated) && (b.scannerX > b.chargeMap[row][col].x)) {
    //                     // console.log(charge.animated);
    //             let charge = b.chargeMap[row][col];
    //                     charge.updateType("neg");
    //                     b.chargeMap[row][col] = (new Charge("empty", charge.x, charge.y));
    //                     animCharges.push(charge);
    //                     // offset the negative electrons a random amount
    //                     let randomOffsetX = Math.floor(Math.random() * 100);
    //                     p5.tween.manager.addTween(charge, `tween${col}${row}`)
    //                         .addMotions([
    //                             { key: 'x', target: 220 - randomOffsetX },
    //                             { key: 'y', target: charge.y + 7 }
    //                         ], 2000, 'easeIn')
    //                         .startTween();
    //                     b.chargeMap[row][col].updateAnimated(true);

    //             // // happens after electrons move to the left
    //                     setTimeout(() => {

    //                         // attract to surface
    //                         p5.tween.manager.addTween(charge, `tween${col}${row}`)
    //                             .addMotions([
    //                                 { key: 'x', target: 220 },
    //                             ], 1000, 'easeIn')
    //                             .startTween();

    //                         // remove empty circle
    //                         b.chargeMap[row][col].updateType("pos")

    //                     }, "2000");
                        
    //             boxes.L3.updateDim(true);
    //                 }
    //     }
    // }
}

function animateElectrons() {
    for (let i = 0; i < 20; i++) {
        boxes.R1.electrons[i].updateAnimate(true);
    }
}

function animateScene() {
    let b = boxes.R1;

    // for each row
    for (let row = 0; row < b.chargeMap.length; row++) {
        // for each column
        for (let col = 0; col < b.chargeMap[0].length; col++) {
            
            if (col == 0) {
                let charge = b.chargeMap[row][col];
                charge.updateType("neg");
                animCharges.push(charge);

                // change all charge types in first column to empty
                b.chargeMap[row][col] = (new Charge("empty", charge.x, charge.y));

                // release negative charges
                charge.updateType("neg");

                // offset the negative electrons a random amount
                let randomOffsetX = Math.floor(Math.random() * 100);
                p5.tween.manager.addTween(charge, `tween${row}`)
                    .addMotions([
                        { key: 'x', target: 220 - randomOffsetX },
                        { key: 'y', target: charge.y + 7 }
                    ], 2000, 'easeIn')
                    .startTween();

                // happens after electrons move to the left
                setTimeout(() => {
                    let tween = p5.tween.manager.getTween(`tween${row}`)

                    // attract to surface
                    p5.tween.manager.addTween(charge, `tween${row}`)
                        .addMotions([
                            { key: 'x', target: 220 },
                        ], 1000, 'easeIn')
                        .startTween();

                    // remove empty circle
                    b.chargeMap[row][col].updateType("pos")

                    // dim both boxes to see attraction
                    boxes.L1.updateDim(true);
                    boxes.R1.updateDim(true);

                }, "2000");
            }
        }
    }
}


function resetScene() {
    animCharges = [];
}

function drawBattery() {
    let center = batteryDim.center;
    let leftX = batteryDim.leftX;
    let rightX = batteryDim.rightX;
    let y1 = batteryDim.y1;
    let y2 = batteryDim.y2;
    let batterySize = batteryDim.batterySize;

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

function drawBox(box) {
    
    stroke("#AFAFAF");
    // rect(box.x, box.y, box.w, box.h);
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

    drawCharges(box);
    drawElectrons(box);
}


function drawAnimatedCharges(charges) {
    // console.log(charges);

    // console.log(charges);
    // for each row
    for (let i = 0; i < charges.length; i++) {
        // for each column
        let chargeX = charges[i].x + 20;
        let chargeY = charges[i].y + 20;
        // let chargeX = 500;
        // let charge
        let chargeType = charges[i].type;
        // console.log(chargeType);
        // console.log('calling drawCharge, chargeX: ', chargeX);
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
            // console.log(chargeType);
            
            if (box == boxes.R1 && col == 0) {
                drawCharge(chargeX, chargeY, chargeType, false);
            }
            else {
                drawCharge(chargeX, chargeY, chargeType, box.dim);
            }
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
    // Update and display each electron
    // for (let electron of box.electrons) {
    for (let i = 0; i < box.electrons.length; i++) {

        if (frameCount % 2 == 0) {
            if (box.electrons[i].animate) {
                // console.log(box.electrons[i].velocity);
                let atDest1 = checkDest(box.electrons[i], dest1);
                
                let atDest2 = checkDest(box.electrons[i], dest2);
                let atDest3 = checkDest(box.electrons[i], dest3);
                let atDest4 = checkDest(box.electrons[i], dest4);

                if (atDest1) {
                    box.electrons[i].updatePassed(1);
                }
                if (atDest2) {
                    box.electrons[i].updatePassed(2);
                }
                if (atDest3) {
                    box.electrons[i].updatePassed(3);
                }

                if (box.electrons[i].passedDest == 0) {
                    box.electrons[i].move(dest1);
                }
                if (box.electrons[i].passedDest == 1) {
                    box.electrons[i].move(dest2);
                }
                if (box.electrons[i].passedDest == 2) {
                    box.electrons[i].move(dest3);
                }
                if (box.electrons[i].passedDest == 3) {
                    box.electrons[i].move(dest4);
                }

                if (atDest4) {
                    // move into other box
                    if (box.electrons[i].show) {
                        box.electrons[i].updateShow(false);
                        box.electrons[i].updatePassed(3);
                        box.electrons[i].updateAnimate(false);

                        // change vector direction
                        
                        box.electrons[i].updateVelocity();
                        // console.log(this.velocity);
                        // console.log(box.electrons[i].velocity);
                    }

                    // box.electrons.splice(i,i);
                    if (box.electrons[i].pushed == false) {
                        // box.electrons[i].updateAnimated(false);
                        // update charge.box dimensions
                        boxes.L1.electrons.push(box.electrons[i]);
                        boxes.L1.updateNumElectrons(boxes.L1.numElectrons += 1);
                        box.electrons[i].updatePushed(true);

                        // box.electrons[i].move(dest4);

                        box.updateNumElectrons(box.numElectrons -= 1);

                        
                    }
                }
            }
            else { // not animated - moving around in box
                box.electrons[i].update();
            }
        }
        box.electrons[i].display();
    }
}

function updateElectronBox(electron, box) {
    // electron.update

}

function drawCharge(chargeX, chargeY, chargeType, dim) {
    let posSize = 12;
    let negSize = 8;
    let signSize = 8;
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
    dim ? stroke(color.signDim) : stroke("#FFF");
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

// taygra shoes


function scene1() {
    // tween draw
    background(18);
    noStroke();

    drawBox(boxes.L1);
    drawBox(boxes.R1);

    drawBattery();

    drawAnimatedCharges(displayCharges);
}

function scene2() {
    // console.log(animCharges);
    background(18);
    drawBox(boxes.L2);
    drawBox(boxes.R2);

    
}

function scene3() { 
    background(18);
    drawBox(boxes.L3);
    drawBox(boxes.R3);
    drawScanner(boxes.R3)
    animateScanner(boxes.R3);
    drawAnimatedCharges(animCharges);
}

function scene4() {
    drawBox(boxes.L4);
    drawBox(boxes.R4);
}

function scene5() {
    drawBox(boxes.L5);
    drawBox(boxes.R5);
}

function scene6() {
    drawBox(boxes.L6);
    drawBox(boxes.R6);
}

function scene7() {
    drawBox(boxes.L7);
    drawBox(boxes.R7);
}

function scene8() {
    drawBox(boxes.L8);
    drawBox(boxes.R8);
}



