totalScenes = 1;
sceneCount = 0;
let scenes = []

StartScroll = () => {
    let controller = new ScrollMagic.Controller();

    let scene_1 = new ScrollMagic.Scene({
        triggerElement: '#scene_1'
    })
        .setClassToggle('#scene_1', 'fade-in')
        .on('start', () => {
            if (sceneCount == 0) {
                sceneCount = 1;
            } else {
                sceneCount = 0;
            }
        })
        .addTo(controller);

    let scene_2 = new ScrollMagic.Scene({
        triggerElement: '#scene_2'
    })
        .setClassToggle('#scene_2', 'fade-in')
        .on('start', () => {
            if (sceneCount == 1) {
                sceneCount = 2;
            } else {
                sceneCount = 1;
            }
        })
        .addTo(controller);

    let scene_3 = new ScrollMagic.Scene({
        triggerElement: '#scene_3'
    })
        .setClassToggle('#scene_3', 'fade-in')
        .on('start', () => {
            if (sceneCount == 2) {
                sceneCount = 3;
            } else {
                sceneCount = 2;
            }
        })
        .addTo(controller);

    let scene_4 = new ScrollMagic.Scene({
        triggerElement: '#scene_4'
    })
        .setClassToggle('#scene_4', 'fade-in')
        .on('start', () => {
            if (sceneCount == 3) {
                sceneCount = 4;
                document.getElementById("screen4").checked = false;
                document.getElementById("blueToggle4").checked = true;
                document.getElementById("redToggle4").checked = true;
                document.getElementById("purpleToggle4").checked = true;
                // bluebox4.toggleArrows(true);
            } else {
                sceneCount = 3;
            }
        })
        .addTo(controller);

    let scene_5 = new ScrollMagic.Scene({
        triggerElement: '#scene_5'
    })
        .setClassToggle('#scene_5', 'fade-in')
        .on('start', () => {
            if (sceneCount == 4) {
                sceneCount = 5;
                document.getElementById("screen5").checked = false;
                document.getElementById("blueToggle5").checked = true;
                document.getElementById("redToggle5").checked = true;
                document.getElementById("purpleToggle5").checked = true;
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

    let scene_6 = new ScrollMagic.Scene({
        triggerElement: '#scene_6'
    })
        .setClassToggle('#scene_6', 'fade-in')
        .on('start', () => {
            if (sceneCount == 5) {
                sceneCount = 6;
                document.getElementById("screen6").checked = false;
                document.getElementById("blueToggle6").checked = true;
                // document.getElementById("redToggle6").checked = true;
                document.getElementById("redToggle6a").checked = true;
                document.getElementById("redToggle6b").checked = true;
                document.getElementById("purpleToggle6").checked = true;
            } else {
                sceneCount = 5;
            }
        })
        .addTo(controller);

    let scene_7 = new ScrollMagic.Scene({
        triggerElement: '#scene_7'
    })
        .setClassToggle('#scene_7', 'fade-in')
        .on('start', () => {
            if (sceneCount == 6) {
                sceneCount = 7;
                document.getElementById("screen7").checked = false;
                document.getElementById("blueToggle7").checked = true;
                document.getElementById("redToggle7a").checked = true;
                document.getElementById("redToggle7b").checked = true;
                document.getElementById("redToggle7c").checked = true;
                document.getElementById("purpleToggle7").checked = true;
            } else {
                sceneCount = 6;
            }
        })
        .addTo(controller);

    let scene_8 = new ScrollMagic.Scene({
        triggerElement: '#scene_8'
    })
        .setClassToggle('#scene_8', 'fade-in')
        .on('start', () => {
            if (sceneCount == 7) {
                sceneCount = 8;
            } else {
                sceneCount = 7;
            }
        })
        .addTo(controller);

    // let scene_9 = new ScrollMagic.Scene({
    //     triggerElement: '#scene_9'
    // })
    //     .setClassToggle('#scene_9', 'fade-in')
    //     .on('start', () => {
    //         if (sceneCount == 8) {
    //             sceneCount = 9;
    //         } else {
    //             sceneCount = 8;
    //         }
    //     })
    //     .addTo(controller);
}