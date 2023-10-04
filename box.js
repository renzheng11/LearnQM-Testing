class Box {
    constructor(showBox, charge, dim3, chargeAmount, midzone, arrowLength, showArrows, showPurple, sides, showCharges, x, y, w, d) {
        this.showBox = showBox;
        this.charge = charge;
        this.dim3 = dim3;
        this.arrowLength = arrowLength;
        this.showArrows = showArrows;
        this.showPurple = showPurple;
        this.chargeAmount = chargeAmount;
        this.midzone = midzone;
        this.showCharges = showCharges;
        this.sides = sides;
        

        this.x = x; // x position
        this.y = y; // y position 
        this.h = 300; // height
        this.w = w; // width

        this.d = d; // depth
        this.a = -100; // angle
        this.c = this.x + this.w / 2;

        if (this.charge == "pos") {
            blue = ('#5B95CB');
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

    updateCharge(num) {
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

    updateW(w) {
        this.w = w;
    }

    addSide(str) {
        this.sides += str;
    }

    removeSide(str) {
        this.sides.replace(str, "");
    }

    toggleArrows(value) {
        this.showArrows = value;
        // console.log(this.showArrows);
        // value == ""? this.showArrows = !(this.showArrows): null;
        // value == true ? this.showArrows = true: null;
        // value == false ? this.showArrows = false : null;
        // console.log("after toggle arrows");
        // console.log(this.showArrows);
    }

    togglePurple(value) {
        this.showPurple = value;
    }

    toggleShowBox(value) {
        this.showBox = value;
    }
}

