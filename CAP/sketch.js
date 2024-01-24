let fade
let fadeAmount = 1
let afterDelay = false

// vars
let color = {
  grey: [175, 175, 175],
  pos: [218, 107, 107],
  posDim: [65, 46, 46],
  neg: [95, 177, 255],
  negDim: [18, 66, 104],
  sign: [122, 59, 59],
  signDim: [50, 31, 31],
  battery: [230, 226, 188],
  purple: [145, 87, 204],
  neutral: [79, 79, 79],
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

  L9: null,
  R9: null,

  L10: null,
  R10: null,

  L11: null,
  R11: null,
}

const graphY = 580
const graphW = 616
const graphC = 260
const leftPadding = 140
const graphX = graphC - graphW / 2 + leftPadding
const graphEnd = graphC + graphW / 2 - 60

const rows = 20
const cols = 10

// battery measurements
const batteryPosition = {
  center: 300,
  leftX: 180,
  rightX: 420,
  y1: 381,
  y2: 420,
  batterySize: 40,
}

const colorChangeInterval = 500

// images
let batteryPos
let batteryNeg

let reverse = false

// changing
let dest1
let dest2
let dest3
let dest4
let attractSide
let destSide
let currLeftBox
let currRightBox

let displayCharges = []
let lastColorChange = 0

let tempBox
let atDestSide = false

let sceneAnimated = false
let showEF = false
let numTransfer = 12

let brightChargesMetal = []
let brightChargesSemi = []
let animCharges = []

let balls = []
let totalElectrons = 200

let scannerSpeed = 0

let electronsTransferred = 0
let defaultDopants = 30

let currButton
let currVoltageSlider
let currDopantSlider

// box dimensions
let xLeft = 0
let xRight = 340
let boxY = 110
let boxWidth = 280
let boxHeight = 280

// scanner / sizes
let lastPos = 0
const surfaceWidth = 10 // 10nm

function setup() {
  fade = 255
  canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight)
  canvas.parent("visualization")
  batteryPos = loadImage("batteryPos.png")
  batteryNeg = loadImage("batteryNeg.png")

  // tempBox
  tempBox = new Box(xLeft, boxY, boxWidth, boxHeight, 0)

  let side = "left"

  for (let [box, value] of Object.entries(boxes)) {
    // instantiate each box with x position depending on left or right box

    let x
    side == "left" ? (x = xLeft) : (x = xRight)
    boxes[box] = new Box(x, boxY, 160, 280, totalElectrons, "m")
    side == "left" ? (side = "right") : (side = "left")
  }

  // change electrons, dopants, type for semiconductor boxes
  let semis = [boxes.R5, boxes.R6, boxes.R7, boxes.R8, boxes.R9, boxes.R10]
  semis.forEach((box) => {
    box.updateNumElectrons(defaultDopants)
    box.updateDopants(defaultDopants)
    box.updateType("s")
  })
}

// update number of electrons transferred to other box
function updateNumTransfer(value) {
  numTransfer = value
}

function controlHelper(scene, id, text, controlFunc, resetFunc) {
  if (sceneCount == scene) {
    if (document.getElementById(`${id}`).textContent == "Reset") {
      resetFunc()
      electronsTransferred = 0
      document.getElementById(`${id}`).textContent = `${text}`
    } else if (document.getElementById(`${id}`).textContent == `${text}`) {
      controlFunc()
      document.getElementById(`${id}`).textContent = "Reset"
    }
  }
}

