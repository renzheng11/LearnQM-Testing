// vars
let color = {
    grey: "#989898",
    pos: "#DA6B6B",
    posDim: "#412E2E",
    neg: "#5FB1FF",
    negDim: "#124268",
    sign: "#7A3B3B",
    signDim: "#321F1F",
    grey: "#AFAFAF",
    battery: "#E6E2BC",
    none: "#575757",
    purple: "#9157CC"
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

const graphY = 560;
const graphW = 440;
const graphC = 260;
const leftPadding = 140;
const graphX = graphC - graphW / 2 + leftPadding;
const graphEnd = graphC + graphW / 2 - 60;

const rows = 20;
const cols = 10;

const myShape = {
    x: 200,
    y: 100,
    w: 50,
    h: 50
}
// battery measurements
const batteryPosition = {
    center: 300,
    leftX: 180,
    rightX: 420,
    y1: 381,
    y2: 420,
    batterySize: 40
}

const colorChangeInterval = 500;

// images
let batteryPos;
let batteryNeg;

let reverse = false;

// changing
let dest1;
let dest2;
let dest3;
let dest4;
let attractSide;
let destSide;
let currLeftBox;
let currRightBox;

let displayCharges = [];
let lastColorChange = 0;

let tempBox;
let atDestSide = false;

let sceneAnimated = false;
let showEF = false;
let numTransfer = 12;

let brightChargesMetal = [];
let brightChargesSemi = [];
let animCharges = [];

let balls = [];
let totalElectrons = 200;

let scannerSpeed = 0;


let electronsTransferred = 0;
let defaultDopants = 30;

let currButton;
let currVoltageSlider;
let currDopantSlider;


function setup() {
    canvas = createCanvas(2 * windowWidth / 4 + 40, windowHeight);
    canvas.parent('visualization');
    batteryPos = loadImage('batteryPos.png');
    batteryNeg = loadImage('batteryNeg.png');
    
    // instant
    tempBox = new Box(100, 100, 160, 280, 0);
    boxes.L1 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R1 = new Box(340, 100, 160, 280, totalElectrons, "m", "boxes.R1");

    boxes.L2 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R2 = new Box(340, 100, 160, 280, totalElectrons, "m");

    boxes.L3 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R3 = new Box(340, 100, 160, 280, totalElectrons, "m");

    boxes.L4 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R4 = new Box(340, 100, 160, 280, totalElectrons, "m");

    boxes.L5 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R5 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.L6 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R6 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.L7 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R7 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.L8 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R8 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.L9 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R9 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.L10 = new Box(100, 100, 160, 280, totalElectrons, "m");
    boxes.R10 = new Box(340, 100, 160, 280, totalElectrons, "s");

    boxes.R5.updateDopants(defaultDopants);
    boxes.R6.updateDopants(defaultDopants);
    boxes.R7.updateDopants(defaultDopants);
    boxes.R8.updateDopants(defaultDopants);
    boxes.R9.updateDopants(defaultDopants);
    boxes.R10.updateDopants(defaultDopants);
}

function updateNumTransfer(value) {
    numTransfer = value;
}

function controlHelper(scene, id, text, controlFunc, resetFunc) {
    if (sceneCount == scene) {
        if (document.getElementById(`${id}`).textContent == 'Reset') {
            resetFunc();
            electronsTransferred = 0;
            document.getElementById(`${id}`).textContent = `${text}`;
        }
        else if (document.getElementById(`${id}`).textContent == `${text}`) {
            controlFunc();
            document.getElementById(`${id}`).textContent = 'Reset';
        }
    }
}

function animateElectrons() {
    // console.log("animateElectrons");
    scannerSpeed = 1;

    if (!reverse) {
        if (sceneAnimated == false) {
            let i = 0;
            for (let i = 0; i < numTransfer; i++) {
                let e = currRightBox.electrons[currRightBox.electrons.length - 1];

                if (e.dim == false) {
                    tempBox.electrons.push(e);
                    currRightBox.electrons.pop();
                    e.updateAnimate(true);
                }
            }
        }
    }
    else {
        if (sceneAnimated == false) {
            let i = 0;
            for (let i = 0; i < numTransfer; i++) {
                let e = currLeftBox.electrons[currLeftBox.electrons.length - 1];

                if (e.dim == false) {
                    tempBox.electrons.push(e);
                    currLeftBox.electrons.pop();
                    e.updateAnimate(true);
                }
            }
        }
    }


    // reset voltage controls
    controlHelper(1, 'voltageButton1', 'Apply Voltage',
    () => {
        if (sceneAnimated == false && document.getElementById('voltageButton1').textContent == 'Reset') { // hasn't animated yet and not reset
            sceneAnimated = true;
        }
    }, () => {
        boxes.L1 = new Box(100, 100, 160, 280, totalElectrons, "m");
        boxes.R1 = new Box(340, 100, 160, 280, totalElectrons, "m", "boxes.R1");
        
        tempBox.electrons = [];
        sceneAnimated = false;
    })

    controlHelper(2,'voltageButton2', 'Apply Voltage',
    () => {
        if (sceneAnimated == false && document.getElementById('voltageButton2').textContent == 'Reset') { // hasn't animated yet
            sceneAnimated = true;
        }
    },
    () => {
        boxes.L2 = new Box(100, 100, 160, 280, totalElectrons, "m");
        boxes.R2 = new Box(340, 100, 160, 280, totalElectrons, "m");
        tempBox.electrons = [];

        sceneAnimated = false;
    }) 

    controlHelper(3, 'voltageButton3', 'Apply Voltage',
        () => {
            if (sceneAnimated == false) { // hasn't animated yet
                setTimeout(() => {
                    showEF = true;
                }, "4000");
                sceneAnimated = true;
            }

        },
        () => {
            boxes.L3 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R3 = new Box(340, 100, 160, 280, totalElectrons, "m");
            tempBox.electrons = [];

            sceneAnimated = false;
            showEF = false;
    }) 

    // reset scanner
    controlHelper(4, 'scanButton4', 'Scan',
        () => {
            if (sceneAnimated == false) {
                setTimeout(() => {
                    if (boxes.R4.numElectrons < totalElectrons) {
                        sceneAnimated = true;
                        showEF = true;
                    }
                }, "4000");
            }
        },
        () => {
            boxes.L4 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R4 = new Box(340, 100, 160, 280, totalElectrons, "m");

            tempBox.electrons = [];

            sceneAnimated = false;
            showEF = false;
            scannerSpeed = 0;
            boxes.R4.scannerX = boxes.R4.x;
        })

    controlHelper(5, 'voltageButton5', 'Apply Voltage',
        () => {
            if (sceneAnimated == false) { // hasn't animated yet
                setTimeout(() => {
                    if (currButton.textContent == "Reset" && sceneAnimated == false)
                    sceneAnimated = true;
                    showEF = true;
                }, "4000");
            }
        },
        () => {
            boxes.L5 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R5 = new Box(340, 100, 160, 280, totalElectrons, "s");
            tempBox.electrons = [];

            boxes.R5.updateDopants(defaultDopants);

            sceneAnimated = false;
            showEF = false;
        })

    controlHelper(6, 'voltageButton6', 'Apply Voltage',
        () => {
            if (sceneAnimated == false) { // hasn't animated yet
                setTimeout(() => {
                    sceneAnimated = true;
                    showEF = true;
                }, "4000");
            }
        },
        () => {
            boxes.L6 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R6 = new Box(340, 100, 160, 280, totalElectrons, "s");
            tempBox.electrons = [];

            boxes.R6.updateDopants(defaultDopants);


            sceneAnimated = false;
            showEF = false;
        })





    controlHelper(7, 'scanButton7', 'Scan',
        () => {
            if (sceneAnimated == false) {
                setTimeout(() => {
                    if (boxes.R7.numElectrons < totalElectrons) {
                        sceneAnimated = true;
                        showEF = true;
                    }
                }, "4000");
            }
        },
        () => {
            boxes.L7 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R7 = new Box(340, 100, 160, 280, totalElectrons, "s");

            tempBox.electrons = [];
            boxes.R7.updateDopants(defaultDopants);

            sceneAnimated = false;
            showEF = false;
            scannerSpeed = 0;
            boxes.R7.scannerX = boxes.R7.x;
        })

    controlHelper(8, 'scanButton8', 'Scan',
        () => {
            if (sceneAnimated == false) {
                setTimeout(() => {
                    if (boxes.R8.numElectrons < totalElectrons) {
                        sceneAnimated = true;
                        showEF = true;
                    }
                }, "4000");
            }
        },
        () => {
            boxes.L8 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R8 = new Box(340, 100, 160, 280, totalElectrons, "s");

            tempBox.electrons = [];
            boxes.R8.updateDopants(defaultDopants);

            sceneAnimated = false;
            showEF = false;
            scannerSpeed = 0;
            boxes.R8.scannerX = boxes.R8.x;
            boxes.R8.updateDopants(document.getElementById("dopantSlider8").value);
        })

    controlHelper(9, 'scanButton9', 'Scan',
        () => {
            if (sceneAnimated == false) {
                setTimeout(() => {
                    // if (boxes.L9.numElectrons < totalElectrons) {
                    showEF = true;
                    sceneAnimated = true;
                    
                    // }
                }, "4000");
            }
        },
        () => {
            boxes.L9 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R9 = new Box(340, 100, 160, 280, totalElectrons, "s");

            tempBox.electrons = [];
            boxes.R9.updateDopants(defaultDopants);

            sceneAnimated = false;
            showEF = false;
            scannerSpeed = 0;
            boxes.R9.scannerX = boxes.R9.x;
            boxes.R9.updateDopants(document.getElementById("dopantSlider9").value);
        })

    // control 10
    controlHelper(10, 'scanButton10', 'Scan',
        () => {
            if (sceneAnimated == false) { // hasn't animated yet
                setTimeout(() => {
                    sceneAnimated = true;
                    showEF = true;
                }, "4000");
            }
        },
        () => {
            boxes.L10 = new Box(100, 100, 160, 280, totalElectrons, "m");
            boxes.R10 = new Box(340, 100, 160, 280, totalElectrons, "s");
            tempBox.electrons = [];

            boxes.R10.updateDopants(defaultDopants);


            sceneAnimated = false;
            showEF = false;
        })
}


// function animateScanner() {
//     animateElectrons();
// }

function resetScene() {
    reverse = false;
    tempBox.electrons = [];
    numTransfer = 12;
    brightChargesMetal = [];
    brightChargesSemi = [];
    animCharges = [];
    displayCharges = [];
    sceneAnimated = false;
    electronsTransferred = 0;

    lastColorChange = 0;

    atDestSide = false;

    showEF = false;

    balls = [];
    totalElectrons = 200;

    scannerSpeed = 0;

    document.getElementById("voltageSlider2").value = 12;
    document.getElementById("voltageSlider3").value = 12;
    document.getElementById("voltageSlider6").value = 12;
    document.getElementById("voltageSlider7").value = 12;
    document.getElementById("voltageSlider8").value = 12;
    document.getElementById("voltageSlider10").value = 12;
    document.getElementById("dopantSlider8").value = defaultDopants;
}

function drawBattery() {
    let center = batteryPosition.center;
    let leftX = batteryPosition.leftX;
    let rightX = batteryPosition.rightX;
    let y1 = batteryPosition.y1;
    let y2 = batteryPosition.y2;
    let batterySize = batteryPosition.batterySize;

    noStroke();
    fill(color.battery);

    strokeWeight(1.2);
    stroke("#FFF");
    line(leftX, y1, leftX, y2); // x y x y
    line(leftX, y2, rightX, y2);
    line(rightX, y1, rightX, y2);

    if (reverse) {
        image(batteryPos, 266, 404, batteryPos.width / 1.5, batteryPos.height / 1.5);
    }
    else {
        image(batteryNeg, 266, 404, batteryNeg.width / 1.5, batteryNeg.height / 1.5);
    }
}

function drawMOS(box, label, leftPadding) {
    fill(18);
    stroke("#fff")
    let boxD = 100;
    let boxA = -100;
    beginShape();
    vertex(box.x + box.w, box.y + box.h); // left top
    vertex(box.x + box.w, box.y); // left bottom
    vertex(box.x + box.w + boxD, box.y + boxA); // top right
    vertex(box.x + box.w + boxD, box.y + box.h + boxA);
    endShape(CLOSE);

    noStroke();
    fill("white")
    text(label, box.x + box.w + leftPadding, box.y + box.h/2 - 40)
}

function drawBox(box) {
    stroke("#FFF");
    strokeWeight(1.2);
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
}


function drawAnimatedCharges(charges) {
    // console.log("drawAnimatedCharges");
    // for each row
    for (let i = 0; i < charges.length; i++) {
        // for each column
        let chargeX = charges[i].x + 20;
        let chargeY = charges[i].y + 20;
        let chargeType = charges[i].type;
        drawCharge(chargeX, chargeY, chargeType);
    }
}

function genBrightCharges(dopantIndices) {
    // console.log("genBrightCharges");
    // Generate a new array of x random indices for bright circles in each frame
    brightChargesMetal = [];
    brightChargesSemi = [];

    // for (let i = 0; i < electrons)
    
    while (brightChargesMetal.length < electronsTransferred) {
        let randomIndex;
        if (!reverse) {
            randomIndex = floor(random(20)); // 20 rows
        }
        else if (reverse) {
            randomIndex = floor(totalElectrons - random(20)); // 20 rows
        }
        if (!brightChargesMetal.includes(randomIndex)) {
            brightChargesMetal.push(randomIndex);
        }
    }
    while (brightChargesSemi.length < electronsTransferred) {
        let randomIndex = floor(random(defaultDopants));
        if (!brightChargesSemi.includes(randomIndex)) {
            brightChargesSemi.push(randomIndex);
        }
    }
}

function drawCharges(box, type) {
    // console.log("drawCharges");
    for (let i = 0; i < box.chargeMap.length; i++) {
    // for each column
        let chargeX = box.chargeMap[i].x + 19;
        let chargeY = box.chargeMap[i].y + 17;
        let chargeType = box.chargeMap[i].type;



        if (millis() - lastColorChange > colorChangeInterval) {
            genBrightCharges(box.dopantIndices);
            lastColorChange = millis();
        }

        // flicker positive charges on surface

        let boxSideCondition;
        if (!reverse) {
            boxSideCondition = box.x > 300;
        }
        else if (reverse) {
            boxSideCondition = box.x < 300;
        }

        if (box.type == "s") {
            for (let i = 0; i <= box.chargeMap.length - 1; i++) {
            let isDopant = box.dopantIndices.includes(i);
            if (isDopant) {
                box.chargeMap[i].updateType("pos");
            }
        }
        }

        if (boxSideCondition) {
            // console.log(box.chargeMap);
            for (let i = 0; i <= box.chargeMap.length - 1; i++) {
                let isBrightMetal = brightChargesMetal.includes(i);

                if (electronsTransferred >= 1) {
                    box.chargeMap[i].updateType("dim");
                }

                if (box.type == "m") {
                    if (isBrightMetal) {
                        box.chargeMap[i].updateType("pos");
                    }
                }
            }
            if (box.type == "s") {
                for (let j = 0; j < brightChargesSemi.length; j++) {
                    // if (brightChargesSemi.includes(j)) {
                    box.chargeMap[box.dopantIndices[brightChargesSemi[j]]].updateType("pos");
                    // }
                }
            }
        }

        drawCharge(chargeX, chargeY, chargeType, box.chargeMap[i].dim);
    }

    noStroke();
    fill("white");
    textSize(12);
    text(`#negative charges: ${box.numElectrons}`, box.x + 30, box.y - 30)
}



function updateDopantAmount(value) {
    // console.log("updateDopantAmount");
    (sceneCount == 5) ? boxes.R5.updateDopants(value): null;
    (sceneCount == 6) ? boxes.R6.updateDopants(value) : null;
    (sceneCount == 7) ? boxes.R7.updateDopants(value) : null;
    (sceneCount == 8) ? boxes.R8.updateDopants(value) : null;
    (sceneCount == 9) ? boxes.R9.updateDopants(value) : null;
    (sceneCount == 10) ? boxes.R10.updateDopants(value) : null;
}

function checkDest(electron, dest, side) {
    // console.log("checkDest");
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
    // console.log("drawelectrons");
    // check for animation, animate
    for (let i = 0; i < box.electrons.length; i++) {
        let electron = box.electrons[i];
        

        if (!reverse) {
            dest1 = createVector(batteryPosition.rightX, batteryPosition.y1);
            dest2 = createVector(batteryPosition.rightX, batteryPosition.y2);
            dest3 = createVector(batteryPosition.leftX, batteryPosition.y2);
            dest4 = createVector(batteryPosition.leftX, batteryPosition.y1 - (i % 15) * 17 - 20);
            attractSide = (currLeftBox.x + currLeftBox.w - 16);
        }
        else {
            dest1 = createVector(batteryPosition.leftX, batteryPosition.y1);
            dest2 = createVector(batteryPosition.leftX, batteryPosition.y2);
            dest3 = createVector(batteryPosition.rightX, batteryPosition.y2);
            dest4 = createVector(batteryPosition.rightX, batteryPosition.y1 - (i % 15) * 17 - 20);
            attractSide = (currRightBox.x + 16);
        }


        // let destSide = createVector(attractSide, batteryPosition.y1 - (i % 15) * 17 - 20);
        
        if (frameCount % 2 == 0) {
            if (electron.animate) {
                let atDest1 = checkDest(electron, dest1, false);
                let atDest2 = checkDest(electron, dest2, false);
                let atDest3 = checkDest(electron, dest3, false);
                let atDest4 = checkDest(electron, dest4, false);

                if (atDest1) {
                    if (!electron.passedDest.includes(1)) {
                        electron.updatePassed(1);
                        currRightBox.updateNumElectrons(currRightBox.numElectrons -= 1);
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
                        setTimeout(() => {
                            currLeftBox.updateNumElectrons(currLeftBox.numElectrons += 1);
                        }, 300);
                    }
                }
                if (atDest4) {
                    if (!electron.passedDest.includes(4)) {
                        electron.updatePassed(4);
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

                if (electron.passedDest.includes(4)) {
                    if (!reverse) {
                        if (electron.position.x < attractSide) {
                            electron.position.x += 4;
                        }

                        if (electron.position.x > attractSide - 2) {
                            electron.updateVelocity(createVector(0, -3));
                            electron.updateAnimate(false);
                            if (electron.pushed == false) {

                                electron.updatePushed(true);
                                sceneAnimated = true;

                                // dim all electrons
                                for (let i = 0; i < currLeftBox.electrons.length; i++) {
                                    currLeftBox.electrons[i].updateDim(true);
                                }
                                for (let i = 0; i < currRightBox.electrons.length; i++) {
                                    currRightBox.electrons[i].updateDim(true);
                                }

                                electronsTransferred += 1;

                                for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
                                    // for each column
                                    currLeftBox.chargeMap[i].updateType("dim");
                                }
                            }
                        }
                    }
                    else if (reverse) {
                        if (electron.position.x > attractSide) {
                            electron.position.x -= 4;
                        }

                        if (electron.position.x < attractSide + 2) {
                            electron.updateVelocity(createVector(0, -3));
                            electron.updateAnimate(false);
                            if (electron.pushed == false) {

                                electron.updatePushed(true);
                                sceneAnimated = true;

                                // dim all electrons
                                for (let i = 0; i < currLeftBox.electrons.length; i++) {
                                    currLeftBox.electrons[i].updateDim(true);
                                }
                                for (let i = 0; i < currRightBox.electrons.length; i++) {
                                    currRightBox.electrons[i].updateDim(true);
                                }

                                electronsTransferred += 1;

                                for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
                                    // for each column
                                    currLeftBox.chargeMap[i].updateType("dim");
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

function drawCharge(chargeX, chargeY, chargeType, dim) {
    // console.log("drawCharge");
    let posSize = 8;
    let signSize = 6;
    noStroke();

    // charge circles
    // positive charge
    if (chargeType == "pos") {
        dim? fill(color.posDim): fill(color.pos);
        circle(chargeX, chargeY, posSize);
    }
    if (chargeType == "dim") {
        fill(color.posDim);
        circle(chargeX, chargeY, posSize);
    }

    // charge signs
    dim = (chargeType == "dim");
    dim ? stroke(color.signDim) : stroke(color.sign);
    strokeWeight(1);
    canvas.drawingContext.setLineDash([]);

    // cross line
    line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY);
    // up line
    line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
}

function drawScanner(box) {
    // console.log("drawScanner");
    setTimeout(() => {
        if (sceneCount == 4) {
            let measure = int(box.x) + int(currVoltageSlider.value)
            if (box.scannerX >= measure) {
                scannerSpeed = 0;
            }
        }
        if (sceneCount == 7) {
            let measure = int(box.x) + int(currVoltageSlider.value) * 6
            if (box.scannerX >= measure) {
                scannerSpeed = 0;
            }
        }
        if (sceneCount == 8) {
            // let measure = int(box.x) + int(currVoltageSlider.value) * 6;
            let measure = int(box.x) + Math.log(int(currVoltageSlider.value)) * 42;
            measure = measure - (int(currDopantSlider.value) / 2);
            if (box.scannerX >= measure) {
                if (int(currDopantSlider.value) > 0) {
                    scannerSpeed = 0;
                }
            }
        }
        if (sceneCount == 10) {
            
            let measure = int(box.x) + int(currVoltageSlider.value)
            console.log(box.scannerX, measure);
            if (box.scannerX >= measure) {
                scannerSpeed = 0;
            }
        }
    }, "200");


    // if scanner hits end of box or electron goal has been transferred
    if (box.scannerX > box.x + box.w - 10 || electronsTransferred >= numTransfer) {
        scannerSpeed = 0;
    }

    // move the scanner using scannerSpeed
    box.updateScannerX(box.scannerX + scannerSpeed);

    // how much of box has been scanned
    let scannerOverBox = box.scannerX - box.x; // total = 150

    // gets percentage of scan
    let scanProgress = scannerOverBox / 150;

    // which electron to move based on scan percentage
    let electronIndex = Math.floor(box.numElectrons * scanProgress);
    
    // scan position / overall range 0-190
    // i / total electrons

    // if electron goal not reached yet
    // if (sceneAnimated == false) {
    //     // console.log("sceneAnimated == false");
    // // if (electronsTransferred <= electronsToTransfer) {
    //     // let i = 0;
    //     // for (let i = 0; i < numTransfer; i++) {
    //     //     let e = currRightBox.electrons[currRightBox.electrons.length - 1];

    //     //     if (e.dim == false) {
    //     //         tempBox.electrons.push(e);
    //     //         currRightBox.electrons.pop();
    //     //         e.updateAnimate(true);
    //     //     }
    //     // }

        // for (let i = 0; i < box.numElectrons; i++) {
        //     console.log(electronsTransferred, numTransfer);
        //     if (electronsTransferred <= numTransfer ) {
        //         if (electronIndex > i) {
        //             // if the electron is lit
        //             // console.log("for loop, false");
        //             // if (currRightBox.electrons[i].dim == false) {
        //             //     // animate the electron
        //             //     currRightBox.electrons[i].updateAnimate(true);
        //             //     electronsTransferred += 1;
        //             // }
        //                 let e = currRightBox.electrons[currRightBox.electrons.length - 1];

        //                 if (e.dim == false) {
        //                     tempBox.electrons.push(e);
        //                     currRightBox.electrons.pop();
        //                     e.updateAnimate(true);
        //                     electronsTransferred += 1;
        //                 }
        //         }
        //     }
        // }
    // // }
    // }

    fill(color.battery);
    noStroke();
    
    rect(box.scannerX, box.scannerY, 10, box.h);

    fill("#fff");
    rect(box.scannerX, box.scannerY, 10, 4);
    rect(box.scannerX, box.scannerY + box.h - 4, 10, 4);
}

function drawGraph() {
    // console.log("drawGraph");
    stroke(color.grey); // axis color
    strokeWeight(1);

    canvas.drawingContext.setLineDash([7, 3]);

    line(graphC, graphY - 76, graphC, graphY + 60); // vert

    (sceneCount == 8) ? xAxisExtend = 20 : null;
    line(graphX, graphY, graphEnd, graphY); // hor

    noStroke();
    fill(color.grey);

    textStyle(NORMAL);
    textFont('Sans-serif');
    textSize(12);

    canvas.drawingContext.setLineDash([]);

    let size = 4.4;
    stroke(color.grey);

    // y axis arrow - up
    line(graphC, graphY - 76, graphC - size, graphY - 76 + size);
    line(graphC, graphY - 76, graphC + size, graphY - 76 + size);

    // y axis arrow - down
    line(graphC, graphY + 61, graphC + size, graphY + 61 - size);
    line(graphC, graphY + 61, graphC - size, graphY + 61 - size);

    // x axis arrow - right
    line(graphEnd, graphY, graphEnd - size, graphY - size);
    line(graphEnd, graphY, graphEnd - size, graphY + size);

    // x axis arrow - left
    line(graphX, graphY, graphX + size, graphY + size);
    line(graphX, graphY, graphX + size, graphY - size);

    strokeWeight(2);
    stroke(color.purple);
    
    let eFieldHeight = 0;
    if (sceneAnimated) {
        eFieldHeight = numTransfer * 6;
    }
    
    let noHeights = [0, 0, 0];
    let noHeightXPoints = [graphX, graphC, graphC + 80];

    
    if (!showEF) {
        drawLines(noHeightXPoints, noHeights, color.purple);
    }

    let purpleHeights = [0, -eFieldHeight, 0];
    let purpleXPoints = [graphX, graphC, graphC + 80];

    graphNorm = 1.4;
    // standardize the heights
    for (let i = 0; i < purpleHeights.length; i++) {
        purpleHeights[i] = purpleHeights[i] / graphNorm;
    }

    
    if (currButton && currButton.textContent == "Reset" && showEF) {
        // console.log(object);
        drawLines(purpleXPoints, purpleHeights, color.purple);
        drawArrows();
    }
}

function drawLines(points, rawHeights, color) {
    let graphDivisor = 2;
    let unit = 1 / graphDivisor;

    let heights = [];

    for (let i = 0; i < rawHeights.length; i++) {
        heights[i] = (unit * rawHeights[i]) + graphY;
    }
    
    for (i = 0; i < points.length; i++) {
        if (i == points.length - 1) {
            // last graph line
            line(points[i], heights[i], graphEnd, heights[i]); // line
        }
        else {
            line(points[i], heights[i], points[i + 1], heights[i]); // line
            line(points[i + 1], heights[i], points[i + 1], heights[i + 1]); // connecting
        }
    }
}

function drawArrows() {
    if (showEF) {
        let x1;
        let x2;
        let y;

        if (!reverse) {
            x1 = 262;
            x2 = 338;
            y = 112;
        } 
        else if (reverse) {
            x1 = 268;
            x2 = 350;
            y = 112;
        }

        for (let i = 0; i < 7; i++) {
            strokeCap(SQUARE);
            stroke(color.purple);
            let weight = numTransfer / 3;
            strokeWeight(weight);

            let triangleSize = 12;
            line(x1, y, x2 - triangleSize, y);
            fill(color.purple);
            noStroke();

            if (weight > 0) {
                if (!reverse) {
                    triangle(
                        x2, y,
                        x2 - triangleSize, y - triangleSize / 1.7,
                        x2 - triangleSize, y + triangleSize / 1.7
                    )
                }
                else if (reverse) {
                    triangle(
                        x1 - 8, y,
                        x1 + triangleSize - 8, y + triangleSize / 1.7,
                        x1 + triangleSize - 8, y - triangleSize / 1.7
                    )
                }

            }
            y += 40;
        }
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
    else if (sceneCount == 9) {
        scene9();
    }
    else if (sceneCount == 10) {
        scene10();
    }
    else if (sceneCount == 11) {
        scene11();
    }
}

function scene1() {
    currButton = false;

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
    currButton = document.getElementById("voltageButton2");
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
    currButton = document.getElementById("voltageButton3");
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
    drawGraph();

    drawBattery();
    
}

function scene4() {
    currButton = document.getElementById("scanButton4");
    currVoltageSlider = document.getElementById("voltageSlider4");
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
    drawScanner(boxes.R4);

    drawGraph();

    
}

function scene5() {
    currButton = document.getElementById("voltageButton5");
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

    drawGraph();
}

function scene6() {
    currButton = document.getElementById("voltageButton6");
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
    drawGraph();
}

function scene7() {
    currButton = document.getElementById("scanButton7");
    currVoltageSlider = document.getElementById("voltageSlider7");
    
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
    drawScanner(boxes.R7);
    drawGraph();
}

function scene8() {
    
    currButton = document.getElementById("scanButton8");
    currVoltageSlider = document.getElementById("voltageSlider8");
    currDopantSlider = document.getElementById("dopantSlider8");
    background(18);
    currLeftBox = boxes.L8;
    currRightBox = boxes.R8;
    drawBox(boxes.L8);
    drawBox(boxes.R8);

    drawCharges(boxes.L8);
    drawCharges(boxes.R8);
    drawElectrons(boxes.L8);
    drawElectrons(boxes.R8);
    drawElectrons(tempBox);

    drawScanner(boxes.R8);

    drawBattery();

    drawGraph();
}

function scene9() {
    currButton = document.getElementById("scanButton9");
    currVoltageSlider = document.getElementById("voltageSlider9");
    currDopantSlider = document.getElementById("dopantSlider9");
    background(18);
    currLeftBox = boxes.L9;
    currRightBox = boxes.R9;
    drawBox(boxes.L9);
    drawBox(boxes.R9);

    drawCharges(boxes.L9);
    drawCharges(boxes.R9);
    drawElectrons(boxes.L9);
    drawElectrons(boxes.R9);
    drawElectrons(tempBox);

    drawBattery();

    drawGraph();
}

function scene10() {
    currButton = document.getElementById("scanButton10");
    currVoltageSlider = document.getElementById("voltageSlider10");
    reverse = true;
    background(18);
    currLeftBox = boxes.L10;
    currRightBox = boxes.R10;
    drawBox(boxes.L10);
    drawBox(boxes.R10);

    drawCharges(boxes.L10);
    drawCharges(boxes.R10);
    drawElectrons(boxes.L10);
    drawElectrons(boxes.R10);
    drawElectrons(tempBox);

    drawScanner(boxes.L10)
    drawBattery();
    drawGraph();
}

function scene11() {
    background(18);

    let surface1 = new Box(30, 200, 120, 300);
    let surface2 = new Box(120, 200, 120, 300);
    let surface3 = new Box(210, 200, 120, 300);

    drawMOS(surface1, "Metal", 30);
    drawMOS(surface2, "Oxide", 30);
    drawMOS(surface3, "Semiconductor", 10);
}



