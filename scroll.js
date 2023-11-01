totalScenes = 1;
sceneCount = 0;
let scenes = []

StartScroll = () => {
    let controller = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene1'
    })
        .setClassToggle('#scene1', 'fade-in')
        .on('start', () => {
            if (sceneCount == 0) {
                sceneCount = 1;
                updateTotalCharge();
                resetCharges(box1);
            } else {
                sceneCount = 0;
            }
        })
        .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene2'
    })
        .setClassToggle('#scene2', 'fade-in')
        .on('start', () => {
            if (sceneCount == 1) {
                sceneCount = 2; 
                resetCharges(box2);
                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 1;
                
            }
        })
        .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '#scene3'
    })
        .setClassToggle('#scene3', 'fade-in')
        .on('start', () => {
            if (sceneCount == 2) {
                sceneCount = 3;
                resetCharges(box3);
                resetScene();
            } else {
                sceneCount = 2;
                
            }
        })
        .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '#scene4'
    })
        .setClassToggle('#scene4', 'fade-in')
        .on('start', () => {
            if (sceneCount == 3) {
                sceneCount = 4;
                // document.getElementById("screen4").checked = false;
                document.getElementById("posToggle4").checked = true;
                document.getElementById("negToggle4").checked = true;
                document.getElementById("purpleToggle4").checked = true;
                resetCharges(box4);
                resetCharges(negbox4);

                currNegBoxes = [negbox4];
                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 3;

                // resetCharges(box4);
                // resetCharges(negbox4);
                // resetScene();
            }
        })
        .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '#scene5'
    })
        .setClassToggle('#scene5', 'fade-in')
        .on('start', () => {
            if (sceneCount == 4) {
                sceneCount = 5;
                // document.getElementById("screen5").checked = false;
                document.getElementById("posToggle5").checked = true;
                document.getElementById("negToggle5").checked = true;
                document.getElementById("purpleToggle5").checked = true;
                resetCharges(box5);
                resetCharges(negbox5);
                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 4;

            }
        })
        .addTo(controller);

    let showGraph = new ScrollMagic.Scene({
        triggerElement: '#d3-viz'
    })
        .setClassToggle('#d3-viz', 'fade-in')
        .addTo(controller);

    let scene6 = new ScrollMagic.Scene({
        triggerElement: '#scene6'
    })
        .setClassToggle('#scene6', 'fade-in')
        .on('start', () => {
            if (sceneCount == 5) {
                sceneCount = 6;
                // document.getElementById("screen6").checked = false;

                document.getElementById("posToggle6").checked = true;
                // document.getElementById("negToggle6").checked = true;
                document.getElementById("negToggle6").checked = true;
                // document.getElementById("negToggle6b").checked = true;
                document.getElementById("purpleToggle6").checked = true;

                resetCharges(box6);
                resetCharges(negbox6a);
                resetCharges(negbox6b);

                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 5;
            }
        })
        .addTo(controller);

    let scene7 = new ScrollMagic.Scene({
        triggerElement: '#scene7'
    })
        .setClassToggle('#scene7', 'fade-in')
        .on('start', () => {
            if (sceneCount == 6) {
                sceneCount = 7;
                // document.getElementById("screen7").checked = false;
                document.getElementById("posToggle7").checked = true;
                // document.getElementById("negToggle7a").checked = true;
                // document.getElementById("negToggle7b").checked = true;
                document.getElementById("negToggle7").checked = true;
                document.getElementById("purpleToggle7").checked = true;
                document.getElementById("flow").value = 1;
                // document.getElementById("purpleToggle7").checked = true;

                resetCharges(box7);
                resetCharges(negbox7a);
                resetCharges(negbox7b);
                resetCharges(negbox7c);
                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 6;
                resetCharges(box7);
                resetCharges(negbox7a);
                resetCharges(negbox7b);
                resetCharges(negbox7c);
            }
        })
        .addTo(controller);

    let scene8 = new ScrollMagic.Scene({
        triggerElement: '#scene8'
    })
        .setClassToggle('#scene8', 'fade-in')
        .on('start', () => {
            if (sceneCount == 7) {
                sceneCount = 8;
                resetCharges(box8);
                resetCharges(negbox8);
                updateTotalCharge();
                resetScene();
            } else {
                sceneCount = 7;
            }
        })
        .addTo(controller);

    let scene9 = new ScrollMagic.Scene({
        triggerElement: '#scene9'
    })
        .setClassToggle('#scene9', 'fade-in')
        .on('start', () => {
            if (sceneCount == 8) {
                sceneCount = 9;
            } else {
                sceneCount = 8;
            }
        })
        .addTo(controller);
}