function animateElectrons() {
  scannerSpeed = 1

  if (!reverse) {
    if (sceneAnimated == false) {
      let i = 0
      for (let i = 0; i < numTransfer; i++) {
        let e = currRightBox.electrons[currRightBox.electrons.length - 1]

        if (e.avail) {
          tempBox.electrons.push(e)
          currRightBox.electrons.pop()
          e.updateAnimate(true)
          e.updateLit(true)
        }
      }
    }
  } else {
    if (sceneAnimated == false) {
      let i = 0
      for (let i = 0; i < numTransfer; i++) {
        let e = currLeftBox.electrons[currLeftBox.electrons.length - 1]

        if (e.avail) {
          tempBox.electrons.push(e)
          currLeftBox.electrons.pop()
          e.updateAnimate(true)
          e.updateLit(true)
        }
      }
    }
  }

  // reset voltage controls
  controlHelper(
    1,
    "voltageButton1",
    "Apply Voltage",
    () => {
      if (
        sceneAnimated == false &&
        document.getElementById("voltageButton1").textContent == "Reset"
      ) {
        // hasn't animated yet and not reset
        sceneAnimated = true
      }
    },
    () => {
      boxes.L1 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R1 = new Box(340, 100, 160, 280, totalElectrons, "m")

      tempBox.electrons = []
      sceneAnimated = false
    }
  )

  controlHelper(
    2,
    "voltageButton2",
    "Apply Voltage",
    () => {
      if (
        sceneAnimated == false &&
        document.getElementById("voltageButton2").textContent == "Reset"
      ) {
        // hasn't animated yet
        sceneAnimated = true
      }
    },
    () => {
      boxes.L2 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R2 = new Box(340, 100, 160, 280, totalElectrons, "m")
      tempBox.electrons = []

      sceneAnimated = false
    }
  )

  controlHelper(
    3,
    "voltageButton3",
    "Apply Voltage",
    () => {
      if (sceneAnimated == false) {
        // hasn't animated yet
        setTimeout(() => {
          showEF = true
        }, "4000")
        sceneAnimated = true
      }
    },
    () => {
      boxes.L3 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R3 = new Box(340, 100, 160, 280, totalElectrons, "m")
      tempBox.electrons = []

      sceneAnimated = false
      showEF = false
    }
  )

  // reset scanner
  controlHelper(
    4,
    "voltageButton4",
    "Apply Voltage",
    () => {
      if (sceneAnimated == false) {
        setTimeout(() => {
          if (boxes.R4.numElectrons < totalElectrons) {
            sceneAnimated = true
            showEF = true
          }
        }, "4000")
      }
    },
    () => {
      boxes.L4 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R4 = new Box(340, 100, 160, 280, totalElectrons, "m")

      tempBox.electrons = []

      sceneAnimated = false
      showEF = false
      scannerSpeed = 0
      boxes.R4.scannerX = boxes.R4.x
    }
  )

  controlHelper(
    5,
    "voltageButton5",
    "Apply Voltage",
    () => {
      if (sceneAnimated == false) {
        // hasn't animated yet
        setTimeout(() => {
          if (currButton.textContent == "Reset" && sceneAnimated == false)
            sceneAnimated = true
          showEF = true
        }, "4000")
      }
    },
    () => {
      boxes.L5 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R5 = new Box(340, 100, 160, 280, totalElectrons, "s")
      tempBox.electrons = []

      boxes.R5.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
    }
  )

  controlHelper(
    6,
    "voltageButton6",
    "Apply Voltage",
    () => {
      if (sceneAnimated == false) {
        // hasn't animated yet
        setTimeout(() => {
          sceneAnimated = true
          showEF = true
        }, "4000")
      }
    },
    () => {
      boxes.L6 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R6 = new Box(340, 100, 160, 280, totalElectrons, "s")
      tempBox.electrons = []

      boxes.R6.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
    }
  )

  controlHelper(
    7,
    "scanButton7",
    "Scan",
    () => {
      if (sceneAnimated == false) {
        setTimeout(() => {
          if (boxes.R7.numElectrons < totalElectrons) {
            sceneAnimated = true
            showEF = true
          }
        }, "4000")
      }
    },
    () => {
      boxes.L7 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R7 = new Box(340, 100, 160, 280, totalElectrons, "s")

      tempBox.electrons = []
      boxes.R7.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
      scannerSpeed = 0
      boxes.R7.scannerX = boxes.R7.x
    }
  )

  controlHelper(
    8,
    "scanButton8",
    "Scan",
    () => {
      if (sceneAnimated == false) {
        setTimeout(() => {
          if (boxes.R8.numElectrons < totalElectrons) {
            sceneAnimated = true
            showEF = true
          }
        }, "4000")
      }
    },
    () => {
      boxes.L8 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R8 = new Box(340, 100, 160, 280, totalElectrons, "s")

      tempBox.electrons = []
      boxes.R8.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
      scannerSpeed = 0
      boxes.R8.scannerX = boxes.R8.x
      boxes.R8.updateDopants(document.getElementById("dopantSlider8").value)
    }
  )

  controlHelper(
    9,
    "scanButton9",
    "Scan",
    () => {
      if (sceneAnimated == false) {
        setTimeout(() => {
          // if (boxes.L9.numElectrons < totalElectrons) {
          showEF = true
          sceneAnimated = true

          // }
        }, "4000")
      }
    },
    () => {
      boxes.L9 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R9 = new Box(340, 100, 160, 280, totalElectrons, "s")

      tempBox.electrons = []
      boxes.R9.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
      scannerSpeed = 0
      boxes.R9.scannerX = boxes.R9.x
      boxes.R9.updateDopants(document.getElementById("dopantSlider9").value)
    }
  )

  // control 10
  controlHelper(
    10,
    "scanButton10",
    "Scan",
    () => {
      if (sceneAnimated == false) {
        // hasn't animated yet
        setTimeout(() => {
          sceneAnimated = true
          showEF = true
        }, "4000")
      }
    },
    () => {
      boxes.L10 = new Box(100, 100, 160, 280, totalElectrons, "m")
      boxes.R10 = new Box(340, 100, 160, 280, totalElectrons, "s")
      tempBox.electrons = []

      boxes.R10.updateDopants(defaultDopants)

      sceneAnimated = false
      showEF = false
    }
  )
}

// function animateScanner() {
//     animateElectrons();
// }

