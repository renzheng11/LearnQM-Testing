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

let chargeDecrease;
let drawScene1;
let drawScene2;

let chargeX;
let chargeY;
let chargeXR;
let chargeYR;

let blueBoxes;
let redBoxes;

setup = () => {
    let canvas = createCanvas(2 * windowWidth / 4, windowHeight);
    canvas.parent('visualization');

    bg = 18;

    graphY = 550;
    graphW = 540;

    leftPadding = 48;
    
    // graphX = graphC - graphW / 2;
    graphC = graphW / 2 + leftPadding;
    graphX = graphC - graphW / 2 + leftPadding;

    chargeX = [];
    chargeY = [];
    chargeXR = [];
    chargeYR = [];


    console.log(chargeX);
    console.log(chargeY);

    drawScreenScene5 = false;
    drawScene1 = false;
    drawScene2 = false;

    boxScene1 = new Box("pos", true, 12, false, 440, true, "lr", 310, 140, 20, 80);

    boxScene2 = new Box("pos", true, 12, false, 440, true, "lr", 310, 140, 20, 80);

    boxScene4 = new Box("pos", true, 10, false, 440, true, "lr", 310, 140, 20, 80);
    redboxScene4 = new Box("neg", true, 10, true, 440, true, "lr", 400, 150, 20, 80);

    boxScene5 = new Box("pos", true, 30, false, 440, true, "lr", 310, 140, 20, 80);
    redboxScene5 = new Box("neg", true, 20, true, 440, true, "lrp", 400, 140, 20, 80);

    boxScene6 = new Box("pos", true, 12, false, 440, true, "lr", 310, 140, 20, 80);
    redboxScene6a = new Box("neg", true, 8, true, 440, true, "lrp", 400, 150, 20, 80);
    redboxScene6b = new Box("neg", true, 4, true, 440, true, "lrp", 500, 150, 20, 80);

    boxScene7 = new Box("pos", true, 12, false, 440, true, "lr", 310, 140, 20, 80);
    redboxScene7a = new Box("neg", true, 6, true, 440, true, "lrp", 360, 140, 20, 80);
    redboxScene7b = new Box("neg", true, 4, true, 440, true, "lrp", 420, 140, 20, 80);
    redboxScene7c = new Box("neg", true, 2, true, 440, true, "lrp", 480, 140, 20, 80);

    boxScene9 = new Box("pos", true, 12, false, 440, true, "lr", 310, 140, 20, 80);
    redboxScene9 = new Box("neg", true, 12, true, 440, true, "lrp", 400, 140, 200, 80);

    blueBoxes = [boxScene1, boxScene2, boxScene4, boxScene5, boxScene6, boxScene7, boxScene9];
    redBoxes = [redboxScene4, redboxScene5, redboxScene6a, redboxScene6b, redboxScene7a, redboxScene7b, redboxScene7c, redboxScene9];

    

    chargeDecrease = true;

    // Returns a random integer from 1 to 100:
    // Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i < 40; i++) {
        chargeX.push(Math.floor(Math.random() * (64)) + boxScene1.x + 20)
        chargeY.push(Math.floor(Math.random() * (boxScene1.h - 100)) + boxScene1.y)
    }
    for (let i = 0; i < 40; i++) {
        chargeXR.push(Math.floor(Math.random() * (64)) + boxScene1.x + 20)
        chargeYR.push(Math.floor(Math.random() * (boxScene1.h - 100)) + boxScene1.y)
    }
}

