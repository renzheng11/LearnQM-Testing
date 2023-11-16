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
                
            } else {
                sceneCount = 3;
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

            } else {
                sceneCount = 6;
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
                
            } else {
                sceneCount = 7;
            }
        })
        .addTo(controller);
}