function resetScene() {
  fade = 255
  reverse = false
  tempBox.electrons = []
  numTransfer = 12
  brightChargesMetal = []
  brightChargesSemi = []
  animCharges = []
  displayCharges = []
  sceneAnimated = false
  electronsTransferred = 0

  lastColorChange = 0

  atDestSide = false

  showEF = false

  balls = []
  totalElectrons = 200

  scannerSpeed = 0

  resetControl("voltageSlider2", 12)
  resetControl("voltageSlider3", 12)
  resetControl("voltageSlider6", 12)
  resetControl("voltageSlider7", 12)
  resetControl("voltageSlider8", 12)
  resetControl("voltageSlider10", 12)
  // resetControl("dopantSlider6", defaultDopants)

  // dim neutrals after 2 seconds
  setTimeout(() => {
    // background(255, 0, 0, fade)
    // afterDelay = true
    // for (let i = 0; i <= currRightBox.chargeMap.length - 1; i++) {
    //   currRightBox.chargeMap[i].updateType("dim")
    // }
    // for (let i = 0; i <= currRightBox.electrons.length - 1; i++) {
    //   currRightBox.electrons[i].updateDim(true)
    // }
    // for (let i = 0; i <= currLeftBox.chargeMap.length - 1; i++) {
    //   currLeftBox.chargeMap[i].updateType("dim")
    // }
    // for (let i = 0; i <= currLeftBox.electrons.length - 1; i++) {
    //   currLeftBox.electrons[i].updateDim(true)
    // }
  }, 1000)
}

function resetControl(id, v) {
  document.getElementById(`${id}`).value = v
}

function drawBattery() {
  let center = batteryPosition.center
  let leftX = batteryPosition.leftX
  let rightX = batteryPosition.rightX
  let y1 = batteryPosition.y1
  let y2 = batteryPosition.y2
  let batterySize = batteryPosition.batterySize

  noStroke()
  fill(color.battery)

  strokeWeight(1.2)
  stroke("#FFF")
  line(leftX, y1, leftX, y2) // x y x y
  line(leftX, y2, rightX, y2)
  line(rightX, y1, rightX, y2)

  if (reverse) {
    image(batteryPos, 266, 404, batteryPos.width / 1.5, batteryPos.height / 1.5)
  } else {
    image(batteryNeg, 266, 404, batteryNeg.width / 1.5, batteryNeg.height / 1.5)
  }
}

function drawMOS(box, label, leftPadding) {
  fill(18)
  stroke("#fff")
  let boxD = 100
  let boxA = -100
  beginShape()
  vertex(box.x + box.w, box.y + box.h) // left top
  vertex(box.x + box.w, box.y) // left bottom
  vertex(box.x + box.w + boxD, box.y + boxA) // top right
  vertex(box.x + box.w + boxD, box.y + box.h + boxA)
  endShape(CLOSE)

  noStroke()
  fill("white")
  text(label, box.x + box.w + leftPadding, box.y + box.h / 2 - 40)
}

function drawBox(box) {
  stroke("#FFF")
  strokeWeight(1.2)
  noFill()

  // boxA = -20
  boxA = -60
  // boxD = 24
  boxD = 80

  beginShape()
  vertex(box.x, box.y)
  vertex(box.x, box.y + box.h)
  vertex(box.x + box.w, box.y + box.h)
  vertex(box.x + box.w, box.y)
  endShape(CLOSE)

  // box side
  beginShape()
  vertex(box.x + box.w, box.y + box.h) // left top
  vertex(box.x + box.w, box.y) // left bottom
  vertex(box.x + box.w + boxD, box.y + boxA) // top right
  vertex(box.x + box.w + boxD, box.y + box.h + boxA)
  endShape(CLOSE)

  // // box top
  beginShape()
  vertex(box.x, box.y) // bottom left
  vertex(box.x + box.w, box.y) // bottom right
  vertex(box.x + box.w + boxD, box.y + boxA) // top right
  vertex(box.x + boxD, box.y + boxA) // top left
  endShape(CLOSE)

  styleText()

  if (box.type == "m") {
    let totalNM = 10
    text(`Total nm: 10`, box.x + 20, box.y + 300)

    // code numtransfer = 12
    // # / 20 in 1m = #/20nm
    if (electronsTransferred > 1) {
      if (box.x > 300) {
        totalNM -= numTransfer / 20
      } else {
        totalNM += numTransfer / 20
      }
    }

    let numElectrons = (totalNM * 10 ** 15).toExponential()

    // let nr1 = numElectrons.substr(0, 4)
    // let nr2 = numElectrons.substr(4, numElectrons.length)

    // let finalNr = Number(nr1 + 0 + nr2).toExponential(2)

    text(`Total electrons: ${numElectrons}`, box.x + 20, box.y + 320)
  } else if (box.type == "s") {
    let totalNM = 10
    // let expoRange = 10 ** 2 / box.dopantAmount
    let expo = 10 ** 15

    // let expo = 10 ** 15

    text(`Total nm: 10`, box.x + 20, box.y + 300)
    let numElectrons = (totalNM * expo).toExponential()

    let nr1 = numElectrons.substr(0, 4)
    let nr2 = numElectrons.substr(4, numElectrons.length)
    let finalNr = Number(nr1 + 0 + nr2).toExponential(2)

    // console.log(numElectrons)
    text(`Total electrons: ${finalNr}`, box.x + 20, box.y + 320)
  }
  // text(`total negative charges:${box.numElectrons}`, box.x + 20, box.y + 320)
  // text(
  //   `total positive charges:${box.chargeMap.length}`,
  //   box.x + 20,
  //   box.y + 340
  // )

  // text(
  //   `net charge: ${box.chargeMap.length - box.numElectrons}`,
  //   box.x + 20,
  //   box.y + 360
  // )

  // // left box
  // text(`total nm: 10`, xLeft + 20, box.y + 300)
  // text(
  //   `total negative charges:${currLeftBox.numElectrons}`,
  //   xLeft + 20,
  //   box.y + 320
  // )
  // text(
  //   `total positive charges:${currLeftBox.chargeMap.length}`,
  //   xLeft + 20,
  //   box.y + 340
  // )
}

