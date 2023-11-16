class Box {
    constructor(x, y, w, h, numElectrons, dim) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.numElectrons = numElectrons;
        this.scannerX = this.x - 40;
        this.scannerY = this.y;
        this.chargeMap = [];
        this.randomMap = [];
        this.electrons = [];
        this.dim = false;

        // populate chargeMap
        this.populateRandomMap();
        this.populateChargeMap();
        this.populateElectrons();
    }

    updateNumElectrons(value) {
        this.numElectrons = value;
    }

    updateScannerX(x) {
        this.scannerX = x;
    }

    updateDim(value) {
        this.dim = value;
    }

    populateElectrons() {
        for (let i = 0; i < this.numElectrons; i++) {
            let xMin = this.x + 10;
            let xMax = this.w + this.x - 10;
            let yMin = this.y + 10;
            let yMax = this.h + this.y - 10;
            let electron = new Electron(random(xMin, xMax), random(yMin, yMax), 5, this.x, this.y, this.w, this.h);
            this.electrons.push(electron);
        }
    }

    populateRandomMap() {
        for (let row = 0; row < 9; row++) {
            // for each column
            this.randomMap[row] = []
            for (let col = 0; col < 5; col++) {
                let chance = Math.floor(Math.random() * 45);
                if (chance <= 20) {
                    this.randomMap[row][col] = 0;
                } else {
                    this.randomMap[row][col] = 1;
                }
            }
        }
    }

    populateChargeMap() {
        let col = 1;
        // row = 1;
        let xUnit = 30;
        let yUnit = 30;
        let type = "pos";
        // for each row
        for (let row = 0; row < 9; row++) {
            this.chargeMap[row] = [];
            for (let col = 0; col < 5; col++) {
            // for each column
                // this.chargeMap[row].push([xUnit * col, yUnit * row, `${type}`]);
                // console.log(this.randomMap[row][col]);
                // (this.randomMap[row][col] == 1)? type = "both": null;
                // if (this.randomMap[row][col] == 1) {
                //     type = "both";
                // }

                this.chargeMap[row].push(new Charge(type, xUnit * col + this.x, xUnit * row + this.y));
            }
            // type = "none";
        }
    }
}