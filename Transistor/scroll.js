totalScenes = 1;
sceneCount = 0;
let scenes = [];

StartScroll = () => {
	let controller = new ScrollMagic.Controller();
	let scene_0 = new ScrollMagic.Scene({
		triggerElement: "#scene0",
	})
		.setClassToggle("#scene0", "fade-in")

		.on("start", () => {
			if (sceneCount == 0) {
				sceneCount = 0.5;
				opening = 0;
			} else {
				sceneCount = 0;
				resetScene();
			}
		})
		.addTo(controller);

	let scene1 = new ScrollMagic.Scene({
		triggerElement: "#scene1",
	})
		.setClassToggle("#scene1", "fade-in")
		.on("start", () => {
			if (sceneCount == 0.5) {
				sceneCount = 1;
				resetScene();
			} else {
				sceneCount = 0.5;
			}
		})
		.addTo(controller);

	let scene2 = new ScrollMagic.Scene({
		triggerElement: "#scene2",
	})
		.setClassToggle("#scene2", "fade-in")
		.on("start", () => {
			if (sceneCount == 1) {
				sceneCount = 2;
				resetScene();
			} else {
				sceneCount = 1;
				resetScene();
			}
		})
		.addTo(controller);

	let scene3 = new ScrollMagic.Scene({
		triggerElement: "#scene3",
	})
		.setClassToggle("#scene3", "fade-in")
		.on("start", () => {
			if (sceneCount == 2) {
				sceneCount = 3;
				resetScene();
			} else {
				sceneCount = 2;
				resetScene();
			}
		})
		.addTo(controller);

	let scene4 = new ScrollMagic.Scene({
		triggerElement: "#scene4",
	})
		.setClassToggle("#scene4", "fade-in")
		.on("start", () => {
			if (sceneCount == 3) {
				sceneCount = 4;
				resetScene();
			} else {
				sceneCount = 3;
				resetScene();
			}
		})
		.addTo(controller);

	let scene5 = new ScrollMagic.Scene({
		triggerElement: "#scene5",
	})
		.setClassToggle("#scene5", "fade-in")
		.on("start", () => {
			if (sceneCount == 4) {
				sceneCount = 5;
				resetScene();
			} else {
				sceneCount = 4;
				resetScene();
			}
		})
		.addTo(controller);

	// let scene6 = new ScrollMagic.Scene({
	// 	triggerElement: "#scene6",
	// })
	// 	.setClassToggle("#scene6", "fade-in")
	// 	.on("start", () => {
	// 		if (sceneCount == 5) {
	// 			sceneCount = 6;
	// 			resetScene();
	// 		} else {
	// 			sceneCount = 5;
	// 			resetScene();
	// 		}
	// 	})
	// 	.addTo(controller);

	// let scene7 = new ScrollMagic.Scene({
	// 	triggerElement: "#scene7",
	// })
	// 	.setClassToggle("#scene7", "fade-in")
	// 	.on("start", () => {
	// 		if (sceneCount == 6) {
	// 			sceneCount = 7;
	// 			resetScene();
	// 		} else {
	// 			sceneCount = 6;
	// 			resetScene();
	// 		}
	// 	})
	// 	.addTo(controller);

	// let scene8 = new ScrollMagic.Scene({
	// 	triggerElement: "#scene8",
	// })
	// 	.setClassToggle("#scene8", "fade-in")
	// 	.on("start", () => {
	// 		if (sceneCount == 7) {
	// 			sceneCount = 8;
	// 			resetScene();
	// 		} else {
	// 			sceneCount = 7;
	// 			resetScene();
	// 		}
	// 	})
	// 	.addTo(controller);

	// let scene9 = new ScrollMagic.Scene({
	// 	triggerElement: "#scene9",
	// })
	// 	.setClassToggle("#scene9", "fade-in")
	// 	.on("start", () => {
	// 		if (sceneCount == 8) {
	// 			sceneCount = 9;
	// 			resetScene();
	// 		} else {
	// 			sceneCount = 8;
	// 			resetScene();
	// 		}
	// 	})
	// 	.addTo(controller);

	// let scene10 = new ScrollMagic.Scene({
	// 	triggerElement: "#scene10",
	// })
	// 	.setClassToggle("#scene10", "fade-in")
	// 	.on("start", () => {
	// 		if (sceneCount == 9) {
	// 			sceneCount = 10;
	// 			resetScene();
	// 		} else {
	// 			sceneCount = 9;
	// 			resetScene();
	// 		}
	// 	})
	// 	.addTo(controller);
};