function drawAnimatedCharges(charges) {
  // for each row
  for (let i = 0; i < charges.length; i++) {
    // for each column
    let chargeX = charges[i].x + 20
    let chargeY = charges[i].y + 20
    let chargeType = charges[i].type
    let chargeLit = charges[i].lit
    drawCharge(chargeX, chargeY, chargeType, chargeLit)
  }
}

function genBrightCharges(dopantIndices) {
  // Generate a new array of x random indices for bright circles in each frame
  brightChargesMetal = []
  brightChargesSemi = []

  // for (let i = 0; i < electrons)

  while (brightChargesMetal.length < electronsTransferred) {
    let randomIndex
    if (!reverse) {
      randomIndex = floor(random(20)) // 20 rows
    } else if (reverse) {
      randomIndex = floor(totalElectrons - random(20)) // 20 rows
    }
    if (!brightChargesMetal.includes(randomIndex)) {
      brightChargesMetal.push(randomIndex)
    }
  }
  while (brightChargesSemi.length < electronsTransferred) {
    let randomIndex = floor(random(defaultDopants))
    if (!brightChargesSemi.includes(randomIndex)) {
      brightChargesSemi.push(randomIndex)
    }
  }
}

function drawCharges(box, type) {
  for (let i = 0; i < box.chargeMap.length; i++) {
    // for each column
    let chargeX = box.chargeMap[i].x + 19
    let chargeY = box.chargeMap[i].y + 17
    let chargeType = box.chargeMap[i].type

    if (millis() - lastColorChange > colorChangeInterval) {
      genBrightCharges(box.dopantIndices)
      lastColorChange = millis()
    }

    // flicker positive charges on surface

    let boxSideCondition
    if (!reverse) {
      boxSideCondition = box.x > 300
    } else if (reverse) {
      boxSideCondition = box.x < 300
    }

    if (box.type == "s") {
      for (let i = 0; i <= box.chargeMap.length - 1; i++) {
        let isDopant = box.dopantIndices.includes(i)
        if (isDopant) {
          box.chargeMap[i].updateType("pos")
        }
      }
    }

    if (boxSideCondition) {
      for (let i = 0; i <= box.chargeMap.length - 1; i++) {
        let isBrightMetal = brightChargesMetal.includes(i)

        if (box.type == "m") {
          // dim all right positive charges
          // if (electronsTransferred >= 1) {
          //   box.chargeMap[i].updateType("dim")
          // }
          // light up attracted positive charges
          if (isBrightMetal) {
            // box.chargeMap[i].updateType("pos")
            box.chargeMap[i].updateLit(true)
          } else {
            box.chargeMap[i].updateLit(false)
          }
        }

        // // make all neutrals
        // if (box.type == "s") {
        //   if (electronsTransferred >= 1) {
        //     box.chargeMap[i].updateType("dim")
        //   }
        // }
      }
      if (box.type == "s") {
        // light up attracted dopants
        for (let j = 0; j < brightChargesSemi.length; j++) {
          let dopant = box.chargeMap[box.dopantIndices[brightChargesSemi[j]]]
          if (brightChargesSemi.includes(j)) {
            dopant.updateLit(true)
          } else {
            dopant.updateLit(false)
          }
        }
      }
    }

    drawCharge(chargeX, chargeY, chargeType, box.chargeMap[i].lit)
  }

  // styleText()
  // text(`#negative charges: ${box.numElectrons}`, box.x + 30, box.y + 300)
}

function updateDopantAmount(value) {
  sceneCount == 5 ? boxes.R5.updateDopants(value) : null
  sceneCount == 6 ? boxes.R6.updateDopants(value) : null
  sceneCount == 7 ? boxes.R7.updateDopants(value) : null
  sceneCount == 8 ? boxes.R8.updateDopants(value) : null
  sceneCount == 9 ? boxes.R9.updateDopants(value) : null
  sceneCount == 10 ? boxes.R10.updateDopants(value) : null
}

function checkDest(electron, dest, side) {
  xCondition =
    electron.position.x < dest.x + 5 && electron.position.x > dest.x - 5
  yCondition =
    electron.position.y < dest.y + 5 && electron.position.y > dest.y - 5

  if (xCondition && yCondition) {
    return true
  } else {
    return false
  }
}