draw = () => {
    background(bg);
    if (sceneCount == 1) {
        translate(-38, 0);
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

function scene1() { // 3D field
    drawBox(boxScene1, false, false);
    if (drawScene1) {
        drawBox(boxScene1, true, true);
    }
}

function scene2() { // change charges
    drawBox(boxScene2, true, true);
    drawGraph(boxScene2, null, false);
}

function scene3() { // change charges
    drawGraph(boxScene2, null, false);
    drawBox(boxScene2, true, true);
}

function scene4() { // scene4
    drawGraph(boxScene4, redboxScene4, true);
    
    drawBox(boxScene4, true, true);
    drawBox(redboxScene4, true, true);
    // drawBox(boxScene4, false, true);

    if (mouseX > graphC && mouseX < graphW) {
        redboxScene4.updateX(mouseX);
    }
    
    if (drawScreenScene4) {
        drawScreen(redboxScene4);
    }
}

function scene5() {

    drawGraph(boxScene5, redboxScene5, true); 

    drawBox(boxScene5, true, true);

    if (mouseX > graphC && mouseX < graphW) {
        redboxScene5.updateX(mouseX);
    }

    drawBox(redboxScene5, true, true);

    if (drawScreenScene5) {
        drawScreen(redboxScene5);
    }
}

function scene6() {

    drawGraph(boxScene6, redboxScene6a, true);

    drawBox(boxScene6, true, true);

    drawBox(redboxScene6a, true, true);

    drawBox(redboxScene6b, true, true);
}

function scene7() {
    drawGraph(boxScene7, redboxScene7a, true);

    drawBox(boxScene7, true, true);
    drawBox(redboxScene7a, true, true);


    drawBox(redboxScene7b, true, true);


    drawBox(redboxScene7c, true, true);

}

function scene8() {
    drawGraph(boxScene7, redboxScene7a, true);
    drawBox(boxScene, true, true);
    drawBox(redboxScene7a, true, true);
    drawBox(redboxScene7b, true, true);
    drawBox(redboxScene7c, true, true);
}

function scene9() {
    drawGraph(boxScene9, redboxScene9, true);
    drawBox(boxScene9, true, true);
    redboxScene5.updateX(mouseX, true, true);
    drawBox(redboxScene9, true, true);
}

drawAxis = () => {
    stroke('#717171'); // axis color
    strokeWeight(3);

    line(graphX, graphY, graphW, graphY); // hor
    line(graphC, graphY - 64, graphC, graphY + 64); // vert

    noStroke();
    fill('#717171');
    text('EF (vector)', graphC - 26, graphY + 80);
    text('x', graphW + 10, graphY);
}

function drawGraph(box, red, purple) {
    drawAxis();
    let redRightY;
    let redLeftY;
    strokeWeight(2);
    // let graphOffset = 4 * box.chargeAmount;

    stroke(box.color);
    // let blueRightY = graphOffset;
    // let blueLeftY = -(graphOffset);
    // let redRightY = -(graphOffset);
    // let redLeftY = graphOffset;

    let unit = 3;

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

    // red line
    // else if (box.charge == "neg") {
    //     line(graphX, graphY - redLeftY, graphC, graphY - redLeftY); // left
    //     line(graphC, graphY - redRightY, graphW, graphY - redRightY); // right
    //     line(graphC, graphY - redLeftY, graphC, graphY - redRightY); // straight
    // }

    // if (red) {
    //     let redX = red.x;
    //     stroke(red.color);
    //     line(graphX, graphY - redLeftY, redX, graphY - redLeftY); // left
    //     line(redX, graphY - redRightY, graphW, graphY - redRightY); // right
    //     line(redX, graphY - redLeftY, redX, graphY - redRightY); // straight
    // }


    if (purple) {
        let redX = red.x;
        // purple line
        stroke(140, 52, 228); // purple color
        let purpleRightY = -(redRightY + blueRightY);
        let purpleLeftY = -(redLeftY + blueLeftY);
        let purpleMidY = -(redLeftY + blueRightY);

        line(redX, graphY + purpleRightY,
            graphW, graphY + purpleRightY); // right
            
        line(graphX, graphY + purpleLeftY,
            graphC, graphY + purpleLeftY); // left

        

        if (mouseX > graphC) {
            line(graphC, graphY + purpleMidY,
                redX, graphY + purpleMidY); // middle
            // left straight 
            line(redX, graphY - blueRightY + redRightY, redX, graphY + blueRightY + redRightY);
            // right straight
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
    if (boxScene2.chargeAmount == 2) {
        chargeDecrease = false;
    }
    if (boxScene2.chargeAmount == 16) {
        chargeDecrease = true;
    }
    if (chargeDecrease) {
        boxScene2.changeChargeAmount(boxScene2.chargeAmount - 1);
    }
    else {
        boxScene2.changeChargeAmount(boxScene2.chargeAmount + 1);
    }

    if (redboxScene4.chargeAmount == 2) {
        chargeDecrease = false;
    }
    if (redboxScene4.chargeAmount == 16) {
        chargeDecrease = true;
    }
    if (chargeDecrease) {
        redboxScene4.changeChargeAmount(redboxScene4.chargeAmount - 1);
    }
    else {
        redboxScene4.changeChargeAmount(redboxScene4.chargeAmount + 1);
    }
}

reverseCharge = () => {
    boxScene2.reverseCharge();
}

showScreen = () => {
    if (sceneCount == 4) {
        drawScreenScene4 = !(drawScreenScene4);
    }
    if (sceneCount == 5) {
        drawScreenScene5 = !(drawScreenScene5);
    }
}

function drawSurface(box) {
    strokeWeight(1.4);
    stroke(box.color);
    fill(0, 0, 0, 0);

    // if (sceneCount == 1) {
        fill("#364E63");
    // }
        // box color
        if (box.charge == "pos") {
            // fill(91, 149, 203, 100);
            fill(91, 149, 203, 100);
            fill("#364E63");
        }
        else if (box.charge == "neg") {
            // fill(193, 88, 88, 100);
            fill("#6F4343");
        }


    beginShape();
    vertex(box.x, box.y);
    vertex(box.x, box.y + box.h);
    vertex(box.x + box.w, box.y + box.h);
    vertex(box.x + box.w, box.y);
    endShape(CLOSE);

    // fill(0, 0, 0, 0);
    // fill(91, 149, 203, 100);
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
        fill(140, 52, 228, 100); // purple
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

        // fill(0, 0, 0, 0);
        // fill(91, 149, 203, 100);
        // box side
        // beginShape();
        // vertex(box.x - offset + box.w, box.y + box.h); // left top
        // vertex(box.x - offset + box.w, box.y); // left bottom
        // vertex(box.x - offset + box.w + box.d, box.y + box.a); // right top
        // vertex(box.x - offset + box.w + box.d, box.y + box.h + box.a); // right bottom
        // endShape(CLOSE);

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

function drawBox(box, showCharges, showArrows) {
    //order: left arrows, box, charges, right arrows
    if (showArrows && (box.sides).includes("l")) {
        drawArrows(box, "l");
    }

    if (showArrows && (box.sides).includes("p")) {
        drawArrows(box, "p");
    }


    drawSurface(box);
    if (showCharges) {
        drawCharges(box);
    }
    
    if (showArrows & (box.sides).includes("r")) {
        drawArrows(box, "r");
    }

    // drawMidzone(box);
}

function drawCharges(box) {
    let chargeSize = 12;
    let signSize = chargeSize - 4;

    for (let i = 0; i < box.chargeAmount - 1; i++) {
            noStroke();
        
        (box.charge == "pos") ? fill('#4275A6') : fill("#F57070");


        noStroke();
        moveCharge = box.x - 300;

        if (box.charge == "pos") {
            circle(chargeX[i] + moveCharge, chargeY[i], chargeSize);
            stroke("#B7DCFF"); //bg
            strokeWeight(1);
            // cross line
            line(chargeX[i] + moveCharge - signSize / 2, chargeY[i], chargeX[i] + moveCharge + signSize / 2, chargeY[i])
            if (box.charge == "pos") {
                // up line
                line(chargeX[i] + moveCharge, chargeY[i] - signSize / 2, chargeX[i] + moveCharge, chargeY[i] + signSize / 2)
            }
        }
        else if (box.charge == "neg") {
            circle(chargeXR[i] + moveCharge, chargeYR[i], chargeSize);
            stroke("#9F6464"); //bg
            strokeWeight(1);
            // cross line
            line(chargeXR[i] + moveCharge - signSize / 2, chargeYR[i], chargeXR[i] + moveCharge + signSize / 2, chargeYR[i])
            if (box.charge == "pos") {
                // up line
                line(chargeXR[i] + moveCharge, chargeYR[i] - signSize / 2, chargeXR[i] + moveCharge, chargeYR[i] + signSize / 2)
            }
        }

    }
}

function drawScreen(box) {
    fill(18, 18, 18, 180);
    noStroke();
    let gap = 20;

    // right
    beginShape();
    vertex(box.x + gap, box.y); // left top
    vertex(box.x + gap, box.y + box.h); // left bottom
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


function drawArrows(box, sides) {
    let rows = 8;
    let spaceBetween = rows * 4.2;
    let spacing = spaceBetween;

    let arrowSize = 12;
    // let lineLength = 1600;
    let fieldLineLength = 260;

    // 3D Field
    if (box.dim3) {
        let offsetX = 0;
        let offsetY = 0;
        let fillAmount = 240;

        let chargeSize = 12;
        // let signSize = chargeSize - 4;

        // for each row
        for (let i = 0; i < rows; i++) {
            // for each set in z axis
            for (let i = 0; i < 5; i++) {
                (box.charge == "pos") ? stroke(91, 149, 203, fillAmount) : stroke(193, 81, 81, fillAmount);
                // stroke(91, 149, 203, fillAmount);
                let gap;
                strokeWeight(3);
                if (box.charge == "pos") {
                    // strokeWeight(.6 * box.chargeAmount);
                    // gap = 12;
                    gap = 12;
                } else if (box.charge == "neg") {
                    // strokeWeight(2);
                    // gap = 24;
                    gap = 12;
                }

                
                strokeWeight(box.chargeAmount * .26);
                // purple lines
                if (sides.includes("p")) {
                    stroke(140, 52, 228, fillAmount); // purple color
                    line(-4 + box.c - gap + offsetX, // x1
                        10+ box.y + spacing + offsetY, // y1
                        -4 + 610 - fieldLineLength - gap + offsetX, // x2
                        10 + box.y + spacing + offsetY); // y

                    // purple arrows
                    let off = -10;
                    fill(140, 52, 228, fillAmount); 
                    if (mouseX > graphC + 20) {
                        triangle(
                            box.c + off + offsetX,
                            10 +box.y + spacing + offsetY,
                            box.c + off - arrowSize + offsetX,
                            10 +box.y + arrowSize / 2 + spacing + offsetY,

                            box.c + off - arrowSize + offsetX,
                            10 +box.y - arrowSize / 2 + spacing + offsetY,
                        )
                    }

                    
                }

                fill(box.color);
                
                strokeWeight(box.chargeAmount * .2);
                if  (box.showArrows) {
                    // right set of lines
                    if (sides.includes("r")) {
                        (box.charge == "pos") ? stroke(91, 149, 203, fillAmount) : stroke(193, 81, 81, 40);
                        line(gap + box.c + offsetX,
                            box.y + spacing + offsetY,
                            gap + box.c + fieldLineLength + offsetX,
                            box.y + spacing + offsetY);
                    }
                    fill(box.color);
                    // left set of lines
                    if (box.charge == "pos") {
                        if (sides.includes("l")) {
                            line(box.c - gap + offsetX,
                                box.y + spacing + offsetY,
                                box.c - fieldLineLength - gap + offsetX,
                                box.y + spacing + offsetY);
                        }
                    }
                    else if (box.charge == "neg") {
                        if (sides.includes("l")) {
                            line(-4 + box.c - gap + offsetX,
                                box.y + spacing + offsetY,
                                -4 + box.c - fieldLineLength - gap + offsetX,
                                box.y + spacing + offsetY);
                        }
                        
                        // if (sides.includes("l")) {
                        //     line(-4 + box.c - gap + offsetX,
                        //         box.y + spacing + offsetY,
                        //         0,
                        //         box.y + spacing + offsetY);
                        // }
                    }



                    noStroke();
                    let move = 36;
                    (box.charge == "pos") ? fill(91, 149, 203, fillAmount) : fill(193, 81, 81, fillAmount);

                    // ARROW HEADS

                    if (box.charge == "pos") {
                        // right triangles
                        if (sides.includes("r")) {
                            triangle(
                                600 + offsetX, box.y + spacing + offsetY,
                                600 - arrowSize + offsetX, box.y + arrowSize / 2 + spacing + offsetY,
                                600 - arrowSize + offsetX, box.y - arrowSize / 2 + spacing + offsetY,
                            )
                        }
                        // left triangles
                        if (sides.includes("l")) {
                            triangle(
                                move + offsetX, box.y + spacing + offsetY,
                                move + arrowSize + offsetX, box.y + arrowSize / 2 + spacing + offsetY,
                                move + arrowSize + offsetX, box.y - arrowSize / 2 + spacing + offsetY,
                            )
                        }
                    }

                    else if (box.charge == "neg") {
                        // left arrows +x
                        if (sides.includes("l")) {
                            // triangle(
                            //     -20 + box.c - gap + offsetX, box.y + arrowSize / 2 + spacing + offsetY,
                            //     -20 + box.c - gap + offsetX, box.y - arrowSize / 2 + spacing + offsetY,
                            //     -20 - box.c - gap + offsetX + arrowSize, box.y + spacing + offsetY
                            // )
                            let off = -10;
                            let follow = box.x - 300;

                            triangle(
                                box.c + off + offsetX, box.y + spacing + offsetY,
                                box.c + off - arrowSize + offsetX, box.y + arrowSize / 2 + spacing + offsetY,
                                box.c + off - arrowSize + offsetX, box.y - arrowSize / 2 + spacing + offsetY,
                            )
                        }
                        // right arrow -x
                        if (sides.includes("r")) {
                            let m = 10;
                            triangle(
                                m + box.c + gap + offsetX, box.y - arrowSize / 2 + spacing + offsetY,
                                m + box.c + gap + offsetX, box.y + arrowSize / 2 + spacing + offsetY,
                                m + box.c + gap + offsetX - arrowSize, box.y + spacing + offsetY
                            )
                        }
                    }


                }
                offsetX += 20;
                offsetY -= 24;
                // fillAmount -= 38;
                fillAmount -= 255;
            }
            spacing += spaceBetween;
            offsetX = 0;
            offsetY = 0;
            fillAmount = 255;
        }
        spacing = spaceBetween;
    }
}

function mousePressed() {
    if (sceneCount == 1) {
        drawScene1 = true;
    }
    // else if (mouseX > 0) {
    //     toggleArrows();
    // }
}


function showBlueArrows() {
    for (let i = 0; i < blueBoxes.length - 1; i++) {
        (blueBoxes[i].showArrows == true)?
            blueBoxes[i].showArrows = false:
            blueBoxes[i].showArrows = true;
    }
}

function showRedArrows() {
    for (let i = 0; i < redBoxes.length - 1; i++) {
        (redBoxes[i].showArrows == true) ?
            redBoxes[i].showArrows = false :
            redBoxes[i].showArrows = true;
    }
}

function showPurpleArrows() {
    // for (let i = 0; i < redBoxes.length - 1; i++) {
    //     (redBoxes[i].showArrows == true) ?
    //         redBoxes[i].showArrows = false :
    //         redBoxes[i].showArrows = true;
    // }
}