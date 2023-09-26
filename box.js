class Box {
    constructor(charge, dim3, chargeAmount, midzone, arrowLength, showArrows, sides, x, y, w, d) {
        this.charge = charge;
        this.dim3 = dim3;
        this.arrowLength = arrowLength;
        this.showArrows = showArrows;
        this.chargeAmount = chargeAmount;
        this.midzone = midzone;
        this.sides = sides;

        this.x = x; // x position
        this.y = y; // y position 
        this.h = 300; // height
        this.w = 6; // width

        this.d = d; // depth
        this.a = -100; // angle
        this.c = this.x + this.w / 2;

        if (this.charge == "pos") {
            blue = '#5B95CB';
            this.color = blue;
            this.c = this.x + this.w / 2;
        }

        else if (this.charge == "neg") {
            red = '#C15151';
            this.color = red;
            this.x = x;
            this.c = this.x + this.w / 2;
        }
    }

    changeChargeAmount(num) {
        this.chargeAmount = num;
    }

    reverseCharge() {
        if (this.charge == 'neg') {
            this.charge = 'pos';
            blue = '#5B95CB';
            this.color = blue;
            this.c = this.x + this.w / 2;
        }
        else if (this.charge == 'pos') {
            this.charge = 'neg';
            red = '#C15151';
            this.color = red;
            // this.x = mouseX;
            this.c = this.x + this.w / 2;
        }
    }

    updateX(x) {
        this.x = x;
        this.c = this.x + this.w / 2;
    }

    addSide(str) {
        this.sides += str;
    }

    removeSide(str) {
        this.sides.replace(str, "");
    }

    toggleArrows() {
        this.showArrows = !(this.showArrows);
    }
}