// controls animations / colors after animation (including charges and electrons)
function drawElectrons(box) {
  // check for animation, animate
  for (let i = 0; i < box.electrons.length; i++) {
    let electron = box.electrons[i]

    // set destinations for travel
    if (!reverse) {
      dest1 = createVector(batteryPosition.rightX, batteryPosition.y1)
      dest2 = createVector(batteryPosition.rightX, batteryPosition.y2)
      dest3 = createVector(batteryPosition.leftX, batteryPosition.y2)
      dest4 = createVector(
        batteryPosition.leftX,
        batteryPosition.y1 - (i % 15) * 17 - 20
      )
      attractSide = currLeftBox.x + currLeftBox.w - 10
    } else {
      dest1 = createVector(batteryPosition.leftX, batteryPosition.y1)
      dest2 = createVector(batteryPosition.leftX, batteryPosition.y2)
      dest3 = createVector(batteryPosition.rightX, batteryPosition.y2)
      dest4 = createVector(
        batteryPosition.rightX,
        batteryPosition.y1 - (i % 15) * 17 - 20
      )
      attractSide = currRightBox.x + 10
    }

    if (frameCount % 2 == 0) {
      if (electron.animate) {
        let atDest1 = checkDest(electron, dest1, false)
        let atDest2 = checkDest(electron, dest2, false)
        let atDest3 = checkDest(electron, dest3, false)
        let atDest4 = checkDest(electron, dest4, false)

        if (atDest1) {
          if (!electron.passedDest.includes(1)) {
            electron.updatePassed(1)
            currRightBox.updateNumElectrons((currRightBox.numElectrons -= 1))
          }
        }
        if (atDest2) {
          if (!electron.passedDest.includes(2)) {
            electron.updatePassed(2)
          }
        }
        if (atDest3) {
          if (!electron.passedDest.includes(3)) {
            electron.updatePassed(3)
            setTimeout(() => {
              currLeftBox.updateNumElectrons((currLeftBox.numElectrons += 1))
            }, 300)
          }
        }
        if (atDest4) {
          if (!electron.passedDest.includes(4)) {
            electron.updatePassed(4)
          }
        }

        if (
          electron.passedDest.includes(0) &&
          !electron.passedDest.includes(1)
        ) {
          electron.move(dest1)
        }
        if (
          electron.passedDest.includes(1) &&
          !electron.passedDest.includes(2)
        ) {
          electron.move(dest2)
        }
        if (
          electron.passedDest.includes(2) &&
          !electron.passedDest.includes(3)
        ) {
          electron.move(dest3)
        }
        if (
          electron.passedDest.includes(3) &&
          !electron.passedDest.includes(4)
        ) {
          electron.move(dest4)
        }

        if (electron.passedDest.includes(4)) {
          if (!reverse) {
            if (electron.position.x < attractSide) {
              electron.position.x += 4
            }

            if (electron.position.x > attractSide - 2) {
              let possibleSpeeds = []
              for (let i = 5; i < 8; i++) {
                possibleSpeeds.push(i)
              }
              for (let i = -5; i > -8; i--) {
                possibleSpeeds.push(i)
              }
              let index = floor(Math.random() * possibleSpeeds.length)

              electron.updateVelocity(createVector(0, possibleSpeeds[index]))
              electron.updateAnimate(false)
              if (electron.pushed == false) {
                electron.updatePushed(true)
                sceneAnimated = true

                // dim all electrons
                // for (let i = 0; i < currLeftBox.electrons.length; i++) {
                //   currLeftBox.electrons[i].updateDim(true)
                // }
                // for (let i = 0; i < currRightBox.electrons.length; i++) {
                //   currRightBox.electrons[i].updateDim(true)
                // }

                electronsTransferred += 1

                // for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
                //   // for each column
                //   currLeftBox.chargeMap[i].updateType("dim")
                // }
              }
            }
          } else if (reverse) {
            if (electron.position.x > attractSide) {
              electron.position.x -= 4
            }

            if (electron.position.x < attractSide + 2) {
              electron.updateVelocity(createVector(0, -3))
              electron.updateAnimate(false)
              if (electron.pushed == false) {
                electron.updatePushed(true)
                sceneAnimated = true

                // dim all electrons
                // for (let i = 0; i < currLeftBox.electrons.length; i++) {
                //   currLeftBox.electrons[i].updateDim(true)
                // }
                // for (let i = 0; i < currRightBox.electrons.length; i++) {
                //   currRightBox.electrons[i].updateDim(true)
                // }

                electronsTransferred += 1

                // for (let i = 0; i < currLeftBox.chargeMap.length; i++) {
                //   // for each column
                //   currLeftBox.chargeMap[i].updateType("dim")
                // }
              }
            }
          }
        }
      } else {
        // not animated - moving around in box
        electron.update()
      }
    }
    if (electron.show) {
      electron.display(electron.dim)
    }
  }
}

function drawCharge(chargeX, chargeY, chargeType, lit) {
  let posSize = 8
  let signSize = 6
  noStroke()

  // charge circles
  // positive charge
  if (chargeType == "pos") {
    lit ? fill(218, 107, 107) : fill(218, 107, 107, fade)
    circle(chargeX, chargeY, posSize)
    lit ? stroke(122, 59, 59) : stroke(122, 59, 59, fade)
  }
  if (chargeType == "neutral") {
    fill(color.neutral)
    circle(chargeX, chargeY, posSize)
  }

  strokeWeight(1)
  canvas.drawingContext.setLineDash([])

  // cross line
  line(chargeX - signSize / 2, chargeY, chargeX + signSize / 2, chargeY)
  // up line
  line(chargeX, chargeY - signSize / 2, chargeX, chargeY + signSize / 2)
}

function drawScanner(box) {
  // setTimeout(() => {
  //   if (sceneCount == 4) {
  //     let measure = int(box.x) + int(currVoltageSlider.value)
  //     if (box.scannerX >= measure) {
  //       scannerSpeed = 0
  //     }
  //   }
  //   if (sceneCount == 8) {
  //     let measure = int(box.x) + int(currVoltageSlider.value) * 6
  //     if (box.scannerX >= measure) {
  //       scannerSpeed = 0
  //     }
  //   }
  //   if (sceneCount == 9) {
  //     // let measure = int(box.x) + int(currVoltageSlider.value) * 6;
  //     let measure = int(box.x) + Math.log(int(currVoltageSlider.value)) * 42
  //     measure = measure - int(currDopantSlider.value) / 2
  //     if (box.scannerX >= measure) {
  //       if (int(currDopantSlider.value) > 0) {
  //         scannerSpeed = 0
  //       }
  //     }
  //   }
  //   if (sceneCount == 10) {
  //     let measure = int(box.x) + int(currVoltageSlider.value)
  //     if (box.scannerX >= measure) {
  //       scannerSpeed = 0
  //     }
  //   }
  // }, "200")

  // // if scanner hits end of box or electron goal has been transferred
  // if (
  //   box.scannerX > box.x + box.w - 10 ||
  //   electronsTransferred >= numTransfer
  // ) {
  //   scannerSpeed = 0
  // }

  // // move the scanner using scannerSpeed
  // box.updateScannerX(box.scannerX + scannerSpeed)

  // // how much of box has been scanned
  // let scannerOverBox = box.scannerX - box.x // total = 150

  // // gets percentage of scan
  // let scanProgress = scannerOverBox / 150

  // // which electron to move based on scan percentage
  // let electronIndex = Math.floor(box.numElectrons * scanProgress)

  // draw scanner
  fill(255, 250, 202, 80)
  noStroke()

  let xPos = 0
  let scale = 10
  let scannerNM = 1
  let scannerWidth = scannerNM * scale // 1nm

  if (mouseX > xRight + scannerWidth && mouseX < xRight + box.w) {
    xPos = mouseX - xRight - scannerWidth
    lastPos = xPos
    scannerNM += (mouseX - xRight) / (boxWidth / scale) - 1 // 1 = default scannerNM
  } else if (mouseX > xRight + box.w) {
    // if over right side of box, set nm = 10 (prevent fast mouse exit)
    lastPos = boxWidth - scannerWidth
    scannerNM = scannerWidth
  } else if (mouseX < xRight + scannerWidth) {
    // if over left side of box, set nm = 1 (prevent fast mouse exit)
    lastPos = scannerWidth
    scannerNM = 1
  }

  // only draw if electrons have been animated
  if (electronsTransferred > 1) {
    rect(box.scannerX, box.scannerY, lastPos + scannerWidth, box.h)

    beginShape()
    vertex(box.x, box.y) // bottom left
    vertex(box.x + scannerWidth + lastPos, box.y) // bottom right
    vertex(box.x + scannerWidth + 24 + lastPos, box.y + boxA) // top right
    vertex(box.x + boxD, box.y + boxA) // top left
    endShape(CLOSE)

    // text of numbers

    styleText()
    // text(`scanner nm: ${scannerNM.toFixed(2)}`, box.x + 30, box.y - 60)
    // text(
    //   `scanner negative charges: ${floor(scannerNM * 20)}`,
    //   box.x + 30,
    //   box.y - 40
    // )

    // text(
    //   `scanner positive charges: ${floor(scannerNM * 20)}`,
    //   box.x + 30,
    //   box.y - 20
    // )

    // text(`Scanner net charge: 0`, box.x + 30, box.y - 0)

    // + floor(Math.random() * 4 - 2)

    text(`Scanner nm: ${scannerNM.toFixed(2)}`, box.x + 30, box.y - 60)

    let numElectrons = (scannerNM * 10 ** 15).toExponential()

    let nr1 = numElectrons.substr(0, 4)
    let nr2 = numElectrons.substr(4, numElectrons.length)
    let finalNr = Number(nr1 + 0 + nr2).toExponential(2)

    text(`Electrons within scanner: ${finalNr}`, box.x + 30, box.y - 40)
  }
}

function styleText() {
  noStroke()
  fill("white")
  textSize(12)

  textStyle(NORMAL)
  textFont("Sans-serif")
}

function drawGraph() {
  stroke(color.grey) // axis color
  strokeWeight(1)

  canvas.drawingContext.setLineDash([7, 3])

  line(graphC, graphY - 76, graphC, graphY + 60) // vert

  // sceneCount == 8 ? (xAxisExtend = 20) : null
  line(graphX, graphY, graphEnd, graphY) // hor

  fill(color.grey)

  canvas.drawingContext.setLineDash([])

  let size = 4.4
  stroke(color.grey)

  // graph lines + arrows
  // y axis arrow - up
  line(graphC, graphY - 76, graphC - size, graphY - 76 + size)
  line(graphC, graphY - 76, graphC + size, graphY - 76 + size)

  // y axis arrow - down
  line(graphC, graphY + 61, graphC + size, graphY + 61 - size)
  line(graphC, graphY + 61, graphC - size, graphY + 61 - size)

  // x axis arrow - right
  line(graphEnd, graphY, graphEnd - size, graphY - size)
  line(graphEnd, graphY, graphEnd - size, graphY + size)

  // x axis arrow - left
  line(graphX, graphY, graphX + size, graphY + size)
  line(graphX, graphY, graphX + size, graphY - size)

  strokeWeight(2)
  stroke(color.purple)

  let eFieldHeight = 0
  if (sceneAnimated) {
    eFieldHeight = numTransfer * 6
  }

  let noHeights = [0, 0]
  let noHeightXPoints = [graphX, graphEnd]

  if (!showEF) {
    drawLines(noHeightXPoints, noHeights, color.purple)
  }

  purpleHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0, 0]
  purpleXPoints = [graphX, graphC, graphC, graphC + 80, graphC + 80, graphEnd]

  if (
    sceneCount == 6 ||
    sceneCount == 7 ||
    sceneCount == 8 ||
    sceneCount == 9
  ) {
    purpleHeights = [0, 0, -eFieldHeight, -eFieldHeight, 0]
    purpleXPoints = [graphX, graphC, graphC, graphC + 80, graphEnd]
  }

  graphNorm = 1.4
  // standardize the heights
  for (let i = 0; i < purpleHeights.length; i++) {
    purpleHeights[i] = purpleHeights[i] / graphNorm
  }

  if (currButton && currButton.textContent == "Reset" && showEF) {
    drawLines(purpleXPoints, purpleHeights, color.purple)
    drawArrows()
  }
}

function drawLines(points, rawHeights, color) {
  let graphDivisor = 2
  let unit = 1 / graphDivisor

  let heights = []

  for (let i = 0; i < rawHeights.length; i++) {
    heights[i] = unit * rawHeights[i] + graphY
  }

  for (i = 0; i < points.length - 1; i++) {
    line(points[i], heights[i], points[i + 1], heights[i + 1]) // line
  }
}

function drawArrows() {
  if (showEF) {
    let x1
    let x2
    let y

    if (!reverse) {
      x1 = 268
      x2 = 350
      y = 112
    } else if (reverse) {
      x1 = 262
      x2 = 338
      y = 112
    }

    // draw 7 arrows
    for (let i = 0; i < 7; i++) {
      strokeCap(SQUARE)
      stroke(color.purple)
      let weight = numTransfer / 3
      strokeWeight(weight)

      let triangleSize = 12
      fill(color.purple)
      // draw line
      line(x1, y, x2 - triangleSize, y)
      if (
        sceneCount == 6 ||
        sceneCount == 7 ||
        sceneCount == 8 ||
        sceneCount == 9
      ) {
        noStroke()
        // rect(xRight, y, 100, weight)
        beginShape()
        vertex(xRight - 4, y - 2) // left top
        vertex(xRight - 4, y - 2 + weight) // left bottom
        vertex(xRight + boxWidth, y - 2 + weight / 2) // right bottom
        vertex(xRight + boxWidth, y - 2 + weight / 2) // right top
        endShape(CLOSE)
      }
      noStroke()

      if (weight > 0) {
        if (!reverse) {
          triangle(
            x1 - 8,
            y,
            x1 + triangleSize - 8,
            y + triangleSize / 1.7,
            x1 + triangleSize - 8,
            y - triangleSize / 1.7
          )
        } else if (reverse) {
          triangle(
            x2,
            y,
            x2 - triangleSize,
            y - triangleSize / 1.7,
            x2 - triangleSize,
            y + triangleSize / 1.7
          )
        }
      }
      y += 40
    }
  }
}

// fade all neutral charges
function fadeFunc() {
  fadeAmount = -2
  if (fade > 56) {
    fade += fadeAmount
  }
}

function draw() {
  if (sceneCount == 1) {
    scene1()
    fadeFunc()
  } else if (sceneCount == 2) {
    scene2()
    fadeFunc()
  } else if (sceneCount == 3) {
    scene3()
    fadeFunc()
  } else if (sceneCount == 4) {
    scene4()
    fadeFunc()
  } else if (sceneCount == 5) {
    scene5()
    fadeFunc()
  } else if (sceneCount == 6) {
    scene6()
    fadeFunc()
  } else if (sceneCount == 7) {
    scene7()
    fadeFunc()
  } else if (sceneCount == 8) {
    scene8()
    fadeFunc()
  } else if (sceneCount == 9) {
    scene9()
    fadeFunc()
  } else if (sceneCount == 10) {
    scene10()
    fadeFunc()
  } else if (sceneCount == 11) {
    scene11()
    fadeFunc()
  }
}

function scene1() {
  currButton = false

  currLeftBox = boxes.L1
  currRightBox = boxes.R1
  background(18)
  noStroke()

  drawBox(boxes.L1)
  drawBox(boxes.R1)

  drawBattery()

  drawCharges(boxes.L1)
  drawCharges(boxes.R1)
  drawElectrons(boxes.L1)
  drawElectrons(boxes.R1)
  drawElectrons(tempBox)
}

function scene2() {
  currButton = document.getElementById("voltageButton2")
  currLeftBox = boxes.L2
  currRightBox = boxes.R2
  background(18)
  noStroke()

  drawBox(boxes.L2)
  drawBox(boxes.R2)

  drawCharges(boxes.L2)
  drawCharges(boxes.R2)
  drawElectrons(boxes.L2)
  drawElectrons(boxes.R2)
  drawElectrons(tempBox)

  drawBattery()
}

function scene3() {
  currButton = document.getElementById("voltageButton3")
  background(18)
  currLeftBox = boxes.L3
  currRightBox = boxes.R3
  background(18)
  drawBox(boxes.L3)
  drawBox(boxes.R3)

  drawCharges(boxes.L3)
  drawCharges(boxes.R3)
  drawElectrons(boxes.L3)
  drawElectrons(boxes.R3)
  drawElectrons(tempBox)
  drawGraph()

  drawBattery()
}

function scene4() {
  currButton = document.getElementById("voltageButton4")
  currVoltageSlider = document.getElementById("voltageSlider4")
  background(18)
  currLeftBox = boxes.L4
  currRightBox = boxes.R4
  drawBox(boxes.L4)
  drawBox(boxes.R4)

  drawCharges(boxes.L4)
  drawCharges(boxes.R4)
  drawElectrons(boxes.L4)
  drawElectrons(boxes.R4)
  drawElectrons(tempBox)

  drawBattery()
  drawScanner(boxes.R4)

  drawGraph()
}

function scene5() {
  currButton = document.getElementById("voltageButton5")
  background(18)

  currLeftBox = boxes.L5
  currRightBox = boxes.R5

  drawBox(boxes.L5)
  drawBox(boxes.R5)

  drawCharges(boxes.L5)
  drawCharges(boxes.R5)
  drawElectrons(boxes.L5)
  drawElectrons(boxes.R5)
  drawElectrons(tempBox)

  drawBattery()

  drawGraph()
}

function scene6() {
  currButton = document.getElementById("voltageButton6")

  background(18)
  currLeftBox = boxes.L6
  currRightBox = boxes.R6
  drawBox(boxes.L6)
  drawBox(boxes.R6)

  drawCharges(boxes.L6)
  drawCharges(boxes.R6)
  drawElectrons(boxes.L6)
  drawElectrons(boxes.R6)
  drawElectrons(tempBox)

  drawBattery()

  drawGraph()
}

function scene7() {
  currButton = document.getElementById("voltageButton7")
  background(18)

  currLeftBox = boxes.L7
  currRightBox = boxes.R7

  drawBox(boxes.L7)
  drawBox(boxes.R7)

  drawCharges(boxes.L7)
  drawCharges(boxes.R7)
  drawElectrons(boxes.L7)
  drawElectrons(boxes.R7)
  drawElectrons(tempBox)

  drawBattery()
  drawGraph()
}

function scene8() {
  currButton = document.getElementById("scanButton8")
  currVoltageSlider = document.getElementById("voltageSlider8")

  background(18)
  currLeftBox = boxes.L8
  currRightBox = boxes.R8

  drawBox(boxes.L8)
  drawBox(boxes.R8)

  drawCharges(boxes.L8)
  drawCharges(boxes.R8)
  drawElectrons(boxes.L8)
  drawElectrons(boxes.R8)
  drawElectrons(tempBox)

  drawBattery()
  drawScanner(boxes.R8)
  drawGraph()
}

function scene9() {
  currButton = document.getElementById("scanButton9")
  currVoltageSlider = document.getElementById("voltageSlider9")
  currDopantSlider = document.getElementById("dopantSlider9")
  background(18)
  currLeftBox = boxes.L9
  currRightBox = boxes.R9
  drawBox(boxes.L9)
  drawBox(boxes.R9)

  drawCharges(boxes.L9)
  drawCharges(boxes.R9)
  drawElectrons(boxes.L9)
  drawElectrons(boxes.R9)
  drawElectrons(tempBox)

  drawScanner(boxes.R9)

  drawBattery()

  drawGraph()
}

function scene10() {
  currButton = document.getElementById("scanButton10")
  currVoltageSlider = document.getElementById("voltageSlider10")
  reverse = true
  background(18)
  currLeftBox = boxes.L10
  currRightBox = boxes.R10
  drawBox(boxes.L10)
  drawBox(boxes.R10)

  drawCharges(boxes.L10)
  drawCharges(boxes.R10)
  drawElectrons(boxes.L10)
  drawElectrons(boxes.R10)
  drawElectrons(tempBox)

  drawScanner(boxes.L10)
  drawBattery()
  drawGraph()
}

function scene11() {
  background(18)

  let surface1 = new Box(30, 200, 120, 300)
  let surface2 = new Box(120, 200, 120, 300)
  let surface3 = new Box(210, 200, 120, 300)

  drawMOS(surface1, "Metal", 30)
  drawMOS(surface2, "Oxide", 30)
  drawMOS(surface3, "Semiconductor", 10)
}
